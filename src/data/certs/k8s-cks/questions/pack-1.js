export const K8S_CKS_QUESTIONS_1 = [
  {
    id: "k8s-cks-1",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Benchmark File Permission Remediation on Control Plane Components",
    scenario: "A security audit running <code>kube-bench</code> on a Kubernetes control plane node flags non-compliant file permissions on the static pod manifest for <code>kube-apiserver.yaml</code>, which is currently set to mode <code>0664</code> and owned by an unprivileged user group.",
    question: "Which corrective permission and ownership configuration should be applied to satisfy the CIS Kubernetes Benchmark recommendations?",
    options: [
      { id: 'A', text: "Own the manifest as <code>root:root</code> and set <code>chmod 600</code> on it" },
      { id: 'B', text: "Own the manifest as <code>kubelet:kubelet</code> and set <code>chmod 400</code> on it" },
      { id: 'C', text: "Own the manifest as <code>nobody:nogroup</code> and set <code>chmod 444</code> on it" },
      { id: 'D', text: "Move the manifest to <code>/var/run/kubernetes</code> and own it as the runtime user" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CIS Kubernetes Benchmark mandates that control plane static pod manifests—including <code>/etc/kubernetes/manifests/kube-apiserver.yaml</code>, <code>kube-controller-manager.yaml</code>, and <code>kube-scheduler.yaml</code>—must be owned by <code>root:root</code> and have file permissions of <code>0600</code> or at most <code>0644</code> to prevent unauthorized modification by non-root system users. Assigning ownership to unprivileged or application users violates integrity guardrails.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CIS-Benchmark", "Control-Plane", "Hardening", "File-Permissions"]
  },
  {
    id: "k8s-cks-2",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Default-Deny Ingress and Egress NetworkPolicy Enforcement",
    scenario: "A security policy requires that all newly provisioned tenant namespaces in a multi-tenant cluster isolate pod traffic by default, blocking all incoming and outgoing connections unless explicitly allowed by subsequent granular NetworkPolicies.",
    question: "Which NetworkPolicy manifest correctly establishes a complete default-deny baseline for both ingress and egress traffic across a namespace?",
    options: [
      { id: 'A', text: "A NetworkPolicy with <code>policyTypes: ['Ingress']</code> and <code>ingress: [{ from: [] }]</code>" },
      { id: 'B', text: "A NetworkPolicy with <code>podSelector: { role: 'deny-all' }</code> and no <code>policyTypes</code>" },
      { id: 'C', text: "A NetworkPolicy with <code>matchLabels: { env: 'all' }</code> and an egress <code>0.0.0.0/0</code> rule" },
      { id: 'D', text: "A NetworkPolicy with <code>podSelector: {}</code> and both <code>policyTypes</code>, with no rules" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A complete default-deny NetworkPolicy must specify an empty <code>podSelector: {}</code> (which matches all pods within the target namespace) and declare both <code>Ingress</code> and <code>Egress</code> under <code>policyTypes</code> without defining any ingress or egress rules. Omitting rules while specifying policy types drops all incoming and outgoing traffic not explicitly whitelisted.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "Traffic-Isolation", "Zero-Trust", "Networking"]
  },
  {
    id: "k8s-cks-3",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Restricting Cloud Instance Metadata Endpoint Access via NetworkPolicy",
    scenario: "Workloads running on a managed cloud Kubernetes cluster attempt to query the link-local Instance Metadata Service (IMDS) at <code>169.254.169.254</code> to extract instance IAM credentials. The security team must block all microservice pods from reaching this IP while preserving outbound Internet access.",
    question: "Which egress NetworkPolicy configuration enforces this metadata isolation?",
    options: [
      { id: 'A', text: "An egress rule whose <code>ipBlock</code> is <code>0.0.0.0/0</code> with the metadata IP under <code>except</code>" },
      { id: 'B', text: "An egress rule restricting the pods' DNS lookups to the cluster's own service names" },
      { id: 'C', text: "An egress rule with <code>ports: [{ port: 80, protocol: 'TCP' }]</code> and no <code>to</code> block" },
      { id: 'D', text: "An ingress rule denying traffic from the metadata address while allowing port 80" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To allow external internet egress while preventing pods from reaching the cloud instance metadata endpoint, the egress rule must define an <code>ipBlock</code> with <code>cidr: 0.0.0.0/0</code> and specify <code>except: [169.254.169.254/32]</code>. This blocks pod requests directed at the cloud metadata service, preventing SSRF attacks and credential theft.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "IMDS", "Metadata-Protection", "Egress"]
  },
  {
    id: "k8s-cks-4",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Encrypting Kubernetes Secrets at Rest in etcd",
    scenario: "A financial enterprise discovers that sensitive tokens and certificates stored as Kubernetes Secrets are saved in plaintext format inside <code>etcd</code> datastores, failing compliance with regulatory data-at-rest encryption standards.",
    question: "What is the correct procedure to enable secret encryption at rest using the native EncryptionConfiguration mechanism?",
    options: [
      { id: 'A', text: "Write an <code>EncryptionConfiguration</code> with an <code>aescbc</code> provider and enable disk encryption on <code>/var/lib/etcd</code>, then restart etcd" },
      { id: 'B', text: "Write an <code>EncryptionConfiguration</code> with the <code>identity</code> provider first, mount it into the API server, and annotate the secrets to be encrypted" },
      { id: 'C', text: "Write an <code>EncryptionConfiguration</code> with a <code>kms</code> provider and have a sidecar on each control plane pod encrypt payloads before they reach etcd" },
      { id: 'D', text: "Write an <code>EncryptionConfiguration</code> with an <code>aescbc</code> provider, mount it into the API server, set the flag, then rewrite the secrets" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enabling native Secret encryption at rest requires creating an <code>EncryptionConfiguration</code> YAML file defining providers (e.g., <code>aescbc</code>, <code>aesgcm</code>, or <code>kms</code>), passing this path to the <code>kube-apiserver</code> via <code>--encryption-provider-config</code>, and executing a replacement of all existing secrets (<code>kubectl get secrets -A -o json | kubectl replace -f -</code>) so existing plaintext secrets are rewritten with encryption.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["etcd", "Encryption-at-Rest", "Secrets", "Control-Plane"]
  },
  {
    id: "k8s-cks-5",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Hardening Kube-Apiserver Anonymous Authentication and Insecure Ports",
    scenario: "An external security penetration test discovers that the Kubernetes API server accepts unauthenticated requests and permits requests over an unencrypted local port on older control plane nodes.",
    question: "Which configuration flags must be set in <code>/etc/kubernetes/manifests/kube-apiserver.yaml</code> to completely disable anonymous requests and unencrypted communication?",
    options: [
      { id: 'A', text: "Set <code>--anonymous-auth=false</code>, and leave <code>--insecure-port</code> unset, as it no longer exists" },
      { id: 'B', text: "Set <code>--enable-bootstrap-token-auth=false</code>, and move the serving port to <code>--secure-port=8080</code>" },
      { id: 'C', text: "Set <code>--authorization-mode=AlwaysDeny</code>, and drop the client CA so no anonymous client is trusted" },
      { id: 'D', text: "Set <code>--allow-privileged=false</code>, and bind the serving port to <code>--bind-address=0.0.0.0</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting <code>--anonymous-auth=false</code> ensures that unauthenticated requests (which would otherwise default to the <code>system:unauthenticated</code> group) are rejected with a <code>401 Unauthorized</code> status unless explicitly permitted. Ensuring <code>--insecure-port=0</code> (or relying on modern Kubernetes where the insecure port is permanently removed) guarantees that all API traffic requires TLS authentication.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-apiserver", "Anonymous-Auth", "Insecure-Port", "Control-Plane"]
  },
  {
    id: "k8s-cks-6",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Restricting ServiceAccount Token Auto-Mounting",
    scenario: "A microservices application deployment does not interact with the Kubernetes API server. To follow the principle of least privilege and prevent potential credential leakage if a container is compromised, the API token must not be injected into the pod file system.",
    question: "Which declarative setting prevents the default ServiceAccount token from being mounted into pod containers?",
    options: [
      { id: 'A', text: "Delete the <code>default</code> ServiceAccount in the target application namespace" },
      { id: 'B', text: "Set <code>automountServiceAccountToken: false</code> on the pod or its ServiceAccount" },
      { id: 'C', text: "Define an empty volume named <code>service-token</code> in the pod and set <code>readOnly: true</code>" },
      { id: 'D', text: "Set <code>serviceAccountName: none</code> inside the Pod template specification" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting <code>automountServiceAccountToken: false</code> at either the ServiceAccount level or directly in the Pod spec under <code>spec.automountServiceAccountToken</code> prevents Kubernetes from mounting the API credential token at <code>/var/run/secrets/kubernetes.io/serviceaccount</code>. This eliminates an attack vector where an attacker infiltrating a pod uses the auto-mounted token to query the API server.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ServiceAccount", "Least-Privilege", "Token-Security", "RBAC"]
  },
  {
    id: "k8s-cks-7",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Configuring Bound ServiceAccount Tokens and Audience Restriction",
    scenario: "An enterprise cluster must upgrade from legacy permanent secret-based ServiceAccount tokens to short-lived Bound ServiceAccount Tokens that are cryptographically bound to specific pod instances and audiences.",
    question: "Which kube-apiserver parameters must be configured to enable Bound ServiceAccount Token projection with audience and expiration controls?",
    options: [
      { id: 'A', text: "Set <code>--service-account-lookup=false</code> and the signing key flags on the API server" },
      { id: 'B', text: "Set <code>--service-account-issuer</code>, the signing key flags and <code>--api-audiences</code>" },
      { id: 'C', text: "Enable the <code>TokenRequestValidation</code> feature gate on every kubelet in the cluster" },
      { id: 'D', text: "Run a controller that rotates the ServiceAccount token secrets on a fixed interval" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bound ServiceAccount Token Volume projection requires configuring the API server with <code>--service-account-issuer</code> (identifying the issuer URL for OIDC discovery), <code>--service-account-signing-key-file</code> (used to sign JWTs), <code>--service-account-key-file</code> (public key to verify signatures), and <code>--api-audiences</code>. This ensures tokens have specified validity periods, target audiences, and are invalidated when the pod terminates.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ServiceAccount", "Bound-Tokens", "OIDC", "kube-apiserver"]
  },
  {
    id: "k8s-cks-8",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Remediating Insecure etcd Communication Flags",
    scenario: "A security audit reports that an etcd cluster is running without client certificate verification, allowing any host on the internal network to issue unauthenticated read/write queries to the etcd key-value store on port 2379.",
    question: "Which flags must be set in <code>/etc/kubernetes/manifests/etcd.yaml</code> to enforce mutual TLS (mTLS) client verification?",
    options: [
      { id: 'A', text: "Set <code>--peer-client-cert-auth=true</code> with <code>--auto-tls=true</code> as well" },
      { id: 'B', text: "Set <code>--listen-client-urls</code> to the loopback address and omit the CA file" },
      { id: 'C', text: "Set <code>--insecure-transport-security=false</code> with <code>--enable-v2=false</code>" },
      { id: 'D', text: "Set <code>--client-cert-auth=true</code> with the CA, certificate and key files" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To enforce client TLS authentication on etcd, the static manifest must include <code>--client-cert-auth=true</code> along with <code>--trusted-ca-file</code> (specifying the CA certificate that signed client certificates), <code>--cert-file</code> (server certificate), and <code>--key-file</code> (private key). This guarantees that only authorized components possessing valid client certificates (such as kube-apiserver) can interact with etcd.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["etcd", "mTLS", "Authentication", "Hardening"]
  },
  {
    id: "k8s-cks-9",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Eliminating Wildcard Administrative Privileges in RBAC",
    scenario: "An audit discovers a ClusterRole named <code>support-role</code> containing verbs <code>['*']</code> and resources <code>['*']</code>. The team must restrict this role so that support engineers can only inspect pod status and read pod logs across all namespaces without accessing secret values or deleting resources.",
    question: "Which RBAC rule definition enforces this restricted least-privilege support policy?",
    options: [
      { id: 'A', text: "<code>apiGroups: ['']</code>, <code>resources: ['pods', 'pods/log']</code>, <code>verbs: ['get', 'list', 'watch']</code>" },
      { id: 'B', text: "<code>apiGroups: ['*']</code>, <code>resources: ['pods', 'pods/log']</code>, <code>verbs: ['*']</code>" },
      { id: 'C', text: "<code>apiGroups: ['']</code>, <code>resources: ['*']</code>, <code>verbs: ['get', 'list', 'watch']</code>" },
      { id: 'D', text: "<code>apiGroups: ['core']</code>, <code>resources: ['pods', 'secrets']</code>, <code>verbs: ['get']</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Least privilege mandates avoiding wildcard <code>*</code> characters in verbs and resources. To inspect pod status and logs without reading secrets, the ClusterRole must explicitly list <code>resources: ['pods', 'pods/log', 'pods/status']</code> in the core API group (<code>''</code>) with read-only verbs <code>['get', 'list', 'watch']</code>. Including secrets or wildcard verbs would grant excessive access.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["RBAC", "Least-Privilege", "ClusterRole", "Authorization"]
  },
  {
    id: "k8s-cks-10",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Restricting Privilege Escalation in RBAC Roles",
    scenario: "A namespace administrator with a custom Role creates a new RoleBinding that grants another developer the <code>cluster-admin</code> ClusterRole, escalating their administrative boundaries beyond the namespace.",
    question: "How does the Kubernetes API server natively prevent privilege escalation during RBAC Role and RoleBinding creation?",
    options: [
      { id: 'A', text: "A RoleBinding that references a ClusterRole is rejected unless the caller is in the <code>system:masters</code> group" },
      { id: 'B', text: "A Role or RoleBinding write is forwarded to an admission webhook, which compares it with the caller's own rules" },
      { id: 'C', text: "A user cannot grant permissions they do not already hold, unless they have the <code>escalate</code> or <code>bind</code> verb" },
      { id: 'D', text: "A Role may only name resources that already exist in the namespace, which bounds what a binding can grant" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes RBAC incorporates built-in privilege escalation prevention. A user cannot create or update a Role containing rules they do not already possess unless granted the <code>escalate</code> verb on roles. Similarly, a user cannot bind a Role or ClusterRole unless they already possess all permissions contained in that role or hold the <code>bind</code> verb on the target role resource.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["RBAC", "Privilege-Escalation", "Authorization", "Security-Model"]
  },
  {
    id: "k8s-cks-11",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Hardening Kubelet Configuration on Worker Nodes",
    scenario: "A security review of worker node configurations flags that the kubelet daemon accepts unauthorized read-only API requests on port 10255 and allows anonymous requests on port 10250.",
    question: "Which settings in <code>/var/lib/kubelet/config.yaml</code> remediate these vulnerabilities according to CIS benchmarks?",
    options: [
      { id: 'A', text: "Set <code>readOnlyPort: 10255</code>, <code>authentication.webhook.enabled: false</code>, and <code>authorization.mode: AlwaysAllow</code>" },
      { id: 'B', text: "Set <code>readOnlyPort: 0</code>, <code>authentication.anonymous.enabled: false</code>, and <code>authorization.mode: Webhook</code>" },
      { id: 'C', text: "Set <code>port: 0</code>, <code>anonymous.enabled: true</code>, and configure <code>authentication.mode: Token</code>" },
      { id: 'D', text: "Set <code>readOnlyPort: 10250</code>, <code>authentication.x509.clientCAFile: ''</code>, and <code>authorization.mode: Node</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "According to the CIS Benchmark, the kubelet read-only port must be disabled by setting <code>readOnlyPort: 0</code>. Furthermore, on the primary serving port (10250), anonymous requests must be disabled via <code>authentication.anonymous.enabled: false</code>, and authorization must be delegated to the API server via <code>authorization.mode: Webhook</code> instead of <code>AlwaysAllow</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kubelet", "CIS-Benchmark", "Worker-Nodes", "Hardening"]
  },
  {
    id: "k8s-cks-12",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Verifying Kubernetes Binary Integrity Using Cryptographic Hashes",
    scenario: "A platform engineer is downloading official Kubernetes control plane binaries (such as <code>kubectl</code>, <code>kubelet</code>, and <code>kubeadm</code>) to build an air-gapped node template. The team must ensure the binaries have not been tampered with or corrupted in transit.",
    question: "What is the recommended method to verify the authenticity and integrity of downloaded Kubernetes binaries?",
    options: [
      { id: 'A', text: "Rely on TLS validation of the release CDN, which authenticates the file's origin on download" },
      { id: 'B', text: "Run <code>strings</code> over the binary and confirm the embedded repository string is present" },
      { id: 'C', text: "Run the binary with <code>--version</code> and confirm the output matches the release tag" },
      { id: 'D', text: "Fetch the release's <code>.sha256</code> file and check the binary with <code>sha256sum --check</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Cryptographic integrity verification requires computing the SHA-256 (or SHA-512) hash of the downloaded binary and comparing it against the official published checksum file using <code>sha256sum -c</code>. Merely inspecting strings or running <code>--version</code> is insufficient because compromised binaries can easily forge version outputs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Binary-Integrity", "Checksum", "Supply-Chain", "Verification"]
  },
  {
    id: "k8s-cks-13",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Configuring Node Authorization and NodeRestriction Admission Plugin",
    scenario: "An attacker compromises a worker node's kubelet credentials and attempts to modify labels on other worker nodes and read secrets belonging to pods running in different namespaces on unrelated nodes.",
    question: "Which combination of authorizer and admission plugin restricts the kubelet credential to accessing only pods, secrets, and labels assigned to its specific node?",
    options: [
      { id: 'A', text: "Enable the <code>Node</code> authorization mode on <code>kube-apiserver</code> and activate the <code>NodeRestriction</code> admission plugin" },
      { id: 'B', text: "Enable the <code>ABAC</code> authorization mode and configure an external IP whitelisting admission webhook" },
      { id: 'C', text: "Configure <code>RBAC</code> with a ClusterRole granting <code>system:node</code> full access to all secrets and configmaps" },
      { id: 'D', text: "Enable the <code>PodSecurity</code> admission plugin with <code>restricted</code> profile on the <code>kube-system</code> namespace" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>Node</code> authorization mode restricts a kubelet to accessing only secrets, configmaps, and pods bound to its own node. The <code>NodeRestriction</code> admission controller further limits what kubelets can modify, preventing them from modifying node labels, taints, or deleting pods on other nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NodeRestriction", "kubelet", "Admission-Plugin", "Control-Plane"]
  },
  {
    id: "k8s-cks-14",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Isolating Ingress Controller Traffic with Namespace NetworkPolicies",
    scenario: "An ingress controller running in the <code>ingress-nginx</code> namespace must route external HTTP/HTTPS traffic to microservices in the <code>production</code> namespace. All other inter-namespace pod communication into <code>production</code> must remain blocked.",
    question: "Which ingress rule in the <code>production</code> namespace NetworkPolicy allows traffic specifically from the ingress controller?",
    options: [
      { id: 'A', text: "An ingress rule whose <code>from</code> names the <code>ingress-nginx</code> namespace and its controller pods" },
      { id: 'B', text: "An ingress rule whose <code>from</code> names an <code>ipBlock</code> covering the node network subnet" },
      { id: 'C', text: "An ingress rule whose <code>from</code> names a <code>podSelector</code> of <code>role: ingress</code> only" },
      { id: 'D', text: "An ingress rule with an empty <code>from</code> and <code>policyTypes: ['Ingress']</code> set" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To allow traffic from pods residing in another namespace, the NetworkPolicy rule must combine both <code>namespaceSelector</code> (matching the source namespace, such as <code>ingress-nginx</code>) and <code>podSelector</code> (matching the ingress controller pods). Omitting <code>namespaceSelector</code> would only evaluate pods within the local <code>production</code> namespace.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "Ingress", "Namespaces", "Traffic-Isolation"]
  },
  {
    id: "k8s-cks-15",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing the Kubernetes Control Plane with Strong TLS Cipher Suites",
    scenario: "A vulnerability scanner discovers that <code>kube-apiserver</code> supports legacy, weak TLS cipher suites (such as CBC-mode ciphers) susceptible to padding oracle exploits.",
    question: "Which parameter on the <code>kube-apiserver</code> static manifest configures approved modern TLS cipher suites?",
    options: [
      { id: 'A', text: "Set <code>--tls-min-version=VersionTLS12</code> on <code>kube-apiserver</code>, which selects the modern suites for you" },
      { id: 'B', text: "Set <code>--ssl-protocols=TLSv1.2,TLSv1.3</code> in the <code>kube-proxy</code> ConfigMap for the whole cluster" },
      { id: 'C', text: "Set <code>--secure-ciphers=HIGH:!aNULL:!kEDH</code> in <code>/etc/kubernetes/admin.conf</code> on each node" },
      { id: 'D', text: "Set <code>--tls-cipher-suites</code> to the approved ECDHE GCM and CHACHA20 suites on <code>kube-apiserver</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>kube-apiserver</code> accepts the <code>--tls-cipher-suites</code> flag, which takes a comma-separated list of approved Golang cipher suites. Specifying modern GCM and ChaCha20-Poly1305 cipher suites disables insecure legacy CBC ciphers and satisfies compliance frameworks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["TLS", "Cipher-Suites", "kube-apiserver", "Hardening"]
  },
  {
    id: "k8s-cks-16",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Auditing and Revoking Unnecessary ClusterAdmin Bindings",
    scenario: "A security review discovers that an automated deployment pipeline was bound to the built-in <code>cluster-admin</code> ClusterRole across the entire cluster, creating a critical blast radius if the CI/CD service account is compromised.",
    question: "What is the recommended remediation to replace this overly permissive binding?",
    options: [
      { id: 'A', text: "Keep the <code>ClusterRoleBinding</code> but set <code>automountServiceAccountToken: false</code> so the token is never mounted" },
      { id: 'B', text: "Keep the <code>ClusterRoleBinding</code> and add an admission webhook that denies its requests outside business hours" },
      { id: 'C', text: "Edit the <code>cluster-admin</code> ClusterRole to drop the <code>delete</code> verb, which narrows every binding to it" },
      { id: 'D', text: "Delete the <code>ClusterRoleBinding</code> and bind a namespaced <code>Role</code> carrying only the deployment verbs the pipeline uses" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The principle of least privilege dictates replacing broad cluster-wide administrative privileges (<code>cluster-admin</code>) with namespace-scoped <code>Role</code> and <code>RoleBinding</code> definitions granting only the precise verbs and resources needed for deployment pipelines. Modifying the built-in <code>cluster-admin</code> role would break standard cluster operations.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["RBAC", "Least-Privilege", "CI-CD", "RoleBinding"]
  },
  {
    id: "k8s-cks-17",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Restricting Network Access to DNS with NetworkPolicies",
    scenario: "A sensitive database pod in namespace <code>backend</code> has an egress default-deny NetworkPolicy applied. The database needs to resolve cluster service domain names using CoreDNS in the <code>kube-system</code> namespace.",
    question: "Which egress rule must be added to the database NetworkPolicy to permit CoreDNS resolution while maintaining default-deny for all other destinations?",
    options: [
      { id: 'A', text: "An egress rule whose <code>ipBlock</code> is <code>0.0.0.0/0</code> restricted to UDP and TCP port 53" },
      { id: 'B', text: "An egress rule for the <code>kube-system</code> namespace's <code>k8s-app: kube-dns</code> pods on port 53" },
      { id: 'C', text: "An egress rule for the <code>kube-system</code> namespace as a whole, on every port and protocol" },
      { id: 'D', text: "An ingress rule letting the CoreDNS pods open connections back to the database on port 53" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When an egress default-deny policy is active, all outbound traffic is dropped, including DNS lookups. To permit DNS resolution, an egress rule must explicitly target the CoreDNS pods (typically labeled <code>k8s-app: kube-dns</code> in <code>kube-system</code>) on UDP and TCP port 53.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "CoreDNS", "Egress", "DNS"]
  },
  {
    id: "k8s-cks-18",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing kubelet Server Certificate Rotation and Approvals",
    scenario: "To avoid expired TLS certificates disrupting cluster operations, worker node kubelet server certificates must automatically rotate upon reaching expiration, with certificates signed by the cluster CA.",
    question: "Which kubelet configuration and control plane mechanism enable automated kubelet server certificate rotation?",
    options: [
      { id: 'A', text: "Set <code>serverTLSBootstrap: true</code> in the kubelet config, and have a controller approve the resulting CSRs" },
      { id: 'B', text: "Set <code>rotateCertificates: true</code> in the kubelet config, which renews the serving certificate on its own" },
      { id: 'C', text: "Run <code>kubeadm certs renew</code> from a scheduled job on each node and restart the kubelet afterwards" },
      { id: 'D', text: "Set <code>--rotate-server-certificates</code> on <code>kube-controller-manager</code> so it reissues node certificates" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enabling <code>serverTLSBootstrap: true</code> in the kubelet configuration directs the kubelet to automatically generate CertificateSigningRequests (CSRs) for its serving certificates when bootstrapping and approaching expiration. When approved by a CSR auto-approver or administrator, valid serving certificates are retrieved and rotated seamlessly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kubelet", "Certificates", "TLS", "Rotation"]
  },
  {
    id: "k8s-cks-19",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Benchmark File Permission Remediation on etcd Data Directory",
    scenario: "A compliance audit detects that the <code>/var/lib/etcd</code> directory on an etcd control plane node has permissions <code>0775</code> and is owned by a standard operational group.",
    question: "Which permission and ownership settings are required by CIS benchmarks to secure the etcd data directory?",
    options: [
      { id: 'A', text: "Own <code>/var/lib/etcd</code> as <code>nobody:nogroup</code> with mode <code>0755</code>" },
      { id: 'B', text: "Own <code>/var/lib/etcd</code> as <code>root:root</code> with mode <code>0777</code>" },
      { id: 'C', text: "Own <code>/var/lib/etcd</code> as <code>etcd:etcd</code> with mode <code>0700</code>" },
      { id: 'D', text: "Own <code>/var/lib/etcd</code> as <code>kubelet:root</code> with mode <code>0644</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CIS Benchmark item 1.1.11 mandates that the etcd data directory (<code>/var/lib/etcd</code>) must have permissions of <code>0700</code> or more restrictive, ensuring that only the etcd process owner can read or write database files, transaction logs, and WAL entries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CIS-Benchmark", "etcd", "File-Permissions", "Hardening"]
  },
  {
    id: "k8s-cks-20",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Preventing Kubernetes API Server Port 8080 Insecure Listening",
    scenario: "In older or customized Kubernetes distributions, an administrative script attempts to pass <code>--insecure-port=8080</code> to the <code>kube-apiserver</code> startup parameters.",
    question: "What is the security danger associated with running <code>kube-apiserver</code> with an active insecure port?",
    options: [
      { id: 'A', text: "It carries plain HTTP but accepts only <code>system:masters</code> callers on the loopback" },
      { id: 'B', text: "It causes etcd to store newly created secrets without applying the encryption provider" },
      { id: 'C', text: "It causes pods admitted through it to run without NetworkPolicy enforcement applied" },
      { id: 'D', text: "It carries plain HTTP and bypasses authentication, authorization and admission entirely" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The legacy insecure port (defaulting to 8080 if not set to 0 or removed) accepted unencrypted HTTP requests without evaluating authentication tokens, RBAC roles, or admission webhooks. Any process reaching that port held full, unconstrained root administrative control over the entire cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-apiserver", "Insecure-Port", "Control-Plane", "Vulnerabilities"]
  },
  {
    id: "k8s-cks-21",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "CIS Benchmark: Admin Kubeconfig File Ownership and Permissions",
    scenario: "A security engineer inspects <code>/etc/kubernetes/admin.conf</code> on a master node and finds that the file has permissions <code>0666</code>, allowing any local user to read the embedded cluster administrator private key and certificate.",
    question: "What are the required ownership and permission values for <code>admin.conf</code> according to CIS Kubernetes Benchmark recommendations?",
    options: [
      { id: 'A', text: "Ownership <code>kubelet:root</code> with permissions <code>0640</code>" },
      { id: 'B', text: "Ownership <code>etcd:etcd</code> with permissions <code>0400</code>" },
      { id: 'C', text: "Ownership <code>root:root</code> with permissions <code>0600</code>" },
      { id: 'D', text: "Ownership <code>root:admin</code> with permissions <code>0660</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "According to CIS Benchmark section 1.1.1, the Kubernetes administrator configuration file <code>/etc/kubernetes/admin.conf</code> contains sensitive credentials granting full cluster control and must be owned by <code>root:root</code> with permissions strictly set to <code>0600</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CIS-Benchmark", "Kubeconfig", "File-Permissions", "Hardening"]
  },
  {
    id: "k8s-cks-22",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Restricting Access to Node Internal API via NetworkPolicy Egress",
    scenario: "A development team wants to ensure that pods deployed in user namespaces cannot communicate with the control plane nodes' API server IP on port 6443 directly, unless specifically routed through an authorized ingress gateway.",
    question: "Which egress NetworkPolicy rule blocks traffic to the control plane IP range while allowing public web access?",
    options: [
      { id: 'A', text: "An egress <code>ipBlock</code> of <code>0.0.0.0/0</code> plus a policy on <code>kube-system</code> with an empty selector" },
      { id: 'B', text: "An egress rule listing only the public ranges, with <code>policyTypes: ['Ingress']</code> set as well" },
      { id: 'C', text: "An egress <code>ipBlock</code> of <code>0.0.0.0/0</code> with the control plane subnet in its <code>except</code> list" },
      { id: 'D', text: "An ingress rule whose <code>from</code> excludes the control plane subnet CIDR from the pod network" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To allow external internet access while preventing communication with the internal control plane nodes, an egress rule should specify an <code>ipBlock</code> matching <code>0.0.0.0/0</code> with the control plane subnet listed under <code>except</code>. This ensures packets destined for the API server IP range are dropped by the CNI plugin.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "Control-Plane", "Isolation", "Egress"]
  },
  {
    id: "k8s-cks-23",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Verifying etcd Encryption at Rest with etcdctl",
    scenario: "After configuring an <code>EncryptionConfiguration</code> on <code>kube-apiserver</code>, a security engineer must verify directly in etcd that newly created Secrets are stored in encrypted format rather than plain JSON text.",
    question: "Which command sequence directly queries etcd to confirm that the secret value contains the encryption provider prefix?",
    options: [
      { id: 'A', text: "Run <code>kubectl get secret &lt;name&gt; -o yaml</code> and check the <code>metadata.encrypted</code> annotation the provider adds" },
      { id: 'B', text: "Run <code>etcdctl get /registry/secrets/&lt;ns&gt;/&lt;name&gt;</code> and look for the <code>k8s:enc:aescbc:v1:</code> prefix" },
      { id: 'C', text: "Run <code>crictl inspect &lt;etcd-container-id&gt;</code> and check the mounted provider configuration it reports" },
      { id: 'D', text: "Run <code>openssl verify -CAfile /etc/kubernetes/pki/ca.crt</code> against the etcd snapshot on disk" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When <code>kube-apiserver</code> encrypts secrets before writing to etcd, querying the raw etcd key path (<code>/registry/secrets/&lt;namespace&gt;/&lt;secret-name&gt;</code>) using <code>etcdctl</code> with proper TLS certificates will display encrypted ciphertext prefixed with the provider identifier, such as <code>k8s:enc:aescbc:v1:key1:...</code>. Querying via <code>kubectl</code> always returns decrypted data because the API server decrypts it on the fly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["etcd", "Encryption-at-Rest", "Verification", "etcdctl"]
  },
  {
    id: "k8s-cks-24",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Rotating Keys in Kubernetes EncryptionConfiguration",
    scenario: "An enterprise key rotation policy mandates replacing the primary Secret encryption key in <code>/etc/kubernetes/enc.yaml</code> with a newly generated random 32-byte secret without breaking decryption of existing cluster secrets.",
    question: "What is the correct multi-step process to safely rotate secret encryption keys without downtime?",
    options: [
      { id: 'A', text: "Add the new key as the second <code>keys</code> entry, restart <code>kube-apiserver</code>, rewrite all secrets, then promote the new key to first" },
      { id: 'B', text: "Add the new key as the first <code>keys</code> entry, keep the old one second, restart <code>kube-apiserver</code>, rewrite all secrets, then drop the old key" },
      { id: 'C', text: "Replace the old key with the new one in the provider configuration and restart every control plane node at the same time" },
      { id: 'D', text: "Switch the provider to <code>identity</code>, restart <code>kube-apiserver</code> to decrypt the keyspace, then add the new key as the only entry" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The first key in the <code>EncryptionConfiguration</code> provider list is used for encryption, while all subsequent keys can be used for decryption. To rotate keys safely: insert the new key first, keep the old key below it, restart <code>kube-apiserver</code>, re-encrypt all existing secrets using <code>kubectl get secrets -A -o json | kubectl replace -f -</code>, and then remove the old key once all secrets have been re-encrypted.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["EncryptionConfiguration", "Key-Rotation", "Secrets", "Control-Plane"]
  },
  {
    id: "k8s-cks-25",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Securing API Server to Kubelet Communication",
    scenario: "Communication from <code>kube-apiserver</code> to node kubelets (for <code>kubectl exec</code>, <code>logs</code>, and port forwarding) currently fails certificate verification because kubelet serving certificates are self-signed.",
    question: "Which flags in <code>/etc/kubernetes/manifests/kube-apiserver.yaml</code> establish verified mutual TLS communication with node kubelets?",
    options: [
      { id: 'A', text: "Set <code>--anonymous-auth=true</code> and remove the <code>--client-ca-file</code> parameter" },
      { id: 'B', text: "Configure <code>--kubelet-port=10255</code> and disable <code>--kubelet-https</code>" },
      { id: 'C', text: "Configure the API server's <code>--kubelet-client-certificate</code>, key, and CA flags" },
      { id: 'D', text: "Configure <code>--insecure-kubelet-tls=true</code> and set <code>--kubelet-preferred-address-types=InternalIP</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To ensure secure, verified TLS connections from the API server to the kubelet, <code>kube-apiserver</code> must specify <code>--kubelet-certificate-authority</code> (pointing to the cluster root CA that signs kubelet serving certs) along with <code>--kubelet-client-certificate</code> and <code>--kubelet-client-key</code>. This prevents man-in-the-middle attacks during <code>kubectl exec</code> or log streaming.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-apiserver", "Kubelet", "mTLS", "Certificates"]
  }
];

export default K8S_CKS_QUESTIONS_1;
