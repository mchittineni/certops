export const AZURE_AZ400_QUESTIONS_12 = [
  {
    id: "azure-az400-276",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps User Entitlement and Access Levels: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates User Access Governance to grant business analysts and product owners ability to create and edit backlog items without consuming paid Basic user licenses.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Managing Stakeholder, Basic, and Visual Studio Subscriber access levels is under consideration.",
    options: [
      { id: 'A', text: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings." },
      { id: 'B', text: "Assign paid `Basic + Test Plans` licenses to all casual business users." },
      { id: 'C', text: "Create a single shared generic user account with Basic access." },
      { id: 'D', text: "Deny business stakeholders all access to Azure DevOps." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings. Azure DevOps provides distinct access levels: `Stakeholder` (free, unlimited users, allows viewing/creating/editing work items and viewing dashboards), `Basic` (paid, full access to repos, pipelines, and boards), and `Visual Studio Subscriber` (included with VS licensing).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/security/access-levels",
    tags: ["User Access Governance", "Access Levels", "Dr Failover"]
  },
  {
    id: "azure-az400-277",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps User Entitlement and Access Levels: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates User Access Governance to grant business analysts and product owners ability to create and edit backlog items without consuming paid Basic user licenses.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Managing Stakeholder, Basic, and Visual Studio Subscriber access levels is under consideration.",
    options: [
      { id: 'A', text: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings." },
      { id: 'B', text: "Assign paid `Basic + Test Plans` licenses to all casual business users." },
      { id: 'C', text: "Create a single shared generic user account with Basic access." },
      { id: 'D', text: "Deny business stakeholders all access to Azure DevOps." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings. Azure DevOps provides distinct access levels: `Stakeholder` (free, unlimited users, allows viewing/creating/editing work items and viewing dashboards), `Basic` (paid, full access to repos, pipelines, and boards), and `Visual Studio Subscriber` (included with VS licensing).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/security/access-levels",
    tags: ["User Access Governance", "Access Levels", "High Load Scale"]
  },
  {
    id: "azure-az400-278",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps User Entitlement and Access Levels: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates User Access Governance to grant business analysts and product owners ability to create and edit backlog items without consuming paid Basic user licenses.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Managing Stakeholder, Basic, and Visual Studio Subscriber access levels is under consideration.",
    options: [
      { id: 'A', text: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings." },
      { id: 'B', text: "Assign paid `Basic + Test Plans` licenses to all casual business users." },
      { id: 'C', text: "Create a single shared generic user account with Basic access." },
      { id: 'D', text: "Deny business stakeholders all access to Azure DevOps." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings. Azure DevOps provides distinct access levels: `Stakeholder` (free, unlimited users, allows viewing/creating/editing work items and viewing dashboards), `Basic` (paid, full access to repos, pipelines, and boards), and `Visual Studio Subscriber` (included with VS licensing).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/security/access-levels",
    tags: ["User Access Governance", "Access Levels", "Security Compliance"]
  },
  {
    id: "azure-az400-279",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps User Entitlement and Access Levels: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates User Access Governance to grant business analysts and product owners ability to create and edit backlog items without consuming paid Basic user licenses.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Managing Stakeholder, Basic, and Visual Studio Subscriber access levels is under consideration.",
    options: [
      { id: 'A', text: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings." },
      { id: 'B', text: "Assign paid `Basic + Test Plans` licenses to all casual business users." },
      { id: 'C', text: "Create a single shared generic user account with Basic access." },
      { id: 'D', text: "Deny business stakeholders all access to Azure DevOps." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings. Azure DevOps provides distinct access levels: `Stakeholder` (free, unlimited users, allows viewing/creating/editing work items and viewing dashboards), `Basic` (paid, full access to repos, pipelines, and boards), and `Visual Studio Subscriber` (included with VS licensing).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/security/access-levels",
    tags: ["User Access Governance", "Access Levels", "Hybrid Migration"]
  },
  {
    id: "azure-az400-280",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps User Entitlement and Access Levels: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates User Access Governance to grant business analysts and product owners ability to create and edit backlog items without consuming paid Basic user licenses.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Managing Stakeholder, Basic, and Visual Studio Subscriber access levels is under consideration.",
    options: [
      { id: 'A', text: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings." },
      { id: 'B', text: "Assign paid `Basic + Test Plans` licenses to all casual business users." },
      { id: 'C', text: "Create a single shared generic user account with Basic access." },
      { id: 'D', text: "Deny business stakeholders all access to Azure DevOps." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign the users the `Stakeholder` access level in Azure DevOps organization settings. Azure DevOps provides distinct access levels: `Stakeholder` (free, unlimited users, allows viewing/creating/editing work items and viewing dashboards), `Basic` (paid, full access to repos, pipelines, and boards), and `Visual Studio Subscriber` (included with VS licensing).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/security/access-levels",
    tags: ["User Access Governance", "Access Levels", "Resilience Failure"]
  },
  {
    id: "azure-az400-281",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Wiki for Project Documentation: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Documentation to maintain enterprise system architectural documentation version-controlled in Markdown directly alongside application source code in Git.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Project Wikis vs code repository wikis (publish code as wiki) is under consideration.",
    options: [
      { id: 'A', text: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch." },
      { id: 'B', text: "Write documentation in proprietary binary files stored on network file shares." },
      { id: 'C', text: "Keep architecture documentation exclusively in chat message channels." },
      { id: 'D', text: "Create an untracked, unversioned project wiki detached from the code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch. Azure DevOps supports two types of wikis: Project Wikis (stored in a hidden repository) and 'Publish code as wiki'. Publishing code as wiki connects directly to a Git repository branch, allowing documentation to be edited via pull requests, versioned with releases, and co-located with code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/project/wiki/publish-repo-to-wiki",
    tags: ["Documentation", "Publish Code as Wiki", "Dr Failover"]
  },
  {
    id: "azure-az400-282",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Wiki for Project Documentation: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Documentation to maintain enterprise system architectural documentation version-controlled in Markdown directly alongside application source code in Git.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Project Wikis vs code repository wikis (publish code as wiki) is under consideration.",
    options: [
      { id: 'A', text: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch." },
      { id: 'B', text: "Write documentation in proprietary binary files stored on network file shares." },
      { id: 'C', text: "Keep architecture documentation exclusively in chat message channels." },
      { id: 'D', text: "Create an untracked, unversioned project wiki detached from the code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch. Azure DevOps supports two types of wikis: Project Wikis (stored in a hidden repository) and 'Publish code as wiki'. Publishing code as wiki connects directly to a Git repository branch, allowing documentation to be edited via pull requests, versioned with releases, and co-located with code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/project/wiki/publish-repo-to-wiki",
    tags: ["Documentation", "Publish Code as Wiki", "High Load Scale"]
  },
  {
    id: "azure-az400-283",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Wiki for Project Documentation: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Documentation to maintain enterprise system architectural documentation version-controlled in Markdown directly alongside application source code in Git.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Project Wikis vs code repository wikis (publish code as wiki) is under consideration.",
    options: [
      { id: 'A', text: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch." },
      { id: 'B', text: "Write documentation in proprietary binary files stored on network file shares." },
      { id: 'C', text: "Keep architecture documentation exclusively in chat message channels." },
      { id: 'D', text: "Create an untracked, unversioned project wiki detached from the code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch. Azure DevOps supports two types of wikis: Project Wikis (stored in a hidden repository) and 'Publish code as wiki'. Publishing code as wiki connects directly to a Git repository branch, allowing documentation to be edited via pull requests, versioned with releases, and co-located with code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/project/wiki/publish-repo-to-wiki",
    tags: ["Documentation", "Publish Code as Wiki", "Security Compliance"]
  },
  {
    id: "azure-az400-284",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Wiki for Project Documentation: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Documentation to maintain enterprise system architectural documentation version-controlled in Markdown directly alongside application source code in Git.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Project Wikis vs code repository wikis (publish code as wiki) is under consideration.",
    options: [
      { id: 'A', text: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch." },
      { id: 'B', text: "Write documentation in proprietary binary files stored on network file shares." },
      { id: 'C', text: "Keep architecture documentation exclusively in chat message channels." },
      { id: 'D', text: "Create an untracked, unversioned project wiki detached from the code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch. Azure DevOps supports two types of wikis: Project Wikis (stored in a hidden repository) and 'Publish code as wiki'. Publishing code as wiki connects directly to a Git repository branch, allowing documentation to be edited via pull requests, versioned with releases, and co-located with code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/project/wiki/publish-repo-to-wiki",
    tags: ["Documentation", "Publish Code as Wiki", "Hybrid Migration"]
  },
  {
    id: "azure-az400-285",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Wiki for Project Documentation: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Documentation to maintain enterprise system architectural documentation version-controlled in Markdown directly alongside application source code in Git.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Project Wikis vs code repository wikis (publish code as wiki) is under consideration.",
    options: [
      { id: 'A', text: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch." },
      { id: 'B', text: "Write documentation in proprietary binary files stored on network file shares." },
      { id: 'C', text: "Keep architecture documentation exclusively in chat message channels." },
      { id: 'D', text: "Create an untracked, unversioned project wiki detached from the code repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the 'Publish code as wiki' feature in Azure DevOps to publish Markdown files from a designated repository branch. Azure DevOps supports two types of wikis: Project Wikis (stored in a hidden repository) and 'Publish code as wiki'. Publishing code as wiki connects directly to a Git repository branch, allowing documentation to be edited via pull requests, versioned with releases, and co-located with code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/project/wiki/publish-repo-to-wiki",
    tags: ["Documentation", "Publish Code as Wiki", "Resilience Failure"]
  },
  {
    id: "azure-az400-286",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Audit Logging and Streams: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Audit Logging to stream security and administrative audit events (user privilege elevations, policy modifications, project deletions) to a central SIEM for compliance auditing.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Streaming organizational audit logs to Azure Log Analytics or Event Hubs is under consideration.",
    options: [
      { id: 'A', text: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs." },
      { id: 'B', text: "Manually download audit log CSV files once a quarter from the web interface." },
      { id: 'C', text: "Rely on browser history records of administrative staff." },
      { id: 'D', text: "Disable audit logging to reduce organizational cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs. Azure DevOps Audit Streams allow organization administrators to export real-time audit event logs directly to Azure Monitor Log Analytics, Azure Event Hubs, or Splunk. This enables automated alerting, forensic security investigations, and compliance reporting across all organization activities.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/audit/auditing-streaming",
    tags: ["Audit Logging", "Audit Streams", "Dr Failover"]
  },
  {
    id: "azure-az400-287",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Audit Logging and Streams: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Audit Logging to stream security and administrative audit events (user privilege elevations, policy modifications, project deletions) to a central SIEM for compliance auditing.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Streaming organizational audit logs to Azure Log Analytics or Event Hubs is under consideration.",
    options: [
      { id: 'A', text: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs." },
      { id: 'B', text: "Manually download audit log CSV files once a quarter from the web interface." },
      { id: 'C', text: "Rely on browser history records of administrative staff." },
      { id: 'D', text: "Disable audit logging to reduce organizational cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs. Azure DevOps Audit Streams allow organization administrators to export real-time audit event logs directly to Azure Monitor Log Analytics, Azure Event Hubs, or Splunk. This enables automated alerting, forensic security investigations, and compliance reporting across all organization activities.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/audit/auditing-streaming",
    tags: ["Audit Logging", "Audit Streams", "High Load Scale"]
  },
  {
    id: "azure-az400-288",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Audit Logging and Streams: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Audit Logging to stream security and administrative audit events (user privilege elevations, policy modifications, project deletions) to a central SIEM for compliance auditing.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Streaming organizational audit logs to Azure Log Analytics or Event Hubs is under consideration.",
    options: [
      { id: 'A', text: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs." },
      { id: 'B', text: "Manually download audit log CSV files once a quarter from the web interface." },
      { id: 'C', text: "Rely on browser history records of administrative staff." },
      { id: 'D', text: "Disable audit logging to reduce organizational cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs. Azure DevOps Audit Streams allow organization administrators to export real-time audit event logs directly to Azure Monitor Log Analytics, Azure Event Hubs, or Splunk. This enables automated alerting, forensic security investigations, and compliance reporting across all organization activities.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/audit/auditing-streaming",
    tags: ["Audit Logging", "Audit Streams", "Security Compliance"]
  },
  {
    id: "azure-az400-289",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Audit Logging and Streams: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Audit Logging to stream security and administrative audit events (user privilege elevations, policy modifications, project deletions) to a central SIEM for compliance auditing.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Streaming organizational audit logs to Azure Log Analytics or Event Hubs is under consideration.",
    options: [
      { id: 'A', text: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs." },
      { id: 'B', text: "Manually download audit log CSV files once a quarter from the web interface." },
      { id: 'C', text: "Rely on browser history records of administrative staff." },
      { id: 'D', text: "Disable audit logging to reduce organizational cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs. Azure DevOps Audit Streams allow organization administrators to export real-time audit event logs directly to Azure Monitor Log Analytics, Azure Event Hubs, or Splunk. This enables automated alerting, forensic security investigations, and compliance reporting across all organization activities.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/audit/auditing-streaming",
    tags: ["Audit Logging", "Audit Streams", "Hybrid Migration"]
  },
  {
    id: "azure-az400-290",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Audit Logging and Streams: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Audit Logging to stream security and administrative audit events (user privilege elevations, policy modifications, project deletions) to a central SIEM for compliance auditing.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Streaming organizational audit logs to Azure Log Analytics or Event Hubs is under consideration.",
    options: [
      { id: 'A', text: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs." },
      { id: 'B', text: "Manually download audit log CSV files once a quarter from the web interface." },
      { id: 'C', text: "Rely on browser history records of administrative staff." },
      { id: 'D', text: "Disable audit logging to reduce organizational cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Audit Streams in Azure DevOps Organization Settings to export audit logs to Azure Log Analytics or Azure Event Hubs. Azure DevOps Audit Streams allow organization administrators to export real-time audit event logs directly to Azure Monitor Log Analytics, Azure Event Hubs, or Splunk. This enables automated alerting, forensic security investigations, and compliance reporting across all organization activities.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/audit/auditing-streaming",
    tags: ["Audit Logging", "Audit Streams", "Resilience Failure"]
  },
  {
    id: "azure-az400-291",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Branching Strategies: Trunk-Based vs GitFlow: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Branching Strategies to select a source control branching model that minimizes merge conflicts, eliminates long-lived release branches, and enables continuous daily deployment.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Trunk-Based Development with short-lived feature branches for CI/CD is under consideration.",
    options: [
      { id: 'A', text: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch." },
      { id: 'B', text: "Implement traditional GitFlow with multiple permanent release, hotfix, develop, and feature branches lasting several months." },
      { id: 'C', text: "Have all developers commit directly to the production main branch without pull requests or testing." },
      { id: 'D', text: "Maintain separate Git repositories for every individual developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch. Trunk-Based Development is the modern industry standard for high-performing DevOps teams. Developers collaborate on short-lived feature branches merged frequently into `main` (trunk) via small pull requests, avoiding massive 'merge hell' and enabling automated continuous integration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance",
    tags: ["Branching Strategies", "Trunk-Based Development", "Dr Failover"]
  },
  {
    id: "azure-az400-292",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Branching Strategies: Trunk-Based vs GitFlow: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Branching Strategies to select a source control branching model that minimizes merge conflicts, eliminates long-lived release branches, and enables continuous daily deployment.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Trunk-Based Development with short-lived feature branches for CI/CD is under consideration.",
    options: [
      { id: 'A', text: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch." },
      { id: 'B', text: "Implement traditional GitFlow with multiple permanent release, hotfix, develop, and feature branches lasting several months." },
      { id: 'C', text: "Have all developers commit directly to the production main branch without pull requests or testing." },
      { id: 'D', text: "Maintain separate Git repositories for every individual developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch. Trunk-Based Development is the modern industry standard for high-performing DevOps teams. Developers collaborate on short-lived feature branches merged frequently into `main` (trunk) via small pull requests, avoiding massive 'merge hell' and enabling automated continuous integration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance",
    tags: ["Branching Strategies", "Trunk-Based Development", "High Load Scale"]
  },
  {
    id: "azure-az400-293",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Branching Strategies: Trunk-Based vs GitFlow: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Branching Strategies to select a source control branching model that minimizes merge conflicts, eliminates long-lived release branches, and enables continuous daily deployment.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Trunk-Based Development with short-lived feature branches for CI/CD is under consideration.",
    options: [
      { id: 'A', text: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch." },
      { id: 'B', text: "Implement traditional GitFlow with multiple permanent release, hotfix, develop, and feature branches lasting several months." },
      { id: 'C', text: "Have all developers commit directly to the production main branch without pull requests or testing." },
      { id: 'D', text: "Maintain separate Git repositories for every individual developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch. Trunk-Based Development is the modern industry standard for high-performing DevOps teams. Developers collaborate on short-lived feature branches merged frequently into `main` (trunk) via small pull requests, avoiding massive 'merge hell' and enabling automated continuous integration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance",
    tags: ["Branching Strategies", "Trunk-Based Development", "Security Compliance"]
  },
  {
    id: "azure-az400-294",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Branching Strategies: Trunk-Based vs GitFlow: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Branching Strategies to select a source control branching model that minimizes merge conflicts, eliminates long-lived release branches, and enables continuous daily deployment.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Trunk-Based Development with short-lived feature branches for CI/CD is under consideration.",
    options: [
      { id: 'A', text: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch." },
      { id: 'B', text: "Implement traditional GitFlow with multiple permanent release, hotfix, develop, and feature branches lasting several months." },
      { id: 'C', text: "Have all developers commit directly to the production main branch without pull requests or testing." },
      { id: 'D', text: "Maintain separate Git repositories for every individual developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch. Trunk-Based Development is the modern industry standard for high-performing DevOps teams. Developers collaborate on short-lived feature branches merged frequently into `main` (trunk) via small pull requests, avoiding massive 'merge hell' and enabling automated continuous integration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance",
    tags: ["Branching Strategies", "Trunk-Based Development", "Hybrid Migration"]
  },
  {
    id: "azure-az400-295",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Git Branching Strategies: Trunk-Based vs GitFlow: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Branching Strategies to select a source control branching model that minimizes merge conflicts, eliminates long-lived release branches, and enables continuous daily deployment.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Trunk-Based Development with short-lived feature branches for CI/CD is under consideration.",
    options: [
      { id: 'A', text: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch." },
      { id: 'B', text: "Implement traditional GitFlow with multiple permanent release, hotfix, develop, and feature branches lasting several months." },
      { id: 'C', text: "Have all developers commit directly to the production main branch without pull requests or testing." },
      { id: 'D', text: "Maintain separate Git repositories for every individual developer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Trunk-Based Development with short-lived feature branches (lasting less than a day) and feature toggles merged into the main branch. Trunk-Based Development is the modern industry standard for high-performing DevOps teams. Developers collaborate on short-lived feature branches merged frequently into `main` (trunk) via small pull requests, avoiding massive 'merge hell' and enabling automated continuous integration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance",
    tags: ["Branching Strategies", "Trunk-Based Development", "Resilience Failure"]
  },
  {
    id: "azure-az400-296",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Branch Policies and Pull Request Quality Gates: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Branch Policies to prevent direct pushes to the `main` branch and ensure all changes build successfully and receive at least two peer approvals before merging.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Enforcing minimum reviewers, linked work items, build validation, and merge strategies is under consideration.",
    options: [
      { id: 'A', text: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution." },
      { id: 'B', text: "Rely on developers promising not to run `git push origin main`." },
      { id: 'C', text: "Grant bypass branch policies permissions to all junior developers." },
      { id: 'D', text: "Lock the repository so no changes can be merged by anyone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution. Branch Policies in Azure Repos protect critical branches. Configuring required build validation pipelines, minimum reviewer counts, mandatory linked work items, and blocking merge until all review comments are resolved guarantees that defective or unreviewed code cannot reach production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies",
    tags: ["Branch Policies", "Branch Policies", "Dr Failover"]
  },
  {
    id: "azure-az400-297",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Branch Policies and Pull Request Quality Gates: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Branch Policies to prevent direct pushes to the `main` branch and ensure all changes build successfully and receive at least two peer approvals before merging.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Enforcing minimum reviewers, linked work items, build validation, and merge strategies is under consideration.",
    options: [
      { id: 'A', text: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution." },
      { id: 'B', text: "Rely on developers promising not to run `git push origin main`." },
      { id: 'C', text: "Grant bypass branch policies permissions to all junior developers." },
      { id: 'D', text: "Lock the repository so no changes can be merged by anyone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution. Branch Policies in Azure Repos protect critical branches. Configuring required build validation pipelines, minimum reviewer counts, mandatory linked work items, and blocking merge until all review comments are resolved guarantees that defective or unreviewed code cannot reach production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies",
    tags: ["Branch Policies", "Branch Policies", "High Load Scale"]
  },
  {
    id: "azure-az400-298",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Branch Policies and Pull Request Quality Gates: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Branch Policies to prevent direct pushes to the `main` branch and ensure all changes build successfully and receive at least two peer approvals before merging.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Enforcing minimum reviewers, linked work items, build validation, and merge strategies is under consideration.",
    options: [
      { id: 'A', text: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution." },
      { id: 'B', text: "Rely on developers promising not to run `git push origin main`." },
      { id: 'C', text: "Grant bypass branch policies permissions to all junior developers." },
      { id: 'D', text: "Lock the repository so no changes can be merged by anyone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution. Branch Policies in Azure Repos protect critical branches. Configuring required build validation pipelines, minimum reviewer counts, mandatory linked work items, and blocking merge until all review comments are resolved guarantees that defective or unreviewed code cannot reach production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies",
    tags: ["Branch Policies", "Branch Policies", "Security Compliance"]
  },
  {
    id: "azure-az400-299",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Branch Policies and Pull Request Quality Gates: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Branch Policies to prevent direct pushes to the `main` branch and ensure all changes build successfully and receive at least two peer approvals before merging.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Enforcing minimum reviewers, linked work items, build validation, and merge strategies is under consideration.",
    options: [
      { id: 'A', text: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution." },
      { id: 'B', text: "Rely on developers promising not to run `git push origin main`." },
      { id: 'C', text: "Grant bypass branch policies permissions to all junior developers." },
      { id: 'D', text: "Lock the repository so no changes can be merged by anyone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution. Branch Policies in Azure Repos protect critical branches. Configuring required build validation pipelines, minimum reviewer counts, mandatory linked work items, and blocking merge until all review comments are resolved guarantees that defective or unreviewed code cannot reach production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies",
    tags: ["Branch Policies", "Branch Policies", "Hybrid Migration"]
  },
  {
    id: "azure-az400-300",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d2",
    domainName: "Design and implement source control",
    title: "Branch Policies and Pull Request Quality Gates: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Branch Policies to prevent direct pushes to the `main` branch and ensure all changes build successfully and receive at least two peer approvals before merging.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Enforcing minimum reviewers, linked work items, build validation, and merge strategies is under consideration.",
    options: [
      { id: 'A', text: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution." },
      { id: 'B', text: "Rely on developers promising not to run `git push origin main`." },
      { id: 'C', text: "Grant bypass branch policies permissions to all junior developers." },
      { id: 'D', text: "Lock the repository so no changes can be merged by anyone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Branch Policies on `main` requiring a minimum of two reviewers, Build Validation pipeline passing, linked work items, and comment resolution. Branch Policies in Azure Repos protect critical branches. Configuring required build validation pipelines, minimum reviewer counts, mandatory linked work items, and blocking merge until all review comments are resolved guarantees that defective or unreviewed code cannot reach production.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies",
    tags: ["Branch Policies", "Branch Policies", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_12;
