export const GCP_PMLE_QUESTIONS_16 = [
  {
    id: "gcp-pmle-376",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Regularization Techniques (L1, L2, Dropout, Early Stopping): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Model Regularization to prevent a deep neural network from severely overfitting to training data when validation loss starts increasing after epoch 15.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? L1 (Lasso), L2 (Ridge), Dropout, and Early Stopping preventing overfitting is under consideration.",
    options: [
      { id: 'A', text: "Continue training for 200 additional epochs until training loss drops to zero." },
      { id: 'B', text: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss." },
      { id: 'C', text: "Remove all validation splits and train exclusively on 100% of available data." },
      { id: 'D', text: "Increase model capacity by adding 10 additional dense layers with 1,024 units each." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss. Overfitting occurs when a model memorizes training noise instead of generalizing. Techniques like Dropout (randomly deactivating units), L2 regularization (penalizing large weights), and Early Stopping (halting training when validation loss stops improving) enforce model generalization.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization",
    tags: ["Model Regularization", "Regularization", "Dr Failover"]
  },
  {
    id: "gcp-pmle-377",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Regularization Techniques (L1, L2, Dropout, Early Stopping): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Model Regularization to prevent a deep neural network from severely overfitting to training data when validation loss starts increasing after epoch 15.",
    question: "Which architectural approach should the team select to manage this demand efficiently? L1 (Lasso), L2 (Ridge), Dropout, and Early Stopping preventing overfitting is under consideration.",
    options: [
      { id: 'A', text: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss." },
      { id: 'B', text: "Continue training for 200 additional epochs until training loss drops to zero." },
      { id: 'C', text: "Remove all validation splits and train exclusively on 100% of available data." },
      { id: 'D', text: "Increase model capacity by adding 10 additional dense layers with 1,024 units each." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss. Overfitting occurs when a model memorizes training noise instead of generalizing. Techniques like Dropout (randomly deactivating units), L2 regularization (penalizing large weights), and Early Stopping (halting training when validation loss stops improving) enforce model generalization.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization",
    tags: ["Model Regularization", "Regularization", "High Load Scale"]
  },
  {
    id: "gcp-pmle-378",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Regularization Techniques (L1, L2, Dropout, Early Stopping): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Model Regularization to prevent a deep neural network from severely overfitting to training data when validation loss starts increasing after epoch 15.",
    question: "Which solution properly implements these mandatory security and governance controls? L1 (Lasso), L2 (Ridge), Dropout, and Early Stopping preventing overfitting is under consideration.",
    options: [
      { id: 'A', text: "Continue training for 200 additional epochs until training loss drops to zero." },
      { id: 'B', text: "Remove all validation splits and train exclusively on 100% of available data." },
      { id: 'C', text: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss." },
      { id: 'D', text: "Increase model capacity by adding 10 additional dense layers with 1,024 units each." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss. Overfitting occurs when a model memorizes training noise instead of generalizing. Techniques like Dropout (randomly deactivating units), L2 regularization (penalizing large weights), and Early Stopping (halting training when validation loss stops improving) enforce model generalization.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization",
    tags: ["Model Regularization", "Regularization", "Security Compliance"]
  },
  {
    id: "gcp-pmle-379",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Regularization Techniques (L1, L2, Dropout, Early Stopping): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Model Regularization to prevent a deep neural network from severely overfitting to training data when validation loss starts increasing after epoch 15.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? L1 (Lasso), L2 (Ridge), Dropout, and Early Stopping preventing overfitting is under consideration.",
    options: [
      { id: 'A', text: "Increase model capacity by adding 10 additional dense layers with 1,024 units each." },
      { id: 'B', text: "Remove all validation splits and train exclusively on 100% of available data." },
      { id: 'C', text: "Continue training for 200 additional epochs until training loss drops to zero." },
      { id: 'D', text: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss. Overfitting occurs when a model memorizes training noise instead of generalizing. Techniques like Dropout (randomly deactivating units), L2 regularization (penalizing large weights), and Early Stopping (halting training when validation loss stops improving) enforce model generalization.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization",
    tags: ["Model Regularization", "Regularization", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-380",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Regularization Techniques (L1, L2, Dropout, Early Stopping): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Model Regularization to prevent a deep neural network from severely overfitting to training data when validation loss starts increasing after epoch 15.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? L1 (Lasso), L2 (Ridge), Dropout, and Early Stopping preventing overfitting is under consideration.",
    options: [
      { id: 'A', text: "Remove all validation splits and train exclusively on 100% of available data." },
      { id: 'B', text: "Increase model capacity by adding 10 additional dense layers with 1,024 units each." },
      { id: 'C', text: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss." },
      { id: 'D', text: "Continue training for 200 additional epochs until training loss drops to zero." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Add Dropout layers, apply L2 weight decay, and configure an EarlyStopping callback monitoring validation loss. Overfitting occurs when a model memorizes training noise instead of generalizing. Techniques like Dropout (randomly deactivating units), L2 regularization (penalizing large weights), and Early Stopping (halting training when validation loss stops improving) enforce model generalization.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization",
    tags: ["Model Regularization", "Regularization", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-381",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Evaluation Metrics (ROC-AUC vs PR-AUC vs F1 vs RMSE): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Model Evaluation to evaluate the performance of an email spam classification model where the cost of falsely classifying an important email as spam (false positive) is extremely high.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Metric selection: PR-AUC for imbalanced classification vs ROC-AUC vs RMSE/MAE for regression is under consideration.",
    options: [
      { id: 'A', text: "Rely on overall classification accuracy without reviewing the confusion matrix." },
      { id: 'B', text: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds." },
      { id: 'C', text: "Optimize strictly for Recall, allowing any suspicious email to be flagged." },
      { id: 'D', text: "Evaluate Root Mean Squared Error (RMSE) on categorical labels." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds. When false positives carry severe business penalties (such as flagging an important client email as spam), the model must optimize for Precision (True Positives / (True Positives + False Positives)). The Precision-Recall curve illustrates trade-offs across decision thresholds.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall",
    tags: ["Model Evaluation", "Evaluation Metrics", "Dr Failover"]
  },
  {
    id: "gcp-pmle-382",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Evaluation Metrics (ROC-AUC vs PR-AUC vs F1 vs RMSE): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Model Evaluation to evaluate the performance of an email spam classification model where the cost of falsely classifying an important email as spam (false positive) is extremely high.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Metric selection: PR-AUC for imbalanced classification vs ROC-AUC vs RMSE/MAE for regression is under consideration.",
    options: [
      { id: 'A', text: "Evaluate Root Mean Squared Error (RMSE) on categorical labels." },
      { id: 'B', text: "Optimize strictly for Recall, allowing any suspicious email to be flagged." },
      { id: 'C', text: "Rely on overall classification accuracy without reviewing the confusion matrix." },
      { id: 'D', text: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds. When false positives carry severe business penalties (such as flagging an important client email as spam), the model must optimize for Precision (True Positives / (True Positives + False Positives)). The Precision-Recall curve illustrates trade-offs across decision thresholds.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall",
    tags: ["Model Evaluation", "Evaluation Metrics", "High Load Scale"]
  },
  {
    id: "gcp-pmle-383",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Evaluation Metrics (ROC-AUC vs PR-AUC vs F1 vs RMSE): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Model Evaluation to evaluate the performance of an email spam classification model where the cost of falsely classifying an important email as spam (false positive) is extremely high.",
    question: "Which solution properly implements these mandatory security and governance controls? Metric selection: PR-AUC for imbalanced classification vs ROC-AUC vs RMSE/MAE for regression is under consideration.",
    options: [
      { id: 'A', text: "Rely on overall classification accuracy without reviewing the confusion matrix." },
      { id: 'B', text: "Optimize strictly for Recall, allowing any suspicious email to be flagged." },
      { id: 'C', text: "Evaluate Root Mean Squared Error (RMSE) on categorical labels." },
      { id: 'D', text: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds. When false positives carry severe business penalties (such as flagging an important client email as spam), the model must optimize for Precision (True Positives / (True Positives + False Positives)). The Precision-Recall curve illustrates trade-offs across decision thresholds.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall",
    tags: ["Model Evaluation", "Evaluation Metrics", "Security Compliance"]
  },
  {
    id: "gcp-pmle-384",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Evaluation Metrics (ROC-AUC vs PR-AUC vs F1 vs RMSE): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Model Evaluation to evaluate the performance of an email spam classification model where the cost of falsely classifying an important email as spam (false positive) is extremely high.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Metric selection: PR-AUC for imbalanced classification vs ROC-AUC vs RMSE/MAE for regression is under consideration.",
    options: [
      { id: 'A', text: "Evaluate Root Mean Squared Error (RMSE) on categorical labels." },
      { id: 'B', text: "Rely on overall classification accuracy without reviewing the confusion matrix." },
      { id: 'C', text: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds." },
      { id: 'D', text: "Optimize strictly for Recall, allowing any suspicious email to be flagged." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds. When false positives carry severe business penalties (such as flagging an important client email as spam), the model must optimize for Precision (True Positives / (True Positives + False Positives)). The Precision-Recall curve illustrates trade-offs across decision thresholds.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall",
    tags: ["Model Evaluation", "Evaluation Metrics", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-385",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Evaluation Metrics (ROC-AUC vs PR-AUC vs F1 vs RMSE): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Model Evaluation to evaluate the performance of an email spam classification model where the cost of falsely classifying an important email as spam (false positive) is extremely high.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Metric selection: PR-AUC for imbalanced classification vs ROC-AUC vs RMSE/MAE for regression is under consideration.",
    options: [
      { id: 'A', text: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds." },
      { id: 'B', text: "Optimize strictly for Recall, allowing any suspicious email to be flagged." },
      { id: 'C', text: "Evaluate Root Mean Squared Error (RMSE) on categorical labels." },
      { id: 'D', text: "Rely on overall classification accuracy without reviewing the confusion matrix." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Prioritize Precision and examine the Precision-Recall curve (PR-AUC) at high precision thresholds. When false positives carry severe business penalties (such as flagging an important client email as spam), the model must optimize for Precision (True Positives / (True Positives + False Positives)). The Precision-Recall curve illustrates trade-offs across decision thresholds.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall",
    tags: ["Model Evaluation", "Evaluation Metrics", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-386",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Transfer Learning and Fine-Tuning Foundational Models: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Transfer Learning to train a high-accuracy medical dermatology image classifier using a dataset of only 1,000 labeled biopsy images.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Transfer learning: Freezing base feature extractors and fine-tuning head layers is under consideration.",
    options: [
      { id: 'A', text: "Use an unsupervised K-means clustering algorithm without feature representations." },
      { id: 'B', text: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads." },
      { id: 'C', text: "Generate 500,000 synthetic biopsy images using random noise generators." },
      { id: 'D', text: "Train an 80-layer convolutional neural network completely from scratch with random weight initialization." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads. Training deep computer vision models from scratch requires hundreds of thousands of images. Transfer learning leverages representations learned by deep models trained on massive general datasets (ImageNet), freezing lower-level feature extractors and fine-tuning only upper task-specific layers on small datasets.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/transfer-learning",
    tags: ["Transfer Learning", "Transfer Learning", "Dr Failover"]
  },
  {
    id: "gcp-pmle-387",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Transfer Learning and Fine-Tuning Foundational Models: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Transfer Learning to train a high-accuracy medical dermatology image classifier using a dataset of only 1,000 labeled biopsy images.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Transfer learning: Freezing base feature extractors and fine-tuning head layers is under consideration.",
    options: [
      { id: 'A', text: "Use an unsupervised K-means clustering algorithm without feature representations." },
      { id: 'B', text: "Generate 500,000 synthetic biopsy images using random noise generators." },
      { id: 'C', text: "Train an 80-layer convolutional neural network completely from scratch with random weight initialization." },
      { id: 'D', text: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads. Training deep computer vision models from scratch requires hundreds of thousands of images. Transfer learning leverages representations learned by deep models trained on massive general datasets (ImageNet), freezing lower-level feature extractors and fine-tuning only upper task-specific layers on small datasets.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/transfer-learning",
    tags: ["Transfer Learning", "Transfer Learning", "High Load Scale"]
  },
  {
    id: "gcp-pmle-388",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Transfer Learning and Fine-Tuning Foundational Models: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Transfer Learning to train a high-accuracy medical dermatology image classifier using a dataset of only 1,000 labeled biopsy images.",
    question: "Which solution properly implements these mandatory security and governance controls? Transfer learning: Freezing base feature extractors and fine-tuning head layers is under consideration.",
    options: [
      { id: 'A', text: "Generate 500,000 synthetic biopsy images using random noise generators." },
      { id: 'B', text: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads." },
      { id: 'C', text: "Train an 80-layer convolutional neural network completely from scratch with random weight initialization." },
      { id: 'D', text: "Use an unsupervised K-means clustering algorithm without feature representations." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads. Training deep computer vision models from scratch requires hundreds of thousands of images. Transfer learning leverages representations learned by deep models trained on massive general datasets (ImageNet), freezing lower-level feature extractors and fine-tuning only upper task-specific layers on small datasets.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/transfer-learning",
    tags: ["Transfer Learning", "Transfer Learning", "Security Compliance"]
  },
  {
    id: "gcp-pmle-389",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Transfer Learning and Fine-Tuning Foundational Models: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Transfer Learning to train a high-accuracy medical dermatology image classifier using a dataset of only 1,000 labeled biopsy images.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Transfer learning: Freezing base feature extractors and fine-tuning head layers is under consideration.",
    options: [
      { id: 'A', text: "Use an unsupervised K-means clustering algorithm without feature representations." },
      { id: 'B', text: "Train an 80-layer convolutional neural network completely from scratch with random weight initialization." },
      { id: 'C', text: "Generate 500,000 synthetic biopsy images using random noise generators." },
      { id: 'D', text: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads. Training deep computer vision models from scratch requires hundreds of thousands of images. Transfer learning leverages representations learned by deep models trained on massive general datasets (ImageNet), freezing lower-level feature extractors and fine-tuning only upper task-specific layers on small datasets.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/transfer-learning",
    tags: ["Transfer Learning", "Transfer Learning", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-390",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Transfer Learning and Fine-Tuning Foundational Models: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Transfer Learning to train a high-accuracy medical dermatology image classifier using a dataset of only 1,000 labeled biopsy images.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Transfer learning: Freezing base feature extractors and fine-tuning head layers is under consideration.",
    options: [
      { id: 'A', text: "Train an 80-layer convolutional neural network completely from scratch with random weight initialization." },
      { id: 'B', text: "Use an unsupervised K-means clustering algorithm without feature representations." },
      { id: 'C', text: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads." },
      { id: 'D', text: "Generate 500,000 synthetic biopsy images using random noise generators." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply Transfer Learning using a pre-trained Vision Transformer or ResNet backbone, freezing base weights and fine-tuning classification heads. Training deep computer vision models from scratch requires hundreds of thousands of images. Transfer learning leverages representations learned by deep models trained on massive general datasets (ImageNet), freezing lower-level feature extractors and fine-tuning only upper task-specific layers on small datasets.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/training/transfer-learning",
    tags: ["Transfer Learning", "Transfer Learning", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-391",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI TensorBoard Experiment Tracking: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Vertex AI MLOps to track, compare, and visualize training loss curves, validation metrics, and hardware profiling graphs across 50 deep learning model training runs in a centralized dashboard.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Managed Vertex AI TensorBoard tracking loss curves, metrics, and compute profiles is under consideration.",
    options: [
      { id: 'A', text: "Save training logs to local desktop text files without visualization." },
      { id: 'B', text: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console." },
      { id: 'C', text: "Print metrics to local terminal outputs and copy numbers manually into a shared text document." },
      { id: 'D', text: "Inspect virtual machine memory utilization graphs in Cloud Monitoring alone." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console. Vertex AI TensorBoard is an enterprise-ready, managed service based on open-source TensorBoard. It allows data scientists to track experiments, visualize loss curves and metrics across multiple training runs, inspect model computational graphs, and analyze GPU/TPU profiling traces seamlessly.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview",
    tags: ["Vertex AI MLOps", "TensorBoard", "Dr Failover"]
  },
  {
    id: "gcp-pmle-392",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI TensorBoard Experiment Tracking: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Vertex AI MLOps to track, compare, and visualize training loss curves, validation metrics, and hardware profiling graphs across 50 deep learning model training runs in a centralized dashboard.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Managed Vertex AI TensorBoard tracking loss curves, metrics, and compute profiles is under consideration.",
    options: [
      { id: 'A', text: "Print metrics to local terminal outputs and copy numbers manually into a shared text document." },
      { id: 'B', text: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console." },
      { id: 'C', text: "Inspect virtual machine memory utilization graphs in Cloud Monitoring alone." },
      { id: 'D', text: "Save training logs to local desktop text files without visualization." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console. Vertex AI TensorBoard is an enterprise-ready, managed service based on open-source TensorBoard. It allows data scientists to track experiments, visualize loss curves and metrics across multiple training runs, inspect model computational graphs, and analyze GPU/TPU profiling traces seamlessly.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview",
    tags: ["Vertex AI MLOps", "TensorBoard", "High Load Scale"]
  },
  {
    id: "gcp-pmle-393",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI TensorBoard Experiment Tracking: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Vertex AI MLOps to track, compare, and visualize training loss curves, validation metrics, and hardware profiling graphs across 50 deep learning model training runs in a centralized dashboard.",
    question: "Which solution properly implements these mandatory security and governance controls? Managed Vertex AI TensorBoard tracking loss curves, metrics, and compute profiles is under consideration.",
    options: [
      { id: 'A', text: "Save training logs to local desktop text files without visualization." },
      { id: 'B', text: "Inspect virtual machine memory utilization graphs in Cloud Monitoring alone." },
      { id: 'C', text: "Print metrics to local terminal outputs and copy numbers manually into a shared text document." },
      { id: 'D', text: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console. Vertex AI TensorBoard is an enterprise-ready, managed service based on open-source TensorBoard. It allows data scientists to track experiments, visualize loss curves and metrics across multiple training runs, inspect model computational graphs, and analyze GPU/TPU profiling traces seamlessly.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview",
    tags: ["Vertex AI MLOps", "TensorBoard", "Security Compliance"]
  },
  {
    id: "gcp-pmle-394",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI TensorBoard Experiment Tracking: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Vertex AI MLOps to track, compare, and visualize training loss curves, validation metrics, and hardware profiling graphs across 50 deep learning model training runs in a centralized dashboard.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Managed Vertex AI TensorBoard tracking loss curves, metrics, and compute profiles is under consideration.",
    options: [
      { id: 'A', text: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console." },
      { id: 'B', text: "Print metrics to local terminal outputs and copy numbers manually into a shared text document." },
      { id: 'C', text: "Inspect virtual machine memory utilization graphs in Cloud Monitoring alone." },
      { id: 'D', text: "Save training logs to local desktop text files without visualization." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console. Vertex AI TensorBoard is an enterprise-ready, managed service based on open-source TensorBoard. It allows data scientists to track experiments, visualize loss curves and metrics across multiple training runs, inspect model computational graphs, and analyze GPU/TPU profiling traces seamlessly.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview",
    tags: ["Vertex AI MLOps", "TensorBoard", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-395",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI TensorBoard Experiment Tracking: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Vertex AI MLOps to track, compare, and visualize training loss curves, validation metrics, and hardware profiling graphs across 50 deep learning model training runs in a centralized dashboard.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Managed Vertex AI TensorBoard tracking loss curves, metrics, and compute profiles is under consideration.",
    options: [
      { id: 'A', text: "Print metrics to local terminal outputs and copy numbers manually into a shared text document." },
      { id: 'B', text: "Save training logs to local desktop text files without visualization." },
      { id: 'C', text: "Inspect virtual machine memory utilization graphs in Cloud Monitoring alone." },
      { id: 'D', text: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate Vertex AI TensorBoard with the training scripts and compare experiment runs in the console. Vertex AI TensorBoard is an enterprise-ready, managed service based on open-source TensorBoard. It allows data scientists to track experiments, visualize loss curves and metrics across multiple training runs, inspect model computational graphs, and analyze GPU/TPU profiling traces seamlessly.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview",
    tags: ["Vertex AI MLOps", "TensorBoard", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-396",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI Model Garden & Foundation Model Tuning: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Model Garden to customize a pre-trained open-source foundational LLM (such as Llama or Gemma) on proprietary internal legal contracts without modifying the base model weights.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Model Garden foundation models and parameter-efficient fine-tuning (PEFT/LoRA) is under consideration.",
    options: [
      { id: 'A', text: "Hardcode legal contract answers in a local dictionary file." },
      { id: 'B', text: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden." },
      { id: 'C', text: "Manually rewrite the model source code in C++." },
      { id: 'D', text: "Retrain the entire 70B foundational model from scratch on raw text files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden. Vertex AI Model Garden provides enterprise access to foundational models (Google, open-source, and third-party). Parameter-Efficient Fine-Tuning (PEFT), such as LoRA, freezes the foundational weights and trains lightweight rank-decomposition adapter matrices, cutting compute costs and memory requirements by 90%.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/model-garden/explore-models",
    tags: ["Model Garden", "Model Garden", "Dr Failover"]
  },
  {
    id: "gcp-pmle-397",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI Model Garden & Foundation Model Tuning: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Model Garden to customize a pre-trained open-source foundational LLM (such as Llama or Gemma) on proprietary internal legal contracts without modifying the base model weights.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Model Garden foundation models and parameter-efficient fine-tuning (PEFT/LoRA) is under consideration.",
    options: [
      { id: 'A', text: "Retrain the entire 70B foundational model from scratch on raw text files." },
      { id: 'B', text: "Manually rewrite the model source code in C++." },
      { id: 'C', text: "Hardcode legal contract answers in a local dictionary file." },
      { id: 'D', text: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden. Vertex AI Model Garden provides enterprise access to foundational models (Google, open-source, and third-party). Parameter-Efficient Fine-Tuning (PEFT), such as LoRA, freezes the foundational weights and trains lightweight rank-decomposition adapter matrices, cutting compute costs and memory requirements by 90%.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/model-garden/explore-models",
    tags: ["Model Garden", "Model Garden", "High Load Scale"]
  },
  {
    id: "gcp-pmle-398",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI Model Garden & Foundation Model Tuning: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Model Garden to customize a pre-trained open-source foundational LLM (such as Llama or Gemma) on proprietary internal legal contracts without modifying the base model weights.",
    question: "Which solution properly implements these mandatory security and governance controls? Model Garden foundation models and parameter-efficient fine-tuning (PEFT/LoRA) is under consideration.",
    options: [
      { id: 'A', text: "Manually rewrite the model source code in C++." },
      { id: 'B', text: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden." },
      { id: 'C', text: "Retrain the entire 70B foundational model from scratch on raw text files." },
      { id: 'D', text: "Hardcode legal contract answers in a local dictionary file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden. Vertex AI Model Garden provides enterprise access to foundational models (Google, open-source, and third-party). Parameter-Efficient Fine-Tuning (PEFT), such as LoRA, freezes the foundational weights and trains lightweight rank-decomposition adapter matrices, cutting compute costs and memory requirements by 90%.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/model-garden/explore-models",
    tags: ["Model Garden", "Model Garden", "Security Compliance"]
  },
  {
    id: "gcp-pmle-399",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI Model Garden & Foundation Model Tuning: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Model Garden to customize a pre-trained open-source foundational LLM (such as Llama or Gemma) on proprietary internal legal contracts without modifying the base model weights.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Model Garden foundation models and parameter-efficient fine-tuning (PEFT/LoRA) is under consideration.",
    options: [
      { id: 'A', text: "Retrain the entire 70B foundational model from scratch on raw text files." },
      { id: 'B', text: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden." },
      { id: 'C', text: "Manually rewrite the model source code in C++." },
      { id: 'D', text: "Hardcode legal contract answers in a local dictionary file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden. Vertex AI Model Garden provides enterprise access to foundational models (Google, open-source, and third-party). Parameter-Efficient Fine-Tuning (PEFT), such as LoRA, freezes the foundational weights and trains lightweight rank-decomposition adapter matrices, cutting compute costs and memory requirements by 90%.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/model-garden/explore-models",
    tags: ["Model Garden", "Model Garden", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-400",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Vertex AI Model Garden & Foundation Model Tuning: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Model Garden to customize a pre-trained open-source foundational LLM (such as Llama or Gemma) on proprietary internal legal contracts without modifying the base model weights.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Model Garden foundation models and parameter-efficient fine-tuning (PEFT/LoRA) is under consideration.",
    options: [
      { id: 'A', text: "Retrain the entire 70B foundational model from scratch on raw text files." },
      { id: 'B', text: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden." },
      { id: 'C', text: "Hardcode legal contract answers in a local dictionary file." },
      { id: 'D', text: "Manually rewrite the model source code in C++." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) via Vertex AI Model Garden. Vertex AI Model Garden provides enterprise access to foundational models (Google, open-source, and third-party). Parameter-Efficient Fine-Tuning (PEFT), such as LoRA, freezes the foundational weights and trains lightweight rank-decomposition adapter matrices, cutting compute costs and memory requirements by 90%.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/model-garden/explore-models",
    tags: ["Model Garden", "Model Garden", "Resilience Failure"]
  }
];

export default GCP_PMLE_QUESTIONS_16;
