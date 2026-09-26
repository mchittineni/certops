export const AWS_SOA_FLASHCARDS_1 = [
  {
    id: "aws-soa-fc-1",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which EC2 metrics does CloudWatch provide without the CloudWatch agent, and which ones need it?",
    hint: "Think about what the hypervisor can and cannot see.",
    back: "Default EC2 metrics come from the hypervisor: <strong>CPUUtilization</strong>, network in/out and packets, EBS and instance-store disk ops and bytes, CPU credit metrics, and <strong>status checks</strong>. Anything inside the guest OS needs the <strong>CloudWatch agent</strong>: memory utilization, disk space used, swap, per-process figures (procstat), and OS log files.",
    tags: ["CloudWatch agent","EC2 metrics"]
  },
  {
    id: "aws-soa-fc-2",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "Basic vs detailed monitoring for EC2: what changes?",
    hint: "Frequency, not content.",
    back: "<strong>Basic monitoring</strong> (free) publishes EC2 metrics every <strong>5 minutes</strong>. <strong>Detailed monitoring</strong> (paid) publishes the same metrics every <strong>1 minute</strong>. It adds no new metrics: memory and disk space still require the CloudWatch agent. Detailed monitoring helps Auto Scaling and alarms react faster.",
    tags: ["EC2","Detailed monitoring"]
  },
  {
    id: "aws-soa-fc-3",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "CloudTrail event types: management, data, Insights, and network activity events. What does each capture, and which are on by default?",
    hint: "Only one type is recorded without opting in.",
    back: "<strong>Management events</strong> (control plane: RunInstances, CreateBucket) are recorded by default and appear in event history. <strong>Data events</strong> (resource operations: S3 GetObject, Lambda Invoke, DynamoDB item calls) are high volume, off by default, and billed. <strong>Insights events</strong> flag unusual API call rates or error rates. <strong>Network activity events</strong> record calls made through VPC endpoints, useful for spotting access from outside your organization.",
    tags: ["CloudTrail","Event types"]
  },
  {
    id: "aws-soa-fc-4",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does CloudTrail event history give you if no trail exists?",
    hint: "A number of days and one event type.",
    back: "Event history is on in every account and shows the last <strong>90 days of management events</strong> per Region, searchable in the console or with lookup-events. It holds no data events and no Insights events, and it cannot be kept longer; for long-term retention or organization-wide collection, create a <strong>trail</strong> that delivers to S3 (and optionally CloudWatch Logs).",
    tags: ["CloudTrail","Event history"]
  },
  {
    id: "aws-soa-fc-5",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "How does CloudTrail log file integrity validation work, and how do you check it?",
    hint: "An hourly file that vouches for the others.",
    back: "With validation on, CloudTrail writes a <strong>digest file every hour</strong> listing the SHA-256 hash of each log file delivered, signed with RSA using a Region-specific private key, and each digest chains to the previous one. Run <code>aws cloudtrail validate-logs</code> to detect any log file that was modified, deleted, or added after delivery. Pair it with S3 Object Lock or tight bucket policies to prevent tampering in the first place.",
    tags: ["CloudTrail","Log file validation"]
  },
  {
    id: "aws-soa-fc-6",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Organization trail vs per-account trails: why prefer the organization trail?",
    hint: "Who can turn it off?",
    back: "An <strong>organization trail</strong> is created in the management account (or a delegated administrator) and automatically applies to every current and future member account. Member accounts can see it but <strong>cannot modify or delete it</strong>, and all events land in one bucket with account-ID prefixes. Per-account trails can be stopped by each account's admins and drift over time.",
    tags: ["CloudTrail","AWS Organizations"]
  },
  {
    id: "aws-soa-fc-7",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "CloudWatch agent IAM: CloudWatchAgentServerPolicy vs CloudWatchAgentAdminPolicy. Which goes where?",
    hint: "Only one machine ever needs to write the config.",
    back: "<strong>CloudWatchAgentServerPolicy</strong> is for every instance that runs the agent: PutMetricData, CloudWatch Logs writes, some EC2 describe calls, and <code>ssm:GetParameter</code> on AmazonCloudWatch-* parameters. <strong>CloudWatchAgentAdminPolicy</strong> adds <code>ssm:PutParameter</code> so the agent's wizard can <strong>store</strong> a configuration in Parameter Store; give it only to the one instance or user authoring configurations.",
    tags: ["CloudWatch agent","IAM"]
  },
  {
    id: "aws-soa-fc-8",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "How do you deploy and update CloudWatch agent configuration across a large EC2 fleet?",
    hint: "Two Systems Manager pieces.",
    back: "Store the JSON config in <strong>Parameter Store</strong> (name it AmazonCloudWatch-something so the server policy can read it). Install the agent with the <strong>AWS-ConfigureAWSPackage</strong> document (package AmazonCloudWatchAgent), then run <strong>AmazonCloudWatch-ManageAgent</strong> with action configure and source ssm to fetch the parameter and restart. A State Manager association keeps new instances compliant automatically.",
    tags: ["CloudWatch agent","Systems Manager"]
  },
  {
    id: "aws-soa-fc-9",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "CloudWatch agent config: append_dimensions vs aggregation_dimensions vs global_dimensions.",
    hint: "Add, roll up, or stamp.",
    back: "<strong>append_dimensions</strong> adds EC2 identity dimensions (InstanceId, ImageId, InstanceType, AutoScalingGroupName) to every metric. <strong>aggregation_dimensions</strong> makes the agent publish <strong>extra rolled-up series</strong>, for example [[\"AutoScalingGroupName\"]] for group-wide memory. <strong>global_dimensions</strong> attaches fixed key/value pairs you define to all metrics. Only aggregation produces a combined series.",
    tags: ["CloudWatch agent","Dimensions"]
  },
  {
    id: "aws-soa-fc-10",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which CloudWatch agent plugins collect process-level metrics, and which collect metrics your application pushes?",
    hint: "One looks at processes; two listen on sockets.",
    back: "<strong>procstat</strong> collects CPU, memory, and other figures for selected processes (by exe, pattern, or pid_file) on Linux and Windows. <strong>StatsD</strong> (UDP 8125 by default) and <strong>collectd</strong> (Linux) receive custom metrics that applications or collectd daemons push to the agent. None of them ship log files; that is the logs_collected section.",
    tags: ["CloudWatch agent","procstat","StatsD"]
  },
  {
    id: "aws-soa-fc-11",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is the CWAgent namespace?",
    hint: "Where would you look for mem_used_percent?",
    back: "<strong>CWAgent</strong> is the default CloudWatch namespace for metrics published by the CloudWatch agent, such as mem_used_percent and disk_used_percent on Linux or Memory % Committed Bytes In Use on Windows. You can override it with the namespace setting in the metrics section of the agent configuration.",
    tags: ["CloudWatch agent","Namespaces"]
  },
  {
    id: "aws-soa-fc-12",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Container Insights on ECS: how is it enabled for EC2 launch type vs Fargate?",
    hint: "One needs an extra daemon for instance-level data.",
    back: "For both, enable the <strong>containerInsights</strong> cluster setting (or the account default); this gives cluster, service, and task metrics. On the <strong>EC2 launch type</strong>, deploy the CloudWatch agent as a <strong>daemon service</strong> to add container-instance metrics. <strong>Fargate</strong> needs nothing else, and cannot run daemon services anyway. The enhanced observability option adds container-level detail.",
    tags: ["Container Insights","ECS"]
  },
  {
    id: "aws-soa-fc-13",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does the Amazon CloudWatch Observability EKS add-on install?",
    hint: "One metrics agent, one log forwarder.",
    back: "It deploys the <strong>CloudWatch agent</strong> (for Container Insights with enhanced observability and Application Signals) and <strong>Fluent Bit</strong> (for container logs to CloudWatch Logs) as a managed EKS add-on, so versions are upgraded through the add-on lifecycle. The nodes or the add-on's service account (via EKS Pod Identity or IRSA) need CloudWatchAgentServerPolicy.",
    tags: ["EKS","Container Insights"]
  },
  {
    id: "aws-soa-fc-14",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Amazon Managed Service for Prometheus: what is it for, and how do metrics get in?",
    hint: "Same query language, no servers.",
    back: "A serverless, <strong>PromQL-compatible</strong> metrics store for container and Kubernetes workloads. Metrics arrive by <strong>remote write</strong> from Prometheus servers or ADOT collectors, or through an <strong>AWS managed collector</strong> that scrapes an EKS cluster agentlessly. Query it from Amazon Managed Grafana; alerting rules run in the workspace's ruler and route through the alert manager to SNS.",
    tags: ["Amazon Managed Service for Prometheus","EKS"]
  },
  {
    id: "aws-soa-fc-15",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Lambda Insights vs X-Ray for a Lambda function: what does each show?",
    hint: "Resource consumption vs request path.",
    back: "<strong>Lambda Insights</strong> (an extension layer plus a role policy) publishes system metrics such as memory utilization, CPU time, network, and <strong>init duration</strong> to the LambdaInsights namespace with no code change. <strong>X-Ray</strong> traces individual requests across services, showing where latency comes from, including the initialization segment. Use Insights to right-size memory and X-Ray to find slow downstream calls.",
    tags: ["Lambda Insights","X-Ray"]
  },
  {
    id: "aws-soa-fc-16",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "What actions can a composite alarm take, and what can it not do?",
    hint: "Nothing that touches an instance or group directly.",
    back: "Composite alarms can <strong>notify SNS</strong>, <strong>invoke a Lambda function</strong>, create <strong>OpsCenter OpsItems</strong> or <strong>Incident Manager incidents</strong>, and start a CloudWatch investigation. They <strong>cannot</strong> run EC2 actions (stop, terminate, reboot, recover) or Auto Scaling actions. For those, call the API from a Lambda action or react to the state-change event in <strong>EventBridge</strong> and target an Automation runbook. Composite alarms also support action suppression by another alarm.",
    tags: ["Composite alarms","Alarm actions"]
  },
  {
    id: "aws-soa-fc-17",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is composite alarm action suppression used for?",
    hint: "Maintenance windows and noisy dependencies.",
    back: "A composite alarm can name a <strong>suppressor alarm</strong>: while the suppressor is in ALARM, the composite alarm changes state but its actions are held back. <strong>WaitPeriod</strong> gives the suppressor time to enter ALARM before actions fire, and <strong>ExtensionPeriod</strong> keeps suppressing for a while after it returns to OK. Typical use: suppress downstream pages while a deployment or known upstream outage alarm is active.",
    tags: ["Composite alarms","Alert noise"]
  },
  {
    id: "aws-soa-fc-18",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "CloudWatch alarm states and the four missing-data treatments.",
    hint: "OK, ALARM, INSUFFICIENT_DATA, plus four ways to read a gap.",
    back: "States: <strong>OK</strong>, <strong>ALARM</strong>, <strong>INSUFFICIENT_DATA</strong>. Missing data can be treated as <strong>missing</strong> (default; the alarm looks back further and may go to INSUFFICIENT_DATA), <strong>notBreaching</strong> (gaps count as good), <strong>breaching</strong> (gaps count as bad, ideal for heartbeat metrics), or <strong>ignore</strong> (keep the current state).",
    tags: ["CloudWatch alarms","Missing data"]
  },
  {
    id: "aws-soa-fc-19",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "In an alarm, what do Period, Evaluation Periods, and Datapoints to Alarm mean?",
    hint: "M out of N.",
    back: "<strong>Period</strong> is the length of each datapoint (for example 60 seconds). <strong>Evaluation Periods (N)</strong> is how many recent datapoints are considered. <strong>Datapoints to Alarm (M)</strong> is how many of those must breach to go to ALARM. An M-of-N setting such as 3 of 5 tolerates isolated spikes while still reacting to sustained problems.",
    tags: ["CloudWatch alarms","Evaluation"]
  },
  {
    id: "aws-soa-fc-20",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which EC2 actions can a metric alarm take, and what does each need?",
    hint: "Four verbs, one kind of metric.",
    back: "<strong>Stop, terminate, reboot, and recover</strong>. They require an alarm on a single EC2 <strong>per-instance metric</strong> (dimension InstanceId). <strong>Recover</strong> is meant for StatusCheckFailed_System and keeps the instance ID, IPs, and Elastic IP on new hardware; <strong>reboot</strong> suits StatusCheckFailed_Instance. Instances with instance-store root volumes cannot be recovered.",
    tags: ["CloudWatch alarms","EC2 actions"]
  },
  {
    id: "aws-soa-fc-21",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is the difference between a CloudWatch metric filter and a subscription filter?",
    hint: "Count it vs stream it.",
    back: "A <strong>metric filter</strong> matches log events and turns them into a CloudWatch metric you can graph and alarm on. A <strong>subscription filter</strong> streams matching events in near real time to Lambda, Kinesis Data Streams, Amazon Data Firehose, or OpenSearch Service for processing or storage. Both act only on events ingested after they exist.",
    tags: ["Metric filters","Subscription filters"]
  },
  {
    id: "aws-soa-fc-22",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Standard vs high-resolution custom metrics: storage resolution and alarm periods.",
    hint: "Seconds matter, and so does the bill.",
    back: "<strong>Standard resolution</strong> stores one-minute granularity. <strong>High resolution</strong> (StorageResolution = 1) stores per-second data. Alarms on high-resolution metrics can use periods of <strong>10 or 30 seconds</strong> (or multiples of 60) and are billed at a higher rate. High-resolution data is kept at that granularity for 3 hours before being rolled up.",
    tags: ["High-resolution metrics","CloudWatch alarms"]
  },
  {
    id: "aws-soa-fc-23",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "How long does CloudWatch keep metric data, and at what granularity?",
    hint: "Four tiers, ending at 15 months.",
    back: "Sub-minute data points: <strong>3 hours</strong>. One-minute data: <strong>15 days</strong>. Five-minute data: <strong>63 days</strong>. One-hour data: <strong>455 days (15 months)</strong>. Older data is aggregated to the coarser tier automatically and retention is not configurable; export or stream metrics (for example with metric streams) to keep them longer.",
    tags: ["CloudWatch metrics","Retention"]
  },
  {
    id: "aws-soa-fc-24",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Amazon Bedrock monitoring: runtime metrics vs model invocation logging.",
    hint: "Numbers are automatic; payloads are opt-in.",
    back: "Bedrock publishes <strong>runtime metrics</strong> to the AWS/Bedrock namespace automatically: Invocations, InvocationLatency, InvocationClientErrors, InvocationThrottles, and input and output token counts. <strong>Model invocation logging</strong> is off by default and, when enabled, records full request and response data with metadata to <strong>CloudWatch Logs and/or S3</strong>. CloudTrail records the API calls, not the payloads.",
    tags: ["Amazon Bedrock","AI monitoring"]
  },
  {
    id: "aws-soa-fc-25",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "API Gateway REST API logging: execution logs vs access logs, and what enables them?",
    hint: "One account-level prerequisite applies to both.",
    back: "<strong>Execution logs</strong> are written by API Gateway at ERROR or INFO level (optionally with full request and response data) to a log group named for the API and stage. <strong>Access logs</strong> are one line per request in a format you define, sent to a log group you choose. Both require a <strong>CloudWatch Logs role ARN</strong> in the API Gateway account settings for the Region, with a role that trusts apigateway.amazonaws.com.",
    tags: ["API Gateway","CloudWatch Logs"]
  }
];

export default AWS_SOA_FLASHCARDS_1;
