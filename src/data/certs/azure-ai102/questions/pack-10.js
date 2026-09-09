export const AZURE_AI102_QUESTIONS_10 = [
  {
    id: "azure-ai102-226",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading solution, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 10.1.",
    question: "Which Azure AI service architecture or configuration satisfies these high-frequency fintech trading requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'B', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-227",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa solution, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 10.2.",
    question: "Which Azure AI service architecture or configuration satisfies these healthcare patient records & hipaa requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'C', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-228",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale solution, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 10.3.",
    question: "Which Azure AI service architecture or configuration satisfies these global e-commerce black friday scale requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'D', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-229",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry solution, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 10.4.",
    question: "Which Azure AI service architecture or configuration satisfies these autonomous vehicle telemetry requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'B', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'C', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." },
      { id: 'D', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-230",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform solution, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 10.5.",
    question: "Which Azure AI service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'B', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-231",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn solution, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 10.6.",
    question: "Which Azure AI service architecture or configuration satisfies these media streaming & global cdn requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'C', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-232",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems solution, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 10.7.",
    question: "Which Azure AI service architecture or configuration satisfies these aerospace satellite ground systems requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'D', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-233",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network solution, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 10.8.",
    question: "Which Azure AI service architecture or configuration satisfies these telecommunications 5g core network requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'B', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'C', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." },
      { id: 'D', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-234",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot solution, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 10.9.",
    question: "Which Azure AI service architecture or configuration satisfies these renewable energy smart grid iot requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'B', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-235",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics solution, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 10.10.",
    question: "Which Azure AI service architecture or configuration satisfies these supply chain cold-chain logistics requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'C', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-236",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments solution, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 10.11.",
    question: "Which Azure AI service architecture or configuration satisfies these banking core ledger & payments requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'D', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-237",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline solution, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 10.12.",
    question: "Which Azure AI service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'B', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'C', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." },
      { id: 'D', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-238",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network solution, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 10.13.",
    question: "Which Azure AI service architecture or configuration satisfies these defense-grade zero-trust network requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'B', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-239",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine solution, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 10.14.",
    question: "Which Azure AI service architecture or configuration satisfies these online multiplayer gaming engine requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'C', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-240",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling solution, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 10.15.",
    question: "Which Azure AI service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'D', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-241",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform solution, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 10.16.",
    question: "Which Azure AI service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'B', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'C', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." },
      { id: 'D', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-242",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub solution, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 10.17.",
    question: "Which Azure AI service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'B', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-243",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification solution, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 10.18.",
    question: "Which Azure AI service architecture or configuration satisfies these digital identity & biometric verification requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'C', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-244",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search solution, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 10.19.",
    question: "Which Azure AI service architecture or configuration satisfies these legal discovery & semantic document search requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'D', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-245",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange solution, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 10.20.",
    question: "Which Azure AI service architecture or configuration satisfies these adtech real-time bidding exchange requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'B', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'C', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." },
      { id: 'D', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-246",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting solution, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 10.21.",
    question: "Which Azure AI service architecture or configuration satisfies these precision agriculture & drone scouting requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'B', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-247",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance solution, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 10.22.",
    question: "Which Azure AI service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'C', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-248",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform solution, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 10.23.",
    question: "Which Azure AI service architecture or configuration satisfies these educational remote proctoring platform requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'D', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-249",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics solution, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 10.24.",
    question: "Which Azure AI service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'B', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'C', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." },
      { id: 'D', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-250",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations solution, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 10.25.",
    question: "Which Azure AI service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'B', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_10;
