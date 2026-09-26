export const AWS_SOA_FLASHCARDS_13 = [
  {
    id: 'aws-soa-fc-301',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What are the ways to keep SSM Agent up to date across a fleet?',
    hint: 'Scheduled, one-click, or organization-wide.',
    back: 'Create a <strong>State Manager association</strong> that runs <code>AWS-UpdateSSMAgent</code> on a schedule against all managed nodes, turn on <strong>Auto update SSM Agent</strong> in Fleet Manager settings (which creates that association for you), or use a <strong>Quick Setup Host Management</strong> configuration to do it across accounts and Regions. A one-off Run Command of the same document works but does not repeat. Agents from custom AMIs age quickly, so schedule updates rather than rely on images.',
    tags: ['SSM Agent', 'State Manager']
  },
  {
    id: 'aws-soa-fc-302',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What is Default Host Management Configuration, and what does it require?',
    hint: 'Managed nodes without touching instance profiles.',
    back: 'An account- and Region-level Systems Manager setting that makes <strong>every EC2 instance</strong> a managed node using a role Systems Manager provides to the agent, <strong>without an instance profile</strong> on each instance. Requirements: <strong>IMDSv2</strong> enabled on the instance, a recent <strong>SSM Agent</strong>, and network reach to the Systems Manager endpoints (or <code>ssm</code>, <code>ssmmessages</code> and <code>ec2messages</code> interface endpoints in private subnets). It can be enabled across accounts with Quick Setup.',
    tags: ['Systems Manager', 'Managed nodes']
  },
  {
    id: 'aws-soa-fc-303',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Which Systems Manager document types matter for operations?',
    hint: 'The type decides which capability runs it.',
    back: '<strong>Command</strong>: used by Run Command and State Manager to run scripts on nodes. <strong>Automation</strong> (runbooks): multi-step workflows run by Automation. <strong>Session</strong>: Session Manager preferences and port forwarding. <strong>Package</strong>: Distributor software bundles. <strong>Policy</strong>: State Manager policy such as Inventory collection. <strong>Change Calendar</strong>: open and closed periods. AWS-owned documents start with <code>AWS-</code> or <code>AWSSupport-</code>.',
    tags: ['Systems Manager', 'Documents']
  },
  {
    id: 'aws-soa-fc-304',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What does Systems Manager Inventory collect, and how do you query it across accounts?',
    hint: 'Collect locally, sync centrally.',
    back: 'An Inventory association (the <code>AWS-GatherSoftwareInventory</code> policy document) collects applications, AWS components, network configuration, Windows updates, services, files and registry keys, plus <strong>custom inventory</strong> you write to the node. Query one account in the console, or create a <strong>resource data sync</strong> in each account and Region that writes to a <strong>central S3 bucket</strong> for querying with <strong>Athena</strong> and visualizing in QuickSight.',
    tags: ['Systems Manager', 'Inventory']
  },
  {
    id: 'aws-soa-fc-305',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Where can Run Command output go, and why configure it?',
    hint: 'The console does not show everything.',
    back: 'The console and <code>GetCommandInvocation</code> return <strong>truncated</strong> output, so long outputs need a destination: an <strong>S3 bucket</strong> (full stdout and stderr per instance and step) and/or <strong>CloudWatch Logs</strong> (streamed, searchable, with retention settings). Command status changes can also notify an <strong>SNS topic</strong> or be matched by EventBridge. The instance profile or node role needs write access to the chosen bucket or log group.',
    tags: ['Run Command', 'Logging']
  },
  {
    id: 'aws-soa-fc-306',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What are the parts of a Systems Manager maintenance window?',
    hint: 'Schedule, length, stop point, who, what.',
    back: '<strong>Schedule</strong> (cron or rate, with time zone), <strong>duration</strong> (1 to 24 hours) and <strong>cutoff</strong> (hours before the end when no new tasks start). <strong>Targets</strong>: registered instance IDs, tags or resource groups. <strong>Tasks</strong>: Run Command, Automation, Lambda or Step Functions, each with priority, concurrency and error threshold, and optionally a service role. Tasks do not start after the cutoff, but running ones are allowed to finish.',
    tags: ['Maintenance windows', 'Systems Manager']
  },
  {
    id: 'aws-soa-fc-307',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'AWS-RunPatchBaseline: what is the difference between the Scan and Install operations?',
    hint: 'One reports, one changes.',
    back: '<strong>Scan</strong>: compares installed patches with the node\'s patch baseline and reports compliance, installing nothing. <strong>Install</strong>: installs approved missing patches, then reports. The <code>RebootOption</code> parameter decides whether the node reboots: <strong>RebootIfNeeded</strong> (default) or <strong>NoReboot</strong>, which leaves patches pending reboot. Run Scan daily and Install inside a maintenance window.',
    tags: ['Patch Manager']
  },
  {
    id: 'aws-soa-fc-308',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Patch Manager baselines: predefined vs custom, and how do nodes pick one?',
    hint: 'Approval rules plus a tag or a policy.',
    back: 'AWS <strong>predefined baselines</strong> exist per operating system (for example approving critical and important security updates after 7 days). <strong>Custom baselines</strong> set approval rules by classification, severity and delay, plus explicit approved and rejected patch lists. Nodes use the OS default baseline unless placed in a <strong>patch group</strong> (tag key <code>Patch Group</code> or <code>PatchGroup</code>) registered to another baseline, or covered by a Quick Setup <strong>patch policy</strong>.',
    tags: ['Patch Manager', 'Patch baselines']
  },
  {
    id: 'aws-soa-fc-309',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'State Manager: when does an association run, and what does ApplyOnlyAtCronInterval change?',
    hint: 'By default it does not wait for the schedule.',
    back: 'An association runs <strong>immediately when created</strong> and whenever new targets match, then on its schedule (cron or rate). With <strong>ApplyOnlyAtCronInterval</strong>, it skips the immediate run and waits for the next scheduled time, useful when changes must land only in a quiet period. Associations can also reference a <strong>Change Calendar</strong> so they run only when it is open, and they report compliance per node.',
    tags: ['State Manager', 'Scheduling']
  },
  {
    id: 'aws-soa-fc-310',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Systems Manager hybrid nodes: how are on-premises servers identified, and which limits apply?',
    hint: 'Look at the node ID prefix.',
    back: 'Servers registered through a <strong>hybrid activation</strong> get IDs starting <code>mi-</code> and assume the activation\'s <strong>IAM service role</strong>, since they have no instance profile. The <strong>standard-instances tier</strong> allows up to 1,000 hybrid nodes per account and Region; the paid <strong>advanced-instances tier</strong> raises that and is required for features such as Session Manager access to hybrid nodes. Activations have an expiry date and a registration limit you set when creating them.',
    tags: ['Systems Manager', 'Hybrid activation']
  },
  {
    id: 'aws-soa-fc-311',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Which settings tune a Lambda event source mapping on an SQS queue?',
    hint: 'Size, wait, cap, and the queue\'s own timeout.',
    back: '<strong>Batch size</strong> (up to 10 for FIFO, up to 10,000 for standard with a batching window) and <strong>maximum batching window</strong> trade latency for fewer invocations. <strong>Maximum concurrency</strong> (2 to 1,000) caps how many function instances poll the queue, protecting downstream systems. Set the queue\'s <strong>visibility timeout</strong> to at least six times the function timeout, and use <strong>ReportBatchItemFailures</strong> plus a <strong>redrive policy</strong> so one bad message does not replay the whole batch forever.',
    tags: ['Lambda', 'SQS', 'Event source mapping']
  },
  {
    id: 'aws-soa-fc-312',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Which S3 event types can trigger a notification?',
    hint: 'Created, removed, and a few lifecycle-style events.',
    back: '<strong>s3:ObjectCreated:*</strong> (Put, Post, Copy, CompleteMultipartUpload), <strong>s3:ObjectRemoved:*</strong> (Delete, and DeleteMarkerCreated in versioned buckets), <strong>s3:ObjectRestore:*</strong> (Glacier restore initiated or completed), <strong>s3:Replication:*</strong> (failures and threshold misses), <strong>s3:LifecycleExpiration:*</strong> and lifecycle transitions, <strong>s3:IntelligentTiering</strong>, <strong>s3:ObjectTagging:*</strong>, <strong>s3:ObjectAcl:Put</strong> and <strong>s3:ReducedRedundancyLostObject</strong>.',
    tags: ['S3 Event Notifications', 'Event types']
  },
  {
    id: 'aws-soa-fc-313',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What delivery guarantees do S3 Event Notifications give?',
    hint: 'Fast, but not exactly once or in order.',
    back: 'Notifications are typically delivered in <strong>seconds</strong> but can occasionally take longer, are delivered <strong>at least once</strong> (rarely duplicated), and are <strong>not guaranteed to arrive in order</strong>. Each event carries a <code>sequencer</code> value: for the same object key, a greater sequencer means a later event, so consumers can discard stale updates. Design handlers to be idempotent, and use a queue as destination when bursts must be buffered.',
    tags: ['S3 Event Notifications', 'Delivery semantics']
  },
  {
    id: 'aws-soa-fc-314',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'S3 Event Notifications direct vs through EventBridge: when do you pick each?',
    hint: 'Filtering power and number of consumers.',
    back: '<strong>Direct notifications</strong>: send to SNS, standard SQS or Lambda with only <strong>prefix and suffix</strong> filters, and overlapping filters for the same event type are not allowed. <strong>EventBridge</strong>: turn it on once per bucket; every event goes to the default bus, where rules filter on any field (size, key patterns, requester) and route to many targets, with archive and replay. Choose EventBridge for fan-out and rich filtering, direct for the simplest single consumer.',
    tags: ['S3 Event Notifications', 'EventBridge']
  },
  {
    id: 'aws-soa-fc-315',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do Retry and Catch work in a Step Functions state?',
    hint: 'Which errors, how often, how long between, and where next.',
    back: '<strong>Retry</strong> is an ordered list of retriers, each with <code>ErrorEquals</code> (such as <code>States.TaskFailed</code> or a service error name), <code>IntervalSeconds</code>, <code>MaxAttempts</code> and <code>BackoffRate</code>, plus optional <code>MaxDelaySeconds</code> and jitter. When retries are exhausted, <strong>Catch</strong> routes matching errors to a fallback state with the error in <code>ResultPath</code>, for example to notify operators or roll back. <code>States.ALL</code> matches any error and must be listed last.',
    tags: ['Step Functions', 'Error handling']
  },
  {
    id: 'aws-soa-fc-316',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Lambda invocation types: how do synchronous, asynchronous and event source mapping differ in retries?',
    hint: 'Who holds the event while it is retried?',
    back: '<strong>Synchronous</strong> (API Gateway, direct invoke): the caller gets the error and decides whether to retry. <strong>Asynchronous</strong> (S3, SNS, EventBridge): Lambda queues the event and retries <strong>twice</strong> by default, then sends it to an on-failure destination or DLQ. <strong>Event source mapping</strong> (SQS, Kinesis, DynamoDB Streams): Lambda polls; failed SQS messages return to the queue until its redrive policy moves them, and stream batches retry until success or record expiry unless you configure limits.',
    tags: ['Lambda', 'Invocation types']
  },
  {
    id: 'aws-soa-fc-317',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Lambda asynchronous invocation: which settings control retries and what happens to failures?',
    hint: 'Two numbers and two kinds of destination.',
    back: '<strong>Retry attempts</strong>: 0 to 2 (default 2). <strong>Maximum event age</strong>: 60 seconds to 6 hours; events older than this are discarded. <strong>Destinations</strong>: on-success and on-failure targets (SQS, SNS, Lambda, EventBridge bus, or S3 for failures) that receive the event <strong>plus invocation details</strong> such as the error. A <strong>DLQ</strong> (SQS or SNS) is the older alternative and receives only the event payload. Prefer an on-failure destination.',
    tags: ['Lambda', 'Asynchronous invocation']
  },
  {
    id: 'aws-soa-fc-318',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Step Functions Standard vs Express workflows: which for operational automation?',
    hint: 'Duration and delivery semantics.',
    back: '<strong>Standard</strong>: runs up to <strong>one year</strong>, exactly-once step execution, full visual history, priced per state transition; right for runbook-style operations with waits, approvals and retries. <strong>Express</strong>: up to <strong>5 minutes</strong>, at-least-once (asynchronous) or at-most-once (synchronous), priced by requests and duration; right for high-volume, short event processing. Both offer retry and catch per state and SDK integrations with AWS services.',
    tags: ['Step Functions', 'Orchestration']
  },
  {
    id: 'aws-soa-fc-319',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do you automate responses to AWS Health events?',
    hint: 'Health publishes to the same place as other services.',
    back: 'AWS Health sends account-specific events (scheduled maintenance, instance retirement, service issues affecting your resources) to <strong>EventBridge</strong> with source <code>aws.health</code>. Create a rule matching the service and <code>eventTypeCode</code>, and target SNS, a Lambda function or an Automation runbook. With <strong>organizational view</strong> and a delegated administrator, Health events from all member accounts can be aggregated centrally.',
    tags: ['AWS Health', 'EventBridge']
  },
  {
    id: 'aws-soa-fc-320',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'S3 Event Notifications vs S3 Batch Operations: which for which job?',
    hint: 'New objects as they arrive, or objects that already exist?',
    back: '<strong>Event Notifications</strong> react to objects <strong>as they are created, deleted or restored</strong>, invoking Lambda or sending to SNS, SQS or EventBridge per event. <strong>Batch Operations</strong> act on <strong>existing</strong> objects in bulk from a manifest (an S3 Inventory report or CSV, or generated by filters): copy, tag, restore, replace ACLs or invoke a Lambda function per object, with progress tracking and a completion report. Use Batch Operations to backfill objects that predate a notification.',
    tags: ['S3 Event Notifications', 'S3 Batch Operations']
  },
  {
    id: 'aws-soa-fc-321',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'What does Systems Manager Quick Setup deploy for you?',
    hint: 'Best-practice configurations across an organization.',
    back: 'Quick Setup applies recommended configurations to one account or to <strong>OUs and Regions</strong> in an organization, and keeps new accounts in scope. Configurations include <strong>Host Management</strong> (agent updates, Inventory, CloudWatch agent), <strong>Default Host Management Configuration</strong>, <strong>patch policies</strong>, AWS Config recording, conformance packs, DevOps Guru, Change Manager and distributor packages. Each configuration shows deployment status per account and Region.',
    tags: ['Systems Manager', 'Quick Setup']
  },
  {
    id: 'aws-soa-fc-322',
    difficulty: 'medium',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How do automation and templates always pick up the latest AWS AMI without editing IDs?',
    hint: 'AWS publishes the IDs somewhere you can read.',
    back: 'AWS publishes current AMI IDs as <strong>public Systems Manager parameters</strong>, for example <code>/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64</code>. Launch templates can reference <code>resolve:ssm:</code> followed by the parameter name, CloudFormation can use an <code>AWS::SSM::Parameter::Value&lt;AWS::EC2::Image::Id&gt;</code> parameter, and runbooks can read the value in a step. Pin a specific AMI in production when you need repeatable builds.',
    tags: ['Parameter Store', 'AMI']
  },
  {
    id: 'aws-soa-fc-323',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Change Manager vs Change Calendar: how do they work together?',
    hint: 'One governs requests, one governs time.',
    back: '<strong>Change Manager</strong>: change <strong>templates</strong> define required approvals and the runbook to execute; a change request goes through approval, then runs the Automation runbook at its scheduled time, with an audit trail. <strong>Change Calendar</strong>: marks periods <strong>open</strong> or <strong>closed</strong>. Change Manager checks the calendar and will not run changes during closed periods unless an override is approved; State Manager associations and runbooks can check it too.',
    tags: ['Change Manager', 'Change Calendar']
  },
  {
    id: 'aws-soa-fc-324',
    difficulty: 'hard',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'Why must event-driven remediation code be idempotent?',
    hint: 'How many times can one event arrive?',
    back: 'EventBridge, S3 notifications, SNS and Lambda asynchronous invocation all deliver <strong>at least once</strong>, and retries after timeouts can re-run work that actually succeeded. Remediation must therefore be safe to repeat: check current state before acting (is the port already closed?), use client tokens or conditional writes, and record processed event IDs where duplicates would cause harm, for example in a DynamoDB table with a conditional put.',
    tags: ['Event-driven automation', 'Idempotency']
  },
  {
    id: 'aws-soa-fc-325',
    difficulty: 'easy',
    certId: 'aws-soa',
    domainId: 'd3',
    front: 'How can you choose which nodes a Run Command invocation targets?',
    hint: 'Four ways, from one node to all of them.',
    back: 'Specify <strong>instance or node IDs</strong> directly, <strong>tags</strong> (key and value pairs, which pick up nodes launched later when used by associations), a <strong>resource group</strong>, or <strong>all managed nodes</strong> in the account and Region. Combine targeting with <strong>concurrency</strong> and <strong>error threshold</strong> for large fleets, and only nodes that are online and managed receive the command.',
    tags: ['Run Command', 'Targeting']
  }
];

export default AWS_SOA_FLASHCARDS_13;
