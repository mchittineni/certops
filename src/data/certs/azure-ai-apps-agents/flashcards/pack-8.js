export const AZURE_AI_APPS_AGENTS_FLASHCARDS_8 = [
  {
    id: 'azure-ai-apps-agents-fc-176',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What are the core runtime pieces of a Foundry prompt agent interaction?',
    hint: 'Definition, history, output.',
    back: 'The <strong>agent</strong>: a versioned definition of model, instructions and tools. The <strong>conversation</strong>: a durable record of messages, tool calls and outputs for one thread. The <strong>response</strong>: one Responses API call that runs the agent against the conversation (or a previous response) and returns output items such as text, tool calls and annotations. Clients send input plus an agent reference and a conversation ID.',
    tags: ['Agents', 'Conversations']
  },
  {
    id: 'azure-ai-apps-agents-fc-177',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What should well-written agent instructions cover?',
    hint: 'Who, what, what not, how.',
    back: '<strong>Role</strong> and audience, the <strong>goal</strong> and definition of done, <strong>scope</strong> (in and out, with a set reply or escalation path for out-of-scope requests), <strong>tool-use rules</strong> (which tool when, required order, what needs confirmation), <strong>grounding</strong> rules such as cite sources or say you do not know, and <strong>output format and tone</strong>. Keep volatile facts out: put them in knowledge tools.',
    tags: ['Agent instructions', 'Agent design']
  },
  {
    id: 'azure-ai-apps-agents-fc-178',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What makes a function tool definition easy for a model to use correctly?',
    hint: 'Write it for a new colleague.',
    back: 'A <strong>specific name</strong> (get_order_status, not search), a <strong>description</strong> of what it returns and <strong>when to use it versus similar tools</strong>, parameters with <strong>meaningful names, types and descriptions</strong> (formats, units, examples), <strong>enums</strong> for fixed value sets, only genuinely required fields marked required, and few, well-separated tools rather than many overlapping ones.',
    tags: ['Tool schemas', 'Function calling']
  },
  {
    id: 'azure-ai-apps-agents-fc-179',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How do you stop an agent sending invalid values for a tool parameter with a fixed set of options?',
    hint: 'Let the schema carry the list.',
    back: 'Declare the parameter with an <strong>enum</strong> listing the allowed values in its JSON schema, and describe what each means. With <strong>strict</strong> function schemas the arguments are constrained to the enum; without strict mode the enum still strongly steers the model. Validate arguments server side anyway before acting on them.',
    tags: ['Tool schemas', 'JSON schema']
  },
  {
    id: 'azure-ai-apps-agents-fc-180',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'previous_response_id chaining vs a conversation object: when do you pick each?',
    hint: 'Chain of calls vs durable thread.',
    back: '<strong>previous_response_id</strong>: lightweight chaining where the client holds the latest response ID; fine for short, single-client exchanges, but the chain is only as durable as the client\'s pointer. <strong>Conversation</strong>: a named, durable thread kept in Foundry that any client, channel or later session can continue, viewable in the portal. Use conversations for production agents, multichannel apps and supervisor review.',
    tags: ['Conversations', 'Conversation state']
  },
  {
    id: 'azure-ai-apps-agents-fc-181',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What is a Foundry toolbox, and what problem does it solve?',
    hint: 'One endpoint for many tools.',
    back: 'A <strong>toolbox</strong> bundles tools (MCP servers, OpenAPI, Azure AI Search, web search, code interpreter, A2A, skills and more) behind <strong>one MCP-compatible endpoint</strong> with <strong>centralized authentication</strong>, guardrails and <strong>versioning</strong>. Agents built with Foundry, Agent Framework, LangGraph or other MCP clients connect once; promoting a new toolbox version updates every consuming agent without code changes.',
    tags: ['Toolbox', 'Agent tools']
  },
  {
    id: 'azure-ai-apps-agents-fc-182',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does toolbox tool search keep large tool collections usable?',
    hint: 'Two meta-tools instead of hundreds.',
    back: 'Tool search (preview) hides tools by default and exposes two meta-tools: <strong>tool_search</strong>, which returns the tools most relevant to a described need, and <strong>call_tool</strong>, which invokes a discovered tool by name. You can <strong>pin</strong> critical tools so they are always visible, <strong>add context</strong> in your organization\'s terms to improve discovery, and auto-pin frequently used tools. Result: fewer input tokens and better selection.',
    tags: ['Toolbox', 'Tool search']
  },
  {
    id: 'azure-ai-apps-agents-fc-183',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Azure AI Search tool: which settings shape retrieval, and what are their defaults?',
    hint: 'Type, count, filter.',
    back: '<strong>query_type</strong>: simple, vector, semantic, vector_simple_hybrid or <strong>vector_semantic_hybrid</strong> (default). <strong>top_k</strong>: number of documents returned, default <strong>5</strong>. <strong>filter</strong>: an OData filter applied to <strong>every</strong> query the agent makes, for example category eq \'climbing\'. The index is reached through a project connection, keyless via managed identity or with a key.',
    tags: ['Azure AI Search tool', 'Retrieval']
  },
  {
    id: 'azure-ai-apps-agents-fc-184',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What must an index contain for the Azure AI Search tool to ground an agent with clickable citations?',
    hint: 'Searchable, vector, content, link.',
    back: 'Searchable and retrievable <strong>Edm.String</strong> text fields, searchable <strong>Collection(Edm.Single)</strong> vector fields for vector or hybrid query types, at least one <strong>retrievable content field</strong> to cite, and a <strong>retrievable field holding the source URL</strong> (optionally a title) so url_citation annotations carry a link. Semantic query types also need a semantic configuration on the index.',
    tags: ['Azure AI Search tool', 'Citations']
  },
  {
    id: 'azure-ai-apps-agents-fc-185',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does an app show the sources an agent used in its answer?',
    hint: 'Look beside the text, not inside it.',
    back: 'Knowledge tools attach <strong>annotations</strong> to the output text, typically <strong>url_citation</strong> items with the source URL, title and the start and end positions of the cited span. The app reads these annotations and renders them as links or footnotes. Do not rely on the model typing URLs into the prose, which can produce broken or invented links.',
    tags: ['Citations', 'Annotations']
  },
  {
    id: 'azure-ai-apps-agents-fc-186',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does the SharePoint tool decide what an agent may read?',
    hint: 'Whose identity is used?',
    back: 'It uses <strong>identity passthrough (on-behalf-of)</strong>: retrieval runs with the <strong>signed-in user\'s</strong> Microsoft Entra identity, so results respect that user\'s existing SharePoint permissions with no copy of content or custom ACL sync. It therefore needs an interactive user context, such as Teams or an app with user sign-in, rather than an unattended app-only call.',
    tags: ['SharePoint tool', 'Identity passthrough']
  },
  {
    id: 'azure-ai-apps-agents-fc-187',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'When should a Foundry agent use the Fabric data agent tool?',
    hint: 'Numbers in a lakehouse.',
    back: 'When questions need <strong>structured, analytical answers over Microsoft Fabric data</strong> (lakehouse, warehouse, semantic model): totals, trends, thresholds by region or week. The tool connects to a <strong>Fabric data agent</strong> that turns natural language into queries and returns grounded results under Fabric\'s security, using the user\'s identity. Text search tools are poor at aggregations, and copying data out breaks governance.',
    tags: ['Fabric data agent', 'Structured data']
  },
  {
    id: 'azure-ai-apps-agents-fc-188',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Browser automation tool vs computer use tool: what can each operate, and who executes the actions?',
    hint: 'Managed browser vs your own machine.',
    back: '<strong>Browser automation</strong>: drives <strong>web pages</strong> (navigate, fill forms, read results) in a <strong>managed Playwright browser</strong> the service runs for you. <strong>Computer use</strong>: the model looks at <strong>screenshots</strong> and proposes clicks and keystrokes that <strong>your code executes</strong> in an environment you host, so it can operate desktop apps; you own the sandbox, its isolation and any human oversight.',
    tags: ['Browser automation', 'Computer use']
  },
  {
    id: 'azure-ai-apps-agents-fc-189',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How is agent memory partitioned per user, and what are the scope limits?',
    hint: 'A placeholder resolves the caller.',
    back: 'Memories live in a <strong>scope</strong> inside a memory store. With the memory search tool, set scope to <strong>{{$userId}}</strong> so the service resolves it from the authenticated caller; with low-level memory APIs you must set scope explicitly on every request. Preview quotas: <strong>100 scopes per store</strong> and <strong>10,000 memories per scope</strong>, with search and update limited to 1,000 requests per minute each.',
    tags: ['Memory', 'Scope']
  },
  {
    id: 'azure-ai-apps-agents-fc-190',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How can agent memory be poisoned, and how do you defend it?',
    hint: 'What gets remembered can steer later turns.',
    back: 'Because an LLM extracts and consolidates memories from conversations, a user or injected content can plant false or malicious "facts" that influence later sessions. Defenses: screen content entering and leaving memory with <strong>Azure AI Content Safety prompt shields</strong>, keep memories <strong>scoped per user</strong>, give users and admins <strong>item-level review and delete</strong>, and include memory in <strong>adversarial testing</strong>.',
    tags: ['Memory', 'Security']
  },
  {
    id: 'azure-ai-apps-agents-fc-191',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What prerequisites and restrictions apply to memory in Foundry Agent Service during preview?',
    hint: 'Two model deployments, one network gap.',
    back: 'Memory needs compatible <strong>Azure OpenAI chat and embedding model deployments</strong>, which are also what you pay for. <strong>Virtual network integration is not supported</strong> for memory stores, it is available only in listed regions, and some store options, such as procedural memory and default TTL, are set when the store is created. Pricing and behavior may change before general availability.',
    tags: ['Memory', 'Limits']
  },
  {
    id: 'azure-ai-apps-agents-fc-192',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which controls manage the lifecycle of individual memories?',
    hint: 'Per item, per store, on request.',
    back: '<strong>Item-level operations</strong> to create, read, update, list and delete single memory records; a <strong>store-level default TTL</strong> in seconds for newly created memories; and <strong>direct remember-or-forget</strong> behavior for when a user explicitly asks the agent to remember or forget something. Together they support privacy requests without wiping a user\'s other memories.',
    tags: ['Memory', 'Data lifecycle']
  },
  {
    id: 'azure-ai-apps-agents-fc-193',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How should a tool shape the data it returns to an agent?',
    hint: 'Everything returned is prompt.',
    back: 'Tool output lands in the model\'s context, so return <strong>only the fields the agent needs</strong>, in a compact structure, with <strong>filter and pagination parameters</strong> for large result sets and clear error messages the model can act on. Huge payloads cost tokens, slow responses, crowd out conversation history and can exceed the context window.',
    tags: ['Tool design', 'Context window']
  },
  {
    id: 'azure-ai-apps-agents-fc-194',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Why must tool results be treated as untrusted input?',
    hint: 'Data can carry instructions.',
    back: 'Web pages, documents, emails, API responses and even MCP tool descriptions can contain text crafted to redirect the agent (<strong>indirect prompt injection</strong>). Mitigate with guardrails on the <strong>tool response</strong> intervention point (prompt shields for indirect attacks), least-privilege tools, <strong>approval for write actions</strong>, allow-listed tools, and instructions that tell the model tool output is data, not commands.',
    tags: ['Indirect prompt injection', 'Agent security']
  },
  {
    id: 'azure-ai-apps-agents-fc-195',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does the OpenAPI tool need from a definition, and which authentication modes does it support?',
    hint: 'Names for functions; three ways to sign in.',
    back: 'An <strong>OpenAPI 3.x</strong> definition in which every operation has a unique <strong>operationId</strong>, which becomes the function name the model calls, plus clear summaries and parameter descriptions. Authentication: <strong>anonymous</strong>, <strong>API key</strong> held in a project connection, or <strong>managed identity</strong> (Microsoft Entra ID) for services that accept Entra tokens. Calls execute server side.',
    tags: ['OpenAPI tool', 'Authentication']
  },
  {
    id: 'azure-ai-apps-agents-fc-196',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Hosted agents: how does conversation state differ between the Responses and Invocations protocols?',
    hint: 'Who keeps the history?',
    back: '<strong>Responses</strong>: the <strong>conversation ID</strong> is primary and the platform <strong>manages history</strong>, streaming and background lifecycle; any OpenAI-compatible client works. <strong>Invocations</strong>: arbitrary JSON in and out for webhooks, batch or custom protocols; the <strong>session ID</strong> is primary and <strong>your code manages state</strong> (session filesystem, state store or your own database). A hosted agent can expose both.',
    tags: ['Hosted agents', 'Protocols']
  },
  {
    id: 'azure-ai-apps-agents-fc-197',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What state persists for a hosted agent session, and for how long?',
    hint: 'Home directory, files, idle timer.',
    back: 'Each session gets a VM-isolated sandbox with a persistent <strong>$HOME</strong> and <strong>/files</strong>. After the <strong>idle timeout</strong> (configurable 2-60 minutes, default 15) compute is released and state is saved, then restored when the session resumes; sessions are deleted after <strong>30 days</strong> of inactivity. For app data beyond that, use the durable key-value <strong>state store</strong>, whose items age out after 30 idle days by default.',
    tags: ['Hosted agents', 'Sessions']
  },
  {
    id: 'azure-ai-apps-agents-fc-198',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Per-user context such as name, locale or account tier: instructions or input?',
    hint: 'Instructions are shared by everyone who uses the version.',
    back: 'Keep agent <strong>instructions</strong> for stable, shared behavior, because they belong to an immutable agent version used by everyone. Pass <strong>per-user or per-request context</strong> in the request input (or retrieve it through a tool or memory), never by editing instructions per user. This avoids leaking one user\'s data to another and version sprawl.',
    tags: ['Agent instructions', 'Context']
  },
  {
    id: 'azure-ai-apps-agents-fc-199',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'MCP tool or OpenAPI tool for connecting an agent to an external service?',
    hint: 'Who publishes what?',
    back: 'Use the <strong>MCP tool</strong> when the provider offers an <strong>MCP server</strong>: tools are discovered at runtime and can be restricted with allowed_tools and gated with approval. Use the <strong>OpenAPI tool</strong> when you have a <strong>REST API with an OpenAPI 3 definition</strong>: operations become functions with fixed schemas. Either can live in a toolbox for shared governance; treat third-party MCP servers as untrusted.',
    tags: ['MCP tool', 'OpenAPI tool']
  },
  {
    id: 'azure-ai-apps-agents-fc-200',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What belongs in agent instructions and what belongs in a knowledge tool?',
    hint: 'How to behave vs what is true.',
    back: '<strong>Instructions</strong>: short, stable guidance on role, scope, tool rules, tone and format. <strong>Knowledge tools</strong> (Foundry IQ, Azure AI Search, file search, SharePoint): policies, product facts, prices and anything that changes or is large. Stuffing facts into instructions bloats every request, needs a new agent version for each change, and cannot be cited; retrieval keeps facts fresh and attributable.',
    tags: ['Agent instructions', 'Knowledge']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_8;
