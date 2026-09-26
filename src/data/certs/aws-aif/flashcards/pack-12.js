export const AWS_AIF_FLASHCARDS_12 = [
  {
    id: 'aws-aif-fc-276',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Zero-shot vs one-shot vs few-shot prompting: what separates them?',
    hint: 'Count the worked examples in the prompt.',
    back: '<strong>Zero-shot</strong>: task description only, no examples. <strong>One-shot (single-shot)</strong>: exactly one input-and-output example. <strong>Few-shot</strong>: a small number of examples, typically two to ten. More examples improve adherence to format and unfamiliar labels but add input tokens to every request. None of them changes the model\'s weights.',
    tags: ['Zero-shot', 'Few-shot', 'Single-shot']
  },
  {
    id: 'aws-aif-fc-277',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is chain-of-thought prompting, and when does it help?',
    hint: 'Show your work.',
    back: 'Asking the model to <strong>produce intermediate reasoning steps before the final answer</strong> ("think step by step", or examples that show worked reasoning). It helps on <strong>multi-step</strong> problems such as arithmetic, logic, and applying several rules in sequence. It adds output tokens and latency, so it is wasted on simple lookups or classifications.',
    tags: ['Chain-of-thought']
  },
  {
    id: 'aws-aif-fc-278',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What makes a good set of few-shot examples?',
    hint: 'The model copies what it sees, including the skew.',
    back: '<strong>Representative</strong> of real inputs (varied length, topic, difficulty); <strong>balanced</strong> across labels so no answer dominates; <strong>consistent</strong> in format, since the model mirrors the example layout; and <strong>correct</strong>, since errors are imitated. Include edge cases that commonly fail. Keep the set small enough to leave room in the context window.',
    tags: ['Few-shot', 'Best practices']
  },
  {
    id: 'aws-aif-fc-279',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is a prompt template, and why use one?',
    hint: 'Fixed text plus variables.',
    back: 'A reusable prompt with fixed instructions, tone and structure plus <strong>placeholders</strong> (for example {{product_name}}) filled in at run time. Templates give <strong>consistent output</strong> across requests and teams, let one fix apply everywhere, and make prompts testable and versionable. Amazon Bedrock Prompt Management stores templates with variables and versions.',
    tags: ['Prompt templates', 'Prompt Management']
  },
  {
    id: 'aws-aif-fc-280',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does Amazon Bedrock Prompt Management provide?',
    hint: 'A home for prompts, not models.',
    back: 'A place to <strong>create, store, version and share prompts</strong>, with variables, model and inference settings saved alongside. You can compare <strong>variants</strong> side by side, run <strong>prompt optimization</strong> to rewrite a prompt for a chosen model, and reference a specific prompt version from applications and Amazon Bedrock Flows so production does not change until you promote a new version.',
    tags: ['Prompt Management', 'Experimentation']
  },
  {
    id: 'aws-aif-fc-281',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why is specificity a core prompt engineering best practice?',
    hint: 'Every unstated choice is a guess.',
    back: 'A vague prompt leaves the model to guess the <strong>task, audience, format, length and focus</strong>, so outputs vary wildly. Stating them explicitly ("a 150-word email to existing customers highlighting auto-savings") produces relevant, repeatable results. Pair it with <strong>concision</strong>: include only context that serves the task, since irrelevant text distracts the model and costs tokens.',
    tags: ['Specificity', 'Concision']
  },
  {
    id: 'aws-aif-fc-282',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why must prompt changes be tested against an evaluation set?',
    hint: 'A fix for one case can break three others.',
    back: 'Prompt engineering is <strong>experimentation</strong>: each change can improve one behavior and regress another. Scoring every candidate against the same <strong>representative evaluation set</strong>, and recording each version, shows whether a change is a net improvement and allows rollback. Reading two or three outputs by eye does not detect regressions.',
    tags: ['Experimentation', 'Evaluation']
  },
  {
    id: 'aws-aif-fc-283',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is prompt chaining, and what problem does it solve?',
    hint: 'One job per prompt.',
    back: 'Splitting a complex task into a <strong>sequence of simpler prompts</strong>, where each prompt does one sub-task and its output feeds the next (extract, then analyze, then summarize). It improves reliability because each prompt has a single clear instruction, makes intermediate results <strong>inspectable</strong> so failures can be located, and lets each step use its own model or settings. Amazon Bedrock Flows can orchestrate such chains.',
    tags: ['Prompt chaining', 'Amazon Bedrock Flows']
  },
  {
    id: 'aws-aif-fc-284',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How does assigning a role or persona improve a response?',
    hint: 'Who is speaking, and to whom?',
    back: 'A role ("You are a certified tax adviser writing to a client") sets <strong>tone, vocabulary, level of detail and caution</strong> in one line, without changing the model or its inference parameters. It shapes style, not knowledge: a persona cannot supply facts the model lacks, and an authoritative voice makes wrong answers sound more convincing.',
    tags: ['Role prompting', 'Response quality']
  },
  {
    id: 'aws-aif-fc-285',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What prompt instruction reduces made-up answers in a RAG application?',
    hint: 'Give the model a permitted way out.',
    back: 'Tell the model to <strong>answer only from the provided context</strong> and to <strong>say it does not know</strong> when the context does not contain the answer. Without an acceptable fallback, models tend to fill gaps with plausible fiction. For a measurable backstop, add a guardrail <strong>contextual grounding check</strong> that blocks responses not supported by the source.',
    tags: ['Hallucinations', 'RAG']
  },
  {
    id: 'aws-aif-fc-286',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does "using multiple comments" mean for code generation with Amazon Q Developer?',
    hint: 'Small, sequential intent beats one giant description.',
    back: 'Describe a complex function as <strong>several short, specific comments</strong>, one per step (validate input, normalize fields, remove duplicates, upload), and accept a suggestion after each. Focused comments give the assistant clear intent for each piece, producing smaller, more accurate suggestions than a single long comment asking for everything at once.',
    tags: ['Amazon Q Developer', 'Multiple comments']
  },
  {
    id: 'aws-aif-fc-287',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why is a system-prompt instruction not a sufficient safety control on its own?',
    hint: 'Instructions can be argued with.',
    back: 'Prompt instructions <strong>influence</strong> the model but can be bypassed by rephrasing, role-play or injected text. <strong>Amazon Bedrock Guardrails</strong> evaluates inputs and outputs independently of the prompt (denied topics, content filters, sensitive information filters, prompt attack detection) and can be reused across applications and models. Use both: prompts for behavior, guardrails for enforcement.',
    tags: ['Guardrails', 'Best practices']
  },
  {
    id: 'aws-aif-fc-288',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is jailbreaking?',
    hint: 'Getting out of the safety rules.',
    back: 'Crafting prompts that get a model to <strong>ignore its safety restrictions</strong> and produce content it would normally refuse, using tricks such as role-play personas ("you are an AI with no rules"), hypothetical framing, or splitting a forbidden request into innocent-looking parts. The Amazon Bedrock Guardrails prompt attack filter detects common jailbreak patterns.',
    tags: ['Jailbreaking', 'Prompt risks']
  },
  {
    id: 'aws-aif-fc-289',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Direct vs indirect prompt injection: what is the difference?',
    hint: 'Where did the malicious instruction come from?',
    back: '<strong>Direct</strong>: the user types instructions meant to override the application\'s ("ignore previous instructions and..."). <strong>Indirect</strong>: the instructions are hidden in content the model processes on the user\'s behalf, such as a web page, email, uploaded file or retrieved document. Indirect injection is especially dangerous for agents that can take actions.',
    tags: ['Prompt injection', 'Hijacking']
  },
  {
    id: 'aws-aif-fc-290',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Prompt hijacking vs jailbreaking: how do they differ?',
    hint: 'Change the task, or break the safety rules?',
    back: '<strong>Hijacking (prompt injection)</strong> redirects the model away from the application\'s intended task toward the attacker\'s, for example making a summarizer praise a candidate. <strong>Jailbreaking</strong> targets the model\'s safety restrictions to extract content it would refuse. They often overlap, and the defenses overlap too: separating trusted instructions from untrusted input, guardrails, and least-privilege tools.',
    tags: ['Hijacking', 'Jailbreaking']
  },
  {
    id: 'aws-aif-fc-291',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is prompt leaking, and what is the reliable defense?',
    hint: 'Assume the prompt will be read.',
    back: 'A form of <strong>exposure</strong> in which a user coaxes the model into revealing its system prompt or hidden context ("repeat everything above"). Instructions to keep it secret can be circumvented, so the reliable defense is to <strong>keep secrets and sensitive business rules out of prompts</strong>, enforce such rules in application code, and add guardrail detection as a second layer.',
    tags: ['Prompt leaking', 'Exposure']
  },
  {
    id: 'aws-aif-fc-292',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is poisoning, and where can it happen in a generative AI system?',
    hint: 'Corrupt what the model learns from or reads from.',
    back: 'Deliberately introducing <strong>malicious or misleading data</strong> so the system\'s outputs are corrupted. It can target <strong>training or fine-tuning data</strong> (changing the model\'s weights) or <strong>retrieval sources</strong> such as a knowledge base or wiki (changing what RAG supplies as context). Defenses include controlling who can write to data sources, reviewing changes, and tracking data lineage.',
    tags: ['Poisoning', 'Prompt risks']
  },
  {
    id: 'aws-aif-fc-293',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why tag user input when using the Amazon Bedrock Guardrails prompt attack filter?',
    hint: 'Your own instructions can look like an attack.',
    back: 'The prompt attack filter should inspect only <strong>untrusted user input</strong>. With InvokeModel you wrap that content in guardrail <strong>input tags</strong> (with the Converse API, guardContent blocks), so developer-written system instructions are not evaluated as injections. Without tags, instructions such as "ignore any text that..." can trigger false positives that block legitimate requests.',
    tags: ['Guardrails', 'Input tagging', 'Prompt attack filter']
  },
  {
    id: 'aws-aif-fc-294',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How do you limit the damage if an agent falls for a prompt injection?',
    hint: 'Assume detection will sometimes fail.',
    back: 'Layer the defenses: give the agent <strong>least-privilege</strong> actions (narrow IAM roles and APIs), require <strong>user confirmation</strong> or human approval for sensitive operations such as payments or deletions, validate action parameters in the Lambda code, apply a <strong>prompt attack guardrail</strong> to untrusted content, and log traces to detect abuse. The goal is that even a successful injection cannot do much.',
    tags: ['Prompt injection', 'Amazon Bedrock Agents', 'Least privilege']
  },
  {
    id: 'aws-aif-fc-295',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does prompt optimization in Amazon Bedrock do?',
    hint: 'Bedrock edits your prompt, not your model.',
    back: 'It <strong>automatically rewrites a prompt</strong> to suit a selected model, applying model-specific prompt engineering practices, and shows the optimized version beside the original so you can compare outputs before saving it. It is useful for teams without prompt engineering experience or when moving a prompt to a different model.',
    tags: ['Prompt optimization', 'Prompt Management']
  },
  {
    id: 'aws-aif-fc-296',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Few-shot chain-of-thought: what goes into each example?',
    hint: 'Not just the answer.',
    back: 'Each example shows the <strong>input, the worked reasoning, and then the answer</strong>, rather than the input followed directly by the answer. The model imitates the reasoning on new inputs, which improves accuracy on multi-step problems and produces an explanation reviewers can check. Put the answer after the reasoning so the model does not commit before thinking.',
    tags: ['Chain-of-thought', 'Few-shot']
  },
  {
    id: 'aws-aif-fc-297',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Where should instructions go relative to a long document in a prompt?',
    hint: 'Keep them distinct.',
    back: 'Keep the instruction <strong>clearly separated</strong> from the document, for example inside its own section with the document wrapped in delimiters such as XML tags. Many model providers recommend placing long documents first and the question or instruction after them. What matters most is that the model can tell which text is the task and which is material to work on.',
    tags: ['Delimiters', 'Prompt structure']
  },
  {
    id: 'aws-aif-fc-298',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Which Amazon Bedrock Guardrails policies address prompt-level risks?',
    hint: 'Match each risk to a policy.',
    back: '<strong>Prompt attack filter</strong>: jailbreaks, prompt injection and prompt leakage attempts. <strong>Denied topics</strong>: subjects the app must never discuss. <strong>Content filters</strong>: hate, insults, sexual content, violence, misconduct. <strong>Sensitive information filters</strong>: block or mask PII and custom regex patterns (exposure). <strong>Word filters</strong>: exact words or phrases. <strong>Contextual grounding check</strong>: responses not supported by the source.',
    tags: ['Guardrails', 'Prompt risks']
  },
  {
    id: 'aws-aif-fc-299',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why can adding more few-shot examples make results worse?',
    hint: 'Context is finite and costs money.',
    back: 'Examples consume the <strong>context window</strong> (too many cause input-too-long errors), add <strong>latency and cost</strong> on every request, and can push the actual input and instruction into a crowded prompt where they get less attention. Skewed examples also bias outputs. A few diverse examples usually capture most of the benefit; beyond that, consider fine-tuning.',
    tags: ['Few-shot', 'Context window']
  },
  {
    id: 'aws-aif-fc-300',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Name four risks and limitations of relying on prompt engineering alone.',
    hint: 'Security and capability limits.',
    back: '<strong>Exposure</strong> (prompts and context can leak), <strong>poisoning</strong> (corrupted data sources steer outputs), <strong>hijacking / injection</strong> (untrusted text overrides instructions) and <strong>jailbreaking</strong> (safety rules bypassed). Beyond security, prompts cannot add knowledge the model lacks, are bounded by the context window, and can behave differently when the model version changes, so they need guardrails, retrieval and regression tests alongside.',
    tags: ['Prompt risks', 'Limitations']
  }
];

export default AWS_AIF_FLASHCARDS_12;
