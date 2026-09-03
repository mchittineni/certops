export const GCP_PMLE_QUESTIONS_6 = [
  {
    id: "gcp-pmle-126",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Dataflow preprocessing pipelines with Apache Beam and tf.Transform: Operational Strategy (Part 126)",
    scenario: "A multinational fintech banking platform is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Dataflow preprocessing pipelines with Apache Beam and tf.Transform. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #126.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for dataflow preprocessing pipelines with apache beam and tf.transform utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for dataflow preprocessing pipelines with apache beam and tf.transform provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Preparing", "Architecture"]
  },
  {
    id: "gcp-pmle-127",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Distributed training strategies with TensorFlow and PyTorch MirroredStrategy: Operational Strategy (Part 127)",
    scenario: "A healthcare telemedicine network is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Distributed training strategies with TensorFlow and PyTorch MirroredStrategy. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #127.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for distributed training strategies with tensorflow and pytorch mirroredstrategy utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for distributed training strategies with tensorflow and pytorch mirroredstrategy provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Developing", "Architecture"]
  },
  {
    id: "gcp-pmle-128",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Model Registry tracking model versions and lineage metadata: Operational Strategy (Part 128)",
    scenario: "A high-throughput e-commerce retailer is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Vertex AI Model Registry tracking model versions and lineage metadata. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #128.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for vertex ai model registry tracking model versions and lineage metadata utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vertex ai model registry tracking model versions and lineage metadata provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Deploying,", "Architecture"]
  },
  {
    id: "gcp-pmle-129",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Designing low-latency prediction architectures streaming vs batch: Operational Strategy (Part 129)",
    scenario: "A global streaming entertainment platform is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Designing low-latency prediction architectures streaming vs batch. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #129.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for designing low-latency prediction architectures streaming vs batch utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for designing low-latency prediction architectures streaming vs batch provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Framing", "Architecture"]
  },
  {
    id: "gcp-pmle-130",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Vertex AI Feature Store managing online serving and offline training features: Operational Strategy (Part 130)",
    scenario: "An algorithmic trading exchange is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Vertex AI Feature Store managing online serving and offline training features. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #130.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for vertex ai feature store managing online serving and offline training features utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vertex ai feature store managing online serving and offline training features provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Preparing", "Architecture"]
  },
  {
    id: "gcp-pmle-131",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Automated hyperparameter tuning with Vertex AI Vizier: Operational Strategy (Part 131)",
    scenario: "A logistics and supply chain optimization service is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Automated hyperparameter tuning with Vertex AI Vizier. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #131.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for automated hyperparameter tuning with vertex ai vizier utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automated hyperparameter tuning with vertex ai vizier provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Developing", "Architecture"]
  },
  {
    id: "gcp-pmle-132",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Model Monitoring detecting data drift and concept skew: Operational Strategy (Part 132)",
    scenario: "An IoT industrial telematics infrastructure is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Vertex AI Model Monitoring detecting data drift and concept skew. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #132.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for vertex ai model monitoring detecting data drift and concept skew utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vertex ai model monitoring detecting data drift and concept skew provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Deploying,", "Architecture"]
  },
  {
    id: "gcp-pmle-133",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Addressing data privacy, fairness, and model interpretability with Explainable AI: Operational Strategy (Part 133)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Addressing data privacy, fairness, and model interpretability with Explainable AI. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #133.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for addressing data privacy, fairness, and model interpretability with explainable ai utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for addressing data privacy, fairness, and model interpretability with explainable ai provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Framing", "Architecture"]
  },
  {
    id: "gcp-pmle-134",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Handling data anomalies, skew, and missing values at scale: Operational Strategy (Part 134)",
    scenario: "A public sector aerospace engineering department is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Handling data anomalies, skew, and missing values at scale. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #134.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for handling data anomalies, skew, and missing values at scale utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for handling data anomalies, skew, and missing values at scale provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Preparing", "Architecture"]
  },
  {
    id: "gcp-pmle-135",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model evaluation metrics precision, recall, AUC-ROC, and F1 score: Operational Strategy (Part 135)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Model evaluation metrics precision, recall, AUC-ROC, and F1 score. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #135.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for model evaluation metrics precision, recall, auc-roc, and f1 score utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for model evaluation metrics precision, recall, auc-roc, and f1 score provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Developing", "Architecture"]
  },
  {
    id: "gcp-pmle-136",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Deploying models to Vertex AI Endpoints with autoscaling and traffic splitting: Operational Strategy (Part 136)",
    scenario: "A digital media publishing network is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Deploying models to Vertex AI Endpoints with autoscaling and traffic splitting. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #136.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for deploying models to vertex ai endpoints with autoscaling and traffic splitting utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for deploying models to vertex ai endpoints with autoscaling and traffic splitting provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Deploying,", "Architecture"]
  },
  {
    id: "gcp-pmle-137",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Evaluating cost, compute resources, and GPU/TPU acceleration tradeoffs: Operational Strategy (Part 137)",
    scenario: "A pharmaceutical clinical trial data service is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Evaluating cost, compute resources, and GPU/TPU acceleration tradeoffs. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #137.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for evaluating cost, compute resources, and gpu/tpu acceleration tradeoffs utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for evaluating cost, compute resources, and gpu/tpu acceleration tradeoffs provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Framing", "Architecture"]
  },
  {
    id: "gcp-pmle-138",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Generating dense vector embeddings for search and recommendation systems: Operational Strategy (Part 138)",
    scenario: "A renewable energy smart-grid operator is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Generating dense vector embeddings for search and recommendation systems. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #138.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for generating dense vector embeddings for search and recommendation systems utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for generating dense vector embeddings for search and recommendation systems provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Preparing", "Architecture"]
  },
  {
    id: "gcp-pmle-139",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Transfer learning and fine-tuning foundation models in Vertex AI Model Garden: Operational Strategy (Part 139)",
    scenario: "A mobile gaming backend architecture is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Transfer learning and fine-tuning foundation models in Vertex AI Model Garden. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #139.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for transfer learning and fine-tuning foundation models in vertex ai model garden utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for transfer learning and fine-tuning foundation models in vertex ai model garden provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Developing", "Architecture"]
  },
  {
    id: "gcp-pmle-140",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Batch prediction pipelines processing petabyte-scale datasets efficiently: Operational Strategy (Part 140)",
    scenario: "A ride-sharing dispatch system is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Batch prediction pipelines processing petabyte-scale datasets efficiently. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #140.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Deploy native automation for batch prediction pipelines processing petabyte-scale datasets efficiently utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for batch prediction pipelines processing petabyte-scale datasets efficiently provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Deploying,", "Architecture"]
  },
  {
    id: "gcp-pmle-141",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Translating business requirements into supervised and unsupervised ML objectives: Operational Strategy (Part 141)",
    scenario: "An insurance claims processing engine is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Translating business requirements into supervised and unsupervised ML objectives. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #141.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for translating business requirements into supervised and unsupervised ml objectives utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for translating business requirements into supervised and unsupervised ml objectives provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Framing", "Architecture"]
  },
  {
    id: "gcp-pmle-142",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "BigQuery ML for rapid prototyping and SQL-based model training: Operational Strategy (Part 142)",
    scenario: "A commercial airline reservation service is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding BigQuery ML for rapid prototyping and SQL-based model training. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #142.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for bigquery ml for rapid prototyping and sql-based model training utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for bigquery ml for rapid prototyping and sql-based model training provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Preparing", "Architecture"]
  },
  {
    id: "gcp-pmle-143",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Custom model training with Vertex AI Training and custom container images: Operational Strategy (Part 143)",
    scenario: "A cybersecurity threat intelligence agency is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Custom model training with Vertex AI Training and custom container images. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #143.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for custom model training with vertex ai training and custom container images utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for custom model training with vertex ai training and custom container images provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Developing", "Architecture"]
  },
  {
    id: "gcp-pmle-144",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Pipelines orchestrating Kubeflow and TFX pipeline components: Operational Strategy (Part 144)",
    scenario: "A real estate property management portal is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Vertex AI Pipelines orchestrating Kubeflow and TFX pipeline components. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #144.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Deploy native automation for vertex ai pipelines orchestrating kubeflow and tfx pipeline components utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vertex ai pipelines orchestrating kubeflow and tfx pipeline components provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Deploying,", "Architecture"]
  },
  {
    id: "gcp-pmle-145",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Choosing between pre-trained APIs, AutoML, and custom trained models: Operational Strategy (Part 145)",
    scenario: "An autonomous robotics manufacturing facility is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Choosing between pre-trained APIs, AutoML, and custom trained models. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #145.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for choosing between pre-trained apis, automl, and custom trained models utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for choosing between pre-trained apis, automl, and custom trained models provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Framing", "Architecture"]
  },
  {
    id: "gcp-pmle-146",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Dataflow preprocessing pipelines with Apache Beam and tf.Transform: Operational Strategy (Part 146)",
    scenario: "A higher education student information system is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Dataflow preprocessing pipelines with Apache Beam and tf.Transform. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #146.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices?",
    options: [
      { id: 'A', text: "Deploy native automation for dataflow preprocessing pipelines with apache beam and tf.transform utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for dataflow preprocessing pipelines with apache beam and tf.transform provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Preparing", "Architecture"]
  },
  {
    id: "gcp-pmle-147",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Distributed training strategies with TensorFlow and PyTorch MirroredStrategy: Operational Strategy (Part 147)",
    scenario: "A global hotel hospitality reservation platform is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Distributed training strategies with TensorFlow and PyTorch MirroredStrategy. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #147.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria?",
    options: [
      { id: 'A', text: "Deploy native automation for distributed training strategies with tensorflow and pytorch mirroredstrategy utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for distributed training strategies with tensorflow and pytorch mirroredstrategy provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Developing", "Architecture"]
  },
  {
    id: "gcp-pmle-148",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Model Registry tracking model versions and lineage metadata: Operational Strategy (Part 148)",
    scenario: "A digital payments settlement processor is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Vertex AI Model Registry tracking model versions and lineage metadata. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #148.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead?",
    options: [
      { id: 'A', text: "Deploy native automation for vertex ai model registry tracking model versions and lineage metadata utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vertex ai model registry tracking model versions and lineage metadata provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Deploying,", "Architecture"]
  },
  {
    id: "gcp-pmle-149",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Designing low-latency prediction architectures streaming vs batch: Operational Strategy (Part 149)",
    scenario: "A genomics sequencing data pipeline is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Designing low-latency prediction architectures streaming vs batch. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #149.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for designing low-latency prediction architectures streaming vs batch utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for designing low-latency prediction architectures streaming vs batch provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Framing", "Architecture"]
  },
  {
    id: "gcp-pmle-150",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Vertex AI Feature Store managing online serving and offline training features: Operational Strategy (Part 150)",
    scenario: "A cloud-native telecommunications provider is evaluating Google Cloud Professional Machine Learning Engineer practices specifically regarding Vertex AI Feature Store managing online serving and offline training features. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #150.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability?",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for vertex ai feature store managing online serving and offline training features utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vertex ai feature store managing online serving and offline training features provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Google Cloud Professional Machine Learning Engineer standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://cloud.google.com/learn/certification/machine-learning-engineer",
    tags: ["GCP-PMLE", "Preparing", "Architecture"]
  }
];

export default GCP_PMLE_QUESTIONS_6;
