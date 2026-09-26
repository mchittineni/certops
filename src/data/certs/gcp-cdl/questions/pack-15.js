export const GCP_CDL_QUESTIONS_15 = [
  {
    id: "gcp-cdl-351",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Clickstream logs that live in another cloud",
    scenario: "A travel marketplace stores five petabytes of clickstream logs in Amazon S3, where its web platform runs. Its analysts use BigQuery for everything else and want to query the logs with the same SQL and tools, without paying to copy the data into Google Cloud.",
    question: "Which Google Cloud offering meets this need?",
    options: [
      { id: 'A', text: "AlloyDB Omni, installed on VMs in the other cloud to hold the logs" },
      { id: 'B', text: "Cloud SQL for PostgreSQL, loading the logs into a managed database" },
      { id: 'C', text: "BigQuery Omni, which queries the data in place in the other cloud" },
      { id: 'D', text: "Storage Transfer Service, copying the logs into Cloud Storage for BigQuery" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "BigQuery Omni runs BigQuery analytics on data stored in Amazon S3 or Azure Blob Storage, with the processing happening in the other cloud's region, so analysts use the same BigQuery SQL and interface without moving or duplicating the data. AlloyDB Omni is a PostgreSQL-compatible operational database, not a way to analyse petabytes of logs in object storage. Daily copying with Storage Transfer Service creates exactly the transfer cost and duplication the company wants to avoid. Cloud SQL is a transactional database and is not built for petabyte-scale analytics.",
    referenceUrl: "https://docs.cloud.google.com/bigquery/docs/omni-introduction",
    tags: ["BigQuery Omni", "Multicloud", "Analytics"]
  },
  {
    id: "gcp-cdl-352",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "AlloyDB performance, but inside the hospital's walls",
    scenario: "A hospital network wants the performance of AlloyDB for its patient-scheduling application, which mixes transactions with real-time reporting. A national regulation requires this particular database to run on servers in the hospital's own data center for now.",
    question: "Which option should the hospital network use?",
    options: [
      { id: 'A', text: "Firestore, the serverless document database that syncs data to mobile clients" },
      { id: 'B', text: "BigQuery Omni, running analytical queries on data held in another provider's storage" },
      { id: 'C', text: "AlloyDB for PostgreSQL, the fully managed service that runs in Google Cloud regions" },
      { id: 'D', text: "AlloyDB Omni, a downloadable edition it can install and operate on its own premises" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AlloyDB Omni is a downloadable, self-managed edition of AlloyDB that is fully PostgreSQL-compatible and runs wherever the customer chooses, including its own data center or other clouds, while keeping features such as the columnar engine that speeds real-time reporting. The managed AlloyDB service runs only in Google Cloud, which the regulation currently rules out. BigQuery Omni analyses data in other clouds' object storage and is not an operational database. Firestore is a Google Cloud document database, so it neither runs on premises nor offers PostgreSQL compatibility.",
    referenceUrl: "https://docs.cloud.google.com/alloydb/omni/docs/overview",
    tags: ["AlloyDB Omni", "Hybrid cloud", "Data residency"]
  },
  {
    id: "gcp-cdl-353",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Kubernetes clusters in three places, one control point",
    scenario: "After an acquisition, a retailer runs Kubernetes clusters on GKE, on Amazon EKS and on premises. The platform team wants to see and govern all of them from Google Cloud, applying the same configuration and security policies everywhere, without first rebuilding the non-Google clusters.",
    question: "Which approach best meets this goal?",
    options: [
      { id: 'A', text: "Migrate every EKS and on-premises workload onto one GKE cluster before applying any policy" },
      { id: 'B', text: "Register all of them, attaching EKS as a conformant cluster, in a GKE Enterprise fleet" },
      { id: 'C', text: "Give each cluster its own admin team and share a written policy document between them" },
      { id: 'D', text: "Deploy Cloud Run in each environment and move the workloads into serverless services" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "GKE's multicloud and hybrid capabilities, marketed as part of GKE Enterprise, let organisations register clusters from different environments, including conformant clusters such as EKS as attached clusters, into a fleet managed from Google Cloud, where configuration and policy can be applied consistently and the clusters are visible in one console. Migrating everything first contradicts the requirement not to rebuild. Cloud Run does not run in other clouds or on premises. Separate admin teams with a written document provide no central enforcement or visibility.",
    referenceUrl: "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/attached",
    tags: ["GKE Enterprise", "Multicloud", "Fleet management"]
  },
  {
    id: "gcp-cdl-354",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "One set of metrics across three data warehouses",
    scenario: "A consumer goods group's regional divisions keep data in BigQuery, Amazon Redshift and Snowflake. Executives receive conflicting revenue figures because each division defines metrics differently in its own tools. The group wants one governed set of metric definitions that queries each warehouse where the data already lives.",
    question: "Which Google Cloud product fits best?",
    options: [
      { id: 'A', text: "Cloud SQL, consolidating every division's metrics into one managed MySQL database" },
      { id: 'B', text: "Looker, whose semantic layer holds shared business logic over many databases" },
      { id: 'C', text: "Pub/Sub, streaming each warehouse's tables into one shared messaging topic" },
      { id: 'D', text: "BigQuery Omni, replacing each division's warehouse with BigQuery in its region" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Looker's semantic modelling layer, LookML, defines business metrics once in a governed, reusable model, and Looker connects to many SQL databases, including BigQuery, Redshift and Snowflake, querying each in place, so every division sees consistent numbers without moving data. Consolidating into one Cloud SQL database is a large migration and not suited to warehouse-scale analytics. BigQuery Omni queries data in other clouds' object storage; it does not replace or unify Redshift and Snowflake. Pub/Sub is a messaging service with no metric definitions or BI.",
    referenceUrl: "https://docs.cloud.google.com/looker/docs/dialects",
    tags: ["Looker", "Multicloud", "Semantic layer"]
  },
  {
    id: "gcp-cdl-355",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A managed database the company could take elsewhere",
    scenario: "A SaaS startup wants a managed relational database for its MySQL-based application so it can stop running database servers. Its investors insist the app must remain portable to a standard MySQL server on another cloud or on premises without code changes.",
    question: "Which Google Cloud database best satisfies both requirements?",
    options: [
      { id: 'A', text: "Cloud SQL for MySQL, a managed service built on the standard MySQL engine" },
      { id: 'B', text: "Bigtable, a managed wide-column NoSQL database for huge workloads" },
      { id: 'C', text: "Firestore, a serverless document database whose query API is not standard SQL" },
      { id: 'D', text: "BigQuery, a managed warehouse that can load MySQL exports for SQL analytics" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud SQL runs standard MySQL, PostgreSQL and SQL Server engines as a managed service, so Google handles patching, backups and replication, while the application keeps using ordinary MySQL and could move to any other MySQL server without code changes. Firestore and Bigtable are NoSQL databases, so the MySQL application would need rewriting. BigQuery is an analytical warehouse, not a transactional database for an application's day-to-day reads and writes.",
    referenceUrl: "https://docs.cloud.google.com/sql/docs/mysql/introduction",
    tags: ["Cloud SQL", "Portability", "Open standards"]
  },
  {
    id: "gcp-cdl-356",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A transactional database for an app on Azure VMs",
    scenario: "A logistics firm's order-management application will keep running on Azure virtual machines for contractual reasons. The firm wants a PostgreSQL-compatible transactional database with AlloyDB's performance and columnar engine, deployed alongside the application on Azure and licensed through Google Cloud.",
    question: "Which offering fits these constraints?",
    options: [
      { id: 'A', text: "Looker, connected to the application's existing database on the Azure VMs" },
      { id: 'B', text: "BigQuery Omni on Azure, running analytical SQL over files in Blob Storage" },
      { id: 'C', text: "AlloyDB Omni, installed on the Azure VMs beside the application" },
      { id: 'D', text: "Cloud SQL or managed AlloyDB, created in the Google Cloud region nearest Azure" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AlloyDB Omni is the downloadable AlloyDB edition that runs in any environment, including virtual machines on other public clouds, licensed per vCPU through Google Cloud; it is PostgreSQL-compatible and includes the columnar engine, so it can sit next to the application on Azure. BigQuery Omni is for analytics on object storage, not transactional workloads. Cloud SQL runs only inside Google Cloud, adding cross-cloud latency to every transaction. Looker is a BI tool that reads from databases rather than providing one.",
    referenceUrl: "https://docs.cloud.google.com/alloydb/omni/docs/overview",
    tags: ["AlloyDB Omni", "BigQuery Omni", "Multicloud"]
  },
  {
    id: "gcp-cdl-357",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "API traffic that must not leave the bank's data center",
    scenario: "A bank wants Apigee's API management capabilities, but its regulator requires that customer API traffic be processed only inside the bank's own data center. The bank is comfortable with management functions such as the UI, configuration and analytics being hosted by Google Cloud.",
    question: "Which deployment model should the bank choose?",
    options: [
      { id: 'A', text: "Apigee in Google Cloud, with all traffic handled in a Google region" },
      { id: 'B', text: "Apigee hybrid, with the runtime plane on the customer's own premises" },
      { id: 'C', text: "API Gateway, with serverless backends deployed on Cloud Run" },
      { id: 'D', text: "Cloud Load Balancing, with backend services located on premises" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apigee hybrid splits the platform: the runtime plane, which processes API traffic, runs on Kubernetes in the customer's own environment, such as its data center, while the management plane (UI, APIs and analytics) is hosted in Google Cloud, meeting the requirement that traffic stays on premises. Standard Apigee processes traffic in Google Cloud. API Gateway is a Google-hosted gateway aimed at serverless backends. A load balancer routes traffic but offers none of Apigee's API management features.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/hybrid/v1.17/what-is-hybrid",
    tags: ["Apigee hybrid", "Hybrid cloud", "Compliance"]
  },
  {
    id: "gcp-cdl-358",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Explaining APIs to the retail operations board",
    scenario: "A retailer's board keeps hearing that its new mobile app and its partners' systems will all 'use our APIs'. A board member with no technical background asks what an API actually is.",
    question: "Which explanation is most accurate?",
    options: [
      { id: 'A', text: "A physical network cable that links the company's data center to the internet" },
      { id: 'B', text: "A defined interface that lets one program request data or actions from another" },
      { id: 'C', text: "A database that stores every customer's orders and account details in one table" },
      { id: 'D', text: "A dashboard that shows executives daily sales numbers on a large office screen" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An application programming interface is a contract that defines how one piece of software can request data or trigger actions in another, for example a mobile app asking the order system for a customer's order history, without either side needing to know how the other is built internally. A database stores data, it is not the interface to it. A network cable is physical connectivity. A dashboard is a reporting tool for people, not a software-to-software interface.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies",
    tags: ["API", "Definitions"]
  },
  {
    id: "gcp-cdl-359",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Three front ends, one pricing engine",
    scenario: "An airline's website, mobile app and travel-agent portal each contain their own copy of fare-calculation logic, and the copies regularly disagree. Architects propose putting fare calculation behind a single API that all three channels call.",
    question: "What is the main business benefit of this proposal?",
    options: [
      { id: 'A', text: "Customers can see the underlying source code of the fare engine through the API" },
      { id: 'B', text: "Fares are guaranteed to be lower because API calls are cheaper than web requests" },
      { id: 'C', text: "The airline no longer needs to run any servers to calculate fares for customers" },
      { id: 'D', text: "Every channel reuses one consistent capability instead of maintaining separate versions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Exposing a capability through an API lets many channels reuse the same logic, so fares are calculated consistently, changes are made once, and new channels can be added quickly by calling the existing API. Something still has to run the fare engine behind the API. APIs expose functions and data, not source code. API calls have no inherent effect on ticket prices.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies",
    tags: ["API", "Reuse", "Business value"]
  },
  {
    id: "gcp-cdl-360",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A field rename that broke forty partner apps",
    scenario: "A logistics company renamed a field in its shipment-tracking API response, and 40 partner integrations failed overnight. The product owner still needs to make larger changes to the API over the next year without disrupting partners who cannot update their code quickly.",
    question: "What practice should the company adopt?",
    options: [
      { id: 'A', text: "Publish breaking updates as a new API version and keep the old one running for a while" },
      { id: 'B', text: "Ask every partner to connect directly to the company's database instead of the API" },
      { id: 'C', text: "Stop changing the API permanently so partners never have to update their code again" },
      { id: 'D', text: "Change the existing API whenever needed and email partners the new format afterwards" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API versioning treats the API as a contract: breaking changes go into a new major version, while the existing version keeps working for a published deprecation period so consumers can migrate at their own pace. Changing the live API and notifying afterwards repeats the outage. Freezing the API blocks the business from evolving. Direct database access tightly couples partners to internal schemas and creates security risk, which is the opposite of what an API is for.",
    referenceUrl: "https://google.aip.dev/185",
    tags: ["API versioning", "API design", "Partners"]
  },
  {
    id: "gcp-cdl-361",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "New apps that should not care about the mainframe",
    scenario: "An insurer plans to replace its policy mainframe over several years, but needs new customer apps now. Architects worry that if the new apps talk to the mainframe directly, every app will need rework when the mainframe is finally replaced.",
    question: "Which approach reduces that future rework?",
    options: [
      { id: 'A', text: "Have each new app connect to the mainframe using its own custom integration code" },
      { id: 'B', text: "Copy the mainframe data nightly into each app's own database for local use" },
      { id: 'C', text: "Put an API layer in front of the mainframe and have new apps call only the APIs" },
      { id: 'D', text: "Delay all new apps until the mainframe replacement project is fully complete" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An API layer, for example API proxies managed in Apigee, hides the mainframe behind stable interfaces; new apps depend only on the APIs, so when the mainframe is replaced the implementation behind the APIs changes while the apps keep working. Custom point-to-point integrations each break when the backend changes. Delaying the apps sacrifices business opportunity for years. Nightly copies give apps stale data and still tie each one to the mainframe's data structures.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies",
    tags: ["API", "Legacy modernization", "Decoupling"]
  },
  {
    id: "gcp-cdl-362",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Letting outside developers build on the platform",
    scenario: "A fitness-tracking company wants independent developers around the world, whom it has no contract with yet, to build apps that read users' workout data with their permission. It needs to decide what kind of API to offer.",
    question: "Which type of API matches this goal?",
    options: [
      { id: 'A', text: "A private API reachable only by the company's internal applications" },
      { id: 'B', text: "A database connection string shared with anyone who requests access" },
      { id: 'C', text: "A partner API limited to a handful of firms with signed agreements" },
      { id: 'D', text: "A public API that outside developers can find and sign up to use" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A public (open) API is designed for external developers who are not yet known to the company: they discover it, register for credentials and build apps, typically through a developer portal, with access and usage controlled by API management. A private API serves internal systems only. A partner API is restricted to specific contracted organisations, which excludes developers the company has no agreement with. Sharing database credentials bypasses every security and governance control.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/publish/intro-portals",
    tags: ["Public APIs", "Developer ecosystem"]
  },
  {
    id: "gcp-cdl-363",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Selling hyperlocal weather forecasts",
    scenario: "A weather analytics company has built highly accurate street-level forecasts for its own apps. Insurers, delivery firms and event organisers have asked to use the forecasts in their own systems, and the CEO sees a new revenue stream.",
    question: "How can the company best create this new business opportunity?",
    options: [
      { id: 'A', text: "Print the forecasts in regional newspapers as a paid advertisement" },
      { id: 'B', text: "Keep the forecasts internal so competitors cannot learn how they work" },
      { id: 'C', text: "Send each customer a batch file of forecasts by SFTP once a week" },
      { id: 'D', text: "Offer the forecasts through a paid public API that businesses can call" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Exposing and monetising a public API turns an internal data asset into a product: customers integrate forecasts directly into their systems in real time and pay according to a pricing plan, creating a scalable revenue stream. Weekly files cannot deliver timely, integrated data. Keeping the forecasts internal forgoes the opportunity entirely, and an API exposes results, not the model that produces them. Newspaper ads do not let businesses integrate forecasts into their software.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/overview",
    tags: ["API monetization", "New revenue", "Data products"]
  },
  {
    id: "gcp-cdl-364",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Cheaper calls for the heaviest users",
    scenario: "A company monetising its address-validation API with Apigee wants to charge per call, with the per-call price dropping as a developer's monthly volume moves into higher ranges, for example a lower rate for calls above 100,000 in a month.",
    question: "Which rate plan pricing should the product team configure?",
    options: [
      { id: 'A', text: "A one-time setup fee charged when the developer buys the API product" },
      { id: 'B', text: "A fixed recurring monthly price that does not depend on how many calls" },
      { id: 'C', text: "Consumption-based banded fees, with a per-unit price for each range" },
      { id: 'D', text: "Revenue sharing, paying developer partners a share of the income made" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apigee monetization rate plans support consumption-based fees either as a fixed fee per unit or as banded pricing, where the per-transaction fee depends on which consumption range the usage falls into, which is how volume discounts are expressed. A setup fee is charged once when the plan starts. A fixed recurring fee ignores usage. Revenue sharing pays partners a percentage of revenue and does not set per-call prices.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans",
    tags: ["Apigee monetization", "Rate plans", "Pricing"]
  },
  {
    id: "gcp-cdl-365",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Partners who resell the travel API",
    scenario: "A hotel booking platform lets partner travel agencies build apps on its reservation API and sell rooms to their own customers. To grow the partner network, the platform wants to reward partners with a percentage of the booking revenue their apps generate.",
    question: "Which Apigee monetization feature supports this model?",
    options: [
      { id: 'A', text: "Revenue sharing configured in the rate plan for the API product" },
      { id: 'B', text: "A response cache that stores frequent booking lookups in Apigee" },
      { id: 'C', text: "A Spike Arrest policy that smooths sudden bursts of partner calls" },
      { id: 'D', text: "An initialization fee charged when each partner starts the plan, before any revenue" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apigee rate plans can include revenue sharing, where a configured percentage of the revenue generated through an API product is shared with the developer partner, directly supporting a partner-growth model. Spike Arrest is a traffic-management policy. Response caching improves performance and reduces backend load. An initialization fee charges partners rather than rewarding them.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans",
    tags: ["Apigee monetization", "Revenue sharing", "Partners"]
  },
  {
    id: "gcp-cdl-366",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A free tier to attract developers",
    scenario: "A mapping startup wants developers to try its geocoding API free with up to 1,000 calls per day, while businesses that need more can buy a premium offering with 1 million calls per day and extra endpoints. Both offerings use the same underlying API proxies.",
    question: "How should the startup package this in Apigee?",
    options: [
      { id: 'A', text: "Give free users a different API key format that the backend checks in its own code" },
      { id: 'B', text: "Create two API products, each bundling the same operations with its own quota" },
      { id: 'C', text: "Deploy two separate copies of the backend, one for free users and one for paid" },
      { id: 'D', text: "Publish only the premium offering and ask free users to email for a trial account" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Apigee, an API product bundles API proxies or operations with access rules such as quotas; creating a free product and a premium product over the same proxies gives each tier its own call limits and endpoints, and each can carry its own rate plan and be offered in the developer portal. Duplicating the backend doubles cost and maintenance. Coding tier logic into the backend repeats work Apigee already does. A manual email trial adds friction that works against developer adoption.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/publish/what-api-product",
    tags: ["API products", "Quotas", "Freemium"]
  },
  {
    id: "gcp-cdl-367",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Developers who stop paying but keep calling",
    scenario: "A data provider sells API access to small developers who top up an account balance in advance. Finance discovered that developers whose balance ran out kept calling the API for weeks, creating unpaid usage. It wants such calls blocked automatically at the moment the balance is exhausted.",
    question: "Which Apigee configuration addresses this?",
    options: [
      { id: 'A', text: "A Spike Arrest policy that limits each developer to a fixed number of calls per second" },
      { id: 'B', text: "A response cache so repeated calls are answered without reaching the backend" },
      { id: 'C', text: "Prepaid billing plus the MonetizationLimitsCheck policy attached in the API proxy" },
      { id: 'D', text: "Postpaid billing, invoicing each developer at the end of every month for usage" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With prepaid billing, developers fund a balance before using the API, and the MonetizationLimitsCheck policy in the API proxy checks whether the developer has an active subscription and sufficient funds, rejecting calls when they do not, so usage stops as soon as the balance is used up. Postpaid billing invoices after the fact, which is how unpaid usage accumulated. Spike Arrest smooths traffic bursts but is unaware of account balances. Caching reduces backend load but still serves the unpaying developer.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/monetization-limits-check-policy",
    tags: ["Apigee monetization", "Prepaid billing", "Policies"]
  },
  {
    id: "gcp-cdl-368",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Why a bank gives its APIs away",
    scenario: "A retail bank publishes free, public APIs for account information and payments. A shareholder asks why the bank would invest in APIs that do not charge developers anything.",
    question: "Which business rationale best explains the strategy?",
    options: [
      { id: 'A', text: "Free APIs let the bank close its branches and mobile app within a year" },
      { id: 'B', text: "Partners' apps extend the bank's reach and bring in new customers" },
      { id: 'C', text: "Free APIs transfer the bank's regulatory obligations to the developers" },
      { id: 'D', text: "Free APIs remove the need for the bank to secure its customer data" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "APIs create value beyond direct fees: by letting fintechs and other partners build apps on its services, the bank extends its reach into new channels and ecosystems, attracts customers it would not otherwise win and increases usage of its accounts and payments, which drives revenue indirectly. Publishing APIs does not replace the bank's own channels. APIs increase, rather than remove, the importance of securing data. Regulatory obligations remain with the bank.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee",
    tags: ["API strategy", "Ecosystems", "Open banking"]
  },
  {
    id: "gcp-cdl-369",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Too many APIs and no one in charge of them",
    scenario: "A manufacturer has dozens of APIs built by different teams, each with its own security approach, no usage visibility and no documentation for partners. The CIO wants one platform to design, secure, publish, analyse and monetise all of them.",
    question: "Which Google Cloud product should the CIO choose?",
    options: [
      { id: 'A', text: "Apigee API Management" },
      { id: 'B', text: "Cloud Storage buckets" },
      { id: 'C', text: "Cloud Load Balancing" },
      { id: 'D', text: "Cloud DNS managed zones" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apigee is Google Cloud's full-lifecycle API management platform: teams design and build API proxies, apply consistent security and traffic policies, publish APIs to developers through portals, analyse usage and performance, and monetise access with rate plans. A load balancer distributes traffic but does not manage APIs. Cloud DNS resolves names. Cloud Storage stores objects and has no API governance features.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee",
    tags: ["Apigee", "API management"]
  },
  {
    id: "gcp-cdl-370",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "A buggy client hammering the inventory backend",
    scenario: "A retailer's inventory API sits in Apigee. Last week a partner's buggy app sent thousands of requests in a few seconds and overwhelmed the fragile backend system. The team wants sudden bursts smoothed out so the backend is protected, regardless of any daily allowance.",
    question: "Which Apigee policy should the team apply?",
    options: [
      { id: 'A', text: "Quota, which caps each app's total calls over an hour, day or month" },
      { id: 'B', text: "Response Cache, which stores responses so repeat calls skip the backend" },
      { id: 'C', text: "Assign Message, which adds or changes headers on requests and responses" },
      { id: 'D', text: "Spike Arrest, which limits the rate of traffic to protect the backend" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Spike Arrest policy protects backends against traffic surges by limiting the rate at which requests are processed, for example a number per second, smoothing bursts before they reach the backend. Quota enforces a business allowance over longer periods such as a day and would not stop thousands of calls in seconds if the daily quota is large. Response Cache helps for repeated identical reads but does not throttle a burst of varied requests. Assign Message modifies messages and has no rate-limiting role.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/spike-arrest-policy",
    tags: ["Apigee", "Spike Arrest", "Traffic management"]
  },
  {
    id: "gcp-cdl-371",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Partners waiting two weeks for an API key",
    scenario: "A shipping company's partners must email the integration team for API documentation and wait up to two weeks for credentials. The company wants partners to find documentation, register their apps and get keys on their own, immediately.",
    question: "Which Apigee capability should the company use?",
    options: [
      { id: 'A', text: "A developer portal offering self-service docs, app sign-up and instant access" },
      { id: 'B', text: "A target server entry that points proxies at the backend system" },
      { id: 'C', text: "Apigee analytics dashboards that chart traffic and error rates" },
      { id: 'D', text: "A Quota policy that limits how many calls each partner can make" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An Apigee developer portal, either the integrated portal or a Drupal-based one, gives developers self-service access to API documentation and lets them register apps and obtain credentials for API products without waiting on internal teams, which speeds partner onboarding. A Quota policy limits usage. Analytics dashboards report on traffic. A target server configuration tells proxies where the backend is; none of these let partners onboard themselves.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/publish/intro-portals",
    tags: ["Apigee", "Developer portal", "Partner onboarding"]
  },
  {
    id: "gcp-cdl-372",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Which APIs are worth investing in",
    scenario: "A media company's API product manager must decide which of its 30 APIs deserve more investment. She needs to know which APIs and developer apps generate the most traffic, where latency and errors are highest, and how usage is trending month over month.",
    question: "Which Apigee capability provides this information?",
    options: [
      { id: 'A', text: "The Spike Arrest policy, which smooths bursts of incoming API traffic" },
      { id: 'B', text: "The OAuthV2 policy, which issues and verifies access tokens for apps" },
      { id: 'C', text: "Apigee hybrid, which runs the API runtime in the company's data center" },
      { id: 'D', text: "Apigee analytics, with its dashboards and custom reports on API usage" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apigee analytics collects data on every API call and presents dashboards and custom reports on traffic by API, product and developer app, response times, error rates and trends, giving product managers evidence to prioritise investment. The OAuthV2 policy handles authorisation. Apigee hybrid is a deployment model. Spike Arrest controls traffic rates; none of them report on usage and performance.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-services-overview",
    tags: ["Apigee", "API analytics"]
  },
  {
    id: "gcp-cdl-373",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Outgrowing a lightweight gateway",
    scenario: "A startup fronted its Cloud Run services with API Gateway, which met its early needs for authentication and routing. It now plans to sell API access to third parties and needs rate plans and billing, a self-service developer portal, detailed usage analytics and advanced security for abusive traffic.",
    question: "What should the startup do?",
    options: [
      { id: 'A', text: "Move API management to Apigee, which provides these capabilities" },
      { id: 'B', text: "Build billing, a portal and analytics into each Cloud Run service's code" },
      { id: 'C', text: "Keep API Gateway and add a second instance of it for paying customers" },
      { id: 'D', text: "Replace the gateway with an external load balancer in front of Cloud Run" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "API Gateway is a lightweight, fully managed gateway that suits securing and routing calls to serverless backends. Apigee is the full API management platform, with monetization rate plans and billing, developer portals, rich analytics and advanced API security, so a business turning APIs into products should move to it. A second API Gateway instance adds none of the missing capabilities. A load balancer routes traffic but offers no API product features. Building these functions into each service duplicates effort and delays the launch.",
    referenceUrl: "https://docs.cloud.google.com/api-gateway/docs/about-api-gateway",
    tags: ["Apigee", "API Gateway", "Platform choice"]
  },
  {
    id: "gcp-cdl-374",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "The product catalog API that asks the same question",
    scenario: "A retailer's product-catalog API receives millions of identical requests for the same popular items each hour, and every call goes through Apigee to a slow legacy backend. Catalog data changes only a few times a day, and the team wants faster answers and far less backend load.",
    question: "Which Apigee capability best helps?",
    options: [
      { id: 'A', text: "The Quota policy, capping the total calls that each app makes per day" },
      { id: 'B', text: "Apigee monetization, charging apps a fee for every catalog lookup made" },
      { id: 'C', text: "The Response Cache policy, returning stored responses for repeat calls" },
      { id: 'D', text: "The Verify API Key policy, checking every caller's key on each request" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Response Cache policy stores backend responses in Apigee for a configured time and serves repeated requests from the cache, cutting latency and removing most load from the legacy backend; with data changing only a few times a day, a suitable cache lifetime keeps results fresh. Quotas would reject legitimate traffic rather than speed it up. Verifying API keys secures access but still forwards every call. Charging per lookup changes billing, not performance.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/response-cache-policy",
    tags: ["Apigee", "Caching", "Performance"]
  },
  {
    id: "gcp-cdl-375",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d4",
    domainName: "Modernize Infrastructure and Applications with Google Cloud",
    title: "Securing an old backend without touching its code",
    scenario: "A utility company's billing backend has no authentication of its own and cannot easily be changed. It will now be exposed to partner apps through Apigee, and security requires that only registered partner apps with valid credentials can call it.",
    question: "How should the team enforce this?",
    options: [
      { id: 'A', text: "Rely on each partner to promise in writing that only its own apps will call it" },
      { id: 'B', text: "Publish the backend's address in the developer portal so partners call it direct" },
      { id: 'C', text: "Use a Response Cache policy so that most calls never reach the backend at all" },
      { id: 'D', text: "Apply Apigee security policies such as API key or OAuth checks in the proxy" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apigee API proxies sit in front of backends and can enforce security policies, such as Verify API Key or OAuthV2 token validation, so only registered apps with valid credentials get through, without changing the backend's code. Publishing the backend's address lets callers bypass Apigee entirely. A written promise is not a technical control. Caching reduces load but does not authenticate anyone, and uncached calls would still reach the backend unchecked.",
    referenceUrl: "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/verify-api-key-policy",
    tags: ["Apigee", "API security"]
  }
];

export default GCP_CDL_QUESTIONS_15;
