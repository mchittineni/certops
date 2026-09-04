export const CNCF_CNPA_QUESTIONS_11 = [
  {
    id: "cncf-cnpa-251",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Kubernetes as an Extensible Control Plane Substrate: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Kubernetes Control Plane to provide a universal, declarative control plane where developers manage both infrastructure and application lifecycles using Kubernetes-native APIs.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Using Custom Resource Definitions (CRDs) and custom controllers as universal API substrate is under consideration.",
    options: [
      { id: 'A', text: "Disable Kubernetes API server reconciliation loops to eliminate etcd overhead." },
      { id: 'B', text: "Force developers to call proprietary vendor web consoles without any declarative tracking." },
      { id: 'C', text: "Deploy hundreds of disparate shell scripts triggered manually over SSH across multiple servers." },
      { id: 'D', text: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation. Kubernetes functions as a universal control plane substrate. By leveraging Custom Resource Definitions (CRDs) and custom controllers, platform teams extend the declarative reconciliation engine beyond container workloads to manage cloud infrastructure, services, and policies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["Kubernetes Control Plane", "Control Plane Substrate", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-252",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Kubernetes as an Extensible Control Plane Substrate: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Kubernetes Control Plane to provide a universal, declarative control plane where developers manage both infrastructure and application lifecycles using Kubernetes-native APIs.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Using Custom Resource Definitions (CRDs) and custom controllers as universal API substrate is under consideration.",
    options: [
      { id: 'A', text: "Deploy hundreds of disparate shell scripts triggered manually over SSH across multiple servers." },
      { id: 'B', text: "Force developers to call proprietary vendor web consoles without any declarative tracking." },
      { id: 'C', text: "Disable Kubernetes API server reconciliation loops to eliminate etcd overhead." },
      { id: 'D', text: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation. Kubernetes functions as a universal control plane substrate. By leveraging Custom Resource Definitions (CRDs) and custom controllers, platform teams extend the declarative reconciliation engine beyond container workloads to manage cloud infrastructure, services, and policies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["Kubernetes Control Plane", "Control Plane Substrate", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-253",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Kubernetes as an Extensible Control Plane Substrate: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Kubernetes Control Plane to provide a universal, declarative control plane where developers manage both infrastructure and application lifecycles using Kubernetes-native APIs.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Using Custom Resource Definitions (CRDs) and custom controllers as universal API substrate is under consideration.",
    options: [
      { id: 'A', text: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation." },
      { id: 'B', text: "Disable Kubernetes API server reconciliation loops to eliminate etcd overhead." },
      { id: 'C', text: "Force developers to call proprietary vendor web consoles without any declarative tracking." },
      { id: 'D', text: "Deploy hundreds of disparate shell scripts triggered manually over SSH across multiple servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation. Kubernetes functions as a universal control plane substrate. By leveraging Custom Resource Definitions (CRDs) and custom controllers, platform teams extend the declarative reconciliation engine beyond container workloads to manage cloud infrastructure, services, and policies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["Kubernetes Control Plane", "Control Plane Substrate", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-254",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Kubernetes as an Extensible Control Plane Substrate: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Kubernetes Control Plane to provide a universal, declarative control plane where developers manage both infrastructure and application lifecycles using Kubernetes-native APIs.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Using Custom Resource Definitions (CRDs) and custom controllers as universal API substrate is under consideration.",
    options: [
      { id: 'A', text: "Disable Kubernetes API server reconciliation loops to eliminate etcd overhead." },
      { id: 'B', text: "Deploy hundreds of disparate shell scripts triggered manually over SSH across multiple servers." },
      { id: 'C', text: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation." },
      { id: 'D', text: "Force developers to call proprietary vendor web consoles without any declarative tracking." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation. Kubernetes functions as a universal control plane substrate. By leveraging Custom Resource Definitions (CRDs) and custom controllers, platform teams extend the declarative reconciliation engine beyond container workloads to manage cloud infrastructure, services, and policies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["Kubernetes Control Plane", "Control Plane Substrate", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-255",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Kubernetes as an Extensible Control Plane Substrate: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Kubernetes Control Plane to provide a universal, declarative control plane where developers manage both infrastructure and application lifecycles using Kubernetes-native APIs.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Using Custom Resource Definitions (CRDs) and custom controllers as universal API substrate is under consideration.",
    options: [
      { id: 'A', text: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation." },
      { id: 'B', text: "Force developers to call proprietary vendor web consoles without any declarative tracking." },
      { id: 'C', text: "Disable Kubernetes API server reconciliation loops to eliminate etcd overhead." },
      { id: 'D', text: "Deploy hundreds of disparate shell scripts triggered manually over SSH across multiple servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Leverage Kubernetes as an extensible control plane using Custom Resource Definitions (CRDs) and custom controllers with continuous reconciliation. Kubernetes functions as a universal control plane substrate. By leveraging Custom Resource Definitions (CRDs) and custom controllers, platform teams extend the declarative reconciliation engine beyond container workloads to manage cloud infrastructure, services, and policies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["Kubernetes Control Plane", "Control Plane Substrate", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-256",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Crossplane: Cloud-Native Infrastructure Composition: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Crossplane to empower developers to self-provision cloud databases without exposing complex raw AWS, Azure, or GCP IAM and networking primitives.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? XRDs and Compositions abstracting multi-cloud resources into self-service APIs is under consideration.",
    options: [
      { id: 'A', text: "Grant full Cloud Provider root credentials to all application developer workstations." },
      { id: 'B', text: "Require developers to file manual IT support tickets for every test database creation." },
      { id: 'C', text: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs." },
      { id: 'D', text: "Embed raw cloud credentials in application git repositories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs. Crossplane turns Kubernetes clusters into universal infrastructure control planes. Platform teams author Composite Resource Definitions (XRDs) and Compositions, presenting simplified, policy-compliant custom resources (e.g., `CompositePostgreSQLInstance`) to developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition/",
    tags: ["Crossplane", "Crossplane", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-257",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Crossplane: Cloud-Native Infrastructure Composition: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Crossplane to empower developers to self-provision cloud databases without exposing complex raw AWS, Azure, or GCP IAM and networking primitives.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? XRDs and Compositions abstracting multi-cloud resources into self-service APIs is under consideration.",
    options: [
      { id: 'A', text: "Grant full Cloud Provider root credentials to all application developer workstations." },
      { id: 'B', text: "Require developers to file manual IT support tickets for every test database creation." },
      { id: 'C', text: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs." },
      { id: 'D', text: "Embed raw cloud credentials in application git repositories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs. Crossplane turns Kubernetes clusters into universal infrastructure control planes. Platform teams author Composite Resource Definitions (XRDs) and Compositions, presenting simplified, policy-compliant custom resources (e.g., `CompositePostgreSQLInstance`) to developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition/",
    tags: ["Crossplane", "Crossplane", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-258",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Crossplane: Cloud-Native Infrastructure Composition: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Crossplane to empower developers to self-provision cloud databases without exposing complex raw AWS, Azure, or GCP IAM and networking primitives.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? XRDs and Compositions abstracting multi-cloud resources into self-service APIs is under consideration.",
    options: [
      { id: 'A', text: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs." },
      { id: 'B', text: "Require developers to file manual IT support tickets for every test database creation." },
      { id: 'C', text: "Grant full Cloud Provider root credentials to all application developer workstations." },
      { id: 'D', text: "Embed raw cloud credentials in application git repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs. Crossplane turns Kubernetes clusters into universal infrastructure control planes. Platform teams author Composite Resource Definitions (XRDs) and Compositions, presenting simplified, policy-compliant custom resources (e.g., `CompositePostgreSQLInstance`) to developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition/",
    tags: ["Crossplane", "Crossplane", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-259",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Crossplane: Cloud-Native Infrastructure Composition: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Crossplane to empower developers to self-provision cloud databases without exposing complex raw AWS, Azure, or GCP IAM and networking primitives.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? XRDs and Compositions abstracting multi-cloud resources into self-service APIs is under consideration.",
    options: [
      { id: 'A', text: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs." },
      { id: 'B', text: "Require developers to file manual IT support tickets for every test database creation." },
      { id: 'C', text: "Embed raw cloud credentials in application git repositories." },
      { id: 'D', text: "Grant full Cloud Provider root credentials to all application developer workstations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs. Crossplane turns Kubernetes clusters into universal infrastructure control planes. Platform teams author Composite Resource Definitions (XRDs) and Compositions, presenting simplified, policy-compliant custom resources (e.g., `CompositePostgreSQLInstance`) to developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition/",
    tags: ["Crossplane", "Crossplane", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-260",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Crossplane: Cloud-Native Infrastructure Composition: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Crossplane to empower developers to self-provision cloud databases without exposing complex raw AWS, Azure, or GCP IAM and networking primitives.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? XRDs and Compositions abstracting multi-cloud resources into self-service APIs is under consideration.",
    options: [
      { id: 'A', text: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs." },
      { id: 'B', text: "Require developers to file manual IT support tickets for every test database creation." },
      { id: 'C', text: "Grant full Cloud Provider root credentials to all application developer workstations." },
      { id: 'D', text: "Embed raw cloud credentials in application git repositories." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Crossplane Composite Resource Definitions (XRDs) and Compositions that expose simplified, standardized infrastructure APIs. Crossplane turns Kubernetes clusters into universal infrastructure control planes. Platform teams author Composite Resource Definitions (XRDs) and Compositions, presenting simplified, policy-compliant custom resources (e.g., `CompositePostgreSQLInstance`) to developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition/",
    tags: ["Crossplane", "Crossplane", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-261",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Cluster API (CAPI): Declarative Multi-Cluster Lifecycle: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Cluster API to automate the provisioning, patching, and retirement of hundreds of worker Kubernetes clusters across hybrid clouds using declarative manifests.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Declarative provisioning, scaling, and upgrading of Kubernetes clusters across cloud providers is under consideration.",
    options: [
      { id: 'A', text: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources." },
      { id: 'B', text: "Manually click through cloud provider web consoles to launch virtual machines and install kubeadm via SSH." },
      { id: 'C', text: "Run all enterprise workloads inside a single giant unsegmented Kubernetes cluster." },
      { id: 'D', text: "Rely on ad-hoc workstation bash scripts that execute unversioned curl commands." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources. Cluster API (CAPI) is a CNCF subproject that brings declarative, Kubernetes-style APIs to cluster creation, configuration, and management. It uses Custom Resources (`Cluster`, `MachineSet`, `MachineDeployment`) to manage Kubernetes clusters across diverse cloud providers.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/",
    tags: ["Cluster API", "Cluster API", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-262",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Cluster API (CAPI): Declarative Multi-Cluster Lifecycle: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Cluster API to automate the provisioning, patching, and retirement of hundreds of worker Kubernetes clusters across hybrid clouds using declarative manifests.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Declarative provisioning, scaling, and upgrading of Kubernetes clusters across cloud providers is under consideration.",
    options: [
      { id: 'A', text: "Manually click through cloud provider web consoles to launch virtual machines and install kubeadm via SSH." },
      { id: 'B', text: "Run all enterprise workloads inside a single giant unsegmented Kubernetes cluster." },
      { id: 'C', text: "Rely on ad-hoc workstation bash scripts that execute unversioned curl commands." },
      { id: 'D', text: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources. Cluster API (CAPI) is a CNCF subproject that brings declarative, Kubernetes-style APIs to cluster creation, configuration, and management. It uses Custom Resources (`Cluster`, `MachineSet`, `MachineDeployment`) to manage Kubernetes clusters across diverse cloud providers.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/",
    tags: ["Cluster API", "Cluster API", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-263",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Cluster API (CAPI): Declarative Multi-Cluster Lifecycle: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Cluster API to automate the provisioning, patching, and retirement of hundreds of worker Kubernetes clusters across hybrid clouds using declarative manifests.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Declarative provisioning, scaling, and upgrading of Kubernetes clusters across cloud providers is under consideration.",
    options: [
      { id: 'A', text: "Manually click through cloud provider web consoles to launch virtual machines and install kubeadm via SSH." },
      { id: 'B', text: "Run all enterprise workloads inside a single giant unsegmented Kubernetes cluster." },
      { id: 'C', text: "Rely on ad-hoc workstation bash scripts that execute unversioned curl commands." },
      { id: 'D', text: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources. Cluster API (CAPI) is a CNCF subproject that brings declarative, Kubernetes-style APIs to cluster creation, configuration, and management. It uses Custom Resources (`Cluster`, `MachineSet`, `MachineDeployment`) to manage Kubernetes clusters across diverse cloud providers.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/",
    tags: ["Cluster API", "Cluster API", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-264",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Cluster API (CAPI): Declarative Multi-Cluster Lifecycle: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Cluster API to automate the provisioning, patching, and retirement of hundreds of worker Kubernetes clusters across hybrid clouds using declarative manifests.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Declarative provisioning, scaling, and upgrading of Kubernetes clusters across cloud providers is under consideration.",
    options: [
      { id: 'A', text: "Rely on ad-hoc workstation bash scripts that execute unversioned curl commands." },
      { id: 'B', text: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources." },
      { id: 'C', text: "Manually click through cloud provider web consoles to launch virtual machines and install kubeadm via SSH." },
      { id: 'D', text: "Run all enterprise workloads inside a single giant unsegmented Kubernetes cluster." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources. Cluster API (CAPI) is a CNCF subproject that brings declarative, Kubernetes-style APIs to cluster creation, configuration, and management. It uses Custom Resources (`Cluster`, `MachineSet`, `MachineDeployment`) to manage Kubernetes clusters across diverse cloud providers.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/",
    tags: ["Cluster API", "Cluster API", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-265",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Cluster API (CAPI): Declarative Multi-Cluster Lifecycle: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Cluster API to automate the provisioning, patching, and retirement of hundreds of worker Kubernetes clusters across hybrid clouds using declarative manifests.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Declarative provisioning, scaling, and upgrading of Kubernetes clusters across cloud providers is under consideration.",
    options: [
      { id: 'A', text: "Manually click through cloud provider web consoles to launch virtual machines and install kubeadm via SSH." },
      { id: 'B', text: "Run all enterprise workloads inside a single giant unsegmented Kubernetes cluster." },
      { id: 'C', text: "Rely on ad-hoc workstation bash scripts that execute unversioned curl commands." },
      { id: 'D', text: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Cluster API (CAPI) using declarative `Cluster`, `MachineDeployment`, and control plane provider resources. Cluster API (CAPI) is a CNCF subproject that brings declarative, Kubernetes-style APIs to cluster creation, configuration, and management. It uses Custom Resources (`Cluster`, `MachineSet`, `MachineDeployment`) to manage Kubernetes clusters across diverse cloud providers.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/",
    tags: ["Cluster API", "Cluster API", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-266",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Cluster Fleet Management and Workload Placement: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Fleet Management to distribute containerized workloads across globally distributed regional clusters while maintaining centralized traffic routing and failover.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Coordinating workload distribution across clusters using tools like Karmada and Cilium ClusterMesh is under consideration.",
    options: [
      { id: 'A', text: "Manually deploy manifests to each individual cluster using separate terminal sessions." },
      { id: 'B', text: "Disable cluster networking and isolate each cluster completely from communication." },
      { id: 'C', text: "Expose all internal cluster IP addresses directly to the public internet." },
      { id: 'D', text: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking. Fleet management tools (like CNCF Karmada, Open Cluster Management, and Cilium ClusterMesh) enable platform engineers to treat multiple Kubernetes clusters as a unified fleet, enforcing centralized governance, cross-cluster service discovery, and automated failover.",
    referenceUrl: "https://karmada.io/docs/",
    tags: ["Fleet Management", "Fleet Management", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-267",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Cluster Fleet Management and Workload Placement: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Fleet Management to distribute containerized workloads across globally distributed regional clusters while maintaining centralized traffic routing and failover.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Coordinating workload distribution across clusters using tools like Karmada and Cilium ClusterMesh is under consideration.",
    options: [
      { id: 'A', text: "Expose all internal cluster IP addresses directly to the public internet." },
      { id: 'B', text: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking." },
      { id: 'C', text: "Disable cluster networking and isolate each cluster completely from communication." },
      { id: 'D', text: "Manually deploy manifests to each individual cluster using separate terminal sessions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking. Fleet management tools (like CNCF Karmada, Open Cluster Management, and Cilium ClusterMesh) enable platform engineers to treat multiple Kubernetes clusters as a unified fleet, enforcing centralized governance, cross-cluster service discovery, and automated failover.",
    referenceUrl: "https://karmada.io/docs/",
    tags: ["Fleet Management", "Fleet Management", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-268",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Cluster Fleet Management and Workload Placement: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Fleet Management to distribute containerized workloads across globally distributed regional clusters while maintaining centralized traffic routing and failover.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Coordinating workload distribution across clusters using tools like Karmada and Cilium ClusterMesh is under consideration.",
    options: [
      { id: 'A', text: "Disable cluster networking and isolate each cluster completely from communication." },
      { id: 'B', text: "Manually deploy manifests to each individual cluster using separate terminal sessions." },
      { id: 'C', text: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking." },
      { id: 'D', text: "Expose all internal cluster IP addresses directly to the public internet." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking. Fleet management tools (like CNCF Karmada, Open Cluster Management, and Cilium ClusterMesh) enable platform engineers to treat multiple Kubernetes clusters as a unified fleet, enforcing centralized governance, cross-cluster service discovery, and automated failover.",
    referenceUrl: "https://karmada.io/docs/",
    tags: ["Fleet Management", "Fleet Management", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-269",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Cluster Fleet Management and Workload Placement: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Fleet Management to distribute containerized workloads across globally distributed regional clusters while maintaining centralized traffic routing and failover.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Coordinating workload distribution across clusters using tools like Karmada and Cilium ClusterMesh is under consideration.",
    options: [
      { id: 'A', text: "Disable cluster networking and isolate each cluster completely from communication." },
      { id: 'B', text: "Expose all internal cluster IP addresses directly to the public internet." },
      { id: 'C', text: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking." },
      { id: 'D', text: "Manually deploy manifests to each individual cluster using separate terminal sessions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking. Fleet management tools (like CNCF Karmada, Open Cluster Management, and Cilium ClusterMesh) enable platform engineers to treat multiple Kubernetes clusters as a unified fleet, enforcing centralized governance, cross-cluster service discovery, and automated failover.",
    referenceUrl: "https://karmada.io/docs/",
    tags: ["Fleet Management", "Fleet Management", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-270",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Cluster Fleet Management and Workload Placement: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Fleet Management to distribute containerized workloads across globally distributed regional clusters while maintaining centralized traffic routing and failover.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Coordinating workload distribution across clusters using tools like Karmada and Cilium ClusterMesh is under consideration.",
    options: [
      { id: 'A', text: "Expose all internal cluster IP addresses directly to the public internet." },
      { id: 'B', text: "Disable cluster networking and isolate each cluster completely from communication." },
      { id: 'C', text: "Manually deploy manifests to each individual cluster using separate terminal sessions." },
      { id: 'D', text: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy multi-cluster management tools like Karmada or Cilium ClusterMesh to manage policy-based workload placement and cross-cluster networking. Fleet management tools (like CNCF Karmada, Open Cluster Management, and Cilium ClusterMesh) enable platform engineers to treat multiple Kubernetes clusters as a unified fleet, enforcing centralized governance, cross-cluster service discovery, and automated failover.",
    referenceUrl: "https://karmada.io/docs/",
    tags: ["Fleet Management", "Fleet Management", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-271",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Tenancy Models: Soft vs Hard Tenancy and vcluster: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Multi-Tenancy to provide development teams with dedicated cluster-admin access for testing CRDs and operators without the expense of physical clusters.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Virtual clusters (vcluster), Hierarchical Namespaces (HNC), and NetworkPolicies for isolation is under consideration.",
    options: [
      { id: 'A', text: "Grant full physical cluster-admin rights to developers on the shared production cluster." },
      { id: 'B', text: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware." },
      { id: 'C', text: "Disable Kubernetes RBAC and security contexts entirely." },
      { id: 'D', text: "Force every developer to purchase dedicated physical bare-metal hardware servers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware. Platform engineering addresses multi-tenancy through soft multi-tenancy (Namespaces, Quotas, NetworkPolicies) or hard multi-tenancy via virtual clusters (vcluster). Virtual clusters give tenants dedicated control planes (API server, etcd) inside a namespace on shared nodes.",
    referenceUrl: "https://www.vcluster.com/docs/",
    tags: ["Multi-Tenancy", "Multi-Tenancy", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-272",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Tenancy Models: Soft vs Hard Tenancy and vcluster: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Multi-Tenancy to provide development teams with dedicated cluster-admin access for testing CRDs and operators without the expense of physical clusters.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Virtual clusters (vcluster), Hierarchical Namespaces (HNC), and NetworkPolicies for isolation is under consideration.",
    options: [
      { id: 'A', text: "Disable Kubernetes RBAC and security contexts entirely." },
      { id: 'B', text: "Grant full physical cluster-admin rights to developers on the shared production cluster." },
      { id: 'C', text: "Force every developer to purchase dedicated physical bare-metal hardware servers." },
      { id: 'D', text: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware. Platform engineering addresses multi-tenancy through soft multi-tenancy (Namespaces, Quotas, NetworkPolicies) or hard multi-tenancy via virtual clusters (vcluster). Virtual clusters give tenants dedicated control planes (API server, etcd) inside a namespace on shared nodes.",
    referenceUrl: "https://www.vcluster.com/docs/",
    tags: ["Multi-Tenancy", "Multi-Tenancy", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-273",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Tenancy Models: Soft vs Hard Tenancy and vcluster: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Multi-Tenancy to provide development teams with dedicated cluster-admin access for testing CRDs and operators without the expense of physical clusters.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Virtual clusters (vcluster), Hierarchical Namespaces (HNC), and NetworkPolicies for isolation is under consideration.",
    options: [
      { id: 'A', text: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware." },
      { id: 'B', text: "Force every developer to purchase dedicated physical bare-metal hardware servers." },
      { id: 'C', text: "Grant full physical cluster-admin rights to developers on the shared production cluster." },
      { id: 'D', text: "Disable Kubernetes RBAC and security contexts entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware. Platform engineering addresses multi-tenancy through soft multi-tenancy (Namespaces, Quotas, NetworkPolicies) or hard multi-tenancy via virtual clusters (vcluster). Virtual clusters give tenants dedicated control planes (API server, etcd) inside a namespace on shared nodes.",
    referenceUrl: "https://www.vcluster.com/docs/",
    tags: ["Multi-Tenancy", "Multi-Tenancy", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-274",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Tenancy Models: Soft vs Hard Tenancy and vcluster: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Multi-Tenancy to provide development teams with dedicated cluster-admin access for testing CRDs and operators without the expense of physical clusters.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Virtual clusters (vcluster), Hierarchical Namespaces (HNC), and NetworkPolicies for isolation is under consideration.",
    options: [
      { id: 'A', text: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware." },
      { id: 'B', text: "Grant full physical cluster-admin rights to developers on the shared production cluster." },
      { id: 'C', text: "Force every developer to purchase dedicated physical bare-metal hardware servers." },
      { id: 'D', text: "Disable Kubernetes RBAC and security contexts entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware. Platform engineering addresses multi-tenancy through soft multi-tenancy (Namespaces, Quotas, NetworkPolicies) or hard multi-tenancy via virtual clusters (vcluster). Virtual clusters give tenants dedicated control planes (API server, etcd) inside a namespace on shared nodes.",
    referenceUrl: "https://www.vcluster.com/docs/",
    tags: ["Multi-Tenancy", "Multi-Tenancy", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-275",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Multi-Tenancy Models: Soft vs Hard Tenancy and vcluster: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Multi-Tenancy to provide development teams with dedicated cluster-admin access for testing CRDs and operators without the expense of physical clusters.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Virtual clusters (vcluster), Hierarchical Namespaces (HNC), and NetworkPolicies for isolation is under consideration.",
    options: [
      { id: 'A', text: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware." },
      { id: 'B', text: "Force every developer to purchase dedicated physical bare-metal hardware servers." },
      { id: 'C', text: "Grant full physical cluster-admin rights to developers on the shared production cluster." },
      { id: 'D', text: "Disable Kubernetes RBAC and security contexts entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provision lightweight virtual Kubernetes clusters (vcluster) running inside dedicated tenant namespaces on shared underlying hardware. Platform engineering addresses multi-tenancy through soft multi-tenancy (Namespaces, Quotas, NetworkPolicies) or hard multi-tenancy via virtual clusters (vcluster). Virtual clusters give tenants dedicated control planes (API server, etcd) inside a namespace on shared nodes.",
    referenceUrl: "https://www.vcluster.com/docs/",
    tags: ["Multi-Tenancy", "Multi-Tenancy", "Resilience And Observability"]
  }
];

export default CNCF_CNPA_QUESTIONS_11;
