export const GCP_CDL_FLASHCARDS_12 = [
  {
    id: 'gcp-cdl-fc-276',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'With AutoML on Agent Platform, what do you supply and what does Google automate?',
    hint: 'You bring the examples.',
    back: 'You supply a <strong>labeled dataset</strong> and choose the <strong>target</strong> to predict. AutoML automates the hard ML work: <strong>feature engineering, architecture selection, hyperparameter tuning and training</strong>, then reports evaluation metrics. The result is a custom model trained on your data without writing model code.',
    tags: ['AutoML', 'Custom models']
  },
  {
    id: 'gcp-cdl-fc-277',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'AutoML vs custom training on Agent Platform: how do you choose?',
    hint: 'Who designs the model?',
    back: '<strong>AutoML</strong>: little or no code, Google picks the architecture; ideal when you have labeled data but limited ML expertise and a standard task (image, tabular). <strong>Custom training</strong>: you write the training code in frameworks such as PyTorch, TensorFlow or JAX and control the architecture; choose it for novel models or when experts need full control. Both run on managed infrastructure.',
    tags: ['AutoML', 'Custom training']
  },
  {
    id: 'gcp-cdl-fc-278',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'AutoML vs BigQuery ML: which fits which team?',
    hint: 'Where does the data live and what language do people speak?',
    back: '<strong>BigQuery ML</strong> suits <strong>SQL-fluent analysts</strong> whose data is already in <strong>BigQuery</strong>: models are created with SQL and data never moves. <strong>AutoML</strong> suits teams that prefer a <strong>guided console workflow</strong>, or that work with <strong>images</strong> or files in Cloud Storage. BigQuery ML can even train AutoML-based models from SQL.',
    tags: ['AutoML', 'BigQuery ML']
  },
  {
    id: 'gcp-cdl-fc-279',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Put these ways of customising a foundation model in order of effort: fine-tuning, few-shot prompting, prompt instructions, training from scratch.',
    hint: 'Start with words, end with data centers.',
    back: '1. <strong>Prompt instructions</strong> (system instructions, clear task wording). 2. <strong>Few-shot prompting</strong>: add a handful of worked examples to the prompt. 3. <strong>Fine-tuning</strong>: tune on hundreds or thousands of your examples to lock in style or task behaviour. 4. <strong>Training from scratch</strong>: rarely justified outside research-scale organisations. Try the cheaper steps first.',
    tags: ['Prompting', 'Fine-tuning']
  },
  {
    id: 'gcp-cdl-fc-280',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Supervised fine-tuning vs preference tuning: what data does each need?',
    hint: 'Right answers vs better answers.',
    back: '<strong>Supervised fine-tuning</strong> needs <strong>input and ideal-output pairs</strong> (for example product specs and the approved description) and teaches the model to reproduce that output. <strong>Preference tuning</strong> needs <strong>ranked or compared responses</strong> (this answer is better than that one) and nudges the model towards preferred behaviour when there is no single correct answer. Both are available for Gemini models on Agent Platform.',
    tags: ['Fine-tuning', 'Gemini']
  },
  {
    id: 'gcp-cdl-fc-281',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Online prediction vs batch prediction: when is each used?',
    hint: 'One customer now, or a million records tonight?',
    back: '<strong>Online prediction</strong>: the model is <strong>deployed to an endpoint</strong> and answers individual requests in real time, for example a loan decision at submit time. <strong>Batch prediction</strong>: a large set of records is scored <strong>asynchronously</strong>, for example all customers overnight, with no always-on endpoint needed.',
    tags: ['Predictions', 'Endpoints']
  },
  {
    id: 'gcp-cdl-fc-282',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Which kinds of problems can AutoML on Agent Platform train models for?',
    hint: 'Pictures and tables.',
    back: '<strong>Image data</strong>: classification (what is in the picture) and object detection (where it is). <strong>Tabular data</strong>: classification (which category), regression (what number) and forecasting (future values). You bring labeled examples; AutoML builds and evaluates the model.',
    tags: ['AutoML', 'Use cases']
  },
  {
    id: 'gcp-cdl-fc-283',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Why can a custom model score well in testing but fail in production?',
    hint: 'Compare the training photos with real life.',
    back: 'Usually because the <strong>training data was not representative</strong> of real conditions, for example only daytime images, only one region or only last year\'s customers. The model never learned the missing situations. The fix is <strong>more complete, accurate, labeled data</strong> covering them, not faster hardware or more serving capacity.',
    tags: ['Data quality', 'Custom models']
  },
  {
    id: 'gcp-cdl-fc-284',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What are the three layers of AI Hypercomputer?',
    hint: 'Chips, code, and how you pay.',
    back: '1. <strong>Performance-optimised hardware</strong>: TPUs, GPUs, high-throughput storage and networking. 2. <strong>Open software</strong>: frameworks such as PyTorch, JAX and TensorFlow, with orchestration through GKE or Slurm via Cluster Director. 3. <strong>Flexible consumption</strong>: on-demand, Spot, Flex-start, reservations and committed use discounts.',
    tags: ['AI Hypercomputer', 'AI infrastructure']
  },
  {
    id: 'gcp-cdl-fc-285',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'TPU vs GPU on Google Cloud: how do you decide?',
    hint: 'Custom chips vs the CUDA ecosystem.',
    back: '<strong>TPUs</strong> are Google-designed chips built for large matrix operations; they give strong price-performance for large-scale training and inference, especially with JAX, PyTorch/XLA and TensorFlow. <strong>NVIDIA GPUs</strong> offer broad framework and library support and run <strong>CUDA</strong> code natively. Code tied to CUDA kernels points to GPUs; large transformer workloads seeking cost efficiency often suit TPUs.',
    tags: ['TPU', 'GPU']
  },
  {
    id: 'gcp-cdl-fc-286',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Match each consumption option to its workload: on-demand, Spot, Flex-start, reservations.',
    hint: 'Now, cheap, flexible start, guaranteed.',
    back: '<strong>On-demand</strong>: immediate, full price, no commitment; prototyping and serving. <strong>Spot VMs</strong>: deep discount but preemptible; fault-tolerant batch work. <strong>Flex-start</strong>: queued until capacity frees, runs up to seven days uninterrupted at a discount; fine-tuning and short training. <strong>Reservations</strong>: assured capacity for critical or planned workloads.',
    tags: ['AI Hypercomputer', 'Cost control']
  },
  {
    id: 'gcp-cdl-fc-287',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Dynamic Workload Scheduler Flex-start vs calendar mode: what does each guarantee?',
    hint: 'Flexible start vs a booked date.',
    back: '<strong>Flex-start</strong> guarantees an <strong>uninterrupted run of up to seven days</strong> once capacity is found, but not <em>when</em> it starts. <strong>Calendar mode</strong> (future reservations) books a <strong>fixed block of up to 90 days starting on a chosen date</strong>, like a hotel booking, so a planned training run knows its capacity in advance. Neither requires a one- or three-year commitment.',
    tags: ['Dynamic Workload Scheduler', 'Calendar mode']
  },
  {
    id: 'gcp-cdl-fc-288',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'When are Spot VMs a good fit for AI workloads?',
    hint: 'Can the job survive being stopped?',
    back: 'When the job is <strong>fault tolerant</strong>: batch inference, checkpointed training or data preparation that can resume after interruption, and cost matters more than finishing at an exact time. Spot VMs use spare capacity at a <strong>large discount</strong> but Google can <strong>reclaim them at any time</strong>, so avoid them for always-on serving.',
    tags: ['Spot VMs', 'Cost control']
  },
  {
    id: 'gcp-cdl-fc-289',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Why use committed use discounts for AI inference fleets?',
    hint: 'Predictable usage earns a lower price.',
    back: 'A <strong>one- or three-year commitment</strong> to a level of resources buys a <strong>significant discount</strong> over on-demand prices, and the capacity is never preempted. It fits the steady <strong>baseline</strong> of an always-on model; cover peaks with on-demand capacity. It is a poor fit for sporadic jobs, which pay for idle committed capacity.',
    tags: ['Committed use discounts', 'Inference']
  },
  {
    id: 'gcp-cdl-fc-290',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'How are large AI clusters orchestrated in AI Hypercomputer?',
    hint: 'Containers or HPC-style job queues.',
    back: 'Through <strong>Google Kubernetes Engine</strong> for container-native scaling of training and serving, or <strong>Slurm via Cluster Director</strong> for teams used to HPC-style job scheduling, with Cluster Toolkit blueprints to deploy them. Using open, familiar orchestrators means teams keep existing skills instead of learning proprietary tools.',
    tags: ['AI Hypercomputer', 'GKE']
  },
  {
    id: 'gcp-cdl-fc-291',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What is BigQuery ML?',
    hint: 'Machine learning in the language of analysts.',
    back: 'A BigQuery capability that lets users <strong>create, train, evaluate and run ML models using standard SQL</strong>, for example with CREATE MODEL and ML.PREDICT, <strong>inside BigQuery</strong> where the data already lives. It also reaches Gemini and other Agent Platform models through remote models.',
    tags: ['BigQuery ML', 'SQL']
  },
  {
    id: 'gcp-cdl-fc-292',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Name three business benefits of BigQuery ML.',
    hint: 'People, data movement, speed.',
    back: '<strong>Democratisation</strong>: SQL analysts build models without Python or ML frameworks. <strong>No data movement</strong>: models train where the data lives, which simplifies governance and security. <strong>Speed of experimentation</strong>: build, evaluate and compare models in minutes and put predictions straight into reports and dashboards.',
    tags: ['BigQuery ML', 'Business value']
  },
  {
    id: 'gcp-cdl-fc-293',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Which BigQuery ML model type fits each goal: predict a number, predict yes or no, find segments, recommend items, forecast over time?',
    hint: 'Five goals, five model types.',
    back: 'Number: <strong>linear regression</strong> (or boosted trees). Yes or no: <strong>logistic regression</strong>. Unlabeled segments: <strong>k-means clustering</strong>. Recommendations from ratings: <strong>matrix factorization</strong>. Future values over time: <strong>ARIMA_PLUS</strong> time series (or the pre-trained TimesFM model).',
    tags: ['BigQuery ML', 'Model types']
  },
  {
    id: 'gcp-cdl-fc-294',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'How can analysts use Gemini on BigQuery data without leaving SQL?',
    hint: 'A model that lives elsewhere but is called from BigQuery.',
    back: 'Create a <strong>remote model</strong> in BigQuery ML that points to a Gemini model on Agent Platform, then call generative functions such as <strong>AI.GENERATE_TEXT</strong> or <strong>AI.GENERATE</strong> in a query. Each row\'s text is sent to Gemini and the result, such as a summary or classification, comes back as a column that can be saved to a table.',
    tags: ['BigQuery ML', 'Generative AI']
  },
  {
    id: 'gcp-cdl-fc-295',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'When would a team import a model into BigQuery ML instead of training one there?',
    hint: 'The model was born somewhere else.',
    back: 'When data scientists have already trained a model elsewhere, in formats such as <strong>TensorFlow, TensorFlow Lite, ONNX or XGBoost</strong>, and analysts want to run predictions on BigQuery tables with ML.PREDICT. Importing brings the model <strong>to the data</strong>, so predictions run at warehouse scale without exporting data or building a separate serving pipeline.',
    tags: ['BigQuery ML', 'Imported models']
  },
  {
    id: 'gcp-cdl-fc-296',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'ML.EVALUATE, ML.PREDICT, ML.EXPLAIN_PREDICT: which step of the model lifecycle does each serve?',
    hint: 'Is it good? What will happen? Why?',
    back: '<strong>ML.EVALUATE</strong>: measures model quality, for example precision, recall or error, to compare candidates. <strong>ML.PREDICT</strong>: scores new rows. <strong>ML.EXPLAIN_PREDICT</strong>: scores rows and returns <strong>feature attributions</strong> explaining which inputs drove each prediction, supporting explainable, responsible AI.',
    tags: ['BigQuery ML', 'Explainable AI']
  },
  {
    id: 'gcp-cdl-fc-297',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'Supervised vs unsupervised learning: which BigQuery ML examples illustrate each?',
    hint: 'Does the table already contain the answer column?',
    back: '<strong>Supervised</strong> models learn from a labeled target column: logistic regression for churn (yes or no), linear regression for spend. <strong>Unsupervised</strong> models find structure without labels: <strong>k-means</strong> discovers customer segments nobody defined in advance.',
    tags: ['BigQuery ML', 'ML concepts']
  },
  {
    id: 'gcp-cdl-fc-298',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'ARIMA_PLUS vs AI.FORECAST with TimesFM in BigQuery: what is the difference?',
    hint: 'Train your own, or use one already trained.',
    back: '<strong>ARIMA_PLUS</strong> is a model you <strong>train</strong> on your own time series with CREATE MODEL, handling seasonality and holidays. <strong>AI.FORECAST</strong> uses <strong>TimesFM</strong>, a <strong>pre-trained</strong> time series foundation model from Google, so you can forecast with a single query and no training step. Use TimesFM for fast results; train ARIMA_PLUS when you want a model fitted and evaluated on your data.',
    tags: ['BigQuery ML', 'Forecasting']
  },
  {
    id: 'gcp-cdl-fc-299',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'What is a TPU?',
    hint: 'A chip Google designed for one kind of math.',
    back: 'A <strong>Tensor Processing Unit</strong>: an application-specific chip designed by Google to accelerate the <strong>large matrix operations</strong> in neural networks, with high-bandwidth memory. Cloud TPUs are offered on Google Cloud for training and serving models, and power Google\'s own models such as Gemini.',
    tags: ['TPU', 'AI Hypercomputer']
  },
  {
    id: 'gcp-cdl-fc-300',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd3',
    front: 'A BigQuery ML model must answer a mobile app in real time. What is the path?',
    hint: 'BigQuery is built for queries, not per-tap serving.',
    back: 'Register the BigQuery ML model in <strong>Agent Platform\'s model registry</strong> and <strong>deploy it to an endpoint</strong> for online predictions. BigQuery ML with ML.PREDICT excels at scoring many rows in queries; an endpoint serves individual low-latency requests from applications.',
    tags: ['BigQuery ML', 'Online prediction']
  }
];

export default GCP_CDL_FLASHCARDS_12;
