export const GITHUB_GHAS_QUESTIONS_7 = [
  {
    id: "gh-500-151",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependency Graph Manifest vs. Lockfile Parsing",
    scenario: "A developer commits a package.json without committing package-lock.json. How does Dependency Graph evaluate project dependencies?",
    question: "What is the impact of omitting lockfiles on Dependency Graph accuracy?",
    options: [
      { id: 'A', text: "It detects no dependencies at all, since resolution happens from the lockfile" },
      { id: 'B', text: "It falls back to the registry's newest release for each declared dependency" },
      { id: 'C', text: "It commits a generated lockfile to the repository so resolution is recorded" },
      { id: 'D', text: "It infers ranges from the manifest but cannot pin the resolved transitive versions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "When lockfiles are committed, Dependency Graph tracks exact pinned package versions. Without lockfiles, it can only parse semantic version ranges from manifests, reducing accuracy for deep transitive dependencies.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-how-github-uses-and-protects-your-data/about-the-dependency-graph",
    tags: ["Dependency Graph", "Lockfiles", "Supply Chain", "Transitive"]
  },
  {
    id: "gh-500-152",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependabot Security Updates vs. Version Updates",
    scenario: "An engineering team wants automated pull requests strictly for known CVE security vulnerabilities, but wants to keep regular library upgrades manual.",
    question: "Which configuration satisfies this requirement?",
    options: [
      { id: 'A', text: "Enable version updates with a schedule interval set to monthly" },
      { id: 'B', text: "Enable version updates and ignore every dependency by name" },
      { id: 'C', text: "Enable the dependency graph alone and triage the alerts by hand" },
      { id: 'D', text: "Enable security updates and leave the version update configuration out" }
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
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "actions/dependency-review-action in Pull Requests",
    scenario: "A security team wants to block any pull request that introduces an npm package with an AGPL-3.0 copyleft license into a proprietary cloud application.",
    question: "How should the team configure automated CI enforcement?",
    options: [
      { id: 'A', text: "Add a workflow step that greps the manifests for the licence field" },
      { id: 'B', text: "Add a ruleset that blocks changes to the dependency manifests" },
      { id: 'C', text: "Add the dependency review action with `denied-licenses: ['AGPL-3.0']`" },
      { id: 'D', text: "Add Dependabot version updates on a daily schedule per ecosystem" }
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
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependabot Grouped Updates Configuration",
    scenario: "A repository maintainer is overwhelmed by 30 separate Dependabot version update pull requests opened on Monday morning.",
    question: "Which setting in .github/dependabot.yml combines multiple package updates into a single manageable pull request?",
    options: [
      { id: 'A', text: "schedule: { interval: monthly }" },
      { id: 'B', text: "open-pull-requests-limit: 1" },
      { id: 'C', text: "`allow: [{ dependency-type: 'direct', update-type: 'security' }]`" },
      { id: 'D', text: "groups: { production-dependencies: { patterns: ['*'] } }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `groups` directive in `dependabot.yml` enables bundling multiple dependency upgrades into a single consolidated pull request, drastically reducing review overhead while keeping libraries updated.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#groups",
    tags: ["Dependabot", "Grouped Updates", "dependabot.yml", "Optimization"]
  },
  {
    id: "gh-500-155",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Exporting Enterprise Software Bill of Materials (SBOM)",
    scenario: "An enterprise customer requires an official Software Bill of Materials (SBOM) conforming to the SPDX specification for compliance auditing before signing an enterprise contract.",
    question: "How can the security administrator export this compliance artifact from GitHub?",
    options: [
      { id: 'A', text: "Export the SBOM in SPDX JSON from the dependency graph page or its REST endpoint" },
      { id: 'B', text: "Copy the dependency names out of the manifests into the compliance spreadsheet" },
      { id: 'C', text: "Download the Dependabot alert list, which enumerates the packages in use" },
      { id: 'D', text: "Export the repository insights dependency view as the compliance artifact" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "GitHub natively provides automated SBOM export conforming to the Linux Foundation SPDX standard via the web interface under Insights → Dependency Graph → Export SBOM, and programmatically via the Dependency Graph REST API.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM", "SPDX", "Compliance", "Dependency Graph"]
  },
  {
    id: "gh-500-156",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependabot Private Package Registry Authentication",
    scenario: "A Java project consumes internal shared JAR libraries from a private JFrog Artifactory registry. Dependabot fails to resolve version updates.",
    question: "What configuration is required to allow Dependabot to authenticate to the private artifact registry?",
    options: [
      { id: 'A', text: "Add an Actions secret with the registry token, which Dependabot reads during its run" },
      { id: 'B', text: "Add a settings file in the repository carrying the registry URL and its credentials" },
      { id: 'C', text: "Add a `registries:` block in `.github/dependabot.yml` naming the URL and a Dependabot secret" },
      { id: 'D', text: "Add the registry server entry to `pom.xml` with the credentials in the build profile" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In `dependabot.yml`, authors define the `registries:` dictionary (e.g. `maven-repository: { type: maven-repository, url: ..., token: ${{ secrets.ARTIFACTORY_TOKEN }} }`), providing secure credentials to private package feeds.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries",
    tags: ["Dependabot", "Private Registries", "Maven", "Artifactory"]
  },
  {
    id: "gh-500-157",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dismissing Dependabot Alerts with Business Justification",
    scenario: "A high-severity CVE is flagged in a library used exclusively as an offline build-time utility. The vulnerable code path is never packaged into production containers.",
    question: "Which dismissal reason should the maintainer select to document this risk assessment accurately?",
    options: [
      { id: 'A', text: "A fix has already been started" },
      { id: 'B', text: "False positive" },
      { id: 'C', text: "Vulnerable code is not used" },
      { id: 'D', text: "No bandwidth to fix this" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When a vulnerability exists in a package dependency but the vulnerable function or execution path is not invoked by the application, selecting 'Vulnerable code is not used' records this architectural determination and suppresses notifications.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts",
    tags: ["Dependabot", "Triage", "Alerts", "Risk Assessment"]
  },
  {
    id: "gh-500-158",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Mitigating Dependency Confusion Attacks",
    scenario: "An attacker registers an identically named public package on npm matching an enterprise's internal un-scoped package name with a version number of 99.0.0.",
    question: "Which supply chain best practice defends against this Dependency Confusion attack?",
    options: [
      { id: 'A', text: "Publish the internal packages to the public registry so the name cannot be claimed" },
      { id: 'B', text: "Scope internal packages under an enterprise namespace and route that scope explicitly" },
      { id: 'C', text: "Commit the resolved dependency tree so the build never consults a registry at all" },
      { id: 'D', text: "Pin every internal dependency by digest so a substituted package fails the install" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dependency confusion occurs when package managers fetch public packages with higher version numbers instead of internal private libraries. Scoping packages under an organization namespace (e.g. `@mycorp/*`) and configuring strict registry priority in lockfiles prevents confusion.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Supply Chain", "Dependency Confusion", "NPM", "Security"]
  },
  {
    id: "gh-500-159",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "CVSS Scoring in GitHub Advisory Database",
    scenario: "A Dependabot alert displays a CVSS base score of 9.8 with vector string CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H.",
    question: "What severity level does this vulnerability represent?",
    options: [
      { id: 'A', text: "Low" },
      { id: 'B', text: "Medium" },
      { id: 'C', text: "High" },
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
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependabot Automatic PR Rebasing",
    scenario: "An enterprise development team is managing security policies, vulnerability scans, and supply chain controls on GitHub.",
    question: "A developer merges several pull requests into main. What happens to open Dependabot security update pull requests?",
    options: [
      { id: 'A', text: "The administrator must re-create each update branch by hand" },
      { id: 'B', text: "It closes the open pull requests and opens them again later" },
      { id: 'C', text: "It rebases its open pull requests onto the updated branch" },
      { id: 'D', text: "It pauses until the conflicting pull requests are resolved" }
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
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Restricting Major Version Upgrades in Dependabot",
    scenario: "A project wants automated minor and patch updates for Docker base images, but wants to prevent breaking major upgrades (e.g. Node 18 to Node 20) without manual review.",
    question: "Which ignore configuration in .github/dependabot.yml achieves this?",
    options: [
      { id: 'A', text: "`ignore: [{ dependency-name: '*', update-types: ['semver-major'] }]`" },
      { id: 'B', text: "`ignore: [{dependency-name: '*', update-types: ['version-update:semver-major']}]`" },
      { id: 'C', text: "`allow: [{ dependency-type: 'direct', update-type: 'security' }]`" },
      { id: 'D', text: "`schedule: { interval: 'weekly' }` with a separate monthly major-version cadence" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `ignore` option's `update-types` accepts only `version-update:semver-patch`, `version-update:semver-minor` and `version-update:semver-major`. Ignoring `version-update:semver-major` for every dependency keeps patch and minor pull requests flowing while suppressing major upgrades such as Node 18 to Node 20. A bare `semver-major` is not a valid value and fails validation, an `allow` rule selects which dependencies are updated rather than blocking major versions, and `schedule` only sets how often Dependabot checks.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore",
    tags: ["Dependabot", "SemVer", "Configuration", "Maintenance"]
  },
  {
    id: "gh-500-162",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Transitive Vulnerability Remediation Mechanisms",
    scenario: "A vulnerability is detected in package 'minimist', which is not listed in package.json but is imported transitively by multiple top-level dependencies.",
    question: "How does Dependabot attempt to resolve this transitive vulnerability?",
    options: [
      { id: 'A', text: "It updates the lockfile so the sub-dependency resolves to a patched version within the parent's range" },
      { id: 'B', text: "It opens a pull request removing the top-level packages that pull the vulnerable one in" },
      { id: 'C', text: "It cannot patch a transitive dependency without a direct declaration in the manifest" },
      { id: 'D', text: "It adds a resolution override to the manifest pinning the sub-dependency's version" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dependabot Security Updates intelligently updates lockfile dependency trees: it identifies parent dependency semver constraints and updates the lockfile to reference the minimum safe sub-dependency version without breaking top-level manifest declarations.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Transitive", "Lockfile", "Dependabot", "Security Updates"]
  },
  {
    id: "gh-500-163",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Private Vulnerability Reporting for Open Source Repositories",
    scenario: "An external security researcher discovers a critical remote code execution vulnerability in an open-source project hosted on GitHub.",
    question: "Which GitHub feature allows the researcher to disclose the flaw securely without public exposure?",
    options: [
      { id: 'A', text: "A pull request marked as a draft, with the exploit script attached" },
      { id: 'B', text: "A comment on the offending commit, visible only to maintainers" },
      { id: 'C', text: "An issue filed under a security template with restricted visibility" },
      { id: 'D', text: "Private vulnerability reporting, from the repository's own security tab" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Private Vulnerability Reporting provides a secure channel on repository Security tabs, opening a private workspace where maintainers and the reporter can collaborate on remediation before public disclosure.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability",
    tags: ["Private Vulnerability Reporting", "Collaboration", "Disclosure"]
  },
  {
    id: "gh-500-164",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Requesting a CVE via Repository Security Advisories",
    scenario: "Maintainers finish patching a zero-day vulnerability in a private security advisory workspace and prepare to publish it.",
    question: "How can the maintainers obtain an official Common Vulnerabilities and Exposures (CVE) identifier for the flaw?",
    options: [
      { id: 'A', text: "Request a CVE from the package registry that publishes the library" },
      { id: 'B', text: "Request a CVE by filing the advisory directly with NVD instead" },
      { id: 'C', text: "Request a CVE from the draft advisory itself; GitHub issues it as a CNA" },
      { id: 'D', text: "Wait for a scanner vendor to publish the identifier downstream" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "GitHub is a CVE Numbering Authority (CNA). Maintainers request a CVE from the draft repository security advisory, before publishing it, and GitHub assigns the identifier, so the advisory is published with its CVE. Package registries, NVD filings and scanner vendors are not how a repository advisory obtains its CVE.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories",
    tags: ["CVE", "CNA", "Security Advisories", "Compliance"]
  },
  {
    id: "gh-500-165",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Configuring Dependabot Reviewers and Assignees",
    scenario: "An engineering team wants security pull requests opened by Dependabot to automatically tag the security lead and apply the label 'dependencies'.",
    question: "Which configuration in .github/dependabot.yml automates this assignment?",
    options: [
      { id: 'A', text: "`reviewers:` and `labels:` entries under that ecosystem's configuration" },
      { id: 'B', text: "A `commit-message:` prefix naming the reviewing team per update" },
      { id: 'C', text: "An `assignees: ['*']` entry covering every update it opens" },
      { id: 'D', text: "A `target-branch:` entry pointing at the reviewer's branch" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`dependabot.yml` supports specifying `reviewers:`, `assignees:`, `milestone:`, and `labels:` for each package ecosystem, streamlining PR routing directly to designated engineering teams.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#reviewers",
    tags: ["Dependabot", "Triage", "Automation", "Workflow"]
  },
  {
    id: "gh-500-166",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "SLSA Build Provenance Attestations in GitHub Actions",
    scenario: "An enterprise implements Supply-chain Levels for Software Artifacts (SLSA) Level 3 compliance to guarantee that release binaries were built without source tampering.",
    question: "Which official GitHub action cryptographically signs and publishes build provenance metadata?",
    options: [
      { id: 'A', text: "actions/attest-build-provenance" },
      { id: 'B', text: "actions/upload-artifact@v4" },
      { id: 'C', text: "actions/checkout@v4" },
      { id: 'D', text: "docker/build-push-action" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`actions/attest-build-provenance` uses Sigstore and GitHub Actions OIDC to generate cryptographically signed, tamper-evident SLSA provenance attestations linking built binaries to the exact source commit and runner workflow.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["SLSA", "Attestation", "Sigstore", "Supply Chain"]
  },
  {
    id: "gh-500-167",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependabot Auto-Merge Strategy with GitHub Actions",
    scenario: "A platform team wants Dependabot patch updates to merge automatically if and only if all CI status checks pass.",
    question: "Which combination of features enables secure automated merging of Dependabot pull requests?",
    options: [
      { id: 'A', text: "Auto-merge on the pull request, with required status checks enforced by branch protection" },
      { id: 'B', text: "Auto-merge on the pull request, with branch protection removed from the default branch" },
      { id: 'C', text: "A workflow that pushes the dependency bump straight to the default branch after tests" },
      { id: 'D', text: "A workflow that approves and merges every Dependabot pull request on a schedule" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Best practice enables repository auto-merge, triggers a workflow on `pull_request` that executes `gh pr merge --auto --squash` for Dependabot PRs, and relies on required status checks in branch protection to block merge until tests pass.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions",
    tags: ["Dependabot", "Auto-Merge", "Branch Protection", "CI/CD"]
  },
  {
    id: "gh-500-168",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Handling Dependabot PR Merge Conflicts",
    scenario: "A Dependabot security update has a merge conflict with the main branch. The team cannot merge the PR via the web button.",
    question: "What is the recommended command to instruct Dependabot to re-generate the PR against the latest base branch?",
    options: [
      { id: 'A', text: "Close the PR and disable Dependabot" },
      { id: 'B', text: "Post a comment on the PR containing '@dependabot rebase'" },
      { id: 'C', text: "Delete the entire git repository and re-clone" },
      { id: 'D', text: "Force-push an empty commit to the Dependabot branch" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Commenting `@dependabot rebase` on a Dependabot pull request signals the bot to re-evaluate dependencies, pull the latest base branch commits, and regenerate the lockfile cleanly.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/working-with-dependabot/managing-dependabot-pull-requests",
    tags: ["Dependabot", "Rebase", "Troubleshooting", "PR"]
  },
  {
    id: "gh-500-169",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Configuring Dependabot Target Branch: target-branch",
    scenario: "In a GitFlow repository, feature code merges into 'develop' rather than 'main'. Dependabot opens PRs against 'main' by default.",
    question: "Which option in dependabot.yml routes all pull requests to the develop branch?",
    options: [
      { id: 'A', text: "target-branch: 'develop'" },
      { id: 'B', text: "upstream: develop" },
      { id: 'C', text: "default-branch: develop" },
      { id: 'D', text: "branch: develop" }
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
    domainId: "d6",
    domainName: "GitHub Security suites administration",
    title: "Dependency Graph Support in Air-Gapped Environments",
    scenario: "An organization runs GitHub Enterprise Server (GHES) inside an air-gapped private network without outbound internet access to GitHub.com.",
    question: "How can administrators ensure the local GHES instance receives updated advisory database CVE entries?",
    options: [
      { id: 'A', text: "Sync the advisory data through GitHub Connect, or import bundles from the console" },
      { id: 'B', text: "The advisory database does not operate on an air-gapped server at all" },
      { id: 'C', text: "Point the instance at a proxy that fetches the advisories on demand" },
      { id: 'D', text: "Rebuild the dependency graph nightly so advisories are re-evaluated" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "On GitHub Enterprise Server in air-gapped or restricted networks, administrators can configure GitHub Connect to synchronize advisory feeds securely, or upload official offline vulnerability database bundles via administrative management APIs.",
    referenceUrl: "https://docs.github.com/en/enterprise-server/admin/configuration/configuring-network-settings/enabling-the-dependency-graph-for-your-enterprise",
    tags: ["GHES", "Air-Gapped", "Advisory Database", "Enterprise"]
  },
  {
    id: "gh-500-171",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependabot Commit Message Prefix Customization",
    scenario: "An enterprise enforces semantic commit linting (Conventional Commits) in CI. Dependabot PRs fail because commit messages do not follow guidelines.",
    question: "How can commit messages authored by Dependabot be customized in dependabot.yml?",
    options: [
      { id: 'A', text: "A `commit-message:` block with `prefix` and `include: 'scope'`" },
      { id: 'B', text: "A workflow step that amends each Dependabot commit" },
      { id: 'C', text: "Dependabot's commit messages cannot be customised" },
      { id: 'D', text: "A `labels:` block, which the message is derived from" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In `dependabot.yml`, the `commit-message` block allows customizing prefixes (e.g. `chore(deps)`), development prefixes, and scopes, satisfying automated Conventional Commit linters.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#commit-message",
    tags: ["dependabot.yml", "Conventional Commits", "CI/CD"]
  },
  {
    id: "gh-500-172",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependency Review Action: Blocking Outdated Vulnerability Feeds",
    scenario: "A pipeline runs `actions/dependency-review-action` but fails with an error indicating dependency graph data is not up to date.",
    question: "What is the most common cause of this error on pull request workflows?",
    options: [
      { id: 'A', text: "The branch carries no manifest change, or the graph had not finished generating" },
      { id: 'B', text: "The workflow token was missing the `contents: read` permission it needs" },
      { id: 'C', text: "The runner ran out of memory while resolving the dependency tree" },
      { id: 'D', text: "The repository has no Actions minutes left in the billing period" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dependency review compares the dependency graph of the base and head commits. If a PR has merge conflicts or if dependency graph processing is delayed, the action fails until the graph is synchronized.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review", "Troubleshooting", "CI/CD"]
  },
  {
    id: "gh-500-173",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Automatic Closing of Dependabot Alerts",
    scenario: "A developer manually edits package.json, upgrades a vulnerable dependency to the patched release, and merges to main.",
    question: "What happens to the corresponding open Dependabot alert?",
    options: [
      { id: 'A', text: "It stays open until a security manager closes it by hand" },
      { id: 'B', text: "It closes as fixed once the patched version is seen on the default branch" },
      { id: 'C', text: "It is removed from the alert list and kept in the audit log" },
      { id: 'D', text: "It reopens on the next scan so the fix can be confirmed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dependabot continuously monitors the default branch. When a manual commit resolves a vulnerable package version, Dependabot automatically transitions the alert to 'Closed (fixed)'.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts",
    tags: ["Alert Lifecycle", "Automation", "Dependabot"]
  },
  {
    id: "gh-500-174",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Configure and use supply chain security",
    title: "Dependabot Open PR Limits Enforcement",
    scenario: "A repository has `open-pull-requests-limit: 3` configured in dependabot.yml, and 3 Dependabot PRs are currently open. A new security vulnerability is discovered.",
    question: "Does the open-pull-requests-limit apply to critical Dependabot Security Updates?",
    options: [
      { id: 'A', text: "Yes: once the limit is reached Dependabot opens no further pull requests at all" },
      { id: 'B', text: "No: the limit counts only the pull requests that human users have opened" },
      { id: 'C', text: "Yes: the security update waits until one of the open pull requests merges" },
      { id: 'D', text: "No: the limit covers scheduled version updates only, and security updates bypass it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The `open-pull-requests-limit` option in `dependabot.yml` governs scheduled Version Updates. Critical Dependabot Security Updates are prioritized and bypass this limit to ensure vulnerabilities are addressed.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates",
    tags: ["Dependabot", "Limits", "Security Updates", "Prioritization"]
  },
  {
    id: "gh-500-175",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d5",
    domainName: "Security operations: best practices, prioritization, and remediation",
    title: "Repository Security Advisory Collaboration with Fork Permissions",
    scenario: "Maintainers collaborating on a private security advisory invite an external contributor to inspect the proposed code fix.",
    question: "How does GitHub facilitate private collaboration on fixes before public release?",
    options: [
      { id: 'A', text: "Through a private mirror repository that the maintainers create for the duration" },
      { id: 'B', text: "Through patch files attached to the draft advisory for collaborators to apply" },
      { id: 'C', text: "Through the advisory's private temporary fork, where invited collaborators push and review" },
      { id: 'D', text: "Through a private branch on the repository, hidden until the advisory publishes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Repository Security Advisories provide a 'Create temporary private fork' feature, establishing an isolated sandbox where maintainers and external researchers can collaborate on code patches without public visibility.",
    referenceUrl: "https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability",
    tags: ["Security Advisories", "Collaboration", "Private Fork", "Disclosure"]
  }
];

export default GITHUB_GHAS_QUESTIONS_7;
