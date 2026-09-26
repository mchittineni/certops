export const AWS_AIF_FLASHCARDS_19 = [
  {
    id: 'aws-aif-fc-451',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: 'Amazon Bedrock API keys: short-term vs long-term',
    hint: 'One inherits a session, the other creates an IAM user.',
    back: 'A <strong>short-term</strong> key lasts up to <strong>12 hours</strong> (or the session, if shorter) and inherits the permissions of the IAM principal that generated it; AWS recommends it for production. A <strong>long-term</strong> key is a service-specific credential on an <strong>IAM user</strong>, valid until its set expiry, and is meant <strong>for exploration only</strong>. Admins can block key use with a deny on <code>bedrock:CallWithBearerToken</code>.',
    tags: ['API keys', 'IAM']
  },
  {
    id: 'aws-aif-fc-452',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Name four layered defenses against prompt injection in a Bedrock application.",
    hint: "Filter, separate, limit, confirm.",
    back: "1) <strong>Guardrails prompt attack filter</strong> with input tagging so user text is evaluated as user input. 2) Keep <strong>system instructions separate</strong> from user and retrieved content and treat the latter as untrusted data. 3) <strong>Least privilege</strong> for data and tools the model or agent can reach, keeping secrets out of prompts. 4) <strong>Human or user confirmation</strong> before sensitive actions, plus output validation and monitoring.",
    tags: ["Prompt injection", "Defense in depth"]
  },
  {
    id: 'aws-aif-fc-453',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is insecure output handling in LLM applications?",
    hint: "Trusting what the model writes.",
    back: "Passing model output directly to <strong>downstream systems</strong> (SQL engines, shells, browsers, APIs) without validation. An injected or hallucinated output can then drop tables, run commands, or inject scripts. Mitigate by treating output as <strong>untrusted input</strong>: validate or allow-list it, run it with least-privilege identities (read-only database roles), encode it for its destination, and log it.",
    tags: ["Insecure output handling", "Application security"]
  },
  {
    id: 'aws-aif-fc-454',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: 'What is the OWASP Top 10 for LLM Applications, and which risks does it list?',
    hint: 'The classic web Top 10 idea, rewritten for generative AI apps.',
    back: 'An OWASP project that ranks the most critical security risks in applications built on large language models. The 2025 edition lists <strong>prompt injection</strong>, <strong>sensitive information disclosure</strong>, <strong>supply chain</strong>, <strong>data and model poisoning</strong>, <strong>improper output handling</strong>, <strong>excessive agency</strong>, <strong>system prompt leakage</strong>, <strong>vector and embedding weaknesses</strong>, <strong>misinformation</strong> and <strong>unbounded consumption</strong>. Teams use it as a checklist for threat modeling and security reviews of generative AI applications.',
    tags: ['OWASP', 'Security', 'Threats']
  },
  {
    id: 'aws-aif-fc-455',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "How do Bedrock Guardrails sensitive information filters handle PII: block or mask?",
    hint: "Both, chosen per entity type.",
    back: "For each PII entity type (names, emails, phone numbers, account numbers, and many more) or custom <strong>regex</strong>, you choose an action: <strong>Block</strong> rejects the input or output with a configured message, <strong>Mask</strong> replaces the value with a placeholder such as {PHONE} so the rest of the response still flows. Filters can apply to prompts, responses, or both.",
    tags: ["Guardrails", "PII"]
  },
  {
    id: 'aws-aif-fc-456',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Encryption at rest vs in transit for AI workloads: which AWS mechanisms provide each?",
    hint: "Keys on disk, TLS on the wire.",
    back: "<strong>At rest:</strong> AWS KMS keys (AWS owned, AWS managed, or customer managed) on S3 objects, EBS volumes of training and hosting instances, custom models, knowledge bases, and logs. <strong>In transit:</strong> TLS on all API calls (Bedrock and SageMaker runtime endpoints are HTTPS), plus optional <strong>inter-container traffic encryption</strong> for distributed SageMaker training.",
    tags: ["Encryption"]
  },
  {
    id: 'aws-aif-fc-457',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "GuardDuty vs Inspector vs Macie: one line each.",
    hint: "Threats, vulnerabilities, sensitive data.",
    back: "<strong>GuardDuty:</strong> threat detection from CloudTrail, VPC Flow Logs, DNS, and other sources (compromised credentials, malicious IPs). <strong>Inspector:</strong> vulnerability management for EC2, ECR container images, and Lambda (known CVEs, network exposure, code issues). <strong>Macie:</strong> sensitive data discovery in S3 (PII, financial data, credentials).",
    tags: ["Tool selection", "Security services"]
  },
  {
    id: 'aws-aif-fc-458',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does Amazon Inspector scan, and why does it matter for AI workloads?",
    hint: "Images, instances, functions.",
    back: "Inspector continuously scans <strong>EC2 instances</strong>, <strong>ECR container images</strong>, and <strong>Lambda functions</strong> (dependencies, plus code scanning for issues like injection flaws and embedded secrets). AI stacks rely on large open source libraries in custom training and inference containers and on Lambda functions behind agents, so unpatched CVEs there are a direct attack path.",
    tags: ["Amazon Inspector", "Vulnerability management"]
  },
  {
    id: 'aws-aif-fc-459',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Which AWS services protect a public generative AI API at the application and infrastructure layers?",
    hint: "Filter requests, absorb floods, isolate the network.",
    back: "<strong>AWS WAF</strong> on API Gateway, CloudFront, or ALB: rate-based rules and managed rule groups against injection and bots. <strong>AWS Shield</strong> (Standard automatically, Advanced optionally) against DDoS. <strong>VPC design</strong>: private subnets, security groups, and <strong>PrivateLink</strong> interface endpoints for Bedrock and SageMaker. Throttling and usage plans also cap model invocation cost from abuse.",
    tags: ["Infrastructure protection", "AWS WAF"]
  },
  {
    id: 'aws-aif-fc-460',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is ISO/IEC 42001?",
    hint: "The AI counterpart of ISO/IEC 27001.",
    back: "<strong>ISO/IEC 42001</strong> is the international, <strong>certifiable</strong> standard for an <strong>AI management system</strong> (AIMS): policies, roles, risk and impact assessment, lifecycle controls, and continual improvement for developing or using AI responsibly. AWS has ISO/IEC 42001 certification covering services including Amazon Bedrock, and customers can pursue their own.",
    tags: ["ISO/IEC 42001", "Compliance standards"]
  },
  {
    id: 'aws-aif-fc-461',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "SOC 1 vs SOC 2 vs SOC 3 reports: what does each cover?",
    hint: "Financial, detailed trust, public summary.",
    back: "<strong>SOC 1:</strong> controls relevant to customers' <strong>financial reporting</strong>. <strong>SOC 2:</strong> detailed report on controls for the Trust Services Criteria (<strong>security, availability, processing integrity, confidentiality, privacy</strong>), usually under NDA; Type II covers operating effectiveness over a period. <strong>SOC 3:</strong> a public, summarized version of SOC 2. AWS's reports are available in AWS Artifact.",
    tags: ["SOC reports", "Compliance standards"]
  },
  {
    id: 'aws-aif-fc-462',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is an algorithm accountability law? Give two examples.",
    hint: "Laws about automated decisions and their effects.",
    back: "Laws that impose duties on organizations using algorithms or AI for consequential decisions: impact or bias assessments, transparency, notice, and human review. Examples: <strong>NYC Local Law 144</strong> (annual independent bias audit and candidate notice for automated employment decision tools), the <strong>EU AI Act</strong> (risk-based obligations), and GDPR Article 22 limits on solely automated decisions with significant effects.",
    tags: ["Algorithm accountability", "Regulation"]
  },
  {
    id: 'aws-aif-fc-463',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What are the EU AI Act's risk tiers and an example of each?",
    hint: "Four tiers, from banned to barely regulated.",
    back: "<strong>Unacceptable risk</strong> (prohibited): social scoring by public authorities, manipulative techniques exploiting vulnerabilities. <strong>High risk</strong>: credit scoring, hiring, education access, critical infrastructure; requires risk management, data governance, documentation, logging, human oversight, accuracy and robustness. <strong>Limited risk</strong>: chatbots and deepfakes; transparency duties. <strong>Minimal risk</strong>: spam filters; no specific obligations. General-purpose AI models carry separate obligations.",
    tags: ["EU AI Act", "Regulation"]
  },
  {
    id: 'aws-aif-fc-464',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What are the four functions of the NIST AI Risk Management Framework?",
    hint: "G, M, M, M.",
    back: "<strong>Govern</strong> (culture, policies, accountability for AI risk), <strong>Map</strong> (establish context and identify risks of a specific AI system), <strong>Measure</strong> (analyze and track risks with metrics and testing), and <strong>Manage</strong> (prioritize and act on risks, including response and monitoring). It is <strong>voluntary</strong> and pairs with a Generative AI Profile for gen AI risks.",
    tags: ["NIST AI RMF", "Risk management"]
  },
  {
    id: 'aws-aif-fc-465',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "If AWS services are SOC 2 and ISO certified, why isn't your AI application automatically compliant?",
    hint: "Inherited vs your own controls.",
    back: "AWS's attestations cover <strong>controls AWS operates</strong> (security of the cloud). You can <strong>inherit</strong> those for the infrastructure layer in your own audit, but your application's access management, data handling, change management, logging, and AI-specific processes are <strong>your controls</strong>, which must be designed, operated, and audited separately before you can claim compliance.",
    tags: ["Shared responsibility", "Compliance"]
  },
  {
    id: 'aws-aif-fc-466',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: 'Where should an AI application keep the credentials its agent tools use to call other systems?',
    hint: 'Not in the prompt, and not in code.',
    back: 'Store them in <strong>AWS Secrets Manager</strong> and have the tool\'s Lambda function or backend retrieve them at run time through its IAM role; Secrets Manager encrypts with KMS and can rotate secrets automatically. Never put keys in a system prompt, a knowledge base document or an agent instruction, because prompt injection or prompt leaking can make the model reveal them, and never hard-code them.',
    tags: ['Secrets Manager', 'Credentials']
  },
  {
    id: 'aws-aif-fc-467',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does AWS CloudTrail record for AI services such as Bedrock and SageMaker?",
    hint: "Who did what, when, from where.",
    back: "CloudTrail records <strong>API activity</strong>: the calling identity, time, source IP, request parameters, and response for management events such as creating or deleting guardrails, knowledge bases, custom models, or endpoints, and optionally <strong>data events</strong> for high-volume operations. It answers audit questions like \"who changed this?\". Prompt and response content is captured by Bedrock <strong>model invocation logging</strong>, not CloudTrail.",
    tags: ["AWS CloudTrail", "Auditing"]
  },
  {
    id: 'aws-aif-fc-468',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "AWS Config vs AWS CloudTrail: which answers \"what did it look like\" and which answers \"who changed it\"?",
    hint: "State vs action.",
    back: "<strong>AWS Config</strong> records resource <strong>configuration state</strong> over time and evaluates it against rules: what the endpoint's settings were before and after, and whether it was compliant. <strong>CloudTrail</strong> records the <strong>API calls</strong> that caused changes: who called UpdateEndpoint, when, and from where. Investigations and audits typically use both.",
    tags: ["AWS Config", "AWS CloudTrail"]
  },
  {
    id: 'aws-aif-fc-469',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Give two AWS Config managed rules relevant to SageMaker security.",
    hint: "Internet access and keys.",
    back: "Examples: <strong>sagemaker-notebook-no-direct-internet-access</strong> (flags notebook instances with direct internet access enabled) and <strong>sagemaker-endpoint-configuration-kms-key-configured</strong> (flags endpoint configurations without a KMS key); <strong>sagemaker-notebook-instance-kms-key-configured</strong> is another. Rules can be grouped into <strong>conformance packs</strong> and fed into Audit Manager as evidence.",
    tags: ["AWS Config", "SageMaker"]
  },
  {
    id: 'aws-aif-fc-470',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What does AWS Audit Manager do, and what AI-specific framework does it offer?",
    hint: "Continuous evidence, mapped to controls.",
    back: "<strong>Audit Manager</strong> continuously collects evidence (from Config, CloudTrail, Security Hub, and manual uploads) and maps it to <strong>controls in frameworks</strong> such as SOC 2, PCI DSS, or HIPAA, producing audit-ready assessment reports. It includes a prebuilt <strong>AWS Generative AI Best Practices Framework</strong> covering Bedrock and SageMaker controls.",
    tags: ["AWS Audit Manager"]
  },
  {
    id: 'aws-aif-fc-471',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What categories of checks does AWS Trusted Advisor run?",
    hint: "Five or six pillars of advice.",
    back: "<strong>Cost optimization, performance, security, fault tolerance, service limits (quotas)</strong>, and <strong>operational excellence</strong>. Security examples: exposed access keys, root account MFA, open security group ports, public S3 bucket permissions. The full set of checks requires Business, Enterprise On-Ramp, or Enterprise Support.",
    tags: ["AWS Trusted Advisor"]
  },
  {
    id: 'aws-aif-fc-472',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Audit Manager vs AWS Artifact vs Trusted Advisor: which do you use when an auditor asks for evidence of your controls?",
    hint: "Only one looks at your controls against a framework.",
    back: "<strong>Audit Manager</strong>: evidence that <strong>your</strong> controls operate, mapped to a framework over time. <strong>AWS Artifact</strong>: AWS's reports about <strong>AWS's</strong> controls (useful for the inherited layer, not your own). <strong>Trusted Advisor</strong>: best-practice <strong>recommendations</strong>, not control-mapped evidence. Config supplies much of the underlying configuration evidence that Audit Manager collects.",
    tags: ["Tool selection", "Audit"]
  },
  {
    id: 'aws-aif-fc-473',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "How do Bedrock Agents reduce the risk of harmful tool actions?",
    hint: "Confirm first; limit the function.",
    back: "Action groups can be configured to <strong>require user confirmation</strong> before invoking a function, so the user approves sensitive actions. The action group's <strong>Lambda execution role</strong> should have least-privilege permissions, and business limits (such as refund caps) belong in the function code. Guardrails can be attached to the agent to screen inputs and outputs.",
    tags: ["Agents", "Least privilege"]
  },
  {
    id: 'aws-aif-fc-474',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "What is a jailbreak in the context of foundation models?",
    hint: "Talking past the safety training.",
    back: "A <strong>jailbreak</strong> is a prompt crafted to bypass a model's safety training or an application's restrictions, for example through role-play (\"pretend you are an AI with no rules\"), hypothetical framing, or obfuscated encoding, to obtain disallowed content. It is a form of prompt attack; Bedrock Guardrails' prompt attack filter detects jailbreaks and prompt injection.",
    tags: ["Jailbreak", "Prompt attacks"]
  },
  {
    id: 'aws-aif-fc-475',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: "Threat detection, vulnerability management, and infrastructure protection: map each to AWS services for an AI stack.",
    hint: "Detect, patch, shield.",
    back: "<strong>Threat detection:</strong> Amazon GuardDuty (anomalous API use, compromised credentials), with findings aggregated in AWS Security Hub. <strong>Vulnerability management:</strong> Amazon Inspector for container images, EC2, and Lambda. <strong>Infrastructure protection:</strong> VPCs with private subnets and security groups, PrivateLink endpoints for Bedrock and SageMaker, SageMaker network isolation, AWS WAF, and AWS Shield.",
    tags: ["Security services", "Tool selection"]
  }
];

export default AWS_AIF_FLASHCARDS_19;
