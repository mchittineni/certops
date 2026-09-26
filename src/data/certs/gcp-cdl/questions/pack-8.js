export const GCP_CDL_QUESTIONS_8 = [
  {
    id: "gcp-cdl-176",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Every report request goes through two analysts",
    scenario: "At a furniture retailer, store, merchandising and finance managers must ask two overworked analysts for every new report, and requests take weeks. Leadership wants business users to explore data themselves, but only with approved definitions of metrics such as margin and sell-through.",
    question: "Which approach best meets this goal?",
    options: [
      { id: 'A', text: "Connect BigQuery to Connected Sheets so each manager can explore and build formulas for the approved metrics in a sheet." },
      { id: 'B', text: "Adopt Looker, with metrics defined once in its semantic model so managers explore data using the approved definitions." },
      { id: 'C', text: "Build Cloud Monitoring dashboards over the BigQuery project so managers can watch its query and slot usage over time." },
      { id: 'D', text: "Give every manager direct SQL access in the BigQuery console so they can write their own queries against the raw tables." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Looker democratises data through a governed semantic layer: analysts define dimensions and measures such as margin once in LookML, and business users explore, filter and build reports through a point-and-click interface that always applies those definitions. Raw SQL access excludes managers who cannot write SQL and invites everyone to calculate margin differently. Connected Sheets opens BigQuery data to sheet users, but each manager would write their own formulas, so there is no single approved definition. Cloud Monitoring shows the operational health of the project, not business metrics.",
    referenceUrl: "https://cloud.google.com/looker/docs/intro",
    tags: ["Looker", "Self-service analytics", "Semantic layer"]
  },
  {
    id: "gcp-cdl-177",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A quick campaign dashboard with no budget",
    scenario: "A marketing coordinator at a small nonprofit wants a shareable dashboard combining Google Ads performance with donation figures from a Google Sheet. There is no budget for licences, no data team to build models, and she wants it running this afternoon.",
    question: "Which tool is the best fit?",
    options: [
      { id: 'A', text: "Knowledge Catalog, which lets users search for data assets and read their descriptions and lineage." },
      { id: 'B', text: "Looker Studio, a free self-service tool with built-in connectors for Google Ads, Sheets and other sources." },
      { id: 'C', text: "Looker, an enterprise platform in which developers first build a governed LookML model for the data." },
      { id: 'D', text: "Cloud Monitoring, which charts metrics from Google Cloud resources on dashboards shared with the team." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Looker Studio is Google's free, self-service reporting tool with hundreds of connectors, including Google Ads and Google Sheets, so a non-technical user can build and share a dashboard in minutes. Looker is the enterprise BI platform whose strength is a governed semantic model; it needs licences and modelling work the nonprofit does not have. Cloud Monitoring charts infrastructure and application metrics, not marketing and donation data. Knowledge Catalog helps people find and understand data assets but does not build dashboards.",
    referenceUrl: "https://cloud.google.com/looker/docs/studio",
    tags: ["Looker Studio", "Self-service analytics"]
  },
  {
    id: "gcp-cdl-178",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Store managers who want to just ask",
    scenario: "A pharmacy chain's store managers have no SQL skills and little time to learn dashboards. They want to type questions such as which products sold fewer units this week than last in plain language and get answers that use the same trusted metric definitions as the company's Looker reports.",
    question: "Which capability fits this need?",
    options: [
      { id: 'A', text: "A BigQuery ML model trained on sales history that forecasts next week's unit sales for each product line." },
      { id: 'B', text: "Conversational Analytics in Looker, which answers plain-language questions grounded in its semantic model." },
      { id: 'C', text: "SQL training for every manager so they can query the sales tables in BigQuery Studio when questions arise." },
      { id: 'D', text: "A Looker Studio report with filter controls that managers adjust to narrow a set of prebuilt sales charts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conversational Analytics in Looker uses Gemini to let users ask questions in natural language and returns answers and charts grounded in Looker's semantic model, so the metrics match the company's governed definitions. A BigQuery ML forecast predicts future values but does not answer ad hoc questions about the past week. A filtered Looker Studio report only answers the questions its designer anticipated. Training every manager in SQL is exactly the effort they cannot spare, and hand-written queries would not be tied to the governed definitions.",
    referenceUrl: "https://cloud.google.com/looker/docs/conversational-analytics-overview",
    tags: ["Looker", "Conversational Analytics", "Gemini"]
  },
  {
    id: "gcp-cdl-179",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Analytics inside a software product's portal",
    scenario: "A logistics software company wants its customers to see interactive shipment dashboards inside the company's own web portal, under its branding, with each customer seeing only its own data. The engineering team does not want to build and maintain a charting system from scratch.",
    question: "Which approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Looker embedded analytics to place governed, filtered dashboards directly inside the customer portal." },
      { id: 'B', text: "Publish each customer's data as a BigQuery sharing listing so customers can analyse it in their own projects." },
      { id: 'C', text: "Build a custom charting service on Cloud Run that queries BigQuery and renders every chart for each customer." },
      { id: 'D', text: "Schedule Looker Studio to email each customer a PDF of its shipment report, outside the portal, weekly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Looker embedded analytics puts interactive Looker dashboards and explores inside another application, with branding and per-customer data restrictions applied through user attributes, so the company offers analytics without building a charting system. A custom Cloud Run service is exactly the build-and-maintain effort the team wants to avoid. BigQuery sharing requires each customer to have its own Google Cloud project and analytics skills, and nothing appears in the portal. Weekly PDFs are static and live outside the portal.",
    referenceUrl: "https://cloud.google.com/looker/docs/single-sign-on-embedding",
    tags: ["Looker", "Embedded analytics"]
  },
  {
    id: "gcp-cdl-180",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "One dashboard, twelve regional managers",
    scenario: "A car rental company wants all twelve regional managers to use the same Looker sales dashboard, but each manager may see only the figures for their own region. The analytics team does not want to maintain twelve copies of the dashboard as it evolves.",
    question: "How should the team meet this requirement?",
    options: [
      { id: 'A', text: "Use Looker access filters driven by a region user attribute, so one dashboard shows each manager their data." },
      { id: 'B', text: "Create twelve copies of the Looker dashboard, each filtered to a region and shared only with that manager." },
      { id: 'C', text: "Share a Looker Studio link to the dashboard and ask each manager to pick their region from a filter control." },
      { id: 'D', text: "Apply BigQuery column-level security so that each region's revenue column is hidden from the others." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Looker user attributes store values such as each person's region, and access filters in the model apply them automatically to every query, so one dashboard shows each manager only their region's rows. Twelve copies is the maintenance burden the team wants to avoid. Column-level security hides columns, whereas regions are rows in the same columns, so it cannot separate them. A filter control that managers choose themselves is a convenience, not a restriction; anyone could select another region.",
    referenceUrl: "https://cloud.google.com/looker/docs/reference/param-explore-access-filter",
    tags: ["Looker", "Access control", "User attributes"]
  },
  {
    id: "gcp-cdl-181",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Self-service turned into five versions of revenue",
    scenario: "A media company rolled out self-service BI a year ago. Adoption is high, but each team now calculates revenue differently in its own dashboards, and executives no longer trust any number. The CDO wants to keep self-service while restoring a single, trusted definition that changes in a controlled way.",
    question: "Which approach best achieves this?",
    options: [
      { id: 'A', text: "Document the approved revenue formula in Knowledge Catalog and ask each team to update its dashboards." },
      { id: 'B', text: "Define revenue once in Looker's LookML model under Git version control and build every dashboard on it." },
      { id: 'C', text: "Publish a Looker Studio template with the revenue formula and have each team copy it into new reports." },
      { id: 'D', text: "Limit dashboard creation to the central analytics team so that only analysts can publish revenue figures." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Looker's semantic layer lets the metric be defined once in LookML, with changes reviewed and deployed through Git version control, and every explore and dashboard then inherits that single definition, which keeps self-service while guaranteeing consistency. Restricting dashboard creation to analysts restores trust by removing self-service, recreating the old bottleneck. A catalog entry documents the formula but does not enforce it, so teams can still drift. Copied templates each carry their own formula, so any later change must be repeated in every copy and they diverge again.",
    referenceUrl: "https://cloud.google.com/looker/docs/what-is-lookml",
    tags: ["Looker", "LookML", "Semantic layer", "Data governance"]
  },
  {
    id: "gcp-cdl-182",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "An operations dashboard that is always a day old",
    scenario: "A parcel carrier's operations dashboard is fed by a nightly extract that copies BigQuery data into a BI tool's own storage. Managers make routing decisions during the day using yesterday's figures, even though fresh data lands in BigQuery every few minutes.",
    question: "What change would give managers current figures?",
    options: [
      { id: 'A', text: "Export the BigQuery tables to Cloud Storage every hour so the BI tool can pick up the newest files." },
      { id: 'B', text: "Run the nightly extract twice a day so that the BI tool's copy of the data is at most twelve hours old." },
      { id: 'C', text: "Use Looker, which queries BigQuery directly in the database, so dashboards reflect the latest data." },
      { id: 'D', text: "Copy the BigQuery data into Cloud SQL every hour so that the dashboard reads from a faster database." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Looker sends its queries straight to BigQuery rather than holding its own copy of the data, so dashboards show whatever has landed in BigQuery, minutes old instead of a day, with no extract jobs to schedule. Running the extract twice a day still leaves data hours stale. Hourly exports to Cloud Storage or Cloud SQL add more copies and pipelines while still lagging, and Cloud SQL is a transactional database, not a faster engine for analytical dashboards.",
    referenceUrl: "https://cloud.google.com/looker/docs/intro",
    tags: ["Looker", "BigQuery", "Real-time dashboards"]
  },
  {
    id: "gcp-cdl-183",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Low stock should reach buyers where they work",
    scenario: "A home improvement retailer tracks inventory in BigQuery and reports on it in Looker. When stock for a top-selling item falls below a threshold, buyers should be told in their team chat channel and be able to trigger a reorder request from the data, instead of spotting the problem on a dashboard days later.",
    question: "Which Looker capability addresses this?",
    options: [
      { id: 'A', text: "A Pub/Sub topic that every buyer subscribes to so they receive raw inventory change messages as they occur." },
      { id: 'B', text: "Cloud Monitoring alert policies that watch the CPU and memory of the BigQuery project for the inventory team." },
      { id: 'C', text: "A Looker Studio report that buyers bookmark and open each morning to check which items are running low." },
      { id: 'D', text: "Looker alerts and actions, which notify buyers in tools like Slack and send data onward to other systems." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Looker can alert users when a dashboard value crosses a threshold and, through the Action Hub, deliver data to destinations such as Slack or trigger actions in other systems, which integrates the insight into the buyers' workflow. Cloud Monitoring watches infrastructure and service metrics, not business thresholds in inventory data, and BigQuery has no CPU or memory for a customer to monitor. A bookmarked report still depends on someone checking it. Raw Pub/Sub messages are for applications, not for buyers, and carry no threshold logic or reorder action.",
    referenceUrl: "https://cloud.google.com/looker/docs/action-hub",
    tags: ["Looker", "Alerts", "Workflow integration"]
  },
  {
    id: "gcp-cdl-184",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Executive dashboards that crawl on Monday mornings",
    scenario: "Hundreds of executives open the same Looker dashboards on BigQuery every Monday morning, and some charts take many seconds to load. The data team wants sub-second interactive performance without copying data out of BigQuery or changing the dashboards.",
    question: "Which Google Cloud capability best addresses this?",
    options: [
      { id: 'A', text: "Copy the dashboard tables into Cloud SQL every Sunday so that Monday queries run on a relational database." },
      { id: 'B', text: "Place Memorystore in front of Looker so that it caches the rendered dashboard images for the executives." },
      { id: 'C', text: "Load the dashboard tables into Bigtable so that Looker can read each row quickly by its row key instead." },
      { id: 'D', text: "Enable BigQuery BI Engine, which caches frequently used data in memory to accelerate dashboard queries." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "BigQuery BI Engine is an in-memory analysis service that accelerates SQL queries from BI tools such as Looker, giving sub-second responses on frequently used data while the data stays in BigQuery and the dashboards stay unchanged. Copying to Cloud SQL moves data out of BigQuery and puts analytical load on a transactional database. Bigtable is a NoSQL key-value store that Looker's SQL queries cannot use. Memorystore is a cache that applications must be written to use; Looker does not cache rendered dashboards there.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/bi-engine-intro",
    tags: ["BigQuery", "BI Engine", "Looker"]
  },
  {
    id: "gcp-cdl-185",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "One view of pipeline, spend and revenue",
    scenario: "A software company's CRM, advertising platforms and finance system each have their own built-in reports, and the leadership team spends every Monday reconciling them by hand. The CEO wants one dashboard that shows sales pipeline, marketing spend and booked revenue side by side.",
    question: "Which approach best delivers this?",
    options: [
      { id: 'A', text: "Send each system's application logs to Cloud Logging and build a log-based dashboard for the executives." },
      { id: 'B', text: "Keep each system's own built-in reports and schedule them to be emailed at the same time every week." },
      { id: 'C', text: "Bring the three sources together in BigQuery and model and visualise them in Looker as one dashboard." },
      { id: 'D', text: "Load all three sources into Bigtable so the data sits in one wide-column table the executives can open." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Landing the data in BigQuery puts all three sources in one warehouse where they can be joined, and Looker models the combined data and presents pipeline, spend and revenue together with consistent definitions. Emailing each system's reports at the same time still leaves leadership reconciling three separate views. Application logs describe system activity, not business figures such as pipeline or revenue. Bigtable is an operational NoSQL database with no dashboarding or join capability for executives.",
    referenceUrl: "https://cloud.google.com/looker/docs/intro",
    tags: ["BigQuery", "Looker", "Business intelligence"]
  },
  {
    id: "gcp-cdl-186",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Flash-sale orders on the dashboard within seconds",
    scenario: "During a two-hour flash sale, an electronics retailer's merchandising team wants its Looker dashboard to show orders by product within seconds of checkout so it can adjust promotions on the fly. Today orders are loaded into BigQuery by a nightly batch job.",
    question: "Which change best meets the goal?",
    options: [
      { id: 'A', text: "Keep the nightly batch load and add a second batch job at noon so the dashboard is refreshed during the day." },
      { id: 'B', text: "Stream orders into BigQuery as they occur and set the Looker dashboard to refresh on a short, automatic interval." },
      { id: 'C', text: "Write the orders to CSV files in Cloud Storage every hour and have BigQuery load each new file as it arrives." },
      { id: 'D', text: "Switch the Looker dashboard to an extracted data source that refreshes its snapshot every night after the load." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Streaming ingestion, for example through the BigQuery Storage Write API or a Pub/Sub pipeline, makes each order queryable within seconds, and because Looker queries BigQuery live, a short auto-refresh interval shows the new orders during the sale. A nightly snapshot is the opposite of real time. Hourly CSV loads leave the dashboard up to an hour behind, far too slow for a two-hour sale. A second batch job at noon still misses almost all of the sale window.",
    referenceUrl: "https://cloud.google.com/bigquery/docs/write-api",
    tags: ["BigQuery", "Streaming", "Looker"]
  },
  {
    id: "gcp-cdl-187",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "BI across BigQuery and an acquired Redshift warehouse",
    scenario: "A retailer analyses its own data in BigQuery and has just acquired a company whose data lives in an Amazon Redshift warehouse. Migration is planned for next year, but executives want governed dashboards across both businesses now, using one set of metric definitions and without first moving the Redshift data.",
    question: "Which approach best meets this requirement?",
    options: [
      { id: 'A', text: "Use Knowledge Catalog to register both warehouses so executives can browse the metrics from each company." },
      { id: 'B', text: "Use BigQuery Data Transfer Service to copy the Redshift tables into BigQuery before any dashboards are built." },
      { id: 'C', text: "Use Looker, which connects directly to both BigQuery and Redshift and applies one semantic model to them." },
      { id: 'D', text: "Use BigQuery Omni to query the Redshift warehouse from BigQuery, since Omni runs analysis inside AWS." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Looker connects in-database to many SQL engines, including BigQuery and Amazon Redshift, so one LookML model can define metrics across both warehouses and executives get governed dashboards today while the migration waits. BigQuery Omni queries data files in Amazon S3 or Azure Blob Storage, not a Redshift database. BigQuery Data Transfer Service can migrate Redshift data, but that moves the data first, which the executives want to avoid for now. Knowledge Catalog helps people find and understand assets but does not build dashboards or calculate metrics.",
    referenceUrl: "https://cloud.google.com/looker/docs/dialects",
    tags: ["Looker", "Multicloud", "Business intelligence"]
  },
  {
    id: "gcp-cdl-188",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Stopping a fraudulent card payment in time",
    scenario: "A card issuer currently analyses transactions in a batch job every night and flags suspicious ones the next morning, by which time the money is gone. It wants to decide whether each payment looks fraudulent before the payment is approved at the checkout.",
    question: "Why does this goal call for real-time streaming analytics?",
    options: [
      { id: 'A', text: "Streaming processes each event as it happens, so a decision is made while the payment can still be stopped." },
      { id: 'B', text: "Streaming stores each transaction at a lower cost than batch loading, which cuts the issuer's storage bill." },
      { id: 'C', text: "Streaming removes the need to keep any history, so the fraud model can decide without past transactions." },
      { id: 'D', text: "Streaming guarantees that every fraud model is accurate, so no suspicious payment can ever be approved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Real-time streaming analytics processes events continuously as they arrive, so insight is produced within milliseconds or seconds, while the payment is still pending and can be blocked. The value of a fraud signal collapses once the transaction clears, which is why next-morning batch results come too late. Streaming is usually more expensive than batch, not cheaper. Fraud models still rely on historical data to learn patterns. No processing style guarantees model accuracy.",
    referenceUrl: "https://cloud.google.com/solutions/stream-analytics",
    tags: ["Streaming analytics", "Fraud detection"]
  },
  {
    id: "gcp-cdl-189",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Which workload actually needs streaming",
    scenario: "A transport company is reviewing four data workloads to decide which should be rebuilt as streaming pipelines. It wants to put streaming only where acting on data within seconds creates clear business value.",
    question: "Which workload is the strongest candidate for streaming?",
    options: [
      { id: 'A', text: "Compiling an annual sustainability report on fuel consumption across the whole fleet for investors." },
      { id: 'B', text: "Showing riders each driver's live position on a map and updating arrival estimates as traffic changes." },
      { id: 'C', text: "Producing the monthly payroll file for drivers from the hours recorded over the previous four weeks." },
      { id: 'D', text: "Refreshing the quarterly board pack with revenue by region and the trends compared to last year." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Live vehicle positions and arrival estimates lose their value within seconds, so they need continuous, event-by-event processing. Monthly payroll, an annual sustainability report and a quarterly board pack are all periodic outputs over bounded periods of data, which batch processing handles more simply and cheaply; streaming them would add cost and complexity without business benefit.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/concepts/streaming-pipelines",
    tags: ["Streaming analytics", "Batch processing"]
  },
  {
    id: "gcp-cdl-190",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Recommending products while the shopper is still browsing",
    scenario: "An online fashion store updates its product recommendations once a day from the previous day's browsing data. Analysts found that most shoppers decide within a single ten-minute session, so recommendations based on yesterday's behaviour rarely match what a shopper is looking for right now.",
    question: "What business benefit would streaming the clickstream data bring?",
    options: [
      { id: 'A', text: "The store could lower its data costs, because streaming ingestion is always cheaper than daily batches." },
      { id: 'B', text: "The store could stop using machine learning, since fresh data makes rule-free recommendations exact." },
      { id: 'C', text: "The store could adapt recommendations within the session, while the shopper is still likely to buy." },
      { id: 'D', text: "The store could delete its historical browsing data, since only the current session's clicks matter." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Streaming clickstream events lets the recommendation system react to what a shopper is doing in the current session, which is when a relevant suggestion can still influence the purchase, so it directly lifts conversion. Historical data remains valuable for training models and understanding longer-term preferences. Fresh data improves inputs to machine learning; it does not replace it. Streaming generally costs more than daily batch processing, so cost reduction is not the benefit.",
    referenceUrl: "https://cloud.google.com/solutions/stream-analytics",
    tags: ["Streaming analytics", "Personalization"]
  },
  {
    id: "gcp-cdl-191",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Vibration spikes on a bottling line",
    scenario: "A beverage plant's filling machines report vibration and temperature readings every second. A bearing failure costs a full day of production, and engineers know that unusual vibration patterns appear minutes before a failure. Today readings are loaded into BigQuery once a day for reporting.",
    question: "Which approach creates the most business value from this data?",
    options: [
      { id: 'A', text: "Archive the readings in Cloud Storage Coldline and review them after each failure to find its root cause." },
      { id: 'B', text: "Keep the daily load into BigQuery and email a morning report that lists the machines with unusual readings." },
      { id: 'C', text: "Increase the daily load to hourly loads into BigQuery so the report reaches the engineers more often." },
      { id: 'D', text: "Stream readings through Pub/Sub and Dataflow to detect anomalies within seconds and alert the engineers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Because warning signs appear only minutes before a failure, the value lies in detecting them immediately: Pub/Sub ingests the sensor stream and Dataflow evaluates each reading in flight, raising an alert in time for engineers to stop the line and replace the bearing. A morning report arrives hours after a failure would have happened. Coldline archives support after-the-fact investigation but prevent nothing. Hourly loads still leave a gap far longer than the few minutes of warning available.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Streaming analytics", "IoT", "Predictive maintenance"]
  },
  {
    id: "gcp-cdl-192",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "A proposal to stream the month-end close",
    scenario: "A consultancy's finance team closes its books once a month using invoices and timesheets that are approved in batches over several days. An engineer proposes rebuilding the close reporting as a real-time streaming pipeline because streaming is more modern. The CFO asks for a recommendation.",
    question: "What should the team recommend?",
    options: [
      { id: 'A', text: "Keep a scheduled batch pipeline, but move it to Bigtable, since a NoSQL store makes month-end totals faster." },
      { id: 'B', text: "Rebuild the close as a streaming pipeline, since streaming produces more accurate totals than batch processing." },
      { id: 'C', text: "Keep a scheduled batch pipeline, since the close runs on periodic, approved data and gains nothing from seconds." },
      { id: 'D', text: "Rebuild the close as a streaming pipeline, since batch processing is being retired across Google Cloud services." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Streaming earns its extra cost and complexity only when acting within seconds creates value. The monthly close works on data that is approved in batches and reported once a month, so a scheduled batch pipeline is simpler, cheaper and just as useful. Streaming does not make totals more accurate; both approaches compute the same results from the same data. Batch processing remains fully supported, for example by Dataflow, which runs batch and streaming pipelines alike. Bigtable is a NoSQL operational store and offers nothing for financial aggregation and reporting.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Batch processing", "Streaming analytics", "Architecture decisions"]
  },
  {
    id: "gcp-cdl-193",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Shelves empty while the website says in stock",
    scenario: "A sporting goods chain updates store inventory counts overnight. Customers frequently order online for in-store pickup only to find the item sold out that morning, and store replenishment is always a day behind demand spikes such as a local team winning a championship.",
    question: "What is the main business value of moving inventory updates to real-time streaming?",
    options: [
      { id: 'A', text: "Inventory data would no longer need governance, because streaming records cannot contain any errors." },
      { id: 'B', text: "Accurate stock levels online and faster replenishment, because each sale updates inventory at once." },
      { id: 'C', text: "Lower overall infrastructure cost, because streaming pipelines need no compute resources to operate." },
      { id: 'D', text: "The chain could drop its point-of-sale systems, because streaming captures purchases and online updates alone." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Streaming each sale into the inventory view as it happens keeps online availability accurate, which prevents failed pickup orders, and lets replenishment respond to demand spikes the same day, which protects revenue and customer trust. Streamed data can still contain errors and still needs governance and quality checks. Point-of-sale systems are the source of the sales events; streaming carries their data, it does not replace them. Streaming pipelines consume compute continuously, so they are not free to run.",
    referenceUrl: "https://cloud.google.com/solutions/stream-analytics",
    tags: ["Streaming analytics", "Retail", "Inventory"]
  },
  {
    id: "gcp-cdl-194",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Collecting events from millions of game clients",
    scenario: "A mobile game studio needs to collect gameplay events from millions of players' devices worldwide and make them available to several independent systems: fraud detection, analytics and a live leaderboard. Each system should be able to consume the events at its own pace, and the game servers should not need to know about them.",
    question: "Which Google Cloud service should sit at the ingestion point?",
    options: [
      { id: 'A', text: "Cloud Storage, with each device uploading one file per event to a bucket that the systems scan." },
      { id: 'B', text: "Cloud Scheduler, with a job that runs every minute to collect events and forward them to systems." },
      { id: 'C', text: "Cloud SQL, with each game server inserting events into a table that every system polls for new rows." },
      { id: 'D', text: "Pub/Sub, a global messaging service that decouples event publishers from multiple subscribers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pub/Sub is a fully managed, global messaging service: producers publish events to a topic, and each consuming system has its own subscription that receives every message at its own pace, so publishers and consumers stay decoupled and scale independently. A Cloud SQL table polled by many systems becomes a write and read bottleneck at millions of events. One object per event in Cloud Storage creates enormous numbers of tiny files and forces consumers to scan for new ones. Cloud Scheduler triggers jobs on a timetable; it does not receive or distribute events.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/overview",
    tags: ["Pub/Sub", "Event ingestion", "Decoupling"]
  },
  {
    id: "gcp-cdl-195",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Cleaning and enriching events in flight",
    scenario: "An airline receives booking events through Pub/Sub. Before the events reach BigQuery, each must be validated, joined with airport reference data and converted to a common currency, continuously and at variable volume. The data team does not want to provision or manage any clusters.",
    question: "Which Google Cloud service best performs this processing?",
    options: [
      { id: 'A', text: "Dataflow, a serverless service that runs streaming and batch pipelines and scales automatically." },
      { id: 'B', text: "Looker, which applies transformations in its semantic model whenever a dashboard runs its query." },
      { id: 'C', text: "Cloud SQL, which runs stored procedures on the booking events once they are inserted as table rows." },
      { id: 'D', text: "Cloud Scheduler, which runs a timed job once each hour to reprocess the booking events in bulk." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dataflow is a fully managed, serverless service for Apache Beam pipelines that processes data continuously in streaming mode (or in batch), handles transformations such as validation, enrichment joins and conversions, and autoscales workers with the volume, with no clusters to run. Cloud Scheduler only triggers jobs on a timetable and would make processing hourly rather than continuous. Looker models data at query time for reporting but does not transform events before they are loaded. Cloud SQL stored procedures would turn a transactional database into a bottleneck for a continuous event stream.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Dataflow", "Stream processing", "Serverless"]
  },
  {
    id: "gcp-cdl-196",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Hundreds of Spark jobs leaving a Hadoop cluster",
    scenario: "A telecom operator runs hundreds of Apache Spark and Hadoop jobs on an ageing on-premises cluster. It wants to move them to Google Cloud quickly with minimal code changes, keep using the open-source tools its engineers know, and stop maintaining the cluster hardware.",
    question: "Which Google Cloud service fits best?",
    options: [
      { id: 'A', text: "BigQuery, which runs SQL, so each Spark job would be rewritten as a set of scheduled SQL queries instead." },
      { id: 'B', text: "Managed Service for Apache Spark, which runs existing Spark and Hadoop jobs on managed clusters or serverless." },
      { id: 'C', text: "Dataflow, which runs Apache Beam pipelines, so each Spark or Hadoop job would first be rewritten in Beam." },
      { id: 'D', text: "Cloud Run, which runs stateless containers, so each Spark job would be packaged as its own web service." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Managed Service for Apache Spark (formerly Dataproc) runs open-source Spark, Hadoop and related tools on fully managed clusters or in a serverless mode, so existing jobs move with minimal changes and the team no longer maintains hardware. Dataflow is an excellent pipeline service, but it runs Apache Beam, so every Spark job would need rewriting. Rewriting hundreds of jobs as BigQuery SQL is a large refactoring project, not a quick move. Cloud Run serves stateless containers and is not a distributed data processing engine for Spark workloads.",
    referenceUrl: "https://cloud.google.com/products/managed-service-for-apache-spark",
    tags: ["Managed Service for Apache Spark", "Apache Spark", "Migration"]
  },
  {
    id: "gcp-cdl-197",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Sketching a streaming pipeline for delivery tracking",
    scenario: "A food delivery company wants to capture location and status events from couriers' phones, clean and aggregate them continuously, and let analysts query both live and historical results with SQL. The CTO asks for the typical Google Cloud serverless pipeline in the order data flows through it.",
    question: "Which sequence describes that pipeline?",
    options: [
      { id: 'A', text: "Dataflow ingests events from the phones, BigQuery transforms them, and Pub/Sub stores the results for queries." },
      { id: 'B', text: "Pub/Sub ingests events from the phones, Dataflow transforms them, and BigQuery stores them for SQL analysis." },
      { id: 'C', text: "BigQuery stores the raw events, Pub/Sub transforms them, and Dataflow serves the finished results to analysts." },
      { id: 'D', text: "Cloud SQL ingests events from the phones, Bigtable transforms them, and Looker stores them for later queries." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The canonical serverless streaming pattern on Google Cloud is Pub/Sub for scalable event ingestion, Dataflow for continuous transformation and aggregation, and BigQuery as the analytical store that analysts query with SQL over live and historical data. The other sequences assign services roles they do not play: Pub/Sub is a messaging service, not a transformation engine or a queryable store; BigQuery is the analytical destination rather than the in-flight processor; Cloud SQL is a transactional database, Bigtable is a NoSQL store rather than a processing service, and Looker visualises data without storing it.",
    referenceUrl: "https://cloud.google.com/dataflow/docs/overview",
    tags: ["Pub/Sub", "Dataflow", "BigQuery", "Data pipelines"]
  },
  {
    id: "gcp-cdl-198",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Landing ready-made events with the fewest moving parts",
    scenario: "A smart-thermostat maker already publishes device events to Pub/Sub in a schema that matches its BigQuery table exactly. No transformation, enrichment or aggregation is needed; the team simply wants every message written to BigQuery continuously, with as few components to build and operate as possible.",
    question: "What should the team use?",
    options: [
      { id: 'A', text: "A Pub/Sub BigQuery subscription that writes each message from the topic directly into the BigQuery table." },
      { id: 'B', text: "A Managed Service for Apache Spark streaming job that reads the topic and writes into the BigQuery table." },
      { id: 'C', text: "A Datastream stream that captures the messages from the topic and replicates each one into BigQuery." },
      { id: 'D', text: "A Dataflow streaming pipeline that reads from the topic and writes each message into the BigQuery table." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A BigQuery subscription is a Pub/Sub subscription type that writes messages straight into an existing BigQuery table, using the topic or table schema, with no pipeline to build or run, which is the simplest option when no transformation is needed. A Dataflow pipeline works, but adds a component the team does not need. A Spark streaming job also works, but adds processing infrastructure for no benefit. Datastream captures changes from databases such as MySQL, PostgreSQL and Oracle; it does not read Pub/Sub topics.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/bigquery",
    tags: ["Pub/Sub", "BigQuery", "Data pipelines"]
  },
  {
    id: "gcp-cdl-199",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Occasional Spark jobs without a standing cluster",
    scenario: "A research team at a university runs PySpark jobs a few times a week to process survey data. Keeping a cluster running between jobs wastes budget, and nobody on the team wants to size, start or tune clusters. They want to submit the existing PySpark code and pay only while it runs.",
    question: "Which option fits best?",
    options: [
      { id: 'A', text: "Install Spark on a group of Compute Engine VMs and stop them by hand after each job has finished running." },
      { id: 'B', text: "Rewrite the PySpark code as Apache Beam pipelines and run them on Dataflow whenever new survey data arrives." },
      { id: 'C', text: "Deploy a self-managed Spark operator on a GKE cluster and keep a node pool ready to run jobs at short notice." },
      { id: 'D', text: "Submit the jobs to Managed Service for Apache Spark serverless, which provisions and scales resources per job." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The serverless deployment of Managed Service for Apache Spark (formerly Serverless for Apache Spark) runs submitted Spark and PySpark workloads without any cluster to create or tune, scaling resources for each job and charging only while it runs. Spark on self-managed Compute Engine VMs leaves the team sizing, installing and stopping machines. A self-managed Spark operator on GKE also needs cluster administration and a standing node pool. Dataflow is serverless too, but it would require rewriting the existing PySpark code into Apache Beam.",
    referenceUrl: "https://docs.cloud.google.com/dataproc-serverless/docs/overview",
    tags: ["Managed Service for Apache Spark", "Serverless", "Apache Spark"]
  },
  {
    id: "gcp-cdl-200",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d2",
    domainName: "Exploring Data Transformation with Google Cloud",
    title: "Orders must keep flowing when analytics is down",
    scenario: "An e-commerce company's checkout service calls its analytics system directly for every order. When the analytics system went down for an hour last month, checkouts failed too, and the order events from that hour were lost. The company wants checkout to be unaffected by downstream problems.",
    question: "Which design change best addresses this?",
    options: [
      { id: 'A', text: "Add retries to each direct call so that checkout waits until the analytics system responds before confirming." },
      { id: 'B', text: "Use Cloud Scheduler to call the analytics system every few minutes with a batch of the most recent orders." },
      { id: 'C', text: "Mount a Cloud Storage bucket with Cloud Storage FUSE so checkout writes each order to it as a shared file." },
      { id: 'D', text: "Publish order events to Pub/Sub, which retains unacknowledged messages until the analytics system recovers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Putting Pub/Sub between checkout and analytics decouples them: checkout publishes and moves on, and Pub/Sub durably stores unacknowledged messages (seven days by default, configurable longer) so the analytics system catches up when it recovers without losing events. Retrying direct calls still ties checkout to analytics availability and makes customers wait. Cloud Scheduler triggers jobs on a timetable; it does not buffer events, and it still depends on something holding the orders. Writing files through Cloud Storage FUSE adds latency and file-handling complexity without providing message delivery semantics.",
    referenceUrl: "https://cloud.google.com/pubsub/docs/overview",
    tags: ["Pub/Sub", "Decoupling", "Resilience"]
  }
];

export default GCP_CDL_QUESTIONS_8;
