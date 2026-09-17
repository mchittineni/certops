export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-426",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "What a Service Control Policy Actually Does",
    scenario: "A platform team attaches a service control policy allowing every Amazon S3 action to an organizational unit. A developer in that unit still cannot list any bucket.",
    question: "Why does the developer still lack access?",
    options: [
      { id: 'A', text: "A service control policy sets the maximum available permissions for an account, so an identity policy must still grant the action to the developer." },
      { id: 'B', text: "Service control policies take effect only after the management account enables the relevant policy type in every Region the developer works in." },
      { id: 'C', text: "Service control policies apply exclusively to roles, so a policy attached to an organizational unit never reaches an individual developer." },
      { id: 'D', text: "The policy must explicitly name the developer as a principal before any of the allowed Amazon S3 actions become usable anywhere inside the organizational unit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A service control policy is a permission filter rather than a grant: it bounds what an account may do and never itself confers access, so the developer still needs an identity-based policy allowing the S3 action. Policy types are enabled once for the organization, not per Region. Service control policies apply to every IAM principal in a member account, users as well as roles, and they never take a principal element at all.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["Organizations", "SCP", "IAM", "Permissions"]
  },
  {
    id: "aws-sap-427",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "What a Permission Set Defines",
    scenario: "A company uses AWS IAM Identity Center for workforce access and wants the same set of permissions available in several member accounts.",
    question: "What does a permission set define?",
    options: [
      { id: 'A', text: "A collection of policies that Identity Center provisions as an IAM role in each account where the set is assigned to a user or group." },
      { id: 'B', text: "A directory group that Identity Center uses to decide which member accounts appear on a user's portal after they authenticate." },
      { id: 'C', text: "A trust relationship that lets one member account's roles be assumed by principals from every other account that belongs to the same organization." },
      { id: 'D', text: "A billing construct that groups member accounts so permissions and cost allocation tags can be administered from one place." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A permission set is a template of policies that IAM Identity Center materializes as an IAM role in each account it is assigned to, which is why one definition delivers identical access everywhere. Group membership controls who receives an assignment, not what the assignment contains. Cross-account trust is a property of the role Identity Center creates rather than something an administrator writes into the set. Nothing about a permission set relates to billing or cost allocation.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html",
    tags: ["IAM Identity Center", "Permission Sets", "Federation", "Multi-Account"]
  },
  {
    id: "aws-sap-428",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Letting Other Accounts Use Existing Subnets",
    scenario: "A networking team wants other accounts in the organization to launch resources into subnets the team already owns, without copying the VPC into each account.",
    question: "Which capability supports this?",
    options: [
      { id: 'A', text: "AWS Resource Access Manager, which shares the subnets so other accounts launch into the owner's VPC." },
      { id: 'B', text: "VPC peering between each consumer account's VPC and the networking team's VPC, with routes to the relevant subnets on both sides." },
      { id: 'C', text: "AWS Transit Gateway attachments from each consumer account's VPC so instances launch locally and route to the networking team's range." },
      { id: 'D', text: "A service control policy permitting the consumer accounts to use the shared address space." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resource Access Manager shares the subnet itself, so consumer accounts create resources that live in the owner's VPC and inherit its routing and address plan, which is exactly the goal of not duplicating the VPC. Peering and Transit Gateway both connect separate VPCs rather than letting one account build inside another's subnet, so every consumer would still need its own VPC and address space. A service control policy can only restrict actions; it cannot make another account's subnet usable.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html",
    tags: ["RAM", "VPC Sharing", "Multi-Account", "Networking"]
  },
  {
    id: "aws-sap-429",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "How Consolidated Billing Changes Volume Pricing",
    scenario: "Six accounts in one organization each move about 20 TB of data out to the internet every month. Finance asks whether joining them under one payer changes the rate.",
    question: "What effect does consolidated billing have?",
    options: [
      { id: 'A', text: "Usage from all member accounts is aggregated for volume tiering, so the combined transfer reaches a cheaper tier than each account would alone." },
      { id: 'B', text: "Each member account keeps its own tier calculation, and the payer account simply receives one invoice covering all of the accounts." },
      { id: 'C', text: "The payer account's own monthly usage sets the volume tier that every other member account is then charged at for the remainder of the billing period." },
      { id: 'D', text: "Volume tiers apply per Region rather than per account, so the accounts must also consolidate into a single Region to benefit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consolidated billing combines the usage of every account in the organization before applying volume pricing tiers, so 120 TB of aggregate egress is priced at the tier that volume earns rather than as six separate 20 TB tiers. Treating consolidated billing as an invoice-only convenience misses that aggregation entirely. The payer's own usage has no special standing in the calculation. Tiering is computed on aggregated usage and is not reset by Region.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
    tags: ["Consolidated Billing", "Cost Optimization", "Organizations", "Data Transfer"]
  },
  {
    id: "aws-sap-430",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "What Control Tower Adds to Organizations",
    scenario: "A company already uses AWS Organizations with hand-built account baselines and is evaluating AWS Control Tower for its next wave of accounts.",
    question: "What does Control Tower add?",
    options: [
      { id: 'A', text: "A managed landing zone with an account factory and pre-packaged guardrails that it applies and then monitors on the organization's behalf." },
      { id: 'B', text: "A replacement for AWS Organizations that takes over consolidated billing and the organizational unit hierarchy from the existing setup." },
      { id: 'C', text: "A configuration policy engine that evaluates every resource in each enrolled account and then remediates the findings it raises without further tooling." },
      { id: 'D', text: "A deployment service that pushes CloudFormation templates to selected accounts and Regions on a schedule the company defines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Control Tower sits on top of Organizations and provides an opinionated landing zone: account provisioning through an account factory, plus guardrails it installs and continuously monitors. It does not replace Organizations, it consumes it. Evaluating and remediating resource configuration is what Config rules and Security Hub do, and Control Tower orchestrates them rather than being one. Scheduled template distribution across many accounts describes CloudFormation StackSets.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html",
    tags: ["Control Tower", "Landing Zone", "Guardrails", "Governance"]
  },
  {
    id: "aws-sap-431",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Scope of an Organization Trail",
    scenario: "A security engineer creates a CloudTrail organization trail in the management account and needs to state which activity it will capture.",
    question: "What does the organization trail record?",
    options: [
      { id: 'A', text: "Events from the management account and from every current and future member account, delivered to one bucket the organization controls." },
      { id: 'B', text: "Events from member accounts only, because the management account is expected to keep a separate trail for its own activity." },
      { id: 'C', text: "Events from the accounts that existed when the trail was created, with later accounts needing the trail enabled individually." },
      { id: 'D', text: "Events from every account in the organization, but only for the single Region in which the management account happened to create the trail." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An organization trail logs the management account together with all member accounts, and it enrolls accounts added later automatically, which is why it is the standard way to guarantee no account escapes auditing. It includes the management account rather than excluding it, and it needs no per-account step for new accounts. An organization trail can also apply to all Regions, and configuring it that way is the recommendation.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
    tags: ["CloudTrail", "Organizations", "Auditing", "Logging"]
  },
  {
    id: "aws-sap-432",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Two Halves of Cross-Account Access",
    scenario: "An engineer in the tooling account must assume a role in the data account. The role's trust policy already names the tooling account as trusted.",
    question: "What else is required?",
    options: [
      { id: 'A', text: "An identity-based policy in the tooling account that allows the engineer to call the assume-role action on that specific role." },
      { id: 'B', text: "A resource-based policy on each data account bucket the role reads, naming the engineer rather than the role as the principal." },
      { id: 'C', text: "A permissions boundary attached in the data account that raises the role's maximum permissions to include the tooling account." },
      { id: 'D', text: "An entry in the data account's service control policy allowing the tooling account's principals to assume roles across accounts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cross-account role assumption needs both halves: the role's trust policy must accept the caller, and the caller's own identity policy must permit the assume-role action against that role. A bucket policy governs what the role may read once assumed rather than whether the engineer can assume it, and naming a person there would not help. A permissions boundary can only lower effective permissions, never raise them. Service control policies restrict, so an allow entry grants nothing by itself.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html",
    tags: ["IAM", "Cross-Account", "STS", "Permissions"]
  },
  {
    id: "aws-sap-433",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "What a Tag Policy Enforces",
    scenario: "A governance team wants every EC2 instance to carry a CostCentre tag whose value comes from an approved list, and is reading about tag policies.",
    question: "What does a tag policy do?",
    options: [
      { id: 'A', text: "It constrains which tag keys and values may be used and, where enforcement is enabled, blocks tagging operations that do not comply." },
      { id: 'B', text: "It rejects the creation of any resource that lacks the tag, regardless of which service or resource type is involved." },
      { id: 'C', text: "It rewrites a non-compliant tag value to the nearest approved value when the resource is created in an enrolled account." },
      { id: 'D', text: "It applies the approved tag to resources that are already untagged during the next organization-wide compliance evaluation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A tag policy declares the permitted keys and values for an organization and reports compliance, and for the resource types where enforcement is turned on it also refuses non-compliant tagging requests. It governs tags rather than resource creation, so it will not stop an untagged instance from launching, which is a job for an IAM or service control policy condition on the tag key. Tag policies never modify a value, and they do not retroactively tag resources that already exist.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
    tags: ["Organizations", "Tag Policies", "Governance", "Cost Allocation"]
  },
  {
    id: "aws-sap-434",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "What a Delegated Administrator Can Do",
    scenario: "A company wants the security account rather than the management account to administer Amazon GuardDuty for the whole organization.",
    question: "What does registering a delegated administrator achieve?",
    options: [
      { id: 'A', text: "The security account configures the service for every member account without anyone using the management account." },
      { id: 'B', text: "The security account receives read-only findings while configuration stays in the management account." },
      { id: 'C', text: "The security account becomes the payer for the service's charges in every member account, separating security spend from other costs." },
      { id: 'D', text: "The security account is added to each member account's trust policies so that its roles can be assumed for incident response work." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Delegated administration moves day-to-day operation of an organization-wide service into a member account chosen for the purpose, which is why security tooling belongs in the security account and keeps the management account out of routine use. The delegated administrator gets full configuration authority rather than a read-only view. Charges still accrue to the account generating the usage, so delegation is not a billing arrangement, and it does not alter any trust policy.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html",
    tags: ["Organizations", "Delegated Administrator", "GuardDuty", "Security"]
  },
  {
    id: "aws-sap-435",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Ordering Guarantee of a Standard Queue",
    scenario: "A team puts an Amazon SQS standard queue in front of a worker that appends entries to an audit log, and asks what ordering the queue guarantees.",
    question: "What should the team expect?",
    options: [
      { id: 'A', text: "Best-effort ordering with occasional duplicates, so the worker must tolerate messages arriving out of sequence." },
      { id: 'B', text: "Strict first-in-first-out ordering, with duplicates suppressed for a five-minute window." },
      { id: 'C', text: "Strict ordering only while a single worker polls the queue, with ordering lost as soon as a second consumer starts." },
      { id: 'D', text: "Ordering determined by the message group identifier supplied by the producer, with each group delivered in sequence." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A standard queue trades ordering for throughput: it delivers at least once and makes no sequence promise, so anything appending to an ordered log must either tolerate reordering or move to a FIFO queue. Deduplication windows and message group identifiers are both FIFO queue features and are unavailable here. The number of consumers polling makes no difference, because a standard queue is never an ordered queue.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html",
    tags: ["SQS", "Messaging", "Ordering", "Decoupling"]
  },
  {
    id: "aws-sap-436",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Durability of S3 Standard",
    scenario: "An architect documenting a new data platform must state the durability of objects stored in the S3 Standard storage class.",
    question: "What figure should the document give?",
    options: [
      { id: 'A', text: "99.999999999 percent durability, achieved by storing each object redundantly across a minimum of three Availability Zones." },
      { id: 'B', text: "99.99 percent durability, with the additional nines available only once cross-Region replication is configured." },
      { id: 'C', text: "99.9 percent durability for a single Availability Zone, rising once a lifecycle rule moves the objects to an archive class." },
      { id: 'D', text: "99.999999999 percent availability, with durability stated separately for each storage class in the service level agreement." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "S3 Standard is designed for eleven nines of durability, which it achieves by writing each object redundantly across at least three Availability Zones in the Region. Replication improves resilience to a Region-level event but is not what produces the durability figure. Single-zone storage describes S3 One Zone-Infrequent Access, and archive classes do not raise durability above Standard. Availability and durability are separate design targets, and Standard's availability target is 99.99 percent.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/DataDurability.html",
    tags: ["S3", "Durability", "Storage", "Resilience"]
  },
  {
    id: "aws-sap-437",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "What Makes a Good Partition Key",
    scenario: "A DynamoDB table will hold ten million orders. The team is choosing between the order identifier and the order's status as the partition key.",
    question: "Which choice suits the table and why?",
    options: [
      { id: 'A', text: "The order identifier, because its high cardinality spreads requests evenly across partitions instead of concentrating them on a few values." },
      { id: 'B', text: "The order status, because queries filter by status and a partition key must match the attribute the application queries on." },
      { id: 'C', text: "The order status, because a small number of partition key values lets DynamoDB keep related items in one partition for faster scans." },
      { id: 'D', text: "Either the identifier or the status, because adaptive capacity redistributes throughput and removes the need to consider key distribution." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A partition key should have many distinct values so that traffic distributes across partitions; an order identifier does and a status field with a handful of values does not, which makes status a recipe for hot partitions. Choosing a key to match a filter predicate is the wrong criterion, because secondary indexes exist to serve query patterns. Concentrating items in one partition caps throughput rather than accelerating access, and adaptive capacity smooths uneven traffic without rescuing a low-cardinality key.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html",
    tags: ["DynamoDB", "Partition Key", "Data Modeling", "Performance"]
  },
  {
    id: "aws-sap-438",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Layer at Which Each Load Balancer Operates",
    scenario: "An architect is writing a design note and needs to describe the difference between an Application Load Balancer and a Network Load Balancer.",
    question: "How do the two differ?",
    options: [
      { id: 'A', text: "The Application Load Balancer routes on HTTP content, while the Network Load Balancer forwards TCP and UDP flows." },
      { id: 'B', text: "The Application Load Balancer runs inside one Availability Zone, while the Network Load Balancer spans every zone in the Region." },
      { id: 'C', text: "The Application Load Balancer supports TLS termination, while the Network Load Balancer cannot." },
      { id: 'D', text: "The Application Load Balancer scales automatically, while the Network Load Balancer needs its capacity units provisioned in advance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The real distinction is the layer each one understands: an Application Load Balancer parses HTTP and can route on host, path, and header, while a Network Load Balancer operates on TCP and UDP connections and preserves the client address. Both register targets across multiple Availability Zones rather than living in one. Both are able to terminate TLS. Neither requires capacity to be provisioned by hand in normal operation.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
    tags: ["ELB", "ALB", "NLB", "Networking"]
  },
  {
    id: "aws-sap-439",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "How Reserved Concurrency Behaves",
    scenario: "A Lambda function shares an account with several others and must never consume more than 50 concurrent executions.",
    question: "What does setting reserved concurrency on that function do?",
    options: [
      { id: 'A', text: "It caps the function at 50 concurrent executions and guarantees those 50 are available to it, deducting them from the account pool." },
      { id: 'B', text: "It keeps 50 execution environments initialised so the function avoids cold starts, without changing its concurrency ceiling." },
      { id: 'C', text: "It raises the account's concurrency limit by 50 so this function's traffic cannot affect the other functions in the account." },
      { id: 'D', text: "It queues invocations beyond 50 and retries them for up to six hours before moving them to a dead-letter destination." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reserved concurrency is both a ceiling and a floor: the function can never exceed the reserved number, and that number is set aside for it out of the account's pool so no other function can consume it. Keeping environments initialised is provisioned concurrency, a different setting aimed at cold starts. Reserving partitions the account limit rather than increasing it. Asynchronous invocations do queue and retry, but that behaviour is independent of this setting.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html",
    tags: ["Lambda", "Concurrency", "Serverless", "Quotas"]
  },
  {
    id: "aws-sap-440",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing a Workflow Type for High-Volume Events",
    scenario: "A workflow will run about two million times a day, each execution finishing in well under a second, and the team wants to use Step Functions.",
    question: "Which workflow type fits?",
    options: [
      { id: 'A', text: "Express workflows, which are priced and designed for very high-volume short-lived executions." },
      { id: 'B', text: "Standard workflows, because they provide exactly-once execution semantics and a full durable history for every run." },
      { id: 'C', text: "Standard workflows, because Express workflows cap execution duration at five minutes and this workload runs continuously." },
      { id: 'D', text: "Either type, because the difference between them is only the console view and the format of the execution history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Express workflows exist for exactly this shape of work, very high event rates with sub-second durations, and their pricing model reflects it, whereas Standard pricing per state transition would be far more expensive at two million runs a day. Standard's exactly-once semantics and durable history are genuine advantages that this workload does not need. Express does carry a five-minute limit, which sub-second executions never approach. The two types differ in guarantees, durability, and price rather than presentation.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html",
    tags: ["Step Functions", "Serverless", "Orchestration", "Cost Optimization"]
  },
  {
    id: "aws-sap-441",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "How Event Bus Rules Differ From Topic Subscriptions",
    scenario: "A team currently fans out notifications with an Amazon SNS topic and is considering an EventBridge event bus instead.",
    question: "What does the event bus offer that the topic does not?",
    options: [
      { id: 'A', text: "Rules that match on the event body and route only matching events to each target." },
      { id: 'B', text: "Fan-out to many subscribers at once, so one published message reaches every consumer that has registered interest." },
      { id: 'C', text: "Guaranteed ordering of delivered events, which a topic cannot offer once more than one subscriber is attached." },
      { id: 'D', text: "Encryption at rest with a customer managed key, which a topic leaves to each subscriber to arrange for itself." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Content-based routing is the substantive difference: an event bus rule inspects the payload and delivers only what matches its pattern, so each consumer receives a relevant subset instead of everything. Fan-out to multiple subscribers is what a topic already does well. Neither service guarantees ordering across subscribers, and a FIFO topic's ordering applies only within a message group. Both support encryption at rest with a customer managed key.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html",
    tags: ["EventBridge", "SNS", "Event-Driven", "Integration"]
  },
  {
    id: "aws-sap-442",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "What Detailed Monitoring Changes",
    scenario: "An operations team finds that CloudWatch shows EC2 CPU utilisation only every five minutes and wants finer resolution for its scaling decisions.",
    question: "What does enabling detailed monitoring change?",
    options: [
      { id: 'A', text: "Instance metrics are delivered every minute rather than every five minutes, for an additional charge per instance." },
      { id: 'B', text: "Metrics gain a one-second resolution rather than being aggregated into minutes, so alarms can evaluate very short periods." },
      { id: 'C', text: "The CloudWatch agent is installed on the instance so that memory and disk metrics appear alongside CPU utilisation." },
      { id: 'D', text: "Metric retention is extended from fifteen months to five years so that longer-term capacity trends can be plotted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Detailed monitoring raises the publication frequency of EC2 instance metrics from five-minute to one-minute intervals and is billed per instance. One-second granularity comes from publishing custom high-resolution metrics, not from this setting. Memory and disk utilisation are guest-level metrics that require the CloudWatch agent, which detailed monitoring does not install. Retention follows from a metric's resolution and is unaffected by the change.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html",
    tags: ["CloudWatch", "Monitoring", "EC2", "Observability"]
  },
  {
    id: "aws-sap-443",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Where Right-Sizing Recommendations Come From",
    scenario: "A finance partner asks where the instance right-sizing advice in a cost review came from and what data backs each suggestion.",
    question: "Which service produced them?",
    options: [
      { id: 'A', text: "AWS Compute Optimizer, which analyses CloudWatch utilisation history to suggest a machine type." },
      { id: 'B', text: "AWS Budgets, which compares actual spend against a threshold and reports the resources contributing most to it." },
      { id: 'C', text: "AWS Cost Explorer, which is the only place where instance sizing advice is generated for the organization." },
      { id: 'D', text: "AWS Config, which records configuration history and evaluates instances against a desired-size rule you author." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Optimizer produces the advice by analysing CloudWatch metric history per resource and matching observed utilisation to a better-fitting instance family and size. Budgets alerts on spend against a threshold and offers no sizing opinion. Cost Explorer does display rightsizing recommendations, but it surfaces Compute Optimizer's analysis rather than generating it. Config tracks configuration state and compliance rather than utilisation, so it has no basis for a sizing judgement.",
    referenceUrl: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
    tags: ["Compute Optimizer", "Right-Sizing", "Cost Optimization", "CloudWatch"]
  },
  {
    id: "aws-sap-444",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "What Trusted Advisor Reports",
    scenario: "A new account owner wants a periodic summary of idle resources, missing redundancy, and service quota headroom across the account.",
    question: "Which service gives that summary?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor, whose checks cover cost, performance, resilience, security, and service limits for the account." },
      { id: 'B', text: "AWS Health Dashboard, which reports events affecting the account's resources and planned maintenance from AWS." },
      { id: 'C', text: "AWS Well-Architected Tool, which records answers to a review questionnaire and lists the risks that those answers reveal." },
      { id: 'D', text: "Amazon Inspector, which scans workloads continuously and reports software vulnerabilities and unintended exposure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trusted Advisor runs a standing set of checks across five pillars and is the service that reports idle resources, single points of failure, and quota utilisation together in one place. The Health Dashboard communicates AWS-side events and maintenance rather than the account's own configuration quality. The Well-Architected Tool derives risks from a review a human fills in, so it inspects no resources. Inspector's scope is vulnerabilities and exposure, not cost or quotas.",
    referenceUrl: "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html",
    tags: ["Trusted Advisor", "Cost Optimization", "Quotas", "Operations"]
  },
  {
    id: "aws-sap-445",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Minimum Storage Duration in a Lifecycle Rule",
    scenario: "A lifecycle rule moves objects to S3 Glacier Flexible Retrieval after 7 days, and the bill shows more storage cost than expected for short-lived objects.",
    question: "What explains the charge?",
    options: [
      { id: 'A', text: "The class bills a 90-day minimum storage duration, so objects deleted sooner still incur the remainder." },
      { id: 'B', text: "Transition requests are billed per thousand objects, and this rule's request charges exceed its storage saving entirely." },
      { id: 'C', text: "Objects under 128 KB are not transitioned by a lifecycle rule, so they stay in Standard and continue to be billed there." },
      { id: 'D', text: "Glacier Flexible Retrieval bills for retrieval rather than storage, so the cost appears whenever an object is read back." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Glacier Flexible Retrieval carries a 90-day minimum billable storage duration, so an object deleted after 20 days is still charged as though it had been stored for 90, which makes a 7-day transition actively more expensive for short-lived data. Per-request transition charges and the 128 KB floor are both real behaviours worth knowing, but neither produces a storage line item that outlives the object. Retrieval fees are charged in addition to storage rather than instead of it.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html",
    tags: ["S3", "Lifecycle", "Glacier", "Cost Optimization"]
  },
  {
    id: "aws-sap-446",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Flexibility Difference Between Commitment Types",
    scenario: "A team holds a three-year commitment and wants to move a workload from one instance family to another without losing the discount.",
    question: "Which commitment allows that?",
    options: [
      { id: 'A', text: "A Compute Savings Plan, whose discount follows the spend regardless of instance family, size, Region, or compute service." },
      { id: 'B', text: "A Standard Reserved Instance, which can be modified to a different family as long as the term length is unchanged." },
      { id: 'C', text: "An EC2 Instance Savings Plan, which fixes the discount to one family but allows any Region within the commitment." },
      { id: 'D', text: "A Convertible Reserved Instance, which can be exchanged only for a commitment with a strictly shorter remaining term." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Compute Savings Plan commits to an hourly spend rather than to any particular resource, so moving between instance families, sizes, and Regions, or even onto Fargate and Lambda, keeps the discount intact. A Standard Reserved Instance can be resized within a family but never moved to a different one. An EC2 Instance Savings Plan is tied to both a family and a Region, making it narrower than this requirement. A Convertible Reserved Instance can be exchanged, but only for equal or greater value and an equal or longer term.",
    referenceUrl: "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
    tags: ["Savings Plans", "Reserved Instances", "Cost Optimization", "Commitment"]
  },
  {
    id: "aws-sap-447",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "What Change Data Capture Adds to a Full Load",
    scenario: "A database migration runs a DMS full load that takes eleven hours, during which the source continues to accept writes from users.",
    question: "What does enabling change data capture add?",
    options: [
      { id: 'A', text: "It replays the changes made during and after the full load, so the target converges with the source before cutover." },
      { id: 'B', text: "It restarts the full load from the last checkpoint when a task fails, avoiding a complete reload of every table." },
      { id: 'C', text: "It validates the target row by row against the source and reports any rows that do not match after the load." },
      { id: 'D', text: "It compresses the change stream so the full load finishes inside the maintenance window the source allows." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Change data capture reads the source's transaction log and applies everything that happened from the moment the full load began, which is the only way a target stays current against a source that never stopped taking writes. Resuming a failed task from a checkpoint is a separate reliability feature. Row-level comparison is DMS data validation, which runs alongside replication without carrying changes across. Nothing in change data capture compresses or shortens the full load itself.",
    referenceUrl: "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html",
    tags: ["DMS", "CDC", "Migration", "Cutover"]
  },
  {
    id: "aws-sap-448",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Where Migration Status Is Tracked Across Tools",
    scenario: "A programme uses Application Migration Service for servers and Database Migration Service for databases, and the sponsor wants one view of progress.",
    question: "Which service provides it?",
    options: [
      { id: 'A', text: "AWS Migration Hub, which aggregates status from the migration tools into a single portfolio view." },
      { id: 'B', text: "AWS Application Discovery Service, which inventories the source estate and records dependencies between servers." },
      { id: 'C', text: "AWS Systems Manager, which maintains an inventory of managed nodes and reports on their patch and compliance state." },
      { id: 'D', text: "AWS Resource Groups, which collects resources by tag so each migration wave can be given its own view." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Migration Hub is the aggregation point: the migration services report into it, which gives one place to see each application's status across tools. Application Discovery Service feeds Migration Hub with inventory and dependency data but tracks no migration progress of its own. Systems Manager inventories running nodes for operational purposes rather than for a migration programme. Resource Groups organises resources by tag and has no notion of migration status at all.",
    referenceUrl: "https://docs.aws.amazon.com/migrationhub/latest/ug/whatis-migrationhub.html",
    tags: ["Migration Hub", "Migration", "Portfolio", "Tracking"]
  },
  {
    id: "aws-sap-449",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "When Physical Transfer Beats the Network",
    scenario: "An archive of 400 TB must reach AWS within three weeks. The site has a 500 Mbps internet circuit that is also carrying production traffic.",
    question: "Which approach meets the deadline?",
    options: [
      { id: 'A', text: "Ship the data on AWS Snowball Edge devices, because 400 TB over a shared 500 Mbps circuit would take several months." },
      { id: 'B', text: "Copy the archive with the S3 CLI using multipart uploads and parallel threads to saturate the 500 Mbps circuit." },
      { id: 'C', text: "Order a Direct Connect connection and move the 400 TB over it, because dedicated bandwidth removes the contention." },
      { id: 'D', text: "Use S3 Transfer Acceleration so the upload travels over the AWS edge network rather than the public internet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "At 500 Mbps shared with production traffic the effective rate is well under 50 TB a week, so 400 TB cannot arrive inside three weeks over the network and physical transfer is the only option that meets the date. Tuning the client with multipart uploads and parallelism cannot exceed the circuit's capacity. A Direct Connect circuit takes weeks to provision, so it misses the deadline even though the bandwidth would help afterwards. Transfer Acceleration improves long-distance throughput but remains bounded by the site's own link.",
    referenceUrl: "https://docs.aws.amazon.com/snowball/latest/developer-guide/whatisedge.html",
    tags: ["Snowball Edge", "Data Transfer", "Migration", "Bandwidth"]
  },
  {
    id: "aws-sap-450",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "How Continuous Replication Prepares a Cutover",
    scenario: "A team plans to rehost 80 Linux servers with AWS Application Migration Service and wants to understand what happens in the weeks before cutover day.",
    question: "What does the replication phase provide?",
    options: [
      { id: 'A', text: "Block-level copies kept continuously current in a staging subnet, so cutover launches from recent data." },
      { id: 'B', text: "A converted machine image per server, rebuilt each night from the source and stored in the target account." },
      { id: 'C', text: "An agentless inventory of each server's disks and dependencies, used to size the target instances correctly." },
      { id: 'D', text: "A running copy of each server in the target subnet, serving traffic alongside the source during cutover testing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Application Migration Service installs an agent that replicates disks block by block into a staging area and keeps replicating, so at cutover the target launches from data that is seconds behind the source. It does not rebuild machine images on a nightly batch, because replication is continuous. Collecting disk and dependency inventory is Application Discovery Service's role. Test instances are launched deliberately from the staged data and never serve production traffic beside the source.",
    referenceUrl: "https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html",
    tags: ["Application Migration Service", "Rehost", "Replication", "Cutover"]
  }
];

export default AWS_SAP_QUESTIONS;
