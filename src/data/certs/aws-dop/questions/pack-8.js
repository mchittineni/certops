export const AWS_DOP_QUESTIONS_8 = [
  {
    id: "aws-dop-176",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automating Multi-Region Failover with Route 53 Application Recovery Controller",
    scenario: "A financial payment system is deployed in an active-active configuration across us-east-1 and us-west-2. During an availability zone or regional outage, the operations team needs to divert 100% of traffic away from the degraded region within seconds using an automated, highly reliable mechanism that does not rely on DNS TTL expiration or regional control plane availability.",
    question: "Which AWS capability is designed specifically for highly available, multi-region traffic failover control?",
    options: [
      { id: 'A', text: "Amazon Route 53 Application Recovery Controller (ARC) Routing Controls backed by Readiness Checks and regional health endpoints" },
      { id: 'B', text: "Route 53 standard DNS records updated via a Python script calling the ChangeResourceRecordSets API during an incident" },
      { id: 'C', text: "An AWS CloudFormation StackSets update that decreases desired capacity in the failing region to 0" },
      { id: 'D', text: "An AWS Lambda function in the degraded region modifying security group rules to deny traffic" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon Route 53 Application Recovery Controller (ARC) provides routing controls and readiness checks for multi-region disaster recovery. Routing controls are simple, highly available on/off switches deployed across five redundant regional endpoints, allowing traffic to be shifted away from an impaired region in seconds without depending on the control planes of the regions experiencing an outage.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["Route53", "ARC", "DisasterRecovery"]
  },
  {
    id: "aws-dop-177",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Incident Escalation and Pager Automation with AWS Systems Manager Incident Manager",
    scenario: "An enterprise on-call team currently uses manual phone trees and disjointed email chains when production incidents occur. The CTO mandates implementing an automated incident response workflow: when a critical CloudWatch alarm triggers, the primary engineer must be paged via SMS/call; if unacknowledged after 5 minutes, it escalates to the secondary lead, a dedicated Slack triage channel is created, and an incident timeline is automatically populated.",
    question: "Which native AWS service provides this end-to-end incident management and escalation capability?",
    options: [
      { id: 'A', text: "AWS Trusted Advisor automated notifications sent via Amazon SES" },
      { id: 'B', text: "AWS Systems Manager Incident Manager with configured Response Plans, Engagement Plans, Escalation Plans, and AWS Chatbot integration" },
      { id: 'C', text: "Amazon EventBridge rules triggering an AWS Step Functions state machine that sends text messages via Amazon Pinpoint" },
      { id: 'D', text: "Amazon SNS topics subscribed to a distribution email list" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Incident Manager helps DevOps and SRE teams prepare for and resolve incidents faster. Response plans define engagement and escalation plans (paging primary on-call, then escalating to secondary after a timeout), integrate with AWS Chatbot for Slack/Teams triage rooms, and automatically track timelines, metrics, and post-incident analysis action items.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["IncidentManager", "SystemsManager", "SRE"]
  },
  {
    id: "aws-dop-178",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Chaos Engineering with AWS Fault Injection Simulator (FIS)",
    scenario: "A DevOps team is validating the resilience of an Amazon EKS microservices application prior to a major promotional event. The team wants to execute controlled chaos experiments that simulate sudden EC2 worker node termination and artificial network latency, automatically halting the experiment if customer-facing HTTP 5xx error rates exceed 0.5%.",
    question: "Which AWS service enables controlled fault injection with automated stop conditions?",
    options: [
      { id: 'A', text: "AWS Systems Manager Run Command executing stress-ng across all nodes simultaneously" },
      { id: 'B', text: "An AWS Lambda function that deletes Auto Scaling instances using the AWS CLI" },
      { id: 'C', text: "AWS Fault Injection Simulator (FIS) configured with experiment templates, target filters, and CloudWatch alarms defined as Stop Conditions" },
      { id: 'D', text: "A bash script running in an EC2 cron job that executes 'kill -9' on random processes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Fault Injection Simulator (FIS) is a fully managed service for running fault injection experiments on AWS. It allows defining experiment templates that inject specific faults (such as terminating EC2 nodes, introducing network latency, or throttling I/O) on targeted resources. Crucially, FIS includes 'Stop Conditions' tied to CloudWatch alarms; if an alarm breaches (e.g., HTTP 5xx rate > 0.5%), FIS immediately aborts the experiment and rolls back state.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["FIS", "ChaosEngineering", "Resilience"]
  },
  {
    id: "aws-dop-179",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation of Compromised IAM Credentials via EventBridge and SSM",
    scenario: "Amazon GuardDuty generates a high-severity finding 'UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration' indicating that temporary IAM credentials for an EC2 instance were accessed from an external, unauthorized IP address. Security policy requires that the compromised credentials must be revoked immediately, an explicit Deny policy attached, and the incident response team paged within 30 seconds.",
    question: "Which event-driven architecture delivers this immediate automated response?",
    options: [
      { id: 'A', text: "Instruct the security engineer to manually log into the IAM console and click 'Revoke active sessions' upon receiving an email" },
      { id: 'B', text: "Create an Amazon EventBridge rule matching the specific GuardDuty finding type, targeting an AWS Systems Manager Automation document (or AWS Lambda function) that revokes active IAM sessions and attaches an inline Deny policy, while publishing an alert to an Amazon SNS topic" },
      { id: 'C', text: "Write a script on an administrative workstation that polls GuardDuty findings every 15 minutes" },
      { id: 'D', text: "Configure a daily AWS Config rule that scans IAM credential reports and flags exposed keys" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon GuardDuty automatically sends findings to Amazon EventBridge in real time. An EventBridge rule matching high-severity findings (e.g., credential exfiltration) immediately invokes an AWS Systems Manager Automation runbook (or AWS Lambda function) to execute remediation: revoking active STS sessions by attaching a policy with 'aws:CurrentTime' conditions and notifying on-call personnel via SNS, achieving sub-minute automated response.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["GuardDuty", "EventBridge", "IncidentResponse"]
  },
  {
    id: "aws-dop-180",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Cross-Account Event Routing with Amazon EventBridge Event Buses",
    scenario: "An organization with 100 AWS member accounts needs to centralize operational events (EC2 state changes, Auto Scaling scale events, deployment completions) into a dedicated Security and Operations account's default event bus for automated processing and archiving.",
    question: "How should the EventBridge cross-account architecture be configured?",
    options: [
      { id: 'A', text: "Grant the member accounts permission to put events onto the central account's event bus using an EventBridge resource policy in the central account, and create EventBridge rules in member accounts targeting the central bus ARN" },
      { id: 'B', text: "Configure AWS CloudTrail in each member account to publish to an Amazon SNS topic in the central account" },
      { id: 'C', text: "Write an AWS Lambda function in each member account that writes events to an Amazon S3 bucket in the central account" },
      { id: 'D', text: "Deploy an Amazon SQS queue in each member account and configure cross-account VPC peering to the central account" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon EventBridge supports native cross-account event routing. In the central account, the event bus resource policy must grant 'events:PutEvents' permissions to the member account IDs or the entire AWS Organization ARN. In each member account, an EventBridge rule matches local events and sets the target to the central event bus ARN, enabling real-time, serverless event consolidation.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EventBridge", "CrossAccount", "Automation"]
  },
  {
    id: "aws-dop-181",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Isolation of Infected EC2 Instances",
    scenario: "When Amazon GuardDuty detects an active malware command-and-control connection from an Amazon EC2 instance (finding 'Backdoor:EC2/C&CActivity.B!DNS'), the instance must be immediately isolated from the network without deleting its EBS volumes or terminating the instance, allowing the forensic team to conduct memory and disk analysis.",
    question: "Which automated remediation workflow securely isolates the instance?",
    options: [
      { id: 'A', text: "An EventBridge rule triggers an SSM Automation runbook that replaces the instance's security groups with an isolation security group having no ingress or egress rules, takes EBS snapshots of all attached volumes, and tags the instance as 'Quarantined'" },
      { id: 'B', text: "An EventBridge rule triggers an AWS Lambda function that immediately calls ec2:TerminateInstances" },
      { id: 'C', text: "An AWS Config rule that restarts the instance in single-user mode" },
      { id: 'D', text: "A Systems Manager Run Command that executes 'rm -rf /' inside the running guest OS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Proper forensic incident response dictates preserving evidence while cutting off malicious communication. Replacing the instance security groups with a quarantine security group (with zero inbound and zero outbound rules) immediately isolates the instance from the network. Taking EBS volume snapshots preserves the disk state for analysis without destroying volatile memory or terminating the instance.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["Security", "IncidentResponse", "GuardDuty"]
  },
  {
    id: "aws-dop-182",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated SQS Dead-Letter Queue (DLQ) Redrive and Reprocessing",
    scenario: "An order processing microservice consumes messages from an Amazon SQS queue. A temporary downstream database outage causes 5,000 order messages to exhaust their maxReceiveCount and land in an SQS dead-letter queue (DLQ). Once the database recovers, the operations team needs to reprocess these messages through the primary queue without writing a custom message migration script.",
    question: "Which native Amazon SQS feature allows redriving DLQ messages back to the source queue?",
    options: [
      { id: 'A', text: "Configure an AWS Lambda function with concurrency set to 1,000 to read from the DLQ and send HTTP POST requests" },
      { id: 'B', text: "Write a Python script on an EC2 instance that reads messages from the DLQ and puts them into an S3 bucket" },
      { id: 'C', text: "Delete the DLQ and let the primary queue regenerate the lost messages" },
      { id: 'D', text: "Use SQS Dead-Letter Queue Redrive (StartMessageMoveTask API or console 'Start DLQ redrive') to move messages back to the source queue" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Amazon SQS provides the native 'Dead-Letter Queue Redrive' feature (via the AWS Management Console or the StartMessageMoveTask API). It allows administrators to move messages from a dead-letter queue back to the original source queue (or a custom queue) with a single click or API call, complete with monitoring and cancellation controls, eliminating custom scripts.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SQS", "DLQ", "Operations"]
  },
  {
    id: "aws-dop-183",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Event-Driven Auto-Remediation of Unauthorized Security Group Rule Changes",
    scenario: "A company security policy strictly prohibits opening port 22 (SSH) or port 3389 (RDP) to the internet (0.0.0.0/0) in any VPC security group. The security team needs an automated mechanism that detects unauthorized ingress rules within seconds and revokes them immediately.",
    question: "Which event-driven architecture provides the fastest remediation?",
    options: [
      { id: 'A', text: "An Amazon EventBridge rule matching AWS CloudTrail API calls for AuthorizeSecurityGroupIngress, triggering an AWS Lambda function that evaluates the CIDR block and calls RevokeSecurityGroupIngress if 0.0.0.0/0 is present" },
      { id: 'B', text: "An AWS Config periodic rule scheduled to run once every 24 hours" },
      { id: 'C', text: "An Amazon Inspector assessment running weekly against EC2 instances" },
      { id: 'D', text: "An AWS Systems Manager State Manager association running a bash script every 6 hours" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon EventBridge rules matching CloudTrail API events ('AuthorizeSecurityGroupIngress') fire within seconds of an administrative API call. The downstream Lambda function inspects the request parameters in the event payload; if an open CIDR (0.0.0.0/0) is detected, it calls 'RevokeSecurityGroupIngress' immediately, neutralizing the exposure before attackers can scan the port.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EventBridge", "SecurityGroups", "AutoRemediation"]
  },
  {
    id: "aws-dop-184",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Health Event Integration with EventBridge for Automated EC2 Maintenance Response",
    scenario: "AWS sends an AWS Health notification indicating that an underlying hardware degradation event requires an Amazon EC2 instance hosting a production database to undergo scheduled retirement. The DevOps team wants to automatically stop and start the instance during an off-peak maintenance window to migrate it to healthy host hardware without manual intervention.",
    question: "Which architecture pattern automates this instance migration?",
    options: [
      { id: 'A', text: "Wait for the scheduled retirement date and let AWS terminate the instance automatically" },
      { id: 'B', text: "Create a CloudWatch billing alarm that alerts the billing department when retirement occurs" },
      { id: 'C', text: "Configure an Auto Scaling lifecycle hook with a 48-hour timeout" },
      { id: 'D', text: "Create an Amazon EventBridge rule matching AWS Health events for 'AWS_EC2_INSTANCE_RETIREMENT_SCHEDULED', targeting an AWS Step Functions state machine or SSM Automation runbook that waits until the scheduled maintenance window and executes ec2:StopInstances followed by ec2:StartInstances" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Health publishes scheduled retirement and degradation events to Amazon EventBridge in real time. By matching event code 'AWS_EC2_INSTANCE_RETIREMENT_SCHEDULED', an EventBridge rule can trigger an automation workflow (SSM Automation runbook or Step Functions) that orchestrates stopping and starting the instance during off-peak hours, cleanly moving the instance to healthy physical hardware.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSHealth", "EventBridge", "EC2"]
  },
  {
    id: "aws-dop-185",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Handling EventBridge Target Delivery Failures with Dead-Letter Queues (DLQ)",
    scenario: "A mission-critical payment notification pipeline uses an Amazon EventBridge rule to invoke an AWS Lambda function. If the Lambda function experiences persistent throttling or service unavailability, events must not be dropped or lost; they must be retained for at least 14 days and trigger operational alerts.",
    question: "How should the EventBridge rule target be configured to ensure zero event loss?",
    options: [
      { id: 'A', text: "Deploy a secondary EventBridge rule with an identical pattern pointing to an Amazon SNS topic" },
      { id: 'B', text: "Enable CloudTrail data events on the EventBridge rule" },
      { id: 'C', text: "Configure a Dead-Letter Queue (Amazon SQS) on the EventBridge rule target and set an appropriate retry policy with maximum event age and retry attempts" },
      { id: 'D', text: "Increase the Lambda function timeout from 1 minute to 15 minutes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon EventBridge allows configuring a Dead-Letter Queue (DLQ) using an Amazon SQS queue for individual rule targets. If EventBridge cannot deliver an event to the target after exhausting configured retries (or if the maximum event age expires), EventBridge delivers the failed event with diagnostic metadata into the SQS DLQ, preserving the event for replay.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EventBridge", "DLQ", "Reliability"]
  },
  {
    id: "aws-dop-186",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automating Multi-AZ Database Failover Verification with AWS FIS",
    scenario: "An enterprise requires annual proof that an Amazon Aurora MySQL multi-AZ cluster can automatically fail over to a replica within 60 seconds with zero data loss. The test must be automated, repeatable in staging, and measure the exact database failover duration.",
    question: "Which FIS action and architecture executes this test?",
    options: [
      { id: 'A', text: "Delete the primary DB instance using the AWS CLI and wait for Auto Scaling to launch a replacement" },
      { id: 'B', text: "Manually reboot the primary database instance via the console using the 'Reboot with failover' option while timing with a stopwatch" },
      { id: 'C', text: "Use AWS Fault Injection Simulator (FIS) with the 'aws:rds:failover-db-cluster' action targeting the Aurora cluster, monitoring CloudWatch metrics for downtime and connection recovery" },
      { id: 'D', text: "Block port 3306 on the database security group for 10 minutes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AWS Fault Injection Simulator (FIS) provides the native action 'aws:rds:failover-db-cluster' designed specifically to test Aurora and RDS multi-AZ failover. It triggers a controlled failover of the primary DB cluster to a reader replica, allowing automated test suites to measure connection drop duration, replica promotion time, and application recovery under realistic conditions.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["FIS", "Aurora", "Resilience"]
  },
  {
    id: "aws-dop-187",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Transforming Event Payloads with EventBridge Input Transformers",
    scenario: "An Amazon EventBridge rule catches EC2 state change events (e.g., instance entering STOPPED state). The security team receives alerts via Amazon SNS, but the raw JSON event payload is unreadable and cluttered with internal IDs. The team needs a human-readable email stating: 'Alert: Instance &lt;instance-id&gt; in Region &lt;region&gt; changed state to &lt;state&gt; at &lt;time&gt;'.",
    question: "Which EventBridge feature formats the notification payload before sending to SNS?",
    options: [
      { id: 'A', text: "Use an EventBridge Input Transformer with Input Path to extract event variables and Input Template to format the human-readable message string" },
      { id: 'B', text: "Modify the EC2 instance operating system syslog format" },
      { id: 'C', text: "Write an intermediate AWS Lambda function between EventBridge and Amazon SNS solely to format strings" },
      { id: 'D', text: "Configure Amazon SES email templates with custom Handlebars logic" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Amazon EventBridge Input Transformers allow extracting variables from the incoming event JSON using JSONPath in the 'Input Path' (e.g., 'instance: $.detail.instance-id') and substituting those variables into a customized string or JSON structure using the 'Input Template'. This eliminates the need for intermediate Lambda functions purely for string formatting.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EventBridge", "InputTransformer", "SNS"]
  },
  {
    id: "aws-dop-188",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Auto Scaling Group Standby State for Safe Instance Troubleshooting",
    scenario: "An EC2 instance in an Auto Scaling group behind an Application Load Balancer begins throwing intermittent 500 errors. An SRE needs to keep the instance running to inspect active process state, run gdb/strace, and collect logs, without having the load balancer send live user requests to it and without Auto Scaling terminating it as unhealthy.",
    question: "Which Auto Scaling action places the instance into an isolated maintenance state?",
    options: [
      { id: 'A', text: "Put the instance into the 'Standby' state using the EnterStandby API, inspect the instance, and return it using ExitStandby when complete" },
      { id: 'B', text: "Stop the instance using the EC2 console; Auto Scaling will pause until the instance is started" },
      { id: 'C', text: "Reboot the instance repeatedly to clear OS buffer caches" },
      { id: 'D', text: "Delete the target group from the Application Load Balancer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Putting an EC2 instance in the 'Standby' state (via 'autoscaling:EnterStandby') temporarily removes the instance from service. Auto Scaling deregisters the instance from the load balancer and stops monitoring its health checks (so it won't be terminated), while keeping the instance running for forensic or diagnostic troubleshooting. When finished, 'ExitStandby' re-registers the instance with the load balancer.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AutoScaling", "Troubleshooting", "Operations"]
  },
  {
    id: "aws-dop-189",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Automation Runbook Approval Steps",
    scenario: "A DevOps team creates an automated SSM Automation runbook to execute an emergency database schema rollback across production instances. Corporate governance requires that before the destructive schema migration step executes, an on-call manager must explicitly review and approve the action via email or console.",
    question: "Which action type should be included in the SSM Automation document?",
    options: [
      { id: 'A', text: "Configure an Amazon SNS topic subscribed to the manager's phone number" },
      { id: 'B', text: "Add a sleep step for 30 minutes in the bash script to give managers time to inspect the database" },
      { id: 'C', text: "Use AWS CloudTrail Insights to detect the execution and pause the runbook" },
      { id: 'D', text: "Add an 'aws:approve' step in the Automation document specifying the Approvers (IAM users or roles) and MinRequiredApprovals" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "AWS Systems Manager Automation documents support the 'aws:approve' action. When the automation reaches this step, execution pauses and sends approval requests to designated IAM users or roles. The runbook resumes only after the specified number of approvers ('MinRequiredApprovals') approve the step within the timeout window.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["SystemsManager", "Automation", "Governance"]
  },
  {
    id: "aws-dop-190",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "EventBridge Rule Content-Based Filtering for Granular Event Matching",
    scenario: "An operations team wants an EventBridge rule that triggers only when an Amazon S3 object created in bucket 'production-media' has a file extension of '.mp4' or '.mov' and an object size exceeding 1 GB (1,073,741,824 bytes).",
    question: "Which EventBridge event pattern syntax expresses these criteria?",
    options: [
      { id: 'A', text: "Use an Amazon SQS message filter policy matching S3 metadata headers" },
      { id: 'B', text: "Use content-based filtering with 'suffix' matching on object key and numeric range matching 'numeric': ['>', 1073741824] on object size in the event pattern" },
      { id: 'C', text: "Configure an S3 lifecycle policy that invokes an AWS Lambda function for files over 1 GB" },
      { id: 'D', text: "Write a regex string directly in the EventBridge event bus properties" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon EventBridge supports advanced content-based filtering in event patterns, including prefix/suffix matching (e.g., 'key': [{'suffix': '.mp4'}, {'suffix': '.mov'}]) and numeric range comparisons (e.g., 'size': [{'numeric': ['>', 1073741824]}]). This enables precise event filtering without writing custom code.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EventBridge", "EventPattern", "Filtering"]
  },
  {
    id: "aws-dop-191",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation of Non-Compliant S3 Public Access with AWS Config",
    scenario: "A security audit finds that developers occasionally disable Amazon S3 Block Public Access on individual buckets. The company needs an automated control that immediately detects whenever S3 Block Public Access is disabled on any bucket in the account and enables all four Block Public Access settings automatically.",
    question: "Which combination of AWS Config and Systems Manager achieves this continuous remediation?",
    options: [
      { id: 'A', text: "Write a Python script running in an EC2 cron job every 24 hours" },
      { id: 'B', text: "Deploy the AWS Config managed rule 's3-bucket-level-public-access-prohibited' with an automatic remediation pointing to the SSM Automation document 'AWS-DisableS3BucketPublicReadWrite' (or 'AWS-ConfigureS3BucketPublicAccessBlock')" },
      { id: 'C', text: "Deploy an Amazon CloudWatch billing alarm for S3 transfer costs" },
      { id: 'D', text: "Create an IAM policy denying the s3:ListBucket action to all developers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Config provides automated remediation by binding managed rules to Systems Manager Automation documents. The rule 's3-bucket-level-public-access-prohibited' evaluates S3 buckets; when flagged non-compliant, AWS Config automatically triggers the SSM Automation document 'AWS-ConfigureS3BucketPublicAccessBlock' to re-enable Block Public Access on the bucket immediately.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSConfig", "SystemsManager", "S3"]
  },
  {
    id: "aws-dop-192",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for Collaborative Incident Triage in Slack",
    scenario: "An enterprise DevOps team uses Slack for team communication. During incidents, on-call engineers want to receive CloudWatch and Incident Manager alerts directly in a dedicated Slack channel, run diagnostic AWS CLI commands (e.g., describe-instances, get-metric-data) from within Slack, and execute approved SSM Automation runbooks.",
    question: "Which AWS service enables interactive ChatOps with granular IAM access controls?",
    options: [
      { id: 'A', text: "Amazon SES email forwarding to a Slack email integration address" },
      { id: 'B', text: "AWS Chatbot configured with Slack workspace integration and an IAM role defining permissions for channel members" },
      { id: 'C', text: "An open-source webhook running on a public EC2 instance listening for Slack slash commands" },
      { id: 'D', text: "Amazon Pinpoint two-way SMS integration" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Chatbot is a purpose-built ChatOps service that integrates AWS services with Slack and Microsoft Teams. It delivers CloudWatch and Systems Manager alerts to channels and allows engineers to run diagnostic CLI commands and trigger Systems Manager Automation runbooks directly from chat, governed by fine-grained IAM roles and channel guardrails.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AWSChatbot", "ChatOps", "IncidentResponse"]
  },
  {
    id: "aws-dop-193",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Rollback of Multi-AZ RDS Maintenance Updates on Error",
    scenario: "An operations team initiates an OS maintenance update on an Amazon RDS for PostgreSQL Multi-AZ database instance. The application begins experiencing elevated latency and connection timeouts during the maintenance. The team needs to immediately abort the maintenance and roll back to the previous version.",
    question: "How does Amazon RDS Multi-AZ architecture handle maintenance patching and rollback?",
    options: [
      { id: 'A', text: "CloudFormation automatically rolls back RDS database updates without snapshot restoration" },
      { id: 'B', text: "Disable Multi-AZ before running any maintenance updates" },
      { id: 'C', text: "RDS Multi-AZ updates the standby instance first, performs an automatic failover to the updated standby, and then updates the original primary; to roll back if issues arise, initiate a reboot with failover back to the previous primary if not yet upgraded or restore from the pre-maintenance snapshot" },
      { id: 'D', text: "RDS instances cannot be rolled back; the database must be completely re-imported from CSV files" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Amazon RDS performs maintenance updates on Multi-AZ instances in a rolling fashion: the standby instance is updated first, a failover promotes the standby, and then the former primary is updated. For major changes or schema upgrades, teams take a manual snapshot before initiating maintenance so that they can restore to a known-good point in time if post-upgrade validation fails.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["RDS", "MultiAZ", "Maintenance"]
  },
  {
    id: "aws-dop-194",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Simulating Network Latency and Packet Drops with AWS FIS on ECS",
    scenario: "A microservices application running on Amazon ECS on AWS Fargate communicates with external third-party payment providers. To test application resilience against network degradation, the team wants to inject artificial latency (200ms) and 10% packet drop on outbound HTTP requests for 15 minutes in a staging cluster.",
    question: "Which AWS Fault Injection Simulator (FIS) action targets network degradation on container workloads?",
    options: [
      { id: 'A', text: "Change the MTU size on the VPC Internet Gateway to 500 bytes" },
      { id: 'B', text: "Use the FIS action 'aws:network:disrupt-connectivity' (or container-level network latency injection actions)" },
      { id: 'C', text: "Deploy an AWS WAF rule that drops 10% of incoming requests" },
      { id: 'D', text: "Modify the VPC route table to route traffic through an unconfigured NAT instance" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Fault Injection Simulator (FIS) provides network disruption actions such as 'aws:network:disrupt-connectivity' and container/node-level network latency actions. These actions simulate real-world degraded network conditions (latency, jitter, packet loss) in a controlled manner without modifying application code.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["FIS", "Networking", "ChaosEngineering"]
  },
  {
    id: "aws-dop-195",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automating Root Cause Analysis with CloudWatch Logs Insights and EventBridge",
    scenario: "Whenever an Auto Scaling group terminates an EC2 instance due to an ELB health check failure, the DevOps team wants to automatically capture the last 1,000 lines of application logs from that instance, upload them to an S3 forensic bucket, and notify the team before the instance storage is lost.",
    question: "Which architecture pattern captures logs prior to instance termination?",
    options: [
      { id: 'A', text: "Run a cron job that uploads logs to S3 every 24 hours" },
      { id: 'B', text: "Configure an Auto Scaling Lifecycle Hook for EC2_INSTANCE_TERMINATING; an EventBridge rule catches the lifecycle action event and triggers an SSM Automation runbook that runs a script to collect logs, upload to S3, and complete the lifecycle action" },
      { id: 'C', text: "Use the EC2 StopInstances API to pause the instance indefinitely" },
      { id: 'D', text: "Rely on CloudWatch Logs default retention without configuring lifecycle hooks" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Auto Scaling Lifecycle Hooks pause instance termination (putting the instance in 'Terminating:Wait' state). When the instance enters this state, an EventBridge rule triggers an SSM Automation document or Lambda function. The automation collects logs from the instance via SSM Run Command, uploads them to an S3 forensic bucket, and calls 'CompleteLifecycleAction', allowing clean termination without log loss.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["AutoScaling", "LifecycleHooks", "IncidentResponse"]
  },
  {
    id: "aws-dop-196",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Post-Incident Analysis and Action Item Tracking in Systems Manager Incident Manager",
    scenario: "Following a major production outage, enterprise compliance requires the SRE team to complete a comprehensive Post-Incident Analysis (post-mortem), establish a detailed incident timeline, document root causes, and track remediation action items to completion.",
    question: "Which feature of AWS Systems Manager Incident Manager supports this workflow?",
    options: [
      { id: 'A', text: "AWS Cost Explorer anomaly detection reports" },
      { id: 'B', text: "Incident Manager Post-Incident Analysis (PIR) with automated timeline generation, root cause documentation, and AWS Systems Manager OpsCenter action item integration" },
      { id: 'C', text: "AWS Trusted Advisor Cost Optimization recommendations" },
      { id: 'D', text: "Amazon CloudWatch ServiceLens dependency maps" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "AWS Systems Manager Incident Manager provides built-in Post-Incident Analysis capabilities. It automatically constructs an incident timeline from CloudWatch metrics, alarms, and responder chat logs, guides teams through a structured 5-Whys root cause analysis, and converts preventative improvements directly into trackable OpsItems in Systems Manager OpsCenter.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["IncidentManager", "PostMortem", "SRE"]
  },
  {
    id: "aws-dop-197",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated DNS Failover with Amazon Route 53 Health Checks and CloudWatch Alarms",
    scenario: "A company hosts a public web application across two AWS Regions (active-passive). Route 53 routes traffic to the primary region. If the primary region's backend application health endpoint fails, Route 53 must automatically divert traffic to the secondary passive region within 60 seconds.",
    question: "Which Route 53 configuration provides this automated failover?",
    options: [
      { id: 'A', text: "Configure a Route 53 Failover Routing Policy with a Primary record pointing to the primary region's ALB associated with a Route 53 Health Check, and a Secondary record pointing to the disaster recovery region's ALB" },
      { id: 'B', text: "Configure a Route 53 Simple Routing Policy with two IP addresses" },
      { id: 'C', text: "Write a Python script that modifies DNS records when an on-call engineer receives an email" },
      { id: 'D', text: "Deploy an AWS Global Accelerator with endpoint weights set to 50/50" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Route 53 Failover Routing Policies implement active-passive disaster recovery. The primary record is associated with a Route 53 Health Check (probing an HTTP health endpoint). When the health check detects that the primary endpoint is unhealthy, Route 53 automatically stops resolving the primary record and returns the IP/endpoint of the secondary record.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["Route53", "HealthChecks", "DisasterRecovery"]
  },
  {
    id: "aws-dop-198",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "EventBridge Schema Registry and Automated Code Bindings",
    scenario: "A microservices platform publishes thousands of custom event types to Amazon EventBridge. Developers struggle with inconsistent event schemas and runtime type errors. The engineering lead wants to automatically discover event schemas as events flow through the bus and generate strongly typed Python and Java model classes for developers.",
    question: "Which EventBridge feature automates schema discovery and code generation?",
    options: [
      { id: 'A', text: "Manually write JSON Schema documents and upload them to an Amazon S3 bucket" },
      { id: 'B', text: "Use AWS Glue Data Catalog to crawl Amazon SQS queues" },
      { id: 'C', text: "Deploy an Amazon DynamoDB table to store event definitions" },
      { id: 'D', text: "Enable EventBridge Schema Discovery on the event bus, and download code bindings directly from the EventBridge Schema Registry" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Amazon EventBridge Schema Registry stores event schemas and allows developers to download code bindings for languages like Python, Java, and TypeScript. Enabling 'Schema Discovery' on an event bus automatically analyzes events in real time, generates schemas, and registers them, enabling autocomplete and type safety in developer IDEs.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EventBridge", "SchemaRegistry", "Development"]
  },
  {
    id: "aws-dop-199",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automating EC2 Auto Recovery for System Status Check Failures",
    scenario: "A critical legacy application runs on a standalone Amazon EC2 instance that cannot be clustered. If the underlying host hardware experiences a failure (System Status Check failure 'StatusCheckFailed_System'), the instance must automatically recover to new host hardware while retaining its private IP address, Elastic IP, and EBS volume attachments.",
    question: "Which CloudWatch Alarm action configures this automated recovery?",
    options: [
      { id: 'A', text: "Configure an Auto Scaling group with Minimum=1, Maximum=1, and Desired=1" },
      { id: 'B', text: "Create a CloudWatch alarm on the 'StatusCheckFailed_System' metric and attach the EC2 action 'Recover this instance'" },
      { id: 'C', text: "Deploy an AWS Lambda function that calls ec2:TerminateInstances and ec2:RunInstances" },
      { id: 'D', text: "Create a CloudWatch alarm on CPUUtilization and attach the EC2 action 'Reboot this instance'" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Amazon CloudWatch supports native EC2 actions on alarms. When creating an alarm on the 'StatusCheckFailed_System' metric (which indicates underlying hardware, power, or network issues on the physical host), administrators can attach the 'Recover this instance' action. When the alarm triggers, AWS automatically migrates the instance to a new physical host, preserving instance ID, private and public IPs, and EBS attachments.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["EC2", "AutoRecovery", "CloudWatch"]
  },
  {
    id: "aws-dop-200",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Event-Driven Throttling Remediation for Kinesis Data Streams",
    scenario: "An Amazon Kinesis Data Stream experiences 'ReadProvisionedThroughputExceeded' errors during promotional events because multiple consumer applications read from the same shards concurrently, exceeding the 2 MB/sec per shard limit.",
    question: "How should the data stream architecture be updated to eliminate read throughput contention?",
    options: [
      { id: 'A', text: "Enable Enhanced Fan-Out (EFO) on the consumers to provide dedicated 2 MB/sec throughput per consumer per shard using HTTP/2" },
      { id: 'B', text: "Increase the Kinesis shard retention period from 24 hours to 7 days" },
      { id: 'C', text: "Replace Kinesis Data Streams with Amazon DynamoDB Streams" },
      { id: 'D', text: "Add an Amazon SQS queue in front of every consumer" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Standard Kinesis Data Streams consumers share a total read limit of 2 MB/sec per shard across all consumers. Enhanced Fan-Out (EFO) provides each registered consumer with its own dedicated 2 MB/sec read throughput per shard using HTTP/2 streaming, completely eliminating read throughput contention and reducing end-to-end latency.",
    referenceUrl: "https://docs.aws.amazon.com/devops/",
    tags: ["Kinesis", "EnhancedFanOut", "Streaming"]
  }
];

export default AWS_DOP_QUESTIONS_8;
