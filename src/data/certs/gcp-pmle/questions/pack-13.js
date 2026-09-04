export const GCP_PMLE_QUESTIONS_13 = [
  {
    id: "gcp-pmle-301",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "BigQuery ML (BQML) Feature Engineering & Modeling: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates BigQuery ML to train and evaluate a customer churn prediction model directly on 10 terabytes of tabular data in BigQuery using standard SQL without exporting data to external Python runtimes.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? TRANSFORM clause, ML.FEATURE_INFO, and in-database SQL model training is under consideration.",
    options: [
      { id: 'A', text: "Write custom MapReduce jobs in Java on an on-premises Hadoop cluster." },
      { id: 'B', text: "Export all 10 TB of data to local CSV files on developer laptops and train using scikit-learn." },
      { id: 'C', text: "Manually calculate probabilities in Excel spreadsheets." },
      { id: 'D', text: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier'))." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier')). BigQuery ML (BQML) enables data scientists and analysts to build and operationalize ML models directly inside BigQuery using standard SQL. It eliminates the need to export massive datasets, handles automated preprocessing via the `TRANSFORM` clause, and scales compute dynamically.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bqml-introduction",
    tags: ["BigQuery ML", "BigQuery ML", "Dr Failover"]
  },
  {
    id: "gcp-pmle-302",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "BigQuery ML (BQML) Feature Engineering & Modeling: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates BigQuery ML to train and evaluate a customer churn prediction model directly on 10 terabytes of tabular data in BigQuery using standard SQL without exporting data to external Python runtimes.",
    question: "Which architectural approach should the team select to manage this demand efficiently? TRANSFORM clause, ML.FEATURE_INFO, and in-database SQL model training is under consideration.",
    options: [
      { id: 'A', text: "Manually calculate probabilities in Excel spreadsheets." },
      { id: 'B', text: "Export all 10 TB of data to local CSV files on developer laptops and train using scikit-learn." },
      { id: 'C', text: "Write custom MapReduce jobs in Java on an on-premises Hadoop cluster." },
      { id: 'D', text: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier'))." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier')). BigQuery ML (BQML) enables data scientists and analysts to build and operationalize ML models directly inside BigQuery using standard SQL. It eliminates the need to export massive datasets, handles automated preprocessing via the `TRANSFORM` clause, and scales compute dynamically.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bqml-introduction",
    tags: ["BigQuery ML", "BigQuery ML", "High Load Scale"]
  },
  {
    id: "gcp-pmle-303",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "BigQuery ML (BQML) Feature Engineering & Modeling: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates BigQuery ML to train and evaluate a customer churn prediction model directly on 10 terabytes of tabular data in BigQuery using standard SQL without exporting data to external Python runtimes.",
    question: "Which solution properly implements these mandatory security and governance controls? TRANSFORM clause, ML.FEATURE_INFO, and in-database SQL model training is under consideration.",
    options: [
      { id: 'A', text: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier'))." },
      { id: 'B', text: "Manually calculate probabilities in Excel spreadsheets." },
      { id: 'C', text: "Write custom MapReduce jobs in Java on an on-premises Hadoop cluster." },
      { id: 'D', text: "Export all 10 TB of data to local CSV files on developer laptops and train using scikit-learn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier')). BigQuery ML (BQML) enables data scientists and analysts to build and operationalize ML models directly inside BigQuery using standard SQL. It eliminates the need to export massive datasets, handles automated preprocessing via the `TRANSFORM` clause, and scales compute dynamically.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bqml-introduction",
    tags: ["BigQuery ML", "BigQuery ML", "Security Compliance"]
  },
  {
    id: "gcp-pmle-304",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "BigQuery ML (BQML) Feature Engineering & Modeling: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates BigQuery ML to train and evaluate a customer churn prediction model directly on 10 terabytes of tabular data in BigQuery using standard SQL without exporting data to external Python runtimes.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? TRANSFORM clause, ML.FEATURE_INFO, and in-database SQL model training is under consideration.",
    options: [
      { id: 'A', text: "Export all 10 TB of data to local CSV files on developer laptops and train using scikit-learn." },
      { id: 'B', text: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier'))." },
      { id: 'C', text: "Manually calculate probabilities in Excel spreadsheets." },
      { id: 'D', text: "Write custom MapReduce jobs in Java on an on-premises Hadoop cluster." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier')). BigQuery ML (BQML) enables data scientists and analysts to build and operationalize ML models directly inside BigQuery using standard SQL. It eliminates the need to export massive datasets, handles automated preprocessing via the `TRANSFORM` clause, and scales compute dynamically.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bqml-introduction",
    tags: ["BigQuery ML", "BigQuery ML", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-305",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "BigQuery ML (BQML) Feature Engineering & Modeling: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates BigQuery ML to train and evaluate a customer churn prediction model directly on 10 terabytes of tabular data in BigQuery using standard SQL without exporting data to external Python runtimes.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? TRANSFORM clause, ML.FEATURE_INFO, and in-database SQL model training is under consideration.",
    options: [
      { id: 'A', text: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier'))." },
      { id: 'B', text: "Export all 10 TB of data to local CSV files on developer laptops and train using scikit-learn." },
      { id: 'C', text: "Manually calculate probabilities in Excel spreadsheets." },
      { id: 'D', text: "Write custom MapReduce jobs in Java on an on-premises Hadoop cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Train a classification model using BigQuery ML (CREATE OR REPLACE MODEL ... OPTIONS(model_type='boosted_tree_classifier')). BigQuery ML (BQML) enables data scientists and analysts to build and operationalize ML models directly inside BigQuery using standard SQL. It eliminates the need to export massive datasets, handles automated preprocessing via the `TRANSFORM` clause, and scales compute dynamically.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bqml-introduction",
    tags: ["BigQuery ML", "BigQuery ML", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-306",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Dataflow and Apache Beam for Distributed Preprocessing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Data Preprocessing to preprocess, tokenize, and normalize terabytes of raw unstructured text records in parallel before feeding them into a deep learning training pipeline.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Apache Beam pipelines executing distributed feature transformations on Dataflow is under consideration.",
    options: [
      { id: 'A', text: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow." },
      { id: 'B', text: "Store raw unprocessed text directly in the training pipeline and perform CPU tokenization inside the training loop." },
      { id: 'C', text: "Process all text files sequentially on a single-core virtual machine." },
      { id: 'D', text: "Use manual string search-and-replace scripts inside a desktop text editor." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow. Google Cloud Dataflow executes Apache Beam pipelines with horizontal autoscaling, distributing data processing across hundreds of worker nodes. Preprocessing data out-of-band prevents GPU/TPU starvation during model training.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Data Preprocessing", "Dataflow", "Dr Failover"]
  },
  {
    id: "gcp-pmle-307",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Dataflow and Apache Beam for Distributed Preprocessing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Data Preprocessing to preprocess, tokenize, and normalize terabytes of raw unstructured text records in parallel before feeding them into a deep learning training pipeline.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Apache Beam pipelines executing distributed feature transformations on Dataflow is under consideration.",
    options: [
      { id: 'A', text: "Use manual string search-and-replace scripts inside a desktop text editor." },
      { id: 'B', text: "Store raw unprocessed text directly in the training pipeline and perform CPU tokenization inside the training loop." },
      { id: 'C', text: "Process all text files sequentially on a single-core virtual machine." },
      { id: 'D', text: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow. Google Cloud Dataflow executes Apache Beam pipelines with horizontal autoscaling, distributing data processing across hundreds of worker nodes. Preprocessing data out-of-band prevents GPU/TPU starvation during model training.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Data Preprocessing", "Dataflow", "High Load Scale"]
  },
  {
    id: "gcp-pmle-308",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Dataflow and Apache Beam for Distributed Preprocessing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Data Preprocessing to preprocess, tokenize, and normalize terabytes of raw unstructured text records in parallel before feeding them into a deep learning training pipeline.",
    question: "Which solution properly implements these mandatory security and governance controls? Apache Beam pipelines executing distributed feature transformations on Dataflow is under consideration.",
    options: [
      { id: 'A', text: "Store raw unprocessed text directly in the training pipeline and perform CPU tokenization inside the training loop." },
      { id: 'B', text: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow." },
      { id: 'C', text: "Use manual string search-and-replace scripts inside a desktop text editor." },
      { id: 'D', text: "Process all text files sequentially on a single-core virtual machine." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow. Google Cloud Dataflow executes Apache Beam pipelines with horizontal autoscaling, distributing data processing across hundreds of worker nodes. Preprocessing data out-of-band prevents GPU/TPU starvation during model training.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Data Preprocessing", "Dataflow", "Security Compliance"]
  },
  {
    id: "gcp-pmle-309",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Dataflow and Apache Beam for Distributed Preprocessing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Data Preprocessing to preprocess, tokenize, and normalize terabytes of raw unstructured text records in parallel before feeding them into a deep learning training pipeline.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Apache Beam pipelines executing distributed feature transformations on Dataflow is under consideration.",
    options: [
      { id: 'A', text: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow." },
      { id: 'B', text: "Use manual string search-and-replace scripts inside a desktop text editor." },
      { id: 'C', text: "Process all text files sequentially on a single-core virtual machine." },
      { id: 'D', text: "Store raw unprocessed text directly in the training pipeline and perform CPU tokenization inside the training loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow. Google Cloud Dataflow executes Apache Beam pipelines with horizontal autoscaling, distributing data processing across hundreds of worker nodes. Preprocessing data out-of-band prevents GPU/TPU starvation during model training.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Data Preprocessing", "Dataflow", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-310",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Dataflow and Apache Beam for Distributed Preprocessing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Data Preprocessing to preprocess, tokenize, and normalize terabytes of raw unstructured text records in parallel before feeding them into a deep learning training pipeline.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Apache Beam pipelines executing distributed feature transformations on Dataflow is under consideration.",
    options: [
      { id: 'A', text: "Store raw unprocessed text directly in the training pipeline and perform CPU tokenization inside the training loop." },
      { id: 'B', text: "Process all text files sequentially on a single-core virtual machine." },
      { id: 'C', text: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow." },
      { id: 'D', text: "Use manual string search-and-replace scripts inside a desktop text editor." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Build an Apache Beam pipeline executing distributed transformations and run it on Google Cloud Dataflow. Google Cloud Dataflow executes Apache Beam pipelines with horizontal autoscaling, distributing data processing across hundreds of worker nodes. Preprocessing data out-of-band prevents GPU/TPU starvation during model training.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Data Preprocessing", "Dataflow", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-311",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "TensorFlow Transform (tf.transform) for Train-Serve Parity: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Feature Engineering to eliminate training-serving skew by ensuring that identical numerical scaling and categorical vocabulary transformations apply during both batch training and real-time online serving.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? tf.transform producing preprocessing graphs that attach directly to exported models is under consideration.",
    options: [
      { id: 'A', text: "Disable all feature scaling and normalization to avoid discrepancies." },
      { id: 'B', text: "Calculate scaling factors dynamically on each individual incoming online prediction request." },
      { id: 'C', text: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model." },
      { id: 'D', text: "Implement preprocessing in Python for training and rewrite the logic in JavaScript for serving." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model. TensorFlow Transform (`tf.transform`) computes global dataset statistics (such as min, max, mean, vocabulary) in a distributed pipeline (Apache Beam) and outputs a TensorFlow graph that is prepended directly to the serving model, guaranteeing 100% train-serve parity.",
    referenceUrl: "https://www.tensorflow.org/tfx/transform/get_started",
    tags: ["Feature Engineering", "Train-Serve Skew", "Dr Failover"]
  },
  {
    id: "gcp-pmle-312",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "TensorFlow Transform (tf.transform) for Train-Serve Parity: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Feature Engineering to eliminate training-serving skew by ensuring that identical numerical scaling and categorical vocabulary transformations apply during both batch training and real-time online serving.",
    question: "Which architectural approach should the team select to manage this demand efficiently? tf.transform producing preprocessing graphs that attach directly to exported models is under consideration.",
    options: [
      { id: 'A', text: "Calculate scaling factors dynamically on each individual incoming online prediction request." },
      { id: 'B', text: "Implement preprocessing in Python for training and rewrite the logic in JavaScript for serving." },
      { id: 'C', text: "Disable all feature scaling and normalization to avoid discrepancies." },
      { id: 'D', text: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model. TensorFlow Transform (`tf.transform`) computes global dataset statistics (such as min, max, mean, vocabulary) in a distributed pipeline (Apache Beam) and outputs a TensorFlow graph that is prepended directly to the serving model, guaranteeing 100% train-serve parity.",
    referenceUrl: "https://www.tensorflow.org/tfx/transform/get_started",
    tags: ["Feature Engineering", "Train-Serve Skew", "High Load Scale"]
  },
  {
    id: "gcp-pmle-313",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "TensorFlow Transform (tf.transform) for Train-Serve Parity: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Feature Engineering to eliminate training-serving skew by ensuring that identical numerical scaling and categorical vocabulary transformations apply during both batch training and real-time online serving.",
    question: "Which solution properly implements these mandatory security and governance controls? tf.transform producing preprocessing graphs that attach directly to exported models is under consideration.",
    options: [
      { id: 'A', text: "Calculate scaling factors dynamically on each individual incoming online prediction request." },
      { id: 'B', text: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model." },
      { id: 'C', text: "Implement preprocessing in Python for training and rewrite the logic in JavaScript for serving." },
      { id: 'D', text: "Disable all feature scaling and normalization to avoid discrepancies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model. TensorFlow Transform (`tf.transform`) computes global dataset statistics (such as min, max, mean, vocabulary) in a distributed pipeline (Apache Beam) and outputs a TensorFlow graph that is prepended directly to the serving model, guaranteeing 100% train-serve parity.",
    referenceUrl: "https://www.tensorflow.org/tfx/transform/get_started",
    tags: ["Feature Engineering", "Train-Serve Skew", "Security Compliance"]
  },
  {
    id: "gcp-pmle-314",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "TensorFlow Transform (tf.transform) for Train-Serve Parity: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Feature Engineering to eliminate training-serving skew by ensuring that identical numerical scaling and categorical vocabulary transformations apply during both batch training and real-time online serving.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? tf.transform producing preprocessing graphs that attach directly to exported models is under consideration.",
    options: [
      { id: 'A', text: "Implement preprocessing in Python for training and rewrite the logic in JavaScript for serving." },
      { id: 'B', text: "Calculate scaling factors dynamically on each individual incoming online prediction request." },
      { id: 'C', text: "Disable all feature scaling and normalization to avoid discrepancies." },
      { id: 'D', text: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model. TensorFlow Transform (`tf.transform`) computes global dataset statistics (such as min, max, mean, vocabulary) in a distributed pipeline (Apache Beam) and outputs a TensorFlow graph that is prepended directly to the serving model, guaranteeing 100% train-serve parity.",
    referenceUrl: "https://www.tensorflow.org/tfx/transform/get_started",
    tags: ["Feature Engineering", "Train-Serve Skew", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-315",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "TensorFlow Transform (tf.transform) for Train-Serve Parity: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Feature Engineering to eliminate training-serving skew by ensuring that identical numerical scaling and categorical vocabulary transformations apply during both batch training and real-time online serving.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? tf.transform producing preprocessing graphs that attach directly to exported models is under consideration.",
    options: [
      { id: 'A', text: "Calculate scaling factors dynamically on each individual incoming online prediction request." },
      { id: 'B', text: "Implement preprocessing in Python for training and rewrite the logic in JavaScript for serving." },
      { id: 'C', text: "Disable all feature scaling and normalization to avoid discrepancies." },
      { id: 'D', text: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement feature transformations using TensorFlow Transform (tf.transform) and export the preprocessing graph with the saved model. TensorFlow Transform (`tf.transform`) computes global dataset statistics (such as min, max, mean, vocabulary) in a distributed pipeline (Apache Beam) and outputs a TensorFlow graph that is prepended directly to the serving model, guaranteeing 100% train-serve parity.",
    referenceUrl: "https://www.tensorflow.org/tfx/transform/get_started",
    tags: ["Feature Engineering", "Train-Serve Skew", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-316",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Store (Vertex AI Feature Store): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Vertex AI Feature Store to share, discover, and serve calculated customer features (e.g. 30-day purchase count) across 10 different ML models with sub-10ms online serving and point-in-time historical correctness.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Centralized feature repository with online (low-latency) and offline (batch) serving is under consideration.",
    options: [
      { id: 'A', text: "Hardcode calculated feature values directly into application source code." },
      { id: 'B', text: "Store features in a public Google Sheets document shared across teams." },
      { id: 'C', text: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups." },
      { id: 'D', text: "Have each data science team re-calculate features independently in their own training scripts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups. Vertex AI Feature Store provides a centralized repository for organizing, storing, and serving ML features. It decouples feature engineering from model development, avoids duplicate computation, provides low-latency online serving, and prevents data leakage via point-in-time time-travel queries.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/overview",
    tags: ["Vertex AI Feature Store", "Feature Store", "Dr Failover"]
  },
  {
    id: "gcp-pmle-317",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Store (Vertex AI Feature Store): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Vertex AI Feature Store to share, discover, and serve calculated customer features (e.g. 30-day purchase count) across 10 different ML models with sub-10ms online serving and point-in-time historical correctness.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Centralized feature repository with online (low-latency) and offline (batch) serving is under consideration.",
    options: [
      { id: 'A', text: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups." },
      { id: 'B', text: "Store features in a public Google Sheets document shared across teams." },
      { id: 'C', text: "Have each data science team re-calculate features independently in their own training scripts." },
      { id: 'D', text: "Hardcode calculated feature values directly into application source code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups. Vertex AI Feature Store provides a centralized repository for organizing, storing, and serving ML features. It decouples feature engineering from model development, avoids duplicate computation, provides low-latency online serving, and prevents data leakage via point-in-time time-travel queries.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/overview",
    tags: ["Vertex AI Feature Store", "Feature Store", "High Load Scale"]
  },
  {
    id: "gcp-pmle-318",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Store (Vertex AI Feature Store): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Vertex AI Feature Store to share, discover, and serve calculated customer features (e.g. 30-day purchase count) across 10 different ML models with sub-10ms online serving and point-in-time historical correctness.",
    question: "Which solution properly implements these mandatory security and governance controls? Centralized feature repository with online (low-latency) and offline (batch) serving is under consideration.",
    options: [
      { id: 'A', text: "Hardcode calculated feature values directly into application source code." },
      { id: 'B', text: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups." },
      { id: 'C', text: "Have each data science team re-calculate features independently in their own training scripts." },
      { id: 'D', text: "Store features in a public Google Sheets document shared across teams." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups. Vertex AI Feature Store provides a centralized repository for organizing, storing, and serving ML features. It decouples feature engineering from model development, avoids duplicate computation, provides low-latency online serving, and prevents data leakage via point-in-time time-travel queries.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/overview",
    tags: ["Vertex AI Feature Store", "Feature Store", "Security Compliance"]
  },
  {
    id: "gcp-pmle-319",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Store (Vertex AI Feature Store): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Vertex AI Feature Store to share, discover, and serve calculated customer features (e.g. 30-day purchase count) across 10 different ML models with sub-10ms online serving and point-in-time historical correctness.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Centralized feature repository with online (low-latency) and offline (batch) serving is under consideration.",
    options: [
      { id: 'A', text: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups." },
      { id: 'B', text: "Have each data science team re-calculate features independently in their own training scripts." },
      { id: 'C', text: "Store features in a public Google Sheets document shared across teams." },
      { id: 'D', text: "Hardcode calculated feature values directly into application source code." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups. Vertex AI Feature Store provides a centralized repository for organizing, storing, and serving ML features. It decouples feature engineering from model development, avoids duplicate computation, provides low-latency online serving, and prevents data leakage via point-in-time time-travel queries.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/overview",
    tags: ["Vertex AI Feature Store", "Feature Store", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-320",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Store (Vertex AI Feature Store): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Vertex AI Feature Store to share, discover, and serve calculated customer features (e.g. 30-day purchase count) across 10 different ML models with sub-10ms online serving and point-in-time historical correctness.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Centralized feature repository with online (low-latency) and offline (batch) serving is under consideration.",
    options: [
      { id: 'A', text: "Have each data science team re-calculate features independently in their own training scripts." },
      { id: 'B', text: "Store features in a public Google Sheets document shared across teams." },
      { id: 'C', text: "Hardcode calculated feature values directly into application source code." },
      { id: 'D', text: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Vertex AI Feature Store to manage feature registries, online low-latency serving, and point-in-time time-travel lookups. Vertex AI Feature Store provides a centralized repository for organizing, storing, and serving ML features. It decouples feature engineering from model development, avoids duplicate computation, provides low-latency online serving, and prevents data leakage via point-in-time time-travel queries.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/featurestore/overview",
    tags: ["Vertex AI Feature Store", "Feature Store", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-321",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Handling Missing Data and Imputation Strategies: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Data Quality to handle missing numerical and categorical values in a tabular training dataset without dropping 40% of valuable customer transaction rows.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Mean/median imputation, categorical indicators, and model-based missingness handling is under consideration.",
    options: [
      { id: 'A', text: "Delete all rows that contain at least one missing value." },
      { id: 'B', text: "Replace all missing numerical values with the number 999999 without indicator flags." },
      { id: 'C', text: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features)." },
      { id: 'D', text: "Fill all missing values with random numbers generated from a uniform distribution." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features). Dropping rows with missing values causes significant data loss and introduces selection bias. Proper imputation techniques (such as median imputation for continuous features or creating an explicit 'Unknown' category) preserve training data while representing missingness cleanly.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#handling_missing_data",
    tags: ["Data Quality", "Data Preprocessing", "Dr Failover"]
  },
  {
    id: "gcp-pmle-322",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Handling Missing Data and Imputation Strategies: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Data Quality to handle missing numerical and categorical values in a tabular training dataset without dropping 40% of valuable customer transaction rows.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Mean/median imputation, categorical indicators, and model-based missingness handling is under consideration.",
    options: [
      { id: 'A', text: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features)." },
      { id: 'B', text: "Replace all missing numerical values with the number 999999 without indicator flags." },
      { id: 'C', text: "Fill all missing values with random numbers generated from a uniform distribution." },
      { id: 'D', text: "Delete all rows that contain at least one missing value." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features). Dropping rows with missing values causes significant data loss and introduces selection bias. Proper imputation techniques (such as median imputation for continuous features or creating an explicit 'Unknown' category) preserve training data while representing missingness cleanly.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#handling_missing_data",
    tags: ["Data Quality", "Data Preprocessing", "High Load Scale"]
  },
  {
    id: "gcp-pmle-323",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Handling Missing Data and Imputation Strategies: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Data Quality to handle missing numerical and categorical values in a tabular training dataset without dropping 40% of valuable customer transaction rows.",
    question: "Which solution properly implements these mandatory security and governance controls? Mean/median imputation, categorical indicators, and model-based missingness handling is under consideration.",
    options: [
      { id: 'A', text: "Delete all rows that contain at least one missing value." },
      { id: 'B', text: "Replace all missing numerical values with the number 999999 without indicator flags." },
      { id: 'C', text: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features)." },
      { id: 'D', text: "Fill all missing values with random numbers generated from a uniform distribution." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features). Dropping rows with missing values causes significant data loss and introduces selection bias. Proper imputation techniques (such as median imputation for continuous features or creating an explicit 'Unknown' category) preserve training data while representing missingness cleanly.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#handling_missing_data",
    tags: ["Data Quality", "Data Preprocessing", "Security Compliance"]
  },
  {
    id: "gcp-pmle-324",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Handling Missing Data and Imputation Strategies: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Data Quality to handle missing numerical and categorical values in a tabular training dataset without dropping 40% of valuable customer transaction rows.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Mean/median imputation, categorical indicators, and model-based missingness handling is under consideration.",
    options: [
      { id: 'A', text: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features)." },
      { id: 'B', text: "Fill all missing values with random numbers generated from a uniform distribution." },
      { id: 'C', text: "Replace all missing numerical values with the number 999999 without indicator flags." },
      { id: 'D', text: "Delete all rows that contain at least one missing value." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features). Dropping rows with missing values causes significant data loss and introduces selection bias. Proper imputation techniques (such as median imputation for continuous features or creating an explicit 'Unknown' category) preserve training data while representing missingness cleanly.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#handling_missing_data",
    tags: ["Data Quality", "Data Preprocessing", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-325",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Handling Missing Data and Imputation Strategies: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Data Quality to handle missing numerical and categorical values in a tabular training dataset without dropping 40% of valuable customer transaction rows.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Mean/median imputation, categorical indicators, and model-based missingness handling is under consideration.",
    options: [
      { id: 'A', text: "Delete all rows that contain at least one missing value." },
      { id: 'B', text: "Replace all missing numerical values with the number 999999 without indicator flags." },
      { id: 'C', text: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features)." },
      { id: 'D', text: "Fill all missing values with random numbers generated from a uniform distribution." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply appropriate imputation strategies (median for skewed numbers, mode or dedicated 'MISSING' category for categorical features). Dropping rows with missing values causes significant data loss and introduces selection bias. Proper imputation techniques (such as median imputation for continuous features or creating an explicit 'Unknown' category) preserve training data while representing missingness cleanly.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#handling_missing_data",
    tags: ["Data Quality", "Data Preprocessing", "Resilience Failure"]
  }
];

export default GCP_PMLE_QUESTIONS_13;
