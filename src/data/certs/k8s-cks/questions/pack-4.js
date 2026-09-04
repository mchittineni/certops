export const K8S_CKS_QUESTIONS_4 = [
  {
    id: "k8s-cks-76",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Pod Security Standards: Restricted Profile on Namespaces",
    scenario: "A company must enforce the most stringent Kubernetes Pod Security Standards on the <code>payments</code> namespace. Any pod attempting to run with privileged settings, root user, or host namespaces must be rejected at admission time.",
    question: "Which namespace labels enforce the Pod Security Standard restricted profile while warning developers in staging?",
    options: [
      { id: 'A', text: "Annotate the namespace with <code>admission.k8s.io/pod-security: 'strict'</code>" },
      { id: 'B', text: "Set <code>security.openshift.io/scc: restricted</code> on the pod template" },
      { id: 'C', text: "Set <code>pod-security.kubernetes.io/enforce: privileged</code> and <code>pod-security.kubernetes.io/audit: baseline</code>" },
      { id: 'D', text: "Set <code>pod-security.kubernetes.io/enforce: restricted</code> and <code>pod-security.kubernetes.io/warn: restricted</code> on the namespace metadata labels" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Built-in Pod Security Admission uses namespace labels. To reject non-compliant pods, apply <code>pod-security.kubernetes.io/enforce: restricted</code>. Adding <code>pod-security.kubernetes.io/warn: restricted</code> issues user-facing warnings in client responses during dry-run or creation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Restricted", "Admission", "Namespaces"]
  },
  {
    id: "k8s-cks-77",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Version Pinning for Pod Security Standards",
    scenario: "A cluster is upgraded to a newer Kubernetes minor version. An administrator wants to ensure that namespace Pod Security Standards evaluate against a fixed standard version (e.g., <code>v1.30</code>) to prevent unexpected admission rejections when new checks are introduced in future releases.",
    question: "Which label pins the Pod Security Standard version on the namespace?",
    options: [
      { id: 'A', text: "<code>security.kubernetes.io/target-version: 1.30</code>" },
      { id: 'B', text: "<code>pod-security.kubernetes.io/enforce-version: v1.30</code>" },
      { id: 'C', text: "<code>k8s.io/pss-version: v1.30</code>" },
      { id: 'D', text: "<code>pod-security.kubernetes.io/version-pin: '1.30'</code>" }
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
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Secrets Exposure Risks: Environment Variables vs Volume Mounts",
    scenario: "A security audit identifies that database credentials are being injected into application containers using <code>envFrom.secretRef</code>. What is the primary security vulnerability associated with injecting secrets as environment variables?",
    question: "Why is mounting Secrets as files in a tmpfs volume considered safer than environment variables?",
    options: [
      { id: 'A', text: "Secrets mounted as volumes are automatically encrypted using asymmetric RSA keys inside the container" },
      { id: 'B', text: "Environment variables can only contain 64 bytes of plaintext data" },
      { id: 'C', text: "Mounted volumes automatically notify external certificate authorities when secrets expire" },
      { id: 'D', text: "Environment variables are exposed in crash dumps, child processes, container inspect outputs (<code>crictl inspect</code>), and readable via <code>/proc/&lt;pid&gt;/environ</code>, whereas mounted secret volumes reside exclusively in memory-backed tmpfs and are not leaked into process tables" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Injecting sensitive credentials via environment variables exposes them in application crash logs, debugging outputs, child processes, and to anyone who can read <code>/proc/&lt;PID&gt;/environ</code> on the node. Mounting Secrets as volumes creates files inside an ephemeral, memory-backed <code>tmpfs</code> filesystem that can be updated in real time and is not broadcast across process inspection utilities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets", "Environment-Variables", "tmpfs", "Least-Privilege"]
  },
  {
    id: "k8s-cks-79",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Integrating External Secrets with Secrets Store CSI Driver",
    scenario: "An enterprise requires that database passwords and API keys stored in HashiCorp Vault or AWS Secrets Manager be synchronized directly into pods without persisting sensitive credentials in Kubernetes etcd.",
    question: "Which cloud-native architecture mounts external secrets directly into pod filesystems using an ephemeral CSI volume?",
    options: [
      { id: 'A', text: "Configure <code>--encryption-provider-config</code> with a plaintext token pointing to the vault address" },
      { id: 'B', text: "Deploy the Kubernetes Secrets Store CSI Driver and configure a <code>SecretProviderClass</code> referencing the external secret vault provider" },
      { id: 'C', text: "Mount <code>/etc/vault</code> as a hostPath volume on all worker nodes" },
      { id: 'D', text: "Create a CronJob that runs <code>kubectl create secret</code> every 10 minutes from external vault API queries" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Secrets Store CSI Driver allows Kubernetes to mount sensitive tokens, passwords, and keys from external secrets management systems (such as Vault, AWS Secrets Manager, Azure Key Vault, or GCP Secret Manager) directly into pods as an ephemeral volume via a <code>SecretProviderClass</code> resource without storing plaintext secrets in etcd.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets-Store-CSI", "Vault", "Cloud-Security", "Key-Management"]
  },
  {
    id: "k8s-cks-80",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Strict Mutual TLS (mTLS) with Istio PeerAuthentication",
    scenario: "To achieve Zero Trust architecture, all service-to-service communication within the <code>banking</code> namespace must be cryptographically encrypted and authenticated using mutual TLS. Any unencrypted plaintext TCP requests must be rejected immediately.",
    question: "Which Istio <code>PeerAuthentication</code> configuration enforces strict mTLS across the namespace?",
    options: [
      { id: 'A', text: "Annotate the namespace with <code>istio.io/tls: 'enabled'</code>" },
      { id: 'B', text: "Create a <code>PeerAuthentication</code> with <code>spec.mtls.mode: PERMISSIVE</code>" },
      { id: 'C', text: "Configure a <code>DestinationRule</code> with <code>tls.mode: DISABLE</code>" },
      { id: 'D', text: "Create a <code>PeerAuthentication</code> in namespace <code>banking</code> with <code>spec.mtls.mode: STRICT</code>" }
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
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Transparent In-Cluster Encryption with Cilium CNI WireGuard",
    scenario: "An organization wants to encrypt all node-to-node and pod-to-pod network traffic across a multi-node Kubernetes cluster at the networking layer without installing sidecar proxies or modifying application code.",
    question: "Which CNI capability provides kernel-level transparent encryption across all pod endpoints?",
    options: [
      { id: 'A', text: "Create an ingress NetworkPolicy requiring HTTPS on port 443" },
      { id: 'B', text: "Enable transparent encryption in Cilium using WireGuard (<code>encryption.type: wireguard</code>) or IPsec" },
      { id: 'C', text: "Enable <code>serverTLSBootstrap: true</code> in the worker node kubelet configuration" },
      { id: 'D', text: "Deploy an Envoy sidecar proxy into every application pod manually" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cilium CNI provides transparent network encryption at the Linux kernel layer using WireGuard or IPsec. When enabled (e.g., <code>encryption.type: wireguard</code>), Cilium automatically encrypts all inter-node pod and host traffic without needing sidecar injection, application changes, or user-space proxy overhead.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Cilium", "WireGuard", "Encryption-in-Transit", "CNI"]
  },
  {
    id: "k8s-cks-82",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Troubleshooting Production Pods with Ephemeral Debug Containers",
    scenario: "A production microservice container is built from a minimal scratch or distroless base image with no shell, curl, or debugging utilities. An on-call engineer must troubleshoot live networking and process issues without restarting the pod or rebuilding the container image.",
    question: "Which <code>kubectl</code> command injects a temporary debugging container into the running pod sharing its process and network namespaces?",
    options: [
      { id: 'A', text: "Run <code>kubectl cp &lt;pod-name&gt;:/bin/sh ./local-sh</code>" },
      { id: 'B', text: "Run <code>kubectl debug -it &lt;pod-name&gt; --image=busybox:latest --target=&lt;container-name&gt;</code>" },
      { id: 'C', text: "Run <code>kubectl exec -it &lt;pod-name&gt; -- /bin/sh -c 'apt-get install curl'</code>" },
      { id: 'D', text: "Run <code>kubectl patch pod &lt;pod-name&gt; -p '{\"spec\":{\"containers\":[{\"name\":\"debug\",\"image\":\"ubuntu\"}]}}'</code>" }
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
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing Resource Exhaustion with LimitRange",
    scenario: "Developers frequently forget to define CPU and memory requests and limits on their containers, allowing individual rogue containers to consume all worker node memory and trigger OOM killer panics.",
    question: "Which Kubernetes resource automatically assigns default requests/limits to newly created containers and restricts maximum allowable resources per pod in a namespace?",
    options: [
      { id: 'A', text: "A NetworkPolicy specifying bandwidth rate limits" },
      { id: 'B', text: "A PodDisruptionBudget specifying <code>minAvailable: 1</code>" },
      { id: 'C', text: "A <code>ResourceQuota</code> resource specifying <code>requests.cpu</code> and <code>limits.memory</code>" },
      { id: 'D', text: "A <code>LimitRange</code> resource defining <code>default</code>, <code>defaultRequest</code>, <code>max</code>, and <code>min</code> resource constraints" }
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
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Total Namespace Resource Consumption with ResourceQuota",
    scenario: "A multi-tenant cluster must prevent any single tenant namespace from consuming more than 16 CPU cores, 64 GiB of RAM, or creating more than 50 total Pods.",
    question: "Which resource enforces aggregate capacity boundaries across a namespace?",
    options: [
      { id: 'A', text: "A <code>ResourceQuota</code> specifying <code>limits.cpu: '16'</code>, <code>limits.memory: 64Gi</code>, and <code>pods: '50'</code>" },
      { id: 'B', text: "A <code>LimitRange</code> specifying <code>max.cpu: '16'</code> and <code>max.memory: 64Gi</code>" },
      { id: 'C', text: "A PriorityClass with <code>value: 1000</code> and <code>preemptionPolicy: Never</code>" },
      { id: 'D', text: "A NodeAffinity rule targeting nodes labeled with <code>quota=true</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A <code>ResourceQuota</code> sets hard aggregate limits on the total amount of computational resources (CPU, memory, storage) and object counts (pods, services, secrets) that can be consumed in a namespace. Once quota limits are reached, the API server rejects further creation requests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ResourceQuota", "Multi-Tenancy", "Resource-Exhaustion", "Governance"]
  },
  {
    id: "k8s-cks-85",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Pod Security Baseline vs Restricted Differences",
    scenario: "An organization is evaluating the trade-offs between Pod Security Standards Baseline and Restricted profiles for general microservices.",
    question: "What is a mandatory requirement enforced by the <code>restricted</code> profile that is permitted under the <code>baseline</code> profile?",
    options: [
      { id: 'A', text: "Containers are prohibited from mounting persistent volumes" },
      { id: 'B', text: "Pods must have at least three replicas in every deployment" },
      { id: 'C', text: "Containers must run as a non-root user (<code>runAsNonRoot: true</code>), drop all Linux capabilities (except possibly <code>NET_BIND_SERVICE</code>), and set <code>allowPrivilegeEscalation: false</code>" },
      { id: 'D', text: "Pods are forbidden from communicating with CoreDNS" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The <code>baseline</code> profile prevents known privilege escalations (blocking hostPath, hostNetwork, privileged mode), but still allows containers to run as root UID 0 with default Linux capabilities. The <code>restricted</code> profile enforces strict hardening: mandatory non-root execution (<code>runAsNonRoot: true</code>), dropping <code>ALL</code> capabilities, setting <code>allowPrivilegeEscalation: false</code>, and restricting volume types.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Baseline", "Restricted", "Hardening"]
  },
  {
    id: "k8s-cks-86",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Configuring ImagePullSecrets on ServiceAccounts",
    scenario: "To pull container images from a private enterprise registry requiring authentication, developers currently paste registry credentials into every individual pod manifest.",
    question: "What is the recommended best practice to automatically supply image pull credentials to all pods created by a specific ServiceAccount?",
    options: [
      { id: 'A', text: "Store the registry credentials in plaintext inside the <code>kubelet.conf</code> file on every worker node" },
      { id: 'B', text: "Add the registry password to the pod's environment variables under <code>REGISTRY_PASSWORD</code>" },
      { id: 'C', text: "Create a secret of type <code>kubernetes.io/dockerconfigjson</code> and link it to the ServiceAccount under <code>imagePullSecrets</code>" },
      { id: 'D', text: "Mount the <code>.docker/config.json</code> file into <code>/etc/kubernetes/</code> using a hostPath volume" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Linking a <code>kubernetes.io/dockerconfigjson</code> secret to a ServiceAccount using <code>imagePullSecrets: [{ name: my-registry-key }]</code> automatically injects the pull secret into all pods utilizing that ServiceAccount, eliminating credential duplication in individual pod manifests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["imagePullSecrets", "ServiceAccount", "Private-Registry", "Credential-Management"]
  },
  {
    id: "k8s-cks-87",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Volume Types in Pod Security Standards",
    scenario: "Under the Pod Security Standard <code>restricted</code> profile, which volume types are permitted for pod definitions?",
    question: "Which list reflects volume types allowed under the restricted PSS profile?",
    options: [
      { id: 'A', text: "<code>hostPath</code>, <code>nfs</code>, <code>glusterfs</code>, and <code>local</code>" },
      { id: 'B', text: "<code>gitRepo</code>, <code>iscsi</code>, <code>cephfs</code>, and <code>awsElasticBlockStore</code>" },
      { id: 'C', text: "<code>configMap</code>, <code>emptyDir</code>, <code>projected</code>, <code>secret</code>, <code>downwardAPI</code>, <code>persistentVolumeClaim</code>, and <code>csi</code>" },
      { id: 'D', text: "Only <code>emptyDir</code> volumes; all other volume types are forbidden" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Restricted Pod Security Standard restricts volume types to a safe whitelist: <code>configMap</code>, <code>emptyDir</code>, <code>projected</code>, <code>secret</code>, <code>downwardAPI</code>, <code>persistentVolumeClaim</code>, and ephemeral <code>csi</code> volumes. Dangerous volumes like <code>hostPath</code> are strictly blocked.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Volumes", "Restricted", "Storage"]
  },
  {
    id: "k8s-cks-88",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Dynamic Secret Management with HashiCorp Vault Agent Sidecars",
    scenario: "A database-driven application requires short-lived, dynamically generated database credentials that are rotated every 4 hours automatically.",
    question: "Which architecture pattern facilitates dynamic credential generation and injection into application pods?",
    options: [
      { id: 'A', text: "Store dynamic credentials in a Kubernetes ConfigMap updated via an external bash script" },
      { id: 'B', text: "Deploy a Vault Agent sidecar container using Vault Agent Injector annotations to authenticate to Vault via the Pod's ServiceAccount token, fetch dynamic lease credentials, and render them to a shared in-memory volume" },
      { id: 'C', text: "Grant the application pod the <code>cluster-admin</code> ClusterRole to generate secrets directly" },
      { id: 'D', text: "Embed Vault root administrative tokens inside application container environment variables" }
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
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Mitigating In-Memory Secret Leakage via Swap Partitioning",
    scenario: "A security requirement on high-security Kubernetes worker nodes dictates that application memory pages—including decrypted TLS keys and secrets—must never be written to unencrypted disk swap space.",
    question: "What is the standard Kubernetes node configuration regarding host memory swap?",
    options: [
      { id: 'A', text: "Deploy an admission controller that encrypts host swap sectors" },
      { id: 'B', text: "Disable host swap entirely using <code>swapoff -a</code> and remove swap entries from <code>/etc/fstab</code> (or configure kubelet <code>failSwapOn: true</code>)" },
      { id: 'C', text: "Enable swap on an encrypted NFS mount with <code>failSwapOn: false</code>" },
      { id: 'D', text: "Set container memory limits equal to zero in all pod manifests" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes historically mandates disabling swap (<code>swapoff -a</code> and removing swap partitions from <code>/etc/fstab</code>) with kubelet enforcing <code>failSwapOn: true</code>. This guarantees memory pages containing sensitive secrets or private keys are never flushed to plaintext swap partitions on disk.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Swap", "Host-Hardening", "Memory-Protection", "Kubelet"]
  },
  {
    id: "k8s-cks-90",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Linux Capabilities: CAP_NET_RAW Exploit Scenarios",
    scenario: "By default, unprivileged containers in Kubernetes retain the <code>CAP_NET_RAW</code> Linux capability. What network attack does this capability permit if a container is compromised?",
    question: "Which attack vector is enabled by granting <code>CAP_NET_RAW</code> to an application container?",
    options: [
      { id: 'A', text: "The container can capture all HTTPS traffic across external internet gateways" },
      { id: 'B', text: "The compromised container can craft raw IP and ICMP packets, forge ARP responses, and execute ARP spoofing or DNS spoofing attacks against other pods sharing the same virtual bridge network" },
      { id: 'C', text: "The container can force worker nodes into kernel panic using raw sockets" },
      { id: 'D', text: "The container can modify routing tables on the control plane node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>CAP_NET_RAW</code> allows an unprivileged process to construct arbitrary raw packets and bind to raw sockets. In a shared container network namespace or bridge, an attacker with <code>CAP_NET_RAW</code> can perform ARP cache poisoning and spoof DNS replies to intercept lateral pod traffic.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CAP_NET_RAW", "ARP-Spoofing", "Capabilities", "Network-Security"]
  },
  {
    id: "k8s-cks-91",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Non-Root Execution across Namespaces via PSS Audit",
    scenario: "Before turning on <code>enforce: restricted</code> on an active production namespace, a platform team wants to audit existing workloads to identify all pods that would fail restricted checks without breaking running services.",
    question: "Which namespace label records violations in the audit logs while allowing pods to continue running?",
    options: [
      { id: 'A', text: "<code>security.k8s.io/policy: audit-only</code>" },
      { id: 'B', text: "<code>admission.kubernetes.io/evaluate: permissive</code>" },
      { id: 'C', text: "<code>pod-security.kubernetes.io/mode: test</code>" },
      { id: 'D', text: "<code>pod-security.kubernetes.io/audit: restricted</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Applying <code>pod-security.kubernetes.io/audit: restricted</code> instructs the Pod Security Admission controller to evaluate all pod creation requests against the restricted standard and log any non-compliant configurations in the API server audit log with an audit annotation without rejecting pod creation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Audit", "Migration", "Namespaces"]
  },
  {
    id: "k8s-cks-92",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Securing Downward API Volume Exposures",
    scenario: "An application pod uses the Downward API to expose pod metadata (labels, IP, annotations) to containers as files. What security precaution must be taken when using the Downward API?",
    question: "What is the primary risk of exposing pod annotations via the Downward API?",
    options: [
      { id: 'A', text: "Sensitive credentials or configuration tokens placed in annotations could be accidentally exposed to unprivileged container processes" },
      { id: 'B', text: "Downward API volumes disable container memory limits" },
      { id: 'C', text: "Downward API files are permanently stored on worker node disks" },
      { id: 'D', text: "The Downward API requires the container to execute with <code>privileged: true</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pod annotations often contain configuration metadata or operational notes. Exposing annotations via the Downward API can inadvertently disclose sensitive tokens, deployment flags, or internal IPs to container processes. Sensitive credentials should only be stored in Secrets.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Downward-API", "Information-Disclosure", "Secrets", "Configuration"]
  },
  {
    id: "k8s-cks-93",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing CoreDNS Cache Poisoning via Pod Security Standards",
    scenario: "To defend against DNS hijacking and cache poisoning inside the cluster, an organization restricts container capabilities.",
    question: "Which Linux capability is required to execute ARP spoofing and intercept cluster DNS lookups?",
    options: [
      { id: 'A', text: "<code>CAP_KILL</code>" },
      { id: 'B', text: "<code>CAP_SYS_TIME</code>" },
      { id: 'C', text: "<code>CAP_NET_RAW</code>" },
      { id: 'D', text: "<code>CAP_CHOWN</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dropping <code>CAP_NET_RAW</code> prevents processes inside containers from opening raw sockets or broadcasting forged ARP packets, effectively neutralizing in-cluster ARP cache poisoning attacks aimed at redirecting DNS queries intended for CoreDNS.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CAP_NET_RAW", "DNS-Security", "Capabilities", "Zero-Trust"]
  },
  {
    id: "k8s-cks-94",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Secret Volume Projection with Specific File Permissions",
    scenario: "A sensitive SSL private key is mounted into a pod from a Secret. The application requires that the key file have permissions <code>0400</code> (read-only by owner) to satisfy internal security policies.",
    question: "How can the file permissions of the mounted secret be declaratively defined in the Pod specification?",
    options: [
      { id: 'A', text: "Set <code>defaultMode: 0400</code> under the Secret volume specification in <code>spec.volumes</code>" },
      { id: 'B', text: "Run <code>chmod 400</code> inside the application container entrypoint script" },
      { id: 'C', text: "Set <code>readOnlyRootFilesystem: true</code> in the container securityContext" },
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
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Automated Secret Rotation with Reloader / External Operators",
    scenario: "When a Secret is updated in Kubernetes, pods mounting the secret as environment variables do not automatically receive the new values without a restart.",
    question: "Why do pods mounting secrets as volume files receive updates while environment-variable based pods do not?",
    options: [
      { id: 'A', text: "Kubelet periodically polls and updates mounted secret volume projection files using symlink atomic swaps, whereas environment variables are injected only at container process initiation and cannot be modified dynamically" },
      { id: 'B', text: "The Linux kernel drops processes that attempt to change environment variables" },
      { id: 'C', text: "Environment variables are encrypted at the OS kernel level and locked upon execution" },
      { id: 'D', text: "Volume mounts communicate directly with etcd via WebSockets" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubelet maintains atomic symlinks for Secret volumes and updates them automatically during periodic sync loops. In contrast, environment variables are set once during container process creation (execve) and cannot be updated dynamically without terminating and restarting the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets", "Secret-Rotation", "Volumes", "Environment-Variables"]
  },
  {
    id: "k8s-cks-96",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Mutual TLS with Linkerd Service Mesh",
    scenario: "An engineering team deploys Linkerd to automatically provide zero-config mutual TLS across all microservice communications in a cluster.",
    question: "How does Linkerd validate pod identities during mutual TLS negotiation?",
    options: [
      { id: 'A', text: "Linkerd forces all pods to authenticate using the master node admin.conf credentials" },
      { id: 'B', text: "Linkerd checks shared static passwords stored in the <code>linkerd-config</code> ConfigMap" },
      { id: 'C', text: "Linkerd sidecar proxies validate each workload's identity using X.509 certificates derived from and cryptographically bound to the pod's Kubernetes ServiceAccount identity" },
      { id: 'D', text: "Linkerd compares the source and destination container IP addresses against an internal DNS table" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Service meshes like Linkerd and Istio establish pod identity based on the pod's <strong>ServiceAccount</strong>. Workload sidecar proxies obtain short-lived X.509 certificates signed by the mesh CA containing the ServiceAccount SAN (Subject Alternative Name), guaranteeing authenticated cryptographic identity during mTLS handshakes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Linkerd", "mTLS", "ServiceAccount", "Identity"]
  },
  {
    id: "k8s-cks-97",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Isolating Workloads with Pod Anti-Affinity Rules",
    scenario: "A compliance mandate requires that critical cryptographic signing service pods must never be scheduled onto the same physical worker node as public-facing web tier pods.",
    question: "Which Kubernetes scheduling mechanism prevents co-locating these pods on the same host?",
    options: [
      { id: 'A', text: "Configure <code>podAntiAffinity</code> with <code>topologyKey: 'kubernetes.io/hostname'</code> matching the public web tier labels" },
      { id: 'B', text: "Configure a <code>LimitRange</code> on the signing namespace" },
      { id: 'C', text: "Set <code>automountServiceAccountToken: false</code> on the web tier pods" },
      { id: 'D', text: "Deploy a <code>ValidatingAdmissionWebhook</code> with <code>failurePolicy: Ignore</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>podAntiAffinity</code> with <code>topologyKey: kubernetes.io/hostname</code> ensures that the Kubernetes scheduler will not place matching pods on the same node host. This provides hardware-level failure isolation and mitigates shared-host kernel attack risks between public and sensitive workloads.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["podAntiAffinity", "Isolation", "Scheduling", "Zero-Trust"]
  },
  {
    id: "k8s-cks-98",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Ephemeral Storage Consumption in Containers",
    scenario: "A misconfigured logging process writes unbounded debug logs to the container's writable layer, filling the host root partition and causing node disk pressure (NodeHasDiskPressure).",
    question: "Which resource constraint prevents individual pods from exhausting host ephemeral storage?",
    options: [
      { id: 'A', text: "Set <code>securityContext.runAsNonRoot: true</code>" },
      { id: 'B', text: "Configure <code>resources.limits.ephemeral-storage</code> and <code>resources.requests.ephemeral-storage</code> in the container specification" },
      { id: 'C', text: "Mount <code>/var/log</code> as a hostPath volume with <code>readOnly: false</code>" },
      { id: 'D', text: "Configure <code>maxReplicas: 1</code> in the HorizontalPodAutoscaler" }
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
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Migrating from PodSecurityPolicy (PSP) to Built-in Pod Security Standards",
    scenario: "With PodSecurityPolicy permanently removed in modern Kubernetes, an operations team must migrate security policies to native Pod Security Admission.",
    question: "What is the primary difference in how Pod Security Admission is applied compared to legacy PSP?",
    options: [
      { id: 'A', text: "Pod Security Admission is applied declaratively using labels on <strong>namespaces</strong> rather than complex RBAC bindings and PSP resources" },
      { id: 'B', text: "Pod Security Admission requires deploying an external OPA Gatekeeper cluster" },
      { id: 'C', text: "Pod Security Admission must be configured directly inside <code>/etc/kubernetes/admin.conf</code>" },
      { id: 'D', text: "Pod Security Admission only inspects pods running in the <code>kube-system</code> namespace" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Legacy PSP relied on creating PSP objects and binding them to users/service accounts via RBAC, which was notoriously complex and error-prone. Pod Security Admission replaces this with simple, standardized namespace labels (<code>pod-security.kubernetes.io/enforce</code>, <code>audit</code>, <code>warn</code>) mapping to three predefined profiles: Privileged, Baseline, and Restricted.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["PSP-Migration", "Pod-Security-Standards", "Admission", "Governance"]
  },
  {
    id: "k8s-cks-100",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Securing Environment Variables with Secret Key References",
    scenario: "An application deployment references a secret using <code>valueFrom.secretKeyRef</code>. What happens if the referenced Secret or key does not exist when the pod starts?",
    question: "How does Kubernetes handle a missing secret key reference by default?",
    options: [
      { id: 'A', text: "The Pod creation succeeds at the API level, but the pod fails to start and enters <code>CreateContainerConfigError</code> state until the secret and key exist" },
      { id: 'B', text: "The Pod starts successfully with the environment variable set to an empty string" },
      { id: 'C', text: "The API server automatically creates an empty Secret with a random 32-byte value" },
      { id: 'D', text: "The worker node crashes and reboots to clear container runtime cache" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "If a Secret key reference is missing and <code>optional: true</code> is not specified, the pod enters <code>CreateContainerConfigError</code> (or <code>CrashLoopBackOff</code>) because the container runtime cannot resolve the required environment variable.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets", "secretKeyRef", "Troubleshooting", "Pod-Lifecycle"]
  }
];

export default K8S_CKS_QUESTIONS_4;
