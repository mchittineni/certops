export const GITHUB_GHAS_FLASHCARDS_10 = [
  {
    id: "github-ghas-fc-226",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Analysis Memory Optimization: --no-threads",
    hint: "Debugging resource-constrained runner crashes.",
    back: "In environments with severe memory constraints, passing single-threaded flags prevents parallel evaluation threads from competing for heap memory.",
    tags: ["CodeQL", "Optimization", "Memory"]
  },
  {
    id: "github-ghas-fc-227",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Third-Party Scanners: Snyk SARIF Integration",
    hint: "Uploading Snyk vulnerability scan reports to GitHub Code Scanning.",
    back: "Run <code>snyk test --sarif-file-output=snyk.sarif</code> and upload via <code>github/codeql-action/upload-sarif</code> to view Snyk findings directly in GitHub's Security tab.",
    tags: ["Snyk", "SARIF", "Third-Party", "Code Scanning"]
  },
  {
    id: "github-ghas-fc-228",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Third-Party Scanners: Checkov Infrastructure as Code Scanning",
    hint: "Displaying Terraform and CloudFormation security alerts in Code Scanning.",
    back: "Run Checkov with <code>--output sarif --output-file-path results.sarif</code>. Uploading to GitHub displays misconfigured S3 buckets and open security groups in the Code Scanning tab.",
    tags: ["Checkov", "IaC", "Terraform", "SARIF"]
  },
  {
    id: "github-ghas-fc-229",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL: Ruby Rails Analysis",
    hint: "Analyzing Ruby on Rails web applications without compilation.",
    back: "CodeQL extracts Ruby code directly from source files, natively modeling Rails controllers as HTTP sources and ActiveRecord queries as SQL sinks for taint analysis.",
    tags: ["CodeQL", "Ruby", "Rails"]
  },
  {
    id: "github-ghas-fc-230",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Custom Queries: AST Pattern Matching with call.getTarget()",
    hint: "Identifying invocations of forbidden APIs in source code.",
    back: "Write QL expressions: <code>from MethodCall call where call.getTarget().hasName('execute') and call.getAnArgument() = sink select call, 'Unsafe execution'</code>.",
    tags: ["CodeQL", "AST", "Custom Queries", "Syntax"]
  },
  {
    id: "github-ghas-fc-231",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning: Auto-Closing Alerts on Branch Deletion",
    hint: "What happens to feature branch alerts when the branch is deleted?",
    back: "When a feature branch is deleted after merging, its branch-specific alerts are automatically closed, keeping the alert inventory clean and focused on active branches.",
    tags: ["Code Scanning", "Branching", "Lifecycle"]
  },
  {
    id: "github-ghas-fc-232",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Database Bundle Compression",
    hint: "Compressing database directories for distribution via zip archives.",
    back: "The CodeQL CLI command <code>codeql database bundle --output=db.zip</code> creates an optimized compressed archive containing the code database for easy distribution to security analysts.",
    tags: ["CodeQL CLI", "Database", "Packaging"]
  },
  {
    id: "github-ghas-fc-233",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Query Packs: Semantic Versioning",
    hint: "Managing custom query pack versions with SemVer in qlpack.yml.",
    back: "Declare versions (e.g. <code>version: 1.2.0</code>) in <code>qlpack.yml</code>. Workflows reference query packs using semver ranges to receive non-breaking query updates automatically.",
    tags: ["CodeQL Packs", "SemVer", "Governance"]
  },
  {
    id: "github-ghas-fc-234",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Query Help Documentation: .qhelp Files",
    hint: "Authoring markdown documentation rendered when users click an alert.",
    back: "Every CodeQL query is accompanied by a <strong><code>.qhelp</code></strong> XML/Markdown file detailing the vulnerability overview, remediation code examples, and CWE references displayed in the UI.",
    tags: ["CodeQL", "Documentation", "qhelp", "UI"]
  },
  {
    id: "github-ghas-fc-235",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL CLI: Upgrading Legacy Databases",
    hint: "Running codeql database upgrade across CodeQL CLI version upgrades.",
    back: "When opening a database created by an older CodeQL CLI release, run <code>codeql database upgrade &lt;db&gt;</code> to migrate the relational schema to current query library standards.",
    tags: ["CodeQL CLI", "Maintenance", "Database"]
  },
  {
    id: "github-ghas-fc-236",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Enterprise: Enforcing 2FA for All External Collaborators",
    hint: "Removing contractors whose accounts do not have MFA enabled.",
    back: "Enterprise 2FA policy can mandate two-factor authentication for both internal members and <strong>outside collaborators</strong>; non-compliant collaborators lose repository access immediately.",
    tags: ["2FA", "MFA", "Enterprise", "Access Control"]
  },
  {
    id: "github-ghas-fc-237",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Custom Security Configurations: Auto-Application to Repositories",
    hint: "Applying custom security presets based on repository visibility and topic tags.",
    back: "Enterprise administrators can set custom security configurations to apply automatically to all newly created repositories based on criteria like repository visibility (public vs. private).",
    tags: ["Security Configurations", "Automation", "Governance"]
  },
  {
    id: "github-ghas-fc-238",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Security Managers Role: Limitations",
    hint: "Security managers cannot modify source code or bypass branch protections.",
    back: "The <strong>Security Managers</strong> role grants full management of alerts and security settings, but does <strong>NOT grant write permissions to code</strong>, ensuring clear separation of duties.",
    tags: ["Security Managers", "RBAC", "Separation of Duties"]
  },
  {
    id: "github-ghas-fc-239",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Rulesets: Bypass Allow List",
    hint: "Permitting emergency bypasses strictly for designated admin teams or roles.",
    back: "In a Ruleset, administrators can define a <strong>Bypass list</strong> (e.g. 'Security Operations' role), requiring standard users to adhere to rules while allowing emergency fix deployments.",
    tags: ["Rulesets", "Bypass", "Governance"]
  },
  {
    id: "github-ghas-fc-240",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Audit Log: Identifying Leaked Token IP Addresses",
    hint: "Tracing the source IP address when an authenticated API call uses a stolen PAT.",
    back: "Enterprise audit logs capture the <code>actor_ip</code> and geolocation for every authenticated API request, allowing SOC analysts to determine if a compromised token was used from an unauthorized IP.",
    tags: ["Audit Log", "SOC", "Incident Response", "Forensics"]
  },
  {
    id: "github-ghas-fc-241",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Fine-Grained PATs: Restricting User Permissions via Organization Policy",
    hint: "Preventing members from generating classic full-access tokens.",
    back: "Organizations can toggle <strong>'Restrict classic personal access tokens'</strong> to force all members to use fine-grained, repository-scoped PATs with mandatory expiration dates.",
    tags: ["PATs", "Least Privilege", "Governance"]
  },
  {
    id: "github-ghas-fc-242",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "IP Allow Lists: Bypassing for GitHub Apps and Webhooks",
    hint: "Allowing authorized third-party integrations through IP allowlists.",
    back: "Enterprise IP allowlists allow administrators to configure <strong>'Enable IP allow list configuration for installed GitHub Apps'</strong> so trusted partner integrations are not blocked by corporate CIDR rules.",
    tags: ["IP Allow List", "GitHub Apps", "Integrations"]
  },
  {
    id: "github-ghas-fc-243",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    front: "Private Vulnerability Reporting: Triage Permissions",
    hint: "Who can view and respond to private vulnerability reports?",
    back: "Repository maintainers with admin or write permissions, and members of the designated <strong>Security Managers</strong> team, can view, respond to, and patch private vulnerability reports.",
    tags: ["Private Vulnerability Reporting", "Permissions", "Triage"]
  },
  {
    id: "github-ghas-fc-244",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enterprise Committer Licenses: Reclaiming Inactive Seats",
    hint: "Automatic license reclamation when developers stop pushing commits for 90 days.",
    back: "GHAS licenses are calculated dynamically on a 90-day rolling window. If a developer ceases pushing commits to private GHAS repositories for 90 days, their license seat is <strong>automatically freed</strong>.",
    tags: ["GHAS", "Licensing", "Active Committers", "FinOps"]
  },
  {
    id: "github-ghas-fc-245",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Security Campaigns: Assigning Due Dates and Progress Tracking",
    hint: "Driving remediation deadlines for critical CVE vulnerabilities.",
    back: "In Security Overview, security leaders create <strong>Security Campaigns</strong> targeting specific vulnerabilities (e.g. critical Log4j), assigning remediation deadlines and tracking completion percentages.",
    tags: ["Campaigns", "Remediation", "Security Overview"]
  },
  {
    id: "github-ghas-fc-246",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Rulesets: Requiring Linear Commit History",
    hint: "Preventing merge commits and enforcing squash or rebase workflows.",
    back: "Rulesets can enforce <strong>'Require linear history'</strong> across all organization repositories, ensuring a clean, bisectable git history and preventing confusing multi-parent merge commits.",
    tags: ["Rulesets", "Git", "Linear History", "Governance"]
  },
  {
    id: "github-ghas-fc-247",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Audit Log Streaming: Datadog and Splunk Ingestion",
    hint: "Configuring HTTPS endpoints for real-time audit log streaming.",
    back: "Under Enterprise Settings \u2192 Audit log \u2192 Streams, configure an HTTPS webhook endpoint pointing directly to Splunk HEC or Datadog API with encrypted token authentication.",
    tags: ["Audit Log", "SIEM", "Streaming", "Datadog", "Splunk"]
  },
  {
    id: "github-ghas-fc-248",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Copilot Enterprise: Security Filtering",
    hint: "Preventing Copilot from suggesting publicly copyrighted code and secrets.",
    back: "Enterprise policies for Copilot enable <strong>'Block suggestions matching public code'</strong> and integrate secret scanning filters to ensure AI completions are secure and compliant.",
    tags: ["Copilot", "AI Security", "Compliance", "Enterprise"]
  },
  {
    id: "github-ghas-fc-249",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Exporting Security Findings for Executive Reporting",
    hint: "CSV and PDF executive summary reports from Security Overview.",
    back: "Security Overview allows exporting complete CSV reports of open vulnerabilities, MTTR metrics, and security tool enablement rates across all repositories for executive compliance reporting.",
    tags: ["Security Overview", "Reporting", "Compliance"]
  },
  {
    id: "github-ghas-fc-250",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d4",
    front: "Zero Trust Supply Chain Architecture on GitHub",
    hint: "Combining signed commits, branch protections, Dependabot, and SLSA attestations.",
    back: "A comprehensive Zero Trust supply chain on GitHub enforces: commit signing via GPG/SSH, branch protections preventing direct pushes, automated Dependabot PRs, CodeQL scanning, and SLSA build attestations.",
    tags: ["Zero Trust", "Supply Chain", "Best Practices", "Security"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_10;
