export const GCP_PMLE_QUESTIONS_19 = [
  {
    id: "gcp-pmle-451",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Prediction Autoscaling (Min/Max Replicas & Metrics): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Model Serving to configure a production Vertex AI Online Prediction Endpoint to automatically scale from 2 to 20 nodes during traffic surges while guaranteeing baseline availability.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Dedicated node autoscaling based on CPU/GPU utilization and concurrency is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization." },
      { id: 'B', text: "Configure a static single-node endpoint with minReplicaCount=1 and maxReplicaCount=1." },
      { id: 'C', text: "Manually change the instance count slider in the Cloud Console during an active outage." },
      { id: 'D', text: "Deploy the model on an unmanaged Compute Engine instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization. Vertex AI Online Prediction endpoints provide automated horizontal autoscaling. Administrators define `minReplicaCount` to maintain baseline capacity and prevent cold starts, and `maxReplicaCount` to cap operational spending, while the platform scales nodes dynamically based on target utilization.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#autoscaling",
    tags: ["Model Serving", "Model Autoscaling", "Dr Failover"]
  },
  {
    id: "gcp-pmle-452",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Prediction Autoscaling (Min/Max Replicas & Metrics): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Model Serving to configure a production Vertex AI Online Prediction Endpoint to automatically scale from 2 to 20 nodes during traffic surges while guaranteeing baseline availability.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Dedicated node autoscaling based on CPU/GPU utilization and concurrency is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization." },
      { id: 'B', text: "Configure a static single-node endpoint with minReplicaCount=1 and maxReplicaCount=1." },
      { id: 'C', text: "Manually change the instance count slider in the Cloud Console during an active outage." },
      { id: 'D', text: "Deploy the model on an unmanaged Compute Engine instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization. Vertex AI Online Prediction endpoints provide automated horizontal autoscaling. Administrators define `minReplicaCount` to maintain baseline capacity and prevent cold starts, and `maxReplicaCount` to cap operational spending, while the platform scales nodes dynamically based on target utilization.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#autoscaling",
    tags: ["Model Serving", "Model Autoscaling", "High Load Scale"]
  },
  {
    id: "gcp-pmle-453",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Prediction Autoscaling (Min/Max Replicas & Metrics): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Model Serving to configure a production Vertex AI Online Prediction Endpoint to automatically scale from 2 to 20 nodes during traffic surges while guaranteeing baseline availability.",
    question: "Which solution properly implements these mandatory security and governance controls? Dedicated node autoscaling based on CPU/GPU utilization and concurrency is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization." },
      { id: 'B', text: "Configure a static single-node endpoint with minReplicaCount=1 and maxReplicaCount=1." },
      { id: 'C', text: "Manually change the instance count slider in the Cloud Console during an active outage." },
      { id: 'D', text: "Deploy the model on an unmanaged Compute Engine instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization. Vertex AI Online Prediction endpoints provide automated horizontal autoscaling. Administrators define `minReplicaCount` to maintain baseline capacity and prevent cold starts, and `maxReplicaCount` to cap operational spending, while the platform scales nodes dynamically based on target utilization.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#autoscaling",
    tags: ["Model Serving", "Model Autoscaling", "Security Compliance"]
  },
  {
    id: "gcp-pmle-454",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Prediction Autoscaling (Min/Max Replicas & Metrics): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Model Serving to configure a production Vertex AI Online Prediction Endpoint to automatically scale from 2 to 20 nodes during traffic surges while guaranteeing baseline availability.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Dedicated node autoscaling based on CPU/GPU utilization and concurrency is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization." },
      { id: 'B', text: "Configure a static single-node endpoint with minReplicaCount=1 and maxReplicaCount=1." },
      { id: 'C', text: "Manually change the instance count slider in the Cloud Console during an active outage." },
      { id: 'D', text: "Deploy the model on an unmanaged Compute Engine instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization. Vertex AI Online Prediction endpoints provide automated horizontal autoscaling. Administrators define `minReplicaCount` to maintain baseline capacity and prevent cold starts, and `maxReplicaCount` to cap operational spending, while the platform scales nodes dynamically based on target utilization.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#autoscaling",
    tags: ["Model Serving", "Model Autoscaling", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-455",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Prediction Autoscaling (Min/Max Replicas & Metrics): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Model Serving to configure a production Vertex AI Online Prediction Endpoint to automatically scale from 2 to 20 nodes during traffic surges while guaranteeing baseline availability.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Dedicated node autoscaling based on CPU/GPU utilization and concurrency is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization." },
      { id: 'B', text: "Configure a static single-node endpoint with minReplicaCount=1 and maxReplicaCount=1." },
      { id: 'C', text: "Manually change the instance count slider in the Cloud Console during an active outage." },
      { id: 'D', text: "Deploy the model on an unmanaged Compute Engine instance without load balancing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model specifying minReplicaCount=2, maxReplicaCount=20, and target CPU/GPU utilization. Vertex AI Online Prediction endpoints provide automated horizontal autoscaling. Administrators define `minReplicaCount` to maintain baseline capacity and prevent cold starts, and `maxReplicaCount` to cap operational spending, while the platform scales nodes dynamically based on target utilization.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#autoscaling",
    tags: ["Model Serving", "Model Autoscaling", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-456",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Batch Prediction Pipelines: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Batch Prediction to generate risk scores for 50 million customer accounts every Sunday night, reading input features from BigQuery and writing prediction scores directly back to BigQuery.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Asynchronous high-throughput batch prediction reading and writing BigQuery/GCS is under consideration.",
    options: [
      { id: 'A', text: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources." },
      { id: 'B', text: "Write a Python script that iterates over 50 million rows and makes individual HTTP calls to an Online Prediction endpoint." },
      { id: 'C', text: "Export the 50 million records to CSV files on a local laptop and run predictions locally." },
      { id: 'D', text: "Deploy 500 Compute Engine instances running an unmanaged prediction loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources. Vertex AI Batch Prediction is optimized for asynchronous, high-throughput offline inference over large datasets. It reads directly from and writes directly to BigQuery or Cloud Storage, provisions compute clusters on demand, and automatically shuts them down upon completion, saving significant costs.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/classification-regression/get-batch-predictions",
    tags: ["Batch Prediction", "Batch Prediction", "Dr Failover"]
  },
  {
    id: "gcp-pmle-457",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Batch Prediction Pipelines: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Batch Prediction to generate risk scores for 50 million customer accounts every Sunday night, reading input features from BigQuery and writing prediction scores directly back to BigQuery.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Asynchronous high-throughput batch prediction reading and writing BigQuery/GCS is under consideration.",
    options: [
      { id: 'A', text: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources." },
      { id: 'B', text: "Write a Python script that iterates over 50 million rows and makes individual HTTP calls to an Online Prediction endpoint." },
      { id: 'C', text: "Export the 50 million records to CSV files on a local laptop and run predictions locally." },
      { id: 'D', text: "Deploy 500 Compute Engine instances running an unmanaged prediction loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources. Vertex AI Batch Prediction is optimized for asynchronous, high-throughput offline inference over large datasets. It reads directly from and writes directly to BigQuery or Cloud Storage, provisions compute clusters on demand, and automatically shuts them down upon completion, saving significant costs.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/classification-regression/get-batch-predictions",
    tags: ["Batch Prediction", "Batch Prediction", "High Load Scale"]
  },
  {
    id: "gcp-pmle-458",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Batch Prediction Pipelines: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Batch Prediction to generate risk scores for 50 million customer accounts every Sunday night, reading input features from BigQuery and writing prediction scores directly back to BigQuery.",
    question: "Which solution properly implements these mandatory security and governance controls? Asynchronous high-throughput batch prediction reading and writing BigQuery/GCS is under consideration.",
    options: [
      { id: 'A', text: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources." },
      { id: 'B', text: "Write a Python script that iterates over 50 million rows and makes individual HTTP calls to an Online Prediction endpoint." },
      { id: 'C', text: "Export the 50 million records to CSV files on a local laptop and run predictions locally." },
      { id: 'D', text: "Deploy 500 Compute Engine instances running an unmanaged prediction loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources. Vertex AI Batch Prediction is optimized for asynchronous, high-throughput offline inference over large datasets. It reads directly from and writes directly to BigQuery or Cloud Storage, provisions compute clusters on demand, and automatically shuts them down upon completion, saving significant costs.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/classification-regression/get-batch-predictions",
    tags: ["Batch Prediction", "Batch Prediction", "Security Compliance"]
  },
  {
    id: "gcp-pmle-459",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Batch Prediction Pipelines: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Batch Prediction to generate risk scores for 50 million customer accounts every Sunday night, reading input features from BigQuery and writing prediction scores directly back to BigQuery.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Asynchronous high-throughput batch prediction reading and writing BigQuery/GCS is under consideration.",
    options: [
      { id: 'A', text: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources." },
      { id: 'B', text: "Write a Python script that iterates over 50 million rows and makes individual HTTP calls to an Online Prediction endpoint." },
      { id: 'C', text: "Export the 50 million records to CSV files on a local laptop and run predictions locally." },
      { id: 'D', text: "Deploy 500 Compute Engine instances running an unmanaged prediction loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources. Vertex AI Batch Prediction is optimized for asynchronous, high-throughput offline inference over large datasets. It reads directly from and writes directly to BigQuery or Cloud Storage, provisions compute clusters on demand, and automatically shuts them down upon completion, saving significant costs.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/classification-regression/get-batch-predictions",
    tags: ["Batch Prediction", "Batch Prediction", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-460",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Batch Prediction Pipelines: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Batch Prediction to generate risk scores for 50 million customer accounts every Sunday night, reading input features from BigQuery and writing prediction scores directly back to BigQuery.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Asynchronous high-throughput batch prediction reading and writing BigQuery/GCS is under consideration.",
    options: [
      { id: 'A', text: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources." },
      { id: 'B', text: "Write a Python script that iterates over 50 million rows and makes individual HTTP calls to an Online Prediction endpoint." },
      { id: 'C', text: "Export the 50 million records to CSV files on a local laptop and run predictions locally." },
      { id: 'D', text: "Deploy 500 Compute Engine instances running an unmanaged prediction loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Submit a Vertex AI Batch Prediction job with BigQuery input and output sources. Vertex AI Batch Prediction is optimized for asynchronous, high-throughput offline inference over large datasets. It reads directly from and writes directly to BigQuery or Cloud Storage, provisions compute clusters on demand, and automatically shuts them down upon completion, saving significant costs.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/classification-regression/get-batch-predictions",
    tags: ["Batch Prediction", "Batch Prediction", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-461",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Continuous Training (CT) Automation Triggered by Data Drift: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates MLOps Automation to automatically trigger a Vertex AI retraining pipeline whenever Vertex AI Model Monitoring detects significant feature drift in production data.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Automated pipeline triggering via Cloud Functions, Eventarc, and Cloud Scheduler is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline." },
      { id: 'B', text: "Rely on quarterly manual retraining initiated by engineering managers." },
      { id: 'C', text: "Schedule an aggressive retraining pipeline that retrains the model every 10 minutes regardless of data drift." },
      { id: 'D', text: "Disable model retraining permanently once a model achieves 90% validation accuracy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline. Continuous Training (CT) is the hallmark of advanced MLOps maturity. When Model Monitoring detects statistical drift exceeding predefined thresholds, an alert triggers automated pipeline orchestration (via Cloud Function or Eventarc) to retrain, evaluate, and conditionally deploy an updated model.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#mlops_level_2_cicd_pipeline_automation",
    tags: ["MLOps Automation", "Continuous Training", "Dr Failover"]
  },
  {
    id: "gcp-pmle-462",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Continuous Training (CT) Automation Triggered by Data Drift: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates MLOps Automation to automatically trigger a Vertex AI retraining pipeline whenever Vertex AI Model Monitoring detects significant feature drift in production data.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Automated pipeline triggering via Cloud Functions, Eventarc, and Cloud Scheduler is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline." },
      { id: 'B', text: "Rely on quarterly manual retraining initiated by engineering managers." },
      { id: 'C', text: "Schedule an aggressive retraining pipeline that retrains the model every 10 minutes regardless of data drift." },
      { id: 'D', text: "Disable model retraining permanently once a model achieves 90% validation accuracy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline. Continuous Training (CT) is the hallmark of advanced MLOps maturity. When Model Monitoring detects statistical drift exceeding predefined thresholds, an alert triggers automated pipeline orchestration (via Cloud Function or Eventarc) to retrain, evaluate, and conditionally deploy an updated model.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#mlops_level_2_cicd_pipeline_automation",
    tags: ["MLOps Automation", "Continuous Training", "High Load Scale"]
  },
  {
    id: "gcp-pmle-463",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Continuous Training (CT) Automation Triggered by Data Drift: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates MLOps Automation to automatically trigger a Vertex AI retraining pipeline whenever Vertex AI Model Monitoring detects significant feature drift in production data.",
    question: "Which solution properly implements these mandatory security and governance controls? Automated pipeline triggering via Cloud Functions, Eventarc, and Cloud Scheduler is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline." },
      { id: 'B', text: "Rely on quarterly manual retraining initiated by engineering managers." },
      { id: 'C', text: "Schedule an aggressive retraining pipeline that retrains the model every 10 minutes regardless of data drift." },
      { id: 'D', text: "Disable model retraining permanently once a model achieves 90% validation accuracy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline. Continuous Training (CT) is the hallmark of advanced MLOps maturity. When Model Monitoring detects statistical drift exceeding predefined thresholds, an alert triggers automated pipeline orchestration (via Cloud Function or Eventarc) to retrain, evaluate, and conditionally deploy an updated model.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#mlops_level_2_cicd_pipeline_automation",
    tags: ["MLOps Automation", "Continuous Training", "Security Compliance"]
  },
  {
    id: "gcp-pmle-464",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Continuous Training (CT) Automation Triggered by Data Drift: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates MLOps Automation to automatically trigger a Vertex AI retraining pipeline whenever Vertex AI Model Monitoring detects significant feature drift in production data.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Automated pipeline triggering via Cloud Functions, Eventarc, and Cloud Scheduler is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline." },
      { id: 'B', text: "Rely on quarterly manual retraining initiated by engineering managers." },
      { id: 'C', text: "Schedule an aggressive retraining pipeline that retrains the model every 10 minutes regardless of data drift." },
      { id: 'D', text: "Disable model retraining permanently once a model achieves 90% validation accuracy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline. Continuous Training (CT) is the hallmark of advanced MLOps maturity. When Model Monitoring detects statistical drift exceeding predefined thresholds, an alert triggers automated pipeline orchestration (via Cloud Function or Eventarc) to retrain, evaluate, and conditionally deploy an updated model.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#mlops_level_2_cicd_pipeline_automation",
    tags: ["MLOps Automation", "Continuous Training", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-465",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Continuous Training (CT) Automation Triggered by Data Drift: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates MLOps Automation to automatically trigger a Vertex AI retraining pipeline whenever Vertex AI Model Monitoring detects significant feature drift in production data.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Automated pipeline triggering via Cloud Functions, Eventarc, and Cloud Scheduler is under consideration.",
    options: [
      { id: 'A', text: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline." },
      { id: 'B', text: "Rely on quarterly manual retraining initiated by engineering managers." },
      { id: 'C', text: "Schedule an aggressive retraining pipeline that retrains the model every 10 minutes regardless of data drift." },
      { id: 'D', text: "Disable model retraining permanently once a model achieves 90% validation accuracy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a Cloud Monitoring alert on model drift metrics to invoke a Cloud Function that triggers the Vertex AI Pipeline. Continuous Training (CT) is the hallmark of advanced MLOps maturity. When Model Monitoring detects statistical drift exceeding predefined thresholds, an alert triggers automated pipeline orchestration (via Cloud Function or Eventarc) to retrain, evaluate, and conditionally deploy an updated model.",
    referenceUrl: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#mlops_level_2_cicd_pipeline_automation",
    tags: ["MLOps Automation", "Continuous Training", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-466",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Model Evaluation and Gating in CI/CD (TFX Evaluator): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates MLOps Gating to ensure that an automatically retrained model is deployed to production only if its ROC-AUC score exceeds the current production champion model by at least 1%.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Automated model evaluation comparing candidate vs champion models before deployment is under consideration.",
    options: [
      { id: 'A', text: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline." },
      { id: 'B', text: "Deploy every newly retrained model directly to production without comparative evaluation." },
      { id: 'C', text: "Evaluate the model by manually inspecting the first 5 rows of test predictions." },
      { id: 'D', text: "Require a full committee vote and manual administrative approval for every automated pipeline execution." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline. Automated model validation (like the TFX Evaluator component or custom pipeline step) assesses candidate models against validation datasets and historical production baselines. If the candidate fails to meet validation thresholds or underperforms the champion, the pipeline halts deployment automatically.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component",
    tags: ["MLOps Gating", "Model Gating", "Dr Failover"]
  },
  {
    id: "gcp-pmle-467",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Model Evaluation and Gating in CI/CD (TFX Evaluator): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates MLOps Gating to ensure that an automatically retrained model is deployed to production only if its ROC-AUC score exceeds the current production champion model by at least 1%.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Automated model evaluation comparing candidate vs champion models before deployment is under consideration.",
    options: [
      { id: 'A', text: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline." },
      { id: 'B', text: "Deploy every newly retrained model directly to production without comparative evaluation." },
      { id: 'C', text: "Evaluate the model by manually inspecting the first 5 rows of test predictions." },
      { id: 'D', text: "Require a full committee vote and manual administrative approval for every automated pipeline execution." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline. Automated model validation (like the TFX Evaluator component or custom pipeline step) assesses candidate models against validation datasets and historical production baselines. If the candidate fails to meet validation thresholds or underperforms the champion, the pipeline halts deployment automatically.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component",
    tags: ["MLOps Gating", "Model Gating", "High Load Scale"]
  },
  {
    id: "gcp-pmle-468",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Model Evaluation and Gating in CI/CD (TFX Evaluator): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates MLOps Gating to ensure that an automatically retrained model is deployed to production only if its ROC-AUC score exceeds the current production champion model by at least 1%.",
    question: "Which solution properly implements these mandatory security and governance controls? Automated model evaluation comparing candidate vs champion models before deployment is under consideration.",
    options: [
      { id: 'A', text: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline." },
      { id: 'B', text: "Deploy every newly retrained model directly to production without comparative evaluation." },
      { id: 'C', text: "Evaluate the model by manually inspecting the first 5 rows of test predictions." },
      { id: 'D', text: "Require a full committee vote and manual administrative approval for every automated pipeline execution." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline. Automated model validation (like the TFX Evaluator component or custom pipeline step) assesses candidate models against validation datasets and historical production baselines. If the candidate fails to meet validation thresholds or underperforms the champion, the pipeline halts deployment automatically.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component",
    tags: ["MLOps Gating", "Model Gating", "Security Compliance"]
  },
  {
    id: "gcp-pmle-469",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Model Evaluation and Gating in CI/CD (TFX Evaluator): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates MLOps Gating to ensure that an automatically retrained model is deployed to production only if its ROC-AUC score exceeds the current production champion model by at least 1%.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Automated model evaluation comparing candidate vs champion models before deployment is under consideration.",
    options: [
      { id: 'A', text: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline." },
      { id: 'B', text: "Deploy every newly retrained model directly to production without comparative evaluation." },
      { id: 'C', text: "Evaluate the model by manually inspecting the first 5 rows of test predictions." },
      { id: 'D', text: "Require a full committee vote and manual administrative approval for every automated pipeline execution." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline. Automated model validation (like the TFX Evaluator component or custom pipeline step) assesses candidate models against validation datasets and historical production baselines. If the candidate fails to meet validation thresholds or underperforms the champion, the pipeline halts deployment automatically.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component",
    tags: ["MLOps Gating", "Model Gating", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-470",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Model Evaluation and Gating in CI/CD (TFX Evaluator): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates MLOps Gating to ensure that an automatically retrained model is deployed to production only if its ROC-AUC score exceeds the current production champion model by at least 1%.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Automated model evaluation comparing candidate vs champion models before deployment is under consideration.",
    options: [
      { id: 'A', text: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline." },
      { id: 'B', text: "Deploy every newly retrained model directly to production without comparative evaluation." },
      { id: 'C', text: "Evaluate the model by manually inspecting the first 5 rows of test predictions." },
      { id: 'D', text: "Require a full committee vote and manual administrative approval for every automated pipeline execution." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Incorporate an automated evaluation and validation step in Vertex AI Pipelines that compares candidate metrics against the production baseline. Automated model validation (like the TFX Evaluator component or custom pipeline step) assesses candidate models against validation datasets and historical production baselines. If the candidate fails to meet validation thresholds or underperforms the champion, the pipeline halts deployment automatically.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component",
    tags: ["MLOps Gating", "Model Gating", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-471",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Private Endpoints for Vertex AI Prediction (VPC Peering): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Secure Serving to serve real-time predictions from a deep learning model to internal microservices over private RFC 1918 IP addresses with zero exposure to the public internet.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Vertex AI Private Endpoints connected to private VPC networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection." },
      { id: 'B', text: "Deploy the model to a public internet endpoint and rely on API keys." },
      { id: 'C', text: "Host the model inside a public Cloud Storage bucket." },
      { id: 'D', text: "Open port 80 to the public internet on the prediction endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection. Vertex AI Private Endpoints provide secure, private connectivity between an organization's VPC network and Vertex AI prediction services over Private Services Access (VPC peering), ensuring inference traffic never traverses the public internet.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/using-private-endpoints",
    tags: ["Secure Serving", "Private Endpoints", "Dr Failover"]
  },
  {
    id: "gcp-pmle-472",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Private Endpoints for Vertex AI Prediction (VPC Peering): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Secure Serving to serve real-time predictions from a deep learning model to internal microservices over private RFC 1918 IP addresses with zero exposure to the public internet.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Vertex AI Private Endpoints connected to private VPC networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection." },
      { id: 'B', text: "Deploy the model to a public internet endpoint and rely on API keys." },
      { id: 'C', text: "Host the model inside a public Cloud Storage bucket." },
      { id: 'D', text: "Open port 80 to the public internet on the prediction endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection. Vertex AI Private Endpoints provide secure, private connectivity between an organization's VPC network and Vertex AI prediction services over Private Services Access (VPC peering), ensuring inference traffic never traverses the public internet.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/using-private-endpoints",
    tags: ["Secure Serving", "Private Endpoints", "High Load Scale"]
  },
  {
    id: "gcp-pmle-473",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Private Endpoints for Vertex AI Prediction (VPC Peering): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Secure Serving to serve real-time predictions from a deep learning model to internal microservices over private RFC 1918 IP addresses with zero exposure to the public internet.",
    question: "Which solution properly implements these mandatory security and governance controls? Vertex AI Private Endpoints connected to private VPC networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection." },
      { id: 'B', text: "Deploy the model to a public internet endpoint and rely on API keys." },
      { id: 'C', text: "Host the model inside a public Cloud Storage bucket." },
      { id: 'D', text: "Open port 80 to the public internet on the prediction endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection. Vertex AI Private Endpoints provide secure, private connectivity between an organization's VPC network and Vertex AI prediction services over Private Services Access (VPC peering), ensuring inference traffic never traverses the public internet.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/using-private-endpoints",
    tags: ["Secure Serving", "Private Endpoints", "Security Compliance"]
  },
  {
    id: "gcp-pmle-474",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Private Endpoints for Vertex AI Prediction (VPC Peering): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Secure Serving to serve real-time predictions from a deep learning model to internal microservices over private RFC 1918 IP addresses with zero exposure to the public internet.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Vertex AI Private Endpoints connected to private VPC networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection." },
      { id: 'B', text: "Deploy the model to a public internet endpoint and rely on API keys." },
      { id: 'C', text: "Host the model inside a public Cloud Storage bucket." },
      { id: 'D', text: "Open port 80 to the public internet on the prediction endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection. Vertex AI Private Endpoints provide secure, private connectivity between an organization's VPC network and Vertex AI prediction services over Private Services Access (VPC peering), ensuring inference traffic never traverses the public internet.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/using-private-endpoints",
    tags: ["Secure Serving", "Private Endpoints", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-475",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Private Endpoints for Vertex AI Prediction (VPC Peering): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Secure Serving to serve real-time predictions from a deep learning model to internal microservices over private RFC 1918 IP addresses with zero exposure to the public internet.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Vertex AI Private Endpoints connected to private VPC networks is under consideration.",
    options: [
      { id: 'A', text: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection." },
      { id: 'B', text: "Deploy the model to a public internet endpoint and rely on API keys." },
      { id: 'C', text: "Host the model inside a public Cloud Storage bucket." },
      { id: 'D', text: "Open port 80 to the public internet on the prediction endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the model to a Vertex AI Endpoint configured with a private VPC network connection. Vertex AI Private Endpoints provide secure, private connectivity between an organization's VPC network and Vertex AI prediction services over Private Services Access (VPC peering), ensuring inference traffic never traverses the public internet.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/predictions/using-private-endpoints",
    tags: ["Secure Serving", "Private Endpoints", "Resilience Failure"]
  }
];

export default GCP_PMLE_QUESTIONS_19;
