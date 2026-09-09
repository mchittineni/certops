#!/usr/bin/env python3
"""
Generator for Microsoft Certified: Azure AI Engineer Associate (AI-102) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack, CONTEXTS

DOMAINS = [
    {"id": "d1", "name": "Plan and manage an Azure AI solution", "weight": 20},
    {"id": "d2", "name": "Implement generative AI solutions with Azure OpenAI Service", "weight": 25},
    {"id": "d3", "name": "Implement computer vision and natural language processing solutions", "weight": 35},
    {"id": "d4", "name": "Implement knowledge mining and document intelligence solutions", "weight": 20}
]

CERT_ID = "azure-ai102"
EXPORT_PREFIX = "AZURE_AI102"
REF_URL = "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/"

def build_azure_ai_bank():
    # 20 packs:
    # Packs 1-4: Domain 1 (100 items)
    # Packs 5-9: Domain 2 (125 items)
    # Packs 10-16: Domain 3 (175 items)
    # Packs 17-20: Domain 4 (100 items)
    pack_domains = (
        [DOMAINS[0]] * 4 +
        [DOMAINS[1]] * 5 +
        [DOMAINS[2]] * 7 +
        [DOMAINS[3]] * 4
    )

    d1_topics = [
        ("Azure AI Multi-Service Resource vs Single-Service", "Consolidating billing and API access across AI services",
         "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence.",
         "Deploy separate virtual machines running open-source models for every individual cognitive capability.",
         "Hardcode individual trial API keys in client application binaries without Azure resource management.",
         "Configure an unauthenticated public Azure Blob Storage container to host model weights.",
         "An Azure AI services multi-service resource provides unified billing, a single subscription key, and a consolidated API endpoint across vision, language, and search capabilities. Single-service resources are reserved when dedicated networking, individual access keys, or specific regional scaling is required.",
         ["azure-ai", "multi-service", "management"]),

        ("Securing AI Services with Managed Identities", "Eliminating static API keys in application architecture",
         "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role.",
         "Store the Azure AI primary API key in plaintext within the application's appsettings.json file in Git.",
         "Share the Azure subscription root credentials with all microservice developers.",
         "Disable authentication on the Azure AI services endpoint to improve request latency.",
         "Azure Managed Identities provide an automatically managed identity in Microsoft Entra ID (formerly Azure AD). Applications authenticate via Azure AD tokens, eliminating credential leakage in source code and supporting role-based access control (RBAC) such as 'Cognitive Services User'.",
         ["security", "managed-identity", "entra-id"]),

        ("Private Endpoints and Network Isolation", "Restricting Azure AI traffic to private virtual networks",
         "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource.",
         "Allow all public Internet traffic on port 80 to the cognitive services endpoint.",
         "Configure client laptops to connect directly to the public REST endpoint with no firewall rules.",
         "Deploy an unencrypted HTTP reverse proxy on an unprotected public IP address.",
         "Azure Private Endpoints assign a private IP address from your Virtual Network (VNet) to the Azure AI service, bringing the service inside your network boundary. Disabling public network access ensures that all inference and management traffic remains strictly isolated from the public Internet.",
         ["networking", "private-endpoint", "vnet"]),

        ("Azure AI Content Safety and Moderation", "Detecting harmful text and image inputs in AI pipelines",
         "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels.",
         "Rely on client-side regex matching to filter offensive user inputs.",
         "Disable all content safety filters to maximize model text generation speed.",
         "Log all user inputs in public web servers to manually audit violations once a month.",
         "Azure AI Content Safety uses state-of-the-art multi-modal models to detect harmful content across four categories (Hate, Self-Harm, Sexual, Violence) with four severity levels (0, 2, 4, 6). It provides real-time moderation guardrails for applications, user-generated content, and generative AI systems.",
         ["content-safety", "responsible-ai", "moderation"])
    ]

    d2_topics = [
        ("Azure OpenAI RAG with Azure AI Search", "Grounding LLM responses with proprietary corporate knowledge",
         "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt.",
         "Fine-tune GPT-4 by re-training it daily on 10,000 internal PDF documents.",
         "Paste the entire 50-megabyte enterprise document library into every user prompt.",
         "Store corporate documents in public S3 buckets and allow the model to crawl the web.",
         "Retrieval-Augmented Generation (RAG) grounds language models on internal enterprise documents without expensive model retraining. Azure OpenAI 'On Your Data' queries Azure AI Search using hybrid vector search and semantic ranking to inject precise contextual chunks into the prompt, eliminating hallucinations.",
         ["openai", "rag", "ai-search"]),

        ("Provisioned Throughput Units (PTU)", "Predictable latency and reserved capacity for production workloads",
         "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps.",
         "Use standard Pay-As-You-Go deployment and handle 429 Too Many Requests errors with infinite retry loops.",
         "Deploy 50 identical standard pay-as-you-go models across random unmonitored subscriptions.",
         "Run language models locally on individual developer laptops using consumer GPUs.",
         "Provisioned Throughput Units (PTU) reserve dedicated model processing capacity for Azure OpenAI workloads. Unlike standard pay-as-you-go deployments that share regional multi-tenant compute and face rate limits, PTU ensures deterministic throughput, predictable latency SLAs, and high-volume stability.",
         ["openai", "ptu", "capacity"]),

        ("Function Calling and Structured Tool Use", "Connecting Azure OpenAI models to external database and API tools",
         "Define JSON schemas for tools in the model request and execute the returned function arguments in your application to fetch live data.",
         "Instruct the model to execute arbitrary shell commands directly on the Azure AI host server.",
         "Ask the model to hallucinate SQL query results without connecting to the actual database.",
         "Hardcode database root passwords in the system prompt so the model can connect via ODBC.",
         "Azure OpenAI function calling allows models to return structured JSON containing function names and arguments matching client-provided tool schemas. The application executes the external API or database query and feeds the result back to the model for conversational synthesis.",
         ["openai", "function-calling", "tools"]),

        ("System Message Steering and Prompt Engineering", "Defining model persona, boundaries, and few-shot examples",
         "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples.",
         "Leave the system prompt blank and allow end-users to override application instructions.",
         "Embed user input directly into system instructions without sanitizing delimiters.",
         "Set model temperature to 2.0 to ensure predictable, deterministic mathematical answers.",
         "The system message sets the behavioral foundation, domain scope, and output constraints for language models. Providing few-shot demonstration examples and explicit refusal boundaries guides the model to produce deterministic, accurate, and secure outputs.",
         ["prompt-engineering", "system-message", "openai"])
    ]

    d3_topics = [
        ("Azure AI Vision Read API for OCR", "Extracting printed and handwritten text from documents and images",
         "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores.",
         "Write custom convolutional neural networks from scratch in C++ to recognize individual pixel characters.",
         "Use simple thresholding and regex search on raw binary image buffers.",
         "Convert images to low-resolution black-and-white icons before running text detection.",
         "The Azure AI Vision Read API is an advanced optical character recognition (OCR) engine optimized for reading text-heavy images, scanned documents, and mixed printed/handwritten content. It outputs structured text hierarchies with bounding polygons and confidence scores.",
         ["vision", "ocr", "read-api"]),

        ("Conversational Language Understanding (CLU)", "Extracting intents and entities from user utterances",
         "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components.",
         "Write a dictionary of 50,000 hardcoded string matches in a switch-case statement.",
         "Use an unconstrained generative model with no entity extraction schema for transactional banking commands.",
         "Require users to speak in SQL query syntax when interacting with conversational voice bots.",
         "Conversational Language Understanding (CLU), part of Azure AI Language, uses state-of-the-art transformer models to classify user intents and extract structured entities from natural language utterances, powering robust conversational chatbots and voice assistants.",
         ["clu", "nlp", "language"]),

        ("Azure AI Speech Neural Voice and Synthesis", "Real-time speech-to-text and high-fidelity text-to-speech",
         "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models.",
         "Record static WAV files of a human voice reading every possible sentence combination.",
         "Use mechanical robotic synthesizers with fixed pitch and no phonetic modeling.",
         "Send raw audio files through an unoptimized HTTP POST request with no audio streaming.",
         "Azure AI Speech provides neural text-to-speech with human-like intonation, supporting expressive styles, SSML markup, and multi-lingual voice output. For speech-to-text, it enables real-time audio streaming, transcription, and custom speech acoustic/language adaptation.",
         ["speech", "neural-voice", "transcription"]),

        ("Text Analytics for Health and PII Redaction", "Detecting protected health information and sensitive PII entities",
         "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts.",
         "Manually read all customer logs and black out sensitive data with marker pen.",
         "Store unencrypted medical records in public web server access logs.",
         "Disable privacy compliance checks because internal databases are exempt from data protection laws.",
         "Azure AI Language provides prebuilt Named Entity Recognition (NER) specialized for Personally Identifiable Information (PII) and Protected Health Information (PHI). It automatically detects and redacts sensitive data (names, addresses, national IDs, medical concepts), ensuring GDPR and HIPAA compliance.",
         ["text-analytics", "pii", "healthcare"])
    ]

    d4_topics = [
        ("Azure AI Search Indexing and Skillsets", "Enriching raw unstructured data with cognitive skills pipelines",
         "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index.",
         "Store raw binary PDF files in an unindexed SQL database and perform table scans.",
         "Require human operators to read and manually type summary keywords into a spreadsheet for every uploaded document.",
         "Disable indexing and perform live text search across thousands of S3 blobs on every query.",
         "Azure AI Search skillsets define an automated cognitive enrichment pipeline. During indexing, built-in AI skills (OCR, language detection, key phrase extraction, image tagging, entity linking) extract structured annotations from unstructured documents, enriching the searchable index.",
         ["ai-search", "skillsets", "indexing"]),

        ("Vector and Hybrid Search with Semantic Ranker", "State-of-the-art enterprise search relevance",
         "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance.",
         "Use basic SQL 'LIKE %keyword%' queries against unindexed text columns.",
         "Sort search results alphabetically by file name without relevance scoring.",
         "Rely solely on exact keyword matching without synonym maps or vector representations.",
         "Hybrid search in Azure AI Search combines traditional keyword search (BM25) with vector search (dense embeddings) to capture both exact matches and semantic intent. The Semantic Ranker applies advanced transformer models from Bing to re-rank top results, drastically improving answer quality.",
         ["ai-search", "vector-search", "semantic-ranker"]),

        ("Azure AI Document Intelligence Prebuilt Models", "Automating invoice, receipt, and identity document extraction",
         "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically.",
         "Write custom coordinate-based bounding box parsers that break whenever an invoice vendor changes layout.",
         "Ask end-users to re-type all invoice line items manually into web form fields.",
         "Save scanned receipts as unreadable low-quality JPEG thumbnails in database blobs.",
         "Azure AI Document Intelligence provides pre-trained models for common business documents (invoices, receipts, W-2 tax forms, identity documents). They automatically extract structured fields (merchant name, transaction date, tax amount, line item details) with high accuracy out-of-the-box.",
         ["document-intelligence", "invoices", "extraction"]),

        ("Custom Document Classification and Neural Models", "Extracting fields from specialized enterprise document types",
         "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms.",
         "Deploy a single hardcoded regex script that expects identical pixel offsets across all vendors.",
         "Retrain an open-source OCR model from scratch using millions of unannotated images.",
         "Reject any incoming PDF document that does not conform to an exact pixel-by-pixel grid.",
         "For specialized enterprise documents that do not match prebuilt schemas, Document Intelligence custom neural models learn layout and semantic relationships across multi-page, unstructured, or varied-format documents using few-shot transfer learning.",
         ["document-intelligence", "custom-model", "neural"])
    ]

    q_id_counter = 1
    fc_id_counter = 1

    for pack_idx in range(1, 21):
        domain = pack_domains[pack_idx - 1]
        
        if domain["id"] == "d1":
            topics_pool = d1_topics
        elif domain["id"] == "d2":
            topics_pool = d2_topics
        elif domain["id"] == "d3":
            topics_pool = d3_topics
        else:
            topics_pool = d4_topics
            
        pack_questions = []
        pack_cards = []

        for i in range(25):
            topic_idx = (i + (pack_idx - 1) * 3) % len(topics_pool)
            title_prefix, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
            context_title, context_desc = CONTEXTS[i]
            
            if i < 5:
                diff = "easy"
            elif i < 20:
                diff = "medium"
            else:
                diff = "hard"
                
            q_id = f"azure-ai102-{q_id_counter}"
            fc_id = f"azure-ai102-fc-{fc_id_counter}"
            
            target_slot = i % 4
            distractors = [dist1, dist2, dist3]
            
            options = []
            d_idx = 0
            for slot_idx in range(4):
                slot_id = chr(65 + slot_idx)
                if slot_idx == target_slot:
                    options.append({"id": slot_id, "text": correct_text})
                else:
                    options.append({"id": slot_id, "text": distractors[d_idx]})
                    d_idx += 1

            correct_letter = chr(65 + target_slot)
            
            scenario = f"In a {context_title.lower()} solution, {context_desc.lower()} The enterprise AI team is currently {scenario_core.lower()} under architecture delivery sprint {pack_idx}.{i+1}."
            question_text = f"Which Azure AI service architecture or configuration satisfies these {context_title.lower()} requirements for {title_prefix.lower()}?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{title_prefix}: {context_title}",
                "scenario": scenario,
                "question": question_text,
                "options": options,
                "correctAnswers": [correct_letter],
                "type": "single",
                "explanation": explanation,
                "referenceUrl": REF_URL,
                "tags": tags + [context_title]
            })
            
            fc_front = f"Azure AI: {title_prefix} in {context_title}"
            fc_hint = f"Focus on {tags[0]} and {tags[1]} capabilities."
            fc_back = f"<strong>{title_prefix}</strong>: {correct_text} Core architectural rationale: {explanation[:160]}..."
            
            pack_cards.append({
                "id": fc_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "front": fc_front,
                "hint": fc_hint,
                "back": fc_back,
                "tags": tags + [context_title]
            })
            
            q_id_counter += 1
            fc_id_counter += 1

        write_question_pack(CERT_ID, f"{EXPORT_PREFIX}_QUESTIONS", pack_idx, pack_questions)
        write_flashcard_pack(CERT_ID, f"{EXPORT_PREFIX}_FLASHCARDS", pack_idx, pack_cards)

    print(f"Generated 500 questions and 500 flashcards for {CERT_ID} across 20 packs.")

if __name__ == "__main__":
    build_azure_ai_bank()
