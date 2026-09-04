export const GCP_PMLE_QUESTIONS_12 = [
  {
    id: "gcp-pmle-276",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Edge ML and Model Optimization (TF Lite): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Edge Machine Learning to deploy a defect detection computer vision model to IoT factory cameras with intermittent internet connectivity and strict 10ms local inference requirements.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? TensorFlow Lite model quantization and edge deployment is under consideration.",
    options: [
      { id: 'A', text: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices." },
      { id: 'B', text: "Stream full 4K video frames over public satellite internet to a central Cloud Run endpoint." },
      { id: 'C', text: "Deploy an 8-GPU Compute Engine cluster inside the cloud to process remote video feeds." },
      { id: 'D', text: "Store defect video clips in Cloud Storage Archive tier without local inference." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices. TensorFlow Lite (TFLite) and post-training quantization reduce model file size and memory footprint while accelerating execution on mobile and embedded edge hardware, enabling real-time local inference without requiring internet connectivity.",
    referenceUrl: "https://www.tensorflow.org/lite/models/convert/convert_models",
    tags: ["Edge Machine Learning", "Edge ML", "Dr Failover"]
  },
  {
    id: "gcp-pmle-277",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Edge ML and Model Optimization (TF Lite): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Edge Machine Learning to deploy a defect detection computer vision model to IoT factory cameras with intermittent internet connectivity and strict 10ms local inference requirements.",
    question: "Which architectural approach should the team select to manage this demand efficiently? TensorFlow Lite model quantization and edge deployment is under consideration.",
    options: [
      { id: 'A', text: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices." },
      { id: 'B', text: "Stream full 4K video frames over public satellite internet to a central Cloud Run endpoint." },
      { id: 'C', text: "Deploy an 8-GPU Compute Engine cluster inside the cloud to process remote video feeds." },
      { id: 'D', text: "Store defect video clips in Cloud Storage Archive tier without local inference." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices. TensorFlow Lite (TFLite) and post-training quantization reduce model file size and memory footprint while accelerating execution on mobile and embedded edge hardware, enabling real-time local inference without requiring internet connectivity.",
    referenceUrl: "https://www.tensorflow.org/lite/models/convert/convert_models",
    tags: ["Edge Machine Learning", "Edge ML", "High Load Scale"]
  },
  {
    id: "gcp-pmle-278",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Edge ML and Model Optimization (TF Lite): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Edge Machine Learning to deploy a defect detection computer vision model to IoT factory cameras with intermittent internet connectivity and strict 10ms local inference requirements.",
    question: "Which solution properly implements these mandatory security and governance controls? TensorFlow Lite model quantization and edge deployment is under consideration.",
    options: [
      { id: 'A', text: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices." },
      { id: 'B', text: "Stream full 4K video frames over public satellite internet to a central Cloud Run endpoint." },
      { id: 'C', text: "Deploy an 8-GPU Compute Engine cluster inside the cloud to process remote video feeds." },
      { id: 'D', text: "Store defect video clips in Cloud Storage Archive tier without local inference." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices. TensorFlow Lite (TFLite) and post-training quantization reduce model file size and memory footprint while accelerating execution on mobile and embedded edge hardware, enabling real-time local inference without requiring internet connectivity.",
    referenceUrl: "https://www.tensorflow.org/lite/models/convert/convert_models",
    tags: ["Edge Machine Learning", "Edge ML", "Security Compliance"]
  },
  {
    id: "gcp-pmle-279",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Edge ML and Model Optimization (TF Lite): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Edge Machine Learning to deploy a defect detection computer vision model to IoT factory cameras with intermittent internet connectivity and strict 10ms local inference requirements.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? TensorFlow Lite model quantization and edge deployment is under consideration.",
    options: [
      { id: 'A', text: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices." },
      { id: 'B', text: "Stream full 4K video frames over public satellite internet to a central Cloud Run endpoint." },
      { id: 'C', text: "Deploy an 8-GPU Compute Engine cluster inside the cloud to process remote video feeds." },
      { id: 'D', text: "Store defect video clips in Cloud Storage Archive tier without local inference." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices. TensorFlow Lite (TFLite) and post-training quantization reduce model file size and memory footprint while accelerating execution on mobile and embedded edge hardware, enabling real-time local inference without requiring internet connectivity.",
    referenceUrl: "https://www.tensorflow.org/lite/models/convert/convert_models",
    tags: ["Edge Machine Learning", "Edge ML", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-280",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Edge ML and Model Optimization (TF Lite): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Edge Machine Learning to deploy a defect detection computer vision model to IoT factory cameras with intermittent internet connectivity and strict 10ms local inference requirements.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? TensorFlow Lite model quantization and edge deployment is under consideration.",
    options: [
      { id: 'A', text: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices." },
      { id: 'B', text: "Stream full 4K video frames over public satellite internet to a central Cloud Run endpoint." },
      { id: 'C', text: "Deploy an 8-GPU Compute Engine cluster inside the cloud to process remote video feeds." },
      { id: 'D', text: "Store defect video clips in Cloud Storage Archive tier without local inference." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Quantize the model using TensorFlow Lite (TFLite) and deploy directly to edge IoT devices. TensorFlow Lite (TFLite) and post-training quantization reduce model file size and memory footprint while accelerating execution on mobile and embedded edge hardware, enabling real-time local inference without requiring internet connectivity.",
    referenceUrl: "https://www.tensorflow.org/lite/models/convert/convert_models",
    tags: ["Edge Machine Learning", "Edge ML", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-281",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Responsible AI and Fairness (What-If Tool / Explainability): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Responsible AI to evaluate a loan approval model to ensure it does not exhibit disparate impact or algorithmic bias across demographic and gender subgroups.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Model fairness, bias detection, and What-If Tool counterfactual analysis is under consideration.",
    options: [
      { id: 'A', text: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices." },
      { id: 'B', text: "Remove demographic labels from the test dataset and assume the model cannot be biased." },
      { id: 'C', text: "Rely solely on overall global accuracy across the entire population." },
      { id: 'D', text: "Train the model exclusively on historical approvals without demographic auditing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices. Responsible AI practices require auditing models across demographic slices. The What-If Tool and Vertex Explainable AI enable evaluating fairness metrics (demographic parity, equalized odds) and testing counterfactual scenarios to uncover and mitigate proxy bias.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Responsible AI", "Dr Failover"]
  },
  {
    id: "gcp-pmle-282",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Responsible AI and Fairness (What-If Tool / Explainability): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Responsible AI to evaluate a loan approval model to ensure it does not exhibit disparate impact or algorithmic bias across demographic and gender subgroups.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Model fairness, bias detection, and What-If Tool counterfactual analysis is under consideration.",
    options: [
      { id: 'A', text: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices." },
      { id: 'B', text: "Remove demographic labels from the test dataset and assume the model cannot be biased." },
      { id: 'C', text: "Rely solely on overall global accuracy across the entire population." },
      { id: 'D', text: "Train the model exclusively on historical approvals without demographic auditing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices. Responsible AI practices require auditing models across demographic slices. The What-If Tool and Vertex Explainable AI enable evaluating fairness metrics (demographic parity, equalized odds) and testing counterfactual scenarios to uncover and mitigate proxy bias.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Responsible AI", "High Load Scale"]
  },
  {
    id: "gcp-pmle-283",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Responsible AI and Fairness (What-If Tool / Explainability): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Responsible AI to evaluate a loan approval model to ensure it does not exhibit disparate impact or algorithmic bias across demographic and gender subgroups.",
    question: "Which solution properly implements these mandatory security and governance controls? Model fairness, bias detection, and What-If Tool counterfactual analysis is under consideration.",
    options: [
      { id: 'A', text: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices." },
      { id: 'B', text: "Remove demographic labels from the test dataset and assume the model cannot be biased." },
      { id: 'C', text: "Rely solely on overall global accuracy across the entire population." },
      { id: 'D', text: "Train the model exclusively on historical approvals without demographic auditing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices. Responsible AI practices require auditing models across demographic slices. The What-If Tool and Vertex Explainable AI enable evaluating fairness metrics (demographic parity, equalized odds) and testing counterfactual scenarios to uncover and mitigate proxy bias.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Responsible AI", "Security Compliance"]
  },
  {
    id: "gcp-pmle-284",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Responsible AI and Fairness (What-If Tool / Explainability): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Responsible AI to evaluate a loan approval model to ensure it does not exhibit disparate impact or algorithmic bias across demographic and gender subgroups.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Model fairness, bias detection, and What-If Tool counterfactual analysis is under consideration.",
    options: [
      { id: 'A', text: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices." },
      { id: 'B', text: "Remove demographic labels from the test dataset and assume the model cannot be biased." },
      { id: 'C', text: "Rely solely on overall global accuracy across the entire population." },
      { id: 'D', text: "Train the model exclusively on historical approvals without demographic auditing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices. Responsible AI practices require auditing models across demographic slices. The What-If Tool and Vertex Explainable AI enable evaluating fairness metrics (demographic parity, equalized odds) and testing counterfactual scenarios to uncover and mitigate proxy bias.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Responsible AI", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-285",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Responsible AI and Fairness (What-If Tool / Explainability): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Responsible AI to evaluate a loan approval model to ensure it does not exhibit disparate impact or algorithmic bias across demographic and gender subgroups.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Model fairness, bias detection, and What-If Tool counterfactual analysis is under consideration.",
    options: [
      { id: 'A', text: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices." },
      { id: 'B', text: "Remove demographic labels from the test dataset and assume the model cannot be biased." },
      { id: 'C', text: "Rely solely on overall global accuracy across the entire population." },
      { id: 'D', text: "Train the model exclusively on historical approvals without demographic auditing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the What-If Tool and Vertex Explainable AI to evaluate fairness metrics across protected slices. Responsible AI practices require auditing models across demographic slices. The What-If Tool and Vertex Explainable AI enable evaluating fairness metrics (demographic parity, equalized odds) and testing counterfactual scenarios to uncover and mitigate proxy bias.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Responsible AI", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-286",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Privacy-Preserving ML (Federated Learning & Differential Privacy): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Privacy-Preserving ML to train a mobile predictive text keyboard model across millions of user smartphones without uploading personal keystrokes or private messages to central servers.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Differential privacy and federated learning preserving raw user data privacy is under consideration.",
    options: [
      { id: 'A', text: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated." },
      { id: 'B', text: "Upload all raw user keystrokes and SMS text messages to a central BigQuery table." },
      { id: 'C', text: "Store unencrypted user chat logs in a public Cloud Storage bucket." },
      { id: 'D', text: "Disable predictive text modeling to avoid privacy concerns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated. Federated Learning trains machine learning algorithms across decentralized edge devices holding local data samples without exchanging raw data. Devices download the global model, train locally on personal data, and send only aggregated, encrypted weight updates to the central coordinator.",
    referenceUrl: "https://cloud.google.com/architecture/federated-learning-google-cloud",
    tags: ["Privacy-Preserving ML", "Privacy ML", "Dr Failover"]
  },
  {
    id: "gcp-pmle-287",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Privacy-Preserving ML (Federated Learning & Differential Privacy): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Privacy-Preserving ML to train a mobile predictive text keyboard model across millions of user smartphones without uploading personal keystrokes or private messages to central servers.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Differential privacy and federated learning preserving raw user data privacy is under consideration.",
    options: [
      { id: 'A', text: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated." },
      { id: 'B', text: "Upload all raw user keystrokes and SMS text messages to a central BigQuery table." },
      { id: 'C', text: "Store unencrypted user chat logs in a public Cloud Storage bucket." },
      { id: 'D', text: "Disable predictive text modeling to avoid privacy concerns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated. Federated Learning trains machine learning algorithms across decentralized edge devices holding local data samples without exchanging raw data. Devices download the global model, train locally on personal data, and send only aggregated, encrypted weight updates to the central coordinator.",
    referenceUrl: "https://cloud.google.com/architecture/federated-learning-google-cloud",
    tags: ["Privacy-Preserving ML", "Privacy ML", "High Load Scale"]
  },
  {
    id: "gcp-pmle-288",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Privacy-Preserving ML (Federated Learning & Differential Privacy): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Privacy-Preserving ML to train a mobile predictive text keyboard model across millions of user smartphones without uploading personal keystrokes or private messages to central servers.",
    question: "Which solution properly implements these mandatory security and governance controls? Differential privacy and federated learning preserving raw user data privacy is under consideration.",
    options: [
      { id: 'A', text: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated." },
      { id: 'B', text: "Upload all raw user keystrokes and SMS text messages to a central BigQuery table." },
      { id: 'C', text: "Store unencrypted user chat logs in a public Cloud Storage bucket." },
      { id: 'D', text: "Disable predictive text modeling to avoid privacy concerns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated. Federated Learning trains machine learning algorithms across decentralized edge devices holding local data samples without exchanging raw data. Devices download the global model, train locally on personal data, and send only aggregated, encrypted weight updates to the central coordinator.",
    referenceUrl: "https://cloud.google.com/architecture/federated-learning-google-cloud",
    tags: ["Privacy-Preserving ML", "Privacy ML", "Security Compliance"]
  },
  {
    id: "gcp-pmle-289",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Privacy-Preserving ML (Federated Learning & Differential Privacy): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Privacy-Preserving ML to train a mobile predictive text keyboard model across millions of user smartphones without uploading personal keystrokes or private messages to central servers.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Differential privacy and federated learning preserving raw user data privacy is under consideration.",
    options: [
      { id: 'A', text: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated." },
      { id: 'B', text: "Upload all raw user keystrokes and SMS text messages to a central BigQuery table." },
      { id: 'C', text: "Store unencrypted user chat logs in a public Cloud Storage bucket." },
      { id: 'D', text: "Disable predictive text modeling to avoid privacy concerns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated. Federated Learning trains machine learning algorithms across decentralized edge devices holding local data samples without exchanging raw data. Devices download the global model, train locally on personal data, and send only aggregated, encrypted weight updates to the central coordinator.",
    referenceUrl: "https://cloud.google.com/architecture/federated-learning-google-cloud",
    tags: ["Privacy-Preserving ML", "Privacy ML", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-290",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Privacy-Preserving ML (Federated Learning & Differential Privacy): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Privacy-Preserving ML to train a mobile predictive text keyboard model across millions of user smartphones without uploading personal keystrokes or private messages to central servers.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Differential privacy and federated learning preserving raw user data privacy is under consideration.",
    options: [
      { id: 'A', text: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated." },
      { id: 'B', text: "Upload all raw user keystrokes and SMS text messages to a central BigQuery table." },
      { id: 'C', text: "Store unencrypted user chat logs in a public Cloud Storage bucket." },
      { id: 'D', text: "Disable predictive text modeling to avoid privacy concerns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Federated Learning where models train locally on client devices and only encrypted gradient updates are aggregated. Federated Learning trains machine learning algorithms across decentralized edge devices holding local data samples without exchanging raw data. Devices download the global model, train locally on personal data, and send only aggregated, encrypted weight updates to the central coordinator.",
    referenceUrl: "https://cloud.google.com/architecture/federated-learning-google-cloud",
    tags: ["Privacy-Preserving ML", "Privacy ML", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-291",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Multimodal GenAI Architecture (Gemini on Vertex AI): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Generative AI to build an automated customer support solution that analyzes customer voice calls, customer-submitted photos of damaged products, and text chat logs simultaneously.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Vertex AI Gemini multimodal foundational models processing text, audio, image, and video is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio." },
      { id: 'B', text: "Train separate custom convolutional neural networks and acoustic models from scratch." },
      { id: 'C', text: "Convert all audio and images into base64 strings and store in an unindexed Cloud SQL database." },
      { id: 'D', text: "Use a simple regex pattern matching script in Python." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio. Google Cloud Vertex AI provides access to the Gemini family of foundational models, which are natively multimodal. Gemini can ingest and reason across text, high-resolution images, audio recordings, and video streams natively within a single prompt context.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/multimodal/overview",
    tags: ["Generative AI", "Generative AI", "Dr Failover"]
  },
  {
    id: "gcp-pmle-292",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Multimodal GenAI Architecture (Gemini on Vertex AI): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Generative AI to build an automated customer support solution that analyzes customer voice calls, customer-submitted photos of damaged products, and text chat logs simultaneously.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Vertex AI Gemini multimodal foundational models processing text, audio, image, and video is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio." },
      { id: 'B', text: "Train separate custom convolutional neural networks and acoustic models from scratch." },
      { id: 'C', text: "Convert all audio and images into base64 strings and store in an unindexed Cloud SQL database." },
      { id: 'D', text: "Use a simple regex pattern matching script in Python." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio. Google Cloud Vertex AI provides access to the Gemini family of foundational models, which are natively multimodal. Gemini can ingest and reason across text, high-resolution images, audio recordings, and video streams natively within a single prompt context.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/multimodal/overview",
    tags: ["Generative AI", "Generative AI", "High Load Scale"]
  },
  {
    id: "gcp-pmle-293",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Multimodal GenAI Architecture (Gemini on Vertex AI): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Generative AI to build an automated customer support solution that analyzes customer voice calls, customer-submitted photos of damaged products, and text chat logs simultaneously.",
    question: "Which solution properly implements these mandatory security and governance controls? Vertex AI Gemini multimodal foundational models processing text, audio, image, and video is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio." },
      { id: 'B', text: "Train separate custom convolutional neural networks and acoustic models from scratch." },
      { id: 'C', text: "Convert all audio and images into base64 strings and store in an unindexed Cloud SQL database." },
      { id: 'D', text: "Use a simple regex pattern matching script in Python." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio. Google Cloud Vertex AI provides access to the Gemini family of foundational models, which are natively multimodal. Gemini can ingest and reason across text, high-resolution images, audio recordings, and video streams natively within a single prompt context.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/multimodal/overview",
    tags: ["Generative AI", "Generative AI", "Security Compliance"]
  },
  {
    id: "gcp-pmle-294",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Multimodal GenAI Architecture (Gemini on Vertex AI): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Generative AI to build an automated customer support solution that analyzes customer voice calls, customer-submitted photos of damaged products, and text chat logs simultaneously.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Vertex AI Gemini multimodal foundational models processing text, audio, image, and video is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio." },
      { id: 'B', text: "Train separate custom convolutional neural networks and acoustic models from scratch." },
      { id: 'C', text: "Convert all audio and images into base64 strings and store in an unindexed Cloud SQL database." },
      { id: 'D', text: "Use a simple regex pattern matching script in Python." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio. Google Cloud Vertex AI provides access to the Gemini family of foundational models, which are natively multimodal. Gemini can ingest and reason across text, high-resolution images, audio recordings, and video streams natively within a single prompt context.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/multimodal/overview",
    tags: ["Generative AI", "Generative AI", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-295",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Multimodal GenAI Architecture (Gemini on Vertex AI): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Generative AI to build an automated customer support solution that analyzes customer voice calls, customer-submitted photos of damaged products, and text chat logs simultaneously.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Vertex AI Gemini multimodal foundational models processing text, audio, image, and video is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio." },
      { id: 'B', text: "Train separate custom convolutional neural networks and acoustic models from scratch." },
      { id: 'C', text: "Convert all audio and images into base64 strings and store in an unindexed Cloud SQL database." },
      { id: 'D', text: "Use a simple regex pattern matching script in Python." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Gemini Multimodal foundation model via Vertex AI Model Garden and Generative AI Studio. Google Cloud Vertex AI provides access to the Gemini family of foundational models, which are natively multimodal. Gemini can ingest and reason across text, high-resolution images, audio recordings, and video streams natively within a single prompt context.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/generative-ai/multimodal/overview",
    tags: ["Generative AI", "Generative AI", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-296",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Vector Search & Embeddings Architecture (Vertex AI Vector Search): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Vector Search to build a real-time semantic search and retrieval-augmented generation (RAG) engine over 50 million enterprise PDF documents with sub-10ms query latency.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Vertex AI Vector Search (formerly Matching Engine) vector similarity search is under consideration.",
    options: [
      { id: 'A', text: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search." },
      { id: 'B', text: "Execute SQL LIKE '%keyword%' queries over unstructured text columns in Cloud SQL." },
      { id: 'C', text: "Scan all PDF documents sequentially using desktop text search software." },
      { id: 'D', text: "Store raw PDF binary data in a Redis in-memory cache without embedding vectors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search. Vertex AI Vector Search (formerly Matching Engine) is an ultra-high-scale, low-latency vector similarity search service. Based on Google's ScaNN algorithm, it searches billions of high-dimensional embedding vectors with millisecond retrieval times, forming the backbone for enterprise RAG systems.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/vector-search/overview",
    tags: ["Vector Search", "Vector Search", "Dr Failover"]
  },
  {
    id: "gcp-pmle-297",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Vector Search & Embeddings Architecture (Vertex AI Vector Search): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Vector Search to build a real-time semantic search and retrieval-augmented generation (RAG) engine over 50 million enterprise PDF documents with sub-10ms query latency.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Vertex AI Vector Search (formerly Matching Engine) vector similarity search is under consideration.",
    options: [
      { id: 'A', text: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search." },
      { id: 'B', text: "Execute SQL LIKE '%keyword%' queries over unstructured text columns in Cloud SQL." },
      { id: 'C', text: "Scan all PDF documents sequentially using desktop text search software." },
      { id: 'D', text: "Store raw PDF binary data in a Redis in-memory cache without embedding vectors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search. Vertex AI Vector Search (formerly Matching Engine) is an ultra-high-scale, low-latency vector similarity search service. Based on Google's ScaNN algorithm, it searches billions of high-dimensional embedding vectors with millisecond retrieval times, forming the backbone for enterprise RAG systems.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/vector-search/overview",
    tags: ["Vector Search", "Vector Search", "High Load Scale"]
  },
  {
    id: "gcp-pmle-298",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Vector Search & Embeddings Architecture (Vertex AI Vector Search): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Vector Search to build a real-time semantic search and retrieval-augmented generation (RAG) engine over 50 million enterprise PDF documents with sub-10ms query latency.",
    question: "Which solution properly implements these mandatory security and governance controls? Vertex AI Vector Search (formerly Matching Engine) vector similarity search is under consideration.",
    options: [
      { id: 'A', text: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search." },
      { id: 'B', text: "Execute SQL LIKE '%keyword%' queries over unstructured text columns in Cloud SQL." },
      { id: 'C', text: "Scan all PDF documents sequentially using desktop text search software." },
      { id: 'D', text: "Store raw PDF binary data in a Redis in-memory cache without embedding vectors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search. Vertex AI Vector Search (formerly Matching Engine) is an ultra-high-scale, low-latency vector similarity search service. Based on Google's ScaNN algorithm, it searches billions of high-dimensional embedding vectors with millisecond retrieval times, forming the backbone for enterprise RAG systems.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/vector-search/overview",
    tags: ["Vector Search", "Vector Search", "Security Compliance"]
  },
  {
    id: "gcp-pmle-299",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Vector Search & Embeddings Architecture (Vertex AI Vector Search): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Vector Search to build a real-time semantic search and retrieval-augmented generation (RAG) engine over 50 million enterprise PDF documents with sub-10ms query latency.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Vertex AI Vector Search (formerly Matching Engine) vector similarity search is under consideration.",
    options: [
      { id: 'A', text: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search." },
      { id: 'B', text: "Execute SQL LIKE '%keyword%' queries over unstructured text columns in Cloud SQL." },
      { id: 'C', text: "Scan all PDF documents sequentially using desktop text search software." },
      { id: 'D', text: "Store raw PDF binary data in a Redis in-memory cache without embedding vectors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search. Vertex AI Vector Search (formerly Matching Engine) is an ultra-high-scale, low-latency vector similarity search service. Based on Google's ScaNN algorithm, it searches billions of high-dimensional embedding vectors with millisecond retrieval times, forming the backbone for enterprise RAG systems.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/vector-search/overview",
    tags: ["Vector Search", "Vector Search", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-300",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d1",
    domainName: "Framing ML problems and architecting solutions",
    title: "Vector Search & Embeddings Architecture (Vertex AI Vector Search): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Vector Search to build a real-time semantic search and retrieval-augmented generation (RAG) engine over 50 million enterprise PDF documents with sub-10ms query latency.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Vertex AI Vector Search (formerly Matching Engine) vector similarity search is under consideration.",
    options: [
      { id: 'A', text: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search." },
      { id: 'B', text: "Execute SQL LIKE '%keyword%' queries over unstructured text columns in Cloud SQL." },
      { id: 'C', text: "Scan all PDF documents sequentially using desktop text search software." },
      { id: 'D', text: "Store raw PDF binary data in a Redis in-memory cache without embedding vectors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate text embeddings using Vertex AI Embeddings API and index them in Vertex AI Vector Search. Vertex AI Vector Search (formerly Matching Engine) is an ultra-high-scale, low-latency vector similarity search service. Based on Google's ScaNN algorithm, it searches billions of high-dimensional embedding vectors with millisecond retrieval times, forming the backbone for enterprise RAG systems.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/vector-search/overview",
    tags: ["Vector Search", "Vector Search", "Resilience Failure"]
  }
];

export default GCP_PMLE_QUESTIONS_12;
