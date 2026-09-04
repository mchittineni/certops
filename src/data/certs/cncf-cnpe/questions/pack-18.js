export const CNCF_CNPE_QUESTIONS_18 = [
  {
    id: "cncf-cnpe-426",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Service Mesh Multi-Tenancy and Namespace Scoping: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Mesh Multi-Tenancy to prevent high-scale multi-tenant service meshes from exhausting pod memory due to global service endpoint discovery overhead.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Scoping service discovery, sidecar memory consumption, and authorization policies via Sidecar CRDs is under consideration.",
    options: [
      { id: 'A', text: "Disable service mesh sidecars to avoid memory tuning." },
      { id: 'B', text: "Open all service-to-service communication to unauthenticated plaintext traffic." },
      { id: 'C', text: "Allow every sidecar proxy to receive configuration for all 10,000 services across the entire enterprise cluster." },
      { id: 'D', text: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules. In large clusters, service mesh proxies (Envoy) consume massive amounts of memory by maintaining endpoints for every service. Platform engineers use Istio `Sidecar` resources to scope proxy egress strictly to required namespaces and enforce strict `AuthorizationPolicy` boundaries.",
    referenceUrl: "https://istio.io/latest/docs/reference/config/networking/sidecar/",
    tags: ["Mesh Multi-Tenancy", "Mesh Multi-Tenancy", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-427",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Service Mesh Multi-Tenancy and Namespace Scoping: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Mesh Multi-Tenancy to prevent high-scale multi-tenant service meshes from exhausting pod memory due to global service endpoint discovery overhead.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Scoping service discovery, sidecar memory consumption, and authorization policies via Sidecar CRDs is under consideration.",
    options: [
      { id: 'A', text: "Open all service-to-service communication to unauthenticated plaintext traffic." },
      { id: 'B', text: "Disable service mesh sidecars to avoid memory tuning." },
      { id: 'C', text: "Allow every sidecar proxy to receive configuration for all 10,000 services across the entire enterprise cluster." },
      { id: 'D', text: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules. In large clusters, service mesh proxies (Envoy) consume massive amounts of memory by maintaining endpoints for every service. Platform engineers use Istio `Sidecar` resources to scope proxy egress strictly to required namespaces and enforce strict `AuthorizationPolicy` boundaries.",
    referenceUrl: "https://istio.io/latest/docs/reference/config/networking/sidecar/",
    tags: ["Mesh Multi-Tenancy", "Mesh Multi-Tenancy", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-428",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Service Mesh Multi-Tenancy and Namespace Scoping: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Mesh Multi-Tenancy to prevent high-scale multi-tenant service meshes from exhausting pod memory due to global service endpoint discovery overhead.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Scoping service discovery, sidecar memory consumption, and authorization policies via Sidecar CRDs is under consideration.",
    options: [
      { id: 'A', text: "Disable service mesh sidecars to avoid memory tuning." },
      { id: 'B', text: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules." },
      { id: 'C', text: "Open all service-to-service communication to unauthenticated plaintext traffic." },
      { id: 'D', text: "Allow every sidecar proxy to receive configuration for all 10,000 services across the entire enterprise cluster." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules. In large clusters, service mesh proxies (Envoy) consume massive amounts of memory by maintaining endpoints for every service. Platform engineers use Istio `Sidecar` resources to scope proxy egress strictly to required namespaces and enforce strict `AuthorizationPolicy` boundaries.",
    referenceUrl: "https://istio.io/latest/docs/reference/config/networking/sidecar/",
    tags: ["Mesh Multi-Tenancy", "Mesh Multi-Tenancy", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-429",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Service Mesh Multi-Tenancy and Namespace Scoping: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Mesh Multi-Tenancy to prevent high-scale multi-tenant service meshes from exhausting pod memory due to global service endpoint discovery overhead.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Scoping service discovery, sidecar memory consumption, and authorization policies via Sidecar CRDs is under consideration.",
    options: [
      { id: 'A', text: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules." },
      { id: 'B', text: "Open all service-to-service communication to unauthenticated plaintext traffic." },
      { id: 'C', text: "Disable service mesh sidecars to avoid memory tuning." },
      { id: 'D', text: "Allow every sidecar proxy to receive configuration for all 10,000 services across the entire enterprise cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules. In large clusters, service mesh proxies (Envoy) consume massive amounts of memory by maintaining endpoints for every service. Platform engineers use Istio `Sidecar` resources to scope proxy egress strictly to required namespaces and enforce strict `AuthorizationPolicy` boundaries.",
    referenceUrl: "https://istio.io/latest/docs/reference/config/networking/sidecar/",
    tags: ["Mesh Multi-Tenancy", "Mesh Multi-Tenancy", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-430",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Service Mesh Multi-Tenancy and Namespace Scoping: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Mesh Multi-Tenancy to prevent high-scale multi-tenant service meshes from exhausting pod memory due to global service endpoint discovery overhead.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Scoping service discovery, sidecar memory consumption, and authorization policies via Sidecar CRDs is under consideration.",
    options: [
      { id: 'A', text: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules." },
      { id: 'B', text: "Allow every sidecar proxy to receive configuration for all 10,000 services across the entire enterprise cluster." },
      { id: 'C', text: "Disable service mesh sidecars to avoid memory tuning." },
      { id: 'D', text: "Open all service-to-service communication to unauthenticated plaintext traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Istio `Sidecar` resources scoping service discovery strictly to local and permitted namespaces, and apply `AuthorizationPolicy` rules. In large clusters, service mesh proxies (Envoy) consume massive amounts of memory by maintaining endpoints for every service. Platform engineers use Istio `Sidecar` resources to scope proxy egress strictly to required namespaces and enforce strict `AuthorizationPolicy` boundaries.",
    referenceUrl: "https://istio.io/latest/docs/reference/config/networking/sidecar/",
    tags: ["Mesh Multi-Tenancy", "Mesh Multi-Tenancy", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-431",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Services (MCS) and Cross-Cluster Gateways: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Multi-Cluster Services to enable a frontend service in Cluster A to discover and communicate with a private backend service in Cluster B securely.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Exporting and importing services across clusters using the Kubernetes Multi-Cluster Services (MCS) API is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static private node IP addresses inside application source code." },
      { id: 'B', text: "Force all cross-cluster traffic to route through public internet ingress controllers with hairpin latency." },
      { id: 'C', text: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh." },
      { id: 'D', text: "Expose backend database ports directly to the public internet using LoadBalancer services without authentication." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh. The Kubernetes Multi-Cluster Services (MCS) API standardizes cross-cluster service discovery. By declaring `ServiceExport` in the providing cluster, an engine (like Cilium or Submariner) creates a corresponding `ServiceImport` and cluster-independent DNS record in the consuming cluster.",
    referenceUrl: "https://github.com/kubernetes-sigs/mcs-api",
    tags: ["Multi-Cluster Services", "Multi-Cluster Services", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-432",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Services (MCS) and Cross-Cluster Gateways: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Multi-Cluster Services to enable a frontend service in Cluster A to discover and communicate with a private backend service in Cluster B securely.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Exporting and importing services across clusters using the Kubernetes Multi-Cluster Services (MCS) API is under consideration.",
    options: [
      { id: 'A', text: "Force all cross-cluster traffic to route through public internet ingress controllers with hairpin latency." },
      { id: 'B', text: "Hardcode static private node IP addresses inside application source code." },
      { id: 'C', text: "Expose backend database ports directly to the public internet using LoadBalancer services without authentication." },
      { id: 'D', text: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh. The Kubernetes Multi-Cluster Services (MCS) API standardizes cross-cluster service discovery. By declaring `ServiceExport` in the providing cluster, an engine (like Cilium or Submariner) creates a corresponding `ServiceImport` and cluster-independent DNS record in the consuming cluster.",
    referenceUrl: "https://github.com/kubernetes-sigs/mcs-api",
    tags: ["Multi-Cluster Services", "Multi-Cluster Services", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-433",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Services (MCS) and Cross-Cluster Gateways: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Multi-Cluster Services to enable a frontend service in Cluster A to discover and communicate with a private backend service in Cluster B securely.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Exporting and importing services across clusters using the Kubernetes Multi-Cluster Services (MCS) API is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static private node IP addresses inside application source code." },
      { id: 'B', text: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh." },
      { id: 'C', text: "Force all cross-cluster traffic to route through public internet ingress controllers with hairpin latency." },
      { id: 'D', text: "Expose backend database ports directly to the public internet using LoadBalancer services without authentication." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh. The Kubernetes Multi-Cluster Services (MCS) API standardizes cross-cluster service discovery. By declaring `ServiceExport` in the providing cluster, an engine (like Cilium or Submariner) creates a corresponding `ServiceImport` and cluster-independent DNS record in the consuming cluster.",
    referenceUrl: "https://github.com/kubernetes-sigs/mcs-api",
    tags: ["Multi-Cluster Services", "Multi-Cluster Services", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-434",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Services (MCS) and Cross-Cluster Gateways: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Multi-Cluster Services to enable a frontend service in Cluster A to discover and communicate with a private backend service in Cluster B securely.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Exporting and importing services across clusters using the Kubernetes Multi-Cluster Services (MCS) API is under consideration.",
    options: [
      { id: 'A', text: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh." },
      { id: 'B', text: "Force all cross-cluster traffic to route through public internet ingress controllers with hairpin latency." },
      { id: 'C', text: "Hardcode static private node IP addresses inside application source code." },
      { id: 'D', text: "Expose backend database ports directly to the public internet using LoadBalancer services without authentication." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh. The Kubernetes Multi-Cluster Services (MCS) API standardizes cross-cluster service discovery. By declaring `ServiceExport` in the providing cluster, an engine (like Cilium or Submariner) creates a corresponding `ServiceImport` and cluster-independent DNS record in the consuming cluster.",
    referenceUrl: "https://github.com/kubernetes-sigs/mcs-api",
    tags: ["Multi-Cluster Services", "Multi-Cluster Services", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-435",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Services (MCS) and Cross-Cluster Gateways: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Multi-Cluster Services to enable a frontend service in Cluster A to discover and communicate with a private backend service in Cluster B securely.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Exporting and importing services across clusters using the Kubernetes Multi-Cluster Services (MCS) API is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static private node IP addresses inside application source code." },
      { id: 'B', text: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh." },
      { id: 'C', text: "Force all cross-cluster traffic to route through public internet ingress controllers with hairpin latency." },
      { id: 'D', text: "Expose backend database ports directly to the public internet using LoadBalancer services without authentication." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement the Kubernetes Multi-Cluster Services (MCS) API using `ServiceExport` and `ServiceImport` primitives backed by Submariner or Cilium ClusterMesh. The Kubernetes Multi-Cluster Services (MCS) API standardizes cross-cluster service discovery. By declaring `ServiceExport` in the providing cluster, an engine (like Cilium or Submariner) creates a corresponding `ServiceImport` and cluster-independent DNS record in the consuming cluster.",
    referenceUrl: "https://github.com/kubernetes-sigs/mcs-api",
    tags: ["Multi-Cluster Services", "Multi-Cluster Services", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-436",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Elastic Compute Pooling and Consolidation: Karpenter: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Karpenter Consolidation to reduce enterprise cloud compute spend by 40% while ensuring batch workloads handle spot instance terminations gracefully.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Dynamic instance right-sizing, spot interruption handling, and node consolidation in Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Ignore spot instance termination notices, allowing batch workloads to crash abruptly with data corruption." },
      { id: 'B', text: "Deploy static, fixed-size node groups with overprovisioned instance types that sit idle 80% of the day." },
      { id: 'C', text: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge." },
      { id: 'D', text: "Require human platform operators to manually spin up cloud VMs during customer traffic spikes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge. Karpenter is an intelligent Kubernetes node autoscaler. It bypasses node groups, selecting the optimal combination of instance types based on pending pod requirements. Its consolidation engine continuously packs workloads, terminating unnecessary nodes and handling spot interruptions gracefully.",
    referenceUrl: "https://karpenter.sh/docs/concepts/deprovisioning/",
    tags: ["Karpenter Consolidation", "Karpenter Consolidation", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-437",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Elastic Compute Pooling and Consolidation: Karpenter: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Karpenter Consolidation to reduce enterprise cloud compute spend by 40% while ensuring batch workloads handle spot instance terminations gracefully.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Dynamic instance right-sizing, spot interruption handling, and node consolidation in Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Ignore spot instance termination notices, allowing batch workloads to crash abruptly with data corruption." },
      { id: 'B', text: "Deploy static, fixed-size node groups with overprovisioned instance types that sit idle 80% of the day." },
      { id: 'C', text: "Require human platform operators to manually spin up cloud VMs during customer traffic spikes." },
      { id: 'D', text: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge. Karpenter is an intelligent Kubernetes node autoscaler. It bypasses node groups, selecting the optimal combination of instance types based on pending pod requirements. Its consolidation engine continuously packs workloads, terminating unnecessary nodes and handling spot interruptions gracefully.",
    referenceUrl: "https://karpenter.sh/docs/concepts/deprovisioning/",
    tags: ["Karpenter Consolidation", "Karpenter Consolidation", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-438",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Elastic Compute Pooling and Consolidation: Karpenter: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Karpenter Consolidation to reduce enterprise cloud compute spend by 40% while ensuring batch workloads handle spot instance terminations gracefully.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Dynamic instance right-sizing, spot interruption handling, and node consolidation in Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Require human platform operators to manually spin up cloud VMs during customer traffic spikes." },
      { id: 'B', text: "Ignore spot instance termination notices, allowing batch workloads to crash abruptly with data corruption." },
      { id: 'C', text: "Deploy static, fixed-size node groups with overprovisioned instance types that sit idle 80% of the day." },
      { id: 'D', text: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge. Karpenter is an intelligent Kubernetes node autoscaler. It bypasses node groups, selecting the optimal combination of instance types based on pending pod requirements. Its consolidation engine continuously packs workloads, terminating unnecessary nodes and handling spot interruptions gracefully.",
    referenceUrl: "https://karpenter.sh/docs/concepts/deprovisioning/",
    tags: ["Karpenter Consolidation", "Karpenter Consolidation", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-439",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Elastic Compute Pooling and Consolidation: Karpenter: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Karpenter Consolidation to reduce enterprise cloud compute spend by 40% while ensuring batch workloads handle spot instance terminations gracefully.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Dynamic instance right-sizing, spot interruption handling, and node consolidation in Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Deploy static, fixed-size node groups with overprovisioned instance types that sit idle 80% of the day." },
      { id: 'B', text: "Require human platform operators to manually spin up cloud VMs during customer traffic spikes." },
      { id: 'C', text: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge." },
      { id: 'D', text: "Ignore spot instance termination notices, allowing batch workloads to crash abruptly with data corruption." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge. Karpenter is an intelligent Kubernetes node autoscaler. It bypasses node groups, selecting the optimal combination of instance types based on pending pod requirements. Its consolidation engine continuously packs workloads, terminating unnecessary nodes and handling spot interruptions gracefully.",
    referenceUrl: "https://karpenter.sh/docs/concepts/deprovisioning/",
    tags: ["Karpenter Consolidation", "Karpenter Consolidation", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-440",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Elastic Compute Pooling and Consolidation: Karpenter: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Karpenter Consolidation to reduce enterprise cloud compute spend by 40% while ensuring batch workloads handle spot instance terminations gracefully.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Dynamic instance right-sizing, spot interruption handling, and node consolidation in Kubernetes is under consideration.",
    options: [
      { id: 'A', text: "Deploy static, fixed-size node groups with overprovisioned instance types that sit idle 80% of the day." },
      { id: 'B', text: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge." },
      { id: 'C', text: "Require human platform operators to manually spin up cloud VMs during customer traffic spikes." },
      { id: 'D', text: "Ignore spot instance termination notices, allowing batch workloads to crash abruptly with data corruption." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Karpenter with automated node consolidation enabled and dynamic spot instance interruption handling via AWS SQS / event bridge. Karpenter is an intelligent Kubernetes node autoscaler. It bypasses node groups, selecting the optimal combination of instance types based on pending pod requirements. Its consolidation engine continuously packs workloads, terminating unnecessary nodes and handling spot interruptions gracefully.",
    referenceUrl: "https://karpenter.sh/docs/concepts/deprovisioning/",
    tags: ["Karpenter Consolidation", "Karpenter Consolidation", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-441",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Disaster Recovery: Velero and Volume Snapshots: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Disaster Recovery to recover mission-critical stateful microservices rapidly in an alternate cloud region following a catastrophic regional data center outage.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Automating scheduled cluster state backups, CSI volume snapshots, and cross-region recovery via Velero is under consideration.",
    options: [
      { id: 'A', text: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage." },
      { id: 'B', text: "Store cluster backups exclusively on the local disks of the servers that are at risk of failing." },
      { id: 'C', text: "Rely on manual handwritten documentation to reconstruct Kubernetes clusters from memory during an outage." },
      { id: 'D', text: "Avoid backing up persistent volumes to save backup storage costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage. Disaster recovery in Kubernetes requires capturing both declarative cluster resources and stateful persistent storage. Velero backs up Kubernetes metadata to object storage and leverages CSI volume snapshots to replicate block storage across cloud regions for rapid recovery.",
    referenceUrl: "https://velero.io/docs/main/csi/",
    tags: ["Disaster Recovery", "Disaster Recovery", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-442",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Disaster Recovery: Velero and Volume Snapshots: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Disaster Recovery to recover mission-critical stateful microservices rapidly in an alternate cloud region following a catastrophic regional data center outage.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Automating scheduled cluster state backups, CSI volume snapshots, and cross-region recovery via Velero is under consideration.",
    options: [
      { id: 'A', text: "Rely on manual handwritten documentation to reconstruct Kubernetes clusters from memory during an outage." },
      { id: 'B', text: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage." },
      { id: 'C', text: "Avoid backing up persistent volumes to save backup storage costs." },
      { id: 'D', text: "Store cluster backups exclusively on the local disks of the servers that are at risk of failing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage. Disaster recovery in Kubernetes requires capturing both declarative cluster resources and stateful persistent storage. Velero backs up Kubernetes metadata to object storage and leverages CSI volume snapshots to replicate block storage across cloud regions for rapid recovery.",
    referenceUrl: "https://velero.io/docs/main/csi/",
    tags: ["Disaster Recovery", "Disaster Recovery", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-443",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Disaster Recovery: Velero and Volume Snapshots: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Disaster Recovery to recover mission-critical stateful microservices rapidly in an alternate cloud region following a catastrophic regional data center outage.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Automating scheduled cluster state backups, CSI volume snapshots, and cross-region recovery via Velero is under consideration.",
    options: [
      { id: 'A', text: "Avoid backing up persistent volumes to save backup storage costs." },
      { id: 'B', text: "Store cluster backups exclusively on the local disks of the servers that are at risk of failing." },
      { id: 'C', text: "Rely on manual handwritten documentation to reconstruct Kubernetes clusters from memory during an outage." },
      { id: 'D', text: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage. Disaster recovery in Kubernetes requires capturing both declarative cluster resources and stateful persistent storage. Velero backs up Kubernetes metadata to object storage and leverages CSI volume snapshots to replicate block storage across cloud regions for rapid recovery.",
    referenceUrl: "https://velero.io/docs/main/csi/",
    tags: ["Disaster Recovery", "Disaster Recovery", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-444",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Disaster Recovery: Velero and Volume Snapshots: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Disaster Recovery to recover mission-critical stateful microservices rapidly in an alternate cloud region following a catastrophic regional data center outage.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Automating scheduled cluster state backups, CSI volume snapshots, and cross-region recovery via Velero is under consideration.",
    options: [
      { id: 'A', text: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage." },
      { id: 'B', text: "Store cluster backups exclusively on the local disks of the servers that are at risk of failing." },
      { id: 'C', text: "Rely on manual handwritten documentation to reconstruct Kubernetes clusters from memory during an outage." },
      { id: 'D', text: "Avoid backing up persistent volumes to save backup storage costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage. Disaster recovery in Kubernetes requires capturing both declarative cluster resources and stateful persistent storage. Velero backs up Kubernetes metadata to object storage and leverages CSI volume snapshots to replicate block storage across cloud regions for rapid recovery.",
    referenceUrl: "https://velero.io/docs/main/csi/",
    tags: ["Disaster Recovery", "Disaster Recovery", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-445",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Cluster Disaster Recovery: Velero and Volume Snapshots: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Disaster Recovery to recover mission-critical stateful microservices rapidly in an alternate cloud region following a catastrophic regional data center outage.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Automating scheduled cluster state backups, CSI volume snapshots, and cross-region recovery via Velero is under consideration.",
    options: [
      { id: 'A', text: "Rely on manual handwritten documentation to reconstruct Kubernetes clusters from memory during an outage." },
      { id: 'B', text: "Avoid backing up persistent volumes to save backup storage costs." },
      { id: 'C', text: "Store cluster backups exclusively on the local disks of the servers that are at risk of failing." },
      { id: 'D', text: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Velero with CSI volume snapshot plugins to automate scheduled cluster manifest and storage backups to remote object storage. Disaster recovery in Kubernetes requires capturing both declarative cluster resources and stateful persistent storage. Velero backs up Kubernetes metadata to object storage and leverages CSI volume snapshots to replicate block storage across cloud regions for rapid recovery.",
    referenceUrl: "https://velero.io/docs/main/csi/",
    tags: ["Disaster Recovery", "Disaster Recovery", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-446",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Chaos Engineering in Platform Substrates: Chaos Mesh: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Chaos Engineering to verify that automated failover, circuit breakers, and pod rescheduling operate reliably before deploying critical systems to production.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Simulating network partitions, pod failures, and clock skew using Chaos Mesh or LitmusChaos is under consideration.",
    options: [
      { id: 'A', text: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging." },
      { id: 'B', text: "Assume software systems never experience network partitions or hardware failures." },
      { id: 'C', text: "Test disaster recovery procedures by randomly pulling power cables in live production data centers during business hours." },
      { id: 'D', text: "Prohibit fault injection testing to avoid discovering defects in application resilience." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging. Chaos engineering validates system resilience under stress. Using cloud-native operators like Chaos Mesh, platform engineers define chaos experiments (e.g., `NetworkChaos`, `PodChaos`) as Custom Resources, proving that services survive infrastructure disruptions before production launch.",
    referenceUrl: "https://chaos-mesh.org/",
    tags: ["Chaos Engineering", "Chaos Engineering", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-447",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Chaos Engineering in Platform Substrates: Chaos Mesh: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Chaos Engineering to verify that automated failover, circuit breakers, and pod rescheduling operate reliably before deploying critical systems to production.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Simulating network partitions, pod failures, and clock skew using Chaos Mesh or LitmusChaos is under consideration.",
    options: [
      { id: 'A', text: "Prohibit fault injection testing to avoid discovering defects in application resilience." },
      { id: 'B', text: "Assume software systems never experience network partitions or hardware failures." },
      { id: 'C', text: "Test disaster recovery procedures by randomly pulling power cables in live production data centers during business hours." },
      { id: 'D', text: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging. Chaos engineering validates system resilience under stress. Using cloud-native operators like Chaos Mesh, platform engineers define chaos experiments (e.g., `NetworkChaos`, `PodChaos`) as Custom Resources, proving that services survive infrastructure disruptions before production launch.",
    referenceUrl: "https://chaos-mesh.org/",
    tags: ["Chaos Engineering", "Chaos Engineering", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-448",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Chaos Engineering in Platform Substrates: Chaos Mesh: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Chaos Engineering to verify that automated failover, circuit breakers, and pod rescheduling operate reliably before deploying critical systems to production.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Simulating network partitions, pod failures, and clock skew using Chaos Mesh or LitmusChaos is under consideration.",
    options: [
      { id: 'A', text: "Assume software systems never experience network partitions or hardware failures." },
      { id: 'B', text: "Test disaster recovery procedures by randomly pulling power cables in live production data centers during business hours." },
      { id: 'C', text: "Prohibit fault injection testing to avoid discovering defects in application resilience." },
      { id: 'D', text: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging. Chaos engineering validates system resilience under stress. Using cloud-native operators like Chaos Mesh, platform engineers define chaos experiments (e.g., `NetworkChaos`, `PodChaos`) as Custom Resources, proving that services survive infrastructure disruptions before production launch.",
    referenceUrl: "https://chaos-mesh.org/",
    tags: ["Chaos Engineering", "Chaos Engineering", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-449",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Chaos Engineering in Platform Substrates: Chaos Mesh: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Chaos Engineering to verify that automated failover, circuit breakers, and pod rescheduling operate reliably before deploying critical systems to production.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Simulating network partitions, pod failures, and clock skew using Chaos Mesh or LitmusChaos is under consideration.",
    options: [
      { id: 'A', text: "Prohibit fault injection testing to avoid discovering defects in application resilience." },
      { id: 'B', text: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging." },
      { id: 'C', text: "Test disaster recovery procedures by randomly pulling power cables in live production data centers during business hours." },
      { id: 'D', text: "Assume software systems never experience network partitions or hardware failures." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging. Chaos engineering validates system resilience under stress. Using cloud-native operators like Chaos Mesh, platform engineers define chaos experiments (e.g., `NetworkChaos`, `PodChaos`) as Custom Resources, proving that services survive infrastructure disruptions before production launch.",
    referenceUrl: "https://chaos-mesh.org/",
    tags: ["Chaos Engineering", "Chaos Engineering", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-450",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Chaos Engineering in Platform Substrates: Chaos Mesh: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Chaos Engineering to verify that automated failover, circuit breakers, and pod rescheduling operate reliably before deploying critical systems to production.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Simulating network partitions, pod failures, and clock skew using Chaos Mesh or LitmusChaos is under consideration.",
    options: [
      { id: 'A', text: "Prohibit fault injection testing to avoid discovering defects in application resilience." },
      { id: 'B', text: "Test disaster recovery procedures by randomly pulling power cables in live production data centers during business hours." },
      { id: 'C', text: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging." },
      { id: 'D', text: "Assume software systems never experience network partitions or hardware failures." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute automated chaos experiments using Chaos Mesh or LitmusChaos to simulate pod crashes, network latency, and DNS failures in staging. Chaos engineering validates system resilience under stress. Using cloud-native operators like Chaos Mesh, platform engineers define chaos experiments (e.g., `NetworkChaos`, `PodChaos`) as Custom Resources, proving that services survive infrastructure disruptions before production launch.",
    referenceUrl: "https://chaos-mesh.org/",
    tags: ["Chaos Engineering", "Chaos Engineering", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_18;
