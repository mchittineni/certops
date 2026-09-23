export const K8S_CKA_QUESTIONS_19 = [
  {
    id: "k8s-cka-426",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Node Maintenance with Cordon and Drain: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;`, then `kubectl drain &lt;node&gt; --ignore-daemonsets`." },
      { id: 'B', text: "Run `kubectl drain &lt;node&gt; --force` without cordoning it first." },
      { id: 'C', text: "Run `kubectl delete node &lt;node&gt;` and let the controller reschedule the pods elsewhere." },
      { id: 'D', text: "Run `kubectl taint node &lt;node&gt; maintenance=true:NoExecute` alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance","Node Drain","Dr Failover"]
  },
  {
    id: "k8s-cka-427",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Node Maintenance with Cordon and Drain: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;`, then `kubectl drain &lt;node&gt; --ignore-daemonsets`." },
      { id: 'B', text: "Run `kubectl drain &lt;node&gt; --force` without cordoning it first." },
      { id: 'C', text: "Run `kubectl delete node &lt;node&gt;` and let the controller reschedule the pods elsewhere." },
      { id: 'D', text: "Run `kubectl taint node &lt;node&gt; maintenance=true:NoExecute` alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance","Node Drain","High Load Scale"]
  },
  {
    id: "k8s-cka-428",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Node Maintenance with Cordon and Drain: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `kubectl taint node &lt;node&gt; maintenance=true:NoExecute` alone." },
      { id: 'B', text: "Run `kubectl drain &lt;node&gt; --force` without cordoning it first." },
      { id: 'C', text: "Run `kubectl cordon &lt;node&gt;`, then `kubectl drain &lt;node&gt; --ignore-daemonsets`." },
      { id: 'D', text: "Run `kubectl delete node &lt;node&gt;` and let the controller reschedule the pods elsewhere." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance","Node Drain","Security Compliance"]
  },
  {
    id: "k8s-cka-429",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Node Maintenance with Cordon and Drain: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;`, then `kubectl drain &lt;node&gt; --ignore-daemonsets`." },
      { id: 'B', text: "Run `kubectl drain &lt;node&gt; --force` without cordoning it first." },
      { id: 'C', text: "Run `kubectl delete node &lt;node&gt;` and let the controller reschedule the pods elsewhere." },
      { id: 'D', text: "Run `kubectl taint node &lt;node&gt; maintenance=true:NoExecute` alone." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance","Node Drain","Hybrid Migration"]
  },
  {
    id: "k8s-cka-430",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Node Maintenance with Cordon and Drain: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;`, then `kubectl drain &lt;node&gt; --ignore-daemonsets`." },
      { id: 'B', text: "Run `kubectl taint node &lt;node&gt; maintenance=true:NoExecute` alone." },
      { id: 'C', text: "Run `kubectl drain &lt;node&gt; --force` without cordoning it first." },
      { id: 'D', text: "Run `kubectl delete node &lt;node&gt;` and let the controller reschedule the pods elsewhere." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance","Node Drain","Resilience Failure"]
  },
  {
    id: "k8s-cka-431",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Static Pods and Kubelet Manifests: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Put the pod manifest in the kubelet's static manifest directory on that node." },
      { id: 'B', text: "Create the pod object directly with `kubectl create -f`, bound to that one node." },
      { id: 'C', text: "Create a single-replica Deployment with a `nodeSelector` for that node." },
      { id: 'D', text: "Create a DaemonSet with a `nodeSelector` matching that one node's label." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods","Static Pods","Dr Failover"]
  },
  {
    id: "k8s-cka-432",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Static Pods and Kubelet Manifests: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Create a single-replica Deployment with a `nodeSelector` for that node." },
      { id: 'B', text: "Put the pod manifest in the kubelet's static manifest directory on that node." },
      { id: 'C', text: "Create the pod object directly with `kubectl create -f`, bound to that one node." },
      { id: 'D', text: "Create a DaemonSet with a `nodeSelector` matching that one node's label." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods","Static Pods","High Load Scale"]
  },
  {
    id: "k8s-cka-433",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Static Pods and Kubelet Manifests: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Create a DaemonSet with a `nodeSelector` matching that one node's label." },
      { id: 'B', text: "Create the pod object directly with `kubectl create -f`, bound to that one node." },
      { id: 'C', text: "Put the pod manifest in the kubelet's static manifest directory on that node." },
      { id: 'D', text: "Create a single-replica Deployment with a `nodeSelector` for that node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods","Static Pods","Security Compliance"]
  },
  {
    id: "k8s-cka-434",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Static Pods and Kubelet Manifests: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Put the pod manifest in the kubelet's static manifest directory on that node." },
      { id: 'B', text: "Create a single-replica Deployment with a `nodeSelector` for that node." },
      { id: 'C', text: "Create a DaemonSet with a `nodeSelector` matching that one node's label." },
      { id: 'D', text: "Create the pod object directly with `kubectl create -f`, bound to that one node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods","Static Pods","Hybrid Migration"]
  },
  {
    id: "k8s-cka-435",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Static Pods and Kubelet Manifests: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Create a DaemonSet with a `nodeSelector` matching that one node's label." },
      { id: 'B', text: "Create the pod object directly with `kubectl create -f`, bound to that one node." },
      { id: 'C', text: "Put the pod manifest in the kubelet's static manifest directory on that node." },
      { id: 'D', text: "Create a single-replica Deployment with a `nodeSelector` for that node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods","Static Pods","Resilience Failure"]
  },
  {
    id: "k8s-cka-436",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "High Availability Control Plane Topologies: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Three control plane nodes with stacked etcd, behind a TCP load balancer for the API server." },
      { id: 'B', text: "Three control plane nodes with an external etcd cluster running on those same three machines." },
      { id: 'C', text: "One control plane node with hourly etcd snapshots to restore from after a failure." },
      { id: 'D', text: "Two control plane nodes with a shared etcd member, behind the same load balancer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture","HA Topologies","Dr Failover"]
  },
  {
    id: "k8s-cka-437",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "High Availability Control Plane Topologies: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Three control plane nodes with stacked etcd, behind a TCP load balancer for the API server." },
      { id: 'B', text: "One control plane node with hourly etcd snapshots to restore from after a failure." },
      { id: 'C', text: "Two control plane nodes with a shared etcd member, behind the same load balancer." },
      { id: 'D', text: "Three control plane nodes with an external etcd cluster running on those same three machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture","HA Topologies","High Load Scale"]
  },
  {
    id: "k8s-cka-438",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "High Availability Control Plane Topologies: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Three control plane nodes with stacked etcd, behind a TCP load balancer for the API server." },
      { id: 'B', text: "Three control plane nodes with an external etcd cluster running on those same three machines." },
      { id: 'C', text: "One control plane node with hourly etcd snapshots to restore from after a failure." },
      { id: 'D', text: "Two control plane nodes with a shared etcd member, behind the same load balancer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture","HA Topologies","Security Compliance"]
  },
  {
    id: "k8s-cka-439",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "High Availability Control Plane Topologies: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "One control plane node with hourly etcd snapshots to restore from after a failure." },
      { id: 'B', text: "Three control plane nodes with an external etcd cluster running on those same three machines." },
      { id: 'C', text: "Two control plane nodes with a shared etcd member, behind the same load balancer." },
      { id: 'D', text: "Three control plane nodes with stacked etcd, behind a TCP load balancer for the API server." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture","HA Topologies","Hybrid Migration"]
  },
  {
    id: "k8s-cka-440",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "High Availability Control Plane Topologies: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Three control plane nodes with stacked etcd, behind a TCP load balancer for the API server." },
      { id: 'B', text: "One control plane node with hourly etcd snapshots to restore from after a failure." },
      { id: 'C', text: "Two control plane nodes with a shared etcd member, behind the same load balancer." },
      { id: 'D', text: "Three control plane nodes with an external etcd cluster running on those same three machines." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture","HA Topologies","Resilience Failure"]
  },
  {
    id: "k8s-cka-441",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Custom Resource Definitions (CRDs): Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Apply an `APIService` object registering an aggregated API server for the new type." },
      { id: 'B', text: "Apply a `CustomResourceDefinition` defining the group, version, names and schema." },
      { id: 'C', text: "Apply a `ConfigMap` per object and have the controller watch that namespace." },
      { id: 'D', text: "Apply an admission webhook that synthesises the type from an annotation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions","CRDs","Dr Failover"]
  },
  {
    id: "k8s-cka-442",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Custom Resource Definitions (CRDs): High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Apply a `ConfigMap` per object and have the controller watch that namespace." },
      { id: 'B', text: "Apply an `APIService` object registering an aggregated API server for the new type." },
      { id: 'C', text: "Apply a `CustomResourceDefinition` defining the group, version, names and schema." },
      { id: 'D', text: "Apply an admission webhook that synthesises the type from an annotation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions","CRDs","High Load Scale"]
  },
  {
    id: "k8s-cka-443",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Custom Resource Definitions (CRDs): Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Apply a `CustomResourceDefinition` defining the group, version, names and schema." },
      { id: 'B', text: "Apply an admission webhook that synthesises the type from an annotation." },
      { id: 'C', text: "Apply a `ConfigMap` per object and have the controller watch that namespace." },
      { id: 'D', text: "Apply an `APIService` object registering an aggregated API server for the new type." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions","CRDs","Security Compliance"]
  },
  {
    id: "k8s-cka-444",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Custom Resource Definitions (CRDs): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Apply a `CustomResourceDefinition` defining the group, version, names and schema." },
      { id: 'B', text: "Apply a `ConfigMap` per object and have the controller watch that namespace." },
      { id: 'C', text: "Apply an `APIService` object registering an aggregated API server for the new type." },
      { id: 'D', text: "Apply an admission webhook that synthesises the type from an annotation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions","CRDs","Hybrid Migration"]
  },
  {
    id: "k8s-cka-445",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Custom Resource Definitions (CRDs): Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Apply a `ConfigMap` per object and have the controller watch that namespace." },
      { id: 'B', text: "Apply an `APIService` object registering an aggregated API server for the new type." },
      { id: 'C', text: "Apply a `CustomResourceDefinition` defining the group, version, names and schema." },
      { id: 'D', text: "Apply an admission webhook that synthesises the type from an annotation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions","CRDs","Resilience Failure"]
  },
  {
    id: "k8s-cka-446",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Resource Quotas and LimitRanges: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Create a `LimitRange` with default requests, and rely on the scheduler alone to bound the namespace." },
      { id: 'B', text: "Create a `ResourceQuota` capping the namespace's totals and a `LimitRange` for container defaults." },
      { id: 'C', text: "Create a `ResourceQuota` on the namespace's pod count, which bounds what it can consume." },
      { id: 'D', text: "Create a `PriorityClass` for the namespace so its pods are preempted when the cluster fills." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance","Resource Quotas","Dr Failover"]
  },
  {
    id: "k8s-cka-447",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Resource Quotas and LimitRanges: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` capping the namespace's totals and a `LimitRange` for container defaults." },
      { id: 'B', text: "Create a `ResourceQuota` on the namespace's pod count, which bounds what it can consume." },
      { id: 'C', text: "Create a `LimitRange` with default requests, and rely on the scheduler alone to bound the namespace." },
      { id: 'D', text: "Create a `PriorityClass` for the namespace so its pods are preempted when the cluster fills." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance","Resource Quotas","High Load Scale"]
  },
  {
    id: "k8s-cka-448",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Resource Quotas and LimitRanges: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` capping the namespace's totals and a `LimitRange` for container defaults." },
      { id: 'B', text: "Create a `ResourceQuota` on the namespace's pod count, which bounds what it can consume." },
      { id: 'C', text: "Create a `LimitRange` with default requests, and rely on the scheduler alone to bound the namespace." },
      { id: 'D', text: "Create a `PriorityClass` for the namespace so its pods are preempted when the cluster fills." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance","Resource Quotas","Security Compliance"]
  },
  {
    id: "k8s-cka-449",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Resource Quotas and LimitRanges: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` capping the namespace's totals and a `LimitRange` for container defaults." },
      { id: 'B', text: "Create a `LimitRange` with default requests, and rely on the scheduler alone to bound the namespace." },
      { id: 'C', text: "Create a `PriorityClass` for the namespace so its pods are preempted when the cluster fills." },
      { id: 'D', text: "Create a `ResourceQuota` on the namespace's pod count, which bounds what it can consume." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance","Resource Quotas","Hybrid Migration"]
  },
  {
    id: "k8s-cka-450",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Configuration",
    title: "Resource Quotas and LimitRanges: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` on the namespace's pod count, which bounds what it can consume." },
      { id: 'B', text: "Create a `LimitRange` with default requests, and rely on the scheduler alone to bound the namespace." },
      { id: 'C', text: "Create a `ResourceQuota` capping the namespace's totals and a `LimitRange` for container defaults." },
      { id: 'D', text: "Create a `PriorityClass` for the namespace so its pods are preempted when the cluster fills." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance","Resource Quotas","Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_19;
