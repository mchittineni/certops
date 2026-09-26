export const AWS_AIF_FLASHCARDS_3 = [
  {
    id: 'aws-aif-fc-51',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Amazon Transcribe vs Amazon Polly: which direction does each one convert?',
    hint: 'One listens, one speaks.',
    back: '<strong>Amazon Transcribe</strong> is automatic speech recognition: <strong>audio in, text out</strong> (call transcripts, captions, meeting notes). <strong>Amazon Polly</strong> is text-to-speech: <strong>text in, lifelike audio out</strong> (read-aloud articles, IVR prompts, accessibility). A voice assistant often uses both, with language understanding in between.',
    tags: ['Amazon Transcribe', 'Amazon Polly']
  },
  {
    id: 'aws-aif-fc-52',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What can Amazon Comprehend extract from text without any training?',
    hint: 'Feelings, names, topics, language.',
    back: 'Pre-trained APIs for <strong>sentiment</strong> (positive, negative, neutral, mixed), <strong>entities</strong> (people, organizations, places, dates, amounts), <strong>key phrases</strong>, <strong>dominant language</strong>, <strong>PII detection</strong>, syntax and toxicity detection. It also supports <strong>custom classification</strong> and <strong>custom entity recognition</strong> when you supply labeled examples. Input is text, so audio must be transcribed first.',
    tags: ['Amazon Comprehend', 'NLP']
  },
  {
    id: 'aws-aif-fc-53',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What does Amazon Translate do, and how do you keep brand terms consistent?',
    hint: 'A glossary for the machine.',
    back: 'Amazon Translate is a <strong>neural machine translation</strong> service that converts text between languages in real time or in batch. To keep product names, brand terms or jargon translated consistently (or left untranslated), supply <strong>custom terminology</strong>. It works on text; pair it with Transcribe for speech input or Polly for speech output.',
    tags: ['Amazon Translate', 'Machine translation']
  },
  {
    id: 'aws-aif-fc-54',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Amazon Lex: what are intents, utterances and slots?',
    hint: 'What the user wants, how they say it, what you still need.',
    back: 'An <strong>intent</strong> is a goal the user wants to achieve, such as BookAppointment. <strong>Utterances</strong> are sample phrases that express the intent ("I need to see a dentist Tuesday"). <strong>Slots</strong> are the pieces of information the bot must collect to fulfil it, such as date, time and clinic; Lex prompts for any that are missing, then can call AWS Lambda to complete the request. Lex handles both voice and text.',
    tags: ['Amazon Lex', 'Chatbots']
  },
  {
    id: 'aws-aif-fc-55',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What can Amazon Rekognition do with images and video out of the box?',
    hint: 'Objects, faces, text, safety.',
    back: 'Pre-trained computer vision for <strong>label detection</strong> (objects, scenes, activities), <strong>face detection and comparison</strong>, <strong>celebrity recognition</strong>, <strong>text in images</strong>, <strong>content moderation</strong> for unsafe imagery, and <strong>PPE detection</strong>, on both still images and stored or streaming video. No ML expertise or training data is needed for these features.',
    tags: ['Amazon Rekognition', 'Computer vision']
  },
  {
    id: 'aws-aif-fc-56',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Amazon Textract vs Amazon Comprehend: which one reads documents and which one understands text?',
    hint: 'Characters first, meaning second.',
    back: '<strong>Textract</strong> extracts printed and handwritten <strong>text, forms (key-value pairs) and tables</strong> from scanned documents, PDFs and images, going beyond plain OCR by keeping structure. <strong>Comprehend</strong> analyses text that already exists to find <strong>meaning</strong>: sentiment, entities, key phrases, PII. Scanned invoices or contracts typically go Textract first, then Comprehend.',
    tags: ['Amazon Textract', 'Amazon Comprehend']
  },
  {
    id: 'aws-aif-fc-57',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What does Amazon Personalize need as input, and what does it return?',
    hint: 'Who did what with which item.',
    back: 'Personalize needs an <strong>interactions dataset</strong> (user ID, item ID, timestamp, event type such as click or purchase), optionally enriched with <strong>users</strong> and <strong>items</strong> metadata. It trains recommendation models for you and returns <strong>personalized item recommendations</strong>, related items and personalized re-ranking through an API, with no ML expertise required. It is the same kind of technology Amazon.com uses for recommendations.',
    tags: ['Amazon Personalize', 'Recommendation systems']
  },
  {
    id: 'aws-aif-fc-58',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'AWS AI services vs Amazon SageMaker: when do you choose each?',
    hint: 'Call an API, or build a model.',
    back: '<strong>AI services</strong> (Comprehend, Transcribe, Translate, Polly, Lex, Rekognition, Textract, Personalize) expose <strong>pre-trained models through APIs</strong>: fastest, no ML skills, best when the task is common. <strong>SageMaker</strong> is a managed platform to <strong>build, train, tune, deploy and monitor your own models</strong>: choose it when data or the problem is unique and you have ML expertise. Generative foundation models sit in a third layer, Amazon Bedrock.',
    tags: ['AI services vs SageMaker', 'AWS AI services']
  },
  {
    id: 'aws-aif-fc-59',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Which Amazon Transcribe features handle jargon, multiple speakers, sensitive data and contact-centre calls?',
    hint: 'Four features, four problems.',
    back: '<strong>Custom vocabularies</strong> (and custom language models) improve recognition of product names and domain terms. <strong>Speaker diarization</strong> labels who spoke each segment; <strong>channel identification</strong> separates stereo channels. <strong>PII redaction</strong> removes card numbers and other personal data from transcripts. <strong>Call Analytics</strong> adds call-specific insights such as sentiment, talk time and issues. <strong>Transcribe Medical</strong> targets clinical speech.',
    tags: ['Amazon Transcribe', 'Speech recognition']
  },
  {
    id: 'aws-aif-fc-60',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is Amazon Kendra, and how does it differ from keyword search?',
    hint: 'Questions, not just keywords.',
    back: 'Amazon Kendra is an <strong>intelligent enterprise search</strong> service that uses NLP to answer natural-language questions across documents in sources such as S3, SharePoint and Confluence, returning specific passages or answers rather than only matching keywords. It respects document access controls and connects through built-in connectors. It is also commonly used as a retriever for generative AI applications.',
    tags: ['Amazon Kendra', 'Enterprise search']
  },
  {
    id: 'aws-aif-fc-61',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'List the stages of a typical ML pipeline in order.',
    hint: 'From raw data to a model you keep watching.',
    back: '<strong>Data collection</strong>, <strong>exploratory data analysis (EDA)</strong>, <strong>data preprocessing</strong>, <strong>feature engineering</strong>, <strong>model training</strong>, <strong>hyperparameter tuning</strong>, <strong>evaluation</strong>, <strong>deployment</strong> and <strong>monitoring</strong>. It is a loop, not a line: monitoring that detects drift or poor performance sends the team back to collect new data and retrain.',
    tags: ['ML pipeline', 'ML lifecycle']
  },
  {
    id: 'aws-aif-fc-62',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What happens during exploratory data analysis (EDA)?',
    hint: 'Look before you model.',
    back: 'EDA builds understanding of a dataset before modeling: <strong>summary statistics</strong> and <strong>distributions</strong> of each column, <strong>missing values</strong>, <strong>outliers</strong>, <strong>class balance</strong> of the target, and <strong>correlations</strong> between features and with the target, usually through charts. Its findings decide what preprocessing and feature engineering are needed. Tools such as SageMaker Data Wrangler and notebooks support it.',
    tags: ['EDA', 'ML pipeline']
  },
  {
    id: 'aws-aif-fc-63',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Name the common data preprocessing steps and what each fixes.',
    hint: 'Gaps, repeats, words and scales.',
    back: '<strong>Imputation</strong> fills missing values (mean, median, or a model). <strong>Deduplication</strong> removes repeated records. <strong>Encoding</strong> turns categories into numbers, for example one-hot encoding. <strong>Scaling or normalisation</strong> puts numeric columns on comparable ranges so large values do not dominate. <strong>Outlier handling</strong> and <strong>error correction</strong> clean bad records. Finally the data is <strong>split</strong> into training, validation and test sets.',
    tags: ['Data preprocessing', 'Data quality']
  },
  {
    id: 'aws-aif-fc-64',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Feature engineering vs feature selection: what is the difference?',
    hint: 'Create new columns, or keep only the useful ones.',
    back: '<strong>Feature engineering</strong> creates or transforms inputs using domain knowledge, such as days since last purchase, ratios, or date parts from timestamps. <strong>Feature selection</strong> keeps only the features that actually help, removing redundant or irrelevant columns to reduce noise, overfitting and training cost. Both aim to give the model better signal. SageMaker Feature Store stores engineered features for reuse in training and inference.',
    tags: ['Feature engineering', 'Features']
  },
  {
    id: 'aws-aif-fc-65',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Which search strategies can SageMaker automatic model tuning use, and how do they differ?',
    hint: 'Exhaustive, random, learning from past trials, or cutting losers early.',
    back: '<strong>Grid search</strong> tries every combination of listed values; thorough but expensive. <strong>Random search</strong> samples combinations at random and runs jobs in parallel easily. <strong>Bayesian optimisation</strong> uses results of earlier jobs to choose promising next settings, usually finding good values in fewer jobs. <strong>Hyperband</strong> starts many jobs and stops weak ones early to save compute. All optimise an objective metric you choose.',
    tags: ['Hyperparameter tuning', 'SageMaker']
  },
  {
    id: 'aws-aif-fc-66',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What makes a model evaluation trustworthy?',
    hint: 'Unseen data, the right metric, a bar agreed in advance.',
    back: 'Evaluate on a <strong>held-out test set</strong> the model never saw during training or tuning, and use it once. Pick <strong>metrics that match the business cost of errors</strong> (for example recall when missing fraud is expensive) rather than accuracy by default. Compare with a <strong>baseline</strong> and against a <strong>threshold agreed before</strong> seeing results, and check performance across important subgroups, not just overall.',
    tags: ['Model evaluation', 'ML pipeline']
  },
  {
    id: 'aws-aif-fc-67',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Why does an ML pipeline not end at deployment?',
    hint: 'The world keeps changing after launch.',
    back: 'Once deployed, a model meets real data that can <strong>drift</strong> away from its training data as customer behavior, products or conditions change, so accuracy quietly degrades. <strong>Monitoring</strong> tracks data quality, prediction distributions and, when ground truth arrives, actual accuracy. When metrics cross a threshold, the team <strong>retrains</strong> on fresh data, so the pipeline loops back to the start.',
    tags: ['Monitoring', 'ML lifecycle']
  },
  {
    id: 'aws-aif-fc-68',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Open-source pre-trained model vs training a custom model: what are the trade-offs?',
    hint: 'Head start versus full control.',
    back: '<strong>Pre-trained open-source models</strong> give a fast, cheap start: they need little labeled data and can be fine-tuned, but you must check the <strong>license</strong>, possible inherited bias and fit to your domain. <strong>Custom models</strong> trained on your own data give full control and can capture unique patterns, but need large labeled datasets, expertise, compute and time.',
    tags: ['Model sources', 'Pre-trained models']
  },
  {
    id: 'aws-aif-fc-69',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is transfer learning?',
    hint: 'Reuse what a model already learned elsewhere.',
    back: 'Transfer learning takes a model <strong>pre-trained on a large general dataset</strong> and adapts it to a new, related task by continuing training (fine-tuning) on a smaller task-specific dataset, often replacing only the final layers. Because the model already knows general features, such as edges and shapes in images or grammar in text, it reaches good accuracy with far less labeled data and compute than training from scratch.',
    tags: ['Transfer learning', 'Fine-tuning']
  },
  {
    id: 'aws-aif-fc-70',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'When is training a model from scratch justified instead of starting from a pre-trained one?',
    hint: 'Novel data, lots of it, and the skills to use it.',
    back: 'When the data is <strong>unlike anything public models were trained on</strong> (a proprietary sensor format, an unusual modality), so pre-trained features transfer poorly; when you have a <strong>large labeled dataset</strong> and ML expertise; when <strong>licensing or IP</strong> rules out available models; or when the model is a <strong>core competitive asset</strong> you need to fully own. Otherwise, starting from a pre-trained model is usually cheaper and faster.',
    tags: ['Custom models', 'Model sources']
  },
  {
    id: 'aws-aif-fc-71',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Where can you get pre-trained models on AWS?',
    hint: 'A hub, a managed API, and a marketplace.',
    back: '<strong>SageMaker JumpStart</strong>: hundreds of pre-trained open-source and proprietary models (vision, text, foundation models) you can deploy or fine-tune in a few clicks. <strong>Amazon Bedrock</strong>: foundation models from Amazon and third parties through a serverless API. <strong>AWS Marketplace</strong>: third-party model packages. You can also bring open-source models such as those on Hugging Face into SageMaker directly.',
    tags: ['Pre-trained models', 'SageMaker JumpStart']
  },
  {
    id: 'aws-aif-fc-72',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'How is ML typically used for fraud detection?',
    hint: 'Known fraud and unknown fraud need different approaches.',
    back: 'A <strong>supervised classifier</strong> scores each transaction or account using patterns learned from past confirmed fraud, usually in real time so risky activity can be blocked or challenged. <strong>Unsupervised anomaly detection</strong> flags behavior that looks unlike normal, catching new tactics with no labeled history. Scores usually feed rules and human investigators rather than acting alone.',
    tags: ['Fraud detection', 'Use cases']
  },
  {
    id: 'aws-aif-fc-73',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Collaborative filtering vs content-based recommendations: how do they work?',
    hint: 'People like you, or items like this.',
    back: '<strong>Collaborative filtering</strong> recommends what <strong>similar users</strong> liked, learned purely from interaction patterns; it finds surprising matches but struggles with brand-new users and items (the cold-start problem). <strong>Content-based</strong> recommends items <strong>similar in attributes</strong> to what the user already liked, such as genre or brand, which helps with new items. Production systems, including Amazon Personalize recipes, often combine both.',
    tags: ['Recommendation systems', 'Use cases']
  },
  {
    id: 'aws-aif-fc-74',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Which chains of AWS AI services solve common multi-step tasks?',
    hint: 'Each service does one conversion; chain them.',
    back: '<strong>Call analytics</strong>: Transcribe (audio to text) then Comprehend (sentiment, entities). <strong>Document processing</strong>: Textract (scan to text and fields) then Comprehend (meaning) or a classifier. <strong>Multilingual audio</strong>: Translate (text to another language) then Polly (speech). <strong>Speech translation</strong>: Transcribe, then Translate, then Polly. <strong>Voice bot</strong>: Lex handles speech recognition, intent and slots, with Polly voices for replies.',
    tags: ['AWS AI services', 'Architecture']
  },
  {
    id: 'aws-aif-fc-75',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What three AI capabilities does a voice assistant combine?',
    hint: 'Hear, understand, reply.',
    back: '<strong>Speech recognition</strong> converts the user\'s spoken words into text. <strong>Natural language understanding</strong> works out the intent and extracts details such as dates or product names. <strong>Text-to-speech</strong> turns the reply back into audio. On AWS, Amazon Lex covers recognition and understanding for conversational bots, and Amazon Polly provides the voice.',
    tags: ['Speech recognition', 'Conversational AI']
  }
];

export default AWS_AIF_FLASHCARDS_3;
