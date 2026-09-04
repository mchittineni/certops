export const CNCF_CGOA_QUESTIONS_11 = [
  {
    id: "cncf-cgoa-251",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 1: Declarative Description: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates GitOps Principles to understand the fundamental OpenGitOps principle requiring system desired state to be expressed declaratively.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Expressing system state declaratively rather than imperatively is under consideration.",
    options: [
      { id: 'A', text: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps." },
      { id: 'B', text: "Write imperative shell scripts that execute step-by-step CLI commands." },
      { id: 'C', text: "Configure infrastructure manually through cloud web consoles." },
      { id: 'D', text: "Rely on compiled binary executables to express desired system architecture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps. The first OpenGitOps principle states that the desired state of a GitOps-managed system must be declared declaratively. Declarative descriptions describe what the state should look like, allowing automated reconciliation engines to calculate deltas independently of execution ordering.",
    referenceUrl: "https://opengitops.dev/#declarative-principles",
    tags: ["GitOps Principles", "OpenGitOps Declarative", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-252",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 1: Declarative Description: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates GitOps Principles to understand the fundamental OpenGitOps principle requiring system desired state to be expressed declaratively.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Expressing system state declaratively rather than imperatively is under consideration.",
    options: [
      { id: 'A', text: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps." },
      { id: 'B', text: "Write imperative shell scripts that execute step-by-step CLI commands." },
      { id: 'C', text: "Configure infrastructure manually through cloud web consoles." },
      { id: 'D', text: "Rely on compiled binary executables to express desired system architecture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps. The first OpenGitOps principle states that the desired state of a GitOps-managed system must be declared declaratively. Declarative descriptions describe what the state should look like, allowing automated reconciliation engines to calculate deltas independently of execution ordering.",
    referenceUrl: "https://opengitops.dev/#declarative-principles",
    tags: ["GitOps Principles", "OpenGitOps Declarative", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-253",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 1: Declarative Description: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates GitOps Principles to understand the fundamental OpenGitOps principle requiring system desired state to be expressed declaratively.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Expressing system state declaratively rather than imperatively is under consideration.",
    options: [
      { id: 'A', text: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps." },
      { id: 'B', text: "Write imperative shell scripts that execute step-by-step CLI commands." },
      { id: 'C', text: "Configure infrastructure manually through cloud web consoles." },
      { id: 'D', text: "Rely on compiled binary executables to express desired system architecture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps. The first OpenGitOps principle states that the desired state of a GitOps-managed system must be declared declaratively. Declarative descriptions describe what the state should look like, allowing automated reconciliation engines to calculate deltas independently of execution ordering.",
    referenceUrl: "https://opengitops.dev/#declarative-principles",
    tags: ["GitOps Principles", "OpenGitOps Declarative", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-254",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 1: Declarative Description: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates GitOps Principles to understand the fundamental OpenGitOps principle requiring system desired state to be expressed declaratively.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Expressing system state declaratively rather than imperatively is under consideration.",
    options: [
      { id: 'A', text: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps." },
      { id: 'B', text: "Write imperative shell scripts that execute step-by-step CLI commands." },
      { id: 'C', text: "Configure infrastructure manually through cloud web consoles." },
      { id: 'D', text: "Rely on compiled binary executables to express desired system architecture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps. The first OpenGitOps principle states that the desired state of a GitOps-managed system must be declared declaratively. Declarative descriptions describe what the state should look like, allowing automated reconciliation engines to calculate deltas independently of execution ordering.",
    referenceUrl: "https://opengitops.dev/#declarative-principles",
    tags: ["GitOps Principles", "OpenGitOps Declarative", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-255",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 1: Declarative Description: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates GitOps Principles to understand the fundamental OpenGitOps principle requiring system desired state to be expressed declaratively.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Expressing system state declaratively rather than imperatively is under consideration.",
    options: [
      { id: 'A', text: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps." },
      { id: 'B', text: "Write imperative shell scripts that execute step-by-step CLI commands." },
      { id: 'C', text: "Configure infrastructure manually through cloud web consoles." },
      { id: 'D', text: "Rely on compiled binary executables to express desired system architecture." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare system state in declarative formats (e.g., Kubernetes YAML, Kustomize, Helm) that describe the desired end-state rather than procedural steps. The first OpenGitOps principle states that the desired state of a GitOps-managed system must be declared declaratively. Declarative descriptions describe what the state should look like, allowing automated reconciliation engines to calculate deltas independently of execution ordering.",
    referenceUrl: "https://opengitops.dev/#declarative-principles",
    tags: ["GitOps Principles", "OpenGitOps Declarative", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-256",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 2: Versioned and Immutable: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates GitOps Principles to guarantee an immutable, audited history of every change made to production infrastructure and applications.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Storing desired state in a versioned, immutable storage system with complete history is under consideration.",
    options: [
      { id: 'A', text: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability." },
      { id: 'B', text: "Store manifests on an unversioned local hard drive." },
      { id: 'C', text: "Use a shared Google Doc to record infrastructure parameters." },
      { id: 'D', text: "Rely on human memory of what configurations were previously deployed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability. The second OpenGitOps principle requires desired state to be versioned and immutable. Git provides content-addressable, immutable commit histories, ensuring every transition is recorded with author identity, timestamp, and review approvals, enabling instant point-in-time rollbacks.",
    referenceUrl: "https://opengitops.dev/#versioned-and-immutable",
    tags: ["GitOps Principles", "OpenGitOps Versioned", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-257",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 2: Versioned and Immutable: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates GitOps Principles to guarantee an immutable, audited history of every change made to production infrastructure and applications.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Storing desired state in a versioned, immutable storage system with complete history is under consideration.",
    options: [
      { id: 'A', text: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability." },
      { id: 'B', text: "Store manifests on an unversioned local hard drive." },
      { id: 'C', text: "Use a shared Google Doc to record infrastructure parameters." },
      { id: 'D', text: "Rely on human memory of what configurations were previously deployed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability. The second OpenGitOps principle requires desired state to be versioned and immutable. Git provides content-addressable, immutable commit histories, ensuring every transition is recorded with author identity, timestamp, and review approvals, enabling instant point-in-time rollbacks.",
    referenceUrl: "https://opengitops.dev/#versioned-and-immutable",
    tags: ["GitOps Principles", "OpenGitOps Versioned", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-258",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 2: Versioned and Immutable: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates GitOps Principles to guarantee an immutable, audited history of every change made to production infrastructure and applications.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Storing desired state in a versioned, immutable storage system with complete history is under consideration.",
    options: [
      { id: 'A', text: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability." },
      { id: 'B', text: "Store manifests on an unversioned local hard drive." },
      { id: 'C', text: "Use a shared Google Doc to record infrastructure parameters." },
      { id: 'D', text: "Rely on human memory of what configurations were previously deployed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability. The second OpenGitOps principle requires desired state to be versioned and immutable. Git provides content-addressable, immutable commit histories, ensuring every transition is recorded with author identity, timestamp, and review approvals, enabling instant point-in-time rollbacks.",
    referenceUrl: "https://opengitops.dev/#versioned-and-immutable",
    tags: ["GitOps Principles", "OpenGitOps Versioned", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-259",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 2: Versioned and Immutable: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates GitOps Principles to guarantee an immutable, audited history of every change made to production infrastructure and applications.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Storing desired state in a versioned, immutable storage system with complete history is under consideration.",
    options: [
      { id: 'A', text: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability." },
      { id: 'B', text: "Store manifests on an unversioned local hard drive." },
      { id: 'C', text: "Use a shared Google Doc to record infrastructure parameters." },
      { id: 'D', text: "Rely on human memory of what configurations were previously deployed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability. The second OpenGitOps principle requires desired state to be versioned and immutable. Git provides content-addressable, immutable commit histories, ensuring every transition is recorded with author identity, timestamp, and review approvals, enabling instant point-in-time rollbacks.",
    referenceUrl: "https://opengitops.dev/#versioned-and-immutable",
    tags: ["GitOps Principles", "OpenGitOps Versioned", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-260",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 2: Versioned and Immutable: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates GitOps Principles to guarantee an immutable, audited history of every change made to production infrastructure and applications.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Storing desired state in a versioned, immutable storage system with complete history is under consideration.",
    options: [
      { id: 'A', text: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability." },
      { id: 'B', text: "Store manifests on an unversioned local hard drive." },
      { id: 'C', text: "Use a shared Google Doc to record infrastructure parameters." },
      { id: 'D', text: "Rely on human memory of what configurations were previously deployed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Store desired state in Git, where commits are immutable, versioned, cryptographically signed, and provide complete historical auditability. The second OpenGitOps principle requires desired state to be versioned and immutable. Git provides content-addressable, immutable commit histories, ensuring every transition is recorded with author identity, timestamp, and review approvals, enabling instant point-in-time rollbacks.",
    referenceUrl: "https://opengitops.dev/#versioned-and-immutable",
    tags: ["GitOps Principles", "OpenGitOps Versioned", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-261",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 3: Pulled Automatically: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates GitOps Principles to ensure software deployments are continuously pulled into target clusters by in-cluster controllers without granting external CI systems cluster-admin access.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Automated software agents pulling state declarations rather than push-based CI is under consideration.",
    options: [
      { id: 'A', text: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository." },
      { id: 'B', text: "Configure external Jenkins runners to execute `kubectl apply` over the public internet with administrative kubeconfigs." },
      { id: 'C', text: "Instruct engineers to manually run `git pull` inside node terminals." },
      { id: 'D', text: "Disable automated syncing and apply configurations once a quarter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository. The third OpenGitOps principle states that software agents automatically pull desired state declarations from the source. In-cluster agents pull state changes, eliminating the security vulnerability of exposing cluster management endpoints and credentials to external CI/CD runners.",
    referenceUrl: "https://opengitops.dev/#pulled-automatically",
    tags: ["GitOps Principles", "OpenGitOps Pull Model", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-262",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 3: Pulled Automatically: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates GitOps Principles to ensure software deployments are continuously pulled into target clusters by in-cluster controllers without granting external CI systems cluster-admin access.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Automated software agents pulling state declarations rather than push-based CI is under consideration.",
    options: [
      { id: 'A', text: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository." },
      { id: 'B', text: "Configure external Jenkins runners to execute `kubectl apply` over the public internet with administrative kubeconfigs." },
      { id: 'C', text: "Instruct engineers to manually run `git pull` inside node terminals." },
      { id: 'D', text: "Disable automated syncing and apply configurations once a quarter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository. The third OpenGitOps principle states that software agents automatically pull desired state declarations from the source. In-cluster agents pull state changes, eliminating the security vulnerability of exposing cluster management endpoints and credentials to external CI/CD runners.",
    referenceUrl: "https://opengitops.dev/#pulled-automatically",
    tags: ["GitOps Principles", "OpenGitOps Pull Model", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-263",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 3: Pulled Automatically: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates GitOps Principles to ensure software deployments are continuously pulled into target clusters by in-cluster controllers without granting external CI systems cluster-admin access.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Automated software agents pulling state declarations rather than push-based CI is under consideration.",
    options: [
      { id: 'A', text: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository." },
      { id: 'B', text: "Configure external Jenkins runners to execute `kubectl apply` over the public internet with administrative kubeconfigs." },
      { id: 'C', text: "Instruct engineers to manually run `git pull` inside node terminals." },
      { id: 'D', text: "Disable automated syncing and apply configurations once a quarter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository. The third OpenGitOps principle states that software agents automatically pull desired state declarations from the source. In-cluster agents pull state changes, eliminating the security vulnerability of exposing cluster management endpoints and credentials to external CI/CD runners.",
    referenceUrl: "https://opengitops.dev/#pulled-automatically",
    tags: ["GitOps Principles", "OpenGitOps Pull Model", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-264",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 3: Pulled Automatically: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates GitOps Principles to ensure software deployments are continuously pulled into target clusters by in-cluster controllers without granting external CI systems cluster-admin access.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Automated software agents pulling state declarations rather than push-based CI is under consideration.",
    options: [
      { id: 'A', text: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository." },
      { id: 'B', text: "Configure external Jenkins runners to execute `kubectl apply` over the public internet with administrative kubeconfigs." },
      { id: 'C', text: "Instruct engineers to manually run `git pull` inside node terminals." },
      { id: 'D', text: "Disable automated syncing and apply configurations once a quarter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository. The third OpenGitOps principle states that software agents automatically pull desired state declarations from the source. In-cluster agents pull state changes, eliminating the security vulnerability of exposing cluster management endpoints and credentials to external CI/CD runners.",
    referenceUrl: "https://opengitops.dev/#pulled-automatically",
    tags: ["GitOps Principles", "OpenGitOps Pull Model", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-265",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 3: Pulled Automatically: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates GitOps Principles to ensure software deployments are continuously pulled into target clusters by in-cluster controllers without granting external CI systems cluster-admin access.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Automated software agents pulling state declarations rather than push-based CI is under consideration.",
    options: [
      { id: 'A', text: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository." },
      { id: 'B', text: "Configure external Jenkins runners to execute `kubectl apply` over the public internet with administrative kubeconfigs." },
      { id: 'C', text: "Instruct engineers to manually run `git pull` inside node terminals." },
      { id: 'D', text: "Disable automated syncing and apply configurations once a quarter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy an in-cluster reconciliation agent (like Argo CD or Flux) that continuously pulls approved state declarations from the Git repository. The third OpenGitOps principle states that software agents automatically pull desired state declarations from the source. In-cluster agents pull state changes, eliminating the security vulnerability of exposing cluster management endpoints and credentials to external CI/CD runners.",
    referenceUrl: "https://opengitops.dev/#pulled-automatically",
    tags: ["GitOps Principles", "OpenGitOps Pull Model", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-266",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 4: Continuously Reconciled: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates GitOps Principles to automatically correct unauthorized out-of-band changes (drift) made to production Kubernetes pods via `kubectl edit`.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Continuous closed-loop reconciliation detecting drift and self-healing systems is under consideration.",
    options: [
      { id: 'A', text: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence." },
      { id: 'B', text: "Rely on annual external compliance audits to identify drift." },
      { id: 'C', text: "Send an email to the cluster administrator whenever an alert triggers." },
      { id: 'D', text: "Disable all automated healing to preserve manual modifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence. The fourth OpenGitOps principle mandates continuous reconciliation. Software agents continuously observe actual system state and compare it against the desired state in Git. If drift is detected (whether from failure or manual tampering), the agent automatically reconciles the system back to desired state.",
    referenceUrl: "https://opengitops.dev/#continuously-reconciled",
    tags: ["GitOps Principles", "OpenGitOps Reconciliation", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-267",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 4: Continuously Reconciled: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates GitOps Principles to automatically correct unauthorized out-of-band changes (drift) made to production Kubernetes pods via `kubectl edit`.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Continuous closed-loop reconciliation detecting drift and self-healing systems is under consideration.",
    options: [
      { id: 'A', text: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence." },
      { id: 'B', text: "Rely on annual external compliance audits to identify drift." },
      { id: 'C', text: "Send an email to the cluster administrator whenever an alert triggers." },
      { id: 'D', text: "Disable all automated healing to preserve manual modifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence. The fourth OpenGitOps principle mandates continuous reconciliation. Software agents continuously observe actual system state and compare it against the desired state in Git. If drift is detected (whether from failure or manual tampering), the agent automatically reconciles the system back to desired state.",
    referenceUrl: "https://opengitops.dev/#continuously-reconciled",
    tags: ["GitOps Principles", "OpenGitOps Reconciliation", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-268",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 4: Continuously Reconciled: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates GitOps Principles to automatically correct unauthorized out-of-band changes (drift) made to production Kubernetes pods via `kubectl edit`.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Continuous closed-loop reconciliation detecting drift and self-healing systems is under consideration.",
    options: [
      { id: 'A', text: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence." },
      { id: 'B', text: "Rely on annual external compliance audits to identify drift." },
      { id: 'C', text: "Send an email to the cluster administrator whenever an alert triggers." },
      { id: 'D', text: "Disable all automated healing to preserve manual modifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence. The fourth OpenGitOps principle mandates continuous reconciliation. Software agents continuously observe actual system state and compare it against the desired state in Git. If drift is detected (whether from failure or manual tampering), the agent automatically reconciles the system back to desired state.",
    referenceUrl: "https://opengitops.dev/#continuously-reconciled",
    tags: ["GitOps Principles", "OpenGitOps Reconciliation", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-269",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 4: Continuously Reconciled: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates GitOps Principles to automatically correct unauthorized out-of-band changes (drift) made to production Kubernetes pods via `kubectl edit`.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Continuous closed-loop reconciliation detecting drift and self-healing systems is under consideration.",
    options: [
      { id: 'A', text: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence." },
      { id: 'B', text: "Rely on annual external compliance audits to identify drift." },
      { id: 'C', text: "Send an email to the cluster administrator whenever an alert triggers." },
      { id: 'D', text: "Disable all automated healing to preserve manual modifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence. The fourth OpenGitOps principle mandates continuous reconciliation. Software agents continuously observe actual system state and compare it against the desired state in Git. If drift is detected (whether from failure or manual tampering), the agent automatically reconciles the system back to desired state.",
    referenceUrl: "https://opengitops.dev/#continuously-reconciled",
    tags: ["GitOps Principles", "OpenGitOps Reconciliation", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-270",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "OpenGitOps Principle 4: Continuously Reconciled: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates GitOps Principles to automatically correct unauthorized out-of-band changes (drift) made to production Kubernetes pods via `kubectl edit`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Continuous closed-loop reconciliation detecting drift and self-healing systems is under consideration.",
    options: [
      { id: 'A', text: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence." },
      { id: 'B', text: "Rely on annual external compliance audits to identify drift." },
      { id: 'C', text: "Send an email to the cluster administrator whenever an alert triggers." },
      { id: 'D', text: "Disable all automated healing to preserve manual modifications." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a continuous reconciliation loop that continuously compares actual live state against desired Git state and automatically remediates divergence. The fourth OpenGitOps principle mandates continuous reconciliation. Software agents continuously observe actual system state and compare it against the desired state in Git. If drift is detected (whether from failure or manual tampering), the agent automatically reconciles the system back to desired state.",
    referenceUrl: "https://opengitops.dev/#continuously-reconciled",
    tags: ["GitOps Principles", "OpenGitOps Reconciliation", "Resilience Failure"]
  },
  {
    id: "cncf-cgoa-271",
    difficulty: "hard",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Push-Based vs Pull-Based Continuous Delivery: Dr Failover",
    scenario: "A cloud-native platform engineering team is establishing high-availability deployment patterns, automated disaster recovery procedures, and operational resilience baselines using GitOps. The GitOps engineer evaluates Deployment Paradigms to evaluate the security advantages of migrating from a push-based CI/CD pipeline (e.g., Jenkins `kubectl apply`) to a pull-based GitOps engine.",
    question: "Which architectural approach or configuration satisfies these GitOps disaster recovery and operational continuity objectives? Comparing CI push models vs GitOps pull models for cluster access security is under consideration.",
    options: [
      { id: 'A', text: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers." },
      { id: 'B', text: "Push-based CI is inherently more secure because it runs outside the cluster." },
      { id: 'C', text: "Pull-based deployment requires opening inbound firewall ports on the Kubernetes control plane." },
      { id: 'D', text: "Both models provide identical network and credential security postures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers. Push-based CD requires granting external CI servers cluster-admin credentials and opening API firewalls to the internet. Pull-based CD inverts control: an in-cluster agent polls the Git repository over outbound HTTPS, keeping cluster credentials strictly within the internal security perimeter.",
    referenceUrl: "https://www.cncf.io/blog/2021/08/17/gitops-push-vs-pull/",
    tags: ["Deployment Paradigms", "Push vs Pull GitOps", "Dr Failover"]
  },
  {
    id: "cncf-cgoa-272",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Push-Based vs Pull-Based Continuous Delivery: High Load Scale",
    scenario: "A high-throughput enterprise Kubernetes platform experiences rapid scaling across hundreds of applications and requires automated, consistent GitOps reconciliation. The GitOps engineer evaluates Deployment Paradigms to evaluate the security advantages of migrating from a push-based CI/CD pipeline (e.g., Jenkins `kubectl apply`) to a pull-based GitOps engine.",
    question: "Which architectural pattern or GitOps engine configuration manages this delivery scale effectively while preventing controller bottlenecks and sync delays? Comparing CI push models vs GitOps pull models for cluster access security is under consideration.",
    options: [
      { id: 'A', text: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers." },
      { id: 'B', text: "Push-based CI is inherently more secure because it runs outside the cluster." },
      { id: 'C', text: "Pull-based deployment requires opening inbound firewall ports on the Kubernetes control plane." },
      { id: 'D', text: "Both models provide identical network and credential security postures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers. Push-based CD requires granting external CI servers cluster-admin credentials and opening API firewalls to the internet. Pull-based CD inverts control: an in-cluster agent polls the Git repository over outbound HTTPS, keeping cluster credentials strictly within the internal security perimeter.",
    referenceUrl: "https://www.cncf.io/blog/2021/08/17/gitops-push-vs-pull/",
    tags: ["Deployment Paradigms", "Push vs Pull GitOps", "High Load Scale"]
  },
  {
    id: "cncf-cgoa-273",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Push-Based vs Pull-Based Continuous Delivery: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic commit verification, secret protection, and automated drift prevention across all GitOps-managed clusters. The GitOps engineer evaluates Deployment Paradigms to evaluate the security advantages of migrating from a push-based CI/CD pipeline (e.g., Jenkins `kubectl apply`) to a pull-based GitOps engine.",
    question: "Which solution implements these mandatory GitOps security and governance controls? Comparing CI push models vs GitOps pull models for cluster access security is under consideration.",
    options: [
      { id: 'A', text: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers." },
      { id: 'B', text: "Push-based CI is inherently more secure because it runs outside the cluster." },
      { id: 'C', text: "Pull-based deployment requires opening inbound firewall ports on the Kubernetes control plane." },
      { id: 'D', text: "Both models provide identical network and credential security postures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers. Push-based CD requires granting external CI servers cluster-admin credentials and opening API firewalls to the internet. Pull-based CD inverts control: an in-cluster agent polls the Git repository over outbound HTTPS, keeping cluster credentials strictly within the internal security perimeter.",
    referenceUrl: "https://www.cncf.io/blog/2021/08/17/gitops-push-vs-pull/",
    tags: ["Deployment Paradigms", "Push vs Pull GitOps", "Security Compliance"]
  },
  {
    id: "cncf-cgoa-274",
    difficulty: "easy",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Push-Based vs Pull-Based Continuous Delivery: Hybrid Migration",
    scenario: "An enterprise is modernizing traditional imperative deployment scripts and adopting declarative GitOps continuous delivery across hybrid cloud Kubernetes clusters. The GitOps engineer evaluates Deployment Paradigms to evaluate the security advantages of migrating from a push-based CI/CD pipeline (e.g., Jenkins `kubectl apply`) to a pull-based GitOps engine.",
    question: "Which practice or platform feature enables the engineering team to modernize delivery workflows with minimal operational friction? Comparing CI push models vs GitOps pull models for cluster access security is under consideration.",
    options: [
      { id: 'A', text: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers." },
      { id: 'B', text: "Push-based CI is inherently more secure because it runs outside the cluster." },
      { id: 'C', text: "Pull-based deployment requires opening inbound firewall ports on the Kubernetes control plane." },
      { id: 'D', text: "Both models provide identical network and credential security postures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers. Push-based CD requires granting external CI servers cluster-admin credentials and opening API firewalls to the internet. Pull-based CD inverts control: an in-cluster agent polls the Git repository over outbound HTTPS, keeping cluster credentials strictly within the internal security perimeter.",
    referenceUrl: "https://www.cncf.io/blog/2021/08/17/gitops-push-vs-pull/",
    tags: ["Deployment Paradigms", "Push vs Pull GitOps", "Hybrid Migration"]
  },
  {
    id: "cncf-cgoa-275",
    difficulty: "medium",
    certId: "cncf-cgoa",
    domainId: "d1",
    domainName: "GitOps Terminology and Principles",
    title: "Push-Based vs Pull-Based Continuous Delivery: Resilience Failure",
    scenario: "A platform reliability team is optimizing system resilience to eliminate single points of failure, streamline rollback capabilities, and automate self-healing. The GitOps engineer evaluates Deployment Paradigms to evaluate the security advantages of migrating from a push-based CI/CD pipeline (e.g., Jenkins `kubectl apply`) to a pull-based GitOps engine.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster availability? Comparing CI push models vs GitOps pull models for cluster access security is under consideration.",
    options: [
      { id: 'A', text: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers." },
      { id: 'B', text: "Push-based CI is inherently more secure because it runs outside the cluster." },
      { id: 'C', text: "Pull-based deployment requires opening inbound firewall ports on the Kubernetes control plane." },
      { id: 'D', text: "Both models provide identical network and credential security postures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pull-based GitOps keeps cluster credentials inside the firewall, eliminating the need to expose cluster API endpoints and admin kubeconfigs to external CI servers. Push-based CD requires granting external CI servers cluster-admin credentials and opening API firewalls to the internet. Pull-based CD inverts control: an in-cluster agent polls the Git repository over outbound HTTPS, keeping cluster credentials strictly within the internal security perimeter.",
    referenceUrl: "https://www.cncf.io/blog/2021/08/17/gitops-push-vs-pull/",
    tags: ["Deployment Paradigms", "Push vs Pull GitOps", "Resilience Failure"]
  }
];

export default CNCF_CGOA_QUESTIONS_11;
