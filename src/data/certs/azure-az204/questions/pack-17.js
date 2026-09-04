export const AZURE_AZ204_QUESTIONS_17 = [
  {
    id: "azure-az204-401",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Feature Management (Feature Flags): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure App Configuration to dynamically toggle a new payment checkout feature on or off in production without redeploying code or restarting the application servers.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Feature flags with targeting filters and percentage rollouts is under consideration.",
    options: [
      { id: 'A', text: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library." },
      { id: 'B', text: "Reboot the production database server to toggle application behaviors." },
      { id: 'C', text: "Deploy new application code via CI/CD every time the feature needs to be toggled." },
      { id: 'D', text: "Comment out feature code in source control and rebuild the Docker container image." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library. Azure App Configuration Feature Management allows developers to define feature flags that dynamically enable or disable application features at runtime. Applications consume the `Microsoft.FeatureManagement` library to evaluate flags dynamically without requiring server restarts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management",
    tags: ["Azure App Configuration", "Feature Management", "Dr Failover"]
  },
  {
    id: "azure-az204-402",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Feature Management (Feature Flags): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure App Configuration to dynamically toggle a new payment checkout feature on or off in production without redeploying code or restarting the application servers.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Feature flags with targeting filters and percentage rollouts is under consideration.",
    options: [
      { id: 'A', text: "Deploy new application code via CI/CD every time the feature needs to be toggled." },
      { id: 'B', text: "Reboot the production database server to toggle application behaviors." },
      { id: 'C', text: "Comment out feature code in source control and rebuild the Docker container image." },
      { id: 'D', text: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library. Azure App Configuration Feature Management allows developers to define feature flags that dynamically enable or disable application features at runtime. Applications consume the `Microsoft.FeatureManagement` library to evaluate flags dynamically without requiring server restarts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management",
    tags: ["Azure App Configuration", "Feature Management", "High Load Scale"]
  },
  {
    id: "azure-az204-403",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Feature Management (Feature Flags): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure App Configuration to dynamically toggle a new payment checkout feature on or off in production without redeploying code or restarting the application servers.",
    question: "Which solution properly implements these mandatory security and governance controls? Feature flags with targeting filters and percentage rollouts is under consideration.",
    options: [
      { id: 'A', text: "Comment out feature code in source control and rebuild the Docker container image." },
      { id: 'B', text: "Deploy new application code via CI/CD every time the feature needs to be toggled." },
      { id: 'C', text: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library." },
      { id: 'D', text: "Reboot the production database server to toggle application behaviors." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library. Azure App Configuration Feature Management allows developers to define feature flags that dynamically enable or disable application features at runtime. Applications consume the `Microsoft.FeatureManagement` library to evaluate flags dynamically without requiring server restarts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management",
    tags: ["Azure App Configuration", "Feature Management", "Security Compliance"]
  },
  {
    id: "azure-az204-404",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Feature Management (Feature Flags): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure App Configuration to dynamically toggle a new payment checkout feature on or off in production without redeploying code or restarting the application servers.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Feature flags with targeting filters and percentage rollouts is under consideration.",
    options: [
      { id: 'A', text: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library." },
      { id: 'B', text: "Reboot the production database server to toggle application behaviors." },
      { id: 'C', text: "Comment out feature code in source control and rebuild the Docker container image." },
      { id: 'D', text: "Deploy new application code via CI/CD every time the feature needs to be toggled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library. Azure App Configuration Feature Management allows developers to define feature flags that dynamically enable or disable application features at runtime. Applications consume the `Microsoft.FeatureManagement` library to evaluate flags dynamically without requiring server restarts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management",
    tags: ["Azure App Configuration", "Feature Management", "Hybrid Migration"]
  },
  {
    id: "azure-az204-405",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Azure App Configuration Feature Management (Feature Flags): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure App Configuration to dynamically toggle a new payment checkout feature on or off in production without redeploying code or restarting the application servers.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Feature flags with targeting filters and percentage rollouts is under consideration.",
    options: [
      { id: 'A', text: "Deploy new application code via CI/CD every time the feature needs to be toggled." },
      { id: 'B', text: "Reboot the production database server to toggle application behaviors." },
      { id: 'C', text: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library." },
      { id: 'D', text: "Comment out feature code in source control and rebuild the Docker container image." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a Feature Flag in Azure App Configuration and evaluate it using the Microsoft.FeatureManagement library. Azure App Configuration Feature Management allows developers to define feature flags that dynamically enable or disable application features at runtime. Applications consume the `Microsoft.FeatureManagement` library to evaluate flags dynamically without requiring server restarts.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management",
    tags: ["Azure App Configuration", "Feature Management", "Resilience Failure"]
  },
  {
    id: "azure-az204-406",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Shared Access Signature (SAS) Stored Access Policies: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Storage Security to issue SAS tokens to multiple partner clients to upload files to a container, with the ability to revoke all active SAS tokens immediately if a compromise occurs.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Stored Access Policies for centralized SAS revocation and modification is under consideration.",
    options: [
      { id: 'A', text: "Delete the storage account and recreate it under a different name." },
      { id: 'B', text: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container." },
      { id: 'C', text: "Regenerate the storage account primary and secondary access keys, breaking all existing applications." },
      { id: 'D', text: "Issue ad-hoc SAS tokens without associating them with any policy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container. A Stored Access Policy provides an additional measure of control over service-level SAS tokens. By associating a SAS with a stored access policy, administrators can change the start time, expiry time, or permissions of the SAS, or revoke the policy entirely to invalidate all associated tokens immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview#stored-access-policy",
    tags: ["Azure Storage Security", "Storage Security", "Dr Failover"]
  },
  {
    id: "azure-az204-407",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Shared Access Signature (SAS) Stored Access Policies: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Storage Security to issue SAS tokens to multiple partner clients to upload files to a container, with the ability to revoke all active SAS tokens immediately if a compromise occurs.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Stored Access Policies for centralized SAS revocation and modification is under consideration.",
    options: [
      { id: 'A', text: "Issue ad-hoc SAS tokens without associating them with any policy." },
      { id: 'B', text: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container." },
      { id: 'C', text: "Regenerate the storage account primary and secondary access keys, breaking all existing applications." },
      { id: 'D', text: "Delete the storage account and recreate it under a different name." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container. A Stored Access Policy provides an additional measure of control over service-level SAS tokens. By associating a SAS with a stored access policy, administrators can change the start time, expiry time, or permissions of the SAS, or revoke the policy entirely to invalidate all associated tokens immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview#stored-access-policy",
    tags: ["Azure Storage Security", "Storage Security", "High Load Scale"]
  },
  {
    id: "azure-az204-408",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Shared Access Signature (SAS) Stored Access Policies: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Storage Security to issue SAS tokens to multiple partner clients to upload files to a container, with the ability to revoke all active SAS tokens immediately if a compromise occurs.",
    question: "Which solution properly implements these mandatory security and governance controls? Stored Access Policies for centralized SAS revocation and modification is under consideration.",
    options: [
      { id: 'A', text: "Regenerate the storage account primary and secondary access keys, breaking all existing applications." },
      { id: 'B', text: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container." },
      { id: 'C', text: "Issue ad-hoc SAS tokens without associating them with any policy." },
      { id: 'D', text: "Delete the storage account and recreate it under a different name." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container. A Stored Access Policy provides an additional measure of control over service-level SAS tokens. By associating a SAS with a stored access policy, administrators can change the start time, expiry time, or permissions of the SAS, or revoke the policy entirely to invalidate all associated tokens immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview#stored-access-policy",
    tags: ["Azure Storage Security", "Storage Security", "Security Compliance"]
  },
  {
    id: "azure-az204-409",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Shared Access Signature (SAS) Stored Access Policies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Storage Security to issue SAS tokens to multiple partner clients to upload files to a container, with the ability to revoke all active SAS tokens immediately if a compromise occurs.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Stored Access Policies for centralized SAS revocation and modification is under consideration.",
    options: [
      { id: 'A', text: "Delete the storage account and recreate it under a different name." },
      { id: 'B', text: "Issue ad-hoc SAS tokens without associating them with any policy." },
      { id: 'C', text: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container." },
      { id: 'D', text: "Regenerate the storage account primary and secondary access keys, breaking all existing applications." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container. A Stored Access Policy provides an additional measure of control over service-level SAS tokens. By associating a SAS with a stored access policy, administrators can change the start time, expiry time, or permissions of the SAS, or revoke the policy entirely to invalidate all associated tokens immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview#stored-access-policy",
    tags: ["Azure Storage Security", "Storage Security", "Hybrid Migration"]
  },
  {
    id: "azure-az204-410",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d3",
    domainName: "Implement Azure security",
    title: "Shared Access Signature (SAS) Stored Access Policies: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Storage Security to issue SAS tokens to multiple partner clients to upload files to a container, with the ability to revoke all active SAS tokens immediately if a compromise occurs.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Stored Access Policies for centralized SAS revocation and modification is under consideration.",
    options: [
      { id: 'A', text: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container." },
      { id: 'B', text: "Delete the storage account and recreate it under a different name." },
      { id: 'C', text: "Issue ad-hoc SAS tokens without associating them with any policy." },
      { id: 'D', text: "Regenerate the storage account primary and secondary access keys, breaking all existing applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Associate the Shared Access Signatures with a Stored Access Policy on the storage container. A Stored Access Policy provides an additional measure of control over service-level SAS tokens. By associating a SAS with a stored access policy, administrators can change the start time, expiry time, or permissions of the SAS, or revoke the policy entirely to invalidate all associated tokens immediately.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview#stored-access-policy",
    tags: ["Azure Storage Security", "Storage Security", "Resilience Failure"]
  },
  {
    id: "azure-az204-411",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Telemetry Correlation: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Application Insights to correlate diagnostic logs, HTTP requests, and SQL dependency calls across multiple distributed microservices processing a single client order.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? W3C Trace Context and Request-Id telemetry correlation across distributed microservices is under consideration.",
    options: [
      { id: 'A', text: "Manually generate random GUIDs and write them to local text files on each virtual machine." },
      { id: 'B', text: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate)." },
      { id: 'C', text: "Disable telemetry tracking across all microservices to avoid log noise." },
      { id: 'D', text: "Rely on client timestamps to guess which log entries correspond to which HTTP requests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate). Application Insights implements W3C Trace Context standards to correlate telemetry across distributed microservices. By passing `traceparent` and `tracestate` headers across HTTP and queue boundaries, Application Insights automatically links all logs and dependencies to a single operation ID.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing-telemetry-correlation",
    tags: ["Application Insights", "App Insights", "Dr Failover"]
  },
  {
    id: "azure-az204-412",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Telemetry Correlation: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Application Insights to correlate diagnostic logs, HTTP requests, and SQL dependency calls across multiple distributed microservices processing a single client order.",
    question: "Which architectural approach should the team select to manage this demand efficiently? W3C Trace Context and Request-Id telemetry correlation across distributed microservices is under consideration.",
    options: [
      { id: 'A', text: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate)." },
      { id: 'B', text: "Rely on client timestamps to guess which log entries correspond to which HTTP requests." },
      { id: 'C', text: "Disable telemetry tracking across all microservices to avoid log noise." },
      { id: 'D', text: "Manually generate random GUIDs and write them to local text files on each virtual machine." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate). Application Insights implements W3C Trace Context standards to correlate telemetry across distributed microservices. By passing `traceparent` and `tracestate` headers across HTTP and queue boundaries, Application Insights automatically links all logs and dependencies to a single operation ID.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing-telemetry-correlation",
    tags: ["Application Insights", "App Insights", "High Load Scale"]
  },
  {
    id: "azure-az204-413",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Telemetry Correlation: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Application Insights to correlate diagnostic logs, HTTP requests, and SQL dependency calls across multiple distributed microservices processing a single client order.",
    question: "Which solution properly implements these mandatory security and governance controls? W3C Trace Context and Request-Id telemetry correlation across distributed microservices is under consideration.",
    options: [
      { id: 'A', text: "Rely on client timestamps to guess which log entries correspond to which HTTP requests." },
      { id: 'B', text: "Disable telemetry tracking across all microservices to avoid log noise." },
      { id: 'C', text: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate)." },
      { id: 'D', text: "Manually generate random GUIDs and write them to local text files on each virtual machine." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate). Application Insights implements W3C Trace Context standards to correlate telemetry across distributed microservices. By passing `traceparent` and `tracestate` headers across HTTP and queue boundaries, Application Insights automatically links all logs and dependencies to a single operation ID.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing-telemetry-correlation",
    tags: ["Application Insights", "App Insights", "Security Compliance"]
  },
  {
    id: "azure-az204-414",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Telemetry Correlation: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Application Insights to correlate diagnostic logs, HTTP requests, and SQL dependency calls across multiple distributed microservices processing a single client order.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? W3C Trace Context and Request-Id telemetry correlation across distributed microservices is under consideration.",
    options: [
      { id: 'A', text: "Disable telemetry tracking across all microservices to avoid log noise." },
      { id: 'B', text: "Rely on client timestamps to guess which log entries correspond to which HTTP requests." },
      { id: 'C', text: "Manually generate random GUIDs and write them to local text files on each virtual machine." },
      { id: 'D', text: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate). Application Insights implements W3C Trace Context standards to correlate telemetry across distributed microservices. By passing `traceparent` and `tracestate` headers across HTTP and queue boundaries, Application Insights automatically links all logs and dependencies to a single operation ID.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing-telemetry-correlation",
    tags: ["Application Insights", "App Insights", "Hybrid Migration"]
  },
  {
    id: "azure-az204-415",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Telemetry Correlation: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Application Insights to correlate diagnostic logs, HTTP requests, and SQL dependency calls across multiple distributed microservices processing a single client order.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? W3C Trace Context and Request-Id telemetry correlation across distributed microservices is under consideration.",
    options: [
      { id: 'A', text: "Rely on client timestamps to guess which log entries correspond to which HTTP requests." },
      { id: 'B', text: "Manually generate random GUIDs and write them to local text files on each virtual machine." },
      { id: 'C', text: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate)." },
      { id: 'D', text: "Disable telemetry tracking across all microservices to avoid log noise." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Leverage Application Insights distributed tracing with W3C Trace Context headers (traceparent and tracestate). Application Insights implements W3C Trace Context standards to correlate telemetry across distributed microservices. By passing `traceparent` and `tracestate` headers across HTTP and queue boundaries, Application Insights automatically links all logs and dependencies to a single operation ID.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing-telemetry-correlation",
    tags: ["Application Insights", "App Insights", "Resilience Failure"]
  },
  {
    id: "azure-az204-416",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Custom Telemetry & ITelemetryInitializer: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Application Insights to automatically enrich every telemetry event, request, and exception logged by an application with the authenticated customer's tenant ID and geographic region.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? ITelemetryInitializer and TelemetryClient for custom dimension enrichment is under consideration.",
    options: [
      { id: 'A', text: "Manually pass the tenant ID to every Console.WriteLine statement throughout the entire codebase." },
      { id: 'B', text: "Store tenant IDs in a public database table without linking them to Application Insights." },
      { id: 'C', text: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items." },
      { id: 'D', text: "Modify the Azure subscription name to include the tenant ID." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items. In Application Insights, an `ITelemetryInitializer` intercepts all telemetry items created by the SDK before they are sent to the ingest endpoint. Developers implement this interface to inject global contextual properties (like TenantId or AppVersion) into every logged item automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-filtering-sampling#addmodify-properties-itelemetryinitializer",
    tags: ["Application Insights", "App Insights", "Dr Failover"]
  },
  {
    id: "azure-az204-417",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Custom Telemetry & ITelemetryInitializer: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Application Insights to automatically enrich every telemetry event, request, and exception logged by an application with the authenticated customer's tenant ID and geographic region.",
    question: "Which architectural approach should the team select to manage this demand efficiently? ITelemetryInitializer and TelemetryClient for custom dimension enrichment is under consideration.",
    options: [
      { id: 'A', text: "Store tenant IDs in a public database table without linking them to Application Insights." },
      { id: 'B', text: "Modify the Azure subscription name to include the tenant ID." },
      { id: 'C', text: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items." },
      { id: 'D', text: "Manually pass the tenant ID to every Console.WriteLine statement throughout the entire codebase." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items. In Application Insights, an `ITelemetryInitializer` intercepts all telemetry items created by the SDK before they are sent to the ingest endpoint. Developers implement this interface to inject global contextual properties (like TenantId or AppVersion) into every logged item automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-filtering-sampling#addmodify-properties-itelemetryinitializer",
    tags: ["Application Insights", "App Insights", "High Load Scale"]
  },
  {
    id: "azure-az204-418",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Custom Telemetry & ITelemetryInitializer: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Application Insights to automatically enrich every telemetry event, request, and exception logged by an application with the authenticated customer's tenant ID and geographic region.",
    question: "Which solution properly implements these mandatory security and governance controls? ITelemetryInitializer and TelemetryClient for custom dimension enrichment is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items." },
      { id: 'B', text: "Manually pass the tenant ID to every Console.WriteLine statement throughout the entire codebase." },
      { id: 'C', text: "Store tenant IDs in a public database table without linking them to Application Insights." },
      { id: 'D', text: "Modify the Azure subscription name to include the tenant ID." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items. In Application Insights, an `ITelemetryInitializer` intercepts all telemetry items created by the SDK before they are sent to the ingest endpoint. Developers implement this interface to inject global contextual properties (like TenantId or AppVersion) into every logged item automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-filtering-sampling#addmodify-properties-itelemetryinitializer",
    tags: ["Application Insights", "App Insights", "Security Compliance"]
  },
  {
    id: "azure-az204-419",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Custom Telemetry & ITelemetryInitializer: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Application Insights to automatically enrich every telemetry event, request, and exception logged by an application with the authenticated customer's tenant ID and geographic region.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? ITelemetryInitializer and TelemetryClient for custom dimension enrichment is under consideration.",
    options: [
      { id: 'A', text: "Store tenant IDs in a public database table without linking them to Application Insights." },
      { id: 'B', text: "Manually pass the tenant ID to every Console.WriteLine statement throughout the entire codebase." },
      { id: 'C', text: "Modify the Azure subscription name to include the tenant ID." },
      { id: 'D', text: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items. In Application Insights, an `ITelemetryInitializer` intercepts all telemetry items created by the SDK before they are sent to the ingest endpoint. Developers implement this interface to inject global contextual properties (like TenantId or AppVersion) into every logged item automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-filtering-sampling#addmodify-properties-itelemetryinitializer",
    tags: ["Application Insights", "App Insights", "Hybrid Migration"]
  },
  {
    id: "azure-az204-420",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Custom Telemetry & ITelemetryInitializer: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Application Insights to automatically enrich every telemetry event, request, and exception logged by an application with the authenticated customer's tenant ID and geographic region.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? ITelemetryInitializer and TelemetryClient for custom dimension enrichment is under consideration.",
    options: [
      { id: 'A', text: "Modify the Azure subscription name to include the tenant ID." },
      { id: 'B', text: "Store tenant IDs in a public database table without linking them to Application Insights." },
      { id: 'C', text: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items." },
      { id: 'D', text: "Manually pass the tenant ID to every Console.WriteLine statement throughout the entire codebase." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom ITelemetryInitializer that appends custom properties to all telemetry items. In Application Insights, an `ITelemetryInitializer` intercepts all telemetry items created by the SDK before they are sent to the ingest endpoint. Developers implement this interface to inject global contextual properties (like TenantId or AppVersion) into every logged item automatically.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/api-filtering-sampling#addmodify-properties-itelemetryinitializer",
    tags: ["Application Insights", "App Insights", "Resilience Failure"]
  },
  {
    id: "azure-az204-421",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Sampling (Adaptive vs Ingestion vs Fixed): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Application Insights to reduce telemetry ingestion volume and cost in an ASP.NET Core web app handling 50,000 requests per second while preserving representative diagnostic accuracy.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Adaptive sampling, Ingestion sampling, and Fixed-rate sampling to control telemetry costs is under consideration.",
    options: [
      { id: 'A', text: "Disable all exception tracking and crash reporting in the application." },
      { id: 'B', text: "Block outbound internet traffic on port 443 from all web server virtual machines." },
      { id: 'C', text: "Configure Adaptive Sampling in the Application Insights SDK." },
      { id: 'D', text: "Delete the Application Insights resource and write logs to unmanaged VM hard drives." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Adaptive Sampling in the Application Insights SDK. Application Insights provides three sampling mechanisms: Adaptive sampling (automatically adjusts telemetry volume based on traffic volume, enabled by default in ASP.NET), Fixed-rate sampling (configured percentage rate), and Ingestion sampling (drops telemetry at the ingestion endpoint). Adaptive sampling preserves related items.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling",
    tags: ["Application Insights", "App Insights", "Dr Failover"]
  },
  {
    id: "azure-az204-422",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Sampling (Adaptive vs Ingestion vs Fixed): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Application Insights to reduce telemetry ingestion volume and cost in an ASP.NET Core web app handling 50,000 requests per second while preserving representative diagnostic accuracy.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Adaptive sampling, Ingestion sampling, and Fixed-rate sampling to control telemetry costs is under consideration.",
    options: [
      { id: 'A', text: "Disable all exception tracking and crash reporting in the application." },
      { id: 'B', text: "Configure Adaptive Sampling in the Application Insights SDK." },
      { id: 'C', text: "Block outbound internet traffic on port 443 from all web server virtual machines." },
      { id: 'D', text: "Delete the Application Insights resource and write logs to unmanaged VM hard drives." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Adaptive Sampling in the Application Insights SDK. Application Insights provides three sampling mechanisms: Adaptive sampling (automatically adjusts telemetry volume based on traffic volume, enabled by default in ASP.NET), Fixed-rate sampling (configured percentage rate), and Ingestion sampling (drops telemetry at the ingestion endpoint). Adaptive sampling preserves related items.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling",
    tags: ["Application Insights", "App Insights", "High Load Scale"]
  },
  {
    id: "azure-az204-423",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Sampling (Adaptive vs Ingestion vs Fixed): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Application Insights to reduce telemetry ingestion volume and cost in an ASP.NET Core web app handling 50,000 requests per second while preserving representative diagnostic accuracy.",
    question: "Which solution properly implements these mandatory security and governance controls? Adaptive sampling, Ingestion sampling, and Fixed-rate sampling to control telemetry costs is under consideration.",
    options: [
      { id: 'A', text: "Disable all exception tracking and crash reporting in the application." },
      { id: 'B', text: "Configure Adaptive Sampling in the Application Insights SDK." },
      { id: 'C', text: "Block outbound internet traffic on port 443 from all web server virtual machines." },
      { id: 'D', text: "Delete the Application Insights resource and write logs to unmanaged VM hard drives." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure Adaptive Sampling in the Application Insights SDK. Application Insights provides three sampling mechanisms: Adaptive sampling (automatically adjusts telemetry volume based on traffic volume, enabled by default in ASP.NET), Fixed-rate sampling (configured percentage rate), and Ingestion sampling (drops telemetry at the ingestion endpoint). Adaptive sampling preserves related items.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling",
    tags: ["Application Insights", "App Insights", "Security Compliance"]
  },
  {
    id: "azure-az204-424",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Sampling (Adaptive vs Ingestion vs Fixed): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Application Insights to reduce telemetry ingestion volume and cost in an ASP.NET Core web app handling 50,000 requests per second while preserving representative diagnostic accuracy.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Adaptive sampling, Ingestion sampling, and Fixed-rate sampling to control telemetry costs is under consideration.",
    options: [
      { id: 'A', text: "Configure Adaptive Sampling in the Application Insights SDK." },
      { id: 'B', text: "Delete the Application Insights resource and write logs to unmanaged VM hard drives." },
      { id: 'C', text: "Disable all exception tracking and crash reporting in the application." },
      { id: 'D', text: "Block outbound internet traffic on port 443 from all web server virtual machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Adaptive Sampling in the Application Insights SDK. Application Insights provides three sampling mechanisms: Adaptive sampling (automatically adjusts telemetry volume based on traffic volume, enabled by default in ASP.NET), Fixed-rate sampling (configured percentage rate), and Ingestion sampling (drops telemetry at the ingestion endpoint). Adaptive sampling preserves related items.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling",
    tags: ["Application Insights", "App Insights", "Hybrid Migration"]
  },
  {
    id: "azure-az204-425",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d4",
    domainName: "Monitor, troubleshoot, and optimize Azure solutions",
    title: "Application Insights Sampling (Adaptive vs Ingestion vs Fixed): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Application Insights to reduce telemetry ingestion volume and cost in an ASP.NET Core web app handling 50,000 requests per second while preserving representative diagnostic accuracy.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Adaptive sampling, Ingestion sampling, and Fixed-rate sampling to control telemetry costs is under consideration.",
    options: [
      { id: 'A', text: "Disable all exception tracking and crash reporting in the application." },
      { id: 'B', text: "Delete the Application Insights resource and write logs to unmanaged VM hard drives." },
      { id: 'C', text: "Configure Adaptive Sampling in the Application Insights SDK." },
      { id: 'D', text: "Block outbound internet traffic on port 443 from all web server virtual machines." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Adaptive Sampling in the Application Insights SDK. Application Insights provides three sampling mechanisms: Adaptive sampling (automatically adjusts telemetry volume based on traffic volume, enabled by default in ASP.NET), Fixed-rate sampling (configured percentage rate), and Ingestion sampling (drops telemetry at the ingestion endpoint). Adaptive sampling preserves related items.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/app/sampling",
    tags: ["Application Insights", "App Insights", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_17;
