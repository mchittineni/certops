export const AWS_AIF_FLASHCARDS_14 = [
  {
    id: 'aws-aif-fc-326',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'ROUGE vs BLEU: which task was each designed for, and what does each emphasize?',
    hint: 'Recall for gisting, precision for translation.',
    back: '<strong>ROUGE</strong> (Recall-Oriented Understudy for Gisting Evaluation): <strong>summarization</strong>; recall-oriented, asking how much of the reference\'s n-grams appear in the output. <strong>BLEU</strong> (Bilingual Evaluation Understudy): <strong>machine translation</strong>; precision-oriented, asking how many of the output\'s n-grams appear in the reference, with a brevity penalty. Both need human-written reference texts.',
    tags: ['ROUGE', 'BLEU']
  },
  {
    id: 'aws-aif-fc-327',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does BERTScore measure, and why use it instead of ROUGE?',
    hint: 'Meaning, not matching words.',
    back: 'BERTScore compares <strong>contextual embeddings</strong> of the candidate and reference tokens by cosine similarity, so it measures <strong>semantic similarity</strong>. Paraphrases and synonyms ("physician" vs "doctor") get credit, whereas ROUGE and BLEU, which count exact n-gram matches, penalize valid rewording.',
    tags: ['BERTScore', 'Metrics']
  },
  {
    id: 'aws-aif-fc-328',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'ROUGE-N vs ROUGE-L: what is the difference?',
    hint: 'Counting fragments vs following the order.',
    back: '<strong>ROUGE-N</strong> counts overlapping n-grams of a fixed length (ROUGE-1 for single words, ROUGE-2 for word pairs); ROUGE-1 ignores word order. <strong>ROUGE-L</strong> uses the <strong>longest common subsequence</strong>, which rewards words appearing in the same relative order as the reference without requiring them to be adjacent.',
    tags: ['ROUGE', 'Metrics']
  },
  {
    id: 'aws-aif-fc-329',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What are the main limitations of n-gram metrics like ROUGE and BLEU?',
    hint: 'What can score well and still be wrong?',
    back: 'They need <strong>reference texts</strong>; they reward <strong>surface word overlap</strong>, so valid paraphrases score low; and they do not check <strong>factual accuracy</strong>, tone or helpfulness, so a fluent answer that changes one critical number can still score highly. Use them for trend tracking and regression checks, alongside semantic metrics, LLM-as-a-judge and human review.',
    tags: ['ROUGE', 'BLEU', 'Limitations']
  },
  {
    id: 'aws-aif-fc-330',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'When is human evaluation necessary for a foundation model?',
    hint: 'Some qualities have no formula.',
    back: 'When quality is <strong>subjective or nuanced</strong>: tone, brand voice, empathy, age-appropriateness, creativity, or expert-level correctness in fields such as medicine or law, and when there are no reference answers. It is slower and costlier than automated metrics, so apply it to samples, high-stakes decisions and final model choices.',
    tags: ['Human evaluation']
  },
  {
    id: 'aws-aif-fc-331',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What are benchmark datasets good for, and where do they fall short?',
    hint: 'Comparable, but general.',
    back: 'Standardized task sets (knowledge, reasoning, coding, safety) scored across many models give a <strong>fast, cheap, comparable</strong> first signal for shortlisting. They fall short because they may not reflect <strong>your domain and tasks</strong>, and public benchmarks can leak into training data (<strong>contamination</strong>), inflating scores. Final decisions need a custom evaluation set.',
    tags: ['Benchmark datasets', 'Model selection']
  },
  {
    id: 'aws-aif-fc-332',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does code interpretation let an Amazon Bedrock agent do?',
    hint: 'Arithmetic and charts without writing a Lambda function.',
    back: 'With <strong>code interpretation</strong> enabled (the built-in <code>AMAZON.CodeInterpreter</code> action group), the agent can <strong>write and run Python in a secure sandbox</strong> to calculate, analyse uploaded files such as CSVs, and produce charts. It fixes the classic LLM weakness at exact math and data analysis, because the numbers come from executed code rather than predicted tokens. No action group Lambda is needed for these tasks.',
    tags: ['Bedrock Agents', 'Code interpretation']
  },
  {
    id: 'aws-aif-fc-333',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is LLM-as-a-judge, and what are its trade-offs?',
    hint: 'A model grading a model.',
    back: 'Using a capable foundation model to <strong>score another model\'s outputs</strong> against a rubric (correctness, completeness, helpfulness, faithfulness, harmfulness). It approaches human-style judgment at far lower cost and time, which suits frequent iterations. Trade-offs: the judge can be biased or wrong, so calibrate it against a sample of human ratings and keep humans for the highest-stakes calls.',
    tags: ['LLM-as-a-judge', 'Amazon Bedrock Evaluations']
  },
  {
    id: 'aws-aif-fc-334',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does perplexity measure for a language model, and what does it not tell you?',
    hint: 'How surprised the model is by real text.',
    back: '<strong>Perplexity</strong> is the exponential of the average negative log-likelihood a model assigns to each token of a held-out text: <strong>lower means the model predicts that text better</strong>. It is useful for comparing checkpoints during pre-training or fine-tuning on the same tokenizer and test set. It says nothing direct about factual accuracy, helpfulness, safety or task success, and scores are not comparable between models that use different tokenizers.',
    tags: ['Perplexity', 'Model evaluation']
  },
  {
    id: 'aws-aif-fc-335',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How do you evaluate the retrieval and generation stages of a RAG application separately?',
    hint: 'Two job types in Amazon Bedrock.',
    back: 'Use a <strong>retrieval-only</strong> evaluation to score what the retriever returned (context relevance, context coverage), and a <strong>retrieve-and-generate</strong> evaluation to score the final answers (correctness, completeness, faithfulness to the retrieved context, citation quality). Low retrieval scores point to chunking, embeddings or data; good retrieval with poor answers points to the prompt or model.',
    tags: ['RAG evaluation', 'Knowledge Bases']
  },
  {
    id: 'aws-aif-fc-336',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Human evaluation in Amazon Bedrock: own work team or AWS managed team?',
    hint: 'Who is qualified to judge?',
    back: '<strong>Bring your own work team</strong> when reviewers need specific expertise or context (clinicians, lawyers, your support leads) or the data must stay with internal staff. Use an <strong>AWS managed work team</strong> when you want AWS to supply and manage reviewers for general-purpose judgments without building a workforce yourself.',
    tags: ['Human evaluation', 'Amazon Bedrock Evaluations']
  },
  {
    id: 'aws-aif-fc-337',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Which rating methods can reviewers use in an Amazon Bedrock human evaluation?',
    hint: 'Individual vs side by side.',
    back: 'Individual methods: <strong>thumbs up/down</strong> and an <strong>individual Likert scale</strong>. Comparison methods: a <strong>comparative Likert scale</strong>, <strong>choice buttons</strong> to pick the preferred response, and <strong>ordinal ranking</strong> of several models\' responses. Use comparison methods when the goal is choosing between models.',
    tags: ['Human evaluation', 'Amazon Bedrock Evaluations']
  },
  {
    id: 'aws-aif-fc-338',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What goes into a custom prompt dataset for an Amazon Bedrock evaluation job?',
    hint: 'One JSON object per line.',
    back: 'A <strong>JSON Lines</strong> file in Amazon S3 where each record holds a <strong>prompt</strong> and, when the metric needs one, a <strong>referenceResponse</strong> (the expected answer), plus an optional <strong>category</strong> so results can be broken down by group. RAG evaluations use a similar format with the expected ground-truth answer for each query.',
    tags: ['Custom prompt dataset', 'Amazon Bedrock Evaluations']
  },
  {
    id: 'aws-aif-fc-339',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Model metrics vs business metrics: give an example of each for a support assistant.',
    hint: 'Output quality vs organizational outcome.',
    back: '<strong>Model metrics</strong> describe output quality: accuracy against a golden set, BERTScore, toxicity rate, faithfulness. <strong>Business metrics</strong> describe outcomes: average handling time, tickets resolved without escalation, customer satisfaction, cost per resolved ticket. Good model metrics are necessary but not sufficient; the project is judged on business metrics.',
    tags: ['Business objectives', 'Metrics']
  },
  {
    id: 'aws-aif-fc-340',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How do you show that a generative AI tool improved productivity?',
    hint: 'Before and after, same work.',
    back: 'Measure <strong>time or effort per unit of work</strong> before and after (or with and without the tool) on comparable tasks: handling time per ticket, time to draft a proposal, cycle time from ticket to merged pull request, documents processed per hour. Check quality alongside, so speed is not bought with more rework.',
    tags: ['Productivity', 'Business objectives']
  },
  {
    id: 'aws-aif-fc-341',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Which signals indicate user engagement with a generative AI feature?',
    hint: 'What users do, not what the model is.',
    back: '<strong>Frequency</strong> (sessions per week), <strong>depth</strong> (session length, messages per session), <strong>retention</strong> (return rate after 7 or 30 days), <strong>adoption</strong> (share of eligible users who try it) and <strong>explicit feedback</strong> (thumbs up/down, ratings). Compare with users who do not have the feature to isolate its effect.',
    tags: ['User engagement', 'Business objectives']
  },
  {
    id: 'aws-aif-fc-342',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is task engineering in the context of evaluating a foundation model?',
    hint: 'Define the job before grading it.',
    back: 'Specifying <strong>exactly what the model must do</strong> and how success will be measured before testing: inputs, outputs and format, sub-tasks, edge cases, and <strong>measurable targets tied to the business goal</strong> (for example 98% field accuracy on 14 invoice fields, or 70% of tickets answered without escalation). Without it, stakeholders cannot agree whether a pilot worked.',
    tags: ['Task engineering', 'Success criteria']
  },
  {
    id: 'aws-aif-fc-343',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Offline metrics improved but the business KPI did not move. What now?',
    hint: 'Better text is not the same as better outcomes.',
    back: 'Treat offline scores as a <strong>quality gate</strong>, not proof of value. Run an <strong>online experiment</strong> (A/B test) that measures the KPI directly, check whether the improved dimension actually matters to users, and look for bottlenecks elsewhere in the funnel. Invest further only where a measurable business effect appears.',
    tags: ['A/B testing', 'Business objectives']
  },
  {
    id: 'aws-aif-fc-344',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'How should cost factor into deciding whether a model meets business objectives?',
    hint: 'Good enough, then cheapest.',
    back: 'Set a <strong>minimum quality bar</strong> (and latency limit) from the business need, then choose the <strong>lowest-cost option that clears it</strong>. Paying far more for a few extra quality points only makes sense if those points change user behavior or revenue. Track cost per task (per ticket, per document) rather than per token alone.',
    tags: ['Cost', 'Model selection']
  },
  {
    id: 'aws-aif-fc-345',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is a golden dataset, and how is it used?',
    hint: 'A trusted answer key you keep reusing.',
    back: 'A curated set of <strong>representative prompts with expert-verified reference answers</strong>. It is the basis for comparing candidate models and prompts, and it serves as a <strong>regression test</strong> run on every prompt change or model version so degradations are caught before users see them. Keep it versioned and add new failure cases as they are found.',
    tags: ['Golden dataset', 'Regression testing']
  },
  {
    id: 'aws-aif-fc-346',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What does the robustness metric capture?',
    hint: 'Same meaning, slightly different input.',
    back: 'How much a model\'s output <strong>changes or degrades</strong> when the input is perturbed in ways that should not change the answer: typos, extra whitespace, capitalization, minor rewording. A robust model gives consistent answers; a fragile one fails on the messy input real users type. Amazon Bedrock automatic evaluations and SageMaker Clarify both measure it.',
    tags: ['Robustness', 'Metrics']
  },
  {
    id: 'aws-aif-fc-347',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'SageMaker Clarify foundation model evaluation vs Amazon Bedrock Evaluations: when do you use each?',
    hint: 'Where does the model run?',
    back: '<strong>Amazon Bedrock Evaluations</strong>: evaluate Bedrock models, custom models and RAG systems with automatic, LLM-as-a-judge or human jobs from the Bedrock console or API. <strong>SageMaker Clarify FM evaluations</strong> (also in SageMaker Studio): evaluate models, including those hosted on SageMaker endpoints or JumpStart, with metrics such as accuracy, robustness, toxicity and stereotyping, using the open-source fmeval library.',
    tags: ['SageMaker Clarify', 'Amazon Bedrock Evaluations']
  },
  {
    id: 'aws-aif-fc-348',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Why collect thumbs-up/down feedback after launch when offline evaluation looked good?',
    hint: 'Real users ask different questions.',
    back: 'Production traffic contains <strong>questions, phrasing and topics</strong> the offline test set did not cover, and it changes over time (new products, new policies). Continuous user feedback surfaces failing areas cheaply; downvoted examples can be reviewed, added to the golden set, and used to fix prompts, retrieval or training data.',
    tags: ['User feedback', 'Monitoring']
  },
  {
    id: 'aws-aif-fc-349',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'Which metric fits each task: summarization, translation, classification, open-ended chat?',
    hint: 'Match the metric to what "correct" means.',
    back: '<strong>Summarization</strong>: ROUGE, BERTScore. <strong>Translation</strong>: BLEU (plus BERTScore). <strong>Classification</strong>: accuracy, precision, recall, F1. <strong>Open-ended chat</strong>: LLM-as-a-judge or human ratings for helpfulness, correctness and tone, plus toxicity. Where references exist, add a golden-set comparison; where they do not, rely on rubric-based judging.',
    tags: ['Metrics', 'Model evaluation']
  },
  {
    id: 'aws-aif-fc-350',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd3',
    front: 'What is benchmark contamination, and how do you guard against it?',
    hint: 'The exam questions were in the study notes.',
    back: 'When benchmark or evaluation examples <strong>appear in a model\'s training data</strong>, so scores reflect memorization rather than ability. Guard against it by evaluating on <strong>held-out, private data</strong> the model cannot have seen, never sampling evaluation prompts from fine-tuning data, and treating unusually high public scores with scepticism.',
    tags: ['Benchmark datasets', 'Evaluation strategy']
  }
];

export default AWS_AIF_FLASHCARDS_14;
