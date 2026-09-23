export const AWS_AIF_FLASHCARDS_1 = [
  {
    id: 'aws-aif-fc-1',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is the primary difference between Supervised and Unsupervised Learning?',
    hint: 'Labels vs no labels.',
    back: '<strong>Supervised learning</strong> trains models on labeled input-output pairs (ground truth) to predict targets (e.g., classification or regression). <strong>Unsupervised learning</strong> discovers inherent structures, clusters, or anomalies in unlabeled data without target labels.',
    tags: ['ML Fundamentals', 'Supervised vs Unsupervised']
  },
  {
    id: 'aws-aif-fc-2',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd2',
    front: 'What is Temperature in Large Language Model inference parameters?',
    hint: 'Randomness control.',
    back: '<strong>Temperature</strong> governs randomness and creativity in generative model outputs. A low temperature (e.g. 0.0–0.2) yields deterministic, focused responses; a higher temperature (e.g. 0.7–1.0) increases token probability diversity, leading to creative variations.',
    tags: ['Generative AI', 'Hyperparameters', 'Temperature']
  },
  {
    id: 'aws-aif-fc-3',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How does Retrieval-Augmented Generation (RAG) differ from Model Fine-Tuning?',
    hint: 'External retrieval vs internal parameter weight adjustments.',
    back: '<strong>RAG</strong> retrieves factual, dynamic knowledge from external vector databases at runtime and passes relevant passages into the prompt context window without retraining. <strong>Fine-tuning</strong> updates internal neural network weights using domain-specific dataset pairs.',
    tags: ['Amazon Bedrock', 'RAG', 'Fine-Tuning']
  },
  {
    id: 'aws-aif-fc-4',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd4',
    front: 'What are the core pillars of Responsible AI defined by AWS?',
    hint: 'Fairness, explainability, privacy, safety.',
    back: 'AWS Responsible AI dimensions include <strong>Fairness</strong> (mitigating demographic bias), <strong>Explainability & Transparency</strong> (interpreting decision logic), <strong>Privacy & Security</strong> (protecting training/inference data), <strong>Robustness & Safety</strong> (resisting prompt injections and hallucination), and <strong>Governance</strong>.',
    tags: ['Responsible AI', 'Governance']
  },
  {
    id: 'aws-aif-fc-5',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd5',
    front: 'Does Amazon Bedrock use customer prompts to train base foundational models?',
    hint: 'No.',
    back: '<strong>No</strong>. Amazon Bedrock does not use customer prompts, completions, or custom fine-tuned model weights to train AWS base models or third-party foundation models, and does not share customer telemetry with third-party model providers.',
    tags: ['Bedrock Security', 'Compliance']
  }
];

export default AWS_AIF_FLASHCARDS_1;
