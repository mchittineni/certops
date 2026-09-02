export const K8S_CKS_QUESTIONS_9 = [
  {
    id: "k8s-cks-201",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "ServiceAccount automountServiceAccountToken set to false: Operational Strategy (Part 201)",
    scenario: "A multinational fintech banking platform is evaluating Certified Kubernetes Security Specialist practices specifically regarding ServiceAccount automountServiceAccountToken set to false. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #201.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: ServiceAccount automountServiceAccountToken set to false in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for serviceaccount automountserviceaccounttoken set to false utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for serviceaccount automountserviceaccounttoken set to false provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  },
  {
    id: "k8s-cks-202",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Base image minimization using Google distroless containers: Operational Strategy (Part 202)",
    scenario: "A healthcare telemedicine network is evaluating Certified Kubernetes Security Specialist practices specifically regarding Base image minimization using Google distroless containers. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #202.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Base image minimization using Google distroless containers in Supply Chain Security and Static Analysis)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for base image minimization using google distroless containers utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for base image minimization using google distroless containers provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Supply", "Architecture"]
  },
  {
    id: "k8s-cks-203",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Analyzing suspicious network connections from compromised pods: Operational Strategy (Part 203)",
    scenario: "A high-throughput e-commerce retailer is evaluating Certified Kubernetes Security Specialist practices specifically regarding Analyzing suspicious network connections from compromised pods. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #203.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Analyzing suspicious network connections from compromised pods in Monitoring, Logging and Runtime Security)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for analyzing suspicious network connections from compromised pods utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for analyzing suspicious network connections from compromised pods provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Monitoring,", "Architecture"]
  },
  {
    id: "k8s-cks-204",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Kyverno cluster policies preventing privileged containers: Operational Strategy (Part 204)",
    scenario: "A global streaming entertainment platform is evaluating Certified Kubernetes Security Specialist practices specifically regarding Kyverno cluster policies preventing privileged containers. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #204.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Kyverno cluster policies preventing privileged containers in Cluster Threat Defense and Admission Control)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for kyverno cluster policies preventing privileged containers utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for kyverno cluster policies preventing privileged containers provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-205",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Restricting anonymous authentication on kubelet port 10250: Operational Strategy (Part 205)",
    scenario: "An algorithmic trading exchange is evaluating Certified Kubernetes Security Specialist practices specifically regarding Restricting anonymous authentication on kubelet port 10250. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #205.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Restricting anonymous authentication on kubelet port 10250 in Cluster Setup and Hardening)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for restricting anonymous authentication on kubelet port 10250 utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for restricting anonymous authentication on kubelet port 10250 provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-206",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling root user and privileged execution on worker nodes: Operational Strategy (Part 206)",
    scenario: "A logistics and supply chain optimization service is evaluating Certified Kubernetes Security Specialist practices specifically regarding Disabling root user and privileged execution on worker nodes. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #206.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Disabling root user and privileged execution on worker nodes in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for disabling root user and privileged execution on worker nodes utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for disabling root user and privileged execution on worker nodes provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  },
  {
    id: "k8s-cks-207",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Bound service account token projection with audience validation: Operational Strategy (Part 207)",
    scenario: "An IoT industrial telematics infrastructure is evaluating Certified Kubernetes Security Specialist practices specifically regarding Bound service account token projection with audience validation. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #207.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Bound service account token projection with audience validation in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for bound service account token projection with audience validation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for bound service account token projection with audience validation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  },
  {
    id: "k8s-cks-208",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static manifest analysis using Kube-linter and Conftest: Operational Strategy (Part 208)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating Certified Kubernetes Security Specialist practices specifically regarding Static manifest analysis using Kube-linter and Conftest. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #208.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Static manifest analysis using Kube-linter and Conftest in Supply Chain Security and Static Analysis)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for static manifest analysis using kube-linter and conftest utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for static manifest analysis using kube-linter and conftest provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Supply", "Architecture"]
  },
  {
    id: "k8s-cks-209",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Investigating node-level audit logs for unauthorized binary execution: Operational Strategy (Part 209)",
    scenario: "A public sector aerospace engineering department is evaluating Certified Kubernetes Security Specialist practices specifically regarding Investigating node-level audit logs for unauthorized binary execution. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #209.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Investigating node-level audit logs for unauthorized binary execution in Monitoring, Logging and Runtime Security)",
    options: [
      { id: 'A', text: "Deploy native automation for investigating node-level audit logs for unauthorized binary execution utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for investigating node-level audit logs for unauthorized binary execution provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Monitoring,", "Architecture"]
  },
  {
    id: "k8s-cks-210",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Restricting NodePort services across production namespaces: Operational Strategy (Part 210)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating Certified Kubernetes Security Specialist practices specifically regarding Restricting NodePort services across production namespaces. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #210.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Restricting NodePort services across production namespaces in Cluster Threat Defense and Admission Control)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for restricting nodeport services across production namespaces utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for restricting nodeport services across production namespaces provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-211",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Kubernetes Benchmark assessment with kube-bench: Operational Strategy (Part 211)",
    scenario: "A digital media publishing network is evaluating Certified Kubernetes Security Specialist practices specifically regarding CIS Kubernetes Benchmark assessment with kube-bench. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #211.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: CIS Kubernetes Benchmark assessment with kube-bench in Cluster Setup and Hardening)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for cis kubernetes benchmark assessment with kube-bench utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cis kubernetes benchmark assessment with kube-bench provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-212",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "AppArmor profile enforcement via container annotations: Operational Strategy (Part 212)",
    scenario: "A pharmaceutical clinical trial data service is evaluating Certified Kubernetes Security Specialist practices specifically regarding AppArmor profile enforcement via container annotations. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #212.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AppArmor profile enforcement via container annotations in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for apparmor profile enforcement via container annotations utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for apparmor profile enforcement via container annotations provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  },
  {
    id: "k8s-cks-213",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Standards enforce baseline and restricted profiles: Operational Strategy (Part 213)",
    scenario: "A renewable energy smart-grid operator is evaluating Certified Kubernetes Security Specialist practices specifically regarding Pod Security Standards enforce baseline and restricted profiles. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #213.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Pod Security Standards enforce baseline and restricted profiles in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Deploy native automation for pod security standards enforce baseline and restricted profiles utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for pod security standards enforce baseline and restricted profiles provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  },
  {
    id: "k8s-cks-214",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container image vulnerability scanning with Trivy in CI: Operational Strategy (Part 214)",
    scenario: "A mobile gaming backend architecture is evaluating Certified Kubernetes Security Specialist practices specifically regarding Container image vulnerability scanning with Trivy in CI. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #214.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Container image vulnerability scanning with Trivy in CI in Supply Chain Security and Static Analysis)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for container image vulnerability scanning with trivy in ci utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for container image vulnerability scanning with trivy in ci provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Supply", "Architecture"]
  },
  {
    id: "k8s-cks-215",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco runtime security rules detecting shell spawns in pods: Operational Strategy (Part 215)",
    scenario: "A ride-sharing dispatch system is evaluating Certified Kubernetes Security Specialist practices specifically regarding Falco runtime security rules detecting shell spawns in pods. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #215.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Falco runtime security rules detecting shell spawns in pods in Monitoring, Logging and Runtime Security)",
    options: [
      { id: 'A', text: "Deploy native automation for falco runtime security rules detecting shell spawns in pods utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for falco runtime security rules detecting shell spawns in pods provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Monitoring,", "Architecture"]
  },
  {
    id: "k8s-cks-216",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ValidatingWebhookConfiguration for policy admission enforcement: Operational Strategy (Part 216)",
    scenario: "An insurance claims processing engine is evaluating Certified Kubernetes Security Specialist practices specifically regarding ValidatingWebhookConfiguration for policy admission enforcement. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #216.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: ValidatingWebhookConfiguration for policy admission enforcement in Cluster Threat Defense and Admission Control)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for validatingwebhookconfiguration for policy admission enforcement utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for validatingwebhookconfiguration for policy admission enforcement provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-217",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "NetworkPolicy default-deny ingress and egress rules: Operational Strategy (Part 217)",
    scenario: "A commercial airline reservation service is evaluating Certified Kubernetes Security Specialist practices specifically regarding NetworkPolicy default-deny ingress and egress rules. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #217.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: NetworkPolicy default-deny ingress and egress rules in Cluster Setup and Hardening)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for networkpolicy default-deny ingress and egress rules utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for networkpolicy default-deny ingress and egress rules provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-218",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Seccomp profile confinement with RuntimeDefault: Operational Strategy (Part 218)",
    scenario: "A cybersecurity threat intelligence agency is evaluating Certified Kubernetes Security Specialist practices specifically regarding Seccomp profile confinement with RuntimeDefault. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #218.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Seccomp profile confinement with RuntimeDefault in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Deploy native automation for seccomp profile confinement with runtimedefault utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for seccomp profile confinement with runtimedefault provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  },
  {
    id: "k8s-cks-219",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Configuring securityContext readOnlyRootFilesystem: Operational Strategy (Part 219)",
    scenario: "A real estate property management portal is evaluating Certified Kubernetes Security Specialist practices specifically regarding Configuring securityContext readOnlyRootFilesystem. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #219.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Configuring securityContext readOnlyRootFilesystem in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for configuring securitycontext readonlyrootfilesystem utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for configuring securitycontext readonlyrootfilesystem provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  },
  {
    id: "k8s-cks-220",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image digest pinning using sha256 immutable references: Operational Strategy (Part 220)",
    scenario: "An autonomous robotics manufacturing facility is evaluating Certified Kubernetes Security Specialist practices specifically regarding Image digest pinning using sha256 immutable references. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #220.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Image digest pinning using sha256 immutable references in Supply Chain Security and Static Analysis)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Deploy native automation for image digest pinning using sha256 immutable references utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for image digest pinning using sha256 immutable references provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Supply", "Architecture"]
  },
  {
    id: "k8s-cks-221",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Kubernetes API server audit logging configuration: Operational Strategy (Part 221)",
    scenario: "A higher education student information system is evaluating Certified Kubernetes Security Specialist practices specifically regarding Kubernetes API server audit logging configuration. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #221.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Kubernetes API server audit logging configuration in Monitoring, Logging and Runtime Security)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for kubernetes api server audit logging configuration utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for kubernetes api server audit logging configuration provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Monitoring,", "Architecture"]
  },
  {
    id: "k8s-cks-222",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "MutatingWebhookConfiguration injecting sidecars securely: Operational Strategy (Part 222)",
    scenario: "A global hotel hospitality reservation platform is evaluating Certified Kubernetes Security Specialist practices specifically regarding MutatingWebhookConfiguration injecting sidecars securely. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #222.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: MutatingWebhookConfiguration injecting sidecars securely in Cluster Threat Defense and Admission Control)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for mutatingwebhookconfiguration injecting sidecars securely utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for mutatingwebhookconfiguration injecting sidecars securely provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-223",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "etcd encryption at rest with EncryptionConfiguration: Operational Strategy (Part 223)",
    scenario: "A digital payments settlement processor is evaluating Certified Kubernetes Security Specialist practices specifically regarding etcd encryption at rest with EncryptionConfiguration. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #223.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: etcd encryption at rest with EncryptionConfiguration in Cluster Setup and Hardening)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for etcd encryption at rest with encryptionconfiguration utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for etcd encryption at rest with encryptionconfiguration provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-224",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux capabilities dropping ALL and adding NET_BIND_SERVICE: Operational Strategy (Part 224)",
    scenario: "A genomics sequencing data pipeline is evaluating Certified Kubernetes Security Specialist practices specifically regarding Linux capabilities dropping ALL and adding NET_BIND_SERVICE. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #224.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Linux capabilities dropping ALL and adding NET_BIND_SERVICE in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Deploy native automation for linux capabilities dropping all and adding net_bind_service utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for linux capabilities dropping all and adding net_bind_service provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  },
  {
    id: "k8s-cks-225",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kubernetes Secret encryption with KMS plugin integration: Operational Strategy (Part 225)",
    scenario: "A cloud-native telecommunications provider is evaluating Certified Kubernetes Security Specialist practices specifically regarding Kubernetes Secret encryption with KMS plugin integration. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #225.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Kubernetes Secret encryption with KMS plugin integration in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for kubernetes secret encryption with kms plugin integration utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for kubernetes secret encryption with kms plugin integration provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  }
];

export default K8S_CKS_QUESTIONS_9;
