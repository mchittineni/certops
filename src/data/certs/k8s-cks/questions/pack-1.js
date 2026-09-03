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
      { id: 'A', text: "Set ownership to <code>kubelet:kubelet</code> and permissions to <code>0400</code> to prevent root processes from modifying static pod definitions" },
      { id: 'B', text: "Move the static manifest to <code>/var/run/kubernetes/</code> and grant ownership to the container runtime socket user" },
      { id: 'C', text: "Set ownership to <code>nobody:nogroup</code> with <code>chmod 0444</code> so all control plane controllers have read-only access" },
      { id: 'D', text: "Set ownership to <code>root:root</code> and file permissions to <code>0600</code> or <code>0644</code> using <code>chown root:root /etc/kubernetes/manifests/kube-apiserver.yaml && chmod 600 /etc/kubernetes/manifests/kube-apiserver.yaml</code>" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Define a NetworkPolicy with <code>podSelector: {}</code> and <code>policyTypes: ['Ingress', 'Egress']</code> with empty ingress and egress rule lists" },
      { id: 'B', text: "Define a NetworkPolicy selecting <code>matchLabels: { env: 'all' }</code> with an egress CIDR rule of <code>0.0.0.0/0</code>" },
      { id: 'C', text: "Create a NetworkPolicy with <code>policyTypes: ['Ingress']</code> and specify <code>ingress: [{ from: [] }]</code>" },
      { id: 'D', text: "Configure a NetworkPolicy with <code>podSelector: { role: 'deny-all' }</code> and omit the <code>policyTypes</code> field" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Add an egress rule with <code>to: [{ ipBlock: { cidr: '0.0.0.0/0', except: ['169.254.169.254/32'] } }]</code> under <code>policyTypes: ['Egress']</code>" },
      { id: 'B', text: "Set an ingress rule denying incoming responses from <code>169.254.169.254/32</code> while allowing all port 80 traffic" },
      { id: 'C', text: "Define an egress rule specifying <code>ports: [{ port: 80, protocol: 'TCP' }]</code> without an <code>ipBlock</code> definition" },
      { id: 'D', text: "Configure a NetworkPolicy that restricts pod DNS queries to internal cluster service names only" }
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
      { id: 'A', text: "Annotate all secret resources with <code>kubernetes.io/encrypt: 'true'</code> and trigger a rolling restart of all application worker nodes" },
      { id: 'B', text: "Deploy a sidecar container to all control plane pods that encrypts secret payloads using mutual TLS before writing to etcd" },
      { id: 'C', text: "Create an <code>EncryptionConfiguration</code> file specifying an encryption provider such as <code>aescbc</code> or <code>kms</code>, mount the configuration into the <code>kube-apiserver</code> pod, set the <code>--encryption-provider-config</code> flag, and run <code>kubectl get secrets -A -o json | kubectl replace -f -</code> to rewrite existing secrets" },
      { id: 'D', text: "Modify <code>etcd.conf</code> to enable disk volume encryption on <code>/var/lib/etcd</code> and restart the <code>etcd</code> systemd service unit" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Set <code>--enable-bootstrap-token-auth=false</code> and configure <code>--secure-port=8080</code>" },
      { id: 'B', text: "Set <code>--anonymous-auth=false</code> and ensure <code>--insecure-port=0</code> is configured (or entirely omitted in modern versions where the insecure port has been deprecated and removed)" },
      { id: 'C', text: "Set <code>--allow-privileged=false</code> and configure <code>--bind-address=0.0.0.0</code>" },
      { id: 'D', text: "Configure <code>--authorization-mode=AlwaysDeny</code> and remove the client CA file flag" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Set <code>serviceAccountName: none</code> inside the Pod template specification" },
      { id: 'B', text: "Delete the <code>default</code> ServiceAccount in the target application namespace" },
      { id: 'C', text: "Define an empty volume named <code>service-token</code> in the pod and set <code>readOnly: true</code>" },
      { id: 'D', text: "Set <code>automountServiceAccountToken: false</code> in the Pod specification or on the associated ServiceAccount resource" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Deploy an external Vault agent daemonset to rotate ServiceAccount tokens every 60 minutes" },
      { id: 'B', text: "Enable the <code>TokenRequestValidation</code> feature gate on all kubelet daemons across worker nodes" },
      { id: 'C', text: "Configure <code>--service-account-issuer</code>, <code>--service-account-key-file</code>, <code>--service-account-signing-key-file</code>, and <code>--api-audiences</code> on <code>kube-apiserver</code>" },
      { id: 'D', text: "Set <code>--service-account-lookup=false</code> and configure a custom etcd certificate bundle" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Set <code>--listen-client-urls=http://127.0.0.1:2379</code> and disable SSL encryption" },
      { id: 'B', text: "Set <code>--insecure-transport-security=false</code> and configure <code>--enable-v2=false</code>" },
      { id: 'C', text: "Set <code>--client-cert-auth=true</code>, <code>--trusted-ca-file</code>, <code>--cert-file</code>, and <code>--key-file</code>" },
      { id: 'D', text: "Set <code>--peer-client-cert-auth=true</code> and configure <code>--auto-tls=true</code>" }
    ],
    correctAnswers: ['C'],
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
      { id: 'A', text: "Specify <code>apiGroups: ['']</code>, <code>resources: ['pods', 'pods/log', 'pods/status']</code>, and <code>verbs: ['get', 'list', 'watch']</code>" },
      { id: 'B', text: "Specify <code>apiGroups: ['*']</code>, <code>resources: ['pods']</code>, and <code>verbs: ['*']</code>" },
      { id: 'C', text: "Specify <code>apiGroups: ['core']</code>, <code>resources: ['pods', 'secrets']</code>, and <code>verbs: ['get']</code>" },
      { id: 'D', text: "Specify <code>apiGroups: ['']</code>, <code>resources: ['*']</code>, and <code>verbs: ['inspect', 'read']</code>" }
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
      { id: 'A', text: "The API server automatically drops any RoleBinding referencing a ClusterRole unless executed by the <code>system:masters</code> group" },
      { id: 'B', text: "The API server requires all RoleBinding creation requests to be approved by an external webhook admission controller" },
      { id: 'C', text: "The API server disables RoleBinding creation if the namespace contains pods running as root" },
      { id: 'D', text: "The API server enforces that a user cannot create or update a Role or RoleBinding with permissions that exceed the user's own current permissions, unless the user has the explicit <code>escalate</code> verb on roles or <code>bind</code> verb on the target role" }
    ],
    correctAnswers: ['D'],
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
      { id: 'B', text: "Set <code>readOnlyPort: 10250</code>, <code>authentication.x509.clientCAFile: ''</code>, and <code>authorization.mode: Node</code>" },
      { id: 'C', text: "Set <code>port: 0</code>, <code>anonymous.enabled: true</code>, and configure <code>authentication.mode: Token</code>" },
      { id: 'D', text: "Set <code>readOnlyPort: 0</code>, <code>authentication.anonymous.enabled: false</code>, and <code>authorization.mode: Webhook</code>" }
    ],
    correctAnswers: ['D'],
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
      { id: 'A', text: "Execute the binary with <code>--version</code> and verify that the output string matches the release branch tag" },
      { id: 'B', text: "Rely exclusively on TLS certificate validation during the HTTPS file download from the public CDN" },
      { id: 'C', text: "Run <code>strings &lt;binary&gt; | grep 'kubernetes.io'</code> to verify the embedded source repository string" },
      { id: 'D', text: "Download the corresponding <code>.sha256</code> or <code>.sha512</code> checksum file from the official Kubernetes release bucket and verify using <code>sha256sum --check &lt;binary&gt;.sha256</code>" }
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
      { id: 'A', text: "Enable the <code>PodSecurity</code> admission plugin with <code>restricted</code> profile on the <code>kube-system</code> namespace" },
      { id: 'B', text: "Enable the <code>Node</code> authorization mode on <code>kube-apiserver</code> and activate the <code>NodeRestriction</code> admission plugin" },
      { id: 'C', text: "Configure <code>RBAC</code> with a ClusterRole granting <code>system:node</code> full access to all secrets and configmaps" },
      { id: 'D', text: "Enable the <code>ABAC</code> authorization mode and configure an external IP whitelisting admission webhook" }
    ],
    correctAnswers: ['B'],
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
      { id: 'A', text: "Specify an ingress rule with <code>from: [{ namespaceSelector: { matchLabels: { 'kubernetes.io/metadata.name': 'ingress-nginx' } }, podSelector: { matchLabels: { 'app.kubernetes.io/name': 'ingress-nginx' } } }]</code>" },
      { id: 'B', text: "Specify an ingress rule with <code>from: [{ ipBlock: { cidr: '10.0.0.0/8' } }]</code> covering the entire node network subnet" },
      { id: 'C', text: "Specify an ingress rule with <code>from: [{ podSelector: { matchLabels: { role: 'ingress' } } }]</code> without a namespaceSelector" },
      { id: 'D', text: "Specify an ingress rule with <code>from: []</code> and set <code>policyTypes: ['Ingress']</code>" }
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
      { id: 'A', text: "Set <code>--tls-cipher-suites=TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305</code>" },
      { id: 'B', text: "Set <code>--tls-min-version=VersionTLS10</code> and enable <code>--tls-sni=true</code>" },
      { id: 'C', text: "Set <code>--ssl-protocols=TLSv1.2,TLSv1.3</code> inside the <code>kube-proxy</code> ConfigMap" },
      { id: 'D', text: "Configure <code>--secure-ciphers=HIGH:!aNULL:!kEDH</code> in <code>/etc/kubernetes/admin.conf</code>" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Delete the <code>ClusterRoleBinding</code>, create a scoped <code>Role</code> with only the required deployment verbs (e.g., <code>create</code>, <code>patch</code>, <code>get</code> on <code>deployments</code> and <code>services</code>), and bind it via a <code>RoleBinding</code> inside the target deployment namespace" },
      { id: 'B', text: "Leave the <code>ClusterRoleBinding</code> active but configure an admission webhook that denies requests submitted outside business hours" },
      { id: 'C', text: "Downgrade the ServiceAccount token by adding <code>automountServiceAccountToken: false</code> while maintaining the <code>cluster-admin</code> binding" },
      { id: 'D', text: "Change the <code>cluster-admin</code> ClusterRole definition to remove the <code>delete</code> verb globally across the cluster" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Add an egress rule selecting namespace <code>kube-system</code> and pods with label <code>k8s-app: kube-dns</code> on UDP and TCP port <code>53</code>" },
      { id: 'B', text: "Add an ingress rule allowing CoreDNS to initiate connections back to the database pod on port 53" },
      { id: 'C', text: "Set <code>policyTypes: ['Ingress']</code> so egress traffic is no longer subject to NetworkPolicy rules" },
      { id: 'D', text: "Add an egress rule with <code>to: [{ ipBlock: { cidr: '0.0.0.0/0' } }]</code> on port <code>8080</code>" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Set <code>serverTLSBootstrap: true</code> in <code>/var/lib/kubelet/config.yaml</code> and ensure a certificate approval controller or administrator approves the generated CertificateSigningRequests (CSRs)" },
      { id: 'B', text: "Deploy a cron job on each node that executes <code>kubeadm certs renew</code> every 30 days" },
      { id: 'C', text: "Configure <code>--insecure-port=10250</code> to bypass TLS certificate validation on worker nodes" },
      { id: 'D', text: "Set <code>rotateCertificates: true</code> in <code>kube-proxy</code> and restart <code>etcd</code>" }
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
      { id: 'A', text: "Ensure ownership is <code>etcd:etcd</code> (or <code>root:root</code> depending on setup) and permissions are strictly set to <code>0700</code> using <code>chmod 700 /var/lib/etcd</code>" },
      { id: 'B', text: "Ensure permissions are set to <code>0755</code> and owned by <code>nobody:nogroup</code>" },
      { id: 'C', text: "Ensure permissions are set to <code>0644</code> and owned by <code>kubelet:root</code>" },
      { id: 'D', text: "Set permissions to <code>0777</code> to allow containerized backup tools to dump snapshot files" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "The insecure port transmits unencrypted HTTP traffic and completely bypasses all authentication, authorization, and admission control checks" },
      { id: 'B', text: "The insecure port causes etcd to disable encryption at rest for all newly created secrets" },
      { id: 'C', text: "The insecure port only accepts requests from the <code>system:masters</code> group over plain HTTP" },
      { id: 'D', text: "The insecure port forces all pods to communicate without NetworkPolicies" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Ownership <code>root:root</code> and permissions <code>0600</code> (or <code>chmod 600 /etc/kubernetes/admin.conf</code>)" },
      { id: 'B', text: "Ownership <code>kubelet:root</code> and permissions <code>0640</code>" },
      { id: 'C', text: "Ownership <code>etcd:etcd</code> and permissions <code>0400</code>" },
      { id: 'D', text: "Ownership <code>root:admin</code> and permissions <code>0660</code>" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Configure an ingress rule with <code>from: [{ ipBlock: { cidr: '10.0.1.0/24' } }]</code>" },
      { id: 'B', text: "Create a NetworkPolicy targeting the <code>kube-system</code> namespace with an empty podSelector" },
      { id: 'C', text: "Define an egress <code>ipBlock</code> with <code>cidr: 0.0.0.0/0</code> and add the control plane subnet CIDR (e.g., <code>10.0.1.0/24</code>) to the <code>except</code> list" },
      { id: 'D', text: "Set <code>spec.policyTypes: ['Ingress']</code> and omit all egress blocks" }
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
      { id: 'A', text: "Run <code>kubectl get secret &lt;secret-name&gt; -o yaml</code> and inspect the <code>metadata.encrypted</code> annotation" },
      { id: 'B', text: "Run <code>ETCDCTL_API=3 etcdctl --cacert=&lt;ca&gt; --cert=&lt;cert&gt; --key=&lt;key&gt; get /registry/secrets/&lt;namespace&gt;/&lt;secret-name&gt;</code> and verify that the output begins with <code>k8s:enc:aescbc:v1:</code> or similar provider prefix" },
      { id: 'C', text: "Run <code>openssl verify -CAfile /etc/kubernetes/pki/ca.crt /var/lib/etcd/member/snap/db</code>" },
      { id: 'D', text: "Run <code>crictl inspect --output json &lt;etcd-container-id&gt; | grep 'encrypted'</code>" }
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
      { id: 'A', text: "Add the new key as the first entry under <code>keys</code> in the provider configuration, keep the old key as a secondary entry, restart <code>kube-apiserver</code>, rewrite all secrets with <code>kubectl get secrets -A -o json | kubectl replace -f -</code>, and finally remove the old key from the configuration file" },
      { id: 'B', text: "Replace the old key directly with the new key in <code>enc.yaml</code> and restart all control plane and worker nodes simultaneously" },
      { id: 'C', text: "Delete all existing secrets from etcd, restart <code>kube-apiserver</code> with the new key, and redeploy applications from Helm charts" },
      { id: 'D', text: "Change the provider name from <code>aescbc</code> to <code>identity</code>, restart <code>kube-apiserver</code>, and then add the new key" }
    ],
    correctAnswers: ['A'],
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
      { id: 'A', text: "Configure <code>--kubelet-client-certificate</code>, <code>--kubelet-client-key</code>, and <code>--kubelet-certificate-authority</code>" },
      { id: 'B', text: "Set <code>--anonymous-auth=true</code> and remove the <code>--client-ca-file</code> parameter" },
      { id: 'C', text: "Configure <code>--insecure-kubelet-tls=true</code> and set <code>--kubelet-preferred-address-types=InternalIP</code>" },
      { id: 'D', text: "Configure <code>--kubelet-port=10255</code> and disable <code>--kubelet-https</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "To ensure secure, verified TLS connections from the API server to the kubelet, <code>kube-apiserver</code> must specify <code>--kubelet-certificate-authority</code> (pointing to the cluster root CA that signs kubelet serving certs) along with <code>--kubelet-client-certificate</code> and <code>--kubelet-client-key</code>. This prevents man-in-the-middle attacks during <code>kubectl exec</code> or log streaming.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["kube-apiserver", "Kubelet", "mTLS", "Certificates"]
  }
];

export default K8S_CKS_QUESTIONS_1;
