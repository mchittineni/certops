export const AZURE_AI102_QUESTIONS_19 = [
  {
    id: "azure-ai102-451",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading solution, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 19.1.",
    question: "Which Azure AI service architecture or configuration satisfies these high-frequency fintech trading requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." },
      { id: 'B', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'C', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'D', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-452",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa solution, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 19.2.",
    question: "Which Azure AI service architecture or configuration satisfies these healthcare patient records & hipaa requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'B', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-453",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale solution, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 19.3.",
    question: "Which Azure AI service architecture or configuration satisfies these global e-commerce black friday scale requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'C', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-454",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry solution, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 19.4.",
    question: "Which Azure AI service architecture or configuration satisfies these autonomous vehicle telemetry requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Rely solely on exact keyword matching without synonym maps or vector representations." },
      { id: 'D', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-455",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform solution, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 19.5.",
    question: "Which Azure AI service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." },
      { id: 'B', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'C', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'D', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-456",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn solution, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 19.6.",
    question: "Which Azure AI service architecture or configuration satisfies these media streaming & global cdn requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'B', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-457",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems solution, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 19.7.",
    question: "Which Azure AI service architecture or configuration satisfies these aerospace satellite ground systems requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'C', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-458",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network solution, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 19.8.",
    question: "Which Azure AI service architecture or configuration satisfies these telecommunications 5g core network requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Rely solely on exact keyword matching without synonym maps or vector representations." },
      { id: 'D', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-459",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot solution, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 19.9.",
    question: "Which Azure AI service architecture or configuration satisfies these renewable energy smart grid iot requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." },
      { id: 'B', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'C', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'D', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-460",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics solution, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 19.10.",
    question: "Which Azure AI service architecture or configuration satisfies these supply chain cold-chain logistics requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'B', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-461",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments solution, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 19.11.",
    question: "Which Azure AI service architecture or configuration satisfies these banking core ledger & payments requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'C', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-462",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline solution, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 19.12.",
    question: "Which Azure AI service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Rely solely on exact keyword matching without synonym maps or vector representations." },
      { id: 'D', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-463",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network solution, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 19.13.",
    question: "Which Azure AI service architecture or configuration satisfies these defense-grade zero-trust network requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." },
      { id: 'B', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'C', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'D', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-464",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine solution, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 19.14.",
    question: "Which Azure AI service architecture or configuration satisfies these online multiplayer gaming engine requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'B', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-465",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling solution, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 19.15.",
    question: "Which Azure AI service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'C', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-466",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform solution, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 19.16.",
    question: "Which Azure AI service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Rely solely on exact keyword matching without synonym maps or vector representations." },
      { id: 'D', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-467",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub solution, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 19.17.",
    question: "Which Azure AI service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." },
      { id: 'B', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'C', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'D', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-468",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification solution, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 19.18.",
    question: "Which Azure AI service architecture or configuration satisfies these digital identity & biometric verification requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'B', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-469",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search solution, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 19.19.",
    question: "Which Azure AI service architecture or configuration satisfies these legal discovery & semantic document search requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'C', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-470",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange solution, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 19.20.",
    question: "Which Azure AI service architecture or configuration satisfies these adtech real-time bidding exchange requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Rely solely on exact keyword matching without synonym maps or vector representations." },
      { id: 'D', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-471",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting solution, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 19.21.",
    question: "Which Azure AI service architecture or configuration satisfies these precision agriculture & drone scouting requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." },
      { id: 'B', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'C', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'D', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-472",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Custom Document Classification and Neural Models: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance solution, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The enterprise AI team is currently extracting fields from specialized enterprise document types under architecture delivery sprint 19.22.",
    question: "Which Azure AI service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for custom document classification and neural models?",
    options: [
      { id: 'A', text: "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors." },
      { id: 'B', text: "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms." },
      { id: 'C', text: "Retrain an open-source OCR model from scratch using millions of unannotated images." },
      { id: 'D', text: "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "custom-model", "neural", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-473",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Search Indexing and Skillsets: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform solution, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The enterprise AI team is currently enriching raw unstructured data with cognitive skills pipelines under architecture delivery sprint 19.23.",
    question: "Which Azure AI service architecture or configuration satisfies these educational remote proctoring platform requirements for azure ai search indexing and skillsets?",
    options: [
      { id: 'A', text: "Store raw binary PDF files in an unindexed SQL database and perform table scans." },
      { id: 'B', text: "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document." },
      { id: 'C', text: "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index." },
      { id: 'D', text: "Disable indexing and perform live text search across thousands of S3 blobs on every query." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "skillsets", "indexing", "Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-474",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Vector and Hybrid Search with Semantic Ranker: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics solution, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The enterprise AI team is currently state-of-the-art enterprise search relevance under architecture delivery sprint 19.24.",
    question: "Which Azure AI service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for vector and hybrid search with semantic ranker?",
    options: [
      { id: 'A', text: "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns." },
      { id: 'B', text: "Sort search results alphabetically by file name without relevance scoring." },
      { id: 'C', text: "Rely solely on exact keyword matching without synonym maps or vector representations." },
      { id: 'D', text: "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["ai-search", "vector-search", "semantic-ranker", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-475",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d4",
    domainName: "Implement knowledge mining and document intelligence solutions",
    title: "Azure AI Document Intelligence Prebuilt Models: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations solution, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The enterprise AI team is currently automating invoice, receipt, and identity document extraction under architecture delivery sprint 19.25.",
    question: "Which Azure AI service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for azure ai document intelligence prebuilt models?",
    options: [
      { id: 'A', text: "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically." },
      { id: 'B', text: "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout." },
      { id: 'C', text: "Ask end-users to re-type all invoice line items manually into web form fields." },
      { id: 'D', text: "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["document-intelligence", "invoices", "extraction", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_19;
