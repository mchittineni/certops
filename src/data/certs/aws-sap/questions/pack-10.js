export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-226",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Delegating Network Administration Safely",
    scenario: "A network team must manage Transit Gateway routing, VPC endpoints, and Route 53 Resolver rules across the organization, but must not be able to read application data or alter IAM policies in any workload account.",
    question: "How should the delegation be expressed?",
    options: [
      { id: 'A', text: "A network administration role in each account granting only the networking actions, with a permissions boundary excluding data and IAM actions so that privilege cannot be escalated." },
      { id: 'B', text: "A single administrator role in the shared network account, with the workload accounts trusting it for every action so the team can manage networking wherever it is needed." },
      { id: 'C', text: "A service control policy attached to the network team's accounts that denies the data plane actions, leaving them full administrative access elsewhere in the organization." },
      { id: 'D', text: "IAM Identity Center permission sets granting the AdministratorAccess managed policy, with CloudTrail alarms raised whenever the network team reads application data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Least privilege is expressed by granting only the networking actions the team needs, and a permissions boundary caps the role so privilege cannot be escalated by attaching another policy or editing IAM. A role trusted for every action grants exactly the access the requirement forbids. A service control policy on the network team's own accounts does not constrain what they do in workload accounts. Granting administrator access and alarming afterwards detects misuse rather than preventing it.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM", "Delegation", "Permissions Boundary", "Least Privilege"]
  },
  {
    id: "aws-sap-227",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Keeping Golden Images Patched Across Accounts",
    scenario: "A security policy requires that every EC2 instance launch from an image patched within the last 30 days. Teams in 50 accounts build their own images from a base and images drift out of compliance without anyone noticing.",
    question: "Which design keeps the estate compliant?",
    options: [
      { id: 'A', text: "Run an EC2 Image Builder pipeline on a monthly schedule that rebuilds and distributes the base image, and deprecate images older than the policy allows." },
      { id: 'B', text: "Publish the base image to a shared account and email the teams each month asking them to rebuild their own images from the latest version of the base." },
      { id: 'C', text: "Enable Systems Manager Patch Manager on the running instances so that any image drift is corrected after launch by the scheduled patch baseline application." },
      { id: 'D', text: "Create an AWS Config rule that reports each instance launched from an image older than 30 days so the owning teams can replace the affected instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Image Builder automates the whole loop: a scheduled pipeline rebuilds from the current patched base, distributes the result to the accounts, and deprecating older versions stops them being launched, so compliance is maintained without anyone remembering. Emailing teams relies on the manual step that is already failing. Patch Manager fixes running instances but leaves every launch starting from a stale image. A Config rule reports drift without correcting it or preventing the next launch.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-distribution-settings.html",
    tags: ["EC2 Image Builder", "Patching", "Compliance", "Automation"]
  },
  {
    id: "aws-sap-228",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Choosing Where a Landing Zone's Logs Go",
    scenario: "A landing zone design must decide where CloudTrail, AWS Config, VPC flow logs, and load balancer access logs are delivered so that an attacker with access to a workload account cannot alter or delete the evidence.",
    question: "Where should the logs be delivered?",
    options: [
      { id: 'A', text: "To buckets in a dedicated log archive account that workload principals cannot write to or delete from." },
      { id: 'B', text: "To buckets in the organization's management account, which is already isolated from workloads and holds the organization's own administrative configuration." },
      { id: 'C', text: "To buckets in each workload account with versioning and MFA delete enabled so that the log objects cannot be removed without an additional authentication factor." },
      { id: 'D', text: "To an Amazon OpenSearch Service domain in the security account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A dedicated log archive account puts the evidence outside the blast radius of any workload account, and restrictive bucket policies plus Object Lock mean a compromised workload principal can neither alter nor delete it. The management account should hold as little as possible because it cannot be restricted by service control policies. Keeping logs in the account being attacked leaves them reachable by the attacker, and MFA delete does not protect against a sufficiently privileged principal. Indexing into a search domain is useful for analysis but is a derived copy rather than the tamper-evident original.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/security-ou-and-accounts.html",
    tags: ["Landing Zone", "Log Archive", "Security", "Governance"]
  },
  {
    id: "aws-sap-229",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Connecting a VPC to Many SaaS Consumers",
    scenario: "A company publishes an internal API that 200 customer VPCs, owned by other AWS accounts, must consume. The company will not expose the API publicly and will not accept any route between its VPC and a customer's network.",
    question: "Which publishing mechanism fits?",
    options: [
      { id: 'A', text: "Publish a PrivateLink endpoint service backed by a Network Load Balancer, which consumers reach with their own interface endpoints." },
      { id: 'B', text: "Attach each consumer VPC to a shared Transit Gateway and advertise the API's subnet prefix so that consumers route to it across their attachments." },
      { id: 'C', text: "Create a VPC peering connection with each consumer VPC and restrict addresses with security groups." },
      { id: 'D', text: "Expose the API through a private Amazon API Gateway endpoint and share the interface endpoint with the consumer accounts through Resource Access Manager." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A PrivateLink endpoint service is designed for exactly this scale and posture: consumers create endpoints in their own VPCs, no route exists between the networks, addresses need not be unique, and the provider never sees the consumer's network. Transit Gateway and peering both create routed connectivity between networks, which the requirement forbids, and both need non-overlapping address space across 200 consumers. A private API Gateway endpoint is a reasonable pattern but the shared endpoint approach does not scale to 200 external accounts the way an endpoint service does.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-share-your-services.html",
    tags: ["PrivateLink", "Endpoint Service", "SaaS", "Networking"]
  },
  {
    id: "aws-sap-230",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Applying Different Controls to Sandbox Accounts",
    scenario: "Engineers need sandbox accounts where they can experiment freely, but the company must cap spend, prevent access to production data, and ensure sandboxes cannot connect to the corporate network.",
    question: "Which combination of controls fits sandbox accounts?",
    options: [
      { id: 'A', text: "Place sandboxes in their own organizational unit with a service control policy blocking network attachments, plus per-account budgets with actions capping the spend." },
      { id: 'B', text: "Place sandboxes in the same organizational unit as development accounts and rely on the development guardrails already applied there to constrain what engineers can do." },
      { id: 'C', text: "Grant engineers time-limited access to the development accounts instead of creating sandboxes, so no additional accounts or controls need to be maintained." },
      { id: 'D', text: "Create sandboxes outside the organization so that their spend is billed separately and they have no path to the company's production environment at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A separate organizational unit lets the sandbox-specific policy differ from every other environment, denying the Transit Gateway and peering attachments that would create a corporate path, while budget actions cap spend per account. Reusing the development guardrails applies controls designed for a different risk profile. Giving engineers access to development accounts removes the safe place to experiment. Accounts outside the organization lose consolidated billing, service control policies, and central visibility entirely, which is worse rather than safer.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/sandbox-ou.html",
    tags: ["Sandbox", "Organizations", "Guardrails", "Cost Control"]
  },
  {
    id: "aws-sap-231",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Understanding How an SCP Interacts With IAM",
    scenario: "An engineer holds an IAM policy allowing s3:GetObject. A service control policy attached to the account's organizational unit does not list S3 among the allowed services. The engineer's call fails and they ask why.",
    question: "Why is the request denied?",
    options: [
      { id: 'A', text: "A service control policy sets the maximum available permissions, so an action must be allowed by both the policy and IAM." },
      { id: 'B', text: "A service control policy overrides IAM entirely, so the permissions granted by an identity policy in the account are not evaluated when one is attached." },
      { id: 'C', text: "A service control policy grants permissions to principals in the account, so the engineer's identity policy must be removed for the grant to take effect." },
      { id: 'D', text: "A service control policy applies only to the root user of the account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service control policies filter the permissions that identity and resource policies can grant, so an action needs an allow in IAM and must also survive the policy's ceiling; an omitted service is outside the ceiling and the request fails regardless of IAM. A service control policy does not override IAM so much as intersect with it, and IAM is still evaluated. It never grants permissions on its own. It applies to every principal in the account including the root user, rather than only to root.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["SCP", "IAM", "Policy Evaluation", "Organizations"]
  },
  {
    id: "aws-sap-232",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Between Synchronous and Asynchronous Integration",
    scenario: "An architect is designing an order service that calls inventory, pricing, and fraud checks. Fraud takes up to eight seconds, the customer must receive an order confirmation immediately, and inventory must be decremented reliably.",
    question: "Which integration design meets these constraints?",
    options: [
      { id: 'A', text: "Call inventory and pricing synchronously, confirm the order, and run the fraud check asynchronously with a compensating action such as cancelling the order if it fails." },
      { id: 'B', text: "Call inventory, pricing, and fraud synchronously in sequence and return the confirmation once every one of the three checks has completed successfully." },
      { id: 'C', text: "Publish an event and run all three checks asynchronously, returning the confirmation to the customer as soon as the event has been accepted by the bus." },
      { id: 'D', text: "Call the three checks synchronously in parallel so that the total wait is bounded by the slowest check rather than by the sum of all three of them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The constraints split the work: inventory and pricing are fast and must be certain before confirming, while fraud is slow and its outcome can be applied afterwards through a compensating action such as cancelling or flagging the order. Running all three synchronously makes the customer wait eight seconds. Making everything asynchronous confirms an order before inventory is known to be available. Parallel synchronous calls still leave the customer waiting for the eight-second fraud check, because it is the slowest.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/saga.html",
    tags: ["Integration", "Asynchronous", "Saga", "Design"]
  },
  {
    id: "aws-sap-233",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Restricting an S3 Bucket to a Single VPC",
    scenario: "A regulated dataset in Amazon S3 must be readable only by workloads running in one specific VPC. Credentials leaked outside that network must not grant access even if the IAM policy would otherwise allow the read.",
    question: "Which control enforces the network condition?",
    options: [
      { id: 'A', text: "A bucket policy denying access unless aws:SourceVpc matches the approved VPC identifier." },
      { id: 'B', text: "A security group on the workload instances allowing outbound traffic to the S3 prefix list so only those instances are able to reach the bucket over the network." },
      { id: 'C', text: "A gateway VPC endpoint in the approved VPC with an endpoint policy allowing access to the bucket for the principals that need to read the dataset." },
      { id: 'D', text: "An IAM policy on the workload role allowing s3:GetObject for the approved VPC." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The condition must live on the resource, because only a bucket policy is evaluated for every caller regardless of which credentials or account they use, and aws:SourceVpc is populated when the request arrives through a VPC endpoint so a leaked credential used from elsewhere fails the condition. A security group restricts the instances' egress but places no condition on the bucket. An endpoint policy governs what may leave through that endpoint, not what the bucket accepts from elsewhere. An identity policy binds only to that role, so any other credential path remains open.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
    tags: ["S3", "Bucket Policy", "VPC Endpoints", "Data Perimeter"]
  },
  {
    id: "aws-sap-234",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Sizing a Kinesis Stream for a Known Load",
    scenario: "A stream must ingest 8,000 records per second, each about 2 KB, and two independent applications must each read the full stream in near real time without competing for read throughput.",
    question: "Which stream configuration supports this?",
    options: [
      { id: 'A', text: "A provisioned stream with at least 16 shards, with both applications registered as enhanced fan-out consumers." },
      { id: 'B', text: "A provisioned stream with at least 8 shards, with both of the applications reading through the shared throughput available from the standard consumer interface." },
      { id: 'C', text: "A provisioned stream with at least 16 shards, with both applications polling through GetRecords." },
      { id: 'D', text: "An on-demand stream with both applications reading through the standard consumer interface, so that the shard count is managed by the service automatically." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each shard ingests 1 MB or 1,000 records per second, and 8,000 records at 2 KB is 16 MB per second, so at least 16 shards are needed; enhanced fan-out then gives each consumer its own dedicated 2 MB per second per shard so the two applications do not compete. Eight shards is under the required ingest rate. Sixteen shards with standard consumers makes both applications share one 2 MB per second read budget per shard. An on-demand stream handles the capacity but standard consumers still share read throughput.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/enhanced-consumers.html",
    tags: ["Kinesis", "Sharding", "Enhanced Fan-Out", "Capacity"]
  },
  {
    id: "aws-sap-235",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Deciding Where to Put Business Logic at the Edge",
    scenario: "A retailer wants to run inventory checks against a regional database as part of serving a page, with the page assembled close to the user. The check needs a database connection and takes about 40 ms.",
    question: "Which edge option can perform this work?",
    options: [
      { id: 'A', text: "Lambda@Edge on the origin request event, which runs in regional edge caches with network access." },
      { id: 'B', text: "CloudFront Functions on the viewer request event, which run in the edge locations themselves with sub-millisecond startup and very low per-request cost." },
      { id: 'C', text: "CloudFront Functions on the viewer response event, which can rewrite the assembled page using the inventory data returned alongside the origin's response." },
      { id: 'D', text: "AWS Global Accelerator with an endpoint group in each Region so that the inventory check is routed to whichever regional database is closest to the user." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda@Edge runs a full runtime in regional edge caches, can open network connections, and allows up to 30 seconds on origin events, so a 40 ms database check is well within its capability. CloudFront Functions are deliberately constrained to a JavaScript sandbox with no network access and around one millisecond of execution, so they cannot reach a database on either the request or response event. Global Accelerator improves the network path to endpoints but executes no logic of its own.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html",
    tags: ["Lambda@Edge", "CloudFront Functions", "Edge Computing", "Design"]
  },
  {
    id: "aws-sap-236",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Preventing Duplicate Processing of S3 Uploads",
    scenario: "A pipeline processes each object uploaded to a bucket. Occasionally the same object is processed twice, producing duplicate downstream records. The team uses S3 event notifications delivered to a Lambda function.",
    question: "What explains the duplicates and how should the pipeline handle them?",
    options: [
      { id: 'A', text: "S3 event notifications are delivered at least once, so an occasional duplicate is expected and the consumer must be idempotent on the object key and version." },
      { id: 'B', text: "S3 event notifications are delivered exactly once, so the duplicates indicate that the object was uploaded twice and the producer should be corrected." },
      { id: 'C', text: "S3 event notifications are ordered per prefix, so the duplicates indicate that the notification configuration overlaps two prefixes covering the same objects." },
      { id: 'D', text: "S3 event notifications are delivered to every configured destination, so the duplicates indicate that two destinations are both invoking the same processing function." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "S3 event notification delivery is at-least-once, so an occasional duplicate is expected behaviour rather than a defect, and the consumer must be idempotent, keyed on something stable such as the object key together with its version identifier. Delivery is not exactly once. Notifications carry no ordering guarantee, and overlapping prefix configurations are rejected rather than silently duplicating. Multiple destinations would duplicate consistently rather than occasionally.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html",
    tags: ["S3 Events", "Idempotency", "Lambda", "Event-Driven"]
  },
  {
    id: "aws-sap-237",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Selecting Storage for an Archive With Rare Retrieval",
    scenario: "A legal team must retain 500 TB of case files for ten years. Retrieval happens a few times a year and a wait of up to 12 hours is acceptable. Cost per terabyte stored is the dominant concern.",
    question: "Which storage class fits?",
    options: [
      { id: 'A', text: "S3 Glacier Deep Archive, the lowest-cost class with retrieval measured in hours." },
      { id: 'B', text: "S3 Glacier Flexible Retrieval, which offers retrieval in minutes to hours and a lower storage cost than the instant retrieval and infrequent access classes." },
      { id: 'C', text: "S3 Glacier Instant Retrieval, which provides millisecond access to archived data at a lower storage cost than the standard infrequent access class." },
      { id: 'D', text: "S3 Standard-Infrequent Access, which offers millisecond access and a lower per-gigabyte storage cost than S3 Standard for data accessed only occasionally." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deep Archive is the cheapest S3 storage class and its standard retrieval completes within 12 hours, which the legal team accepts, making it the correct choice when storage cost dominates. Flexible Retrieval is faster but costs more per terabyte for a speed the requirement does not need. Instant Retrieval and Standard-Infrequent Access both price for millisecond access, which is far more responsiveness than a few retrievals a year justifies across 500 TB.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
    tags: ["S3 Glacier", "Deep Archive", "Cost Optimization", "Retention"]
  },
  {
    id: "aws-sap-238",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Giving a Container Task Its Own Permissions",
    scenario: "Several containers run on the same Amazon ECS cluster. Each needs different AWS permissions, and the security team requires that a container be unable to use another container's permissions or the instance's own role.",
    question: "Which mechanism provides per-container credentials?",
    options: [
      { id: 'A', text: "An IAM task role on each task definition, which the agent supplies to that task only." },
      { id: 'B', text: "An IAM instance profile on the container instances carrying the union of the permissions that each of the tasks running on the cluster requires to operate." },
      { id: 'C', text: "An IAM user per container with access keys injected as environment variables from AWS Secrets Manager when the task definition is registered with the cluster." },
      { id: 'D', text: "An IAM role assumed by the application inside each container using credentials passed from the cluster's container instance profile at task startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A task role scopes credentials to the task, delivered through the task metadata endpoint so one task cannot obtain another's credentials, and on Fargate there is no instance role to fall back on at all. An instance profile holding the union of permissions gives every container everything, which is the opposite of the requirement. IAM users with access keys reintroduce long-lived credentials. Assuming a role from the instance profile requires the instance profile to be broad enough to permit it, so the isolation is illusory.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html",
    tags: ["ECS", "Task Role", "IAM", "Least Privilege"]
  },
  {
    id: "aws-sap-239",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "An Alarm That Never Fires During Real Incidents",
    scenario: "A CloudWatch alarm on a Lambda function's error metric never fires, even during outages when every invocation fails. The alarm is configured to breach when the sum of errors exceeds 100 over five minutes, treating missing data as not breaching.",
    question: "Why does the alarm stay quiet?",
    options: [
      { id: 'A', text: "When the failure prevents invocations entirely no error data points are published, so the alarm evaluates missing data and stays in its current state." },
      { id: 'B', text: "The evaluation period is too long, so the errors are averaged across five minutes and the resulting value never reaches the configured threshold of 100 errors." },
      { id: 'C', text: "The sum statistic is inappropriate for an error metric, so the alarm should use the average statistic to detect a rise in the proportion of failing invocations." },
      { id: 'D', text: "The alarm is missing a percentage-based threshold, so it cannot detect an outage in which the invocation volume falls at the same time as errors rise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lambda publishes the error metric only when invocations occur, so a failure upstream that stops invocations produces no data points at all, and treating missing data as not breaching keeps the alarm quiet exactly when it matters; alarming on an error rate expression or treating missing data as breaching fixes it. The period length does not prevent a sum from reaching 100 when errors are occurring. The sum statistic is appropriate for a count. A percentage threshold would help with proportion but the underlying problem is the absence of data points.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html",
    tags: ["CloudWatch Alarms", "Missing Data", "Observability", "Troubleshooting"]
  },
  {
    id: "aws-sap-240",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing Time to Detect a Regional Problem",
    scenario: "A global service was degraded in one Region for 40 minutes before anyone noticed, because internal health checks ran inside the affected Region and reported healthy while customers could not reach the endpoint.",
    question: "Which monitoring change detects this class of failure?",
    options: [
      { id: 'A', text: "Run CloudWatch Synthetics canaries from several Regions against the public endpoint and alarm on failures from outside the Region." },
      { id: 'B', text: "Increase the frequency of the existing internal health checks so that a degradation inside the affected Region is detected sooner than it was on this occasion." },
      { id: 'C', text: "Add Route 53 health checks so DNS stops returning the affected Region's address." },
      { id: 'D', text: "Enable AWS Health notifications for the account so that the team is informed whenever AWS reports an event affecting the services the workload depends on." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The failure was invisible because the observer shared the fate of the thing observed, so the fix is to measure from outside: canaries running in other Regions exercise the customer path and fail when customers fail. Checking more often from inside the Region repeats the same blind spot. Route 53 health checks do observe externally and would help, but their purpose is to shift traffic rather than to give the team detailed detection and alerting. AWS Health reports AWS-side events and would miss a degradation caused by the application itself.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["CloudWatch Synthetics", "Monitoring", "Multi-Region", "Detection"]
  },
  {
    id: "aws-sap-241",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Cutting the Cost of Development Databases",
    scenario: "Twelve Aurora clusters support development and testing. They run continuously but are used only during working hours on weekdays, and each is sized like production because they were cloned from it.",
    question: "Which combination reduces cost most?",
    options: [
      { id: 'A', text: "Move the clusters to Aurora Serverless v2 with a low minimum capacity, and stop those that are not needed outside working hours." },
      { id: 'B', text: "Purchase Reserved Instances for the development clusters so that the continuously running capacity is billed at a lower rate than it is on demand today." },
      { id: 'C', text: "Reduce each development cluster to a single instance and remove the reader instances so that the capacity running outside working hours is roughly halved." },
      { id: 'D', text: "Consolidate the twelve clusters onto one shared cluster with a schema per team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Two things are wasteful here, over-provisioning and idle time, and Serverless v2 with a low floor addresses the first by scaling down to near-idle capacity while stopping clusters outside working hours addresses the second. Reserved Instances commit to capacity that should not be running at all. Removing readers helps but leaves a production-sized writer running continuously. A shared cluster reduces cost but couples the teams, so one team's load test affects everyone else's testing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html",
    tags: ["Aurora Serverless v2", "Cost Optimization", "Development", "Databases"]
  },
  {
    id: "aws-sap-242",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Finding Why One Availability Zone Is Slower",
    scenario: "An application behind an Application Load Balancer shows higher latency for targets in one Availability Zone. Instance types, images, and configuration are identical across zones, and the load balancer has cross-zone load balancing enabled.",
    question: "Which investigation is most likely to find the cause?",
    options: [
      { id: 'A', text: "Compare per-zone target response time and check whether a dependency such as the database writer sits in a different zone." },
      { id: 'B', text: "Compare the CPU and memory utilization of the targets in each of the zones to establish whether the slower zone's instances are more heavily loaded than the others." },
      { id: 'C', text: "Disable cross-zone load balancing so each zone serves only its own traffic." },
      { id: 'D', text: "Replace the instances in the slower zone with newly launched instances so that any degraded underlying hardware affecting those targets is removed from service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Identical configuration across zones with different latency points at something the zones do not share, and the usual cause is a cross-zone hop to a single-zone dependency such as the database writer or a cache primary, which per-zone response time metrics plus the dependency's location will confirm. Utilization comparison is a reasonable early check but the scenario already indicates identical load distribution. Disabling cross-zone balancing hides rather than explains the difference. Replacing instances is a guess that does nothing if the cause is a remote dependency.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-cloudwatch-metrics.html",
    tags: ["Load Balancing", "Availability Zones", "Latency", "Troubleshooting"]
  },
  {
    id: "aws-sap-243",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Enforcing Encryption on Existing Resources",
    scenario: "An audit finds 40 unencrypted EBS volumes and 15 unencrypted RDS instances across the estate. The company needs them encrypted and needs assurance that new ones cannot be created unencrypted.",
    question: "Which approach addresses both the existing and the future resources?",
    options: [
      { id: 'A', text: "Snapshot and restore each resource into an encrypted copy, then enable encryption by default and deny unencrypted creation with a policy on every future call." },
      { id: 'B', text: "Enable EBS encryption by default and the RDS encryption setting in each account, which will encrypt the existing volumes and instances during their next maintenance window." },
      { id: 'C', text: "Create an AWS Config rule that reports unencrypted volumes and instances so the owning teams can plan to replace each of the affected resources over time." },
      { id: 'D', text: "Attach a service control policy denying the creation of unencrypted resources, which will also cause the existing unencrypted resources to become inaccessible." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encryption cannot be turned on in place for an existing EBS volume or RDS instance, so each must be snapshotted and restored as an encrypted copy, and the future is then closed off by enabling encryption by default and denying unencrypted creation. Enabling defaults affects new resources only and no maintenance window converts an existing one. A Config rule reports without remediating. A service control policy constrains new API calls and has no effect on resources that already exist.",
    referenceUrl: "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html",
    tags: ["EBS", "RDS", "Encryption", "Remediation"]
  },
  {
    id: "aws-sap-244",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Handling a Dependency With No Capacity Headroom",
    scenario: "An internal service is limited to 500 requests per second by a downstream mainframe. During peaks callers exceed this and the mainframe returns errors that cascade back to customers as failed requests.",
    question: "Which change protects customers from the limit?",
    options: [
      { id: 'A', text: "Put a queue in front of the mainframe call and serve callers an accepted response, processing the work at the rate the mainframe sustains and turning failure into delay." },
      { id: 'B', text: "Apply a rate-based AWS WAF rule at the public entry point so that callers exceeding the sustainable rate are blocked before their requests reach the service." },
      { id: 'C', text: "Increase the timeout on the mainframe call so that requests wait for the mainframe to become available rather than failing when the limit is exceeded." },
      { id: 'D', text: "Add a retry with exponential backoff around the mainframe call so that requests rejected by the mainframe are reissued until they eventually succeed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When the constraint is fixed, the way to protect customers is to decouple arrival rate from processing rate, so accepting the work onto a queue and draining it at 500 per second converts a failure into a delay. A WAF rate rule protects the mainframe but still rejects customers outright. Longer timeouts hold connections open and exhaust resources without adding capacity. Retries against a saturated dependency increase load and make the overload worse.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/queue-based-load-leveling.html",
    tags: ["Load Leveling", "SQS", "Resilience", "Patterns"]
  },
  {
    id: "aws-sap-245",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "A Multi-Region Design That Fails Together",
    scenario: "A workload runs active-active in two Regions but a recent incident took both down at once. The cause was a configuration change deployed simultaneously everywhere by a pipeline that treats the Regions as one environment.",
    question: "Which change removes the shared failure mode?",
    options: [
      { id: 'A', text: "Deploy to the Regions sequentially with a bake period and automated rollback between them." },
      { id: 'B', text: "Add a second pipeline so that each Region is deployed by its own pipeline, removing the single pipeline that deployed the change to both Regions at once." },
      { id: 'C', text: "Add more integration tests to the pipeline so that a configuration change capable of breaking the workload is detected before it reaches either of the Regions." },
      { id: 'D', text: "Add a manual approval step before the deployment stage so that an engineer reviews every configuration change before it is released to the two Regions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Simultaneous deployment makes the Regions a single failure domain regardless of how independent the infrastructure is, so staging the rollout with a bake period means the first Region's failure is detected and rolled back while the second still serves traffic. Two pipelines that run at the same time reproduce the same simultaneity. More tests reduce the chance of a bad change without removing the shared blast radius when one slips through. Manual approval slows deployment without staging it.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_limit_blast_radius.html",
    tags: ["Deployment", "Blast Radius", "Multi-Region", "Resilience"]
  },
  {
    id: "aws-sap-246",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Migrating a Workload With Per-Server Licensing",
    scenario: "An application is licensed per physical core on the servers that run it. Moving it to oversized EC2 instances would increase the licence count and the cost, and the team cannot change the licence agreement before migrating.",
    question: "Which approach controls the licence cost?",
    options: [
      { id: 'A', text: "Use optimize CPU options to reduce the vCPU count on the instance so the licensed core count matches what the workload needs." },
      { id: 'B', text: "Use Dedicated Hosts and track the entitlement with AWS License Manager so that the licences are counted against the host rather than against the instances." },
      { id: 'C', text: "Use Spot Instances so the lower compute price offsets the licence cost." },
      { id: 'D', text: "Use burstable instance types so that the baseline CPU allocation is lower and the licence is therefore counted against a smaller number of cores." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Optimize CPU lets the number of cores and threads per core be specified at launch, so an instance chosen for its memory or network capability need not carry cores the licence would be counted against, which directly controls the cost. Dedicated Hosts are the right answer for host-based licensing and License Manager tracks entitlements, but the scenario describes per-core licensing on the server. Spot changes the compute price without affecting the licence count. Burstable types have a baseline performance level but still present their full vCPU count.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html",
    tags: ["Optimize CPU", "Licensing", "EC2", "Migration"]
  },
  {
    id: "aws-sap-247",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing a Path for a Legacy SOAP Integration",
    scenario: "A migrated application exposes a SOAP interface that 30 external partners call. Partners cannot change their clients this year, but the team wants new internal consumers to use a REST interface against the same logic.",
    question: "Which approach serves both audiences?",
    options: [
      { id: 'A', text: "Keep the SOAP endpoint for partners and publish a REST facade in API Gateway over the same backend." },
      { id: 'B', text: "Convert the interface to REST and provide each of the 30 partners with a client library that translates their existing SOAP calls into the new REST requests." },
      { id: 'C', text: "Keep only the SOAP interface and have internal consumers call it, deferring the REST work until the partners are able to migrate their own client code." },
      { id: 'D', text: "Run two separate deployments, one exposing SOAP and one exposing REST." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A facade lets the two interfaces coexist over one implementation, so partners are undisturbed while internal consumers get the interface they want and the SOAP endpoint can be retired later without touching the business logic. Distributing client libraries to 30 external organizations is a change to their systems, which the scenario rules out. Forcing internal consumers onto SOAP entrenches the legacy interface. Two deployments duplicate the logic and create a divergence risk between them.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-overview-developer-experience.html",
    tags: ["API Gateway", "Facade", "Modernization", "Legacy"]
  },
  {
    id: "aws-sap-248",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Moving a Workload Whose Data Cannot Leave a Country",
    scenario: "A subsidiary must migrate a workload but its regulator forbids the data leaving the country, which has no AWS Region. The company wants AWS operating model consistency and cannot use a Region in a neighbouring country.",
    question: "Which option allows a move under this constraint?",
    options: [
      { id: 'A', text: "Deploy the workload on AWS Outposts installed in a data centre inside the country." },
      { id: 'B', text: "Deploy the workload to the nearest AWS Region and encrypt the data with keys held inside the country so that the regulator's confidentiality concern is addressed." },
      { id: 'C', text: "Deploy the workload to an AWS Local Zone, which extends a Region's infrastructure to a metropolitan area closer to the subsidiary's own users and regulator." },
      { id: 'D', text: "Deploy the workload to the nearest AWS Region and use AWS Control Tower data residency controls to restrict the Regions in which resources can be created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Outposts places AWS-managed infrastructure in a customer-chosen facility, so the data stays physically inside the country while the team uses the same APIs and services, which is the only option satisfying a strict residency rule where no Region exists. Encrypting data stored in another country does not change where it resides. Local Zones exist only in selected metropolitan areas and are extensions of an existing Region rather than a residency solution for an arbitrary country. Control Tower residency controls restrict which Regions are used but cannot create a Region in the country.",
    referenceUrl: "https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html",
    tags: ["Outposts", "Data Residency", "Compliance", "Migration"]
  },
  {
    id: "aws-sap-249",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Keeping Costs Visible During a Migration",
    scenario: "A migration will run for 18 months with workloads in both the data centre and AWS. Finance needs to see AWS spend attributed to each migration wave so the business case can be tracked against the actual outcome.",
    question: "Which practice makes wave-level spend visible?",
    options: [
      { id: 'A', text: "Tag every migrated resource with its wave and application identifier, activate the tags, and report on them in Cost Explorer." },
      { id: 'B', text: "Create a separate AWS account for every migration wave so that the account-level totals in the consolidated bill correspond directly to each of the waves." },
      { id: 'C', text: "Track the spend in the migration programme's own project management tooling, recording the estimated AWS cost of each wave as the wave is completed." },
      { id: 'D', text: "Use AWS Budgets with a budget per wave reported to finance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cost allocation tags carry the wave and application onto every line item, and once activated they become dimensions in Cost Explorer and the Cost and Usage Report, so actual spend is attributed to a wave on evidence. A separate account per wave gives clean separation but produces an account sprawl that outlives the programme and cuts across the eventual environment structure. Recording estimates in project tooling tracks the plan rather than the spend. Budgets need the same tags underneath to scope a wave at all.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
    tags: ["Cost Allocation Tags", "Migration", "FinOps", "Tracking"]
  },
  {
    id: "aws-sap-250",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Picking the First Workload to Migrate",
    scenario: "A company is starting its first migration and wants to build team capability and organizational confidence before attempting anything business critical, while still producing a result worth showing to leadership.",
    question: "Which workload makes the best first candidate?",
    options: [
      { id: 'A', text: "A low-risk application with real users and few dependencies, which exercises the process end to end." },
      { id: 'B', text: "The largest and most business-critical application, so that the greatest share of the programme's expected benefit is delivered as early as possible in the timeline." },
      { id: 'C', text: "An application that is no longer used by anyone, so that a failure during the first migration attempt has no impact at all on the business or its customers." },
      { id: 'D', text: "The application with the most complex dependencies, so that the hardest technical problems in the estate are solved while the team still has budget available." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A first migration should validate the whole process including cutover, monitoring, and support while keeping the consequences of a mistake small, so a low-risk application with real users and few dependencies builds genuine capability and gives leadership something real. The most critical application concentrates maximum risk in the least experienced attempt. An unused application proves nothing about operating a live workload. The most complex dependencies guarantee a slow, discouraging start.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-waves.html",
    tags: ["Migration Planning", "Pilot", "Wave Planning", "Strategy"]
  }
];

export default AWS_SAP_QUESTIONS;
