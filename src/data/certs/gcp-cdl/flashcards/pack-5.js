export const GCP_CDL_FLASHCARDS_5 = [
  {
    id: "gcp-cdl-fc-101",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Why is data valuable to an organization?",
    hint: "Now, over time, for strategy and for AI.",
    back: "Data generates <strong>real-time business insights</strong> (act while things happen), reveals <strong>trends</strong> over time, <strong>informs strategic decisions</strong> with evidence instead of instinct, and <strong>fuels AI</strong>, which needs the organization's own data to be accurate and differentiated.",
    tags: ["Value of data"]
  },
  {
    id: "gcp-cdl-fc-102",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Database vs data warehouse vs data lake: what is each for?",
    hint: "Run the business, analyze the business, keep everything raw.",
    back: "A <strong>database</strong> runs day-to-day operations, recording and updating individual transactions (Cloud SQL, Spanner, Firestore). A <strong>data warehouse</strong> integrates cleaned, structured history from many sources for analysis and reporting (BigQuery). A <strong>data lake</strong> stores large volumes of raw data in any format cheaply for later exploration (often Cloud Storage).",
    tags: ["Databases", "Data warehouse", "Data lake"]
  },
  {
    id: "gcp-cdl-fc-103",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "OLTP vs OLAP: what does each acronym mean and what workload does it describe?",
    hint: "Many small writes versus big scans.",
    back: "<strong>OLTP</strong> (online transaction processing): many small, fast reads and writes on current data, such as orders and payments; the job of operational databases. <strong>OLAP</strong> (online analytical processing): large queries that scan and aggregate lots of historical data; the job of data warehouses such as BigQuery. Running heavy OLAP queries on an OLTP system slows the business.",
    tags: ["Databases", "Data warehouse"]
  },
  {
    id: "gcp-cdl-fc-104",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Data lake vs data warehouse: when does each fit best?",
    hint: "Known questions versus unknown ones.",
    back: "Choose a <strong>warehouse</strong> for known questions that need <strong>consistent, curated, governed</strong> structured data, such as financial reporting and dashboards. Choose a <strong>lake</strong> when you must keep <strong>raw, varied data</strong> (images, logs, JSON) cheaply for exploration, data science and future uses. Many organizations use both, landing raw data in the lake and curating it into the warehouse.",
    tags: ["Data lake", "Data warehouse"]
  },
  {
    id: "gcp-cdl-fc-105",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is a data mart, and how does it differ from a data warehouse?",
    hint: "One department's slice.",
    back: "A <strong>data mart</strong> is a smaller, subject-focused subset of data, such as sales or HR, curated for one team's reporting. A <strong>data warehouse</strong> integrates data across the whole organization. Marts built from a shared warehouse stay consistent; marts built independently from source systems tend to become silos with conflicting numbers.",
    tags: ["Data warehouse", "Data mart"]
  },
  {
    id: "gcp-cdl-fc-106",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is a data swamp, and how do you keep a data lake from becoming one?",
    hint: "Data you cannot find or trust.",
    back: "A <strong>data swamp</strong> is a lake full of data nobody can find, understand or trust: no catalog, no owners, unclear freshness and meaning. Prevent it with <strong>metadata and a data catalog</strong>, named <strong>owners</strong>, quality checks and lifecycle rules. On Google Cloud, Knowledge Catalog (formerly Dataplex) provides cataloging and governance across lakes and warehouses.",
    tags: ["Data lake", "Data governance"]
  },
  {
    id: "gcp-cdl-fc-107",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "First-party vs second-party vs third-party data: how are they defined?",
    hint: "Who collected it, and from whom?",
    back: "<strong>First-party</strong>: collected directly by the organization from its own customers and channels (app, website, loyalty). <strong>Second-party</strong>: another organization's first-party data shared directly with a partner under an agreement. <strong>Third-party</strong>: compiled by an outside aggregator with no direct relationship to the people described, and sold to many buyers.",
    tags: ["Types of data"]
  },
  {
    id: "gcp-cdl-fc-108",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Zero-party data vs first-party data: what is the distinction?",
    hint: "Told versus observed.",
    back: "<strong>Zero-party data</strong> is information a customer <strong>intentionally and proactively shares</strong>, such as preferences in a style quiz or communication choices. <strong>First-party data</strong> more broadly includes what the organization <strong>observes</strong> from its own channels, such as purchases and app behavior. Both are collected directly, with the customer relationship under the organization's control.",
    tags: ["Types of data", "First-party data"]
  },
  {
    id: "gcp-cdl-fc-109",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Why is first-party data becoming more valuable than third-party data?",
    hint: "Privacy rules and browsers are changing the supply.",
    back: "Privacy regulation and browser restrictions on cross-site tracking are shrinking the supply and accuracy of <strong>third-party data</strong>, which competitors can also buy. <strong>First-party data</strong> is collected with consent, is accurate, reflects your actual customers and is unique to you, so it is the durable basis for personalization, analytics and AI.",
    tags: ["Types of data", "Privacy"]
  },
  {
    id: "gcp-cdl-fc-110",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Structured vs semi-structured vs unstructured data: give an example of each.",
    hint: "Fixed columns, flexible tags, no model at all.",
    back: "<strong>Structured</strong>: a fixed schema of rows and columns, such as a sales table. <strong>Semi-structured</strong>: self-describing records with tags or keys but a flexible schema, such as JSON events, XML or logs. <strong>Unstructured</strong>: no predefined data model, such as images, audio, video, PDFs and free-form text.",
    tags: ["Types of data"]
  },
  {
    id: "gcp-cdl-fc-111",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "How much of an organization's data is typically unstructured, and why does AI matter for it?",
    hint: "Most of it, and it used to be dark.",
    back: "Most estimates put <strong>80 to 90%</strong> of enterprise data in unstructured form: documents, emails, call recordings, images and video. It was historically hard to analyze, so it sat unused. <strong>AI services</strong> can now transcribe, summarize, classify and extract fields from it at scale, turning it into data that analytics and decisions can use.",
    tags: ["Unstructured data", "AI"]
  },
  {
    id: "gcp-cdl-fc-112",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "How can a data warehouse handle semi-structured data without forcing it into fixed columns first?",
    hint: "BigQuery has a data type for it.",
    back: "BigQuery supports <strong>nested and repeated fields</strong> (STRUCT and ARRAY) and a native <strong>JSON data type</strong>, so JSON events can be loaded as they are and queried with SQL, extracting only the fields needed. Records can vary, and new fields do not break loading, which avoids a costly redesign every time the source changes.",
    tags: ["Semi-structured data", "BigQuery"]
  },
  {
    id: "gcp-cdl-fc-113",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What are the six stages of the data supply chain, in order?",
    hint: "From creation to action.",
    back: "<strong>Genesis</strong> (data is created), <strong>collection</strong> (gathered and ingested), <strong>processing</strong> (cleaned and transformed), <strong>storage</strong> (kept in databases, warehouses or lakes), <strong>analysis</strong> (examined for patterns and answers) and <strong>activation</strong> (insights put to work in decisions and applications).",
    tags: ["Data supply chain"]
  },
  {
    id: "gcp-cdl-fc-114",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Data genesis vs data collection: where does one end and the other begin?",
    hint: "Created versus gathered.",
    back: "<strong>Genesis</strong> is the moment data comes into existence: a purchase, a sensor reading, a click, a form submission. <strong>Collection</strong> is gathering that data from its many sources and ingesting it into a platform, in batches or as streams (for example through Pub/Sub). A meter taking a reading is genesis; sending the reading to the utility is collection.",
    tags: ["Data supply chain"]
  },
  {
    id: "gcp-cdl-fc-115",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What happens in the processing stage of the data supply chain?",
    hint: "Make raw data usable.",
    back: "Raw data is <strong>cleaned</strong> (errors and duplicates removed), <strong>standardized</strong> (formats, units, codes), <strong>transformed</strong> (joined, aggregated, reshaped) and <strong>enriched</strong> (extra context added) so it is consistent and trustworthy. It runs as batch or streaming pipelines, for example with Dataflow or Managed Service for Apache Spark.",
    tags: ["Data supply chain", "Data processing"]
  },
  {
    id: "gcp-cdl-fc-116",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "In the storage stage, which Google Cloud services typically hold which data?",
    hint: "Match the store to how the data will be used.",
    back: "<strong>Cloud Storage</strong> for raw files and data lakes; <strong>BigQuery</strong> for analytical, warehouse data; operational databases such as <strong>Cloud SQL, AlloyDB, Spanner, Firestore and Bigtable</strong> for data that applications read and write live. The choice depends on structure, access pattern, scale and consistency needs.",
    tags: ["Data supply chain", "Storage"]
  },
  {
    id: "gcp-cdl-fc-117",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does data activation look like in practice?",
    hint: "The insight changes what happens next.",
    back: "Insights are pushed into the places work happens: a <strong>personalized offer</strong> in an app, a <strong>churn-risk flag</strong> in the CRM, a <strong>restock order</strong> triggered automatically, a <strong>fraud block</strong> at payment time, an alert in a team's chat, or predictions fed into staffing rotas. Activation is where data turns into business value.",
    tags: ["Data supply chain", "Data activation"]
  },
  {
    id: "gcp-cdl-fc-118",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Why do data quality problems early in the supply chain cost more later?",
    hint: "Garbage in, garbage out, multiplied.",
    back: "Errors introduced at genesis or collection, such as wrong units, duplicates or missing fields, flow into every downstream table, dashboard and model. Each consumer then either repeats the fix or makes decisions on bad numbers, and AI models learn the mistakes. Validating and fixing data <strong>as close to the source as possible</strong> is far cheaper than correcting every downstream use.",
    tags: ["Data supply chain", "Data quality"]
  },
  {
    id: "gcp-cdl-fc-119",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Real-time insight vs historical insight: when is each most valuable?",
    hint: "Minutes versus years.",
    back: "<strong>Real-time insight</strong> matters when the decision must happen while the event is unfolding: surge pricing, fraud detection, stock alerts. <strong>Historical insight</strong> matters for patterns that emerge over months or years: trends, seasonality, strategy. Most organizations need both from the same data.",
    tags: ["Value of data", "Real-time insights"]
  },
  {
    id: "gcp-cdl-fc-120",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "In what three ways does an organization's own data fuel AI?",
    hint: "Before, during and after the model answers.",
    back: "<strong>Training and tuning</strong>: examples that teach or adapt a model to the business. <strong>Grounding</strong>: retrieving current, trusted company data (documents, records) at answer time so outputs are accurate and specific. <strong>Evaluation</strong>: real cases used to measure whether the AI performs well. Widely available models plus unique data is what differentiates.",
    tags: ["Value of data", "AI"]
  },
  {
    id: "gcp-cdl-fc-121",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is metadata, and why does it matter for data value?",
    hint: "Data about data.",
    back: "<strong>Metadata</strong> describes data: its source, owner, schema, meaning of fields, freshness, sensitivity and lineage. Without it people cannot find datasets, judge whether they are trustworthy or know how to use them correctly, so valuable data goes unused. Catalogs make metadata searchable.",
    tags: ["Metadata", "Data governance"]
  },
  {
    id: "gcp-cdl-fc-122",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What are the classic Vs used to describe big data?",
    hint: "Three core ones, often extended.",
    back: "<strong>Volume</strong> (huge amounts), <strong>velocity</strong> (data arriving fast, often continuously) and <strong>variety</strong> (structured, semi-structured and unstructured types). Many add <strong>veracity</strong> (trustworthiness) and <strong>value</strong>. Traditional systems struggle with all of them, which is why scalable cloud data platforms emerged.",
    tags: ["Big data"]
  },
  {
    id: "gcp-cdl-fc-123",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What are the internal and external ways an organization can get value from its data?",
    hint: "Use it yourself, or offer it to others.",
    back: "<strong>Internal</strong>: better decisions, efficiency, personalization and AI features in your own products. <strong>External</strong>: sharing data with partners for mutual benefit (second-party exchanges) or offering <strong>data products</strong> to customers, for example through BigQuery sharing (formerly Analytics Hub), always within consent, privacy and contract limits.",
    tags: ["Value of data", "Data monetization"]
  },
  {
    id: "gcp-cdl-fc-124",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does it mean for an organization to be data-driven?",
    hint: "Evidence first.",
    back: "Decisions at every level are based on <strong>evidence from data</strong> rather than instinct or seniority: people can access the data they need, trust it, and are expected to use it. It requires accessible platforms, governed and trusted data, data literacy, and leaders who ask for evidence.",
    tags: ["Value of data", "Culture"]
  },
  {
    id: "gcp-cdl-fc-125",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Why is the volume of data organizations hold growing so quickly?",
    hint: "Every device and interaction produces some.",
    back: "More interactions are digital (apps, e-commerce, online service), <strong>IoT sensors</strong> stream readings constantly, media such as video and images are cheap to capture, and machine-generated logs grow with every system. Cheap cloud storage means little is deleted. The challenge shifts from collecting data to making it usable.",
    tags: ["Big data", "Value of data"]
  }
];

export default GCP_CDL_FLASHCARDS_5;
