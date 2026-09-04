export const CNCF_CNPE_QUESTIONS_16 = [
  {
    id: "cncf-cnpe-376",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Multi-Region Traffic and Deployment Coordination: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Multi-Region Deployment to orchestrate a safe application release across three geographic cloud regions without causing global routing disruption.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Coordinating active-active multi-region rollouts with global traffic management via Anycast/DNS is under consideration.",
    options: [
      { id: 'A', text: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically." },
      { id: 'B', text: "Update all global regions simultaneously in a single command without monitoring regional telemetry." },
      { id: 'C', text: "Route 100% of global user traffic to a single unmonitored container in one region." },
      { id: 'D', text: "Disable global DNS routing and force users to connect directly to static regional IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically. Multi-region deployment orchestration coordinates releases across independent fault domains. Platforms execute staged regional deployments (e.g., Region A -&gt; canary -&gt; Region B/C), ensuring that if a release encounters issues, global Anycast/DNS traffic shifts away seamlessly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#external-traffic-policy",
    tags: ["Multi-Region Deployment", "Multi-Region Deployment", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-377",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Multi-Region Traffic and Deployment Coordination: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Multi-Region Deployment to orchestrate a safe application release across three geographic cloud regions without causing global routing disruption.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Coordinating active-active multi-region rollouts with global traffic management via Anycast/DNS is under consideration.",
    options: [
      { id: 'A', text: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically." },
      { id: 'B', text: "Update all global regions simultaneously in a single command without monitoring regional telemetry." },
      { id: 'C', text: "Route 100% of global user traffic to a single unmonitored container in one region." },
      { id: 'D', text: "Disable global DNS routing and force users to connect directly to static regional IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically. Multi-region deployment orchestration coordinates releases across independent fault domains. Platforms execute staged regional deployments (e.g., Region A -&gt; canary -&gt; Region B/C), ensuring that if a release encounters issues, global Anycast/DNS traffic shifts away seamlessly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#external-traffic-policy",
    tags: ["Multi-Region Deployment", "Multi-Region Deployment", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-378",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Multi-Region Traffic and Deployment Coordination: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Multi-Region Deployment to orchestrate a safe application release across three geographic cloud regions without causing global routing disruption.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Coordinating active-active multi-region rollouts with global traffic management via Anycast/DNS is under consideration.",
    options: [
      { id: 'A', text: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically." },
      { id: 'B', text: "Update all global regions simultaneously in a single command without monitoring regional telemetry." },
      { id: 'C', text: "Route 100% of global user traffic to a single unmonitored container in one region." },
      { id: 'D', text: "Disable global DNS routing and force users to connect directly to static regional IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically. Multi-region deployment orchestration coordinates releases across independent fault domains. Platforms execute staged regional deployments (e.g., Region A -&gt; canary -&gt; Region B/C), ensuring that if a release encounters issues, global Anycast/DNS traffic shifts away seamlessly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#external-traffic-policy",
    tags: ["Multi-Region Deployment", "Multi-Region Deployment", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-379",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Multi-Region Traffic and Deployment Coordination: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Multi-Region Deployment to orchestrate a safe application release across three geographic cloud regions without causing global routing disruption.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Coordinating active-active multi-region rollouts with global traffic management via Anycast/DNS is under consideration.",
    options: [
      { id: 'A', text: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically." },
      { id: 'B', text: "Update all global regions simultaneously in a single command without monitoring regional telemetry." },
      { id: 'C', text: "Route 100% of global user traffic to a single unmonitored container in one region." },
      { id: 'D', text: "Disable global DNS routing and force users to connect directly to static regional IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically. Multi-region deployment orchestration coordinates releases across independent fault domains. Platforms execute staged regional deployments (e.g., Region A -&gt; canary -&gt; Region B/C), ensuring that if a release encounters issues, global Anycast/DNS traffic shifts away seamlessly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#external-traffic-policy",
    tags: ["Multi-Region Deployment", "Multi-Region Deployment", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-380",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Multi-Region Traffic and Deployment Coordination: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Multi-Region Deployment to orchestrate a safe application release across three geographic cloud regions without causing global routing disruption.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Coordinating active-active multi-region rollouts with global traffic management via Anycast/DNS is under consideration.",
    options: [
      { id: 'A', text: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically." },
      { id: 'B', text: "Update all global regions simultaneously in a single command without monitoring regional telemetry." },
      { id: 'C', text: "Route 100% of global user traffic to a single unmonitored container in one region." },
      { id: 'D', text: "Disable global DNS routing and force users to connect directly to static regional IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute progressive region-by-region rollouts, validating regional health probes and updating global traffic routing dynamically. Multi-region deployment orchestration coordinates releases across independent fault domains. Platforms execute staged regional deployments (e.g., Region A -&gt; canary -&gt; Region B/C), ensuring that if a release encounters issues, global Anycast/DNS traffic shifts away seamlessly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/#external-traffic-policy",
    tags: ["Multi-Region Deployment", "Multi-Region Deployment", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-381",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Workflow Orchestration: Argo Workflows: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Argo Workflows to orchestrate complex multi-stage machine learning pipelines and long-running platform data migration workflows in Kubernetes.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Directed Acyclic Graph (DAG) execution, container-native step retries, and artifact passing is under consideration.",
    options: [
      { id: 'A', text: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management." },
      { id: 'B', text: "Run long-running multi-day batch scripts synchronously inside fragile web server request handlers." },
      { id: 'C', text: "Require human operators to execute individual pipeline steps manually one by one in terminal sessions." },
      { id: 'D', text: "Disable container orchestration and run batch jobs directly on developer laptops." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management. Argo Workflows is a container-native workflow engine for Kubernetes. It models complex pipelines as Directed Acyclic Graphs (DAGs) where each step runs in an isolated container. It features native artifact passing (S3/GCS), automated step retries, and dynamic matrix parallelization.",
    referenceUrl: "https://argoproj.github.io/argo-workflows/",
    tags: ["Argo Workflows", "Argo Workflows", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-382",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Workflow Orchestration: Argo Workflows: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Argo Workflows to orchestrate complex multi-stage machine learning pipelines and long-running platform data migration workflows in Kubernetes.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Directed Acyclic Graph (DAG) execution, container-native step retries, and artifact passing is under consideration.",
    options: [
      { id: 'A', text: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management." },
      { id: 'B', text: "Run long-running multi-day batch scripts synchronously inside fragile web server request handlers." },
      { id: 'C', text: "Require human operators to execute individual pipeline steps manually one by one in terminal sessions." },
      { id: 'D', text: "Disable container orchestration and run batch jobs directly on developer laptops." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management. Argo Workflows is a container-native workflow engine for Kubernetes. It models complex pipelines as Directed Acyclic Graphs (DAGs) where each step runs in an isolated container. It features native artifact passing (S3/GCS), automated step retries, and dynamic matrix parallelization.",
    referenceUrl: "https://argoproj.github.io/argo-workflows/",
    tags: ["Argo Workflows", "Argo Workflows", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-383",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Workflow Orchestration: Argo Workflows: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Argo Workflows to orchestrate complex multi-stage machine learning pipelines and long-running platform data migration workflows in Kubernetes.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Directed Acyclic Graph (DAG) execution, container-native step retries, and artifact passing is under consideration.",
    options: [
      { id: 'A', text: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management." },
      { id: 'B', text: "Run long-running multi-day batch scripts synchronously inside fragile web server request handlers." },
      { id: 'C', text: "Require human operators to execute individual pipeline steps manually one by one in terminal sessions." },
      { id: 'D', text: "Disable container orchestration and run batch jobs directly on developer laptops." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management. Argo Workflows is a container-native workflow engine for Kubernetes. It models complex pipelines as Directed Acyclic Graphs (DAGs) where each step runs in an isolated container. It features native artifact passing (S3/GCS), automated step retries, and dynamic matrix parallelization.",
    referenceUrl: "https://argoproj.github.io/argo-workflows/",
    tags: ["Argo Workflows", "Argo Workflows", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-384",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Workflow Orchestration: Argo Workflows: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Argo Workflows to orchestrate complex multi-stage machine learning pipelines and long-running platform data migration workflows in Kubernetes.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Directed Acyclic Graph (DAG) execution, container-native step retries, and artifact passing is under consideration.",
    options: [
      { id: 'A', text: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management." },
      { id: 'B', text: "Run long-running multi-day batch scripts synchronously inside fragile web server request handlers." },
      { id: 'C', text: "Require human operators to execute individual pipeline steps manually one by one in terminal sessions." },
      { id: 'D', text: "Disable container orchestration and run batch jobs directly on developer laptops." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management. Argo Workflows is a container-native workflow engine for Kubernetes. It models complex pipelines as Directed Acyclic Graphs (DAGs) where each step runs in an isolated container. It features native artifact passing (S3/GCS), automated step retries, and dynamic matrix parallelization.",
    referenceUrl: "https://argoproj.github.io/argo-workflows/",
    tags: ["Argo Workflows", "Argo Workflows", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-385",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Cloud-Native Workflow Orchestration: Argo Workflows: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Argo Workflows to orchestrate complex multi-stage machine learning pipelines and long-running platform data migration workflows in Kubernetes.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Directed Acyclic Graph (DAG) execution, container-native step retries, and artifact passing is under consideration.",
    options: [
      { id: 'A', text: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management." },
      { id: 'B', text: "Run long-running multi-day batch scripts synchronously inside fragile web server request handlers." },
      { id: 'C', text: "Require human operators to execute individual pipeline steps manually one by one in terminal sessions." },
      { id: 'D', text: "Disable container orchestration and run batch jobs directly on developer laptops." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Argo Workflows to execute containerized Directed Acyclic Graphs (DAGs) with automated step retries and artifact management. Argo Workflows is a container-native workflow engine for Kubernetes. It models complex pipelines as Directed Acyclic Graphs (DAGs) where each step runs in an isolated container. It features native artifact passing (S3/GCS), automated step retries, and dynamic matrix parallelization.",
    referenceUrl: "https://argoproj.github.io/argo-workflows/",
    tags: ["Argo Workflows", "Argo Workflows", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-386",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Crossplane Compositions and Readiness Checks: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Crossplane Readiness to ensure composite platform resources only report `Ready: True` when all underlying cloud databases and security groups are completely operational.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Custom readiness checks, field transforms, and environment configs in Compositions is under consideration.",
    options: [
      { id: 'A', text: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition." },
      { id: 'B', text: "Assume cloud resources become ready instantly upon manifest submission without verifying operational state." },
      { id: 'C', text: "Mark all infrastructure resources as perpetually Ready regardless of whether they exist." },
      { id: 'D', text: "Poll cloud APIs manually via developer workstation scripts to check database status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition. Crossplane Compositions support advanced readiness checks (`MatchString`, `MatchCondition`, `NonEmpty`). Platform engineers define conditions that determine when managed resources are truly operational before signaling ready status to the consuming claim.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/compositions/#readiness-checks",
    tags: ["Crossplane Readiness", "Crossplane Readiness", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-387",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Crossplane Compositions and Readiness Checks: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Crossplane Readiness to ensure composite platform resources only report `Ready: True` when all underlying cloud databases and security groups are completely operational.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Custom readiness checks, field transforms, and environment configs in Compositions is under consideration.",
    options: [
      { id: 'A', text: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition." },
      { id: 'B', text: "Assume cloud resources become ready instantly upon manifest submission without verifying operational state." },
      { id: 'C', text: "Mark all infrastructure resources as perpetually Ready regardless of whether they exist." },
      { id: 'D', text: "Poll cloud APIs manually via developer workstation scripts to check database status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition. Crossplane Compositions support advanced readiness checks (`MatchString`, `MatchCondition`, `NonEmpty`). Platform engineers define conditions that determine when managed resources are truly operational before signaling ready status to the consuming claim.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/compositions/#readiness-checks",
    tags: ["Crossplane Readiness", "Crossplane Readiness", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-388",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Crossplane Compositions and Readiness Checks: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Crossplane Readiness to ensure composite platform resources only report `Ready: True` when all underlying cloud databases and security groups are completely operational.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Custom readiness checks, field transforms, and environment configs in Compositions is under consideration.",
    options: [
      { id: 'A', text: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition." },
      { id: 'B', text: "Assume cloud resources become ready instantly upon manifest submission without verifying operational state." },
      { id: 'C', text: "Mark all infrastructure resources as perpetually Ready regardless of whether they exist." },
      { id: 'D', text: "Poll cloud APIs manually via developer workstation scripts to check database status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition. Crossplane Compositions support advanced readiness checks (`MatchString`, `MatchCondition`, `NonEmpty`). Platform engineers define conditions that determine when managed resources are truly operational before signaling ready status to the consuming claim.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/compositions/#readiness-checks",
    tags: ["Crossplane Readiness", "Crossplane Readiness", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-389",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Crossplane Compositions and Readiness Checks: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Crossplane Readiness to ensure composite platform resources only report `Ready: True` when all underlying cloud databases and security groups are completely operational.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Custom readiness checks, field transforms, and environment configs in Compositions is under consideration.",
    options: [
      { id: 'A', text: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition." },
      { id: 'B', text: "Assume cloud resources become ready instantly upon manifest submission without verifying operational state." },
      { id: 'C', text: "Mark all infrastructure resources as perpetually Ready regardless of whether they exist." },
      { id: 'D', text: "Poll cloud APIs manually via developer workstation scripts to check database status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition. Crossplane Compositions support advanced readiness checks (`MatchString`, `MatchCondition`, `NonEmpty`). Platform engineers define conditions that determine when managed resources are truly operational before signaling ready status to the consuming claim.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/compositions/#readiness-checks",
    tags: ["Crossplane Readiness", "Crossplane Readiness", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-390",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Crossplane Compositions and Readiness Checks: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Crossplane Readiness to ensure composite platform resources only report `Ready: True` when all underlying cloud databases and security groups are completely operational.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Custom readiness checks, field transforms, and environment configs in Compositions is under consideration.",
    options: [
      { id: 'A', text: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition." },
      { id: 'B', text: "Assume cloud resources become ready instantly upon manifest submission without verifying operational state." },
      { id: 'C', text: "Mark all infrastructure resources as perpetually Ready regardless of whether they exist." },
      { id: 'D', text: "Poll cloud APIs manually via developer workstation scripts to check database status." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define custom `readinessChecks` (MatchString, MatchCondition) and field transforms directly in the Crossplane Composition. Crossplane Compositions support advanced readiness checks (`MatchString`, `MatchCondition`, `NonEmpty`). Platform engineers define conditions that determine when managed resources are truly operational before signaling ready status to the consuming claim.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/compositions/#readiness-checks",
    tags: ["Crossplane Readiness", "Crossplane Readiness", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-391",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Crossplane Packages, Providers, and Configurations: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Crossplane Packages to distribute versioned, immutable infrastructure building blocks across enterprise platform clusters using standard container registries.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Modular distribution of infrastructure APIs via OCI-packaged Providers and Configuration packages is under consideration.",
    options: [
      { id: 'A', text: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning." },
      { id: 'B', text: "Email raw unversioned YAML snippets across engineering teams to manually paste into cluster terminals." },
      { id: 'C', text: "Store composition definitions on ephemeral laptop drives without version tracking." },
      { id: 'D', text: "Deploy unverified third-party binaries with root cluster permissions directly onto production nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning. Crossplane uses OCI container registries to distribute Providers and Configurations. Platform teams build immutable, versioned Configuration packages containing XRDs and Compositions, allowing deterministic upgrades and dependencies across cluster environments.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/packages/",
    tags: ["Crossplane Packages", "Crossplane Packages", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-392",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Crossplane Packages, Providers, and Configurations: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Crossplane Packages to distribute versioned, immutable infrastructure building blocks across enterprise platform clusters using standard container registries.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Modular distribution of infrastructure APIs via OCI-packaged Providers and Configuration packages is under consideration.",
    options: [
      { id: 'A', text: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning." },
      { id: 'B', text: "Email raw unversioned YAML snippets across engineering teams to manually paste into cluster terminals." },
      { id: 'C', text: "Store composition definitions on ephemeral laptop drives without version tracking." },
      { id: 'D', text: "Deploy unverified third-party binaries with root cluster permissions directly onto production nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning. Crossplane uses OCI container registries to distribute Providers and Configurations. Platform teams build immutable, versioned Configuration packages containing XRDs and Compositions, allowing deterministic upgrades and dependencies across cluster environments.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/packages/",
    tags: ["Crossplane Packages", "Crossplane Packages", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-393",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Crossplane Packages, Providers, and Configurations: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Crossplane Packages to distribute versioned, immutable infrastructure building blocks across enterprise platform clusters using standard container registries.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Modular distribution of infrastructure APIs via OCI-packaged Providers and Configuration packages is under consideration.",
    options: [
      { id: 'A', text: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning." },
      { id: 'B', text: "Email raw unversioned YAML snippets across engineering teams to manually paste into cluster terminals." },
      { id: 'C', text: "Store composition definitions on ephemeral laptop drives without version tracking." },
      { id: 'D', text: "Deploy unverified third-party binaries with root cluster permissions directly onto production nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning. Crossplane uses OCI container registries to distribute Providers and Configurations. Platform teams build immutable, versioned Configuration packages containing XRDs and Compositions, allowing deterministic upgrades and dependencies across cluster environments.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/packages/",
    tags: ["Crossplane Packages", "Crossplane Packages", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-394",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Crossplane Packages, Providers, and Configurations: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Crossplane Packages to distribute versioned, immutable infrastructure building blocks across enterprise platform clusters using standard container registries.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Modular distribution of infrastructure APIs via OCI-packaged Providers and Configuration packages is under consideration.",
    options: [
      { id: 'A', text: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning." },
      { id: 'B', text: "Email raw unversioned YAML snippets across engineering teams to manually paste into cluster terminals." },
      { id: 'C', text: "Store composition definitions on ephemeral laptop drives without version tracking." },
      { id: 'D', text: "Deploy unverified third-party binaries with root cluster permissions directly onto production nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning. Crossplane uses OCI container registries to distribute Providers and Configurations. Platform teams build immutable, versioned Configuration packages containing XRDs and Compositions, allowing deterministic upgrades and dependencies across cluster environments.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/packages/",
    tags: ["Crossplane Packages", "Crossplane Packages", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-395",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Crossplane Packages, Providers, and Configurations: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Crossplane Packages to distribute versioned, immutable infrastructure building blocks across enterprise platform clusters using standard container registries.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Modular distribution of infrastructure APIs via OCI-packaged Providers and Configuration packages is under consideration.",
    options: [
      { id: 'A', text: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning." },
      { id: 'B', text: "Email raw unversioned YAML snippets across engineering teams to manually paste into cluster terminals." },
      { id: 'C', text: "Store composition definitions on ephemeral laptop drives without version tracking." },
      { id: 'D', text: "Deploy unverified third-party binaries with root cluster permissions directly onto production nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package XRDs and Compositions as Crossplane Configuration packages published to an OCI container registry with semantic versioning. Crossplane uses OCI container registries to distribute Providers and Configurations. Platform teams build immutable, versioned Configuration packages containing XRDs and Compositions, allowing deterministic upgrades and dependencies across cluster environments.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/packages/",
    tags: ["Crossplane Packages", "Crossplane Packages", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-396",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Cluster API Control Plane Providers and Automated Rolling Upgrades: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates CAPI Upgrades to upgrade 50 production Kubernetes clusters from version 1.29 to 1.30 without dropping in-flight application traffic.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Automating Kubernetes control plane and worker node rolling upgrades using KubeadmControlPlane is under consideration.",
    options: [
      { id: 'A', text: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade." },
      { id: 'B', text: "Delete all running worker nodes simultaneously, incurring total cluster-wide application downtime." },
      { id: 'C', text: "Manually compile kubelet binaries from source on every live node over interactive SSH." },
      { id: 'D', text: "Refuse to ever upgrade Kubernetes versions, leaving clusters exposed to known security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade. Cluster API manages cluster lifecycle declaratively. Updating the `spec.version` on `KubeadmControlPlane` and `MachineDeployment` triggers a rolling update: new control plane nodes join, etcd synchronizes, old nodes drain gracefully, and worker nodes surge without downtime.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/tasks/upgrading-clusters.html",
    tags: ["CAPI Upgrades", "CAPI Upgrades", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-397",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Cluster API Control Plane Providers and Automated Rolling Upgrades: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates CAPI Upgrades to upgrade 50 production Kubernetes clusters from version 1.29 to 1.30 without dropping in-flight application traffic.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Automating Kubernetes control plane and worker node rolling upgrades using KubeadmControlPlane is under consideration.",
    options: [
      { id: 'A', text: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade." },
      { id: 'B', text: "Delete all running worker nodes simultaneously, incurring total cluster-wide application downtime." },
      { id: 'C', text: "Manually compile kubelet binaries from source on every live node over interactive SSH." },
      { id: 'D', text: "Refuse to ever upgrade Kubernetes versions, leaving clusters exposed to known security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade. Cluster API manages cluster lifecycle declaratively. Updating the `spec.version` on `KubeadmControlPlane` and `MachineDeployment` triggers a rolling update: new control plane nodes join, etcd synchronizes, old nodes drain gracefully, and worker nodes surge without downtime.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/tasks/upgrading-clusters.html",
    tags: ["CAPI Upgrades", "CAPI Upgrades", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-398",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Cluster API Control Plane Providers and Automated Rolling Upgrades: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates CAPI Upgrades to upgrade 50 production Kubernetes clusters from version 1.29 to 1.30 without dropping in-flight application traffic.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Automating Kubernetes control plane and worker node rolling upgrades using KubeadmControlPlane is under consideration.",
    options: [
      { id: 'A', text: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade." },
      { id: 'B', text: "Delete all running worker nodes simultaneously, incurring total cluster-wide application downtime." },
      { id: 'C', text: "Manually compile kubelet binaries from source on every live node over interactive SSH." },
      { id: 'D', text: "Refuse to ever upgrade Kubernetes versions, leaving clusters exposed to known security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade. Cluster API manages cluster lifecycle declaratively. Updating the `spec.version` on `KubeadmControlPlane` and `MachineDeployment` triggers a rolling update: new control plane nodes join, etcd synchronizes, old nodes drain gracefully, and worker nodes surge without downtime.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/tasks/upgrading-clusters.html",
    tags: ["CAPI Upgrades", "CAPI Upgrades", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-399",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Cluster API Control Plane Providers and Automated Rolling Upgrades: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates CAPI Upgrades to upgrade 50 production Kubernetes clusters from version 1.29 to 1.30 without dropping in-flight application traffic.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Automating Kubernetes control plane and worker node rolling upgrades using KubeadmControlPlane is under consideration.",
    options: [
      { id: 'A', text: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade." },
      { id: 'B', text: "Delete all running worker nodes simultaneously, incurring total cluster-wide application downtime." },
      { id: 'C', text: "Manually compile kubelet binaries from source on every live node over interactive SSH." },
      { id: 'D', text: "Refuse to ever upgrade Kubernetes versions, leaving clusters exposed to known security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade. Cluster API manages cluster lifecycle declaratively. Updating the `spec.version` on `KubeadmControlPlane` and `MachineDeployment` triggers a rolling update: new control plane nodes join, etcd synchronizes, old nodes drain gracefully, and worker nodes surge without downtime.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/tasks/upgrading-clusters.html",
    tags: ["CAPI Upgrades", "CAPI Upgrades", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-400",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Cluster API Control Plane Providers and Automated Rolling Upgrades: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates CAPI Upgrades to upgrade 50 production Kubernetes clusters from version 1.29 to 1.30 without dropping in-flight application traffic.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Automating Kubernetes control plane and worker node rolling upgrades using KubeadmControlPlane is under consideration.",
    options: [
      { id: 'A', text: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade." },
      { id: 'B', text: "Delete all running worker nodes simultaneously, incurring total cluster-wide application downtime." },
      { id: 'C', text: "Manually compile kubelet binaries from source on every live node over interactive SSH." },
      { id: 'D', text: "Refuse to ever upgrade Kubernetes versions, leaving clusters exposed to known security vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Update the Kubernetes version in the Cluster API `KubeadmControlPlane` and `MachineDeployment` manifests to trigger an automated rolling upgrade. Cluster API manages cluster lifecycle declaratively. Updating the `spec.version` on `KubeadmControlPlane` and `MachineDeployment` triggers a rolling update: new control plane nodes join, etcd synchronizes, old nodes drain gracefully, and worker nodes surge without downtime.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/tasks/upgrading-clusters.html",
    tags: ["CAPI Upgrades", "CAPI Upgrades", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_16;
