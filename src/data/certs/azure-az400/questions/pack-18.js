export const AZURE_AZ400_QUESTIONS_18 = [
  {
    id: "azure-az400-426",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Rollback Automation to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Automating rollback to previous successful releases upon deployment health check failures is under consideration.",
    options: [
      { id: 'A', text: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact." },
      { id: 'B', text: "Leave the broken application in production while developers write an emergency patch." },
      { id: 'C', text: "Instruct customer support to advise users to clear their browser caches." },
      { id: 'D', text: "Terminate the application servers and delete all DNS records." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation", "Rollback Strategies", "Dr Failover"]
  },
  {
    id: "azure-az400-427",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Rollback Automation to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Automating rollback to previous successful releases upon deployment health check failures is under consideration.",
    options: [
      { id: 'A', text: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact." },
      { id: 'B', text: "Leave the broken application in production while developers write an emergency patch." },
      { id: 'C', text: "Instruct customer support to advise users to clear their browser caches." },
      { id: 'D', text: "Terminate the application servers and delete all DNS records." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation", "Rollback Strategies", "High Load Scale"]
  },
  {
    id: "azure-az400-428",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Rollback Automation to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Automating rollback to previous successful releases upon deployment health check failures is under consideration.",
    options: [
      { id: 'A', text: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact." },
      { id: 'B', text: "Leave the broken application in production while developers write an emergency patch." },
      { id: 'C', text: "Instruct customer support to advise users to clear their browser caches." },
      { id: 'D', text: "Terminate the application servers and delete all DNS records." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation", "Rollback Strategies", "Security Compliance"]
  },
  {
    id: "azure-az400-429",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Rollback Automation to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Automating rollback to previous successful releases upon deployment health check failures is under consideration.",
    options: [
      { id: 'A', text: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact." },
      { id: 'B', text: "Leave the broken application in production while developers write an emergency patch." },
      { id: 'C', text: "Instruct customer support to advise users to clear their browser caches." },
      { id: 'D', text: "Terminate the application servers and delete all DNS records." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation", "Rollback Strategies", "Hybrid Migration"]
  },
  {
    id: "azure-az400-430",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Rollback Strategies and Deployment Redo: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Rollback Automation to ensure an automated pipeline automatically reverts an Azure App Service deployment to the previous healthy build if post-deployment smoke tests fail.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Automating rollback to previous successful releases upon deployment health check failures is under consideration.",
    options: [
      { id: 'A', text: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact." },
      { id: 'B', text: "Leave the broken application in production while developers write an emergency patch." },
      { id: 'C', text: "Instruct customer support to advise users to clear their browser caches." },
      { id: 'D', text: "Terminate the application servers and delete all DNS records." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a post-deployment gate or step that checks application health endpoints; if smoke tests fail, execute a slot swap rollback or deploy the previous artifact. Automated rollback strategies monitor application health immediately following release. In App Service setups, failing post-deployment verification immediately triggers a reverse slot swap, restoring the proven prior release in seconds while teams investigate offline.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/release/approvals/gates",
    tags: ["Rollback Automation", "Rollback Strategies", "Resilience Failure"]
  },
  {
    id: "azure-az400-431",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates SAST to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Integrating SonarQube quality gates and code analysis into pull request validation is under consideration.",
    options: [
      { id: 'A', text: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check." },
      { id: 'B', text: "Manually review hundreds of lines of code by sight looking for SQL injection flaws." },
      { id: 'C', text: "Run static analysis only once a year during external audit reviews." },
      { id: 'D', text: "Disable code scanning to accelerate pull request merging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST", "SonarQube SAST", "Dr Failover"]
  },
  {
    id: "azure-az400-432",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates SAST to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Integrating SonarQube quality gates and code analysis into pull request validation is under consideration.",
    options: [
      { id: 'A', text: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check." },
      { id: 'B', text: "Manually review hundreds of lines of code by sight looking for SQL injection flaws." },
      { id: 'C', text: "Run static analysis only once a year during external audit reviews." },
      { id: 'D', text: "Disable code scanning to accelerate pull request merging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST", "SonarQube SAST", "High Load Scale"]
  },
  {
    id: "azure-az400-433",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates SAST to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Integrating SonarQube quality gates and code analysis into pull request validation is under consideration.",
    options: [
      { id: 'A', text: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check." },
      { id: 'B', text: "Manually review hundreds of lines of code by sight looking for SQL injection flaws." },
      { id: 'C', text: "Run static analysis only once a year during external audit reviews." },
      { id: 'D', text: "Disable code scanning to accelerate pull request merging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST", "SonarQube SAST", "Security Compliance"]
  },
  {
    id: "azure-az400-434",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates SAST to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Integrating SonarQube quality gates and code analysis into pull request validation is under consideration.",
    options: [
      { id: 'A', text: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check." },
      { id: 'B', text: "Manually review hundreds of lines of code by sight looking for SQL injection flaws." },
      { id: 'C', text: "Run static analysis only once a year during external audit reviews." },
      { id: 'D', text: "Disable code scanning to accelerate pull request merging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST", "SonarQube SAST", "Hybrid Migration"]
  },
  {
    id: "azure-az400-435",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Static Application Security Testing (SAST) with SonarQube / SonarCloud: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates SAST to enforce code quality standards and block pull requests that introduce new security vulnerabilities or high technical debt.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Integrating SonarQube quality gates and code analysis into pull request validation is under consideration.",
    options: [
      { id: 'A', text: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check." },
      { id: 'B', text: "Manually review hundreds of lines of code by sight looking for SQL injection flaws." },
      { id: 'C', text: "Run static analysis only once a year during external audit reviews." },
      { id: 'D', text: "Disable code scanning to accelerate pull request merging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate SonarCloud or SonarQube tasks (`SonarCloudPrepare`, `SonarCloudAnalyze`, `SonarCloudPublish`) and configure a Quality Gate check. Static Application Security Testing (SAST) tools like SonarQube analyze source code for bugs, security vulnerabilities, and code smells. Binding SonarQube Quality Gates to Azure Repos pull request policies blocks merging when newly introduced code violates security thresholds.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/dotnet-core#analyze-code-with-sonarqube",
    tags: ["SAST", "SonarQube SAST", "Resilience Failure"]
  },
  {
    id: "azure-az400-436",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates SCA to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Scanning open-source packages for known CVEs using GitHub Advanced Security for Azure DevOps is under consideration.",
    options: [
      { id: 'A', text: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend." },
      { id: 'B', text: "Assume open-source packages from public package managers are always free of vulnerabilities." },
      { id: 'C', text: "Rely on developers manually checking CVE databases before importing libraries." },
      { id: 'D', text: "Prohibit using all third-party and open-source software libraries across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA", "Dependency Scanning", "Dr Failover"]
  },
  {
    id: "azure-az400-437",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates SCA to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Scanning open-source packages for known CVEs using GitHub Advanced Security for Azure DevOps is under consideration.",
    options: [
      { id: 'A', text: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend." },
      { id: 'B', text: "Assume open-source packages from public package managers are always free of vulnerabilities." },
      { id: 'C', text: "Rely on developers manually checking CVE databases before importing libraries." },
      { id: 'D', text: "Prohibit using all third-party and open-source software libraries across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA", "Dependency Scanning", "High Load Scale"]
  },
  {
    id: "azure-az400-438",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates SCA to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Scanning open-source packages for known CVEs using GitHub Advanced Security for Azure DevOps is under consideration.",
    options: [
      { id: 'A', text: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend." },
      { id: 'B', text: "Assume open-source packages from public package managers are always free of vulnerabilities." },
      { id: 'C', text: "Rely on developers manually checking CVE databases before importing libraries." },
      { id: 'D', text: "Prohibit using all third-party and open-source software libraries across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA", "Dependency Scanning", "Security Compliance"]
  },
  {
    id: "azure-az400-439",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates SCA to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Scanning open-source packages for known CVEs using GitHub Advanced Security for Azure DevOps is under consideration.",
    options: [
      { id: 'A', text: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend." },
      { id: 'B', text: "Assume open-source packages from public package managers are always free of vulnerabilities." },
      { id: 'C', text: "Rely on developers manually checking CVE databases before importing libraries." },
      { id: 'D', text: "Prohibit using all third-party and open-source software libraries across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA", "Dependency Scanning", "Hybrid Migration"]
  },
  {
    id: "azure-az400-440",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Dependency Scanning and Software Composition Analysis (SCA): Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates SCA to identify known vulnerabilities and outdated dependencies in third-party npm and NuGet packages in an Azure DevOps repository.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Scanning open-source packages for known CVEs using GitHub Advanced Security for Azure DevOps is under consideration.",
    options: [
      { id: 'A', text: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend." },
      { id: 'B', text: "Assume open-source packages from public package managers are always free of vulnerabilities." },
      { id: 'C', text: "Rely on developers manually checking CVE databases before importing libraries." },
      { id: 'D', text: "Prohibit using all third-party and open-source software libraries across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Dependency Scanning via GitHub Advanced Security for Azure DevOps (GHAzDO) or integrate tools like Snyk / Mend. Software Composition Analysis (SCA) scans project dependency manifests (e.g., `package.json`, `.csproj`) against comprehensive vulnerability databases. GitHub Advanced Security for Azure DevOps alerts on vulnerable dependencies and provides automated remediation guidance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/security/github-advanced-security-dependency-scanning",
    tags: ["SCA", "Dependency Scanning", "Resilience Failure"]
  },
  {
    id: "azure-az400-441",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Secret Scanning to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Blocking accidental credential pushes to Git repositories with Secret Scanning push protection is under consideration.",
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
    tags: ["Secret Scanning", "Secret Scanning", "Dr Failover"]
  },
  {
    id: "azure-az400-442",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Secret Scanning to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Blocking accidental credential pushes to Git repositories with Secret Scanning push protection is under consideration.",
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
    tags: ["Secret Scanning", "Secret Scanning", "High Load Scale"]
  },
  {
    id: "azure-az400-443",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Secret Scanning to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Blocking accidental credential pushes to Git repositories with Secret Scanning push protection is under consideration.",
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
    tags: ["Secret Scanning", "Secret Scanning", "Security Compliance"]
  },
  {
    id: "azure-az400-444",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Secret Scanning to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Blocking accidental credential pushes to Git repositories with Secret Scanning push protection is under consideration.",
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
    tags: ["Secret Scanning", "Secret Scanning", "Hybrid Migration"]
  },
  {
    id: "azure-az400-445",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Secret Scanning and Push Protection: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Secret Scanning to prevent developers from accidentally committing Azure connection strings, API keys, or private SSH keys into Azure Repos.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Blocking accidental credential pushes to Git repositories with Secret Scanning push protection is under consideration.",
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
    tags: ["Secret Scanning", "Secret Scanning", "Resilience Failure"]
  },
  {
    id: "azure-az400-446",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Container Security to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Vulnerability scanning of container images stored in Azure Container Registry (ACR) is under consideration.",
    options: [
      { id: 'A', text: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry." },
      { id: 'B', text: "Rely on developer self-attestation that container images are safe." },
      { id: 'C', text: "Scan containers only after they have run in production for twelve months." },
      { id: 'D', text: "Disable container vulnerability scanning to reduce registry storage costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security", "ACR Defender", "Dr Failover"]
  },
  {
    id: "azure-az400-447",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Container Security to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Vulnerability scanning of container images stored in Azure Container Registry (ACR) is under consideration.",
    options: [
      { id: 'A', text: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry." },
      { id: 'B', text: "Rely on developer self-attestation that container images are safe." },
      { id: 'C', text: "Scan containers only after they have run in production for twelve months." },
      { id: 'D', text: "Disable container vulnerability scanning to reduce registry storage costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security", "ACR Defender", "High Load Scale"]
  },
  {
    id: "azure-az400-448",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Container Security to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Vulnerability scanning of container images stored in Azure Container Registry (ACR) is under consideration.",
    options: [
      { id: 'A', text: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry." },
      { id: 'B', text: "Rely on developer self-attestation that container images are safe." },
      { id: 'C', text: "Scan containers only after they have run in production for twelve months." },
      { id: 'D', text: "Disable container vulnerability scanning to reduce registry storage costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security", "ACR Defender", "Security Compliance"]
  },
  {
    id: "azure-az400-449",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Container Security to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Vulnerability scanning of container images stored in Azure Container Registry (ACR) is under consideration.",
    options: [
      { id: 'A', text: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry." },
      { id: 'B', text: "Rely on developer self-attestation that container images are safe." },
      { id: 'C', text: "Scan containers only after they have run in production for twelve months." },
      { id: 'D', text: "Disable container vulnerability scanning to reduce registry storage costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security", "ACR Defender", "Hybrid Migration"]
  },
  {
    id: "azure-az400-450",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d4",
    domainName: "Develop a security and compliance plan",
    title: "Container Vulnerability Scanning with Microsoft Defender for Cloud: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Container Security to ensure container images uploaded to Azure Container Registry (ACR) are automatically scanned for OS and package vulnerabilities.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Vulnerability scanning of container images stored in Azure Container Registry (ACR) is under consideration.",
    options: [
      { id: 'A', text: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry." },
      { id: 'B', text: "Rely on developer self-attestation that container images are safe." },
      { id: 'C', text: "Scan containers only after they have run in production for twelve months." },
      { id: 'D', text: "Disable container vulnerability scanning to reduce registry storage costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Microsoft Defender for Container Registries on the target Azure Container Registry. Microsoft Defender for Container Registries continuously scans images pushed to Azure Container Registry (ACR). It provides detailed vulnerability assessments, severity scores, and actionable remediation instructions, alerting security teams before vulnerable images are scheduled to run in AKS.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-containers-usage#vulnerability-assessment-for-images-in-acr",
    tags: ["Container Security", "ACR Defender", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_18;
