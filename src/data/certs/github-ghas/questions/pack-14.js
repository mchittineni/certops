export const GITHUB_GHAS_QUESTIONS_14 = [
  {
    id: "gh-500-326",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Commit a workflow that runs `npm update` weekly and opens a pull request with the result." },
      { id: 'B', text: "Enable Dependabot security updates only, so pull requests arrive when an advisory lands." },
      { id: 'C', text: "Enable the dependency graph only, and review the package registries on a weekly rota." },
      { id: 'D', text: "Commit a `.github/dependabot.yml` naming the ecosystem, directory and weekly schedule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates","Version Updates","Enterprise Rollout"]
  },
  {
    id: "gh-500-327",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Enable the dependency graph only, and review the package registries on a weekly rota." },
      { id: 'B', text: "Commit a `.github/dependabot.yml` naming the ecosystem, directory and weekly schedule." },
      { id: 'C', text: "Commit a workflow that runs `npm update` weekly and opens a pull request with the result." },
      { id: 'D', text: "Enable Dependabot security updates only, so pull requests arrive when an advisory lands." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates","Version Updates","Supply Chain Defense"]
  },
  {
    id: "gh-500-328",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Commit a `.github/dependabot.yml` naming the ecosystem, directory and weekly schedule." },
      { id: 'B', text: "Enable the dependency graph only, and review the package registries on a weekly rota." },
      { id: 'C', text: "Enable Dependabot security updates only, so pull requests arrive when an advisory lands." },
      { id: 'D', text: "Commit a workflow that runs `npm update` weekly and opens a pull request with the result." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates","Version Updates","Secret Leak Prevention"]
  },
  {
    id: "gh-500-329",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Commit a `.github/dependabot.yml` naming the ecosystem, directory and weekly schedule." },
      { id: 'B', text: "Enable the dependency graph only, and review the package registries on a weekly rota." },
      { id: 'C', text: "Enable Dependabot security updates only, so pull requests arrive when an advisory lands." },
      { id: 'D', text: "Commit a workflow that runs `npm update` weekly and opens a pull request with the result." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates","Version Updates","Static Analysis Codeql"]
  },
  {
    id: "gh-500-330",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Commit a `.github/dependabot.yml` naming the ecosystem, directory and weekly schedule." },
      { id: 'B', text: "Enable the dependency graph only, and review the package registries on a weekly rota." },
      { id: 'C', text: "Enable Dependabot security updates only, so pull requests arrive when an advisory lands." },
      { id: 'D', text: "Commit a workflow that runs `npm update` weekly and opens a pull request with the result." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates","Version Updates","Governance And Compliance"]
  },
  {
    id: "gh-500-331",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Configure Dependabot to open pull requests only for the runtime dependencies, grouped weekly." },
      { id: 'B', text: "Configure Dependabot auto-triage rules on severity, dependency scope and patch availability." },
      { id: 'C', text: "Configure a scheduled workflow that dismisses development-scope alerts through the API." },
      { id: 'D', text: "Configure the alert threshold at the organization level so only criticals are surfaced." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules","Auto-Triage Rules","Enterprise Rollout"]
  },
  {
    id: "gh-500-332",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Configure Dependabot auto-triage rules on severity, dependency scope and patch availability." },
      { id: 'B', text: "Configure a scheduled workflow that dismisses development-scope alerts through the API." },
      { id: 'C', text: "Configure Dependabot to open pull requests only for the runtime dependencies, grouped weekly." },
      { id: 'D', text: "Configure the alert threshold at the organization level so only criticals are surfaced." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules","Auto-Triage Rules","Supply Chain Defense"]
  },
  {
    id: "gh-500-333",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Configure Dependabot auto-triage rules on severity, dependency scope and patch availability." },
      { id: 'B', text: "Configure a scheduled workflow that dismisses development-scope alerts through the API." },
      { id: 'C', text: "Configure Dependabot to open pull requests only for the runtime dependencies, grouped weekly." },
      { id: 'D', text: "Configure the alert threshold at the organization level so only criticals are surfaced." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules","Auto-Triage Rules","Secret Leak Prevention"]
  },
  {
    id: "gh-500-334",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Configure the alert threshold at the organization level so only criticals are surfaced." },
      { id: 'B', text: "Configure a scheduled workflow that dismisses development-scope alerts through the API." },
      { id: 'C', text: "Configure Dependabot auto-triage rules on severity, dependency scope and patch availability." },
      { id: 'D', text: "Configure Dependabot to open pull requests only for the runtime dependencies, grouped weekly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules","Auto-Triage Rules","Static Analysis Codeql"]
  },
  {
    id: "gh-500-335",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Configure Dependabot auto-triage rules on severity, dependency scope and patch availability." },
      { id: 'B', text: "Configure a scheduled workflow that dismisses development-scope alerts through the API." },
      { id: 'C', text: "Configure Dependabot to open pull requests only for the runtime dependencies, grouped weekly." },
      { id: 'D', text: "Configure the alert threshold at the organization level so only criticals are surfaced." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules","Auto-Triage Rules","Governance And Compliance"]
  },
  {
    id: "gh-500-336",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Add a Dependabot version update schedule so new dependencies arrive in their own PRs." },
      { id: 'B', text: "Add a required status check that runs `npm audit` against the merge commit's lock file." },
      { id: 'C', text: "Add a ruleset requiring the dependency graph to be current before a merge is allowed." },
      { id: 'D', text: "Add `actions/dependency-review-action` to pull requests with `fail-on-severity: high`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review","Dependency Review","Enterprise Rollout"]
  },
  {
    id: "gh-500-337",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Add a ruleset requiring the dependency graph to be current before a merge is allowed." },
      { id: 'B', text: "Add a Dependabot version update schedule so new dependencies arrive in their own PRs." },
      { id: 'C', text: "Add a required status check that runs `npm audit` against the merge commit's lock file." },
      { id: 'D', text: "Add `actions/dependency-review-action` to pull requests with `fail-on-severity: high`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review","Dependency Review","Supply Chain Defense"]
  },
  {
    id: "gh-500-338",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Add a Dependabot version update schedule so new dependencies arrive in their own PRs." },
      { id: 'B', text: "Add `actions/dependency-review-action` to pull requests with `fail-on-severity: high`." },
      { id: 'C', text: "Add a required status check that runs `npm audit` against the merge commit's lock file." },
      { id: 'D', text: "Add a ruleset requiring the dependency graph to be current before a merge is allowed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review","Dependency Review","Secret Leak Prevention"]
  },
  {
    id: "gh-500-339",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Add `actions/dependency-review-action` to pull requests with `fail-on-severity: high`." },
      { id: 'B', text: "Add a ruleset requiring the dependency graph to be current before a merge is allowed." },
      { id: 'C', text: "Add a required status check that runs `npm audit` against the merge commit's lock file." },
      { id: 'D', text: "Add a Dependabot version update schedule so new dependencies arrive in their own PRs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review","Dependency Review","Static Analysis Codeql"]
  },
  {
    id: "gh-500-340",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Add a ruleset requiring the dependency graph to be current before a merge is allowed." },
      { id: 'B', text: "Add `actions/dependency-review-action` to pull requests with `fail-on-severity: high`." },
      { id: 'C', text: "Add a Dependabot version update schedule so new dependencies arrive in their own PRs." },
      { id: 'D', text: "Add a required status check that runs `npm audit` against the merge commit's lock file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review","Dependency Review","Governance And Compliance"]
  },
  {
    id: "gh-500-341",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Export the dependency graph's manifest list from the insights page as CSV." },
      { id: 'B', text: "Generate the SBOM from the lock files with `syft`, run in a nightly workflow." },
      { id: 'C', text: "Export the repository's SBOM through the REST API in SPDX 2.3 JSON." },
      { id: 'D', text: "Generate the SBOM from the Dependabot alerts API, which lists every package." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export","SBOM Export","Enterprise Rollout"]
  },
  {
    id: "gh-500-342",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Export the repository's SBOM through the REST API in SPDX 2.3 JSON." },
      { id: 'B', text: "Generate the SBOM from the Dependabot alerts API, which lists every package." },
      { id: 'C', text: "Export the dependency graph's manifest list from the insights page as CSV." },
      { id: 'D', text: "Generate the SBOM from the lock files with `syft`, run in a nightly workflow." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export","SBOM Export","Supply Chain Defense"]
  },
  {
    id: "gh-500-343",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Export the dependency graph's manifest list from the insights page as CSV." },
      { id: 'B', text: "Generate the SBOM from the Dependabot alerts API, which lists every package." },
      { id: 'C', text: "Generate the SBOM from the lock files with `syft`, run in a nightly workflow." },
      { id: 'D', text: "Export the repository's SBOM through the REST API in SPDX 2.3 JSON." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export","SBOM Export","Secret Leak Prevention"]
  },
  {
    id: "gh-500-344",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Export the dependency graph's manifest list from the insights page as CSV." },
      { id: 'B', text: "Generate the SBOM from the lock files with `syft`, run in a nightly workflow." },
      { id: 'C', text: "Export the repository's SBOM through the REST API in SPDX 2.3 JSON." },
      { id: 'D', text: "Generate the SBOM from the Dependabot alerts API, which lists every package." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export","SBOM Export","Static Analysis Codeql"]
  },
  {
    id: "gh-500-345",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Export the repository's SBOM through the REST API in SPDX 2.3 JSON." },
      { id: 'B', text: "Generate the SBOM from the lock files with `syft`, run in a nightly workflow." },
      { id: 'C', text: "Generate the SBOM from the Dependabot alerts API, which lists every package." },
      { id: 'D', text: "Export the dependency graph's manifest list from the insights page as CSV." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export","SBOM Export","Governance And Compliance"]
  },
  {
    id: "gh-500-346",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Set a `registries` block in `.github/dependabot.yml` with a Dependabot secret for the token." },
      { id: 'B', text: "Set an Actions organization secret holding the token, which Dependabot reads when it next runs." },
      { id: 'C', text: "Mirror the internal registry into a public proxy so no authentication is needed at all." },
      { id: 'D', text: "Commit a `.npmrc` with the registry token so the resolver authenticates on each run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries","Private Registries","Enterprise Rollout"]
  },
  {
    id: "gh-500-347",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Set an Actions organization secret holding the token, which Dependabot reads when it next runs." },
      { id: 'B', text: "Commit a `.npmrc` with the registry token so the resolver authenticates on each run." },
      { id: 'C', text: "Mirror the internal registry into a public proxy so no authentication is needed at all." },
      { id: 'D', text: "Set a `registries` block in `.github/dependabot.yml` with a Dependabot secret for the token." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries","Private Registries","Supply Chain Defense"]
  },
  {
    id: "gh-500-348",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Set a `registries` block in `.github/dependabot.yml` with a Dependabot secret for the token." },
      { id: 'B', text: "Set an Actions organization secret holding the token, which Dependabot reads when it next runs." },
      { id: 'C', text: "Mirror the internal registry into a public proxy so no authentication is needed at all." },
      { id: 'D', text: "Commit a `.npmrc` with the registry token so the resolver authenticates on each run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries","Private Registries","Secret Leak Prevention"]
  },
  {
    id: "gh-500-349",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Mirror the internal registry into a public proxy so no authentication is needed at all." },
      { id: 'B', text: "Commit a `.npmrc` with the registry token so the resolver authenticates on each run." },
      { id: 'C', text: "Set a `registries` block in `.github/dependabot.yml` with a Dependabot secret for the token." },
      { id: 'D', text: "Set an Actions organization secret holding the token, which Dependabot reads when it next runs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries","Private Registries","Static Analysis Codeql"]
  },
  {
    id: "gh-500-350",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Mirror the internal registry into a public proxy so no authentication is needed at all." },
      { id: 'B', text: "Set an Actions organization secret holding the token, which Dependabot reads when it next runs." },
      { id: 'C', text: "Commit a `.npmrc` with the registry token so the resolver authenticates on each run." },
      { id: 'D', text: "Set a `registries` block in `.github/dependabot.yml` with a Dependabot secret for the token." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries","Private Registries","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_14;
