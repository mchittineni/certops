export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-401",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Handling a Team That Needs Its Own Region",
    scenario: "A business unit acquires a customer requiring service from a Region the company does not currently use. Existing guardrails deny that Region organization-wide, and the security team will not weaken the control for everyone.",
    question: "How should the exception be handled?",
    options: [
      { id: 'A', text: "Move that business unit's accounts into an organizational unit whose policy permits the additional Region, leaving every other account unchanged." },
      { id: 'B', text: "Add the Region to the organization-wide allow-list and rely on detective controls to report any other team that begins creating resources in it." },
      { id: 'C', text: "Add a condition to the existing policy exempting that business unit's account identifiers so the Region is permitted only for those accounts." },
      { id: 'D', text: "Create a separate AWS organization for that business unit so its Region requirements do not interfere with the parent organization's controls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organizational units exist so policy can vary, so moving the accounts into a unit with its own Region allow-list is the intended mechanism and leaves every other account's control untouched. Opening the Region organization-wide weakens the guardrail for everyone and substitutes detection for prevention. Account-identifier exemptions inside a shared policy become unreadable and error-prone as they accumulate. A separate organization loses consolidated billing and the shared baseline entirely.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html",
    tags: ["Organizations", "SCP", "Region Control", "Governance"]
  },
  {
    id: "aws-sap-402",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Choosing How to Federate a Partner's Workforce",
    scenario: "A joint venture needs 200 staff from a partner company to work in the venture's AWS accounts. The partner will not give the venture access to its directory, and the venture will not create accounts for each person.",
    question: "Which identity design works?",
    options: [
      { id: 'A', text: "Configure the partner's identity provider as an external provider in IAM Identity Center and assign permission sets to the groups that it asserts for each person." },
      { id: 'B', text: "Create an Amazon Cognito user pool for the venture and have the partner's staff register in it, federating to the partner's provider for authentication." },
      { id: 'C', text: "Create IAM users in the venture's accounts for each of the partner's staff, with credentials distributed by the partner's own IT department to its people." },
      { id: 'D', text: "Create a shared cross-account role that the partner's own AWS account can assume, with the partner responsible for controlling which of its staff use it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trusting the partner's identity provider through IAM Identity Center means the partner keeps control of its directory and joiners and leavers, while the venture assigns permission sets to the groups the provider asserts, and nobody holds long-lived credentials. Cognito is for application users rather than workforce console and API access. IAM users for 200 external staff is the per-person principal being avoided and creates a credential lifecycle the venture cannot manage. A shared role destroys individual attribution.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-identity-source-idp.html",
    tags: ["IAM Identity Center", "Federation", "Partner Access", "Identity"]
  },
  {
    id: "aws-sap-403",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Preventing Public Exposure of a New Service",
    scenario: "A team accidentally created a publicly accessible RDS instance and an internet-facing load balancer in a subnet intended to be private. The company wants such mistakes to be impossible rather than reported after the fact.",
    question: "Which combination prevents both mistakes?",
    options: [
      { id: 'A', text: "Remove the internet gateway route from the private subnets and deny creation of publicly accessible databases with a policy." },
      { id: 'B', text: "Create AWS Config rules detecting publicly accessible databases and internet-facing load balancers, with automatic remediation reconfiguring each finding." },
      { id: 'C', text: "Apply a permissions boundary preventing the team from creating load balancers or databases." },
      { id: 'D', text: "Tag the private subnets so that the team's tooling can identify them, and document the requirement that internet-facing resources not be created in them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure beats detection: a subnet with no route to an internet gateway cannot host an internet-facing load balancer regardless of what is requested, and a policy denying the publicly accessible attribute stops the database mistake at the API call. Config rules with remediation act after the resource exists and has been briefly exposed. A permissions boundary blocking creation removes the team's autonomy for ordinary work. Tags and documentation rely on the care that already failed.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html",
    tags: ["VPC", "Public Exposure", "Guardrails", "Security"]
  },
  {
    id: "aws-sap-404",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Sizing a Landing Zone for Future Growth",
    scenario: "A company is designing its network address plan. It has 12 VPCs today, expects perhaps 150 within five years across several Regions, and must retain the ability to connect to partner networks and its own data centres.",
    question: "Which address planning approach supports the growth?",
    options: [
      { id: 'A', text: "Allocate a large private range, subdivide it hierarchically by Region and environment, and manage allocations from that hierarchy." },
      { id: 'B', text: "Allocate each VPC a range from the private address space as it is created, recording the allocation so that overlaps with existing VPCs are avoided." },
      { id: 'C', text: "Use the same address range in every VPC and rely on PrivateLink for connectivity." },
      { id: 'D', text: "Allocate ranges from a public address block the company owns so that overlaps with partner networks are impossible whatever addressing those partners use." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Hierarchical allocation from a large reserved block keeps routing tables summarizable, makes it obvious where a new VPC's range comes from, and leaves room for 150 VPCs and partner connectivity without renumbering. Allocating ad hoc and recording afterwards produces a fragmented plan that cannot be summarized and eventually collides. Identical ranges everywhere forces PrivateLink for all connectivity, which does not suit routed traffic. Using owned public addresses avoids overlap but is wasteful and unnecessary for private connectivity.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/ipam/what-it-is-ipam.html",
    tags: ["Address Planning", "IPAM", "Networking", "Landing Zone"]
  },
  {
    id: "aws-sap-405",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Detecting a Misconfiguration Before It Reaches Production",
    scenario: "Several incidents were caused by infrastructure templates that were syntactically valid but violated company standards, such as unencrypted volumes or overly broad security groups, and were only caught by a detective control after deployment.",
    question: "Which control catches these before deployment?",
    options: [
      { id: 'A', text: "Run policy-as-code checks against the templates in the pipeline, failing the build when a standard is violated." },
      { id: 'B', text: "Deploy the templates into a staging account first and run the detective controls there so violations are found before the production deployment happens." },
      { id: 'C', text: "Require a peer review of every template change against the company's standards." },
      { id: 'D', text: "Use CloudFormation Guard rules applied to the deployed stacks so that any stack violating a standard is reported to the owning team for correction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Evaluating the template in the pipeline is the earliest point at which a violation can be caught mechanically, and failing the build makes the standard impossible to bypass accidentally while giving immediate feedback to the author. Deploying to staging first catches it later, costs a deployment cycle, and depends on staging matching production. Peer review is valuable but humans miss what a rule engine catches every time. Applying rules to deployed stacks is detection after the fact, which is the current situation.",
    referenceUrl: "https://docs.aws.amazon.com/cfn-guard/latest/ug/what-is-guard.html",
    tags: ["Policy as Code", "CloudFormation Guard", "CI/CD", "Prevention"]
  },
  {
    id: "aws-sap-406",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Choosing Who Pays for Shared Infrastructure",
    scenario: "A shared services account runs a Transit Gateway, a private certificate authority, and centralized endpoints used by every workload account. Finance asks how this cost should be treated in the company's chargeback model.",
    question: "Which treatment is most defensible?",
    options: [
      { id: 'A', text: "Allocate the shared cost to consuming teams using a usage-based metric such as attachment count or data processed." },
      { id: 'B', text: "Leave the shared cost in the platform team's own budget, since the platform team owns and operates the infrastructure that the workload accounts consume." },
      { id: 'C', text: "Split the shared cost evenly across every workload account." },
      { id: 'D', text: "Attribute the shared cost to whichever workload account generated the most traffic through the shared infrastructure during each of the billing periods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Usage-based allocation ties what a team pays to what it consumes, so the signal encourages teams to remove unused attachments and reduce unnecessary traffic, which is what a chargeback model is for. Leaving the cost with the platform team hides it from the teams whose decisions drive it. An even split charges a team with one attachment the same as one with thirty. Attributing everything to the heaviest consumer is arbitrary and penalizes a single team for shared infrastructure.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-laying-the-foundation/cost-allocation.html",
    tags: ["Chargeback", "FinOps", "Shared Services", "Cost Allocation"]
  },
  {
    id: "aws-sap-407",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing a System That Degrades Rather Than Fails",
    scenario: "A product page assembles content from a catalogue service, a recommendation service, a review service, and a stock service. Today any one of them failing returns an error page, and recommendations fail most often.",
    question: "Which design change improves the customer experience most?",
    options: [
      { id: 'A', text: "Render the page from the catalogue alone if necessary, treating recommendations, reviews, and stock as optional with their own per-call timeouts." },
      { id: 'B', text: "Add retries with exponential backoff around each of the four calls so that a transient failure of any service is recovered before the page is rendered." },
      { id: 'C', text: "Cache the responses of all four services so that a failing service's most recent response is served from the cache while it is unavailable." },
      { id: 'D', text: "Call the four services in parallel rather than in sequence so the page renders faster and a slow service has less effect on the total response time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Classifying dependencies as essential or optional and rendering what is available turns a total failure into a slightly reduced page, which is what customers experience as working. Retries help transient blips but a sustained failure still produces the error page, and they add latency. Caching helps for content that was previously fetched and is a good complement, but a cold cache or a new product still fails. Parallel calls improve latency without changing what happens when a call fails.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_graceful_degradation.html",
    tags: ["Graceful Degradation", "Resilience", "Design", "Customer Experience"]
  },
  {
    id: "aws-sap-408",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Where to Enforce a Quota per Customer",
    scenario: "A platform must limit each customer to a contracted number of records stored, rejecting writes beyond it. Customers write through several services and the limit must be consistent regardless of which path a write takes.",
    question: "Where should the quota be enforced?",
    options: [
      { id: 'A', text: "In the data service that owns the records, so every write path passes the same check regardless of its caller." },
      { id: 'B', text: "In each service that accepts customer writes, with the limit distributed to them." },
      { id: 'C', text: "At the API gateway fronting the platform, using a usage plan quota so that a customer's writes are rejected once the contracted number is reached." },
      { id: 'D', text: "In a nightly job that counts each customer's records and suspends any customer found to be above the contracted number until the excess is removed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A rule about the state of the data belongs with the component that owns that state, because it is the only place that can evaluate the current count atomically with the write and cannot be bypassed by a new caller. Enforcing in each writing service duplicates the logic and drifts as services are added. An API gateway usage plan counts requests over a time window rather than stored records. A nightly job detects the breach long after it happened and punishes the customer retrospectively.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-isolation.html",
    tags: ["Quotas", "Multi-Tenancy", "Design", "SaaS"]
  },
  {
    id: "aws-sap-409",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Selecting a Storage Design for Many Small Files",
    scenario: "A workload writes 40 million small files a day, each a few kilobytes, and reads them individually by a known identifier. The team is deciding between object storage and a database and is concerned about request cost and latency.",
    question: "Which design suits the access pattern?",
    options: [
      { id: 'A', text: "Store the small records in Amazon DynamoDB keyed by the identifier, since the per-item request cost and read latency both beat object storage at this size." },
      { id: 'B', text: "Store each file as an object in Amazon S3 keyed by the identifier, since object storage is the cheapest place to keep large numbers of files durably." },
      { id: 'C', text: "Store the files on an Amazon EFS file system keyed by a directory structure derived from the identifier so they are read directly by the application." },
      { id: 'D', text: "Batch the files into larger objects in Amazon S3 and maintain an index so that a read fetches a byte range from whichever object contains the record." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "At a few kilobytes per record with individual key-based reads, a key-value database is the better fit: single-digit millisecond reads, request pricing suited to small items, and no per-object storage overhead. Object storage charges per request and carries per-object overhead that dominates at this size, and its latency is higher. A file system with millions of small files creates directory and metadata pressure. Batching into larger objects with an index works but reimplements a database index in application code.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-general-nosql-design.html",
    tags: ["DynamoDB", "S3", "Small Objects", "Design"]
  },
  {
    id: "aws-sap-410",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing for an Unreliable Downstream Partner",
    scenario: "A system must deliver notifications to a partner's endpoint. The partner's availability is roughly 98 percent, messages must not be lost, and the partner requires that messages arrive in the order they were generated for each account.",
    question: "Which delivery design meets the requirements?",
    options: [
      { id: 'A', text: "A FIFO queue keyed by account with a dead-letter queue, delivering through a consumer that retries with backoff." },
      { id: 'B', text: "An SNS topic with an HTTPS subscription to the partner's endpoint and a delivery retry policy configured with exponential backoff between the attempts." },
      { id: 'C', text: "An EventBridge rule with the partner's endpoint as an API destination and retries." },
      { id: 'D', text: "A Lambda function invoked on each notification that calls the partner's endpoint directly and writes any failure to a table for later manual reprocessing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A FIFO queue with the account as the message group preserves per-account order while allowing different accounts to proceed in parallel, the queue holds messages durably through the partner's downtime, and a dead-letter queue captures anything that exhausts retries. An SNS HTTPS subscription retries but offers no ordering and eventually discards. An EventBridge API destination likewise has no ordering guarantee. A direct Lambda call with a failure table loses ordering and creates manual work.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html",
    tags: ["SQS FIFO", "Ordering", "Partner Integration", "Resilience"]
  },
  {
    id: "aws-sap-411",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing How to Store Large Binary Attachments",
    scenario: "A case management system stores case records with attachments of up to 100 MB. Records are queried frequently by several attributes, attachments are downloaded occasionally, and the team wants each stored where it belongs.",
    question: "Which storage split is appropriate?",
    options: [
      { id: 'A', text: "Keep the case records in a database and the attachments in Amazon S3, with the record holding the object key." },
      { id: 'B', text: "Keep both the case records and the attachments in the database, storing the attachments as binary large objects so a single query returns everything." },
      { id: 'C', text: "Keep both the case records and the attachments in Amazon S3, storing each record as a JSON object and querying them with Amazon Athena when needed." },
      { id: 'D', text: "Keep the case records in a database and the attachments on Amazon EFS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structured attributes queried frequently belong in a database, while large binary content belongs in object storage, and a key in the record joins them, which keeps the database small and fast while attachments cost little and scale freely. Storing 100 MB blobs in the database inflates its size, backups, and memory pressure for data that is rarely read. Putting the records in object storage sacrifices the frequent attribute queries. A file system for attachments works but costs more than object storage and adds a mount dependency.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/data-store-patterns.html",
    tags: ["S3", "Databases", "Attachments", "Design"]
  },
  {
    id: "aws-sap-412",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Picking a Pattern for Request Validation",
    scenario: "An API receives malformed requests that reach the backend, consume compute, and produce errors. The team wants invalid requests rejected as early and as cheaply as possible without writing validation code in every handler.",
    question: "Which approach rejects them earliest?",
    options: [
      { id: 'A', text: "Define request models on the API and let the gateway validate the body and parameters before invoking the backend." },
      { id: 'B', text: "Add a validation library to each backend handler so that every request is checked against the expected schema at the start of the handler's execution." },
      { id: 'C', text: "Add an AWS WAF rule inspecting the request body so that requests failing the expected structure are blocked before reaching the API gateway itself." },
      { id: 'D', text: "Add a Lambda authorizer that validates the request structure first." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Request validation in the gateway rejects malformed requests before any backend invocation, is expressed as a model rather than code, and costs nothing per rejected request beyond the gateway call. Validating in each handler means the backend is invoked and billed for every invalid request and the logic is duplicated. WAF inspects for malicious patterns rather than schema conformance and is awkward for structural validation. A Lambda authorizer runs a function per request, which is the compute the team is trying to avoid.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html",
    tags: ["API Gateway", "Request Validation", "Cost Optimization", "Design"]
  },
  {
    id: "aws-sap-413",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing a Tenant-Aware Logging Strategy",
    scenario: "A SaaS platform must let support engineers investigate one tenant's issue without seeing other tenants' data in the logs, and must be able to export all of a tenant's log entries if that tenant requests them.",
    question: "Which logging design supports both needs?",
    options: [
      { id: 'A', text: "Emit structured logs carrying a tenant identifier and use queries scoped to that identifier, with the access controlled at the query layer itself." },
      { id: 'B', text: "Write each tenant's logs to a separate log group so that access can be granted per tenant and an export is a copy of that tenant's own group." },
      { id: 'C', text: "Write all logs to one group and rely on support engineers filtering by tenant, with training and audit ensuring they do not view other tenants' entries." },
      { id: 'D', text: "Write logs without tenant identifiers to avoid storing tenant data, and reproduce issues in a test environment when a tenant reports a problem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A structured tenant identifier on every entry makes both operations queries rather than storage decisions: scoped access can be enforced at the query layer and an export is a query result. A log group per tenant gives strong isolation but does not scale to thousands of tenants and complicates cross-tenant operational views. Relying on engineers to filter correctly is not a control. Omitting tenant identifiers makes investigation and export impossible and reproducing issues rarely works.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-isolation.html",
    tags: ["Logging", "Multi-Tenancy", "SaaS", "Observability"]
  },
  {
    id: "aws-sap-414",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Diagnosing a Failure That Only Occurs in Production",
    scenario: "A bug appears only in production. Staging is identical in configuration, the same image is deployed, and the team cannot reproduce it. Production carries 50 times the traffic and roughly 200 times the data volume.",
    question: "Which investigative approach is most likely to succeed?",
    options: [
      { id: 'A', text: "Instrument production to capture the failing requests' inputs and state, since the difference is scale rather than configuration." },
      { id: 'B', text: "Copy the production data into staging and replay production traffic against it so that the environment matches production closely enough to reproduce." },
      { id: 'C', text: "Compare the configuration of the two environments in detail, since an identical deployment behaving differently usually indicates an undetected difference." },
      { id: 'D', text: "Enable debug logging across the production fleet for additional detail." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When the environments match and only scale differs, the bug depends on data volume, concurrency, or a rare input that staging never sees, so capturing the actual inputs and state of failing requests in production is the direct path. Copying production data and replaying traffic is valuable but slow, expensive, and often blocked by the sensitivity of that data. A configuration comparison is worth a quick check but the scenario states they match. Fleet-wide debug logging generates enormous volume and may not capture the specific state that matters.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html",
    tags: ["Troubleshooting", "Observability", "Production", "Debugging"]
  },
  {
    id: "aws-sap-415",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing the Blast Radius of a Shared Database",
    scenario: "Twelve services share one Aurora cluster. A single service's runaway query recently consumed the cluster's connections and CPU, degrading the other eleven. Splitting the database is planned but will take a year.",
    question: "Which measure limits the damage in the meantime?",
    options: [
      { id: 'A', text: "Give each service its own database user with a connection limit and a statement timeout enforced by the database." },
      { id: 'B', text: "Add reader instances so the extra capacity absorbs a runaway query." },
      { id: 'C', text: "Put an RDS Proxy in front of the cluster so that connections are pooled and a single service cannot exhaust the connections available to the others." },
      { id: 'D', text: "Add CloudWatch alarms on the cluster's CPU and connection count so the on-call engineer is paged quickly when a runaway query begins consuming capacity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Per-service database users with connection limits and statement timeouts put the bound where it cannot be bypassed, so a runaway query is terminated and the offending service cannot monopolize connections. Extra readers add capacity that a runaway query will also consume. RDS Proxy pools connections well and helps, but without per-service limits one service can still claim most of the pool and it does not stop a long-running statement. Alarms shorten detection without limiting the damage.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.html",
    tags: ["Aurora", "Blast Radius", "Resource Limits", "Multi-Tenancy"]
  },
  {
    id: "aws-sap-416",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Choosing What to Automate First",
    scenario: "An operations team has a long list of manual tasks. Some are frequent and quick, some are rare and slow, and some are rare but dangerous when performed incorrectly under time pressure during an incident.",
    question: "Which tasks should be automated first?",
    options: [
      { id: 'A', text: "Frequent tasks, for the time returned, and rare dangerous ones, for the errors avoided when they are performed under pressure." },
      { id: 'B', text: "The most frequent tasks only, since automation effort should follow the time spent and frequent tasks consume the largest share of the team's capacity." },
      { id: 'C', text: "The slowest tasks regardless of frequency, for the time returned per run." },
      { id: 'D', text: "The tasks the team finds most tedious, since automating those improves morale and encourages further adoption of automation across the operations team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Automation pays back through time saved and through errors prevented, so the two highest-value groups are the frequent tasks where saved minutes compound and the rare dangerous ones where a mistake during an incident is costly and a human under pressure is least reliable. Frequency alone ignores the risk dimension entirely. Duration alone can prioritize a slow task performed twice a year. Tedium correlates loosely with value and is not a sound ranking on its own.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/oe_workload_observability_auto_response.html",
    tags: ["Automation", "Toil", "Prioritization", "Operational Excellence"]
  },
  {
    id: "aws-sap-417",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Understanding Why a Failover Did Not Trigger",
    scenario: "Route 53 failover records with health checks are configured for two Regions. During an incident the primary Region's application returned 500 errors for every request but DNS continued to resolve to it and no failover occurred.",
    question: "What is the most likely reason?",
    options: [
      { id: 'A', text: "The health check requests a path that returns 200 regardless of application state, so the endpoint never became unhealthy." },
      { id: 'B', text: "The record's time to live was too long, so resolvers continued returning the cached primary address after the failover had already taken place." },
      { id: 'C', text: "The health check's failure threshold was too high, so the primary endpoint had not yet been marked unhealthy when the incident was resolved." },
      { id: 'D', text: "The secondary record's health check was also failing, leaving no healthy target." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Failover is driven entirely by the health check's own verdict, so a check pointed at an endpoint that returns 200 whenever the process is running reports healthy while every real request fails, and no failover is ever initiated. A long time to live would delay clients seeing a change that did occur, but the scenario says no failover occurred at all. A high failure threshold delays rather than prevents it. If both checks failed Route 53 would return all records rather than none, which would still have sent some traffic to the secondary.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html",
    tags: ["Route 53", "Health Checks", "Failover", "Troubleshooting"]
  },
  {
    id: "aws-sap-418",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing the Cost of an Over-Replicated Cache",
    scenario: "An ElastiCache cluster runs three replicas per shard across three Availability Zones. The cached data is derived from a database and can be recomputed in seconds, and the cache cost has become significant.",
    question: "Which change reduces cost proportionately to the risk?",
    options: [
      { id: 'A', text: "Reduce to one replica per shard, since the data is recomputable and a brief miss costs a database read rather than data loss." },
      { id: 'B', text: "Remove the replicas entirely and rely on the primary nodes alone." },
      { id: 'C', text: "Reduce the node size so the same replica count costs less, accepting that the working set will no longer fit entirely within the cluster's memory." },
      { id: 'D', text: "Move the cached data into Amazon DynamoDB with DynamoDB Accelerator so the managed service absorbs the replication and its cost is lower overall." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replication in a cache buys availability of the cached data rather than durability, and when the data is cheaply recomputable the value of the third copy is small, so one replica retains automatic failover at a third of the replica cost. Removing replicas entirely loses automatic failover, so a node failure means a cold shard and a database stampede. A smaller node that no longer holds the working set raises the miss rate and the database load. Swapping to another service is a larger change with its own cost profile.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.html",
    tags: ["ElastiCache", "Replication", "Cost Optimization", "Trade-Offs"]
  },
  {
    id: "aws-sap-419",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Deciding Whether an Alarm Should Page",
    scenario: "A team is reviewing its alerting. Some alarms wake people for conditions that resolve themselves, while a few genuine customer-impacting conditions only produce an email nobody reads until the morning.",
    question: "Which principle should guide the classification?",
    options: [
      { id: 'A', text: "Page only when a human must act now to prevent or reduce customer impact; route everything else to a queue reviewed in hours." },
      { id: 'B', text: "Page on every alarm that indicates an error, since an error condition always warrants attention and classifying them risks missing something important." },
      { id: 'C', text: "Page on alarms that have historically preceded an incident, and route the remainder to email so the signal reflects what has actually mattered before." },
      { id: 'D', text: "Page on alarms owned by the on-call team and email those owned by other teams, so each notification reaches the group responsible for the component." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The test for a page is whether a human acting immediately changes the outcome for customers, which both removes the self-resolving noise and promotes the customer-impacting conditions currently sitting in email. Paging on every error guarantees the fatigue that made the genuine alerts invisible. Historical correlation is a useful input but cannot classify a condition that has not yet caused an incident. Routing by ownership confuses who should respond with whether an immediate response is warranted.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/oe_workload_observability_create_alerts.html",
    tags: ["Alerting", "On-Call", "Operational Excellence", "Observability"]
  },
  {
    id: "aws-sap-420",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Removing a Bottleneck in a Deployment Pipeline",
    scenario: "A pipeline takes 90 minutes, of which 70 are an end-to-end test suite run against a shared environment. Only one pipeline can run at a time because the tests conflict, so teams queue for hours to deploy.",
    question: "Which change most improves throughput?",
    options: [
      { id: 'A', text: "Create an ephemeral environment per pipeline run so the suites run in parallel without conflicting." },
      { id: 'B', text: "Split the end-to-end suite into smaller suites run in parallel against the shared environment so the 70 minutes falls to a fraction of its current length." },
      { id: 'C', text: "Move most of the end-to-end coverage down to faster unit and contract tests, keeping a small end-to-end suite for the critical paths only." },
      { id: 'D', text: "Add a second shared test environment so that two pipelines are able to run concurrently and the queue for deployment is approximately halved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The bottleneck is exclusivity rather than duration, so giving each run its own disposable environment removes the queue entirely and every pipeline proceeds independently. Splitting the suite into parallel parts does not help while they all contend for the same shared environment. Moving coverage down the test pyramid is genuinely valuable and shortens the suite, but it is a longer piece of work and leaves the exclusivity in place for whatever remains. A second environment doubles capacity rather than removing the constraint.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/oe_dev_integ_test_val_chg.html",
    tags: ["CI/CD", "Ephemeral Environments", "Testing", "Throughput"]
  },
  {
    id: "aws-sap-421",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Handling an Application That Depends on Local Storage Performance",
    scenario: "A database being rehosted relies on the sub-millisecond latency of local NVMe disks in its current physical servers. The team must preserve that performance while keeping the data durable across instance replacement.",
    question: "Which configuration meets both needs?",
    options: [
      { id: 'A', text: "Use instance store NVMe volumes for the performance-critical files, with replication or durable storage holding the authoritative copy of the data." },
      { id: 'B', text: "Use io2 Block Express volumes provisioned at high IOPS, accepting the network latency in exchange for the durability that EBS volumes provide." },
      { id: 'C', text: "Use instance store NVMe volumes alone, relying on the instance's stability so the data remains available for as long as the instance keeps running." },
      { id: 'D', text: "Use an Amazon FSx for Lustre file system so the parallel file system's throughput compensates for the latency difference against local NVMe disks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instance store gives the local NVMe latency the database depends on, and pairing it with replication to another node or a durable copy means an instance loss costs a rebuild rather than the data, which is how high-performance databases are normally run in the cloud. io2 Block Express is durable and fast but its network-attached latency is higher than local NVMe. Instance store alone loses the data when the instance stops. A Lustre file system optimizes parallel throughput rather than single-node latency.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html",
    tags: ["Instance Store", "Performance", "Durability", "Migration"]
  },
  {
    id: "aws-sap-422",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing Where to Break Up a Monolith First",
    scenario: "A monolith is to be decomposed. One module changes weekly and blocks releases, one is stable but large, one has a different scaling profile from the rest, and one is used only by an internal admin tool.",
    question: "Which module should be extracted first?",
    options: [
      { id: 'A', text: "The module that changes weekly, since extracting it lets the most frequent changes ship without releasing the monolith." },
      { id: 'B', text: "The module with a different scaling profile, since extracting it allows that part of the system to be scaled independently of the rest of the application." },
      { id: 'C', text: "The module used only by the internal admin tool, since it has the fewest consumers and extracting it therefore carries the lowest risk of breaking anything." },
      { id: 'D', text: "The largest module, since extracting it removes the greatest amount of code from the monolith and therefore makes the remaining application easier to work in." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Decomposition earns its cost through faster, safer change, so the module whose weekly releases are held hostage to the monolith returns that benefit immediately and demonstrates the value of continuing. Different scaling profiles are a valid reason to extract and would be a strong second candidate, but cost efficiency usually matters less than release velocity. The admin module is low risk and low reward, making it a reasonable rehearsal rather than a first real target. Size alone is not a benefit.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/welcome.html",
    tags: ["Monolith Decomposition", "Modernization", "Prioritization", "Microservices"]
  },
  {
    id: "aws-sap-423",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Preserving Audit Continuity Through a Migration",
    scenario: "A regulated workload's audit trail must be continuous across its migration. The on-premises system writes to a local audit log and the AWS target will write to CloudWatch Logs, and the regulator requires an unbroken record.",
    question: "Which approach preserves continuity?",
    options: [
      { id: 'A', text: "Ingest the historical on-premises audit records into the same store the migrated system writes to, preserving original timestamps." },
      { id: 'B', text: "Archive the on-premises audit log to Amazon S3 and document the cutover date so the regulator can correlate the two records across the migration." },
      { id: 'C', text: "Run both audit paths in parallel for a period after the cutover so that the on-premises record continues alongside the new one during the transition." },
      { id: 'D', text: "Export the CloudWatch Logs entries back into the on-premises audit system so that the complete record remains in the system the regulator already reviews." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An unbroken record means one queryable trail spanning both periods, which ingesting the historical records into the destination store achieves while preserving their original timestamps so the chronology is intact. Archiving separately and documenting the cutover leaves the regulator correlating two systems, which is what continuity is meant to avoid. Parallel running covers the transition but leaves the historical record stranded. Exporting back into a system being decommissioned inverts the migration.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html",
    tags: ["Audit", "Migration", "Compliance", "Continuity"]
  },
  {
    id: "aws-sap-424",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Deciding How to Handle a Workload With No Documentation",
    scenario: "A business-critical application has no documentation, no tests, and no current owner. It must migrate within six months and the team cannot establish what it does beyond observing its network traffic and its database.",
    question: "Which migration approach carries the least risk?",
    options: [
      { id: 'A', text: "Rehost it unchanged so its behaviour is preserved exactly, and build understanding through observation afterwards." },
      { id: 'B', text: "Reverse-engineer the application from its code and database schema before migrating so the team understands what it does before changing anything." },
      { id: 'C', text: "Replatform it onto managed services during the migration so the operational burden of an application nobody understands is reduced as it moves." },
      { id: 'D', text: "Rewrite it based on the observed behaviour so the resulting system is documented and understood by the team that will operate it afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When behaviour is unknown, preserving it exactly is the safest path, because a rehost changes nothing that could surprise anyone and the six-month deadline is met while understanding is built afterwards through observation and instrumentation. Reverse-engineering first may not complete in time and delays the deadline-driven work. Replatforming changes components whose interactions nobody understands. A rewrite from observed behaviour will miss every edge case the observation window did not exercise.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
    tags: ["Rehost", "Risk", "Legacy", "Migration Strategies"]
  },
  {
    id: "aws-sap-425",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing How to Validate a Cutover",
    scenario: "A cutover is complete and the team must decide, within a 30-minute window, whether to keep the new environment or roll back. Everything appears to be running and the dashboards show no errors.",
    question: "Which check best supports the decision?",
    options: [
      { id: 'A', text: "Confirm that real business transactions are completing end to end and matching expected results." },
      { id: 'B', text: "Confirm that every instance, database, and load balancer in the new environment is reporting healthy against its configured health checks." },
      { id: 'C', text: "Confirm that the application's error rate and latency metrics in the new environment match the baselines recorded before the cutover began." },
      { id: 'D', text: "Confirm that the migration tooling reported a successful cutover for every server included in the wave being migrated during this window." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Infrastructure can be entirely healthy while the business function is broken, so the decisive evidence is that real transactions complete and produce correct results, which is the only check that speaks to whether customers are being served. Health checks confirm processes are running rather than working correctly. Matching error and latency baselines is valuable and worth watching, but a silently wrong result produces neither errors nor latency. Tooling success reports that servers moved rather than that the application works.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-testing/welcome.html",
    tags: ["Cutover", "Validation", "Migration", "Business Outcomes"]
  }
];

export default AWS_SAP_QUESTIONS;
