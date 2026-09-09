export const AZURE_AI102_QUESTIONS_18 = [
  {
    id: "azure-ai102-426",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading solution, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 18.1.",
    question: "Which Azure AI service architecture or configuration satisfies these high-frequency fintech trading requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-427",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa solution, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 18.2.",
    question: "Which Azure AI service architecture or configuration satisfies these healthcare patient records & hipaa requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-428",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale solution, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 18.3.",
    question: "Which Azure AI service architecture or configuration satisfies these global e-commerce black friday scale requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Rely solely on exact keyword matching without synonym maps or vector representations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-429",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry solution, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 18.4.",
    question: "Which Azure AI service architecture or configuration satisfies these autonomous vehicle telemetry requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'B', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'C', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-430",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform solution, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 18.5.",
    question: "Which Azure AI service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-431",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn solution, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 18.6.",
    question: "Which Azure AI service architecture or configuration satisfies these media streaming & global cdn requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-432",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems solution, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 18.7.",
    question: "Which Azure AI service architecture or configuration satisfies these aerospace satellite ground systems requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Rely solely on exact keyword matching without synonym maps or vector representations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-433",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network solution, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 18.8.",
    question: "Which Azure AI service architecture or configuration satisfies these telecommunications 5g core network requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'B', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'C', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-434",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot solution, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 18.9.",
    question: "Which Azure AI service architecture or configuration satisfies these renewable energy smart grid iot requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-435",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics solution, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 18.10.",
    question: "Which Azure AI service architecture or configuration satisfies these supply chain cold-chain logistics requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-436",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments solution, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 18.11.",
    question: "Which Azure AI service architecture or configuration satisfies these banking core ledger & payments requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Rely solely on exact keyword matching without synonym maps or vector representations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-437",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline solution, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 18.12.",
    question: "Which Azure AI service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'B', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'C', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-438",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network solution, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 18.13.",
    question: "Which Azure AI service architecture or configuration satisfies these defense-grade zero-trust network requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-439",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine solution, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 18.14.",
    question: "Which Azure AI service architecture or configuration satisfies these online multiplayer gaming engine requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-440",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling solution, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 18.15.",
    question: "Which Azure AI service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Rely solely on exact keyword matching without synonym maps or vector representations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-441",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform solution, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 18.16.",
    question: "Which Azure AI service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'B', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'C', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-442",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub solution, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 18.17.",
    question: "Which Azure AI service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-443",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification solution, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 18.18.",
    question: "Which Azure AI service architecture or configuration satisfies these digital identity & biometric verification requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-444",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search solution, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 18.19.",
    question: "Which Azure AI service architecture or configuration satisfies these legal discovery & semantic document search requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Rely solely on exact keyword matching without synonym maps or vector representations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-445",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange solution, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 18.20.",
    question: "Which Azure AI service architecture or configuration satisfies these adtech real-time bidding exchange requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'B', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'C', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-446",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting solution, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 18.21.",
    question: "Which Azure AI service architecture or configuration satisfies these precision agriculture & drone scouting requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-447",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance solution, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 18.22.",
    question: "Which Azure AI service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'C', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-448",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform solution, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 18.23.",
    question: "Which Azure AI service architecture or configuration satisfies these educational remote proctoring platform requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." },
      { id: 'D', text: "Rely solely on exact keyword matching without synonym maps or vector representations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-449",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics solution, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 18.24.",
    question: "Which Azure AI service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'B', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'C', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." },
      { id: 'D', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-450",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations solution, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 18.25.",
    question: "Which Azure AI service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'B', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_18;
