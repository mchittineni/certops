export const AWS_AIF_FLASHCARDS_15 = [
  {
    id: 'aws-aif-fc-351',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'List the core dimensions of responsible AI as AWS defines them.',
    hint: 'Eight of them; two are paired.',
    back: '<strong>Fairness</strong>, <strong>explainability</strong>, <strong>privacy and security</strong>, <strong>safety</strong>, <strong>controllability</strong>, <strong>veracity and robustness</strong>, <strong>governance</strong> and <strong>transparency</strong>. Exam questions often describe a failure (unequal service, invented facts, harmful output, no way to steer the system) and ask which dimension it violates.',
    tags: ['Responsible AI dimensions']
  },
  {
    id: 'aws-aif-fc-352',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Fairness vs inclusivity: how do they differ?',
    hint: 'Equal treatment of users vs who can use it at all.',
    back: '<strong>Fairness</strong>: the system\'s outcomes and quality of service are equitable across groups (no group gets worse answers or decisions). <strong>Inclusivity</strong>: the system is designed so diverse people can use and benefit from it at all, across languages, abilities, literacy levels and cultures. A system can treat its users fairly yet still exclude people who cannot access it.',
    tags: ['Fairness', 'Inclusivity']
  },
  {
    id: 'aws-aif-fc-353',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Veracity vs robustness: what does each mean?',
    hint: 'Truthful output vs output that holds up under stress.',
    back: '<strong>Veracity</strong>: outputs are truthful and factually correct (no hallucinated facts or citations). <strong>Robustness</strong>: the system keeps producing correct outputs when inputs are noisy, unusual or adversarial (typos, stickers on images, jailbreak attempts). AWS pairs them as one dimension: achieving correct system outputs even with unexpected or adversarial inputs.',
    tags: ['Veracity', 'Robustness']
  },
  {
    id: 'aws-aif-fc-354',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Controllability vs governance: what separates them?',
    hint: 'Steering the system vs steering the organization.',
    back: '<strong>Controllability</strong>: technical mechanisms to monitor and steer the AI system\'s behavior (override, adjust, shut off, correct drift). <strong>Governance</strong>: organizational best practices across the AI supply chain, including providers and deployers: policies, roles, reviews, documentation, and accountability. Governance usually requires controllability to be enforceable.',
    tags: ['Controllability', 'Governance']
  },
  {
    id: 'aws-aif-fc-355',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'What does the safety dimension of responsible AI cover?',
    hint: 'Harmful output and misuse.',
    back: 'Preventing <strong>harmful system output and misuse</strong>: instructions for dangerous activities, self-harm content, violent or hateful text, and advice that could injure users. Controls include guardrails (content filters, denied topics), restricted scope, red teaming before launch, and escalation to humans for high-risk requests.',
    tags: ['Safety']
  },
  {
    id: 'aws-aif-fc-356',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'What is Amazon Bedrock Guardrails?',
    hint: 'Configurable safeguards, independent of the prompt.',
    back: 'A capability that applies <strong>configurable safeguards to prompts and responses</strong>: content filters, denied topics, word filters, sensitive information filters, contextual grounding checks, Automated Reasoning checks and prompt attack detection. One guardrail can be reused across applications and models, including models outside Bedrock through the ApplyGuardrail API.',
    tags: ['Guardrails']
  },
  {
    id: 'aws-aif-fc-357',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Denied topics vs content filters vs word filters in Amazon Bedrock Guardrails: when do you use each?',
    hint: 'Subject, harm category, exact term.',
    back: '<strong>Denied topics</strong>: a subject the app must not engage with, described in natural language (for example investment advice). <strong>Content filters</strong>: predefined harm categories (hate, insults, sexual, violence, misconduct) with adjustable strength. <strong>Word filters</strong>: exact words or phrases, including a managed profanity list and custom terms such as codenames.',
    tags: ['Guardrails', 'Denied topics', 'Content filters']
  },
  {
    id: 'aws-aif-fc-358',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Can a guardrail filter prompts and responses differently?',
    hint: 'Two dials per category.',
    back: 'Yes. Content filter strengths are set <strong>separately for prompts and for responses</strong>, per category, and a guardrail can return different blocked messages for blocked inputs and blocked outputs. This lets, for example, a support service accept users\' descriptions of violence while strictly filtering violence in its own replies.',
    tags: ['Guardrails', 'Content filters']
  },
  {
    id: 'aws-aif-fc-359',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Demographic parity vs equal opportunity: what does each fairness definition require?',
    hint: 'Equal outcomes for everyone, or equal outcomes for the people who qualify?',
    back: '<strong>Demographic parity</strong>: each group receives positive predictions (for example, loan approvals) at the same rate, regardless of how many members actually qualify. <strong>Equal opportunity</strong>: among people who truly qualify, each group has the same <strong>true positive rate</strong>, so qualified applicants are approved equally often. When base rates differ between groups the two usually cannot both hold, so the team must choose the definition that fits the use case and document why.',
    tags: ['Fairness', 'Bias metrics', 'Responsible AI']
  },
  {
    id: 'aws-aif-fc-360',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Automated Reasoning checks vs contextual grounding checks: how do they differ?',
    hint: 'Formal logic vs model-based scoring.',
    back: '<strong>Automated Reasoning checks</strong> turn policy documents into a <strong>formal logical model</strong> and use mathematical verification to determine whether a response is consistent with those rules, returning explainable findings (valid, invalid, and why). <strong>Contextual grounding checks</strong> use model-based scoring of whether a response is supported by, and relevant to, retrieved text. Use Automated Reasoning for precise rule-based domains such as eligibility or compliance policies.',
    tags: ['Automated Reasoning checks', 'Contextual grounding']
  },
  {
    id: 'aws-aif-fc-361',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Can Amazon Bedrock Guardrails moderate images?',
    hint: 'Multimodal content filters.',
    back: 'Yes. Content filters can evaluate <strong>image content</strong> as well as text for categories such as hate, insults, sexual, violence and misconduct, so one guardrail can screen user-uploaded photos and generated images alongside text prompts and responses. Word filters and grounding checks remain text-only.',
    tags: ['Guardrails', 'Image content filters']
  },
  {
    id: 'aws-aif-fc-362',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Guardrail working draft vs numbered version: which should production call?',
    hint: 'One of them can change under you.',
    back: 'Every guardrail has an editable <strong>working draft</strong> (DRAFT). <strong>Creating a version</strong> takes an immutable, numbered snapshot of its policies. Production should reference a <strong>specific version number</strong> so edits to the draft cannot silently change live behaviour; test changes against the draft, publish a new version, then switch the application to it. Rolling back means pointing at the previous version.',
    tags: ['Bedrock Guardrails', 'Versioning']
  },
  {
    id: 'aws-aif-fc-363',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'How does model size relate to responsible, sustainable model selection?',
    hint: 'Big is not automatically better.',
    back: 'Larger models use <strong>more compute and energy per request</strong> (and usually cost more). Responsible selection picks the <strong>smallest or most efficient model that meets the quality requirement</strong>, reserving large models for tasks that genuinely need them. Techniques such as distillation help reach large-model quality with a smaller model.',
    tags: ['Sustainability', 'Model selection']
  },
  {
    id: 'aws-aif-fc-364',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Name AWS choices that reduce the environmental impact of AI workloads.',
    hint: 'Model, hardware, capacity, reuse.',
    back: 'Reuse and adapt <strong>pre-trained models</strong> instead of training from scratch; choose <strong>efficient model sizes</strong>; run on purpose-built accelerators such as <strong>AWS Inferentia</strong> (inference) and <strong>AWS Trainium</strong> (training) for better performance per watt; use <strong>managed and serverless</strong> options such as Amazon Bedrock to avoid idle capacity; and track emissions with the <strong>AWS Sustainability console</strong>.',
    tags: ['Sustainability', 'AWS Inferentia', 'AWS Trainium']
  },
  {
    id: 'aws-aif-fc-365',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Where do you get AWS estimates of the carbon emissions from your AWS usage?',
    hint: 'A newer service replaced the Billing console tool.',
    back: 'The <strong>AWS Sustainability</strong> service and console, which quantify the greenhouse gas emissions attributable to your account\'s AWS usage and show trends by service and Region. It replaced the older <strong>Customer Carbon Footprint Tool</strong> in the Billing console, which AWS deprecated in mid-2026. Carbon data exports can also deliver the estimates to Amazon S3.',
    tags: ['Sustainability', 'Carbon footprint']
  },
  {
    id: 'aws-aif-fc-366',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Name the main legal risks of using generative AI.',
    hint: 'Five examples from the exam guide.',
    back: '<strong>Intellectual property infringement</strong> claims over outputs or training data; <strong>biased outputs</strong> leading to discrimination claims; <strong>loss of customer trust</strong> after harmful or embarrassing outputs; <strong>end-user risk</strong>, where users are harmed by relying on outputs; and <strong>hallucinations</strong>, false statements the organization may be held liable for.',
    tags: ['Legal risk']
  },
  {
    id: 'aws-aif-fc-367',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'What IP protection does AWS offer for generative AI outputs?',
    hint: 'Uncapped, for Amazon\'s own models.',
    back: 'AWS provides <strong>uncapped intellectual property indemnity</strong> for outputs of <strong>generally available Amazon Nova models</strong>, covering third-party claims that those outputs infringe IP (subject to the AWS Service Terms). The standard IP indemnity also covers claims about the services and the data used to train them. Third-party models are governed by their own providers\' terms.',
    tags: ['Intellectual property', 'Indemnification', 'Amazon Nova']
  },
  {
    id: 'aws-aif-fc-368',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'How do you reduce legal liability from hallucinated answers in a customer-facing assistant?',
    hint: 'You own what your bot says.',
    back: 'Ground answers in <strong>authoritative sources</strong> with RAG, instruct the model to answer only from them, add <strong>contextual grounding</strong> or <strong>Automated Reasoning</strong> checks, keep the assistant\'s scope narrow, show sources to users, and route consequential questions (refunds, eligibility, medical or legal matters) to humans. Disclaimers help but do not remove accountability.',
    tags: ['Hallucinations', 'Legal risk']
  },
  {
    id: 'aws-aif-fc-369',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'What is end-user risk in generative AI?',
    hint: 'Harm to the person using it.',
    back: 'The risk that <strong>people using the system are harmed</strong> by relying on its output: dangerous health advice, wrong financial guidance, unsafe instructions. It is highest in regulated or safety-critical domains. Mitigate with narrow scope, guardrails, clear escalation to qualified humans, expert review of design and outputs, and testing with realistic high-risk prompts.',
    tags: ['End-user risk', 'Safety']
  },
  {
    id: 'aws-aif-fc-370',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'How do invisible watermarks support responsible generative AI?',
    hint: 'Was this image machine-made?',
    back: 'Amazon image and video models such as Titan Image Generator, Nova Canvas and Nova Reel embed an <strong>invisible watermark</strong> (Nova also adds C2PA content credentials), and Amazon Bedrock offers watermark detection. This supports <strong>transparency</strong> and provenance, helps counter misinformation, and protects customer trust. It does not exempt content from IP law.',
    tags: ['Watermarking', 'Transparency']
  },
  {
    id: 'aws-aif-fc-371',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Beyond accuracy and price, what should responsible model selection weigh?',
    hint: 'Fit, risk, provenance, footprint.',
    back: 'The model\'s documented <strong>intended uses and limitations</strong> (AWS AI Service Cards, model cards); results of <strong>safety, bias and robustness</strong> evaluations on your own data; <strong>license terms and training-data provenance</strong>, including IP indemnity; data handling and privacy commitments; and <strong>environmental impact</strong>, favoring the most efficient model that meets requirements.',
    tags: ['Model selection', 'Responsible AI']
  },
  {
    id: 'aws-aif-fc-372',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'What is red teaming, and why do it before launching a generative AI app?',
    hint: 'Attack it before users do.',
    back: 'Structured <strong>adversarial testing</strong> in which testers try to make the system misbehave: jailbreaks, prompt injection, eliciting harmful, biased or false output, leaking data. Doing it before launch finds failure modes while they are cheap to fix and informs guardrail configuration, protecting users and customer trust.',
    tags: ['Red teaming', 'Customer trust']
  },
  {
    id: 'aws-aif-fc-373',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Why is "the model provider is responsible" a weak legal position for a deployer?',
    hint: 'Think about who faces the customer.',
    back: 'The organization that <strong>deploys</strong> an AI system to its customers is generally accountable for what the system says and does to them: misleading answers, discriminatory outcomes, unsafe advice. Provider terms and indemnities cover narrow areas (such as IP claims on outputs), not the deployer\'s duty of care. Deployers need their own guardrails, testing, monitoring and human oversight.',
    tags: ['Legal risk', 'Governance']
  },
  {
    id: 'aws-aif-fc-374',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Which Bedrock Guardrails feature addresses each: harmful categories, a forbidden subject, PII, ungrounded answers, jailbreaks?',
    hint: 'Five problems, five policies.',
    back: 'Harmful categories: <strong>content filters</strong>. Forbidden subject: <strong>denied topics</strong>. PII: <strong>sensitive information filters</strong> (block or mask, plus custom regex). Ungrounded answers: <strong>contextual grounding checks</strong> (or <strong>Automated Reasoning checks</strong> for rule-based policies). Jailbreaks and injection: the <strong>prompt attack</strong> filter.',
    tags: ['Guardrails']
  },
  {
    id: 'aws-aif-fc-375',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Why is transparency about AI use a responsible AI practice?',
    hint: 'Informed choices.',
    back: 'AWS defines transparency as enabling stakeholders to <strong>make informed choices about their engagement</strong> with an AI system. Telling users when they are dealing with AI, what it is for and its limits, and marking AI-generated content, sets correct expectations and protects trust; discovering undisclosed AI later tends to damage it.',
    tags: ['Transparency', 'Customer trust']
  }
];

export default AWS_AIF_FLASHCARDS_15;
