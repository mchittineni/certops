export const AZURE_AI_APPS_AGENTS_FLASHCARDS_9 = [
  {
    id: 'azure-ai-apps-agents-fc-201',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'When is a multi-agent design justified over one agent with tools?',
    hint: 'Every extra agent costs a hop.',
    back: 'Split into multiple agents when tasks need <strong>distinct expertise or instructions</strong>, <strong>separate tool sets or permissions</strong> (security boundaries), <strong>independent ownership</strong> by different teams, or parallel work. Otherwise start with <strong>one agent</strong>: each extra agent adds latency, token cost, coordination failures and more to evaluate and trace.',
    tags: ['Multi-agent', 'Agent design']
  },
  {
    id: 'azure-ai-apps-agents-fc-202',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does a Magentic manager keep an open-ended task on track?',
    hint: 'Two ledgers.',
    back: 'The manager keeps a <strong>task ledger</strong> (known facts, guesses and the current plan) and a <strong>progress ledger</strong> (what has been done, whether the task is complete, who should act next and with what instruction). Each round it updates the progress ledger, delegates to a specialist, and <strong>re-plans</strong> when progress stalls. Cap rounds and stalls so a stuck task ends rather than looping.',
    tags: ['Magentic', 'Multi-agent']
  },
  {
    id: 'azure-ai-apps-agents-fc-203',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Handoff vs calling a specialist agent as a tool: who owns the conversation afterwards?',
    hint: 'Transfer vs delegate-and-return.',
    back: '<strong>Handoff</strong>: control of the conversation <strong>moves</strong> to the specialist, which talks to the user directly until it hands off again. <strong>Agent as a tool</strong> (for example through A2A): the calling agent <strong>delegates a task</strong>, receives the result and <strong>stays in charge</strong> of the conversation, composing the final reply. Choose handoff for expert takeover, agent-as-tool for sub-tasks.',
    tags: ['Multi-agent', 'Handoff']
  },
  {
    id: 'azure-ai-apps-agents-fc-204',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Agent-to-agent tool vs an incoming A2A endpoint: which direction does each serve?',
    hint: 'Calling out vs being called.',
    back: 'The <strong>agent-to-agent (A2A) tool</strong> lets your Foundry agent <strong>call out</strong> to a remote agent\'s A2A endpoint and delegate a task. An <strong>incoming A2A endpoint</strong> on your agent lets <strong>other agents call in</strong>, on any platform, using the standard protocol, with authentication controlling access. Neither side exposes its prompts, tools or code to the other.',
    tags: ['A2A', 'Interoperability']
  },
  {
    id: 'azure-ai-apps-agents-fc-205',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'A2A or MCP: what does each protocol connect?',
    hint: 'Peers vs capabilities.',
    back: '<strong>MCP</strong> connects an agent to <strong>tools and resources</strong>: a server exposes functions the agent invokes, and the agent stays in control. <strong>A2A</strong> connects <strong>agents to agents</strong>: a remote agent receives a task, reasons with its own model and tools, and returns results or progress. Use MCP for capabilities, A2A to delegate to another autonomous agent owned elsewhere.',
    tags: ['A2A', 'MCP']
  },
  {
    id: 'azure-ai-apps-agents-fc-206',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Explicit workflow edges or LLM-driven orchestration: how do you decide?',
    hint: 'Known path vs unknown path.',
    back: 'If the <strong>steps and order are known</strong>, especially when mandated by regulation or audit, encode them as a <strong>workflow graph with explicit edges</strong> so execution is deterministic and repeatable, and use agents inside steps for judgment. Use <strong>LLM-driven orchestration</strong> (group chat, handoff, Magentic) only when the path genuinely depends on content and cannot be predefined.',
    tags: ['Workflows', 'Orchestration']
  },
  {
    id: 'azure-ai-apps-agents-fc-207',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What are the building blocks of a Microsoft Agent Framework workflow?',
    hint: 'Nodes, connections, signals.',
    back: '<strong>Executors</strong>: processing units, either agents or plain code, that receive messages and produce outputs. <strong>Edges</strong>: typed connections between executors, including conditional routing, fan-out and fan-in. <strong>Events</strong>: emitted as the workflow runs, for streaming progress, outputs and human-in-the-loop requests. Workflows can be written in code or declarative YAML and run as hosted agents.',
    tags: ['Agent Framework', 'Workflows']
  },
  {
    id: 'azure-ai-apps-agents-fc-208',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does checkpointing give an Agent Framework workflow?',
    hint: 'Waiting days without losing work.',
    back: 'Checkpoints persist the workflow\'s state, including executor state, pending messages and outstanding human-in-the-loop requests, to a <strong>checkpoint storage</strong> at step boundaries. A run can then be <strong>resumed from a checkpoint</strong> after a crash, a compute recycle or a days-long approval wait, without repeating completed steps, and you can inspect or restart from earlier checkpoints when debugging.',
    tags: ['Checkpointing', 'Workflows']
  },
  {
    id: 'azure-ai-apps-agents-fc-209',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does a workflow ask a human for missing information mid-run?',
    hint: 'Pause, ask, resume.',
    back: 'An executor emits a <strong>request for information</strong> (a human-in-the-loop request event). The workflow <strong>pauses</strong>, the application shows the question to the right person, and when the app sends back the <strong>response</strong> the workflow resumes with it. Pair it with checkpointing when the answer may take hours or days.',
    tags: ['Human in the loop', 'Workflows']
  },
  {
    id: 'azure-ai-apps-agents-fc-210',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Walk through the MCP approval handshake in a Foundry agent run.',
    hint: 'Request item out, response item in.',
    back: 'With approval required, the response ends with an <strong>mcp_approval_request</strong> item naming the server label, tool and arguments. The app shows it to a reviewer, then sends a new request whose input contains an <strong>mcp_approval_response</strong> with the <strong>approval_request_id</strong> and <strong>approve</strong> true or false, chained with previous_response_id or the conversation. Only then does the service call the MCP server.',
    tags: ['MCP tool', 'Approval flow']
  },
  {
    id: 'azure-ai-apps-agents-fc-211',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How do you stop a group chat of agents from debating forever?',
    hint: 'Know when to stop.',
    back: 'Give the manager a <strong>termination condition</strong> (for example the reviewer approves, or a required output exists) and a <strong>maximum number of rounds</strong>. When the cap is hit, end the run and <strong>escalate with the transcript</strong> to a person, rather than returning nothing or silently choosing one agent\'s last proposal.',
    tags: ['Group chat', 'Safeguards']
  },
  {
    id: 'azure-ai-apps-agents-fc-212',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which hard limits should every unattended agent run have?',
    hint: 'Count, cost, clock.',
    back: 'Code-enforced caps on <strong>tool calls or loop iterations</strong>, <strong>tokens or spend</strong> per run, and <strong>wall-clock time</strong>, each ending the run safely with an alert and a record of what happened. Prompts asking the model to be economical are not limits; evaluations and dashboards detect problems after the fact but do not stop a runaway run.',
    tags: ['Autonomous agents', 'Safeguards']
  },
  {
    id: 'azure-ai-apps-agents-fc-213',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Why do agent tools that change things need idempotency?',
    hint: 'Retries happen.',
    back: 'Agents, orchestrators and HTTP clients <strong>retry</strong> after timeouts, and a model may call the same tool twice. A non-idempotent create_booking or send_payment then produces <strong>duplicates</strong>. Accept an <strong>idempotency key</strong> (for example a conversation plus step ID) and have the backend return the original result for repeats, so retries and resumed workflows are safe.',
    tags: ['Tool design', 'Reliability']
  },
  {
    id: 'azure-ai-apps-agents-fc-214',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Task Navigation Efficiency: what are its matching modes?',
    hint: 'Strict, ordered, or any order.',
    back: 'It compares the agent\'s <strong>actions</strong> with <strong>expected_actions</strong> (ground truth) and returns pass or fail plus <strong>precision, recall and F1</strong>, with no judge model. <strong>exact_match</strong>: same steps, same order, nothing extra. <strong>in_order_match</strong>: all expected steps in order, extras allowed. <strong>any_order_match</strong>: all expected steps present in any order, extras allowed.',
    tags: ['Agent evaluation', 'Task Navigation Efficiency']
  },
  {
    id: 'azure-ai-apps-agents-fc-215',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which six criteria must every parameter pass under the Tool Input Accuracy evaluator?',
    hint: 'Strict pass or fail per call.',
    back: '<strong>Groundedness</strong> (values come from the conversation or earlier tool results, not invented), <strong>type compliance</strong>, <strong>format compliance</strong> (dates, IDs and so on), <strong>required parameters</strong> present, <strong>no unexpected parameters</strong>, and <strong>value appropriateness</strong>. It needs the query, response and tool_definitions, and suits production API integrations that need fully correct arguments.',
    tags: ['Agent evaluation', 'Tool Input Accuracy']
  },
  {
    id: 'azure-ai-apps-agents-fc-216',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Tool Call Accuracy vs Tool Output Utilization vs Tool Call Success: which stage of a tool call does each judge?',
    hint: 'Before, after, and whether it ran at all.',
    back: '<strong>Tool Call Accuracy</strong>: before execution, were the right tools called with correct parameters and no redundancy (1-5, thresholded). <strong>Tool Call Success</strong>: during execution, did the call complete without technical errors or exceptions. <strong>Tool Output Utilization</strong>: after execution, did the agent correctly use the returned results in its reasoning and reply.',
    tags: ['Agent evaluation', 'Tool calls']
  },
  {
    id: 'azure-ai-apps-agents-fc-217',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Task Completion vs Task Adherence: how do they differ?',
    hint: 'Did it finish vs did it follow the rules.',
    back: '<strong>Task Completion</strong>: did the agent deliver a <strong>usable result that meets all the user\'s requirements</strong>, end to end? <strong>Task Adherence</strong>: did the agent\'s actions <strong>follow its system message rules, procedures and constraints</strong>? An agent can complete a task while breaking policy, or follow every rule and still fail to finish, so regulated agents usually need both.',
    tags: ['Agent evaluation', 'Task Completion']
  },
  {
    id: 'azure-ai-apps-agents-fc-218',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which agent evaluators score on a 1-5 scale, and which are pass or fail only?',
    hint: 'Look for a numeric score field.',
    back: '<strong>Intent Resolution</strong> and <strong>Tool Call Accuracy</strong> produce a 1-5 score converted to pass or fail at a threshold (default 3), and <strong>Customer Satisfaction</strong> reports a 1-5 Likert score. <strong>Task Completion</strong>, <strong>Task Adherence</strong>, <strong>Tool Selection</strong>, <strong>Tool Input Accuracy</strong>, <strong>Tool Output Utilization</strong>, <strong>Tool Call Success</strong> and <strong>Task Navigation Efficiency</strong> return pass or fail, each with a reason.',
    tags: ['Agent evaluation', 'Scoring']
  },
  {
    id: 'azure-ai-apps-agents-fc-219',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which agent tools have limited support in tool-focused evaluators, and what do you do about it?',
    hint: 'Mostly the built-in knowledge tools.',
    back: 'Azure AI Search, Bing grounding, Bing custom search, SharePoint grounding, code interpreter, Fabric data agent and web search have <strong>limited support</strong>: avoid tool call accuracy, tool input accuracy, tool output utilization, tool call success and groundedness on those conversations. Supported: <strong>function tools, MCP, knowledge-based MCP and file search</strong>. Use task adherence, intent resolution, relevance or task completion instead.',
    tags: ['Agent evaluation', 'Tool support']
  },
  {
    id: 'azure-ai-apps-agents-fc-220',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does the Customer Satisfaction evaluator measure?',
    hint: 'A whole conversation, six angles.',
    back: 'Holistic user satisfaction across an entire conversation (preview), rated on a 1-5 scale from the <strong>messages</strong>, across six dimensions: <strong>helpfulness, completeness, clarity, tone, resolution and adaptability</strong>. It catches frustration that builds over several turns, such as repeated rephrasing, which per-reply evaluators miss.',
    tags: ['Agent evaluation', 'Customer Satisfaction']
  },
  {
    id: 'azure-ai-apps-agents-fc-221',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'In a multi-agent system, where do system evaluators and process evaluators apply?',
    hint: 'Outcome at the top, steps everywhere.',
    back: '<strong>System evaluators</strong> (task completion, task adherence, intent resolution, relevance) judge the <strong>end-to-end outcome</strong>, so apply them to the orchestrator or the final agent that answers the user. <strong>Process evaluators</strong> (tool call accuracy, tool selection, tool input accuracy and others) judge <strong>individual steps</strong>, so apply them to each agent\'s tool calls, specialists included.',
    tags: ['Agent evaluation', 'Multi-agent']
  },
  {
    id: 'azure-ai-apps-agents-fc-222',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What is a practical error-analysis loop for a deployed agent?',
    hint: 'Scores point, traces explain, datasets prove.',
    back: '1) Find failing runs through evaluation scores and their <strong>reasons</strong>. 2) Group them into recurring failure types. 3) Open the <strong>traces</strong> of representative runs to locate the failing step: retrieval, tool arguments, tool errors or reasoning. 4) Fix instructions, tools or data. 5) Add the failures to the <strong>evaluation dataset</strong> and re-run against the new agent version before promoting it.',
    tags: ['Error analysis', 'Agent evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-223',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How is a hosted agent exposed to other agents over A2A?',
    hint: 'A protocol path on the agent endpoint.',
    back: 'Declare the A2A protocol in the agent version definition; the platform then serves it at <strong>{project_endpoint}/agents/{name}/endpoint/protocols/a2a</strong>, alongside any Responses or Invocations endpoints the same agent exposes. <strong>A2A v1.0</strong> is generally available and <strong>v0.3</strong> is in preview. Callers authenticate with Microsoft Entra ID, and the agent acts with its own agent identity.',
    tags: ['Hosted agents', 'A2A']
  },
  {
    id: 'azure-ai-apps-agents-fc-224',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How do Agent Framework orchestrations bring a human into the loop?',
    hint: 'Two built-in mechanisms.',
    back: 'Through <strong>tool approval</strong>, where agents use approval-required tools that pause the orchestration for human review before the tool runs, and <strong>request info</strong>, where the orchestration asks a person for input and waits for the answer. Both surface as events the application handles and then answers to resume.',
    tags: ['Human in the loop', 'Agent Framework']
  },
  {
    id: 'azure-ai-apps-agents-fc-225',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What context should an orchestrator pass to each specialist agent?',
    hint: 'Need to know.',
    back: 'Only what the specialist needs for its step: the <strong>task</strong>, the relevant <strong>inputs and prior results</strong>, and any constraints. Forwarding every transcript to every agent inflates tokens and latency, distracts the specialist, and <strong>exposes data</strong> the agent has no business seeing, which widens the blast radius of a prompt injection.',
    tags: ['Multi-agent', 'Context management']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_9;
