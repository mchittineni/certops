export const K8S_CKA_QUESTIONS_15 = [
  {
    id: "k8s-cka-326",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Control Plane Database to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Diagnosing etcdctl endpoint health, alarms, and leader election failures is under consideration.",
    options: [
      { id: 'A', text: "Delete all namespaces in the cluster using forceful termination." },
      { id: 'B', text: "Assume the API server will self-heal without checking etcd quorum." },
      { id: 'C', text: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE)." },
      { id: 'D', text: "Reformat the worker node disks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database", "etcd Health", "Dr Failover"]
  },
  {
    id: "k8s-cka-327",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Control Plane Database to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Diagnosing etcdctl endpoint health, alarms, and leader election failures is under consideration.",
    options: [
      { id: 'A', text: "Delete all namespaces in the cluster using forceful termination." },
      { id: 'B', text: "Assume the API server will self-heal without checking etcd quorum." },
      { id: 'C', text: "Reformat the worker node disks." },
      { id: 'D', text: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database", "etcd Health", "High Load Scale"]
  },
  {
    id: "k8s-cka-328",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Control Plane Database to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Diagnosing etcdctl endpoint health, alarms, and leader election failures is under consideration.",
    options: [
      { id: 'A', text: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE)." },
      { id: 'B', text: "Assume the API server will self-heal without checking etcd quorum." },
      { id: 'C', text: "Reformat the worker node disks." },
      { id: 'D', text: "Delete all namespaces in the cluster using forceful termination." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database", "etcd Health", "Security Compliance"]
  },
  {
    id: "k8s-cka-329",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Control Plane Database to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Diagnosing etcdctl endpoint health, alarms, and leader election failures is under consideration.",
    options: [
      { id: 'A', text: "Assume the API server will self-heal without checking etcd quorum." },
      { id: 'B', text: "Reformat the worker node disks." },
      { id: 'C', text: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE)." },
      { id: 'D', text: "Delete all namespaces in the cluster using forceful termination." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database", "etcd Health", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-330",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Control Plane Database to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Diagnosing etcdctl endpoint health, alarms, and leader election failures is under consideration.",
    options: [
      { id: 'A', text: "Delete all namespaces in the cluster using forceful termination." },
      { id: 'B', text: "Assume the API server will self-heal without checking etcd quorum." },
      { id: 'C', text: "Reformat the worker node disks." },
      { id: 'D', text: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database", "etcd Health", "Resilience Failure"]
  },
  {
    id: "k8s-cka-331",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates PKI Certificates to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Diagnosing and renewing expired certificates with kubeadm certs check-expiration is under consideration.",
    options: [
      { id: 'A', text: "Assume the underlying physical network hardware is unplugged." },
      { id: 'B', text: "Reinstall the entire cluster from scratch, losing all application data." },
      { id: 'C', text: "Disable TLS verification across all kubelet daemons permanently." },
      { id: 'D', text: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates", "Certificate Expiration", "Dr Failover"]
  },
  {
    id: "k8s-cka-332",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates PKI Certificates to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Diagnosing and renewing expired certificates with kubeadm certs check-expiration is under consideration.",
    options: [
      { id: 'A', text: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`." },
      { id: 'B', text: "Reinstall the entire cluster from scratch, losing all application data." },
      { id: 'C', text: "Assume the underlying physical network hardware is unplugged." },
      { id: 'D', text: "Disable TLS verification across all kubelet daemons permanently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates", "Certificate Expiration", "High Load Scale"]
  },
  {
    id: "k8s-cka-333",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates PKI Certificates to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Diagnosing and renewing expired certificates with kubeadm certs check-expiration is under consideration.",
    options: [
      { id: 'A', text: "Reinstall the entire cluster from scratch, losing all application data." },
      { id: 'B', text: "Assume the underlying physical network hardware is unplugged." },
      { id: 'C', text: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`." },
      { id: 'D', text: "Disable TLS verification across all kubelet daemons permanently." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates", "Certificate Expiration", "Security Compliance"]
  },
  {
    id: "k8s-cka-334",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates PKI Certificates to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Diagnosing and renewing expired certificates with kubeadm certs check-expiration is under consideration.",
    options: [
      { id: 'A', text: "Disable TLS verification across all kubelet daemons permanently." },
      { id: 'B', text: "Assume the underlying physical network hardware is unplugged." },
      { id: 'C', text: "Reinstall the entire cluster from scratch, losing all application data." },
      { id: 'D', text: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates", "Certificate Expiration", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-335",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates PKI Certificates to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Diagnosing and renewing expired certificates with kubeadm certs check-expiration is under consideration.",
    options: [
      { id: 'A', text: "Reinstall the entire cluster from scratch, losing all application data." },
      { id: 'B', text: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`." },
      { id: 'C', text: "Assume the underlying physical network hardware is unplugged." },
      { id: 'D', text: "Disable TLS verification across all kubelet daemons permanently." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates", "Certificate Expiration", "Resilience Failure"]
  },
  {
    id: "k8s-cka-336",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Admission Webhooks to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Diagnosing validating and mutating webhook timeouts blocking pod creation is under consideration.",
    options: [
      { id: 'A', text: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity." },
      { id: 'B', text: "Assume the kubectl client binary is corrupt and reinstall it." },
      { id: 'C', text: "Delete the cluster role bindings for cluster-admin." },
      { id: 'D', text: "Restart all worker nodes simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks", "Admission Webhooks", "Dr Failover"]
  },
  {
    id: "k8s-cka-337",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Admission Webhooks to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Diagnosing validating and mutating webhook timeouts blocking pod creation is under consideration.",
    options: [
      { id: 'A', text: "Restart all worker nodes simultaneously." },
      { id: 'B', text: "Assume the kubectl client binary is corrupt and reinstall it." },
      { id: 'C', text: "Delete the cluster role bindings for cluster-admin." },
      { id: 'D', text: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks", "Admission Webhooks", "High Load Scale"]
  },
  {
    id: "k8s-cka-338",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Admission Webhooks to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Diagnosing validating and mutating webhook timeouts blocking pod creation is under consideration.",
    options: [
      { id: 'A', text: "Assume the kubectl client binary is corrupt and reinstall it." },
      { id: 'B', text: "Restart all worker nodes simultaneously." },
      { id: 'C', text: "Delete the cluster role bindings for cluster-admin." },
      { id: 'D', text: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks", "Admission Webhooks", "Security Compliance"]
  },
  {
    id: "k8s-cka-339",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Admission Webhooks to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Diagnosing validating and mutating webhook timeouts blocking pod creation is under consideration.",
    options: [
      { id: 'A', text: "Restart all worker nodes simultaneously." },
      { id: 'B', text: "Delete the cluster role bindings for cluster-admin." },
      { id: 'C', text: "Assume the kubectl client binary is corrupt and reinstall it." },
      { id: 'D', text: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks", "Admission Webhooks", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-340",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Admission Webhooks to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Diagnosing validating and mutating webhook timeouts blocking pod creation is under consideration.",
    options: [
      { id: 'A', text: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity." },
      { id: 'B', text: "Assume the kubectl client binary is corrupt and reinstall it." },
      { id: 'C', text: "Delete the cluster role bindings for cluster-admin." },
      { id: 'D', text: "Restart all worker nodes simultaneously." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks", "Admission Webhooks", "Resilience Failure"]
  },
  {
    id: "k8s-cka-341",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Live Pod Debugging to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Using kubectl debug to attach ephemeral containers to distroless pods is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace." },
      { id: 'B', text: "Delete the pod and hope the issue does not occur again in the replacement replica." },
      { id: 'C', text: "SSH directly into the container filesystem from outside the node." },
      { id: 'D', text: "Rebuild the container image with root access and full desktop utilities and redeploy to production." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "Dr Failover"]
  },
  {
    id: "k8s-cka-342",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Live Pod Debugging to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Using kubectl debug to attach ephemeral containers to distroless pods is under consideration.",
    options: [
      { id: 'A', text: "SSH directly into the container filesystem from outside the node." },
      { id: 'B', text: "Delete the pod and hope the issue does not occur again in the replacement replica." },
      { id: 'C', text: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace." },
      { id: 'D', text: "Rebuild the container image with root access and full desktop utilities and redeploy to production." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "High Load Scale"]
  },
  {
    id: "k8s-cka-343",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Live Pod Debugging to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Using kubectl debug to attach ephemeral containers to distroless pods is under consideration.",
    options: [
      { id: 'A', text: "Rebuild the container image with root access and full desktop utilities and redeploy to production." },
      { id: 'B', text: "SSH directly into the container filesystem from outside the node." },
      { id: 'C', text: "Delete the pod and hope the issue does not occur again in the replacement replica." },
      { id: 'D', text: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "Security Compliance"]
  },
  {
    id: "k8s-cka-344",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Live Pod Debugging to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Using kubectl debug to attach ephemeral containers to distroless pods is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace." },
      { id: 'B', text: "Rebuild the container image with root access and full desktop utilities and redeploy to production." },
      { id: 'C', text: "Delete the pod and hope the issue does not occur again in the replacement replica." },
      { id: 'D', text: "SSH directly into the container filesystem from outside the node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-345",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Live Pod Debugging to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Using kubectl debug to attach ephemeral containers to distroless pods is under consideration.",
    options: [
      { id: 'A', text: "Rebuild the container image with root access and full desktop utilities and redeploy to production." },
      { id: 'B', text: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace." },
      { id: 'C', text: "SSH directly into the container filesystem from outside the node." },
      { id: 'D', text: "Delete the pod and hope the issue does not occur again in the replacement replica." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging", "Ephemeral Containers", "Resilience Failure"]
  },
  {
    id: "k8s-cka-346",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Scheduling Constraints to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Diagnosing unscheduled pods blocked by un-tolerated node taints is under consideration.",
    options: [
      { id: 'A', text: "Remove the GPU hardware from the worker node." },
      { id: 'B', text: "Set pod CPU limit to zero to bypass taint evaluation." },
      { id: 'C', text: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect." },
      { id: 'D', text: "Delete the kubelet configuration file on the master node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "Dr Failover"]
  },
  {
    id: "k8s-cka-347",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Scheduling Constraints to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Diagnosing unscheduled pods blocked by un-tolerated node taints is under consideration.",
    options: [
      { id: 'A', text: "Set pod CPU limit to zero to bypass taint evaluation." },
      { id: 'B', text: "Remove the GPU hardware from the worker node." },
      { id: 'C', text: "Delete the kubelet configuration file on the master node." },
      { id: 'D', text: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "High Load Scale"]
  },
  {
    id: "k8s-cka-348",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Scheduling Constraints to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Diagnosing unscheduled pods blocked by un-tolerated node taints is under consideration.",
    options: [
      { id: 'A', text: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect." },
      { id: 'B', text: "Set pod CPU limit to zero to bypass taint evaluation." },
      { id: 'C', text: "Remove the GPU hardware from the worker node." },
      { id: 'D', text: "Delete the kubelet configuration file on the master node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "Security Compliance"]
  },
  {
    id: "k8s-cka-349",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Scheduling Constraints to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Diagnosing unscheduled pods blocked by un-tolerated node taints is under consideration.",
    options: [
      { id: 'A', text: "Remove the GPU hardware from the worker node." },
      { id: 'B', text: "Delete the kubelet configuration file on the master node." },
      { id: 'C', text: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect." },
      { id: 'D', text: "Set pod CPU limit to zero to bypass taint evaluation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-350",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Scheduling Constraints to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Diagnosing unscheduled pods blocked by un-tolerated node taints is under consideration.",
    options: [
      { id: 'A', text: "Set pod CPU limit to zero to bypass taint evaluation." },
      { id: 'B', text: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect." },
      { id: 'C', text: "Remove the GPU hardware from the worker node." },
      { id: 'D', text: "Delete the kubelet configuration file on the master node." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints", "Taints and Tolerations", "Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_15;
