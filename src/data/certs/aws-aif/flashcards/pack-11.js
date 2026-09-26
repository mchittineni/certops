export const AWS_AIF_FLASHCARDS_11 = [
  {
    id: 'aws-aif-fc-251',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Rank the four FM customization approaches from cheapest to most expensive.',
    hint: 'Count the training jobs each one needs.',
    back: '<strong>In-context learning / prompt engineering</strong> (no training, pay only for tokens) &lt; <strong>RAG</strong> (no training, but embeddings, a vector store and longer prompts) &lt; <strong>fine-tuning</strong> (a paid training job on labeled data, repeated when behavior must change) &lt; <strong>pre-training from scratch</strong> (huge corpus, large clusters for weeks, specialist staff). Try them in that order and escalate only when the cheaper step falls short.',
    tags: ['Customization cost', 'RAG', 'Fine-tuning']
  },
  {
    id: 'aws-aif-fc-252',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Knowledge that changes daily: RAG or fine-tuning?',
    hint: 'Where does the fact live at answer time?',
    back: '<strong>RAG.</strong> Retrieval pulls the current document into the prompt at query time, so updating knowledge means re-syncing an index, not retraining. A fine-tuned model freezes knowledge at training time and goes stale until the next paid training job. Fine-tuning is the better fit for changing <em>behavior</em> (tone, format, task skill), not for tracking facts that move.',
    tags: ['RAG', 'Fine-tuning', 'Data freshness']
  },
  {
    id: 'aws-aif-fc-253',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is the hidden recurring cost of few-shot prompting at high volume?',
    hint: 'Multiply the examples by the request count.',
    back: 'The examples are <strong>input tokens on every request</strong>. A 3,000-token example block across millions of calls can dwarf the cost of the actual input. When the task is stable and labeled data exists, <strong>fine-tuning</strong> converts that recurring token cost into a one-time training cost, because the tuned model no longer needs the examples in its prompt. Prompt caching is another lever when the same prefix repeats.',
    tags: ['In-context learning', 'Customization cost']
  },
  {
    id: 'aws-aif-fc-254',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What running costs does a RAG application add even though it needs no training?',
    hint: 'Think ingestion, storage, and prompt size.',
    back: '<strong>Embedding</strong> every document (and every query) with an embeddings model; operating the <strong>vector store</strong> (for example OpenSearch Serverless or Aurora PostgreSQL with pgvector); and <strong>longer prompts</strong>, because the retrieved chunks are billed as input tokens on each request. Re-syncing the data source after changes also re-embeds the changed documents.',
    tags: ['RAG', 'Customization cost', 'Vector stores']
  },
  {
    id: 'aws-aif-fc-255',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'After fine-tuning a model in Amazon Bedrock, what can add to the cost of using it?',
    hint: 'Training is not the last bill.',
    back: 'Besides the training job (priced by tokens processed) and monthly <strong>custom model storage</strong>, inference on a custom model has historically required buying <strong>Provisioned Throughput</strong>, dedicated capacity billed by the hour whether or not it is used; some models now support on-demand inference for custom models, so check the model. Retraining when behavior must change repeats the training cost. RAG and prompting avoid all of these.',
    tags: ['Fine-tuning', 'Provisioned Throughput', 'Customization cost']
  },
  {
    id: 'aws-aif-fc-256',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is in-context learning?',
    hint: 'Nothing about the model changes.',
    back: 'Steering a model with <strong>instructions and examples placed in the prompt</strong> rather than by changing its weights. Zero-shot, one-shot and few-shot prompting are all in-context learning. It is the cheapest customization (no training), takes effect instantly, and is limited by the context window and by the per-request token cost of the examples.',
    tags: ['In-context learning', 'Prompt engineering']
  },
  {
    id: 'aws-aif-fc-257',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does query decomposition do in an Amazon Bedrock knowledge base?',
    hint: 'One compound question, several simpler searches.',
    back: 'A compound question such as "Compare the 2023 and 2024 refund policies" retrieves poorly as a single vector search. With <strong>query decomposition</strong> (a query transformation setting in <code>RetrieveAndGenerate</code>), the knowledge base breaks it into <strong>smaller sub-queries</strong>, retrieves chunks for each, and generates one answer from the combined results. It helps multi-part and comparison questions at the cost of extra retrieval calls.',
    tags: ['Knowledge Bases', 'Query decomposition']
  },
  {
    id: 'aws-aif-fc-258',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is an AI agent, in one sentence?',
    hint: 'Reason, act, observe, repeat.',
    back: 'A system that uses a foundation model to <strong>reason about a goal, choose and call tools or APIs, observe the results, and repeat</strong> until the task is complete, so it can finish multi-step work (look up an order, check a policy, issue a refund) rather than returning a single reply to a single prompt.',
    tags: ['Agents', 'Agentic AI']
  },
  {
    id: 'aws-aif-fc-259',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What are the main building blocks of an Amazon Bedrock agent?',
    hint: 'Brain, instructions, hands, reference shelf.',
    back: 'A <strong>foundation model</strong> that does the reasoning; <strong>instructions</strong> describing the agent\'s role and rules; <strong>action groups</strong> (OpenAPI schema or function definitions plus a Lambda function or return of control) that let it act; and optional <strong>knowledge bases</strong> it can query for information. Guardrails and memory can be attached as well.',
    tags: ['Amazon Bedrock Agents', 'Action groups']
  },
  {
    id: 'aws-aif-fc-260',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Action group or knowledge base: which does an agent use to change something in another system?',
    hint: 'Reading vs doing.',
    back: '<strong>Action group.</strong> It defines operations (via an OpenAPI schema or function details) that the agent can invoke, executed by a Lambda function or handed back to the app with return of control, so it can create, update or query live systems. A <strong>knowledge base</strong> only retrieves passages from indexed documents; it can inform an answer but cannot perform an action.',
    tags: ['Action groups', 'Knowledge Bases', 'Amazon Bedrock Agents']
  },
  {
    id: 'aws-aif-fc-261',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'When would you configure an Amazon Bedrock action group to return control instead of using Lambda?',
    hint: 'Who is allowed to make the call?',
    back: 'When the <strong>application itself must execute the action</strong>, for example because the call needs the user\'s session, runs in a private network the agent cannot reach, or policy forbids delegating it to Lambda. The agent still decides the action and elicits parameters, returns them in the InvokeAgent response, and the app runs the call and passes the result back in the next request\'s session state.',
    tags: ['Return of control', 'Amazon Bedrock Agents']
  },
  {
    id: 'aws-aif-fc-262',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How do you make an Amazon Bedrock agent ask the user before running a risky action?',
    hint: 'It is a per-function setting.',
    back: 'Enable <strong>user confirmation</strong> on that action group function. Before invoking it, the agent presents the action and its parameters and proceeds only if the user confirms (a deny goes back to the model). Other functions without the flag still run without interruption, so you can gate refunds or deletions while lookups stay fast.',
    tags: ['User confirmation', 'Human in the loop']
  },
  {
    id: 'aws-aif-fc-263',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does multi-agent collaboration add in Amazon Bedrock?',
    hint: 'Someone has to coordinate the specialists.',
    back: 'A <strong>supervisor agent</strong> that breaks a request into subtasks, delegates them to specialist <strong>collaborator agents</strong>, and consolidates their answers. It keeps each specialist\'s instructions and tools small and focused. A routing mode lets the supervisor send simple requests straight to the one collaborator that can handle them.',
    tags: ['Multi-agent collaboration', 'Amazon Bedrock Agents']
  },
  {
    id: 'aws-aif-fc-264',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How do you see why an Amazon Bedrock agent chose a particular action?',
    hint: 'Turn on the step-by-step view.',
    back: 'Enable the <strong>trace</strong> (enableTrace on InvokeAgent, or the test window in the console). It breaks each turn into pre-processing, orchestration and post-processing steps and shows the model\'s <strong>rationale</strong>, the action group and parameters it invoked, and the observation returned, which is how you debug wrong tool choices and tune the agent\'s instructions.',
    tags: ['Trace', 'Amazon Bedrock Agents']
  },
  {
    id: 'aws-aif-fc-265',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How can an Amazon Bedrock agent remember a user across separate sessions?',
    hint: 'A bigger context window does not survive a new session.',
    back: 'Enable <strong>memory</strong>. The agent summarizes each session and stores the summary under a <strong>memory ID</strong> (usually one per user) for a retention period you set, up to a year, and supplies those summaries in later sessions. Within a single session, the conversation history already provides continuity; memory is for across-session recall.',
    tags: ['Memory', 'Amazon Bedrock Agents']
  },
  {
    id: 'aws-aif-fc-266',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Amazon Bedrock Agents vs Amazon Bedrock AgentCore: what is the difference in approach?',
    hint: 'Configure a managed agent, or bring your own.',
    back: '<strong>Amazon Bedrock Agents</strong> is a fully managed, configuration-driven agent: you pick a model, write instructions, and attach action groups and knowledge bases. <strong>AgentCore</strong> provides the infrastructure to deploy and operate agents built with <strong>any framework and any model</strong> (for example Strands, LangGraph or CrewAI), with modular services such as a serverless runtime, memory, identity, a tool gateway and observability.',
    tags: ['Amazon Bedrock AgentCore', 'Amazon Bedrock Agents']
  },
  {
    id: 'aws-aif-fc-267',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Name the four common elements of a prompt.',
    hint: 'Task, background, material, shape of the answer.',
    back: '<strong>Instruction</strong>: the task to perform. <strong>Context</strong>: background that shapes the answer (audience, role, constraints). <strong>Input data</strong>: the text or content to work on. <strong>Output indicator</strong>: the format or type of output wanted (a JSON object, three bullets, one sentence). Not every prompt needs all four, but a missing instruction or output indicator is the usual cause of off-target replies.',
    tags: ['Prompt engineering', 'Prompt elements']
  },
  {
    id: 'aws-aif-fc-268',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is a negative prompt?',
    hint: 'It describes what you do not want.',
    back: 'Guidance that tells the model what to <strong>exclude</strong>. In image models such as Amazon Nova Canvas and Titan Image Generator it is a separate <strong>negative text</strong> parameter (for example: text, watermark, blurry). In text prompts it is an instruction such as "do not mention competitors". Pair it with a positive statement of what to do, because models follow positive direction more reliably.',
    tags: ['Negative prompts', 'Image generation']
  },
  {
    id: 'aws-aif-fc-269',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is a model\'s latent space, and why does it matter for prompting?',
    hint: 'The model can only draw on what it encoded.',
    back: 'The <strong>internal, high-dimensional representation</strong> of the patterns and concepts a model learned in training. A prompt steers generation toward regions of that space, so specialist wording elicits specialist output. If a fact was never learned, it is not in the latent space and the model will produce plausible fiction; the fix is to supply the fact as context (for example with RAG), not to reword the question.',
    tags: ['Latent space', 'Hallucinations']
  },
  {
    id: 'aws-aif-fc-270',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why wrap input documents in delimiters such as XML tags inside a prompt?',
    hint: 'Which text is the task, and which is the material?',
    back: 'Delimiters <strong>separate instructions from data</strong>, so the model knows what to do and what to do it to. That reduces drift (summarizing when asked to extract), lets you reference sections by name ("using the text in &lt;contract&gt;"), and lowers the chance that instructions embedded in the data are obeyed, although it is not a complete defense against prompt injection.',
    tags: ['Delimiters', 'Prompt engineering']
  },
  {
    id: 'aws-aif-fc-271',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Instruction vs context: how do you tell them apart in a prompt?',
    hint: 'One says what to do; the other says what to know.',
    back: 'The <strong>instruction</strong> is the action requested: "Draft a reply", "List the risks". <strong>Context</strong> is the information that shapes how it is done: "The customer is gold tier and prefers short replies", "The reader is a CFO". A prompt with context but no instruction leaves the model guessing the task; one with an instruction but no context yields generic output.',
    tags: ['Instructions', 'Context']
  },
  {
    id: 'aws-aif-fc-272',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is a system prompt?',
    hint: 'Set once, applies to every turn.',
    back: 'Standing instructions supplied separately from the user\'s message that set the model\'s <strong>role, tone, rules and constraints</strong> for the whole conversation, for example "You are a support assistant for Acme; answer only from the provided policy; reply in under 100 words." The Amazon Bedrock Converse API accepts it as a dedicated system field.',
    tags: ['System prompts', 'Prompt engineering']
  },
  {
    id: 'aws-aif-fc-273',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Agent or single model call: how do you decide?',
    hint: 'Count the steps and the systems touched.',
    back: 'Use a <strong>single call</strong> (possibly with RAG) when one prompt can produce the answer: summarize, classify, answer from documents. Use an <strong>agent</strong> when the task needs several dependent steps, decisions based on intermediate results, or actions in external systems. Agents add latency, cost and more failure modes, so they should earn their place.',
    tags: ['Agents', 'Design considerations']
  },
  {
    id: 'aws-aif-fc-274',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is the ReAct pattern that underlies many agents?',
    hint: 'Two words fused together.',
    back: '<strong>Reasoning + Acting</strong>: the model alternates between a <strong>thought</strong> (reasoning about what to do next), an <strong>action</strong> (calling a tool with parameters) and an <strong>observation</strong> (the tool\'s result), looping until it can answer. Amazon Bedrock Agents\' default orchestration follows this loop, and the rationale, invocation and observation are what the agent trace shows.',
    tags: ['ReAct', 'Agents']
  },
  {
    id: 'aws-aif-fc-275',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is the Model Context Protocol (MCP), and where does Amazon Bedrock AgentCore Gateway fit?',
    hint: 'A standard plug for agent tools.',
    back: '<strong>MCP</strong> is an open protocol that standardizes how AI agents <strong>discover and call tools and data sources</strong>, so one tool server works with any MCP-capable agent or framework instead of needing custom integration code for each. <strong>AgentCore Gateway</strong> turns existing APIs, Lambda functions and services into <strong>MCP-compatible tools</strong> that agents can find and call, with authentication handled centrally.',
    tags: ['MCP', 'AgentCore']
  }
];

export default AWS_AIF_FLASHCARDS_11;
