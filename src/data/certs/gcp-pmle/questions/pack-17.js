export const GCP_PMLE_QUESTIONS_17 = [
  {
    id: "gcp-pmle-401",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Explainable AI (Shapley Values & Integrated Gradients): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer needs to provide regulatory auditors with exact quantitative feature attribution scores showing which customer inputs drove a mortgage approval model's decision.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Claim that machine learning models are complete black boxes that cannot be explained." },
      { id: 'B', text: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks)." },
      { id: 'C', text: "Provide auditors with the raw floating-point neural network weight matrices." },
      { id: 'D', text: "Generate random percentage contributions for each input field." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks). Vertex Explainable AI provides detailed feature attributions that explain the relative contribution of each feature to a model's prediction. For tabular models, Sampled Shapley values compute marginal feature contributions, while Integrated Gradients evaluates gradients along a path for differentiable models.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    tags: ["Explainable AI","Explainable AI","Dr Failover"]
  },
  {
    id: "gcp-pmle-402",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Explainable AI (Shapley Values & Integrated Gradients): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer needs to provide regulatory auditors with exact quantitative feature attribution scores showing which customer inputs drove a mortgage approval model's decision.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks)." },
      { id: 'B', text: "Provide auditors with the raw floating-point neural network weight matrices." },
      { id: 'C', text: "Claim that machine learning models are complete black boxes that cannot be explained." },
      { id: 'D', text: "Generate random percentage contributions for each input field." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks). Vertex Explainable AI provides detailed feature attributions that explain the relative contribution of each feature to a model's prediction. For tabular models, Sampled Shapley values compute marginal feature contributions, while Integrated Gradients evaluates gradients along a path for differentiable models.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    tags: ["Explainable AI","Explainable AI","High Load Scale"]
  },
  {
    id: "gcp-pmle-403",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Explainable AI (Shapley Values & Integrated Gradients): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer needs to provide regulatory auditors with exact quantitative feature attribution scores showing which customer inputs drove a mortgage approval model's decision.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks)." },
      { id: 'B', text: "Provide auditors with the raw floating-point neural network weight matrices." },
      { id: 'C', text: "Claim that machine learning models are complete black boxes that cannot be explained." },
      { id: 'D', text: "Generate random percentage contributions for each input field." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks). Vertex Explainable AI provides detailed feature attributions that explain the relative contribution of each feature to a model's prediction. For tabular models, Sampled Shapley values compute marginal feature contributions, while Integrated Gradients evaluates gradients along a path for differentiable models.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    tags: ["Explainable AI","Explainable AI","Security Compliance"]
  },
  {
    id: "gcp-pmle-404",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Explainable AI (Shapley Values & Integrated Gradients): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer needs to provide regulatory auditors with exact quantitative feature attribution scores showing which customer inputs drove a mortgage approval model's decision.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks)." },
      { id: 'B', text: "Generate random percentage contributions for each input field." },
      { id: 'C', text: "Provide auditors with the raw floating-point neural network weight matrices." },
      { id: 'D', text: "Claim that machine learning models are complete black boxes that cannot be explained." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks). Vertex Explainable AI provides detailed feature attributions that explain the relative contribution of each feature to a model's prediction. For tabular models, Sampled Shapley values compute marginal feature contributions, while Integrated Gradients evaluates gradients along a path for differentiable models.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    tags: ["Explainable AI","Explainable AI","Hybrid Migration"]
  },
  {
    id: "gcp-pmle-405",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Explainable AI (Shapley Values & Integrated Gradients): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer needs to provide regulatory auditors with exact quantitative feature attribution scores showing which customer inputs drove a mortgage approval model's decision.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Provide auditors with the raw floating-point neural network weight matrices." },
      { id: 'B', text: "Claim that machine learning models are complete black boxes that cannot be explained." },
      { id: 'C', text: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks)." },
      { id: 'D', text: "Generate random percentage contributions for each input field." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Vertex Explainable AI to compute feature attributions (Sampled Shapley for tabular data or Integrated Gradients for neural networks). Vertex Explainable AI provides detailed feature attributions that explain the relative contribution of each feature to a model's prediction. For tabular models, Sampled Shapley values compute marginal feature contributions, while Integrated Gradients evaluates gradients along a path for differentiable models.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    tags: ["Explainable AI","Explainable AI","Resilience Failure"]
  },
  {
    id: "gcp-pmle-406",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Loss Function Selection for Specialized Tasks: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer needs to select the mathematical loss function for a multi-class image classification model where each image belongs to exactly one of 10 mutually exclusive categories.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Use Categorical Cross-Entropy loss with a softmax output activation function." },
      { id: 'B', text: "Use Binary Cross-Entropy loss with sigmoid activations on each output unit." },
      { id: 'C', text: "Use Hinge loss designed for binary support vector machines." },
      { id: 'D', text: "Use Mean Squared Error (MSE) loss with linear activation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Categorical Cross-Entropy loss with a softmax output activation function. For mutually exclusive multi-class classification tasks where class probabilities must sum to 1.0, the standard architecture couples a Softmax activation function on the final layer with Categorical Cross-Entropy loss. Binary cross-entropy is used for multi-label classification.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/multi-class-neural-networks/softmax",
    tags: ["Machine Learning Theory","Loss Functions","Dr Failover"]
  },
  {
    id: "gcp-pmle-407",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Loss Function Selection for Specialized Tasks: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer needs to select the mathematical loss function for a multi-class image classification model where each image belongs to exactly one of 10 mutually exclusive categories.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Use Categorical Cross-Entropy loss with a softmax output activation function." },
      { id: 'B', text: "Use Mean Squared Error (MSE) loss with linear activation." },
      { id: 'C', text: "Use Binary Cross-Entropy loss with sigmoid activations on each output unit." },
      { id: 'D', text: "Use Hinge loss designed for binary support vector machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Categorical Cross-Entropy loss with a softmax output activation function. For mutually exclusive multi-class classification tasks where class probabilities must sum to 1.0, the standard architecture couples a Softmax activation function on the final layer with Categorical Cross-Entropy loss. Binary cross-entropy is used for multi-label classification.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/multi-class-neural-networks/softmax",
    tags: ["Machine Learning Theory","Loss Functions","High Load Scale"]
  },
  {
    id: "gcp-pmle-408",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Loss Function Selection for Specialized Tasks: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer needs to select the mathematical loss function for a multi-class image classification model where each image belongs to exactly one of 10 mutually exclusive categories.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Use Binary Cross-Entropy loss with sigmoid activations on each output unit." },
      { id: 'B', text: "Use Mean Squared Error (MSE) loss with linear activation." },
      { id: 'C', text: "Use Hinge loss designed for binary support vector machines." },
      { id: 'D', text: "Use Categorical Cross-Entropy loss with a softmax output activation function." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use Categorical Cross-Entropy loss with a softmax output activation function. For mutually exclusive multi-class classification tasks where class probabilities must sum to 1.0, the standard architecture couples a Softmax activation function on the final layer with Categorical Cross-Entropy loss. Binary cross-entropy is used for multi-label classification.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/multi-class-neural-networks/softmax",
    tags: ["Machine Learning Theory","Loss Functions","Security Compliance"]
  },
  {
    id: "gcp-pmle-409",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Loss Function Selection for Specialized Tasks: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer needs to select the mathematical loss function for a multi-class image classification model where each image belongs to exactly one of 10 mutually exclusive categories.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Use Binary Cross-Entropy loss with sigmoid activations on each output unit." },
      { id: 'B', text: "Use Mean Squared Error (MSE) loss with linear activation." },
      { id: 'C', text: "Use Hinge loss designed for binary support vector machines." },
      { id: 'D', text: "Use Categorical Cross-Entropy loss with a softmax output activation function." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use Categorical Cross-Entropy loss with a softmax output activation function. For mutually exclusive multi-class classification tasks where class probabilities must sum to 1.0, the standard architecture couples a Softmax activation function on the final layer with Categorical Cross-Entropy loss. Binary cross-entropy is used for multi-label classification.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/multi-class-neural-networks/softmax",
    tags: ["Machine Learning Theory","Loss Functions","Hybrid Migration"]
  },
  {
    id: "gcp-pmle-410",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Loss Function Selection for Specialized Tasks: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer needs to select the mathematical loss function for a multi-class image classification model where each image belongs to exactly one of 10 mutually exclusive categories.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Use Categorical Cross-Entropy loss with a softmax output activation function." },
      { id: 'B', text: "Use Hinge loss designed for binary support vector machines." },
      { id: 'C', text: "Use Mean Squared Error (MSE) loss with linear activation." },
      { id: 'D', text: "Use Binary Cross-Entropy loss with sigmoid activations on each output unit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use Categorical Cross-Entropy loss with a softmax output activation function. For mutually exclusive multi-class classification tasks where class probabilities must sum to 1.0, the standard architecture couples a Softmax activation function on the final layer with Categorical Cross-Entropy loss. Binary cross-entropy is used for multi-label classification.",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/multi-class-neural-networks/softmax",
    tags: ["Machine Learning Theory","Loss Functions","Resilience Failure"]
  },
  {
    id: "gcp-pmle-411",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Quantization and Pruning: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer needs to reduce the memory footprint of a deep learning model by 75% and double inference throughput on mobile edge devices with minimal accuracy degradation.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Apply post-training INT8 quantization and weight pruning to the model graph." },
      { id: 'B', text: "Delete 75% of the layers from the neural network architecture arbitrarily." },
      { id: 'C', text: "Double the floating-point precision from FP32 to FP64." },
      { id: 'D', text: "Deploy the model on an unoptimized high-power cloud server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply post-training INT8 quantization and weight pruning to the model graph. Model optimization techniques compress neural networks. Post-training quantization converts 32-bit floating-point weights (FP32) into 8-bit integers (INT8), reducing model size by 4x and dramatically accelerating execution on hardware with integer tensor support while preserving model accuracy.",
    referenceUrl: "https://www.tensorflow.org/model_optimization/guide/quantization/post_training",
    tags: ["Model Optimization","Model Optimization","Dr Failover"]
  },
  {
    id: "gcp-pmle-412",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Quantization and Pruning: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer needs to reduce the memory footprint of a deep learning model by 75% and double inference throughput on mobile edge devices with minimal accuracy degradation.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Double the floating-point precision from FP32 to FP64." },
      { id: 'B', text: "Deploy the model on an unoptimized high-power cloud server." },
      { id: 'C', text: "Apply post-training INT8 quantization and weight pruning to the model graph." },
      { id: 'D', text: "Delete 75% of the layers from the neural network architecture arbitrarily." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply post-training INT8 quantization and weight pruning to the model graph. Model optimization techniques compress neural networks. Post-training quantization converts 32-bit floating-point weights (FP32) into 8-bit integers (INT8), reducing model size by 4x and dramatically accelerating execution on hardware with integer tensor support while preserving model accuracy.",
    referenceUrl: "https://www.tensorflow.org/model_optimization/guide/quantization/post_training",
    tags: ["Model Optimization","Model Optimization","High Load Scale"]
  },
  {
    id: "gcp-pmle-413",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Quantization and Pruning: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer needs to reduce the memory footprint of a deep learning model by 75% and double inference throughput on mobile edge devices with minimal accuracy degradation.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Apply post-training INT8 quantization and weight pruning to the model graph." },
      { id: 'B', text: "Delete 75% of the layers from the neural network architecture arbitrarily." },
      { id: 'C', text: "Double the floating-point precision from FP32 to FP64." },
      { id: 'D', text: "Deploy the model on an unoptimized high-power cloud server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply post-training INT8 quantization and weight pruning to the model graph. Model optimization techniques compress neural networks. Post-training quantization converts 32-bit floating-point weights (FP32) into 8-bit integers (INT8), reducing model size by 4x and dramatically accelerating execution on hardware with integer tensor support while preserving model accuracy.",
    referenceUrl: "https://www.tensorflow.org/model_optimization/guide/quantization/post_training",
    tags: ["Model Optimization","Model Optimization","Security Compliance"]
  },
  {
    id: "gcp-pmle-414",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Quantization and Pruning: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer needs to reduce the memory footprint of a deep learning model by 75% and double inference throughput on mobile edge devices with minimal accuracy degradation.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Deploy the model on an unoptimized high-power cloud server." },
      { id: 'B', text: "Delete 75% of the layers from the neural network architecture arbitrarily." },
      { id: 'C', text: "Apply post-training INT8 quantization and weight pruning to the model graph." },
      { id: 'D', text: "Double the floating-point precision from FP32 to FP64." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply post-training INT8 quantization and weight pruning to the model graph. Model optimization techniques compress neural networks. Post-training quantization converts 32-bit floating-point weights (FP32) into 8-bit integers (INT8), reducing model size by 4x and dramatically accelerating execution on hardware with integer tensor support while preserving model accuracy.",
    referenceUrl: "https://www.tensorflow.org/model_optimization/guide/quantization/post_training",
    tags: ["Model Optimization","Model Optimization","Hybrid Migration"]
  },
  {
    id: "gcp-pmle-415",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Model Quantization and Pruning: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer needs to reduce the memory footprint of a deep learning model by 75% and double inference throughput on mobile edge devices with minimal accuracy degradation.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Deploy the model on an unoptimized high-power cloud server." },
      { id: 'B', text: "Double the floating-point precision from FP32 to FP64." },
      { id: 'C', text: "Delete 75% of the layers from the neural network architecture arbitrarily." },
      { id: 'D', text: "Apply post-training INT8 quantization and weight pruning to the model graph." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apply post-training INT8 quantization and weight pruning to the model graph. Model optimization techniques compress neural networks. Post-training quantization converts 32-bit floating-point weights (FP32) into 8-bit integers (INT8), reducing model size by 4x and dramatically accelerating execution on hardware with integer tensor support while preserving model accuracy.",
    referenceUrl: "https://www.tensorflow.org/model_optimization/guide/quantization/post_training",
    tags: ["Model Optimization","Model Optimization","Resilience Failure"]
  },
  {
    id: "gcp-pmle-416",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Reinforcement Learning from Human Feedback (RLHF): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer needs to align a generative language model to follow human instructions safely, produce helpful responses, and avoid generating toxic or harmful content.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Continue standard unsupervised next-token prediction training on raw web text indefinitely." },
      { id: 'B', text: "Hardcode a list of banned words using static string replace operations." },
      { id: 'C', text: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO)." },
      { id: 'D', text: "Instruct human operators to manually approve every generated response in real time." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO). Reinforcement Learning from Human Feedback (RLHF) aligns LLMs with human intent. After supervised fine-tuning (SFT), human annotators rank model completions to train a Reward Model, which guides the policy model using reinforcement learning (PPO) to maximize helpfulness and safety.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/models/tune-models",
    tags: ["Generative AI Training","RLHF","Dr Failover"]
  },
  {
    id: "gcp-pmle-417",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Reinforcement Learning from Human Feedback (RLHF): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer needs to align a generative language model to follow human instructions safely, produce helpful responses, and avoid generating toxic or harmful content.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Continue standard unsupervised next-token prediction training on raw web text indefinitely." },
      { id: 'B', text: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO)." },
      { id: 'C', text: "Instruct human operators to manually approve every generated response in real time." },
      { id: 'D', text: "Hardcode a list of banned words using static string replace operations." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO). Reinforcement Learning from Human Feedback (RLHF) aligns LLMs with human intent. After supervised fine-tuning (SFT), human annotators rank model completions to train a Reward Model, which guides the policy model using reinforcement learning (PPO) to maximize helpfulness and safety.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/models/tune-models",
    tags: ["Generative AI Training","RLHF","High Load Scale"]
  },
  {
    id: "gcp-pmle-418",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Reinforcement Learning from Human Feedback (RLHF): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer needs to align a generative language model to follow human instructions safely, produce helpful responses, and avoid generating toxic or harmful content.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Instruct human operators to manually approve every generated response in real time." },
      { id: 'B', text: "Continue standard unsupervised next-token prediction training on raw web text indefinitely." },
      { id: 'C', text: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO)." },
      { id: 'D', text: "Hardcode a list of banned words using static string replace operations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO). Reinforcement Learning from Human Feedback (RLHF) aligns LLMs with human intent. After supervised fine-tuning (SFT), human annotators rank model completions to train a Reward Model, which guides the policy model using reinforcement learning (PPO) to maximize helpfulness and safety.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/models/tune-models",
    tags: ["Generative AI Training","RLHF","Security Compliance"]
  },
  {
    id: "gcp-pmle-419",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Reinforcement Learning from Human Feedback (RLHF): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer needs to align a generative language model to follow human instructions safely, produce helpful responses, and avoid generating toxic or harmful content.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Instruct human operators to manually approve every generated response in real time." },
      { id: 'B', text: "Hardcode a list of banned words using static string replace operations." },
      { id: 'C', text: "Continue standard unsupervised next-token prediction training on raw web text indefinitely." },
      { id: 'D', text: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO). Reinforcement Learning from Human Feedback (RLHF) aligns LLMs with human intent. After supervised fine-tuning (SFT), human annotators rank model completions to train a Reward Model, which guides the policy model using reinforcement learning (PPO) to maximize helpfulness and safety.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/models/tune-models",
    tags: ["Generative AI Training","RLHF","Hybrid Migration"]
  },
  {
    id: "gcp-pmle-420",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d3",
    domainName: "Developing and training ML models",
    title: "Reinforcement Learning from Human Feedback (RLHF): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer needs to align a generative language model to follow human instructions safely, produce helpful responses, and avoid generating toxic or harmful content.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO)." },
      { id: 'B', text: "Continue standard unsupervised next-token prediction training on raw web text indefinitely." },
      { id: 'C', text: "Hardcode a list of banned words using static string replace operations." },
      { id: 'D', text: "Instruct human operators to manually approve every generated response in real time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Reinforcement Learning from Human Feedback (RLHF) using a trained reward model and Proximal Policy Optimization (PPO). Reinforcement Learning from Human Feedback (RLHF) aligns LLMs with human intent. After supervised fine-tuning (SFT), human annotators rank model completions to train a Reward Model, which guides the policy model using reinforcement learning (PPO) to maximize helpfulness and safety.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/models/tune-models",
    tags: ["Generative AI Training","RLHF","Resilience Failure"]
  },
  {
    id: "gcp-pmle-421",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Pipelines (Kubeflow & TFX): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer needs to orchestrate an automated, reproducible end-to-end MLOps workflow spanning data extraction, validation, training, evaluation, and model deployment.",
    question: "Which concept or service configuration satisfies these operational resilience objectives?",
    options: [
      { id: 'A', text: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines." },
      { id: 'B', text: "Write a monolithic Python script executing all steps sequentially on an individual VM." },
      { id: 'C', text: "Run manual shell commands sequentially in Cloud Shell whenever a model update is needed." },
      { id: 'D', text: "Schedule separate cron jobs across 5 independent virtual machines without dependency coordination." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines. Vertex AI Pipelines is a serverless orchestration service that runs machine learning workflows built using Kubeflow Pipelines (KFP) or TensorFlow Extended (TFX). It manages container execution, passes artifacts deterministically between steps, tracks lineage in Vertex ML Metadata, and eliminates cluster maintenance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
    tags: ["MLOps Pipelines","Vertex Pipelines","Dr Failover"]
  },
  {
    id: "gcp-pmle-422",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Pipelines (Kubeflow & TFX): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer needs to orchestrate an automated, reproducible end-to-end MLOps workflow spanning data extraction, validation, training, evaluation, and model deployment.",
    question: "Which architectural approach should the team select to manage this demand efficiently?",
    options: [
      { id: 'A', text: "Write a monolithic Python script executing all steps sequentially on an individual VM." },
      { id: 'B', text: "Run manual shell commands sequentially in Cloud Shell whenever a model update is needed." },
      { id: 'C', text: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines." },
      { id: 'D', text: "Schedule separate cron jobs across 5 independent virtual machines without dependency coordination." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines. Vertex AI Pipelines is a serverless orchestration service that runs machine learning workflows built using Kubeflow Pipelines (KFP) or TensorFlow Extended (TFX). It manages container execution, passes artifacts deterministically between steps, tracks lineage in Vertex ML Metadata, and eliminates cluster maintenance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
    tags: ["MLOps Pipelines","Vertex Pipelines","High Load Scale"]
  },
  {
    id: "gcp-pmle-423",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Pipelines (Kubeflow & TFX): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer needs to orchestrate an automated, reproducible end-to-end MLOps workflow spanning data extraction, validation, training, evaluation, and model deployment.",
    question: "Which solution properly implements these mandatory security and governance controls?",
    options: [
      { id: 'A', text: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines." },
      { id: 'B', text: "Write a monolithic Python script executing all steps sequentially on an individual VM." },
      { id: 'C', text: "Run manual shell commands sequentially in Cloud Shell whenever a model update is needed." },
      { id: 'D', text: "Schedule separate cron jobs across 5 independent virtual machines without dependency coordination." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines. Vertex AI Pipelines is a serverless orchestration service that runs machine learning workflows built using Kubeflow Pipelines (KFP) or TensorFlow Extended (TFX). It manages container execution, passes artifacts deterministically between steps, tracks lineage in Vertex ML Metadata, and eliminates cluster maintenance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
    tags: ["MLOps Pipelines","Vertex Pipelines","Security Compliance"]
  },
  {
    id: "gcp-pmle-424",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Pipelines (Kubeflow & TFX): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer needs to orchestrate an automated, reproducible end-to-end MLOps workflow spanning data extraction, validation, training, evaluation, and model deployment.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals?",
    options: [
      { id: 'A', text: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines." },
      { id: 'B', text: "Write a monolithic Python script executing all steps sequentially on an individual VM." },
      { id: 'C', text: "Run manual shell commands sequentially in Cloud Shell whenever a model update is needed." },
      { id: 'D', text: "Schedule separate cron jobs across 5 independent virtual machines without dependency coordination." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines. Vertex AI Pipelines is a serverless orchestration service that runs machine learning workflows built using Kubeflow Pipelines (KFP) or TensorFlow Extended (TFX). It manages container execution, passes artifacts deterministically between steps, tracks lineage in Vertex ML Metadata, and eliminates cluster maintenance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
    tags: ["MLOps Pipelines","Vertex Pipelines","Hybrid Migration"]
  },
  {
    id: "gcp-pmle-425",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d4",
    domainName: "Deploying, scaling, and automating MLOps pipelines",
    title: "Vertex AI Pipelines (Kubeflow & TFX): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer needs to orchestrate an automated, reproducible end-to-end MLOps workflow spanning data extraction, validation, training, evaluation, and model deployment.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management?",
    options: [
      { id: 'A', text: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines." },
      { id: 'B', text: "Write a monolithic Python script executing all steps sequentially on an individual VM." },
      { id: 'C', text: "Run manual shell commands sequentially in Cloud Shell whenever a model update is needed." },
      { id: 'D', text: "Schedule separate cron jobs across 5 independent virtual machines without dependency coordination." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build and execute an MLOps pipeline using Kubeflow Pipelines (KFP) or TFX deployed on Vertex AI Pipelines. Vertex AI Pipelines is a serverless orchestration service that runs machine learning workflows built using Kubeflow Pipelines (KFP) or TensorFlow Extended (TFX). It manages container execution, passes artifacts deterministically between steps, tracks lineage in Vertex ML Metadata, and eliminates cluster maintenance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
    tags: ["MLOps Pipelines","Vertex Pipelines","Resilience Failure"]
  }
];

export default GCP_PMLE_QUESTIONS_17;
