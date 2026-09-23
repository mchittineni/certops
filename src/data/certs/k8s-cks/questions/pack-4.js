export const K8S_CKS_QUESTIONS_4 = [
  {
    id: "k8s-cks-76",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Pod Security Standards: Restricted Profile on Namespaces",
    scenario: "A company must enforce the most stringent Kubernetes Pod Security Standards on the <code>payments</code> namespace. Any pod attempting to run with privileged settings, root user, or host namespaces must be rejected at admission time.",
    question: "Which namespace labels enforce the Pod Security Standard restricted profile while warning developers in staging?",
    options: [
      { id: 'A', text: "Set <code>pod-security.kubernetes.io/enforce: privileged</code> with <code>audit: baseline</code>" },
      { id: 'B', text: "Set <code>pod-security.kubernetes.io/enforce: restricted</code> with <code>warn: restricted</code>" },
      { id: 'C', text: "Set <code>pod-security.kubernetes.io/warn: restricted</code> and leave enforce unset" },
      { id: 'D', text: "Set <code>pod-security.kubernetes.io/enforce-version: latest</code> on its own" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Built-in Pod Security Admission uses namespace labels. To reject non-compliant pods, apply <code>pod-security.kubernetes.io/enforce: restricted</code>. Adding <code>pod-security.kubernetes.io/warn: restricted</code> issues user-facing warnings in client responses during dry-run or creation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Restricted", "Admission", "Namespaces"]
  },
  {
    id: "k8s-cks-77",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Version Pinning for Pod Security Standards",
    scenario: "A cluster is upgraded to a newer Kubernetes minor version. An administrator wants to ensure that namespace Pod Security Standards evaluate against a fixed standard version (e.g., <code>v1.30</code>) to prevent unexpected admission rejections when new checks are introduced in future releases.",
    question: "Which label pins the Pod Security Standard version on the namespace?",
    options: [
      { id: 'A', text: "<code>security.kubernetes.io/target-version: 1.30</code>" },
      { id: 'B', text: "<code>pod-security.kubernetes.io/enforce-version: v1.30</code>" },
      { id: 'C', text: "<code>pod-security.kubernetes.io/version-pin: '1.30'</code>" },
      { id: 'D', text: "<code>k8s.io/pss-version: v1.30</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The <code>pod-security.kubernetes.io/enforce-version: v1.30</code> (or <code>audit-version</code> / <code>warn-version</code>) label pins the evaluation rules to a specific Kubernetes minor version release. If omitted, it defaults to <code>latest</code>, which can introduce breaking policy changes when the control plane is upgraded.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Version-Pinning", "Governance", "Upgrades"]
  },
  {
    id: "k8s-cks-78",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Secrets Exposure Risks: Environment Variables vs Volume Mounts",
    scenario: "A security audit identifies that database credentials are being injected into application containers using <code>envFrom.secretRef</code>. What is the primary security vulnerability associated with injecting secrets as environment variables?",
    question: "Why is mounting Secrets as files in a tmpfs volume considered safer than environment variables?",
    options: [
      { id: 'A', text: "Secret volumes are encrypted with the node's own key material, whereas environment variables are written to etcd in the clear" },
      { id: 'B', text: "Environment variables leak via crash dumps, child processes and <code>/proc/&lt;pid&gt;/environ</code>; a secret volume stays in tmpfs" },
      { id: 'C', text: "Secret volumes are refreshed by the kubelet when the Secret changes, whereas environment variables are fixed for the container's life" },
      { id: 'D', text: "Secret volumes are readable only by the <code>fsGroup</code> that owns them, whereas environment variables are readable by every user in the container" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Injecting sensitive credentials via environment variables exposes them in application crash logs, debugging outputs, child processes, and to anyone who can read <code>/proc/&lt;PID&gt;/environ</code> on the node. Mounting Secrets as volumes creates files inside an ephemeral, memory-backed <code>tmpfs</code> filesystem that can be updated in real time and is not broadcast across process inspection utilities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets", "Environment-Variables", "tmpfs", "Least-Privilege"]
  },
  {
    id: "k8s-cks-79",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Integrating External Secrets with Secrets Store CSI Driver",
    scenario: "An enterprise requires that database passwords and API keys stored in HashiCorp Vault or AWS Secrets Manager be synchronized directly into pods without persisting sensitive credentials in Kubernetes etcd.",
    question: "Which cloud-native architecture mounts external secrets directly into pod filesystems using an ephemeral CSI volume?",
    options: [
      { id: 'A', text: "Run a CronJob that queries the vault and rewrites the Secret every few minutes" },
      { id: 'B', text: "Point <code>--encryption-provider-config</code> at a KMS plugin backed by the vault" },
      { id: 'C', text: "Mount the vault's agent socket from the node with a <code>hostPath</code> volume" },
      { id: 'D', text: "Install the Secrets Store CSI Driver and a <code>SecretProviderClass</code> for the vault" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Secrets Store CSI Driver allows Kubernetes to mount sensitive tokens, passwords, and keys from external secrets management systems (such as Vault, AWS Secrets Manager, Azure Key Vault, or GCP Secret Manager) directly into pods as an ephemeral volume via a <code>SecretProviderClass</code> resource without storing plaintext secrets in etcd.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets-Store-CSI", "Vault", "Cloud-Security", "Key-Management"]
  },
  {
    id: "k8s-cks-80",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Strict Mutual TLS (mTLS) with Istio PeerAuthentication",
    scenario: "To achieve Zero Trust architecture, all service-to-service communication within the <code>banking</code> namespace must be cryptographically encrypted and authenticated using mutual TLS. Any unencrypted plaintext TCP requests must be rejected immediately.",
    question: "Which Istio <code>PeerAuthentication</code> configuration enforces strict mTLS across the namespace?",
    options: [
      { id: 'A', text: "A <code>PeerAuthentication</code> in the namespace with <code>spec.mtls.mode: PERMISSIVE</code>" },
      { id: 'B', text: "A <code>DestinationRule</code> for the namespace's hosts with <code>tls.mode: ISTIO_MUTUAL</code>" },
      { id: 'C', text: "An <code>AuthorizationPolicy</code> in the namespace requiring a principal on every request" },
      { id: 'D', text: "A <code>PeerAuthentication</code> in the namespace with <code>spec.mtls.mode: STRICT</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting <code>spec.mtls.mode: STRICT</code> in an Istio <code>PeerAuthentication</code> policy enforces that all incoming connections must present a valid client certificate verified via mutual TLS. In contrast, <code>PERMISSIVE</code> mode accepts both plaintext and mTLS traffic, which does not prevent unencrypted lateral communication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Istio", "mTLS", "PeerAuthentication", "Service-Mesh"]
  },
  {
    id: "k8s-cks-81",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Transparent In-Cluster Encryption with Cilium CNI WireGuard",
    scenario: "An organization wants to encrypt all node-to-node and pod-to-pod network traffic across a multi-node Kubernetes cluster at the networking layer without installing sidecar proxies or modifying application code.",
    question: "Which CNI capability provides kernel-level transparent encryption across all pod endpoints?",
    options: [
      { id: 'A', text: "Enable <code>serverTLSBootstrap: true</code> on each node's kubelet" },
      { id: 'B', text: "Inject an Envoy sidecar into every pod and require mTLS" },
      { id: 'C', text: "Add an ingress NetworkPolicy that permits only port 443" },
      { id: 'D', text: "Enable Cilium's transparent encryption with WireGuard" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cilium CNI provides transparent network encryption at the Linux kernel layer using WireGuard or IPsec. When enabled (e.g., <code>encryption.type: wireguard</code>), Cilium automatically encrypts all inter-node pod and host traffic without needing sidecar injection, application changes, or user-space proxy overhead.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Cilium", "WireGuard", "Encryption-in-Transit", "CNI"]
  },
  {
    id: "k8s-cks-82",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Troubleshooting Production Pods with Ephemeral Debug Containers",
    scenario: "A production microservice container is built from a minimal scratch or distroless base image with no shell, curl, or debugging utilities. An on-call engineer must troubleshoot live networking and process issues without restarting the pod or rebuilding the container image.",
    question: "Which <code>kubectl</code> command injects a temporary debugging container into the running pod sharing its process and network namespaces?",
    options: [
      { id: 'A', text: "Run <code>kubectl cp &lt;pod-name&gt;:/bin/sh ./local-sh</code>" },
      { id: 'B', text: "Run <code>kubectl debug -it &lt;pod-name&gt; --image=busybox:latest --target=&lt;container-name&gt;</code>" },
      { id: 'C', text: "Run <code>kubectl patch pod &lt;pod-name&gt; -p '{\"spec\":{\"containers\":[{\"name\":\"debug\",\"image\":\"ubuntu\"}]}}'</code>" },
      { id: 'D', text: "Run <code>kubectl exec -it &lt;pod-name&gt; -- /bin/sh -c 'apt-get install curl'</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Ephemeral containers (<code>kubectl debug -it &lt;pod&gt; --image=&lt;debug-image&gt; --target=&lt;target-container&gt;</code>) allow injecting an ephemeral container into a live, running pod. Specifying <code>--target</code> enables process namespace sharing with the target container, allowing inspection of <code>/proc</code> without bloating production images with shells or package managers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Ephemeral-Containers", "kubectl-debug", "Distroless", "Troubleshooting"]
  },
  {
    id: "k8s-cks-83",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing Resource Exhaustion with LimitRange",
    scenario: "Developers frequently forget to define CPU and memory requests and limits on their containers, allowing individual rogue containers to consume all worker node memory and trigger OOM killer panics.",
    question: "Which Kubernetes resource automatically assigns default requests/limits to newly created containers and restricts maximum allowable resources per pod in a namespace?",
    options: [
      { id: 'A', text: "A <code>ResourceQuota</code> carrying <code>requests.cpu</code> and <code>limits.memory</code> totals" },
      { id: 'B', text: "A <code>PriorityClass</code> whose preemption policy bounds each pod's resources" },
      { id: 'C', text: "A mutating webhook that writes the defaults into each pod as it is admitted" },
      { id: 'D', text: "A <code>LimitRange</code> carrying <code>default</code>, <code>max</code> and <code>min</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A <code>LimitRange</code> defines minimum, maximum, and default CPU/memory requests and limits for containers in a namespace. If a container is deployed without declaring resources, the <code>LimitRange</code> admission controller automatically injects the configured default requests and limits.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["LimitRange", "Resource-Management", "DoS-Prevention", "Governance"]
  },
  {
    id: "k8s-cks-84",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Total Namespace Resource Consumption with ResourceQuota",
    scenario: "A multi-tenant cluster must prevent any single tenant namespace from consuming more than 16 CPU cores, 64 GiB of RAM, or creating more than 50 total Pods.",
    question: "Which resource enforces aggregate capacity boundaries across a namespace?",
    options: [
      { id: 'A', text: "A <code>LimitRange</code> with <code>max.cpu</code> and <code>max.memory</code> per container" },
      { id: 'B', text: "A <code>ResourceQuota</code> with <code>limits.cpu</code>, <code>limits.memory</code> and a pod count" },
      { id: 'C', text: "A node affinity rule that pins the namespace's pods to a labelled node pool" },
      { id: 'D', text: "A <code>PriorityClass</code> with <code>preemptionPolicy: Never</code> for the namespace" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A <code>ResourceQuota</code> sets hard aggregate limits on the total amount of computational resources (CPU, memory, storage) and object counts (pods, services, secrets) that can be consumed in a namespace. Once quota limits are reached, the API server rejects further creation requests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ResourceQuota", "Multi-Tenancy", "Resource-Exhaustion", "Governance"]
  },
  {
    id: "k8s-cks-85",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Baseline vs Restricted Differences",
    scenario: "An organization is evaluating the trade-offs between Pod Security Standards Baseline and Restricted profiles for general microservices.",
    question: "What is a mandatory requirement enforced by the <code>restricted</code> profile that is permitted under the <code>baseline</code> profile?",
    options: [
      { id: 'A', text: "Containers must set a seccomp profile and may not use <code>hostPath</code> volumes of any kind" },
      { id: 'B', text: "Containers must set <code>readOnlyRootFilesystem: true</code> and may not mount persistent volumes" },
      { id: 'C', text: "Containers must declare resource limits and may not share the host's PID or IPC namespaces" },
      { id: 'D', text: "Containers must run as non-root, drop all capabilities, and set <code>allowPrivilegeEscalation: false</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>baseline</code> profile prevents known privilege escalations (blocking hostPath, hostNetwork, privileged mode), but still allows containers to run as root UID 0 with default Linux capabilities. The <code>restricted</code> profile enforces strict hardening: mandatory non-root execution (<code>runAsNonRoot: true</code>), dropping <code>ALL</code> capabilities, setting <code>allowPrivilegeEscalation: false</code>, and restricting volume types.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Baseline", "Restricted", "Hardening"]
  },
  {
    id: "k8s-cks-86",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Configuring ImagePullSecrets on ServiceAccounts",
    scenario: "To pull container images from a private enterprise registry requiring authentication, developers currently paste registry credentials into every individual pod manifest.",
    question: "What is the recommended best practice to automatically supply image pull credentials to all pods created by a specific ServiceAccount?",
    options: [
      { id: 'A', text: "Create a <code>dockerconfigjson</code> Secret and list it under the ServiceAccount's <code>imagePullSecrets</code>" },
      { id: 'B', text: "Write the credentials into each node's <code>/var/lib/kubelet/config.json</code> so every pull is covered" },
      { id: 'C', text: "Mount the <code>.docker/config.json</code> file into the pods from a <code>hostPath</code> volume" },
      { id: 'D', text: "Pass the registry credentials to the pods as environment variables from a Secret" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Linking a <code>kubernetes.io/dockerconfigjson</code> secret to a ServiceAccount using <code>imagePullSecrets: [{ name: my-registry-key }]</code> automatically injects the pull secret into all pods utilizing that ServiceAccount, eliminating credential duplication in individual pod manifests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["imagePullSecrets", "ServiceAccount", "Private-Registry", "Credential-Management"]
  },
  {
    id: "k8s-cks-87",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Volume Types in Pod Security Standards",
    scenario: "Under the Pod Security Standard <code>restricted</code> profile, which volume types are permitted for pod definitions?",
    question: "Which list reflects volume types allowed under the restricted PSS profile?",
    options: [
      { id: 'A', text: "<code>configMap</code>, <code>emptyDir</code>, <code>secret</code>, <code>gitRepo</code>, <code>iscsi</code>, <code>cephfs</code>, <code>awsElasticBlockStore</code>" },
      { id: 'B', text: "<code>configMap</code>, <code>emptyDir</code>, <code>projected</code>, <code>secret</code>, <code>downwardAPI</code>, <code>persistentVolumeClaim</code>, <code>csi</code>" },
      { id: 'C', text: "<code>configMap</code>, <code>emptyDir</code>, <code>secret</code>, <code>hostPath</code>, <code>nfs</code>, <code>glusterfs</code>, <code>local</code>" },
      { id: 'D', text: "<code>emptyDir</code> alone; every other volume type is forbidden under the restricted profile" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Restricted Pod Security Standard restricts volume types to a safe whitelist: <code>configMap</code>, <code>emptyDir</code>, <code>projected</code>, <code>secret</code>, <code>downwardAPI</code>, <code>persistentVolumeClaim</code>, and ephemeral <code>csi</code> volumes. Dangerous volumes like <code>hostPath</code> are strictly blocked.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Volumes", "Restricted", "Storage"]
  },
  {
    id: "k8s-cks-88",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Dynamic Secret Management with HashiCorp Vault Agent Sidecars",
    scenario: "A database-driven application requires short-lived, dynamically generated database credentials that are rotated every 4 hours automatically.",
    question: "Which architecture pattern facilitates dynamic credential generation and injection into application pods?",
    options: [
      { id: 'A', text: "Inject a Vault Agent sidecar that logs in with a static AppRole secret ID baked into the pod's own environment" },
      { id: 'B', text: "Inject a Vault Agent sidecar that logs in with the pod's ServiceAccount token and renders leased credentials to a tmpfs volume" },
      { id: 'C', text: "Run a controller that mints credentials on a schedule and writes them into a ConfigMap the pods read at startup" },
      { id: 'D', text: "Run the Vault CSI provider and mount the credential as a volume using the node's own Vault root token" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Vault Agent Injector pattern uses annotations (e.g., <code>vault.hashicorp.com/agent-inject: 'true'</code>) to inject a sidecar container that exchanges the pod's projected ServiceAccount token for a Vault token, retrieves dynamic short-lived credentials, and writes them to a shared in-memory <code>tmpfs</code> volume.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Vault", "Dynamic-Secrets", "Sidecar", "Credential-Rotation"]
  },
  {
    id: "k8s-cks-89",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Mitigating In-Memory Secret Leakage via Swap Partitioning",
    scenario: "A security requirement on high-security Kubernetes worker nodes dictates that application memory pages—including decrypted TLS keys and secrets—must never be written to unencrypted disk swap space, yet the team wants to keep swap for burst memory headroom on Kubernetes v1.35.",
    question: "Which node configuration meets both goals?",
    options: [
      { id: 'A', text: "Leave swap enabled and set <code>failSwapOn: false</code>, relying on container memory limits to bound usage" },
      { id: 'B', text: "Put swap on an encrypted device, set <code>failSwapOn: false</code> and <code>swapBehavior: LimitedSwap</code>" },
      { id: 'C', text: "Disable swap with <code>swapoff -a</code>, clear <code>/etc/fstab</code>, keep <code>failSwapOn: true</code>" },
      { id: 'D', text: "Disable swap on the worker nodes only, leaving the control plane nodes with swap for burst headroom" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Swap on Linux nodes is stable since Kubernetes v1.34 (the NodeSwap feature). To let workloads use it, the kubelet needs <code>failSwapOn: false</code> and <code>memorySwap.swapBehavior: LimitedSwap</code>; the default <code>NoSwap</code> gives pods no swap at all. The kubelet does not encrypt swap: the Kubernetes documentation makes provisioning encrypted swap the administrator's responsibility, and that is what keeps decrypted secrets off plaintext disk. Disabling swap entirely was the historical requirement and still protects secrets, but it gives up the headroom the team wants to keep. Unencrypted swap leaks memory pages to disk, and keeping swap only on control plane nodes does nothing for worker workloads.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Swap", "Host-Hardening", "Memory-Protection", "Kubelet"]
  },
  {
    id: "k8s-cks-90",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Linux Capabilities: CAP_NET_RAW Exploit Scenarios",
    scenario: "By default, unprivileged containers in Kubernetes retain the <code>CAP_NET_RAW</code> Linux capability. What network attack does this capability permit if a container is compromised?",
    question: "Which attack vector is enabled by granting <code>CAP_NET_RAW</code> to an application container?",
    options: [
      { id: 'A', text: "It can craft raw packets, forge ARP replies, and spoof ARP or DNS for the pods on its own bridge" },
      { id: 'B', text: "It can read the node's TLS session keys, which exposes HTTPS traffic leaving through the gateway" },
      { id: 'C', text: "It can alter the node's routing table, which redirects traffic bound for the control plane" },
      { id: 'D', text: "It can exhaust the kernel's socket buffers, which panics the node under sustained raw traffic" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>CAP_NET_RAW</code> allows an unprivileged process to construct arbitrary raw packets and bind to raw sockets. In a shared container network namespace or bridge, an attacker with <code>CAP_NET_RAW</code> can perform ARP cache poisoning and spoof DNS replies to intercept lateral pod traffic.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CAP_NET_RAW", "ARP-Spoofing", "Capabilities", "Network-Security"]
  },
  {
    id: "k8s-cks-91",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Non-Root Execution across Namespaces via PSS Audit",
    scenario: "Before turning on <code>enforce: restricted</code> on an active production namespace, a platform team wants to audit existing workloads to identify all pods that would fail restricted checks without breaking running services.",
    question: "Which namespace label records violations in the audit logs while allowing pods to continue running?",
    options: [
      { id: 'A', text: "<code>pod-security.kubernetes.io/audit: restricted</code>" },
      { id: 'B', text: "<code>security.k8s.io/policy: audit-only</code>" },
      { id: 'C', text: "<code>admission.kubernetes.io/evaluate: permissive</code>" },
      { id: 'D', text: "<code>pod-security.kubernetes.io/mode: test</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Applying <code>pod-security.kubernetes.io/audit: restricted</code> instructs the Pod Security Admission controller to evaluate all pod creation requests against the restricted standard and log any non-compliant configurations in the API server audit log with an audit annotation without rejecting pod creation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Audit", "Migration", "Namespaces"]
  },
  {
    id: "k8s-cks-92",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Securing Downward API Volume Exposures",
    scenario: "An application pod uses the Downward API to expose pod metadata (labels, IP, annotations) to containers as files. What security precaution must be taken when using the Downward API?",
    question: "What is the primary risk of exposing pod annotations via the Downward API?",
    options: [
      { id: 'A', text: "The Downward API requires <code>privileged: true</code>, which widens the container's own rights" },
      { id: 'B', text: "The projected files are written to the node's disk, where they survive the pod's deletion" },
      { id: 'C', text: "A credential put in an annotation becomes readable by every unprivileged process in the container" },
      { id: 'D', text: "The projected volume counts against the pod's memory limit, which can trigger eviction" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Pod annotations often contain configuration metadata or operational notes. Exposing annotations via the Downward API can inadvertently disclose sensitive tokens, deployment flags, or internal IPs to container processes. Sensitive credentials should only be stored in Secrets.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Downward-API", "Information-Disclosure", "Secrets", "Configuration"]
  },
  {
    id: "k8s-cks-93",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing CoreDNS Cache Poisoning via Pod Security Standards",
    scenario: "To defend against DNS hijacking and cache poisoning inside the cluster, an organization restricts container capabilities.",
    question: "Which Linux capability is required to execute ARP spoofing and intercept cluster DNS lookups?",
    options: [
      { id: 'A', text: "<code>CAP_CHOWN</code>" },
      { id: 'B', text: "<code>CAP_SYS_TIME</code>" },
      { id: 'C', text: "<code>CAP_KILL</code>" },
      { id: 'D', text: "<code>CAP_NET_RAW</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dropping <code>CAP_NET_RAW</code> prevents processes inside containers from opening raw sockets or broadcasting forged ARP packets, effectively neutralizing in-cluster ARP cache poisoning attacks aimed at redirecting DNS queries intended for CoreDNS.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CAP_NET_RAW", "DNS-Security", "Capabilities", "Zero-Trust"]
  },
  {
    id: "k8s-cks-94",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Secret Volume Projection with Specific File Permissions",
    scenario: "A sensitive SSL private key is mounted into a pod from a Secret. The application requires that the key file have permissions <code>0400</code> (read-only by owner) to satisfy internal security policies.",
    question: "How can the file permissions of the mounted secret be declaratively defined in the Pod specification?",
    options: [
      { id: 'A', text: "Set <code>defaultMode: 0400</code> on the Secret volume in <code>spec.volumes</code>" },
      { id: 'B', text: "Set <code>readOnlyRootFilesystem: true</code> on the mounting container" },
      { id: 'C', text: "Run <code>chmod 400</code> on the mount from the container's entrypoint" },
      { id: 'D', text: "Annotate the Secret with <code>kubernetes.io/file-mode: '0400'</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>defaultMode</code> field in a Secret (or ConfigMap) volume specification allows defining octal POSIX file permissions (e.g., <code>defaultMode: 0400</code> or <code>0440</code>) for all projected secret files. This guarantees files are read-only and restricted immediately upon mounting.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets", "defaultMode", "File-Permissions", "Pod-Spec"]
  },
  {
    id: "k8s-cks-95",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Automated Secret Rotation with Reloader / External Operators",
    scenario: "When a Secret is updated in Kubernetes, pods mounting the secret as environment variables do not automatically receive the new values without a restart.",
    question: "Why do pods mounting secrets as volume files receive updates while environment-variable based pods do not?",
    options: [
      { id: 'A', text: "The kubelet watches the Secret and restarts the container when it changes, which environment variables cannot trigger" },
      { id: 'B', text: "The volume is backed by a watch against etcd, while environment variables are resolved by the API server at admission" },
      { id: 'C', text: "The volume is re-read by the application on each open, while environment variables are cached by the C library" },
      { id: 'D', text: "The kubelet refreshes the projected volume with an atomic symlink swap, while environment variables are set once at process start" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubelet maintains atomic symlinks for Secret volumes and updates them automatically during periodic sync loops. In contrast, environment variables are set once during container process creation (execve) and cannot be updated dynamically without terminating and restarting the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets", "Secret-Rotation", "Volumes", "Environment-Variables"]
  },
  {
    id: "k8s-cks-96",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Mutual TLS with Linkerd Service Mesh",
    scenario: "An engineering team deploys Linkerd to automatically provide zero-config mutual TLS across all microservice communications in a cluster.",
    question: "How does Linkerd validate pod identities during mutual TLS negotiation?",
    options: [
      { id: 'A', text: "Its proxies compare the peer's source address against the endpoints the control plane published" },
      { id: 'B', text: "Its proxies share a key held in the <code>linkerd-config</code> ConfigMap and derive session keys from it" },
      { id: 'C', text: "Its proxies authenticate to the control plane with the node's kubelet client certificate" },
      { id: 'D', text: "Its proxies present X.509 certificates bound to each workload's Kubernetes ServiceAccount identity" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Service meshes like Linkerd and Istio establish pod identity based on the pod's <strong>ServiceAccount</strong>. Workload sidecar proxies obtain short-lived X.509 certificates signed by the mesh CA containing the ServiceAccount SAN (Subject Alternative Name), guaranteeing authenticated cryptographic identity during mTLS handshakes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Linkerd", "mTLS", "ServiceAccount", "Identity"]
  },
  {
    id: "k8s-cks-97",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Isolating Workloads with Pod Anti-Affinity Rules",
    scenario: "A compliance mandate requires that critical cryptographic signing service pods must never be scheduled onto the same physical worker node as public-facing web tier pods.",
    question: "Which Kubernetes scheduling mechanism prevents co-locating these pods on the same host?",
    options: [
      { id: 'A', text: "A <code>podAffinity</code> on <code>topologyKey: topology.kubernetes.io/zone</code> for the signing pods" },
      { id: 'B', text: "A node taint on the signing nodes with a toleration on the signing pods alone" },
      { id: 'C', text: "A <code>podAntiAffinity</code> on <code>topologyKey: kubernetes.io/hostname</code> matching the web tier" },
      { id: 'D', text: "A <code>topologySpreadConstraint</code> with <code>maxSkew: 1</code> over the node hostname" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "<code>podAntiAffinity</code> with <code>topologyKey: kubernetes.io/hostname</code> ensures that the Kubernetes scheduler will not place matching pods on the same node host. This provides hardware-level failure isolation and mitigates shared-host kernel attack risks between public and sensitive workloads.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["podAntiAffinity", "Isolation", "Scheduling", "Zero-Trust"]
  },
  {
    id: "k8s-cks-98",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Ephemeral Storage Consumption in Containers",
    scenario: "A misconfigured logging process writes unbounded debug logs to the container's writable layer, filling the host root partition and causing node disk pressure (NodeHasDiskPressure).",
    question: "Which resource constraint prevents individual pods from exhausting host ephemeral storage?",
    options: [
      { id: 'A', text: "Mount an <code>emptyDir</code> with a <code>sizeLimit</code> at the container's write path" },
      { id: 'B', text: "Set <code>requests</code> and <code>limits</code> for <code>ephemeral-storage</code> on the container" },
      { id: 'C', text: "Set a <code>ResourceQuota</code> on the namespace's total ephemeral storage claim" },
      { id: 'D', text: "Set the kubelet's own eviction threshold for node filesystem usage instead" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes supports setting ephemeral storage requests and limits (<code>ephemeral-storage</code>). If a container or pod exceeds its configured ephemeral storage limit, kubelet evicts the pod to safeguard the host node disk from complete storage exhaustion.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ephemeral-storage", "DiskPressure", "Resource-Limits", "Availability"]
  },
  {
    id: "k8s-cks-99",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Migrating from PodSecurityPolicy (PSP) to Built-in Pod Security Standards",
    scenario: "With PodSecurityPolicy permanently removed in modern Kubernetes, an operations team must migrate security policies to native Pod Security Admission.",
    question: "What is the primary difference in how Pod Security Admission is applied compared to legacy PSP?",
    options: [
      { id: 'A', text: "It is configured in the API server's own admission configuration file, not in the cluster's objects" },
      { id: 'B', text: "It is enforced by an external admission controller that has to be installed alongside the cluster" },
      { id: 'C', text: "It is applied with labels on <strong>namespaces</strong>, rather than through RBAC bindings to policy objects" },
      { id: 'D', text: "It is evaluated only for pods in the system namespaces, leaving workload namespaces to RBAC" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Legacy PSP relied on creating PSP objects and binding them to users/service accounts via RBAC, which was notoriously complex and error-prone. Pod Security Admission replaces this with simple, standardized namespace labels (<code>pod-security.kubernetes.io/enforce</code>, <code>audit</code>, <code>warn</code>) mapping to three predefined profiles: Privileged, Baseline, and Restricted.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["PSP-Migration", "Pod-Security-Standards", "Admission", "Governance"]
  },
  {
    id: "k8s-cks-100",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Securing Environment Variables with Secret Key References",
    scenario: "An application deployment references a secret using <code>valueFrom.secretKeyRef</code>. What happens if the referenced Secret or key does not exist when the pod starts?",
    question: "How does Kubernetes handle a missing secret key reference by default?",
    options: [
      { id: 'A', text: "The pod object is rejected at admission, since the ServiceAccount plugin resolves the reference" },
      { id: 'B', text: "The pod starts normally, with the environment variable present but set to an empty string" },
      { id: 'C', text: "The pod object is created, then fails to start and sits in <code>CreateContainerConfigError</code>" },
      { id: 'D', text: "The pod starts normally, and the kubelet retries the mount until the key appears in the Secret" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "If a Secret key reference is missing and <code>optional: true</code> is not specified, the pod enters <code>CreateContainerConfigError</code> (or <code>CrashLoopBackOff</code>) because the container runtime cannot resolve the required environment variable.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets", "secretKeyRef", "Troubleshooting", "Pod-Lifecycle"]
  }
];

export default K8S_CKS_QUESTIONS_4;
