export const GCP_CDL_QUESTIONS_10 = [
  {
    id: "gcp-cdl-226",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Two thousand fraud rules and still falling behind",
    scenario: "An online electronics store's fraud team maintains about 2,000 hand-written rules such as blocking orders over a set value shipped to a new address. Fraudsters change tactics within weeks, the rules keep blocking good customers, and nobody fully understands how the rules interact any more.",
    question: "What is the main advantage of moving to a machine learning approach?",
    options: [
      { id: 'A', text: "ML guarantees that no fraudulent order will ever be approved, so the fraud team can be disbanded." },
      { id: 'B', text: "ML learns fraud patterns from labelled past orders and can be retrained as fraud tactics change." },
      { id: 'C', text: "ML turns every rule into a dashboard, so analysts can see which rule blocked past orders." },
      { id: 'D', text: "ML removes the need for historical order data, since the model works out fraud from first principles." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Machine learning replaces or simplifies brittle rule sets by learning the patterns that separate fraudulent from genuine orders directly from labelled historical examples, capturing subtle combinations of signals that no one would write as rules, and it can be retrained on new data as tactics evolve. No model is perfect, so fraud specialists still review edge cases and monitor performance. ML depends on historical data rather than removing the need for it. Dashboards of rule hits describe the old system; they are not what ML provides.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "Rule-based systems", "Fraud detection"]
  },
  {
    id: "gcp-cdl-227",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Forty thousand support emails a week to sort",
    scenario: "A utility company receives about 40,000 customer emails a week about billing, outages, moving home and complaints. Staff read each email and forward it to the right team, which takes two days on average. Keyword filters were tried but misrouted too many messages.",
    question: "How can machine learning help most directly?",
    options: [
      { id: 'A', text: "By classifying each email's topic from its text, trained on past emails that staff already routed." },
      { id: 'B', text: "By adding more keyword filters so that each topic has a longer list of words that trigger routing." },
      { id: 'C', text: "By archiving the emails in Cloud Storage so the full history is kept at the lowest possible cost." },
      { id: 'D', text: "By storing the emails in a data warehouse so that staff can count email topics at the end of each month." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Unstructured text such as emails is a strong fit for ML: a classification model trained on historical emails and the teams they were routed to learns how customers actually describe each issue, so it routes new messages in seconds and handles wording that keyword filters miss. Monthly counts in a warehouse describe volume without routing anything. More keyword filters repeat the rule-based approach that already failed. Archiving reduces storage cost but does nothing for routing speed.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "Unstructured data", "Classification"]
  },
  {
    id: "gcp-cdl-228",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Underwriters who cannot keep pace with growth",
    scenario: "A pet insurer's underwriters price each new policy by hand, which works at 500 applications a day. A partnership with a large retailer will bring 50,000 applications a day, and different underwriters already price similar pets differently. Hiring a hundred more underwriters is not viable.",
    question: "Which business value of ML best addresses this situation?",
    options: [
      { id: 'A', text: "ML removes regulatory duties, so the insurer no longer needs to justify any of its policy prices." },
      { id: 'B', text: "ML generates marketing images of pets, so the retailer's campaign attracts even more applicants." },
      { id: 'C', text: "ML scales consistent decisions, pricing every application in seconds from patterns in past data." },
      { id: 'D', text: "ML replaces the policy database, so application records no longer need to be stored anywhere." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "One of ML's core business values is scaling decisions: a model trained on past applications and claims outcomes applies the same learned logic to every application, instantly and consistently, so volume can grow a hundredfold without a matching increase in staff, with underwriters handling exceptions. Generating marketing images is a generative AI task that increases volume rather than handling it. Using ML does not remove regulatory obligations; pricing still has to be justifiable. Models consume stored data; they do not replace the database.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "Scaling decisions", "Business value"]
  },
  {
    id: "gcp-cdl-229",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "An ML proposal for applying published tax rates",
    scenario: "An invoicing software company must apply sales tax rates that each state publishes in an official table. The rates change a few times a year and the correct rate for any invoice is fully determined by the published table. An engineer proposes training an ML model to predict the right rate for each invoice.",
    question: "What should the product manager conclude?",
    options: [
      { id: 'A', text: "Keep the lookup rules, because the logic is known and deterministic, so ML would only add error risk." },
      { id: 'B', text: "Use ML, because a model will keep itself updated with new rates without anyone changing the system." },
      { id: 'C', text: "Use ML, because models always outperform rules and would find patterns in the published tax table." },
      { id: 'D', text: "Use gen AI, because a language model can read tax laws and write the correct rate on each invoice." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ML is valuable when the patterns are too complex or too changeable to write down; when the correct answer is fully specified by a known table, a deterministic lookup is simpler, exactly right every time and easy to audit, while a probabilistic model could only introduce mistakes. Models do not always outperform rules, especially for fully determined logic. A model does not learn new rates by itself; it would need retraining on data reflecting them, which is more work than updating a table. A language model writing rates adds hallucination risk to a task that needs exactness.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "Rule-based systems", "Use case fit"]
  },
  {
    id: "gcp-cdl-230",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Billions of till receipts nobody has studied",
    scenario: "A supermarket chain holds five years of receipt-level transactions, billions of rows with product, store, time, price and loyalty data. Category managers rely on intuition to set promotions and suspect that the data hides drivers of demand they have never noticed.",
    question: "What business value can ML provide here?",
    options: [
      { id: 'A', text: "It can convert the receipts into images so the chain can archive them more cheaply in the cloud." },
      { id: 'B', text: "It can shrink billions of rows to a sample small enough for managers to review by hand." },
      { id: 'C', text: "It can guarantee that every promotion will raise sales, since models remove uncertainty entirely." },
      { id: 'D', text: "It can uncover patterns and demand drivers across billions of rows that people cannot see unaided." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deriving insight from large datasets is a key ML use case: models can detect relationships across billions of structured records, such as which products are bought together, how weather or time of day shifts demand, and which promotions actually lift sales, far beyond what people can find by inspection. Reducing the data to a hand-reviewable sample throws away the signal ML exploits. Converting receipts to images makes them harder to analyse. Models reduce uncertainty but never eliminate it.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "Structured data", "Business insights"]
  },
  {
    id: "gcp-cdl-231",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Predicting a failure that has happened three times",
    scenario: "A water utility wants an ML model to predict failures of a particular pump model. The pumps have sensors, but only three failures have ever been recorded across the fleet, and sensor logging started six months ago. The operations director wants the model live next quarter.",
    question: "What is the most realistic assessment?",
    options: [
      { id: 'A', text: "Build the model now, since ML needs only a few examples of any event to predict it reliably in the field." },
      { id: 'B', text: "Collect more data first and use engineering rules meanwhile, since three failures are too few to learn from." },
      { id: 'C', text: "Skip data collection, since a larger and more complex model will compensate for having very few examples." },
      { id: 'D', text: "Build the model now using generative AI, which can invent enough realistic failures to replace real data." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ML needs enough relevant, representative historical data for the model to learn a pattern; with only three recorded failures and six months of sensor history, any model would be unreliable. A sensible path is to keep collecting sensor and failure data, perhaps using threshold-based engineering rules or anomaly detection in the meantime, and revisit supervised prediction once data is sufficient. A handful of examples is not enough for reliable prediction. Synthetic data can supplement real data in some cases but cannot substitute for understanding real failure behaviour. Larger models need more data, not less, and overfit tiny datasets.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "Data requirements", "Use case fit"]
  },
  {
    id: "gcp-cdl-232",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Personal picks for twelve million listeners",
    scenario: "A music streaming service has 12 million subscribers and a catalog of 80 million tracks. Editors currently curate the same weekly playlists for everyone, and subscribers complain that most of the suggestions do not match their taste.",
    question: "Which ML use case addresses this problem?",
    options: [
      { id: 'A', text: "Transcription, where a model converts each track's lyrics into text for display in the app." },
      { id: 'B', text: "Recommendations, where a model learns each listener's tastes from behaviour and suggests tracks." },
      { id: 'C', text: "Forecasting, where a model predicts how many subscribers the service will have next quarter." },
      { id: 'D', text: "Translation, where a model converts the titles of tracks into the subscriber's language." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Recommendation models learn from listening behaviour across millions of users and tracks to predict what each person will enjoy, delivering personalisation at a scale editors cannot match, which is exactly the complaint. Translating titles and transcribing lyrics improve the app experience but do not match suggestions to taste. Subscriber forecasting helps planning but changes nothing about what each listener is offered.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "Recommendations", "Personalization"]
  },
  {
    id: "gcp-cdl-233",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Drone photos of ten thousand hectares",
    scenario: "An agricultural cooperative flies drones over members' fields weekly and collects about 200,000 images. Agronomists can review only a small fraction, so crop disease is often spotted too late. The cooperative has several seasons of images that agronomists have already labelled as healthy or diseased.",
    question: "What does ML offer the cooperative?",
    options: [
      { id: 'A', text: "A data warehouse that stores the images as table rows so agronomists can filter them by field and week." },
      { id: 'B', text: "An image model trained on the labelled photos that flags likely disease in every new image for review." },
      { id: 'C', text: "A dashboard that shows how many images the agronomists reviewed each week compared with the target." },
      { id: 'D', text: "A rules engine in which agronomists list the pixel colours of each labelled disease for the system to match." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ML excels at extracting insight from unstructured data such as images: a model trained on labelled examples can screen every new photo and flag likely disease, so agronomists focus on the fields that need attention and act earlier. Storing images in a warehouse makes them easier to find but still leaves people looking at each one. Pixel-colour rules are brittle under changing light, growth stage and camera angle, which is why ML beats rules for vision tasks. A review-count dashboard measures the backlog without reducing it.",
    referenceUrl: "https://cloud.google.com/learn/what-is-machine-learning",
    tags: ["Machine learning", "Unstructured data", "Computer vision"]
  },
  {
    id: "gcp-cdl-234",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Expense fraud nobody has seen before",
    scenario: "A multinational's internal audit team reviews employee expense claims using a checklist of known fraud schemes. Auditors suspect new schemes are slipping through because nobody knows what they look like yet, and there are no labelled examples of them.",
    question: "Which ML approach best fits this problem?",
    options: [
      { id: 'A', text: "A translation model that converts expense claims from each country into a single common language." },
      { id: 'B', text: "A forecasting model that predicts the total value of expense claims the company will get next month." },
      { id: 'C', text: "Anomaly detection that learns what normal claims look like and flags unusual ones for auditors." },
      { id: 'D', text: "A classification model trained only on labelled examples of schemes auditors already know." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Anomaly detection learns the normal patterns in the data without needing labelled fraud examples and flags claims that deviate from them, so it can surface new, previously unseen schemes for auditors to investigate. A classifier trained only on known schemes learns to find those schemes and can miss novel ones, which is the gap auditors worry about. Translation standardises language but detects nothing. Forecasting total spend supports budgeting, not the discovery of individual suspicious claims.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/anomaly-detection-overview",
    tags: ["Machine learning", "Anomaly detection", "Fraud detection"]
  },
  {
    id: "gcp-cdl-235",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A delivery model with blank postcodes",
    scenario: "A courier firm is training a model to predict delivery times. Profiling the training data shows that 30% of the delivery records have no destination postcode and many are missing the parcel weight, both of which strongly affect delivery time.",
    question: "Which data quality dimension is the main problem?",
    options: [
      { id: 'A', text: "Completeness, because required values such as postcode and weight are missing entirely." },
      { id: 'B', text: "Uniqueness, because the same delivery appears several times in the training records." },
      { id: 'C', text: "Consistency, because two systems record different weights for the same parcel delivery." },
      { id: 'D', text: "Timeliness, because postcode and weight updates arrive weeks after each delivery." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Completeness measures whether all required data is present. Missing postcodes and weights mean the model cannot learn how those factors affect delivery time, weakening its predictions. Uniqueness concerns duplicate records, timeliness concerns whether data is current and available when needed, and consistency concerns agreement between systems; none of those describes values that are simply absent.",
    referenceUrl: "https://cloud.google.com/discover/what-is-data-quality",
    tags: ["Data quality", "Completeness"]
  },
  {
    id: "gcp-cdl-236",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "The same customer counted three times",
    scenario: "A gym chain's churn model overstates how many members are at risk. Investigation shows that members who joined online, in the app and at the front desk often have two or three separate records, each treated as a different person by the model.",
    question: "Which data quality dimension has been violated?",
    options: [
      { id: 'A', text: "Accuracy, because the recorded addresses no longer match where members actually live." },
      { id: 'B', text: "Validity, because some membership dates are written in the wrong format for the system." },
      { id: 'C', text: "Uniqueness, because the same member appears as several records in the data." },
      { id: 'D', text: "Timeliness, because membership data is only refreshed at the end of each calendar month." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Uniqueness means each real-world entity is recorded once. Duplicate member records inflate counts and distort the patterns the churn model learns, for example by making one active member look like several inactive ones. Validity concerns values that break format or business rules. Timeliness concerns data being up to date when needed. Accuracy concerns values that are wrong compared with reality, such as outdated addresses.",
    referenceUrl: "https://cloud.google.com/discover/what-is-data-quality",
    tags: ["Data quality", "Uniqueness"]
  },
  {
    id: "gcp-cdl-237",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Daily restock predictions on weekly data",
    scenario: "A convenience store chain uses a model to decide each morning what to restock. The stock-level data feeding it is refreshed only once a week, so by Thursday the model is recommending orders for items that sold out days earlier.",
    question: "Which data quality dimension is causing the poor recommendations?",
    options: [
      { id: 'A', text: "Uniqueness, because each product appears more than once in the stock-level data it uses." },
      { id: 'B', text: "Completeness, because some stores have no stock-level records in the data set at all." },
      { id: 'C', text: "Timeliness, because the data is not current enough for decisions made every single day." },
      { id: 'D', text: "Validity, because some stock counts are negative, which breaks the rules for the field." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Timeliness measures whether data is up to date and available when it is needed. A daily decision driven by weekly data will be increasingly wrong as the week goes on, exactly as described. Duplicate products, negative counts and missing stores would be uniqueness, validity and completeness problems respectively, and none of them is what the scenario describes.",
    referenceUrl: "https://cloud.google.com/discover/what-is-data-quality",
    tags: ["Data quality", "Timeliness"]
  },
  {
    id: "gcp-cdl-238",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Patients aged two hundred and fifty",
    scenario: "A healthcare startup is preparing records to train a readmission model. Profiling finds ages of 250, discharge dates earlier than admission dates, and email fields containing phone numbers. The records are otherwise complete and there are no duplicates.",
    question: "Which data quality dimension do these problems fall under?",
    options: [
      { id: 'A', text: "Timeliness, because the records describe hospital stays that happened several years ago." },
      { id: 'B', text: "Uniqueness, because each patient should appear in the training data only a single time." },
      { id: 'C', text: "Consistency, because a patient's data differs between the startup's billing and care systems." },
      { id: 'D', text: "Validity, because values break the formats, ranges and business rules defined for the fields." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Validity checks whether values conform to defined formats, allowed ranges and business rules: an age of 250 is out of range, a discharge before admission breaks a logical rule, and a phone number in an email field breaks the format. Old records are a timeliness question only if they are too stale for the purpose, and the scenario raises no such concern. The scenario states there are no duplicates, ruling out uniqueness. Consistency concerns disagreement between systems, which is not described.",
    referenceUrl: "https://cloud.google.com/discover/what-is-data-quality",
    tags: ["Data quality", "Validity"]
  },
  {
    id: "gcp-cdl-239",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Well-formatted addresses that are simply wrong",
    scenario: "A furniture retailer's delivery-routing model performs badly. Every address in its data passes format checks, postcodes match real towns and there are no blanks or duplicates, yet drivers keep arriving at homes where the customer moved out years ago.",
    question: "Which data quality dimension is at fault?",
    options: [
      { id: 'A', text: "Validity, because the addresses fail to follow the required format for the delivery fields." },
      { id: 'B', text: "Completeness, because the address fields are empty for a large share of the customers." },
      { id: 'C', text: "Uniqueness, because many customers are recorded more than once with different addresses." },
      { id: 'D', text: "Accuracy, because the data does not reflect where customers actually live now." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Accuracy measures whether data correctly represents the real world. These addresses are well formed and present but no longer true, so they are inaccurate. Validity is satisfied because the values pass format and rule checks, which shows that valid data can still be wrong. The scenario explicitly rules out blanks and duplicates, so completeness and uniqueness are not the issue.",
    referenceUrl: "https://cloud.google.com/discover/what-is-data-quality",
    tags: ["Data quality", "Accuracy"]
  },
  {
    id: "gcp-cdl-240",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Gold in the CRM, silver in billing",
    scenario: "An airline's loyalty model draws on both its CRM and its billing system. For thousands of passengers, the CRM records Gold status while billing records Silver, and the two systems also spell city names differently, so the model receives conflicting inputs for the same person.",
    question: "Which data quality dimension does this describe?",
    options: [
      { id: 'A', text: "Completeness, because loyalty status is missing from both systems for most passengers." },
      { id: 'B', text: "Uniqueness, because each passenger has two identical rows inside the same CRM system." },
      { id: 'C', text: "Consistency, because the same facts are recorded differently across the two systems." },
      { id: 'D', text: "Timeliness, because the loyalty data only becomes available long after each flight." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Consistency means the same data is represented the same way across datasets and systems. Conflicting status values and differing city spellings for the same passenger are consistency failures, and they give the model contradictory signals. Late availability would be timeliness, missing values would be completeness, and duplicate rows within one system would be uniqueness; none matches a conflict between two systems.",
    referenceUrl: "https://cloud.google.com/discover/what-is-data-quality",
    tags: ["Data quality", "Consistency"]
  },
  {
    id: "gcp-cdl-241",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A bigger model will not fix these labels",
    scenario: "A manufacturer's defect-classification model plateaus at 78% accuracy. The team proposes moving to a much larger model and buying more GPUs. A review then finds that different inspectors labelled the same defect types inconsistently and that one production line is barely represented in the training data.",
    question: "What should leadership prioritise?",
    options: [
      { id: 'A', text: "Retrain the current model more often on the same data, since frequent retraining will raise its accuracy." },
      { id: 'B', text: "Switch to generative AI to label all future images, since generated labels need no quality checks at all." },
      { id: 'C', text: "Approve the larger model and more GPUs, since additional model capacity will learn around the label noise." },
      { id: 'D', text: "Fix label consistency and add data from the missing line, since model quality is capped by its data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A model can only be as good as its training data. Inconsistent labels teach it contradictory answers, and an under-represented production line means it has little to learn from for that line, so improving label consistency and coverage is the highest-value fix; bigger models cannot learn a truth the data does not contain. Extra capacity tends to memorise label noise rather than overcome it. Retraining more often on the same flawed data reproduces the same ceiling. AI-assisted labelling can help, but its output still needs quality checks.",
    referenceUrl: "https://cloud.google.com/discover/what-is-data-quality",
    tags: ["Data quality", "Training data", "Machine learning"]
  },
  {
    id: "gcp-cdl-242",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Checking data quality before every retrain",
    scenario: "A bank retrains its credit-limit model monthly from BigQuery tables. After a bad month when a source system silently sent null incomes, the data team wants automatic checks for nulls, ranges and freshness on those tables, with results visible to data owners before each retrain.",
    question: "Which Google Cloud capability fits this need?",
    options: [
      { id: 'A', text: "Knowledge Catalog data quality scans, which run rules on BigQuery tables and report results." },
      { id: 'B', text: "BigQuery table snapshots, which keep a read-only copy of tables as they were at a specific time." },
      { id: 'C', text: "Cloud Monitoring uptime checks, which confirm that the bank's public website responds to requests." },
      { id: 'D', text: "Cloud Storage Object Versioning, which keeps previous generations of files when they are replaced." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Knowledge Catalog (formerly Dataplex) automatic data quality scans evaluate rules such as non-null, value ranges, validity and freshness against BigQuery tables, publish scores alongside the table, and can alert owners, so bad data is caught before a retrain. Uptime checks monitor endpoint availability, not table contents. Table snapshots preserve a past version for recovery but do not test quality. Object Versioning protects files in Cloud Storage and has nothing to do with checking BigQuery data.",
    referenceUrl: "https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview",
    tags: ["Data quality", "Knowledge Catalog", "BigQuery"]
  },
  {
    id: "gcp-cdl-243",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Clinicians ignoring an accurate risk score",
    scenario: "A hospital deployed a model that scores each patient's risk of deterioration, and testing shows it is accurate. Yet nurses and doctors mostly ignore the scores, saying they will not act on a number when they cannot see what is driving it.",
    question: "Which change would most likely increase adoption?",
    options: [
      { id: 'A', text: "Hide the score from clinicians and let the model trigger treatment decisions automatically instead." },
      { id: 'B', text: "Retrain the model on a much larger patient dataset so that its reported accuracy rises by another point." },
      { id: 'C', text: "Show which factors drove each patient's score so clinicians can weigh it against their own judgement." },
      { id: 'D', text: "Display the score in a larger font on the ward dashboard so that clinicians notice it more often." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Explainability shows why a model produced a given output, for example that rising heart rate and falling blood pressure drove a high score. That lets clinicians check the reasoning against their own knowledge, builds trust and turns an accurate model into one that people actually use. Automating treatment decisions removes the human oversight that high-stakes care requires. A small accuracy gain does not address the lack of understanding. A bigger font makes the number more visible but no more trustworthy.",
    referenceUrl: "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    tags: ["Explainable AI", "Trust", "Adoption"]
  },
  {
    id: "gcp-cdl-244",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A screening model that learned the past",
    scenario: "A technology company trained a model to shortlist job applicants using ten years of its own hiring decisions. An internal review finds the model ranks applicants from certain universities and backgrounds lower, mirroring historical hiring patterns rather than job performance.",
    question: "What is the most responsible course of action?",
    options: [
      { id: 'A', text: "Keep using the model, since it only repeats decisions the company's recruiters already made before." },
      { id: 'B', text: "Keep using the model but stop recording which applicants it rejects so that no one can review them." },
      { id: 'C', text: "Keep using the model, since a model trained on real data cannot be biased in any meaningful sense." },
      { id: 'D', text: "Pause it, test outcomes across groups, fix the data and features, and keep people reviewing shortlists." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Models learn whatever patterns their training data contains, including historical bias, and automating those patterns scales unfair treatment, exposing the company to discrimination claims, regulatory action and reputational harm. The responsible response is to pause, evaluate outcomes across groups, address the data and features causing the disparity, and keep human review. Repeating past decisions at scale is exactly the risk. Hiding rejections removes accountability and makes the legal exposure worse. Real-world data can faithfully encode past unfairness, so being trained on real data does not make a model unbiased.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Fairness", "Bias"]
  },
  {
    id: "gcp-cdl-245",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Where to start with responsible AI",
    scenario: "A mid-sized insurer is about to launch its first three AI projects. The board asks the chief risk officer how the company will make sure its AI is used responsibly, not just once at launch but across every future project.",
    question: "Which approach best answers the board?",
    options: [
      { id: 'A', text: "Leave responsibility to each vendor, since cloud providers are accountable for how customers use AI." },
      { id: 'B', text: "Adopt AI principles with governance and reviews covering every project's full life cycle." },
      { id: 'C', text: "Run a single legal review of the first project and reuse the approval for every project after it." },
      { id: 'D', text: "Measure only model accuracy, since an accurate model is responsible by definition in every case." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Responsible AI is an organisational practice: clear principles (Google publishes its own AI Principles as an example), governance roles, and review processes applied from design through deployment and monitoring, so every project is assessed for fairness, privacy, safety and accountability. Providers supply tools and commitments, but customers remain accountable for how they use AI. A one-off review of one project cannot cover different future use cases. Accuracy alone says nothing about fairness, privacy or appropriate use.",
    referenceUrl: "https://ai.google/responsibility/principles/",
    tags: ["Responsible AI", "AI governance"]
  },
  {
    id: "gcp-cdl-246",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "AI-generated faces in an advertising campaign",
    scenario: "A cosmetics brand plans to use Imagen to generate photorealistic models for an online campaign. Its ethics committee worries that audiences could be misled into thinking the images show real people, and wants a way for AI-generated images to be identified later.",
    question: "Which practice best addresses the committee's concern?",
    options: [
      { id: 'A', text: "Store the generated images in the Archive storage class so they cannot be reused in any other campaigns." },
      { id: 'B', text: "Compress the images heavily so audiences can tell they are AI-generated rather than photographed." },
      { id: 'C', text: "Generate the images with a smaller model so that they look less realistic than photographs of real people." },
      { id: 'D', text: "Disclose that the images are AI-generated and rely on SynthID watermarks to let them be identified later." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Transparency is a core responsible AI practice: telling audiences that content is AI-generated, combined with SynthID, the imperceptible digital watermark that Google embeds in Imagen output so it can be detected later, addresses both the risk of misleading people and the need for later identification. Degrading image quality is unreliable and harms the campaign. The Archive storage class changes storage cost and says nothing about provenance. A less realistic model reduces quality without providing any disclosure or identification.",
    referenceUrl: "https://deepmind.google/technologies/synthid/",
    tags: ["Responsible AI", "Transparency", "SynthID"]
  },
  {
    id: "gcp-cdl-247",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Flagging welfare applications for review",
    scenario: "A regional government plans to use an ML model to flag housing-benefit applications that may be fraudulent. Wrongly denying support could leave families without housing, and the agency is subject to public scrutiny and administrative law. Officials ask how to deploy the model responsibly.",
    question: "Which deployment approach is most appropriate?",
    options: [
      { id: 'A', text: "Use the model only if its accuracy on historical data is high, since strong accuracy settles fairness questions." },
      { id: 'B', text: "Keep the model's logic confidential and never tell applicants that AI was used, so fraudsters cannot game it." },
      { id: 'C', text: "Let the model deny flagged applications automatically, since removing people from the loop keeps outcomes neutral." },
      { id: 'D', text: "Have caseworkers decide flagged cases using the model's reasons, allow appeals and track outcomes by group." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "For high-stakes decisions about people, responsible AI calls for human accountability, explanations, recourse and ongoing monitoring: caseworkers make the final call using the reasons behind each flag, applicants can appeal, and outcomes are tracked across groups to detect unfair impact. Automatic denial removes the oversight such consequences demand, and automation does not make outcomes neutral. Secrecy about AI use undermines transparency and the applicant's ability to challenge a decision. High overall accuracy can coexist with serious harm to particular groups.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Accountability", "Human oversight"]
  },
  {
    id: "gcp-cdl-248",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "Training on call transcripts full of personal details",
    scenario: "A telecom company wants to train a model on two years of customer-service call transcripts to predict why customers call. The transcripts contain names, addresses, account numbers and occasionally health details, and privacy law requires the company to minimise its use of personal data.",
    question: "Which approach reflects responsible AI practice?",
    options: [
      { id: 'A', text: "Train on the raw transcripts, since data held by the company can be used for any purpose it chooses." },
      { id: 'B', text: "Encrypt the transcripts with a customer-managed key, then train on everything including personal details." },
      { id: 'C', text: "Publish the transcripts to a public dataset so outside researchers can check the model's training data." },
      { id: 'D', text: "De-identify the personal details with Sensitive Data Protection before training, and respect consent terms." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Privacy is a pillar of responsible AI. Sensitive Data Protection can detect and mask or tokenise names, addresses, account numbers and health information so the model learns call reasons without exposing identities, which meets the data minimisation requirement, and the company must still respect the purposes customers consented to. Holding data does not permit using it for any purpose under privacy law. Encryption protects stored data, but the model would still be trained on unnecessary identifiers. Publishing personal transcripts would be a serious privacy breach.",
    referenceUrl: "https://cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview",
    tags: ["Responsible AI", "Privacy", "Sensitive Data Protection"]
  },
  {
    id: "gcp-cdl-249",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A CFO who sees responsible AI as overhead",
    scenario: "During budget planning, a retail bank's CFO proposes cutting the responsible AI review team, arguing that it slows launches and adds cost without generating revenue. The chief data officer is asked to explain the business case for keeping it.",
    question: "Which argument best captures the business implications?",
    options: [
      { id: 'A', text: "Responsible AI is only a legal formality, so the bank could replace it with a disclaimer on its website." },
      { id: 'B', text: "Responsible AI cuts legal, regulatory and reputational risk and builds the trust that drives adoption." },
      { id: 'C', text: "Responsible AI mainly makes models faster, so the bank would save on compute with the team in place." },
      { id: 'D', text: "Responsible AI is only relevant to technology companies, so a bank has little reason to invest in it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Responsible and explainable AI protect the business: they reduce the chance of discriminatory or harmful outcomes that bring fines, lawsuits and regulatory action (for example under the EU AI Act), prevent reputational damage, and build the customer and employee trust that AI products need to be adopted and deliver value. Responsible AI practices do not make models faster. A disclaimer does not satisfy regulators or prevent harm. Banks, which make high-stakes decisions about customers, are among the most exposed sectors.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Business value", "Risk"]
  },
  {
    id: "gcp-cdl-250",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d3",
    domainName: "Innovating with Google Cloud Artificial Intelligence",
    title: "A fairness review done once, two years ago",
    scenario: "A health insurer ran a thorough fairness and bias review of its claims-triage model before launch two years ago and considers the matter closed. Since then, it has entered new regions with different demographics, and the mix of claims has changed considerably.",
    question: "What should the insurer do?",
    options: [
      { id: 'A', text: "Monitor the model's outcomes by group on an ongoing basis and re-evaluate it as data and populations shift." },
      { id: 'B', text: "Nothing further, since a model that passed a fairness review at launch stays fair for as long as it runs." },
      { id: 'C', text: "Stop collecting outcome data on the model so that there is no record that could reveal an unfair impact." },
      { id: 'D', text: "Replace the model with a larger one every year, since newer models are fair by default and need no review." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Responsible AI is a continuous practice across the model's life cycle. When populations and data shift, a model's performance and fairness can drift, so outcomes should be monitored across groups and the model re-evaluated, and retrained if needed, as conditions change. A launch review reflects the data at that time only. Newer or larger models are not fair by default and still require evaluation. Deliberately avoiding outcome data removes accountability and increases legal and ethical risk.",
    referenceUrl: "https://cloud.google.com/responsible-ai",
    tags: ["Responsible AI", "Monitoring", "Fairness"]
  }
];

export default GCP_CDL_QUESTIONS_10;
