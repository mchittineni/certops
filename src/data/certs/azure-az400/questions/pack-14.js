export const AZURE_AZ400_QUESTIONS_14 = [
  {
    id: "azure-az400-326",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Have contributors branch in the core repository and protect `main` with a two-reviewer policy." },
      { id: 'B', text: "Have contributors work in their own repository and let the core team cherry-pick the commits." },
      { id: 'C', text: "Have contributors fork the core repository and raise cross-repository pull requests back to it." },
      { id: 'D', text: "Have contributors submit patches as work item attachments for the core team to apply." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking","Forking Workflows","Dr Failover"]
  },
  {
    id: "azure-az400-327",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Have contributors work in their own repository and let the core team cherry-pick the commits." },
      { id: 'B', text: "Have contributors submit patches as work item attachments for the core team to apply." },
      { id: 'C', text: "Have contributors fork the core repository and raise cross-repository pull requests back to it." },
      { id: 'D', text: "Have contributors branch in the core repository and protect `main` with a two-reviewer policy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking","Forking Workflows","High Load Scale"]
  },
  {
    id: "azure-az400-328",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Have contributors branch in the core repository and protect `main` with a two-reviewer policy." },
      { id: 'B', text: "Have contributors work in their own repository and let the core team cherry-pick the commits." },
      { id: 'C', text: "Have contributors fork the core repository and raise cross-repository pull requests back to it." },
      { id: 'D', text: "Have contributors submit patches as work item attachments for the core team to apply." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking","Forking Workflows","Security Compliance"]
  },
  {
    id: "azure-az400-329",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Have contributors branch in the core repository and protect `main` with a two-reviewer policy." },
      { id: 'B', text: "Have contributors submit patches as work item attachments for the core team to apply." },
      { id: 'C', text: "Have contributors work in their own repository and let the core team cherry-pick the commits." },
      { id: 'D', text: "Have contributors fork the core repository and raise cross-repository pull requests back to it." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking","Forking Workflows","Hybrid Migration"]
  },
  {
    id: "azure-az400-330",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Forking Workflows for Secure InnerSource Collaboration: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to allow developers across multiple departments to contribute enhancements to a shared core platform repository without granting them direct write or branch creation access.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Have contributors submit patches as work item attachments for the core team to apply." },
      { id: 'B', text: "Have contributors branch in the core repository and protect `main` with a two-reviewer policy." },
      { id: 'C', text: "Have contributors fork the core repository and raise cross-repository pull requests back to it." },
      { id: 'D', text: "Have contributors work in their own repository and let the core team cherry-pick the commits." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a forking workflow where developers fork the central repository into their own project, make modifications, and submit cross-repository pull requests. Forking is the foundation of open-source and InnerSource collaboration. Developers create an independent copy (fork) of the repository, develop features in their own isolated space, and submit cross-repo pull requests to the upstream repo, allowing audited contributions without granting direct write access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/forks",
    tags: ["InnerSource & Forking","Forking Workflows","Resilience Failure"]
  },
  {
    id: "azure-az400-331",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Define one YAML pipeline with `stages`, `jobs` and `steps`, ordered by `dependsOn`." },
      { id: 'B', text: "Define one YAML pipeline per stage and chain them with pipeline resource triggers." },
      { id: 'C', text: "Define one YAML pipeline with three jobs in a single stage, ordered by `dependsOn`." },
      { id: 'D', text: "Define one classic release definition with three environments and pre-deployment conditions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture","YAML Multi-Stage","Dr Failover"]
  },
  {
    id: "azure-az400-332",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Define one YAML pipeline with `stages`, `jobs` and `steps`, ordered by `dependsOn`." },
      { id: 'B', text: "Define one YAML pipeline with three jobs in a single stage, ordered by `dependsOn`." },
      { id: 'C', text: "Define one classic release definition with three environments and pre-deployment conditions." },
      { id: 'D', text: "Define one YAML pipeline per stage and chain them with pipeline resource triggers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture","YAML Multi-Stage","High Load Scale"]
  },
  {
    id: "azure-az400-333",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Define one YAML pipeline with `stages`, `jobs` and `steps`, ordered by `dependsOn`." },
      { id: 'B', text: "Define one YAML pipeline per stage and chain them with pipeline resource triggers." },
      { id: 'C', text: "Define one YAML pipeline with three jobs in a single stage, ordered by `dependsOn`." },
      { id: 'D', text: "Define one classic release definition with three environments and pre-deployment conditions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture","YAML Multi-Stage","Security Compliance"]
  },
  {
    id: "azure-az400-334",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Define one YAML pipeline with `stages`, `jobs` and `steps`, ordered by `dependsOn`." },
      { id: 'B', text: "Define one YAML pipeline per stage and chain them with pipeline resource triggers." },
      { id: 'C', text: "Define one YAML pipeline with three jobs in a single stage, ordered by `dependsOn`." },
      { id: 'D', text: "Define one classic release definition with three environments and pre-deployment conditions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture","YAML Multi-Stage","Hybrid Migration"]
  },
  {
    id: "azure-az400-335",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "YAML Multi-Stage Pipelines Structure: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to author an enterprise CI/CD pipeline with distinct build, staging deployment, and production deployment stages governed by dependencies.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Define one classic release definition with three environments and pre-deployment conditions." },
      { id: 'B', text: "Define one YAML pipeline with three jobs in a single stage, ordered by `dependsOn`." },
      { id: 'C', text: "Define one YAML pipeline per stage and chain them with pipeline resource triggers." },
      { id: 'D', text: "Define one YAML pipeline with `stages`, `jobs` and `steps`, ordered by `dependsOn`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define an Azure Pipelines YAML file using `stages`, `jobs`, and `steps` hierarchy with `dependsOn` declarations linking sequential stages. Azure Pipelines YAML uses a clean hierarchy: `stages` (major milestones like Build, Test, Deploy), `jobs` (units of work executed on specific agent pools), and `steps` (tasks or scripts). Defining `dependsOn` between stages controls execution flow and enables environment-specific governance.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/stages",
    tags: ["Pipeline Architecture","YAML Multi-Stage","Resilience Failure"]
  },
  {
    id: "azure-az400-336",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." },
      { id: 'B', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." },
      { id: 'C', text: "Expose on-premises databases directly over the public internet without firewalls." },
      { id: 'D', text: "Perform builds manually on an engineer's desktop without build agents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture","Agent Architecture","Dr Failover"]
  },
  {
    id: "azure-az400-337",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Expose on-premises databases directly over the public internet without firewalls." },
      { id: 'B', text: "Perform builds manually on an engineer's desktop without build agents." },
      { id: 'C', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." },
      { id: 'D', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture","Agent Architecture","High Load Scale"]
  },
  {
    id: "azure-az400-338",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Expose on-premises databases directly over the public internet without firewalls." },
      { id: 'B', text: "Perform builds manually on an engineer's desktop without build agents." },
      { id: 'C', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." },
      { id: 'D', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture","Agent Architecture","Security Compliance"]
  },
  {
    id: "azure-az400-339",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." },
      { id: 'B', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." },
      { id: 'C', text: "Expose on-premises databases directly over the public internet without firewalls." },
      { id: 'D', text: "Perform builds manually on an engineer's desktop without build agents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture","Agent Architecture","Hybrid Migration"]
  },
  {
    id: "azure-az400-340",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Microsoft-Hosted vs Self-Hosted Build Agents: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to run build pipelines that require direct private network line-of-sight to on-premises database servers and custom licensed compilers.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool." },
      { id: 'B', text: "Expose on-premises databases directly over the public internet without firewalls." },
      { id: 'C', text: "Perform builds manually on an engineer's desktop without build agents." },
      { id: 'D', text: "Use Microsoft-Hosted agents which run on public Azure networks without on-premises connectivity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Self-Hosted Azure DevOps Agents inside the private network configured in a dedicated Agent Pool. Microsoft-Hosted agents provide clean, disposable VMs maintained by Microsoft. Self-Hosted agents run on customer-managed infrastructure (VMs, containers) and provide direct access to private corporate networks, persistent caching, and specialized software or hardware configurations.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/agents",
    tags: ["Agent Architecture","Agent Architecture","Resilience Failure"]
  },
  {
    id: "azure-az400-341",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Set `pool: vmImage: windows-latest` on the job and install the Xcode command line tools in a step." },
      { id: 'B', text: "Set `condition` on the job to check `Agent.OS` and let the other agents skip the job at run time." },
      { id: 'C', text: "Set `strategy: matrix` over the agent names so the job runs once against each self-hosted agent." },
      { id: 'D', text: "Set `demands: [xcode, macOS]` on the YAML job so it matches the capabilities of the Mac agents." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands","Agent Demands","Dr Failover"]
  },
  {
    id: "azure-az400-342",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Set `condition` on the job to check `Agent.OS` and let the other agents skip the job at run time." },
      { id: 'B', text: "Set `demands: [xcode, macOS]` on the YAML job so it matches the capabilities of the Mac agents." },
      { id: 'C', text: "Set `strategy: matrix` over the agent names so the job runs once against each self-hosted agent." },
      { id: 'D', text: "Set `pool: vmImage: windows-latest` on the job and install the Xcode command line tools in a step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands","Agent Demands","High Load Scale"]
  },
  {
    id: "azure-az400-343",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Set `demands: [xcode, macOS]` on the YAML job so it matches the capabilities of the Mac agents." },
      { id: 'B', text: "Set `condition` on the job to check `Agent.OS` and let the other agents skip the job at run time." },
      { id: 'C', text: "Set `pool: vmImage: windows-latest` on the job and install the Xcode command line tools in a step." },
      { id: 'D', text: "Set `strategy: matrix` over the agent names so the job runs once against each self-hosted agent." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands","Agent Demands","Security Compliance"]
  },
  {
    id: "azure-az400-344",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Set `demands: [xcode, macOS]` on the YAML job so it matches the capabilities of the Mac agents." },
      { id: 'B', text: "Set `condition` on the job to check `Agent.OS` and let the other agents skip the job at run time." },
      { id: 'C', text: "Set `pool: vmImage: windows-latest` on the job and install the Xcode command line tools in a step." },
      { id: 'D', text: "Set `strategy: matrix` over the agent names so the job runs once against each self-hosted agent." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands","Agent Demands","Hybrid Migration"]
  },
  {
    id: "azure-az400-345",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Azure Pipelines Agent Pools and Demands: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to route a specialized iOS build job to only those self-hosted build agents that have Xcode and macOS installed.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Set `demands: [xcode, macOS]` on the YAML job so it matches the capabilities of the Mac agents." },
      { id: 'B', text: "Set `condition` on the job to check `Agent.OS` and let the other agents skip the job at run time." },
      { id: 'C', text: "Set `pool: vmImage: windows-latest` on the job and install the Xcode command line tools in a step." },
      { id: 'D', text: "Set `strategy: matrix` over the agent names so the job runs once against each self-hosted agent." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `demands` in the YAML job definition (e.g., `demands: [xcode, macOS]`) matching system or user-defined capabilities on the target agent pool. Agent demands match required tools or hardware against the capabilities reported by agents in an Agent Pool. Specifying `demands` in a pipeline job ensures the Azure DevOps scheduler routes the job exclusively to agents that possess the necessary software (e.g., Docker, JDK, Xcode).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/demands",
    tags: ["Agent Demands","Agent Demands","Resilience Failure"]
  },
  {
    id: "azure-az400-346",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file." },
      { id: 'B', text: "Install Docker manually inside a shell script and run `docker run` commands with volume mounts." },
      { id: 'C', text: "Reimage the physical build agent VM before every build." },
      { id: 'D', text: "Require all developers to install identical build tools on their personal workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file. Azure Pipelines allows jobs to execute inside a container by specifying `container: &lt;image&gt;`. The agent pulls the specified container image, mounts the workspace, and runs all job steps inside the container environment, ensuring clean, consistent, and reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Container Jobs","Container Jobs","Dr Failover"]
  },
  {
    id: "azure-az400-347",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
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
    tags: ["Container Jobs","Container Jobs","High Load Scale"]
  },
  {
    id: "azure-az400-348",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
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
    tags: ["Container Jobs","Container Jobs","Security Compliance"]
  },
  {
    id: "azure-az400-349",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Reimage the physical build agent VM before every build." },
      { id: 'B', text: "Install Docker manually inside a shell script and run `docker run` commands with volume mounts." },
      { id: 'C', text: "Require all developers to install identical build tools on their personal workstations." },
      { id: 'D', text: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file. Azure Pipelines allows jobs to execute inside a container by specifying `container: &lt;image&gt;`. The agent pulls the specified container image, mounts the workspace, and runs all job steps inside the container environment, ensuring clean, consistent, and reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Container Jobs","Container Jobs","Hybrid Migration"]
  },
  {
    id: "azure-az400-350",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d3",
    domainName: "Design and implement build and release pipelines",
    title: "Containerized Build Jobs in Azure Pipelines: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to execute build and test steps inside an isolated, customized Linux container image without installing dependencies on the underlying host build agent.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file." },
      { id: 'B', text: "Install Docker manually inside a shell script and run `docker run` commands with volume mounts." },
      { id: 'C', text: "Reimage the physical build agent VM before every build." },
      { id: 'D', text: "Require all developers to install identical build tools on their personal workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Specify `container: &lt;image-name&gt;` at the job level in the Azure Pipelines YAML file. Azure Pipelines allows jobs to execute inside a container by specifying `container: &lt;image&gt;`. The agent pulls the specified container image, mounts the workspace, and runs all job steps inside the container environment, ensuring clean, consistent, and reproducible build tooling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/pipelines/process/container-phases",
    tags: ["Container Jobs","Container Jobs","Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_14;
