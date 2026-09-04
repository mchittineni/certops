export const AZURE_AZ204_QUESTIONS_12 = [
  {
    id: "azure-az204-276",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Fan-Out/Fan-In Pattern: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Durable Functions to process 100 customer invoice documents concurrently in parallel and aggregate their total balances into a final summary report once all tasks complete.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Dynamic parallel activity execution with Task.WhenAll aggregation is under consideration.",
    options: [
      { id: 'A', text: "Deploy 100 separate Azure Function Apps, each configured to process one invoice." },
      { id: 'B', text: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator." },
      { id: 'C', text: "Write the invoices to an unmanaged text file on an Azure VM local disk." },
      { id: 'D', text: "Execute the 100 document conversions sequentially in a single synchronous HTTP function." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator. The Fan-Out/Fan-In pattern in Durable Functions executes multiple activity functions in parallel (fan-out) and waits for all activities to complete before aggregating the results (fan-in) using constructs like Task.WhenAll, scaling automatically across serverless workers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-cloud-backup-percentile",
    tags: ["Azure Durable Functions", "Durable Functions", "Dr Failover"]
  },
  {
    id: "azure-az204-277",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Fan-Out/Fan-In Pattern: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Durable Functions to process 100 customer invoice documents concurrently in parallel and aggregate their total balances into a final summary report once all tasks complete.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Dynamic parallel activity execution with Task.WhenAll aggregation is under consideration.",
    options: [
      { id: 'A', text: "Write the invoices to an unmanaged text file on an Azure VM local disk." },
      { id: 'B', text: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator." },
      { id: 'C', text: "Execute the 100 document conversions sequentially in a single synchronous HTTP function." },
      { id: 'D', text: "Deploy 100 separate Azure Function Apps, each configured to process one invoice." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator. The Fan-Out/Fan-In pattern in Durable Functions executes multiple activity functions in parallel (fan-out) and waits for all activities to complete before aggregating the results (fan-in) using constructs like Task.WhenAll, scaling automatically across serverless workers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-cloud-backup-percentile",
    tags: ["Azure Durable Functions", "Durable Functions", "High Load Scale"]
  },
  {
    id: "azure-az204-278",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Fan-Out/Fan-In Pattern: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Durable Functions to process 100 customer invoice documents concurrently in parallel and aggregate their total balances into a final summary report once all tasks complete.",
    question: "Which solution properly implements these mandatory security and governance controls? Dynamic parallel activity execution with Task.WhenAll aggregation is under consideration.",
    options: [
      { id: 'A', text: "Deploy 100 separate Azure Function Apps, each configured to process one invoice." },
      { id: 'B', text: "Write the invoices to an unmanaged text file on an Azure VM local disk." },
      { id: 'C', text: "Execute the 100 document conversions sequentially in a single synchronous HTTP function." },
      { id: 'D', text: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator. The Fan-Out/Fan-In pattern in Durable Functions executes multiple activity functions in parallel (fan-out) and waits for all activities to complete before aggregating the results (fan-in) using constructs like Task.WhenAll, scaling automatically across serverless workers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-cloud-backup-percentile",
    tags: ["Azure Durable Functions", "Durable Functions", "Security Compliance"]
  },
  {
    id: "azure-az204-279",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Fan-Out/Fan-In Pattern: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Durable Functions to process 100 customer invoice documents concurrently in parallel and aggregate their total balances into a final summary report once all tasks complete.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Dynamic parallel activity execution with Task.WhenAll aggregation is under consideration.",
    options: [
      { id: 'A', text: "Execute the 100 document conversions sequentially in a single synchronous HTTP function." },
      { id: 'B', text: "Write the invoices to an unmanaged text file on an Azure VM local disk." },
      { id: 'C', text: "Deploy 100 separate Azure Function Apps, each configured to process one invoice." },
      { id: 'D', text: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator. The Fan-Out/Fan-In pattern in Durable Functions executes multiple activity functions in parallel (fan-out) and waits for all activities to complete before aggregating the results (fan-in) using constructs like Task.WhenAll, scaling automatically across serverless workers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-cloud-backup-percentile",
    tags: ["Azure Durable Functions", "Durable Functions", "Hybrid Migration"]
  },
  {
    id: "azure-az204-280",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Fan-Out/Fan-In Pattern: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Durable Functions to process 100 customer invoice documents concurrently in parallel and aggregate their total balances into a final summary report once all tasks complete.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Dynamic parallel activity execution with Task.WhenAll aggregation is under consideration.",
    options: [
      { id: 'A', text: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator." },
      { id: 'B', text: "Execute the 100 document conversions sequentially in a single synchronous HTTP function." },
      { id: 'C', text: "Write the invoices to an unmanaged text file on an Azure VM local disk." },
      { id: 'D', text: "Deploy 100 separate Azure Function Apps, each configured to process one invoice." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Fan-Out/Fan-In pattern using Task.WhenAll across activity function invocations in the orchestrator. The Fan-Out/Fan-In pattern in Durable Functions executes multiple activity functions in parallel (fan-out) and waits for all activities to complete before aggregating the results (fan-in) using constructs like Task.WhenAll, scaling automatically across serverless workers.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-cloud-backup-percentile",
    tags: ["Azure Durable Functions", "Durable Functions", "Resilience Failure"]
  },
  {
    id: "azure-az204-281",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Human Interaction (External Events): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Durable Functions to pause an order processing workflow and wait up to 72 hours for an executive manager's email approval before continuing execution or timing out.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? WaitForExternalEvent API for human approval workflows is under consideration.",
    options: [
      { id: 'A', text: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer." },
      { id: 'B', text: "Poll an on-premises database every 100 milliseconds from an Azure VM." },
      { id: 'C', text: "Keep an HTTP function thread blocked in a while(true) loop sleeping for 72 hours." },
      { id: 'D', text: "Require the manager to log into the Azure portal and manually deploy a new ARM template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer. Durable Functions provides the `WaitForExternalEvent` method, which allows an orchestrator to pause execution and release compute resources while waiting for an external event (such as an approval click). Combined with a durable timer, it cleanly handles timeout scenarios.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview#monitoring",
    tags: ["Azure Durable Functions", "Durable Functions", "Dr Failover"]
  },
  {
    id: "azure-az204-282",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Human Interaction (External Events): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Durable Functions to pause an order processing workflow and wait up to 72 hours for an executive manager's email approval before continuing execution or timing out.",
    question: "Which architectural approach should the team select to manage this demand efficiently? WaitForExternalEvent API for human approval workflows is under consideration.",
    options: [
      { id: 'A', text: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer." },
      { id: 'B', text: "Keep an HTTP function thread blocked in a while(true) loop sleeping for 72 hours." },
      { id: 'C', text: "Require the manager to log into the Azure portal and manually deploy a new ARM template." },
      { id: 'D', text: "Poll an on-premises database every 100 milliseconds from an Azure VM." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer. Durable Functions provides the `WaitForExternalEvent` method, which allows an orchestrator to pause execution and release compute resources while waiting for an external event (such as an approval click). Combined with a durable timer, it cleanly handles timeout scenarios.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview#monitoring",
    tags: ["Azure Durable Functions", "Durable Functions", "High Load Scale"]
  },
  {
    id: "azure-az204-283",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Human Interaction (External Events): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Durable Functions to pause an order processing workflow and wait up to 72 hours for an executive manager's email approval before continuing execution or timing out.",
    question: "Which solution properly implements these mandatory security and governance controls? WaitForExternalEvent API for human approval workflows is under consideration.",
    options: [
      { id: 'A', text: "Poll an on-premises database every 100 milliseconds from an Azure VM." },
      { id: 'B', text: "Require the manager to log into the Azure portal and manually deploy a new ARM template." },
      { id: 'C', text: "Keep an HTTP function thread blocked in a while(true) loop sleeping for 72 hours." },
      { id: 'D', text: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer. Durable Functions provides the `WaitForExternalEvent` method, which allows an orchestrator to pause execution and release compute resources while waiting for an external event (such as an approval click). Combined with a durable timer, it cleanly handles timeout scenarios.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview#monitoring",
    tags: ["Azure Durable Functions", "Durable Functions", "Security Compliance"]
  },
  {
    id: "azure-az204-284",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Human Interaction (External Events): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Durable Functions to pause an order processing workflow and wait up to 72 hours for an executive manager's email approval before continuing execution or timing out.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? WaitForExternalEvent API for human approval workflows is under consideration.",
    options: [
      { id: 'A', text: "Keep an HTTP function thread blocked in a while(true) loop sleeping for 72 hours." },
      { id: 'B', text: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer." },
      { id: 'C', text: "Poll an on-premises database every 100 milliseconds from an Azure VM." },
      { id: 'D', text: "Require the manager to log into the Azure portal and manually deploy a new ARM template." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer. Durable Functions provides the `WaitForExternalEvent` method, which allows an orchestrator to pause execution and release compute resources while waiting for an external event (such as an approval click). Combined with a durable timer, it cleanly handles timeout scenarios.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview#monitoring",
    tags: ["Azure Durable Functions", "Durable Functions", "Hybrid Migration"]
  },
  {
    id: "azure-az204-285",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Durable Functions Human Interaction (External Events): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Durable Functions to pause an order processing workflow and wait up to 72 hours for an executive manager's email approval before continuing execution or timing out.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? WaitForExternalEvent API for human approval workflows is under consideration.",
    options: [
      { id: 'A', text: "Keep an HTTP function thread blocked in a while(true) loop sleeping for 72 hours." },
      { id: 'B', text: "Poll an on-premises database every 100 milliseconds from an Azure VM." },
      { id: 'C', text: "Require the manager to log into the Azure portal and manually deploy a new ARM template." },
      { id: 'D', text: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Call the WaitForExternalEvent API in a Durable Functions orchestrator combined with a durable timer. Durable Functions provides the `WaitForExternalEvent` method, which allows an orchestrator to pause execution and release compute resources while waiting for an external event (such as an approval click). Combined with a durable timer, it cleanly handles timeout scenarios.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview#monitoring",
    tags: ["Azure Durable Functions", "Durable Functions", "Resilience Failure"]
  },
  {
    id: "azure-az204-286",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Premium Plan (Elastic Premium): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Functions to eliminate cold start latency for critical enterprise APIs while maintaining dynamic autoscaling and outbound connectivity to an internal VNet.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Elastic Premium Plan with pre-warmed instances and VNet connectivity is under consideration.",
    options: [
      { id: 'A', text: "Deploy an on-premises scheduled task to ping the function endpoint every 30 seconds." },
      { id: 'B', text: "Deploy the Function App on the standard Consumption Plan with a 5-minute timeout." },
      { id: 'C', text: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances." },
      { id: 'D', text: "Host the code as a background thread inside an unmanaged Azure Batch job." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances. The Azure Functions Premium Plan provides pre-warmed instances to eliminate cold start delays, advanced virtual network connectivity, unbounded run duration (up to 60 minutes default or unlimited), and dedicated compute sizing while retaining serverless autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan",
    tags: ["Azure Functions", "Serverless", "Dr Failover"]
  },
  {
    id: "azure-az204-287",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Premium Plan (Elastic Premium): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Functions to eliminate cold start latency for critical enterprise APIs while maintaining dynamic autoscaling and outbound connectivity to an internal VNet.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Elastic Premium Plan with pre-warmed instances and VNet connectivity is under consideration.",
    options: [
      { id: 'A', text: "Host the code as a background thread inside an unmanaged Azure Batch job." },
      { id: 'B', text: "Deploy an on-premises scheduled task to ping the function endpoint every 30 seconds." },
      { id: 'C', text: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances." },
      { id: 'D', text: "Deploy the Function App on the standard Consumption Plan with a 5-minute timeout." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances. The Azure Functions Premium Plan provides pre-warmed instances to eliminate cold start delays, advanced virtual network connectivity, unbounded run duration (up to 60 minutes default or unlimited), and dedicated compute sizing while retaining serverless autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan",
    tags: ["Azure Functions", "Serverless", "High Load Scale"]
  },
  {
    id: "azure-az204-288",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Premium Plan (Elastic Premium): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Functions to eliminate cold start latency for critical enterprise APIs while maintaining dynamic autoscaling and outbound connectivity to an internal VNet.",
    question: "Which solution properly implements these mandatory security and governance controls? Elastic Premium Plan with pre-warmed instances and VNet connectivity is under consideration.",
    options: [
      { id: 'A', text: "Deploy an on-premises scheduled task to ping the function endpoint every 30 seconds." },
      { id: 'B', text: "Host the code as a background thread inside an unmanaged Azure Batch job." },
      { id: 'C', text: "Deploy the Function App on the standard Consumption Plan with a 5-minute timeout." },
      { id: 'D', text: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances. The Azure Functions Premium Plan provides pre-warmed instances to eliminate cold start delays, advanced virtual network connectivity, unbounded run duration (up to 60 minutes default or unlimited), and dedicated compute sizing while retaining serverless autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan",
    tags: ["Azure Functions", "Serverless", "Security Compliance"]
  },
  {
    id: "azure-az204-289",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Premium Plan (Elastic Premium): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Functions to eliminate cold start latency for critical enterprise APIs while maintaining dynamic autoscaling and outbound connectivity to an internal VNet.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Elastic Premium Plan with pre-warmed instances and VNet connectivity is under consideration.",
    options: [
      { id: 'A', text: "Host the code as a background thread inside an unmanaged Azure Batch job." },
      { id: 'B', text: "Deploy the Function App on the standard Consumption Plan with a 5-minute timeout." },
      { id: 'C', text: "Deploy an on-premises scheduled task to ping the function endpoint every 30 seconds." },
      { id: 'D', text: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances. The Azure Functions Premium Plan provides pre-warmed instances to eliminate cold start delays, advanced virtual network connectivity, unbounded run duration (up to 60 minutes default or unlimited), and dedicated compute sizing while retaining serverless autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan",
    tags: ["Azure Functions", "Serverless", "Hybrid Migration"]
  },
  {
    id: "azure-az204-290",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Functions Premium Plan (Elastic Premium): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Functions to eliminate cold start latency for critical enterprise APIs while maintaining dynamic autoscaling and outbound connectivity to an internal VNet.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Elastic Premium Plan with pre-warmed instances and VNet connectivity is under consideration.",
    options: [
      { id: 'A', text: "Deploy an on-premises scheduled task to ping the function endpoint every 30 seconds." },
      { id: 'B', text: "Deploy the Function App on the standard Consumption Plan with a 5-minute timeout." },
      { id: 'C', text: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances." },
      { id: 'D', text: "Host the code as a background thread inside an unmanaged Azure Batch job." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the Function App on an Azure Functions Elastic Premium Plan with pre-warmed instances. The Azure Functions Premium Plan provides pre-warmed instances to eliminate cold start delays, advanced virtual network connectivity, unbounded run duration (up to 60 minutes default or unlimited), and dedicated compute sizing while retaining serverless autoscaling.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-premium-plan",
    tags: ["Azure Functions", "Serverless", "Resilience Failure"]
  },
  {
    id: "azure-az204-291",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps (ACA) Microservices & KEDA: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Container Apps to deploy containerized microservices that scale dynamically from zero to 50 replicas based on the count of unprocessed messages in an Azure Service Bus queue.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Serverless container apps with KEDA-driven autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy a self-hosted Docker engine on an Azure IaaS virtual machine without autoscaling." },
      { id: 'B', text: "Deploy an Azure Application Gateway with static backend IP targets." },
      { id: 'C', text: "Host the container as a static website in an Azure Storage container." },
      { id: 'D', text: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule. Azure Container Apps (ACA) is a fully managed serverless container service built on Kubernetes and open-source technologies (KEDA, Dapr, Envoy). It enables running microservices in containers with automated scale-to-zero capabilities driven by external metrics like message queues.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/overview",
    tags: ["Azure Container Apps", "Containers", "Dr Failover"]
  },
  {
    id: "azure-az204-292",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps (ACA) Microservices & KEDA: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Container Apps to deploy containerized microservices that scale dynamically from zero to 50 replicas based on the count of unprocessed messages in an Azure Service Bus queue.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Serverless container apps with KEDA-driven autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule." },
      { id: 'B', text: "Deploy an Azure Application Gateway with static backend IP targets." },
      { id: 'C', text: "Deploy a self-hosted Docker engine on an Azure IaaS virtual machine without autoscaling." },
      { id: 'D', text: "Host the container as a static website in an Azure Storage container." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule. Azure Container Apps (ACA) is a fully managed serverless container service built on Kubernetes and open-source technologies (KEDA, Dapr, Envoy). It enables running microservices in containers with automated scale-to-zero capabilities driven by external metrics like message queues.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/overview",
    tags: ["Azure Container Apps", "Containers", "High Load Scale"]
  },
  {
    id: "azure-az204-293",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps (ACA) Microservices & KEDA: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Container Apps to deploy containerized microservices that scale dynamically from zero to 50 replicas based on the count of unprocessed messages in an Azure Service Bus queue.",
    question: "Which solution properly implements these mandatory security and governance controls? Serverless container apps with KEDA-driven autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy a self-hosted Docker engine on an Azure IaaS virtual machine without autoscaling." },
      { id: 'B', text: "Deploy an Azure Application Gateway with static backend IP targets." },
      { id: 'C', text: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule." },
      { id: 'D', text: "Host the container as a static website in an Azure Storage container." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule. Azure Container Apps (ACA) is a fully managed serverless container service built on Kubernetes and open-source technologies (KEDA, Dapr, Envoy). It enables running microservices in containers with automated scale-to-zero capabilities driven by external metrics like message queues.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/overview",
    tags: ["Azure Container Apps", "Containers", "Security Compliance"]
  },
  {
    id: "azure-az204-294",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps (ACA) Microservices & KEDA: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Container Apps to deploy containerized microservices that scale dynamically from zero to 50 replicas based on the count of unprocessed messages in an Azure Service Bus queue.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Serverless container apps with KEDA-driven autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Host the container as a static website in an Azure Storage container." },
      { id: 'B', text: "Deploy a self-hosted Docker engine on an Azure IaaS virtual machine without autoscaling." },
      { id: 'C', text: "Deploy an Azure Application Gateway with static backend IP targets." },
      { id: 'D', text: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule. Azure Container Apps (ACA) is a fully managed serverless container service built on Kubernetes and open-source technologies (KEDA, Dapr, Envoy). It enables running microservices in containers with automated scale-to-zero capabilities driven by external metrics like message queues.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/overview",
    tags: ["Azure Container Apps", "Containers", "Hybrid Migration"]
  },
  {
    id: "azure-az204-295",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Apps (ACA) Microservices & KEDA: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Container Apps to deploy containerized microservices that scale dynamically from zero to 50 replicas based on the count of unprocessed messages in an Azure Service Bus queue.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Serverless container apps with KEDA-driven autoscaling is under consideration.",
    options: [
      { id: 'A', text: "Deploy a self-hosted Docker engine on an Azure IaaS virtual machine without autoscaling." },
      { id: 'B', text: "Deploy an Azure Application Gateway with static backend IP targets." },
      { id: 'C', text: "Host the container as a static website in an Azure Storage container." },
      { id: 'D', text: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the microservices to Azure Container Apps (ACA) with a KEDA Service Bus scale rule. Azure Container Apps (ACA) is a fully managed serverless container service built on Kubernetes and open-source technologies (KEDA, Dapr, Envoy). It enables running microservices in containers with automated scale-to-zero capabilities driven by external metrics like message queues.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-apps/overview",
    tags: ["Azure Container Apps", "Containers", "Resilience Failure"]
  },
  {
    id: "azure-az204-296",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry (ACR) Multi-Arch Builds & Tasks: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Container Registry to automate container image compilation, vulnerability scanning, and multi-architecture image publishing triggered whenever base OS images are patched.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? ACR Tasks automated container builds and image patching is under consideration.",
    options: [
      { id: 'A', text: "Compile source code binaries directly inside production virtual machine OS directories." },
      { id: 'B', text: "Deploy an unmanaged Jenkins server on an on-premises physical blade server." },
      { id: 'C', text: "Manually build Docker images on developer laptops and push to public unauthenticated registries." },
      { id: 'D', text: "Configure an Azure Container Registry (ACR) Task with base image trigger updates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Azure Container Registry (ACR) Task with base image trigger updates. ACR Tasks is a suite of features within Azure Container Registry that provides cloud-based container image builds for Linux, Windows, and ARM architectures. ACR Tasks can automatically trigger builds upon Git commits, base image updates, or defined timer schedules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
    tags: ["Azure Container Registry", "ACR", "Dr Failover"]
  },
  {
    id: "azure-az204-297",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry (ACR) Multi-Arch Builds & Tasks: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Container Registry to automate container image compilation, vulnerability scanning, and multi-architecture image publishing triggered whenever base OS images are patched.",
    question: "Which architectural approach should the team select to manage this demand efficiently? ACR Tasks automated container builds and image patching is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Container Registry (ACR) Task with base image trigger updates." },
      { id: 'B', text: "Deploy an unmanaged Jenkins server on an on-premises physical blade server." },
      { id: 'C', text: "Manually build Docker images on developer laptops and push to public unauthenticated registries." },
      { id: 'D', text: "Compile source code binaries directly inside production virtual machine OS directories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Container Registry (ACR) Task with base image trigger updates. ACR Tasks is a suite of features within Azure Container Registry that provides cloud-based container image builds for Linux, Windows, and ARM architectures. ACR Tasks can automatically trigger builds upon Git commits, base image updates, or defined timer schedules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
    tags: ["Azure Container Registry", "ACR", "High Load Scale"]
  },
  {
    id: "azure-az204-298",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry (ACR) Multi-Arch Builds & Tasks: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Container Registry to automate container image compilation, vulnerability scanning, and multi-architecture image publishing triggered whenever base OS images are patched.",
    question: "Which solution properly implements these mandatory security and governance controls? ACR Tasks automated container builds and image patching is under consideration.",
    options: [
      { id: 'A', text: "Compile source code binaries directly inside production virtual machine OS directories." },
      { id: 'B', text: "Manually build Docker images on developer laptops and push to public unauthenticated registries." },
      { id: 'C', text: "Configure an Azure Container Registry (ACR) Task with base image trigger updates." },
      { id: 'D', text: "Deploy an unmanaged Jenkins server on an on-premises physical blade server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Azure Container Registry (ACR) Task with base image trigger updates. ACR Tasks is a suite of features within Azure Container Registry that provides cloud-based container image builds for Linux, Windows, and ARM architectures. ACR Tasks can automatically trigger builds upon Git commits, base image updates, or defined timer schedules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
    tags: ["Azure Container Registry", "ACR", "Security Compliance"]
  },
  {
    id: "azure-az204-299",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry (ACR) Multi-Arch Builds & Tasks: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Container Registry to automate container image compilation, vulnerability scanning, and multi-architecture image publishing triggered whenever base OS images are patched.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? ACR Tasks automated container builds and image patching is under consideration.",
    options: [
      { id: 'A', text: "Manually build Docker images on developer laptops and push to public unauthenticated registries." },
      { id: 'B', text: "Compile source code binaries directly inside production virtual machine OS directories." },
      { id: 'C', text: "Configure an Azure Container Registry (ACR) Task with base image trigger updates." },
      { id: 'D', text: "Deploy an unmanaged Jenkins server on an on-premises physical blade server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Azure Container Registry (ACR) Task with base image trigger updates. ACR Tasks is a suite of features within Azure Container Registry that provides cloud-based container image builds for Linux, Windows, and ARM architectures. ACR Tasks can automatically trigger builds upon Git commits, base image updates, or defined timer schedules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
    tags: ["Azure Container Registry", "ACR", "Hybrid Migration"]
  },
  {
    id: "azure-az204-300",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry (ACR) Multi-Arch Builds & Tasks: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Container Registry to automate container image compilation, vulnerability scanning, and multi-architecture image publishing triggered whenever base OS images are patched.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? ACR Tasks automated container builds and image patching is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Container Registry (ACR) Task with base image trigger updates." },
      { id: 'B', text: "Deploy an unmanaged Jenkins server on an on-premises physical blade server." },
      { id: 'C', text: "Compile source code binaries directly inside production virtual machine OS directories." },
      { id: 'D', text: "Manually build Docker images on developer laptops and push to public unauthenticated registries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Container Registry (ACR) Task with base image trigger updates. ACR Tasks is a suite of features within Azure Container Registry that provides cloud-based container image builds for Linux, Windows, and ARM architectures. ACR Tasks can automatically trigger builds upon Git commits, base image updates, or defined timer schedules.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview",
    tags: ["Azure Container Registry", "ACR", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_12;
