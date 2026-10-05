import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const workflow = readFileSync(
  new URL("../.github/workflows/contributor-governance.yml", import.meta.url),
  "utf8"
);
const script = workflow
  .split("  check-pr:\n")[1]
  .split("          script: |\n")[1]
  .split("\n")
  .map((line) => line.slice(12))
  .join("\n");

async function checkPR({
  author = "external-contributor",
  type = "User",
  labels = [],
  allowlist = [],
  member = false,
  body = "",
  issues = [],
} = {}) {
  const calls = [];
  const record = (name) => async (args) => {
    calls.push({ name, args });
  };
  await vm.runInNewContext(`(async () => {\n${script}\n})()`, {
    context: {
      actor: "maintainer-reopening-the-pr",
      repo: { owner: "Kuadrant", repo: "kuadrant-console-plugin" },
      payload: {
        action: "reopened",
        pull_request: {
          number: 884,
          title: "chore(deps): bump fast-uri from 3.1.7 to 3.1.8",
          body,
          user: { login: author, type },
          labels: labels.map((name) => ({ name })),
        },
      },
    },
    console: { log() {} },
    process: { env: { CONTRIB_ALLOWLIST: JSON.stringify(allowlist) } },
    fetch: async (url) => {
      calls.push({ name: "membership", args: url });
      return { status: member ? 204 : 404 };
    },
    github: {
      graphql: async () => {
        calls.push({ name: "linked-issues" });
        return {
          repository: {
            pullRequest: { closingIssuesReferences: { nodes: issues } },
          },
        };
      },
      rest: {
        issues: {
          createComment: record("comment"),
          get: async (args) => {
            calls.push({ name: "get-issue", args });
            return { data: { pull_request: {} } };
          },
        },
        pulls: {
          update: record("update-pr"),
          list: async () => ({ data: [] }),
        },
      },
    },
  });
  return calls;
}

function assertClosed(calls) {
  const updates = calls.filter((call) => call.name === "update-pr");
  assert.equal(updates.length, 1);
  assert.equal(updates[0].args.pull_number, 884);
  assert.equal(updates[0].args.state, "closed");
}

test("an allowlisted machine user skips PR enforcement without an issue", async () => {
  const calls = await checkPR({
    author: "redhat-chai-bot",
    allowlist: ["redhat-chai-bot"],
    body: "Replaces PR #874, which could not pass CI (see #832).",
  });
  assert.deepEqual(calls, []);
});

test("a GitHub App bot remains exempt", async () => {
  assert.deepEqual(
    await checkPR({ author: "dependabot[bot]", type: "Bot" }),
    []
  );
});

test("an org member remains exempt", async () => {
  const calls = await checkPR({ member: true });
  assert.deepEqual(
    calls.map((call) => call.name),
    ["membership"]
  );
});

test("triage/accepted on a reopened PR skips all PR enforcement", async () => {
  const calls = await checkPR({ labels: ["triage/accepted"] });
  assert.deepEqual(calls, []);
});

test("a maintainer reopening an unapproved external PR does not exempt its author", async () => {
  assertClosed(await checkPR());
});

test("unrelated PR labels do not bypass enforcement", async () => {
  assertClosed(await checkPR({ labels: ["triage/needs-triage", "bug"] }));
});

test("mentioning triage/accepted in the PR body does not bypass enforcement", async () => {
  assertClosed(await checkPR({ body: "This PR is triage/accepted." }));
});

test("a similarly named user does not inherit the allowlist exemption", async () => {
  assertClosed(
    await checkPR({
      author: "redhat-chai-bot-helper",
      allowlist: ["redhat-chai-bot"],
    })
  );
});

test("an external PR with an open accepted issue still passes normal checks", async () => {
  const calls = await checkPR({
    issues: [
      {
        number: 123,
        state: "OPEN",
        labels: { nodes: [{ name: "triage/accepted" }] },
      },
    ],
  });
  assert.equal(
    calls.some((call) => call.name === "update-pr" || call.name === "comment"),
    false
  );
});
