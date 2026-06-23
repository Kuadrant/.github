# Contributing to Kuadrant

Thanks for your interest in contributing to Kuadrant! This guide explains the process for getting your contributions accepted.

## Issue Triage

All new issues are automatically labelled with `triage/needs-triage`. This means a maintainer hasn't reviewed it yet. Issues move through these stages:

| Label | Meaning |
|---|---|
| `triage/needs-triage` | New issue, awaiting maintainer review |
| `triage/needs-discussion` | Needs further investigation or discussion before a decision |
| `triage/accepted` | Reviewed and accepted — ready for work |

Only maintainers can change triage labels. If you think an issue should be re-prioritised, leave a comment and a maintainer will take a look.

## Opening a Pull Request

Before opening a PR, make sure:

1. **There is a linked issue.** Every PR must reference an issue — use `Fixes #123` or `Closes #123` in the PR description, or link it via the GitHub sidebar.
2. **The issue has been triaged.** The linked issue must have the `triage/accepted` label. If the issue hasn't been triaged yet, wait for a maintainer to review it before opening a PR.
3. **The issue isn't already being worked on.** Check if there's already an open PR for the same issue from another contributor.

PRs that don't meet these requirements will be automatically closed with a comment explaining what's needed. Your branch won't be deleted, so you can reopen the PR once the requirements are met.

## Workflow

1. Find an issue labelled `triage/accepted` that you'd like to work on
2. Comment on the issue to let maintainers know you're picking it up
3. Fork the repo and create a branch for your work
4. Open a PR with `Fixes #<issue-number>` in the description
5. Wait for review

If you've found a bug or have a feature idea that doesn't have an issue yet, open an issue first and wait for it to be triaged before starting work. This helps avoid wasted effort on changes that might not align with the project's direction.
