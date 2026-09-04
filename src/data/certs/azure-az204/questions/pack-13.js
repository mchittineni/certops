export const AZURE_AZ204_QUESTIONS_13 = [
  {
    id: "azure-az204-301",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry Webhooks: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Container Registry to notify an external deployment orchestrator or update an Azure App Service container whenever a newly tagged image is pushed to an ACR repository.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? ACR webhooks triggering continuous deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository." },
      { id: 'B', text: "Configure an Azure Network Security Group rule to inspect registry port 443 traffic." },
      { id: 'C', text: "Schedule an Azure Automation runbook to poll the registry catalog every 60 seconds." },
      { id: 'D', text: "Require developers to send an email to operations whenever an image push completes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository. Azure Container Registry webhooks subscribe to events in your container registry. When an event occurs (such as an image push or delete), the webhook delivers an HTTP POST notification to configured target endpoints (such as Azure App Service or CI/CD systems) to trigger automated redeployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-webhook",
    tags: ["Azure Container Registry", "ACR", "Dr Failover"]
  },
  {
    id: "azure-az204-302",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry Webhooks: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Container Registry to notify an external deployment orchestrator or update an Azure App Service container whenever a newly tagged image is pushed to an ACR repository.",
    question: "Which architectural approach should the team select to manage this demand efficiently? ACR webhooks triggering continuous deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository." },
      { id: 'B', text: "Schedule an Azure Automation runbook to poll the registry catalog every 60 seconds." },
      { id: 'C', text: "Require developers to send an email to operations whenever an image push completes." },
      { id: 'D', text: "Configure an Azure Network Security Group rule to inspect registry port 443 traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository. Azure Container Registry webhooks subscribe to events in your container registry. When an event occurs (such as an image push or delete), the webhook delivers an HTTP POST notification to configured target endpoints (such as Azure App Service or CI/CD systems) to trigger automated redeployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-webhook",
    tags: ["Azure Container Registry", "ACR", "High Load Scale"]
  },
  {
    id: "azure-az204-303",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry Webhooks: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Container Registry to notify an external deployment orchestrator or update an Azure App Service container whenever a newly tagged image is pushed to an ACR repository.",
    question: "Which solution properly implements these mandatory security and governance controls? ACR webhooks triggering continuous deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Require developers to send an email to operations whenever an image push completes." },
      { id: 'B', text: "Schedule an Azure Automation runbook to poll the registry catalog every 60 seconds." },
      { id: 'C', text: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository." },
      { id: 'D', text: "Configure an Azure Network Security Group rule to inspect registry port 443 traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository. Azure Container Registry webhooks subscribe to events in your container registry. When an event occurs (such as an image push or delete), the webhook delivers an HTTP POST notification to configured target endpoints (such as Azure App Service or CI/CD systems) to trigger automated redeployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-webhook",
    tags: ["Azure Container Registry", "ACR", "Security Compliance"]
  },
  {
    id: "azure-az204-304",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry Webhooks: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Container Registry to notify an external deployment orchestrator or update an Azure App Service container whenever a newly tagged image is pushed to an ACR repository.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? ACR webhooks triggering continuous deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Configure an Azure Network Security Group rule to inspect registry port 443 traffic." },
      { id: 'B', text: "Schedule an Azure Automation runbook to poll the registry catalog every 60 seconds." },
      { id: 'C', text: "Require developers to send an email to operations whenever an image push completes." },
      { id: 'D', text: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository. Azure Container Registry webhooks subscribe to events in your container registry. When an event occurs (such as an image push or delete), the webhook delivers an HTTP POST notification to configured target endpoints (such as Azure App Service or CI/CD systems) to trigger automated redeployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-webhook",
    tags: ["Azure Container Registry", "ACR", "Hybrid Migration"]
  },
  {
    id: "azure-az204-305",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Registry Webhooks: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Container Registry to notify an external deployment orchestrator or update an Azure App Service container whenever a newly tagged image is pushed to an ACR repository.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? ACR webhooks triggering continuous deployment pipelines is under consideration.",
    options: [
      { id: 'A', text: "Schedule an Azure Automation runbook to poll the registry catalog every 60 seconds." },
      { id: 'B', text: "Require developers to send an email to operations whenever an image push completes." },
      { id: 'C', text: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository." },
      { id: 'D', text: "Configure an Azure Network Security Group rule to inspect registry port 443 traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Azure Container Registry Webhook listening for the 'push' action on the repository. Azure Container Registry webhooks subscribe to events in your container registry. When an event occurs (such as an image push or delete), the webhook delivers an HTTP POST notification to configured target endpoints (such as Azure App Service or CI/CD systems) to trigger automated redeployments.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-registry/container-registry-webhook",
    tags: ["Azure Container Registry", "ACR", "Resilience Failure"]
  },
  {
    id: "azure-az204-306",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances (ACI) Volume Mounts: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Container Instances to mount a persistent shared storage directory into an Azure Container Instance container group so data survives container restarts and crashes.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Azure Files share volume mounts for persistent container state is under consideration.",
    options: [
      { id: 'A', text: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition." },
      { id: 'B', text: "Write database transactions to the local container /tmp filesystem." },
      { id: 'C', text: "Attach an unmanaged physical SCSI drive to the container group via USB." },
      { id: 'D', text: "Store persistent application state in the container's temporary local scratch disk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition. Azure Container Instances supports mounting Azure Files shares as volumes directly into containers within a container group. This provides persistent state that survives container restarts, crashes, and lifecycle events across container executions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files",
    tags: ["Azure Container Instances", "Containers", "Dr Failover"]
  },
  {
    id: "azure-az204-307",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances (ACI) Volume Mounts: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Container Instances to mount a persistent shared storage directory into an Azure Container Instance container group so data survives container restarts and crashes.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Azure Files share volume mounts for persistent container state is under consideration.",
    options: [
      { id: 'A', text: "Write database transactions to the local container /tmp filesystem." },
      { id: 'B', text: "Store persistent application state in the container's temporary local scratch disk." },
      { id: 'C', text: "Attach an unmanaged physical SCSI drive to the container group via USB." },
      { id: 'D', text: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition. Azure Container Instances supports mounting Azure Files shares as volumes directly into containers within a container group. This provides persistent state that survives container restarts, crashes, and lifecycle events across container executions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files",
    tags: ["Azure Container Instances", "Containers", "High Load Scale"]
  },
  {
    id: "azure-az204-308",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances (ACI) Volume Mounts: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Container Instances to mount a persistent shared storage directory into an Azure Container Instance container group so data survives container restarts and crashes.",
    question: "Which solution properly implements these mandatory security and governance controls? Azure Files share volume mounts for persistent container state is under consideration.",
    options: [
      { id: 'A', text: "Write database transactions to the local container /tmp filesystem." },
      { id: 'B', text: "Attach an unmanaged physical SCSI drive to the container group via USB." },
      { id: 'C', text: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition." },
      { id: 'D', text: "Store persistent application state in the container's temporary local scratch disk." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition. Azure Container Instances supports mounting Azure Files shares as volumes directly into containers within a container group. This provides persistent state that survives container restarts, crashes, and lifecycle events across container executions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files",
    tags: ["Azure Container Instances", "Containers", "Security Compliance"]
  },
  {
    id: "azure-az204-309",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances (ACI) Volume Mounts: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Container Instances to mount a persistent shared storage directory into an Azure Container Instance container group so data survives container restarts and crashes.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Azure Files share volume mounts for persistent container state is under consideration.",
    options: [
      { id: 'A', text: "Store persistent application state in the container's temporary local scratch disk." },
      { id: 'B', text: "Attach an unmanaged physical SCSI drive to the container group via USB." },
      { id: 'C', text: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition." },
      { id: 'D', text: "Write database transactions to the local container /tmp filesystem." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition. Azure Container Instances supports mounting Azure Files shares as volumes directly into containers within a container group. This provides persistent state that survives container restarts, crashes, and lifecycle events across container executions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files",
    tags: ["Azure Container Instances", "Containers", "Hybrid Migration"]
  },
  {
    id: "azure-az204-310",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances (ACI) Volume Mounts: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Container Instances to mount a persistent shared storage directory into an Azure Container Instance container group so data survives container restarts and crashes.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Azure Files share volume mounts for persistent container state is under consideration.",
    options: [
      { id: 'A', text: "Write database transactions to the local container /tmp filesystem." },
      { id: 'B', text: "Store persistent application state in the container's temporary local scratch disk." },
      { id: 'C', text: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition." },
      { id: 'D', text: "Attach an unmanaged physical SCSI drive to the container group via USB." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Mount an Azure Files share as a volume in the Azure Container Instances container group definition. Azure Container Instances supports mounting Azure Files shares as volumes directly into containers within a container group. This provides persistent state that survives container restarts, crashes, and lifecycle events across container executions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-volume-azure-files",
    tags: ["Azure Container Instances", "Containers", "Resilience Failure"]
  },
  {
    id: "azure-az204-311",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Environment Variables & Secure Values: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Container Instances to pass sensitive API keys and database passwords to an Azure Container Instance without exposing secrets in plaintext ARM template properties or container inspection.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Secure environment variables (secureValue) in ACI definitions is under consideration.",
    options: [
      { id: 'A', text: "Hardcode the database password in the Dockerfile ENV directive." },
      { id: 'B', text: "Store the API secret in a public text file within the container image." },
      { id: 'C', text: "Define environment variables using the secureValue attribute in the ACI resource specification." },
      { id: 'D', text: "Pass the password as an unencrypted plaintext command-line argument." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define environment variables using the secureValue attribute in the ACI resource specification. Azure Container Instances allows specifying environment variables with secure values (`secureValue`). Secure values are masked in the Azure portal, CLI, and REST API inspection outputs, protecting sensitive credentials from unauthorized administrative exposure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-environment-variables#secure-values",
    tags: ["Azure Container Instances", "Containers", "Dr Failover"]
  },
  {
    id: "azure-az204-312",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Environment Variables & Secure Values: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Container Instances to pass sensitive API keys and database passwords to an Azure Container Instance without exposing secrets in plaintext ARM template properties or container inspection.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Secure environment variables (secureValue) in ACI definitions is under consideration.",
    options: [
      { id: 'A', text: "Hardcode the database password in the Dockerfile ENV directive." },
      { id: 'B', text: "Define environment variables using the secureValue attribute in the ACI resource specification." },
      { id: 'C', text: "Store the API secret in a public text file within the container image." },
      { id: 'D', text: "Pass the password as an unencrypted plaintext command-line argument." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define environment variables using the secureValue attribute in the ACI resource specification. Azure Container Instances allows specifying environment variables with secure values (`secureValue`). Secure values are masked in the Azure portal, CLI, and REST API inspection outputs, protecting sensitive credentials from unauthorized administrative exposure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-environment-variables#secure-values",
    tags: ["Azure Container Instances", "Containers", "High Load Scale"]
  },
  {
    id: "azure-az204-313",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Environment Variables & Secure Values: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Container Instances to pass sensitive API keys and database passwords to an Azure Container Instance without exposing secrets in plaintext ARM template properties or container inspection.",
    question: "Which solution properly implements these mandatory security and governance controls? Secure environment variables (secureValue) in ACI definitions is under consideration.",
    options: [
      { id: 'A', text: "Hardcode the database password in the Dockerfile ENV directive." },
      { id: 'B', text: "Store the API secret in a public text file within the container image." },
      { id: 'C', text: "Pass the password as an unencrypted plaintext command-line argument." },
      { id: 'D', text: "Define environment variables using the secureValue attribute in the ACI resource specification." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define environment variables using the secureValue attribute in the ACI resource specification. Azure Container Instances allows specifying environment variables with secure values (`secureValue`). Secure values are masked in the Azure portal, CLI, and REST API inspection outputs, protecting sensitive credentials from unauthorized administrative exposure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-environment-variables#secure-values",
    tags: ["Azure Container Instances", "Containers", "Security Compliance"]
  },
  {
    id: "azure-az204-314",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Environment Variables & Secure Values: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Container Instances to pass sensitive API keys and database passwords to an Azure Container Instance without exposing secrets in plaintext ARM template properties or container inspection.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Secure environment variables (secureValue) in ACI definitions is under consideration.",
    options: [
      { id: 'A', text: "Define environment variables using the secureValue attribute in the ACI resource specification." },
      { id: 'B', text: "Store the API secret in a public text file within the container image." },
      { id: 'C', text: "Pass the password as an unencrypted plaintext command-line argument." },
      { id: 'D', text: "Hardcode the database password in the Dockerfile ENV directive." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define environment variables using the secureValue attribute in the ACI resource specification. Azure Container Instances allows specifying environment variables with secure values (`secureValue`). Secure values are masked in the Azure portal, CLI, and REST API inspection outputs, protecting sensitive credentials from unauthorized administrative exposure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-environment-variables#secure-values",
    tags: ["Azure Container Instances", "Containers", "Hybrid Migration"]
  },
  {
    id: "azure-az204-315",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure Container Instances Environment Variables & Secure Values: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Container Instances to pass sensitive API keys and database passwords to an Azure Container Instance without exposing secrets in plaintext ARM template properties or container inspection.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Secure environment variables (secureValue) in ACI definitions is under consideration.",
    options: [
      { id: 'A', text: "Pass the password as an unencrypted plaintext command-line argument." },
      { id: 'B', text: "Define environment variables using the secureValue attribute in the ACI resource specification." },
      { id: 'C', text: "Store the API secret in a public text file within the container image." },
      { id: 'D', text: "Hardcode the database password in the Dockerfile ENV directive." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define environment variables using the secureValue attribute in the ACI resource specification. Azure Container Instances allows specifying environment variables with secure values (`secureValue`). Secure values are masked in the Azure portal, CLI, and REST API inspection outputs, protecting sensitive credentials from unauthorized administrative exposure.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/container-instances/container-instances-environment-variables#secure-values",
    tags: ["Azure Container Instances", "Containers", "Resilience Failure"]
  },
  {
    id: "azure-az204-316",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Authentication (Easy Auth): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure App Service to protect an internal web application with Microsoft Entra ID authentication without writing security boilerplate code or integrating third-party authentication SDKs.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Built-in App Service Authentication / Authorization (Easy Auth) is under consideration.",
    options: [
      { id: 'A', text: "Disable authentication and rely on obscurity by hiding the URL from search engines." },
      { id: 'B', text: "Store user passwords in a flat CSV file on an unencrypted virtual machine disk." },
      { id: 'C', text: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider." },
      { id: 'D', text: "Implement custom username and password hashing routines in the application controller." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider. App Service Authentication (Easy Auth) is a turn-key authentication feature built directly into Azure App Service and Azure Functions. It intercepts incoming HTTP requests, validates identity tokens with providers like Microsoft Entra ID, and injects user claims into request headers without requiring SDK code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization",
    tags: ["Azure App Service", "App Service", "Dr Failover"]
  },
  {
    id: "azure-az204-317",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Authentication (Easy Auth): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure App Service to protect an internal web application with Microsoft Entra ID authentication without writing security boilerplate code or integrating third-party authentication SDKs.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Built-in App Service Authentication / Authorization (Easy Auth) is under consideration.",
    options: [
      { id: 'A', text: "Disable authentication and rely on obscurity by hiding the URL from search engines." },
      { id: 'B', text: "Store user passwords in a flat CSV file on an unencrypted virtual machine disk." },
      { id: 'C', text: "Implement custom username and password hashing routines in the application controller." },
      { id: 'D', text: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider. App Service Authentication (Easy Auth) is a turn-key authentication feature built directly into Azure App Service and Azure Functions. It intercepts incoming HTTP requests, validates identity tokens with providers like Microsoft Entra ID, and injects user claims into request headers without requiring SDK code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization",
    tags: ["Azure App Service", "App Service", "High Load Scale"]
  },
  {
    id: "azure-az204-318",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Authentication (Easy Auth): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure App Service to protect an internal web application with Microsoft Entra ID authentication without writing security boilerplate code or integrating third-party authentication SDKs.",
    question: "Which solution properly implements these mandatory security and governance controls? Built-in App Service Authentication / Authorization (Easy Auth) is under consideration.",
    options: [
      { id: 'A', text: "Store user passwords in a flat CSV file on an unencrypted virtual machine disk." },
      { id: 'B', text: "Disable authentication and rely on obscurity by hiding the URL from search engines." },
      { id: 'C', text: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider." },
      { id: 'D', text: "Implement custom username and password hashing routines in the application controller." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider. App Service Authentication (Easy Auth) is a turn-key authentication feature built directly into Azure App Service and Azure Functions. It intercepts incoming HTTP requests, validates identity tokens with providers like Microsoft Entra ID, and injects user claims into request headers without requiring SDK code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization",
    tags: ["Azure App Service", "App Service", "Security Compliance"]
  },
  {
    id: "azure-az204-319",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Authentication (Easy Auth): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure App Service to protect an internal web application with Microsoft Entra ID authentication without writing security boilerplate code or integrating third-party authentication SDKs.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Built-in App Service Authentication / Authorization (Easy Auth) is under consideration.",
    options: [
      { id: 'A', text: "Disable authentication and rely on obscurity by hiding the URL from search engines." },
      { id: 'B', text: "Store user passwords in a flat CSV file on an unencrypted virtual machine disk." },
      { id: 'C', text: "Implement custom username and password hashing routines in the application controller." },
      { id: 'D', text: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider. App Service Authentication (Easy Auth) is a turn-key authentication feature built directly into Azure App Service and Azure Functions. It intercepts incoming HTTP requests, validates identity tokens with providers like Microsoft Entra ID, and injects user claims into request headers without requiring SDK code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization",
    tags: ["Azure App Service", "App Service", "Hybrid Migration"]
  },
  {
    id: "azure-az204-320",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d1",
    domainName: "Develop Azure compute solutions",
    title: "Azure App Service Authentication (Easy Auth): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure App Service to protect an internal web application with Microsoft Entra ID authentication without writing security boilerplate code or integrating third-party authentication SDKs.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Built-in App Service Authentication / Authorization (Easy Auth) is under consideration.",
    options: [
      { id: 'A', text: "Disable authentication and rely on obscurity by hiding the URL from search engines." },
      { id: 'B', text: "Implement custom username and password hashing routines in the application controller." },
      { id: 'C', text: "Store user passwords in a flat CSV file on an unencrypted virtual machine disk." },
      { id: 'D', text: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable built-in App Service Authentication (Easy Auth) and select Microsoft Entra ID as the identity provider. App Service Authentication (Easy Auth) is a turn-key authentication feature built directly into Azure App Service and Azure Functions. It intercepts incoming HTTP requests, validates identity tokens with providers like Microsoft Entra ID, and injects user claims into request headers without requiring SDK code.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/app-service/overview-authentication-authorization",
    tags: ["Azure App Service", "App Service", "Resilience Failure"]
  },
  {
    id: "azure-az204-321",
    difficulty: "hard",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Partition Key Selection: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The developer evaluates Azure Cosmos DB to select an optimal partition key for a high-throughput multi-tenant SaaS application in Azure Cosmos DB to prevent hot partitions and uneven RU consumption.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? High-cardinality partition keys with uniform query and write distribution is under consideration.",
    options: [
      { id: 'A', text: "Select the boolean isDeleted property that has only two distinct values." },
      { id: 'B', text: "Use the same static hardcoded string for all records across the entire container." },
      { id: 'C', text: "Select the country property where 98% of users reside in a single country." },
      { id: 'D', text: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution. In Azure Cosmos DB, an optimal partition key possesses high cardinality (thousands to millions of distinct values), distributes read and write requests evenly across physical partitions, and avoids boundary limits (20 GB per logical partition), preventing hot partitions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Dr Failover"]
  },
  {
    id: "azure-az204-322",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Partition Key Selection: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The developer evaluates Azure Cosmos DB to select an optimal partition key for a high-throughput multi-tenant SaaS application in Azure Cosmos DB to prevent hot partitions and uneven RU consumption.",
    question: "Which architectural approach should the team select to manage this demand efficiently? High-cardinality partition keys with uniform query and write distribution is under consideration.",
    options: [
      { id: 'A', text: "Select the country property where 98% of users reside in a single country." },
      { id: 'B', text: "Select the boolean isDeleted property that has only two distinct values." },
      { id: 'C', text: "Use the same static hardcoded string for all records across the entire container." },
      { id: 'D', text: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution. In Azure Cosmos DB, an optimal partition key possesses high cardinality (thousands to millions of distinct values), distributes read and write requests evenly across physical partitions, and avoids boundary limits (20 GB per logical partition), preventing hot partitions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey",
    tags: ["Azure Cosmos DB", "Cosmos DB", "High Load Scale"]
  },
  {
    id: "azure-az204-323",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Partition Key Selection: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The developer evaluates Azure Cosmos DB to select an optimal partition key for a high-throughput multi-tenant SaaS application in Azure Cosmos DB to prevent hot partitions and uneven RU consumption.",
    question: "Which solution properly implements these mandatory security and governance controls? High-cardinality partition keys with uniform query and write distribution is under consideration.",
    options: [
      { id: 'A', text: "Select the boolean isDeleted property that has only two distinct values." },
      { id: 'B', text: "Select the country property where 98% of users reside in a single country." },
      { id: 'C', text: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution." },
      { id: 'D', text: "Use the same static hardcoded string for all records across the entire container." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution. In Azure Cosmos DB, an optimal partition key possesses high cardinality (thousands to millions of distinct values), distributes read and write requests evenly across physical partitions, and avoids boundary limits (20 GB per logical partition), preventing hot partitions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Security Compliance"]
  },
  {
    id: "azure-az204-324",
    difficulty: "easy",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Partition Key Selection: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Microsoft Azure. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The developer evaluates Azure Cosmos DB to select an optimal partition key for a high-throughput multi-tenant SaaS application in Azure Cosmos DB to prevent hot partitions and uneven RU consumption.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? High-cardinality partition keys with uniform query and write distribution is under consideration.",
    options: [
      { id: 'A', text: "Select the boolean isDeleted property that has only two distinct values." },
      { id: 'B', text: "Select the country property where 98% of users reside in a single country." },
      { id: 'C', text: "Use the same static hardcoded string for all records across the entire container." },
      { id: 'D', text: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution. In Azure Cosmos DB, an optimal partition key possesses high cardinality (thousands to millions of distinct values), distributes read and write requests evenly across physical partitions, and avoids boundary limits (20 GB per logical partition), preventing hot partitions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Hybrid Migration"]
  },
  {
    id: "azure-az204-325",
    difficulty: "medium",
    certId: "azure-az204",
    domainId: "d2",
    domainName: "Develop for Azure storage",
    title: "Azure Cosmos DB Partition Key Selection: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The developer evaluates Azure Cosmos DB to select an optimal partition key for a high-throughput multi-tenant SaaS application in Azure Cosmos DB to prevent hot partitions and uneven RU consumption.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? High-cardinality partition keys with uniform query and write distribution is under consideration.",
    options: [
      { id: 'A', text: "Use the same static hardcoded string for all records across the entire container." },
      { id: 'B', text: "Select the boolean isDeleted property that has only two distinct values." },
      { id: 'C', text: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution." },
      { id: 'D', text: "Select the country property where 98% of users reside in a single country." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Select tenantId or a composite synthetic key (tenantId_yearMonth) that provides high cardinality and even distribution. In Azure Cosmos DB, an optimal partition key possesses high cardinality (thousands to millions of distinct values), distributes read and write requests evenly across physical partitions, and avoids boundary limits (20 GB per logical partition), preventing hot partitions.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview#choose-partitionkey",
    tags: ["Azure Cosmos DB", "Cosmos DB", "Resilience Failure"]
  }
];

export default AZURE_AZ204_QUESTIONS_13;
