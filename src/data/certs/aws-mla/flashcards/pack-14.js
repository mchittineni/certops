export const AWS_MLA_FLASHCARDS_14 = [
  {
    id: "aws-mla-fc-326",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in High-Frequency FinTech Trading",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-fc-327",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Healthcare Patient Records & HIPAA",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-fc-328",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Global E-Commerce Black Friday Scale",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-fc-329",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Autonomous Vehicle Telemetry",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-fc-330",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-fc-331",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Media Streaming & Global CDN",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-fc-332",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Aerospace Satellite Ground Systems",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-fc-333",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Telecommunications 5G Core Network",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-fc-334",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Renewable Energy Smart Grid IoT",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-fc-335",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Supply Chain Cold-Chain Logistics",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-fc-336",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Banking Core Ledger & Payments",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-fc-337",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-fc-338",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Defense-Grade Zero-Trust Network",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-fc-339",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Online Multiplayer Gaming Engine",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-fc-340",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Insurance Risk & Actuarial Modeling",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-fc-341",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-fc-342",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-fc-343",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Digital Identity & Biometric Verification",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-fc-344",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Legal Discovery & Semantic Document Search",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-fc-345",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in AdTech Real-Time Bidding Exchange",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-fc-346",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Precision Agriculture & Drone Scouting",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-fc-347",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Industrial Robotics Predictive Maintenance",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-fc-348",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Educational Remote Proctoring Platform",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-fc-349",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-fc-350",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Disaster Emergency Dispatch & Operations",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_FLASHCARDS_14;
