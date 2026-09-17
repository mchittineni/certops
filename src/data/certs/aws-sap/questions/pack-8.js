export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-176",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Controlling Which Services Teams May Use",
    scenario: "A governance board approves AWS services individually. Teams have begun using services that have not been reviewed, and the board wants unapproved services unavailable in workload accounts while approved ones remain usable without a ticket.",
    question: "Which control expresses the approved list?",
    options: [
      { id: 'A', text: "A service control policy attached to the workload organizational unit that allows only the approved service namespaces and denies everything else, leaving approved services usable without a ticket." },
      { id: 'B', text: "An IAM permissions boundary applied to every role in the workload accounts, listing the approved service namespaces as the maximum permitted set of actions." },
      { id: 'C', text: "An AWS Config rule that evaluates the resources in each workload account and flags any resource belonging to a service the governance board has not approved." },
      { id: 'D', text: "An AWS Budgets action that applies a restrictive policy to the account whenever spend appears on a service outside the list the board has approved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A service control policy is the organization-level permission ceiling, so an allow-list of approved namespaces attached to the workload organizational unit makes unapproved services genuinely unavailable while approved ones need no further permission. A permissions boundary expresses a similar cap but must be attached to every role individually and does not constrain the root user. An AWS Config rule reports use that has already happened. A Budgets action triggers on spend, so an unapproved service is only caught once it has cost money.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_strategies.html",
    tags: ["SCP", "Governance", "Organizations", "Allow-List"]
  },
  {
    id: "aws-sap-177",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Giving One Team Access to Another Team's Queue",
    scenario: "A producer account owns an Amazon SQS queue. A consumer account's Lambda function must receive messages from it. The security team wants the permission expressed once and visible to whoever reviews the queue.",
    question: "Which permission model should be used?",
    options: [
      { id: 'A', text: "A resource policy on the queue naming the consumer account's function role as principal." },
      { id: 'B', text: "An identity policy in the consumer account granting the function's role the receive and delete actions on the queue's Amazon Resource Name in the producer account." },
      { id: 'C', text: "A cross-account IAM role in the producer account that the consumer assumes." },
      { id: 'D', text: "An Amazon EventBridge rule in the producer account forwarding each message to an event bus in the consumer account for the function to process." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cross-account access to a queue requires a resource policy on the queue, because the producer account must grant access to its own resource, and expressing it there makes the grant visible to anyone reviewing the queue. An identity policy alone is insufficient for cross-account access, since both sides must allow it. Assuming a role works but adds a call before every receive and hides the grant inside a role's trust policy. Forwarding through EventBridge changes the integration rather than granting access to the existing queue.",
    referenceUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-examples-of-sqs-policies.html",
    tags: ["SQS", "Resource Policy", "Cross-Account", "IAM"]
  },
  {
    id: "aws-sap-178",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Choosing Where Log Retention Is Enforced",
    scenario: "An organization requires CloudWatch log groups to retain data for at least 90 days in every account. Teams create log groups constantly, often through service defaults that never expire, and nobody adjusts them afterwards.",
    question: "Which approach applies the retention consistently?",
    options: [
      { id: 'A', text: "Deploy an EventBridge rule and Lambda function through StackSets that sets retention on each newly created log group." },
      { id: 'B', text: "Deploy an AWS Config rule through a conformance pack that marks any log group without the required retention period as non-compliant for the teams to fix." },
      { id: 'C', text: "A service control policy denying logs:CreateLogGroup unless retention is set." },
      { id: 'D', text: "Document the requirement in the platform team's onboarding guide and review log group retention settings during the quarterly compliance audit of each account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Log group creation emits a CloudTrail event, so an EventBridge rule invoking a small function that applies the retention policy handles every group including those created by service defaults, and StackSets puts that automation in every account. A Config rule reports the gap but leaves the fix to teams. A service control policy cannot work here because CreateLogGroup does not accept a retention parameter, so the deny would block all log group creation. Documentation and quarterly audits leave months of non-compliant groups.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html",
    tags: ["CloudWatch Logs", "Retention", "EventBridge", "Automation"]
  },
  {
    id: "aws-sap-179",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Sharing a Transit Gateway With Another Organization",
    scenario: "Two companies with separate AWS organizations are forming a joint venture and need VPCs in both organizations to reach a shared services VPC. Neither will merge organizations or grant the other administrative access.",
    question: "How can the shared connectivity be established?",
    options: [
      { id: 'A', text: "Share the Transit Gateway with the specific external account through AWS Resource Access Manager and have that account create and own its attachment, without granting administrative access." },
      { id: 'B', text: "Create a Transit Gateway peering attachment between a Transit Gateway in each organization and propagate the shared services routes across the peering." },
      { id: 'C', text: "Create VPC peering connections between the shared services VPC and each VPC in the other organization, adding routes on both sides of each connection." },
      { id: 'D', text: "Invite the other organization's accounts into the first organization so that Resource Access Manager sharing within the organization becomes available to both." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resource Access Manager shares a Transit Gateway with individual AWS accounts regardless of which organization they belong to, and the receiving account creates and owns its attachment, so neither side needs administrative access to the other. Transit Gateway peering is a legitimate alternative when each side runs its own gateway, but it requires both organizations to build and maintain a gateway rather than sharing one. VPC peering is non-transitive and would need a connection per VPC pair. Moving accounts between organizations changes billing and governance ownership, which both parties refuse.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html",
    tags: ["Transit Gateway", "Resource Access Manager", "Cross-Organization", "Networking"]
  },
  {
    id: "aws-sap-180",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Protecting the Organization's Own Backups",
    scenario: "A ransomware tabletop exercise asks what happens if an attacker gains administrative access to the production account. The team finds backups live in that same account and could be deleted by the same credentials.",
    question: "Which backup design survives that scenario?",
    options: [
      { id: 'A', text: "Copy recovery points to a vault in a separate account with AWS Backup Vault Lock in compliance mode." },
      { id: 'B', text: "Enable AWS Backup Vault Lock in governance mode on the production account's vault so that deleting a recovery point requires an explicitly permitted principal." },
      { id: 'C', text: "Increase the retention period on the production account's backup plan so that a longer history of recovery points is available after an incident is discovered." },
      { id: 'D', text: "Replicate the production account's backup vault into a second Region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The threat is a compromised credential in the production account, so the backups must live outside that account's blast radius, and compliance mode vault lock means the retention cannot be shortened or the recovery points deleted even by a root user. Governance mode allows a sufficiently privileged principal to remove the lock, which is precisely what an attacker with administrative access would hold. Longer retention in the same account is still deletable. A second Region in the same account protects against a regional event rather than a credential compromise.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html",
    tags: ["AWS Backup", "Vault Lock", "Ransomware", "Resilience"]
  },
  {
    id: "aws-sap-181",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Reporting on Resources Across Regions and Accounts",
    scenario: "An architect must answer which accounts run a particular deprecated EC2 instance family, across every Region and all 90 accounts, without logging into each account in turn.",
    question: "Which capability answers the question?",
    options: [
      { id: 'A', text: "An AWS Config advanced query run against an organization aggregator." },
      { id: 'B', text: "AWS Resource Explorer with a multi-account view configured in the management account so that resources across the organization can be searched by type and Region." },
      { id: 'C', text: "The AWS Systems Manager inventory dashboard, aggregating the managed node data collected from every account into a single searchable view for the architect." },
      { id: 'D', text: "Amazon EC2 Global View in the console, which lists the instances running in every Region for the account the architect is currently signed in to." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An organization aggregator collects AWS Config data from every account and Region into one place, and advanced queries run SQL over that data, so a single query returns the instance family across the whole estate. Resource Explorer is genuinely useful for finding resources but is scoped to the account it runs in rather than aggregating an organization. Systems Manager inventory only covers nodes with the agent installed and registered. EC2 Global View spans Regions but only for the current account.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/querying-AWS-resources.html",
    tags: ["AWS Config", "Aggregator", "Inventory", "Multi-Account"]
  },
  {
    id: "aws-sap-182",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Guaranteeing Order Across a Partitioned Stream",
    scenario: "An architect is designing an inventory service. Updates for the same product must be applied in order, different products may be processed in parallel, and the system must sustain 50,000 updates per second with consumers scaling independently.",
    question: "Which streaming design satisfies ordering and throughput?",
    options: [
      { id: 'A', text: "A Kinesis data stream partitioned on the product id, with one consumer per shard processing records in sequence." },
      { id: 'B', text: "An Amazon SQS standard queue with a consumer fleet that sorts each received batch by the update timestamp before applying the changes to the inventory records." },
      { id: 'C', text: "An Amazon SNS topic fanned out to a fleet of Lambda functions, each applying the updates it receives to the inventory records as the notifications arrive." },
      { id: 'D', text: "An Amazon MSK topic with a single partition so every update is consumed in order." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kinesis guarantees ordering within a shard, so hashing on the product id keeps each product's updates in sequence while different products spread across shards for parallelism, and shard count scales to the required throughput. A standard queue offers no ordering and sorting a batch cannot reorder across batches. An SNS fan-out to functions gives no ordering guarantee at all. A single-partition topic does preserve global order but caps throughput at what one partition and one consumer can handle, far below 50,000 per second.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html",
    tags: ["Kinesis", "Ordering", "Partitioning", "Streaming"]
  },
  {
    id: "aws-sap-183",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Where to Terminate TLS",
    scenario: "A compliance rule requires that traffic be encrypted on every network hop, including between the load balancer and the application instances inside the VPC. The team also needs the load balancer to inspect HTTP headers for routing.",
    question: "Which configuration satisfies both?",
    options: [
      { id: 'A', text: "Terminate TLS on the Application Load Balancer and re-encrypt to the targets with HTTPS on the target group." },
      { id: 'B', text: "Use a Network Load Balancer with a TCP listener so the encrypted connection passes through untouched and is terminated on the application instances themselves." },
      { id: 'C', text: "Terminate TLS on the Application Load Balancer and place the targets in a dedicated subnet whose traffic is isolated by security groups and network access control lists." },
      { id: 'D', text: "Terminate TLS on Amazon CloudFront and forward to the origin over HTTP." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An Application Load Balancer must terminate TLS to read headers for routing, and configuring the target group protocol as HTTPS re-encrypts the connection to the instances, so every hop is encrypted while routing still works. A Network Load Balancer passing TCP through keeps encryption end to end but cannot inspect headers. Subnet isolation and security groups restrict who can reach the targets without encrypting the hop. Forwarding to the origin over HTTP leaves that hop in plaintext, which the rule forbids.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html",
    tags: ["Application Load Balancer", "TLS", "Encryption in Transit", "Compliance"]
  },
  {
    id: "aws-sap-184",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Scaling a Write-Heavy Relational Workload",
    scenario: "A relational workload receives 60,000 writes per second spread across millions of customer records. Reads are simple key lookups, the team already uses the largest Aurora writer available, and the writer is saturated.",
    question: "Which change addresses the write ceiling?",
    options: [
      { id: 'A', text: "Shard the data across several Aurora clusters by customer id so writes are spread across independent writers." },
      { id: 'B', text: "Add further Aurora reader instances and route the key lookups to them." },
      { id: 'C', text: "Enable Aurora Serverless v2 on the cluster so the writer scales its capacity automatically as the sustained write throughput continues to increase over time." },
      { id: 'D', text: "Increase the cluster's provisioned storage throughput so the writer's commits are acknowledged faster and the instance is able to accept a higher write rate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Aurora has one writer per cluster, so once the largest instance is saturated the only way to scale writes further is horizontally, and sharding by customer id gives independent writers that scale linearly with simple key-based access. Adding readers relieves read load, which the scenario says is already simple lookups rather than the bottleneck. Serverless v2 scales within the same instance ceiling and cannot exceed it. Aurora storage is a managed distributed layer whose throughput is not separately provisioned, and the limit described is the writer instance.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html",
    tags: ["Aurora", "Sharding", "Write Scaling", "Databases"]
  },
  {
    id: "aws-sap-185",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing a Tenant Onboarding Pipeline",
    scenario: "A SaaS platform onboards a new enterprise tenant roughly weekly. Each needs an isolated database schema, a dedicated encryption key, DNS entries, and monitoring. The process is currently a checklist an engineer works through over two days.",
    question: "Which approach makes onboarding repeatable and auditable?",
    options: [
      { id: 'A', text: "Model the tenant as infrastructure as code and provision it through a Step Functions workflow triggered by an onboarding request, recorded in version control and execution history." },
      { id: 'B', text: "Write a runbook in Systems Manager Automation that the onboarding engineer starts, with an approval step before each of the resources for the new tenant is created." },
      { id: 'C', text: "Keep the existing checklist but record each completed step in a ticketing system so that the onboarding history for every tenant is retained for later audit." },
      { id: 'D', text: "Pre-create a pool of tenant environments ahead of demand so that onboarding becomes an assignment of an existing environment rather than a provisioning action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Expressing the tenant as code and provisioning through an orchestrated workflow makes every onboarding identical, reviewable in version control, and recorded in execution history, which is both repeatable and auditable. An Automation runbook with approvals is a genuine improvement and would work, but manual approval before each resource keeps a person in the loop for what should be deterministic. Recording checklist steps in tickets documents the variability rather than removing it. A pre-created pool reduces lead time but the environments still have to be built by the same process and it wastes resources.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-onboarding.html",
    tags: ["SaaS", "Tenant Onboarding", "Step Functions", "Automation"]
  },
  {
    id: "aws-sap-186",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Selecting a Caching Layer for Session Lookups",
    scenario: "A service performs a session lookup on every request at 300,000 requests per second, needs sub-millisecond reads, and must survive a node failure without losing sessions or requiring clients to re-authenticate.",
    question: "Which data store fits these requirements?",
    options: [
      { id: 'A', text: "ElastiCache for Redis in cluster mode with replicas and Multi-AZ automatic failover." },
      { id: 'B', text: "Amazon DynamoDB with DynamoDB Accelerator in front of the table so that the session lookups are served from the cluster's in-memory cache rather than the table." },
      { id: 'C', text: "Amazon MemoryDB for Redis, which persists every write to a transaction log." },
      { id: 'D', text: "Amazon ElastiCache for Memcached with several nodes so that the session data is spread across the cluster and read with very low latency by the service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Redis in cluster mode shards across nodes for the required throughput, replicas hold copies so a node failure does not lose sessions, and Multi-AZ failover promotes automatically, which meets latency, scale, and durability for session data. MemoryDB offers stronger durability and is a defensible choice, but its write path is slower and the extra guarantee exceeds what session state needs. DynamoDB with DAX adds a second system for what one cache handles. Memcached has no replication, so losing a node loses those sessions and forces re-authentication.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Replication.Redis-RedisCluster.html",
    tags: ["ElastiCache", "Redis", "Session State", "High Availability"]
  },
  {
    id: "aws-sap-187",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing a Pattern for Scheduled Fan-Out",
    scenario: "Every hour a process must start the same independent task for each of 5,000 customers. Tasks take seconds, are independent, and a failure for one customer must not prevent the others from running.",
    question: "Which design handles the fan-out cleanly?",
    options: [
      { id: 'A', text: "An EventBridge schedule starting a Step Functions distributed map that runs a task per customer." },
      { id: 'B', text: "An EventBridge schedule invoking a single Lambda function that iterates over the 5,000 customers in turn and performs each customer's task within the invocation." },
      { id: 'C', text: "An EventBridge schedule invoking a Lambda function that writes one message per customer onto a queue, with a second function consuming the queue to run the tasks." },
      { id: 'D', text: "An Amazon EC2 instance running a cron job that loops over the customer list." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A distributed map iterates a large collection with high parallelism, isolates failures per item, retries individual items, and reports which ones failed, so 5,000 independent tasks are a direct fit and nothing needs building. A single function iterating serially risks the fifteen-minute timeout and loses progress on failure. The queue-based fan-out works well and is a reasonable alternative, but it requires building and operating two functions plus a queue for what the map state expresses natively. A cron job on an instance reintroduces a server and processes the list serially.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/use-dist-map-orchestrate-large-scale-parallel-workloads.html",
    tags: ["Step Functions", "Distributed Map", "EventBridge Scheduler", "Serverless"]
  },
  {
    id: "aws-sap-188",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Preventing Data Exfiltration Through Endpoints",
    scenario: "A regulated workload runs in private subnets with S3 gateway endpoints. Security is concerned that a compromised instance could use the endpoint to copy data into an S3 bucket owned by an attacker's AWS account.",
    question: "Which control prevents that path?",
    options: [
      { id: 'A', text: "Add an endpoint policy allowing access only to the organization's own buckets, enforced with aws:PrincipalOrgID and aws:ResourceOrgID conditions on every request through the endpoint." },
      { id: 'B', text: "Add a bucket policy on every bucket in the organization denying access unless the request arrives through one of the approved VPC endpoints in the account." },
      { id: 'C', text: "Remove the S3 gateway endpoint and route the traffic through a NAT gateway so outbound access can be filtered by the network firewall on the egress path." },
      { id: 'D', text: "Enable Amazon GuardDuty S3 protection on the account so that unusual data access patterns towards external buckets are detected and reported to the security team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An endpoint policy is evaluated for every request leaving through that endpoint, so restricting it to resources within the organization stops a compromised instance writing to any bucket outside it, which is the exfiltration path in question. Bucket policies protect the organization's own buckets and say nothing about a request to an attacker's bucket. Routing through a NAT gateway and firewall can inspect traffic but adds cost and complexity while TLS limits what can be seen. GuardDuty detects the activity after the data has moved.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
    tags: ["VPC Endpoints", "Data Perimeter", "Exfiltration", "Security"]
  },
  {
    id: "aws-sap-189",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "An API That Degrades Only for Some Customers",
    scenario: "A multi-tenant API shows normal aggregate latency, but three large customers report timeouts. The team's dashboards average across all tenants, so the problem is invisible in the metrics they currently watch.",
    question: "Which observability change surfaces the problem?",
    options: [
      { id: 'A', text: "Emit metrics with a tenant dimension using the CloudWatch embedded metric format and alarm on per-tenant percentiles." },
      { id: 'B', text: "Change the existing dashboards to display the p99 latency instead of the average so that the slowest requests across the whole tenant population become visible." },
      { id: 'C', text: "Enable AWS X-Ray tracing on the API so that individual slow requests can be examined in detail and the services contributing to their latency identified." },
      { id: 'D', text: "Enable CloudWatch Contributor Insights on the API access logs and rank tenants." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The problem is that aggregation hides a per-tenant signal, so the fix is to carry tenant identity into the metrics themselves, which the embedded metric format does cheaply from log lines, allowing alarms on each tenant's own percentile. Switching to p99 across all tenants helps but three customers out of many may still not move the overall percentile. X-Ray explains an individual slow request once you know to look, rather than telling you which tenant is suffering. Contributor Insights ranks by volume, and the affected customers may not be the noisiest.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html",
    tags: ["CloudWatch", "Embedded Metric Format", "Multi-Tenancy", "Observability"]
  },
  {
    id: "aws-sap-190",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing the Cost of a Chatty Service Mesh",
    scenario: "A bill review shows large charges for interface VPC endpoints. Investigation finds 40 interface endpoints created in each of three Availability Zones in 20 accounts, many for services used only occasionally.",
    question: "Which change reduces the charge while keeping private access?",
    options: [
      { id: 'A', text: "Centralize the interface endpoints in a shared services VPC and resolve them from the other VPCs through Route 53 Resolver rules." },
      { id: 'B', text: "Remove the interface endpoints for the services used only occasionally and allow that traffic to reach the public service endpoints through a NAT gateway instead." },
      { id: 'C', text: "Reduce each interface endpoint to a single Availability Zone so that the hourly charge falls to a third of its current level across all of the accounts." },
      { id: 'D', text: "Replace the interface endpoints with gateway endpoints, which carry no hourly charge." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Interface endpoints are billed per endpoint per Availability Zone per hour, so 2,400 of them is mostly duplication; centralizing them in one shared VPC and forwarding DNS from the spokes keeps private access while collapsing the count dramatically. Sending occasional traffic over a NAT gateway reintroduces an internet path many regulated workloads forbid and adds processing charges. Dropping to one Availability Zone saves money but creates a zonal single point of failure. Gateway endpoints exist only for S3 and DynamoDB, so they cannot replace the rest.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/centralized-access-to-vpc-private-endpoints.html",
    tags: ["VPC Endpoints", "Cost Optimization", "Route 53 Resolver", "Networking"]
  },
  {
    id: "aws-sap-191",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Speeding Up a Slow Athena Query",
    scenario: "An Athena query over 3 TB of gzip-compressed JSON in Amazon S3 takes eight minutes and scans the entire dataset even though the query filters on a single day and selects four of the sixty available columns.",
    question: "Which change reduces both scan volume and query time most?",
    options: [
      { id: 'A', text: "Convert the data to Parquet and partition it by date, then update the table's partitions." },
      { id: 'B', text: "Increase the number of files by splitting the existing gzip objects into smaller pieces so that Athena is able to parallelize the scan across more workers." },
      { id: 'C', text: "Switch the compression from gzip to Snappy so the objects can be split." },
      { id: 'D', text: "Create a view over the table selecting only the four columns the query needs so that the unnecessary columns are excluded from each of the query results." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Athena charges and spends time on bytes scanned, and two things drive that: partitioning lets it skip every day but the one requested, and a columnar format lets it read four columns instead of sixty, so together they cut the scan by orders of magnitude. Splitting files improves parallelism but still reads all 3 TB, and gzip objects are not splittable anyway. Snappy helps parallelism for the same reason but leaves the row-oriented full scan in place. A view changes the projection presented but the engine still reads every column from the underlying JSON.",
    referenceUrl: "https://docs.aws.amazon.com/athena/latest/ug/performance-tuning-data-optimization-techniques.html",
    tags: ["Athena", "Parquet", "Partitioning", "Performance"]
  },
  {
    id: "aws-sap-192",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "A Failover That Worked but Left Data Behind",
    scenario: "A regional failover succeeded and the application served traffic from the secondary Region, but reconciliation later found several minutes of transactions missing. The team used asynchronous replication and an automated promotion.",
    question: "What does this outcome indicate about the design?",
    options: [
      { id: 'A', text: "The recovery point objective was not met, because asynchronous replication accepts data loss equal to whatever replication lag existed at the moment the primary Region was lost." },
      { id: 'B', text: "The recovery time objective was not met, because the automated promotion took longer to complete than the time the business had allowed for the failover." },
      { id: 'C', text: "The replication was misconfigured, because correctly configured asynchronous replication does not lose transactions when a promotion is performed automatically." },
      { id: 'D', text: "The application was at fault, because it should have retried the missing transactions against the secondary Region once that Region had been promoted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Asynchronous replication acknowledges a write before the remote copy has it, so whatever is in flight when the primary is lost is gone, and the observed loss is the replication lag rather than a defect; meeting a near-zero recovery point objective requires synchronous replication or an application-level mechanism such as an outbox. The failover completed, so the recovery time objective was met. Correctly configured asynchronous replication still loses in-flight data by definition. The application cannot retry transactions whose records it no longer has.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["RPO", "Replication", "Disaster Recovery", "Multi-Region"]
  },
  {
    id: "aws-sap-193",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Removing Secrets Already Committed to a Repository",
    scenario: "A scan finds AWS access keys committed to an internal Git repository two years ago. The keys belong to an IAM user still in use by a batch job, and the repository history is mirrored in several forks.",
    question: "What is the correct order of response?",
    options: [
      { id: 'A', text: "Deactivate the exposed keys immediately, move the job to a role, then review CloudTrail for use of those keys." },
      { id: 'B', text: "Rewrite the repository history to remove the keys from every commit, then coordinate with the owners of each fork before deactivating the exposed credentials." },
      { id: 'C', text: "Rotate the keys to new values for the same IAM user, update the batch job with the replacements, and then purge the old values from the repository history." },
      { id: 'D', text: "Restrict the IAM user's policy to the batch job's minimum permissions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Exposed credentials must be invalidated first because every moment they remain active is exploitable, and history rewriting cannot recall copies already cloned; moving the job to a role removes the long-lived credential entirely, and the CloudTrail review then establishes whether the keys were used. Rewriting history before deactivating leaves the live credential usable throughout a slow coordination exercise. Rotating to new keys for the same user keeps the long-lived credential pattern that caused the exposure. Scoping the policy reduces blast radius but leaves working credentials in public history.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",
    tags: ["IAM", "Credential Exposure", "Incident Response", "Security"]
  },
  {
    id: "aws-sap-194",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Deciding Whether to Move to Graviton",
    scenario: "A team runs a large fleet of Java services on x86 instances and wants the price-performance benefit of AWS Graviton, but leadership will not approve a migration without evidence that the workload behaves identically.",
    question: "Which approach produces that evidence with least risk?",
    options: [
      { id: 'A', text: "Build multi-architecture images and run a Graviton canary alongside the x86 fleet, comparing latency, errors, and cost." },
      { id: 'B', text: "Rebuild the services for the ARM architecture and replace the entire fleet during a maintenance window so the comparison is made against the previous month's metrics." },
      { id: 'C', text: "Run the existing unit and integration test suites on a Graviton instance and treat a clean pass as confirmation that the services behave identically in production." },
      { id: 'D', text: "Use AWS Compute Optimizer's recommendations for suitable Graviton instance types." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running a small share of real production traffic on Graviton next to the existing fleet compares the two under identical conditions and can be withdrawn instantly if anything differs, which is evidence at minimal risk. Replacing the whole fleet in one window is the risk leadership is guarding against and compares against a different month's traffic. Test suites confirm correctness but say nothing about latency or throughput under production load. Compute Optimizer suggests candidate instance types but does not demonstrate that the workload behaves the same.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-graviton.html",
    tags: ["Graviton", "Canary", "Cost Optimization", "Migration"]
  },
  {
    id: "aws-sap-195",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Migrating a Workload That Cannot Be Restarted",
    scenario: "A stateful application holds hours of in-memory computation. Restarting it discards that state and takes six hours to rebuild. The team must move it to AWS without losing the state and without a six-hour service gap.",
    question: "Which approach is realistic for this workload?",
    options: [
      { id: 'A', text: "Add a checkpointing capability so state can be persisted and reloaded, then migrate and restore from the most recent checkpoint." },
      { id: 'B', text: "Use AWS Application Migration Service to replicate the server continuously and cut over, since the replication copies the memory contents along with the disk." },
      { id: 'C', text: "Take a snapshot of the source server's volumes while it is running and launch an EC2 instance from the resulting image so the computation resumes where it stopped." },
      { id: 'D', text: "Move the workload during its quietest period so that the six-hour rebuild happens when the smallest number of users are affected by the service gap." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In-memory state that takes six hours to rebuild is an application design problem, and the durable answer is to make the state persistable so it can be checkpointed, moved, and reloaded, which also improves resilience generally. Application Migration Service replicates block storage, not memory, so the application still restarts cold. A volume snapshot likewise captures disk rather than memory and would produce an inconsistent state for a running computation. Choosing a quiet window is scheduling around the problem and still incurs the six-hour gap.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
    tags: ["Migration", "Stateful", "Checkpointing", "Modernization"]
  },
  {
    id: "aws-sap-196",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Containerizing Without Rewriting the Application",
    scenario: "A team must containerize 30 legacy .NET Framework and Java applications running on Windows and Linux servers. They lack container expertise and want generated Dockerfiles and deployment manifests as a starting point.",
    question: "Which tool accelerates this work?",
    options: [
      { id: 'A', text: "AWS App2Container, which analyses a running application and generates container artefacts and deployment templates." },
      { id: 'B', text: "AWS Copilot, which creates the infrastructure and pipelines for containerized services once the team has produced a working container image for each application." },
      { id: 'C', text: "AWS Proton, which lets a platform team publish environment and service templates that application teams then use to deploy their containerized workloads." },
      { id: 'D', text: "Amazon ECS Anywhere, which allows containers to run on the existing on-premises servers while the team gradually gains experience with container workloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "App2Container inspects a running Java or .NET application, identifies its dependencies, and generates the Dockerfile, container image, and ECS or EKS deployment artefacts, which is exactly the starting point a team without container expertise needs. Copilot and Proton both operate after an image exists and address deployment tooling rather than containerization itself. ECS Anywhere runs containers on existing hardware but does not help turn an application into a container in the first place.",
    referenceUrl: "https://docs.aws.amazon.com/app2container/latest/UserGuide/what-is-a2c.html",
    tags: ["App2Container", "Containers", "Modernization", "Migration"]
  },
  {
    id: "aws-sap-197",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing an Approach for a VMware Estate",
    scenario: "A company must vacate a data centre in four months. It runs 700 virtual machines on VMware, has deep operational dependence on vSphere tooling, and has no time to re-engineer applications before the deadline.",
    question: "Which approach fits the deadline and the operational constraint?",
    options: [
      { id: 'A', text: "Relocate the estate to a VMware environment running on AWS infrastructure, keeping vSphere operations, then modernize afterwards." },
      { id: 'B', text: "Rehost every virtual machine onto EC2 instances with AWS Application Migration Service, retraining the operations team on EC2 tooling during the migration." },
      { id: 'C', text: "Replatform the estate by moving each application onto the equivalent AWS managed services so that the operational burden falls before the data centre closes." },
      { id: 'D', text: "Retain the estate in a colocation facility on the existing hardware while the applications are re-engineered for AWS over the following two years." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Relocate is the strategy for a VMware estate under time pressure, because the virtual machines move without conversion and the team keeps the vSphere tooling and processes it depends on, leaving modernization as a later decision. Rehosting 700 machines onto EC2 in four months while retraining the operations team is a large simultaneous change. Replatforming each application is slower still and cannot meet the deadline. Retaining in colocation avoids the deadline problem but forgoes the migration entirely and carries hardware refresh cost.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
    tags: ["Relocate", "VMware", "Migration Strategies", "7 Rs"]
  },
  {
    id: "aws-sap-198",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Keeping Analytics Running Through a Database Move",
    scenario: "A reporting platform reads from a production database being migrated to Aurora. Reports must keep running throughout, cannot tolerate the extra load of a full export, and the reporting queries must not be rewritten during the migration.",
    question: "Which approach keeps reporting available during the move?",
    options: [
      { id: 'A', text: "Point reporting at a DMS-maintained replica of the source, then repoint it at Aurora once the cutover completes." },
      { id: 'B', text: "Run the reports against the source database throughout the migration and repoint them at Aurora only after the cutover has completed and been verified." },
      { id: 'C', text: "Export the source database to Amazon S3 each night and have the reporting platform query the exported data with Amazon Athena during the migration period." },
      { id: 'D', text: "Pause the reporting platform for the duration of the migration and run the accumulated reports once the new Aurora cluster has been brought into service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A replication task maintains a continuously updated copy that reporting can read without touching the source, so the load moves off the production database while the migration proceeds and the queries stay unchanged because the target keeps the same engine and schema. Leaving reports on the source keeps the load the requirement wants removed. Nightly exports to S3 impose the heavy export the scenario rules out and would require rewriting queries for Athena. Pausing reporting is an outage of the reporting service.",
    referenceUrl: "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html",
    tags: ["DMS", "Reporting", "Migration", "Change Data Capture"]
  },
  {
    id: "aws-sap-199",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Handling Applications Discovered With No Owner",
    scenario: "Discovery finds 40 servers with active network traffic but no identified business owner. The migration team cannot decide a strategy for them and the programme cannot stall while ownership is investigated.",
    question: "How should the programme handle these servers?",
    options: [
      { id: 'A', text: "Place them in a later wave and use the traffic data to trace the consuming systems back to an owning team." },
      { id: 'B', text: "Rehost them in the earliest wave so they are out of the data centre, and identify their owners from any support issues that arise after the migration completes." },
      { id: 'C', text: "Retire them after a short notice period, on the basis that a system with no identified business owner cannot have a business justification for continuing to run." },
      { id: 'D', text: "Retain them in the data centre indefinitely until an owner is identified, extending the facility contract for however long the investigation takes to conclude." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The servers have active traffic, so something depends on them, and the dependency data collected during discovery identifies the consuming systems whose owners can be traced, while scheduling them later keeps the programme moving. Migrating them first means moving workloads nobody understands and learning about them through incidents. Retiring a system with live traffic risks breaking a dependent application regardless of whether an owner has been found. Keeping the data centre open indefinitely defeats the purpose of the programme.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-portfolio-discovery/welcome.html",
    tags: ["Discovery", "Wave Planning", "Migration", "Dependencies"]
  },
  {
    id: "aws-sap-200",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Funding a Migration Programme",
    scenario: "A company is planning a large migration and wants to understand what AWS offers to reduce the cost and risk of the assessment and mobilization phases before the main migration work begins.",
    question: "Which AWS programme supports this?",
    options: [
      { id: 'A', text: "The AWS Migration Acceleration Program, which structures the work into assess, mobilize, and migrate phases with supporting tooling, partner funding, and investment." },
      { id: 'B', text: "The AWS Well-Architected Partner Program, which provides reviews of the workload's architecture against the framework pillars before the migration work begins." },
      { id: 'C', text: "AWS Enterprise Support, which provides a technical account manager and proactive guidance during large changes such as a data centre migration programme." },
      { id: 'D', text: "AWS Activate, which provides credits and technical support to help early-stage companies build and scale their workloads on AWS infrastructure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Migration Acceleration Program is the structured methodology and funding mechanism for large migrations, dividing work into assess, mobilize, and migrate and modernize phases with tooling and investment at each. The Well-Architected Partner Program delivers architecture reviews rather than migration funding. Enterprise Support provides valuable guidance but is a support plan rather than a migration programme. AWS Activate is aimed at startups and has nothing to do with data centre migration.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/welcome.html",
    tags: ["Migration Acceleration Program", "Programme", "Planning", "Migration"]
  }
];

export default AWS_SAP_QUESTIONS;
