export const GITHUB_GHAS_QUESTIONS_10 = [
  {
    id: "gh-500-226",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "The GitHub Security Overview Dashboard Features",
    scenario: "An enterprise security director needs a single view displaying security tool enablement and vulnerability counts across 400 repositories.",
    question: "Which native GitHub feature delivers this centralized dashboard?",
    options: [
      { id: 'A', text: "The organization discussions tab" },
      { id: 'B', text: "The organization security overview" },
      { id: 'C', text: "The repository insights views" },
      { id: 'D', text: "The organization packages list" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Security Overview delivers a unified dashboard across all enterprise repositories, tracking enablement status, open risk counts, and compliance posture for Secret Scanning, Dependabot, and Code Scanning.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-the-security-overview",
    tags: ["Security Overview", "Enterprise", "Dashboard", "Governance"]
  },
  {
    id: "gh-500-227",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "GitHub Security Configurations: Policy Enforcement",
    scenario: "An enterprise establishes a standard security profile. Administrators want to guarantee that local repository maintainers cannot disable Secret Scanning or CodeQL.",
    question: "How should the security profile be applied to enforce this restriction?",
    options: [
      { id: 'A', text: "Apply an organization ruleset that requires the settings on every repository" },
      { id: 'B', text: "Remove administration rights from the repositories so settings cannot change" },
      { id: 'C', text: "Apply the configuration as the default and audit the repositories monthly" },
      { id: 'D', text: "Apply an enterprise security configuration with enforcement on, locking out local overrides" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforced Security Configurations lock security feature settings globally: repository administrators cannot disable features or bypass controls enforced by the organization profile.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enabling-security-features-in-your-organization",
    tags: ["Security Configurations", "Enforcement", "Governance", "Enterprise"]
  },
  {
    id: "gh-500-228",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Security Managers Organization Role",
    scenario: "An organization wants its central InfoSec team to view security alerts and configure policies across all 300 repositories without giving them write permissions to source code.",
    question: "Which organizational role fulfills this principle of least privilege?",
    options: [
      { id: 'A', text: "Security Managers team role" },
      { id: 'B', text: "Billing Manager" },
      { id: 'C', text: "Organization Owner" },
      { id: 'D', text: "Repository Admin on all repositories" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Security Managers role grants designated teams read access to all organization repositories and write access to security tabs, alert triage, and policies without granting source code modification rights.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization",
    tags: ["Security Managers", "RBAC", "Least Privilege", "Governance"]
  },
  {
    id: "gh-500-229",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enterprise Rulesets: Mandating Code Scanning Status Checks",
    scenario: "An enterprise wants to enforce a rule that no repository in the company can merge a pull request to its default branch unless CodeQL status checks pass.",
    question: "What is the most scalable way to enforce this across 1,000 repositories?",
    options: [
      { id: 'A', text: "Branch protection configured on each repository's own default branch by hand" },
      { id: 'B', text: "A pre-push hook distributed to developers that runs the same analysis" },
      { id: 'C', text: "An hourly workflow that reverts commits which bypassed the analysis" },
      { id: 'D', text: "An enterprise ruleset over every default branch requiring the analysis status check" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub Rulesets operate across organizations and enterprises: a single rule can target all default branches across hundreds of repositories, enforcing required status checks without per-repo configuration.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets",
    tags: ["Rulesets", "Branch Protection", "Enterprise", "Governance"]
  },
  {
    id: "gh-500-230",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Secret Protection and Code Security Committer Calculation",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "How does GitHub calculate license consumption for GitHub Secret Protection and GitHub Code Security across an enterprise?",
    options: [
      { id: 'A', text: "By lines of code scanned across the enabled private repositories each month" },
      { id: 'B', text: "By the number of open security alerts across the enabled repositories" },
      { id: 'C', text: "By unique active committers to enabled private repos, counted per product" },
      { id: 'D', text: "By every user account in the enterprise, whether they commit or not" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GitHub Secret Protection and GitHub Code Security are licensed separately, and each counts unique active committers: users who pushed to at least one private repository where that product is enabled within a rolling 90-day window. A committer is counted once per product however many enabled repositories they push to, so someone active in repositories with both products uses one licence of each. Lines of code, alert counts and total user accounts do not drive consumption.",
    referenceUrl: "https://docs.github.com/en/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security",
    tags: ["GHAS", "Licensing", "Active Committers", "FinOps"]
  },
  {
    id: "gh-500-231",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "The SECURITY.md File Purpose and Placement",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "Where should a security disclosure policy instructing external researchers on responsible disclosure procedures be placed?",
    options: [
      { id: 'A', text: "As a security field in package.json, which the package registry surfaces" },
      { id: 'B', text: "As SECURITY.md in the repository root or .github, or in the org's .github repository" },
      { id: 'C', text: "As an annotated git tag message on each supported release of the project" },
      { id: 'D', text: "As a public blog post, linked from the repository's own description field" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Placing a `SECURITY.md` file in the repository root, `.github/`, or a central `.github` repository automatically surfaces a 'Security policy' link under the repository Security tab for external researchers.",
    referenceUrl: "https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository",
    tags: ["SECURITY.md", "Policy", "Compliance", "Vulnerability Disclosure"]
  },
  {
    id: "gh-500-232",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Real-Time Audit Log Streaming to Enterprise SIEM",
    scenario: "A bank's compliance officer requires all GitHub security audit events to be retained for 7 years in Amazon S3 and analyzed in Splunk.",
    question: "How should the enterprise configure continuous audit log retention?",
    options: [
      { id: 'A', text: "Poll the audit log REST API on a schedule and archive each page to object storage" },
      { id: 'B', text: "Stream the audit log from enterprise settings to S3, Event Hubs, Splunk or Datadog" },
      { id: 'C', text: "Rely on the platform's own retention window, which covers the audit period" },
      { id: 'D', text: "Download the audit log as CSV each week and archive the file with the evidence" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GitHub Enterprise Cloud provides native real-time Audit Log Streaming: administrators configure endpoints to stream security events (e.g. bypasses, alert dismissals, role changes) continuously to S3, Splunk, or Datadog.",
    referenceUrl: "https://docs.github.com/en/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise",
    tags: ["Audit Log", "SIEM", "Streaming", "Compliance"]
  },
  {
    id: "gh-500-233",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Fine-Grained Personal Access Tokens (PATs) Governance",
    scenario: "An enterprise security policy mandates that personal access tokens must not grant broad full-account administrative permissions.",
    question: "What advantages do Fine-Grained PATs provide over Classic PATs?",
    options: [
      { id: 'A', text: "They never expire, so automation does not break when a token reaches its renewal date" },
      { id: 'B', text: "They are usable only from the web interface, so a leaked token cannot be replayed by API" },
      { id: 'C', text: "They scope to named repositories, grant minimal permissions, expire within a year, and support approval" },
      { id: 'D', text: "They authenticate by IP allow-list rather than by token, so the value itself is not secret" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Fine-grained personal access tokens adhere to least privilege: they target specific repositories, grant granular resource permissions, enforce mandatory expiration, and require administrator approval in enterprise organizations.",
    referenceUrl: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#fine-grained-personal-access-tokens",
    tags: ["PATs", "Least Privilege", "Governance", "Authentication"]
  },
  {
    id: "gh-500-234",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enforcing GPG/SSH Commit Signing via Rulesets",
    scenario: "An audit reveals that developers could push commits with arbitrary author email addresses, potentially impersonating executive team members.",
    question: "Which branch protection rule prevents commit author spoofing?",
    options: [
      { id: 'A', text: "Require the status checks to pass before a merge" },
      { id: 'B', text: "Require a linear history on the protected branch" },
      { id: 'C', text: "Require a pull request review from a code owner" },
      { id: 'D', text: "Require signed commits, verified by GPG, SSH or S/MIME" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Requiring signed commits ensures that GitHub validates cryptographic GPG, SSH, or S/MIME signatures on every pushed commit against registered user public keys, rejecting unverified or spoofed commits.",
    referenceUrl: "https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification",
    tags: ["Commit Signing", "GPG", "Integrity", "Spoofing"]
  },
  {
    id: "gh-500-235",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "IP Allow Lists in GitHub Enterprise Cloud",
    scenario: "An organization wants to restrict code access strictly to devices connected to the corporate VPN or office network.",
    question: "Which feature in GitHub Enterprise Cloud restricts access based on source IP address?",
    options: [
      { id: 'A', text: "Actions network policies, which restrict where workflow jobs may connect" },
      { id: 'B', text: "Organization SAML settings, which bind sessions to the identity provider" },
      { id: 'C', text: "Branch protection rules, which restrict who may push from which network" },
      { id: 'D', text: "Enterprise IP allow lists, which restrict web and API access to named CIDRs" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring IP allow lists at the enterprise or organization level enforces network boundaries: requests originating from IP addresses outside corporate CIDR blocks are blocked from viewing repositories or calling APIs.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/configuring-settings-for-your-enterprise/managing-allowed-ip-addresses-for-your-enterprise",
    tags: ["IP Allow List", "Network Security", "Enterprise", "Access Control"]
  },
  {
    id: "gh-500-236",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Security Campaigns: Driving Enterprise Vulnerability Remediation",
    scenario: "A zero-day vulnerability (e.g. OpenSSL flaw) affects 200 repositories. The CISO demands remediation across all teams within 14 days.",
    question: "Which native GitHub feature allows security managers to set deadlines and track remediation progress across development squads?",
    options: [
      { id: 'A', text: "Open a tracking issue per repository and roll the progress into a project board" },
      { id: 'B', text: "Launch a security campaign in the security overview, with a due date and tracked progress" },
      { id: 'C', text: "Apply an organization ruleset that blocks merges until the advisory is remediated" },
      { id: 'D', text: "Send each squad a report from the alerts API and follow it up in the weekly review" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Security Campaigns in Security Overview empower security leaders to bundle specific vulnerabilities, assign remediation due dates, track progress across teams, and monitor burn-down metrics to meet regulatory SLAs.",
    referenceUrl: "https://docs.github.com/en/code-security/security-overview/about-security-campaigns",
    tags: ["Security Campaigns", "Security Overview", "SLA", "Remediation"]
  },
  {
    id: "gh-500-237",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Two-Factor Authentication (2FA) Enforcement",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "What happens to members of an organization when the organization owner toggles 'Require two-factor authentication for all members'?",
    options: [
      { id: 'A', text: "Members without 2FA are converted to billing managers automatically" },
      { id: 'B', text: "The requirement applies only to members invited after it was enabled" },
      { id: 'C', text: "Members without 2FA are removed and must enable it before being reinvited" },
      { id: 'D', text: "The repositories owned by non-compliant members are archived first" }
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
    domainId: "d6",
    domainName: "GitHub Security suites administration",
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
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Disabling Repository Forking for IP Protection",
    scenario: "A financial institution wants to ensure employees cannot fork proprietary intellectual property repositories to personal public GitHub profiles.",
    question: "Which organization-level policy enforces this restriction?",
    options: [
      { id: 'A', text: "Set the default repository visibility for the organization to internal" },
      { id: 'B', text: "Disable the 'allow forking of private repositories' organization setting" },
      { id: 'C', text: "Require signed commits on every repository in the organization" },
      { id: 'D', text: "Require SAML single sign-on before any repository can be cloned" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Disabling 'Allow forking of private repositories' at the organization level removes the Fork button and blocks git fork actions, preventing private proprietary code from being cloned outside organizational boundaries.",
    referenceUrl: "https://docs.github.com/en/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization",
    tags: ["Forking", "Data Loss Prevention", "Governance", "Enterprise"]
  },
  {
    id: "gh-500-240",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "GitHub Custom Organization Roles",
    scenario: "An enterprise wants to create a 'Security Auditor' role that can view security overview dashboards and alerts without having write access to code or settings.",
    question: "How are Custom Organization Roles created in GitHub Enterprise Cloud?",
    options: [
      { id: 'A', text: "In organization settings, clone a base role and edit its team assignments" },
      { id: 'B', text: "In enterprise settings, define the role and push it down to each organization" },
      { id: 'C', text: "Custom organization roles are not supported; only the built-in roles exist" },
      { id: 'D', text: "In organization settings, create a role and pick the granular security permissions" }
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
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "GraphQL API for Security Telemetry Aggregation",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "Why do enterprise security automation scripts prefer querying security alerts via GitHub's GraphQL API rather than REST API?",
    options: [
      { id: 'A', text: "The REST alert endpoints are deprecated across GitHub and will stop serving security alerts" },
      { id: 'B', text: "GraphQL returns results faster because its responses are compiled on the client side" },
      { id: 'C', text: "GraphQL needs no authentication token, so automation avoids credential management" },
      { id: 'D', text: "GraphQL fetches alerts for many repositories in one nested query, saving rate limit" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub's GraphQL API enables batch querying of complex nested entities: a single GraphQL query can retrieve repositories, active security configurations, and open alerts across multiple organizations without incurring hundreds of REST API roundtrips.",
    referenceUrl: "https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-code-security",
    tags: ["GraphQL", "API", "Automation", "Performance"]
  },
  {
    id: "gh-500-242",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Auto-Enablement of GHAS on New Repositories",
    scenario: "An enterprise policy dictates that every newly created repository must have Secret Scanning, Push Protection, and Dependabot enabled automatically.",
    question: "How is this zero-day coverage configured?",
    options: [
      { id: 'A', text: "Restrict repository creation to the platform team's own service account" },
      { id: 'B', text: "Set an organization security configuration as the default for new repositories" },
      { id: 'C', text: "Run a monthly job that enables the features on any new repository" },
      { id: 'D', text: "Have an engineer configure each repository as it is created" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Organization Security Configurations, administrators set a configuration profile as the default and toggle 'Automatically apply to newly created repositories', ensuring continuous zero-day security posture.",
    referenceUrl: "https://docs.github.com/en/code-security/securing-your-organization/enabling-security-features-in-your-organization",
    tags: ["Security Configurations", "Automation", "Governance", "Enterprise"]
  },
  {
    id: "gh-500-243",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Enterprise Allowed Actions: Restricting to Verified Creators",
    scenario: "To prevent supply chain poisoning, an enterprise wants to restrict Actions workflows to run only first-party GitHub actions and marketplace actions by verified publishers.",
    question: "Which policy setting in Enterprise Actions achieves this?",
    options: [
      { id: 'A', text: "Require manual approval before any workflow run in the enterprise" },
      { id: 'B', text: "Disable the Marketplace listing for every organization beneath it" },
      { id: 'C', text: "Disable Actions entirely for the organizations holding the code" },
      { id: 'D', text: "Allow select actions, limited to those from GitHub and verified creators" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enterprise Actions policy allows setting 'Allow select actions: Allow actions created by GitHub and verified creators', blocking unvetted community actions while permitting official trusted libraries.",
    referenceUrl: "https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise",
    tags: ["Allowed Actions", "Supply Chain", "Enterprise", "Governance"]
  },
  {
    id: "gh-500-244",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Rulesets: Requiring Linear Commit History",
    scenario: "An engineering team wants to eliminate messy merge commits and enforce clean git rebase or squash workflows across all enterprise repositories.",
    question: "Which rule in GitHub Rulesets enforces this standard?",
    options: [
      { id: 'A', text: "Require the status checks to pass before a merge" },
      { id: 'B', text: "Require a linear history on the protected branch" },
      { id: 'C', text: "Require signed commits on the protected default branch" },
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
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Managing Security Advisories for Private Vulnerabilities",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "When a repository security advisory is published, which public database receives the vulnerability mapping from GitHub?",
    options: [
      { id: 'A', text: "The National Vulnerability Database, which then notifies GitHub in turn" },
      { id: 'B', text: "The OSV database, which is the only consumer of repository advisories" },
      { id: 'C', text: "The GitHub Advisory Database, which propagates the CVE onward to NVD" },
      { id: 'D', text: "The package registry the project publishes to, and nowhere else" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Publishing a Security Advisory submits the vulnerability details to the curated GitHub Advisory Database, issuing a CVE and updating Dependabot alert feeds globally to protect open-source consumers.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory",
    tags: ["Advisory Database", "CVE", "NVD", "Disclosure"]
  },
  {
    id: "gh-500-246",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Restricting Secret Sharing across Enterprise Organizations",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "An enterprise has sensitive deployment credentials stored in an organization secret. How can access be restricted to prevent unauthorized repositories from reading it?",
    options: [
      { id: 'A', text: "Scope the secret to an environment with required reviewers on deploys" },
      { id: 'B', text: "Scope the secret to all repositories and audit its use in the audit log" },
      { id: 'C', text: "Scope the secret to selected repositories and list only the release repos" },
      { id: 'D', text: "Organization secrets cannot be scoped; move it to each repository instead" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Organization secrets should always be scoped to 'Selected repositories' rather than 'All repositories', enforcing least-privilege credential access and preventing unauthorized sandboxes from accessing production keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#accessing-your-secrets",
    tags: ["Secrets", "Least Privilege", "Governance", "Access Control"]
  },
  {
    id: "gh-500-247",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Rulesets: Bypass Permissions Configuration",
    scenario: "During an emergency production outage, senior on-call site reliability engineers need to bypass branch protection rules to deploy an urgent hotfix.",
    question: "How do GitHub Rulesets manage authorized emergency bypasses?",
    options: [
      { id: 'A', text: "Through a break-glass account whose credentials the on-call lead holds for emergencies" },
      { id: 'B', text: "Through temporarily disabling the ruleset, which the audit log records with the actor" },
      { id: 'C', text: "Through an explicit bypass list on the ruleset, naming the teams or roles allowed to bypass" },
      { id: 'D', text: "Rulesets permit no bypass at all; an emergency change has to wait for the review" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rulesets include a dedicated Bypass List: administrators can designate specific roles or teams allowed to bypass rules in emergencies, with all bypass actions logged in the enterprise audit log.",
    referenceUrl: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets#about-bypass-permissions",
    tags: ["Rulesets", "Bypass", "Incident Response", "Governance"]
  },
  {
    id: "gh-500-248",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "Continuous Security Compliance Monitoring (SOC 2, ISO 27001)",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "How does GitHub Advanced Security support enterprise SOC 2 and ISO 27001 compliance frameworks?",
    options: [
      { id: 'A', text: "Automated scanning, audit logs, signature verification and review records" },
      { id: 'B', text: "Automated penetration testing of each deployed release against the control set" },
      { id: 'C', text: "Encryption of repository contents at rest with a customer-managed key per org" },
      { id: 'D', text: "Automated generation of the control narratives each auditor asks the team for" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GHAS satisfies critical SOC 2 and ISO 27001 controls by automating secure SDLC requirements: static analysis (SAST), software composition analysis (SCA), secret leak prevention, and comprehensive audit trail logging.",
    referenceUrl: "https://docs.github.com/en/code-security",
    tags: ["Compliance", "SOC 2", "ISO 27001", "Governance"]
  },
  {
    id: "gh-500-249",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    domainName: "Describe GitHub Security suites, features, and ecosystem",
    title: "GitHub Advanced Security: The Two Products",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "Which products is GitHub Advanced Security sold as for GitHub Team and Enterprise plans?",
    options: [
      { id: 'A', text: "Actions, Packages, and Pages, with their shared audit log" },
      { id: 'B', text: "The Git CLI, GitHub Desktop, and the mobile application" },
      { id: 'C', text: "One bundle of code scanning, secret scanning, and Dependabot" },
      { id: 'D', text: "GitHub Secret Protection and GitHub Code Security, sold apart" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub Advanced Security is sold as two separate products, GitHub Secret Protection (secret scanning and push protection on private repositories) and GitHub Code Security (code scanning and dependency review on private repositories), purchasable on GitHub Team or Enterprise plans and each licensed per active committer. It is not a single bundle, and Dependabot alerts and security updates are free for all repositories rather than a paid pillar. Actions, Packages, Pages, the Git clients, and Issues, Discussions and Projects are not security products.",
    referenceUrl: "https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security",
    tags: ["GHAS", "Summary", "Pillars", "Architecture"]
  },
  {
    id: "gh-500-250",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Managing Security Posture with Security Advisory Credits",
    scenario: "An open-source repository maintains a high-security posture and wants to publicly credit white-hat security researchers who report vulnerabilities responsibly through private security advisories.",
    question: "How does GitHub recognize external security researchers on published advisories?",
    options: [
      { id: 'A', text: "By assigning advisory credits, which appear on the researcher's profile and the CVE record" },
      { id: 'B', text: "By granting the researcher a security manager role on the affected organization" },
      { id: 'C', text: "By listing the report in the repository's own contributors file on publication" },
      { id: 'D', text: "By paying a bounty from the enterprise's billing balance when it publishes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GitHub allows maintainers to officially credit security researchers when publishing Security Advisories. These credits appear on the researcher's public profile, honoring responsible disclosure.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory#acknowledging-contributors-to-a-security-advisory",
    tags: ["Security Advisories", "Credits", "Responsible Disclosure", "Community"]
  }
];

export default GITHUB_GHAS_QUESTIONS_10;
