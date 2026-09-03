export const K8S_CKS_FLASHCARDS_1 = [
  {
    "id": "k8s-cks-fc-1",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "CIS Control Plane Manifest Permissions: What are the required ownership and permission modes for static manifests like <code>kube-apiserver.yaml</code>?",
    "hint": "Think root ownership and strict non-executable read/write modes.",
    "back": "Static pod manifests in <code>/etc/kubernetes/manifests/</code> must be owned by <strong>root:root</strong> with permissions set to <strong>0600</strong> (or at most <strong>0644</strong>). This prevents unprivileged local users or processes from altering control plane component configurations.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-2",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Default-Deny NetworkPolicy: What are the two mandatory components required to block all ingress and egress across a namespace?",
    "hint": "Recall the podSelector and policyTypes specification.",
    "back": "Specify an empty <strong>podSelector: {}</strong> (matching all pods) and declare <strong>policyTypes: ['Ingress', 'Egress']</strong> with empty ingress and egress rule lists. Any connection not explicitly permitted by another policy is dropped.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-3",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Metadata Protection: How can a NetworkPolicy block pods from reaching the cloud instance metadata endpoint (169.254.169.254)?",
    "hint": "Consider the ipBlock egress construct with CIDR exclusions.",
    "back": "Define an egress rule specifying <code>ipBlock: { cidr: '0.0.0.0/0', except: ['169.254.169.254/32'] }</code>. This allows outbound internet communication while dropping traffic directed at the cloud instance metadata service.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-4",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "etcd Encryption at Rest: What are the primary steps to encrypt Kubernetes Secrets stored in etcd?",
    "hint": "Recall the EncryptionConfiguration provider and the rewrite step.",
    "back": "1. Create an <strong>EncryptionConfiguration</strong> file with a provider (e.g., <code>aescbc</code> or <code>kms</code>).<br>2. Pass it to <code>kube-apiserver</code> via <code>--encryption-provider-config</code>.<br>3. Run <code>kubectl get secrets -A -o json | kubectl replace -f -</code> to rewrite and encrypt existing secrets.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-5",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "kube-apiserver Anonymous Authentication: What setting disables unauthenticated API requests?",
    "hint": "Consider the anonymous auth command-line flag.",
    "back": "Set <strong>--anonymous-auth=false</strong> on <code>kube-apiserver</code>. This causes unauthenticated requests to receive <code>401 Unauthorized</code> instead of being evaluated under the <code>system:unauthenticated</code> group.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-6",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "ServiceAccount Token Protection: How do you prevent a Pod from auto-mounting its ServiceAccount API token?",
    "hint": "Recall the declarative boolean field available in Pod and ServiceAccount specs.",
    "back": "Set <strong>automountServiceAccountToken: false</strong> in the Pod specification (<code>spec.automountServiceAccountToken</code>) or on the ServiceAccount resource. This prevents mounting API credentials at <code>/var/run/secrets/kubernetes.io/serviceaccount</code>.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-7",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Bound ServiceAccount Tokens: What major security advantage do projected bound tokens have over legacy secret tokens?",
    "hint": "Think expiration, audience scoping, and pod lifecycle binding.",
    "back": "Bound tokens are <strong>time-limited</strong> (configurable expiration), <strong>audience-scoped</strong> (valid only for intended services), and <strong>cryptographically tied</strong> to the specific Pod instance\u2014becoming invalid as soon as the Pod is deleted.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-8",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "etcd Client Authentication: Which flag ensures etcd verifies client TLS certificates?",
    "hint": "Recall the client cert auth flag on the etcd manifest.",
    "back": "Set <strong>--client-cert-auth=true</strong> along with <code>--trusted-ca-file</code>, <code>--cert-file</code>, and <code>--key-file</code>. This ensures that only clients holding valid TLS certificates issued by the trusted CA can query etcd.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-9",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "RBAC Least Privilege: Why should wildcard asterisks (*) be avoided in Role definitions?",
    "hint": "Consider future API expansions and destructive verbs.",
    "back": "Wildcards grant permissions to all current and future resources and verbs, including dangerous actions like <code>deletecollection</code> and access to sensitive resources like <code>secrets</code>. Explicit resource and verb lists enforce least privilege.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-10",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "RBAC Privilege Escalation Prevention: What restricts a user from binding a Role that has greater permissions than their own?",
    "hint": "Consider the built-in API server escalate and bind verb checks.",
    "back": "The API server enforces that users can only create or bind Roles containing permissions they <strong>already possess</strong>, unless they explicitly hold the <strong>escalate</strong> verb on roles or the <strong>bind</strong> verb on the target role.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-11",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Kubelet Read-Only Port: Why is port 10255 considered a critical security vulnerability?",
    "hint": "Think unauthenticated HTTP access to pod telemetry and specs.",
    "back": "Port 10255 serves unauthenticated, unencrypted read-only kubelet data. Any workload or attacker can query <code>/pods</code> to view pod definitions and environment variables. Remediate by setting <strong>readOnlyPort: 0</strong>.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-12",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Binary Verification: How should Kubernetes administrator verify downloaded binaries prior to installation?",
    "hint": "Think cryptographic checksum matching.",
    "back": "Download the official <code>.sha256</code> checksum file and run <strong>sha256sum --check &lt;binary&gt;.sha256</strong>. This verifies that the binary has not been tampered with or corrupted in transit.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-13",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "NodeRestriction Admission Plugin: What specific capability does NodeRestriction restrict for worker node kubelets?",
    "hint": "Think cross-node tampering and label modifications.",
    "back": "NodeRestriction limits kubelets to modifying only <strong>their own Node</strong> and pods scheduled directly on that Node. It prevents a compromised kubelet from modifying node labels, taints, or deleting pods on other nodes.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-14",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "NetworkPolicy Cross-Namespace Targeting: How must a NetworkPolicy select pods located in another namespace?",
    "hint": "Recall whether podSelector alone is sufficient.",
    "back": "It must combine <strong>namespaceSelector</strong> (identifying the target namespace) with <strong>podSelector</strong> (identifying pods within that namespace). Using <code>podSelector</code> alone only selects pods within the local namespace.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-15",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Cipher Suite Hardening: Which kube-apiserver flag restricts TLS negotiation to strong modern ciphers?",
    "hint": "Recall the TLS cipher suites parameter.",
    "back": "Configure <strong>--tls-cipher-suites</strong> with modern GCM and ChaCha20 suites (e.g., <code>TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256</code>). This explicitly excludes vulnerable CBC-mode ciphers.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-16",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "RBAC cluster-admin Replacement: What is the safest way to replace an overly broad ClusterRoleBinding for a CI pipeline?",
    "hint": "Scope down to namespace level with specific verbs.",
    "back": "Create a namespace-scoped <strong>Role</strong> granting only specific required verbs (e.g., <code>get</code>, <code>create</code>, <code>patch</code> on deployments) and bind it via a <strong>RoleBinding</strong> in the deployment namespace, deleting the cluster-wide binding.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-17",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Egress NetworkPolicy for DNS: What rule must be added to allow pods under default-deny egress to resolve DNS?",
    "hint": "Recall CoreDNS ports and namespace.",
    "back": "Add an egress rule permitting traffic to the CoreDNS service (or <code>kube-system</code> namespace with label <code>k8s-app: kube-dns</code>) on <strong>UDP and TCP port 53</strong>.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-18",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Kubelet Server TLS Bootstrap: What parameter directs kubelet to request signed server certificates automatically?",
    "hint": "Recall the kubelet config field for server bootstrapping.",
    "back": "Set <strong>serverTLSBootstrap: true</strong> in <code>/var/lib/kubelet/config.yaml</code>. The kubelet generates CSRs for serving certificates, which are signed by the cluster CA upon administrator or controller approval.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-19",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "etcd Data Directory Permissions: What ownership and mode must /var/lib/etcd have according to CIS benchmarks?",
    "hint": "Think owner-only read/write/execute mode.",
    "back": "Ownership must be <strong>etcd:etcd</strong> (or <code>root:root</code>) with permissions strictly set to <strong>0700</strong> (<code>drwx------</code>), preventing any unprivileged user from inspecting database files or WAL logs.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-20",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "kube-apiserver Insecure Port: Why must --insecure-port be set to 0 or removed?",
    "hint": "Think unauthenticated plain HTTP access.",
    "back": "The insecure port (port 8080) served plain HTTP without <strong>any authentication, authorization, or admission control checks</strong>. Anyone reaching that port possessed unconstrained cluster-admin access.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-21",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "admin.conf Permissions: What are the required ownership and permission values for /etc/kubernetes/admin.conf?",
    "hint": "Think root ownership and strict 0600 mode.",
    "back": "Ownership must be <strong>root:root</strong> with permissions set to <strong>0600</strong> (<code>-rw-------</code>). This protects the embedded cluster-admin private key from unauthorized local reading.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-22",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Restricting API Server Access: How can pods be blocked from communicating with control plane nodes directly?",
    "hint": "Use an egress NetworkPolicy with IP exclusions.",
    "back": "Deploy an egress NetworkPolicy with an <code>ipBlock</code> matching <code>0.0.0.0/0</code> with the control plane CIDR specified under the <strong>except</strong> array.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-23",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Verifying Secret Encryption: How can you verify raw etcd secret encryption without using kubectl?",
    "hint": "Use etcdctl with TLS certificates.",
    "back": "Run <strong>etcdctl get /registry/secrets/&lt;ns&gt;/&lt;name&gt;</strong> with client certs. The output must start with the encryption provider prefix (e.g., <code>k8s:enc:aescbc:v1:</code>) rather than plaintext JSON.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-24",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Encryption Key Rotation: In an EncryptionConfiguration file, which key is used for encryption?",
    "hint": "Order matters in the keys array.",
    "back": "The <strong>first key</strong> listed under <code>keys</code> is always used to encrypt new writes. Subsequent keys in the list are used only for <strong>decryption</strong> of existing stored data.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  },
  {
    "id": "k8s-cks-fc-25",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d1",
    "front": "Kubelet Communication Security: Which flags on kube-apiserver verify kubelet certificates during logs/exec calls?",
    "hint": "Recall kubelet CA and client cert flags.",
    "back": "Configure <strong>--kubelet-certificate-authority</strong>, <strong>--kubelet-client-certificate</strong>, and <strong>--kubelet-client-key</strong> on <code>kube-apiserver</code> to enforce authenticated mTLS communication.",
    "tags": [
      "CKS",
      "Cluster"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_1;
