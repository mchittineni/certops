export const GITHUB_GHAS_QUESTIONS_6 = [
  {
    id: "gh-500-126",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Remediating High-Entropy Credentials in Public Repositories",
    scenario: "A software developer accidentally commits an active AWS IAM secret access key to a public GitHub repository. Secret Scanning detects the token and alerts the security team within 15 seconds.",
    question: "What is the first and most critical action the security team should execute?",
    options: [
      { id: 'A', text: "Ask support to purge the cached copy of the public repository" },
      { id: 'B', text: "Add the file to `.gitignore` and push a commit removing it" },
      { id: 'C', text: "Deactivate or rotate the exposed key in the provider's own console" },
      { id: 'D', text: "Reset the branch past the commit and force-push the history" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Once a credential is pushed to a public repository, assume it is compromised immediately by automated scanners. The primary and urgent step is rotating or revoking the key in the identity provider. Force-pushing or git-filtering removes history from GitHub but does not protect against credentials already harvested by malicious actors.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Secret Scanning", "Incident Response", "AWS", "Remediation"]
  },
  {
    id: "gh-500-127",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Enforcing Push Protection Bypass Justification Policies",
    scenario: "An enterprise security director notices that developers frequently bypass Push Protection blocks using the web link without executive approval, committing test secrets.",
    question: "Which organizational governance control should the administrator enforce to restrict bypass capabilities?",
    options: [
      { id: 'A', text: "Require security manager approval for each push protection bypass at organization level" },
      { id: 'B', text: "Revoke write access from developers and route every change through a pull request" },
      { id: 'C', text: "Turn secret scanning off for the private repositories that raise the most alerts" },
      { id: 'D', text: "Distribute a pre-commit hook that runs the same patterns on each developer's machine" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GitHub Advanced Security allows enterprise and organization owners to enforce delegated bypass review: developers cannot unilaterally bypass a Push Protection block unless a designated security team member or repository administrator reviews and approves the request.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations",
    tags: ["Push Protection", "Governance", "Bypass", "Security Policy"]
  },
  {
    id: "gh-500-128",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Crafting Non-Backtracking Custom Secret Scanning Regex",
    scenario: "An organization issues proprietary API tokens with the format 'corp_sec_' followed by 32 hexadecimal characters. A security analyst configures a custom secret pattern.",
    question: "Which regular expression correctly and efficiently matches this secret without catastrophic backtracking risk?",
    options: [
      { id: 'A', text: "^corp_sec_([0-9a-fA-F]{32})$" },
      { id: 'B', text: "corp_sec_[0-9a-fA-F]{32}" },
      { id: 'C', text: "(corp_sec_([0-9a-fA-F]+)+)" },
      { id: 'D', text: "corp_sec_.*[0-9a-fA-F]+" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The pattern `corp_sec_[0-9a-fA-F]{32}` directly matches the prefix followed by exactly 32 hexadecimal characters without unanchored greedy wildcards or nested quantifiers that cause Regular Expression Denial of Service (ReDoS).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Regex", "ReDoS", "Secret Scanning"]
  },
  {
    id: "gh-500-129",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Secret Scanning Dry Run Evaluation",
    scenario: "Before activating a new custom secret scanning pattern organization-wide, the security architect wants to verify that the pattern will not produce hundreds of false positive alerts.",
    question: "Which feature in GitHub Advanced Security enables this pre-flight pattern verification?",
    options: [
      { id: 'A', text: "Running the expression through a local test script against a clone of the repositories" },
      { id: 'B', text: "Publishing the pattern in audit mode, which records matches for a week before enforcing" },
      { id: 'C', text: "The dry run on the pattern definition page, which shows prospective matches without raising alerts" },
      { id: 'D', text: "Deploying the pattern to one disposable repository seeded with historical commits" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Custom secret scanning patterns support a 'Dry run' mode. When executed, GitHub scans the organization's commit history and displays the number of matching instances and sample matches, enabling the author to refine boundaries before publishing live alerts.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Dry Run", "Custom Patterns", "Testing", "Governance"]
  },
  {
    id: "gh-500-130",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Automated Token Invalidation for Supported Cloud Providers",
    scenario: "A developer commits a live GitHub Personal Access Token to a public repository. A few seconds later, the developer finds that the token can no longer authenticate against the API.",
    question: "What mechanism caused the personal access token to stop functioning?",
    options: [
      { id: 'A', text: "The branch protection rules revoked the account's credentials" },
      { id: 'B', text: "The Actions runner placed the token into a quarantine vault" },
      { id: 'C', text: "The remote rejected it because its SSL certificate had expired" },
      { id: 'D', text: "The partner program notified the provider, which revoked the token" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Because the token was pushed to a public repository, secret scanning sent the match to the token's issuer, which for a personal access token is GitHub itself, and the token was revoked. Revocation through the partner program happens only for public sources: a token found in a private repository alerts the repository administrators and the committer and is not sent to the issuer. Branch protection, Actions runners and TLS certificates play no part in revoking credentials.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Automated Revocation", "PATs", "Partner Integration", "Incident Response"]
  },
  {
    id: "gh-500-131",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Restricting Secret Scanning Alert Visibility",
    scenario: "An audit identifies that junior developers in an organization can view raw secret alert strings, which allows unauthorized staff to see active production database passwords.",
    question: "How should repository permissions be configured to prevent developers from viewing raw secret tokens?",
    options: [
      { id: 'A', text: "Remove the developers from the repository's collaborator list entirely" },
      { id: 'B', text: "Disable secret scanning on the repository holding the credentials" },
      { id: 'C', text: "Give developers write access without the token-viewing security permission" },
      { id: 'D', text: "Require a second factor before the security tab can be opened" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "By default, users with Admin or Security Manager permissions can view secret alert tokens. On enterprise plans, custom roles can decouple alert triage from the ability to reveal raw unmasked secret values, preserving least privilege.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["RBAC", "Least Privilege", "Secret Scanning", "Permissions"]
  },
  {
    id: "gh-500-132",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Secret Scanning Webhook Event Handling",
    scenario: "A SecOps team wants to trigger an automated Lambda function in AWS to revoke compromised IAM keys the instant Secret Scanning discovers them in a commit.",
    question: "Which GitHub webhook event should the team subscribe to for real-time alerting?",
    options: [
      { id: 'A', text: "secret_scanning_alert" },
      { id: 'B', text: "workflow_job" },
      { id: 'C', text: "security_advisory" },
      { id: 'D', text: "push" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `secret_scanning_alert` webhook event emits JSON payloads with action `created`, `resolved`, or `reopened` whenever an alert state changes, allowing automated SIEM/SOAR integration for instant credential containment.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#secret_scanning_alert",
    tags: ["Webhooks", "Automation", "SOAR", "Incident Response"]
  },
  {
    id: "gh-500-133",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Secret Scanning Alert Resolution Criteria",
    scenario: "A security analyst investigates a secret scanning alert and discovers the flagged token is a dummy credential in a unit test file (e.g. 'AKIAIOSFODNN7EXAMPLE').",
    question: "Which resolution reason should the analyst choose when closing the alert?",
    options: [
      { id: 'A', text: "False positive" },
      { id: 'B', text: "Won't fix" },
      { id: 'C', text: "Used in tests" },
      { id: 'D', text: "Revoked" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When a credential matches a valid pattern format but is solely utilized as dummy mock data for unit testing, the appropriate resolution reason is 'Used in tests'. This preserves historical context while suppressing active notifications.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Triage", "Alerts", "Resolution", "Best Practices"]
  },
  {
    id: "gh-500-134",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Push Protection Activation via Web Console",
    scenario: "A developer attempts to push code through the GitHub web UI by editing a configuration file that contains a live Slack webhook URL. Push protection is enabled.",
    question: "What is the expected behavior in the GitHub web interface?",
    options: [
      { id: 'A', text: "The repository's visibility is switched to private until the secret is removed" },
      { id: 'B', text: "The file is committed with the matched value redacted from the blob" },
      { id: 'C', text: "The commit succeeds and an email warning goes to the organization owner" },
      { id: 'D', text: "The commit is blocked, with options to remove the secret or give a bypass reason" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Push Protection intercepts commits made through both the git command line and the GitHub web interface (and web-based editors like codespaces), displaying a blocking dialog that prevents the commit from being recorded.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations",
    tags: ["Push Protection", "Web UI", "Security"]
  },
  {
    id: "gh-500-135",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Auditing Push Protection Bypasses via Enterprise Audit Log",
    scenario: "Compliance auditors require evidence of all instances where developers bypassed push protection blocks during the past fiscal quarter.",
    question: "Which audit log action should the security team filter for in the Enterprise Audit Log?",
    options: [
      { id: 'A', text: "code_scanning.dismiss_alert" },
      { id: 'B', text: "repository_secret_scanning.disable" },
      { id: 'C', text: "secret_scanning.bypass" },
      { id: 'D', text: "secret_scanning_push_protection.bypass" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Each time a developer bypasses a push protection block, GitHub records the `secret_scanning_push_protection.bypass` audit log event, so filtering the enterprise audit log on that action lists every bypass in the quarter. There is no `secret_scanning.bypass` action. A code scanning alert dismissal is not a push protection bypass, and disabling secret scanning on a repository is a configuration change rather than a bypass of a block.",
    referenceUrl: "https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise",
    tags: ["Audit Log", "Compliance", "Push Protection", "Governance"]
  },
  {
    id: "gh-500-136",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Validity Check Capabilities in Secret Scanning",
    scenario: "When viewing a detected secret in the alert dashboard, the status displays 'Active' with a green indicator.",
    question: "How did GitHub determine that the exposed credential is valid without having access to the customer's cloud account?",
    options: [
      { id: 'A', text: "It decrypted the token with the organization's own encryption key" },
      { id: 'B', text: "The developer who committed the token marked it active on the alert" },
      { id: 'C', text: "It sent a non-destructive check to the provider's validation endpoint" },
      { id: 'D', text: "It signed in to the customer's account with the detected credential" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GitHub's validity check feature works by issuing authenticated, non-destructive API requests directly to partner verification endpoints (e.g. AWS STS get-caller-identity or Slack auth.test) using the found credential to verify whether it remains active.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-validity-checks",
    tags: ["Validity Check", "Tokens", "Partner Integration"]
  },
  {
    id: "gh-500-137",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Preventing False Positives in Custom Secret Patterns",
    scenario: "A custom secret pattern for internal tokens begins matching random commit hashes in documentation markdown files, causing alert flooding.",
    question: "Which configuration adjustment in the custom pattern definition resolves this issue?",
    options: [
      { id: 'A', text: "Add the documentation paths to the pattern's own exclusion list for the repository" },
      { id: 'B', text: "Lower the pattern's match threshold so only exact token shapes are reported at all" },
      { id: 'C', text: "Restrict the pattern to the repositories where that credential format is actually used" },
      { id: 'D', text: "Raise the minimum length and add explicit start and end boundaries to the expression" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Refining custom patterns by adding strict prefix constraints (e.g. matching an exact `sec_live_` literal prefix) and utilizing before/after delimiter rules prevents generic hex hashes from matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Regex", "False Positives", "Optimization"]
  },
  {
    id: "gh-500-138",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Push Protection Delegation for Multi-Tenant Organizations",
    scenario: "An enterprise wants to allow department leads to manage Push Protection settings for their respective repositories without granting them full Organization Owner privileges.",
    question: "Which GitHub permission model satisfies this governance requirement?",
    options: [
      { id: 'A', text: "Give the leads organization owner rights, restricted by an approval workflow" },
      { id: 'B', text: "Give the leads repository admin, with delegated security configuration administration" },
      { id: 'C', text: "Create a separate enterprise instance for each of the departments involved" },
      { id: 'D', text: "Give the leads the billing manager role, which carries the settings scope" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GitHub Security Configurations paired with repository administrator roles or custom organization roles permit security governance delegation, enabling department leads to manage security policies without granting overarching Enterprise Owner access.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enabling-security-features-in-your-organization",
    tags: ["Governance", "Delegation", "Security Configurations", "RBAC"]
  },
  {
    id: "gh-500-139",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Purging Sensitive Secrets from Git History with git-filter-repo",
    scenario: "A high-privilege credential was committed 6 months ago and exists in hundreds of historical commits across multiple branches.",
    question: "What is the recommended modern tool for stripping the credential from all historical git refs?",
    options: [
      { id: 'A', text: "git rebase -i HEAD~1" },
      { id: 'B', text: "git rm --cached [file] && git commit -m 'delete'" },
      { id: 'C', text: "git-filter-repo (or BFG Repo-Cleaner)" },
      { id: 'D', text: "git clean -fdx" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To purge sensitive data permanently from git commit history, standard commits are insufficient because previous commit objects retain the blob. Git officially recommends `git-filter-repo` (or BFG) to rewrite all tree and commit objects across all refs, followed by a force-push.",
    referenceUrl: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository",
    tags: ["Git History", "git-filter-repo", "Remediation", "Security"]
  },
  {
    id: "gh-500-140",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Secret Scanning Metrics in Security Overview",
    scenario: "A Chief Information Security Officer (CISO) requests a high-level summary showing the total number of open secret alerts and mean time to remediate (MTTR) across 500 enterprise repositories.",
    question: "Where can the security team view this aggregate telemetry natively in GitHub?",
    options: [
      { id: 'A', text: "In the enterprise billing statement" },
      { id: 'B', text: "In the workflow run's log archive" },
      { id: 'C', text: "In the repository insights graphs" },
      { id: 'D', text: "In the organization security overview" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Security Overview dashboard at the organization and enterprise levels consolidates risk metrics, active alerts, bypass trends, and MTTR across Secret Scanning, Dependabot, and Code Scanning for all repositories in one place.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Metrics", "Reporting", "Executive"]
  },
  {
    id: "gh-500-141",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Secret Scanning Scope for GitHub Discussions and Issues",
    scenario: "A customer posts an internal database connection string in a public GitHub Issue comment while filing a bug report.",
    question: "Does GitHub Secret Scanning detect credentials in Issue and Discussion bodies?",
    options: [
      { id: 'A', text: "Yes: in public repos, and in private repos with Secret Protection" },
      { id: 'B', text: "No: it scans only the git objects pushed to the repository" },
      { id: 'C', text: "Only when a workflow submits the content to the scanning API" },
      { id: 'D', text: "Only on private repositories holding an enterprise licence" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Yes. Secret scanning covers issues, pull request descriptions and comments, discussions and wikis as well as git history, in public repositories and in private repositories that have GitHub Secret Protection. The connection string pasted into a public issue comment is therefore detected. Private repositories without Secret Protection get no secret scanning at all, and no workflow or API submission is needed for these surfaces.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Secret Scanning", "Issues", "Discussions", "Scope"]
  },
  {
    id: "gh-500-142",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Custom Pattern Regular Expression Limits",
    scenario: "When authoring a custom pattern, the administrator encounters a validation error indicating the regular expression is invalid.",
    question: "Which regular expression feature is restricted in custom secret scanning patterns to ensure search engine efficiency?",
    options: [
      { id: 'A', text: "Fixed-length string literals inside the pattern" },
      { id: 'B', text: "Nested quantifiers that backtrack exponentially" },
      { id: 'C', text: "Case-insensitive matching across the whole match" },
      { id: 'D', text: "Hexadecimal character classes in the expression" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GitHub validates custom regex patterns against strict performance heuristics and rejects patterns containing nested unbounded quantifiers like `(a+)+` or unbounded lookarounds that cause catastrophic exponential backtracking.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Regex", "Performance", "Validation"]
  },
  {
    id: "gh-500-143",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Secret Scanning Alert Automatic Reopening",
    scenario: "An engineer dismisses a secret scanning alert as 'Revoked'. Two weeks later, a new commit is pushed to a feature branch containing the exact same secret token.",
    question: "How does GitHub Secret Scanning respond to this commit?",
    options: [
      { id: 'A', text: "The alert stays closed and no action is taken" },
      { id: 'B', text: "The committer's access to the repository is suspended" },
      { id: 'C', text: "The branch carrying the commit is deleted immediately" },
      { id: 'D', text: "The alert is reopened and the administrators notified" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "If a secret previously dismissed is pushed again in a new commit or branch, GitHub detects that the secret remains present in active code and automatically reopens the alert, resetting its status to open.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle", "Reopening", "Automation", "Secret Scanning"]
  },
  {
    id: "gh-500-144",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Push Protection: Handling Multiple Secrets in One Git Push",
    scenario: "A developer attempts to push a branch containing 3 distinct commits, where commit 1 contains an AWS key and commit 3 contains a Slack token. Push Protection is active.",
    question: "What is the result of the `git push` operation?",
    options: [
      { id: 'A', text: "The first two commits land and the third is held back for review" },
      { id: 'B', text: "The branch is quarantined until a security manager releases it" },
      { id: 'C', text: "The push is rejected entirely, with a remediation link per detected secret" },
      { id: 'D', text: "The commits are accepted and an alert is raised for each secret" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Push Protection acts as an atomic gate: if any commit in the push transaction contains an un-bypassed detected secret, the entire push is rejected, providing CLI remediation links for each detected token.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations",
    tags: ["Push Protection", "Git", "Atomicity", "CLI"]
  },
  {
    id: "gh-500-145",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Excluding Documentation Paths from Secret Scanning",
    scenario: "A technical writing team maintains mock API examples in documentation markdown files that frequently trigger false positive custom pattern matches.",
    question: "What is the recommended approach to prevent mock documentation examples from triggering alerts?",
    options: [
      { id: 'A', text: "Exclude the documentation paths in `.github/secret_scanning.yml`" },
      { id: 'B', text: "Disable secret scanning on the repository holding the documentation" },
      { id: 'C', text: "Move the documentation into a separate repository without scanning" },
      { id: 'D', text: "Replace the example values with strings that match no known pattern" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Repositories can configure path exclusion rules in `.github/secret_scanning.yml` to instruct the scanning engine to bypass directories containing mock examples or test fixtures, preventing alert fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Exclusions", "Configuration", "Triage", "Best Practices"]
  },
  {
    id: "gh-500-146",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Secret Scanning Licensing on Private Repositories",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "An organization converts an open-source public repository to a private repository. What happens to its Secret Scanning capabilities?",
    options: [
      { id: 'A', text: "The existing secret scanning alerts are deleted when visibility changes" },
      { id: 'B', text: "The repository's history is re-scanned and its alerts raised afresh" },
      { id: 'C', text: "Secret scanning needs a GitHub Secret Protection licence once private" },
      { id: 'D', text: "Secret scanning keeps running at no cost, as it does on public repositories" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Secret scanning and push protection are free on public repositories. On private repositories, secret scanning requires GitHub Secret Protection, which is purchasable on GitHub Team or Enterprise plans, so once the repository becomes private it needs a Secret Protection licence for scanning to continue. Changing visibility does not delete existing alerts or trigger a fresh set of alerts.",
    referenceUrl: "https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security",
    tags: ["GHAS", "Licensing", "Private Repositories"]
  },
  {
    id: "gh-500-147",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Managing Secret Scanning Alerts via GitHub REST API",
    scenario: "A DevSecOps engineer wants to automatically sync GitHub Secret Scanning alerts into an enterprise ServiceNow ticketing system.",
    question: "Which HTTP method and endpoint should the integration script use to list all open secret alerts?",
    options: [
      { id: 'A', text: "DELETE /repos/{owner}/{repo}/secret-scanning/alerts" },
      { id: 'B', text: "GET /repos/{owner}/{repo}/secret-scanning/alerts?state=open" },
      { id: 'C', text: "POST /repos/{owner}/{repo}/secret-scanning/list" },
      { id: 'D', text: "GET /repos/{owner}/{repo}/code-scanning/alerts" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The GitHub REST API provides `GET /repos/{owner}/{repo}/secret-scanning/alerts` with filtering parameters (like `state=open` and `secret_type`), allowing automated polling or synchronization with enterprise ticket queues.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning/secret-scanning",
    tags: ["REST API", "ServiceNow", "Integration", "Automation"]
  },
  {
    id: "gh-500-148",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Pre-Commit Hooks vs. Server-Side Push Protection",
    scenario: "A developer asks why server-side Push Protection is necessary if the engineering team already has pre-commit hooks installed on developer laptops.",
    question: "What is the primary security limitation of client-side git pre-commit hooks?",
    options: [
      { id: 'A', text: "They run locally and can be bypassed with `git commit --no-verify`" },
      { id: 'B', text: "They run only on the platforms the hook script was written for" },
      { id: 'C', text: "They cannot inspect the staged diff, only the commit message" },
      { id: 'D', text: "They slow each commit enough that developers disable them" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Client-side hooks provide helpful immediate feedback to developers, but they cannot be relied upon as a formal security boundary because developers can bypass them using `--no-verify`. Server-side Push Protection enforces a tamper-proof server gate.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations",
    tags: ["Push Protection", "Pre-Commit", "Security Boundary", "Architecture"]
  },
  {
    id: "gh-500-149",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Secret Scanning: Detecting Expired vs. Active Credentials",
    scenario: "An alert appears in the Secret Scanning tab with status 'Revoked'. The developer asks if they still need to remove the token from git history.",
    question: "What is the security best practice regarding revoked credentials remaining in commit history?",
    options: [
      { id: 'A', text: "Ensure the token cannot be reissued, and check no other system shared it" },
      { id: 'B', text: "Rewrite history to drop the commit, after which no rotation is needed" },
      { id: 'C', text: "Leave the revoked token in history, since it can no longer be exploited" },
      { id: 'D', text: "Resolve the alert as a false positive once the token has been revoked" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Even when a token is inactive or revoked, leaving credentials in git history exposes naming conventions, service architecture, and account identifiers. Best practice purges the artifact and conducts a root-cause retrospective.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Best Practices", "Remediation", "Triage"]
  },
  {
    id: "gh-500-150",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Configure and use Secret Protection",
    title: "Secret Scanning: Custom Pattern Multi-Tenant Inheritance",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "An enterprise administrator defines custom secret patterns at the enterprise account level. How are these patterns distributed to member organizations?",
    options: [
      { id: 'A', text: "The patterns apply only to the management repository itself" },
      { id: 'B', text: "Each organization owner copies the pattern into its settings" },
      { id: 'C', text: "Each repository must opt in through a pull request to enable" },
      { id: 'D', text: "The enterprise patterns apply to every organization beneath it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enterprise-level custom secret scanning patterns cascade automatically to all child organizations and repositories, ensuring standardized detection policies across the entire enterprise portfolio.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Enterprise", "Governance", "Custom Patterns", "Multi-Tenant"]
  }
];

export default GITHUB_GHAS_QUESTIONS_6;
