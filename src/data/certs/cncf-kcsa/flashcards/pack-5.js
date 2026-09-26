export const CNCF_KCSA_FLASHCARDS_5 = [
  {
    id: 'cncf-kcsa-fc-101',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which ports does the kubelet listen on, and which should be reachable?',
    hint: 'One authenticated API, one legacy read-only, one health.',
    back: '<strong>10250</strong>: the authenticated HTTPS kubelet API (exec, logs, pods, metrics); reachable only from the control plane and trusted monitoring. <strong>10255</strong>: the legacy unauthenticated <strong>read-only</strong> port; disable with <code>readOnlyPort: 0</code>. <strong>10248</strong>: the health endpoint, bound to <strong>127.0.0.1</strong> by default.',
    tags: ['Kubelet', 'Ports']
  },
  {
    id: 'cncf-kcsa-fc-102',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What authentication options does the kubelet API support?',
    hint: 'Anonymous, certificates, tokens.',
    back: '<strong>Anonymous</strong> (<code>authentication.anonymous.enabled</code>): requests without credentials become <code>system:anonymous</code>; disable it. <strong>X.509</strong> (<code>authentication.x509.clientCAFile</code>): client certificates signed by that CA, used by the API server. <strong>Webhook</strong> (<code>authentication.webhook.enabled</code>): bearer tokens validated with a TokenReview, needed for service account tokens such as monitoring agents.',
    tags: ['Kubelet', 'Authentication']
  },
  {
    id: 'cncf-kcsa-fc-103',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'In Webhook authorization mode, how does the kubelet map its endpoints to RBAC?',
    hint: 'Subresources of nodes.',
    back: 'The kubelet sends a SubjectAccessReview for a <strong>nodes</strong> subresource: <code>/stats/*</code> → <code>nodes/stats</code>, <code>/metrics/*</code> → <code>nodes/metrics</code>, <code>/logs/*</code> → <code>nodes/log</code>, <code>/spec/*</code> → <code>nodes/spec</code>, and everything else, including <code>/pods</code>, <code>/exec</code> and <code>/run</code>, → <strong><code>nodes/proxy</code></strong>. Grant monitoring <code>nodes/metrics</code> and <code>nodes/stats</code>, never <code>nodes/proxy</code> unless required.',
    tags: ['Kubelet', 'Authorization']
  },
  {
    id: 'cncf-kcsa-fc-104',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Why can a kubelet started with flags be less secure than one started with a config file?',
    hint: 'Two different sets of defaults.',
    back: 'The legacy <strong>command-line flag defaults</strong> are permissive: <code>--anonymous-auth=true</code> and <code>--authorization-mode=AlwaysAllow</code>. The <strong>KubeletConfiguration (v1beta1) file defaults</strong> are secure: anonymous disabled, webhook authentication enabled and <code>authorization.mode: Webhook</code>. A hand-installed kubelet run with bare flags can therefore expose exec to anyone who reaches port 10250. Use a config file and set these fields explicitly.',
    tags: ['Kubelet', 'Configuration']
  },
  {
    id: 'cncf-kcsa-fc-105',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'List the main CIS benchmark checks for the kubelet.',
    hint: 'Auth, ports, certs, kernel, files.',
    back: '<ul><li>Anonymous auth <strong>disabled</strong>; authorization mode <strong>Webhook</strong></li><li><code>clientCAFile</code> set</li><li><code>readOnlyPort: 0</code></li><li><code>streamingConnectionIdleTimeout</code> not 0</li><li><code>protectKernelDefaults: true</code></li><li><code>makeIPTablesUtilChains: true</code></li><li>Client and serving certificate rotation enabled; strong TLS ciphers</li><li>kubelet config and kubeconfig files mode 600, owned by root</li></ul>',
    tags: ['Kubelet', 'CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-106',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What is a static pod, and why is its manifest directory sensitive?',
    hint: 'The kubelet runs it without asking.',
    back: 'A static pod is defined by a file in the kubelet\'s <code>staticPodPath</code> (for example <code>/etc/kubernetes/manifests</code>) and started <strong>directly by the kubelet</strong>; the API server only sees a read-only <strong>mirror pod</strong>. Admission cannot stop it running, so write access to that directory equals the ability to run any container, including privileged ones, on the node.',
    tags: ['Kubelet', 'Static pods']
  },
  {
    id: 'cncf-kcsa-fc-107',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does the Node authorizer allow a kubelet to do?',
    hint: 'Only what its own pods need.',
    back: '<strong>Read</strong>: Services, Endpoints, Nodes, Pods, and the <strong>Secrets, ConfigMaps, PVCs and PVs referenced by pods bound to that node</strong>. <strong>Write</strong>: its own Node and Node status, status of pods bound to it, events, and its Lease. <strong>Auth-related</strong>: create CSRs and TokenReviews/SubjectAccessReviews, and request tokens for service accounts its pods use. It applies only to <code>system:node:NAME</code> users in <code>system:nodes</code>.',
    tags: ['Node authorizer', 'Kubelet']
  },
  {
    id: 'cncf-kcsa-fc-108',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What extra limits does the NodeRestriction admission plugin add on top of the Node authorizer?',
    hint: 'Writes, not reads.',
    back: 'A kubelet may modify only <strong>its own Node object</strong> and <strong>pods bound to itself</strong> (mirror pods included, which cannot reference service accounts, Secrets or ConfigMaps). It cannot add or change labels with the <strong><code>node-restriction.kubernetes.io/</code></strong> prefix, and may set only a small allow-list of other <code>kubernetes.io</code> labels. That makes prefixed labels safe for steering sensitive workloads away from compromised nodes.',
    tags: ['NodeRestriction', 'Kubelet']
  },
  {
    id: 'cncf-kcsa-fc-109',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Summarise kubelet TLS bootstrapping.',
    hint: 'A short-lived token buys a real certificate.',
    back: 'A new node starts with a <strong>bootstrap token</strong> (group <code>system:bootstrappers</code>) that can only create a <strong>CertificateSigningRequest</strong>. Once approved, the controller manager signs a client certificate for <code>system:node:NAME</code>, the kubelet switches to it, and later renews it automatically with <code>rotateCertificates</code>. Each node thus gets its own identity without shipping long-lived credentials in images.',
    tags: ['Kubelet', 'Certificates']
  },
  {
    id: 'cncf-kcsa-fc-110',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does the kubelet seccompDefault setting do?',
    hint: 'Unconfined no longer.',
    back: 'With <code>seccompDefault: true</code> (stable since 1.27), the kubelet applies the container runtime\'s <strong>RuntimeDefault</strong> seccomp profile to every container that does not specify one, instead of running it <strong>Unconfined</strong>. It blocks dangerous system calls cluster-wide by default; workloads that truly need more can set an explicit profile.',
    tags: ['Kubelet', 'seccomp']
  },
  {
    id: 'cncf-kcsa-fc-111',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How long can the kubelet keep honouring a revoked permission or token?',
    hint: 'It caches webhook answers.',
    back: 'Webhook <strong>authentication</strong> results are cached for <code>authentication.webhook.cacheTTL</code> (2 minutes by default). Webhook <strong>authorization</strong> results are cached for <code>cacheAuthorizedTTL</code> (5 minutes) when allowed and <code>cacheUnauthorizedTTL</code> (30 seconds) when denied. During incident response, expect direct kubelet access to lag RBAC changes by up to those intervals.',
    tags: ['Kubelet', 'Authorization', 'Caching']
  },
  {
    id: 'cncf-kcsa-fc-112',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does enableDebuggingHandlers control on the kubelet?',
    hint: 'Turning it off breaks kubectl exec and logs on that node.',
    back: '<code>enableDebuggingHandlers</code> (true by default) serves the kubelet endpoints for <strong>container logs, exec, attach, run and port-forward</strong>. Setting it to false removes that attack surface on nodes where nobody needs interactive access, such as automated batch pools, at the cost of <code>kubectl exec</code>, <code>logs</code> and <code>port-forward</code> no longer working against pods there.',
    tags: ['Kubelet', 'Attack surface']
  },
  {
    id: 'cncf-kcsa-fc-113',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'cordon vs drain vs a NoExecute taint: what happens to pods on the node?',
    hint: 'Only one keeps them running.',
    back: '<strong>cordon</strong>: node marked unschedulable; existing pods <strong>keep running</strong> (useful to preserve evidence). <strong>drain</strong>: cordons, then <strong>evicts</strong> pods (respecting PodDisruptionBudgets). <strong>NoExecute taint</strong>: evicts pods without a matching toleration (after <code>tolerationSeconds</code>, if set) and repels new ones.',
    tags: ['Scheduler', 'Node isolation']
  },
  {
    id: 'cncf-kcsa-fc-114',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Which kube-scheduler settings does the CIS benchmark check?',
    hint: 'Same pattern as the controller manager.',
    back: '<code>--bind-address=127.0.0.1</code> so the secure port (10259) is local-only; <code>--profiling=false</code>; and the <strong>scheduler.conf</strong> kubeconfig and the static pod manifest owned by root with mode 600 or stricter. The scheduler reaches the cluster only through the API server, so its credentials, not network access to etcd, are what must be protected.',
    tags: ['Scheduler', 'CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-115',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What changes when a pod is created with spec.nodeName already set?',
    hint: 'Who never sees it?',
    back: 'The <strong>scheduler is bypassed</strong>, so scheduler-only rules such as <strong>NoSchedule taints</strong>, pod affinity and topology spreading are not applied. The kubelet still runs its own admission checks (resource fit, node selector and affinity, host ports) and NoExecute taints still evict. Protect sensitive nodes with admission policies that restrict <code>nodeName</code>, not with taints alone.',
    tags: ['Scheduler', 'Taints']
  },
  {
    id: 'cncf-kcsa-fc-116',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What are the three taint effects?',
    hint: 'Soft, hard, and hard-plus-evict.',
    back: '<strong>PreferNoSchedule</strong>: the scheduler tries to avoid the node. <strong>NoSchedule</strong>: pods without a matching toleration are not scheduled there; running pods stay. <strong>NoExecute</strong>: pods without a toleration are not scheduled and running ones are <strong>evicted</strong>, optionally after <code>tolerationSeconds</code>. Tolerations let pods onto a node; they never attract pods to it.',
    tags: ['Scheduler', 'Taints']
  },
  {
    id: 'cncf-kcsa-fc-117',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'nodeSelector and node affinity vs taints: which attracts and which repels?',
    hint: 'You need both for a dedicated pool.',
    back: '<strong>nodeSelector / node affinity</strong> are set on the pod and <strong>attract</strong> it to matching nodes. <strong>Taints</strong> are set on the node and <strong>repel</strong> pods that lack a matching toleration. Dedicating nodes to a workload needs both: a taint to keep others off and affinity so the workload lands only there.',
    tags: ['Scheduler', 'Node isolation']
  },
  {
    id: 'cncf-kcsa-fc-118',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What do the PodNodeSelector and PodTolerationRestriction admission plugins do?',
    hint: 'Namespace-level placement guardrails.',
    back: '<strong>PodNodeSelector</strong> merges a node selector from a namespace annotation into every pod in that namespace (and can reject conflicts), forcing its pods onto chosen nodes. <strong>PodTolerationRestriction</strong> adds default tolerations and rejects pods whose tolerations are not on the namespace\'s allow-list, so tenants cannot tolerate their way onto reserved nodes. Policy engines can implement the same rules.',
    tags: ['Admission control', 'Scheduler']
  },
  {
    id: 'cncf-kcsa-fc-119',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How do kube-scheduler and kube-controller-manager authenticate and authorize requests to their own secure ports?',
    hint: 'They ask the API server.',
    back: 'They <strong>delegate</strong>: bearer tokens and certificates are checked with a <strong>TokenReview</strong>, and access with a <strong>SubjectAccessReview</strong> for a non-resource URL such as <code>/metrics</code>. <code>--authorization-always-allow-paths</code> (default <code>/healthz,/readyz,/livez</code>) are served without authorization. Grant scrapers <code>get</code> on the <code>/metrics</code> nonResourceURL rather than adding it to the always-allow list.',
    tags: ['Scheduler', 'Controller manager', 'Authorization']
  },
  {
    id: 'cncf-kcsa-fc-120',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'podAntiAffinity vs topologySpreadConstraints for spreading replicas of a critical component',
    hint: 'Strict separation vs even distribution.',
    back: '<strong>Required podAntiAffinity</strong> on <code>kubernetes.io/hostname</code> forbids two replicas on one node; it is strict and can leave pods Pending. <strong>topologySpreadConstraints</strong> bound the imbalance (<code>maxSkew</code>) across nodes or zones and scale better. Use them for fail-closed webhooks, ingress and DNS so a single node or zone loss does not take the component down.',
    tags: ['Scheduler', 'Availability']
  },
  {
    id: 'cncf-kcsa-fc-121',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Where is the kubelet\'s configuration on a kubeadm node?',
    hint: 'One file for settings, one for credentials.',
    back: '<strong><code>/var/lib/kubelet/config.yaml</code></strong> holds the KubeletConfiguration (authentication, authorization, ports, TLS, eviction). <strong><code>/etc/kubernetes/kubelet.conf</code></strong> is the kubeconfig with the node\'s client credentials. Both should be owned by root with mode 600; command-line flags in the systemd unit can override config file values.',
    tags: ['Kubelet', 'Configuration']
  },
  {
    id: 'cncf-kcsa-fc-122',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'How far may kubelets lag the API server, and what does that mean for patching?',
    hint: 'Version skew policy.',
    back: 'A kubelet may be up to <strong>three minor versions older</strong> than kube-apiserver and never newer. Control plane upgrades, including a provider\'s managed ones, <strong>do not update kubelets</strong>: node pools must be rolled separately. Kubelet or container runtime CVEs therefore require node upgrades, and old node pools are a common source of unpatched vulnerabilities.',
    tags: ['Kubelet', 'Patching']
  },
  {
    id: 'cncf-kcsa-fc-123',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'Trace kubectl exec from the client to the container and name the authorization checks.',
    hint: 'Two hops, two identities.',
    back: '<strong>kubectl → kube-apiserver</strong>: the user must be allowed <code>create</code> on <code>pods/exec</code>. <strong>kube-apiserver → kubelet</strong> on 10250: the API server presents its kubelet client certificate, and the kubelet (Webhook mode) checks that identity for <code>nodes/proxy</code>. <strong>kubelet → container runtime</strong>: the CRI streaming server runs the command. Anyone who can reach the kubelet directly skips the first check.',
    tags: ['Kubelet', 'API server', 'Authorization']
  },
  {
    id: 'cncf-kcsa-fc-124',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does protectKernelDefaults do, and why does the CIS benchmark want it on?',
    hint: 'Fail rather than fix.',
    back: 'With <code>protectKernelDefaults: true</code>, the kubelet <strong>refuses to start</strong> if kernel tunables it depends on (such as <code>vm.overcommit_memory</code> and <code>kernel.panic</code>) differ from the values it expects, instead of <strong>silently changing them</strong>. Administrators keep control of hardened kernel settings, and drift shows up as a clear failure.',
    tags: ['Kubelet', 'Node hardening']
  },
  {
    id: 'cncf-kcsa-fc-125',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd2',
    front: 'What does the kubelet do on each node?',
    hint: 'The node agent.',
    back: 'It <strong>registers the node</strong>, watches the API server for pods bound to it, asks the container runtime (via CRI) to <strong>start and stop containers</strong>, mounts volumes and Secrets, runs probes, reports node and pod status, and serves the kubelet API for logs, exec and metrics. It runs with root privileges, so a kubelet compromise is a node compromise.',
    tags: ['Kubelet', 'Architecture']
  }
];

export default CNCF_KCSA_FLASHCARDS_5;
