export const AWS_SOA_FLASHCARDS_11 = [
  {
    id: 'aws-soa-fc-251',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'CloudFormation: which failed stack states can be updated, and which can only be deleted?',
    hint: 'It depends on whether the stack ever finished creating.',
    back: '<strong>ROLLBACK_COMPLETE</strong> (a failed first create that rolled back) and <strong>ROLLBACK_FAILED</strong> can only be <strong>deleted</strong>. <strong>UPDATE_ROLLBACK_COMPLETE</strong> is a healthy state: the stack returned to its last good configuration and accepts new updates. <strong>UPDATE_ROLLBACK_FAILED</strong> needs <code>continue-update-rollback</code> first. <strong>DELETE_FAILED</strong> is retried as a delete, optionally retaining the resources that blocked it.',
    tags: ['CloudFormation', 'Stack states']
  },
  {
    id: 'aws-soa-fc-252',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do you debug a failing stack without CloudFormation deleting everything it just built?',
    hint: 'Change what happens on failure.',
    back: 'Create or update with <strong>rollback disabled</strong> (<code>--disable-rollback</code>, or "Preserve successfully provisioned resources" in the console). On failure the stack stops in <strong>CREATE_FAILED</strong> or <strong>UPDATE_FAILED</strong> with working resources kept, so you can inspect the broken one, fix the template, and <strong>retry</strong> from the failure point. When done, you can still roll back or delete. For creates, <code>--on-failure</code> also accepts <code>DO_NOTHING</code>, <code>ROLLBACK</code> or <code>DELETE</code>.',
    tags: ['CloudFormation', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-253',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'The stack events list dozens of "Resource creation cancelled" messages. Where is the real error?',
    hint: 'Read the events in time order.',
    back: '"Resource creation cancelled" is a <strong>side effect</strong>: once one resource fails, CloudFormation cancels the others still in progress. Find the <strong>earliest CREATE_FAILED or UPDATE_FAILED event</strong> with a real status reason (permission denied, invalid property, quota exceeded). For a nested stack, the parent only says the embedded stack failed; open the <strong>nested stack\'s own events</strong> for the root cause.',
    tags: ['CloudFormation', 'Stack events']
  },
  {
    id: 'aws-soa-fc-254',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How many IP addresses in each VPC subnet can you not use?',
    hint: 'A /28 has 16 addresses, but not 16 usable ones.',
    back: 'AWS reserves <strong>five</strong> IPv4 addresses per subnet: the network address, the next three (VPC router, DNS, future use) and the last address. A <strong>/28</strong> therefore gives <strong>11</strong> usable addresses and a /24 gives 251. Subnet sizes range from <strong>/16 to /28</strong>. Factor in ENIs for load balancers, Lambda, endpoints and EKS pods when sizing, because a subnet cannot be resized later.',
    tags: ['VPC', 'Subnet sizing']
  },
  {
    id: 'aws-soa-fc-255',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'VcpuLimitExceeded vs InsufficientInstanceCapacity: what does each launch error mean and how do you fix it?',
    hint: 'One is your account, one is the zone.',
    back: '<strong>VcpuLimitExceeded</strong>: your account hit its <strong>On-Demand vCPU quota</strong> for that instance family group in the Region. Fix: request a quota increase in Service Quotas or terminate unused instances. <strong>InsufficientInstanceCapacity</strong>: AWS has <strong>no spare capacity</strong> of that type in that Availability Zone right now. Fix: retry later, pick another zone or instance type, or use an On-Demand Capacity Reservation for launches that must not fail.',
    tags: ['EC2', 'Troubleshooting', 'Service Quotas']
  },
  {
    id: 'aws-soa-fc-256',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'InsufficientCapabilities error: which acknowledgement is CloudFormation asking for?',
    hint: 'There are three flags.',
    back: '<strong>CAPABILITY_IAM</strong>: the template creates IAM resources. <strong>CAPABILITY_NAMED_IAM</strong>: those IAM resources have custom names (RoleName, UserName). <strong>CAPABILITY_AUTO_EXPAND</strong>: the template uses macros or transforms such as <code>AWS::Serverless</code> that expand before deployment. Pass the flag with <code>--capabilities</code> or tick the acknowledgement in the console; it is a deliberate confirmation, not a permission.',
    tags: ['CloudFormation', 'Capabilities', 'IAM']
  },
  {
    id: 'aws-soa-fc-257',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'An update fails with "Action denied by stack policy". What is going on and how do you proceed?',
    hint: 'It is not IAM.',
    back: 'A <strong>stack policy</strong> protects named resources from update actions (for example <code>Update:Replace</code> or <code>Update:Delete</code> on a production database), independent of IAM. To make an intended change, supply a <strong>temporary stack policy override</strong> with that one update; it applies only to that operation and the original policy stays in force afterwards. A stack policy cannot be removed once set, only replaced.',
    tags: ['CloudFormation', 'Stack policy']
  },
  {
    id: 'aws-soa-fc-258',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'In a change set, what does Replacement: True vs Conditional tell you?',
    hint: 'Think about the physical ID.',
    back: '<strong>True</strong>: CloudFormation will create a <strong>new physical resource</strong> and delete the old one, so data on it (a database, a volume) is lost unless protected. <strong>Conditional</strong>: replacement depends on a value only known at execution, such as a referenced resource that may itself be replaced. <strong>False</strong>: update in place, with or without interruption. Review this column before executing any change to stateful resources.',
    tags: ['CloudFormation', 'Change sets']
  },
  {
    id: 'aws-soa-fc-259',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'A resource exists but is not managed by any stack, and deployments fail because the name is taken. What is the clean fix?',
    hint: 'Bring it under management instead of recreating it.',
    back: 'Use <strong>resource import</strong>: add the resource to the template with a <code>DeletionPolicy</code> (required for import), then create an <strong>IMPORT change set</strong> that maps the logical ID to the existing physical identifier. The stack adopts the resource without recreating it. Afterwards, run <strong>drift detection</strong> to confirm the template matches the live configuration. Import is also how you move a resource between stacks (retain in one, import into the other).',
    tags: ['CloudFormation', 'Resource import']
  },
  {
    id: 'aws-soa-fc-260',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What does ValidateTemplate catch, and what does it miss?',
    hint: 'Syntax is not semantics.',
    back: '<code>aws cloudformation validate-template</code> checks that the template is <strong>well-formed JSON or YAML</strong> with valid structure and resolvable intrinsic functions. It does <strong>not</strong> verify property values, quotas, permissions or whether resources can be created. For deeper checks use <strong>cfn-lint</strong> (resource specification rules) and a <strong>change set</strong>, which surfaces many errors before anything is provisioned.',
    tags: ['CloudFormation', 'Validation']
  },
  {
    id: 'aws-soa-fc-261',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'A deployment fails with "UnauthorizedOperation" and a long encoded message. How do you find out which policy denied it?',
    hint: 'There is an STS call for that blob.',
    back: 'Run <code>aws sts decode-authorization-message --encoded-message ...</code> with a principal that has <code>sts:DecodeAuthorizationMessage</code>. The decoded JSON shows the <strong>action, resource and context</strong> of the denied request and whether an explicit deny matched, which narrows the cause to an identity policy, permissions boundary, SCP or resource condition. Pair it with <strong>CloudTrail</strong> (errorCode AccessDenied) and the <strong>IAM policy simulator</strong> to confirm the fix.',
    tags: ['IAM', 'Troubleshooting', 'Permissions']
  },
  {
    id: 'aws-soa-fc-262',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do you stop quota limits from surprising a deployment in the first place?',
    hint: 'Quotas can be watched like metrics.',
    back: 'Check limits in <strong>Service Quotas</strong> before large rollouts, and request increases in advance (they can take time and are per Region). Many quotas publish <strong>usage metrics in CloudWatch</strong> (AWS/Usage namespace), so you can create an alarm on usage as a percentage of the quota with the <code>SERVICE_QUOTA()</code> metric math function. <strong>Trusted Advisor</strong> service limit checks give a similar view. For new accounts, <strong>quota request templates</strong> in Organizations apply increases automatically.',
    tags: ['Service Quotas', 'CloudWatch']
  },
  {
    id: 'aws-soa-fc-263',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Name common resource types you can share with AWS Resource Access Manager.',
    hint: 'Mostly networking, plus a few others.',
    back: 'Frequently tested: <strong>VPC subnets</strong>, <strong>transit gateways</strong>, <strong>Route 53 Resolver rules</strong>, <strong>customer-managed prefix lists</strong>, <strong>IPAM pools</strong>, <strong>EC2 Capacity Reservations</strong>, <strong>License Manager configurations</strong>, <strong>Aurora DB clusters</strong> (for cloning) and <strong>Network Firewall policies</strong>. Not shared through RAM: AMIs and EBS snapshots (launch or create-volume permissions), KMS keys (key policy), S3 buckets (bucket policy) and StackSets.',
    tags: ['AWS RAM', 'Resource sharing']
  },
  {
    id: 'aws-soa-fc-264',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'AWS RAM: AWS managed permissions vs customer managed permissions?',
    hint: 'Least privilege for the consumer.',
    back: 'Every resource share attaches a <strong>managed permission</strong> per resource type that defines which actions principals can take on the shared resource. <strong>AWS managed permissions</strong> are predefined (a default plus sometimes narrower variants). <strong>Customer managed permissions</strong> let you author your own, limited to actions the resource type supports, to give consumers <strong>less</strong> access, for example read-only use of a shared IPAM pool. Permissions never let a consumer exceed what its own IAM policies allow.',
    tags: ['AWS RAM', 'Least privilege']
  },
  {
    id: 'aws-soa-fc-265',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'In a shared VPC, who pays for what?',
    hint: 'Split along who owns the resource.',
    back: '<strong>Participants</strong> pay for the resources they create (instances, databases, load balancers) and for their inter-AZ and peering data transfer. The <strong>VPC owner</strong> pays hourly, data processing and data transfer charges for NAT gateways, virtual private gateways, transit gateways, PrivateLink and VPC endpoints in the VPC. Chargeback for shared egress therefore needs cost allocation beyond account-level billing.',
    tags: ['VPC sharing', 'Billing']
  },
  {
    id: 'aws-soa-fc-266',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Why use Availability Zone IDs, not names, when coordinating shared subnets across accounts?',
    hint: 'us-east-1a is not the same place for everyone.',
    back: 'AZ <strong>names</strong> (us-east-1a) are mapped independently per account, so "1a" in the network account may be a different physical zone from "1a" in a participant account. AZ <strong>IDs</strong> (use1-az1) identify the same physical zone in every account. When a participant places workloads for zonal redundancy or colocates with a shared subnet, match on the <strong>AZ ID</strong> shown on the subnet.',
    tags: ['VPC sharing', 'Availability Zones']
  },
  {
    id: 'aws-soa-fc-267',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do you share an AMI with a whole OU instead of listing account IDs?',
    hint: 'Launch permissions accept more than accounts.',
    back: 'Add a launch permission with an <strong>organization ARN</strong> or <strong>OU ARN</strong> (<code>modify-image-attribute --launch-permission "Add=[{OrganizationalUnitArn=...}]"</code>). Current and future accounts in that organization or OU can launch the image. If the snapshots use a customer managed key, the <strong>key policy</strong> must also allow the organization, typically with the <code>aws:PrincipalOrgID</code> condition. AMIs encrypted with the AWS managed <code>aws/ebs</code> key cannot be shared.',
    tags: ['AMI', 'AWS Organizations', 'Sharing']
  },
  {
    id: 'aws-soa-fc-268',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'StackSets: service-managed vs self-managed permissions. When do you use each?',
    hint: 'Is every target inside your organization?',
    back: '<strong>Service-managed</strong>: targets are accounts or OUs in your AWS Organization; StackSets creates the roles it needs through trusted access, supports <strong>automatic deployment</strong> to new accounts, and can be run by a <strong>delegated administrator</strong>. <strong>Self-managed</strong>: you create an administration role and an execution role in every target yourself; required for accounts <strong>outside</strong> your organization, and there is no automatic deployment.',
    tags: ['StackSets', 'Permissions models']
  },
  {
    id: 'aws-soa-fc-269',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'StackSets deployment options: what do maximum concurrent accounts, failure tolerance and Region concurrency control?',
    hint: 'Speed versus blast radius.',
    back: '<strong>Maximum concurrent accounts</strong> (count or percentage): how many accounts are deployed at once per Region. <strong>Failure tolerance</strong>: how many account failures per Region are allowed before the operation stops (tolerance 1 stops on the second failure). <strong>Region concurrency</strong>: <strong>sequential</strong> (one Region at a time, in the Region order you give) or <strong>parallel</strong>. Concurrency mode <strong>soft failure tolerance</strong> keeps concurrency high despite failures; strict lowers it as failures accrue.',
    tags: ['StackSets', 'Deployment options']
  },
  {
    id: 'aws-soa-fc-270',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What do the StackSet instance statuses CURRENT, OUTDATED and INOPERABLE mean?',
    hint: 'Is the instance in step with the StackSet?',
    back: '<strong>CURRENT</strong>: the stack matches the latest StackSet template and parameters. <strong>OUTDATED</strong>: the last operation did not complete on this instance (it failed, was never attempted, or the stack is in a failed state), so it is behind the StackSet; fix the cause and rerun the operation. <strong>INOPERABLE</strong>: a delete failed and the stack was left in an unstable state; StackSets ignores it in further operations until you delete it with <strong>retain stacks</strong> and clean up.',
    tags: ['StackSets', 'Troubleshooting']
  },
  {
    id: 'aws-soa-fc-271',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'One StackSet, but a few accounts need a different parameter value. How?',
    hint: 'You do not need a second StackSet.',
    back: 'Use <strong>parameter overrides</strong> on specific stack instances: <code>update-stack-instances</code> with <code>--parameter-overrides</code> for chosen accounts or OUs and Regions. Those instances keep the override through later StackSet updates until you remove it; every other instance uses the StackSet\'s value. Overrides can only change parameters, not the template.',
    tags: ['StackSets', 'Parameters']
  },
  {
    id: 'aws-soa-fc-272',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Removing an account from a StackSet: how do you stop managing its stack without deleting the resources?',
    hint: 'One flag on delete-stack-instances.',
    back: 'Call <code>delete-stack-instances</code> with <strong><code>--retain-stacks</code></strong>. The stack instance is removed from the StackSet, but the stack and its resources stay in the account as a standalone stack. For service-managed automatic deployment, the StackSet-level <strong>retain stacks on account removal</strong> setting decides whether stacks are kept or deleted when an account leaves a targeted OU.',
    tags: ['StackSets', 'Account lifecycle']
  },
  {
    id: 'aws-soa-fc-273',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Which features let you drift-check and operate a StackSet as a whole?',
    hint: 'The stack-level tools have StackSet equivalents.',
    back: '<strong>StackSet drift detection</strong> runs drift detection on every stack instance and reports each as IN_SYNC or DRIFTED, with a StackSet-level drift status. <strong>describe-stack-set-operation</strong> and the operation results list show per-account and per-Region outcomes with status reasons. <strong>Import</strong> can bring existing standalone stacks into a StackSet, so hand-deployed baselines can be managed centrally.',
    tags: ['StackSets', 'Drift detection']
  },
  {
    id: 'aws-soa-fc-274',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'StackSets vs AWS RAM: when do you deploy copies, and when do you share one resource?',
    hint: 'Does every account need its own, or should they all use the same one?',
    back: '<strong>StackSets</strong> deploy a <strong>separate copy</strong> of resources into each account and Region (a baseline role, a Config recorder, an alarm), each owned by that account. <strong>AWS RAM</strong> shares <strong>one resource</strong> owned by a central account (subnets, a transit gateway, Resolver rules, a prefix list) so others use it without owning it. Choose RAM when central control and a single source of truth matter; choose StackSets when each account must hold its own resource. Many landing zones use both.',
    tags: ['StackSets', 'AWS RAM', 'Multi-account']
  },
  {
    id: 'aws-soa-fc-275',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Which accounts can a subnet be shared with, and which with a transit gateway?',
    hint: 'One is organization-only.',
    back: '<strong>Subnets</strong> can be shared only with accounts in the <strong>same AWS Organization</strong>, and only after resource sharing with Organizations is enabled. A <strong>transit gateway</strong> can be shared inside the organization or with <strong>external accounts</strong> by invitation; attachments from other accounts then need acceptance unless the TGW\'s <strong>auto accept shared attachments</strong> setting is on.',
    tags: ['AWS RAM', 'Transit Gateway', 'VPC sharing']
  }
];

export default AWS_SOA_FLASHCARDS_11;
