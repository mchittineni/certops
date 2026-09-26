export const AZURE_AI_APPS_AGENTS_FLASHCARDS_6 = [
  {
    id: 'azure-ai-apps-agents-fc-126',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does streaming a model response improve, and what does it leave unchanged?',
    hint: 'First token vs last token.',
    back: 'Streaming sends tokens as <strong>server-sent events</strong> while the model generates, so <strong>time to first token</strong> and perceived latency drop sharply. It does <strong>not</strong> reduce total generation time, token cost or the output cap. Trade-offs: the app must assemble deltas, and content filtering runs on chunks of streamed output, so a late filter hit can interrupt text already shown.',
    tags: ['Streaming', 'Latency']
  },
  {
    id: 'azure-ai-apps-agents-fc-127',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How do you embed a large corpus efficiently with the embeddings API?',
    hint: 'One call, many inputs.',
    back: 'Send <strong>an array of inputs per request</strong> (up to 2,048 items, each within the model\'s per-input token limit) and read back one vector per item, in order. This removes per-call overhead and request-count throttling. For millions of chunks with no latency need, use a <strong>batch</strong> job instead. Keep the same model and dimensions for documents and queries, or the vectors will not be comparable.',
    tags: ['Embeddings', 'Throughput']
  },
  {
    id: 'azure-ai-apps-agents-fc-128',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How can a vision-capable model answer questions about a PDF, charts included?',
    hint: 'Send the file itself.',
    back: 'Pass the PDF as a <strong>file input</strong> (file ID or base64) in the Responses API. The service gives the model both the <strong>extracted text</strong> and an <strong>image of each page</strong>, so values that exist only in charts, diagrams or scanned tables stay visible. Page images cost image tokens, so very long documents are better served by RAG or Content Understanding extraction.',
    tags: ['Multimodal', 'PDF input']
  },
  {
    id: 'azure-ai-apps-agents-fc-129',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which API must you use to call codex models such as gpt-5-codex or codex-mini?',
    hint: 'Not Chat Completions.',
    back: 'The <strong>Responses API</strong>; the codex family is not served through Chat Completions, so an existing chat client fails with an unsupported-operation error. They are tuned for agentic coding (multi-file edits, tool use, long-running tasks) and accept reasoning controls. General models such as gpt-4.1 or gpt-5 also write code well and remain usable through either API.',
    tags: ['Code models', 'Responses API']
  },
  {
    id: 'azure-ai-apps-agents-fc-130',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does reasoning_effort trade off, and what happens if the token cap is too small?',
    hint: 'Hidden tokens still count.',
    back: '<strong>reasoning_effort</strong> (for example minimal, low, medium, high, depending on the model) sets how many reasoning tokens the model spends before answering: higher means better multistep accuracy but more latency and cost. Reasoning tokens are <strong>billed as output</strong> and consume the output cap, so a low cap with high effort can exhaust the budget during reasoning and return an <strong>empty or incomplete answer</strong>.',
    tags: ['Reasoning models', 'Cost']
  },
  {
    id: 'azure-ai-apps-agents-fc-131',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'In an Azure request, what goes in the model field, and does the v1 endpoint need an api-version?',
    hint: 'Name chosen by the admin; no date string.',
    back: 'The <strong>model</strong> field carries the <strong>deployment name</strong> chosen when the model was deployed, not the catalog model name; a mismatch returns DeploymentNotFound. The <strong>/openai/v1</strong> endpoint does <strong>not require an api-version</strong> query parameter, so the standard OpenAI client works by just changing its base URL, with Entra ID tokens or an API key.',
    tags: ['Deployments', 'v1 API']
  },
  {
    id: 'azure-ai-apps-agents-fc-132',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'With strict structured outputs, what arrives when the model declines a request, and how should code handle it?',
    hint: 'HTTP 200, but no object.',
    back: 'A safety refusal does not follow your schema: the message carries a <strong>refusal</strong> field (or refusal content part) instead of the parsed object, and the call still succeeds. Code must <strong>check for a refusal before parsing</strong> and route it (retry, human review, user message). Distinguish this from a <strong>content filter</strong> block, which shows up as finish_reason content_filter or an HTTP 400.',
    tags: ['Structured outputs', 'Refusals']
  },
  {
    id: 'azure-ai-apps-agents-fc-133',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Realtime API: WebRTC or WebSocket?',
    hint: 'Who holds the microphone?',
    back: '<strong>WebRTC</strong> for <strong>client-side</strong> audio (browser or mobile): it is built for low-latency media, handles jitter and packet loss, and connects with a short-lived ephemeral token so no key reaches the client. <strong>WebSocket</strong> for <strong>server-to-server</strong> scenarios, such as a backend relaying telephony audio, where latency to the client is not the bottleneck. Both carry the same gpt-realtime event protocol.',
    tags: ['Realtime API', 'Audio']
  },
  {
    id: 'azure-ai-apps-agents-fc-134',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Built-in file search tool or your own Azure AI Search index: which fits which RAG need?',
    hint: 'Convenience vs control.',
    back: '<strong>File search</strong>: upload files to a managed <strong>vector store</strong> and the service chunks, embeds and retrieves for you; ideal for user-supplied documents in a session or small corpora. <strong>Azure AI Search</strong>: you own the index, so you control chunking, hybrid and semantic ranking, filters, <strong>security trimming</strong>, enrichment skills, scale and freshness via indexers; the right choice for large, governed enterprise corpora.',
    tags: ['File search', 'Azure AI Search']
  },
  {
    id: 'azure-ai-apps-agents-fc-135',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Image input detail: what do low, high and auto change?',
    hint: 'One small view vs tiles.',
    back: '<strong>low</strong>: the model sees a single downscaled view at a small fixed token cost; fine for overall scene or layout questions. <strong>high</strong>: the image is also split into higher-resolution tiles, each costing extra tokens, which is needed for small text, dense diagrams and fine detail. <strong>auto</strong> (default) lets the service choose from the image size. Cropping to the region of interest often beats paying for high detail on the whole image.',
    tags: ['Multimodal', 'Vision']
  },
  {
    id: 'azure-ai-apps-agents-fc-136',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What should the generation prompt of a RAG app tell the model to do with retrieved sources?',
    hint: 'Use them, cite them, admit gaps.',
    back: 'Answer <strong>only from the supplied sources</strong>; <strong>cite</strong> the source ID or title next to each claim; say clearly when the sources <strong>do not contain the answer</strong> instead of filling the gap; and treat source text as data, not instructions. Label each chunk with an ID and metadata in the prompt so citations can be mapped back to documents by the app.',
    tags: ['RAG', 'Grounding']
  },
  {
    id: 'azure-ai-apps-agents-fc-137',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Why do follow-up questions break naive RAG, and what is the usual fix?',
    hint: 'Pronouns do not embed well.',
    back: 'Messages like "and the second one?" depend on earlier turns, so embedding or keyword-searching them alone retrieves noise. Add a <strong>query rewriting</strong> step: a (small, cheap) model condenses the chat history plus the latest message into a <strong>standalone search query</strong>, which is then used for retrieval. Agentic retrieval does this internally by taking the conversation history as input when it plans subqueries.',
    tags: ['RAG', 'Query rewriting']
  },
  {
    id: 'azure-ai-apps-agents-fc-138',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does a RAG app turn model citations into links users can click?',
    hint: 'Carry IDs through, map them back.',
    back: 'Keep each chunk\'s <strong>ID, title and source URL</strong> from retrieval, put the ID and title in the prompt beside the chunk text, and instruct the model to cite by ID. After generation, the app <strong>parses the cited IDs and maps them back</strong> to the stored URLs to render links or footnotes. Never ask the model to type URLs from memory, and drop or flag any ID that was not in the context.',
    tags: ['RAG', 'Citations']
  },
  {
    id: 'azure-ai-apps-agents-fc-139',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which Azure AI Search score can serve as a relevance cut-off before prompting, and why not the others?',
    hint: 'Only one sits on a fixed scale.',
    back: '<strong>@search.rerankerScore</strong> from the semantic ranker runs on a fixed <strong>0 to 4</strong> scale that reflects how well a passage answers the query, so a threshold (for example 2) means the same thing across queries. BM25 scores are unbounded and corpus-dependent, and <strong>RRF</strong> scores in hybrid queries are small rank-derived numbers; neither is comparable across queries, so neither makes a reliable cut-off.',
    tags: ['Semantic ranker', 'RAG']
  },
  {
    id: 'azure-ai-apps-agents-fc-140',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Responses API truncation: what do disabled and auto do when a chained conversation outgrows the context window?',
    hint: 'Fail loudly or forget quietly.',
    back: '<strong>disabled</strong> (the default): a request whose input exceeds the model\'s context window <strong>fails with an error</strong>. <strong>auto</strong>: the service <strong>drops items from the beginning of the conversation</strong> until the input fits, so long sessions continue at the cost of forgetting the earliest turns. Pin critical facts in the instructions or re-supply them, because auto may drop them.',
    tags: ['Responses API', 'Context window']
  },
  {
    id: 'azure-ai-apps-agents-fc-141',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'RAG or fine-tuning: which problem does each solve?',
    hint: 'Knowledge vs behavior.',
    back: '<strong>RAG</strong> supplies <strong>knowledge</strong>: current, private or fast-changing facts retrieved at query time, with citations. <strong>Fine-tuning</strong> changes <strong>behavior</strong>: tone, format, domain phrasing or a skill that prompts alone cannot teach, and can let a smaller model match a larger one. Fine-tuning is a poor way to store facts: they go stale, cannot be cited, and may be recalled unreliably. Many solutions combine both.',
    tags: ['RAG', 'Fine-tuning']
  },
  {
    id: 'azure-ai-apps-agents-fc-142',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Responses API vs Chat Completions: who keeps the conversation state?',
    hint: 'One can remember for you.',
    back: '<strong>Chat Completions</strong> is <strong>stateless</strong>: the client resends the full message history every turn. The <strong>Responses API</strong> can be <strong>stateful</strong>: chain turns with <strong>previous_response_id</strong> or attach a <strong>conversation</strong> object, and the service supplies prior items. It also adds built-in tools (code interpreter, file search, web search, MCP), background mode and reasoning-item handling. Set <strong>store</strong> to false for no server-side retention.',
    tags: ['Responses API', 'Conversation state']
  },
  {
    id: 'azure-ai-apps-agents-fc-143',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'When streaming a Responses API call, how do function-call arguments arrive?',
    hint: 'Fragments first, then a completion event.',
    back: 'As a series of <strong>response.function_call_arguments.delta</strong> events carrying string fragments, then a <strong>response.function_call_arguments.done</strong> event with the full argument string. Buffer fragments per output item, <strong>parse and execute only after the done event</strong>, then send the function_call_output. Text deltas for the user can still render as they arrive.',
    tags: ['Streaming', 'Function calling']
  },
  {
    id: 'azure-ai-apps-agents-fc-144',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What must a JSON schema look like for strict structured outputs to accept it?',
    hint: 'Nothing optional, nothing extra.',
    back: 'Every object must set <strong>additionalProperties: false</strong>, and <strong>every property must be listed in required</strong>; emulate an optional field with a union type that includes null. Only a supported subset of JSON Schema is allowed, with limits on nesting depth and total property count, and some keywords are not supported. The root must be an object. Violations are rejected when the request is made, not silently ignored.',
    tags: ['Structured outputs', 'JSON schema']
  },
  {
    id: 'azure-ai-apps-agents-fc-145',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'tool_choice: what do auto, none, required and a named function each do?',
    hint: 'From free choice to a forced call.',
    back: '<strong>auto</strong> (default when tools are present): the model decides whether to call a tool. <strong>none</strong>: no tool calls, text only. <strong>required</strong>: the model must call at least one tool but picks which. <strong>Named function</strong>: the model must call exactly that function. Combine with <strong>parallel_tool_calls</strong> set to false when calls must happen one at a time.',
    tags: ['Function calling', 'tool_choice']
  },
  {
    id: 'azure-ai-apps-agents-fc-146',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Walk through one function-calling round trip.',
    hint: 'The model never runs your code.',
    back: '1) Send the prompt plus <strong>tool definitions</strong> (name, description, JSON schema parameters). 2) The model returns a <strong>function_call</strong> item with a <strong>call_id</strong> and JSON arguments. 3) Your app <strong>validates the arguments and executes</strong> the function. 4) Send the result back as <strong>function_call_output</strong> with the same call_id. 5) The model writes the final answer, or requests more calls. Loop until no calls remain, with a maximum iteration cap.',
    tags: ['Function calling', 'Tool-augmented flows']
  },
  {
    id: 'azure-ai-apps-agents-fc-147',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'When should you set parallel_tool_calls to false?',
    hint: 'When one call depends on another\'s result.',
    back: 'By default a model can emit <strong>several tool calls in one turn</strong>, which is faster for independent lookups (weather in three cities). Set <strong>parallel_tool_calls</strong> to false when calls are <strong>dependent or side-effecting</strong>, such as verify-then-refund, so the model makes at most one call per turn and sees each result before deciding the next step.',
    tags: ['Function calling', 'Parallel tool calls']
  },
  {
    id: 'azure-ai-apps-agents-fc-148',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Prompt chaining, routing, or parallelization: which multistep pattern fits which problem?',
    hint: 'Sequence, branch, fan-out.',
    back: '<strong>Chaining</strong>: dependent steps in sequence (extract, then check, then draft), each with a focused prompt and a validation gate between steps. <strong>Routing</strong>: a cheap classifier step sends each input to the specialized prompt or model best suited to it. <strong>Parallelization</strong>: independent subtasks, or several votes on the same task, run at once and are aggregated. Prefer the simplest pattern that works; add agents only when steps cannot be predefined.',
    tags: ['Multistep pipelines', 'Workflow design']
  },
  {
    id: 'azure-ai-apps-agents-fc-149',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Responses API background mode: what problem does it solve and how do you use it?',
    hint: 'Do not hold the connection open.',
    back: 'Long reasoning runs (o3, o3-pro, deep analysis) can outlast client, gateway or proxy timeouts. Create the response with <strong>background: true</strong>; the call returns at once with a response ID and a <strong>queued</strong> or <strong>in_progress</strong> status. <strong>Poll</strong> by ID until the status is completed (or failed or cancelled), or <strong>stream from a cursor</strong> to resume after a drop. In-flight background responses can be <strong>cancelled</strong>.',
    tags: ['Background mode', 'Responses API']
  },
  {
    id: 'azure-ai-apps-agents-fc-150',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How do you keep reasoning context across turns when nothing may be stored server side?',
    hint: 'Carry it yourself, sealed.',
    back: 'Set <strong>store: false</strong> so no response is persisted, and add <strong>reasoning.encrypted_content</strong> to <strong>include</strong>. The service returns reasoning items as an encrypted blob that only it can read; your app passes them back in the input of the next request, so the model reuses its earlier reasoning, which matters most across function-call turns. previous_response_id and conversation objects need storage, so they are off the table.',
    tags: ['Reasoning models', 'Data retention']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_6;
