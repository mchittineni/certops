export const K8S_CKA_FLASHCARDS_17 = [
  {
    id: "k8s-cka-fc-376",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Topology Spread Constraints (Dr Failover)",
    hint: "Balancing workload distribution across availability zones.",
    back: "<strong>topologySpreadConstraints</strong> enforce balanced pod distribution across failure domains (like availability zones) by regulating <code>maxSkew</code> to prevent uneven cluster placement.",
    tags: ["Topology Spread", "Topology Spread", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-377",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Topology Spread Constraints (High Load Scale)",
    hint: "Balancing workload distribution across availability zones.",
    back: "<strong>topologySpreadConstraints</strong> enforce balanced pod distribution across failure domains (like availability zones) by regulating <code>maxSkew</code> to prevent uneven cluster placement.",
    tags: ["Topology Spread", "Topology Spread", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-378",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Topology Spread Constraints (Security Compliance)",
    hint: "Balancing workload distribution across availability zones.",
    back: "<strong>topologySpreadConstraints</strong> enforce balanced pod distribution across failure domains (like availability zones) by regulating <code>maxSkew</code> to prevent uneven cluster placement.",
    tags: ["Topology Spread", "Topology Spread", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-379",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Topology Spread Constraints (Hybrid Migration)",
    hint: "Balancing workload distribution across availability zones.",
    back: "<strong>topologySpreadConstraints</strong> enforce balanced pod distribution across failure domains (like availability zones) by regulating <code>maxSkew</code> to prevent uneven cluster placement.",
    tags: ["Topology Spread", "Topology Spread", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-380",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Topology Spread Constraints (Resilience Failure)",
    hint: "Balancing workload distribution across availability zones.",
    back: "<strong>topologySpreadConstraints</strong> enforce balanced pod distribution across failure domains (like availability zones) by regulating <code>maxSkew</code> to prevent uneven cluster placement.",
    tags: ["Topology Spread", "Topology Spread", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-381",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Disruption Budgets (PDB) (Dr Failover)",
    hint: "Guaranteeing minimum available replicas during voluntary node drains.",
    back: "A <strong>PodDisruptionBudget (PDB)</strong> defines minimum available or maximum unavailable pod thresholds, ensuring voluntary actions like <code>kubectl drain</code> do not breach application availability.",
    tags: ["Availability Safeguards", "PDB", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-382",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Disruption Budgets (PDB) (High Load Scale)",
    hint: "Guaranteeing minimum available replicas during voluntary node drains.",
    back: "A <strong>PodDisruptionBudget (PDB)</strong> defines minimum available or maximum unavailable pod thresholds, ensuring voluntary actions like <code>kubectl drain</code> do not breach application availability.",
    tags: ["Availability Safeguards", "PDB", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-383",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Disruption Budgets (PDB) (Security Compliance)",
    hint: "Guaranteeing minimum available replicas during voluntary node drains.",
    back: "A <strong>PodDisruptionBudget (PDB)</strong> defines minimum available or maximum unavailable pod thresholds, ensuring voluntary actions like <code>kubectl drain</code> do not breach application availability.",
    tags: ["Availability Safeguards", "PDB", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-384",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Disruption Budgets (PDB) (Hybrid Migration)",
    hint: "Guaranteeing minimum available replicas during voluntary node drains.",
    back: "A <strong>PodDisruptionBudget (PDB)</strong> defines minimum available or maximum unavailable pod thresholds, ensuring voluntary actions like <code>kubectl drain</code> do not breach application availability.",
    tags: ["Availability Safeguards", "PDB", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-385",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Pod Disruption Budgets (PDB) (Resilience Failure)",
    hint: "Guaranteeing minimum available replicas during voluntary node drains.",
    back: "A <strong>PodDisruptionBudget (PDB)</strong> defines minimum available or maximum unavailable pod thresholds, ensuring voluntary actions like <code>kubectl drain</code> do not breach application availability.",
    tags: ["Availability Safeguards", "PDB", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-386",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Horizontal Pod Autoscaler (HPA) (Dr Failover)",
    hint: "Dynamically scaling pod replicas based on resource metrics.",
    back: "The <strong>HorizontalPodAutoscaler (HPA)</strong> queries the Metrics Server to automatically scale workload replica counts up or down based on average CPU or memory utilization targets.",
    tags: ["Workload Autoscaling", "HPA", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-387",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Horizontal Pod Autoscaler (HPA) (High Load Scale)",
    hint: "Dynamically scaling pod replicas based on resource metrics.",
    back: "The <strong>HorizontalPodAutoscaler (HPA)</strong> queries the Metrics Server to automatically scale workload replica counts up or down based on average CPU or memory utilization targets.",
    tags: ["Workload Autoscaling", "HPA", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-388",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Horizontal Pod Autoscaler (HPA) (Security Compliance)",
    hint: "Dynamically scaling pod replicas based on resource metrics.",
    back: "The <strong>HorizontalPodAutoscaler (HPA)</strong> queries the Metrics Server to automatically scale workload replica counts up or down based on average CPU or memory utilization targets.",
    tags: ["Workload Autoscaling", "HPA", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-389",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Horizontal Pod Autoscaler (HPA) (Hybrid Migration)",
    hint: "Dynamically scaling pod replicas based on resource metrics.",
    back: "The <strong>HorizontalPodAutoscaler (HPA)</strong> queries the Metrics Server to automatically scale workload replica counts up or down based on average CPU or memory utilization targets.",
    tags: ["Workload Autoscaling", "HPA", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-390",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    front: "Horizontal Pod Autoscaler (HPA) (Resilience Failure)",
    hint: "Dynamically scaling pod replicas based on resource metrics.",
    back: "The <strong>HorizontalPodAutoscaler (HPA)</strong> queries the Metrics Server to automatically scale workload replica counts up or down based on average CPU or memory utilization targets.",
    tags: ["Workload Autoscaling", "HPA", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-391",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubeadm Cluster Initialization (Dr Failover)",
    hint: "Bootstrapping control plane nodes and specifying pod network CIDR.",
    back: "Running <strong>kubeadm init --pod-network-cidr</strong> bootstraps the control plane, generating cluster PKI certificates and static pod manifests required for CNI network initialization.",
    tags: ["Cluster Bootstrap", "kubeadm init", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-392",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubeadm Cluster Initialization (High Load Scale)",
    hint: "Bootstrapping control plane nodes and specifying pod network CIDR.",
    back: "Running <strong>kubeadm init --pod-network-cidr</strong> bootstraps the control plane, generating cluster PKI certificates and static pod manifests required for CNI network initialization.",
    tags: ["Cluster Bootstrap", "kubeadm init", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-393",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubeadm Cluster Initialization (Security Compliance)",
    hint: "Bootstrapping control plane nodes and specifying pod network CIDR.",
    back: "Running <strong>kubeadm init --pod-network-cidr</strong> bootstraps the control plane, generating cluster PKI certificates and static pod manifests required for CNI network initialization.",
    tags: ["Cluster Bootstrap", "kubeadm init", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-394",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubeadm Cluster Initialization (Hybrid Migration)",
    hint: "Bootstrapping control plane nodes and specifying pod network CIDR.",
    back: "Running <strong>kubeadm init --pod-network-cidr</strong> bootstraps the control plane, generating cluster PKI certificates and static pod manifests required for CNI network initialization.",
    tags: ["Cluster Bootstrap", "kubeadm init", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-395",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Kubeadm Cluster Initialization (Resilience Failure)",
    hint: "Bootstrapping control plane nodes and specifying pod network CIDR.",
    back: "Running <strong>kubeadm init --pod-network-cidr</strong> bootstraps the control plane, generating cluster PKI certificates and static pod manifests required for CNI network initialization.",
    tags: ["Cluster Bootstrap", "kubeadm init", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-396",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Sequential Kubeadm Cluster Upgrades (Dr Failover)",
    hint: "Order of operations for safe Kubernetes version upgrades.",
    back: "Upgrading Kubernetes requires sequential minor version steps: upgrade <strong>kubeadm</strong> first, run <code>kubeadm upgrade apply</code>, upgrade <strong>kubelet/kubectl</strong>, and restart services after draining.",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-397",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Sequential Kubeadm Cluster Upgrades (High Load Scale)",
    hint: "Order of operations for safe Kubernetes version upgrades.",
    back: "Upgrading Kubernetes requires sequential minor version steps: upgrade <strong>kubeadm</strong> first, run <code>kubeadm upgrade apply</code>, upgrade <strong>kubelet/kubectl</strong>, and restart services after draining.",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-398",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Sequential Kubeadm Cluster Upgrades (Security Compliance)",
    hint: "Order of operations for safe Kubernetes version upgrades.",
    back: "Upgrading Kubernetes requires sequential minor version steps: upgrade <strong>kubeadm</strong> first, run <code>kubeadm upgrade apply</code>, upgrade <strong>kubelet/kubectl</strong>, and restart services after draining.",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-399",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Sequential Kubeadm Cluster Upgrades (Hybrid Migration)",
    hint: "Order of operations for safe Kubernetes version upgrades.",
    back: "Upgrading Kubernetes requires sequential minor version steps: upgrade <strong>kubeadm</strong> first, run <code>kubeadm upgrade apply</code>, upgrade <strong>kubelet/kubectl</strong>, and restart services after draining.",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-400",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Sequential Kubeadm Cluster Upgrades (Resilience Failure)",
    hint: "Order of operations for safe Kubernetes version upgrades.",
    back: "Upgrading Kubernetes requires sequential minor version steps: upgrade <strong>kubeadm</strong> first, run <code>kubeadm upgrade apply</code>, upgrade <strong>kubelet/kubectl</strong>, and restart services after draining.",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "Resilience Failure"]
  }
];

export default K8S_CKA_FLASHCARDS_17;
