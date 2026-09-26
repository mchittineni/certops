export const CNCF_KCNA_QUESTIONS_7 = [
  {
    id: "cncf-kcna-151",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Pending pods during a traffic spike",
    scenario: "An e-commerce cluster on a managed cloud service runs its node pool between 3 and 20 nodes. During a flash sale, new pods stay Pending with Insufficient memory events, and the team wants extra nodes to appear automatically when this happens and disappear once they are no longer needed.",
    question: "Which component provides this behaviour?",
    options: [
      { id: 'A', text: "The Vertical Pod Autoscaler, which moves Pending pods onto larger nodes it provisions for their requests." },
      { id: 'B', text: "The Cluster Autoscaler, which adds nodes when pods cannot be scheduled and removes underused nodes later." },
      { id: 'C', text: "The kube-scheduler, which requests new virtual machines from the cloud when every node fails filtering." },
      { id: 'D', text: "The Horizontal Pod Autoscaler, which adds nodes whenever average pod memory exceeds its target value." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Cluster Autoscaler watches for pods that fail scheduling because of insufficient resources, asks the cloud provider to grow the node group within its configured bounds, and later drains and removes nodes whose pods can fit elsewhere. The Horizontal Pod Autoscaler changes the number of pod replicas, never the number of nodes, and scaling replicas would only add more Pending pods here. The Vertical Pod Autoscaler adjusts pod requests and limits; it does not provision nodes. The kube-scheduler only binds pods to existing nodes and has no ability to create machines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/node-autoscaling/",
    tags: ["Cluster Autoscaler","Scheduling"]
  },
  {
    id: "cncf-kcna-152",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Two autoscalers working together",
    scenario: "A news site configures a Horizontal Pod Autoscaler on its frontend Deployment targeting 70% CPU, and its cloud node pool also runs a node autoscaler. During a breaking story, CPU rises sharply. The team lead wants to explain to management how the two autoscalers cooperate.",
    question: "Which sequence describes what happens?",
    options: [
      { id: 'A', text: "The HPA raises the CPU limits of existing pods, and the node autoscaler adds nodes when those limits are hit." },
      { id: 'B', text: "The node autoscaler adds nodes first when CPU rises, and the HPA then creates replicas to fill the new nodes." },
      { id: 'C', text: "The HPA adds replicas; if they cannot fit, they go Pending and the node autoscaler adds nodes for them." },
      { id: 'D', text: "The node autoscaler raises the replica count on the Deployment, and the HPA spreads the pods across zones." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The HPA scales the replica count of the workload from observed metrics; the new pods are scheduled onto existing nodes if requests fit, and any that cannot fit stay Pending, which is the signal the node autoscaler responds to by adding nodes. Node autoscalers do not react to CPU utilisation directly; they react to unschedulable pods, so nodes are not added first. The HPA does not change limits; changing resources is the Vertical Pod Autoscaler's domain. Node autoscalers never edit a Deployment's replica count, and the HPA does not handle zone placement.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["HPA","Cluster Autoscaler"]
  },
  {
    id: "cncf-kcna-153",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Asking for a GPU in a pod spec",
    scenario: "A computer vision team has nodes with NVIDIA GPUs, and the NVIDIA device plugin DaemonSet is running on them, advertising the GPUs to Kubernetes. The team wants each inference pod to receive exactly one dedicated GPU.",
    question: "How should the container request the GPU?",
    options: [
      { id: 'A', text: "Add a limit of nvidia.com/gpu: 1 under the container's resources, which the scheduler uses to place it." },
      { id: 'B', text: "Set a memory request large enough that only the GPU nodes have capacity to fit the inference pods." },
      { id: 'C', text: "Add a nodeSelector for the GPU label, which makes the kubelet mount one GPU into each container." },
      { id: 'D', text: "Add the annotation nvidia.com/gpu: 1 to the pod metadata so the device plugin assigns a GPU at startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Device plugins advertise hardware as extended resources such as nvidia.com/gpu; a container asks for one by specifying the resource under limits (requests default to the same value and, if set, must equal it), and the scheduler only places the pod on a node with an unallocated GPU, after which the kubelet assigns it. An annotation is ignored by the scheduler and device plugin allocation. Sizing memory to steer pods onto GPU nodes neither reserves nor exposes a GPU. A nodeSelector can target GPU nodes but does not allocate a device, so several pods could share or miss the GPU.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/",
    tags: ["Extended resources","GPU","Device plugins"]
  },
  {
    id: "cncf-kcna-154",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Zonal disk created in the wrong zone",
    scenario: "A multi-zone cluster uses a StorageClass for zonal block disks with volumeBindingMode Immediate. A StatefulSet pod that also has a node affinity for zone c stays Pending with a volume node affinity conflict, and the team finds its PersistentVolume was provisioned in zone a as soon as the claim was created.",
    question: "What change prevents this for future claims?",
    options: [
      { id: 'A', text: "Add a toleration for the zone a topology label so the pod may run next to its provisioned volume." },
      { id: 'B', text: "Set volumeBindingMode WaitForFirstConsumer so provisioning waits until the pod has been scheduled." },
      { id: 'C', text: "Keep volumeBindingMode Immediate but set reclaimPolicy Retain so the disk can be moved to zone c." },
      { id: 'D', text: "Change the StatefulSet's podManagementPolicy to Parallel so pods and volumes are created together." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With Immediate binding, the volume is provisioned when the claim is created, before the scheduler knows where the pod must run, so the disk can land in a zone the pod cannot use. WaitForFirstConsumer delays binding and provisioning until a pod using the claim is scheduled, letting the scheduler consider the pod's constraints and create the volume in the chosen node's zone. The reclaim policy only decides what happens to a volume after its claim is deleted. Parallel pod management changes ordering of pod creation, not where volumes are provisioned. Zone labels are not taints, so a toleration does nothing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/storage/storage-classes/#volume-binding-mode",
    tags: ["Volume binding","StorageClass","Zones"]
  },
  {
    id: "cncf-kcna-155",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Plenty of CPU but Too many pods",
    scenario: "A cluster of large 64-core nodes runs hundreds of tiny sidecar-free microservice pods. New pods are stuck Pending with the event 0/4 nodes are available: 4 Too many pods, although the nodes show low CPU and memory requests overall.",
    question: "What limit is being reached?",
    options: [
      { id: 'A', text: "The kube-proxy connection table, which refuses new pods once too many Service endpoints are active." },
      { id: 'B', text: "The namespace's ResourceQuota for pod count, which the scheduler reports as a node-level shortage." },
      { id: 'C', text: "The kubelet's maximum pod count per node, which caps pods per node regardless of spare CPU and memory." },
      { id: 'D', text: "The API server's limit on total pods in the cluster, which is fixed at a few hundred objects overall." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Each node advertises a pods capacity, set by the kubelet's maxPods setting (110 by default, and often tied to the IP addresses the CNI can hand out), and the scheduler filters out nodes that already run that many pods, reporting Too many pods even when CPU and memory are free. A pod-count ResourceQuota is enforced at admission and produces a forbidden error, not a scheduling event. There is no cluster-wide limit of a few hundred pods; Kubernetes supports far more. kube-proxy has no role in whether a pod can be scheduled.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["maxPods","Scheduling","Pending"]
  },
  {
    id: "cncf-kcna-156",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Two exporters fighting over one node port",
    scenario: "A legacy monitoring exporter must be reachable on each node's own IP at port 9100, so its pod template sets hostPort: 9100. When the team scales the Deployment to 6 replicas on a 4-node cluster, 2 pods stay Pending with a message about free ports.",
    question: "Why can the extra pods not be scheduled?",
    options: [
      { id: 'A', text: "Pods using hostPort must run as a DaemonSet, so the scheduler rejects them in a Deployment." },
      { id: 'B', text: "hostPort requires a NodePort Service, and the Service can only route to four endpoints at once." },
      { id: 'C', text: "hostPort binds a port on the node itself, so only one pod using port 9100 can run on each node." },
      { id: 'D', text: "The port 9100 is outside the NodePort range, so the kubelet blocks the extra pods from starting." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A hostPort maps a container port onto the node's own network interface, and two pods cannot bind the same host port and protocol on one node, so the scheduler's port-fit filter allows at most one such pod per node and the remaining two stay Pending. hostPort does not depend on any Service. Nothing forbids hostPort in a Deployment, although a DaemonSet is often a better fit for per-node agents. The NodePort range applies to Service node ports allocated by the API server, not to hostPort values.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/overview/#services",
    tags: ["hostPort","Scheduling"]
  },
  {
    id: "cncf-kcna-157",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Fifth replica never starts",
    scenario: "A search service uses a required pod anti-affinity rule with topologyKey kubernetes.io/hostname so that no two replicas share a node. The cluster has four worker nodes with plenty of spare capacity. After the team scales the Deployment to five replicas, one pod remains Pending indefinitely.",
    question: "What should the team change if it wants all five replicas to run while still favouring separate nodes?",
    options: [
      { id: 'A', text: "Switch the rule to preferredDuringScheduling pod anti-affinity so a fifth replica can share a node." },
      { id: 'B', text: "Replace the anti-affinity with pod affinity on the same topology key to keep replicas close together." },
      { id: 'C', text: "Raise the pod's PriorityClass so the scheduler preempts a replica and fits the pending pod in its place." },
      { id: 'D', text: "Add a toleration for the unschedulable taint so a replica may share a node despite the rule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A required anti-affinity rule on the hostname key allows only one replica per node, so with four nodes the fifth replica can never be placed; a preferred rule turns it into a weighted score, keeping replicas apart when possible and co-locating only when no separate node remains. A toleration for the unschedulable taint has nothing to do with anti-affinity. Pod affinity would pack replicas together, losing the spread entirely. Preemption only helps when evicting pods would make the pending pod fit; evicting another replica just moves the problem, because the same rule still blocks one pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Pod anti-affinity","Pending"]
  },
  {
    id: "cncf-kcna-158",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Affinity terms that behave like OR",
    scenario: "An engineer writes a required node affinity with two entries under nodeSelectorTerms: the first has a matchExpression for disktype In ssd, and the second has a matchExpression for zone In eu-west-1a. She expected pods to land only on SSD nodes in eu-west-1a, but some pods run on HDD nodes in that zone.",
    question: "How should she rewrite the rule to require both conditions?",
    options: [
      { id: 'A', text: "Move the zone condition into a preferred rule with weight 100 so it must hold alongside the first." },
      { id: 'B', text: "Split the rule into two separate pods, one per condition, and join them with pod affinity rules." },
      { id: 'C', text: "Put both expressions inside one nodeSelectorTerm, because expressions within a term are ANDed." },
      { id: 'D', text: "Keep the two nodeSelectorTerms but change both operators from In to Exists on the expressions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Multiple nodeSelectorTerms are ORed, so a node satisfying either term qualifies, which is why HDD nodes in eu-west-1a were accepted; matchExpressions inside a single term must all be satisfied, so placing both expressions in one term requires an SSD node in that zone. Exists ignores the value, so it would widen the match further and still OR the terms. A preferred rule only adds a score and cannot make the zone mandatory. Splitting the workload into separate pods changes the application, not the placement rule.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity",
    tags: ["Node affinity","nodeSelectorTerms"]
  },
  {
    id: "cncf-kcna-159",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Scratch files filling a node disk",
    scenario: "A video transcoding pod writes up to 40 GiB of temporary files into its container's writable layer and an emptyDir volume. Several of these pods landing on one node have filled its disk and caused evictions of unrelated workloads. The team wants the scheduler to account for this disk use and to cap each pod's consumption.",
    question: "Which setting achieves both goals?",
    options: [
      { id: 'A', text: "A memory limit of 40 GiB, because writes to the container's writable layer count against its memory." },
      { id: 'B', text: "A sizeLimit on the emptyDir volume only, which the scheduler adds to the pod's requests when placing it." },
      { id: 'C', text: "Requests and limits for the ephemeral-storage resource, honoured by the scheduler and the kubelet." },
      { id: 'D', text: "A PersistentVolumeClaim sized at 40 GiB with a ReadWriteOnce access mode for each transcoding pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ephemeral-storage is a first-class resource: its request is counted by the scheduler against node allocatable local storage, and its limit is enforced by the kubelet, which evicts a pod whose writable layers, logs and emptyDir usage exceed it. Moving the files to a PersistentVolumeClaim takes them off node disk but is a different design and caps nothing on the node. An emptyDir sizeLimit caps that volume and triggers eviction when exceeded, but it is not a scheduling request and leaves the writable layer uncapped. Writes to the container's writable layer are disk usage, not memory, unless the emptyDir uses medium Memory.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#local-ephemeral-storage",
    tags: ["Ephemeral storage","Requests","Eviction"]
  },
  {
    id: "cncf-kcna-160",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Node shows less than its hardware",
    scenario: "A new 16 GiB worker node joins the cluster, but kubectl describe node shows Capacity memory of about 16 GiB and Allocatable memory of about 14.5 GiB. A developer asks why pods cannot use the full amount the machine was bought with.",
    question: "What explains the difference?",
    options: [
      { id: 'A', text: "Allocatable subtracts the memory currently used by running pods, so it shrinks as workloads grow." },
      { id: 'B', text: "Memory is reserved for the OS and Kubernetes daemons plus an eviction threshold, leaving the rest." },
      { id: 'C', text: "The container runtime keeps a fixed 10% of memory in reserve for its image cache on every node." },
      { id: 'D', text: "The scheduler keeps a buffer on each node so that pods can burst above their limits when needed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Node allocatable is capacity minus kube-reserved (for the kubelet and runtime), system-reserved (for the OS) and the hard eviction threshold; the scheduler compares pod requests against allocatable, so this headroom protects node daemons from being starved. The runtime has no fixed 10% image-cache reservation. Allocatable is a static figure and does not fall as pods run; the scheduler tracks requests separately. Limits cannot be exceeded for memory, and the scheduler does not hold back burst buffers.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/",
    tags: ["Allocatable","Node resources"]
  },
  {
    id: "cncf-kcna-161",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "High priority without evicting anyone",
    scenario: "A research cluster runs long simulations that must never be interrupted. The team wants a new class of interactive notebook pods to jump ahead of queued simulation pods whenever capacity frees up, but notebooks must not evict any simulation that is already running.",
    question: "Which PriorityClass configuration fits?",
    options: [
      { id: 'A', text: "A low value with globalDefault true, so every pod without a class, simulations included, ranks below them." },
      { id: 'B', text: "A high value with preemptionPolicy Never, so notebooks are queued first but never preempt running pods." },
      { id: 'C', text: "A high value combined with a Guaranteed QoS class, so notebooks win when the kubelet evicts under pressure." },
      { id: 'D', text: "A high value with PreemptLowerPriority, plus a PodDisruptionBudget so running simulations are never evicted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A PriorityClass with preemptionPolicy Never places its pods ahead of lower-priority pods in the scheduling queue but stops the scheduler from evicting anything to make room, which is exactly the non-preempting behaviour required. PreemptLowerPriority allows eviction, and PDBs are only honoured on a best-effort basis during preemption, so running simulations could still be interrupted. A low-value global default makes unclassed pods lower priority but gives notebooks no advantage by itself. QoS affects node-pressure eviction, which is unrelated to queue order and could itself disrupt simulations.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#non-preempting-priority-class",
    tags: ["PriorityClass","Preemption"]
  },
  {
    id: "cncf-kcna-162",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Holding pods until quota is ready",
    scenario: "A batch platform creates hundreds of job pods at once, but each must wait until an external quota service approves it before the scheduler even considers it. Today the unapproved pods sit in the scheduling queue and generate constant FailedScheduling churn.",
    question: "Which Kubernetes feature keeps these pods out of scheduling until they are released?",
    options: [
      { id: 'A', text: "Pod scheduling gates, listed in spec.schedulingGates, which the controller removes to release each pod." },
      { id: 'B', text: "A blank spec.nodeName, which makes the scheduler skip scheduling the pod until a controller sets it." },
      { id: 'C', text: "A preemptionPolicy of Never, which stops the pod from being scheduled until capacity is approved." },
      { id: 'D', text: "A NoSchedule taint added to the pods themselves, which is lifted by the quota service on approval." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Scheduling readiness uses spec.schedulingGates: a pod created with one or more gates is reported as SchedulingGated and is not attempted by the scheduler until an external controller removes every gate, which removes the retry churn. An empty nodeName is the normal state of every pod awaiting scheduling, so it does not hold anything back. preemptionPolicy Never only prevents the pod from evicting others; the pod is still scheduled normally. Taints apply to nodes, not pods, so a pod cannot carry a NoSchedule taint.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-scheduling-readiness/",
    tags: ["Scheduling gates","Batch"]
  },
  {
    id: "cncf-kcna-163",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "New nodes stay empty after a scale-out",
    scenario: "An operations team added three nodes to a cluster whose original nodes are heavily loaded. A day later the new nodes still run almost nothing, because existing pods were never moved. The team wants long-running pods redistributed periodically to even out the load.",
    question: "Which approach addresses this?",
    options: [
      { id: 'A', text: "Increase each Deployment's maxSurge so the rollout controller spreads existing pods onto new nodes." },
      { id: 'B', text: "Restart the kube-scheduler, which then reschedules all running pods using the updated node list." },
      { id: 'C', text: "Run the descheduler, which evicts pods by policy so the scheduler can place them on better nodes." },
      { id: 'D', text: "Enable the Cluster Autoscaler so it migrates existing pods from busy nodes onto the new empty ones." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The default scheduler only places a pod once and never revisits running pods; the descheduler, a Kubernetes SIGs project, evicts pods that violate policies such as low node utilisation or broken spread constraints so their controllers recreate them and the scheduler places the replacements on the new nodes. Restarting the scheduler does not move running pods. The Cluster Autoscaler adds and removes nodes and can drain an underused node, but it does not rebalance load onto newly added nodes. maxSurge affects only rollouts, when pods are replaced for a template change.",
    referenceUrl: "https://github.com/kubernetes-sigs/descheduler",
    tags: ["Descheduler","Rebalancing"]
  },
  {
    id: "cncf-kcna-164",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Protecting the cluster DNS add-on",
    scenario: "During a capacity crunch, the scheduler preempted a CoreDNS pod to make room for a large batch job, and name resolution broke across the cluster. The platform team wants critical add-ons like DNS to outrank ordinary workloads when the scheduler decides what to preempt.",
    question: "What should the platform team do?",
    options: [
      { id: 'A', text: "Run CoreDNS as a DaemonSet, because DaemonSet pods are never preempted for ordinary ones." },
      { id: 'B', text: "Assign CoreDNS the built-in system-cluster-critical PriorityClass so it outranks ordinary pods." },
      { id: 'C', text: "Place CoreDNS in the default namespace, where the scheduler treats pods as critical system pods." },
      { id: 'D', text: "Set CoreDNS requests equal to limits so it is Guaranteed and therefore can never be preempted." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes ships two built-in priority classes, system-cluster-critical and system-node-critical, with values far above user classes; giving CoreDNS system-cluster-critical means the scheduler will preempt lower-priority pods rather than it. QoS class governs kubelet eviction under node pressure, not scheduler preemption. DaemonSet pods are scheduled by the default scheduler and can be preempted like others unless their priority is high. The namespace confers no criticality; default is an ordinary namespace, and the built-in classes are usually used for kube-system workloads.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/guaranteed-scheduling-critical-addon-pods/",
    tags: ["PriorityClass","CoreDNS"]
  },
  {
    id: "cncf-kcna-165",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Discouraging but not forbidding a node",
    scenario: "A small cluster has one older node with slow disks. The team would like the scheduler to avoid that node for new pods when other nodes have room, but still use it rather than leave pods Pending when the cluster is busy.",
    question: "Which taint effect expresses this?",
    options: [
      { id: 'A', text: "Unschedulable, which is set by kubectl cordon and blocks the node except during busy periods." },
      { id: 'B', text: "PreferNoSchedule, which asks the scheduler to avoid the node but lets it be used if needed." },
      { id: 'C', text: "NoSchedule, which keeps pods off the node until an administrator removes the taint again." },
      { id: 'D', text: "NoExecute, which evicts pods to avoid the node when better capacity appears elsewhere." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PreferNoSchedule is the soft taint effect: the scheduler tries to avoid placing non-tolerating pods on the node but will use it when no better option exists, matching the requirement. NoSchedule is a hard filter, so pods would stay Pending rather than use the node. NoExecute also evicts running pods and never considers where better capacity exists. Cordoning sets the unschedulable flag, which blocks all new pods regardless of how busy the cluster is.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints","PreferNoSchedule"]
  },
  {
    id: "cncf-kcna-166",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Sandboxed pods need more room than requested",
    scenario: "A SaaS company runs untrusted customer code in pods that use a RuntimeClass backed by Kata Containers, which boots a lightweight VM per pod. Nodes are filling up faster than the sum of the containers' requests suggests, and the team wants the scheduler to account for the VM's own memory and CPU.",
    question: "Which feature accounts for this cost during scheduling?",
    options: [
      { id: 'A', text: "A LimitRange that raises every container's default request in the sandbox namespace by a fixed amount." },
      { id: 'B', text: "A second sidecar container per pod whose requests match the VM cost the RuntimeClass adds at scheduling." },
      { id: 'C', text: "The overhead field on the RuntimeClass, which is added to the pod's requests when scheduling it." },
      { id: 'D', text: "A ResourceQuota on the namespace that reserves extra CPU and memory for the runtime of each sandbox." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pod overhead is declared in the RuntimeClass's overhead.podFixed field; an admission controller copies it into each pod that uses the class, and the scheduler adds it to the containers' requests when fitting the pod, so VM-based sandboxes are sized honestly. A LimitRange default only applies to containers that set no request, and it distorts the application's own sizing. A ResourceQuota caps namespace totals and never reserves capacity on nodes. A dummy sidecar would approximate the cost but wastes a container and is exactly the workaround pod overhead replaces.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-overhead/",
    tags: ["RuntimeClass","Pod overhead"]
  },
  {
    id: "cncf-kcna-167",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Three scheduler replicas, one decision maker",
    scenario: "A self-managed cluster runs kube-scheduler on each of its three control-plane nodes for high availability. An engineer worries that three schedulers might bind the same pod to different nodes at the same moment.",
    question: "How does Kubernetes prevent that?",
    options: [
      { id: 'A', text: "The schedulers use leader election through a Lease object, so only the elected leader binds pods." },
      { id: 'B', text: "The API server load-balances incoming pods across the three replicas in strict round-robin order." },
      { id: 'C', text: "Each scheduler replica handles one third of the namespaces, assigned by hash of the namespace name." },
      { id: 'D', text: "etcd rejects duplicate bindings, so all three schedulers act and the first successful write wins." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kube-scheduler runs with leader election enabled by default: replicas compete for a Lease in the kube-system namespace, only the current leader schedules pods, and a standby takes over if the leader stops renewing the lease. Schedulers do not shard work by namespace. Relying on write conflicts would waste work and is not the design, even though binding does use optimistic concurrency. The API server does not push pods to schedulers; schedulers watch for unscheduled pods, and only the leader acts on them.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/",
    tags: ["kube-scheduler","Leader election","High availability"]
  },
  {
    id: "cncf-kcna-168",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Why containers start faster than VMs",
    scenario: "A bank's infrastructure team is comparing its existing virtual machine estate with a proposed container platform. Its architects note that a container starts in about a second while a VM takes minutes, and they want to explain the architectural reason to leadership.",
    question: "What is the main reason containers are lighter than virtual machines?",
    options: [
      { id: 'A', text: "Containers keep their processes suspended in memory, so starting one only resumes the process." },
      { id: 'B', text: "Containers compile the application to machine code ahead of time, so there is nothing to load." },
      { id: 'C', text: "Containers share the host operating system kernel instead of each booting a full guest OS." },
      { id: 'D', text: "Containers run on a hypervisor that is more efficient than the one used for virtual machines." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A container is an isolated set of processes on the host, sharing the host's kernel, so starting one means starting a process rather than booting an operating system; a VM virtualises hardware and boots its own guest kernel and OS. Standard containers do not run on a hypervisor at all (VM-based sandboxes such as Kata are the exception, trading speed for isolation). Containers package applications as they are, without special compilation. A container is not a suspended process image; each start launches the process fresh.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/",
    tags: ["Containers","Virtual machines"]
  },
  {
    id: "cncf-kcna-169",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Isolation versus resource limits",
    scenario: "A new SRE learns that Linux containers are built from two kernel features. One makes a process see only its own process tree, network interfaces and mounts; the other caps how much CPU and memory the process may use.",
    question: "Which pairing of features to purposes is correct?",
    options: [
      { id: 'A', text: "chroot provides the isolated view of processes and networks; ulimit enforces the CPU and memory caps." },
      { id: 'B', text: "Namespaces provide the isolated view of processes and networks; cgroups enforce the CPU and memory caps." },
      { id: 'C', text: "seccomp provides the isolated view of processes and networks; SELinux enforces the CPU and memory caps." },
      { id: 'D', text: "cgroups provide the isolated view of processes and networks; namespaces enforce the CPU and memory caps." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Linux namespaces (PID, network, mount, UTS, IPC, user) give a process its own view of system resources, while control groups (cgroups) account for and limit CPU, memory and I/O; Kubernetes requests and limits are ultimately implemented as cgroup settings. The reversed pairing swaps the two. seccomp filters system calls and SELinux enforces mandatory access control; both harden containers but neither provides these functions. chroot only changes the visible root directory, and ulimit sets per-process limits that are not how container runtimes cap memory and CPU.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/cgroups/",
    tags: ["Namespaces","cgroups","Containers"]
  },
  {
    id: "cncf-kcna-170",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Why a second image pulls so quickly",
    scenario: "A team builds two images from the same python:3.12-slim base, adding different application code to each. When a node that already has the first image pulls the second one, the download is only a few megabytes even though the full image is several hundred.",
    question: "Why is the second pull so small?",
    options: [
      { id: 'A', text: "The registry compresses the second image against the first image before it sends it to the node." },
      { id: 'B', text: "Container images are always delta-encoded against the previous tag that the node pulled for that repo." },
      { id: 'C', text: "The kubelet caches the application code from the first pod and patches it into the second container." },
      { id: 'D', text: "Images are made of content-addressed layers, and layers already on the node are not downloaded again." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An OCI image is a stack of layers, each identified by the digest of its content; the base image layers are identical in both images, so the runtime reuses the ones already stored on the node and only fetches the new application layers. Registries serve layers as stored blobs and do not compute cross-image deltas at pull time. The kubelet does not copy code between containers. Image pulls are not delta-encoded against previous tags; sharing happens only through identical layers.",
    referenceUrl: "https://github.com/opencontainers/image-spec/blob/main/layer.md",
    tags: ["Container images","Layers"]
  },
  {
    id: "cncf-kcna-171",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Every code change reinstalls dependencies",
    scenario: "A Node.js team's Dockerfile copies the whole repository with COPY . . and then runs npm ci. Every one-line code change causes the image build to reinstall all dependencies, taking eight minutes on the CI runner.",
    question: "Which Dockerfile change fixes this most directly?",
    options: [
      { id: 'A', text: "Add the --no-cache flag to the build so that the builder does not reuse any stale dependency layer." },
      { id: 'B', text: "Switch the base image to a smaller Alpine variant so the dependency install step completes faster." },
      { id: 'C', text: "Copy package.json and package-lock.json first, run npm ci, then copy the rest of the source code." },
      { id: 'D', text: "Copy all source code first, then run npm ci in its own RUN instruction so the install gets a layer." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Build caches reuse a layer only while that instruction and everything before it are unchanged; copying only the manifest and lockfile before npm ci means the install layer is invalidated only when dependencies change, and source edits affect only the final COPY layer. --no-cache disables caching entirely and makes every build slow. Placing npm ci after COPY . . is the current problem: any source change invalidates the copy layer and every later one. A smaller base image may shave time but does not stop the full reinstall on every change.",
    referenceUrl: "https://docs.docker.com/build/cache/optimize/",
    tags: ["Dockerfile","Build cache","Layers"]
  },
  {
    id: "cncf-kcna-172",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Where a short image name is pulled from",
    scenario: "A developer's pod spec says image: nginx with no registry host and no tag. The cluster's nodes run containerd with no registry mirrors configured, and the security team asks exactly which image the kubelet will ask the runtime to pull.",
    question: "How is the short image reference resolved?",
    options: [
      { id: 'A', text: "As the nginx image cached most recently on the node, whatever registry it originally came from." },
      { id: 'B', text: "As docker.io/library/nginx:latest, because Docker Hub and the latest tag are the defaults." },
      { id: 'C', text: "As ghcr.io/nginx/nginx:latest, because containerd defaults to the GitHub Container Registry." },
      { id: 'D', text: "As registry.k8s.io/nginx:stable, because Kubernetes resolves short names to its own registry." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An image reference is registry/repository:tag; when the registry host is omitted, container runtimes default to Docker Hub (docker.io), single-segment official images live under the library namespace, and a missing tag means latest, so nginx becomes docker.io/library/nginx:latest. registry.k8s.io hosts Kubernetes component images and is not a default for short names. The runtime resolves a full reference before checking its local store; it does not substitute an arbitrary cached image from another registry. containerd has no GitHub Container Registry default.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Container images","Registries"]
  },
  {
    id: "cncf-kcna-173",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Switching image builders without breaking nodes",
    scenario: "A platform team is moving from Docker to Buildah for building images, and its clusters run containerd while a partner's clusters run CRI-O. Developers ask whether images built by the new tool will still run everywhere and be storable in the existing registry.",
    question: "What makes this interoperability possible?",
    options: [
      { id: 'A', text: "The CNCF Artifact Hub, which converts images between builder formats when they are pushed to registries." },
      { id: 'B', text: "Docker's Engine API, which Buildah, containerd and CRI-O all emulate so that they can exchange image archives safely." },
      { id: 'C', text: "The OCI image, runtime and distribution specifications, which builders, runtimes and registries all follow." },
      { id: 'D', text: "The Kubernetes CRI defines the image format, so any runtime that implements CRI can read the images." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Open Container Initiative publishes the image spec (how images are packaged), the runtime spec (how a bundle is run, implemented by runc and others) and the distribution spec (how registries serve content), so any compliant builder, runtime and registry interoperate. The Container Runtime Interface defines how the kubelet talks to a runtime over gRPC, not the image format. containerd and CRI-O do not emulate the Docker Engine API. Artifact Hub is a catalogue for discovering Helm charts and other packages and does not convert images.",
    referenceUrl: "https://opencontainers.org/about/overview/",
    tags: ["OCI","Container images","Runtimes"]
  },
  {
    id: "cncf-kcna-174",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "One image for dev, staging and prod",
    scenario: "A travel company builds a separate image for each environment because database URLs and feature flags are baked in at build time. Promotions keep failing when the production image differs subtly from the one tested in staging.",
    question: "Which practice resolves this?",
    options: [
      { id: 'A', text: "Build the image once and supply environment-specific settings at runtime through ConfigMaps and Secrets." },
      { id: 'B', text: "Build once and use Dockerfile ARG values at deploy time so that each cluster injects its own environment settings there." },
      { id: 'C', text: "Keep separate images per environment but tag them with the same version so they are easier to compare." },
      { id: 'D', text: "Mount the source repository into the container at startup so each environment compiles its own copy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Immutable images with configuration injected at runtime, through environment variables, ConfigMaps and Secrets, mean the exact artefact tested in staging is promoted to production, in line with twelve-factor practice. ARG values exist only during the build, so they cannot be supplied at deploy time. Giving different images the same tag hides the drift instead of removing it. Compiling source at startup reintroduces per-environment differences and slow, unpredictable starts.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/",
    tags: ["Immutable images","ConfigMaps","Twelve-factor"]
  },
  {
    id: "cncf-kcna-175",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A 1.2 GB image for a 20 MB binary",
    scenario: "A Go team's image is 1.2 GB because it is built on the full golang image, which contains the compiler, module cache and build tools. The final artefact is a single 20 MB static binary, and the security team flags hundreds of CVEs in unused packages.",
    question: "Which build technique shrinks the image while keeping the build in one Dockerfile?",
    options: [
      { id: 'A', text: "A single stage that runs apt-get clean and then deletes the whole Go toolchain in a later RUN instruction." },
      { id: 'B', text: "A squash of all layers into one after the build, keeping the golang base but merging its history." },
      { id: 'C', text: "A multi-stage build that compiles in the golang image and copies only the binary into a minimal image." },
      { id: 'D', text: "A .dockerignore file that excludes the Go toolchain from the context, leaving just the binary." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Multi-stage builds use several FROM instructions; the first stage compiles with the full toolchain and a later stage based on a minimal image such as distroless or scratch copies in only the binary, so the shipped image contains almost nothing else. Deleting files in a later layer does not remove them from earlier layers, so the image stays large. Squashing merges layers but still ships the compiler and its packages. .dockerignore limits what is sent from the build context; the toolchain comes from the base image, not the context.",
    referenceUrl: "https://docs.docker.com/build/building/multi-stage/",
    tags: ["Multi-stage builds","Image size"]
  }
];

export default CNCF_KCNA_QUESTIONS_7;
