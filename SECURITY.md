# Security Policy

Security is a top priority for the Kuadrant project. If you believe you have
found a security vulnerability in any repository under the
[Kuadrant GitHub organization](https://github.com/Kuadrant), we encourage you
to report it responsibly as described below.

## Reporting a Vulnerability

Please report security vulnerabilities through
[GitHub Private Vulnerability Reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability).

To file a report:

1. Navigate to the **Security** tab of the affected repository.
2. Click **"Report a vulnerability"** under **Advisories**.
3. Fill in the form with as much detail as possible to help us better understand 
   the scope and the possible issue, including:
   * Type of issue (e.g. data breach, buffer overflow, SQL injection, etc.)
   * Full paths of source file(s) related to the manifestation of the issue
   * The location of the affected source code (tag/branch/commit or direct URL)
   * Any special configuration required to reproduce the issue
   * Step-by-step instructions to reproduce the issue
   * Proof-of-concept or exploit code (if possible)
   * Impact of the issue, including how an attacker might exploit the issue

Your report will be visible only to the repository maintainers. **Please do not
open a public GitHub issue for security vulnerabilities.**

We ask reporters to keep vulnerability details confidential until a fix is available 
and a public advisory has been published. We will credit reporters in 
the advisory unless they prefer to remain anonymous.

## What to Expect

- **Acknowledgement** within 5 business days of your report.
- A determination of the issue's validity and severity, typically within
  10 business days.
- Coordination on a fix and disclosure timeline. We aim to release patches
  as soon as possible and will work with you on a coordinated disclosure.

## Out of Scope

- Vulnerability scanner output without confirmation that the issue actually
  affects a Kuadrant project. We use these tools ourselves; unverified scanner
  reports may be closed without action.
- Issues in third-party dependencies that do not affect Kuadrant when used as
  intended. Please report these to the upstream project.
