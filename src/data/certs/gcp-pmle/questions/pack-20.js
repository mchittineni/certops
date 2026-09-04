export const GCP_PMLE_QUESTIONS_20 = [
  {
    id: "gcp-pmle-476",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Cloud Build for ML (Continuous Integration for Model Code): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates MLOps CI to automate the testing of data preprocessing routines, model architecture definitions, and custom container building upon every Git pull request.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Cloud Build testing ML training code, unit tests, and building custom containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits." },
      { id: 'B', text: "Commit unverified training scripts directly to the production branch without automated testing." },
      { id: 'C', text: "Test machine learning code manually by running Jupyter notebooks on personal laptops." },
      { id: 'D', text: "Deploy model code without running regression tests or dependency checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits. Continuous Integration (CI) for ML extends traditional software CI to machine learning assets. Cloud Build runs automated unit tests on data validation and feature engineering modules, tests model training steps on synthetic micro-datasets, and builds versioned container images.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#cicd_pipeline_flow",
    tags: ["MLOps CI", "MLOps CI", "Dr Failover"]
  },
  {
    id: "gcp-pmle-477",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Cloud Build for ML (Continuous Integration for Model Code): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates MLOps CI to automate the testing of data preprocessing routines, model architecture definitions, and custom container building upon every Git pull request.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Cloud Build testing ML training code, unit tests, and building custom containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits." },
      { id: 'B', text: "Commit unverified training scripts directly to the production branch without automated testing." },
      { id: 'C', text: "Test machine learning code manually by running Jupyter notebooks on personal laptops." },
      { id: 'D', text: "Deploy model code without running regression tests or dependency checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits. Continuous Integration (CI) for ML extends traditional software CI to machine learning assets. Cloud Build runs automated unit tests on data validation and feature engineering modules, tests model training steps on synthetic micro-datasets, and builds versioned container images.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#cicd_pipeline_flow",
    tags: ["MLOps CI", "MLOps CI", "High Load Scale"]
  },
  {
    id: "gcp-pmle-478",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Cloud Build for ML (Continuous Integration for Model Code): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates MLOps CI to automate the testing of data preprocessing routines, model architecture definitions, and custom container building upon every Git pull request.",
    question: "Which solution properly implements these mandatory security and governance controls? Cloud Build testing ML training code, unit tests, and building custom containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits." },
      { id: 'B', text: "Commit unverified training scripts directly to the production branch without automated testing." },
      { id: 'C', text: "Test machine learning code manually by running Jupyter notebooks on personal laptops." },
      { id: 'D', text: "Deploy model code without running regression tests or dependency checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits. Continuous Integration (CI) for ML extends traditional software CI to machine learning assets. Cloud Build runs automated unit tests on data validation and feature engineering modules, tests model training steps on synthetic micro-datasets, and builds versioned container images.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#cicd_pipeline_flow",
    tags: ["MLOps CI", "MLOps CI", "Security Compliance"]
  },
  {
    id: "gcp-pmle-479",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Cloud Build for ML (Continuous Integration for Model Code): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates MLOps CI to automate the testing of data preprocessing routines, model architecture definitions, and custom container building upon every Git pull request.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Cloud Build testing ML training code, unit tests, and building custom containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits." },
      { id: 'B', text: "Commit unverified training scripts directly to the production branch without automated testing." },
      { id: 'C', text: "Test machine learning code manually by running Jupyter notebooks on personal laptops." },
      { id: 'D', text: "Deploy model code without running regression tests or dependency checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits. Continuous Integration (CI) for ML extends traditional software CI to machine learning assets. Cloud Build runs automated unit tests on data validation and feature engineering modules, tests model training steps on synthetic micro-datasets, and builds versioned container images.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#cicd_pipeline_flow",
    tags: ["MLOps CI", "MLOps CI", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-480",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Cloud Build for ML (Continuous Integration for Model Code): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates MLOps CI to automate the testing of data preprocessing routines, model architecture definitions, and custom container building upon every Git pull request.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Cloud Build testing ML training code, unit tests, and building custom containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits." },
      { id: 'B', text: "Commit unverified training scripts directly to the production branch without automated testing." },
      { id: 'C', text: "Test machine learning code manually by running Jupyter notebooks on personal laptops." },
      { id: 'D', text: "Deploy model code without running regression tests or dependency checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Google Cloud Build triggers to run unit tests and build custom training containers upon Git commits. Continuous Integration (CI) for ML extends traditional software CI to machine learning assets. Cloud Build runs automated unit tests on data validation and feature engineering modules, tests model training steps on synthetic micro-datasets, and builds versioned container images.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#cicd_pipeline_flow",
    tags: ["MLOps CI", "MLOps CI", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-481",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "BigQuery ML Model Export to Vertex AI: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates BigQuery ML to Vertex to train a gradient boosted tree model inside BigQuery on enterprise data warehouse tables and deploy it to a low-latency Vertex AI Endpoint for sub-50ms real-time online serving.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Exporting BQML models to Cloud Storage and deploying to Vertex AI Endpoints is under consideration.",
    options: [
      { id: 'A', text: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint." },
      { id: 'B', text: "Execute BigQuery SQL queries from mobile devices synchronously on every user tap." },
      { id: 'C', text: "Retrain the entire model manually in Python from scratch." },
      { id: 'D', text: "Use a batch SQL script scheduled to run every 1 second inside BigQuery." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint. BigQuery ML models can be exported to Cloud Storage as TensorFlow SavedModel or ONNX artifacts using the `EXPORT MODEL` SQL statement. Once exported, models can be registered in Vertex AI Model Registry and deployed to managed prediction endpoints for low-latency real-time serving.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/export-model",
    tags: ["BigQuery ML to Vertex", "BQML Export", "Dr Failover"]
  },
  {
    id: "gcp-pmle-482",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "BigQuery ML Model Export to Vertex AI: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates BigQuery ML to Vertex to train a gradient boosted tree model inside BigQuery on enterprise data warehouse tables and deploy it to a low-latency Vertex AI Endpoint for sub-50ms real-time online serving.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Exporting BQML models to Cloud Storage and deploying to Vertex AI Endpoints is under consideration.",
    options: [
      { id: 'A', text: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint." },
      { id: 'B', text: "Execute BigQuery SQL queries from mobile devices synchronously on every user tap." },
      { id: 'C', text: "Retrain the entire model manually in Python from scratch." },
      { id: 'D', text: "Use a batch SQL script scheduled to run every 1 second inside BigQuery." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint. BigQuery ML models can be exported to Cloud Storage as TensorFlow SavedModel or ONNX artifacts using the `EXPORT MODEL` SQL statement. Once exported, models can be registered in Vertex AI Model Registry and deployed to managed prediction endpoints for low-latency real-time serving.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/export-model",
    tags: ["BigQuery ML to Vertex", "BQML Export", "High Load Scale"]
  },
  {
    id: "gcp-pmle-483",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "BigQuery ML Model Export to Vertex AI: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates BigQuery ML to Vertex to train a gradient boosted tree model inside BigQuery on enterprise data warehouse tables and deploy it to a low-latency Vertex AI Endpoint for sub-50ms real-time online serving.",
    question: "Which solution properly implements these mandatory security and governance controls? Exporting BQML models to Cloud Storage and deploying to Vertex AI Endpoints is under consideration.",
    options: [
      { id: 'A', text: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint." },
      { id: 'B', text: "Execute BigQuery SQL queries from mobile devices synchronously on every user tap." },
      { id: 'C', text: "Retrain the entire model manually in Python from scratch." },
      { id: 'D', text: "Use a batch SQL script scheduled to run every 1 second inside BigQuery." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint. BigQuery ML models can be exported to Cloud Storage as TensorFlow SavedModel or ONNX artifacts using the `EXPORT MODEL` SQL statement. Once exported, models can be registered in Vertex AI Model Registry and deployed to managed prediction endpoints for low-latency real-time serving.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/export-model",
    tags: ["BigQuery ML to Vertex", "BQML Export", "Security Compliance"]
  },
  {
    id: "gcp-pmle-484",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "BigQuery ML Model Export to Vertex AI: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates BigQuery ML to Vertex to train a gradient boosted tree model inside BigQuery on enterprise data warehouse tables and deploy it to a low-latency Vertex AI Endpoint for sub-50ms real-time online serving.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Exporting BQML models to Cloud Storage and deploying to Vertex AI Endpoints is under consideration.",
    options: [
      { id: 'A', text: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint." },
      { id: 'B', text: "Execute BigQuery SQL queries from mobile devices synchronously on every user tap." },
      { id: 'C', text: "Retrain the entire model manually in Python from scratch." },
      { id: 'D', text: "Use a batch SQL script scheduled to run every 1 second inside BigQuery." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint. BigQuery ML models can be exported to Cloud Storage as TensorFlow SavedModel or ONNX artifacts using the `EXPORT MODEL` SQL statement. Once exported, models can be registered in Vertex AI Model Registry and deployed to managed prediction endpoints for low-latency real-time serving.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/export-model",
    tags: ["BigQuery ML to Vertex", "BQML Export", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-485",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "BigQuery ML Model Export to Vertex AI: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates BigQuery ML to Vertex to train a gradient boosted tree model inside BigQuery on enterprise data warehouse tables and deploy it to a low-latency Vertex AI Endpoint for sub-50ms real-time online serving.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Exporting BQML models to Cloud Storage and deploying to Vertex AI Endpoints is under consideration.",
    options: [
      { id: 'A', text: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint." },
      { id: 'B', text: "Execute BigQuery SQL queries from mobile devices synchronously on every user tap." },
      { id: 'C', text: "Retrain the entire model manually in Python from scratch." },
      { id: 'D', text: "Use a batch SQL script scheduled to run every 1 second inside BigQuery." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Export the BigQuery ML model using 'EXPORT MODEL' to Cloud Storage, register in Vertex AI Model Registry, and deploy to an Endpoint. BigQuery ML models can be exported to Cloud Storage as TensorFlow SavedModel or ONNX artifacts using the `EXPORT MODEL` SQL statement. Once exported, models can be registered in Vertex AI Model Registry and deployed to managed prediction endpoints for low-latency real-time serving.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/export-model",
    tags: ["BigQuery ML to Vertex", "BQML Export", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-486",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Feature Store Real-Time Feature Ingestion and Syncing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Feature Engineering to stream dynamic user click events from Pub/Sub into Vertex AI Feature Store to ensure online real-time inference models access the latest customer behavior within seconds.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Streaming feature ingestion into Vertex AI Feature Store via BigQuery and Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API." },
      { id: 'B', text: "Run a nightly batch script that updates feature tables once every 24 hours." },
      { id: 'C', text: "Calculate features in client web browsers and pass them in HTTP headers." },
      { id: 'D', text: "Store user features in local virtual machine memory caches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API. Vertex AI Feature Store supports streaming ingestion, allowing applications to push real-time feature updates directly into the online store with low write latency. This ensures online models evaluate the most current customer interaction signals.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/streaming-ingestion",
    tags: ["Feature Engineering", "Streaming Features", "Dr Failover"]
  },
  {
    id: "gcp-pmle-487",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Feature Store Real-Time Feature Ingestion and Syncing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Feature Engineering to stream dynamic user click events from Pub/Sub into Vertex AI Feature Store to ensure online real-time inference models access the latest customer behavior within seconds.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Streaming feature ingestion into Vertex AI Feature Store via BigQuery and Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API." },
      { id: 'B', text: "Run a nightly batch script that updates feature tables once every 24 hours." },
      { id: 'C', text: "Calculate features in client web browsers and pass them in HTTP headers." },
      { id: 'D', text: "Store user features in local virtual machine memory caches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API. Vertex AI Feature Store supports streaming ingestion, allowing applications to push real-time feature updates directly into the online store with low write latency. This ensures online models evaluate the most current customer interaction signals.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/streaming-ingestion",
    tags: ["Feature Engineering", "Streaming Features", "High Load Scale"]
  },
  {
    id: "gcp-pmle-488",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Feature Store Real-Time Feature Ingestion and Syncing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Feature Engineering to stream dynamic user click events from Pub/Sub into Vertex AI Feature Store to ensure online real-time inference models access the latest customer behavior within seconds.",
    question: "Which solution properly implements these mandatory security and governance controls? Streaming feature ingestion into Vertex AI Feature Store via BigQuery and Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API." },
      { id: 'B', text: "Run a nightly batch script that updates feature tables once every 24 hours." },
      { id: 'C', text: "Calculate features in client web browsers and pass them in HTTP headers." },
      { id: 'D', text: "Store user features in local virtual machine memory caches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API. Vertex AI Feature Store supports streaming ingestion, allowing applications to push real-time feature updates directly into the online store with low write latency. This ensures online models evaluate the most current customer interaction signals.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/streaming-ingestion",
    tags: ["Feature Engineering", "Streaming Features", "Security Compliance"]
  },
  {
    id: "gcp-pmle-489",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Feature Store Real-Time Feature Ingestion and Syncing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Feature Engineering to stream dynamic user click events from Pub/Sub into Vertex AI Feature Store to ensure online real-time inference models access the latest customer behavior within seconds.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Streaming feature ingestion into Vertex AI Feature Store via BigQuery and Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API." },
      { id: 'B', text: "Run a nightly batch script that updates feature tables once every 24 hours." },
      { id: 'C', text: "Calculate features in client web browsers and pass them in HTTP headers." },
      { id: 'D', text: "Store user features in local virtual machine memory caches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API. Vertex AI Feature Store supports streaming ingestion, allowing applications to push real-time feature updates directly into the online store with low write latency. This ensures online models evaluate the most current customer interaction signals.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/streaming-ingestion",
    tags: ["Feature Engineering", "Streaming Features", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-490",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Feature Store Real-Time Feature Ingestion and Syncing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Feature Engineering to stream dynamic user click events from Pub/Sub into Vertex AI Feature Store to ensure online real-time inference models access the latest customer behavior within seconds.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Streaming feature ingestion into Vertex AI Feature Store via BigQuery and Pub/Sub is under consideration.",
    options: [
      { id: 'A', text: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API." },
      { id: 'B', text: "Run a nightly batch script that updates feature tables once every 24 hours." },
      { id: 'C', text: "Calculate features in client web browsers and pass them in HTTP headers." },
      { id: 'D', text: "Store user features in local virtual machine memory caches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure streaming ingestion into Vertex AI Feature Store using the streaming ingestion API. Vertex AI Feature Store supports streaming ingestion, allowing applications to push real-time feature updates directly into the online store with low write latency. This ensures online models evaluate the most current customer interaction signals.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/streaming-ingestion",
    tags: ["Feature Engineering", "Streaming Features", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-491",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Model Checkpointing and Resumable Training: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Fault-Tolerant Training to ensure that a 7-day distributed deep learning training job running on preemptible Spot VMs or TPUs can recover from node terminations without losing progress.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Automated model checkpointing to Cloud Storage allowing training resumption is under consideration.",
    options: [
      { id: 'A', text: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint." },
      { id: 'B', text: "Start the 7-day training job from epoch 1 every time a Spot VM node is reclaimed." },
      { id: 'C', text: "Keep all model weights in local RAM memory without saving checkpoints." },
      { id: 'D', text: "Run the job on a single non-preemptible machine without backups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint. Model checkpointing saves model weights, optimizer states, and epoch counters to persistent cloud storage (Cloud Storage) at regular intervals. If a compute node fails or a Spot instance is preempted, the training job restarts and resumes from the last saved checkpoint, saving days of compute.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/monitor-debug#checkpoints",
    tags: ["Fault-Tolerant Training", "Resilient Training", "Dr Failover"]
  },
  {
    id: "gcp-pmle-492",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Model Checkpointing and Resumable Training: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Fault-Tolerant Training to ensure that a 7-day distributed deep learning training job running on preemptible Spot VMs or TPUs can recover from node terminations without losing progress.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Automated model checkpointing to Cloud Storage allowing training resumption is under consideration.",
    options: [
      { id: 'A', text: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint." },
      { id: 'B', text: "Start the 7-day training job from epoch 1 every time a Spot VM node is reclaimed." },
      { id: 'C', text: "Keep all model weights in local RAM memory without saving checkpoints." },
      { id: 'D', text: "Run the job on a single non-preemptible machine without backups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint. Model checkpointing saves model weights, optimizer states, and epoch counters to persistent cloud storage (Cloud Storage) at regular intervals. If a compute node fails or a Spot instance is preempted, the training job restarts and resumes from the last saved checkpoint, saving days of compute.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/monitor-debug#checkpoints",
    tags: ["Fault-Tolerant Training", "Resilient Training", "High Load Scale"]
  },
  {
    id: "gcp-pmle-493",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Model Checkpointing and Resumable Training: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Fault-Tolerant Training to ensure that a 7-day distributed deep learning training job running on preemptible Spot VMs or TPUs can recover from node terminations without losing progress.",
    question: "Which solution properly implements these mandatory security and governance controls? Automated model checkpointing to Cloud Storage allowing training resumption is under consideration.",
    options: [
      { id: 'A', text: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint." },
      { id: 'B', text: "Start the 7-day training job from epoch 1 every time a Spot VM node is reclaimed." },
      { id: 'C', text: "Keep all model weights in local RAM memory without saving checkpoints." },
      { id: 'D', text: "Run the job on a single non-preemptible machine without backups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint. Model checkpointing saves model weights, optimizer states, and epoch counters to persistent cloud storage (Cloud Storage) at regular intervals. If a compute node fails or a Spot instance is preempted, the training job restarts and resumes from the last saved checkpoint, saving days of compute.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/monitor-debug#checkpoints",
    tags: ["Fault-Tolerant Training", "Resilient Training", "Security Compliance"]
  },
  {
    id: "gcp-pmle-494",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Model Checkpointing and Resumable Training: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Fault-Tolerant Training to ensure that a 7-day distributed deep learning training job running on preemptible Spot VMs or TPUs can recover from node terminations without losing progress.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Automated model checkpointing to Cloud Storage allowing training resumption is under consideration.",
    options: [
      { id: 'A', text: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint." },
      { id: 'B', text: "Start the 7-day training job from epoch 1 every time a Spot VM node is reclaimed." },
      { id: 'C', text: "Keep all model weights in local RAM memory without saving checkpoints." },
      { id: 'D', text: "Run the job on a single non-preemptible machine without backups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint. Model checkpointing saves model weights, optimizer states, and epoch counters to persistent cloud storage (Cloud Storage) at regular intervals. If a compute node fails or a Spot instance is preempted, the training job restarts and resumes from the last saved checkpoint, saving days of compute.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/monitor-debug#checkpoints",
    tags: ["Fault-Tolerant Training", "Resilient Training", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-495",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Model Checkpointing and Resumable Training: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Fault-Tolerant Training to ensure that a 7-day distributed deep learning training job running on preemptible Spot VMs or TPUs can recover from node terminations without losing progress.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Automated model checkpointing to Cloud Storage allowing training resumption is under consideration.",
    options: [
      { id: 'A', text: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint." },
      { id: 'B', text: "Start the 7-day training job from epoch 1 every time a Spot VM node is reclaimed." },
      { id: 'C', text: "Keep all model weights in local RAM memory without saving checkpoints." },
      { id: 'D', text: "Run the job on a single non-preemptible machine without backups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure training scripts to save model checkpoints periodically to a Cloud Storage bucket and resume from the latest checkpoint. Model checkpointing saves model weights, optimizer states, and epoch counters to persistent cloud storage (Cloud Storage) at regular intervals. If a compute node fails or a Spot instance is preempted, the training job restarts and resumes from the last saved checkpoint, saving days of compute.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/monitor-debug#checkpoints",
    tags: ["Fault-Tolerant Training", "Resilient Training", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-496",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Search and Conversation (GenAI Agent Architecture): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Enterprise GenAI to build an enterprise generative AI conversational search assistant grounded in internal corporate Google Drive documents and intranet wikis.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Vertex AI Search and Conversation building grounding RAG systems and conversational agents is under consideration.",
    options: [
      { id: 'A', text: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories." },
      { id: 'B', text: "Prompt a public consumer LLM without providing enterprise context or document grounding." },
      { id: 'C', text: "Hardcode enterprise document text into a prompt template." },
      { id: 'D', text: "Train a base foundational model from scratch on internal PDFs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories. Vertex AI Search and Conversation enables rapid development of generative AI search and conversational agents grounded in enterprise data (websites, Cloud Storage, BigQuery). It manages document indexing, semantic chunking, embedding retrieval, and citation-backed answer generation.",
    referenceUrl: "https://cloud.google.com/generative-ai-app-builder/docs/overview",
    tags: ["Enterprise GenAI", "GenAI Agents", "Dr Failover"]
  },
  {
    id: "gcp-pmle-497",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Search and Conversation (GenAI Agent Architecture): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Enterprise GenAI to build an enterprise generative AI conversational search assistant grounded in internal corporate Google Drive documents and intranet wikis.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Vertex AI Search and Conversation building grounding RAG systems and conversational agents is under consideration.",
    options: [
      { id: 'A', text: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories." },
      { id: 'B', text: "Prompt a public consumer LLM without providing enterprise context or document grounding." },
      { id: 'C', text: "Hardcode enterprise document text into a prompt template." },
      { id: 'D', text: "Train a base foundational model from scratch on internal PDFs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories. Vertex AI Search and Conversation enables rapid development of generative AI search and conversational agents grounded in enterprise data (websites, Cloud Storage, BigQuery). It manages document indexing, semantic chunking, embedding retrieval, and citation-backed answer generation.",
    referenceUrl: "https://cloud.google.com/generative-ai-app-builder/docs/overview",
    tags: ["Enterprise GenAI", "GenAI Agents", "High Load Scale"]
  },
  {
    id: "gcp-pmle-498",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Search and Conversation (GenAI Agent Architecture): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Enterprise GenAI to build an enterprise generative AI conversational search assistant grounded in internal corporate Google Drive documents and intranet wikis.",
    question: "Which solution properly implements these mandatory security and governance controls? Vertex AI Search and Conversation building grounding RAG systems and conversational agents is under consideration.",
    options: [
      { id: 'A', text: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories." },
      { id: 'B', text: "Prompt a public consumer LLM without providing enterprise context or document grounding." },
      { id: 'C', text: "Hardcode enterprise document text into a prompt template." },
      { id: 'D', text: "Train a base foundational model from scratch on internal PDFs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories. Vertex AI Search and Conversation enables rapid development of generative AI search and conversational agents grounded in enterprise data (websites, Cloud Storage, BigQuery). It manages document indexing, semantic chunking, embedding retrieval, and citation-backed answer generation.",
    referenceUrl: "https://cloud.google.com/generative-ai-app-builder/docs/overview",
    tags: ["Enterprise GenAI", "GenAI Agents", "Security Compliance"]
  },
  {
    id: "gcp-pmle-499",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Search and Conversation (GenAI Agent Architecture): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Enterprise GenAI to build an enterprise generative AI conversational search assistant grounded in internal corporate Google Drive documents and intranet wikis.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Vertex AI Search and Conversation building grounding RAG systems and conversational agents is under consideration.",
    options: [
      { id: 'A', text: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories." },
      { id: 'B', text: "Prompt a public consumer LLM without providing enterprise context or document grounding." },
      { id: 'C', text: "Hardcode enterprise document text into a prompt template." },
      { id: 'D', text: "Train a base foundational model from scratch on internal PDFs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories. Vertex AI Search and Conversation enables rapid development of generative AI search and conversational agents grounded in enterprise data (websites, Cloud Storage, BigQuery). It manages document indexing, semantic chunking, embedding retrieval, and citation-backed answer generation.",
    referenceUrl: "https://cloud.google.com/generative-ai-app-builder/docs/overview",
    tags: ["Enterprise GenAI", "GenAI Agents", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-500",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Search and Conversation (GenAI Agent Architecture): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Enterprise GenAI to build an enterprise generative AI conversational search assistant grounded in internal corporate Google Drive documents and intranet wikis.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Vertex AI Search and Conversation building grounding RAG systems and conversational agents is under consideration.",
    options: [
      { id: 'A', text: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories." },
      { id: 'B', text: "Prompt a public consumer LLM without providing enterprise context or document grounding." },
      { id: 'C', text: "Hardcode enterprise document text into a prompt template." },
      { id: 'D', text: "Train a base foundational model from scratch on internal PDFs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Vertex AI Search and Conversation (formerly Gen App Builder) with data store connectors to corporate repositories. Vertex AI Search and Conversation enables rapid development of generative AI search and conversational agents grounded in enterprise data (websites, Cloud Storage, BigQuery). It manages document indexing, semantic chunking, embedding retrieval, and citation-backed answer generation.",
    referenceUrl: "https://cloud.google.com/generative-ai-app-builder/docs/overview",
    tags: ["Enterprise GenAI", "GenAI Agents", "Resilience Failure"]
  }
];

export default GCP_PMLE_QUESTIONS_20;
