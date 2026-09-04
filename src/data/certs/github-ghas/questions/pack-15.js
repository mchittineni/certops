export const GITHUB_GHAS_QUESTIONS_15 = [
  {
    id: "gh-500-351",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Grouped Updates to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Consolidating multiple minor/patch dependency bumps into a single pull request to reduce PR noise is under consideration.",
    options: [
      { id: 'A', text: "Disable Dependabot updates entirely to eliminate pull request notifications." },
      { id: 'B', text: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request." },
      { id: 'C', text: "Merge all pull requests automatically without running automated test suites." },
      { id: 'D', text: "Require developers to approve and merge 30 separate pull requests manually every week." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates", "Grouped Updates", "Enterprise Rollout"]
  },
  {
    id: "gh-500-352",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Grouped Updates to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Consolidating multiple minor/patch dependency bumps into a single pull request to reduce PR noise is under consideration.",
    options: [
      { id: 'A', text: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request." },
      { id: 'B', text: "Disable Dependabot updates entirely to eliminate pull request notifications." },
      { id: 'C', text: "Merge all pull requests automatically without running automated test suites." },
      { id: 'D', text: "Require developers to approve and merge 30 separate pull requests manually every week." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates", "Grouped Updates", "Supply Chain Defense"]
  },
  {
    id: "gh-500-353",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Grouped Updates to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Consolidating multiple minor/patch dependency bumps into a single pull request to reduce PR noise is under consideration.",
    options: [
      { id: 'A', text: "Merge all pull requests automatically without running automated test suites." },
      { id: 'B', text: "Require developers to approve and merge 30 separate pull requests manually every week." },
      { id: 'C', text: "Disable Dependabot updates entirely to eliminate pull request notifications." },
      { id: 'D', text: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates", "Grouped Updates", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-354",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Grouped Updates to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Consolidating multiple minor/patch dependency bumps into a single pull request to reduce PR noise is under consideration.",
    options: [
      { id: 'A', text: "Require developers to approve and merge 30 separate pull requests manually every week." },
      { id: 'B', text: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request." },
      { id: 'C', text: "Merge all pull requests automatically without running automated test suites." },
      { id: 'D', text: "Disable Dependabot updates entirely to eliminate pull request notifications." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates", "Grouped Updates", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-355",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Grouped Dependabot Updates: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Grouped Updates to prevent developers from being overwhelmed by 30 individual Dependabot pull requests opening on Monday morning.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Consolidating multiple minor/patch dependency bumps into a single pull request to reduce PR noise is under consideration.",
    options: [
      { id: 'A', text: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request." },
      { id: 'B', text: "Require developers to approve and merge 30 separate pull requests manually every week." },
      { id: 'C', text: "Merge all pull requests automatically without running automated test suites." },
      { id: 'D', text: "Disable Dependabot updates entirely to eliminate pull request notifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `groups` in `.github/dependabot.yml` to combine minor and patch updates for specific packages into a single pull request. Grouped Dependabot Updates allow platform teams to bundle related dependency updates into a single PR. In `.github/dependabot.yml`, defining `groups` with patterns (e.g., grouping all `@angular/*` packages or all minor/patch updates) drastically cuts review noise while maintaining currency.",
    referenceUrl: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#grouping-dependabot-updates",
    tags: ["Grouped Updates", "Grouped Updates", "Governance And Compliance"]
  },
  {
    id: "gh-500-356",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates License Compliance to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Detecting restrictive licenses (GPL, AGPL) and enforcing corporate open-source license policies is under consideration.",
    options: [
      { id: 'A', text: "Assume all packages on npm and PyPI are released under the public domain." },
      { id: 'B', text: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses." },
      { id: 'C', text: "Scan licenses manually by searching copyright text files after shipping production releases." },
      { id: 'D', text: "Allow developers to import arbitrary software without checking open-source license requirements." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance", "License Compliance", "Enterprise Rollout"]
  },
  {
    id: "gh-500-357",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates License Compliance to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Detecting restrictive licenses (GPL, AGPL) and enforcing corporate open-source license policies is under consideration.",
    options: [
      { id: 'A', text: "Assume all packages on npm and PyPI are released under the public domain." },
      { id: 'B', text: "Scan licenses manually by searching copyright text files after shipping production releases." },
      { id: 'C', text: "Allow developers to import arbitrary software without checking open-source license requirements." },
      { id: 'D', text: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance", "License Compliance", "Supply Chain Defense"]
  },
  {
    id: "gh-500-358",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates License Compliance to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Detecting restrictive licenses (GPL, AGPL) and enforcing corporate open-source license policies is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to import arbitrary software without checking open-source license requirements." },
      { id: 'B', text: "Scan licenses manually by searching copyright text files after shipping production releases." },
      { id: 'C', text: "Assume all packages on npm and PyPI are released under the public domain." },
      { id: 'D', text: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance", "License Compliance", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-359",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates License Compliance to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Detecting restrictive licenses (GPL, AGPL) and enforcing corporate open-source license policies is under consideration.",
    options: [
      { id: 'A', text: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses." },
      { id: 'B', text: "Scan licenses manually by searching copyright text files after shipping production releases." },
      { id: 'C', text: "Allow developers to import arbitrary software without checking open-source license requirements." },
      { id: 'D', text: "Assume all packages on npm and PyPI are released under the public domain." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance", "License Compliance", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-360",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "License Compliance and Policy Enforcement: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates License Compliance to prevent commercial software products from incorporating libraries with restrictive copyleft licenses like GNU Affero GPL (AGPL).",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Detecting restrictive licenses (GPL, AGPL) and enforcing corporate open-source license policies is under consideration.",
    options: [
      { id: 'A', text: "Assume all packages on npm and PyPI are released under the public domain." },
      { id: 'B', text: "Allow developers to import arbitrary software without checking open-source license requirements." },
      { id: 'C', text: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses." },
      { id: 'D', text: "Scan licenses manually by searching copyright text files after shipping production releases." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use Dependency Review with configured license policies in GitHub Actions to block PRs introducing unapproved licenses. License compliance scanning analyzes the declared licenses of direct and transitive dependencies. Using the Dependency Review action, organizations configure allowlists (e.g., MIT, Apache-2.0, BSD) and denylists (e.g., AGPL-3.0), failing CI checks when non-compliant licenses are detected.",
    referenceUrl: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#license-review",
    tags: ["License Compliance", "License Compliance", "Governance And Compliance"]
  },
  {
    id: "gh-500-361",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Advisory Database to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Curated vulnerability database aggregating CVEs, GHSA advisories, and community contributions is under consideration.",
    options: [
      { id: 'A', text: "Assume vulnerability data is static and never updated after publication." },
      { id: 'B', text: "Rely on unverified security blog posts on social media for vulnerability intelligence." },
      { id: 'C', text: "Keep all discovered security vulnerabilities secret to prevent software vendors from patching them." },
      { id: 'D', text: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database", "Advisory Database", "Enterprise Rollout"]
  },
  {
    id: "gh-500-362",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Advisory Database to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Curated vulnerability database aggregating CVEs, GHSA advisories, and community contributions is under consideration.",
    options: [
      { id: 'A', text: "Rely on unverified security blog posts on social media for vulnerability intelligence." },
      { id: 'B', text: "Assume vulnerability data is static and never updated after publication." },
      { id: 'C', text: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories." },
      { id: 'D', text: "Keep all discovered security vulnerabilities secret to prevent software vendors from patching them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database", "Advisory Database", "Supply Chain Defense"]
  },
  {
    id: "gh-500-363",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Advisory Database to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Curated vulnerability database aggregating CVEs, GHSA advisories, and community contributions is under consideration.",
    options: [
      { id: 'A', text: "Rely on unverified security blog posts on social media for vulnerability intelligence." },
      { id: 'B', text: "Assume vulnerability data is static and never updated after publication." },
      { id: 'C', text: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories." },
      { id: 'D', text: "Keep all discovered security vulnerabilities secret to prevent software vendors from patching them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database", "Advisory Database", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-364",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Advisory Database to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Curated vulnerability database aggregating CVEs, GHSA advisories, and community contributions is under consideration.",
    options: [
      { id: 'A', text: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories." },
      { id: 'B', text: "Rely on unverified security blog posts on social media for vulnerability intelligence." },
      { id: 'C', text: "Assume vulnerability data is static and never updated after publication." },
      { id: 'D', text: "Keep all discovered security vulnerabilities secret to prevent software vendors from patching them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database", "Advisory Database", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-365",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "GitHub Advisory Database and Community Submissions: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Advisory Database to understand how GitHub curates vulnerability data and how security researchers can submit zero-day fixes directly to GitHub.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Curated vulnerability database aggregating CVEs, GHSA advisories, and community contributions is under consideration.",
    options: [
      { id: 'A', text: "Keep all discovered security vulnerabilities secret to prevent software vendors from patching them." },
      { id: 'B', text: "Assume vulnerability data is static and never updated after publication." },
      { id: 'C', text: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories." },
      { id: 'D', text: "Rely on unverified security blog posts on social media for vulnerability intelligence." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Leverage the GitHub Advisory Database, which combines National Vulnerability Database (NVD) data with community-reviewed GHSA advisories. The GitHub Advisory Database is an open, community-curated database linking CVEs to GitHub Security Advisories (GHSA). It aggregates feeds from the NVD, package registry advisories, and direct community submissions reviewed by a dedicated security team, powering Dependabot alerts.",
    referenceUrl: "https://github.com/advisories",
    tags: ["Advisory Database", "Advisory Database", "Governance And Compliance"]
  },
  {
    id: "gh-500-366",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Artifact Attestation to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Cryptographic signing of build artifacts in GitHub Actions using Sigstore and SLSA standards is under consideration.",
    options: [
      { id: 'A', text: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore." },
      { id: 'B', text: "Allow developers to build production binaries on personal laptops and upload them manually over FTP." },
      { id: 'C', text: "Rely on filenames and MD5 checksums stored in unencrypted text files." },
      { id: 'D', text: "Disable build authentication to improve pipeline throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation", "Artifact Attestation", "Enterprise Rollout"]
  },
  {
    id: "gh-500-367",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Artifact Attestation to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Cryptographic signing of build artifacts in GitHub Actions using Sigstore and SLSA standards is under consideration.",
    options: [
      { id: 'A', text: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore." },
      { id: 'B', text: "Rely on filenames and MD5 checksums stored in unencrypted text files." },
      { id: 'C', text: "Allow developers to build production binaries on personal laptops and upload them manually over FTP." },
      { id: 'D', text: "Disable build authentication to improve pipeline throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation", "Artifact Attestation", "Supply Chain Defense"]
  },
  {
    id: "gh-500-368",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Artifact Attestation to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Cryptographic signing of build artifacts in GitHub Actions using Sigstore and SLSA standards is under consideration.",
    options: [
      { id: 'A', text: "Rely on filenames and MD5 checksums stored in unencrypted text files." },
      { id: 'B', text: "Disable build authentication to improve pipeline throughput." },
      { id: 'C', text: "Allow developers to build production binaries on personal laptops and upload them manually over FTP." },
      { id: 'D', text: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation", "Artifact Attestation", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-369",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Artifact Attestation to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Cryptographic signing of build artifacts in GitHub Actions using Sigstore and SLSA standards is under consideration.",
    options: [
      { id: 'A', text: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore." },
      { id: 'B', text: "Rely on filenames and MD5 checksums stored in unencrypted text files." },
      { id: 'C', text: "Allow developers to build production binaries on personal laptops and upload them manually over FTP." },
      { id: 'D', text: "Disable build authentication to improve pipeline throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation", "Artifact Attestation", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-370",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d2",
    domainName: "Dependabot & Supply Chain Security",
    title: "Artifact Attestation and SLSA Provenance: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Artifact Attestation to guarantee that binary container images and release artifacts were compiled directly by authorized GitHub Actions workflows.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Cryptographic signing of build artifacts in GitHub Actions using Sigstore and SLSA standards is under consideration.",
    options: [
      { id: 'A', text: "Disable build authentication to improve pipeline throughput." },
      { id: 'B', text: "Rely on filenames and MD5 checksums stored in unencrypted text files." },
      { id: 'C', text: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore." },
      { id: 'D', text: "Allow developers to build production binaries on personal laptops and upload them manually over FTP." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use the `actions/attest-build-provenance` action to generate cryptographically signed build provenance attestations backed by Sigstore. Artifact Attestation in GitHub Actions signs build outputs (containers, binaries) using Sigstore public key infrastructure. It establishes verifiable build provenance conforming to the SLSA (Supply-chain Levels for Software Artifacts) framework, proving code origin without managing private keys.",
    referenceUrl: "https://docs.github.com/en/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds",
    tags: ["Artifact Attestation", "Artifact Attestation", "Governance And Compliance"]
  },
  {
    id: "gh-500-371",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates CodeQL Architecture to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Extracting Abstract Syntax Trees (AST) and dataflow graphs into a relational CodeQL database is under consideration.",
    options: [
      { id: 'A', text: "Run compiled binaries in a sandbox and inspect memory dumps for runtime errors." },
      { id: 'B', text: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database." },
      { id: 'C', text: "Decompile binaries and guess vulnerability locations based on function names." },
      { id: 'D', text: "Execute simple regular expression searches on raw text files without compiling or parsing code syntax." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture", "CodeQL Architecture", "Enterprise Rollout"]
  },
  {
    id: "gh-500-372",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates CodeQL Architecture to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Extracting Abstract Syntax Trees (AST) and dataflow graphs into a relational CodeQL database is under consideration.",
    options: [
      { id: 'A', text: "Decompile binaries and guess vulnerability locations based on function names." },
      { id: 'B', text: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database." },
      { id: 'C', text: "Run compiled binaries in a sandbox and inspect memory dumps for runtime errors." },
      { id: 'D', text: "Execute simple regular expression searches on raw text files without compiling or parsing code syntax." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture", "CodeQL Architecture", "Supply Chain Defense"]
  },
  {
    id: "gh-500-373",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates CodeQL Architecture to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Extracting Abstract Syntax Trees (AST) and dataflow graphs into a relational CodeQL database is under consideration.",
    options: [
      { id: 'A', text: "Execute simple regular expression searches on raw text files without compiling or parsing code syntax." },
      { id: 'B', text: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database." },
      { id: 'C', text: "Decompile binaries and guess vulnerability locations based on function names." },
      { id: 'D', text: "Run compiled binaries in a sandbox and inspect memory dumps for runtime errors." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture", "CodeQL Architecture", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-374",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates CodeQL Architecture to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Extracting Abstract Syntax Trees (AST) and dataflow graphs into a relational CodeQL database is under consideration.",
    options: [
      { id: 'A', text: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database." },
      { id: 'B', text: "Execute simple regular expression searches on raw text files without compiling or parsing code syntax." },
      { id: 'C', text: "Run compiled binaries in a sandbox and inspect memory dumps for runtime errors." },
      { id: 'D', text: "Decompile binaries and guess vulnerability locations based on function names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture", "CodeQL Architecture", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-375",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL Architecture: Extractors and Relational Databases: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates CodeQL Architecture to understand how CodeQL transforms source code into a queryable relational database for semantic vulnerability analysis.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Extracting Abstract Syntax Trees (AST) and dataflow graphs into a relational CodeQL database is under consideration.",
    options: [
      { id: 'A', text: "Execute simple regular expression searches on raw text files without compiling or parsing code syntax." },
      { id: 'B', text: "Run compiled binaries in a sandbox and inspect memory dumps for runtime errors." },
      { id: 'C', text: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database." },
      { id: 'D', text: "Decompile binaries and guess vulnerability locations based on function names." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use CodeQL extractors to parse source code, building an Abstract Syntax Tree (AST) and dataflow graph stored in a relational database. CodeQL treats code like data. Language extractors compile or parse source code, creating an Abstract Syntax Tree (AST), Control Flow Graph (CFG), and Data Flow Graph. These relational representations are packed into a CodeQL database that QL queries evaluate declaratively.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
    tags: ["CodeQL Architecture", "CodeQL Architecture", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_15;
