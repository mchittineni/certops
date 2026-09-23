export const K8S_CKS_QUESTIONS_5 = [
  {
    id: "k8s-cks-101",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    domainName: "System Hardening",
    title: "Hardening Pod DNS Configuration: dnsPolicy and options",
    scenario: "A containerized workload in a high-security cluster must be prevented from querying external public DNS resolvers or falling back to node host DNS configurations.",
    question: "Which <code>dnsPolicy</code> setting ensures that all DNS resolution is handled strictly by the internal cluster CoreDNS without inheriting host search paths?",
    options: [
      { id: 'A', text: "Set <code>dnsPolicy: Default</code>, which inherits the node's own resolver configuration" },
      { id: 'B', text: "Set <code>dnsPolicy: None</code> and have an init container write <code>/etc/resolv.conf</code>" },
      { id: 'C', text: "Set <code>dnsPolicy: ClusterFirstWithHostNet</code>, which keeps the host's search paths" },
      { id: 'D', text: "Set <code>dnsPolicy: ClusterFirst</code>, or <code>None</code> with explicit nameservers" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>ClusterFirst</code> directs all DNS queries to the internal cluster DNS service (CoreDNS). If complete isolation is required, <code>dnsPolicy: None</code> combined with a customized <code>dnsConfig</code> allows specifying precise internal nameservers and search domains without inheriting node defaults.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["dnsPolicy", "CoreDNS", "DNS-Security", "Pod-Spec"]
  },
  {
    id: "k8s-cks-102",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Limiting Container Process Concurrency to Prevent Denial-of-Service",
    scenario: "A security engineer notices that an insecure web API allows attackers to trigger expensive multi-threaded image processing jobs, exhausting CPU resources across the cluster.",
    question: "How should container CPU requests and limits be configured to guarantee predictable scheduling and prevent CPU starvation?",
    options: [
      { id: 'A', text: "Set CPU requests well below limits, so the scheduler packs the node and bursting is allowed" },
      { id: 'B', text: "Set CPU requests equal to limits, giving the pod Guaranteed QoS and its own CFS share" },
      { id: 'C', text: "Set CPU requests only, leaving limits unset so the container may use any idle capacity" },
      { id: 'D', text: "Set CPU limits only, letting the requests default, and add a high-priority PriorityClass" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Setting CPU requests equal to limits grants the pod the <code>Guaranteed</code> Quality of Service (QoS) class. The Linux CFS (Completely Fair Scheduler) enforces strict CPU quota slices, ensuring the container cannot consume more CPU cycles than permitted, preventing starvation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["QoS", "CPU-Limits", "CFS", "Denial-of-Service"]
  },
  {
    id: "k8s-cks-103",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Access to Host Storage via CSI Drivers",
    scenario: "An enterprise migrates storage volumes to modern CSI plugins. What security advantage does CSI volume handling offer over legacy in-tree volume plugins?",
    question: "How do CSI volume drivers improve cluster security boundaries?",
    options: [
      { id: 'A', text: "CSI drivers present every volume as memory-backed tmpfs, so nothing is written to node disks" },
      { id: 'B', text: "CSI drivers run in the kernel, which removes the user-space daemon an attacker could target" },
      { id: 'C', text: "CSI drivers bind volumes directly to pods, which removes the claim object from the trust path" },
      { id: 'D', text: "CSI drivers run as least-privilege plugins outside the core binaries, with scoped credentials and RBAC" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Container Storage Interface (CSI) drivers separate storage logic from core Kubernetes binaries. Instead of granting control plane controllers broad cloud infrastructure credentials, CSI drivers run in dedicated pods with granular, least-privilege RBAC roles and support credential segregation.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CSI", "Storage-Security", "Decoupling", "Least-Privilege"]
  },
  {
    id: "k8s-cks-104",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Multi-Container Pod Communications",
    scenario: "A pod consists of a web application container and a local caching proxy container. The containers need to communicate over localhost.",
    question: "What network security boundary exists between containers residing within the same Pod?",
    options: [
      { id: 'A', text: "NetworkPolicy applies between them once the pod's containers are named in the policy's own `podSelector`" },
      { id: 'B', text: "They are isolated by default, and traffic between them is allowed only once an AppArmor profile permits it" },
      { id: 'C', text: "A service mesh sidecar mediates the traffic, so mTLS applies between containers inside the same pod" },
      { id: 'D', text: "None: containers in a pod share a network namespace and reach each other on localhost, beyond NetworkPolicy's reach" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "All containers within a single Pod share the same Linux network namespace, meaning they share the same IP address and network stack. They can communicate over <code>127.0.0.1</code>, and Kubernetes NetworkPolicies operate at the Pod level, meaning intra-pod traffic cannot be filtered by NetworkPolicies.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Architecture", "Network-Namespace", "Localhost", "Security-Boundaries"]
  },
  {
    id: "k8s-cks-105",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Protecting Kubernetes Secrets from Git Commits",
    scenario: "A development team stores application manifests in a public Git repository. A developer accidentally commits a Kubernetes Secret containing base64-encoded production database credentials.",
    question: "Why is base64 encoding in Kubernetes Secrets not equivalent to encryption?",
    options: [
      { id: 'A', text: "Base64 is a serialisation encoding that anyone can reverse with <code>base64 -d</code> — it provides no confidentiality" },
      { id: 'B', text: "Base64 is applied per field, so a secret with several keys is only as protected as its shortest value" },
      { id: 'C', text: "Base64 is a symmetric cipher whose key is derived from the secret's name, which makes it trivial to break" },
      { id: 'D', text: "Base64 output is stored in etcd unchanged, so it is only protected while the etcd disk itself is encrypted" }
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
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Encrypting Secrets in GitOps Repositories Using Bitnami Sealed Secrets",
    scenario: "A platform team adopts GitOps (ArgoCD/Flux) and must commit all Kubernetes manifests to a public Git repository without exposing secret values.",
    question: "How does Bitnami Sealed Secrets enable secure storage of sensitive credentials in public Git repositories?",
    options: [
      { id: 'A', text: "Developers encrypt with a shared symmetric key, committed beside the manifests so the controller can decrypt" },
      { id: 'B', text: "The controller replaces each value with a hash on pull, and resolves the hash from its own store at apply time" },
      { id: 'C', text: "The controller reads plaintext manifests over a restricted deploy key that only it is permitted to use" },
      { id: 'D', text: "Developers encrypt with the controller's public key into a <code>SealedSecret</code>, which only its private key can open" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Bitnami Sealed Secrets uses asymmetric cryptography. Developers use the <code>kubeseal</code> CLI and the controller's public key to encrypt a Secret into a <code>SealedSecret</code> CRD. The SealedSecret can be safely committed to public Git; only the Sealed Secrets controller running inside the target cluster possesses the private key to decrypt and instantiate the secret.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["SealedSecrets", "GitOps", "Asymmetric-Encryption", "Secrets-Management"]
  },
  {
    id: "k8s-cks-107",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Auditing Pod Security Standard Warn Messages",
    scenario: "A cluster administrator configures <code>pod-security.kubernetes.io/warn: restricted</code> on the <code>default</code> namespace. A developer runs <code>kubectl apply -f deployment.yaml</code> containing a container running as root.",
    question: "What happens when the developer executes this command?",
    options: [
      { id: 'A', text: "It is rejected with a 403, naming the restricted fields it violates" },
      { id: 'B', text: "It is created, and the kubelet records an AppArmor violation for the pod" },
      { id: 'C', text: "It is created, and the client prints a warning naming the restricted fields it violates" },
      { id: 'D', text: "It is created, with the pod mutated to run as an unprivileged UID" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The <code>warn</code> mode of Pod Security Admission does not block resource creation. Instead, it returns user-friendly warning messages directly in the HTTP API response, which <code>kubectl</code> displays in the terminal to notify developers of impending policy non-compliance.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Warn-Mode", "Developer-Experience", "Admission"]
  },
  {
    id: "k8s-cks-108",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Configuring Read-Only Root Filesystem with Writable Cache Volumes",
    scenario: "A Python web application runs under <code>readOnlyRootFilesystem: true</code>, but crashes because Python attempts to write compiled bytecode (<code>.pyc</code>) to its application directory.",
    question: "How can the deployment be remediated without disabling <code>readOnlyRootFilesystem</code>?",
    options: [
      { id: 'A', text: "Set <code>allowPrivilegeEscalation: true</code> so the interpreter may write its bytecode cache" },
      { id: 'B', text: "Mount the image's own <code>/</code> as a writable <code>hostPath</code> volume on the node instead" },
      { id: 'C', text: "Set <code>PYTHONDONTWRITEBYTECODE=1</code> and mount an <code>emptyDir</code> at the cache directory" },
      { id: 'D', text: "Set <code>fsGroup</code> on the pod so the interpreter owns the directories it writes into" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Hardening runtimes often requires configuring applications to operate in read-only environments. Setting <code>PYTHONDONTWRITEBYTECODE=1</code> prevents Python from writing <code>.pyc</code> files to disk, and mounting targeted <code>emptyDir</code> volumes to designated writable scratch paths preserves container immutability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["readOnlyRootFilesystem", "Python", "emptyDir", "Hardening"]
  },
  {
    id: "k8s-cks-109",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Restricting Ingress Traffic to Specific Ports with NetworkPolicies",
    scenario: "A backend database pod exposes metrics on port 9100 and database queries on port 5432. Applications must only reach port 5432; port 9100 should only be reachable by Prometheus scraper pods.",
    question: "Which NetworkPolicy configuration enforces this port-level traffic separation?",
    options: [
      { id: 'A', text: "One ingress rule with <code>ingress: [{}]</code> and <code>policyTypes: ['Ingress']</code>" },
      { id: 'B', text: "One egress rule on the Prometheus pods restricting them to port 9100" },
      { id: 'C', text: "Two ingress rules: the application pods on 5432, and Prometheus on 9100" },
      { id: 'D', text: "One ingress rule matching both pod sets, with no ports specified at all" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "NetworkPolicies support granular port-level rules. By defining distinct ingress rules—one pairing the application podSelector with port 5432, and another pairing the Prometheus podSelector with port 9100—unauthorized workloads are blocked from probing internal metrics endpoints.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NetworkPolicy", "Port-Security", "Traffic-Isolation", "Least-Privilege"]
  },
  {
    id: "k8s-cks-110",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Managing Certificate Expiration in Kubernetes Secrets",
    scenario: "An enterprise web application mounts an SSL certificate from a Kubernetes Secret. The certificate expires after 90 days, causing downtime when it lapses unexpectedly.",
    question: "Which cloud-native tool automates the issuance, renewal, and rotation of TLS certificates stored as Kubernetes Secrets?",
    options: [
      { id: 'A', text: "kube-bench, with a CIS certificate check" },
      { id: 'B', text: "Trivy, with its TLS misconfig scanner" },
      { id: 'C', text: "cert-manager, with ACME or an internal issuer" },
      { id: 'D', text: "CoreDNS, with its stub domain manager" }
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
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing Namespace Resource Exhaustion via Default LimitRange",
    scenario: "In a development namespace, a rogue test script creates 100 pods without setting memory limits. The worker node becomes unresponsive and locks up.",
    question: "Which configuration in a <code>LimitRange</code> resource would have prevented these pods from running without memory limits?",
    options: [
      { id: 'A', text: "A <code>ResourceQuota</code> with a hard cap on the namespace's total memory" },
      { id: 'B', text: "A <code>LimitRange</code> of type <code>Pod</code> carrying a <code>max</code> memory value" },
      { id: 'C', text: "A <code>LimitRange</code> of type <code>Container</code> carrying a <code>default</code> memory limit" },
      { id: 'D', text: "A <code>ResourceQuota</code> with a hard cap on the namespace's pod count" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The <code>default</code> and <code>defaultRequest</code> fields in a <code>LimitRange</code> automatically assign CPU and memory limits and requests to any container submitted without explicit resource specifications, ensuring containers cannot consume unconstrained memory.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["LimitRange", "Resource-Limits", "DoS-Prevention", "Governance"]
  },
  {
    id: "k8s-cks-112",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Hardening Ingress Controllers: SSL Termination and TLS Protocols",
    scenario: "An ingress controller terminates TLS for public web traffic. The security team must disable obsolete TLS 1.0 and 1.1 protocols to comply with PCI-DSS 4.0 requirements.",
    question: "Where should the minimum TLS protocol version be configured for an NGINX Ingress Controller?",
    options: [
      { id: 'A', text: "In each backend pod's own <code>securityContext</code> block for the workload" },
      { id: 'B', text: "In the controller's ConfigMap, as <code>ssl-protocols: 'TLSv1.2 TLSv1.3'</code>" },
      { id: 'C', text: "In the Ingress object's annotations, per host that terminates TLS" },
      { id: 'D', text: "In <code>/etc/kubernetes/admin.conf</code> on each control plane node" }
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
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Restricting Access to Cloud Metadata Service with Calico GlobalNetworkPolicy",
    scenario: "A Kubernetes cluster spans multiple namespaces and uses Calico CNI. The security architect wants a single cluster-wide policy blocking all pods from accessing the cloud metadata IP <code>169.254.169.254</code> without creating individual NetworkPolicies in every namespace.",
    question: "Which Calico custom resource implements cluster-wide egress blocking for cloud metadata?",
    options: [
      { id: 'A', text: "A Calico <code>HostEndpoint</code> with a failsafe outbound port list on each node" },
      { id: 'B', text: "A Calico <code>GlobalNetworkPolicy</code> with an egress deny for <code>169.254.169.254/32</code>" },
      { id: 'C', text: "A Kubernetes NetworkPolicy in each namespace denying that destination address" },
      { id: 'D', text: "A Calico <code>NetworkSet</code> holding the metadata address, referenced by an allow rule" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Calico's <code>GlobalNetworkPolicy</code> is a non-namespaced resource that applies across the entire cluster. Defining an egress drop rule for <code>169.254.169.254/32</code> globally protects all current and future tenant namespaces from metadata service queries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Calico", "GlobalNetworkPolicy", "IMDS", "Cluster-Wide"]
  },
  {
    id: "k8s-cks-114",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Securing Webhook Certificates with cert-manager",
    scenario: "A custom Validating Admission Webhook requires a valid TLS certificate and CA bundle to communicate securely with <code>kube-apiserver</code>.",
    question: "How can cert-manager automatically inject the CA certificate bundle into the <code>ValidatingWebhookConfiguration</code>?",
    options: [
      { id: 'A', text: "Annotate it with <code>cert-manager.io/inject-ca-from: &lt;namespace&gt;/&lt;certificate&gt;</code>" },
      { id: 'B', text: "Annotate it with <code>cert-manager.io/issuer</code> and leave the <code>caBundle</code> empty" },
      { id: 'C', text: "Mount the cluster's own CA into the webhook pod so it serves that chain" },
      { id: 'D', text: "Copy the base64 CA into the <code>caBundle</code> field from a bootstrap script" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>cert-manager.io/inject-ca-from</code> annotation instructs the cert-manager cainjector component to automatically extract the CA certificate bundle from the specified Certificate resource and inject it into the <code>clientConfig.caBundle</code> field of the webhook configuration.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["cert-manager", "cainjector", "Admission-Webhooks", "TLS"]
  },
  {
    id: "k8s-cks-115",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Protecting Kubernetes API Access from Untrusted Pods",
    scenario: "A public-facing blogging platform allows users to install untrusted third-party plugins in containerized pods. These pods must be strictly prohibited from accessing the Kubernetes API server.",
    question: "What combination of controls ensures that untrusted pods cannot communicate with or authenticate to the API server?",
    options: [
      { id: 'A', text: "Set <code>automountServiceAccountToken: false</code> and block egress to the API service IP on 443" },
      { id: 'B', text: "Set <code>automountServiceAccountToken: false</code> and disable anonymous auth on the API server" },
      { id: 'C', text: "Remove the <code>kubernetes</code> Service from the pod's namespace so the endpoint cannot resolve" },
      { id: 'D', text: "Set <code>privileged: false</code> and mount an <code>emptyDir</code> over <code>/var/run/secrets</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Defense-in-depth requires two layers: first, set <code>automountServiceAccountToken: false</code> so the pod possesses no credentials; second, apply an egress NetworkPolicy blocking outbound connections to the cluster's API server IP and port, preventing network-level access.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["API-Protection", "NetworkPolicy", "Least-Privilege", "Defense-in-Depth"]
  },
  {
    id: "k8s-cks-116",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Pod Security: Enforcing seccompProfile in Restricted PSS",
    scenario: "A deployment submitted to a namespace labeled with <code>pod-security.kubernetes.io/enforce: restricted</code> is rejected with error: 'seccompProfile: must be RuntimeDefault or Localhost'.",
    question: "Which entry in the deployment manifest satisfies this Pod Security Standard requirement?",
    options: [
      { id: 'A', text: "Add <code>seccompProfile: { type: 'Unconfined' }</code> to the pod's securityContext" },
      { id: 'B', text: "Add <code>appArmorProfile: { type: 'RuntimeDefault' }</code> to each container instead" },
      { id: 'C', text: "Add <code>privileged: false</code> to each container and omit the seccomp block" },
      { id: 'D', text: "Add <code>seccompProfile: { type: 'RuntimeDefault' }</code> to the pod's securityContext" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The Restricted Pod Security Standard requires that all containers specify a valid seccomp profile, which must be either <code>RuntimeDefault</code> or <code>Localhost</code> (referencing a custom profile). Setting <code>type: Unconfined</code> or omitting seccomp is forbidden.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Pod-Security-Standards", "Seccomp", "Restricted", "Admission"]
  },
  {
    id: "k8s-cks-117",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Detecting Compromised Microservice Credentials via Honeypot Tokens",
    scenario: "A security engineer creates a fake Kubernetes Secret named <code>aws-prod-keys</code> containing canary credentials in a staging namespace. If any process attempts to use these credentials, an immediate intrusion alert is triggered.",
    question: "What security strategy does this implementation represent?",
    options: [
      { id: 'A', text: "Honeypot / Canary credentials deployment" },
      { id: 'B', text: "Dynamic Admission Control" },
      { id: 'C', text: "Static application security testing (SAST)" },
      { id: 'D', text: "Pod Security Standards enforcement" }
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
    domainId: "d1",
    domainName: "Cluster Setup",
    title: "Securing Kubernetes Service Mesh Gateway Ingress",
    scenario: "An Istio Ingress Gateway is exposed to the internet. To defend against slowloris and HTTP flood attacks, connection timeouts and request size limits must be enforced.",
    question: "Which Istio or Envoy configuration applies client connection timeouts and header limits on ingress traffic?",
    options: [
      { id: 'A', text: "Connection limits in the gateway's own <code>Sidecar</code> resource for the namespace" },
      { id: 'B', text: "Request limits in an Istio <code>AuthorizationPolicy</code> attached to the gateway" },
      { id: 'C', text: "Rate limits in a Kubernetes <code>Ingress</code> annotation on the gateway's route" },
      { id: 'D', text: "Connection limits and timeouts in an Istio <code>EnvoyFilter</code> or <code>DestinationRule</code>" }
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
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Restricting Microservice Privileges: Dropping CAP_KILL",
    scenario: "An attacker breaks into an application container. The container process has default Linux capabilities, including <code>CAP_KILL</code>. What action can the attacker perform inside the container?",
    question: "What does <code>CAP_KILL</code> allow a process to do?",
    options: [
      { id: 'A', text: "Send a reboot request to the host through the kernel's own interface" },
      { id: 'B', text: "Send netlink messages that flush the node's iptables firewall rules" },
      { id: 'C', text: "Send delete requests for the persistent volume claims in its namespace" },
      { id: 'D', text: "Send any signal to processes owned by other users in the same PID namespace" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>CAP_KILL</code> bypasses permission checks for sending signals to processes. In a shared process namespace or multi-process container, a process with <code>CAP_KILL</code> can terminate other processes regardless of UID. Dropping <code>ALL</code> capabilities removes this risk.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CAP_KILL", "Capabilities", "Process-Isolation", "Least-Privilege"]
  },
  {
    id: "k8s-cks-120",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Enforcing Pod Disruption Budgets for High Availability during Security Patches",
    scenario: "Worker nodes must be drained and rebooted to apply critical Linux kernel security patches. The team must ensure that at least 80% of payment service pods remain operational during rolling node drains.",
    question: "Which Kubernetes resource protects application availability during automated node maintenance?",
    options: [
      { id: 'A', text: "A <code>ResourceQuota</code> with a hard pod count over the service's own namespace" },
      { id: 'B', text: "A <code>PodDisruptionBudget</code> with <code>minAvailable: 80%</code> over the service's selector" },
      { id: 'C', text: "A <code>PriorityClass</code> with preemption disabled, named by the service's pods" },
      { id: 'D', text: "A <code>LimitRange</code> with <code>maxUnavailable: 20%</code> over the service's pods" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A <code>PodDisruptionBudget</code> limits the number of pods of a replicated application that can be simultaneously down from voluntary disruptions (e.g., node drains via <code>kubectl drain</code> during kernel patching). Setting <code>minAvailable: 80%</code> prevents the drain process from violating service SLAs.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["PodDisruptionBudget", "PDB", "Patching", "Availability"]
  },
  {
    id: "k8s-cks-121",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Isolating Sensitive Database Pods with Node Taints and Tolerations",
    scenario: "A cluster includes specialized bare-metal nodes with hardware encryption modules dedicated to processing PCI-DSS financial transactions. Standard web frontend pods must never be scheduled onto these secure nodes.",
    question: "Which Kubernetes feature ensures that only financial transaction pods with matching tolerations can be scheduled on these nodes?",
    options: [
      { id: 'A', text: "Label the secure nodes <code>dedicated=pci</code> and give only the transaction pods a matching <code>nodeSelector</code>" },
      { id: 'B', text: "Taint the secure nodes <code>dedicated=pci:PreferNoSchedule</code> and give every pod in the namespace the toleration" },
      { id: 'C', text: "Taint the secure nodes <code>dedicated=pci:NoSchedule</code> and give only the transaction pods the matching toleration" },
      { id: 'D', text: "Set node affinity on the transaction pods for the secure nodes, and a pod anti-affinity against the others" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Taints and tolerations work together to ensure pods are not scheduled onto inappropriate nodes. Tainting the secure nodes with <code>NoSchedule</code> repels all pods that do not possess a matching <code>toleration</code>, ensuring only authorized workloads execute on hardened hardware.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Taints", "Tolerations", "Scheduling", "Workload-Isolation"]
  },
  {
    id: "k8s-cks-122",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Hardening Webhook Configurations: FailurePolicy Implications",
    scenario: "A security team deploys a custom Validating Admission Webhook that checks for mandatory security labels. What is the impact of configuring <code>failurePolicy: Fail</code> vs <code>failurePolicy: Ignore</code>?",
    question: "What occurs when the webhook endpoint is unreachable if <code>failurePolicy: Fail</code> is configured?",
    options: [
      { id: 'A', text: "Every request matching the webhook's rules is admitted unvalidated and the error recorded" },
      { id: 'B', text: "The API server disables the webhook rule until the endpoint answers a health probe again" },
      { id: 'C', text: "Every request matching the webhook's rules is rejected, favouring security over availability" },
      { id: 'D', text: "The API server retries the call until the endpoint returns, holding the request open" }
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
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Hardening Pod Security: Restricting hostPorts Usage",
    scenario: "A developer specifies <code>hostPort: 8080</code> in a container's port definition to expose the service directly on the worker node's IP address.",
    question: "Why does the Pod Security Standard restricted profile forbid specifying <code>hostPort</code>?",
    options: [
      { id: 'A', text: "It places the container in the host network namespace, which exposes every other port the node is listening on" },
      { id: 'B', text: "It binds the container to the node's own port, clashing with node services, bypassing policy and pinning one replica per node" },
      { id: 'C', text: "It requires the <code>CAP_NET_BIND_SERVICE</code> capability, which the restricted profile drops from every container" },
      { id: 'D', text: "It requires the kubelet to run the container as root, since only root may bind a port below 1024 on the host" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Using <code>hostPort</code> exposes the container directly on the host's network interfaces, which can conflict with host services, bind to privileged ports, bypass standard ingress and NetworkPolicy controls, and prevent multiple pod replicas from running on the same node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["hostPort", "Pod-Security-Standards", "Networking", "Restricted"]
  },
  {
    id: "k8s-cks-124",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Mitigating Insecure File Sharing via POSIX Shared Memory (/dev/shm)",
    scenario: "A machine learning container crashes due to insufficient shared memory in <code>/dev/shm</code>, which defaults to 64MB in Docker/Kubernetes.",
    question: "How should an administrator safely expand <code>/dev/shm</code> without granting <code>hostIPC: true</code>?",
    options: [
      { id: 'A', text: "Mount an <code>emptyDir</code> at <code>/dev/shm</code> and set <code>privileged: true</code> on the container" },
      { id: 'B', text: "Mount the node's own <code>/dev/shm</code> as a <code>hostPath</code> volume into the container" },
      { id: 'C', text: "Set <code>hostIPC: true</code> and raise the node's own <code>/dev/shm</code> size limit instead" },
      { id: 'D', text: "Mount an <code>emptyDir</code> with <code>medium: Memory</code> and a <code>sizeLimit</code> at <code>/dev/shm</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mounting an <code>emptyDir</code> volume with <code>medium: Memory</code> to <code>/dev/shm</code> creates a dedicated RAM-backed tmpfs mount for the pod with an optional <code>sizeLimit</code>, satisfying memory requirements while preserving complete IPC namespace isolation from the host.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["shared-memory", "dev-shm", "emptyDir", "Isolation"]
  },
  {
    id: "k8s-cks-125",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Preventing Container Impersonation with Strict Pod Security Contexts",
    scenario: "A compliance standard mandates that no container within the multi-tenant cluster may execute with root privileges under any circumstances.",
    question: "Which combination of fields in <code>pod.spec.securityContext</code> guarantees non-root execution across all containers in the pod?",
    options: [
      { id: 'A', text: "Set <code>runAsNonRoot: true</code> with <code>runAsUser: 10001</code> at the pod level" },
      { id: 'B', text: "Set <code>privileged: false</code> with <code>hostPID: false</code> at the pod level" },
      { id: 'C', text: "Set <code>capabilities.drop: ['SETUID', 'SETGID']</code> on each container" },
      { id: 'D', text: "Set <code>runAsUser: 0</code> with <code>readOnlyRootFilesystem: true</code> per container" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declaring <code>runAsNonRoot: true</code> instructs kubelet to verify the container image's UID before starting; if the image defaults to UID 0 or no UID is specified, startup is aborted. Specifying <code>runAsUser: 10001</code> and <code>allowPrivilegeEscalation: false</code> ensures the container starts and remains unprivileged.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["runAsNonRoot", "Least-Privilege", "securityContext", "Governance"]
  }
];

export default K8S_CKS_QUESTIONS_5;
