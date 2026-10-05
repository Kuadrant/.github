# Contributing to Kuadrant

For general contribution guidance, see the [Kuadrant contributing guide](https://kuadrant.io/contributing/). This document covers the automated governance rules that apply across Kuadrant repositories.

## Issue Triage

All new issues are automatically labelled with `triage/needs-triage`. Once the team has discussed and prioritised an issue, a maintainer will move it to `triage/accepted`.

| Label | Meaning |
|---|---|
| `triage/needs-triage` | New issue, awaiting maintainer review |
| `triage/accepted` | Reviewed, prioritised, and ready for work |

Only maintainers can change triage labels.

## Pull Request Requirements

Every PR from an external contributor must:

1. **Link to an issue** — use `Fixes #123` or `Closes #123` in the PR description, or link it via the GitHub sidebar.
2. **Link to a triaged issue** — the linked issue must have the `triage/accepted` label.
3. **Not target a maintainers-only issue** — issues labelled `maintainers-only` are reserved for the maintainer team.
4. **Not duplicate existing work** — the linked issue must not already have an open PR from another contributor.

PRs that don't meet these requirements will be automatically closed. Your branch won't be deleted, so you can reopen once the requirements are met.

Maintainers can approve an exception by adding `triage/accepted` directly to the PR. A PR with this label skips all contributor-governance PR checks when opened or reopened, even if it has no linked issue. Adding the label does not reopen a closed PR; reopen it after applying the label.

PRs from Kuadrant org members, GitHub App bots, and accounts listed in the `CONTRIB_ALLOWLIST` Actions variable also skip these checks. The allowlist is a JSON array of GitHub usernames, managed at the org level for trusted contributors and automation accounts registered as regular users.
