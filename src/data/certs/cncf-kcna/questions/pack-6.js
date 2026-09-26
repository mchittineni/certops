export const CNCF_KCNA_QUESTIONS_6 = [
  {
    id: "cncf-kcna-126",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Pinning a database pod to SSD nodes",
    scenario: "A retail team runs a three-node pool where only two nodes have local NVMe drives, and an administrator has already labelled those two nodes disktype=ssd. The team wants its PostgreSQL pod to be placed only on one of the labelled nodes, and the simplest possible mechanism is preferred.",
    question: "What should the team add to the pod spec?",
    options: [
      { id: 'A', text: "A toleration for the key disktype with the value ssd and the effect NoSchedule on the database container." },
      { id: 'B', text: "A nodeSelector field with the entry disktype: ssd, so only nodes carrying that exact label are considered." },
      { id: 'C', text: "A spec.nodeName value naming one SSD node, so the scheduler still picks between both labelled nodes later." },
      { id: 'D', text: "A podAffinity rule with topologyKey disktype so the pod lands next to pods that already use the SSD nodes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "nodeSelector is the simplest node-selection constraint: the scheduler only considers nodes whose labels match every key-value pair listed, so disktype: ssd restricts the pod to the two labelled nodes. A toleration only permits a pod onto a tainted node; the nodes here are labelled, not tainted, and a toleration never attracts a pod anywhere. podAffinity places pods relative to other pods, not relative to node labels, and it would not guarantee SSD placement. spec.nodeName binds the pod to one named node and bypasses the scheduler entirely, so there is no later choice between the two SSD nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/",
    tags: ["Scheduling","nodeSelector","Labels"]
  },
  {
    id: "cncf-kcna-127",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Reading a FailedScheduling event",
    scenario: "A developer applies a Deployment whose pod requests 6 CPU cores. The pod stays in Pending, and kubectl describe pod shows the event: 0/3 nodes are available: 3 Insufficient cpu. Each worker node has 4 allocatable cores and runs very little else.",
    question: "Why is the pod not being scheduled?",
    options: [
      { id: 'A', text: "No single node has 6 cores of allocatable CPU left to satisfy the request, so the scheduler filters out every node." },
      { id: 'B', text: "The kube-scheduler adds up free CPU across all three nodes and splits the pod once 6 cores are available in total." },
      { id: 'C', text: "The nodes are cordoned, so the scheduler reports their allocatable CPU as zero until someone runs kubectl uncordon." },
      { id: 'D', text: "The pod's CPU limit is higher than the node capacity, and the kubelet refuses to start containers whose limit exceeds it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The scheduler places a pod only on a node whose allocatable resources minus the requests of pods already there can cover the new pod's requests; a single pod cannot span nodes, so a 6-core request never fits on 4-core nodes and every node fails the filter with Insufficient cpu. Limits play no part in the scheduling decision, and the kubelet does not reject a pod because a limit exceeds capacity. A cordoned node is reported as unschedulable, not as short on CPU. The scheduler never splits a pod across nodes or pools capacity from several nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Scheduling","Resource requests","Pending"]
  },
  {
    id: "cncf-kcna-128",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Keeping general workloads off GPU nodes",
    scenario: "A machine learning platform adds two expensive GPU nodes to a shared cluster. The platform team wants ordinary web and batch pods to stay off those nodes, while training pods that explicitly opt in must still be allowed to run there.",
    question: "Which mechanism is designed for this requirement?",
    options: [
      { id: 'A', text: "Taint the GPU nodes with NoSchedule and add a matching toleration only to the training pods' specs." },
      { id: 'B', text: "Label the GPU nodes and give ordinary pods a nodeSelector that names the general-purpose node pool." },
      { id: 'C', text: "Cordon the GPU nodes so only DaemonSet pods and Job pods such as training runs can be scheduled there." },
      { id: 'D', text: "Create a ResourceQuota in each namespace that caps GPU usage for web and batch workloads at zero." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A taint repels every pod that lacks a matching toleration, so a NoSchedule taint on the GPU nodes keeps ordinary pods off without touching their manifests, and the training pods opt in by carrying the toleration. Adding nodeSelectors to every ordinary workload also works in principle but depends on every team remembering it, which is the opposite of repelling by default. A ResourceQuota limits how much of a resource a namespace can request; ordinary pods request no GPUs, so it would not stop them landing on the GPU nodes. Cordoning marks a node unschedulable for all new pods except DaemonSet pods; Job pods are not exempt, so training could not run there.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling","Taints","Tolerations"]
  },
  {
    id: "cncf-kcna-129",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Training pods still land on CPU nodes",
    scenario: "After the GPU nodes were tainted with gpu=true:NoSchedule and the training pods were given a matching toleration, the team notices that some training pods are still being scheduled onto ordinary CPU nodes, where they wait forever for a GPU. The team wants training pods to run only on GPU nodes and other pods to stay off them.",
    question: "What additional configuration completes the design?",
    options: [
      { id: 'A', text: "Remove the taint and rely on a preferred node affinity rule so the scheduler favours the GPU nodes." },
      { id: 'B', text: "Add a second toleration to the training pods with operator Exists so they match every taint present." },
      { id: 'C', text: "Change the taint effect on the GPU nodes to NoExecute so that tolerating pods are pulled onto them." },
      { id: 'D', text: "Add a node affinity rule to the training pods that requires the GPU node label, keeping the taint." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A toleration only allows a pod onto a tainted node; it never attracts the pod there, so tolerating pods can still be placed on untainted CPU nodes. Dedicated nodes use both halves: the taint repels everyone else, and a required node affinity (or nodeSelector) on the GPU label pins the training pods to those nodes. NoExecute additionally evicts non-tolerating pods that are already running; it does not pull tolerating pods toward the node. A wildcard toleration widens where the pod may go instead of narrowing it. Removing the taint lets ordinary pods back onto the GPU nodes, and a preferred rule is only a scoring hint, so training pods could still land on CPU nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling","Taints","Node affinity"]
  },
  {
    id: "cncf-kcna-130",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Grace period after a node goes unreachable",
    scenario: "A logistics company's cluster automatically adds the node.kubernetes.io/unreachable:NoExecute taint when a node stops reporting. By default the pods on that node are evicted after about five minutes, but the company's stateful message broker should wait 30 minutes before being moved, because network blips are common and reconnection is cheap.",
    question: "How can the broker pods express this?",
    options: [
      { id: 'A', text: "Set terminationGracePeriodSeconds to 1800 so the kubelet waits 30 minutes before it sends SIGKILL." },
      { id: 'B', text: "Add a PodDisruptionBudget with maxUnavailable 0 so the broker pods are never evicted from an unreachable node." },
      { id: 'C', text: "Add a toleration for the unreachable NoExecute taint with tolerationSeconds set to 1800 on the pods." },
      { id: 'D', text: "Set a node affinity rule with the IgnoredDuringExecution suffix so the NoExecute taint never evicts the pod." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "For NoExecute taints, a toleration may carry tolerationSeconds, which is how long the pod stays bound after the taint appears; Kubernetes adds 300-second tolerations for the not-ready and unreachable taints by default, and overriding the value with 1800 gives the broker 30 minutes. terminationGracePeriodSeconds controls how long a container gets to shut down after SIGTERM, not how long before eviction starts, and an unreachable kubelet cannot act on it anyway. PodDisruptionBudgets constrain voluntary disruptions such as drains, not taint-based eviction from node failures. IgnoredDuringExecution refers to node label changes, not to NoExecute taints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints","NoExecute","Eviction"]
  },
  {
    id: "cncf-kcna-131",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Node label removed after placement",
    scenario: "A pod was scheduled with a node affinity rule of type requiredDuringSchedulingIgnoredDuringExecution that requires the label zone-tier=premium. A week later an administrator removes that label from the node where the pod is running, while the pod itself remains healthy.",
    question: "What happens to the running pod?",
    options: [
      { id: 'A', text: "The pod is evicted immediately and its controller creates a replacement that stays Pending if unmatched." },
      { id: 'B', text: "The kubelet notices the mismatch within a sync period and restarts the pod's containers on the same node." },
      { id: 'C', text: "The scheduler re-evaluates the rule and moves the pod to another node that still carries the label." },
      { id: 'D', text: "The pod keeps running on the node; the rule is only enforced when the scheduler places a new pod." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The IgnoredDuringExecution half of the name means node affinity is checked only at scheduling time: once the pod is bound, later changes to node labels have no effect on it, so the pod keeps running. The kubelet does not watch affinity rules and does not restart containers over label changes. The default scheduler never moves running pods; pods are only placed once, and rebalancing requires a separate tool such as the descheduler. No eviction is triggered by a label change, so no replacement pod is created.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/",
    tags: ["Node affinity","Scheduling"]
  },
  {
    id: "cncf-kcna-132",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Replicas all ended up on one node",
    scenario: "A payments API Deployment runs three replicas on a five-node cluster. During a node failure, all three replicas went down together because they had been placed on the same node. The team wants the scheduler to refuse to put two replicas of the API on the same node.",
    question: "Which rule should be added to the pod template?",
    options: [
      { id: 'A', text: "A requiredDuringScheduling node affinity rule that lists three specific node names under kubernetes.io/hostname." },
      { id: 'B', text: "A requiredDuringScheduling pod affinity rule matching the API's own labels with topologyKey kubernetes.io/hostname." },
      { id: 'C', text: "A NoSchedule taint on every node that is removed by the pod's own toleration once the first replica is running." },
      { id: 'D', text: "A requiredDuringScheduling pod anti-affinity rule matching the API's own labels with topologyKey kubernetes.io/hostname." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pod anti-affinity keeps a pod away from nodes already running pods that match a label selector; selecting the API's own labels with topologyKey kubernetes.io/hostname means no node can host two replicas, and the required form makes it a hard rule. Pod affinity does the opposite and would pull the replicas together onto one node. Pinning three node names with node affinity lets every replica choose any of the three, so two can still share a node, and it breaks as soon as one named node fails. Pods cannot remove taints from nodes, so the taint-based idea does not describe a real mechanism.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Pod anti-affinity","High availability"]
  },
  {
    id: "cncf-kcna-133",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Keeping a cache close to its web tier",
    scenario: "A media site runs its web pods across three availability zones and wants each Redis cache pod to run in the same zone as at least one web pod, to cut cross-zone latency and data transfer costs. Nodes carry the standard topology.kubernetes.io/zone label.",
    question: "What should the Redis pod template include?",
    options: [
      { id: 'A', text: "A topologySpreadConstraint with maxSkew 1 across topology.kubernetes.io/zone selecting the web pods." },
      { id: 'B', text: "A pod anti-affinity rule selecting the web pods, using topology.kubernetes.io/zone as the topology key." },
      { id: 'C', text: "A nodeSelector naming topology.kubernetes.io/zone with the value of the zone where most web pods run." },
      { id: 'D', text: "A pod affinity rule selecting the web pods' labels, using topology.kubernetes.io/zone as the topology key." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pod affinity with topologyKey topology.kubernetes.io/zone tells the scheduler to place the Redis pod in a zone that already runs a pod matching the web label selector, which is exactly same-zone co-location. Anti-affinity with the same key would keep Redis out of any zone with a web pod. A topology spread constraint balances the pods it selects across zones; it does not tie Redis to wherever web pods are. A nodeSelector on one zone value hard-codes a single zone, so it breaks co-location for web pods in the other two zones and concentrates all caches in one place.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Pod affinity","Topology"]
  },
  {
    id: "cncf-kcna-134",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Even spread of twelve replicas over zones",
    scenario: "A streaming service runs 12 replicas of a stateless API across zones a, b and c. The team wants the scheduler to keep the replica counts per zone within one of each other, but when one zone is out of capacity, new replicas should still be scheduled elsewhere rather than stay Pending.",
    question: "Which configuration fits best?",
    options: [
      { id: 'A', text: "A topologySpreadConstraint on topology.kubernetes.io/zone with maxSkew 1 and whenUnsatisfiable ScheduleAnyway." },
      { id: 'B', text: "A topologySpreadConstraint on topology.kubernetes.io/zone with maxSkew 1 and whenUnsatisfiable DoNotSchedule." },
      { id: 'C', text: "A required pod anti-affinity rule on topology.kubernetes.io/zone that selects the API's own pod labels." },
      { id: 'D', text: "A preferred node affinity rule that gives each of the three zone labels an identical weight of 100." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "topologySpreadConstraints express a maximum difference (maxSkew) between the busiest and emptiest topology domains; ScheduleAnyway turns the constraint into a strong scoring preference, so the scheduler keeps zones balanced when it can and still places pods when a zone is full. DoNotSchedule makes the skew a hard filter, so replicas would stay Pending rather than exceed the skew, which the team explicitly does not want. Required anti-affinity per zone allows only one replica per zone, so only three of twelve could ever run. Equal node-affinity weights score every zone the same and do nothing to count existing replicas per zone.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/",
    tags: ["Topology spread","Scheduling","Zones"]
  },
  {
    id: "cncf-kcna-135",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "How the scheduler chooses among nodes",
    scenario: "A new platform engineer is explaining to a product team why their pod landed on node-7 rather than node-2, even though both nodes met every requirement in the pod spec. She wants to describe the default kube-scheduler's decision process accurately.",
    question: "Which description of the default scheduler is correct?",
    options: [
      { id: 'A', text: "It picks the node with the most free memory and ignores CPU, labels and taints during selection." },
      { id: 'B', text: "It filters out nodes that cannot run the pod, then scores the remaining ones and picks the best." },
      { id: 'C', text: "It assigns pods to nodes in round-robin order, skipping any node whose kubelet has reported NotReady." },
      { id: 'D', text: "It asks each kubelet to bid for the pod and binds the pod to whichever node responds to it first." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The kube-scheduler works in two phases: filtering removes nodes that cannot run the pod (insufficient resources, untolerated taints, unmet affinity, and so on), and scoring ranks the feasible nodes using plugins such as resource balance and affinity preferences, after which the pod is bound to the highest-scoring node, with ties broken randomly. There is no round-robin assignment. Kubelets do not bid for pods; they watch the API server for pods already bound to their node. The scheduler considers CPU, memory, labels, taints and more, not free memory alone.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/",
    tags: ["kube-scheduler","Filtering","Scoring"]
  },
  {
    id: "cncf-kcna-136",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Who actually starts the scheduled pod",
    scenario: "During an onboarding session, a team walks through what happens after kubectl apply creates a new pod object. The API server has stored the pod, and the kube-scheduler has just chosen node-3 for it.",
    question: "What happens next?",
    options: [
      { id: 'A', text: "The API server pushes the pod manifest to node-3 and kube-proxy launches the pod's containers." },
      { id: 'B', text: "The scheduler sets the pod's nodeName, and the kubelet on node-3 sees the binding and starts it." },
      { id: 'C', text: "The controller manager copies the pod to node-3 and asks the container runtime there to start it." },
      { id: 'D', text: "The scheduler connects to node-3 over SSH and runs the container runtime to start the containers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The scheduler's only output is a binding: it records the chosen node in the pod's spec.nodeName through the API server. The kubelet on each node watches the API server for pods bound to it and asks the container runtime, through the CRI, to start the containers. The scheduler never logs in to nodes or runs containers itself. The controller manager runs controllers such as the ReplicaSet controller that create pod objects; it does not start them on nodes. kube-proxy programs Service networking rules and does not launch containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/",
    tags: ["kube-scheduler","kubelet","Architecture"]
  },
  {
    id: "cncf-kcna-137",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Pod with nodeName on a tainted node",
    scenario: "While debugging, an engineer creates a pod manifest that sets spec.nodeName: node-5 directly. node-5 carries a NoSchedule taint that the pod does not tolerate, and it is also cordoned, yet the pod starts running there.",
    question: "Why did this happen?",
    options: [
      { id: 'A', text: "The scheduler lets a pod onto cordoned node-5 whenever the pod names it in its spec.nodeName field." },
      { id: 'B', text: "NoSchedule taints and cordons only apply to pods owned by Deployments, not to standalone pods like this one." },
      { id: 'C', text: "Pods created from a manifest file are treated as static pods, so the node's taints are ignored by the kubelet." },
      { id: 'D', text: "Setting nodeName bypasses the scheduler, so the kubelet on node-5 runs the pod without the scheduler's filtering." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A pod whose spec.nodeName is already set is never processed by the scheduler, which is the component that honours NoSchedule taints and the unschedulable flag; the named node's kubelet simply picks the pod up and runs it, subject only to its own admission checks such as resource fit. Taints and cordons apply to every pod the scheduler places, whether or not a controller owns it. The scheduler is not involved at all here, so it does not grant any exception. Static pods are defined by files in the kubelet's manifest directory on the node, not by a manifest applied through kubectl.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename",
    tags: ["nodeName","Scheduling","Taints"]
  },
  {
    id: "cncf-kcna-138",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Critical pods pushing out batch jobs",
    scenario: "A fintech cluster is fully packed with low-importance batch pods. When the fraud-detection service scales up, its new pods sit in Pending for hours. The team wants the scheduler to make room for fraud-detection pods automatically by removing lower-importance pods when no node has space.",
    question: "What should the team configure?",
    options: [
      { id: 'A', text: "Apply a PodDisruptionBudget to the fraud-detection pods so the scheduler protects them over other workloads." },
      { id: 'B', text: "Put the batch pods in a namespace with a ResourceQuota so their requests are reduced when new pods arrive." },
      { id: 'C', text: "Give the fraud-detection pods a Guaranteed QoS class so the kubelet evicts batch pods when capacity runs short." },
      { id: 'D', text: "Assign the fraud-detection pods a PriorityClass with a higher value than the batch pods so preemption can occur." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Pod priority lets the scheduler preempt: when a pending pod cannot fit anywhere, the scheduler can evict lower-priority pods from a node to make room, so a higher PriorityClass on fraud detection is the intended mechanism. QoS class affects which pods the kubelet evicts under node resource pressure; it does not trigger evictions to fit a pending pod. A ResourceQuota caps a namespace's total requests at admission time and never shrinks running pods. A PodDisruptionBudget limits voluntary disruptions to the pods it covers and gives them no advantage in scheduling.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/",
    tags: ["PriorityClass","Preemption"]
  },
  {
    id: "cncf-kcna-139",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Which number the scheduler reads",
    scenario: "A container spec declares resources with requests of cpu 250m and memory 256Mi, and limits of cpu 1 and memory 1Gi. A developer wants to know which values determine whether the pod will fit on a node.",
    question: "Which values does the kube-scheduler use when placing the pod?",
    options: [
      { id: 'A', text: "The average of the requests and limits, which the scheduler treats as the expected load." },
      { id: 'B', text: "The requests, because the scheduler reserves the declared minimum on the node it chooses." },
      { id: 'C', text: "The limits, because the scheduler must reserve the maximum the container might ever consume." },
      { id: 'D', text: "Neither value; it uses live CPU and memory usage reported by the Metrics Server instead." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The scheduler sums the requests of pods on each node and only places a new pod where its requests fit into the node's allocatable capacity; limits are enforced later at run time by the kubelet and the kernel's cgroups. Scheduling on limits would allow far fewer pods per node and is not how Kubernetes works, which is why nodes can be overcommitted on limits. There is no averaging of requests and limits. The default scheduler does not consult live usage from the Metrics Server, so a busy node with low requests can still receive pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Resource requests","Limits","Scheduling"]
  },
  {
    id: "cncf-kcna-140",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Container keeps restarting with exit code 137",
    scenario: "A Java service's pod shows a rising restart count, and kubectl describe pod reports Last State: Terminated, Reason: OOMKilled, Exit Code: 137. The container has a memory request of 512Mi and a memory limit of 512Mi, and the node itself has plenty of free memory.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The node ran out of memory and the kubelet evicted the pod to reclaim resources for other workloads." },
      { id: 'B', text: "The container tried to use more memory than its 512Mi limit, so the kernel killed the container process." },
      { id: 'C', text: "The liveness probe timed out while the JVM, still under its limit, ran garbage collection, so it was killed." },
      { id: 'D', text: "The scheduler moved the pod because its memory request no longer fit on the node it was running on." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A memory limit is enforced by the container's cgroup: when the process exceeds it, the kernel's OOM killer terminates it, the kubelet records OOMKilled with exit code 137 (128 plus SIGKILL), and the container restarts under the pod's restart policy. Node-pressure eviction reports the pod as Evicted, not a container as OOMKilled, and the node here has free memory. The scheduler never moves running pods. A failed liveness probe also restarts the container, but the reason shown would reflect the probe failure rather than OOMKilled.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
    tags: ["Memory limits","OOMKilled","Troubleshooting"]
  },
  {
    id: "cncf-kcna-141",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Getting the Guaranteed QoS class",
    scenario: "A trading platform wants its order-matching pod to be the last candidate for eviction when a node comes under memory pressure. The pod has one container, and the team is choosing how to set its resources.",
    question: "Which resource setting gives the pod the Guaranteed QoS class?",
    options: [
      { id: 'A', text: "Set CPU and memory requests equal to the limits for the container, with every value filled in." },
      { id: 'B', text: "Set a memory request equal to the memory limit and leave CPU with no request and no limit at all." },
      { id: 'C', text: "Set CPU and memory requests only, leaving limits unset so the container can burst when needed." },
      { id: 'D', text: "Set CPU and memory limits only, with requests set lower so the pod fits on more nodes in the pool." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A pod is Guaranteed only when every container has both CPU and memory requests and limits, and each request equals its limit; Guaranteed pods are the last to be evicted under node pressure. Requests without limits produce Burstable. Requests lower than limits also produce Burstable. Leaving CPU unset while memory is set still leaves the pod Burstable, because both resources must be specified with equal values. Note that setting only limits makes Kubernetes default the requests to the same values, but a request set explicitly lower breaks that.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/",
    tags: ["QoS classes","Resource limits"]
  },
  {
    id: "cncf-kcna-142",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "First pods to go under memory pressure",
    scenario: "A node running a mix of workloads reaches its memory eviction threshold. It hosts a monitoring agent with requests equal to limits, a web pod with requests lower than its limits that is using less than its request, and a scratch pod created with no requests or limits at all.",
    question: "Which pod will the kubelet consider for eviction first?",
    options: [
      { id: 'A', text: "The web pod, because Burstable pods with limits set are evicted first, before BestEffort or Guaranteed pods." },
      { id: 'B', text: "Whichever pod started most recently, because the kubelet evicts pods in reverse order of their start time." },
      { id: 'C', text: "The monitoring agent, because Guaranteed pods reserve the most memory and their eviction reclaims the most." },
      { id: 'D', text: "The scratch pod, because pods with no requests or limits are BestEffort and are ranked first for eviction." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Under node-pressure eviction the kubelet ranks pods first by whether their usage exceeds their requests and then by priority and usage relative to requests; a BestEffort pod has no request, so any usage exceeds it and it is ranked ahead of the others, which is why BestEffort pods are generally evicted first. The Guaranteed agent is using no more than its request and is the least likely candidate. The web pod is Burstable but using less than its request, which places it behind the BestEffort pod. Start time is not an eviction criterion.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/",
    tags: ["Eviction","QoS classes"]
  },
  {
    id: "cncf-kcna-143",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A log collector on every node",
    scenario: "An operations team needs a Fluent Bit log collector running on every worker node in the cluster, including nodes the cluster autoscaler adds later. When a node is removed, its collector pod should disappear with it.",
    question: "Which workload resource fits this requirement?",
    options: [
      { id: 'A', text: "A Deployment whose replica count is manually kept equal to the current number of worker nodes." },
      { id: 'B', text: "A StatefulSet with one replica per node so each collector keeps a stable identity and volume." },
      { id: 'C', text: "A DaemonSet, which runs one copy of the pod on each eligible node as nodes join the cluster." },
      { id: 'D', text: "A CronJob that runs every minute on each node and ships any new log lines before it exits." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A DaemonSet ensures that all (or a selected subset of) nodes run one copy of a pod: when a node joins, the DaemonSet controller adds a pod for it, and when a node is removed, that pod is garbage collected, which is the standard pattern for node agents such as log collectors. A Deployment's replica count has no relationship to nodes, so replicas can double up on one node and new nodes get nothing. A StatefulSet gives stable identities but also does not place one pod per node. A CronJob runs short-lived Jobs on a schedule and does not guarantee one pod on every node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSet","Node agents"]
  },
  {
    id: "cncf-kcna-144",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Why app pods skip the control plane",
    scenario: "A student builds a kubeadm cluster with one control-plane node and two workers. She scales a Deployment to 10 replicas and notices none of them run on the control-plane node, even though it has spare CPU and memory.",
    question: "What keeps the pods off the control-plane node?",
    options: [
      { id: 'A', text: "The control-plane node has a label that the Deployment's selector explicitly excludes." },
      { id: 'B', text: "The control-plane node carries a NoSchedule taint that ordinary pods do not tolerate." },
      { id: 'C', text: "The kube-scheduler runs on that node and refuses to schedule pods onto its own host." },
      { id: 'D', text: "The kubelet is not installed on control-plane nodes, so no pods can be run there at all." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubeadm taints control-plane nodes with node-role.kubernetes.io/control-plane:NoSchedule, so the scheduler filters them out for any pod without a matching toleration; system components that must run there carry the toleration. In kubeadm clusters the kubelet does run on control-plane nodes, because the API server, scheduler and etcd themselves run there as static pods. A Deployment's selector matches pods, not nodes, so node labels are not excluded that way. The scheduler has no rule against its own host; it is the taint that repels the pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Taints","Control plane","kubeadm"]
  },
  {
    id: "cncf-kcna-145",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Preparing a node for a firmware update",
    scenario: "An administrator wants to stop any new pods from landing on node-4 ahead of a firmware update scheduled for tonight, but the pods already running there should keep serving traffic until the maintenance window begins.",
    question: "Which command achieves this?",
    options: [
      { id: 'A', text: "kubectl delete node node-4, which removes the node from scheduling but keeps its running pods intact." },
      { id: 'B', text: "kubectl taint nodes node-4 maint=true:NoExecute, which blocks new pods and keeps existing pods running." },
      { id: 'C', text: "kubectl drain node-4, which marks the node unschedulable and leaves all the running pods untouched." },
      { id: 'D', text: "kubectl cordon node-4, which marks the node unschedulable and leaves its running pods where they are." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl cordon sets the node's unschedulable flag, so the scheduler stops placing new pods there while existing pods continue running, which is exactly the pre-maintenance state required. kubectl drain cordons the node and then evicts its pods, so traffic would stop early. A NoExecute taint evicts running pods that do not tolerate it, so it is also disruptive now. Deleting the Node object removes it from the cluster and its pods are garbage collected, which is far more than stopping new placements.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/",
    tags: ["cordon","Node maintenance"]
  },
  {
    id: "cncf-kcna-146",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Drain stuck behind a disruption budget",
    scenario: "An administrator runs kubectl drain node-2 --ignore-daemonsets before a kernel upgrade. The command keeps retrying with the message Cannot evict pod as it would violate the pod's disruption budget. The pod belongs to a two-replica Deployment protected by a PodDisruptionBudget with minAvailable 2.",
    question: "Why does the drain not complete?",
    options: [
      { id: 'A', text: "Drain uses the Eviction API, and evicting the pod would drop available replicas below minAvailable." },
      { id: 'B', text: "The --ignore-daemonsets flag also skips Deployment pods, so the drain waits for a manual deletion." },
      { id: 'C', text: "The scheduler cannot place a replacement pod because node-2 is still marked as schedulable." },
      { id: 'D', text: "A minAvailable budget blocks every kind of pod removal, including a node crash, until it is deleted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "kubectl drain evicts pods through the Eviction API, which honours PodDisruptionBudgets; with two replicas and minAvailable 2, evicting either pod would leave one available, so the API refuses and drain retries. Scaling the Deployment up or relaxing the budget lets it proceed. --ignore-daemonsets only lets drain proceed past DaemonSet-managed pods and does not affect Deployment pods. Drain cordons node-2 first, so it is not schedulable, and the blockage happens before any replacement is involved. PDBs only govern voluntary disruptions through the Eviction API; involuntary events such as a node crash are not blocked.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/",
    tags: ["PodDisruptionBudget","drain","Eviction"]
  },
  {
    id: "cncf-kcna-147",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Running a custom scheduler alongside",
    scenario: "A research group has built its own scheduler for batch simulations that packs pods onto as few nodes as possible. They deploy it in the cluster with the name bin-packer and want only their simulation pods to use it, while every other workload keeps using the default scheduler.",
    question: "How do the simulation pods select the custom scheduler?",
    options: [
      { id: 'A', text: "Give the simulation pods a nodeSelector naming bin-packer so that the scheduler can recognise its pods." },
      { id: 'B', text: "Replace the kube-scheduler static pod manifest with bin-packer so all pods in the cluster are rescheduled." },
      { id: 'C', text: "Set spec.schedulerName to bin-packer in the simulation pods; other pods keep the default-scheduler value." },
      { id: 'D', text: "Annotate the simulation namespace with scheduler=bin-packer so every pod created there is routed to it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes supports several schedulers at once: each pod names the scheduler responsible for it in spec.schedulerName, which defaults to default-scheduler, and each scheduler only binds pods that name it. Setting schedulerName: bin-packer on the simulation pods therefore scopes the custom scheduler to them. There is no built-in namespace annotation that routes pods to a scheduler. Replacing the default scheduler's manifest changes placement for every workload, which the group does not want, and never reschedules running pods. nodeSelector filters nodes by label and has nothing to do with choosing a scheduler.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/configure-multiple-schedulers/",
    tags: ["schedulerName","kube-scheduler"]
  },
  {
    id: "cncf-kcna-148",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "ReplicaSet creates no pods at all",
    scenario: "A team scales a Deployment from 3 to 8 replicas in the analytics namespace. kubectl get pods still shows only 5 pods, and none of the missing ones appear even as Pending. The ReplicaSet's events show: Error creating: pods is forbidden: exceeded quota: compute-quota, requested: requests.cpu=500m.",
    question: "What is blocking the remaining replicas?",
    options: [
      { id: 'A', text: "The cluster autoscaler has hit its node limit, so the ReplicaSet controller stops creating new replicas." },
      { id: 'B', text: "The scheduler has marked the extra pods unschedulable, and they stay hidden until a node frees up CPU." },
      { id: 'C', text: "The namespace's ResourceQuota for CPU requests is used up, so the API server rejects new pods outright." },
      { id: 'D', text: "A LimitRange in the namespace sets a maximum CPU request below 500m, so every new pod is rejected." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "ResourceQuota is enforced by an admission controller when an object is created: once the namespace's total requests.cpu would exceed the quota, the API server rejects the pod, so no pod object exists to be Pending, and the ReplicaSet controller records the forbidden error in its events. Scheduler failures leave visible Pending pods with FailedScheduling events, which is not what is shown. A LimitRange maximum violation also rejects pods, but the message would name the LimitRange constraint, not an exceeded quota. The cluster autoscaler reacts to Pending pods and has no influence over the ReplicaSet controller creating pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["ResourceQuota","Admission","Troubleshooting"]
  },
  {
    id: "cncf-kcna-149",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Keeping payments off spot capacity",
    scenario: "A cluster mixes on-demand nodes with spot nodes that are labelled lifecycle=spot; on-demand nodes have no lifecycle label at all. The payments team must guarantee that its pods never land on spot nodes, while ordinary pods may run anywhere. Taints on the spot nodes are not an option because other teams' manifests cannot be changed.",
    question: "Which rule should the payments pods use?",
    options: [
      { id: 'A', text: "A required node affinity term with key lifecycle, operator In and value on-demand for every payments pod." },
      { id: 'B', text: "A preferred node affinity term with key lifecycle, operator NotIn and value spot, given a weight of 100." },
      { id: 'C', text: "A toleration for lifecycle=spot with effect NoSchedule and operator Equal added to the payments pods." },
      { id: 'D', text: "A required node affinity term with key lifecycle, operator NotIn and value spot for every payments pod." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A required node affinity term using NotIn excludes any node whose lifecycle label equals spot, and NotIn also matches nodes that lack the label entirely, so the unlabelled on-demand nodes remain eligible and spot nodes never are. The In on-demand variant matches nothing because on-demand nodes carry no lifecycle label, leaving the pods Pending. A preferred term is only a scoring hint, so payments pods could still land on spot nodes when on-demand capacity is short. A toleration grants permission onto tainted nodes; there is no taint here, and a toleration never keeps a pod away from anything.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity",
    tags: ["Node affinity","Operators","Spot nodes"]
  },
  {
    id: "cncf-kcna-150",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Node full of container images and logs",
    scenario: "A node's disk fills up with container images and logs. Shortly afterwards, kubectl describe node shows the condition DiskPressure=True, and newly created pods stop landing on that node even though its CPU and memory are mostly free.",
    question: "What is keeping new pods off the node?",
    options: [
      { id: 'A', text: "The kubelet cordons the node itself, which sets spec.unschedulable until an administrator uncordons it." },
      { id: 'B', text: "The node lifecycle controller taints the node with node.kubernetes.io/disk-pressure using NoSchedule." },
      { id: 'C', text: "The kube-scheduler deletes the node object and waits for the kubelet to register it again once clean." },
      { id: 'D', text: "The node lifecycle controller adds a NoExecute taint that immediately evicts all pods on that node." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes translates node conditions into taints: when DiskPressure is reported, the node gets the node.kubernetes.io/disk-pressure:NoSchedule taint, so the scheduler filters the node out for new pods that do not tolerate it, while the kubelet separately reclaims disk by garbage-collecting images and evicting pods if thresholds are crossed. The kubelet does not cordon its own node, so spec.unschedulable is not set. The scheduler never deletes Node objects. The disk-pressure taint uses NoSchedule, not NoExecute, so it does not by itself evict every running pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-nodes-by-condition",
    tags: ["Node conditions","Taints","DiskPressure"]
  }
];

export default CNCF_KCNA_QUESTIONS_6;
