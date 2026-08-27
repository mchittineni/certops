export const AWS_CLF_FLASHCARDS = [
  {
    id: 'aws-clf-fc-1',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd1',
    front: 'What are the six pillars of the AWS Well-Architected Framework?',
    hint: 'Two of them were added after the original five.',
    back: 'Operational Excellence · Security · Reliability · Performance Efficiency · Cost Optimization · Sustainability.',
    tags: ['Well-Architected', 'Cloud Concepts']
  },
  {
    id: 'aws-clf-fc-2',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd2',
    front: 'Explain the AWS Shared Responsibility Model in one line each.',
    hint: '"of" versus "in".',
    back: 'AWS is responsible for security <strong>OF</strong> the cloud — hardware, the global infrastructure, hypervisor, managed-service software. The customer is responsible for security <strong>IN</strong> the cloud — IAM, OS patching on EC2, data encryption, network and firewall configuration, application code.',
    tags: ['Shared Responsibility', 'Security']
  },
  {
    id: 'aws-clf-fc-3',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd1',
    front: 'Region vs. Availability Zone vs. Edge Location',
    hint: 'Nested scopes.',
    back: 'A <strong>Region</strong> is a geographic area with (usually) three or more AZs. An <strong>Availability Zone</strong> is one or more discrete data centres with independent power/cooling/networking, low-latency-linked to its siblings. An <strong>Edge Location / PoP</strong> caches content for CloudFront and terminates Global Accelerator traffic — there are far more of them than Regions.',
    tags: ['Global Infrastructure', 'Cloud Concepts']
  },
  {
    id: 'aws-clf-fc-4',
    difficulty: 'medium',
    certId: 'aws-clf',
    domainId: 'd4',
    front: 'What do the four AWS Support plans give you?',
    hint: 'Response time and who you can call.',
    back: '<strong>Basic</strong> — free, docs and Trusted Advisor core checks. <strong>Developer</strong> — business-hours email to a Cloud Support Associate. <strong>Business</strong> — 24/7 phone/chat/email, all Trusted Advisor checks, API support. <strong>Enterprise (and Enterprise On-Ramp)</strong> — a Technical Account Manager, 15-minute critical response, concierge and well-architected reviews.',
    tags: ['Support Plans', 'Billing']
  },
  {
    id: 'aws-clf-fc-5',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd4',
    front: 'Which tool answers: "what will this cost", "what did it cost", "stop me at a limit"?',
    hint: 'Three different consoles.',
    back: '<strong>AWS Pricing Calculator</strong> — model the cost of an architecture before you build it. <strong>AWS Cost Explorer</strong> — visualise and forecast historical spend by service/tag/account. <strong>AWS Budgets</strong> — set cost, usage, or RI-coverage thresholds and alert (or trigger actions) when they are breached.',
    tags: ['Cost Explorer', 'Budgets', 'Billing']
  },
  {
    id: 'aws-clf-fc-6',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd3',
    front: 'What is the difference between EC2, ECS/EKS, Fargate, and Lambda?',
    hint: 'How much of the stack you still manage.',
    back: '<strong>EC2</strong> — you manage the OS and the instance. <strong>ECS/EKS</strong> — container orchestration; you can still own the worker nodes. <strong>Fargate</strong> — serverless compute engine for containers, no nodes to patch. <strong>Lambda</strong> — event-driven functions, up to 15-minute execution, billed per millisecond, zero infrastructure.',
    tags: ['EC2', 'Lambda', 'Fargate', 'Compute']
  },
  {
    id: 'aws-clf-fc-7',
    difficulty: 'medium',
    certId: 'aws-clf',
    domainId: 'd2',
    front: 'What does AWS Organizations plus SCPs actually control?',
    hint: 'They never grant anything.',
    back: 'Organizations gives you consolidated billing, volume discounts, and an OU hierarchy. <strong>Service Control Policies</strong> set the maximum available permissions for accounts in an OU — they are guardrails, not grants; an action still needs an IAM allow to work. The management account is not restricted by SCPs.',
    tags: ['Organizations', 'SCP', 'Governance']
  },
  {
    id: 'aws-clf-fc-8',
    difficulty: 'medium',
    certId: 'aws-clf',
    domainId: 'd3',
    front: 'Which service migrates: bulk data offline, live databases, whole servers?',
    hint: 'Snow, DMS, MGN.',
    back: '<strong>Snowball / Snowmobile</strong> — petabyte-to-exabyte offline physical transfer. <strong>AWS DMS</strong> — homogeneous or heterogeneous database migration with minimal downtime (pair with SCT for schema conversion). <strong>AWS Application Migration Service (MGN)</strong> — lift-and-shift replication of physical/virtual servers into EC2. <strong>DataSync</strong> — ongoing online file/NFS/SMB transfer.',
    tags: ['Migration', 'Snowball', 'DMS']
  },
  {
    id: 'aws-clf-fc-9',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd2',
    front: 'CloudTrail vs. CloudWatch vs. AWS Config',
    hint: 'Who did it, how is it performing, is it compliant.',
    back: '<strong>CloudTrail</strong> — an audit log of API calls: who did what, when, from where. <strong>CloudWatch</strong> — metrics, logs, alarms, and dashboards for operational health. <strong>AWS Config</strong> — resource configuration history and rules that evaluate whether resources stay compliant over time.',
    tags: ['CloudTrail', 'CloudWatch', 'Config', 'Monitoring']
  },
  {
    id: 'aws-clf-fc-10',
    difficulty: 'easy',
    certId: 'aws-clf',
    domainId: 'd1',
    front: 'Name the six advantages of cloud computing AWS lists.',
    hint: 'CapEx, scale, guessing, speed, data centres, global.',
    back: 'Trade fixed expense for variable expense · Benefit from massive economies of scale · Stop guessing capacity · Increase speed and agility · Stop spending money running and maintaining data centres · Go global in minutes.',
    tags: ['Cloud Concepts', 'Value Proposition']
  }
];

export default AWS_CLF_FLASHCARDS;
