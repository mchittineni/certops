export const K8S_CKA_QUESTIONS_17 = [
  {
    id: "k8s-cka-376",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Set `nodeAffinity` with a `preferredDuringScheduling` term weighted towards each of the three zones in turn." },
      { id: 'B', text: "Set `podAntiAffinity` on the zone key so no two replicas of the workload share a zone at all." },
      { id: 'C', text: "Set `topologySpreadConstraints` on the zone key with a `maxSkew` and `whenUnsatisfiable: DoNotSchedule`." },
      { id: 'D', text: "Set `topologySpreadConstraints` on the hostname key so the replicas spread across nodes instead." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread","Topology Spread","Dr Failover"]
  },
  {
    id: "k8s-cka-377",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Set `topologySpreadConstraints` on the zone key with a `maxSkew` and `whenUnsatisfiable: DoNotSchedule`." },
      { id: 'B', text: "Set `topologySpreadConstraints` on the hostname key so the replicas spread across nodes instead." },
      { id: 'C', text: "Set `nodeAffinity` with a `preferredDuringScheduling` term weighted towards each of the three zones in turn." },
      { id: 'D', text: "Set `podAntiAffinity` on the zone key so no two replicas of the workload share a zone at all." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread","Topology Spread","High Load Scale"]
  },
  {
    id: "k8s-cka-378",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set `topologySpreadConstraints` on the zone key with a `maxSkew` and `whenUnsatisfiable: DoNotSchedule`." },
      { id: 'B', text: "Set `nodeAffinity` with a `preferredDuringScheduling` term weighted towards each of the three zones in turn." },
      { id: 'C', text: "Set `podAntiAffinity` on the zone key so no two replicas of the workload share a zone at all." },
      { id: 'D', text: "Set `topologySpreadConstraints` on the hostname key so the replicas spread across nodes instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread","Topology Spread","Security Compliance"]
  },
  {
    id: "k8s-cka-379",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Set `podAntiAffinity` on the zone key so no two replicas of the workload share a zone at all." },
      { id: 'B', text: "Set `nodeAffinity` with a `preferredDuringScheduling` term weighted towards each of the three zones in turn." },
      { id: 'C', text: "Set `topologySpreadConstraints` on the hostname key so the replicas spread across nodes instead." },
      { id: 'D', text: "Set `topologySpreadConstraints` on the zone key with a `maxSkew` and `whenUnsatisfiable: DoNotSchedule`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread","Topology Spread","Hybrid Migration"]
  },
  {
    id: "k8s-cka-380",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Topology Spread Constraints: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to distribute web application pods evenly across multiple availability zones to maintain balanced capacity and resilience against regional zone outages.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Set `topologySpreadConstraints` on the zone key with a `maxSkew` and `whenUnsatisfiable: DoNotSchedule`." },
      { id: 'B', text: "Set `nodeAffinity` with a `preferredDuringScheduling` term weighted towards each of the three zones in turn." },
      { id: 'C', text: "Set `podAntiAffinity` on the zone key so no two replicas of the workload share a zone at all." },
      { id: 'D', text: "Set `topologySpreadConstraints` on the hostname key so the replicas spread across nodes instead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define `topologySpreadConstraints` in the pod spec with `topologyKey: topology.kubernetes.io/zone`, a defined `maxSkew`, and `whenUnsatisfiable: DoNotSchedule`. `topologySpreadConstraints` control how pods are spread across failure-domains (zones, racks, nodes). Setting `maxSkew` defines the maximum allowable difference in pod count between any two topology domains, preventing zone imbalances.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology Spread","Topology Spread","Resilience Failure"]
  },
  {
    id: "k8s-cka-381",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Create a `PodDisruptionBudget` with `minAvailable: 80%` over the deployment's selector." },
      { id: 'B', text: "Create a `PriorityClass` with preemption disabled and name it on the deployment's pods." },
      { id: 'C', text: "Set `maxUnavailable: 1` in the deployment's own rolling update strategy instead." },
      { id: 'D', text: "Create a `ResourceQuota` capping the namespace's pod count so evictions are bounded." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards","PDB","Dr Failover"]
  },
  {
    id: "k8s-cka-382",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Create a `PriorityClass` with preemption disabled and name it on the deployment's pods." },
      { id: 'B', text: "Create a `PodDisruptionBudget` with `minAvailable: 80%` over the deployment's selector." },
      { id: 'C', text: "Create a `ResourceQuota` capping the namespace's pod count so evictions are bounded." },
      { id: 'D', text: "Set `maxUnavailable: 1` in the deployment's own rolling update strategy instead." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards","PDB","High Load Scale"]
  },
  {
    id: "k8s-cka-383",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Create a `PriorityClass` with preemption disabled and name it on the deployment's pods." },
      { id: 'B', text: "Set `maxUnavailable: 1` in the deployment's own rolling update strategy instead." },
      { id: 'C', text: "Create a `PodDisruptionBudget` with `minAvailable: 80%` over the deployment's selector." },
      { id: 'D', text: "Create a `ResourceQuota` capping the namespace's pod count so evictions are bounded." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards","PDB","Security Compliance"]
  },
  {
    id: "k8s-cka-384",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Create a `PodDisruptionBudget` with `minAvailable: 80%` over the deployment's selector." },
      { id: 'B', text: "Create a `PriorityClass` with preemption disabled and name it on the deployment's pods." },
      { id: 'C', text: "Set `maxUnavailable: 1` in the deployment's own rolling update strategy instead." },
      { id: 'D', text: "Create a `ResourceQuota` capping the namespace's pod count so evictions are bounded." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards","PDB","Hybrid Migration"]
  },
  {
    id: "k8s-cka-385",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Pod Disruption Budgets (PDB): Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to prevent node drains and voluntary cluster maintenance from taking down too many replicas of an essential payment processing service simultaneously.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Create a `PriorityClass` with preemption disabled and name it on the deployment's pods." },
      { id: 'B', text: "Create a `PodDisruptionBudget` with `minAvailable: 80%` over the deployment's selector." },
      { id: 'C', text: "Create a `ResourceQuota` capping the namespace's pod count so evictions are bounded." },
      { id: 'D', text: "Set `maxUnavailable: 1` in the deployment's own rolling update strategy instead." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `PodDisruptionBudget` (PDB) resource specifying `minAvailable: 80%` or `maxUnavailable: 1` matching the payment deployment selector. A `PodDisruptionBudget` (PDB) limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (such as `kubectl drain` during node upgrades). The eviction API respects PDB constraints and blocks draining until sufficient replicas are ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets",
    tags: ["Availability Safeguards","PDB","Resilience Failure"]
  },
  {
    id: "k8s-cka-386",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Deploy a `CronJob` that runs `kubectl scale` against the Deployment on a fixed hourly schedule." },
      { id: 'B', text: "Deploy a `HorizontalPodAutoscaler` against the Deployment with a target CPU utilisation." },
      { id: 'C', text: "Deploy a `VerticalPodAutoscaler` so each replica is given more CPU under load." },
      { id: 'D', text: "Scale the Deployment to its peak replica count and leave it there permanently." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling","HPA","Dr Failover"]
  },
  {
    id: "k8s-cka-387",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Deploy a `HorizontalPodAutoscaler` against the Deployment with a target CPU utilisation." },
      { id: 'B', text: "Deploy a `CronJob` that runs `kubectl scale` against the Deployment on a fixed hourly schedule." },
      { id: 'C', text: "Scale the Deployment to its peak replica count and leave it there permanently." },
      { id: 'D', text: "Deploy a `VerticalPodAutoscaler` so each replica is given more CPU under load." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling","HPA","High Load Scale"]
  },
  {
    id: "k8s-cka-388",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Deploy a `HorizontalPodAutoscaler` against the Deployment with a target CPU utilisation." },
      { id: 'B', text: "Scale the Deployment to its peak replica count and leave it there permanently." },
      { id: 'C', text: "Deploy a `VerticalPodAutoscaler` so each replica is given more CPU under load." },
      { id: 'D', text: "Deploy a `CronJob` that runs `kubectl scale` against the Deployment on a fixed hourly schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling","HPA","Security Compliance"]
  },
  {
    id: "k8s-cka-389",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Deploy a `VerticalPodAutoscaler` so each replica is given more CPU under load." },
      { id: 'B', text: "Scale the Deployment to its peak replica count and leave it there permanently." },
      { id: 'C', text: "Deploy a `CronJob` that runs `kubectl scale` against the Deployment on a fixed hourly schedule." },
      { id: 'D', text: "Deploy a `HorizontalPodAutoscaler` against the Deployment with a target CPU utilisation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling","HPA","Hybrid Migration"]
  },
  {
    id: "k8s-cka-390",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Horizontal Pod Autoscaler (HPA): Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to automatically increase or decrease the number of web frontend pod replicas based on incoming HTTP traffic and CPU consumption spikes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Deploy a `HorizontalPodAutoscaler` against the Deployment with a target CPU utilisation." },
      { id: 'B', text: "Scale the Deployment to its peak replica count and leave it there permanently." },
      { id: 'C', text: "Deploy a `VerticalPodAutoscaler` so each replica is given more CPU under load." },
      { id: 'D', text: "Deploy a `CronJob` that runs `kubectl scale` against the Deployment on a fixed hourly schedule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a `HorizontalPodAutoscaler` (HPA) targeting the Deployment with a defined target average CPU utilization percentage. The Horizontal Pod Autoscaler (HPA) automatically adjusts the replica count of a Deployment or StatefulSet based on observed CPU utilization, memory usage, or custom metrics collected from the Metrics Server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Workload Autoscaling","HPA","Resilience Failure"]
  },
  {
    id: "k8s-cka-391",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Run `kubeadm init --pod-network-cidr=192.168.0.0/16` with the runtime prerequisites in place." },
      { id: 'B', text: "Run `kubeadm join --control-plane` first and initialise the cluster from the joined node." },
      { id: 'C', text: "Install the control plane components as systemd units and generate all the certificates by hand." },
      { id: 'D', text: "Run `kubeadm init phase control-plane all` alone, which starts the components without etcd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap","kubeadm init","Dr Failover"]
  },
  {
    id: "k8s-cka-392",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Install the control plane components as systemd units and generate all the certificates by hand." },
      { id: 'B', text: "Run `kubeadm init --pod-network-cidr=192.168.0.0/16` with the runtime prerequisites in place." },
      { id: 'C', text: "Run `kubeadm join --control-plane` first and initialise the cluster from the joined node." },
      { id: 'D', text: "Run `kubeadm init phase control-plane all` alone, which starts the components without etcd." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap","kubeadm init","High Load Scale"]
  },
  {
    id: "k8s-cka-393",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `kubeadm init phase control-plane all` alone, which starts the components without etcd." },
      { id: 'B', text: "Install the control plane components as systemd units and generate all the certificates by hand." },
      { id: 'C', text: "Run `kubeadm join --control-plane` first and initialise the cluster from the joined node." },
      { id: 'D', text: "Run `kubeadm init --pod-network-cidr=192.168.0.0/16` with the runtime prerequisites in place." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap","kubeadm init","Security Compliance"]
  },
  {
    id: "k8s-cka-394",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Run `kubeadm init --pod-network-cidr=192.168.0.0/16` with the runtime prerequisites in place." },
      { id: 'B', text: "Run `kubeadm join --control-plane` first and initialise the cluster from the joined node." },
      { id: 'C', text: "Install the control plane components as systemd units and generate all the certificates by hand." },
      { id: 'D', text: "Run `kubeadm init phase control-plane all` alone, which starts the components without etcd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap","kubeadm init","Hybrid Migration"]
  },
  {
    id: "k8s-cka-395",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Initialization: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to initialize a production-ready Kubernetes control plane node using kubeadm with support for standard CNI pod networking.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Install the control plane components as systemd units and generate all the certificates by hand." },
      { id: 'B', text: "Run `kubeadm join --control-plane` first and initialise the cluster from the joined node." },
      { id: 'C', text: "Run `kubeadm init phase control-plane all` alone, which starts the components without etcd." },
      { id: 'D', text: "Run `kubeadm init --pod-network-cidr=192.168.0.0/16` with the runtime prerequisites in place." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `kubeadm init --pod-network-cidr=192.168.0.0/16` with pre-configured container runtime prerequisites. `kubeadm init` automates Kubernetes control plane bootstrap, generating required CA certificates, kubeconfig files, and static pod manifests in `/etc/kubernetes/manifests/`. Specifying `--pod-network-cidr` is mandatory for CNI plugins (like Calico) to configure cluster pod subnets.",
    referenceUrl: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/",
    tags: ["Cluster Bootstrap","kubeadm init","Resilience Failure"]
  },
  {
    id: "k8s-cka-396",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Upgrade `kubeadm`, run `kubeadm upgrade plan` then `apply`, and upgrade `kubelet` and `kubectl` after." },
      { id: 'B', text: "Upgrade `kubelet` on every node first, then run `kubeadm upgrade apply` on the control plane." },
      { id: 'C', text: "Upgrade `kubeadm` and jump the control plane two minor versions in one `upgrade apply`." },
      { id: 'D', text: "Upgrade by draining each node, rebuilding it at the new version, and rejoining it to the cluster afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades","Cluster Upgrade","Dr Failover"]
  },
  {
    id: "k8s-cka-397",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Upgrade `kubeadm`, run `kubeadm upgrade plan` then `apply`, and upgrade `kubelet` and `kubectl` after." },
      { id: 'B', text: "Upgrade `kubelet` on every node first, then run `kubeadm upgrade apply` on the control plane." },
      { id: 'C', text: "Upgrade `kubeadm` and jump the control plane two minor versions in one `upgrade apply`." },
      { id: 'D', text: "Upgrade by draining each node, rebuilding it at the new version, and rejoining it to the cluster afterwards." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades","Cluster Upgrade","High Load Scale"]
  },
  {
    id: "k8s-cka-398",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Upgrade by draining each node, rebuilding it at the new version, and rejoining it to the cluster afterwards." },
      { id: 'B', text: "Upgrade `kubelet` on every node first, then run `kubeadm upgrade apply` on the control plane." },
      { id: 'C', text: "Upgrade `kubeadm`, run `kubeadm upgrade plan` then `apply`, and upgrade `kubelet` and `kubectl` after." },
      { id: 'D', text: "Upgrade `kubeadm` and jump the control plane two minor versions in one `upgrade apply`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades","Cluster Upgrade","Security Compliance"]
  },
  {
    id: "k8s-cka-399",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Upgrade `kubeadm` and jump the control plane two minor versions in one `upgrade apply`." },
      { id: 'B', text: "Upgrade by draining each node, rebuilding it at the new version, and rejoining it to the cluster afterwards." },
      { id: 'C', text: "Upgrade `kubeadm`, run `kubeadm upgrade plan` then `apply`, and upgrade `kubelet` and `kubectl` after." },
      { id: 'D', text: "Upgrade `kubelet` on every node first, then run `kubeadm upgrade apply` on the control plane." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades","Cluster Upgrade","Hybrid Migration"]
  },
  {
    id: "k8s-cka-400",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Kubeadm Cluster Upgrades: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to upgrade a Kubernetes cluster safely from version 1.28 to 1.29 without skipping minor versions or causing API downtime.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Upgrade `kubeadm` and jump the control plane two minor versions in one `upgrade apply`." },
      { id: 'B', text: "Upgrade by draining each node, rebuilding it at the new version, and rejoining it to the cluster afterwards." },
      { id: 'C', text: "Upgrade `kubeadm`, run `kubeadm upgrade plan` then `apply`, and upgrade `kubelet` and `kubectl` after." },
      { id: 'D', text: "Upgrade `kubelet` on every node first, then run `kubeadm upgrade apply` on the control plane." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Upgrade `kubeadm` first, execute `kubeadm upgrade plan` and `kubeadm upgrade apply`, then upgrade `kubectl` and `kubelet` followed by node daemon reload. Kubernetes does not support skipping minor versions (e.g., 1.28 to 1.30). Upgrades must proceed sequentially: first drain the node, upgrade the `kubeadm` package, run `kubeadm upgrade apply`, upgrade `kubelet` and `kubectl`, restart the kubelet, and uncordon the node.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Cluster Upgrades","Cluster Upgrade","Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_17;
