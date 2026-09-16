export const AZURE_AZ400_QUESTIONS_11 = [
  {
    id: "azure-az400-251",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Create a new work item type in the system Scrum process and add the fields to that type." },
      { id: 'B', text: "Create the fields as extension-defined custom controls on the existing Product Backlog Item form." },
      { id: 'C', text: "Create a second project on the hosted XML process model and migrate the backlog into it." },
      { id: 'D', text: "Create an inherited process from Scrum and add the fields, states and rules to the inherited one." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards","Azure Boards Customization","Dr Failover"]
  },
  {
    id: "azure-az400-252",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Create an inherited process from Scrum and add the fields, states and rules to the inherited one." },
      { id: 'B', text: "Create the fields as extension-defined custom controls on the existing Product Backlog Item form." },
      { id: 'C', text: "Create a new work item type in the system Scrum process and add the fields to that type." },
      { id: 'D', text: "Create a second project on the hosted XML process model and migrate the backlog into it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards","Azure Boards Customization","High Load Scale"]
  },
  {
    id: "azure-az400-253",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Create a new work item type in the system Scrum process and add the fields to that type." },
      { id: 'B', text: "Create an inherited process from Scrum and add the fields, states and rules to the inherited one." },
      { id: 'C', text: "Create the fields as extension-defined custom controls on the existing Product Backlog Item form." },
      { id: 'D', text: "Create a second project on the hosted XML process model and migrate the backlog into it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards","Azure Boards Customization","Security Compliance"]
  },
  {
    id: "azure-az400-254",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Create an inherited process from Scrum and add the fields, states and rules to the inherited one." },
      { id: 'B', text: "Create the fields as extension-defined custom controls on the existing Product Backlog Item form." },
      { id: 'C', text: "Create a new work item type in the system Scrum process and add the fields to that type." },
      { id: 'D', text: "Create a second project on the hosted XML process model and migrate the backlog into it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards","Azure Boards Customization","Hybrid Migration"]
  },
  {
    id: "azure-az400-255",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure Boards Process Customization: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to add custom regulatory compliance fields and custom workflow states to Product Backlog Items in Azure Boards without breaking system templates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Create a second project on the hosted XML process model and migrate the backlog into it." },
      { id: 'B', text: "Create an inherited process from Scrum and add the fields, states and rules to the inherited one." },
      { id: 'C', text: "Create a new work item type in the system Scrum process and add the fields to that type." },
      { id: 'D', text: "Create the fields as extension-defined custom controls on the existing Product Backlog Item form." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an inherited process from the default Scrum or Agile process and add the custom fields, states, and rules to the inherited process. System process models in Azure Boards (Basic, Agile, Scrum, CMMI) are locked against direct editing. Customizations must be made by creating an inherited process, which allows adding custom work item types, states, rules, and fields while receiving upstream platform updates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/work/manage-process",
    tags: ["Azure Boards","Azure Boards Customization","Resilience Failure"]
  },
  {
    id: "azure-az400-256",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Build a hierarchical Area Path tree and map each team to its own Area and Iteration Paths." },
      { id: 'B', text: "Build one project per team so each backlog is isolated, and roll them up with a cross-project query." },
      { id: 'C', text: "Build one team per repository and let each team's backlog default to the root Area Path." },
      { id: 'D', text: "Build fifty separate boards in one team and filter each with a saved work item query." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization","Area Paths","Dr Failover"]
  },
  {
    id: "azure-az400-257",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Build one team per repository and let each team's backlog default to the root Area Path." },
      { id: 'B', text: "Build a hierarchical Area Path tree and map each team to its own Area and Iteration Paths." },
      { id: 'C', text: "Build one project per team so each backlog is isolated, and roll them up with a cross-project query." },
      { id: 'D', text: "Build fifty separate boards in one team and filter each with a saved work item query." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization","Area Paths","High Load Scale"]
  },
  {
    id: "azure-az400-258",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Build a hierarchical Area Path tree and map each team to its own Area and Iteration Paths." },
      { id: 'B', text: "Build one project per team so each backlog is isolated, and roll them up with a cross-project query." },
      { id: 'C', text: "Build one team per repository and let each team's backlog default to the root Area Path." },
      { id: 'D', text: "Build fifty separate boards in one team and filter each with a saved work item query." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization","Area Paths","Security Compliance"]
  },
  {
    id: "azure-az400-259",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Build a hierarchical Area Path tree and map each team to its own Area and Iteration Paths." },
      { id: 'B', text: "Build one project per team so each backlog is isolated, and roll them up with a cross-project query." },
      { id: 'C', text: "Build one team per repository and let each team's backlog default to the root Area Path." },
      { id: 'D', text: "Build fifty separate boards in one team and filter each with a saved work item query." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization","Area Paths","Hybrid Migration"]
  },
  {
    id: "azure-az400-260",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Team and Area Path Hierarchy: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to organize fifty distinct agile feature teams within a single Azure DevOps project so each team manages its own backlog while sharing a unified project backlog.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Build one project per team so each backlog is isolated, and roll them up with a cross-project query." },
      { id: 'B', text: "Build a hierarchical Area Path tree and map each team to its own Area and Iteration Paths." },
      { id: 'C', text: "Build fifty separate boards in one team and filter each with a saved work item query." },
      { id: 'D', text: "Build one team per repository and let each team's backlog default to the root Area Path." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a hierarchical Area Path structure matching the organization and define dedicated teams mapped to their respective Area Paths and Iteration Paths. Azure DevOps uses Area Paths to partition work items among multiple teams within a single project. Configuring hierarchical Area Paths and mapping each team to its specific path allows autonomous team-level sprint backlogs while enabling executive portfolio rollups across the parent area.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/organizations/settings/about-teams-and-settings",
    tags: ["Project Organization","Area Paths","Resilience Failure"]
  },
  {
    id: "azure-az400-261",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Build a dashboard from the Analytics widgets: cumulative flow, velocity and cycle time." },
      { id: 'B', text: "Build a Power BI report over the Analytics OData feed and refresh it once each night." },
      { id: 'C', text: "Build a set of saved work item queries and chart each one on the team's home page." },
      { id: 'D', text: "Build a delivery plan across the teams and read the sprint progress bars it renders." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards","Dashboard Widgets","Dr Failover"]
  },
  {
    id: "azure-az400-262",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Build a set of saved work item queries and chart each one on the team's home page." },
      { id: 'B', text: "Build a dashboard from the Analytics widgets: cumulative flow, velocity and cycle time." },
      { id: 'C', text: "Build a Power BI report over the Analytics OData feed and refresh it once each night." },
      { id: 'D', text: "Build a delivery plan across the teams and read the sprint progress bars it renders." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards","Dashboard Widgets","High Load Scale"]
  },
  {
    id: "azure-az400-263",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Build a dashboard from the Analytics widgets: cumulative flow, velocity and cycle time." },
      { id: 'B', text: "Build a Power BI report over the Analytics OData feed and refresh it once each night." },
      { id: 'C', text: "Build a set of saved work item queries and chart each one on the team's home page." },
      { id: 'D', text: "Build a delivery plan across the teams and read the sprint progress bars it renders." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards","Dashboard Widgets","Security Compliance"]
  },
  {
    id: "azure-az400-264",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Build a set of saved work item queries and chart each one on the team's home page." },
      { id: 'B', text: "Build a dashboard from the Analytics widgets: cumulative flow, velocity and cycle time." },
      { id: 'C', text: "Build a Power BI report over the Analytics OData feed and refresh it once each night." },
      { id: 'D', text: "Build a delivery plan across the teams and read the sprint progress bars it renders." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards","Dashboard Widgets","Hybrid Migration"]
  },
  {
    id: "azure-az400-265",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Dashboard Widgets and Analytics: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to provide development managers and scrum masters with real-time visibility into sprint burndown, team velocity, and cycle time bottlenecks.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Build a set of saved work item queries and chart each one on the team's home page." },
      { id: 'B', text: "Build a Power BI report over the Analytics OData feed and refresh it once each night." },
      { id: 'C', text: "Build a delivery plan across the teams and read the sprint progress bars it renders." },
      { id: 'D', text: "Build a dashboard from the Analytics widgets: cumulative flow, velocity and cycle time." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Build custom Azure DevOps Dashboards incorporating Analytics widgets such as Cumulative Flow Diagrams (CFD), Velocity, and Cycle Time. Azure DevOps Dashboards provide pre-built widgets powered by Azure DevOps Analytics. Cumulative Flow Diagrams (CFD) visualize work-in-progress (WIP) bottlenecks, Velocity widgets track completed story points per sprint, and Cycle Time widgets measure elapsed delivery duration.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/widget-catalog",
    tags: ["DevOps Dashboards","Dashboard Widgets","Resilience Failure"]
  },
  {
    id: "azure-az400-266",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Configure service hooks to the Teams webhook, or install the Azure DevOps app for Teams." },
      { id: 'B', text: "Configure a notification subscription for the team and let each member forward it to Teams." },
      { id: 'C', text: "Configure an Azure Monitor alert on the pipeline's failure metric with a Teams action group." },
      { id: 'D', text: "Configure a scheduled pipeline that queries the build REST API and posts a Teams card." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management","Service Hooks","Dr Failover"]
  },
  {
    id: "azure-az400-267",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Configure an Azure Monitor alert on the pipeline's failure metric with a Teams action group." },
      { id: 'B', text: "Configure service hooks to the Teams webhook, or install the Azure DevOps app for Teams." },
      { id: 'C', text: "Configure a notification subscription for the team and let each member forward it to Teams." },
      { id: 'D', text: "Configure a scheduled pipeline that queries the build REST API and posts a Teams card." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management","Service Hooks","High Load Scale"]
  },
  {
    id: "azure-az400-268",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Configure a notification subscription for the team and let each member forward it to Teams." },
      { id: 'B', text: "Configure service hooks to the Teams webhook, or install the Azure DevOps app for Teams." },
      { id: 'C', text: "Configure a scheduled pipeline that queries the build REST API and posts a Teams card." },
      { id: 'D', text: "Configure an Azure Monitor alert on the pipeline's failure metric with a Teams action group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management","Service Hooks","Security Compliance"]
  },
  {
    id: "azure-az400-269",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Configure a notification subscription for the team and let each member forward it to Teams." },
      { id: 'B', text: "Configure service hooks to the Teams webhook, or install the Azure DevOps app for Teams." },
      { id: 'C', text: "Configure a scheduled pipeline that queries the build REST API and posts a Teams card." },
      { id: 'D', text: "Configure an Azure Monitor alert on the pipeline's failure metric with a Teams action group." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management","Service Hooks","Hybrid Migration"]
  },
  {
    id: "azure-az400-270",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "Azure DevOps Notification Subscriptions: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to alert an on-call engineering team in Microsoft Teams immediately when a build pipeline fails or a pull request reviewer is requested.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Configure an Azure Monitor alert on the pipeline's failure metric with a Teams action group." },
      { id: 'B', text: "Configure a notification subscription for the team and let each member forward it to Teams." },
      { id: 'C', text: "Configure a scheduled pipeline that queries the build REST API and posts a Teams card." },
      { id: 'D', text: "Configure service hooks to the Teams webhook, or install the Azure DevOps app for Teams." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Azure DevOps Service Hooks targeting the Microsoft Teams webhook URL or install the Azure DevOps app for Microsoft Teams. Azure DevOps Service Hooks publish real-time events (build completed, pull request created, work item updated) directly to external collaboration tools like Microsoft Teams and Slack, delivering immediate actionable notifications to engineers where they collaborate.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/service-hooks/services/teams",
    tags: ["Notification Management","Service Hooks","Resilience Failure"]
  },
  {
    id: "azure-az400-271",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Install the GitHub Enterprise service connection and link work items with `#&lt;ID&gt;` in commits." },
      { id: 'B', text: "Install a GitHub Actions workflow that calls the Azure Boards REST API on each push event." },
      { id: 'C', text: "Install the Azure Pipelines app for GitHub and enable work item linking on the build service." },
      { id: 'D', text: "Install the Azure Boards app for GitHub and link work items with `AB#&lt;ID&gt;` in commit messages." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration","GitHub Azure Boards","Dr Failover"]
  },
  {
    id: "azure-az400-272",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Install the Azure Pipelines app for GitHub and enable work item linking on the build service." },
      { id: 'B', text: "Install the Azure Boards app for GitHub and link work items with `AB#&lt;ID&gt;` in commit messages." },
      { id: 'C', text: "Install the GitHub Enterprise service connection and link work items with `#&lt;ID&gt;` in commits." },
      { id: 'D', text: "Install a GitHub Actions workflow that calls the Azure Boards REST API on each push event." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration","GitHub Azure Boards","High Load Scale"]
  },
  {
    id: "azure-az400-273",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Install the Azure Boards app for GitHub and link work items with `AB#&lt;ID&gt;` in commit messages." },
      { id: 'B', text: "Install the GitHub Enterprise service connection and link work items with `#&lt;ID&gt;` in commits." },
      { id: 'C', text: "Install the Azure Pipelines app for GitHub and enable work item linking on the build service." },
      { id: 'D', text: "Install a GitHub Actions workflow that calls the Azure Boards REST API on each push event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration","GitHub Azure Boards","Security Compliance"]
  },
  {
    id: "azure-az400-274",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Install the Azure Pipelines app for GitHub and enable work item linking on the build service." },
      { id: 'B', text: "Install the GitHub Enterprise service connection and link work items with `#&lt;ID&gt;` in commits." },
      { id: 'C', text: "Install a GitHub Actions workflow that calls the Azure Boards REST API on each push event." },
      { id: 'D', text: "Install the Azure Boards app for GitHub and link work items with `AB#&lt;ID&gt;` in commit messages." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration","GitHub Azure Boards","Hybrid Migration"]
  },
  {
    id: "azure-az400-275",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d1",
    domainName: "Configure processes and communications",
    title: "GitHub and Azure Boards Integration: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to link GitHub commits, pull requests, and branches automatically to Azure Boards work items using commit message syntax (e.g., AB#123).",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Install the Azure Pipelines app for GitHub and enable work item linking on the build service." },
      { id: 'B', text: "Install the Azure Boards app for GitHub and link work items with `AB#&lt;ID&gt;` in commit messages." },
      { id: 'C', text: "Install the GitHub Enterprise service connection and link work items with `#&lt;ID&gt;` in commits." },
      { id: 'D', text: "Install a GitHub Actions workflow that calls the Azure Boards REST API on each push event." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Install the Azure Boards app for GitHub and connect GitHub repositories to the Azure DevOps project, referencing work items using `AB#&lt;ID&gt;`. The Azure Boards app for GitHub seamlessly integrates GitHub repositories with Azure Boards. When developers reference `AB#&lt;work-item-id&gt;` in commit messages, branch names, or pull request descriptions, Azure Boards automatically links the code artifacts to the work item and transitions states upon merge.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/devops/boards/github/connect-to-github",
    tags: ["Cross-Tool Integration","GitHub Azure Boards","Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_11;
