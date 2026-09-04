export const K8S_CKA_QUESTIONS_17 = [
  {
    id: "k8s-cka-376",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Topology Spread to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? topologySpreadConstraints with maxSkew and whenUnsatisfiable is under consideration.",
    options: [
      { id: 'A', text: "Set `maxSkew: 100` to allow all pods to cluster in a single zone." },
      { id: 'B', text: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`." },
      { id: 'C', text: "Use manual replica deployments with hardcoded node names for each zone." },
      { id: 'D', text: "Disable multi-zone scheduling in kube-scheduler configuration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread", "Topology Spread", "Dr Failover"]
  },
  {
    id: "k8s-cka-377",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Topology Spread to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? topologySpreadConstraints with maxSkew and whenUnsatisfiable is under consideration.",
    options: [
      { id: 'A', text: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`." },
      { id: 'B', text: "Set `maxSkew: 100` to allow all pods to cluster in a single zone." },
      { id: 'C', text: "Disable multi-zone scheduling in kube-scheduler configuration." },
      { id: 'D', text: "Use manual replica deployments with hardcoded node names for each zone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread", "Topology Spread", "High Load Scale"]
  },
  {
    id: "k8s-cka-378",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Topology Spread to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? topologySpreadConstraints with maxSkew and whenUnsatisfiable is under consideration.",
    options: [
      { id: 'A', text: "Disable multi-zone scheduling in kube-scheduler configuration." },
      { id: 'B', text: "Set `maxSkew: 100` to allow all pods to cluster in a single zone." },
      { id: 'C', text: "Use manual replica deployments with hardcoded node names for each zone." },
      { id: 'D', text: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread", "Topology Spread", "Security Compliance"]
  },
  {
    id: "k8s-cka-379",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Topology Spread to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? topologySpreadConstraints with maxSkew and whenUnsatisfiable is under consideration.",
    options: [
      { id: 'A', text: "Disable multi-zone scheduling in kube-scheduler configuration." },
      { id: 'B', text: "Use manual replica deployments with hardcoded node names for each zone." },
      { id: 'C', text: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`." },
      { id: 'D', text: "Set `maxSkew: 100` to allow all pods to cluster in a single zone." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread", "Topology Spread", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-380",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Topology Spread to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? topologySpreadConstraints with maxSkew and whenUnsatisfiable is under consideration.",
    options: [
      { id: 'A', text: "Disable multi-zone scheduling in kube-scheduler configuration." },
      { id: 'B', text: "Set `maxSkew: 100` to allow all pods to cluster in a single zone." },
      { id: 'C', text: "Use manual replica deployments with hardcoded node names for each zone." },
      { id: 'D', text: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread", "Topology Spread", "Resilience Failure"]
  },
  {
    id: "k8s-cka-381",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Availability Safeguards to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? minAvailable and maxUnavailable rules during voluntary cluster disruptions is under consideration.",
    options: [
      { id: 'A', text: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector." },
      { id: 'B', text: "Set `maxUnavailable: 100%` in the deployment manifest." },
      { id: 'C', text: "Instruct administrators to never drain nodes during maintenance." },
      { id: 'D', text: "Disable the Kubernetes Eviction API across all control plane nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards", "PDB", "Dr Failover"]
  },
  {
    id: "k8s-cka-382",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Availability Safeguards to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? minAvailable and maxUnavailable rules during voluntary cluster disruptions is under consideration.",
    options: [
      { id: 'A', text: "Set `maxUnavailable: 100%` in the deployment manifest." },
      { id: 'B', text: "Disable the Kubernetes Eviction API across all control plane nodes." },
      { id: 'C', text: "Instruct administrators to never drain nodes during maintenance." },
      { id: 'D', text: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards", "PDB", "High Load Scale"]
  },
  {
    id: "k8s-cka-383",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Availability Safeguards to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? minAvailable and maxUnavailable rules during voluntary cluster disruptions is under consideration.",
    options: [
      { id: 'A', text: "Set `maxUnavailable: 100%` in the deployment manifest." },
      { id: 'B', text: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector." },
      { id: 'C', text: "Instruct administrators to never drain nodes during maintenance." },
      { id: 'D', text: "Disable the Kubernetes Eviction API across all control plane nodes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards", "PDB", "Security Compliance"]
  },
  {
    id: "k8s-cka-384",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Availability Safeguards to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? minAvailable and maxUnavailable rules during voluntary cluster disruptions is under consideration.",
    options: [
      { id: 'A', text: "Set `maxUnavailable: 100%` in the deployment manifest." },
      { id: 'B', text: "Instruct administrators to never drain nodes during maintenance." },
      { id: 'C', text: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector." },
      { id: 'D', text: "Disable the Kubernetes Eviction API across all control plane nodes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards", "PDB", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-385",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Availability Safeguards to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? minAvailable and maxUnavailable rules during voluntary cluster disruptions is under consideration.",
    options: [
      { id: 'A', text: "Disable the Kubernetes Eviction API across all control plane nodes." },
      { id: 'B', text: "Set `maxUnavailable: 100%` in the deployment manifest." },
      { id: 'C', text: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector." },
      { id: 'D', text: "Instruct administrators to never drain nodes during maintenance." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards", "PDB", "Resilience Failure"]
  },
  {
    id: "k8s-cka-386",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Workload Autoscaling to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? HorizontalPodAutoscaler scaling based on CPU and memory utilization thresholds is under consideration.",
    options: [
      { id: 'A', text: "Set container CPU requests to zero so pods appear to use infinite CPU." },
      { id: 'B', text: "Manually scale the deployment up to 500 replicas permanently to handle potential peak traffic." },
      { id: 'C', text: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage." },
      { id: 'D', text: "Write an external cron script that runs `kubectl scale` every five minutes based on a static schedule." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling", "HPA", "Dr Failover"]
  },
  {
    id: "k8s-cka-387",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Workload Autoscaling to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? HorizontalPodAutoscaler scaling based on CPU and memory utilization thresholds is under consideration.",
    options: [
      { id: 'A', text: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage." },
      { id: 'B', text: "Set container CPU requests to zero so pods appear to use infinite CPU." },
      { id: 'C', text: "Manually scale the deployment up to 500 replicas permanently to handle potential peak traffic." },
      { id: 'D', text: "Write an external cron script that runs `kubectl scale` every five minutes based on a static schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling", "HPA", "High Load Scale"]
  },
  {
    id: "k8s-cka-388",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Workload Autoscaling to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? HorizontalPodAutoscaler scaling based on CPU and memory utilization thresholds is under consideration.",
    options: [
      { id: 'A', text: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage." },
      { id: 'B', text: "Set container CPU requests to zero so pods appear to use infinite CPU." },
      { id: 'C', text: "Write an external cron script that runs `kubectl scale` every five minutes based on a static schedule." },
      { id: 'D', text: "Manually scale the deployment up to 500 replicas permanently to handle potential peak traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling", "HPA", "Security Compliance"]
  },
  {
    id: "k8s-cka-389",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Workload Autoscaling to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? HorizontalPodAutoscaler scaling based on CPU and memory utilization thresholds is under consideration.",
    options: [
      { id: 'A', text: "Manually scale the deployment up to 500 replicas permanently to handle potential peak traffic." },
      { id: 'B', text: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage." },
      { id: 'C', text: "Set container CPU requests to zero so pods appear to use infinite CPU." },
      { id: 'D', text: "Write an external cron script that runs `kubectl scale` every five minutes based on a static schedule." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling", "HPA", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-390",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Workload Autoscaling to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? HorizontalPodAutoscaler scaling based on CPU and memory utilization thresholds is under consideration.",
    options: [
      { id: 'A', text: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage." },
      { id: 'B', text: "Set container CPU requests to zero so pods appear to use infinite CPU." },
      { id: 'C', text: "Write an external cron script that runs `kubectl scale` every five minutes based on a static schedule." },
      { id: 'D', text: "Manually scale the deployment up to 500 replicas permanently to handle potential peak traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling", "HPA", "Resilience Failure"]
  },
  {
    id: "k8s-cka-391",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Cluster Bootstrap to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Initializing control plane nodes with kubeadm init and pod-network-cidr is under consideration.",
    options: [
      { id: 'A', text: "Manually compile the apiserver, scheduler, and controller-manager binaries from source code." },
      { id: 'B', text: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites." },
      { id: 'C', text: "Install all Kubernetes components as systemd units without containerization or certificates." },
      { id: 'D', text: "Run `kubeadm join` on an uninitialized node without specifying a control plane token." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap", "kubeadm init", "Dr Failover"]
  },
  {
    id: "k8s-cka-392",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Cluster Bootstrap to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Initializing control plane nodes with kubeadm init and pod-network-cidr is under consideration.",
    options: [
      { id: 'A', text: "Manually compile the apiserver, scheduler, and controller-manager binaries from source code." },
      { id: 'B', text: "Run `kubeadm join` on an uninitialized node without specifying a control plane token." },
      { id: 'C', text: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites." },
      { id: 'D', text: "Install all Kubernetes components as systemd units without containerization or certificates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap", "kubeadm init", "High Load Scale"]
  },
  {
    id: "k8s-cka-393",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Cluster Bootstrap to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Initializing control plane nodes with kubeadm init and pod-network-cidr is under consideration.",
    options: [
      { id: 'A', text: "Manually compile the apiserver, scheduler, and controller-manager binaries from source code." },
      { id: 'B', text: "Install all Kubernetes components as systemd units without containerization or certificates." },
      { id: 'C', text: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites." },
      { id: 'D', text: "Run `kubeadm join` on an uninitialized node without specifying a control plane token." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap", "kubeadm init", "Security Compliance"]
  },
  {
    id: "k8s-cka-394",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Cluster Bootstrap to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Initializing control plane nodes with kubeadm init and pod-network-cidr is under consideration.",
    options: [
      { id: 'A', text: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites." },
      { id: 'B', text: "Manually compile the apiserver, scheduler, and controller-manager binaries from source code." },
      { id: 'C', text: "Run `kubeadm join` on an uninitialized node without specifying a control plane token." },
      { id: 'D', text: "Install all Kubernetes components as systemd units without containerization or certificates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap", "kubeadm init", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-395",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Cluster Bootstrap to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Initializing control plane nodes with kubeadm init and pod-network-cidr is under consideration.",
    options: [
      { id: 'A', text: "Install all Kubernetes components as systemd units without containerization or certificates." },
      { id: 'B', text: "Manually compile the apiserver, scheduler, and controller-manager binaries from source code." },
      { id: 'C', text: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites." },
      { id: 'D', text: "Run `kubeadm join` on an uninitialized node without specifying a control plane token." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap", "kubeadm init", "Resilience Failure"]
  },
  {
    id: "k8s-cka-396",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Cluster Upgrades to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Step-by-step sequential minor version upgrades of kubeadm, control plane, and kubelet is under consideration.",
    options: [
      { id: 'A', text: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload." },
      { id: 'B', text: "Skip directly from version 1.26 to 1.29 in a single upgrade command." },
      { id: 'C', text: "Delete the cluster and restore etcd on a fresh server running the new version." },
      { id: 'D', text: "Upgrade all worker node kubelets before upgrading the control plane apiserver." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "Dr Failover"]
  },
  {
    id: "k8s-cka-397",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Cluster Upgrades to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Step-by-step sequential minor version upgrades of kubeadm, control plane, and kubelet is under consideration.",
    options: [
      { id: 'A', text: "Upgrade all worker node kubelets before upgrading the control plane apiserver." },
      { id: 'B', text: "Delete the cluster and restore etcd on a fresh server running the new version." },
      { id: 'C', text: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload." },
      { id: 'D', text: "Skip directly from version 1.26 to 1.29 in a single upgrade command." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "High Load Scale"]
  },
  {
    id: "k8s-cka-398",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Cluster Upgrades to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Step-by-step sequential minor version upgrades of kubeadm, control plane, and kubelet is under consideration.",
    options: [
      { id: 'A', text: "Upgrade all worker node kubelets before upgrading the control plane apiserver." },
      { id: 'B', text: "Skip directly from version 1.26 to 1.29 in a single upgrade command." },
      { id: 'C', text: "Delete the cluster and restore etcd on a fresh server running the new version." },
      { id: 'D', text: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "Security Compliance"]
  },
  {
    id: "k8s-cka-399",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Cluster Upgrades to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Step-by-step sequential minor version upgrades of kubeadm, control plane, and kubelet is under consideration.",
    options: [
      { id: 'A', text: "Delete the cluster and restore etcd on a fresh server running the new version." },
      { id: 'B', text: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload." },
      { id: 'C', text: "Skip directly from version 1.26 to 1.29 in a single upgrade command." },
      { id: 'D', text: "Upgrade all worker node kubelets before upgrading the control plane apiserver." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-400",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Cluster Upgrades to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Step-by-step sequential minor version upgrades of kubeadm, control plane, and kubelet is under consideration.",
    options: [
      { id: 'A', text: "Delete the cluster and restore etcd on a fresh server running the new version." },
      { id: 'B', text: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload." },
      { id: 'C', text: "Skip directly from version 1.26 to 1.29 in a single upgrade command." },
      { id: 'D', text: "Upgrade all worker node kubelets before upgrading the control plane apiserver." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades", "Cluster Upgrade", "Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_17;
