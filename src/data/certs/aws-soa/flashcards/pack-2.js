export const AWS_SOA_FLASHCARDS_2 = [
  {
    id: "aws-soa-fc-26",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "Are CloudWatch dashboards Regional or global, and can one dashboard show several Regions?",
    hint: "Each metric carries its own Region.",
    back: "Dashboards are <strong>global</strong> resources: you see the same list from any Region's console. Each widget metric specifies its own Region, so one dashboard can graph us-east-1 and eu-west-1 side by side with no data copying. Cross-<strong>account</strong> data still needs cross-account observability or the cross-account console setting.",
    tags: ["CloudWatch dashboards","Multi-Region"]
  },
  {
    id: "aws-soa-fc-27",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What are the three ways to share a CloudWatch dashboard outside the account's IAM users?",
    hint: "Anyone, named people, or your IdP.",
    back: "<strong>Public</strong>: anyone with the link, no sign-in. <strong>Specific email addresses</strong>: CloudWatch creates Amazon Cognito users who set a password and sign in. <strong>Single sign-on (SSO) provider</strong>: viewers authenticate through your SAML identity provider. Shared viewers see only that dashboard and assume a read-only role that you can scope.",
    tags: ["CloudWatch dashboards","Dashboard sharing"]
  },
  {
    id: "aws-soa-fc-28",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Cross-account observability: what is a sink and what is a link?",
    hint: "One receives, many connect.",
    back: "Both are Observability Access Manager resources, created per Region. The <strong>sink</strong> lives in the <strong>monitoring account</strong>; its policy says which accounts or OUs may connect and which telemetry types they may share (metrics, logs, traces, Application Signals, and more). A <strong>link</strong> lives in each <strong>source account</strong> and points at the sink. Once linked, the monitoring account queries, graphs, and alarms on source data directly.",
    tags: ["Cross-account observability","Observability Access Manager"]
  },
  {
    id: "aws-soa-fc-29",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "Cross-account observability vs the older CloudWatch cross-account cross-Region console: what is the practical difference?",
    hint: "Is the data in your account's queries, or do you switch views?",
    back: "The older feature lets a monitoring account <strong>switch into</strong> shared accounts' data in the console through a CloudWatch-CrossAccountSharingRole, mainly for dashboards and viewing metrics. <strong>Cross-account observability</strong> makes source telemetry appear natively in the monitoring account: Logs Insights across accounts, alarms on source metrics, trace maps, and Application Signals, with no switching. New setups should use observability links.",
    tags: ["Cross-account observability","CloudWatch dashboards"]
  },
  {
    id: "aws-soa-fc-30",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "CloudWatch dashboard variables: property vs pattern variables.",
    hint: "One swaps a dimension value; one swaps text anywhere.",
    back: "A <strong>property variable</strong> changes one property across widgets, typically a dimension such as InstanceId or FunctionName, with values from a fixed list or a search. A <strong>pattern variable</strong> replaces a regular-expression match anywhere in the widget definitions, useful when a name appears inside metric names, log group names, or queries. Both add a dropdown or input so one dashboard serves many resources.",
    tags: ["CloudWatch dashboards","Dashboard variables"]
  },
  {
    id: "aws-soa-fc-31",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "When do you use a Metrics Insights query instead of a SEARCH expression in a widget?",
    hint: "SQL, ordering, and top-N.",
    back: "<strong>Metrics Insights</strong> uses SQL-like syntax with GROUP BY, ORDER BY, and LIMIT, so it answers questions like the top 10 instances by CPU across a changing fleet, and it can back an alarm. A <strong>SEARCH</strong> expression returns every metric that matches a search term and is good for showing all matching series, but it cannot rank or limit results the same way.",
    tags: ["Metrics Insights","CloudWatch dashboards"]
  },
  {
    id: "aws-soa-fc-32",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "Name the main CloudWatch dashboard widget types.",
    hint: "Graphs, numbers, states, text, and logs.",
    back: "<strong>Line</strong>, <strong>stacked area</strong>, <strong>bar</strong>, <strong>pie</strong>, and <strong>gauge</strong> charts for metrics; <strong>number</strong> for the latest value; <strong>alarm status</strong> for a grid of alarm states; <strong>text</strong> (Markdown) for runbook links; <strong>logs table</strong> for Logs Insights results; and <strong>explorer</strong> widgets that follow resources by tag. Custom widgets can render output from a Lambda function.",
    tags: ["CloudWatch dashboards","Widgets"]
  },
  {
    id: "aws-soa-fc-33",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "How do you keep dashboards consistent across many accounts?",
    hint: "Treat the dashboard as code.",
    back: "Define an <strong>AWS::CloudWatch::Dashboard</strong> resource whose DashboardBody holds the widget JSON (with Fn::Sub for account- or Region-specific names), keep the template in Git, and deploy with <strong>CloudFormation StackSets</strong> to the target accounts and Regions. Console edits then show up as drift, and one change updates every copy.",
    tags: ["CloudWatch dashboards","CloudFormation"]
  },
  {
    id: "aws-soa-fc-34",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "SNS standard vs FIFO topics: which subscribers and features does each support?",
    hint: "Order and deduplication have a price in endpoints.",
    back: "<strong>Standard</strong> topics: best-effort ordering, at-least-once delivery, very high throughput, and every endpoint type (SQS, Lambda, HTTP/S, email, SMS, mobile push, Firehose). <strong>FIFO</strong> topics: strict ordering per message group and deduplication, but subscribers are limited to SQS queues (standard or FIFO), and they add message archiving and replay. S3 event notifications and many services can publish only to standard topics.",
    tags: ["SNS","FIFO topics"]
  },
  {
    id: "aws-soa-fc-35",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What must be true for an AWS service such as S3 or CloudWatch to publish to your SNS topic?",
    hint: "Two policies can be in the way.",
    back: "The <strong>topic access policy</strong> must allow the service principal (for example s3.amazonaws.com) to call sns:Publish, ideally with aws:SourceArn and aws:SourceAccount conditions. If the topic uses <strong>SSE-KMS</strong>, the key must be a <strong>customer managed key</strong> whose key policy lets that service use kms:GenerateDataKey* and kms:Decrypt; the AWS managed key for SNS cannot grant this.",
    tags: ["SNS","KMS","Topic policies"]
  },
  {
    id: "aws-soa-fc-36",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "SNS subscription filter policies: attribute-based vs payload-based filtering.",
    hint: "Where does SNS look for the value?",
    back: "A filter policy is set per subscription. With FilterPolicyScope <strong>MessageAttributes</strong> (the default), SNS matches the message attributes. With <strong>MessageBody</strong>, SNS matches properties inside a JSON payload. Operators include exact values, prefix, anything-but, numeric ranges, and exists. Messages that match no policy are simply not delivered to that subscriber.",
    tags: ["SNS","Filter policies"]
  },
  {
    id: "aws-soa-fc-37",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "How does SNS handle delivery failures, and where do undeliverable messages go?",
    hint: "Retries depend on the endpoint; a queue catches the rest.",
    back: "SNS applies a <strong>delivery retry policy</strong> per protocol: AWS-managed endpoints such as SQS and Lambda get many retries over hours, while HTTP/S retry behavior is configurable. After retries are exhausted, the message is dropped unless the subscription has a <strong>redrive policy</strong> pointing to an <strong>SQS dead-letter queue</strong> whose policy allows the topic to send. Delivery status logging to CloudWatch Logs records outcomes but does not keep messages.",
    tags: ["SNS","Dead-letter queues"]
  },
  {
    id: "aws-soa-fc-38",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which AWS services can send notifications to SNS natively without code?",
    hint: "Many operational services have a notification setting.",
    back: "Examples: <strong>CloudWatch alarms</strong>, <strong>EC2 Auto Scaling</strong> notifications, <strong>RDS event subscriptions</strong>, <strong>S3 event notifications</strong>, <strong>CloudFormation</strong> stack events (notification ARNs), <strong>AWS Budgets</strong>, <strong>CodePipeline/CodeCommit</strong> notification rules, <strong>AWS Backup</strong> vault notifications, and any source routed through an <strong>EventBridge</strong> rule with SNS as target.",
    tags: ["SNS","Notifications"]
  },
  {
    id: "aws-soa-fc-39",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "How do you get alarm notifications into Slack or Microsoft Teams with no code?",
    hint: "Formerly AWS Chatbot.",
    back: "Use <strong>Amazon Q Developer in chat applications</strong>: configure a Slack channel or Teams channel, subscribe it to the SNS topics your alarms publish to, and it renders formatted notifications. Its channel IAM role plus <strong>guardrail policies</strong> limit which AWS CLI commands users can run from the channel.",
    tags: ["Amazon Q Developer in chat applications","SNS"]
  },
  {
    id: "aws-soa-fc-40",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does an Auto Scaling notification configuration send, and to where?",
    hint: "Four event types, one destination type.",
    back: "It publishes to an <strong>SNS topic</strong> whenever the group performs <strong>EC2_INSTANCE_LAUNCH</strong>, <strong>EC2_INSTANCE_LAUNCH_ERROR</strong>, <strong>EC2_INSTANCE_TERMINATE</strong>, or <strong>EC2_INSTANCE_TERMINATE_ERROR</strong>, as you select. For richer routing (Lambda, Automation), use the equivalent Auto Scaling events in EventBridge instead.",
    tags: ["Auto Scaling","SNS"]
  },
  {
    id: "aws-soa-fc-41",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Direct alarm action vs EventBridge rule on alarm state change: when do you choose which?",
    hint: "Supported targets and fan-out.",
    back: "Use a <strong>direct alarm action</strong> for SNS, Lambda, EC2 actions, Auto Scaling policies, OpsItems, incidents, or investigations: it is simple and native. Use an <strong>EventBridge rule</strong> on the CloudWatch Alarm State Change event when you need other targets (Automation runbooks, Step Functions, API destinations, other buses or accounts), several targets, input transformation, or filtering on alarm attributes. Every alarm emits these events automatically.",
    tags: ["CloudWatch alarms","EventBridge"]
  },
  {
    id: "aws-soa-fc-42",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "What permissions does an EventBridge rule need to start a Systems Manager Automation runbook?",
    hint: "One to start, one to hand over.",
    back: "The <strong>IAM role for the EventBridge target</strong> needs <strong>ssm:StartAutomationExecution</strong> on the runbook ARN. If the runbook runs under a separate <strong>AutomationAssumeRole</strong>, the target role also needs <strong>iam:PassRole</strong> on that role, and the Automation role needs permissions for the API actions the runbook performs. A failure here shows as rising FailedInvocations on the rule.",
    tags: ["EventBridge","Systems Manager Automation","IAM"]
  },
  {
    id: "aws-soa-fc-43",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is Systems Manager OpsCenter, and how do alarms feed it?",
    hint: "A work item with context and runbooks.",
    back: "OpsCenter aggregates operational issues as <strong>OpsItems</strong>, each carrying related resources, CloudTrail events, Config changes, and alarm details. A CloudWatch alarm can create an OpsItem when it enters ALARM, and EventBridge rules can create them for other events. Operators run associated <strong>Automation runbooks</strong> directly from the OpsItem, and similar items are deduplicated.",
    tags: ["OpsCenter","Systems Manager"]
  },
  {
    id: "aws-soa-fc-44",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "CloudWatch anomaly detection: how does the model work and what can go wrong?",
    hint: "Training window, seasonality, and bad history.",
    back: "The model trains on up to <strong>two weeks</strong> of the metric's history and learns hourly, daily, and weekly patterns and trend, producing a band set by a number of standard deviations. Alarms fire when values leave the band (above, below, or either). Exclude known bad periods such as outages or load tests from training, and give new metrics time to build history before relying on the alarm.",
    tags: ["Anomaly detection","CloudWatch alarms"]
  },
  {
    id: "aws-soa-fc-45",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "CloudWatch Synthetics vs CloudWatch RUM: what does each measure?",
    hint: "Robots vs real browsers.",
    back: "<strong>Synthetics canaries</strong> are scheduled scripts (Node.js or Python, with Puppeteer, Playwright, or Selenium) that test endpoints, APIs, broken links, and multi-step journeys from outside, even with no traffic; they publish SuccessPercent and Duration. <strong>RUM</strong> collects page load, JavaScript error, and HTTP data from <strong>real user sessions</strong> in the browser. Use canaries to detect outages first, RUM to see real experience.",
    tags: ["CloudWatch Synthetics","CloudWatch RUM"]
  },
  {
    id: "aws-soa-fc-46",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "What does CloudWatch Contributor Insights do?",
    hint: "Top-N from log events.",
    back: "Contributor Insights evaluates rules against <strong>structured log events</strong> (JSON or CLF) and reports the <strong>top contributors</strong>, such as the IP addresses sending the most rejected traffic in VPC flow logs or the URLs with the most errors. Built-in rules exist for <strong>DynamoDB</strong> (most accessed and throttled keys). Rules can back alarms, and results appear in graphs and dashboards.",
    tags: ["Contributor Insights","Performance analysis"]
  },
  {
    id: "aws-soa-fc-47",
    difficulty: "hard",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is AWS DevOps Agent, and what is an Agent Space?",
    hint: "An autonomous investigator with a boundary.",
    back: "<strong>AWS DevOps Agent</strong> investigates operational incidents: it correlates alarms, logs, metrics, application topology, and recent deployments or changes, publishes a <strong>root cause summary</strong> with supporting observations, and can generate a <strong>mitigation plan</strong> and recommendations to prevent recurrence. An <strong>Agent Space</strong> is the boundary of what it can reach: which AWS accounts, which third-party tools (observability, ticketing, code repositories), and which users may work with it.",
    tags: ["AWS DevOps Agent","Incident response"]
  },
  {
    id: "aws-soa-fc-48",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "CloudTrail vs AWS Config when troubleshooting a change: which answers what?",
    hint: "Who did it vs what it looks like now.",
    back: "<strong>CloudTrail</strong> answers <strong>who</strong> called which API, <strong>when</strong>, from where, and with what parameters. <strong>AWS Config</strong> answers <strong>what</strong> the resource's configuration was before and after, how resources relate, and whether they comply with rules. The Config timeline links each change to its CloudTrail event, so use them together.",
    tags: ["CloudTrail","AWS Config"]
  },
  {
    id: "aws-soa-fc-49",
    difficulty: "medium",
    certId: "aws-soa",
    domainId: "d1",
    front: "Which Lambda permission lets a CloudWatch alarm invoke a function directly?",
    hint: "Resource-based, with a special service principal.",
    back: "Add a statement to the function's <strong>resource-based policy</strong> allowing <strong>lambda.alarms.cloudwatch.amazonaws.com</strong> to call lambda:InvokeFunction, with a SourceArn condition set to the alarm ARN (and SourceAccount). The function's execution role is irrelevant to invocation; it controls what the function can do once it runs.",
    tags: ["CloudWatch alarms","Lambda"]
  },
  {
    id: "aws-soa-fc-50",
    difficulty: "easy",
    certId: "aws-soa",
    domainId: "d1",
    front: "What is the difference between Systems Manager Automation and Run Command?",
    hint: "Workflow vs one command on many nodes.",
    back: "<strong>Run Command</strong> executes a Command document (a script or command) on managed nodes through the <strong>SSM Agent</strong>. <strong>Automation</strong> runs a multi-step <strong>runbook</strong> that can call AWS APIs, branch, wait for approval, and include aws:runCommand steps; many runbooks (for example AWS-RestartEC2Instance) need no agent at all because they only call APIs.",
    tags: ["Systems Manager","Automation"]
  }
];

export default AWS_SOA_FLASHCARDS_2;
