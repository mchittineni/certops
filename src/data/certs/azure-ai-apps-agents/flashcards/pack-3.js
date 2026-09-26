export const AZURE_AI_APPS_AGENTS_FLASHCARDS_3 = [
  {
    id: 'azure-ai-apps-agents-fc-51',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How should a GitHub Actions or Azure Pipelines workflow authenticate to deploy Foundry resources?',
    hint: 'Trade a pipeline token, store nothing.',
    back: 'Use <strong>workload identity federation (OpenID Connect)</strong>: add a <strong>federated credential</strong> to a Microsoft Entra app registration or user-assigned managed identity that trusts the repository, branch or environment, then sign in with azure/login (or a workload-identity service connection). The pipeline exchanges its short-lived OIDC token for an Entra token, so <strong>no client secret or certificate is stored</strong>. Scope the identity\'s roles to the resources it deploys.',
    tags: ['CI/CD', 'Workload identity federation']
  },
  {
    id: 'azure-ai-apps-agents-fc-52',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you turn evaluation into a CI/CD quality gate for an agent?',
    hint: 'Same dataset, same evaluators, a threshold, a failing job.',
    back: 'Keep a versioned <strong>test dataset</strong> in the repository. On each pull request, create the candidate agent version and run an <strong>evaluation</strong> (Foundry evaluation GitHub Action, Azure DevOps task or the Foundry SDK) with evaluators such as groundedness, relevance, task adherence and tool call accuracy. Compare scores with <strong>thresholds or the baseline version</strong> and fail the job when they drop, so regressions are blocked before merge.',
    tags: ['CI/CD', 'Evaluation', 'Quality gates']
  },
  {
    id: 'azure-ai-apps-agents-fc-53',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What is the recommended way to promote an agent from dev to test to production projects?',
    hint: 'Definitions belong in the repository.',
    back: 'Treat the agent as code: store its <strong>definition</strong> (model deployment name, instructions, tools, connection references) in source control, parameterise per-environment values, and let a <strong>pipeline create the agent version</strong> in each environment\'s project through the Foundry SDK, REST API or azd. Pair it with IaC for the resource, deployments and connections. Never rebuild agents by hand in the production portal.',
    tags: ['CI/CD', 'Agent promotion']
  },
  {
    id: 'azure-ai-apps-agents-fc-54',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What do azd provision, azd deploy and azd up each do in a Foundry agent template?',
    hint: 'Infrastructure, code, or both.',
    back: '<strong>azd provision</strong> deploys the infrastructure templates (Bicep or Terraform) such as the Foundry resource, project and model deployments. <strong>azd deploy</strong> packages and deploys the services listed in azure.yaml, for example building a hosted agent\'s container image, pushing it to the registry and creating the agent version. <strong>azd up</strong> runs provision then deploy in one command, which suits onboarding and CI.',
    tags: ['Azure Developer CLI', 'CI/CD']
  },
  {
    id: 'azure-ai-apps-agents-fc-55',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Why does a pipeline that deploys models and creates agents usually need two role assignments?',
    hint: 'Control plane versus data plane.',
    back: 'Creating or updating <strong>model deployments</strong> is a <strong>control-plane</strong> action (Microsoft.CognitiveServices/accounts/deployments/write), granted by roles such as Cognitive Services Contributor or Foundry Account Owner on the resource. Creating <strong>agents, files and evaluations</strong> is a <strong>data action</strong> in the project, granted by Foundry User. No single least-privilege built-in role covers both, so assign each at the narrowest scope; Owner-level roles also grant role assignment rights you do not want.',
    tags: ['RBAC', 'CI/CD', 'Least privilege']
  },
  {
    id: 'azure-ai-apps-agents-fc-56',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does the AI red teaming agent do, and what metric does it report?',
    hint: 'Automated adversarial probing built on PyRIT.',
    back: 'The <strong>AI red teaming agent</strong> uses Microsoft\'s open-source <strong>PyRIT</strong> framework to send adversarial prompts across risk categories (violence, hate, sexual, self-harm and more) using <strong>attack strategies</strong> such as encodings, character flips and jailbreak templates at different complexity levels. Each attempt is scored, and the scan reports an <strong>attack success rate (ASR)</strong> per category and strategy. Run it before release and on a schedule, with human review of results.',
    tags: ['AI red teaming agent', 'Safety evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-57',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How should an application respond to HTTP 429 from a Foundry model deployment?',
    hint: 'The response tells you how long to wait.',
    back: 'A 429 means the deployment\'s <strong>tokens-per-minute or requests-per-minute</strong> limit was exceeded for the current window. <strong>Wait for the retry-after (or retry-after-ms) interval</strong> and retry with <strong>exponential backoff and jitter</strong>; the Azure and OpenAI SDKs do this through their max_retries setting. If 429s persist, raise the deployment\'s allocation, request more quota, spread load across deployments or regions, or move steady load to provisioned throughput.',
    tags: ['Rate limits', 'Retry']
  },
  {
    id: 'azure-ai-apps-agents-fc-58',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How does the service decide whether a request fits within a deployment\'s tokens-per-minute limit?',
    hint: 'It cannot know the output length in advance.',
    back: 'On arrival, each request is charged an <strong>estimate</strong> based on its <strong>prompt tokens plus max_tokens</strong> (and best_of where used), and that estimate counts against the per-minute limit before generation begins. An oversized max_tokens therefore throttles a deployment long before real usage reaches the limit. Set max_tokens close to the expected output, and remember a requests-per-minute limit, derived from TPM, applies too.',
    tags: ['Rate limits', 'max_tokens']
  },
  {
    id: 'azure-ai-apps-agents-fc-59',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What conditions must a request meet to benefit from prompt caching?',
    hint: 'Length, identical prefix, recency.',
    back: 'The prompt must be <strong>at least 1,024 tokens</strong> long and share an <strong>identical prefix</strong> with a recent request routed to the same deployment; cache hits grow in 128-token increments beyond the first 1,024. Put static content (system message, tool definitions, examples) <strong>first</strong> and variable content last. Cached tokens appear in usage as cached_tokens and are billed at a discount on standard deployments; no configuration is needed to turn caching on.',
    tags: ['Prompt caching', 'Cost optimization']
  },
  {
    id: 'azure-ai-apps-agents-fc-60',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you tell whether a provisioned deployment is oversized or undersized?',
    hint: 'One Azure Monitor metric answers most of it.',
    back: 'Chart <strong>Provisioned-managed Utilization V2</strong> for the deployment in Azure Monitor. Sustained low utilisation means PTUs are paid for but idle, so shrink the deployment; peaks at 100 percent that coincide with <strong>429 responses</strong> mean it is undersized for those peaks, so add PTUs or configure <strong>spillover</strong> to a standard deployment. Use the capacity calculator with measured prompt and output sizes when resizing.',
    tags: ['Provisioned throughput', 'Capacity planning']
  },
  {
    id: 'azure-ai-apps-agents-fc-61',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What are the main levers for cutting the cost of a generative AI workload?',
    hint: 'Model, tokens, pricing model, reuse.',
    back: '<strong>Right-size the model</strong> (small models or model router for easy prompts). <strong>Cut tokens</strong>: trim conversation history, retrieve fewer and tighter chunks, set realistic max_tokens. <strong>Reuse</strong>: prompt caching and semantic caching at a gateway. <strong>Match the pricing model</strong>: batch for offline work, provisioned throughput only for steady high volume. Track spend with budgets and per-app token metrics so savings are measurable.',
    tags: ['Cost optimization']
  },
  {
    id: 'azure-ai-apps-agents-fc-62',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Can you cap Foundry model spend at a dollar amount, and what do you use instead?',
    hint: 'Budgets warn; they do not stop.',
    back: 'There is <strong>no built-in dollar spending cap</strong> that halts inference on a Foundry resource. Use <strong>Microsoft Cost Management budgets</strong> at subscription or resource-group scope with actual and forecast thresholds that notify an action group, and optionally automate a response. To limit usage directly, control <strong>deployment TPM allocations</strong> or enforce per-app token limits in <strong>API Management</strong>.',
    tags: ['Cost management', 'Budgets']
  },
  {
    id: 'azure-ai-apps-agents-fc-63',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Azure AI Search replicas vs partitions: which fixes slow queries and which fixes a full index?',
    hint: 'Copies versus slices.',
    back: '<strong>Replicas</strong> are copies of the whole index that serve queries in parallel: add them for <strong>query throughput</strong> and availability (2 replicas for the read SLA, 3 for read and write). <strong>Partitions</strong> split the index across storage: add them for <strong>storage capacity and indexing throughput</strong>. Billing is replicas multiplied by partitions search units, so scale the dimension that matches the bottleneck.',
    tags: ['Azure AI Search', 'Scaling']
  },
  {
    id: 'azure-ai-apps-agents-fc-64',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which Azure Monitor metrics are most useful for Foundry model deployments?',
    hint: 'Volume, tokens, latency, capacity.',
    back: 'Request volume by status code (to spot 429s and 5xx), <strong>Processed Prompt Tokens</strong> and <strong>Generated Completion Tokens</strong> (consumption and cost), latency metrics such as <strong>Time to Response</strong> and tokens per second, and <strong>Provisioned-managed Utilization V2</strong> for PTU deployments. Split by the <strong>ModelDeploymentName</strong> dimension to isolate one deployment. Metrics are collected automatically; resource logs need a diagnostic setting.',
    tags: ['Azure Monitor', 'Metrics']
  },
  {
    id: 'azure-ai-apps-agents-fc-65',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Continuous evaluation vs scheduled evaluation: what does each detect?',
    hint: 'Live traffic versus a fixed benchmark.',
    back: '<strong>Continuous evaluation</strong> scores a <strong>sample of live production runs</strong> (with a sampling rate and hourly cap) using reference-free evaluators such as groundedness, relevance and safety, revealing how the agent handles real users. <strong>Scheduled evaluation</strong> reruns a <strong>fixed test dataset</strong> on a schedule, often with expected answers, so score changes reveal <strong>drift</strong> from model upgrades or content changes against a stable baseline. Use both.',
    tags: ['Continuous evaluation', 'Scheduled evaluation', 'Drift']
  },
  {
    id: 'azure-ai-apps-agents-fc-66',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What can cause quality drift in a deployed RAG agent even when no one changed its code?',
    hint: 'Three moving parts outside the code.',
    back: '<strong>Model changes</strong>: an auto-upgraded model version behaves differently. <strong>Data drift</strong>: the indexed content changes, goes stale or stops ingesting, so retrieval returns different or outdated chunks. <strong>Usage drift</strong>: users start asking kinds of questions the prompts and index were not built for. Detect them with scheduled evaluation on a fixed dataset, continuous evaluation on live traffic, and index and ingestion health monitoring.',
    tags: ['Drift', 'Monitoring', 'RAG']
  },
  {
    id: 'azure-ai-apps-agents-fc-67',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Groundedness, relevance, retrieval, response completeness: what does each RAG evaluator measure?',
    hint: 'Context, query, retrieved chunks, expected answer.',
    back: '<strong>Groundedness</strong>: are the response\'s claims supported by the provided context (detects fabrication)? <strong>Relevance</strong>: does the response address the query? <strong>Retrieval</strong>: are the retrieved chunks relevant to the query (detects retriever failures)? <strong>Response completeness</strong>: does the response cover everything in a ground-truth answer? Retrieval plus groundedness separates retriever faults from generator faults.',
    tags: ['Evaluation', 'RAG', 'Groundedness']
  },
  {
    id: 'azure-ai-apps-agents-fc-68',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Groundedness evaluator vs Groundedness Pro: how do they differ?',
    hint: 'Who is the judge, and what is the output?',
    back: 'The <strong>groundedness evaluator</strong> is an AI-assisted, LLM-judge metric that uses <strong>your own judge model deployment</strong> and returns a graded score (1 to 5) with a reason. <strong>Groundedness Pro</strong> is powered by <strong>Azure AI Content Safety</strong> groundedness detection, needs no judge deployment of your own, and returns a <strong>pass or fail</strong> judgement of whether the response is fully grounded. Use Pro for strict yes-or-no gating, the standard evaluator for nuanced scoring.',
    tags: ['Groundedness', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-69',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'Which built-in evaluators target agent behaviour rather than single responses?',
    hint: 'Did it understand, use the right tools, and stick to the task?',
    back: '<strong>Intent resolution</strong>: did the agent correctly identify and address what the user wanted? <strong>Tool call accuracy</strong>: did it pick the right tools with correct arguments? <strong>Task adherence</strong>: did it follow its instructions and constraints to complete the task? They read the agent\'s messages and tool calls, so feed them the full run, including tool definitions, not just the final answer.',
    tags: ['Agent evaluation', 'Evaluators']
  },
  {
    id: 'azure-ai-apps-agents-fc-70',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'AI-assisted evaluators vs NLP metric evaluators: which need a judge model?',
    hint: 'One reads like a person, the other counts words.',
    back: '<strong>AI-assisted (LLM-judge) evaluators</strong> such as groundedness, relevance, coherence, fluency and the agent evaluators need a <strong>judge model deployment</strong> and cost tokens per evaluated row. <strong>NLP metrics</strong> such as F1, BLEU, ROUGE, GLEU and METEOR compare the response with a <strong>ground-truth answer</strong> mathematically, need no model, but reward word overlap rather than meaning. Safety evaluators run on a Microsoft-hosted service.',
    tags: ['Evaluators', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-71',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does risks and safety monitoring show for a model deployment?',
    hint: 'What the content filter did, over time.',
    back: 'It aggregates <strong>content filtering results</strong> for a deployment: total and <strong>blocked request volume</strong>, breakdown by <strong>harm category</strong> (hate, sexual, violence, self-harm) and severity, and prompt shield detections over time. It can also surface <strong>potentially abusive users</strong> who repeatedly trigger filters when user identifiers are passed. Use it to spot abuse campaigns and to tune guardrail thresholds with evidence.',
    tags: ['Safety monitoring', 'Content filtering']
  },
  {
    id: 'azure-ai-apps-agents-fc-72',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you alert when an agent\'s evaluation scores fall below a threshold?',
    hint: 'The scores are just telemetry once they land.',
    back: 'Continuous and scheduled evaluation results are written to the <strong>Application Insights</strong> resource connected to the project. Create an <strong>Azure Monitor log search alert</strong> whose KQL query aggregates a score, such as average groundedness over the last hour, and fires below the threshold, notifying an <strong>action group</strong> (email, SMS, webhook, ITSM). Latency or cost alerts cannot stand in, because quality moves independently of both.',
    tags: ['Alerts', 'Continuous evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-73',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What does the agent monitoring dashboard in Foundry show, and what must be configured first?',
    hint: 'It reads from one connected resource.',
    back: 'It shows per-agent <strong>operational metrics</strong> (runs, success and error rates, token usage, latency) and <strong>evaluation results</strong> from continuous evaluation, over time. It requires an <strong>Application Insights resource connected to the Foundry project</strong>, with agents sending telemetry to it; retention and cost follow that Application Insights configuration.',
    tags: ['Agent monitoring', 'Observability']
  },
  {
    id: 'azure-ai-apps-agents-fc-74',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'What is cluster analysis in Foundry evaluation for?',
    hint: 'Hundreds of failures, a handful of causes.',
    back: '<strong>Cluster analysis</strong> groups failing evaluation rows by similarity and summarises each cluster, so a large number of failed responses collapses into a few <strong>recurring failure patterns</strong>, such as a tool called with wrong arguments or an ignored instruction. Fix the largest cluster first, then rerun the evaluation to confirm the pattern is gone.',
    tags: ['Error analysis', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-75',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd1',
    front: 'How do you compare two candidate models for an app before switching?',
    hint: 'Public benchmarks are only the first filter.',
    back: 'Shortlist with <strong>model benchmarks</strong> in the Foundry catalog (quality, cost, latency on public datasets), then run an <strong>evaluation of each deployment on your own dataset</strong> with the same quality and safety evaluators and <strong>compare the runs side by side</strong> in the portal. Also compare token cost and latency from real prompts. Only switch when the candidate matches or beats the incumbent on the metrics that matter for the task.',
    tags: ['Model comparison', 'Evaluation', 'Benchmarks']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_3;
