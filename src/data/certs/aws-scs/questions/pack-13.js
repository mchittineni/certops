export const AWS_SCS_QUESTIONS_13 = [
  {
    id: "aws-scs-301",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Security Log Immutability: S3 Object Lock: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates S3 Object Lock to guarantee that security audit logs cannot be deleted or modified by any user, including the root account, during a 7-year regulatory retention period.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Write Once Read Many (WORM) storage with Compliance Mode and Legal Hold for security logs is under consideration.",
    options: [
      { id: 'A', text: "Store logs in standard S3 buckets and rely on IAM policies alone to prevent deletion." },
      { id: 'B', text: "Store logs on an unencrypted on-premises NAS drive with no write protection." },
      { id: 'C', text: "Use S3 Object Lock in Governance Mode where privileged administrative users can override retention rules." },
      { id: 'D', text: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period. S3 Object Lock enforces WORM (Write Once, Read Many) policies. In `Compliance Mode`, no user—including the AWS account root user—can overwrite, delete, or shorten the retention period of an object until the retention timer expires, satisfying strict regulatory requirements like SEC Rule 17a-4.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    tags: ["S3 Object Lock", "S3 Object Lock", "Enterprise Governance"]
  },
  {
    id: "aws-scs-302",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Security Log Immutability: S3 Object Lock: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates S3 Object Lock to guarantee that security audit logs cannot be deleted or modified by any user, including the root account, during a 7-year regulatory retention period.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Write Once Read Many (WORM) storage with Compliance Mode and Legal Hold for security logs is under consideration.",
    options: [
      { id: 'A', text: "Store logs in standard S3 buckets and rely on IAM policies alone to prevent deletion." },
      { id: 'B', text: "Use S3 Object Lock in Governance Mode where privileged administrative users can override retention rules." },
      { id: 'C', text: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period." },
      { id: 'D', text: "Store logs on an unencrypted on-premises NAS drive with no write protection." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period. S3 Object Lock enforces WORM (Write Once, Read Many) policies. In `Compliance Mode`, no user—including the AWS account root user—can overwrite, delete, or shorten the retention period of an object until the retention timer expires, satisfying strict regulatory requirements like SEC Rule 17a-4.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    tags: ["S3 Object Lock", "S3 Object Lock", "Incident Containment"]
  },
  {
    id: "aws-scs-303",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Security Log Immutability: S3 Object Lock: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates S3 Object Lock to guarantee that security audit logs cannot be deleted or modified by any user, including the root account, during a 7-year regulatory retention period.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Write Once Read Many (WORM) storage with Compliance Mode and Legal Hold for security logs is under consideration.",
    options: [
      { id: 'A', text: "Store logs on an unencrypted on-premises NAS drive with no write protection." },
      { id: 'B', text: "Store logs in standard S3 buckets and rely on IAM policies alone to prevent deletion." },
      { id: 'C', text: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period." },
      { id: 'D', text: "Use S3 Object Lock in Governance Mode where privileged administrative users can override retention rules." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period. S3 Object Lock enforces WORM (Write Once, Read Many) policies. In `Compliance Mode`, no user—including the AWS account root user—can overwrite, delete, or shorten the retention period of an object until the retention timer expires, satisfying strict regulatory requirements like SEC Rule 17a-4.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    tags: ["S3 Object Lock", "S3 Object Lock", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-304",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Security Log Immutability: S3 Object Lock: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates S3 Object Lock to guarantee that security audit logs cannot be deleted or modified by any user, including the root account, during a 7-year regulatory retention period.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Write Once Read Many (WORM) storage with Compliance Mode and Legal Hold for security logs is under consideration.",
    options: [
      { id: 'A', text: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period." },
      { id: 'B', text: "Use S3 Object Lock in Governance Mode where privileged administrative users can override retention rules." },
      { id: 'C', text: "Store logs in standard S3 buckets and rely on IAM policies alone to prevent deletion." },
      { id: 'D', text: "Store logs on an unencrypted on-premises NAS drive with no write protection." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period. S3 Object Lock enforces WORM (Write Once, Read Many) policies. In `Compliance Mode`, no user—including the AWS account root user—can overwrite, delete, or shorten the retention period of an object until the retention timer expires, satisfying strict regulatory requirements like SEC Rule 17a-4.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    tags: ["S3 Object Lock", "S3 Object Lock", "Data Protection"]
  },
  {
    id: "aws-scs-305",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Security Log Immutability: S3 Object Lock: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates S3 Object Lock to guarantee that security audit logs cannot be deleted or modified by any user, including the root account, during a 7-year regulatory retention period.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Write Once Read Many (WORM) storage with Compliance Mode and Legal Hold for security logs is under consideration.",
    options: [
      { id: 'A', text: "Use S3 Object Lock in Governance Mode where privileged administrative users can override retention rules." },
      { id: 'B', text: "Store logs on an unencrypted on-premises NAS drive with no write protection." },
      { id: 'C', text: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period." },
      { id: 'D', text: "Store logs in standard S3 buckets and rely on IAM policies alone to prevent deletion." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Store logs in an S3 bucket with S3 Object Lock enabled in Compliance Mode with a 7-year retention period. S3 Object Lock enforces WORM (Write Once, Read Many) policies. In `Compliance Mode`, no user—including the AWS account root user—can overwrite, delete, or shorten the retention period of an object until the retention timer expires, satisfying strict regulatory requirements like SEC Rule 17a-4.",
    referenceUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
    tags: ["S3 Object Lock", "S3 Object Lock", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-306",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "CloudWatch Metric Filters and Critical Security Alarms: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates CloudWatch Alarms to receive immediate alerts whenever someone logs into the AWS Management Console using the root account credentials.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Creating metric filters on CloudTrail logs for Root account usage and unauthorized API calls is under consideration.",
    options: [
      { id: 'A', text: "Check the AWS billing statement at the end of the month to see if root account fees were charged." },
      { id: 'B', text: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm." },
      { id: 'C', text: "Disable root account alerting to avoid distracting the security team." },
      { id: 'D', text: "Rely on human team members to verbally notify the team when they use the root account." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm. CloudWatch Logs Metric Filters scan streaming CloudTrail log lines for security-critical event patterns. Key CIS benchmark alarms include root account usage (`$.userIdentity.type = \"Root\"`), unauthorized API calls (`$.errorCode = \"*UnauthorizedOperation*\"`), and console logins without MFA.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html",
    tags: ["CloudWatch Alarms", "Metric Filters", "Enterprise Governance"]
  },
  {
    id: "aws-scs-307",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "CloudWatch Metric Filters and Critical Security Alarms: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates CloudWatch Alarms to receive immediate alerts whenever someone logs into the AWS Management Console using the root account credentials.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Creating metric filters on CloudTrail logs for Root account usage and unauthorized API calls is under consideration.",
    options: [
      { id: 'A', text: "Disable root account alerting to avoid distracting the security team." },
      { id: 'B', text: "Rely on human team members to verbally notify the team when they use the root account." },
      { id: 'C', text: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm." },
      { id: 'D', text: "Check the AWS billing statement at the end of the month to see if root account fees were charged." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm. CloudWatch Logs Metric Filters scan streaming CloudTrail log lines for security-critical event patterns. Key CIS benchmark alarms include root account usage (`$.userIdentity.type = \"Root\"`), unauthorized API calls (`$.errorCode = \"*UnauthorizedOperation*\"`), and console logins without MFA.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html",
    tags: ["CloudWatch Alarms", "Metric Filters", "Incident Containment"]
  },
  {
    id: "aws-scs-308",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "CloudWatch Metric Filters and Critical Security Alarms: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates CloudWatch Alarms to receive immediate alerts whenever someone logs into the AWS Management Console using the root account credentials.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Creating metric filters on CloudTrail logs for Root account usage and unauthorized API calls is under consideration.",
    options: [
      { id: 'A', text: "Rely on human team members to verbally notify the team when they use the root account." },
      { id: 'B', text: "Disable root account alerting to avoid distracting the security team." },
      { id: 'C', text: "Check the AWS billing statement at the end of the month to see if root account fees were charged." },
      { id: 'D', text: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm. CloudWatch Logs Metric Filters scan streaming CloudTrail log lines for security-critical event patterns. Key CIS benchmark alarms include root account usage (`$.userIdentity.type = \"Root\"`), unauthorized API calls (`$.errorCode = \"*UnauthorizedOperation*\"`), and console logins without MFA.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html",
    tags: ["CloudWatch Alarms", "Metric Filters", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-309",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "CloudWatch Metric Filters and Critical Security Alarms: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates CloudWatch Alarms to receive immediate alerts whenever someone logs into the AWS Management Console using the root account credentials.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Creating metric filters on CloudTrail logs for Root account usage and unauthorized API calls is under consideration.",
    options: [
      { id: 'A', text: "Disable root account alerting to avoid distracting the security team." },
      { id: 'B', text: "Rely on human team members to verbally notify the team when they use the root account." },
      { id: 'C', text: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm." },
      { id: 'D', text: "Check the AWS billing statement at the end of the month to see if root account fees were charged." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm. CloudWatch Logs Metric Filters scan streaming CloudTrail log lines for security-critical event patterns. Key CIS benchmark alarms include root account usage (`$.userIdentity.type = \"Root\"`), unauthorized API calls (`$.errorCode = \"*UnauthorizedOperation*\"`), and console logins without MFA.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html",
    tags: ["CloudWatch Alarms", "Metric Filters", "Data Protection"]
  },
  {
    id: "aws-scs-310",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "CloudWatch Metric Filters and Critical Security Alarms: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates CloudWatch Alarms to receive immediate alerts whenever someone logs into the AWS Management Console using the root account credentials.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Creating metric filters on CloudTrail logs for Root account usage and unauthorized API calls is under consideration.",
    options: [
      { id: 'A', text: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm." },
      { id: 'B', text: "Check the AWS billing statement at the end of the month to see if root account fees were charged." },
      { id: 'C', text: "Disable root account alerting to avoid distracting the security team." },
      { id: 'D', text: "Rely on human team members to verbally notify the team when they use the root account." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a CloudWatch Logs metric filter matching `$.userIdentity.type = \"Root\"` on CloudTrail events and trigger an SNS alarm. CloudWatch Logs Metric Filters scan streaming CloudTrail log lines for security-critical event patterns. Key CIS benchmark alarms include root account usage (`$.userIdentity.type = \"Root\"`), unauthorized API calls (`$.errorCode = \"*UnauthorizedOperation*\"`), and console logins without MFA.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html",
    tags: ["CloudWatch Alarms", "Metric Filters", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-311",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Network Firewall Logging and Rule Engine Alerts: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Network Firewall Logging to analyze dropped network packets and Suricata intrusion prevention alerts generated by AWS Network Firewall.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Configuring alert, drop, and flow logging destinations for stateful Suricata inspection is under consideration.",
    options: [
      { id: 'A', text: "Disable logging to improve network firewall throughput by 5%." },
      { id: 'B', text: "Log into the firewall appliance operating system directly via SSH to run tcpdump." },
      { id: 'C', text: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs." },
      { id: 'D', text: "Assume all dropped packets are harmless and omit intrusion logging." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs. AWS Network Firewall provides stateful traffic inspection using standard Suricata rules. Platform security teams configure logging destinations for both `Flow` logs (session metadata) and `Alert` logs (packets matching intrusion detection/prevention signatures), streaming to S3, CloudWatch, or Kinesis Firehose.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/logging.html",
    tags: ["Network Firewall Logging", "Firewall Logging", "Enterprise Governance"]
  },
  {
    id: "aws-scs-312",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Network Firewall Logging and Rule Engine Alerts: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Network Firewall Logging to analyze dropped network packets and Suricata intrusion prevention alerts generated by AWS Network Firewall.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Configuring alert, drop, and flow logging destinations for stateful Suricata inspection is under consideration.",
    options: [
      { id: 'A', text: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs." },
      { id: 'B', text: "Log into the firewall appliance operating system directly via SSH to run tcpdump." },
      { id: 'C', text: "Disable logging to improve network firewall throughput by 5%." },
      { id: 'D', text: "Assume all dropped packets are harmless and omit intrusion logging." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs. AWS Network Firewall provides stateful traffic inspection using standard Suricata rules. Platform security teams configure logging destinations for both `Flow` logs (session metadata) and `Alert` logs (packets matching intrusion detection/prevention signatures), streaming to S3, CloudWatch, or Kinesis Firehose.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/logging.html",
    tags: ["Network Firewall Logging", "Firewall Logging", "Incident Containment"]
  },
  {
    id: "aws-scs-313",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Network Firewall Logging and Rule Engine Alerts: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Network Firewall Logging to analyze dropped network packets and Suricata intrusion prevention alerts generated by AWS Network Firewall.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Configuring alert, drop, and flow logging destinations for stateful Suricata inspection is under consideration.",
    options: [
      { id: 'A', text: "Log into the firewall appliance operating system directly via SSH to run tcpdump." },
      { id: 'B', text: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs." },
      { id: 'C', text: "Assume all dropped packets are harmless and omit intrusion logging." },
      { id: 'D', text: "Disable logging to improve network firewall throughput by 5%." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs. AWS Network Firewall provides stateful traffic inspection using standard Suricata rules. Platform security teams configure logging destinations for both `Flow` logs (session metadata) and `Alert` logs (packets matching intrusion detection/prevention signatures), streaming to S3, CloudWatch, or Kinesis Firehose.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/logging.html",
    tags: ["Network Firewall Logging", "Firewall Logging", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-314",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Network Firewall Logging and Rule Engine Alerts: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Network Firewall Logging to analyze dropped network packets and Suricata intrusion prevention alerts generated by AWS Network Firewall.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Configuring alert, drop, and flow logging destinations for stateful Suricata inspection is under consideration.",
    options: [
      { id: 'A', text: "Disable logging to improve network firewall throughput by 5%." },
      { id: 'B', text: "Assume all dropped packets are harmless and omit intrusion logging." },
      { id: 'C', text: "Log into the firewall appliance operating system directly via SSH to run tcpdump." },
      { id: 'D', text: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs. AWS Network Firewall provides stateful traffic inspection using standard Suricata rules. Platform security teams configure logging destinations for both `Flow` logs (session metadata) and `Alert` logs (packets matching intrusion detection/prevention signatures), streaming to S3, CloudWatch, or Kinesis Firehose.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/logging.html",
    tags: ["Network Firewall Logging", "Firewall Logging", "Data Protection"]
  },
  {
    id: "aws-scs-315",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS Network Firewall Logging and Rule Engine Alerts: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Network Firewall Logging to analyze dropped network packets and Suricata intrusion prevention alerts generated by AWS Network Firewall.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Configuring alert, drop, and flow logging destinations for stateful Suricata inspection is under consideration.",
    options: [
      { id: 'A', text: "Log into the firewall appliance operating system directly via SSH to run tcpdump." },
      { id: 'B', text: "Assume all dropped packets are harmless and omit intrusion logging." },
      { id: 'C', text: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs." },
      { id: 'D', text: "Disable logging to improve network firewall throughput by 5%." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure AWS Network Firewall logging to stream `Alert` and `Flow` logs directly to Amazon S3 or CloudWatch Logs. AWS Network Firewall provides stateful traffic inspection using standard Suricata rules. Platform security teams configure logging destinations for both `Flow` logs (session metadata) and `Alert` logs (packets matching intrusion detection/prevention signatures), streaming to S3, CloudWatch, or Kinesis Firehose.",
    referenceUrl: "https://docs.aws.amazon.com/network-firewall/latest/developerguide/logging.html",
    tags: ["Network Firewall Logging", "Firewall Logging", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-316",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS WAF Traffic Logging and Sensitive Field Redaction: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates WAF Logging to log all incoming HTTP requests blocked by AWS WAF while ensuring sensitive user passwords and authorization headers are never logged.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Streaming web request logs via Kinesis Data Firehose with header and cookie redaction is under consideration.",
    options: [
      { id: 'A', text: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers." },
      { id: 'B', text: "Store plaintext HTTP request bodies containing user passwords in public S3 buckets." },
      { id: 'C', text: "Log traffic only when the web application crashes." },
      { id: 'D', text: "Disable WAF logging to avoid capturing sensitive credentials in log files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers. AWS WAF logs comprehensive request metadata (IP, URI, headers, matching rules). Security policies require redacting sensitive information (like `Authorization` bearer tokens or `Cookie` headers) using `RedactedFields` before logs are delivered to Kinesis Data Firehose or S3.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/logging.html",
    tags: ["WAF Logging", "WAF Logging", "Enterprise Governance"]
  },
  {
    id: "aws-scs-317",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS WAF Traffic Logging and Sensitive Field Redaction: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates WAF Logging to log all incoming HTTP requests blocked by AWS WAF while ensuring sensitive user passwords and authorization headers are never logged.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Streaming web request logs via Kinesis Data Firehose with header and cookie redaction is under consideration.",
    options: [
      { id: 'A', text: "Log traffic only when the web application crashes." },
      { id: 'B', text: "Disable WAF logging to avoid capturing sensitive credentials in log files." },
      { id: 'C', text: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers." },
      { id: 'D', text: "Store plaintext HTTP request bodies containing user passwords in public S3 buckets." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers. AWS WAF logs comprehensive request metadata (IP, URI, headers, matching rules). Security policies require redacting sensitive information (like `Authorization` bearer tokens or `Cookie` headers) using `RedactedFields` before logs are delivered to Kinesis Data Firehose or S3.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/logging.html",
    tags: ["WAF Logging", "WAF Logging", "Incident Containment"]
  },
  {
    id: "aws-scs-318",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS WAF Traffic Logging and Sensitive Field Redaction: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates WAF Logging to log all incoming HTTP requests blocked by AWS WAF while ensuring sensitive user passwords and authorization headers are never logged.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Streaming web request logs via Kinesis Data Firehose with header and cookie redaction is under consideration.",
    options: [
      { id: 'A', text: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers." },
      { id: 'B', text: "Log traffic only when the web application crashes." },
      { id: 'C', text: "Store plaintext HTTP request bodies containing user passwords in public S3 buckets." },
      { id: 'D', text: "Disable WAF logging to avoid capturing sensitive credentials in log files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers. AWS WAF logs comprehensive request metadata (IP, URI, headers, matching rules). Security policies require redacting sensitive information (like `Authorization` bearer tokens or `Cookie` headers) using `RedactedFields` before logs are delivered to Kinesis Data Firehose or S3.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/logging.html",
    tags: ["WAF Logging", "WAF Logging", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-319",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS WAF Traffic Logging and Sensitive Field Redaction: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates WAF Logging to log all incoming HTTP requests blocked by AWS WAF while ensuring sensitive user passwords and authorization headers are never logged.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Streaming web request logs via Kinesis Data Firehose with header and cookie redaction is under consideration.",
    options: [
      { id: 'A', text: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers." },
      { id: 'B', text: "Disable WAF logging to avoid capturing sensitive credentials in log files." },
      { id: 'C', text: "Store plaintext HTTP request bodies containing user passwords in public S3 buckets." },
      { id: 'D', text: "Log traffic only when the web application crashes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers. AWS WAF logs comprehensive request metadata (IP, URI, headers, matching rules). Security policies require redacting sensitive information (like `Authorization` bearer tokens or `Cookie` headers) using `RedactedFields` before logs are delivered to Kinesis Data Firehose or S3.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/logging.html",
    tags: ["WAF Logging", "WAF Logging", "Data Protection"]
  },
  {
    id: "aws-scs-320",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS WAF Traffic Logging and Sensitive Field Redaction: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates WAF Logging to log all incoming HTTP requests blocked by AWS WAF while ensuring sensitive user passwords and authorization headers are never logged.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Streaming web request logs via Kinesis Data Firehose with header and cookie redaction is under consideration.",
    options: [
      { id: 'A', text: "Store plaintext HTTP request bodies containing user passwords in public S3 buckets." },
      { id: 'B', text: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers." },
      { id: 'C', text: "Disable WAF logging to avoid capturing sensitive credentials in log files." },
      { id: 'D', text: "Log traffic only when the web application crashes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable AWS WAF full logging to Amazon Kinesis Data Firehose with `RedactedFields` configured for `Authorization` and `Cookie` headers. AWS WAF logs comprehensive request metadata (IP, URI, headers, matching rules). Security policies require redacting sensitive information (like `Authorization` bearer tokens or `Cookie` headers) using `RedactedFields` before logs are delivered to Kinesis Data Firehose or S3.",
    referenceUrl: "https://docs.aws.amazon.com/waf/latest/developerguide/logging.html",
    tags: ["WAF Logging", "WAF Logging", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-321",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Athena Partition Projection for High-Scale Log Analytics: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Athena Analytics to perform fast forensic queries across terabytes of multi-account CloudTrail logs in Amazon S3 without incurring query timeouts.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Querying billions of multi-account CloudTrail and VPC Flow Logs efficiently using partition projection is under consideration.",
    options: [
      { id: 'A', text: "Download all S3 log files to a local database server before running SQL queries." },
      { id: 'B', text: "Execute full table scans across millions of unindexed S3 objects using standard relational SELECT queries." },
      { id: 'C', text: "Delete historical log files older than 24 hours to keep query sizes small." },
      { id: 'D', text: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions. When querying massive multi-account log repositories in S3, standard Athena `MSCK REPAIR TABLE` operations time out. Enabling Partition Projection allows Athena to calculate partition locations mathematically from table properties, drastically accelerating queries and eliminating partition metadata bottlenecks.",
    referenceUrl: "https://docs.aws.amazon.com/athena/latest/ug/partition-projection.html",
    tags: ["Athena Analytics", "Athena Partition Projection", "Enterprise Governance"]
  },
  {
    id: "aws-scs-322",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Athena Partition Projection for High-Scale Log Analytics: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Athena Analytics to perform fast forensic queries across terabytes of multi-account CloudTrail logs in Amazon S3 without incurring query timeouts.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Querying billions of multi-account CloudTrail and VPC Flow Logs efficiently using partition projection is under consideration.",
    options: [
      { id: 'A', text: "Download all S3 log files to a local database server before running SQL queries." },
      { id: 'B', text: "Execute full table scans across millions of unindexed S3 objects using standard relational SELECT queries." },
      { id: 'C', text: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions." },
      { id: 'D', text: "Delete historical log files older than 24 hours to keep query sizes small." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions. When querying massive multi-account log repositories in S3, standard Athena `MSCK REPAIR TABLE` operations time out. Enabling Partition Projection allows Athena to calculate partition locations mathematically from table properties, drastically accelerating queries and eliminating partition metadata bottlenecks.",
    referenceUrl: "https://docs.aws.amazon.com/athena/latest/ug/partition-projection.html",
    tags: ["Athena Analytics", "Athena Partition Projection", "Incident Containment"]
  },
  {
    id: "aws-scs-323",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Athena Partition Projection for High-Scale Log Analytics: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Athena Analytics to perform fast forensic queries across terabytes of multi-account CloudTrail logs in Amazon S3 without incurring query timeouts.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Querying billions of multi-account CloudTrail and VPC Flow Logs efficiently using partition projection is under consideration.",
    options: [
      { id: 'A', text: "Execute full table scans across millions of unindexed S3 objects using standard relational SELECT queries." },
      { id: 'B', text: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions." },
      { id: 'C', text: "Download all S3 log files to a local database server before running SQL queries." },
      { id: 'D', text: "Delete historical log files older than 24 hours to keep query sizes small." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions. When querying massive multi-account log repositories in S3, standard Athena `MSCK REPAIR TABLE` operations time out. Enabling Partition Projection allows Athena to calculate partition locations mathematically from table properties, drastically accelerating queries and eliminating partition metadata bottlenecks.",
    referenceUrl: "https://docs.aws.amazon.com/athena/latest/ug/partition-projection.html",
    tags: ["Athena Analytics", "Athena Partition Projection", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-324",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Athena Partition Projection for High-Scale Log Analytics: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Athena Analytics to perform fast forensic queries across terabytes of multi-account CloudTrail logs in Amazon S3 without incurring query timeouts.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Querying billions of multi-account CloudTrail and VPC Flow Logs efficiently using partition projection is under consideration.",
    options: [
      { id: 'A', text: "Delete historical log files older than 24 hours to keep query sizes small." },
      { id: 'B', text: "Execute full table scans across millions of unindexed S3 objects using standard relational SELECT queries." },
      { id: 'C', text: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions." },
      { id: 'D', text: "Download all S3 log files to a local database server before running SQL queries." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions. When querying massive multi-account log repositories in S3, standard Athena `MSCK REPAIR TABLE` operations time out. Enabling Partition Projection allows Athena to calculate partition locations mathematically from table properties, drastically accelerating queries and eliminating partition metadata bottlenecks.",
    referenceUrl: "https://docs.aws.amazon.com/athena/latest/ug/partition-projection.html",
    tags: ["Athena Analytics", "Athena Partition Projection", "Data Protection"]
  },
  {
    id: "aws-scs-325",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Athena Partition Projection for High-Scale Log Analytics: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Athena Analytics to perform fast forensic queries across terabytes of multi-account CloudTrail logs in Amazon S3 without incurring query timeouts.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Querying billions of multi-account CloudTrail and VPC Flow Logs efficiently using partition projection is under consideration.",
    options: [
      { id: 'A', text: "Delete historical log files older than 24 hours to keep query sizes small." },
      { id: 'B', text: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions." },
      { id: 'C', text: "Download all S3 log files to a local database server before running SQL queries." },
      { id: 'D', text: "Execute full table scans across millions of unindexed S3 objects using standard relational SELECT queries." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an Amazon Athena table utilizing Partition Projection on account, region, and date partitions. When querying massive multi-account log repositories in S3, standard Athena `MSCK REPAIR TABLE` operations time out. Enabling Partition Projection allows Athena to calculate partition locations mathematically from table properties, drastically accelerating queries and eliminating partition metadata bottlenecks.",
    referenceUrl: "https://docs.aws.amazon.com/athena/latest/ug/partition-projection.html",
    tags: ["Athena Analytics", "Athena Partition Projection", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_13;
