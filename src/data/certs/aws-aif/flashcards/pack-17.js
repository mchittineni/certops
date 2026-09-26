export const AWS_AIF_FLASHCARDS_17 = [
  {
    id: 'aws-aif-fc-401',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What does a SageMaker Model Card record?",
    hint: "Purpose, risk, training, results.",
    back: "A <strong>SageMaker Model Card</strong> is a single governed document for a model: <strong>intended uses</strong> (and out-of-scope uses), <strong>risk rating</strong>, model overview, <strong>training details</strong> (data, objective, hyperparameters), <strong>evaluation results</strong>, and additional notes such as ethical considerations and caveats. It supports audits, approvals, and handoffs between teams.",
    tags: ["SageMaker Model Cards"]
  },
  {
    id: 'aws-aif-fc-402',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What risk rating values and approval statuses does a SageMaker Model Card support?",
    hint: "Four ratings, four statuses.",
    back: "<strong>Risk rating:</strong> Unknown, Low, Medium, High. <strong>Approval status:</strong> Draft, PendingReview, Approved, Archived. Governance teams use the rating to decide how much scrutiny a model needs and the status to record sign-off. Cards are versioned, and an <strong>Archived</strong> card is meant to receive no further updates but can still be exported, which preserves the record.",
    tags: ["SageMaker Model Cards", "Governance"]
  },
  {
    id: 'aws-aif-fc-403',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "AWS AI Service Cards vs SageMaker Model Cards: who writes each and for what?",
    hint: "Managed services vs your own models.",
    back: "<strong>AWS AI Service Cards</strong> are written by <strong>AWS</strong> for its managed AI services and models (for example Rekognition face matching, Textract AnalyzeID, Amazon Nova/Titan): intended uses, limitations, design choices, and deployment best practices. <strong>SageMaker Model Cards</strong> are written by <strong>you</strong> to document the models your organization builds or customizes.",
    tags: ["AI Service Cards", "SageMaker Model Cards"]
  },
  {
    id: 'aws-aif-fc-404',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "How do SageMaker Model Cards relate to Model Registry?",
    hint: "Documentation follows the version.",
    back: "Model Cards are <strong>integrated with SageMaker Model Registry</strong>: a card can be associated with a registered <strong>model package version</strong>, so the documentation of purpose, training, and evaluation travels with the exact version being approved and deployed. This avoids documentation that describes a different version than the one in production.",
    tags: ["Model Registry", "SageMaker Model Cards"]
  },
  {
    id: 'aws-aif-fc-405',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "How do you give a model card to someone without AWS access?",
    hint: "A common document format.",
    back: "<strong>Export the model card to PDF</strong> from SageMaker and share the file. This is simpler and safer than creating IAM credentials for an auditor or regulator, and the PDF captures the card's intended uses, risk rating, training details, and evaluation results at that point in time.",
    tags: ["SageMaker Model Cards", "Audit"]
  },
  {
    id: 'aws-aif-fc-406',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Open-weight model vs fully open source model: what is the difference for transparency?",
    hint: "Weights are not the whole story.",
    back: "An <strong>open-weight</strong> model publishes its trained parameters (often with the architecture and a license) so it can be inspected, self-hosted, and fine-tuned. A more <strong>fully open</strong> release also documents or publishes the <strong>training data</strong>, code, and evaluation. Without training data documentation you cannot fully assess bias, data quality, or IP and privacy risks, even with open weights.",
    tags: ["Open source models", "Transparency"]
  },
  {
    id: 'aws-aif-fc-407',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Why must a model's license be reviewed before production use?",
    hint: "Commercial, modification, attribution.",
    back: "Model licenses are legally binding and vary: some forbid <strong>commercial use</strong>, some restrict <strong>modification or redistribution</strong>, some impose <strong>acceptable use</strong> policies, user-count thresholds, or attribution. Fine-tuning usually creates a derivative still bound by the license, and hosting privately does not change the terms. Licensing review is part of responsible model selection.",
    tags: ["Licensing", "Model selection"]
  },
  {
    id: 'aws-aif-fc-408',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What should documentation of a training dataset include to support transparency?",
    hint: "Where from, what in it, what allowed.",
    back: "<strong>Provenance</strong> (sources and how collected), <strong>composition</strong> (groups, time range, languages, class balance), <strong>licensing and consent</strong> (rights to use for training), <strong>preprocessing</strong> (cleaning, filtering, labeling method), known <strong>gaps and biases</strong>, and <strong>intended uses</strong>. This lets reviewers judge fairness and legal risk without necessarily releasing the raw data.",
    tags: ["Data documentation", "Provenance"]
  },
  {
    id: 'aws-aif-fc-409',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "State the interpretability-performance tradeoff in one line, with an example.",
    hint: "Scorecard vs neural network.",
    back: "More complex models often <strong>perform better</strong> on complex data but are <strong>harder to interpret</strong>: a logistic regression scorecard is easy to explain but may be less accurate than a deep neural network or large boosted ensemble whose reasoning needs post-hoc explanation. The right balance depends on the stakes of the decision.",
    tags: ["Interpretability", "Tradeoffs"]
  },
  {
    id: 'aws-aif-fc-410',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "When should a team favor interpretability over a few points of accuracy?",
    hint: "Consider who is affected and who asks why.",
    back: "When decisions are <strong>high impact</strong> (credit, employment, benefits, health, legal), when <strong>regulators or affected people</strong> are entitled to reasons, when errors must be diagnosed quickly, or when trust is fragile. For low-stakes uses such as ranking banners or recommendations, higher-performing black-box models with lighter explanation are usually acceptable.",
    tags: ["Tradeoffs", "Risk-based design"]
  },
  {
    id: 'aws-aif-fc-411',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "How can transparency conflict with safety for a generative AI application?",
    hint: "Who else reads what you publish?",
    back: "Publishing exact <strong>system prompts, guardrail filter lists, or detailed model internals</strong> can help attackers craft <strong>jailbreaks and prompt injections</strong>; releasing detailed training data can enable <strong>membership inference</strong> or re-identification; very precise scores and explanations can enable <strong>model extraction</strong> or evasion. Balance by disclosing purpose, limitations, and categories of safeguards rather than bypass-enabling detail.",
    tags: ["Safety vs transparency"]
  },
  {
    id: 'aws-aif-fc-412',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is membership inference and why does it limit how much training data you disclose?",
    hint: "Was this person in the training set?",
    back: "A <strong>membership inference</strong> attack determines whether a specific record was part of a model's training data, typically by probing the model's confidence on that record. Combined with detailed released data or rich outputs, it can reveal sensitive facts (for example that a patient was in a disease dataset). Mitigations: publish summaries rather than raw records, provide controlled access, limit output detail, and use privacy techniques such as differential privacy.",
    tags: ["Membership inference", "Privacy"]
  },
  {
    id: 'aws-aif-fc-413',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is model extraction, and how do detailed explanations increase its risk?",
    hint: "Copying a model through its API.",
    back: "<strong>Model extraction</strong> (model stealing) reconstructs a functional copy of a model by sending many queries and learning from the responses. Precise probabilities and per-feature explanations give an attacker far more signal per query. Mitigations include coarser outputs, fewer reason codes, rate limiting and anomaly detection on query patterns, and authentication.",
    tags: ["Model extraction", "Safety vs transparency"]
  },
  {
    id: 'aws-aif-fc-414',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is a global surrogate model and what is its key quality measure?",
    hint: "Imitation, measured.",
    back: "A <strong>global surrogate</strong> is an interpretable model (such as a shallow decision tree) trained to imitate a black-box model's <strong>predictions</strong>, so its rules approximate how the black box behaves overall. Its key measure is <strong>fidelity</strong>: how closely it agrees with the black box on held-out data. A low-fidelity surrogate gives a misleading explanation.",
    tags: ["Surrogate models", "Explainability"]
  },
  {
    id: 'aws-aif-fc-415',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Name the three human-centered design principles for explainable AI.",
    hint: "Amplified, unbiased, learning.",
    back: "<strong>Design for amplified decision-making</strong> (support people making high-stakes, high-pressure decisions with clear information), <strong>design for unbiased decision-making</strong> (help people recognize and mitigate bias in both AI and human processes), and <strong>design for human and AI learning</strong> (cognitive apprenticeship, personalization, and user-centered design).",
    tags: ["Human-centered design"]
  },
  {
    id: 'aws-aif-fc-416',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What does design for amplified decision-making look like in practice?",
    hint: "Stress, speed, and a human in charge.",
    back: "Present <strong>clear, concise</strong> information that highlights what matters, reduce cognitive load under time pressure, show uncertainty, and keep the <strong>person in control</strong> with easy ways to question or override. The AI amplifies human judgment in critical moments rather than replacing it or flooding the user with detail.",
    tags: ["Human-centered design", "Decision support"]
  },
  {
    id: 'aws-aif-fc-417',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is cognitive apprenticeship in human and AI learning?",
    hint: "Two-way teaching.",
    back: "<strong>Cognitive apprenticeship</strong> means the AI learns from human experts (their corrections and decisions become training signal) while people, especially less experienced ones, learn from the AI's highlighted patterns and explanations. The system and its users improve together instead of the AI simply replacing expertise.",
    tags: ["Cognitive apprenticeship", "Human-centered design"]
  },
  {
    id: 'aws-aif-fc-418',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Why should explanations be personalized to the audience?",
    hint: "Same model, different readers.",
    back: "Different users need different explanations: <strong>data scientists</strong> want feature attributions and metrics, <strong>operational staff</strong> want a few key factors in their own terms, and <strong>affected individuals</strong> want plain-language reasons and what they can do next. One dense technical view for everyone either overwhelms or under-serves most readers.",
    tags: ["Personalization", "Explainability"]
  },
  {
    id: 'aws-aif-fc-419',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is user-centered design when building explainable AI interfaces?",
    hint: "Build with the users, not for them.",
    back: "<strong>User-centered design</strong> involves the intended users throughout: researching their tasks and context, prototyping explanations with them, testing, and iterating on their feedback. It prevents explanation features that suit the model's builders but confuse the people who actually make decisions with the tool.",
    tags: ["User-centered design"]
  },
  {
    id: 'aws-aif-fc-420',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What is automation bias and how can interface design counter it?",
    hint: "Rubber-stamping.",
    back: "<strong>Automation bias</strong> is the tendency to over-trust an automated recommendation and accept it without real scrutiny. Countermeasures: show the <strong>evidence</strong> behind each recommendation and its uncertainty, ask reviewers to record their <strong>own judgment</strong>, randomly insert known cases to test attention, and <strong>monitor agreement rates and review times</strong> so meaningless oversight becomes visible.",
    tags: ["Automation bias", "Human oversight"]
  },
  {
    id: 'aws-aif-fc-421',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Why show a confidence indicator alongside an AI recommendation?",
    hint: "Calibrated trust.",
    back: "Confidence helps users <strong>calibrate trust</strong>: they can accept high-confidence suggestions more readily and scrutinize low-confidence ones. Paired with a simple <strong>override</strong> that captures the reason, it keeps humans in control and produces feedback. Confidence should be presented plainly (for example high, medium, low) rather than as unexplained decimals.",
    tags: ["Human oversight", "Confidence"]
  },
  {
    id: 'aws-aif-fc-422',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Is an open-weight model always the more responsible choice than a proprietary API model?",
    hint: "Transparency is one factor among several.",
    back: "Not always. Open weights give <strong>inspectability, self-hosting, and control</strong>, but you take on security, patching, safety tuning, and guardrails yourself, and training data may still be undisclosed. A proprietary model on a managed service may offer <strong>AI Service Card</strong> documentation, built-in safeguards, and indemnity terms. Choose based on transparency needs, risk, license, and ability to operate the model safely.",
    tags: ["Model selection", "Open-weight models"]
  },
  {
    id: 'aws-aif-fc-423',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "What role do source citations play in explainability for generative AI?",
    hint: "A black box can still show its sources.",
    back: "An LLM's internal reasoning is not inspectable, but with <strong>RAG</strong> (for example Amazon Bedrock Knowledge Bases or Amazon Q Business) the response can include <strong>citations</strong> to the retrieved passages. Users can verify claims against the source, which builds justified trust and exposes hallucinations, even though the model itself stays a black box.",
    tags: ["Source citations", "Explainability"]
  },
  {
    id: 'aws-aif-fc-424',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd4',
    front: "Why is a shallow decision tree considered transparent while a 500-tree ensemble is not?",
    hint: "Can a person follow the path?",
    back: "A <strong>shallow decision tree</strong> has a handful of readable if-then splits, so a person can trace exactly how any input reaches its output. A <strong>500-tree ensemble</strong> averages hundreds of trees, each with many splits; no human can follow the combined logic for a decision, so it needs post-hoc explanation such as SHAP.",
    tags: ["Transparent models", "Decision trees"]
  },
  {
    id: 'aws-aif-fc-425',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'Amazon Bedrock Guardrails Classic tier vs Standard tier: what changes?',
    hint: 'Languages, robustness, and where the processing may run.',
    back: 'Safeguard tiers apply to <strong>content filters, prompt attacks and denied topics</strong>. <strong>Classic</strong> supports English, French and Spanish with established performance. <strong>Standard</strong> is more robust against prompt attacks, supports many more languages, handles harmful content hidden in code, adds prompt leakage detection and allows longer denied topic definitions, but <strong>requires guardrail cross-Region inference</strong>, which a strict data-residency review must consider.',
    tags: ['Bedrock Guardrails', 'Safeguard tiers']
  }
];

export default AWS_AIF_FLASHCARDS_17;
