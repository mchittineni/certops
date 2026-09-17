export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-126",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Emergency Access When Federation Is Unavailable",
    scenario: "All human access to 90 accounts runs through IAM Identity Center federated to an external provider. During a provider outage nobody could reach the console to respond to an unrelated incident. The team needs a documented emergency path.",
    question: "Which break-glass design is appropriate?",
    options: [
      { id: 'A', text: "Keep a small number of IAM users in a dedicated account with hardware multi-factor devices held in a safe, monitored by a CloudTrail alarm that fires on any use of them." },
      { id: 'B', text: "Record the root user credentials for each of the 90 member accounts in a password vault that the on-call engineers can reach during a federation outage." },
      { id: 'C', text: "Configure a second external identity provider in IAM Identity Center as a fallback and switch the instance over when the primary provider is unavailable." },
      { id: 'D', text: "Grant each engineer a long-lived IAM access key in every account, used only when the federated login path cannot be reached." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A small, tightly scoped set of break-glass principals that do not depend on the federation path, protected by hardware factors under physical control and alarmed so any use is noticed immediately, is the documented pattern. Root credentials for 90 accounts is the widest possible blast radius and root should be locked away rather than routinely reachable. IAM Identity Center supports one external identity provider per instance, so a standby provider is not a configuration that exists. Long-lived keys for every engineer in every account multiplies standing credentials, which is the risk federation removed.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/break-glass-access.html",
    tags: ["Break-Glass", "IAM Identity Center", "Resilience", "Security"]
  },
  {
    id: "aws-sap-127",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Serving Many Accounts From One Data Lake",
    scenario: "A central analytics account owns a data lake in Amazon S3 registered with AWS Lake Formation. Twelve business unit accounts each need access to different tables, and the analytics team wants to grant access without copying data or writing bucket policies per team.",
    question: "Which sharing mechanism fits?",
    options: [
      { id: 'A', text: "Grant Lake Formation permissions on named databases, tables, and columns directly to each business unit account, which then sub-grants to its own principals as required." },
      { id: 'B', text: "Add each business unit account as a principal in the data lake bucket's policy and grant it read access to the S3 prefixes that hold the tables it needs." },
      { id: 'C', text: "Create a cross-account IAM role in the analytics account per business unit and have each unit's users assume the role matching their permitted tables." },
      { id: 'D', text: "Replicate each table's underlying objects into a bucket owned by the business unit account that needs it, refreshed on a nightly schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Lake Formation cross-account grants work at the catalogue level with table and column granularity, and the receiving account's data lake administrator sub-grants to its own users, so the analytics team manages one grant per consumer rather than bucket policies or roles. Bucket policies operate on prefixes and cannot express column-level permission or integrate with the catalogue. Per-unit cross-account roles push every user into the analytics account and multiply role management. Replicating objects creates twelve copies, which is the duplication the requirement rules out.",
    referenceUrl: "https://docs.aws.amazon.com/lake-formation/latest/dg/cross-account-permissions.html",
    tags: ["Lake Formation", "Data Lake", "Cross-Account", "Governance"]
  },
  {
    id: "aws-sap-128",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Routing Between On-Premises Sites Through AWS",
    scenario: "A company has two data centres, each with its own Direct Connect connection into the same Region, attached to a Transit Gateway. The sites currently reach each other over an expensive private circuit that the network team wants to retire.",
    question: "What allows the two sites to communicate through AWS?",
    options: [
      { id: 'A', text: "Associate both Direct Connect gateway attachments with the Transit Gateway and allow the prefixes of each site to propagate to the other." },
      { id: 'B', text: "Create a VPC peering connection between the VPCs that each site reaches, and add routes on both sides pointing at the peering connection." },
      { id: 'C', text: "Configure a transit virtual interface on each connection terminating directly on a virtual private gateway shared by both of the data centre sites." },
      { id: 'D', text: "Enable AWS Global Accelerator with an endpoint group in the Region so the two sites route to each other through the AWS edge network." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Transit Gateway routes between its attachments, so with both sites attached through Direct Connect gateways and their prefixes propagated into a shared route table, site-to-site traffic transits AWS and the private circuit can be retired. VPC peering is non-transitive and connects VPCs rather than on-premises networks. A virtual private gateway attaches to a single VPC and cannot route between two on-premises sites. Global Accelerator improves the path for traffic reaching AWS-hosted endpoints and is not a site-to-site routing mechanism.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-dcg-attachments.html",
    tags: ["Transit Gateway", "Direct Connect", "Routing", "Hybrid"]
  },
  {
    id: "aws-sap-129",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Quota Exhaustion Discovered During an Incident",
    scenario: "A scaling event failed because the account hit its running On-Demand vCPU quota. Nobody knew the limit was close. The platform team wants early warning across 60 accounts rather than discovering each ceiling during the next incident.",
    question: "Which approach gives advance warning of approaching quotas?",
    options: [
      { id: 'A', text: "Create CloudWatch alarms on the Service Quotas usage metrics and manage the quota requests centrally through Service Quotas templates for new accounts." },
      { id: 'B', text: "Review the Trusted Advisor service limits check monthly in each account and raise a support case for any resource that appears close to its limit." },
      { id: 'C', text: "Set AWS Budgets actions on the compute spend in each account so that approaching the budget signals that the account is also approaching its quotas." },
      { id: 'D', text: "Request the maximum available quota for every service in every account at onboarding so that no workload can encounter a ceiling in future." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service Quotas publishes usage metrics to CloudWatch for supported quotas, so an alarm at a percentage of the applied value gives warning before the ceiling is reached, and quota request templates apply desired increases automatically to new accounts. The Trusted Advisor check is useful but a monthly manual review across 60 accounts is slow and easily skipped. Budgets track spend, which correlates loosely with quota consumption and would miss a quota reached without unusual cost. Quotas are not all raisable to an arbitrary maximum and blanket requests are routinely declined.",
    referenceUrl: "https://docs.aws.amazon.com/servicequotas/latest/userguide/configure-cloudwatch.html",
    tags: ["Service Quotas", "CloudWatch", "Operations", "Multi-Account"]
  },
  {
    id: "aws-sap-130",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Detecting Publicly Exposed Resources",
    scenario: "A security team must know within minutes whenever an S3 bucket, KMS key, IAM role, or SQS queue in any of 70 accounts becomes reachable by a principal outside the organization, without writing custom policy parsing.",
    question: "Which service reports this?",
    options: [
      { id: 'A', text: "IAM Access Analyzer with the organization as the zone of trust, delegated to the security account." },
      { id: 'B', text: "Amazon Macie, which discovers sensitive data in S3 buckets and reports the buckets whose configuration allows access from outside the organization boundary." },
      { id: 'C', text: "AWS Config with a conformance pack whose rules evaluate resource policies in each account and mark any policy granting external access as non-compliant." },
      { id: 'D', text: "Amazon GuardDuty, which analyses CloudTrail and DNS activity for suspicious access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Access Analyzer uses automated reasoning over resource policies to determine whether access is possible from outside a defined zone of trust, supports the organization as that zone, and generates a finding per exposed resource across the supported types with no policy parsing to write. Macie classifies sensitive data and covers only S3. A conformance pack would require exactly the custom policy evaluation being avoided and cannot reason about all policy combinations. GuardDuty detects suspicious activity that has occurred rather than proving that exposure is possible.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer", "External Access", "Security", "Organizations"]
  },
  {
    id: "aws-sap-131",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Where a Shared Services VPC Belongs",
    scenario: "An organization is designing its account structure. Directory services, certificate authorities, and monitoring collectors are used by every workload account and are operated by the platform team rather than any application team.",
    question: "Where should these shared components live?",
    options: [
      { id: 'A', text: "In a dedicated shared services account, reached by workload accounts through Transit Gateway attachments and Resource Access Manager shares from the platform team." },
      { id: 'B', text: "In the organization's management account, since it already exists in every organization and is operated by the platform team that owns these components." },
      { id: 'C', text: "In the production workload account, because the majority of traffic to these components originates from production applications rather than from other environments." },
      { id: 'D', text: "Duplicated into each workload account so that no account depends on another and a failure in one account cannot affect the others." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A dedicated shared services account gives the platform team a clear ownership and billing boundary, keeps blast radius separate from any workload, and is reached through network attachments and resource shares. The management account should run no workloads, because it cannot be constrained by service control policies and holds organization-wide privilege. Putting shared components in production couples every other environment to production's change and outage windows. Duplicating them into every account multiplies operational cost and configuration drift.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/recommended-accounts.html",
    tags: ["Account Structure", "Shared Services", "Landing Zone", "Governance"]
  },
  {
    id: "aws-sap-132",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Exactly-Once Side Effects From an At-Least-Once Stream",
    scenario: "A payments consumer reads from a Kinesis data stream. The stream guarantees at-least-once delivery, so a retry after a partial failure can charge a customer twice. The team cannot change the upstream producer.",
    question: "Which consumer design prevents the duplicate charge?",
    options: [
      { id: 'A', text: "Write an idempotency record keyed by the payment id conditionally in DynamoDB before charging, so a replay finds the record and skips." },
      { id: 'B', text: "Increase the checkpoint frequency so that the consumer records its position after every record and a restart therefore resumes at the next unprocessed record." },
      { id: 'C', text: "Wrap the charge and the checkpoint in a database transaction so both commit together or neither does." },
      { id: 'D', text: "Enable enhanced fan-out on the stream so each consumer receives its own dedicated throughput and records are not redelivered to it after a failure." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because the delivery guarantee cannot be changed, exactly-once must be achieved at the effect rather than the transport, and a conditional write on a natural idempotency key makes the second attempt a no-op. More frequent checkpointing narrows the replay window but a failure between the charge and the checkpoint still duplicates. A transaction cannot span the external payment call and the stream checkpoint, which live in different systems. Enhanced fan-out changes read throughput and has no effect on redelivery semantics.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-duplicates.html",
    tags: ["Kinesis", "Idempotency", "Exactly-Once", "Event-Driven"]
  },
  {
    id: "aws-sap-133",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Storage for a Machine Learning Training Set",
    scenario: "A training job on a GPU cluster reads the same 8 TB dataset repeatedly across many epochs. The data lives in Amazon S3, and profiling shows the GPUs idle waiting for input during each epoch.",
    question: "Which storage change removes the input bottleneck?",
    options: [
      { id: 'A', text: "Use Amazon FSx for Lustre linked to the S3 bucket as its data repository." },
      { id: 'B', text: "Copy the dataset onto an Amazon EBS gp3 volume attached to each training instance so that reads are served locally rather than over the network." },
      { id: 'C', text: "Mount the bucket with Mountpoint for Amazon S3 on every training node so the objects appear as files and are read directly through the file interface." },
      { id: 'D', text: "Move the dataset to Amazon EFS in Max I/O performance mode so every training node reads the same file system concurrently across the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FSx for Lustre is the high-performance parallel file system built for this pattern: it links to the bucket, loads the data once, and serves it to many nodes at hundreds of gigabytes per second, which is what keeps GPUs fed across repeated epochs. Copying to per-instance EBS volumes duplicates 8 TB per node and cannot be shared. Mountpoint reads straight from S3, so the same object latency that causes the idling remains. EFS in Max I/O raises throughput but its per-operation latency is much higher than Lustre and it is not designed for this access pattern.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html",
    tags: ["FSx for Lustre", "Machine Learning", "Performance", "Storage"]
  },
  {
    id: "aws-sap-134",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Giving Mobile Clients Scoped Access to One Prefix",
    scenario: "A mobile application lets each signed-in user upload photos. Every user must read and write only their own folder inside one S3 bucket, and the design must work for millions of users without an IAM principal per person.",
    question: "Which authorization approach scales to this?",
    options: [
      { id: 'A', text: "Use Amazon Cognito identity pools to vend temporary credentials whose role policy scopes S3 access with the cognito-identity.amazonaws.com:sub variable." },
      { id: 'B', text: "Create an IAM user for each signed-in application user with an inline policy naming that user's own prefix inside the shared photo bucket." },
      { id: 'C', text: "Have the application server generate a presigned URL for each upload and download after checking that the requested key belongs to the signed-in user." },
      { id: 'D', text: "Apply a bucket policy that grants access to the authenticated user group and rely on the application to request only the keys within the current user's folder." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Identity pools issue short-lived credentials per identity, and a policy variable substituting the identity id into the resource ARN produces per-user isolation from one role, so the design scales to millions with no per-user principal. IAM users are limited to a few thousand per account and are the per-person principal the requirement excludes. Presigned URLs work and are a reasonable pattern, but every read and write must pass through the server to be signed, which the direct-to-S3 design is avoiding. A bucket policy granting a whole group with enforcement left to the client provides no isolation at all.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/iam-roles.html",
    tags: ["Cognito", "S3", "IAM Policy Variables", "Mobile"]
  },
  {
    id: "aws-sap-135",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Surviving the Loss of a Single Availability Zone",
    scenario: "An architect reviews a three-zone deployment sized so that all three zones are needed to carry peak traffic. Leadership believes the system tolerates a zone failure because it spans three zones.",
    question: "What must change for the claim to hold?",
    options: [
      { id: 'A', text: "Provision enough capacity in each zone that the remaining two can carry peak load, which usually means running at about 50 percent utilization per zone at peak." },
      { id: 'B', text: "Add a fourth Availability Zone to the deployment so that the loss of any single zone removes a smaller proportion of the total capacity available at peak." },
      { id: 'C', text: "Configure the Auto Scaling group to rebalance instances across the surviving zones as soon as the failure is detected by the health checks." },
      { id: 'D', text: "Enable cross-zone load balancing so that requests are distributed evenly across all healthy targets regardless of the zone they are running in." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Spanning zones provides no tolerance unless spare capacity exists to absorb the lost zone's share, so each zone must be provisioned with enough headroom that the survivors carry peak, which is roughly half utilization in a three-zone design. A fourth zone reduces the fraction lost and is a valid refinement, but without headroom the remaining three are still short. Rebalancing and scaling after the event take minutes during which the system is overloaded, and capacity in the surviving zones may not be immediately available. Cross-zone load balancing spreads requests but creates no additional capacity.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/advanced-multi-az-resilience-patterns/static-stability.html",
    tags: ["Static Stability", "Multi-AZ", "Resilience", "Capacity"]
  },
  {
    id: "aws-sap-136",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing an API Front Door for a Public Service",
    scenario: "A team is building a public REST API needing per-client rate limiting, usage plans with API keys, request validation, and the ability to run a canary release against a small share of traffic without managing servers.",
    question: "Which front door provides these capabilities natively?",
    options: [
      { id: 'A', text: "Amazon API Gateway REST APIs with usage plans and stage canary settings." },
      { id: 'B', text: "An Application Load Balancer with weighted target groups and AWS WAF rate-based rules attached to the listener to limit each client's request rate." },
      { id: 'C', text: "Amazon API Gateway HTTP APIs, which are cheaper and faster but require the team to implement usage plans and request validation in the integration itself." },
      { id: 'D', text: "Amazon CloudFront with Lambda@Edge functions implementing the key checks, request validation, and traffic splitting at the edge locations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "REST APIs are the API Gateway flavour that carries usage plans and API keys, request and response validation against models, and per-stage canary settings with a configurable traffic percentage, so every requirement is configuration rather than code. An Application Load Balancer with WAF can rate limit by address but has no concept of API keys or usage plans, and weighted target groups need the team to manage targets. HTTP APIs deliberately omit usage plans and validation. CloudFront with edge functions can be made to do this, but every capability becomes code the team writes and operates.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html",
    tags: ["API Gateway", "Usage Plans", "Canary", "Serverless"]
  },
  {
    id: "aws-sap-137",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Selecting a Consistency Model for a Booking System",
    scenario: "A seat booking service must never sell the same seat twice. Reads that inform the seat map may lag slightly, but the write that claims a seat must observe the current state of that seat at the moment it commits.",
    question: "Which DynamoDB technique guarantees the claim is safe?",
    options: [
      { id: 'A', text: "A conditional write asserting the seat is still unclaimed." },
      { id: 'B', text: "A strongly consistent read of the seat item immediately before issuing the write that claims it for the requesting customer." },
      { id: 'C', text: "A transactional write grouping the seat claim together with the booking record so both of the items are committed atomically." },
      { id: 'D', text: "A global secondary index on the seat status attribute queried before the claim so only seats currently marked as available are offered." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A conditional expression is evaluated atomically by the service at write time, so two concurrent claims cannot both succeed and the loser receives a condition failure. A strongly consistent read followed by a write leaves a gap in which another request can claim the seat, which is the classic race. A transactional write does make several items atomic and is the right tool when the booking spans items, but without a condition on the seat's state it still overwrites a claim made a moment earlier. A global secondary index is eventually consistent and only informs what is offered.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html",
    tags: ["DynamoDB", "Conditional Writes", "Concurrency", "Consistency"]
  },
  {
    id: "aws-sap-138",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Isolating a Lambda Function That Needs Internet Access",
    scenario: "A Lambda function must reach a partner's public HTTPS API from a known static source address the partner will allow-list, and must also query an Amazon RDS instance in a private subnet of the company's VPC.",
    question: "Which configuration satisfies both requirements?",
    options: [
      { id: 'A', text: "Attach the function to private subnets and route those subnets to a NAT gateway holding an Elastic IP address." },
      { id: 'B', text: "Attach the function to public subnets and assign it an Elastic IP address so that its outbound calls to the partner originate from that fixed address." },
      { id: 'C', text: "Leave the function outside the VPC and reach the database through an RDS Proxy endpoint that is published to the internet for the function to call." },
      { id: 'D', text: "Attach the function to private subnets and create an interface VPC endpoint for the partner's API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A VPC-attached function reaches the RDS instance privately, and because its elastic network interfaces have no public address its internet-bound traffic must leave through a NAT gateway, whose Elastic IP becomes the stable source the partner allow-lists. A Lambda function in a public subnet still has no public address of its own, so it gets no internet path. Publishing RDS Proxy to the internet exposes the database tier and the partner call would still come from a changing address. An interface endpoint reaches AWS and PrivateLink partner services, not an arbitrary public API.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/foundation-networking.html",
    tags: ["Lambda", "VPC", "NAT Gateway", "Networking"]
  },
  {
    id: "aws-sap-139",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Connection Exhaustion Under Serverless Scale",
    scenario: "A Lambda function connects directly to Amazon RDS for PostgreSQL. Under load the function scales to hundreds of concurrent executions and the database rejects connections once it reaches max_connections, even though CPU on the database stays moderate.",
    question: "Which change resolves the connection pressure?",
    options: [
      { id: 'A', text: "Put Amazon RDS Proxy between the function and the database so connections are pooled and reused." },
      { id: 'B', text: "Raise the max_connections parameter in the database parameter group so that the instance accepts the number of connections that the function opens at peak." },
      { id: 'C', text: "Move the connection setup outside the handler so it is reused across invocations." },
      { id: 'D', text: "Increase the function's memory setting so each invocation completes faster and therefore holds its database connection open for a shorter period of time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "RDS Proxy maintains a warm pool of database connections and multiplexes many client connections onto far fewer database ones, which is the purpose-built answer to serverless connection storms. Raising max_connections consumes memory per connection and moves the failure to memory exhaustion rather than removing it. Hoisting the connection out of the handler is correct practice and helps, but each concurrent execution environment still holds its own connection, so hundreds of them still exhaust the limit. More memory shortens the hold time without reducing peak concurrency.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
    tags: ["RDS Proxy", "Lambda", "Connection Pooling", "Databases"]
  },
  {
    id: "aws-sap-140",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Backfilling a Metric Nobody Recorded",
    scenario: "After an incident the team wants to know how many requests returned a particular application error code over the previous month. The application wrote the code into its CloudWatch Logs lines but never emitted a metric for it.",
    question: "How can the historical figure be obtained?",
    options: [
      { id: 'A', text: "Run a CloudWatch Logs Insights query over the retained log group for the period in question." },
      { id: 'B', text: "Create a metric filter on the log group matching the error code, which will populate the metric with the historical values from the retained log events." },
      { id: 'C', text: "Enable CloudWatch Contributor Insights on the log group and rank the top contributors." },
      { id: 'D', text: "Restore the log group from an AWS Backup recovery point taken before the incident and re-ingest the events so the metric is generated as they arrive." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Logs Insights queries the log events that are already retained, so a filter and count over the month returns the historical figure immediately. A metric filter only evaluates events ingested after it is created, so it cannot populate history, which is the common misconception this question tests. Contributor Insights likewise builds its reports from data going forward. AWS Backup does not protect CloudWatch log groups, and re-ingesting events would create duplicates rather than a correct historical count.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html",
    tags: ["CloudWatch Logs Insights", "Metric Filters", "Observability", "Troubleshooting"]
  },
  {
    id: "aws-sap-141",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing the Cost of Cross-Region Replication",
    scenario: "A team replicates every object in a 200 TB bucket to a second Region for disaster recovery. Analysis shows 85 percent of the objects are never read again after 30 days, yet all of them are replicated and stored in S3 Standard at the destination.",
    question: "Which change reduces cost while preserving the recovery capability?",
    options: [
      { id: 'A', text: "Set the replication rule's destination storage class to S3 Standard-IA and add a destination lifecycle rule transitioning older objects to Glacier." },
      { id: 'B', text: "Restrict the replication rule with a prefix or tag filter so that only the 15 percent of objects which are read after 30 days are replicated at all." },
      { id: 'C', text: "Replace replication with a scheduled AWS DataSync task that copies the changed objects to the destination bucket once every night." },
      { id: 'D', text: "Enable S3 Intelligent-Tiering on the source bucket so that the objects replicated to the destination inherit the tier chosen at the source." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replication lets the destination storage class be set independently, so the disaster recovery copy can land directly in a cheaper tier and age into archive storage, which cuts cost while every object remains recoverable. Filtering out 85 percent of objects saves more but abandons the recovery objective for most of the data. A nightly DataSync task loses the near-real-time recovery point that replication provides. Intelligent-Tiering must be configured on the destination to affect destination cost, because the replica does not inherit the source's storage class decisions.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-and-other-bucket-configs.html",
    tags: ["S3 Replication", "Storage Classes", "Cost Optimization", "Disaster Recovery"]
  },
  {
    id: "aws-sap-142",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "An Auto Scaling Group That Keeps Replacing Instances",
    scenario: "An Auto Scaling group behind an Application Load Balancer continuously terminates and launches instances. The application takes about four minutes to warm up before it answers requests, and the group is configured with ELB health checks.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The health check grace period is shorter than the application's warm-up time, so instances are marked unhealthy before they can serve." },
      { id: 'B', text: "The load balancer's target group deregistration delay is longer than the warm-up time, so connections are drained from instances before those instances become healthy." },
      { id: 'C', text: "The scaling policy's cooldown period is too short, so the group launches replacements faster than the application starts." },
      { id: 'D', text: "The launch template references an instance type without enough memory, so the application fails during startup and the group replaces the failed instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "With ELB health checks, the grace period defines how long after launch the group ignores health status; if it is shorter than the four-minute warm-up, every new instance is judged unhealthy and terminated, producing exactly this replacement loop. The deregistration delay governs how long draining takes when an instance is removed and cannot mark a healthy instance unhealthy. A short cooldown affects how quickly scaling actions follow one another rather than health evaluation. An undersized instance type would show application errors in the logs, and the scenario describes a warm-up period rather than a failure.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html",
    tags: ["Auto Scaling", "Health Checks", "Troubleshooting", "Load Balancing"]
  },
  {
    id: "aws-sap-143",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Shortening a Slow Redshift Dashboard",
    scenario: "An Amazon Redshift cluster backs an executive dashboard. The same handful of aggregate queries run hundreds of times a day over a large fact table, and each takes 40 seconds while ad hoc analyst queries are queued behind them.",
    question: "Which change improves dashboard response most?",
    options: [
      { id: 'A', text: "Create materialized views for the dashboard aggregates and let Redshift rewrite the queries to use them." },
      { id: 'B', text: "Resize the cluster to add more compute nodes so that each of the dashboard's aggregate queries is executed in parallel across additional slices." },
      { id: 'C', text: "Enable concurrency scaling on the cluster so that the queued analyst queries are routed to additional transient clusters during busy periods." },
      { id: 'D', text: "Change the fact table's distribution style to ALL so every node holds a full copy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Materialized views precompute the aggregate once and refresh incrementally, so hundreds of repeated executions become cheap reads and the automatic rewrite means the dashboard's SQL need not change. Adding nodes shortens each run proportionally but still recomputes the same aggregate hundreds of times. Concurrency scaling relieves the queueing symptom for analysts without making the dashboard queries themselves faster. An ALL distribution style on a large fact table replicates it to every node, which is expensive in storage and slows loads considerably.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/dg/materialized-view-overview.html",
    tags: ["Redshift", "Materialized Views", "Performance", "Analytics"]
  },
  {
    id: "aws-sap-144",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Preventing a Repeat of an Expensive Mistake",
    scenario: "An engineer launched 40 large GPU instances for a test and forgot to stop them, costing several thousand dollars over a weekend. Leadership wants a control that limits the damage of a similar mistake without blocking legitimate GPU work.",
    question: "Which control best bounds the exposure?",
    options: [
      { id: 'A', text: "Configure an AWS Budgets action that applies a restrictive policy or stops the tagged instances when the account's spend crosses a threshold." },
      { id: 'B', text: "Apply a service control policy denying the launch of GPU instance families in the account so that an engineer cannot repeat the same mistake in future." },
      { id: 'C', text: "Lower the account's service quota for GPU instance types so that no more than a small number of them can be running at any one time in the account." },
      { id: 'D', text: "Create a CloudWatch billing alarm that emails the finance team when estimated month-to-date charges exceed the expected amount." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Budgets action converts a spend threshold into an enforcement step, applying a restrictive policy or stopping tagged instances automatically, which bounds the loss without a human in the loop while legitimate work below the threshold is untouched. A service control policy denying GPU families blocks the legitimate use the requirement protects. A quota reduction is a reasonable partial control but caps capacity rather than cost and needs raising whenever real work needs more. A billing alarm only notifies, and a weekend is exactly when nobody reads the notification.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-controls.html",
    tags: ["AWS Budgets", "Cost Control", "Guardrails", "Governance"]
  },
  {
    id: "aws-sap-145",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Migrating an Application With a Tight Latency Budget",
    scenario: "An order capture application must stay within 5 ms of a trading system that will remain on premises for two more years. Migrating the application to a Region would add 12 ms each way, which breaks the budget.",
    question: "Which option lets the application move now?",
    options: [
      { id: 'A', text: "Deploy the application on an AWS Outposts rack installed in the same data centre as the trading system." },
      { id: 'B', text: "Deploy the application into an AWS Local Zone in the nearest metropolitan area and connect it to the data centre with a dedicated Direct Connect connection." },
      { id: 'C', text: "Deploy the application into the Region and use AWS Global Accelerator so that the traffic between it and the trading system travels over the AWS backbone." },
      { id: 'D', text: "Deploy the application into the Region and cache repeated lookups in Amazon ElastiCache." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Outposts places AWS infrastructure in the customer's own data centre, so the application sits on the same local network as the trading system and the latency budget is met while the team uses familiar AWS APIs. A Local Zone reduces the distance but is still tens of kilometres away and typically lands in the single-digit to low-double-digit millisecond range, which is too close to the budget to be safe. Global Accelerator improves the path into AWS but cannot remove the physical distance. Caching helps repeated reads but order capture involves writes that must reach the trading system.",
    referenceUrl: "https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html",
    tags: ["Outposts", "Latency", "Hybrid", "Migration"]
  },
  {
    id: "aws-sap-146",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Converting Virtual Machine Images Into AMIs",
    scenario: "A team has 25 golden virtual machine images in OVA format from its on-premises hypervisor. They want these available as Amazon Machine Images so existing provisioning pipelines can launch from them, with no running source servers involved.",
    question: "Which service performs this conversion?",
    options: [
      { id: 'A', text: "VM Import/Export, importing each OVA from Amazon S3 as an AMI." },
      { id: 'B', text: "AWS Application Migration Service, installing its replication agent on each source virtual machine so the image is continuously replicated into the target account." },
      { id: 'C', text: "EC2 Image Builder, defining an image recipe with the required components so that an equivalent image is rebuilt from a base image inside AWS." },
      { id: 'D', text: "AWS Elastic Disaster Recovery, replicating each of the source virtual machines into a staging area from which an Amazon Machine Image can be produced." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VM Import/Export is the service for converting an existing image file: the OVA is uploaded to S3 and imported, producing an AMI without any running source server. Application Migration Service and Elastic Disaster Recovery both replicate from live servers through an agent, which the scenario explicitly excludes. EC2 Image Builder rebuilds an image from a base and a recipe, which is a good long-term practice but does not convert the existing golden images the team already has.",
    referenceUrl: "https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html",
    tags: ["VM Import/Export", "AMI", "Migration", "Images"]
  },
  {
    id: "aws-sap-147",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Modernizing Session State During a Lift and Shift",
    scenario: "A web application stores session state in memory on each server, so a load balancer must use sticky sessions and losing a server logs those users out. The team is rehosting to EC2 and wants to remove this constraint with a small change.",
    question: "Which change removes the server affinity requirement?",
    options: [
      { id: 'A', text: "Move session state into an ElastiCache for Redis cluster shared by every application server." },
      { id: 'B', text: "Store the session state in an Amazon DynamoDB table with a time to live attribute and rewrite the application's session handling to read and write items." },
      { id: 'C', text: "Enable sticky sessions with a longer cookie duration on the load balancer." },
      { id: 'D', text: "Store the session state in an Amazon EFS file system mounted by every application server so that any server is able to read another server's session files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Externalizing session state to a shared in-memory store makes every server interchangeable, which removes stickiness and survives the loss of a server, and most web frameworks support a Redis session provider through configuration rather than code. DynamoDB with a time to live attribute is also a sound external session store and is a legitimate alternative, but it typically requires rewriting session handling, which is more than the small change described. Longer stickiness entrenches the problem. EFS gives shared storage but file-based session locking performs poorly and adds latency to every request.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-use-cases.html",
    tags: ["ElastiCache", "Session State", "Modernization", "Stateless"]
  },
  {
    id: "aws-sap-148",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Sizing the Target for a Database With Spiky Load",
    scenario: "A database being migrated shows 8 vCPUs of steady load with brief peaks to 40 vCPUs a few times a week. The team wants to avoid provisioning for the peak continuously but cannot tolerate throttling or manual resizing during a spike.",
    question: "Which Amazon Aurora configuration matches the profile?",
    options: [
      { id: 'A', text: "Aurora Serverless v2, with the capacity range set to span the steady load and the peak." },
      { id: 'B', text: "A provisioned Aurora instance sized for the steady load, with a reader added manually before each anticipated peak and removed once the peak has passed." },
      { id: 'C', text: "A provisioned Aurora instance sized for the peak load so that the spikes are absorbed without any scaling action being required during them." },
      { id: 'D', text: "Aurora Serverless v1, which pauses when idle and resumes automatically when the next connection arrives from the application during a peak." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Aurora Serverless v2 scales capacity in fine increments within a configured range in seconds and without dropping connections, so the cluster tracks a spiky profile without provisioning for the peak or anyone intervening. Adding and removing readers by hand is the manual resizing the requirement excludes and readers do not help a write-bound spike. Provisioning for the peak wastes roughly 80 percent of the capacity most of the time. Serverless v1 scales in coarse steps at capacity change points and its pause and resume behaviour introduces delays unsuited to this workload.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html",
    tags: ["Aurora Serverless v2", "Right-Sizing", "Migration", "Databases"]
  },
  {
    id: "aws-sap-149",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Deciding What Not to Migrate",
    scenario: "Discovery finds 120 servers. Analysis shows 18 have had no network traffic and no logins for six months, and no application owner recognizes them. The migration budget is fixed and the data centre closes in a year.",
    question: "Which strategy applies to these 18 servers?",
    options: [
      { id: 'A', text: "Retire them after a confirmation period, since migrating unused servers spends budget on capacity nobody consumes." },
      { id: 'B', text: "Rehost them onto the smallest available EC2 instance types so that they remain available in case an owner is identified after the data centre has closed." },
      { id: 'C', text: "Retain them in the data centre until an owner comes forward, extending the facility contract for the servers whose purpose has not yet been established." },
      { id: 'D', text: "Replatform them onto managed services so their ongoing operational cost falls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retire is one of the 7 Rs and typically applies to 10 to 20 percent of an estate; servers with no traffic, no logins, and no owner are the clearest candidates, and a confirmation period such as shutting them down before decommissioning guards against a mistake. Rehosting them spends migration effort and ongoing cost on unused capacity. Retaining them requires extending the facility that is closing, which is the outcome the programme exists to avoid. Replatforming is the most expensive option and cannot be justified for a workload nobody uses.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
    tags: ["Migration Strategies", "Retire", "7 Rs", "Portfolio"]
  },
  {
    id: "aws-sap-150",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Keeping File Permissions Through a Migration",
    scenario: "A migration must move 20 TB from an on-premises NFS export into Amazon EFS. POSIX ownership, group membership, and modification timestamps must be preserved exactly, and the transfer needs to be verified afterwards.",
    question: "Which transfer service meets these requirements?",
    options: [
      { id: 'A', text: "AWS DataSync, which preserves POSIX metadata and verifies the transferred data." },
      { id: 'B', text: "The AWS CLI sync command run from an EC2 instance that mounts both the source export and the target EFS file system during the copy window." },
      { id: 'C', text: "AWS Transfer Family with an SFTP endpoint, moving the files into the target file system through the managed file transfer protocol server." },
      { id: 'D', text: "AWS Storage Gateway in file mode, presenting the target as a local NFS mount that the team copies the source export into over the network." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataSync preserves POSIX ownership, permissions, and timestamps by design, runs a verification pass comparing source and destination, and handles parallelism and retries for a 20 TB transfer. The CLI sync command is built for object storage semantics and does not reliably carry POSIX metadata between file systems. Transfer Family exposes protocol endpoints for exchanging files with external parties rather than performing a bulk migration. A file gateway backs its mount with S3 objects, so it targets the wrong destination for an EFS migration.",
    referenceUrl: "https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html",
    tags: ["DataSync", "EFS", "POSIX", "Migration"]
  }
];

export default AWS_SAP_QUESTIONS;
