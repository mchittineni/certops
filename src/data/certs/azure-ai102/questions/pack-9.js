export const AZURE_AI102_QUESTIONS_9 = [
  {
    id: "azure-ai102-201",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Answering From Proprietary Documents: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AI team is getting accurate answers out of an internal document corpus that changes weekly. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'B', text: "Fine-tune a base model on the whole document corpus so that the answers are learned directly into the model's own weights and no retrieval step is needed at query time." },
      { id: 'C', text: "Raise the deployment's context window and place the entire document set into the system message on every single request." },
      { id: 'D', text: "Use Azure AI Search on its own to ground the answer, returning the highest-ranked document extracts with no model in the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieval grounds each answer in the specific passages that were retrieved for that question, and because the index is refreshed independently a weekly corpus change costs an indexer run rather than anything model-side. Fine-tuning teaches style far better than facts, and every corpus change would mean another training cycle. Stuffing the full corpus into each request is bounded by the context window and pays for every token on every call. Search alone returns passages but leaves the user to synthesise the answer.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","rag","ai-search","High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-202",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Guaranteed Capacity for a Latency-Sensitive Workload: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The AI team is guaranteeing consistent inference latency for a workload that cannot tolerate throttling. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a standard deployment and request a regional quota increase so that the tokens-per-minute limit comfortably covers the peak load that is expected in that region." },
      { id: 'B', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'C', text: "Use a standard deployment and add a batch endpoint so that requests queue and complete at a consistent latency once shared capacity becomes available." },
      { id: 'D', text: "Deploy the same model into several regions and have the client retry against the next region whenever it receives a 429 response." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PTU reserves dedicated capacity for the deployment, so throughput and latency stop depending on what other tenants in the region are doing. A quota increase raises the ceiling on a shared pool and does nothing to make the latency within it predictable. A batch endpoint deliberately trades latency for cost and is the wrong shape for interactive traffic. Multi-region retry improves availability but adds a failed call and a second round trip to the very requests that were already slow.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","ptu","capacity","Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-203",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Letting a Model Reach Live System Data: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AI team is letting a chat application answer questions from live data held in operational systems. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Place the current values in the system message on every request so that the model always has fresh data available to answer from." },
      { id: 'B', text: "Ask the model to return a JSON object describing the query it wants and parse that free-text response inside the application." },
      { id: 'C', text: "Define JSON tool schemas and run the returned function arguments." },
      { id: 'D', text: "Use Azure OpenAI 'On Your Data' against an Azure AI Search index that a scheduled indexer refreshes from the live source systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Tool schemas make the model emit a validated call naming a function and its arguments, so the application runs the query and the answer reflects the system state at that moment. Pushing current values into the system message only works for a small, known set of data and grows with every request. Asking for JSON in free text produces something close to the same result without the schema validation, so malformed arguments surface at parse time. An indexed copy is only as fresh as the last indexer run, which is the staleness the requirement rules out.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","function-calling","tools","Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-204",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Constraining Model Behaviour and Refusals: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AI team is fixing an assistant's persona, scope, and refusal behaviour before it goes live. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Fine-tune the deployed model on several thousand examples that demonstrate both the intended persona and the required output format in each case." },
      { id: 'B', text: "Set the response_format parameter to a JSON schema so that the model is constrained to the required output structure, including its refusal shape." },
      { id: 'C', text: "Lower the temperature and top_p values so that the model's responses become considerably more consistent from call to call." },
      { id: 'D', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The system message is where persona, scope, refusals, and worked examples belong, and changing any of them is a configuration edit rather than a deployment. Fine-tuning can teach a house style but costs a training run for every adjustment and is a poor way to express a refusal boundary. response_format governs the shape of the output and says nothing about what the assistant is or declines to do. Temperature and top_p change how varied the sampling is, not what behaviour is being sampled.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering","system-message","openai","Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-205",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Answering From Proprietary Documents: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AI team is getting accurate answers out of an internal document corpus that changes weekly. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'B', text: "Fine-tune a base model on the whole document corpus so that the answers are learned directly into the model's own weights and no retrieval step is needed at query time." },
      { id: 'C', text: "Raise the deployment's context window and place the entire document set into the system message on every single request." },
      { id: 'D', text: "Use Azure AI Search on its own to ground the answer, returning the highest-ranked document extracts with no model in the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieval grounds each answer in the specific passages that were retrieved for that question, and because the index is refreshed independently a weekly corpus change costs an indexer run rather than anything model-side. Fine-tuning teaches style far better than facts, and every corpus change would mean another training cycle. Stuffing the full corpus into each request is bounded by the context window and pays for every token on every call. Search alone returns passages but leaves the user to synthesise the answer.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","rag","ai-search","Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-206",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Guaranteed Capacity for a Latency-Sensitive Workload: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The AI team is guaranteeing consistent inference latency for a workload that cannot tolerate throttling. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a standard deployment and request a regional quota increase so that the tokens-per-minute limit comfortably covers the peak load that is expected in that region." },
      { id: 'B', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'C', text: "Use a standard deployment and add a batch endpoint so that requests queue and complete at a consistent latency once shared capacity becomes available." },
      { id: 'D', text: "Deploy the same model into several regions and have the client retry against the next region whenever it receives a 429 response." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PTU reserves dedicated capacity for the deployment, so throughput and latency stop depending on what other tenants in the region are doing. A quota increase raises the ceiling on a shared pool and does nothing to make the latency within it predictable. A batch endpoint deliberately trades latency for cost and is the wrong shape for interactive traffic. Multi-region retry improves availability but adds a failed call and a second round trip to the very requests that were already slow.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","ptu","capacity","Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-207",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Letting a Model Reach Live System Data: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AI team is letting a chat application answer questions from live data held in operational systems. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Place the current values in the system message on every request so that the model always has fresh data available to answer from." },
      { id: 'B', text: "Ask the model to return a JSON object describing the query it wants and parse that free-text response inside the application." },
      { id: 'C', text: "Define JSON tool schemas and run the returned function arguments." },
      { id: 'D', text: "Use Azure OpenAI 'On Your Data' against an Azure AI Search index that a scheduled indexer refreshes from the live source systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Tool schemas make the model emit a validated call naming a function and its arguments, so the application runs the query and the answer reflects the system state at that moment. Pushing current values into the system message only works for a small, known set of data and grows with every request. Asking for JSON in free text produces something close to the same result without the schema validation, so malformed arguments surface at parse time. An indexed copy is only as fresh as the last indexer run, which is the staleness the requirement rules out.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","function-calling","tools","Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-208",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Constraining Model Behaviour and Refusals: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AI team is fixing an assistant's persona, scope, and refusal behaviour before it goes live. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Fine-tune the deployed model on several thousand examples that demonstrate both the intended persona and the required output format in each case." },
      { id: 'B', text: "Set the response_format parameter to a JSON schema so that the model is constrained to the required output structure, including its refusal shape." },
      { id: 'C', text: "Lower the temperature and top_p values so that the model's responses become considerably more consistent from call to call." },
      { id: 'D', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The system message is where persona, scope, refusals, and worked examples belong, and changing any of them is a configuration edit rather than a deployment. Fine-tuning can teach a house style but costs a training run for every adjustment and is a poor way to express a refusal boundary. response_format governs the shape of the output and says nothing about what the assistant is or declines to do. Temperature and top_p change how varied the sampling is, not what behaviour is being sampled.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering","system-message","openai","Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-209",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Answering From Proprietary Documents: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AI team is getting accurate answers out of an internal document corpus that changes weekly. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'B', text: "Fine-tune a base model on the whole document corpus so that the answers are learned directly into the model's own weights and no retrieval step is needed at query time." },
      { id: 'C', text: "Raise the deployment's context window and place the entire document set into the system message on every single request." },
      { id: 'D', text: "Use Azure AI Search on its own to ground the answer, returning the highest-ranked document extracts with no model in the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieval grounds each answer in the specific passages that were retrieved for that question, and because the index is refreshed independently a weekly corpus change costs an indexer run rather than anything model-side. Fine-tuning teaches style far better than facts, and every corpus change would mean another training cycle. Stuffing the full corpus into each request is bounded by the context window and pays for every token on every call. Search alone returns passages but leaves the user to synthesise the answer.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","rag","ai-search","Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-210",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Guaranteed Capacity for a Latency-Sensitive Workload: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AI team is guaranteeing consistent inference latency for a workload that cannot tolerate throttling. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a standard deployment and request a regional quota increase so that the tokens-per-minute limit comfortably covers the peak load that is expected in that region." },
      { id: 'B', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'C', text: "Use a standard deployment and add a batch endpoint so that requests queue and complete at a consistent latency once shared capacity becomes available." },
      { id: 'D', text: "Deploy the same model into several regions and have the client retry against the next region whenever it receives a 429 response." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PTU reserves dedicated capacity for the deployment, so throughput and latency stop depending on what other tenants in the region are doing. A quota increase raises the ceiling on a shared pool and does nothing to make the latency within it predictable. A batch endpoint deliberately trades latency for cost and is the wrong shape for interactive traffic. Multi-region retry improves availability but adds a failed call and a second round trip to the very requests that were already slow.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","ptu","capacity","Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-211",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Letting a Model Reach Live System Data: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The AI team is letting a chat application answer questions from live data held in operational systems. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Place the current values in the system message on every request so that the model always has fresh data available to answer from." },
      { id: 'B', text: "Ask the model to return a JSON object describing the query it wants and parse that free-text response inside the application." },
      { id: 'C', text: "Define JSON tool schemas and run the returned function arguments." },
      { id: 'D', text: "Use Azure OpenAI 'On Your Data' against an Azure AI Search index that a scheduled indexer refreshes from the live source systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Tool schemas make the model emit a validated call naming a function and its arguments, so the application runs the query and the answer reflects the system state at that moment. Pushing current values into the system message only works for a small, known set of data and grows with every request. Asking for JSON in free text produces something close to the same result without the schema validation, so malformed arguments surface at parse time. An indexed copy is only as fresh as the last indexer run, which is the staleness the requirement rules out.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","function-calling","tools","Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-212",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Constraining Model Behaviour and Refusals: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The AI team is fixing an assistant's persona, scope, and refusal behaviour before it goes live. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Fine-tune the deployed model on several thousand examples that demonstrate both the intended persona and the required output format in each case." },
      { id: 'B', text: "Set the response_format parameter to a JSON schema so that the model is constrained to the required output structure, including its refusal shape." },
      { id: 'C', text: "Lower the temperature and top_p values so that the model's responses become considerably more consistent from call to call." },
      { id: 'D', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The system message is where persona, scope, refusals, and worked examples belong, and changing any of them is a configuration edit rather than a deployment. Fine-tuning can teach a house style but costs a training run for every adjustment and is a poor way to express a refusal boundary. response_format governs the shape of the output and says nothing about what the assistant is or declines to do. Temperature and top_p change how varied the sampling is, not what behaviour is being sampled.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering","system-message","openai","Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-213",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Answering From Proprietary Documents: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The AI team is getting accurate answers out of an internal document corpus that changes weekly. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'B', text: "Fine-tune a base model on the whole document corpus so that the answers are learned directly into the model's own weights and no retrieval step is needed at query time." },
      { id: 'C', text: "Raise the deployment's context window and place the entire document set into the system message on every single request." },
      { id: 'D', text: "Use Azure AI Search on its own to ground the answer, returning the highest-ranked document extracts with no model in the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieval grounds each answer in the specific passages that were retrieved for that question, and because the index is refreshed independently a weekly corpus change costs an indexer run rather than anything model-side. Fine-tuning teaches style far better than facts, and every corpus change would mean another training cycle. Stuffing the full corpus into each request is bounded by the context window and pays for every token on every call. Search alone returns passages but leaves the user to synthesise the answer.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","rag","ai-search","Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-214",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Guaranteed Capacity for a Latency-Sensitive Workload: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AI team is guaranteeing consistent inference latency for a workload that cannot tolerate throttling. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a standard deployment and request a regional quota increase so that the tokens-per-minute limit comfortably covers the peak load that is expected in that region." },
      { id: 'B', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'C', text: "Use a standard deployment and add a batch endpoint so that requests queue and complete at a consistent latency once shared capacity becomes available." },
      { id: 'D', text: "Deploy the same model into several regions and have the client retry against the next region whenever it receives a 429 response." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PTU reserves dedicated capacity for the deployment, so throughput and latency stop depending on what other tenants in the region are doing. A quota increase raises the ceiling on a shared pool and does nothing to make the latency within it predictable. A batch endpoint deliberately trades latency for cost and is the wrong shape for interactive traffic. Multi-region retry improves availability but adds a failed call and a second round trip to the very requests that were already slow.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","ptu","capacity","Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-215",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Letting a Model Reach Live System Data: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The AI team is letting a chat application answer questions from live data held in operational systems. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Place the current values in the system message on every request so that the model always has fresh data available to answer from." },
      { id: 'B', text: "Ask the model to return a JSON object describing the query it wants and parse that free-text response inside the application." },
      { id: 'C', text: "Define JSON tool schemas and run the returned function arguments." },
      { id: 'D', text: "Use Azure OpenAI 'On Your Data' against an Azure AI Search index that a scheduled indexer refreshes from the live source systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Tool schemas make the model emit a validated call naming a function and its arguments, so the application runs the query and the answer reflects the system state at that moment. Pushing current values into the system message only works for a small, known set of data and grows with every request. Asking for JSON in free text produces something close to the same result without the schema validation, so malformed arguments surface at parse time. An indexed copy is only as fresh as the last indexer run, which is the staleness the requirement rules out.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","function-calling","tools","Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-216",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Constraining Model Behaviour and Refusals: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AI team is fixing an assistant's persona, scope, and refusal behaviour before it goes live. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Fine-tune the deployed model on several thousand examples that demonstrate both the intended persona and the required output format in each case." },
      { id: 'B', text: "Set the response_format parameter to a JSON schema so that the model is constrained to the required output structure, including its refusal shape." },
      { id: 'C', text: "Lower the temperature and top_p values so that the model's responses become considerably more consistent from call to call." },
      { id: 'D', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The system message is where persona, scope, refusals, and worked examples belong, and changing any of them is a configuration edit rather than a deployment. Fine-tuning can teach a house style but costs a training run for every adjustment and is a poor way to express a refusal boundary. response_format governs the shape of the output and says nothing about what the assistant is or declines to do. Temperature and top_p change how varied the sampling is, not what behaviour is being sampled.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering","system-message","openai","Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-217",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Answering From Proprietary Documents: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AI team is getting accurate answers out of an internal document corpus that changes weekly. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'B', text: "Fine-tune a base model on the whole document corpus so that the answers are learned directly into the model's own weights and no retrieval step is needed at query time." },
      { id: 'C', text: "Raise the deployment's context window and place the entire document set into the system message on every single request." },
      { id: 'D', text: "Use Azure AI Search on its own to ground the answer, returning the highest-ranked document extracts with no model in the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieval grounds each answer in the specific passages that were retrieved for that question, and because the index is refreshed independently a weekly corpus change costs an indexer run rather than anything model-side. Fine-tuning teaches style far better than facts, and every corpus change would mean another training cycle. Stuffing the full corpus into each request is bounded by the context window and pays for every token on every call. Search alone returns passages but leaves the user to synthesise the answer.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","rag","ai-search","Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-218",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Guaranteed Capacity for a Latency-Sensitive Workload: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AI team is guaranteeing consistent inference latency for a workload that cannot tolerate throttling. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a standard deployment and request a regional quota increase so that the tokens-per-minute limit comfortably covers the peak load that is expected in that region." },
      { id: 'B', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'C', text: "Use a standard deployment and add a batch endpoint so that requests queue and complete at a consistent latency once shared capacity becomes available." },
      { id: 'D', text: "Deploy the same model into several regions and have the client retry against the next region whenever it receives a 429 response." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PTU reserves dedicated capacity for the deployment, so throughput and latency stop depending on what other tenants in the region are doing. A quota increase raises the ceiling on a shared pool and does nothing to make the latency within it predictable. A batch endpoint deliberately trades latency for cost and is the wrong shape for interactive traffic. Multi-region retry improves availability but adds a failed call and a second round trip to the very requests that were already slow.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","ptu","capacity","Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-219",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Letting a Model Reach Live System Data: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AI team is letting a chat application answer questions from live data held in operational systems. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Place the current values in the system message on every request so that the model always has fresh data available to answer from." },
      { id: 'B', text: "Ask the model to return a JSON object describing the query it wants and parse that free-text response inside the application." },
      { id: 'C', text: "Define JSON tool schemas and run the returned function arguments." },
      { id: 'D', text: "Use Azure OpenAI 'On Your Data' against an Azure AI Search index that a scheduled indexer refreshes from the live source systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Tool schemas make the model emit a validated call naming a function and its arguments, so the application runs the query and the answer reflects the system state at that moment. Pushing current values into the system message only works for a small, known set of data and grows with every request. Asking for JSON in free text produces something close to the same result without the schema validation, so malformed arguments surface at parse time. An indexed copy is only as fresh as the last indexer run, which is the staleness the requirement rules out.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","function-calling","tools","Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-220",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Constraining Model Behaviour and Refusals: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The AI team is fixing an assistant's persona, scope, and refusal behaviour before it goes live. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Fine-tune the deployed model on several thousand examples that demonstrate both the intended persona and the required output format in each case." },
      { id: 'B', text: "Set the response_format parameter to a JSON schema so that the model is constrained to the required output structure, including its refusal shape." },
      { id: 'C', text: "Lower the temperature and top_p values so that the model's responses become considerably more consistent from call to call." },
      { id: 'D', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The system message is where persona, scope, refusals, and worked examples belong, and changing any of them is a configuration edit rather than a deployment. Fine-tuning can teach a house style but costs a training run for every adjustment and is a poor way to express a refusal boundary. response_format governs the shape of the output and says nothing about what the assistant is or declines to do. Temperature and top_p change how varied the sampling is, not what behaviour is being sampled.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering","system-message","openai","AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-221",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Answering From Proprietary Documents: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AI team is getting accurate answers out of an internal document corpus that changes weekly. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'B', text: "Fine-tune a base model on the whole document corpus so that the answers are learned directly into the model's own weights and no retrieval step is needed at query time." },
      { id: 'C', text: "Raise the deployment's context window and place the entire document set into the system message on every single request." },
      { id: 'D', text: "Use Azure AI Search on its own to ground the answer, returning the highest-ranked document extracts with no model in the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieval grounds each answer in the specific passages that were retrieved for that question, and because the index is refreshed independently a weekly corpus change costs an indexer run rather than anything model-side. Fine-tuning teaches style far better than facts, and every corpus change would mean another training cycle. Stuffing the full corpus into each request is bounded by the context window and pays for every token on every call. Search alone returns passages but leaves the user to synthesise the answer.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","rag","ai-search","Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-222",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Guaranteed Capacity for a Latency-Sensitive Workload: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AI team is guaranteeing consistent inference latency for a workload that cannot tolerate throttling. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a standard deployment and request a regional quota increase so that the tokens-per-minute limit comfortably covers the peak load that is expected in that region." },
      { id: 'B', text: "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps." },
      { id: 'C', text: "Use a standard deployment and add a batch endpoint so that requests queue and complete at a consistent latency once shared capacity becomes available." },
      { id: 'D', text: "Deploy the same model into several regions and have the client retry against the next region whenever it receives a 429 response." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PTU reserves dedicated capacity for the deployment, so throughput and latency stop depending on what other tenants in the region are doing. A quota increase raises the ceiling on a shared pool and does nothing to make the latency within it predictable. A batch endpoint deliberately trades latency for cost and is the wrong shape for interactive traffic. Multi-region retry improves availability but adds a failed call and a second round trip to the very requests that were already slow.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","ptu","capacity","Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-223",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Letting a Model Reach Live System Data: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AI team is letting a chat application answer questions from live data held in operational systems. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Place the current values in the system message on every request so that the model always has fresh data available to answer from." },
      { id: 'B', text: "Ask the model to return a JSON object describing the query it wants and parse that free-text response inside the application." },
      { id: 'C', text: "Define JSON tool schemas and run the returned function arguments." },
      { id: 'D', text: "Use Azure OpenAI 'On Your Data' against an Azure AI Search index that a scheduled indexer refreshes from the live source systems." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Tool schemas make the model emit a validated call naming a function and its arguments, so the application runs the query and the answer reflects the system state at that moment. Pushing current values into the system message only works for a small, known set of data and grows with every request. Asking for JSON in free text produces something close to the same result without the schema validation, so malformed arguments surface at parse time. An indexed copy is only as fresh as the last indexer run, which is the staleness the requirement rules out.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","function-calling","tools","Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-224",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Constraining Model Behaviour and Refusals: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The AI team is fixing an assistant's persona, scope, and refusal behaviour before it goes live. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Fine-tune the deployed model on several thousand examples that demonstrate both the intended persona and the required output format in each case." },
      { id: 'B', text: "Set the response_format parameter to a JSON schema so that the model is constrained to the required output structure, including its refusal shape." },
      { id: 'C', text: "Lower the temperature and top_p values so that the model's responses become considerably more consistent from call to call." },
      { id: 'D', text: "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The system message is where persona, scope, refusals, and worked examples belong, and changing any of them is a configuration edit rather than a deployment. Fine-tuning can teach a house style but costs a training run for every adjustment and is a poor way to express a refusal boundary. response_format governs the shape of the output and says nothing about what the assistant is or declines to do. Temperature and top_p change how varied the sampling is, not what behaviour is being sampled.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["prompt-engineering","system-message","openai","Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-225",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d2",
    domainName: "Implement generative AI solutions with Azure OpenAI Service",
    title: "Answering From Proprietary Documents: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AI team is getting accurate answers out of an internal document corpus that changes weekly. The work is scoped to the production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt." },
      { id: 'B', text: "Fine-tune a base model on the whole document corpus so that the answers are learned directly into the model's own weights and no retrieval step is needed at query time." },
      { id: 'C', text: "Raise the deployment's context window and place the entire document set into the system message on every single request." },
      { id: 'D', text: "Use Azure AI Search on its own to ground the answer, returning the highest-ranked document extracts with no model in the path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retrieval grounds each answer in the specific passages that were retrieved for that question, and because the index is refreshed independently a weekly corpus change costs an indexer run rather than anything model-side. Fine-tuning teaches style far better than facts, and every corpus change would mean another training cycle. Stuffing the full corpus into each request is bounded by the context window and pays for every token on every call. Search alone returns passages but leaves the user to synthesise the answer.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["openai","rag","ai-search","Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_9;
