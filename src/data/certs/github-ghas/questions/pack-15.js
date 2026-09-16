export const GITHUB_GHAS_QUESTIONS_15 = [
  {
    id: "gh-500-351",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Set `groups` in `.github/dependabot.yml` to combine the minor and patch updates." },
      { id: 'B', text: "Set `open-pull-requests-limit: 1` so only one update is in flight at a time." },
      { id: 'C', text: "Set `schedule.interval: monthly` so that the updates arrive in one batch each month." },
      { id: 'D', text: "Set `versioning-strategy: increase` so each package moves in a single commit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates","Grouped Updates","Enterprise Rollout"]
  },
  {
    id: "gh-500-352",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Set `groups` in `.github/dependabot.yml` to combine the minor and patch updates." },
      { id: 'B', text: "Set `open-pull-requests-limit: 1` so only one update is in flight at a time." },
      { id: 'C', text: "Set `schedule.interval: monthly` so that the updates arrive in one batch each month." },
      { id: 'D', text: "Set `versioning-strategy: increase` so each package moves in a single commit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates","Grouped Updates","Supply Chain Defense"]
  },
  {
    id: "gh-500-353",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Set `groups` in `.github/dependabot.yml` to combine the minor and patch updates." },
      { id: 'B', text: "Set `open-pull-requests-limit: 1` so only one update is in flight at a time." },
      { id: 'C', text: "Set `schedule.interval: monthly` so that the updates arrive in one batch each month." },
      { id: 'D', text: "Set `versioning-strategy: increase` so each package moves in a single commit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates","Grouped Updates","Secret Leak Prevention"]
  },
  {
    id: "gh-500-354",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Set `versioning-strategy: increase` so each package moves in a single commit." },
      { id: 'B', text: "Set `schedule.interval: monthly` so that the updates arrive in one batch each month." },
      { id: 'C', text: "Set `open-pull-requests-limit: 1` so only one update is in flight at a time." },
      { id: 'D', text: "Set `groups` in `.github/dependabot.yml` to combine the minor and patch updates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates","Grouped Updates","Static Analysis Codeql"]
  },
  {
    id: "gh-500-355",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Set `groups` in `.github/dependabot.yml` to combine the minor and patch updates." },
      { id: 'B', text: "Set `versioning-strategy: increase` so each package moves in a single commit." },
      { id: 'C', text: "Set `open-pull-requests-limit: 1` so only one update is in flight at a time." },
      { id: 'D', text: "Set `schedule.interval: monthly` so that the updates arrive in one batch each month." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates","Grouped Updates","Governance And Compliance"]
  },
  {
    id: "gh-500-356",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Export the SBOM on each release and have the legal team review the licences that it lists." },
      { id: 'B', text: "Enable Dependabot alerts, which raise a finding when a package changes its licence." },
      { id: 'C', text: "Run a scheduled workflow that fails when any manifest lists an unapproved licence." },
      { id: 'D', text: "Use dependency review with a licence policy, so PRs adding an unapproved licence fail." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance","License Compliance","Enterprise Rollout"]
  },
  {
    id: "gh-500-357",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Run a scheduled workflow that fails when any manifest lists an unapproved licence." },
      { id: 'B', text: "Use dependency review with a licence policy, so PRs adding an unapproved licence fail." },
      { id: 'C', text: "Export the SBOM on each release and have the legal team review the licences that it lists." },
      { id: 'D', text: "Enable Dependabot alerts, which raise a finding when a package changes its licence." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance","License Compliance","Supply Chain Defense"]
  },
  {
    id: "gh-500-358",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Export the SBOM on each release and have the legal team review the licences that it lists." },
      { id: 'B', text: "Use dependency review with a licence policy, so PRs adding an unapproved licence fail." },
      { id: 'C', text: "Enable Dependabot alerts, which raise a finding when a package changes its licence." },
      { id: 'D', text: "Run a scheduled workflow that fails when any manifest lists an unapproved licence." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance","License Compliance","Secret Leak Prevention"]
  },
  {
    id: "gh-500-359",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Use dependency review with a licence policy, so PRs adding an unapproved licence fail." },
      { id: 'B', text: "Enable Dependabot alerts, which raise a finding when a package changes its licence." },
      { id: 'C', text: "Export the SBOM on each release and have the legal team review the licences that it lists." },
      { id: 'D', text: "Run a scheduled workflow that fails when any manifest lists an unapproved licence." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance","License Compliance","Static Analysis Codeql"]
  },
  {
    id: "gh-500-360",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Use dependency review with a licence policy, so PRs adding an unapproved licence fail." },
      { id: 'B', text: "Run a scheduled workflow that fails when any manifest lists an unapproved licence." },
      { id: 'C', text: "Enable Dependabot alerts, which raise a finding when a package changes its licence." },
      { id: 'D', text: "Export the SBOM on each release and have the legal team review the licences that it lists." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance","License Compliance","Governance And Compliance"]
  },
  {
    id: "gh-500-361",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Use the NVD feed directly, and map each CVE onto the packages the estate depends on." },
      { id: 'B', text: "Use the vendor's own advisory mailing lists as the source the triage process works from." },
      { id: 'C', text: "Use the GitHub Advisory Database, which merges NVD data with reviewed GHSA entries." },
      { id: 'D', text: "Use the OSV database alone, which indexes ecosystems rather than vendor products." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database","Advisory Database","Enterprise Rollout"]
  },
  {
    id: "gh-500-362",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Use the OSV database alone, which indexes ecosystems rather than vendor products." },
      { id: 'B', text: "Use the GitHub Advisory Database, which merges NVD data with reviewed GHSA entries." },
      { id: 'C', text: "Use the vendor's own advisory mailing lists as the source the triage process works from." },
      { id: 'D', text: "Use the NVD feed directly, and map each CVE onto the packages the estate depends on." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database","Advisory Database","Supply Chain Defense"]
  },
  {
    id: "gh-500-363",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Use the OSV database alone, which indexes ecosystems rather than vendor products." },
      { id: 'B', text: "Use the GitHub Advisory Database, which merges NVD data with reviewed GHSA entries." },
      { id: 'C', text: "Use the vendor's own advisory mailing lists as the source the triage process works from." },
      { id: 'D', text: "Use the NVD feed directly, and map each CVE onto the packages the estate depends on." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database","Advisory Database","Secret Leak Prevention"]
  },
  {
    id: "gh-500-364",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Use the GitHub Advisory Database, which merges NVD data with reviewed GHSA entries." },
      { id: 'B', text: "Use the vendor's own advisory mailing lists as the source the triage process works from." },
      { id: 'C', text: "Use the OSV database alone, which indexes ecosystems rather than vendor products." },
      { id: 'D', text: "Use the NVD feed directly, and map each CVE onto the packages the estate depends on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database","Advisory Database","Static Analysis Codeql"]
  },
  {
    id: "gh-500-365",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Use the vendor's own advisory mailing lists as the source the triage process works from." },
      { id: 'B', text: "Use the GitHub Advisory Database, which merges NVD data with reviewed GHSA entries." },
      { id: 'C', text: "Use the NVD feed directly, and map each CVE onto the packages the estate depends on." },
      { id: 'D', text: "Use the OSV database alone, which indexes ecosystems rather than vendor products." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database","Advisory Database","Governance And Compliance"]
  },
  {
    id: "gh-500-366",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Use `actions/attest-build-provenance` to sign build provenance through Sigstore." },
      { id: 'B', text: "Use `actions/upload-artifact` with a checksum file committed alongside the release." },
      { id: 'C', text: "Use the release API to publish digests, which consumers verify before installing." },
      { id: 'D', text: "Use a self-hosted runner so the build environment itself is the trust boundary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation","Artifact Attestation","Enterprise Rollout"]
  },
  {
    id: "gh-500-367",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Use `actions/attest-build-provenance` to sign build provenance through Sigstore." },
      { id: 'B', text: "Use `actions/upload-artifact` with a checksum file committed alongside the release." },
      { id: 'C', text: "Use the release API to publish digests, which consumers verify before installing." },
      { id: 'D', text: "Use a self-hosted runner so the build environment itself is the trust boundary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation","Artifact Attestation","Supply Chain Defense"]
  },
  {
    id: "gh-500-368",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Use `actions/upload-artifact` with a checksum file committed alongside the release." },
      { id: 'B', text: "Use `actions/attest-build-provenance` to sign build provenance through Sigstore." },
      { id: 'C', text: "Use a self-hosted runner so the build environment itself is the trust boundary." },
      { id: 'D', text: "Use the release API to publish digests, which consumers verify before installing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation","Artifact Attestation","Secret Leak Prevention"]
  },
  {
    id: "gh-500-369",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Use `actions/attest-build-provenance` to sign build provenance through Sigstore." },
      { id: 'B', text: "Use `actions/upload-artifact` with a checksum file committed alongside the release." },
      { id: 'C', text: "Use the release API to publish digests, which consumers verify before installing." },
      { id: 'D', text: "Use a self-hosted runner so the build environment itself is the trust boundary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation","Artifact Attestation","Static Analysis Codeql"]
  },
  {
    id: "gh-500-370",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Use `actions/upload-artifact` with a checksum file committed alongside the release." },
      { id: 'B', text: "Use `actions/attest-build-provenance` to sign build provenance through Sigstore." },
      { id: 'C', text: "Use a self-hosted runner so the build environment itself is the trust boundary." },
      { id: 'D', text: "Use the release API to publish digests, which consumers verify before installing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation","Artifact Attestation","Governance And Compliance"]
  },
  {
    id: "gh-500-371",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer needs to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives?",
    options: [
      { id: 'A', text: "Use the build's own debug symbols, which map the compiled binary back to its source lines." },
      { id: 'B', text: "Use a sandbox that runs the compiled binary and inspects its memory for unsafe operations." },
      { id: 'C', text: "Use regular expression searches over the raw source text, without parsing the language first." },
      { id: 'D', text: "Use the CodeQL extractors, which build an AST and dataflow graph into a queryable database." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture","CodeQL Architecture","Enterprise Rollout"]
  },
  {
    id: "gh-500-372",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer needs to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively?",
    options: [
      { id: 'A', text: "Use regular expression searches over the raw source text, without parsing the language first." },
      { id: 'B', text: "Use the build's own debug symbols, which map the compiled binary back to its source lines." },
      { id: 'C', text: "Use a sandbox that runs the compiled binary and inspects its memory for unsafe operations." },
      { id: 'D', text: "Use the CodeQL extractors, which build an AST and dataflow graph into a queryable database." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture","CodeQL Architecture","Supply Chain Defense"]
  },
  {
    id: "gh-500-373",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer needs to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure?",
    options: [
      { id: 'A', text: "Use the CodeQL extractors, which build an AST and dataflow graph into a queryable database." },
      { id: 'B', text: "Use regular expression searches over the raw source text, without parsing the language first." },
      { id: 'C', text: "Use a sandbox that runs the compiled binary and inspects its memory for unsafe operations." },
      { id: 'D', text: "Use the build's own debug symbols, which map the compiled binary back to its source lines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture","CodeQL Architecture","Secret Leak Prevention"]
  },
  {
    id: "gh-500-374",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer needs to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge?",
    options: [
      { id: 'A', text: "Use the CodeQL extractors, which build an AST and dataflow graph into a queryable database." },
      { id: 'B', text: "Use regular expression searches over the raw source text, without parsing the language first." },
      { id: 'C', text: "Use a sandbox that runs the compiled binary and inspects its memory for unsafe operations." },
      { id: 'D', text: "Use the build's own debug symbols, which map the compiled binary back to its source lines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture","CodeQL Architecture","Static Analysis Codeql"]
  },
  {
    id: "gh-500-375",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer needs to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance?",
    options: [
      { id: 'A', text: "Use a sandbox that runs the compiled binary and inspects its memory for unsafe operations." },
      { id: 'B', text: "Use the CodeQL extractors, which build an AST and dataflow graph into a queryable database." },
      { id: 'C', text: "Use regular expression searches over the raw source text, without parsing the language first." },
      { id: 'D', text: "Use the build's own debug symbols, which map the compiled binary back to its source lines." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture","CodeQL Architecture","Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_15;
