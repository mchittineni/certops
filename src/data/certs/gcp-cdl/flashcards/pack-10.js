export const GCP_CDL_FLASHCARDS_10 = [
  {
    id: "gcp-cdl-fc-226",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Decision rule: when is ML a better fit than hand-written rules?",
    hint: "Can you write the logic down, and does it stay put?",
    back: "Use <strong>ML</strong> when the patterns are <strong>too complex to write down</strong> (images, language, many interacting signals), <strong>change often</strong> (fraud tactics, customer behaviour) or must be applied at <strong>huge scale</strong>, and you have enough example data. Keep <strong>rules</strong> when the logic is <strong>known, stable and must be exact</strong>, such as a published tax table or a legal threshold; a model would only add error.",
    tags: ["Machine learning", "Rule-based systems"]
  },
  {
    id: "gcp-cdl-fc-227",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What three kinds of business value from ML does the exam guide highlight?",
    hint: "Rules, big data, scale.",
    back: "1. <strong>Replacing or simplifying rule-based systems</strong>: models learn patterns that brittle rule sets struggle to capture. 2. <strong>Deriving insights from large datasets</strong>, both structured (transactions) and unstructured (text, images, audio). 3. <strong>Scaling business decisions</strong>: applying consistent, learned judgement to millions of cases, such as pricing, routing or recommendations, in real time.",
    tags: ["Machine learning", "Business value"]
  },
  {
    id: "gcp-cdl-fc-228",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Give examples of insights ML can extract from unstructured data.",
    hint: "Text, images, audio, video.",
    back: "<strong>Text</strong>: route emails by topic, extract fields from contracts, gauge sentiment in reviews. <strong>Images</strong>: spot defects on a production line, detect crop disease in drone photos. <strong>Audio</strong>: transcribe and analyse calls. <strong>Video</strong>: detect events in footage. Most enterprise data is unstructured, and ML is what makes it analysable at scale.",
    tags: ["Machine learning", "Unstructured data"]
  },
  {
    id: "gcp-cdl-fc-229",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What does an ML project need before it is likely to succeed?",
    hint: "Objective, data, tolerance for error.",
    back: "A <strong>clear business objective</strong> and a measurable target. <strong>Enough relevant historical data</strong>, often <strong>labelled</strong> with the outcome to predict, that is <strong>representative</strong> of the cases the model will face. A <strong>real pattern</strong> in the data to learn. A process that can <strong>tolerate probabilistic errors</strong>, with human review where mistakes are costly. Missing any of these, start with data collection or simple rules.",
    tags: ["Machine learning", "Data requirements"]
  },
  {
    id: "gcp-cdl-fc-230",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "When is anomaly detection the right ML approach?",
    hint: "You know what normal looks like, not what bad looks like.",
    back: "Use <strong>anomaly detection</strong> when you need to find <strong>unusual events</strong> but have <strong>few or no labelled examples</strong> of them, such as new fraud schemes, equipment faults, security intrusions or sudden metric shifts. The model learns normal behaviour and flags deviations for people to investigate. When plenty of labelled examples of the bad outcome exist, a classification model is usually more precise.",
    tags: ["Anomaly detection", "Machine learning"]
  },
  {
    id: "gcp-cdl-fc-231",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "ML outputs are probabilistic. How should a business design around that?",
    hint: "Every model is sometimes wrong.",
    back: "Treat predictions as <strong>scores with uncertainty</strong>, not facts. Set <strong>thresholds</strong> based on the cost of each error type (a missed fraud case versus a blocked good customer), route <strong>low-confidence or high-stakes</strong> cases to human review, <strong>monitor</strong> accuracy in production, and keep a way to correct or override decisions. The goal is better decisions overall, not perfection.",
    tags: ["Machine learning", "Human oversight"]
  },
  {
    id: "gcp-cdl-fc-232",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Name the six data quality dimensions in the Digital Leader exam guide.",
    hint: "C, U, T, V, A, C.",
    back: "<strong>Completeness</strong>: all required values are present. <strong>Uniqueness</strong>: no duplicate records. <strong>Timeliness</strong>: data is current and available when needed. <strong>Validity</strong>: values follow formats, ranges and business rules. <strong>Accuracy</strong>: values correctly reflect the real world. <strong>Consistency</strong>: the same data matches across systems.",
    tags: ["Data quality"]
  },
  {
    id: "gcp-cdl-fc-233",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Validity vs accuracy: how can data be valid but still inaccurate?",
    hint: "Right shape, wrong fact.",
    back: "<strong>Validity</strong> checks that a value <strong>fits the rules</strong>: a correctly formatted address with a real postcode. <strong>Accuracy</strong> checks that it is <strong>true</strong>: the customer actually lives there. An address that passes every format check but belongs to someone who moved away years ago is valid yet inaccurate. Validity can be checked with rules; accuracy usually needs comparison with a trusted source.",
    tags: ["Data quality", "Validity", "Accuracy"]
  },
  {
    id: "gcp-cdl-fc-234",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "How can each data quality dimension be measured?",
    hint: "Turn each one into a percentage or a lag.",
    back: "<strong>Completeness</strong>: share of required fields that are non-null. <strong>Uniqueness</strong>: duplicate rate on a business key. <strong>Timeliness</strong>: lag between an event and its availability. <strong>Validity</strong>: share of values passing format, range and rule checks. <strong>Accuracy</strong>: match rate against a trusted reference. <strong>Consistency</strong>: agreement rate for the same entity across systems. Tools such as Knowledge Catalog data quality scans automate these checks.",
    tags: ["Data quality", "Knowledge Catalog"]
  },
  {
    id: "gcp-cdl-fc-235",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Why is more data not automatically better for an ML model?",
    hint: "Garbage in, garbage out, at scale.",
    back: "A model learns whatever its data contains. <strong>Inconsistent labels</strong> teach contradictory answers; <strong>unrepresentative samples</strong> leave groups or conditions the model barely saw; <strong>biased history</strong> gets reproduced; <strong>duplicates and stale records</strong> distort patterns. Adding more of the same flawed data, or a bigger model, cannot fix these. Improving <strong>label quality, coverage and relevance</strong> often beats both.",
    tags: ["Data quality", "Training data"]
  },
  {
    id: "gcp-cdl-fc-236",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is data drift, and why does it make data quality an ongoing concern?",
    hint: "The world changes after the model is trained.",
    back: "<strong>Data drift</strong> is when the data a model sees in production <strong>shifts away from its training data</strong>: new customer segments, changed products, a new sensor, altered behaviour. Accuracy can quietly decline even though the model has not changed. Continuous <strong>monitoring</strong> of input data and outcomes, with <strong>retraining</strong> on fresh, quality-checked data, keeps the model reliable.",
    tags: ["Data drift", "Model monitoring"]
  },
  {
    id: "gcp-cdl-fc-237",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is explainable AI, and what business value does it bring?",
    hint: "Why did the model say that?",
    back: "<strong>Explainable AI</strong> means providing understandable reasons for a model's outputs, such as which inputs most influenced a prediction. Business value: <strong>trust and adoption</strong> by users who act on the output, the ability to <strong>justify decisions</strong> to customers and regulators, faster <strong>debugging</strong> when a model misbehaves, and <strong>detecting bias</strong> hidden in its logic.",
    tags: ["Explainable AI", "Trust"]
  },
  {
    id: "gcp-cdl-fc-238",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Global vs local explanations: what does each tell you?",
    hint: "The whole model vs one prediction.",
    back: "<strong>Global</strong> explanations describe how the model behaves <strong>overall</strong>: which features matter most across all predictions, useful for validating the model and satisfying governance reviews. <strong>Local</strong> explanations describe <strong>one prediction</strong>: why this customer was flagged, often as feature attributions showing each input's contribution, useful for front-line staff and for answering an individual's questions.",
    tags: ["Explainable AI", "Feature attributions"]
  },
  {
    id: "gcp-cdl-fc-239",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is the interpretability vs accuracy trade-off, and how do businesses handle it?",
    hint: "Simple and clear, or complex and powerful.",
    back: "Simpler models such as linear models or small decision trees are <strong>easy to interpret</strong> but may be less accurate; complex models such as deep neural networks or large ensembles are often <strong>more accurate</strong> but opaque. In <strong>high-stakes or regulated</strong> decisions, teams may prefer interpretable models or pair complex ones with explanation tools and human review; for low-risk tasks, accuracy can take priority.",
    tags: ["Explainable AI", "Model selection"]
  },
  {
    id: "gcp-cdl-fc-240",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What themes does responsible AI cover?",
    hint: "Fair, private, safe, transparent, accountable.",
    back: "<strong>Fairness</strong>: avoid unjust outcomes for particular groups. <strong>Privacy</strong>: protect personal data and respect consent. <strong>Safety and security</strong>: prevent harmful outputs and misuse. <strong>Transparency and explainability</strong>: be clear when AI is used and why it decided. <strong>Accountability</strong>: named people own outcomes, with human oversight and recourse. It applies across the whole life cycle, from design to monitoring.",
    tags: ["Responsible AI"]
  },
  {
    id: "gcp-cdl-fc-241",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Where does bias in AI systems usually come from?",
    hint: "Mostly from data and choices, not malice.",
    back: "<strong>Historical bias</strong>: past decisions encoded in training data, such as old hiring patterns. <strong>Representation bias</strong>: some groups or conditions barely appear in the data. <strong>Labelling bias</strong>: inconsistent or subjective human labels. <strong>Measurement bias</strong>: proxies that track group membership rather than the real target. <strong>Deployment bias</strong>: using a model on a population or purpose it was not built for.",
    tags: ["Responsible AI", "Bias"]
  },
  {
    id: "gcp-cdl-fc-242",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "How do teams test a model for fairness in practice?",
    hint: "Slice the results by group.",
    back: "Evaluate the model's <strong>outcomes and errors separately for each relevant group</strong> (for example by age band, region or gender where lawful), not just overall accuracy. Compare measures such as selection rates, false positive and false negative rates. Investigate gaps, fix the data, features or thresholds, and <strong>repeat the checks after launch</strong>, because populations and data shift. Different fairness definitions can conflict, so the choice is a documented business and ethical decision.",
    tags: ["Responsible AI", "Fairness"]
  },
  {
    id: "gcp-cdl-fc-243",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What are Google's AI Principles, as updated in 2025?",
    hint: "Three headline principles.",
    back: "Google organises its AI Principles under three headings: <strong>Bold innovation</strong> (develop AI that assists people and tackles big challenges), <strong>Responsible development and deployment</strong> (apply oversight, safety, privacy and security across the life cycle, and mitigate unfair bias) and <strong>Collaborative progress, together</strong> (build tools and work with others so AI benefits society). Organizations often use such principles as a model for their own.",
    tags: ["Responsible AI", "AI Principles"]
  },
  {
    id: "gcp-cdl-fc-244",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is SynthID, and which responsible AI need does it serve?",
    hint: "An invisible label on AI-generated content.",
    back: "<strong>SynthID</strong>, from Google DeepMind, embeds an <strong>imperceptible digital watermark</strong> in AI-generated content such as images from Imagen (and also audio, video and text from supported models) that survives common edits and can be <strong>detected later</strong>. It supports <strong>transparency and provenance</strong>, helping organizations and the public tell AI-generated media from real media and reducing the risk of deception.",
    tags: ["SynthID", "Transparency", "Responsible AI"]
  },
  {
    id: "gcp-cdl-fc-245",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Why does explainability matter more in regulated industries?",
    hint: "Someone will ask why.",
    back: "In lending, insurance, healthcare, employment and public services, decisions materially affect people, and laws or regulators often require organizations to <strong>give reasons</strong>, <strong>offer recourse</strong> and <strong>demonstrate non-discrimination</strong>. Explainable models make it possible to answer individuals, pass audits and defend decisions; opaque ones create legal exposure and can block deployment altogether.",
    tags: ["Explainable AI", "Regulation"]
  },
  {
    id: "gcp-cdl-fc-246",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "How does the EU AI Act's risk-based approach affect businesses using AI?",
    hint: "Four tiers, from banned to barely regulated.",
    back: "<strong>Unacceptable risk</strong>: banned practices such as social scoring and manipulative systems. <strong>High risk</strong>: uses such as hiring, credit scoring, education and critical infrastructure must meet obligations for risk management, data quality, documentation, human oversight and transparency. <strong>Limited risk</strong>: transparency duties, such as telling people they are talking to a chatbot or labelling deepfakes. <strong>Minimal risk</strong>: largely unregulated. Obligations phase in over several years.",
    tags: ["Regulation", "EU AI Act", "Responsible AI"]
  },
  {
    id: "gcp-cdl-fc-247",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "Which privacy practices belong in a responsible AI project?",
    hint: "Use less, hide identities, honour consent.",
    back: "<strong>Data minimisation</strong>: use only the personal data the purpose needs. <strong>De-identification</strong>: mask or tokenise identifiers before training, for example with Sensitive Data Protection. <strong>Consent and purpose limits</strong>: use data only in ways people agreed to. <strong>Access controls and retention limits</strong> on training data. Privacy protects individuals and keeps the organization compliant.",
    tags: ["Responsible AI", "Privacy"]
  },
  {
    id: "gcp-cdl-fc-248",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What is a model card, and who benefits from one?",
    hint: "A nutrition label for a model.",
    back: "A <strong>model card</strong> is short documentation describing a model's <strong>intended use</strong>, training data, <strong>performance</strong> (including across groups), <strong>limitations</strong> and ethical considerations. Google introduced the idea and publishes cards for its models. It helps builders, buyers, risk teams and regulators decide whether a model fits a use case and what safeguards it needs.",
    tags: ["Responsible AI", "Model cards", "Transparency"]
  },
  {
    id: "gcp-cdl-fc-249",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "How can a highly accurate model still be irresponsible?",
    hint: "Averages hide things.",
    back: "Overall accuracy can hide <strong>much worse performance for a particular group</strong>; a model can be accurate yet <strong>use data without consent</strong>, be <strong>impossible to explain</strong> to the people it affects, be <strong>applied outside its intended purpose</strong>, or lack <strong>oversight and recourse</strong> when it errs. Responsible AI judges fairness, privacy, transparency and accountability alongside accuracy.",
    tags: ["Responsible AI", "Fairness"]
  },
  {
    id: "gcp-cdl-fc-250",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    front: "What business risks follow from ignoring responsible AI?",
    hint: "Legal, reputational, commercial.",
    back: "<strong>Legal and regulatory</strong>: fines, lawsuits and blocked launches under anti-discrimination, privacy and AI laws. <strong>Reputational</strong>: public backlash when biased or harmful outputs surface. <strong>Commercial</strong>: customers and employees stop trusting and using AI products, wasting the investment. Responsible AI is therefore a way to protect value and speed adoption, not just a compliance cost.",
    tags: ["Responsible AI", "Business risk"]
  }
];

export default GCP_CDL_FLASHCARDS_10;
