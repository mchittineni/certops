export const AZURE_AI102_QUESTIONS_6 = [
  {
    id: "azure-ai102-126",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "System Message Steering and Prompt Engineering: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading solution, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The enterprise AI team is currently defining model persona, boundaries, and few-shot examples under architecture delivery sprint 6.1.",
    question: "Which Azure AI service architecture or configuration satisfies these high-frequency fintech trading requirements for system message steering and prompt engineering?",
    options: [
      { id: 'A', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." },
      { id: 'B', text: "Leave the system prompt blank and allow end-users to override application instructions." },
      { id: 'C', text: "Embed user input directly into system instructions without sanitizing delimiters." },
      { id: 'D', text: "Set model temperature to 2.0 to ensure predictable, deterministic mathematical answers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The system message sets the behavioral foundation, domain scope, and output constraints for language models. Providing few-shot demonstration examples and explicit refusal boundaries guides the model to produce deterministic, accurate, and secure outputs.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering", "system-message", "openai", "High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-127",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Azure OpenAI RAG with Azure AI Search: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa solution, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The enterprise AI team is currently grounding llm responses with proprietary corporate knowledge under architecture delivery sprint 6.2.",
    question: "Which Azure AI service architecture or configuration satisfies these healthcare patient records & hipaa requirements for azure openai rag with azure ai search?",
    options: [
      { id: 'A', text: "Fine-tune GPT-4 by re-training it daily on 10,000 internal PDF documents." },
      { id: 'B', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'C', text: "Paste the entire 50-megabyte enterprise document library into every user prompt." },
      { id: 'D', text: "Store corporate documents in public S3 buckets and allow the model to crawl the web." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Retrieval-Augmented Generation (RAG) grounds language models on internal enterprise documents without expensive model retraining. Azure OpenAI 'On Your Data' queries Azure AI Search using hybrid vector search and semantic ranking to inject precise contextual chunks into the prompt, eliminating hallucinations.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "rag", "ai-search", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-128",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Provisioned Throughput Units (PTU): Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale solution, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The enterprise AI team is currently predictable latency and reserved capacity for production workloads under architecture delivery sprint 6.3.",
    question: "Which Azure AI service architecture or configuration satisfies these global e-commerce black friday scale requirements for provisioned throughput units (ptu)?",
    options: [
      { id: 'A', text: "Use standard Pay-As-You-Go deployment and handle 429 Too Many Requests errors with infinite retry loops." },
      { id: 'B', text: "Deploy 50 identical standard pay-as-you-go models across random unmonitored subscriptions." },
      { id: 'C', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'D', text: "Run language models locally on individual developer laptops using consumer GPUs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provisioned Throughput Units (PTU) reserve dedicated model processing capacity for Azure OpenAI workloads. Unlike standard pay-as-you-go deployments that share regional multi-tenant compute and face rate limits, PTU ensures deterministic throughput, predictable latency SLAs, and high-volume stability.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "ptu", "capacity", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-129",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Function Calling and Structured Tool Use: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry solution, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The enterprise AI team is currently connecting azure openai models to external database and api tools under architecture delivery sprint 6.4.",
    question: "Which Azure AI service architecture or configuration satisfies these autonomous vehicle telemetry requirements for function calling and structured tool use?",
    options: [
      { id: 'A', text: "Instruct the model to execute arbitrary shell commands directly on the Azure AI host server." },
      { id: 'B', text: "Ask the model to hallucinate SQL query results without connecting to the actual database." },
      { id: 'C', text: "Hardcode database root passwords in the system prompt so the model can connect via ODBC." },
      { id: 'D', text: "Define JSON schemas for tools in the model request and execute the returned function arguments in your application to fetch live data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure OpenAI function calling allows models to return structured JSON containing function names and arguments matching client-provided tool schemas. The application executes the external API or database query and feeds the result back to the model for conversational synthesis.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "function-calling", "tools", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-130",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "System Message Steering and Prompt Engineering: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform solution, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The enterprise AI team is currently defining model persona, boundaries, and few-shot examples under architecture delivery sprint 6.5.",
    question: "Which Azure AI service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for system message steering and prompt engineering?",
    options: [
      { id: 'A', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." },
      { id: 'B', text: "Leave the system prompt blank and allow end-users to override application instructions." },
      { id: 'C', text: "Embed user input directly into system instructions without sanitizing delimiters." },
      { id: 'D', text: "Set model temperature to 2.0 to ensure predictable, deterministic mathematical answers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The system message sets the behavioral foundation, domain scope, and output constraints for language models. Providing few-shot demonstration examples and explicit refusal boundaries guides the model to produce deterministic, accurate, and secure outputs.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering", "system-message", "openai", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-131",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Azure OpenAI RAG with Azure AI Search: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn solution, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The enterprise AI team is currently grounding llm responses with proprietary corporate knowledge under architecture delivery sprint 6.6.",
    question: "Which Azure AI service architecture or configuration satisfies these media streaming & global cdn requirements for azure openai rag with azure ai search?",
    options: [
      { id: 'A', text: "Fine-tune GPT-4 by re-training it daily on 10,000 internal PDF documents." },
      { id: 'B', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'C', text: "Paste the entire 50-megabyte enterprise document library into every user prompt." },
      { id: 'D', text: "Store corporate documents in public S3 buckets and allow the model to crawl the web." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Retrieval-Augmented Generation (RAG) grounds language models on internal enterprise documents without expensive model retraining. Azure OpenAI 'On Your Data' queries Azure AI Search using hybrid vector search and semantic ranking to inject precise contextual chunks into the prompt, eliminating hallucinations.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "rag", "ai-search", "Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-132",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Provisioned Throughput Units (PTU): Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems solution, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The enterprise AI team is currently predictable latency and reserved capacity for production workloads under architecture delivery sprint 6.7.",
    question: "Which Azure AI service architecture or configuration satisfies these aerospace satellite ground systems requirements for provisioned throughput units (ptu)?",
    options: [
      { id: 'A', text: "Use standard Pay-As-You-Go deployment and handle 429 Too Many Requests errors with infinite retry loops." },
      { id: 'B', text: "Deploy 50 identical standard pay-as-you-go models across random unmonitored subscriptions." },
      { id: 'C', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'D', text: "Run language models locally on individual developer laptops using consumer GPUs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provisioned Throughput Units (PTU) reserve dedicated model processing capacity for Azure OpenAI workloads. Unlike standard pay-as-you-go deployments that share regional multi-tenant compute and face rate limits, PTU ensures deterministic throughput, predictable latency SLAs, and high-volume stability.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "ptu", "capacity", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-133",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Function Calling and Structured Tool Use: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network solution, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The enterprise AI team is currently connecting azure openai models to external database and api tools under architecture delivery sprint 6.8.",
    question: "Which Azure AI service architecture or configuration satisfies these telecommunications 5g core network requirements for function calling and structured tool use?",
    options: [
      { id: 'A', text: "Instruct the model to execute arbitrary shell commands directly on the Azure AI host server." },
      { id: 'B', text: "Ask the model to hallucinate SQL query results without connecting to the actual database." },
      { id: 'C', text: "Hardcode database root passwords in the system prompt so the model can connect via ODBC." },
      { id: 'D', text: "Define JSON schemas for tools in the model request and execute the returned function arguments in your application to fetch live data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure OpenAI function calling allows models to return structured JSON containing function names and arguments matching client-provided tool schemas. The application executes the external API or database query and feeds the result back to the model for conversational synthesis.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "function-calling", "tools", "Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-134",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "System Message Steering and Prompt Engineering: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot solution, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The enterprise AI team is currently defining model persona, boundaries, and few-shot examples under architecture delivery sprint 6.9.",
    question: "Which Azure AI service architecture or configuration satisfies these renewable energy smart grid iot requirements for system message steering and prompt engineering?",
    options: [
      { id: 'A', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." },
      { id: 'B', text: "Leave the system prompt blank and allow end-users to override application instructions." },
      { id: 'C', text: "Embed user input directly into system instructions without sanitizing delimiters." },
      { id: 'D', text: "Set model temperature to 2.0 to ensure predictable, deterministic mathematical answers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The system message sets the behavioral foundation, domain scope, and output constraints for language models. Providing few-shot demonstration examples and explicit refusal boundaries guides the model to produce deterministic, accurate, and secure outputs.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering", "system-message", "openai", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-135",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Azure OpenAI RAG with Azure AI Search: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics solution, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The enterprise AI team is currently grounding llm responses with proprietary corporate knowledge under architecture delivery sprint 6.10.",
    question: "Which Azure AI service architecture or configuration satisfies these supply chain cold-chain logistics requirements for azure openai rag with azure ai search?",
    options: [
      { id: 'A', text: "Fine-tune GPT-4 by re-training it daily on 10,000 internal PDF documents." },
      { id: 'B', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'C', text: "Paste the entire 50-megabyte enterprise document library into every user prompt." },
      { id: 'D', text: "Store corporate documents in public S3 buckets and allow the model to crawl the web." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Retrieval-Augmented Generation (RAG) grounds language models on internal enterprise documents without expensive model retraining. Azure OpenAI 'On Your Data' queries Azure AI Search using hybrid vector search and semantic ranking to inject precise contextual chunks into the prompt, eliminating hallucinations.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "rag", "ai-search", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-136",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Provisioned Throughput Units (PTU): Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments solution, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The enterprise AI team is currently predictable latency and reserved capacity for production workloads under architecture delivery sprint 6.11.",
    question: "Which Azure AI service architecture or configuration satisfies these banking core ledger & payments requirements for provisioned throughput units (ptu)?",
    options: [
      { id: 'A', text: "Use standard Pay-As-You-Go deployment and handle 429 Too Many Requests errors with infinite retry loops." },
      { id: 'B', text: "Deploy 50 identical standard pay-as-you-go models across random unmonitored subscriptions." },
      { id: 'C', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'D', text: "Run language models locally on individual developer laptops using consumer GPUs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provisioned Throughput Units (PTU) reserve dedicated model processing capacity for Azure OpenAI workloads. Unlike standard pay-as-you-go deployments that share regional multi-tenant compute and face rate limits, PTU ensures deterministic throughput, predictable latency SLAs, and high-volume stability.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "ptu", "capacity", "Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-137",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Function Calling and Structured Tool Use: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline solution, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The enterprise AI team is currently connecting azure openai models to external database and api tools under architecture delivery sprint 6.12.",
    question: "Which Azure AI service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for function calling and structured tool use?",
    options: [
      { id: 'A', text: "Instruct the model to execute arbitrary shell commands directly on the Azure AI host server." },
      { id: 'B', text: "Ask the model to hallucinate SQL query results without connecting to the actual database." },
      { id: 'C', text: "Hardcode database root passwords in the system prompt so the model can connect via ODBC." },
      { id: 'D', text: "Define JSON schemas for tools in the model request and execute the returned function arguments in your application to fetch live data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure OpenAI function calling allows models to return structured JSON containing function names and arguments matching client-provided tool schemas. The application executes the external API or database query and feeds the result back to the model for conversational synthesis.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "function-calling", "tools", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-138",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "System Message Steering and Prompt Engineering: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network solution, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The enterprise AI team is currently defining model persona, boundaries, and few-shot examples under architecture delivery sprint 6.13.",
    question: "Which Azure AI service architecture or configuration satisfies these defense-grade zero-trust network requirements for system message steering and prompt engineering?",
    options: [
      { id: 'A', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." },
      { id: 'B', text: "Leave the system prompt blank and allow end-users to override application instructions." },
      { id: 'C', text: "Embed user input directly into system instructions without sanitizing delimiters." },
      { id: 'D', text: "Set model temperature to 2.0 to ensure predictable, deterministic mathematical answers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The system message sets the behavioral foundation, domain scope, and output constraints for language models. Providing few-shot demonstration examples and explicit refusal boundaries guides the model to produce deterministic, accurate, and secure outputs.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering", "system-message", "openai", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-139",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Azure OpenAI RAG with Azure AI Search: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine solution, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The enterprise AI team is currently grounding llm responses with proprietary corporate knowledge under architecture delivery sprint 6.14.",
    question: "Which Azure AI service architecture or configuration satisfies these online multiplayer gaming engine requirements for azure openai rag with azure ai search?",
    options: [
      { id: 'A', text: "Fine-tune GPT-4 by re-training it daily on 10,000 internal PDF documents." },
      { id: 'B', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'C', text: "Paste the entire 50-megabyte enterprise document library into every user prompt." },
      { id: 'D', text: "Store corporate documents in public S3 buckets and allow the model to crawl the web." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Retrieval-Augmented Generation (RAG) grounds language models on internal enterprise documents without expensive model retraining. Azure OpenAI 'On Your Data' queries Azure AI Search using hybrid vector search and semantic ranking to inject precise contextual chunks into the prompt, eliminating hallucinations.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "rag", "ai-search", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-140",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Provisioned Throughput Units (PTU): Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling solution, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The enterprise AI team is currently predictable latency and reserved capacity for production workloads under architecture delivery sprint 6.15.",
    question: "Which Azure AI service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for provisioned throughput units (ptu)?",
    options: [
      { id: 'A', text: "Use standard Pay-As-You-Go deployment and handle 429 Too Many Requests errors with infinite retry loops." },
      { id: 'B', text: "Deploy 50 identical standard pay-as-you-go models across random unmonitored subscriptions." },
      { id: 'C', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'D', text: "Run language models locally on individual developer laptops using consumer GPUs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provisioned Throughput Units (PTU) reserve dedicated model processing capacity for Azure OpenAI workloads. Unlike standard pay-as-you-go deployments that share regional multi-tenant compute and face rate limits, PTU ensures deterministic throughput, predictable latency SLAs, and high-volume stability.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "ptu", "capacity", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-141",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Function Calling and Structured Tool Use: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform solution, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The enterprise AI team is currently connecting azure openai models to external database and api tools under architecture delivery sprint 6.16.",
    question: "Which Azure AI service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for function calling and structured tool use?",
    options: [
      { id: 'A', text: "Instruct the model to execute arbitrary shell commands directly on the Azure AI host server." },
      { id: 'B', text: "Ask the model to hallucinate SQL query results without connecting to the actual database." },
      { id: 'C', text: "Hardcode database root passwords in the system prompt so the model can connect via ODBC." },
      { id: 'D', text: "Define JSON schemas for tools in the model request and execute the returned function arguments in your application to fetch live data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure OpenAI function calling allows models to return structured JSON containing function names and arguments matching client-provided tool schemas. The application executes the external API or database query and feeds the result back to the model for conversational synthesis.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "function-calling", "tools", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-142",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "System Message Steering and Prompt Engineering: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub solution, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The enterprise AI team is currently defining model persona, boundaries, and few-shot examples under architecture delivery sprint 6.17.",
    question: "Which Azure AI service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for system message steering and prompt engineering?",
    options: [
      { id: 'A', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." },
      { id: 'B', text: "Leave the system prompt blank and allow end-users to override application instructions." },
      { id: 'C', text: "Embed user input directly into system instructions without sanitizing delimiters." },
      { id: 'D', text: "Set model temperature to 2.0 to ensure predictable, deterministic mathematical answers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The system message sets the behavioral foundation, domain scope, and output constraints for language models. Providing few-shot demonstration examples and explicit refusal boundaries guides the model to produce deterministic, accurate, and secure outputs.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering", "system-message", "openai", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-143",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Azure OpenAI RAG with Azure AI Search: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification solution, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The enterprise AI team is currently grounding llm responses with proprietary corporate knowledge under architecture delivery sprint 6.18.",
    question: "Which Azure AI service architecture or configuration satisfies these digital identity & biometric verification requirements for azure openai rag with azure ai search?",
    options: [
      { id: 'A', text: "Fine-tune GPT-4 by re-training it daily on 10,000 internal PDF documents." },
      { id: 'B', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'C', text: "Paste the entire 50-megabyte enterprise document library into every user prompt." },
      { id: 'D', text: "Store corporate documents in public S3 buckets and allow the model to crawl the web." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Retrieval-Augmented Generation (RAG) grounds language models on internal enterprise documents without expensive model retraining. Azure OpenAI 'On Your Data' queries Azure AI Search using hybrid vector search and semantic ranking to inject precise contextual chunks into the prompt, eliminating hallucinations.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "rag", "ai-search", "Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-144",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Provisioned Throughput Units (PTU): Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search solution, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The enterprise AI team is currently predictable latency and reserved capacity for production workloads under architecture delivery sprint 6.19.",
    question: "Which Azure AI service architecture or configuration satisfies these legal discovery & semantic document search requirements for provisioned throughput units (ptu)?",
    options: [
      { id: 'A', text: "Use standard Pay-As-You-Go deployment and handle 429 Too Many Requests errors with infinite retry loops." },
      { id: 'B', text: "Deploy 50 identical standard pay-as-you-go models across random unmonitored subscriptions." },
      { id: 'C', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'D', text: "Run language models locally on individual developer laptops using consumer GPUs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provisioned Throughput Units (PTU) reserve dedicated model processing capacity for Azure OpenAI workloads. Unlike standard pay-as-you-go deployments that share regional multi-tenant compute and face rate limits, PTU ensures deterministic throughput, predictable latency SLAs, and high-volume stability.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "ptu", "capacity", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-145",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Function Calling and Structured Tool Use: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange solution, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The enterprise AI team is currently connecting azure openai models to external database and api tools under architecture delivery sprint 6.20.",
    question: "Which Azure AI service architecture or configuration satisfies these adtech real-time bidding exchange requirements for function calling and structured tool use?",
    options: [
      { id: 'A', text: "Instruct the model to execute arbitrary shell commands directly on the Azure AI host server." },
      { id: 'B', text: "Ask the model to hallucinate SQL query results without connecting to the actual database." },
      { id: 'C', text: "Hardcode database root passwords in the system prompt so the model can connect via ODBC." },
      { id: 'D', text: "Define JSON schemas for tools in the model request and execute the returned function arguments in your application to fetch live data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure OpenAI function calling allows models to return structured JSON containing function names and arguments matching client-provided tool schemas. The application executes the external API or database query and feeds the result back to the model for conversational synthesis.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "function-calling", "tools", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-146",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "System Message Steering and Prompt Engineering: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting solution, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The enterprise AI team is currently defining model persona, boundaries, and few-shot examples under architecture delivery sprint 6.21.",
    question: "Which Azure AI service architecture or configuration satisfies these precision agriculture & drone scouting requirements for system message steering and prompt engineering?",
    options: [
      { id: 'A', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." },
      { id: 'B', text: "Leave the system prompt blank and allow end-users to override application instructions." },
      { id: 'C', text: "Embed user input directly into system instructions without sanitizing delimiters." },
      { id: 'D', text: "Set model temperature to 2.0 to ensure predictable, deterministic mathematical answers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The system message sets the behavioral foundation, domain scope, and output constraints for language models. Providing few-shot demonstration examples and explicit refusal boundaries guides the model to produce deterministic, accurate, and secure outputs.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering", "system-message", "openai", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-147",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Azure OpenAI RAG with Azure AI Search: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance solution, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The enterprise AI team is currently grounding llm responses with proprietary corporate knowledge under architecture delivery sprint 6.22.",
    question: "Which Azure AI service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for azure openai rag with azure ai search?",
    options: [
      { id: 'A', text: "Fine-tune GPT-4 by re-training it daily on 10,000 internal PDF documents." },
      { id: 'B', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'C', text: "Paste the entire 50-megabyte enterprise document library into every user prompt." },
      { id: 'D', text: "Store corporate documents in public S3 buckets and allow the model to crawl the web." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Retrieval-Augmented Generation (RAG) grounds language models on internal enterprise documents without expensive model retraining. Azure OpenAI 'On Your Data' queries Azure AI Search using hybrid vector search and semantic ranking to inject precise contextual chunks into the prompt, eliminating hallucinations.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "rag", "ai-search", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-148",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Provisioned Throughput Units (PTU): Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform solution, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The enterprise AI team is currently predictable latency and reserved capacity for production workloads under architecture delivery sprint 6.23.",
    question: "Which Azure AI service architecture or configuration satisfies these educational remote proctoring platform requirements for provisioned throughput units (ptu)?",
    options: [
      { id: 'A', text: "Use standard Pay-As-You-Go deployment and handle 429 Too Many Requests errors with infinite retry loops." },
      { id: 'B', text: "Deploy 50 identical standard pay-as-you-go models across random unmonitored subscriptions." },
      { id: 'C', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'D', text: "Run language models locally on individual developer laptops using consumer GPUs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provisioned Throughput Units (PTU) reserve dedicated model processing capacity for Azure OpenAI workloads. Unlike standard pay-as-you-go deployments that share regional multi-tenant compute and face rate limits, PTU ensures deterministic throughput, predictable latency SLAs, and high-volume stability.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "ptu", "capacity", "Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-149",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Function Calling and Structured Tool Use: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics solution, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The enterprise AI team is currently connecting azure openai models to external database and api tools under architecture delivery sprint 6.24.",
    question: "Which Azure AI service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for function calling and structured tool use?",
    options: [
      { id: 'A', text: "Instruct the model to execute arbitrary shell commands directly on the Azure AI host server." },
      { id: 'B', text: "Ask the model to hallucinate SQL query results without connecting to the actual database." },
      { id: 'C', text: "Hardcode database root passwords in the system prompt so the model can connect via ODBC." },
      { id: 'D', text: "Define JSON schemas for tools in the model request and execute the returned function arguments in your application to fetch live data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure OpenAI function calling allows models to return structured JSON containing function names and arguments matching client-provided tool schemas. The application executes the external API or database query and feeds the result back to the model for conversational synthesis.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai", "function-calling", "tools", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-150",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "System Message Steering and Prompt Engineering: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations solution, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The enterprise AI team is currently defining model persona, boundaries, and few-shot examples under architecture delivery sprint 6.25.",
    question: "Which Azure AI service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for system message steering and prompt engineering?",
    options: [
      { id: 'A', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." },
      { id: 'B', text: "Leave the system prompt blank and allow end-users to override application instructions." },
      { id: 'C', text: "Embed user input directly into system instructions without sanitizing delimiters." },
      { id: 'D', text: "Set model temperature to 2.0 to ensure predictable, deterministic mathematical answers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The system message sets the behavioral foundation, domain scope, and output constraints for language models. Providing few-shot demonstration examples and explicit refusal boundaries guides the model to produce deterministic, accurate, and secure outputs.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering", "system-message", "openai", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_6;
