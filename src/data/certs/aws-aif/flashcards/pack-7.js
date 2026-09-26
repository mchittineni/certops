export const AWS_AIF_FLASHCARDS_7 = [
  {
    id: 'aws-aif-fc-151',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Name the four disadvantages of generative AI that AIF-C01 highlights, with a one-line meaning for each.',
    hint: 'Made up, opaque, wrong, and different every time.',
    back: '<strong>Hallucination</strong>: confident content that is fabricated. <strong>Interpretability</strong>: you cannot trace why the model produced an output. <strong>Inaccuracy</strong>: answers can be outdated, partly wrong, or miscalculated. <strong>Nondeterminism</strong>: the same prompt can give different outputs on different runs.',
    tags: ['Limitations']
  },
  {
    id: 'aws-aif-fc-152',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why do language models hallucinate?',
    hint: 'Plausible is not the same as true.',
    back: 'A language model generates the <strong>most plausible next tokens</strong> from patterns learned in training. It has <strong>no built-in fact-checking step</strong> and no lookup against a source of truth, so when it lacks the knowledge it can still produce fluent, confident text, including invented citations, figures, or policies.',
    tags: ['Hallucination']
  },
  {
    id: 'aws-aif-fc-153',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What measures reduce hallucination risk in a production application?',
    hint: 'Ground it, check it, and keep a human where it matters.',
    back: '<strong>Ground</strong> answers in retrieved authoritative content (RAG, Amazon Bedrock Knowledge Bases) and ask for citations; add a <strong>contextual grounding check</strong> in Amazon Bedrock Guardrails; use a <strong>low temperature</strong> for factual tasks; instruct the model to say it does not know; and require <strong>human review</strong> for high-stakes outputs. None of these alone makes hallucination impossible.',
    tags: ['Hallucination', 'Mitigation']
  },
  {
    id: 'aws-aif-fc-154',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What causes nondeterminism in generative AI, and how should you test such outputs?',
    hint: 'Sampling, and why exact-string asserts break.',
    back: 'Each next token is <strong>sampled from a probability distribution</strong>, so identical prompts can yield different wording. Test for <strong>properties</strong> instead of exact strings: required facts present, format valid, similarity above a threshold, or a judge model or human rating. Lower temperature reduces variation but does not remove it.',
    tags: ['Nondeterminism', 'Testing']
  },
  {
    id: 'aws-aif-fc-155',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is a knowledge cutoff, and how do you keep answers current despite it?',
    hint: 'A bigger model trained on the same snapshot does not help.',
    back: 'A model knows only what was in its training data, collected up to a <strong>cutoff date</strong>; facts that change afterwards (prices, rates, policies, products) come out stale. Fix it by <strong>retrieving current data at request time</strong> and placing it in the prompt (RAG) or by calling a live system through a tool. Retraining for every change is slow and costly.',
    tags: ['Inaccuracy', 'Knowledge cutoff', 'RAG']
  },
  {
    id: 'aws-aif-fc-156',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'If you ask an LLM to explain its own answer, does that solve the interpretability problem?',
    hint: 'The explanation is generated too.',
    back: '<strong>No.</strong> A self-explanation is just more generated text; it may sound reasonable yet <strong>not reflect the computation</strong> that actually produced the answer. Where decisions must be justified to auditors or customers (credit, insurance, hiring), use interpretable models or documented rules, and keep generative AI to assistive roles with human accountability.',
    tags: ['Interpretability']
  },
  {
    id: 'aws-aif-fc-157',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How does the contextual grounding check in Amazon Bedrock Guardrails work?',
    hint: 'Two scores, two thresholds, and a reference you must supply.',
    back: 'It needs a <strong>reference source</strong> (for example retrieved passages or the document being summarized) and the <strong>user query</strong>. It scores the response for <strong>grounding</strong> (is it supported by the source?) and <strong>relevance</strong> (does it answer the query?). Responses scoring below the thresholds you configure are blocked, which catches hallucinated details in RAG and summarization.',
    tags: ['Amazon Bedrock Guardrails', 'Hallucination']
  },
  {
    id: 'aws-aif-fc-158',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why are LLMs unreliable at exact arithmetic, and what is the usual design fix?',
    hint: 'They read tokens, not digits, and predict rather than compute.',
    back: 'Numbers are split into <strong>tokens</strong> and the model <strong>predicts</strong> an answer rather than executing a calculation, so long sums and counts are sometimes slightly wrong. Let the model <strong>extract or plan</strong>, and hand the calculation to <strong>deterministic code or a tool</strong> it calls, such as a function or an agent action.',
    tags: ['Inaccuracy', 'Tool use']
  },
  {
    id: 'aws-aif-fc-159',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Amazon Augmented AI vs SageMaker Ground Truth: which handles which human task?',
    hint: 'Before training or after prediction?',
    back: '<strong>SageMaker Ground Truth</strong> is for <strong>labeling data to train models</strong>. <strong>Amazon Augmented AI (A2I)</strong> adds <strong>human review of live predictions</strong>: rules such as a confidence threshold route outputs to a private, vendor, or public workforce, and results are stored. A2I is the answer when inaccurate outputs must be checked in production.',
    tags: ['Human review', 'Amazon A2I', 'SageMaker Ground Truth']
  },
  {
    id: 'aws-aif-fc-160',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Why is letting an LLM make regulated yes-or-no decisions, such as loan approvals, a poor design?',
    hint: 'Count the limitations that stack up.',
    back: 'It combines several limitations where they hurt most: <strong>no reliable explanation</strong> for adverse-action reasons, <strong>nondeterminism</strong> (the same applicant could get different outcomes), <strong>hallucination</strong> of facts, and hard-to-audit <strong>bias</strong>. Use interpretable scoring with documented features for the decision; generative AI can draft letters or summarize files around it.',
    tags: ['Interpretability', 'Regulated decisions']
  },
  {
    id: 'aws-aif-fc-161',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Match the model type to the job: text LLM, diffusion model, embedding model, multimodal model.',
    hint: 'Write, draw, measure similarity, combine inputs.',
    back: '<strong>Text LLM</strong>: generate or transform text (chat, summaries, drafts, code). <strong>Diffusion model</strong>: generate images from prompts. <strong>Embedding model</strong>: turn content into vectors for semantic search, clustering, and RAG retrieval. <strong>Multimodal model</strong>: accept several input types, such as images plus text, in one request.',
    tags: ['Model types']
  },
  {
    id: 'aws-aif-fc-162',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How does a diffusion model generate an image?',
    hint: 'It works backwards from static.',
    back: 'It is trained by adding noise to images and learning to <strong>reverse that noise</strong>. At generation time it starts from <strong>random noise</strong> and removes it step by step, <strong>guided by the text prompt</strong>, until an image emerges. Stable Diffusion and Amazon Nova Canvas are examples of this family.',
    tags: ['Diffusion models', 'Image generation']
  },
  {
    id: 'aws-aif-fc-163',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does an embedding model produce, and which Amazon Bedrock models provide it?',
    hint: 'Numbers, not words.',
    back: 'An embedding model outputs a <strong>vector</strong>, a list of numbers in which <strong>similar meanings sit close together</strong>. It powers semantic search, recommendations, clustering, and the retrieval step of RAG. In Amazon Bedrock, examples include <strong>Amazon Titan Text Embeddings</strong> and <strong>Cohere Embed</strong>.',
    tags: ['Embeddings', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-164',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Multimodal input vs multimodal output: why does the difference matter when choosing a model?',
    hint: 'Seeing a photo is not the same as drawing one.',
    back: 'A model that <strong>accepts images and text as input</strong> can analyze a damage photo alongside notes but still answers in text. A model that <strong>outputs images</strong> (text-to-image) creates pictures but may not analyze them. Check both the <strong>input and output modalities</strong> a model supports against what the use case needs.',
    tags: ['Multimodal', 'Model selection']
  },
  {
    id: 'aws-aif-fc-165',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What factors does the exam list for selecting a generative AI model, and what is an example of each?',
    hint: 'Five headings.',
    back: '<strong>Model type</strong> (LLM, diffusion, embedding, multimodal). <strong>Performance requirements</strong> (latency, throughput, accuracy bar). <strong>Capabilities</strong> (languages, context window, customization support). <strong>Constraints</strong> (budget, Regional availability, hosting control). <strong>Compliance</strong> (licensing, data residency, regulatory eligibility such as HIPAA).',
    tags: ['Model selection']
  },
  {
    id: 'aws-aif-fc-166',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What drives the latency users feel from a generative model, and how do you reduce it?',
    hint: 'First token, then every token after it.',
    back: '<strong>Model size</strong> (larger is slower), <strong>input length</strong> (more to process before the first token), and <strong>output length</strong> (every token takes time). Reduce it by choosing the <strong>smallest model that meets the quality bar</strong>, trimming prompts, capping output, and <strong>streaming</strong> so users see text as it is generated.',
    tags: ['Latency', 'Performance']
  },
  {
    id: 'aws-aif-fc-167',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Geographic vs global cross-Region inference profiles in Amazon Bedrock: which fits a data residency rule?',
    hint: 'How far may a request travel?',
    back: 'Both route requests across multiple Regions to absorb traffic bursts. A <strong>geographic profile</strong> (for example US or EU) keeps routing <strong>within that geography</strong>, so it can satisfy residency rules. A <strong>global profile</strong> may route to <strong>any supported Region worldwide</strong> for maximum capacity, so it does not suit data that must stay in one jurisdiction.',
    tags: ['Cross-Region inference', 'Data residency']
  },
  {
    id: 'aws-aif-fc-168',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Open-weight vs proprietary foundation models: what does each give you?',
    hint: 'Who holds the weights?',
    back: '<strong>Open-weight</strong> (for example Llama or Mistral models): you can download, inspect, host, and deeply customize the weights on infrastructure you control, such as SageMaker AI endpoints, subject to the license. <strong>Proprietary</strong>: reached through a provider or managed API; no weights, less control, but no hosting burden and often top capability.',
    tags: ['Model selection', 'Open-weight models']
  },
  {
    id: 'aws-aif-fc-169',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'GANs, VAEs, diffusion models and transformers: how does each generate content?',
    hint: 'Two networks competing, a compressed space, noise removal, next-token prediction.',
    back: '<strong>GAN</strong>: a generator and a discriminator train against each other until fakes look real. <strong>VAE</strong>: encodes data into a compressed latent space and decodes samples from it into new examples. <strong>Diffusion</strong>: learns to remove noise step by step, the basis of most current image models such as Stable Diffusion and Amazon Nova Canvas. <strong>Transformer</strong>: uses self-attention to predict the next token, the basis of LLMs.',
    tags: ['Model architectures', 'Generative AI']
  },
  {
    id: 'aws-aif-fc-170',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is the cost rule of thumb when two models both meet your quality bar?',
    hint: 'Bigger is not automatically better.',
    back: 'Choose the <strong>smallest, cheapest model that passes your evaluation</strong>. Smaller models cost less per token and respond faster, and at high volume the savings compound. Re-evaluate periodically, since newer small models often catch up with older large ones.',
    tags: ['Model selection', 'Cost']
  },
  {
    id: 'aws-aif-fc-171',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does Amazon Bedrock Model Distillation do, and when should you use it?',
    hint: 'A teacher and a student.',
    back: 'A larger <strong>teacher model</strong> generates responses for your use case, and those responses fine-tune a smaller <strong>student model</strong>. The result approaches the teacher\'s accuracy <strong>on that specific task</strong> with the student\'s lower cost and latency. Use it when only a big model is accurate enough but its price or speed is not acceptable.',
    tags: ['Model distillation', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-172',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Is every Amazon Bedrock model available in every AWS Region?',
    hint: 'Check before you design.',
    back: '<strong>No.</strong> Model availability, and support for features such as fine-tuning or batch inference, <strong>varies by Region and model</strong>. Confirm that the model you need is offered in the Regions your latency and residency requirements allow; cross-Region inference profiles can extend capacity within a geography.',
    tags: ['Amazon Bedrock', 'Regional availability']
  },
  {
    id: 'aws-aif-fc-173',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which compliance questions belong in a generative AI model selection checklist?',
    hint: 'Law, location, license, and what happens to your data.',
    back: 'Is the service <strong>eligible</strong> for your regime (HIPAA eligible, in scope for PCI DSS or SOC reports)? Can processing stay in <strong>approved Regions</strong>? Does the provider\'s <strong>license and acceptable use policy</strong> allow your use, including commercial resale? How are <strong>prompts and outputs handled</strong>? In Amazon Bedrock they are not used to train base models or shared with model providers.',
    tags: ['Compliance', 'Model selection']
  },
  {
    id: 'aws-aif-fc-174',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Where do you compare the capabilities of models offered in Amazon Bedrock?',
    hint: 'Start in the console before you write code.',
    back: 'The <strong>model catalog</strong> in the Amazon Bedrock console and the supported models documentation list each model\'s <strong>provider, input and output modalities, context length, languages, supported features</strong> (streaming, fine-tuning, batch), and Regions. Shortlist there, then evaluate the shortlist on your own prompts.',
    tags: ['Amazon Bedrock', 'Model selection']
  },
  {
    id: 'aws-aif-fc-175',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Inaccuracy vs hallucination: are they the same limitation?',
    hint: 'One is a subset of the other.',
    back: '<strong>Inaccuracy</strong> is the broad category: stale facts past the knowledge cutoff, arithmetic slips, misread inputs, partial answers. <strong>Hallucination</strong> is the specific case of <strong>fabricating</strong> content with no basis, such as a nonexistent citation. Fixes overlap (grounding, tools, review), but stale data is solved by retrieval, while fabrication also needs grounding checks.',
    tags: ['Inaccuracy', 'Hallucination']
  }
];

export default AWS_AIF_FLASHCARDS_7;
