export const AWS_SCS_QUESTIONS_12 = [
  {
    id: "aws-scs-276",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Inspector Automated Vulnerability Management: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Amazon Inspector to continuously scan container images in Amazon ECR and running EC2 instances for newly published zero-day CVEs.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Continuous vulnerability scanning for EC2, ECR container images, and Lambda functions is under consideration.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads." },
      { id: 'B', text: "Scan EC2 instances once a year using a manual network port scanner from an external host." },
      { id: 'C', text: "Prohibit scanning running workloads to avoid consuming CPU cycles." },
      { id: 'D', text: "Rely on developers to self-certify that their software dependencies are free of security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads. Amazon Inspector continuously and automatically scans workloads (EC2 instances via SSM agent, container images in ECR upon push and continuously, and Lambda function code/layers) for software vulnerabilities (CVEs) and unintended network exposure, calculating risk scores based on exploitability.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Amazon Inspector", "Enterprise Governance"]
  },
  {
    id: "aws-scs-277",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Inspector Automated Vulnerability Management: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Amazon Inspector to continuously scan container images in Amazon ECR and running EC2 instances for newly published zero-day CVEs.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Continuous vulnerability scanning for EC2, ECR container images, and Lambda functions is under consideration.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads." },
      { id: 'B', text: "Scan EC2 instances once a year using a manual network port scanner from an external host." },
      { id: 'C', text: "Prohibit scanning running workloads to avoid consuming CPU cycles." },
      { id: 'D', text: "Rely on developers to self-certify that their software dependencies are free of security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads. Amazon Inspector continuously and automatically scans workloads (EC2 instances via SSM agent, container images in ECR upon push and continuously, and Lambda function code/layers) for software vulnerabilities (CVEs) and unintended network exposure, calculating risk scores based on exploitability.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Amazon Inspector", "Incident Containment"]
  },
  {
    id: "aws-scs-278",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Inspector Automated Vulnerability Management: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Amazon Inspector to continuously scan container images in Amazon ECR and running EC2 instances for newly published zero-day CVEs.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Continuous vulnerability scanning for EC2, ECR container images, and Lambda functions is under consideration.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads." },
      { id: 'B', text: "Scan EC2 instances once a year using a manual network port scanner from an external host." },
      { id: 'C', text: "Prohibit scanning running workloads to avoid consuming CPU cycles." },
      { id: 'D', text: "Rely on developers to self-certify that their software dependencies are free of security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads. Amazon Inspector continuously and automatically scans workloads (EC2 instances via SSM agent, container images in ECR upon push and continuously, and Lambda function code/layers) for software vulnerabilities (CVEs) and unintended network exposure, calculating risk scores based on exploitability.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Amazon Inspector", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-279",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Inspector Automated Vulnerability Management: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Amazon Inspector to continuously scan container images in Amazon ECR and running EC2 instances for newly published zero-day CVEs.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Continuous vulnerability scanning for EC2, ECR container images, and Lambda functions is under consideration.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads." },
      { id: 'B', text: "Scan EC2 instances once a year using a manual network port scanner from an external host." },
      { id: 'C', text: "Prohibit scanning running workloads to avoid consuming CPU cycles." },
      { id: 'D', text: "Rely on developers to self-certify that their software dependencies are free of security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads. Amazon Inspector continuously and automatically scans workloads (EC2 instances via SSM agent, container images in ECR upon push and continuously, and Lambda function code/layers) for software vulnerabilities (CVEs) and unintended network exposure, calculating risk scores based on exploitability.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Amazon Inspector", "Data Protection"]
  },
  {
    id: "aws-scs-280",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Inspector Automated Vulnerability Management: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Amazon Inspector to continuously scan container images in Amazon ECR and running EC2 instances for newly published zero-day CVEs.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Continuous vulnerability scanning for EC2, ECR container images, and Lambda functions is under consideration.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads." },
      { id: 'B', text: "Scan EC2 instances once a year using a manual network port scanner from an external host." },
      { id: 'C', text: "Prohibit scanning running workloads to avoid consuming CPU cycles." },
      { id: 'D', text: "Rely on developers to self-certify that their software dependencies are free of security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization with automated continuous scanning for EC2, ECR, and Lambda workloads. Amazon Inspector continuously and automatically scans workloads (EC2 instances via SSM agent, container images in ECR upon push and continuously, and Lambda function code/layers) for software vulnerabilities (CVEs) and unintended network exposure, calculating risk scores based on exploitability.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Amazon Inspector", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-281",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Macie Sensitive Data Discovery and S3 Protection: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Amazon Macie to identify and automatically restrict public access to S3 buckets containing unencrypted personally identifiable information (PII).",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Machine learning-based discovery of PII, credit card numbers, and credentials in Amazon S3 is under consideration.",
    options: [
      { id: 'A', text: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access." },
      { id: 'B', text: "Download all S3 objects to an on-premises desktop and run manual regex searches across files." },
      { id: 'C', text: "Ignore sensitive data discovery and assume developers never upload PII to object storage." },
      { id: 'D', text: "Make all S3 buckets world-readable to accelerate customer data analysis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access. Amazon Macie uses machine learning and pattern matching to discover sensitive data (PII, financial data, credentials) stored in Amazon S3 buckets. Findings route through EventBridge to automate guardrails like applying S3 Block Public Access or modifying bucket policies dynamically.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Amazon Macie", "Amazon Macie", "Enterprise Governance"]
  },
  {
    id: "aws-scs-282",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Macie Sensitive Data Discovery and S3 Protection: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Amazon Macie to identify and automatically restrict public access to S3 buckets containing unencrypted personally identifiable information (PII).",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Machine learning-based discovery of PII, credit card numbers, and credentials in Amazon S3 is under consideration.",
    options: [
      { id: 'A', text: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access." },
      { id: 'B', text: "Download all S3 objects to an on-premises desktop and run manual regex searches across files." },
      { id: 'C', text: "Ignore sensitive data discovery and assume developers never upload PII to object storage." },
      { id: 'D', text: "Make all S3 buckets world-readable to accelerate customer data analysis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access. Amazon Macie uses machine learning and pattern matching to discover sensitive data (PII, financial data, credentials) stored in Amazon S3 buckets. Findings route through EventBridge to automate guardrails like applying S3 Block Public Access or modifying bucket policies dynamically.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Amazon Macie", "Amazon Macie", "Incident Containment"]
  },
  {
    id: "aws-scs-283",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Macie Sensitive Data Discovery and S3 Protection: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Amazon Macie to identify and automatically restrict public access to S3 buckets containing unencrypted personally identifiable information (PII).",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Machine learning-based discovery of PII, credit card numbers, and credentials in Amazon S3 is under consideration.",
    options: [
      { id: 'A', text: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access." },
      { id: 'B', text: "Download all S3 objects to an on-premises desktop and run manual regex searches across files." },
      { id: 'C', text: "Ignore sensitive data discovery and assume developers never upload PII to object storage." },
      { id: 'D', text: "Make all S3 buckets world-readable to accelerate customer data analysis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access. Amazon Macie uses machine learning and pattern matching to discover sensitive data (PII, financial data, credentials) stored in Amazon S3 buckets. Findings route through EventBridge to automate guardrails like applying S3 Block Public Access or modifying bucket policies dynamically.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Amazon Macie", "Amazon Macie", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-284",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Macie Sensitive Data Discovery and S3 Protection: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Amazon Macie to identify and automatically restrict public access to S3 buckets containing unencrypted personally identifiable information (PII).",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Machine learning-based discovery of PII, credit card numbers, and credentials in Amazon S3 is under consideration.",
    options: [
      { id: 'A', text: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access." },
      { id: 'B', text: "Download all S3 objects to an on-premises desktop and run manual regex searches across files." },
      { id: 'C', text: "Ignore sensitive data discovery and assume developers never upload PII to object storage." },
      { id: 'D', text: "Make all S3 buckets world-readable to accelerate customer data analysis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access. Amazon Macie uses machine learning and pattern matching to discover sensitive data (PII, financial data, credentials) stored in Amazon S3 buckets. Findings route through EventBridge to automate guardrails like applying S3 Block Public Access or modifying bucket policies dynamically.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Amazon Macie", "Amazon Macie", "Data Protection"]
  },
  {
    id: "aws-scs-285",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon Macie Sensitive Data Discovery and S3 Protection: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Amazon Macie to identify and automatically restrict public access to S3 buckets containing unencrypted personally identifiable information (PII).",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Machine learning-based discovery of PII, credit card numbers, and credentials in Amazon S3 is under consideration.",
    options: [
      { id: 'A', text: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access." },
      { id: 'B', text: "Download all S3 objects to an on-premises desktop and run manual regex searches across files." },
      { id: 'C', text: "Ignore sensitive data discovery and assume developers never upload PII to object storage." },
      { id: 'D', text: "Make all S3 buckets world-readable to accelerate customer data analysis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Amazon Macie discovery jobs across the organization and trigger EventBridge rules to enforce S3 Block Public Access. Amazon Macie uses machine learning and pattern matching to discover sensitive data (PII, financial data, credentials) stored in Amazon S3 buckets. Findings route through EventBridge to automate guardrails like applying S3 Block Public Access or modifying bucket policies dynamically.",
    referenceUrl: "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
    tags: ["Amazon Macie", "Amazon Macie", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-286",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Multi-Account CloudTrail Organization Trail: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates AWS CloudTrail to ensure all API activity across 100 AWS accounts is captured in an immutable, tamper-resistant audit trail.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Organization trail delivering encrypted management and data events to a dedicated Log Archive account is under consideration.",
    options: [
      { id: 'A', text: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket." },
      { id: 'B', text: "Create individual local trails in each account delivering logs to locally managed unencrypted S3 buckets." },
      { id: 'C', text: "Disable CloudTrail in development accounts to reduce S3 storage consumption." },
      { id: 'D', text: "Deliver CloudTrail logs to a public S3 bucket with no access controls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket. An AWS Organizations CloudTrail trail captures management and data events across all member accounts automatically. By enabling Log File Validation (SHA-256 digests) and delivering to an S3 bucket in a dedicated Log Archive account encrypted with a customer-managed KMS key, the audit log remains tamper-proof.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
    tags: ["AWS CloudTrail", "Organization CloudTrail", "Enterprise Governance"]
  },
  {
    id: "aws-scs-287",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Multi-Account CloudTrail Organization Trail: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates AWS CloudTrail to ensure all API activity across 100 AWS accounts is captured in an immutable, tamper-resistant audit trail.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Organization trail delivering encrypted management and data events to a dedicated Log Archive account is under consideration.",
    options: [
      { id: 'A', text: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket." },
      { id: 'B', text: "Create individual local trails in each account delivering logs to locally managed unencrypted S3 buckets." },
      { id: 'C', text: "Disable CloudTrail in development accounts to reduce S3 storage consumption." },
      { id: 'D', text: "Deliver CloudTrail logs to a public S3 bucket with no access controls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket. An AWS Organizations CloudTrail trail captures management and data events across all member accounts automatically. By enabling Log File Validation (SHA-256 digests) and delivering to an S3 bucket in a dedicated Log Archive account encrypted with a customer-managed KMS key, the audit log remains tamper-proof.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
    tags: ["AWS CloudTrail", "Organization CloudTrail", "Incident Containment"]
  },
  {
    id: "aws-scs-288",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Multi-Account CloudTrail Organization Trail: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates AWS CloudTrail to ensure all API activity across 100 AWS accounts is captured in an immutable, tamper-resistant audit trail.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Organization trail delivering encrypted management and data events to a dedicated Log Archive account is under consideration.",
    options: [
      { id: 'A', text: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket." },
      { id: 'B', text: "Create individual local trails in each account delivering logs to locally managed unencrypted S3 buckets." },
      { id: 'C', text: "Disable CloudTrail in development accounts to reduce S3 storage consumption." },
      { id: 'D', text: "Deliver CloudTrail logs to a public S3 bucket with no access controls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket. An AWS Organizations CloudTrail trail captures management and data events across all member accounts automatically. By enabling Log File Validation (SHA-256 digests) and delivering to an S3 bucket in a dedicated Log Archive account encrypted with a customer-managed KMS key, the audit log remains tamper-proof.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
    tags: ["AWS CloudTrail", "Organization CloudTrail", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-289",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Multi-Account CloudTrail Organization Trail: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates AWS CloudTrail to ensure all API activity across 100 AWS accounts is captured in an immutable, tamper-resistant audit trail.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Organization trail delivering encrypted management and data events to a dedicated Log Archive account is under consideration.",
    options: [
      { id: 'A', text: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket." },
      { id: 'B', text: "Create individual local trails in each account delivering logs to locally managed unencrypted S3 buckets." },
      { id: 'C', text: "Disable CloudTrail in development accounts to reduce S3 storage consumption." },
      { id: 'D', text: "Deliver CloudTrail logs to a public S3 bucket with no access controls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket. An AWS Organizations CloudTrail trail captures management and data events across all member accounts automatically. By enabling Log File Validation (SHA-256 digests) and delivering to an S3 bucket in a dedicated Log Archive account encrypted with a customer-managed KMS key, the audit log remains tamper-proof.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
    tags: ["AWS CloudTrail", "Organization CloudTrail", "Data Protection"]
  },
  {
    id: "aws-scs-290",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Centralized Multi-Account CloudTrail Organization Trail: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates AWS CloudTrail to ensure all API activity across 100 AWS accounts is captured in an immutable, tamper-resistant audit trail.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Organization trail delivering encrypted management and data events to a dedicated Log Archive account is under consideration.",
    options: [
      { id: 'A', text: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket." },
      { id: 'B', text: "Create individual local trails in each account delivering logs to locally managed unencrypted S3 buckets." },
      { id: 'C', text: "Disable CloudTrail in development accounts to reduce S3 storage consumption." },
      { id: 'D', text: "Deliver CloudTrail logs to a public S3 bucket with no access controls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an AWS Organizations CloudTrail trail with log file integrity validation enabled, encrypted with KMS, delivering to a Log Archive S3 bucket. An AWS Organizations CloudTrail trail captures management and data events across all member accounts automatically. By enabling Log File Validation (SHA-256 digests) and delivering to an S3 bucket in a dedicated Log Archive account encrypted with a customer-managed KMS key, the audit log remains tamper-proof.",
    referenceUrl: "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html",
    tags: ["AWS CloudTrail", "Organization CloudTrail", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-291",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "VPC Flow Logs Aggregation and Network Traffic Inspection: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates VPC Flow Logs to monitor unauthorized network connection attempts and detect port scanning activity across all VPC subnets.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Capturing accepted and rejected IP traffic with custom format fields delivered to CloudWatch and S3 is under consideration.",
    options: [
      { id: 'A', text: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs." },
      { id: 'B', text: "Rely on application access logs that only record established HTTP sessions." },
      { id: 'C', text: "Disable VPC Flow Logs to prevent generating network metadata." },
      { id: 'D', text: "Inspect network packets manually by placing promiscuous network taps on virtual switches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs. VPC Flow Logs capture IP traffic information traversing network interfaces. Capturing `REJECT` traffic helps detect firewall blocks and malicious port scanning. Custom flow log formats include TCP flags, packet source/destination IP, and transit gateway IDs, delivering to S3 or CloudWatch for deep analysis.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
    tags: ["VPC Flow Logs", "VPC Flow Logs", "Enterprise Governance"]
  },
  {
    id: "aws-scs-292",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "VPC Flow Logs Aggregation and Network Traffic Inspection: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates VPC Flow Logs to monitor unauthorized network connection attempts and detect port scanning activity across all VPC subnets.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Capturing accepted and rejected IP traffic with custom format fields delivered to CloudWatch and S3 is under consideration.",
    options: [
      { id: 'A', text: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs." },
      { id: 'B', text: "Rely on application access logs that only record established HTTP sessions." },
      { id: 'C', text: "Disable VPC Flow Logs to prevent generating network metadata." },
      { id: 'D', text: "Inspect network packets manually by placing promiscuous network taps on virtual switches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs. VPC Flow Logs capture IP traffic information traversing network interfaces. Capturing `REJECT` traffic helps detect firewall blocks and malicious port scanning. Custom flow log formats include TCP flags, packet source/destination IP, and transit gateway IDs, delivering to S3 or CloudWatch for deep analysis.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
    tags: ["VPC Flow Logs", "VPC Flow Logs", "Incident Containment"]
  },
  {
    id: "aws-scs-293",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "VPC Flow Logs Aggregation and Network Traffic Inspection: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates VPC Flow Logs to monitor unauthorized network connection attempts and detect port scanning activity across all VPC subnets.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Capturing accepted and rejected IP traffic with custom format fields delivered to CloudWatch and S3 is under consideration.",
    options: [
      { id: 'A', text: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs." },
      { id: 'B', text: "Rely on application access logs that only record established HTTP sessions." },
      { id: 'C', text: "Disable VPC Flow Logs to prevent generating network metadata." },
      { id: 'D', text: "Inspect network packets manually by placing promiscuous network taps on virtual switches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs. VPC Flow Logs capture IP traffic information traversing network interfaces. Capturing `REJECT` traffic helps detect firewall blocks and malicious port scanning. Custom flow log formats include TCP flags, packet source/destination IP, and transit gateway IDs, delivering to S3 or CloudWatch for deep analysis.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
    tags: ["VPC Flow Logs", "VPC Flow Logs", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-294",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "VPC Flow Logs Aggregation and Network Traffic Inspection: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates VPC Flow Logs to monitor unauthorized network connection attempts and detect port scanning activity across all VPC subnets.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Capturing accepted and rejected IP traffic with custom format fields delivered to CloudWatch and S3 is under consideration.",
    options: [
      { id: 'A', text: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs." },
      { id: 'B', text: "Rely on application access logs that only record established HTTP sessions." },
      { id: 'C', text: "Disable VPC Flow Logs to prevent generating network metadata." },
      { id: 'D', text: "Inspect network packets manually by placing promiscuous network taps on virtual switches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs. VPC Flow Logs capture IP traffic information traversing network interfaces. Capturing `REJECT` traffic helps detect firewall blocks and malicious port scanning. Custom flow log formats include TCP flags, packet source/destination IP, and transit gateway IDs, delivering to S3 or CloudWatch for deep analysis.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
    tags: ["VPC Flow Logs", "VPC Flow Logs", "Data Protection"]
  },
  {
    id: "aws-scs-295",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "VPC Flow Logs Aggregation and Network Traffic Inspection: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates VPC Flow Logs to monitor unauthorized network connection attempts and detect port scanning activity across all VPC subnets.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Capturing accepted and rejected IP traffic with custom format fields delivered to CloudWatch and S3 is under consideration.",
    options: [
      { id: 'A', text: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs." },
      { id: 'B', text: "Rely on application access logs that only record established HTTP sessions." },
      { id: 'C', text: "Disable VPC Flow Logs to prevent generating network metadata." },
      { id: 'D', text: "Inspect network packets manually by placing promiscuous network taps on virtual switches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable VPC Flow Logs with filter set to `ALL` or `REJECT`, capturing custom fields like `pkt-srcaddr` and streaming to S3 and CloudWatch Logs. VPC Flow Logs capture IP traffic information traversing network interfaces. Capturing `REJECT` traffic helps detect firewall blocks and malicious port scanning. Custom flow log formats include TCP flags, packet source/destination IP, and transit gateway IDs, delivering to S3 or CloudWatch for deep analysis.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
    tags: ["VPC Flow Logs", "VPC Flow Logs", "Infrastructure Defense"]
  },
  {
    id: "aws-scs-296",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Amazon Route 53 Resolver DNS Firewall and Query Logging: Enterprise Governance",
    scenario: "An enterprise cloud security architect is establishing multi-account security baselines, identity perimeters, and regulatory compliance guardrails across an AWS Organization. The security engineer evaluates Route 53 DNS Firewall to prevent malware running on internal EC2 instances from exfiltrating sensitive data via DNS tunneling to malicious domains.",
    question: "Which architectural approach or AWS security configuration satisfies these enterprise security objectives? Logging outbound DNS queries and blocking malicious domain lookups and DNS tunneling is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3." },
      { id: 'B', text: "Allow instances to query arbitrary public DNS servers directly over UDP port 53 without filtering." },
      { id: 'C', text: "Disable internal DNS resolution across all corporate VPCs." },
      { id: 'D', text: "Rely on web browser proxy settings that can be disabled by local malware." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3. Route 53 Resolver Query Logging records all DNS lookups made by resources inside VPCs. Route 53 Resolver DNS Firewall inspects outbound DNS queries against domain allowlists or AWS Managed Threat Lists, blocking connections to known command-and-control servers or data exfiltration via DNS tunneling.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-dns-firewall.html",
    tags: ["Route 53 DNS Firewall", "DNS Firewall", "Enterprise Governance"]
  },
  {
    id: "aws-scs-297",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Amazon Route 53 Resolver DNS Firewall and Query Logging: Incident Containment",
    scenario: "A security operations center (SOC) detects an active security anomaly and potential credential compromise across production AWS workloads. The security engineer evaluates Route 53 DNS Firewall to prevent malware running on internal EC2 instances from exfiltrating sensitive data via DNS tunneling to malicious domains.",
    question: "Which incident response workflow or AWS service configuration contains the threat effectively while preserving forensic evidence? Logging outbound DNS queries and blocking malicious domain lookups and DNS tunneling is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3." },
      { id: 'B', text: "Allow instances to query arbitrary public DNS servers directly over UDP port 53 without filtering." },
      { id: 'C', text: "Disable internal DNS resolution across all corporate VPCs." },
      { id: 'D', text: "Rely on web browser proxy settings that can be disabled by local malware." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3. Route 53 Resolver Query Logging records all DNS lookups made by resources inside VPCs. Route 53 Resolver DNS Firewall inspects outbound DNS queries against domain allowlists or AWS Managed Threat Lists, blocking connections to known command-and-control servers or data exfiltration via DNS tunneling.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-dns-firewall.html",
    tags: ["Route 53 DNS Firewall", "DNS Firewall", "Incident Containment"]
  },
  {
    id: "aws-scs-298",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Amazon Route 53 Resolver DNS Firewall and Query Logging: Zero Trust Iam",
    scenario: "A security compliance auditor requires strict least-privilege access, cryptographic key separation of duties, and continuous audit verification across all IAM principals. The security engineer evaluates Route 53 DNS Firewall to prevent malware running on internal EC2 instances from exfiltrating sensitive data via DNS tunneling to malicious domains.",
    question: "Which IAM design pattern or encryption policy satisfies these mandatory access controls? Logging outbound DNS queries and blocking malicious domain lookups and DNS tunneling is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3." },
      { id: 'B', text: "Allow instances to query arbitrary public DNS servers directly over UDP port 53 without filtering." },
      { id: 'C', text: "Disable internal DNS resolution across all corporate VPCs." },
      { id: 'D', text: "Rely on web browser proxy settings that can be disabled by local malware." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3. Route 53 Resolver Query Logging records all DNS lookups made by resources inside VPCs. Route 53 Resolver DNS Firewall inspects outbound DNS queries against domain allowlists or AWS Managed Threat Lists, blocking connections to known command-and-control servers or data exfiltration via DNS tunneling.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-dns-firewall.html",
    tags: ["Route 53 DNS Firewall", "DNS Firewall", "Zero Trust Iam"]
  },
  {
    id: "aws-scs-299",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Amazon Route 53 Resolver DNS Firewall and Query Logging: Data Protection",
    scenario: "A financial data privacy team is implementing defense-in-depth protection, automated secret rotation, and immutable audit logging for sensitive customer records. The security engineer evaluates Route 53 DNS Firewall to prevent malware running on internal EC2 instances from exfiltrating sensitive data via DNS tunneling to malicious domains.",
    question: "Which AWS data protection mechanism or encryption strategy guarantees confidentiality and integrity? Logging outbound DNS queries and blocking malicious domain lookups and DNS tunneling is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3." },
      { id: 'B', text: "Allow instances to query arbitrary public DNS servers directly over UDP port 53 without filtering." },
      { id: 'C', text: "Disable internal DNS resolution across all corporate VPCs." },
      { id: 'D', text: "Rely on web browser proxy settings that can be disabled by local malware." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3. Route 53 Resolver Query Logging records all DNS lookups made by resources inside VPCs. Route 53 Resolver DNS Firewall inspects outbound DNS queries against domain allowlists or AWS Managed Threat Lists, blocking connections to known command-and-control servers or data exfiltration via DNS tunneling.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-dns-firewall.html",
    tags: ["Route 53 DNS Firewall", "DNS Firewall", "Data Protection"]
  },
  {
    id: "aws-scs-300",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Amazon Route 53 Resolver DNS Firewall and Query Logging: Infrastructure Defense",
    scenario: "A cloud platform reliability team is hardening network perimeters, isolating hybrid VPCs, and automating vulnerability remediation across elastic EC2 and EKS clusters. The security engineer evaluates Route 53 DNS Firewall to prevent malware running on internal EC2 instances from exfiltrating sensitive data via DNS tunneling to malicious domains.",
    question: "Which network design or AWS infrastructure security configuration guarantees high availability and perimeter defense? Logging outbound DNS queries and blocking malicious domain lookups and DNS tunneling is under consideration.",
    options: [
      { id: 'A', text: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3." },
      { id: 'B', text: "Allow instances to query arbitrary public DNS servers directly over UDP port 53 without filtering." },
      { id: 'C', text: "Disable internal DNS resolution across all corporate VPCs." },
      { id: 'D', text: "Rely on web browser proxy settings that can be disabled by local malware." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Route 53 Resolver DNS Firewall with AWS Managed Domain Lists and enable Route 53 Resolver Query Logging to S3. Route 53 Resolver Query Logging records all DNS lookups made by resources inside VPCs. Route 53 Resolver DNS Firewall inspects outbound DNS queries against domain allowlists or AWS Managed Threat Lists, blocking connections to known command-and-control servers or data exfiltration via DNS tunneling.",
    referenceUrl: "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-dns-firewall.html",
    tags: ["Route 53 DNS Firewall", "DNS Firewall", "Infrastructure Defense"]
  }
];

export default AWS_SCS_QUESTIONS_12;
