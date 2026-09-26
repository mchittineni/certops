export const AZURE_AI_APPS_AGENTS_FLASHCARDS_10 = [
  {
    id: 'azure-ai-apps-agents-fc-226',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'frequency_penalty vs presence_penalty: how does each discourage repetition?',
    hint: 'Scaled by count vs a flat charge.',
    back: 'Both range from -2.0 to 2.0. <strong>frequency_penalty</strong> lowers a token\'s likelihood <strong>in proportion to how many times</strong> it has already appeared, which curbs verbatim repetition of words and phrases. <strong>presence_penalty</strong> applies a <strong>flat penalty once a token has appeared at all</strong>, nudging the model toward new words and topics. Negative values encourage repetition. Neither is supported on reasoning models.',
    tags: ['Model parameters', 'Penalties']
  },
  {
    id: 'azure-ai-apps-agents-fc-227',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does the stop parameter do, and what are its limits?',
    hint: 'A tripwire for generation.',
    back: 'Generation ends as soon as the model produces any of the given <strong>stop sequences</strong> (up to four), and the stop text itself is <strong>not included</strong> in the output. The finish reason is then stop. Use it to end at a marker such as ### END or before a new turn label. It ends output; it does not ban a word from appearing earlier, and a badly chosen sequence can cut an answer short.',
    tags: ['Model parameters', 'Stop sequences']
  },
  {
    id: 'azure-ai-apps-agents-fc-228',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What do the common finish_reason values tell you?',
    hint: 'Why did the model stop?',
    back: '<strong>stop</strong>: natural end or a stop sequence. <strong>length</strong>: the output token cap or context window was hit, so the output is truncated. <strong>content_filter</strong>: the completion was filtered by a guardrail. <strong>tool_calls</strong>: the model wants the app to run one or more tools before it can continue. Always check it before trusting or parsing the output.',
    tags: ['finish_reason', 'Troubleshooting']
  },
  {
    id: 'azure-ai-apps-agents-fc-229',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does the seed parameter guarantee, and what is system_fingerprint for?',
    hint: 'Best effort, not a promise.',
    back: 'With the same <strong>seed</strong>, prompt and parameters, the service <strong>tries</strong> to sample deterministically, so repeated calls usually match; it is <strong>best effort, not guaranteed</strong>. <strong>system_fingerprint</strong> identifies the backend configuration; if it changes between calls, differences are expected. Combine seed with low temperature for regression tests, and compare outputs semantically rather than byte for byte.',
    tags: ['Model parameters', 'Reproducibility']
  },
  {
    id: 'azure-ai-apps-agents-fc-230',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does logit_bias work, and when is it the wrong tool?',
    hint: 'Token IDs, not words.',
    back: 'It maps <strong>token IDs</strong> (from the model\'s tokenizer) to a bias from <strong>-100 to 100</strong> added before sampling: <strong>-100 effectively bans</strong> a token and <strong>100 effectively forces</strong> it. Words often span several tokens and variants (capitalized, leading space), so coverage is fiddly. Not supported on reasoning models. For a fixed label set, structured outputs with an enum is usually cleaner.',
    tags: ['Model parameters', 'logit_bias']
  },
  {
    id: 'azure-ai-apps-agents-fc-231',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'max_tokens, max_completion_tokens, max_output_tokens: which applies where?',
    hint: 'Two APIs, two model families.',
    back: '<strong>max_tokens</strong>: legacy Chat Completions cap on output for non-reasoning models. <strong>max_completion_tokens</strong>: Chat Completions cap for <strong>reasoning models</strong>, covering hidden reasoning plus visible output (non-reasoning models accept it too). <strong>max_output_tokens</strong>: the <strong>Responses API</strong> equivalent, again including reasoning tokens. A cap that is too small returns truncated or empty output with a length or incomplete status.',
    tags: ['Model parameters', 'Output length']
  },
  {
    id: 'azure-ai-apps-agents-fc-232',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Why repeat key instructions at the end of a long prompt?',
    hint: 'What the model read last.',
    back: 'With long inputs, models can show <strong>recency bias</strong>: instructions far from the end get less weight. Microsoft\'s guidance is to <strong>repeat the important instructions after the content</strong>, near the question, and to keep instructions and content in clearly delimited sections. Test both placements against an evaluation set, because the effect varies by model.',
    tags: ['Prompt engineering', 'Long context']
  },
  {
    id: 'azure-ai-apps-agents-fc-233',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Why state the audience and reading level in a prompt?',
    hint: 'Who is going to read this?',
    back: 'Without it, models default to a general adult, often technical register. Naming the <strong>audience</strong> (a ten-year-old, a CFO, a field technician), the <strong>reading level</strong> and style cues (short sentences, everyday words, one example) directly shapes vocabulary, depth and tone. It is cheaper and more reliable than adjusting sampling parameters or truncating output.',
    tags: ['Prompt engineering', 'Audience']
  },
  {
    id: 'azure-ai-apps-agents-fc-234',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What is priming the output?',
    hint: 'Start the answer for the model.',
    back: 'Ending the prompt with the <strong>beginning of the desired response</strong>, such as "Keywords:", "Summary:" or an opening bracket, so the model <strong>continues directly in that format</strong>. It suppresses chatty preambles and steers structure, and is most useful where structured outputs are unavailable. The primer text is not repeated in the output, so the app must add it back if needed.',
    tags: ['Prompt engineering', 'Output priming']
  },
  {
    id: 'azure-ai-apps-agents-fc-235',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What does breaking the task down look like inside a single prompt?',
    hint: 'Find first, answer second.',
    back: 'Ask the model to work in explicit stages within one call: for example, <strong>first extract the relevant passages or facts</strong>, <strong>then answer using only those</strong>, or first list entities and then classify each. Staging focuses attention and exposes intermediate results you can log. When stages need validation or different models, move to prompt chaining across calls instead.',
    tags: ['Prompt engineering', 'Task decomposition']
  },
  {
    id: 'azure-ai-apps-agents-fc-236',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Why specify the output structure explicitly instead of relying on a token cap?',
    hint: 'Shape vs truncation.',
    back: 'A token cap only <strong>truncates</strong>; it cannot create headings, bullet counts or word limits. Stating the <strong>exact structure</strong> (sections, number of items, words per item, order), ideally with a short example, gives consistent, complete outputs. Use the cap as a safety net, set comfortably above the expected length, and use structured outputs when a machine consumes the result.',
    tags: ['Prompt engineering', 'Output structure']
  },
  {
    id: 'azure-ai-apps-agents-fc-237',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Positive or negative instructions: which work better in a system message?',
    hint: 'Give the model somewhere to go.',
    back: 'Prefer <strong>specific positive instructions</strong> that say what to do ("ask only for the last four digits", "explain terms in plain language") over bare prohibitions ("don\'t ask for the card number"). Keep hard prohibitions where needed, but pair them with the alternative behavior. Capitals and repetition are unreliable substitutes for clarity.',
    tags: ['Prompt engineering', 'System message']
  },
  {
    id: 'azure-ai-apps-agents-fc-238',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'gpt-5 answers are too long: verbosity, reasoning_effort or an output cap?',
    hint: 'Three knobs, three effects.',
    back: '<strong>verbosity</strong> (low, medium, high) shapes how expansive the <strong>final answer</strong> is while reasoning is unchanged, so it is the first choice for concise but complete replies. <strong>reasoning_effort</strong> changes <strong>thinking depth</strong>, affecting quality, latency and cost. An <strong>output cap</strong> is a hard stop that truncates mid-sentence. Pair verbosity with explicit length guidance in the prompt.',
    tags: ['gpt-5', 'Verbosity']
  },
  {
    id: 'azure-ai-apps-agents-fc-239',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Why might a reasoning model return plain text when you asked for Markdown, and how do you fix it?',
    hint: 'A magic phrase in the developer message.',
    back: 'Some reasoning models, such as o1 and o3-mini, avoid <strong>Markdown formatting</strong> in API output by default. Azure\'s guidance is to begin the developer message with the string <strong>Formatting re-enabled</strong>, then state your formatting requirements. Moving the request between system and developer roles does not help, because reasoning models treat system messages as developer messages.',
    tags: ['Reasoning models', 'Markdown']
  },
  {
    id: 'azure-ai-apps-agents-fc-240',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Developer messages vs system messages: how do reasoning models treat them?',
    hint: 'Same job, newer name.',
    back: 'Reasoning models support the <strong>developer</strong> role for the app\'s instructions; a <strong>system</strong> message sent to them is treated as a developer message, so do not send both. Keep developer messages <strong>concise and goal-focused</strong>: state the objective, constraints and output format, and skip step-by-step reasoning scripts, because the model already reasons internally.',
    tags: ['Reasoning models', 'Developer messages']
  },
  {
    id: 'azure-ai-apps-agents-fc-241',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What is self-consistency, and when is it worth the cost?',
    hint: 'Ask several times, take the majority.',
    back: 'Sample <strong>several independent chain-of-thought answers</strong> at moderate temperature, then return the <strong>most common final answer</strong>. Errors tend to scatter while correct reasoning converges, so accuracy rises on problems with a single checkable answer (math, classification, extraction of a value). Cost and latency scale with the number of samples; it does not help open-ended writing.',
    tags: ['Self-consistency', 'Reliability']
  },
  {
    id: 'azure-ai-apps-agents-fc-242',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does chain of verification reduce factual errors in a draft?',
    hint: 'Turn claims into questions.',
    back: '1) Draft an answer. 2) Have the model <strong>list verification questions</strong> for each factual claim. 3) <strong>Answer each question independently</strong> of the draft, ideally with retrieval or a tool so it is not just rereading itself. 4) <strong>Revise</strong> the draft to match the verified answers. It targets individual claims, unlike a vague "is this correct?" self-check.',
    tags: ['Self-critique', 'Verification']
  },
  {
    id: 'azure-ai-apps-agents-fc-243',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Can you trust a model\'s written chain of thought as an explanation of its answer?',
    hint: 'Plausible is not faithful.',
    back: 'Not fully. Written reasoning is <strong>not guaranteed to be faithful</strong> to how the answer was produced: plausible steps can accompany a wrong answer, and flawed steps can accompany a right one. Evaluate <strong>outcomes</strong> directly (recompute with code, compare with ground truth, test tool results) and use the reasoning as a <strong>diagnostic</strong>. For reasoning models you see only summaries, not the raw chain of thought.',
    tags: ['Chain of thought', 'Evaluation']
  },
  {
    id: 'azure-ai-apps-agents-fc-244',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which generation settings make tool calling more reliable?',
    hint: 'Precision over creativity.',
    back: 'Use <strong>low temperature</strong> (on non-reasoning models) so tool choice and arguments are not sampled creatively; define functions with <strong>strict JSON schemas</strong> and enums; set <strong>tool_choice</strong> when a call is mandatory; disable <strong>parallel_tool_calls</strong> for dependent actions; keep the tool list short and well described; and validate arguments server side before executing anything.',
    tags: ['Function calling', 'Model parameters']
  },
  {
    id: 'azure-ai-apps-agents-fc-245',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How do you get chain-of-thought accuracy from a non-reasoning model without showing the reasoning to users?',
    hint: 'Separate fields.',
    back: 'Ask for <strong>structured output with separate fields</strong>, such as reasoning and final_answer, in that order so the reasoning is written first. The app <strong>logs the reasoning</strong> for audit or debugging and <strong>displays only the final answer</strong>. The model must actually write the reasoning to benefit; "think silently" gives a non-reasoning model no written scratchpad.',
    tags: ['Chain of thought', 'Structured outputs']
  },
  {
    id: 'azure-ai-apps-agents-fc-246',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Which properties of a few-shot example set bias a classifier?',
    hint: 'Counts and order.',
    back: '<strong>Label imbalance</strong> (the model over-predicts the majority label shown), <strong>order and recency</strong> (examples placed last weigh more), and <strong>unrepresentative examples</strong> that miss borderline cases. Balance labels, interleave them, include ambiguous cases with the right label, and keep examples consistent with your labeling guidelines. Re-evaluate after any change.',
    tags: ['Few-shot learning', 'Bias']
  },
  {
    id: 'azure-ai-apps-agents-fc-247',
    difficulty: 'hard',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Why can temperature 0 still give different outputs on repeated calls?',
    hint: 'Ties, hardware and backends.',
    back: 'Greedy decoding picks the top token, but <strong>near-ties</strong> can flip because of floating-point nondeterminism in parallel GPU computation, batching with other requests, and <strong>backend or model updates</strong> (a changed system_fingerprint). Once one token differs, the rest of the output diverges. Add a seed for best-effort repeatability and compare results semantically.',
    tags: ['Model parameters', 'Reproducibility']
  },
  {
    id: 'azure-ai-apps-agents-fc-248',
    difficulty: 'easy',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'Where should persona, tone and style rules live in a chat app?',
    hint: 'Once, not every turn.',
    back: 'In the <strong>system (or developer) message</strong>, which applies to the whole conversation: persona, language variety, formality, forms of address, formatting and what to avoid. Appending style rules to each user message is error-prone and wastes tokens. Keep the message concise, and verify tone with an evaluation set rather than a few manual spot checks.',
    tags: ['System message', 'Tone']
  },
  {
    id: 'azure-ai-apps-agents-fc-249',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'What components make up a well-structured system message for a generative app?',
    hint: 'Task, rules, safety, format.',
    back: '<strong>Role and task</strong> definition, <strong>tone and style</strong>, <strong>grounding rules</strong> (use supplied sources, cite them, say when the answer is not there), <strong>safety guidance</strong> (Microsoft publishes safety system message templates for harms, jailbreaks and copyright), <strong>tool-use rules</strong> where relevant, and the <strong>output format</strong>. Version it and evaluate every change.',
    tags: ['System message', 'Prompt engineering']
  },
  {
    id: 'azure-ai-apps-agents-fc-250',
    difficulty: 'medium',
    certId: 'azure-ai-apps-agents',
    domainId: 'd2',
    front: 'How does prompt length affect cost and latency, and what can you trim safely?',
    hint: 'Every input token is paid for on every call.',
    back: 'Input tokens are billed on every request and add processing time, so long system messages, many few-shot examples and verbose tool definitions multiply cost at scale. Trim <strong>redundant instructions</strong>, keep only examples that <strong>measurably help</strong>, retrieve facts instead of embedding them, and keep static content first so prompt caching can apply. Confirm with evaluations that quality holds.',
    tags: ['Prompt engineering', 'Cost optimization']
  }
];

export default AZURE_AI_APPS_AGENTS_FLASHCARDS_10;
