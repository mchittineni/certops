export const K8S_CKS_QUESTIONS_8 = [
  {
    id: "k8s-cks-176",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Disabling root user and privileged execution on worker nodes: Operational Strategy (Part 176)",
    scenario: "A multinational fintech banking platform is evaluating Certified Kubernetes Security Specialist practices specifically regarding Disabling root user and privileged execution on worker nodes. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #176.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Disabling root user and privileged execution on worker nodes in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Deploy native automation for disabling root user and privileged execution on worker nodes utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for disabling root user and privileged execution on worker nodes provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  },
  {
    id: "k8s-cks-177",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Bound service account token projection with audience validation: Operational Strategy (Part 177)",
    scenario: "A healthcare telemedicine network is evaluating Certified Kubernetes Security Specialist practices specifically regarding Bound service account token projection with audience validation. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #177.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Bound service account token projection with audience validation in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Deploy native automation for bound service account token projection with audience validation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for bound service account token projection with audience validation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  },
  {
    id: "k8s-cks-178",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static manifest analysis using Kube-linter and Conftest: Operational Strategy (Part 178)",
    scenario: "A high-throughput e-commerce retailer is evaluating Certified Kubernetes Security Specialist practices specifically regarding Static manifest analysis using Kube-linter and Conftest. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #178.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Static manifest analysis using Kube-linter and Conftest in Supply Chain Security and Static Analysis)",
    options: [
      { id: 'A', text: "Deploy native automation for static manifest analysis using kube-linter and conftest utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for static manifest analysis using kube-linter and conftest provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Supply", "Architecture"]
  },
  {
    id: "k8s-cks-179",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Investigating node-level audit logs for unauthorized binary execution: Operational Strategy (Part 179)",
    scenario: "A global streaming entertainment platform is evaluating Certified Kubernetes Security Specialist practices specifically regarding Investigating node-level audit logs for unauthorized binary execution. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #179.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Investigating node-level audit logs for unauthorized binary execution in Monitoring, Logging and Runtime Security)",
    options: [
      { id: 'A', text: "Deploy native automation for investigating node-level audit logs for unauthorized binary execution utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for investigating node-level audit logs for unauthorized binary execution provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Monitoring,", "Architecture"]
  },
  {
    id: "k8s-cks-180",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Restricting NodePort services across production namespaces: Operational Strategy (Part 180)",
    scenario: "An algorithmic trading exchange is evaluating Certified Kubernetes Security Specialist practices specifically regarding Restricting NodePort services across production namespaces. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #180.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Restricting NodePort services across production namespaces in Cluster Threat Defense and Admission Control)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for restricting nodeport services across production namespaces utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for restricting nodeport services across production namespaces provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-181",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Kubernetes Benchmark assessment with kube-bench: Operational Strategy (Part 181)",
    scenario: "A logistics and supply chain optimization service is evaluating Certified Kubernetes Security Specialist practices specifically regarding CIS Kubernetes Benchmark assessment with kube-bench. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #181.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: CIS Kubernetes Benchmark assessment with kube-bench in Cluster Setup and Hardening)",
    options: [
      { id: 'A', text: "Deploy native automation for cis kubernetes benchmark assessment with kube-bench utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cis kubernetes benchmark assessment with kube-bench provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-182",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "AppArmor profile enforcement via container annotations: Operational Strategy (Part 182)",
    scenario: "An IoT industrial telematics infrastructure is evaluating Certified Kubernetes Security Specialist practices specifically regarding AppArmor profile enforcement via container annotations. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #182.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: AppArmor profile enforcement via container annotations in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'C', text: "Deploy native automation for apparmor profile enforcement via container annotations utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for apparmor profile enforcement via container annotations provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  },
  {
    id: "k8s-cks-183",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Standards enforce baseline and restricted profiles: Operational Strategy (Part 183)",
    scenario: "A multi-tenant enterprise SaaS provider is evaluating Certified Kubernetes Security Specialist practices specifically regarding Pod Security Standards enforce baseline and restricted profiles. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #183.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Pod Security Standards enforce baseline and restricted profiles in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for pod security standards enforce baseline and restricted profiles utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for pod security standards enforce baseline and restricted profiles provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  },
  {
    id: "k8s-cks-184",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Container image vulnerability scanning with Trivy in CI: Operational Strategy (Part 184)",
    scenario: "A public sector aerospace engineering department is evaluating Certified Kubernetes Security Specialist practices specifically regarding Container image vulnerability scanning with Trivy in CI. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #184.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Container image vulnerability scanning with Trivy in CI in Supply Chain Security and Static Analysis)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for container image vulnerability scanning with trivy in ci utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for container image vulnerability scanning with trivy in ci provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Supply", "Architecture"]
  },
  {
    id: "k8s-cks-185",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Falco runtime security rules detecting shell spawns in pods: Operational Strategy (Part 185)",
    scenario: "An automotive connected-vehicle fleet manager is evaluating Certified Kubernetes Security Specialist practices specifically regarding Falco runtime security rules detecting shell spawns in pods. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #185.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Falco runtime security rules detecting shell spawns in pods in Monitoring, Logging and Runtime Security)",
    options: [
      { id: 'A', text: "Deploy native automation for falco runtime security rules detecting shell spawns in pods utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for falco runtime security rules detecting shell spawns in pods provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Monitoring,", "Architecture"]
  },
  {
    id: "k8s-cks-186",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ValidatingWebhookConfiguration for policy admission enforcement: Operational Strategy (Part 186)",
    scenario: "A digital media publishing network is evaluating Certified Kubernetes Security Specialist practices specifically regarding ValidatingWebhookConfiguration for policy admission enforcement. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #186.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: ValidatingWebhookConfiguration for policy admission enforcement in Cluster Threat Defense and Admission Control)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
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
    id: "k8s-cks-187",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "NetworkPolicy default-deny ingress and egress rules: Operational Strategy (Part 187)",
    scenario: "A pharmaceutical clinical trial data service is evaluating Certified Kubernetes Security Specialist practices specifically regarding NetworkPolicy default-deny ingress and egress rules. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #187.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: NetworkPolicy default-deny ingress and egress rules in Cluster Setup and Hardening)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Deploy native automation for networkpolicy default-deny ingress and egress rules utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for networkpolicy default-deny ingress and egress rules provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-188",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Seccomp profile confinement with RuntimeDefault: Operational Strategy (Part 188)",
    scenario: "A renewable energy smart-grid operator is evaluating Certified Kubernetes Security Specialist practices specifically regarding Seccomp profile confinement with RuntimeDefault. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #188.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Seccomp profile confinement with RuntimeDefault in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for seccomp profile confinement with runtimedefault utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for seccomp profile confinement with runtimedefault provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  },
  {
    id: "k8s-cks-189",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Configuring securityContext readOnlyRootFilesystem: Operational Strategy (Part 189)",
    scenario: "A mobile gaming backend architecture is evaluating Certified Kubernetes Security Specialist practices specifically regarding Configuring securityContext readOnlyRootFilesystem. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #189.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Configuring securityContext readOnlyRootFilesystem in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for configuring securitycontext readonlyrootfilesystem utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for configuring securitycontext readonlyrootfilesystem provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  },
  {
    id: "k8s-cks-190",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Image digest pinning using sha256 immutable references: Operational Strategy (Part 190)",
    scenario: "A ride-sharing dispatch system is evaluating Certified Kubernetes Security Specialist practices specifically regarding Image digest pinning using sha256 immutable references. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #190.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Image digest pinning using sha256 immutable references in Supply Chain Security and Static Analysis)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Deploy native automation for image digest pinning using sha256 immutable references utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for image digest pinning using sha256 immutable references provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Supply", "Architecture"]
  },
  {
    id: "k8s-cks-191",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Kubernetes API server audit logging configuration: Operational Strategy (Part 191)",
    scenario: "An insurance claims processing engine is evaluating Certified Kubernetes Security Specialist practices specifically regarding Kubernetes API server audit logging configuration. The engineering group is resolving cross-account network latency bottlenecks and transient connection timeouts for service tier #191.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Kubernetes API server audit logging configuration in Monitoring, Logging and Runtime Security)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
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
    id: "k8s-cks-192",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "MutatingWebhookConfiguration injecting sidecars securely: Operational Strategy (Part 192)",
    scenario: "A commercial airline reservation service is evaluating Certified Kubernetes Security Specialist practices specifically regarding MutatingWebhookConfiguration injecting sidecars securely. The engineering group must establish centralized audit logging and automated incident containment for security operations for service tier #192.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: MutatingWebhookConfiguration injecting sidecars securely in Cluster Threat Defense and Admission Control)",
    options: [
      { id: 'A', text: "Deploy native automation for mutatingwebhookconfiguration injecting sidecars securely utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for mutatingwebhookconfiguration injecting sidecars securely provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-193",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "etcd encryption at rest with EncryptionConfiguration: Operational Strategy (Part 193)",
    scenario: "A cybersecurity threat intelligence agency is evaluating Certified Kubernetes Security Specialist practices specifically regarding etcd encryption at rest with EncryptionConfiguration. The engineering group is modernizing legacy components to achieve zero-downtime deployments under unpredictable traffic spikes for service tier #193.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: etcd encryption at rest with EncryptionConfiguration in Cluster Setup and Hardening)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for etcd encryption at rest with encryptionconfiguration utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'D', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for etcd encryption at rest with encryptionconfiguration provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-194",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Linux capabilities dropping ALL and adding NET_BIND_SERVICE: Operational Strategy (Part 194)",
    scenario: "A real estate property management portal is evaluating Certified Kubernetes Security Specialist practices specifically regarding Linux capabilities dropping ALL and adding NET_BIND_SERVICE. The engineering group is remediating compliance audit findings regarding unauthorized configuration drift across staging and production for service tier #194.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: Linux capabilities dropping ALL and adding NET_BIND_SERVICE in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for linux capabilities dropping all and adding net_bind_service utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for linux capabilities dropping all and adding net_bind_service provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  },
  {
    id: "k8s-cks-195",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kubernetes Secret encryption with KMS plugin integration: Operational Strategy (Part 195)",
    scenario: "An autonomous robotics manufacturing facility is evaluating Certified Kubernetes Security Specialist practices specifically regarding Kubernetes Secret encryption with KMS plugin integration. The engineering group must minimize mean time to recovery (MTTR) and prevent cascading failures during regional outages for service tier #195.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Kubernetes Secret encryption with KMS plugin integration in Minimize Microservice Vulnerabilities)",
    options: [
      { id: 'A', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'B', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'C', text: "Deploy native automation for kubernetes secret encryption with kms plugin integration utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for kubernetes secret encryption with kms plugin integration provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Minimize", "Architecture"]
  },
  {
    id: "k8s-cks-196",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Cosign cryptographic signature verification before deployment: Operational Strategy (Part 196)",
    scenario: "A higher education student information system is evaluating Certified Kubernetes Security Specialist practices specifically regarding Cosign cryptographic signature verification before deployment. The engineering group is migrating mission-critical workloads while enforcing strict organizational security guardrails for service tier #196.",
    question: "What is the recommended implementation strategy to satisfy these technical requirements according to official best practices? (Focus: Cosign cryptographic signature verification before deployment in Supply Chain Security and Static Analysis)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for cosign cryptographic signature verification before deployment utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for cosign cryptographic signature verification before deployment provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Supply", "Architecture"]
  },
  {
    id: "k8s-cks-197",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting container escape attempts and kernel exploitation: Operational Strategy (Part 197)",
    scenario: "A global hotel hospitality reservation platform is evaluating Certified Kubernetes Security Specialist practices specifically regarding Detecting container escape attempts and kernel exploitation. The engineering group needs to eliminate manual operational toil and enforce declarative infrastructure reconciliation for service tier #197.",
    question: "Which configuration provides the most cost-effective and secure solution to achieve these criteria? (Focus: Detecting container escape attempts and kernel exploitation in Monitoring, Logging and Runtime Security)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for detecting container escape attempts and kernel exploitation utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for detecting container escape attempts and kernel exploitation provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Monitoring,", "Architecture"]
  },
  {
    id: "k8s-cks-198",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Open Policy Agent Gatekeeper ConstraintTemplates and Constraints: Operational Strategy (Part 198)",
    scenario: "A digital payments settlement processor is evaluating Certified Kubernetes Security Specialist practices specifically regarding Open Policy Agent Gatekeeper ConstraintTemplates and Constraints. The engineering group is implementing automated canary analysis with instant rollback capabilities triggered by error budget burn rates for service tier #198.",
    question: "Which architectural approach fulfills these operational objectives while maintaining reliability and minimal engineering overhead? (Focus: Open Policy Agent Gatekeeper ConstraintTemplates and Constraints in Cluster Threat Defense and Admission Control)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." },
      { id: 'C', text: "Deploy native automation for open policy agent gatekeeper constrainttemplates and constraints utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'D', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for open policy agent gatekeeper constrainttemplates and constraints provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-199",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "API server authorization modes Node and RBAC: Operational Strategy (Part 199)",
    scenario: "A genomics sequencing data pipeline is evaluating Certified Kubernetes Security Specialist practices specifically regarding API server authorization modes Node and RBAC. The engineering group must enforce zero-trust identity boundaries and cryptographic verification across all service endpoints for service tier #199.",
    question: "How should the engineering team configure the platform to ensure resilient, automated operation without manual intervention? (Focus: API server authorization modes Node and RBAC in Cluster Setup and Hardening)",
    options: [
      { id: 'A', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'B', text: "Deploy native automation for api server authorization modes node and rbac utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for api server authorization modes node and rbac provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "Cluster", "Architecture"]
  },
  {
    id: "k8s-cks-200",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Restricting hostPath volume mounts with Pod Security Standards: Operational Strategy (Part 200)",
    scenario: "A cloud-native telecommunications provider is evaluating Certified Kubernetes Security Specialist practices specifically regarding Restricting hostPath volume mounts with Pod Security Standards. The engineering group needs to optimize cloud expenditure and implement real-time cost attribution across engineering teams for service tier #200.",
    question: "Which design pattern should be implemented to ensure continuous compliance, automated validation, and high availability? (Focus: Restricting hostPath volume mounts with Pod Security Standards in System Hardening and Kernel Security)",
    options: [
      { id: 'A', text: "Disable continuous monitoring and automated health checks to conserve computational overhead during peak customer traffic." },
      { id: 'B', text: "Deploy native automation for restricting hostpath volume mounts with pod security standards utilizing declarative specifications, validated policy controls, and centralized telemetry tracking." },
      { id: 'C', text: "Execute ad-hoc maintenance scripts directly on live production hosts during off-peak hours without version control tracking." },
      { id: 'D', text: "Grant unconstrained administrative access to application runtime service accounts to bypass permission evaluation checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implementing declarative automation and native policy guardrails for restricting hostpath volume mounts with pod security standards provides reproducible deployments, auditable traceability, and continuous operational resilience as required by Certified Kubernetes Security Specialist standards. Running unversioned ad-hoc scripts introduces configuration drift, granting unrestricted permissions violates least-privilege security mandates, and disabling monitoring blinds engineering teams to critical production anomalies.",
    referenceUrl: "https://www.cncf.io/certification/cks/",
    tags: ["CKS", "System", "Architecture"]
  }
];

export default K8S_CKS_QUESTIONS_8;
