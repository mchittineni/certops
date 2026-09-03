export const GITHUB_GHAS_FLASHCARDS_7 = [
  {
    id: "github-ghas-fc-151",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Predicates: Defining Reusable Logic in QL",
    hint: "Functions without side effects defining logical relationships in QL.",
    back: "In QL, a <strong>predicate</strong> is a logical relation that evaluates to true or false for given inputs (e.g. <code>predicate isUserInput(Expr e) { ... }</code>), enabling modular query construction.",
    tags: ["CodeQL", "QL Language", "Predicates"]
  },
  {
    id: "github-ghas-fc-152",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Classes: Modeling Types with Characteristics",
    hint: "Object-oriented modeling of code entities in QL.",
    back: "A <strong>QL class</strong> logical type represents a subset of existing values matching a characteristic predicate (e.g. <code>class ControllerAction extends Method { ... }</code>).",
    tags: ["CodeQL", "QL Language", "Object-Oriented"]
  },
  {
    id: "github-ghas-fc-153",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Alerts: Tracking Across Branch Renames",
    hint: "How GitHub tracks alert identity across git refactoring and branch changes.",
    back: "GitHub tracks code scanning alert identity using <strong>location hashes and semantic AST fingerprints</strong>, ensuring alerts persist accurately even when lines of code move due to unrelated edits.",
    tags: ["Code Scanning", "Fingerprinting", "Alert Tracking"]
  },
  {
    id: "github-ghas-fc-154",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Language Specifier: javascript-typescript vs. python",
    hint: "Exact language identifier strings required in CodeQL workflows.",
    back: "Use exact identifier strings in <code>codeql-action/init</code>: <strong><code>javascript-typescript</code></strong>, <strong><code>python</code></strong>, <strong><code>java-kotlin</code></strong>, <strong><code>c-cpp</code></strong>, <strong><code>csharp</code></strong>, <strong><code>go</code></strong>, <strong><code>ruby</code></strong>, and <strong><code>swift</code></strong>.",
    tags: ["CodeQL", "Languages", "Syntax"]
  },
  {
    id: "github-ghas-fc-155",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Analysis: Handling Compiled C++ and C# Builds",
    hint: "Ensuring clean incremental compiler monitoring during build.",
    back: "CodeQL monitors native compiler processes (<code>gcc</code>, <code>clang</code>, <code>cl.exe</code>, <code>msbuild</code>). Ensure all build steps run without daemon caching or distributed build systems that bypass local execution.",
    tags: ["CodeQL", "C++", "C#", "Compilation"]
  },
  {
    id: "github-ghas-fc-156",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Diagnostic Warnings in GitHub Actions Logs",
    hint: "Low extraction percentage warnings in compiled codebases.",
    back: "If CodeQL logs warn that less than 80% of source files were extracted, check compiler logs. Missing third-party headers or skipped projects reduce analysis coverage.",
    tags: ["CodeQL", "Diagnostics", "Troubleshooting"]
  },
  {
    id: "github-ghas-fc-157",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Code Scanning Pull Request Comments vs. Annotations",
    hint: "Inline diff annotations vs. dedicated Security alert overview tab.",
    back: "Code scanning findings appear as: inline file annotations on changed PR lines, an overall status check entry in the PR timeline, and entries in the repository Code Scanning alerts tab.",
    tags: ["Code Scanning", "UI", "Pull Requests"]
  },
  {
    id: "github-ghas-fc-158",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Running Multiple SARIF Scanners Concurrently",
    hint: "Uploading results from CodeQL, Trivy, and Checkov in the same workflow.",
    back: "Execute each scanner in a separate step and upload each distinct SARIF file with a unique <code>category:</code> parameter (e.g. <code>category: codeql</code>, <code>category: trivy</code>) to keep results segregated.",
    tags: ["SARIF", "upload-sarif", "Multi-Tool"]
  },
  {
    id: "github-ghas-fc-159",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Custom Queries: Setting Metadata Headers",
    hint: "Required query metadata tags: @id, @kind, @problem.severity, @precision.",
    back: "Every CodeQL query requires a comment header with metadata: <strong><code>@id</code></strong> (unique rule ID), <strong><code>@kind problem|path-problem</code></strong>, <strong><code>@problem.severity</code></strong>, and <strong><code>@precision very-high|high</code></strong>.",
    tags: ["CodeQL", "Metadata", "Custom Queries"]
  },
  {
    id: "github-ghas-fc-160",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "CodeQL Path Queries: Visualizing Attack Paths",
    hint: "Distinguishing path-problem queries from plain problem queries in QL.",
    back: "A <strong><code>path-problem</code></strong> query outputs an interactive visual source-to-sink graph in the GitHub UI, requiring <code>import DataFlow::PathGraph</code> and returning <code>source, sink</code> in the <code>select</code> clause.",
    tags: ["CodeQL", "PathGraph", "Taint Tracking", "Visualization"]
  },
  {
    id: "github-ghas-fc-161",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    front: "Troubleshooting CodeQL Memory Out of Memory (OOM) Errors",
    hint: "Increasing runner memory and passing --ram parameters.",
    back: "When CodeQL query evaluation crashes with exit code 137 (OOM), migrate from standard 7 GB runners to GitHub-hosted Larger Runners (16 GB or 32 GB RAM) and allocate <code>ram: 28000</code>.",
    tags: ["CodeQL", "OOM", "Troubleshooting", "Performance"]
  },
  {
    id: "github-ghas-fc-162",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Enterprise Security Configurations: Enforcing Policies",
    hint: "Preventing repository administrators from disabling security features.",
    back: "When applying a Security Configuration, enterprise administrators can toggle <strong>'Enforce'</strong>. This locks the security features so local repository maintainers cannot turn them off.",
    tags: ["Security Configurations", "Enforcement", "Enterprise", "Governance"]
  },
  {
    id: "github-ghas-fc-163",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Audit Log Event: code_scanning.alert_dismissed",
    hint: "Auditing developer justification when high-severity alerts are closed.",
    back: "The audit log event <strong><code>code_scanning.alert_dismissed</code></strong> captures the user identity, timestamp, repository, rule ID, and user-provided dismissal justification for compliance tracking.",
    tags: ["Audit Log", "Compliance", "Triage"]
  },
  {
    id: "github-ghas-fc-164",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "GitHub Organization Base Permissions: Read vs. None",
    hint: "Setting minimum default repository permissions for all organization members.",
    back: "Organization base permissions configure default access: <strong>'Read'</strong> allows all members to view repos, while <strong>'None'</strong> requires explicit team assignment, preventing unauthorized code access.",
    tags: ["Organization", "Permissions", "RBAC", "Governance"]
  },
  {
    id: "github-ghas-fc-165",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enforcing CodeQL in Monorepos across Multiple Teams",
    hint: "Using GitHub Rulesets to mandate separate CodeQL checks for each service.",
    back: "In monorepos with multiple languages, configure Rulesets requiring status checks for both <code>CodeQL / Analyze (backend)</code> and <code>CodeQL / Analyze (frontend)</code> before pull requests can merge.",
    tags: ["Rulesets", "Monorepo", "Governance", "CodeQL"]
  },
  {
    id: "github-ghas-fc-166",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Enterprise Committer Calculation for GHAS Billing",
    hint: "How GitHub calculates active committer licenses across organizations.",
    back: "GitHub deduplicates users across an enterprise: a developer pushing commits to 10 private GHAS-enabled repositories across 3 organizations consumes exactly <strong>one single GHAS committer license</strong>.",
    tags: ["GHAS", "Billing", "Committer Calculation", "Enterprise"]
  },
  {
    id: "github-ghas-fc-167",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Security Managers Team Access to Private Vulnerability Advisories",
    hint: "Centralized visibility into active zero-day vulnerability discussions.",
    back: "Members of the <strong>Security Managers</strong> organization role have automatic access to all private Repository Security Advisories, enabling centralized coordination of zero-day patch disclosures.",
    tags: ["Security Managers", "Advisories", "Governance"]
  },
  {
    id: "github-ghas-fc-168",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Automating Secret Scanning Bypass Approvals via Webhook",
    hint: "Integrating bypass requests with corporate Slack approval channels.",
    back: "Listen to <code>secret_scanning_push_protection.requested</code> webhooks and send an interactive Slack message to the on-call security engineer to approve or reject the push in real time.",
    tags: ["Push Protection", "Approvals", "Automation", "Slack"]
  },
  {
    id: "github-ghas-fc-169",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Disabling Forking on Sensitive Enterprise Repositories",
    hint: "Preventing proprietary source code from being forked to personal accounts.",
    back: "Enterprise and organization settings allow administrators to <strong>disable repository forking</strong>, preventing proprietary code from being copied outside organization security controls.",
    tags: ["Governance", "Forking", "Data Protection", "Enterprise"]
  },
  {
    id: "github-ghas-fc-170",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d4",
    front: "Fine-Grained PAT Expiration Enforcement",
    hint: "Mandating maximum token lifetime of 30 or 90 days across an organization.",
    back: "Organizations can enforce fine-grained personal access token lifetime policies, requiring all developer tokens to expire after a maximum duration (e.g. 30, 60, or 90 days).",
    tags: ["PATs", "Expiration", "Compliance", "Security"]
  },
  {
    id: "github-ghas-fc-171",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Revoking GitHub Personal Access Tokens Automatically",
    hint: "Instant token revocation upon detection in public commits.",
    back: "When GitHub Secret Scanning detects a leaked GitHub Personal Access Token (classic or fine-grained) in a public commit, GitHub's internal token service automatically <strong>revokes the token immediately</strong>.",
    tags: ["Secret Scanning", "Automated Revocation", "PATs"]
  },
  {
    id: "github-ghas-fc-172",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Custom Pattern Regex Groups",
    hint: "Using capture groups to isolate the actual secret from surrounding prefixes.",
    back: "Custom secret patterns allow defining capture groups (e.g. <code>pattern: 'key_([a-zA-Z0-9]{32})'</code>). GitHub isolates the capture group to index the secret value while ignoring surrounding formatting.",
    tags: ["Custom Patterns", "Regex", "Secret Scanning"]
  },
  {
    id: "github-ghas-fc-173",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    front: "Push Protection: Web Interface Commits",
    hint: "Push protection active when editing files directly in GitHub web UI.",
    back: "Push Protection actively guards not only git CLI pushes, but also <strong>file edits, uploads, and branch creations made directly in the GitHub web UI</strong>.",
    tags: ["Push Protection", "Web UI", "Security"]
  },
  {
    id: "github-ghas-fc-174",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Custom Pattern Testing Workflow",
    hint: "Validating regex against positive and negative test strings.",
    back: "Before saving a custom pattern, GitHub requires at least one <strong>positive test string</strong> that matches and one <strong>negative test string</strong> that must not match, preventing erroneous patterns from deploying.",
    tags: ["Custom Patterns", "Testing", "Governance"]
  },
  {
    id: "github-ghas-fc-175",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning for Azure Service Principals",
    hint: "Partner integration detecting Azure AD client secrets.",
    back: "GitHub partners with Microsoft Azure to identify exposed Azure Service Principal credentials and management certificates, alerting Azure Security Center for rapid tenant remediation.",
    tags: ["Azure", "Secret Scanning", "Partner Patterns"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_7;
