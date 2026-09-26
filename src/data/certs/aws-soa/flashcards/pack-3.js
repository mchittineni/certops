export const AWS_SOA_FLASHCARDS_3 = [
  {
    id: "aws-soa-fc-51",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "EventBridge default bus vs custom bus vs partner bus: what lands on each?",
    hint: "Who is the producer?",
    back: "The <strong>default event bus</strong> in each account and Region receives events from AWS services automatically. <strong>Custom buses</strong> receive events your applications send with PutEvents, or events forwarded from other buses and accounts. <strong>Partner event buses</strong> receive events from SaaS partners. A rule belongs to exactly one bus and only sees that bus's events.",
    tags: ["EventBridge","Event buses"]
  },
  {
    id: "aws-soa-fc-52",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "EventBridge event pattern rules: how are values and fields matched?",
    hint: "Arrays mean OR; fields mean AND.",
    back: "Every value in a pattern is an <strong>array</strong>, and a field matches if the event value equals <strong>any</strong> element (OR). All fields listed must match (AND). Fields not in the pattern are ignored. Content filters add <strong>prefix</strong>, <strong>suffix</strong>, <strong>anything-but</strong>, <strong>numeric</strong> ranges, <strong>exists</strong>, <strong>wildcard</strong>, <strong>equals-ignore-case</strong>, and $or. Matching is exact and case-sensitive by default, so aws.ec2 is not ec2.",
    tags: ["EventBridge","Event patterns"]
  },
  {
    id: "aws-soa-fc-53",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which EventBridge rule metrics tell you where an event pipeline is broken?",
    hint: "Matched, invoked, failed.",
    back: "<strong>MatchedEvents</strong> at zero means the pattern or bus is wrong, or the source never emits. <strong>Invocations</strong> rising with <strong>FailedInvocations</strong> means the target call fails, usually permissions (Lambda resource policy, target IAM role, KMS). <strong>ThrottledRules</strong> and <strong>InvocationsSentToDlq</strong> show throttling and dead-lettered events. Target-side metrics confirm what actually arrived.",
    tags: ["EventBridge","Troubleshooting"]
  },
  {
    id: "aws-soa-fc-54",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "EventBridge target permissions: resource-based policy vs IAM role. Which targets need which?",
    hint: "Some targets let EventBridge in by policy; others need a role to act.",
    back: "<strong>Resource-based policies</strong> authorize EventBridge for <strong>Lambda</strong>, <strong>SNS</strong>, <strong>SQS</strong>, and CloudWatch Logs targets (the console adds them; the CLI does not). An <strong>IAM role</strong> for the target is required for targets such as <strong>Kinesis</strong>, <strong>Step Functions</strong>, <strong>Systems Manager Automation and Run Command</strong>, <strong>ECS tasks</strong>, API destinations, and cross-account event buses. Encrypted SNS and SQS targets also need KMS key permissions.",
    tags: ["EventBridge","IAM"]
  },
  {
    id: "aws-soa-fc-55",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is the default EventBridge retry policy for a target, and how do you keep failed events?",
    hint: "Hours and attempts, then a queue.",
    back: "By default EventBridge retries a failed delivery for up to <strong>24 hours</strong> and up to <strong>185 attempts</strong> with exponential backoff. You can lower the maximum event age and retry attempts per target. Attach an <strong>SQS dead-letter queue</strong> to the target to keep events that still fail; the message includes error attributes. Without a DLQ, those events are dropped.",
    tags: ["EventBridge","Retry policy"]
  },
  {
    id: "aws-soa-fc-56",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does an EventBridge input transformer do?",
    hint: "Paths in, template out.",
    back: "It reshapes the event before delivery. The <strong>input paths map</strong> extracts values with JSON paths (for example $.detail.instance-id) into variables; the <strong>input template</strong> uses those variables to build a string or JSON the target receives. Use it for readable SNS messages or to pass only the fields a target needs, with no code.",
    tags: ["EventBridge","Input transformer"]
  },
  {
    id: "aws-soa-fc-57",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "EventBridge rules vs EventBridge Pipes: when do you use each?",
    hint: "Many-to-many vs point-to-point.",
    back: "<strong>Rules</strong> on an event bus route events from many producers to up to five targets each (many-to-many). <strong>Pipes</strong> connect <strong>one source</strong> (SQS, Kinesis, DynamoDB Streams, Amazon MQ, MSK or Kafka) to <strong>one target</strong>, with optional <strong>filtering</strong>, <strong>enrichment</strong> (Lambda, Step Functions Express, API Gateway, API destination), and transformation, replacing polling glue code.",
    tags: ["EventBridge Pipes","EventBridge"]
  },
  {
    id: "aws-soa-fc-58",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "EventBridge Scheduler vs scheduled rules: which to use for new schedules?",
    hint: "Time zones and one-time jobs.",
    back: "<strong>EventBridge Scheduler</strong> supports <strong>time zones</strong> with daylight saving, <strong>one-time</strong> schedules, flexible time windows, millions of schedules, and hundreds of targets through universal targets. <strong>Scheduled rules</strong> run cron or rate expressions in <strong>UTC only</strong> on the default bus. Prefer Scheduler for new work.",
    tags: ["EventBridge Scheduler","Scheduling"]
  },
  {
    id: "aws-soa-fc-59",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "How do EventBridge archives and replays work?",
    hint: "Record now, resend later, same bus.",
    back: "An <strong>archive</strong> on a bus stores events that match an optional pattern, for a retention you choose or indefinitely; it captures only events arriving after it exists. A <strong>replay</strong> sends archived events from a time window <strong>back to the same bus</strong>, to all rules or selected rules. Replayed events carry a replay-name field, so consumers can recognise them. Replays are not guaranteed to preserve order.",
    tags: ["EventBridge","Archive and replay"]
  },
  {
    id: "aws-soa-fc-60",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "EventBridge API destinations: what does the connection store, and what else can you set?",
    hint: "Auth and rate.",
    back: "A <strong>connection</strong> holds the authorization (<strong>Basic</strong>, <strong>API key</strong>, or <strong>OAuth client credentials</strong>), stored in a Secrets Manager secret that EventBridge manages, with OAuth tokens refreshed automatically. The <strong>API destination</strong> sets the HTTP endpoint, method, and an <strong>invocation rate limit</strong> per second. Rules or pipes use it as a target with normal retries and DLQs.",
    tags: ["EventBridge","API destinations"]
  },
  {
    id: "aws-soa-fc-61",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "How do you send events from member accounts to a central account's event bus?",
    hint: "Permission on the receiver, a rule on the sender.",
    back: "On the <strong>receiving bus</strong>, add a resource-based policy allowing events:PutEvents from the sender accounts, or from the whole organization with an aws:PrincipalOrgID condition. In each <strong>sending account</strong>, create a rule on the local bus that matches the events and targets the central bus ARN, with an IAM role allowing events:PutEvents on it. Rules on the central bus then route the events onward.",
    tags: ["EventBridge","Cross-account"]
  },
  {
    id: "aws-soa-fc-62",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Where do EventBridge events for global services such as IAM arrive?",
    hint: "One particular Region.",
    back: "API call events for global services, such as <strong>IAM</strong>, AWS STS global endpoint calls, and CloudFront configuration calls, are recorded in <strong>us-east-1</strong> and delivered to the default bus there. A rule in another Region never sees them. Create the rule in us-east-1 and, if needed, forward events to another Region's bus with a cross-Region bus target.",
    tags: ["EventBridge","CloudTrail","Global services"]
  },
  {
    id: "aws-soa-fc-63",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What must you enable for S3 to publish native events to EventBridge?",
    hint: "A bucket-level switch.",
    back: "Turn on <strong>Amazon EventBridge</strong> in the bucket's event notification properties. Once on, S3 sends every supported event (Object Created, Object Deleted, Object Restore, and more) to the default bus, and you filter with rules on bucket name, key prefix, and size. Classic S3 notifications, by contrast, target only SNS, SQS, and Lambda.",
    tags: ["EventBridge","S3"]
  },
  {
    id: "aws-soa-fc-64",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is the EC2 Spot Instance Interruption Warning, and what are the alternatives for reacting to it?",
    hint: "Two minutes; event or metadata.",
    back: "EC2 gives <strong>two minutes</strong> notice before reclaiming a Spot Instance. It is published as an <strong>EventBridge event</strong> and in instance metadata (spot/instance-action). The <strong>EC2 instance rebalance recommendation</strong> can arrive earlier when risk rises. Auto Scaling's <strong>Capacity Rebalancing</strong> uses it to launch replacements proactively.",
    tags: ["EC2 Spot","EventBridge"]
  },
  {
    id: "aws-soa-fc-65",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What are AWS-owned Automation runbooks, and how do you recognise them?",
    hint: "Look at the prefix.",
    back: "Systems Manager provides hundreds of predefined runbooks owned by AWS, named with prefixes such as <strong>AWS-</strong> (for example AWS-RestartEC2Instance, AWS-CreateImage, AWS-UpdateLinuxAmi), <strong>AWSSupport-</strong> (troubleshooting, for example AWSSupport-ExecuteEC2Rescue), and <strong>AWSConfigRemediation-</strong> (Config remediation). Use them as-is or copy and customise them.",
    tags: ["Systems Manager Automation","Runbooks"]
  },
  {
    id: "aws-soa-fc-66",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Automation rate control: what do MaxConcurrency and MaxErrors do?",
    hint: "How many at once, how many failures.",
    back: "A rate-controlled execution targets resources by <strong>tag</strong>, <strong>resource group</strong>, or <strong>parameter values</strong>, creating one child execution per target. <strong>MaxConcurrency</strong> (a number or percentage) limits how many run at once. <strong>MaxErrors</strong> (a number or percentage) stops scheduling new children once that many fail; ones already running finish.",
    tags: ["Systems Manager Automation","Rate control"]
  },
  {
    id: "aws-soa-fc-67",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which roles does multi-account, multi-Region Automation require?",
    hint: "Administration in the center, execution in each target.",
    back: "In the account that starts the run: <strong>AWS-SystemsManager-AutomationAdministrationRole</strong>, which may assume the execution role. In every target account: <strong>AWS-SystemsManager-AutomationExecutionRole</strong>, which trusts the administration role and holds the permissions the runbook needs. You can target accounts or OUs, list Regions, and use rate controls; results are reported centrally.",
    tags: ["Systems Manager Automation","Multi-account"]
  },
  {
    id: "aws-soa-fc-68",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Whose permissions does an Automation runbook use?",
    hint: "It depends on one parameter.",
    back: "If <strong>AutomationAssumeRole</strong> is specified, Automation acts as that <strong>service role</strong>, and the starting user needs only ssm:StartAutomationExecution plus iam:PassRole on the role. If it is omitted, Automation runs with the <strong>permissions of the caller</strong> who started it. The assume role is how you delegate privileged runbooks safely.",
    tags: ["Systems Manager Automation","IAM"]
  },
  {
    id: "aws-soa-fc-69",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "aws:executeScript vs aws:runCommand vs aws:executeAwsApi in a runbook.",
    hint: "Where does the code run?",
    back: "<strong>aws:executeAwsApi</strong> makes a single AWS API call from the Automation service and can capture outputs. <strong>aws:executeScript</strong> runs a <strong>Python or PowerShell</strong> script inside the Automation service with the runbook's role, good for loops and logic. <strong>aws:runCommand</strong> runs a Command document <strong>on managed nodes</strong> through the SSM Agent, needed when the work is inside the OS.",
    tags: ["Systems Manager Automation","Runbook actions"]
  },
  {
    id: "aws-soa-fc-70",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "aws:waitForAwsResourceProperty vs aws:assertAwsResourceProperty vs aws:sleep.",
    hint: "Poll until, check once, or wait blindly.",
    back: "<strong>waitForAwsResourceProperty</strong> polls an API until a property equals a desired value (for example, instance state running), then continues. <strong>assertAwsResourceProperty</strong> checks once and fails the step if the value does not match. <strong>sleep</strong> waits a fixed duration regardless of state. Use wait for readiness, assert for preconditions.",
    tags: ["Systems Manager Automation","Runbook actions"]
  },
  {
    id: "aws-soa-fc-71",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "aws:approve vs aws:pause in a runbook.",
    hint: "Named approvers and a notification vs any signal.",
    back: "<strong>aws:approve</strong> stops until designated IAM principals approve or reject, can require a minimum number of approvals, notifies through an <strong>SNS topic</strong>, and fails the step on rejection or timeout. <strong>aws:pause</strong> simply halts until someone with permission sends a Resume signal (SendAutomationSignal); it names no approver and sends no notification.",
    tags: ["Systems Manager Automation","Approvals"]
  },
  {
    id: "aws-soa-fc-72",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "How can you share a custom Systems Manager document with another account?",
    hint: "Private list or public.",
    back: "Share it <strong>privately</strong> with specific AWS account IDs (up to 1,000), or make it <strong>public</strong>. Recipients run the owner's shared version by ARN, so updates are seen without copying; they can also clone it into their own account. Documents that contain secrets should never be shared publicly, and public sharing can be blocked by an account setting.",
    tags: ["Systems Manager","Document sharing"]
  },
  {
    id: "aws-soa-fc-73",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Maintenance window vs State Manager association for scheduling a runbook.",
    hint: "Bounded time slot vs keeping a desired state.",
    back: "A <strong>maintenance window</strong> defines a recurring time slot with a duration and cutoff and runs registered tasks (Automation, Run Command, Lambda, Step Functions) against targets inside it; good for disruptive work like patching. A <strong>State Manager association</strong> applies a document to targets on a schedule or on registration of new nodes to keep a <strong>desired state</strong>, with compliance reporting. Both can run Automation runbooks.",
    tags: ["Maintenance windows","State Manager"]
  },
  {
    id: "aws-soa-fc-74",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does the AWS-UpdateLinuxAmi runbook do?",
    hint: "Launch, update, image, clean up.",
    back: "It launches a temporary instance from a <strong>source AMI</strong>, applies OS package updates (with optional pre- and post-update scripts), <strong>creates a new AMI</strong>, and terminates the temporary instance. AWS-UpdateWindowsAmi does the same for Windows. Schedule it to produce patched golden images; EC2 Image Builder is the fuller pipeline option.",
    tags: ["Systems Manager Automation","AMI"]
  },
  {
    id: "aws-soa-fc-75",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "How do you start an Automation runbook from a script or application?",
    hint: "One API, a document name, parameters.",
    back: "Call <strong>StartAutomationExecution</strong> (for example boto3 ssm.start_automation_execution or aws ssm start-automation-execution) with the <strong>DocumentName</strong>, optional version, and <strong>Parameters</strong>, plus TargetParameterName and Targets for rate control. Track progress with GetAutomationExecution. The caller needs ssm:StartAutomationExecution and iam:PassRole for any AutomationAssumeRole.",
    tags: ["Systems Manager Automation","AWS SDK"]
  }
];

export default AWS_SOA_FLASHCARDS_3;
