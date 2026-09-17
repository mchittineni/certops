export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-301",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Enforcing Encryption With a Specific Key",
    scenario: "A regulated team must guarantee that every object written to its bucket is encrypted with one named customer managed key, and that a request specifying a different key or no key at all is rejected rather than silently defaulted.",
    question: "Which bucket policy condition enforces this?",
    options: [
      { id: 'A', text: "Deny PutObject unless s3:x-amz-server-side-encryption-aws-kms-key-id equals the approved key's Amazon Resource Name, and deny when the encryption header is absent." },
      { id: 'B', text: "Set the bucket's default encryption configuration to the approved customer managed key so that objects written without an encryption header are encrypted with it." },
      { id: 'C', text: "Deny PutObject unless s3:x-amz-server-side-encryption equals aws:kms, which ensures every object written to the bucket is encrypted using a KMS key." },
      { id: 'D', text: "Attach a key policy to the approved key denying its use by any principal other than the members of the regulated team's own IAM role." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Two conditions are needed because they catch different requests: the key id condition rejects a write naming a different key, and denying an absent encryption header stops a request falling through to the bucket default. Default encryption silently encrypts rather than rejecting, so a request naming another key still succeeds. Requiring only aws:kms allows any KMS key including one from another account. A key policy restricts who may use the approved key without preventing a different key being used on the bucket.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html",
    tags: ["S3", "KMS", "Bucket Policy", "Encryption"]
  },
  {
    id: "aws-sap-302",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Handling Shared Responsibility for a Managed Service",
    scenario: "A team asks who is responsible for patching the database engine, encrypting data at rest, managing user accounts inside the database, and applying network access rules for an Amazon RDS instance.",
    question: "Which split correctly describes the responsibilities?",
    options: [
      { id: 'A', text: "AWS patches the engine and underlying host; the customer configures encryption, database users, and network access rules." },
      { id: 'B', text: "AWS patches the engine, configures encryption at rest, and manages the database user accounts, while the customer is responsible only for the network access rules." },
      { id: 'C', text: "The customer patches the engine within the maintenance window it chooses, and AWS is responsible for encryption, database users, and the network access rules." },
      { id: 'D', text: "AWS is responsible for all four, because Amazon RDS is a managed service." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "For a managed database AWS operates the infrastructure and applies engine patches during the maintenance window, while everything expressing the customer's intent stays with the customer: whether encryption is enabled and with which key, who the database users are and what they may do, and which security groups and subnets apply. AWS does not create database users or choose the encryption configuration. The customer selects the maintenance window but does not apply the patches. A managed service never absorbs the customer's configuration decisions.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/security-and-compliance.html",
    tags: ["Shared Responsibility", "RDS", "Security", "Governance"]
  },
  {
    id: "aws-sap-303",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Scaling a Direct Connect Estate",
    scenario: "A company has one Direct Connect connection terminating on a virtual private gateway attached to a single VPC. It now needs 40 VPCs across 3 accounts and 2 Regions reachable over the same physical connection.",
    question: "Which change supports the growth?",
    options: [
      { id: 'A', text: "Replace the virtual private gateway with a Direct Connect gateway associated with Transit Gateways in each Region." },
      { id: 'B', text: "Create a private virtual interface for each of the 40 VPCs on the existing connection so that every VPC is reachable over the same physical circuit." },
      { id: 'C', text: "Create a virtual private gateway in each VPC and associate them with the connection." },
      { id: 'D', text: "Order additional Direct Connect connections so that each account has its own circuit and its own virtual private gateway attachments for its VPCs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Direct Connect gateway is the construct that lets one connection reach many VPCs across accounts and Regions, and associating Transit Gateways with it collapses the per-VPC attachments into a small number of associations that scale to the whole estate. A private virtual interface per VPC hits the virtual interface limit well before 40 and multiplies BGP sessions. A virtual private gateway attaches to exactly one VPC and cannot be shared across accounts this way. Extra circuits add cost and do not solve the multi-VPC reachability problem.",
    referenceUrl: "https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html",
    tags: ["Direct Connect", "Transit Gateway", "Hybrid", "Networking"]
  },
  {
    id: "aws-sap-304",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Controlling Who Can Share Resources Externally",
    scenario: "A company uses Resource Access Manager to share subnets and Transit Gateways internally. Security wants to ensure nobody can share a resource with an account outside the organization, while internal sharing continues freely.",
    question: "Which control enforces this?",
    options: [
      { id: 'A', text: "Disable external sharing for the organization in Resource Access Manager and deny ram:CreateResourceShare when allowExternalPrincipals is true for any new share." },
      { id: 'B', text: "Create an AWS Config rule that reports every resource share whose principals include an account outside the organization so security can remove it." },
      { id: 'C', text: "Deny the ram:CreateResourceShare action entirely through a service control policy so that only the platform team is able to create any resource share." },
      { id: 'D', text: "Enable IAM Access Analyzer with the organization as the zone of trust so that a share to an external account generates a finding for the security team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Turning off external sharing at the organization level makes shares to outside principals impossible, and denying creation of a share with allowExternalPrincipals set to true closes the same path at the policy layer, while ordinary internal shares are unaffected. A Config rule reports a share that already exists. Denying share creation entirely blocks the internal sharing the company depends on. Access Analyzer detects external access rather than preventing it.",
    referenceUrl: "https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html",
    tags: ["Resource Access Manager", "Organizations", "Data Perimeter", "Security"]
  },
  {
    id: "aws-sap-305",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Keeping a Landing Zone Current",
    scenario: "A landing zone built two years ago has drifted: some accounts miss newer controls, the network baseline differs between accounts, and nobody is sure which accounts were provisioned before a given change.",
    question: "Which practice prevents this drift recurring?",
    options: [
      { id: 'A', text: "Express the baseline as versioned infrastructure as code deployed through StackSets, with drift detection reported centrally." },
      { id: 'B', text: "Document the baseline in the platform team's runbook and review it annually." },
      { id: 'C', text: "Rebuild the landing zone from scratch each year so that every account is provisioned with the current baseline at the point the rebuild is performed." },
      { id: 'D', text: "Grant the platform team administrative access to every account so that it can apply missing controls manually whenever an account is found to be out of date." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Drift happens when the baseline lives in people's memory rather than in code, so a versioned definition deployed by StackSets with automatic deployment means every account converges on the current version and drift detection makes divergence visible rather than discovered later. Runbook documentation and annual review is the process that produced the current state. Rebuilding annually is disruptive and impossible for accounts with running workloads. Manual application by the platform team scales badly and leaves no record of which version an account holds.",
    referenceUrl: "https://docs.aws.amazon.com/controltower/latest/userguide/drift.html",
    tags: ["Landing Zone", "StackSets", "Drift", "Infrastructure as Code"]
  },
  {
    id: "aws-sap-306",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Choosing a Boundary for Regulated Workloads",
    scenario: "A company must run a workload subject to a strict compliance regime alongside its other workloads. Auditors will examine the regulated workload's environment and the company wants the audit scope as small as possible.",
    question: "Which placement minimizes audit scope?",
    options: [
      { id: 'A', text: "A dedicated account for the regulated workload, in its own organizational unit with its own controls." },
      { id: 'B', text: "A dedicated VPC inside the existing production account, separated by security groups." },
      { id: 'C', text: "A dedicated set of subnets inside the existing production VPC, with resource tags identifying which of the resources fall inside the regulated scope." },
      { id: 'D', text: "The existing production account with IAM policies restricting which principals are able to access the regulated workload's resources within that account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Audit scope follows the boundary an auditor can verify, and an account is the strongest boundary AWS offers, so a dedicated account in its own organizational unit means the evidence covers that account alone rather than everything sharing it. A separate VPC in a shared account leaves account-level identity, logging, and quotas in scope. Subnets and tags inside a shared VPC are weaker still and rely on configuration an auditor must inspect in detail. IAM restrictions in a shared account keep the whole account within scope.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/benefits-of-using-multiple-aws-accounts.html",
    tags: ["Compliance", "Account Boundary", "Audit Scope", "Governance"]
  },
  {
    id: "aws-sap-307",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing a Rate Limit That Is Fair Between Tenants",
    scenario: "A shared API must stop any one tenant consuming the whole service. Tenants have different contracted rates, limits must apply across all instances rather than per instance, and exceeding the limit must return a clear response.",
    question: "Which approach implements the limit correctly?",
    options: [
      { id: 'A', text: "Use API Gateway usage plans with a per-tenant API key, throttle and quota settings matching each contract." },
      { id: 'B', text: "Use an AWS WAF rate-based rule keyed on the client address." },
      { id: 'C', text: "Implement a token bucket in each application instance's memory, sized so the total across the fleet matches the contracted rate for each of the tenants." },
      { id: 'D', text: "Set reserved concurrency on the backing Lambda function so that no tenant's traffic is able to consume more than its share of the available concurrency." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Usage plans are evaluated by the managed service rather than any one instance, so the limit is global, they attach per API key allowing different contracted rates, and they return a clear 429 response with quota headers. A WAF rate rule keys on address, so a tenant behind many addresses evades it and several tenants behind one gateway are penalized together. An in-memory token bucket per instance cannot enforce a fleet-wide limit because instances do not share state. Reserved concurrency bounds total capacity without distinguishing tenants.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html",
    tags: ["API Gateway", "Rate Limiting", "Multi-Tenancy", "Usage Plans"]
  },
  {
    id: "aws-sap-308",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Between Copying and Referencing Data",
    scenario: "A reporting team needs the operational database's data. The operational team refuses direct access because reporting queries once caused an outage, and the reporting team needs data no more than an hour old.",
    question: "Which integration meets both teams' needs?",
    options: [
      { id: 'A', text: "Export changes to a separate analytics store on a schedule the operational team controls, leaving the operational database untouched by reporting." },
      { id: 'B', text: "Give the reporting team read access to a dedicated read replica of the operational database so their queries never touch the writer instance at all." },
      { id: 'C', text: "Give the reporting team read access to the operational database with a resource governor limiting the resources any single reporting query is able to consume." },
      { id: 'D', text: "Have the reporting team call the operational team's API for the data they need so that access is mediated by the service that owns the data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Copying into a store the reporting team owns decouples the two workloads completely, so a heavy report cannot affect the operational system regardless of what it does, and an hourly export comfortably meets the freshness requirement. A read replica is a reasonable middle ground and removes the writer risk, but replicas share the cluster's storage and the operational team has said it does not want reporting on its database. A resource governor limits damage without removing the coupling. An API is poorly suited to bulk analytical extraction.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/data-store-patterns.html",
    tags: ["Analytics", "Decoupling", "Data Integration", "Design"]
  },
  {
    id: "aws-sap-309",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Selecting a Deployment Strategy for a Stateful Service",
    scenario: "A service holds in-memory state for connected clients over long-lived WebSocket connections. Deployments currently drop every connection, and clients reconnect in a thundering herd that overloads the service.",
    question: "Which deployment approach reduces the disruption?",
    options: [
      { id: 'A', text: "Drain connections gradually during a rolling deployment, signalling clients to reconnect with jittered backoff." },
      { id: 'B', text: "Use a blue/green deployment so the entire fleet is replaced at once and clients reconnect to the new environment as soon as traffic has been shifted." },
      { id: 'C', text: "Externalize the connection state to a shared store so that any instance is able to serve any client and deployments no longer affect the connected clients." },
      { id: 'D', text: "Increase the fleet size before each deployment so that the reconnecting clients are spread across more instances when they return after the deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Long-lived connections must end eventually, so the goal is to end them a few at a time and stop clients returning simultaneously, which gradual draining plus a reconnect signal with jittered backoff achieves without changing the architecture. Blue/green shifts every connection at once, which is exactly the herd. Externalizing state is valuable but WebSocket connections themselves terminate on a specific instance, so a deployment still breaks them. A larger fleet absorbs more of the herd without preventing it.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html",
    tags: ["Deployment", "WebSockets", "Thundering Herd", "Resilience"]
  },
  {
    id: "aws-sap-310",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Where to Enforce Authorization",
    scenario: "A system has a web front end, an API gateway, several microservices, and a database. An architect must decide where authorization decisions are made so that a bug in one layer cannot grant access it should not.",
    question: "Which approach is soundest?",
    options: [
      { id: 'A', text: "Authorize at every layer, with coarse checks at the edge and fine-grained decisions enforced by the service that owns the resource and its context." },
      { id: 'B', text: "Authorize at the API gateway only, since every request passes through it and centralizing the decision keeps the authorization logic in one place." },
      { id: 'C', text: "Authorize in the web front end only, since it holds the user's session and can decide what the user is permitted to see before any request is issued." },
      { id: 'D', text: "Authorize in the database only, using row-level security so that the data itself enforces what each user is permitted to read or modify." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Defence in depth means no single bug becomes a breach: the edge rejects obviously invalid requests cheaply while the service owning the resource makes the authoritative fine-grained decision, because only it knows the resource's context. Gateway-only authorization fails if any path reaches a service directly. Front-end authorization is advisory because a client can issue any request it likes. Database row-level security is a strong control but cannot express application-level rules and leaves every layer above unguarded.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html",
    tags: ["Authorization", "Defence in Depth", "Security", "Architecture"]
  },
  {
    id: "aws-sap-311",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing Retention for Event Data",
    scenario: "An event stream feeds both a real-time consumer and an occasional reprocessing job that must be able to replay the last seven days after a bug fix. The team wants to avoid building a separate archive.",
    question: "Which configuration supports both consumers?",
    options: [
      { id: 'A', text: "Extend the Kinesis data stream's retention to seven days so the reprocessing job replays from the stream itself." },
      { id: 'B', text: "Keep the stream's default retention and have the real-time consumer write every record into Amazon S3 so that the reprocessing job reads its input from there." },
      { id: 'C', text: "Replace the stream with an Amazon SQS queue and set the message retention period to seven days so that messages remain available for the reprocessing job." },
      { id: 'D', text: "Replace the stream with an Amazon SNS topic and subscribe both consumers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Kinesis data stream retains records for up to 365 days and multiple consumers read independently at their own position, so extending retention to seven days lets the reprocessing job replay from any point without a separate archive. Writing to S3 from the real-time consumer builds exactly the archive the team wants to avoid and couples the two paths. An SQS message is deleted once processed, so it cannot be replayed by a second consumer. An SNS topic delivers to subscribers present at publish time and retains nothing.",
    referenceUrl: "https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html",
    tags: ["Kinesis", "Retention", "Replay", "Event-Driven"]
  },
  {
    id: "aws-sap-312",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Picking a Service for Server-Side Rendering",
    scenario: "A team needs to host a server-side rendered web application from a container image, with automatic scaling including to zero, HTTPS, and no load balancer or cluster to configure, and they have no container platform experience.",
    question: "Which service fits?",
    options: [
      { id: 'A', text: "AWS App Runner, which builds or takes a container image and serves it over HTTPS with automatic scaling." },
      { id: 'B', text: "Amazon ECS on AWS Fargate behind an Application Load Balancer, which runs the container image without servers to manage but requires the networking to be configured." },
      { id: 'C', text: "Amazon EKS with a managed node group and an ingress controller, which gives the team a standard Kubernetes platform for running the containerized application." },
      { id: 'D', text: "AWS Elastic Beanstalk with the Docker platform, which provisions the environment and the load balancer from the container image the team provides to it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "App Runner takes a container image or source repository and provides an HTTPS endpoint, automatic scaling including down to zero, and deployments, with no load balancer, cluster, or VPC configuration required, which matches a team with no container platform experience. ECS on Fargate is a strong option but the team configures the load balancer, target groups, and networking. EKS requires the most platform knowledge. Elastic Beanstalk provisions infrastructure but exposes EC2 instances and does not scale to zero.",
    referenceUrl: "https://docs.aws.amazon.com/apprunner/latest/dg/what-is-apprunner.html",
    tags: ["App Runner", "Containers", "Serverless", "Web Applications"]
  },
  {
    id: "aws-sap-313",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Handling Personally Identifiable Data in Logs",
    scenario: "An application logs full request bodies for debugging, and a review finds customer names and card numbers in CloudWatch Logs. The team needs debugging capability without the sensitive values being stored or readable.",
    question: "Which approach addresses the exposure?",
    options: [
      { id: 'A', text: "Redact sensitive fields in the application before logging, and apply a CloudWatch Logs data protection policy as a backstop." },
      { id: 'B', text: "Restrict access to the log groups with IAM so that only the small number of engineers who need to debug the application are able to read the log events." },
      { id: 'C', text: "Shorten the log group retention to seven days so that the sensitive values are removed from CloudWatch Logs shortly after they have been written to it." },
      { id: 'D', text: "Encrypt the log group with a customer managed KMS key." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sensitive data should not be written at all, so redacting in the application is the primary control, and a data protection policy that masks known patterns catches what the application misses, giving defence in depth while debugging continues on the redacted content. Restricting access reduces who can see it but the data is still stored and appears in any export. Short retention shortens exposure without preventing it. Encryption protects the data at rest but anyone authorized to read the log group still sees the plaintext.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html",
    tags: ["CloudWatch Logs", "Data Protection", "PII", "Security"]
  },
  {
    id: "aws-sap-314",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "A Scaling Group That Oscillates",
    scenario: "An Auto Scaling group repeatedly adds instances, then removes them minutes later, then adds them again. Cost is higher than expected and the application sees connection churn. Two scaling policies are configured on the same metric.",
    question: "What is the likely cause?",
    options: [
      { id: 'A', text: "Conflicting scaling policies on the same metric with overlapping thresholds, so scaling out changes the metric enough to trigger scaling in, in a repeating cycle." },
      { id: 'B', text: "The health check grace period being too short, so newly launched instances are marked unhealthy before the application has finished starting up on them." },
      { id: 'C', text: "The desired capacity being set manually while a scaling policy is also active, so the group repeatedly returns to the manually configured capacity value." },
      { id: 'D', text: "The instance warmup setting being too long, so the group launches further instances while the previously launched ones are still being counted as warming up." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Oscillation is the classic symptom of two policies fighting: scaling out lowers average utilization past the scale-in threshold, the group removes instances, utilization rises again, and the cycle repeats, which is why a single target tracking policy with an appropriate warmup is the recommended configuration. A short grace period produces repeated termination of new instances rather than a cycle of adding and removing healthy ones. Manual capacity changes produce a one-off correction. A long warmup suppresses further scaling rather than causing oscillation.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html",
    tags: ["Auto Scaling", "Oscillation", "Scaling Policies", "Troubleshooting"]
  },
  {
    id: "aws-sap-315",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Making Sense of a Slow Multi-Service Request",
    scenario: "A request that should take 300 ms occasionally takes 4 seconds. Tracing is enabled and shows the total but the team cannot tell whether the time is spent in the service, in a dependency, or waiting in a queue somewhere.",
    question: "Which tracing practice produces the answer?",
    options: [
      { id: 'A', text: "Add subsegments around each external call and internal phase so the trace attributes time to a specific operation." },
      { id: 'B', text: "Increase the trace sampling rate so more slow requests are captured." },
      { id: 'C', text: "Add custom annotations carrying the tenant and request type so that the slow traces can be filtered and grouped by the attributes that matter." },
      { id: 'D', text: "Enable active tracing on every Lambda function in the request path so that each function's invocation appears as a separate node in the service map." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A trace only attributes time to the spans that exist, so instrumenting each external call and internal phase as its own subsegment is what turns a total duration into an answer about where the time went. A higher sampling rate captures more traces of the same low resolution. Annotations make traces findable and groupable, which helps but does not decompose the duration. Active tracing on functions adds nodes at function granularity while leaving the work inside each function opaque.",
    referenceUrl: "https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html",
    tags: ["X-Ray", "Tracing", "Subsegments", "Observability"]
  },
  {
    id: "aws-sap-316",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing Storage Cost for Infrequently Read Backups",
    scenario: "AWS Backup recovery points for 200 resources are retained for seven years in the warm vault. Restores happen only from points less than 30 days old, and the seven-year retention exists purely to satisfy a regulator.",
    question: "Which change reduces cost while keeping the retention?",
    options: [
      { id: 'A', text: "Add a lifecycle rule to the backup plan moving recovery points to cold storage after 30 days." },
      { id: 'B', text: "Reduce the retention period to 30 days and take a separate annual backup that is retained for the seven years the regulator requires the data to be kept." },
      { id: 'C', text: "Copy the recovery points older than 30 days into an Amazon S3 bucket configured with the Glacier Deep Archive storage class and delete them from the vault." },
      { id: 'D', text: "Reduce the backup frequency for the older resources so that fewer recovery points accumulate over the seven-year period the regulator requires." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Backup lifecycle rules transition recovery points from warm to cold storage automatically, which cuts the per-gigabyte cost substantially while the points remain managed, restorable, and covered by the same retention, matching a pattern where recent points are restored and older ones are kept for compliance. Reducing retention and taking annual backups changes what the regulator is being given. Copying to S3 manually loses the managed restore path. Reducing frequency changes the recovery point objective rather than the storage tier.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html",
    tags: ["AWS Backup", "Lifecycle", "Cold Storage", "Cost Optimization"]
  },
  {
    id: "aws-sap-317",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "An Application That Cannot Survive Its Own Restart",
    scenario: "A service takes 12 minutes to become ready after a restart because it loads a large reference dataset from a database at start-up. Scaling out is therefore useless during a spike and deployments are slow and risky.",
    question: "Which change most improves both scaling and deployment?",
    options: [
      { id: 'A', text: "Bake the reference dataset into the image or load it from a local cache, so start-up no longer depends on a large database read." },
      { id: 'B', text: "Increase the database's provisioned capacity so that the reference dataset is returned faster and the start-up time falls proportionally with the improvement." },
      { id: 'C', text: "Keep a warm pool of pre-initialized instances for scaling events." },
      { id: 'D', text: "Load the reference dataset lazily on first use rather than at start-up so the service reports itself ready before the dataset has been retrieved." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A twelve-minute start-up is a property of the application, and removing the large synchronous read by shipping the data with the image or reading it from local storage attacks the cause, improving scaling, deployment, and recovery together. More database capacity may shave the read but the fundamental coupling remains and every new instance still hammers the database. A warm pool masks the delay for scaling while deployments still take twelve minutes per instance. Lazy loading makes the service report ready before it can serve, moving the latency onto the first unlucky requests.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_withstand_component_failures_fail_over.html",
    tags: ["Start-Up Time", "Scaling", "Deployment", "Performance"]
  },
  {
    id: "aws-sap-318",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Finding Which Resources a Cost Spike Came From",
    scenario: "A Cost Explorer view shows EC2-Other rose sharply. The team cannot tell which resources are responsible because EC2-Other aggregates several usage types and the account runs thousands of resources.",
    question: "Which analysis identifies the specific resources?",
    options: [
      { id: 'A', text: "Query the Cost and Usage Report with resource identifiers enabled, grouping by usage type and resource." },
      { id: 'B', text: "Group the Cost Explorer view by usage type and instance type so the breakdown shows which of the EC2-Other components grew during the period." },
      { id: 'C', text: "Enable AWS Cost Anomaly Detection with a monitor scoped to EC2." },
      { id: 'D', text: "Review the AWS Trusted Advisor cost optimization checks for idle and underutilized EC2 resources that could account for the increase in the charge." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Resource-level identifiers in the Cost and Usage Report are the only place individual resource ARNs appear against line items, so a query grouping by usage type and resource names the specific volumes, gateways, or addresses driving EC2-Other. Cost Explorer's usage type grouping narrows the category, which is a useful first step but stops short of naming resources. Anomaly detection helps with future increases rather than explaining this one. Trusted Advisor lists waste that may be unrelated to the change.",
    referenceUrl: "https://docs.aws.amazon.com/cur/latest/userguide/enable-resource-ids.html",
    tags: ["Cost and Usage Report", "Cost Analysis", "FinOps", "Troubleshooting"]
  },
  {
    id: "aws-sap-319",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Handling a Region-Wide Service Event",
    scenario: "An AWS service the workload depends on is degraded in one Region. The team's runbook says to fail over to a second Region, but doing so is disruptive and the event may resolve in minutes.",
    question: "Which practice supports a good decision under uncertainty?",
    options: [
      { id: 'A', text: "Define failover criteria in advance, such as a duration threshold and a customer impact level, and follow them rather than deciding under pressure during the incident." },
      { id: 'B', text: "Wait for AWS to publish an estimated resolution time on the Health Dashboard and base the failover decision on whether that estimate exceeds the objective." },
      { id: 'C', text: "Fail over immediately whenever a dependency is reported as degraded, since acting quickly minimizes the time customers spend affected by the event." },
      { id: 'D', text: "Avoid failing over unless the service becomes completely unavailable, since a partial degradation is usually resolved faster than a failover can be completed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deciding under pressure with incomplete information produces inconsistent outcomes, so agreeing the criteria beforehand, expressed as customer impact sustained for a defined period, turns the decision into an observation and removes the debate from the incident. Waiting for a published estimate cedes the decision to information that often does not arrive in time. Failing over on every degradation causes unnecessary disruption for events that resolve quickly. Waiting for total unavailability ignores degradations that breach the objective while the service is technically up.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Failover", "Incident Response", "Decision Making", "Resilience"]
  },
  {
    id: "aws-sap-320",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing Toil in an On-Call Rotation",
    scenario: "An on-call rotation receives 40 pages a week. Analysis shows 30 are the same three alerts, each resolved by running a documented command, and engineers are burning out while genuine incidents get less attention.",
    question: "Which change reduces the load most?",
    options: [
      { id: 'A', text: "Automate the documented remediation for the three recurring alerts and page only when the automation fails." },
      { id: 'B', text: "Raise the thresholds on the three recurring alerts so that they fire less often and the on-call engineer is paged only for the more severe occurrences." },
      { id: 'C', text: "Add more engineers to the on-call rotation to spread the pages." },
      { id: 'D', text: "Convert the three recurring alerts into tickets rather than pages so they are handled during working hours instead of waking the on-call engineer at night." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An alert whose resolution is a documented command is automation waiting to happen, and running it automatically while paging only on failure removes three quarters of the load without losing the signal. Raising thresholds hides conditions that genuinely need action. More engineers spreads the toil rather than removing it and consumes capacity that could fix the cause. Converting to tickets helps sleep but leaves the same manual work and delays resolution of a condition that was considered page-worthy.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/oe_workload_observability_auto_response.html",
    tags: ["Toil", "Automation", "On-Call", "Operational Excellence"]
  },
  {
    id: "aws-sap-321",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Migrating a Workload With an Unsupported Database Version",
    scenario: "An application runs on a database version that Amazon RDS does not offer. The vendor supports the application only on that version, and an upgrade requires vendor certification that will take nine months.",
    question: "Which migration path fits the constraint?",
    options: [
      { id: 'A', text: "Run the database on EC2 at the current version, then move to RDS once the vendor certifies a supported version." },
      { id: 'B', text: "Migrate to the nearest RDS-supported version now and run the application unsupported until the vendor completes its certification of that version." },
      { id: 'C', text: "Delay the whole migration until the vendor certification completes so the database can move directly onto a supported Amazon RDS version." },
      { id: 'D', text: "Use AWS Database Migration Service to convert the database to a different engine that Amazon RDS supports at a version the vendor has already certified." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running the database on EC2 preserves the exact version the vendor supports, lets the migration proceed on schedule, and leaves a clear path to the managed service once certification lands, which is a common and legitimate interim state. Running unsupported risks losing vendor support during an incident. Delaying the entire migration for nine months usually conflicts with the deadline driving it. A different engine is a far larger change and would itself need vendor certification.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-databases/welcome.html",
    tags: ["Migration", "Databases", "EC2", "Vendor Support"]
  },
  {
    id: "aws-sap-322",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Modernizing Authentication During a Migration",
    scenario: "A migrated application authenticates users against a local database of usernames and hashed passwords. The company wants single sign-on and multi-factor authentication without rewriting the application's session handling.",
    question: "Which approach delivers this with least change?",
    options: [
      { id: 'A', text: "Put the application behind an Application Load Balancer configured to authenticate with an OpenID Connect provider before forwarding the request with identity claims as headers." },
      { id: 'B', text: "Rewrite the application's authentication layer to use Amazon Cognito user pools so that sign-on and multi-factor authentication are handled by the user pool." },
      { id: 'C', text: "Synchronize the corporate directory into the application's local user database so users have the same credentials in both systems without an application change." },
      { id: 'D', text: "Place the application behind Amazon CloudFront with a Lambda@Edge function that validates a token issued by the corporate identity provider on each request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Application Load Balancer authentication performs the OpenID Connect flow at the load balancer and forwards identity claims in headers, so single sign-on and any multi-factor policy the provider enforces arrive without touching the application's own session handling. Rewriting the authentication layer is exactly the change the requirement excludes, whatever provider is used. Synchronizing passwords keeps a second credential store and adds no single sign-on or second factor. A Lambda@Edge token validator would work but is bespoke code implementing what the load balancer already provides.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html",
    tags: ["Application Load Balancer", "OIDC", "Authentication", "Modernization"]
  },
  {
    id: "aws-sap-323",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Keeping Two Environments Configured Identically",
    scenario: "After migration, the AWS environment and the remaining on-premises environment drift apart because changes are applied by hand in both. Incidents are frequently caused by a setting present in one and missing in the other.",
    question: "Which practice removes the drift?",
    options: [
      { id: 'A', text: "Manage both environments' configuration from one source of truth applied by automation, with drift reported against it." },
      { id: 'B', text: "Document the required configuration in a wiki page and review it each sprint." },
      { id: 'C', text: "Assign one engineer responsibility for applying every configuration change to both environments so that a change is never applied to only one of them." },
      { id: 'D', text: "Accelerate the migration so that the on-premises environment is decommissioned sooner and the drift between the two environments stops being a problem." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Drift is caused by two independent manual paths, so a single declarative definition applied by automation to both environments with drift detection reporting divergence removes the mechanism that creates it. A wiki page and periodic review is documentation plus human diligence, which is what is already failing. Making one engineer responsible creates a bottleneck and a single point of failure without removing the manual step. Accelerating the migration is worth doing but the environments must coexist meanwhile.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html",
    tags: ["Configuration Management", "Drift", "Hybrid", "Automation"]
  },
  {
    id: "aws-sap-324",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing a Path for a Reporting Database",
    scenario: "A 30 TB on-premises data warehouse runs nightly aggregations for business reporting. Queries are complex SQL over star schemas, concurrency is low, and the team wants managed infrastructure and better query performance.",
    question: "Which target suits the workload?",
    options: [
      { id: 'A', text: "Amazon Redshift, a columnar warehouse built for complex analytical SQL at this scale." },
      { id: 'B', text: "Amazon Aurora PostgreSQL, which offers managed infrastructure and scales reads through replicas for the reporting queries the business runs each night." },
      { id: 'C', text: "Amazon DynamoDB with a carefully designed single-table model so the reporting access patterns are served with predictable single-digit millisecond latency." },
      { id: 'D', text: "Amazon S3 with Amazon Athena, which removes the infrastructure entirely and charges only for the data scanned by each of the nightly reporting queries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Redshift is purpose-built for this shape: columnar storage, zone maps, and a cost-based optimizer for star schema joins give large gains over a row-oriented warehouse at 30 TB with complex SQL and low concurrency. Aurora is an excellent transactional engine but row-oriented and not designed for warehouse-scale aggregation. DynamoDB has no join capability and cannot serve ad hoc analytical SQL. Athena over S3 is a credible alternative for low query volumes but gives less consistent performance on complex multi-way joins than a tuned warehouse.",
    referenceUrl: "https://docs.aws.amazon.com/redshift/latest/dg/c_high_level_system_architecture.html",
    tags: ["Redshift", "Data Warehouse", "Migration", "Analytics"]
  },
  {
    id: "aws-sap-325",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Recognizing When Not to Modernize",
    scenario: "A team proposes rewriting a working payroll integration as microservices. It changes once a year, is understood by two engineers, has never caused an incident, and the business has no plans to extend it.",
    question: "What should the architect advise?",
    options: [
      { id: 'A', text: "Leave it as it is, because modernization effort should go where change is frequent or reliability is poor." },
      { id: 'B', text: "Rewrite it as microservices so that the whole estate follows one consistent architectural pattern and no legacy components are left behind after the programme." },
      { id: 'C', text: "Rewrite it as serverless functions so that the infrastructure cost falls for a component that is only exercised once a year by the payroll process." },
      { id: 'D', text: "Rewrite it incrementally using the strangler fig pattern so that the modernization is delivered gradually without a single large and risky release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modernization is an investment that pays back through faster change or better reliability, and a component that changes annually and has never failed offers neither, so the effort is better spent where it returns something. Architectural consistency for its own sake is not a business outcome and carries the full risk of a rewrite. Infrastructure cost for an annual job is negligible compared with the engineering cost of rewriting it. The strangler fig pattern reduces the risk of a rewrite that is worth doing, which this one is not.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-pathways/welcome.html",
    tags: ["Modernization", "Prioritization", "Trade-Offs", "Strategy"]
  }
];

export default AWS_SAP_QUESTIONS;
