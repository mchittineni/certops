export const AWS_DOP_QUESTIONS_7 = [
  {
    id: "aws-dop-151",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Cross-account pipeline artifact sharing: Operational Strategy (Part 151)",
    scenario: "A multinational fintech banking platform is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Cross-account pipeline artifact sharing. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #151.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Cross-account pipeline artifact sharing in SDLC Automation)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for cross-account pipeline artifact sharing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cross-account pipeline artifact sharing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  },
  {
    id: "aws-dop-152",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "AWS CDK construct composition: Operational Strategy (Part 152)",
    scenario: "A healthcare telemedicine network is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS CDK construct composition. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #152.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AWS CDK construct composition in Configuration Management and Infrastructure as Code)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for aws cdk construct composition utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws cdk construct composition provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Configuration", "Architecture"]
  },
  {
    id: "aws-dop-153",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Multi-region active-active Aurora Global Database replication: Operational Strategy (Part 153)",
    scenario: "A high-throughput e-commerce retailer is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Multi-region active-active Aurora Global Database replication. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #153.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Multi-region active-active Aurora Global Database replication in Resilient Cloud Solutions)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for multi-region active-active aurora global database replication utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for multi-region active-active aurora global database replication provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Resilient", "Architecture"]
  },
  {
    id: "aws-dop-154",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch metric filters on JSON log events: Operational Strategy (Part 154)",
    scenario: "A global streaming entertainment platform is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudWatch metric filters on JSON log events. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #154.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: CloudWatch metric filters on JSON log events in Monitoring and Logging)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for cloudwatch metric filters on json log events utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudwatch metric filters on json log events provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Monitoring", "Architecture"]
  },
  {
    id: "aws-dop-155",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Systems Manager Automation runbooks for auto-remediation: Operational Strategy (Part 155)",
    scenario: "An algorithmic trading exchange is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Systems Manager Automation runbooks for auto-remediation. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #155.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Systems Manager Automation runbooks for auto-remediation in Incident and Event Response)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for systems manager automation runbooks for auto-remediation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for systems manager automation runbooks for auto-remediation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Incident", "Architecture"]
  },
  {
    id: "aws-dop-156",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS KMS customer managed key policies and rotation: Operational Strategy (Part 156)",
    scenario: "A logistics and supply chain optimization service is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS KMS customer managed key policies and rotation. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #156.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: AWS KMS customer managed key policies and rotation in Security and Compliance)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for aws kms customer managed key policies and rotation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws kms customer managed key policies and rotation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Security", "Architecture"]
  },
  {
    id: "aws-dop-157",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "Automated rollbacks on CloudWatch alarms: Operational Strategy (Part 157)",
    scenario: "An IoT industrial telematics infrastructure is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Automated rollbacks on CloudWatch alarms. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #157.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Automated rollbacks on CloudWatch alarms in SDLC Automation)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for automated rollbacks on cloudwatch alarms utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automated rollbacks on cloudwatch alarms provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  },
  {
    id: "aws-dop-158",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation drift detection and remediation: Operational Strategy (Part 158)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudFormation drift detection and remediation. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #158.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: CloudFormation drift detection and remediation in Configuration Management and Infrastructure as Code)",
    options: [
      { id: 'A', text: "Deploy native automation for cloudformation drift detection and remediation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudformation drift detection and remediation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Configuration", "Architecture"]
  },
  {
    id: "aws-dop-159",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Route 53 latency-based routing and health checks: Operational Strategy (Part 159)",
    scenario: "A public sector aerospace engineering department is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Route 53 latency-based routing and health checks. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #159.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Route 53 latency-based routing and health checks in Resilient Cloud Solutions)",
    options: [
      { id: 'A', text: "Deploy native automation for route 53 latency-based routing and health checks utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for route 53 latency-based routing and health checks provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Resilient", "Architecture"]
  },
  {
    id: "aws-dop-160",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "CloudWatch Logs Insights high-performance queries: Operational Strategy (Part 160)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudWatch Logs Insights high-performance queries. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #160.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: CloudWatch Logs Insights high-performance queries in Monitoring and Logging)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for cloudwatch logs insights high-performance queries utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cloudwatch logs insights high-performance queries provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Monitoring", "Architecture"]
  },
  {
    id: "aws-dop-161",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "EventBridge rules routing GuardDuty findings to Lambda: Operational Strategy (Part 161)",
    scenario: "A digital media publishing network is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding EventBridge rules routing GuardDuty findings to Lambda. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #161.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: EventBridge rules routing GuardDuty findings to Lambda in Incident and Event Response)",
    options: [
      { id: 'A', text: "Deploy native automation for eventbridge rules routing guardduty findings to lambda utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for eventbridge rules routing guardduty findings to lambda provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Incident", "Architecture"]
  },
  {
    id: "aws-dop-162",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Secrets Manager automatic rotation with Lambda: Operational Strategy (Part 162)",
    scenario: "A pharmaceutical clinical trial data service is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS Secrets Manager automatic rotation with Lambda. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #162.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AWS Secrets Manager automatic rotation with Lambda in Security and Compliance)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for aws secrets manager automatic rotation with lambda utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws secrets manager automatic rotation with lambda provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Security", "Architecture"]
  },
  {
    id: "aws-dop-163",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeArtifact private package publishing: Operational Strategy (Part 163)",
    scenario: "A renewable energy smart-grid operator is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CodeArtifact private package publishing. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #163.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: CodeArtifact private package publishing in SDLC Automation)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for codeartifact private package publishing utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for codeartifact private package publishing provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  },
  {
    id: "aws-dop-164",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "Systems Manager State Manager associations: Operational Strategy (Part 164)",
    scenario: "A mobile gaming backend architecture is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Systems Manager State Manager associations. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #164.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Systems Manager State Manager associations in Configuration Management and Infrastructure as Code)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for systems manager state manager associations utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for systems manager state manager associations provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Configuration", "Architecture"]
  },
  {
    id: "aws-dop-165",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "Auto Scaling lifecycle hooks for graceful termination: Operational Strategy (Part 165)",
    scenario: "A ride-sharing dispatch system is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Auto Scaling lifecycle hooks for graceful termination. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #165.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Auto Scaling lifecycle hooks for graceful termination in Resilient Cloud Solutions)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for auto scaling lifecycle hooks for graceful termination utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for auto scaling lifecycle hooks for graceful termination provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Resilient", "Architecture"]
  },
  {
    id: "aws-dop-166",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "AWS X-Ray distributed tracing across microservices: Operational Strategy (Part 166)",
    scenario: "An insurance claims processing engine is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS X-Ray distributed tracing across microservices. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #166.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: AWS X-Ray distributed tracing across microservices in Monitoring and Logging)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for aws x-ray distributed tracing across microservices utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws x-ray distributed tracing across microservices provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Monitoring", "Architecture"]
  },
  {
    id: "aws-dop-167",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Incident Manager response plans and escalation contacts: Operational Strategy (Part 167)",
    scenario: "A commercial airline reservation service is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Incident Manager response plans and escalation contacts. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #167.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Incident Manager response plans and escalation contacts in Incident and Event Response)",
    options: [
      { id: 'A', text: "Deploy native automation for incident manager response plans and escalation contacts utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for incident manager response plans and escalation contacts provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Incident", "Architecture"]
  },
  {
    id: "aws-dop-168",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "AWS Config managed rules and automatic remediation: Operational Strategy (Part 168)",
    scenario: "A cybersecurity threat intelligence agency is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding AWS Config managed rules and automatic remediation. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #168.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: AWS Config managed rules and automatic remediation in Security and Compliance)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for aws config managed rules and automatic remediation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for aws config managed rules and automatic remediation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Security", "Architecture"]
  },
  {
    id: "aws-dop-169",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodePipeline multi-stage releases: Operational Strategy (Part 169)",
    scenario: "A real estate property management portal is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CodePipeline multi-stage releases. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #169.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: CodePipeline multi-stage releases in SDLC Automation)",
    options: [
      { id: 'A', text: "Deploy native automation for codepipeline multi-stage releases utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for codepipeline multi-stage releases provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  },
  {
    id: "aws-dop-170",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d2",
    domainName: "Configuration Management and Infrastructure as Code",
    title: "CloudFormation StackSets multi-region deployments: Operational Strategy (Part 170)",
    scenario: "An autonomous robotics manufacturing facility is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CloudFormation StackSets multi-region deployments. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #170.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: CloudFormation StackSets multi-region deployments in Configuration Management and Infrastructure as Code)",
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
    id: "aws-dop-171",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d3",
    domainName: "Resilient Cloud Solutions",
    title: "DynamoDB global tables multi-region failover: Operational Strategy (Part 171)",
    scenario: "A higher education student information system is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding DynamoDB global tables multi-region failover. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #171.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: DynamoDB global tables multi-region failover in Resilient Cloud Solutions)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for dynamodb global tables multi-region failover utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for dynamodb global tables multi-region failover provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Resilient", "Architecture"]
  },
  {
    id: "aws-dop-172",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d4",
    domainName: "Monitoring and Logging",
    title: "Amazon EventBridge default and custom event buses: Operational Strategy (Part 172)",
    scenario: "A global hotel hospitality reservation platform is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Amazon EventBridge default and custom event buses. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #172.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Amazon EventBridge default and custom event buses in Monitoring and Logging)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for amazon eventbridge default and custom event buses utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for amazon eventbridge default and custom event buses provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Monitoring", "Architecture"]
  },
  {
    id: "aws-dop-173",
    difficulty: "medium",
    certId: "aws-dop",
    domainId: "d5",
    domainName: "Incident and Event Response",
    title: "Automated EBS snapshot copy across AWS regions for DR: Operational Strategy (Part 173)",
    scenario: "A digital payments settlement processor is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding Automated EBS snapshot copy across AWS regions for DR. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #173.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Automated EBS snapshot copy across AWS regions for DR in Incident and Event Response)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for automated ebs snapshot copy across aws regions for dr utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for automated ebs snapshot copy across aws regions for dr provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Incident", "Architecture"]
  },
  {
    id: "aws-dop-174",
    difficulty: "easy",
    certId: "aws-dop",
    domainId: "d6",
    domainName: "Security and Compliance",
    title: "IAM permission boundaries for delegated developer roles: Operational Strategy (Part 174)",
    scenario: "A genomics sequencing data pipeline is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding IAM permission boundaries for delegated developer roles. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #174.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: IAM permission boundaries for delegated developer roles in Security and Compliance)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for iam permission boundaries for delegated developer roles utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for iam permission boundaries for delegated developer roles provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "Security", "Architecture"]
  },
  {
    id: "aws-dop-175",
    difficulty: "hard",
    certId: "aws-dop",
    domainId: "d1",
    domainName: "SDLC Automation",
    title: "CodeBuild custom build environments: Operational Strategy (Part 175)",
    scenario: "A cloud-native telecommunications provider is evaluating AWS Certified DevOps Engineer - Professional practices specifically regarding CodeBuild custom build environments. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #175.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: CodeBuild custom build environments in SDLC Automation)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Deploy native automation for codebuild custom build environments utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for codebuild custom build environments provides reproducible deployments, auditable traceability, and continuous operational resilience as required by AWS Certified DevOps Engineer - Professional standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    tags: ["DOP-C02", "SDLC", "Architecture"]
  }
];

export default AWS_DOP_QUESTIONS_7;
