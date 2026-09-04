export const GITHUB_GHAS_QUESTIONS_14 = [
  {
    id: "gh-500-326",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Version Updates to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Automating routine dependency maintenance across package ecosystems using dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Disable automated updates and maintain dependencies manually every five years." },
      { id: 'B', text: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`." },
      { id: 'C', text: "Write custom shell scripts that run `npm update` on production servers without pull request review." },
      { id: 'D', text: "Manually check package registries for new library releases every morning." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates", "Version Updates", "Enterprise Rollout"]
  },
  {
    id: "gh-500-327",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Version Updates to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Automating routine dependency maintenance across package ecosystems using dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Disable automated updates and maintain dependencies manually every five years." },
      { id: 'B', text: "Write custom shell scripts that run `npm update` on production servers without pull request review." },
      { id: 'C', text: "Manually check package registries for new library releases every morning." },
      { id: 'D', text: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates", "Version Updates", "Supply Chain Defense"]
  },
  {
    id: "gh-500-328",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Version Updates to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Automating routine dependency maintenance across package ecosystems using dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Manually check package registries for new library releases every morning." },
      { id: 'B', text: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`." },
      { id: 'C', text: "Disable automated updates and maintain dependencies manually every five years." },
      { id: 'D', text: "Write custom shell scripts that run `npm update` on production servers without pull request review." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates", "Version Updates", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-329",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Version Updates to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Automating routine dependency maintenance across package ecosystems using dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`." },
      { id: 'B', text: "Disable automated updates and maintain dependencies manually every five years." },
      { id: 'C', text: "Manually check package registries for new library releases every morning." },
      { id: 'D', text: "Write custom shell scripts that run `npm update` on production servers without pull request review." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates", "Version Updates", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-330",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Version Updates and Configuration (.github/dependabot.yml): Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Version Updates to keep application packages continuously up to date through scheduled weekly maintenance pull requests.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Automating routine dependency maintenance across package ecosystems using dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Manually check package registries for new library releases every morning." },
      { id: 'B', text: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`." },
      { id: 'C', text: "Write custom shell scripts that run `npm update` on production servers without pull request review." },
      { id: 'D', text: "Disable automated updates and maintain dependencies manually every five years." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Commit a `.github/dependabot.yml` configuration file specifying `package-ecosystem: npm`, `directory: '/'`, and `schedule: weekly`. Dependabot Version Updates automate routine maintenance by keeping dependencies on the latest releases. Configured declaratively via `.github/dependabot.yml`, administrators define the package ecosystem (npm, maven, pip, docker), directory, schedule, target branches, and reviewers.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates",
    tags: ["Version Updates", "Version Updates", "Governance And Compliance"]
  },
  {
    id: "gh-500-331",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Auto-Triage Rules to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Automating rule-based dismissal, snoozing, and prioritization of Dependabot alerts is under consideration.",
    options: [
      { id: 'A', text: "Manually review and dismiss 2,000 individual development alerts by hand every week." },
      { id: 'B', text: "Disable Dependabot completely to avoid alert fatigue." },
      { id: 'C', text: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability." },
      { id: 'D', text: "Treat devDependencies with the exact same criticality as public production web servers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules", "Auto-Triage Rules", "Enterprise Rollout"]
  },
  {
    id: "gh-500-332",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Auto-Triage Rules to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Automating rule-based dismissal, snoozing, and prioritization of Dependabot alerts is under consideration.",
    options: [
      { id: 'A', text: "Manually review and dismiss 2,000 individual development alerts by hand every week." },
      { id: 'B', text: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability." },
      { id: 'C', text: "Treat devDependencies with the exact same criticality as public production web servers." },
      { id: 'D', text: "Disable Dependabot completely to avoid alert fatigue." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules", "Auto-Triage Rules", "Supply Chain Defense"]
  },
  {
    id: "gh-500-333",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Auto-Triage Rules to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Automating rule-based dismissal, snoozing, and prioritization of Dependabot alerts is under consideration.",
    options: [
      { id: 'A', text: "Manually review and dismiss 2,000 individual development alerts by hand every week." },
      { id: 'B', text: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability." },
      { id: 'C', text: "Treat devDependencies with the exact same criticality as public production web servers." },
      { id: 'D', text: "Disable Dependabot completely to avoid alert fatigue." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules", "Auto-Triage Rules", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-334",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Auto-Triage Rules to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Automating rule-based dismissal, snoozing, and prioritization of Dependabot alerts is under consideration.",
    options: [
      { id: 'A', text: "Disable Dependabot completely to avoid alert fatigue." },
      { id: 'B', text: "Manually review and dismiss 2,000 individual development alerts by hand every week." },
      { id: 'C', text: "Treat devDependencies with the exact same criticality as public production web servers." },
      { id: 'D', text: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules", "Auto-Triage Rules", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-335",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Auto-Triage Rules and Alert Prioritization: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Auto-Triage Rules to automatically dismiss low-severity development dependency alerts while automatically opening urgent PRs for production CVEs.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Automating rule-based dismissal, snoozing, and prioritization of Dependabot alerts is under consideration.",
    options: [
      { id: 'A', text: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability." },
      { id: 'B', text: "Treat devDependencies with the exact same criticality as public production web servers." },
      { id: 'C', text: "Disable Dependabot completely to avoid alert fatigue." },
      { id: 'D', text: "Manually review and dismiss 2,000 individual development alerts by hand every week." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Dependabot Auto-Triage rules that evaluate alert severity, dependency scope (`development` vs `runtime`), and patch availability. Dependabot Auto-Triage rules allow organizations to automate alert management at scale. Rules evaluate metadata (e.g., dismiss if severity is Low and dependency scope is `development`, or auto-generate security updates if EPSS &gt; 50%), eliminating manual triage fatigue.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-alerts/using-dependabot-rules-to-prioritize-alerts",
    tags: ["Auto-Triage Rules", "Auto-Triage Rules", "Governance And Compliance"]
  },
  {
    id: "gh-500-336",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Dependency Review to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Enforcing quality gates in CI to block PRs that introduce vulnerable dependencies or invalid licenses is under consideration.",
    options: [
      { id: 'A', text: "Scan dependencies only after code is merged into the production main branch." },
      { id: 'B', text: "Disable pull request status checks to speed up merge velocity." },
      { id: 'C', text: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses." },
      { id: 'D', text: "Allow developers to introduce arbitrary dependencies without automated CI review." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review", "Dependency Review", "Enterprise Rollout"]
  },
  {
    id: "gh-500-337",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Dependency Review to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Enforcing quality gates in CI to block PRs that introduce vulnerable dependencies or invalid licenses is under consideration.",
    options: [
      { id: 'A', text: "Disable pull request status checks to speed up merge velocity." },
      { id: 'B', text: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses." },
      { id: 'C', text: "Allow developers to introduce arbitrary dependencies without automated CI review." },
      { id: 'D', text: "Scan dependencies only after code is merged into the production main branch." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review", "Dependency Review", "Supply Chain Defense"]
  },
  {
    id: "gh-500-338",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Dependency Review to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Enforcing quality gates in CI to block PRs that introduce vulnerable dependencies or invalid licenses is under consideration.",
    options: [
      { id: 'A', text: "Scan dependencies only after code is merged into the production main branch." },
      { id: 'B', text: "Disable pull request status checks to speed up merge velocity." },
      { id: 'C', text: "Allow developers to introduce arbitrary dependencies without automated CI review." },
      { id: 'D', text: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review", "Dependency Review", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-339",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Dependency Review to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Enforcing quality gates in CI to block PRs that introduce vulnerable dependencies or invalid licenses is under consideration.",
    options: [
      { id: 'A', text: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses." },
      { id: 'B', text: "Scan dependencies only after code is merged into the production main branch." },
      { id: 'C', text: "Disable pull request status checks to speed up merge velocity." },
      { id: 'D', text: "Allow developers to introduce arbitrary dependencies without automated CI review." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review", "Dependency Review", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-340",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependency Review Action in Pull Requests: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Dependency Review to block pull requests from merging if a developer introduces a new dependency with a known critical CVE or an unapproved AGPL license.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Enforcing quality gates in CI to block PRs that introduce vulnerable dependencies or invalid licenses is under consideration.",
    options: [
      { id: 'A', text: "Disable pull request status checks to speed up merge velocity." },
      { id: 'B', text: "Allow developers to introduce arbitrary dependencies without automated CI review." },
      { id: 'C', text: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses." },
      { id: 'D', text: "Scan dependencies only after code is merged into the production main branch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add the `actions/dependency-review-action` workflow to pull requests, configured to fail on `fail-on-severity: high` and unapproved licenses. The Dependency Review Action (`actions/dependency-review-action`) scans the diff of pull requests for changes to dependencies. It acts as an automated security gate, comparing changes against the Advisory Database and license policies, blocking PRs before vulnerable packages reach main.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review",
    tags: ["Dependency Review", "Dependency Review", "Governance And Compliance"]
  },
  {
    id: "gh-500-341",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates SBOM Export to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Generating industry-standard SPDX and CycloneDX software bills of materials via API and UI is under consideration.",
    options: [
      { id: 'A', text: "Generate an SBOM by taking screenshots of the repository package.json file." },
      { id: 'B', text: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format." },
      { id: 'C', text: "Type an unformatted text list of library names into an email message." },
      { id: 'D', text: "Refuse to provide an SBOM and claim software dependencies are trade secrets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export", "SBOM Export", "Enterprise Rollout"]
  },
  {
    id: "gh-500-342",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates SBOM Export to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Generating industry-standard SPDX and CycloneDX software bills of materials via API and UI is under consideration.",
    options: [
      { id: 'A', text: "Type an unformatted text list of library names into an email message." },
      { id: 'B', text: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format." },
      { id: 'C', text: "Refuse to provide an SBOM and claim software dependencies are trade secrets." },
      { id: 'D', text: "Generate an SBOM by taking screenshots of the repository package.json file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export", "SBOM Export", "Supply Chain Defense"]
  },
  {
    id: "gh-500-343",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates SBOM Export to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Generating industry-standard SPDX and CycloneDX software bills of materials via API and UI is under consideration.",
    options: [
      { id: 'A', text: "Generate an SBOM by taking screenshots of the repository package.json file." },
      { id: 'B', text: "Type an unformatted text list of library names into an email message." },
      { id: 'C', text: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format." },
      { id: 'D', text: "Refuse to provide an SBOM and claim software dependencies are trade secrets." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export", "SBOM Export", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-344",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates SBOM Export to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Generating industry-standard SPDX and CycloneDX software bills of materials via API and UI is under consideration.",
    options: [
      { id: 'A', text: "Generate an SBOM by taking screenshots of the repository package.json file." },
      { id: 'B', text: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format." },
      { id: 'C', text: "Type an unformatted text list of library names into an email message." },
      { id: 'D', text: "Refuse to provide an SBOM and claim software dependencies are trade secrets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export", "SBOM Export", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-345",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Software Bill of Materials (SBOM) Export and Formats: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates SBOM Export to provide enterprise compliance auditors with a machine-readable Software Bill of Materials (SBOM) conforming to the SPDX standard.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Generating industry-standard SPDX and CycloneDX software bills of materials via API and UI is under consideration.",
    options: [
      { id: 'A', text: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format." },
      { id: 'B', text: "Refuse to provide an SBOM and claim software dependencies are trade secrets." },
      { id: 'C', text: "Generate an SBOM by taking screenshots of the repository package.json file." },
      { id: 'D', text: "Type an unformatted text list of library names into an email message." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Export the repository Software Bill of Materials (SBOM) using the GitHub REST API or UI in standard SPDX 2.3 JSON format. GitHub supports exporting Software Bills of Materials (SBOMs) directly from the Dependency Graph. Compliant with executive orders and industry standards, the REST API (`/repos/{owner}/{repo}/dependency-graph/sbom`) exports machine-readable SPDX JSON files detailing all direct and transitive components.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/exporting-a-software-bill-of-materials-for-your-repository",
    tags: ["SBOM Export", "SBOM Export", "Governance And Compliance"]
  },
  {
    id: "gh-500-346",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Private Registries to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Authenticating Dependabot with private Artifactory, npm, and NuGet registries via dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens." },
      { id: 'B', text: "Make the internal enterprise package registry publicly accessible to the entire internet." },
      { id: 'C', text: "Hardcode private registry administrative passwords directly in the public repository dependabot.yml." },
      { id: 'D', text: "Disable private package scanning and assume internal packages are completely immune to vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries", "Private Registries", "Enterprise Rollout"]
  },
  {
    id: "gh-500-347",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Private Registries to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Authenticating Dependabot with private Artifactory, npm, and NuGet registries via dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Make the internal enterprise package registry publicly accessible to the entire internet." },
      { id: 'B', text: "Hardcode private registry administrative passwords directly in the public repository dependabot.yml." },
      { id: 'C', text: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens." },
      { id: 'D', text: "Disable private package scanning and assume internal packages are completely immune to vulnerabilities." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries", "Private Registries", "Supply Chain Defense"]
  },
  {
    id: "gh-500-348",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Private Registries to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Authenticating Dependabot with private Artifactory, npm, and NuGet registries via dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens." },
      { id: 'B', text: "Make the internal enterprise package registry publicly accessible to the entire internet." },
      { id: 'C', text: "Hardcode private registry administrative passwords directly in the public repository dependabot.yml." },
      { id: 'D', text: "Disable private package scanning and assume internal packages are completely immune to vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries", "Private Registries", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-349",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Private Registries to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Authenticating Dependabot with private Artifactory, npm, and NuGet registries via dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Disable private package scanning and assume internal packages are completely immune to vulnerabilities." },
      { id: 'B', text: "Hardcode private registry administrative passwords directly in the public repository dependabot.yml." },
      { id: 'C', text: "Make the internal enterprise package registry publicly accessible to the entire internet." },
      { id: 'D', text: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries", "Private Registries", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-350",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Dependabot Private Registry Authentication: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Private Registries to enable Dependabot to check for updates and security advisories on proprietary internal packages hosted in a private Artifactory registry.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Authenticating Dependabot with private Artifactory, npm, and NuGet registries via dependabot.yml is under consideration.",
    options: [
      { id: 'A', text: "Disable private package scanning and assume internal packages are completely immune to vulnerabilities." },
      { id: 'B', text: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens." },
      { id: 'C', text: "Make the internal enterprise package registry publicly accessible to the entire internet." },
      { id: 'D', text: "Hardcode private registry administrative passwords directly in the public repository dependabot.yml." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure private registry credentials in `.github/dependabot.yml` using `registries` with repository secrets for tokens. Dependabot natively supports private package ecosystems (npm, Maven, NuGet, PyPI, Docker). In `.github/dependabot.yml`, administrators define `registries` pointing to internal endpoints, referencing encrypted GitHub repository/organization secrets to authenticate securely without credential exposure.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-access-to-private-registries-for-dependabot",
    tags: ["Private Registries", "Private Registries", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_14;
