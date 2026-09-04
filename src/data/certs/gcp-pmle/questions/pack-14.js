export const GCP_PMLE_QUESTIONS_14 = [
  {
    id: "gcp-pmle-326",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Encoding Categorical Features (One-Hot vs Target vs Embeddings): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Feature Engineering to encode a categorical feature representing 50,000 distinct product SKU identifiers without causing dimensionality explosion or memory exhaustion in a neural network.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? One-hot encoding for low-cardinality vs entity embeddings for high-cardinality categories is under consideration.",
    options: [
      { id: 'A', text: "Apply one-hot encoding creating 50,000 binary columns for every record." },
      { id: 'B', text: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing." },
      { id: 'C', text: "Drop the product SKU feature completely from the training dataset." },
      { id: 'D', text: "Assign arbitrary sequential integer IDs (1 to 50,000) and treat the feature as a continuous linear variable." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing. One-hot encoding high-cardinality categorical features (like 50,000 SKUs) causes extreme sparsity and memory bloat. Entity embeddings project high-cardinality categories into dense, low-dimensional continuous vector spaces, capturing semantic relationships between categories.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#categorical_data",
    tags: ["Feature Engineering", "Feature Encoding", "Dr Failover"]
  },
  {
    id: "gcp-pmle-327",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Encoding Categorical Features (One-Hot vs Target vs Embeddings): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Feature Engineering to encode a categorical feature representing 50,000 distinct product SKU identifiers without causing dimensionality explosion or memory exhaustion in a neural network.",
    question: "Which architectural approach should the team select to manage this demand efficiently? One-hot encoding for low-cardinality vs entity embeddings for high-cardinality categories is under consideration.",
    options: [
      { id: 'A', text: "Drop the product SKU feature completely from the training dataset." },
      { id: 'B', text: "Assign arbitrary sequential integer IDs (1 to 50,000) and treat the feature as a continuous linear variable." },
      { id: 'C', text: "Apply one-hot encoding creating 50,000 binary columns for every record." },
      { id: 'D', text: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing. One-hot encoding high-cardinality categorical features (like 50,000 SKUs) causes extreme sparsity and memory bloat. Entity embeddings project high-cardinality categories into dense, low-dimensional continuous vector spaces, capturing semantic relationships between categories.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#categorical_data",
    tags: ["Feature Engineering", "Feature Encoding", "High Load Scale"]
  },
  {
    id: "gcp-pmle-328",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Encoding Categorical Features (One-Hot vs Target vs Embeddings): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Feature Engineering to encode a categorical feature representing 50,000 distinct product SKU identifiers without causing dimensionality explosion or memory exhaustion in a neural network.",
    question: "Which solution properly implements these mandatory security and governance controls? One-hot encoding for low-cardinality vs entity embeddings for high-cardinality categories is under consideration.",
    options: [
      { id: 'A', text: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing." },
      { id: 'B', text: "Drop the product SKU feature completely from the training dataset." },
      { id: 'C', text: "Assign arbitrary sequential integer IDs (1 to 50,000) and treat the feature as a continuous linear variable." },
      { id: 'D', text: "Apply one-hot encoding creating 50,000 binary columns for every record." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing. One-hot encoding high-cardinality categorical features (like 50,000 SKUs) causes extreme sparsity and memory bloat. Entity embeddings project high-cardinality categories into dense, low-dimensional continuous vector spaces, capturing semantic relationships between categories.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#categorical_data",
    tags: ["Feature Engineering", "Feature Encoding", "Security Compliance"]
  },
  {
    id: "gcp-pmle-329",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Encoding Categorical Features (One-Hot vs Target vs Embeddings): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Feature Engineering to encode a categorical feature representing 50,000 distinct product SKU identifiers without causing dimensionality explosion or memory exhaustion in a neural network.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? One-hot encoding for low-cardinality vs entity embeddings for high-cardinality categories is under consideration.",
    options: [
      { id: 'A', text: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing." },
      { id: 'B', text: "Assign arbitrary sequential integer IDs (1 to 50,000) and treat the feature as a continuous linear variable." },
      { id: 'C', text: "Apply one-hot encoding creating 50,000 binary columns for every record." },
      { id: 'D', text: "Drop the product SKU feature completely from the training dataset." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing. One-hot encoding high-cardinality categorical features (like 50,000 SKUs) causes extreme sparsity and memory bloat. Entity embeddings project high-cardinality categories into dense, low-dimensional continuous vector spaces, capturing semantic relationships between categories.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#categorical_data",
    tags: ["Feature Engineering", "Feature Encoding", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-330",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Encoding Categorical Features (One-Hot vs Target vs Embeddings): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Feature Engineering to encode a categorical feature representing 50,000 distinct product SKU identifiers without causing dimensionality explosion or memory exhaustion in a neural network.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? One-hot encoding for low-cardinality vs entity embeddings for high-cardinality categories is under consideration.",
    options: [
      { id: 'A', text: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing." },
      { id: 'B', text: "Apply one-hot encoding creating 50,000 binary columns for every record." },
      { id: 'C', text: "Assign arbitrary sequential integer IDs (1 to 50,000) and treat the feature as a continuous linear variable." },
      { id: 'D', text: "Drop the product SKU feature completely from the training dataset." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Train low-dimensional categorical entity embeddings (e.g. 64 dimensions) or use feature hashing. One-hot encoding high-cardinality categorical features (like 50,000 SKUs) causes extreme sparsity and memory bloat. Entity embeddings project high-cardinality categories into dense, low-dimensional continuous vector spaces, capturing semantic relationships between categories.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#categorical_data",
    tags: ["Feature Engineering", "Feature Encoding", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-331",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Scaling and Normalization (MinMax vs Z-Score vs Robust): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Feature Engineering to scale numerical features with significant positive skewness and extreme outliers before training a gradient-based deep neural network.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Z-score standardization vs MinMax scaling vs log transforms for skewed features is under consideration.",
    options: [
      { id: 'A', text: "Apply MinMax scaling between 0 and 1 without handling extreme outliers." },
      { id: 'B', text: "Divide all values by a constant hardcoded integer." },
      { id: 'C', text: "Apply a log transform (or Box-Cox) followed by Z-score standardization." },
      { id: 'D', text: "Leave raw unbounded numerical values ranging from 0 to 10,000,000 unchanged." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a log transform (or Box-Cox) followed by Z-score standardization. Gradient-based optimization algorithms perform poorly when features have wildly different scales or heavy skew. Applying a log transform compresses exponential tails, and subsequent Z-score standardization centers features at zero mean and unit variance, stabilizing gradient descent.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#numerical_data",
    tags: ["Feature Engineering", "Feature Scaling", "Dr Failover"]
  },
  {
    id: "gcp-pmle-332",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Scaling and Normalization (MinMax vs Z-Score vs Robust): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Feature Engineering to scale numerical features with significant positive skewness and extreme outliers before training a gradient-based deep neural network.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Z-score standardization vs MinMax scaling vs log transforms for skewed features is under consideration.",
    options: [
      { id: 'A', text: "Divide all values by a constant hardcoded integer." },
      { id: 'B', text: "Apply MinMax scaling between 0 and 1 without handling extreme outliers." },
      { id: 'C', text: "Apply a log transform (or Box-Cox) followed by Z-score standardization." },
      { id: 'D', text: "Leave raw unbounded numerical values ranging from 0 to 10,000,000 unchanged." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a log transform (or Box-Cox) followed by Z-score standardization. Gradient-based optimization algorithms perform poorly when features have wildly different scales or heavy skew. Applying a log transform compresses exponential tails, and subsequent Z-score standardization centers features at zero mean and unit variance, stabilizing gradient descent.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#numerical_data",
    tags: ["Feature Engineering", "Feature Scaling", "High Load Scale"]
  },
  {
    id: "gcp-pmle-333",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Scaling and Normalization (MinMax vs Z-Score vs Robust): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Feature Engineering to scale numerical features with significant positive skewness and extreme outliers before training a gradient-based deep neural network.",
    question: "Which solution properly implements these mandatory security and governance controls? Z-score standardization vs MinMax scaling vs log transforms for skewed features is under consideration.",
    options: [
      { id: 'A', text: "Divide all values by a constant hardcoded integer." },
      { id: 'B', text: "Leave raw unbounded numerical values ranging from 0 to 10,000,000 unchanged." },
      { id: 'C', text: "Apply a log transform (or Box-Cox) followed by Z-score standardization." },
      { id: 'D', text: "Apply MinMax scaling between 0 and 1 without handling extreme outliers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a log transform (or Box-Cox) followed by Z-score standardization. Gradient-based optimization algorithms perform poorly when features have wildly different scales or heavy skew. Applying a log transform compresses exponential tails, and subsequent Z-score standardization centers features at zero mean and unit variance, stabilizing gradient descent.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#numerical_data",
    tags: ["Feature Engineering", "Feature Scaling", "Security Compliance"]
  },
  {
    id: "gcp-pmle-334",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Scaling and Normalization (MinMax vs Z-Score vs Robust): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Feature Engineering to scale numerical features with significant positive skewness and extreme outliers before training a gradient-based deep neural network.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Z-score standardization vs MinMax scaling vs log transforms for skewed features is under consideration.",
    options: [
      { id: 'A', text: "Divide all values by a constant hardcoded integer." },
      { id: 'B', text: "Leave raw unbounded numerical values ranging from 0 to 10,000,000 unchanged." },
      { id: 'C', text: "Apply a log transform (or Box-Cox) followed by Z-score standardization." },
      { id: 'D', text: "Apply MinMax scaling between 0 and 1 without handling extreme outliers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a log transform (or Box-Cox) followed by Z-score standardization. Gradient-based optimization algorithms perform poorly when features have wildly different scales or heavy skew. Applying a log transform compresses exponential tails, and subsequent Z-score standardization centers features at zero mean and unit variance, stabilizing gradient descent.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#numerical_data",
    tags: ["Feature Engineering", "Feature Scaling", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-335",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Scaling and Normalization (MinMax vs Z-Score vs Robust): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Feature Engineering to scale numerical features with significant positive skewness and extreme outliers before training a gradient-based deep neural network.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Z-score standardization vs MinMax scaling vs log transforms for skewed features is under consideration.",
    options: [
      { id: 'A', text: "Apply MinMax scaling between 0 and 1 without handling extreme outliers." },
      { id: 'B', text: "Leave raw unbounded numerical values ranging from 0 to 10,000,000 unchanged." },
      { id: 'C', text: "Divide all values by a constant hardcoded integer." },
      { id: 'D', text: "Apply a log transform (or Box-Cox) followed by Z-score standardization." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apply a log transform (or Box-Cox) followed by Z-score standardization. Gradient-based optimization algorithms perform poorly when features have wildly different scales or heavy skew. Applying a log transform compresses exponential tails, and subsequent Z-score standardization centers features at zero mean and unit variance, stabilizing gradient descent.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#numerical_data",
    tags: ["Feature Engineering", "Feature Scaling", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-336",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Crosses and Non-Linear Combinations: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Feature Engineering to enable a linear model to learn non-linear spatial interactions between latitude and longitude coordinates without increasing model architecture complexity.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Feature crosses capturing non-linear interactions in linear and boosted tree models is under consideration.",
    options: [
      { id: 'A', text: "Drop geographic coordinates and use only customer IP addresses." },
      { id: 'B', text: "Add raw latitude and longitude together as a single scalar sum." },
      { id: 'C', text: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells." },
      { id: 'D', text: "Multiply latitude by a random floating-point scalar constant." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells. A feature cross is a synthetic feature formed by multiplying (crossing) two or more features. Feature crosses allow linear models to learn non-linear relationships across combinatorial spaces (such as geographic coordinate grids or time-of-day x day-of-week).",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/feature-crosses/video-lecture",
    tags: ["Feature Engineering", "Feature Engineering", "Dr Failover"]
  },
  {
    id: "gcp-pmle-337",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Crosses and Non-Linear Combinations: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Feature Engineering to enable a linear model to learn non-linear spatial interactions between latitude and longitude coordinates without increasing model architecture complexity.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Feature crosses capturing non-linear interactions in linear and boosted tree models is under consideration.",
    options: [
      { id: 'A', text: "Multiply latitude by a random floating-point scalar constant." },
      { id: 'B', text: "Drop geographic coordinates and use only customer IP addresses." },
      { id: 'C', text: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells." },
      { id: 'D', text: "Add raw latitude and longitude together as a single scalar sum." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells. A feature cross is a synthetic feature formed by multiplying (crossing) two or more features. Feature crosses allow linear models to learn non-linear relationships across combinatorial spaces (such as geographic coordinate grids or time-of-day x day-of-week).",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/feature-crosses/video-lecture",
    tags: ["Feature Engineering", "Feature Engineering", "High Load Scale"]
  },
  {
    id: "gcp-pmle-338",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Crosses and Non-Linear Combinations: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Feature Engineering to enable a linear model to learn non-linear spatial interactions between latitude and longitude coordinates without increasing model architecture complexity.",
    question: "Which solution properly implements these mandatory security and governance controls? Feature crosses capturing non-linear interactions in linear and boosted tree models is under consideration.",
    options: [
      { id: 'A', text: "Multiply latitude by a random floating-point scalar constant." },
      { id: 'B', text: "Drop geographic coordinates and use only customer IP addresses." },
      { id: 'C', text: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells." },
      { id: 'D', text: "Add raw latitude and longitude together as a single scalar sum." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells. A feature cross is a synthetic feature formed by multiplying (crossing) two or more features. Feature crosses allow linear models to learn non-linear relationships across combinatorial spaces (such as geographic coordinate grids or time-of-day x day-of-week).",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/feature-crosses/video-lecture",
    tags: ["Feature Engineering", "Feature Engineering", "Security Compliance"]
  },
  {
    id: "gcp-pmle-339",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Crosses and Non-Linear Combinations: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Feature Engineering to enable a linear model to learn non-linear spatial interactions between latitude and longitude coordinates without increasing model architecture complexity.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Feature crosses capturing non-linear interactions in linear and boosted tree models is under consideration.",
    options: [
      { id: 'A', text: "Multiply latitude by a random floating-point scalar constant." },
      { id: 'B', text: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells." },
      { id: 'C', text: "Drop geographic coordinates and use only customer IP addresses." },
      { id: 'D', text: "Add raw latitude and longitude together as a single scalar sum." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells. A feature cross is a synthetic feature formed by multiplying (crossing) two or more features. Feature crosses allow linear models to learn non-linear relationships across combinatorial spaces (such as geographic coordinate grids or time-of-day x day-of-week).",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/feature-crosses/video-lecture",
    tags: ["Feature Engineering", "Feature Engineering", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-340",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Feature Crosses and Non-Linear Combinations: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Feature Engineering to enable a linear model to learn non-linear spatial interactions between latitude and longitude coordinates without increasing model architecture complexity.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Feature crosses capturing non-linear interactions in linear and boosted tree models is under consideration.",
    options: [
      { id: 'A', text: "Multiply latitude by a random floating-point scalar constant." },
      { id: 'B', text: "Drop geographic coordinates and use only customer IP addresses." },
      { id: 'C', text: "Add raw latitude and longitude together as a single scalar sum." },
      { id: 'D', text: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a feature cross combining bucketized latitude and bucketized longitude into discrete geographic grid cells. A feature cross is a synthetic feature formed by multiplying (crossing) two or more features. Feature crosses allow linear models to learn non-linear relationships across combinatorial spaces (such as geographic coordinate grids or time-of-day x day-of-week).",
    referenceUrl: "https://developers.google.com/machine-learning/crash-course/feature-crosses/video-lecture",
    tags: ["Feature Engineering", "Feature Engineering", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-341",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Class Imbalance Mitigation (Downsampling, SMOTE, Class Weights): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Data Preprocessing to train an effective fraud detection model where fraudulent transactions constitute only 0.01% of the historical training dataset.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Class weighting, focal loss, and strategic upsampling/downsampling for rare events is under consideration.",
    options: [
      { id: 'A', text: "Rely on standard accuracy as the evaluation metric on the unweighted raw dataset." },
      { id: 'B', text: "Duplicate every fraudulent row 1,000,000 times without evaluating validation splits." },
      { id: 'C', text: "Discard 99.9% of legitimate transactions permanently from the company database." },
      { id: 'D', text: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation. With extreme class imbalance (0.01% positive cases), a naive model predicting 100% negative achieves 99.99% accuracy while failing completely. Applying loss function class weights or focal loss penalizes false negatives, while evaluating PR-AUC assesses true fraud detection performance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/bp-tabular#imbalanced-data",
    tags: ["Data Preprocessing", "Class Imbalance", "Dr Failover"]
  },
  {
    id: "gcp-pmle-342",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Class Imbalance Mitigation (Downsampling, SMOTE, Class Weights): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Data Preprocessing to train an effective fraud detection model where fraudulent transactions constitute only 0.01% of the historical training dataset.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Class weighting, focal loss, and strategic upsampling/downsampling for rare events is under consideration.",
    options: [
      { id: 'A', text: "Rely on standard accuracy as the evaluation metric on the unweighted raw dataset." },
      { id: 'B', text: "Duplicate every fraudulent row 1,000,000 times without evaluating validation splits." },
      { id: 'C', text: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation." },
      { id: 'D', text: "Discard 99.9% of legitimate transactions permanently from the company database." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation. With extreme class imbalance (0.01% positive cases), a naive model predicting 100% negative achieves 99.99% accuracy while failing completely. Applying loss function class weights or focal loss penalizes false negatives, while evaluating PR-AUC assesses true fraud detection performance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/bp-tabular#imbalanced-data",
    tags: ["Data Preprocessing", "Class Imbalance", "High Load Scale"]
  },
  {
    id: "gcp-pmle-343",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Class Imbalance Mitigation (Downsampling, SMOTE, Class Weights): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Data Preprocessing to train an effective fraud detection model where fraudulent transactions constitute only 0.01% of the historical training dataset.",
    question: "Which solution properly implements these mandatory security and governance controls? Class weighting, focal loss, and strategic upsampling/downsampling for rare events is under consideration.",
    options: [
      { id: 'A', text: "Duplicate every fraudulent row 1,000,000 times without evaluating validation splits." },
      { id: 'B', text: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation." },
      { id: 'C', text: "Rely on standard accuracy as the evaluation metric on the unweighted raw dataset." },
      { id: 'D', text: "Discard 99.9% of legitimate transactions permanently from the company database." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation. With extreme class imbalance (0.01% positive cases), a naive model predicting 100% negative achieves 99.99% accuracy while failing completely. Applying loss function class weights or focal loss penalizes false negatives, while evaluating PR-AUC assesses true fraud detection performance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/bp-tabular#imbalanced-data",
    tags: ["Data Preprocessing", "Class Imbalance", "Security Compliance"]
  },
  {
    id: "gcp-pmle-344",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Class Imbalance Mitigation (Downsampling, SMOTE, Class Weights): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Data Preprocessing to train an effective fraud detection model where fraudulent transactions constitute only 0.01% of the historical training dataset.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Class weighting, focal loss, and strategic upsampling/downsampling for rare events is under consideration.",
    options: [
      { id: 'A', text: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation." },
      { id: 'B', text: "Rely on standard accuracy as the evaluation metric on the unweighted raw dataset." },
      { id: 'C', text: "Discard 99.9% of legitimate transactions permanently from the company database." },
      { id: 'D', text: "Duplicate every fraudulent row 1,000,000 times without evaluating validation splits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation. With extreme class imbalance (0.01% positive cases), a naive model predicting 100% negative achieves 99.99% accuracy while failing completely. Applying loss function class weights or focal loss penalizes false negatives, while evaluating PR-AUC assesses true fraud detection performance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/bp-tabular#imbalanced-data",
    tags: ["Data Preprocessing", "Class Imbalance", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-345",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Class Imbalance Mitigation (Downsampling, SMOTE, Class Weights): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Data Preprocessing to train an effective fraud detection model where fraudulent transactions constitute only 0.01% of the historical training dataset.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Class weighting, focal loss, and strategic upsampling/downsampling for rare events is under consideration.",
    options: [
      { id: 'A', text: "Rely on standard accuracy as the evaluation metric on the unweighted raw dataset." },
      { id: 'B', text: "Duplicate every fraudulent row 1,000,000 times without evaluating validation splits." },
      { id: 'C', text: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation." },
      { id: 'D', text: "Discard 99.9% of legitimate transactions permanently from the company database." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply class weighting in the loss function (or focal loss) and use precision-recall AUC (PR-AUC) for model evaluation. With extreme class imbalance (0.01% positive cases), a naive model predicting 100% negative achieves 99.99% accuracy while failing completely. Applying loss function class weights or focal loss penalizes false negatives, while evaluating PR-AUC assesses true fraud detection performance.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/tabular-data/bp-tabular#imbalanced-data",
    tags: ["Data Preprocessing", "Class Imbalance", "Resilience Failure"]
  },
  {
    id: "gcp-pmle-346",
    difficulty: "hard",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Data Leakage Prevention (Target Leakage & Temporal Splits): Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The machine learning engineer evaluates Data Quality to prevent future information from contaminating model training when predicting customer churn on monthly subscription accounts.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Preventing target leakage and implementing strict chronological train-test splits is under consideration.",
    options: [
      { id: 'A', text: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included." },
      { id: 'B', text: "Include the cancellation_confirmation_code column as an input feature for predicting churn." },
      { id: 'C', text: "Calculate global mean statistics across the entire combined dataset before splitting into train and test sets." },
      { id: 'D', text: "Randomly shuffle records across all years and split into 80/20 train/test sets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included. Data leakage occurs when information from outside the training dataset (or future information) is used to train a model. For time-dependent data, using strict temporal splits and calculating feature statistics strictly on training folds prevents artificial, unrealistic test performance.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#data_leakage",
    tags: ["Data Quality", "Data Leakage", "Dr Failover"]
  },
  {
    id: "gcp-pmle-347",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Data Leakage Prevention (Target Leakage & Temporal Splits): High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The machine learning engineer evaluates Data Quality to prevent future information from contaminating model training when predicting customer churn on monthly subscription accounts.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Preventing target leakage and implementing strict chronological train-test splits is under consideration.",
    options: [
      { id: 'A', text: "Randomly shuffle records across all years and split into 80/20 train/test sets." },
      { id: 'B', text: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included." },
      { id: 'C', text: "Calculate global mean statistics across the entire combined dataset before splitting into train and test sets." },
      { id: 'D', text: "Include the cancellation_confirmation_code column as an input feature for predicting churn." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included. Data leakage occurs when information from outside the training dataset (or future information) is used to train a model. For time-dependent data, using strict temporal splits and calculating feature statistics strictly on training folds prevents artificial, unrealistic test performance.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#data_leakage",
    tags: ["Data Quality", "Data Leakage", "High Load Scale"]
  },
  {
    id: "gcp-pmle-348",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Data Leakage Prevention (Target Leakage & Temporal Splits): Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The machine learning engineer evaluates Data Quality to prevent future information from contaminating model training when predicting customer churn on monthly subscription accounts.",
    question: "Which solution properly implements these mandatory security and governance controls? Preventing target leakage and implementing strict chronological train-test splits is under consideration.",
    options: [
      { id: 'A', text: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included." },
      { id: 'B', text: "Include the cancellation_confirmation_code column as an input feature for predicting churn." },
      { id: 'C', text: "Randomly shuffle records across all years and split into 80/20 train/test sets." },
      { id: 'D', text: "Calculate global mean statistics across the entire combined dataset before splitting into train and test sets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included. Data leakage occurs when information from outside the training dataset (or future information) is used to train a model. For time-dependent data, using strict temporal splits and calculating feature statistics strictly on training folds prevents artificial, unrealistic test performance.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#data_leakage",
    tags: ["Data Quality", "Data Leakage", "Security Compliance"]
  },
  {
    id: "gcp-pmle-349",
    difficulty: "easy",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Data Leakage Prevention (Target Leakage & Temporal Splits): Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The machine learning engineer evaluates Data Quality to prevent future information from contaminating model training when predicting customer churn on monthly subscription accounts.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Preventing target leakage and implementing strict chronological train-test splits is under consideration.",
    options: [
      { id: 'A', text: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included." },
      { id: 'B', text: "Calculate global mean statistics across the entire combined dataset before splitting into train and test sets." },
      { id: 'C', text: "Randomly shuffle records across all years and split into 80/20 train/test sets." },
      { id: 'D', text: "Include the cancellation_confirmation_code column as an input feature for predicting churn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included. Data leakage occurs when information from outside the training dataset (or future information) is used to train a model. For time-dependent data, using strict temporal splits and calculating feature statistics strictly on training folds prevents artificial, unrealistic test performance.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#data_leakage",
    tags: ["Data Quality", "Data Leakage", "Hybrid Migration"]
  },
  {
    id: "gcp-pmle-350",
    difficulty: "medium",
    certId: "gcp-pmle",
    domainId: "d2",
    domainName: "Preparing data and feature engineering",
    title: "Data Leakage Prevention (Target Leakage & Temporal Splits): Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The machine learning engineer evaluates Data Quality to prevent future information from contaminating model training when predicting customer churn on monthly subscription accounts.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Preventing target leakage and implementing strict chronological train-test splits is under consideration.",
    options: [
      { id: 'A', text: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included." },
      { id: 'B', text: "Calculate global mean statistics across the entire combined dataset before splitting into train and test sets." },
      { id: 'C', text: "Randomly shuffle records across all years and split into 80/20 train/test sets." },
      { id: 'D', text: "Include the cancellation_confirmation_code column as an input feature for predicting churn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Perform a strict temporal train/validation/test split based on event dates, ensuring no future features are included. Data leakage occurs when information from outside the training dataset (or future information) is used to train a model. For time-dependent data, using strict temporal splits and calculating feature statistics strictly on training folds prevents artificial, unrealistic test performance.",
    referenceUrl: "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#data_leakage",
    tags: ["Data Quality", "Data Leakage", "Resilience Failure"]
  }
];

export default GCP_PMLE_QUESTIONS_14;
