export const AZURE_AI_APPS_AGENTS_FLASHCARDS_19 = [
  {
    id: 'azure-ai-apps-agents-fc-451',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Content Understanding skill vs Document Layout skill in an Azure AI Search skillset?',
    hint: 'Tables, page breaks, figures, price.',
    back: 'Both take <code>file_data</code> and return chunked text sections with location metadata. The <strong>Content Understanding skill</strong> outputs tables and figures as <strong>Markdown</strong>, keeps <strong>cross-page tables</strong> whole, lets chunks span pages, can add AI figure descriptions, and is cheaper, but has no free daily allowance. The <strong>Document Layout skill</strong> (layout model) outputs tables as plain text in text mode.',
    tags: ['Content Understanding skill', 'Document Layout skill']
  },
  {
    id: 'azure-ai-apps-agents-fc-452',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What does allowSkillsetToReadFileData do on a blob indexer?',
    hint: 'A node called file_data.',
    back: 'It creates <code>/document/file_data</code>, an object holding the original file downloaded from Blob Storage, so skills that need the raw file, such as <strong>Document Layout</strong> and <strong>Content Understanding</strong>, can read it. It does not raise indexer or service size limits, and it applies only to Blob Storage sources.',
    tags: ['Blob indexer', 'Skillsets']
  },
  {
    id: 'azure-ai-apps-agents-fc-453',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Document Intelligence read, layout, prebuilt and custom models: what does each return?',
    hint: 'Text, structure, known fields, your fields.',
    back: '<strong>Read</strong>: printed and handwritten text lines and words with confidence. <strong>Layout</strong>: read plus tables, selection marks, paragraphs with roles, sections and figures, optionally as Markdown. <strong>Prebuilt</strong> models (invoice, receipt, ID and others): named fields for known document types. <strong>Custom</strong> models: your own labeled fields.',
    tags: ['Document Intelligence', 'Model selection']
  },
  {
    id: 'azure-ai-apps-agents-fc-454',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Why request Markdown output from the Document Intelligence layout model for RAG?',
    hint: 'One parameter.',
    back: 'Setting <code>outputContentFormat=markdown</code> returns content with <strong>headings, lists and tables marked up</strong> (tables as HTML in v4.0), so a chunker can split on section boundaries, keep tables intact, and give the LLM structure it understands. Plain text output loses the difference between headings, body and table cells.',
    tags: ['Document Intelligence', 'Markdown output']
  },
  {
    id: 'azure-ai-apps-agents-fc-455',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What does the Document Intelligence query fields add-on do, and what are its limits?',
    hint: 'Extend a schema at request time.',
    back: 'Set <code>features=queryFields</code> and list field names to extract <strong>extra fields</strong> on top of a prebuilt or custom model, or alongside layout output, with <strong>no labeling or training</strong>. It is a <strong>premium</strong> add-on, supports up to <strong>20 fields</strong> per request, and works best with camel or Pascal case field names.',
    tags: ['Document Intelligence', 'Query fields']
  },
  {
    id: 'azure-ai-apps-agents-fc-456',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Name four Document Intelligence add-on capabilities and what each adds.',
    hint: 'Set through the features parameter.',
    back: '<strong>ocrHighResolution</strong>: better recognition of small text in large documents. <strong>barcodes</strong>: decoded barcodes and QR codes with type. <strong>keyValuePairs</strong>: label and value pairs from layout. <strong>queryFields</strong>: extra named fields. Others include <strong>formulas</strong>, <strong>styleFont</strong> and <strong>languages</strong>. Not every model or Office file type supports every add-on.',
    tags: ['Document Intelligence', 'Add-on capabilities']
  },
  {
    id: 'azure-ai-apps-agents-fc-457',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Custom template vs custom neural model in Document Intelligence?',
    hint: 'Fixed layout vs varied layouts.',
    back: '<strong>Template</strong> (form): relies on a consistent visual layout; trains in about <strong>1 to 5 minutes</strong>; supports signatures and coordinates. <strong>Neural</strong> (document): handles structured, semi-structured and unstructured documents with <strong>varying layouts</strong>; trains in about <strong>30 minutes to 12 hours</strong>; supports overlapping fields and table confidence. Both start from <strong>five labeled examples</strong>.',
    tags: ['Document Intelligence', 'Custom models']
  },
  {
    id: 'azure-ai-apps-agents-fc-458',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Composed model vs custom classification model in Document Intelligence?',
    hint: 'Route then extract.',
    back: 'A <strong>custom classification model</strong> identifies the document type of each file or page range, which also lets you split a mixed bundle. A <strong>composed model</strong> groups several custom extraction models behind one model ID and uses a classifier to route each document to the right extraction model. Use both for mixed paperwork with different schemas.',
    tags: ['Document Intelligence', 'Classification']
  },
  {
    id: 'azure-ai-apps-agents-fc-459',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What does the Document Intelligence batch analysis API handle, and what are its limits?',
    hint: 'Container in, container out.',
    back: 'It analyzes up to <strong>10,000 documents</strong> from an Azure Blob Storage container in <strong>one request</strong> and writes each result to a destination container, so you do not submit and track thousands of individual analyze calls. Batch status and results metadata are retained for <strong>24 hours</strong> after completion.',
    tags: ['Document Intelligence', 'Batch analysis']
  },
  {
    id: 'azure-ai-apps-agents-fc-460',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Azure Vision Read OCR vs Document Intelligence read: which for which input?',
    hint: 'Scenes vs documents.',
    back: '<strong>Azure Vision Read</strong> (Image Analysis): general, in-the-wild images such as signs, labels and product photos, with a synchronous call. <strong>Document Intelligence read</strong>: documents, including <strong>multipage PDFs</strong> and Office files, with page structure, and a path up to layout, prebuilt and custom models.',
    tags: ['OCR', 'Azure Vision']
  },
  {
    id: 'azure-ai-apps-agents-fc-461',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Azure AI Search field attributes: what do key, searchable, filterable, sortable, facetable and retrievable each enable?',
    hint: 'Each attribute adds an index structure.',
    back: '<strong>key</strong>: the unique document ID string, one per index. <strong>searchable</strong>: full-text search with an analyzer. <strong>filterable</strong>: exact-match <code>$filter</code> expressions. <strong>sortable</strong>: <code>$orderby</code>. <strong>facetable</strong>: counts for faceted navigation. <strong>retrievable</strong>: returned in results. Enable only what you need, since each attribute adds storage. You can add new fields at any time, but most attribute changes on an existing field mean rebuilding the index; retrievable is an exception.',
    tags: ['Azure AI Search', 'Index schema']
  },
  {
    id: 'azure-ai-apps-agents-fc-462',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'File search tool, Azure AI Search tool or Foundry IQ knowledge base: how do you choose for an agent?',
    hint: 'Who owns the data and how many sources?',
    back: '<strong>File search</strong>: files users or developers upload to an agent-managed vector store. <strong>Azure AI Search tool</strong>: one existing index your team maintains, with filters and query type. <strong>Foundry IQ knowledge base</strong>: several sources behind agentic retrieval, shared across agents, with permission-aware results, connected through MCP.',
    tags: ['Agent tools', 'Retrieval']
  },
  {
    id: 'azure-ai-apps-agents-fc-463',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'List the pieces needed to connect a Foundry agent to a Foundry IQ knowledge base keylessly.',
    hint: 'Connection, tool, roles.',
    back: '1. A <strong>RemoteTool</strong> project connection targeting <code>{search}/knowledgebases/{kb}/mcp</code> with <strong>ProjectManagedIdentity</strong> auth. 2. An <strong>MCP tool</strong> on the agent using that connection, with <code>allowed_tools</code> set to <code>knowledge_base_retrieve</code>. 3. <strong>Search Index Data Reader</strong> for the project identity on the search service. 4. If the knowledge base uses an LLM, <strong>Cognitive Services User</strong> for the search service identity on the Foundry resource.',
    tags: ['Foundry IQ', 'MCP']
  },
  {
    id: 'azure-ai-apps-agents-fc-464',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Knowledge base retrieval reasoning effort: what changes between minimal, low and medium?',
    hint: 'How much LLM work per query.',
    back: '<strong>Minimal</strong>: no LLM query planning; the query runs directly against sources and returns extractive data; the mode supported by the GA API. <strong>Low</strong> and <strong>medium</strong> (preview): an LLM plans and decomposes the query into subqueries, selects sources and may iterate, improving compound questions at the cost of latency and tokens.',
    tags: ['Foundry IQ', 'Agentic retrieval']
  },
  {
    id: 'azure-ai-apps-agents-fc-465',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Extractive data vs answer synthesis output from a knowledge base?',
    hint: 'Raw passages or a written answer.',
    back: '<strong>Extractive data</strong> returns the retrieved content with references, so the calling agent reasons and cites itself. <strong>Answer synthesis</strong> (preview, needs an LLM) returns a natural-language answer with source references, shaped by optional answer instructions. Agents that write their own answers usually want extractive data.',
    tags: ['Foundry IQ', 'Output modes']
  },
  {
    id: 'azure-ai-apps-agents-fc-466',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How are per-user permissions enforced when an agent queries a knowledge base?',
    hint: 'A header carrying the user\'s token.',
    back: 'Index <strong>permission metadata</strong> (ACL or group fields, or synchronized SharePoint ACLs and Purview labels) and pass the signed-in user\'s token in the <code>x-ms-query-source-authorization</code> header. In Foundry Agent Service, reference it as a <code>{{placeholder}}</code> in the MCP tool headers backed by a <strong>structured input</strong> supplied per request. Without the token, permission-enabled sources return unfiltered results.',
    tags: ['Foundry IQ', 'Document-level security']
  },
  {
    id: 'azure-ai-apps-agents-fc-467',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Run vs reset an indexer: what is the difference?',
    hint: 'Incremental vs from scratch.',
    back: '<strong>Run</strong> (on demand or scheduled) is incremental: change detection processes only new or modified content. <strong>Reset</strong> clears the high-water mark and change tracking state so the next run reprocesses everything. For near-real-time ingestion, trigger a run from an event, such as a Blob Storage created event handled by a function.',
    tags: ['Indexers', 'Ingestion']
  },
  {
    id: 'azure-ai-apps-agents-fc-468',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Why can a document fail in the Document Layout or Content Understanding skill even though it is a valid PDF?',
    hint: 'A time limit that still bills.',
    back: 'Both skills time out on documents needing more than about <strong>five minutes</strong> of analysis, and the attached Foundry resource is <strong>still charged</strong>. Split very large files before ingestion. Output also inherits service behavior per file type, so DOCX and PDF can differ in image handling; convert to PDF when consistency matters.',
    tags: ['Skill limits', 'Troubleshooting']
  },
  {
    id: 'azure-ai-apps-agents-fc-469',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Chunking options on the Content Understanding skill: fixed size vs semantic?',
    hint: 'Characters with overlap, or tokens by layout.',
    back: '<strong>fixedSize</strong> (default): character-based windows, <code>maximumLength</code> 300 to 50,000 (default 500), <code>overlapLength</code> under half the maximum. <strong>semantic</strong> (preview): layout-aware, respects paragraphs and large tables, measured in <strong>tokens</strong> (100 to 8,000), overlap must be omitted or 0. Adding <code>modelName</code> and <code>modelDeployment</code> enables figure descriptions.',
    tags: ['Content Understanding skill', 'Chunking']
  },
  {
    id: 'azure-ai-apps-agents-fc-470',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Why does an embedding skill with context /document produce one vector per file after Text Split?',
    hint: 'Context decides how many times a skill runs.',
    back: 'A skill runs <strong>once per node matched by its context</strong>. With <code>/document</code> it runs once per file. Set the context to <code>/document/pages/*</code> and the input to <code>/document/pages/*</code> so each chunk is embedded, then use <strong>index projections</strong> to write one search document per chunk.',
    tags: ['Embedding skill', 'Enrichment tree']
  },
  {
    id: 'azure-ai-apps-agents-fc-471',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How can a RAG pipeline get figure images out of the Document Intelligence layout model?',
    hint: 'Ask for figures in the output.',
    back: 'Request <strong>figure output</strong> on the analyze call; the service produces <strong>cropped images</strong> of detected figures that you download by figure ID from the analysis result. Store them with their captions and page locations so a vision-capable model can be shown the diagram when a question refers to it.',
    tags: ['Document Intelligence', 'Figures']
  },
  {
    id: 'azure-ai-apps-agents-fc-472',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which identities and roles does the Azure AI Search tool need for keyless access?',
    hint: 'The Foundry account identity.',
    back: 'Calls use the <strong>system-assigned managed identity of the Foundry account</strong> containing the project. Assign it <strong>Search Index Data Contributor</strong> and <strong>Search Service Contributor</strong> on the search service, and create the project connection with Microsoft Entra ID authentication instead of an API key.',
    tags: ['Azure AI Search tool', 'Managed identity']
  },
  {
    id: 'azure-ai-apps-agents-fc-473',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Why must a push-built index define a vectorizer before an agent tool can run hybrid queries against it?',
    hint: 'The tool sends words, not numbers.',
    back: 'The Azure AI Search tool and knowledge bases send the user\'s question as <strong>text</strong>. The vector part of a hybrid or vector query can run only if the search service can embed that text itself, which requires a <strong>vectorizer</strong> for the same embedding model on the vector field\'s profile, even if your own code embedded the documents.',
    tags: ['Vectorizer', 'Agent tools']
  },
  {
    id: 'azure-ai-apps-agents-fc-474',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which knowledge base features need the preview API, and which work on the GA API?',
    hint: 'GA is minimal and extractive.',
    back: 'The GA API version supports generally available knowledge source types with <strong>minimal, extractive retrieval</strong>. <strong>LLM query planning</strong>, <strong>answer synthesis</strong>, configurable <strong>reasoning effort</strong>, preview knowledge sources and the knowledge base <strong>MCP endpoint</strong> used by Foundry agents require the preview API version. The portals expose agentic retrieval as preview.',
    tags: ['Foundry IQ', 'API versions']
  },
  {
    id: 'azure-ai-apps-agents-fc-475',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How can a non-Foundry application use a Foundry IQ knowledge base?',
    hint: 'It is an Azure AI Search object.',
    back: 'Call the knowledge base <strong>retrieve</strong> action over the Azure AI Search <strong>REST API</strong> or SDKs from any app, such as Microsoft Agent Framework or a custom orchestrator. You keep the same knowledge sources, agentic retrieval behavior, permission handling and references that Foundry agents get through MCP.',
    tags: ['Foundry IQ', 'Integration']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_19;
