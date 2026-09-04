export const AWS_DOP_QUESTIONS_19 = [
  {
    id: "aws-dop-451",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Amazon GuardDuty Automated Threat Response: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Threat Detection to automatically isolate an Amazon EC2 instance that Amazon GuardDuty detects communicating with a known cryptocurrency mining pool.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Automated isolation of compromised EC2 instances or IAM credentials with GuardDuty is under consideration.",
    options: [
      { id: 'A', text: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance." },
      { id: 'B', text: "Allow the instance to continue running until the monthly security report is generated." },
      { id: 'C', text: "Shut down all EC2 instances across the entire organization." },
      { id: 'D', text: "Delete the AWS account hosting the instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance. Amazon GuardDuty uses machine learning and threat intelligence to detect malicious activity (crypto-mining, credential exfiltration). EventBridge captures GuardDuty findings and triggers automated Lambda functions to quarantine compromised instances by swapping security groups, containing the breach instantly.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Threat Detection", "GuardDuty Automation", "Dr Failover"]
  },
  {
    id: "aws-dop-452",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Amazon GuardDuty Automated Threat Response: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Threat Detection to automatically isolate an Amazon EC2 instance that Amazon GuardDuty detects communicating with a known cryptocurrency mining pool.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Automated isolation of compromised EC2 instances or IAM credentials with GuardDuty is under consideration.",
    options: [
      { id: 'A', text: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance." },
      { id: 'B', text: "Allow the instance to continue running until the monthly security report is generated." },
      { id: 'C', text: "Shut down all EC2 instances across the entire organization." },
      { id: 'D', text: "Delete the AWS account hosting the instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance. Amazon GuardDuty uses machine learning and threat intelligence to detect malicious activity (crypto-mining, credential exfiltration). EventBridge captures GuardDuty findings and triggers automated Lambda functions to quarantine compromised instances by swapping security groups, containing the breach instantly.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Threat Detection", "GuardDuty Automation", "High Load Scale"]
  },
  {
    id: "aws-dop-453",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Amazon GuardDuty Automated Threat Response: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Threat Detection to automatically isolate an Amazon EC2 instance that Amazon GuardDuty detects communicating with a known cryptocurrency mining pool.",
    question: "Which solution implements these mandatory compliance and security controls? Automated isolation of compromised EC2 instances or IAM credentials with GuardDuty is under consideration.",
    options: [
      { id: 'A', text: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance." },
      { id: 'B', text: "Allow the instance to continue running until the monthly security report is generated." },
      { id: 'C', text: "Shut down all EC2 instances across the entire organization." },
      { id: 'D', text: "Delete the AWS account hosting the instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance. Amazon GuardDuty uses machine learning and threat intelligence to detect malicious activity (crypto-mining, credential exfiltration). EventBridge captures GuardDuty findings and triggers automated Lambda functions to quarantine compromised instances by swapping security groups, containing the breach instantly.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Threat Detection", "GuardDuty Automation", "Security Compliance"]
  },
  {
    id: "aws-dop-454",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Amazon GuardDuty Automated Threat Response: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Threat Detection to automatically isolate an Amazon EC2 instance that Amazon GuardDuty detects communicating with a known cryptocurrency mining pool.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Automated isolation of compromised EC2 instances or IAM credentials with GuardDuty is under consideration.",
    options: [
      { id: 'A', text: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance." },
      { id: 'B', text: "Allow the instance to continue running until the monthly security report is generated." },
      { id: 'C', text: "Shut down all EC2 instances across the entire organization." },
      { id: 'D', text: "Delete the AWS account hosting the instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance. Amazon GuardDuty uses machine learning and threat intelligence to detect malicious activity (crypto-mining, credential exfiltration). EventBridge captures GuardDuty findings and triggers automated Lambda functions to quarantine compromised instances by swapping security groups, containing the breach instantly.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Threat Detection", "GuardDuty Automation", "Hybrid Migration"]
  },
  {
    id: "aws-dop-455",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Amazon GuardDuty Automated Threat Response: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Threat Detection to automatically isolate an Amazon EC2 instance that Amazon GuardDuty detects communicating with a known cryptocurrency mining pool.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Automated isolation of compromised EC2 instances or IAM credentials with GuardDuty is under consideration.",
    options: [
      { id: 'A', text: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance." },
      { id: 'B', text: "Allow the instance to continue running until the monthly security report is generated." },
      { id: 'C', text: "Shut down all EC2 instances across the entire organization." },
      { id: 'D', text: "Delete the AWS account hosting the instance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure an EventBridge rule for GuardDuty findings that triggers an AWS Lambda function to attach an isolated security group to the compromised instance. Amazon GuardDuty uses machine learning and threat intelligence to detect malicious activity (crypto-mining, credential exfiltration). EventBridge captures GuardDuty findings and triggers automated Lambda functions to quarantine compromised instances by swapping security groups, containing the breach instantly.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Threat Detection", "GuardDuty Automation", "Resilience Failure"]
  },
  {
    id: "aws-dop-456",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Dead Man's Snitch / Heartbeat Monitoring with Synthetics: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Heartbeat Monitoring to detect when a critical nightly data synchronization batch job completely fails to run due to an upstream scheduler crash.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Dead-man switch pattern alerting when expected periodic jobs fail to execute is under consideration.",
    options: [
      { id: 'A', text: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window." },
      { id: 'B', text: "Rely on job error logs that are never generated when a job fails to launch." },
      { id: 'C', text: "Assume the job ran successfully if no error alerts are received." },
      { id: 'D', text: "Manually check the database row count once every three months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window. Standard error alerting fails when a scheduled job never executes in the first place (missing logs, silent failure). A Dead Man's Switch (heartbeat monitoring) reverses the paradigm: the job must explicitly ping an endpoint upon completion, and an alert triggers if the heartbeat is missing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Heartbeat Monitoring", "Heartbeat Monitoring", "Dr Failover"]
  },
  {
    id: "aws-dop-457",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Dead Man's Snitch / Heartbeat Monitoring with Synthetics: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Heartbeat Monitoring to detect when a critical nightly data synchronization batch job completely fails to run due to an upstream scheduler crash.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Dead-man switch pattern alerting when expected periodic jobs fail to execute is under consideration.",
    options: [
      { id: 'A', text: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window." },
      { id: 'B', text: "Rely on job error logs that are never generated when a job fails to launch." },
      { id: 'C', text: "Assume the job ran successfully if no error alerts are received." },
      { id: 'D', text: "Manually check the database row count once every three months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window. Standard error alerting fails when a scheduled job never executes in the first place (missing logs, silent failure). A Dead Man's Switch (heartbeat monitoring) reverses the paradigm: the job must explicitly ping an endpoint upon completion, and an alert triggers if the heartbeat is missing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Heartbeat Monitoring", "Heartbeat Monitoring", "High Load Scale"]
  },
  {
    id: "aws-dop-458",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Dead Man's Snitch / Heartbeat Monitoring with Synthetics: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Heartbeat Monitoring to detect when a critical nightly data synchronization batch job completely fails to run due to an upstream scheduler crash.",
    question: "Which solution implements these mandatory compliance and security controls? Dead-man switch pattern alerting when expected periodic jobs fail to execute is under consideration.",
    options: [
      { id: 'A', text: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window." },
      { id: 'B', text: "Rely on job error logs that are never generated when a job fails to launch." },
      { id: 'C', text: "Assume the job ran successfully if no error alerts are received." },
      { id: 'D', text: "Manually check the database row count once every three months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window. Standard error alerting fails when a scheduled job never executes in the first place (missing logs, silent failure). A Dead Man's Switch (heartbeat monitoring) reverses the paradigm: the job must explicitly ping an endpoint upon completion, and an alert triggers if the heartbeat is missing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Heartbeat Monitoring", "Heartbeat Monitoring", "Security Compliance"]
  },
  {
    id: "aws-dop-459",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Dead Man's Snitch / Heartbeat Monitoring with Synthetics: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Heartbeat Monitoring to detect when a critical nightly data synchronization batch job completely fails to run due to an upstream scheduler crash.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Dead-man switch pattern alerting when expected periodic jobs fail to execute is under consideration.",
    options: [
      { id: 'A', text: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window." },
      { id: 'B', text: "Rely on job error logs that are never generated when a job fails to launch." },
      { id: 'C', text: "Assume the job ran successfully if no error alerts are received." },
      { id: 'D', text: "Manually check the database row count once every three months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window. Standard error alerting fails when a scheduled job never executes in the first place (missing logs, silent failure). A Dead Man's Switch (heartbeat monitoring) reverses the paradigm: the job must explicitly ping an endpoint upon completion, and an alert triggers if the heartbeat is missing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Heartbeat Monitoring", "Heartbeat Monitoring", "Hybrid Migration"]
  },
  {
    id: "aws-dop-460",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Dead Man's Snitch / Heartbeat Monitoring with Synthetics: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Heartbeat Monitoring to detect when a critical nightly data synchronization batch job completely fails to run due to an upstream scheduler crash.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Dead-man switch pattern alerting when expected periodic jobs fail to execute is under consideration.",
    options: [
      { id: 'A', text: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window." },
      { id: 'B', text: "Rely on job error logs that are never generated when a job fails to launch." },
      { id: 'C', text: "Assume the job ran successfully if no error alerts are received." },
      { id: 'D', text: "Manually check the database row count once every three months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a Dead Man's Switch pattern where the job sends a heartbeat signal upon completion; alert if no signal is received within the expected window. Standard error alerting fails when a scheduled job never executes in the first place (missing logs, silent failure). A Dead Man's Switch (heartbeat monitoring) reverses the paradigm: the job must explicitly ping an endpoint upon completion, and an alert triggers if the heartbeat is missing.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html",
    tags: ["Heartbeat Monitoring", "Heartbeat Monitoring", "Resilience Failure"]
  },
  {
    id: "aws-dop-461",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Config Conformance Packs and Remediation: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates AWS Config to enforce organizational compliance rules (e.g., EBS encryption, S3 public read denial) across 50 AWS accounts with automated remediation.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Multi-account compliance evaluation and automatic remediation with Conformance Packs is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents." },
      { id: 'B', text: "Manually review AWS resources in each account console every month." },
      { id: 'C', text: "Write custom compliance polling scripts running on a developer laptop." },
      { id: 'D', text: "Disable AWS Config to reduce compliance monitoring costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents. AWS Config Conformance Packs are collections of AWS Config rules and remediation actions packaged into a single template. Deployed organization-wide, they continuously audit resources and trigger automated remediation (SSM Automation) when configurations violate governance standards.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["AWS Config", "Conformance Packs", "Dr Failover"]
  },
  {
    id: "aws-dop-462",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Config Conformance Packs and Remediation: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates AWS Config to enforce organizational compliance rules (e.g., EBS encryption, S3 public read denial) across 50 AWS accounts with automated remediation.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Multi-account compliance evaluation and automatic remediation with Conformance Packs is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents." },
      { id: 'B', text: "Manually review AWS resources in each account console every month." },
      { id: 'C', text: "Write custom compliance polling scripts running on a developer laptop." },
      { id: 'D', text: "Disable AWS Config to reduce compliance monitoring costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents. AWS Config Conformance Packs are collections of AWS Config rules and remediation actions packaged into a single template. Deployed organization-wide, they continuously audit resources and trigger automated remediation (SSM Automation) when configurations violate governance standards.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["AWS Config", "Conformance Packs", "High Load Scale"]
  },
  {
    id: "aws-dop-463",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Config Conformance Packs and Remediation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates AWS Config to enforce organizational compliance rules (e.g., EBS encryption, S3 public read denial) across 50 AWS accounts with automated remediation.",
    question: "Which solution implements these mandatory compliance and security controls? Multi-account compliance evaluation and automatic remediation with Conformance Packs is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents." },
      { id: 'B', text: "Manually review AWS resources in each account console every month." },
      { id: 'C', text: "Write custom compliance polling scripts running on a developer laptop." },
      { id: 'D', text: "Disable AWS Config to reduce compliance monitoring costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents. AWS Config Conformance Packs are collections of AWS Config rules and remediation actions packaged into a single template. Deployed organization-wide, they continuously audit resources and trigger automated remediation (SSM Automation) when configurations violate governance standards.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["AWS Config", "Conformance Packs", "Security Compliance"]
  },
  {
    id: "aws-dop-464",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Config Conformance Packs and Remediation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates AWS Config to enforce organizational compliance rules (e.g., EBS encryption, S3 public read denial) across 50 AWS accounts with automated remediation.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Multi-account compliance evaluation and automatic remediation with Conformance Packs is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents." },
      { id: 'B', text: "Manually review AWS resources in each account console every month." },
      { id: 'C', text: "Write custom compliance polling scripts running on a developer laptop." },
      { id: 'D', text: "Disable AWS Config to reduce compliance monitoring costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents. AWS Config Conformance Packs are collections of AWS Config rules and remediation actions packaged into a single template. Deployed organization-wide, they continuously audit resources and trigger automated remediation (SSM Automation) when configurations violate governance standards.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["AWS Config", "Conformance Packs", "Hybrid Migration"]
  },
  {
    id: "aws-dop-465",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Config Conformance Packs and Remediation: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates AWS Config to enforce organizational compliance rules (e.g., EBS encryption, S3 public read denial) across 50 AWS accounts with automated remediation.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Multi-account compliance evaluation and automatic remediation with Conformance Packs is under consideration.",
    options: [
      { id: 'A', text: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents." },
      { id: 'B', text: "Manually review AWS resources in each account console every month." },
      { id: 'C', text: "Write custom compliance polling scripts running on a developer laptop." },
      { id: 'D', text: "Disable AWS Config to reduce compliance monitoring costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy AWS Config Conformance Packs across the organization with auto-remediation enabled via Systems Manager Automation documents. AWS Config Conformance Packs are collections of AWS Config rules and remediation actions packaged into a single template. Deployed organization-wide, they continuously audit resources and trigger automated remediation (SSM Automation) when configurations violate governance standards.",
    referenceUrl: "https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html",
    tags: ["AWS Config", "Conformance Packs", "Resilience Failure"]
  },
  {
    id: "aws-dop-466",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Permission Boundaries for Delegated Administration: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates IAM Governance to allow developers to create IAM roles and policies for their applications without allowing them to escalate their own privileges or create admin roles.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Constraining delegated admin privileges using IAM permission boundaries is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary." },
      { id: 'B', text: "Grant full `iam:*` permissions to developers with no restrictions." },
      { id: 'C', text: "Refuse to allow developers to create any IAM roles, forcing all requests through a central ticket queue." },
      { id: 'D', text: "Share the root account credentials with all development teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary. IAM Permission Boundaries set the maximum permissions that an identity-based policy can grant to an IAM entity. Enforcing that developers can only create roles with an attached boundary prevents privilege escalation, empowering developers while preserving security boundaries.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Governance", "Permission Boundaries", "Dr Failover"]
  },
  {
    id: "aws-dop-467",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Permission Boundaries for Delegated Administration: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates IAM Governance to allow developers to create IAM roles and policies for their applications without allowing them to escalate their own privileges or create admin roles.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Constraining delegated admin privileges using IAM permission boundaries is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary." },
      { id: 'B', text: "Grant full `iam:*` permissions to developers with no restrictions." },
      { id: 'C', text: "Refuse to allow developers to create any IAM roles, forcing all requests through a central ticket queue." },
      { id: 'D', text: "Share the root account credentials with all development teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary. IAM Permission Boundaries set the maximum permissions that an identity-based policy can grant to an IAM entity. Enforcing that developers can only create roles with an attached boundary prevents privilege escalation, empowering developers while preserving security boundaries.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Governance", "Permission Boundaries", "High Load Scale"]
  },
  {
    id: "aws-dop-468",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Permission Boundaries for Delegated Administration: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates IAM Governance to allow developers to create IAM roles and policies for their applications without allowing them to escalate their own privileges or create admin roles.",
    question: "Which solution implements these mandatory compliance and security controls? Constraining delegated admin privileges using IAM permission boundaries is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary." },
      { id: 'B', text: "Grant full `iam:*` permissions to developers with no restrictions." },
      { id: 'C', text: "Refuse to allow developers to create any IAM roles, forcing all requests through a central ticket queue." },
      { id: 'D', text: "Share the root account credentials with all development teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary. IAM Permission Boundaries set the maximum permissions that an identity-based policy can grant to an IAM entity. Enforcing that developers can only create roles with an attached boundary prevents privilege escalation, empowering developers while preserving security boundaries.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Governance", "Permission Boundaries", "Security Compliance"]
  },
  {
    id: "aws-dop-469",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Permission Boundaries for Delegated Administration: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates IAM Governance to allow developers to create IAM roles and policies for their applications without allowing them to escalate their own privileges or create admin roles.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Constraining delegated admin privileges using IAM permission boundaries is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary." },
      { id: 'B', text: "Grant full `iam:*` permissions to developers with no restrictions." },
      { id: 'C', text: "Refuse to allow developers to create any IAM roles, forcing all requests through a central ticket queue." },
      { id: 'D', text: "Share the root account credentials with all development teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary. IAM Permission Boundaries set the maximum permissions that an identity-based policy can grant to an IAM entity. Enforcing that developers can only create roles with an attached boundary prevents privilege escalation, empowering developers while preserving security boundaries.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Governance", "Permission Boundaries", "Hybrid Migration"]
  },
  {
    id: "aws-dop-470",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM Permission Boundaries for Delegated Administration: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates IAM Governance to allow developers to create IAM roles and policies for their applications without allowing them to escalate their own privileges or create admin roles.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Constraining delegated admin privileges using IAM permission boundaries is under consideration.",
    options: [
      { id: 'A', text: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary." },
      { id: 'B', text: "Grant full `iam:*` permissions to developers with no restrictions." },
      { id: 'C', text: "Refuse to allow developers to create any IAM roles, forcing all requests through a central ticket queue." },
      { id: 'D', text: "Share the root account credentials with all development teams." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Attach an IAM Permission Boundary to the developer role requiring all newly created roles to include the same permission boundary. IAM Permission Boundaries set the maximum permissions that an identity-based policy can grant to an IAM entity. Enforcing that developers can only create roles with an attached boundary prevents privilege escalation, empowering developers while preserving security boundaries.",
    referenceUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html",
    tags: ["IAM Governance", "Permission Boundaries", "Resilience Failure"]
  },
  {
    id: "aws-dop-471",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager Automated Rotation for RDS: Dr Failover",
    scenario: "An enterprise DevOps organization is establishing cross-region operational continuity guidelines and high-availability architecture for AWS workloads. The DevOps engineer evaluates Secret Rotation to rotate production database master and application passwords every 30 days automatically without causing application connection drops.",
    question: "Which architectural approach or configuration satisfies these multi-region disaster recovery and resilience objectives? Configuring automated multi-user credential rotation for RDS in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS." },
      { id: 'B', text: "Change database passwords manually at 2:00 AM once a year." },
      { id: 'C', text: "Hardcode database passwords in application configuration files." },
      { id: 'D', text: "Store database passwords in a plaintext S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS. AWS Secrets Manager provides native automated rotation using Lambda functions. For databases, multi-user rotation maintains two sets of user credentials, updating one while the application uses the other, ensuring seamless rotation without dropped connections or downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["Secret Rotation", "Secrets Rotation", "Dr Failover"]
  },
  {
    id: "aws-dop-472",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager Automated Rotation for RDS: High Load Scale",
    scenario: "A high-throughput AWS application experiences rapid surges in user traffic and transaction volume across multiple Availability Zones. The DevOps engineer evaluates Secret Rotation to rotate production database master and application passwords every 30 days automatically without causing application connection drops.",
    question: "Which engineering approach should the DevOps team select to manage this demand efficiently without manual intervention? Configuring automated multi-user credential rotation for RDS in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS." },
      { id: 'B', text: "Change database passwords manually at 2:00 AM once a year." },
      { id: 'C', text: "Hardcode database passwords in application configuration files." },
      { id: 'D', text: "Store database passwords in a plaintext S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS. AWS Secrets Manager provides native automated rotation using Lambda functions. For databases, multi-user rotation maintains two sets of user credentials, updating one while the application uses the other, ensuring seamless rotation without dropped connections or downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["Secret Rotation", "Secrets Rotation", "High Load Scale"]
  },
  {
    id: "aws-dop-473",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager Automated Rotation for RDS: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of resource configurations, secret isolation, and governance across all AWS accounts. The DevOps engineer evaluates Secret Rotation to rotate production database master and application passwords every 30 days automatically without causing application connection drops.",
    question: "Which solution implements these mandatory compliance and security controls? Configuring automated multi-user credential rotation for RDS in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS." },
      { id: 'B', text: "Change database passwords manually at 2:00 AM once a year." },
      { id: 'C', text: "Hardcode database passwords in application configuration files." },
      { id: 'D', text: "Store database passwords in a plaintext S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS. AWS Secrets Manager provides native automated rotation using Lambda functions. For databases, multi-user rotation maintains two sets of user credentials, updating one while the application uses the other, ensuring seamless rotation without dropped connections or downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["Secret Rotation", "Secrets Rotation", "Security Compliance"]
  },
  {
    id: "aws-dop-474",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager Automated Rotation for RDS: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on AWS. The DevOps engineer evaluates Secret Rotation to rotate production database master and application passwords every 30 days automatically without causing application connection drops.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Configuring automated multi-user credential rotation for RDS in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS." },
      { id: 'B', text: "Change database passwords manually at 2:00 AM once a year." },
      { id: 'C', text: "Hardcode database passwords in application configuration files." },
      { id: 'D', text: "Store database passwords in a plaintext S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS. AWS Secrets Manager provides native automated rotation using Lambda functions. For databases, multi-user rotation maintains two sets of user credentials, updating one while the application uses the other, ensuring seamless rotation without dropped connections or downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["Secret Rotation", "Secrets Rotation", "Hybrid Migration"]
  },
  {
    id: "aws-dop-475",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager Automated Rotation for RDS: Resilience Failure",
    scenario: "A DevOps team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate incident response. The DevOps engineer evaluates Secret Rotation to rotate production database master and application passwords every 30 days automatically without causing application connection drops.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees platform stability? Configuring automated multi-user credential rotation for RDS in Secrets Manager is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS." },
      { id: 'B', text: "Change database passwords manually at 2:00 AM once a year." },
      { id: 'C', text: "Hardcode database passwords in application configuration files." },
      { id: 'D', text: "Store database passwords in a plaintext S3 bucket." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Secrets Manager automated rotation using the built-in multi-user rotation Lambda function for Amazon RDS. AWS Secrets Manager provides native automated rotation using Lambda functions. For databases, multi-user rotation maintains two sets of user credentials, updating one while the application uses the other, ensuring seamless rotation without dropped connections or downtime.",
    referenceUrl: "https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html",
    tags: ["Secret Rotation", "Secrets Rotation", "Resilience Failure"]
  }
];

export default AWS_DOP_QUESTIONS_19;
