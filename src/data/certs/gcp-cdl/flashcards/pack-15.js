export const GCP_CDL_FLASHCARDS_15 = [
  {
    id: 'gcp-cdl-fc-351',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: "What is Cross-Cloud Interconnect, and when does it fit?",
    hint: "A private link to another cloud provider, not to your data center.",
    back: "<strong>Cross-Cloud Interconnect</strong> is a <strong>dedicated physical connection between Google Cloud and another cloud provider</strong>, such as AWS, Azure or Oracle Cloud, provisioned by Google at 10 Gbps or 100 Gbps. It fits multicloud architectures that move large volumes of data between clouds and want private, high-bandwidth traffic that does not cross the public internet. Links to on-premises sites use Dedicated or Partner Interconnect instead.",
    tags: ["Cross-Cloud Interconnect", "Multicloud", "Networking"]
  },
  {
    id: 'gcp-cdl-fc-352',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is AlloyDB Omni?',
    hint: 'AlloyDB you can download.',
    back: 'A <strong>downloadable, self-managed edition of AlloyDB for PostgreSQL</strong> that runs <strong>anywhere</strong>: your data center, other public clouds, edge sites or a laptop. It is 100% PostgreSQL-compatible, keeps AlloyDB features such as the columnar engine and AlloyDB AI, and is licensed per vCPU through Google Cloud.',
    tags: ['AlloyDB Omni', 'Hybrid cloud']
  },
  {
    id: 'gcp-cdl-fc-353',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'BigQuery Omni vs AlloyDB Omni: which solves which problem?',
    hint: 'Analytics vs transactions.',
    back: '<strong>BigQuery Omni</strong>: <strong>analytics</strong> on large data sets sitting in another cloud\'s object storage, queried in place with BigQuery SQL. <strong>AlloyDB Omni</strong>: an <strong>operational, transactional PostgreSQL-compatible database</strong> that you run next to applications outside Google Cloud. Both extend Google Cloud technology to where data must live.',
    tags: ['BigQuery Omni', 'AlloyDB Omni']
  },
  {
    id: 'gcp-cdl-fc-354',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'How does GKE Enterprise support hybrid and multicloud Kubernetes?',
    hint: 'Fleets and clusters that live elsewhere.',
    back: 'It groups clusters into <strong>fleets</strong> managed from Google Cloud, including GKE clusters, <strong>GKE on AWS and Azure</strong>, and conformant clusters such as Amazon EKS registered as <strong>attached clusters</strong>. Teams get one console, consistent configuration and policy enforcement, and shared security controls across environments.',
    tags: ['GKE Enterprise', 'Multicloud']
  },
  {
    id: 'gcp-cdl-fc-355',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Why is Looker useful in a multicloud data estate?',
    hint: 'Define metrics once, query many databases.',
    back: 'Looker connects to <strong>many SQL databases</strong>, such as BigQuery, Amazon Redshift, Snowflake and others, and queries them <strong>in place</strong>. Its semantic layer, <strong>LookML</strong>, defines business metrics once, so every team sees the same governed numbers whichever cloud holds the data.',
    tags: ['Looker', 'Multicloud']
  },
  {
    id: 'gcp-cdl-fc-356',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Why does Cloud SQL help an organisation avoid lock-in?',
    hint: 'The engines are not proprietary.',
    back: 'Cloud SQL runs the <strong>standard MySQL, PostgreSQL and SQL Server</strong> engines as a managed service. Applications use ordinary drivers and SQL, so they could move to the same engine elsewhere, while Google handles patching, backups and high availability.',
    tags: ['Cloud SQL', 'Portability']
  },
  {
    id: 'gcp-cdl-fc-357',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'In Apigee hybrid, what runs where?',
    hint: 'Two planes, two locations.',
    back: 'The <strong>runtime plane</strong>, which processes API traffic and applies policies, runs on Kubernetes <strong>in the customer\'s environment</strong>, such as its own data center or another cloud. The <strong>management plane</strong> (UI, management APIs, analytics) is <strong>hosted by Google Cloud</strong>. It suits organisations that must keep API traffic on premises.',
    tags: ['Apigee hybrid', 'Hybrid cloud']
  },
  {
    id: 'gcp-cdl-fc-358',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is an application programming interface (API)?',
    hint: 'A contract between programs.',
    back: 'A <strong>defined interface that lets one piece of software request data or actions from another</strong>, without knowing how the other is built. For example, a mobile app calls an order API to fetch a customer\'s orders. The API hides internal complexity behind a stable contract.',
    tags: ['API', 'Definitions']
  },
  {
    id: 'gcp-cdl-fc-359',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is an API proxy in Apigee, and why put one in front of a backend?',
    hint: 'A managed front door.',
    back: 'An API proxy is a <strong>facade that clients call instead of the backend</strong>. It applies policies (security, rate limits, caching, transformation) and collects analytics, then forwards requests. Backends, including legacy systems, can change or be replaced behind the proxy without breaking the apps that call it.',
    tags: ['Apigee', 'API proxy']
  },
  {
    id: 'gcp-cdl-fc-360',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Private, partner and public APIs: who is each for?',
    hint: 'Inside, trusted outside, everyone.',
    back: '<strong>Private (internal)</strong>: used only by the organisation\'s own systems and teams. <strong>Partner</strong>: shared with specific external organisations under agreements. <strong>Public (open)</strong>: available to any external developer who signs up, often through a developer portal, to build an ecosystem or sell access.',
    tags: ['API types', 'API strategy']
  },
  {
    id: 'gcp-cdl-fc-361',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'How should an organisation make breaking changes to an API that partners depend on?',
    hint: 'Never surprise consumers.',
    back: 'Treat the API as a <strong>contract</strong>: make additive, backward-compatible changes in place, and put <strong>breaking changes in a new major version</strong> (for example v2) while the old version keeps running through a published <strong>deprecation period</strong>. Consumers migrate on their own schedule instead of breaking overnight.',
    tags: ['API versioning', 'API design']
  },
  {
    id: 'gcp-cdl-fc-362',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Name four ways APIs create business value.',
    hint: 'Reuse, speed, partners, revenue.',
    back: '<strong>Reuse</strong>: many channels share one capability. <strong>Speed</strong>: new apps are assembled from existing APIs. <strong>Ecosystems</strong>: partners build on your services and extend your reach. <strong>New revenue</strong>: data and services sold as API products. APIs also decouple new apps from legacy systems.',
    tags: ['API', 'Business value']
  },
  {
    id: 'gcp-cdl-fc-363',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What are common API monetisation models?',
    hint: 'Free, per call, per month, or shared.',
    back: '<strong>Freemium</strong>: a free tier with limits, paid tiers above it. <strong>Pay per use</strong>: charges per call or transaction, possibly with volume bands. <strong>Subscription</strong>: a recurring fee for an allowance. <strong>Revenue sharing</strong>: partners receive a percentage of revenue they generate. Indirect value (reach, loyalty) can justify free APIs.',
    tags: ['API monetization', 'Pricing']
  },
  {
    id: 'gcp-cdl-fc-364',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Which charges can an Apigee monetization rate plan include?',
    hint: 'Start, repeat, use, share.',
    back: 'An <strong>initialization (setup) fee</strong> when a developer buys the API product, a <strong>fixed recurring fee</strong>, <strong>consumption-based fees</strong> (a fixed fee per unit or <strong>banded</strong> fees that vary by usage range) and <strong>revenue sharing</strong> with developer partners. Rate plans attach to API products.',
    tags: ['Apigee monetization', 'Rate plans']
  },
  {
    id: 'gcp-cdl-fc-365',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Prepaid vs postpaid billing in Apigee monetization: how is unpaid usage prevented?',
    hint: 'Balance first, and a policy that checks it.',
    back: '<strong>Prepaid</strong>: developers fund an account balance before calling the API; the <strong>MonetizationLimitsCheck</strong> policy in the proxy rejects calls when there is no active subscription or the balance is exhausted. <strong>Postpaid</strong>: usage is invoiced afterwards, which suits trusted, contracted customers but carries credit risk.',
    tags: ['Apigee monetization', 'Billing']
  },
  {
    id: 'gcp-cdl-fc-366',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is an API product in Apigee?',
    hint: 'What developers actually sign up for.',
    back: 'A <strong>bundle of API proxies or operations plus access rules</strong>, such as quotas and environments, packaged for a particular audience. Developers register apps against API products to get credentials. Different products over the same proxies create tiers, such as free and premium, each with its own rate plan.',
    tags: ['API products', 'Apigee']
  },
  {
    id: 'gcp-cdl-fc-367',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What does Apigee API Management provide?',
    hint: 'The full API lifecycle.',
    back: 'A platform to <strong>design, build, secure, publish, analyse and monetise APIs</strong>: API proxies with security and traffic policies, developer portals for onboarding, analytics on usage and performance, monetization with rate plans, and deployment in Google Cloud or on premises with Apigee hybrid.',
    tags: ['Apigee', 'API management']
  },
  {
    id: 'gcp-cdl-fc-368',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'Apigee Spike Arrest vs Quota: what does each protect against?',
    hint: 'Seconds vs days.',
    back: '<strong>Spike Arrest</strong> smooths <strong>sudden bursts</strong> by limiting the rate of requests (per second or minute) to protect backends. <strong>Quota</strong> enforces a <strong>business allowance</strong> over longer periods (per hour, day or month), such as 1,000 free calls a day. Use both: one guards infrastructure, the other the commercial terms.',
    tags: ['Apigee', 'Traffic management']
  },
  {
    id: 'gcp-cdl-fc-369',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What does an Apigee developer portal give external developers?',
    hint: 'Self-service from docs to keys.',
    back: 'Self-service <strong>API documentation</strong>, the ability to <strong>register apps and obtain credentials</strong> for API products, and a place to learn and test APIs. Apigee offers an <strong>integrated portal</strong> and a customisable <strong>Drupal-based</strong> portal. Faster onboarding grows adoption without adding support staff.',
    tags: ['Apigee', 'Developer portal']
  },
  {
    id: 'gcp-cdl-fc-370',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What questions can Apigee analytics answer for an API product manager?',
    hint: 'Who calls what, how fast, how often it fails.',
    back: 'Which <strong>APIs, products and developer apps</strong> generate the most traffic, how <strong>response times and error rates</strong> vary, and how usage <strong>trends</strong> over time, through dashboards and custom reports. These insights guide investment, pricing and troubleshooting.',
    tags: ['Apigee', 'API analytics']
  },
  {
    id: 'gcp-cdl-fc-371',
    difficulty: 'hard',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'API Gateway vs Apigee: how do you choose?',
    hint: 'Lightweight front door vs full API business platform.',
    back: '<strong>API Gateway</strong>: a lightweight, fully managed gateway to secure and route calls to serverless backends such as Cloud Run, with simple setup and low cost. <strong>Apigee</strong>: full API management with monetization, developer portals, rich analytics, advanced security, hybrid deployment and complex policies. Treating APIs as products points to Apigee.',
    tags: ['Apigee', 'API Gateway']
  },
  {
    id: 'gcp-cdl-fc-372',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'When does the Apigee Response Cache policy pay off?',
    hint: 'Same question, same answer, many times.',
    back: 'When many clients request the <strong>same data that changes infrequently</strong>, such as product catalogs or reference data. Apigee stores the backend response for a set time and serves repeats from cache, <strong>cutting latency and backend load</strong>, which is especially valuable in front of slow legacy systems.',
    tags: ['Apigee', 'Caching']
  },
  {
    id: 'gcp-cdl-fc-373',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'API key vs OAuth 2.0 in Apigee: what does each verify?',
    hint: 'Which app, or which app acting for which user?',
    back: 'An <strong>API key</strong> identifies the <strong>calling app</strong> (Verify API Key policy), which is enough for simple access control and usage tracking. <strong>OAuth 2.0</strong> issues <strong>access tokens</strong> with scopes, often on behalf of a user, for stronger, delegated authorisation (OAuthV2 policy). Both are enforced in the proxy, not the backend.',
    tags: ['Apigee', 'API security']
  },
  {
    id: 'gcp-cdl-fc-374',
    difficulty: 'medium',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What is Apigee API hub for?',
    hint: 'A catalogue of every API you have.',
    back: 'A <strong>central catalogue of an organisation\'s APIs</strong>, whichever gateway or team they come from, with specifications, versions and ownership. It helps teams <strong>discover and reuse</strong> existing APIs instead of building duplicates and gives governance teams visibility across the API estate.',
    tags: ['Apigee API hub', 'API governance']
  },
  {
    id: 'gcp-cdl-fc-375',
    difficulty: 'easy',
    certId: 'gcp-cdl',
    domainId: 'd4',
    front: 'What are the basics of a REST API?',
    hint: 'Web addresses, verbs and JSON.',
    back: 'A REST API exposes <strong>resources</strong> at URLs and uses standard <strong>HTTP methods</strong>: GET to read, POST to create, PUT or PATCH to update, DELETE to remove. Data is usually exchanged as <strong>JSON</strong>. Its simplicity and use of web standards make it the most common style for public APIs.',
    tags: ['REST', 'API design']
  }
];

export default GCP_CDL_FLASHCARDS_15;
