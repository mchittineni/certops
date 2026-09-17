export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-351",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Preventing Data Leaving Through a Copied Snapshot",
    scenario: "A security review finds that any account administrator can share an RDS snapshot with an external AWS account, exporting the whole database. The company needs this path closed without blocking legitimate internal snapshot sharing.",
    question: "Which control closes the external path?",
    options: [
      { id: 'A', text: "A service control policy denying rds:ModifyDBSnapshotAttribute when the values being added are not accounts within the organization itself." },
      { id: 'B', text: "An AWS Config rule reporting any RDS snapshot whose attributes list an account outside the organization so the security team can remove the share." },
      { id: 'C', text: "A KMS key policy on the snapshot encryption key denying use by principals outside the organization so an external account cannot decrypt the snapshot." },
      { id: 'D', text: "An IAM policy on every administrator role denying the snapshot sharing actions, applied consistently across each of the accounts in the organization." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A service control policy conditioned on the accounts being added blocks the external share at the API call while internal sharing continues, and it applies to every principal in the member account including root. A Config rule reports a share that has already exposed the data. A restrictive key policy is a strong second layer and stops an encrypted snapshot being read, but unencrypted snapshots bypass it entirely. IAM policies on administrator roles can be detached by those same administrators.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html",
    tags: ["RDS", "SCP", "Data Perimeter", "Security"]
  },
  {
    id: "aws-sap-352",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Choosing How to Run a Shared CI Platform",
    scenario: "A platform team runs build infrastructure used by 30 product teams. Builds occasionally need elevated AWS permissions to deploy, and the team must ensure one product's build cannot assume another product's deployment role.",
    question: "Which isolation approach is soundest?",
    options: [
      { id: 'A', text: "Give each product a deployment role whose trust policy names only that product's build identity and scopes the condition to its own repository and branch." },
      { id: 'B', text: "Run every build under one shared deployment role that carries the union of the permissions all of the products require to deploy their own workloads." },
      { id: 'C', text: "Run each product's builds on dedicated build agents so that the builds are physically separated and cannot interfere with one another during execution." },
      { id: 'D', text: "Store each product's deployment credentials in Secrets Manager and grant the build platform access to retrieve whichever secret the build requires." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolation comes from the trust relationship: a role that only trusts a specific build identity and repository cannot be assumed by another product's pipeline regardless of what that pipeline attempts. A shared role holding the union of permissions means any build can deploy anything. Dedicated agents separate execution but say nothing about which role a build may assume. Storing credentials in a secret reintroduces long-lived credentials and relies on the build platform enforcing which secret each build may read.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html",
    tags: ["IAM", "CI/CD", "Trust Policy", "Isolation"]
  },
  {
    id: "aws-sap-353",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Reducing the Cost of Cross-Account Log Aggregation",
    scenario: "Every account writes VPC flow logs to its own S3 bucket, and a nightly job copies them into a central analytics bucket. The copy costs significant data transfer and the duplicate storage doubles the retention cost.",
    question: "Which change removes the duplication?",
    options: [
      { id: 'A', text: "Configure the flow logs in each account to deliver directly to the central bucket, with a bucket policy allowing those accounts to write to it directly." },
      { id: 'B', text: "Replicate each account's bucket into the central account using S3 Cross-Region Replication so the copy is managed by the service rather than a nightly job." },
      { id: 'C', text: "Keep the per-account buckets and register them in the central account's Glue Data Catalog so Athena queries them in place without any copy being made." },
      { id: 'D', text: "Reduce the retention on the per-account buckets to one day so the duplicate storage cost falls while the nightly copy continues to populate the central bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flow logs can be delivered straight to a bucket in another account when its policy permits, so the intermediate bucket, the nightly job, and the duplicate storage all disappear at once. Replication is managed but still creates and pays for two copies. Cataloguing the per-account buckets avoids the copy and is a reasonable alternative, but it leaves logs spread across dozens of buckets with their own lifecycle and permissions to manage. Shorter retention on the source reduces cost without removing the copy job or the transfer.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html",
    tags: ["VPC Flow Logs", "S3", "Cost Optimization", "Multi-Account"]
  },
  {
    id: "aws-sap-354",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Designing Around a Shared Service That Cannot Scale",
    scenario: "A shared authentication service in one account is called by every workload across the organization. It has become the single dependency whose failure takes everything down, and its owners cannot scale it further.",
    question: "Which architectural change most reduces the organization's exposure?",
    options: [
      { id: 'A', text: "Have callers validate signed tokens locally and cache the signing keys, so a brief outage of the service does not stop request processing while traffic continues." },
      { id: 'B', text: "Deploy the authentication service into every Region so that callers reach a local instance and the failure of one Region affects only the workloads in it." },
      { id: 'C', text: "Place an Amazon ElastiCache cluster in front of the authentication service so that repeated validation requests are served from the cache rather than the service." },
      { id: 'D', text: "Add a circuit breaker in every caller so that calls to the authentication service stop when it begins failing and the callers degrade gracefully instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The exposure comes from a synchronous dependency in every request path, and local validation of signed tokens against cached public keys removes that call entirely, so the service is needed only to issue tokens and to rotate keys rather than on every request. Regional deployment reduces blast radius but keeps the per-request dependency. A cache in front helps throughput while remaining a shared component whose failure still blocks callers. A circuit breaker prevents cascading failure but a caller that cannot authenticate still cannot serve.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/security-overview-amazon-cognito/token-validation.html",
    tags: ["Authentication", "Blast Radius", "Resilience", "Architecture"]
  },
  {
    id: "aws-sap-355",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Setting Up Cost Anomaly Detection That Teams Trust",
    scenario: "Cost anomaly alerts fire constantly for expected variation such as month-end batch runs, so teams have begun ignoring them, and a genuine runaway cost went unnoticed for a week as a result.",
    question: "Which configuration change makes the alerts trustworthy?",
    options: [
      { id: 'A', text: "Scope monitors to individual services or cost allocation tags and set thresholds on absolute and percentage impact together." },
      { id: 'B', text: "Raise the alert threshold on the existing account-wide monitor so that only the largest anomalies produce a notification to the teams that own the workloads." },
      { id: 'C', text: "Route the anomaly alerts to a shared mailbox reviewed by the FinOps team so that engineering teams are not notified until an anomaly has been triaged." },
      { id: 'D', text: "Replace anomaly detection with AWS Budgets configured per team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Account-wide monitors learn a baseline that mixes every workload, so expected month-end variation looks anomalous; scoping monitors to a service or a tagged team lets the baseline reflect that workload's own pattern, and requiring both an absolute and a percentage impact suppresses alerts that are proportionally large but financially trivial. Raising the threshold on a noisy monitor loses the smaller genuine anomalies. Routing through a mailbox adds latency and a manual step. Budgets are complementary but need a known expected amount, which varies by design here.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/getting-started-ad.html",
    tags: ["Cost Anomaly Detection", "FinOps", "Alerting", "Governance"]
  },
  {
    id: "aws-sap-356",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Recognizing What Belongs in the Security Account",
    scenario: "A landing zone design places several capabilities in a dedicated security account. An engineer asks which of the organization's functions should live there rather than in the log archive or shared services accounts.",
    question: "Which belongs in the security account?",
    options: [
      { id: 'A', text: "The delegated administrator for GuardDuty, Security Hub, and IAM Access Analyzer, plus the incident response tooling." },
      { id: 'B', text: "The organization's CloudTrail and AWS Config delivery buckets, retained with Object Lock so the evidence cannot be altered by any workload account." },
      { id: 'C', text: "The shared Active Directory, private certificate authority, and monitoring collectors." },
      { id: 'D', text: "The organization's management account functions, including account creation, service control policy administration, and consolidated billing configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The security account is where security operations run: delegated administration of the detection services, aggregated findings, and the tooling responders use, kept separate from both the immutable evidence and the shared infrastructure. Log delivery buckets belong in a separate log archive account so that even the security team's account compromise does not reach the evidence. Directory services and certificate authorities are shared services. Account creation and policy administration stay in the management account.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/security-ou-and-accounts.html",
    tags: ["Landing Zone", "Security Account", "Account Structure", "Governance"]
  },
  {
    id: "aws-sap-357",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing Around an Eventually Consistent Read",
    scenario: "A service writes an item then immediately reads it back through a global secondary index to build its response. Occasionally the read returns nothing and the response is wrong, though the item is present a moment later.",
    question: "Which change removes the error?",
    options: [
      { id: 'A', text: "Return the values the service already holds from the write rather than reading them back through the index." },
      { id: 'B', text: "Perform the read-back as a strongly consistent read on the global secondary index so that the item is always visible immediately after the write." },
      { id: 'C', text: "Add a short delay between the write and the read so that the index has time to be updated before the service attempts to read the item back." },
      { id: 'D', text: "Retry the read with exponential backoff until the item appears." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The service already has every value it just wrote, so reading them back is unnecessary work that introduces a consistency dependency; returning what it holds removes the failure entirely and is faster. Global secondary indexes do not support strongly consistent reads at all, so that option cannot be configured. A fixed delay is a guess that slows every request and still fails under load. Retrying works but adds latency and complexity to compensate for a read that should not happen.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html",
    tags: ["DynamoDB", "Global Secondary Index", "Consistency", "Design"]
  },
  {
    id: "aws-sap-358",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing a Pattern for Multi-Step File Processing",
    scenario: "Uploaded files must be virus scanned, converted, thumbnailed, and indexed. Steps have different runtimes and failure characteristics, some fail transiently, and the team needs to know where any given file stopped.",
    question: "Which design provides visibility and per-step retry?",
    options: [
      { id: 'A', text: "A Step Functions workflow per file with a state for each step, its own retry policy, and execution history." },
      { id: 'B', text: "A chain of SQS queues with one consumer per step, where each consumer writes to the next queue when it has finished processing the file it received." },
      { id: 'C', text: "An SNS topic fanning the upload event out to four Lambda functions." },
      { id: 'D', text: "A single Lambda function performing the four steps in sequence so that the whole pipeline for a file completes within one invocation of the function." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A state machine per file makes the pipeline explicit: each step has its own retry and error handling, and the execution history shows exactly which state a file reached and why it stopped. A chain of queues works and decouples the steps well, but the overall progress of a file is spread across four queues with no single place to see it. Fanning out with SNS runs the steps in parallel, which breaks the required ordering. One function doing everything loses all progress on failure and risks the timeout.",
    referenceUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html",
    tags: ["Step Functions", "Orchestration", "Retry", "Visibility"]
  },
  {
    id: "aws-sap-359",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing for a Predictable Daily Batch Window",
    scenario: "A batch process must complete within a three-hour overnight window. It is embarrassingly parallel across 50,000 independent work items, each taking about a minute, and the team wants the lowest cost that meets the window.",
    question: "Which compute approach meets the deadline most cheaply?",
    options: [
      { id: 'A', text: "AWS Batch on a Spot-backed compute environment with a diversified instance type selection, sized to finish inside the window." },
      { id: 'B', text: "An Amazon EC2 Auto Scaling group of On-Demand Instances scaled on queue depth so that capacity tracks the remaining work through the overnight window." },
      { id: 'C', text: "AWS Lambda invoked once per work item so that the whole batch runs with no capacity planning and the team pays only for the execution time consumed." },
      { id: 'D', text: "A single large Amazon EC2 instance running the work items in parallel threads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The work is interruption-tolerant and highly parallel, which is the ideal Spot profile, and AWS Batch handles queueing, scaling, and retries while diversifying across instance types to reduce interruption risk, so the window is met at the lowest price. An On-Demand Auto Scaling group meets the window but costs several times more. Lambda would work and needs no planning, but 50,000 invocations of a minute each is more expensive than Spot compute for sustained throughput. One large instance cannot deliver 50,000 minutes of work in three hours.",
    referenceUrl: "https://docs.aws.amazon.com/batch/latest/userguide/spot_fleet_IAM_role.html",
    tags: ["AWS Batch", "Spot Instances", "Batch Processing", "Cost Optimization"]
  },
  {
    id: "aws-sap-360",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Selecting a Strategy for Very Large Uploads",
    scenario: "Users upload files of up to 500 GB from unreliable networks. Uploads frequently fail near completion and must restart from the beginning, and the application servers currently receive the bytes before writing them to storage.",
    question: "Which upload design addresses both problems?",
    options: [
      { id: 'A', text: "Have clients upload directly to Amazon S3 with multipart upload and presigned URLs, retrying only the failed parts." },
      { id: 'B', text: "Have clients upload to the application servers over a resumable protocol." },
      { id: 'C', text: "Have clients upload directly to Amazon S3 using S3 Transfer Acceleration so the transfer travels over the optimized AWS network path and fails less often." },
      { id: 'D', text: "Have clients split each file themselves and upload the pieces as separate objects, with a background job in the application reassembling them afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Multipart upload divides the object into independently retried parts, so a network failure costs one part rather than the whole transfer, and presigned URLs let the client write straight to S3 so the application servers never carry the bytes. A resumable protocol terminating on the servers keeps them in the data path, which is the bottleneck being removed. Transfer Acceleration improves throughput over distance but a failure still restarts the whole upload unless multipart is used. Client-side splitting reimplements multipart upload badly and needs a reassembly job.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html",
    tags: ["S3", "Multipart Upload", "Presigned URLs", "Design"]
  },
  {
    id: "aws-sap-361",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing How to Expose Internal Metrics Safely",
    scenario: "A team wants a public status page showing service health. The underlying metrics live in CloudWatch, and the security team will not permit the status page to hold credentials that can read the monitoring account.",
    question: "Which design publishes the status safely?",
    options: [
      { id: 'A', text: "Export a summarized status document to a public S3 bucket on a schedule and have the status page read only that document." },
      { id: 'B', text: "Give the status page a read-only IAM role scoped to the specific CloudWatch metrics it displays so it queries them directly when a visitor loads the page." },
      { id: 'C', text: "Publish a CloudWatch dashboard with public sharing enabled so that visitors view the metrics directly without the status page holding any credentials at all." },
      { id: 'D', text: "Place Amazon API Gateway in front of the CloudWatch API with anonymous access." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pushing a derived, summarized document outward means the public surface holds no credentials and no query path into the monitoring account, and the exported content is exactly what the company chose to disclose. A scoped read-only role still places working credentials in a public-facing component. A shared dashboard exposes raw internal metrics and their naming to anyone with the link. Fronting the CloudWatch API anonymously creates an unauthenticated path into the monitoring account's data.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html",
    tags: ["CloudWatch", "Status Page", "Security", "Design"]
  },
  {
    id: "aws-sap-362",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Picking a Database for a Document-Shaped Workload",
    scenario: "A team stores JSON documents with varying fields, queries them by nested attributes, and needs a MongoDB-compatible API because the application already uses MongoDB drivers and aggregation pipelines.",
    question: "Which service fits with least application change?",
    options: [
      { id: 'A', text: "Amazon DocumentDB, which is compatible with the MongoDB API and its aggregation framework." },
      { id: 'B', text: "Amazon DynamoDB, which stores schemaless items and scales automatically but exposes its own API rather than the MongoDB drivers the application uses." },
      { id: 'C', text: "Amazon Aurora PostgreSQL with JSONB columns, which stores the documents and supports querying and indexing of their nested attributes using SQL." },
      { id: 'D', text: "Amazon OpenSearch Service, which indexes JSON documents and supports querying nested attributes through its own query domain specific language." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DocumentDB is designed for MongoDB API compatibility, so existing drivers, queries, and aggregation pipelines continue to work while AWS operates the storage and backups, which is the least-change path. DynamoDB is an excellent document store but its API is entirely different, so every data access call would be rewritten. Aurora with JSONB handles document data well but through SQL rather than MongoDB drivers. OpenSearch indexes documents for search rather than serving as a transactional document database.",
    referenceUrl: "https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html",
    tags: ["DocumentDB", "MongoDB", "Purpose-Built", "Migration"]
  },
  {
    id: "aws-sap-363",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing a Health Check That Tells the Truth",
    scenario: "A load balancer health check requests a path that returns 200 whenever the process is running. During an incident the database was unreachable, every instance failed requests, but all targets stayed healthy and traffic kept flowing to them.",
    question: "How should the health check be improved?",
    options: [
      { id: 'A', text: "Have the health endpoint verify the critical dependencies that instance needs, while avoiding failing the whole fleet when a shared dependency degrades gracefully." },
      { id: 'B', text: "Have the health endpoint verify every dependency the application uses so that any dependency problem removes the instance from service immediately." },
      { id: 'C', text: "Shorten the health check interval and reduce the unhealthy threshold so that a failing instance is removed from the target group more quickly than it is today." },
      { id: 'D', text: "Add a CloudWatch alarm on the target group's error rate so the team is paged when the instances begin returning errors to the load balancer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A health check that only proves the process is alive cannot detect an unusable instance, but checking every dependency creates the opposite failure where a shared outage marks the entire fleet unhealthy and the load balancer has nowhere to send traffic; the balance is a deep check on what the instance itself requires, with shared dependencies handled by graceful degradation rather than by failing health. Shorter intervals detect nothing new when the check always passes. An alarm improves awareness without changing routing.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html",
    tags: ["Health Checks", "Load Balancing", "Resilience", "Design"]
  },
  {
    id: "aws-sap-364",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Explaining a Throughput Ceiling on a Single Instance",
    scenario: "A service on a large EC2 instance plateaus at a throughput well below the instance's CPU capacity. CPU sits at 40 percent, memory is fine, and network and EBS metrics are all below their documented limits for the instance type.",
    question: "Which cause should be investigated next?",
    options: [
      { id: 'A', text: "A software concurrency limit such as a thread pool, connection pool, or file descriptor ceiling inside the application." },
      { id: 'B', text: "The instance's network burst credits being exhausted, capping throughput." },
      { id: 'C', text: "The EBS volume's burst balance being exhausted, which reduces the available IOPS below the baseline the application needs to sustain its throughput." },
      { id: 'D', text: "The placement group configuration, which limits the network bandwidth available between the instance and the other members of its own group." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When every infrastructure metric is below its limit yet throughput plateaus, the constraint is almost always a bound inside the application, such as a fixed thread or connection pool or a file descriptor limit, which caps concurrency regardless of available hardware. Exhausted network or storage burst credits would show as those metrics reaching their limits, which the scenario rules out. A placement group affects inter-instance networking and does not impose a throughput ceiling of this kind.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html",
    tags: ["Performance", "Concurrency", "Troubleshooting", "EC2"]
  },
  {
    id: "aws-sap-365",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing the Cost of a Global Accelerator Deployment",
    scenario: "A team enabled AWS Global Accelerator for a service whose users are almost entirely in one country, in the same Region as the workload. The measured latency improvement is negligible and the accelerator's fixed charge is significant.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Remove the accelerator, since its benefit depends on long network paths that this traffic pattern does not have." },
      { id: 'B', text: "Keep the accelerator but reduce the number of endpoint groups." },
      { id: 'C', text: "Replace the accelerator with Amazon CloudFront so that the static addresses are retained and the requests are served from the edge locations instead." },
      { id: 'D', text: "Keep the accelerator and enable client affinity so that each client is consistently routed to the same endpoint and the latency benefit improves." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Global Accelerator earns its cost by moving traffic onto the AWS backbone earlier, which matters when users are far from the Region; with users in the same country and Region there is little path to improve, so the honest answer is to remove it unless the static anycast addresses or fast regional failover are separately required. Reducing endpoint groups does not change the accelerator's fixed charge. CloudFront serves cacheable content rather than replacing an accelerator for dynamic traffic. Client affinity changes routing stickiness rather than latency.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["Global Accelerator", "Cost Optimization", "Latency", "Review"]
  },
  {
    id: "aws-sap-366",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Finding Which Change Caused an Incident",
    scenario: "A production incident began at a known minute. Several teams deploy independently and infrastructure is changed through multiple pipelines, so establishing which change coincided with the incident takes hours of asking around.",
    question: "Which capability shortens that investigation?",
    options: [
      { id: 'A', text: "Correlate the incident time against the AWS Config configuration timeline and the CloudTrail write events across every account involved in the incident." },
      { id: 'B', text: "Require every team to announce deployments in a shared channel so that the deployment history can be reconstructed during an incident from the messages." },
      { id: 'C', text: "Enable CloudTrail Insights so that unusual API call volumes are flagged and the team can identify the period during which the change was made." },
      { id: 'D', text: "Add deployment markers to the CloudWatch dashboards so that each team's releases are visible alongside the metrics the responders are watching." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Config records a configuration item every time a resource changes and CloudTrail records who made each change and when, so filtering both to the minutes around the incident produces an authoritative list of what changed without asking anyone. Announcements in a channel depend on people remembering and are incomplete by nature. CloudTrail Insights flags anomalous call volume rather than enumerating changes. Deployment markers are genuinely useful on dashboards but cover application releases rather than every infrastructure change.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/view-manage-resource.html",
    tags: ["AWS Config", "CloudTrail", "Incident Response", "Change Management"]
  },
  {
    id: "aws-sap-367",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Handling a Slow Leak That Fails Weekly",
    scenario: "A service becomes unresponsive roughly every seven days and recovers after a restart. Memory usage climbs steadily between failures, and the team currently restarts instances on a weekly schedule to avoid the outage.",
    question: "Which approach addresses the problem properly?",
    options: [
      { id: 'A', text: "Profile the heap to find the leak and fix it, using the scheduled restart only as a temporary mitigation." },
      { id: 'B', text: "Increase the instance memory so that the growth takes longer to reach the limit and the restarts can be scheduled less frequently than they are today." },
      { id: 'C', text: "Add a CloudWatch alarm on memory utilization that triggers an instance refresh so the restart happens when it is needed rather than on a fixed weekly schedule." },
      { id: 'D', text: "Shorten the restart interval to every three days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A steady climb between restarts is a leak, and only fixing it removes the failure mode; the scheduled restart is a reasonable stopgap while that work happens but should not become the answer. More memory extends the interval without changing the trajectory. An alarm-driven refresh is a better mitigation than a fixed schedule and is worth adding, but it still institutionalizes restarting around a defect. A shorter restart interval increases churn and masks the problem further.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/oe_evolve_ops_process_cont_imp.html",
    tags: ["Memory Leak", "Troubleshooting", "Operational Excellence", "Root Cause"]
  },
  {
    id: "aws-sap-368",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Choosing What to Measure for a Customer Promise",
    scenario: "A team promises customers that 99.9 percent of API requests succeed within 500 ms each month. It currently measures average latency and instance availability, neither of which corresponds to the promise being made.",
    question: "Which measurement matches the commitment?",
    options: [
      { id: 'A', text: "The proportion of requests returning success within 500 ms, measured at the entry point over a monthly window." },
      { id: 'B', text: "The p99 latency of successful requests measured over a monthly window, so the slowest one percent of requests is visible against the promised threshold." },
      { id: 'C', text: "The availability of the load balancer and its targets over the month, expressed as the percentage of time that healthy capacity was available to serve." },
      { id: 'D', text: "The error rate of the API over the month, as a percentage of requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The promise combines success and latency into one condition, so the indicator must be the ratio of requests meeting both to all requests, measured where the customer experiences it. A p99 latency figure describes the distribution of successful requests and ignores failures entirely. Infrastructure availability measures capacity rather than what customers received. Error rate covers half the promise and says nothing about slow but successful responses.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/availability-needs.html",
    tags: ["SLO", "SLI", "Observability", "Reliability"]
  },
  {
    id: "aws-sap-369",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing Risk From a Manual Production Change",
    scenario: "An engineer must apply an urgent production configuration change. Company policy requires all change through pipelines, but the pipeline takes 40 minutes and customers are affected now.",
    question: "Which approach balances urgency against control?",
    options: [
      { id: 'A', text: "Apply the change through a break-glass path that is logged and alarmed, then reconcile it into the pipeline immediately afterwards." },
      { id: 'B', text: "Wait for the pipeline to complete, since policy requires all change through it." },
      { id: 'C', text: "Apply the change manually and update the pipeline definition at the next convenient opportunity so the two are eventually brought back into agreement." },
      { id: 'D', text: "Grant the engineer temporary administrative access so the change can be applied quickly, revoking the access once the incident has been resolved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A pre-agreed break-glass path acknowledges that emergencies happen while keeping the change observable and time-bounded, and reconciling immediately prevents the drift that makes the next deployment surprising. Waiting 40 minutes while customers are affected elevates process over outcome. Applying manually and reconciling eventually is how environments drift and how the next pipeline run silently reverts the fix. Granting administrative access addresses permission without providing the logging, alarming, or reconciliation that make the exception safe.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/oe_mit_deploy_risks_planned_changemgnt.html",
    tags: ["Change Management", "Break-Glass", "Incident Response", "Drift"]
  },
  {
    id: "aws-sap-370",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing the Impact of a Dependency Upgrade",
    scenario: "A shared internal library is used by 40 services. A required security upgrade contains a breaking change, and upgrading all 40 simultaneously is the only approach the team has used before, which previously caused a multi-service outage.",
    question: "Which rollout approach reduces the risk?",
    options: [
      { id: 'A', text: "Publish the upgrade as a new major version and let services adopt it independently, with a deadline and tracking of who has moved." },
      { id: 'B', text: "Upgrade all 40 services in one release again but add an extended regression test cycle beforehand so the breaking change is caught before it reaches production." },
      { id: 'C', text: "Backport the security fix into the current major version instead." },
      { id: 'D', text: "Upgrade the services in alphabetical order over several weeks so that the change is spread out and any failure affects only the services upgraded that day." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Independent adoption of a new major version lets each team upgrade when it can test properly, so a breaking change is absorbed 40 times in isolation rather than once across everything, and a deadline with tracking keeps the security outcome. More testing before another simultaneous release reduces the chance of failure without reducing its blast radius. Backporting is attractive and worth considering, but it commits the library team to maintaining two branches indefinitely. Alphabetical ordering spreads the work without regard to service risk or team readiness.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/oe_mit_deploy_risks_test_val_chg.html",
    tags: ["Dependency Management", "Blast Radius", "Rollout", "Supply Chain"]
  },
  {
    id: "aws-sap-371",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Migrating a Workload That Uses Broadcast Discovery",
    scenario: "An application's nodes find each other using UDP broadcast on the local subnet. A VPC does not forward broadcast traffic, so after migration the nodes start but never form a cluster.",
    question: "Which change allows the cluster to form?",
    options: [
      { id: 'A', text: "Configure the cluster to use a static seed list or a discovery service instead of broadcast." },
      { id: 'B', text: "Place every node in the same subnet and the same cluster placement group so that the broadcast traffic reaches the other nodes on the local network segment." },
      { id: 'C', text: "Create a Transit Gateway multicast domain and associate the subnet so that the discovery traffic is forwarded between the nodes of the cluster." },
      { id: 'D', text: "Enable enhanced networking on the instances so that the broadcast frames are passed through to the other nodes by the underlying network adapter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A VPC does not forward broadcast at all, regardless of subnet or placement, so the cluster must be reconfigured to use an explicit seed list or a discovery mechanism such as DNS or a registry, which most clustering software supports natively. A shared subnet and placement group change proximity without enabling broadcast. Transit Gateway multicast domains carry multicast rather than broadcast and would not serve this discovery mechanism. Enhanced networking improves throughput and latency and does not add broadcast support.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html",
    tags: ["Migration", "Service Discovery", "Networking", "Legacy"]
  },
  {
    id: "aws-sap-372",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Modernizing a Reporting Process That Blocks a Migration",
    scenario: "A nightly report reads directly from the production database with a long-running query that holds locks. It has blocked the database migration because the new managed target cannot be taken offline for the query's duration.",
    question: "Which change unblocks the migration?",
    options: [
      { id: 'A', text: "Move the report onto a read replica or an exported dataset so it no longer contends with the production workload." },
      { id: 'B', text: "Rewrite the report's query so it completes faster and therefore holds the locks for a shorter period during the nightly reporting window." },
      { id: 'C', text: "Schedule the report at a time when the migration's replication task is idle so that the two processes never contend for the database at the same time." },
      { id: 'D', text: "Increase the target database's instance size so that it absorbs the report's load alongside the production traffic without the locks becoming a problem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The report's coupling to the production database is the obstacle, and moving it to a replica or an exported dataset removes the contention permanently, which unblocks the migration and improves the architecture regardless. A faster query shortens the lock window without removing the contention. Scheduling around replication is fragile because replication is continuous during a change data capture migration. A larger instance absorbs load but locks are a concurrency problem rather than a capacity one.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-databases/welcome.html",
    tags: ["Migration", "Reporting", "Read Replica", "Modernization"]
  },
  {
    id: "aws-sap-373",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Handling Time Zone Assumptions After a Move",
    scenario: "After migrating servers to AWS, several batch jobs ran at the wrong hour and one produced incorrect date-stamped output. The on-premises servers ran in a local time zone and the new instances default to coordinated universal time.",
    question: "Which approach is the sound long-term fix?",
    options: [
      { id: 'A', text: "Keep instances on coordinated universal time and make the applications handle time zones explicitly where business hours matter." },
      { id: 'B', text: "Set every migrated instance's system time zone to the original local zone so the applications behave exactly as they did before the migration took place." },
      { id: 'C', text: "Adjust each batch job's schedule by the current offset between the two time zones so the jobs run at the same wall clock hour as they did before." },
      { id: 'D', text: "Run the batch jobs through a scheduler configured with the local time zone so the operating system time zone no longer affects when they are started." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Hosts on coordinated universal time with time zones handled explicitly in the application is the durable answer, because it removes hidden dependence on host configuration and survives daylight saving transitions and future moves. Setting the host time zone reproduces the old behaviour but keeps correctness dependent on a machine setting nobody sees. Adjusting schedules by a fixed offset breaks twice a year at daylight saving boundaries. A time zone aware scheduler fixes when jobs start but not the date-stamped output produced inside the application.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/set-time.html",
    tags: ["Migration", "Time Zones", "Batch", "Correctness"]
  },
  {
    id: "aws-sap-374",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing What to Do With a Chatty Legacy Protocol",
    scenario: "Two migrated components exchange thousands of small messages per transaction over a protocol designed for a local network. In AWS they are in different Availability Zones and transaction latency has risen unacceptably.",
    question: "Which change addresses the latency?",
    options: [
      { id: 'A', text: "Co-locate the two components in the same Availability Zone while the protocol is redesigned to exchange fewer, larger messages." },
      { id: 'B', text: "Place the two components in a cluster placement group so that the network latency between them is reduced to the lowest available within the Region." },
      { id: 'C', text: "Increase the instance sizes for both components so that the additional network bandwidth reduces the time each of the small messages takes to be delivered." },
      { id: 'D', text: "Enable enhanced networking on both instances so that the packet rate they sustain increases and the thousands of small messages are delivered more quickly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Thousands of round trips per transaction are dominated by per-message latency, so removing the cross-zone hop gives immediate relief while the real fix, reducing the number of exchanges, is developed. A cluster placement group requires the instances to be in one Availability Zone anyway and helps only marginally beyond co-location. Larger instances and enhanced networking raise bandwidth and packet rate, which is not the constraint when each message is small and the cost is round-trip time.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
    tags: ["Latency", "Chatty Protocol", "Migration", "Performance"]
  },
  {
    id: "aws-sap-375",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Deciding What Success Looks Like for a Migration",
    scenario: "A migration programme is about to begin. The sponsor asks what should be measured to know whether it succeeded, beyond simply having moved every server out of the data centre before the contract ends.",
    question: "Which set of measures reflects success?",
    options: [
      { id: 'A', text: "Business outcomes such as run cost, deployment frequency, incident rate, and the data centre exit date." },
      { id: 'B', text: "The number of servers migrated per week and the percentage of the estate that has been moved, tracked against the programme's original plan." },
      { id: 'C', text: "The proportion of workloads that were replatformed or refactored rather than rehosted, since deeper modernization indicates a better migration outcome." },
      { id: 'D', text: "The reduction in the infrastructure team's headcount after the migration, since a managed environment requires fewer people to operate than a data centre." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A migration is justified by outcomes, so measuring run cost, how quickly teams can now change their systems, how reliable those systems are, and whether the deadline was met tells the sponsor whether the investment paid back. Servers per week measures activity rather than value. Modernization depth is a means to an outcome and deeper is not automatically better, since rehosting a stable workload is often correct. Headcount reduction is rarely the goal and confuses a possible side effect with success.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/welcome.html",
    tags: ["Migration Programme", "Metrics", "Business Outcomes", "Strategy"]
  }
];

export default AWS_SAP_QUESTIONS;
