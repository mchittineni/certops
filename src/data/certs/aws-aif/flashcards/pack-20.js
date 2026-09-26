export const AWS_AIF_FLASHCARDS_20 = [
  {
    id: 'aws-aif-fc-476',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Name the six data governance strategy areas listed in the AIF-C01 exam guide.",
    hint: "Lifecycle, logs, location, watching, keeping.",
    back: "<strong>Data lifecycles</strong> (collection through deletion), <strong>logging</strong>, <strong>residency</strong> (where data is stored and processed), <strong>monitoring</strong>, <strong>observation</strong> (ongoing review of how data and models behave), and <strong>retention</strong> (how long data is kept and when it is destroyed).",
    tags: ["Data governance"]
  },
  {
    id: 'aws-aif-fc-477',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Is Amazon Bedrock model invocation logging on by default, and where can it send logs?",
    hint: "Off until you turn it on.",
    back: "It is <strong>disabled by default</strong>. When enabled, it captures request and response data (text, and optionally image and embedding data) with metadata for invocations in the account and Region, delivered to <strong>Amazon CloudWatch Logs</strong>, <strong>Amazon S3</strong>, or both. Large payloads can be written to S3 even when CloudWatch is the main destination.",
    tags: ["Invocation logging", "Amazon Bedrock"]
  },
  {
    id: 'aws-aif-fc-478',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "How should invocation logs that contain personal data be governed?",
    hint: "Treat logs as sensitive data.",
    back: "Encrypt the log group or bucket with a <strong>customer managed KMS key</strong>, restrict access with least-privilege IAM, apply <strong>CloudWatch Logs data protection policies</strong> to detect and <strong>mask</strong> identifiers (only principals with <code>logs:Unmask</code> see clear text), set a <strong>retention period</strong>, and consider which content needs logging at all.",
    tags: ["Logging", "Data protection"]
  },
  {
    id: 'aws-aif-fc-479',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is the default retention of a CloudWatch Logs log group?",
    hint: "Longer than you probably want.",
    back: "<strong>Never expire</strong>: log events are kept indefinitely until you set a retention period (options range from 1 day to 10 years). Governance policies should set explicit retention on every log group, including Bedrock invocation logs and SageMaker endpoint logs, to meet both minimum-keep and must-delete requirements.",
    tags: ["Data retention", "CloudWatch Logs"]
  },
  {
    id: 'aws-aif-fc-480',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "How do you meet a data residency requirement for a Bedrock application?",
    hint: "Pick the place.",
    back: "Create resources and invoke models in the <strong>required Region</strong>; Bedrock stores and processes content in the Region you use and does not replicate it elsewhere by default. Store source data, knowledge bases, and logs in the same Region. Enforce it with an <strong>SCP</strong> denying other Regions (<code>aws:RequestedRegion</code>), and choose cross-Region inference profiles carefully.",
    tags: ["Data residency", "Regions"]
  },
  {
    id: 'aws-aif-fc-481',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: 'How can IAM force every model invocation to go through one approved guardrail?',
    hint: 'A condition key on the invoke actions.',
    back: 'Allow <code>bedrock:InvokeModel</code> and <code>bedrock:InvokeModelWithResponseStream</code> (which also govern Converse and ConverseStream) only when the <strong><code>bedrock:GuardrailIdentifier</code></strong> condition matches the approved guardrail ARN (optionally pinned to a version), and add an explicit <strong>Deny</strong> when it does not. Calls without that guardrail are then refused whatever other permissions exist. Caveats: roles used for <code>RetrieveAndGenerate</code> or <code>InvokeAgent</code> can hit access denied, and input tags can skip prompt checks, though responses are always evaluated.',
    tags: ['Bedrock Guardrails', 'IAM']
  },
  {
    id: 'aws-aif-fc-482',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What are the stages of a data lifecycle, and why does AI complicate the last one?",
    hint: "Deleting from a model is not like deleting a file.",
    back: "<strong>Create/collect, store, use/process, share, archive, destroy.</strong> AI complicates destruction because data may be copied into processed datasets, vector indexes, and <strong>model weights</strong>. Lineage tells you where data went; indexes can be re-synced after deletion, but a fine-tuned model that learned from the data may need assessment or retraining to honor erasure.",
    tags: ["Data lifecycle", "Right to erasure"]
  },
  {
    id: 'aws-aif-fc-483',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "S3 Lifecycle vs S3 Object Lock: which enforces deletion and which enforces keeping?",
    hint: "Opposite directions.",
    back: "<strong>S3 Lifecycle</strong> rules <strong>transition</strong> objects to cheaper classes and <strong>expire</strong> (delete) them on a schedule, implementing retention limits. <strong>S3 Object Lock</strong> prevents deletion or overwrite during a retention period or legal hold, implementing minimum-keep requirements. Lifecycle cannot permanently remove a version that Object Lock protects.",
    tags: ["Data retention", "S3"]
  },
  {
    id: 'aws-aif-fc-484',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Object Lock retention period vs legal hold: when do you use each?",
    hint: "Known end date or not.",
    back: "A <strong>retention period</strong> protects an object version until a fixed date (governance mode can be bypassed with special permission; compliance mode cannot). A <strong>legal hold</strong> has <strong>no expiry</strong>: it protects the version until someone with permission removes it, which fits litigation or investigations of unknown length. Both can apply to the same version.",
    tags: ["S3 Object Lock", "Legal hold"]
  },
  {
    id: 'aws-aif-fc-485',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Monitoring vs observation in AI data governance: what is the difference?",
    hint: "Metrics and alarms vs looking at what actually happens.",
    back: "<strong>Monitoring</strong> tracks defined signals automatically: CloudWatch metrics for invocations, latency, throttles, and tokens; Model Monitor drift reports; alarms. <strong>Observation</strong> is ongoing review of real behavior and outputs: sampling conversations, human evaluation, reviewing logs for misuse or quality issues. Monitoring flags known problems; observation finds ones nobody wrote an alarm for.",
    tags: ["Monitoring", "Observation"]
  },
  {
    id: 'aws-aif-fc-486',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Which Bedrock metrics in CloudWatch support usage and capacity governance?",
    hint: "Counts, time, errors, tokens.",
    back: "<strong>Invocations</strong>, <strong>InvocationLatency</strong>, <strong>InvocationClientErrors</strong> and <strong>InvocationServerErrors</strong>, <strong>InvocationThrottles</strong>, and <strong>InputTokenCount</strong> / <strong>OutputTokenCount</strong>, per model. Use them for dashboards, anomaly alarms (sudden token spikes can mean abuse or runaway agents), and cost tracking.",
    tags: ["Monitoring", "Amazon Bedrock"]
  },
  {
    id: 'aws-aif-fc-487',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What are the five scopes of the Generative AI Security Scoping Matrix?",
    hint: "From using someone's app to building your own model.",
    back: "<strong>Scope 1: Consumer app</strong> (public third-party service). <strong>Scope 2: Enterprise app</strong> (SaaS with gen AI features under a business agreement). <strong>Scope 3: Pre-trained models</strong> (your app built on an existing FM via API, such as Bedrock). <strong>Scope 4: Fine-tuned models</strong> (an FM customized with your data). <strong>Scope 5: Self-trained models</strong> (a model you train from scratch).",
    tags: ["Scoping Matrix"]
  },
  {
    id: 'aws-aif-fc-488',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Which security disciplines does the Scoping Matrix apply across every scope?",
    hint: "Five disciplines.",
    back: "<strong>Governance and compliance</strong>, <strong>legal and privacy</strong>, <strong>risk management</strong>, <strong>controls</strong>, and <strong>resilience</strong>. The matrix shows how each discipline's concerns shift by scope: for example, in Scope 1 legal focus is terms of service and data entered; in Scope 5 it extends to training data rights and model ownership.",
    tags: ["Scoping Matrix", "Governance frameworks"]
  },
  {
    id: 'aws-aif-fc-489',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What governance focus fits Scope 1 and Scope 2 usage, where you do not control the model?",
    hint: "Policy and contracts.",
    back: "<strong>Scope 1:</strong> an acceptable use policy on which public tools are allowed and which data may never be entered, plus user training and possibly network controls. <strong>Scope 2:</strong> vendor due diligence on <strong>data use, retention, and training terms</strong>, data processing agreements, and rules on which internal data the SaaS features may access.",
    tags: ["Scoping Matrix", "Third-party risk"]
  },
  {
    id: 'aws-aif-fc-490',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What additional responsibilities appear when moving from Scope 3 to Scope 4?",
    hint: "Your data is now inside a model.",
    back: "In Scope 4 your data <strong>shapes the model</strong>, so you add: classification and <strong>rights</strong> to the training data, protection and <strong>access control of the custom model</strong> (it can reveal training data), encryption with your keys, evaluation of the tuned model for bias and safety, documentation and versioning, and erasure handling that may require retraining.",
    tags: ["Scoping Matrix", "Fine-tuning"]
  },
  {
    id: 'aws-aif-fc-491',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does an AI acceptable use policy typically define?",
    hint: "Tools, data, uses.",
    back: "<strong>Approved AI tools</strong> and services, which <strong>data classifications</strong> may be used with each, <strong>prohibited uses</strong> (for example entering client confidential data into public tools or making final decisions without human review), required disclosures, and how to request approval for new tools or use cases.",
    tags: ["Governance policies", "Acceptable use"]
  },
  {
    id: 'aws-aif-fc-492',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What should drive how often an AI model is reviewed?",
    hint: "Risk plus triggers.",
    back: "A <strong>risk-based cadence</strong>: high-impact models (credit, hiring, health) reviewed more often, low-risk models less often, plus <strong>event triggers</strong> such as material changes, a new model version from the provider, performance or bias drift, incidents, and new regulations. A single fixed interval for all models either wastes effort or leaves high-risk models under-reviewed.",
    tags: ["Review cadence"]
  },
  {
    id: 'aws-aif-fc-493',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What makes a model review strategy strong rather than a rubber stamp?",
    hint: "Independence and adversarial testing.",
    back: "<strong>Independence</strong> (a second-line risk or governance function, not the builders), <strong>adversarial testing</strong> such as red teaming for jailbreaks and harmful outputs, <strong>human evaluation</strong> on realistic cases, checks against documented acceptance criteria, and recorded decisions with conditions and follow-ups.",
    tags: ["Review strategies", "Red teaming"]
  },
  {
    id: 'aws-aif-fc-494',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does a transparency standard for AI systems usually require?",
    hint: "Tell people, document purpose and limits.",
    back: "Disclosing <strong>when people interact with AI</strong> or when AI contributes to a decision, publishing plain-language descriptions of each system's <strong>purpose, limitations, and data use</strong> (model cards, AI Service Cards), explaining how to contest a decision or reach a human, and labeling AI-generated content where appropriate.",
    tags: ["Transparency standards"]
  },
  {
    id: 'aws-aif-fc-495',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What should team training requirements for generative AI cover?",
    hint: "Role-based, before access.",
    back: "Role-based training completed <strong>before access</strong>: responsible AI principles, <strong>data classification and handling</strong> (what never goes into prompts), the acceptable use policy, recognizing hallucinations and prompt injection, when human review is required, and how to report incidents. Builders additionally need secure development and evaluation practices. Track completion and refresh periodically.",
    tags: ["Training requirements"]
  },
  {
    id: 'aws-aif-fc-496',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does the Amazon Bedrock model lifecycle mean for governance?",
    hint: "Active, Legacy, End-of-life.",
    back: "Model versions move from <strong>Active</strong> to <strong>Legacy</strong> to <strong>End-of-Life</strong>, after which they cannot be invoked. A version change is a <strong>material change</strong>: governance should require re-running approved evaluation and safety tests on the replacement, updating documentation and risk assessments, and formal approval before cutover, scheduled well within the Legacy window.",
    tags: ["Model lifecycle", "Change management"]
  },
  {
    id: 'aws-aif-fc-497',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is a risk-tiered AI intake process?",
    hint: "Light path for low risk, heavy path for high risk.",
    back: "Every proposed AI use case is registered and <strong>classified by risk</strong> (impact on people, data sensitivity, autonomy, regulatory exposure). Low-risk cases follow a lightweight approval; high-risk cases require legal and security review, bias and safety evaluation, documentation, and committee sign-off. It scales oversight without blocking every experiment and creates an <strong>inventory</strong> of AI systems.",
    tags: ["Risk tiering", "Governance frameworks"]
  },
  {
    id: 'aws-aif-fc-498',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Why are logs central to AI governance?",
    hint: "Evidence.",
    back: "Logs are the <strong>evidence</strong> governance runs on: CloudTrail shows <strong>who changed what</strong> (guardrails, models, endpoints), invocation logs show <strong>what the model was asked and said</strong>, and application logs show how outputs were used. They support incident investigation, compliance audits, misuse detection, and quality review, provided they are protected and retained per policy.",
    tags: ["Logging", "Governance"]
  },
  {
    id: 'aws-aif-fc-499',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "How should a knowledge base's source data be governed over time?",
    hint: "Stale and sensitive documents are both risks.",
    back: "Assign <strong>owners and review dates</strong> to source documents, remove superseded versions, classify data before ingestion and restrict data source paths so sensitive files are excluded, <strong>re-sync</strong> the knowledge base after changes so deletions propagate to the vector index, and apply retention rules to the source bucket and the index alike.",
    tags: ["Data governance", "Knowledge Bases"]
  },
  {
    id: 'aws-aif-fc-500',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Which AWS controls enforce, rather than just report on, data governance rules?",
    hint: "Preventive vs detective.",
    back: "<strong>Preventive:</strong> SCPs (Region and model restrictions), IAM and Lake Formation permissions, KMS key policies, S3 Object Lock, S3 Lifecycle expiration, Bedrock Guardrails. <strong>Detective:</strong> CloudTrail, Config rules, Macie, CloudWatch alarms, Audit Manager, Trusted Advisor. Mature governance uses preventive controls for hard rules and detective controls to catch drift and prove compliance.",
    tags: ["Preventive controls", "Detective controls"]
  }
];

export default AWS_AIF_FLASHCARDS_20;
