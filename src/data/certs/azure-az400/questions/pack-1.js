export const AZURE_AZ400_QUESTIONS_1 = [
  {
    id: "azure-az400-1",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Template Customization",
    scenario: "A software development division using Azure DevOps requires custom work item states, mandatory custom fields (such as 'Business Justification'), and tailored workflow rules for Product Backlog Items (PBIs). The default Scrum process template does not permit editing system states directly.",
    question: "What is the Microsoft-recommended approach to customize the work item workflow?",
    options: [
      { id: 'A', text: "Export the XML template of the default Scrum process, edit the XML locally, and force-overwrite the system template via REST API" },
      { id: 'B', text: "Switch the organization to the CMMI process template and disable all regulatory validation rules" },
      { id: 'C', text: "Instruct developers to document custom states in the work item HTML discussion thread instead" },
      { id: 'D', text: "Create an inherited process from the Scrum template and customize the states, fields, and rules in the inherited process" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "System process templates in Azure DevOps (Basic, Agile, Scrum, CMMI) are locked and read-only. To customize fields, states, rules, or work item types, administrators must create an inherited process derived from the base template, customize the inherited process, and change project associations to use it.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards", "Process Templates", "Inherited Process", "Governance"]
  },
  {
    id: "azure-az400-2",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Work Item to Code and Pipeline Traceability",
    scenario: "An audit requires complete end-to-end traceability showing which specific user stories led to individual Git pull requests, automated build runs, and production deployment stages.",
    question: "Which configuration in Azure Boards and Azure Repos ensures work items are linked automatically?",
    options: [
      { id: 'A', text: "Configure branch policies to require linked work items on pull requests, and use commit message mentions (#ID) or the automated release pipeline work item deployment integration" },
      { id: 'B', text: "Require developers to take screenshots of completed work items and attach them to Git commit objects" },
      { id: 'C', text: "Write a weekly PowerShell script that scrapes Azure Boards and emails a spreadsheet to auditors" },
      { id: 'D', text: "Disable Git pull requests and push commits directly to the main branch with manual ticket numbers" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure DevOps provides native end-to-end traceability. Enforcing branch policies that require linked work items on pull requests, using commit mentions (#ID), and enabling work item deployment reporting on environments ensures auditability from backlog item to production release.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/backlogs/connect-work-items-to-git-dev-ops",
    tags: ["Azure Boards", "Traceability", "Branch Policies", "Compliance"]
  },
  {
    id: "azure-az400-3",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #1",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #1?",
    options: [
      { id: 'A', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'B', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'C', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'D', text: "Granting Project Administrator rights to all external third-party guest users" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-4",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #2",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #2?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'C', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'D', text: "Exporting weekly work item reports to static text files on shared file drives" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-5",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #3",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #3?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'C', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'D', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-6",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #4",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #4?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'C', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'D', text: "Disabling all automated pipeline notifications to reduce developer email volume" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-7",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #5",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #5?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'C', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'D', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-8",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #6",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #6?",
    options: [
      { id: 'A', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'B', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'C', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'D', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-9",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #7",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #7?",
    options: [
      { id: 'A', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'B', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'C', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'D', text: "Granting Project Administrator rights to all external third-party guest users" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-10",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #8",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #8?",
    options: [
      { id: 'A', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'B', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'C', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'D', text: "Disabling all automated pipeline notifications to reduce developer email volume" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-11",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #9",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #9?",
    options: [
      { id: 'A', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'B', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'C', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'D', text: "Granting Project Administrator rights to all external third-party guest users" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-12",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #10",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #10?",
    options: [
      { id: 'A', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'B', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'C', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'D', text: "Granting Project Administrator rights to all external third-party guest users" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-13",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #11",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #11?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'C', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'D', text: "Exporting weekly work item reports to static text files on shared file drives" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-14",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #12",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #12?",
    options: [
      { id: 'A', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'B', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'C', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'D', text: "Disabling all automated pipeline notifications to reduce developer email volume" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-15",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #13",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #13?",
    options: [
      { id: 'A', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'B', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'C', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'D', text: "Exporting weekly work item reports to static text files on shared file drives" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-16",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #14",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #14?",
    options: [
      { id: 'A', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'B', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'C', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'D', text: "Exporting weekly work item reports to static text files on shared file drives" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-17",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #15",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #15?",
    options: [
      { id: 'A', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'B', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'C', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'D', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-18",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #16",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #16?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'C', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'D', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-19",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #17",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #17?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'C', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'D', text: "Exporting weekly work item reports to static text files on shared file drives" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-20",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #18",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #18?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'C', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'D', text: "Exporting weekly work item reports to static text files on shared file drives" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-21",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #19",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #19?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'C', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'D', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-22",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #20",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #20?",
    options: [
      { id: 'A', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'B', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'C', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'D', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-23",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #21",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #21?",
    options: [
      { id: 'A', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'B', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'C', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'D', text: "Granting Project Administrator rights to all external third-party guest users" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-24",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #22",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #22?",
    options: [
      { id: 'A', text: "Granting Project Administrator rights to all external third-party guest users" },
      { id: 'B', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'C', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'D', text: "Exporting weekly work item reports to static text files on shared file drives" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  },
  {
    id: "azure-az400-25",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Process and Communication Scenario #23",
    scenario: "A DevOps lead is standardizing team notification channels, sprint cadence, and cross-tool integrations between Azure DevOps and chat platforms.",
    question: "Which configuration best satisfies process objective #23?",
    options: [
      { id: 'A', text: "Configuring Azure DevOps service hooks with filtered event subscriptions delivering real-time status alerts to Microsoft Teams" },
      { id: 'B', text: "Exporting weekly work item reports to static text files on shared file drives" },
      { id: 'C', text: "Disabling all automated pipeline notifications to reduce developer email volume" },
      { id: 'D', text: "Granting Project Administrator rights to all external third-party guest users" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring processes and communication in Azure DevOps focuses on establishing structured process templates, real-time service hook webhooks, and seamless cross-functional team collaboration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/overview",
    tags: ["Azure Boards", "Service Hooks", "Collaboration"]
  }
];

export default AZURE_AZ400_QUESTIONS_1;
