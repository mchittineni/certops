export const GITHUB_GHAS_QUESTIONS_7 = [
  {
    id: "gh-500-151",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph Manifest vs. Lockfile Parsing",
    scenario: "A developer commits a package.json without committing package-lock.json. How does Dependency Graph evaluate project dependencies?",
    question: "What is the impact of omitting lockfiles on Dependency Graph accuracy?",
    options: [
      { id: 'A', text: "GitHub deletes the package.json file" },
      { id: 'B', text: "Dependency Graph automatically commits a new lockfile to the repository" },
      { id: 'C', text: "Dependency Graph infers ranges from the manifest but cannot determine exact resolved transitive dependency versions or exact vulnerability exposure" },
      { id: 'D', text: "Dependency Graph fails to detect any dependencies at all" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When lockfiles are committed, Dependency Graph tracks exact pinned package versions. Without lockfiles, it can only parse semantic version ranges from manifests, reducing accuracy for deep transitive dependencies.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-how-github-uses-and-protects-your-data/about-the-dependency-graph",
    tags: ["Dependency Graph", "Lockfiles", "Supply Chain", "Transitive"]
  },
  {
    id: "gh-500-152",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Security Updates vs. Version Updates",
    scenario: "An engineering team wants automated pull requests strictly for known CVE security vulnerabilities, but wants to keep regular library upgrades manual.",
    question: "Which configuration satisfies this requirement?",
    options: [
      { id: 'A', text: "Disable Dependency Graph on all branches" },
      { id: 'B', text: "Configure dependabot.yml with schedule: never" },
      { id: 'C', text: "Delete all lockfiles from the repository" },
      { id: 'D', text: "Enable Dependabot Security Updates and omit or remove the .github/dependabot.yml version updates configuration" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dependabot Security Updates operate independently of `dependabot.yml`. When enabled in repository settings, Dependabot opens PRs only when an active CVE advisory matches dependencies, without needing version update scheduling.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Dependabot", "Security Updates", "Version Updates", "Configuration"]
  },
  {
    id: "gh-500-153",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "actions/dependency-review-action in Pull Requests",
    scenario: "A security team wants to block any pull request that introduces an npm package with an AGPL-3.0 copyleft license into a proprietary cloud application.",
    question: "How should the team configure automated CI enforcement?",
    options: [
      { id: 'A', text: "Ban developers from adding new npm dependencies" },
      { id: 'B', text: "Write a custom shell script that parses package.json with grep" },
      { id: 'C', text: "Add actions/dependency-review-action to their PR workflow and configure license-check and denied-licenses: ['AGPL-3.0']" },
      { id: 'D', text: "Use Dependabot Version Updates with daily interval" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The official `actions/dependency-review-action` runs on `pull_request` events, analyzing diffs for newly introduced packages. It natively checks both vulnerability severity thresholds and license compliance, failing the PR check if banned licenses like AGPL are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review", "Licensing", "CI/CD", "Compliance"]
  },
  {
    id: "gh-500-154",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Grouped Updates Configuration",
    scenario: "A repository maintainer is overwhelmed by 30 separate Dependabot version update pull requests opened on Monday morning.",
    question: "Which setting in .github/dependabot.yml combines multiple package updates into a single manageable pull request?",
    options: [
      { id: 'A', text: "groups: { production-dependencies: { patterns: ['*'] } }" },
      { id: 'B', text: "allow: [ { dependency-type: direct } ]" },
      { id: 'C', text: "schedule: { interval: monthly }" },
      { id: 'D', text: "open-pull-requests-limit: 1" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `groups` directive in `dependabot.yml` enables bundling multiple dependency upgrades into a single consolidated pull request, drastically reducing review overhead while keeping libraries updated.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#groups",
    tags: ["Dependabot", "Grouped Updates", "dependabot.yml", "Optimization"]
  },
  {
    id: "gh-500-155",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Exporting Enterprise Software Bill of Materials (SBOM)",
    scenario: "An enterprise customer requires an official Software Bill of Materials (SBOM) conforming to the SPDX specification for compliance auditing before signing an enterprise contract.",
    question: "How can the security administrator export this compliance artifact from GitHub?",
    options: [
      { id: 'A', text: "Take a screenshot of the repository insights tab" },
      { id: 'B', text: "Manually copy dependency names from package.json into an Excel spreadsheet" },
      { id: 'C', text: "Download the git log archive" },
      { id: 'D', text: "Export the repository SBOM in SPDX JSON format via the GitHub web UI Dependency Graph page or REST API (GET /repos/{owner}/{repo}/dependency-graph/sbom)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "GitHub natively provides automated SBOM export conforming to the Linux Foundation SPDX standard via the web interface under Insights → Dependency Graph → Export SBOM, and programmatically via the Dependency Graph REST API.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM", "SPDX", "Compliance", "Dependency Graph"]
  },
  {
    id: "gh-500-156",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Package Registry Authentication",
    scenario: "A Java project consumes internal shared JAR libraries from a private JFrog Artifactory registry. Dependabot fails to resolve version updates.",
    question: "What configuration is required to allow Dependabot to authenticate to the private artifact registry?",
    options: [
      { id: 'A', text: "Configure the registries: block in .github/dependabot.yml specifying the registry URL and referencing an encrypted Dependabot secret for authentication" },
      { id: 'B', text: "Commit the private Artifactory credentials to the README.md file" },
      { id: 'C', text: "Embed the plaintext Artifactory password directly in pom.xml" },
      { id: 'D', text: "Make the internal Artifactory repository public to the internet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `dependabot.yml`, authors define the `registries:` dictionary (e.g. `maven-repository: { type: maven-repository, url: ..., token: ${{ secrets.ARTIFACTORY_TOKEN }} }`), providing secure credentials to private package feeds.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries",
    tags: ["Dependabot", "Private Registries", "Maven", "Artifactory"]
  },
  {
    id: "gh-500-157",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dismissing Dependabot Alerts with Business Justification",
    scenario: "A high-severity CVE is flagged in a library used exclusively as an offline build-time utility. The vulnerable code path is never packaged into production containers.",
    question: "Which dismissal reason should the maintainer select to document this risk assessment accurately?",
    options: [
      { id: 'A', text: "No bandwidth to fix this" },
      { id: 'B', text: "False positive" },
      { id: 'C', text: "A fix has already been started" },
      { id: 'D', text: "Vulnerable code is not used" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When a vulnerability exists in a package dependency but the vulnerable function or execution path is not invoked by the application, selecting 'Vulnerable code is not used' records this architectural determination and suppresses notifications.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts",
    tags: ["Dependabot", "Triage", "Alerts", "Risk Assessment"]
  },
  {
    id: "gh-500-158",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Mitigating Dependency Confusion Attacks",
    scenario: "An attacker registers an identically named public package on npm matching an enterprise's internal un-scoped package name with a version number of 99.0.0.",
    question: "Which supply chain best practice defends against this Dependency Confusion attack?",
    options: [
      { id: 'A', text: "Commit node_modules into git history" },
      { id: 'B', text: "Disable Dependency Graph on all repositories" },
      { id: 'C', text: "Scope internal package names under an enterprise namespace (e.g. @mycorp/auth) and configure explicit registry routing in .npmrc" },
      { id: 'D', text: "Never use open-source package registries" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dependency confusion occurs when package managers fetch public packages with higher version numbers instead of internal private libraries. Scoping packages under an organization namespace (e.g. `@mycorp/*`) and configuring strict registry priority in lockfiles prevents confusion.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Supply Chain", "Dependency Confusion", "NPM", "Security"]
  },
  {
    id: "gh-500-159",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "CVSS Scoring in GitHub Advisory Database",
    scenario: "A Dependabot alert displays a CVSS base score of 9.8 with vector string CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H.",
    question: "What severity level does this vulnerability represent?",
    options: [
      { id: 'A', text: "Medium" },
      { id: 'B', text: "High" },
      { id: 'C', text: "Low" },
      { id: 'D', text: "Critical" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CVSS v3.1 scores between 9.0 and 10.0 represent Critical severity. A score of 9.8 with Network vector (AV:N), Low complexity (AC:L), and No privileges required (PR:N) indicates an urgent remote exploitation risk.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["CVSS", "Severity", "Vulnerability", "Metrics"]
  },
  {
    id: "gh-500-160",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Automatic PR Rebasing",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A developer merges several pull requests into main. What happens to open Dependabot security update pull requests?",
    options: [
      { id: 'A', text: "Dependabot deletes all open pull requests" },
      { id: 'B', text: "Dependabot marks the repository as locked" },
      { id: 'C', text: "Dependabot automatically attempts to rebase its open pull requests against the updated main branch" },
      { id: 'D', text: "The repository administrator must manually re-create the branch" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dependabot actively monitors the target branch and automatically rebases its open pull requests whenever the base branch advances, ensuring CI tests run against the latest commit.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Dependabot", "Rebase", "Git", "Automation"]
  },
  {
    id: "gh-500-161",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Restricting Major Version Upgrades in Dependabot",
    scenario: "A project wants automated minor and patch updates for Docker base images, but wants to prevent breaking major upgrades (e.g. Node 18 to Node 20) without manual review.",
    question: "Which ignore configuration in .github/dependabot.yml achieves this?",
    options: [
      { id: 'A', text: "open-pull-requests-limit: 0" },
      { id: 'B', text: "allow: [ { dependency-type: direct } ]" },
      { id: 'C', text: "schedule: { interval: weekly }" },
      { id: 'D', text: "ignore: [ { dependency-name: '*', update-types: ['version-update:semver-major'] } ]" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring `ignore:` with `update-types: ['version-update:semver-major']` allows Dependabot to open non-breaking patch and minor version upgrades while suppressing disruptive major version pull requests.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore",
    tags: ["Dependabot", "SemVer", "Configuration", "Maintenance"]
  },
  {
    id: "gh-500-162",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Transitive Vulnerability Remediation Mechanisms",
    scenario: "A vulnerability is detected in package 'minimist', which is not listed in package.json but is imported transitively by multiple top-level dependencies.",
    question: "How does Dependabot attempt to resolve this transitive vulnerability?",
    options: [
      { id: 'A', text: "Dependabot deletes all top-level dependencies that import minimist" },
      { id: 'B', text: "Dependabot updates the lockfile (package-lock.json) to resolve the sub-dependency to the patched version within allowed parent semver ranges" },
      { id: 'C', text: "Transitive vulnerabilities cannot be patched without deleting package.json" },
      { id: 'D', text: "Dependabot rewrites the application code to eliminate the library" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dependabot Security Updates intelligently updates lockfile dependency trees: it identifies parent dependency semver constraints and updates the lockfile to reference the minimum safe sub-dependency version without breaking top-level manifest declarations.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Transitive", "Lockfile", "Dependabot", "Security Updates"]
  },
  {
    id: "gh-500-163",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Private Vulnerability Reporting for Open Source Repositories",
    scenario: "An external security researcher discovers a critical remote code execution vulnerability in an open-source project hosted on GitHub.",
    question: "Which GitHub feature allows the researcher to disclose the flaw securely without public exposure?",
    options: [
      { id: 'A', text: "Opening a public GitHub Issue with the label 'security'" },
      { id: 'B', text: "Posting a comment on the latest commit" },
      { id: 'C', text: "Submitting a report via Private Vulnerability Reporting directly within the repository Security tab" },
      { id: 'D', text: "Creating a public pull request with the exploit script" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Private Vulnerability Reporting provides a secure channel on repository Security tabs, opening a private workspace where maintainers and the reporter can collaborate on remediation before public disclosure.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability",
    tags: ["Private Vulnerability Reporting", "Collaboration", "Disclosure"]
  },
  {
    id: "gh-500-164",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Requesting a CVE via Repository Security Advisories",
    scenario: "Maintainers finish patching a zero-day vulnerability in a private security advisory workspace and prepare to publish it.",
    question: "How can the maintainers obtain an official Common Vulnerabilities and Exposures (CVE) identifier for the flaw?",
    options: [
      { id: 'A', text: "Send an email to local police departments" },
      { id: 'B', text: "Click 'Request CVE' within the GitHub Security Advisory page; GitHub issues the official CVE as an authorized CNA" },
      { id: 'C', text: "Purchase a CVE from third-party auction websites" },
      { id: 'D', text: "Wait 6 months for NIST to discover the vulnerability" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GitHub is an authorized CVE Numbering Authority (CNA). Project maintainers can click 'Request CVE' directly on their published Security Advisory, and GitHub issues an official CVE identifier at zero cost.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories",
    tags: ["CVE", "CNA", "Security Advisories", "Compliance"]
  },
  {
    id: "gh-500-165",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Configuring Dependabot Reviewers and Assignees",
    scenario: "An engineering team wants security pull requests opened by Dependabot to automatically tag the security lead and apply the label 'dependencies'.",
    question: "Which configuration in .github/dependabot.yml automates this assignment?",
    options: [
      { id: 'A', text: "git config --global user.name 'security-lead'" },
      { id: 'B', text: "assignees: ['*']" },
      { id: 'C', text: "reviewers: ['security-lead'] and labels: ['dependencies'] under the package-ecosystem configuration" },
      { id: 'D', text: "name: Dependabot Automator" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "`dependabot.yml` supports specifying `reviewers:`, `assignees:`, `milestone:`, and `labels:` for each package ecosystem, streamlining PR routing directly to designated engineering teams.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#reviewers",
    tags: ["Dependabot", "Triage", "Automation", "Workflow"]
  },
  {
    id: "gh-500-166",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "SLSA Build Provenance Attestations in GitHub Actions",
    scenario: "An enterprise implements Supply-chain Levels for Software Artifacts (SLSA) Level 3 compliance to guarantee that release binaries were built without source tampering.",
    question: "Which official GitHub action cryptographically signs and publishes build provenance metadata?",
    options: [
      { id: 'A', text: "docker/build-push-action" },
      { id: 'B', text: "actions/checkout@v4" },
      { id: 'C', text: "actions/upload-artifact@v4" },
      { id: 'D', text: "actions/attest-build-provenance" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`actions/attest-build-provenance` uses Sigstore and GitHub Actions OIDC to generate cryptographically signed, tamper-evident SLSA provenance attestations linking built binaries to the exact source commit and runner workflow.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["SLSA", "Attestation", "Sigstore", "Supply Chain"]
  },
  {
    id: "gh-500-167",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Merge Strategy with GitHub Actions",
    scenario: "A platform team wants Dependabot patch updates to merge automatically if and only if all CI status checks pass.",
    question: "Which combination of features enables secure automated merging of Dependabot pull requests?",
    options: [
      { id: 'A', text: "Disabling all branch protection rules on main" },
      { id: 'B', text: "Running dependabot without git validation" },
      { id: 'C', text: "Enabling GitHub auto-merge (gh pr merge --auto --squash) in an Actions workflow triggered on pull_request and requiring status checks to pass in branch protection" },
      { id: 'D', text: "Writing a shell script that pushes directly to main" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Best practice enables repository auto-merge, triggers a workflow on `pull_request` that executes `gh pr merge --auto --squash` for Dependabot PRs, and relies on required status checks in branch protection to block merge until tests pass.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions",
    tags: ["Dependabot", "Auto-Merge", "Branch Protection", "CI/CD"]
  },
  {
    id: "gh-500-168",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Handling Dependabot PR Merge Conflicts",
    scenario: "A Dependabot security update has a merge conflict with the main branch. The team cannot merge the PR via the web button.",
    question: "What is the recommended command to instruct Dependabot to re-generate the PR against the latest base branch?",
    options: [
      { id: 'A', text: "Close the PR and disable Dependabot" },
      { id: 'B', text: "Delete the entire git repository and re-clone" },
      { id: 'C', text: "Force-push an empty commit to the Dependabot branch" },
      { id: 'D', text: "Post a comment on the PR containing '@dependabot rebase'" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Commenting `@dependabot rebase` on a Dependabot pull request signals the bot to re-evaluate dependencies, pull the latest base branch commits, and regenerate the lockfile cleanly.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/managing-dependabot-pull-requests",
    tags: ["Dependabot", "Rebase", "Troubleshooting", "PR"]
  },
  {
    id: "gh-500-169",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Configuring Dependabot Target Branch: target-branch",
    scenario: "In a GitFlow repository, feature code merges into 'develop' rather than 'main'. Dependabot opens PRs against 'main' by default.",
    question: "Which option in dependabot.yml routes all pull requests to the develop branch?",
    options: [
      { id: 'A', text: "target-branch: 'develop'" },
      { id: 'B', text: "upstream: develop" },
      { id: 'C', text: "branch: develop" },
      { id: 'D', text: "default-branch: develop" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specifying `target-branch: 'develop'` in `dependabot.yml` overrides the default repository branch and routes all automated dependency updates to the designated integration branch.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch",
    tags: ["Dependabot", "target-branch", "Branching", "GitFlow"]
  },
  {
    id: "gh-500-170",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Graph Support in Air-Gapped Environments",
    scenario: "An organization runs GitHub Enterprise Server (GHES) inside an air-gapped private network without outbound internet access to GitHub.com.",
    question: "How can administrators ensure the local GHES instance receives updated advisory database CVE entries?",
    options: [
      { id: 'A', text: "Advisory databases cannot function on GitHub Enterprise Server" },
      { id: 'B', text: "Disable Dependabot alerts permanently" },
      { id: 'C', text: "Use GitHub Connect to sync advisory data, or manually download and sync advisory bundles using the GHES management console" },
      { id: 'D', text: "Configure individual developer laptops as proxy servers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "On GitHub Enterprise Server in air-gapped or restricted networks, administrators can configure GitHub Connect to synchronize advisory feeds securely, or upload official offline vulnerability database bundles via administrative management APIs.",
    referenceUrl: "https://docs.github.com/en/enterprise-server/admin/configuration/configuring-network-settings/enabling-the-dependency-graph-for-your-enterprise",
    tags: ["GHES", "Air-Gapped", "Advisory Database", "Enterprise"]
  },
  {
    id: "gh-500-171",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Commit Message Prefix Customization",
    scenario: "An enterprise enforces semantic commit linting (Conventional Commits) in CI. Dependabot PRs fail because commit messages do not follow guidelines.",
    question: "How can commit messages authored by Dependabot be customized in dependabot.yml?",
    options: [
      { id: 'A', text: "Disable commit linting in CI" },
      { id: 'B', text: "commit-message: { prefix: 'chore', prefix-development: 'chore-dev', include: 'scope' }" },
      { id: 'C', text: "git commit --amend in Actions" },
      { id: 'D', text: "Dependabot commit messages cannot be modified" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In `dependabot.yml`, the `commit-message` block allows customizing prefixes (e.g. `chore(deps)`), development prefixes, and scopes, satisfying automated Conventional Commit linters.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#commit-message",
    tags: ["dependabot.yml", "Conventional Commits", "CI/CD"]
  },
  {
    id: "gh-500-172",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action: Blocking Outdated Vulnerability Feeds",
    scenario: "A pipeline runs `actions/dependency-review-action` but fails with an error indicating dependency graph data is not up to date.",
    question: "What is the most common cause of this error on pull request workflows?",
    options: [
      { id: 'A', text: "The repository does not have an active Actions license" },
      { id: 'B', text: "The GitHub token lacked admin permissions" },
      { id: 'C', text: "The runner run out of memory" },
      { id: 'D', text: "The pull request branch was pushed without manifest/lockfile changes, or dependency graph generation was delayed" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dependency review compares the dependency graph of the base and head commits. If a PR has merge conflicts or if dependency graph processing is delayed, the action fails until the graph is synchronized.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review", "Troubleshooting", "CI/CD"]
  },
  {
    id: "gh-500-173",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Automatic Closing of Dependabot Alerts",
    scenario: "A developer manually edits package.json, upgrades a vulnerable dependency to the patched release, and merges to main.",
    question: "What happens to the corresponding open Dependabot alert?",
    options: [
      { id: 'A', text: "A notification email is sent asking the developer to delete the repository" },
      { id: 'B', text: "The alert remains open until manually closed by a security manager" },
      { id: 'C', text: "The alert is deleted from audit logs" },
      { id: 'D', text: "Dependabot automatically marks the alert as resolved (fixed) upon detecting the patched version in the default branch" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dependabot continuously monitors the default branch. When a manual commit resolves a vulnerable package version, Dependabot automatically transitions the alert to 'Closed (fixed)'.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Alert Lifecycle", "Automation", "Dependabot"]
  },
  {
    id: "gh-500-174",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Open PR Limits Enforcement",
    scenario: "A repository has `open-pull-requests-limit: 3` configured in dependabot.yml, and 3 Dependabot PRs are currently open. A new security vulnerability is discovered.",
    question: "Does the open-pull-requests-limit apply to critical Dependabot Security Updates?",
    options: [
      { id: 'A', text: "Yes, all Dependabot operations are permanently halted" },
      { id: 'B', text: "The limit only applies to pull requests created by human users" },
      { id: 'C', text: "No, open-pull-requests-limit applies only to scheduled Version Updates; Dependabot Security Updates bypass this limit to deliver urgent CVE fixes" },
      { id: 'D', text: "Yes, Dependabot will not open the security PR until an existing PR is merged" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `open-pull-requests-limit` option in `dependabot.yml` governs scheduled Version Updates. Critical Dependabot Security Updates are prioritized and bypass this limit to ensure vulnerabilities are addressed.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Dependabot", "Limits", "Security Updates", "Prioritization"]
  },
  {
    id: "gh-500-175",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Repository Security Advisory Collaboration with Fork Permissions",
    scenario: "Maintainers collaborating on a private security advisory invite an external contributor to inspect the proposed code fix.",
    question: "How does GitHub facilitate private collaboration on fixes before public release?",
    options: [
      { id: 'A', text: "By emailing zip files between collaborators" },
      { id: 'B', text: "By posting code snippets on public discussion boards" },
      { id: 'C', text: "By generating a private temporary fork linked to the Security Advisory where invited collaborators can push and review commits privately" },
      { id: 'D', text: "By making the entire repository temporarily public" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Repository Security Advisories provide a 'Create temporary private fork' feature, establishing an isolated sandbox where maintainers and external researchers can collaborate on code patches without public visibility.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability",
    tags: ["Security Advisories", "Collaboration", "Private Fork", "Disclosure"]
  }
];

export default GITHUB_GHAS_QUESTIONS_7;
