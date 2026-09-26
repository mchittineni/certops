export const AWS_AIF_FLASHCARDS_1 = [
  {
    id: 'aws-aif-fc-1',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'How do AI, machine learning and deep learning relate to each other?',
    hint: 'Think of nested circles.',
    back: 'They are nested subsets. <strong>AI</strong> is the broad field of systems that perform tasks associated with human intelligence, including hand-written rule engines. <strong>Machine learning</strong> is the part of AI where behavior is learned from data instead of explicitly programmed. <strong>Deep learning</strong> is the part of ML that uses multi-layer neural networks. Every deep learning model is ML and every ML model is AI, but not the other way round.',
    tags: ['AI vs ML', 'Deep learning']
  },
  {
    id: 'aws-aif-fc-2',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Computer vision, NLP or speech recognition: which input does each one work on?',
    hint: 'Pictures, written words, spoken words.',
    back: '<strong>Computer vision</strong> interprets images and video: classifying photos, detecting objects, reading faces or defects. <strong>NLP</strong> works on written language: sentiment, entities, classification, translation, summarization. <strong>Speech recognition</strong> converts spoken audio into text, which is then often passed to NLP. A task that starts from scanned documents usually chains vision (OCR) with NLP.',
    tags: ['Computer vision', 'NLP']
  },
  {
    id: 'aws-aif-fc-3',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What are bias and variance in the bias-variance tradeoff, and which fit problem does each cause?',
    hint: 'One is too rigid, the other too sensitive.',
    back: '<strong>Bias</strong> is error from overly simple assumptions: the model misses real relationships, which causes <strong>underfitting</strong>. <strong>Variance</strong> is error from sensitivity to the particular training sample: the model changes a lot with small changes in data, which causes <strong>overfitting</strong>. Adding complexity lowers bias but raises variance; the goal is the balance point with the lowest error on unseen data.',
    tags: ['Bias-variance', 'Model fit']
  },
  {
    id: 'aws-aif-fc-4',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Algorithm vs model: which one is produced by training?',
    hint: 'Recipe and dish.',
    back: 'The <strong>algorithm</strong> is the learning procedure, such as XGBoost, linear regression or k-means. The <strong>model</strong> is the artifact that running the algorithm on data produces: the learned parameters that turn new inputs into predictions, such as a model.tar.gz saved to Amazon S3. You train an algorithm on data to get a model, then deploy the model for inference.',
    tags: ['Terminology', 'Algorithm vs model']
  },
  {
    id: 'aws-aif-fc-5',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Training vs inference: what happens in each, and how do their costs behave?',
    hint: 'Learn once, predict many times.',
    back: '<strong>Training</strong> feeds historical data to an algorithm so it learns parameters; it is compute-heavy, runs occasionally and ends when the model is built. <strong>Inference</strong> applies the trained model to new inputs to produce predictions; each call is cheap, but it runs for as long as the model is in use, so over a model\'s life inference often costs more in total than training.',
    tags: ['Training', 'Inference']
  },
  {
    id: 'aws-aif-fc-6',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Which of the four SageMaker inference options fits which traffic pattern?',
    hint: 'Latency, payload size, and how often traffic stops.',
    back: '<strong>Real-time endpoint</strong>: steady traffic that needs millisecond-to-second responses; instances run continuously. <strong>Serverless Inference</strong>: intermittent traffic with idle gaps, small payloads, and tolerance for cold starts; scales to zero. <strong>Asynchronous Inference</strong>: large payloads or long processing, results delivered to S3 with notification; can scale to zero. <strong>Batch transform</strong>: offline scoring of a whole dataset with no persistent endpoint.',
    tags: ['SageMaker inference', 'Inference types']
  },
  {
    id: 'aws-aif-fc-7',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Batch inference or real-time inference: what single question decides it?',
    hint: 'Who or what is waiting for the answer?',
    back: 'Ask whether anyone is <strong>waiting on the prediction in the moment</strong>. If a user or transaction is blocked until the answer arrives, such as fraud checks, chat replies or live recommendations, use <strong>real-time</strong> inference. If predictions can be computed ahead of time for a whole dataset and read later, such as monthly churn scores or nightly recommendation lists, use <strong>batch</strong> inference, which is cheaper because nothing runs between jobs.',
    tags: ['Batch inference', 'Real-time inference']
  },
  {
    id: 'aws-aif-fc-8',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What limits rule out SageMaker Serverless Inference for a workload?',
    hint: 'Payload, time, and hardware.',
    back: 'Serverless Inference caps the <strong>request payload at 4 MB</strong> and <strong>processing time at 60 seconds</strong>, offers memory sizes up to <strong>6 GB</strong>, and does <strong>not support GPUs</strong>. It also has cold starts after idle periods. Large files, long-running jobs, GPU models or strict low-latency needs point to Asynchronous Inference or a real-time endpoint instead.',
    tags: ['Serverless Inference', 'Limits']
  },
  {
    id: 'aws-aif-fc-9',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'When does SageMaker Asynchronous Inference beat a real-time endpoint?',
    hint: 'Big inputs, slow models, patient users.',
    back: 'When payloads are large (up to <strong>1 GB</strong>) or processing takes a long time (up to <strong>one hour</strong>) and callers can wait for a notification. Requests go into an internal queue, results are written to Amazon S3, an optional Amazon SNS topic reports success or failure, and the endpoint can <strong>autoscale to zero</strong> instances when the queue is empty, which a real-time endpoint cannot.',
    tags: ['Asynchronous Inference', 'Inference types']
  },
  {
    id: 'aws-aif-fc-10',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Structured, semi-structured and unstructured data: give an example of each.',
    hint: 'How much of a schema does it carry?',
    back: '<strong>Structured</strong>: a fixed schema of rows and typed columns, such as a relational orders table or a CSV of loan applications. <strong>Semi-structured</strong>: self-describing tags without a rigid table schema, such as JSON or XML documents. <strong>Unstructured</strong>: no predefined fields, such as free text, PDFs, images, audio and video. Most enterprise data is unstructured and needs extraction, transcription or vision models before tabular ML can use it.',
    tags: ['Data types', 'Unstructured data']
  },
  {
    id: 'aws-aif-fc-11',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Labeled vs unlabeled data: what does each let you train?',
    hint: 'Does every example come with the right answer?',
    back: '<strong>Labeled data</strong> pairs each example with its correct output, such as an email tagged spam or a photo tagged defective, and is required for <strong>supervised</strong> learning. <strong>Unlabeled data</strong> has inputs only and supports <strong>unsupervised</strong> learning such as clustering. Labels are usually expensive because people must create them, which is why services such as SageMaker Ground Truth exist to manage labeling work.',
    tags: ['Labeled data', 'Data types']
  },
  {
    id: 'aws-aif-fc-12',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What makes time-series data different from ordinary tabular rows?',
    hint: 'Order matters, and so does the calendar.',
    back: 'Time-series observations are <strong>indexed by time and depend on earlier values</strong>, so row order carries information. Typical patterns are <strong>trend</strong>, <strong>seasonality</strong> (daily, weekly, yearly cycles) and autocorrelation. This changes evaluation: split <strong>chronologically</strong>, training on the past and testing on the future, because a random shuffle leaks future information and inflates accuracy. Examples: sensor readings, stock prices, daily sales.',
    tags: ['Time-series data', 'Data types']
  },
  {
    id: 'aws-aif-fc-13',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Which kind of model usually wins on small or medium tabular datasets?',
    hint: 'Not the one with the most layers.',
    back: 'Classical ML, especially <strong>gradient-boosted trees</strong> such as XGBoost, usually matches or beats deep neural networks on structured tabular data of thousands to millions of rows. Trees train quickly on CPUs, handle mixed numeric and categorical columns, and are easier to explain. Deep learning pulls ahead on <strong>unstructured</strong> data such as images, audio and text, where it learns features automatically.',
    tags: ['Tabular data', 'Algorithm selection']
  },
  {
    id: 'aws-aif-fc-14',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What are the main parts of a neural network, and which of them change during training?',
    hint: 'Layers stay put; numbers move.',
    back: 'A network has an <strong>input layer</strong>, one or more <strong>hidden layers</strong> and an <strong>output layer</strong> of nodes (neurons). Each connection has a <strong>weight</strong> and each node a <strong>bias</strong>, and an <strong>activation function</strong> adds non-linearity. Training changes only the weights and biases: backpropagation computes each one\'s share of the loss and gradient descent adjusts them. "Deep" means many hidden layers.',
    tags: ['Neural networks', 'Training']
  },
  {
    id: 'aws-aif-fc-15',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Image classification vs object detection vs segmentation: what does each output?',
    hint: 'One label, boxes, or pixels.',
    back: '<strong>Image classification</strong> assigns one or more labels to the whole image ("contains a cat"). <strong>Object detection</strong> finds each object and returns a label plus a <strong>bounding box</strong> for it ("three pallets, here, here and here"). <strong>Semantic segmentation</strong> labels <strong>every pixel</strong>, giving exact object outlines. All three are computer vision tasks; Amazon Rekognition offers labels and detection without building a model.',
    tags: ['Computer vision', 'Terminology']
  },
  {
    id: 'aws-aif-fc-16',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What counts as natural language processing (NLP)? Name four typical tasks.',
    hint: 'Machines working with human language.',
    back: 'NLP is the branch of AI that lets computers understand and generate human language. Typical tasks: <strong>sentiment analysis</strong>, <strong>named entity recognition</strong> (people, places, dates), <strong>language translation</strong>, <strong>text classification</strong>, <strong>summarization</strong> and question answering. On AWS, Amazon Comprehend covers analysis tasks and Amazon Translate covers translation; speech-to-text is usually treated as speech recognition that feeds NLP.',
    tags: ['NLP', 'Terminology']
  },
  {
    id: 'aws-aif-fc-17',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is a large language model (LLM), and what does it actually predict?',
    hint: 'One small piece of text at a time.',
    back: 'An LLM is a very large deep learning model, usually a <strong>transformer</strong>, pre-trained on massive text corpora. At its core it predicts the <strong>next token</strong> (a word or word fragment) given the tokens so far, repeatedly, to generate text. That single capability supports summarization, question answering, translation and code generation. LLMs are one kind of <strong>foundation model</strong>: general-purpose and adaptable to many tasks.',
    tags: ['LLM', 'Terminology']
  },
  {
    id: 'aws-aif-fc-18',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Bias vs fairness in AI: how are the two terms related?',
    hint: 'One is a cause, the other a property of outcomes.',
    back: '<strong>Bias</strong> is a systematic skew in data or a model, for example training data that under-represents a group or reflects past discrimination. <strong>Fairness</strong> is the goal that a model\'s outcomes do not disadvantage individuals or groups, especially by sensitive attributes such as gender or age. Unchecked bias leads to unfair outcomes, which is why bias is measured before and after training, for example with SageMaker Clarify.',
    tags: ['Bias', 'Fairness']
  },
  {
    id: 'aws-aif-fc-19',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Training, validation and test sets: what is each one for?',
    hint: 'Learn, tune, then a final exam taken once.',
    back: 'The <strong>training set</strong> is what the algorithm learns parameters from. The <strong>validation set</strong> is held out to compare models, tune hyperparameters and spot overfitting, for example by early stopping when validation error starts rising. The <strong>test set</strong> is used once at the end for an unbiased estimate of performance on unseen data. A common split is about 70/15/15 or 80/10/10.',
    tags: ['Model fit', 'Validation set']
  },
  {
    id: 'aws-aif-fc-20',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'When is deep learning the wrong choice even though it is more powerful?',
    hint: 'Data volume, explainability and budget.',
    back: 'Prefer simpler ML when the dataset is <strong>small</strong> (deep networks overfit it), the data is <strong>structured tabular</strong> (tree ensembles usually do as well or better), decisions must be <strong>explained</strong> to regulators or customers, or there is <strong>no budget for GPUs</strong> and long training. Deep learning earns its cost with large volumes of unstructured data such as images, audio and text.',
    tags: ['Deep learning', 'Algorithm selection']
  },
  {
    id: 'aws-aif-fc-21',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Parameters vs hyperparameters: who sets each one?',
    hint: 'Learned from data or chosen before training starts.',
    back: '<strong>Parameters</strong> are learned from data during training, such as a neural network\'s weights and biases or a regression\'s coefficients; they make up the model. <strong>Hyperparameters</strong> are settings chosen before training that control how learning happens, such as learning rate, number of epochs, batch size, tree depth or number of clusters. Hyperparameters are tuned by experiment or by a job such as SageMaker automatic model tuning.',
    tags: ['Hyperparameters', 'Terminology']
  },
  {
    id: 'aws-aif-fc-22',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'How is an image represented as input to an ML model?',
    hint: 'A grid of numbers, possibly several grids deep.',
    back: 'As a grid of <strong>pixel values</strong>: height by width, with one channel for grayscale or three <strong>channels</strong> (red, green, blue) for colour, each typically 0-255 and often scaled to 0-1. A 224x224 colour photo is therefore about 150,000 numbers. Because nearby pixels are related, <strong>convolutional neural networks</strong> are the classic architecture for learning from image data.',
    tags: ['Image data', 'Computer vision']
  },
  {
    id: 'aws-aif-fc-23',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What are the defining traits of real-time inference, and what does it cost you?',
    hint: 'Always on, always ready.',
    back: 'Real-time inference serves <strong>one request at a time synchronously</strong> from a persistent endpoint, returning predictions in milliseconds to seconds. Instances run continuously whether or not traffic arrives, so you <strong>pay for uptime</strong>; autoscaling adds or removes instances with load but a SageMaker real-time endpoint does not drop to zero. Use it for interactive apps with steady traffic and strict latency needs.',
    tags: ['Real-time inference', 'Cost']
  },
  {
    id: 'aws-aif-fc-24',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is data leakage, and what symptom gives it away?',
    hint: 'The model saw the answer before the exam.',
    back: 'Data leakage happens when information that would not be available at prediction time gets into training, for example a feature derived from the outcome, test rows duplicated in training, or a random split of time-series data that lets the model train on the future. The symptom is <strong>suspiciously high validation or test accuracy that collapses in production</strong>. Prevent it by splitting before preprocessing, splitting chronologically for time series, and auditing features.',
    tags: ['Data leakage', 'Evaluation']
  },
  {
    id: 'aws-aif-fc-25',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Why does deep learning usually need GPUs when most classical ML does not?',
    hint: 'Millions of multiplications at once.',
    back: 'Training a deep network means repeating huge <strong>matrix multiplications</strong> across millions or billions of weights, over many epochs of large datasets. GPUs (and AWS accelerators such as Trainium and Inferentia) run thousands of these operations <strong>in parallel</strong>, cutting training from weeks to hours. Classical algorithms such as linear models or gradient-boosted trees on tabular data have far fewer parameters and train well on CPUs.',
    tags: ['Deep learning', 'Infrastructure']
  }
];

export default AWS_AIF_FLASHCARDS_1;
