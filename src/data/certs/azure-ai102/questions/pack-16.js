export const AZURE_AI102_QUESTIONS_16 = [
  {
    id: "azure-ai102-376",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Turning Utterances Into Intents and Parameters: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AI team is mapping short spoken commands onto actions together with the parameters each one needs. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'B', text: "Train a custom text classification project in Azure AI Language so that each utterance is assigned to one of the supported intents as a category." },
      { id: 'C', text: "Send every utterance to an Azure OpenAI deployment and ask the model to name the intent and list any parameters that it finds." },
      { id: 'D', text: "Use the question answering feature in Azure AI Language with a knowledge base built from the list of supported commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CLU is built for exactly this shape: it returns the top intent and the entities inside the utterance, which together supply the action and its parameters. Custom text classification assigns the utterance to a category and stops there, leaving the parameters unextracted. An Azure OpenAI deployment can do both but gives a free-text answer with no schema, confidence scores, or training loop over labelled utterances. Question answering matches a question to a stored answer, which is not an action with arguments.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu","nlp","language","High-Frequency FinTech Trading"]
  },
  {
    id: "azure-ai102-377",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Live Two-Way Voice With Domain Vocabulary: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The AI team is building a live voice assistant that must recognise domain-specific product names. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Azure AI Speech batch transcription REST API for the incoming audio and a selection of prebuilt neural voices for the spoken replies that are sent back." },
      { id: 'B', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'C', text: "Use the Azure AI Speech fast transcription API for the incoming audio, without vocabulary tuning, and SSML with a standard voice for the replies." },
      { id: 'D', text: "Use an Azure OpenAI audio model to transcribe the incoming audio and generate the spoken reply within a single request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Speech SDK streams audio continuously and returns partial results as the caller speaks, and custom speech lets the domain product names be added to the recognition vocabulary. Batch transcription and fast transcription both operate on complete audio files that have already been recorded, so neither can drive a live conversation. An Azure OpenAI audio model handles both directions in one call and is a reasonable design, but it offers no vocabulary adaptation, which is what the unusual product names require.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech","neural-voice","transcription","Healthcare Patient Records & HIPAA"]
  },
  {
    id: "azure-ai102-378",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Removing Sensitive Values From Transcripts: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AI team is stripping identifiers out of stored customer transcripts before analysts see them. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the named entity recognition feature in Azure AI Language to find person, organisation, and location entities and remove those spans." },
      { id: 'B', text: "Use Microsoft Purview sensitive information types to classify the stored transcripts and then apply the matching sensitivity label to every one of them." },
      { id: 'C', text: "Use Azure AI Language PII detection to mask sensitive entities in transcripts." },
      { id: 'D', text: "Use the key phrase extraction feature in Azure AI Language for detection of the significant terms, stripping them out before storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PII detection is trained on the identifier categories specifically, returns a redacted copy of the text alongside the detected spans, and covers types like national IDs and payment card numbers that general models miss. Named entity recognition finds people and places but leaves account numbers and card numbers untouched. Purview classifies and labels the file without altering its contents, so the identifiers are still there for an analyst to read. Key phrase extraction surfaces topics and has no notion of sensitivity at all.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics","pii","healthcare","Global E-Commerce Black Friday Scale"]
  },
  {
    id: "azure-ai102-379",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Reading Text From Photographed Pages: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AI team is extracting printed and handwritten text from photographs taken by field staff. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure AI Document Intelligence's prebuilt-read model so that the extracted text arrives together with page, paragraph, and reading order structure." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis caption and dense captions features to describe the printed and handwritten content of each page." },
      { id: 'C', text: "Use Azure AI Translator's document translation endpoint to process the image files and return the text content it recovers." },
      { id: 'D', text: "Use the Azure AI Vision Read API for printed and handwritten text." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Read API is the OCR path in the Vision service and is tuned for text in photographed images, including handwriting, returning polygons and per-line confidence. Document Intelligence prebuilt-read is genuinely the other OCR option and is the better pick when document structure matters, but it is the document-processing pipeline rather than the image API these photographs flow through. Captions describe a scene instead of transcribing it, and Translator works on text that has already been extracted.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision","ocr","read-api","Autonomous Vehicle Telemetry"]
  },
  {
    id: "azure-ai102-380",
    difficulty: "easy",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Turning Utterances Into Intents and Parameters: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AI team is mapping short spoken commands onto actions together with the parameters each one needs. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'B', text: "Train a custom text classification project in Azure AI Language so that each utterance is assigned to one of the supported intents as a category." },
      { id: 'C', text: "Send every utterance to an Azure OpenAI deployment and ask the model to name the intent and list any parameters that it finds." },
      { id: 'D', text: "Use the question answering feature in Azure AI Language with a knowledge base built from the list of supported commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CLU is built for exactly this shape: it returns the top intent and the entities inside the utterance, which together supply the action and its parameters. Custom text classification assigns the utterance to a category and stops there, leaving the parameters unextracted. An Azure OpenAI deployment can do both but gives a free-text answer with no schema, confidence scores, or training loop over labelled utterances. Question answering matches a question to a stored answer, which is not an action with arguments.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu","nlp","language","Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "azure-ai102-381",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Live Two-Way Voice With Domain Vocabulary: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The AI team is building a live voice assistant that must recognise domain-specific product names. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Azure AI Speech batch transcription REST API for the incoming audio and a selection of prebuilt neural voices for the spoken replies that are sent back." },
      { id: 'B', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'C', text: "Use the Azure AI Speech fast transcription API for the incoming audio, without vocabulary tuning, and SSML with a standard voice for the replies." },
      { id: 'D', text: "Use an Azure OpenAI audio model to transcribe the incoming audio and generate the spoken reply within a single request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Speech SDK streams audio continuously and returns partial results as the caller speaks, and custom speech lets the domain product names be added to the recognition vocabulary. Batch transcription and fast transcription both operate on complete audio files that have already been recorded, so neither can drive a live conversation. An Azure OpenAI audio model handles both directions in one call and is a reasonable design, but it offers no vocabulary adaptation, which is what the unusual product names require.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech","neural-voice","transcription","Media Streaming & Global CDN"]
  },
  {
    id: "azure-ai102-382",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Removing Sensitive Values From Transcripts: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AI team is stripping identifiers out of stored customer transcripts before analysts see them. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the named entity recognition feature in Azure AI Language to find person, organisation, and location entities and remove those spans." },
      { id: 'B', text: "Use Microsoft Purview sensitive information types to classify the stored transcripts and then apply the matching sensitivity label to every one of them." },
      { id: 'C', text: "Use Azure AI Language PII detection to mask sensitive entities in transcripts." },
      { id: 'D', text: "Use the key phrase extraction feature in Azure AI Language for detection of the significant terms, stripping them out before storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PII detection is trained on the identifier categories specifically, returns a redacted copy of the text alongside the detected spans, and covers types like national IDs and payment card numbers that general models miss. Named entity recognition finds people and places but leaves account numbers and card numbers untouched. Purview classifies and labels the file without altering its contents, so the identifiers are still there for an analyst to read. Key phrase extraction surfaces topics and has no notion of sensitivity at all.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics","pii","healthcare","Aerospace Satellite Ground Systems"]
  },
  {
    id: "azure-ai102-383",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Reading Text From Photographed Pages: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AI team is extracting printed and handwritten text from photographs taken by field staff. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure AI Document Intelligence's prebuilt-read model so that the extracted text arrives together with page, paragraph, and reading order structure." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis caption and dense captions features to describe the printed and handwritten content of each page." },
      { id: 'C', text: "Use Azure AI Translator's document translation endpoint to process the image files and return the text content it recovers." },
      { id: 'D', text: "Use the Azure AI Vision Read API for printed and handwritten text." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Read API is the OCR path in the Vision service and is tuned for text in photographed images, including handwriting, returning polygons and per-line confidence. Document Intelligence prebuilt-read is genuinely the other OCR option and is the better pick when document structure matters, but it is the document-processing pipeline rather than the image API these photographs flow through. Captions describe a scene instead of transcribing it, and Translator works on text that has already been extracted.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision","ocr","read-api","Telecommunications 5G Core Network"]
  },
  {
    id: "azure-ai102-384",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Turning Utterances Into Intents and Parameters: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AI team is mapping short spoken commands onto actions together with the parameters each one needs. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'B', text: "Train a custom text classification project in Azure AI Language so that each utterance is assigned to one of the supported intents as a category." },
      { id: 'C', text: "Send every utterance to an Azure OpenAI deployment and ask the model to name the intent and list any parameters that it finds." },
      { id: 'D', text: "Use the question answering feature in Azure AI Language with a knowledge base built from the list of supported commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CLU is built for exactly this shape: it returns the top intent and the entities inside the utterance, which together supply the action and its parameters. Custom text classification assigns the utterance to a category and stops there, leaving the parameters unextracted. An Azure OpenAI deployment can do both but gives a free-text answer with no schema, confidence scores, or training loop over labelled utterances. Question answering matches a question to a stored answer, which is not an action with arguments.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu","nlp","language","Renewable Energy Smart Grid IoT"]
  },
  {
    id: "azure-ai102-385",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Live Two-Way Voice With Domain Vocabulary: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AI team is building a live voice assistant that must recognise domain-specific product names. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Azure AI Speech batch transcription REST API for the incoming audio and a selection of prebuilt neural voices for the spoken replies that are sent back." },
      { id: 'B', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'C', text: "Use the Azure AI Speech fast transcription API for the incoming audio, without vocabulary tuning, and SSML with a standard voice for the replies." },
      { id: 'D', text: "Use an Azure OpenAI audio model to transcribe the incoming audio and generate the spoken reply within a single request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Speech SDK streams audio continuously and returns partial results as the caller speaks, and custom speech lets the domain product names be added to the recognition vocabulary. Batch transcription and fast transcription both operate on complete audio files that have already been recorded, so neither can drive a live conversation. An Azure OpenAI audio model handles both directions in one call and is a reasonable design, but it offers no vocabulary adaptation, which is what the unusual product names require.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech","neural-voice","transcription","Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "azure-ai102-386",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Removing Sensitive Values From Transcripts: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The AI team is stripping identifiers out of stored customer transcripts before analysts see them. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the named entity recognition feature in Azure AI Language to find person, organisation, and location entities and remove those spans." },
      { id: 'B', text: "Use Microsoft Purview sensitive information types to classify the stored transcripts and then apply the matching sensitivity label to every one of them." },
      { id: 'C', text: "Use Azure AI Language PII detection to mask sensitive entities in transcripts." },
      { id: 'D', text: "Use the key phrase extraction feature in Azure AI Language for detection of the significant terms, stripping them out before storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PII detection is trained on the identifier categories specifically, returns a redacted copy of the text alongside the detected spans, and covers types like national IDs and payment card numbers that general models miss. Named entity recognition finds people and places but leaves account numbers and card numbers untouched. Purview classifies and labels the file without altering its contents, so the identifiers are still there for an analyst to read. Key phrase extraction surfaces topics and has no notion of sensitivity at all.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics","pii","healthcare","Banking Core Ledger & Payments"]
  },
  {
    id: "azure-ai102-387",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Reading Text From Photographed Pages: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The AI team is extracting printed and handwritten text from photographs taken by field staff. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure AI Document Intelligence's prebuilt-read model so that the extracted text arrives together with page, paragraph, and reading order structure." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis caption and dense captions features to describe the printed and handwritten content of each page." },
      { id: 'C', text: "Use Azure AI Translator's document translation endpoint to process the image files and return the text content it recovers." },
      { id: 'D', text: "Use the Azure AI Vision Read API for printed and handwritten text." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Read API is the OCR path in the Vision service and is tuned for text in photographed images, including handwriting, returning polygons and per-line confidence. Document Intelligence prebuilt-read is genuinely the other OCR option and is the better pick when document structure matters, but it is the document-processing pipeline rather than the image API these photographs flow through. Captions describe a scene instead of transcribing it, and Translator works on text that has already been extracted.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision","ocr","read-api","Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "azure-ai102-388",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Turning Utterances Into Intents and Parameters: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The AI team is mapping short spoken commands onto actions together with the parameters each one needs. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'B', text: "Train a custom text classification project in Azure AI Language so that each utterance is assigned to one of the supported intents as a category." },
      { id: 'C', text: "Send every utterance to an Azure OpenAI deployment and ask the model to name the intent and list any parameters that it finds." },
      { id: 'D', text: "Use the question answering feature in Azure AI Language with a knowledge base built from the list of supported commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CLU is built for exactly this shape: it returns the top intent and the entities inside the utterance, which together supply the action and its parameters. Custom text classification assigns the utterance to a category and stops there, leaving the parameters unextracted. An Azure OpenAI deployment can do both but gives a free-text answer with no schema, confidence scores, or training loop over labelled utterances. Question answering matches a question to a stored answer, which is not an action with arguments.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu","nlp","language","Defense-Grade Zero-Trust Network"]
  },
  {
    id: "azure-ai102-389",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Live Two-Way Voice With Domain Vocabulary: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AI team is building a live voice assistant that must recognise domain-specific product names. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Azure AI Speech batch transcription REST API for the incoming audio and a selection of prebuilt neural voices for the spoken replies that are sent back." },
      { id: 'B', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'C', text: "Use the Azure AI Speech fast transcription API for the incoming audio, without vocabulary tuning, and SSML with a standard voice for the replies." },
      { id: 'D', text: "Use an Azure OpenAI audio model to transcribe the incoming audio and generate the spoken reply within a single request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Speech SDK streams audio continuously and returns partial results as the caller speaks, and custom speech lets the domain product names be added to the recognition vocabulary. Batch transcription and fast transcription both operate on complete audio files that have already been recorded, so neither can drive a live conversation. An Azure OpenAI audio model handles both directions in one call and is a reasonable design, but it offers no vocabulary adaptation, which is what the unusual product names require.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech","neural-voice","transcription","Online Multiplayer Gaming Engine"]
  },
  {
    id: "azure-ai102-390",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Removing Sensitive Values From Transcripts: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The AI team is stripping identifiers out of stored customer transcripts before analysts see them. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the named entity recognition feature in Azure AI Language to find person, organisation, and location entities and remove those spans." },
      { id: 'B', text: "Use Microsoft Purview sensitive information types to classify the stored transcripts and then apply the matching sensitivity label to every one of them." },
      { id: 'C', text: "Use Azure AI Language PII detection to mask sensitive entities in transcripts." },
      { id: 'D', text: "Use the key phrase extraction feature in Azure AI Language for detection of the significant terms, stripping them out before storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PII detection is trained on the identifier categories specifically, returns a redacted copy of the text alongside the detected spans, and covers types like national IDs and payment card numbers that general models miss. Named entity recognition finds people and places but leaves account numbers and card numbers untouched. Purview classifies and labels the file without altering its contents, so the identifiers are still there for an analyst to read. Key phrase extraction surfaces topics and has no notion of sensitivity at all.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics","pii","healthcare","Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "azure-ai102-391",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Reading Text From Photographed Pages: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AI team is extracting printed and handwritten text from photographs taken by field staff. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure AI Document Intelligence's prebuilt-read model so that the extracted text arrives together with page, paragraph, and reading order structure." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis caption and dense captions features to describe the printed and handwritten content of each page." },
      { id: 'C', text: "Use Azure AI Translator's document translation endpoint to process the image files and return the text content it recovers." },
      { id: 'D', text: "Use the Azure AI Vision Read API for printed and handwritten text." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Read API is the OCR path in the Vision service and is tuned for text in photographed images, including handwriting, returning polygons and per-line confidence. Document Intelligence prebuilt-read is genuinely the other OCR option and is the better pick when document structure matters, but it is the document-processing pipeline rather than the image API these photographs flow through. Captions describe a scene instead of transcribing it, and Translator works on text that has already been extracted.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision","ocr","read-api","Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "azure-ai102-392",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Turning Utterances Into Intents and Parameters: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AI team is mapping short spoken commands onto actions together with the parameters each one needs. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'B', text: "Train a custom text classification project in Azure AI Language so that each utterance is assigned to one of the supported intents as a category." },
      { id: 'C', text: "Send every utterance to an Azure OpenAI deployment and ask the model to name the intent and list any parameters that it finds." },
      { id: 'D', text: "Use the question answering feature in Azure AI Language with a knowledge base built from the list of supported commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CLU is built for exactly this shape: it returns the top intent and the entities inside the utterance, which together supply the action and its parameters. Custom text classification assigns the utterance to a category and stops there, leaving the parameters unextracted. An Azure OpenAI deployment can do both but gives a free-text answer with no schema, confidence scores, or training loop over labelled utterances. Question answering matches a question to a stored answer, which is not an action with arguments.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu","nlp","language","Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "azure-ai102-393",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Live Two-Way Voice With Domain Vocabulary: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AI team is building a live voice assistant that must recognise domain-specific product names. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Azure AI Speech batch transcription REST API for the incoming audio and a selection of prebuilt neural voices for the spoken replies that are sent back." },
      { id: 'B', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'C', text: "Use the Azure AI Speech fast transcription API for the incoming audio, without vocabulary tuning, and SSML with a standard voice for the replies." },
      { id: 'D', text: "Use an Azure OpenAI audio model to transcribe the incoming audio and generate the spoken reply within a single request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Speech SDK streams audio continuously and returns partial results as the caller speaks, and custom speech lets the domain product names be added to the recognition vocabulary. Batch transcription and fast transcription both operate on complete audio files that have already been recorded, so neither can drive a live conversation. An Azure OpenAI audio model handles both directions in one call and is a reasonable design, but it offers no vocabulary adaptation, which is what the unusual product names require.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech","neural-voice","transcription","Digital Identity & Biometric Verification"]
  },
  {
    id: "azure-ai102-394",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Removing Sensitive Values From Transcripts: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AI team is stripping identifiers out of stored customer transcripts before analysts see them. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the named entity recognition feature in Azure AI Language to find person, organisation, and location entities and remove those spans." },
      { id: 'B', text: "Use Microsoft Purview sensitive information types to classify the stored transcripts and then apply the matching sensitivity label to every one of them." },
      { id: 'C', text: "Use Azure AI Language PII detection to mask sensitive entities in transcripts." },
      { id: 'D', text: "Use the key phrase extraction feature in Azure AI Language for detection of the significant terms, stripping them out before storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PII detection is trained on the identifier categories specifically, returns a redacted copy of the text alongside the detected spans, and covers types like national IDs and payment card numbers that general models miss. Named entity recognition finds people and places but leaves account numbers and card numbers untouched. Purview classifies and labels the file without altering its contents, so the identifiers are still there for an analyst to read. Key phrase extraction surfaces topics and has no notion of sensitivity at all.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics","pii","healthcare","Legal Discovery & Semantic Document Search"]
  },
  {
    id: "azure-ai102-395",
    difficulty: "medium",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Reading Text From Photographed Pages: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The AI team is extracting printed and handwritten text from photographs taken by field staff. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure AI Document Intelligence's prebuilt-read model so that the extracted text arrives together with page, paragraph, and reading order structure." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis caption and dense captions features to describe the printed and handwritten content of each page." },
      { id: 'C', text: "Use Azure AI Translator's document translation endpoint to process the image files and return the text content it recovers." },
      { id: 'D', text: "Use the Azure AI Vision Read API for printed and handwritten text." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Read API is the OCR path in the Vision service and is tuned for text in photographed images, including handwriting, returning polygons and per-line confidence. Document Intelligence prebuilt-read is genuinely the other OCR option and is the better pick when document structure matters, but it is the document-processing pipeline rather than the image API these photographs flow through. Captions describe a scene instead of transcribing it, and Translator works on text that has already been extracted.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision","ocr","read-api","AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "azure-ai102-396",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Turning Utterances Into Intents and Parameters: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AI team is mapping short spoken commands onto actions together with the parameters each one needs. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'B', text: "Train a custom text classification project in Azure AI Language so that each utterance is assigned to one of the supported intents as a category." },
      { id: 'C', text: "Send every utterance to an Azure OpenAI deployment and ask the model to name the intent and list any parameters that it finds." },
      { id: 'D', text: "Use the question answering feature in Azure AI Language with a knowledge base built from the list of supported commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CLU is built for exactly this shape: it returns the top intent and the entities inside the utterance, which together supply the action and its parameters. Custom text classification assigns the utterance to a category and stops there, leaving the parameters unextracted. An Azure OpenAI deployment can do both but gives a free-text answer with no schema, confidence scores, or training loop over labelled utterances. Question answering matches a question to a stored answer, which is not an action with arguments.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu","nlp","language","Precision Agriculture & Drone Scouting"]
  },
  {
    id: "azure-ai102-397",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Live Two-Way Voice With Domain Vocabulary: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AI team is building a live voice assistant that must recognise domain-specific product names. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the Azure AI Speech batch transcription REST API for the incoming audio and a selection of prebuilt neural voices for the spoken replies that are sent back." },
      { id: 'B', text: "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models." },
      { id: 'C', text: "Use the Azure AI Speech fast transcription API for the incoming audio, without vocabulary tuning, and SSML with a standard voice for the replies." },
      { id: 'D', text: "Use an Azure OpenAI audio model to transcribe the incoming audio and generate the spoken reply within a single request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Speech SDK streams audio continuously and returns partial results as the caller speaks, and custom speech lets the domain product names be added to the recognition vocabulary. Batch transcription and fast transcription both operate on complete audio files that have already been recorded, so neither can drive a live conversation. An Azure OpenAI audio model handles both directions in one call and is a reasonable design, but it offers no vocabulary adaptation, which is what the unusual product names require.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["speech","neural-voice","transcription","Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "azure-ai102-398",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Removing Sensitive Values From Transcripts: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AI team is stripping identifiers out of stored customer transcripts before analysts see them. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the named entity recognition feature in Azure AI Language to find person, organisation, and location entities and remove those spans." },
      { id: 'B', text: "Use Microsoft Purview sensitive information types to classify the stored transcripts and then apply the matching sensitivity label to every one of them." },
      { id: 'C', text: "Use Azure AI Language PII detection to mask sensitive entities in transcripts." },
      { id: 'D', text: "Use the key phrase extraction feature in Azure AI Language for detection of the significant terms, stripping them out before storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PII detection is trained on the identifier categories specifically, returns a redacted copy of the text alongside the detected spans, and covers types like national IDs and payment card numbers that general models miss. Named entity recognition finds people and places but leaves account numbers and card numbers untouched. Purview classifies and labels the file without altering its contents, so the identifiers are still there for an analyst to read. Key phrase extraction surfaces topics and has no notion of sensitivity at all.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["text-analytics","pii","healthcare","Educational Remote Proctoring Platform"]
  },
  {
    id: "azure-ai102-399",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Reading Text From Photographed Pages: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The AI team is extracting printed and handwritten text from photographs taken by field staff. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Azure AI Document Intelligence's prebuilt-read model so that the extracted text arrives together with page, paragraph, and reading order structure." },
      { id: 'B', text: "Use the Azure AI Vision Image Analysis caption and dense captions features to describe the printed and handwritten content of each page." },
      { id: 'C', text: "Use Azure AI Translator's document translation endpoint to process the image files and return the text content it recovers." },
      { id: 'D', text: "Use the Azure AI Vision Read API for printed and handwritten text." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Read API is the OCR path in the Vision service and is tuned for text in photographed images, including handwriting, returning polygons and per-line confidence. Document Intelligence prebuilt-read is genuinely the other OCR option and is the better pick when document structure matters, but it is the document-processing pipeline rather than the image API these photographs flow through. Captions describe a scene instead of transcribing it, and Translator works on text that has already been extracted.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["vision","ocr","read-api","Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "azure-ai102-400",
    difficulty: "hard",
    certId: "azure-ai102",
    domainId: "d3",
    domainName: "Implement computer vision and natural language processing solutions",
    title: "Turning Utterances Into Intents and Parameters: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AI team is mapping short spoken commands onto actions together with the parameters each one needs. The work is scoped to the development environment.",
    question: "Which Azure AI approach best meets these requirements?",
    options: [
      { id: 'A', text: "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components." },
      { id: 'B', text: "Train a custom text classification project in Azure AI Language so that each utterance is assigned to one of the supported intents as a category." },
      { id: 'C', text: "Send every utterance to an Azure OpenAI deployment and ask the model to name the intent and list any parameters that it finds." },
      { id: 'D', text: "Use the question answering feature in Azure AI Language with a knowledge base built from the list of supported commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CLU is built for exactly this shape: it returns the top intent and the entities inside the utterance, which together supply the action and its parameters. Custom text classification assigns the utterance to a category and stops there, leaving the parameters unextracted. An Azure OpenAI deployment can do both but gives a free-text answer with no schema, confidence scores, or training loop over labelled utterances. Question answering matches a question to a stored answer, which is not an action with arguments.",
    referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
    tags: ["clu","nlp","language","Disaster Emergency Dispatch & Operations"]
  }
];

export default AZURE_AI102_QUESTIONS_16;
