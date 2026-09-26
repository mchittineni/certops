export const AWS_AIF_FLASHCARDS_9 = [
  {
    id: 'aws-aif-fc-201',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'List the advantages of building with AWS generative AI services that the exam guide names.',
    hint: 'Six of them, all about getting value with less effort.',
    back: '<strong>Accessibility</strong> (many models through one service), <strong>lower barrier to entry</strong> (no ML expertise required to start), <strong>efficiency</strong> (managed building blocks), <strong>cost-effectiveness</strong> (pay for what you use), <strong>speed to market</strong> (weeks, not months), and the <strong>ability to meet business objectives</strong> (choose and switch models to fit quality and cost targets).',
    tags: ['AWS generative AI advantages']
  },
  {
    id: 'aws-aif-fc-202',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Where does the speed-to-market advantage of managed generative AI services come from?',
    hint: 'Which months of work disappear from the plan?',
    back: 'Pre-trained foundation models are ready behind an API, so teams <strong>skip data collection, model training, and inference infrastructure</strong>. Managed features for retrieval, agents, and guardrails remove more build work. A prototype can run in days and a production feature in weeks.',
    tags: ['AWS generative AI advantages', 'Speed to market']
  },
  {
    id: 'aws-aif-fc-203',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does lower barrier to entry mean for AWS generative AI services?',
    hint: 'Who can build now that could not before?',
    back: 'Developers who can call an API, and even non-developers using no-code tools such as <strong>PartyRock</strong>, can build useful generative AI features <strong>without ML expertise</strong>, labeled datasets, or GPU operations. Specialists are still valuable for customization and evaluation, but they are no longer a prerequisite to start.',
    tags: ['AWS generative AI advantages', 'Lower barrier to entry']
  },
  {
    id: 'aws-aif-fc-204',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Pay-as-you-go managed models vs owning GPU servers: when is each more cost-effective?',
    hint: 'Utilization decides.',
    back: '<strong>Pay-as-you-go</strong> (Amazon Bedrock on-demand) wins for <strong>spiky, seasonal, or uncertain</strong> traffic, since idle time costs almost nothing and there is no hardware to buy. <strong>Reserved or dedicated capacity</strong> (Provisioned Throughput, or self-hosted endpoints) can win for <strong>steady, high utilization</strong>, where the capacity is busy most hours and a committed rate beats per-token prices.',
    tags: ['AWS generative AI advantages', 'Cost-effectiveness']
  },
  {
    id: 'aws-aif-fc-205',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which managed Amazon Bedrock capabilities deliver the efficiency advantage by removing build work?',
    hint: 'Retrieval, actions, safety, workflows, testing.',
    back: '<strong>Knowledge Bases</strong> (managed RAG: ingestion, chunking, embeddings, retrieval), <strong>Agents</strong> (planning and calling actions), <strong>Guardrails</strong> (safety policies), <strong>Flows</strong> (visual workflows), <strong>model evaluation</strong>, and <strong>prompt management</strong>. Each replaces code a team would otherwise build and maintain itself.',
    tags: ['AWS generative AI advantages', 'Efficiency', 'Amazon Bedrock']
  },
  {
    id: 'aws-aif-fc-206',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does Amazon Bedrock do with your prompts and model outputs?',
    hint: 'Nothing that helps anyone else\'s model.',
    back: 'Amazon Bedrock <strong>does not use your prompts or outputs to train</strong> AWS or third-party base models and <strong>does not share them with model providers</strong>. Data is encrypted in transit and at rest, and it stays in the Region you use unless you choose cross-Region inference.',
    tags: ['AWS infrastructure benefits', 'Data privacy']
  },
  {
    id: 'aws-aif-fc-207',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How does Amazon Bedrock keep third-party model providers away from customer data?',
    hint: 'Whose account does the model run in?',
    back: 'Each model copy runs in a <strong>model deployment account owned and operated by the Amazon Bedrock service team</strong>. Model providers have <strong>no access</strong> to those accounts, so they cannot see customer prompts, completions, or logs, even though their model is serving the request.',
    tags: ['AWS infrastructure benefits', 'Security']
  },
  {
    id: 'aws-aif-fc-208',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Where do you download AWS SOC reports and ISO certifications for an auditor?',
    hint: 'A self-service portal in the console.',
    back: '<strong>AWS Artifact</strong>: on-demand access to AWS security and compliance reports (SOC 1, 2, and 3, ISO certifications, PCI attestations, and more) and to agreements such as the HIPAA business associate addendum. The reports describe controls AWS operates; the customer still evidences its own controls.',
    tags: ['AWS infrastructure benefits', 'Compliance', 'AWS Artifact']
  },
  {
    id: 'aws-aif-fc-209',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'AWS CloudTrail vs Amazon Bedrock model invocation logging: what does each capture?',
    hint: 'Who called, versus what was said.',
    back: '<strong>CloudTrail</strong> records <strong>API activity</strong>: which identity called which Bedrock operation, when, and from where, suitable for audit trails. <strong>Model invocation logging</strong> (off by default) records the <strong>request and response content</strong> of model calls to CloudWatch Logs or S3, suitable for quality analysis. Use both, and protect the content logs as sensitive data.',
    tags: ['AWS infrastructure benefits', 'AWS CloudTrail', 'Logging']
  },
  {
    id: 'aws-aif-fc-210',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What are AWS AI Service Cards?',
    hint: 'Responsible AI documentation written by AWS.',
    back: 'Documents published by AWS for its AI services and Amazon models (for example Amazon Nova and Amazon Rekognition) describing <strong>intended use cases, limitations, responsible AI design choices</strong>, and <strong>deployment and performance best practices</strong>. Governance teams use them when approving a service for a use case.',
    tags: ['AWS infrastructure benefits', 'Responsible AI']
  },
  {
    id: 'aws-aif-fc-211',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How can you apply an Amazon Bedrock guardrail to a model that is not hosted in Bedrock?',
    hint: 'Evaluate the text without invoking a Bedrock model.',
    back: 'Call the <strong>ApplyGuardrail API</strong> with the input or output text. It evaluates the text against an existing guardrail\'s policies and returns whether to block or mask content, so the same safety policy can protect models on <strong>SageMaker AI, EC2, on premises, or other providers</strong>.',
    tags: ['AWS infrastructure benefits', 'Safety', 'Amazon Bedrock Guardrails']
  },
  {
    id: 'aws-aif-fc-212',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Map the exam\'s four AWS infrastructure benefits (security, compliance, responsibility, safety) to concrete AWS features.',
    hint: 'One or two features per word.',
    back: '<strong>Security</strong>: encryption, IAM, VPC endpoints, provider-isolated deployment accounts. <strong>Compliance</strong>: certifications and eligibility (SOC, ISO, HIPAA eligible, FedRAMP in GovCloud) evidenced through AWS Artifact, plus CloudTrail audit logs. <strong>Responsibility</strong>: the shared responsibility model and responsible AI resources such as AI Service Cards. <strong>Safety</strong>: Amazon Bedrock Guardrails.',
    tags: ['AWS infrastructure benefits']
  },
  {
    id: 'aws-aif-fc-213',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How is on-demand text inference priced in Amazon Bedrock?',
    hint: 'Two meters run on every request.',
    back: 'Per <strong>input token</strong> and per <strong>output token</strong>, at rates that vary by model (and sometimes by Region). Long prompts, large retrieved context, and verbose answers all raise cost. There is no hourly charge and no commitment for on-demand use.',
    tags: ['Cost tradeoffs', 'Token-based pricing']
  },
  {
    id: 'aws-aif-fc-214',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which traffic pattern is on-demand inference best suited to?',
    hint: 'Unpredictable, bursty, or just getting started.',
    back: '<strong>Variable, unpredictable, or low-to-moderate</strong> traffic, prototypes, and new products whose demand is unknown. You pay only for tokens processed, with no capacity to size. The trade-off is that on-demand is subject to <strong>account quotas</strong> and can be throttled when demand exceeds them.',
    tags: ['Cost tradeoffs', 'On-demand']
  },
  {
    id: 'aws-aif-fc-215',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How does Amazon Bedrock Provisioned Throughput work and how is it billed?',
    hint: 'Model units, by the hour, with optional terms.',
    back: 'You buy <strong>model units</strong> of dedicated capacity for a specific model, giving guaranteed throughput. It is billed <strong>hourly whether used or not</strong>, with <strong>no-commitment, one-month, or six-month</strong> terms; longer terms cost less per hour. It suits steady, predictable, high-volume workloads, and it is a common way to serve custom models.',
    tags: ['Cost tradeoffs', 'Provisioned Throughput']
  },
  {
    id: 'aws-aif-fc-216',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'When should you use Amazon Bedrock batch inference?',
    hint: 'Nobody is waiting, and there are a lot of prompts.',
    back: 'For <strong>large, latency-tolerant jobs</strong>: tagging catalogs, summarizing archives, generating embeddings in bulk. You submit a file of prompts from <strong>Amazon S3</strong>, the job runs asynchronously, and results land back in S3. For supported models it is priced at a <strong>discount to on-demand</strong> (about 50 percent). It cannot serve interactive users.',
    tags: ['Cost tradeoffs', 'Batch inference']
  },
  {
    id: 'aws-aif-fc-217',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What cost components does a customized (fine-tuned) model in Amazon Bedrock add?',
    hint: 'Train it, keep it, run it.',
    back: '<strong>Training</strong>: charged by tokens processed (training tokens multiplied by epochs). <strong>Storage</strong>: a monthly fee per custom model. <strong>Inference</strong>: running the custom model, often through Provisioned Throughput. Compare this with prompt engineering or RAG on a base model, which avoids all three.',
    tags: ['Cost tradeoffs', 'Custom models']
  },
  {
    id: 'aws-aif-fc-218',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does cross-Region inference cost, and what availability benefit does it bring?',
    hint: 'Priced where the request starts.',
    back: 'It routes requests across several Regions in an inference profile to use spare capacity during bursts, reducing throttling <strong>without custom failover code</strong>. There is <strong>no extra routing charge</strong>: pricing is based on the <strong>source Region</strong> where the request originates. Pick a geographic profile (US, EU, and others) when data must stay in a geography.',
    tags: ['Cost tradeoffs', 'Availability', 'Cross-Region inference']
  },
  {
    id: 'aws-aif-fc-219',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What does prompt caching in Amazon Bedrock save, and when does it help?',
    hint: 'The same long prefix, request after request.',
    back: 'It caches a repeated <strong>prompt prefix</strong> (a long system prompt, document, or instructions) for a few minutes, so later requests reuse it: <strong>cached input tokens are billed at a reduced rate</strong> and are not reprocessed, cutting <strong>latency</strong>. It helps when many requests share a large, identical prefix within a short window.',
    tags: ['Cost tradeoffs', 'Prompt caching']
  },
  {
    id: 'aws-aif-fc-220',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What trade-offs does regional coverage introduce when choosing where to run a generative AI workload?',
    hint: 'Model choice, distance, and jurisdiction.',
    back: 'Not every model is offered in every Region, so you may trade the <strong>best-scoring model</strong> against <strong>latency</strong> to users, <strong>data residency</strong> rules, and Regional <strong>price</strong> differences. Check availability early; cross-Region inference within a geography can widen options.',
    tags: ['Cost tradeoffs', 'Regional coverage']
  },
  {
    id: 'aws-aif-fc-221',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'On-demand, Provisioned Throughput, or batch: how do you choose the inference pricing option?',
    hint: 'Ask: is someone waiting, and is traffic steady?',
    back: '<strong>Someone waiting, traffic variable</strong>: on-demand. <strong>Someone waiting, traffic steady and high, throttling unacceptable</strong>: Provisioned Throughput (often for the baseline, with on-demand absorbing spikes). <strong>Nobody waiting, large volume</strong>: batch inference at a discount. Custom models frequently require Provisioned Throughput regardless.',
    tags: ['Cost tradeoffs', 'Provisioned Throughput', 'Batch inference']
  },
  {
    id: 'aws-aif-fc-222',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'How do you design a Bedrock application for availability when on-demand requests get throttled?',
    hint: 'Retry, spread, reserve.',
    back: 'Handle throttling errors with <strong>retries and exponential backoff</strong>; request <strong>quota increases</strong> for known growth; use <strong>cross-Region inference</strong> to spread bursts across Regions; and reserve <strong>Provisioned Throughput</strong> for traffic that must never be throttled. Each step adds resilience at a different cost.',
    tags: ['Cost tradeoffs', 'Availability', 'Redundancy']
  },
  {
    id: 'aws-aif-fc-223',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Output tokens often cost more than input tokens. What design habit follows?',
    hint: 'Ask for less, cap the rest.',
    back: 'Keep answers <strong>as short as the task needs</strong>: instruct the model to be concise, request structured output instead of prose where possible, and set a sensible <strong>maximum output tokens</strong> limit. Trimming a verbose answer saves more per token than trimming the same amount of prompt.',
    tags: ['Cost tradeoffs', 'Token-based pricing']
  },
  {
    id: 'aws-aif-fc-224',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Which levers trade responsiveness against cost in a generative AI application?',
    hint: 'Some make it feel faster without making it cheaper.',
    back: '<strong>Smaller model</strong>: faster and cheaper, if quality holds. <strong>Shorter prompts and outputs</strong>: faster and cheaper. <strong>Prompt caching</strong>: faster and cheaper for repeated prefixes. <strong>Provisioned Throughput</strong>: consistent performance, paid hourly even when idle. <strong>Streaming</strong>: feels faster to users but does not change token cost. <strong>Batch</strong>: cheaper but not interactive.',
    tags: ['Cost tradeoffs', 'Responsiveness', 'Performance']
  },
  {
    id: 'aws-aif-fc-225',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'Are image generation models in Amazon Bedrock priced by tokens like text models?',
    hint: 'Count pictures, not words.',
    back: '<strong>No.</strong> Image generation models are generally priced <strong>per image generated</strong>, with the rate depending on factors such as <strong>resolution and quality</strong> settings, while text models are priced per input and output token. Estimate image costs from expected image counts and settings, not from prompt length.',
    tags: ['Cost tradeoffs', 'Image generation']
  }
];

export default AWS_AIF_FLASHCARDS_9;
