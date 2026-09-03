export const GITHUB_GHAS_FLASHCARDS_2 = [
  {
    id: "github-ghas-fc-26",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    front: "The Dependency Graph: Manifest and Lockfile Parsing",
    hint: "Inventorying all direct and transitive open-source dependencies in a repository.",
    back: "The <strong>Dependency Graph</strong> automatically parses package manifests and lockfiles (<code>package-lock.json</code>, <code>pom.xml</code>, <code>requirements.txt</code>, <code>go.sum</code>) to maintain a complete bill of materials for direct and transitive dependencies.",
    tags: ["Dependency Graph", "SBOM", "Supply Chain"]
  },
  {
    id: "github-ghas-fc-27",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Alerts vs. Dependabot Security Updates",
    hint: "Notifying developers of CVEs vs. automatically opening pull requests to patch them.",
    back: "<strong>Dependabot Alerts</strong> notify repository maintainers when a dependency has a known vulnerability. <strong>Dependabot Security Updates</strong> automatically open pull requests to bump the vulnerable package to the minimum safe patched version.",
    tags: ["Dependabot", "Security Updates", "Alerts"]
  },
  {
    id: "github-ghas-fc-28",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Version Updates: Scheduled Maintenance",
    hint: "Configuring scheduled pull requests to keep packages on latest releases.",
    back: "Configured via <strong><code>.github/dependabot.yml</code></strong>, Dependabot Version Updates regularly checks package registries (npm, PyPI, Docker) on a schedule (daily, weekly) and opens PRs to upgrade dependencies to the latest releases.",
    tags: ["Dependabot", "Version Updates", "dependabot.yml"]
  },
  {
    id: "github-ghas-fc-29",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "The GitHub Advisory Database",
    hint: "Curated database of CVEs and security advisories mapped to package ecosystems.",
    back: "The <strong>GitHub Advisory Database</strong> aggregates security vulnerabilities from CVE lists, National Vulnerability Database (NVD), and direct community security advisories, curated by GitHub's security research team.",
    tags: ["Advisory Database", "CVE", "Vulnerabilities"]
  },
  {
    id: "github-ghas-fc-30",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Alert Severity Levels: CVSS Scoring",
    hint: "Critical, High, Medium, and Low severity classifications.",
    back: "Vulnerabilities are classified using <strong>CVSS (Common Vulnerability Scoring System)</strong>: Low (0.1\u20133.9), Medium (4.0\u20136.9), High (7.0\u20138.9), and Critical (9.0\u201310.0), guiding remediation prioritization.",
    tags: ["CVSS", "Severity", "Prioritization"]
  },
  {
    id: "github-ghas-fc-31",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Exporting Software Bill of Materials (SBOM)",
    hint: "Generating industry-standard SPDX or CycloneDX inventories for compliance.",
    back: "GitHub allows organizations to export an official <strong>SBOM</strong> in standard SPDX format via the web UI or REST API (<code>GET /repos/{owner}/{repo}/dependency-graph/sbom</code>), satisfying enterprise compliance audits.",
    tags: ["SBOM", "SPDX", "Compliance", "Dependency Graph"]
  },
  {
    id: "github-ghas-fc-32",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "actions/dependency-review-action: PR Gatekeeping",
    hint: "Blocking pull requests that introduce vulnerable dependencies or bad licenses.",
    back: "The <strong>Dependency Review Action</strong> runs in CI on pull requests, inspecting newly added packages. It automatically fails the check if a PR introduces packages with known vulnerabilities or unauthorized open-source licenses.",
    tags: ["Dependency Review", "CI/CD", "Licensing", "Supply Chain"]
  },
  {
    id: "github-ghas-fc-33",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Alert Dismissal Reasons",
    hint: "A fix has already been started, No bandwidth, Risk is tolerable, Vulnerable code is not used.",
    back: "Maintainers can dismiss alerts by selecting an official reason: <strong>'A fix has already been started'</strong>, <strong>'No bandwidth to fix this'</strong>, <strong>'Risk is tolerable to this project'</strong>, or <strong>'Vulnerable code is not used'</strong>.",
    tags: ["Dependabot", "Triage", "Dismissal"]
  },
  {
    id: "github-ghas-fc-34",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Grouped Version Updates",
    hint: "Bundling multiple semantic package updates into a single combined pull request.",
    back: "In <code>dependabot.yml</code>, define <strong><code>groups:</code></strong> (e.g. <code>production-dependencies: { patterns: ['*'] }</code>) to combine multiple minor and patch updates into a single PR, avoiding review fatigue.",
    tags: ["Dependabot", "Grouped Updates", "dependabot.yml"]
  },
  {
    id: "github-ghas-fc-35",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Ignore Rules in dependabot.yml",
    hint: "Preventing Dependabot from opening updates for specific packages or major versions.",
    back: "Under <code>ignore:</code> in <code>dependabot.yml</code>, specify <code>dependency-name: 'webpack'</code> and <code>update-types: ['version-update:semver-major']</code> to prevent Dependabot from suggesting breaking major updates.",
    tags: ["Dependabot", "Ignore Rules", "Configuration"]
  },
  {
    id: "github-ghas-fc-36",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Private Package Registries",
    hint: "Authenticating Dependabot to private Artifactory, Nexus, or GitHub Packages feeds.",
    back: "In <code>dependabot.yml</code>, configure the <strong><code>registries:</code></strong> block with token authentication, allowing Dependabot to inspect private enterprise feeds for npm, NuGet, Maven, or PyPI packages.",
    tags: ["Dependabot", "Private Registries", "Authentication"]
  },
  {
    id: "github-ghas-fc-37",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependency Review Tab in Pull Requests",
    hint: "Visualizing dependency changes, vulnerabilities, and license changes in PR diffs.",
    back: "The <strong>'Dependency review'</strong> tab on GitHub pull requests highlights all dependencies added, updated, or removed, showing CVSS scores, vulnerable paths, and license modifications directly in the review UI.",
    tags: ["Dependency Review", "Pull Requests", "UI"]
  },
  {
    id: "github-ghas-fc-38",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    front: "Automatic Reopening of Dependabot Alerts",
    hint: "Why Dependabot alerts reopen automatically if a vulnerable package is re-added.",
    back: "If an alert was previously dismissed as 'Vulnerable code is not used' and a developer later imports the vulnerable function, or if a package is downgraded in lockfiles, Dependabot automatically reopens the alert.",
    tags: ["Dependabot", "Alert Lifecycle", "Automation"]
  },
  {
    id: "github-ghas-fc-39",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "License Compliance via Dependency Review",
    hint: "Enforcing corporate open-source license policies (blocking GPL, AGPL).",
    back: "Configuring license policies in Dependency Review allows enterprises to automatically block pull requests that introduce dependencies with copyleft licenses (like GPL-3.0 or AGPL-3.0) into proprietary software.",
    tags: ["Licensing", "Compliance", "Dependency Review"]
  },
  {
    id: "github-ghas-fc-40",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Transitive vs. Direct Dependency Vulnerabilities",
    hint: "Vulnerabilities in packages you depend on vs. packages your dependencies depend on.",
    back: "A <strong>direct dependency</strong> is listed in your package manifest. A <strong>transitive dependency</strong> is a dependency of a dependency. Dependabot can patch direct dependencies, and upgrades transitive dependencies by bumping parent lockfile constraints.",
    tags: ["Transitive", "Dependencies", "Supply Chain"]
  },
  {
    id: "github-ghas-fc-41",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Open Pull Request Limits: open-pull-requests-limit",
    hint: "Preventing Dependabot from overwhelming maintainers with dozens of simultaneous PRs.",
    back: "Configure <strong><code>open-pull-requests-limit: 5</code></strong> in <code>dependabot.yml</code> (default is 5). Dependabot will not open additional version update PRs until existing ones are merged or closed.",
    tags: ["Dependabot", "Limits", "Configuration"]
  },
  {
    id: "github-ghas-fc-42",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Security Updates for Transitive Vulnerabilities",
    hint: "How Dependabot patches deep transitive vulnerabilities in lockfiles.",
    back: "When a transitive vulnerability has a patch, Dependabot attempts to bump the sub-dependency version inside the lockfile (e.g. <code>package-lock.json</code>) without changing top-level manifest constraints.",
    tags: ["Dependabot", "Transitive", "Lockfile", "Security Updates"]
  },
  {
    id: "github-ghas-fc-43",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    front: "Configuring Dependabot Cooldown and Rebase Strategies",
    hint: "Automatic rebasing of Dependabot PRs when the base branch advances.",
    back: "Dependabot automatically rebases its open pull requests when conflicts occur or when the base branch updates, configured via <code>rebase-strategy: auto</code> in <code>dependabot.yml</code>.",
    tags: ["Dependabot", "Rebase", "Git"]
  },
  {
    id: "github-ghas-fc-44",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Target Branch Configuration: target-branch",
    hint: "Opening dependency updates against a develop branch instead of main.",
    back: "By default, Dependabot opens PRs against the repository default branch. Specify <strong><code>target-branch: 'develop'</code></strong> in <code>dependabot.yml</code> to route update PRs to staging branches.",
    tags: ["Dependabot", "target-branch", "Branching"]
  },
  {
    id: "github-ghas-fc-45",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Enabling Dependabot via Organization Security Configurations",
    hint: "Applying Dependabot alerts and security updates across all organization repos.",
    back: "Organization owners use <strong>Security Configurations</strong> to enable Dependabot Alerts and Dependabot Security Updates across all repositories simultaneously with enforced enablement.",
    tags: ["Governance", "Security Configurations", "Dependabot"]
  },
  {
    id: "github-ghas-fc-46",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot Milestone and Label Assigners",
    hint: "Adding custom labels, milestones, and reviewers to Dependabot PRs.",
    back: "In <code>dependabot.yml</code>, specify <code>labels: ['dependencies', 'security']</code>, <code>reviewers: ['security-team']</code>, and <code>assignees: ['lead-dev']</code> to automate PR triage.",
    tags: ["Dependabot", "Labels", "Triage", "Automation"]
  },
  {
    id: "github-ghas-fc-47",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Repository Security Advisories: Private Vulnerability Reporting",
    hint: "Privately collaborating with external security researchers on zero-day fixes.",
    back: "<strong>Repository Security Advisories</strong> allows project maintainers to privately receive, triage, and patch security vulnerabilities reported by researchers in a private temporary fork before public disclosure.",
    tags: ["Advisories", "Private Vulnerability Reporting", "Collaboration"]
  },
  {
    id: "github-ghas-fc-48",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    front: "Publishing a Security Advisory and Requesting a CVE",
    hint: "GitHub as a CVE Numbering Authority (CNA) issuing official CVE identifiers.",
    back: "GitHub is an authorized <strong>CVE Numbering Authority (CNA)</strong>. When maintainers publish a public Security Advisory, GitHub can assign an official CVE identifier directly from the repository interface.",
    tags: ["CVE", "CNA", "Security Advisories", "Disclosure"]
  },
  {
    id: "github-ghas-fc-49",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependabot API: Listing and Resolving Alerts Programmatically",
    hint: "Automating vulnerability tracking in corporate dashboards.",
    back: "Use the REST API endpoint <code>GET /repos/{owner}/{repo}/dependabot/alerts</code> to list open alerts and <code>PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}</code> to update state and dismissal reason.",
    tags: ["Dependabot", "REST API", "Automation"]
  },
  {
    id: "github-ghas-fc-50",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    front: "Dependency Graph in Enterprise Private Repositories",
    hint: "Enabling dependency graph on private repos without exposing code.",
    back: "Dependency Graph requires explicit enablement on private repositories under repository settings (or organization policy). It extracts package names and version strings without exposing source code.",
    tags: ["Dependency Graph", "Privacy", "Configuration"]
  }
];

export default GITHUB_GHAS_FLASHCARDS_2;
