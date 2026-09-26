export const AWS_AIF_FLASHCARDS_18 = [
  {
    id: 'aws-aif-fc-426',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Shared responsibility for Amazon Bedrock: what does AWS own and what does the customer own?",
    hint: "Of the cloud vs in the cloud.",
    back: "<strong>AWS</strong> secures the infrastructure: facilities, hardware, hosts, the model-serving fleet, and the managed service itself. The <strong>customer</strong> owns identity and access (IAM), the data it sends and stores (classification, encryption choices, retention), guardrail and application configuration, and how outputs are used. The more managed the service, the more AWS takes on, but data and access always stay with the customer.",
    tags: ["Shared responsibility", "Amazon Bedrock"]
  },
  {
    id: 'aws-aif-fc-427',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "How does shared responsibility shift between self-hosting a model on EC2, SageMaker endpoints, and Bedrock?",
    hint: "Who patches the OS?",
    back: "<strong>EC2 self-hosted:</strong> you patch the OS, runtime, and model server, plus everything above. <strong>SageMaker endpoints:</strong> AWS manages the hosting infrastructure; you own the model, container choice, and endpoint configuration. <strong>Bedrock:</strong> AWS runs the model and serving stack; you own access, data, prompts, guardrails, and the application. In every case, IAM and data protection remain yours.",
    tags: ["Shared responsibility"]
  },
  {
    id: 'aws-aif-fc-428',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Does Amazon Bedrock use your prompts and completions to train the base foundation models?",
    hint: "A common customer worry.",
    back: "<strong>No.</strong> Bedrock does not use customer prompts or completions to train AWS or third-party base models, and does not share them with model providers. Fine-tuning creates a <strong>private copy</strong> of the model for your account. You still control whether invocation logging is enabled and where logs are stored.",
    tags: ["Amazon Bedrock", "Data privacy"]
  },
  {
    id: 'aws-aif-fc-429',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "IAM user access keys vs IAM roles for AI workloads: which should a SageMaker job or Lambda function use?",
    hint: "Temporary is better than permanent.",
    back: "Use an <strong>IAM role</strong> (SageMaker execution role, Lambda execution role). Roles provide <strong>temporary credentials</strong> automatically and never need to be embedded in code, images, or environment variables. Long-term access keys can leak and remain valid until rotated. Scope the role's policy to the specific buckets, models, and actions the workload needs.",
    tags: ["IAM roles", "Least privilege"]
  },
  {
    id: 'aws-aif-fc-430',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "How do you restrict an application to invoking only one Bedrock model?",
    hint: "Action plus resource.",
    back: "Grant <code>bedrock:InvokeModel</code> (and <code>InvokeModelWithResponseStream</code> if streaming) with the <strong>Resource</strong> set to that model's ARN, for example <code>arn:aws:bedrock:us-east-1::foundation-model/&lt;model-id&gt;</code> (or the inference profile ARN if one is used). To enforce organization-wide bans on certain models, use an <strong>SCP</strong> that denies invocation of those ARNs.",
    tags: ["IAM", "Amazon Bedrock"]
  },
  {
    id: 'aws-aif-fc-431',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does an SCP do that an account-level IAM policy cannot?",
    hint: "Even administrators.",
    back: "A <strong>service control policy</strong> in AWS Organizations sets the <strong>maximum permissions</strong> for all principals in member accounts, including account administrators; no IAM policy inside the account can grant beyond it. That makes SCPs the right tool for guardrails such as denying unapproved models, restricting Regions, or preventing logging from being disabled. SCPs grant nothing by themselves.",
    tags: ["Service control policies", "Governance"]
  },
  {
    id: 'aws-aif-fc-432',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does Amazon Macie do, and where does it fit in an AI data pipeline?",
    hint: "It looks inside S3 objects.",
    back: "<strong>Amazon Macie</strong> uses machine learning and pattern matching to <strong>discover sensitive data</strong> (PII, financial data, credentials) in <strong>Amazon S3</strong> and reports findings, plus evaluates bucket security posture. In AI pipelines, run it on training and RAG source buckets <strong>before</strong> data is used, so personal data can be removed, masked, or protected.",
    tags: ["Amazon Macie", "PII"]
  },
  {
    id: 'aws-aif-fc-433',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Interface VPC endpoint vs gateway VPC endpoint: which one do you use for Amazon Bedrock?",
    hint: "Only two services get the other kind.",
    back: "<strong>Interface endpoints</strong> (AWS PrivateLink) place private IPs in your subnets and support most services, including <strong>Bedrock</strong> (bedrock-runtime, bedrock-agent-runtime, and others) and SageMaker APIs. <strong>Gateway endpoints</strong> exist only for <strong>S3 and DynamoDB</strong> and work through route tables. Either keeps traffic off the public internet; endpoint policies can further restrict what is callable.",
    tags: ["AWS PrivateLink", "VPC endpoints"]
  },
  {
    id: 'aws-aif-fc-434',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "AWS owned key vs customer managed KMS key for Bedrock and SageMaker resources: what does the customer managed key add?",
    hint: "Control, audit, revoke.",
    back: "Both encrypt data at rest. A <strong>customer managed key</strong> lets you define the <strong>key policy</strong> (who can use it), see every use in <strong>CloudTrail</strong>, rotate it on your schedule, and <strong>disable or schedule deletion</strong> to make encrypted resources (custom models, knowledge bases, training data) unusable. AWS owned keys offer none of that visibility or control.",
    tags: ["AWS KMS", "Encryption"]
  },
  {
    id: 'aws-aif-fc-435',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does SageMaker network isolation do for training and inference containers?",
    hint: "No outbound calls.",
    back: "With <strong>network isolation</strong> enabled, the container cannot make outbound network calls, including to other AWS services or the internet. SageMaker still downloads input data and uploads artifacts on the container's behalf. It is used for untrusted third-party algorithms or sensitive data to prevent exfiltration from inside the container.",
    tags: ["Network isolation", "SageMaker"]
  },
  {
    id: 'aws-aif-fc-436',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is data lineage and why does it matter for AI governance?",
    hint: "Trace a model back to its sources.",
    back: "<strong>Data lineage</strong> is the recorded path of data from its <strong>source</strong> through each transformation to the models and outputs that use it. It lets teams answer \"which data trained this model?\", reproduce results, trace the impact of a bad source, and satisfy auditors. On AWS: <strong>SageMaker ML Lineage Tracking</strong> for ML workflows and <strong>Amazon DataZone</strong> lineage for data assets.",
    tags: ["Data lineage"]
  },
  {
    id: 'aws-aif-fc-437',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does SageMaker ML Lineage Tracking record?",
    hint: "Entities and the links between them.",
    back: "It records <strong>entities</strong> such as datasets, processing jobs, training jobs, model artifacts, model packages, and endpoints, plus the <strong>associations</strong> between them (for example ContributedTo, Produced). SageMaker Pipelines and jobs create many of these automatically, so you can query from a deployed endpoint back to the exact data and code that produced it.",
    tags: ["SageMaker", "Data lineage"]
  },
  {
    id: 'aws-aif-fc-438',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is data cataloging and which AWS service provides the core technical catalog?",
    hint: "Crawlers fill it.",
    back: "<strong>Data cataloging</strong> maintains a central, searchable inventory of datasets with their schemas, locations, and metadata so teams can find and govern data. The <strong>AWS Glue Data Catalog</strong>, populated by <strong>Glue crawlers</strong>, is the technical catalog used by Athena, EMR, Redshift Spectrum, and Lake Formation. Amazon DataZone adds a business catalog with ownership and access workflows on top.",
    tags: ["Data cataloging", "AWS Glue"]
  },
  {
    id: 'aws-aif-fc-439',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "AWS Glue Data Catalog vs Amazon DataZone: what is each for?",
    hint: "Technical metadata vs business sharing.",
    back: "<strong>Glue Data Catalog:</strong> technical metadata (tables, schemas, partitions, locations) consumed by query and ETL engines. <strong>Amazon DataZone</strong> (the catalog in SageMaker Unified Studio): a <strong>business</strong> catalog where producers publish assets with business context, consumers <strong>subscribe with approval</strong>, and stewards see <strong>lineage</strong>. DataZone can use Glue catalog tables as its assets.",
    tags: ["Amazon DataZone", "AWS Glue"]
  },
  {
    id: 'aws-aif-fc-440',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is source citation in generative AI, and which AWS services provide it?",
    hint: "Show your working.",
    back: "<strong>Source citation</strong> attaches references to the documents or passages a generated answer is based on, so users can verify it and auditors can trace outputs to data. <strong>Amazon Bedrock Knowledge Bases</strong> (RetrieveAndGenerate returns citations) and <strong>Amazon Q Business</strong> return citations with answers. A fine-tuned model answering from its weights cannot cite specific sources.",
    tags: ["Source citation", "RAG"]
  },
  {
    id: 'aws-aif-fc-441',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "How do SageMaker Model Cards support documenting data origins?",
    hint: "A section for how the model was built.",
    back: "Model Cards have <strong>training details</strong> (training data description, objective, hyperparameters, environment) and <strong>additional information</strong> (ethical considerations, caveats, limitations) alongside intended uses and evaluation results. Recording data origin, time period, licensing, and known gaps there keeps provenance in the governed record auditors review, and cards integrate with Model Registry versions.",
    tags: ["SageMaker Model Cards", "Data provenance"]
  },
  {
    id: 'aws-aif-fc-442',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "List the four secure data engineering practices named in the AIF-C01 exam guide.",
    hint: "Quality, privacy, access, integrity.",
    back: "<strong>Assessing data quality</strong> (completeness, validity, consistency before use), <strong>implementing privacy-enhancing technologies</strong> (masking, tokenization, differential privacy, synthetic data, clean rooms), <strong>data access control</strong> (least privilege, fine-grained permissions), and <strong>data integrity</strong> (protection against tampering, corruption, and poisoning).",
    tags: ["Secure data engineering"]
  },
  {
    id: 'aws-aif-fc-443',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Which AWS tools assess data quality before training?",
    hint: "One for pipelines, one for exploration.",
    back: "<strong>AWS Glue Data Quality</strong> evaluates rules written in DQDL (completeness, uniqueness, ranges, freshness) inside Glue jobs or against catalog tables and can fail a pipeline on violations. <strong>SageMaker Data Wrangler</strong> produces a <strong>Data Quality and Insights report</strong> that flags missing values, outliers, duplicates, and target leakage during exploration.",
    tags: ["Data quality", "AWS Glue"]
  },
  {
    id: 'aws-aif-fc-444',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Pseudonymization vs anonymization: which one keeps data in scope of privacy law like GDPR?",
    hint: "Can it be reversed?",
    back: "<strong>Pseudonymization</strong> replaces identifiers with tokens that can be <strong>re-linked</strong> using separately held information, so the data is still personal data under GDPR and remains in scope (though it reduces risk). <strong>Anonymization</strong> irreversibly removes the ability to identify individuals, taking data out of scope, but true anonymization is hard: combinations of quasi-identifiers can re-identify people.",
    tags: ["Privacy-enhancing technologies", "Pseudonymization"]
  },
  {
    id: 'aws-aif-fc-445',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is differential privacy in one sentence, and where does AWS offer it?",
    hint: "Calibrated noise.",
    back: "<strong>Differential privacy</strong> adds calibrated statistical noise to query results or training so that including or excluding any single individual changes the output by only a provably small amount (controlled by a privacy budget, epsilon). AWS offers it in <strong>AWS Clean Rooms</strong> Differential Privacy for collaborative analysis.",
    tags: ["Differential privacy", "AWS Clean Rooms"]
  },
  {
    id: 'aws-aif-fc-446',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "When is AWS Clean Rooms the right tool?",
    hint: "Two parties, no raw data exchange.",
    back: "When two or more organizations want to <strong>analyze or model their combined data</strong> without sharing raw records with each other. Each party keeps data in its own account, collaboration rules limit which queries and outputs are allowed, differential privacy can protect results, and <strong>Clean Rooms ML</strong> supports lookalike modeling across parties.",
    tags: ["AWS Clean Rooms", "Privacy-enhancing technologies"]
  },
  {
    id: 'aws-aif-fc-447',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does AWS Lake Formation add on top of S3 and IAM for training data?",
    hint: "Finer than a bucket policy.",
    back: "<strong>Lake Formation</strong> centrally manages <strong>fine-grained permissions</strong> on data lake tables: database, table, <strong>column, row, and cell-level</strong> access, plus tag-based access control. One team can read all columns while another cannot see sensitive ones, without writing complex bucket policies, and access is logged for audit.",
    tags: ["AWS Lake Formation", "Access control"]
  },
  {
    id: 'aws-aif-fc-448',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is data poisoning and which controls reduce it?",
    hint: "Bad data in, bad behavior out.",
    back: "<strong>Data poisoning</strong> is deliberate manipulation of training or retrieval data (fake feedback, injected documents, mislabeled samples) to change a model's behavior. Controls: <strong>provenance</strong> tracking and trusted sources, <strong>access control</strong> on who can write training data, <strong>validation and anomaly detection</strong> before training, <strong>integrity</strong> protection (versioning, Object Lock, checksums), and evaluation gates before deploying retrained models.",
    tags: ["Data poisoning", "Data integrity"]
  },
  {
    id: 'aws-aif-fc-449',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Which S3 features protect the integrity of training datasets?",
    hint: "Keep history; prevent deletion.",
    back: "<strong>S3 Versioning</strong> keeps prior versions so accidental or malicious overwrites can be recovered. <strong>S3 Object Lock</strong> (WORM) prevents objects from being overwritten or deleted for a retention period; <strong>compliance mode</strong> cannot be bypassed even by the root user, governance mode can be by specially permitted users. <strong>Checksums</strong> verify objects were not corrupted in transfer.",
    tags: ["Data integrity", "S3 Object Lock"]
  },
  {
    id: 'aws-aif-fc-450',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Synthetic data vs masked production data for non-production AI testing: what are the tradeoffs?",
    hint: "Realism versus residual risk.",
    back: "<strong>Masked production data</strong> keeps real structure and edge cases but still derives from real people, so re-identification risk and policy restrictions may remain. <strong>Synthetic data</strong> is generated to mimic statistical patterns with no real individuals, making it safer to share, but it can miss rare edge cases or leak patterns if the generator overfits. Choose by sensitivity and how much realism the test needs.",
    tags: ["Synthetic data", "Privacy-enhancing technologies"]
  }
];

export default AWS_AIF_FLASHCARDS_18;
