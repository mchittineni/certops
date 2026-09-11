export const AZURE_AI102_QUESTIONS_18 = [
  {
    id: "azure-ai102-426",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields No Prebuilt Model Covers: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AI team is extracting clauses from long contracts whose layout differs with every counterparty. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Train a custom template model on the labelled samples so that each field is anchored to the position where it appears on the page." },
      { id: 'C', text: "Use the Document Intelligence prebuilt-contract model to extract the clauses and fill any remaining fields with post-processing rules in code." },
      { id: 'D', text: "Compose several prebuilt models behind a custom classifier so that every incoming document is routed to whichever schema happens to match it most closely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom neural models learn the semantics of a field from a handful of labelled samples and keep finding it when the surrounding layout changes, which is the defining problem with contracts from different counterparties. Template models are faster to train and highly accurate when documents are positionally consistent, and that is exactly the assumption these documents break. prebuilt-contract covers common contract fields but not clauses specific to one organisation. A classifier routes a document to a model but still needs an extraction model capable of reading it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","custom-model","neural","High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-427",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Enriching Documents As They Are Indexed: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The AI team is enriching unstructured documents with extracted text and entities as they are indexed. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run an Azure Function on a queue trigger that calls each AI service in turn and writes the enriched documents into the search index using the push API." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Attach a custom Web API skill to the indexer and carry out every part of the enrichment inside the external service that it calls." },
      { id: 'D', text: "Configure an indexer with field mappings that executes on each run, copying the raw document fields straight into the index with no enrichment step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A skillset is the built-in enrichment pipeline: the indexer runs the skills in order, caches their output, and projects the results into the index without any code to host or operate. A queue-triggered Function reproduces that pipeline by hand and leaves incremental indexing, caching, and retry to be built. A custom Web API skill is part of a skillset rather than an alternative to one, and moving all enrichment into it discards the built-in skills. Field mappings only rename and copy, performing no enrichment.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","skillsets","indexing","Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-428",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Relevance for Natural-Language Queries: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AI team is improving result quality for conversational queries that rarely match the indexed wording. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure pure vector search over Azure OpenAI embeddings so that every result returned is ranked entirely by its own embedding similarity score alone." },
      { id: 'B', text: "Configure full-text search together with a custom scoring profile that boosts the title field and the freshness of each document." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Configure full-text search together with synonym maps so that relevance improves when the phrasings users type differ from the indexed terms." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid retrieval runs both the vector and the keyword query and fuses the results, so semantic paraphrases and exact identifiers are both found, and the semantic ranker then reorders the top set with a language model. Pure vector search captures paraphrase well but degrades on exact terms such as part numbers, which embeddings blur together. Scoring profiles and synonym maps are useful refinements to keyword search, but each encodes rules an author has to anticipate rather than matching on meaning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","vector-search","semantic-ranker","Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-429",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields From Standard Business Documents: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AI team is extracting totals and line items from invoices and receipts arriving from many vendors. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Document Intelligence prebuilt-layout model and map the tables and key-value pairs that it returns onto each of the required output fields in application code." },
      { id: 'B', text: "Train a custom extraction model on a labelled sample of the organisation's own invoices so that line items and totals are learned before processing begins." },
      { id: 'C', text: "Use the Azure AI Vision Read API to pull the text off each document and apply regular expressions to locate each required field." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The prebuilt invoice and receipt models already understand these document types and return named fields such as vendor, total, and line items across layouts they have never seen, so vendor variety costs nothing. prebuilt-layout does return the tables and pairs but leaves the semantic mapping to code that has to be maintained per vendor. Training a custom model is work that only becomes necessary once a prebuilt schema does not fit. Regular expressions over raw OCR text break on the first layout change.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","invoices","extraction","Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-430",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields No Prebuilt Model Covers: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AI team is extracting clauses from long contracts whose layout differs with every counterparty. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Train a custom template model on the labelled samples so that each field is anchored to the position where it appears on the page." },
      { id: 'C', text: "Use the Document Intelligence prebuilt-contract model to extract the clauses and fill any remaining fields with post-processing rules in code." },
      { id: 'D', text: "Compose several prebuilt models behind a custom classifier so that every incoming document is routed to whichever schema happens to match it most closely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom neural models learn the semantics of a field from a handful of labelled samples and keep finding it when the surrounding layout changes, which is the defining problem with contracts from different counterparties. Template models are faster to train and highly accurate when documents are positionally consistent, and that is exactly the assumption these documents break. prebuilt-contract covers common contract fields but not clauses specific to one organisation. A classifier routes a document to a model but still needs an extraction model capable of reading it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","custom-model","neural","Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-431",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Enriching Documents As They Are Indexed: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The AI team is enriching unstructured documents with extracted text and entities as they are indexed. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run an Azure Function on a queue trigger that calls each AI service in turn and writes the enriched documents into the search index using the push API." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Attach a custom Web API skill to the indexer and carry out every part of the enrichment inside the external service that it calls." },
      { id: 'D', text: "Configure an indexer with field mappings that executes on each run, copying the raw document fields straight into the index with no enrichment step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A skillset is the built-in enrichment pipeline: the indexer runs the skills in order, caches their output, and projects the results into the index without any code to host or operate. A queue-triggered Function reproduces that pipeline by hand and leaves incremental indexing, caching, and retry to be built. A custom Web API skill is part of a skillset rather than an alternative to one, and moving all enrichment into it discards the built-in skills. Field mappings only rename and copy, performing no enrichment.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","skillsets","indexing","Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-432",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Relevance for Natural-Language Queries: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AI team is improving result quality for conversational queries that rarely match the indexed wording. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure pure vector search over Azure OpenAI embeddings so that every result returned is ranked entirely by its own embedding similarity score alone." },
      { id: 'B', text: "Configure full-text search together with a custom scoring profile that boosts the title field and the freshness of each document." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Configure full-text search together with synonym maps so that relevance improves when the phrasings users type differ from the indexed terms." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid retrieval runs both the vector and the keyword query and fuses the results, so semantic paraphrases and exact identifiers are both found, and the semantic ranker then reorders the top set with a language model. Pure vector search captures paraphrase well but degrades on exact terms such as part numbers, which embeddings blur together. Scoring profiles and synonym maps are useful refinements to keyword search, but each encodes rules an author has to anticipate rather than matching on meaning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","vector-search","semantic-ranker","Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-433",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields From Standard Business Documents: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AI team is extracting totals and line items from invoices and receipts arriving from many vendors. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Document Intelligence prebuilt-layout model and map the tables and key-value pairs that it returns onto each of the required output fields in application code." },
      { id: 'B', text: "Train a custom extraction model on a labelled sample of the organisation's own invoices so that line items and totals are learned before processing begins." },
      { id: 'C', text: "Use the Azure AI Vision Read API to pull the text off each document and apply regular expressions to locate each required field." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The prebuilt invoice and receipt models already understand these document types and return named fields such as vendor, total, and line items across layouts they have never seen, so vendor variety costs nothing. prebuilt-layout does return the tables and pairs but leaves the semantic mapping to code that has to be maintained per vendor. Training a custom model is work that only becomes necessary once a prebuilt schema does not fit. Regular expressions over raw OCR text break on the first layout change.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","invoices","extraction","Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-434",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields No Prebuilt Model Covers: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AI team is extracting clauses from long contracts whose layout differs with every counterparty. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Train a custom template model on the labelled samples so that each field is anchored to the position where it appears on the page." },
      { id: 'C', text: "Use the Document Intelligence prebuilt-contract model to extract the clauses and fill any remaining fields with post-processing rules in code." },
      { id: 'D', text: "Compose several prebuilt models behind a custom classifier so that every incoming document is routed to whichever schema happens to match it most closely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom neural models learn the semantics of a field from a handful of labelled samples and keep finding it when the surrounding layout changes, which is the defining problem with contracts from different counterparties. Template models are faster to train and highly accurate when documents are positionally consistent, and that is exactly the assumption these documents break. prebuilt-contract covers common contract fields but not clauses specific to one organisation. A classifier routes a document to a model but still needs an extraction model capable of reading it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","custom-model","neural","Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-435",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Enriching Documents As They Are Indexed: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AI team is enriching unstructured documents with extracted text and entities as they are indexed. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run an Azure Function on a queue trigger that calls each AI service in turn and writes the enriched documents into the search index using the push API." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Attach a custom Web API skill to the indexer and carry out every part of the enrichment inside the external service that it calls." },
      { id: 'D', text: "Configure an indexer with field mappings that executes on each run, copying the raw document fields straight into the index with no enrichment step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A skillset is the built-in enrichment pipeline: the indexer runs the skills in order, caches their output, and projects the results into the index without any code to host or operate. A queue-triggered Function reproduces that pipeline by hand and leaves incremental indexing, caching, and retry to be built. A custom Web API skill is part of a skillset rather than an alternative to one, and moving all enrichment into it discards the built-in skills. Field mappings only rename and copy, performing no enrichment.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","skillsets","indexing","Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-436",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Relevance for Natural-Language Queries: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The AI team is improving result quality for conversational queries that rarely match the indexed wording. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure pure vector search over Azure OpenAI embeddings so that every result returned is ranked entirely by its own embedding similarity score alone." },
      { id: 'B', text: "Configure full-text search together with a custom scoring profile that boosts the title field and the freshness of each document." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Configure full-text search together with synonym maps so that relevance improves when the phrasings users type differ from the indexed terms." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid retrieval runs both the vector and the keyword query and fuses the results, so semantic paraphrases and exact identifiers are both found, and the semantic ranker then reorders the top set with a language model. Pure vector search captures paraphrase well but degrades on exact terms such as part numbers, which embeddings blur together. Scoring profiles and synonym maps are useful refinements to keyword search, but each encodes rules an author has to anticipate rather than matching on meaning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","vector-search","semantic-ranker","Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-437",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields From Standard Business Documents: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The AI team is extracting totals and line items from invoices and receipts arriving from many vendors. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Document Intelligence prebuilt-layout model and map the tables and key-value pairs that it returns onto each of the required output fields in application code." },
      { id: 'B', text: "Train a custom extraction model on a labelled sample of the organisation's own invoices so that line items and totals are learned before processing begins." },
      { id: 'C', text: "Use the Azure AI Vision Read API to pull the text off each document and apply regular expressions to locate each required field." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The prebuilt invoice and receipt models already understand these document types and return named fields such as vendor, total, and line items across layouts they have never seen, so vendor variety costs nothing. prebuilt-layout does return the tables and pairs but leaves the semantic mapping to code that has to be maintained per vendor. Training a custom model is work that only becomes necessary once a prebuilt schema does not fit. Regular expressions over raw OCR text break on the first layout change.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","invoices","extraction","Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-438",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields No Prebuilt Model Covers: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The AI team is extracting clauses from long contracts whose layout differs with every counterparty. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Train a custom template model on the labelled samples so that each field is anchored to the position where it appears on the page." },
      { id: 'C', text: "Use the Document Intelligence prebuilt-contract model to extract the clauses and fill any remaining fields with post-processing rules in code." },
      { id: 'D', text: "Compose several prebuilt models behind a custom classifier so that every incoming document is routed to whichever schema happens to match it most closely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom neural models learn the semantics of a field from a handful of labelled samples and keep finding it when the surrounding layout changes, which is the defining problem with contracts from different counterparties. Template models are faster to train and highly accurate when documents are positionally consistent, and that is exactly the assumption these documents break. prebuilt-contract covers common contract fields but not clauses specific to one organisation. A classifier routes a document to a model but still needs an extraction model capable of reading it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","custom-model","neural","Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-439",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Enriching Documents As They Are Indexed: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AI team is enriching unstructured documents with extracted text and entities as they are indexed. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run an Azure Function on a queue trigger that calls each AI service in turn and writes the enriched documents into the search index using the push API." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Attach a custom Web API skill to the indexer and carry out every part of the enrichment inside the external service that it calls." },
      { id: 'D', text: "Configure an indexer with field mappings that executes on each run, copying the raw document fields straight into the index with no enrichment step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A skillset is the built-in enrichment pipeline: the indexer runs the skills in order, caches their output, and projects the results into the index without any code to host or operate. A queue-triggered Function reproduces that pipeline by hand and leaves incremental indexing, caching, and retry to be built. A custom Web API skill is part of a skillset rather than an alternative to one, and moving all enrichment into it discards the built-in skills. Field mappings only rename and copy, performing no enrichment.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","skillsets","indexing","Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-440",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Relevance for Natural-Language Queries: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The AI team is improving result quality for conversational queries that rarely match the indexed wording. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure pure vector search over Azure OpenAI embeddings so that every result returned is ranked entirely by its own embedding similarity score alone." },
      { id: 'B', text: "Configure full-text search together with a custom scoring profile that boosts the title field and the freshness of each document." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Configure full-text search together with synonym maps so that relevance improves when the phrasings users type differ from the indexed terms." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid retrieval runs both the vector and the keyword query and fuses the results, so semantic paraphrases and exact identifiers are both found, and the semantic ranker then reorders the top set with a language model. Pure vector search captures paraphrase well but degrades on exact terms such as part numbers, which embeddings blur together. Scoring profiles and synonym maps are useful refinements to keyword search, but each encodes rules an author has to anticipate rather than matching on meaning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","vector-search","semantic-ranker","Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-441",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields From Standard Business Documents: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AI team is extracting totals and line items from invoices and receipts arriving from many vendors. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Document Intelligence prebuilt-layout model and map the tables and key-value pairs that it returns onto each of the required output fields in application code." },
      { id: 'B', text: "Train a custom extraction model on a labelled sample of the organisation's own invoices so that line items and totals are learned before processing begins." },
      { id: 'C', text: "Use the Azure AI Vision Read API to pull the text off each document and apply regular expressions to locate each required field." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The prebuilt invoice and receipt models already understand these document types and return named fields such as vendor, total, and line items across layouts they have never seen, so vendor variety costs nothing. prebuilt-layout does return the tables and pairs but leaves the semantic mapping to code that has to be maintained per vendor. Training a custom model is work that only becomes necessary once a prebuilt schema does not fit. Regular expressions over raw OCR text break on the first layout change.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","invoices","extraction","Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-442",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields No Prebuilt Model Covers: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AI team is extracting clauses from long contracts whose layout differs with every counterparty. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Train a custom template model on the labelled samples so that each field is anchored to the position where it appears on the page." },
      { id: 'C', text: "Use the Document Intelligence prebuilt-contract model to extract the clauses and fill any remaining fields with post-processing rules in code." },
      { id: 'D', text: "Compose several prebuilt models behind a custom classifier so that every incoming document is routed to whichever schema happens to match it most closely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom neural models learn the semantics of a field from a handful of labelled samples and keep finding it when the surrounding layout changes, which is the defining problem with contracts from different counterparties. Template models are faster to train and highly accurate when documents are positionally consistent, and that is exactly the assumption these documents break. prebuilt-contract covers common contract fields but not clauses specific to one organisation. A classifier routes a document to a model but still needs an extraction model capable of reading it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","custom-model","neural","Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-443",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Enriching Documents As They Are Indexed: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AI team is enriching unstructured documents with extracted text and entities as they are indexed. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run an Azure Function on a queue trigger that calls each AI service in turn and writes the enriched documents into the search index using the push API." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Attach a custom Web API skill to the indexer and carry out every part of the enrichment inside the external service that it calls." },
      { id: 'D', text: "Configure an indexer with field mappings that executes on each run, copying the raw document fields straight into the index with no enrichment step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A skillset is the built-in enrichment pipeline: the indexer runs the skills in order, caches their output, and projects the results into the index without any code to host or operate. A queue-triggered Function reproduces that pipeline by hand and leaves incremental indexing, caching, and retry to be built. A custom Web API skill is part of a skillset rather than an alternative to one, and moving all enrichment into it discards the built-in skills. Field mappings only rename and copy, performing no enrichment.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","skillsets","indexing","Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-444",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Relevance for Natural-Language Queries: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AI team is improving result quality for conversational queries that rarely match the indexed wording. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure pure vector search over Azure OpenAI embeddings so that every result returned is ranked entirely by its own embedding similarity score alone." },
      { id: 'B', text: "Configure full-text search together with a custom scoring profile that boosts the title field and the freshness of each document." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Configure full-text search together with synonym maps so that relevance improves when the phrasings users type differ from the indexed terms." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid retrieval runs both the vector and the keyword query and fuses the results, so semantic paraphrases and exact identifiers are both found, and the semantic ranker then reorders the top set with a language model. Pure vector search captures paraphrase well but degrades on exact terms such as part numbers, which embeddings blur together. Scoring profiles and synonym maps are useful refinements to keyword search, but each encodes rules an author has to anticipate rather than matching on meaning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","vector-search","semantic-ranker","Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-445",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields From Standard Business Documents: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The AI team is extracting totals and line items from invoices and receipts arriving from many vendors. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Document Intelligence prebuilt-layout model and map the tables and key-value pairs that it returns onto each of the required output fields in application code." },
      { id: 'B', text: "Train a custom extraction model on a labelled sample of the organisation's own invoices so that line items and totals are learned before processing begins." },
      { id: 'C', text: "Use the Azure AI Vision Read API to pull the text off each document and apply regular expressions to locate each required field." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The prebuilt invoice and receipt models already understand these document types and return named fields such as vendor, total, and line items across layouts they have never seen, so vendor variety costs nothing. prebuilt-layout does return the tables and pairs but leaves the semantic mapping to code that has to be maintained per vendor. Training a custom model is work that only becomes necessary once a prebuilt schema does not fit. Regular expressions over raw OCR text break on the first layout change.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","invoices","extraction","AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-446",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields No Prebuilt Model Covers: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AI team is extracting clauses from long contracts whose layout differs with every counterparty. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Train a custom template model on the labelled samples so that each field is anchored to the position where it appears on the page." },
      { id: 'C', text: "Use the Document Intelligence prebuilt-contract model to extract the clauses and fill any remaining fields with post-processing rules in code." },
      { id: 'D', text: "Compose several prebuilt models behind a custom classifier so that every incoming document is routed to whichever schema happens to match it most closely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom neural models learn the semantics of a field from a handful of labelled samples and keep finding it when the surrounding layout changes, which is the defining problem with contracts from different counterparties. Template models are faster to train and highly accurate when documents are positionally consistent, and that is exactly the assumption these documents break. prebuilt-contract covers common contract fields but not clauses specific to one organisation. A classifier routes a document to a model but still needs an extraction model capable of reading it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","custom-model","neural","Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-447",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Enriching Documents As They Are Indexed: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AI team is enriching unstructured documents with extracted text and entities as they are indexed. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run an Azure Function on a queue trigger that calls each AI service in turn and writes the enriched documents into the search index using the push API." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Attach a custom Web API skill to the indexer and carry out every part of the enrichment inside the external service that it calls." },
      { id: 'D', text: "Configure an indexer with field mappings that executes on each run, copying the raw document fields straight into the index with no enrichment step." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A skillset is the built-in enrichment pipeline: the indexer runs the skills in order, caches their output, and projects the results into the index without any code to host or operate. A queue-triggered Function reproduces that pipeline by hand and leaves incremental indexing, caching, and retry to be built. A custom Web API skill is part of a skillset rather than an alternative to one, and moving all enrichment into it discards the built-in skills. Field mappings only rename and copy, performing no enrichment.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","skillsets","indexing","Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-448",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Relevance for Natural-Language Queries: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AI team is improving result quality for conversational queries that rarely match the indexed wording. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure pure vector search over Azure OpenAI embeddings so that every result returned is ranked entirely by its own embedding similarity score alone." },
      { id: 'B', text: "Configure full-text search together with a custom scoring profile that boosts the title field and the freshness of each document." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Configure full-text search together with synonym maps so that relevance improves when the phrasings users type differ from the indexed terms." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid retrieval runs both the vector and the keyword query and fuses the results, so semantic paraphrases and exact identifiers are both found, and the semantic ranker then reorders the top set with a language model. Pure vector search captures paraphrase well but degrades on exact terms such as part numbers, which embeddings blur together. Scoring profiles and synonym maps are useful refinements to keyword search, but each encodes rules an author has to anticipate rather than matching on meaning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search","vector-search","semantic-ranker","Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-449",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields From Standard Business Documents: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The AI team is extracting totals and line items from invoices and receipts arriving from many vendors. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Document Intelligence prebuilt-layout model and map the tables and key-value pairs that it returns onto each of the required output fields in application code." },
      { id: 'B', text: "Train a custom extraction model on a labelled sample of the organisation's own invoices so that line items and totals are learned before processing begins." },
      { id: 'C', text: "Use the Azure AI Vision Read API to pull the text off each document and apply regular expressions to locate each required field." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The prebuilt invoice and receipt models already understand these document types and return named fields such as vendor, total, and line items across layouts they have never seen, so vendor variety costs nothing. prebuilt-layout does return the tables and pairs but leaves the semantic mapping to code that has to be maintained per vendor. Training a custom model is work that only becomes necessary once a prebuilt schema does not fit. Regular expressions over raw OCR text break on the first layout change.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","invoices","extraction","Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-450",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Fields No Prebuilt Model Covers: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AI team is extracting clauses from long contracts whose layout differs with every counterparty. The work is scoped to the pre-production environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Train a custom template model on the labelled samples so that each field is anchored to the position where it appears on the page." },
      { id: 'C', text: "Use the Document Intelligence prebuilt-contract model to extract the clauses and fill any remaining fields with post-processing rules in code." },
      { id: 'D', text: "Compose several prebuilt models behind a custom classifier so that every incoming document is routed to whichever schema happens to match it most closely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom neural models learn the semantics of a field from a handful of labelled samples and keep finding it when the surrounding layout changes, which is the defining problem with contracts from different counterparties. Template models are faster to train and highly accurate when documents are positionally consistent, and that is exactly the assumption these documents break. prebuilt-contract covers common contract fields but not clauses specific to one organisation. A classifier routes a document to a model but still needs an extraction model capable of reading it.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence","custom-model","neural","Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_18;
