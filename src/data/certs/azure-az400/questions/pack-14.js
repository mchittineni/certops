export const AZURE_AZ400_QUESTIONS_14 = [
  {
    id: "azure-az400-326",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates InnerSource & Forking to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Cross-project collaboration using repository forks and pull requests is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to email zipped code folders to the core team." },
      { id: 'B', text: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests." },
      { id: 'C', text: "Grant full contributor write permissions on the central repository to all enterprise employees." },
      { id: 'D', text: "Keep the core repository strictly private and prohibit contributions from other teams." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking", "Forking Workflows", "Dr Failover"]
  },
  {
    id: "azure-az400-327",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates InnerSource & Forking to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Cross-project collaboration using repository forks and pull requests is under consideration.",
    options: [
      { id: 'A', text: "Keep the core repository strictly private and prohibit contributions from other teams." },
      { id: 'B', text: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests." },
      { id: 'C', text: "Grant full contributor write permissions on the central repository to all enterprise employees." },
      { id: 'D', text: "Instruct developers to email zipped code folders to the core team." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking", "Forking Workflows", "High Load Scale"]
  },
  {
    id: "azure-az400-328",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates InnerSource & Forking to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Cross-project collaboration using repository forks and pull requests is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to email zipped code folders to the core team." },
      { id: 'B', text: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests." },
      { id: 'C', text: "Grant full contributor write permissions on the central repository to all enterprise employees." },
      { id: 'D', text: "Keep the core repository strictly private and prohibit contributions from other teams." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking", "Forking Workflows", "Security Compliance"]
  },
  {
    id: "azure-az400-329",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates InnerSource & Forking to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Cross-project collaboration using repository forks and pull requests is under consideration.",
    options: [
      { id: 'A', text: "Keep the core repository strictly private and prohibit contributions from other teams." },
      { id: 'B', text: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests." },
      { id: 'C', text: "Instruct developers to email zipped code folders to the core team." },
      { id: 'D', text: "Grant full contributor write permissions on the central repository to all enterprise employees." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking", "Forking Workflows", "Hybrid Migration"]
  },
  {
    id: "azure-az400-330",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates InnerSource & Forking to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Cross-project collaboration using repository forks and pull requests is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to email zipped code folders to the core team." },
      { id: 'B', text: "Grant full contributor write permissions on the central repository to all enterprise employees." },
      { id: 'C', text: "Keep the core repository strictly private and prohibit contributions from other teams." },
      { id: 'D', text: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking", "Forking Workflows", "Resilience Failure"]
  },
  {
    id: "azure-az400-331",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Pipeline Architecture to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Structuring stages, jobs, and steps in declarative YAML pipelines is under consideration.",
    options: [
      { id: 'A', text: "Put all build and deployment tasks into a single monolithic script with no stages." },
      { id: 'B', text: "Avoid using YAML and write batch files executed locally on developer machines." },
      { id: 'C', text: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages." },
      { id: 'D', text: "Create three completely disconnected Classic release pipelines in the web UI." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture", "YAML Multi-Stage", "Dr Failover"]
  },
  {
    id: "azure-az400-332",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Pipeline Architecture to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Structuring stages, jobs, and steps in declarative YAML pipelines is under consideration.",
    options: [
      { id: 'A', text: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages." },
      { id: 'B', text: "Avoid using YAML and write batch files executed locally on developer machines." },
      { id: 'C', text: "Create three completely disconnected Classic release pipelines in the web UI." },
      { id: 'D', text: "Put all build and deployment tasks into a single monolithic script with no stages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture", "YAML Multi-Stage", "High Load Scale"]
  },
  {
    id: "azure-az400-333",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Pipeline Architecture to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Structuring stages, jobs, and steps in declarative YAML pipelines is under consideration.",
    options: [
      { id: 'A', text: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages." },
      { id: 'B', text: "Put all build and deployment tasks into a single monolithic script with no stages." },
      { id: 'C', text: "Create three completely disconnected Classic release pipelines in the web UI." },
      { id: 'D', text: "Avoid using YAML and write batch files executed locally on developer machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture", "YAML Multi-Stage", "Security Compliance"]
  },
  {
    id: "azure-az400-334",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Pipeline Architecture to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Structuring stages, jobs, and steps in declarative YAML pipelines is under consideration.",
    options: [
      { id: 'A', text: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages." },
      { id: 'B', text: "Put all build and deployment tasks into a single monolithic script with no stages." },
      { id: 'C', text: "Create three completely disconnected Classic release pipelines in the web UI." },
      { id: 'D', text: "Avoid using YAML and write batch files executed locally on developer machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture", "YAML Multi-Stage", "Hybrid Migration"]
  },
  {
    id: "azure-az400-335",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Pipeline Architecture to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Structuring stages, jobs, and steps in declarative YAML pipelines is under consideration.",
    options: [
      { id: 'A', text: "Create three completely disconnected Classic release pipelines in the web UI." },
      { id: 'B', text: "Avoid using YAML and write batch files executed locally on developer machines." },
      { id: 'C', text: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages." },
      { id: 'D', text: "Put all build and deployment tasks into a single monolithic script with no stages." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture", "YAML Multi-Stage", "Resilience Failure"]
  },
  {
    id: "azure-az400-336",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Agent Architecture to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Selecting Microsoft-hosted vs self-hosted agent pools based on network and tooling is under consideration.",
    options: [
      { id: 'A', text: "Perform builds manually on an engineer's desktop without build agents." },
      { id: 'B', text: "Expose on-premises databases directly over the public internet without firewalls." },
      { id: 'C', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." },
      { id: 'D', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture", "Agent Architecture", "Dr Failover"]
  },
  {
    id: "azure-az400-337",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Agent Architecture to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Selecting Microsoft-hosted vs self-hosted agent pools based on network and tooling is under consideration.",
    options: [
      { id: 'A', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." },
      { id: 'B', text: "Expose on-premises databases directly over the public internet without firewalls." },
      { id: 'C', text: "Perform builds manually on an engineer's desktop without build agents." },
      { id: 'D', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture", "Agent Architecture", "High Load Scale"]
  },
  {
    id: "azure-az400-338",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Agent Architecture to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Selecting Microsoft-hosted vs self-hosted agent pools based on network and tooling is under consideration.",
    options: [
      { id: 'A', text: "Perform builds manually on an engineer's desktop without build agents." },
      { id: 'B', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." },
      { id: 'C', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." },
      { id: 'D', text: "Expose on-premises databases directly over the public internet without firewalls." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture", "Agent Architecture", "Security Compliance"]
  },
  {
    id: "azure-az400-339",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Agent Architecture to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Selecting Microsoft-hosted vs self-hosted agent pools based on network and tooling is under consideration.",
    options: [
      { id: 'A', text: "Perform builds manually on an engineer's desktop without build agents." },
      { id: 'B', text: "Expose on-premises databases directly over the public internet without firewalls." },
      { id: 'C', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." },
      { id: 'D', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture", "Agent Architecture", "Hybrid Migration"]
  },
  {
    id: "azure-az400-340",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Agent Architecture to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Selecting Microsoft-hosted vs self-hosted agent pools based on network and tooling is under consideration.",
    options: [
      { id: 'A', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." },
      { id: 'B', text: "Perform builds manually on an engineer's desktop without build agents." },
      { id: 'C', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." },
      { id: 'D', text: "Expose on-premises databases directly over the public internet without firewalls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture", "Agent Architecture", "Resilience Failure"]
  },
  {
    id: "azure-az400-341",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Agent Demands to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Routing jobs to specific agents using agent pool demands and capabilities is under consideration.",
    options: [
      { id: 'A', text: "Manually assign jobs to specific agent IP addresses in the console." },
      { id: 'B', text: "Submit the job to a random agent pool and let it fail repeatedly until it lands on a Mac." },
      { id: 'C', text: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool." },
      { id: 'D', text: "Install Xcode on Windows Server agents." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands", "Agent Demands", "Dr Failover"]
  },
  {
    id: "azure-az400-342",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Agent Demands to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Routing jobs to specific agents using agent pool demands and capabilities is under consideration.",
    options: [
      { id: 'A', text: "Install Xcode on Windows Server agents." },
      { id: 'B', text: "Manually assign jobs to specific agent IP addresses in the console." },
      { id: 'C', text: "Submit the job to a random agent pool and let it fail repeatedly until it lands on a Mac." },
      { id: 'D', text: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands", "Agent Demands", "High Load Scale"]
  },
  {
    id: "azure-az400-343",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Agent Demands to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Routing jobs to specific agents using agent pool demands and capabilities is under consideration.",
    options: [
      { id: 'A', text: "Install Xcode on Windows Server agents." },
      { id: 'B', text: "Manually assign jobs to specific agent IP addresses in the console." },
      { id: 'C', text: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool." },
      { id: 'D', text: "Submit the job to a random agent pool and let it fail repeatedly until it lands on a Mac." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands", "Agent Demands", "Security Compliance"]
  },
  {
    id: "azure-az400-344",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Agent Demands to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Routing jobs to specific agents using agent pool demands and capabilities is under consideration.",
    options: [
      { id: 'A', text: "Install Xcode on Windows Server agents." },
      { id: 'B', text: "Manually assign jobs to specific agent IP addresses in the console." },
      { id: 'C', text: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool." },
      { id: 'D', text: "Submit the job to a random agent pool and let it fail repeatedly until it lands on a Mac." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands", "Agent Demands", "Hybrid Migration"]
  },
  {
    id: "azure-az400-345",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Agent Demands to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Routing jobs to specific agents using agent pool demands and capabilities is under consideration.",
    options: [
      { id: 'A', text: "Install Xcode on Windows Server agents." },
      { id: 'B', text: "Submit the job to a random agent pool and let it fail repeatedly until it lands on a Mac." },
      { id: 'C', text: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool." },
      { id: 'D', text: "Manually assign jobs to specific agent IP addresses in the console." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands", "Agent Demands", "Resilience Failure"]
  },
  {
    id: "azure-az400-346",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Container Jobs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Running build steps inside custom Docker container environments via container: is under consideration.",
    options: [
      { id: 'A', text: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file." },
      { id: 'B', text: "Install Docker manually inside a shell script and run `docker run` commands with volume mounts." },
      { id: 'C', text: "Require all developers to install identical build tools on their personal workstations." },
      { id: 'D', text: "Reimage the physical build agent VM before every build." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file. Azure Pipelines allows jobs to execute inside a container by specifying `container: &lt;image&gt;`. The agent pulls the specified container image, mounts the workspace, and runs all job steps inside the container environment, ensuring clean, consistent, and reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Container Jobs", "Container Jobs", "Dr Failover"]
  },
  {
    id: "azure-az400-347",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Container Jobs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Running build steps inside custom Docker container environments via container: is under consideration.",
    options: [
      { id: 'A', text: "Require all developers to install identical build tools on their personal workstations." },
      { id: 'B', text: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file." },
      { id: 'C', text: "Reimage the physical build agent VM before every build." },
      { id: 'D', text: "Install Docker manually inside a shell script and run `docker run` commands with volume mounts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file. Azure Pipelines allows jobs to execute inside a container by specifying `container: &lt;image&gt;`. The agent pulls the specified container image, mounts the workspace, and runs all job steps inside the container environment, ensuring clean, consistent, and reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Container Jobs", "Container Jobs", "High Load Scale"]
  },
  {
    id: "azure-az400-348",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Container Jobs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Running build steps inside custom Docker container environments via container: is under consideration.",
    options: [
      { id: 'A', text: "Install Docker manually inside a shell script and run `docker run` commands with volume mounts." },
      { id: 'B', text: "Require all developers to install identical build tools on their personal workstations." },
      { id: 'C', text: "Reimage the physical build agent VM before every build." },
      { id: 'D', text: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file. Azure Pipelines allows jobs to execute inside a container by specifying `container: &lt;image&gt;`. The agent pulls the specified container image, mounts the workspace, and runs all job steps inside the container environment, ensuring clean, consistent, and reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Container Jobs", "Container Jobs", "Security Compliance"]
  },
  {
    id: "azure-az400-349",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Container Jobs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Running build steps inside custom Docker container environments via container: is under consideration.",
    options: [
      { id: 'A', text: "Require all developers to install identical build tools on their personal workstations." },
      { id: 'B', text: "Install Docker manually inside a shell script and run `docker run` commands with volume mounts." },
      { id: 'C', text: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file." },
      { id: 'D', text: "Reimage the physical build agent VM before every build." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file. Azure Pipelines allows jobs to execute inside a container by specifying `container: &lt;image&gt;`. The agent pulls the specified container image, mounts the workspace, and runs all job steps inside the container environment, ensuring clean, consistent, and reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Container Jobs", "Container Jobs", "Hybrid Migration"]
  },
  {
    id: "azure-az400-350",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Container Jobs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Running build steps inside custom Docker container environments via container: is under consideration.",
    options: [
      { id: 'A', text: "Reimage the physical build agent VM before every build." },
      { id: 'B', text: "Install Docker manually inside a shell script and run `docker run` commands with volume mounts." },
      { id: 'C', text: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file." },
      { id: 'D', text: "Require all developers to install identical build tools on their personal workstations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file. Azure Pipelines allows jobs to execute inside a container by specifying `container: &lt;image&gt;`. The agent pulls the specified container image, mounts the workspace, and runs all job steps inside the container environment, ensuring clean, consistent, and reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Container Jobs", "Container Jobs", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_14;
