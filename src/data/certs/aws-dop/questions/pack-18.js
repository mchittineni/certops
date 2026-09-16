export const AWS_DOP_QUESTIONS_18 = [
  {
    id: "aws-dop-426",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "An AWS Config rule with automatic remediation configured on the rule itself." },
      { id: 'B', text: "An EventBridge rule on the Config or GuardDuty finding, targeting a Systems Manager runbook." },
      { id: 'C', text: "An S3 bucket policy that denies public access regardless of the bucket's own setting." },
      { id: 'D', text: "An account-level S3 Block Public Access setting applied across the organization." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation","Automated Remediation","Dr Failover"]
  },
  {
    id: "aws-dop-427",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "An account-level S3 Block Public Access setting applied across the organization." },
      { id: 'B', text: "An AWS Config rule with automatic remediation configured on the rule itself." },
      { id: 'C', text: "An S3 bucket policy that denies public access regardless of the bucket's own setting." },
      { id: 'D', text: "An EventBridge rule on the Config or GuardDuty finding, targeting a Systems Manager runbook." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation","Automated Remediation","High Load Scale"]
  },
  {
    id: "aws-dop-428",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "An AWS Config rule with automatic remediation configured on the rule itself." },
      { id: 'B', text: "An EventBridge rule on the Config or GuardDuty finding, targeting a Systems Manager runbook." },
      { id: 'C', text: "An S3 bucket policy that denies public access regardless of the bucket's own setting." },
      { id: 'D', text: "An account-level S3 Block Public Access setting applied across the organization." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation","Automated Remediation","Security Compliance"]
  },
  {
    id: "aws-dop-429",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "An EventBridge rule on the Config or GuardDuty finding, targeting a Systems Manager runbook." },
      { id: 'B', text: "An AWS Config rule with automatic remediation configured on the rule itself." },
      { id: 'C', text: "An account-level S3 Block Public Access setting applied across the organization." },
      { id: 'D', text: "An S3 bucket policy that denies public access regardless of the bucket's own setting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation","Automated Remediation","Hybrid Migration"]
  },
  {
    id: "aws-dop-430",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "An account-level S3 Block Public Access setting applied across the organization." },
      { id: 'B', text: "An EventBridge rule on the Config or GuardDuty finding, targeting a Systems Manager runbook." },
      { id: 'C', text: "An AWS Config rule with automatic remediation configured on the rule itself." },
      { id: 'D', text: "An S3 bucket policy that denies public access regardless of the bucket's own setting." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation","Automated Remediation","Resilience Failure"]
  },
  {
    id: "aws-dop-431",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "An SNS topic per service that pages the owning team when an alarm fires." },
      { id: 'B', text: "Systems Manager Incident Manager with response plans, contacts, and post-incident templates." },
      { id: 'C', text: "A CloudWatch dashboard per service that the on-call engineer watches during an incident." },
      { id: 'D', text: "An EventBridge rule that opens an OpsCenter item for each alarm state change." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations","Incident Manager","Dr Failover"]
  },
  {
    id: "aws-dop-432",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A CloudWatch dashboard per service that the on-call engineer watches during an incident." },
      { id: 'B', text: "An EventBridge rule that opens an OpsCenter item for each alarm state change." },
      { id: 'C', text: "An SNS topic per service that pages the owning team when an alarm fires." },
      { id: 'D', text: "Systems Manager Incident Manager with response plans, contacts, and post-incident templates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations","Incident Manager","High Load Scale"]
  },
  {
    id: "aws-dop-433",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Systems Manager Incident Manager with response plans, contacts, and post-incident templates." },
      { id: 'B', text: "A CloudWatch dashboard per service that the on-call engineer watches during an incident." },
      { id: 'C', text: "An SNS topic per service that pages the owning team when an alarm fires." },
      { id: 'D', text: "An EventBridge rule that opens an OpsCenter item for each alarm state change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations","Incident Manager","Security Compliance"]
  },
  {
    id: "aws-dop-434",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "An EventBridge rule that opens an OpsCenter item for each alarm state change." },
      { id: 'B', text: "An SNS topic per service that pages the owning team when an alarm fires." },
      { id: 'C', text: "A CloudWatch dashboard per service that the on-call engineer watches during an incident." },
      { id: 'D', text: "Systems Manager Incident Manager with response plans, contacts, and post-incident templates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations","Incident Manager","Hybrid Migration"]
  },
  {
    id: "aws-dop-435",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Systems Manager Incident Manager with response plans, contacts, and post-incident templates." },
      { id: 'B', text: "A CloudWatch dashboard per service that the on-call engineer watches during an incident." },
      { id: 'C', text: "An SNS topic per service that pages the owning team when an alarm fires." },
      { id: 'D', text: "An EventBridge rule that opens an OpsCenter item for each alarm state change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations","Incident Manager","Resilience Failure"]
  },
  {
    id: "aws-dop-436",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A Lambda subscribed to the SNS topic that posts to the channel's webhook." },
      { id: 'B', text: "AWS Chatbot bound to an SNS topic and the chat channel, with its own IAM role." },
      { id: 'C', text: "An email subscription on the SNS topic, forwarded into the channel by rule." },
      { id: 'D', text: "An EventBridge rule per alarm, targeting the chat provider's API directly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps","AWS Chatbot","Dr Failover"]
  },
  {
    id: "aws-dop-437",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "An EventBridge rule per alarm, targeting the chat provider's API directly." },
      { id: 'B', text: "A Lambda subscribed to the SNS topic that posts to the channel's webhook." },
      { id: 'C', text: "An email subscription on the SNS topic, forwarded into the channel by rule." },
      { id: 'D', text: "AWS Chatbot bound to an SNS topic and the chat channel, with its own IAM role." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps","AWS Chatbot","High Load Scale"]
  },
  {
    id: "aws-dop-438",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "AWS Chatbot bound to an SNS topic and the chat channel, with its own IAM role." },
      { id: 'B', text: "An email subscription on the SNS topic, forwarded into the channel by rule." },
      { id: 'C', text: "A Lambda subscribed to the SNS topic that posts to the channel's webhook." },
      { id: 'D', text: "An EventBridge rule per alarm, targeting the chat provider's API directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps","AWS Chatbot","Security Compliance"]
  },
  {
    id: "aws-dop-439",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "AWS Chatbot bound to an SNS topic and the chat channel, with its own IAM role." },
      { id: 'B', text: "An email subscription on the SNS topic, forwarded into the channel by rule." },
      { id: 'C', text: "A Lambda subscribed to the SNS topic that posts to the channel's webhook." },
      { id: 'D', text: "An EventBridge rule per alarm, targeting the chat provider's API directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps","AWS Chatbot","Hybrid Migration"]
  },
  {
    id: "aws-dop-440",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "An EventBridge rule per alarm, targeting the chat provider's API directly." },
      { id: 'B', text: "An email subscription on the SNS topic, forwarded into the channel by rule." },
      { id: 'C', text: "AWS Chatbot bound to an SNS topic and the chat channel, with its own IAM role." },
      { id: 'D', text: "A Lambda subscribed to the SNS topic that posts to the channel's webhook." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps","AWS Chatbot","Resilience Failure"]
  },
  {
    id: "aws-dop-441",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "A CloudWatch alarm on `StatusCheckFailed_System` with the recover action." },
      { id: 'B', text: "A CloudWatch alarm on `StatusCheckFailed_Instance` with a reboot action." },
      { id: 'C', text: "An Auto Scaling group of one, replacing the instance when it fails a check." },
      { id: 'D', text: "A Systems Manager association that restarts the instance's services." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery","EC2 Auto Recovery","Dr Failover"]
  },
  {
    id: "aws-dop-442",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "A CloudWatch alarm on `StatusCheckFailed_System` with the recover action." },
      { id: 'B', text: "A Systems Manager association that restarts the instance's services." },
      { id: 'C', text: "A CloudWatch alarm on `StatusCheckFailed_Instance` with a reboot action." },
      { id: 'D', text: "An Auto Scaling group of one, replacing the instance when it fails a check." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery","EC2 Auto Recovery","High Load Scale"]
  },
  {
    id: "aws-dop-443",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "A Systems Manager association that restarts the instance's services." },
      { id: 'B', text: "A CloudWatch alarm on `StatusCheckFailed_Instance` with a reboot action." },
      { id: 'C', text: "A CloudWatch alarm on `StatusCheckFailed_System` with the recover action." },
      { id: 'D', text: "An Auto Scaling group of one, replacing the instance when it fails a check." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery","EC2 Auto Recovery","Security Compliance"]
  },
  {
    id: "aws-dop-444",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "A CloudWatch alarm on `StatusCheckFailed_System` with the recover action." },
      { id: 'B', text: "A Systems Manager association that restarts the instance's services." },
      { id: 'C', text: "A CloudWatch alarm on `StatusCheckFailed_Instance` with a reboot action." },
      { id: 'D', text: "An Auto Scaling group of one, replacing the instance when it fails a check." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery","EC2 Auto Recovery","Hybrid Migration"]
  },
  {
    id: "aws-dop-445",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "A CloudWatch alarm on `StatusCheckFailed_System` with the recover action." },
      { id: 'B', text: "A Systems Manager association that restarts the instance's services." },
      { id: 'C', text: "A CloudWatch alarm on `StatusCheckFailed_Instance` with a reboot action." },
      { id: 'D', text: "An Auto Scaling group of one, replacing the instance when it fails a check." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery","EC2 Auto Recovery","Resilience Failure"]
  },
  {
    id: "aws-dop-446",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer needs to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives?",
    options: [
      { id: 'A', text: "Run the post-mortem with the on-call engineer and record the human error found." },
      { id: 'B', text: "Freeze deployments until the missing validation has been added to the pipeline." },
      { id: 'C', text: "Run a blameless post-mortem on the systemic gaps and prioritise the corrective work." },
      { id: 'D', text: "Record the incident in the register and revisit it at the quarterly review." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture","Blameless Post-Mortem","Dr Failover"]
  },
  {
    id: "aws-dop-447",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer needs to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention?",
    options: [
      { id: 'A', text: "Run a blameless post-mortem on the systemic gaps and prioritise the corrective work." },
      { id: 'B', text: "Record the incident in the register and revisit it at the quarterly review." },
      { id: 'C', text: "Run the post-mortem with the on-call engineer and record the human error found." },
      { id: 'D', text: "Freeze deployments until the missing validation has been added to the pipeline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture","Blameless Post-Mortem","High Load Scale"]
  },
  {
    id: "aws-dop-448",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer needs to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which solution implements these mandatory compliance and security controls?",
    options: [
      { id: 'A', text: "Run a blameless post-mortem on the systemic gaps and prioritise the corrective work." },
      { id: 'B', text: "Record the incident in the register and revisit it at the quarterly review." },
      { id: 'C', text: "Run the post-mortem with the on-call engineer and record the human error found." },
      { id: 'D', text: "Freeze deployments until the missing validation has been added to the pipeline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture","Blameless Post-Mortem","Security Compliance"]
  },
  {
    id: "aws-dop-449",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer needs to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead?",
    options: [
      { id: 'A', text: "Run a blameless post-mortem on the systemic gaps and prioritise the corrective work." },
      { id: 'B', text: "Record the incident in the register and revisit it at the quarterly review." },
      { id: 'C', text: "Run the post-mortem with the on-call engineer and record the human error found." },
      { id: 'D', text: "Freeze deployments until the missing validation has been added to the pipeline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture","Blameless Post-Mortem","Hybrid Migration"]
  },
  {
    id: "aws-dop-450",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer needs to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability?",
    options: [
      { id: 'A', text: "Run a blameless post-mortem on the systemic gaps and prioritise the corrective work." },
      { id: 'B', text: "Record the incident in the register and revisit it at the quarterly review." },
      { id: 'C', text: "Run the post-mortem with the on-call engineer and record the human error found." },
      { id: 'D', text: "Freeze deployments until the missing validation has been added to the pipeline." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture","Blameless Post-Mortem","Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_18;
