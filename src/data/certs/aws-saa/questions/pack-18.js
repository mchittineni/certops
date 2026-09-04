export const AWS_SAA_QUESTIONS_18 = [
  {
    id: "aws-saa-426",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "GuardDuty Automated Remediation: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon GuardDuty to detect unauthorized crypto-mining behavior or compromised EC2 instances and automatically isolate the compromised host from the network within seconds.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon GuardDuty with EventBridge and Lambda automated remediation is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Systems Manager Patch Manager to scan the instance weekly." },
      { id: 'B', text: "Configure Amazon CloudWatch Logs to tail instance syslog and trigger a manual administrator alert." },
      { id: 'C', text: "Configure an AWS WAF rule to block outgoing traffic from the compromised instance." },
      { id: 'D', text: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance. Amazon GuardDuty continuously analyzes VPC Flow Logs, DNS logs, and CloudTrail events using machine learning to detect compromised instances (such as crypto-mining activity). Integrating findings with EventBridge allows automated Lambda functions to take instant containment actions, such as replacing the instance security group with an isolation group.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty", "Dr Failover"]
  },
  {
    id: "aws-saa-427",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "GuardDuty Automated Remediation: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon GuardDuty to detect unauthorized crypto-mining behavior or compromised EC2 instances and automatically isolate the compromised host from the network within seconds.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon GuardDuty with EventBridge and Lambda automated remediation is being evaluated.",
    options: [
      { id: 'A', text: "Configure Amazon CloudWatch Logs to tail instance syslog and trigger a manual administrator alert." },
      { id: 'B', text: "Configure an AWS WAF rule to block outgoing traffic from the compromised instance." },
      { id: 'C', text: "Deploy AWS Systems Manager Patch Manager to scan the instance weekly." },
      { id: 'D', text: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance. Amazon GuardDuty continuously analyzes VPC Flow Logs, DNS logs, and CloudTrail events using machine learning to detect compromised instances (such as crypto-mining activity). Integrating findings with EventBridge allows automated Lambda functions to take instant containment actions, such as replacing the instance security group with an isolation group.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty", "High Load Scale"]
  },
  {
    id: "aws-saa-428",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "GuardDuty Automated Remediation: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon GuardDuty to detect unauthorized crypto-mining behavior or compromised EC2 instances and automatically isolate the compromised host from the network within seconds.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon GuardDuty with EventBridge and Lambda automated remediation is being evaluated.",
    options: [
      { id: 'A', text: "Configure an AWS WAF rule to block outgoing traffic from the compromised instance." },
      { id: 'B', text: "Configure Amazon CloudWatch Logs to tail instance syslog and trigger a manual administrator alert." },
      { id: 'C', text: "Deploy AWS Systems Manager Patch Manager to scan the instance weekly." },
      { id: 'D', text: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance. Amazon GuardDuty continuously analyzes VPC Flow Logs, DNS logs, and CloudTrail events using machine learning to detect compromised instances (such as crypto-mining activity). Integrating findings with EventBridge allows automated Lambda functions to take instant containment actions, such as replacing the instance security group with an isolation group.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty", "Security Compliance"]
  },
  {
    id: "aws-saa-429",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "GuardDuty Automated Remediation: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon GuardDuty to detect unauthorized crypto-mining behavior or compromised EC2 instances and automatically isolate the compromised host from the network within seconds.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon GuardDuty with EventBridge and Lambda automated remediation is being evaluated.",
    options: [
      { id: 'A', text: "Configure Amazon CloudWatch Logs to tail instance syslog and trigger a manual administrator alert." },
      { id: 'B', text: "Deploy AWS Systems Manager Patch Manager to scan the instance weekly." },
      { id: 'C', text: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance." },
      { id: 'D', text: "Configure an AWS WAF rule to block outgoing traffic from the compromised instance." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance. Amazon GuardDuty continuously analyzes VPC Flow Logs, DNS logs, and CloudTrail events using machine learning to detect compromised instances (such as crypto-mining activity). Integrating findings with EventBridge allows automated Lambda functions to take instant containment actions, such as replacing the instance security group with an isolation group.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty", "Hybrid Migration"]
  },
  {
    id: "aws-saa-430",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "GuardDuty Automated Remediation: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon GuardDuty to detect unauthorized crypto-mining behavior or compromised EC2 instances and automatically isolate the compromised host from the network within seconds.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon GuardDuty with EventBridge and Lambda automated remediation is being evaluated.",
    options: [
      { id: 'A', text: "Configure Amazon CloudWatch Logs to tail instance syslog and trigger a manual administrator alert." },
      { id: 'B', text: "Deploy AWS Systems Manager Patch Manager to scan the instance weekly." },
      { id: 'C', text: "Configure an AWS WAF rule to block outgoing traffic from the compromised instance." },
      { id: 'D', text: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon GuardDuty, create an Amazon EventBridge rule matching GuardDuty finding types, and invoke an AWS Lambda function to attach an isolating security group to the compromised instance. Amazon GuardDuty continuously analyzes VPC Flow Logs, DNS logs, and CloudTrail events using machine learning to detect compromised instances (such as crypto-mining activity). Integrating findings with EventBridge allows automated Lambda functions to take instant containment actions, such as replacing the instance security group with an isolation group.",
    referenceUrl: "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html",
    tags: ["Amazon GuardDuty", "GuardDuty", "Resilience Failure"]
  },
  {
    id: "aws-saa-431",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Security Hub Centralized Compliance: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on AWS Security Hub to aggregate security posture, monitor compliance against the CIS AWS Foundations Benchmark, and orchestrate automated remediation across all AWS accounts in an organization.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? AWS Security Hub with CIS AWS Foundations Benchmark is being evaluated.",
    options: [
      { id: 'A', text: "Write custom python scripts querying AWS CloudTrail and AWS Config in each account." },
      { id: 'B', text: "Configure Amazon Inspector in each account without multi-account aggregation." },
      { id: 'C', text: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard." },
      { id: 'D', text: "Deploy AWS Trusted Advisor in each member account independently." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard. AWS Security Hub provides a single comprehensive view of security alerts and compliance status across all accounts in an organization. It continuously checks configurations against regulatory standards (such as CIS AWS Foundations Benchmark, PCI DSS, and NIST) and integrates with EventBridge for automated remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["AWS Security Hub", "Security Hub", "Dr Failover"]
  },
  {
    id: "aws-saa-432",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Security Hub Centralized Compliance: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on AWS Security Hub to aggregate security posture, monitor compliance against the CIS AWS Foundations Benchmark, and orchestrate automated remediation across all AWS accounts in an organization.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? AWS Security Hub with CIS AWS Foundations Benchmark is being evaluated.",
    options: [
      { id: 'A', text: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard." },
      { id: 'B', text: "Write custom python scripts querying AWS CloudTrail and AWS Config in each account." },
      { id: 'C', text: "Deploy AWS Trusted Advisor in each member account independently." },
      { id: 'D', text: "Configure Amazon Inspector in each account without multi-account aggregation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard. AWS Security Hub provides a single comprehensive view of security alerts and compliance status across all accounts in an organization. It continuously checks configurations against regulatory standards (such as CIS AWS Foundations Benchmark, PCI DSS, and NIST) and integrates with EventBridge for automated remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["AWS Security Hub", "Security Hub", "High Load Scale"]
  },
  {
    id: "aws-saa-433",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Security Hub Centralized Compliance: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on AWS Security Hub to aggregate security posture, monitor compliance against the CIS AWS Foundations Benchmark, and orchestrate automated remediation across all AWS accounts in an organization.",
    question: "Which solution properly implements these mandatory security and governance controls? AWS Security Hub with CIS AWS Foundations Benchmark is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Trusted Advisor in each member account independently." },
      { id: 'B', text: "Configure Amazon Inspector in each account without multi-account aggregation." },
      { id: 'C', text: "Write custom python scripts querying AWS CloudTrail and AWS Config in each account." },
      { id: 'D', text: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard. AWS Security Hub provides a single comprehensive view of security alerts and compliance status across all accounts in an organization. It continuously checks configurations against regulatory standards (such as CIS AWS Foundations Benchmark, PCI DSS, and NIST) and integrates with EventBridge for automated remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["AWS Security Hub", "Security Hub", "Security Compliance"]
  },
  {
    id: "aws-saa-434",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Security Hub Centralized Compliance: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on AWS Security Hub to aggregate security posture, monitor compliance against the CIS AWS Foundations Benchmark, and orchestrate automated remediation across all AWS accounts in an organization.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? AWS Security Hub with CIS AWS Foundations Benchmark is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Trusted Advisor in each member account independently." },
      { id: 'B', text: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard." },
      { id: 'C', text: "Configure Amazon Inspector in each account without multi-account aggregation." },
      { id: 'D', text: "Write custom python scripts querying AWS CloudTrail and AWS Config in each account." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard. AWS Security Hub provides a single comprehensive view of security alerts and compliance status across all accounts in an organization. It continuously checks configurations against regulatory standards (such as CIS AWS Foundations Benchmark, PCI DSS, and NIST) and integrates with EventBridge for automated remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["AWS Security Hub", "Security Hub", "Hybrid Migration"]
  },
  {
    id: "aws-saa-435",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Security Hub Centralized Compliance: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on AWS Security Hub to aggregate security posture, monitor compliance against the CIS AWS Foundations Benchmark, and orchestrate automated remediation across all AWS accounts in an organization.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? AWS Security Hub with CIS AWS Foundations Benchmark is being evaluated.",
    options: [
      { id: 'A', text: "Deploy AWS Trusted Advisor in each member account independently." },
      { id: 'B', text: "Configure Amazon Inspector in each account without multi-account aggregation." },
      { id: 'C', text: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard." },
      { id: 'D', text: "Write custom python scripts querying AWS CloudTrail and AWS Config in each account." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable AWS Security Hub across all member accounts delegated to a central security account, and activate the CIS AWS Foundations Benchmark standard. AWS Security Hub provides a single comprehensive view of security alerts and compliance status across all accounts in an organization. It continuously checks configurations against regulatory standards (such as CIS AWS Foundations Benchmark, PCI DSS, and NIST) and integrates with EventBridge for automated remediation.",
    referenceUrl: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
    tags: ["AWS Security Hub", "Security Hub", "Resilience Failure"]
  },
  {
    id: "aws-saa-436",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Inspector Vulnerability Scanning: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon Inspector to automatically scan container images pushed to Amazon ECR and running Amazon EC2 instances for software vulnerabilities (CVEs) and unintended network exposure.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon Inspector automated vulnerability management for EC2 and ECR is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an open-source scanner inside an Amazon ECS task scheduled to run once a week." },
      { id: 'B', text: "Configure Amazon GuardDuty to scan container image layers for package vulnerabilities." },
      { id: 'C', text: "Configure AWS Config rules to monitor EC2 security group port configurations only." },
      { id: 'D', text: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances. Amazon Inspector is an automated vulnerability management service that continually scans Amazon EC2 instances and container images in Amazon ECR for software vulnerabilities (CVEs) and unintended network accessibility. GuardDuty monitors runtime threats, not static package CVEs.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Inspector", "Dr Failover"]
  },
  {
    id: "aws-saa-437",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Inspector Vulnerability Scanning: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon Inspector to automatically scan container images pushed to Amazon ECR and running Amazon EC2 instances for software vulnerabilities (CVEs) and unintended network exposure.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon Inspector automated vulnerability management for EC2 and ECR is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an open-source scanner inside an Amazon ECS task scheduled to run once a week." },
      { id: 'B', text: "Configure AWS Config rules to monitor EC2 security group port configurations only." },
      { id: 'C', text: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances." },
      { id: 'D', text: "Configure Amazon GuardDuty to scan container image layers for package vulnerabilities." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances. Amazon Inspector is an automated vulnerability management service that continually scans Amazon EC2 instances and container images in Amazon ECR for software vulnerabilities (CVEs) and unintended network accessibility. GuardDuty monitors runtime threats, not static package CVEs.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Inspector", "High Load Scale"]
  },
  {
    id: "aws-saa-438",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Inspector Vulnerability Scanning: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon Inspector to automatically scan container images pushed to Amazon ECR and running Amazon EC2 instances for software vulnerabilities (CVEs) and unintended network exposure.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Inspector automated vulnerability management for EC2 and ECR is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an open-source scanner inside an Amazon ECS task scheduled to run once a week." },
      { id: 'B', text: "Configure AWS Config rules to monitor EC2 security group port configurations only." },
      { id: 'C', text: "Configure Amazon GuardDuty to scan container image layers for package vulnerabilities." },
      { id: 'D', text: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances. Amazon Inspector is an automated vulnerability management service that continually scans Amazon EC2 instances and container images in Amazon ECR for software vulnerabilities (CVEs) and unintended network accessibility. GuardDuty monitors runtime threats, not static package CVEs.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Inspector", "Security Compliance"]
  },
  {
    id: "aws-saa-439",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Inspector Vulnerability Scanning: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon Inspector to automatically scan container images pushed to Amazon ECR and running Amazon EC2 instances for software vulnerabilities (CVEs) and unintended network exposure.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon Inspector automated vulnerability management for EC2 and ECR is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an open-source scanner inside an Amazon ECS task scheduled to run once a week." },
      { id: 'B', text: "Configure AWS Config rules to monitor EC2 security group port configurations only." },
      { id: 'C', text: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances." },
      { id: 'D', text: "Configure Amazon GuardDuty to scan container image layers for package vulnerabilities." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances. Amazon Inspector is an automated vulnerability management service that continually scans Amazon EC2 instances and container images in Amazon ECR for software vulnerabilities (CVEs) and unintended network accessibility. GuardDuty monitors runtime threats, not static package CVEs.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Inspector", "Hybrid Migration"]
  },
  {
    id: "aws-saa-440",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "AWS Inspector Vulnerability Scanning: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon Inspector to automatically scan container images pushed to Amazon ECR and running Amazon EC2 instances for software vulnerabilities (CVEs) and unintended network exposure.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon Inspector automated vulnerability management for EC2 and ECR is being evaluated.",
    options: [
      { id: 'A', text: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances." },
      { id: 'B', text: "Deploy an open-source scanner inside an Amazon ECS task scheduled to run once a week." },
      { id: 'C', text: "Configure Amazon GuardDuty to scan container image layers for package vulnerabilities." },
      { id: 'D', text: "Configure AWS Config rules to monitor EC2 security group port configurations only." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Amazon Inspector across the AWS Organization to automatically perform continuous vulnerability scanning of Amazon ECR repositories and Amazon EC2 instances. Amazon Inspector is an automated vulnerability management service that continually scans Amazon EC2 instances and container images in Amazon ECR for software vulnerabilities (CVEs) and unintended network accessibility. GuardDuty monitors runtime threats, not static package CVEs.",
    referenceUrl: "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
    tags: ["Amazon Inspector", "Inspector", "Resilience Failure"]
  },
  {
    id: "aws-saa-441",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Cognito Adaptive Authentication: Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon Cognito to protect user accounts against compromised credential attacks by evaluating sign-in risk levels and prompting for multi-factor authentication (MFA) on suspicious sign-ins.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon Cognito User Pools with adaptive authentication is being evaluated.",
    options: [
      { id: 'A', text: "Write custom code inside an AWS Lambda pre-authentication trigger to query an external IP database synchronously." },
      { id: 'B', text: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high." },
      { id: 'C', text: "Configure Amazon Cognito Identity Pools with unauthenticated guest access enabled." },
      { id: 'D', text: "Deploy an AWS WAF rate-based rule to block all IP addresses that submit more than 5 sign-in requests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high. Cognito User Pools advanced security features include adaptive authentication, which evaluates contextual signals (device fingerprint, IP reputation, location, time) to assess sign-in risk and automatically prompt for MFA or block compromised credential attempts without custom code.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html",
    tags: ["Amazon Cognito", "Cognito", "Dr Failover"]
  },
  {
    id: "aws-saa-442",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Cognito Adaptive Authentication: High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon Cognito to protect user accounts against compromised credential attacks by evaluating sign-in risk levels and prompting for multi-factor authentication (MFA) on suspicious sign-ins.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon Cognito User Pools with adaptive authentication is being evaluated.",
    options: [
      { id: 'A', text: "Configure Amazon Cognito Identity Pools with unauthenticated guest access enabled." },
      { id: 'B', text: "Write custom code inside an AWS Lambda pre-authentication trigger to query an external IP database synchronously." },
      { id: 'C', text: "Deploy an AWS WAF rate-based rule to block all IP addresses that submit more than 5 sign-in requests." },
      { id: 'D', text: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high. Cognito User Pools advanced security features include adaptive authentication, which evaluates contextual signals (device fingerprint, IP reputation, location, time) to assess sign-in risk and automatically prompt for MFA or block compromised credential attempts without custom code.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html",
    tags: ["Amazon Cognito", "Cognito", "High Load Scale"]
  },
  {
    id: "aws-saa-443",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Cognito Adaptive Authentication: Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon Cognito to protect user accounts against compromised credential attacks by evaluating sign-in risk levels and prompting for multi-factor authentication (MFA) on suspicious sign-ins.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon Cognito User Pools with adaptive authentication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an AWS WAF rate-based rule to block all IP addresses that submit more than 5 sign-in requests." },
      { id: 'B', text: "Write custom code inside an AWS Lambda pre-authentication trigger to query an external IP database synchronously." },
      { id: 'C', text: "Configure Amazon Cognito Identity Pools with unauthenticated guest access enabled." },
      { id: 'D', text: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high. Cognito User Pools advanced security features include adaptive authentication, which evaluates contextual signals (device fingerprint, IP reputation, location, time) to assess sign-in risk and automatically prompt for MFA or block compromised credential attempts without custom code.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html",
    tags: ["Amazon Cognito", "Cognito", "Security Compliance"]
  },
  {
    id: "aws-saa-444",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Cognito Adaptive Authentication: Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon Cognito to protect user accounts against compromised credential attacks by evaluating sign-in risk levels and prompting for multi-factor authentication (MFA) on suspicious sign-ins.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon Cognito User Pools with adaptive authentication is being evaluated.",
    options: [
      { id: 'A', text: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high." },
      { id: 'B', text: "Configure Amazon Cognito Identity Pools with unauthenticated guest access enabled." },
      { id: 'C', text: "Deploy an AWS WAF rate-based rule to block all IP addresses that submit more than 5 sign-in requests." },
      { id: 'D', text: "Write custom code inside an AWS Lambda pre-authentication trigger to query an external IP database synchronously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high. Cognito User Pools advanced security features include adaptive authentication, which evaluates contextual signals (device fingerprint, IP reputation, location, time) to assess sign-in risk and automatically prompt for MFA or block compromised credential attempts without custom code.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html",
    tags: ["Amazon Cognito", "Cognito", "Hybrid Migration"]
  },
  {
    id: "aws-saa-445",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "Cognito Adaptive Authentication: Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon Cognito to protect user accounts against compromised credential attacks by evaluating sign-in risk levels and prompting for multi-factor authentication (MFA) on suspicious sign-ins.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon Cognito User Pools with adaptive authentication is being evaluated.",
    options: [
      { id: 'A', text: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high." },
      { id: 'B', text: "Write custom code inside an AWS Lambda pre-authentication trigger to query an external IP database synchronously." },
      { id: 'C', text: "Configure Amazon Cognito Identity Pools with unauthenticated guest access enabled." },
      { id: 'D', text: "Deploy an AWS WAF rate-based rule to block all IP addresses that submit more than 5 sign-in requests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable advanced security features in Amazon Cognito User Pools and configure adaptive authentication to enforce MFA when risk is medium or high. Cognito User Pools advanced security features include adaptive authentication, which evaluates contextual signals (device fingerprint, IP reputation, location, time) to assess sign-in risk and automatically prompt for MFA or block compromised credential attempts without custom code.",
    referenceUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html",
    tags: ["Amazon Cognito", "Cognito", "Resilience Failure"]
  },
  {
    id: "aws-saa-446",
    difficulty: "hard",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "API Gateway Mutual TLS (mTLS): Dr Failover",
    scenario: "A multinational enterprise operating mission-critical services requires a comprehensive disaster recovery and business continuity architecture. Regulatory standards dictate strict availability and failover guarantees during regional outages. The system relies on Amazon API Gateway to authenticate IoT devices and B2B partner applications using client X.509 certificates directly at the API Gateway custom domain level.",
    question: "Which architecture or service configuration satisfies these disaster recovery and regional resilience requirements? Amazon API Gateway mutual TLS (mTLS) authentication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon Cognito User Pool with client secret validation." },
      { id: 'B', text: "Deploy an AWS Lambda authorizer that parses client certificates passed in an HTTP Authorization header." },
      { id: 'C', text: "Configure an Application Load Balancer with basic authentication credentials." },
      { id: 'D', text: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket. Amazon API Gateway supports mutual TLS (mTLS) authentication on custom domain names for REST and HTTP APIs. Client certificates are verified directly during the TLS handshake against a truststore stored in S3, authenticating clients before any API request processing begins.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mutual-tls.html",
    tags: ["Amazon API Gateway", "API Gateway", "Dr Failover"]
  },
  {
    id: "aws-saa-447",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "API Gateway Mutual TLS (mTLS): High Load Scale",
    scenario: "A high-volume digital platform experiences sudden, unpredictable surges in user traffic during nationwide marketing campaigns. The engineering team must ensure the architecture scales seamlessly under high throughput while maintaining low latency. The system relies on Amazon API Gateway to authenticate IoT devices and B2B partner applications using client X.509 certificates directly at the API Gateway custom domain level.",
    question: "Which architectural approach should the solutions architect recommend to accommodate this scale? Amazon API Gateway mutual TLS (mTLS) authentication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon Cognito User Pool with client secret validation." },
      { id: 'B', text: "Configure an Application Load Balancer with basic authentication credentials." },
      { id: 'C', text: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket." },
      { id: 'D', text: "Deploy an AWS Lambda authorizer that parses client certificates passed in an HTTP Authorization header." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket. Amazon API Gateway supports mutual TLS (mTLS) authentication on custom domain names for REST and HTTP APIs. Client certificates are verified directly during the TLS handshake against a truststore stored in S3, authenticating clients before any API request processing begins.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mutual-tls.html",
    tags: ["Amazon API Gateway", "API Gateway", "High Load Scale"]
  },
  {
    id: "aws-saa-448",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "API Gateway Mutual TLS (mTLS): Security Compliance",
    scenario: "A financial and healthcare organization must adhere to stringent regulatory compliance and auditing standards. Security auditors require strict enforcement of data protection, least privilege access, and automated governance. The system relies on Amazon API Gateway to authenticate IoT devices and B2B partner applications using client X.509 certificates directly at the API Gateway custom domain level.",
    question: "Which solution properly implements these mandatory security and governance controls? Amazon API Gateway mutual TLS (mTLS) authentication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon Cognito User Pool with client secret validation." },
      { id: 'B', text: "Configure an Application Load Balancer with basic authentication credentials." },
      { id: 'C', text: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket." },
      { id: 'D', text: "Deploy an AWS Lambda authorizer that parses client certificates passed in an HTTP Authorization header." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket. Amazon API Gateway supports mutual TLS (mTLS) authentication on custom domain names for REST and HTTP APIs. Client certificates are verified directly during the TLS handshake against a truststore stored in S3, authenticating clients before any API request processing begins.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mutual-tls.html",
    tags: ["Amazon API Gateway", "API Gateway", "Security Compliance"]
  },
  {
    id: "aws-saa-449",
    difficulty: "easy",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "API Gateway Mutual TLS (mTLS): Hybrid Migration",
    scenario: "An enterprise is migrating enterprise workloads from on-premises data centers to AWS. The architecture must integrate existing operational processes while leveraging cloud-native managed services to minimize operational complexity. The system relies on Amazon API Gateway to authenticate IoT devices and B2B partner applications using client X.509 certificates directly at the API Gateway custom domain level.",
    question: "Which solution enables a robust, highly available architecture while minimizing ongoing operational overhead? Amazon API Gateway mutual TLS (mTLS) authentication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an Amazon Cognito User Pool with client secret validation." },
      { id: 'B', text: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket." },
      { id: 'C', text: "Configure an Application Load Balancer with basic authentication credentials." },
      { id: 'D', text: "Deploy an AWS Lambda authorizer that parses client certificates passed in an HTTP Authorization header." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket. Amazon API Gateway supports mutual TLS (mTLS) authentication on custom domain names for REST and HTTP APIs. Client certificates are verified directly during the TLS handshake against a truststore stored in S3, authenticating clients before any API request processing begins.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mutual-tls.html",
    tags: ["Amazon API Gateway", "API Gateway", "Hybrid Migration"]
  },
  {
    id: "aws-saa-450",
    difficulty: "medium",
    certId: "aws-saa",
    domainId: "d3",
    domainName: "Design Secure Applications and Architectures",
    title: "API Gateway Mutual TLS (mTLS): Resilience Failure",
    scenario: "A distributed microservices application experiences intermittent failures and resource saturation during peak operational windows. The solutions architect must eliminate single points of failure and establish automated recovery mechanisms. The system relies on Amazon API Gateway to authenticate IoT devices and B2B partner applications using client X.509 certificates directly at the API Gateway custom domain level.",
    question: "Which design pattern or service configuration eliminates single points of failure and provides automated recovery? Amazon API Gateway mutual TLS (mTLS) authentication is being evaluated.",
    options: [
      { id: 'A', text: "Deploy an AWS Lambda authorizer that parses client certificates passed in an HTTP Authorization header." },
      { id: 'B', text: "Deploy an Amazon Cognito User Pool with client secret validation." },
      { id: 'C', text: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket." },
      { id: 'D', text: "Configure an Application Load Balancer with basic authentication credentials." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a custom domain name on Amazon API Gateway with mutual TLS (mTLS) enabled and upload the trusted CA certificate bundle to an Amazon S3 bucket. Amazon API Gateway supports mutual TLS (mTLS) authentication on custom domain names for REST and HTTP APIs. Client certificates are verified directly during the TLS handshake against a truststore stored in S3, authenticating clients before any API request processing begins.",
    referenceUrl: "https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mutual-tls.html",
    tags: ["Amazon API Gateway", "API Gateway", "Resilience Failure"]
  }
];

export default AWS_SAA_QUESTIONS_18;
