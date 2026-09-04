export const AZURE_AZ204_QUESTIONS_19 = [
  {
    id: "azure-az204-451",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Rate Limiting (rate-limit-by-key): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure API Management to restrict client API consumption to a maximum of 100 requests per minute per subscription key to prevent denial-of-service and abusive traffic.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Inbound rate limiting and throttling policies (rate-limit-by-key) is under consideration.",
    options: [
      { id: 'A', text: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key." },
      { id: 'B', text: "Deploy a hardware firewall appliance in an on-premises datacenter." },
      { id: 'C', text: "Manually block client IP addresses in the Azure portal after an outage occurs." },
      { id: 'D', text: "Increase backend virtual machine sizes to absorb unlimited incoming traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key. The `rate-limit-by-key` policy in Azure API Management prevents API usage spikes on a per-key basis (such as caller IP address or subscription key). When the specified request count is exceeded within the time window, the gateway returns HTTP 429 Too Many Requests.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/rate-limit-by-key-policy",
    tags: ["Azure API Management", "APIM", "Dr Failover"]
  },
  {
    id: "azure-az204-452",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Rate Limiting (rate-limit-by-key): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure API Management to restrict client API consumption to a maximum of 100 requests per minute per subscription key to prevent denial-of-service and abusive traffic.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Inbound rate limiting and throttling policies (rate-limit-by-key) is under consideration.",
    options: [
      { id: 'A', text: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key." },
      { id: 'B', text: "Deploy a hardware firewall appliance in an on-premises datacenter." },
      { id: 'C', text: "Manually block client IP addresses in the Azure portal after an outage occurs." },
      { id: 'D', text: "Increase backend virtual machine sizes to absorb unlimited incoming traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key. The `rate-limit-by-key` policy in Azure API Management prevents API usage spikes on a per-key basis (such as caller IP address or subscription key). When the specified request count is exceeded within the time window, the gateway returns HTTP 429 Too Many Requests.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/rate-limit-by-key-policy",
    tags: ["Azure API Management", "APIM", "High Load Scale"]
  },
  {
    id: "azure-az204-453",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Rate Limiting (rate-limit-by-key): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure API Management to restrict client API consumption to a maximum of 100 requests per minute per subscription key to prevent denial-of-service and abusive traffic.",
    question: "Which solution properly implements these mandatory security and governance controls? Inbound rate limiting and throttling policies (rate-limit-by-key) is under consideration.",
    options: [
      { id: 'A', text: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key." },
      { id: 'B', text: "Deploy a hardware firewall appliance in an on-premises datacenter." },
      { id: 'C', text: "Manually block client IP addresses in the Azure portal after an outage occurs." },
      { id: 'D', text: "Increase backend virtual machine sizes to absorb unlimited incoming traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key. The `rate-limit-by-key` policy in Azure API Management prevents API usage spikes on a per-key basis (such as caller IP address or subscription key). When the specified request count is exceeded within the time window, the gateway returns HTTP 429 Too Many Requests.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/rate-limit-by-key-policy",
    tags: ["Azure API Management", "APIM", "Security Compliance"]
  },
  {
    id: "azure-az204-454",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Rate Limiting (rate-limit-by-key): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure API Management to restrict client API consumption to a maximum of 100 requests per minute per subscription key to prevent denial-of-service and abusive traffic.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Inbound rate limiting and throttling policies (rate-limit-by-key) is under consideration.",
    options: [
      { id: 'A', text: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key." },
      { id: 'B', text: "Deploy a hardware firewall appliance in an on-premises datacenter." },
      { id: 'C', text: "Manually block client IP addresses in the Azure portal after an outage occurs." },
      { id: 'D', text: "Increase backend virtual machine sizes to absorb unlimited incoming traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key. The `rate-limit-by-key` policy in Azure API Management prevents API usage spikes on a per-key basis (such as caller IP address or subscription key). When the specified request count is exceeded within the time window, the gateway returns HTTP 429 Too Many Requests.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/rate-limit-by-key-policy",
    tags: ["Azure API Management", "APIM", "Hybrid Migration"]
  },
  {
    id: "azure-az204-455",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Rate Limiting (rate-limit-by-key): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure API Management to restrict client API consumption to a maximum of 100 requests per minute per subscription key to prevent denial-of-service and abusive traffic.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Inbound rate limiting and throttling policies (rate-limit-by-key) is under consideration.",
    options: [
      { id: 'A', text: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key." },
      { id: 'B', text: "Deploy a hardware firewall appliance in an on-premises datacenter." },
      { id: 'C', text: "Manually block client IP addresses in the Azure portal after an outage occurs." },
      { id: 'D', text: "Increase backend virtual machine sizes to absorb unlimited incoming traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add a rate-limit-by-key policy in the inbound section using the client subscription ID or IP as the key. The `rate-limit-by-key` policy in Azure API Management prevents API usage spikes on a per-key basis (such as caller IP address or subscription key). When the specified request count is exceeded within the time window, the gateway returns HTTP 429 Too Many Requests.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/rate-limit-by-key-policy",
    tags: ["Azure API Management", "APIM", "Resilience Failure"]
  },
  {
    id: "azure-az204-456",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy Expressions and Context Variables: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure API Management to dynamically route incoming API requests to different backend service URLs based on the value of a custom HTTP header named 'X-Region'.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? C# policy expressions and context variables (@(context.Request...)) is under consideration.",
    options: [
      { id: 'A', text: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault." },
      { id: 'B', text: "Deploy separate API Management gateway instances for every geographical region." },
      { id: 'C', text: "Hardcode a single static backend URL and let the backend server forward requests over public internet." },
      { id: 'D', text: "Modify client browser DNS settings to resolve regional backend servers directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault. Azure API Management policy expressions allow embedding single-statement C# code snippets inside policy definitions. Expressions have access to the `context` variable, enabling dynamic runtime decisions such as inspecting headers, modifying payloads, and changing backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-policy-expressions",
    tags: ["Azure API Management", "APIM", "Dr Failover"]
  },
  {
    id: "azure-az204-457",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy Expressions and Context Variables: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure API Management to dynamically route incoming API requests to different backend service URLs based on the value of a custom HTTP header named 'X-Region'.",
    question: "Which architectural approach should the team select to manage this demand efficiently? C# policy expressions and context variables (@(context.Request...)) is under consideration.",
    options: [
      { id: 'A', text: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault." },
      { id: 'B', text: "Deploy separate API Management gateway instances for every geographical region." },
      { id: 'C', text: "Hardcode a single static backend URL and let the backend server forward requests over public internet." },
      { id: 'D', text: "Modify client browser DNS settings to resolve regional backend servers directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault. Azure API Management policy expressions allow embedding single-statement C# code snippets inside policy definitions. Expressions have access to the `context` variable, enabling dynamic runtime decisions such as inspecting headers, modifying payloads, and changing backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-policy-expressions",
    tags: ["Azure API Management", "APIM", "High Load Scale"]
  },
  {
    id: "azure-az204-458",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy Expressions and Context Variables: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure API Management to dynamically route incoming API requests to different backend service URLs based on the value of a custom HTTP header named 'X-Region'.",
    question: "Which solution properly implements these mandatory security and governance controls? C# policy expressions and context variables (@(context.Request...)) is under consideration.",
    options: [
      { id: 'A', text: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault." },
      { id: 'B', text: "Deploy separate API Management gateway instances for every geographical region." },
      { id: 'C', text: "Hardcode a single static backend URL and let the backend server forward requests over public internet." },
      { id: 'D', text: "Modify client browser DNS settings to resolve regional backend servers directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault. Azure API Management policy expressions allow embedding single-statement C# code snippets inside policy definitions. Expressions have access to the `context` variable, enabling dynamic runtime decisions such as inspecting headers, modifying payloads, and changing backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-policy-expressions",
    tags: ["Azure API Management", "APIM", "Security Compliance"]
  },
  {
    id: "azure-az204-459",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy Expressions and Context Variables: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure API Management to dynamically route incoming API requests to different backend service URLs based on the value of a custom HTTP header named 'X-Region'.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? C# policy expressions and context variables (@(context.Request...)) is under consideration.",
    options: [
      { id: 'A', text: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault." },
      { id: 'B', text: "Deploy separate API Management gateway instances for every geographical region." },
      { id: 'C', text: "Hardcode a single static backend URL and let the backend server forward requests over public internet." },
      { id: 'D', text: "Modify client browser DNS settings to resolve regional backend servers directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault. Azure API Management policy expressions allow embedding single-statement C# code snippets inside policy definitions. Expressions have access to the `context` variable, enabling dynamic runtime decisions such as inspecting headers, modifying payloads, and changing backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-policy-expressions",
    tags: ["Azure API Management", "APIM", "Hybrid Migration"]
  },
  {
    id: "azure-az204-460",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Policy Expressions and Context Variables: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure API Management to dynamically route incoming API requests to different backend service URLs based on the value of a custom HTTP header named 'X-Region'.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? C# policy expressions and context variables (@(context.Request...)) is under consideration.",
    options: [
      { id: 'A', text: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault." },
      { id: 'B', text: "Deploy separate API Management gateway instances for every geographical region." },
      { id: 'C', text: "Hardcode a single static backend URL and let the backend server forward requests over public internet." },
      { id: 'D', text: "Modify client browser DNS settings to resolve regional backend servers directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a set-backend-service policy with a C# policy expression evaluating context.Request.Headers.GetValueOrDefault. Azure API Management policy expressions allow embedding single-statement C# code snippets inside policy definitions. Expressions have access to the `context` variable, enabling dynamic runtime decisions such as inspecting headers, modifying payloads, and changing backend routing.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-policy-expressions",
    tags: ["Azure API Management", "APIM", "Resilience Failure"]
  },
  {
    id: "azure-az204-461",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Products and Subscriptions: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure API Management to package several related APIs together, apply unified rate-limit quotas, and require administrative approval before granting developer access keys.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? APIM Products, APIs, and subscription key access governance is under consideration.",
    options: [
      { id: 'A', text: "Create an API Management Product containing the APIs, require subscription approval, and publish it." },
      { id: 'B', text: "Publish all APIs with open, unauthenticated access on the public internet." },
      { id: 'C', text: "Distribute root Azure subscription management credentials to third-party developers." },
      { id: 'D', text: "Deploy each API into a separate Azure subscription." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an API Management Product containing the APIs, require subscription approval, and publish it. In Azure API Management, Products are associations of one or more APIs. Products can be Open (usable without a subscription) or Protected (requiring a subscription key). Products allow administrators to bundle APIs, assign terms of use, configure usage quotas, and manage developer access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-add-products",
    tags: ["Azure API Management", "APIM", "Dr Failover"]
  },
  {
    id: "azure-az204-462",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Products and Subscriptions: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure API Management to package several related APIs together, apply unified rate-limit quotas, and require administrative approval before granting developer access keys.",
    question: "Which architectural approach should the team select to manage this demand efficiently? APIM Products, APIs, and subscription key access governance is under consideration.",
    options: [
      { id: 'A', text: "Create an API Management Product containing the APIs, require subscription approval, and publish it." },
      { id: 'B', text: "Publish all APIs with open, unauthenticated access on the public internet." },
      { id: 'C', text: "Distribute root Azure subscription management credentials to third-party developers." },
      { id: 'D', text: "Deploy each API into a separate Azure subscription." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an API Management Product containing the APIs, require subscription approval, and publish it. In Azure API Management, Products are associations of one or more APIs. Products can be Open (usable without a subscription) or Protected (requiring a subscription key). Products allow administrators to bundle APIs, assign terms of use, configure usage quotas, and manage developer access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-add-products",
    tags: ["Azure API Management", "APIM", "High Load Scale"]
  },
  {
    id: "azure-az204-463",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Products and Subscriptions: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure API Management to package several related APIs together, apply unified rate-limit quotas, and require administrative approval before granting developer access keys.",
    question: "Which solution properly implements these mandatory security and governance controls? APIM Products, APIs, and subscription key access governance is under consideration.",
    options: [
      { id: 'A', text: "Create an API Management Product containing the APIs, require subscription approval, and publish it." },
      { id: 'B', text: "Publish all APIs with open, unauthenticated access on the public internet." },
      { id: 'C', text: "Distribute root Azure subscription management credentials to third-party developers." },
      { id: 'D', text: "Deploy each API into a separate Azure subscription." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an API Management Product containing the APIs, require subscription approval, and publish it. In Azure API Management, Products are associations of one or more APIs. Products can be Open (usable without a subscription) or Protected (requiring a subscription key). Products allow administrators to bundle APIs, assign terms of use, configure usage quotas, and manage developer access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-add-products",
    tags: ["Azure API Management", "APIM", "Security Compliance"]
  },
  {
    id: "azure-az204-464",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Products and Subscriptions: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure API Management to package several related APIs together, apply unified rate-limit quotas, and require administrative approval before granting developer access keys.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? APIM Products, APIs, and subscription key access governance is under consideration.",
    options: [
      { id: 'A', text: "Create an API Management Product containing the APIs, require subscription approval, and publish it." },
      { id: 'B', text: "Publish all APIs with open, unauthenticated access on the public internet." },
      { id: 'C', text: "Distribute root Azure subscription management credentials to third-party developers." },
      { id: 'D', text: "Deploy each API into a separate Azure subscription." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an API Management Product containing the APIs, require subscription approval, and publish it. In Azure API Management, Products are associations of one or more APIs. Products can be Open (usable without a subscription) or Protected (requiring a subscription key). Products allow administrators to bundle APIs, assign terms of use, configure usage quotas, and manage developer access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-add-products",
    tags: ["Azure API Management", "APIM", "Hybrid Migration"]
  },
  {
    id: "azure-az204-465",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "APIM Products and Subscriptions: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure API Management to package several related APIs together, apply unified rate-limit quotas, and require administrative approval before granting developer access keys.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? APIM Products, APIs, and subscription key access governance is under consideration.",
    options: [
      { id: 'A', text: "Create an API Management Product containing the APIs, require subscription approval, and publish it." },
      { id: 'B', text: "Publish all APIs with open, unauthenticated access on the public internet." },
      { id: 'C', text: "Distribute root Azure subscription management credentials to third-party developers." },
      { id: 'D', text: "Deploy each API into a separate Azure subscription." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an API Management Product containing the APIs, require subscription approval, and publish it. In Azure API Management, Products are associations of one or more APIs. Products can be Open (usable without a subscription) or Protected (requiring a subscription key). Products allow administrators to bundle APIs, assign terms of use, configure usage quotas, and manage developer access.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-add-products",
    tags: ["Azure API Management", "APIM", "Resilience Failure"]
  },
  {
    id: "azure-az204-466",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Event Subscriptions and Filters: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Event Grid to trigger an Azure Function only when an Amazon S3-compatible blob created event contains a subject ending with '.jpg' and an eventType of 'BlobCreated'.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Event Grid topics, event subscriptions, and advanced payload filtering is under consideration.",
    options: [
      { id: 'A', text: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters." },
      { id: 'B', text: "Write custom filtering logic inside a constantly running polling thread on an Azure VM." },
      { id: 'C', text: "Configure an Azure Queue Storage queue and download all events to inspect filenames." },
      { id: 'D', text: "Deploy an Azure Logic App that parses all storage account activity logs every 10 minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters. Azure Event Grid is a highly scalable, fully managed event routing service. Event Subscriptions define which events are delivered to which handler. Advanced filtering on event types, subject prefixes/suffixes, and data payload properties ensures handlers receive only relevant events.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
    tags: ["Azure Event Grid", "Event Grid", "Dr Failover"]
  },
  {
    id: "azure-az204-467",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Event Subscriptions and Filters: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Event Grid to trigger an Azure Function only when an Amazon S3-compatible blob created event contains a subject ending with '.jpg' and an eventType of 'BlobCreated'.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Event Grid topics, event subscriptions, and advanced payload filtering is under consideration.",
    options: [
      { id: 'A', text: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters." },
      { id: 'B', text: "Write custom filtering logic inside a constantly running polling thread on an Azure VM." },
      { id: 'C', text: "Configure an Azure Queue Storage queue and download all events to inspect filenames." },
      { id: 'D', text: "Deploy an Azure Logic App that parses all storage account activity logs every 10 minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters. Azure Event Grid is a highly scalable, fully managed event routing service. Event Subscriptions define which events are delivered to which handler. Advanced filtering on event types, subject prefixes/suffixes, and data payload properties ensures handlers receive only relevant events.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
    tags: ["Azure Event Grid", "Event Grid", "High Load Scale"]
  },
  {
    id: "azure-az204-468",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Event Subscriptions and Filters: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Event Grid to trigger an Azure Function only when an Amazon S3-compatible blob created event contains a subject ending with '.jpg' and an eventType of 'BlobCreated'.",
    question: "Which solution properly implements these mandatory security and governance controls? Event Grid topics, event subscriptions, and advanced payload filtering is under consideration.",
    options: [
      { id: 'A', text: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters." },
      { id: 'B', text: "Write custom filtering logic inside a constantly running polling thread on an Azure VM." },
      { id: 'C', text: "Configure an Azure Queue Storage queue and download all events to inspect filenames." },
      { id: 'D', text: "Deploy an Azure Logic App that parses all storage account activity logs every 10 minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters. Azure Event Grid is a highly scalable, fully managed event routing service. Event Subscriptions define which events are delivered to which handler. Advanced filtering on event types, subject prefixes/suffixes, and data payload properties ensures handlers receive only relevant events.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
    tags: ["Azure Event Grid", "Event Grid", "Security Compliance"]
  },
  {
    id: "azure-az204-469",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Event Subscriptions and Filters: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Event Grid to trigger an Azure Function only when an Amazon S3-compatible blob created event contains a subject ending with '.jpg' and an eventType of 'BlobCreated'.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Event Grid topics, event subscriptions, and advanced payload filtering is under consideration.",
    options: [
      { id: 'A', text: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters." },
      { id: 'B', text: "Write custom filtering logic inside a constantly running polling thread on an Azure VM." },
      { id: 'C', text: "Configure an Azure Queue Storage queue and download all events to inspect filenames." },
      { id: 'D', text: "Deploy an Azure Logic App that parses all storage account activity logs every 10 minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters. Azure Event Grid is a highly scalable, fully managed event routing service. Event Subscriptions define which events are delivered to which handler. Advanced filtering on event types, subject prefixes/suffixes, and data payload properties ensures handlers receive only relevant events.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
    tags: ["Azure Event Grid", "Event Grid", "Hybrid Migration"]
  },
  {
    id: "azure-az204-470",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Event Subscriptions and Filters: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Event Grid to trigger an Azure Function only when an Amazon S3-compatible blob created event contains a subject ending with '.jpg' and an eventType of 'BlobCreated'.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Event Grid topics, event subscriptions, and advanced payload filtering is under consideration.",
    options: [
      { id: 'A', text: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters." },
      { id: 'B', text: "Write custom filtering logic inside a constantly running polling thread on an Azure VM." },
      { id: 'C', text: "Configure an Azure Queue Storage queue and download all events to inspect filenames." },
      { id: 'D', text: "Deploy an Azure Logic App that parses all storage account activity logs every 10 minutes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an Event Grid Event Subscription with Subject Begins/Ends With and Event Type filters. Azure Event Grid is a highly scalable, fully managed event routing service. Event Subscriptions define which events are delivered to which handler. Advanced filtering on event types, subject prefixes/suffixes, and data payload properties ensures handlers receive only relevant events.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/event-filtering",
    tags: ["Azure Event Grid", "Event Grid", "Resilience Failure"]
  },
  {
    id: "azure-az204-471",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Dead-Lettering and Retry Policies: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Event Grid to ensure that webhook delivery failures in Event Grid are retried with exponential backoff and undeliverable events are safely captured for auditing.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Event Grid dead-letter storage accounts and exponential backoff retries is under consideration.",
    options: [
      { id: 'A', text: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription." },
      { id: 'B', text: "Discard failed events immediately to prevent event backlog accumulation." },
      { id: 'C', text: "Write failed events to the Windows Event Viewer on client laptops." },
      { id: 'D', text: "Rely on client web browsers to resend failed events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription. When Event Grid cannot deliver an event within a specified time (or after a configured number of retries, default 30 attempts or 24 hours), it can send the undelivered event to a storage account. This process is known as dead-lettering, ensuring zero data loss during endpoint outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery",
    tags: ["Azure Event Grid", "Event Grid", "Dr Failover"]
  },
  {
    id: "azure-az204-472",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Dead-Lettering and Retry Policies: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Event Grid to ensure that webhook delivery failures in Event Grid are retried with exponential backoff and undeliverable events are safely captured for auditing.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Event Grid dead-letter storage accounts and exponential backoff retries is under consideration.",
    options: [
      { id: 'A', text: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription." },
      { id: 'B', text: "Discard failed events immediately to prevent event backlog accumulation." },
      { id: 'C', text: "Write failed events to the Windows Event Viewer on client laptops." },
      { id: 'D', text: "Rely on client web browsers to resend failed events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription. When Event Grid cannot deliver an event within a specified time (or after a configured number of retries, default 30 attempts or 24 hours), it can send the undelivered event to a storage account. This process is known as dead-lettering, ensuring zero data loss during endpoint outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery",
    tags: ["Azure Event Grid", "Event Grid", "High Load Scale"]
  },
  {
    id: "azure-az204-473",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Dead-Lettering and Retry Policies: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Event Grid to ensure that webhook delivery failures in Event Grid are retried with exponential backoff and undeliverable events are safely captured for auditing.",
    question: "Which solution properly implements these mandatory security and governance controls? Event Grid dead-letter storage accounts and exponential backoff retries is under consideration.",
    options: [
      { id: 'A', text: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription." },
      { id: 'B', text: "Discard failed events immediately to prevent event backlog accumulation." },
      { id: 'C', text: "Write failed events to the Windows Event Viewer on client laptops." },
      { id: 'D', text: "Rely on client web browsers to resend failed events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription. When Event Grid cannot deliver an event within a specified time (or after a configured number of retries, default 30 attempts or 24 hours), it can send the undelivered event to a storage account. This process is known as dead-lettering, ensuring zero data loss during endpoint outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery",
    tags: ["Azure Event Grid", "Event Grid", "Security Compliance"]
  },
  {
    id: "azure-az204-474",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Dead-Lettering and Retry Policies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Event Grid to ensure that webhook delivery failures in Event Grid are retried with exponential backoff and undeliverable events are safely captured for auditing.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Event Grid dead-letter storage accounts and exponential backoff retries is under consideration.",
    options: [
      { id: 'A', text: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription." },
      { id: 'B', text: "Discard failed events immediately to prevent event backlog accumulation." },
      { id: 'C', text: "Write failed events to the Windows Event Viewer on client laptops." },
      { id: 'D', text: "Rely on client web browsers to resend failed events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription. When Event Grid cannot deliver an event within a specified time (or after a configured number of retries, default 30 attempts or 24 hours), it can send the undelivered event to a storage account. This process is known as dead-lettering, ensuring zero data loss during endpoint outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery",
    tags: ["Azure Event Grid", "Event Grid", "Hybrid Migration"]
  },
  {
    id: "azure-az204-475",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d5",
    domainName: "Connect to and consume Azure services and third-party services",
    title: "Azure Event Grid Dead-Lettering and Retry Policies: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Event Grid to ensure that webhook delivery failures in Event Grid are retried with exponential backoff and undeliverable events are safely captured for auditing.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Event Grid dead-letter storage accounts and exponential backoff retries is under consideration.",
    options: [
      { id: 'A', text: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription." },
      { id: 'B', text: "Discard failed events immediately to prevent event backlog accumulation." },
      { id: 'C', text: "Write failed events to the Windows Event Viewer on client laptops." },
      { id: 'D', text: "Rely on client web browsers to resend failed events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Dead-Letter destination targeting an Azure Blob Storage container in the Event Subscription. When Event Grid cannot deliver an event within a specified time (or after a configured number of retries, default 30 attempts or 24 hours), it can send the undelivered event to a storage account. This process is known as dead-lettering, ensuring zero data loss during endpoint outages.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/event-grid/manage-event-delivery",
    tags: ["Azure Event Grid", "Event Grid", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_19;
