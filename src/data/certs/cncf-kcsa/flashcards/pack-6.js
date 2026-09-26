export const CNCF_KCSA_FLASHCARDS_6 = [
  {
    id: 'cncf-kcsa-fc-126',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What is the Container Runtime Interface (CRI), and what sits on each side of it?',
    hint: 'One side is a node agent; the other side actually creates containers.',
    back: 'The <strong>CRI</strong> is the gRPC API the <strong>kubelet</strong> uses to ask a container runtime to pull images and create, start, stop and remove pod sandboxes and containers. On the other side sits a CRI-compatible runtime such as <strong>containerd</strong> or <strong>CRI-O</strong>, listening on a local Unix socket. Because the socket accepts any request from whoever can write to it, access to it is equivalent to root on the node.',
    tags: ['CRI', 'Container runtime', 'kubelet']
  },
  {
    id: 'cncf-kcsa-fc-127',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'containerd, CRI-O and runc: which is a high-level runtime and which is the low-level OCI runtime?',
    hint: 'One of them actually calls clone() and sets up namespaces and cgroups.',
    back: '<strong>containerd</strong> and <strong>CRI-O</strong> are high-level runtimes: they implement the CRI, manage images, snapshots and the container lifecycle. <strong>runc</strong> is a low-level OCI runtime: it takes an OCI bundle and creates the process with Linux namespaces, cgroups, capabilities, seccomp and LSM settings. Sandboxed low-level runtimes such as <strong>runsc</strong> (gVisor) or the Kata runtime can replace runc under the same high-level runtime, which is what RuntimeClass handlers select.',
    tags: ['Container runtime', 'OCI', 'runc']
  },
  {
    id: 'cncf-kcsa-fc-128',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What did the runc escape CVE-2019-5736 show about container runtime risk?',
    hint: 'A container process that was root, and a host binary it could reach.',
    back: 'A malicious container running as <strong>root</strong> could overwrite the host\'s <strong>runc binary</strong> through /proc/self/exe when someone exec\'d into it, then gain root on the node the next time runc ran. Lessons: patch the low-level runtime promptly, run containers as <strong>non-root</strong> (ideally with user namespaces), keep SELinux or AppArmor enforcing, and consider sandboxed runtimes for untrusted code, since runc bugs affect every container on the node.',
    tags: ['Container runtime', 'runc', 'Container escape']
  },
  {
    id: 'cncf-kcsa-fc-129',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Besides the handler, what do the scheduling and overhead fields of a RuntimeClass do?',
    hint: 'Not every node has the sandbox installed, and sandboxes cost resources.',
    back: '<strong>scheduling</strong> (nodeSelector and tolerations) is merged into every pod that uses the RuntimeClass, so those pods land only on nodes where the runtime handler is actually installed. <strong>overhead.podFixed</strong> declares the extra CPU and memory the sandbox itself consumes (for example a Kata VM); it is added to the pod\'s requests for scheduling and quota, and counted by the kubelet, so sandboxed pods do not silently overcommit a node.',
    tags: ['RuntimeClass', 'Scheduling', 'Pod overhead']
  },
  {
    id: 'cncf-kcsa-fc-130',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Where do the containerd and CRI-O sockets usually live, and how should they be protected?',
    hint: 'Think run directories and who owns them.',
    back: 'containerd listens by default on <strong>/run/containerd/containerd.sock</strong>; CRI-O on <strong>/var/run/crio/crio.sock</strong>. Both should be owned by root with no world access, and <strong>never mounted into pods</strong> through hostPath: anyone who can write to the socket can start a privileged container with the host filesystem mounted. Build workloads that need to create images should use rootless builders instead of the node runtime.',
    tags: ['Container runtime', 'Sockets', 'Hardening']
  },
  {
    id: 'cncf-kcsa-fc-131',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How can a cluster make RuntimeDefault seccomp apply to pods that do not set any seccomp profile?',
    hint: 'It is a node-level setting, not a pod field.',
    back: 'Enable the kubelet\'s <strong>seccompDefault</strong> option (config field <code>seccompDefault: true</code> or flag <code>--seccomp-default</code>, stable since Kubernetes 1.27). The kubelet then uses <strong>RuntimeDefault</strong> instead of <strong>Unconfined</strong> for any container without an explicit profile. Test first: a workload that relied on a syscall the runtime\'s default profile blocks will start failing, and a pod can still opt out by setting Unconfined unless admission policy forbids it.',
    tags: ['seccomp', 'kubelet', 'Defaults']
  },
  {
    id: 'cncf-kcsa-fc-132',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does kube-proxy do on each node, and what security job is it commonly mistaken for?',
    hint: 'It makes virtual IPs work; it does not decide who may talk.',
    back: '<strong>kube-proxy</strong> watches Services and EndpointSlices and programs the node (iptables, IPVS or nftables rules) so traffic to a Service\'s virtual IP or NodePort is forwarded to a backend pod. It does <strong>not</strong> enforce <strong>NetworkPolicy</strong>, perform TLS or authenticate clients. Pod-to-pod filtering needs a policy-capable CNI plugin, and encryption or identity needs something like a service mesh.',
    tags: ['kube-proxy', 'Services', 'NetworkPolicy']
  },
  {
    id: 'cncf-kcsa-fc-133',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which proxy modes does current kube-proxy support on Linux?',
    hint: 'Three kernel-based back ends; the oldest mode is gone.',
    back: '<strong>iptables</strong> (the long-standing default), <strong>IPVS</strong> (kernel load balancer with hash tables, suited to very many Services) and <strong>nftables</strong> (the successor to iptables, stable since 1.33). The old <strong>userspace</strong> mode, where kube-proxy itself relayed connections, was removed in 1.26. Mode choice affects performance and rule management, not NetworkPolicy, which no mode enforces.',
    tags: ['kube-proxy', 'iptables', 'nftables']
  },
  {
    id: 'cncf-kcsa-fc-134',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'kube-proxy ports 10249 and 10256: what does each serve and what is its default bind address?',
    hint: 'One is for Prometheus, one is for load balancer health checks.',
    back: '<strong>10249</strong> serves <strong>metrics</strong> (metricsBindAddress) and defaults to <strong>127.0.0.1</strong>, so only local agents can scrape it. <strong>10256</strong> serves <strong>healthz</strong> (healthzBindAddress) and defaults to <strong>0.0.0.0</strong>, because cloud load balancers probe it to learn whether a node can take traffic. Widening the metrics bind to all interfaces exposes unauthenticated internals, a common hardening finding.',
    tags: ['kube-proxy', 'Ports', 'Metrics']
  },
  {
    id: 'cncf-kcsa-fc-135',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What is the default NodePort range, and why does a NodePort Service widen the attack surface?',
    hint: 'Count the nodes that start listening.',
    back: 'The API server allocates NodePorts from <strong>30000-32767</strong> by default (service-node-port-range). A NodePort Service opens that port on <strong>every node</strong>, on all of its addresses unless kube-proxy\'s nodePortAddresses narrows them, so any network that can reach any node can reach the Service. Prefer ClusterIP plus an Ingress or LoadBalancer with firewalling, and restrict node exposure at the network layer.',
    tags: ['NodePort', 'Services', 'Network exposure']
  },
  {
    id: 'cncf-kcsa-fc-136',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'externalTrafficPolicy Cluster vs Local: what does each trade off?',
    hint: 'Source IP versus even spreading.',
    back: '<strong>Cluster</strong> (default): any node accepts external traffic and may forward it to a pod on another node, <strong>SNATing</strong> it to the node IP; load spreads evenly but pods lose the client address. <strong>Local</strong>: nodes forward only to their own endpoints, so the <strong>client IP is preserved</strong> for logging, rate limiting and allowlists; nodes without a backend fail health checks on 10256, and load can be uneven across pods.',
    tags: ['kube-proxy', 'externalTrafficPolicy', 'Source IP']
  },
  {
    id: 'cncf-kcsa-fc-137',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Why does kube-proxy usually run as a privileged, host-network DaemonSet, and what follows for its security?',
    hint: 'Whose firewall rules is it editing?',
    back: 'kube-proxy must program <strong>the node\'s own</strong> packet-filtering and IPVS tables, so it runs in the host network namespace with privileges (or NET_ADMIN and related capabilities). A compromise of the kube-proxy pod is therefore close to a node compromise. Protect it like a node component: keep its image patched, bind its metrics to loopback, lock down its kubeconfig (0600, root:root) and limit its service account to system:node-proxier.',
    tags: ['kube-proxy', 'DaemonSet', 'Privileges']
  },
  {
    id: 'cncf-kcsa-fc-138',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does loadBalancerSourceRanges do, and where is it enforced?',
    hint: 'It only applies to one Service type.',
    back: 'On a Service of <strong>type LoadBalancer</strong>, <strong>loadBalancerSourceRanges</strong> lists the client CIDRs allowed to connect. Cloud providers that support it program the rule into the load balancer or its firewall, and kube-proxy also installs matching filter rules on the nodes. It is ignored for ClusterIP and plain NodePort Services, and the node-level filter only works when the load balancer passes the real client address through.',
    tags: ['LoadBalancer', 'Services', 'Network exposure']
  },
  {
    id: 'cncf-kcsa-fc-139',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which securityContext fields can be set only on containers, and which only on the pod?',
    hint: 'Privilege-related fields are per container; volume and kernel settings are per pod.',
    back: '<strong>Container only</strong>: privileged, allowPrivilegeEscalation, capabilities, readOnlyRootFilesystem and procMount. <strong>Pod only</strong>: fsGroup, fsGroupChangePolicy, supplementalGroups and sysctls, because they affect shared volumes or the shared kernel namespaces. <strong>Both</strong>: runAsUser, runAsGroup, runAsNonRoot, seLinuxOptions, seccompProfile and appArmorProfile, where the container value overrides the pod value.',
    tags: ['Security context', 'Pod security']
  },
  {
    id: 'cncf-kcsa-fc-140',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does privileged: true actually give a container?',
    hint: 'Far more than root inside the container.',
    back: 'A privileged container gets <strong>all Linux capabilities</strong>, access to the node\'s <strong>devices</strong> under /dev, and runs without seccomp and AppArmor confinement, with writable /sys. That lets it mount the host disk, load kernel modules or manipulate the host network, so it is effectively root on the node. Grant specific capabilities instead, and use baseline or restricted Pod Security to forbid privileged pods outside system namespaces.',
    tags: ['Pod security', 'Privileged', 'Capabilities']
  },
  {
    id: 'cncf-kcsa-fc-141',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'If a pod sets no seccomp profile, what profile does its container run with by default?',
    hint: 'The default is the least restrictive choice.',
    back: '<strong>Unconfined</strong>: no syscall filtering at all, unless the kubelet has <strong>seccompDefault</strong> enabled, in which case RuntimeDefault is used. This is why the restricted Pod Security Standard requires an explicit seccompProfile of <strong>RuntimeDefault</strong> or <strong>Localhost</strong>, and why hardening guides recommend enabling seccompDefault on nodes.',
    tags: ['seccomp', 'Defaults', 'Pod security']
  },
  {
    id: 'cncf-kcsa-fc-142',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Safe vs unsafe sysctls in a pod spec: what is the difference and who decides?',
    hint: 'Namespaced is not the same as safe.',
    back: '<strong>Safe</strong> sysctls are namespaced and isolated between pods on a node, such as net.ipv4.ip_local_port_range or kernel.shm_rmid_forced; they are allowed by default. <strong>Unsafe</strong> sysctls could affect other pods or the node, so the kubelet rejects pods using them unless the node admin lists them in <code>--allowed-unsafe-sysctls</code>. Non-namespaced (node-level) sysctls cannot be set from a pod at all. The baseline Pod Security Standard permits only the safe set.',
    tags: ['sysctls', 'Pod security', 'kubelet']
  },
  {
    id: 'cncf-kcsa-fc-143',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'hostPort vs hostNetwork: how do their risks differ?',
    hint: 'One maps a port; the other shares the whole stack.',
    back: '<strong>hostPort</strong> maps one container port onto the node\'s IP, bypassing Service abstraction and NetworkPolicy expectations and limiting scheduling to one such pod per node. <strong>hostNetwork</strong> puts the pod in the node\'s network namespace: it can bind any host port, see all host interfaces, reach loopback-only node services and sniff traffic with enough capabilities. Baseline Pod Security forbids hostNetwork and disallows hostPorts unless they are on an approved list.',
    tags: ['hostPort', 'hostNetwork', 'Host namespaces']
  },
  {
    id: 'cncf-kcsa-fc-144',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'When is allowPrivilegeEscalation effectively true even if you set it to false?',
    hint: 'Two conditions already hand out the privileges it guards.',
    back: 'allowPrivilegeEscalation is <strong>always true</strong> when the container is <strong>privileged</strong> or holds <strong>CAP_SYS_ADMIN</strong>, because those already grant what no_new_privs is meant to withhold. Setting false alongside either is contradictory and gives no protection. The restricted Pod Security Standard therefore requires allowPrivilegeEscalation false together with non-privileged containers and capabilities dropped to ALL (plus NET_BIND_SERVICE at most).',
    tags: ['allowPrivilegeEscalation', 'Capabilities', 'Pod security']
  },
  {
    id: 'cncf-kcsa-fc-145',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Name the three host-namespace fields in a pod spec and what each shares with the node.',
    hint: 'Network, processes, inter-process communication.',
    back: '<strong>hostNetwork</strong>: the node\'s network stack, interfaces and ports. <strong>hostPID</strong>: the node\'s process table, so the pod sees and can signal host processes. <strong>hostIPC</strong>: the node\'s System V IPC and POSIX shared memory. Each breaks the container boundary, so the baseline Pod Security Standard forbids all three.',
    tags: ['Host namespaces', 'Pod security']
  },
  {
    id: 'cncf-kcsa-fc-146',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Why is CAP_SYS_ADMIN treated as almost equivalent to root?',
    hint: 'It is the catch-all capability.',
    back: '<strong>CAP_SYS_ADMIN</strong> covers a huge, loosely related set of operations: mounting filesystems, many namespace operations, some device and kernel tunables, and more. Numerous container-escape techniques rely on it, for example mounting cgroup filesystems or the host disk. It also makes allowPrivilegeEscalation effectively true. Grant a narrow capability such as NET_ADMIN or NET_BIND_SERVICE instead.',
    tags: ['Capabilities', 'SYS_ADMIN', 'Container escape']
  },
  {
    id: 'cncf-kcsa-fc-147',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How long does an emptyDir volume live, and what happens when medium is Memory?',
    hint: 'It is tied to the pod, not the container.',
    back: 'An <strong>emptyDir</strong> is created when the pod is assigned to a node and <strong>deleted when the pod is removed</strong>; it survives container restarts within the pod. With <code>medium: Memory</code> it is a tmpfs in RAM, useful for sensitive scratch data that should never touch disk, but its contents count against the container\'s <strong>memory limit</strong>. It pairs well with readOnlyRootFilesystem for writable scratch paths.',
    tags: ['emptyDir', 'Volumes', 'Pod security']
  },
  {
    id: 'cncf-kcsa-fc-148',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does setting hostUsers: false do for a pod?',
    hint: 'Root inside, nobody outside.',
    back: 'It runs the pod in a <strong>Linux user namespace</strong>: UIDs and GIDs in the container are mapped to an unprivileged range on the host, so a process that is root in the container is an ordinary user on the node. Capabilities are only valid inside the pod\'s namespaces, which blunts many escape techniques. It needs a kernel, filesystem and runtime that support ID-mapped mounts, and it still shares the host kernel.',
    tags: ['User namespaces', 'Pod security', 'Isolation']
  },
  {
    id: 'cncf-kcsa-fc-149',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Ephemeral debug containers: what permission adds them, and what limits apply?',
    hint: 'A subresource, and fields they cannot have.',
    back: 'kubectl debug adds them through the pod\'s <strong>ephemeralcontainers</strong> subresource, so RBAC must grant update on pods/ephemeralcontainers; treat that like pods/exec, since it gives code execution in the pod. Ephemeral containers cannot declare ports, probes or resource requests, cannot be removed or changed once added, and are still subject to Pod Security Admission, so a privileged debug container is rejected in a restricted namespace.',
    tags: ['Ephemeral containers', 'RBAC', 'Debugging']
  },
  {
    id: 'cncf-kcsa-fc-150',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How is an AppArmor profile applied to a container in current Kubernetes?',
    hint: 'It moved from an annotation to a first-class field.',
    back: 'Set <strong>securityContext.appArmorProfile</strong> (a field since 1.30, replacing the old annotation) with type <strong>RuntimeDefault</strong>, <strong>Localhost</strong> plus a localhostProfile name that must be loaded on the node, or <strong>Unconfined</strong>. AppArmor confines file paths, capabilities and network access by path-based rules, complementing seccomp, which filters syscalls. It works only on nodes whose kernel has AppArmor enabled.',
    tags: ['AppArmor', 'Security context', 'Linux security modules']
  }
];

export default CNCF_KCSA_FLASHCARDS_6;
