export const K8S_CKA_QUESTIONS_11 = [
  {
    id: "k8s-cka-236",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Pod Cannot Mount a Secret From Another Namespace",
    scenario: "A pod in the web namespace references a Secret that exists only in the data namespace, and the pod stays in ContainerCreating.",
    question: "What is wrong?",
    options: [
      { id: 'A', text: "Secrets are namespaced and a pod can only mount Secrets from its own namespace, so the Secret must be created in web." },
      { id: 'B', text: "The Secret must be marked shared: true." },
      { id: 'C', text: "RBAC must grant the pod ServiceAccount read access across namespaces." },
      { id: 'D', text: "The kubelet needs a cluster-wide Secret cache enabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Secret and ConfigMap references in a pod spec resolve within the pod own namespace, so cross-namespace mounting is simply not possible and the object must be replicated or created locally. There is no shared flag, and RBAC governs API access by clients rather than kubelet volume resolution.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/",
    tags: ["Secrets", "Namespaces", "Troubleshooting"]
  },
  {
    id: "k8s-cka-237",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Sequencing a Multi-Node Cluster Upgrade",
    scenario: "A cluster with three control plane nodes and twenty workers must be upgraded one minor version with minimal disruption.",
    question: "Which order is correct?",
    options: [
      { id: 'A', text: "First control plane node with kubeadm upgrade apply, remaining control plane nodes with kubeadm upgrade node, then workers one at a time with drain, kubeadm upgrade node, kubelet upgrade, and uncordon." },
      { id: 'B', text: "All nodes simultaneously to minimise the maintenance window." },
      { id: 'C', text: "All workers first, then the control plane nodes together." },
      { id: 'D', text: "Control plane nodes last, after every worker reports the new version." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The version skew policy requires the control plane to lead, so the first control plane node runs upgrade apply, the others run upgrade node, and workers follow one at a time so capacity and disruption budgets are respected. Upgrading workers first would leave kubelets newer than the API server, which is unsupported.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/",
    tags: ["Upgrades", "kubeadm", "Operations"]
  },
  {
    id: "k8s-cka-238",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Difference Between a Pod and a Deployment",
    scenario: "A newcomer asks why anyone would create a Deployment instead of a bare pod.",
    question: "Which answer is correct?",
    options: [
      { id: 'A', text: "A bare pod cannot mount volumes." },
      { id: 'B', text: "A Deployment runs faster because it bypasses the scheduler." },
      { id: 'C', text: "A Deployment adds a controller that maintains the desired replica count, replaces failed pods, and manages rolling updates and rollbacks; a bare pod is never recreated once it dies." },
      { id: 'D', text: "A Deployment is required for a pod to receive an IP address." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The value of a Deployment is the reconciliation loop and revision management around the pod template; without one, a pod deleted by a node failure simply stays gone. Both go through the scheduler, both can mount volumes, and every pod gets an IP from the CNI plugin.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    tags: ["Deployment", "Fundamentals", "Workloads"]
  },
  {
    id: "k8s-cka-239",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Why an Egress NetworkPolicy Broke Health Checks",
    scenario: "After adding a default-deny egress policy, application pods still serve traffic but the ingress controller marks them unhealthy.",
    question: "Which explanation is most plausible?",
    options: [
      { id: 'A', text: "Health checks bypass NetworkPolicy entirely, so the policy is irrelevant." },
      { id: 'B', text: "It is not the egress policy blocking the checks directly - probe traffic is inbound - so look for an ingress policy on the same pods, or an egress rule the application needs for the endpoint it reports on." },
      { id: 'C', text: "Egress policies require a matching ingress rule for return traffic." },
      { id: 'D', text: "Egress policies always block health checks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Health probes from a controller are inbound connections governed by ingress rules, and return traffic on an established connection does not need its own rule, so the diagnosis is to check which policies actually select the pods and in which direction. Kubelet probes come from the node rather than a pod, which is another common gap.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Probes", "Troubleshooting"]
  },
  {
    id: "k8s-cka-240",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Recovering Data From a Retained PersistentVolume",
    scenario: "A namespace was deleted by mistake. Its PVCs are gone but the PersistentVolumes used a Retain policy and still hold the data.",
    question: "How is the data recovered?",
    options: [
      { id: 'A', text: "Clear the stale claimRef on each Released PV so it becomes Available, then create a matching PVC in the recreated namespace to bind to it." },
      { id: 'B', text: "Restore etcd from a snapshot, which restores the volume data." },
      { id: 'C', text: "Recreate the namespace, and the PVCs rebind automatically." },
      { id: 'D', text: "Delete the PVs so they are recreated with the data intact." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Retain keeps both the volume and its data but leaves the PV Released with a claimRef pointing at the deleted claim, so removing that reference makes it Available for a new matching claim. Deleting the PV risks the backing volume, PVCs are not recreated automatically, and etcd holds metadata rather than volume contents.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/",
    tags: ["Storage", "Recovery", "PersistentVolume"]
  },
  {
    id: "k8s-cka-241",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Limiting the Blast Radius of a ServiceAccount Token",
    scenario: "A workload does not talk to the Kubernetes API at all, but its pods still mount a ServiceAccount token by default.",
    question: "Which change reduces exposure?",
    options: [
      { id: 'A', text: "Delete the default ServiceAccount from the namespace." },
      { id: 'B', text: "Add a NetworkPolicy denying egress to the API server, which removes the token." },
      { id: 'C', text: "Set the pod securityContext runAsNonRoot." },
      { id: 'D', text: "Set automountServiceAccountToken: false on the pod spec or the ServiceAccount." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Disabling automount stops the token being projected into the pod at all, which is the correct hardening for a workload that never calls the API. Deleting the default ServiceAccount breaks pod admission, running as non-root is unrelated to token exposure, and a network policy blocks reachability without removing the credential.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccount", "Security", "Hardening"]
  },
  {
    id: "k8s-cka-242",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Checking Whether a Node Has Capacity",
    scenario: "Before scheduling a large workload, an operator wants to see how much CPU and memory each node has already committed through requests.",
    question: "Which command shows allocated requests and limits per node?",
    options: [
      { id: 'A', text: "kubectl get node NODE -o wide." },
      { id: 'B', text: "kubectl describe node NODE, which lists Allocated resources with request and limit totals." },
      { id: 'C', text: "kubectl get pods -A --field-selector spec.nodeName=NODE -o name." },
      { id: 'D', text: "kubectl top node NODE, which shows requests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "describe node prints an Allocated resources section summing the requests and limits of the pods on that node against its allocatable capacity, which is what scheduling depends on. kubectl top shows actual live usage rather than requests, and the other commands list identity or pod names without totals.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Capacity", "Scheduling", "kubectl"]
  },
  {
    id: "k8s-cka-243",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Ensuring a Critical Pod Is Not Preempted",
    scenario: "A cluster-critical agent must survive scheduling pressure and never be preempted in favour of ordinary workloads.",
    question: "Which mechanism expresses that?",
    options: [
      { id: 'A', text: "Assign a PriorityClass with a high value, such as one of the built-in system-cluster-critical or system-node-critical classes where appropriate." },
      { id: 'B', text: "Add a PodDisruptionBudget with minAvailable 1." },
      { id: 'C', text: "Set prevent_preemption: true on the pod." },
      { id: 'D', text: "Set the pod QoS class to BestEffort." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Preemption compares pod priority values, so a high PriorityClass keeps a critical pod safe and lets it displace others when capacity is scarce; the built-in system classes exist for genuinely cluster-critical components. There is no prevent_preemption field, a PDB governs voluntary evictions rather than scheduler preemption, and BestEffort is the first class evicted under node pressure.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",
    tags: ["Priority", "Preemption", "Scheduling"]
  },
  {
    id: "k8s-cka-244",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Diagnosing Asymmetric Pod Connectivity",
    scenario: "Pods in namespace A can reach pods in namespace B, but not the reverse, and both namespaces have NetworkPolicies.",
    question: "What explains the asymmetry?",
    options: [
      { id: 'A', text: "Cross-namespace traffic requires a Service in both namespaces." },
      { id: 'B', text: "NetworkPolicies always apply symmetrically, so the CNI plugin must be broken." },
      { id: 'C', text: "Policies are directional and additive per pod, so B pods likely lack an ingress rule allowing A - or A pods lack one allowing B - since return traffic on an established connection is permitted but a new connection in the other direction is not." },
      { id: 'D', text: "kube-proxy only programs rules in one direction." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Ingress and egress are evaluated separately for each pod, and reply packets on an established connection are allowed without a matching rule - so one-way connectivity is the normal signature of a missing rule in the opposite direction. Policies are not symmetric, and kube-proxy handles Service virtual IPs rather than directional filtering.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/network-policies/",
    tags: ["NetworkPolicy", "Troubleshooting", "Networking"]
  },
  {
    id: "k8s-cka-245",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d1",
    domainName: "Storage",
    title: "Choosing Between a Projected Volume and Separate Mounts",
    scenario: "A container needs a ConfigMap key, a Secret key, and its ServiceAccount token to appear together under a single directory.",
    question: "Which volume type does that in one mount?",
    options: [
      { id: 'A', text: "A projected volume with configMap, secret, and serviceAccountToken sources." },
      { id: 'B', text: "A hostPath volume aggregating the files." },
      { id: 'C', text: "An emptyDir populated by an init container." },
      { id: 'D', text: "Three separate volumeMounts at the same mountPath." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A projected volume combines several sources into one directory, and it is also how audience-scoped rotating ServiceAccount tokens are requested. Copying files through an init container loses automatic updates, mounting three volumes at the same path conflicts, and hostPath exposes the node filesystem.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/projected-volumes/",
    tags: ["Projected Volumes", "Configuration", "Storage"]
  },
  {
    id: "k8s-cka-246",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Applying a Directory of Manifests",
    scenario: "A directory contains several YAML manifests with nested subdirectories, and all of them should be applied.",
    question: "Which command does that?",
    options: [
      { id: 'A', text: "kubectl create -f DIR --deep" },
      { id: 'B', text: "kubectl apply -f DIR/*.yaml --all" },
      { id: 'C', text: "kubectl apply -f DIR --recursive" },
      { id: 'D', text: "kubectl apply --directory=DIR" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "apply -f accepts a directory and the --recursive flag descends into subdirectories, applying every manifest found. The other forms rely on flags that do not exist, and a shell glob would miss nested directories.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
    tags: ["kubectl", "Manifests", "Declarative"]
  },
  {
    id: "k8s-cka-247",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "A Job Never Completes",
    scenario: "A Job shows one pod Running indefinitely. The container includes a native sidecar proxy alongside the main workload, which exits successfully.",
    question: "Which detail matters?",
    options: [
      { id: 'A', text: "backoffLimit must be set to 0 for a Job to complete." },
      { id: 'B', text: "A sidecar declared as an init container with restartPolicy Always is excluded from Job completion, whereas an ordinary long-running container in the pod would keep the Job from finishing." },
      { id: 'C', text: "The Job needs completions set to 0." },
      { id: 'D', text: "Jobs never complete when they contain more than one container." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A pod is only Succeeded when all its regular containers have terminated, so a plain sidecar hangs a Job forever; native sidecars - init containers with restartPolicy Always - were introduced precisely so they do not count toward completion. Multi-container Jobs are otherwise fine, and neither a zero backoffLimit nor zero completions is meaningful here.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/",
    tags: ["Jobs", "Sidecar", "Troubleshooting"]
  },
  {
    id: "k8s-cka-248",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deciding Between Requests Only and Requests Plus Limits",
    scenario: "A team debates whether to set CPU limits on latency-sensitive services.",
    question: "Which statement reflects the trade-off accurately?",
    options: [
      { id: 'A', text: "CPU limits are mandatory for scheduling to work." },
      { id: 'B', text: "Omitting CPU limits makes the pod BestEffort." },
      { id: 'C', text: "Memory limits cause throttling in the same way CPU limits do." },
      { id: 'D', text: "CPU limits cause throttling once the ceiling is reached, which can add latency even on an idle node, so some teams set CPU requests without limits while always setting memory limits because memory is incompressible." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "CPU is compressible so exceeding a limit throttles the process, while memory is not - exceeding a memory limit means an OOM kill, which is why memory limits are considered essential and CPU limits are debated. Scheduling depends on requests rather than limits, and a pod with requests set is Burstable rather than BestEffort.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Resources", "Performance", "Design"]
  },
  {
    id: "k8s-cka-249",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d5",
    domainName: "Services & Networking",
    title: "Restricting a Service to In-Cluster Traffic Only",
    scenario: "A Service must be reachable only by pods inside the cluster, with no possibility of external exposure.",
    question: "Which configuration is appropriate?",
    options: [
      { id: 'A', text: "A LoadBalancer Service with an empty loadBalancerSourceRanges list." },
      { id: 'B', text: "An ExternalName Service pointing at the ClusterIP." },
      { id: 'C', text: "A ClusterIP Service, optionally with internalTrafficPolicy and a NetworkPolicy restricting which pods may connect." },
      { id: 'D', text: "A NodePort Service with a firewall rule on each node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ClusterIP is the default and only exposes a virtual IP reachable from inside the cluster, with NetworkPolicy narrowing which pods may reach it. NodePort and LoadBalancer both create external surface that then has to be defended, and ExternalName is a DNS alias with no access control.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Services", "Security", "Networking"]
  },
  {
    id: "k8s-cka-250",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "What Survives an etcd Restore",
    scenario: "A cluster is restored from an etcd snapshot taken two hours earlier, using the original PKI directory.",
    question: "What is the expected state afterwards?",
    options: [
      { id: 'A', text: "The restore is transparent because kubelets resynchronise their local state into etcd." },
      { id: 'B', text: "Both the API objects and the underlying infrastructure roll back to the snapshot time." },
      { id: 'C', text: "API objects revert to the snapshot, so anything created in those two hours is gone from the cluster view even though the real cloud resources and running containers may still exist and must be reconciled." },
      { id: 'D', text: "Only Secrets and ConfigMaps are restored; workloads are unaffected." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "An etcd restore rewinds the cluster metadata only, so objects created after the snapshot vanish while their real-world effects - running containers, provisioned volumes, cloud load balancers - persist and become orphaned until reconciled. Kubelets do not push their pods back into etcd; the API server is the sole writer.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd", "Disaster Recovery", "Operations"]
  }
];

export default K8S_CKA_QUESTIONS_11;
