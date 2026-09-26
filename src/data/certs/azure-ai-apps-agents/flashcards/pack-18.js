export const AZURE_AI_APPS_AGENTS_FLASHCARDS_18 = [
  {
    id: 'azure-ai-apps-agents-fc-426',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Pull vs push indexing in Azure AI Search: when do you use each?',
    hint: 'Who moves the data?',
    back: '<strong>Pull</strong>: an <strong>indexer</strong> connects to a supported source (Blob Storage, ADLS Gen2, Azure SQL, Cosmos DB and others), runs a skillset for enrichment, and refreshes on a schedule. <strong>Push</strong>: your code sends documents through the indexing API; use it for unsupported sources, near-real-time updates, or content produced by another pipeline such as Content Understanding output.',
    tags: ['Azure AI Search', 'Indexing']
  },
  {
    id: 'azure-ai-apps-agents-fc-427',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How does Reciprocal Rank Fusion combine results in a hybrid query?',
    hint: 'Ranks, not raw scores.',
    back: 'Each query (keyword and one or more vector queries) produces its own ranked list. RRF gives every document a score of about <strong>1 / (k + rank)</strong> in each list and sums them, so documents ranked well in several lists rise. Because it uses ranks, BM25 and similarity scores need no normalization. A vector query\'s <strong>weight</strong> scales its contribution.',
    tags: ['Hybrid search', 'RRF']
  },
  {
    id: 'azure-ai-apps-agents-fc-428',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What does the semantic ranker actually do, and what does it need?',
    hint: 'Rerank the top of the list.',
    back: 'It takes the <strong>top 50</strong> results from the initial keyword or hybrid query and <strong>reranks</strong> them with a Microsoft language model, adding a reranker score, and optionally <strong>captions</strong> and <strong>answers</strong>. It needs a <strong>semantic configuration</strong> (title, content and keyword fields) and a billable tier (Basic or higher). It does not retrieve new documents or generate text.',
    tags: ['Semantic ranker', 'Relevance']
  },
  {
    id: 'azure-ai-apps-agents-fc-429',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'HNSW vs exhaustive KNN in Azure AI Search?',
    hint: 'Approximate graph vs brute force.',
    back: '<strong>HNSW</strong>: approximate nearest neighbor over a navigable graph; fast at scale, tunable with m, efConstruction and efSearch; slight recall loss. <strong>Exhaustive KNN</strong>: compares every vector; exact but slow on large indexes. Use eKNN for small indexes or to get ground truth, even on an HNSW field by setting <code>exhaustive: true</code> on the query.',
    tags: ['Vector search', 'HNSW']
  },
  {
    id: 'azure-ai-apps-agents-fc-430',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What does each HNSW parameter trade off?',
    hint: 'Links, build list, search list.',
    back: '<strong>m</strong>: links per node; higher improves recall but uses more memory and build time. <strong>efConstruction</strong>: candidate list size while building; higher gives a better graph and slower indexing. <strong>efSearch</strong>: candidate list size at query time; higher raises recall and query latency. When recall is low and latency has headroom, raise efSearch first.',
    tags: ['HNSW', 'Vector search']
  },
  {
    id: 'azure-ai-apps-agents-fc-431',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Vector query filter modes: preFilter, postFilter and strict postfiltering?',
    hint: 'When is the filter applied?',
    back: '<strong>preFilter</strong> applies the filter during graph traversal, so all k results match; best recall for selective filters, more CPU. <strong>postFilter</strong> finds neighbors per shard first and filters afterward; fast, but selective filters can leave fewer than k results. <strong>Strict postfiltering</strong> (preview) filters after the global top k is found.',
    tags: ['Vector search', 'Filters']
  },
  {
    id: 'azure-ai-apps-agents-fc-432',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What are the three parts of a vector search configuration on an index?',
    hint: 'How to search, how to embed queries, how to shrink.',
    back: 'A <strong>vector profile</strong> assigned to each vector field ties together an <strong>algorithm</strong> configuration (HNSW or exhaustive KNN, plus metric), an optional <strong>vectorizer</strong> that embeds query text or images at query time, and optional <strong>compression</strong> (scalar or binary quantization). The field itself declares its dimensions.',
    tags: ['Vector search', 'Index schema']
  },
  {
    id: 'azure-ai-apps-agents-fc-433',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Index projections vs knowledge store projections: where does the output go?',
    hint: 'One feeds search, one feeds analytics.',
    back: '<strong>Index projections</strong> map enriched content one-to-many into a <strong>search index</strong>, typically one document per chunk with parent fields; they can skip indexing the parent. <strong>Knowledge store projections</strong> write enriched content to <strong>Azure Storage</strong> as tables, JSON objects or image files for analytics tools such as Power BI.',
    tags: ['Index projections', 'Knowledge store']
  },
  {
    id: 'azure-ai-apps-agents-fc-434',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Built-in, custom and utility skills: what distinguishes them?',
    hint: 'Who runs the code and who pays.',
    back: '<strong>Built-in</strong> skills call Microsoft models: most bill to an attached Foundry resource (OCR, Entity Recognition, PII Detection), while Azure OpenAI Embedding, GenAI Prompt and Content Understanding call your own deployments. <strong>Custom</strong> skills (Web API, AML) call your code. <strong>Utility</strong> skills (Text Split, Text Merge, Shaper, Conditional) run inside Azure AI Search and are mostly free.',
    tags: ['Skillsets', 'Enrichment']
  },
  {
    id: 'azure-ai-apps-agents-fc-435',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'imageAction options on a blob indexer: what does each produce?',
    hint: 'None, embedded, whole page.',
    back: '<code>none</code> (default): images are ignored. <code>generateNormalizedImages</code>: embedded images and image files become <strong>normalized_images</strong> for skills such as OCR. <code>generateNormalizedImagePerPage</code>: for PDFs, <strong>each page is rendered</strong> to one image, capturing vector-drawn charts, at higher processing cost.',
    tags: ['Image extraction', 'Blob indexer']
  },
  {
    id: 'azure-ai-apps-agents-fc-436',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'OCR skill vs Image Analysis skill?',
    hint: 'Read text vs describe the picture.',
    back: '<strong>OCR</strong> reads printed and handwritten <strong>text</strong> in images, such as serial numbers on a label. <strong>Image Analysis</strong> <strong>describes visual content</strong>: tags, captions, objects, brands. For rich, question-answerable descriptions of diagrams, use image verbalization with the <strong>GenAI Prompt</strong> skill instead.',
    tags: ['OCR', 'Image Analysis']
  },
  {
    id: 'azure-ai-apps-agents-fc-437',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Image verbalization vs multimodal embeddings for searching images?',
    hint: 'Describe then embed, or embed the pixels.',
    back: '<strong>Verbalization</strong>: GenAI Prompt skill asks a vision chat model to describe each image, then a text embedding model embeds the description; text questions match well and descriptions are readable for grounding. <strong>Multimodal embeddings</strong> (Azure Vision skill and vectorizer): images and text share one vector space, enabling <strong>image-to-image</strong> and text-to-image search without generated text.',
    tags: ['Multimodal search', 'Embeddings']
  },
  {
    id: 'azure-ai-apps-agents-fc-438',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What request and response shape must a Custom Web API skill endpoint follow?',
    hint: 'A values array keyed by recordId.',
    back: 'Azure AI Search posts JSON with a <code>values</code> array; each item has a <code>recordId</code> and a <code>data</code> object with the skill inputs. The endpoint must return a <code>values</code> array with the same recordIds, each holding <code>data</code> (outputs) plus optional <code>errors</code> and <code>warnings</code>. Batch size, timeout and degree of parallelism are set on the skill.',
    tags: ['Custom skill', 'Web API']
  },
  {
    id: 'azure-ai-apps-agents-fc-439',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How much enrichment is free before you must attach a Foundry resource to a skillset?',
    hint: 'A small daily allowance.',
    back: 'About <strong>20 documents per indexer per day</strong> for built-in skills backed by Foundry Tools. Beyond that, attach a billable <strong>Microsoft Foundry resource</strong> to the skillset, by key or keylessly through the search service\'s managed identity with the <strong>Cognitive Services User</strong> role. The Content Understanding skill has no free allowance.',
    tags: ['Skillset billing', 'Foundry Tools']
  },
  {
    id: 'azure-ai-apps-agents-fc-440',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What does incremental enrichment cache, and what triggers reprocessing?',
    hint: 'Skill outputs in Azure Storage.',
    back: 'With an <strong>enrichment cache</strong> configured on the indexer, each skill\'s outputs are stored in Azure Storage. When you edit the skillset, the indexer <strong>reruns only affected skills</strong> and downstream steps, reusing cached outputs for the rest, so expensive OCR or LLM calls are not repeated. Changing a document or an upstream skill invalidates dependent cache entries. The feature is in preview.',
    tags: ['Incremental enrichment', 'Cost optimization']
  },
  {
    id: 'azure-ai-apps-agents-fc-441',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'How do synonym maps work in Azure AI Search, and what do they not affect?',
    hint: 'Query expansion, assigned per field.',
    back: 'A <strong>synonym map</strong> is a separate index resource holding rules in Solr format: equivalent terms (<code>car, auto, automobile</code>) or one-way mappings (<code>laptop => notebook</code>). You attach it to a <strong>searchable string field</strong> through the field\'s <code>synonymMaps</code> property, and matching terms in a query are expanded at query time, so updating the map needs no reindexing. It does not change vector queries, and it does not expand terms inside wildcard or fuzzy searches.',
    tags: ['Azure AI Search', 'Synonym maps']
  },
  {
    id: 'azure-ai-apps-agents-fc-442',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which blob indexer parsing modes turn one file into many search documents?',
    hint: 'Arrays, lines, rows.',
    back: '<code>jsonArray</code>: one document per element of a JSON array. <code>jsonLines</code>: one per line of newline-delimited JSON. <code>delimitedText</code>: one per CSV row. <code>markdown</code> can split by headers (oneToMany). <code>default</code>, <code>json</code> and <code>text</code> produce one document per file.',
    tags: ['Blob indexer', 'Parsing modes']
  },
  {
    id: 'azure-ai-apps-agents-fc-443',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Standard analyzer vs language analyzer on a searchable field?',
    hint: 'Tokenize only, or understand word forms.',
    back: 'The <strong>standard</strong> (default) analyzer splits text into tokens and lowercases them, nothing more. A <strong>language analyzer</strong>, such as <code>fr.microsoft</code> or <code>de.lucene</code>, adds language-aware stemming or lemmatization and stop words, so plurals and related forms match. A field has one analyzer; use separate fields per language.',
    tags: ['Analyzers', 'Full-text search']
  },
  {
    id: 'azure-ai-apps-agents-fc-444',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which scoring profile functions can boost results, and what does each use?',
    hint: 'Four functions plus field weights.',
    back: '<strong>freshness</strong> boosts by a date field over a boosting duration; <strong>magnitude</strong> by a numeric range such as rating; <strong>distance</strong> by geographic proximity; <strong>tag</strong> by overlap between a field and query-supplied tags. <strong>Text weights</strong> boost matches in chosen fields. Profiles soften ranking; filters and sorting are hard rules.',
    tags: ['Scoring profiles', 'Relevance']
  },
  {
    id: 'azure-ai-apps-agents-fc-445',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Semantic captions vs semantic answers: what triggers each and what comes back?',
    hint: 'Every result vs question-like queries.',
    back: 'With <code>queryType=semantic</code>: <code>captions=extractive</code> returns the most relevant <strong>passage per result</strong>, optionally with highlighting. <code>answers=extractive|count-N</code> returns up to N <strong>verbatim answers</strong> from top documents, only when the query looks like a question and a passage answers it. Neither is generated text.',
    tags: ['Semantic ranker', 'Captions']
  },
  {
    id: 'azure-ai-apps-agents-fc-446',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Text Split skill: which settings control chunking, and why add overlap?',
    hint: 'Mode, length, overlap, unit.',
    back: '<code>textSplitMode</code> (pages or sentences), <code>maximumPageLength</code>, <code>pageOverlapLength</code> and <code>unit</code> (characters, or tokens with an encoder). <strong>Overlap</strong> repeats a little text between adjacent chunks so a sentence or fact spanning a boundary is complete in at least one chunk. For structure-aware chunks, use a layout-based skill instead.',
    tags: ['Chunking', 'Text Split']
  },
  {
    id: 'azure-ai-apps-agents-fc-447',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'What do the context and inputs of a skill refer to in the enrichment tree?',
    hint: 'Paths like /document/pages/*.',
    back: 'Enrichment builds a tree rooted at <code>/document</code>. A skill\'s <strong>context</strong> sets where it runs, for example <code>/document/pages/*</code> to run once per chunk. <strong>Inputs</strong> are source paths in the tree; <strong>outputs</strong> add new nodes under the context. Output field mappings or index projections then move nodes into index fields.',
    tags: ['Skillsets', 'Enrichment tree']
  },
  {
    id: 'azure-ai-apps-agents-fc-448',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Which Content Understanding analyzers help ingest audio, video and images into a search index?',
    hint: 'The prebuilt ...Search family.',
    back: '<code>prebuilt-audioSearch</code> (transcript and conversation summary), <code>prebuilt-videoSearch</code> (segments with transcript and descriptions of people, places and actions), <code>prebuilt-imageSearch</code> (image description) and <code>prebuilt-documentSearch</code> (Markdown, figure descriptions, summary, chunks). Push their output into the index as text and vectors.',
    tags: ['Content Understanding', 'Ingestion']
  },
  {
    id: 'azure-ai-apps-agents-fc-449',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Why must the query vectorizer match the model that embedded the documents?',
    hint: 'Same space, same dimensions.',
    back: 'Similarity only means something inside one embedding space. A query embedded by a different model, or the same model with a different <code>dimensions</code> setting, lands in an incompatible space or fails the field\'s dimension check. Configure the vectorizer on the vector profile with the <strong>same deployment and dimensions</strong> the indexing skill used, and re-embed everything when you change models.',
    tags: ['Vectorizer', 'Embeddings']
  },
  {
    id: 'azure-ai-apps-agents-fc-450',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd5',
    front: 'Custom Entity Lookup vs Entity Recognition skill?',
    hint: 'Your list vs Microsoft\'s categories.',
    back: '<strong>Entity Recognition</strong> finds entities in fixed prebuilt categories (Person, Location, Organization, Product, DateTime and others). <strong>Custom Entity Lookup</strong> finds words and phrases from <strong>your own list</strong>, inline or from a file, with optional <strong>fuzzy matching</strong> and aliases; no training data needed. Use it for catalogues, part names and internal jargon.',
    tags: ['Custom Entity Lookup', 'Enrichment']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_18;
