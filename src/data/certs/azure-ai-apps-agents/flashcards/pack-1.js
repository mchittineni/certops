export const AZURE_AI_APPS_AGENTS_FLASHCARDS_1 = [
  {
    id: 'azure-ai-apps-agents-fc-1',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Large language model or small language model: what decides which one a task gets?',
    hint: 'Start from how hard the task is, not how good the model is.',
    back: 'Pick the <strong>smallest model that passes your evaluation</strong>. Small language models (Phi-4-mini, gpt-4.1-nano) suit narrow, high-volume work such as classification, extraction and short rewrites, and they run cheaper, faster and even on devices. Move to a <strong>large model</strong> when the task needs broad world knowledge, long-context synthesis or open-ended generation, and to a <strong>reasoning model</strong> only when multistep logic fails on a standard chat model.',
    tags: ['Model selection', 'Small language models']
  },
  {
    id: 'azure-ai-apps-agents-fc-2',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which request parameters change when you move a prompt from a chat model to an o-series reasoning model?',
    hint: 'One knob is added, several sampling knobs go away.',
    back: 'Reasoning models add <strong>reasoning_effort</strong> (low, medium, high), which trades latency and hidden reasoning tokens for thoroughness. Output length is capped with <strong>max_completion_tokens</strong>, which covers reasoning plus visible output, instead of max_tokens. Sampling controls such as <strong>temperature, top_p and the presence and frequency penalties are not supported</strong>. Developer messages take the place of system messages on newer reasoning models.',
    tags: ['Reasoning models', 'Parameters']
  },
  {
    id: 'azure-ai-apps-agents-fc-3',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What is Foundry Local and when does it beat a cloud deployment?',
    hint: 'Think of places the internet does not reach.',
    back: '<strong>Foundry Local</strong> runs optimized open models (for example the Phi family) directly on a Windows or macOS device and exposes an <strong>OpenAI-compatible endpoint on localhost</strong>, picking CPU, GPU or NPU builds for the hardware. Choose it when the app must work <strong>offline</strong>, keep data <strong>on the device</strong>, or avoid per-token cloud costs; choose a cloud deployment when you need frontier models, elastic scale or managed safety filters.',
    tags: ['Foundry Local', 'Edge']
  },
  {
    id: 'azure-ai-apps-agents-fc-4',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does a model router deployment do, and what does the application give up by using it?',
    hint: 'One deployment name, many models behind it.',
    back: '<strong>Model router</strong> is a deployable Foundry model that inspects each prompt and forwards it to a suitable underlying chat or reasoning model, so simple prompts go to cheaper models and complex ones to capable models, <strong>without routing code in the app</strong>. The response reports which model served it. The trade-off: less direct control over which model answers, so evaluate quality on your own prompts and pin a specific deployment where one model must always be used.',
    tags: ['Model router', 'Cost']
  },
  {
    id: 'azure-ai-apps-agents-fc-5',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Foundry Models sold directly by Azure vs models from partners and the community: what differs?',
    hint: 'Who stands behind the model contract and support?',
    back: '<strong>Models sold directly by Azure</strong> (Azure OpenAI models plus selected others such as some DeepSeek, Llama and Grok versions) are hosted, billed and supported by Microsoft under Azure product terms and SLAs, and support deployment types such as Global Standard and provisioned. <strong>Partner and community models</strong> come from their providers, are governed by the provider\'s terms and may be offered only as serverless API or managed compute deployments. Check the model card for the deployment types it supports.',
    tags: ['Foundry Models', 'Model catalog']
  },
  {
    id: 'azure-ai-apps-agents-fc-6',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What are Foundry Tools, and when should a prebuilt tool win over prompting an LLM?',
    hint: 'The services formerly branded as Azure AI services.',
    back: '<strong>Foundry Tools</strong> is the family of task-specific services, formerly Azure AI services: Azure Speech, Language, Translator, Vision, Document Intelligence and Content Understanding, among others. Prefer a prebuilt tool when the task is well defined and you need <strong>deterministic, repeatable output with confidence scores</strong>, such as PII redaction, OCR or speech transcription with timestamps. Prefer an LLM when the task is open-ended or the categories cannot be listed in advance.',
    tags: ['Foundry Tools', 'Model selection']
  },
  {
    id: 'azure-ai-apps-agents-fc-7',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Content Understanding or Document Intelligence: how do you choose for document extraction?',
    hint: 'Describe fields, or train and pick from prebuilt models?',
    back: '<strong>Azure Content Understanding</strong> uses generative models with a <strong>field schema you describe in natural language</strong>, works across documents, images, audio and video, and returns structured or Markdown output with confidence and grounding. <strong>Azure Document Intelligence</strong> offers prebuilt models (invoice, receipt, ID, layout) and custom models trained on labelled samples, suited to high-volume fixed forms. Choose Content Understanding for varied layouts or multimodal input; Document Intelligence for established prebuilt form types.',
    tags: ['Content Understanding', 'Document Intelligence']
  },
  {
    id: 'azure-ai-apps-agents-fc-8',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Azure Vision image analysis vs a multimodal chat model: which fits which image task?',
    hint: 'Fixed outputs versus free-form reasoning.',
    back: '<strong>Azure Vision image analysis</strong> returns fixed, structured outputs such as tags, objects with bounding boxes, OCR text and captions, cheaply and consistently at scale. A <strong>multimodal chat model</strong> (gpt-4.1, gpt-4o) reasons over the image in natural language: answering questions, comparing images or following instructions about what to look for. Use Vision for predictable metadata pipelines and the chat model when the question varies per image.',
    tags: ['Azure Vision', 'Multimodal models']
  },
  {
    id: 'azure-ai-apps-agents-fc-9',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Real-time, fast and batch transcription in Azure Speech: when do you use each?',
    hint: 'Live audio, one file now, or thousands of files later.',
    back: '<strong>Real-time</strong> speech to text (Speech SDK) streams live microphone or call audio with interim results. <strong>Fast transcription</strong> is a synchronous REST call that returns a transcript of a stored file faster than real time, for one file needed now. <strong>Batch transcription</strong> is asynchronous over many files in Blob Storage, with diarization and word timestamps, for large backlogs where results can arrive later. All three can use a custom speech model for domain vocabulary.',
    tags: ['Azure Speech', 'Transcription']
  },
  {
    id: 'azure-ai-apps-agents-fc-10',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'text-embedding-3-small vs text-embedding-3-large: what is the trade-off, and what does the dimensions parameter do?',
    hint: 'Relevance against storage and cost.',
    back: '<strong>text-embedding-3-large</strong> (up to 3,072 dimensions) gives the best retrieval quality; <strong>text-embedding-3-small</strong> (up to 1,536) is cheaper and smaller. Both accept a <strong>dimensions</strong> parameter that returns a shortened vector, keeping most of the relevance while cutting storage. Whatever you choose, <strong>documents and queries must be embedded with the same model and dimensions</strong>, or similarity scores are meaningless.',
    tags: ['Embeddings', 'Vector search']
  },
  {
    id: 'azure-ai-apps-agents-fc-11',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Where should vectors live: Azure AI Search, Cosmos DB, or PostgreSQL with pgvector?',
    hint: 'Keep vectors next to the data unless you need search features.',
    back: 'Choose <strong>Azure AI Search</strong> when you need hybrid keyword plus vector queries, the semantic ranker, skillset enrichment, agentic retrieval or many heterogeneous sources in one index. Choose <strong>Cosmos DB vector search</strong> or <strong>PostgreSQL with pgvector</strong> when the data already lives in that operational database and changes constantly, so vectors stay transactionally beside the records and no second store needs synchronising. Relevance tooling is richest in AI Search; data freshness is simplest in place.',
    tags: ['Vector search', 'Azure AI Search', 'Cosmos DB']
  },
  {
    id: 'azure-ai-apps-agents-fc-12',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How does a hybrid query in Azure AI Search combine keyword and vector results?',
    hint: 'Ranks, not raw scores, are merged.',
    back: 'A hybrid query runs the <strong>full-text (BM25) query and one or more vector queries in parallel</strong>, then merges the result lists with <strong>Reciprocal Rank Fusion (RRF)</strong>, which scores each document from its rank position in each list rather than its raw score. That lets exact tokens such as product codes and semantic intent both surface. Vector weights can tilt the fusion toward one side, and the semantic ranker can re-score the merged top results.',
    tags: ['Azure AI Search', 'Hybrid search', 'RRF']
  },
  {
    id: 'azure-ai-apps-agents-fc-13',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does the semantic ranker add to an Azure AI Search query, and on how many results does it work?',
    hint: 'It reorders; it does not retrieve.',
    back: 'The <strong>semantic ranker</strong> takes the <strong>top 50 results</strong> of a keyword or hybrid query and re-scores them with a Microsoft language-understanding model, returning a <strong>@search.rerankerScore</strong> from 0 to 4. It can also return semantic captions and answers. It never finds documents the first stage missed, so poor recall must be fixed in the query or index; poor ordering of relevant results is what it fixes.',
    tags: ['Azure AI Search', 'Semantic ranker']
  },
  {
    id: 'azure-ai-apps-agents-fc-14',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'In integrated vectorization, what is the difference between the embedding skill and the vectorizer?',
    hint: 'One runs at indexing time, the other at query time.',
    back: 'The <strong>embedding skill</strong> (for example the Azure OpenAI Embedding skill) sits in the indexer\'s <strong>skillset</strong> and embeds document chunks while content is indexed. The <strong>vectorizer</strong> is defined on the index\'s vector profile and embeds the <strong>query text at search time</strong>, so clients can send plain text vector queries. Both should reference the same embedding model and dimensions; defining only a vectorizer leaves documents without vectors.',
    tags: ['Integrated vectorization', 'Azure AI Search']
  },
  {
    id: 'azure-ai-apps-agents-fc-15',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Fixed-size chunking vs structure-aware chunking: when is each good enough?',
    hint: 'Does the document have headings and tables that matter?',
    back: '<strong>Fixed-size chunks with overlap</strong> (Text Split skill, for example about 512 tokens with 10-25 percent overlap) are simple and work well for uniform prose. <strong>Structure-aware chunking</strong>, such as the Document Layout skill emitting Markdown sections, keeps tables whole and attaches the heading path to each chunk, which matters for manuals, contracts and regulatory documents where a paragraph means little without its section. Evaluate retrieval quality on real questions before settling on sizes.',
    tags: ['Chunking', 'RAG']
  },
  {
    id: 'azure-ai-apps-agents-fc-16',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does agentic retrieval do that a single hybrid query does not?',
    hint: 'An LLM plans the search before it runs.',
    back: '<strong>Agentic retrieval</strong> (the engine behind a Foundry IQ knowledge base) uses an LLM to <strong>plan the query</strong>: it reads the question and chat history, decomposes it into <strong>subqueries</strong>, runs them in parallel across one or more knowledge sources, semantically reranks and merges results, and returns grounding data with citations. A retrieval reasoning effort setting (minimal, low, medium) controls how much LLM planning is spent. It costs more latency and tokens than one query but handles compound questions.',
    tags: ['Agentic retrieval', 'Foundry IQ']
  },
  {
    id: 'azure-ai-apps-agents-fc-17',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Memory, Foundry IQ, or file search: which grounding mechanism answers which need?',
    hint: 'Who the user is, what the company knows, what was just uploaded.',
    back: '<strong>Memory</strong>: user-specific facts learned over time, such as preferences or past issues, carried across sessions. <strong>Foundry IQ knowledge base</strong>: curated organizational content shared by many agents, with permission-aware retrieval. <strong>File search</strong>: documents a user provides during an interaction, embedded into a vector store for that conversation. Mixing them up leads to stale, leaky or unscalable designs.',
    tags: ['Agent memory', 'Foundry IQ', 'File search']
  },
  {
    id: 'azure-ai-apps-agents-fc-18',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which three kinds of long-term memory does Foundry Agent Service extract?',
    hint: 'Who you are, what you discussed, how you like things done.',
    back: '<strong>User profile memory</strong>: durable preferences and context such as language or dietary needs; retrieve it early in a conversation. <strong>Chat summary memory</strong>: distilled summaries of earlier conversations; retrieve per turn for continuity. <strong>Procedural memory</strong>: reusable routines inferred from past interactions. Memories are extracted, consolidated by an LLM to remove duplicates and conflicts, and scoped, for example per user with the memory search tool.',
    tags: ['Agent memory', 'Foundry Agent Service']
  },
  {
    id: 'azure-ai-apps-agents-fc-19',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Function calling, OpenAPI tool, or Azure Functions tool: where does each tool call actually execute?',
    hint: 'Client side or service side, and who holds the credentials?',
    back: '<strong>Function calling</strong>: the agent returns the call and arguments; <strong>your client code executes it</strong> and submits the output, so it can reach private systems and keep credentials local. <strong>OpenAPI tool</strong>: the <strong>Agent Service calls the REST API itself</strong> from an OpenAPI 3.0 definition, with anonymous, key or managed identity authentication. <strong>Azure Functions tool</strong>: the service invokes a function, typically through queue triggers, for server-side logic you host.',
    tags: ['Function calling', 'OpenAPI tool', 'Agent tools']
  },
  {
    id: 'azure-ai-apps-agents-fc-20',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does the MCP tool give a Foundry agent, and how do you keep a human in control of its calls?',
    hint: 'A protocol for reusing tools, and one setting for approval.',
    back: 'The <strong>MCP tool</strong> connects an agent to a remote <strong>Model Context Protocol server</strong>, so tools a vendor or another team publishes once can be reused by any MCP-capable agent. Set <strong>require_approval</strong> to always (or per tool) and the run pauses with an approval request that your app must accept or reject before the call proceeds. Use custom headers or a project connection to pass authentication to the server.',
    tags: ['MCP', 'Approval', 'Agent tools']
  },
  {
    id: 'azure-ai-apps-agents-fc-21',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'When should an agent use code interpreter rather than letting the model answer directly?',
    hint: 'Anything that must be computed rather than predicted.',
    back: 'Enable <strong>code interpreter</strong> when the answer depends on <strong>exact computation or file processing</strong>: arithmetic over uploaded CSV or Excel data, statistics, format conversion or charts. The model writes and runs Python in a <strong>sandbox</strong> and can return generated files such as PNG charts. The sandbox has no general internet access, so it cannot call external APIs; use an action tool for that.',
    tags: ['Code interpreter', 'Agent tools']
  },
  {
    id: 'azure-ai-apps-agents-fc-22',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Scalar vs binary quantization in Azure AI Search: how much do they compress, and how do you recover relevance?',
    hint: 'Bytes versus bits per dimension.',
    back: '<strong>Scalar quantization</strong> maps each float32 dimension to an int8, about <strong>4x</strong> smaller. <strong>Binary quantization</strong> keeps one bit per dimension, about <strong>32x</strong> smaller, and works best on high-dimension embeddings. To recover ranking quality, enable <strong>rescoring</strong> with oversampling: the service retrieves extra candidates using the compressed vectors, then re-scores them with the full-precision originals. Setting stored to false on the vector field saves further disk space.',
    tags: ['Vector compression', 'Azure AI Search']
  },
  {
    id: 'azure-ai-apps-agents-fc-23',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'JSON mode vs structured outputs: what does each guarantee?',
    hint: 'Valid JSON is not the same as your JSON.',
    back: '<strong>JSON mode</strong> (response_format of json_object) guarantees only that the output <strong>parses as JSON</strong>; keys and types can still drift. <strong>Structured outputs</strong> (response_format of json_schema with <strong>strict set to true</strong>, or strict function definitions) constrain generation to <strong>match the supplied JSON Schema</strong>, including required fields and types. Use structured outputs whenever downstream code or tools consume the result.',
    tags: ['Structured outputs', 'Function calling']
  },
  {
    id: 'azure-ai-apps-agents-fc-24',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Grounding with Bing Search vs a Foundry IQ knowledge base: which grounding source fits which question?',
    hint: 'Public and current versus private and curated.',
    back: '<strong>Grounding with Bing Search</strong> retrieves <strong>current public web</strong> content at request time and returns citations, suited to news, prices or events after the model\'s cutoff; queries leave the Azure compliance boundary, so review its terms. A <strong>Foundry IQ knowledge base</strong> retrieves <strong>private organizational</strong> content from indexed or remote sources, with permission enforcement. Many agents use both.',
    tags: ['Grounding with Bing', 'Foundry IQ']
  },
  {
    id: 'azure-ai-apps-agents-fc-25',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How does permission-aware retrieval stop an agent leaking documents a user cannot open?',
    hint: 'The index must know the ACL and the query must know the user.',
    back: 'Two pieces are required. First, the knowledge source must <strong>carry document permissions into the index</strong>, for example by synchronising SharePoint or ADLS Gen2 ACLs, or Purview sensitivity labels. Second, retrieval must run with the <strong>caller\'s Microsoft Entra identity</strong> (a user token passed with the query), so results are trimmed at query time. Indexing under a broad service identity with no trimming, or relying on a system message, exposes everything.',
    tags: ['Security trimming', 'Foundry IQ']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_1;
