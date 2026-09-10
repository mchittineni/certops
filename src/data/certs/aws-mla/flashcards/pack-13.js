export const AWS_MLA_FLASHCARDS_13 = [
  {
    id: "aws-mla-fc-301",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in High-Frequency FinTech Trading",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-fc-302",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Healthcare Patient Records & HIPAA",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-fc-303",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Global E-Commerce Black Friday Scale",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-fc-304",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Autonomous Vehicle Telemetry",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-fc-305",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-fc-306",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Media Streaming & Global CDN",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-fc-307",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Aerospace Satellite Ground Systems",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-fc-308",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Telecommunications 5G Core Network",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-fc-309",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Renewable Energy Smart Grid IoT",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-fc-310",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Supply Chain Cold-Chain Logistics",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-fc-311",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Banking Core Ledger & Payments",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-fc-312",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-fc-313",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Defense-Grade Zero-Trust Network",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-fc-314",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Online Multiplayer Gaming Engine",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-fc-315",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Insurance Risk & Actuarial Modeling",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-fc-316",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-fc-317",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-fc-318",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Digital Identity & Biometric Verification",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-fc-319",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Legal Discovery & Semantic Document Search",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-fc-320",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in AdTech Real-Time Bidding Exchange",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-fc-321",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Precision Agriculture & Drone Scouting",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-fc-322",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Industrial Robotics Predictive Maintenance",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-fc-323",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Educational Remote Proctoring Platform",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-fc-324",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-fc-325",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Disaster Emergency Dispatch & Operations",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_FLASHCARDS_13;
