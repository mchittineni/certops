export const K8S_CKS_FLASHCARDS_5 = [
  {
    "id": "k8s-cks-fc-101",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "dnsPolicy: None: When should dnsPolicy be set to None?",
    "hint": "When custom internal nameservers must completely override host DNS.",
    "back": "Set <strong>dnsPolicy: None</strong> along with a custom <strong>dnsConfig</strong> when a pod must ignore both host and default cluster DNS, resolving exclusively through custom secured nameservers.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-102",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Guaranteed QoS Class: How do you ensure a container receives dedicated CPU bandwidth?",
    "hint": "Set CPU and memory requests exactly equal to limits.",
    "back": "Set <strong>requests equal to limits</strong> for both CPU and memory across all containers in the pod. This assigns the <strong>Guaranteed</strong> QoS class and prevents CPU starvation.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-103",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "CSI Storage Drivers: Why are out-of-tree CSI drivers more secure than in-tree plugins?",
    "hint": "Decoupled plugins running with least-privilege RBAC.",
    "back": "CSI drivers run as independent containers with <strong>granular, scoped RBAC roles</strong>, eliminating the need to give core Kubernetes control plane controllers broad cloud storage credentials.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-104",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Multi-Container Pod Network: Can NetworkPolicies filter traffic between containers in the same Pod?",
    "hint": "No, they share the same network namespace.",
    "back": "<strong>No.</strong> Containers in the same pod share the <strong>same network namespace and IP</strong>, communicating over <code>localhost</code>. NetworkPolicies only filter inter-pod traffic.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-105",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Base64 vs Encryption: Why is storing base64 secrets in Git insecure?",
    "hint": "Base64 is reversible encoding, not encryption.",
    "back": "Base64 is an <strong>encoding scheme</strong>, not encryption. Anyone who reads the file can instantly decode it using <code>base64 -d</code>. Secrets in Git must be encrypted (e.g., SealedSecrets).",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-106",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Bitnami Sealed Secrets: How does public-key encryption protect secrets in Git?",
    "hint": "Sealed with public key, decrypted only by in-cluster private key.",
    "back": "Developers encrypt secrets using the controller's <strong>public key</strong> (<code>kubeseal</code>). The resulting <code>SealedSecret</code> is safe for public Git; only the in-cluster controller holds the private key to decrypt it.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-107",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "PSS Warn Mode: Does pod-security.kubernetes.io/warn reject pod deployments?",
    "hint": "No, it allows creation and returns terminal warning text.",
    "back": "<strong>No.</strong> The pod is admitted and created successfully. The API server returns user-facing warning messages displayed in the developer's terminal.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-108",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "readOnlyRootFilesystem Remediation: How do you fix apps that fail due to temporary file writes?",
    "hint": "Mount an emptyDir volume to the required temporary path.",
    "back": "Identify the writable directory (e.g., <code>/tmp</code>, <code>/var/cache</code>) and mount a dedicated <strong>emptyDir volume</strong> to that specific path while keeping the root filesystem read-only.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-109",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Port-Specific Ingress NetworkPolicies: Why should ingress rules specify exact ports?",
    "hint": "Prevents unauthorized access to sidecar metrics or debug endpoints.",
    "back": "Specifying ports (e.g., port 5432 for DB) allows necessary traffic while <strong>blocking access to auxiliary ports</strong> (e.g., port 9100 Prometheus metrics or debug ports) on the same pod.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-110",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "cert-manager: What is its primary role in Kubernetes microservice security?",
    "hint": "Automated X.509 certificate issuance and renewal.",
    "back": "It automates the lifecycle of TLS certificates, obtaining certificates from public/private CAs (Let's Encrypt, Vault) and storing them in Kubernetes Secrets with automated rotation.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-111",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "LimitRange defaultRequest: What happens if a developer omits resources on a container?",
    "hint": "LimitRange automatically injects configured defaults.",
    "back": "The <code>LimitRange</code> admission controller automatically <strong>injects default requests and limits</strong>, ensuring containers cannot consume unconstrained node resources.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-112",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Ingress TLS Protocols: How do you disable TLS 1.0 and 1.1 on NGINX Ingress?",
    "hint": "Set ssl-protocols in the ingress controller ConfigMap.",
    "back": "Set <strong>ssl-protocols: 'TLSv1.2 TLSv1.3'</strong> in the <code>ingress-nginx-controller</code> ConfigMap. This disables deprecated, vulnerable TLS protocols globally.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-113",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Calico GlobalNetworkPolicy: How does it differ from a standard Kubernetes NetworkPolicy?",
    "hint": "Cluster-wide scope applying across all namespaces.",
    "back": "A Calico <code>GlobalNetworkPolicy</code> is <strong>cluster-scoped</strong>, allowing security teams to enforce global rules (like blocking <code>169.254.169.254</code>) across all namespaces with a single policy.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-114",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "cert-manager cainjector: How does it automate webhook TLS configuration?",
    "hint": "Injects CA bundle into Validating/MutatingWebhookConfiguration.",
    "back": "Using the <code>cert-manager.io/inject-ca-from</code> annotation, it automatically populates the <strong>clientConfig.caBundle</strong> field of webhook configurations from a managed Certificate.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-115",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Zero API Access Pods: How do you ensure an untrusted pod cannot query kube-apiserver?",
    "hint": "automountServiceAccountToken: false plus egress NetworkPolicy.",
    "back": "1. Set <strong>automountServiceAccountToken: false</strong> (no credentials).<br>2. Apply an <strong>egress NetworkPolicy</strong> blocking TCP port 443/6443 to the API server IP.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-116",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Restricted PSS Seccomp: What seccomp profile types are acceptable under Restricted PSS?",
    "hint": "RuntimeDefault or Localhost only.",
    "back": "Containers must explicitly declare <strong>seccompProfile.type: RuntimeDefault</strong> or <strong>Localhost</strong>. Setting <code>Unconfined</code> or omitting seccomp causes immediate rejection.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-117",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Canary / Honeypot Secrets: How do honeypot credentials improve intrusion detection?",
    "hint": "Alerts on unauthorized reconnaissance before real assets are breached.",
    "back": "Placing dummy secrets (canary tokens) triggers alerts whenever an attacker or compromised pod attempts to read or use them, exposing active reconnaissance.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-118",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Service Mesh Ingress Protection: How do you defend mesh gateways against Slowloris?",
    "hint": "Configure connection timeouts and limits in DestinationRule/EnvoyFilter.",
    "back": "Configure connection pool limits, idle timeouts, and maximum connection counts in <strong>DestinationRule</strong> or <strong>EnvoyFilter</strong> to prevent slowloris resource exhaustion.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-119",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "CAP_KILL Capability: What threat does CAP_KILL pose in a container?",
    "hint": "Allows killing processes owned by other users in the PID namespace.",
    "back": "It allows a process to send <code>SIGKILL</code>/<code>SIGTERM</code> to processes owned by <em>any user</em> within the namespace. Dropping <code>ALL</code> capabilities eliminates this risk.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-120",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "PodDisruptionBudget (PDB): Why are PDBs critical during host kernel patching?",
    "hint": "Prevents voluntary drains from taking down all replicas at once.",
    "back": "During node drains (<code>kubectl drain</code>) for kernel updates, PDBs ensure that a defined minimum (e.g., <strong>minAvailable: 80%</strong>) remains online, preventing outages.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-121",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Node Taints and Tolerations: How do they enforce workload isolation?",
    "hint": "Taints repel pods; only pods with matching tolerations can schedule.",
    "back": "Nodes are tainted with <code>effect: NoSchedule</code>. Only pods with <strong>explicit matching tolerations</strong> are allowed on those nodes, keeping sensitive hardware dedicated.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-122",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Webhook failurePolicy: Fail: What is the primary operational trade-off?",
    "hint": "Fail-closed security vs risk of cluster-wide deployment lockouts if webhook fails.",
    "back": "<code>failurePolicy: Fail</code> guarantees <strong>strict security</strong> by rejecting requests if the webhook is down, but introduces an operational risk of blocking deployments if the webhook fails.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-123",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "hostPort Security Impact: Why is hostPort disallowed in Restricted PSS?",
    "hint": "Bypasses ingress, conflicts with host ports, limits scheduling to one pod per node.",
    "back": "<code>hostPort</code> binds directly to host interfaces, bypassing ingress controllers, potentially conflicting with host services, and restricting scheduling to one pod per node.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-124",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Safely Expanding /dev/shm: How do you increase shared memory without hostIPC: true?",
    "hint": "Mount an emptyDir with medium: Memory to /dev/shm.",
    "back": "Mount an <strong>emptyDir volume with medium: Memory</strong> and a <code>sizeLimit</code> to <code>/dev/shm</code>. This provides fast RAM storage while keeping the IPC namespace fully isolated.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-125",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Guaranteed Non-Root Pods: Which trio of fields enforces non-root execution?",
    "hint": "runAsNonRoot: true, runAsUser: 10001, allowPrivilegeEscalation: false.",
    "back": "Set <strong>runAsNonRoot: true</strong>, declare an explicit unprivileged UID (<strong>runAsUser: 10001</strong>), and set <strong>allowPrivilegeEscalation: false</strong> in the pod's <code>securityContext</code>.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_5;
