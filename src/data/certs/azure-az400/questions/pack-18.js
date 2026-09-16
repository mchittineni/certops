export const AZURE_AZ400_QUESTIONS_18 = [
  {
    id: "azure-az400-426",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Add a post-deployment approval so a release manager can trigger the redeployment by hand if needed." },
      { id: 'B', text: "Add a post-deployment gate that checks the health endpoint and swaps the slot back when it fails." },
      { id: 'C', text: "Add a pre-deployment gate that runs the smoke tests against the staging slot before the swap." },
      { id: 'D', text: "Add a deployment strategy of `rolling` with `maxUnavailable: 1` so failures stop the rollout early." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation","Rollback Strategies","Dr Failover"]
  },
  {
    id: "azure-az400-427",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Add a post-deployment approval so a release manager can trigger the redeployment by hand if needed." },
      { id: 'B', text: "Add a deployment strategy of `rolling` with `maxUnavailable: 1` so failures stop the rollout early." },
      { id: 'C', text: "Add a post-deployment gate that checks the health endpoint and swaps the slot back when it fails." },
      { id: 'D', text: "Add a pre-deployment gate that runs the smoke tests against the staging slot before the swap." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation","Rollback Strategies","High Load Scale"]
  },
  {
    id: "azure-az400-428",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Add a post-deployment gate that checks the health endpoint and swaps the slot back when it fails." },
      { id: 'B', text: "Add a deployment strategy of `rolling` with `maxUnavailable: 1` so failures stop the rollout early." },
      { id: 'C', text: "Add a pre-deployment gate that runs the smoke tests against the staging slot before the swap." },
      { id: 'D', text: "Add a post-deployment approval so a release manager can trigger the redeployment by hand if needed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation","Rollback Strategies","Security Compliance"]
  },
  {
    id: "azure-az400-429",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Add a pre-deployment gate that runs the smoke tests against the staging slot before the swap." },
      { id: 'B', text: "Add a post-deployment approval so a release manager can trigger the redeployment by hand if needed." },
      { id: 'C', text: "Add a post-deployment gate that checks the health endpoint and swaps the slot back when it fails." },
      { id: 'D', text: "Add a deployment strategy of `rolling` with `maxUnavailable: 1` so failures stop the rollout early." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation","Rollback Strategies","Hybrid Migration"]
  },
  {
    id: "azure-az400-430",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add a pre-deployment gate that runs the smoke tests against the staging slot before the swap." },
      { id: 'B', text: "Add a deployment strategy of `rolling` with `maxUnavailable: 1` so failures stop the rollout early." },
      { id: 'C', text: "Add a post-deployment approval so a release manager can trigger the redeployment by hand if needed." },
      { id: 'D', text: "Add a post-deployment gate that checks the health endpoint and swaps the slot back when it fails." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation","Rollback Strategies","Resilience Failure"]
  },
  {
    id: "azure-az400-431",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Add the SonarCloud prepare, analyze and publish tasks, and require the Quality Gate on the PR." },
      { id: 'B', text: "Add a Microsoft Security DevOps task and publish its SARIF results as a build artifact." },
      { id: 'C', text: "Add a dependency scan task that fails the build when a package has a known high-severity CVE." },
      { id: 'D', text: "Add a build validation policy that runs the unit tests and enforces an 80 percent coverage floor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST","SonarQube SAST","Dr Failover"]
  },
  {
    id: "azure-az400-432",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Add a dependency scan task that fails the build when a package has a known high-severity CVE." },
      { id: 'B', text: "Add a build validation policy that runs the unit tests and enforces an 80 percent coverage floor." },
      { id: 'C', text: "Add the SonarCloud prepare, analyze and publish tasks, and require the Quality Gate on the PR." },
      { id: 'D', text: "Add a Microsoft Security DevOps task and publish its SARIF results as a build artifact." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST","SonarQube SAST","High Load Scale"]
  },
  {
    id: "azure-az400-433",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Add a Microsoft Security DevOps task and publish its SARIF results as a build artifact." },
      { id: 'B', text: "Add the SonarCloud prepare, analyze and publish tasks, and require the Quality Gate on the PR." },
      { id: 'C', text: "Add a build validation policy that runs the unit tests and enforces an 80 percent coverage floor." },
      { id: 'D', text: "Add a dependency scan task that fails the build when a package has a known high-severity CVE." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST","SonarQube SAST","Security Compliance"]
  },
  {
    id: "azure-az400-434",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Add the SonarCloud prepare, analyze and publish tasks, and require the Quality Gate on the PR." },
      { id: 'B', text: "Add a Microsoft Security DevOps task and publish its SARIF results as a build artifact." },
      { id: 'C', text: "Add a dependency scan task that fails the build when a package has a known high-severity CVE." },
      { id: 'D', text: "Add a build validation policy that runs the unit tests and enforces an 80 percent coverage floor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST","SonarQube SAST","Hybrid Migration"]
  },
  {
    id: "azure-az400-435",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Add the SonarCloud prepare, analyze and publish tasks, and require the Quality Gate on the PR." },
      { id: 'B', text: "Add a Microsoft Security DevOps task and publish its SARIF results as a build artifact." },
      { id: 'C', text: "Add a dependency scan task that fails the build when a package has a known high-severity CVE." },
      { id: 'D', text: "Add a build validation policy that runs the unit tests and enforces an 80 percent coverage floor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST","SonarQube SAST","Resilience Failure"]
  },
  {
    id: "azure-az400-436",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Enable secret scanning and code scanning in the repository's advanced security settings." },
      { id: 'B', text: "Enable dependency scanning through GitHub Advanced Security for Azure DevOps, or Snyk." },
      { id: 'C', text: "Enable an Azure Artifacts upstream source so every package is pulled through one audited feed." },
      { id: 'D', text: "Enable a build validation policy that fails when `npm audit` reports any advisory at all." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA","Dependency Scanning","Dr Failover"]
  },
  {
    id: "azure-az400-437",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Enable secret scanning and code scanning in the repository's advanced security settings." },
      { id: 'B', text: "Enable dependency scanning through GitHub Advanced Security for Azure DevOps, or Snyk." },
      { id: 'C', text: "Enable an Azure Artifacts upstream source so every package is pulled through one audited feed." },
      { id: 'D', text: "Enable a build validation policy that fails when `npm audit` reports any advisory at all." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA","Dependency Scanning","High Load Scale"]
  },
  {
    id: "azure-az400-438",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Enable an Azure Artifacts upstream source so every package is pulled through one audited feed." },
      { id: 'B', text: "Enable secret scanning and code scanning in the repository's advanced security settings." },
      { id: 'C', text: "Enable dependency scanning through GitHub Advanced Security for Azure DevOps, or Snyk." },
      { id: 'D', text: "Enable a build validation policy that fails when `npm audit` reports any advisory at all." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA","Dependency Scanning","Security Compliance"]
  },
  {
    id: "azure-az400-439",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Enable dependency scanning through GitHub Advanced Security for Azure DevOps, or Snyk." },
      { id: 'B', text: "Enable secret scanning and code scanning in the repository's advanced security settings." },
      { id: 'C', text: "Enable a build validation policy that fails when `npm audit` reports any advisory at all." },
      { id: 'D', text: "Enable an Azure Artifacts upstream source so every package is pulled through one audited feed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA","Dependency Scanning","Hybrid Migration"]
  },
  {
    id: "azure-az400-440",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enable secret scanning and code scanning in the repository's advanced security settings." },
      { id: 'B', text: "Enable a build validation policy that fails when `npm audit` reports any advisory at all." },
      { id: 'C', text: "Enable dependency scanning through GitHub Advanced Security for Azure DevOps, or Snyk." },
      { id: 'D', text: "Enable an Azure Artifacts upstream source so every package is pulled through one audited feed." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA","Dependency Scanning","Resilience Failure"]
  },
  {
    id: "azure-az400-441",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Store all production credentials in plaintext files committed to source control." },
      { id: 'B', text: "Scan repositories for secrets only after code is published to public mirrors." },
      { id: 'C', text: "Send an email reminder to developers once a quarter reminding them not to commit secrets." },
      { id: 'D', text: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps. Secret Scanning with Push Protection intercepts `git push` operations in real time. It evaluates commits against patterns from dozens of credential partners (Azure, AWS, GitHub, Slack) and blocks the push immediately if a secret is detected, preventing exposure before it reaches remote history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-secret-scanning",
    tags: ["Secret Scanning","Secret Scanning","Dr Failover"]
  },
  {
    id: "azure-az400-442",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps." },
      { id: 'B', text: "Send an email reminder to developers once a quarter reminding them not to commit secrets." },
      { id: 'C', text: "Scan repositories for secrets only after code is published to public mirrors." },
      { id: 'D', text: "Store all production credentials in plaintext files committed to source control." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps. Secret Scanning with Push Protection intercepts `git push` operations in real time. It evaluates commits against patterns from dozens of credential partners (Azure, AWS, GitHub, Slack) and blocks the push immediately if a secret is detected, preventing exposure before it reaches remote history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-secret-scanning",
    tags: ["Secret Scanning","Secret Scanning","High Load Scale"]
  },
  {
    id: "azure-az400-443",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps." },
      { id: 'B', text: "Send an email reminder to developers once a quarter reminding them not to commit secrets." },
      { id: 'C', text: "Scan repositories for secrets only after code is published to public mirrors." },
      { id: 'D', text: "Store all production credentials in plaintext files committed to source control." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps. Secret Scanning with Push Protection intercepts `git push` operations in real time. It evaluates commits against patterns from dozens of credential partners (Azure, AWS, GitHub, Slack) and blocks the push immediately if a secret is detected, preventing exposure before it reaches remote history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-secret-scanning",
    tags: ["Secret Scanning","Secret Scanning","Security Compliance"]
  },
  {
    id: "azure-az400-444",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Send an email reminder to developers once a quarter reminding them not to commit secrets." },
      { id: 'B', text: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps." },
      { id: 'C', text: "Store all production credentials in plaintext files committed to source control." },
      { id: 'D', text: "Scan repositories for secrets only after code is published to public mirrors." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps. Secret Scanning with Push Protection intercepts `git push` operations in real time. It evaluates commits against patterns from dozens of credential partners (Azure, AWS, GitHub, Slack) and blocks the push immediately if a secret is detected, preventing exposure before it reaches remote history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-secret-scanning",
    tags: ["Secret Scanning","Secret Scanning","Hybrid Migration"]
  },
  {
    id: "azure-az400-445",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps." },
      { id: 'B', text: "Scan repositories for secrets only after code is published to public mirrors." },
      { id: 'C', text: "Store all production credentials in plaintext files committed to source control." },
      { id: 'D', text: "Send an email reminder to developers once a quarter reminding them not to commit secrets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Secret Scanning with Push Protection in GitHub Advanced Security for Azure DevOps. Secret Scanning with Push Protection intercepts `git push` operations in real time. It evaluates commits against patterns from dozens of credential partners (Azure, AWS, GitHub, Slack) and blocks the push immediately if a secret is detected, preventing exposure before it reaches remote history.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-secret-scanning",
    tags: ["Secret Scanning","Secret Scanning","Resilience Failure"]
  },
  {
    id: "azure-az400-446",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Enable a registry retention policy so untagged manifests are purged after seven days." },
      { id: 'B', text: "Enable ACR content trust so only signed images can be pushed to the registry." },
      { id: 'C', text: "Enable an ACR webhook that posts each push to a pipeline running a Trivy scan." },
      { id: 'D', text: "Enable Microsoft Defender for Containers on the subscription holding the registry." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security","ACR Defender","Dr Failover"]
  },
  {
    id: "azure-az400-447",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Enable Microsoft Defender for Containers on the subscription holding the registry." },
      { id: 'B', text: "Enable an ACR webhook that posts each push to a pipeline running a Trivy scan." },
      { id: 'C', text: "Enable ACR content trust so only signed images can be pushed to the registry." },
      { id: 'D', text: "Enable a registry retention policy so untagged manifests are purged after seven days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security","ACR Defender","High Load Scale"]
  },
  {
    id: "azure-az400-448",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Enable ACR content trust so only signed images can be pushed to the registry." },
      { id: 'B', text: "Enable an ACR webhook that posts each push to a pipeline running a Trivy scan." },
      { id: 'C', text: "Enable a registry retention policy so untagged manifests are purged after seven days." },
      { id: 'D', text: "Enable Microsoft Defender for Containers on the subscription holding the registry." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security","ACR Defender","Security Compliance"]
  },
  {
    id: "azure-az400-449",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Enable ACR content trust so only signed images can be pushed to the registry." },
      { id: 'B', text: "Enable a registry retention policy so untagged manifests are purged after seven days." },
      { id: 'C', text: "Enable Microsoft Defender for Containers on the subscription holding the registry." },
      { id: 'D', text: "Enable an ACR webhook that posts each push to a pipeline running a Trivy scan." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security","ACR Defender","Hybrid Migration"]
  },
  {
    id: "azure-az400-450",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Enable Microsoft Defender for Containers on the subscription holding the registry." },
      { id: 'B', text: "Enable ACR content trust so only signed images can be pushed to the registry." },
      { id: 'C', text: "Enable a registry retention policy so untagged manifests are purged after seven days." },
      { id: 'D', text: "Enable an ACR webhook that posts each push to a pipeline running a Trivy scan." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security","ACR Defender","Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_18;
