export const AZURE_AI_APPS_AGENTS_FLASHCARDS_5 = [
  {
    id: 'azure-ai-apps-agents-fc-101',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which built-in risk and safety evaluators does Foundry provide?',
    hint: 'Four harm categories plus several security and integrity risks.',
    back: 'Content harms: <strong>hate and unfairness, sexual, violence, self-harm</strong>. Plus <strong>protected material</strong> (copyrighted text), <strong>indirect attack</strong> (cross-prompt injection effects), <strong>code vulnerability</strong> (insecure generated code) and <strong>ungrounded attributes</strong> (unsupported inferences about people, such as emotional state). They run on a Microsoft-hosted safety evaluation service, so no judge deployment of your own is needed, and project region support matters.',
    tags: ['Safety evaluation', 'Evaluators']
  },
  {
    id: 'azure-ai-apps-agents-fc-102',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How are content harm evaluator scores reported and aggregated?',
    hint: 'A 0 to 7 scale and a rate, not an average.',
    back: 'Each response gets a <strong>severity score from 0 to 7</strong> with a label: very low (0-1), low (2-3), medium (4-5), high (6-7), plus a reason. Across a dataset, results are summarised as a <strong>defect rate</strong>: the percentage of responses above a threshold, by default 3. Averages hide rare severe outputs, so release criteria should be written as maximum defect rates per category.',
    tags: ['Safety evaluation', 'Defect rate']
  },
  {
    id: 'azure-ai-apps-agents-fc-103',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does the indirect attack evaluator measure, and what does it need as input?',
    hint: 'Did hidden instructions in the context change the answer?',
    back: 'It checks whether a response shows the <strong>effects of cross-prompt injection</strong> planted in retrieved or tool-supplied content, reporting categories such as <strong>manipulated content</strong>, <strong>intrusion</strong> and <strong>information gathering</strong>. It needs the query, the context containing the potential attack, and the response. Pair it with adversarially seeded test data, for example from the AI red teaming agent, and with prompt shields for indirect attacks at runtime.',
    tags: ['Indirect attack', 'Safety evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-104',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Code-based vs prompt-based custom evaluators: when do you use each?',
    hint: 'Deterministic rule or judgement call?',
    back: '<strong>Code-based</strong> evaluators are Python functions or classes that compute a score deterministically: regex checks, JSON schema validation, length limits, required fields. <strong>Prompt-based</strong> evaluators use an LLM judge with your rubric for criteria that need judgement, such as whether a compliant warning is present or tone matches a brand. Both run beside built-in evaluators in the same evaluation and report per-row results.',
    tags: ['Custom evaluators', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-105',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Local evaluation vs cloud evaluation in Foundry: what is the difference?',
    hint: 'Where it runs and where the record lives.',
    back: '<strong>Local evaluation</strong> runs evaluators on your machine with the evaluation SDK: quick for small samples and prompt iteration. <strong>Cloud evaluation</strong> submits the dataset and evaluator configuration to the <strong>Foundry project</strong>, which runs it remotely at scale and stores the run, parameters and per-row results in the project for team review, comparison and audit. Use cloud runs for large datasets and CI pipelines.',
    tags: ['Cloud evaluation', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-106',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you explain an evaluation score to a non-technical reviewer?',
    hint: 'The judge writes down its reasoning.',
    back: 'AI-assisted and safety evaluators return a <strong>reason</strong> with every score (for example, which claim the context did not support, or why content was rated medium violence). The Foundry portal shows score, label and reason per row, and you can filter to failing rows. Pair reasons with the trace of the run so reviewers can see both the judgement and the evidence behind the response.',
    tags: ['Explanations', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-107',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What are the four stages of Microsoft\'s responsible AI practice for generative AI?',
    hint: 'Find it, size it, reduce it, run it.',
    back: '<strong>Identify</strong> (map) potential harms through red teaming and stress testing. <strong>Measure</strong> how often and how severely they occur with evaluators and test datasets. <strong>Mitigate</strong> them in layers: model choice, safety system (guardrails), system message and grounding, user experience. <strong>Operate</strong>: deploy with monitoring, incident response and feedback loops, and keep measuring as the system changes.',
    tags: ['Responsible AI', 'Governance']
  },
  {
    id: 'azure-ai-apps-agents-fc-108',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What are the layers of mitigation for a generative AI application?',
    hint: 'Four layers from the model outward.',
    back: '<strong>Model</strong>: pick a model suited to the task and its safety profile. <strong>Safety system</strong>: guardrails and content filters, prompt shields, abuse monitoring. <strong>System message and grounding</strong>: clear instructions, scope limits, retrieval of trusted data. <strong>User experience</strong>: disclose AI use, show citations, limit inputs and outputs, and add human review for consequential actions. Defence in depth: no single layer is sufficient.',
    tags: ['Responsible AI', 'Mitigations']
  },
  {
    id: 'azure-ai-apps-agents-fc-109',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does Foundry tracing record for an agent run, and where is it stored?',
    hint: 'OpenTelemetry spans in one familiar resource.',
    back: 'Tracing emits <strong>OpenTelemetry</strong> spans following the gen AI semantic conventions: one trace per run with child spans for <strong>model calls, tool calls, retrieval and agent steps</strong>, including durations, token usage, models and errors. Traces are stored in the <strong>Application Insights</strong> resource connected to the project and viewed in the Foundry portal or Azure Monitor. Frameworks such as Agent Framework, LangChain and the OpenAI Agents SDK are supported.',
    tags: ['Tracing', 'OpenTelemetry']
  },
  {
    id: 'azure-ai-apps-agents-fc-110',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Does gen AI tracing capture prompt and response text by default?',
    hint: 'Metadata yes, content only on request.',
    back: '<strong>No.</strong> By default spans carry metadata such as timings, token counts, model and tool names. <strong>Message content</strong> (prompts, completions, tool arguments and results) is recorded only when content recording is <strong>explicitly enabled</strong>, typically through an environment variable in the tracing configuration. Enable it in development or test with synthetic data; in production, leave it off where personal or regulated data could appear, or apply redaction first.',
    tags: ['Tracing', 'Privacy', 'Content recording']
  },
  {
    id: 'azure-ai-apps-agents-fc-111',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How does Foundry mark images generated by its image models as AI-made?',
    hint: 'A signed manifest following an open standard.',
    back: 'Generated images carry <strong>Content Credentials</strong>, a cryptographically signed manifest based on the <strong>C2PA</strong> standard that records the image\'s AI origin and the issuing service. Anyone can verify it with C2PA-compatible tools, and tampering is detectable. It is metadata, not a visible watermark; add visible disclosure in the user experience where regulations require it.',
    tags: ['Provenance', 'Content Credentials']
  },
  {
    id: 'azure-ai-apps-agents-fc-112',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What provenance metadata should a RAG or agent application store with each answer?',
    hint: 'Enough to reconstruct why the answer said what it said.',
    back: 'Store the <strong>citation annotations</strong> (file IDs, document URLs, quoted spans) the response returned, the <strong>agent version</strong> and <strong>model deployment and version</strong> used, the <strong>trace or run ID</strong> linking to the full execution, and relevant timestamps and user identifiers. Together they let auditors verify the answer against the exact sources and configuration in force at the time.',
    tags: ['Provenance', 'Auditing', 'Citations']
  },
  {
    id: 'azure-ai-apps-agents-fc-113',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Why pass user security context with requests from an AI application?',
    hint: 'The app\'s identity hides who actually typed the prompt.',
    back: 'Apps usually call models with <strong>one managed identity</strong>, so security tools see only the app. Passing <strong>user security context</strong> (end-user ID, source IP, application name) with each request lets <strong>Microsoft Defender for Cloud</strong> threat protection for AI include that detail in alerts such as jailbreak attempts or data exposure, so SOC analysts can attribute, block or investigate the right user. Hash or pseudonymise user IDs to limit personal data.',
    tags: ['Defender for Cloud', 'Auditing']
  },
  {
    id: 'azure-ai-apps-agents-fc-114',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does the Microsoft Purview integration add for Foundry apps?',
    hint: 'The compliance team\'s existing tools, applied to AI chats.',
    back: 'Prompts and responses from Foundry-based apps flow into <strong>Microsoft Purview</strong>, where compliance teams can use <strong>Audit</strong>, <strong>eDiscovery</strong>, <strong>retention policies and legal holds</strong>, communication compliance and data security posture insights for AI, including sensitive information detection. It gives records management and legal discovery that engineering telemetry such as Application Insights does not provide.',
    tags: ['Microsoft Purview', 'Compliance']
  },
  {
    id: 'azure-ai-apps-agents-fc-115',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Activity log, resource logs, or traces: which answers which audit question?',
    hint: 'Who changed it, who called it, what the agent did.',
    back: '<strong>Azure Activity log</strong>: who changed the resource and when (control-plane writes such as guardrail, deployment or network changes). <strong>Resource logs</strong> via a diagnostic setting: data-plane requests and audit events, such as inference calls with caller, status and duration. <strong>Traces</strong> in Application Insights: the step-by-step execution of an agent run, including tool calls. Retain each for as long as policy requires.',
    tags: ['Auditing', 'Activity log', 'Tracing']
  },
  {
    id: 'azure-ai-apps-agents-fc-116',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which mechanisms put a human approval step in front of agent actions in Foundry?',
    hint: 'One per tool, one per workflow.',
    back: 'For MCP tools, set <strong>require_approval</strong> (always, or for specific tool names): the run pauses with an approval request and resumes only when your app submits approve or reject. In <strong>workflows</strong>, add a <strong>human-in-the-loop</strong> step that pauses the process until a person responds. For function calls, your client already executes the action, so it can gate execution on its own approval logic. Log each decision with the run ID.',
    tags: ['Approval workflows', 'Human in the loop']
  },
  {
    id: 'azure-ai-apps-agents-fc-117',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Human-in-the-loop, human-on-the-loop, autonomous: how do you choose an oversight mode?',
    hint: 'Match oversight to the cost of a mistake.',
    back: '<strong>Human-in-the-loop</strong>: a person approves before the action happens; use for irreversible, high-impact or regulated actions. <strong>Human-on-the-loop</strong>: the agent acts alone while people monitor dashboards and alerts and can intervene or stop it; use for frequent, low-impact actions. <strong>Autonomous</strong>: no routine supervision; only for read-only or trivially reversible tasks. One agent can mix modes per tool.',
    tags: ['Oversight modes', 'Agent governance']
  },
  {
    id: 'azure-ai-apps-agents-fc-118',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What tool-access controls limit what a Foundry agent can do?',
    hint: 'Expose less, grant less, split powers.',
    back: 'Attach only the tools the agent needs and, for MCP servers, set <strong>allowed_tools</strong> so unused tools are invisible. Require <strong>approval</strong> for risky tools. Give the agent identity <strong>least-privilege roles</strong> on downstream resources, never broad contributor rights or keys. <strong>Separate agents</strong> by privilege so public-facing agents hold no write access. Add <strong>guardrails</strong> on tool call and tool response points, and egress controls for hosted agents.',
    tags: ['Tool access control', 'Agent governance']
  },
  {
    id: 'azure-ai-apps-agents-fc-119',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does Microsoft Entra Agent ID give an organisation running many agents?',
    hint: 'Agents become first-class identities.',
    back: 'Agents receive their own <strong>identities in Microsoft Entra ID</strong>, distinct from users and shared app identities. Administrators get an <strong>inventory</strong> of agents, can review and scope their permissions, apply <strong>Conditional Access</strong> and lifecycle policies, see sign-in and audit activity, and <strong>disable</strong> a misbehaving agent centrally. Published Foundry agents get a dedicated agent identity for their outbound calls.',
    tags: ['Entra Agent ID', 'Agent identity']
  },
  {
    id: 'azure-ai-apps-agents-fc-120',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does the task adherence guardrail risk detect, and where do you apply it?',
    hint: 'Doing something the user did not ask for.',
    back: '<strong>Task adherence</strong> (preview) flags when an agent\'s planned actions or tool use are <strong>misaligned with the user\'s request</strong> or the agent\'s instructions, for example sending an email when asked only to compare prices. Apply it at the <strong>tool call</strong> intervention point to block the action before it runs. It complements approvals and least privilege; it does not replace them.',
    tags: ['Task adherence', 'Agent guardrails']
  },
  {
    id: 'azure-ai-apps-agents-fc-121',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you restrict where a hosted agent can connect outbound?',
    hint: 'Platform-enforced, outside the agent\'s code.',
    back: 'Configure <strong>network egress controls</strong> (preview) in the hosted agent\'s guardrail to allow only approved destinations, and optionally route outbound traffic through a <strong>customer virtual network</strong> where Azure Firewall or network security rules enforce the same allow list. Checks written inside the agent code are not enough, because a prompt injection or compromised dependency can bypass them.',
    tags: ['Hosted agents', 'Egress controls']
  },
  {
    id: 'azure-ai-apps-agents-fc-122',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does Defender for Cloud threat protection for AI services detect?',
    hint: 'Attacks by people, not quality problems.',
    back: 'It analyses traffic to AI workloads such as Foundry model deployments and raises <strong>security alerts</strong> for threats including <strong>jailbreak attempts</strong>, sensitive data leakage, credential theft or misuse, suspicious access patterns and wallet abuse. Alerts appear in Defender for Cloud and Defender XDR alongside other cloud alerts, enriched with user context when the app supplies it. It complements, and does not replace, guardrails and evaluation.',
    tags: ['Defender for Cloud', 'Threat protection']
  },
  {
    id: 'azure-ai-apps-agents-fc-123',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you keep agent traces for longer than the default retention?',
    hint: 'The data really lives in a workspace.',
    back: 'Workspace-based <strong>Application Insights</strong> stores telemetry in a <strong>Log Analytics workspace</strong>. Raise the workspace\'s retention, or set retention per table (for example the traces and dependencies tables), up to the interactive and long-term limits; long-term retention is cheaper and reached with search jobs. Balance audit requirements against the privacy of any recorded content.',
    tags: ['Retention', 'Tracing']
  },
  {
    id: 'azure-ai-apps-agents-fc-124',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Why are agent instructions alone not an adequate constraint on agent behaviour?',
    hint: 'Instructions ask; controls enforce.',
    back: 'Instructions define <strong>role, scope, refusal behaviour and tool-use rules</strong>, and they matter, but the model follows them probabilistically: prompt injection, ambiguous requests or model error can lead it astray. Back every important rule with an <strong>enforced control</strong>: tool allow lists, least-privilege identities, approvals, guardrails on inputs, tool calls and outputs, and monitoring that detects when behaviour drifts.',
    tags: ['Agent governance', 'Instructions']
  },
  {
    id: 'azure-ai-apps-agents-fc-125',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which evaluator checks for unsupported inferences about people, and when does it matter?',
    hint: 'Guessing someone\'s feelings or traits without evidence.',
    back: 'The <strong>ungrounded attributes</strong> evaluator flags responses that infer <strong>personal attributes</strong>, such as emotional state, demographics or protected characteristics, that the provided context does not support. It matters in summarisation of interviews, support calls or medical notes, where a model might add that a caller seemed angry or a candidate seemed nervous, creating fairness and privacy risk.',
    tags: ['Ungrounded attributes', 'Safety evaluation']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_5;
