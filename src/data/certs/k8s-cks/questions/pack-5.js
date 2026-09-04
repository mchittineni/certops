export const K8S_CKS_QUESTIONS_5 = [
  {
    id: "k8s-cks-101",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Pod DNS Configuration: dnsPolicy and options",
    scenario: "A containerized workload in a high-security cluster must be prevented from querying external public DNS resolvers or falling back to node host DNS configurations.",
    question: "Which <code>dnsPolicy</code> setting ensures that all DNS resolution is handled strictly by the internal cluster CoreDNS without inheriting host search paths?",
    options: [
      { id: 'A', text: "Delete <code>/etc/resolv.conf</code> in an init container" },
      { id: 'B', text: "Set <code>dnsPolicy: 'ClusterFirst'</code> (or <code>None</code> with explicit internal <code>dnsConfig.nameservers</code>)" },
      { id: 'C', text: "Set <code>dnsPolicy: 'ClusterFirstWithHostNet'</code>" },
      { id: 'D', text: "Set <code>dnsPolicy: 'Default'</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>ClusterFirst</code> directs all DNS queries to the internal cluster DNS service (CoreDNS). If complete isolation is required, <code>dnsPolicy: None</code> combined with a customized <code>dnsConfig</code> allows specifying precise internal nameservers and search domains without inheriting node defaults.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["dnsPolicy", "CoreDNS", "DNS-Security", "Pod-Spec"]
  },
  {
    id: "k8s-cks-102",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Limiting Container Process Concurrency to Prevent Denial-of-Service",
    scenario: "A security engineer notices that an insecure web API allows attackers to trigger expensive multi-threaded image processing jobs, exhausting CPU resources across the cluster.",
    question: "How should container CPU requests and limits be configured to guarantee predictable scheduling and prevent CPU starvation?",
    options: [
      { id: 'A', text: "Define equal CPU requests and limits (<code>Guaranteed</code> QoS class) so the container is allocated dedicated CFS bandwidth shares and cannot starve adjacent workloads" },
      { id: 'B', text: "Set CPU limits to zero and CPU requests to 1000m" },
      { id: 'C', text: "Configure <code>securityContext.runAsUser: 1000</code> without resource limits" },
      { id: 'D', text: "Rely exclusively on Horizontal Pod Autoscaling based on memory metrics" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Setting CPU requests equal to limits grants the pod the <code>Guaranteed</code> Quality of Service (QoS) class. The Linux CFS (Completely Fair Scheduler) enforces strict CPU quota slices, ensuring the container cannot consume more CPU cycles than permitted, preventing starvation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["QoS", "CPU-Limits", "CFS", "Denial-of-Service"]
  },
  {
    id: "k8s-cks-103",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Access to Host Storage via CSI Drivers",
    scenario: "An enterprise migrates storage volumes to modern CSI plugins. What security advantage does CSI volume handling offer over legacy in-tree volume plugins?",
    question: "How do CSI volume drivers improve cluster security boundaries?",
    options: [
      { id: 'A', text: "CSI plugins eliminate the need for persistent volume claims" },
      { id: 'B', text: "CSI drivers run directly inside the Linux kernel without requiring user-space drivers" },
      { id: 'C', text: "CSI storage drivers run as decoupled, least-privilege containerized plugins outside control plane core binaries and support fine-grained credential injection and RBAC scoping" },
      { id: 'D', text: "CSI drivers automatically convert all block storage devices into in-memory tmpfs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Container Storage Interface (CSI) drivers separate storage logic from core Kubernetes binaries. Instead of granting control plane controllers broad cloud infrastructure credentials, CSI drivers run in dedicated pods with granular, least-privilege RBAC roles and support credential segregation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CSI", "Storage-Security", "Decoupling", "Least-Privilege"]
  },
  {
    id: "k8s-cks-104",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Multi-Container Pod Communications",
    scenario: "A pod consists of a web application container and a local caching proxy container. The containers need to communicate over localhost.",
    question: "What network security boundary exists between containers residing within the same Pod?",
    options: [
      { id: 'A', text: "Containers in the same pod share the same network namespace and can communicate freely over localhost (<code>127.0.0.1</code>); NetworkPolicies cannot isolate communication between containers in the same pod" },
      { id: 'B', text: "NetworkPolicies apply between containers in the same pod based on container name" },
      { id: 'C', text: "Containers in the same pod are isolated by default unless an AppArmor profile links them" },
      { id: 'D', text: "Istio proxies must be injected between containers inside the same pod" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "All containers within a single Pod share the same Linux network namespace, meaning they share the same IP address and network stack. They can communicate over <code>127.0.0.1</code>, and Kubernetes NetworkPolicies operate at the Pod level, meaning intra-pod traffic cannot be filtered by NetworkPolicies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Architecture", "Network-Namespace", "Localhost", "Security-Boundaries"]
  },
  {
    id: "k8s-cks-105",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Protecting Kubernetes Secrets from Git Commits",
    scenario: "A development team stores application manifests in a public Git repository. A developer accidentally commits a Kubernetes Secret containing base64-encoded production database credentials.",
    question: "Why is base64 encoding in Kubernetes Secrets not equivalent to encryption?",
    options: [
      { id: 'A', text: "Base64 is an encoding scheme for data serialization and can be decoded instantly by anyone using <code>base64 -d</code>; it offers zero confidentiality or cryptographic protection" },
      { id: 'B', text: "Base64 is an obsolete symmetric encryption algorithm with known weak keys" },
      { id: 'C', text: "Base64 is only secure if the secret name starts with <code>private-</code>" },
      { id: 'D', text: "Base64 passwords are automatically rotated by the API server every 24 hours" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Base64 is not encryption—it is merely an encoding scheme designed to safely transmit binary data in ASCII text. Anyone with read access to the manifest can decode the secret string instantly (<code>echo &lt;str&gt; | base64 -d</code>). Secrets must be protected via encryption at rest, sealed secrets (Bitnami SealedSecrets), or external secret vaults.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Secrets", "Base64", "Encoding-vs-Encryption", "GitOps"]
  },
  {
    id: "k8s-cks-106",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Encrypting Secrets in GitOps Repositories Using Bitnami Sealed Secrets",
    scenario: "A platform team adopts GitOps (ArgoCD/Flux) and must commit all Kubernetes manifests to a public Git repository without exposing secret values.",
    question: "How does Bitnami Sealed Secrets enable secure storage of sensitive credentials in public Git repositories?",
    options: [
      { id: 'A', text: "Developers encrypt secrets using the controller's public asymmetric key to create a <code>SealedSecret</code> CRD that only the in-cluster Sealed Secrets controller can decrypt using its private key" },
      { id: 'B', text: "The Sealed Secrets controller replaces all secret values with random hashes during git pull" },
      { id: 'C', text: "Developers store secrets in plaintext and configure GitHub to deny read access to secret manifests" },
      { id: 'D', text: "Sealed Secrets requires storing the cluster private key inside the Git repository" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bitnami Sealed Secrets uses asymmetric cryptography. Developers use the <code>kubeseal</code> CLI and the controller's public key to encrypt a Secret into a <code>SealedSecret</code> CRD. The SealedSecret can be safely committed to public Git; only the Sealed Secrets controller running inside the target cluster possesses the private key to decrypt and instantiate the secret.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["SealedSecrets", "GitOps", "Asymmetric-Encryption", "Secrets-Management"]
  },
  {
    id: "k8s-cks-107",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Auditing Pod Security Standard Warn Messages",
    scenario: "A cluster administrator configures <code>pod-security.kubernetes.io/warn: restricted</code> on the <code>default</code> namespace. A developer runs <code>kubectl apply -f deployment.yaml</code> containing a container running as root.",
    question: "What happens when the developer executes this command?",
    options: [
      { id: 'A', text: "The deployment creation is blocked with a 403 Forbidden error" },
      { id: 'B', text: "The container is automatically patched to run as UID 10001" },
      { id: 'C', text: "The worker node logs an AppArmor violation in /var/log/syslog" },
      { id: 'D', text: "The deployment is created successfully, but the developer receives an interactive terminal warning message detailing the specific restricted security violations" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>warn</code> mode of Pod Security Admission does not block resource creation. Instead, it returns user-friendly warning messages directly in the HTTP API response, which <code>kubectl</code> displays in the terminal to notify developers of impending policy non-compliance.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Warn-Mode", "Developer-Experience", "Admission"]
  },
  {
    id: "k8s-cks-108",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Configuring Read-Only Root Filesystem with Writable Cache Volumes",
    scenario: "A Python web application runs under <code>readOnlyRootFilesystem: true</code>, but crashes because Python attempts to write compiled bytecode (<code>.pyc</code>) to its application directory.",
    question: "How can the deployment be remediated without disabling <code>readOnlyRootFilesystem</code>?",
    options: [
      { id: 'A', text: "Mount <code>/</code> as a hostPath volume with read-write permissions" },
      { id: 'B', text: "Set the environment variable <code>PYTHONDONTWRITEBYTECODE=1</code> and mount an <code>emptyDir</code> volume to any legitimate cache directories" },
      { id: 'C', text: "Set <code>allowPrivilegeEscalation: true</code>" },
      { id: 'D', text: "Remove the container memory limit" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Hardening runtimes often requires configuring applications to operate in read-only environments. Setting <code>PYTHONDONTWRITEBYTECODE=1</code> prevents Python from writing <code>.pyc</code> files to disk, and mounting targeted <code>emptyDir</code> volumes to designated writable scratch paths preserves container immutability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["readOnlyRootFilesystem", "Python", "emptyDir", "Hardening"]
  },
  {
    id: "k8s-cks-109",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Ingress Traffic to Specific Ports with NetworkPolicies",
    scenario: "A backend database pod exposes metrics on port 9100 and database queries on port 5432. Applications must only reach port 5432; port 9100 should only be reachable by Prometheus scraper pods.",
    question: "Which NetworkPolicy configuration enforces this port-level traffic separation?",
    options: [
      { id: 'A', text: "Define two separate ingress rules: one matching application pods on port 5432, and a second matching Prometheus pods on port 9100" },
      { id: 'B', text: "Define a single ingress rule without port specifications matching both application and Prometheus pods" },
      { id: 'C', text: "Configure an egress rule blocking port 9100 on the Prometheus server" },
      { id: 'D', text: "Set <code>policyTypes: ['Ingress']</code> and specify <code>ingress: [{}]</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "NetworkPolicies support granular port-level rules. By defining distinct ingress rules—one pairing the application podSelector with port 5432, and another pairing the Prometheus podSelector with port 9100—unauthorized workloads are blocked from probing internal metrics endpoints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "Port-Security", "Traffic-Isolation", "Least-Privilege"]
  },
  {
    id: "k8s-cks-110",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Managing Certificate Expiration in Kubernetes Secrets",
    scenario: "An enterprise web application mounts an SSL certificate from a Kubernetes Secret. The certificate expires after 90 days, causing downtime when it lapses unexpectedly.",
    question: "Which cloud-native tool automates the issuance, renewal, and rotation of TLS certificates stored as Kubernetes Secrets?",
    options: [
      { id: 'A', text: "Trivy vulnerability scanner" },
      { id: 'B', text: "kube-bench compliance auditor" },
      { id: 'C', text: "cert-manager (using ACME, Let's Encrypt, or internal Vault issuers)" },
      { id: 'D', text: "CoreDNS stub domain manager" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "<code>cert-manager</code> is the Kubernetes-native certificate management controller. It automates requesting, renewing, and updating X.509 certificates from public (Let's Encrypt) or private (HashiCorp Vault, Venafi) issuers, storing renewed certificates seamlessly into Kubernetes Secrets.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["cert-manager", "TLS", "Certificate-Rotation", "Automation"]
  },
  {
    id: "k8s-cks-111",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing Namespace Resource Exhaustion via Default LimitRange",
    scenario: "In a development namespace, a rogue test script creates 100 pods without setting memory limits. The worker node becomes unresponsive and locks up.",
    question: "Which configuration in a <code>LimitRange</code> resource would have prevented these pods from running without memory limits?",
    options: [
      { id: 'A', text: "A NetworkPolicy restricting pod egress to internal DNS" },
      { id: 'B', text: "A <code>ResourceQuota</code> specifying <code>hard: { memory: '100Gi' }</code>" },
      { id: 'C', text: "A PodDisruptionBudget with <code>maxUnavailable: 0</code>" },
      { id: 'D', text: "A <code>LimitRange</code> with <code>limits: [{ type: 'Container', default: { memory: '512Mi' }, defaultRequest: { memory: '256Mi' } }]</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>default</code> and <code>defaultRequest</code> fields in a <code>LimitRange</code> automatically assign CPU and memory limits and requests to any container submitted without explicit resource specifications, ensuring containers cannot consume unconstrained memory.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["LimitRange", "Resource-Limits", "DoS-Prevention", "Governance"]
  },
  {
    id: "k8s-cks-112",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Ingress Controllers: SSL Termination and TLS Protocols",
    scenario: "An ingress controller terminates TLS for public web traffic. The security team must disable obsolete TLS 1.0 and 1.1 protocols to comply with PCI-DSS 4.0 requirements.",
    question: "Where should the minimum TLS protocol version be configured for an NGINX Ingress Controller?",
    options: [
      { id: 'A', text: "In the <code>/etc/kubernetes/admin.conf</code> file on the control plane" },
      { id: 'B', text: "In the <code>ingress-nginx-controller</code> ConfigMap setting <code>ssl-protocols: 'TLSv1.2 TLSv1.3'</code>" },
      { id: 'C', text: "In the CoreDNS ConfigMap under <code>plugins</code>" },
      { id: 'D', text: "In each individual Pod's <code>securityContext</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For the NGINX Ingress Controller, global TLS settings are managed via its central ConfigMap. Adding <code>ssl-protocols: 'TLSv1.2 TLSv1.3'</code> disables insecure legacy SSL/TLS versions (SSLv3, TLSv1.0, TLSv1.1) across all routed hostnames.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Ingress", "TLS", "PCI-DSS", "Hardening"]
  },
  {
    id: "k8s-cks-113",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Access to Cloud Metadata Service with Calico GlobalNetworkPolicy",
    scenario: "A Kubernetes cluster spans multiple namespaces and uses Calico CNI. The security architect wants a single cluster-wide policy blocking all pods from accessing the cloud metadata IP <code>169.254.169.254</code> without creating individual NetworkPolicies in every namespace.",
    question: "Which Calico custom resource implements cluster-wide egress blocking for cloud metadata?",
    options: [
      { id: 'A', text: "A <code>GlobalNetworkPolicy</code> defining an egress rule that drops destination CIDR <code>169.254.169.254/32</code>" },
      { id: 'B', text: "A <code>ClusterRole</code> denying access to <code>services/proxy</code>" },
      { id: 'C', text: "A standard Kubernetes NetworkPolicy in the <code>default</code> namespace" },
      { id: 'D', text: "A sysctl rule in <code>/etc/sysctl.d/calico.conf</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Calico's <code>GlobalNetworkPolicy</code> is a non-namespaced resource that applies across the entire cluster. Defining an egress drop rule for <code>169.254.169.254/32</code> globally protects all current and future tenant namespaces from metadata service queries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Calico", "GlobalNetworkPolicy", "IMDS", "Cluster-Wide"]
  },
  {
    id: "k8s-cks-114",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Securing Webhook Certificates with cert-manager",
    scenario: "A custom Validating Admission Webhook requires a valid TLS certificate and CA bundle to communicate securely with <code>kube-apiserver</code>.",
    question: "How can cert-manager automatically inject the CA certificate bundle into the <code>ValidatingWebhookConfiguration</code>?",
    options: [
      { id: 'A', text: "Mount the API server root certificate into the webhook pod" },
      { id: 'B', text: "Manually copy the base64-encoded root CA into the <code>caBundle</code> field using an administrative bash script" },
      { id: 'C', text: "Set <code>insecureSkipTLSVerify: true</code> in the webhook client configuration" },
      { id: 'D', text: "Annotate the <code>ValidatingWebhookConfiguration</code> with <code>cert-manager.io/inject-ca-from: &lt;namespace&gt;/&lt;certificate-name&gt;</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>cert-manager.io/inject-ca-from</code> annotation instructs the cert-manager cainjector component to automatically extract the CA certificate bundle from the specified Certificate resource and inject it into the <code>clientConfig.caBundle</code> field of the webhook configuration.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["cert-manager", "cainjector", "Admission-Webhooks", "TLS"]
  },
  {
    id: "k8s-cks-115",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Protecting Kubernetes API Access from Untrusted Pods",
    scenario: "A public-facing blogging platform allows users to install untrusted third-party plugins in containerized pods. These pods must be strictly prohibited from accessing the Kubernetes API server.",
    question: "What combination of controls ensures that untrusted pods cannot communicate with or authenticate to the API server?",
    options: [
      { id: 'A', text: "Delete the <code>kubernetes</code> service in the <code>default</code> namespace" },
      { id: 'B', text: "Set <code>securityContext.privileged: false</code> and mount an emptyDir volume to <code>/etc/kubernetes</code>" },
      { id: 'C', text: "Set <code>automountServiceAccountToken: false</code> on the pod, and apply an egress NetworkPolicy blocking traffic to the Kubernetes API service IP (port 443/6443)" },
      { id: 'D', text: "Enable anonymous authentication on the API server" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Defense-in-depth requires two layers: first, set <code>automountServiceAccountToken: false</code> so the pod possesses no credentials; second, apply an egress NetworkPolicy blocking outbound connections to the cluster's API server IP and port, preventing network-level access.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["API-Protection", "NetworkPolicy", "Least-Privilege", "Defense-in-Depth"]
  },
  {
    id: "k8s-cks-116",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Pod Security: Enforcing seccompProfile in Restricted PSS",
    scenario: "A deployment submitted to a namespace labeled with <code>pod-security.kubernetes.io/enforce: restricted</code> is rejected with error: 'seccompProfile: must be RuntimeDefault or Localhost'.",
    question: "Which entry in the deployment manifest satisfies this Pod Security Standard requirement?",
    options: [
      { id: 'A', text: "Add <code>securityContext: { seccompProfile: { type: 'Unconfined' } }</code>" },
      { id: 'B', text: "Set <code>securityContext.privileged: false</code> without a seccomp block" },
      { id: 'C', text: "Add <code>securityContext: { seccompProfile: { type: 'RuntimeDefault' } }</code> to the Pod or container spec" },
      { id: 'D', text: "Annotate the deployment with <code>seccomp: 'disabled'</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Restricted Pod Security Standard requires that all containers specify a valid seccomp profile, which must be either <code>RuntimeDefault</code> or <code>Localhost</code> (referencing a custom profile). Setting <code>type: Unconfined</code> or omitting seccomp is forbidden.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Seccomp", "Restricted", "Admission"]
  },
  {
    id: "k8s-cks-117",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Detecting Compromised Microservice Credentials via Honeypot Tokens",
    scenario: "A security engineer creates a fake Kubernetes Secret named <code>aws-prod-keys</code> containing canary credentials in a staging namespace. If any process attempts to use these credentials, an immediate intrusion alert is triggered.",
    question: "What security strategy does this implementation represent?",
    options: [
      { id: 'A', text: "Honeypot / Canary credentials deployment" },
      { id: 'B', text: "Pod Security Standards enforcement" },
      { id: 'C', text: "Static application security testing (SAST)" },
      { id: 'D', text: "Dynamic Admission Control" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Placing canary tokens or honeypot secrets inside cluster namespaces allows detecting reconnaissance activities and unauthorized insider or external attackers who enumerate and attempt to utilize secrets before they impact real production assets.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Honeypot", "Canary-Tokens", "Intrusion-Detection", "Threat-Hunting"]
  },
  {
    id: "k8s-cks-118",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Securing Kubernetes Service Mesh Gateway Ingress",
    scenario: "An Istio Ingress Gateway is exposed to the internet. To defend against slowloris and HTTP flood attacks, connection timeouts and request size limits must be enforced.",
    question: "Which Istio or Envoy configuration applies client connection timeouts and header limits on ingress traffic?",
    options: [
      { id: 'A', text: "Set <code>automountServiceAccountToken: false</code> on the gateway ServiceAccount" },
      { id: 'B', text: "Set <code>readOnlyRootFilesystem: true</code> on the ingress gateway deployment" },
      { id: 'C', text: "Deploy an egress NetworkPolicy in the <code>istio-system</code> namespace" },
      { id: 'D', text: "Configure connection limits and timeouts in the Istio <code>EnvoyFilter</code> or <code>DestinationRule</code> traffic policies" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Traffic policies, connection limits, and connection timeouts on Istio gateways are configured via <code>DestinationRule</code> (connection pool settings) or lower-level <code>EnvoyFilter</code> manifests to protect the ingress gateway from resource exhaustion and slowloris attacks.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Istio", "Ingress-Gateway", "DoS-Protection", "Envoy"]
  },
  {
    id: "k8s-cks-119",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Microservice Privileges: Dropping CAP_KILL",
    scenario: "An attacker breaks into an application container. The container process has default Linux capabilities, including <code>CAP_KILL</code>. What action can the attacker perform inside the container?",
    question: "What does <code>CAP_KILL</code> allow a process to do?",
    options: [
      { id: 'A', text: "Disable iptables firewall rules on the node" },
      { id: 'B', text: "Send arbitrary signals (such as <code>SIGKILL</code> or <code>SIGTERM</code>) to any process belonging to other users within the same PID namespace" },
      { id: 'C', text: "Delete persistent volume claims in the namespace" },
      { id: 'D', text: "Reboot the host worker node" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>CAP_KILL</code> bypasses permission checks for sending signals to processes. In a shared process namespace or multi-process container, a process with <code>CAP_KILL</code> can terminate other processes regardless of UID. Dropping <code>ALL</code> capabilities removes this risk.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CAP_KILL", "Capabilities", "Process-Isolation", "Least-Privilege"]
  },
  {
    id: "k8s-cks-120",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Enforcing Pod Disruption Budgets for High Availability during Security Patches",
    scenario: "Worker nodes must be drained and rebooted to apply critical Linux kernel security patches. The team must ensure that at least 80% of payment service pods remain operational during rolling node drains.",
    question: "Which Kubernetes resource protects application availability during automated node maintenance?",
    options: [
      { id: 'A', text: "A NetworkPolicy with <code>policyTypes: ['Ingress']</code>" },
      { id: 'B', text: "A <code>LimitRange</code> with <code>maxUnavailable: 20%</code>" },
      { id: 'C', text: "A <code>ResourceQuota</code> specifying <code>pods: '10'</code>" },
      { id: 'D', text: "A <code>PodDisruptionBudget</code> (PDB) specifying <code>minAvailable: '80%'</code> matching the payment service selector" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A <code>PodDisruptionBudget</code> limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (e.g., node drains via <code>kubectl drain</code> during kernel patching). Setting <code>minAvailable: 80%</code> prevents the drain process from violating service SLAs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["PodDisruptionBudget", "PDB", "Patching", "Availability"]
  },
  {
    id: "k8s-cks-121",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Isolating Sensitive Database Pods with Node Taints and Tolerations",
    scenario: "A cluster includes specialized bare-metal nodes with hardware encryption modules dedicated to processing PCI-DSS financial transactions. Standard web frontend pods must never be scheduled onto these secure nodes.",
    question: "Which Kubernetes feature ensures that only financial transaction pods with matching tolerations can be scheduled on these nodes?",
    options: [
      { id: 'A', text: "Configure a <code>LimitRange</code> on the secure nodes" },
      { id: 'B', text: "Apply an AppArmor profile to the frontend pods" },
      { id: 'C', text: "Configure an ingress NetworkPolicy blocking port 443" },
      { id: 'D', text: "Apply a <code>taint</code> to the secure nodes with <code>key=dedicated,value=pci,effect=NoSchedule</code>, and declare matching <code>tolerations</code> only in the financial transaction pod manifests" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Taints and tolerations work together to ensure pods are not scheduled onto inappropriate nodes. Tainting the secure nodes with <code>NoSchedule</code> repels all pods that do not possess a matching <code>toleration</code>, ensuring only authorized workloads execute on hardened hardware.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Taints", "Tolerations", "Scheduling", "Workload-Isolation"]
  },
  {
    id: "k8s-cks-122",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Webhook Configurations: FailurePolicy Implications",
    scenario: "A security team deploys a custom Validating Admission Webhook that checks for mandatory security labels. What is the impact of configuring <code>failurePolicy: Fail</code> vs <code>failurePolicy: Ignore</code>?",
    question: "What occurs when the webhook endpoint is unreachable if <code>failurePolicy: Fail</code> is configured?",
    options: [
      { id: 'A', text: "The API server retries indefinitely until the webhook comes back online" },
      { id: 'B', text: "The API server allows all requests to pass through without validation" },
      { id: 'C', text: "The API server rejects all incoming requests that match the webhook rules, prioritizing security over availability" },
      { id: 'D', text: "The API server automatically disables the webhook rule" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configuring <code>failurePolicy: Fail</code> enforces a 'fail-closed' security posture: if the webhook is down, timing out, or returns an error, the API server denies the operation. In contrast, <code>failurePolicy: Ignore</code> 'fails-open', allowing requests through uninspected.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Admission-Webhooks", "failurePolicy", "Fail-Closed", "High-Availability"]
  },
  {
    id: "k8s-cks-123",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Pod Security: Restricting hostPorts Usage",
    scenario: "A developer specifies <code>hostPort: 8080</code> in a container's port definition to expose the service directly on the worker node's IP address.",
    question: "Why does the Pod Security Standard restricted profile forbid specifying <code>hostPort</code>?",
    options: [
      { id: 'A', text: "<code>hostPort</code> binds the container directly to the host node's network port, potentially clashing with node services, bypassing NetworkPolicies, and limiting pod scheduling to one replica per node" },
      { id: 'B', text: "<code>hostPort</code> automatically mounts host /etc into the container" },
      { id: 'C', text: "<code>hostPort</code> causes kubelet to disable TLS certificate verification" },
      { id: 'D', text: "<code>hostPort</code> forces the container to run as root UID 0" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Using <code>hostPort</code> exposes the container directly on the host's network interfaces, which can conflict with host services, bind to privileged ports, bypass standard ingress and NetworkPolicy controls, and prevent multiple pod replicas from running on the same node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["hostPort", "Pod-Security-Standards", "Networking", "Restricted"]
  },
  {
    id: "k8s-cks-124",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Mitigating Insecure File Sharing via POSIX Shared Memory (/dev/shm)",
    scenario: "A machine learning container crashes due to insufficient shared memory in <code>/dev/shm</code>, which defaults to 64MB in Docker/Kubernetes.",
    question: "How should an administrator safely expand <code>/dev/shm</code> without granting <code>hostIPC: true</code>?",
    options: [
      { id: 'A', text: "Set <code>hostIPC: true</code> in the Pod specification" },
      { id: 'B', text: "Mount an <code>emptyDir</code> volume with <code>medium: Memory</code> and a <code>sizeLimit</code> directly to <code>/dev/shm</code>" },
      { id: 'C', text: "Mount <code>/dev/shm</code> from the host using a hostPath volume" },
      { id: 'D', text: "Set <code>securityContext.privileged: true</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Mounting an <code>emptyDir</code> volume with <code>medium: Memory</code> to <code>/dev/shm</code> creates a dedicated RAM-backed tmpfs mount for the pod with an optional <code>sizeLimit</code>, satisfying memory requirements while preserving complete IPC namespace isolation from the host.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["shared-memory", "dev-shm", "emptyDir", "Isolation"]
  },
  {
    id: "k8s-cks-125",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing Container Impersonation with Strict Pod Security Contexts",
    scenario: "A compliance standard mandates that no container within the multi-tenant cluster may execute with root privileges under any circumstances.",
    question: "Which combination of fields in <code>pod.spec.securityContext</code> guarantees non-root execution across all containers in the pod?",
    options: [
      { id: 'A', text: "Set <code>runAsNonRoot: true</code>, specify an unprivileged UID under <code>runAsUser: 10001</code>, and set <code>allowPrivilegeEscalation: false</code>" },
      { id: 'B', text: "Set <code>capabilities.drop: ['SETUID']</code> and omit runAsUser" },
      { id: 'C', text: "Set <code>runAsUser: 0</code> and configure <code>readOnlyRootFilesystem: false</code>" },
      { id: 'D', text: "Set <code>privileged: false</code> and configure <code>hostPID: false</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declaring <code>runAsNonRoot: true</code> instructs kubelet to verify the container image's UID before starting; if the image defaults to UID 0 or no UID is specified, startup is aborted. Specifying <code>runAsUser: 10001</code> and <code>allowPrivilegeEscalation: false</code> ensures the container starts and remains unprivileged.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["runAsNonRoot", "Least-Privilege", "securityContext", "Governance"]
  }
];

export default K8S_CKS_QUESTIONS_5;
