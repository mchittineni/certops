export const GITHUB_GHAS_FLASHCARDS_1 = [
  {
    id: "github-ghas-fc-1",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning vs. Push Protection",
    hint: "Post-commit scanning in git history vs. pre-commit blocking at push time.",
    back: "<strong>Secret Scanning</strong> scans existing git commits and history for committed secrets. <strong>Push Protection</strong> inspects commits in real time as they are pushed and blocks the push if a supported secret pattern is detected.",
    tags: ["Secret Scanning", "Push Protection", "Security"]
  },
  {
    id: "github-ghas-fc-2",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Partner Patterns vs. User Patterns",
    hint: "Out-of-the-box vendor tokens vs. custom enterprise internal patterns.",
    back: "<strong>Partner patterns</strong> are maintained by GitHub for 100+ partner token providers (AWS, Azure, Slack, OpenAI). <strong>User patterns</strong> (custom secret patterns) are regular expressions defined by enterprise administrators for internal proprietary tokens.",
    tags: ["Secret Scanning", "Partner Patterns", "Custom Patterns"]
  },
  {
    id: "github-ghas-fc-3",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Push Protection: Bypass Reasons and Controls",
    hint: "False positive, used in tests, or will fix later.",
    back: "When Push Protection blocks a commit, developers can bypass if permitted by selecting a reason: <strong>'False positive'</strong>, <strong>'Used in tests'</strong>, or <strong>'Will fix later'</strong>. Every bypass event is permanently logged in the audit log.",
    tags: ["Push Protection", "Bypass", "Audit Log"]
  },
  {
    id: "github-ghas-fc-4",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    front: "Restricting Push Protection Bypasses at Organization Level",
    hint: "Preventing developers from bypassing push protection without approval.",
    back: "Enterprise and organization owners can configure settings to <strong>prohibit bypasses</strong> entirely, or require maintainer/security team approval before a blocked commit containing secrets can be pushed.",
    tags: ["Push Protection", "Governance", "Security Policy"]
  },
  {
    id: "github-ghas-fc-5",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Validity Checks",
    hint: "Live verification of whether detected partner tokens are actively valid.",
    back: "For supported partners (such as AWS, GitHub tokens, Slack), GitHub automatically sends an asynchronous test API request to the token provider to determine if the secret is <strong>Active</strong> or <strong>Revoked</strong>.",
    tags: ["Secret Scanning", "Validity Check", "Tokens"]
  },
  {
    id: "github-ghas-fc-6",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Custom Secret Scanning Patterns: Regular Expression Syntax",
    hint: "Start and end boundary rules, regex requirements, and test strings.",
    back: "Custom patterns require: a regular expression matching the secret, optional before/after boundary context rules, and at least one passing test string. GitHub validates the regex performance to prevent ReDoS.",
    tags: ["Custom Patterns", "Regex", "Secret Scanning"]
  },
  {
    id: "github-ghas-fc-7",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Custom Secret Scanning Patterns: Dry Run Mode",
    hint: "Testing custom regex patterns against repository history before alerting.",
    back: "Administrators can run a <strong>Dry Run</strong> when defining custom patterns. GitHub scans existing repository history and reports the count of matching findings without creating live alerts, preventing false-positive alert fatigue.",
    tags: ["Custom Patterns", "Dry Run", "Governance"]
  },
  {
    id: "github-ghas-fc-8",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Alert Resolution States",
    hint: "Revoked, False positive, Used in tests, Won't fix.",
    back: "Alerts can be closed with four resolution states: <strong>Revoked</strong> (secret rotated), <strong>False positive</strong> (not a secret), <strong>Used in tests</strong> (dummy token), or <strong>Won't fix</strong> (acceptable business risk).",
    tags: ["Secret Scanning", "Alerts", "Triage"]
  },
  {
    id: "github-ghas-fc-9",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Reopening Secret Scanning Alerts",
    hint: "Automatically or manually reopening previously dismissed alerts.",
    back: "A dismissed secret scanning alert can be manually reopened by security teams if subsequent review reveals the token was actually active, or automatically reopened if a new commit reintroduces the secret.",
    tags: ["Secret Scanning", "Alerts", "Incident Response"]
  },
  {
    id: "github-ghas-fc-10",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Partner Token Notification Workflow",
    hint: "How GitHub alerts third-party vendors to automatically revoke leaked keys.",
    back: "When a partner pattern is detected in a public repository (or private repo if enrolled), GitHub securely transmits the raw token to the partner provider (e.g. AWS). The partner immediately notifies the customer or automatically revokes the credential.",
    tags: ["Secret Scanning", "Partner Notification", "Automated Remediation"]
  },
  {
    id: "github-ghas-fc-11",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning in GitHub Copilot",
    hint: "Filtering out credentials from AI code suggestions.",
    back: "GitHub Copilot integrates with Secret Scanning algorithms to identify and suppress credentials, preventing the generative AI model from suggesting hardcoded passwords or API keys in code completions.",
    tags: ["Copilot", "Secret Scanning", "AI Security"]
  },
  {
    id: "github-ghas-fc-12",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning REST API",
    hint: "Querying and resolving secret alerts programmatically.",
    back: "The REST API endpoint <code>GET /repos/{owner}/{repo}/secret-scanning/alerts</code> lists secret alerts, and <code>PATCH</code> updates alert status, enabling automated SIEM and SOAR workflow integration.",
    tags: ["Secret Scanning", "REST API", "Automation"]
  },
  {
    id: "github-ghas-fc-13",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    front: "Remediating Leaked Secrets in Git History",
    hint: "Why simply committing a delete does NOT remove the credential from history.",
    back: "Committing a code change that deletes a secret leaves the token in git commit history. Remediation requires: <strong>1. Revoke and rotate the secret immediately</strong>. 2. Rewrite git history using <code>git-filter-repo</code> or BFG Repo-Cleaner.",
    tags: ["Secret Scanning", "Git History", "Remediation"]
  },
  {
    id: "github-ghas-fc-14",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Non-Provider Patterns",
    hint: "Generic patterns detecting private keys and certificates.",
    back: "GitHub scans for generic high-risk cryptographic tokens\u2014including private SSH keys, PGP private keys, PKCS#12 bundles, and TLS private certificates\u2014even when they do not belong to a specific vendor.",
    tags: ["Secret Scanning", "Certificates", "Private Keys"]
  },
  {
    id: "github-ghas-fc-15",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Notifications: Email, Slack, Teams",
    hint: "Alerting repository maintainers and security managers instantly upon commit.",
    back: "Notifications can be delivered via email, GitHub web notifications, or webhooks routed to Slack and Microsoft Teams when a secret is detected in newly pushed commits.",
    tags: ["Notifications", "Secret Scanning", "Incident Response"]
  },
  {
    id: "github-ghas-fc-16",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Push Protection for User-Defined Custom Patterns",
    hint: "Enforcing real-time push blocking for proprietary enterprise credentials.",
    back: "Enterprises can enable Push Protection not just for partner patterns, but also for <strong>Custom Secret Scanning Patterns</strong>, blocking internal proprietary API tokens before they reach git remotes.",
    tags: ["Push Protection", "Custom Patterns", "Enterprise"]
  },
  {
    id: "github-ghas-fc-17",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Metrics in Security Overview",
    hint: "Tracking secret alert volume and mean time to remediate (MTTR).",
    back: "The <strong>Security Overview</strong> dashboard aggregates secret scanning metrics across all enterprise repositories, tracking open vs. resolved alerts, bypass trends, and MTTR.",
    tags: ["Security Overview", "Metrics", "Reporting"]
  },
  {
    id: "github-ghas-fc-18",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Availability: Public vs. Private Repositories",
    hint: "Free for public repositories vs. GHAS license required for private repositories.",
    back: "Secret Scanning on partner patterns is <strong>free for all public repositories</strong>. Secret scanning on private repositories and Push Protection require a <strong>GitHub Advanced Security (GHAS) license</strong>.",
    tags: ["GHAS", "Licensing", "Public vs Private"]
  },
  {
    id: "github-ghas-fc-19",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Delegating Secret Scanning Bypass Approvals",
    hint: "Assigning security teams as required bypass reviewers.",
    back: "Organization settings can delegate Push Protection bypass approval authority to designated security reviewer teams, preventing developers from self-authorizing bypasses.",
    tags: ["Push Protection", "Governance", "Approvals"]
  },
  {
    id: "github-ghas-fc-20",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Audit Log Event: secret_scanning.bypass",
    hint: "Investigating who bypassed push protection and what commit was pushed.",
    back: "The audit log event <strong><code>secret_scanning.bypass</code></strong> records the actor, timestamp, repository, secret type, and justification provided when push protection was bypassed.",
    tags: ["Audit Log", "Compliance", "Push Protection"]
  },
  {
    id: "github-ghas-fc-21",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Webhooks: secret_scanning_alert Event",
    hint: "Triggering automated credential revocation in AWS/Azure upon commit push.",
    back: "Subscribing a SOAR webhook to <strong><code>secret_scanning_alert.created</code></strong> enables an automated cloud function to instantly disable the compromised IAM access key in AWS or revoke the token in Azure.",
    tags: ["Webhooks", "SOAR", "Automated Remediation", "Event-Driven"]
  },
  {
    id: "github-ghas-fc-22",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Scope: Wiki, Issues, Discussions",
    hint: "Where does GitHub Secret Scanning actively scan for credentials?",
    back: "Secret scanning inspects <strong>git commit history</strong> across all branches, tags, and commits. It also scans <strong>Issues, Pull Request descriptions/comments, and Discussions</strong> for public repositories.",
    tags: ["Secret Scanning", "Scope", "Coverage"]
  },
  {
    id: "github-ghas-fc-23",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Excluding Directories from Secret Scanning",
    hint: "Configuring .github/secret_scanning.yml path exclusions.",
    back: "Using <strong><code>secret_scanning.yml</code></strong>, repositories can define path exclusions (e.g. mock test data folders) to prevent test fixtures from generating false positive alerts.",
    tags: ["Configuration", "Exclusions", "Triage"]
  },
  {
    id: "github-ghas-fc-24",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Automatic Revocation Partners: Token Revocation APIs",
    hint: "How cloud providers automatically kill leaked tokens upon notification.",
    back: "Partners like GitHub (for Personal Access Tokens) and Slack immediately revoke leaked tokens upon receiving webhook notifications from GitHub Secret Scanning, reducing exposure windows to seconds.",
    tags: ["Automated Revocation", "Partners", "Security"]
  },
  {
    id: "github-ghas-fc-25",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    front: "Enabling Push Protection via Security Configurations",
    hint: "Applying push protection across an entire organization with one click.",
    back: "Using organization <strong>Security Configurations</strong>, administrators can enforce Push Protection globally across all current and future repositories in the organization.",
    tags: ["Security Configurations", "Push Protection", "Enterprise"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_1;
