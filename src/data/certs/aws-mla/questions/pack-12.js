export const AWS_MLA_QUESTIONS_12 = [
  {
    id: "aws-mla-276",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Hosting Many Rarely Invoked Models: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The ML engineering team is hosting thousands of per-customer models that are each invoked only occasionally. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Deploy a SageMaker multi-container endpoint so that several containers sit behind the one endpoint and each request names the container it wants invoked." },
      { id: 'C', text: "Deploy a single endpoint with several production variants and route each customer's traffic to whichever variant is holding their own model." },
      { id: 'D', text: "Deploy a separate Serverless Inference endpoint for every customer so that idle models cost nothing at all between their invocations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, which is what thousands of cold models require. Multi-container endpoints host a small fixed number of containers, capped well below this scale. Production variants exist to split traffic across versions of one model for A/B tests and canaries, not to address models by customer. Per-customer serverless endpoints do idle at zero cost but run into the account's endpoint limits long before thousands.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-277",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Updating a Live Endpoint Safely: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The ML engineering team is replacing the model behind a live endpoint with automatic withdrawal if it misbehaves. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the new model as a second production variant on the endpoint and shift the variant weights across gradually while watching the metrics." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Deploy the new model as a shadow variant so that it receives a copy of production traffic without any response being returned to callers." },
      { id: 'D', text: "Deploy the new model onto a second endpoint and move the traffic across at the DNS or application layer once it appears healthy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the morning with nobody watching. Shifting production variant weights achieves the same gradual exposure but the rollback is a manual weight change once somebody notices. Shadow variants are excellent for validating a candidate against real traffic and never serve a single user, so they cannot complete the update. A second endpoint with DNS cutover works but places the traffic control and the rollback outside SageMaker entirely.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-278",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Automating the Path From Data to an Approved Model: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The ML engineering team is automating retraining from data preparation through evaluation to a registered model. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define an AWS Step Functions state machine that calls each of the SageMaker APIs in turn using the optimised service integrations that it already provides." },
      { id: 'B', text: "Define an Amazon MWAA DAG running Apache Airflow that submits each SageMaker job in the workflow as an individual task." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Define an EventBridge rule on a schedule that starts the training job and a Lambda function that registers whichever model results." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the evaluation metric without any extra service. Step Functions and MWAA both orchestrate the same jobs correctly and are the right answer when the workflow spans well beyond ML, at the cost of tracking lineage and caching separately. A scheduled rule with a Lambda handles one linear path and offers neither the conditional promotion nor the lineage this requires.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-279",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Endpoint Type for Large Payloads and Long Runtimes: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The ML engineering team is serving requests that arrive individually, carry large payloads, and take minutes to process. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Batch Transform to score the payloads, since it reads the large objects straight from S3 without any endpoint that has to be kept running between jobs." },
      { id: 'B', text: "Use Serverless Inference so that the endpoint scales down to zero between requests and the large payloads are handled as they arrive." },
      { id: 'C', text: "Use a Real-Time Endpoint behind an SQS queue with a Lambda consumer that invokes the endpoint once for each queued payload." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified rather than waiting on a connection. Batch Transform handles the size comfortably but is designed for a set of records processed together, not requests arriving one at a time. Serverless Inference has much smaller payload and timeout limits and cold-starts on infrequent traffic. Queue plus Lambda rebuilds the asynchronous pattern by hand and still runs into the endpoint's own request timeout.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-280",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Hosting Many Rarely Invoked Models: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The ML engineering team is hosting thousands of per-customer models that are each invoked only occasionally. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Deploy a SageMaker multi-container endpoint so that several containers sit behind the one endpoint and each request names the container it wants invoked." },
      { id: 'C', text: "Deploy a single endpoint with several production variants and route each customer's traffic to whichever variant is holding their own model." },
      { id: 'D', text: "Deploy a separate Serverless Inference endpoint for every customer so that idle models cost nothing at all between their invocations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, which is what thousands of cold models require. Multi-container endpoints host a small fixed number of containers, capped well below this scale. Production variants exist to split traffic across versions of one model for A/B tests and canaries, not to address models by customer. Per-customer serverless endpoints do idle at zero cost but run into the account's endpoint limits long before thousands.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-281",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Updating a Live Endpoint Safely: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The ML engineering team is replacing the model behind a live endpoint with automatic withdrawal if it misbehaves. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the new model as a second production variant on the endpoint and shift the variant weights across gradually while watching the metrics." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Deploy the new model as a shadow variant so that it receives a copy of production traffic without any response being returned to callers." },
      { id: 'D', text: "Deploy the new model onto a second endpoint and move the traffic across at the DNS or application layer once it appears healthy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the morning with nobody watching. Shifting production variant weights achieves the same gradual exposure but the rollback is a manual weight change once somebody notices. Shadow variants are excellent for validating a candidate against real traffic and never serve a single user, so they cannot complete the update. A second endpoint with DNS cutover works but places the traffic control and the rollback outside SageMaker entirely.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-282",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Automating the Path From Data to an Approved Model: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The ML engineering team is automating retraining from data preparation through evaluation to a registered model. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define an AWS Step Functions state machine that calls each of the SageMaker APIs in turn using the optimised service integrations that it already provides." },
      { id: 'B', text: "Define an Amazon MWAA DAG running Apache Airflow that submits each SageMaker job in the workflow as an individual task." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Define an EventBridge rule on a schedule that starts the training job and a Lambda function that registers whichever model results." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the evaluation metric without any extra service. Step Functions and MWAA both orchestrate the same jobs correctly and are the right answer when the workflow spans well beyond ML, at the cost of tracking lineage and caching separately. A scheduled rule with a Lambda handles one linear path and offers neither the conditional promotion nor the lineage this requires.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-283",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Endpoint Type for Large Payloads and Long Runtimes: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The ML engineering team is serving requests that arrive individually, carry large payloads, and take minutes to process. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Batch Transform to score the payloads, since it reads the large objects straight from S3 without any endpoint that has to be kept running between jobs." },
      { id: 'B', text: "Use Serverless Inference so that the endpoint scales down to zero between requests and the large payloads are handled as they arrive." },
      { id: 'C', text: "Use a Real-Time Endpoint behind an SQS queue with a Lambda consumer that invokes the endpoint once for each queued payload." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified rather than waiting on a connection. Batch Transform handles the size comfortably but is designed for a set of records processed together, not requests arriving one at a time. Serverless Inference has much smaller payload and timeout limits and cold-starts on infrequent traffic. Queue plus Lambda rebuilds the asynchronous pattern by hand and still runs into the endpoint's own request timeout.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-284",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Hosting Many Rarely Invoked Models: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The ML engineering team is hosting thousands of per-customer models that are each invoked only occasionally. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Deploy a SageMaker multi-container endpoint so that several containers sit behind the one endpoint and each request names the container it wants invoked." },
      { id: 'C', text: "Deploy a single endpoint with several production variants and route each customer's traffic to whichever variant is holding their own model." },
      { id: 'D', text: "Deploy a separate Serverless Inference endpoint for every customer so that idle models cost nothing at all between their invocations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, which is what thousands of cold models require. Multi-container endpoints host a small fixed number of containers, capped well below this scale. Production variants exist to split traffic across versions of one model for A/B tests and canaries, not to address models by customer. Per-customer serverless endpoints do idle at zero cost but run into the account's endpoint limits long before thousands.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-285",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Updating a Live Endpoint Safely: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The ML engineering team is replacing the model behind a live endpoint with automatic withdrawal if it misbehaves. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the new model as a second production variant on the endpoint and shift the variant weights across gradually while watching the metrics." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Deploy the new model as a shadow variant so that it receives a copy of production traffic without any response being returned to callers." },
      { id: 'D', text: "Deploy the new model onto a second endpoint and move the traffic across at the DNS or application layer once it appears healthy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the morning with nobody watching. Shifting production variant weights achieves the same gradual exposure but the rollback is a manual weight change once somebody notices. Shadow variants are excellent for validating a candidate against real traffic and never serve a single user, so they cannot complete the update. A second endpoint with DNS cutover works but places the traffic control and the rollback outside SageMaker entirely.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-286",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Automating the Path From Data to an Approved Model: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The ML engineering team is automating retraining from data preparation through evaluation to a registered model. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define an AWS Step Functions state machine that calls each of the SageMaker APIs in turn using the optimised service integrations that it already provides." },
      { id: 'B', text: "Define an Amazon MWAA DAG running Apache Airflow that submits each SageMaker job in the workflow as an individual task." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Define an EventBridge rule on a schedule that starts the training job and a Lambda function that registers whichever model results." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the evaluation metric without any extra service. Step Functions and MWAA both orchestrate the same jobs correctly and are the right answer when the workflow spans well beyond ML, at the cost of tracking lineage and caching separately. A scheduled rule with a Lambda handles one linear path and offers neither the conditional promotion nor the lineage this requires.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-287",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Endpoint Type for Large Payloads and Long Runtimes: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The ML engineering team is serving requests that arrive individually, carry large payloads, and take minutes to process. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Batch Transform to score the payloads, since it reads the large objects straight from S3 without any endpoint that has to be kept running between jobs." },
      { id: 'B', text: "Use Serverless Inference so that the endpoint scales down to zero between requests and the large payloads are handled as they arrive." },
      { id: 'C', text: "Use a Real-Time Endpoint behind an SQS queue with a Lambda consumer that invokes the endpoint once for each queued payload." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified rather than waiting on a connection. Batch Transform handles the size comfortably but is designed for a set of records processed together, not requests arriving one at a time. Serverless Inference has much smaller payload and timeout limits and cold-starts on infrequent traffic. Queue plus Lambda rebuilds the asynchronous pattern by hand and still runs into the endpoint's own request timeout.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-288",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Hosting Many Rarely Invoked Models: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The ML engineering team is hosting thousands of per-customer models that are each invoked only occasionally. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Deploy a SageMaker multi-container endpoint so that several containers sit behind the one endpoint and each request names the container it wants invoked." },
      { id: 'C', text: "Deploy a single endpoint with several production variants and route each customer's traffic to whichever variant is holding their own model." },
      { id: 'D', text: "Deploy a separate Serverless Inference endpoint for every customer so that idle models cost nothing at all between their invocations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, which is what thousands of cold models require. Multi-container endpoints host a small fixed number of containers, capped well below this scale. Production variants exist to split traffic across versions of one model for A/B tests and canaries, not to address models by customer. Per-customer serverless endpoints do idle at zero cost but run into the account's endpoint limits long before thousands.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-289",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Updating a Live Endpoint Safely: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The ML engineering team is replacing the model behind a live endpoint with automatic withdrawal if it misbehaves. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the new model as a second production variant on the endpoint and shift the variant weights across gradually while watching the metrics." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Deploy the new model as a shadow variant so that it receives a copy of production traffic without any response being returned to callers." },
      { id: 'D', text: "Deploy the new model onto a second endpoint and move the traffic across at the DNS or application layer once it appears healthy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the morning with nobody watching. Shifting production variant weights achieves the same gradual exposure but the rollback is a manual weight change once somebody notices. Shadow variants are excellent for validating a candidate against real traffic and never serve a single user, so they cannot complete the update. A second endpoint with DNS cutover works but places the traffic control and the rollback outside SageMaker entirely.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-290",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Automating the Path From Data to an Approved Model: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The ML engineering team is automating retraining from data preparation through evaluation to a registered model. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define an AWS Step Functions state machine that calls each of the SageMaker APIs in turn using the optimised service integrations that it already provides." },
      { id: 'B', text: "Define an Amazon MWAA DAG running Apache Airflow that submits each SageMaker job in the workflow as an individual task." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Define an EventBridge rule on a schedule that starts the training job and a Lambda function that registers whichever model results." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the evaluation metric without any extra service. Step Functions and MWAA both orchestrate the same jobs correctly and are the right answer when the workflow spans well beyond ML, at the cost of tracking lineage and caching separately. A scheduled rule with a Lambda handles one linear path and offers neither the conditional promotion nor the lineage this requires.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-291",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Endpoint Type for Large Payloads and Long Runtimes: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The ML engineering team is serving requests that arrive individually, carry large payloads, and take minutes to process. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Batch Transform to score the payloads, since it reads the large objects straight from S3 without any endpoint that has to be kept running between jobs." },
      { id: 'B', text: "Use Serverless Inference so that the endpoint scales down to zero between requests and the large payloads are handled as they arrive." },
      { id: 'C', text: "Use a Real-Time Endpoint behind an SQS queue with a Lambda consumer that invokes the endpoint once for each queued payload." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified rather than waiting on a connection. Batch Transform handles the size comfortably but is designed for a set of records processed together, not requests arriving one at a time. Serverless Inference has much smaller payload and timeout limits and cold-starts on infrequent traffic. Queue plus Lambda rebuilds the asynchronous pattern by hand and still runs into the endpoint's own request timeout.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-292",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Hosting Many Rarely Invoked Models: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The ML engineering team is hosting thousands of per-customer models that are each invoked only occasionally. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Deploy a SageMaker multi-container endpoint so that several containers sit behind the one endpoint and each request names the container it wants invoked." },
      { id: 'C', text: "Deploy a single endpoint with several production variants and route each customer's traffic to whichever variant is holding their own model." },
      { id: 'D', text: "Deploy a separate Serverless Inference endpoint for every customer so that idle models cost nothing at all between their invocations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, which is what thousands of cold models require. Multi-container endpoints host a small fixed number of containers, capped well below this scale. Production variants exist to split traffic across versions of one model for A/B tests and canaries, not to address models by customer. Per-customer serverless endpoints do idle at zero cost but run into the account's endpoint limits long before thousands.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-293",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Updating a Live Endpoint Safely: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The ML engineering team is replacing the model behind a live endpoint with automatic withdrawal if it misbehaves. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the new model as a second production variant on the endpoint and shift the variant weights across gradually while watching the metrics." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Deploy the new model as a shadow variant so that it receives a copy of production traffic without any response being returned to callers." },
      { id: 'D', text: "Deploy the new model onto a second endpoint and move the traffic across at the DNS or application layer once it appears healthy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the morning with nobody watching. Shifting production variant weights achieves the same gradual exposure but the rollback is a manual weight change once somebody notices. Shadow variants are excellent for validating a candidate against real traffic and never serve a single user, so they cannot complete the update. A second endpoint with DNS cutover works but places the traffic control and the rollback outside SageMaker entirely.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-294",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Automating the Path From Data to an Approved Model: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The ML engineering team is automating retraining from data preparation through evaluation to a registered model. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define an AWS Step Functions state machine that calls each of the SageMaker APIs in turn using the optimised service integrations that it already provides." },
      { id: 'B', text: "Define an Amazon MWAA DAG running Apache Airflow that submits each SageMaker job in the workflow as an individual task." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Define an EventBridge rule on a schedule that starts the training job and a Lambda function that registers whichever model results." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the evaluation metric without any extra service. Step Functions and MWAA both orchestrate the same jobs correctly and are the right answer when the workflow spans well beyond ML, at the cost of tracking lineage and caching separately. A scheduled rule with a Lambda handles one linear path and offers neither the conditional promotion nor the lineage this requires.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-295",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Endpoint Type for Large Payloads and Long Runtimes: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The ML engineering team is serving requests that arrive individually, carry large payloads, and take minutes to process. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Batch Transform to score the payloads, since it reads the large objects straight from S3 without any endpoint that has to be kept running between jobs." },
      { id: 'B', text: "Use Serverless Inference so that the endpoint scales down to zero between requests and the large payloads are handled as they arrive." },
      { id: 'C', text: "Use a Real-Time Endpoint behind an SQS queue with a Lambda consumer that invokes the endpoint once for each queued payload." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified rather than waiting on a connection. Batch Transform handles the size comfortably but is designed for a set of records processed together, not requests arriving one at a time. Serverless Inference has much smaller payload and timeout limits and cold-starts on infrequent traffic. Queue plus Lambda rebuilds the asynchronous pattern by hand and still runs into the endpoint's own request timeout.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-296",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Hosting Many Rarely Invoked Models: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The ML engineering team is hosting thousands of per-customer models that are each invoked only occasionally. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Deploy a SageMaker multi-container endpoint so that several containers sit behind the one endpoint and each request names the container it wants invoked." },
      { id: 'C', text: "Deploy a single endpoint with several production variants and route each customer's traffic to whichever variant is holding their own model." },
      { id: 'D', text: "Deploy a separate Serverless Inference endpoint for every customer so that idle models cost nothing at all between their invocations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, which is what thousands of cold models require. Multi-container endpoints host a small fixed number of containers, capped well below this scale. Production variants exist to split traffic across versions of one model for A/B tests and canaries, not to address models by customer. Per-customer serverless endpoints do idle at zero cost but run into the account's endpoint limits long before thousands.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-297",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Updating a Live Endpoint Safely: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The ML engineering team is replacing the model behind a live endpoint with automatic withdrawal if it misbehaves. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the new model as a second production variant on the endpoint and shift the variant weights across gradually while watching the metrics." },
      { id: 'B', text: "Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms." },
      { id: 'C', text: "Deploy the new model as a shadow variant so that it receives a copy of production traffic without any response being returned to callers." },
      { id: 'D', text: "Deploy the new model onto a second endpoint and move the traffic across at the DNS or application layer once it appears healthy." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the morning with nobody watching. Shifting production variant weights achieves the same gradual exposure but the rollback is a manual weight change once somebody notices. Shadow variants are excellent for validating a candidate against real traffic and never serve a single user, so they cannot complete the update. A second endpoint with DNS cutover works but places the traffic control and the rollback outside SageMaker entirely.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["deployment-guardrails", "blue-green", "canary", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-298",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Automating the Path From Data to an Approved Model: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The ML engineering team is automating retraining from data preparation through evaluation to a registered model. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define an AWS Step Functions state machine that calls each of the SageMaker APIs in turn using the optimised service integrations that it already provides." },
      { id: 'B', text: "Define an Amazon MWAA DAG running Apache Airflow that submits each SageMaker job in the workflow as an individual task." },
      { id: 'C', text: "Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion." },
      { id: 'D', text: "Define an EventBridge rule on a schedule that starts the training job and a Lambda function that registers whichever model results." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the evaluation metric without any extra service. Step Functions and MWAA both orchestrate the same jobs correctly and are the right answer when the workflow spans well beyond ML, at the cost of tracking lineage and caching separately. A scheduled rule with a Lambda handles one linear path and offers neither the conditional promotion nor the lineage this requires.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["pipelines", "mlops", "orchestration", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-299",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Endpoint Type for Large Payloads and Long Runtimes: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The ML engineering team is serving requests that arrive individually, carry large payloads, and take minutes to process. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Batch Transform to score the payloads, since it reads the large objects straight from S3 without any endpoint that has to be kept running between jobs." },
      { id: 'B', text: "Use Serverless Inference so that the endpoint scales down to zero between requests and the large payloads are handled as they arrive." },
      { id: 'C', text: "Use a Real-Time Endpoint behind an SQS queue with a Lambda consumer that invokes the endpoint once for each queued payload." },
      { id: 'D', text: "Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified rather than waiting on a connection. Batch Transform handles the size comfortably but is designed for a set of records processed together, not requests arriving one at a time. Serverless Inference has much smaller payload and timeout limits and cold-starts on infrequent traffic. Queue plus Lambda rebuilds the asynchronous pattern by hand and still runs into the endpoint's own request timeout.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["inference", "asynchronous-inference", "real-time", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-300",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    domainName: "Model Deployment, Serving, and Orchestration",
    title: "Hosting Many Rarely Invoked Models: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The ML engineering team is hosting thousands of per-customer models that are each invoked only occasionally. The work is scoped to the staging environment.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3." },
      { id: 'B', text: "Deploy a SageMaker multi-container endpoint so that several containers sit behind the one endpoint and each request names the container it wants invoked." },
      { id: 'C', text: "Deploy a single endpoint with several production variants and route each customer's traffic to whichever variant is holding their own model." },
      { id: 'D', text: "Deploy a separate Serverless Inference endpoint for every customer so that idle models cost nothing at all between their invocations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, which is what thousands of cold models require. Multi-container endpoints host a small fixed number of containers, capped well below this scale. Production variants exist to split traffic across versions of one model for A/B tests and canaries, not to address models by customer. Per-customer serverless endpoints do idle at zero cost but run into the account's endpoint limits long before thousands.",
    referenceUrl: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    tags: ["mme", "multi-model", "cost-efficiency", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_QUESTIONS_12;
