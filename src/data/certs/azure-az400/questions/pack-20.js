export const AZURE_AZ400_QUESTIONS_20 = [
  {
    id: "azure-az400-476",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Log Analytics to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Querying distributed application and infrastructure logs using Kusto Query Language (KQL) is under consideration.",
    options: [
      { id: 'A', text: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL)." },
      { id: 'B', text: "Download raw log text files to local laptops and run grep commands." },
      { id: 'C', text: "Query production SQL databases directly for operational logs." },
      { id: 'D', text: "Store logs in ephemeral container storage without centralized collection." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics", "Kusto Query Language", "Dr Failover"]
  },
  {
    id: "azure-az400-477",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Log Analytics to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Querying distributed application and infrastructure logs using Kusto Query Language (KQL) is under consideration.",
    options: [
      { id: 'A', text: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL)." },
      { id: 'B', text: "Download raw log text files to local laptops and run grep commands." },
      { id: 'C', text: "Query production SQL databases directly for operational logs." },
      { id: 'D', text: "Store logs in ephemeral container storage without centralized collection." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics", "Kusto Query Language", "High Load Scale"]
  },
  {
    id: "azure-az400-478",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Log Analytics to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Querying distributed application and infrastructure logs using Kusto Query Language (KQL) is under consideration.",
    options: [
      { id: 'A', text: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL)." },
      { id: 'B', text: "Download raw log text files to local laptops and run grep commands." },
      { id: 'C', text: "Query production SQL databases directly for operational logs." },
      { id: 'D', text: "Store logs in ephemeral container storage without centralized collection." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics", "Kusto Query Language", "Security Compliance"]
  },
  {
    id: "azure-az400-479",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Log Analytics to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Querying distributed application and infrastructure logs using Kusto Query Language (KQL) is under consideration.",
    options: [
      { id: 'A', text: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL)." },
      { id: 'B', text: "Download raw log text files to local laptops and run grep commands." },
      { id: 'C', text: "Query production SQL databases directly for operational logs." },
      { id: 'D', text: "Store logs in ephemeral container storage without centralized collection." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics", "Kusto Query Language", "Hybrid Migration"]
  },
  {
    id: "azure-az400-480",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Log Analytics and Kusto Query Language (KQL): Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Log Analytics to query and analyze millions of log records across virtual machines, containers, and databases to identify performance trends and error rates.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Querying distributed application and infrastructure logs using Kusto Query Language (KQL) is under consideration.",
    options: [
      { id: 'A', text: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL)." },
      { id: 'B', text: "Download raw log text files to local laptops and run grep commands." },
      { id: 'C', text: "Query production SQL databases directly for operational logs." },
      { id: 'D', text: "Store logs in ephemeral container storage without centralized collection." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Centralize logs in an Azure Monitor Log Analytics workspace and execute analytical queries using Kusto Query Language (KQL). Log Analytics is the centralized log repository for Azure Monitor. Using Kusto Query Language (KQL), DevOps engineers can execute fast, expressive queries (using `where`, `summarize`, `bin`, `project`) across petabytes of structured and unstructured logs to diagnose issues and build visual dashboards.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview",
    tags: ["Log Analytics", "Kusto Query Language", "Resilience Failure"]
  },
  {
    id: "azure-az400-481",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Metric Alerting to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Configuring metric and log alert rules linked to Action Groups for SMS, email, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook." },
      { id: 'B', text: "Configure on-call engineers to manually watch dashboard charts continuously." },
      { id: 'C', text: "Send alert emails to an unmonitored generic mailbox." },
      { id: 'D', text: "Disable alerts whenever application response times degrade." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting", "Alert Rules", "Dr Failover"]
  },
  {
    id: "azure-az400-482",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Metric Alerting to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Configuring metric and log alert rules linked to Action Groups for SMS, email, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook." },
      { id: 'B', text: "Configure on-call engineers to manually watch dashboard charts continuously." },
      { id: 'C', text: "Send alert emails to an unmonitored generic mailbox." },
      { id: 'D', text: "Disable alerts whenever application response times degrade." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting", "Alert Rules", "High Load Scale"]
  },
  {
    id: "azure-az400-483",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Metric Alerting to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Configuring metric and log alert rules linked to Action Groups for SMS, email, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook." },
      { id: 'B', text: "Configure on-call engineers to manually watch dashboard charts continuously." },
      { id: 'C', text: "Send alert emails to an unmonitored generic mailbox." },
      { id: 'D', text: "Disable alerts whenever application response times degrade." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting", "Alert Rules", "Security Compliance"]
  },
  {
    id: "azure-az400-484",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Metric Alerting to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Configuring metric and log alert rules linked to Action Groups for SMS, email, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook." },
      { id: 'B', text: "Configure on-call engineers to manually watch dashboard charts continuously." },
      { id: 'C', text: "Send alert emails to an unmonitored generic mailbox." },
      { id: 'D', text: "Disable alerts whenever application response times degrade." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting", "Alert Rules", "Hybrid Migration"]
  },
  {
    id: "azure-az400-485",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Alert Rules and Action Groups: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Metric Alerting to automatically notify the on-call engineer and invoke an automated scaling runbook when application response times exceed 2 seconds for 5 consecutive minutes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Configuring metric and log alert rules linked to Action Groups for SMS, email, and webhooks is under consideration.",
    options: [
      { id: 'A', text: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook." },
      { id: 'B', text: "Configure on-call engineers to manually watch dashboard charts continuously." },
      { id: 'C', text: "Send alert emails to an unmonitored generic mailbox." },
      { id: 'D', text: "Disable alerts whenever application response times degrade." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Azure Monitor Metric Alert rule and link it to an Action Group configured with SMS/email notifications and an Azure Automation webhook. Azure Monitor Alert Rules evaluate metrics or log queries at regular intervals. When conditions breach defined thresholds, the alert triggers an Action Group, which dispatches notifications (email, SMS, voice, push) and automates response actions (webhooks, Azure Functions, Automation runbooks).",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview",
    tags: ["Metric Alerting", "Alert Rules", "Resilience Failure"]
  },
  {
    id: "azure-az400-486",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Availability Tests to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Standard and multi-step synthetic availability tests in Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation." },
      { id: 'B', text: "Rely on internal network pings executed from within the same virtual network." },
      { id: 'C', text: "Wait for public customer complaints on social media to learn about regional outages." },
      { id: 'D', text: "Test the portal manually once a month from the company headquarters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests", "Availability Tests", "Dr Failover"]
  },
  {
    id: "azure-az400-487",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Availability Tests to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Standard and multi-step synthetic availability tests in Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation." },
      { id: 'B', text: "Rely on internal network pings executed from within the same virtual network." },
      { id: 'C', text: "Wait for public customer complaints on social media to learn about regional outages." },
      { id: 'D', text: "Test the portal manually once a month from the company headquarters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests", "Availability Tests", "High Load Scale"]
  },
  {
    id: "azure-az400-488",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Availability Tests to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Standard and multi-step synthetic availability tests in Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation." },
      { id: 'B', text: "Rely on internal network pings executed from within the same virtual network." },
      { id: 'C', text: "Wait for public customer complaints on social media to learn about regional outages." },
      { id: 'D', text: "Test the portal manually once a month from the company headquarters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests", "Availability Tests", "Security Compliance"]
  },
  {
    id: "azure-az400-489",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Availability Tests to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Standard and multi-step synthetic availability tests in Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation." },
      { id: 'B', text: "Rely on internal network pings executed from within the same virtual network." },
      { id: 'C', text: "Wait for public customer complaints on social media to learn about regional outages." },
      { id: 'D', text: "Test the portal manually once a month from the company headquarters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests", "Availability Tests", "Hybrid Migration"]
  },
  {
    id: "azure-az400-490",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Availability Monitoring with Synthetic Web Tests: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Availability Tests to verify that a public web portal is reachable and responding within acceptable latency limits from five geographic locations worldwide 24/7.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Standard and multi-step synthetic availability tests in Application Insights is under consideration.",
    options: [
      { id: 'A', text: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation." },
      { id: 'B', text: "Rely on internal network pings executed from within the same virtual network." },
      { id: 'C', text: "Wait for public customer complaints on social media to learn about regional outages." },
      { id: 'D', text: "Test the portal manually once a month from the company headquarters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Application Insights Standard Availability Tests originating from multiple geographic regions with URL ping and certificate validation. Application Insights Availability Tests (Standard tests and TrackAvailability) probe web application endpoints from multiple global points of presence at regular intervals. They measure response time, validate HTTP status codes and SSL certificates, and alert teams to regional connectivity failures.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/availability-overview",
    tags: ["Availability Tests", "Availability Tests", "Resilience Failure"]
  },
  {
    id: "azure-az400-491",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates SRE Metrics to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Measuring Service Level Indicators (SLIs) and Service Level Objectives (SLOs) in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks." },
      { id: 'B', text: "Measure server CPU utilization as the sole metric for user availability." },
      { id: 'C', text: "Assume the service is 100% available unless an engineer reports a bug." },
      { id: 'D', text: "Calculate availability by counting customer support tickets filed per month." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics", "SLIs and SLOs", "Dr Failover"]
  },
  {
    id: "azure-az400-492",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates SRE Metrics to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Measuring Service Level Indicators (SLIs) and Service Level Objectives (SLOs) in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks." },
      { id: 'B', text: "Measure server CPU utilization as the sole metric for user availability." },
      { id: 'C', text: "Assume the service is 100% available unless an engineer reports a bug." },
      { id: 'D', text: "Calculate availability by counting customer support tickets filed per month." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics", "SLIs and SLOs", "High Load Scale"]
  },
  {
    id: "azure-az400-493",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates SRE Metrics to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Measuring Service Level Indicators (SLIs) and Service Level Objectives (SLOs) in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks." },
      { id: 'B', text: "Measure server CPU utilization as the sole metric for user availability." },
      { id: 'C', text: "Assume the service is 100% available unless an engineer reports a bug." },
      { id: 'D', text: "Calculate availability by counting customer support tickets filed per month." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics", "SLIs and SLOs", "Security Compliance"]
  },
  {
    id: "azure-az400-494",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates SRE Metrics to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Measuring Service Level Indicators (SLIs) and Service Level Objectives (SLOs) in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks." },
      { id: 'B', text: "Measure server CPU utilization as the sole metric for user availability." },
      { id: 'C', text: "Assume the service is 100% available unless an engineer reports a bug." },
      { id: 'D', text: "Calculate availability by counting customer support tickets filed per month." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics", "SLIs and SLOs", "Hybrid Migration"]
  },
  {
    id: "azure-az400-495",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Site Reliability Engineering (SRE) SLI and SLO Tracking: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates SRE Metrics to track whether a customer-facing payment microservice satisfies its agreed 99.9% monthly availability Service Level Objective (SLO).",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Measuring Service Level Indicators (SLIs) and Service Level Objectives (SLOs) in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks." },
      { id: 'B', text: "Measure server CPU utilization as the sole metric for user availability." },
      { id: 'C', text: "Assume the service is 100% available unless an engineer reports a bug." },
      { id: 'D', text: "Calculate availability by counting customer support tickets filed per month." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the Service Level Indicator (SLI) as successful requests divided by total requests using KQL, and track error budget consumption in Azure Monitor workbooks. SRE principles dictate defining Service Level Indicators (SLIs) based on actual user experience (e.g., HTTP 2xx/3xx responses vs total requests). Tracking SLIs against Service Level Objectives (SLOs) in Azure Monitor Workbooks provides clear visibility into error budget burn rates.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["SRE Metrics", "SLIs and SLOs", "Resilience Failure"]
  },
  {
    id: "azure-az400-496",
    difficulty: "hard",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: Dr Failover",
    scenario: "An enterprise cloud DevOps team is establishing operational continuity standards, zero-downtime deployment patterns, and disaster recovery baselines across Azure environments. The DevOps engineer evaluates Workbooks to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which architectural approach or configuration satisfies these high-availability and operational resilience objectives? Creating interactive visual analytics and diagnostic workbooks in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters." },
      { id: 'B', text: "Take screenshots of individual resource graphs and paste them into Word documents." },
      { id: 'C', text: "Ask operations engineers to log in to each individual resource blade manually." },
      { id: 'D', text: "Rely on external third-party proprietary software for basic Azure resource views." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks", "Azure Monitor Workbooks", "Dr Failover"]
  },
  {
    id: "azure-az400-497",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: High Load Scale",
    scenario: "A high-throughput enterprise application running on Azure experiences sudden surges in user transactions and requires automated, resilient pipeline execution. The DevOps engineer evaluates Workbooks to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting service stability? Creating interactive visual analytics and diagnostic workbooks in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters." },
      { id: 'B', text: "Take screenshots of individual resource graphs and paste them into Word documents." },
      { id: 'C', text: "Ask operations engineers to log in to each individual resource blade manually." },
      { id: 'D', text: "Rely on external third-party proprietary software for basic Azure resource views." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks", "Azure Monitor Workbooks", "High Load Scale"]
  },
  {
    id: "azure-az400-498",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: Security Compliance",
    scenario: "A security compliance auditor requires strict source code protection, credential isolation, and automated governance verification across all continuous delivery pipelines. The DevOps engineer evaluates Workbooks to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which solution implements these mandatory DevOps security and compliance controls? Creating interactive visual analytics and diagnostic workbooks in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters." },
      { id: 'B', text: "Take screenshots of individual resource graphs and paste them into Word documents." },
      { id: 'C', text: "Ask operations engineers to log in to each individual resource blade manually." },
      { id: 'D', text: "Rely on external third-party proprietary software for basic Azure resource views." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks", "Azure Monitor Workbooks", "Security Compliance"]
  },
  {
    id: "azure-az400-499",
    difficulty: "easy",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: Hybrid Migration",
    scenario: "An organization is modernizing legacy on-premises deployment workflows and adopting cloud-native continuous integration and automated testing on Azure. The DevOps engineer evaluates Workbooks to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which architectural pattern or platform feature enables the engineering team to modernize delivery with minimal operational friction? Creating interactive visual analytics and diagnostic workbooks in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters." },
      { id: 'B', text: "Take screenshots of individual resource graphs and paste them into Word documents." },
      { id: 'C', text: "Ask operations engineers to log in to each individual resource blade manually." },
      { id: 'D', text: "Rely on external third-party proprietary software for basic Azure resource views." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks", "Azure Monitor Workbooks", "Hybrid Migration"]
  },
  {
    id: "azure-az400-500",
    difficulty: "medium",
    certId: "azure-az400",
    domainId: "d5",
    domainName: "Implement an instrumentation strategy",
    title: "Azure Monitor Workbooks for Unified Observability: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, accelerate rollback capabilities, and automate incident response. The DevOps engineer evaluates Workbooks to consolidate metrics, logs, and alert states from multiple Azure subscriptions into an interactive, visual troubleshooting dashboard for operations teams.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform availability? Creating interactive visual analytics and diagnostic workbooks in Azure Monitor is under consideration.",
    options: [
      { id: 'A', text: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters." },
      { id: 'B', text: "Take screenshots of individual resource graphs and paste them into Word documents." },
      { id: 'C', text: "Ask operations engineers to log in to each individual resource blade manually." },
      { id: 'D', text: "Rely on external third-party proprietary software for basic Azure resource views." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author an Azure Monitor Workbook combining KQL queries, metric visualizations, and interactive dropdown parameters. Azure Monitor Workbooks provide a flexible canvas for data analysis and the creation of rich visual reports within the Azure portal. They combine metrics, logs, and parameters from multiple resources and subscriptions into unified, interactive diagnostic experiences.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview",
    tags: ["Workbooks", "Azure Monitor Workbooks", "Resilience Failure"]
  }
];

export default AZURE_AZ400_QUESTIONS_20;
