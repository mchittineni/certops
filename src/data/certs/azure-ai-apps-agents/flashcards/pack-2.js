export const AZURE_AI_APPS_AGENTS_FLASHCARDS_2 = [
  {
    id: 'azure-ai-apps-agents-fc-26',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Foundry resource vs Foundry project: what belongs at each level?',
    hint: 'One is the boundary, the other is the workspace.',
    back: 'The <strong>Foundry resource</strong> (Microsoft.CognitiveServices/accounts, kind AIServices) is the administrative, security, networking and billing boundary: model deployments, quota, private endpoints, customer-managed keys and shared connections live here. A <strong>Foundry project</strong> is a child workspace for one team or use case: its agents, files, evaluations, traces and project-scoped connections, with its own managed identity and role assignments. One resource can host many projects that share its deployments.',
    tags: ['Foundry resource', 'Foundry projects']
  },
  {
    id: 'azure-ai-apps-agents-fc-27',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Basic vs standard agent setup in Foundry Agent Service: what is the difference?',
    hint: 'Whose storage holds the conversations?',
    back: '<strong>Basic setup</strong> stores agent state (conversations, files, vector stores) in <strong>Microsoft-managed</strong> multitenant resources: fastest to start, least to operate. <strong>Standard setup</strong> has you <strong>bring your own</strong> Azure Cosmos DB for NoSQL, Azure Storage and Azure AI Search, so all agent data at rest stays in your tenant under your keys, network rules and auditing. Choose standard for compliance, data sovereignty, project-level isolation or private networking.',
    tags: ['Standard agent setup', 'Foundry Agent Service']
  },
  {
    id: 'azure-ai-apps-agents-fc-28',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'In the standard agent setup, what does each bring-your-own resource store?',
    hint: 'Three resources, three kinds of agent data.',
    back: '<strong>Azure Cosmos DB for NoSQL</strong>: thread storage, meaning conversations, messages and agent definitions (needs at least <strong>3,000 RU/s</strong> total throughput). <strong>Azure Storage</strong>: files uploaded by developers and end users, plus intermediate chunks. <strong>Azure AI Search</strong>: the vector stores the agent creates for file search. The project managed identity needs data-plane roles on each, and developers need Foundry User on the project.',
    tags: ['Standard agent setup', 'Cosmos DB', 'Azure AI Search']
  },
  {
    id: 'azure-ai-apps-agents-fc-29',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Can you point an existing Foundry project at a different Cosmos DB or search service for agent state later?',
    hint: 'Capability settings are chosen once.',
    back: '<strong>No.</strong> Capability settings (the resource IDs for thread, file and vector storage) are set on the Foundry account as defaults and optionally overridden per project at creation. The connections they create are immutable while in use, and capability settings <strong>cannot be updated on an existing project</strong>. To use different resources, create a new project with the desired settings and migrate the agents. Plan storage choices before the first project.',
    tags: ['Standard agent setup', 'Capability settings']
  },
  {
    id: 'azure-ai-apps-agents-fc-30',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does private networking for Foundry Agent Service require?',
    hint: 'Setup type, network and endpoints.',
    back: 'Use the <strong>standard agent setup</strong> with a <strong>customer-provided virtual network</strong>: a <strong>delegated subnet</strong> for agent network injection so agent egress, including tool calls, follows your routing, plus <strong>private endpoints</strong> for the Foundry resource and the bring-your-own Cosmos DB, Storage and AI Search, with public network access disabled. Keep the resources and network in the same region, and provide private DNS zones so names resolve to the private endpoints.',
    tags: ['Private networking', 'Standard agent setup']
  },
  {
    id: 'azure-ai-apps-agents-fc-31',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Global, Data Zone, or Standard: where is inference processed for each deployment type family?',
    hint: 'Data at rest stays in the geography either way.',
    back: '<strong>Global</strong> types (Global Standard, Global Provisioned, Global Batch) may process prompts in <strong>any Azure region</strong>. <strong>Data Zone</strong> types keep processing inside a Microsoft-defined zone: <strong>US, EU or APAC</strong>. <strong>Standard</strong> and <strong>Regional Provisioned</strong> keep processing within the <strong>customer-chosen Azure geography</strong>. Wider scope brings higher default quota and earlier model availability; narrower scope brings stronger residency guarantees.',
    tags: ['Deployment types', 'Data residency']
  },
  {
    id: 'azure-ai-apps-agents-fc-32',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What are the key properties of Global Batch and Data Zone Batch deployments?',
    hint: 'Cheaper, slower, and on its own quota.',
    back: 'Batch deployments take requests as a <strong>JSONL file</strong>, process them asynchronously with a <strong>24-hour target turnaround</strong> (no real-time SLA) at about <strong>50 percent</strong> of the Global Standard price, and draw on a <strong>separate enqueued-token quota</strong> so online workloads are not disrupted. Use them for bulk summarization, classification, extraction or content generation where nobody waits on a single answer.',
    tags: ['Batch', 'Deployment types']
  },
  {
    id: 'azure-ai-apps-agents-fc-33',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'When is provisioned throughput worth it over Global Standard?',
    hint: 'Predictability costs a reservation.',
    back: '<strong>Provisioned</strong> deployments reserve model capacity measured in <strong>provisioned throughput units (PTUs)</strong>, giving predictable throughput and <strong>low latency variance</strong>. They pay off for steady, high, forecastable volume, or when latency consistency matters more than price. Billing is hourly, with Azure reservations for monthly or yearly discounts. For bursty or unknown traffic, pay-per-token Global Standard is cheaper; when a provisioned deployment is full, requests get 429 unless spillover is set.',
    tags: ['Provisioned throughput', 'PTU']
  },
  {
    id: 'azure-ai-apps-agents-fc-34',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does spillover do for a provisioned deployment?',
    hint: 'Where do requests go when the reservation is full?',
    back: '<strong>Spillover</strong> designates a <strong>standard (pay-per-token) deployment</strong> of the same model to receive requests that a provisioned deployment would otherwise reject with <strong>HTTP 429</strong> because its capacity is used up. The baseline stays on reserved PTUs for consistent latency, while short spikes are served at standard prices instead of failing, and the application keeps calling one deployment with no retry logic of its own.',
    tags: ['Spillover', 'Provisioned throughput']
  },
  {
    id: 'azure-ai-apps-agents-fc-35',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What is the Developer deployment type for, and what are its limits?',
    hint: 'Built for trying out a fine-tuned model.',
    back: 'The <strong>Developer</strong> type (SKU DeveloperTier) hosts a <strong>fine-tuned model for evaluation</strong> at pay-per-token rates without the hourly hosting fee of a standard fine-tuned deployment. It has <strong>no SLA</strong>, <strong>no data-residency guarantee</strong> and a fixed <strong>24-hour lifetime</strong>, after which it is deleted automatically. Use it to test a candidate model; promote it to Standard, Global Standard or provisioned for production.',
    tags: ['Developer deployment', 'Fine-tuning']
  },
  {
    id: 'azure-ai-apps-agents-fc-36',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Serverless API vs managed compute: how do the two Foundry deployment options differ?',
    hint: 'Per token versus per GPU hour.',
    back: '<strong>Serverless API</strong> is the preferred option for Foundry Models (Azure OpenAI and supported partner models): pay per token or PTU, choose global, data zone or regional processing, built-in content filtering, no infrastructure. <strong>Managed compute</strong> hosts <strong>open-source, partner and custom-weight</strong> models on dedicated GPUs that Foundry sizes and patches, billed <strong>hourly per accelerator</strong> with autoscale and scale-to-zero. Use managed compute only when the model is not offered serverless.',
    tags: ['Deployment options', 'Managed compute']
  },
  {
    id: 'azure-ai-apps-agents-fc-37',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What are the three model version upgrade options on a deployment?',
    hint: 'Always current, current at retirement, or never.',
    back: '<strong>Upgrade once a new default version is available</strong>: moves automatically whenever Microsoft changes the default. <strong>Upgrade once the current version expires</strong>: stays pinned until the version retires, then moves to the default. <strong>No automatic upgrade</strong>: stays pinned, and the deployment <strong>stops serving</strong> when the version retires. Regulated apps usually pin and revalidate, using the expiry option as a safety net.',
    tags: ['Model versions', 'Deployment configuration']
  },
  {
    id: 'azure-ai-apps-agents-fc-38',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How is quota scoped for Foundry model deployments, and how does sku.capacity relate to TPM?',
    hint: 'Four dimensions define one quota pool.',
    back: 'Quota is granted <strong>per subscription, per region, per model and per deployment type</strong> in tokens per minute (TPM). Each deployment takes a slice as its rate limit; the slices cannot exceed the pool. For standard types, <strong>sku.capacity is in units of 1,000 TPM</strong> (capacity 50 means 50,000 TPM), and a requests-per-minute limit is derived proportionally. Separate pools exist for Global Standard, Data Zone Standard, Standard and batch.',
    tags: ['Quota', 'Rate limits']
  },
  {
    id: 'azure-ai-apps-agents-fc-39',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you keep a Foundry-based app serving through a regional outage?',
    hint: 'Global routing does not make the entry point global.',
    back: 'Requests enter through the <strong>region of the Foundry resource</strong>, so an incident there interrupts even Global Standard deployments. Deploy <strong>Foundry resources with the same deployments in two or more regions</strong> and put a gateway, typically <strong>Azure API Management</strong> with a backend pool and circuit breaker, in front, so clients keep one URL while traffic fails over. Replicate agents, connections and indexes the app depends on, and test failover.',
    tags: ['High availability', 'API Management']
  },
  {
    id: 'azure-ai-apps-agents-fc-40',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which Azure API Management AI gateway capabilities matter for model workloads?',
    hint: 'Budgets, metrics, caching, and routing.',
    back: '<strong>Token limit policy</strong>: enforce tokens-per-minute or quota budgets per consumer. <strong>Token metric policy</strong>: emit token usage per app or subscription to Azure Monitor. <strong>Semantic caching</strong>: answer similar prompts from a cache. <strong>Backend pools with load balancing and circuit breaker</strong>: spread and fail over across deployments or regions. Plus managed identity authentication to the backend, so client apps never hold model keys.',
    tags: ['API Management', 'AI gateway']
  },
  {
    id: 'azure-ai-apps-agents-fc-41',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Foundry project vs hub-based project: which should new agent work use?',
    hint: 'One is the current architecture, the other rides on Azure Machine Learning.',
    back: 'Use a <strong>Foundry project</strong> on a Foundry resource for new work: it is the recommended type and the target of current Foundry Agent Service, Foundry IQ and Foundry SDK features, with no hub required. <strong>Hub-based projects</strong> sit on an Azure Machine Learning hub and remain for workloads that depend on Azure Machine Learning features such as prompt flow. Migrate hub workloads when those dependencies go away.',
    tags: ['Foundry projects', 'Hub-based projects']
  },
  {
    id: 'azure-ai-apps-agents-fc-42',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What happens when you upgrade an Azure OpenAI resource to a Foundry resource?',
    hint: 'What the clients see versus what you gain.',
    back: 'The upgrade is in place: the <strong>endpoint, API keys, existing deployments and state are preserved</strong>, so client applications keep working unchanged. You gain <strong>Foundry projects</strong>, Foundry Agent Service, evaluations and the <strong>full Foundry Models catalog</strong> beyond Azure OpenAI models. An un-upgraded Azure OpenAI resource shows only Azure OpenAI models for deployment.',
    tags: ['Foundry resource', 'Azure OpenAI']
  },
  {
    id: 'azure-ai-apps-agents-fc-43',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Prompt agent, workflow, or hosted agent: which kind of Foundry agent fits which need?',
    hint: 'Configuration, orchestration, or your own code.',
    back: '<strong>Prompt agent</strong>: defined entirely by model, instructions and tools in the portal or SDK; no code to host. <strong>Workflow</strong>: declarative orchestration of several agents and steps, with branching and human-in-the-loop, visible in the portal. <strong>Hosted agent</strong>: your own code (Agent Framework, LangGraph or custom) packaged as a container and run by Agent Service with its own identity, endpoint, scaling and tracing. Start with prompt agents; move up only when needed.',
    tags: ['Foundry Agent Service', 'Hosted agents', 'Workflows']
  },
  {
    id: 'azure-ai-apps-agents-fc-44',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do agent versions work in Foundry Agent Service?',
    hint: 'Snapshots, not edits.',
    back: 'Every change to an agent\'s model, instructions or tools creates a new <strong>immutable agent version</strong>. Versions can be run, evaluated and compared side by side, and an endpoint or published deployment serves <strong>one version at a time with 100 percent of traffic</strong>; there is no built-in traffic splitting. Roll back by pointing the deployment at the previous version rather than editing the current one.',
    tags: ['Agent versions', 'Foundry Agent Service']
  },
  {
    id: 'azure-ai-apps-agents-fc-45',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What changes about identity when an agent is published, and what breaks if you ignore it?',
    hint: 'Permissions do not follow the agent.',
    back: 'Unpublished agents authenticate tools with the <strong>project\'s shared agent identity</strong>. Publishing creates a separate resource with its own stable endpoint and a <strong>distinct Microsoft Entra agent identity</strong>. Role assignments <strong>do not transfer</strong>, so tools that use agent identity authentication fail with authorization errors until you grant the new identity the same roles on downstream resources. Callers are authorized separately, through RBAC on the published resource.',
    tags: ['Agent identity', 'Publishing']
  },
  {
    id: 'azure-ai-apps-agents-fc-46',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Foundry User, Foundry Project Manager, Foundry Account Owner, Foundry Agent Consumer: who gets which role?',
    hint: 'Formerly the Azure AI roles; separate building, managing and consuming.',
    back: '<strong>Foundry User</strong> (formerly Azure AI User): developers building and testing in a project, and the project managed identity. <strong>Foundry Project Manager</strong>: team leads who create projects, publish agents and assign Foundry User. <strong>Foundry Account Owner</strong>: manages the resource, models and connections but cannot build in projects. <strong>Foundry Agent Consumer</strong>: callers who only interact with agent endpoints. Avoid Cognitive Services roles for Foundry work.',
    tags: ['RBAC', 'Foundry roles']
  },
  {
    id: 'azure-ai-apps-agents-fc-47',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How should a Foundry agent hold an API key for a third-party service?',
    hint: 'Never where the model or the repository can see it.',
    back: 'Store it in a <strong>connection</strong> (project or resource level) that the tool references, and back connection secrets with <strong>Azure Key Vault</strong> linked to the Foundry resource. The key never appears in code, environment variables, instructions or conversation history, and rotation happens in one place without redeploying the agent. Prefer managed identity or OAuth over keys wherever the target service supports it.',
    tags: ['Connections', 'Key Vault']
  },
  {
    id: 'azure-ai-apps-agents-fc-48',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What happens to an idle fine-tuned model deployment?',
    hint: 'The model survives; the deployment does not.',
    back: 'A <strong>customized (fine-tuned) model deployment</strong> is billed an <strong>hourly hosting fee</strong> on top of tokens. If it receives no calls for <strong>more than 15 days</strong>, it is <strong>deleted automatically</strong>. The fine-tuned model itself is kept and can be redeployed at any time. Delete unused deployments yourself to stop hosting charges sooner.',
    tags: ['Fine-tuning', 'Cost']
  },
  {
    id: 'azure-ai-apps-agents-fc-49',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you stop teams creating a particular model deployment type across many subscriptions?',
    hint: 'The deployment type is a SKU on a child resource.',
    back: 'Assign an <strong>Azure Policy</strong> with a <strong>deny</strong> effect at a management group: match resources of type <strong>Microsoft.CognitiveServices/accounts/deployments</strong> where <strong>sku.name</strong> equals the SKU to block, such as GlobalStandard or GlobalBatch. Allowed-locations policies are not enough, because a global deployment on a resource in an allowed region can still be processed anywhere.',
    tags: ['Azure Policy', 'Governance']
  },
  {
    id: 'azure-ai-apps-agents-fc-50',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which roles must a Foundry project managed identity hold to query an existing Azure AI Search index keylessly?',
    hint: 'Control plane and data plane are different roles.',
    back: 'Querying documents is a <strong>data-plane</strong> action, so the identity needs <strong>Search Index Data Reader</strong> (or Search Index Data Contributor to write). <strong>Search Service Contributor</strong> manages the service, indexes and indexers but does <strong>not</strong> grant document reads. The search service must allow role-based access (RBAC or both) rather than keys only, and the project connection must use Microsoft Entra ID authentication.',
    tags: ['Azure AI Search', 'RBAC', 'Connections']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_2;
