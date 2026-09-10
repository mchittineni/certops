export const AWS_MLA_FLASHCARDS_12 = [
  {
    id: "aws-mla-fc-276",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in High-Frequency FinTech Trading",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "High-Frequency FinTech Trading"]
  },
  {
    id: "aws-mla-fc-277",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Healthcare Patient Records & HIPAA",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "aws-mla-fc-278",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Global E-Commerce Black Friday Scale",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "aws-mla-fc-279",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Autonomous Vehicle Telemetry",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "aws-mla-fc-280",
    difficulty: "easy",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "aws-mla-fc-281",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Media Streaming & Global CDN",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Media Streaming & Global CDN"]
  },
  {
    id: "aws-mla-fc-282",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Aerospace Satellite Ground Systems",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "aws-mla-fc-283",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Telecommunications 5G Core Network",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Telecommunications 5G Core Network"]
  },
  {
    id: "aws-mla-fc-284",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Renewable Energy Smart Grid IoT",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "aws-mla-fc-285",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Supply Chain Cold-Chain Logistics",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "aws-mla-fc-286",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Banking Core Ledger & Payments",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Banking Core Ledger & Payments"]
  },
  {
    id: "aws-mla-fc-287",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "aws-mla-fc-288",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Defense-Grade Zero-Trust Network",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "aws-mla-fc-289",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Online Multiplayer Gaming Engine",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "aws-mla-fc-290",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Insurance Risk & Actuarial Modeling",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "aws-mla-fc-291",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "aws-mla-fc-292",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "aws-mla-fc-293",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Digital Identity & Biometric Verification",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Digital Identity & Biometric Verification"]
  },
  {
    id: "aws-mla-fc-294",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Legal Discovery & Semantic Document Search",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "aws-mla-fc-295",
    difficulty: "medium",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in AdTech Real-Time Bidding Exchange",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "aws-mla-fc-296",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Precision Agriculture & Drone Scouting",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "aws-mla-fc-297",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: Blue/Green Deployment Guardrails in Industrial Robotics Predictive Maintenance",
    hint: "Focus on deployment-guardrails and blue-green best practices.",
    back: "<strong>Blue/Green Deployment Guardrails</strong>: Configure deployment guardrails using Canary or Linear traffic shifting with automated rollback triggered by CloudWatch 5xx error or latency alarms. Core MLOps rationale: Deployment guardrails perform the shift and, crucially, the rollback automatically against CloudWatch alarms, so a bad model is withdrawn even at three in the m...",
    tags: ["deployment-guardrails", "blue-green", "canary", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "aws-mla-fc-298",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Pipelines Orchestration in Educational Remote Proctoring Platform",
    hint: "Focus on pipelines and mlops best practices.",
    back: "<strong>SageMaker Pipelines Orchestration</strong>: Define a SageMaker Pipeline combining ProcessingStep, TrainingStep, ModelStep, and ConditionStep to automate model retraining and registry promotion. Core MLOps rationale: SageMaker Pipelines is native to the platform, so every step records lineage, repeated steps are cached, and a ConditionStep gates registry promotion on the eva...",
    tags: ["pipelines", "mlops", "orchestration", "Educational Remote Proctoring Platform"]
  },
  {
    id: "aws-mla-fc-299",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Real-Time vs Asynchronous Inference in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on inference and asynchronous-inference best practices.",
    back: "<strong>SageMaker Real-Time vs Asynchronous Inference</strong>: Use Asynchronous Inference for large payloads up to 1GB and processing times up to 1 hour, or Real-Time Endpoints for sub-second interactive latency. Core MLOps rationale: Asynchronous Inference is built for this shape: the request is queued, the payload can reach a gigabyte, the job may run for an hour, and the caller is notified...",
    tags: ["inference", "asynchronous-inference", "real-time", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "aws-mla-fc-300",
    difficulty: "hard",
    certId: "aws-mla",
    domainId: "d3",
    front: "AWS ML Engineer: SageMaker Multi-Model Endpoints (MME) in Disaster Emergency Dispatch & Operations",
    hint: "Focus on mme and multi-model best practices.",
    back: "<strong>SageMaker Multi-Model Endpoints (MME)</strong>: Deploy a SageMaker Multi-Model Endpoint (MME) to host thousands of distinct customer models on a shared compute instance pool, loading models dynamically from S3. Core MLOps rationale: A multi-model endpoint keeps the models in S3 and pages them into a shared instance pool on demand, so cost tracks the working set rather than the catalogue, wh...",
    tags: ["mme", "multi-model", "cost-efficiency", "Disaster Emergency Dispatch & Operations"]
  }
];

export default AWS_MLA_FLASHCARDS_12;
