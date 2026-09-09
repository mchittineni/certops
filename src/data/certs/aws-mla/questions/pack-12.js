export const AWS_MLA_QUESTIONS_12 = [
  {
    id: "aws-mla-276",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Multi-Model Endpoints (MME): High-Frequency FinTech Trading",
    scenario: "In an enterprise high-frequency fintech trading ML environment, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The AWS MLOps engineering team is currently cost-effective hosting for hundreds of specialized models under production pipeline release 12.1.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these high-frequency fintech trading requirements for sagemaker multi-model endpoints (mme)?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Provision dedicated high-end GPU endpoints for 5,000 rarely used customer models." },
      { id: 'C', text: "Combine 500 unrelated models into a single giant monolithic script container." },
      { id: 'D', text: "Host all customer models on a single unprotected public EC2 instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Multi-Model Endpoints (MME) provide a cost-effective solution to deploy thousands of models behind a single endpoint. SageMaker manages memory by dynamically loading models from Amazon S3 into memory upon invocation and caching active models on shared container instances.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-277",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Blue/Green Deployment Guardrails: Healthcare Patient Records & HIPAA",
    scenario: "In an enterprise healthcare patient records & hipaa ML environment, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The AWS MLOps engineering team is currently zero-downtime model updates with automated rollback under production pipeline release 12.2.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these healthcare patient records & hipaa requirements for blue/green deployment guardrails?",
    options: [
      { id: 'A', text: "Instantly switch 100% of production traffic to an untested new model container with no monitoring." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Terminate the existing endpoint and wait 20 minutes for a fresh endpoint to spin up during peak business hours." },
      { id: 'D', text: "Deploy model updates directly into production without staging or health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Deployment Guardrails enable safe model deployments using Blue/Green strategies (Canary or Linear traffic shifting). CloudWatch alarms continuously monitor model latency, error rates, and 5xx responses; if an anomaly occurs, traffic automatically reverts to the original model without downtime.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-278",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Pipelines Orchestration: Global E-Commerce Black Friday Scale",
    scenario: "In an enterprise global e-commerce black friday scale ML environment, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The AWS MLOps engineering team is currently automated end-to-end mlops ci/cd pipelines under production pipeline release 12.3.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these global e-commerce black friday scale requirements for sagemaker pipelines orchestration?",
    options: [
      { id: 'A', text: "Write manual cron jobs that run disparate Python scripts without dependency tracking or status reporting." },
      { id: 'B', text: "Manually click web console buttons to initiate model training and deployment steps." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Trigger production deployments directly from uncommitted local Jupyter notebooks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is a purpose-built CI/CD and workflow orchestration service for machine learning. It provides Python SDK primitives to define Directed Acyclic Graphs (DAGs), manage step dependencies, execute automated evaluations, and register approved models into the Model Registry.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-279",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Real-Time vs Asynchronous Inference: Autonomous Vehicle Telemetry",
    scenario: "In an enterprise autonomous vehicle telemetry ML environment, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The AWS MLOps engineering team is currently matching endpoint architecture to latency and payload requirements under production pipeline release 12.4.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these autonomous vehicle telemetry requirements for sagemaker real-time vs asynchronous inference?",
    options: [
      { id: 'A', text: "Use synchronous Real-Time Endpoints with 5-minute client HTTP timeouts for 500MB computer vision video files." },
      { id: 'B', text: "Deploy multi-node GPU clusters for batch inference jobs that only run once every Sunday night." },
      { id: 'C', text: "Use Serverless Inference for steady-state workloads generating 100,000 requests every second." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker offers diverse hosting options: Real-Time endpoints are optimized for persistent low-latency (<100ms) apps; Asynchronous Inference queues requests in S3 for large payloads (up to 1GB) and long timeouts (up to 1hr); Serverless handles intermittent traffic with zero idle cost; Batch Transform handles offline bulk scoring.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-280",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Multi-Model Endpoints (MME): Multi-Tenant B2B SaaS Platform",
    scenario: "In an enterprise multi-tenant b2b saas platform ML environment, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The AWS MLOps engineering team is currently cost-effective hosting for hundreds of specialized models under production pipeline release 12.5.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these multi-tenant b2b saas platform requirements for sagemaker multi-model endpoints (mme)?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Provision dedicated high-end GPU endpoints for 5,000 rarely used customer models." },
      { id: 'C', text: "Combine 500 unrelated models into a single giant monolithic script container." },
      { id: 'D', text: "Host all customer models on a single unprotected public EC2 instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Multi-Model Endpoints (MME) provide a cost-effective solution to deploy thousands of models behind a single endpoint. SageMaker manages memory by dynamically loading models from Amazon S3 into memory upon invocation and caching active models on shared container instances.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-281",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Blue/Green Deployment Guardrails: Media Streaming & Global CDN",
    scenario: "In an enterprise media streaming & global cdn ML environment, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The AWS MLOps engineering team is currently zero-downtime model updates with automated rollback under production pipeline release 12.6.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these media streaming & global cdn requirements for blue/green deployment guardrails?",
    options: [
      { id: 'A', text: "Instantly switch 100% of production traffic to an untested new model container with no monitoring." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Terminate the existing endpoint and wait 20 minutes for a fresh endpoint to spin up during peak business hours." },
      { id: 'D', text: "Deploy model updates directly into production without staging or health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Deployment Guardrails enable safe model deployments using Blue/Green strategies (Canary or Linear traffic shifting). CloudWatch alarms continuously monitor model latency, error rates, and 5xx responses; if an anomaly occurs, traffic automatically reverts to the original model without downtime.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-282",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Pipelines Orchestration: Aerospace Satellite Ground Systems",
    scenario: "In an enterprise aerospace satellite ground systems ML environment, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The AWS MLOps engineering team is currently automated end-to-end mlops ci/cd pipelines under production pipeline release 12.7.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these aerospace satellite ground systems requirements for sagemaker pipelines orchestration?",
    options: [
      { id: 'A', text: "Write manual cron jobs that run disparate Python scripts without dependency tracking or status reporting." },
      { id: 'B', text: "Manually click web console buttons to initiate model training and deployment steps." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Trigger production deployments directly from uncommitted local Jupyter notebooks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is a purpose-built CI/CD and workflow orchestration service for machine learning. It provides Python SDK primitives to define Directed Acyclic Graphs (DAGs), manage step dependencies, execute automated evaluations, and register approved models into the Model Registry.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-283",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Real-Time vs Asynchronous Inference: Telecommunications 5G Core Network",
    scenario: "In an enterprise telecommunications 5g core network ML environment, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The AWS MLOps engineering team is currently matching endpoint architecture to latency and payload requirements under production pipeline release 12.8.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these telecommunications 5g core network requirements for sagemaker real-time vs asynchronous inference?",
    options: [
      { id: 'A', text: "Use synchronous Real-Time Endpoints with 5-minute client HTTP timeouts for 500MB computer vision video files." },
      { id: 'B', text: "Deploy multi-node GPU clusters for batch inference jobs that only run once every Sunday night." },
      { id: 'C', text: "Use Serverless Inference for steady-state workloads generating 100,000 requests every second." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker offers diverse hosting options: Real-Time endpoints are optimized for persistent low-latency (<100ms) apps; Asynchronous Inference queues requests in S3 for large payloads (up to 1GB) and long timeouts (up to 1hr); Serverless handles intermittent traffic with zero idle cost; Batch Transform handles offline bulk scoring.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-284",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Multi-Model Endpoints (MME): Renewable Energy Smart Grid IoT",
    scenario: "In an enterprise renewable energy smart grid iot ML environment, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The AWS MLOps engineering team is currently cost-effective hosting for hundreds of specialized models under production pipeline release 12.9.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these renewable energy smart grid iot requirements for sagemaker multi-model endpoints (mme)?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Provision dedicated high-end GPU endpoints for 5,000 rarely used customer models." },
      { id: 'C', text: "Combine 500 unrelated models into a single giant monolithic script container." },
      { id: 'D', text: "Host all customer models on a single unprotected public EC2 instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Multi-Model Endpoints (MME) provide a cost-effective solution to deploy thousands of models behind a single endpoint. SageMaker manages memory by dynamically loading models from Amazon S3 into memory upon invocation and caching active models on shared container instances.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-285",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Blue/Green Deployment Guardrails: Supply Chain Cold-Chain Logistics",
    scenario: "In an enterprise supply chain cold-chain logistics ML environment, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The AWS MLOps engineering team is currently zero-downtime model updates with automated rollback under production pipeline release 12.10.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these supply chain cold-chain logistics requirements for blue/green deployment guardrails?",
    options: [
      { id: 'A', text: "Instantly switch 100% of production traffic to an untested new model container with no monitoring." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Terminate the existing endpoint and wait 20 minutes for a fresh endpoint to spin up during peak business hours." },
      { id: 'D', text: "Deploy model updates directly into production without staging or health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Deployment Guardrails enable safe model deployments using Blue/Green strategies (Canary or Linear traffic shifting). CloudWatch alarms continuously monitor model latency, error rates, and 5xx responses; if an anomaly occurs, traffic automatically reverts to the original model without downtime.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-286",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Pipelines Orchestration: Banking Core Ledger & Payments",
    scenario: "In an enterprise banking core ledger & payments ML environment, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The AWS MLOps engineering team is currently automated end-to-end mlops ci/cd pipelines under production pipeline release 12.11.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these banking core ledger & payments requirements for sagemaker pipelines orchestration?",
    options: [
      { id: 'A', text: "Write manual cron jobs that run disparate Python scripts without dependency tracking or status reporting." },
      { id: 'B', text: "Manually click web console buttons to initiate model training and deployment steps." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Trigger production deployments directly from uncommitted local Jupyter notebooks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is a purpose-built CI/CD and workflow orchestration service for machine learning. It provides Python SDK primitives to define Directed Acyclic Graphs (DAGs), manage step dependencies, execute automated evaluations, and register approved models into the Model Registry.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-287",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Real-Time vs Asynchronous Inference: Genomic Sequencing & Biotech Pipeline",
    scenario: "In an enterprise genomic sequencing & biotech pipeline ML environment, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The AWS MLOps engineering team is currently matching endpoint architecture to latency and payload requirements under production pipeline release 12.12.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these genomic sequencing & biotech pipeline requirements for sagemaker real-time vs asynchronous inference?",
    options: [
      { id: 'A', text: "Use synchronous Real-Time Endpoints with 5-minute client HTTP timeouts for 500MB computer vision video files." },
      { id: 'B', text: "Deploy multi-node GPU clusters for batch inference jobs that only run once every Sunday night." },
      { id: 'C', text: "Use Serverless Inference for steady-state workloads generating 100,000 requests every second." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker offers diverse hosting options: Real-Time endpoints are optimized for persistent low-latency (<100ms) apps; Asynchronous Inference queues requests in S3 for large payloads (up to 1GB) and long timeouts (up to 1hr); Serverless handles intermittent traffic with zero idle cost; Batch Transform handles offline bulk scoring.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-288",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Multi-Model Endpoints (MME): Defense-Grade Zero-Trust Network",
    scenario: "In an enterprise defense-grade zero-trust network ML environment, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The AWS MLOps engineering team is currently cost-effective hosting for hundreds of specialized models under production pipeline release 12.13.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these defense-grade zero-trust network requirements for sagemaker multi-model endpoints (mme)?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Provision dedicated high-end GPU endpoints for 5,000 rarely used customer models." },
      { id: 'C', text: "Combine 500 unrelated models into a single giant monolithic script container." },
      { id: 'D', text: "Host all customer models on a single unprotected public EC2 instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Multi-Model Endpoints (MME) provide a cost-effective solution to deploy thousands of models behind a single endpoint. SageMaker manages memory by dynamically loading models from Amazon S3 into memory upon invocation and caching active models on shared container instances.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-289",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Blue/Green Deployment Guardrails: Online Multiplayer Gaming Engine",
    scenario: "In an enterprise online multiplayer gaming engine ML environment, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The AWS MLOps engineering team is currently zero-downtime model updates with automated rollback under production pipeline release 12.14.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these online multiplayer gaming engine requirements for blue/green deployment guardrails?",
    options: [
      { id: 'A', text: "Instantly switch 100% of production traffic to an untested new model container with no monitoring." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Terminate the existing endpoint and wait 20 minutes for a fresh endpoint to spin up during peak business hours." },
      { id: 'D', text: "Deploy model updates directly into production without staging or health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Deployment Guardrails enable safe model deployments using Blue/Green strategies (Canary or Linear traffic shifting). CloudWatch alarms continuously monitor model latency, error rates, and 5xx responses; if an anomaly occurs, traffic automatically reverts to the original model without downtime.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-290",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Pipelines Orchestration: Insurance Risk & Actuarial Modeling",
    scenario: "In an enterprise insurance risk & actuarial modeling ML environment, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The AWS MLOps engineering team is currently automated end-to-end mlops ci/cd pipelines under production pipeline release 12.15.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these insurance risk & actuarial modeling requirements for sagemaker pipelines orchestration?",
    options: [
      { id: 'A', text: "Write manual cron jobs that run disparate Python scripts without dependency tracking or status reporting." },
      { id: 'B', text: "Manually click web console buttons to initiate model training and deployment steps." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Trigger production deployments directly from uncommitted local Jupyter notebooks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is a purpose-built CI/CD and workflow orchestration service for machine learning. It provides Python SDK primitives to define Directed Acyclic Graphs (DAGs), manage step dependencies, execute automated evaluations, and register approved models into the Model Registry.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-291",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Real-Time vs Asynchronous Inference: Pharmaceutical Clinical Trial Platform",
    scenario: "In an enterprise pharmaceutical clinical trial platform ML environment, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The AWS MLOps engineering team is currently matching endpoint architecture to latency and payload requirements under production pipeline release 12.16.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these pharmaceutical clinical trial platform requirements for sagemaker real-time vs asynchronous inference?",
    options: [
      { id: 'A', text: "Use synchronous Real-Time Endpoints with 5-minute client HTTP timeouts for 500MB computer vision video files." },
      { id: 'B', text: "Deploy multi-node GPU clusters for batch inference jobs that only run once every Sunday night." },
      { id: 'C', text: "Use Serverless Inference for steady-state workloads generating 100,000 requests every second." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker offers diverse hosting options: Real-Time endpoints are optimized for persistent low-latency (<100ms) apps; Asynchronous Inference queues requests in S3 for large payloads (up to 1GB) and long timeouts (up to 1hr); Serverless handles intermittent traffic with zero idle cost; Batch Transform handles offline bulk scoring.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-292",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Multi-Model Endpoints (MME): Smart City Traffic & Mobility Sensor Hub",
    scenario: "In an enterprise smart city traffic & mobility sensor hub ML environment, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The AWS MLOps engineering team is currently cost-effective hosting for hundreds of specialized models under production pipeline release 12.17.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these smart city traffic & mobility sensor hub requirements for sagemaker multi-model endpoints (mme)?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Provision dedicated high-end GPU endpoints for 5,000 rarely used customer models." },
      { id: 'C', text: "Combine 500 unrelated models into a single giant monolithic script container." },
      { id: 'D', text: "Host all customer models on a single unprotected public EC2 instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Multi-Model Endpoints (MME) provide a cost-effective solution to deploy thousands of models behind a single endpoint. SageMaker manages memory by dynamically loading models from Amazon S3 into memory upon invocation and caching active models on shared container instances.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-293",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Blue/Green Deployment Guardrails: Digital Identity & Biometric Verification",
    scenario: "In an enterprise digital identity & biometric verification ML environment, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The AWS MLOps engineering team is currently zero-downtime model updates with automated rollback under production pipeline release 12.18.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these digital identity & biometric verification requirements for blue/green deployment guardrails?",
    options: [
      { id: 'A', text: "Instantly switch 100% of production traffic to an untested new model container with no monitoring." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Terminate the existing endpoint and wait 20 minutes for a fresh endpoint to spin up during peak business hours." },
      { id: 'D', text: "Deploy model updates directly into production without staging or health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Deployment Guardrails enable safe model deployments using Blue/Green strategies (Canary or Linear traffic shifting). CloudWatch alarms continuously monitor model latency, error rates, and 5xx responses; if an anomaly occurs, traffic automatically reverts to the original model without downtime.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-294",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Pipelines Orchestration: Legal Discovery & Semantic Document Search",
    scenario: "In an enterprise legal discovery & semantic document search ML environment, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The AWS MLOps engineering team is currently automated end-to-end mlops ci/cd pipelines under production pipeline release 12.19.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these legal discovery & semantic document search requirements for sagemaker pipelines orchestration?",
    options: [
      { id: 'A', text: "Write manual cron jobs that run disparate Python scripts without dependency tracking or status reporting." },
      { id: 'B', text: "Manually click web console buttons to initiate model training and deployment steps." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Trigger production deployments directly from uncommitted local Jupyter notebooks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is a purpose-built CI/CD and workflow orchestration service for machine learning. It provides Python SDK primitives to define Directed Acyclic Graphs (DAGs), manage step dependencies, execute automated evaluations, and register approved models into the Model Registry.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-295",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Real-Time vs Asynchronous Inference: AdTech Real-Time Bidding Exchange",
    scenario: "In an enterprise adtech real-time bidding exchange ML environment, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The AWS MLOps engineering team is currently matching endpoint architecture to latency and payload requirements under production pipeline release 12.20.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these adtech real-time bidding exchange requirements for sagemaker real-time vs asynchronous inference?",
    options: [
      { id: 'A', text: "Use synchronous Real-Time Endpoints with 5-minute client HTTP timeouts for 500MB computer vision video files." },
      { id: 'B', text: "Deploy multi-node GPU clusters for batch inference jobs that only run once every Sunday night." },
      { id: 'C', text: "Use Serverless Inference for steady-state workloads generating 100,000 requests every second." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker offers diverse hosting options: Real-Time endpoints are optimized for persistent low-latency (<100ms) apps; Asynchronous Inference queues requests in S3 for large payloads (up to 1GB) and long timeouts (up to 1hr); Serverless handles intermittent traffic with zero idle cost; Batch Transform handles offline bulk scoring.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-296",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Multi-Model Endpoints (MME): Precision Agriculture & Drone Scouting",
    scenario: "In an enterprise precision agriculture & drone scouting ML environment, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The AWS MLOps engineering team is currently cost-effective hosting for hundreds of specialized models under production pipeline release 12.21.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these precision agriculture & drone scouting requirements for sagemaker multi-model endpoints (mme)?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Provision dedicated high-end GPU endpoints for 5,000 rarely used customer models." },
      { id: 'C', text: "Combine 500 unrelated models into a single giant monolithic script container." },
      { id: 'D', text: "Host all customer models on a single unprotected public EC2 instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Multi-Model Endpoints (MME) provide a cost-effective solution to deploy thousands of models behind a single endpoint. SageMaker manages memory by dynamically loading models from Amazon S3 into memory upon invocation and caching active models on shared container instances.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-297",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Blue/Green Deployment Guardrails: Industrial Robotics Predictive Maintenance",
    scenario: "In an enterprise industrial robotics predictive maintenance ML environment, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The AWS MLOps engineering team is currently zero-downtime model updates with automated rollback under production pipeline release 12.22.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these industrial robotics predictive maintenance requirements for blue/green deployment guardrails?",
    options: [
      { id: 'A', text: "Instantly switch 100% of production traffic to an untested new model container with no monitoring." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Terminate the existing endpoint and wait 20 minutes for a fresh endpoint to spin up during peak business hours." },
      { id: 'D', text: "Deploy model updates directly into production without staging or health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "SageMaker Deployment Guardrails enable safe model deployments using Blue/Green strategies (Canary or Linear traffic shifting). CloudWatch alarms continuously monitor model latency, error rates, and 5xx responses; if an anomaly occurs, traffic automatically reverts to the original model without downtime.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-298",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Pipelines Orchestration: Educational Remote Proctoring Platform",
    scenario: "In an enterprise educational remote proctoring platform ML environment, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The AWS MLOps engineering team is currently automated end-to-end mlops ci/cd pipelines under production pipeline release 12.23.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these educational remote proctoring platform requirements for sagemaker pipelines orchestration?",
    options: [
      { id: 'A', text: "Write manual cron jobs that run disparate Python scripts without dependency tracking or status reporting." },
      { id: 'B', text: "Manually click web console buttons to initiate model training and deployment steps." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Trigger production deployments directly from uncommitted local Jupyter notebooks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is a purpose-built CI/CD and workflow orchestration service for machine learning. It provides Python SDK primitives to define Directed Acyclic Graphs (DAGs), manage step dependencies, execute automated evaluations, and register approved models into the Model Registry.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-299",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Real-Time vs Asynchronous Inference: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In an enterprise real estate valuation & geo-spatial analytics ML environment, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The AWS MLOps engineering team is currently matching endpoint architecture to latency and payload requirements under production pipeline release 12.24.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these real estate valuation & geo-spatial analytics requirements for sagemaker real-time vs asynchronous inference?",
    options: [
      { id: 'A', text: "Use synchronous Real-Time Endpoints with 5-minute client HTTP timeouts for 500MB computer vision video files." },
      { id: 'B', text: "Deploy multi-node GPU clusters for batch inference jobs that only run once every Sunday night." },
      { id: 'C', text: "Use Serverless Inference for steady-state workloads generating 100,000 requests every second." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SageMaker offers diverse hosting options: Real-Time endpoints are optimized for persistent low-latency (<100ms) apps; Asynchronous Inference queues requests in S3 for large payloads (up to 1GB) and long timeouts (up to 1hr); Serverless handles intermittent traffic with zero idle cost; Batch Transform handles offline bulk scoring.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-300",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "SageMaker Multi-Model Endpoints (MME): Disaster Emergency Dispatch & Operations",
    scenario: "In an enterprise disaster emergency dispatch & operations ML environment, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The AWS MLOps engineering team is currently cost-effective hosting for hundreds of specialized models under production pipeline release 12.25.",
    question: "Which Amazon SageMaker service architecture or configuration satisfies these disaster emergency dispatch & operations requirements for sagemaker multi-model endpoints (mme)?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Provision dedicated high-end GPU endpoints for 5,000 rarely used customer models." },
      { id: 'C', text: "Combine 500 unrelated models into a single giant monolithic script container." },
      { id: 'D', text: "Host all customer models on a single unprotected public EC2 instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SageMaker Multi-Model Endpoints (MME) provide a cost-effective solution to deploy thousands of models behind a single endpoint. SageMaker manages memory by dynamically loading models from Amazon S3 into memory upon invocation and caching active models on shared container instances.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_12;
