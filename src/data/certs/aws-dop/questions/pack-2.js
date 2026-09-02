export const AWS_DOP_QUESTIONS_2 = [
  {
    id: "aws-dop-26",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation StackSets multi-region deployments: Operational Strategy (Part 26)",
    scenario: "A multinational fintech banking platform is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudFormation StackSets multi-region deployments. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #26.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: CloudFormation StackSets multi-region deployments in Configuration Management and Infrastructure as Code)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for cloudformation stacksets multi-region deployments utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudformation stacksets multi-region deployments provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Configuration", "Architecture"]
  },
  {
    id: "aws-dop-27",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "S3 cross-region replication with KMS encryption: Operational Strategy (Part 27)",
    scenario: "A healthcare telemedicine network is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding S3 cross-region replication with KMS encryption. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #27.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: S3 cross-region replication with KMS encryption in Resilient Cloud Solutions)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for s3 cross-region replication with kms encryption utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for s3 cross-region replication with kms encryption provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Resilient", "Architecture"]
  },
  {
    id: "aws-dop-28",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch composite alarms across multiple tiers: Operational Strategy (Part 28)",
    scenario: "A high-throughput e-commerce retailer is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudWatch composite alarms across multiple tiers. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #28.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: CloudWatch composite alarms across multiple tiers in Monitoring and Logging)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for cloudwatch composite alarms across multiple tiers utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudwatch composite alarms across multiple tiers provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Monitoring", "Architecture"]
  },
  {
    id: "aws-dop-29",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "CloudWatch synthetic canaries for endpoint latency: Operational Strategy (Part 29)",
    scenario: "A global streaming entertainment platform is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudWatch synthetic canaries for endpoint latency. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #29.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: CloudWatch synthetic canaries for endpoint latency in Incident and Event Response)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for cloudwatch synthetic canaries for endpoint latency utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudwatch synthetic canaries for endpoint latency provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Incident", "Architecture"]
  },
  {
    id: "aws-dop-30",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "Service Control Policies preventing internet gateway attachment: Operational Strategy (Part 30)",
    scenario: "An algorithmic trading exchange is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Service Control Policies preventing internet gateway attachment. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #30.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Service Control Policies preventing internet gateway attachment in Security and Compliance)",
    options: [
      { id: 'A', text: "Deploy native automation for service control policies preventing internet gateway attachment utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for service control policies preventing internet gateway attachment provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Security", "Architecture"]
  },
  {
    id: "aws-dop-31",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated rollbacks on CloudWatch alarms: Operational Strategy (Part 31)",
    scenario: "A logistics and supply chain optimization service is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Automated rollbacks on CloudWatch alarms. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #31.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Automated rollbacks on CloudWatch alarms in SDLC Automation)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for automated rollbacks on cloudwatch alarms utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automated rollbacks on cloudwatch alarms provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  },
  {
    id: "aws-dop-32",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Parameter Store and Secrets Manager dynamic references: Operational Strategy (Part 32)",
    scenario: "An IoT industrial telematics infrastructure is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Parameter Store and Secrets Manager dynamic references. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #32.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Parameter Store and Secrets Manager dynamic references in Configuration Management and Infrastructure as Code)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for parameter store and secrets manager dynamic references utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for parameter store and secrets manager dynamic references provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Configuration", "Architecture"]
  },
  {
    id: "aws-dop-33",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-region active-active Aurora Global Database replication: Operational Strategy (Part 33)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Multi-region active-active Aurora Global Database replication. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #33.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Multi-region active-active Aurora Global Database replication in Resilient Cloud Solutions)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for multi-region active-active aurora global database replication utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for multi-region active-active aurora global database replication provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Resilient", "Architecture"]
  },
  {
    id: "aws-dop-34",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch metric filters on JSON log events: Operational Strategy (Part 34)",
    scenario: "A public sector aerospace engineering department is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudWatch metric filters on JSON log events. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #34.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: CloudWatch metric filters on JSON log events in Monitoring and Logging)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for cloudwatch metric filters on json log events utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudwatch metric filters on json log events provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Monitoring", "Architecture"]
  },
  {
    id: "aws-dop-35",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Systems Manager Automation runbooks for auto-remediation: Operational Strategy (Part 35)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Systems Manager Automation runbooks for auto-remediation. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #35.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Systems Manager Automation runbooks for auto-remediation in Incident and Event Response)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for systems manager automation runbooks for auto-remediation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for systems manager automation runbooks for auto-remediation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Incident", "Architecture"]
  },
  {
    id: "aws-dop-36",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS KMS customer managed key policies and rotation: Operational Strategy (Part 36)",
    scenario: "A digital media publishing network is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS KMS customer managed key policies and rotation. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #36.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: AWS KMS customer managed key policies and rotation in Security and Compliance)",
    options: [
      { id: 'A', text: "Deploy native automation for aws kms customer managed key policies and rotation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws kms customer managed key policies and rotation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Security", "Architecture"]
  },
  {
    id: "aws-dop-37",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact private package publishing: Operational Strategy (Part 37)",
    scenario: "A pharmaceutical clinical trial data service is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CodeArtifact private package publishing. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #37.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: CodeArtifact private package publishing in SDLC Automation)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for codeartifact private package publishing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for codeartifact private package publishing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  },
  {
    id: "aws-dop-38",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation nested stacks and export values: Operational Strategy (Part 38)",
    scenario: "A renewable energy smart-grid operator is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudFormation nested stacks and export values. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #38.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: CloudFormation nested stacks and export values in Configuration Management and Infrastructure as Code)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for cloudformation nested stacks and export values utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudformation nested stacks and export values provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Configuration", "Architecture"]
  },
  {
    id: "aws-dop-39",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Route 53 latency-based routing and health checks: Operational Strategy (Part 39)",
    scenario: "A mobile gaming backend architecture is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Route 53 latency-based routing and health checks. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #39.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Route 53 latency-based routing and health checks in Resilient Cloud Solutions)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for route 53 latency-based routing and health checks utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for route 53 latency-based routing and health checks provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Resilient", "Architecture"]
  },
  {
    id: "aws-dop-40",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Logs Insights high-performance queries: Operational Strategy (Part 40)",
    scenario: "A ride-sharing dispatch system is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudWatch Logs Insights high-performance queries. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #40.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: CloudWatch Logs Insights high-performance queries in Monitoring and Logging)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for cloudwatch logs insights high-performance queries utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudwatch logs insights high-performance queries provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Monitoring", "Architecture"]
  },
  {
    id: "aws-dop-41",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "EventBridge rules routing GuardDuty findings to Lambda: Operational Strategy (Part 41)",
    scenario: "An insurance claims processing engine is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding EventBridge rules routing GuardDuty findings to Lambda. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #41.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: EventBridge rules routing GuardDuty findings to Lambda in Incident and Event Response)",
    options: [
      { id: 'A', text: "Deploy native automation for eventbridge rules routing guardduty findings to lambda utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for eventbridge rules routing guardduty findings to lambda provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Incident", "Architecture"]
  },
  {
    id: "aws-dop-42",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager automatic rotation with Lambda: Operational Strategy (Part 42)",
    scenario: "A commercial airline reservation service is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS Secrets Manager automatic rotation with Lambda. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #42.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AWS Secrets Manager automatic rotation with Lambda in Security and Compliance)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for aws secrets manager automatic rotation with lambda utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws secrets manager automatic rotation with lambda provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Security", "Architecture"]
  },
  {
    id: "aws-dop-43",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodePipeline multi-stage releases: Operational Strategy (Part 43)",
    scenario: "A cybersecurity threat intelligence agency is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CodePipeline multi-stage releases. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #43.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: CodePipeline multi-stage releases in SDLC Automation)",
    options: [
      { id: 'A', text: "Deploy native automation for codepipeline multi-stage releases utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for codepipeline multi-stage releases provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  },
  {
    id: "aws-dop-44",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK construct composition: Operational Strategy (Part 44)",
    scenario: "A real estate property management portal is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS CDK construct composition. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #44.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: AWS CDK construct composition in Configuration Management and Infrastructure as Code)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for aws cdk construct composition utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws cdk construct composition provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Configuration", "Architecture"]
  },
  {
    id: "aws-dop-45",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Auto Scaling lifecycle hooks for graceful termination: Operational Strategy (Part 45)",
    scenario: "An autonomous robotics manufacturing facility is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Auto Scaling lifecycle hooks for graceful termination. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #45.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Auto Scaling lifecycle hooks for graceful termination in Resilient Cloud Solutions)",
    options: [
      { id: 'A', text: "Deploy native automation for auto scaling lifecycle hooks for graceful termination utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for auto scaling lifecycle hooks for graceful termination provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Resilient", "Architecture"]
  },
  {
    id: "aws-dop-46",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray distributed tracing across microservices: Operational Strategy (Part 46)",
    scenario: "A higher education student information system is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS X-Ray distributed tracing across microservices. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #46.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: AWS X-Ray distributed tracing across microservices in Monitoring and Logging)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for aws x-ray distributed tracing across microservices utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws x-ray distributed tracing across microservices provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Monitoring", "Architecture"]
  },
  {
    id: "aws-dop-47",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Incident Manager response plans and escalation contacts: Operational Strategy (Part 47)",
    scenario: "A global hotel hospitality reservation platform is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Incident Manager response plans and escalation contacts. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #47.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Incident Manager response plans and escalation contacts in Incident and Event Response)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for incident manager response plans and escalation contacts utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for incident manager response plans and escalation contacts provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Incident", "Architecture"]
  },
  {
    id: "aws-dop-48",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Config managed rules and automatic remediation: Operational Strategy (Part 48)",
    scenario: "A digital payments settlement processor is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS Config managed rules and automatic remediation. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #48.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: AWS Config managed rules and automatic remediation in Security and Compliance)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for aws config managed rules and automatic remediation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws config managed rules and automatic remediation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Security", "Architecture"]
  },
  {
    id: "aws-dop-49",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeBuild custom build environments: Operational Strategy (Part 49)",
    scenario: "A genomics sequencing data pipeline is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CodeBuild custom build environments. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #49.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: CodeBuild custom build environments in SDLC Automation)",
    options: [
      { id: 'A', text: "Deploy native automation for codebuild custom build environments utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for codebuild custom build environments provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  },
  {
    id: "aws-dop-50",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation drift detection and remediation: Operational Strategy (Part 50)",
    scenario: "A cloud-native telecommunications provider is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudFormation drift detection and remediation. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #50.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: CloudFormation drift detection and remediation in Configuration Management and Infrastructure as Code)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for cloudformation drift detection and remediation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudformation drift detection and remediation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Configuration", "Architecture"]
  }
];

export default AWS_DOP_QUESTIONS_2;
