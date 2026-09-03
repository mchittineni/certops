export const AZURE_AZ400_QUESTIONS_8 = [
  {
    id: "azure-az400-176",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Vulnerability Scanning with Microsoft Defender for DevOps",
    scenario: "A software security policy requires continuous, automated vulnerability scanning of open-source libraries and container images integrated directly into pull request workflows in Azure DevOps, alerting developers to critical CVEs before merging.",
    question: "Which integrated security solution fulfills this requirement?",
    options: [
      { id: 'A', text: "Microsoft Defender for DevOps (or GitHub Advanced Security for Azure DevOps)" },
      { id: 'B', text: "Reviewing CVE lists manually on government advisory websites" },
      { id: 'C', text: "Running Windows Defender locally on developer workstations" },
      { id: 'D', text: "Azure Network Watcher packet capturing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft Defender for DevOps (and GitHub Advanced Security for Azure DevOps) natively integrates security posture management and dependency analysis into Azure DevOps. It scans repositories for known vulnerabilities, exposed secrets, and infrastructure-as-code misconfigurations directly within pull request checks.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-devops-introduction",
    tags: ["Security", "Defender for DevOps", "Vulnerability Scanning", "Compliance"]
  },
  {
    id: "azure-az400-177",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Pipeline Secret Scanning and Prevention",
    scenario: "A security audit discovers that developers occasionally commit hardcoded API keys, connection strings, and private certificates into Azure Repos Git branches.",
    question: "What is the most effective way to prevent secrets from ever entering the codebase?",
    options: [
      { id: 'A', text: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps" },
      { id: 'B', text: "Rely on weekly static code analysis reports run after deployments" },
      { id: 'C', text: "Add a .gitignore rule containing the word 'password'" },
      { id: 'D', text: "Write an email reminder to all engineers asking them to review commits" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Secret Scanning with Push Protection scans Git pushes in real time. If a commit contains a recognized secret pattern (such as an Azure storage account key or API token), the push is immediately rejected at the server level, preventing the secret from ever entering repository history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/secret-scanning-overview",
    tags: ["Security", "Secret Scanning", "Push Protection", "Azure Repos"]
  },
  {
    id: "azure-az400-178",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #1",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #1?",
    options: [
      { id: 'A', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'B', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'C', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'D', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-179",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #2",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #2?",
    options: [
      { id: 'A', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'B', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'C', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'D', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-180",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #3",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #3?",
    options: [
      { id: 'A', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'B', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'C', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'D', text: "Bypassing branch policies for emergency releases without post-audit review" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-181",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #4",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #4?",
    options: [
      { id: 'A', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'B', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'C', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'D', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-182",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #5",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #5?",
    options: [
      { id: 'A', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'B', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'C', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'D', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-183",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #6",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #6?",
    options: [
      { id: 'A', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'B', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'C', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'D', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-184",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #7",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #7?",
    options: [
      { id: 'A', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'B', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'C', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'D', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-185",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #8",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #8?",
    options: [
      { id: 'A', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'B', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'C', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'D', text: "Bypassing branch policies for emergency releases without post-audit review" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-186",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #9",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #9?",
    options: [
      { id: 'A', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'B', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'C', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'D', text: "Bypassing branch policies for emergency releases without post-audit review" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-187",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #10",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #10?",
    options: [
      { id: 'A', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'B', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'C', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'D', text: "Bypassing branch policies for emergency releases without post-audit review" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-188",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #11",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #11?",
    options: [
      { id: 'A', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'B', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'C', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'D', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-189",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #12",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #12?",
    options: [
      { id: 'A', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'B', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'C', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'D', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-190",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #13",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #13?",
    options: [
      { id: 'A', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'B', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'C', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'D', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-191",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #14",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #14?",
    options: [
      { id: 'A', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'B', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'C', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'D', text: "Bypassing branch policies for emergency releases without post-audit review" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-192",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #15",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #15?",
    options: [
      { id: 'A', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'B', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'C', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'D', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-193",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #16",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #16?",
    options: [
      { id: 'A', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'B', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'C', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'D', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-194",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #17",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #17?",
    options: [
      { id: 'A', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'B', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'C', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'D', text: "Bypassing branch policies for emergency releases without post-audit review" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-195",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #18",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #18?",
    options: [
      { id: 'A', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'B', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'C', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'D', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-196",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #19",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #19?",
    options: [
      { id: 'A', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'B', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'C', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'D', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-197",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #20",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #20?",
    options: [
      { id: 'A', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'B', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'C', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'D', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-198",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #21",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #21?",
    options: [
      { id: 'A', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'B', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'C', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" },
      { id: 'D', text: "Bypassing branch policies for emergency releases without post-audit review" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-199",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #22",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #22?",
    options: [
      { id: 'A', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'B', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'C', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'D', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  },
  {
    id: "azure-az400-200",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Security and Compliance Scenario #23",
    scenario: "A DevSecOps engineer is implementing automated security gates, license compliance scanning, and static code analysis (SAST) in CI/CD pipelines.",
    question: "Which security architecture best satisfies compliance requirement #23?",
    options: [
      { id: 'A', text: "Granting wildcard contributor permissions across all corporate repositories to all developers" },
      { id: 'B', text: "Integrating static code analysis quality gates with SonarQube, automated dependency scanning, and Key Vault secret references" },
      { id: 'C', text: "Bypassing branch policies for emergency releases without post-audit review" },
      { id: 'D', text: "Disabling all pipeline security scanning tasks to avoid failing release builds" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Developing a security and compliance plan in Azure DevOps requires shifting security left by embedding SAST, DAST, secret scanning, and automated quality gates into early pipeline stages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/user-guide/devops-security",
    tags: ["DevSecOps", "Security", "Compliance"]
  }
];

export default AZURE_AZ400_QUESTIONS_8;
