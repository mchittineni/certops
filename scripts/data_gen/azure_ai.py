#!/usr/bin/env python3
"""
Generator for Microsoft Certified: Azure AI Engineer Associate (AI-102) content:
- 500 questions (20 packs x 25)
- 500 flashcards (20 packs x 25)
"""
import os, json
from generate_content import write_question_pack, write_flashcard_pack, CONTEXTS, STAGES

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
        ("Azure AI Multi-Service Resource vs Single-Service", "One Resource or Several for Multiple Capabilities",
         "provisioning Vision, Language, and Document Intelligence for one application with a single bill",
         "Create a multi-service Azure AI services resource to share a single endpoint, key, and billing account across Vision, Language, and Document Intelligence.",
         "Create a separate single-service resource for Vision, for Language, and for Document Intelligence, each with its own endpoint, key, and billing line.",
         "Create an Azure AI Foundry hub with a connected project so that every capability is reached through the connections the hub defines.",
         "Create one multi-service resource in each region and route every application to whichever resource has been deployed nearest to it.",
         "A multi-service resource exposes one endpoint and one key across the vision, language, and document capabilities and bills them together, which is exactly what a single application drawing on all three needs. Single-service resources are the right choice when a capability needs its own network isolation, quota, or region, at the cost of a key and a bill per service. A Foundry hub organises projects and their connections rather than consolidating the underlying resources, and deploying per region addresses latency rather than the number of endpoints and bills.",
         ["azure-ai", "multi-service", "management"]),

        ("Securing AI Services with Managed Identities", "Removing Static Keys From an Application",
         "authenticating an App Service to Azure AI without any credential stored in the application",
         "Enable a System-Assigned or User-Assigned Managed Identity on the Azure App Service and assign the 'Cognitive Services User' role.",
         "Register an Entra ID application, keep its client secret in Azure Key Vault, and have the app read the secret to request a token.",
         "Store the Azure AI account key in Azure Key Vault and grant the App Service permission to read that key when it starts.",
         "Restrict the Azure AI resource firewall to the App Service's outbound IP addresses so that the account key cannot be used elsewhere.",
         "A managed identity is issued and rotated by the platform, so the application requests an Entra ID token at runtime and holds no credential at all. A registered application with a client secret still has a secret, and one that must be rotated before it expires. Putting the account key in Key Vault protects it well but the key remains a shared credential that anyone reading the vault can replay. Restricting the firewall to known egress addresses narrows where a leaked key can be used without removing the key from the design.",
         ["security", "managed-identity", "entra-id"]),

        ("Private Endpoints and Network Isolation", "Keeping Inference Traffic Off the Public Internet",
         "ensuring inference calls never traverse a public endpoint under a strict network mandate",
         "Configure an Azure Private Endpoint in the virtual network and disable public network access on the Azure AI services resource.",
         "Configure a virtual network service endpoint on the subnet and add a matching network rule to the Azure AI resource firewall.",
         "Configure the Azure AI resource firewall to accept traffic only from the public IP address of the virtual network's NAT gateway.",
         "Route the subnet's outbound traffic through Azure Firewall with an application rule that permits the Azure AI service FQDN.",
         "A private endpoint places the service on a private IP inside the virtual network, and disabling public network access removes the public path entirely, so there is no internet-facing endpoint left to reach. A service endpoint keeps traffic on the Azure backbone but the resource retains a public endpoint that any permitted network can still call. Allow-listing the NAT gateway address and filtering egress through Azure Firewall both govern who may reach that public endpoint rather than eliminating it.",
         ["networking", "private-endpoint", "vnet"]),

        ("Azure AI Content Safety and Moderation", "Screening User Content for Harm Categories",
         "screening user-submitted text and images for harmful content across an application",
         "Integrate Azure AI Content Safety to analyze text and images for hate speech, self-harm, sexual content, and violence using severity levels.",
         "Rely on the content filters already configured on the Azure OpenAI deployment to screen both the prompts and the generated completions.",
         "Use Azure AI Language sentiment analysis and PII detection to flag any content that scores strongly negative before it is published.",
         "Add a blocklist of prohibited terms to the Azure AI Search index so that documents matching those terms are filtered out of results.",
         "Content Safety is a standalone moderation service, so it scores arbitrary user text and images on the four harm categories wherever they enter the application. The Azure OpenAI content filters cover exactly the prompts and completions of that deployment and see nothing a user uploads elsewhere, and they do not handle images at all. Sentiment analysis measures tone rather than harm, and a strongly negative review is not a policy violation. An index blocklist filters search results and never sees content at submission time.",
         ["content-safety", "responsible-ai", "moderation"])
    ]

    d2_topics = [
        ("Azure OpenAI RAG with Azure AI Search", "Answering From Proprietary Documents",
         "getting accurate answers out of an internal document corpus that changes weekly",
         "Use Azure OpenAI 'On Your Data' integrated with Azure AI Search to retrieve relevant document chunks using hybrid vector search and ground the model prompt.",
         "Fine-tune a base model on the whole document corpus so that the answers are learned directly into the model's own weights and no retrieval step is needed at query time.",
         "Raise the deployment's context window and place the entire document set into the system message on every single request.",
         "Use Azure AI Search on its own and return the highest-ranked document extracts to the user with no model in the path.",
         "Retrieval grounds each answer in the specific passages that were retrieved for that question, and because the index is refreshed independently a weekly corpus change costs an indexer run rather than anything model-side. Fine-tuning teaches style far better than facts, and every corpus change would mean another training cycle. Stuffing the full corpus into each request is bounded by the context window and pays for every token on every call. Search alone returns passages but leaves the user to synthesise the answer.",
         ["openai", "rag", "ai-search"]),

        ("Provisioned Throughput Units (PTU)", "Guaranteed Capacity for a Latency-Sensitive Workload",
         "guaranteeing consistent inference latency for a workload that cannot tolerate throttling",
         "Deploy models with Provisioned Throughput Units (PTU) to guarantee reserved compute capacity, consistent latency, and predictable monthly costs for critical apps.",
         "Use a standard deployment and request a regional quota increase so that the tokens-per-minute limit comfortably covers the peak load that is expected in that region.",
         "Use a standard deployment and add a batch endpoint so that requests are queued and processed as shared capacity becomes available.",
         "Deploy the same model into several regions and have the client retry against the next region whenever it receives a 429 response.",
         "PTU reserves dedicated capacity for the deployment, so throughput and latency stop depending on what other tenants in the region are doing. A quota increase raises the ceiling on a shared pool and does nothing to make the latency within it predictable. A batch endpoint deliberately trades latency for cost and is the wrong shape for interactive traffic. Multi-region retry improves availability but adds a failed call and a second round trip to the very requests that were already slow.",
         ["openai", "ptu", "capacity"]),

        ("Function Calling and Structured Tool Use", "Letting a Model Reach Live System Data",
         "letting a chat application answer questions from live data held in operational systems",
         "Define JSON schemas for tools in the model request and execute the returned function arguments in your application to fetch live data.",
         "Place the current values in the system message on every request so that the model always has fresh data available to answer from.",
         "Ask the model to return a JSON object describing the query it wants and parse that free-text response inside the application.",
         "Use Azure OpenAI 'On Your Data' against an Azure AI Search index that a scheduled indexer refreshes from the source systems.",
         "Tool schemas make the model emit a validated call naming a function and its arguments, so the application runs the query and the answer reflects the system state at that moment. Pushing current values into the system message only works for a small, known set of data and grows with every request. Asking for JSON in free text produces something close to the same result without the schema validation, so malformed arguments surface at parse time. An indexed copy is only as fresh as the last indexer run, which is the staleness the requirement rules out.",
         ["openai", "function-calling", "tools"]),

        ("System Message Steering and Prompt Engineering", "Constraining Model Behaviour and Refusals",
         "fixing an assistant's persona, scope, and refusal behaviour before it goes live",
         "Construct a comprehensive system prompt specifying the persona, task constraints, refusal boundaries, and few-shot input-output examples.",
         "Fine-tune the deployed model on several thousand examples that demonstrate both the intended persona and the required output format in each case.",
         "Set the response_format parameter to a JSON schema so that the model is constrained to produce the required output structure.",
         "Lower the temperature and top_p values so that the model's responses become considerably more consistent from call to call.",
         "The system message is where persona, scope, refusals, and worked examples belong, and changing any of them is a configuration edit rather than a deployment. Fine-tuning can teach a house style but costs a training run for every adjustment and is a poor way to express a refusal boundary. response_format governs the shape of the output and says nothing about what the assistant is or declines to do. Temperature and top_p change how varied the sampling is, not what behaviour is being sampled.",
         ["prompt-engineering", "system-message", "openai"])
    ]

    d3_topics = [
        ("Azure AI Vision Read API for OCR", "Reading Text From Photographed Pages",
         "extracting printed and handwritten text from photographs taken by field staff",
         "Use the Azure AI Vision Image Analysis 4.0 Read API to extract printed and handwritten text with bounding polygons and line-level confidence scores.",
         "Use Azure AI Document Intelligence's prebuilt-read model so that the extracted text arrives together with page, paragraph, and reading order structure.",
         "Use the Azure AI Vision Image Analysis caption and dense captions features to describe what appears on each photographed page.",
         "Use Azure AI Translator's document translation endpoint to process the image files and return the text content it recovers.",
         "The Read API is the OCR path in the Vision service and is tuned for text in photographed images, including handwriting, returning polygons and per-line confidence. Document Intelligence prebuilt-read is genuinely the other OCR option and is the better pick when document structure matters, but it is the document-processing pipeline rather than the image API these photographs flow through. Captions describe a scene instead of transcribing it, and Translator works on text that has already been extracted.",
         ["vision", "ocr", "read-api"]),

        ("Conversational Language Understanding (CLU)", "Turning Utterances Into Intents and Parameters",
         "mapping short spoken commands onto actions together with the parameters each one needs",
         "Train and deploy a Conversational Language Understanding (CLU) project with defined intents, learned entities, and prebuilt components.",
         "Train a custom text classification project in Azure AI Language so that each utterance is assigned to one of the supported categories.",
         "Send every utterance to an Azure OpenAI deployment and ask the model to name the intent and list any parameters that it finds.",
         "Use the question answering feature in Azure AI Language with a knowledge base built from the list of supported commands.",
         "CLU is built for exactly this shape: it returns the top intent and the entities inside the utterance, which together supply the action and its parameters. Custom text classification assigns the utterance to a category and stops there, leaving the parameters unextracted. An Azure OpenAI deployment can do both but gives a free-text answer with no schema, confidence scores, or training loop over labelled utterances. Question answering matches a question to a stored answer, which is not an action with arguments.",
         ["clu", "nlp", "language"]),

        ("Azure AI Speech Neural Voice and Synthesis", "Live Two-Way Voice With Domain Vocabulary",
         "building a live voice assistant that must recognise domain-specific product names",
         "Use Azure AI Speech SDK with Neural Voices for natural text-to-speech synthesis and continuous speech recognition with custom vocabulary models.",
         "Use the Azure AI Speech batch transcription REST API for the incoming audio and a selection of prebuilt neural voices for the spoken replies that are sent back.",
         "Use the Azure AI Speech fast transcription API for the incoming audio and SSML with a standard voice for the spoken replies.",
         "Use an Azure OpenAI audio model to transcribe the incoming audio and generate the spoken reply within a single request.",
         "The Speech SDK streams audio continuously and returns partial results as the caller speaks, and custom speech lets the domain product names be added to the recognition vocabulary. Batch transcription and fast transcription both operate on complete audio files that have already been recorded, so neither can drive a live conversation. An Azure OpenAI audio model handles both directions in one call and is a reasonable design, but it offers no vocabulary adaptation, which is what the unusual product names require.",
         ["speech", "neural-voice", "transcription"]),

        ("Text Analytics for Health and PII Redaction", "Removing Sensitive Values From Transcripts",
         "stripping identifiers out of stored customer transcripts before analysts see them",
         "Use Azure AI Language PII detection to identify, mask, and redact sensitive personal entities (SSN, credit cards, email) in customer transcripts.",
         "Use the named entity recognition feature in Azure AI Language to find person, organisation, and location entities and remove those spans.",
         "Use Microsoft Purview sensitive information types to classify the stored transcripts and then apply the matching sensitivity label to every one of them.",
         "Use the key phrase extraction feature in Azure AI Language to identify the significant terms and strip them out before storage.",
         "PII detection is trained on the identifier categories specifically, returns a redacted copy of the text alongside the detected spans, and covers types like national IDs and payment card numbers that general models miss. Named entity recognition finds people and places but leaves account numbers and card numbers untouched. Purview classifies and labels the file without altering its contents, so the identifiers are still there for an analyst to read. Key phrase extraction surfaces topics and has no notion of sensitivity at all.",
         ["text-analytics", "pii", "healthcare"])
    ]

    d4_topics = [
        ("Azure AI Search Indexing and Skillsets", "Enriching Documents As They Are Indexed",
         "enriching unstructured documents with extracted text and entities as they are indexed",
         "Create an Azure AI Search skillset that executes OCR, entity recognition, and key phrase extraction to enrich data before writing to the search index.",
         "Run an Azure Function on a queue trigger that calls each AI service in turn and writes the enriched documents into the search index using the push API.",
         "Attach a custom Web API skill to the indexer and carry out every part of the enrichment inside the external service that it calls.",
         "Configure an indexer with field mappings so that the raw document fields are copied straight into the index without an enrichment step.",
         "A skillset is the built-in enrichment pipeline: the indexer runs the skills in order, caches their output, and projects the results into the index without any code to host or operate. A queue-triggered Function reproduces that pipeline by hand and leaves incremental indexing, caching, and retry to be built. A custom Web API skill is part of a skillset rather than an alternative to one, and moving all enrichment into it discards the built-in skills. Field mappings only rename and copy, performing no enrichment.",
         ["ai-search", "skillsets", "indexing"]),

        ("Vector and Hybrid Search with Semantic Ranker", "Relevance for Natural-Language Queries",
         "improving result quality for conversational queries that rarely match the indexed wording",
         "Configure vector search with Azure OpenAI embeddings combined with full-text BM25 search and the Azure AI Search Semantic Ranker for top-tier relevance.",
         "Configure pure vector search over Azure OpenAI embeddings so that every result returned is ranked entirely by its own embedding similarity score alone.",
         "Configure full-text search together with a custom scoring profile that boosts the title field and the freshness of each document.",
         "Configure full-text search together with synonym maps so that the alternate phrasings users type match the indexed terms.",
         "Hybrid retrieval runs both the vector and the keyword query and fuses the results, so semantic paraphrases and exact identifiers are both found, and the semantic ranker then reorders the top set with a language model. Pure vector search captures paraphrase well but degrades on exact terms such as part numbers, which embeddings blur together. Scoring profiles and synonym maps are useful refinements to keyword search, but each encodes rules an author has to anticipate rather than matching on meaning.",
         ["ai-search", "vector-search", "semantic-ranker"]),

        ("Azure AI Document Intelligence Prebuilt Models", "Fields From Standard Business Documents",
         "extracting totals and line items from invoices and receipts arriving from many vendors",
         "Use Document Intelligence prebuilt models (e.g., prebuilt-invoice, prebuilt-receipt) to extract structured key-value pairs, line items, and totals automatically.",
         "Use the Document Intelligence prebuilt-layout model and map the tables and key-value pairs that it returns onto each of the required output fields in application code.",
         "Train a custom extraction model on a labelled sample of the organisation's own invoices and receipts before processing begins.",
         "Use the Azure AI Vision Read API to pull the text off each document and apply regular expressions to locate each required field.",
         "The prebuilt invoice and receipt models already understand these document types and return named fields such as vendor, total, and line items across layouts they have never seen, so vendor variety costs nothing. prebuilt-layout does return the tables and pairs but leaves the semantic mapping to code that has to be maintained per vendor. Training a custom model is work that only becomes necessary once a prebuilt schema does not fit. Regular expressions over raw OCR text break on the first layout change.",
         ["document-intelligence", "invoices", "extraction"]),

        ("Custom Document Classification and Neural Models", "Fields No Prebuilt Model Covers",
         "extracting clauses from long contracts whose layout differs with every counterparty",
         "Train a custom neural model in Document Intelligence using 5-10 labeled samples to extract specialized multi-page contract clauses and unstructured forms.",
         "Train a custom template model on the labelled samples so that each field is anchored to the position where it appears on the page.",
         "Use the prebuilt-contract model to extract the clauses and fill any remaining fields with post-processing rules written in code.",
         "Compose several prebuilt models behind a custom classifier so that every incoming document is routed to whichever schema happens to match it most closely.",
         "Custom neural models learn the semantics of a field from a handful of labelled samples and keep finding it when the surrounding layout changes, which is the defining problem with contracts from different counterparties. Template models are faster to train and highly accurate when documents are positionally consistent, and that is exactly the assumption these documents break. prebuilt-contract covers common contract fields but not clauses specific to one organisation. A classifier routes a document to a model but still needs an extraction model capable of reading it.",
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
            title_prefix, challenge, scenario_core, correct_text, dist1, dist2, dist3, explanation, tags = topics_pool[topic_idx]
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
            
            scenario = f"{context_desc} The AI team is {scenario_core}. The work is scoped to {STAGES[(pack_idx - 1) % len(STAGES)]}."
            question_text = "Which Azure AI approach best meets these requirements?"
            
            pack_questions.append({
                "id": q_id,
                "difficulty": diff,
                "certId": CERT_ID,
                "domainId": domain["id"],
                "domainName": domain["name"],
                "title": f"{challenge}: {context_title}",
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
