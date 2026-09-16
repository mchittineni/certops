export const AZURE_AZ400_QUESTIONS_20 = [
  {
    id: "azure-az400-476",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Send the logs to a Log Analytics workspace and query them across resources with KQL." },
      { id: 'B', text: "Send the logs to an Event Hub and query them from a consumer group as they arrive." },
      { id: 'C', text: "Send the logs to a storage account and query the blobs with an on-demand Data Explorer pool." },
      { id: 'D', text: "Send the logs to Application Insights and read the per-resource metrics it aggregates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics","Kusto Query Language","Dr Failover"]
  },
  {
    id: "azure-az400-477",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Send the logs to a Log Analytics workspace and query them across resources with KQL." },
      { id: 'B', text: "Send the logs to a storage account and query the blobs with an on-demand Data Explorer pool." },
      { id: 'C', text: "Send the logs to Application Insights and read the per-resource metrics it aggregates." },
      { id: 'D', text: "Send the logs to an Event Hub and query them from a consumer group as they arrive." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics","Kusto Query Language","High Load Scale"]
  },
  {
    id: "azure-az400-478",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Send the logs to an Event Hub and query them from a consumer group as they arrive." },
      { id: 'B', text: "Send the logs to Application Insights and read the per-resource metrics it aggregates." },
      { id: 'C', text: "Send the logs to a storage account and query the blobs with an on-demand Data Explorer pool." },
      { id: 'D', text: "Send the logs to a Log Analytics workspace and query them across resources with KQL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics","Kusto Query Language","Security Compliance"]
  },
  {
    id: "azure-az400-479",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Send the logs to a Log Analytics workspace and query them across resources with KQL." },
      { id: 'B', text: "Send the logs to a storage account and query the blobs with an on-demand Data Explorer pool." },
      { id: 'C', text: "Send the logs to Application Insights and read the per-resource metrics it aggregates." },
      { id: 'D', text: "Send the logs to an Event Hub and query them from a consumer group as they arrive." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics","Kusto Query Language","Hybrid Migration"]
  },
  {
    id: "azure-az400-480",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Send the logs to a storage account and query the blobs with an on-demand Data Explorer pool." },
      { id: 'B', text: "Send the logs to Application Insights and read the per-resource metrics it aggregates." },
      { id: 'C', text: "Send the logs to a Log Analytics workspace and query them across resources with KQL." },
      { id: 'D', text: "Send the logs to an Event Hub and query them from a consumer group as they arrive." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics","Kusto Query Language","Resilience Failure"]
  },
  {
    id: "azure-az400-481",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Create an Azure Monitor activity log alert bound to an action group with SMS and email notifications." },
      { id: 'B', text: "Create an Azure Monitor metric alert bound to an action group with SMS, email and an Automation webhook." },
      { id: 'C', text: "Create an autoscale rule on the response-time metric and let the scale event raise its own notice." },
      { id: 'D', text: "Create a workbook that charts the response-time percentile and pin it to the on-call team dashboard." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting","Alert Rules","Dr Failover"]
  },
  {
    id: "azure-az400-482",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Create an Azure Monitor metric alert bound to an action group with SMS, email and an Automation webhook." },
      { id: 'B', text: "Create a workbook that charts the response-time percentile and pin it to the on-call team dashboard." },
      { id: 'C', text: "Create an autoscale rule on the response-time metric and let the scale event raise its own notice." },
      { id: 'D', text: "Create an Azure Monitor activity log alert bound to an action group with SMS and email notifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting","Alert Rules","High Load Scale"]
  },
  {
    id: "azure-az400-483",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Create an Azure Monitor metric alert bound to an action group with SMS, email and an Automation webhook." },
      { id: 'B', text: "Create a workbook that charts the response-time percentile and pin it to the on-call team dashboard." },
      { id: 'C', text: "Create an autoscale rule on the response-time metric and let the scale event raise its own notice." },
      { id: 'D', text: "Create an Azure Monitor activity log alert bound to an action group with SMS and email notifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting","Alert Rules","Security Compliance"]
  },
  {
    id: "azure-az400-484",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Create an Azure Monitor activity log alert bound to an action group with SMS and email notifications." },
      { id: 'B', text: "Create a workbook that charts the response-time percentile and pin it to the on-call team dashboard." },
      { id: 'C', text: "Create an Azure Monitor metric alert bound to an action group with SMS, email and an Automation webhook." },
      { id: 'D', text: "Create an autoscale rule on the response-time metric and let the scale event raise its own notice." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting","Alert Rules","Hybrid Migration"]
  },
  {
    id: "azure-az400-485",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Create an Azure Monitor metric alert bound to an action group with SMS, email and an Automation webhook." },
      { id: 'B', text: "Create a workbook that charts the response-time percentile and pin it to the on-call team dashboard." },
      { id: 'C', text: "Create an autoscale rule on the response-time metric and let the scale event raise its own notice." },
      { id: 'D', text: "Create an Azure Monitor activity log alert bound to an action group with SMS and email notifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting","Alert Rules","Resilience Failure"]
  },
  {
    id: "azure-az400-486",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Configure Application Insights standard availability tests from five regions with certificate checks." },
      { id: 'B', text: "Configure Application Insights custom availability tests submitted from the build agent hourly." },
      { id: 'C', text: "Configure an Azure Monitor metric alert on the portal's own server response time metric." },
      { id: 'D', text: "Configure Azure Traffic Manager endpoint monitoring and alert when a region is marked degraded." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests","Availability Tests","Dr Failover"]
  },
  {
    id: "azure-az400-487",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Configure Application Insights standard availability tests from five regions with certificate checks." },
      { id: 'B', text: "Configure Azure Traffic Manager endpoint monitoring and alert when a region is marked degraded." },
      { id: 'C', text: "Configure Application Insights custom availability tests submitted from the build agent hourly." },
      { id: 'D', text: "Configure an Azure Monitor metric alert on the portal's own server response time metric." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests","Availability Tests","High Load Scale"]
  },
  {
    id: "azure-az400-488",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Configure Application Insights standard availability tests from five regions with certificate checks." },
      { id: 'B', text: "Configure Azure Traffic Manager endpoint monitoring and alert when a region is marked degraded." },
      { id: 'C', text: "Configure Application Insights custom availability tests submitted from the build agent hourly." },
      { id: 'D', text: "Configure an Azure Monitor metric alert on the portal's own server response time metric." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests","Availability Tests","Security Compliance"]
  },
  {
    id: "azure-az400-489",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Configure Application Insights custom availability tests submitted from the build agent hourly." },
      { id: 'B', text: "Configure an Azure Monitor metric alert on the portal's own server response time metric." },
      { id: 'C', text: "Configure Application Insights standard availability tests from five regions with certificate checks." },
      { id: 'D', text: "Configure Azure Traffic Manager endpoint monitoring and alert when a region is marked degraded." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests","Availability Tests","Hybrid Migration"]
  },
  {
    id: "azure-az400-490",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Configure Application Insights custom availability tests submitted from the build agent hourly." },
      { id: 'B', text: "Configure Azure Traffic Manager endpoint monitoring and alert when a region is marked degraded." },
      { id: 'C', text: "Configure an Azure Monitor metric alert on the portal's own server response time metric." },
      { id: 'D', text: "Configure Application Insights standard availability tests from five regions with certificate checks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests","Availability Tests","Resilience Failure"]
  },
  {
    id: "azure-az400-491",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Define the SLI as the availability figure the Azure status page publishes for the region each month." },
      { id: 'B', text: "Define the SLI as the mean response time of the App Service, alerting when it drifts above baseline." },
      { id: 'C', text: "Define the SLI in KQL as successful requests over total requests, and burn down the error budget in a workbook." },
      { id: 'D', text: "Define the SLI as the fraction of five-minute windows in which host CPU stayed under 80 percent." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics","SLIs and SLOs","Dr Failover"]
  },
  {
    id: "azure-az400-492",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Define the SLI in KQL as successful requests over total requests, and burn down the error budget in a workbook." },
      { id: 'B', text: "Define the SLI as the availability figure the Azure status page publishes for the region each month." },
      { id: 'C', text: "Define the SLI as the mean response time of the App Service, alerting when it drifts above baseline." },
      { id: 'D', text: "Define the SLI as the fraction of five-minute windows in which host CPU stayed under 80 percent." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics","SLIs and SLOs","High Load Scale"]
  },
  {
    id: "azure-az400-493",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Define the SLI in KQL as successful requests over total requests, and burn down the error budget in a workbook." },
      { id: 'B', text: "Define the SLI as the fraction of five-minute windows in which host CPU stayed under 80 percent." },
      { id: 'C', text: "Define the SLI as the availability figure the Azure status page publishes for the region each month." },
      { id: 'D', text: "Define the SLI as the mean response time of the App Service, alerting when it drifts above baseline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics","SLIs and SLOs","Security Compliance"]
  },
  {
    id: "azure-az400-494",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Define the SLI as the mean response time of the App Service, alerting when it drifts above baseline." },
      { id: 'B', text: "Define the SLI in KQL as successful requests over total requests, and burn down the error budget in a workbook." },
      { id: 'C', text: "Define the SLI as the availability figure the Azure status page publishes for the region each month." },
      { id: 'D', text: "Define the SLI as the fraction of five-minute windows in which host CPU stayed under 80 percent." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics","SLIs and SLOs","Hybrid Migration"]
  },
  {
    id: "azure-az400-495",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Define the SLI in KQL as successful requests over total requests, and burn down the error budget in a workbook." },
      { id: 'B', text: "Define the SLI as the fraction of five-minute windows in which host CPU stayed under 80 percent." },
      { id: 'C', text: "Define the SLI as the availability figure the Azure status page publishes for the region each month." },
      { id: 'D', text: "Define the SLI as the mean response time of the App Service, alerting when it drifts above baseline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics","SLIs and SLOs","Resilience Failure"]
  },
  {
    id: "azure-az400-496",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer needs to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives?",
    options: [
      { id: 'A', text: "Author an Azure Monitor workbook with KQL queries, metric charts and dropdown parameters." },
      { id: 'B', text: "Author an Azure dashboard pinning each subscription's metric charts into a shared tile set." },
      { id: 'C', text: "Author a Grafana instance fed by the Azure Monitor data source, one folder per subscription." },
      { id: 'D', text: "Author a Log Analytics saved search per subscription and read the results side by side." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks","Azure Monitor Workbooks","Dr Failover"]
  },
  {
    id: "azure-az400-497",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer needs to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability?",
    options: [
      { id: 'A', text: "Author an Azure Monitor workbook with KQL queries, metric charts and dropdown parameters." },
      { id: 'B', text: "Author an Azure dashboard pinning each subscription's metric charts into a shared tile set." },
      { id: 'C', text: "Author a Grafana instance fed by the Azure Monitor data source, one folder per subscription." },
      { id: 'D', text: "Author a Log Analytics saved search per subscription and read the results side by side." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks","Azure Monitor Workbooks","High Load Scale"]
  },
  {
    id: "azure-az400-498",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer needs to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which solution implements these mandatory DevOps security and compliance controls?",
    options: [
      { id: 'A', text: "Author a Log Analytics saved search per subscription and read the results side by side." },
      { id: 'B', text: "Author an Azure Monitor workbook with KQL queries, metric charts and dropdown parameters." },
      { id: 'C', text: "Author a Grafana instance fed by the Azure Monitor data source, one folder per subscription." },
      { id: 'D', text: "Author an Azure dashboard pinning each subscription's metric charts into a shared tile set." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks","Azure Monitor Workbooks","Security Compliance"]
  },
  {
    id: "azure-az400-499",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer needs to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction?",
    options: [
      { id: 'A', text: "Author an Azure Monitor workbook with KQL queries, metric charts and dropdown parameters." },
      { id: 'B', text: "Author an Azure dashboard pinning each subscription's metric charts into a shared tile set." },
      { id: 'C', text: "Author a Grafana instance fed by the Azure Monitor data source, one folder per subscription." },
      { id: 'D', text: "Author a Log Analytics saved search per subscription and read the results side by side." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks","Azure Monitor Workbooks","Hybrid Migration"]
  },
  {
    id: "azure-az400-500",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer needs to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability?",
    options: [
      { id: 'A', text: "Author an Azure Monitor workbook with KQL queries, metric charts and dropdown parameters." },
      { id: 'B', text: "Author an Azure dashboard pinning each subscription's metric charts into a shared tile set." },
      { id: 'C', text: "Author a Grafana instance fed by the Azure Monitor data source, one folder per subscription." },
      { id: 'D', text: "Author a Log Analytics saved search per subscription and read the results side by side." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks","Azure Monitor Workbooks","Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_20;
