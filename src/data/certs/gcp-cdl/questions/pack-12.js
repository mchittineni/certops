export const GCP_CDL_QUESTIONS_12 = [
  {
    id: "gcp-cdl-276",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Weld defects that generic image labels miss",
    scenario: "An automotive parts maker photographs every weld on its line and has 12,000 pictures that quality staff sorted into good, porous or cracked. A trial with a generic image-labeling API returned only terms like 'metal' and 'machine'. The plant has process engineers but no ML engineers.",
    question: "Which approach should the plant use to automate the inspection?",
    options: [
      { id: 'A', text: "Load the image file names into BigQuery and build a logistic regression model with BigQuery ML on them." },
      { id: 'B', text: "Keep calling the Vision API on the weld photos and map its generic labels onto the three inspection outcomes." },
      { id: 'C', text: "Train an AutoML image classification model on Agent Platform using the weld photos staff have marked." },
      { id: 'D', text: "Write a custom PyTorch training application and run it on a GPU cluster managed by the plant's own staff." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AutoML on Agent Platform trains a custom image model from the organisation's own labeled examples without the user writing model code, so engineers can teach it the company-specific categories good, porous and cracked. Generic Vision API labels were shown not to know those categories, and mapping 'metal' onto defect types cannot work. A custom PyTorch application requires exactly the ML engineering skills the plant lacks. File names carry no visual information, so a BigQuery ML regression on them cannot see a defect.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/training/automl-training-overview",
    tags: ["AutoML", "Custom models", "Image classification"]
  },
  {
    id: "gcp-cdl-277",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Churn prediction from a CSV export",
    scenario: "A subscription meal-kit company exports three years of customer history, each customer marked as renewed or cancelled, as CSV files in Cloud Storage. Its business analysts use spreadsheets but do not write SQL or Python. They want a model that predicts which current customers will cancel, built through a guided, point-and-click workflow.",
    question: "Which option best matches the analysts' skills and data?",
    options: [
      { id: 'A', text: "AutoML tabular classification on Agent Platform, trained on the labeled CSV records in the console." },
      { id: 'B', text: "Natural Language API content classification applied to each customer record in the exported files." },
      { id: 'C', text: "Supervised fine-tuning of a Gemini model on the CSV rows so it learns which customers usually cancel." },
      { id: 'D', text: "BigQuery ML logistic regression, written as a CREATE MODEL statement over tables loaded from the files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AutoML for tabular data takes a labeled dataset, here each customer marked as renewed or cancelled, and automatically handles feature engineering, model selection and tuning through a guided console workflow, producing a classification model with no code. BigQuery ML is excellent for this task too, but it is driven by SQL, which these analysts do not write. Fine-tuning a generative language model is the wrong tool for a structured yes-or-no prediction on tabular features. Natural Language content classification assigns general topic categories to prose, not churn probabilities to structured records.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/tabular-data/overview",
    tags: ["AutoML", "Tabular data", "Churn prediction"]
  },
  {
    id: "gcp-cdl-278",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Product copy that must sound like the brand",
    scenario: "A luxury watchmaker uses a foundation model to draft product descriptions, but even with detailed instructions the tone drifts from its distinctive house style. The copy team has collected 1,500 signed-off examples pairing product specifications with the finished descriptions and wants the model to reproduce that style reliably.",
    question: "What should the team do to customise the model?",
    options: [
      { id: 'A', text: "Run supervised fine-tuning of Gemini on Agent Platform using the approved example pairs." },
      { id: 'B', text: "Enable grounding with Google Search so each description draws on current public web content." },
      { id: 'C', text: "Add a glossary in Cloud Translation Advanced that lists the brand's preferred product terms." },
      { id: 'D', text: "Train an AutoML image classification model on photos of the watches in the product catalog." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Supervised fine-tuning adapts a foundation model's behaviour, including tone, format and style, using labeled input and output examples; with 1,500 approved pairs, tuning Gemini on Agent Platform teaches it the house style far more consistently than instructions alone. Grounding with Google Search adds facts from the public web, which would pull the copy towards generic language rather than the brand voice. An image classifier sorts photos and cannot write text. A translation glossary controls term translation between languages; it does not shape how original copy is written.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tuning/supervised-tuning",
    tags: ["Fine-tuning", "Gemini", "Custom models"]
  },
  {
    id: "gcp-cdl-279",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A research team with its own model architecture",
    scenario: "A pharmaceutical company's ML researchers have designed a novel graph neural network to predict how molecules bind to proteins. They need to train it on large GPU clusters with their own scripts and hyperparameters, while letting Google manage the servers underneath.",
    question: "Which Agent Platform approach fits this team?",
    options: [
      { id: 'A', text: "Custom training, which runs the team's own PyTorch code on managed infrastructure" },
      { id: 'B', text: "AutoML tabular regression, which picks the architecture for the team automatically" },
      { id: 'C', text: "Agent Studio prompt design, which steers a Gemini model with written instructions" },
      { id: 'D', text: "BigQuery ML linear regression, which trains a model from a SQL CREATE MODEL query" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Custom training on Agent Platform runs the organisation's own training code, in frameworks such as PyTorch, TensorFlow or JAX, on managed CPU, GPU or TPU resources, giving full control of architecture and hyperparameters without the team running clusters itself. AutoML chooses the model architecture on the user's behalf, so it cannot train a specific novel graph network. Prompt design steers an existing foundation model rather than training a scientific model. BigQuery ML's built-in model types do not include a researcher-designed graph neural network.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/start/training-guide",
    tags: ["Custom training", "PyTorch", "Agent Platform"]
  },
  {
    id: "gcp-cdl-280",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Explaining AutoML to the operations director",
    scenario: "An operations director hears that the data team plans to use AutoML on Agent Platform to predict equipment failures from sensor summaries. She has no ML background and asks what part of the work AutoML actually takes off the team's hands.",
    question: "Which answer is accurate?",
    options: [
      { id: 'A', text: "It replaces the need to define which outcome the model should predict at all." },
      { id: 'B', text: "It converts sensor summaries into a chatbot that answers equipment questions." },
      { id: 'C', text: "It automates model selection and training once the team provides labeled data." },
      { id: 'D', text: "It supplies Google's own labeled data, so the team needs none of its own." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AutoML automates the technically demanding steps of building a model, such as choosing and tuning an architecture and training it, from a labeled dataset the organisation provides. The team must still supply its own labeled data, since Google does not provide equipment-failure examples, and it must still decide which target the model predicts, for example failure within 30 days. AutoML trains predictive models; it does not turn data into a conversational chatbot.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/beginner/beginners-guide",
    tags: ["AutoML", "ML concepts", "Custom models"]
  },
  {
    id: "gcp-cdl-281",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "An inspection model that fails on the night shift",
    scenario: "A bottling plant's AutoML image model spots damaged labels with high accuracy during day shifts but misses many defects at night, when the line runs under different lighting. The data team finds that every training image was captured during daytime production.",
    question: "What should the team do to improve the model?",
    options: [
      { id: 'A', text: "Deploy the existing model to an endpoint with more serving nodes so it has capacity for night traffic." },
      { id: 'B', text: "Collect and label night-shift images and retrain the model on the combined, more representative dataset." },
      { id: 'C', text: "Rebuild the same model in BigQuery ML so predictions run on the same daytime images inside BigQuery." },
      { id: 'D', text: "Move the existing training job onto Cloud TPUs so the same daytime images are processed more quickly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A model can only learn patterns present in its training data. Because no night-time images were included, the model never learned what defects look like under night lighting; adding labeled examples from the night shift makes the dataset complete and representative, which is the fix for this kind of data-quality gap. More serving nodes change throughput, not accuracy. Faster hardware trains on the same incomplete data and yields the same blind spot. Moving to BigQuery ML changes the tool but not the missing data, and BigQuery ML is not designed for raw image classification.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/image-data/classification/prepare-data",
    tags: ["Data quality", "AutoML", "Training data"]
  },
  {
    id: "gcp-cdl-282",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Thirty examples and a contract backlog",
    scenario: "A law firm wants Gemini to sort incoming contracts into its own seven internal categories, such as 'vendor NDA' and 'licence renewal'. The team has only about 30 correctly sorted examples and needs a working result this week, without a training project.",
    question: "What is the most practical way to customise the model's behaviour?",
    options: [
      { id: 'A', text: "Add the examples to the prompt as few-shot examples when designing it in Agent Studio" },
      { id: 'B', text: "Train an AutoML text classification model, which typically needs far more labeled examples" },
      { id: 'C', text: "Pretrain a legal language model on TPUs using the firm's historical contracts" },
      { id: 'D', text: "Call the Natural Language API content classification with its general categories" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Few-shot prompting places a handful of worked examples inside the prompt so the model infers the pattern, which customises a foundation model's output with the firm's own data in hours, with no training job; Agent Studio makes it easy to design and test such prompts. Training a supervised model on only 30 examples is unlikely to generalise well. Pretraining a language model is a massive, costly effort. The Natural Language API's content categories are Google's general taxonomy and do not include the firm's seven internal categories.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/prompts/few-shot-examples",
    tags: ["Few-shot prompting", "Agent Studio", "Gemini"]
  },
  {
    id: "gcp-cdl-283",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Instant decisions at the loan application screen",
    scenario: "A credit union has trained a loan-approval model on Agent Platform with its own lending history. Its web application form must receive a recommendation within a second of the applicant pressing submit, one application at a time.",
    question: "How should the credit union serve the model?",
    options: [
      { id: 'A', text: "Run a nightly batch prediction job over the day's submitted applications" },
      { id: 'B', text: "Export the predictions to a Looker dashboard reviewed by loan officers" },
      { id: 'C', text: "Deploy the model to an endpoint and request online predictions" },
      { id: 'D', text: "Copy the trained model file into a Cloud Storage bucket for archive" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploying a model to an endpoint on Agent Platform makes it available for online predictions: the application sends one request and receives a response in real time, which fits a decision shown the moment an applicant submits. Batch prediction is for scoring large sets of records asynchronously, so a nightly run cannot answer an applicant within a second. A dashboard is for humans reviewing results later. Storing the model file in a bucket keeps a copy but does not serve predictions.",
    referenceUrl: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/predictions",
    tags: ["Online prediction", "Endpoints", "Agent Platform"]
  },
  {
    id: "gcp-cdl-284",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "What sits inside AI Hypercomputer",
    scenario: "A board member reads that a competitor trains its AI models on Google Cloud's AI Hypercomputer and asks the CTO what the term means. The CTO wants a one-line description that is accurate.",
    question: "Which description should the CTO give?",
    options: [
      { id: 'A', text: "An integrated system of optimised hardware, open software and flexible consumption models" },
      { id: 'B', text: "A no-code application for business users to chat with company documents and prebuilt agents" },
      { id: 'C', text: "A pre-trained foundation model family that Google offers through its Model Garden catalogue" },
      { id: 'D', text: "A single physical supercomputer that one customer rents exclusively for a fixed yearly fee" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AI Hypercomputer is Google Cloud's integrated supercomputing architecture for AI workloads, combining performance-optimised hardware (TPUs, GPUs, storage and networking), open software (frameworks such as PyTorch and JAX, and orchestration through GKE and Cluster Director) and flexible consumption models such as Spot VMs, Flex-start and reservations. It is not a single machine rented by one customer. It is infrastructure, not a model family in Model Garden. The no-code chat application described is the Gemini Enterprise app.",
    referenceUrl: "https://docs.cloud.google.com/ai-hypercomputer/docs/overview",
    tags: ["AI Hypercomputer", "AI infrastructure"]
  },
  {
    id: "gcp-cdl-285",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Training a large transformer at the best price-performance",
    scenario: "A speech-technology startup trains large transformer models written in JAX, dominated by huge matrix multiplications. It wants the best training price-performance available on Google Cloud and is happy to use Google-designed hardware.",
    question: "Which accelerator should the startup choose?",
    options: [
      { id: 'A', text: "Cloud TPUs, Google's custom chips built for large matrix operations" },
      { id: 'B', text: "M3 memory-optimised VMs, which hold very large datasets in system memory" },
      { id: 'C', text: "C4 compute-optimised VMs running the JAX code on CPU cores alone" },
      { id: 'D', text: "E2 general-purpose VMs, sized with many vCPUs for the matrix operations" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Tensor Processing Units are Google-designed accelerators built specifically for the large matrix operations at the heart of neural networks, with high-bandwidth memory, and they work especially well with JAX through the XLA compiler, which gives strong price-performance for training large transformers. General-purpose, memory-optimised and compute-optimised CPU machine types are real Compute Engine options, but without accelerators they are far slower and less cost-effective for large-scale deep learning training.",
    referenceUrl: "https://docs.cloud.google.com/tpu/docs/intro-to-tpu",
    tags: ["TPU", "AI Hypercomputer", "Model training"]
  },
  {
    id: "gcp-cdl-286",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Moving a CUDA-based pipeline without rewriting it",
    scenario: "A visual effects studio runs a model-training pipeline that depends on CUDA libraries and custom CUDA kernels written over several years. It wants to move training to Google Cloud this quarter without rewriting that code.",
    question: "Which hardware should the studio select?",
    options: [
      { id: 'A', text: "Sole-tenant nodes with only general-purpose CPU cores" },
      { id: 'B', text: "Accelerator-optimised VMs with NVIDIA GPUs attached" },
      { id: 'C', text: "Memory-optimised VMs that hold data sets fully in RAM" },
      { id: 'D', text: "Cloud TPU slices, programmed through the XLA compiler instead" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Accelerator-optimised machine series such as A3 and A4 provide NVIDIA GPUs, which run CUDA code and kernels natively, so the studio can move its pipeline with little change. Part of AI Hypercomputer's value is offering both GPUs and TPUs so each workload uses the hardware that fits. TPUs are excellent for many models but do not execute CUDA kernels, so the custom code would need rewriting. Sole-tenant nodes and memory-optimised VMs without GPUs cannot run CUDA-accelerated training at all.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines",
    tags: ["GPU", "AI Hypercomputer", "CUDA"]
  },
  {
    id: "gcp-cdl-287",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Fine-tuning jobs that can wait for scarce GPUs",
    scenario: "A retail analytics firm fine-tunes models a few times a month; each job needs eight GPUs for about two days. The start time can slip by several hours, but once running a job must not be interrupted. Finance wants a discount compared with on-demand prices.",
    question: "Which consumption option fits best?",
    options: [
      { id: 'A', text: "On-demand VMs, created immediately at list price and kept running between jobs" },
      { id: 'B', text: "Flex-start through Dynamic Workload Scheduler, which provisions when capacity frees up" },
      { id: 'C', text: "A three-year committed use discount for eight GPUs running continuously all year" },
      { id: 'D', text: "Spot VMs, which are heavily discounted but can be preempted at any point during the run" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Flex-start, part of Dynamic Workload Scheduler, queues a request and provisions the accelerators when capacity becomes available, runs them uninterrupted for up to seven days, and is discounted compared with on-demand, which suits short jobs whose start time is flexible. Spot VMs are cheaper still but can be preempted mid-run, which the firm cannot accept. A three-year commitment pays for GPUs all year when they are needed only a few days a month. On-demand VMs are available immediately but at full price, and keeping them running between jobs wastes money.",
    referenceUrl: "https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models",
    tags: ["Dynamic Workload Scheduler", "Flex-start", "Cost control"]
  },
  {
    id: "gcp-cdl-288",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A guaranteed three-week training window",
    scenario: "An AI lab has planned a model pre-training run that needs 256 GPUs continuously for 21 days starting on the first of next month, timed to a product launch. It must know in advance that the capacity will be there, but does not want any commitment beyond those three weeks.",
    question: "Which option should the lab use?",
    options: [
      { id: 'A', text: "A pool of Spot VMs with checkpoints saved every hour" },
      { id: 'B', text: "A future reservation in calendar mode for the 21-day window" },
      { id: 'C', text: "Flex-start requests submitted on the morning the run begins" },
      { id: 'D', text: "A one-year committed use discount on the full 256 GPUs" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Future reservations in calendar mode, a Dynamic Workload Scheduler option, let customers book GPU or TPU capacity for a fixed block of up to 90 days starting on a chosen future date, much like booking a hotel, which gives assurance for a planned run without a longer commitment. Flex-start provisions when capacity frees up and runs for at most seven days, so it guarantees neither the start date nor 21 days. A one-year commitment far exceeds the three weeks needed. Spot VMs can be reclaimed at any time, so a large continuous run could not rely on them.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/future-reservations-calendar-mode-overview",
    tags: ["Calendar mode", "Dynamic Workload Scheduler", "Reservations"]
  },
  {
    id: "gcp-cdl-289",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Cheapest way to score a year of photos",
    scenario: "A real-estate portal wants to run an image model over 30 million archived listing photos. The job can be paused and resumed at any point, has no deadline beyond the end of the month, and the only priority is the lowest possible compute cost.",
    question: "Which consumption option should the portal use?",
    options: [
      { id: 'A', text: "Spot VMs, which are deeply discounted but may be preempted" },
      { id: 'B', text: "Standard reservations that assure capacity for the whole month" },
      { id: 'C', text: "A three-year committed use discount on a fixed GPU fleet" },
      { id: 'D', text: "On-demand GPU VMs that are created immediately at list price" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Spot VMs use spare Google Cloud capacity at a large discount and can be reclaimed at any time, which is acceptable for a fault-tolerant batch job that can resume where it stopped and has a loose deadline. Standard reservations assure capacity, which this job does not need, and are billed whether used or not. On-demand VMs cost full price. A three-year commitment locks in spending for years for a job that lasts weeks.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/spot",
    tags: ["Spot VMs", "Batch inference", "Cost control"]
  },
  {
    id: "gcp-cdl-290",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Worried about proprietary AI tooling",
    scenario: "A bank's head of ML fears that adopting AI Hypercomputer would force her team to abandon the open-source framework code and Kubernetes skills it already has and learn proprietary tools. She asks how AI Hypercomputer's software layer works.",
    question: "Which statement addresses her concern?",
    options: [
      { id: 'A', text: "It supports open frameworks such as PyTorch and JAX, orchestrated with GKE" },
      { id: 'B', text: "It requires every model to be rebuilt in BigQuery ML using SQL statements" },
      { id: 'C', text: "It runs only models written in a Google-specific language built for TPUs" },
      { id: 'D', text: "It accepts only models that are first imported into the Gemini Enterprise app" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AI Hypercomputer's software layer is built on open software: optimised versions of popular ML frameworks such as PyTorch, JAX and TensorFlow, plus orchestration through Google Kubernetes Engine or Slurm via Cluster Director, so teams keep their existing code and Kubernetes skills. There is no Google-only programming language required; TPUs are programmed through frameworks like JAX and PyTorch. BigQuery ML is a separate SQL-based option, not a requirement. The Gemini Enterprise app is an employee product, unrelated to where models are trained.",
    referenceUrl: "https://docs.cloud.google.com/ai-hypercomputer/docs/overview",
    tags: ["AI Hypercomputer", "Open software", "GKE"]
  },
  {
    id: "gcp-cdl-291",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Serving a recommendation model around the clock",
    scenario: "A streaming service's recommendation model runs inference on the same GPU fleet 24 hours a day, and traffic has been stable for two years with modest growth forecast. Finance wants the lowest cost for this always-on usage while keeping capacity that is never interrupted.",
    question: "Which approach should finance endorse for this fleet?",
    options: [
      { id: 'A', text: "Request Flex-start capacity every week so that each block of GPUs runs for up to seven days at a time" },
      { id: 'B', text: "Keep the entire fleet on on-demand pricing so no commitment is made beyond the current billing month" },
      { id: 'C', text: "Buy committed use discounts for the steady baseline and use on-demand capacity for any extra peaks" },
      { id: 'D', text: "Run the fleet on Spot VMs and let autoscaling replace any preempted instances as they are reclaimed" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "For predictable, always-on usage, committed use discounts trade a one- or three-year commitment for a significantly lower price on resources that run without interruption, and on-demand capacity covers any peaks above the baseline; this is the flexible-consumption principle of matching the pricing model to the usage pattern. Spot VMs can be preempted, which risks service quality for a customer-facing model. Weekly Flex-start requests add scheduling risk and are designed for short, flexible jobs, not continuous serving. Staying fully on-demand is the most expensive option for steady use.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/instances/committed-use-discounts-overview",
    tags: ["Committed use discounts", "Inference", "Cost control"]
  },
  {
    id: "gcp-cdl-292",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "SQL analysts asked to predict late payments",
    scenario: "A wholesaler's invoicing history already sits in BigQuery. Its finance analysts are fluent in SQL but have never used Python or ML frameworks, and they want to predict which invoices will be paid late without moving data anywhere else.",
    question: "What should the analysts use?",
    options: [
      { id: 'A', text: "Looker dashboards that chart last year's late payments per customer" },
      { id: 'B', text: "BigQuery ML, creating and running models with standard SQL statements" },
      { id: 'C', text: "Agent Platform custom training with Python code in managed containers" },
      { id: 'D', text: "The Vision API, analysing scanned copies of the invoices for patterns" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "BigQuery ML lets users create, train, evaluate and run machine learning models directly in BigQuery with SQL statements such as CREATE MODEL and ML.PREDICT, so SQL-fluent analysts can build a late-payment classifier where the data already lives. Custom training requires Python and ML engineering. The Vision API extracts features from images; it does not predict payment behaviour from history. Looker dashboards describe what happened, whereas the requirement is to predict future outcomes.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/bqml-introduction",
    tags: ["BigQuery ML", "SQL", "Classification"]
  },
  {
    id: "gcp-cdl-293",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Data that governance says must not be exported",
    scenario: "A health insurer's member data is in BigQuery with strict access policies, and the governance office forbids copying it into other tools or files for model training. The analytics team still needs to build a model that predicts hospital readmission risk.",
    question: "Why is BigQuery ML a strong fit here?",
    options: [
      { id: 'A', text: "It sends records to a public model that is shared with other insurers" },
      { id: 'B', text: "It exports the data to CSV files so an external tool can train on them" },
      { id: 'C', text: "It copies the tables into a separate ML project that has looser security" },
      { id: 'D', text: "It trains models inside BigQuery, so data stays under existing controls" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BigQuery ML brings machine learning to the data: models are trained and run within BigQuery, so the member data never leaves the warehouse and remains governed by the same IAM permissions, policies and audit logs, which reduces both complexity and governance risk. Copying tables into a less secure project, sending records to a shared public model, or exporting CSV files would all violate the governance office's rule against moving the data.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/bqml-introduction",
    tags: ["BigQuery ML", "Data governance"]
  },
  {
    id: "gcp-cdl-294",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Forecasting next quarter's daily sales per store",
    scenario: "A bakery chain keeps five years of daily sales per store in BigQuery. The planning team wants a forecast of daily sales for each of its 300 stores for the next 90 days, reflecting weekly patterns and holidays, and prefers to stay in SQL.",
    question: "Which BigQuery ML model type fits this task?",
    options: [
      { id: 'A', text: "Matrix factorization, recommending products to shoppers" },
      { id: 'B', text: "Logistic regression, predicting a yes-or-no outcome" },
      { id: 'C', text: "K-means clustering, grouping stores with similar sales" },
      { id: 'D', text: "ARIMA_PLUS, a time series forecasting model" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "ARIMA_PLUS is BigQuery ML's time series model: it forecasts future values from historical sequences, handles seasonality and holiday effects, and can train many series at once, such as one per store, all in SQL. K-means groups similar items but does not project values forward. Matrix factorization produces recommendations from user and item interactions. Logistic regression predicts a category, such as yes or no, not a daily quantity over time.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial",
    tags: ["BigQuery ML", "Forecasting", "ARIMA_PLUS"]
  },
  {
    id: "gcp-cdl-295",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Customer groups nobody has defined yet",
    scenario: "A sporting goods retailer wants to discover natural segments among its two million loyalty customers based on purchase frequency, spend and favourite categories, to design targeted campaigns. No one has assigned customers to segments in advance, and the data is in BigQuery.",
    question: "Which BigQuery ML approach suits this goal?",
    options: [
      { id: 'A', text: "An ARIMA_PLUS model that forecasts future purchase volume over time" },
      { id: 'B', text: "A logistic regression model trained on a column of assigned segments" },
      { id: 'C', text: "A linear regression model that predicts each member's annual spend" },
      { id: 'D', text: "A k-means clustering model that groups members with similar behaviour" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "K-means clustering is an unsupervised technique: it groups records with similar characteristics without needing labels, which is exactly how to discover customer segments no one has defined yet; BigQuery ML trains it with SQL over the loyalty tables. Linear regression predicts a number and needs a known target. ARIMA_PLUS forecasts time series rather than grouping customers. Logistic regression is supervised and would require the segment labels that do not exist.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial",
    tags: ["BigQuery ML", "K-means", "Segmentation"]
  },
  {
    id: "gcp-cdl-296",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Suggesting films from viewers' past ratings",
    scenario: "An independent film streaming service stores which films each subscriber has watched and the star scores they gave in BigQuery. The product team wants personalised 'you might also like' suggestions and has only SQL skills.",
    question: "Which BigQuery ML model type should the team use?",
    options: [
      { id: 'A', text: "Principal component analysis, which reduces the number of columns" },
      { id: 'B', text: "Matrix factorization, which learns preferences from user-item ratings" },
      { id: 'C', text: "K-means clustering, which groups the films into categories of similar titles" },
      { id: 'D', text: "ARIMA_PLUS, which forecasts how many viewers watch each week" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Matrix factorization is BigQuery ML's recommendation model: trained on user, item and rating data, it learns latent preferences and predicts how each user would rate items they have not yet seen, which powers personalised suggestions. Clustering films groups them but does not personalise to each viewer. ARIMA_PLUS forecasts aggregate values over time. PCA reduces dimensionality and is a preprocessing technique, not a recommender.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial",
    tags: ["BigQuery ML", "Recommendations", "Matrix factorization"]
  },
  {
    id: "gcp-cdl-297",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Summarising reviews without leaving the warehouse",
    scenario: "A consumer electronics brand has four million free-text product reviews in a BigQuery table. Analysts want a one-sentence summary and a list of complaints for each review, written back to a new table, using only SQL and without building a separate pipeline.",
    question: "Which approach meets the requirement?",
    options: [
      { id: 'A', text: "Create a BigQuery ML k-means model over the review text column and use each cluster number as a summary of the review." },
      { id: 'B', text: "Build a Looker dashboard with a word cloud of frequent review terms and share it with the product managers." },
      { id: 'C', text: "Export the reviews to Cloud Storage, translate them with Cloud Translation and then load them back into a new table." },
      { id: 'D', text: "Create a remote model in BigQuery ML over a Gemini model and call a generative AI function on the review column in SQL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BigQuery ML can create a remote model that points to a Gemini model on Agent Platform, and generative AI functions such as AI.GENERATE_TEXT or AI.GENERATE then send each row's text to Gemini from a SQL query and return generated summaries that can be written to a table, all without leaving BigQuery or building a pipeline. K-means assigns numeric cluster IDs, which are not written summaries. Translation changes language rather than summarising, and it requires an export pipeline. A word-cloud dashboard does not produce per-review summaries.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/generate-text",
    tags: ["BigQuery ML", "Gemini", "Generative AI"]
  },
  {
    id: "gcp-cdl-298",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Choosing between two candidate churn models",
    scenario: "A telecom analytics team has trained two BigQuery ML models to predict customer churn, one using billing features and one adding support-ticket features. The manager wants to know which is more accurate on held-out data quickly and pick the better one, staying in SQL.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Export both models to Cloud Storage and ask a data engineer to benchmark them in a Python notebook" },
      { id: 'B', text: "Call ML.EVALUATE on each model and compare metrics such as precision, recall and ROC AUC" },
      { id: 'C', text: "Deploy both models to production and wait a quarter to see which one customers prefer" },
      { id: 'D', text: "Call ML.FORECAST on each model and choose the one that predicts higher future churn" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ML.EVALUATE returns evaluation metrics for a BigQuery ML model, for classification models including precision, recall, accuracy and ROC AUC, so analysts can compare candidate models side by side in SQL within minutes; this rapid experimentation is one of BigQuery ML's benefits. Exporting to Python adds effort and another team for something SQL already does. ML.FORECAST applies to time series models, not churn classifiers, and a higher forecast says nothing about accuracy. Waiting a quarter in production delays the decision and exposes customers to the weaker model.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-evaluate",
    tags: ["BigQuery ML", "Model evaluation", "Experimentation"]
  },
  {
    id: "gcp-cdl-299",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Why the CDO backs ML for analysts",
    scenario: "A chief data officer wants her 40 BI analysts, rather than the small data science team, to own straightforward predictive models such as propensity to buy. A skeptical VP asks what business benefit BigQuery ML brings to that plan.",
    question: "Which benefit should the CDO cite?",
    options: [
      { id: 'A', text: "It guarantees that every model is more accurate than one built by data scientists" },
      { id: 'B', text: "It replaces the data warehouse, so BigQuery tables no longer need to be kept" },
      { id: 'C', text: "It removes any need for good-quality, representative training data in the tables" },
      { id: 'D', text: "It lets analysts build ML models with SQL they know, widening who can use ML" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BigQuery ML democratises machine learning: analysts use familiar SQL to build and run models where the data already lives, so many more people can create predictive models and data scientists are freed for harder problems. It does not guarantee better accuracy than specialists; model quality still depends on the problem and the data. Good, representative data remains essential. BigQuery ML runs inside BigQuery, so it depends on the warehouse rather than replacing it.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/bqml-introduction",
    tags: ["BigQuery ML", "Democratization"]
  },
  {
    id: "gcp-cdl-300",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Telling a customer why credit was declined",
    scenario: "A consumer lender scores credit limit requests with a BigQuery ML model. Regulators require that, for any declined request, the lender can state which factors, such as utilisation or payment history, most influenced that particular decision.",
    question: "Which BigQuery ML capability supports this requirement?",
    options: [
      { id: 'A', text: "An ARIMA_PLUS model that forecasts how many requests will be declined" },
      { id: 'B', text: "ML.EXPLAIN_PREDICT, which returns feature attributions for each prediction" },
      { id: 'C', text: "A k-means model that places each declined applicant into a similar cluster" },
      { id: 'D', text: "ML.EVALUATE, which returns overall accuracy metrics for the whole model" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Explainable AI in BigQuery ML, through ML.EXPLAIN_PREDICT, returns each prediction together with feature attributions showing how much each input contributed, so the lender can state the main reasons behind an individual decision; this supports responsible, transparent AI. ML.EVALUATE describes the model's aggregate performance, not the drivers of one decision. A cluster assignment shows similarity to other applicants rather than reasons for a specific outcome. Forecasting decline volumes says nothing about why any applicant was declined.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/xai-overview",
    tags: ["BigQuery ML", "Explainable AI", "Responsible AI"]
  }
];

export default GCP_CDL_QUESTIONS_12;
