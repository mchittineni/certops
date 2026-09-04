export const K8S_CKAD_QUESTIONS_18 = [
  {
    id: "k8s-ckad-426",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Downward API: Pod and Container Metadata Exposure: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Downward API to allow an application running inside a container to know its own pod name, namespace, and node IP without granting it access to the Kubernetes API server.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Exposing pod name, namespace, and IP to containers via environment variables or files is under consideration.",
    options: [
      { id: 'A', text: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes." },
      { id: 'B', text: "Hardcode the pod name and namespace inside the container image." },
      { id: 'C', text: "Grant the pod cluster-admin RBAC permissions to query its own metadata via curl." },
      { id: 'D', text: "Inspect the local /etc/hosts file to parse arbitrary metadata strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes. The Downward API exposes pod and container metadata to the running container without requiring direct API server interaction or elevated RBAC permissions. Fields like `metadata.name`, `metadata.namespace`, and `status.podIP` can be injected via `env` (`fieldRef`) or mounted as files.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/",
    tags: ["Downward API", "Downward API", "Dr Failover"]
  },
  {
    id: "k8s-ckad-427",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Downward API: Pod and Container Metadata Exposure: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Downward API to allow an application running inside a container to know its own pod name, namespace, and node IP without granting it access to the Kubernetes API server.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Exposing pod name, namespace, and IP to containers via environment variables or files is under consideration.",
    options: [
      { id: 'A', text: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes." },
      { id: 'B', text: "Hardcode the pod name and namespace inside the container image." },
      { id: 'C', text: "Grant the pod cluster-admin RBAC permissions to query its own metadata via curl." },
      { id: 'D', text: "Inspect the local /etc/hosts file to parse arbitrary metadata strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes. The Downward API exposes pod and container metadata to the running container without requiring direct API server interaction or elevated RBAC permissions. Fields like `metadata.name`, `metadata.namespace`, and `status.podIP` can be injected via `env` (`fieldRef`) or mounted as files.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/",
    tags: ["Downward API", "Downward API", "High Load Scale"]
  },
  {
    id: "k8s-ckad-428",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Downward API: Pod and Container Metadata Exposure: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Downward API to allow an application running inside a container to know its own pod name, namespace, and node IP without granting it access to the Kubernetes API server.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Exposing pod name, namespace, and IP to containers via environment variables or files is under consideration.",
    options: [
      { id: 'A', text: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes." },
      { id: 'B', text: "Hardcode the pod name and namespace inside the container image." },
      { id: 'C', text: "Grant the pod cluster-admin RBAC permissions to query its own metadata via curl." },
      { id: 'D', text: "Inspect the local /etc/hosts file to parse arbitrary metadata strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes. The Downward API exposes pod and container metadata to the running container without requiring direct API server interaction or elevated RBAC permissions. Fields like `metadata.name`, `metadata.namespace`, and `status.podIP` can be injected via `env` (`fieldRef`) or mounted as files.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/",
    tags: ["Downward API", "Downward API", "Security Compliance"]
  },
  {
    id: "k8s-ckad-429",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Downward API: Pod and Container Metadata Exposure: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Downward API to allow an application running inside a container to know its own pod name, namespace, and node IP without granting it access to the Kubernetes API server.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Exposing pod name, namespace, and IP to containers via environment variables or files is under consideration.",
    options: [
      { id: 'A', text: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes." },
      { id: 'B', text: "Hardcode the pod name and namespace inside the container image." },
      { id: 'C', text: "Grant the pod cluster-admin RBAC permissions to query its own metadata via curl." },
      { id: 'D', text: "Inspect the local /etc/hosts file to parse arbitrary metadata strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes. The Downward API exposes pod and container metadata to the running container without requiring direct API server interaction or elevated RBAC permissions. Fields like `metadata.name`, `metadata.namespace`, and `status.podIP` can be injected via `env` (`fieldRef`) or mounted as files.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/",
    tags: ["Downward API", "Downward API", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-430",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Downward API: Pod and Container Metadata Exposure: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Downward API to allow an application running inside a container to know its own pod name, namespace, and node IP without granting it access to the Kubernetes API server.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Exposing pod name, namespace, and IP to containers via environment variables or files is under consideration.",
    options: [
      { id: 'A', text: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes." },
      { id: 'B', text: "Hardcode the pod name and namespace inside the container image." },
      { id: 'C', text: "Grant the pod cluster-admin RBAC permissions to query its own metadata via curl." },
      { id: 'D', text: "Inspect the local /etc/hosts file to parse arbitrary metadata strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Downward API to inject `fieldRef` metadata (`metadata.name`, `metadata.namespace`, `status.podIP`) into container environment variables or downwardAPI volumes. The Downward API exposes pod and container metadata to the running container without requiring direct API server interaction or elevated RBAC permissions. Fields like `metadata.name`, `metadata.namespace`, and `status.podIP` can be injected via `env` (`fieldRef`) or mounted as files.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/",
    tags: ["Downward API", "Downward API", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-431",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Immutable Secrets and ConfigMaps: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Immutability to protect static production configuration and credentials from accidental modification while significantly reducing API server watch cache overhead.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Configuring immutable: true on Secrets and ConfigMaps for performance and protection is under consideration.",
    options: [
      { id: 'A', text: "Set `immutable: true` on the ConfigMap and Secret manifests." },
      { id: 'B', text: "Remove all write permissions from the Kubernetes cluster administrator role." },
      { id: 'C', text: "Mount ConfigMaps with ReadWriteMany volume flags." },
      { id: 'D', text: "Delete the ConfigMap after the pod boots." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `immutable: true` on the ConfigMap and Secret manifests. Setting `immutable: true` on a ConfigMap or Secret prevents future modifications to its data (it must be deleted and recreated to change). This protects against accidental alteration and eliminates kubelet watch overhead on the API server, improving cluster scalability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable",
    tags: ["Immutability", "Immutable ConfigMaps", "Dr Failover"]
  },
  {
    id: "k8s-ckad-432",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Immutable Secrets and ConfigMaps: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Immutability to protect static production configuration and credentials from accidental modification while significantly reducing API server watch cache overhead.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Configuring immutable: true on Secrets and ConfigMaps for performance and protection is under consideration.",
    options: [
      { id: 'A', text: "Set `immutable: true` on the ConfigMap and Secret manifests." },
      { id: 'B', text: "Remove all write permissions from the Kubernetes cluster administrator role." },
      { id: 'C', text: "Mount ConfigMaps with ReadWriteMany volume flags." },
      { id: 'D', text: "Delete the ConfigMap after the pod boots." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `immutable: true` on the ConfigMap and Secret manifests. Setting `immutable: true` on a ConfigMap or Secret prevents future modifications to its data (it must be deleted and recreated to change). This protects against accidental alteration and eliminates kubelet watch overhead on the API server, improving cluster scalability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable",
    tags: ["Immutability", "Immutable ConfigMaps", "High Load Scale"]
  },
  {
    id: "k8s-ckad-433",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Immutable Secrets and ConfigMaps: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Immutability to protect static production configuration and credentials from accidental modification while significantly reducing API server watch cache overhead.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Configuring immutable: true on Secrets and ConfigMaps for performance and protection is under consideration.",
    options: [
      { id: 'A', text: "Set `immutable: true` on the ConfigMap and Secret manifests." },
      { id: 'B', text: "Remove all write permissions from the Kubernetes cluster administrator role." },
      { id: 'C', text: "Mount ConfigMaps with ReadWriteMany volume flags." },
      { id: 'D', text: "Delete the ConfigMap after the pod boots." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `immutable: true` on the ConfigMap and Secret manifests. Setting `immutable: true` on a ConfigMap or Secret prevents future modifications to its data (it must be deleted and recreated to change). This protects against accidental alteration and eliminates kubelet watch overhead on the API server, improving cluster scalability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable",
    tags: ["Immutability", "Immutable ConfigMaps", "Security Compliance"]
  },
  {
    id: "k8s-ckad-434",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Immutable Secrets and ConfigMaps: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Immutability to protect static production configuration and credentials from accidental modification while significantly reducing API server watch cache overhead.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Configuring immutable: true on Secrets and ConfigMaps for performance and protection is under consideration.",
    options: [
      { id: 'A', text: "Set `immutable: true` on the ConfigMap and Secret manifests." },
      { id: 'B', text: "Remove all write permissions from the Kubernetes cluster administrator role." },
      { id: 'C', text: "Mount ConfigMaps with ReadWriteMany volume flags." },
      { id: 'D', text: "Delete the ConfigMap after the pod boots." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `immutable: true` on the ConfigMap and Secret manifests. Setting `immutable: true` on a ConfigMap or Secret prevents future modifications to its data (it must be deleted and recreated to change). This protects against accidental alteration and eliminates kubelet watch overhead on the API server, improving cluster scalability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable",
    tags: ["Immutability", "Immutable ConfigMaps", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-435",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Immutable Secrets and ConfigMaps: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Immutability to protect static production configuration and credentials from accidental modification while significantly reducing API server watch cache overhead.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Configuring immutable: true on Secrets and ConfigMaps for performance and protection is under consideration.",
    options: [
      { id: 'A', text: "Set `immutable: true` on the ConfigMap and Secret manifests." },
      { id: 'B', text: "Remove all write permissions from the Kubernetes cluster administrator role." },
      { id: 'C', text: "Mount ConfigMaps with ReadWriteMany volume flags." },
      { id: 'D', text: "Delete the ConfigMap after the pod boots." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `immutable: true` on the ConfigMap and Secret manifests. Setting `immutable: true` on a ConfigMap or Secret prevents future modifications to its data (it must be deleted and recreated to change). This protects against accidental alteration and eliminates kubelet watch overhead on the API server, improving cluster scalability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable",
    tags: ["Immutability", "Immutable ConfigMaps", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-436",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Security Standards: Privileged, Baseline, Restricted: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Pod Security Standards to enforce strict security standards in a production namespace so that any pod requesting privilege escalation or root execution is rejected at admission time.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Enforcing pod security admission labels at namespace boundaries is under consideration.",
    options: [
      { id: 'A', text: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace." },
      { id: 'B', text: "Apply the label `pod-security.kubernetes.io/enforce: privileged` to the namespace." },
      { id: 'C', text: "Uninstall the kube-apiserver admission controller plugins." },
      { id: 'D', text: "Rely on developers voluntarily inspecting each other's manifests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace. Pod Security Standards (PSS) define three policies: `Privileged` (unrestricted), `Baseline` (prevents known privilege escalations), and `Restricted` (hardened, requiring non-root, read-only root filesystems, and dropping capabilities). Enforced via namespace labels, non-compliant pods are blocked upon submission.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Pod Security Standards", "Dr Failover"]
  },
  {
    id: "k8s-ckad-437",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Security Standards: Privileged, Baseline, Restricted: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Pod Security Standards to enforce strict security standards in a production namespace so that any pod requesting privilege escalation or root execution is rejected at admission time.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Enforcing pod security admission labels at namespace boundaries is under consideration.",
    options: [
      { id: 'A', text: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace." },
      { id: 'B', text: "Apply the label `pod-security.kubernetes.io/enforce: privileged` to the namespace." },
      { id: 'C', text: "Uninstall the kube-apiserver admission controller plugins." },
      { id: 'D', text: "Rely on developers voluntarily inspecting each other's manifests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace. Pod Security Standards (PSS) define three policies: `Privileged` (unrestricted), `Baseline` (prevents known privilege escalations), and `Restricted` (hardened, requiring non-root, read-only root filesystems, and dropping capabilities). Enforced via namespace labels, non-compliant pods are blocked upon submission.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Pod Security Standards", "High Load Scale"]
  },
  {
    id: "k8s-ckad-438",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Security Standards: Privileged, Baseline, Restricted: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Pod Security Standards to enforce strict security standards in a production namespace so that any pod requesting privilege escalation or root execution is rejected at admission time.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Enforcing pod security admission labels at namespace boundaries is under consideration.",
    options: [
      { id: 'A', text: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace." },
      { id: 'B', text: "Apply the label `pod-security.kubernetes.io/enforce: privileged` to the namespace." },
      { id: 'C', text: "Uninstall the kube-apiserver admission controller plugins." },
      { id: 'D', text: "Rely on developers voluntarily inspecting each other's manifests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace. Pod Security Standards (PSS) define three policies: `Privileged` (unrestricted), `Baseline` (prevents known privilege escalations), and `Restricted` (hardened, requiring non-root, read-only root filesystems, and dropping capabilities). Enforced via namespace labels, non-compliant pods are blocked upon submission.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Pod Security Standards", "Security Compliance"]
  },
  {
    id: "k8s-ckad-439",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Security Standards: Privileged, Baseline, Restricted: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Pod Security Standards to enforce strict security standards in a production namespace so that any pod requesting privilege escalation or root execution is rejected at admission time.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Enforcing pod security admission labels at namespace boundaries is under consideration.",
    options: [
      { id: 'A', text: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace." },
      { id: 'B', text: "Apply the label `pod-security.kubernetes.io/enforce: privileged` to the namespace." },
      { id: 'C', text: "Uninstall the kube-apiserver admission controller plugins." },
      { id: 'D', text: "Rely on developers voluntarily inspecting each other's manifests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace. Pod Security Standards (PSS) define three policies: `Privileged` (unrestricted), `Baseline` (prevents known privilege escalations), and `Restricted` (hardened, requiring non-root, read-only root filesystems, and dropping capabilities). Enforced via namespace labels, non-compliant pods are blocked upon submission.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Pod Security Standards", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-440",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Pod Security Standards: Privileged, Baseline, Restricted: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Pod Security Standards to enforce strict security standards in a production namespace so that any pod requesting privilege escalation or root execution is rejected at admission time.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Enforcing pod security admission labels at namespace boundaries is under consideration.",
    options: [
      { id: 'A', text: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace." },
      { id: 'B', text: "Apply the label `pod-security.kubernetes.io/enforce: privileged` to the namespace." },
      { id: 'C', text: "Uninstall the kube-apiserver admission controller plugins." },
      { id: 'D', text: "Rely on developers voluntarily inspecting each other's manifests." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the label `pod-security.kubernetes.io/enforce: restricted` to the namespace. Pod Security Standards (PSS) define three policies: `Privileged` (unrestricted), `Baseline` (prevents known privilege escalations), and `Restricted` (hardened, requiring non-root, read-only root filesystems, and dropping capabilities). Enforced via namespace labels, non-compliant pods are blocked upon submission.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/pod-security-standards/",
    tags: ["Pod Security Standards", "Pod Security Standards", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-441",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ServiceAccount AutomountServiceAccountToken Setting: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Token Security to prevent an application pod that does not interact with the Kubernetes API server from mounting API credentials in its filesystem.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Disabling automated token mounting with automountServiceAccountToken: false is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition." },
      { id: 'B', text: "Delete the default namespace ServiceAccount." },
      { id: 'C', text: "Grant read-only access to all API endpoints." },
      { id: 'D', text: "Mount an empty directory at `/var/run/secrets/kubernetes.io/serviceaccount`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition. By default, Kubernetes automatically mounts a ServiceAccount API token into every container at `/var/run/secrets/kubernetes.io/serviceaccount`. If an application does not need to communicate with the API server, setting `automountServiceAccountToken: false` closes an attack vector if the container is compromised.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server",
    tags: ["Token Security", "Token Automount", "Dr Failover"]
  },
  {
    id: "k8s-ckad-442",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ServiceAccount AutomountServiceAccountToken Setting: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Token Security to prevent an application pod that does not interact with the Kubernetes API server from mounting API credentials in its filesystem.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Disabling automated token mounting with automountServiceAccountToken: false is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition." },
      { id: 'B', text: "Delete the default namespace ServiceAccount." },
      { id: 'C', text: "Grant read-only access to all API endpoints." },
      { id: 'D', text: "Mount an empty directory at `/var/run/secrets/kubernetes.io/serviceaccount`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition. By default, Kubernetes automatically mounts a ServiceAccount API token into every container at `/var/run/secrets/kubernetes.io/serviceaccount`. If an application does not need to communicate with the API server, setting `automountServiceAccountToken: false` closes an attack vector if the container is compromised.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server",
    tags: ["Token Security", "Token Automount", "High Load Scale"]
  },
  {
    id: "k8s-ckad-443",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ServiceAccount AutomountServiceAccountToken Setting: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Token Security to prevent an application pod that does not interact with the Kubernetes API server from mounting API credentials in its filesystem.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Disabling automated token mounting with automountServiceAccountToken: false is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition." },
      { id: 'B', text: "Delete the default namespace ServiceAccount." },
      { id: 'C', text: "Grant read-only access to all API endpoints." },
      { id: 'D', text: "Mount an empty directory at `/var/run/secrets/kubernetes.io/serviceaccount`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition. By default, Kubernetes automatically mounts a ServiceAccount API token into every container at `/var/run/secrets/kubernetes.io/serviceaccount`. If an application does not need to communicate with the API server, setting `automountServiceAccountToken: false` closes an attack vector if the container is compromised.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server",
    tags: ["Token Security", "Token Automount", "Security Compliance"]
  },
  {
    id: "k8s-ckad-444",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ServiceAccount AutomountServiceAccountToken Setting: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Token Security to prevent an application pod that does not interact with the Kubernetes API server from mounting API credentials in its filesystem.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Disabling automated token mounting with automountServiceAccountToken: false is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition." },
      { id: 'B', text: "Delete the default namespace ServiceAccount." },
      { id: 'C', text: "Grant read-only access to all API endpoints." },
      { id: 'D', text: "Mount an empty directory at `/var/run/secrets/kubernetes.io/serviceaccount`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition. By default, Kubernetes automatically mounts a ServiceAccount API token into every container at `/var/run/secrets/kubernetes.io/serviceaccount`. If an application does not need to communicate with the API server, setting `automountServiceAccountToken: false` closes an attack vector if the container is compromised.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server",
    tags: ["Token Security", "Token Automount", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-445",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "ServiceAccount AutomountServiceAccountToken Setting: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Token Security to prevent an application pod that does not interact with the Kubernetes API server from mounting API credentials in its filesystem.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Disabling automated token mounting with automountServiceAccountToken: false is under consideration.",
    options: [
      { id: 'A', text: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition." },
      { id: 'B', text: "Delete the default namespace ServiceAccount." },
      { id: 'C', text: "Grant read-only access to all API endpoints." },
      { id: 'D', text: "Mount an empty directory at `/var/run/secrets/kubernetes.io/serviceaccount`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `automountServiceAccountToken: false` on the pod specification or ServiceAccount definition. By default, Kubernetes automatically mounts a ServiceAccount API token into every container at `/var/run/secrets/kubernetes.io/serviceaccount`. If an application does not need to communicate with the API server, setting `automountServiceAccountToken: false` closes an attack vector if the container is compromised.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#use-the-default-service-account-to-access-the-api-server",
    tags: ["Token Security", "Token Automount", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-446",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Custom ServiceAccounts for Workload Isolation: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates ServiceAccounts to run a custom CI/CD runner pod that only requires permissions to create pods in its own namespace without sharing the default ServiceAccount.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Creating dedicated ServiceAccounts with minimal RBAC bindings for workloads is under consideration.",
    options: [
      { id: 'A', text: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec." },
      { id: 'B', text: "Run the pod using the `default` ServiceAccount and grant cluster-admin to default." },
      { id: 'C', text: "Hardcode the cluster administrator kubeconfig inside the runner container image." },
      { id: 'D', text: "Disable RBAC authorization mode on the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec. Every namespace has a `default` ServiceAccount. Best practice dictates creating dedicated ServiceAccounts for workloads needing API access, binding them to targeted Roles with minimal verbs, and explicitly assigning them via `serviceAccountName` in the pod spec to adhere to least privilege.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "Dr Failover"]
  },
  {
    id: "k8s-ckad-447",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Custom ServiceAccounts for Workload Isolation: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates ServiceAccounts to run a custom CI/CD runner pod that only requires permissions to create pods in its own namespace without sharing the default ServiceAccount.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Creating dedicated ServiceAccounts with minimal RBAC bindings for workloads is under consideration.",
    options: [
      { id: 'A', text: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec." },
      { id: 'B', text: "Run the pod using the `default` ServiceAccount and grant cluster-admin to default." },
      { id: 'C', text: "Hardcode the cluster administrator kubeconfig inside the runner container image." },
      { id: 'D', text: "Disable RBAC authorization mode on the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec. Every namespace has a `default` ServiceAccount. Best practice dictates creating dedicated ServiceAccounts for workloads needing API access, binding them to targeted Roles with minimal verbs, and explicitly assigning them via `serviceAccountName` in the pod spec to adhere to least privilege.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "High Load Scale"]
  },
  {
    id: "k8s-ckad-448",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Custom ServiceAccounts for Workload Isolation: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates ServiceAccounts to run a custom CI/CD runner pod that only requires permissions to create pods in its own namespace without sharing the default ServiceAccount.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Creating dedicated ServiceAccounts with minimal RBAC bindings for workloads is under consideration.",
    options: [
      { id: 'A', text: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec." },
      { id: 'B', text: "Run the pod using the `default` ServiceAccount and grant cluster-admin to default." },
      { id: 'C', text: "Hardcode the cluster administrator kubeconfig inside the runner container image." },
      { id: 'D', text: "Disable RBAC authorization mode on the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec. Every namespace has a `default` ServiceAccount. Best practice dictates creating dedicated ServiceAccounts for workloads needing API access, binding them to targeted Roles with minimal verbs, and explicitly assigning them via `serviceAccountName` in the pod spec to adhere to least privilege.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "Security Compliance"]
  },
  {
    id: "k8s-ckad-449",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Custom ServiceAccounts for Workload Isolation: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates ServiceAccounts to run a custom CI/CD runner pod that only requires permissions to create pods in its own namespace without sharing the default ServiceAccount.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Creating dedicated ServiceAccounts with minimal RBAC bindings for workloads is under consideration.",
    options: [
      { id: 'A', text: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec." },
      { id: 'B', text: "Run the pod using the `default` ServiceAccount and grant cluster-admin to default." },
      { id: 'C', text: "Hardcode the cluster administrator kubeconfig inside the runner container image." },
      { id: 'D', text: "Disable RBAC authorization mode on the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec. Every namespace has a `default` ServiceAccount. Best practice dictates creating dedicated ServiceAccounts for workloads needing API access, binding them to targeted Roles with minimal verbs, and explicitly assigning them via `serviceAccountName` in the pod spec to adhere to least privilege.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-450",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d4",
    domainName: "Application Environment, Configuration and Security",
    title: "Custom ServiceAccounts for Workload Isolation: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates ServiceAccounts to run a custom CI/CD runner pod that only requires permissions to create pods in its own namespace without sharing the default ServiceAccount.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Creating dedicated ServiceAccounts with minimal RBAC bindings for workloads is under consideration.",
    options: [
      { id: 'A', text: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec." },
      { id: 'B', text: "Run the pod using the `default` ServiceAccount and grant cluster-admin to default." },
      { id: 'C', text: "Hardcode the cluster administrator kubeconfig inside the runner container image." },
      { id: 'D', text: "Disable RBAC authorization mode on the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a dedicated `ServiceAccount`, bind it to a least-privilege `Role` via a `RoleBinding`, and set `serviceAccountName` in the pod spec. Every namespace has a `default` ServiceAccount. Best practice dictates creating dedicated ServiceAccounts for workloads needing API access, binding them to targeted Roles with minimal verbs, and explicitly assigning them via `serviceAccountName` in the pod spec to adhere to least privilege.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "Custom ServiceAccounts", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_18;
