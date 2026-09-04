export const AZURE_AZ104_QUESTIONS_19 = [
  {
    id: "az-104-451",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Metrics vs Logs: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Observability to configure automated alerts that evaluate virtual machine CPU Percentage every 1 minute with sub-minute alert latency for real-time alerting.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Time-series numerical metrics vs detailed diagnostic log telemetry is under evaluation.",
    options: [
      { id: 'A', text: "Write a custom script that reads the Windows Event Viewer via RDP." },
      { id: 'B', text: "Configure an Azure Log Analytics scheduled query alert running every 24 hours." },
      { id: 'C', text: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric." },
      { id: 'D', text: "Review the Azure Activity Log manually at the end of each shift." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric. Azure Monitor Metrics are numerical values that describe some aspect of a system at a particular point in time, stored in a lightweight time-series database. Metric alerts evaluate frequently (down to every 1 minute) and trigger with near-instantaneous latency compared to complex Log Analytics query alerts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-platform-metrics",
    tags: ["Azure Observability", "Metrics", "Dr Failover"]
  },
  {
    id: "az-104-452",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Metrics vs Logs: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Observability to configure automated alerts that evaluate virtual machine CPU Percentage every 1 minute with sub-minute alert latency for real-time alerting.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Time-series numerical metrics vs detailed diagnostic log telemetry is under evaluation.",
    options: [
      { id: 'A', text: "Review the Azure Activity Log manually at the end of each shift." },
      { id: 'B', text: "Write a custom script that reads the Windows Event Viewer via RDP." },
      { id: 'C', text: "Configure an Azure Log Analytics scheduled query alert running every 24 hours." },
      { id: 'D', text: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric. Azure Monitor Metrics are numerical values that describe some aspect of a system at a particular point in time, stored in a lightweight time-series database. Metric alerts evaluate frequently (down to every 1 minute) and trigger with near-instantaneous latency compared to complex Log Analytics query alerts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-platform-metrics",
    tags: ["Azure Observability", "Metrics", "High Load Scale"]
  },
  {
    id: "az-104-453",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Metrics vs Logs: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Observability to configure automated alerts that evaluate virtual machine CPU Percentage every 1 minute with sub-minute alert latency for real-time alerting.",
    question: "Which solution properly implements these mandatory security and governance controls? Time-series numerical metrics vs detailed diagnostic log telemetry is under evaluation.",
    options: [
      { id: 'A', text: "Configure an Azure Log Analytics scheduled query alert running every 24 hours." },
      { id: 'B', text: "Write a custom script that reads the Windows Event Viewer via RDP." },
      { id: 'C', text: "Review the Azure Activity Log manually at the end of each shift." },
      { id: 'D', text: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric. Azure Monitor Metrics are numerical values that describe some aspect of a system at a particular point in time, stored in a lightweight time-series database. Metric alerts evaluate frequently (down to every 1 minute) and trigger with near-instantaneous latency compared to complex Log Analytics query alerts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-platform-metrics",
    tags: ["Azure Observability", "Metrics", "Security Compliance"]
  },
  {
    id: "az-104-454",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Metrics vs Logs: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Observability to configure automated alerts that evaluate virtual machine CPU Percentage every 1 minute with sub-minute alert latency for real-time alerting.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Time-series numerical metrics vs detailed diagnostic log telemetry is under evaluation.",
    options: [
      { id: 'A', text: "Write a custom script that reads the Windows Event Viewer via RDP." },
      { id: 'B', text: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric." },
      { id: 'C', text: "Review the Azure Activity Log manually at the end of each shift." },
      { id: 'D', text: "Configure an Azure Log Analytics scheduled query alert running every 24 hours." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric. Azure Monitor Metrics are numerical values that describe some aspect of a system at a particular point in time, stored in a lightweight time-series database. Metric alerts evaluate frequently (down to every 1 minute) and trigger with near-instantaneous latency compared to complex Log Analytics query alerts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-platform-metrics",
    tags: ["Azure Observability", "Metrics", "Hybrid Migration"]
  },
  {
    id: "az-104-455",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Metrics vs Logs: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Observability to configure automated alerts that evaluate virtual machine CPU Percentage every 1 minute with sub-minute alert latency for real-time alerting.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Time-series numerical metrics vs detailed diagnostic log telemetry is under evaluation.",
    options: [
      { id: 'A', text: "Review the Azure Activity Log manually at the end of each shift." },
      { id: 'B', text: "Write a custom script that reads the Windows Event Viewer via RDP." },
      { id: 'C', text: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric." },
      { id: 'D', text: "Configure an Azure Log Analytics scheduled query alert running every 24 hours." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule evaluating the CPU Percentage metric. Azure Monitor Metrics are numerical values that describe some aspect of a system at a particular point in time, stored in a lightweight time-series database. Metric alerts evaluate frequently (down to every 1 minute) and trigger with near-instantaneous latency compared to complex Log Analytics query alerts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-platform-metrics",
    tags: ["Azure Observability", "Metrics", "Resilience Failure"]
  },
  {
    id: "az-104-456",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Log Analytics Kusto Query Language (KQL): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Observability to query error logs across 100 virtual machines to identify all HTTP 500 status codes occurring in the last 2 hours grouped by computer name.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Kusto Query Language (KQL) for querying diagnostic logs across resources is under evaluation.",
    options: [
      { id: 'A', text: "Use the Azure Pricing Calculator to view operational error rates." },
      { id: 'B', text: "Export the entire subscription Activity Log to a spreadsheet for manual searching." },
      { id: 'C', text: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace." },
      { id: 'D', text: "Open the command prompt on each virtual machine and grep local text files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace. Log Analytics workspaces collect telemetry from Azure resources, VMs, and applications. Administrators write queries in Kusto Query Language (KQL)—utilizing operators like , , and —to extract insights, build dashboards, and trigger automated alerts from billions of records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial",
    tags: ["Azure Observability", "KQL", "Dr Failover"]
  },
  {
    id: "az-104-457",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Log Analytics Kusto Query Language (KQL): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Observability to query error logs across 100 virtual machines to identify all HTTP 500 status codes occurring in the last 2 hours grouped by computer name.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Kusto Query Language (KQL) for querying diagnostic logs across resources is under evaluation.",
    options: [
      { id: 'A', text: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace." },
      { id: 'B', text: "Open the command prompt on each virtual machine and grep local text files." },
      { id: 'C', text: "Export the entire subscription Activity Log to a spreadsheet for manual searching." },
      { id: 'D', text: "Use the Azure Pricing Calculator to view operational error rates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace. Log Analytics workspaces collect telemetry from Azure resources, VMs, and applications. Administrators write queries in Kusto Query Language (KQL)—utilizing operators like , , and —to extract insights, build dashboards, and trigger automated alerts from billions of records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial",
    tags: ["Azure Observability", "KQL", "High Load Scale"]
  },
  {
    id: "az-104-458",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Log Analytics Kusto Query Language (KQL): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Observability to query error logs across 100 virtual machines to identify all HTTP 500 status codes occurring in the last 2 hours grouped by computer name.",
    question: "Which solution properly implements these mandatory security and governance controls? Kusto Query Language (KQL) for querying diagnostic logs across resources is under evaluation.",
    options: [
      { id: 'A', text: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace." },
      { id: 'B', text: "Open the command prompt on each virtual machine and grep local text files." },
      { id: 'C', text: "Use the Azure Pricing Calculator to view operational error rates." },
      { id: 'D', text: "Export the entire subscription Activity Log to a spreadsheet for manual searching." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace. Log Analytics workspaces collect telemetry from Azure resources, VMs, and applications. Administrators write queries in Kusto Query Language (KQL)—utilizing operators like , , and —to extract insights, build dashboards, and trigger automated alerts from billions of records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial",
    tags: ["Azure Observability", "KQL", "Security Compliance"]
  },
  {
    id: "az-104-459",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Log Analytics Kusto Query Language (KQL): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Observability to query error logs across 100 virtual machines to identify all HTTP 500 status codes occurring in the last 2 hours grouped by computer name.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Kusto Query Language (KQL) for querying diagnostic logs across resources is under evaluation.",
    options: [
      { id: 'A', text: "Use the Azure Pricing Calculator to view operational error rates." },
      { id: 'B', text: "Open the command prompt on each virtual machine and grep local text files." },
      { id: 'C', text: "Export the entire subscription Activity Log to a spreadsheet for manual searching." },
      { id: 'D', text: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace. Log Analytics workspaces collect telemetry from Azure resources, VMs, and applications. Administrators write queries in Kusto Query Language (KQL)—utilizing operators like , , and —to extract insights, build dashboards, and trigger automated alerts from billions of records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial",
    tags: ["Azure Observability", "KQL", "Hybrid Migration"]
  },
  {
    id: "az-104-460",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Log Analytics Kusto Query Language (KQL): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Observability to query error logs across 100 virtual machines to identify all HTTP 500 status codes occurring in the last 2 hours grouped by computer name.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Kusto Query Language (KQL) for querying diagnostic logs across resources is under evaluation.",
    options: [
      { id: 'A', text: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace." },
      { id: 'B', text: "Use the Azure Pricing Calculator to view operational error rates." },
      { id: 'C', text: "Export the entire subscription Activity Log to a spreadsheet for manual searching." },
      { id: 'D', text: "Open the command prompt on each virtual machine and grep local text files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute a Kusto Query Language (KQL) query in an Azure Log Analytics workspace. Log Analytics workspaces collect telemetry from Azure resources, VMs, and applications. Administrators write queries in Kusto Query Language (KQL)—utilizing operators like , , and —to extract insights, build dashboards, and trigger automated alerts from billions of records.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial",
    tags: ["Azure Observability", "KQL", "Resilience Failure"]
  },
  {
    id: "az-104-461",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Alert Processing Rules and Action Groups: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Alerting to suppress all alert notifications and email pages during a planned Saturday night maintenance window without disabling the underlying alert rules.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Action Groups and Alert Processing Rules for alert suppression during maintenance is under evaluation.",
    options: [
      { id: 'A', text: "Disable all network interface cards across the environment during maintenance." },
      { id: 'B', text: "Delete all Azure Monitor alert rules on Friday and recreate them on Sunday." },
      { id: 'C', text: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule." },
      { id: 'D', text: "Remove all email addresses from the organization's corporate mail server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule. Alert Processing Rules in Azure Monitor allow applying actions on fired alerts, such as adding action groups or suppressing notifications. Configuring a notification suppression schedule prevents emails, SMS, and webhooks from firing during planned maintenance windows without touching alert rules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-processing-rules",
    tags: ["Azure Alerting", "Alerting", "Dr Failover"]
  },
  {
    id: "az-104-462",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Alert Processing Rules and Action Groups: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Alerting to suppress all alert notifications and email pages during a planned Saturday night maintenance window without disabling the underlying alert rules.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Action Groups and Alert Processing Rules for alert suppression during maintenance is under evaluation.",
    options: [
      { id: 'A', text: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule." },
      { id: 'B', text: "Disable all network interface cards across the environment during maintenance." },
      { id: 'C', text: "Delete all Azure Monitor alert rules on Friday and recreate them on Sunday." },
      { id: 'D', text: "Remove all email addresses from the organization's corporate mail server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule. Alert Processing Rules in Azure Monitor allow applying actions on fired alerts, such as adding action groups or suppressing notifications. Configuring a notification suppression schedule prevents emails, SMS, and webhooks from firing during planned maintenance windows without touching alert rules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-processing-rules",
    tags: ["Azure Alerting", "Alerting", "High Load Scale"]
  },
  {
    id: "az-104-463",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Alert Processing Rules and Action Groups: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Alerting to suppress all alert notifications and email pages during a planned Saturday night maintenance window without disabling the underlying alert rules.",
    question: "Which solution properly implements these mandatory security and governance controls? Action Groups and Alert Processing Rules for alert suppression during maintenance is under evaluation.",
    options: [
      { id: 'A', text: "Delete all Azure Monitor alert rules on Friday and recreate them on Sunday." },
      { id: 'B', text: "Disable all network interface cards across the environment during maintenance." },
      { id: 'C', text: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule." },
      { id: 'D', text: "Remove all email addresses from the organization's corporate mail server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule. Alert Processing Rules in Azure Monitor allow applying actions on fired alerts, such as adding action groups or suppressing notifications. Configuring a notification suppression schedule prevents emails, SMS, and webhooks from firing during planned maintenance windows without touching alert rules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-processing-rules",
    tags: ["Azure Alerting", "Alerting", "Security Compliance"]
  },
  {
    id: "az-104-464",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Alert Processing Rules and Action Groups: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Alerting to suppress all alert notifications and email pages during a planned Saturday night maintenance window without disabling the underlying alert rules.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Action Groups and Alert Processing Rules for alert suppression during maintenance is under evaluation.",
    options: [
      { id: 'A', text: "Delete all Azure Monitor alert rules on Friday and recreate them on Sunday." },
      { id: 'B', text: "Disable all network interface cards across the environment during maintenance." },
      { id: 'C', text: "Remove all email addresses from the organization's corporate mail server." },
      { id: 'D', text: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule. Alert Processing Rules in Azure Monitor allow applying actions on fired alerts, such as adding action groups or suppressing notifications. Configuring a notification suppression schedule prevents emails, SMS, and webhooks from firing during planned maintenance windows without touching alert rules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-processing-rules",
    tags: ["Azure Alerting", "Alerting", "Hybrid Migration"]
  },
  {
    id: "az-104-465",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Alert Processing Rules and Action Groups: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Alerting to suppress all alert notifications and email pages during a planned Saturday night maintenance window without disabling the underlying alert rules.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Action Groups and Alert Processing Rules for alert suppression during maintenance is under evaluation.",
    options: [
      { id: 'A', text: "Disable all network interface cards across the environment during maintenance." },
      { id: 'B', text: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule." },
      { id: 'C', text: "Remove all email addresses from the organization's corporate mail server." },
      { id: 'D', text: "Delete all Azure Monitor alert rules on Friday and recreate them on Sunday." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an Alert Processing Rule configured to suppress notifications during the maintenance schedule. Alert Processing Rules in Azure Monitor allow applying actions on fired alerts, such as adding action groups or suppressing notifications. Configuring a notification suppression schedule prevents emails, SMS, and webhooks from firing during planned maintenance windows without touching alert rules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-processing-rules",
    tags: ["Azure Alerting", "Alerting", "Resilience Failure"]
  },
  {
    id: "az-104-466",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Application Insights (APM): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Application Performance Monitoring to diagnose slow response times in a web application by tracing an HTTP request across frontend services, backend microservices, and database dependency calls.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Application Insights live metrics and distributed tracing is under evaluation.",
    options: [
      { id: 'A', text: "Enable Azure Application Insights with distributed tracing and Application Map." },
      { id: 'B', text: "Increase the size of the virtual machine disk storage." },
      { id: 'C', text: "Review virtual machine operating system memory dump files." },
      { id: 'D', text: "Install an external network packet capture tool on client web browsers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Azure Application Insights with distributed tracing and Application Map. Application Insights, a feature of Azure Monitor, is an Application Performance Management (APM) service. It automatically detects performance anomalies, provides distributed tracing to trace requests end-to-end across microservices, and provides an Application Map detailing service dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Performance Monitoring", "App Insights", "Dr Failover"]
  },
  {
    id: "az-104-467",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Application Insights (APM): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Application Performance Monitoring to diagnose slow response times in a web application by tracing an HTTP request across frontend services, backend microservices, and database dependency calls.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Application Insights live metrics and distributed tracing is under evaluation.",
    options: [
      { id: 'A', text: "Increase the size of the virtual machine disk storage." },
      { id: 'B', text: "Enable Azure Application Insights with distributed tracing and Application Map." },
      { id: 'C', text: "Review virtual machine operating system memory dump files." },
      { id: 'D', text: "Install an external network packet capture tool on client web browsers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Azure Application Insights with distributed tracing and Application Map. Application Insights, a feature of Azure Monitor, is an Application Performance Management (APM) service. It automatically detects performance anomalies, provides distributed tracing to trace requests end-to-end across microservices, and provides an Application Map detailing service dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Performance Monitoring", "App Insights", "High Load Scale"]
  },
  {
    id: "az-104-468",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Application Insights (APM): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Application Performance Monitoring to diagnose slow response times in a web application by tracing an HTTP request across frontend services, backend microservices, and database dependency calls.",
    question: "Which solution properly implements these mandatory security and governance controls? Application Insights live metrics and distributed tracing is under evaluation.",
    options: [
      { id: 'A', text: "Install an external network packet capture tool on client web browsers." },
      { id: 'B', text: "Increase the size of the virtual machine disk storage." },
      { id: 'C', text: "Review virtual machine operating system memory dump files." },
      { id: 'D', text: "Enable Azure Application Insights with distributed tracing and Application Map." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Azure Application Insights with distributed tracing and Application Map. Application Insights, a feature of Azure Monitor, is an Application Performance Management (APM) service. It automatically detects performance anomalies, provides distributed tracing to trace requests end-to-end across microservices, and provides an Application Map detailing service dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Performance Monitoring", "App Insights", "Security Compliance"]
  },
  {
    id: "az-104-469",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Application Insights (APM): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Application Performance Monitoring to diagnose slow response times in a web application by tracing an HTTP request across frontend services, backend microservices, and database dependency calls.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Application Insights live metrics and distributed tracing is under evaluation.",
    options: [
      { id: 'A', text: "Review virtual machine operating system memory dump files." },
      { id: 'B', text: "Install an external network packet capture tool on client web browsers." },
      { id: 'C', text: "Increase the size of the virtual machine disk storage." },
      { id: 'D', text: "Enable Azure Application Insights with distributed tracing and Application Map." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Azure Application Insights with distributed tracing and Application Map. Application Insights, a feature of Azure Monitor, is an Application Performance Management (APM) service. It automatically detects performance anomalies, provides distributed tracing to trace requests end-to-end across microservices, and provides an Application Map detailing service dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Performance Monitoring", "App Insights", "Hybrid Migration"]
  },
  {
    id: "az-104-470",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Monitor Application Insights (APM): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Application Performance Monitoring to diagnose slow response times in a web application by tracing an HTTP request across frontend services, backend microservices, and database dependency calls.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Application Insights live metrics and distributed tracing is under evaluation.",
    options: [
      { id: 'A', text: "Enable Azure Application Insights with distributed tracing and Application Map." },
      { id: 'B', text: "Review virtual machine operating system memory dump files." },
      { id: 'C', text: "Increase the size of the virtual machine disk storage." },
      { id: 'D', text: "Install an external network packet capture tool on client web browsers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Azure Application Insights with distributed tracing and Application Map. Application Insights, a feature of Azure Monitor, is an Application Performance Management (APM) service. It automatically detects performance anomalies, provides distributed tracing to trace requests end-to-end across microservices, and provides an Application Map detailing service dependencies.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview",
    tags: ["Application Performance Monitoring", "App Insights", "Resilience Failure"]
  },
  {
    id: "az-104-471",
    difficulty: "hard",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Activity Log vs Resource Diagnostic Logs: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The administrator configures Azure Logging to audit which specific administrator stopped an Azure Virtual Machine and deleted a production subnet yesterday afternoon.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Subscription control-plane Activity Logs vs resource data-plane Diagnostic Logs is under evaluation.",
    options: [
      { id: 'A', text: "Inspect the virtual machine guest operating system Windows Event Log." },
      { id: 'B', text: "Review the Azure Storage account access keys rotation history." },
      { id: 'C', text: "Search the Azure Activity Log filtering by operation name and caller identity." },
      { id: 'D', text: "Check the Azure Pricing Calculator historical logs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Search the Azure Activity Log filtering by operation name and caller identity. The Azure Activity Log is a subscription-level log that provides insight into subscription-level events (control-plane operations) that occurred in Azure. It records what resources were created, updated, or deleted, who initiated the operation (the caller), and the timestamp of the event.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log",
    tags: ["Azure Logging", "Activity Log", "Dr Failover"]
  },
  {
    id: "az-104-472",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Activity Log vs Resource Diagnostic Logs: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The administrator configures Azure Logging to audit which specific administrator stopped an Azure Virtual Machine and deleted a production subnet yesterday afternoon.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Subscription control-plane Activity Logs vs resource data-plane Diagnostic Logs is under evaluation.",
    options: [
      { id: 'A', text: "Check the Azure Pricing Calculator historical logs." },
      { id: 'B', text: "Review the Azure Storage account access keys rotation history." },
      { id: 'C', text: "Search the Azure Activity Log filtering by operation name and caller identity." },
      { id: 'D', text: "Inspect the virtual machine guest operating system Windows Event Log." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Search the Azure Activity Log filtering by operation name and caller identity. The Azure Activity Log is a subscription-level log that provides insight into subscription-level events (control-plane operations) that occurred in Azure. It records what resources were created, updated, or deleted, who initiated the operation (the caller), and the timestamp of the event.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log",
    tags: ["Azure Logging", "Activity Log", "High Load Scale"]
  },
  {
    id: "az-104-473",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Activity Log vs Resource Diagnostic Logs: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The administrator configures Azure Logging to audit which specific administrator stopped an Azure Virtual Machine and deleted a production subnet yesterday afternoon.",
    question: "Which solution properly implements these mandatory security and governance controls? Subscription control-plane Activity Logs vs resource data-plane Diagnostic Logs is under evaluation.",
    options: [
      { id: 'A', text: "Review the Azure Storage account access keys rotation history." },
      { id: 'B', text: "Inspect the virtual machine guest operating system Windows Event Log." },
      { id: 'C', text: "Search the Azure Activity Log filtering by operation name and caller identity." },
      { id: 'D', text: "Check the Azure Pricing Calculator historical logs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Search the Azure Activity Log filtering by operation name and caller identity. The Azure Activity Log is a subscription-level log that provides insight into subscription-level events (control-plane operations) that occurred in Azure. It records what resources were created, updated, or deleted, who initiated the operation (the caller), and the timestamp of the event.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log",
    tags: ["Azure Logging", "Activity Log", "Security Compliance"]
  },
  {
    id: "az-104-474",
    difficulty: "easy",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Activity Log vs Resource Diagnostic Logs: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The administrator configures Azure Logging to audit which specific administrator stopped an Azure Virtual Machine and deleted a production subnet yesterday afternoon.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Subscription control-plane Activity Logs vs resource data-plane Diagnostic Logs is under evaluation.",
    options: [
      { id: 'A', text: "Inspect the virtual machine guest operating system Windows Event Log." },
      { id: 'B', text: "Search the Azure Activity Log filtering by operation name and caller identity." },
      { id: 'C', text: "Check the Azure Pricing Calculator historical logs." },
      { id: 'D', text: "Review the Azure Storage account access keys rotation history." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Search the Azure Activity Log filtering by operation name and caller identity. The Azure Activity Log is a subscription-level log that provides insight into subscription-level events (control-plane operations) that occurred in Azure. It records what resources were created, updated, or deleted, who initiated the operation (the caller), and the timestamp of the event.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log",
    tags: ["Azure Logging", "Activity Log", "Hybrid Migration"]
  },
  {
    id: "az-104-475",
    difficulty: "medium",
    certId: "azure-az104",
    domainId: "d5",
    domainName: "Monitor and maintain Azure resources",
    title: "Azure Activity Log vs Resource Diagnostic Logs: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The administrator configures Azure Logging to audit which specific administrator stopped an Azure Virtual Machine and deleted a production subnet yesterday afternoon.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Subscription control-plane Activity Logs vs resource data-plane Diagnostic Logs is under evaluation.",
    options: [
      { id: 'A', text: "Inspect the virtual machine guest operating system Windows Event Log." },
      { id: 'B', text: "Review the Azure Storage account access keys rotation history." },
      { id: 'C', text: "Search the Azure Activity Log filtering by operation name and caller identity." },
      { id: 'D', text: "Check the Azure Pricing Calculator historical logs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Search the Azure Activity Log filtering by operation name and caller identity. The Azure Activity Log is a subscription-level log that provides insight into subscription-level events (control-plane operations) that occurred in Azure. It records what resources were created, updated, or deleted, who initiated the operation (the caller), and the timestamp of the event.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/activity-log",
    tags: ["Azure Logging", "Activity Log", "Resilience Failure"]
  }
];

export default AZURE_AZ104_QUESTIONS_19;
