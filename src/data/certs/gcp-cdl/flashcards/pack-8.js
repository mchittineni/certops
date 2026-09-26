export const GCP_CDL_FLASHCARDS_8 = [
  {
    id: "gcp-cdl-fc-176",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Looker vs Looker Studio: what is each for?",
    hint: "Governed enterprise platform vs free self-service reports.",
    back: "<strong>Looker</strong> is the enterprise BI platform: a governed <strong>semantic model (LookML)</strong> defines metrics once, and it adds embedded analytics, actions, fine-grained access and conversational analytics. <strong>Looker Studio</strong> is a <strong>free, self-service</strong> reporting tool with hundreds of connectors for quick dashboards without modelling. Choose Looker for consistent metrics at scale; Looker Studio for fast, lightweight reporting.",
    tags: ["Looker", "Looker Studio"]
  },
  {
    id: "gcp-cdl-fc-177",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is LookML, and why does a semantic layer matter?",
    hint: "Define once, reuse everywhere.",
    back: "<strong>LookML</strong> is Looker's modelling language for describing dimensions, measures, joins and business logic on top of the database. That <strong>semantic layer</strong> means a metric such as revenue is <strong>defined once</strong>, reviewed through <strong>Git version control</strong>, and reused by every dashboard, explore and AI question, so self-service users get consistent, trusted numbers without writing SQL.",
    tags: ["Looker", "LookML", "Semantic layer"]
  },
  {
    id: "gcp-cdl-fc-178",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Why do Looker dashboards on BigQuery show fresh data without extracts?",
    hint: "Where does the query actually run?",
    back: "Looker is <strong>in-database</strong>: it generates SQL and sends it to <strong>BigQuery</strong> (or another SQL database) each time a dashboard or explore runs, instead of copying data into its own store. Dashboards therefore reflect whatever has landed in BigQuery, even data streamed in seconds ago, and there are no extract jobs to schedule or copies to secure. Caching can be tuned when freshness matters less than speed.",
    tags: ["Looker", "BigQuery", "Real-time dashboards"]
  },
  {
    id: "gcp-cdl-fc-179",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does democratizing data mean for an organization?",
    hint: "Who can get answers, and how fast.",
    back: "<strong>Democratizing data</strong> means giving people across the business, not just analysts, <strong>self-service access</strong> to trusted data so they can answer their own questions and make decisions quickly. It needs <strong>easy tools</strong> (Looker, Looker Studio, natural-language questions), <strong>governed definitions</strong> so everyone sees the same numbers, and <strong>access controls</strong> so people see only what they should.",
    tags: ["Data democratization", "Looker"]
  },
  {
    id: "gcp-cdl-fc-180",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is Looker embedded analytics, and who uses it?",
    hint: "Analytics inside someone else's app.",
    back: "<strong>Embedded analytics</strong> places Looker dashboards, explores or visualisations <strong>inside another application</strong> such as a customer portal, partner site or internal tool, under the host's branding. Per-user data restrictions come from <strong>user attributes</strong>. Software companies use it to offer analytics as a product feature, or even to monetise data, without building their own charting system.",
    tags: ["Looker", "Embedded analytics"]
  },
  {
    id: "gcp-cdl-fc-181",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does Conversational Analytics in Looker let business users do?",
    hint: "Plain language in, governed answers out.",
    back: "<strong>Conversational Analytics</strong> uses <strong>Gemini</strong> so users can ask data questions in <strong>natural language</strong> and get answers, charts and explanations. Because answers are <strong>grounded in Looker's semantic model</strong>, they use the same governed metric definitions as dashboards, reducing the risk of an AI inventing its own calculation. It widens self-service to people who will never write SQL.",
    tags: ["Looker", "Conversational Analytics", "Gemini"]
  },
  {
    id: "gcp-cdl-fc-182",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Looker Studio vs Looker Studio Pro: what does Pro add?",
    hint: "Enterprise management of the same reporting tool.",
    back: "<strong>Looker Studio</strong> is free, with reports owned by individual users. <strong>Looker Studio Pro</strong> is a paid edition that adds <strong>organizational ownership</strong> of reports and data sources (tied to a Google Cloud project, so assets are not lost when people leave), <strong>team workspaces</strong>, <strong>Google Cloud support</strong> and additional Gemini-powered features. Neither provides Looker's governed LookML semantic model.",
    tags: ["Looker Studio", "Looker Studio Pro"]
  },
  {
    id: "gcp-cdl-fc-183",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "How can Looker push insights into people's workflows instead of waiting for them to open a dashboard?",
    hint: "Schedules, alerts, actions.",
    back: "<strong>Scheduled deliveries</strong> send dashboards or data on a timetable to email, chat or storage. <strong>Alerts</strong> notify users when a value crosses a threshold. <strong>Actions</strong> through the <strong>Action Hub</strong> send data to other tools and services, such as Slack or a ticketing system, or trigger a workflow from a data point. Insights then reach decision makers where they already work.",
    tags: ["Looker", "Alerts", "Workflow integration"]
  },
  {
    id: "gcp-cdl-fc-184",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is Connected Sheets for BigQuery?",
    hint: "Familiar interface, warehouse-scale data.",
    back: "<strong>Connected Sheets</strong> lets users analyse <strong>BigQuery</strong> data from <strong>Google Sheets</strong> with pivot tables, charts and formulas, while BigQuery runs the queries, so sheet users can work with billions of rows without SQL. It widens access for sheet-savvy users, but each user builds their own calculations, so it does not replace a governed semantic layer like Looker's.",
    tags: ["Connected Sheets", "BigQuery"]
  },
  {
    id: "gcp-cdl-fc-185",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does BigQuery BI Engine do for dashboards?",
    hint: "Memory, not more copies.",
    back: "<strong>BI Engine</strong> is an <strong>in-memory analysis service</strong> built into BigQuery. You reserve memory capacity, and it caches frequently queried data to give <strong>sub-second</strong> responses for dashboards in Looker, Looker Studio and other BI tools, with no data movement and no dashboard changes. It targets interactive, repetitive dashboard queries rather than large batch jobs.",
    tags: ["BigQuery", "BI Engine"]
  },
  {
    id: "gcp-cdl-fc-186",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Batch processing vs stream processing: what is the difference?",
    hint: "Bounded chunks vs never-ending flow.",
    back: "<strong>Batch</strong> processes a <strong>bounded</strong> set of data collected over a period, such as last night's orders, on a schedule; it is simpler and cheaper, with latency of hours. <strong>Streaming</strong> processes <strong>unbounded</strong> data continuously, event by event, as it arrives, giving results in seconds or less, at higher cost and complexity. Many organizations use both.",
    tags: ["Batch processing", "Stream processing"]
  },
  {
    id: "gcp-cdl-fc-187",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Name four business scenarios where real-time streaming analytics pays off.",
    hint: "The data is worth most in the first seconds.",
    back: "<strong>Fraud detection</strong>: block a payment before it clears. <strong>Personalization</strong>: adapt recommendations during the shopping session. <strong>IoT and predictive maintenance</strong>: stop a machine before it fails. <strong>Logistics and inventory</strong>: reroute vehicles and keep stock levels accurate online. Other examples include live gaming leaderboards and security threat detection. The common thread: the value of the insight decays quickly.",
    tags: ["Streaming analytics", "Business value"]
  },
  {
    id: "gcp-cdl-fc-188",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Decision rule: when is streaming the wrong choice?",
    hint: "Ask what happens if the answer arrives tomorrow.",
    back: "Choose <strong>batch</strong> when nobody acts on the result faster than the batch cycle: monthly close, payroll, regulatory and board reporting, periodic model retraining. Streaming adds <strong>always-on compute cost</strong>, handling of late and out-of-order data, and more operational complexity. It is justified only when <strong>acting within seconds or minutes</strong> produces measurable value; being more modern is not a reason.",
    tags: ["Batch processing", "Streaming analytics", "Architecture decisions"]
  },
  {
    id: "gcp-cdl-fc-189",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is Pub/Sub, and what are topics and subscriptions?",
    hint: "Publishers and subscribers never meet.",
    back: "<strong>Pub/Sub</strong> is Google Cloud's fully managed, global, <strong>asynchronous messaging</strong> service for event ingestion and distribution. Producers publish messages to a <strong>topic</strong>; each consumer reads through its own <strong>subscription</strong>, so many independent systems receive the same events at their own pace. It decouples systems, absorbs spikes, and scales automatically without servers to manage.",
    tags: ["Pub/Sub", "Messaging"]
  },
  {
    id: "gcp-cdl-fc-190",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What types of Pub/Sub subscription exist, and when do the export types help?",
    hint: "Four ways to receive.",
    back: "<strong>Pull</strong>: the subscriber asks for messages. <strong>Push</strong>: Pub/Sub sends each message to an HTTPS endpoint, such as a Cloud Run service. <strong>BigQuery subscription</strong>: writes messages directly into a BigQuery table. <strong>Cloud Storage subscription</strong>: writes batches of messages as files to a bucket. The export types remove the need for a pipeline when data needs no transformation on the way.",
    tags: ["Pub/Sub", "Subscriptions"]
  },
  {
    id: "gcp-cdl-fc-191",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is Dataflow, and what programming model does it use?",
    hint: "One model for both batch and streaming.",
    back: "<strong>Dataflow</strong> is a fully managed, <strong>serverless</strong> service for running data processing pipelines written with <strong>Apache Beam</strong>, an open-source model in which the same code handles <strong>batch and streaming</strong>. Dataflow provisions and <strong>autoscales</strong> workers, balances work and recovers from failures, so teams focus on transformation logic rather than clusters.",
    tags: ["Dataflow", "Apache Beam"]
  },
  {
    id: "gcp-cdl-fc-192",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Dataflow vs Managed Service for Apache Spark: how do you choose?",
    hint: "New Beam pipelines, or existing Spark code?",
    back: "Choose <strong>Dataflow</strong> for <strong>new</strong> pipelines, especially streaming, when you want serverless autoscaling and one Apache Beam codebase for batch and stream. Choose <strong>Managed Service for Apache Spark</strong> (formerly Dataproc) when you have <strong>existing Spark or Hadoop jobs</strong> or skills and want to move them with minimal change, or need the wider open-source ecosystem.",
    tags: ["Dataflow", "Managed Service for Apache Spark"]
  },
  {
    id: "gcp-cdl-fc-193",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Managed Service for Apache Spark: cluster deployment vs serverless deployment?",
    hint: "Do you want to see the cluster?",
    back: "<strong>Clusters</strong> (formerly Dataproc on Compute Engine): managed clusters you size and configure, often ready in about 90 seconds; best for long-running or highly customised Spark and Hadoop environments. <strong>Serverless</strong> (formerly Serverless for Apache Spark): submit a Spark or PySpark workload and Google provisions and scales resources for that job only, with <strong>no cluster to manage</strong> and pay only while it runs. The rename to one product took effect in April 2026.",
    tags: ["Managed Service for Apache Spark", "Serverless"]
  },
  {
    id: "gcp-cdl-fc-194",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "In streaming pipelines, what problem do windowing and watermarks solve?",
    hint: "An endless stream has no natural total, and events arrive late.",
    back: "A stream never ends, so aggregations need <strong>windows</strong>: fixed (every 5 minutes), sliding, or session windows grouping bursts of activity. Events also arrive <strong>late or out of order</strong> because of network delays; a <strong>watermark</strong> estimates how complete the data for a window is, and triggers decide when to emit or update results. Dataflow and Apache Beam handle these for you, which is why they suit accurate real-time aggregation.",
    tags: ["Dataflow", "Stream processing", "Windowing"]
  },
  {
    id: "gcp-cdl-fc-195",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What are the main ways to get streaming data into BigQuery?",
    hint: "Direct API, a subscription, a pipeline, or database changes.",
    back: "<strong>Storage Write API</strong>: applications write rows directly with high throughput. <strong>Pub/Sub BigQuery subscription</strong>: messages land in a table with no pipeline. <strong>Dataflow</strong>: when events need transforming or enriching first. <strong>Datastream</strong>: replicates database changes from sources such as MySQL, PostgreSQL and Oracle. Streamed rows are queryable within seconds.",
    tags: ["BigQuery", "Streaming ingestion"]
  },
  {
    id: "gcp-cdl-fc-196",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Name the classic Google Cloud serverless streaming analytics pipeline, stage by stage.",
    hint: "Ingest, process, store, visualise.",
    back: "<strong>Pub/Sub</strong> ingests events from apps and devices. <strong>Dataflow</strong> cleans, enriches and aggregates them continuously. <strong>BigQuery</strong> stores the results for SQL analysis over live and historical data. <strong>Looker</strong> or Looker Studio visualises them and pushes insights to users. Every stage is fully managed and scales automatically.",
    tags: ["Pub/Sub", "Dataflow", "BigQuery", "Looker"]
  },
  {
    id: "gcp-cdl-fc-197",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "How long does Pub/Sub keep messages, and can consumers replay them?",
    hint: "Unacknowledged by default, replay by seeking.",
    back: "Pub/Sub keeps <strong>unacknowledged</strong> messages for <strong>7 days by default</strong>, configurable up to 31 days, so a consumer that goes down can catch up without losing events. With retention of acknowledged messages or topic retention, a subscription can <strong>seek</strong> back to a timestamp or snapshot and <strong>replay</strong> messages, for example after fixing a bug in a downstream pipeline.",
    tags: ["Pub/Sub", "Message retention"]
  },
  {
    id: "gcp-cdl-fc-198",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What does Cloud Composer add to a data platform?",
    hint: "Not a processing engine: a conductor.",
    back: "<strong>Cloud Composer</strong> is a fully managed <strong>Apache Airflow</strong> service for <strong>orchestrating</strong> workflows: it schedules and sequences tasks across services, such as loading files, running a BigQuery job, starting a Dataflow or Spark job and then refreshing a report, and handles dependencies, retries and monitoring. It coordinates the work; the other services do the processing.",
    tags: ["Cloud Composer", "Orchestration"]
  },
  {
    id: "gcp-cdl-fc-199",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "Pub/Sub vs Google Cloud Managed Service for Apache Kafka: when does each fit?",
    hint: "Serverless simplicity, or an existing Kafka ecosystem.",
    back: "Choose <strong>Pub/Sub</strong> for <strong>serverless, global</strong> messaging with no brokers or partitions to plan, integrated with Dataflow, BigQuery and Cloud Run. Choose <strong>Managed Service for Apache Kafka</strong> when you already run <strong>Kafka</strong> and depend on its clients, connectors, partition ordering or tooling, and want Google to operate the clusters so applications move without rewriting to a new API.",
    tags: ["Pub/Sub", "Apache Kafka", "Messaging"]
  },
  {
    id: "gcp-cdl-fc-200",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    front: "What is a data pipeline, and why modernize one?",
    hint: "Plumbing from source to insight.",
    back: "A <strong>data pipeline</strong> moves data from sources through <strong>ingestion, processing and storage</strong> to where it is analysed or acted on. Modernizing with managed services such as Pub/Sub, Dataflow and Managed Service for Apache Spark replaces fragile scripts and fixed on-premises clusters with <strong>autoscaling, serverless components</strong>, supports <strong>real-time</strong> as well as batch data, and cuts operational work.",
    tags: ["Data pipelines", "Modernization"]
  }
];

export default GCP_CDL_FLASHCARDS_8;
