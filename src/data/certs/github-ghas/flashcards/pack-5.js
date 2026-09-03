export const GITHUB_GHAS_FLASHCARDS_5 = [
  {
    id: "github-ghas-fc-101",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    front: "The GitHub Security Overview Dashboard",
    hint: "Enterprise-wide single-pane view of security risk and feature enablement.",
    back: "The <strong>Security Overview</strong> provides security teams with interactive risk metrics across all repositories in an organization or enterprise, displaying secret scanning alerts, Dependabot CVEs, and CodeQL findings.",
    tags: ["Security Overview", "Enterprise", "Dashboard", "Governance"]
  },
  {
    id: "github-ghas-fc-102",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Security Configurations: Global Policy Enforcement",
    hint: "Standardized security feature profiles applied across repositories.",
    back: "<strong>Security Configurations</strong> define bundles of security features (Secret Scanning, Push Protection, Dependabot, CodeQL). Administrators apply a configuration to hundreds of repositories and enforce policy lock.",
    tags: ["Security Configurations", "Governance", "Enterprise"]
  },
  {
    id: "github-ghas-fc-103",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Default vs. Extended Security Configurations",
    hint: "Pre-packaged profiles provided by GitHub for quick enablement.",
    back: "GitHub provides built-in configurations: <strong>GitHub recommended</strong> (enables core protections with Default CodeQL) and allows creation of <strong>Custom configurations</strong> tailored to enterprise risk appetites.",
    tags: ["Security Configurations", "Profiles", "Best Practices"]
  },
  {
    id: "github-ghas-fc-104",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    front: "The SECURITY.md File: Responsible Disclosure Policy",
    hint: "Instructing security researchers how to report vulnerabilities responsibly.",
    back: "Placing a <strong><code>SECURITY.md</code></strong> file in the repository root or <code>.github/</code> folder displays a clear security policy instructing external researchers how to report security vulnerabilities privately.",
    tags: ["SECURITY.md", "Policy", "Compliance", "Vulnerability Disclosure"]
  },
  {
    id: "github-ghas-fc-105",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Private Vulnerability Reporting for Public Repositories",
    hint: "Enabling external researchers to report flaws privately without opening public issues.",
    back: "Enabling <strong>Private Vulnerability Reporting</strong> adds a 'Report a vulnerability' button to public repositories, opening a confidential collaboration workspace accessible only to maintainers and the reporter.",
    tags: ["Private Vulnerability Reporting", "Collaboration", "Disclosure"]
  },
  {
    id: "github-ghas-fc-106",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enterprise Audit Log: Security Feature Tracking",
    hint: "Auditing changes to security settings across all enterprise repositories.",
    back: "The Enterprise Audit Log tracks all administrative actions: <code>secret_scanning.enable</code>, <code>code_scanning.disable</code>, and <code>dependabot.dismiss_alert</code> for SOC 2 and ISO 27001 audits.",
    tags: ["Audit Log", "Compliance", "Enterprise", "Governance"]
  },
  {
    id: "github-ghas-fc-107",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Advanced Security (GHAS) Licensing Model",
    hint: "Active committers licensing calculation on private repositories.",
    back: "GHAS licensing is based on the count of <strong>Unique Active Committers</strong> who pushed code to private repositories with GHAS enabled in the last 90 days. Public repositories use GHAS features for free.",
    tags: ["GHAS", "Licensing", "Active Committers", "FinOps"]
  },
  {
    id: "github-ghas-fc-108",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Restricting GHAS Enablement via Enterprise Policies",
    hint: "Controlling which organization owners can enable GHAS and consume licenses.",
    back: "Enterprise administrators configure policies to allow only enterprise admins (or approved organization owners) to enable GHAS features, preventing accidental license over-allocation.",
    tags: ["GHAS", "Licensing", "Governance", "Enterprise"]
  },
  {
    id: "github-ghas-fc-109",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Security Managers Role in GitHub Organizations",
    hint: "Granting security teams visibility across all organization repositories.",
    back: "The <strong>Security Managers</strong> team role grants designated teams read-only access to all repositories in the organization and full management access to security alerts, without granting write access to source code.",
    tags: ["Security Managers", "RBAC", "Governance", "Access Control"]
  },
  {
    id: "github-ghas-fc-110",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Rulesets for Branch and Tag Protection",
    hint: "Centralized governance enforcing branch protection rules at scale across thousands of repos.",
    back: "Unlike classic branch protection configured per-repo, <strong>GitHub Rulesets</strong> can be applied enterprise-wide across thousands of repositories simultaneously using target patterns (e.g. all default branches).",
    tags: ["Rulesets", "Branch Protection", "Governance", "Enterprise"]
  },
  {
    id: "github-ghas-fc-111",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enforcing Code Scanning Checks via Rulesets",
    hint: "Requiring CodeQL status checks to pass before merging across all repositories.",
    back: "In a GitHub Ruleset, configure <strong>'Require status checks to pass'</strong> and specify the CodeQL analysis job. This guarantees that no repository across the enterprise can merge code with blocking security alerts.",
    tags: ["Rulesets", "Code Scanning", "Branch Protection", "Governance"]
  },
  {
    id: "github-ghas-fc-112",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enterprise Security Campaign Management",
    hint: "Driving remediation of specific critical CVEs across hundreds of development teams.",
    back: "Security teams use <strong>Security Campaigns</strong> in Security Overview to set deadlines and track progress for remediating specific widespread vulnerabilities (e.g. Log4j) across all organization repos.",
    tags: ["Campaigns", "Remediation", "Security Overview", "Governance"]
  },
  {
    id: "github-ghas-fc-113",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Audit Log Streaming to External SIEM Providers",
    hint: "Real-time JSON audit log streaming to AWS S3, Azure Event Hubs, Datadog, Splunk.",
    back: "GitHub Enterprise Cloud provides native real-time <strong>audit log streaming</strong>, continuously forwarding security events and token bypasses directly into enterprise SIEM systems for real-time threat detection.",
    tags: ["Audit Log", "SIEM", "Streaming", "Compliance"]
  },
  {
    id: "github-ghas-fc-114",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enforcing Signed Commits: GPG and SSH Commit Verification",
    hint: "Preventing commit spoofing by requiring verified cryptographic signatures.",
    back: "Branch protection rules and Rulesets can enforce <strong>'Require signed commits'</strong>. Commits pushed without a valid, verified GPG, SSH, or S/MIME signature are rejected by the git remote.",
    tags: ["Signed Commits", "GPG", "Integrity", "Security"]
  },
  {
    id: "github-ghas-fc-115",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Personal Access Tokens (PATs): Fine-Grained vs. Classic",
    hint: "Scoping tokens to specific repositories and minimal permissions.",
    back: "<strong>Fine-grained PATs</strong> allow users to restrict token validity to specific repositories, grant read-only or read/write scopes on specific APIs, and enforce an expiration date (max 1 year). Classic PATs grant broad access.",
    tags: ["PATs", "Authentication", "Fine-Grained", "Security"]
  },
  {
    id: "github-ghas-fc-116",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enterprise PAT Approval Policies",
    hint: "Requiring organization administrator approval before fine-grained PATs can access repos.",
    back: "Organizations can require that all fine-grained personal access tokens must be reviewed and approved by an administrator before they can access organization resources.",
    tags: ["PATs", "Governance", "Approvals", "Enterprise"]
  },
  {
    id: "github-ghas-fc-117",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "IP Allow Lists in GitHub Enterprise Cloud",
    hint: "Restricting repository access strictly to corporate VPN or office IP CIDRs.",
    back: "Configure <strong>IP allow lists</strong> at the enterprise or organization level to block all web UI and API access from IP addresses outside corporate network CIDR ranges.",
    tags: ["IP Allow List", "Network Security", "Enterprise"]
  },
  {
    id: "github-ghas-fc-118",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Two-Factor Authentication (2FA) Enforcement",
    hint: "Mandating multi-factor authentication for all organization members.",
    back: "Organization owners can mandate that all members, billing managers, and outside collaborators must have <strong>Two-Factor Authentication (2FA)</strong> enabled; non-compliant users are removed automatically.",
    tags: ["2FA", "MFA", "Identity", "Security"]
  },
  {
    id: "github-ghas-fc-119",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Managing Security Alerts via GraphQL API",
    hint: "High-efficiency querying of alerts across thousands of enterprise repositories.",
    back: "GitHub's <strong>GraphQL API</strong> allows security teams to query Code Scanning, Dependabot, and Secret Scanning alerts in a single nested query, reducing network calls compared to REST APIs.",
    tags: ["GraphQL", "API", "Automation", "Reporting"]
  },
  {
    id: "github-ghas-fc-120",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Automated Security Remediation Service Level Agreements (SLAs)",
    hint: "Measuring mean time to remediate (MTTR) against internal compliance policies.",
    back: "Security Overview allows organizations to track whether vulnerabilities are resolved within internal SLAs (e.g. Critical CVEs patched within 7 days, High within 30 days).",
    tags: ["SLA", "MTTR", "Compliance", "Security Overview"]
  },
  {
    id: "github-ghas-fc-121",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Third-Party Integration Webhooks: security_advisory Event",
    hint: "Automating notifications when new security advisories are published.",
    back: "Subscribing enterprise webhooks to the <strong><code>security_advisory</code></strong> event allows security teams to ingest newly published vulnerability advisories directly into internal ticketing systems like Jira.",
    tags: ["Webhooks", "Advisories", "Jira", "Automation"]
  },
  {
    id: "github-ghas-fc-122",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Security Lab: Open Source Security Research",
    hint: "Community security research initiatives and bug bounties.",
    back: "The <strong>GitHub Security Lab</strong> conducts open-source security research, authors open-source CodeQL queries, and rewards security researchers through bug bounty programs.",
    tags: ["Security Lab", "Research", "Open Source"]
  },
  {
    id: "github-ghas-fc-123",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    front: "Role-Based Access Control (RBAC) in GitHub Organizations",
    hint: "Owner, Member, Moderation, and Custom Organization Roles.",
    back: "GitHub Enterprise supports <strong>Custom Organization Roles</strong>, allowing fine-grained permission assignment (e.g. granting a team permission to manage security alerts without making them organization owners).",
    tags: ["RBAC", "Custom Roles", "Governance"]
  },
  {
    id: "github-ghas-fc-124",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Automating License Compliance Checks in CI/CD",
    hint: "Failing builds when dependencies violate approved enterprise open-source licenses.",
    back: "Combine the Dependency Review action with corporate policy files to automatically block pull requests that introduce unauthorized licenses (e.g. AGPL-3.0 in cloud microservices).",
    tags: ["Licensing", "Compliance", "Dependency Review"]
  },
  {
    id: "github-ghas-fc-125",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enterprise Security Posture Review Checklist",
    hint: "Core pillars for hardening enterprise GitHub environments.",
    back: "A comprehensive enterprise posture enforces: 2FA mandate, Push Protection enabled, CodeQL required checks on default branches, Dependabot security updates enabled, and audit log streaming active.",
    tags: ["Best Practices", "Hardening", "Enterprise", "Checklist"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_5;
