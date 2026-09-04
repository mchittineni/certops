export const GITHUB_GHAS_QUESTIONS_6 = [
  {
    id: "gh-500-126",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Remediating High-Entropy Credentials in Public Repositories",
    scenario: "A software developer accidentally commits an active AWS IAM secret access key to a public GitHub repository. Secret Scanning detects the token and alerts the security team within 15 seconds.",
    question: "What is the first and most critical action the security team should execute?",
    options: [
      { id: 'A', text: "Submit a GitHub support ticket requesting cache deletion of the public repository" },
      { id: 'B', text: "Add the compromised access key to .gitignore and push a new commit" },
      { id: 'C', text: "Immediately deactivate or rotate the exposed access key directly inside the AWS Identity and Access Management (IAM) console" },
      { id: 'D', text: "Delete the commit using git reset --hard HEAD~1 and force-push to the repository" }
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
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Enforcing Push Protection Bypass Justification Policies",
    scenario: "An enterprise security director notices that developers frequently bypass Push Protection blocks using the web link without executive approval, committing test secrets.",
    question: "Which organizational governance control should the administrator enforce to restrict bypass capabilities?",
    options: [
      { id: 'A', text: "Configure Push Protection bypass controls at the organization level to require security manager approval before any detected secret can be pushed" },
      { id: 'B', text: "Configure pre-commit hooks on individual developer laptops" },
      { id: 'C', text: "Revoke write permissions for all developers and require pull requests for every branch" },
      { id: 'D', text: "Disable Secret Scanning across all private repositories to stop sending alerts" }
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
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Crafting Non-Backtracking Custom Secret Scanning Regex",
    scenario: "An organization issues proprietary API tokens with the format 'corp_sec_' followed by 32 hexadecimal characters. A security analyst configures a custom secret pattern.",
    question: "Which regular expression correctly and efficiently matches this secret without catastrophic backtracking risk?",
    options: [
      { id: 'A', text: "^corp_sec_([0-9a-fA-F]{32})$" },
      { id: 'B', text: "(corp_sec_([0-9a-fA-F]+)+)" },
      { id: 'C', text: "corp_sec_.*[0-9a-fA-F]+" },
      { id: 'D', text: "corp_sec_[0-9a-fA-F]{32}" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The pattern `corp_sec_[0-9a-fA-F]{32}` directly matches the prefix followed by exactly 32 hexadecimal characters without unanchored greedy wildcards or nested quantifiers that cause Regular Expression Denial of Service (ReDoS).",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Regex", "ReDoS", "Secret Scanning"]
  },
  {
    id: "gh-500-129",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Dry Run Evaluation",
    scenario: "Before activating a new custom secret scanning pattern organization-wide, the security architect wants to verify that the pattern will not produce hundreds of false positive alerts.",
    question: "Which feature in GitHub Advanced Security enables this pre-flight pattern verification?",
    options: [
      { id: 'A', text: "Using the 'Dry run' feature on the custom pattern definition page to inspect prospective matches against historical commits without generating alerts" },
      { id: 'B', text: "Publishing the pattern to the public GitHub Marketplace" },
      { id: 'C', text: "Running the pattern through a local unit test script outside GitHub" },
      { id: 'D', text: "Deploying the pattern to a single disposable public repository" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom secret scanning patterns support a 'Dry run' mode. When executed, GitHub scans the organization's commit history and displays the number of matching instances and sample matches, enabling the author to refine boundaries before publishing live alerts.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Dry Run", "Custom Patterns", "Testing", "Governance"]
  },
  {
    id: "gh-500-130",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Automated Token Invalidation for Supported Cloud Providers",
    scenario: "A developer commits a live GitHub Personal Access Token to a repository. A few seconds later, the developer finds that the token can no longer authenticate against the API.",
    question: "What mechanism caused the personal access token to stop functioning?",
    options: [
      { id: 'A', text: "GitHub automatically revoked the token through its integrated partner secret scanning notification service" },
      { id: 'B', text: "The git remote rejected the token due to an expired SSL certificate" },
      { id: 'C', text: "GitHub Actions placed the token in a quarantine vault" },
      { id: 'D', text: "The repository's branch protection rules deleted the user account" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For partner patterns and GitHub's own personal access tokens, GitHub Secret Scanning communicates immediately with internal token services or partner APIs to trigger automatic credential revocation, protecting the account before malicious extraction occurs.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Automated Revocation", "PATs", "Partner Integration", "Incident Response"]
  },
  {
    id: "gh-500-131",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Restricting Secret Scanning Alert Visibility",
    scenario: "An audit identifies that junior developers in an organization can view raw secret alert strings, which allows unauthorized staff to see active production database passwords.",
    question: "How should repository permissions be configured to prevent developers from viewing raw secret tokens?",
    options: [
      { id: 'A', text: "Disable Secret Scanning on the repository" },
      { id: 'B', text: "Remove all developers from the repository collaborators list" },
      { id: 'C', text: "Ensure developers hold standard Write roles without the custom 'View secret scanning alert tokens' permission" },
      { id: 'D', text: "Encrypt the secret scanning web console with a separate password" }
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
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Webhook Event Handling",
    scenario: "A SecOps team wants to trigger an automated Lambda function in AWS to revoke compromised IAM keys the instant Secret Scanning discovers them in a commit.",
    question: "Which GitHub webhook event should the team subscribe to for real-time alerting?",
    options: [
      { id: 'A', text: "workflow_job" },
      { id: 'B', text: "security_advisory" },
      { id: 'C', text: "push" },
      { id: 'D', text: "secret_scanning_alert" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `secret_scanning_alert` webhook event emits JSON payloads with action `created`, `resolved`, or `reopened` whenever an alert state changes, allowing automated SIEM/SOAR integration for instant credential containment.",
    referenceUrl: "https://docs.github.com/en/webhooks/webhook-events-and-payloads#secret_scanning_alert",
    tags: ["Webhooks", "Automation", "SOAR", "Incident Response"]
  },
  {
    id: "gh-500-133",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Resolution Criteria",
    scenario: "A security analyst investigates a secret scanning alert and discovers the flagged token is a dummy credential in a unit test file (e.g. 'AKIAIOSFODNN7EXAMPLE').",
    question: "Which resolution reason should the analyst choose when closing the alert?",
    options: [
      { id: 'A', text: "Revoked" },
      { id: 'B', text: "Used in tests" },
      { id: 'C', text: "Won't fix" },
      { id: 'D', text: "False positive" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When a credential matches a valid pattern format but is solely utilized as dummy mock data for unit testing, the appropriate resolution reason is 'Used in tests'. This preserves historical context while suppressing active notifications.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Triage", "Alerts", "Resolution", "Best Practices"]
  },
  {
    id: "gh-500-134",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Activation via Web Console",
    scenario: "A developer attempts to push code through the GitHub web UI by editing a configuration file that contains a live Slack webhook URL. Push protection is enabled.",
    question: "What is the expected behavior in the GitHub web interface?",
    options: [
      { id: 'A', text: "GitHub deletes the file from the repository entirely" },
      { id: 'B', text: "The commit succeeds but sends a warning email to the organization owner" },
      { id: 'C', text: "GitHub converts the repository from public to private" },
      { id: 'D', text: "GitHub blocks the commit and displays a modal warning with options to remove the secret or specify a bypass reason" }
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
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Auditing Push Protection Bypasses via Enterprise Audit Log",
    scenario: "Compliance auditors require evidence of all instances where developers bypassed security gates during the past fiscal quarter.",
    question: "Which audit log action should the security team filter for in the Enterprise Audit Log?",
    options: [
      { id: 'A', text: "secret_scanning.bypass" },
      { id: 'B', text: "repo.create_secret" },
      { id: 'C', text: "hook.create" },
      { id: 'D', text: "code_scanning.dismiss_alert" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Every time a developer bypasses a Push Protection block, GitHub generates the `secret_scanning.bypass` audit log event, recording the committer's identity, timestamp, repository, token type, and justification comment.",
    referenceUrl: "https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise",
    tags: ["Audit Log", "Compliance", "Push Protection", "Governance"]
  },
  {
    id: "gh-500-136",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Validity Check Capabilities in Secret Scanning",
    scenario: "When viewing a detected secret in the alert dashboard, the status displays 'Active' with a green indicator.",
    question: "How did GitHub determine that the exposed credential is valid without having access to the customer's cloud account?",
    options: [
      { id: 'A', text: "The developer who committed the token manually marked it as active" },
      { id: 'B', text: "GitHub sent a non-destructive verification request to the partner provider's public validation endpoint using the detected token" },
      { id: 'C', text: "GitHub logged into the customer's cloud account using stored administrator credentials" },
      { id: 'D', text: "GitHub decrypted the token using the organization's master key" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GitHub's validity check feature works by issuing authenticated, non-destructive API requests directly to partner verification endpoints (e.g. AWS STS get-caller-identity or Slack auth.test) using the found credential to verify whether it remains active.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#about-validity-checks",
    tags: ["Validity Check", "Tokens", "Partner Integration"]
  },
  {
    id: "gh-500-137",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Preventing False Positives in Custom Secret Patterns",
    scenario: "A custom secret pattern for internal tokens begins matching random commit hashes in documentation markdown files, causing alert flooding.",
    question: "Which configuration adjustment in the custom pattern definition resolves this issue?",
    options: [
      { id: 'A', text: "Increase the minimum required character length and define explicit start/end prefix boundaries or regex lookbehind/lookahead assertions" },
      { id: 'B', text: "Exclude all markdown files from git version control" },
      { id: 'C', text: "Mark every future alert as 'Won't fix'" },
      { id: 'D', text: "Disable Secret Scanning on the entire organization" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Refining custom patterns by adding strict prefix constraints (e.g. matching an exact `sec_live_` literal prefix) and utilizing before/after delimiter rules prevents generic hex hashes from matching.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Regex", "False Positives", "Optimization"]
  },
  {
    id: "gh-500-138",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection Delegation for Multi-Tenant Organizations",
    scenario: "An enterprise wants to allow department leads to manage Push Protection settings for their respective repositories without granting them full Organization Owner privileges.",
    question: "Which GitHub permission model satisfies this governance requirement?",
    options: [
      { id: 'A', text: "Grant department leads Billing Manager access" },
      { id: 'B', text: "Store repository admin passwords in a shared spreadsheet" },
      { id: 'C', text: "Create separate GitHub Enterprise instances for every department" },
      { id: 'D', text: "Assign the department leads to the Repository Admin role and use organization security configurations with delegated administration" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub Security Configurations paired with repository administrator roles or custom organization roles permit security governance delegation, enabling department leads to manage security policies without granting overarching Enterprise Owner access.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enabling-security-features-in-your-organization",
    tags: ["Governance", "Delegation", "Security Configurations", "RBAC"]
  },
  {
    id: "gh-500-139",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Purging Sensitive Secrets from Git History with git-filter-repo",
    scenario: "A high-privilege credential was committed 6 months ago and exists in hundreds of historical commits across multiple branches.",
    question: "What is the recommended modern tool for stripping the credential from all historical git refs?",
    options: [
      { id: 'A', text: "git rebase -i HEAD~1" },
      { id: 'B', text: "git clean -fdx" },
      { id: 'C', text: "git-filter-repo (or BFG Repo-Cleaner)" },
      { id: 'D', text: "git rm --cached [file] && git commit -m 'delete'" }
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
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Metrics in Security Overview",
    scenario: "A Chief Information Security Officer (CISO) requests a high-level summary showing the total number of open secret alerts and mean time to remediate (MTTR) across 500 enterprise repositories.",
    question: "Where can the security team view this aggregate telemetry natively in GitHub?",
    options: [
      { id: 'A', text: "In the Actions workflow log archive" },
      { id: 'B', text: "In the organization or enterprise Security Overview dashboard" },
      { id: 'C', text: "In the GitHub Marketplace billing receipt" },
      { id: 'D', text: "In the repository Insights network graph" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Security Overview dashboard at the organization and enterprise levels consolidates risk metrics, active alerts, bypass trends, and MTTR across Secret Scanning, Dependabot, and Code Scanning for all repositories in one place.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Metrics", "Reporting", "Executive"]
  },
  {
    id: "gh-500-141",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Scope for GitHub Discussions and Issues",
    scenario: "A customer posts an internal database connection string in a public GitHub Issue comment while filing a bug report.",
    question: "Does GitHub Secret Scanning detect credentials in Issue and Discussion bodies?",
    options: [
      { id: 'A', text: "Only if the user explicitly triggers a GitHub Actions workflow" },
      { id: 'B', text: "Only if the repository is configured as a private enterprise repository" },
      { id: 'C', text: "Yes, on public repositories Secret Scanning scans Issue titles, descriptions, comments, and Discussions" },
      { id: 'D', text: "No, Secret Scanning only scans git commit objects" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "On public repositories, Secret Scanning covers not only git commits and tags, but also issues, pull request descriptions/comments, and GitHub Discussions, instantly notifying token providers if secrets are pasted publicly.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
    tags: ["Secret Scanning", "Issues", "Discussions", "Scope"]
  },
  {
    id: "gh-500-142",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Custom Pattern Regular Expression Limits",
    scenario: "When authoring a custom pattern, the administrator encounters a validation error indicating the regular expression is invalid.",
    question: "Which regular expression feature is restricted in custom secret scanning patterns to ensure search engine efficiency?",
    options: [
      { id: 'A', text: "Fixed-length string literals" },
      { id: 'B', text: "Case-insensitive matching flags" },
      { id: 'C', text: "Catastrophic nested quantifiers that cause exponential backtracking" },
      { id: 'D', text: "Hexadecimal character classes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GitHub validates custom regex patterns against strict performance heuristics and rejects patterns containing nested unbounded quantifiers like `(a+)+` or unbounded lookarounds that cause catastrophic exponential backtracking.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Custom Patterns", "Regex", "Performance", "Validation"]
  },
  {
    id: "gh-500-143",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Alert Automatic Reopening",
    scenario: "An engineer dismisses a secret scanning alert as 'Revoked'. Two weeks later, a new commit is pushed to a feature branch containing the exact same secret token.",
    question: "How does GitHub Secret Scanning respond to this commit?",
    options: [
      { id: 'A', text: "The alert remains closed and no action is taken" },
      { id: 'B', text: "GitHub suspends the committer's GitHub account" },
      { id: 'C', text: "GitHub automatically reopens the alert and notifies repository administrators" },
      { id: 'D', text: "GitHub automatically deletes the branch immediately" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "If a secret previously dismissed is pushed again in a new commit or branch, GitHub detects that the secret remains present in active code and automatically reopens the alert, resetting its status to open.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Alert Lifecycle", "Reopening", "Automation", "Secret Scanning"]
  },
  {
    id: "gh-500-144",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Push Protection: Handling Multiple Secrets in One Git Push",
    scenario: "A developer attempts to push a branch containing 3 distinct commits, where commit 1 contains an AWS key and commit 3 contains a Slack token. Push Protection is active.",
    question: "What is the result of the `git push` operation?",
    options: [
      { id: 'A', text: "The push is rejected in its entirety, and the CLI error provides distinct remediation URLs for each detected secret" },
      { id: 'B', text: "Commit 1 and 2 are pushed successfully, while commit 3 is dropped" },
      { id: 'C', text: "All commits are accepted, and warning issues are opened" },
      { id: 'D', text: "The branch is renamed automatically to quarantine" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Push Protection acts as an atomic gate: if any commit in the push transaction contains an un-bypassed detected secret, the entire push is rejected, providing CLI remediation links for each detected token.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations",
    tags: ["Push Protection", "Git", "Atomicity", "CLI"]
  },
  {
    id: "gh-500-145",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Excluding Documentation Paths from Secret Scanning",
    scenario: "A technical writing team maintains mock API examples in documentation markdown files that frequently trigger false positive custom pattern matches.",
    question: "What is the recommended approach to prevent mock documentation examples from triggering alerts?",
    options: [
      { id: 'A', text: "Define path exclusions in .github/secret_scanning.yml specifying documentation directories like docs/**" },
      { id: 'B', text: "Delete all documentation from the repository" },
      { id: 'C', text: "Disable Secret Scanning on the entire repository" },
      { id: 'D', text: "Replace all documentation text with binary PDF files" }
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
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning Licensing on Private Repositories",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "An organization converts an open-source public repository to a private repository. What happens to its Secret Scanning capabilities?",
    options: [
      { id: 'A', text: "The repository code is made inaccessible to all users" },
      { id: 'B', text: "All existing secret alerts are permanently deleted" },
      { id: 'C', text: "Secret Scanning requires an active GitHub Advanced Security (GHAS) license seat to continue running on private repositories" },
      { id: 'D', text: "Secret Scanning continues running for free without any license required" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "While Secret Scanning for partner patterns is free for public repositories, enabling Secret Scanning on private or internal repositories requires a GitHub Advanced Security (GHAS) license.",
    referenceUrl: "https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security",
    tags: ["GHAS", "Licensing", "Private Repositories"]
  },
  {
    id: "gh-500-147",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Managing Secret Scanning Alerts via GitHub REST API",
    scenario: "A DevSecOps engineer wants to automatically sync GitHub Secret Scanning alerts into an enterprise ServiceNow ticketing system.",
    question: "Which HTTP method and endpoint should the integration script use to list all open secret alerts?",
    options: [
      { id: 'A', text: "GET /repos/{owner}/{repo}/secret-scanning/alerts?state=open" },
      { id: 'B', text: "GET /repos/{owner}/{repo}/code-scanning/alerts" },
      { id: 'C', text: "DELETE /repos/{owner}/{repo}/secret-scanning/alerts" },
      { id: 'D', text: "POST /repos/{owner}/{repo}/secret-scanning/list" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The GitHub REST API provides `GET /repos/{owner}/{repo}/secret-scanning/alerts` with filtering parameters (like `state=open` and `secret_type`), allowing automated polling or synchronization with enterprise ticket queues.",
    referenceUrl: "https://docs.github.com/en/rest/secret-scanning/secret-scanning",
    tags: ["REST API", "ServiceNow", "Integration", "Automation"]
  },
  {
    id: "gh-500-148",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Pre-Commit Hooks vs. Server-Side Push Protection",
    scenario: "A developer asks why server-side Push Protection is necessary if the engineering team already has pre-commit hooks installed on developer laptops.",
    question: "What is the primary security limitation of client-side git pre-commit hooks?",
    options: [
      { id: 'A', text: "Client-side hooks consume too much cloud bandwidth" },
      { id: 'B', text: "Client-side hooks cannot inspect commit messages" },
      { id: 'C', text: "Client-side hooks run locally and can be easily bypassed or disabled by any developer using git commit --no-verify" },
      { id: 'D', text: "Client-side hooks only work on Windows operating systems" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Client-side hooks provide helpful immediate feedback to developers, but they cannot be relied upon as a formal security boundary because developers can bypass them using `--no-verify`. Server-side Push Protection enforces a tamper-proof server gate.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations",
    tags: ["Push Protection", "Pre-Commit", "Security Boundary", "Architecture"]
  },
  {
    id: "gh-500-149",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning: Detecting Expired vs. Active Credentials",
    scenario: "An alert appears in the Secret Scanning tab with status 'Revoked'. The developer asks if they still need to remove the token from git history.",
    question: "What is the security best practice regarding revoked credentials remaining in commit history?",
    options: [
      { id: 'A', text: "Leave the revoked token in history because it cannot be exploited" },
      { id: 'B', text: "Convert the repository to public" },
      { id: 'C', text: "Re-activate the token immediately" },
      { id: 'D', text: "Clean git history or ensure the token cannot be regenerated, and verify that no secondary systems shared that credential format" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Even when a token is inactive or revoked, leaving credentials in git history exposes naming conventions, service architecture, and account identifiers. Best practice purges the artifact and conducts a root-cause retrospective.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning",
    tags: ["Best Practices", "Remediation", "Triage"]
  },
  {
    id: "gh-500-150",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Secret Scanning & Push Protection",
    title: "Secret Scanning: Custom Pattern Multi-Tenant Inheritance",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "An enterprise administrator defines custom secret patterns at the enterprise account level. How are these patterns distributed to member organizations?",
    options: [
      { id: 'A', text: "The custom patterns automatically apply to all repositories across all organizations belonging to the enterprise" },
      { id: 'B', text: "Custom patterns only apply to the enterprise management repository" },
      { id: 'C', text: "Custom patterns require an individual pull request in every repository" },
      { id: 'D', text: "Each organization owner must manually copy and paste the regex patterns into their settings" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enterprise-level custom secret scanning patterns cascade automatically to all child organizations and repositories, ensuring standardized detection policies across the entire enterprise portfolio.",
    referenceUrl: "https://docs.github.com/en/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning",
    tags: ["Enterprise", "Governance", "Custom Patterns", "Multi-Tenant"]
  }
];

export default GITHUB_GHAS_QUESTIONS_6;
