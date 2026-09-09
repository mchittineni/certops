export const AZURE_AI102_QUESTIONS_11 = [
  {
    id: "azure-ai102-251",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading solution, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 11.1.",
    question: "Which Azure AI service architecture or configuration satisfies these high-frequency fintech trading requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'B', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'C', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'D', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-252",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa solution, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 11.2.",
    question: "Which Azure AI service architecture or configuration satisfies these healthcare patient records & hipaa requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'B', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-253",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale solution, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 11.3.",
    question: "Which Azure AI service architecture or configuration satisfies these global e-commerce black friday scale requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'C', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-254",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry solution, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 11.4.",
    question: "Which Azure AI service architecture or configuration satisfies these autonomous vehicle telemetry requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." },
      { id: 'D', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-255",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform solution, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 11.5.",
    question: "Which Azure AI service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'B', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'C', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'D', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-256",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn solution, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 11.6.",
    question: "Which Azure AI service architecture or configuration satisfies these media streaming & global cdn requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'B', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-257",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems solution, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 11.7.",
    question: "Which Azure AI service architecture or configuration satisfies these aerospace satellite ground systems requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'C', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-258",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network solution, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 11.8.",
    question: "Which Azure AI service architecture or configuration satisfies these telecommunications 5g core network requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." },
      { id: 'D', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-259",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot solution, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 11.9.",
    question: "Which Azure AI service architecture or configuration satisfies these renewable energy smart grid iot requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'B', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'C', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'D', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-260",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics solution, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 11.10.",
    question: "Which Azure AI service architecture or configuration satisfies these supply chain cold-chain logistics requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'B', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-261",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments solution, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 11.11.",
    question: "Which Azure AI service architecture or configuration satisfies these banking core ledger & payments requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'C', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-262",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline solution, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 11.12.",
    question: "Which Azure AI service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." },
      { id: 'D', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-263",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network solution, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 11.13.",
    question: "Which Azure AI service architecture or configuration satisfies these defense-grade zero-trust network requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'B', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'C', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'D', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-264",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine solution, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 11.14.",
    question: "Which Azure AI service architecture or configuration satisfies these online multiplayer gaming engine requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'B', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-265",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling solution, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 11.15.",
    question: "Which Azure AI service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'C', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-266",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform solution, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 11.16.",
    question: "Which Azure AI service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." },
      { id: 'D', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-267",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub solution, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 11.17.",
    question: "Which Azure AI service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'B', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'C', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'D', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-268",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification solution, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 11.18.",
    question: "Which Azure AI service architecture or configuration satisfies these digital identity & biometric verification requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'B', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-269",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search solution, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 11.19.",
    question: "Which Azure AI service architecture or configuration satisfies these legal discovery & semantic document search requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'C', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-270",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange solution, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 11.20.",
    question: "Which Azure AI service architecture or configuration satisfies these adtech real-time bidding exchange requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." },
      { id: 'D', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-271",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting solution, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 11.21.",
    question: "Which Azure AI service architecture or configuration satisfies these precision agriculture & drone scouting requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'B', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'C', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'D', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-272",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Text Analytics for Health and PII Redaction: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance solution, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The enterprise AI team is currently detecting protected health information and sensitive pii entities under architecture delivery sprint 11.22.",
    question: "Which Azure AI service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for text analytics for health and pii redaction?",
    options: [
      { id: 'A', text: "Manually read all customer logs and black out sensitive data with marker pen." },
      { id: 'B', text: "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts." },
      { id: 'C', text: "Store unencrypted medical records in public web server access logs." },
      { id: 'D', text: "Disable privacy compliance checks because internal databases are exempt from data protection laws." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics", "pii", "healthcare", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-273",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Vision Read API for OCR: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform solution, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The enterprise AI team is currently extracting printed and handwritten text from documents and images under architecture delivery sprint 11.23.",
    question: "Which Azure AI service architecture or configuration satisfies these educational remote proctoring platform requirements for azure ai vision read api for ocr?",
    options: [
      { id: 'A', text: "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters." },
      { id: 'B', text: "Use simple thresholding and regex search on raw binary image buffers." },
      { id: 'C', text: "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores." },
      { id: 'D', text: "Convert images to low-resolution black-and-white icons before running text detection." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision", "ocr", "read-api", "Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-274",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Conversational Language Understanding (CLU): Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics solution, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The enterprise AI team is currently extracting intents and entities from user utterances under architecture delivery sprint 11.24.",
    question: "Which Azure AI service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for conversational language understanding (clu)?",
    options: [
      { id: 'A', text: "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement." },
      { id: 'B', text: "Use an unconstrained generative model with no entity extraction schema for transactional banking commands." },
      { id: 'C', text: "Require users to speak in SQL query syntax when interacting with conversational voice bots." },
      { id: 'D', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu", "nlp", "language", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-275",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Azure AI Speech Neural Voice and Synthesis: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations solution, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The enterprise AI team is currently real-time speech-to-text and high-fidelity text-to-speech under architecture delivery sprint 11.25.",
    question: "Which Azure AI service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for azure ai speech neural voice and synthesis?",
    options: [
      { id: 'A', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'B', text: "Record static WAV files of a human voice reading every possible sentence combination." },
      { id: 'C', text: "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling." },
      { id: 'D', text: "Send raw audio files through an unoptimized HTTP POST request with no audio streaming." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech", "neural-voice", "transcription", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_11;
