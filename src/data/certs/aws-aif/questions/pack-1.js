export const AWS_AIF_QUESTIONS_1 = [
  {
    id: "aws-aif-1",
    difficulty: "easy",
    certId: "aws-aif",
    domainId: "d1",
    domainName: "Fundamentals of AI and ML",
    title: "Distinguishing Supervised from Unsupervised Learning",
    scenario: "A retail company wants to group customers into clusters based on purchasing behavior without having predefined segment labels in historical transaction records.",
    question: "Which machine learning paradigm should the company use for this task?",
    options: [
      { id: 'A', text: "Unsupervised learning with k-means clustering" },
      { id: 'B', text: "Supervised learning with gradient boosted classification" },
      { id: 'C', text: "Reinforcement learning with policy gradients" },
      { id: 'D', text: "Binary classification with logistic regression" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unsupervised learning finds hidden patterns and intrinsic groupings in unlabeled datasets. K-means clustering groups unlabeled customer transactional behaviors without human-provided target labels. Supervised learning requires labeled ground truth, while reinforcement learning optimizes an agent via reward functions.",
    referenceUrl: "https://docs.aws.amazon.com/machine-learning/latest/dg/types-of-ml-models.html",
    tags: ["Machine Learning", "Clustering", "Unsupervised"]
  },
  {
    id: "aws-aif-2",
    difficulty: "easy",
    certId: "aws-aif",
    domainId: "d2",
    domainName: "Fundamentals of Generative AI",
    title: "Understanding Hallucinations in Large Language Models",
    scenario: "An insurance firm deploys a large language model to answer claims policy questions. Customer support agents notice that the model occasionally invents non-existent riders with high confidence.",
    question: "What generative AI phenomenon is occurring in this scenario?",
    options: [
      { id: 'A', text: "Model hallucination" },
      { id: 'B', text: "Gradient explosion" },
      { id: 'C', text: "Catastrophic forgetting" },
      { id: 'D', text: "Data poisoning" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Hallucination in generative AI occurs when a foundation model produces factually incorrect, fabricated, or nonsensical output presented with plausible confidence because it predicts likely token sequences without grounding in verified external truth. Gradient explosion is a neural network training instability, and catastrophic forgetting occurs when fine-tuning overwrites pre-trained capabilities.",
    referenceUrl: "https://aws.amazon.com/what-is/generative-ai/",
    tags: ["Generative AI", "Hallucination", "LLM"]
  },
  {
    id: "aws-aif-3",
    difficulty: "medium",
    certId: "aws-aif",
    domainId: "d3",
    domainName: "Applications of Foundation Models",
    title: "Grounding Bedrock Responses with Knowledge Bases",
    scenario: "A healthcare provider needs a generative AI chatbot in Amazon Bedrock to answer patient portal questions strictly using internal clinical documentation stored in Amazon S3, avoiding generic internet assertions.",
    question: "Which Amazon Bedrock capability provides managed retrieval-augmented generation (RAG) for this requirement?",
    options: [
      { id: 'A', text: "Knowledge Bases for Amazon Bedrock" },
      { id: 'B', text: "Amazon Bedrock Agents with action groups only" },
      { id: 'C', text: "Amazon SageMaker Feature Store" },
      { id: 'D', text: "Amazon Kendra standalone web crawler" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Knowledge Bases for Amazon Bedrock provides fully managed Retrieval-Augmented Generation (RAG). It ingests documents from Amazon S3, parses and chunks text, converts text to vector embeddings using an embedding model, writes embeddings to a vector index (such as OpenSearch Serverless), and retrieves relevant passages to ground foundation model prompts in factual organizational data.",
    referenceUrl: "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html",
    tags: ["Amazon Bedrock", "RAG", "Knowledge Bases"]
  },
  {
    id: "aws-aif-4",
    difficulty: "medium",
    certId: "aws-aif",
    domainId: "d4",
    domainName: "Guidelines for Responsible AI",
    title: "Filtering Inappropriate Prompts with Guardrails",
    scenario: "A fintech startup wants to prevent users from inputting profanity, competitive queries, or requests that elicit investment advice from an Amazon Bedrock foundation model.",
    question: "Which AWS capability should the team configure to implement these policy boundaries?",
    options: [
      { id: 'A', text: "Guardrails for Amazon Bedrock" },
      { id: 'B', text: "AWS WAF Web ACL rate limiting" },
      { id: 'C', text: "AWS Shield Advanced DDoS protections" },
      { id: 'D', text: "Amazon Comprehend Sentiment Analysis" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Guardrails for Amazon Bedrock implements customized safeguards and responsible AI policies across foundation models. It enforces configurable filters for denied topics, hate speech, profanity, prompt injection attacks, and sensitive PII masking on both user prompts and model responses. AWS WAF protects web endpoints against network and HTTP exploits rather than semantic model safety.",
    referenceUrl: "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html",
    tags: ["Responsible AI", "Guardrails", "Amazon Bedrock"]
  },
  {
    id: "aws-aif-5",
    difficulty: "hard",
    certId: "aws-aif",
    domainId: "d5",
    domainName: "Security, Compliance, and Governance for AI Solutions",
    title: "Data Privacy and Model Invocations in Amazon Bedrock",
    scenario: "A defense contractor must verify that customer inputs sent to Amazon Bedrock foundation models are never used by Amazon or third-party model providers to train future public foundation models.",
    question: "Which statement accurately describes Amazon Bedrock's security and data governance posture?",
    options: [
      { id: 'A', text: "Customer prompts and completions are encrypted in transit and at rest and are never used to train base models or shared with third parties" },
      { id: 'B', text: "Customer prompts are stored in a public cache for 30 days before automatic deletion" },
      { id: 'C', text: "Model providers can opt-in to review prompts for telemetry unless a support ticket is filed" },
      { id: 'D', text: "Customer data is replicated across all AWS regions to guarantee high availability for model weights" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Under Amazon Bedrock security principles, customer prompts, completions, and custom model adaptations remain strictly within the customer AWS account boundary. AWS and third-party model providers (like Anthropic, Meta, and Cohere) do not use customer inputs or model outputs to train foundational models, and data is encrypted using AWS KMS keys.",
    referenceUrl: "https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html",
    tags: ["Bedrock Security", "Data Privacy", "Governance"]
  }
];

export default AWS_AIF_QUESTIONS_1;
