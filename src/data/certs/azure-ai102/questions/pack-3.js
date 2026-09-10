export const AZURE_AI102_QUESTIONS_3 = [
  {
    id: "azure-ai102-51",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Keeping Inference Traffic Off the Public Internet: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AI team is ensuring inference calls never traverse a public endpoint under a strict network mandate. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'B', text: "Configure a virtual network service endpoint on the subnet and add a matching network rule to the Azure AI resource firewall." },
      { id: 'C', text: "Configure the Azure AI resource firewall to accept traffic only from the public IP address of the virtual network's NAT gateway." },
      { id: 'D', text: "Route the subnet's outbound traffic through Azure Firewall with an application rule that permits the Azure AI service FQDN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private endpoint places the service on a private IP inside the virtual network, and disabling public network access removes the public path entirely, so there is no internet-facing endpoint left to reach. A service endpoint keeps traffic on the Azure backbone but the resource retains a public endpoint that any permitted network can still call. Allow-listing the NAT gateway address and filtering egress through Azure Firewall both govern who may reach that public endpoint rather than eliminating it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-52",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Screening User Content for Harm Categories: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The AI team is screening user-submitted text and images for harmful content across an application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rely on the content filters already configured on the Azure OpenAI deployment to screen both the prompts and the generated completions." },
      { id: 'B', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'C', text: "Use Azure AI Language sentiment analysis and PII detection to flag any content that scores strongly negative before it is published." },
      { id: 'D', text: "Add a blocklist of prohibited terms to the Azure AI Search index so that documents matching those terms are filtered out of results." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Content Safety is a standalone moderation service, so it scores arbitrary user text and images on the four harm categories wherever they enter the application. The Azure OpenAI content filters cover exactly the prompts and completions of that deployment and see nothing a user uploads elsewhere, and they do not handle images at all. Sentiment analysis measures tone rather than harm, and a strongly negative review is not a policy violation. An index blocklist filters search results and never sees content at submission time.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-53",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "One Resource or Several for Multiple Capabilities: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AI team is provisioning Vision, Language, and Document Intelligence for one application with a single bill. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create a separate single-service resource for Vision, for Language, and for Document Intelligence, each with its own endpoint, key, and billing line." },
      { id: 'B', text: "Create an Azure AI Foundry hub with a connected project so that every capability is reached through the connections the hub defines." },
      { id: 'C', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." },
      { id: 'D', text: "Create one multi-service resource in each region and route every application to whichever resource has been deployed nearest to it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A multi-service resource exposes one endpoint and one key across the vision, language, and document capabilities and bills them together, which is exactly what a single application drawing on all three needs. Single-service resources are the right choice when a capability needs its own network isolation, quota, or region, at the cost of a key and a bill per service. A Foundry hub organises projects and their connections rather than consolidating the underlying resources, and deploying per region addresses latency rather than the number of endpoints and bills.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-54",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Removing Static Keys From an Application: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AI team is authenticating an App Service to Azure AI without any credential stored in the application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Register an Entra ID application, keep its client secret in Azure Key Vault, and have the app read the secret to request a token." },
      { id: 'B', text: "Store the Azure AI account key in Azure Key Vault and grant the App Service permission to read that key when it starts." },
      { id: 'C', text: "Restrict the Azure AI resource firewall to the App Service's outbound IP addresses so that the account key cannot be used elsewhere." },
      { id: 'D', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A managed identity is issued and rotated by the platform, so the application requests an Entra ID token at runtime and holds no credential at all. A registered application with a client secret still has a secret, and one that must be rotated before it expires. Putting the account key in Key Vault protects it well but the key remains a shared credential that anyone reading the vault can replay. Restricting the firewall to known egress addresses narrows where a leaked key can be used without removing the key from the design.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-55",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Keeping Inference Traffic Off the Public Internet: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AI team is ensuring inference calls never traverse a public endpoint under a strict network mandate. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'B', text: "Configure a virtual network service endpoint on the subnet and add a matching network rule to the Azure AI resource firewall." },
      { id: 'C', text: "Configure the Azure AI resource firewall to accept traffic only from the public IP address of the virtual network's NAT gateway." },
      { id: 'D', text: "Route the subnet's outbound traffic through Azure Firewall with an application rule that permits the Azure AI service FQDN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private endpoint places the service on a private IP inside the virtual network, and disabling public network access removes the public path entirely, so there is no internet-facing endpoint left to reach. A service endpoint keeps traffic on the Azure backbone but the resource retains a public endpoint that any permitted network can still call. Allow-listing the NAT gateway address and filtering egress through Azure Firewall both govern who may reach that public endpoint rather than eliminating it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-56",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Screening User Content for Harm Categories: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The AI team is screening user-submitted text and images for harmful content across an application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rely on the content filters already configured on the Azure OpenAI deployment to screen both the prompts and the generated completions." },
      { id: 'B', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'C', text: "Use Azure AI Language sentiment analysis and PII detection to flag any content that scores strongly negative before it is published." },
      { id: 'D', text: "Add a blocklist of prohibited terms to the Azure AI Search index so that documents matching those terms are filtered out of results." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Content Safety is a standalone moderation service, so it scores arbitrary user text and images on the four harm categories wherever they enter the application. The Azure OpenAI content filters cover exactly the prompts and completions of that deployment and see nothing a user uploads elsewhere, and they do not handle images at all. Sentiment analysis measures tone rather than harm, and a strongly negative review is not a policy violation. An index blocklist filters search results and never sees content at submission time.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-57",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "One Resource or Several for Multiple Capabilities: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AI team is provisioning Vision, Language, and Document Intelligence for one application with a single bill. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create a separate single-service resource for Vision, for Language, and for Document Intelligence, each with its own endpoint, key, and billing line." },
      { id: 'B', text: "Create an Azure AI Foundry hub with a connected project so that every capability is reached through the connections the hub defines." },
      { id: 'C', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." },
      { id: 'D', text: "Create one multi-service resource in each region and route every application to whichever resource has been deployed nearest to it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A multi-service resource exposes one endpoint and one key across the vision, language, and document capabilities and bills them together, which is exactly what a single application drawing on all three needs. Single-service resources are the right choice when a capability needs its own network isolation, quota, or region, at the cost of a key and a bill per service. A Foundry hub organises projects and their connections rather than consolidating the underlying resources, and deploying per region addresses latency rather than the number of endpoints and bills.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-58",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Removing Static Keys From an Application: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AI team is authenticating an App Service to Azure AI without any credential stored in the application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Register an Entra ID application, keep its client secret in Azure Key Vault, and have the app read the secret to request a token." },
      { id: 'B', text: "Store the Azure AI account key in Azure Key Vault and grant the App Service permission to read that key when it starts." },
      { id: 'C', text: "Restrict the Azure AI resource firewall to the App Service's outbound IP addresses so that the account key cannot be used elsewhere." },
      { id: 'D', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A managed identity is issued and rotated by the platform, so the application requests an Entra ID token at runtime and holds no credential at all. A registered application with a client secret still has a secret, and one that must be rotated before it expires. Putting the account key in Key Vault protects it well but the key remains a shared credential that anyone reading the vault can replay. Restricting the firewall to known egress addresses narrows where a leaked key can be used without removing the key from the design.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-59",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Keeping Inference Traffic Off the Public Internet: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AI team is ensuring inference calls never traverse a public endpoint under a strict network mandate. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'B', text: "Configure a virtual network service endpoint on the subnet and add a matching network rule to the Azure AI resource firewall." },
      { id: 'C', text: "Configure the Azure AI resource firewall to accept traffic only from the public IP address of the virtual network's NAT gateway." },
      { id: 'D', text: "Route the subnet's outbound traffic through Azure Firewall with an application rule that permits the Azure AI service FQDN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private endpoint places the service on a private IP inside the virtual network, and disabling public network access removes the public path entirely, so there is no internet-facing endpoint left to reach. A service endpoint keeps traffic on the Azure backbone but the resource retains a public endpoint that any permitted network can still call. Allow-listing the NAT gateway address and filtering egress through Azure Firewall both govern who may reach that public endpoint rather than eliminating it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-60",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Screening User Content for Harm Categories: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AI team is screening user-submitted text and images for harmful content across an application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rely on the content filters already configured on the Azure OpenAI deployment to screen both the prompts and the generated completions." },
      { id: 'B', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'C', text: "Use Azure AI Language sentiment analysis and PII detection to flag any content that scores strongly negative before it is published." },
      { id: 'D', text: "Add a blocklist of prohibited terms to the Azure AI Search index so that documents matching those terms are filtered out of results." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Content Safety is a standalone moderation service, so it scores arbitrary user text and images on the four harm categories wherever they enter the application. The Azure OpenAI content filters cover exactly the prompts and completions of that deployment and see nothing a user uploads elsewhere, and they do not handle images at all. Sentiment analysis measures tone rather than harm, and a strongly negative review is not a policy violation. An index blocklist filters search results and never sees content at submission time.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-61",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "One Resource or Several for Multiple Capabilities: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The AI team is provisioning Vision, Language, and Document Intelligence for one application with a single bill. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create a separate single-service resource for Vision, for Language, and for Document Intelligence, each with its own endpoint, key, and billing line." },
      { id: 'B', text: "Create an Azure AI Foundry hub with a connected project so that every capability is reached through the connections the hub defines." },
      { id: 'C', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." },
      { id: 'D', text: "Create one multi-service resource in each region and route every application to whichever resource has been deployed nearest to it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A multi-service resource exposes one endpoint and one key across the vision, language, and document capabilities and bills them together, which is exactly what a single application drawing on all three needs. Single-service resources are the right choice when a capability needs its own network isolation, quota, or region, at the cost of a key and a bill per service. A Foundry hub organises projects and their connections rather than consolidating the underlying resources, and deploying per region addresses latency rather than the number of endpoints and bills.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-62",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Removing Static Keys From an Application: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The AI team is authenticating an App Service to Azure AI without any credential stored in the application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Register an Entra ID application, keep its client secret in Azure Key Vault, and have the app read the secret to request a token." },
      { id: 'B', text: "Store the Azure AI account key in Azure Key Vault and grant the App Service permission to read that key when it starts." },
      { id: 'C', text: "Restrict the Azure AI resource firewall to the App Service's outbound IP addresses so that the account key cannot be used elsewhere." },
      { id: 'D', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A managed identity is issued and rotated by the platform, so the application requests an Entra ID token at runtime and holds no credential at all. A registered application with a client secret still has a secret, and one that must be rotated before it expires. Putting the account key in Key Vault protects it well but the key remains a shared credential that anyone reading the vault can replay. Restricting the firewall to known egress addresses narrows where a leaked key can be used without removing the key from the design.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-63",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Keeping Inference Traffic Off the Public Internet: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The AI team is ensuring inference calls never traverse a public endpoint under a strict network mandate. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'B', text: "Configure a virtual network service endpoint on the subnet and add a matching network rule to the Azure AI resource firewall." },
      { id: 'C', text: "Configure the Azure AI resource firewall to accept traffic only from the public IP address of the virtual network's NAT gateway." },
      { id: 'D', text: "Route the subnet's outbound traffic through Azure Firewall with an application rule that permits the Azure AI service FQDN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private endpoint places the service on a private IP inside the virtual network, and disabling public network access removes the public path entirely, so there is no internet-facing endpoint left to reach. A service endpoint keeps traffic on the Azure backbone but the resource retains a public endpoint that any permitted network can still call. Allow-listing the NAT gateway address and filtering egress through Azure Firewall both govern who may reach that public endpoint rather than eliminating it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-64",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Screening User Content for Harm Categories: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AI team is screening user-submitted text and images for harmful content across an application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rely on the content filters already configured on the Azure OpenAI deployment to screen both the prompts and the generated completions." },
      { id: 'B', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'C', text: "Use Azure AI Language sentiment analysis and PII detection to flag any content that scores strongly negative before it is published." },
      { id: 'D', text: "Add a blocklist of prohibited terms to the Azure AI Search index so that documents matching those terms are filtered out of results." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Content Safety is a standalone moderation service, so it scores arbitrary user text and images on the four harm categories wherever they enter the application. The Azure OpenAI content filters cover exactly the prompts and completions of that deployment and see nothing a user uploads elsewhere, and they do not handle images at all. Sentiment analysis measures tone rather than harm, and a strongly negative review is not a policy violation. An index blocklist filters search results and never sees content at submission time.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-65",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "One Resource or Several for Multiple Capabilities: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The AI team is provisioning Vision, Language, and Document Intelligence for one application with a single bill. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create a separate single-service resource for Vision, for Language, and for Document Intelligence, each with its own endpoint, key, and billing line." },
      { id: 'B', text: "Create an Azure AI Foundry hub with a connected project so that every capability is reached through the connections the hub defines." },
      { id: 'C', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." },
      { id: 'D', text: "Create one multi-service resource in each region and route every application to whichever resource has been deployed nearest to it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A multi-service resource exposes one endpoint and one key across the vision, language, and document capabilities and bills them together, which is exactly what a single application drawing on all three needs. Single-service resources are the right choice when a capability needs its own network isolation, quota, or region, at the cost of a key and a bill per service. A Foundry hub organises projects and their connections rather than consolidating the underlying resources, and deploying per region addresses latency rather than the number of endpoints and bills.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-66",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Removing Static Keys From an Application: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AI team is authenticating an App Service to Azure AI without any credential stored in the application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Register an Entra ID application, keep its client secret in Azure Key Vault, and have the app read the secret to request a token." },
      { id: 'B', text: "Store the Azure AI account key in Azure Key Vault and grant the App Service permission to read that key when it starts." },
      { id: 'C', text: "Restrict the Azure AI resource firewall to the App Service's outbound IP addresses so that the account key cannot be used elsewhere." },
      { id: 'D', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A managed identity is issued and rotated by the platform, so the application requests an Entra ID token at runtime and holds no credential at all. A registered application with a client secret still has a secret, and one that must be rotated before it expires. Putting the account key in Key Vault protects it well but the key remains a shared credential that anyone reading the vault can replay. Restricting the firewall to known egress addresses narrows where a leaked key can be used without removing the key from the design.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-67",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Keeping Inference Traffic Off the Public Internet: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AI team is ensuring inference calls never traverse a public endpoint under a strict network mandate. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'B', text: "Configure a virtual network service endpoint on the subnet and add a matching network rule to the Azure AI resource firewall." },
      { id: 'C', text: "Configure the Azure AI resource firewall to accept traffic only from the public IP address of the virtual network's NAT gateway." },
      { id: 'D', text: "Route the subnet's outbound traffic through Azure Firewall with an application rule that permits the Azure AI service FQDN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private endpoint places the service on a private IP inside the virtual network, and disabling public network access removes the public path entirely, so there is no internet-facing endpoint left to reach. A service endpoint keeps traffic on the Azure backbone but the resource retains a public endpoint that any permitted network can still call. Allow-listing the NAT gateway address and filtering egress through Azure Firewall both govern who may reach that public endpoint rather than eliminating it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-68",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Screening User Content for Harm Categories: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AI team is screening user-submitted text and images for harmful content across an application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rely on the content filters already configured on the Azure OpenAI deployment to screen both the prompts and the generated completions." },
      { id: 'B', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'C', text: "Use Azure AI Language sentiment analysis and PII detection to flag any content that scores strongly negative before it is published." },
      { id: 'D', text: "Add a blocklist of prohibited terms to the Azure AI Search index so that documents matching those terms are filtered out of results." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Content Safety is a standalone moderation service, so it scores arbitrary user text and images on the four harm categories wherever they enter the application. The Azure OpenAI content filters cover exactly the prompts and completions of that deployment and see nothing a user uploads elsewhere, and they do not handle images at all. Sentiment analysis measures tone rather than harm, and a strongly negative review is not a policy violation. An index blocklist filters search results and never sees content at submission time.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-69",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "One Resource or Several for Multiple Capabilities: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AI team is provisioning Vision, Language, and Document Intelligence for one application with a single bill. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create a separate single-service resource for Vision, for Language, and for Document Intelligence, each with its own endpoint, key, and billing line." },
      { id: 'B', text: "Create an Azure AI Foundry hub with a connected project so that every capability is reached through the connections the hub defines." },
      { id: 'C', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." },
      { id: 'D', text: "Create one multi-service resource in each region and route every application to whichever resource has been deployed nearest to it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A multi-service resource exposes one endpoint and one key across the vision, language, and document capabilities and bills them together, which is exactly what a single application drawing on all three needs. Single-service resources are the right choice when a capability needs its own network isolation, quota, or region, at the cost of a key and a bill per service. A Foundry hub organises projects and their connections rather than consolidating the underlying resources, and deploying per region addresses latency rather than the number of endpoints and bills.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-70",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Removing Static Keys From an Application: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The AI team is authenticating an App Service to Azure AI without any credential stored in the application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Register an Entra ID application, keep its client secret in Azure Key Vault, and have the app read the secret to request a token." },
      { id: 'B', text: "Store the Azure AI account key in Azure Key Vault and grant the App Service permission to read that key when it starts." },
      { id: 'C', text: "Restrict the Azure AI resource firewall to the App Service's outbound IP addresses so that the account key cannot be used elsewhere." },
      { id: 'D', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A managed identity is issued and rotated by the platform, so the application requests an Entra ID token at runtime and holds no credential at all. A registered application with a client secret still has a secret, and one that must be rotated before it expires. Putting the account key in Key Vault protects it well but the key remains a shared credential that anyone reading the vault can replay. Restricting the firewall to known egress addresses narrows where a leaked key can be used without removing the key from the design.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-71",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Keeping Inference Traffic Off the Public Internet: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AI team is ensuring inference calls never traverse a public endpoint under a strict network mandate. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'B', text: "Configure a virtual network service endpoint on the subnet and add a matching network rule to the Azure AI resource firewall." },
      { id: 'C', text: "Configure the Azure AI resource firewall to accept traffic only from the public IP address of the virtual network's NAT gateway." },
      { id: 'D', text: "Route the subnet's outbound traffic through Azure Firewall with an application rule that permits the Azure AI service FQDN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private endpoint places the service on a private IP inside the virtual network, and disabling public network access removes the public path entirely, so there is no internet-facing endpoint left to reach. A service endpoint keeps traffic on the Azure backbone but the resource retains a public endpoint that any permitted network can still call. Allow-listing the NAT gateway address and filtering egress through Azure Firewall both govern who may reach that public endpoint rather than eliminating it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-72",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Screening User Content for Harm Categories: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AI team is screening user-submitted text and images for harmful content across an application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rely on the content filters already configured on the Azure OpenAI deployment to screen both the prompts and the generated completions." },
      { id: 'B', text: "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels." },
      { id: 'C', text: "Use Azure AI Language sentiment analysis and PII detection to flag any content that scores strongly negative before it is published." },
      { id: 'D', text: "Add a blocklist of prohibited terms to the Azure AI Search index so that documents matching those terms are filtered out of results." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Content Safety is a standalone moderation service, so it scores arbitrary user text and images on the four harm categories wherever they enter the application. The Azure OpenAI content filters cover exactly the prompts and completions of that deployment and see nothing a user uploads elsewhere, and they do not handle images at all. Sentiment analysis measures tone rather than harm, and a strongly negative review is not a policy violation. An index blocklist filters search results and never sees content at submission time.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["content-safety", "responsible-ai", "moderation", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-73",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "One Resource or Several for Multiple Capabilities: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AI team is provisioning Vision, Language, and Document Intelligence for one application with a single bill. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create a separate single-service resource for Vision, for Language, and for Document Intelligence, each with its own endpoint, key, and billing line." },
      { id: 'B', text: "Create an Azure AI Foundry hub with a connected project so that every capability is reached through the connections the hub defines." },
      { id: 'C', text: "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence." },
      { id: 'D', text: "Create one multi-service resource in each region and route every application to whichever resource has been deployed nearest to it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A multi-service resource exposes one endpoint and one key across the vision, language, and document capabilities and bills them together, which is exactly what a single application drawing on all three needs. Single-service resources are the right choice when a capability needs its own network isolation, quota, or region, at the cost of a key and a bill per service. A Foundry hub organises projects and their connections rather than consolidating the underlying resources, and deploying per region addresses latency rather than the number of endpoints and bills.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["azure-ai", "multi-service", "management", "Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-74",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Removing Static Keys From an Application: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The AI team is authenticating an App Service to Azure AI without any credential stored in the application. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Register an Entra ID application, keep its client secret in Azure Key Vault, and have the app read the secret to request a token." },
      { id: 'B', text: "Store the Azure AI account key in Azure Key Vault and grant the App Service permission to read that key when it starts." },
      { id: 'C', text: "Restrict the Azure AI resource firewall to the App Service's outbound IP addresses so that the account key cannot be used elsewhere." },
      { id: 'D', text: "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A managed identity is issued and rotated by the platform, so the application requests an Entra ID token at runtime and holds no credential at all. A registered application with a client secret still has a secret, and one that must be rotated before it expires. Putting the account key in Key Vault protects it well but the key remains a shared credential that anyone reading the vault can replay. Restricting the firewall to known egress addresses narrows where a leaked key can be used without removing the key from the design.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["security", "managed-identity", "entra-id", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-75",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d1",
    domainName: "Plan and manage an Azure AI solution",
    title: "Keeping Inference Traffic Off the Public Internet: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AI team is ensuring inference calls never traverse a public endpoint under a strict network mandate. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource." },
      { id: 'B', text: "Configure a virtual network service endpoint on the subnet and add a matching network rule to the Azure AI resource firewall." },
      { id: 'C', text: "Configure the Azure AI resource firewall to accept traffic only from the public IP address of the virtual network's NAT gateway." },
      { id: 'D', text: "Route the subnet's outbound traffic through Azure Firewall with an application rule that permits the Azure AI service FQDN." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private endpoint places the service on a private IP inside the virtual network, and disabling public network access removes the public path entirely, so there is no internet-facing endpoint left to reach. A service endpoint keeps traffic on the Azure backbone but the resource retains a public endpoint that any permitted network can still call. Allow-listing the NAT gateway address and filtering egress through Azure Firewall both govern who may reach that public endpoint rather than eliminating it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["networking", "private-endpoint", "vnet", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_3;
