export const GITHUB_GHAS_FLASHCARDS_8 = [
  {
    id: "github-ghas-fc-176",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Slack Webhook URL Detection",
    hint: "Revoking incoming webhook URLs committed to repositories.",
    back: "When a Slack incoming webhook URL is detected in public code, GitHub notifies Slack immediately. Slack invalidates the webhook URL automatically, preventing spam and channel interception.",
    tags: ["Slack", "Secret Scanning", "Partner Notification"]
  },
  {
    id: "github-ghas-fc-177",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Push Protection: Handling Binary Files",
    hint: "Does push protection inspect binary assets or zip archives?",
    back: "Push Protection inspects <strong>text-based files and diffs</strong> in the pushed commits. It does not extract or decompile compressed zip archives or binary assets during the push gate.",
    tags: ["Push Protection", "Binary Files", "Limitations"]
  },
  {
    id: "github-ghas-fc-178",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Alert Timeline Audit",
    hint: "Viewing detection timestamp, commit SHA, and author in the alert detail view.",
    back: "The alert detail page in GitHub displays the exact <strong>commit SHA</strong>, author, date introduced, file path, and whether the secret has been verified as active or revoked.",
    tags: ["Secret Scanning", "Audit", "Triage"]
  },
  {
    id: "github-ghas-fc-179",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Push Protection: Command Line Remediation URL",
    hint: "Opening the web link provided in git push stderr output.",
    back: "When Push Protection blocks a push, the git terminal output displays a secure unique URL. The developer clicks the link to review the detected secret and either remove it or record a justified bypass.",
    tags: ["Push Protection", "CLI", "Remediation"]
  },
  {
    id: "github-ghas-fc-180",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Detecting Database Connection Strings",
    hint: "Identifying MongoDB, PostgreSQL, and MySQL connection strings with credentials.",
    back: "Secret scanning includes patterns that detect URI connection strings containing embedded passwords (e.g. <code>postgres://user:password@host/db</code>), flagging them before production databases are breached.",
    tags: ["Secret Scanning", "Databases", "Credentials"]
  },
  {
    id: "github-ghas-fc-181",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Filtering Closed Alerts",
    hint: "Re-evaluating historical dismissed alerts for compliance audits.",
    back: "Security teams can filter the Secret Scanning alert table by <strong>Closed</strong> status and filter by resolution reason (e.g. 'False positive') to conduct periodic peer audits of closed alerts.",
    tags: ["Secret Scanning", "Audit", "Compliance"]
  },
  {
    id: "github-ghas-fc-182",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Custom Pattern Scope: Organization vs. Enterprise",
    hint: "Inheriting custom secret detection rules across all enterprise organizations.",
    back: "Custom secret scanning patterns defined at the <strong>Enterprise level</strong> automatically apply to all repositories across all organizations in the enterprise, ensuring uniform credential protection.",
    tags: ["Custom Patterns", "Enterprise", "Hierarchy"]
  },
  {
    id: "github-ghas-fc-183",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: Pre-Receive Hook Architecture",
    hint: "How Push Protection executes as a pre-receive hook in git transaction.",
    back: "Push Protection runs as a <strong>pre-receive git hook</strong> on GitHub's git proxy. If a secret is matched, the transaction aborts before the git reference pointer updates, keeping git history pristine.",
    tags: ["Push Protection", "Git Internals", "Pre-Receive"]
  },
  {
    id: "github-ghas-fc-184",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning: OpenID Connect (OIDC) as Secret Mitigation",
    hint: "Eliminating static cloud credentials so there is nothing to leak.",
    back: "The ultimate remediation for leaked cloud provider keys is migrating to <strong>GitHub Actions OIDC</strong>, using short-lived tokens and eliminating static AWS/Azure credentials entirely.",
    tags: ["OIDC", "Secret Scanning", "Best Practices"]
  },
  {
    id: "github-ghas-fc-185",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d1",
    front: "Secret Scanning Notification Center",
    hint: "Managing personal notification preferences for secret alerts.",
    back: "Users can customize notification settings under their GitHub profile to receive instant email notifications or web alerts when secrets are detected in repositories they watch or maintain.",
    tags: ["Notifications", "Secret Scanning", "User Settings"]
  },
  {
    id: "github-ghas-fc-186",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot: Maven and Gradle Multi-Module Support",
    hint: "Resolving dependencies across parent and child pom.xml hierarchies.",
    back: "Dependabot natively parses parent POMs, BOMs (Bill of Materials), and Gradle subprojects, calculating the correct dependency tree across multi-module Java projects.",
    tags: ["Dependabot", "Java", "Maven", "Gradle"]
  },
  {
    id: "github-ghas-fc-187",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot: Dockerfile Package Updates",
    hint: "Automating base image digest and tag updates in Dockerfiles.",
    back: "Configuring <code>package-ecosystem: 'docker'</code> in <code>dependabot.yml</code> enables Dependabot to monitor base images (e.g. <code>FROM node:20-alpine</code>) and open PRs when base images release patches.",
    tags: ["Dependabot", "Docker", "Containers"]
  },
  {
    id: "github-ghas-fc-188",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot: Terraform Module Updates",
    hint: "Automating version bumps for Terraform providers and modules.",
    back: "Configure <code>package-ecosystem: 'terraform'</code> in <code>dependabot.yml</code> to have Dependabot automatically open PRs when newer versions of AWS, Azure, or HashiCorp providers are released.",
    tags: ["Dependabot", "Terraform", "IaC"]
  },
  {
    id: "github-ghas-fc-189",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Security Updates: CI Build Failures",
    hint: "What happens when a Dependabot security update PR fails CI tests?",
    back: "If a Dependabot security PR fails tests, the alert remains open. The PR highlights the test failures, allowing engineers to investigate breaking changes before merging the security fix.",
    tags: ["Dependabot", "CI/CD", "Testing"]
  },
  {
    id: "github-ghas-fc-190",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependency Graph: Lockfile-Only vs. Manifest-Only Repos",
    hint: "Why committed lockfiles provide vastly superior dependency accuracy.",
    back: "Without lockfiles, Dependency Graph infers ranges from manifests. Committing accurate lockfiles (<code>package-lock.json</code>, <code>poetry.lock</code>) ensures exact deterministic tracking of all transitive dependencies.",
    tags: ["Dependency Graph", "Lockfiles", "Best Practices"]
  },
  {
    id: "github-ghas-fc-191",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Badges on GitHub Pull Requests",
    hint: "Visual indicators distinguishing Dependabot PRs from human contributions.",
    back: "Dependabot pull requests carry the official <strong>Dependabot badge</strong> and bot avatar, allowing CI workflows and branch protections to apply automated rules or auto-merge policies.",
    tags: ["Dependabot", "UI", "Pull Requests"]
  },
  {
    id: "github-ghas-fc-192",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependency Review Action: Blocking Specific Package Names",
    hint: "Denylisting malicious or deprecated open-source packages in CI.",
    back: "In <code>actions/dependency-review-action</code>, configure <strong><code>denied-packages: ['event-stream', 'malicious-pkg']</code></strong> to automatically block PRs that attempt to introduce banned libraries.",
    tags: ["Dependency Review", "Denylist", "Supply Chain"]
  },
  {
    id: "github-ghas-fc-193",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependency Graph Support for Vendored Go Modules",
    hint: "Managing go.mod dependencies when vendor/ directory is checked in.",
    back: "Dependency Graph parses <code>go.mod</code> and <code>go.sum</code>. If code is vendored, Dependabot updates <code>go.mod</code> and automatically runs <code>go mod vendor</code> to keep the vendored tree in sync.",
    tags: ["Go", "Dependabot", "Vendoring"]
  },
  {
    id: "github-ghas-fc-194",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Rebase Strategy: disabled vs. auto",
    hint: "Controlling whether Dependabot automatically rewrites its open PR branches.",
    back: "Setting <code>rebase-strategy: 'disabled'</code> in <code>dependabot.yml</code> stops Dependabot from auto-rebasing open PRs when the base branch updates, useful if team members are manually editing the PR.",
    tags: ["Dependabot", "Git", "rebase-strategy"]
  },
  {
    id: "github-ghas-fc-195",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Version Updates: Git Commit Signing",
    hint: "Does Dependabot sign its git commits?",
    back: "Yes, all commits authored by Dependabot are cryptographically signed using GitHub's internal GPG key, satisfying <strong>'Require signed commits'</strong> branch protection rules.",
    tags: ["Dependabot", "Signed Commits", "GPG"]
  },
  {
    id: "github-ghas-fc-196",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot: NuGet and .NET Ecosystem Support",
    hint: "Managing package dependencies in .csproj and packages.config.",
    back: "Dependabot parses <code>.csproj</code>, <code>Directory.Build.props</code>, and <code>packages.config</code>, resolving NuGet dependencies and opening PRs with release notes from NuGet.org.",
    tags: ["Dependabot", "NuGet", ".NET"]
  },
  {
    id: "github-ghas-fc-197",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot: Python Ecosystem (pip, poetry, pipenv)",
    hint: "Supported package management workflows in Python repositories.",
    back: "Dependabot natively supports <strong>pip (requirements.txt)</strong>, <strong>Poetry (poetry.lock)</strong>, and <strong>Pipenv (Pipfile.lock)</strong>, updating exact pinned hashes in lockfiles.",
    tags: ["Dependabot", "Python", "Pip", "Poetry"]
  },
  {
    id: "github-ghas-fc-198",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    front: "GitHub Advisory Database: Community Contributions",
    hint: "How security researchers contribute fixes to the GitHub Advisory Database.",
    back: "Security researchers and package maintainers submit proposed improvements and new CVE mappings via open pull requests to the public <strong>github/advisory-database</strong> repository.",
    tags: ["Advisory Database", "Community", "Open Source"]
  },
  {
    id: "github-ghas-fc-199",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot API: Filtering by Ecosystem",
    hint: "Querying Dependabot alerts specific to npm or PyPI via API.",
    back: "Use the <code>package_ecosystem</code> query parameter: <code>GET /repos/{owner}/{repo}/dependabot/alerts?package_ecosystem=npm</code> to triage alerts by technology stack.",
    tags: ["Dependabot", "REST API", "Automation"]
  },
  {
    id: "github-ghas-fc-200",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Software Bill of Materials (SBOM) Generation in CI/CD",
    hint: "Using anchore/sbom-action to generate CycloneDX SBOMs in Actions.",
    back: "Workflows can run <strong><code>anchore/sbom-action</code></strong> to generate detailed CycloneDX or SPDX SBOM JSON files, publishing them as immutable release artifacts for downstream customers.",
    tags: ["SBOM", "CycloneDX", "CI/CD", "Supply Chain"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_8;
