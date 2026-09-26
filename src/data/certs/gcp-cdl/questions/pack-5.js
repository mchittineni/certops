export const GCP_CDL_QUESTIONS_5 = [
  {
    id: "gcp-cdl-101",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Changing prices while demand is still high",
    scenario: "A ride-hailing company sees demand surge in one neighborhood when a stadium event ends. Pricing and driver incentives are adjusted only in a weekly review, so by the time changes happen the moment has passed and riders wait too long.",
    question: "Which value of data would most help the company in this situation?",
    options: [
      { id: 'A', text: "Long-term archiving, keeping every trip record for years to satisfy tax and regulatory audits." },
      { id: 'B', text: "Data monetization, selling anonymized trip records to urban planners as a separate revenue stream." },
      { id: 'C', text: "Historical trend analysis, comparing this year's quarterly trip totals with the last five years." },
      { id: 'D', text: "Real-time insight, acting on the latest data while events are still unfolding." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Data creates value when it produces real-time business insight: detecting the demand surge as it happens lets the company adjust pricing and send drivers within minutes. Archiving trip records meets obligations but does not change what happens after tonight's event. Multi-year trend comparisons inform strategy, not decisions that must be made in minutes. Selling anonymized data may create revenue, but it does nothing for riders waiting now.",
    referenceUrl: "https://cloud.google.com/learn/what-is-streaming-analytics",
    tags: ["Value of data", "Real-time insights"]
  },
  {
    id: "gcp-cdl-102",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Plant-based sales creeping up for three years",
    scenario: "A grocery chain's analysts combined three years of sales, promotions and regional demographics and found that plant-based products have grown 4% every quarter in urban stores while flat elsewhere. The finding changed next year's shelf-space and supplier plans.",
    question: "Which value of data does this example illustrate?",
    options: [
      { id: 'A', text: "Real-time alerting, where data warns store managers the moment a shelf runs out of a product." },
      { id: 'B', text: "Regulatory compliance, where data is retained to prove the chain followed food-labeling rules." },
      { id: 'C', text: "Identifying trends, where patterns over time reveal shifts that shape future decisions." },
      { id: 'D', text: "Operational automation, where data triggers actions in systems without any human involvement." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Analyzing data over time to reveal patterns, such as steady growth of a category in certain locations, is how organizations identify trends and turn them into strategy, here shelf space and supplier choices. Automation acts on data without people, whereas analysts and planners made these decisions. Compliance retention proves adherence to rules; it did not reveal a shift in demand. Real-time alerting responds to immediate events, not multi-year patterns.",
    referenceUrl: "https://cloud.google.com/learn/what-is-predictive-analytics",
    tags: ["Value of data", "Trends"]
  },
  {
    id: "gcp-cdl-103",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Closing stores on instinct or on evidence",
    scenario: "A bookstore chain's board must decide which 20 of its 180 stores to close. In past rounds, closures were chosen by regional managers' opinions, and several profitable stores were shut while loss-making ones stayed open.",
    question: "How does data add the most value to this decision?",
    options: [
      { id: 'A', text: "By collecting managers' opinions in a shared database so that every regional view is given an equal weight." },
      { id: 'B', text: "By informing strategic decisions with evidence such as store profitability, footfall trends and local demand." },
      { id: 'C', text: "By replacing the board's decision with an automated system that closes stores whenever sales fall below a line." },
      { id: 'D', text: "By storing every past decision so that the board can show auditors how each closure was eventually approved." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "One of the main reasons data is valuable is that it informs strategic decision-making: profitability, footfall trends and local demand give the board evidence to weigh, reducing the chance of closing profitable stores. Strategic choices like closures still need human judgment about people, leases and brand, so fully automating them is not the goal. Recording past decisions supports audit but does not improve the next one. Collecting opinions in a database structures them but leaves the decision based on opinion rather than evidence.",
    referenceUrl: "https://cloud.google.com/learn/what-is-business-intelligence",
    tags: ["Value of data", "Decision-making"]
  },
  {
    id: "gcp-cdl-104",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "The same model as every competitor",
    scenario: "An insurer and three of its competitors all have access to the same leading foundation models. The insurer's CEO asks what will make its AI-powered claims assistant better than the rivals' versions if everyone can use the same models.",
    question: "What is the most likely source of the insurer's advantage?",
    options: [
      { id: 'A', text: "Its own high-quality data, such as decades of case history and policy documents, used to ground the AI." },
      { id: 'B', text: "Choosing the model with the most parameters, since larger models always give companies a lasting lead." },
      { id: 'C', text: "Writing longer prompts than competitors, since more instructions guarantee answers that are more accurate." },
      { id: 'D', text: "Negotiating the lowest price per token, since cheaper inference lets the insurer run the assistant more." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data fuels AI: when models are widely available, the differentiator becomes the organization's own data, such as its claims history, policy wording and customer interactions, used to ground, tune and evaluate the assistant so it answers accurately for this insurer's business. Competitors can pick the same large models, so size alone is not a lasting advantage. Lower inference cost helps the budget but not answer quality. Longer prompts do not guarantee accuracy, and prompts are easy for rivals to copy.",
    referenceUrl: "https://cloud.google.com/data-cloud",
    tags: ["Value of data", "AI"]
  },
  {
    id: "gcp-cdl-105",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Petabytes stored, almost none of it used",
    scenario: "A telecom operator stores several petabytes of network logs, call records and customer interactions, and its storage bill grows every year. An internal review finds that fewer than 5% of datasets have been queried in the past year, and managers still ask for basic reports that take weeks.",
    question: "What best explains why this data is creating so little value?",
    options: [
      { id: 'A', text: "The operator stores too little data, and value will appear once it collects every record from each network device." },
      { id: 'B', text: "Data creates value only when it is accessible, trusted and used to drive decisions, not merely when it is kept." },
      { id: 'C', text: "Network data has no business value, so the operator should delete it and rely on purchased third-party data." },
      { id: 'D', text: "The data is on the wrong storage class, and moving all of it to the cheapest archive tier will unlock its value." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Collected data is only potential value; it pays off when it is discoverable, trustworthy, processed and analyzed, and when insights are acted on. Unqueried datasets and weeks-long reports point to missing analysis and activation, not a shortage of data. Collecting even more would add cost without fixing the bottleneck. Moving everything to archive storage lowers cost but makes the data slower and costlier to reach. Network and customer data can support churn prediction, network planning and personalization, so deleting it and buying third-party data would discard a unique asset.",
    referenceUrl: "https://cloud.google.com/learn/what-is-big-data",
    tags: ["Value of data", "Data activation"]
  },
  {
    id: "gcp-cdl-106",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "What rivals cannot easily copy",
    scenario: "A fitness-app company has collected, with user consent, eight years of workout, sleep and nutrition logs from 12 million members. A new competitor has more funding and hires engineers from the same universities, and the board asks what asset gives the company a durable edge.",
    question: "Which asset is hardest for the competitor to replicate?",
    options: [
      { id: 'A', text: "Its choice of programming languages, which lets it hire from the same pool of talent as the competitor." },
      { id: 'B', text: "Its proprietary first-party data, gathered over years, which fuels insights and AI features." },
      { id: 'C', text: "Its open source libraries, which the engineering team uses to build the mobile app and back-end services." },
      { id: 'D', text: "Its cloud provider account, which gives it access to managed databases and analytics services on demand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Years of consented first-party data about member behavior are unique to the company and cannot be bought or rebuilt quickly, so they are a durable competitive asset that powers insight and AI features. A cloud account and its managed services are available to any competitor. Open source libraries are, by definition, available to everyone. Programming languages and hiring pools are shared with the competitor, as the scenario notes.",
    referenceUrl: "https://cloud.google.com/solutions/customer-data-platform",
    tags: ["Value of data", "First-party data"]
  },
  {
    id: "gcp-cdl-107",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Recording each order as it happens",
    scenario: "An online florist needs a system that records every order, payment and delivery update the instant it happens, handles thousands of small reads and writes a minute, and never loses or half-saves an order.",
    question: "Which kind of data system is designed for this job?",
    options: [
      { id: 'A', text: "A data lake, which keeps raw files of any format cheaply for later exploration and analysis." },
      { id: 'B', text: "An operational database, which captures and updates individual transactions quickly and reliably." },
      { id: 'C', text: "A data warehouse, which combines historical data from many sources for large analytical queries." },
      { id: 'D', text: "A business intelligence tool, which turns prepared datasets into dashboards for decision-makers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Operational, or transactional, databases are built to capture and update individual records as business events happen, handling many small reads and writes with guarantees that each transaction is saved completely or not at all. A data lake stores raw data for later analysis rather than serving live transactions. A data warehouse is optimized for large analytical queries over historical data. A BI tool visualizes data; it does not record orders.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-relational-database",
    tags: ["Databases", "Transactions"]
  },
  {
    id: "gcp-cdl-108",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Five years of data from six systems in one place",
    scenario: "A hotel group wants analysts to answer questions such as 'how did loyalty members' spending change after the renovation program' using five years of data from its booking, point-of-sale, loyalty, finance, marketing and housekeeping systems, all cleaned into a consistent structure.",
    question: "Which kind of data system fits this need?",
    options: [
      { id: 'A', text: "An operational database, which records individual bookings and payments as they happen." },
      { id: 'B', text: "A message queue, which passes events between applications so that they stay decoupled." },
      { id: 'C', text: "A file share, which stores documents in folders for staff to open and edit one at a time." },
      { id: 'D', text: "A data warehouse, which integrates structured historical data for analysis and reporting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A data warehouse brings together cleaned, structured data from many source systems over long periods and is optimized for analytical queries and reporting across it, exactly what the hotel group's questions require; BigQuery is Google Cloud's serverless data warehouse. An operational database runs the live business but is not designed for large cross-system analysis. A message queue moves events between applications and does not store history for analysis. A file share holds documents, not integrated data for querying.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-data-warehouse",
    tags: ["Data warehouse", "Analytics"]
  },
  {
    id: "gcp-cdl-109",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Keeping raw data for questions not yet asked",
    scenario: "An agricultural research firm collects drone images, sensor readings in JSON, lab spreadsheets and field notes. Its data scientists want all of it kept in its original form at low cost, because they do not yet know which questions or models they will need in the future.",
    question: "Which kind of data repository fits this need?",
    options: [
      { id: 'A', text: "A data lake, which stores large volumes of raw data in its native format for later analysis." },
      { id: 'B', text: "A dashboard tool, which keeps copies of the data it displays so that charts load very quickly." },
      { id: 'C', text: "An operational database, which stores each transaction in tables for fast individual updates." },
      { id: 'D', text: "A data warehouse, which requires data to be cleaned into a fixed schema before it is loaded." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A data lake is a centralized repository that stores large amounts of structured, semi-structured and unstructured data in its native format, cheaply, so it can be explored and processed later for purposes not yet defined; on Google Cloud, Cloud Storage commonly serves as the lake. A warehouse requires data to be modeled into a schema first, which suits known questions. An operational database is designed for transactions, not raw images and files. Dashboard tools display prepared data rather than acting as the storage layer.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-data-lake",
    tags: ["Data lake", "Raw data"]
  },
  {
    id: "gcp-cdl-110",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A lake nobody can find anything in",
    scenario: "Three years after launching a data lake, a manufacturer has 40,000 folders of files. Analysts cannot tell which datasets are current, who owns them or what the columns mean, so they rebuild data from source systems instead of using the lake.",
    question: "What has the manufacturer's data lake turned into, and what is missing?",
    options: [
      { id: 'A', text: "A data warehouse, because files stored for three years automatically become structured tables." },
      { id: 'B', text: "A data swamp, because the lake lacks metadata, cataloging, ownership and quality management." },
      { id: 'C', text: "A transactional database, because the lake has grown too large to be used for analysis at all." },
      { id: 'D', text: "A data mart, because each analyst builds a copy for one department's reporting on the side." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A data lake without metadata, a catalog, clear ownership and quality controls degrades into a data swamp: the data exists but cannot be found, understood or trusted, so people stop using it. The fix is governance and cataloging, which Google Cloud supports with Knowledge Catalog, formerly called Dataplex. Files do not become warehouse tables with age. A data mart is a curated subset for one team, not an uncatalogued mass of files. Size does not turn a lake into a transactional database.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-data-lake",
    tags: ["Data lake", "Data governance"]
  },
  {
    id: "gcp-cdl-111",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Finance wants one truth, data science wants everything",
    scenario: "At a bank, the finance team needs consistent, governed figures for regulatory reports and dashboards, while data scientists want raw transaction logs, web clickstream and call recordings for experiments. The CDO wants to avoid two disconnected copies of everything.",
    question: "Which architecture best serves both groups?",
    options: [
      { id: 'A', text: "Put all data only in a lake, and have finance build its regulatory figures from raw files for each report." },
      { id: 'B', text: "Put all data only in a warehouse, converting call recordings and clickstream into fixed tables first." },
      { id: 'C', text: "Put all data only in the operational databases and let both teams query production systems as needed." },
      { id: 'D', text: "Land raw data in a lake and curate trusted tables for finance, or use a lakehouse over the same data." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Data lakes and warehouses serve different needs: lakes keep raw, varied data cheaply for exploration, while warehouses provide curated, structured, governed data for consistent reporting. Landing raw data in the lake and curating trusted tables from it, or using a lakehouse that adds warehouse-style management and SQL on top of lake storage, serves both groups from one foundation. Querying production databases risks performance and lacks history. Forcing recordings and clickstream into fixed tables first loses detail the scientists need. Having finance rebuild figures from raw files for every report undermines consistency.",
    referenceUrl: "https://cloud.google.com/discover/data-lake-vs-data-warehouse",
    tags: ["Data lake", "Data warehouse", "Lakehouse"]
  },
  {
    id: "gcp-cdl-112",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Why the order database is not the analytics platform",
    scenario: "A sporting goods retailer's CFO asks why the company needs a separate analytics platform when all sales already sit in the order database. The data team must explain how the two systems differ in purpose and design.",
    question: "Which explanation is accurate?",
    options: [
      { id: 'A', text: "The order database cannot be queried with SQL, while a warehouse accepts SQL but never allows data updates." },
      { id: 'B', text: "The order database is tuned for many small, current transactions; a warehouse is tuned for large scans of history." },
      { id: 'C', text: "The order database stores only unstructured data, while an analytics warehouse stores only images and video files." },
      { id: 'D', text: "The order database is used only by data scientists, while a warehouse is used only by the checkout application." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Operational databases, often called OLTP systems, are designed for many small, fast transactions on current data, while data warehouses, OLAP systems, are designed to scan and aggregate large volumes of historical data from many sources for analysis. Order databases hold structured records, and warehouses hold structured and semi-structured data rather than only media. The checkout application writes to the order database; analysts and BI tools use the warehouse. Both kinds of system typically support SQL, and warehouses can be updated.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-data-warehouse",
    tags: ["Databases", "Data warehouse"]
  },
  {
    id: "gcp-cdl-113",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Purchase histories from the loyalty app",
    scenario: "A coffee chain collects purchase histories, favorite drinks and visit times directly from customers who use its loyalty app and have agreed to its privacy terms. The marketing director asks how this data is classified.",
    question: "What type of data is this?",
    options: [
      { id: 'A', text: "First-party data, gathered by the organization itself from its own customers and channels." },
      { id: 'B', text: "Second-party data, shared by a partner company from the information it collected on its own." },
      { id: 'C', text: "Third-party data, bought from an aggregator that compiles profiles from many outside sources." },
      { id: 'D', text: "Public data, published openly by a government agency for anyone to download and reuse freely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "First-party data is collected directly by an organization from its own customers and channels, such as apps, websites and loyalty programs; it tends to be the most accurate and relevant, and consent is under the organization's control. Third-party data is purchased from aggregators who did not collect it from the buyer's own customers. Second-party data is another organization's first-party data shared through a partnership. Public data is openly published, whereas these records belong to the chain.",
    referenceUrl: "https://cloud.google.com/solutions/customer-data-platform",
    tags: ["Types of data", "First-party data"]
  },
  {
    id: "gcp-cdl-114",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Buying demographic profiles from an aggregator",
    scenario: "A home-security startup buys a list of household income bands and home-ownership status for postal codes from a data broker that compiles it from many public and commercial sources. None of the people in the list are the startup's customers yet.",
    question: "How is this data classified?",
    options: [
      { id: 'A', text: "Third-party data, collected by an outside aggregator with no direct relationship to the buyer's customers." },
      { id: 'B', text: "Second-party data, because the broker and the startup signed a contract before the list was delivered." },
      { id: 'C', text: "Zero-party data, because each household proactively told the startup its income and ownership status." },
      { id: 'D', text: "First-party data, because the startup now stores the purchased list in its own marketing database." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Third-party data is gathered by an organization with no direct relationship to the people it describes and sold to others, like the broker's compiled household list; it offers broad reach but is less accurate, shared with competitors and increasingly limited by privacy rules. Storing purchased data in one's own database does not make it first-party, which requires collecting it directly from one's own customers. Second-party data is a partner's own first-party data shared directly, not data compiled by a broker. Zero-party data is information customers intentionally give the company, which did not happen here.",
    referenceUrl: "https://cloud.google.com/solutions/customer-data-platform",
    tags: ["Types of data", "Third-party data"]
  },
  {
    id: "gcp-cdl-115",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "An airline and a hotel chain pool their insights",
    scenario: "An airline agrees with a hotel chain that each will share, under a data-sharing agreement and with customer consent, selected booking information it has collected from its own customers, so both can create joint travel packages.",
    question: "From the airline's point of view, what type of data does it receive from the hotel chain?",
    options: [
      { id: 'A', text: "Public data, since booking information shared between two companies becomes available to everyone." },
      { id: 'B', text: "First-party data, since the airline's customers also stay at the hotels and the records describe them." },
      { id: 'C', text: "Second-party data, since it is the partner's own first-party data shared with the airline." },
      { id: 'D', text: "Third-party data, since any information that comes from outside the airline counts as bought data." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Second-party data is another organization's first-party data shared directly with a partner, usually under an agreement; the hotel chain collected it from its own guests and passes it to the airline, which makes it second-party data to the airline. It is not the airline's first-party data because the airline did not collect it. Third-party data comes from aggregators with no direct customer relationship, which is not the case with a known partner. Sharing between two partners does not make data public.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/analytics-hub-introduction",
    tags: ["Types of data", "Second-party data"]
  },
  {
    id: "gcp-cdl-116",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Rows and columns of sales transactions",
    scenario: "A hardware store exports each day's sales as a table in which every row is a sale and every row has the same columns: date, store ID, product code, quantity and price. An intern asks what kind of data this is.",
    question: "How is this data classified?",
    options: [
      { id: 'A', text: "Streaming data, because the sales table is exported once a day as a single file for later analysis." },
      { id: 'B', text: "Structured data, because it follows a fixed schema of rows and columns with defined data types." },
      { id: 'C', text: "Unstructured data, because it has no predefined model or columns and must be interpreted first." },
      { id: 'D', text: "Semi-structured data, because each record carries its own tags and fields that can vary per record." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structured data is organized in a predefined schema, such as rows and columns with fixed fields and data types, which makes it easy to store in relational tables and query with SQL; a daily sales table is a classic example. Unstructured data, such as images or free text, has no predefined model. Semi-structured data, such as JSON, carries tags whose fields can vary between records, whereas every row here has the same columns. A once-a-day export is batch data, not a continuous stream.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-relational-database",
    tags: ["Types of data", "Structured data"]
  },
  {
    id: "gcp-cdl-117",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Call recordings, emails and product photos",
    scenario: "A telecom's customer experience team wants to analyze recorded support calls, free-text complaint emails and photos customers upload of damaged equipment. The team leader notes that none of this fits neatly into rows and columns.",
    question: "What type of data is the team working with?",
    options: [
      { id: 'A', text: "Structured data, because each file has a name and a date that can be listed in a table of rows." },
      { id: 'B', text: "Unstructured data, because audio, free text and images have no predefined data model or schema." },
      { id: 'C', text: "Metadata only, because the valuable part of each file is its size and creation time, not its content." },
      { id: 'D', text: "Semi-structured data, because every call recording is saved as JSON with a fixed set of labeled fields." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Unstructured data, such as audio, images, video and free-form text, has no predefined data model, and it makes up the majority of data most organizations hold; AI techniques such as speech-to-text and image analysis are what make it analyzable at scale. A file's name and date are metadata, but the content itself is unstructured. Call recordings are audio files, not JSON records. The business value lies in what customers said and showed, not in file sizes.",
    referenceUrl: "https://cloud.google.com/learn/what-is-big-data",
    tags: ["Types of data", "Unstructured data"]
  },
  {
    id: "gcp-cdl-118",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "App events that carry their own labels",
    scenario: "A food-delivery app sends an event for every tap. Each event is a JSON document with labeled fields such as user_id and screen, but a 'checkout' event includes a nested list of items and a coupon field that 'browse' events lack, and new fields appear as features ship.",
    question: "How are these events best classified?",
    options: [
      { id: 'A', text: "Third-party data, since events generated inside the company's own app are supplied by outside vendors." },
      { id: 'B', text: "Structured data, since every event is guaranteed to have exactly the same columns in the same order." },
      { id: 'C', text: "Unstructured data, since JSON events have no labels and must be interpreted like free-form text." },
      { id: 'D', text: "Semi-structured data, since each record is self-describing with tags but has a flexible, varying schema." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Semi-structured data, such as JSON, XML or log records, carries tags or keys that describe each field but does not require every record to follow one fixed schema, so nested lists and optional fields can vary between events. Structured data requires the same columns in every row, which these events do not have. The events are labeled, so they are not unstructured. They are generated by the company's own app, which makes them first-party, not third-party.",
    referenceUrl: "https://cloud.google.com/learn/what-is-big-data",
    tags: ["Types of data", "Semi-structured data"]
  },
  {
    id: "gcp-cdl-119",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Marketing after tracking cookies disappear",
    scenario: "A cosmetics brand has relied on purchased audience segments and cross-site tracking to target ads. Privacy regulation and browser changes are shrinking both sources, and its targeting accuracy has dropped. The CMO wants a data strategy that holds up as privacy rules tighten.",
    question: "What should the brand prioritize?",
    options: [
      { id: 'A', text: "Buying larger third-party audience lists from more brokers to make up for the drop in accuracy." },
      { id: 'B', text: "Collecting data without consent where regulations are unclear, since enforcement is still limited." },
      { id: 'C', text: "Stopping all data use in marketing, since every kind of customer data now violates privacy rules." },
      { id: 'D', text: "Building consented first-party data through its own channels, such as loyalty, apps and its store." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "As third-party data and cross-site tracking decline under privacy regulation and browser restrictions, first-party data collected with consent through the brand's own channels becomes the most accurate, durable and compliant foundation for personalization; Google Cloud positions customer data platforms and analytics around exactly this shift. Buying more third-party lists doubles down on a shrinking, less accurate source. Collecting data without consent creates legal and reputational risk. Privacy rules govern how data is collected and used, not whether consented customer data may be used at all.",
    referenceUrl: "https://cloud.google.com/solutions/customer-data-platform",
    tags: ["Types of data", "First-party data", "Privacy"]
  },
  {
    id: "gcp-cdl-120",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Insights locked inside 2 million support calls",
    scenario: "A bank has two million recorded support calls and a decade of complaint emails, but its analytics only cover structured fields such as call duration and category codes. The COO suspects the real reasons customers leave are buried in what they actually said.",
    question: "What makes it practical for the bank to analyze this data now?",
    options: [
      { id: 'A', text: "Converting all recordings into table rows by hand, since only structured data can ever be analyzed." },
      { id: 'B', text: "Deleting the recordings after 30 days, since unstructured data costs more to keep than it can ever return." },
      { id: 'C', text: "Adding more category codes to the call form, since agents can capture every reason in structured fields." },
      { id: 'D', text: "AI services that transcribe, summarize and classify audio and text so unstructured data can be analyzed." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Unstructured data such as audio and free text is the majority of most organizations' data and was historically hard to analyze. AI services now transcribe speech, summarize conversations and classify topics and sentiment at scale, turning calls and emails into data that can reveal why customers leave. Manual conversion of two million calls is impractical, and unstructured data can be analyzed directly with these tools. Deleting the recordings discards the insight the COO is after. More category codes rely on agents' judgment and still miss what customers actually said.",
    referenceUrl: "https://cloud.google.com/learn/what-is-big-data",
    tags: ["Unstructured data", "AI"]
  },
  {
    id: "gcp-cdl-121",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Putting insights back into daily operations",
    scenario: "A retailer's analysis shows which shoppers are likely to lapse. The final step of its data project sends those shoppers a personalized offer through the app and flags them for store staff at checkout, so the insight changes what happens with each customer.",
    question: "Which stage of the data supply chain is this final step?",
    options: [
      { id: 'A', text: "Data activation, when insights are put to work in decisions, applications and processes." },
      { id: 'B', text: "Data storage, when data is kept in databases, warehouses or lakes for future processing." },
      { id: 'C', text: "Data genesis, the moment the data is first created by a purchase, a sensor or a user action." },
      { id: 'D', text: "Data collection, when data is gathered from its sources and ingested into the platform." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The data supply chain runs from genesis, collection, processing and storage through analysis to activation. Activation is where insights leave the analytics platform and drive action, such as a personalized offer in an app or an alert for staff, which is where business value is realized. Genesis is the creation of data, such as a purchase. Collection gathers and ingests it. Storage keeps it for later use, before any insight exists.",
    referenceUrl: "https://cloud.google.com/learn/certification/guides/cloud-digital-leader",
    tags: ["Data supply chain", "Data activation"]
  },
  {
    id: "gcp-cdl-122",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Where the data first comes into existence",
    scenario: "A water utility is mapping its data supply chain. Smart meters in 400,000 homes take a reading every 15 minutes, and those readings are then sent over a cellular network to the utility's platform. The analyst must label the stage at which each reading is produced.",
    question: "Which stage of the data supply chain is the meter taking a reading?",
    options: [
      { id: 'A', text: "Data analysis, because each meter compares its reading with the household's usage in previous months." },
      { id: 'B', text: "Data genesis, because this is the point where the data is first created by a device or an event." },
      { id: 'C', text: "Data activation, because each reading immediately triggers a bill that is sent to the household." },
      { id: 'D', text: "Data processing, because the reading is cleaned and converted into a standard unit when it is taken." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Data genesis is the origin of data: the moment it is generated by a device, transaction, interaction or event, such as a meter recording consumption. Sending the readings to the platform is the next stage, collection. Processing cleans and transforms data after it arrives, not when a meter takes a reading. Analysis examines the data for patterns, and activation puts insights to work, such as billing or leak alerts, which happen later in the chain.",
    referenceUrl: "https://cloud.google.com/learn/certification/guides/cloud-digital-leader",
    tags: ["Data supply chain", "Data genesis"]
  },
  {
    id: "gcp-cdl-123",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Three date formats and duplicate customers",
    scenario: "A logistics firm receives shipment records from 30 carriers. Dates arrive in three formats, the same customer appears under different spellings, weights come in pounds and kilograms, and some records are duplicated. Before anyone analyzes the data, a pipeline fixes all of this.",
    question: "Which stage of the data supply chain does the pipeline perform?",
    options: [
      { id: 'A', text: "Data analysis, which is the step where analysts query the data to find patterns and answers." },
      { id: 'B', text: "Data processing, which cleans, standardizes, deduplicates and transforms data so it is usable." },
      { id: 'C', text: "Data activation, which is the step where insights trigger actions in operational applications." },
      { id: 'D', text: "Data genesis, which is the point where carriers first create the shipment records they send." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Data processing transforms collected data into a consistent, trustworthy form: standardizing formats and units, reconciling duplicates and enriching records, often in batch or streaming pipelines such as those built with Dataflow. Genesis happens at the carriers when records are created. Activation comes after analysis, when insights drive action. Analysis queries the prepared data for patterns; the scenario says the pipeline runs before anyone analyzes the data.",
    referenceUrl: "https://cloud.google.com/learn/what-is-etl",
    tags: ["Data supply chain", "Data processing"]
  },
  {
    id: "gcp-cdl-124",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Putting the data stages in order",
    scenario: "A consultancy is teaching a client's managers how data turns into value. The slide shows six stages in random order, and the managers are asked to arrange them in the sequence data travels through a data supply chain.",
    question: "Which order is correct?",
    options: [
      { id: 'A', text: "Genesis, analysis, collection, activation, storage, processing" },
      { id: 'B', text: "Collection, genesis, storage, processing, activation, analysis" },
      { id: 'C', text: "Storage, genesis, processing, collection, analysis, activation" },
      { id: 'D', text: "Genesis, collection, processing, storage, analysis, activation" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Data is first created (genesis), then gathered and ingested (collection), cleaned and transformed (processing), kept in databases, warehouses or lakes (storage), examined for patterns and answers (analysis) and finally put to work in decisions and applications (activation). Collection cannot precede the creation of data. Analysis cannot happen before data is collected. Data cannot be stored before it exists, and activation always follows analysis because it acts on the insights analysis produces.",
    referenceUrl: "https://cloud.google.com/learn/certification/guides/cloud-digital-leader",
    tags: ["Data supply chain"]
  },
  {
    id: "gcp-cdl-125",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Accurate dashboards that change nothing",
    scenario: "A hospital group built a pipeline that collects bed, staffing and admissions data, cleans it, stores it in BigQuery and powers accurate dashboards predicting next week's bed shortages. Six months on, wards still run short because the predictions never reach the staffing rota or the people who schedule nurses.",
    question: "Where is the hospital group's data supply chain breaking down?",
    options: [
      { id: 'A', text: "At collection, because the pipeline gathers too few data sources to make the dashboards accurate." },
      { id: 'B', text: "At processing, because the cleaning steps remove the admissions records that the model depends on." },
      { id: 'C', text: "At activation, because the insights are not fed into the scheduling systems and staff who act on them." },
      { id: 'D', text: "At storage, because BigQuery cannot keep hospital data long enough to support weekly predictions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Every stage up to analysis works: data is collected, processed, stored and analyzed into accurate predictions. Value is lost at activation, the step where insights are embedded into operational systems and decisions, such as feeding predicted shortages into the staffing rota or alerting schedulers. The scenario states the dashboards are accurate, so collection and processing are not the weak points. BigQuery can retain data indefinitely, so storage duration is not the problem.",
    referenceUrl: "https://cloud.google.com/learn/certification/guides/cloud-digital-leader",
    tags: ["Data supply chain", "Data activation"]
  }
];

export default GCP_CDL_QUESTIONS_5;
