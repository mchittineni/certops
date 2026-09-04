export const K8S_CKA_FLASHCARDS_19 = [
  {
    id: "k8s-cka-fc-426",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Node Maintenance with Cordon and Drain (Dr Failover)",
    hint: "Safely evicting workloads before host operating system maintenance.",
    back: "Before maintenance, run <strong>kubectl cordon</strong> to prevent new pods and <strong>kubectl drain</strong> to evict existing workloads safely according to PodDisruptionBudgets.",
    tags: ["Node Maintenance", "Node Drain", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-427",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Node Maintenance with Cordon and Drain (High Load Scale)",
    hint: "Safely evicting workloads before host operating system maintenance.",
    back: "Before maintenance, run <strong>kubectl cordon</strong> to prevent new pods and <strong>kubectl drain</strong> to evict existing workloads safely according to PodDisruptionBudgets.",
    tags: ["Node Maintenance", "Node Drain", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-428",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Node Maintenance with Cordon and Drain (Security Compliance)",
    hint: "Safely evicting workloads before host operating system maintenance.",
    back: "Before maintenance, run <strong>kubectl cordon</strong> to prevent new pods and <strong>kubectl drain</strong> to evict existing workloads safely according to PodDisruptionBudgets.",
    tags: ["Node Maintenance", "Node Drain", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-429",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Node Maintenance with Cordon and Drain (Hybrid Migration)",
    hint: "Safely evicting workloads before host operating system maintenance.",
    back: "Before maintenance, run <strong>kubectl cordon</strong> to prevent new pods and <strong>kubectl drain</strong> to evict existing workloads safely according to PodDisruptionBudgets.",
    tags: ["Node Maintenance", "Node Drain", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-430",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Node Maintenance with Cordon and Drain (Resilience Failure)",
    hint: "Safely evicting workloads before host operating system maintenance.",
    back: "Before maintenance, run <strong>kubectl cordon</strong> to prevent new pods and <strong>kubectl drain</strong> to evict existing workloads safely according to PodDisruptionBudgets.",
    tags: ["Node Maintenance", "Node Drain", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-431",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubelet Static Pods (Dr Failover)",
    hint: "Running control plane components and node services via local directory manifests.",
    back: "<strong>Static pods</strong> are managed directly by the kubelet from manifests in <code>/etc/kubernetes/manifests/</code>, functioning independently of the API server to run core control plane services.",
    tags: ["Static Pods", "Static Pods", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-432",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubelet Static Pods (High Load Scale)",
    hint: "Running control plane components and node services via local directory manifests.",
    back: "<strong>Static pods</strong> are managed directly by the kubelet from manifests in <code>/etc/kubernetes/manifests/</code>, functioning independently of the API server to run core control plane services.",
    tags: ["Static Pods", "Static Pods", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-433",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubelet Static Pods (Security Compliance)",
    hint: "Running control plane components and node services via local directory manifests.",
    back: "<strong>Static pods</strong> are managed directly by the kubelet from manifests in <code>/etc/kubernetes/manifests/</code>, functioning independently of the API server to run core control plane services.",
    tags: ["Static Pods", "Static Pods", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-434",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubelet Static Pods (Hybrid Migration)",
    hint: "Running control plane components and node services via local directory manifests.",
    back: "<strong>Static pods</strong> are managed directly by the kubelet from manifests in <code>/etc/kubernetes/manifests/</code>, functioning independently of the API server to run core control plane services.",
    tags: ["Static Pods", "Static Pods", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-435",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubelet Static Pods (Resilience Failure)",
    hint: "Running control plane components and node services via local directory manifests.",
    back: "<strong>Static pods</strong> are managed directly by the kubelet from manifests in <code>/etc/kubernetes/manifests/</code>, functioning independently of the API server to run core control plane services.",
    tags: ["Static Pods", "Static Pods", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-436",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "High Availability Control Plane Architecture (Dr Failover)",
    hint: "Stacked etcd topology with three or more control plane nodes.",
    back: "A production <strong>HA control plane</strong> uses at least three master nodes with stacked etcd and a load balancer fronting the API servers, ensuring continuous cluster operations if one node fails.",
    tags: ["HA Architecture", "HA Topologies", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-437",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "High Availability Control Plane Architecture (High Load Scale)",
    hint: "Stacked etcd topology with three or more control plane nodes.",
    back: "A production <strong>HA control plane</strong> uses at least three master nodes with stacked etcd and a load balancer fronting the API servers, ensuring continuous cluster operations if one node fails.",
    tags: ["HA Architecture", "HA Topologies", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-438",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "High Availability Control Plane Architecture (Security Compliance)",
    hint: "Stacked etcd topology with three or more control plane nodes.",
    back: "A production <strong>HA control plane</strong> uses at least three master nodes with stacked etcd and a load balancer fronting the API servers, ensuring continuous cluster operations if one node fails.",
    tags: ["HA Architecture", "HA Topologies", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-439",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "High Availability Control Plane Architecture (Hybrid Migration)",
    hint: "Stacked etcd topology with three or more control plane nodes.",
    back: "A production <strong>HA control plane</strong> uses at least three master nodes with stacked etcd and a load balancer fronting the API servers, ensuring continuous cluster operations if one node fails.",
    tags: ["HA Architecture", "HA Topologies", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-440",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "High Availability Control Plane Architecture (Resilience Failure)",
    hint: "Stacked etcd topology with three or more control plane nodes.",
    back: "A production <strong>HA control plane</strong> uses at least three master nodes with stacked etcd and a load balancer fronting the API servers, ensuring continuous cluster operations if one node fails.",
    tags: ["HA Architecture", "HA Topologies", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-441",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Custom Resource Definitions (CRDs) (Dr Failover)",
    hint: "Extending Kubernetes APIs with declarative custom resource schemas.",
    back: "<strong>CustomResourceDefinitions (CRDs)</strong> extend the Kubernetes API with user-defined object types, allowing operators and controllers to manage specialized application lifecycles declaratively.",
    tags: ["API Extensions", "CRDs", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-442",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Custom Resource Definitions (CRDs) (High Load Scale)",
    hint: "Extending Kubernetes APIs with declarative custom resource schemas.",
    back: "<strong>CustomResourceDefinitions (CRDs)</strong> extend the Kubernetes API with user-defined object types, allowing operators and controllers to manage specialized application lifecycles declaratively.",
    tags: ["API Extensions", "CRDs", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-443",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Custom Resource Definitions (CRDs) (Security Compliance)",
    hint: "Extending Kubernetes APIs with declarative custom resource schemas.",
    back: "<strong>CustomResourceDefinitions (CRDs)</strong> extend the Kubernetes API with user-defined object types, allowing operators and controllers to manage specialized application lifecycles declaratively.",
    tags: ["API Extensions", "CRDs", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-444",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Custom Resource Definitions (CRDs) (Hybrid Migration)",
    hint: "Extending Kubernetes APIs with declarative custom resource schemas.",
    back: "<strong>CustomResourceDefinitions (CRDs)</strong> extend the Kubernetes API with user-defined object types, allowing operators and controllers to manage specialized application lifecycles declaratively.",
    tags: ["API Extensions", "CRDs", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-445",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Custom Resource Definitions (CRDs) (Resilience Failure)",
    hint: "Extending Kubernetes APIs with declarative custom resource schemas.",
    back: "<strong>CustomResourceDefinitions (CRDs)</strong> extend the Kubernetes API with user-defined object types, allowing operators and controllers to manage specialized application lifecycles declaratively.",
    tags: ["API Extensions", "CRDs", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-446",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ResourceQuotas and LimitRanges (Dr Failover)",
    hint: "Enforcing multi-tenant compute caps and default container resource boundaries.",
    back: "<strong>ResourceQuotas</strong> limit aggregate compute resources per namespace, while <strong>LimitRanges</strong> enforce default and minimum/maximum resource boundaries on individual containers.",
    tags: ["Resource Governance", "Resource Quotas", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-447",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ResourceQuotas and LimitRanges (High Load Scale)",
    hint: "Enforcing multi-tenant compute caps and default container resource boundaries.",
    back: "<strong>ResourceQuotas</strong> limit aggregate compute resources per namespace, while <strong>LimitRanges</strong> enforce default and minimum/maximum resource boundaries on individual containers.",
    tags: ["Resource Governance", "Resource Quotas", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-448",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ResourceQuotas and LimitRanges (Security Compliance)",
    hint: "Enforcing multi-tenant compute caps and default container resource boundaries.",
    back: "<strong>ResourceQuotas</strong> limit aggregate compute resources per namespace, while <strong>LimitRanges</strong> enforce default and minimum/maximum resource boundaries on individual containers.",
    tags: ["Resource Governance", "Resource Quotas", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-449",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ResourceQuotas and LimitRanges (Hybrid Migration)",
    hint: "Enforcing multi-tenant compute caps and default container resource boundaries.",
    back: "<strong>ResourceQuotas</strong> limit aggregate compute resources per namespace, while <strong>LimitRanges</strong> enforce default and minimum/maximum resource boundaries on individual containers.",
    tags: ["Resource Governance", "Resource Quotas", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-450",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ResourceQuotas and LimitRanges (Resilience Failure)",
    hint: "Enforcing multi-tenant compute caps and default container resource boundaries.",
    back: "<strong>ResourceQuotas</strong> limit aggregate compute resources per namespace, while <strong>LimitRanges</strong> enforce default and minimum/maximum resource boundaries on individual containers.",
    tags: ["Resource Governance", "Resource Quotas", "Resilience Failure"]
  }
];

export default K8S_CKA_FLASHCARDS_19;
