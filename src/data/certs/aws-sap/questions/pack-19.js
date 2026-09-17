export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-451",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Where an Account Quota Increase Is Requested",
    scenario: "A team needs the number of VPCs per Region raised in one account and is unsure where to make the request.",
    question: "Where should the increase be requested?",
    options: [
      { id: 'A', text: "In Service Quotas, which lists the adjustable quota for that account and Region and submits the increase request to AWS for approval automatically." },
      { id: 'B', text: "In the VPC console's settings page, where a limit request is raised for each account and Region." },
      { id: 'C', text: "In AWS Organizations, because quotas are an organization-level property applied to every member account together." },
      { id: 'D', text: "In AWS Config, by authoring a rule that records the desired limit and raises it as the account approaches it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service Quotas is the single place that shows every adjustable quota per account and Region and files the increase with AWS, so it is where this request belongs. The VPC console reports current usage but has no page for configuring limits. Quotas apply per account and Region rather than to an organization as a whole, so Organizations cannot set them. Config records and evaluates configuration state and has no ability to change a quota.",
    referenceUrl: "https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html",
    tags: ["Service Quotas", "Limits", "Operations", "VPC"]
  },
  {
    id: "aws-sap-452",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "What an External Access Analyzer Reports",
    scenario: "A security team wants to know which roles and buckets in an account can be reached by principals outside the organization.",
    question: "What does an external access analyzer report?",
    options: [
      { id: 'A', text: "Resources whose policies grant access to a principal outside the zone of trust you set, with the policy statement that allows it." },
      { id: 'B', text: "Every policy in the account that fails to follow least privilege, ranked by how many permissions could be removed from each of the roles involved." },
      { id: 'C', text: "Network paths from the internet to each resource in the account's VPCs." },
      { id: 'D', text: "Resources that were reached by an outside principal in the last 90 days, taken from the account's CloudTrail history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An external access analyzer evaluates resource policies against a zone of trust, an account or an organization, and reports each resource reachable from outside it along with the statement responsible. Unused-permission analysis is a different analyzer type and is not what external access covers. Reachability across the network is what Network Access Analyzer examines. Findings come from analysing policy rather than observed activity, which is why a resource is flagged before anyone has used the access.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
    tags: ["IAM Access Analyzer", "Security", "Policies", "Least Privilege"]
  },
  {
    id: "aws-sap-453",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Two Ways an Account Joins an Organization",
    scenario: "A company has acquired a business that already owns an AWS account, and also needs several brand-new accounts for its own teams.",
    question: "How do the accounts become part of the organization?",
    options: [
      { id: 'A', text: "Invite the existing account and create the new ones from the management account." },
      { id: 'B', text: "Create a new account for the acquired business and migrate its resources, because an existing account cannot join an organization." },
      { id: 'C', text: "Invite every account, since accounts created in the management account must also be invited before any policy applies." },
      { id: 'D', text: "Move the acquired account into the organization by changing its root user email to a domain the management account controls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organizations supports both paths: an account that already exists is sent an invitation which it accepts, and accounts that do not yet exist are created by the management account and are members from birth. Rebuilding the acquired account is unnecessary because invitation exists precisely for this case. Accounts created inside the organization need no invitation. A root user email address has no bearing on organization membership.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html",
    tags: ["Organizations", "Account Management", "Acquisition", "Governance"]
  },
  {
    id: "aws-sap-454",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Securing the Organization's Root Credentials",
    scenario: "An auditor asks how the root user of each member account in an organization is protected against misuse.",
    question: "Which practice addresses this?",
    options: [
      { id: 'A', text: "Remove the root user's access keys, enable multi-factor authentication, and use it only for the tasks that require it." },
      { id: 'B', text: "Attach an administrative identity policy to the root user so that every action it performs is limited to the permissions the policy enumerates." },
      { id: 'C', text: "Delete the root user once an administrative IAM role exists." },
      { id: 'D', text: "Rotate the root user's access keys on a 90-day schedule and store them in AWS Secrets Manager." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Root protection is a combination of steps: no access keys on the account, multi-factor authentication enabled, and use reserved for the few operations that genuinely require root. Identity policies cannot be attached to the root user, and root is not constrained by them in any case, since only a service control policy limits what it may do. The root user cannot be deleted because it is intrinsic to the account. Rotating root keys misses the point when the keys should not exist at all.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html",
    tags: ["IAM", "Root User", "Security", "Organizations"]
  },
  {
    id: "aws-sap-455",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Activating a Tag for Cost Allocation",
    scenario: "Every resource already carries a Team tag, but the tag does not appear as a column in the organization's cost reports.",
    question: "What step is missing?",
    options: [
      { id: 'A', text: "Activate the tag key as a cost allocation tag in the management account, after which it appears in later billing periods." },
      { id: 'B', text: "Create a tag policy for the key in AWS Organizations, because cost reports draw their columns from the policies rather than from the resources." },
      { id: 'C', text: "Re-tag every resource so the key uses the reserved aws prefix." },
      { id: 'D', text: "Enable Cost Explorer's hourly granularity, which is the only setting that makes resource tags appear in a report." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A tag becomes a cost allocation dimension only once it is activated in the payer account's billing settings, and activation applies from that point forward rather than retroactively. Tag policies govern which keys and values are permitted and play no part in populating a report's columns. Keys beginning with the aws prefix are reserved for AWS-generated tags, so renaming would break the tag. Cost Explorer granularity changes a report's time resolution, not which tags it can group by.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/activating-tags.html",
    tags: ["Cost Allocation", "Tagging", "Billing", "Organizations"]
  },
  {
    id: "aws-sap-456",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Sharing a Private Hosted Zone Between Accounts",
    scenario: "A shared services account hosts a Route 53 private hosted zone that workloads in five other accounts must be able to resolve.",
    question: "How is that achieved?",
    options: [
      { id: 'A', text: "Associate the hosted zone with each of the other accounts' VPCs." },
      { id: 'B', text: "Replicate the hosted zone into every account and keep the record sets in step with an automated job." },
      { id: 'C', text: "Create a Route 53 Resolver inbound endpoint in the shared services account and point each workload account's DNS at it." },
      { id: 'D', text: "Share the hosted zone with Resource Access Manager so that each account receives a read-only copy of it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A private hosted zone can be associated with VPCs in other accounts, and once associated those VPCs resolve its records natively, which is the intended mechanism and copies no data. Replicating the zone creates a second source of truth that drifts from the first. A Resolver inbound endpoint exists so networks outside AWS can query private zones, which is more machinery than cross-account VPCs need. Private hosted zones are not a Resource Access Manager shareable resource type.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs-different-accounts.html",
    tags: ["Route 53", "Private Hosted Zone", "Multi-Account", "DNS"]
  },
  {
    id: "aws-sap-457",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Key Policy Versus Grant",
    scenario: "A service needs temporary permission to decrypt with a KMS key, and the security team does not want to edit the key policy each time.",
    question: "Which mechanism suits this?",
    options: [
      { id: 'A', text: "A grant, which delegates specific operations on the key to a principal for as long as it exists and can be retired when the work finishes." },
      { id: 'B', text: "An alias pointing at the key, which carries its own permissions for the principals allowed to use that name." },
      { id: 'C', text: "A second key policy statement scoped by condition key, which the security team can remove after the work finishes." },
      { id: 'D', text: "A key rotation schedule, which issues fresh permissions with each new key version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A grant is the KMS construct for temporary, programmatic delegation: it names the principal and the permitted operations, needs no change to the key policy, and can be retired the moment the work completes. An alias is only a friendly name and carries no permissions of its own. Adding a policy statement does work but is exactly the key policy editing the team wants to avoid, and it scales badly across many short-lived delegations. Key rotation changes the backing material and grants nobody access.",
    referenceUrl: "https://docs.aws.amazon.com/kms/latest/developerguide/grants.html",
    tags: ["KMS", "Grants", "Encryption", "IAM"]
  },
  {
    id: "aws-sap-458",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "How Policies Inherit Down the Hierarchy",
    scenario: "An organizational unit denies a service, and a child unit beneath it attaches a policy allowing that same service.",
    question: "What is the effective result?",
    options: [
      { id: 'A', text: "The service stays denied, because a deny anywhere above the account cannot be undone lower in the hierarchy." },
      { id: 'B', text: "The service becomes available in the child unit, because the policy attached closest to the account takes precedence over the ones above it." },
      { id: 'C', text: "The service is denied only for accounts attached directly to the parent unit." },
      { id: 'D', text: "The result depends on the order in which the two policies were attached to their respective units." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service control policies intersect down the tree: an account's effective permissions are what every policy from the root to the account allows, so a deny higher up is final and no child policy can restore the service. Proximity to the account gives a policy no extra weight. The deny reaches every account in the subtree rather than only those attached directly to that unit. Attachment order is irrelevant because evaluation is a set intersection rather than a sequence.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_inheritance_auth.html",
    tags: ["Organizations", "SCP", "Inheritance", "Governance"]
  },
  {
    id: "aws-sap-459",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Choosing a Directory Option for AWS Access",
    scenario: "A company keeps its user directory on-premises and wants AWS-hosted Windows instances to join a domain without replicating the directory into AWS.",
    question: "Which option fits?",
    options: [
      { id: 'A', text: "AD Connector, which proxies directory requests through to the existing on-premises domain controllers without storing any users in AWS." },
      { id: 'B', text: "AWS Managed Microsoft AD with a two-way forest trust, which creates a directory in AWS holding a synchronised copy of every on-premises user." },
      { id: 'C', text: "Amazon Cognito user pools, federated to the on-premises directory." },
      { id: 'D', text: "IAM Identity Center with an external identity provider, which issues domain credentials to the instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AD Connector is a directory proxy: instances join the existing on-premises domain and every authentication is forwarded to the on-premises controllers, so no user data lands in AWS. Managed Microsoft AD creates a real directory in AWS, which is the replication the company is trying to avoid even where a trust is used. Cognito user pools serve application sign-in and cannot domain-join a Windows instance. Identity Center issues AWS access rather than Windows domain credentials.",
    referenceUrl: "https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html",
    tags: ["Directory Service", "AD Connector", "Hybrid", "Windows"]
  },
  {
    id: "aws-sap-460",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "What the Reader Endpoint Provides",
    scenario: "An Aurora cluster has one writer and three readers, and the application team wants read queries spread across the reader instances.",
    question: "What does the reader endpoint do?",
    options: [
      { id: 'A', text: "It resolves to one of the available reader instances on each new connection." },
      { id: 'B', text: "It load-balances every individual query across the readers, so a single connection still uses all three of them." },
      { id: 'C', text: "It sends reads to the reader with the lowest replica lag, recalculating the choice for each statement a connection issues." },
      { id: 'D', text: "It fails over to the writer whenever every reader instance is unavailable or still starting up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The reader endpoint is a DNS record that hands back a different reader instance as connections are opened, so balancing happens per connection and a pooled application should open several. It does not distribute individual statements, so one connection stays pinned to whichever instance it resolved to. Replica lag is not an input to the choice. When no reader is available the endpoint has nothing to return and does not redirect reads to the writer.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html",
    tags: ["Aurora", "Read Replicas", "Endpoints", "Scaling"]
  },
  {
    id: "aws-sap-461",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Consistency of a Read After a Write",
    scenario: "A pipeline writes an object to S3 and a downstream step immediately reads the same key.",
    question: "What does the read return?",
    options: [
      { id: 'A', text: "The object just written, because S3 now provides strong read-after-write consistency for new objects and for overwrites alike, in every Region." },
      { id: 'B', text: "The object just written only if the pipeline waits for S3 to finish replicating the key." },
      { id: 'C', text: "Either the new object or the previous version, since an overwrite becomes visible after a short propagation delay." },
      { id: 'D', text: "A not-found error until the object's index entry is created." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "S3 provides strong read-after-write consistency for all GET, PUT, and LIST operations, covering new objects and overwrites in every Region at no extra cost, so the downstream step sees the object it just wrote. Replication copies objects between buckets and has no bearing on reading a key in the bucket just written to. There is no propagation window in which a stale version can be returned, and no index delay that yields a not-found for an acknowledged write.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
    tags: ["S3", "Consistency", "Storage", "Data Pipelines"]
  },
  {
    id: "aws-sap-462",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Between the Two API Gateway Types",
    scenario: "A team is exposing a Lambda-backed JSON API and is choosing between an API Gateway REST API and an HTTP API.",
    question: "What is the main trade-off?",
    options: [
      { id: 'A', text: "The HTTP API costs less and adds less latency, while the REST API offers request validation, usage plans, and private endpoints." },
      { id: 'B', text: "The REST API supports Lambda integration and the HTTP API does not, so a Lambda-backed service must use the REST API whatever the cost difference." },
      { id: 'C', text: "The HTTP API is limited to public endpoints and GET requests." },
      { id: 'D', text: "The REST API is regional only, while the HTTP API can be deployed as an edge-optimised endpoint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "HTTP APIs are the cheaper, lower-latency option with a deliberately smaller feature set, while REST APIs keep the richer capabilities, including request validation, usage plans with API keys, and private endpoints inside a VPC, so the choice turns on whether any of those are needed. Both integrate with Lambda. HTTP APIs support the usual methods and can be made private. Edge-optimised endpoints are a REST API feature, so that comparison is the wrong way round.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",
    tags: ["API Gateway", "Serverless", "Cost Optimization", "Integration"]
  },
  {
    id: "aws-sap-463",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "How Long Stream Records Stay Available",
    scenario: "A consumer of a Kinesis data stream was offline for two days and the team wants to know whether it can still catch up.",
    question: "What determines whether the records are still there?",
    options: [
      { id: 'A', text: "The stream's retention period, which defaults to 24 hours and can be extended to 365 days." },
      { id: 'B', text: "Whether the consumer committed a checkpoint in the two days before it stopped, since uncommitted records are dropped." },
      { id: 'C', text: "Whether any other consumer has already read them, because a stream record is deleted once every registered consumer has received it." },
      { id: 'D', text: "The shard count, because records are discarded as soon as a shard reaches its own storage capacity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Availability is purely a function of the retention period: Kinesis keeps every record for the configured window, 24 hours by default and up to 365 days, and a consumer can re-read anything inside it. Checkpoints track a consumer's own position and never cause deletion. Records are not reference-counted against consumers, which is exactly what lets a new consumer replay history. Shards determine throughput rather than imposing a storage ceiling that evicts data.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html",
    tags: ["Kinesis", "Streaming", "Retention", "Data Pipelines"]
  },
  {
    id: "aws-sap-464",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "What Fargate Removes From a Task Definition",
    scenario: "A team currently runs ECS tasks on a self-managed EC2 capacity provider and is evaluating Fargate for a new service.",
    question: "What changes for the team?",
    options: [
      { id: 'A', text: "AWS provisions the compute for each task, so the team stops patching and right-sizing instances but must size CPU and memory per task." },
      { id: 'B', text: "Tasks keep running on the team's instances, with Fargate only scheduling them more densely across the cluster." },
      { id: 'C', text: "The team can no longer use task-level IAM roles or private subnets." },
      { id: 'D', text: "Containers are billed per instance hour rather than per task, which makes idle capacity cheaper to hold." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Fargate removes the instance layer: AWS supplies capacity for each task, so there is no fleet to patch, scale, or right-size, but the task definition must declare its own CPU and memory because that is what gets provisioned and billed. Tasks no longer run on the team's own instances. Task-level IAM roles and awsvpc networking in private subnets both work on Fargate. Billing moves to per-task vCPU and memory by the second, which makes idle capacity more expensive to hold rather than less.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html",
    tags: ["ECS", "Fargate", "Containers", "Operations"]
  },
  {
    id: "aws-sap-465",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing a Placement Group for Low Latency",
    scenario: "A tightly coupled simulation needs the lowest possible network latency between its twelve nodes in one Availability Zone.",
    question: "Which placement strategy applies?",
    options: [
      { id: 'A', text: "A cluster placement group, which packs the instances onto hardware close together in a single zone." },
      { id: 'B', text: "A spread placement group, which puts each instance on separate underlying hardware so no single failure can affect more than one node." },
      { id: 'C', text: "A partition placement group across three Availability Zones." },
      { id: 'D', text: "An Auto Scaling group with a zonal capacity reservation and no placement group at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A cluster placement group is the strategy designed for heavy traffic between instances: it places them on hardware physically near one another inside one Availability Zone, which is what minimises hop latency. A spread group deliberately separates instances, raising latency in exchange for availability. A partition group spanning zones separates failure domains and cannot deliver the same locality. A capacity reservation guarantees capacity exists but says nothing about placement relative to other instances.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html",
    tags: ["EC2", "Placement Groups", "HPC", "Networking"]
  },
  {
    id: "aws-sap-466",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Static Anycast Addresses Versus Content Caching",
    scenario: "A team runs a TCP game server and wants clients to reach it over the AWS backbone using addresses that never change.",
    question: "Which service fits?",
    options: [
      { id: 'A', text: "AWS Global Accelerator, which gives two static anycast addresses and routes traffic over the AWS network to the nearest endpoint." },
      { id: 'B', text: "Amazon CloudFront, which caches responses at edge locations and can be given a dedicated static address for each distribution." },
      { id: 'C', text: "Amazon Route 53 latency routing to a regional load balancer." },
      { id: 'D', text: "AWS Direct Connect, which provides a private path from each client network to the AWS backbone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Global Accelerator is built for this shape of workload: two static anycast IP addresses that never change, with traffic entering the AWS network at the closest edge and crossing the backbone to the healthiest endpoint, and it carries TCP and UDP rather than only HTTP. CloudFront is an HTTP cache and would not front a raw TCP game protocol. Latency-based DNS depends on clients honouring TTLs and gives no fixed address. Direct Connect is a private circuit for a known network, not for arbitrary internet clients.",
    referenceUrl: "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
    tags: ["Global Accelerator", "CloudFront", "Networking", "Latency"]
  },
  {
    id: "aws-sap-467",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Rewinding a Cluster After a Bad Write",
    scenario: "A bad migration script corrupted rows in an Aurora MySQL cluster eight minutes ago, and the team wants the fastest way back to the prior state.",
    question: "Which option recovers fastest?",
    options: [
      { id: 'A', text: "Backtrack the cluster to a point just before the script ran." },
      { id: 'B', text: "Restore a snapshot to a new cluster and repoint the application once the restore and any replay of binary logs has completed." },
      { id: 'C', text: "Use point-in-time restore, which creates a new cluster from the continuous backup of the original." },
      { id: 'D', text: "Fail over to a reader instance, which still holds the rows as they were before the script ran." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Backtrack rewinds an Aurora MySQL cluster in place to a timestamp inside its backtrack window, usually within minutes and without creating a new cluster or endpoint, which makes it the quickest route back from a recent logical error. Snapshot restore and point-in-time restore each build a new cluster that the application must then be repointed at, so both take far longer. Readers share the writer's storage volume, so they contain the corrupted rows too and failing over changes nothing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html",
    tags: ["Aurora", "Backtrack", "Recovery", "Operations"]
  },
  {
    id: "aws-sap-468",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Turning a Log Pattern Into an Alarm",
    scenario: "An application writes an ERROR line to CloudWatch Logs on each failed payment, and the team wants to be paged when the rate rises.",
    question: "What turns that log line into an alarm?",
    options: [
      { id: 'A', text: "A metric filter on the log group that increments a custom metric, which a CloudWatch alarm then evaluates." },
      { id: 'B', text: "A Logs Insights query saved on the log group, which CloudWatch runs on a schedule and alarms on when its result crosses a threshold." },
      { id: 'C', text: "A subscription filter that streams the log group to an SNS topic." },
      { id: 'D', text: "A CloudWatch alarm pointed straight at the log group, using the count of matching events as its metric." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A metric filter is the bridge between log text and the metric system: it matches a pattern as events arrive and publishes a numeric metric, and an alarm on that metric can page. A saved Logs Insights query runs on demand or on a dashboard and is not itself an alarm source. A subscription filter forwards matching events to a destination for further processing but produces no metric to threshold. An alarm can only watch a metric, so it cannot be pointed at a log group.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html",
    tags: ["CloudWatch", "Logs", "Alarms", "Observability"]
  },
  {
    id: "aws-sap-469",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Decoupling IOPS From Volume Size",
    scenario: "A 200 GiB gp2 volume delivers 600 IOPS and the workload needs 6,000 without paying for storage capacity it will never use.",
    question: "What should change?",
    options: [
      { id: 'A', text: "Modify the volume to gp3, which provisions IOPS independently of capacity so a 3,000 baseline plus extra IOPS can be set on the same 200 GiB." },
      { id: 'B', text: "Grow the volume to 2 TiB, because gp2 grants three IOPS per GiB and only added capacity raises the baseline." },
      { id: 'C', text: "Switch to io2 and provision 6,000 IOPS, which is the only class that decouples performance from size." },
      { id: 'D', text: "Attach a second gp2 volume and stripe the two together." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "gp3 separates performance from capacity: every volume starts at a 3,000 IOPS baseline regardless of size and more can be provisioned, so 200 GiB can serve 6,000 IOPS without growing. Inflating a gp2 volume to 2 TiB does reach the IOPS but pays for ten times the storage the workload needs. io2 also decouples the two, making it workable but more expensive, and the claim that it is the only such class is wrong. Striping two gp2 volumes adds complexity and still buys IOPS with capacity.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/general-purpose.html",
    tags: ["EBS", "gp3", "Performance", "Cost Optimization"]
  },
  {
    id: "aws-sap-470",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "How Much Warning a Spot Interruption Gives",
    scenario: "A batch job runs on Spot capacity and the team needs to checkpoint its work before an instance is reclaimed.",
    question: "What warning does AWS provide?",
    options: [
      { id: 'A', text: "A two-minute interruption notice in instance metadata and as an EventBridge event the job can act on." },
      { id: 'B', text: "A fifteen-minute notice delivered to the account's configured email address so an operator can drain the instance in time." },
      { id: 'C', text: "No warning at all, so the job must checkpoint on a timer." },
      { id: 'D', text: "A rebalance recommendation only, which fires after the instance has already been reclaimed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Spot gives a two-minute interruption notice, published both in instance metadata and as an EventBridge event, which is enough time for a job to flush a checkpoint and exit cleanly. There is no email notification and no fifteen-minute window. The warning is real, so a job need not rely solely on periodic checkpoints even though frequent checkpointing remains sound practice. A rebalance recommendation is an additional, earlier signal of elevated risk rather than a notice after the fact.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-instance-termination-notices.html",
    tags: ["EC2 Spot", "Interruption", "Batch", "Resilience"]
  },
  {
    id: "aws-sap-471",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Naming the Strategy for a Workload Left in Place",
    scenario: "A portfolio review finds an application that must keep running in the data centre for two more years because of a contract, and another with no remaining users.",
    question: "Which strategies describe the two?",
    options: [
      { id: 'A', text: "Retain for the contracted application and retire for the unused one." },
      { id: 'B', text: "Relocate for the contracted application and repurchase for the unused one, since neither of them can move to AWS as it stands today." },
      { id: 'C', text: "Retain for both, because an unused application still has to be kept until its data is archived." },
      { id: 'D', text: "Rehost the contracted application and retain the unused one, deferring both decisions to a later wave." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retain, sometimes called revisit, is the strategy for a workload deliberately left where it is, and retire is the strategy for one that is switched off because nobody needs it, so between them they cover both applications. Relocate moves VMware workloads wholesale and repurchase swaps to a commercial product, and neither matches. An application with no users is retired once any data retention obligation is met separately. Rehosting the contracted application would breach the constraint keeping it in the data centre.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
    tags: ["Migration Strategies", "7 Rs", "Portfolio", "Assessment"]
  },
  {
    id: "aws-sap-472",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing Between Image Import and Replication",
    scenario: "A decommissioned appliance exists only as an OVA file, and its workload must run on EC2 without any further changes on the source side.",
    question: "Which path suits it?",
    options: [
      { id: 'A', text: "VM Import/Export, which converts the OVA image into an AMI that can then be launched as an EC2 instance." },
      { id: 'B', text: "Application Migration Service, which installs a replication agent on the running source server and keeps its disks continuously in step." },
      { id: 'C', text: "AWS DataSync, which copies the OVA file into an S3 bucket." },
      { id: 'D', text: "CloudEndure Migration, which requires the appliance to be powered on so its volumes can be read into EC2." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VM Import/Export is the tool for an offline image: it ingests the OVA and produces an AMI, which is the only path here that needs nothing running on the source. Application Migration Service and its CloudEndure predecessor both install an agent on a live server and replicate its disks, which a decommissioned appliance cannot host. DataSync would faithfully copy the OVA into S3 but leaves it as a file rather than something bootable.",
    referenceUrl: "https://docs.aws.amazon.com/vm-import/latest/userguide/what-is-vmimport.html",
    tags: ["VM Import/Export", "AMI", "Migration", "EC2"]
  },
  {
    id: "aws-sap-473",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing Between a One-Time Copy and Ongoing Access",
    scenario: "A media team must move 90 TB from an on-premises NAS into Amazon S3 once, and afterwards keep no on-premises copy at all.",
    question: "Which service fits the requirement?",
    options: [
      { id: 'A', text: "AWS DataSync, which performs a one-time transfer between the NAS and Amazon S3, verifies every file it copies, and leaves nothing behind." },
      { id: 'B', text: "AWS Storage Gateway in file mode, which presents an S3-backed share the team keeps mounted on the NAS network." },
      { id: 'C', text: "AWS Transfer Family, which exposes an SFTP endpoint in front of Amazon S3." },
      { id: 'D', text: "AWS Snowcone, which holds up to 14 TB per device and ships the data to the Region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DataSync is purpose-built for a bulk transfer between on-premises storage and S3: it parallelises the copy, verifies integrity, and once finished leaves no deployed footprint, which matches a one-off move. Storage Gateway is the opposite design, existing to keep serving that data locally, which the team explicitly does not want. Transfer Family gives external parties protocol access rather than acting as a migration tool. Snowcone's 14 TB capacity would need seven devices to carry 90 TB.",
    referenceUrl: "https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html",
    tags: ["DataSync", "Storage Gateway", "Migration", "S3"]
  },
  {
    id: "aws-sap-474",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Converting a Schema Before a Heterogeneous Move",
    scenario: "An Oracle database with packages and triggers is moving to Amazon Aurora PostgreSQL, and the team needs to know how much code will not convert.",
    question: "Which tool answers that?",
    options: [
      { id: 'A', text: "The AWS Schema Conversion Tool, whose assessment report lists each object it can convert and each one needing manual work." },
      { id: 'B', text: "AWS Database Migration Service, whose validation task compares source and target row counts once the converted tables have been loaded." },
      { id: 'C', text: "AWS Application Discovery Service, which is an inventory tool for the database host." },
      { id: 'D', text: "Amazon RDS Performance Insights, which profiles the Oracle workload before the move." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Schema Conversion Tool reads the source schema and produces an assessment report classifying every object as automatically convertible or needing manual intervention, with an effort estimate, which is exactly the question asked before a heterogeneous move. Database Migration Service moves and validates rows but does nothing with procedural code. Application Discovery Service inventories infrastructure rather than schema objects. Performance Insights characterises workload behaviour and says nothing about convertibility.",
    referenceUrl: "https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html",
    tags: ["Schema Conversion Tool", "DMS", "Aurora", "Migration"]
  },
  {
    id: "aws-sap-475",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "What a Readiness Assessment Produces",
    scenario: "An executive sponsor asks what a migration readiness assessment will actually deliver before any workload moves.",
    question: "What is its output?",
    options: [
      { id: 'A', text: "A scored view of readiness across defined perspectives, with the gaps to close and a plan for closing them." },
      { id: 'B', text: "A per-server sizing recommendation and a target architecture diagram for each application in the portfolio to be migrated." },
      { id: 'C', text: "A readiness certificate confirming the organization may begin migrating." },
      { id: 'D', text: "An inventory of every server and its dependencies, gathered by agents on the source estate." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A migration readiness assessment scores an organization against the perspectives of the migration framework, covering business, people, governance, platform, security, and operations, and turns the weak scores into a prioritised action plan, so its output is organisational readiness rather than technical design. Sizing and target architectures come later during portfolio planning. Nothing about the assessment is contractual. Server inventory and dependency mapping is what Application Discovery Service produces.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-readiness/welcome.html",
    tags: ["Migration Readiness", "Assessment", "Migration", "Planning"]
  }
];

export default AWS_SAP_QUESTIONS;
