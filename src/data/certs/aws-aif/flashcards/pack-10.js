export const AWS_AIF_FLASHCARDS_10 = [
  {
    id: 'aws-aif-fc-226',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Which selection criteria does the exam guide list for choosing a pre-trained model?',
    hint: 'Eight of them: money, media, speed, languages, and more.',
    back: '<strong>Cost</strong>, <strong>modality</strong> (text, image, video, audio, embeddings), <strong>latency</strong>, <strong>multi-lingual</strong> support, <strong>model size</strong>, <strong>model complexity</strong>, <strong>customization</strong> options, and <strong>input/output length</strong> (context window and maximum output). Weigh them against the use case, then evaluate a shortlist on your own prompts.',
    tags: ['Model selection']
  },
  {
    id: 'aws-aif-fc-227',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Low temperature vs high temperature: when do you use each?',
    hint: 'Facts or ideas?',
    back: '<strong>Low temperature</strong> (near 0): the model strongly favors the most likely tokens, giving <strong>focused, consistent</strong> output for factual answers, extraction, classification, and code. <strong>High temperature</strong>: probability spreads across more tokens, giving <strong>diverse, creative</strong> output for brainstorming, marketing copy, and fiction, at the cost of more errors and variation.',
    tags: ['Inference parameters', 'Temperature']
  },
  {
    id: 'aws-aif-fc-228',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Top P vs top K: how does each narrow the choice of the next token?',
    hint: 'A probability budget versus a fixed head count.',
    back: '<strong>Top P</strong> (nucleus sampling) keeps the smallest set of most likely tokens whose probabilities <strong>add up to P</strong>; the pool size changes step by step. <strong>Top K</strong> keeps exactly the <strong>K most likely tokens</strong>. Lower values of either make output more focused; higher values allow more variety. Tune one sampling control at a time.',
    tags: ['Inference parameters', 'Top P', 'Top K']
  },
  {
    id: 'aws-aif-fc-229',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does the maximum output tokens setting control, and how do you spot it cutting answers off?',
    hint: 'Look at why generation stopped.',
    back: 'It caps how many tokens the model may <strong>generate</strong> in one response, limiting length and cost. If answers end mid-sentence and the response\'s <strong>stop reason</strong> reports the length limit (for example max_tokens), the cap is too low for the task. Each model also has its own ceiling for this value.',
    tags: ['Inference parameters', 'Output length']
  },
  {
    id: 'aws-aif-fc-230',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is a stop sequence used for?',
    hint: 'A string that means: stop here.',
    back: 'A stop sequence is a string that <strong>ends generation</strong> as soon as the model would produce it. Use it to stop after one turn of a dialogue (for example "User:"), after a closing tag, or after one list item, which keeps responses to the intended structure and avoids paying for extra tokens.',
    tags: ['Inference parameters', 'Stop sequences']
  },
  {
    id: 'aws-aif-fc-231',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Context window vs maximum output tokens: what is the difference?',
    hint: 'How much it can read versus how much it may write.',
    back: 'The <strong>context window</strong> is the total number of tokens the model can handle in one request, typically <strong>prompt plus response</strong>. <strong>Maximum output tokens</strong> caps only the <strong>generated response</strong> and has a model-specific ceiling that is usually far smaller than the context window. A huge document needs a big context window; a very long report needs a high output limit.',
    tags: ['Input length', 'Output length', 'Context window']
  },
  {
    id: 'aws-aif-fc-232',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Sketch sensible inference settings for extraction, customer Q&A, and creative writing.',
    hint: 'Randomness goes up as the task gets more open-ended.',
    back: '<strong>Extraction or classification</strong>: temperature near 0, output limit sized to the schema, stop sequence after the closing brace. <strong>Customer Q&A</strong>: low temperature, moderate output limit, concise-answer instruction. <strong>Creative writing</strong>: higher temperature or top P, larger output limit. Always confirm with evaluation on real prompts.',
    tags: ['Inference parameters']
  },
  {
    id: 'aws-aif-fc-233',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Does setting temperature to 0 guarantee identical output every time?',
    hint: 'Close, but not a contract.',
    back: '<strong>Not strictly.</strong> Temperature 0 makes the model choose its most likely token at each step, so output is highly consistent, but small numerical differences in serving infrastructure and any change of model version can still alter results. Design tests around properties (required fields, facts, format) rather than exact strings, and pin model versions for stability.',
    tags: ['Inference parameters', 'Nondeterminism']
  },
  {
    id: 'aws-aif-fc-234',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is Retrieval Augmented Generation (RAG), and what does it fix?',
    hint: 'Look it up first, then answer.',
    back: 'RAG <strong>retrieves relevant content</strong> from a knowledge source at query time and <strong>adds it to the prompt</strong>, so the model answers from that content. It gives answers access to <strong>private and current</strong> information without retraining, reduces hallucinations, and allows <strong>citations</strong>. The model\'s weights never change.',
    tags: ['RAG']
  },
  {
    id: 'aws-aif-fc-235',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Which business applications are a natural fit for RAG?',
    hint: 'Anywhere the answer lives in your documents.',
    back: '<strong>Customer support</strong> assistants over product manuals and policies, <strong>employee knowledge</strong> assistants over HR and IT content, <strong>legal and compliance</strong> research over contracts and regulations, <strong>sales enablement</strong> over pricing and product sheets, and <strong>clinical or technical reference</strong> lookups where every answer must cite its source.',
    tags: ['RAG', 'Use cases']
  },
  {
    id: 'aws-aif-fc-236',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does Amazon Bedrock Knowledge Bases manage for you?',
    hint: 'The whole RAG pipeline, end to end.',
    back: 'Connecting to <strong>data sources</strong> (Amazon S3, web crawler, Confluence, SharePoint, Salesforce, and others), <strong>parsing and chunking</strong> documents, creating <strong>embeddings</strong>, writing them to a <strong>vector store</strong>, keeping it in sync, and <strong>retrieving</strong> relevant chunks (optionally generating a cited answer) at query time.',
    tags: ['Amazon Bedrock Knowledge Bases', 'RAG']
  },
  {
    id: 'aws-aif-fc-237',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Knowledge Bases: Retrieve vs RetrieveAndGenerate. When do you call each?',
    hint: 'Do you want passages or a finished answer?',
    back: '<strong>Retrieve</strong> returns the most relevant <strong>chunks and their sources</strong>; your application builds its own prompt and calls whichever model it chooses. <strong>RetrieveAndGenerate</strong> retrieves <strong>and</strong> calls a model for you, returning a <strong>generated answer with citations</strong>. Use Retrieve for full control and RetrieveAndGenerate for the fastest path.',
    tags: ['Amazon Bedrock Knowledge Bases', 'RAG']
  },
  {
    id: 'aws-aif-fc-238',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does a reranker model add to knowledge base retrieval?',
    hint: 'Vector similarity finds candidates; a second model orders them.',
    back: 'A <strong>reranker</strong> scores each retrieved chunk for relevance to the query and reorders the list, overriding the default similarity ranking. You can then pass <strong>fewer but more relevant</strong> chunks to the generating model, which improves answers and cuts input tokens, cost and latency. In Amazon Bedrock you enable it in <code>Retrieve</code> or <code>RetrieveAndGenerate</code>, or call the standalone <code>Rerank</code> API (models such as Amazon Rerank and Cohere Rerank). It works on text only.',
    tags: ['Knowledge Bases', 'Reranking']
  },
  {
    id: 'aws-aif-fc-239',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'A RAG assistant gives a wrong answer. How do you tell a retrieval problem from a generation problem?',
    hint: 'Look at what was retrieved before blaming the model.',
    back: 'Inspect the <strong>retrieved chunks</strong> for that question. If the right passage is <strong>missing</strong>, fix retrieval: chunking, metadata filters, number of results, embedding model, or hybrid search. If the right passage is <strong>present but the answer is still wrong</strong>, fix generation: the prompt instructions, the model choice, or add a contextual grounding check.',
    tags: ['RAG', 'Troubleshooting']
  },
  {
    id: 'aws-aif-fc-240',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does metadata filtering add to retrieval in a knowledge base?',
    hint: 'Narrow the haystack before searching it.',
    back: 'Documents carry <strong>metadata attributes</strong> (product line, Region, department, year), and a query can <strong>filter</strong> on them so similarity search only considers matching chunks. It improves precision (no answers from the wrong product) and can help scope results per user group.',
    tags: ['RAG', 'Metadata filtering']
  },
  {
    id: 'aws-aif-fc-241',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why must documents and queries be embedded with the same embedding model?',
    hint: 'Two different maps cannot be overlaid.',
    back: 'Each embedding model defines its own <strong>vector space</strong>; distances are only meaningful between vectors from the <strong>same model</strong> (and dimension). A query embedded with a different model would retrieve nonsense. Switching embedding models therefore means <strong>re-embedding the whole corpus</strong>.',
    tags: ['Embeddings', 'RAG']
  },
  {
    id: 'aws-aif-fc-242',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Which AWS services does the exam guide name for storing embeddings in a vector database?',
    hint: 'One search engine, three relational or document databases, one graph.',
    back: '<strong>Amazon OpenSearch Service</strong>, <strong>Amazon Aurora</strong> (PostgreSQL with pgvector), <strong>Amazon Neptune</strong>, <strong>Amazon DocumentDB (with MongoDB compatibility)</strong>, and <strong>Amazon RDS for PostgreSQL</strong> (pgvector). All can store vectors and run similarity search.',
    tags: ['Vector databases']
  },
  {
    id: 'aws-aif-fc-243',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Amazon OpenSearch Service vs OpenSearch Serverless for vector search: what is the difference?',
    hint: 'Who sizes the cluster?',
    back: 'Both offer <strong>k-NN vector search</strong>. <strong>OpenSearch Service</strong> managed domains let you choose and tune instance types and cluster settings. <strong>OpenSearch Serverless</strong> vector search collections scale automatically with no clusters to size, and they are the default store when Bedrock quick-creates a knowledge base.',
    tags: ['Vector databases', 'Amazon OpenSearch Service']
  },
  {
    id: 'aws-aif-fc-244',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is pgvector, and which AWS databases support it?',
    hint: 'Vectors inside PostgreSQL.',
    back: 'pgvector is a <strong>PostgreSQL extension</strong> that adds a vector data type and similarity search operators and indexes. It is supported by <strong>Amazon Aurora PostgreSQL-Compatible Edition</strong> and <strong>Amazon RDS for PostgreSQL</strong>, so teams can keep embeddings beside relational data and combine vector search with SQL filters and joins.',
    tags: ['Vector databases', 'pgvector']
  },
  {
    id: 'aws-aif-fc-245',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does Amazon Neptune Analytics add to a Bedrock knowledge base?',
    hint: 'Relationships, not just similarity.',
    back: '<strong>GraphRAG</strong>: the knowledge base builds a graph of entities and relationships from your documents in Neptune Analytics and combines <strong>graph traversal with vector search</strong>. It helps with questions that need <strong>multi-hop connections</strong> across documents, such as how people, products, or compounds relate.',
    tags: ['Vector databases', 'Amazon Neptune', 'GraphRAG']
  },
  {
    id: 'aws-aif-fc-246',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'When is Amazon DocumentDB a sensible place for embeddings?',
    hint: 'Where does the data already live?',
    back: 'When the application already stores its content as <strong>JSON documents in DocumentDB</strong> and uses MongoDB-compatible tooling. DocumentDB <strong>vector search</strong> lets embeddings sit inside the existing documents, avoiding a second database to run and synchronize.',
    tags: ['Vector databases', 'Amazon DocumentDB']
  },
  {
    id: 'aws-aif-fc-247',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What decision rule helps choose among AWS vector store options?',
    hint: 'Start from what you already run.',
    back: 'No existing database and minimal operations: <strong>OpenSearch Serverless</strong>. Data already in PostgreSQL and SQL joins wanted: <strong>Aurora or RDS for PostgreSQL with pgvector</strong>. JSON app on DocumentDB: <strong>DocumentDB vector search</strong>. Relationship-heavy questions: <strong>Neptune Analytics</strong> (GraphRAG). Large-scale search with tuning control or hybrid keyword search: <strong>OpenSearch Service</strong>.',
    tags: ['Vector databases']
  },
  {
    id: 'aws-aif-fc-248',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is hybrid search in a knowledge base, and when does it beat pure semantic search?',
    hint: 'Meaning plus exact words.',
    back: 'Hybrid search combines <strong>semantic (vector) similarity</strong> with <strong>keyword matching</strong> and merges the results. It helps when queries contain <strong>exact identifiers</strong> such as part numbers, error codes, or product names, which embeddings may not match precisely. Bedrock Knowledge Bases supports it with compatible vector stores such as OpenSearch.',
    tags: ['RAG', 'Hybrid search']
  },
  {
    id: 'aws-aif-fc-249',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How do you estimate the monthly inference cost of a text model?',
    hint: 'Two token counts, two prices, one multiplier.',
    back: '<strong>(Average input tokens × input price + average output tokens × output price) × monthly requests</strong>. Prices are quoted per thousand or per million tokens and differ by model, so the same workload can cost several times more on one model than another. Include retrieved context in the input count.',
    tags: ['Model selection', 'Cost']
  },
  {
    id: 'aws-aif-fc-250',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Model size and complexity: what do you gain and give up with a larger model?',
    hint: 'Reasoning versus speed and price.',
    back: 'Larger, more complex models generally handle <strong>harder reasoning, nuance, and long instructions</strong> better, but they cost <strong>more per token</strong> and respond <strong>more slowly</strong>. Use them where errors are costly and latency is relaxed; use smaller models for simple, high-volume, or latency-sensitive tasks.',
    tags: ['Model selection', 'Model size']
  }
];

export default AWS_AIF_FLASHCARDS_10;
