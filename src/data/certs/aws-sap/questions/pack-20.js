export const AWS_SAP_QUESTIONS = [
  {
    id: "aws-sap-476",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Enabling a Policy Type Before Use",
    scenario: "A new organization with all features enabled is created, and an administrator tries to attach a service control policy to an organizational unit, but the option is unavailable.",
    question: "What has not been done?",
    options: [
      { id: 'A', text: "The service control policy type has not yet been enabled for the organization from the management account." },
      { id: 'B', text: "The organization is still in consolidated billing mode rather than having all features enabled, which is what every policy type requires." },
      { id: 'C', text: "The administrator is signed in to a member account." },
      { id: 'D', text: "The organizational unit contains no accounts yet, and a service control policy can only attach to a unit holding at least one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Policy types are disabled on a new organization even when all features are enabled, and each type must be turned on from the management account before a policy of that type can be attached anywhere. All features mode is a prerequisite this organization already satisfies. Signing in to a member account would block organization administration altogether rather than greying out one policy type. An empty organizational unit can carry a policy perfectly well, which is the usual way to prepare a unit before moving accounts into it.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_enable-disable.html",
    tags: ["Organizations", "SCP", "Governance", "Policy Types"]
  },
  {
    id: "aws-sap-477",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Restricting Access to Resources Organization-Wide",
    scenario: "A security team wants to guarantee that no S3 bucket anywhere in the organization can be read by a principal from outside the organization, regardless of what each bucket policy says.",
    question: "Which control achieves this?",
    options: [
      { id: 'A', text: "A resource control policy on the organization root that denies S3 access unless the calling principal belongs to the organization, which applies on top of every bucket policy." },
      { id: 'B', text: "A service control policy on the organization root denying the S3 read actions to any principal outside the organization." },
      { id: 'C', text: "S3 Block Public Access enabled for every bucket-holding account." },
      { id: 'D', text: "An IAM Access Analyzer external finding per bucket, resolved by the team that owns each bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A resource control policy evaluates on the resource side of the request, so it can bound who may read an S3 bucket regardless of that bucket's own policy, which is what a guarantee spanning every account requires. A service control policy constrains principals in the organization's own accounts and therefore cannot reach an external caller at all. Block Public Access stops anonymous and public access but not a named principal in another AWS account. Access Analyzer reports the exposure without preventing it.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html",
    tags: ["Organizations", "RCP", "S3", "Data Perimeter"]
  },
  {
    id: "aws-sap-478",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Scaling Permissions With Attribute-Based Access Control",
    scenario: "Forty project teams each need access only to the resources tagged with their own project, and the platform team does not want forty policies to maintain.",
    question: "Which approach scales?",
    options: [
      { id: 'A', text: "One policy that compares the caller's project session tag with the resource's project tag, so the same policy serves every team." },
      { id: 'B', text: "One policy per project, generated from a template by the pipeline that onboards a project, so the burden moves into the platform team's automation." },
      { id: 'C', text: "A permissions boundary naming each project's resource prefixes." },
      { id: 'D', text: "One role per project with an inline policy listing the project's tagged resource identifiers explicitly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attribute-based access control turns forty policies into one: the policy compares a session tag carried by the caller against the tag on the resource, so onboarding a project needs no policy change at all. Generating a policy per project from a template still leaves forty policies to review, version, and keep inside IAM's size and count limits. A permissions boundary caps what a principal may do rather than granting per-project access. Enumerating resource identifiers per role is exactly the sprawl being escaped.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html",
    tags: ["IAM", "ABAC", "Session Tags", "Scalability"]
  },
  {
    id: "aws-sap-479",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Giving On-Premises Servers Temporary Credentials",
    scenario: "Servers in a data centre must call AWS APIs, and the security team refuses to place long-lived access keys on them.",
    question: "Which capability fits?",
    options: [
      { id: 'A', text: "IAM Roles Anywhere, which exchanges an X.509 certificate from the server for temporary credentials from a role." },
      { id: 'B', text: "An IAM user per server whose access keys are rotated nightly by a scheduled job and distributed through the configuration management tool." },
      { id: 'C', text: "The EC2 instance metadata service, queried over the site-to-site VPN." },
      { id: 'D', text: "AWS Systems Manager hybrid activations, which let an operator run commands on the server from the console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "IAM Roles Anywhere issues short-lived credentials to a workload outside AWS in exchange for a certificate from a certificate authority the account trusts, which removes long-lived keys without introducing a new secret to distribute. Rotating IAM user keys nightly still leaves a static credential on disk between rotations. The instance metadata service answers only from inside EC2 and is unreachable for a data centre server. Hybrid activations let operators run commands on the server rather than letting the server call AWS APIs itself.",
    referenceUrl: "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html",
    tags: ["IAM Roles Anywhere", "Hybrid", "Credentials", "Security"]
  },
  {
    id: "aws-sap-480",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "What a Service-Linked Role Is For",
    scenario: "An engineer notices a role named AWSServiceRoleForAutoScaling in the account that nobody on the team created.",
    question: "What is that role?",
    options: [
      { id: 'A', text: "A service-linked role that Auto Scaling uses to act on the account's behalf." },
      { id: 'B', text: "A role left behind by a deleted CloudFormation stack in the account, which can safely be removed once no running resource refers to it." },
      { id: 'C', text: "A role created by AWS Support during a past investigation and retained in the account for future troubleshooting." },
      { id: 'D', text: "A cross-account role that lets the AWS service team administer the account's Auto Scaling groups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A service-linked role is created by the service itself, is named after that service, and carries a policy the service defines so it can call other services on the account's behalf, which is why it appears without anyone creating it. It is not stack debris, and deleting it would break Auto Scaling. AWS Support does not leave standing roles behind in an account. Nor does an AWS service team administer the account's resources, because the role is assumed by a service principal rather than by people.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html",
    tags: ["IAM", "Service-Linked Role", "Auto Scaling", "Permissions"]
  },
  {
    id: "aws-sap-481",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Why an Assumed Role Session Has a Maximum Duration",
    scenario: "A long-running job fails after one hour with an expired-token error, having assumed a role at start-up.",
    question: "What is the correct fix?",
    options: [
      { id: 'A', text: "Refresh the credentials before they expire, and raise the role's maximum session duration if a longer session is genuinely needed." },
      { id: 'B', text: "Create an IAM user for the job and give it long-lived access keys, because only a role session carries an expiry that has to be managed at all." },
      { id: 'C', text: "Assume the role again from inside the job's retry handler only." },
      { id: 'D', text: "Request a 36-hour session token, which removes the need to refresh for the job's whole run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Role credentials are deliberately temporary, so a long-running job has to refresh them before they expire, and the role's maximum session duration can be raised toward twelve hours where the work genuinely needs a longer window. Swapping to an IAM user replaces a managed expiry with a permanent key on disk, which is the outcome temporary credentials exist to prevent. Re-assuming only inside a retry handler treats an expected event as an error. No session token can be issued for 36 hours.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html",
    tags: ["IAM", "STS", "Sessions", "Credentials"]
  },
  {
    id: "aws-sap-482",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Where CloudFormation StackSet Permissions Come From",
    scenario: "A platform team wants to deploy a stack into every account in an organizational unit without creating an administration role in each target account.",
    question: "Which permission model does that?",
    options: [
      { id: 'A', text: "Service-managed permissions, where StackSets uses the organization's trusted access and creates what it needs in each target account." },
      { id: 'B', text: "Self-managed permissions, where the team creates an administration role in the management account and an execution role in every target account." },
      { id: 'C', text: "A delegated administrator registration for CloudFormation in the security account." },
      { id: 'D', text: "An organization-wide service control policy allowing the stack's resource types in every target account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Service-managed permissions is the model built for Organizations: with trusted access enabled, StackSets provisions the roles it needs in each account and can target organizational units directly, picking up accounts added later. Self-managed permissions is the model that requires exactly the per-account execution role the team is trying to avoid. Registering a delegated administrator changes who may operate StackSets rather than how it obtains permissions. A service control policy only restricts actions and can never grant the ones a deployment needs.",
    referenceUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html",
    tags: ["CloudFormation", "StackSets", "Organizations", "Multi-Account"]
  },
  {
    id: "aws-sap-483",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "Reading a Policy Evaluation Result",
    scenario: "A role has an identity policy allowing an S3 action, the bucket policy is silent about the role, and a service control policy above the account does not list S3 at all.",
    question: "What is the outcome?",
    options: [
      { id: 'A', text: "The action is denied, because a service control policy that does not allow the service leaves it outside the account's maximum permissions even though the identity policy allows it." },
      { id: 'B', text: "The action is allowed, because the identity policy grants it and no explicit deny exists anywhere." },
      { id: 'C', text: "The action is denied, because the bucket policy must also allow the role before the account permits cross-service access." },
      { id: 'D', text: "The action is allowed, because a service control policy only matters for the services that it actually names." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A service control policy behaves as an allow-list: any service it does not allow falls outside the account's maximum permissions, so the identity policy's grant has nothing to operate within and the call fails. The absence of an explicit deny is not sufficient, because an action has to be allowed at every layer that applies. The silent bucket policy is not the blocker, since a same-account identity policy can grant S3 access on its own. Omitting a service from a service control policy is precisely what excludes it.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
    tags: ["IAM", "SCP", "Policy Evaluation", "Permissions"]
  },
  {
    id: "aws-sap-484",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d1",
    domainName: "Design Solutions for Organizational Complexity",
    title: "What Only the Management Account Can Do",
    scenario: "A delegated administrator in the security account is asked to create a new organizational unit and move two accounts into it.",
    question: "What is the outcome?",
    options: [
      { id: 'A', text: "It fails, because only the management account can change the organization's structure." },
      { id: 'B', text: "It succeeds, because a delegated administrator registration for AWS Organizations conveys the right to administer units and account placement." },
      { id: 'C', text: "It succeeds only for the unit, since creating a unit is permitted but moving accounts into it is not." },
      { id: 'D', text: "It fails, because the security account must first be made a second management account for the organization." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organizations reserves structural change for the management account, covering the creation and deletion of organizational units, the movement of accounts between them, and the invitation or removal of accounts, so delegation cannot convey any of it. Delegated administration applies to the services integrated with Organizations, such as GuardDuty or Config, rather than to the hierarchy itself. Creating a unit is no more delegable than moving an account. An organization has exactly one management account and cannot be given a second.",
    referenceUrl: "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html",
    tags: ["Organizations", "Management Account", "Delegation", "Governance"]
  },
  {
    id: "aws-sap-485",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "What a VPC Endpoint Policy Controls",
    scenario: "A gateway endpoint gives a private subnet access to S3, and the security team wants only two specific buckets reachable through it.",
    question: "What should be configured?",
    options: [
      { id: 'A', text: "An endpoint policy on the gateway endpoint that allows those two bucket ARNs and denies the rest." },
      { id: 'B', text: "A security group on the gateway endpoint permitting outbound traffic only to the ranges the two buckets resolve to." },
      { id: 'C', text: "A route table entry per bucket in the private subnet." },
      { id: 'D', text: "A bucket policy on each of the two buckets naming the endpoint identifier as a condition." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "An endpoint policy is a resource policy on the endpoint itself, so it bounds every request passing through it and is the only one of these that limits which buckets the subnet can reach. A gateway endpoint has no security group, because it is a route table target rather than an elastic network interface. Per-bucket routes are not possible, since the endpoint installs one prefix-list route for the whole service. A bucket policy condition protects those two buckets from other paths but leaves every other bucket reachable through the endpoint.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html",
    tags: ["VPC Endpoints", "S3", "Data Perimeter", "Networking"]
  },
  {
    id: "aws-sap-486",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing a Target Type for a Load Balancer",
    scenario: "An Application Load Balancer must send traffic to containers that each have their own address in the VPC, and to a Lambda function for one path.",
    question: "Which target types are needed?",
    options: [
      { id: 'A', text: "An IP target group for the containers and a Lambda target group for that path, since a single load balancer can route to both kinds." },
      { id: 'B', text: "An instance target group for the containers and an IP target group for the Lambda function's endpoint." },
      { id: 'C', text: "A single instance target group on the load balancer covering both destinations." },
      { id: 'D', text: "An IP target group for everything, with a Lambda proxy integration configured on the listener rule for that path." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Target groups are typed: an IP target group addresses each container's own VPC address, a Lambda target group invokes the function directly, and one Application Load Balancer can hold listener rules pointing at both. An instance target group registers EC2 instance identifiers, so it can represent neither a Lambda function nor containers that each carry their own address under awsvpc networking. Proxy integration is an API Gateway concept rather than a load balancer listener setting.",
    referenceUrl: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html",
    tags: ["ALB", "Target Groups", "Lambda", "Containers"]
  },
  {
    id: "aws-sap-487",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "How a NAT Gateway Differs From an Internet Gateway",
    scenario: "An architect must explain why a private subnet needs a NAT gateway when the VPC already has an internet gateway attached.",
    question: "What is the difference?",
    options: [
      { id: 'A', text: "The NAT gateway allows only outbound connections; the internet gateway also allows inbound." },
      { id: 'B', text: "The NAT gateway is required in every subnet that has no public address, while the internet gateway serves the whole VPC from the route table." },
      { id: 'C', text: "The NAT gateway translates IPv6 addresses, while the internet gateway handles the IPv4 traffic for the VPC." },
      { id: 'D', text: "The NAT gateway provides higher bandwidth, and the internet gateway exists only for legacy VPC designs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The functional difference is direction: a NAT gateway lets instances without public addresses reach the internet outbound while refusing unsolicited inbound connections, whereas an internet gateway carries traffic both ways for resources that hold a public address. A NAT gateway is deployed in a public subnet and serves private subnets through their route tables rather than being needed in each of them. Outbound IPv6 uses an egress-only internet gateway instead of NAT. The internet gateway is not legacy, and a NAT gateway depends on one to reach the internet.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html",
    tags: ["VPC", "NAT Gateway", "Internet Gateway", "Networking"]
  },
  {
    id: "aws-sap-488",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "What a Security Group Cannot Express",
    scenario: "A team wants to allow a subnet's traffic to a database but block one specific address inside that subnet, using a security group.",
    question: "Why will that not work?",
    options: [
      { id: 'A', text: "Security group rules only allow, so an exception has to be expressed as a narrower set of allowed ranges or by a network ACL." },
      { id: 'B', text: "Security groups evaluate their rules in priority order, so the deny rule would need to be placed before the allow rule to have any effect." },
      { id: 'C', text: "Security groups apply to subnets rather than to network interfaces." },
      { id: 'D', text: "Security groups are stateless, so the reply traffic would be blocked along with the request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A security group is an allow-only construct with no deny rule, so a single address cannot be carved out of a permitted range and the requirement must be met either by allowing only the ranges that exclude it or by a network ACL, which does support deny. Security group rules are unordered, because evaluation is a union of every allow. Security groups attach to network interfaces rather than subnets, which is what makes them per-instance. They are stateful, so return traffic is permitted automatically.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",
    tags: ["VPC", "Security Groups", "Network ACL", "Networking"]
  },
  {
    id: "aws-sap-489",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "Choosing Between a Network ACL and a Security Group",
    scenario: "A compliance rule requires a specific external address range to be blocked from reaching any resource in a VPC subnet.",
    question: "Which control implements it?",
    options: [
      { id: 'A', text: "A network ACL deny rule on the subnet, because it is evaluated for every packet entering or leaving the subnet." },
      { id: 'B', text: "A security group rule on each resource denying that range, applied consistently by the configuration pipeline that creates them." },
      { id: 'C', text: "A route table entry sending that network range to a blackhole target." },
      { id: 'D', text: "An AWS WAF rule on the subnet's resources matching the range and returning a block action." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A network ACL is the only VPC control that supports deny rules and it applies at the subnet boundary, so it stops the range before it reaches anything inside. Security groups have no deny rule, so the range cannot be excluded that way however consistently the pipeline applies it. A route table cannot blackhole an arbitrary external source, because a route selects a path by destination rather than filtering by source. WAF inspects HTTP requests at a load balancer, distribution, or API and so cannot cover every resource in a subnet.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
    tags: ["VPC", "Network ACL", "Security Groups", "Compliance"]
  },
  {
    id: "aws-sap-490",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d2",
    domainName: "Design for New Solutions",
    title: "How DynamoDB Streams Order Change Records",
    scenario: "A consumer reads a DynamoDB stream to maintain a downstream projection and must apply the changes for each item in the order they happened.",
    question: "What ordering does the stream provide?",
    options: [
      { id: 'A', text: "Changes to any one item appear in the correct order within a single shard, while changes to different items may be read from different shards in any order." },
      { id: 'B', text: "Every change in the table appears in one global sequence, so a consumer that reads a single shard sees them all in order." },
      { id: 'C', text: "Ordering is only guaranteed when the table has a single partition." },
      { id: 'D', text: "Records for an item arrive in the order they are written but may be delivered more than once." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A DynamoDB stream guarantees ordering per item: every change to a given primary key lands in the same shard and is read in sequence, while no ordering exists between different items because their records may sit in different shards. There is no single global sequence across the table, and that is exactly what lets the stream scale with the table. Ordering does not depend on the table having one partition. Stream records are delivered at least once, but that caveat is separate from the ordering guarantee.",
    referenceUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html",
    tags: ["DynamoDB", "Streams", "Ordering", "Event-Driven"]
  },
  {
    id: "aws-sap-491",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Reading a CloudWatch Alarm's Missing Data Setting",
    scenario: "An alarm on a queue's age-of-oldest-message metric moves to INSUFFICIENT_DATA whenever the queue empties, and the on-call team is paged.",
    question: "What setting resolves this?",
    options: [
      { id: 'A', text: "Treat missing data as not breaching, so an empty queue that publishes no data points leaves the alarm in an OK state." },
      { id: 'B', text: "Treat missing data as breaching, since that is the safer default for any alarm protecting a queue that customers depend on." },
      { id: 'C', text: "Extend the evaluation period until a data point always exists." },
      { id: 'D', text: "Remove the alarm's action so the INSUFFICIENT_DATA transition no longer pages anyone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting missing data to not-breaching tells CloudWatch to leave the alarm alone when the metric stops reporting, which is the right treatment for a queue metric that is simply absent while the queue is empty. Treating missing data as breaching would page on exactly the healthy condition being complained about. Lengthening the evaluation period delays the transition without preventing it, because SQS publishes no data point at all for an empty queue. Removing the action also removes the alerting the alarm exists to provide.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html",
    tags: ["CloudWatch", "Alarms", "SQS", "Alert Fatigue"]
  },
  {
    id: "aws-sap-492",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "What Enhanced Monitoring Adds to an RDS Instance",
    scenario: "CloudWatch shows an RDS instance's CPU as busy, but the team needs to know which process inside the instance is consuming it.",
    question: "What provides that view?",
    options: [
      { id: 'A', text: "Enhanced Monitoring, which reports per-process metrics from the host operating system." },
      { id: 'B', text: "Performance Insights, which attributes database load to individual SQL statements and wait events rather than to operating system processes." },
      { id: 'C', text: "CloudWatch detailed monitoring, which raises the instance's CPU metric to one-minute publication intervals." },
      { id: 'D', text: "The slow query log, which records each statement and the process that exceeded the configured execution time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enhanced Monitoring reads metrics from an agent on the database host, which is what exposes per-process and per-thread CPU, memory, and I/O rather than the instance-level aggregate CloudWatch already publishes. Performance Insights is the right tool for attributing load to SQL and wait events but stops at the database boundary. Detailed monitoring changes only how often an existing metric is published. The slow query log identifies expensive statements without showing what any operating system process is doing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html",
    tags: ["RDS", "Enhanced Monitoring", "Performance Insights", "Observability"]
  },
  {
    id: "aws-sap-493",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "Choosing an Auto Scaling Policy Type",
    scenario: "A web tier should hold average CPU utilisation near 50 percent, and the team does not want to design the scaling steps itself.",
    question: "Which policy type fits?",
    options: [
      { id: 'A', text: "A target tracking policy, which adds and removes capacity to keep the chosen metric near the value you set." },
      { id: 'B', text: "A step scaling policy, which adds a defined amount of capacity for each alarm threshold band that the team has configured." },
      { id: 'C', text: "A scheduled action at the hours when CPU is expected to rise." },
      { id: 'D', text: "A simple scaling policy, which changes capacity once and then waits out a cooldown period." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Target tracking is the policy type that takes a metric and a target value and works out the capacity changes on its own, which is exactly the requirement to avoid designing steps. Step scaling is the option that needs the team to define each threshold band and its capacity change. A scheduled action is open-loop and cannot hold a utilisation figure when traffic departs from the schedule. Simple scaling is the older mechanism that adjusts once per cooldown and therefore reacts far more slowly.",
    referenceUrl: "https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html",
    tags: ["Auto Scaling", "Target Tracking", "Elasticity", "Operations"]
  },
  {
    id: "aws-sap-494",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d3",
    domainName: "Continuous Improvement for Existing Solutions",
    title: "What a Cost and Usage Report Adds Over Cost Explorer",
    scenario: "A finance team needs to reconcile a specific reserved instance discount against the individual line items that received it.",
    question: "Which source has that detail?",
    options: [
      { id: 'A', text: "The Cost and Usage Report, whose hourly line items name the reservation that covered each usage record and land in S3 for querying." },
      { id: 'B', text: "Cost Explorer's reservation coverage view, which is the most granular reservation data AWS publishes." },
      { id: 'C', text: "The monthly invoice, which lists the discount as a single credit line among its items." },
      { id: 'D', text: "AWS Budgets, which tracks reservation usage against a target and alerts on a shortfall." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Cost and Usage Report is the most detailed billing dataset AWS produces, with one row per usage record per hour including the identifier of the reservation or savings plan that covered it, delivered to S3 where Athena can query it. Cost Explorer aggregates and is deliberately not line-item granular, so its coverage view cannot be reconciled row by row. The invoice summarises. Budgets monitors utilisation going forward rather than explaining which line items a past discount applied to.",
    referenceUrl: "https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html",
    tags: ["Cost and Usage Report", "Cost Explorer", "Reserved Instances", "FinOps"]
  },
  {
    id: "aws-sap-495",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing a Strategy for a Commercial Application",
    scenario: "A company runs a licensed on-premises CRM and decides to adopt the vendor's software-as-a-service edition instead of moving the existing install.",
    question: "Which migration strategy is that?",
    options: [
      { id: 'A', text: "Repurchase, because the workload moves to a different product." },
      { id: 'B', text: "Replatform, because the application keeps its function while the underlying platform changes from self-hosted to a managed one." },
      { id: 'C', text: "Refactor, because adopting a hosted edition changes how the application is architected internally." },
      { id: 'D', text: "Relocate, because the workload moves without any change to the application itself." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Repurchase, sometimes called drop and shop, is the strategy for replacing a workload with a different product, which is what adopting the vendor's software-as-a-service edition amounts to. Replatform keeps the same application while changing part of its underlying stack, such as moving a self-managed database onto RDS. Refactor rewrites an application the company owns, and here it owns none of the new code. Relocate moves virtual machines wholesale into AWS without changing the application.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
    tags: ["Migration Strategies", "Repurchase", "SaaS", "Portfolio"]
  },
  {
    id: "aws-sap-496",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "What a Migration Wave Plan Sequences",
    scenario: "A programme has 300 servers and a completed dependency map, and must decide what goes in the first wave.",
    question: "What should drive the grouping?",
    options: [
      { id: 'A', text: "Applications whose dependencies all move together, chosen so no wave leaves a chatty link spanning the data centre and AWS." },
      { id: 'B', text: "The servers with the lowest resource utilisation, because they carry the least risk and their dependencies are simplest to move." },
      { id: 'C', text: "Whatever the discovery tool ranks as most ready, taken in that order." },
      { id: 'D', text: "One application per wave, so each cutover can be rolled back independently of the other applications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Waves should follow dependency boundaries, because everything that talks to everything else needs to move together: splitting a cluster leaves latency-sensitive traffic crossing the hybrid link and turns a routine cutover into a performance incident. Low utilisation identifies easy servers while ignoring whether their dependencies come with them. A readiness ranking from a discovery tool is an input to planning rather than the grouping rule. One application per wave is safe but far too slow for 300 servers, and it still has to respect dependencies.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/planning.html",
    tags: ["Migration Waves", "Dependencies", "Planning", "Migration"]
  },
  {
    id: "aws-sap-497",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "How a Strangler Pattern Retires a Monolith",
    scenario: "A team must decompose a monolith that cannot be taken offline, and wants each extracted capability to carry real traffic before the next one starts.",
    question: "How does the pattern work?",
    options: [
      { id: 'A', text: "A routing layer in front of the monolith sends the extracted capability's requests to the new service, and the old code path is deleted once the new one is proven." },
      { id: 'B', text: "The monolith is forked and each extracted capability removed from a copy, with the copies deployed side by side behind a weighted DNS record." },
      { id: 'C', text: "Each capability is rewritten and released together in one cutover." },
      { id: 'D', text: "The monolith calls out to each new capability's service in turn, so the routing layer never has to change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The strangler pattern puts a routing layer, typically a proxy or an API gateway, in front of the monolith and moves one route at a time to a new service, so each extraction is proven under real traffic and the corresponding monolith code can then be removed. Forking the monolith creates parallel copies that drift and both need maintaining. Rewriting everything for a single cutover is the big-bang approach the pattern exists to avoid. Having the monolith call the new services keeps it on the critical path, so it never actually retires.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/strangler-fig.html",
    tags: ["Modernization", "Strangler Pattern", "Microservices", "Monolith"]
  },
  {
    id: "aws-sap-498",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing Between Refactor and Replatform",
    scenario: "A Java application will move from a self-managed Tomcat fleet onto managed containers, with no change to its code.",
    question: "Which strategy is that?",
    options: [
      { id: 'A', text: "Replatform, because the runtime platform changes while the application code stays as it is." },
      { id: 'B', text: "Refactor, because moving onto containers changes the application into independently deployable services." },
      { id: 'C', text: "Rehost, because the application binaries are unchanged." },
      { id: 'D', text: "Relocate, because the workload moves to a managed service without a code rewrite." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Replatform covers a move that swaps part of the underlying stack, here a self-managed Tomcat fleet for a managed container service, while leaving the application code alone. Refactor would mean rewriting the application, typically into smaller services, and containerisation by itself does not require that. Rehost is a lift and shift onto equivalent infrastructure, which a managed container service is not. Relocate has a specific meaning, moving VMware workloads into AWS without conversion, and does not describe a platform change.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
    tags: ["Migration Strategies", "Replatform", "Containers", "Modernization"]
  },
  {
    id: "aws-sap-499",
    difficulty: "easy",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Choosing a Database Licence Model on Migration",
    scenario: "A company holds perpetual Oracle licences with an active support contract and is moving the database to Amazon RDS.",
    question: "Which licence model applies?",
    options: [
      { id: 'A', text: "Bring your own licence, which reuses the licences the company holds." },
      { id: 'B', text: "Licence included, because RDS bundles the database licence into the hourly instance price for every commercial engine it supports." },
      { id: 'C', text: "Either model, because RDS for Oracle charges the same hourly rate whichever licences you hold." },
      { id: 'D', text: "Neither, because a perpetual licence has to be converted to a subscription before it can be used on AWS." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bring your own licence is the model that lets a company apply licences it already owns to an RDS for Oracle instance, so an existing perpetual entitlement keeps its value. Licence included is available for Oracle Standard Edition Two and for SQL Server, but choosing it here would mean paying for the licence twice. The hourly rates differ between the two models, which is the whole point of the choice. A perpetual licence needs no conversion, although the vendor's own mobility terms still govern where it may be deployed.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Concepts.licensing.html",
    tags: ["RDS", "Licensing", "Oracle", "Migration"]
  },
  {
    id: "aws-sap-500",
    difficulty: "medium",
    certId: "aws-sap",
    domainId: "d4",
    domainName: "Accelerate Workload Migration and Modernization",
    title: "Modernizing a .NET Framework Application",
    scenario: "A .NET Framework application runs on Windows instances, and the team wants to cut Windows licence cost without a full rewrite.",
    question: "What is the pragmatic path?",
    options: [
      { id: 'A', text: "Port the application to a cross-platform .NET runtime and run it in Linux containers, keeping most of the existing code." },
      { id: 'B', text: "Rewrite the application as serverless .NET functions, which is the only way to remove the Windows runtime dependency." },
      { id: 'C', text: "Move the instances to a dedicated host to reduce the Windows licence count." },
      { id: 'D', text: "Keep the application in Windows containers, which removes the Windows licence from the container hosts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Porting to the cross-platform .NET runtime is the modernization that actually removes the Windows dependency while preserving most of the code base, and AWS publishes tooling to assess and assist the port. A serverless rewrite is a much larger change and is not the only route off Windows. A dedicated host can improve licence economics for Windows Server but leaves the workload on Windows. Windows containers still run on Windows hosts, so the licence obligation follows them there.",
    referenceUrl: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-aspnet-web-services/introduction.html",
    tags: ["Modernization", "Windows", "Containers", "Cost Optimization"]
  }
];

export default AWS_SAP_QUESTIONS;
