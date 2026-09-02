export const AWS_SCS_QUESTIONS_4 = [
  {
    id: "aws-scs-76",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM Access Analyzer identifying public and cross-account resource sharing: Operational Strategy (Part 76)",
    scenario: "A multinational fintech banking platform is evaluating AWS Certified Security - Specialty practices specifically regarding IAM Access Analyzer identifying public and cross-account resource sharing. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #76.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: IAM Access Analyzer identifying public and cross-account resource sharing in Identity and Access Management)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for iam access analyzer identifying public and cross-account resource sharing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for iam access analyzer identifying public and cross-account resource sharing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Identity", "Architecture"]
  },
  {
    id: "aws-scs-77",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS Secrets Manager automatic password rotation for RDS databases: Operational Strategy (Part 77)",
    scenario: "A healthcare telemedicine network is evaluating AWS Certified Security - Specialty practices specifically regarding AWS Secrets Manager automatic password rotation for RDS databases. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #77.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AWS Secrets Manager automatic password rotation for RDS databases in Data Protection)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for aws secrets manager automatic password rotation for rds databases utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws secrets manager automatic password rotation for rds databases provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Data", "Architecture"]
  },
  {
    id: "aws-scs-78",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Audit Manager continuous assessment against industry frameworks: Operational Strategy (Part 78)",
    scenario: "A high-throughput e-commerce retailer is evaluating AWS Certified Security - Specialty practices specifically regarding AWS Audit Manager continuous assessment against industry frameworks. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #78.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: AWS Audit Manager continuous assessment against industry frameworks in Management and Security Governance)",
    options: [
      { id: 'A', text: "Deploy native automation for aws audit manager continuous assessment against industry frameworks utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws audit manager continuous assessment against industry frameworks provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Management", "Architecture"]
  },
  {
    id: "aws-scs-79",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Automated incident containment isolating compromised EC2 instances: Operational Strategy (Part 79)",
    scenario: "A global streaming entertainment platform is evaluating AWS Certified Security - Specialty practices specifically regarding Automated incident containment isolating compromised EC2 instances. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #79.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Automated incident containment isolating compromised EC2 instances in Threat Detection and Incident Response)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for automated incident containment isolating compromised ec2 instances utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automated incident containment isolating compromised ec2 instances provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Threat", "Architecture"]
  },
  {
    id: "aws-scs-80",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Amazon Athena SQL queries analyzing VPC Flow Logs and CloudTrail: Operational Strategy (Part 80)",
    scenario: "An algorithmic trading exchange is evaluating AWS Certified Security - Specialty practices specifically regarding Amazon Athena SQL queries analyzing VPC Flow Logs and CloudTrail. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #80.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Amazon Athena SQL queries analyzing VPC Flow Logs and CloudTrail in Security Logging and Monitoring)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for amazon athena sql queries analyzing vpc flow logs and cloudtrail utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for amazon athena sql queries analyzing vpc flow logs and cloudtrail provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Security", "Architecture"]
  },
  {
    id: "aws-scs-81",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "VPC endpoint policies restricting access to designated AWS resources: Operational Strategy (Part 81)",
    scenario: "A logistics and supply chain optimization service is evaluating AWS Certified Security - Specialty practices specifically regarding VPC endpoint policies restricting access to designated AWS resources. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #81.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: VPC endpoint policies restricting access to designated AWS resources in Infrastructure Security)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for vpc endpoint policies restricting access to designated aws resources utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vpc endpoint policies restricting access to designated aws resources provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Infrastructure", "Architecture"]
  },
  {
    id: "aws-scs-82",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Cross-account access with AssumeRole and external ID validation: Operational Strategy (Part 82)",
    scenario: "An IoT industrial telematics infrastructure is evaluating AWS Certified Security - Specialty practices specifically regarding Cross-account access with AssumeRole and external ID validation. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #82.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Cross-account access with AssumeRole and external ID validation in Identity and Access Management)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for cross-account access with assumerole and external id validation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cross-account access with assumerole and external id validation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Identity", "Architecture"]
  },
  {
    id: "aws-scs-83",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon S3 bucket encryption with customer provided KMS keys SSE-KMS: Operational Strategy (Part 83)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating AWS Certified Security - Specialty practices specifically regarding Amazon S3 bucket encryption with customer provided KMS keys SSE-KMS. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #83.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Amazon S3 bucket encryption with customer provided KMS keys SSE-KMS in Data Protection)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for amazon s3 bucket encryption with customer provided kms keys sse-kms utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for amazon s3 bucket encryption with customer provided kms keys sse-kms provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Data", "Architecture"]
  },
  {
    id: "aws-scs-84",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Delegated administrator accounts for security and governance services: Operational Strategy (Part 84)",
    scenario: "A public sector aerospace engineering department is evaluating AWS Certified Security - Specialty practices specifically regarding Delegated administrator accounts for security and governance services. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #84.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Delegated administrator accounts for security and governance services in Management and Security Governance)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for delegated administrator accounts for security and governance services utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for delegated administrator accounts for security and governance services provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Management", "Architecture"]
  },
  {
    id: "aws-scs-85",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon EventBridge rules triggering Lambda for security auto-remediation: Operational Strategy (Part 85)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating AWS Certified Security - Specialty practices specifically regarding Amazon EventBridge rules triggering Lambda for security auto-remediation. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #85.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Amazon EventBridge rules triggering Lambda for security auto-remediation in Threat Detection and Incident Response)",
    options: [
      { id: 'A', text: "Deploy native automation for amazon eventbridge rules triggering lambda for security auto-remediation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for amazon eventbridge rules triggering lambda for security auto-remediation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Threat", "Architecture"]
  },
  {
    id: "aws-scs-86",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "Amazon OpenSearch Service aggregating and visualizing security telemetry: Operational Strategy (Part 86)",
    scenario: "A digital media publishing network is evaluating AWS Certified Security - Specialty practices specifically regarding Amazon OpenSearch Service aggregating and visualizing security telemetry. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #86.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Amazon OpenSearch Service aggregating and visualizing security telemetry in Security Logging and Monitoring)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for amazon opensearch service aggregating and visualizing security telemetry utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for amazon opensearch service aggregating and visualizing security telemetry provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Security", "Architecture"]
  },
  {
    id: "aws-scs-87",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Systems Manager Session Manager replacing bastion host SSH access: Operational Strategy (Part 87)",
    scenario: "A pharmaceutical clinical trial data service is evaluating AWS Certified Security - Specialty practices specifically regarding AWS Systems Manager Session Manager replacing bastion host SSH access. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #87.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AWS Systems Manager Session Manager replacing bastion host SSH access in Infrastructure Security)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for aws systems manager session manager replacing bastion host ssh access utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws systems manager session manager replacing bastion host ssh access provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Infrastructure", "Architecture"]
  },
  {
    id: "aws-scs-88",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "Attribute-Based Access Control ABAC using principal and resource tags: Operational Strategy (Part 88)",
    scenario: "A renewable energy smart-grid operator is evaluating AWS Certified Security - Specialty practices specifically regarding Attribute-Based Access Control ABAC using principal and resource tags. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #88.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Attribute-Based Access Control ABAC using principal and resource tags in Identity and Access Management)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for attribute-based access control abac using principal and resource tags utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for attribute-based access control abac using principal and resource tags provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Identity", "Architecture"]
  },
  {
    id: "aws-scs-89",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "Amazon Macie sensitive data discovery and classification across S3 buckets: Operational Strategy (Part 89)",
    scenario: "A mobile gaming backend architecture is evaluating AWS Certified Security - Specialty practices specifically regarding Amazon Macie sensitive data discovery and classification across S3 buckets. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #89.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Amazon Macie sensitive data discovery and classification across S3 buckets in Data Protection)",
    options: [
      { id: 'A', text: "Deploy native automation for amazon macie sensitive data discovery and classification across s3 buckets utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for amazon macie sensitive data discovery and classification across s3 buckets provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Data", "Architecture"]
  },
  {
    id: "aws-scs-90",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "Security reference architecture SRA multi-account foundational layout: Operational Strategy (Part 90)",
    scenario: "A ride-sharing dispatch system is evaluating AWS Certified Security - Specialty practices specifically regarding Security reference architecture SRA multi-account foundational layout. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #90.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Security reference architecture SRA multi-account foundational layout in Management and Security Governance)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for security reference architecture sra multi-account foundational layout utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for security reference architecture sra multi-account foundational layout provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Management", "Architecture"]
  },
  {
    id: "aws-scs-91",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "Amazon GuardDuty threat intelligence and anomalous activity findings: Operational Strategy (Part 91)",
    scenario: "An insurance claims processing engine is evaluating AWS Certified Security - Specialty practices specifically regarding Amazon GuardDuty threat intelligence and anomalous activity findings. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #91.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Amazon GuardDuty threat intelligence and anomalous activity findings in Threat Detection and Incident Response)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for amazon guardduty threat intelligence and anomalous activity findings utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for amazon guardduty threat intelligence and anomalous activity findings provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Threat", "Architecture"]
  },
  {
    id: "aws-scs-92",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "AWS CloudTrail multi-region organization trails and log validation: Operational Strategy (Part 92)",
    scenario: "A commercial airline reservation service is evaluating AWS Certified Security - Specialty practices specifically regarding AWS CloudTrail multi-region organization trails and log validation. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #92.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AWS CloudTrail multi-region organization trails and log validation in Security Logging and Monitoring)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for aws cloudtrail multi-region organization trails and log validation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws cloudtrail multi-region organization trails and log validation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Security", "Architecture"]
  },
  {
    id: "aws-scs-93",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS WAF web ACL rule groups defending against SQL injection and XSS: Operational Strategy (Part 93)",
    scenario: "A cybersecurity threat intelligence agency is evaluating AWS Certified Security - Specialty practices specifically regarding AWS WAF web ACL rule groups defending against SQL injection and XSS. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #93.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: AWS WAF web ACL rule groups defending against SQL injection and XSS in Infrastructure Security)",
    options: [
      { id: 'A', text: "Deploy native automation for aws waf web acl rule groups defending against sql injection and xss utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws waf web acl rule groups defending against sql injection and xss provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Infrastructure", "Architecture"]
  },
  {
    id: "aws-scs-94",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM policy evaluation logic explicit deny, SCPs, boundaries, and identity: Operational Strategy (Part 94)",
    scenario: "A real estate property management portal is evaluating AWS Certified Security - Specialty practices specifically regarding IAM policy evaluation logic explicit deny, SCPs, boundaries, and identity. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #94.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: IAM policy evaluation logic explicit deny, SCPs, boundaries, and identity in Identity and Access Management)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for iam policy evaluation logic explicit deny, scps, boundaries, and identity utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for iam policy evaluation logic explicit deny, scps, boundaries, and identity provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Identity", "Architecture"]
  },
  {
    id: "aws-scs-95",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d5",
    domainName: "Data Protection",
    title: "AWS KMS envelope encryption with customer managed symmetric keys: Operational Strategy (Part 95)",
    scenario: "An autonomous robotics manufacturing facility is evaluating AWS Certified Security - Specialty practices specifically regarding AWS KMS envelope encryption with customer managed symmetric keys. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #95.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: AWS KMS envelope encryption with customer managed symmetric keys in Data Protection)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for aws kms envelope encryption with customer managed symmetric keys utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws kms envelope encryption with customer managed symmetric keys provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Data", "Architecture"]
  },
  {
    id: "aws-scs-96",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d6",
    domainName: "Management and Security Governance",
    title: "AWS Config managed rules and conformance packs auditing compliance: Operational Strategy (Part 96)",
    scenario: "A higher education student information system is evaluating AWS Certified Security - Specialty practices specifically regarding AWS Config managed rules and conformance packs auditing compliance. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #96.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: AWS Config managed rules and conformance packs auditing compliance in Management and Security Governance)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for aws config managed rules and conformance packs auditing compliance utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws config managed rules and conformance packs auditing compliance provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Management", "Architecture"]
  },
  {
    id: "aws-scs-97",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d1",
    domainName: "Threat Detection and Incident Response",
    title: "AWS Security Hub centralized posture management and compliance checks: Operational Strategy (Part 97)",
    scenario: "A global hotel hospitality reservation platform is evaluating AWS Certified Security - Specialty practices specifically regarding AWS Security Hub centralized posture management and compliance checks. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #97.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AWS Security Hub centralized posture management and compliance checks in Threat Detection and Incident Response)",
    options: [
      { id: 'A', text: "Deploy native automation for aws security hub centralized posture management and compliance checks utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws security hub centralized posture management and compliance checks provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Threat", "Architecture"]
  },
  {
    id: "aws-scs-98",
    difficulty: "medium",
    certId: "aws-scs",
    domainId: "d2",
    domainName: "Security Logging and Monitoring",
    title: "VPC Flow Logs capturing accepted and rejected network traffic: Operational Strategy (Part 98)",
    scenario: "A digital payments settlement processor is evaluating AWS Certified Security - Specialty practices specifically regarding VPC Flow Logs capturing accepted and rejected network traffic. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #98.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: VPC Flow Logs capturing accepted and rejected network traffic in Security Logging and Monitoring)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for vpc flow logs capturing accepted and rejected network traffic utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for vpc flow logs capturing accepted and rejected network traffic provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Security", "Architecture"]
  },
  {
    id: "aws-scs-99",
    difficulty: "easy",
    certId: "aws-scs",
    domainId: "d3",
    domainName: "Infrastructure Security",
    title: "AWS Shield Advanced DDoS mitigation and cost protection: Operational Strategy (Part 99)",
    scenario: "A genomics sequencing data pipeline is evaluating AWS Certified Security - Specialty practices specifically regarding AWS Shield Advanced DDoS mitigation and cost protection. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #99.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: AWS Shield Advanced DDoS mitigation and cost protection in Infrastructure Security)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for aws shield advanced ddos mitigation and cost protection utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws shield advanced ddos mitigation and cost protection provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Infrastructure", "Architecture"]
  },
  {
    id: "aws-scs-100",
    difficulty: "hard",
    certId: "aws-scs",
    domainId: "d4",
    domainName: "Identity and Access Management",
    title: "IAM permission boundaries delegating safe role creation to teams: Operational Strategy (Part 100)",
    scenario: "A cloud-native telecommunications provider is evaluating AWS Certified Security - Specialty practices specifically regarding IAM permission boundaries delegating safe role creation to teams. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #100.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: IAM permission boundaries delegating safe role creation to teams in Identity and Access Management)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for iam permission boundaries delegating safe role creation to teams utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for iam permission boundaries delegating safe role creation to teams provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified Security - Specialty standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-security-specialty/",
    tags: ["SCS-C02", "Identity", "Architecture"]
  }
];

export default AWS_SCS_QUESTIONS_4;
