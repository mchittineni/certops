export const AWS_DOP_QUESTIONS_18 = [
  {
    id: "aws-dop-426",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Automated Remediation to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Triggering SSM Automation runbooks from EventBridge rules on security findings is under consideration.",
    options: [
      { id: 'A', text: "Delete all S3 buckets in the AWS account immediately." },
      { id: 'B', text: "Send an email to the employee who created the bucket asking them to delete it." },
      { id: 'C', text: "Wait for a human security auditor to inspect the bucket during monthly audits." },
      { id: 'D', text: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation", "Automated Remediation", "Dr Failover"]
  },
  {
    id: "aws-dop-427",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Automated Remediation to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Triggering SSM Automation runbooks from EventBridge rules on security findings is under consideration.",
    options: [
      { id: 'A', text: "Send an email to the employee who created the bucket asking them to delete it." },
      { id: 'B', text: "Wait for a human security auditor to inspect the bucket during monthly audits." },
      { id: 'C', text: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook." },
      { id: 'D', text: "Delete all S3 buckets in the AWS account immediately." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation", "Automated Remediation", "High Load Scale"]
  },
  {
    id: "aws-dop-428",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Automated Remediation to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which solution implements these mandatory compliance and security controls? Triggering SSM Automation runbooks from EventBridge rules on security findings is under consideration.",
    options: [
      { id: 'A', text: "Delete all S3 buckets in the AWS account immediately." },
      { id: 'B', text: "Send an email to the employee who created the bucket asking them to delete it." },
      { id: 'C', text: "Wait for a human security auditor to inspect the bucket during monthly audits." },
      { id: 'D', text: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation", "Automated Remediation", "Security Compliance"]
  },
  {
    id: "aws-dop-429",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Automated Remediation to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Triggering SSM Automation runbooks from EventBridge rules on security findings is under consideration.",
    options: [
      { id: 'A', text: "Send an email to the employee who created the bucket asking them to delete it." },
      { id: 'B', text: "Wait for a human security auditor to inspect the bucket during monthly audits." },
      { id: 'C', text: "Delete all S3 buckets in the AWS account immediately." },
      { id: 'D', text: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation", "Automated Remediation", "Hybrid Migration"]
  },
  {
    id: "aws-dop-430",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated Remediation with EventBridge and Systems Manager Automation: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Automated Remediation to automatically remediate an unapproved public Amazon S3 bucket within seconds of creation without human intervention.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Triggering SSM Automation runbooks from EventBridge rules on security findings is under consideration.",
    options: [
      { id: 'A', text: "Wait for a human security auditor to inspect the bucket during monthly audits." },
      { id: 'B', text: "Delete all S3 buckets in the AWS account immediately." },
      { id: 'C', text: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook." },
      { id: 'D', text: "Send an email to the employee who created the bucket asking them to delete it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon EventBridge rule matching AWS Config non-compliant evaluations or GuardDuty findings, targeting an AWS Systems Manager Automation runbook. Event-driven remediation combines Amazon EventBridge with AWS Systems Manager Automation runbooks. When an event or AWS Config rule detects non-compliance (e.g., public S3 bucket, unencrypted volume), EventBridge invokes an SSM runbook (`AWS-DisableS3BucketPublicReadWrite`) to fix the issue automatically.",
    referenceUrl: "https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html",
    tags: ["Automated Remediation", "Automated Remediation", "Resilience Failure"]
  },
  {
    id: "aws-dop-431",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Incident Operations to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Incident preparation, automated response plans, and post-incident analysis with Incident Manager is under consideration.",
    options: [
      { id: 'A', text: "Manage major production outages through uncoordinated email threads." },
      { id: 'B', text: "Refuse to conduct incident reviews to save engineering time." },
      { id: 'C', text: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates." },
      { id: 'D', text: "Assign blame to the engineer on call during the outage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations", "Incident Manager", "Dr Failover"]
  },
  {
    id: "aws-dop-432",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Incident Operations to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Incident preparation, automated response plans, and post-incident analysis with Incident Manager is under consideration.",
    options: [
      { id: 'A', text: "Assign blame to the engineer on call during the outage." },
      { id: 'B', text: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates." },
      { id: 'C', text: "Refuse to conduct incident reviews to save engineering time." },
      { id: 'D', text: "Manage major production outages through uncoordinated email threads." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations", "Incident Manager", "High Load Scale"]
  },
  {
    id: "aws-dop-433",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Incident Operations to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which solution implements these mandatory compliance and security controls? Incident preparation, automated response plans, and post-incident analysis with Incident Manager is under consideration.",
    options: [
      { id: 'A', text: "Assign blame to the engineer on call during the outage." },
      { id: 'B', text: "Refuse to conduct incident reviews to save engineering time." },
      { id: 'C', text: "Manage major production outages through uncoordinated email threads." },
      { id: 'D', text: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations", "Incident Manager", "Security Compliance"]
  },
  {
    id: "aws-dop-434",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Incident Operations to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Incident preparation, automated response plans, and post-incident analysis with Incident Manager is under consideration.",
    options: [
      { id: 'A', text: "Manage major production outages through uncoordinated email threads." },
      { id: 'B', text: "Assign blame to the engineer on call during the outage." },
      { id: 'C', text: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates." },
      { id: 'D', text: "Refuse to conduct incident reviews to save engineering time." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations", "Incident Manager", "Hybrid Migration"]
  },
  {
    id: "aws-dop-435",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Systems Manager Incident Manager: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Incident Operations to streamline major operational incident response with automated chat channel creation, on-call paging, and structured post-incident reviews.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Incident preparation, automated response plans, and post-incident analysis with Incident Manager is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates." },
      { id: 'B', text: "Manage major production outages through uncoordinated email threads." },
      { id: 'C', text: "Refuse to conduct incident reviews to save engineering time." },
      { id: 'D', text: "Assign blame to the engineer on call during the outage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Systems Manager Incident Manager with response plans, integrated PagerDuty/OpsCenter contacts, and automated post-incident analysis templates. Systems Manager Incident Manager helps DevOps teams prepare for and resolve incidents faster. Response plans automate notification escalations, establish AWS Chatbot Slack war rooms, execute automated runbooks, and guide blameless post-incident analysis to prevent recurrence.",
    referenceUrl: "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html",
    tags: ["Incident Operations", "Incident Manager", "Resilience Failure"]
  },
  {
    id: "aws-dop-436",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates ChatOps to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Managing deployments, running runbooks, and receiving alerts in Slack via AWS Chatbot is under consideration.",
    options: [
      { id: 'A', text: "Require engineers to log into the AWS Management Console for every single notification." },
      { id: 'B', text: "Configure custom unauthenticated webhooks from third-party servers." },
      { id: 'C', text: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions." },
      { id: 'D', text: "Disable team notifications to minimize messaging distractions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps", "AWS Chatbot", "Dr Failover"]
  },
  {
    id: "aws-dop-437",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates ChatOps to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Managing deployments, running runbooks, and receiving alerts in Slack via AWS Chatbot is under consideration.",
    options: [
      { id: 'A', text: "Configure custom unauthenticated webhooks from third-party servers." },
      { id: 'B', text: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions." },
      { id: 'C', text: "Disable team notifications to minimize messaging distractions." },
      { id: 'D', text: "Require engineers to log into the AWS Management Console for every single notification." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps", "AWS Chatbot", "High Load Scale"]
  },
  {
    id: "aws-dop-438",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates ChatOps to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which solution implements these mandatory compliance and security controls? Managing deployments, running runbooks, and receiving alerts in Slack via AWS Chatbot is under consideration.",
    options: [
      { id: 'A', text: "Require engineers to log into the AWS Management Console for every single notification." },
      { id: 'B', text: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions." },
      { id: 'C', text: "Configure custom unauthenticated webhooks from third-party servers." },
      { id: 'D', text: "Disable team notifications to minimize messaging distractions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps", "AWS Chatbot", "Security Compliance"]
  },
  {
    id: "aws-dop-439",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates ChatOps to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Managing deployments, running runbooks, and receiving alerts in Slack via AWS Chatbot is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions." },
      { id: 'B', text: "Configure custom unauthenticated webhooks from third-party servers." },
      { id: 'C', text: "Require engineers to log into the AWS Management Console for every single notification." },
      { id: 'D', text: "Disable team notifications to minimize messaging distractions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps", "AWS Chatbot", "Hybrid Migration"]
  },
  {
    id: "aws-dop-440",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "AWS Chatbot Integration for ChatOps: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates ChatOps to allow DevOps engineers to receive critical operational alerts, invoke SSM runbooks, and approve CodePipeline releases directly within Microsoft Teams or Slack.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Managing deployments, running runbooks, and receiving alerts in Slack via AWS Chatbot is under consideration.",
    options: [
      { id: 'A', text: "Configure custom unauthenticated webhooks from third-party servers." },
      { id: 'B', text: "Require engineers to log into the AWS Management Console for every single notification." },
      { id: 'C', text: "Disable team notifications to minimize messaging distractions." },
      { id: 'D', text: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Chatbot with an Amazon SNS topic and bind it to enterprise Slack or Microsoft Teams channels with IAM permissions. AWS Chatbot integrates AWS services with Slack and Microsoft Teams. It delivers real-time notifications from CloudWatch, GuardDuty, and CodePipeline, and allows engineers to run diagnostic CLI commands and approve deployments directly from chat (ChatOps) with full IAM auditing.",
    referenceUrl: "https://docs.aws.amazon.com/chatbot/latest/adminguide/what-is.html",
    tags: ["ChatOps", "AWS Chatbot", "Resilience Failure"]
  },
  {
    id: "aws-dop-441",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Auto Recovery to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? CloudWatch alarm actions for automated instance recovery on hardware degradation is under consideration.",
    options: [
      { id: 'A', text: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`." },
      { id: 'B', text: "Rely on operating system reboot commands executed from inside the guest OS." },
      { id: 'C', text: "Manually launch a new instance and copy hard drives after the host crashes." },
      { id: 'D', text: "Set the alarm action to terminate the instance permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery", "EC2 Auto Recovery", "Dr Failover"]
  },
  {
    id: "aws-dop-442",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Auto Recovery to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? CloudWatch alarm actions for automated instance recovery on hardware degradation is under consideration.",
    options: [
      { id: 'A', text: "Rely on operating system reboot commands executed from inside the guest OS." },
      { id: 'B', text: "Set the alarm action to terminate the instance permanently." },
      { id: 'C', text: "Manually launch a new instance and copy hard drives after the host crashes." },
      { id: 'D', text: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery", "EC2 Auto Recovery", "High Load Scale"]
  },
  {
    id: "aws-dop-443",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Auto Recovery to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which solution implements these mandatory compliance and security controls? CloudWatch alarm actions for automated instance recovery on hardware degradation is under consideration.",
    options: [
      { id: 'A', text: "Set the alarm action to terminate the instance permanently." },
      { id: 'B', text: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`." },
      { id: 'C', text: "Manually launch a new instance and copy hard drives after the host crashes." },
      { id: 'D', text: "Rely on operating system reboot commands executed from inside the guest OS." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery", "EC2 Auto Recovery", "Security Compliance"]
  },
  {
    id: "aws-dop-444",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Auto Recovery to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? CloudWatch alarm actions for automated instance recovery on hardware degradation is under consideration.",
    options: [
      { id: 'A', text: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`." },
      { id: 'B', text: "Rely on operating system reboot commands executed from inside the guest OS." },
      { id: 'C', text: "Set the alarm action to terminate the instance permanently." },
      { id: 'D', text: "Manually launch a new instance and copy hard drives after the host crashes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery", "EC2 Auto Recovery", "Hybrid Migration"]
  },
  {
    id: "aws-dop-445",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EC2 Auto Recovery: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Auto Recovery to automatically recover an Amazon EC2 instance hosting a legacy stateful service when underlying host hardware experiences failure.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? CloudWatch alarm actions for automated instance recovery on hardware degradation is under consideration.",
    options: [
      { id: 'A', text: "Rely on operating system reboot commands executed from inside the guest OS." },
      { id: 'B', text: "Manually launch a new instance and copy hard drives after the host crashes." },
      { id: 'C', text: "Set the alarm action to terminate the instance permanently." },
      { id: 'D', text: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a CloudWatch Alarm for `StatusCheckFailed_System` with an alarm action configured for `Recover this instance`. Amazon EC2 Auto Recovery automatically migrates an instance to healthy physical hardware if the underlying host degrades (`StatusCheckFailed_System`). The instance retains its original Instance ID, private IP addresses, Elastic IP addresses, EBS volume attachments, and configuration metadata.",
    referenceUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html",
    tags: ["Auto Recovery", "EC2 Auto Recovery", "Resilience Failure"]
  },
  {
    id: "aws-dop-446",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates SRE Culture to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Conducting structured blameless post-mortems and tracking preventative work is under consideration.",
    options: [
      { id: 'A', text: "Cancel all future deployments to prevent any risk of outages." },
      { id: 'B', text: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items." },
      { id: 'C', text: "Fire the developer who authored the configuration update." },
      { id: 'D', text: "Conceal incident findings from other engineering teams." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture", "Blameless Post-Mortem", "Dr Failover"]
  },
  {
    id: "aws-dop-447",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates SRE Culture to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Conducting structured blameless post-mortems and tracking preventative work is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items." },
      { id: 'B', text: "Fire the developer who authored the configuration update." },
      { id: 'C', text: "Cancel all future deployments to prevent any risk of outages." },
      { id: 'D', text: "Conceal incident findings from other engineering teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture", "Blameless Post-Mortem", "High Load Scale"]
  },
  {
    id: "aws-dop-448",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates SRE Culture to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which solution implements these mandatory compliance and security controls? Conducting structured blameless post-mortems and tracking preventative work is under consideration.",
    options: [
      { id: 'A', text: "Cancel all future deployments to prevent any risk of outages." },
      { id: 'B', text: "Fire the developer who authored the configuration update." },
      { id: 'C', text: "Conceal incident findings from other engineering teams." },
      { id: 'D', text: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture", "Blameless Post-Mortem", "Security Compliance"]
  },
  {
    id: "aws-dop-449",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates SRE Culture to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Conducting structured blameless post-mortems and tracking preventative work is under consideration.",
    options: [
      { id: 'A', text: "Conceal incident findings from other engineering teams." },
      { id: 'B', text: "Fire the developer who authored the configuration update." },
      { id: 'C', text: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items." },
      { id: 'D', text: "Cancel all future deployments to prevent any risk of outages." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture", "Blameless Post-Mortem", "Hybrid Migration"]
  },
  {
    id: "aws-dop-450",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Blameless Post-Mortem and Root Cause Analysis: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates SRE Culture to conduct an engineering post-incident review following a severe outage where a developer deployed an unvalidated configuration update.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Conducting structured blameless post-mortems and tracking preventative work is under consideration.",
    options: [
      { id: 'A', text: "Conceal incident findings from other engineering teams." },
      { id: 'B', text: "Cancel all future deployments to prevent any risk of outages." },
      { id: 'C', text: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items." },
      { id: 'D', text: "Fire the developer who authored the configuration update." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct a blameless post-mortem focused on systemic safeguards (e.g., missing pre-commit validators, automated rollback gaps) and prioritize corrective engineering backlog items. A cornerstone of SRE culture is conducting blameless post-mortems. Assuming human error is the root cause prevents learning; true root causes are systemic deficiencies (lack of guardrails, test automation gaps, inadequate monitoring). Blameless reviews convert failures into durable platform resilience.",
    referenceUrl: "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_impact_post_incident_analysis.html",
    tags: ["SRE Culture", "Blameless Post-Mortem", "Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_18;
