export const CNCF_CNPE_QUESTIONS_17 = [
  {
    id: "cncf-cnpe-401",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Virtual Clusters (vcluster) Syncer Architecture: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates vcluster Syncer to provide 50 feature teams with independent cluster-admin rights and CRDs on shared infrastructure without API server performance degradation.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Isolating tenant control planes while selectively syncing low-level pods to host clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster." },
      { id: 'B', text: "Provision 50 costly, dedicated physical Kubernetes clusters with dedicated master and worker nodes." },
      { id: 'C', text: "Grant full physical cluster-admin rights to all 50 teams on a single shared production cluster." },
      { id: 'D', text: "Disable all Kubernetes RBAC rules and allow teams to overwrite each other's namespaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster. Virtual clusters (vcluster) provide hard multi-tenancy. Each vcluster runs its own dedicated API server and etcd, allowing tenants full cluster-admin access to install CRDs. A lightweight syncer copies low-level pods to the host cluster for actual container execution.",
    referenceUrl: "https://www.vcluster.com/docs/architecture",
    tags: ["vcluster Syncer", "vcluster Syncer", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-402",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Virtual Clusters (vcluster) Syncer Architecture: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates vcluster Syncer to provide 50 feature teams with independent cluster-admin rights and CRDs on shared infrastructure without API server performance degradation.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Isolating tenant control planes while selectively syncing low-level pods to host clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster." },
      { id: 'B', text: "Provision 50 costly, dedicated physical Kubernetes clusters with dedicated master and worker nodes." },
      { id: 'C', text: "Grant full physical cluster-admin rights to all 50 teams on a single shared production cluster." },
      { id: 'D', text: "Disable all Kubernetes RBAC rules and allow teams to overwrite each other's namespaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster. Virtual clusters (vcluster) provide hard multi-tenancy. Each vcluster runs its own dedicated API server and etcd, allowing tenants full cluster-admin access to install CRDs. A lightweight syncer copies low-level pods to the host cluster for actual container execution.",
    referenceUrl: "https://www.vcluster.com/docs/architecture",
    tags: ["vcluster Syncer", "vcluster Syncer", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-403",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Virtual Clusters (vcluster) Syncer Architecture: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates vcluster Syncer to provide 50 feature teams with independent cluster-admin rights and CRDs on shared infrastructure without API server performance degradation.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Isolating tenant control planes while selectively syncing low-level pods to host clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster." },
      { id: 'B', text: "Provision 50 costly, dedicated physical Kubernetes clusters with dedicated master and worker nodes." },
      { id: 'C', text: "Grant full physical cluster-admin rights to all 50 teams on a single shared production cluster." },
      { id: 'D', text: "Disable all Kubernetes RBAC rules and allow teams to overwrite each other's namespaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster. Virtual clusters (vcluster) provide hard multi-tenancy. Each vcluster runs its own dedicated API server and etcd, allowing tenants full cluster-admin access to install CRDs. A lightweight syncer copies low-level pods to the host cluster for actual container execution.",
    referenceUrl: "https://www.vcluster.com/docs/architecture",
    tags: ["vcluster Syncer", "vcluster Syncer", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-404",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Virtual Clusters (vcluster) Syncer Architecture: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates vcluster Syncer to provide 50 feature teams with independent cluster-admin rights and CRDs on shared infrastructure without API server performance degradation.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Isolating tenant control planes while selectively syncing low-level pods to host clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster." },
      { id: 'B', text: "Provision 50 costly, dedicated physical Kubernetes clusters with dedicated master and worker nodes." },
      { id: 'C', text: "Grant full physical cluster-admin rights to all 50 teams on a single shared production cluster." },
      { id: 'D', text: "Disable all Kubernetes RBAC rules and allow teams to overwrite each other's namespaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster. Virtual clusters (vcluster) provide hard multi-tenancy. Each vcluster runs its own dedicated API server and etcd, allowing tenants full cluster-admin access to install CRDs. A lightweight syncer copies low-level pods to the host cluster for actual container execution.",
    referenceUrl: "https://www.vcluster.com/docs/architecture",
    tags: ["vcluster Syncer", "vcluster Syncer", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-405",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Virtual Clusters (vcluster) Syncer Architecture: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates vcluster Syncer to provide 50 feature teams with independent cluster-admin rights and CRDs on shared infrastructure without API server performance degradation.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Isolating tenant control planes while selectively syncing low-level pods to host clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster." },
      { id: 'B', text: "Provision 50 costly, dedicated physical Kubernetes clusters with dedicated master and worker nodes." },
      { id: 'C', text: "Grant full physical cluster-admin rights to all 50 teams on a single shared production cluster." },
      { id: 'D', text: "Disable all Kubernetes RBAC rules and allow teams to overwrite each other's namespaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy virtual clusters (vcluster), which run lightweight tenant control planes while a syncer forwards worker pods to the underlying host cluster. Virtual clusters (vcluster) provide hard multi-tenancy. Each vcluster runs its own dedicated API server and etcd, allowing tenants full cluster-admin access to install CRDs. A lightweight syncer copies low-level pods to the host cluster for actual container execution.",
    referenceUrl: "https://www.vcluster.com/docs/architecture",
    tags: ["vcluster Syncer", "vcluster Syncer", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-406",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Tenant Network Isolation with Cilium and eBPF: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Cilium eBPF to isolate multi-tenant microservices cryptographically and enforce strict L7 HTTP API path filtering without iptables overhead.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Enforcing L3/L4 and L7 network security, transparent encryption, and host firewalling via eBPF is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption." },
      { id: 'B', text: "Rely on legacy iptables with tens of thousands of rules that cause severe packet processing latency and CPU bottlenecks." },
      { id: 'C', text: "Leave all internal cluster networking completely unsegmented and unencrypted." },
      { id: 'D', text: "Disable network firewalls between application workloads and sensitive internal databases." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption. Cilium replaces iptables with high-performance Linux kernel eBPF programs. It delivers fine-grained L7 network policies (e.g., allowing only `GET /v1/public`), transparent node-to-node encryption via WireGuard or IPsec, and high-throughput multi-tenant isolation.",
    referenceUrl: "https://docs.cilium.io/en/stable/overview/intro/",
    tags: ["Cilium eBPF", "Cilium eBPF", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-407",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Tenant Network Isolation with Cilium and eBPF: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Cilium eBPF to isolate multi-tenant microservices cryptographically and enforce strict L7 HTTP API path filtering without iptables overhead.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Enforcing L3/L4 and L7 network security, transparent encryption, and host firewalling via eBPF is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption." },
      { id: 'B', text: "Rely on legacy iptables with tens of thousands of rules that cause severe packet processing latency and CPU bottlenecks." },
      { id: 'C', text: "Leave all internal cluster networking completely unsegmented and unencrypted." },
      { id: 'D', text: "Disable network firewalls between application workloads and sensitive internal databases." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption. Cilium replaces iptables with high-performance Linux kernel eBPF programs. It delivers fine-grained L7 network policies (e.g., allowing only `GET /v1/public`), transparent node-to-node encryption via WireGuard or IPsec, and high-throughput multi-tenant isolation.",
    referenceUrl: "https://docs.cilium.io/en/stable/overview/intro/",
    tags: ["Cilium eBPF", "Cilium eBPF", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-408",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Tenant Network Isolation with Cilium and eBPF: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Cilium eBPF to isolate multi-tenant microservices cryptographically and enforce strict L7 HTTP API path filtering without iptables overhead.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Enforcing L3/L4 and L7 network security, transparent encryption, and host firewalling via eBPF is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption." },
      { id: 'B', text: "Rely on legacy iptables with tens of thousands of rules that cause severe packet processing latency and CPU bottlenecks." },
      { id: 'C', text: "Leave all internal cluster networking completely unsegmented and unencrypted." },
      { id: 'D', text: "Disable network firewalls between application workloads and sensitive internal databases." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption. Cilium replaces iptables with high-performance Linux kernel eBPF programs. It delivers fine-grained L7 network policies (e.g., allowing only `GET /v1/public`), transparent node-to-node encryption via WireGuard or IPsec, and high-throughput multi-tenant isolation.",
    referenceUrl: "https://docs.cilium.io/en/stable/overview/intro/",
    tags: ["Cilium eBPF", "Cilium eBPF", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-409",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Tenant Network Isolation with Cilium and eBPF: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Cilium eBPF to isolate multi-tenant microservices cryptographically and enforce strict L7 HTTP API path filtering without iptables overhead.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Enforcing L3/L4 and L7 network security, transparent encryption, and host firewalling via eBPF is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption." },
      { id: 'B', text: "Rely on legacy iptables with tens of thousands of rules that cause severe packet processing latency and CPU bottlenecks." },
      { id: 'C', text: "Leave all internal cluster networking completely unsegmented and unencrypted." },
      { id: 'D', text: "Disable network firewalls between application workloads and sensitive internal databases." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption. Cilium replaces iptables with high-performance Linux kernel eBPF programs. It delivers fine-grained L7 network policies (e.g., allowing only `GET /v1/public`), transparent node-to-node encryption via WireGuard or IPsec, and high-throughput multi-tenant isolation.",
    referenceUrl: "https://docs.cilium.io/en/stable/overview/intro/",
    tags: ["Cilium eBPF", "Cilium eBPF", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-410",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Multi-Tenant Network Isolation with Cilium and eBPF: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Cilium eBPF to isolate multi-tenant microservices cryptographically and enforce strict L7 HTTP API path filtering without iptables overhead.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Enforcing L3/L4 and L7 network security, transparent encryption, and host firewalling via eBPF is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption." },
      { id: 'B', text: "Rely on legacy iptables with tens of thousands of rules that cause severe packet processing latency and CPU bottlenecks." },
      { id: 'C', text: "Leave all internal cluster networking completely unsegmented and unencrypted." },
      { id: 'D', text: "Disable network firewalls between application workloads and sensitive internal databases." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cilium using eBPF to enforce fine-grained L3/L4/L7 `CiliumNetworkPolicy` rules and transparent WireGuard node-to-node encryption. Cilium replaces iptables with high-performance Linux kernel eBPF programs. It delivers fine-grained L7 network policies (e.g., allowing only `GET /v1/public`), transparent node-to-node encryption via WireGuard or IPsec, and high-throughput multi-tenant isolation.",
    referenceUrl: "https://docs.cilium.io/en/stable/overview/intro/",
    tags: ["Cilium eBPF", "Cilium eBPF", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-411",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Hierarchical Namespace Management: Hierarchical Namespace Controller (HNC): Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Hierarchical Namespaces to manage multi-tenancy for an engineering department that requires shared quotas and role bindings across 20 child team namespaces.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Cascading resource quotas, RBAC roles, and network policies across parent and child namespaces is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance." },
      { id: 'B', text: "Manually duplicate identical RBAC manifests and quota files across 20 separate namespaces using shell scripts." },
      { id: 'C', text: "Merge all 20 teams into a single flat namespace where developers can accidentally delete each other's pods." },
      { id: 'D', text: "Disable resource quotas and allow a single misconfigured pod to starve the entire cluster of memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance. The Hierarchical Namespace Controller (HNC) solves multi-tenancy sprawl by introducing parent-child hierarchies to Kubernetes namespaces. Common policies, RBAC roles, and `ResourceQuotas` defined on the parent namespace propagate automatically to all child sub-namespaces.",
    referenceUrl: "https://github.com/kubernetes-sigs/hierarchical-namespaces",
    tags: ["Hierarchical Namespaces", "Hierarchical Namespaces", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-412",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Hierarchical Namespace Management: Hierarchical Namespace Controller (HNC): High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Hierarchical Namespaces to manage multi-tenancy for an engineering department that requires shared quotas and role bindings across 20 child team namespaces.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Cascading resource quotas, RBAC roles, and network policies across parent and child namespaces is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance." },
      { id: 'B', text: "Manually duplicate identical RBAC manifests and quota files across 20 separate namespaces using shell scripts." },
      { id: 'C', text: "Merge all 20 teams into a single flat namespace where developers can accidentally delete each other's pods." },
      { id: 'D', text: "Disable resource quotas and allow a single misconfigured pod to starve the entire cluster of memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance. The Hierarchical Namespace Controller (HNC) solves multi-tenancy sprawl by introducing parent-child hierarchies to Kubernetes namespaces. Common policies, RBAC roles, and `ResourceQuotas` defined on the parent namespace propagate automatically to all child sub-namespaces.",
    referenceUrl: "https://github.com/kubernetes-sigs/hierarchical-namespaces",
    tags: ["Hierarchical Namespaces", "Hierarchical Namespaces", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-413",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Hierarchical Namespace Management: Hierarchical Namespace Controller (HNC): Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Hierarchical Namespaces to manage multi-tenancy for an engineering department that requires shared quotas and role bindings across 20 child team namespaces.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Cascading resource quotas, RBAC roles, and network policies across parent and child namespaces is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance." },
      { id: 'B', text: "Manually duplicate identical RBAC manifests and quota files across 20 separate namespaces using shell scripts." },
      { id: 'C', text: "Merge all 20 teams into a single flat namespace where developers can accidentally delete each other's pods." },
      { id: 'D', text: "Disable resource quotas and allow a single misconfigured pod to starve the entire cluster of memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance. The Hierarchical Namespace Controller (HNC) solves multi-tenancy sprawl by introducing parent-child hierarchies to Kubernetes namespaces. Common policies, RBAC roles, and `ResourceQuotas` defined on the parent namespace propagate automatically to all child sub-namespaces.",
    referenceUrl: "https://github.com/kubernetes-sigs/hierarchical-namespaces",
    tags: ["Hierarchical Namespaces", "Hierarchical Namespaces", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-414",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Hierarchical Namespace Management: Hierarchical Namespace Controller (HNC): Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Hierarchical Namespaces to manage multi-tenancy for an engineering department that requires shared quotas and role bindings across 20 child team namespaces.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Cascading resource quotas, RBAC roles, and network policies across parent and child namespaces is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance." },
      { id: 'B', text: "Manually duplicate identical RBAC manifests and quota files across 20 separate namespaces using shell scripts." },
      { id: 'C', text: "Merge all 20 teams into a single flat namespace where developers can accidentally delete each other's pods." },
      { id: 'D', text: "Disable resource quotas and allow a single misconfigured pod to starve the entire cluster of memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance. The Hierarchical Namespace Controller (HNC) solves multi-tenancy sprawl by introducing parent-child hierarchies to Kubernetes namespaces. Common policies, RBAC roles, and `ResourceQuotas` defined on the parent namespace propagate automatically to all child sub-namespaces.",
    referenceUrl: "https://github.com/kubernetes-sigs/hierarchical-namespaces",
    tags: ["Hierarchical Namespaces", "Hierarchical Namespaces", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-415",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Hierarchical Namespace Management: Hierarchical Namespace Controller (HNC): Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Hierarchical Namespaces to manage multi-tenancy for an engineering department that requires shared quotas and role bindings across 20 child team namespaces.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Cascading resource quotas, RBAC roles, and network policies across parent and child namespaces is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance." },
      { id: 'B', text: "Manually duplicate identical RBAC manifests and quota files across 20 separate namespaces using shell scripts." },
      { id: 'C', text: "Merge all 20 teams into a single flat namespace where developers can accidentally delete each other's pods." },
      { id: 'D', text: "Disable resource quotas and allow a single misconfigured pod to starve the entire cluster of memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Hierarchical Namespace Controller (HNC) to establish parent-child namespace relationships with automated policy inheritance. The Hierarchical Namespace Controller (HNC) solves multi-tenancy sprawl by introducing parent-child hierarchies to Kubernetes namespaces. Common policies, RBAC roles, and `ResourceQuotas` defined on the parent namespace propagate automatically to all child sub-namespaces.",
    referenceUrl: "https://github.com/kubernetes-sigs/hierarchical-namespaces",
    tags: ["Hierarchical Namespaces", "Hierarchical Namespaces", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-416",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Compute Isolation: Kata Containers and MicroVMs: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates MicroVM Isolation to run multi-tenant untrusted user-submitted code or multi-tenant AI inference jobs with hardware-level virtualization isolation.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Running containerized workloads inside lightweight hardware-virtualized microVMs via Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM." },
      { id: 'B', text: "Execute untrusted code directly inside privileged root containers on shared bare-metal host kernels." },
      { id: 'C', text: "Disable Linux kernel seccomp, AppArmor, and cgroup isolation." },
      { id: 'D', text: "Rely on user honor system promises to prevent host kernel exploits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM. Standard container runtimes (runc) share the host Linux kernel. For untrusted or adversarial workloads, Kata Containers wraps pods in lightweight microVMs with dedicated guest kernels, preventing container breakout attacks from compromising the host or neighboring tenants.",
    referenceUrl: "https://katacontainers.io/",
    tags: ["MicroVM Isolation", "MicroVM Isolation", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-417",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Compute Isolation: Kata Containers and MicroVMs: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates MicroVM Isolation to run multi-tenant untrusted user-submitted code or multi-tenant AI inference jobs with hardware-level virtualization isolation.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Running containerized workloads inside lightweight hardware-virtualized microVMs via Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM." },
      { id: 'B', text: "Execute untrusted code directly inside privileged root containers on shared bare-metal host kernels." },
      { id: 'C', text: "Disable Linux kernel seccomp, AppArmor, and cgroup isolation." },
      { id: 'D', text: "Rely on user honor system promises to prevent host kernel exploits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM. Standard container runtimes (runc) share the host Linux kernel. For untrusted or adversarial workloads, Kata Containers wraps pods in lightweight microVMs with dedicated guest kernels, preventing container breakout attacks from compromising the host or neighboring tenants.",
    referenceUrl: "https://katacontainers.io/",
    tags: ["MicroVM Isolation", "MicroVM Isolation", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-418",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Compute Isolation: Kata Containers and MicroVMs: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates MicroVM Isolation to run multi-tenant untrusted user-submitted code or multi-tenant AI inference jobs with hardware-level virtualization isolation.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Running containerized workloads inside lightweight hardware-virtualized microVMs via Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM." },
      { id: 'B', text: "Execute untrusted code directly inside privileged root containers on shared bare-metal host kernels." },
      { id: 'C', text: "Disable Linux kernel seccomp, AppArmor, and cgroup isolation." },
      { id: 'D', text: "Rely on user honor system promises to prevent host kernel exploits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM. Standard container runtimes (runc) share the host Linux kernel. For untrusted or adversarial workloads, Kata Containers wraps pods in lightweight microVMs with dedicated guest kernels, preventing container breakout attacks from compromising the host or neighboring tenants.",
    referenceUrl: "https://katacontainers.io/",
    tags: ["MicroVM Isolation", "MicroVM Isolation", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-419",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Compute Isolation: Kata Containers and MicroVMs: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates MicroVM Isolation to run multi-tenant untrusted user-submitted code or multi-tenant AI inference jobs with hardware-level virtualization isolation.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Running containerized workloads inside lightweight hardware-virtualized microVMs via Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM." },
      { id: 'B', text: "Execute untrusted code directly inside privileged root containers on shared bare-metal host kernels." },
      { id: 'C', text: "Disable Linux kernel seccomp, AppArmor, and cgroup isolation." },
      { id: 'D', text: "Rely on user honor system promises to prevent host kernel exploits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM. Standard container runtimes (runc) share the host Linux kernel. For untrusted or adversarial workloads, Kata Containers wraps pods in lightweight microVMs with dedicated guest kernels, preventing container breakout attacks from compromising the host or neighboring tenants.",
    referenceUrl: "https://katacontainers.io/",
    tags: ["MicroVM Isolation", "MicroVM Isolation", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-420",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Advanced Compute Isolation: Kata Containers and MicroVMs: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates MicroVM Isolation to run multi-tenant untrusted user-submitted code or multi-tenant AI inference jobs with hardware-level virtualization isolation.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Running containerized workloads inside lightweight hardware-virtualized microVMs via Kata Containers is under consideration.",
    options: [
      { id: 'A', text: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM." },
      { id: 'B', text: "Execute untrusted code directly inside privileged root containers on shared bare-metal host kernels." },
      { id: 'C', text: "Disable Linux kernel seccomp, AppArmor, and cgroup isolation." },
      { id: 'D', text: "Rely on user honor system promises to prevent host kernel exploits." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Kubernetes `RuntimeClass` pointing to Kata Containers, executing each pod within a dedicated, lightweight QEMU/Cloud-Hypervisor microVM. Standard container runtimes (runc) share the host Linux kernel. For untrusted or adversarial workloads, Kata Containers wraps pods in lightweight microVMs with dedicated guest kernels, preventing container breakout attacks from compromising the host or neighboring tenants.",
    referenceUrl: "https://katacontainers.io/",
    tags: ["MicroVM Isolation", "MicroVM Isolation", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-421",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Stateful Storage Orchestration: Rook-Ceph and Dynamic CSI: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Stateful Storage to provide stateful database pods with distributed, self-healing block and filesystem storage across on-premises bare-metal Kubernetes clusters.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Software-defined distributed block and file storage with automated replication and snapshots using Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`." },
      { id: 'B', text: "Attach local ephemeral node disks that cause permanent data loss whenever a node reboots." },
      { id: 'C', text: "Manually configure legacy NFS servers with no replication, automated failover, or snapshot capabilities." },
      { id: 'D', text: "Prohibit stateful workloads and force all applications to operate entirely in memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`. Rook turns Ceph into a cloud-native, self-managing storage service. Deployed as an operator, it provisions distributed block storage (`RBD`), shared filesystems (`CephFS`), and object storage (`RGW`), supporting dynamic volume expansion and automated volume snapshots.",
    referenceUrl: "https://rook.io/docs/rook/latest/Getting-Started/intro/",
    tags: ["Stateful Storage", "Stateful Storage", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-422",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Stateful Storage Orchestration: Rook-Ceph and Dynamic CSI: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Stateful Storage to provide stateful database pods with distributed, self-healing block and filesystem storage across on-premises bare-metal Kubernetes clusters.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Software-defined distributed block and file storage with automated replication and snapshots using Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`." },
      { id: 'B', text: "Attach local ephemeral node disks that cause permanent data loss whenever a node reboots." },
      { id: 'C', text: "Manually configure legacy NFS servers with no replication, automated failover, or snapshot capabilities." },
      { id: 'D', text: "Prohibit stateful workloads and force all applications to operate entirely in memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`. Rook turns Ceph into a cloud-native, self-managing storage service. Deployed as an operator, it provisions distributed block storage (`RBD`), shared filesystems (`CephFS`), and object storage (`RGW`), supporting dynamic volume expansion and automated volume snapshots.",
    referenceUrl: "https://rook.io/docs/rook/latest/Getting-Started/intro/",
    tags: ["Stateful Storage", "Stateful Storage", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-423",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Stateful Storage Orchestration: Rook-Ceph and Dynamic CSI: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Stateful Storage to provide stateful database pods with distributed, self-healing block and filesystem storage across on-premises bare-metal Kubernetes clusters.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Software-defined distributed block and file storage with automated replication and snapshots using Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`." },
      { id: 'B', text: "Attach local ephemeral node disks that cause permanent data loss whenever a node reboots." },
      { id: 'C', text: "Manually configure legacy NFS servers with no replication, automated failover, or snapshot capabilities." },
      { id: 'D', text: "Prohibit stateful workloads and force all applications to operate entirely in memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`. Rook turns Ceph into a cloud-native, self-managing storage service. Deployed as an operator, it provisions distributed block storage (`RBD`), shared filesystems (`CephFS`), and object storage (`RGW`), supporting dynamic volume expansion and automated volume snapshots.",
    referenceUrl: "https://rook.io/docs/rook/latest/Getting-Started/intro/",
    tags: ["Stateful Storage", "Stateful Storage", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-424",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Stateful Storage Orchestration: Rook-Ceph and Dynamic CSI: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Stateful Storage to provide stateful database pods with distributed, self-healing block and filesystem storage across on-premises bare-metal Kubernetes clusters.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Software-defined distributed block and file storage with automated replication and snapshots using Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`." },
      { id: 'B', text: "Attach local ephemeral node disks that cause permanent data loss whenever a node reboots." },
      { id: 'C', text: "Manually configure legacy NFS servers with no replication, automated failover, or snapshot capabilities." },
      { id: 'D', text: "Prohibit stateful workloads and force all applications to operate entirely in memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`. Rook turns Ceph into a cloud-native, self-managing storage service. Deployed as an operator, it provisions distributed block storage (`RBD`), shared filesystems (`CephFS`), and object storage (`RGW`), supporting dynamic volume expansion and automated volume snapshots.",
    referenceUrl: "https://rook.io/docs/rook/latest/Getting-Started/intro/",
    tags: ["Stateful Storage", "Stateful Storage", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-425",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d3",
    domainName: "Infrastructure Composition and Multi-Tenancy",
    title: "Stateful Storage Orchestration: Rook-Ceph and Dynamic CSI: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Stateful Storage to provide stateful database pods with distributed, self-healing block and filesystem storage across on-premises bare-metal Kubernetes clusters.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Software-defined distributed block and file storage with automated replication and snapshots using Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`." },
      { id: 'B', text: "Attach local ephemeral node disks that cause permanent data loss whenever a node reboots." },
      { id: 'C', text: "Manually configure legacy NFS servers with no replication, automated failover, or snapshot capabilities." },
      { id: 'D', text: "Prohibit stateful workloads and force all applications to operate entirely in memory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Rook-Ceph to orchestrate software-defined distributed Ceph storage pools exposed via dynamic Kubernetes `StorageClasses`. Rook turns Ceph into a cloud-native, self-managing storage service. Deployed as an operator, it provisions distributed block storage (`RBD`), shared filesystems (`CephFS`), and object storage (`RGW`), supporting dynamic volume expansion and automated volume snapshots.",
    referenceUrl: "https://rook.io/docs/rook/latest/Getting-Started/intro/",
    tags: ["Stateful Storage", "Stateful Storage", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_17;
