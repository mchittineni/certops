export const AWS_AIF_FLASHCARDS_2 = [
  {
    id: 'aws-aif-fc-26',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Supervised, unsupervised and reinforcement learning: what does each learn from?',
    hint: 'Answers, no answers, or feedback on actions.',
    back: '<strong>Supervised</strong>: labeled examples, inputs paired with the correct output (predict churn from customers who did or did not churn). <strong>Unsupervised</strong>: unlabeled data, finding structure such as groups or anomalies on its own (customer segments). <strong>Reinforcement</strong>: an agent acting in an environment and receiving rewards or penalties, learning by trial and error which actions pay off (robot control, game play).',
    tags: ['Learning paradigms', 'Supervised learning']
  },
  {
    id: 'aws-aif-fc-27',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Regression, classification or clustering: what one question picks the technique?',
    hint: 'Look at what the output is supposed to be.',
    back: 'Ask what the <strong>output</strong> is. A <strong>number on a continuous scale</strong> (price, demand, minutes of delay) means <strong>regression</strong>. A <strong>category from a known list</strong> (fraud or not, one of 12 departments) means <strong>classification</strong>. <strong>Groups nobody has defined yet</strong>, with no labels (customer segments, related articles) means <strong>clustering</strong>. The first two are supervised; clustering is unsupervised.',
    tags: ['ML techniques', 'Problem framing']
  },
  {
    id: 'aws-aif-fc-28',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Binary vs multi-class vs multi-label classification: how do they differ?',
    hint: 'How many classes exist, and how many can apply at once?',
    back: '<strong>Binary</strong>: exactly two classes, one per example (spam or not spam). <strong>Multi-class</strong>: more than two classes, still exactly one per example (route an email to one of 12 departments). <strong>Multi-label</strong>: several labels can apply to the same example at once (a photo tagged beach, dog and sunset). The choice follows from the business output, not from the algorithm.',
    tags: ['Classification', 'Terminology']
  },
  {
    id: 'aws-aif-fc-29',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Define agent, environment, state, action, reward and policy in reinforcement learning.',
    hint: 'Who acts, where, on what, and how it is scored.',
    back: 'The <strong>agent</strong> is the learner and decision-maker. The <strong>environment</strong> is everything it interacts with. The <strong>state</strong> is the current situation the agent observes. An <strong>action</strong> is a choice it makes. The <strong>reward</strong> is the numeric feedback after an action. The <strong>policy</strong> is the learned strategy mapping states to actions, trained to maximize cumulative reward over time.',
    tags: ['Reinforcement learning', 'Terminology']
  },
  {
    id: 'aws-aif-fc-30',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is the exploration vs exploitation tradeoff in reinforcement learning?',
    hint: 'Try something new, or repeat what worked?',
    back: '<strong>Exploitation</strong> means choosing the action currently believed to give the best reward. <strong>Exploration</strong> means trying other actions to discover whether something better exists. Pure exploitation can lock the agent into a mediocre strategy; pure exploration wastes reward. Agents balance the two, for example by taking a random action a small fraction of the time and exploring less as they learn.',
    tags: ['Reinforcement learning', 'Exploration']
  },
  {
    id: 'aws-aif-fc-31',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What are semi-supervised and self-supervised learning?',
    hint: 'A few labels, or labels the data makes for itself.',
    back: '<strong>Semi-supervised</strong> learning trains on a small labeled set plus a large unlabeled set, useful when labels are expensive. <strong>Self-supervised</strong> learning creates its own targets from unlabeled data, for example hiding the next word or a patch of an image and learning to predict it. Self-supervised pre-training on huge unlabeled corpora is how large language models and other foundation models learn.',
    tags: ['Learning paradigms', 'Self-supervised learning']
  },
  {
    id: 'aws-aif-fc-32',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What are the three main kinds of value AI and ML bring to a business?',
    hint: 'Help people, handle volume, remove toil.',
    back: '<strong>Assisting human decision making</strong>: surfacing risk scores, priorities or recommendations so experts decide faster and more consistently. <strong>Solution scalability</strong>: handling volumes no team could, such as translating millions of listings or screening every transaction. <strong>Automation</strong>: taking over repetitive tasks such as document data entry or ticket routing so staff focus on judgment work.',
    tags: ['AI value', 'Use cases']
  },
  {
    id: 'aws-aif-fc-33',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What signals tell you ML is the wrong tool for a problem?',
    hint: 'Exact answers, small payoffs, missing data.',
    back: 'ML is a poor fit when <strong>the exact outcome is defined by known rules</strong> (tax formulas, age checks), when <strong>errors are not tolerable</strong> and must be zero, when <strong>costs outweigh benefits</strong> (build and run costs exceed the savings), when a <strong>simple heuristic already works</strong>, or when there is <strong>not enough relevant data</strong>. ML predicts probabilities; if you need a guaranteed answer, write deterministic code.',
    tags: ['When not to use ML', 'Cost-benefit']
  },
  {
    id: 'aws-aif-fc-34',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Which costs belong in a cost-benefit analysis for an ML project?',
    hint: 'Building it is only the first bill.',
    back: 'Costs: <strong>data collection and labeling</strong>, <strong>engineering and data science time</strong>, <strong>training compute</strong>, <strong>inference hosting</strong> for as long as the model runs, <strong>monitoring and retraining</strong> as data drifts, and the <strong>cost of wrong predictions</strong> (false positives and negatives). Weigh them against measurable benefits such as revenue gained, hours saved or losses avoided, compared with the current process rather than with nothing.',
    tags: ['Cost-benefit', 'Business value']
  },
  {
    id: 'aws-aif-fc-35',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'How can you detect anomalies when you have no labeled examples of them?',
    hint: 'Learn normal, flag what does not fit.',
    back: 'Use <strong>unsupervised anomaly detection</strong>: the model learns what normal data looks like and scores how far each new point departs from it. SageMaker\'s built-in <strong>Random Cut Forest</strong> algorithm assigns an anomaly score to each record, which suits sensor streams, traffic metrics or transactions with no fault history. Once some confirmed anomalies accumulate, a supervised classifier can be added.',
    tags: ['Anomaly detection', 'Unsupervised learning']
  },
  {
    id: 'aws-aif-fc-36',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What must you choose before running k-means, and how is it usually picked?',
    hint: 'The algorithm will not decide it for you.',
    back: 'You must choose <strong>k, the number of clusters</strong>. A common method is the <strong>elbow method</strong>: run k-means for a range of k values, plot the within-cluster distance, and pick the point where adding clusters stops reducing it much. Business usefulness matters too; five segments a marketing team can act on beat twelve it cannot. Features should be scaled because k-means relies on distances.',
    tags: ['Clustering', 'K-means']
  },
  {
    id: 'aws-aif-fc-37',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is dimensionality reduction, and why do it before training?',
    hint: 'Fewer columns, most of the information.',
    back: 'Dimensionality reduction compresses many input features into fewer ones that keep most of the information. <strong>Principal component analysis (PCA)</strong>, an unsupervised technique available as a SageMaker built-in algorithm, combines correlated columns into components ordered by how much variance they explain. It speeds training, reduces noise and overfitting from redundant features, and helps visualise high-dimensional data.',
    tags: ['Dimensionality reduction', 'PCA']
  },
  {
    id: 'aws-aif-fc-38',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'A model outputs a probability from 0 to 1. Is that regression or classification?',
    hint: 'Judge by the target, not the output format.',
    back: 'Usually <strong>classification</strong>. The deciding factor is the <strong>target being learned</strong>: if the truth is a category (default or not), the model is a classifier even though it outputs a class probability, and a <strong>threshold</strong> turns that probability into a decision. Logistic regression is a classification algorithm despite its name. It is regression only when the target itself is a continuous quantity.',
    tags: ['Problem framing', 'Classification']
  },
  {
    id: 'aws-aif-fc-39',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Give four business examples of regression problems.',
    hint: 'Every answer is a number on a scale.',
    back: 'Regression predicts a continuous number: <strong>house or used-car prices</strong>, <strong>units of a product sold next week</strong>, <strong>minutes of flight or delivery delay</strong>, <strong>a customer\'s lifetime value</strong>, <strong>energy demand for tomorrow</strong>, or <strong>insurance claim cost</strong>. If the business needs a quantity to feed another system, such as a reorder amount, regression is the natural framing.',
    tags: ['Regression', 'Use cases']
  },
  {
    id: 'aws-aif-fc-40',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Give four business examples of classification problems.',
    hint: 'Every answer is a label from a known list.',
    back: 'Classification assigns a category: <strong>fraudulent or legitimate transaction</strong>, <strong>will or will not churn</strong>, <strong>spam or not spam</strong>, <strong>which department should handle a ticket</strong>, <strong>which product defect type appears in a photo</strong>, or <strong>positive, neutral or negative review sentiment</strong>. It needs historical examples labeled with the correct category.',
    tags: ['Classification', 'Use cases']
  },
  {
    id: 'aws-aif-fc-41',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Market-basket analysis: which learning type is it, and what does it produce?',
    hint: 'Bought together, discovered not labeled.',
    back: 'Market-basket analysis is <strong>unsupervised</strong> learning, specifically <strong>association rule mining</strong>. From transactions alone it finds items that co-occur more often than chance ("customers who buy pasta often buy sauce"), measured by support, confidence and lift. Retailers use the rules for shelf placement, bundles and cross-sell prompts. No labels are involved; the patterns come from the baskets themselves.',
    tags: ['Unsupervised learning', 'Association']
  },
  {
    id: 'aws-aif-fc-42',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What is reward hacking, and how do you prevent it?',
    hint: 'The agent does exactly what you scored, not what you meant.',
    back: 'Reward hacking is when a reinforcement learning agent maximizes its reward in an unintended way, for example a picking robot rewarded only for speed that crashes into shelves. Prevent it by <strong>designing the reward to reflect the full objective</strong>, including penalties for unsafe or undesired behavior, by <strong>training in simulation</strong> where mistakes are cheap, and by <strong>reviewing learned behavior</strong> before real-world deployment.',
    tags: ['Reinforcement learning', 'Reward design']
  },
  {
    id: 'aws-aif-fc-43',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Why is labeled data often the most expensive part of a supervised project, and how is the cost reduced?',
    hint: 'People have to supply the answers.',
    back: 'Labels usually require <strong>human judgment</strong>, often from scarce experts such as radiologists or quality engineers, across thousands of examples. Ways to reduce cost: <strong>SageMaker Ground Truth</strong> to manage labeling workforces, <strong>active learning</strong> where a model labels easy items and people handle uncertain ones, reusing labels captured in existing workflows, and starting from <strong>pre-trained models</strong> that need fewer labeled examples.',
    tags: ['Labeled data', 'Ground Truth']
  },
  {
    id: 'aws-aif-fc-44',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Why can an ML model never guarantee a specific outcome?',
    hint: 'Probabilities, not proofs.',
    back: 'ML models learn statistical patterns and produce <strong>probabilistic predictions</strong>: a best estimate with some error rate. Even a 99% accurate model is wrong on 1 in 100 cases, and accuracy can drift as data changes. When a process needs a guaranteed, exact result, such as a statutory calculation, use <strong>deterministic rules or code</strong>; use ML where patterns are too complex or changeable to write down.',
    tags: ['When not to use ML', 'Deterministic outcomes']
  },
  {
    id: 'aws-aif-fc-45',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Augment or replace: how should AI usually fit into expert decisions?',
    hint: 'Who signs off?',
    back: 'For high-stakes decisions such as diagnoses, credit or claims, AI usually <strong>augments</strong> experts: it prioritizes, flags risk or drafts a recommendation, and a qualified person makes and owns the final decision. This keeps accountability, catches model errors and builds trust. Full automation suits <strong>low-risk, high-volume</strong> decisions where occasional errors are cheap and reversible.',
    tags: ['Decision support', 'AI value']
  },
  {
    id: 'aws-aif-fc-46',
    difficulty: 'hard',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Why should every ML project be compared with a simple baseline first?',
    hint: 'Beat the average, or do not ship.',
    back: 'A <strong>baseline</strong>, such as last month\'s average, the most common class or an existing rule, shows what performance costs almost nothing. If the ML model barely beats it, the added cost, complexity and maintenance are not justified. Baselines also catch misleading metrics: a fraud model with 99.5% accuracy is worthless if 99.5% of transactions are legitimate and "never fraud" scores the same.',
    tags: ['Cost-benefit', 'Evaluation']
  },
  {
    id: 'aws-aif-fc-47',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'What does an ML use case need in terms of data before it is worth pursuing?',
    hint: 'Enough, relevant, and like the future.',
    back: 'Enough <strong>relevant, good-quality data</strong> that is <strong>representative</strong> of the cases the model will face in production, and, for supervised learning, reliable <strong>labels</strong>. A new product with no history, or data from a different population than the target users, is a warning sign: the model cannot learn patterns it has never seen.',
    tags: ['Data readiness', 'Use cases']
  },
  {
    id: 'aws-aif-fc-48',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Where does forecasting fit among ML techniques?',
    hint: 'A number, predicted from what came before.',
    back: 'Forecasting is <strong>supervised regression on time-series data</strong>: it predicts future numeric values (demand, traffic, revenue) from past values and related signals such as holidays or weather. It differs from ordinary regression because <strong>time order matters</strong>: features include lags and seasonality, and evaluation must train on the past and test on later periods. SageMaker offers DeepAR for this.',
    tags: ['Forecasting', 'Regression']
  },
  {
    id: 'aws-aif-fc-49',
    difficulty: 'medium',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Clustering vs classification: both output groups, so what separates them?',
    hint: 'Were the groups known before training?',
    back: '<strong>Classification</strong> is supervised: the categories are <strong>defined in advance</strong> and the model learns from labeled examples to assign new items to them. <strong>Clustering</strong> is unsupervised: there are <strong>no predefined categories</strong>, and the algorithm discovers groups of similar items, which people then interpret and name. If you already have labels, classify; if you want the data to reveal the groups, cluster.',
    tags: ['Clustering', 'Classification']
  },
  {
    id: 'aws-aif-fc-50',
    difficulty: 'easy',
    certId: 'aws-aif',
    domainId: 'd1',
    front: 'Name four real-world uses of reinforcement learning.',
    hint: 'Anywhere an agent acts, observes and improves.',
    back: 'Reinforcement learning suits sequential decisions with feedback: <strong>robot control and navigation</strong>, <strong>game-playing agents</strong>, <strong>dynamic pricing</strong>, <strong>building energy and HVAC optimisation</strong>, <strong>autonomous driving research</strong> and <strong>ad bidding</strong>. It is also used in <strong>RLHF</strong> to align language models with human preferences. It usually trains in simulation first because real trial and error can be costly.',
    tags: ['Reinforcement learning', 'Use cases']
  }
];

export default AWS_AIF_FLASHCARDS_2;
