export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-26",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Billing Visibility Without Console Access",
    scenario: "A finance team must analyse spend across 120 AWS accounts down to the resource and tag level, refreshed daily. They are not permitted to hold IAM permissions in any workload account, and the analysts work in SQL rather than the console.",
    question: "Which reporting pipeline fits the constraint?",
    options: [
      { id: 'A', text: "Enable AWS Cost and Usage Reports at the organization level, deliver them to a finance-owned S3 bucket, and query the data with Amazon Athena." },
      { id: 'B', text: "Grant the finance team a read-only billing role in each of the 120 workload accounts and have them export Cost Explorer data to CSV each morning." },
      { id: 'C', text: "Schedule the AWS Budgets API from a finance account to collect the current forecast per account and load the responses into Amazon Redshift." },
      { id: 'D', text: "Turn on AWS Compute Optimizer across the organization and export its resource recommendations into the finance bucket for daily SQL analysis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Cost and Usage Report is the only source with hourly, resource-level, tag-annotated line items, it is produced once at the organization level from the management account, and delivering it to a bucket the finance team owns means no permission is needed in any workload account. Athena queries that bucket directly in SQL. Per-account roles are exactly the workload-account access the requirement forbids, and Cost Explorer exports lack resource-level granularity. Budgets returns forecasts and thresholds, not itemized usage. Compute Optimizer returns right-sizing advice rather than spend.",
    referenceUrl: "https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html",
    tags: ["Cost and Usage Report", "Athena", "Organizations", "FinOps"]
  },
  {
    id: "aws-sap-27",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Restricting an S3 Bucket to One Organization",
    scenario: "A company stores build artefacts in an Amazon S3 bucket that must be readable from any account inside its AWS organization, including accounts created next year, and from nowhere else. The bucket policy currently lists 40 account ids and is edited whenever an account is added.",
    question: "Which bucket policy condition removes the ongoing maintenance?",
    options: [
      { id: 'A', text: "Condition the policy on aws:PrincipalOrgID matching the organization id, so membership is evaluated at request time rather than listed." },
      { id: 'B', text: "Condition the policy on aws:PrincipalOrgPaths matching each organizational unit path under the root, updating the list whenever an organizational unit is added or renamed." },
      { id: 'C', text: "Condition the policy on aws:SourceVpce matching the gateway endpoint id used by every account, so that only traffic entering through that endpoint is authorized." },
      { id: 'D', text: "Condition the policy on aws:PrincipalAccount matching the management account id and have member accounts assume a role there." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "aws:PrincipalOrgID resolves at evaluation time to the organization the calling principal currently belongs to, so an account created next year is covered the moment it joins and no policy edit is needed. aws:PrincipalOrgPaths works but is scoped to named organizational unit paths, so it still needs editing as the structure changes. aws:SourceVpce ties authorization to one VPC endpoint, which neither covers every account nor expresses organization membership. Routing all reads through a role in the management account concentrates privilege and forces an extra hop for every build.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html",
    tags: ["S3", "Bucket Policy", "Organizations", "IAM Conditions"]
  },
  {
    id: "aws-sap-28",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Overlapping CIDR Blocks After an Acquisition",
    scenario: "An acquiring company runs 10.0.0.0/16 on premises. The acquired company uses the identical 10.0.0.0/16 range in its VPC. A handful of application servers on each side must reach a specific set of servers on the other, and renumbering either network is out of the question for at least a year.",
    question: "Which connectivity design works despite the overlap?",
    options: [
      { id: 'A', text: "Place a private Network Load Balancer in front of the target servers on each side and publish it through an AWS PrivateLink endpoint service consumed by the other side." },
      { id: 'B', text: "Create a VPC peering connection between the two networks and add longest-prefix routes so the overlapping ranges resolve to the intended destination." },
      { id: 'C', text: "Attach both networks to an AWS Transit Gateway and use separate route tables so each attachment sees only the remote prefixes it needs to reach." },
      { id: 'D', text: "Establish an AWS Site-to-Site VPN between the two networks and rely on the tunnel to translate the overlapping ranges automatically." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "PrivateLink is the documented answer for overlapping address space because the consumer reaches an endpoint with an address from its own VPC, so no route to the remote network exists and the duplicate range never has to be resolved. Both VPC peering and Transit Gateway require unique, non-overlapping CIDRs and reject or misroute overlapping prefixes regardless of route table design. A Site-to-Site VPN carries traffic but performs no address translation of its own, so the overlap remains.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html",
    tags: ["PrivateLink", "Overlapping CIDR", "Networking", "Acquisition"]
  },
  {
    id: "aws-sap-29",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Delegating Security Tooling Away From the Management Account",
    scenario: "A security team operates Amazon GuardDuty, AWS Security Hub, and Amazon Macie for an organization. Company policy states that the management account must run no workloads and be used only for account and billing operations, yet the security team needs organization-wide control of these services.",
    question: "How should the security services be administered?",
    options: [
      { id: 'A', text: "Register the security account as the delegated administrator for each service from the management account, and enable auto-enrollment for new accounts." },
      { id: 'B', text: "Grant the security team a cross-account role into the management account carrying the administrative permissions for the three services." },
      { id: 'C', text: "Enable each service independently in every member account and aggregate the findings into the security account using Amazon EventBridge rules and a central event bus." },
      { id: 'D', text: "Invite every member account to the security account using each service's manual membership invitation flow, then accept the invitations from each member." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Delegated administration is the mechanism built for this split: the management account nominates the security account once per service, after which that account manages configuration, auto-enablement for new accounts, and findings organization-wide without any workload or standing access in the management account. A cross-account role into the management account keeps the privilege exactly where policy says it should not be. Per-account enablement with EventBridge aggregation gives visibility but no central configuration or auto-enrollment. Manual invitations do not scale and leave new accounts unmanaged until someone remembers them.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html",
    tags: ["GuardDuty", "Security Hub", "Delegated Administrator", "Organizations"]
  },
  {
    id: "aws-sap-30",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Reusing a Licence-Bound AMI Across Accounts",
    scenario: "A platform team builds a hardened Amazon Machine Image monthly and needs every account in the organization to launch from the current version without copying the image into each account or being able to launch a retired version.",
    question: "Which service distributes the image and controls which version is usable?",
    options: [
      { id: 'A', text: "EC2 Image Builder, distributing the image and sharing it with the organization through an AWS Resource Access Manager share." },
      { id: 'B', text: "AWS Service Catalog, publishing the image as a portfolio product shared with each organizational unit in the organization." },
      { id: 'C', text: "AWS Systems Manager Parameter Store, holding the current image id in a parameter that each account's launch template reads at run time." },
      { id: 'D', text: "AWS Backup, copying the image into a backup vault that is shared with every account through a vault access policy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "EC2 Image Builder owns the build pipeline and its distribution settings share the resulting image with the organization, and deprecating or removing an older image from the share stops it being launched, which is exactly the version control asked for. Service Catalog governs which products a user may provision but does not build or version the image itself. A Parameter Store parameter publishes the current image id yet places no restriction on launching an older one. AWS Backup protects existing resources and does not distribute a golden image.",
    referenceUrl: "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html",
    tags: ["EC2 Image Builder", "AMI", "Resource Access Manager", "Multi-Account"]
  },
  {
    id: "aws-sap-31",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Preventing Deletion of Security Controls",
    scenario: "A compliance mandate says that CloudTrail trails, AWS Config recorders, and the organization's GuardDuty detectors must never be disabled by anyone in a member account, including an administrator who holds the AdministratorAccess policy in that account.",
    question: "Which control enforces this?",
    options: [
      { id: 'A', text: "A service control policy attached above the member accounts that denies the stop, delete, and disable actions for those three services." },
      { id: 'B', text: "An AWS Config conformance pack that detects a disabled recorder or trail and raises a Security Hub finding routed to the on-call security engineer." },
      { id: 'C', text: "An IAM policy attached to every group in the member accounts that denies the stop, delete, and disable actions for the three services named in the mandate." },
      { id: 'D', text: "An Amazon EventBridge rule on the disable API calls that invokes a Lambda function to re-enable the affected resource." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A service control policy sets the permission ceiling for a member account, so a denied action is unavailable even to a principal holding AdministratorAccess, which is the precise requirement. A conformance pack detects the change after it has already happened. An IAM policy on groups is inside the account and can be detached by the very administrator it is meant to constrain. An EventBridge remediation loop leaves a window during which logging is off and can itself be disabled from the account.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
    tags: ["SCP", "CloudTrail", "AWS Config", "Compliance"]
  },
  {
    id: "aws-sap-32",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Between Provisioned and On-Demand Throughput",
    scenario: "A new Amazon DynamoDB table backs a ticketing system. Traffic is negligible for weeks, then a sale drives an unpredictable spike that can be 200 times the baseline within seconds. The team cannot forecast the peak and does not want throttled writes during the sale.",
    question: "Which capacity configuration is appropriate?",
    options: [
      { id: 'A', text: "On-demand capacity mode, which serves double the previous peak immediately and needs no forecast of the sale traffic." },
      { id: 'B', text: "Provisioned capacity mode with auto scaling configured between a low minimum and a high maximum, and a target utilization of 70 percent." },
      { id: 'C', text: "Provisioned capacity mode sized to a forecast peak, with reserved capacity bought in advance for the idle weeks." },
      { id: 'D', text: "Provisioned capacity mode at the baseline with a DynamoDB Accelerator cluster in front of the table to absorb the additional write throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "On-demand mode requires no forecast, scales instantly to sustained traffic and can serve double the previous peak immediately, which matches an unpredictable 200-fold spike, and it costs nothing beyond requests during the quiet weeks. Provisioned auto scaling reacts to CloudWatch metrics over minutes, so a spike arriving in seconds is throttled while it catches up. Sizing to the peak pays for that capacity continuously, and reserved capacity deepens rather than removes that commitment. DAX is a read cache and does not absorb writes.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html",
    tags: ["DynamoDB", "On-Demand", "Scalability", "Capacity"]
  },
  {
    id: "aws-sap-33",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Shared Storage for a Linux Rendering Farm",
    scenario: "A studio is designing a rendering farm of several hundred Linux EC2 instances that must all read and write the same working directory concurrently, with throughput scaling as instances are added and no capacity planning for the file system itself.",
    question: "Which storage service fits the access pattern?",
    options: [
      { id: 'A', text: "Amazon EFS in Elastic Throughput mode, mounted over NFS concurrently by every instance in the rendering farm." },
      { id: 'B', text: "Amazon EBS io2 Block Express volumes with Multi-Attach enabled so several instances share one volume." },
      { id: 'C', text: "Amazon S3 accessed through Mountpoint for Amazon S3 on every rendering instance so objects appear as a local file system path." },
      { id: 'D', text: "Amazon FSx for Lustre linked to an S3 bucket as its durable repository and mounted by every instance in the rendering farm." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "EFS is a fully managed, multi-attach NFS file system that grows and shrinks automatically, and Elastic Throughput scales performance with demand with no provisioning, matching both the concurrency and the no-capacity-planning requirement. EBS Multi-Attach supports only up to 16 instances in one Availability Zone and requires a cluster-aware file system. Mountpoint for Amazon S3 does not support the random writes and renames a working directory needs. FSx for Lustre is the right shape for high-performance computing but requires choosing a deployment type and provisioning capacity, which the requirement rules out.",
    referenceUrl: "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html",
    tags: ["EFS", "Shared Storage", "NFS", "Scalability"]
  },
  {
    id: "aws-sap-34",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Meeting a Zero Data Loss Requirement for Ingestion",
    scenario: "A telemetry platform ingests device readings through Amazon API Gateway into AWS Lambda, which writes to Amazon Timestream. During a recent Timestream throttling event, Lambda retried twice and then dropped the readings. The business states that no reading may ever be lost.",
    question: "Which change guarantees the readings survive a downstream failure?",
    options: [
      { id: 'A', text: "Have API Gateway put each reading onto an Amazon Kinesis data stream, and have Lambda consume from the stream with an on-failure destination." },
      { id: 'B', text: "Increase the Lambda function timeout and the maximum retry attempts, and add exponential backoff with jitter around the Timestream write call." },
      { id: 'C', text: "Raise the reserved concurrency on the Lambda function so more invocations run in parallel and the retries complete before the event expires." },
      { id: 'D', text: "Enable Amazon API Gateway caching on the ingestion resource so repeated readings are served from the cache while Timestream recovers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Durability requires a buffer that holds the reading independently of the consumer, and a Kinesis data stream retains records for at least 24 hours, so a throttled consumer simply resumes from its checkpoint, while an on-failure destination captures any record that still cannot be processed. Longer timeouts, more retries, and backoff all improve the odds but still discard the event once attempts are exhausted. Reserved concurrency changes parallelism, which worsens throttling downstream rather than protecting data. API Gateway caching serves reads and does nothing for an ingestion write path.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/introduction.html",
    tags: ["Kinesis", "Lambda", "Durability", "Event-Driven"]
  },
  {
    id: "aws-sap-35",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Static Private Addressing Behind a Load Balancer",
    scenario: "A partner integration requires that outbound calls from a new service arrive from a fixed set of IP addresses that the partner will allow-list, and that inbound calls from the partner reach the service on stable addresses too. The service runs on Amazon ECS behind a load balancer.",
    question: "Which design provides stable addresses in both directions?",
    options: [
      { id: 'A', text: "Use a Network Load Balancer with an Elastic IP address per subnet for inbound traffic, and route outbound traffic through NAT gateways with Elastic IP addresses." },
      { id: 'B', text: "Use an Application Load Balancer for inbound traffic and publish the addresses that its DNS name resolves to at the time the partner builds their allow-list." },
      { id: 'C', text: "Use an Application Load Balancer for inbound traffic and assign an Elastic IP address to each ECS task so outbound calls originate from a known set." },
      { id: 'D', text: "Use a Gateway Load Balancer for inbound traffic and route outbound traffic through an internet gateway with a fixed prefix list attached." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Network Load Balancer is the only Elastic Load Balancing type that accepts an Elastic IP address per subnet, giving fixed inbound addresses, and a NAT gateway with an Elastic IP gives every outbound call a fixed source, so both directions are stable. An Application Load Balancer's addresses change as it scales, so a snapshot of its resolved addresses breaks silently. Elastic IP addresses cannot be attached to ECS tasks. A Gateway Load Balancer is a transparent appliance insertion mechanism rather than an application entry point, and an internet gateway performs no source address consolidation.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html",
    tags: ["Network Load Balancer", "Elastic IP", "NAT Gateway", "Networking"]
  },
  {
    id: "aws-sap-36",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Enforcing Encryption Context on a Shared Key",
    scenario: "A multi-tenant service encrypts each tenant's records with one AWS KMS customer managed key. A design review finds that a bug in the service could decrypt tenant A's record while handling a request for tenant B, because every call uses the same key and no other check exists.",
    question: "Which KMS feature prevents cross-tenant decryption?",
    options: [
      { id: 'A', text: "Require a tenant-specific encryption context and condition the key policy on kms:EncryptionContext for the tenant id." },
      { id: 'B', text: "Enable automatic annual key rotation on the customer managed key so a compromised key version cannot decrypt newer tenant records." },
      { id: 'C', text: "Switch the service to envelope encryption with a data key cached per request, using the same customer managed key to wrap every data key." },
      { id: 'D', text: "Replace the customer managed key with an AWS managed key so that decrypt permissions follow the calling service rather than the tenant." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Encryption context is additional authenticated data bound into the ciphertext, so a decrypt call must supply exactly the same context that encrypted the record, and the kms:EncryptionContext condition key lets the key policy require the tenant id to match the caller. Key rotation changes the backing key material while old versions remain usable for old ciphertext, so it does not separate tenants. Envelope encryption improves performance and blast radius but still wraps every data key with the same key and no per-tenant assertion. An AWS managed key removes the ability to write a key policy at all.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html",
    tags: ["KMS", "Encryption Context", "Multi-Tenancy", "Security"]
  },
  {
    id: "aws-sap-37",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Running a Licensed Workload on Dedicated Hardware",
    scenario: "An enterprise resource planning vendor licenses its software per physical socket and requires that the software run on hardware not shared with other customers, with the same physical host used after every stop and start so the licence stays valid.",
    question: "Which EC2 tenancy option satisfies the licensing terms?",
    options: [
      { id: 'A', text: "Dedicated Hosts, which expose the physical sockets and cores and let an instance be launched onto the same host each time." },
      { id: 'B', text: "Dedicated Instances, which run on hardware dedicated to a single AWS account but may land on different physical hosts after a stop and start." },
      { id: 'C', text: "Default shared tenancy combined with a placement group configured in cluster mode so the instances stay on closely located physical hardware." },
      { id: 'D', text: "A bare metal instance type such as m5.metal launched into the default shared tenancy of the account's production VPC subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Dedicated Host gives visibility of the physical sockets and cores that socket-based licensing is counted against, and host affinity pins an instance to the same host across stop and start, which is what keeps the licence valid. Dedicated Instances isolate at the account level but expose no socket or core detail and may move hosts. A cluster placement group affects network proximity, not tenancy, and leaves the hardware shared. A metal instance gives full hardware access but under default tenancy provides no host affinity guarantee or socket reporting for licence tracking.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
    tags: ["Dedicated Hosts", "EC2", "Licensing", "Tenancy"]
  },
  {
    id: "aws-sap-38",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Analytics on Data That Must Not Leave the Account",
    scenario: "A healthcare company wants a partner to run analytical queries over a curated dataset. Regulatory rules state that the underlying records must never be copied out of the company's AWS account, while the partner needs to query the data from their own account with their own tools.",
    question: "Which service supports this sharing model?",
    options: [
      { id: 'A', text: "AWS Lake Formation cross-account data sharing, granting the partner account permissions on specific tables and columns of the curated dataset." },
      { id: 'B', text: "An Amazon S3 bucket policy granting the partner account read access to the curated prefix, with default encryption applied to every object." },
      { id: 'C', text: "An AWS Glue crawler run in the partner account against the curated prefix so the partner builds an equivalent catalogue over the same data." },
      { id: 'D', text: "Amazon S3 Cross-Region Replication into a bucket owned by the partner account with a replication rule scoped to the curated prefix." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lake Formation grants table, column, and row-level permissions to another account and brokers every query through its own credential vending, so the partner queries in place with their own engines and never receives a copy of the records. A plain bucket policy grants object reads, which lets the partner download the files. A crawler in the partner account still requires that read access and produces only a catalogue. Cross-Region Replication deliberately creates a second copy in the partner's account, which is precisely what the regulation forbids.",
    referenceUrl: "https://docs.aws.amazon.com/lake-formation/latest/dg/cross-account-permissions.html",
    tags: ["Lake Formation", "Data Sharing", "Governance", "Analytics"]
  },
  {
    id: "aws-sap-39",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Picking a Route 53 Routing Policy for Gradual Release",
    scenario: "A team wants to send 5 percent of production traffic to a new version of a public API running behind a second load balancer, then increase the share over two weeks while both versions remain healthy and reachable at the same hostname.",
    question: "Which Route 53 routing policy expresses this?",
    options: [
      { id: 'A', text: "Weighted routing, with a record for each load balancer and the weight on each adjusted as the share moves." },
      { id: 'B', text: "Latency-based routing, with one record per Region so that each client is sent to whichever endpoint currently answers fastest from their location." },
      { id: 'C', text: "Failover routing, with the new version configured as the secondary record so it receives traffic only when the primary health check reports unhealthy." },
      { id: 'D', text: "Geolocation routing, with a few countries directed to the new version and the rest to the existing one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Weighted routing distributes traffic between records in proportion to the weights assigned, so setting 95 and 5 and then shifting the numbers is a direct expression of a gradual rollout at one hostname. Latency-based routing chooses on client proximity and gives no control over the split. Failover sends nothing to the secondary while the primary is healthy, so the new version would receive no traffic at all. Geolocation splits by where the request originates, which couples the rollout percentage to country traffic volumes rather than letting it be set.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-weighted.html",
    tags: ["Route 53", "Weighted Routing", "Deployment", "DNS"]
  },
  {
    id: "aws-sap-40",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Lambda Cold Starts on a Latency-Sensitive Path",
    scenario: "A Java AWS Lambda function behind Amazon API Gateway serves a checkout endpoint. p50 latency is 40 ms but p99 reaches 3 seconds because of initialization on cold invocations. Traffic is predictable, rising each weekday morning and falling overnight.",
    question: "Which change reduces the p99 latency most directly?",
    options: [
      { id: 'A', text: "Configure provisioned concurrency on the published function alias and use Application Auto Scaling to raise it before the weekday morning rise." },
      { id: 'B', text: "Raise the memory allocated to the function, which proportionally increases the CPU available during the initialization phase of each execution environment." },
      { id: 'C', text: "Move the function into a VPC with an interface endpoint so that initialization no longer waits on network address translation through the NAT gateway." },
      { id: 'D', text: "Enable Amazon API Gateway response caching on the checkout resource with a time to live matched to the length of a typical customer session." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provisioned concurrency keeps execution environments initialized and ready, so requests do not pay the initialization cost at all, and scheduling it against a predictable weekday curve keeps the cost proportionate. More memory shortens initialization but does not remove it, so the p99 improves only partly. Putting a function in a VPC adds configuration without addressing runtime initialization, and modern Lambda VPC networking is not the bottleneck described. Caching a checkout response is incorrect behaviour for a write path and would serve stale results.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html",
    tags: ["Lambda", "Provisioned Concurrency", "Performance", "Serverless"]
  },
  {
    id: "aws-sap-41",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Diagnosing Uneven Load Across Kinesis Shards",
    scenario: "An Amazon Kinesis data stream with 40 shards shows three shards at their write limit while the rest sit near idle. Producers report WriteThroughputExceeded errors even though aggregate throughput is well under the stream's provisioned capacity.",
    question: "What is the most likely cause and the correct remedy?",
    options: [
      { id: 'A', text: "The partition key has low cardinality, so the fix is to choose a higher-cardinality key that spreads records across shards." },
      { id: 'B', text: "The stream has too few shards for the aggregate write volume, so the fix is to reshard the stream by splitting every shard once." },
      { id: 'C', text: "The consumers are not using enhanced fan-out, so the fix is to register each consumer for its own dedicated read throughput per shard." },
      { id: 'D', text: "The producers batch too aggressively, so the fix is to reduce the record aggregation window used by the Kinesis Producer Library." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kinesis hashes the partition key to choose a shard, so a key with few distinct values concentrates records onto a handful of shards regardless of how many exist, which produces exactly this pattern of hot shards alongside idle ones at low aggregate throughput. Adding shards by splitting does not help because the same key still hashes into the same small set. Enhanced fan-out addresses read contention, and the errors described are on the write path. Producer aggregation reduces request count and would, if anything, ease rather than cause the write limit.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html",
    tags: ["Kinesis", "Partition Key", "Hot Shard", "Performance"]
  },
  {
    id: "aws-sap-42",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Trimming the Cost of an Idle Development Fleet",
    scenario: "A development account runs 120 EC2 instances for engineers who work weekday business hours in one time zone. Billing shows the fleet running continuously. Engineers must be able to start their own instance outside those hours when needed.",
    question: "Which approach cuts the cost while preserving engineer control?",
    options: [
      { id: 'A', text: "Schedule an AWS Systems Manager Automation runbook to stop the tagged instances each evening and start them each weekday morning." },
      { id: 'B', text: "Move the development fleet onto Spot Instances so that the hours outside the working day are billed at the lower interruption-tolerant rate." },
      { id: 'C', text: "Purchase one-year Compute Savings Plans covering the whole development fleet so that the continuously running hours are discounted." },
      { id: 'D', text: "Replace the instances with an Amazon EC2 Auto Scaling group whose desired capacity tracks the average CPU utilization of the fleet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stopped instances incur no instance-hour charge, so a scheduled stop and start against a tag removes roughly two-thirds of the weekly cost while leaving any engineer free to start their own instance on demand. Spot changes the rate but the instances still run continuously and can be interrupted mid-session. A Savings Plan discounts hours that should not be consumed at all, locking in the waste. An Auto Scaling group sized on CPU does not map to per-engineer development instances, which must persist with their own state.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Systems Manager", "Cost Optimization", "EC2", "Automation"]
  },
  {
    id: "aws-sap-43",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing Cross-Zone Data Transfer Charges",
    scenario: "A chatty microservices application on Amazon EKS spans three Availability Zones. The bill shows a large and growing inter-Availability Zone data transfer line. Availability requirements mean the workload must remain spread across all three zones.",
    question: "Which change reduces the transfer charge without sacrificing zone redundancy?",
    options: [
      { id: 'A', text: "Enable topology aware routing so Kubernetes services prefer endpoints in the caller's own Availability Zone." },
      { id: 'B', text: "Consolidate the workload into a single Availability Zone and rely on rapid redeployment into another zone if that zone becomes unavailable." },
      { id: 'C', text: "Replace the internal Application Load Balancers between services with a Network Load Balancer that has cross-zone load balancing enabled." },
      { id: 'D', text: "Move the inter-service calls onto an Amazon SQS queue so traffic is billed as queue requests rather than as inter-zone data transfer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Topology aware routing keeps service-to-service traffic inside the calling pod's zone when healthy endpoints exist there, which removes most of the cross-zone hops while every zone still runs replicas, so redundancy is untouched. Consolidating into one zone trades away exactly the availability the requirement protects. Enabling cross-zone load balancing increases rather than reduces inter-zone traffic by design. Routing through SQS adds latency and its own charges while the messages still cross zones.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/eks-optimize-cost-data-transfer.html",
    tags: ["EKS", "Data Transfer", "Cost Optimization", "Networking"]
  },
  {
    id: "aws-sap-44",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Detecting Drift in Infrastructure as Code",
    scenario: "A platform team deploys with AWS CloudFormation, but engineers occasionally change resources in the console during incidents. The team needs to know, across many stacks and accounts, which resources no longer match their template definition.",
    question: "Which capability reports these differences?",
    options: [
      { id: 'A', text: "CloudFormation drift detection, run against the stacks and reported per resource with the properties that differ." },
      { id: 'B', text: "AWS Config with the managed rule for CloudFormation stack drift, evaluating each stack on a schedule." },
      { id: 'C', text: "AWS CloudTrail Insights, which highlights unusual write API activity so that console changes made during an incident stand out from normal deployments." },
      { id: 'D', text: "AWS Resource Explorer, which indexes resources across Regions and accounts so their current properties can be compared against the templates by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Drift detection is the native mechanism: it compares each supported resource's live configuration against the template and reports MODIFIED, DELETED, or IN_SYNC with the specific properties that differ. The AWS Config managed rule is a legitimate way to run that same detection continuously, but it invokes CloudFormation drift detection underneath rather than being a separate capability, and it reports only stack-level compliance. CloudTrail Insights flags anomalous API volume, not configuration divergence. Resource Explorer finds resources but performs no comparison against a template.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html",
    tags: ["CloudFormation", "Drift Detection", "Infrastructure as Code", "Governance"]
  },
  {
    id: "aws-sap-45",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Right-Sizing an Over-Provisioned Fleet",
    scenario: "A company suspects its 600 EC2 instances are larger than the workloads need, but nobody wants to guess. Leadership wants recommendations grounded in observed utilization, including the projected saving and the performance risk of each downsize.",
    question: "Which service produces that analysis?",
    options: [
      { id: 'A', text: "AWS Compute Optimizer, which rates each instance and recommends a target type from observed utilization with a performance risk rating." },
      { id: 'B', text: "AWS Cost Explorer's rightsizing recommendations page, which lists idle and underutilized instances together with the estimated monthly saving for each." },
      { id: 'C', text: "Amazon CloudWatch Container Insights, which collects performance metrics and produces dashboards summarizing resource utilization for the compute fleet." },
      { id: 'D', text: "AWS Trusted Advisor's cost optimization checks, which report low-utilization instances against fixed thresholds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Compute Optimizer analyses CloudWatch history with machine learning, classifies each instance as under-provisioned, over-provisioned, or optimized, and returns specific recommended types with projected utilization and a performance risk rating, which is the grounded analysis asked for. Cost Explorer's rightsizing view is genuinely useful but is derived from Compute Optimizer and surfaces a narrower set focused on savings. Container Insights reports container metrics rather than instance sizing. Trusted Advisor applies fixed thresholds and offers no recommended target type or risk rating.",
    referenceUrl: "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html",
    tags: ["Compute Optimizer", "Right-Sizing", "Cost Optimization", "EC2"]
  },
  {
    id: "aws-sap-46",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Cutting Over a Chatty Application in Waves",
    scenario: "A migration moves 200 servers in waves. Applications in a wave talk constantly to servers not yet migrated, and the team must avoid a period where half an application sits on each side of the link with heavy traffic crossing it.",
    question: "Which planning practice most reduces that risk?",
    options: [
      { id: 'A', text: "Group servers into waves by the network dependencies observed during discovery so that each wave moves a whole application together." },
      { id: 'B', text: "Increase the AWS Direct Connect circuit capacity before the migration so the traffic crossing between the two environments during each wave is not constrained." },
      { id: 'C', text: "Migrate the servers in order of decreasing size so the largest and busiest machines are moved first while the migration team has the most time available." },
      { id: 'D', text: "Move every database server in the first wave so the application tiers can migrate independently afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dependency-based wave planning, using the network data gathered during discovery, keeps tightly coupled components together so an application never straddles the link, which removes the latency and bandwidth problem rather than accommodating it. Adding circuit capacity treats the symptom and does nothing about the added round-trip latency. Ordering by machine size ignores coupling entirely and can split an application. Moving all databases first maximizes the split, because every application tier then talks across the link until its own wave lands.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-portfolio-discovery/welcome.html",
    tags: ["Migration", "Wave Planning", "Dependencies", "Cutover"]
  },
  {
    id: "aws-sap-47",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Modernizing a Monolith Without a Rewrite",
    scenario: "A company runs a large monolithic application and wants to extract functionality incrementally into new services. The existing entry points must keep working unchanged for clients while individual paths are redirected to new implementations one at a time.",
    question: "Which pattern supports this incremental extraction?",
    options: [
      { id: 'A', text: "The strangler fig pattern, with a routing facade in front of the monolith that redirects selected paths to new services." },
      { id: 'B', text: "The bulkhead pattern, isolating the monolith's resource pools from each other so that a failure in one part of the application cannot exhaust the others." },
      { id: 'C', text: "The circuit breaker pattern, stopping calls to a failing dependency for a cool-off period so the caller degrades gracefully instead of queueing requests." },
      { id: 'D', text: "The saga pattern, coordinating a business transaction across services with compensating actions on failure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The strangler fig pattern puts a routing facade in front of the monolith so individual paths can be redirected to new services as they are built, leaving client-facing entry points untouched until the monolith is eventually empty. Bulkhead, circuit breaker, and saga are all sound distributed-systems patterns, but they address fault isolation, dependency failure handling, and distributed transaction consistency respectively; none of them provides a route for incrementally extracting functionality from an existing application.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/strangler-fig.html",
    tags: ["Strangler Fig", "Modernization", "Microservices", "Patterns"]
  },
  {
    id: "aws-sap-48",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Migrating a Windows File Server Estate",
    scenario: "A company must move 12 TB of Windows file shares to AWS. Users authenticate with Active Directory, applications rely on SMB and NTFS access control lists, and Distributed File System namespaces must continue to work after the move.",
    question: "Which target service preserves these characteristics?",
    options: [
      { id: 'A', text: "Amazon FSx for Windows File Server joined to the existing Active Directory domain, preserving SMB and NTFS semantics." },
      { id: 'B', text: "Amazon Elastic File System with an AWS Directory Service integration so that the existing Active Directory identities continue to map onto file ownership." },
      { id: 'C', text: "Amazon S3 with the AWS Storage Gateway file interface presenting the migrated shares over SMB." },
      { id: 'D', text: "Amazon FSx for NetApp ONTAP configured with a Windows security style volume and a multi-protocol export for the remaining application servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FSx for Windows File Server runs Windows Server underneath, so SMB, NTFS access control lists, Active Directory authentication, shadow copies, and DFS namespaces all behave as they did on premises. EFS is NFS only and has no NTFS access control list or DFS support. File Gateway serves SMB but stores objects in S3 and does not provide DFS namespaces or full NTFS semantics. FSx for NetApp ONTAP does support SMB and Windows security style and is a reasonable alternative, but it introduces ONTAP administration for an estate that needs no multi-protocol access, making the Windows-native service the better fit.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html",
    tags: ["FSx for Windows", "SMB", "Active Directory", "Migration"]
  },
  {
    id: "aws-sap-49",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Replicating Servers With Minimal Source Impact",
    scenario: "A team must rehost 150 physical and virtual Linux and Windows servers into AWS. The source environment cannot tolerate reboots during business hours, and the team wants to test each migrated server in an isolated subnet before the real cutover.",
    question: "Which service supports continuous replication and non-disruptive testing?",
    options: [
      { id: 'A', text: "AWS Application Migration Service, which replicates continuously and launches test instances without affecting replication." },
      { id: 'B', text: "AWS Elastic Disaster Recovery, which continuously replicates source servers into a staging area for recovery after an outage event is declared." },
      { id: 'C', text: "VM Import/Export, which imports a virtual machine image file from the source environment and produces an Amazon Machine Image ready for launch." },
      { id: 'D', text: "AWS Backup, which takes scheduled backups of the source servers and restores them into the target account when the cutover window opens." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Application Migration Service installs a block-level replication agent, keeps a staging area continuously in sync with no reboot required until cutover, and its test launch creates instances in a chosen subnet while replication carries on, which is exactly the rehearsal the team wants. Elastic Disaster Recovery uses the same underlying technology but is positioned and priced for ongoing recovery rather than a one-time migration. VM Import/Export works on a point-in-time image and offers no continuous replication. AWS Backup protects resources already in AWS rather than replicating on-premises servers.",
    referenceUrl: "https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html",
    tags: ["Application Migration Service", "Rehost", "Migration", "Testing"]
  },
  {
    id: "aws-sap-50",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Reducing Licence Cost When Moving Windows Workloads",
    scenario: "A company moving Windows Server and SQL Server workloads to AWS already owns licences with Software Assurance and wants to use them on AWS rather than paying for licence-included instances, while tracking consumption against the entitlement it owns.",
    question: "Which capability supports this?",
    options: [
      { id: 'A', text: "AWS License Manager, enforcing the bring-your-own-licence rules at launch and tracking consumption against Dedicated Hosts." },
      { id: 'B', text: "AWS Systems Manager Inventory, collecting the installed software on each managed node so the licensing team can reconcile consumption against the entitlement." },
      { id: 'C', text: "AWS Config, recording the configuration of each instance over time so that changes affecting licence consumption can be reviewed against the entitlement." },
      { id: 'D', text: "AWS Marketplace, buying licence-included instances so consumption is metered hourly on the bill." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "License Manager holds the licensing rules for owned entitlements, enforces them at launch, and reports consumption, and bring-your-own-licence for Windows Server and SQL Server generally requires Dedicated Hosts, which License Manager allocates and tracks. Systems Manager Inventory lists installed software but enforces nothing and understands no entitlement. AWS Config records configuration history rather than licence consumption. Buying licence-included offerings from Marketplace is the opposite of the goal, since the company wants to use licences it already owns.",
    referenceUrl: "https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html",
    tags: ["License Manager", "BYOL", "Dedicated Hosts", "Migration"]
  }
];

export default AWS_SAP_QUESTIONS;
