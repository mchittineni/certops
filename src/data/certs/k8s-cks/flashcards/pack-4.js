export const K8S_CKS_FLASHCARDS_4 = [
  {
    "id": "k8s-cks-fc-76",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Pod Security Standards Levels: What are the three official PSS levels and their primary purposes?",
    "hint": "Privileged, Baseline, Restricted.",
    "back": "1. <strong>Privileged</strong>: Unrestricted, allows all capabilities and host access.<br>2. <strong>Baseline</strong>: Prevents known escalations, allows default settings.<br>3. <strong>Restricted</strong>: Hardens pods strictly (non-root, drop all capabilities, no hostPath).",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-77",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Pod Security Admission Modes: What are the three modes configured via namespace labels?",
    "hint": "Enforce, Audit, Warn.",
    "back": "1. <strong>enforce</strong>: Rejects non-compliant pods.<br>2. <strong>audit</strong>: Records violations in API server audit logs without blocking.<br>3. <strong>warn</strong>: Returns user-facing terminal warnings during kubectl apply.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-78",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "PSS Version Pinning: How do you prevent future Kubernetes upgrades from breaking namespace admissions?",
    "hint": "Use enforce-version label.",
    "back": "Apply the label <strong>pod-security.kubernetes.io/enforce-version: v1.30</strong> (or specific minor version). This pins evaluation rules to that specific version release instead of defaulting to <code>latest</code>.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-79",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Secrets: Volume Mounts vs Environment Variables: Why are volume mounts preferred for sensitive secrets?",
    "hint": "Avoid exposure in /proc/environ, process tables, and crash dumps.",
    "back": "Environment variables are exposed via <code>/proc/&lt;pid&gt;/environ</code>, container inspection, and crash dumps. <strong>Volume mounts</strong> reside in memory-backed <code>tmpfs</code>, can be updated atomically, and are not exposed across process listings.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-80",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Secrets Store CSI Driver: What is its primary architectural advantage?",
    "hint": "Mounts external vault secrets without storing them in etcd.",
    "back": "It mounts secrets from external systems (Vault, AWS Secrets Manager, Azure Key Vault) directly into pod volumes via <strong>SecretProviderClass</strong> without storing plaintext secret data in Kubernetes etcd.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-81",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Istio mTLS Strict Mode: What policy resource and setting blocks unencrypted traffic?",
    "hint": "PeerAuthentication with STRICT mode.",
    "back": "Create an Istio <strong>PeerAuthentication</strong> resource with <strong>spec.mtls.mode: STRICT</strong>. This rejects all plaintext TCP traffic and mandates mutual TLS with verified client certificates.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-82",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Transparent CNI Encryption: How does Cilium encrypt inter-pod traffic without sidecars?",
    "hint": "Kernel-level WireGuard or IPsec.",
    "back": "Cilium uses Linux kernel-level <strong>WireGuard</strong> (or IPsec) to automatically encrypt node-to-node and pod-to-pod traffic at the network layer without modifying pods or injecting proxies.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-83",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Ephemeral Debug Containers: How do you inspect a running scratch container without shell tools?",
    "hint": "kubectl debug with --image and --target.",
    "back": "Run <strong>kubectl debug -it &lt;pod&gt; --image=&lt;debug-image&gt; --target=&lt;container&gt;</strong>. This injects an ephemeral container sharing the process and network namespace of the target container.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-84",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "LimitRange vs ResourceQuota: What is the fundamental difference?",
    "hint": "Per-container/pod defaults vs namespace-wide aggregate totals.",
    "back": "<strong>LimitRange</strong> enforces min/max/default constraints on <em>individual</em> containers/pods. <strong>ResourceQuota</strong> enforces hard <em>aggregate</em> capacity limits (total CPU, memory, pods) across the entire namespace.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-85",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "PSS Baseline vs Restricted: What does Restricted require that Baseline does not?",
    "hint": "Mandatory non-root, drop ALL capabilities, allowPrivilegeEscalation false.",
    "back": "Restricted mandates <strong>runAsNonRoot: true</strong>, dropping <strong>ALL capabilities</strong>, <strong>allowPrivilegeEscalation: false</strong>, and strict volume type restrictions. Baseline permits root execution with default capabilities.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-86",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "imagePullSecrets: Where should registry pull secrets be attached for automated inheritance?",
    "hint": "On the ServiceAccount resource.",
    "back": "Link the secret to the <strong>ServiceAccount</strong> under <code>imagePullSecrets</code>. Any pod using that ServiceAccount automatically inherits the registry credentials.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-87",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Restricted PSS Permitted Volumes: Is hostPath allowed in Restricted PSS?",
    "hint": "Strictly forbidden.",
    "back": "<strong>No.</strong> <code>hostPath</code> is strictly forbidden. Only safe volumes like <code>configMap</code>, <code>emptyDir</code>, <code>projected</code>, <code>secret</code>, <code>downwardAPI</code>, and <code>persistentVolumeClaim</code> are allowed.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-88",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Vault Agent Injector: How does it authenticate to HashiCorp Vault?",
    "hint": "Exchanges the pod's projected ServiceAccount token.",
    "back": "The Vault agent sidecar uses the pod's projected <strong>Kubernetes ServiceAccount token</strong> to authenticate against Vault's Kubernetes auth method and receive short-lived credentials.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-89",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Swap Partition Disabling: Why does Kubernetes mandate swapoff on worker nodes?",
    "hint": "Prevents secret memory pages from being written to plaintext disk swap.",
    "back": "To ensure that sensitive memory pages (decrypted secrets, private keys) are <strong>never swapped to unencrypted disk partitions</strong>, and to guarantee predictable container memory accounting.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-90",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "CAP_NET_RAW Exploit: What in-cluster network attack does CAP_NET_RAW permit?",
    "hint": "Raw socket packet forging, ARP cache poisoning, DNS spoofing.",
    "back": "It permits crafting raw IP/Ethernet packets, enabling an attacker to perform <strong>ARP poisoning and DNS spoofing</strong> against other pods sharing the network.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-91",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "PSS Audit Label: What happens when pod-security.kubernetes.io/audit: restricted is set?",
    "hint": "Logs violations in API audit logs without blocking pods.",
    "back": "Non-compliant pods are <strong>permitted to run</strong>, but violations are recorded in the <strong>API server audit log</strong>, allowing teams to identify non-compliant workloads prior to enforcement.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-92",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Downward API Security Risk: Why be cautious exposing annotations via Downward API?",
    "hint": "Annotations may contain sensitive tokens or internal configurations.",
    "back": "Annotations frequently contain internal deployment flags or credentials. Exposing them via Downward API files leaks this metadata into unprivileged container filesystems.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-93",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "DNS Spoofing Mitigation: Which Linux capability should be dropped to prevent ARP spoofing?",
    "hint": "Drop CAP_NET_RAW.",
    "back": "Drop <strong>CAP_NET_RAW</strong> under <code>securityContext.capabilities.drop</code>. Without raw sockets, containers cannot forge ARP packets to hijack DNS queries.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-94",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Secret Volume defaultMode: How do you set mounted secret permissions to 0400?",
    "hint": "Specify defaultMode in the volume definition.",
    "back": "Set <strong>defaultMode: 0400</strong> in the Secret volume definition under <code>spec.volumes</code>. This mounts files with read-only permissions for the owner.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-95",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Dynamic Secret Updates: Do environment variables update when a Secret is updated in etcd?",
    "hint": "No, only mounted volumes update automatically.",
    "back": "<strong>No.</strong> Environment variables are static and set at container start. <strong>Volume-mounted secrets</strong> are periodically updated by the kubelet using atomic symlink swaps.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-96",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Service Mesh Workload Identity: How do Linkerd and Istio identify calling services?",
    "hint": "Cryptographically via the Pod's ServiceAccount in mTLS certificates.",
    "back": "Workload proxies present X.509 certificates containing the pod's <strong>ServiceAccount</strong> in the SAN (Subject Alternative Name), verified cryptographically during mTLS.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-97",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "podAntiAffinity for Isolation: How do you prevent sensitive pods sharing nodes with public pods?",
    "hint": "Use podAntiAffinity with topologyKey hostname.",
    "back": "Configure <strong>podAntiAffinity</strong> on the sensitive pod with <code>topologyKey: kubernetes.io/hostname</code> matching the public pod's labels to prevent co-scheduling on the same physical host.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-98",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "ephemeral-storage Limits: Why should containers declare ephemeral-storage limits?",
    "hint": "Prevents rogue logs from causing NodeHasDiskPressure evictions.",
    "back": "Without limits, runaway logging can consume all disk space on the host. Setting <strong>resources.limits.ephemeral-storage</strong> ensures kubelet evicts the offending pod before host disk fills.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-99",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "PSP vs Pod Security Admission: What made Pod Security Admission simpler?",
    "hint": "Namespace labels replacing complex RBAC bindings and PSP resources.",
    "back": "Pod Security Admission uses <strong>simple namespace labels</strong> (<code>enforce</code>, <code>audit</code>, <code>warn</code>) with predefined profiles, completely removing the need for complex RBAC role bindings.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  },
  {
    "id": "k8s-cks-fc-100",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d3",
    "front": "Missing Secret Key: What status does a pod enter if a required secret key is missing?",
    "hint": "CreateContainerConfigError.",
    "back": "The pod enters <strong>CreateContainerConfigError</strong> (or <code>CrashLoopBackOff</code>) and refuses to start until the referenced Secret and key are created.",
    "tags": [
      "CKS",
      "Minimize"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_4;
