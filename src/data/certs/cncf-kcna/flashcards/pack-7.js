export const CNCF_KCNA_FLASHCARDS_7 = [
  {
    id: "cncf-kcna-fc-151",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Cluster Autoscaler: what triggers a scale-up, and what triggers a scale-down?",
    hint: "It watches pods, not CPU graphs.",
    back: "<strong>Scale-up</strong>: pods that are <strong>Pending</strong> because no node can fit them. <strong>Scale-down</strong>: nodes whose pods could all be rescheduled elsewhere and that stay underutilised for a period. It does not react to CPU utilisation directly; that is the job of the HPA at the pod level. Karpenter is an alternative node autoscaler with the same trigger.",
    tags: ["Cluster Autoscaler"]
  },
  {
    id: "cncf-kcna-fc-152",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "HPA, VPA and Cluster Autoscaler: what does each one change?",
    hint: "Replicas, pod size, node count.",
    back: "<strong>HPA</strong>: the number of <strong>pod replicas</strong>, from metrics such as CPU. <strong>VPA</strong>: the <strong>requests/limits</strong> of pods. <strong>Cluster Autoscaler</strong>: the number of <strong>nodes</strong>, from Pending pods. Avoid running HPA and VPA on the same CPU/memory metric for one workload.",
    tags: ["HPA","VPA","Cluster Autoscaler"]
  },
  {
    id: "cncf-kcna-fc-153",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do GPUs and other hardware show up to the scheduler?",
    hint: "Plugins advertise, containers ask.",
    back: "A <strong>device plugin</strong> (usually a DaemonSet) registers with the kubelet and advertises an <strong>extended resource</strong> such as <code>nvidia.com/gpu</code> in the node's capacity. Containers request it under <code>resources.limits</code> as an integer; it cannot be overcommitted or fractionally requested, and requests (if given) must equal limits.",
    tags: ["Device plugins","Extended resources"]
  },
  {
    id: "cncf-kcna-fc-154",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "volumeBindingMode Immediate vs WaitForFirstConsumer",
    hint: "Which comes first: the disk or the pod placement?",
    back: "<strong>Immediate</strong>: the PV is bound/provisioned as soon as the PVC exists, possibly in a zone the pod cannot use. <strong>WaitForFirstConsumer</strong>: binding waits until a pod using the claim is scheduled, so the scheduler's node choice (and its topology) decides where the volume is created. Use WaitForFirstConsumer for zonal or local storage.",
    tags: ["StorageClass","Volume binding"]
  },
  {
    id: "cncf-kcna-fc-155",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does \"Too many pods\" in a FailedScheduling event mean?",
    hint: "It is a count, not a size.",
    back: "Every node advertises a <strong>pods</strong> capacity from the kubelet's <code>maxPods</code> (110 by default; managed services often tie it to available pod IPs). Once a node runs that many pods it is filtered out even if CPU and memory are free. Fix by adding nodes or raising maxPods within CNI IP limits.",
    tags: ["maxPods"]
  },
  {
    id: "cncf-kcna-fc-156",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "hostPort vs NodePort Service",
    hint: "One is per pod, one is per Service.",
    back: "<strong>hostPort</strong> binds a container port on the node the pod runs on, so only one pod per node can use a given host port/protocol, and clients must know which node. <strong>NodePort</strong> is a Service that opens the same port (30000-32767 by default) on every node and load-balances to all backing pods. Prefer Services; use hostPort only for node agents.",
    tags: ["hostPort","NodePort"]
  },
  {
    id: "cncf-kcna-fc-157",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Required anti-affinity per node with more replicas than nodes: what happens?",
    hint: "Count the domains.",
    back: "Required anti-affinity on <code>kubernetes.io/hostname</code> allows at most <strong>one matching pod per node</strong>, so replicas beyond the node count stay <strong>Pending</strong> forever (unless the cluster autoscaler adds nodes). Use <strong>preferred</strong> anti-affinity or a topology spread constraint to spread without a hard ceiling.",
    tags: ["Pod anti-affinity"]
  },
  {
    id: "cncf-kcna-fc-158",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "In node affinity, how are multiple nodeSelectorTerms combined, and how are matchExpressions inside one term combined?",
    hint: "One is OR, one is AND.",
    back: "<strong>nodeSelectorTerms</strong> are <strong>ORed</strong>: a node satisfying any term qualifies. <strong>matchExpressions</strong> within one term are <strong>ANDed</strong>: all must match. If nodeSelector and node affinity are both set, both must be satisfied.",
    tags: ["Node affinity"]
  },
  {
    id: "cncf-kcna-fc-159",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How is a pod's effective resource request calculated when it has init containers?",
    hint: "Init containers run one at a time.",
    back: "Effective request = the <strong>larger</strong> of (a) the highest request among regular init containers and (b) the <strong>sum</strong> of app container requests (plus native sidecars, which keep running). Pod overhead from a RuntimeClass is added on top. The scheduler uses this figure to fit the pod.",
    tags: ["Init containers","Requests"]
  },
  {
    id: "cncf-kcna-fc-160",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Node capacity vs allocatable",
    hint: "What is held back, and for whom?",
    back: "<strong>Capacity</strong> is the node's total resources. <strong>Allocatable</strong> = capacity minus <strong>kube-reserved</strong> (kubelet, runtime), <strong>system-reserved</strong> (OS daemons) and the <strong>hard eviction threshold</strong>. The scheduler fits pod requests against allocatable, never the full capacity.",
    tags: ["Allocatable"]
  },
  {
    id: "cncf-kcna-fc-161",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does preemptionPolicy: Never do on a PriorityClass?",
    hint: "Queue position without eviction.",
    back: "Pods with that class are placed <strong>ahead of lower-priority pods in the scheduling queue</strong>, but the scheduler will <strong>not evict</strong> other pods to make room for them. They wait for capacity to free up naturally. The default is <code>PreemptLowerPriority</code>.",
    tags: ["PriorityClass"]
  },
  {
    id: "cncf-kcna-fc-162",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are pod scheduling gates and when are they useful?",
    hint: "A pod that is deliberately not ready to be scheduled.",
    back: "<code>spec.schedulingGates</code> lists named gates set at creation. While any gate remains, the pod shows <strong>SchedulingGated</strong> and the scheduler ignores it. An external controller (quota, batch admission) removes the gates to release it. This avoids FailedScheduling churn for pods that are not yet allowed to run. Gates can only be removed, never added after creation.",
    tags: ["Scheduling gates"]
  },
  {
    id: "cncf-kcna-fc-163",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why does the default scheduler never rebalance pods, and what does?",
    hint: "Placement happens once.",
    back: "The kube-scheduler only places <strong>new</strong> pods; it never moves running ones. The <strong>descheduler</strong> (kubernetes-sigs) evicts pods by policy, e.g. <code>LowNodeUtilization</code>, <code>RemoveDuplicates</code>, or topology spread violations, so their controllers recreate them and the scheduler places them better. Evictions respect PodDisruptionBudgets.",
    tags: ["Descheduler"]
  },
  {
    id: "cncf-kcna-fc-164",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the two built-in PriorityClasses and who should use them?",
    hint: "Both start with system-.",
    back: "<code>system-node-critical</code> (highest, for pods that must run on every node, like CNI agents) and <code>system-cluster-critical</code> (for cluster-wide essentials such as CoreDNS). Their values sit far above any user-defined class, so critical add-ons are preempted last and scheduled first.",
    tags: ["PriorityClass"]
  },
  {
    id: "cncf-kcna-fc-165",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which taint effect is a soft preference rather than a hard rule?",
    hint: "The name contains \"Prefer\".",
    back: "<strong>PreferNoSchedule</strong>: the scheduler tries to avoid placing non-tolerating pods on the node but uses it when nothing better is available. <strong>NoSchedule</strong> and <strong>NoExecute</strong> are hard: pods without a toleration are never placed (and NoExecute also evicts running ones).",
    tags: ["Taints"]
  },
  {
    id: "cncf-kcna-fc-166",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is pod overhead and where is it declared?",
    hint: "The cost of the sandbox itself.",
    back: "Pod overhead is the CPU/memory consumed by the <strong>pod sandbox</strong> beyond the containers, significant for VM-based runtimes such as Kata. It is declared in a <strong>RuntimeClass</strong> (<code>overhead.podFixed</code>), copied into pods at admission, added to requests by the <strong>scheduler</strong>, and counted by ResourceQuota and the kubelet.",
    tags: ["Pod overhead","RuntimeClass"]
  },
  {
    id: "cncf-kcna-fc-167",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do multiple kube-scheduler or controller-manager replicas avoid acting twice?",
    hint: "Only one holds the lock.",
    back: "They use <strong>leader election</strong> via a <strong>Lease</strong> object in <code>kube-system</code>. Only the current leader acts; standbys watch the lease and take over if the leader stops renewing it. The API server, by contrast, is active-active behind a load balancer.",
    tags: ["Leader election"]
  },
  {
    id: "cncf-kcna-fc-168",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Container vs virtual machine: what is isolated and what is shared?",
    hint: "Count the kernels.",
    back: "A <strong>VM</strong> virtualises hardware and runs its own guest <strong>kernel</strong> and OS on a hypervisor: strong isolation, heavier, slower to boot. A <strong>container</strong> is an isolated group of processes <strong>sharing the host kernel</strong>: lightweight, starts in seconds, but a kernel exploit can affect all containers on the host.",
    tags: ["Containers","Virtual machines"]
  },
  {
    id: "cncf-kcna-fc-169",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Linux namespaces vs cgroups",
    hint: "What you can see versus how much you can use.",
    back: "<strong>Namespaces</strong> limit what a process can <strong>see</strong>: PID, network, mount, UTS (hostname), IPC and user namespaces. <strong>cgroups</strong> limit what it can <strong>use</strong>: CPU, memory, I/O, PIDs. Kubernetes resource limits are enforced through cgroups (v2 on modern nodes).",
    tags: ["Namespaces","cgroups"]
  },
  {
    id: "cncf-kcna-fc-170",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What is an image layer, and why does layering speed up pulls?",
    hint: "Content addressing.",
    back: "Each filesystem-changing Dockerfile instruction produces a <strong>layer</strong>, a tarball identified by its <strong>content digest</strong>. Images are ordered stacks of layers. Identical layers (such as a shared base image) are stored and downloaded <strong>once</strong> per node and shared by every image that uses them.",
    tags: ["Layers"]
  },
  {
    id: "cncf-kcna-fc-171",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How should a Dockerfile be ordered to make the most of the build cache?",
    hint: "Least-changing first.",
    back: "Put instructions that change <strong>rarely</strong> first (base image, system packages, dependency manifests followed by the install step) and those that change <strong>often</strong> (application source) last. A change invalidates the cache for that instruction and <strong>every one after it</strong>.",
    tags: ["Dockerfile","Build cache"]
  },
  {
    id: "cncf-kcna-fc-172",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the parts of an image reference, and what is filled in when they are missing?",
    hint: "registry / repository : tag",
    back: "A reference is <code>[registry/][namespace/]repository[:tag][@digest]</code>, e.g. <code>ghcr.io/acme/api:1.2</code>. With no registry host, runtimes default to <strong>docker.io</strong>; single-name official images sit under <code>library/</code>; with no tag or digest, the tag is <strong>latest</strong>. So <code>nginx</code> means <code>docker.io/library/nginx:latest</code>.",
    tags: ["Container images","Registries"]
  },
  {
    id: "cncf-kcna-fc-173",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "The three OCI specifications",
    hint: "Package, run, ship.",
    back: "<strong>Image spec</strong>: how an image is packaged (manifest, config, layers). <strong>Runtime spec</strong>: how a filesystem bundle is run as a container (implemented by runc, crun, and others). <strong>Distribution spec</strong>: the HTTP API registries use to push and pull content. Together they let any compliant builder, runtime and registry interoperate.",
    tags: ["OCI"]
  },
  {
    id: "cncf-kcna-fc-174",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Where should environment-specific configuration live: in the image or outside it?",
    hint: "Build once, deploy many.",
    back: "<strong>Outside</strong>. Build one immutable image and inject per-environment settings at runtime through environment variables, <strong>ConfigMaps</strong> and <strong>Secrets</strong>. The same artefact tested in staging then runs in production. Baking config in forces a rebuild per environment and invites drift.",
    tags: ["Immutable images","Configuration"]
  },
  {
    id: "cncf-kcna-fc-175",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What problem does a multi-stage build solve?",
    hint: "Build tools do not need to ship.",
    back: "It separates the <strong>build environment</strong> (compilers, SDKs, caches) from the <strong>runtime image</strong>. Later stages <code>COPY --from</code> only the artefacts they need into a minimal base such as distroless or scratch, shrinking size and attack surface. Deleting files in a later layer of a single-stage build does not shrink the image.",
    tags: ["Multi-stage builds"]
  }
];

export default CNCF_KCNA_FLASHCARDS_7;
