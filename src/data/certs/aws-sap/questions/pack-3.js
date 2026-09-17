export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-51",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Centralizing Certificate Issuance for Internal Services",
    scenario: "A company terminates TLS on internal load balancers in 30 accounts. Each team currently generates its own self-signed material, so expiry causes outages and there is no inventory of what is deployed where.",
    question: "Which design centralizes issuance while letting teams obtain their own certificates?",
    options: [
      { id: 'A', text: "Run AWS Private Certificate Authority in a shared account and share the CA with the organization through AWS Resource Access Manager for per-account issuance." },
      { id: 'B', text: "Request a public AWS Certificate Manager certificate in each account and validate ownership of the internal domain names using DNS records." },
      { id: 'C', text: "Store one wildcard certificate and its private key in AWS Secrets Manager and grant every account read access to that shared secret." },
      { id: 'D', text: "Run an EC2-based certificate authority in each account and rotate the issued material with a scheduled Systems Manager Automation runbook." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A shared AWS Private CA gives one trusted root, per-account issuance through Resource Access Manager, managed renewal for certificates associated with integrated services, and a single inventory of what has been issued. Public ACM certificates cannot be issued for names that are not publicly resolvable and owned. Distributing one wildcard private key to 30 accounts means any compromise affects every service and rotation becomes a coordinated outage. A CA per account recreates the fragmentation and adds thirty CAs to operate.",
    referenceUrl: "https://docs.aws.amazon.com/privateca/latest/userguide/PcaWelcome.html",
    tags: ["Private CA", "Certificate Manager", "Resource Access Manager", "Security"]
  },
  {
    id: "aws-sap-52",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Backup Policy Applied Organization Wide",
    scenario: "An auditor requires that every EBS volume and RDS instance tagged for production in any of 90 accounts be backed up daily and retained for 35 days, with the backups held in an account that workload teams cannot reach.",
    question: "Which approach enforces the policy across the organization?",
    options: [
      { id: 'A', text: "Use AWS Backup with an organization backup policy applied to the organizational unit, copying each recovery point into a vault in a central account." },
      { id: 'B', text: "Create an Amazon Data Lifecycle Manager policy in every account that snapshots the tagged volumes daily and expires the snapshots after 35 days." },
      { id: 'C', text: "Schedule a Systems Manager Automation runbook per account that calls the snapshot APIs each night and deletes snapshots older than the retention period." },
      { id: 'D', text: "Enable point-in-time recovery on each resource and rely on the service's own continuous backup to satisfy the retention requirement." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Backup policies are an Organizations policy type, so the management or delegated administrator account applies one policy to an organizational unit and every current and future member account inherits it, while cross-account copy places the recovery points in a vault the workload teams have no access to. Data Lifecycle Manager handles EBS snapshots only and must be configured per account. Per-account automation runbooks are bespoke code with no central enforcement. Point-in-time recovery keeps data inside the source account, so a compromise there reaches the backups.",
    referenceUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/create-cross-account-backup.html",
    tags: ["AWS Backup", "Organizations", "Retention", "Compliance"]
  },
  {
    id: "aws-sap-53",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Connecting Hundreds of Branch Sites",
    scenario: "A retailer must connect 400 stores to AWS. Each store has two broadband circuits from different providers. The network team wants automated tunnel setup, per-store monitoring, and no manual configuration as stores open or close.",
    question: "Which connectivity approach scales to this estate?",
    options: [
      { id: 'A', text: "Use AWS Transit Gateway Connect with SD-WAN appliances at each store, registered and onboarded through the partner's management console." },
      { id: 'B', text: "Create a Site-to-Site VPN connection per store terminating on a virtual private gateway attached to the production VPC." },
      { id: 'C', text: "Order an AWS Direct Connect hosted connection for each store from a partner serving all of the retailer's regional markets." },
      { id: 'D', text: "Deploy a pair of EC2 router instances per store's traffic in a transit VPC and manage the tunnel configuration with Ansible." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Transit Gateway Connect provides GRE tunnels with BGP to SD-WAN appliances and the partner integration automates tunnel creation and store onboarding, so opening a store is a provisioning action rather than a network change, with per-attachment metrics for monitoring. A virtual private gateway supports far fewer connections than 400 and offers no per-store automation. Direct Connect at 400 retail sites is prohibitively slow and expensive to provision. A self-managed transit VPC of router instances puts availability, scaling, and patching of 400 tunnels onto the team.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html",
    tags: ["Transit Gateway Connect", "SD-WAN", "Hybrid", "Networking"]
  },
  {
    id: "aws-sap-54",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Limiting What Developers Can Provision",
    scenario: "A platform team wants developers in sandbox accounts to launch only approved patterns, such as a web application stack with a database, without granting them the underlying permissions on EC2, RDS, or IAM directly.",
    question: "Which service provides governed self-service provisioning?",
    options: [
      { id: 'A', text: "AWS Service Catalog, publishing the approved patterns as products that developers launch under a launch constraint role." },
      { id: 'B', text: "AWS Proton, defining environment and service templates that the platform team versions and developers deploy into their own accounts." },
      { id: 'C', text: "An IAM permissions boundary on each developer role allowing only the resource types the approved patterns create." },
      { id: 'D', text: "A CloudFormation StackSet targeting the sandbox organizational unit that deploys the approved stacks into every sandbox account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service Catalog is built for this: products encapsulate the approved templates, and a launch constraint lets CloudFormation assume a role with the real permissions so the developer needs only permission to launch the product, never the underlying services. Proton is a close relative aimed at platform teams serving container and serverless applications and carries a heavier template model than this requirement needs. A permissions boundary constrains what a developer may do but does not offer a catalogue or enforce the approved shape. A StackSet pushes stacks out centrally and is not self-service at all.",
    referenceUrl: "https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html",
    tags: ["Service Catalog", "Governance", "Self-Service", "IAM"]
  },
  {
    id: "aws-sap-55",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Tracing a Change Back to a Person",
    scenario: "Engineers reach 80 accounts through IAM Identity Center permission sets that map to a shared role in each account. After an incident, the security team could see the role that made the change but not which engineer was behind it.",
    question: "Which detail in the CloudTrail record identifies the individual?",
    options: [
      { id: 'A', text: "The role session name in the assumed role user identity, which IAM Identity Center populates from the federated user's identity store name." },
      { id: 'B', text: "The source IP address field, correlated against the corporate VPN allocation records for the period covering the incident." },
      { id: 'C', text: "The user agent string, which records the client and operating system the caller used when the API request was signed and sent." },
      { id: 'D', text: "The access key id in the request, which can be looked up against the long-lived credentials issued to each engineer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a principal assumes a role, CloudTrail records the assumed role user with an ARN ending in the role session name, and IAM Identity Center populates that session name from the federated identity, so the individual is visible in every event without extra correlation. Source IP requires external records and fails for shared egress addresses. The user agent describes tooling rather than identity. Access keys from an assumed role are temporary and are not issued per engineer, so there is nothing stable to look up.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html",
    tags: ["CloudTrail", "IAM Identity Center", "Auditing", "Attribution"]
  },
  {
    id: "aws-sap-56",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Reserving Capacity Discounts Across Accounts",
    scenario: "An organization uses consolidated billing. A team in one member account buys Reserved Instances that it does not fully use, while another member account runs matching on-demand instances in the same Availability Zone at full price.",
    question: "What determines whether the unused reservation benefits the other account?",
    options: [
      { id: 'A', text: "Whether reserved instance discount sharing is enabled for both accounts in the billing preferences." },
      { id: 'B', text: "Whether the two member accounts sit inside the same organizational unit within the organization's structure." },
      { id: 'C', text: "Whether the reservation was purchased as a zonal reservation rather than as a regional reservation in that account." },
      { id: 'D', text: "Whether both accounts have opted in to the same Savings Plans purchase commitment for the compute family." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Consolidated billing shares Reserved Instance and Savings Plans discounts across accounts by default, and the management account controls this per account through the discount sharing billing preference, so that setting is what decides whether the unused reservation applies elsewhere. Organizational unit membership affects policy inheritance, not billing benefit. The zonal or regional choice affects capacity reservation and scope flexibility within the Region but not whether sharing occurs. Savings Plans are a separate purchase and do not govern Reserved Instance sharing.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html",
    tags: ["Reserved Instances", "Consolidated Billing", "Organizations", "Cost"]
  },
  {
    id: "aws-sap-57",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing a Query Engine for Archived Logs",
    scenario: "A team archives 40 TB of JSON application logs per year into Amazon S3. Investigations happen a few times a month and touch a narrow date range. Nobody wants to run a cluster, and cost should track what is actually queried.",
    question: "Which analysis approach fits the pattern?",
    options: [
      { id: 'A', text: "Query the logs with Amazon Athena over a table partitioned by date, converting the data to columnar Parquet as it lands." },
      { id: 'B', text: "Load the logs into an Amazon Redshift cluster sized for the full archive and query them with its SQL interface." },
      { id: 'C', text: "Stream the logs into an Amazon OpenSearch Service domain with hot and warm tiers and search them through its query interface." },
      { id: 'D', text: "Run an Amazon EMR cluster with Spark against the raw JSON in Amazon S3 whenever an investigation requires historical data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Athena is serverless and charges per byte scanned, so infrequent queries cost almost nothing when idle, and partitioning by date plus columnar Parquet means a narrow date range scans a small fraction of the archive. A Redshift cluster sized for 40 TB runs and bills continuously for a few queries a month. An OpenSearch domain likewise runs continuously and is optimized for near-real-time search rather than occasional historical analysis. EMR removes the idle cost only if clusters are transient, but it still requires cluster management for what is a SQL question.",
    referenceUrl: "https://docs.aws.amazon.com/athena/latest/ug/what-is.html",
    tags: ["Athena", "S3", "Parquet", "Analytics"]
  },
  {
    id: "aws-sap-58",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Guaranteeing Capacity for a Fixed Event",
    scenario: "A broadcaster needs 800 specific EC2 instances available in one Availability Zone for a sporting event in three months. Missing capacity on the day is unacceptable, and the instances will run for only 12 hours.",
    question: "Which approach guarantees the capacity is there?",
    options: [
      { id: 'A', text: "Create an On-Demand Capacity Reservation for the instance type and Availability Zone, scheduled to start ahead of the event day." },
      { id: 'B', text: "Purchase zonal Reserved Instances for the instance type and Availability Zone, then run the fleet on demand during the event." },
      { id: 'C', text: "Request a Spot Fleet with a capacity-optimized allocation strategy spread across several instance types and sizes." },
      { id: 'D', text: "Raise the account's EC2 service quota for that instance family well above 800 vCPUs several weeks before the event." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An On-Demand Capacity Reservation holds physical capacity in a chosen Availability Zone for a chosen instance type from the moment it is created, independent of any billing commitment, which is what makes the capacity certain on the day. Zonal Reserved Instances do carry a capacity reservation, but they commit to a one or three year term for a 12-hour need, so the reservation alone is the better fit. Spot offers no capacity guarantee by definition. A quota increase removes an account limit but reserves no physical capacity.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html",
    tags: ["Capacity Reservation", "EC2", "Availability", "Planning"]
  },
  {
    id: "aws-sap-59",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Authorizing Third-Party Access Without Shared Keys",
    scenario: "A monitoring vendor needs read access to a company's AWS account. The vendor runs in its own AWS account. The company's security team refuses to issue IAM user access keys and wants protection against a confused deputy attack.",
    question: "Which access design should be used?",
    options: [
      { id: 'A', text: "Create a cross-account IAM role trusting the vendor's account, with an sts:ExternalId condition set to a value the vendor supplies." },
      { id: 'B', text: "Create an IAM role with a trust policy allowing any AWS principal, restricting actions to read-only in the permissions policy." },
      { id: 'C', text: "Create an IAM user for the vendor with a read-only policy and rotate its access keys automatically every 30 days using Secrets Manager." },
      { id: 'D', text: "Publish the account's data to an S3 bucket and grant the vendor's account read access through a bucket policy referencing their account id." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A cross-account role issues only temporary credentials and the external id condition is the documented defence against the confused deputy problem, because the vendor must present a value the company knows, so another of the vendor's customers cannot trick them into assuming this role. A trust policy allowing any principal lets any AWS account assume the role. An IAM user is the long-lived credential the security team rejected, and rotation does not change that. Copying data into a bucket changes the integration rather than providing the read access the vendor needs.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html",
    tags: ["IAM", "Cross-Account", "External ID", "Security"]
  },
  {
    id: "aws-sap-60",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Serving Machine Learning Inference With Spiky Demand",
    scenario: "A team deploys a model that must answer in under 200 ms. Requests arrive in bursts during business hours and stop entirely overnight. The team wants to avoid paying for idle GPU capacity but cannot accept a cold start on every burst.",
    question: "Which Amazon SageMaker hosting option fits?",
    options: [
      { id: 'A', text: "A real-time endpoint with automatic scaling and a minimum instance count of one, so a warm instance answers the first request." },
      { id: 'B', text: "A serverless inference endpoint with provisioned concurrency sized to the expected burst so requests avoid the cold start entirely." },
      { id: 'C', text: "An asynchronous inference endpoint that queues each request and scales the instance count to zero between the business-hours bursts." },
      { id: 'D', text: "A batch transform job scheduled at intervals through the day to score the accumulated requests in bulk against the model." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A real-time endpoint answers synchronously within the latency budget, and automatic scaling with a floor of one instance keeps a warm instance available for the first request of a burst while scaling out for the peak and back down afterwards. Serverless inference does not support GPU instances, which the model requires. Asynchronous inference is designed for long-running payloads and returns a result by notification, which does not meet a 200 ms synchronous requirement. Batch transform is offline scoring and cannot answer a live request at all.",
    referenceUrl: "https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html",
    tags: ["SageMaker", "Inference", "Auto Scaling", "Machine Learning"]
  },
  {
    id: "aws-sap-61",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Keeping Configuration Out of Container Images",
    scenario: "A team runs containers on Amazon ECS with Fargate. Database passwords are currently baked into the image, which means a credential change requires a rebuild and the value is visible to anyone who can pull the image.",
    question: "How should the credential reach the container at run time?",
    options: [
      { id: 'A', text: "Reference the Secrets Manager secret in the task definition so the agent injects it as an environment variable at launch." },
      { id: 'B', text: "Store the credential in an encrypted S3 object and have the container entrypoint script download and export it before starting the application." },
      { id: 'C', text: "Pass the credential as a plain environment variable in the task definition so it is set outside the image at deployment time." },
      { id: 'D', text: "Mount an Amazon EFS access point holding a configuration file that the application reads when it starts inside the task." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The ECS task definition supports secret references to Secrets Manager and Parameter Store, so the agent resolves the value using the task execution role at launch and the secret never appears in the image or the task definition, while rotation takes effect on the next deployment. Fetching from S3 in an entrypoint is workable but writes bespoke code and needs its own credential handling. A plain environment variable removes the value from the image but leaves it readable in the task definition and the console. An EFS configuration file adds a shared file system and still stores the credential in a place without rotation or audit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html",
    tags: ["ECS", "Secrets Manager", "Fargate", "Security"]
  },
  {
    id: "aws-sap-62",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing for a Regional Service Disruption",
    scenario: "An architect is designing a system that must survive the loss of an entire AWS Region with an RTO of one hour and an RPO of 15 minutes. Budget rules out running full production capacity in a second Region continuously.",
    question: "Which disaster recovery strategy matches these targets and the budget?",
    options: [
      { id: 'A', text: "Pilot light, keeping data replicating continuously and the core infrastructure provisioned while the application capacity remains switched off." },
      { id: 'B', text: "Backup and restore, taking regular snapshots that are copied to the second Region and restored into new infrastructure when a disaster is declared." },
      { id: 'C', text: "Warm standby, running a fully functional but reduced-capacity copy of the entire production environment continuously in the second Region." },
      { id: 'D', text: "Multi-site active-active, serving live traffic from both Regions at full capacity with a global data layer replicating writes in both directions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pilot light keeps data replicating continuously, which delivers a 15-minute RPO, while core infrastructure such as databases exists but application capacity is switched off, so recovery is a scale-up measured in tens of minutes and the idle cost stays low. Backup and restore is cheaper still but its RTO runs to many hours because the environment is built after the event. Warm standby meets the targets comfortably but costs more than pilot light by running the full environment continuously. Multi-site active-active is the most expensive option and far exceeds what a one-hour RTO requires.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html",
    tags: ["Disaster Recovery", "Pilot Light", "RTO", "Multi-Region"]
  },
  {
    id: "aws-sap-63",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Filtering Events Without Custom Routing Code",
    scenario: "A platform publishes 40 event types onto one Amazon EventBridge bus. Each of 15 consuming teams cares about a different subset. The platform team does not want to maintain routing logic or a dispatcher function of its own.",
    question: "How should events reach the right consumers?",
    options: [
      { id: 'A', text: "Have each team create its own EventBridge rule with an event pattern matching the event types it cares about and its own target." },
      { id: 'B', text: "Publish to an Amazon SNS topic per event type and let each consuming team subscribe its own queue to the topics that it needs." },
      { id: 'C', text: "Route every event to a single Lambda dispatcher that inspects the detail type and forwards each event to the correct consumer queue." },
      { id: 'D', text: "Write every event to an Amazon Kinesis data stream and have each team run a consumer that reads the full stream and discards what it does not need." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Content-based filtering with event patterns is EventBridge's core function: each consumer owns a rule, the bus evaluates the pattern, and the platform team writes no routing code and is not involved when a team changes its subscription. Forty SNS topics shifts the problem to topic sprawl and the publisher must choose the topic. A Lambda dispatcher is precisely the custom routing code the team wants to avoid. Having every team read the whole Kinesis stream wastes throughput and pushes filtering into fifteen separate consumers.",
    referenceUrl: "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html",
    tags: ["EventBridge", "Event-Driven", "Filtering", "Decoupling"]
  },
  {
    id: "aws-sap-64",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Protecting Objects From Accidental Deletion",
    scenario: "A team wants to ensure that no object in a compliance archive bucket can be deleted or overwritten for seven years, including by an administrator with full S3 permissions in the account that owns the bucket.",
    question: "Which S3 feature provides this guarantee?",
    options: [
      { id: 'A', text: "S3 Object Lock in compliance mode, with a seven-year retention period applied to every object version written to the compliance archive bucket." },
      { id: 'B', text: "S3 Versioning combined with MFA delete, so that removing a version requires a second factor from the bucket owner's root credentials." },
      { id: 'C', text: "An S3 bucket policy denying the delete and overwrite actions for every principal except an explicitly named break-glass administrator role." },
      { id: 'D', text: "S3 Lifecycle rules that transition the objects to S3 Glacier Deep Archive, where the minimum storage duration prevents early deletion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Object Lock in compliance mode is write-once-read-many enforced by the service itself: for the retention period no user, including the root user of the owning account, can delete or overwrite the object version or shorten the retention. Versioning with MFA delete raises the bar but a root user holding the device can still delete. A bucket policy can be edited by anyone who can change the policy, so it constrains nothing permanently. A Deep Archive minimum duration produces an early deletion charge rather than preventing deletion.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    tags: ["S3", "Object Lock", "Compliance", "WORM"]
  },
  {
    id: "aws-sap-65",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Bounding Concurrency Against a Fragile Dependency",
    scenario: "An AWS Lambda function triggered from an Amazon SQS queue writes to a legacy on-premises system that fails above 50 concurrent connections. During traffic peaks Lambda scales far beyond that and the legacy system falls over.",
    question: "Which configuration protects the dependency?",
    options: [
      { id: 'A', text: "Set reserved concurrency on the function to 50 so that it can never scale past the connection limit the legacy system tolerates." },
      { id: 'B', text: "Reduce the event source mapping batch size so that each invocation of the function opens fewer connections to the legacy system per batch." },
      { id: 'C', text: "Increase the queue's visibility timeout so that messages already in flight are not redelivered while the legacy system is recovering from overload." },
      { id: 'D', text: "Configure provisioned concurrency at 50 so a fixed pool of initialized execution environments handles the peak traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Reserved concurrency is a hard ceiling on how many execution environments a function may have at once, so setting it to 50 makes the dependency's limit structurally impossible to exceed while SQS simply retains the backlog until capacity frees up. Batch size changes how many records one invocation handles but not how many invocations run in parallel. A longer visibility timeout affects redelivery timing, not concurrency. Provisioned concurrency pre-warms environments and sets a floor rather than a ceiling, so the function still scales past 50 on demand.",
    referenceUrl: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html",
    tags: ["Lambda", "Reserved Concurrency", "SQS", "Throttling"]
  },
  {
    id: "aws-sap-66",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Alerting on What Users Experience",
    scenario: "An operations team receives dozens of CPU and memory alarms a week, almost none of which correspond to a customer-visible problem, while two genuine outages were reported by customers before any alarm fired.",
    question: "Which change most improves the signal the team acts on?",
    options: [
      { id: 'A', text: "Alarm on service level indicators such as request error rate and end-to-end latency measured where the customer enters the system." },
      { id: 'B', text: "Raise the thresholds on the existing CPU and memory alarms so that only sustained and severe resource pressure produces a page for the on-call engineer." },
      { id: 'C', text: "Add anomaly detection bands to each of the existing resource metrics so alarms fire on deviation from the learned baseline rather than a fixed value." },
      { id: 'D', text: "Group the existing alarms into a composite alarm so several correlated resource alarms produce one notification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Alarming on symptoms the user experiences, such as error rate and latency at the entry point, is what ties a page to customer impact, and it catches the outages that produced no resource pressure at all. Raising thresholds reduces noise but still measures causes rather than symptoms, so the missed outages stay missed. Anomaly detection makes the same resource signals adaptive without making them user-facing. Composite alarms are a genuine improvement for alarm storms and are worth adding, but they only consolidate notifications about the metrics already being watched.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html",
    tags: ["CloudWatch", "Observability", "SLO", "Alerting"]
  },
  {
    id: "aws-sap-67",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Aurora Writer Saturated by Reporting Queries",
    scenario: "An Aurora MySQL cluster has one writer and two readers. Nightly reporting queries run against the writer because the reporting tool uses the cluster endpoint, and they slow down transactional traffic. The reports tolerate data a few seconds old.",
    question: "Which change relieves the writer with the least application disruption?",
    options: [
      { id: 'A', text: "Point the reporting tool at the cluster's reader endpoint so its queries are balanced across the two existing readers." },
      { id: 'B', text: "Add two further reader instances to the cluster so the additional capacity absorbs the nightly reporting workload alongside the existing readers." },
      { id: 'C', text: "Enable Aurora Serverless v2 on the writer instance so its capacity scales up automatically while the nightly reporting queries are running." },
      { id: 'D', text: "Create a cross-Region Aurora replica and direct the reporting tool at that replica so the reports run entirely outside the primary Region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The cluster endpoint always resolves to the writer, which is why the reports land there; the reader endpoint load balances across the replicas, so changing one connection string moves the entire reporting workload off the writer, and replica lag of a few seconds is within tolerance. Adding readers changes nothing while the tool still connects to the cluster endpoint. Scaling the writer buys headroom but leaves reporting and transactions contending on one instance. A cross-Region replica works but adds replication cost and far more lag than the local readers for no additional benefit.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html",
    tags: ["Aurora", "Reader Endpoint", "Performance", "Databases"]
  },
  {
    id: "aws-sap-68",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Patching a Fleet Without a Maintenance Outage",
    scenario: "A company must apply operating system security patches to 900 EC2 instances monthly, prove to auditors which instances were patched and when, and avoid taking more than a tenth of any Auto Scaling group out of service at once.",
    question: "Which approach meets the operational and audit requirements?",
    options: [
      { id: 'A', text: "Use Systems Manager Patch Manager with a patch baseline, a maintenance window, and a 10 percent concurrency setting." },
      { id: 'B', text: "Build a new AMI each month with EC2 Image Builder and replace every instance in the Auto Scaling groups through an instance refresh." },
      { id: 'C', text: "Run a monthly Systems Manager Run Command document that invokes the operating system package manager across all of the managed instances." },
      { id: 'D', text: "Enable automatic operating system updates inside each instance and collect the resulting package logs into CloudWatch Logs for the auditors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Patch Manager applies a defined baseline during a maintenance window with concurrency and error thresholds, and its compliance reporting records per-instance patch state and timing, which is exactly the audit evidence required. An immutable AMI pipeline with instance refresh is an excellent pattern and honours the concurrency limit, but it does not by itself produce per-instance patch compliance reporting. Run Command patches the fleet without windows, concurrency control, or compliance data. In-instance automatic updates give no central control over timing or concurrency and no consolidated compliance view.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
    tags: ["Patch Manager", "Systems Manager", "Compliance", "Operations"]
  },
  {
    id: "aws-sap-69",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Cutting the Cost of Chatty NAT Gateway Traffic",
    scenario: "A bill review shows large NAT gateway processing charges in an account whose private instances mainly call Amazon S3, Amazon DynamoDB, and AWS Systems Manager. The instances have no other significant internet traffic.",
    question: "Which change reduces the charge most?",
    options: [
      { id: 'A', text: "Add VPC gateway endpoints for S3 and DynamoDB, plus interface endpoints for Systems Manager, so this traffic never reaches the NAT gateway." },
      { id: 'B', text: "Replace the NAT gateway with a NAT instance sized to the observed throughput so the processing charge becomes an instance-hour charge instead." },
      { id: 'C', text: "Move the private instances into the public subnets and give each one a public IP address so their traffic no longer transits the NAT gateway." },
      { id: 'D', text: "Consolidate the per-zone NAT gateways into one NAT gateway so the account pays a single hourly charge instead of one per zone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "VPC endpoints keep the traffic on the AWS network and off the NAT gateway entirely, and gateway endpoints for S3 and DynamoDB carry no hourly or processing charge at all, so the dominant portion of the bill disappears. A NAT instance trades a managed service for one the team must scale and patch, and the data still crosses it. Putting instances in public subnets with public addresses removes the charge but exposes them directly to the internet. Consolidating to one NAT gateway saves hourly charges but adds cross-zone transfer cost and a single point of failure, leaving the processing charge intact.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html",
    tags: ["VPC Endpoints", "NAT Gateway", "Cost Optimization", "Networking"]
  },
  {
    id: "aws-sap-70",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Proving a System Tolerates the Failures It Claims To",
    scenario: "An architecture is documented as surviving the loss of an Availability Zone, but the claim has never been tested and leadership wants evidence gathered in a controlled way before the next peak season rather than during an incident.",
    question: "Which service produces that evidence?",
    options: [
      { id: 'A', text: "AWS Fault Injection Service, running an Availability Zone impairment experiment with a stop condition tied to a CloudWatch alarm." },
      { id: 'B', text: "AWS Resilience Hub, assessing the application's configuration against its stated recovery objectives and reporting where the policy is not met." },
      { id: 'C', text: "Amazon CloudWatch Synthetics, running canaries continuously from several Regions to confirm that the public endpoints stay reachable during peak season." },
      { id: 'D', text: "AWS Trusted Advisor, checking the fault tolerance category for resources that are not currently distributed across several Availability Zones." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Fault Injection Service actually induces the failure under controlled conditions, with stop conditions that halt the experiment if a guardrail alarm fires, so the result is empirical evidence that the system behaved as designed. Resilience Hub is valuable and assesses configuration against recovery objectives, but it reasons about the design rather than injecting a real fault. Synthetics measures availability without causing the failure being tested. Trusted Advisor checks for resources lacking redundancy and never exercises a failure path.",
    referenceUrl: "https://docs.aws.amazon.com/fis/latest/userguide/what-is.html",
    tags: ["Fault Injection Service", "Chaos Engineering", "Resilience", "Testing"]
  },
  {
    id: "aws-sap-71",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Attributing Shared Platform Costs to Teams",
    scenario: "A platform account hosts shared clusters used by 12 product teams. Finance can see the account total but cannot tell what each team consumes, and teams dispute the flat split currently applied at the end of each month.",
    question: "Which practice enables per-team attribution?",
    options: [
      { id: 'A', text: "Apply a team cost allocation tag to every resource, activate that tag in the billing console, and split the shared bill using the Cost and Usage Report." },
      { id: 'B', text: "Create a separate linked account for each of the 12 product teams and migrate that team's share of the shared cluster workloads into its own account." },
      { id: 'C', text: "Define an AWS Budget for each team in the shared platform account and compare the actual monthly spend against each team's budgeted amount." },
      { id: 'D', text: "Enable AWS Cost Anomaly Detection on the platform account with a monitor for each team so unexpected increases are attributed as they occur." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cost allocation tags are the mechanism that carries team identity onto line items, and once activated the tag appears as a column in the Cost and Usage Report so consumption can be grouped and split on evidence rather than by a flat share. Separate accounts give the cleanest boundary but rebuilding shared clusters per team defeats the point of a shared platform. Budgets track spend against a target and cannot attribute an untagged shared resource. Anomaly detection finds unexpected changes but still has no per-team dimension without the tags.",
    referenceUrl: "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
    tags: ["Cost Allocation Tags", "Chargeback", "FinOps", "Governance"]
  },
  {
    id: "aws-sap-72",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Migrating a Self-Managed Kafka Estate",
    scenario: "A company runs self-managed Apache Kafka on EC2 instances and wants to reduce operational load without changing the producer and consumer applications, which use the standard Kafka protocol and rely on existing topic configurations.",
    question: "Which target minimizes both operational effort and application change?",
    options: [
      { id: 'A', text: "Amazon Managed Streaming for Apache Kafka, keeping the Kafka wire protocol and migrating the existing topics with MirrorMaker 2." },
      { id: 'B', text: "Amazon Kinesis Data Streams, with the producer and consumer applications rewritten against the Kinesis Producer and Consumer Library interfaces." },
      { id: 'C', text: "Amazon SQS with a queue per topic, having the producers publish to the queues and the consumers poll them in place of the Kafka client calls." },
      { id: 'D', text: "Amazon MQ with the RabbitMQ engine, reconfiguring the applications to use AMQP instead of the Kafka wire protocol." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon MSK runs actual Apache Kafka, so the existing wire protocol, client libraries, and topic configuration carry over unchanged while AWS takes on broker provisioning, patching, and ZooKeeper or KRaft management, and MirrorMaker 2 replicates the topics during cutover. Kinesis is a capable streaming service but a different API, so every producer and consumer would be rewritten. SQS is a queue rather than a replayable log and loses Kafka's consumer group and retention semantics. Amazon MQ with RabbitMQ speaks AMQP, which is another full application change.",
    referenceUrl: "https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html",
    tags: ["MSK", "Kafka", "Migration", "Streaming"]
  },
  {
    id: "aws-sap-73",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Validating a Database Migration Before Cutover",
    scenario: "A team is migrating a production database with AWS Database Migration Service. Before cutting over, the business insists on evidence that every row transferred matches the source, not merely that the task reported success.",
    question: "Which capability provides that evidence?",
    options: [
      { id: 'A', text: "Enable data validation on the DMS task so it compares source and target rows continuously and records every mismatch it finds." },
      { id: 'B', text: "Enable detailed CloudWatch metrics and task logging on the replication instance so that row counts and any errors are visible throughout the load." },
      { id: 'C', text: "Run the AWS Schema Conversion Tool assessment report against the target after the load so that any object that failed to convert is listed." },
      { id: 'D', text: "Take a snapshot of the target database at the end of the full load and compare its reported storage size against the size of the source database." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DMS data validation independently reads rows from both endpoints, compares them, and records mismatched and failed records in a validation table, which is direct row-level evidence rather than a claim of task success. Metrics and logs show throughput and errors but never confirm that the rows match. The Schema Conversion Tool assesses schema objects, not data content. Comparing storage size is misleading because target engine storage differs from the source for reasons unrelated to missing rows.",
    referenceUrl: "https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Validating.html",
    tags: ["DMS", "Data Validation", "Migration", "Cutover"]
  },
  {
    id: "aws-sap-74",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Running a Workload at a Factory With No Reliable Link",
    scenario: "A manufacturer needs to run a machine vision inference workload on the factory floor. The site's connection to AWS drops for hours at a time, inference must continue regardless, and results should sync to the Region when the link returns.",
    question: "Which deployment option suits the site?",
    options: [
      { id: 'A', text: "Run the workload on an AWS Snowball Edge Compute Optimized device at the factory, syncing results to the Region when the link returns." },
      { id: 'B', text: "Run the workload on an AWS Outposts rack installed at the factory so the same AWS APIs and instance types are available on the factory floor." },
      { id: 'C', text: "Run the workload in an AWS Local Zone near the factory so that inference happens close to the site with single-digit millisecond latency." },
      { id: 'D', text: "Run the workload in the nearest AWS Region and cache the inference results at the factory using an AWS Storage Gateway appliance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Snowball Edge Compute Optimized is designed for disconnected and intermittently connected edge sites: it runs EC2 instances and Lambda functions locally with no dependency on a link, and data synchronizes when connectivity returns. An Outposts rack provides a richer AWS experience but requires reliable connectivity to its home Region for the control plane, so hours of outage is outside its design. A Local Zone and the parent Region both sit on the far side of the failing link, so inference stops when the link drops, and a Storage Gateway caches files rather than running inference.",
    referenceUrl: "https://docs.aws.amazon.com/snowball/latest/developer-guide/using-ec2.html",
    tags: ["Snowball Edge", "Edge Computing", "Hybrid", "Disconnected"]
  },
  {
    id: "aws-sap-75",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing Containers Over Instances During Modernization",
    scenario: "A team is moving a stateless .NET web application off Windows Server virtual machines. They want faster deployments and better instance density, have no Kubernetes expertise, and do not want to manage the underlying servers.",
    question: "Which target platform fits the team's constraints?",
    options: [
      { id: 'A', text: "Amazon ECS on AWS Fargate, running the application in Windows or Linux containers with no servers to manage." },
      { id: 'B', text: "Amazon EKS with managed node groups, deploying the application as a Kubernetes Deployment behind a Service and an ingress controller." },
      { id: 'C', text: "AWS Elastic Beanstalk on a Windows Server platform, deploying the application package to an environment it provisions and manages." },
      { id: 'D', text: "AWS Lambda with a container image, packaging the application and invoking it through a function URL for each incoming web request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ECS on Fargate gives container packaging and density without Kubernetes concepts or any server to patch, which matches a team that wants containers but has no Kubernetes expertise. EKS delivers the same containerization but requires exactly the Kubernetes knowledge the team lacks, and managed node groups still leave nodes in the picture. Elastic Beanstalk is simple but provisions and exposes EC2 instances, so the density and deployment-speed gains are smaller. Lambda suits event-driven work rather than a long-lived web application, and a lift into functions is a larger change than the team asked for.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html",
    tags: ["ECS", "Fargate", "Containers", "Modernization"]
  }
];

export default AWS_SAP_QUESTIONS;
