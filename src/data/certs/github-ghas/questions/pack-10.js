export const GITHUB_GHAS_QUESTIONS_10 = [
  {
    id: "gh-500-226",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "The GitHub Security Overview Dashboard Features",
    scenario: "An enterprise security director needs a single view displaying security tool enablement and vulnerability counts across 400 repositories.",
    question: "Which native GitHub feature delivers this centralized dashboard?",
    options: [
      { id: 'A', text: "GitHub Packages" },
      { id: 'B', text: "Repository Insights" },
      { id: 'C', text: "Organization and Enterprise Security Overview" },
      { id: 'D', text: "GitHub Discussions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Security Overview delivers a unified dashboard across all enterprise repositories, tracking enablement status, open risk counts, and compliance posture for Secret Scanning, Dependabot, and Code Scanning.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Enterprise", "Dashboard", "Governance"]
  },
  {
    id: "gh-500-227",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GitHub Security Configurations: Policy Enforcement",
    scenario: "An enterprise establishes a standard security profile. Administrators want to guarantee that local repository maintainers cannot disable Secret Scanning or CodeQL.",
    question: "How should the security profile be applied to enforce this restriction?",
    options: [
      { id: 'A', text: "Delete repository administration tabs" },
      { id: 'B', text: "Revoke all developer repository write access" },
      { id: 'C', text: "Apply an enterprise Security Configuration and toggle 'Enforce' to lock the policy against local repository overrides" },
      { id: 'D', text: "Send an email reminder to all maintainers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enforced Security Configurations lock security feature settings globally: repository administrators cannot disable features or bypass controls enforced by the organization profile.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enabling-security-features-in-your-organization",
    tags: ["Security Configurations", "Enforcement", "Governance", "Enterprise"]
  },
  {
    id: "gh-500-228",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Security Managers Organization Role",
    scenario: "An organization wants its central InfoSec team to view security alerts and configure policies across all 300 repositories without giving them write permissions to source code.",
    question: "Which organizational role fulfills this principle of least privilege?",
    options: [
      { id: 'A', text: "Repository Admin on all repositories" },
      { id: 'B', text: "Organization Owner" },
      { id: 'C', text: "Billing Manager" },
      { id: 'D', text: "Security Managers team role" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Security Managers role grants designated teams read access to all organization repositories and write access to security tabs, alert triage, and policies without granting source code modification rights.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization",
    tags: ["Security Managers", "RBAC", "Least Privilege", "Governance"]
  },
  {
    id: "gh-500-229",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise Rulesets: Mandating Code Scanning Status Checks",
    scenario: "An enterprise wants to enforce a rule that no repository in the company can merge a pull request to its default branch unless CodeQL status checks pass.",
    question: "What is the most scalable way to enforce this across 1,000 repositories?",
    options: [
      { id: 'A', text: "Write a custom git hook on developer laptops" },
      { id: 'B', text: "Create an Enterprise Ruleset targeting all default branches with 'Require status checks to pass' specifying the CodeQL workflow" },
      { id: 'C', text: "Run an hourly script that reverts non-compliant commits" },
      { id: 'D', text: "Manually configure branch protection rules in every individual repository" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GitHub Rulesets operate across organizations and enterprises: a single rule can target all default branches across hundreds of repositories, enforcing required status checks without per-repo configuration.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Rulesets", "Branch Protection", "Enterprise", "Governance"]
  },
  {
    id: "gh-500-230",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GitHub Advanced Security (GHAS) Committer Calculation",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "How does GitHub calculate license consumption for GitHub Advanced Security across an enterprise?",
    options: [
      { id: 'A', text: "Licenses are billed based on the number of open security alerts" },
      { id: 'B', text: "Every user with an account in the enterprise consumes a license" },
      { id: 'C', text: "Licenses are consumed by unique Active Committers who pushed commits to private repositories with GHAS enabled within the last 90 days" },
      { id: 'D', text: "Licenses are billed per line of code scanned" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GHAS licensing is based on Active Committers: unique users who have pushed code to at least one private GHAS-enabled repository within a rolling 90-day window. Committers are deduplicated enterprise-wide.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security",
    tags: ["GHAS", "Licensing", "Active Committers", "FinOps"]
  },
  {
    id: "gh-500-231",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "The SECURITY.md File Purpose and Placement",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "Where should a security disclosure policy instructing external researchers on responsible disclosure procedures be placed?",
    options: [
      { id: 'A', text: "In the repository root, .github/, or docs/ directory as SECURITY.md, or in a central .github repository for organization-wide visibility" },
      { id: 'B', text: "In a public blog post outside GitHub" },
      { id: 'C', text: "In the repository git tag message" },
      { id: 'D', text: "In package.json" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Placing a `SECURITY.md` file in the repository root, `.github/`, or a central `.github` repository automatically surfaces a 'Security policy' link under the repository Security tab for external researchers.",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository",
    tags: ["SECURITY.md", "Policy", "Compliance", "Vulnerability Disclosure"]
  },
  {
    id: "gh-500-232",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Real-Time Audit Log Streaming to Enterprise SIEM",
    scenario: "A bank's compliance officer requires all GitHub security audit events to be retained for 7 years in Amazon S3 and analyzed in Splunk.",
    question: "How should the enterprise configure continuous audit log retention?",
    options: [
      { id: 'A', text: "Rely on GitHub's internal 90-day retention" },
      { id: 'B', text: "Write a cron job that scrapes GitHub web pages" },
      { id: 'C', text: "Configure Audit Log Streaming in Enterprise Settings to forward JSON audit events in real time to Amazon S3, Azure Event Hubs, Splunk, or Datadog" },
      { id: 'D', text: "Manually download CSV audit logs every Friday afternoon" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GitHub Enterprise Cloud provides native real-time Audit Log Streaming: administrators configure endpoints to stream security events (e.g. bypasses, alert dismissals, role changes) continuously to S3, Splunk, or Datadog.",
    referenceUrl: "https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Log", "SIEM", "Streaming", "Compliance"]
  },
  {
    id: "gh-500-233",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Fine-Grained Personal Access Tokens (PATs) Governance",
    scenario: "An enterprise security policy mandates that personal access tokens must not grant broad full-account administrative permissions.",
    question: "What advantages do Fine-Grained PATs provide over Classic PATs?",
    options: [
      { id: 'A', text: "Fine-grained PATs never expire" },
      { id: 'B', text: "Fine-grained PATs can be scoped to specific repositories, grant minimal API permissions, enforce mandatory expiration dates (max 1 year), and support organization approval workflows" },
      { id: 'C', text: "Fine-grained PATs do not require authentication" },
      { id: 'D', text: "Fine-grained PATs are only usable from web browsers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Fine-grained personal access tokens adhere to least privilege: they target specific repositories, grant granular resource permissions, enforce mandatory expiration, and require administrator approval in enterprise organizations.",
    referenceUrl: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#fine-grained-personal-access-tokens",
    tags: ["PATs", "Least Privilege", "Governance", "Authentication"]
  },
  {
    id: "gh-500-234",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enforcing GPG/SSH Commit Signing via Rulesets",
    scenario: "An audit reveals that developers could push commits with arbitrary author email addresses, potentially impersonating executive team members.",
    question: "Which branch protection rule prevents commit author spoofing?",
    options: [
      { id: 'A', text: "Require status checks to pass" },
      { id: 'B', text: "Require pull request reviews" },
      { id: 'C', text: "Require signed commits (verifying GPG, SSH, or S/MIME cryptographic signatures)" },
      { id: 'D', text: "Require linear history" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Requiring signed commits ensures that GitHub validates cryptographic GPG, SSH, or S/MIME signatures on every pushed commit against registered user public keys, rejecting unverified or spoofed commits.",
    referenceUrl: "https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification",
    tags: ["Commit Signing", "GPG", "Integrity", "Spoofing"]
  },
  {
    id: "gh-500-235",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "IP Allow Lists in GitHub Enterprise Cloud",
    scenario: "An organization wants to restrict code access strictly to devices connected to the corporate VPN or office network.",
    question: "Which feature in GitHub Enterprise Cloud restricts access based on source IP address?",
    options: [
      { id: 'A', text: "Enterprise IP allow lists, restricting web UI and API access strictly to designated CIDR blocks" },
      { id: 'B', text: "Firewall Rules in Actions workflows" },
      { id: 'C', text: "Branch protection IP filters" },
      { id: 'D', text: "DNS routing policies" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring IP allow lists at the enterprise or organization level enforces network boundaries: requests originating from IP addresses outside corporate CIDR blocks are blocked from viewing repositories or calling APIs.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings-for-your-enterprise/managing-allowed-ip-addresses-for-your-enterprise",
    tags: ["IP Allow List", "Network Security", "Enterprise", "Access Control"]
  },
  {
    id: "gh-500-236",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Security Campaigns: Driving Enterprise Vulnerability Remediation",
    scenario: "A zero-day vulnerability (e.g. OpenSSL flaw) affects 200 repositories. The CISO demands remediation across all teams within 14 days.",
    question: "Which native GitHub feature allows security managers to set deadlines and track remediation progress across development squads?",
    options: [
      { id: 'A', text: "Deleting non-compliant repositories" },
      { id: 'B', text: "Creating a public discussion thread" },
      { id: 'C', text: "Launching a Security Campaign in Security Overview targeting the specific advisory and tracking remediation percentages against a due date" },
      { id: 'D', text: "Sending individual Slack messages to 200 engineers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Security Campaigns in Security Overview empower security leaders to bundle specific vulnerabilities, assign remediation due dates, track progress across teams, and monitor burn-down metrics to meet regulatory SLAs.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-security-campaigns",
    tags: ["Security Campaigns", "Security Overview", "SLA", "Remediation"]
  },
  {
    id: "gh-500-237",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Two-Factor Authentication (2FA) Enforcement",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "What happens to members of an organization when the organization owner toggles 'Require two-factor authentication for all members'?",
    options: [
      { id: 'A', text: "GitHub deletes all repositories owned by non-compliant members" },
      { id: 'B', text: "All members without 2FA enabled are automatically converted to billing managers" },
      { id: 'C', text: "Members who do not have 2FA enabled are removed from the organization and must configure 2FA before they can be reinvited" },
      { id: 'D', text: "The setting takes effect only for newly invited users" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When 2FA enforcement is activated, users without 2FA enabled on their personal accounts are immediately removed from the organization, losing access to repositories until they configure two-factor authentication.",
    referenceUrl: "https://docs.github.com/en/organizations/keeping-your-organization-to-date/requiring-two-factor-authentication-in-your-organization",
    tags: ["2FA", "MFA", "Identity", "Access Control"]
  },
  {
    id: "gh-500-238",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Audit Log Event for Alert Dismissal: code_scanning.dismiss_alert",
    scenario: "During an internal audit, the security lead must prove who approved the dismissal of a Critical CodeQL alert on a financial transaction service.",
    question: "Which audit log action records the alert dismissal, author, and reason?",
    options: [
      { id: 'A', text: "action.dismiss" },
      { id: 'B', text: "security.bypass" },
      { id: 'C', text: "code_scanning.dismiss_alert" },
      { id: 'D', text: "repo.remove_alert" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `code_scanning.dismiss_alert` audit log event captures the committer or reviewer identity, repository name, alert number, dismissal reason, and user justification comment.",
    referenceUrl: "https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise",
    tags: ["Audit Log", "Compliance", "Triage", "Code Scanning"]
  },
  {
    id: "gh-500-239",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Disabling Repository Forking for IP Protection",
    scenario: "A financial institution wants to ensure employees cannot fork proprietary intellectual property repositories to personal public GitHub profiles.",
    question: "Which organization-level policy enforces this restriction?",
    options: [
      { id: 'A', text: "Deleting all personal GitHub accounts" },
      { id: 'B', text: "Setting repository visibility to public" },
      { id: 'C', text: "Requiring signed commits" },
      { id: 'D', text: "Disabling the 'Allow forking of private repositories' setting in organization settings" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Disabling 'Allow forking of private repositories' at the organization level removes the Fork button and blocks git fork actions, preventing private proprietary code from being cloned outside organizational boundaries.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization",
    tags: ["Forking", "Data Loss Prevention", "Governance", "Enterprise"]
  },
  {
    id: "gh-500-240",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GitHub Custom Organization Roles",
    scenario: "An enterprise wants to create a 'Security Auditor' role that can view security overview dashboards and alerts without having write access to code or settings.",
    question: "How are Custom Organization Roles created in GitHub Enterprise Cloud?",
    options: [
      { id: 'A', text: "By writing custom bash scripts in Actions" },
      { id: 'B', text: "By editing linux file permissions on the runner" },
      { id: 'C', text: "Custom roles are not supported in GitHub" },
      { id: 'D', text: "Under Organization Settings → Roles → Create a role, selecting granular permissions like 'View security overview' and 'View code scanning alerts'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub Enterprise allows administrators to create Custom Organization Roles, selecting granular permission sets (e.g. view security findings, manage secrets) to satisfy least-privilege compliance.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles",
    tags: ["Custom Roles", "RBAC", "Least Privilege", "Governance"]
  },
  {
    id: "gh-500-241",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GraphQL API for Security Telemetry Aggregation",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "Why do enterprise security automation scripts prefer querying security alerts via GitHub's GraphQL API rather than REST API?",
    options: [
      { id: 'A', text: "GraphQL does not require authentication tokens" },
      { id: 'B', text: "GraphQL runs faster on developer laptops" },
      { id: 'C', text: "GraphQL allows querying Code Scanning, Secret Scanning, and Dependabot alerts across hundreds of repositories in a single nested query, drastically reducing rate limit consumption" },
      { id: 'D', text: "REST API is deprecated across GitHub" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GitHub's GraphQL API enables batch querying of complex nested entities: a single GraphQL query can retrieve repositories, active security configurations, and open alerts across multiple organizations without incurring hundreds of REST API roundtrips.",
    referenceUrl: "https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-code-security",
    tags: ["GraphQL", "API", "Automation", "Performance"]
  },
  {
    id: "gh-500-242",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Auto-Enablement of GHAS on New Repositories",
    scenario: "An enterprise policy dictates that every newly created repository must have Secret Scanning, Push Protection, and Dependabot enabled automatically.",
    question: "How is this zero-day coverage configured?",
    options: [
      { id: 'A', text: "Disable repository creation for all users" },
      { id: 'B', text: "Assign an engineer to manually configure settings every time a repository is created" },
      { id: 'C', text: "Configure the default Organization Security Configuration and enable 'Automatically apply to newly created repositories'" },
      { id: 'D', text: "Write a cron job that scans repositories once a month" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Organization Security Configurations, administrators set a configuration profile as the default and toggle 'Automatically apply to newly created repositories', ensuring continuous zero-day security posture.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enabling-security-features-in-your-organization",
    tags: ["Security Configurations", "Automation", "Governance", "Enterprise"]
  },
  {
    id: "gh-500-243",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Enterprise Allowed Actions: Restricting to Verified Creators",
    scenario: "To prevent supply chain poisoning, an enterprise wants to restrict Actions workflows to run only first-party GitHub actions and marketplace actions by verified publishers.",
    question: "Which policy setting in Enterprise Actions achieves this?",
    options: [
      { id: 'A', text: "Configure 'Allow select actions' and choose 'Allow actions created by GitHub and verified creators'" },
      { id: 'B', text: "Ban developers from using GitHub Marketplace" },
      { id: 'C', text: "Require manual approval for every single workflow run" },
      { id: 'D', text: "Disable Actions completely" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enterprise Actions policy allows setting 'Allow select actions: Allow actions created by GitHub and verified creators', blocking unvetted community actions while permitting official trusted libraries.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Allowed Actions", "Supply Chain", "Enterprise", "Governance"]
  },
  {
    id: "gh-500-244",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Rulesets: Requiring Linear Commit History",
    scenario: "An engineering team wants to eliminate messy merge commits and enforce clean git rebase or squash workflows across all enterprise repositories.",
    question: "Which rule in GitHub Rulesets enforces this standard?",
    options: [
      { id: 'A', text: "Require status checks to pass" },
      { id: 'B', text: "Require linear history" },
      { id: 'C', text: "Require signed commits" },
      { id: 'D', text: "Block force pushes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The 'Require linear history' rule in branch protections and Rulesets prevents multi-parent merge commits from being pushed, requiring pull requests to be squashed or rebased before merging.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#commit-metadata-restrictions",
    tags: ["Linear History", "Rulesets", "Git", "Governance"]
  },
  {
    id: "gh-500-245",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Managing Security Advisories for Private Vulnerabilities",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "When a repository security advisory is published, which public database receives the vulnerability mapping from GitHub?",
    options: [
      { id: 'A', text: "The operating system systemd log" },
      { id: 'B', text: "Only the local repository README file" },
      { id: 'C', text: "A private email list" },
      { id: 'D', text: "The GitHub Advisory Database, which propagates CVE data to the National Vulnerability Database (NVD) and global package registries" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Publishing a Security Advisory submits the vulnerability details to the curated GitHub Advisory Database, issuing a CVE and updating Dependabot alert feeds globally to protect open-source consumers.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory",
    tags: ["Advisory Database", "CVE", "NVD", "Disclosure"]
  },
  {
    id: "gh-500-246",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Restricting Secret Sharing across Enterprise Organizations",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "An enterprise has sensitive deployment credentials stored in an organization secret. How can access be restricted to prevent unauthorized repositories from reading it?",
    options: [
      { id: 'A', text: "Set secret access to 'Selected repositories' and grant access strictly to authorized production release repos" },
      { id: 'B', text: "Organization secrets cannot be restricted" },
      { id: 'C', text: "Share the secret in a public Slack channel" },
      { id: 'D', text: "Allow all repositories in the organization access" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organization secrets should always be scoped to 'Selected repositories' rather than 'All repositories', enforcing least-privilege credential access and preventing unauthorized sandboxes from accessing production keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#accessing-your-secrets",
    tags: ["Secrets", "Least Privilege", "Governance", "Access Control"]
  },
  {
    id: "gh-500-247",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Rulesets: Bypass Permissions Configuration",
    scenario: "During an emergency production outage, senior on-call site reliability engineers need to bypass branch protection rules to deploy an urgent hotfix.",
    question: "How do GitHub Rulesets manage authorized emergency bypasses?",
    options: [
      { id: 'A', text: "By configuring an explicit Bypass List in the Ruleset specifying designated teams or roles (e.g. 'Site Reliability Leads') permitted to bypass" },
      { id: 'B', text: "Rulesets do not allow any bypass under any circumstances" },
      { id: 'C', text: "By sharing administrator root passwords" },
      { id: 'D', text: "By disabling branch protection permanently" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rulesets include a dedicated Bypass List: administrators can designate specific roles or teams allowed to bypass rules in emergencies, with all bypass actions logged in the enterprise audit log.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#about-bypass-permissions",
    tags: ["Rulesets", "Bypass", "Incident Response", "Governance"]
  },
  {
    id: "gh-500-248",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Continuous Security Compliance Monitoring (SOC 2, ISO 27001)",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "How does GitHub Advanced Security support enterprise SOC 2 and ISO 27001 compliance frameworks?",
    options: [
      { id: 'A', text: "By replacing all human software developers with AI bots" },
      { id: 'B', text: "By providing automated vulnerability scanning, immutable audit logs, cryptographic commit signing verification, and tamper-evident pull request review tracking" },
      { id: 'C', text: "By encrypting repository names" },
      { id: 'D', text: "By purchasing external insurance policies" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GHAS satisfies critical SOC 2 and ISO 27001 controls by automating secure SDLC requirements: static analysis (SAST), software composition analysis (SCA), secret leak prevention, and comprehensive audit trail logging.",
    referenceUrl: "https://docs.github.com/en/code-security",
    tags: ["Compliance", "SOC 2", "ISO 27001", "Governance"]
  },
  {
    id: "gh-500-249",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "GitHub Advanced Security: Summary of Core Pillars",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "What are the three foundational technology pillars that constitute GitHub Advanced Security (GHAS)?",
    options: [
      { id: 'A', text: "Actions, Packages, and Pages" },
      { id: 'B', text: "Git CLI, GitHub Desktop, and Mobile" },
      { id: 'C', text: "Issues, Discussions, and Projects" },
      { id: 'D', text: "Code Scanning (CodeQL), Secret Scanning (including Push Protection), and Dependabot (Supply Chain Security)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub Advanced Security is anchored on three core pillars: Code Scanning with CodeQL (SAST), Secret Scanning with Push Protection, and Dependabot with Supply Chain Security / Dependency Review.",
    referenceUrl: "https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security",
    tags: ["GHAS", "Summary", "Pillars", "Architecture"]
  },
  {
    id: "gh-500-250",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    domainName: "Security Policies, Compliance & Governance",
    title: "Managing Security Posture with Security Advisory Credits",
    scenario: "An open-source repository maintains a high-security posture and wants to publicly credit white-hat security researchers who report vulnerabilities responsibly through private security advisories.",
    question: "How does GitHub recognize external security researchers on published advisories?",
    options: [
      { id: 'A', text: "By officially assigning advisory credits that appear on the researcher's public GitHub profile and in the national vulnerability database entry" },
      { id: 'B', text: "By granting the researcher permanent organization owner permissions" },
      { id: 'C', text: "By deleting the vulnerability report after publication" },
      { id: 'D', text: "By paying cash bounties directly from GitHub credit balances" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GitHub allows maintainers to officially credit security researchers when publishing Security Advisories. These credits appear on the researcher's public profile, honoring responsible disclosure.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory#acknowledging-contributors-to-a-security-advisory",
    tags: ["Security Advisories", "Credits", "Responsible Disclosure", "Community"]
  }
];

export default GITHUB_GHAS_QUESTIONS_10;
