export const AZURE_AI_APPS_AGENTS_FLASHCARDS_11 = [
  {
    id: 'azure-ai-apps-agents-fc-251',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What two stopping rules should every generate-critique-revise loop have?',
    hint: 'One counts, one measures.',
    back: 'A <strong>hard cap on rounds</strong> (typically two or three) and an <strong>early exit</strong> when the critic\'s structured score meets a pass threshold. Most quality gain comes in the first revision; without both rules a picky critic keeps finding trivia and the token bill grows with no visible improvement.',
    tags: ['Reflection', 'Self-critique']
  },
  {
    id: 'azure-ai-apps-agents-fc-252',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'When is pure self-reflection unreliable, and what makes a critique step trustworthy?',
    hint: 'Evidence from outside the model.',
    back: 'A model rereading its own output tends to <strong>approve it</strong>, especially with a yes-or-no question. Critique becomes reliable when it is grounded in <strong>external feedback</strong>: executing code and reading the traceback, validating JSON against a schema or business rules, checking claims against retrieved sources, or scoring with a separate judge model and an explicit rubric.',
    tags: ['Reflection', 'External feedback']
  },
  {
    id: 'azure-ai-apps-agents-fc-253',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which biases affect an LLM acting as a judge, and how do you reduce them?',
    hint: 'Its own style, the first answer, the longer answer.',
    back: 'Common biases: <strong>self-preference</strong> (favouring text in its own style), <strong>position bias</strong> (favouring the first option in a pairwise comparison) and <strong>verbosity bias</strong> (favouring longer answers). Mitigations: use a different, stronger judge model; give a concrete rubric with scored criteria; swap the order in pairwise tests; ask for a reason with each score; and calibrate the judge against a small human-labelled set.',
    tags: ['LLM-as-judge', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-254',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which familiar request parameters do most Azure OpenAI reasoning models reject?',
    hint: 'Sampling knobs and the old token limit.',
    back: 'Most reasoning models, including the o-series and GPT-5 family, do not support <strong>temperature</strong>, <strong>top_p</strong>, <strong>presence_penalty</strong>, <strong>frequency_penalty</strong>, <strong>logprobs</strong>/<strong>top_logprobs</strong> or <strong>logit_bias</strong>. Limit output with <code>max_completion_tokens</code> rather than <code>max_tokens</code>, remembering that the limit covers hidden reasoning tokens as well as the visible answer.',
    tags: ['Reasoning models', 'Parameters']
  },
  {
    id: 'azure-ai-apps-agents-fc-255',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does the reasoning effort parameter trade off?',
    hint: 'Depth of thinking against time and tokens.',
    back: 'Reasoning effort (values vary by model, from <code>none</code> or <code>minimal</code> through <code>low</code>, <code>medium</code> and <code>high</code> to higher settings) controls how many reasoning tokens the model spends before answering. Higher effort improves hard multistep problems but raises <strong>latency and output-token cost</strong>; lower effort suits simple or high-volume tasks. It replaces prompt tricks such as asking the model to think longer.',
    tags: ['Reasoning models', 'Reasoning effort']
  },
  {
    id: 'azure-ai-apps-agents-fc-256',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Can you read a reasoning model\'s chain of thought? What do you get instead?',
    hint: 'Summaries, not transcripts.',
    back: 'No. The raw chain of thought stays internal; you only see a <strong>reasoning_tokens</strong> count in the usage details. For reviewable reasoning, request a <strong>reasoning summary</strong> through the Responses API reasoning settings, which returns a model-written account of its approach that you can log and evaluate alongside the answer.',
    tags: ['Reasoning models', 'Chain of thought', 'Responses API']
  },
  {
    id: 'azure-ai-apps-agents-fc-257',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Chain-of-thought prompting: helpful for which models, redundant for which?',
    hint: 'Some models already think before they speak.',
    back: 'For standard chat models such as the GPT-4.1 family, asking for step-by-step reasoning or supplying worked examples often improves multistep accuracy. For <strong>reasoning models</strong> it is redundant and can hurt: give short, direct prompts with clear goals and constraints, and tune depth with <strong>reasoning effort</strong> instead.',
    tags: ['Prompt engineering', 'Chain of thought']
  },
  {
    id: 'azure-ai-apps-agents-fc-258',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does an AI-assisted Foundry quality evaluator return for each row?',
    hint: 'Three things, one of them in words.',
    back: 'A <strong>score</strong> (usually on a 1 to 5 scale), a <strong>pass/fail result</strong> derived from a configurable threshold, and a <strong>reason</strong> in natural language written by the judge model. The reason is what makes error analysis possible: sort by failing rows and read why the judge marked them down before changing prompts, chunking or models.',
    tags: ['Evaluators', 'Error analysis']
  },
  {
    id: 'azure-ai-apps-agents-fc-259',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Groundedness vs Response Completeness evaluators: which measures precision and which recall?',
    hint: 'Saying too much versus leaving things out.',
    back: '<strong>Groundedness</strong> is the precision view: does the response avoid content that is not supported by the context? It needs the response and context. <strong>Response Completeness</strong> is the recall view: does the response include all the critical information in the expected answer? It needs a <strong>ground truth</strong>. A terse answer can be fully grounded yet incomplete.',
    tags: ['Evaluators', 'Groundedness', 'RAG']
  },
  {
    id: 'azure-ai-apps-agents-fc-260',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What do predicted outputs do, and when can they cost more than they save?',
    hint: 'You hand the model most of the answer in advance.',
    back: 'Pass the text you expect back, such as the file being edited, in the <code>prediction</code> parameter of a chat completions call. Tokens that match are accepted quickly, cutting latency for small edits to large documents or code. Tokens that do not match are reported as <code>rejected_prediction_tokens</code> and <strong>billed as output tokens</strong>, and a poor prediction can even slow the call. Supported on gpt-4o and gpt-4.1 family models; not with tools, audio, <code>n</code> above 1, <code>logprobs</code>, penalties above 0 or <code>max_completion_tokens</code>.',
    tags: ['Predicted outputs', 'Latency']
  },
  {
    id: 'azure-ai-apps-agents-fc-261',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Server-side vs client-side tracing in Foundry: when do you need each?',
    hint: 'One needs no code at all.',
    back: '<strong>Server-side tracing</strong> starts automatically once an Application Insights resource is connected to the project and covers prompt agents, hosted agents and workflows running in Foundry, with no code changes. Add <strong>client-side instrumentation</strong> (OpenTelemetry with the Foundry SDK) when you also need spans for your own application code around the agent call, such as pre-processing, custom tools or tenant attributes.',
    tags: ['Tracing', 'OpenTelemetry']
  },
  {
    id: 'azure-ai-apps-agents-fc-262',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which roles let someone view Foundry traces, and which extra role unlocks message content in a protected table?',
    hint: 'Standard reader, then privileged reader.',
    back: '<strong>Log Analytics Reader</strong> on the connected Application Insights resource lets a user query trace telemetry, including span timings and errors. When generative AI content is routed to the <strong>AppGenAIContent</strong> table and that table is set to <strong>protected</strong>, reading prompts, responses and tool arguments additionally requires <strong>Privileged Monitoring Data Reader</strong>, which can be granted just-in-time through PIM.',
    tags: ['Tracing', 'RBAC', 'Sensitive data']
  },
  {
    id: 'azure-ai-apps-agents-fc-263',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which OpenTelemetry GenAI attributes count as sensitive content in Foundry traces?',
    hint: 'Anything a user or tool actually said.',
    back: '<code>gen_ai.input.messages</code>, <code>gen_ai.output.messages</code>, <code>gen_ai.system_instructions</code>, <code>gen_ai.tool.definitions</code>, <code>gen_ai.tool.call.arguments</code>, <code>gen_ai.tool.call.result</code> and <code>gen_ai.evaluation.explanation</code>. These can be routed to the dedicated AppGenAIContent table and protected, leaving operational attributes such as durations and token counts readable by standard roles.',
    tags: ['Tracing', 'OpenTelemetry', 'Sensitive data']
  },
  {
    id: 'azure-ai-apps-agents-fc-264',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Name the main OpenTelemetry GenAI span types you see in a multi-agent trace.',
    hint: 'Agents, workflows, tools, planning, memory.',
    back: '<code>invoke_agent</code> (an agent invocation, nested when one agent calls another), <code>invoke_workflow</code> (a coordinated workflow), <code>plan</code> (a planning or task-decomposition phase), <code>execute_tool</code> (a tool call, carrying its arguments and result) and memory operations such as <code>search_memory</code> or <code>update_memory</code>. Nesting shows exactly where in a chain an error or delay was introduced.',
    tags: ['Tracing', 'Multi-agent', 'OpenTelemetry']
  },
  {
    id: 'azure-ai-apps-agents-fc-265',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Time to Response vs Time Between Tokens vs Time to Last Byte: what does each Azure OpenAI latency metric tell you?',
    hint: 'Start, rhythm, finish.',
    back: '<strong>Time to Response</strong>: how long until the first part of a streamed response arrives, which is what users feel as responsiveness. <strong>Time Between Tokens</strong>: the pace of generation once streaming starts. <strong>Time to Last Byte</strong>: total time until the response completes. A slow first metric points at queuing, long prompts or filtering; a slow second metric points at generation speed or model load.',
    tags: ['Latency', 'Azure Monitor', 'Streaming']
  },
  {
    id: 'azure-ai-apps-agents-fc-266',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which token counts appear in a chat completion\'s usage block?',
    hint: 'Two totals and two details.',
    back: '<strong>prompt_tokens</strong> (input) and <strong>completion_tokens</strong> (output), plus details: <strong>cached_tokens</strong> under the prompt details, billed at a discount when prompt caching hits, and <strong>reasoning_tokens</strong> under the completion details for reasoning models, billed as output though never shown. Log all four to explain cost per request.',
    tags: ['Token analytics', 'Cost']
  },
  {
    id: 'azure-ai-apps-agents-fc-267',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does an app tell a filtered prompt from a filtered completion?',
    hint: 'Status code versus finish reason.',
    back: 'A <strong>filtered prompt</strong> fails the call with <strong>HTTP 400</strong> and error code <code>content_filter</code>; the inner error carries the category result. A <strong>filtered completion</strong> returns <strong>HTTP 200</strong> with <code>finish_reason</code> set to <code>content_filter</code> on the affected choice and its content filter results. A 429 is a quota or rate limit, not a safety block.',
    tags: ['Content filtering', 'Safety signals']
  },
  {
    id: 'azure-ai-apps-agents-fc-268',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How do you compare two OpenAI embeddings, and why do cosine similarity and dot product give the same ranking?',
    hint: 'Look at the length of each vector.',
    back: 'Similarity between embeddings is usually measured with <strong>cosine similarity</strong>: the closer to 1, the closer the meaning. OpenAI embedding models return vectors <strong>normalized to length 1</strong>, so the dot product equals the cosine similarity and Euclidean distance ranks results in the same order. The cheaper dot product is therefore fine, provided every vector comes from the same model and dimension setting.',
    tags: ['Embeddings', 'Similarity']
  },
  {
    id: 'azure-ai-apps-agents-fc-269',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Continuous evaluation vs a scheduled dataset evaluation vs red teaming: which catches what?',
    hint: 'Live traffic, fixed traffic, hostile traffic.',
    back: '<strong>Continuous evaluation</strong> samples live agent traffic and scores it with chosen evaluators, catching drift in real usage. A <strong>scheduled evaluation on a fixed dataset</strong> is a regression test: it catches changes in behaviour on known inputs. The <strong>AI red teaming agent</strong> generates adversarial attacks to measure safety and security weaknesses, reported as attack success rate.',
    tags: ['Continuous evaluation', 'Red teaming', 'Monitoring']
  },
  {
    id: 'azure-ai-apps-agents-fc-270',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What are the model router\'s routing modes, and when would you pick each?',
    hint: 'Three words: the default, the careful one, the thrifty one.',
    back: '<strong>Balanced</strong> (default): suits most workloads, optimising cost while keeping quality. <strong>Quality</strong>: favours more capable models, for critical tasks such as legal review or complex reasoning. <strong>Cost</strong>: favours cheaper models, for high-volume, budget-sensitive traffic. You can also restrict routing to a chosen subset of supported models.',
    tags: ['Model router', 'Routing modes']
  },
  {
    id: 'azure-ai-apps-agents-fc-271',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'List the Microsoft Agent Framework orchestration patterns with a one-line use for each.',
    hint: 'Five patterns.',
    back: '<strong>Sequential</strong>: fixed pipeline, each agent builds on the last. <strong>Concurrent</strong>: same input to several agents in parallel, results aggregated. <strong>Handoff</strong>: an agent transfers control of the conversation to a specialist. <strong>Group chat</strong>: a manager picks the next speaker in a shared discussion. <strong>Magentic</strong>: a manager plans and replans open-ended tasks, assigning work as needs emerge.',
    tags: ['Multi-agent orchestration', 'Agent Framework']
  },
  {
    id: 'azure-ai-apps-agents-fc-272',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Group chat vs Magentic orchestration: both have a manager, so what is the difference?',
    hint: 'Who speaks next versus what needs doing next.',
    back: 'In <strong>group chat</strong>, the manager chooses <strong>which agent speaks next</strong> in one shared conversation, suited to iterative review and refinement among a known set of participants. In <strong>Magentic</strong> orchestration, the manager keeps a <strong>task and progress ledger</strong>, decomposes an open-ended goal, assigns subtasks to specialist agents and replans when results reveal new needs. Magentic costs more and is harder to predict.',
    tags: ['Multi-agent orchestration', 'Magentic', 'Group chat']
  },
  {
    id: 'azure-ai-apps-agents-fc-273',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'In a hybrid LLM and rules-engine design, which work belongs to each side?',
    hint: 'Fuzzy input versus exact decisions.',
    back: 'The <strong>language model</strong> handles unstructured work: understanding free text, extracting fields, classifying intent and writing replies. The <strong>rules engine or code</strong> handles anything that must be exact, auditable or reproducible: eligibility, pricing, limits and compliance checks. Keep the decision deterministic and let the model explain it.',
    tags: ['Hybrid orchestration', 'Rules engine']
  },
  {
    id: 'azure-ai-apps-agents-fc-274',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'In a multi-step flow, when do you shape output with a response format schema and when with a function tool?',
    hint: 'Is the model answering, or asking your code to act?',
    back: 'Use a <strong>response format</strong> (structured outputs with a JSON Schema) when the model\'s <strong>final answer</strong> must have a fixed shape, such as extracted fields handed to a rules engine. Use a <strong>function tool</strong> when the model should decide to <strong>call your code</strong> mid-flow, such as a lookup, and wait for the result. Both support <code>strict: true</code> schema enforcement.',
    tags: ['Structured outputs', 'Function calling']
  },
  {
    id: 'azure-ai-apps-agents-fc-275',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How can a small model decide when to escalate a request to a larger model, and which models cannot give that signal?',
    hint: 'Probability of the chosen label.',
    back: 'Ask the small chat model for <strong>log probabilities</strong> on a short, constrained label (a category token, for example) and escalate when the top probability falls below a tuned threshold. This keeps most traffic on the cheap model. <strong>Most reasoning models do not return logprobs</strong>, so for them use an external check instead, such as schema or rule validation or a judge model.',
    tags: ['Model cascade', 'Log probabilities']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_11;
