export const AZURE_AI_APPS_AGENTS_FLASHCARDS_4 = [
  {
    id: 'azure-ai-apps-agents-fc-76',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you check whether an Azure AI Search indexer is ingesting documents cleanly?',
    hint: 'Success overall can hide per-document problems.',
    back: 'Open the indexer\'s <strong>execution history</strong> (portal, or the Get Indexer Status API): each run reports status, documents processed and failed, and per-document <strong>errors</strong> (document not indexed) and <strong>warnings</strong> (indexed but degraded, such as truncated text or a skill with no output). maxFailedItems decides how many failures a run tolerates before stopping. Alert on failed runs and review warnings, because a successful run can still skip content.',
    tags: ['Azure AI Search', 'Indexers', 'Ingestion quality']
  },
  {
    id: 'azure-ai-apps-agents-fc-77',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Change detection vs deletion detection in Azure AI Search indexers: what does each catch?',
    hint: 'A deleted file leaves nothing to detect unless you plan for it.',
    back: '<strong>Change detection</strong> finds new and updated source items so runs are incremental: automatic for blobs via last-modified, or a <strong>high-water mark</strong> column for databases. <strong>Deletion detection</strong> removes index documents whose source is gone, which indexers cannot infer from absence: use <strong>native blob soft delete</strong> (with soft delete enabled on storage) or a <strong>soft-delete column</strong> that marks rows as deleted. Without it, withdrawn content keeps grounding answers.',
    tags: ['Azure AI Search', 'Deletion detection']
  },
  {
    id: 'azure-ai-apps-agents-fc-78',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Why might an indexer index only the beginning of a long document, and how do you fix it?',
    hint: 'The limit depends on the service tier.',
    back: 'Blob indexers cap the <strong>characters extracted per document</strong> by tier: about <strong>32,000 on Free, 64,000 on Basic</strong>, and millions on Standard tiers (4 million on S1). Text past the cap is dropped with a truncation <strong>warning</strong>, so it is never chunked, embedded or retrievable. Fix it by moving to a higher tier or splitting source documents before indexing; changing chunk size or overlap cannot recover text that was never extracted.',
    tags: ['Azure AI Search', 'Indexer limits']
  },
  {
    id: 'azure-ai-apps-agents-fc-79',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What is a debug session in Azure AI Search used for?',
    hint: 'One document, every skill, editable.',
    back: 'A <strong>debug session</strong> runs a single document through a skillset and shows the <strong>enriched document tree</strong> with each skill\'s inputs, outputs, errors and warnings. You can edit skill settings, input and output mappings and field mappings, rerun, and then commit the fix to the skillset. Use it when a field ends up empty or wrong for some documents.',
    tags: ['Azure AI Search', 'Debug sessions']
  },
  {
    id: 'azure-ai-apps-agents-fc-80',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does incremental enrichment (the enrichment cache) save you?',
    hint: 'Pay for OCR and embeddings once.',
    back: 'With a <strong>cache</strong> configured on the indexer (backed by Azure Storage), skill outputs are stored per document. When you change the skillset, mappings or add a skill, only the <strong>affected skills rerun</strong>; unchanged outputs such as OCR text and embeddings are reused. This cuts reprocessing time and the cost of billable skills and model calls on large corpora.',
    tags: ['Azure AI Search', 'Incremental enrichment']
  },
  {
    id: 'azure-ai-apps-agents-fc-81',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you measure search relevance from real user behaviour?',
    hint: 'Searches and clicks, correlated.',
    back: 'Implement <strong>search traffic analytics</strong>: the client logs a <strong>search event</strong> (query, result count, search ID) and <strong>click events</strong> (document, rank, same search ID) to <strong>Application Insights</strong>. Reports then show top queries, queries with no results, and queries whose results are never clicked, and let you compare click-through before and after relevance changes. For RAG, pair it with groundedness and retrieval evaluations.',
    tags: ['Search traffic analytics', 'Relevance']
  },
  {
    id: 'azure-ai-apps-agents-fc-82',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which knobs tune relevance in Azure AI Search, and which ranking stage does each affect?',
    hint: 'First-stage retrieval, fusion, then reranking.',
    back: '<strong>First stage</strong>: analyzers, synonym maps and <strong>scoring profiles</strong> (field weights, freshness or tag boosts) shape BM25 keyword results; embedding model, dimensions and HNSW parameters shape vector results. <strong>Fusion</strong>: per-vector-query <strong>weight</strong> tilts Reciprocal Rank Fusion in hybrid queries. <strong>Reranking</strong>: the <strong>semantic configuration</strong> (title, prioritized content and keyword fields) steers the semantic ranker over the top 50. Change one knob at a time and re-evaluate.',
    tags: ['Relevance tuning', 'Azure AI Search']
  },
  {
    id: 'azure-ai-apps-agents-fc-83',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which Azure AI Search metrics signal a service under query pressure?',
    hint: 'Latency, throughput and throttling.',
    back: '<strong>Search Latency</strong> (average query time), <strong>Search Queries Per Second</strong> and <strong>Throttled Search Queries Percentage</strong> are platform metrics in Azure Monitor. Rising latency together with throttling at steady index size means you need more <strong>replicas</strong>; indexing slowness or storage limits point to <strong>partitions</strong>. Resource logs (via a diagnostic setting) add per-query detail for slow-query analysis.',
    tags: ['Azure AI Search', 'Metrics']
  },
  {
    id: 'azure-ai-apps-agents-fc-84',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does keyless authentication to a Foundry model deployment look like in Python?',
    hint: 'A credential chain and a token provider.',
    back: 'Create <strong>DefaultAzureCredential()</strong> and wrap it with <strong>get_bearer_token_provider</strong> for the Foundry token scope, then pass the provider to the OpenAI or Foundry client instead of an API key. Locally it uses the Azure CLI or IDE sign-in; in Azure it uses the <strong>managed identity</strong>. Grant each identity a data-plane role such as <strong>Foundry User</strong>, then disable key authentication on the resource.',
    tags: ['Keyless authentication', 'DefaultAzureCredential']
  },
  {
    id: 'azure-ai-apps-agents-fc-85',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'System-assigned vs user-assigned managed identity: when do you choose each?',
    hint: 'Tied to one resource, or shared and independent.',
    back: '<strong>System-assigned</strong>: created with a single resource, deleted with it, one per resource; simplest for one app calling Foundry. <strong>User-assigned</strong>: a standalone resource you can attach to <strong>many</strong> resources and that survives their deletion; use it when several apps share access, when roles must be granted before the app exists, or when infrastructure is rebuilt often. Neither involves a secret you store or rotate.',
    tags: ['Managed identity']
  },
  {
    id: 'azure-ai-apps-agents-fc-86',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you turn off API key access on Foundry resources and keep it off?',
    hint: 'One property, one policy.',
    back: 'Set <strong>disableLocalAuth</strong> to true on the Foundry (Cognitive Services) resource, so only Microsoft Entra ID tokens are accepted and existing keys stop working. Enforce it at scale with the built-in <strong>Azure Policy</strong> that audits or denies resources with local authentication enabled, assigned at a management group. Migrate clients to managed identities and DefaultAzureCredential first, or they will fail when keys are disabled.',
    tags: ['Keyless authentication', 'Azure Policy']
  },
  {
    id: 'azure-ai-apps-agents-fc-87',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which private DNS zones does a Foundry resource private endpoint need?',
    hint: 'Three endpoint families share one private IP.',
    back: 'Link these zones to the virtual networks that resolve the resource: <strong>privatelink.cognitiveservices.azure.com</strong>, <strong>privatelink.openai.azure.com</strong> and <strong>privatelink.services.ai.azure.com</strong>. They make the normal endpoint names resolve to the private endpoint\'s IP. On-premises clients need DNS forwarding to Azure DNS (for example through a Private DNS Resolver). Then set <strong>public network access to disabled</strong>.',
    tags: ['Private endpoints', 'DNS', 'Private networking']
  },
  {
    id: 'azure-ai-apps-agents-fc-88',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Private endpoint vs shared private link on Azure AI Search: which direction does each secure?',
    hint: 'Clients coming in, indexers and skills going out.',
    back: 'A <strong>private endpoint</strong> on the search service secures <strong>inbound</strong> traffic: clients query the service over a private IP. A <strong>shared private link</strong> secures <strong>outbound</strong> traffic from the search service: indexers and skills reach a locked-down Storage account, Cosmos DB, SQL database or Foundry resource through a managed private endpoint that the target\'s owner must approve. Locking down a data source usually needs the second.',
    tags: ['Azure AI Search', 'Shared private link']
  },
  {
    id: 'azure-ai-apps-agents-fc-89',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How does Azure AI Search call an embedding deployment keylessly for integrated vectorization?',
    hint: 'The search service needs its own identity and a role.',
    back: 'Enable a <strong>managed identity</strong> on the search service and reference it in the <strong>Azure OpenAI Embedding skill</strong> and the index <strong>vectorizer</strong> instead of an API key. Grant that identity an <strong>inference role</strong> on the Foundry or Azure OpenAI resource, such as Cognitive Services OpenAI User. If the resource is network-restricted, add a shared private link from the search service to it.',
    tags: ['Integrated vectorization', 'Managed identity']
  },
  {
    id: 'azure-ai-apps-agents-fc-90',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does enabling customer-managed keys on a Foundry resource require?',
    hint: 'A vault that cannot lose the key.',
    back: 'A key in <strong>Azure Key Vault</strong> or Managed HSM with <strong>soft delete and purge protection</strong> enabled, and the Foundry resource\'s <strong>managed identity</strong> granted permission to get, wrap and unwrap the key. Data at rest (files, fine-tuning data, stored state) is then encrypted with your key, which you can rotate or revoke. Revoking it makes the data inaccessible, so plan key lifecycle carefully.',
    tags: ['Customer-managed keys', 'Encryption']
  },
  {
    id: 'azure-ai-apps-agents-fc-91',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What is a Foundry guardrail made of?',
    hint: 'What to look for, where, and what to do.',
    back: 'A <strong>guardrail</strong> is a named collection of <strong>controls</strong>. Each control combines a <strong>risk</strong> (such as violence, user prompt attacks, protected material or a blocklist), an <strong>intervention point</strong> (user input, output, and for agents also tool call and tool response) and an <strong>action</strong> (annotate, or annotate and block). One guardrail can be assigned to many model deployments and agents.',
    tags: ['Guardrails', 'Content safety']
  },
  {
    id: 'azure-ai-apps-agents-fc-92',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do severity thresholds work for the four harm categories, and what does the default guardrail do?',
    hint: 'Hate, sexual, violence, self-harm.',
    back: 'Each harm category is classified at <strong>safe, low, medium or high</strong> severity. A control\'s threshold decides what is flagged: <strong>Low</strong> flags low, medium and high; <strong>Medium</strong> flags medium and high; <strong>High</strong> flags only high. The default guardrail (<strong>Microsoft.DefaultV2</strong>) blocks medium and high on both prompts and completions and turns on jailbreak and protected material detection. Turning a category off requires approval.',
    tags: ['Guardrails', 'Severity levels']
  },
  {
    id: 'azure-ai-apps-agents-fc-93',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'User prompt attacks vs indirect attacks: what does each prompt shield detect?',
    hint: 'Who planted the instruction?',
    back: '<strong>User prompt attacks</strong> (jailbreaks) come from the <strong>user</strong>: role-play to bypass rules, requests to reveal system instructions, encoding tricks. <strong>Indirect attacks</strong> (cross-prompt injection) are instructions <strong>hidden in third-party content</strong> the model processes, such as documents, emails, web pages or tool results. Apply the first to user input; apply the second to grounding content and, for agents, the tool response intervention point.',
    tags: ['Prompt shields', 'Prompt injection']
  },
  {
    id: 'azure-ai-apps-agents-fc-94',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Protected material for text vs protected material for code: what does each detect?',
    hint: 'Lyrics and articles versus public repositories.',
    back: '<strong>Protected material for text</strong> flags output that reproduces known third-party text such as song lyrics, articles, recipes and selected web content. <strong>Protected material for code</strong> flags output matching code in <strong>public GitHub repositories</strong> and can return <strong>citations</strong> (repository and licence) so developers can check terms. Both run on the output intervention point.',
    tags: ['Protected material', 'Guardrails']
  },
  {
    id: 'azure-ai-apps-agents-fc-95',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'When do you need a custom blocklist rather than the harm categories?',
    hint: 'Terms that are not harmful, just unwanted.',
    back: 'Use a <strong>custom blocklist</strong> for specific terms the classifiers would not treat as harmful: competitor or product names, internal code names, brand-unsafe slang. Entries can be <strong>exact terms or regular expressions</strong>, and the blocklist is added to a guardrail for input, output or both. Harm categories handle broad classes such as hate or violence and cannot target a particular word list.',
    tags: ['Blocklists', 'Guardrails']
  },
  {
    id: 'azure-ai-apps-agents-fc-96',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which guardrail applies to a Foundry agent: the agent\'s or its model deployment\'s?',
    hint: 'Override, not merge.',
    back: 'If a guardrail is <strong>assigned to the agent</strong>, it <strong>fully overrides</strong> the model deployment\'s guardrail for that agent; the two are never combined. If none is assigned, the agent <strong>inherits</strong> the deployment\'s guardrail. Intervention points missing from the agent\'s guardrail, such as tool call or tool response, are simply not scanned. Some preview risks, like groundedness, apply to models but not agents.',
    tags: ['Agent guardrails', 'Guardrails']
  },
  {
    id: 'azure-ai-apps-agents-fc-97',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Annotate vs annotate and block: when is each action useful?',
    hint: 'Observe first, enforce later.',
    back: '<strong>Annotate</strong> returns detection results in the API response (category, severity, detected flag) but lets the content through: useful for trialling a new control, measuring false positives or letting your app decide. <strong>Annotate and block</strong> stops the prompt or completion and returns the reason. For agents, only annotate and block is available; annotate-only applies to model deployments.',
    tags: ['Guardrails', 'Annotations']
  },
  {
    id: 'azure-ai-apps-agents-fc-98',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Can you turn content filtering off for a Foundry model deployment?',
    hint: 'Loosening needs permission; tightening does not.',
    back: 'You can always make filtering <strong>stricter</strong> with a custom guardrail. Setting harm categories to <strong>Off</strong> for models sold by Azure requires approval through the <strong>modified guardrails limited access review</strong>; no role or deployment type bypasses it. Approved customers still own the responsibility for other mitigations, and abuse monitoring rules still apply.',
    tags: ['Modified guardrails', 'Content filtering']
  },
  {
    id: 'azure-ai-apps-agents-fc-99',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which newer guardrail risks go beyond harmful content, and where do they apply?',
    hint: 'Grounding, personal data and staying on task.',
    back: '<strong>Groundedness</strong> (preview) flags completions not supported by the grounding documents supplied in the request; models only. <strong>Personally identifiable information</strong> (preview) detects personal data in inputs or outputs. <strong>Task adherence</strong> (preview) flags when an agent\'s actions or tool use drift from the user\'s task. <strong>Spotlighting</strong> (preview) marks untrusted document content to blunt indirect attacks; models only.',
    tags: ['Guardrails', 'Groundedness detection', 'Task adherence']
  },
  {
    id: 'azure-ai-apps-agents-fc-100',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Why is a system message not a substitute for a guardrail?',
    hint: 'Guidance versus enforcement.',
    back: 'A <strong>system message</strong> steers the model\'s behaviour but is probabilistic: jailbreaks, indirect injection or model error can bypass it, and it cannot stop a harmful <strong>prompt</strong> reaching the model. A <strong>guardrail</strong> runs separate classifiers outside the model at defined intervention points and deterministically blocks or annotates. Use both: the system message for tone and scope, guardrails for enforcement.',
    tags: ['Guardrails', 'System messages']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_4;
