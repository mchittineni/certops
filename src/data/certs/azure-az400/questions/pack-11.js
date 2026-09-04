export const AZURE_AZ400_QUESTIONS_11 = [
  {
    id: "azure-az400-251",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Azure Boards to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Inherited process models for custom work item types, states, and rules is under consideration.",
    options: [
      { id: 'A', text: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process." },
      { id: 'B', text: "Directly edit the XML of the locked system Scrum process template." },
      { id: 'C', text: "Instruct developers to record regulatory fields in work item discussion comments." },
      { id: 'D', text: "Switch the entire organization to a deprecated hosted XML process model." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards", "Azure Boards Customization", "Dr Failover"]
  },
  {
    id: "azure-az400-252",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Azure Boards to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Inherited process models for custom work item types, states, and rules is under consideration.",
    options: [
      { id: 'A', text: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process." },
      { id: 'B', text: "Directly edit the XML of the locked system Scrum process template." },
      { id: 'C', text: "Instruct developers to record regulatory fields in work item discussion comments." },
      { id: 'D', text: "Switch the entire organization to a deprecated hosted XML process model." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards", "Azure Boards Customization", "High Load Scale"]
  },
  {
    id: "azure-az400-253",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Azure Boards to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Inherited process models for custom work item types, states, and rules is under consideration.",
    options: [
      { id: 'A', text: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process." },
      { id: 'B', text: "Directly edit the XML of the locked system Scrum process template." },
      { id: 'C', text: "Instruct developers to record regulatory fields in work item discussion comments." },
      { id: 'D', text: "Switch the entire organization to a deprecated hosted XML process model." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards", "Azure Boards Customization", "Security Compliance"]
  },
  {
    id: "azure-az400-254",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Azure Boards to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Inherited process models for custom work item types, states, and rules is under consideration.",
    options: [
      { id: 'A', text: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process." },
      { id: 'B', text: "Directly edit the XML of the locked system Scrum process template." },
      { id: 'C', text: "Instruct developers to record regulatory fields in work item discussion comments." },
      { id: 'D', text: "Switch the entire organization to a deprecated hosted XML process model." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards", "Azure Boards Customization", "Hybrid Migration"]
  },
  {
    id: "azure-az400-255",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Azure Boards to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Inherited process models for custom work item types, states, and rules is under consideration.",
    options: [
      { id: 'A', text: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process." },
      { id: 'B', text: "Directly edit the XML of the locked system Scrum process template." },
      { id: 'C', text: "Instruct developers to record regulatory fields in work item discussion comments." },
      { id: 'D', text: "Switch the entire organization to a deprecated hosted XML process model." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards", "Azure Boards Customization", "Resilience Failure"]
  },
  {
    id: "azure-az400-256",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Project Organization to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Structuring multi-team delivery using Area Paths and Iteration Paths is under consideration.",
    options: [
      { id: 'A', text: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths." },
      { id: 'B', text: "Create 50 completely independent Azure DevOps projects, isolating code and work tracking." },
      { id: 'C', text: "Assign all 50 teams to the root default Area Path with no filtering." },
      { id: 'D', text: "Manage all team tasks inside external Excel spreadsheets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization", "Area Paths", "Dr Failover"]
  },
  {
    id: "azure-az400-257",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Project Organization to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Structuring multi-team delivery using Area Paths and Iteration Paths is under consideration.",
    options: [
      { id: 'A', text: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths." },
      { id: 'B', text: "Create 50 completely independent Azure DevOps projects, isolating code and work tracking." },
      { id: 'C', text: "Assign all 50 teams to the root default Area Path with no filtering." },
      { id: 'D', text: "Manage all team tasks inside external Excel spreadsheets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization", "Area Paths", "High Load Scale"]
  },
  {
    id: "azure-az400-258",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Project Organization to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Structuring multi-team delivery using Area Paths and Iteration Paths is under consideration.",
    options: [
      { id: 'A', text: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths." },
      { id: 'B', text: "Create 50 completely independent Azure DevOps projects, isolating code and work tracking." },
      { id: 'C', text: "Assign all 50 teams to the root default Area Path with no filtering." },
      { id: 'D', text: "Manage all team tasks inside external Excel spreadsheets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization", "Area Paths", "Security Compliance"]
  },
  {
    id: "azure-az400-259",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Project Organization to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Structuring multi-team delivery using Area Paths and Iteration Paths is under consideration.",
    options: [
      { id: 'A', text: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths." },
      { id: 'B', text: "Create 50 completely independent Azure DevOps projects, isolating code and work tracking." },
      { id: 'C', text: "Assign all 50 teams to the root default Area Path with no filtering." },
      { id: 'D', text: "Manage all team tasks inside external Excel spreadsheets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization", "Area Paths", "Hybrid Migration"]
  },
  {
    id: "azure-az400-260",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Project Organization to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Structuring multi-team delivery using Area Paths and Iteration Paths is under consideration.",
    options: [
      { id: 'A', text: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths." },
      { id: 'B', text: "Create 50 completely independent Azure DevOps projects, isolating code and work tracking." },
      { id: 'C', text: "Assign all 50 teams to the root default Area Path with no filtering." },
      { id: 'D', text: "Manage all team tasks inside external Excel spreadsheets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization", "Area Paths", "Resilience Failure"]
  },
  {
    id: "azure-az400-261",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates DevOps Dashboards to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Configuring Velocity, Cumulative Flow Diagrams (CFD), and Lead/Cycle Time widgets is under consideration.",
    options: [
      { id: 'A', text: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time." },
      { id: 'B', text: "Require developers to send weekly manual email status reports with estimated completion dates." },
      { id: 'C', text: "Export work items daily to CSV and draw graphs manually in PowerPoint." },
      { id: 'D', text: "Rely solely on commit messages to track agile project velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards", "Dashboard Widgets", "Dr Failover"]
  },
  {
    id: "azure-az400-262",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates DevOps Dashboards to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Configuring Velocity, Cumulative Flow Diagrams (CFD), and Lead/Cycle Time widgets is under consideration.",
    options: [
      { id: 'A', text: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time." },
      { id: 'B', text: "Require developers to send weekly manual email status reports with estimated completion dates." },
      { id: 'C', text: "Export work items daily to CSV and draw graphs manually in PowerPoint." },
      { id: 'D', text: "Rely solely on commit messages to track agile project velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards", "Dashboard Widgets", "High Load Scale"]
  },
  {
    id: "azure-az400-263",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates DevOps Dashboards to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Configuring Velocity, Cumulative Flow Diagrams (CFD), and Lead/Cycle Time widgets is under consideration.",
    options: [
      { id: 'A', text: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time." },
      { id: 'B', text: "Require developers to send weekly manual email status reports with estimated completion dates." },
      { id: 'C', text: "Export work items daily to CSV and draw graphs manually in PowerPoint." },
      { id: 'D', text: "Rely solely on commit messages to track agile project velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards", "Dashboard Widgets", "Security Compliance"]
  },
  {
    id: "azure-az400-264",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates DevOps Dashboards to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Configuring Velocity, Cumulative Flow Diagrams (CFD), and Lead/Cycle Time widgets is under consideration.",
    options: [
      { id: 'A', text: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time." },
      { id: 'B', text: "Require developers to send weekly manual email status reports with estimated completion dates." },
      { id: 'C', text: "Export work items daily to CSV and draw graphs manually in PowerPoint." },
      { id: 'D', text: "Rely solely on commit messages to track agile project velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards", "Dashboard Widgets", "Hybrid Migration"]
  },
  {
    id: "azure-az400-265",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates DevOps Dashboards to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring Velocity, Cumulative Flow Diagrams (CFD), and Lead/Cycle Time widgets is under consideration.",
    options: [
      { id: 'A', text: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time." },
      { id: 'B', text: "Require developers to send weekly manual email status reports with estimated completion dates." },
      { id: 'C', text: "Export work items daily to CSV and draw graphs manually in PowerPoint." },
      { id: 'D', text: "Rely solely on commit messages to track agile project velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards", "Dashboard Widgets", "Resilience Failure"]
  },
  {
    id: "azure-az400-266",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Notification Management to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Customizing personal and team notification subscriptions and webhook integrations is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams." },
      { id: 'B', text: "Configure all team members to receive every notification email generated by the entire organization." },
      { id: 'C', text: "Instruct developers to constantly refresh the build pipeline web page." },
      { id: 'D', text: "Disable all automated notifications and review failures during daily standups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management", "Service Hooks", "Dr Failover"]
  },
  {
    id: "azure-az400-267",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Notification Management to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Customizing personal and team notification subscriptions and webhook integrations is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams." },
      { id: 'B', text: "Configure all team members to receive every notification email generated by the entire organization." },
      { id: 'C', text: "Instruct developers to constantly refresh the build pipeline web page." },
      { id: 'D', text: "Disable all automated notifications and review failures during daily standups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management", "Service Hooks", "High Load Scale"]
  },
  {
    id: "azure-az400-268",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Notification Management to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Customizing personal and team notification subscriptions and webhook integrations is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams." },
      { id: 'B', text: "Configure all team members to receive every notification email generated by the entire organization." },
      { id: 'C', text: "Instruct developers to constantly refresh the build pipeline web page." },
      { id: 'D', text: "Disable all automated notifications and review failures during daily standups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management", "Service Hooks", "Security Compliance"]
  },
  {
    id: "azure-az400-269",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Notification Management to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Customizing personal and team notification subscriptions and webhook integrations is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams." },
      { id: 'B', text: "Configure all team members to receive every notification email generated by the entire organization." },
      { id: 'C', text: "Instruct developers to constantly refresh the build pipeline web page." },
      { id: 'D', text: "Disable all automated notifications and review failures during daily standups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management", "Service Hooks", "Hybrid Migration"]
  },
  {
    id: "azure-az400-270",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Notification Management to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Customizing personal and team notification subscriptions and webhook integrations is under consideration.",
    options: [
      { id: 'A', text: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams." },
      { id: 'B', text: "Configure all team members to receive every notification email generated by the entire organization." },
      { id: 'C', text: "Instruct developers to constantly refresh the build pipeline web page." },
      { id: 'D', text: "Disable all automated notifications and review failures during daily standups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management", "Service Hooks", "Resilience Failure"]
  },
  {
    id: "azure-az400-271",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Cross-Tool Integration to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Linking GitHub commits, branches, and pull requests directly to Azure Boards work items is under consideration.",
    options: [
      { id: 'A', text: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`." },
      { id: 'B', text: "Manually copy-paste commit URLs into work item HTML description fields." },
      { id: 'C', text: "Prohibit developers from using GitHub, forcing all code into Azure Repos." },
      { id: 'D', text: "Write a custom daily Python scraping script to match commit strings to work items." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration", "GitHub Azure Boards", "Dr Failover"]
  },
  {
    id: "azure-az400-272",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Cross-Tool Integration to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Linking GitHub commits, branches, and pull requests directly to Azure Boards work items is under consideration.",
    options: [
      { id: 'A', text: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`." },
      { id: 'B', text: "Manually copy-paste commit URLs into work item HTML description fields." },
      { id: 'C', text: "Prohibit developers from using GitHub, forcing all code into Azure Repos." },
      { id: 'D', text: "Write a custom daily Python scraping script to match commit strings to work items." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration", "GitHub Azure Boards", "High Load Scale"]
  },
  {
    id: "azure-az400-273",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Cross-Tool Integration to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Linking GitHub commits, branches, and pull requests directly to Azure Boards work items is under consideration.",
    options: [
      { id: 'A', text: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`." },
      { id: 'B', text: "Manually copy-paste commit URLs into work item HTML description fields." },
      { id: 'C', text: "Prohibit developers from using GitHub, forcing all code into Azure Repos." },
      { id: 'D', text: "Write a custom daily Python scraping script to match commit strings to work items." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration", "GitHub Azure Boards", "Security Compliance"]
  },
  {
    id: "azure-az400-274",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Cross-Tool Integration to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Linking GitHub commits, branches, and pull requests directly to Azure Boards work items is under consideration.",
    options: [
      { id: 'A', text: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`." },
      { id: 'B', text: "Manually copy-paste commit URLs into work item HTML description fields." },
      { id: 'C', text: "Prohibit developers from using GitHub, forcing all code into Azure Repos." },
      { id: 'D', text: "Write a custom daily Python scraping script to match commit strings to work items." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration", "GitHub Azure Boards", "Hybrid Migration"]
  },
  {
    id: "azure-az400-275",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Cross-Tool Integration to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Linking GitHub commits, branches, and pull requests directly to Azure Boards work items is under consideration.",
    options: [
      { id: 'A', text: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`." },
      { id: 'B', text: "Manually copy-paste commit URLs into work item HTML description fields." },
      { id: 'C', text: "Prohibit developers from using GitHub, forcing all code into Azure Repos." },
      { id: 'D', text: "Write a custom daily Python scraping script to match commit strings to work items." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration", "GitHub Azure Boards", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_11;
