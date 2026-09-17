export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-276",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Giving Developers Safe Production Read Access",
    scenario: "Developers need to read production logs and metrics to debug incidents, but must not be able to read customer data, change configuration, or assume any role that could. Requests for access currently go through a slow ticket process.",
    question: "Which access design serves both needs?",
    options: [
      { id: 'A', text: "A permission set granting read access to CloudWatch and X-Ray only, with an explicit deny on the data services and on sts:AssumeRole so neither path escalates." },
      { id: 'B', text: "A permission set granting the ReadOnlyAccess managed policy so developers can inspect everything in the account without being able to make any changes to it." },
      { id: 'C', text: "A break-glass role that developers request through the existing ticket process, approved by an on-call manager whenever an incident requires production access." },
      { id: 'D', text: "A copy of the production logs and metrics streamed into a development account so developers investigate there without any production access at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scoping the permission set to the observability services gives self-service debugging access, and explicit denies on data services and role assumption prevent both direct data reads and escalation through another role. ReadOnlyAccess includes reading objects, table items, and secrets, which is exactly the customer data the requirement excludes. Keeping the ticket process preserves the delay the design is meant to remove. Streaming a copy to another account is a reasonable complement but duplicates data, adds lag, and still exposes whatever the logs contain.",
    referenceUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html",
    tags: ["IAM Identity Center", "Least Privilege", "Observability", "Access"]
  },
  {
    id: "aws-sap-277",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Handling Conflicting Requirements Across Business Units",
    scenario: "One business unit is bound by a regulation requiring all data in one country. Another operates globally and needs multi-Region deployment. Both sit under the same organization and the platform team wants one governance model.",
    question: "How should the governance model accommodate both?",
    options: [
      { id: 'A', text: "Place the units in separate organizational units and attach the residency policy only to the regulated one, keeping the shared baseline controls at the root for every account." },
      { id: 'B', text: "Attach the residency policy at the organization root so that every account is covered, and grant the global business unit documented exceptions where it needs them." },
      { id: 'C', text: "Keep both units in one organizational unit and apply the residency requirement through AWS Config rules that report rather than deny, so neither unit is blocked." },
      { id: 'D', text: "Create a second AWS organization for the regulated business unit so that its residency policy cannot interfere with the global unit's requirements at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organizational units exist so that policy can differ by requirement while shared controls inherit from the root, which lets the regulated unit carry a strict Region deny that never touches the global unit. Applying residency at the root and granting exceptions inverts the model, and service control policy exceptions are awkward to express and easy to get wrong. Detective-only Config rules leave the regulation unenforced. A second organization loses consolidated billing, shared guardrails, and the single governance model the team wants.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/design-principles-for-your-multi-account-strategy.html",
    tags: ["Organizations", "Data Residency", "Governance", "Organizational Units"]
  },
  {
    id: "aws-sap-278",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Reducing Route Table Sprawl on a Transit Gateway",
    scenario: "A Transit Gateway has 90 attachments and a route table per attachment, created as each VPC was onboarded. Adding a VPC now means editing dozens of tables and mistakes have caused connectivity gaps.",
    question: "Which routing model simplifies this?",
    options: [
      { id: 'A', text: "Group attachments into a small number of route tables by connectivity role, such as spokes, shared services, and inspection." },
      { id: 'B', text: "Consolidate every attachment into the single default Transit Gateway route table so that all of the VPCs can reach each other without any further configuration." },
      { id: 'C', text: "Keep a route table per attachment but generate the entries from a CloudFormation template." },
      { id: 'D', text: "Replace the Transit Gateway with VPC peering connections between the VPCs that actually need to communicate, removing the route table management entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Route tables should express connectivity policy rather than individual attachments, so a handful of tables representing roles means onboarding a VPC is one association and the isolation rules stay consistent. A single shared table gives full any-to-any reachability, which removes the segmentation most estates need. Generating per-attachment tables automates the sprawl without reducing it, and the model stays hard to reason about. Peering is non-transitive and 90 VPCs would need thousands of connections.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html",
    tags: ["Transit Gateway", "Routing", "Segmentation", "Networking"]
  },
  {
    id: "aws-sap-279",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Making Cost Ownership Visible to Engineers",
    scenario: "Engineering teams have no visibility of what their workloads cost until finance raises it at a quarterly review, by which point the spend is already incurred and nobody remembers what changed.",
    question: "Which practice puts cost feedback in front of the teams?",
    options: [
      { id: 'A', text: "Publish per-team cost dashboards from tagged data and send anomaly alerts to the owning team's channel." },
      { id: 'B', text: "Move the quarterly review to a monthly cadence so teams see spend sooner." },
      { id: 'C', text: "Create an AWS Budget for every team with an alert to finance so spending can be challenged as soon as it exceeds the amount budgeted for the period." },
      { id: 'D', text: "Give every engineering team its own AWS account so that the consolidated bill attributes cost to each team without any tagging being required." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Feedback works when it reaches the people who can act, close to when the change happens, so dashboards owned by each team plus anomaly alerts routed to their own channel turns cost into an engineering signal rather than a finance report. A monthly review is still retrospective and still mediated by finance. Budget alerts to finance keep the loop away from the engineers. Per-team accounts do give clean attribution and are worth doing, but without dashboards and alerts the teams still only hear about cost at review time.",
    referenceUrl: "https://docs.aws.amazon.com/cost-management/latest/userguide/getting-started-ad.html",
    tags: ["FinOps", "Cost Visibility", "Anomaly Detection", "Culture"]
  },
  {
    id: "aws-sap-280",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Preventing Privilege Escalation Through IAM",
    scenario: "A review finds that a developer role can create roles and attach the AdministratorAccess policy to them, then assume those roles. The team still needs developers to create roles for their own Lambda functions.",
    question: "Which control closes the escalation path?",
    options: [
      { id: 'A', text: "Require a permissions boundary on created roles and deny attaching policies more permissive than that boundary." },
      { id: 'B', text: "Deny the iam:CreateRole action for the developer role entirely." },
      { id: 'C', text: "Deny the iam:AttachRolePolicy action for the developer role so that developers can create roles but cannot attach any managed policy to them at all." },
      { id: 'D', text: "Add a CloudTrail alarm that notifies the security team whenever the AdministratorAccess policy is attached to a role created by a developer principal." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conditioning role creation on a permissions boundary and denying policy attachment beyond that boundary caps what any created role can do, so developers keep their autonomy while the escalation path closes. Denying role creation removes the capability the teams legitimately need. Denying policy attachment entirely leaves developers with roles they cannot grant any permissions to, which makes them useless. An alarm detects the escalation after it has happened rather than preventing it.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM", "Privilege Escalation", "Permissions Boundary", "Security"]
  },
  {
    id: "aws-sap-281",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Choosing Where Tag Policies Apply",
    scenario: "A governance team wants to standardize the capitalization and permitted values of the Environment tag across the organization, and to know which resources do not conform without blocking anyone's work today.",
    question: "Which Organizations policy type does this?",
    options: [
      { id: 'A', text: "A tag policy, which defines the permitted values and capitalization and reports non-compliant resources." },
      { id: 'B', text: "A service control policy, which denies the creation of any resource whose Environment tag does not match one of the values the governance team has approved." },
      { id: 'C', text: "A backup policy, which applies the organization's backup requirements to the tagged resources in each account according to the values of the Environment tag." },
      { id: 'D', text: "An AI services opt-out policy, which governs how AWS services use the data." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Tag policies are the Organizations policy type for defining permitted tag keys, values, and capitalization, and they report compliance without blocking work unless enforcement is explicitly turned on for specific resource types. A service control policy can deny untagged creation but cannot express capitalization or a value list as a standard, and it would block work today. Backup policies express backup plans. AI services opt-out policies govern data use by AI services and are unrelated to tagging.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html",
    tags: ["Tag Policies", "Organizations", "Governance", "Compliance"]
  },
  {
    id: "aws-sap-282",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Designing for a Workload With Unknown Access Patterns",
    scenario: "A new product's query patterns are not yet known and will change as the product evolves. The team must choose a data store now, accepting that the access patterns may be quite different in six months.",
    question: "Which choice best accommodates the uncertainty?",
    options: [
      { id: 'A', text: "A relational database, whose flexible querying and secondary indexes support access patterns that were not anticipated at design time but emerge as the product evolves." },
      { id: 'B', text: "Amazon DynamoDB with a single-table design, choosing a partition and sort key now and adding global secondary indexes as the access patterns become clearer." },
      { id: 'C', text: "Amazon S3 with Athena over it, so any query can be expressed in SQL as the product's requirements change without a schema being decided in advance." },
      { id: 'D', text: "Amazon OpenSearch Service, whose dynamic mapping indexes every field so that queries against any attribute are possible however the product evolves." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A relational database is the sound default when access patterns are unknown, because ad hoc joins, filters, and new indexes accommodate queries nobody anticipated, and a purpose-built store can be introduced later once the patterns are real. DynamoDB rewards knowing the access patterns in advance and a poorly chosen key is expensive to change. Athena over S3 suits analytical scans rather than the low-latency operational reads a product needs. OpenSearch indexes flexibly but is a search engine rather than a system of record.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/database.html",
    tags: ["Databases", "Purpose-Built", "Design", "Trade-Offs"]
  },
  {
    id: "aws-sap-283",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Handling Schema Change in an Event Stream",
    scenario: "Several teams consume events from a shared stream. A producer added a required field and three consumers broke. The organization wants producers to evolve their events without coordinating a release with every consumer.",
    question: "Which practice allows independent evolution?",
    options: [
      { id: 'A', text: "Register event schemas and enforce backward-compatible changes, adding only optional fields and never removing or renaming existing ones, so producers evolve without coordination." },
      { id: 'B', text: "Version the event type and have producers publish both the old and the new versions until every consumer has migrated to the newer of the two versions." },
      { id: 'C', text: "Have each consumer validate incoming events against its own copy of the schema and discard any event that does not match what that consumer expects." },
      { id: 'D', text: "Require producers to notify consumers before a schema change and coordinate a release window in which every affected consumer is updated together." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A registry with an enforced compatibility rule makes the breaking change impossible to publish, and restricting producers to additive optional fields means existing consumers keep working without knowing a change occurred. Publishing two versions in parallel does work and is sometimes necessary, but it doubles producer effort and still requires tracking consumer migration. Consumers discarding unmatched events converts a schema break into silent data loss. Coordinated release windows are precisely the cross-team coordination the organization wants to remove.",
    referenceUrl: "https://docs.aws.amazon.com/glue/latest/dg/schema-registry.html",
    tags: ["Schema Registry", "Event-Driven", "Compatibility", "Integration"]
  },
  {
    id: "aws-sap-284",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing How to Store Application Configuration",
    scenario: "A team needs to change feature flags and operational limits without redeploying, wants changes validated before they take effect, and needs a gradual rollout with automatic rollback if error rates rise.",
    question: "Which service provides these capabilities?",
    options: [
      { id: 'A', text: "AWS AppConfig, which validates configuration, deploys it gradually, and rolls back on a CloudWatch alarm." },
      { id: 'B', text: "AWS Systems Manager Parameter Store, with the application re-reading each flag." },
      { id: 'C', text: "AWS Secrets Manager, holding the configuration document as a secret so that changes are versioned and the application retrieves the current value on demand." },
      { id: 'D', text: "An Amazon S3 object holding the configuration document, with the application polling it on a schedule so that updated values are picked up without a redeployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AppConfig is built for this exact lifecycle: validators check a configuration before it deploys, deployment strategies roll it out gradually, and a linked CloudWatch alarm triggers automatic rollback, so a bad flag affects a small fraction of traffic briefly. Parameter Store holds values and versions them but offers no validation, gradual rollout, or rollback. Secrets Manager is for credentials and adds rotation machinery irrelevant here. An S3 object with polling provides none of the safety controls.",
    referenceUrl: "https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html",
    tags: ["AppConfig", "Feature Flags", "Progressive Delivery", "Configuration"]
  },
  {
    id: "aws-sap-285",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Meeting a Regulatory Requirement for Key Custody",
    scenario: "A regulator requires that cryptographic keys be generated and held in hardware the company controls, with the ability to prove that AWS cannot access the key material, while the workload still runs on AWS services.",
    question: "Which key management option satisfies the regulator?",
    options: [
      { id: 'A', text: "AWS CloudHSM, where the company controls the hardware security module cluster and AWS has no access to the key material it holds." },
      { id: 'B', text: "AWS KMS with a customer managed key configured to use an AWS managed hardware security module and automatic annual rotation of the key material enabled." },
      { id: 'C', text: "AWS KMS with imported key material generated on premises, re-imported by the company whenever the imported material reaches its configured expiry date." },
      { id: 'D', text: "AWS KMS with a multi-Region key replicated only to approved Regions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "CloudHSM gives single-tenant FIPS-validated hardware security modules that the customer controls, where keys are generated and never leave the module and AWS has no access, which is what a custody requirement of this kind demands. KMS uses AWS-operated hardware security modules, so the custody claim cannot be made. Imported key material is a genuine control improvement and is sometimes accepted, but the key is still used inside AWS-operated modules. Multi-Region keys control replication scope rather than custody.",
    referenceUrl: "https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html",
    tags: ["CloudHSM", "KMS", "Key Custody", "Compliance"]
  },
  {
    id: "aws-sap-286",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Selecting a Pattern for Bursty Report Generation",
    scenario: "Users request PDF reports that take two to five minutes to build. Requests cluster at month end. The web tier currently blocks while building them and users abandon the page or retry, multiplying the load.",
    question: "Which design handles the long-running work?",
    options: [
      { id: 'A', text: "Accept the request, return a job identifier, build the report asynchronously, and notify the user when it is ready to download." },
      { id: 'B', text: "Increase the web tier's request timeout and scale it out at month end so that the connections stay open until each of the reports has been generated." },
      { id: 'C', text: "Pre-generate every report on a schedule before month end." },
      { id: 'D', text: "Move the report generation into an AWS Lambda function invoked synchronously by the web tier so that the work scales automatically with the incoming requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Work measured in minutes does not belong on a synchronous request, so accepting it, returning a handle, and notifying on completion frees the web tier immediately and removes the abandonment and retry amplification. Longer timeouts and more instances hold connections open and consume capacity while users still wait. Pre-generating every possible report wastes effort on reports nobody requests and cannot cover parameterized requests. A synchronous Lambda call still blocks the caller and cannot exceed fifteen minutes.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/asynchronous-request-reply.html",
    tags: ["Asynchronous", "Patterns", "Scalability", "Design"]
  },
  {
    id: "aws-sap-287",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Where to Put a Web Application Firewall",
    scenario: "A team runs a global web application on CloudFront in front of an Application Load Balancer. They want to block malicious requests as early and as cheaply as possible, before the traffic reaches their infrastructure.",
    question: "Where should the web access control list be attached?",
    options: [
      { id: 'A', text: "To the CloudFront distribution, so requests are inspected at the edge before reaching the origin." },
      { id: 'B', text: "To the Application Load Balancer, so requests are inspected in the Region." },
      { id: 'C', text: "To both the CloudFront distribution and the Application Load Balancer, so that every request is inspected twice and no malicious request can reach the application." },
      { id: 'D', text: "To an Amazon API Gateway stage placed between the distribution and the load balancer, so requests are inspected by the managed API layer before being forwarded." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attaching the web access control list at the distribution inspects and blocks at the edge location nearest the client, so malicious traffic never crosses the AWS network to the Region and is never processed by the load balancer, which is both the earliest and the cheapest point. Attaching only at the load balancer lets the traffic travel all the way to the Region first. Attaching at both points doubles the inspection charge for little benefit. Inserting an API Gateway stage adds a hop and cost without improving where inspection happens.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works.html",
    tags: ["WAF", "CloudFront", "Security", "Edge"]
  },
  {
    id: "aws-sap-288",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Sizing an Interface Endpoint Deployment",
    scenario: "An architect is adding interface endpoints for several services to a VPC spanning three Availability Zones. The workload must survive the loss of one zone and the team wants to understand the cost and availability implications.",
    question: "How should the endpoints be deployed?",
    options: [
      { id: 'A', text: "Create the endpoint in all three Availability Zones, accepting an hourly charge per zone in return for zonal resilience." },
      { id: 'B', text: "Create the endpoint in a single Availability Zone and rely on the VPC's internal routing to carry requests from the other two zones to that endpoint." },
      { id: 'C', text: "Create the endpoint in two Availability Zones for a lower cost." },
      { id: 'D', text: "Create the endpoint in a single Availability Zone and add a second endpoint in another Region so the workload survives the loss of a zone or a Region." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An interface endpoint places an elastic network interface in each subnet chosen and is billed per Availability Zone, so covering all three zones means a workload in any zone reaches a local endpoint and the loss of one zone leaves the others working. A single zone creates a dependency where a zone failure takes the endpoint away from workloads elsewhere and adds cross-zone traffic charges. Two zones leaves the third depending on another zone. A cross-Region endpoint does not serve this VPC.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html",
    tags: ["VPC Endpoints", "Availability Zones", "Resilience", "Cost"]
  },
  {
    id: "aws-sap-289",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Recovering From a Corrupted Replication Stream",
    scenario: "An application wrote bad data for six hours before the bug was found. The corruption replicated to the standby and to the read replicas, and the most recent snapshot predates the incident by 20 hours.",
    question: "Which recovery approach loses the least good data?",
    options: [
      { id: 'A', text: "Restore the database to a point in time immediately before the first bad write using continuous backups." },
      { id: 'B', text: "Restore the most recent automated snapshot and replay the application's own request logs from the point at which that snapshot was taken." },
      { id: 'C', text: "Promote one of the read replicas, since replicas lag the writer slightly and may therefore not have received the corrupted writes from the primary." },
      { id: 'D', text: "Fail over to the standby instance, since the standby is a separate copy of the data and can be brought into service without the corruption present." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Point-in-time recovery uses continuous transaction log backups to restore to any second within the retention window, so recovering to just before the first bad write preserves everything good up to that moment and loses only the six hours that must be reprocessed. Restoring the 20-hour-old snapshot discards 14 hours of good data before the incident even began. Read replicas lag by seconds, so six hours of corruption reached them long ago. A Multi-AZ standby is a synchronous copy and holds the same corrupted data.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html",
    tags: ["Point-in-Time Recovery", "RDS", "Data Corruption", "Recovery"]
  },
  {
    id: "aws-sap-290",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Making Incident Reviews Produce Change",
    scenario: "A team writes post-incident reviews but the same class of failure recurs. The documents list causes and assign actions, yet the actions are rarely completed and nobody checks whether earlier incidents were similar.",
    question: "Which change makes the reviews effective?",
    options: [
      { id: 'A', text: "Track actions as prioritized backlog items with owners and dates, and review recurring themes across incidents each quarter." },
      { id: 'B', text: "Require a more detailed root cause analysis in each review document so the underlying cause of every incident is understood before the review is closed." },
      { id: 'C', text: "Assign every post-incident action to the engineer who was on call." },
      { id: 'D', text: "Hold the post-incident review within 24 hours of every incident so that the details are fresh and the resulting actions are more accurate than they are today." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Recurrence persists because actions are not prioritized against other work and because nobody looks across incidents, so putting actions into the same backlog with owners and dates makes them compete honestly for time, and a periodic theme review catches the pattern a single review cannot see. Deeper analysis produces better documents without making the actions happen. Assigning to the on-call engineer often picks someone without the context or capacity. A faster review improves accuracy while leaving the follow-through problem untouched.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/oe_evolve_ops_process_cont_imp.html",
    tags: ["Post-Incident Review", "Operational Excellence", "Continuous Improvement", "Process"]
  },
  {
    id: "aws-sap-291",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing the Cost of an Idle Kubernetes Control Plane",
    scenario: "A company runs 25 EKS clusters, one per team per environment. Many development clusters sit idle overnight and at weekends, and the control plane charge alone is significant before any node cost is counted.",
    question: "Which change reduces cost most?",
    options: [
      { id: 'A', text: "Consolidate development clusters into fewer shared clusters with a namespace per team, and scale the node groups to zero outside working hours when they are idle." },
      { id: 'B', text: "Scale each development cluster's node groups to zero outside working hours so that no compute is billed while the clusters are not being used by the teams." },
      { id: 'C', text: "Delete each development cluster at the end of the working day and recreate it each morning from the infrastructure as code definition the team maintains." },
      { id: 'D', text: "Move the development clusters onto Fargate so that the compute is billed per pod and no node capacity is running while the clusters are idle overnight." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The control plane is billed per cluster per hour regardless of activity, so the only way to reduce that portion is to run fewer clusters, and consolidating development environments with namespace isolation plus scaling nodes to zero attacks both parts of the bill. Scaling nodes to zero removes compute cost but leaves 25 control planes billing continuously. Deleting and recreating clusters daily is disruptive and slow. Fargate removes idle node cost but again leaves every control plane running.",
    referenceUrl: "https://docs.aws.amazon.com/eks/latest/userguide/eks-optimize-costs.html",
    tags: ["EKS", "Cost Optimization", "Consolidation", "Kubernetes"]
  },
  {
    id: "aws-sap-292",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Diagnosing Intermittent Failures Behind a Load Balancer",
    scenario: "About one request in 500 fails with a 502 response. The application logs show nothing for those requests. The Application Load Balancer sits in front of an Auto Scaling group whose instances are replaced regularly by a scaling policy.",
    question: "Which cause should be investigated first?",
    options: [
      { id: 'A', text: "Instances being deregistered while still serving requests, because the deregistration delay is shorter than the longest request." },
      { id: 'B', text: "The load balancer's idle timeout being shorter than the application's keep-alive timeout, so connections are closed by the target while the balancer still holds them." },
      { id: 'C', text: "The Auto Scaling group launching instances faster than the application starts, so requests reach targets whose application process is not yet listening on the port." },
      { id: 'D', text: "The security group on the targets rejecting a small proportion of connections." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A 502 with no application log means the target never completed the response, and in a group whose instances are replaced regularly the usual cause is deregistration cutting off in-flight requests, which is fixed by setting the deregistration delay above the longest expected request and handling termination lifecycle hooks. The keep-alive relationship is a real cause of 502s but works the other way round, with the target's keep-alive needing to exceed the balancer's idle timeout. Health checks stop traffic reaching instances that are not ready. Connection tracking exhaustion would produce timeouts rather than 502s.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-troubleshooting.html",
    tags: ["Application Load Balancer", "Deregistration Delay", "Troubleshooting", "Auto Scaling"]
  },
  {
    id: "aws-sap-293",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Trimming a Large CloudTrail Bill",
    scenario: "CloudTrail cost has grown sharply. Investigation shows data events are logged for every S3 bucket and every Lambda function across the organization, though only a few buckets hold regulated data.",
    question: "Which change reduces cost while preserving the required audit trail?",
    options: [
      { id: 'A', text: "Apply advanced event selectors so data events are logged only for the buckets and functions that require them." },
      { id: 'B', text: "Reduce the retention period on the CloudTrail bucket." },
      { id: 'C', text: "Disable data events entirely and rely on S3 server access logging for the regulated buckets, which records the object-level access at a lower cost." },
      { id: 'D', text: "Move the CloudTrail bucket to S3 Intelligent-Tiering so that the stored events move to cheaper tiers as they age and are no longer read frequently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Data event charges are driven by the number of events recorded, so advanced event selectors narrowing the scope to the specific buckets and functions that need an audit trail cuts the dominant cost while the regulated coverage stays intact. Shorter retention reduces storage, which is a small fraction of the data event charge. Server access logging is best-effort and lacks the integrity validation a regulated audit trail needs. Intelligent-Tiering likewise addresses storage rather than the per-event ingestion cost.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html",
    tags: ["CloudTrail", "Data Events", "Cost Optimization", "Compliance"]
  },
  {
    id: "aws-sap-294",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Handling a Dependency That Fails Slowly",
    scenario: "A downstream service responds in 30 seconds instead of failing when overloaded. Callers hold connections open, thread pools fill, and the caller becomes unavailable even though its own resources are healthy.",
    question: "Which change protects the caller?",
    options: [
      { id: 'A', text: "Set an aggressive client timeout and isolate calls to that dependency in their own bounded resource pool." },
      { id: 'B', text: "Increase the caller's thread pool size so that there are enough threads available to absorb the slow calls while other requests continue to be served." },
      { id: 'C', text: "Add retries with exponential backoff around the call so that a slow response is abandoned and reissued until the dependency responds more quickly." },
      { id: 'D', text: "Scale the caller horizontally so slow calls are spread across more instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A slow dependency is more dangerous than a failed one because it consumes the caller's resources while holding them, so bounding the wait with a timeout and confining those calls to their own pool means the dependency can degrade without taking the caller with it. A larger thread pool raises the ceiling and delays the same collapse. Retries against an overloaded dependency add load and make the situation worse. Horizontal scaling distributes the exhaustion across more instances rather than preventing it.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/bulkhead.html",
    tags: ["Bulkhead", "Timeouts", "Resilience", "Patterns"]
  },
  {
    id: "aws-sap-295",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reducing Risk From a Single Shared Account",
    scenario: "One AWS account holds development, staging, and production for 12 services. A misconfigured development script recently deleted a production DynamoDB table, and service quotas are shared so a load test throttles production.",
    question: "Which change addresses both problems structurally?",
    options: [
      { id: 'A', text: "Separate the environments into their own accounts, which gives each its own quotas and its own blast radius." },
      { id: 'B', text: "Apply IAM policies with resource-level conditions so that development principals are unable to act on any resource tagged as belonging to the production environment." },
      { id: 'C', text: "Request quota increases so that a load test running in development cannot consume enough capacity to affect the production workloads in the same account." },
      { id: 'D', text: "Enable deletion protection on the production DynamoDB tables and point-in-time recovery so that an accidental deletion can be reversed quickly when it occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Both failures come from sharing one account boundary, and separate accounts give independent quotas, independent identity boundaries, and a blast radius that cannot cross, which addresses the whole class rather than the two instances observed. Tag-based conditions help but depend on every resource being tagged correctly and on every policy being written correctly. Higher quotas raise the ceiling that a larger load test will reach again. Deletion protection and recovery are worth enabling but address only the deletion symptom.",
    referenceUrl: "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/benefits-of-using-multiple-aws-accounts.html",
    tags: ["Multi-Account", "Blast Radius", "Service Quotas", "Isolation"]
  },
  {
    id: "aws-sap-296",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Moving a Workload With Strict Change Windows",
    scenario: "A retailer forbids production change between November and January. The migration programme must move 200 servers and the data centre contract ends in March, leaving a narrow window after the freeze.",
    question: "How should the programme plan around the freeze?",
    options: [
      { id: 'A', text: "Complete replication, testing, and cutover rehearsals before the freeze begins so that only the irreducible cutovers remain for the window afterwards." },
      { id: 'B', text: "Request an exemption from the change freeze for the migration work so that the cutovers can proceed during the busiest trading period of the year." },
      { id: 'C', text: "Delay the entire programme until the freeze ends in January and compress every activity into the remaining weeks before the data centre contract ends." },
      { id: 'D', text: "Extend the data centre contract beyond March so that the migration can proceed at a comfortable pace once the change freeze has been lifted in January." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A freeze restricts production change, not preparation, so running replication, test launches, and cutover rehearsals through the freeze means the post-freeze window carries only the irreducible cutover work and the March deadline stays achievable. Seeking an exemption during peak trading asks the business to accept its highest risk at its worst moment. Delaying everything wastes months of available preparation time. Extending the contract may be sensible as a fallback but adds cost and should not be the plan when preparation can proceed regardless.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-waves.html",
    tags: ["Change Freeze", "Migration Planning", "Cutover", "Scheduling"]
  },
  {
    id: "aws-sap-297",
    difficulty: "hard",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing How to Modernize a Batch Estate",
    scenario: "A company runs 400 nightly batch jobs on a shared scheduler on physical servers. Jobs have dependencies on each other, some take hours, and the team wants to remove the servers without rewriting the job logic.",
    question: "Which target platform fits?",
    options: [
      { id: 'A', text: "AWS Batch with job dependencies and a managed compute environment, running the existing job logic in containers." },
      { id: 'B', text: "AWS Step Functions with a state machine expressing every job dependency, invoking a Lambda function for each of the 400 jobs in the nightly schedule." },
      { id: 'C', text: "Amazon EventBridge Scheduler triggering each job at a fixed time chosen so that its dependencies have completed by the time the job itself begins running." },
      { id: 'D', text: "Amazon EMR running the batch estate as Spark applications so that the jobs are distributed across the cluster and complete faster than they do today." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AWS Batch provides the scheduler the estate already depends on, including job queues, dependencies between jobs, and retries, while running the existing logic in containers on capacity it provisions, so the servers disappear without the logic being rewritten. Step Functions expresses dependencies well but Lambda's fifteen-minute limit rules out jobs that take hours. Fixed-time scheduling replaces real dependencies with guesswork that breaks whenever a job runs long. EMR would require rewriting the jobs as Spark applications.",
    referenceUrl: "https://docs.aws.amazon.com/batch/latest/userguide/job_dependencies.html",
    tags: ["AWS Batch", "Job Dependencies", "Modernization", "Migration"]
  },
  {
    id: "aws-sap-298",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Serving Two Storage Protocols From One Dataset",
    scenario: "A migrated analytics workload needs the same dataset available over NFS to Linux compute nodes and over SMB to Windows analyst workstations, with consistent permissions and no duplicate copy of the data.",
    question: "Which storage service supports both protocols over one dataset?",
    options: [
      { id: 'A', text: "Amazon FSx for NetApp ONTAP, which serves the same volume over NFS and SMB with unified permissions." },
      { id: 'B', text: "Amazon EFS for the Linux nodes with an AWS Storage Gateway file gateway presenting the same data to the Windows workstations over the SMB protocol." },
      { id: 'C', text: "Amazon FSx for Windows File Server for the analysts with an NFS export enabled so that the Linux compute nodes are able to mount the same file system." },
      { id: 'D', text: "Amazon S3 with Mountpoint for Amazon S3 on the Linux nodes and a file gateway for the Windows workstations, both backed by the same bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FSx for NetApp ONTAP is the multi-protocol option: a volume can be exported over NFS and shared over SMB simultaneously, with name mapping so UNIX and Windows identities resolve to consistent permissions on the same files. EFS is NFS only, so reaching it over SMB requires a gateway and a second copy. FSx for Windows File Server does not offer an NFS export. Mountpoint and a file gateway over one bucket avoid duplication but provide neither POSIX semantics for the compute nodes nor unified permissions.",
    referenceUrl: "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html",
    tags: ["FSx for NetApp ONTAP", "Multi-Protocol", "Storage", "Migration"]
  },
  {
    id: "aws-sap-299",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Deciding Whether to Migrate or Rebuild",
    scenario: "An application is 15 years old, poorly documented, and its original developers have left. It works reliably, changes twice a year, and supports a stable business process that is not a competitive differentiator.",
    question: "Which strategy is most appropriate?",
    options: [
      { id: 'A', text: "Rehost it with minimal change, since a stable low-change workload does not justify the cost and risk of rebuilding." },
      { id: 'B', text: "Refactor it into a modern architecture during the migration so that the organization is no longer dependent on software nobody currently understands." },
      { id: 'C', text: "Repurchase an equivalent product so the organization stops maintaining software whose original developers are no longer available to support it." },
      { id: 'D', text: "Retire it and move the business process into an existing system, since a process that is not a competitive differentiator does not warrant its own application." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Modernization effort should follow business value, and an application that is reliable, rarely changed, and not a differentiator returns almost nothing for a rebuild while carrying high risk given the lost knowledge, so rehosting captures the data centre exit at the lowest cost. Refactoring poorly understood software with no original authors is among the most expensive and risky things a programme can attempt. Repurchasing may be worth evaluating later but replacing a working system has its own cost and disruption. Retiring it assumes the process itself is unnecessary, which the scenario does not support.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
    tags: ["Rehost", "Migration Strategies", "7 Rs", "Prioritization"]
  },
  {
    id: "aws-sap-300",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Preparing an Organization for Migration",
    scenario: "A company's first migration wave stalled because nobody had decided account structure, network design, identity federation, or logging standards, and each team made different choices that later had to be undone.",
    question: "What should have been established before the first wave?",
    options: [
      { id: 'A', text: "A landing zone providing the account structure, network baseline, identity federation, and logging standards." },
      { id: 'B', text: "A detailed migration runbook for each application so that every team follows the same sequence of steps when it migrates its own workloads." },
      { id: 'C', text: "A complete discovery inventory of every server and application so the programme knows the full scope before any of the migration waves begin." },
      { id: 'D', text: "A signed business case approved by the finance team so the programme's funding is secured before any technical work is undertaken by the teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The mobilize phase exists to build the foundation, and a landing zone is that foundation: it settles account structure, networking, identity, and logging once so teams inherit the decisions rather than each inventing them. Per-application runbooks matter but describe how to move a workload into an environment that must already exist. Discovery is essential for planning waves yet does not resolve any of the platform decisions listed. A business case funds the programme without answering a single technical question.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-readiness/welcome.html",
    tags: ["Landing Zone", "Mobilize", "Migration Readiness", "Foundation"]
  }
];

export default AWS_SAP_QUESTIONS;
