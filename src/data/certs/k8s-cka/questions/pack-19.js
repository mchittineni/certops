export const K8S_CKA_QUESTIONS_19 = [
  {
    id: "k8s-cka-426",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Node Maintenance with Cordon and Drain: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Node Maintenance to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Safely evicting workloads from a node using kubectl cordon and kubectl drain is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`." },
      { id: 'B', text: "Reboot the physical node immediately without draining workloads." },
      { id: 'C', text: "Delete the node object from the API server using kubectl delete node." },
      { id: 'D', text: "Manually kill all container runtime processes on the host while traffic is flowing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance", "Node Drain", "Dr Failover"]
  },
  {
    id: "k8s-cka-427",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Node Maintenance with Cordon and Drain: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Node Maintenance to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Safely evicting workloads from a node using kubectl cordon and kubectl drain is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`." },
      { id: 'B', text: "Reboot the physical node immediately without draining workloads." },
      { id: 'C', text: "Delete the node object from the API server using kubectl delete node." },
      { id: 'D', text: "Manually kill all container runtime processes on the host while traffic is flowing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance", "Node Drain", "High Load Scale"]
  },
  {
    id: "k8s-cka-428",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Node Maintenance with Cordon and Drain: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Node Maintenance to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Safely evicting workloads from a node using kubectl cordon and kubectl drain is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`." },
      { id: 'B', text: "Reboot the physical node immediately without draining workloads." },
      { id: 'C', text: "Delete the node object from the API server using kubectl delete node." },
      { id: 'D', text: "Manually kill all container runtime processes on the host while traffic is flowing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance", "Node Drain", "Security Compliance"]
  },
  {
    id: "k8s-cka-429",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Node Maintenance with Cordon and Drain: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Node Maintenance to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Safely evicting workloads from a node using kubectl cordon and kubectl drain is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`." },
      { id: 'B', text: "Reboot the physical node immediately without draining workloads." },
      { id: 'C', text: "Delete the node object from the API server using kubectl delete node." },
      { id: 'D', text: "Manually kill all container runtime processes on the host while traffic is flowing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance", "Node Drain", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-430",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Node Maintenance with Cordon and Drain: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Node Maintenance to prepare a physical Kubernetes worker node for kernel patching and reboot without disrupting running applications.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Safely evicting workloads from a node using kubectl cordon and kubectl drain is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`." },
      { id: 'B', text: "Reboot the physical node immediately without draining workloads." },
      { id: 'C', text: "Delete the node object from the API server using kubectl delete node." },
      { id: 'D', text: "Manually kill all container runtime processes on the host while traffic is flowing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl cordon &lt;node&gt;` to mark it unschedulable, followed by `kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data`. `kubectl cordon` marks a node unschedulable so no new pods are assigned to it. `kubectl drain` safely evicts running pods respecting PodDisruptionBudgets, allowing them to be recreated on other healthy nodes before node maintenance.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["Node Maintenance", "Node Drain", "Resilience Failure"]
  },
  {
    id: "k8s-cka-431",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Static Pods and Kubelet Manifests: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Static Pods to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Configuring static pods managed directly by the kubelet in /etc/kubernetes/manifests is under consideration.",
    options: [
      { id: 'A', text: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`)." },
      { id: 'B', text: "Create a Deployment using kubectl apply -f manifest.yaml." },
      { id: 'C', text: "Add an entry to the host /etc/crontab file running docker run every minute." },
      { id: 'D', text: "Edit the etcd database directly using an external SQL query tool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods", "Static Pods", "Dr Failover"]
  },
  {
    id: "k8s-cka-432",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Static Pods and Kubelet Manifests: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Static Pods to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Configuring static pods managed directly by the kubelet in /etc/kubernetes/manifests is under consideration.",
    options: [
      { id: 'A', text: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`)." },
      { id: 'B', text: "Create a Deployment using kubectl apply -f manifest.yaml." },
      { id: 'C', text: "Add an entry to the host /etc/crontab file running docker run every minute." },
      { id: 'D', text: "Edit the etcd database directly using an external SQL query tool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods", "Static Pods", "High Load Scale"]
  },
  {
    id: "k8s-cka-433",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Static Pods and Kubelet Manifests: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Static Pods to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring static pods managed directly by the kubelet in /etc/kubernetes/manifests is under consideration.",
    options: [
      { id: 'A', text: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`)." },
      { id: 'B', text: "Create a Deployment using kubectl apply -f manifest.yaml." },
      { id: 'C', text: "Add an entry to the host /etc/crontab file running docker run every minute." },
      { id: 'D', text: "Edit the etcd database directly using an external SQL query tool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods", "Static Pods", "Security Compliance"]
  },
  {
    id: "k8s-cka-434",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Static Pods and Kubelet Manifests: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Static Pods to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Configuring static pods managed directly by the kubelet in /etc/kubernetes/manifests is under consideration.",
    options: [
      { id: 'A', text: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`)." },
      { id: 'B', text: "Create a Deployment using kubectl apply -f manifest.yaml." },
      { id: 'C', text: "Add an entry to the host /etc/crontab file running docker run every minute." },
      { id: 'D', text: "Edit the etcd database directly using an external SQL query tool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods", "Static Pods", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-435",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Static Pods and Kubelet Manifests: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Static Pods to deploy a critical monitoring sidecar daemon on a specific master node that starts before the Kubernetes API server itself is running.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Configuring static pods managed directly by the kubelet in /etc/kubernetes/manifests is under consideration.",
    options: [
      { id: 'A', text: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`)." },
      { id: 'B', text: "Create a Deployment using kubectl apply -f manifest.yaml." },
      { id: 'C', text: "Add an entry to the host /etc/crontab file running docker run every minute." },
      { id: 'D', text: "Edit the etcd database directly using an external SQL query tool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place the pod manifest YAML file into the kubelet static pod manifest directory (`/etc/kubernetes/manifests/`). Static pods are managed directly by the kubelet daemon on a specific node without API server supervision. The kubelet watches the directory specified by `--pod-manifest-path` (typically `/etc/kubernetes/manifests/`) and automatically creates mirror pods on the API server.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/",
    tags: ["Static Pods", "Static Pods", "Resilience Failure"]
  },
  {
    id: "k8s-cka-436",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "High Availability Control Plane Topologies: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates HA Architecture to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Stacked etcd versus external etcd topology for high-availability clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server." },
      { id: 'B', text: "Deploy a single control plane node with hourly database backups." },
      { id: 'C', text: "Deploy two control plane nodes sharing a single etcd member." },
      { id: 'D', text: "Run control plane components on worker nodes without etcd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture", "HA Topologies", "Dr Failover"]
  },
  {
    id: "k8s-cka-437",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "High Availability Control Plane Topologies: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates HA Architecture to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Stacked etcd versus external etcd topology for high-availability clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server." },
      { id: 'B', text: "Deploy a single control plane node with hourly database backups." },
      { id: 'C', text: "Deploy two control plane nodes sharing a single etcd member." },
      { id: 'D', text: "Run control plane components on worker nodes without etcd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture", "HA Topologies", "High Load Scale"]
  },
  {
    id: "k8s-cka-438",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "High Availability Control Plane Topologies: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates HA Architecture to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Stacked etcd versus external etcd topology for high-availability clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server." },
      { id: 'B', text: "Deploy a single control plane node with hourly database backups." },
      { id: 'C', text: "Deploy two control plane nodes sharing a single etcd member." },
      { id: 'D', text: "Run control plane components on worker nodes without etcd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture", "HA Topologies", "Security Compliance"]
  },
  {
    id: "k8s-cka-439",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "High Availability Control Plane Topologies: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates HA Architecture to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Stacked etcd versus external etcd topology for high-availability clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server." },
      { id: 'B', text: "Deploy a single control plane node with hourly database backups." },
      { id: 'C', text: "Deploy two control plane nodes sharing a single etcd member." },
      { id: 'D', text: "Run control plane components on worker nodes without etcd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture", "HA Topologies", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-440",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "High Availability Control Plane Topologies: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates HA Architecture to design a high-availability Kubernetes control plane architecture that provides fault tolerance against individual master node failures.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Stacked etcd versus external etcd topology for high-availability clusters is under consideration.",
    options: [
      { id: 'A', text: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server." },
      { id: 'B', text: "Deploy a single control plane node with hourly database backups." },
      { id: 'C', text: "Deploy two control plane nodes sharing a single etcd member." },
      { id: 'D', text: "Run control plane components on worker nodes without etcd." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy at least three control plane nodes with a stacked etcd topology fronted by a TCP load balancer for the API server. A high-availability (HA) Kubernetes control plane requires an odd number of etcd members (minimum 3) to maintain quorum during single-node failures. In a stacked topology, etcd runs alongside control plane components on each master node, fronted by a load balancer distributing traffic across apiservers.",
    referenceUrl: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/",
    tags: ["HA Architecture", "HA Topologies", "Resilience Failure"]
  },
  {
    id: "k8s-cka-441",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Custom Resource Definitions (CRDs): Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates API Extensions to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Extending the Kubernetes API with CustomResourceDefinitions and custom controllers is under consideration.",
    options: [
      { id: 'A', text: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource." },
      { id: 'B', text: "Modify the Go source code of kube-apiserver and recompile the binary." },
      { id: 'C', text: "Store custom JSON objects in a third-party Redis database running outside the cluster." },
      { id: 'D', text: "Inject arbitrary key-value pairs into Kubernetes ConfigMaps without schema validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions", "CRDs", "Dr Failover"]
  },
  {
    id: "k8s-cka-442",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Custom Resource Definitions (CRDs): High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates API Extensions to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Extending the Kubernetes API with CustomResourceDefinitions and custom controllers is under consideration.",
    options: [
      { id: 'A', text: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource." },
      { id: 'B', text: "Modify the Go source code of kube-apiserver and recompile the binary." },
      { id: 'C', text: "Store custom JSON objects in a third-party Redis database running outside the cluster." },
      { id: 'D', text: "Inject arbitrary key-value pairs into Kubernetes ConfigMaps without schema validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions", "CRDs", "High Load Scale"]
  },
  {
    id: "k8s-cka-443",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Custom Resource Definitions (CRDs): Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates API Extensions to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Extending the Kubernetes API with CustomResourceDefinitions and custom controllers is under consideration.",
    options: [
      { id: 'A', text: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource." },
      { id: 'B', text: "Modify the Go source code of kube-apiserver and recompile the binary." },
      { id: 'C', text: "Store custom JSON objects in a third-party Redis database running outside the cluster." },
      { id: 'D', text: "Inject arbitrary key-value pairs into Kubernetes ConfigMaps without schema validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions", "CRDs", "Security Compliance"]
  },
  {
    id: "k8s-cka-444",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Custom Resource Definitions (CRDs): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates API Extensions to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Extending the Kubernetes API with CustomResourceDefinitions and custom controllers is under consideration.",
    options: [
      { id: 'A', text: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource." },
      { id: 'B', text: "Modify the Go source code of kube-apiserver and recompile the binary." },
      { id: 'C', text: "Store custom JSON objects in a third-party Redis database running outside the cluster." },
      { id: 'D', text: "Inject arbitrary key-value pairs into Kubernetes ConfigMaps without schema validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions", "CRDs", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-445",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Custom Resource Definitions (CRDs): Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates API Extensions to extend the Kubernetes API to introduce a declarative custom resource type (e.g., `PostgresCluster`) managed by an operator controller.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Extending the Kubernetes API with CustomResourceDefinitions and custom controllers is under consideration.",
    options: [
      { id: 'A', text: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource." },
      { id: 'B', text: "Modify the Go source code of kube-apiserver and recompile the binary." },
      { id: 'C', text: "Store custom JSON objects in a third-party Redis database running outside the cluster." },
      { id: 'D', text: "Inject arbitrary key-value pairs into Kubernetes ConfigMaps without schema validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply a `CustomResourceDefinition` (CRD) manifest defining the schema, group, version, and names for the new resource. CustomResourceDefinitions (CRDs) allow cluster administrators to extend the Kubernetes API with custom resources. The API server serves and handles the storage of custom resources in etcd, while custom controllers (operators) reconcile the observed state with desired state.",
    referenceUrl: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",
    tags: ["API Extensions", "CRDs", "Resilience Failure"]
  },
  {
    id: "k8s-cka-446",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Resource Quotas and LimitRanges: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Resource Governance to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Enforcing namespace-level CPU/memory consumption and default container limits is under consideration.",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers." },
      { id: 'B', text: "Trust application developers to voluntarily set resource requests on every container." },
      { id: 'C', text: "Throttle node network interfaces whenever namespace memory consumption rises." },
      { id: 'D', text: "Hardcode fixed replica counts on all cluster deployments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance", "Resource Quotas", "Dr Failover"]
  },
  {
    id: "k8s-cka-447",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Resource Quotas and LimitRanges: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Resource Governance to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Enforcing namespace-level CPU/memory consumption and default container limits is under consideration.",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers." },
      { id: 'B', text: "Trust application developers to voluntarily set resource requests on every container." },
      { id: 'C', text: "Throttle node network interfaces whenever namespace memory consumption rises." },
      { id: 'D', text: "Hardcode fixed replica counts on all cluster deployments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance", "Resource Quotas", "High Load Scale"]
  },
  {
    id: "k8s-cka-448",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Resource Quotas and LimitRanges: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Resource Governance to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Enforcing namespace-level CPU/memory consumption and default container limits is under consideration.",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers." },
      { id: 'B', text: "Trust application developers to voluntarily set resource requests on every container." },
      { id: 'C', text: "Throttle node network interfaces whenever namespace memory consumption rises." },
      { id: 'D', text: "Hardcode fixed replica counts on all cluster deployments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance", "Resource Quotas", "Security Compliance"]
  },
  {
    id: "k8s-cka-449",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Resource Quotas and LimitRanges: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Resource Governance to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Enforcing namespace-level CPU/memory consumption and default container limits is under consideration.",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers." },
      { id: 'B', text: "Trust application developers to voluntarily set resource requests on every container." },
      { id: 'C', text: "Throttle node network interfaces whenever namespace memory consumption rises." },
      { id: 'D', text: "Hardcode fixed replica counts on all cluster deployments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance", "Resource Quotas", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-450",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Resource Quotas and LimitRanges: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Resource Governance to prevent teams sharing a multi-tenant cluster from monopolizing cluster compute resources or launching containers without resource limits.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Enforcing namespace-level CPU/memory consumption and default container limits is under consideration.",
    options: [
      { id: 'A', text: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers." },
      { id: 'B', text: "Trust application developers to voluntarily set resource requests on every container." },
      { id: 'C', text: "Throttle node network interfaces whenever namespace memory consumption rises." },
      { id: 'D', text: "Hardcode fixed replica counts on all cluster deployments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ResourceQuota` to cap total CPU/memory per namespace and a `LimitRange` to enforce default requests and limits for containers. `ResourceQuota` sets aggregate limits on compute resources (CPU, memory, storage) and object counts (pods, services) in a namespace. `LimitRange` specifies min/max constraints and default request/limit values for individual pods and containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["Resource Governance", "Resource Quotas", "Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_19;
