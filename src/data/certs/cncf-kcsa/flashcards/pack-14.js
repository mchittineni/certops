export const CNCF_KCSA_FLASHCARDS_14 = [
  {
    id: "cncf-kcsa-fc-326",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "After remote code execution in a pod, what decides how far the attacker can go?",
    hint: "Credentials, privilege, reach.",
    back: "<strong>Credentials</strong>: the service account token and what RBAC grants it, plus any cloud identity. <strong>Privilege</strong>: privileged mode, capabilities, host namespaces, hostPath, runAsUser. <strong>Reach</strong>: which services, the API server, the kubelet and cloud metadata are reachable over the network. Least privilege on all three turns an RCE into a contained incident.",
    tags: ["Malicious code execution","Blast radius"]
  },
  {
    id: "cncf-kcsa-fc-327",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What do distroless or minimal images protect against, and what do they not?",
    hint: "Tools vs code execution.",
    back: "They remove <strong>shells, package managers and utilities</strong>, so attackers lack ready tools and scanners report fewer CVEs. They do <strong>not</strong> stop code execution through the application's own runtime (Python, Java, Node), nor downloads of new payloads. Pair them with non-root users, read-only root filesystems, seccomp and egress controls.",
    tags: ["Distroless","Images"]
  },
  {
    id: "cncf-kcsa-fc-328",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Container writable layer vs emptyDir vs PersistentVolume: how long does attacker-written data survive?",
    hint: "Container, pod, beyond the pod.",
    back: "<strong>Writable layer</strong>: gone when the container is recreated, including a restart. <strong>emptyDir</strong>: survives container restarts, deleted with the <strong>pod</strong>. <strong>PersistentVolume</strong>: survives pod deletion and rollouts until the data is removed. When cleaning up, find which of the three the attacker wrote to.",
    tags: ["Volumes","Forensics"]
  },
  {
    id: "cncf-kcsa-fc-329",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which kubectl commands depend on pods/exec, and why does that matter?",
    hint: "One of them looks like a file tool.",
    back: "<code>kubectl exec</code> and <strong><code>kubectl cp</code></strong>, which runs <code>tar</code> in the container through exec. Anyone with pods/exec can run arbitrary commands and copy data out of any container in scope, including reading mounted Secrets and tokens. Treat it as <strong>code execution and data access</strong>, and grant it sparingly.",
    tags: ["pods/exec","RBAC"]
  },
  {
    id: "cncf-kcsa-fc-330",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How do you quarantine a compromised pod while keeping it for forensics?",
    hint: "Labels detach; policy isolates.",
    back: "<strong>Relabel</strong> the pod so it leaves the Service selector and its ReplicaSet (which starts a clean replacement); apply a <strong>deny-all NetworkPolicy</strong> matching the quarantine label; <strong>cordon</strong> the node; then capture memory, filesystem and logs before deleting anything. Rotate any credentials the pod held.",
    tags: ["Incident response","Forensics"]
  },
  {
    id: "cncf-kcsa-fc-331",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Runtime detection vs runtime enforcement: which tools do which?",
    hint: "Alert vs block.",
    back: "<strong>Detection</strong>: Falco watches syscalls and alerts on rules such as a shell in a container. <strong>Enforcement</strong>: Tetragon (eBPF, can kill processes), KubeArmor (LSM-based allow and deny policies), seccomp and AppArmor/SELinux profiles block actions in the kernel. Detection tells you it happened; enforcement stops it, at the risk of breaking legitimate behaviour.",
    tags: ["Runtime security","Falco","eBPF"]
  },
  {
    id: "cncf-kcsa-fc-332",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What does the Security Profiles Operator do?",
    hint: "Record, distribute, reference.",
    back: "A Kubernetes SIG project that manages <strong>seccomp, AppArmor and SELinux profiles</strong> as custom resources: it can <strong>record</strong> the syscalls a workload uses to generate a tailored profile, <strong>distribute</strong> profiles to nodes, and let pods reference them as <code>Localhost</code> profiles. It replaces hand-copying JSON files onto every node.",
    tags: ["Seccomp","Security Profiles Operator"]
  },
  {
    id: "cncf-kcsa-fc-333",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How did CVE-2021-25741 turn a subPath volume mount into host file access, and what were the mitigations?",
    hint: "A link planted inside a volume, then followed by the kubelet.",
    back: "A user who could create pods wrote a <strong>symlink</strong> inside a volume (such as an emptyDir) pointing outside it, then started a container that mounted that path with <strong>subPath</strong>. The kubelet resolved the link while setting up the mount, so the container received a host file or directory. Patched kubelets fixed it; interim mitigations were disabling the <strong>VolumeSubpath</strong> feature gate or using admission policy to stop untrusted users creating pods with subPath mounts. Lesson: pod-creation rights plus a node-side bug can equal node compromise, so patch kubelets quickly and limit who can create pods.",
    tags: ["Container escape","subPath","Kubelet"]
  },
  {
    id: "cncf-kcsa-fc-334",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why should Helm chart hooks be part of a chart security review?",
    hint: "They are manifests too.",
    back: "Hooks (pre-install, post-install, pre-upgrade and so on) are <strong>Kubernetes objects</strong>, usually Jobs, that Helm creates during the release lifecycle. They can run <strong>any image with any service account</strong> the chart defines, sometimes before the main resources exist. Render with <code>helm template</code> and review hooks alongside everything else.",
    tags: ["Helm","Supply chain"]
  },
  {
    id: "cncf-kcsa-fc-335",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What does the NET_RAW capability allow, and why drop it?",
    hint: "Raw sockets on a shared bridge.",
    back: "Raw and packet sockets: crafting <strong>ICMP</strong>, <strong>ARP</strong> and arbitrary packets, which enables ARP or DNS <strong>spoofing</strong> of neighbours on some CNI setups and network scanning. Several runtimes still grant it by default. Most applications never need it, so drop it (or <code>drop: [ALL]</code>, as Restricted Pod Security requires).",
    tags: ["Capabilities","Attacker on the network"]
  },
  {
    id: "cncf-kcsa-fc-336",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How can an attacker in a pod discover services without API credentials?",
    hint: "Every pod can ask one component.",
    back: "Through <strong>cluster DNS</strong>: service names, SRV records for named ports, and the environment variables injected for Services in the same namespace. DNS performs no authorization. Assume attackers will map the cluster, and rely on <strong>NetworkPolicy</strong> and <strong>service authentication</strong> rather than obscurity.",
    tags: ["DNS","Lateral movement"]
  },
  {
    id: "cncf-kcsa-fc-337",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which pod settings let a pod capture other pods' network traffic on its node?",
    hint: "Share the host network, then capture.",
    back: "<strong>hostNetwork: true</strong> (share the node's network namespace and see its interfaces, including other pods' veth links) combined with <strong>NET_RAW</strong> or <strong>NET_ADMIN</strong> for packet capture, or simply privileged mode. The Baseline Pod Security Standard forbids hostNetwork and does not allow adding NET_ADMIN. Encryption between workloads limits what captured traffic reveals.",
    tags: ["hostNetwork","Capabilities"]
  },
  {
    id: "cncf-kcsa-fc-338",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is write access to Endpoints or EndpointSlices treated as a traffic-hijacking permission?",
    hint: "Who decides where a Service sends packets?",
    back: "Endpoints and EndpointSlices tell kube-proxy and ingress controllers <strong>where a Service's traffic goes</strong>. Anyone who can write them can point a Service, especially a selector-less one, at an address they control. After <strong>CVE-2021-25740</strong>, Kubernetes 1.22 removed write access to them from the built-in <strong>edit and admin</strong> roles for new clusters.",
    tags: ["Endpoints","RBAC"]
  },
  {
    id: "cncf-kcsa-fc-339",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is update on the coredns ConfigMap effectively cluster-wide traffic control?",
    hint: "The Corefile decides every answer.",
    back: "CoreDNS loads its <strong>Corefile</strong> from the <code>coredns</code> ConfigMap in kube-system and reloads on change. Editing it can add <code>rewrite</code>, <code>hosts</code> or <code>forward</code> rules that send any service or external name to attacker addresses for <strong>every pod</strong>. Restrict writes to kube-system ConfigMaps to the platform team and alert on changes.",
    tags: ["CoreDNS","RBAC"]
  },
  {
    id: "cncf-kcsa-fc-340",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What does CNI transparent encryption (WireGuard or IPsec) protect, and what not?",
    hint: "Between nodes, not within one.",
    back: "It encrypts pod traffic <strong>between nodes</strong>, defeating sniffing on the underlying network. It does <strong>not</strong> encrypt traffic between pods on the <strong>same node</strong>, protect against root on a node (which sees local traffic in cleartext), authenticate workloads to each other, or cover external destinations. Use mesh or application mTLS for workload identity and end-to-end protection.",
    tags: ["Encryption","WireGuard"]
  },
  {
    id: "cncf-kcsa-fc-341",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why does a default-deny egress policy that allows DNS still leave an exfiltration channel?",
    hint: "Queries can carry data.",
    back: "If cluster DNS <strong>forwards external names upstream</strong>, a pod can encode data into subdomain queries for an attacker's domain (DNS tunnelling), and the attacker's authoritative server receives it. Mitigate with <strong>DNS-aware egress policies</strong> (for example Cilium FQDN rules), a filtering upstream resolver, and <strong>query logging</strong> to spot high-volume, high-entropy lookups.",
    tags: ["DNS","Exfiltration"]
  },
  {
    id: "cncf-kcsa-fc-342",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Where do you see which pod-to-pod connections were allowed or dropped?",
    hint: "NetworkPolicy itself keeps no records.",
    back: "In the <strong>CNI's flow observability</strong>: Cilium <strong>Hubble</strong> shows flows with policy verdicts, and Calico provides flow logs. The API server audit log never sees pod traffic, kube-proxy does not log NetworkPolicy drops, and NetworkPolicy objects have no connection status. Flow data reveals scanning and lateral movement.",
    tags: ["Detection","Cilium"]
  },
  {
    id: "cncf-kcsa-fc-343",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "PostgreSQL sslmode require vs verify-full: what does each defend against?",
    hint: "Encryption vs authentication of the server.",
    back: "<strong>require</strong>: encrypts the connection but does not verify the server certificate, so an attacker in the middle can present their own. <strong>verify-full</strong>: verifies the certificate chain against a trusted CA <strong>and</strong> the hostname, defeating interception and impersonation. The same rule applies to any TLS client: encryption without verification is not authentication.",
    tags: ["TLS","Databases"]
  },
  {
    id: "cncf-kcsa-fc-344",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How do you keep a LoadBalancer Service off the public internet on a managed cloud?",
    hint: "Default is public.",
    back: "Add the provider's <strong>internal load balancer annotation</strong> (for example an internal scheme on AWS, internal type on GKE or AKS) so it gets a private VPC address, and optionally set <code>loadBalancerSourceRanges</code>. Or use a ClusterIP Service behind an internal ingress. A plain LoadBalancer Service usually gets a <strong>public</strong> IP.",
    tags: ["LoadBalancer","Exposure"]
  },
  {
    id: "cncf-kcsa-fc-345",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why do metrics endpoints matter to an attacker on the pod network?",
    hint: "Reconnaissance.",
    back: "They often reveal <strong>object names, labels, versions, internal hostnames and error details</strong>; kube-state-metrics exposes metadata of every object, including Secret names. Unauthenticated <code>/debug/pprof</code> endpoints can leak more. Limit reach with NetworkPolicy, require authentication (for example <strong>kube-rbac-proxy</strong>), and disable profiling where unused.",
    tags: ["Metrics","Information disclosure"]
  },
  {
    id: "cncf-kcsa-fc-346",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "How do CPU limits change the impact of a cryptominer in a compromised container?",
    hint: "Throttling vs removal.",
    back: "The kernel <strong>throttles</strong> a container that reaches its CPU limit, so the miner cannot starve neighbours on the node, and a namespace <strong>ResourceQuota</strong> caps the total the compromised workload can claim. Limits do <strong>not</strong> remove or detect the miner; runtime detection and response still have to find it.",
    tags: ["Resource limits","Cryptomining"]
  },
  {
    id: "cncf-kcsa-fc-347",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Why is write access to shared ConfigMaps a lateral-movement risk?",
    hint: "Configuration can be code.",
    back: "Workloads often load <strong>startup scripts, proxy routes, feature flags or plugin lists</strong> from ConfigMaps. An attacker with update on those ConfigMaps can inject code or redirect traffic in every consumer the next time it reads or restarts. Scope service accounts to the specific ConfigMaps they own with <code>resourceNames</code>.",
    tags: ["ConfigMaps","Lateral movement"]
  },
  {
    id: "cncf-kcsa-fc-348",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which runtime signals suggest a compromised container, and where does each come from?",
    hint: "Process, file, network, API.",
    back: "<strong>Processes</strong>: shells or tools the image never runs (runtime sensors such as Falco or Tetragon). <strong>Files</strong>: writes to binaries or config, new executables (drift detection). <strong>Network</strong>: connections to unusual destinations or mining pools, scanning (CNI flow logs, DNS logs). <strong>API</strong>: the pod's service account making unusual requests or reading Secrets (audit logs). Correlating them separates compromise from noise.",
    tags: ["Detection","Runtime security"]
  },
  {
    id: "cncf-kcsa-fc-349",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "Which network paths let an ordinary pod reach the Kubernetes API server, and how do you close them?",
    hint: "A Service, env vars, and anonymous access.",
    back: "Pods reach the API through the <code>kubernetes</code> Service in the default namespace, via DNS or the injected <code>KUBERNETES_SERVICE_HOST</code> variables. Removing the token stops authenticated use but not <strong>anonymous</strong> requests. Close the path with <strong>default-deny egress</strong>, allowing the API server endpoint addresses only for pods that need them.",
    tags: ["kube-apiserver","NetworkPolicy"]
  },
  {
    id: "cncf-kcsa-fc-350",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d4",
    front: "What is the difference between an attacker on the node network and an attacker on the pod network?",
    hint: "What each can reach that the other cannot.",
    back: "<strong>Node network</strong>: can reach kubelet ports (10250, 10255), NodePorts, node SSH, etcd or control plane ports if exposed, and can sniff unencrypted inter-node traffic. <strong>Pod network</strong>: can reach Services and pods directly, cluster DNS, the API server, and often cloud metadata; limited by NetworkPolicy. Threat models need controls for both: host firewalls and component authentication, plus NetworkPolicy and mTLS.",
    tags: ["Attacker on the network","Threat model"]
  }
];

export default CNCF_KCSA_FLASHCARDS_14;
