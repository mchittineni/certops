export const AZURE_AI102_QUESTIONS_4 = [
  {
    id: "azure-ai102-76",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Securing AI Services with Managed Identities: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading solution, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The enterprise AI team is currently eliminating static api keys in application architecture under architecture delivery sprint 4.1.",
    question: "Which Azure AI service architecture or configuration satisfies these high-frequency fintech trading requirements for securing ai services with managed identities?",
    options: [
      { id: 'A', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." },
      { id: 'B', text: "Store the Azure AI primary API key in plaintext within the application's appsettings.json file in Git." },
      { id: 'C', text: "Share the Azure subscription root credentials with all microservice developers." },
      { id: 'D', text: "Disable authentication on the Azure AI services endpoint to improve request latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Managed Identities provide an automatically managed identity in Microsoft Entra ID (formerly Azure AD). Applications authenticate via Azure AD tokens, eliminating credential leakage in source code and supporting role-based access control (RBAC) such as 'Cognitive Services User'.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-77",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Private Endpoints and Network Isolation: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa solution, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The enterprise AI team is currently restricting azure ai traffic to private virtual networks under architecture delivery sprint 4.2.",
    question: "Which Azure AI service architecture or configuration satisfies these healthcare patient records & hipaa requirements for private endpoints and network isolation?",
    options: [
      { id: 'A', text: "Allow all public Internet traffic on port 80 to the cognitive services endpoint." },
      { id: 'B', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'C', text: "Configure client laptops to connect directly to the public REST endpoint with no firewall rules." },
      { id: 'D', text: "Deploy an unencrypted HTTP reverse proxy on an unprotected public IP address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Private Endpoints assign a private IP address from your Virtual Network (VNet) to the Azure AI service, bringing the service inside your network boundary. Disabling public network access ensures that all inference and management traffic remains strictly isolated from the public Internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-78",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Content Safety and Moderation: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale solution, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The enterprise AI team is currently detecting harmful text and image inputs in ai pipelines under architecture delivery sprint 4.3.",
    question: "Which Azure AI service architecture or configuration satisfies these global e-commerce black friday scale requirements for azure ai content safety and moderation?",
    options: [
      { id: 'A', text: "Rely on client-side regex matching to filter offensive user inputs." },
      { id: 'B', text: "Disable all content safety filters to maximize model text generation speed." },
      { id: 'C', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'D', text: "Log all user inputs in public web servers to manually audit violations once a month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Content Safety uses state-of-the-art multi-modal models to detect harmful content across four categories (Hate, Self-Harm, Sexual, Violence) with four severity levels (0, 2, 4, 6). It provides real-time moderation guardrails for applications, user-generated content, and generative AI systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-79",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Multi-Service Resource vs Single-Service: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry solution, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The enterprise AI team is currently consolidating billing and api access across ai services under architecture delivery sprint 4.4.",
    question: "Which Azure AI service architecture or configuration satisfies these autonomous vehicle telemetry requirements for azure ai multi-service resource vs single-service?",
    options: [
      { id: 'A', text: "Deploy separate virtual machines running open-source models for every individual cognitive capability." },
      { id: 'B', text: "Hardcode individual trial API keys in client application binaries without Azure resource management." },
      { id: 'C', text: "Configure an unauthenticated public Azure Blob Storage container to host model weights." },
      { id: 'D', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure AI services multi-service resource provides unified billing, a single subscription key, and a consolidated API endpoint across vision, language, and search capabilities. Single-service resources are reserved when dedicated networking, individual access keys, or specific regional scaling is required.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-80",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Securing AI Services with Managed Identities: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform solution, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The enterprise AI team is currently eliminating static api keys in application architecture under architecture delivery sprint 4.5.",
    question: "Which Azure AI service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for securing ai services with managed identities?",
    options: [
      { id: 'A', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." },
      { id: 'B', text: "Store the Azure AI primary API key in plaintext within the application's appsettings.json file in Git." },
      { id: 'C', text: "Share the Azure subscription root credentials with all microservice developers." },
      { id: 'D', text: "Disable authentication on the Azure AI services endpoint to improve request latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Managed Identities provide an automatically managed identity in Microsoft Entra ID (formerly Azure AD). Applications authenticate via Azure AD tokens, eliminating credential leakage in source code and supporting role-based access control (RBAC) such as 'Cognitive Services User'.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-81",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Private Endpoints and Network Isolation: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn solution, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The enterprise AI team is currently restricting azure ai traffic to private virtual networks under architecture delivery sprint 4.6.",
    question: "Which Azure AI service architecture or configuration satisfies these media streaming & global cdn requirements for private endpoints and network isolation?",
    options: [
      { id: 'A', text: "Allow all public Internet traffic on port 80 to the cognitive services endpoint." },
      { id: 'B', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'C', text: "Configure client laptops to connect directly to the public REST endpoint with no firewall rules." },
      { id: 'D', text: "Deploy an unencrypted HTTP reverse proxy on an unprotected public IP address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Private Endpoints assign a private IP address from your Virtual Network (VNet) to the Azure AI service, bringing the service inside your network boundary. Disabling public network access ensures that all inference and management traffic remains strictly isolated from the public Internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-82",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Content Safety and Moderation: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems solution, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The enterprise AI team is currently detecting harmful text and image inputs in ai pipelines under architecture delivery sprint 4.7.",
    question: "Which Azure AI service architecture or configuration satisfies these aerospace satellite ground systems requirements for azure ai content safety and moderation?",
    options: [
      { id: 'A', text: "Rely on client-side regex matching to filter offensive user inputs." },
      { id: 'B', text: "Disable all content safety filters to maximize model text generation speed." },
      { id: 'C', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'D', text: "Log all user inputs in public web servers to manually audit violations once a month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Content Safety uses state-of-the-art multi-modal models to detect harmful content across four categories (Hate, Self-Harm, Sexual, Violence) with four severity levels (0, 2, 4, 6). It provides real-time moderation guardrails for applications, user-generated content, and generative AI systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-83",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Multi-Service Resource vs Single-Service: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network solution, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The enterprise AI team is currently consolidating billing and api access across ai services under architecture delivery sprint 4.8.",
    question: "Which Azure AI service architecture or configuration satisfies these telecommunications 5g core network requirements for azure ai multi-service resource vs single-service?",
    options: [
      { id: 'A', text: "Deploy separate virtual machines running open-source models for every individual cognitive capability." },
      { id: 'B', text: "Hardcode individual trial API keys in client application binaries without Azure resource management." },
      { id: 'C', text: "Configure an unauthenticated public Azure Blob Storage container to host model weights." },
      { id: 'D', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure AI services multi-service resource provides unified billing, a single subscription key, and a consolidated API endpoint across vision, language, and search capabilities. Single-service resources are reserved when dedicated networking, individual access keys, or specific regional scaling is required.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-84",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Securing AI Services with Managed Identities: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot solution, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The enterprise AI team is currently eliminating static api keys in application architecture under architecture delivery sprint 4.9.",
    question: "Which Azure AI service architecture or configuration satisfies these renewable energy smart grid iot requirements for securing ai services with managed identities?",
    options: [
      { id: 'A', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." },
      { id: 'B', text: "Store the Azure AI primary API key in plaintext within the application's appsettings.json file in Git." },
      { id: 'C', text: "Share the Azure subscription root credentials with all microservice developers." },
      { id: 'D', text: "Disable authentication on the Azure AI services endpoint to improve request latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Managed Identities provide an automatically managed identity in Microsoft Entra ID (formerly Azure AD). Applications authenticate via Azure AD tokens, eliminating credential leakage in source code and supporting role-based access control (RBAC) such as 'Cognitive Services User'.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-85",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Private Endpoints and Network Isolation: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics solution, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The enterprise AI team is currently restricting azure ai traffic to private virtual networks under architecture delivery sprint 4.10.",
    question: "Which Azure AI service architecture or configuration satisfies these supply chain cold-chain logistics requirements for private endpoints and network isolation?",
    options: [
      { id: 'A', text: "Allow all public Internet traffic on port 80 to the cognitive services endpoint." },
      { id: 'B', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'C', text: "Configure client laptops to connect directly to the public REST endpoint with no firewall rules." },
      { id: 'D', text: "Deploy an unencrypted HTTP reverse proxy on an unprotected public IP address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Private Endpoints assign a private IP address from your Virtual Network (VNet) to the Azure AI service, bringing the service inside your network boundary. Disabling public network access ensures that all inference and management traffic remains strictly isolated from the public Internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-86",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Content Safety and Moderation: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments solution, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The enterprise AI team is currently detecting harmful text and image inputs in ai pipelines under architecture delivery sprint 4.11.",
    question: "Which Azure AI service architecture or configuration satisfies these banking core ledger & payments requirements for azure ai content safety and moderation?",
    options: [
      { id: 'A', text: "Rely on client-side regex matching to filter offensive user inputs." },
      { id: 'B', text: "Disable all content safety filters to maximize model text generation speed." },
      { id: 'C', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'D', text: "Log all user inputs in public web servers to manually audit violations once a month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Content Safety uses state-of-the-art multi-modal models to detect harmful content across four categories (Hate, Self-Harm, Sexual, Violence) with four severity levels (0, 2, 4, 6). It provides real-time moderation guardrails for applications, user-generated content, and generative AI systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-87",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Multi-Service Resource vs Single-Service: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline solution, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The enterprise AI team is currently consolidating billing and api access across ai services under architecture delivery sprint 4.12.",
    question: "Which Azure AI service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for azure ai multi-service resource vs single-service?",
    options: [
      { id: 'A', text: "Deploy separate virtual machines running open-source models for every individual cognitive capability." },
      { id: 'B', text: "Hardcode individual trial API keys in client application binaries without Azure resource management." },
      { id: 'C', text: "Configure an unauthenticated public Azure Blob Storage container to host model weights." },
      { id: 'D', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure AI services multi-service resource provides unified billing, a single subscription key, and a consolidated API endpoint across vision, language, and search capabilities. Single-service resources are reserved when dedicated networking, individual access keys, or specific regional scaling is required.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-88",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Securing AI Services with Managed Identities: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network solution, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The enterprise AI team is currently eliminating static api keys in application architecture under architecture delivery sprint 4.13.",
    question: "Which Azure AI service architecture or configuration satisfies these defense-grade zero-trust network requirements for securing ai services with managed identities?",
    options: [
      { id: 'A', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." },
      { id: 'B', text: "Store the Azure AI primary API key in plaintext within the application's appsettings.json file in Git." },
      { id: 'C', text: "Share the Azure subscription root credentials with all microservice developers." },
      { id: 'D', text: "Disable authentication on the Azure AI services endpoint to improve request latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Managed Identities provide an automatically managed identity in Microsoft Entra ID (formerly Azure AD). Applications authenticate via Azure AD tokens, eliminating credential leakage in source code and supporting role-based access control (RBAC) such as 'Cognitive Services User'.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-89",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Private Endpoints and Network Isolation: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine solution, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The enterprise AI team is currently restricting azure ai traffic to private virtual networks under architecture delivery sprint 4.14.",
    question: "Which Azure AI service architecture or configuration satisfies these online multiplayer gaming engine requirements for private endpoints and network isolation?",
    options: [
      { id: 'A', text: "Allow all public Internet traffic on port 80 to the cognitive services endpoint." },
      { id: 'B', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'C', text: "Configure client laptops to connect directly to the public REST endpoint with no firewall rules." },
      { id: 'D', text: "Deploy an unencrypted HTTP reverse proxy on an unprotected public IP address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Private Endpoints assign a private IP address from your Virtual Network (VNet) to the Azure AI service, bringing the service inside your network boundary. Disabling public network access ensures that all inference and management traffic remains strictly isolated from the public Internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-90",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Content Safety and Moderation: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling solution, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The enterprise AI team is currently detecting harmful text and image inputs in ai pipelines under architecture delivery sprint 4.15.",
    question: "Which Azure AI service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for azure ai content safety and moderation?",
    options: [
      { id: 'A', text: "Rely on client-side regex matching to filter offensive user inputs." },
      { id: 'B', text: "Disable all content safety filters to maximize model text generation speed." },
      { id: 'C', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'D', text: "Log all user inputs in public web servers to manually audit violations once a month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Content Safety uses state-of-the-art multi-modal models to detect harmful content across four categories (Hate, Self-Harm, Sexual, Violence) with four severity levels (0, 2, 4, 6). It provides real-time moderation guardrails for applications, user-generated content, and generative AI systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-91",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Multi-Service Resource vs Single-Service: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform solution, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The enterprise AI team is currently consolidating billing and api access across ai services under architecture delivery sprint 4.16.",
    question: "Which Azure AI service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for azure ai multi-service resource vs single-service?",
    options: [
      { id: 'A', text: "Deploy separate virtual machines running open-source models for every individual cognitive capability." },
      { id: 'B', text: "Hardcode individual trial API keys in client application binaries without Azure resource management." },
      { id: 'C', text: "Configure an unauthenticated public Azure Blob Storage container to host model weights." },
      { id: 'D', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure AI services multi-service resource provides unified billing, a single subscription key, and a consolidated API endpoint across vision, language, and search capabilities. Single-service resources are reserved when dedicated networking, individual access keys, or specific regional scaling is required.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-92",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Securing AI Services with Managed Identities: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub solution, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The enterprise AI team is currently eliminating static api keys in application architecture under architecture delivery sprint 4.17.",
    question: "Which Azure AI service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for securing ai services with managed identities?",
    options: [
      { id: 'A', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." },
      { id: 'B', text: "Store the Azure AI primary API key in plaintext within the application's appsettings.json file in Git." },
      { id: 'C', text: "Share the Azure subscription root credentials with all microservice developers." },
      { id: 'D', text: "Disable authentication on the Azure AI services endpoint to improve request latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Managed Identities provide an automatically managed identity in Microsoft Entra ID (formerly Azure AD). Applications authenticate via Azure AD tokens, eliminating credential leakage in source code and supporting role-based access control (RBAC) such as 'Cognitive Services User'.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-93",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Private Endpoints and Network Isolation: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification solution, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The enterprise AI team is currently restricting azure ai traffic to private virtual networks under architecture delivery sprint 4.18.",
    question: "Which Azure AI service architecture or configuration satisfies these digital identity & biometric verification requirements for private endpoints and network isolation?",
    options: [
      { id: 'A', text: "Allow all public Internet traffic on port 80 to the cognitive services endpoint." },
      { id: 'B', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'C', text: "Configure client laptops to connect directly to the public REST endpoint with no firewall rules." },
      { id: 'D', text: "Deploy an unencrypted HTTP reverse proxy on an unprotected public IP address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Private Endpoints assign a private IP address from your Virtual Network (VNet) to the Azure AI service, bringing the service inside your network boundary. Disabling public network access ensures that all inference and management traffic remains strictly isolated from the public Internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-94",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Content Safety and Moderation: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search solution, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The enterprise AI team is currently detecting harmful text and image inputs in ai pipelines under architecture delivery sprint 4.19.",
    question: "Which Azure AI service architecture or configuration satisfies these legal discovery & semantic document search requirements for azure ai content safety and moderation?",
    options: [
      { id: 'A', text: "Rely on client-side regex matching to filter offensive user inputs." },
      { id: 'B', text: "Disable all content safety filters to maximize model text generation speed." },
      { id: 'C', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'D', text: "Log all user inputs in public web servers to manually audit violations once a month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Content Safety uses state-of-the-art multi-modal models to detect harmful content across four categories (Hate, Self-Harm, Sexual, Violence) with four severity levels (0, 2, 4, 6). It provides real-time moderation guardrails for applications, user-generated content, and generative AI systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-95",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Multi-Service Resource vs Single-Service: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange solution, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The enterprise AI team is currently consolidating billing and api access across ai services under architecture delivery sprint 4.20.",
    question: "Which Azure AI service architecture or configuration satisfies these adtech real-time bidding exchange requirements for azure ai multi-service resource vs single-service?",
    options: [
      { id: 'A', text: "Deploy separate virtual machines running open-source models for every individual cognitive capability." },
      { id: 'B', text: "Hardcode individual trial API keys in client application binaries without Azure resource management." },
      { id: 'C', text: "Configure an unauthenticated public Azure Blob Storage container to host model weights." },
      { id: 'D', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure AI services multi-service resource provides unified billing, a single subscription key, and a consolidated API endpoint across vision, language, and search capabilities. Single-service resources are reserved when dedicated networking, individual access keys, or specific regional scaling is required.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-96",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Securing AI Services with Managed Identities: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting solution, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The enterprise AI team is currently eliminating static api keys in application architecture under architecture delivery sprint 4.21.",
    question: "Which Azure AI service architecture or configuration satisfies these precision agriculture & drone scouting requirements for securing ai services with managed identities?",
    options: [
      { id: 'A', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." },
      { id: 'B', text: "Store the Azure AI primary API key in plaintext within the application's appsettings.json file in Git." },
      { id: 'C', text: "Share the Azure subscription root credentials with all microservice developers." },
      { id: 'D', text: "Disable authentication on the Azure AI services endpoint to improve request latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Managed Identities provide an automatically managed identity in Microsoft Entra ID (formerly Azure AD). Applications authenticate via Azure AD tokens, eliminating credential leakage in source code and supporting role-based access control (RBAC) such as 'Cognitive Services User'.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-97",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Private Endpoints and Network Isolation: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance solution, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The enterprise AI team is currently restricting azure ai traffic to private virtual networks under architecture delivery sprint 4.22.",
    question: "Which Azure AI service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for private endpoints and network isolation?",
    options: [
      { id: 'A', text: "Allow all public Internet traffic on port 80 to the cognitive services endpoint." },
      { id: 'B', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'C', text: "Configure client laptops to connect directly to the public REST endpoint with no firewall rules." },
      { id: 'D', text: "Deploy an unencrypted HTTP reverse proxy on an unprotected public IP address." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure Private Endpoints assign a private IP address from your Virtual Network (VNet) to the Azure AI service, bringing the service inside your network boundary. Disabling public network access ensures that all inference and management traffic remains strictly isolated from the public Internet.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-98",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Content Safety and Moderation: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform solution, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The enterprise AI team is currently detecting harmful text and image inputs in ai pipelines under architecture delivery sprint 4.23.",
    question: "Which Azure AI service architecture or configuration satisfies these educational remote proctoring platform requirements for azure ai content safety and moderation?",
    options: [
      { id: 'A', text: "Rely on client-side regex matching to filter offensive user inputs." },
      { id: 'B', text: "Disable all content safety filters to maximize model text generation speed." },
      { id: 'C', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'D', text: "Log all user inputs in public web servers to manually audit violations once a month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Content Safety uses state-of-the-art multi-modal models to detect harmful content across four categories (Hate, Self-Harm, Sexual, Violence) with four severity levels (0, 2, 4, 6). It provides real-time moderation guardrails for applications, user-generated content, and generative AI systems.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-99",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Azure AI Multi-Service Resource vs Single-Service: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics solution, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The enterprise AI team is currently consolidating billing and api access across ai services under architecture delivery sprint 4.24.",
    question: "Which Azure AI service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for azure ai multi-service resource vs single-service?",
    options: [
      { id: 'A', text: "Deploy separate virtual machines running open-source models for every individual cognitive capability." },
      { id: 'B', text: "Hardcode individual trial API keys in client application binaries without Azure resource management." },
      { id: 'C', text: "Configure an unauthenticated public Azure Blob Storage container to host model weights." },
      { id: 'D', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Azure AI services multi-service resource provides unified billing, a single subscription key, and a consolidated API endpoint across vision, language, and search capabilities. Single-service resources are reserved when dedicated networking, individual access keys, or specific regional scaling is required.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-100",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Securing AI Services with Managed Identities: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations solution, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The enterprise AI team is currently eliminating static api keys in application architecture under architecture delivery sprint 4.25.",
    question: "Which Azure AI service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for securing ai services with managed identities?",
    options: [
      { id: 'A', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." },
      { id: 'B', text: "Store the Azure AI primary API key in plaintext within the application's appsettings.json file in Git." },
      { id: 'C', text: "Share the Azure subscription root credentials with all microservice developers." },
      { id: 'D', text: "Disable authentication on the Azure AI services endpoint to improve request latency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure Managed Identities provide an automatically managed identity in Microsoft Entra ID (formerly Azure AD). Applications authenticate via Azure AD tokens, eliminating credential leakage in source code and supporting role-based access control (RBAC) such as 'Cognitive Services User'.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_4;
