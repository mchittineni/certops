export const GITHUB_GHAS_QUESTIONS_17 = [
  {
    id: "gh-500-401",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL CLI in External CI Systems (Jenkins, GitLab): Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates CodeQL CLI to run CodeQL static analysis on build jobs running inside an external enterprise Jenkins or GitLab CI/CD pipeline.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Running codeql database create, database analyze, and uploading SARIF results to GitHub is under consideration.",
    options: [
      { id: 'A', text: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API." },
      { id: 'B', text: "Migrate all company infrastructure to GitHub Actions immediately regardless of enterprise constraints." },
      { id: 'C', text: "Run CodeQL inside client web browsers using WebAssembly." },
      { id: 'D', text: "Execute unverified third-party binaries that lack security attestation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API. The standalone CodeQL CLI enables running CodeQL inside third-party CI/CD systems (Jenkins, GitLab CI, Azure Pipelines, CircleCI). Pipelines create a database (`codeql database create`), analyze it against query suites (`codeql database analyze`), and upload the SARIF output via GitHub API.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system",
    tags: ["CodeQL CLI", "CodeQL CLI", "Enterprise Rollout"]
  },
  {
    id: "gh-500-402",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL CLI in External CI Systems (Jenkins, GitLab): Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates CodeQL CLI to run CodeQL static analysis on build jobs running inside an external enterprise Jenkins or GitLab CI/CD pipeline.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Running codeql database create, database analyze, and uploading SARIF results to GitHub is under consideration.",
    options: [
      { id: 'A', text: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API." },
      { id: 'B', text: "Migrate all company infrastructure to GitHub Actions immediately regardless of enterprise constraints." },
      { id: 'C', text: "Run CodeQL inside client web browsers using WebAssembly." },
      { id: 'D', text: "Execute unverified third-party binaries that lack security attestation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API. The standalone CodeQL CLI enables running CodeQL inside third-party CI/CD systems (Jenkins, GitLab CI, Azure Pipelines, CircleCI). Pipelines create a database (`codeql database create`), analyze it against query suites (`codeql database analyze`), and upload the SARIF output via GitHub API.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system",
    tags: ["CodeQL CLI", "CodeQL CLI", "Supply Chain Defense"]
  },
  {
    id: "gh-500-403",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL CLI in External CI Systems (Jenkins, GitLab): Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates CodeQL CLI to run CodeQL static analysis on build jobs running inside an external enterprise Jenkins or GitLab CI/CD pipeline.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Running codeql database create, database analyze, and uploading SARIF results to GitHub is under consideration.",
    options: [
      { id: 'A', text: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API." },
      { id: 'B', text: "Migrate all company infrastructure to GitHub Actions immediately regardless of enterprise constraints." },
      { id: 'C', text: "Run CodeQL inside client web browsers using WebAssembly." },
      { id: 'D', text: "Execute unverified third-party binaries that lack security attestation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API. The standalone CodeQL CLI enables running CodeQL inside third-party CI/CD systems (Jenkins, GitLab CI, Azure Pipelines, CircleCI). Pipelines create a database (`codeql database create`), analyze it against query suites (`codeql database analyze`), and upload the SARIF output via GitHub API.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system",
    tags: ["CodeQL CLI", "CodeQL CLI", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-404",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL CLI in External CI Systems (Jenkins, GitLab): Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates CodeQL CLI to run CodeQL static analysis on build jobs running inside an external enterprise Jenkins or GitLab CI/CD pipeline.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Running codeql database create, database analyze, and uploading SARIF results to GitHub is under consideration.",
    options: [
      { id: 'A', text: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API." },
      { id: 'B', text: "Migrate all company infrastructure to GitHub Actions immediately regardless of enterprise constraints." },
      { id: 'C', text: "Run CodeQL inside client web browsers using WebAssembly." },
      { id: 'D', text: "Execute unverified third-party binaries that lack security attestation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API. The standalone CodeQL CLI enables running CodeQL inside third-party CI/CD systems (Jenkins, GitLab CI, Azure Pipelines, CircleCI). Pipelines create a database (`codeql database create`), analyze it against query suites (`codeql database analyze`), and upload the SARIF output via GitHub API.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system",
    tags: ["CodeQL CLI", "CodeQL CLI", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-405",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "CodeQL CLI in External CI Systems (Jenkins, GitLab): Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates CodeQL CLI to run CodeQL static analysis on build jobs running inside an external enterprise Jenkins or GitLab CI/CD pipeline.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Running codeql database create, database analyze, and uploading SARIF results to GitHub is under consideration.",
    options: [
      { id: 'A', text: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API." },
      { id: 'B', text: "Migrate all company infrastructure to GitHub Actions immediately regardless of enterprise constraints." },
      { id: 'C', text: "Run CodeQL inside client web browsers using WebAssembly." },
      { id: 'D', text: "Execute unverified third-party binaries that lack security attestation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the CodeQL CLI to run `codeql database create`, `codeql database analyze`, and upload the resulting SARIF file to the GitHub Code Scanning API. The standalone CodeQL CLI enables running CodeQL inside third-party CI/CD systems (Jenkins, GitLab CI, Azure Pipelines, CircleCI). Pipelines create a database (`codeql database create`), analyze it against query suites (`codeql database analyze`), and upload the SARIF output via GitHub API.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system",
    tags: ["CodeQL CLI", "CodeQL CLI", "Governance And Compliance"]
  },
  {
    id: "gh-500-406",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "SARIF Format and Third-Party SAST Integration: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates SARIF Standard to display findings from third-party security tools (e.g., Snyk, Checkmarx, SonarQube, Trivy) alongside CodeQL in GitHub Security.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Static Analysis Results Interchange Format (SARIF) for ingesting multi-vendor security findings is under consideration.",
    options: [
      { id: 'A', text: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`." },
      { id: 'B', text: "Convert third-party scan results into plain text emails sent to developers." },
      { id: 'C', text: "Build custom proprietary database tables to store third-party security results." },
      { id: 'D', text: "Display third-party findings only in external tool web dashboards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`. SARIF (Static Analysis Results Interchange Format) is an OASIS JSON-based standard for static analysis tools. GitHub Code Scanning ingests SARIF 2.1.0 files via the `upload-sarif` action or REST API, providing a unified pane of glass for CodeQL and third-party scanners.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["SARIF Standard", "SARIF Standard", "Enterprise Rollout"]
  },
  {
    id: "gh-500-407",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "SARIF Format and Third-Party SAST Integration: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates SARIF Standard to display findings from third-party security tools (e.g., Snyk, Checkmarx, SonarQube, Trivy) alongside CodeQL in GitHub Security.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Static Analysis Results Interchange Format (SARIF) for ingesting multi-vendor security findings is under consideration.",
    options: [
      { id: 'A', text: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`." },
      { id: 'B', text: "Convert third-party scan results into plain text emails sent to developers." },
      { id: 'C', text: "Build custom proprietary database tables to store third-party security results." },
      { id: 'D', text: "Display third-party findings only in external tool web dashboards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`. SARIF (Static Analysis Results Interchange Format) is an OASIS JSON-based standard for static analysis tools. GitHub Code Scanning ingests SARIF 2.1.0 files via the `upload-sarif` action or REST API, providing a unified pane of glass for CodeQL and third-party scanners.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["SARIF Standard", "SARIF Standard", "Supply Chain Defense"]
  },
  {
    id: "gh-500-408",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "SARIF Format and Third-Party SAST Integration: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates SARIF Standard to display findings from third-party security tools (e.g., Snyk, Checkmarx, SonarQube, Trivy) alongside CodeQL in GitHub Security.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Static Analysis Results Interchange Format (SARIF) for ingesting multi-vendor security findings is under consideration.",
    options: [
      { id: 'A', text: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`." },
      { id: 'B', text: "Convert third-party scan results into plain text emails sent to developers." },
      { id: 'C', text: "Build custom proprietary database tables to store third-party security results." },
      { id: 'D', text: "Display third-party findings only in external tool web dashboards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`. SARIF (Static Analysis Results Interchange Format) is an OASIS JSON-based standard for static analysis tools. GitHub Code Scanning ingests SARIF 2.1.0 files via the `upload-sarif` action or REST API, providing a unified pane of glass for CodeQL and third-party scanners.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["SARIF Standard", "SARIF Standard", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-409",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "SARIF Format and Third-Party SAST Integration: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates SARIF Standard to display findings from third-party security tools (e.g., Snyk, Checkmarx, SonarQube, Trivy) alongside CodeQL in GitHub Security.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Static Analysis Results Interchange Format (SARIF) for ingesting multi-vendor security findings is under consideration.",
    options: [
      { id: 'A', text: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`." },
      { id: 'B', text: "Convert third-party scan results into plain text emails sent to developers." },
      { id: 'C', text: "Build custom proprietary database tables to store third-party security results." },
      { id: 'D', text: "Display third-party findings only in external tool web dashboards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`. SARIF (Static Analysis Results Interchange Format) is an OASIS JSON-based standard for static analysis tools. GitHub Code Scanning ingests SARIF 2.1.0 files via the `upload-sarif` action or REST API, providing a unified pane of glass for CodeQL and third-party scanners.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["SARIF Standard", "SARIF Standard", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-410",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "SARIF Format and Third-Party SAST Integration: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates SARIF Standard to display findings from third-party security tools (e.g., Snyk, Checkmarx, SonarQube, Trivy) alongside CodeQL in GitHub Security.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Static Analysis Results Interchange Format (SARIF) for ingesting multi-vendor security findings is under consideration.",
    options: [
      { id: 'A', text: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`." },
      { id: 'B', text: "Convert third-party scan results into plain text emails sent to developers." },
      { id: 'C', text: "Build custom proprietary database tables to store third-party security results." },
      { id: 'D', text: "Display third-party findings only in external tool web dashboards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure third-party tools to output results in SARIF format and upload them using `github/codeql-action/upload-sarif`. SARIF (Static Analysis Results Interchange Format) is an OASIS JSON-based standard for static analysis tools. GitHub Code Scanning ingests SARIF 2.1.0 files via the `upload-sarif` action or REST API, providing a unified pane of glass for CodeQL and third-party scanners.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning",
    tags: ["SARIF Standard", "SARIF Standard", "Governance And Compliance"]
  },
  {
    id: "gh-500-411",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Compiled Languages Autobuilder and Troubleshooting: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Autobuilder to resolve a CodeQL build failure in a complex multi-module Java/Gradle project that requires custom build flags and JDK versions.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Understanding the autobuild process for C/C++, C#, Java, and Go, and resolving build failures is under consideration.",
    options: [
      { id: 'A', text: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`)." },
      { id: 'B', text: "Disable CodeQL scanning for all compiled languages and scan only plaintext documentation." },
      { id: 'C', text: "Remove the Gradle wrapper and commit uncompiled .class files directly to git." },
      { id: 'D', text: "Ignore build errors and upload empty SARIF files to satisfy compliance gates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`). CodeQL analyzes compiled languages (C/C++, C#, Java/Kotlin, Go, Swift) by observing the compiler process during extraction. While `autobuild` handles standard setups, complex enterprise projects require manual build steps in the workflow to ensure the compiler is properly instrumented.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/troubleshooting-the-codeql-workflow",
    tags: ["Autobuilder", "Autobuilder", "Enterprise Rollout"]
  },
  {
    id: "gh-500-412",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Compiled Languages Autobuilder and Troubleshooting: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Autobuilder to resolve a CodeQL build failure in a complex multi-module Java/Gradle project that requires custom build flags and JDK versions.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Understanding the autobuild process for C/C++, C#, Java, and Go, and resolving build failures is under consideration.",
    options: [
      { id: 'A', text: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`)." },
      { id: 'B', text: "Disable CodeQL scanning for all compiled languages and scan only plaintext documentation." },
      { id: 'C', text: "Remove the Gradle wrapper and commit uncompiled .class files directly to git." },
      { id: 'D', text: "Ignore build errors and upload empty SARIF files to satisfy compliance gates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`). CodeQL analyzes compiled languages (C/C++, C#, Java/Kotlin, Go, Swift) by observing the compiler process during extraction. While `autobuild` handles standard setups, complex enterprise projects require manual build steps in the workflow to ensure the compiler is properly instrumented.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/troubleshooting-the-codeql-workflow",
    tags: ["Autobuilder", "Autobuilder", "Supply Chain Defense"]
  },
  {
    id: "gh-500-413",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Compiled Languages Autobuilder and Troubleshooting: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Autobuilder to resolve a CodeQL build failure in a complex multi-module Java/Gradle project that requires custom build flags and JDK versions.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Understanding the autobuild process for C/C++, C#, Java, and Go, and resolving build failures is under consideration.",
    options: [
      { id: 'A', text: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`)." },
      { id: 'B', text: "Disable CodeQL scanning for all compiled languages and scan only plaintext documentation." },
      { id: 'C', text: "Remove the Gradle wrapper and commit uncompiled .class files directly to git." },
      { id: 'D', text: "Ignore build errors and upload empty SARIF files to satisfy compliance gates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`). CodeQL analyzes compiled languages (C/C++, C#, Java/Kotlin, Go, Swift) by observing the compiler process during extraction. While `autobuild` handles standard setups, complex enterprise projects require manual build steps in the workflow to ensure the compiler is properly instrumented.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/troubleshooting-the-codeql-workflow",
    tags: ["Autobuilder", "Autobuilder", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-414",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Compiled Languages Autobuilder and Troubleshooting: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Autobuilder to resolve a CodeQL build failure in a complex multi-module Java/Gradle project that requires custom build flags and JDK versions.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Understanding the autobuild process for C/C++, C#, Java, and Go, and resolving build failures is under consideration.",
    options: [
      { id: 'A', text: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`)." },
      { id: 'B', text: "Disable CodeQL scanning for all compiled languages and scan only plaintext documentation." },
      { id: 'C', text: "Remove the Gradle wrapper and commit uncompiled .class files directly to git." },
      { id: 'D', text: "Ignore build errors and upload empty SARIF files to satisfy compliance gates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`). CodeQL analyzes compiled languages (C/C++, C#, Java/Kotlin, Go, Swift) by observing the compiler process during extraction. While `autobuild` handles standard setups, complex enterprise projects require manual build steps in the workflow to ensure the compiler is properly instrumented.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/troubleshooting-the-codeql-workflow",
    tags: ["Autobuilder", "Autobuilder", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-415",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Compiled Languages Autobuilder and Troubleshooting: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Autobuilder to resolve a CodeQL build failure in a complex multi-module Java/Gradle project that requires custom build flags and JDK versions.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Understanding the autobuild process for C/C++, C#, Java, and Go, and resolving build failures is under consideration.",
    options: [
      { id: 'A', text: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`)." },
      { id: 'B', text: "Disable CodeQL scanning for all compiled languages and scan only plaintext documentation." },
      { id: 'C', text: "Remove the Gradle wrapper and commit uncompiled .class files directly to git." },
      { id: 'D', text: "Ignore build errors and upload empty SARIF files to satisfy compliance gates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replace the `autobuild` step in the CodeQL Advanced Setup workflow with explicit manual build commands (`./gradlew build -x test`). CodeQL analyzes compiled languages (C/C++, C#, Java/Kotlin, Go, Swift) by observing the compiler process during extraction. While `autobuild` handles standard setups, complex enterprise projects require manual build steps in the workflow to ensure the compiler is properly instrumented.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/troubleshooting-the-codeql-workflow",
    tags: ["Autobuilder", "Autobuilder", "Governance And Compliance"]
  },
  {
    id: "gh-500-416",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Pull Request Code Scanning and Branch Protection Gates: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates PR Code Scanning to ensure that any pull request introducing a new High or Critical CodeQL security finding is automatically blocked from merging.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Preventing the introduction of new vulnerabilities by scanning pull request diffs before merge is under consideration.",
    options: [
      { id: 'A', text: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging." },
      { id: 'B', text: "Allow developers to merge pull requests with known critical vulnerabilities and fix them post-release." },
      { id: 'C', text: "Run CodeQL scans only once a month against the main branch." },
      { id: 'D', text: "Disable branch protection to maximize development velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging. When triggered on `pull_request`, CodeQL performs differential scanning: it compares findings on the PR branch against the target base branch. Branch protection rules require the CodeQL check to pass, blocking merges that introduce net-new vulnerabilities.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["PR Code Scanning", "PR Code Scanning", "Enterprise Rollout"]
  },
  {
    id: "gh-500-417",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Pull Request Code Scanning and Branch Protection Gates: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates PR Code Scanning to ensure that any pull request introducing a new High or Critical CodeQL security finding is automatically blocked from merging.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Preventing the introduction of new vulnerabilities by scanning pull request diffs before merge is under consideration.",
    options: [
      { id: 'A', text: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging." },
      { id: 'B', text: "Allow developers to merge pull requests with known critical vulnerabilities and fix them post-release." },
      { id: 'C', text: "Run CodeQL scans only once a month against the main branch." },
      { id: 'D', text: "Disable branch protection to maximize development velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging. When triggered on `pull_request`, CodeQL performs differential scanning: it compares findings on the PR branch against the target base branch. Branch protection rules require the CodeQL check to pass, blocking merges that introduce net-new vulnerabilities.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["PR Code Scanning", "PR Code Scanning", "Supply Chain Defense"]
  },
  {
    id: "gh-500-418",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Pull Request Code Scanning and Branch Protection Gates: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates PR Code Scanning to ensure that any pull request introducing a new High or Critical CodeQL security finding is automatically blocked from merging.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Preventing the introduction of new vulnerabilities by scanning pull request diffs before merge is under consideration.",
    options: [
      { id: 'A', text: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging." },
      { id: 'B', text: "Allow developers to merge pull requests with known critical vulnerabilities and fix them post-release." },
      { id: 'C', text: "Run CodeQL scans only once a month against the main branch." },
      { id: 'D', text: "Disable branch protection to maximize development velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging. When triggered on `pull_request`, CodeQL performs differential scanning: it compares findings on the PR branch against the target base branch. Branch protection rules require the CodeQL check to pass, blocking merges that introduce net-new vulnerabilities.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["PR Code Scanning", "PR Code Scanning", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-419",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Pull Request Code Scanning and Branch Protection Gates: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates PR Code Scanning to ensure that any pull request introducing a new High or Critical CodeQL security finding is automatically blocked from merging.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Preventing the introduction of new vulnerabilities by scanning pull request diffs before merge is under consideration.",
    options: [
      { id: 'A', text: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging." },
      { id: 'B', text: "Allow developers to merge pull requests with known critical vulnerabilities and fix them post-release." },
      { id: 'C', text: "Run CodeQL scans only once a month against the main branch." },
      { id: 'D', text: "Disable branch protection to maximize development velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging. When triggered on `pull_request`, CodeQL performs differential scanning: it compares findings on the PR branch against the target base branch. Branch protection rules require the CodeQL check to pass, blocking merges that introduce net-new vulnerabilities.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["PR Code Scanning", "PR Code Scanning", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-420",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Pull Request Code Scanning and Branch Protection Gates: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates PR Code Scanning to ensure that any pull request introducing a new High or Critical CodeQL security finding is automatically blocked from merging.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Preventing the introduction of new vulnerabilities by scanning pull request diffs before merge is under consideration.",
    options: [
      { id: 'A', text: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging." },
      { id: 'B', text: "Allow developers to merge pull requests with known critical vulnerabilities and fix them post-release." },
      { id: 'C', text: "Run CodeQL scans only once a month against the main branch." },
      { id: 'D', text: "Disable branch protection to maximize development velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a branch protection rule or ruleset requiring the CodeQL code scanning status check to pass before merging. When triggered on `pull_request`, CodeQL performs differential scanning: it compares findings on the PR branch against the target base branch. Branch protection rules require the CodeQL check to pass, blocking merges that introduce net-new vulnerabilities.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests",
    tags: ["PR Code Scanning", "PR Code Scanning", "Governance And Compliance"]
  },
  {
    id: "gh-500-421",
    difficulty: "hard",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Alert Triage, Dismissal, and Auditing: Enterprise Rollout",
    scenario: "An enterprise application security team is deploying GitHub Advanced Security (GHAS) across hundreds of repositories to establish automated vulnerability management and compliance guardrails. The AppSec engineer evaluates Alert Triage to dismiss a CodeQL alert on an intentional test mock script while maintaining an auditable record of the decision.",
    question: "Which architectural approach or GHAS configuration satisfies these enterprise security rollout objectives? Triage workflows: false positive, won't fix, used in tests, and dismissal justification tracking is under consideration.",
    options: [
      { id: 'A', text: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment." },
      { id: 'B', text: "Delete the source code file from git to make the alert disappear." },
      { id: 'C', text: "Dismiss all enterprise alerts as `False positive` without reviewing the code." },
      { id: 'D', text: "Modify CodeQL core libraries to suppress all warning messages globally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment. When an alert is non-exploitable or intentional, authorized developers dismiss it with a structured reason: `False positive`, `Won't fix`, or `Used in tests`. Dismissals require comment justifications, are logged in the audit trail, and can be reopened if conditions change.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts",
    tags: ["Alert Triage", "Alert Triage", "Enterprise Rollout"]
  },
  {
    id: "gh-500-422",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Alert Triage, Dismissal, and Auditing: Supply Chain Defense",
    scenario: "A devsecops engineering team is securing the software supply chain against malicious open-source packages, known CVEs, and license compliance violations across build pipelines. The AppSec engineer evaluates Alert Triage to dismiss a CodeQL alert on an intentional test mock script while maintaining an auditable record of the decision.",
    question: "Which Dependabot practice or supply chain security configuration defends the software lifecycle effectively? Triage workflows: false positive, won't fix, used in tests, and dismissal justification tracking is under consideration.",
    options: [
      { id: 'A', text: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment." },
      { id: 'B', text: "Delete the source code file from git to make the alert disappear." },
      { id: 'C', text: "Dismiss all enterprise alerts as `False positive` without reviewing the code." },
      { id: 'D', text: "Modify CodeQL core libraries to suppress all warning messages globally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment. When an alert is non-exploitable or intentional, authorized developers dismiss it with a structured reason: `False positive`, `Won't fix`, or `Used in tests`. Dismissals require comment justifications, are logged in the audit trail, and can be reopened if conditions change.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts",
    tags: ["Alert Triage", "Alert Triage", "Supply Chain Defense"]
  },
  {
    id: "gh-500-423",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Alert Triage, Dismissal, and Auditing: Secret Leak Prevention",
    scenario: "A security operations team is enforcing zero-trust credential hygiene, push protection guardrails, and automated token revocation across developer workflows. The AppSec engineer evaluates Alert Triage to dismiss a CodeQL alert on an intentional test mock script while maintaining an auditable record of the decision.",
    question: "Which secret scanning feature or remediation workflow prevents sensitive credential exposure? Triage workflows: false positive, won't fix, used in tests, and dismissal justification tracking is under consideration.",
    options: [
      { id: 'A', text: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment." },
      { id: 'B', text: "Delete the source code file from git to make the alert disappear." },
      { id: 'C', text: "Dismiss all enterprise alerts as `False positive` without reviewing the code." },
      { id: 'D', text: "Modify CodeQL core libraries to suppress all warning messages globally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment. When an alert is non-exploitable or intentional, authorized developers dismiss it with a structured reason: `False positive`, `Won't fix`, or `Used in tests`. Dismissals require comment justifications, are logged in the audit trail, and can be reopened if conditions change.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts",
    tags: ["Alert Triage", "Alert Triage", "Secret Leak Prevention"]
  },
  {
    id: "gh-500-424",
    difficulty: "easy",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Alert Triage, Dismissal, and Auditing: Static Analysis Codeql",
    scenario: "A software development group is implementing CodeQL code scanning to detect complex security flaws, taint vulnerabilities, and code quality defects early in pull requests. The AppSec engineer evaluates Alert Triage to dismiss a CodeQL alert on an intentional test mock script while maintaining an auditable record of the decision.",
    question: "Which CodeQL feature or workflow configuration enables developers to catch and fix vulnerabilities before merge? Triage workflows: false positive, won't fix, used in tests, and dismissal justification tracking is under consideration.",
    options: [
      { id: 'A', text: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment." },
      { id: 'B', text: "Delete the source code file from git to make the alert disappear." },
      { id: 'C', text: "Dismiss all enterprise alerts as `False positive` without reviewing the code." },
      { id: 'D', text: "Modify CodeQL core libraries to suppress all warning messages globally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment. When an alert is non-exploitable or intentional, authorized developers dismiss it with a structured reason: `False positive`, `Won't fix`, or `Used in tests`. Dismissals require comment justifications, are logged in the audit trail, and can be reopened if conditions change.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts",
    tags: ["Alert Triage", "Alert Triage", "Static Analysis Codeql"]
  },
  {
    id: "gh-500-425",
    difficulty: "medium",
    certId: "github-ghas",
    domainId: "d3",
    domainName: "Code Scanning & CodeQL Analysis",
    title: "Code Scanning Alert Triage, Dismissal, and Auditing: Governance And Compliance",
    scenario: "A corporate compliance officer requires comprehensive audit log streaming, repository ruleset enforcement, and centralized visibility into security posture and remediation trends. The AppSec engineer evaluates Alert Triage to dismiss a CodeQL alert on an intentional test mock script while maintaining an auditable record of the decision.",
    question: "Which governance policy or GHAS enterprise feature guarantees continuous regulatory compliance? Triage workflows: false positive, won't fix, used in tests, and dismissal justification tracking is under consideration.",
    options: [
      { id: 'A', text: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment." },
      { id: 'B', text: "Delete the source code file from git to make the alert disappear." },
      { id: 'C', text: "Dismiss all enterprise alerts as `False positive` without reviewing the code." },
      { id: 'D', text: "Modify CodeQL core libraries to suppress all warning messages globally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dismiss the alert in the GitHub UI, selecting `Used in tests` as the reason and adding an explanatory comment. When an alert is non-exploitable or intentional, authorized developers dismiss it with a structured reason: `False positive`, `Won't fix`, or `Used in tests`. Dismissals require comment justifications, are logged in the audit trail, and can be reopened if conditions change.",
    referenceUrl: "https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts",
    tags: ["Alert Triage", "Alert Triage", "Governance And Compliance"]
  }
];

export default GITHUB_GHAS_QUESTIONS_17;
