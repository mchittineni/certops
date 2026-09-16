export const K8S_CKS_QUESTIONS_2 = [
  {
    id: "k8s-cks-26",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Benchmark: Securing Controller Manager and Scheduler Binding",
    scenario: "A CIS Benchmark audit warns that <code>kube-controller-manager</code> and <code>kube-scheduler</code> are binding to all network interfaces (<code>0.0.0.0</code>) rather than localhost.",
    question: "Which flag setting on both components restricts their HTTP/HTTPS serving endpoints to the local loopback interface?",
    options: [
      { id: 'A', text: "Set <code>--bind-address=0.0.0.0</code> on both, and firewall the ports on each node" },
      { id: 'B', text: "Set <code>--secure-port=0</code> on both, which leaves only the loopback listener up" },
      { id: 'C', text: "Set <code>--bind-address=127.0.0.1</code> on both the controller manager and scheduler" },
      { id: 'D', text: "Set <code>--address=127.0.0.1</code> on both, the flag that replaced the bind address" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "According to CIS Benchmark items 1.3.1 and 1.4.1, control plane helper services (<code>kube-controller-manager</code> and <code>kube-scheduler</code>) that do not require external network exposure must bind exclusively to localhost by setting <code>--bind-address=127.0.0.1</code>. This prevents unauthorized nodes or pods on the local network from querying control plane health and metric endpoints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CIS-Benchmark", "Control-Plane", "Hardening", "Network-Binding"]
  },
  {
    id: "k8s-cks-27",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Configuring NetworkPolicy to Allow External HTTPS Egress Only",
    scenario: "An e-commerce payment microservice must connect to external payment gateway APIs over HTTPS (TCP port 443) on public internet IPs, but must be prohibited from communicating with any internal private IPs or other ports.",
    question: "Which egress NetworkPolicy specification correctly permits outbound port 443 while excluding private subnets?",
    options: [
      { id: 'A', text: "An egress rule with <code>ports: [{ protocol: 'TCP', port: 443 }]</code> and no <code>to</code> block at all" },
      { id: 'B', text: "An egress rule whose <code>ipBlock</code> is <code>0.0.0.0/0</code> with the RFC1918 ranges excepted, on port 443" },
      { id: 'C', text: "An egress rule whose <code>ipBlock</code> is <code>0.0.0.0/0</code>, with the private ranges in a second rule" },
      { id: 'D', text: "An egress rule whose <code>ipBlock</code> lists each public address range explicitly, on port 443" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "To permit external public HTTPS egress while preventing lateral movement across internal private networks, the <code>ipBlock</code> must target <code>0.0.0.0/0</code> with RFC 1918 private subnets (<code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, <code>192.168.0.0/16</code>) listed in the <code>except</code> field, scoped strictly to port <code>443</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "Egress", "RFC-1918", "Zero-Trust"]
  },
  {
    id: "k8s-cks-28",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Hardening RBAC to Prevent Secret Reading via Pod Exec",
    scenario: "A developer has RBAC permissions to create pods and run <code>kubectl exec</code> in a namespace, but does not have RBAC access to read <code>secrets</code>. The developer mounts a sensitive Secret into a newly created debug pod and executes a shell to print the secret contents.",
    question: "Which security control effectively closes this RBAC bypass and prevents unauthorized secret extraction?",
    options: [
      { id: 'A', text: "Withhold <code>get</code> on <code>secrets</code>, and move the credentials into the pods' own environment variables" },
      { id: 'B', text: "Withhold <code>create</code> on <code>pods</code>, and let the pipeline's ServiceAccount own the deployments instead" },
      { id: 'C', text: "Withhold <code>create</code> on <code>pods/exec</code>, and add an admission policy that blocks mounting those secrets" },
      { id: 'D', text: "Withhold <code>create</code> on <code>pods/portforward</code>, which is the subresource the bypass depends on" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The combination of <code>pods/exec</code> and pod creation permissions allows users without direct Secret read access to extract secrets by mounting them into pods and reading the file system. Restricting the <code>create</code> verb on <code>pods/exec</code> and deploying admission policies that restrict which service accounts or labels may mount specific secrets eliminates this privilege escalation vector.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["RBAC", "Privilege-Escalation", "Secrets", "Admission-Control"]
  },
  {
    id: "k8s-cks-29",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Benchmark: Kubelet Configuration File Ownership and Permissions",
    scenario: "A worker node hardening check inspects <code>/var/lib/kubelet/config.yaml</code> and reports file permissions of <code>0777</code>.",
    question: "Which command fixes the ownership and permissions of the kubelet configuration file in compliance with CIS benchmarks?",
    options: [
      { id: 'A', text: "Run <code>chown kubelet:kubelet /var/lib/kubelet/config.yaml && chmod 755 /var/lib/kubelet/config.yaml</code>" },
      { id: 'B', text: "Run <code>chown root:root</code> and <code>chmod 600</code> on <code>/var/lib/kubelet/config.yaml</code>" },
      { id: 'C', text: "Run <code>chown root:nobody /var/lib/kubelet/config.yaml && chmod 400 /var/lib/kubelet/config.yaml</code>" },
      { id: 'D', text: "Run <code>chmod 700 /var/lib/kubelet/config.yaml && chown etcd:etcd /var/lib/kubelet/config.yaml</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CIS Benchmark item 2.2.1 requires that the kubelet configuration file (<code>/var/lib/kubelet/config.yaml</code>) must be owned by <code>root:root</code> and have file permissions of <code>0600</code> or <code>0644</code>. Permissive modes like 0777 allow any local attacker or compromised container breakout to rewrite kubelet startup parameters.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CIS-Benchmark", "Kubelet", "File-Permissions", "Worker-Nodes"]
  },
  {
    id: "k8s-cks-30",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Mitigating Unauthenticated Access to Kubelet Read-Only Port 10255",
    scenario: "A security scan flags that worker nodes expose TCP port 10255, allowing any pod running on the cluster to curl <code>http://&lt;node-ip&gt;:10255/pods</code> and dump full pod specs and environment variables.",
    question: "How should this exposure be completely eliminated across all worker nodes?",
    options: [
      { id: 'A', text: "Set <code>--authorization-mode=Webhook</code> on each kubelet and restart the service" },
      { id: 'B', text: "Set <code>authentication.anonymous.enabled: false</code> in the scheduler's own manifest" },
      { id: 'C', text: "Set <code>readOnlyPort: 0</code> in the kubelet config on each node and restart the service" },
      { id: 'D', text: "Add an iptables rule on each node dropping inbound traffic to port 10250" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "TCP port 10255 is the legacy unauthenticated read-only kubelet port. Setting <code>readOnlyPort: 0</code> in the kubelet configuration file completely disables this listener, ensuring all queries must route through the authenticated, authorized, and TLS-encrypted port 10250.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kubelet", "Port-10255", "Information-Disclosure", "Hardening"]
  },
  {
    id: "k8s-cks-31",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Benchmark: Restricting Profiling on Control Plane Components",
    scenario: "A CIS Benchmark audit recommends disabling performance profiling on production control plane components to prevent potential denial-of-service and memory disclosure vulnerabilities via <code>/debug/pprof/</code> endpoints.",
    question: "Which flag must be set to <code>false</code> on <code>kube-apiserver</code>, <code>kube-controller-manager</code>, and <code>kube-scheduler</code> to disable profiling endpoints?",
    options: [
      { id: 'A', text: "Set <code>--enable-pprof=false</code> inside <code>/etc/kubernetes/admin.conf</code>" },
      { id: 'B', text: "Set <code>--profiling=false</code> on all three control plane static pod manifests" },
      { id: 'C', text: "Set <code>--disable-debug-routes=true</code> on the worker node kubelets" },
      { id: 'D', text: "Configure <code>--metrics-bind-address=0.0.0.0</code> on <code>kube-proxy</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "According to CIS Benchmark items 1.2.18, 1.3.2, and 1.4.2, setting <code>--profiling=false</code> disables the <code>/debug/pprof</code> HTTP profiling handlers on the API server, controller manager, and scheduler, mitigating resource exhaustion and sensitive memory telemetry exposure.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CIS-Benchmark", "Profiling", "Control-Plane", "Hardening"]
  },
  {
    id: "k8s-cks-32",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Limiting Kubelet Service Account Permissions with NodeRestriction",
    scenario: "A compromised worker node's kubelet attempts to delete a Pod residing on a different node in order to disrupt application availability.",
    question: "Why does the API server reject this deletion request when <code>NodeRestriction</code> is enabled?",
    options: [
      { id: 'A', text: "<code>NodeRestriction</code> routes kubelet writes through kube-proxy, which does not carry a delete verb" },
      { id: 'B', text: "<code>NodeRestriction</code> withholds the delete verb from every kubelet, including for its own pods" },
      { id: 'C', text: "<code>NodeRestriction</code> checks the node's identity against the pod's <code>spec.nodeName</code> and rejects the rest" },
      { id: 'D', text: "<code>Node</code> authorization grants kubelets only <code>create</code>, so no kubelet may delete a pod object" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The <code>NodeRestriction</code> admission controller inspects requests from credentials in the <code>system:nodes</code> group and ensures that a kubelet can only modify or delete pods that are bound directly to itself (where <code>spec.nodeName</code> matches the requesting node identity). Requests targeting pods on other nodes are automatically rejected.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NodeRestriction", "kubelet", "Admission-Control", "Defense-in-Depth"]
  },
  {
    id: "k8s-cks-33",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Validating etcd Peer Mutual TLS Communication",
    scenario: "An administrator is establishing a high-availability 3-node etcd cluster. Communication between etcd peers must be mutually authenticated and encrypted over port 2380.",
    question: "Which flags in <code>etcd.yaml</code> configure peer-to-peer mutual TLS authentication?",
    options: [
      { id: 'A', text: "Set <code>--client-cert-auth=true</code> with <code>--peer-auto-tls=true</code> for the peers" },
      { id: 'B', text: "Set <code>--listen-peer-urls</code> to an HTTPS address and skip the peer CA file" },
      { id: 'C', text: "Set <code>--initial-cluster-token</code> to a shared secret and omit the peer files" },
      { id: 'D', text: "Set <code>--peer-client-cert-auth=true</code> with the peer CA, certificate and key files" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Securing inter-member etcd clustering traffic over port 2380 requires peer TLS flags: <code>--peer-client-cert-auth=true</code> enforces peer authentication, <code>--peer-trusted-ca-file</code> specifies the trusted CA, and <code>--peer-cert-file</code> and <code>--peer-key-file</code> provide each peer node's identity.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["etcd", "Peer-mTLS", "Clustering", "Hardening"]
  },
  {
    id: "k8s-cks-34",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Preventing Token Leaks by Disabling Default Namespace ServiceAccount Permissions",
    scenario: "In a hardened cluster, developers frequently deploy pods without declaring a <code>serviceAccountName</code>, causing pods to automatically inherit the namespace's <code>default</code> ServiceAccount token.",
    question: "What is the recommended cluster hardening practice for the <code>default</code> ServiceAccount in each workload namespace?",
    options: [
      { id: 'A', text: "Set <code>automountServiceAccountToken: false</code> on each <code>default</code> account, and give callers their own" },
      { id: 'B', text: "Disable the ServiceAccount admission plugin on the API server, so no token is injected into any pod" },
      { id: 'C', text: "Delete the <code>default</code> ServiceAccount from each namespace, so pods must name one explicitly" },
      { id: 'D', text: "Bind the <code>default</code> ServiceAccount to the <code>view</code> ClusterRole in each workload namespace" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Best practice and CIS recommendations advise patching the <code>default</code> ServiceAccount in every namespace with <code>automountServiceAccountToken: false</code> (using <code>kubectl patch serviceaccount default -p '{\"automountServiceAccountToken\": false}'</code>). Workloads requiring API access must explicitly declare custom ServiceAccounts with defined RBAC bindings.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ServiceAccount", "Hardening", "Least-Privilege", "Default-Account"]
  },
  {
    id: "k8s-cks-35",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Benchmark: Kubelet Authorization Mode Configuration",
    scenario: "A CIS Benchmark report highlights a failure under section 2.1.2: 'Ensure that the --authorization-mode argument is not set to AlwaysAllow on the Kubelet'.",
    question: "What is the security risk of setting kubelet authorization mode to <code>AlwaysAllow</code>?",
    options: [
      { id: 'A', text: "Any request to the kubelet bypasses the API server's audit log, so the node's activity goes unrecorded" },
      { id: 'B', text: "The kubelet stops checking the API server's client CA, so the node will not complete its registration" },
      { id: 'C', text: "Any authenticated caller — including a pod with a low-privilege token — can exec and read files on the node" },
      { id: 'D', text: "The kubelet stops authorizing its own pulls, so images from private registries are refused on the node" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting kubelet authorization mode to <code>AlwaysAllow</code> means that once a client presents any valid credential, the kubelet grants full control without consulting the API server. By setting <code>authorization.mode: Webhook</code>, the kubelet delegates every authorization decision to the API server via <code>SubjectAccessReview</code>, enforcing RBAC.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CIS-Benchmark", "Kubelet", "Webhook-Authz", "Authorization"]
  },
  {
    id: "k8s-cks-36",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Restricting Inter-Pod Lateral Movement with Namespace Egress Policies",
    scenario: "A front-end web tier in namespace <code>frontend</code> must communicate with a caching tier in namespace <code>cache</code> on TCP port 6379, but must be blocked from communicating with any other pods in <code>cache</code> or other namespaces.",
    question: "Which egress NetworkPolicy applied to the <code>frontend</code> pods satisfies this restriction?",
    options: [
      { id: 'A', text: "An egress rule whose <code>to</code> names the <code>cache</code> namespace and the <code>role: redis</code> pods, with <code>port: 6379</code>" },
      { id: 'B', text: "An egress rule whose <code>to</code> names the <code>cache</code> namespace alone, with <code>ports</code> left unset for the whole namespace" },
      { id: 'C', text: "An egress rule whose <code>to</code> names an <code>ipBlock</code> of the pod CIDR, with <code>port: 6379</code> on TCP" },
      { id: 'D', text: "An egress rule whose <code>to</code> names a <code>podSelector</code> of <code>role: redis</code>, applied in the <code>frontend</code> namespace" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To strictly control egress traffic targeting another namespace, the NetworkPolicy on the sending pods must combine a <code>namespaceSelector</code> (selecting namespace <code>cache</code>) with a <code>podSelector</code> (selecting the specific target pods labeled <code>role: redis</code>) and specify port <code>6379</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "Lateral-Movement", "Zero-Trust", "Egress"]
  },
  {
    id: "k8s-cks-37",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Benchmark: Securing Worker Node Proxy Kubeconfig Permissions",
    scenario: "A security audit checks the file permissions of the <code>kube-proxy</code> kubeconfig file located at <code>/etc/kubernetes/proxy.conf</code> on worker nodes.",
    question: "Which ownership and permissions must be set on <code>proxy.conf</code> to pass CIS benchmark verification?",
    options: [
      { id: 'A', text: "Ownership <code>root:admin</code> and permissions <code>0770</code>" },
      { id: 'B', text: "Ownership <code>kube-proxy:kube-proxy</code> and permissions <code>0755</code>" },
      { id: 'C', text: "Ownership <code>nobody:nogroup</code> and permissions <code>0400</code>" },
      { id: 'D', text: "Ownership <code>root:root</code> and permissions <code>0600</code> (or <code>0644</code>)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Under CIS Benchmark section 2.2.3, the kubeconfig file used by <code>kube-proxy</code> contains credentials for connecting to the API server and must be protected with ownership <code>root:root</code> and permissions <code>0600</code> (or <code>0644</code>).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CIS-Benchmark", "kube-proxy", "File-Permissions", "Worker-Nodes"]
  },
  {
    id: "k8s-cks-38",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Hardening RBAC RoleBindings with Specific Subjects",
    scenario: "A junior administrator attempts to grant read-only access to cluster configurations by binding a Role to the group <code>system:authenticated</code> instead of individual user service accounts.",
    question: "What is the security implication of binding permissions to the <code>system:authenticated</code> pseudo-group?",
    options: [
      { id: 'A', text: "Only identities from an external OIDC provider receive the permissions the binding grants" },
      { id: 'B', text: "Every authenticated identity in the cluster receives the permissions the binding grants" },
      { id: 'C', text: "Only identities holding a client certificate from the cluster CA receive those permissions" },
      { id: 'D', text: "The binding is dropped by the API server at its next restart, since the group is virtual" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The <code>system:authenticated</code> group is an internal pseudo-group automatically assigned to every successfully authenticated entity, including internal application ServiceAccounts and node kubelets. Binding roles to this group violates least privilege and exposes data to every workload in the cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["RBAC", "system:authenticated", "Least-Privilege", "Security-Risks"]
  },
  {
    id: "k8s-cks-39",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Enforcing AppArmor Profiles on Workload Containers",
    scenario: "A financial containerized application must be restricted from accessing host hardware, opening raw network sockets, or writing to binary directories on Ubuntu worker nodes using an AppArmor profile named <code>k8s-apparmor-deny-write</code>.",
    question: "What are the required operational steps to load and apply this AppArmor profile to a Kubernetes pod container?",
    options: [
      { id: 'A', text: "Ship the profile as a ConfigMap in the namespace, then annotate the deployment so the kubelet loads it on the node" },
      { id: 'B', text: "Load the profile on each node with <code>apparmor_parser</code>, then set <code>privileged: true</code> so the profile is applied" },
      { id: 'C', text: "Load it with <code>apparmor_parser</code> on each node, then set <code>appArmorProfile.type: Localhost</code>" },
      { id: 'D', text: "Load the profile on each node with <code>apparmor_parser</code>, then pass its name to <code>kube-apiserver</code> as a flag" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "AppArmor profiles must be loaded into the Linux kernel on <strong>every worker node</strong> where pods might be scheduled using <code>apparmor_parser -q &lt;profile-path&gt;</code>. In modern Kubernetes, the profile is applied declaratively via <code>securityContext.appArmorProfile.type: Localhost</code> with <code>localhostProfile: &lt;profile-name&gt;</code> (or legacy container annotations on older versions). The kernel must have the profile loaded locally before the container runtime can enforce it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["AppArmor", "Kernel-Security", "Host-Hardening", "securityContext"]
  },
  {
    id: "k8s-cks-40",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Hardening Pods with RuntimeDefault Seccomp Profiles",
    scenario: "A company security standard requires that all containers run with a secure seccomp filter to block dangerous Linux system calls (such as <code>ptrace</code>, <code>sys_chroot</code>, and <code>reboot</code>) without requiring custom JSON profile files.",
    question: "Which declarative configuration in the Pod specification enforces the container runtime's built-in seccomp filter across all containers in the pod?",
    options: [
      { id: 'A', text: "Set <code>securityContext.seccompProfile.type: RuntimeDefault</code> at the Pod or container level" },
      { id: 'B', text: "Set <code>securityContext.seccompProfile.type: Localhost</code> and set <code>localhostProfile: default.json</code>" },
      { id: 'C', text: "Configure <code>securityContext.capabilities.drop: ['ALL']</code> and omit the seccompProfile block" },
      { id: 'D', text: "Add the annotation <code>seccomp.security.alpha.kubernetes.io/pod: 'docker/default'</code> to the namespace" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configuring <code>securityContext.seccompProfile.type: RuntimeDefault</code> instructs the container runtime (containerd, CRI-O) to apply its hardened default seccomp profile, which blocks dozens of dangerous and rarely used system calls while allowing normal application operations without managing custom profile files.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Seccomp", "RuntimeDefault", "Kernel-Security", "Hardening"]
  },
  {
    id: "k8s-cks-41",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Deploying Custom Seccomp Profiles on Worker Nodes",
    scenario: "A security engineer creates a custom JSON seccomp profile named <code>fine-grained.json</code> that restricts a microservice to a minimal whitelist of 45 system calls. The profile must be deployed so that worker node kubelets can locate and apply it.",
    question: "Where must the custom seccomp profile file be stored on the host filesystem of worker nodes?",
    options: [
      { id: 'A', text: "In the kubelet seccomp root directory, typically <code>/var/lib/kubelet/seccomp/fine-grained.json</code>" },
      { id: 'B', text: "In <code>/var/run/secrets/seccomp/fine-grained.json</code> as a mounted volume" },
      { id: 'C', text: "Inside <code>/etc/kubernetes/manifests/seccomp/fine-grained.json</code>" },
      { id: 'D', text: "Directly inside the container's root directory at <code>/usr/local/seccomp/fine-grained.json</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubelet resolves custom seccomp profiles relative to its root seccomp directory, which defaults to <code>/var/lib/kubelet/seccomp/</code>. When a pod specifies <code>type: Localhost</code> and <code>localhostProfile: fine-grained.json</code>, kubelet looks for <code>/var/lib/kubelet/seccomp/fine-grained.json</code> on the host node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Seccomp", "Custom-Profiles", "Kubelet", "Host-Hardening"]
  },
  {
    id: "k8s-cks-42",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Isolating Untrusted Workloads Using gVisor RuntimeClass",
    scenario: "A multi-tenant SaaS platform allows customers to execute untrusted user-submitted code in containerized functions. The platform must prevent container breakout exploits from compromising the host Linux kernel.",
    question: "Which architecture provides strong kernel-level sandboxing using gVisor for untrusted pods?",
    options: [
      { id: 'A', text: "Install <code>runsc</code> on the nodes and set <code>privileged: false</code> with <code>procMount: Default</code> on the pod's containers" },
      { id: 'B', text: "Install <code>runsc</code>, register a <code>RuntimeClass</code> for it, and set <code>runtimeClassName</code> on the pod" },
      { id: 'C', text: "Set <code>hostUsers: false</code> on the pod so it runs in a user namespace, and drop every Linux capability" },
      { id: 'D', text: "Apply an AppArmor profile in enforce mode and set <code>readOnlyRootFilesystem: true</code> on the containers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "gVisor provides a user-space kernel (<code>runsc</code>) that intercepts application system calls, isolating the host kernel from untrusted workloads. Registering a <code>RuntimeClass</code> with <code>handler: runsc</code> and adding <code>runtimeClassName: gvisor</code> to the Pod spec directs the container runtime to execute the pod inside a gVisor sandbox.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["gVisor", "RuntimeClass", "Sandbox", "Isolation"]
  },
  {
    id: "k8s-cks-43",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Dropping Insecure Linux Capabilities in Container Specifications",
    scenario: "A web microservice requires binding to privileged port 80, but the security team forbids granting full root privileges or unnecessary Linux kernel capabilities.",
    question: "Which <code>securityContext.capabilities</code> configuration adheres to least privilege by dropping all default capabilities while granting only the required port-binding capability?",
    options: [
      { id: 'A', text: "Set <code>privileged: true</code> and configure <code>allowPrivilegeEscalation: false</code>" },
      { id: 'B', text: "Set <code>capabilities: { drop: ['SETUID', 'SETGID'] }</code> and leave default capabilities active" },
      { id: 'C', text: "Set <code>capabilities: { drop: ['ALL'], add: ['NET_BIND_SERVICE'] }</code>" },
      { id: 'D', text: "Set <code>capabilities: { add: ['CAP_SYS_ADMIN'], drop: ['NET_RAW'] }</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Best practice and the Pod Security Restricted standard mandate dropping all default Linux capabilities using <code>drop: ['ALL']</code> and selectively adding only the minimum required capability—in this case, <code>NET_BIND_SERVICE</code> to bind to ports below 1024. This minimizes the kernel attack surface if the application is compromised.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Capabilities", "NET_BIND_SERVICE", "Least-Privilege", "securityContext"]
  },
  {
    id: "k8s-cks-44",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Enforcing Non-Root Execution and Disabling Privilege Escalation",
    scenario: "An attacker attempts to exploit a setuid binary inside a container to gain root privileges and escape into the host node.",
    question: "Which pod security settings prevent setuid binaries from changing UID and guarantee that the container process cannot execute as root?",
    options: [
      { id: 'A', text: "Set <code>runAsUser: 10001</code>, <code>runAsGroup: 0</code> and add the <code>CHOWN</code> capability back" },
      { id: 'B', text: "Set <code>privileged: false</code>, <code>hostIPC: true</code> and <code>readOnlyRootFilesystem: true</code>" },
      { id: 'C', text: "Set <code>runAsUser: 0</code>, <code>readOnlyRootFilesystem: true</code> and drop all capabilities" },
      { id: 'D', text: "Set <code>runAsNonRoot: true</code>, <code>runAsUser: 10001</code> and <code>allowPrivilegeEscalation: false</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting <code>allowPrivilegeEscalation: false</code> sets the <code>no_new_privs</code> flag on the Linux process, preventing setuid binaries or file capabilities from escalating privileges. Combining this with <code>runAsNonRoot: true</code> and a specific unprivileged UID (e.g., <code>runAsUser: 10001</code>) ensures the container never executes as root.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Privilege-Escalation", "Non-Root", "no_new_privs", "securityContext"]
  },
  {
    id: "k8s-cks-45",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Enforcing Immutable Read-Only Root Filesystem",
    scenario: "A compromised web application allows remote command execution. The attacker attempts to download and write a crypto-miner script into <code>/tmp</code> or <code>/bin</code>.",
    question: "Which security configuration prevents writes to the container's root filesystem while still providing a writable temporary scratch space for the application?",
    options: [
      { id: 'A', text: "Set <code>readOnlyRootFilesystem: true</code> and mount a ConfigMap with <code>defaultMode: 0400</code> there" },
      { id: 'B', text: "Set <code>readOnlyRootFilesystem: true</code> and mount an <code>emptyDir</code> at the path that needs writes" },
      { id: 'C', text: "Set <code>readOnlyRootFilesystem: true</code> and mount a <code>hostPath</code> for the scratch directory" },
      { id: 'D', text: "Leave the filesystem writable and set <code>RUN chmod -R 555 /</code> in the final build stage" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting <code>securityContext.readOnlyRootFilesystem: true</code> mounts the container's root filesystem as read-only, preventing attackers from creating, modifying, or replacing files. To support applications that legitimately require temporary working directories, an ephemeral <code>emptyDir</code> volume can be mounted specifically to that directory (such as <code>/tmp</code>).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["readOnlyRootFilesystem", "Immutability", "emptyDir", "securityContext"]
  },
  {
    id: "k8s-cks-46",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Reducing Host Attack Surface by Disabling Unnecessary Services",
    scenario: "A security scan on a Linux worker node reveals active listening services for <code>rpcbind</code>, <code>cups</code>, and <code>avahi-daemon</code>, which are unnecessary for Kubernetes operations.",
    question: "Which Linux administrative commands disable and prevent these services from restarting upon system reboot?",
    options: [
      { id: 'A', text: "Run <code>systemctl stop rpcbind cups avahi-daemon</code> and leave the units enabled" },
      { id: 'B', text: "Remove the service binaries from <code>/usr/sbin</code> and leave the units in place" },
      { id: 'C', text: "Add iptables drop rules for each service's port and restart the kubelet" },
      { id: 'D', text: "Run <code>systemctl disable --now rpcbind cups avahi-daemon</code>, and <code>mask</code> them" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Hardening host nodes requires stopping running services and disabling them from booting using <code>systemctl disable --now &lt;service&gt;</code>. Masking the unit (<code>systemctl mask &lt;service&gt;</code>) further links the unit file to <code>/dev/null</code>, preventing other services from activating it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Host-Hardening", "Systemd", "Attack-Surface", "Linux-Security"]
  },
  {
    id: "k8s-cks-47",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Identifying Rogue Listening Ports on Worker Nodes",
    scenario: "A Kubernetes worker node is suspected of being compromised by an attacker who spawned an unauthorized backdoor service.",
    question: "Which command displays all open listening TCP and UDP sockets along with their process names and PIDs on the host?",
    options: [
      { id: 'A', text: "Execute <code>cat /etc/resolv.conf</code>" },
      { id: 'B', text: "Execute <code>kubectl get endpoints -A</code>" },
      { id: 'C', text: "Execute <code>crictl pods -o table</code>" },
      { id: 'D', text: "Execute <code>ss -tulpn</code> on the node" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>ss -tulpn</code> command lists all listening (<code>-l</code>) TCP (<code>-t</code>) and UDP (<code>-u</code>) sockets with numeric ports (<code>-n</code>) and resolves the associated process name and process ID (<code>-p</code>). This allows administrators to rapidly pinpoint unauthorized listening daemons.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ss", "netstat", "Host-Investigation", "Troubleshooting"]
  },
  {
    id: "k8s-cks-48",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Configuring Kernel Sysctl Parameters via Pod SecurityContext",
    scenario: "A networking application requires modifying the <code>net.core.somaxconn</code> kernel parameter to handle high volume socket backlogs. However, the parameter is considered an unsafe sysctl in default Kubernetes configurations.",
    question: "What must be configured on both the worker node kubelet and the pod manifest to permit this sysctl modification safely?",
    options: [
      { id: 'A', text: "Add the sysctl to the pod's securityContext, and annotate the namespace to allow unsafe sysctls for it" },
      { id: 'B', text: "Add <code>--allowed-unsafe-sysctls=net.core.somaxconn</code> to the kubelet, and declare it on the pod" },
      { id: 'C', text: "Add the sysctl to <code>/etc/sysctl.conf</code> on the node, and declare it in the pod's securityContext too" },
      { id: 'D', text: "Set <code>privileged: true</code> on the container, and write the value from its own startup script" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes categorizes sysctls into safe and unsafe. Unsafe sysctls (such as <code>net.core.somaxconn</code>) are disabled by default because they can disrupt node stability. To allow them, the kubelet must explicitly whitelist them using <code>--allowed-unsafe-sysctls</code>, after which the pod can specify them under <code>securityContext.sysctls</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["sysctl", "Kubelet", "Kernel-Hardening", "securityContext"]
  },
  {
    id: "k8s-cks-49",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Investigating Anomalous Containers Using crictl",
    scenario: "A monitoring alert indicates that a worker node's kubelet is disconnected, but containers are still running. An administrator needs to inspect running containers, view container logs, and identify container processes directly on the node without relying on <code>kubectl</code>.",
    question: "Which CRI command-line tool provides direct interaction with the container runtime on the node?",
    options: [
      { id: 'A', text: "Use <code>crictl</code> — <code>crictl ps</code>, <code>crictl logs</code>, <code>crictl inspect</code> — on the node" },
      { id: 'B', text: "Use <code>docker</code> — <code>docker ps</code>, <code>docker logs</code>, <code>docker inspect</code> — on the node" },
      { id: 'C', text: "Use <code>kubectl debug node/&lt;node&gt;</code> and drive the runtime through its socket by hand" },
      { id: 'D', text: "Use <code>ctr -n k8s.io</code> — the containerd client — to list and inspect the sandboxes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>crictl</code> is the official Kubernetes CLI for CRI-compatible container runtimes (containerd, CRI-O). When the control plane or kubelet is unreachable, administrators can log directly into worker nodes and use <code>crictl ps</code>, <code>crictl logs &lt;container-id&gt;</code>, and <code>crictl inspect &lt;container-id&gt;</code> for emergency incident investigation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["crictl", "CRI", "Node-Investigation", "Runtime"]
  },
  {
    id: "k8s-cks-50",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Hardening Linux Kernel Attack Surface via sysctl.conf",
    scenario: "A systems hardening team must configure Linux kernel settings on all Kubernetes worker nodes to prevent SYN flood attacks, restrict dmesg buffer inspection to root, and disable ICMP redirect acceptance.",
    question: "Which configuration entries in <code>/etc/sysctl.d/99-kubernetes-security.conf</code> enforce these kernel protections?",
    options: [
      { id: 'A', text: "Set <code>vm.max_map_count = 65530</code>, <code>kernel.sysrq = 1</code> and <code>tcp_syncookies = 1</code>, then <code>sysctl --system</code>" },
      { id: 'B', text: "Set <code>tcp_syncookies = 1</code>, <code>kernel.dmesg_restrict = 1</code> and <code>accept_redirects = 0</code>, then <code>sysctl --system</code>" },
      { id: 'C', text: "Set <code>net.ipv4.ip_forward = 0</code>, <code>kernel.kptr_restrict = 0</code> and <code>tcp_timestamps = 0</code>, then reboot" },
      { id: 'D', text: "Set <code>fs.file-max = 100000</code> and clear <code>bridge-nf-call-iptables</code>, then <code>sysctl --system</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configuring <code>net.ipv4.tcp_syncookies = 1</code> defends against SYN flood DoS attacks, <code>kernel.dmesg_restrict = 1</code> blocks unprivileged users from reading kernel logs (which can reveal memory addresses and sensitive data), and <code>net.ipv4.conf.all.accept_redirects = 0</code> prevents malicious ICMP routing redirection.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kernel-Hardening", "sysctl", "Linux-Security", "Host-Hardening"]
  }
];

export default K8S_CKS_QUESTIONS_2;
