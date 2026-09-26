export const CNCF_KCNA_FLASHCARDS_6 = [
  {
    id: "cncf-kcna-fc-126",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "nodeSelector vs node affinity: when do you need the more complex one?",
    hint: "Think about operators and soft rules.",
    back: "<strong>nodeSelector</strong> is an exact-match AND of key=value labels and is always a hard requirement. Use <strong>node affinity</strong> when you need set operators (<code>In</code>, <code>NotIn</code>, <code>Exists</code>, <code>DoesNotExist</code>, <code>Gt</code>, <code>Lt</code>), OR-ed terms, or a <strong>preferred</strong> (soft, weighted) rule instead of a required one.",
    tags: ["nodeSelector","Node affinity"]
  },
  {
    id: "cncf-kcna-fc-127",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does a taint do, and what does a toleration do?",
    hint: "One repels, one permits; neither attracts.",
    back: "A <strong>taint</strong> on a node repels pods that do not tolerate it. A <strong>toleration</strong> on a pod lets it be scheduled onto nodes with a matching taint, but it does <strong>not</strong> attract the pod there. To dedicate nodes, combine a taint (keep others off) with node affinity or nodeSelector (pull the right pods on).",
    tags: ["Taints","Tolerations"]
  },
  {
    id: "cncf-kcna-fc-128",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "The three taint effects: NoSchedule, PreferNoSchedule, NoExecute",
    hint: "Only one of them touches pods that are already running.",
    back: "<strong>NoSchedule</strong>: new non-tolerating pods are not scheduled; running pods stay. <strong>PreferNoSchedule</strong>: the scheduler tries to avoid the node but may still use it. <strong>NoExecute</strong>: new pods are blocked <em>and</em> running non-tolerating pods are evicted, optionally after <code>tolerationSeconds</code>.",
    tags: ["Taints","NoExecute"]
  },
  {
    id: "cncf-kcna-fc-129",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does \"IgnoredDuringExecution\" mean in a node affinity rule name?",
    hint: "When is the rule checked?",
    back: "The rule is evaluated only when the pod is <strong>scheduled</strong>. If the node's labels change later so the rule no longer matches, the running pod is <strong>not</strong> evicted or moved. Both <code>requiredDuringScheduling...</code> and <code>preferredDuringScheduling...</code> carry this suffix today.",
    tags: ["Node affinity"]
  },
  {
    id: "cncf-kcna-fc-130",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Pod affinity vs pod anti-affinity: what does the topologyKey decide?",
    hint: "Same what? Different what?",
    back: "Both place a pod relative to <strong>other pods</strong> matched by a label selector. The <code>topologyKey</code> is a node label that defines the domain: <code>kubernetes.io/hostname</code> means \"same/different node\", <code>topology.kubernetes.io/zone</code> means \"same/different zone\". Affinity pulls pods into a domain that already has matches; anti-affinity keeps them out.",
    tags: ["Pod affinity","Topology"]
  },
  {
    id: "cncf-kcna-fc-131",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "topologySpreadConstraints: what do maxSkew and whenUnsatisfiable control?",
    hint: "A difference between domains, and what to do when it cannot be met.",
    back: "<strong>maxSkew</strong> is the largest allowed difference in matching pod counts between the most and least populated topology domains (e.g. zones). <strong>whenUnsatisfiable: DoNotSchedule</strong> makes it a hard filter (pods stay Pending); <strong>ScheduleAnyway</strong> makes it a scoring preference. Prefer it over anti-affinity when you want <em>balance</em> across many replicas rather than one per domain.",
    tags: ["Topology spread"]
  },
  {
    id: "cncf-kcna-fc-132",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "The two phases of a kube-scheduler decision",
    hint: "Remove, then rank.",
    back: "<strong>Filtering</strong> drops nodes that cannot run the pod (resources, taints, affinity, ports, volumes). <strong>Scoring</strong> ranks the feasible nodes with plugins such as balanced allocation and affinity preferences. The pod is then <strong>bound</strong> to the highest-scoring node (ties broken randomly). If no node passes filtering, the pod stays Pending with a FailedScheduling event.",
    tags: ["kube-scheduler"]
  },
  {
    id: "cncf-kcna-fc-133",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is the kube-scheduler's output, and who acts on it?",
    hint: "It writes one field.",
    back: "The scheduler only <strong>binds</strong> the pod to a node by setting <code>spec.nodeName</code> through the API server. The <strong>kubelet</strong> on that node watches for pods bound to it and asks the container runtime (via CRI) to start the containers. The scheduler never runs containers itself.",
    tags: ["kube-scheduler","kubelet"]
  },
  {
    id: "cncf-kcna-fc-134",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What happens when a pod manifest already sets spec.nodeName?",
    hint: "Which component gets skipped?",
    back: "The <strong>scheduler is bypassed</strong>. The named node's kubelet runs the pod directly, so scheduler-enforced rules such as NoSchedule taints, cordons and affinity are not checked. If the node lacks resources the kubelet rejects the pod (e.g. OutOfcpu) instead of it waiting in Pending. If the node does not exist, the pod never runs.",
    tags: ["nodeName"]
  },
  {
    id: "cncf-kcna-fc-135",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Pod priority and preemption: what happens when a high-priority pod cannot fit?",
    hint: "Someone has to make room.",
    back: "The scheduler looks for a node where evicting <strong>lower-priority</strong> pods would let the pending pod fit, evicts them (gracefully) and nominates that node. Priority comes from a <strong>PriorityClass</strong> (an integer value). A class with <code>preemptionPolicy: Never</code> is queued ahead of lower priorities but never evicts anyone.",
    tags: ["PriorityClass","Preemption"]
  },
  {
    id: "cncf-kcna-fc-136",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Requests vs limits: which one affects scheduling?",
    hint: "One is a reservation, one is a ceiling.",
    back: "<strong>Requests</strong> are what the scheduler reserves: a pod fits only where the sum of requests stays within node allocatable. <strong>Limits</strong> are enforced at run time by the kubelet and kernel cgroups: exceeding a CPU limit causes throttling, exceeding a memory limit gets the container OOM-killed. Limits play no role in placement.",
    tags: ["Requests","Limits"]
  },
  {
    id: "cncf-kcna-fc-137",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "CPU limit exceeded vs memory limit exceeded: what happens to the container?",
    hint: "One resource is compressible.",
    back: "<strong>CPU</strong> is compressible: a container over its CPU limit is <strong>throttled</strong> but keeps running. <strong>Memory</strong> is not: a container over its memory limit is <strong>OOM-killed</strong> by the kernel (reason OOMKilled, exit code 137) and restarted according to the pod's restartPolicy.",
    tags: ["Limits","OOMKilled"]
  },
  {
    id: "cncf-kcna-fc-138",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "The three pod QoS classes and how each is assigned",
    hint: "Compare requests with limits.",
    back: "<strong>Guaranteed</strong>: every container has CPU and memory requests and limits, with requests equal to limits. <strong>Burstable</strong>: at least one container has a CPU or memory request or limit, but the pod is not Guaranteed. <strong>BestEffort</strong>: no container has any CPU or memory request or limit. Under node pressure, BestEffort pods are generally evicted first and Guaranteed last.",
    tags: ["QoS classes"]
  },
  {
    id: "cncf-kcna-fc-139",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Node-pressure eviction: how does the kubelet rank pods?",
    hint: "Usage versus request comes first.",
    back: "The kubelet ranks pods by: (1) whether their usage of the starved resource <strong>exceeds their request</strong>, (2) <strong>pod priority</strong>, (3) usage relative to request. That is why BestEffort pods (request of zero) usually go first and Guaranteed pods last. Evicted pods show status <strong>Evicted</strong>, unlike an OOMKilled container, which is killed by the kernel inside a running pod.",
    tags: ["Eviction","kubelet"]
  },
  {
    id: "cncf-kcna-fc-140",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "When do you choose a DaemonSet over a Deployment?",
    hint: "Count per node, not per cluster.",
    back: "Use a <strong>DaemonSet</strong> when exactly one copy of a pod must run on each (or each selected) node, following nodes as they join and leave: log collectors, monitoring agents, CNI and storage plugins. Use a <strong>Deployment</strong> when you want N interchangeable replicas placed wherever the scheduler sees fit.",
    tags: ["DaemonSet","Deployment"]
  },
  {
    id: "cncf-kcna-fc-141",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why don't regular pods run on a kubeadm control-plane node?",
    hint: "Look at the node's taints.",
    back: "kubeadm taints control-plane nodes with <code>node-role.kubernetes.io/control-plane:NoSchedule</code>. Pods without a matching toleration are filtered out. Removing the taint (common on single-node lab clusters) lets ordinary workloads run there.",
    tags: ["Taints","Control plane"]
  },
  {
    id: "cncf-kcna-fc-142",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "kubectl cordon vs kubectl drain",
    hint: "One of them moves pods.",
    back: "<strong>cordon</strong> marks a node unschedulable; running pods stay. <strong>drain</strong> cordons the node <em>and</em> evicts its pods through the Eviction API (respecting PodDisruptionBudgets). DaemonSet pods need <code>--ignore-daemonsets</code>. <strong>uncordon</strong> makes the node schedulable again.",
    tags: ["cordon","drain"]
  },
  {
    id: "cncf-kcna-fc-143",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does a PodDisruptionBudget protect against, and what does it not?",
    hint: "Voluntary versus involuntary.",
    back: "A PDB (<code>minAvailable</code> or <code>maxUnavailable</code>) limits <strong>voluntary</strong> disruptions that go through the Eviction API, such as <code>kubectl drain</code> or cluster autoscaler scale-down. It does <strong>not</strong> prevent involuntary disruptions like node crashes or kernel OOM kills, and a plain <code>kubectl delete pod</code> bypasses it.",
    tags: ["PodDisruptionBudget"]
  },
  {
    id: "cncf-kcna-fc-144",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do pods choose between multiple schedulers in one cluster?",
    hint: "A single field in the pod spec.",
    back: "Each pod names its scheduler in <code>spec.schedulerName</code> (default <code>default-scheduler</code>). Each scheduler only binds pods that name it, so a custom scheduler can run alongside the default. Within one kube-scheduler binary, <strong>scheduling profiles</strong> can also expose several names with different plugin configurations.",
    tags: ["schedulerName"]
  },
  {
    id: "cncf-kcna-fc-145",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "ResourceQuota vs LimitRange",
    hint: "Namespace total versus per object.",
    back: "<strong>ResourceQuota</strong> caps the <strong>aggregate</strong> consumption of a namespace (total CPU/memory requests and limits, object counts). <strong>LimitRange</strong> sets <strong>per-container or per-pod</strong> minimum, maximum and default requests/limits. Both are enforced at admission, so violating pods are rejected and never become Pending. With a compute quota in place, pods must declare requests, which a LimitRange default can supply.",
    tags: ["ResourceQuota","LimitRange"]
  },
  {
    id: "cncf-kcna-fc-146",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Node affinity operators: which one excludes a label value and also matches nodes without the label?",
    hint: "Think about what \"not in the set\" means for a missing key.",
    back: "<code>NotIn</code> matches nodes whose label value is not in the list <strong>and</strong> nodes that do not have the key at all. <code>DoesNotExist</code> matches only nodes lacking the key. <code>In</code> and <code>Exists</code> require the key to be present. <code>NotIn</code> and <code>DoesNotExist</code> are how you express node anti-affinity.",
    tags: ["Node affinity","Operators"]
  },
  {
    id: "cncf-kcna-fc-147",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which node conditions become taints automatically?",
    hint: "Taint nodes by condition.",
    back: "The node lifecycle controller adds taints such as <code>node.kubernetes.io/not-ready</code>, <code>unreachable</code>, <code>memory-pressure</code>, <code>disk-pressure</code>, <code>pid-pressure</code>, <code>network-unavailable</code> and <code>unschedulable</code>. not-ready and unreachable use <strong>NoExecute</strong> (pods get default 300-second tolerations); the pressure taints use <strong>NoSchedule</strong>.",
    tags: ["Node conditions","Taints"]
  },
  {
    id: "cncf-kcna-fc-148",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "A pod is Pending. What is the first command to run, and what are you looking for?",
    hint: "Events live on the object.",
    back: "Run <code>kubectl describe pod NAME</code> and read the <strong>Events</strong>. A <strong>FailedScheduling</strong> message such as <em>0/3 nodes are available: 3 Insufficient cpu</em> or <em>untolerated taint</em> tells you which filter failed. Also check unbound PVCs, which keep pods Pending too.",
    tags: ["Pending","Troubleshooting"]
  },
  {
    id: "cncf-kcna-fc-149",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why can a pod with 4 CPU requested stay Pending on a cluster with 12 idle CPUs?",
    hint: "Capacity must exist in one place.",
    back: "A pod must fit on <strong>one node</strong>. If the idle capacity is spread as 3 CPUs on each of four nodes, no node can satisfy a 4-CPU request, so filtering fails everywhere. Also, the scheduler compares against <strong>allocatable</strong> (capacity minus system and kube reservations) minus existing <strong>requests</strong>, not against live usage.",
    tags: ["Requests","Allocatable"]
  },
  {
    id: "cncf-kcna-fc-150",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Hard vs soft placement rules: which Kubernetes fields fall into each group?",
    hint: "Required versus preferred.",
    back: "<strong>Hard</strong> (filtering): nodeSelector, required node affinity, required pod (anti-)affinity, NoSchedule taints, topology spread with DoNotSchedule. <strong>Soft</strong> (scoring): preferred node affinity and pod (anti-)affinity with weights, PreferNoSchedule taints, topology spread with ScheduleAnyway. Soft rules never leave a pod Pending.",
    tags: ["Scheduling","Affinity"]
  }
];

export default CNCF_KCNA_FLASHCARDS_6;
