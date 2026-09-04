export const CNCF_CGOA_QUESTIONS_12 = [
  {
    id: "cncf-cgoa-276",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Single Source of Truth (SSOT): Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates GitOps Fundamentals to ensure that an enterprise's infrastructure and application runtime state can always be deterministically reproduced from scratch.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Establishing Git repositories as the authoritative definition of system state is under consideration.",
    options: [
      { id: 'A', text: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside." },
      { id: 'B', text: "Allow engineers to make direct console tweaks as long as they document them in chat." },
      { id: 'C', text: "Treat the live running cluster as the source of truth and export YAML from it." },
      { id: 'D', text: "Rely on multiple conflicting configuration databases simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside. In GitOps, Git is the canonical Single Source of Truth (SSOT). The entire system state\u2014infrastructure, configurations, network policies, application manifests\u2014is declared in Git. Any change not committed to Git is considered illegitimate and will be overwritten by the reconciliation agent.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Fundamentals", "Single Source of Truth", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-277",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Single Source of Truth (SSOT): High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates GitOps Fundamentals to ensure that an enterprise's infrastructure and application runtime state can always be deterministically reproduced from scratch.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Establishing Git repositories as the authoritative definition of system state is under consideration.",
    options: [
      { id: 'A', text: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside." },
      { id: 'B', text: "Allow engineers to make direct console tweaks as long as they document them in chat." },
      { id: 'C', text: "Treat the live running cluster as the source of truth and export YAML from it." },
      { id: 'D', text: "Rely on multiple conflicting configuration databases simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside. In GitOps, Git is the canonical Single Source of Truth (SSOT). The entire system state\u2014infrastructure, configurations, network policies, application manifests\u2014is declared in Git. Any change not committed to Git is considered illegitimate and will be overwritten by the reconciliation agent.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Fundamentals", "Single Source of Truth", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-278",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Single Source of Truth (SSOT): Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates GitOps Fundamentals to ensure that an enterprise's infrastructure and application runtime state can always be deterministically reproduced from scratch.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Establishing Git repositories as the authoritative definition of system state is under consideration.",
    options: [
      { id: 'A', text: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside." },
      { id: 'B', text: "Allow engineers to make direct console tweaks as long as they document them in chat." },
      { id: 'C', text: "Treat the live running cluster as the source of truth and export YAML from it." },
      { id: 'D', text: "Rely on multiple conflicting configuration databases simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside. In GitOps, Git is the canonical Single Source of Truth (SSOT). The entire system state\u2014infrastructure, configurations, network policies, application manifests\u2014is declared in Git. Any change not committed to Git is considered illegitimate and will be overwritten by the reconciliation agent.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Fundamentals", "Single Source of Truth", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-279",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Single Source of Truth (SSOT): Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates GitOps Fundamentals to ensure that an enterprise's infrastructure and application runtime state can always be deterministically reproduced from scratch.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Establishing Git repositories as the authoritative definition of system state is under consideration.",
    options: [
      { id: 'A', text: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside." },
      { id: 'B', text: "Allow engineers to make direct console tweaks as long as they document them in chat." },
      { id: 'C', text: "Treat the live running cluster as the source of truth and export YAML from it." },
      { id: 'D', text: "Rely on multiple conflicting configuration databases simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside. In GitOps, Git is the canonical Single Source of Truth (SSOT). The entire system state\u2014infrastructure, configurations, network policies, application manifests\u2014is declared in Git. Any change not committed to Git is considered illegitimate and will be overwritten by the reconciliation agent.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Fundamentals", "Single Source of Truth", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-280",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Single Source of Truth (SSOT): Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates GitOps Fundamentals to ensure that an enterprise's infrastructure and application runtime state can always be deterministically reproduced from scratch.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Establishing Git repositories as the authoritative definition of system state is under consideration.",
    options: [
      { id: 'A', text: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside." },
      { id: 'B', text: "Allow engineers to make direct console tweaks as long as they document them in chat." },
      { id: 'C', text: "Treat the live running cluster as the source of truth and export YAML from it." },
      { id: 'D', text: "Rely on multiple conflicting configuration databases simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish the Git repository as the Single Source of Truth (SSOT) where all configuration, infrastructure, and deployment manifests reside. In GitOps, Git is the canonical Single Source of Truth (SSOT). The entire system state\u2014infrastructure, configurations, network policies, application manifests\u2014is declared in Git. Any change not committed to Git is considered illegitimate and will be overwritten by the reconciliation agent.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps Fundamentals", "Single Source of Truth", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-281",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Continuous Drift Detection and Self-Healing: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Drift & Self-Healing to prevent configuration drift from accumulating across a fleet of 50 Kubernetes clusters over time.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Continuous feedback loops identifying out-of-band changes and restoring state is under consideration.",
    options: [
      { id: 'A', text: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state." },
      { id: 'B', text: "Disable reconciliation and review drift manually once a month." },
      { id: 'C', text: "Allow developers to keep manual cluster changes indefinitely." },
      { id: 'D', text: "Delete the cluster whenever drift is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state. Drift occurs when running cluster state diverges from desired Git state (e.g., emergency patches, scaling tweaks). When self-healing is enabled, the GitOps controller immediately detects this divergence and re-applies the Git manifest, neutralizing configuration drift and restoring compliance.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/#automatic-self-healing",
    tags: ["Drift & Self-Healing", "Drift Self-Healing", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-282",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Continuous Drift Detection and Self-Healing: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Drift & Self-Healing to prevent configuration drift from accumulating across a fleet of 50 Kubernetes clusters over time.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Continuous feedback loops identifying out-of-band changes and restoring state is under consideration.",
    options: [
      { id: 'A', text: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state." },
      { id: 'B', text: "Disable reconciliation and review drift manually once a month." },
      { id: 'C', text: "Allow developers to keep manual cluster changes indefinitely." },
      { id: 'D', text: "Delete the cluster whenever drift is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state. Drift occurs when running cluster state diverges from desired Git state (e.g., emergency patches, scaling tweaks). When self-healing is enabled, the GitOps controller immediately detects this divergence and re-applies the Git manifest, neutralizing configuration drift and restoring compliance.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/#automatic-self-healing",
    tags: ["Drift & Self-Healing", "Drift Self-Healing", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-283",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Continuous Drift Detection and Self-Healing: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Drift & Self-Healing to prevent configuration drift from accumulating across a fleet of 50 Kubernetes clusters over time.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Continuous feedback loops identifying out-of-band changes and restoring state is under consideration.",
    options: [
      { id: 'A', text: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state." },
      { id: 'B', text: "Disable reconciliation and review drift manually once a month." },
      { id: 'C', text: "Allow developers to keep manual cluster changes indefinitely." },
      { id: 'D', text: "Delete the cluster whenever drift is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state. Drift occurs when running cluster state diverges from desired Git state (e.g., emergency patches, scaling tweaks). When self-healing is enabled, the GitOps controller immediately detects this divergence and re-applies the Git manifest, neutralizing configuration drift and restoring compliance.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/#automatic-self-healing",
    tags: ["Drift & Self-Healing", "Drift Self-Healing", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-284",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Continuous Drift Detection and Self-Healing: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Drift & Self-Healing to prevent configuration drift from accumulating across a fleet of 50 Kubernetes clusters over time.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Continuous feedback loops identifying out-of-band changes and restoring state is under consideration.",
    options: [
      { id: 'A', text: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state." },
      { id: 'B', text: "Disable reconciliation and review drift manually once a month." },
      { id: 'C', text: "Allow developers to keep manual cluster changes indefinitely." },
      { id: 'D', text: "Delete the cluster whenever drift is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state. Drift occurs when running cluster state diverges from desired Git state (e.g., emergency patches, scaling tweaks). When self-healing is enabled, the GitOps controller immediately detects this divergence and re-applies the Git manifest, neutralizing configuration drift and restoring compliance.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/#automatic-self-healing",
    tags: ["Drift & Self-Healing", "Drift Self-Healing", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-285",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Continuous Drift Detection and Self-Healing: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Drift & Self-Healing to prevent configuration drift from accumulating across a fleet of 50 Kubernetes clusters over time.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Continuous feedback loops identifying out-of-band changes and restoring state is under consideration.",
    options: [
      { id: 'A', text: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state." },
      { id: 'B', text: "Disable reconciliation and review drift manually once a month." },
      { id: 'C', text: "Allow developers to keep manual cluster changes indefinitely." },
      { id: 'D', text: "Delete the cluster whenever drift is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable automated self-healing in the GitOps controller so that any out-of-band cluster modifications are automatically overwritten with the Git desired state. Drift occurs when running cluster state diverges from desired Git state (e.g., emergency patches, scaling tweaks). When self-healing is enabled, the GitOps controller immediately detects this divergence and re-applies the Git manifest, neutralizing configuration drift and restoring compliance.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto-sync/#automatic-self-healing",
    tags: ["Drift & Self-Healing", "Drift Self-Healing", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-286",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Declarative vs Imperative Deployment Tools: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Deployment Tooling to understand why declarative tools like Argo CD and Flux are preferred over imperative shell scripts for enterprise platform scaling.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Contrasting declarative GitOps tools (Argo CD, Flux) with imperative orchestration scripts is under consideration.",
    options: [
      { id: 'A', text: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift." },
      { id: 'B', text: "Imperative scripts automatically provide drift detection out of the box." },
      { id: 'C', text: "Declarative tools require full root administrative access on every node host." },
      { id: 'D', text: "Imperative scripts eliminate the need for version control." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift. Imperative scripts (`kubectl apply`, bash) execute a one-time sequence of commands without understanding drift or verifying long-term state alignment. Declarative GitOps engines maintain an ongoing active control loop, continuously watching and converging state over time.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Deployment Tooling", "Declarative Tooling", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-287",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Declarative vs Imperative Deployment Tools: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Deployment Tooling to understand why declarative tools like Argo CD and Flux are preferred over imperative shell scripts for enterprise platform scaling.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Contrasting declarative GitOps tools (Argo CD, Flux) with imperative orchestration scripts is under consideration.",
    options: [
      { id: 'A', text: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift." },
      { id: 'B', text: "Imperative scripts automatically provide drift detection out of the box." },
      { id: 'C', text: "Declarative tools require full root administrative access on every node host." },
      { id: 'D', text: "Imperative scripts eliminate the need for version control." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift. Imperative scripts (`kubectl apply`, bash) execute a one-time sequence of commands without understanding drift or verifying long-term state alignment. Declarative GitOps engines maintain an ongoing active control loop, continuously watching and converging state over time.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Deployment Tooling", "Declarative Tooling", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-288",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Declarative vs Imperative Deployment Tools: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Deployment Tooling to understand why declarative tools like Argo CD and Flux are preferred over imperative shell scripts for enterprise platform scaling.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Contrasting declarative GitOps tools (Argo CD, Flux) with imperative orchestration scripts is under consideration.",
    options: [
      { id: 'A', text: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift." },
      { id: 'B', text: "Imperative scripts automatically provide drift detection out of the box." },
      { id: 'C', text: "Declarative tools require full root administrative access on every node host." },
      { id: 'D', text: "Imperative scripts eliminate the need for version control." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift. Imperative scripts (`kubectl apply`, bash) execute a one-time sequence of commands without understanding drift or verifying long-term state alignment. Declarative GitOps engines maintain an ongoing active control loop, continuously watching and converging state over time.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Deployment Tooling", "Declarative Tooling", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-289",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Declarative vs Imperative Deployment Tools: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Deployment Tooling to understand why declarative tools like Argo CD and Flux are preferred over imperative shell scripts for enterprise platform scaling.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Contrasting declarative GitOps tools (Argo CD, Flux) with imperative orchestration scripts is under consideration.",
    options: [
      { id: 'A', text: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift." },
      { id: 'B', text: "Imperative scripts automatically provide drift detection out of the box." },
      { id: 'C', text: "Declarative tools require full root administrative access on every node host." },
      { id: 'D', text: "Imperative scripts eliminate the need for version control." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift. Imperative scripts (`kubectl apply`, bash) execute a one-time sequence of commands without understanding drift or verifying long-term state alignment. Declarative GitOps engines maintain an ongoing active control loop, continuously watching and converging state over time.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Deployment Tooling", "Declarative Tooling", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-290",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Declarative vs Imperative Deployment Tools: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Deployment Tooling to understand why declarative tools like Argo CD and Flux are preferred over imperative shell scripts for enterprise platform scaling.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Contrasting declarative GitOps tools (Argo CD, Flux) with imperative orchestration scripts is under consideration.",
    options: [
      { id: 'A', text: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift." },
      { id: 'B', text: "Imperative scripts automatically provide drift detection out of the box." },
      { id: 'C', text: "Declarative tools require full root administrative access on every node host." },
      { id: 'D', text: "Imperative scripts eliminate the need for version control." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declarative tools maintain continuous convergence loops and understand object schemas, whereas imperative scripts only execute once and cannot continuously reconcile drift. Imperative scripts (`kubectl apply`, bash) execute a one-time sequence of commands without understanding drift or verifying long-term state alignment. Declarative GitOps engines maintain an ongoing active control loop, continuously watching and converging state over time.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["Deployment Tooling", "Declarative Tooling", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-291",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Auditability and Non-Repudiation in GitOps: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Governance & Auditing to satisfy strict regulatory compliance mandates requiring proof of who authorized and deployed every production change.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Cryptographic commit signing (GPG/SSH) and immutable pull request trails is under consideration.",
    options: [
      { id: 'A', text: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches." },
      { id: 'B', text: "Rely on unauthenticated SSH shell access logs on worker nodes." },
      { id: 'C', text: "Allow engineers to commit changes anonymously using shared generic accounts." },
      { id: 'D', text: "Disable pull requests and allow developers to push directly to production branches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches. GitOps delivers non-repudiation and complete auditability. Every change originates as a pull request with documented discussion and approvals. Enforcing GPG/SSH commit signing cryptographically proves the author's identity, providing auditors an immutable change log directly in Git.",
    referenceUrl: "https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification",
    tags: ["Governance & Auditing", "Auditability & Signatures", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-292",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Auditability and Non-Repudiation in GitOps: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Governance & Auditing to satisfy strict regulatory compliance mandates requiring proof of who authorized and deployed every production change.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Cryptographic commit signing (GPG/SSH) and immutable pull request trails is under consideration.",
    options: [
      { id: 'A', text: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches." },
      { id: 'B', text: "Rely on unauthenticated SSH shell access logs on worker nodes." },
      { id: 'C', text: "Allow engineers to commit changes anonymously using shared generic accounts." },
      { id: 'D', text: "Disable pull requests and allow developers to push directly to production branches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches. GitOps delivers non-repudiation and complete auditability. Every change originates as a pull request with documented discussion and approvals. Enforcing GPG/SSH commit signing cryptographically proves the author's identity, providing auditors an immutable change log directly in Git.",
    referenceUrl: "https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification",
    tags: ["Governance & Auditing", "Auditability & Signatures", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-293",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Auditability and Non-Repudiation in GitOps: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Governance & Auditing to satisfy strict regulatory compliance mandates requiring proof of who authorized and deployed every production change.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Cryptographic commit signing (GPG/SSH) and immutable pull request trails is under consideration.",
    options: [
      { id: 'A', text: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches." },
      { id: 'B', text: "Rely on unauthenticated SSH shell access logs on worker nodes." },
      { id: 'C', text: "Allow engineers to commit changes anonymously using shared generic accounts." },
      { id: 'D', text: "Disable pull requests and allow developers to push directly to production branches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches. GitOps delivers non-repudiation and complete auditability. Every change originates as a pull request with documented discussion and approvals. Enforcing GPG/SSH commit signing cryptographically proves the author's identity, providing auditors an immutable change log directly in Git.",
    referenceUrl: "https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification",
    tags: ["Governance & Auditing", "Auditability & Signatures", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-294",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Auditability and Non-Repudiation in GitOps: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Governance & Auditing to satisfy strict regulatory compliance mandates requiring proof of who authorized and deployed every production change.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Cryptographic commit signing (GPG/SSH) and immutable pull request trails is under consideration.",
    options: [
      { id: 'A', text: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches." },
      { id: 'B', text: "Rely on unauthenticated SSH shell access logs on worker nodes." },
      { id: 'C', text: "Allow engineers to commit changes anonymously using shared generic accounts." },
      { id: 'D', text: "Disable pull requests and allow developers to push directly to production branches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches. GitOps delivers non-repudiation and complete auditability. Every change originates as a pull request with documented discussion and approvals. Enforcing GPG/SSH commit signing cryptographically proves the author's identity, providing auditors an immutable change log directly in Git.",
    referenceUrl: "https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification",
    tags: ["Governance & Auditing", "Auditability & Signatures", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-295",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Auditability and Non-Repudiation in GitOps: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Governance & Auditing to satisfy strict regulatory compliance mandates requiring proof of who authorized and deployed every production change.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Cryptographic commit signing (GPG/SSH) and immutable pull request trails is under consideration.",
    options: [
      { id: 'A', text: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches." },
      { id: 'B', text: "Rely on unauthenticated SSH shell access logs on worker nodes." },
      { id: 'C', text: "Allow engineers to commit changes anonymously using shared generic accounts." },
      { id: 'D', text: "Disable pull requests and allow developers to push directly to production branches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Require cryptographically signed Git commits (GPG or SSH) and mandatory peer-reviewed pull request approvals before merging into protected branches. GitOps delivers non-repudiation and complete auditability. Every change originates as a pull request with documented discussion and approvals. Enforcing GPG/SSH commit signing cryptographically proves the author's identity, providing auditors an immutable change log directly in Git.",
    referenceUrl: "https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification",
    tags: ["Governance & Auditing", "Auditability & Signatures", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-296",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Separation of App Code and Configuration Repositories: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Repository Separation to prevent high-frequency application source code commits and unit test runs from triggering unnecessary deployment reconciliation cycles.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Decoupling application source code from deployment configuration manifests is under consideration.",
    options: [
      { id: 'A', text: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo." },
      { id: 'B', text: "Store all source code, build scripts, documentation, and production manifests in a single branch of one repo." },
      { id: 'C', text: "Store deployment manifests inside container image layers." },
      { id: 'D', text: "Hardcode manifests inside the GitOps controller binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo. Separating application source code from deployment configuration is a foundational GitOps best practice. It decouples the CI build lifecycle from the CD release lifecycle, prevents recursive CI/CD commit loops, allows granular access control (developers vs ops), and provides clean release histories.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#separating-config-from-source-code",
    tags: ["Repository Separation", "Repo Separation", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-297",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Separation of App Code and Configuration Repositories: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Repository Separation to prevent high-frequency application source code commits and unit test runs from triggering unnecessary deployment reconciliation cycles.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Decoupling application source code from deployment configuration manifests is under consideration.",
    options: [
      { id: 'A', text: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo." },
      { id: 'B', text: "Store all source code, build scripts, documentation, and production manifests in a single branch of one repo." },
      { id: 'C', text: "Store deployment manifests inside container image layers." },
      { id: 'D', text: "Hardcode manifests inside the GitOps controller binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo. Separating application source code from deployment configuration is a foundational GitOps best practice. It decouples the CI build lifecycle from the CD release lifecycle, prevents recursive CI/CD commit loops, allows granular access control (developers vs ops), and provides clean release histories.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#separating-config-from-source-code",
    tags: ["Repository Separation", "Repo Separation", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-298",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Separation of App Code and Configuration Repositories: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Repository Separation to prevent high-frequency application source code commits and unit test runs from triggering unnecessary deployment reconciliation cycles.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Decoupling application source code from deployment configuration manifests is under consideration.",
    options: [
      { id: 'A', text: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo." },
      { id: 'B', text: "Store all source code, build scripts, documentation, and production manifests in a single branch of one repo." },
      { id: 'C', text: "Store deployment manifests inside container image layers." },
      { id: 'D', text: "Hardcode manifests inside the GitOps controller binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo. Separating application source code from deployment configuration is a foundational GitOps best practice. It decouples the CI build lifecycle from the CD release lifecycle, prevents recursive CI/CD commit loops, allows granular access control (developers vs ops), and provides clean release histories.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#separating-config-from-source-code",
    tags: ["Repository Separation", "Repo Separation", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-299",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Separation of App Code and Configuration Repositories: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Repository Separation to prevent high-frequency application source code commits and unit test runs from triggering unnecessary deployment reconciliation cycles.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Decoupling application source code from deployment configuration manifests is under consideration.",
    options: [
      { id: 'A', text: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo." },
      { id: 'B', text: "Store all source code, build scripts, documentation, and production manifests in a single branch of one repo." },
      { id: 'C', text: "Store deployment manifests inside container image layers." },
      { id: 'D', text: "Hardcode manifests inside the GitOps controller binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo. Separating application source code from deployment configuration is a foundational GitOps best practice. It decouples the CI build lifecycle from the CD release lifecycle, prevents recursive CI/CD commit loops, allows granular access control (developers vs ops), and provides clean release histories.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#separating-config-from-source-code",
    tags: ["Repository Separation", "Repo Separation", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-300",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Separation of App Code and Configuration Repositories: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Repository Separation to prevent high-frequency application source code commits and unit test runs from triggering unnecessary deployment reconciliation cycles.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Decoupling application source code from deployment configuration manifests is under consideration.",
    options: [
      { id: 'A', text: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo." },
      { id: 'B', text: "Store all source code, build scripts, documentation, and production manifests in a single branch of one repo." },
      { id: 'C', text: "Store deployment manifests inside container image layers." },
      { id: 'D', text: "Hardcode manifests inside the GitOps controller binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Separate application source code and deployment manifests into distinct repositories: an Application Code repo and an Environment Configuration repo. Separating application source code from deployment configuration is a foundational GitOps best practice. It decouples the CI build lifecycle from the CD release lifecycle, prevents recursive CI/CD commit loops, allows granular access control (developers vs ops), and provides clean release histories.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/#separating-config-from-source-code",
    tags: ["Repository Separation", "Repo Separation", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_12;
