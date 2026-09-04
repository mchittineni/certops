export const CNCF_CNPA_QUESTIONS_12 = [
  {
    id: "cncf-cnpa-276",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Sandboxed Container Runtimes: Kata Containers and gVisor: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Container Runtimes to run untrusted, multi-tenant customer code or arbitrary user CI jobs securely on shared Kubernetes worker nodes.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Kernel isolation for untrusted workloads using gVisor (runsc) or Kata Containers (lightweight VMs) is under consideration.",
    options: [
      { id: 'A', text: "Run untrusted customer containers with `--privileged=true` and host root permissions." },
      { id: 'B', text: "Disable Linux kernel cgroups, namespaces, and seccomp filters." },
      { id: 'C', text: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers." },
      { id: 'D', text: "Rely solely on user honor code agreements to prevent container breakout attacks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers. Standard container runtimes (runc) share the host Linux kernel. For untrusted or multi-tenant execution, platform platforms configure `RuntimeClass` to use sandboxed runtimes like gVisor (intercepting syscalls in user space) or Kata Containers (running pods in lightweight microVMs).",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Container Runtimes", "Sandboxed Runtimes", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-277",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Sandboxed Container Runtimes: Kata Containers and gVisor: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Container Runtimes to run untrusted, multi-tenant customer code or arbitrary user CI jobs securely on shared Kubernetes worker nodes.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Kernel isolation for untrusted workloads using gVisor (runsc) or Kata Containers (lightweight VMs) is under consideration.",
    options: [
      { id: 'A', text: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers." },
      { id: 'B', text: "Rely solely on user honor code agreements to prevent container breakout attacks." },
      { id: 'C', text: "Disable Linux kernel cgroups, namespaces, and seccomp filters." },
      { id: 'D', text: "Run untrusted customer containers with `--privileged=true` and host root permissions." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers. Standard container runtimes (runc) share the host Linux kernel. For untrusted or multi-tenant execution, platform platforms configure `RuntimeClass` to use sandboxed runtimes like gVisor (intercepting syscalls in user space) or Kata Containers (running pods in lightweight microVMs).",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Container Runtimes", "Sandboxed Runtimes", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-278",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Sandboxed Container Runtimes: Kata Containers and gVisor: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Container Runtimes to run untrusted, multi-tenant customer code or arbitrary user CI jobs securely on shared Kubernetes worker nodes.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Kernel isolation for untrusted workloads using gVisor (runsc) or Kata Containers (lightweight VMs) is under consideration.",
    options: [
      { id: 'A', text: "Disable Linux kernel cgroups, namespaces, and seccomp filters." },
      { id: 'B', text: "Rely solely on user honor code agreements to prevent container breakout attacks." },
      { id: 'C', text: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers." },
      { id: 'D', text: "Run untrusted customer containers with `--privileged=true` and host root permissions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers. Standard container runtimes (runc) share the host Linux kernel. For untrusted or multi-tenant execution, platform platforms configure `RuntimeClass` to use sandboxed runtimes like gVisor (intercepting syscalls in user space) or Kata Containers (running pods in lightweight microVMs).",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Container Runtimes", "Sandboxed Runtimes", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-279",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Sandboxed Container Runtimes: Kata Containers and gVisor: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Container Runtimes to run untrusted, multi-tenant customer code or arbitrary user CI jobs securely on shared Kubernetes worker nodes.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Kernel isolation for untrusted workloads using gVisor (runsc) or Kata Containers (lightweight VMs) is under consideration.",
    options: [
      { id: 'A', text: "Disable Linux kernel cgroups, namespaces, and seccomp filters." },
      { id: 'B', text: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers." },
      { id: 'C', text: "Run untrusted customer containers with `--privileged=true` and host root permissions." },
      { id: 'D', text: "Rely solely on user honor code agreements to prevent container breakout attacks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers. Standard container runtimes (runc) share the host Linux kernel. For untrusted or multi-tenant execution, platform platforms configure `RuntimeClass` to use sandboxed runtimes like gVisor (intercepting syscalls in user space) or Kata Containers (running pods in lightweight microVMs).",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Container Runtimes", "Sandboxed Runtimes", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-280",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Sandboxed Container Runtimes: Kata Containers and gVisor: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Container Runtimes to run untrusted, multi-tenant customer code or arbitrary user CI jobs securely on shared Kubernetes worker nodes.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Kernel isolation for untrusted workloads using gVisor (runsc) or Kata Containers (lightweight VMs) is under consideration.",
    options: [
      { id: 'A', text: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers." },
      { id: 'B', text: "Run untrusted customer containers with `--privileged=true` and host root permissions." },
      { id: 'C', text: "Rely solely on user honor code agreements to prevent container breakout attacks." },
      { id: 'D', text: "Disable Linux kernel cgroups, namespaces, and seccomp filters." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a `RuntimeClass` pointing to sandboxed container runtimes such as gVisor (`runsc`) or Kata Containers. Standard container runtimes (runc) share the host Linux kernel. For untrusted or multi-tenant execution, platform platforms configure `RuntimeClass` to use sandboxed runtimes like gVisor (intercepting syscalls in user space) or Kata Containers (running pods in lightweight microVMs).",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/runtime-class/",
    tags: ["Container Runtimes", "Sandboxed Runtimes", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-281",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Service Mesh and Gateway API Substrates: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Gateway API & Mesh to standardize L7 traffic routing, canary rollouts, and mutual TLS encryption across all microservice communication declaratively.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Kubernetes Gateway API, Envoy-based ingress, and mTLS service mesh routing is under consideration.",
    options: [
      { id: 'A', text: "Hardcode proprietary routing rules into individual application source code files." },
      { id: 'B', text: "Configure routing using legacy monolithic hardware load balancer consoles manually." },
      { id: 'C', text: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd." },
      { id: 'D', text: "Disable TLS and route all production traffic over unencrypted plaintext HTTP." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd. The Kubernetes Gateway API provides role-oriented, expressive APIs for L4/L7 routing. When combined with service meshes (Istio, Linkerd), platform substrates deliver transparent mutual TLS (mTLS), fine-grained traffic splitting for canaries, and uniform telemetry.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API & Mesh", "Gateway API", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-282",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Service Mesh and Gateway API Substrates: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Gateway API & Mesh to standardize L7 traffic routing, canary rollouts, and mutual TLS encryption across all microservice communication declaratively.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Kubernetes Gateway API, Envoy-based ingress, and mTLS service mesh routing is under consideration.",
    options: [
      { id: 'A', text: "Disable TLS and route all production traffic over unencrypted plaintext HTTP." },
      { id: 'B', text: "Hardcode proprietary routing rules into individual application source code files." },
      { id: 'C', text: "Configure routing using legacy monolithic hardware load balancer consoles manually." },
      { id: 'D', text: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd. The Kubernetes Gateway API provides role-oriented, expressive APIs for L4/L7 routing. When combined with service meshes (Istio, Linkerd), platform substrates deliver transparent mutual TLS (mTLS), fine-grained traffic splitting for canaries, and uniform telemetry.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API & Mesh", "Gateway API", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-283",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Service Mesh and Gateway API Substrates: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Gateway API & Mesh to standardize L7 traffic routing, canary rollouts, and mutual TLS encryption across all microservice communication declaratively.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Kubernetes Gateway API, Envoy-based ingress, and mTLS service mesh routing is under consideration.",
    options: [
      { id: 'A', text: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd." },
      { id: 'B', text: "Disable TLS and route all production traffic over unencrypted plaintext HTTP." },
      { id: 'C', text: "Configure routing using legacy monolithic hardware load balancer consoles manually." },
      { id: 'D', text: "Hardcode proprietary routing rules into individual application source code files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd. The Kubernetes Gateway API provides role-oriented, expressive APIs for L4/L7 routing. When combined with service meshes (Istio, Linkerd), platform substrates deliver transparent mutual TLS (mTLS), fine-grained traffic splitting for canaries, and uniform telemetry.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API & Mesh", "Gateway API", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-284",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Service Mesh and Gateway API Substrates: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Gateway API & Mesh to standardize L7 traffic routing, canary rollouts, and mutual TLS encryption across all microservice communication declaratively.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Kubernetes Gateway API, Envoy-based ingress, and mTLS service mesh routing is under consideration.",
    options: [
      { id: 'A', text: "Hardcode proprietary routing rules into individual application source code files." },
      { id: 'B', text: "Disable TLS and route all production traffic over unencrypted plaintext HTTP." },
      { id: 'C', text: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd." },
      { id: 'D', text: "Configure routing using legacy monolithic hardware load balancer consoles manually." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd. The Kubernetes Gateway API provides role-oriented, expressive APIs for L4/L7 routing. When combined with service meshes (Istio, Linkerd), platform substrates deliver transparent mutual TLS (mTLS), fine-grained traffic splitting for canaries, and uniform telemetry.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API & Mesh", "Gateway API", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-285",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Service Mesh and Gateway API Substrates: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Gateway API & Mesh to standardize L7 traffic routing, canary rollouts, and mutual TLS encryption across all microservice communication declaratively.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Kubernetes Gateway API, Envoy-based ingress, and mTLS service mesh routing is under consideration.",
    options: [
      { id: 'A', text: "Disable TLS and route all production traffic over unencrypted plaintext HTTP." },
      { id: 'B', text: "Configure routing using legacy monolithic hardware load balancer consoles manually." },
      { id: 'C', text: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd." },
      { id: 'D', text: "Hardcode proprietary routing rules into individual application source code files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement the Kubernetes Gateway API (`Gateway`, `HTTPRoute`) backed by an Envoy-based service mesh like Istio or Linkerd. The Kubernetes Gateway API provides role-oriented, expressive APIs for L4/L7 routing. When combined with service meshes (Istio, Linkerd), platform substrates deliver transparent mutual TLS (mTLS), fine-grained traffic splitting for canaries, and uniform telemetry.",
    referenceUrl: "https://gateway-api.sigs.k8s.io/",
    tags: ["Gateway API & Mesh", "Gateway API", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-286",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Storage Substrates and Container Storage Interface (CSI): Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates CSI Storage to provide stateful database workloads with automated, elastic volume provisioning and snapshot capabilities across cloud environments.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Dynamic volume provisioning via CSI drivers and cloud-native storage operators like Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Prohibit stateful workloads and store all database records in container memory." },
      { id: 'B', text: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`." },
      { id: 'C', text: "Mount host directories (`hostPath`) directly without permissions or lifecycle management." },
      { id: 'D', text: "Manually attach physical SATA hard drives to server racks whenever a database pod launches." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`. The Container Storage Interface (CSI) standardizes storage operations in Kubernetes. Cloud-native storage operators (such as Rook-Ceph or cloud CSI plugins) automate dynamic provisioning, expansion, and snapshots through declarative `PersistentVolumeClaim` and `StorageClass` primitives.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["CSI Storage", "CSI Storage", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-287",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Storage Substrates and Container Storage Interface (CSI): High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates CSI Storage to provide stateful database workloads with automated, elastic volume provisioning and snapshot capabilities across cloud environments.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Dynamic volume provisioning via CSI drivers and cloud-native storage operators like Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Mount host directories (`hostPath`) directly without permissions or lifecycle management." },
      { id: 'B', text: "Manually attach physical SATA hard drives to server racks whenever a database pod launches." },
      { id: 'C', text: "Prohibit stateful workloads and store all database records in container memory." },
      { id: 'D', text: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`. The Container Storage Interface (CSI) standardizes storage operations in Kubernetes. Cloud-native storage operators (such as Rook-Ceph or cloud CSI plugins) automate dynamic provisioning, expansion, and snapshots through declarative `PersistentVolumeClaim` and `StorageClass` primitives.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["CSI Storage", "CSI Storage", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-288",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Storage Substrates and Container Storage Interface (CSI): Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates CSI Storage to provide stateful database workloads with automated, elastic volume provisioning and snapshot capabilities across cloud environments.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Dynamic volume provisioning via CSI drivers and cloud-native storage operators like Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Prohibit stateful workloads and store all database records in container memory." },
      { id: 'B', text: "Manually attach physical SATA hard drives to server racks whenever a database pod launches." },
      { id: 'C', text: "Mount host directories (`hostPath`) directly without permissions or lifecycle management." },
      { id: 'D', text: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`. The Container Storage Interface (CSI) standardizes storage operations in Kubernetes. Cloud-native storage operators (such as Rook-Ceph or cloud CSI plugins) automate dynamic provisioning, expansion, and snapshots through declarative `PersistentVolumeClaim` and `StorageClass` primitives.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["CSI Storage", "CSI Storage", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-289",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Storage Substrates and Container Storage Interface (CSI): Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates CSI Storage to provide stateful database workloads with automated, elastic volume provisioning and snapshot capabilities across cloud environments.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Dynamic volume provisioning via CSI drivers and cloud-native storage operators like Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Prohibit stateful workloads and store all database records in container memory." },
      { id: 'B', text: "Manually attach physical SATA hard drives to server racks whenever a database pod launches." },
      { id: 'C', text: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`." },
      { id: 'D', text: "Mount host directories (`hostPath`) directly without permissions or lifecycle management." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`. The Container Storage Interface (CSI) standardizes storage operations in Kubernetes. Cloud-native storage operators (such as Rook-Ceph or cloud CSI plugins) automate dynamic provisioning, expansion, and snapshots through declarative `PersistentVolumeClaim` and `StorageClass` primitives.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["CSI Storage", "CSI Storage", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-290",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Storage Substrates and Container Storage Interface (CSI): Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates CSI Storage to provide stateful database workloads with automated, elastic volume provisioning and snapshot capabilities across cloud environments.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Dynamic volume provisioning via CSI drivers and cloud-native storage operators like Rook-Ceph is under consideration.",
    options: [
      { id: 'A', text: "Mount host directories (`hostPath`) directly without permissions or lifecycle management." },
      { id: 'B', text: "Manually attach physical SATA hard drives to server racks whenever a database pod launches." },
      { id: 'C', text: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`." },
      { id: 'D', text: "Prohibit stateful workloads and store all database records in container memory." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy production-grade CSI drivers or software-defined cloud-native storage like Rook-Ceph using dynamic `StorageClasses`. The Container Storage Interface (CSI) standardizes storage operations in Kubernetes. Cloud-native storage operators (such as Rook-Ceph or cloud CSI plugins) automate dynamic provisioning, expansion, and snapshots through declarative `PersistentVolumeClaim` and `StorageClass` primitives.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["CSI Storage", "CSI Storage", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-291",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Infrastructure as Code Substrates and GitOps Operators: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates IaC Substrates to reconcile baseline VPCs, subnets, and IAM roles continuously from Git repositories using Kubernetes-native operators.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Managing foundation infrastructure via Terraform/OpenTofu, Pulumi, and GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously." },
      { id: 'B', text: "Store infrastructure state in unencrypted email attachments." },
      { id: 'C', text: "Run imperative CLI commands from developer laptops without version-controlled state locking." },
      { id: 'D', text: "Manually provision network subnets through cloud provider web consoles without documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously. Platform engineering integrates Infrastructure as Code (IaC) into the control plane substrate. By leveraging operators that execute OpenTofu/Terraform or Crossplane within GitOps loops, baseline cloud networking and IAM remain continuously synchronized with Git.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["IaC Substrates", "IaC Substrates", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-292",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Infrastructure as Code Substrates and GitOps Operators: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates IaC Substrates to reconcile baseline VPCs, subnets, and IAM roles continuously from Git repositories using Kubernetes-native operators.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Managing foundation infrastructure via Terraform/OpenTofu, Pulumi, and GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Store infrastructure state in unencrypted email attachments." },
      { id: 'B', text: "Run imperative CLI commands from developer laptops without version-controlled state locking." },
      { id: 'C', text: "Manually provision network subnets through cloud provider web consoles without documentation." },
      { id: 'D', text: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously. Platform engineering integrates Infrastructure as Code (IaC) into the control plane substrate. By leveraging operators that execute OpenTofu/Terraform or Crossplane within GitOps loops, baseline cloud networking and IAM remain continuously synchronized with Git.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["IaC Substrates", "IaC Substrates", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-293",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Infrastructure as Code Substrates and GitOps Operators: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates IaC Substrates to reconcile baseline VPCs, subnets, and IAM roles continuously from Git repositories using Kubernetes-native operators.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Managing foundation infrastructure via Terraform/OpenTofu, Pulumi, and GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Store infrastructure state in unencrypted email attachments." },
      { id: 'B', text: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously." },
      { id: 'C', text: "Manually provision network subnets through cloud provider web consoles without documentation." },
      { id: 'D', text: "Run imperative CLI commands from developer laptops without version-controlled state locking." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously. Platform engineering integrates Infrastructure as Code (IaC) into the control plane substrate. By leveraging operators that execute OpenTofu/Terraform or Crossplane within GitOps loops, baseline cloud networking and IAM remain continuously synchronized with Git.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["IaC Substrates", "IaC Substrates", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-294",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Infrastructure as Code Substrates and GitOps Operators: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates IaC Substrates to reconcile baseline VPCs, subnets, and IAM roles continuously from Git repositories using Kubernetes-native operators.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Managing foundation infrastructure via Terraform/OpenTofu, Pulumi, and GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Store infrastructure state in unencrypted email attachments." },
      { id: 'B', text: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously." },
      { id: 'C', text: "Run imperative CLI commands from developer laptops without version-controlled state locking." },
      { id: 'D', text: "Manually provision network subnets through cloud provider web consoles without documentation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously. Platform engineering integrates Infrastructure as Code (IaC) into the control plane substrate. By leveraging operators that execute OpenTofu/Terraform or Crossplane within GitOps loops, baseline cloud networking and IAM remain continuously synchronized with Git.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["IaC Substrates", "IaC Substrates", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-295",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Infrastructure as Code Substrates and GitOps Operators: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates IaC Substrates to reconcile baseline VPCs, subnets, and IAM roles continuously from Git repositories using Kubernetes-native operators.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Managing foundation infrastructure via Terraform/OpenTofu, Pulumi, and GitOps controllers is under consideration.",
    options: [
      { id: 'A', text: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously." },
      { id: 'B', text: "Store infrastructure state in unencrypted email attachments." },
      { id: 'C', text: "Run imperative CLI commands from developer laptops without version-controlled state locking." },
      { id: 'D', text: "Manually provision network subnets through cloud provider web consoles without documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Kubernetes IaC controllers (like Terraform Operator, Crossplane, or Flux IaC runners) to reconcile infrastructure state continuously. Platform engineering integrates Infrastructure as Code (IaC) into the control plane substrate. By leveraging operators that execute OpenTofu/Terraform or Crossplane within GitOps loops, baseline cloud networking and IAM remain continuously synchronized with Git.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["IaC Substrates", "IaC Substrates", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-296",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Secrets Management Substrates: External Secrets Operator (ESO): Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Secrets Substrate to inject database credentials and API keys into application pods securely without storing sensitive secrets in Git or plaintext manifests.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Synchronizing secrets from Vault/AWS Secrets Manager into Kubernetes via External Secrets Operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets." },
      { id: 'B', text: "Commit plaintext passwords directly to public Git repositories inside `Secret` manifests." },
      { id: 'C', text: "Print sensitive authentication credentials in container stdout logs during startup." },
      { id: 'D', text: "Hardcode API tokens into application Dockerfiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets. The External Secrets Operator (ESO) integrates external secret management systems (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) with Kubernetes. It reads `ExternalSecret` manifests and synthesizes standard Kubernetes `Secret` objects dynamically in memory.",
    referenceUrl: "https://external-secrets.io/",
    tags: ["Secrets Substrate", "Secrets Substrate", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-297",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Secrets Management Substrates: External Secrets Operator (ESO): High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Secrets Substrate to inject database credentials and API keys into application pods securely without storing sensitive secrets in Git or plaintext manifests.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Synchronizing secrets from Vault/AWS Secrets Manager into Kubernetes via External Secrets Operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets." },
      { id: 'B', text: "Hardcode API tokens into application Dockerfiles." },
      { id: 'C', text: "Print sensitive authentication credentials in container stdout logs during startup." },
      { id: 'D', text: "Commit plaintext passwords directly to public Git repositories inside `Secret` manifests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets. The External Secrets Operator (ESO) integrates external secret management systems (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) with Kubernetes. It reads `ExternalSecret` manifests and synthesizes standard Kubernetes `Secret` objects dynamically in memory.",
    referenceUrl: "https://external-secrets.io/",
    tags: ["Secrets Substrate", "Secrets Substrate", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-298",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Secrets Management Substrates: External Secrets Operator (ESO): Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Secrets Substrate to inject database credentials and API keys into application pods securely without storing sensitive secrets in Git or plaintext manifests.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Synchronizing secrets from Vault/AWS Secrets Manager into Kubernetes via External Secrets Operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets." },
      { id: 'B', text: "Commit plaintext passwords directly to public Git repositories inside `Secret` manifests." },
      { id: 'C', text: "Print sensitive authentication credentials in container stdout logs during startup." },
      { id: 'D', text: "Hardcode API tokens into application Dockerfiles." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets. The External Secrets Operator (ESO) integrates external secret management systems (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) with Kubernetes. It reads `ExternalSecret` manifests and synthesizes standard Kubernetes `Secret` objects dynamically in memory.",
    referenceUrl: "https://external-secrets.io/",
    tags: ["Secrets Substrate", "Secrets Substrate", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-299",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Secrets Management Substrates: External Secrets Operator (ESO): Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Secrets Substrate to inject database credentials and API keys into application pods securely without storing sensitive secrets in Git or plaintext manifests.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Synchronizing secrets from Vault/AWS Secrets Manager into Kubernetes via External Secrets Operator is under consideration.",
    options: [
      { id: 'A', text: "Commit plaintext passwords directly to public Git repositories inside `Secret` manifests." },
      { id: 'B', text: "Print sensitive authentication credentials in container stdout logs during startup." },
      { id: 'C', text: "Hardcode API tokens into application Dockerfiles." },
      { id: 'D', text: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets. The External Secrets Operator (ESO) integrates external secret management systems (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) with Kubernetes. It reads `ExternalSecret` manifests and synthesizes standard Kubernetes `Secret` objects dynamically in memory.",
    referenceUrl: "https://external-secrets.io/",
    tags: ["Secrets Substrate", "Secrets Substrate", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-300",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Secrets Management Substrates: External Secrets Operator (ESO): Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Secrets Substrate to inject database credentials and API keys into application pods securely without storing sensitive secrets in Git or plaintext manifests.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Synchronizing secrets from Vault/AWS Secrets Manager into Kubernetes via External Secrets Operator is under consideration.",
    options: [
      { id: 'A', text: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets." },
      { id: 'B', text: "Hardcode API tokens into application Dockerfiles." },
      { id: 'C', text: "Commit plaintext passwords directly to public Git repositories inside `Secret` manifests." },
      { id: 'D', text: "Print sensitive authentication credentials in container stdout logs during startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the External Secrets Operator (ESO) to synchronize credentials dynamically from HashiCorp Vault or AWS Secrets Manager into Kubernetes Secrets. The External Secrets Operator (ESO) integrates external secret management systems (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) with Kubernetes. It reads `ExternalSecret` manifests and synthesizes standard Kubernetes `Secret` objects dynamically in memory.",
    referenceUrl: "https://external-secrets.io/",
    tags: ["Secrets Substrate", "Secrets Substrate", "Resilience And Observability"]
  }
];

export default CNCF_CNPA_QUESTIONS_12;
