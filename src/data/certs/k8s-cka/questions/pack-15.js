export const K8S_CKA_QUESTIONS_15 = [
  {
    id: "k8s-cka-326",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Run `etcdctl endpoint health` and `endpoint status` to check quorum, leader and alarms." },
      { id: 'B', text: "Run `etcdctl member list` and remove the member that is failing its health check." },
      { id: 'C', text: "Run `etcdctl defrag` on each member to reclaim the space the keyspace has grown into." },
      { id: 'D', text: "Run `etcdctl snapshot save` and restore it onto a fresh member to clear the alarm." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database","etcd Health","Dr Failover"]
  },
  {
    id: "k8s-cka-327",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Run `etcdctl member list` and remove the member that is failing its health check." },
      { id: 'B', text: "Run `etcdctl endpoint health` and `endpoint status` to check quorum, leader and alarms." },
      { id: 'C', text: "Run `etcdctl snapshot save` and restore it onto a fresh member to clear the alarm." },
      { id: 'D', text: "Run `etcdctl defrag` on each member to reclaim the space the keyspace has grown into." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database","etcd Health","High Load Scale"]
  },
  {
    id: "k8s-cka-328",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `etcdctl endpoint health` and `endpoint status` to check quorum, leader and alarms." },
      { id: 'B', text: "Run `etcdctl defrag` on each member to reclaim the space the keyspace has grown into." },
      { id: 'C', text: "Run `etcdctl snapshot save` and restore it onto a fresh member to clear the alarm." },
      { id: 'D', text: "Run `etcdctl member list` and remove the member that is failing its health check." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database","etcd Health","Security Compliance"]
  },
  {
    id: "k8s-cka-329",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Run `etcdctl defrag` on each member to reclaim the space the keyspace has grown into." },
      { id: 'B', text: "Run `etcdctl member list` and remove the member that is failing its health check." },
      { id: 'C', text: "Run `etcdctl snapshot save` and restore it onto a fresh member to clear the alarm." },
      { id: 'D', text: "Run `etcdctl endpoint health` and `endpoint status` to check quorum, leader and alarms." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database","etcd Health","Hybrid Migration"]
  },
  {
    id: "k8s-cka-330",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "etcd Cluster Member Health and Quorum Loss: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to diagnose an etcd control plane issue where the API server becomes unresponsive and returns 500 Internal Server Errors.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Run `etcdctl member list` and remove the member that is failing its health check." },
      { id: 'B', text: "Run `etcdctl endpoint health` and `endpoint status` to check quorum, leader and alarms." },
      { id: 'C', text: "Run `etcdctl snapshot save` and restore it onto a fresh member to clear the alarm." },
      { id: 'D', text: "Run `etcdctl defrag` on each member to reclaim the space the keyspace has grown into." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `etcdctl endpoint health` and `etcdctl endpoint status` to check quorum, leader election, and active alarms (e.g., NOSPACE). The API server relies entirely on etcd for state storage. If etcd loses quorum (majority of voting members unavailable) or triggers alarms like `NOSPACE` due to reaching the 2GB or 8GB quota limit, the API server rejects read/write requests. `etcdctl` verifies member health and alarms.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#troubleshooting-etcd",
    tags: ["Control Plane Database","etcd Health","Resilience Failure"]
  },
  {
    id: "k8s-cka-331",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Run `kubeadm certs check-expiration` and renew with `kubeadm certs renew all`." },
      { id: 'B', text: "Run `kubeadm init phase certs all` to reissue the certificates in place." },
      { id: 'C', text: "Run `openssl x509 -noout -dates` on each certificate and extend its validity." },
      { id: 'D', text: "Run `kubeadm certs renew apiserver` alone, since the others are not client-facing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates","Certificate Expiration","Dr Failover"]
  },
  {
    id: "k8s-cka-332",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Run `kubeadm certs check-expiration` and renew with `kubeadm certs renew all`." },
      { id: 'B', text: "Run `kubeadm init phase certs all` to reissue the certificates in place." },
      { id: 'C', text: "Run `openssl x509 -noout -dates` on each certificate and extend its validity." },
      { id: 'D', text: "Run `kubeadm certs renew apiserver` alone, since the others are not client-facing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates","Certificate Expiration","High Load Scale"]
  },
  {
    id: "k8s-cka-333",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `kubeadm certs renew apiserver` alone, since the others are not client-facing." },
      { id: 'B', text: "Run `openssl x509 -noout -dates` on each certificate and extend its validity." },
      { id: 'C', text: "Run `kubeadm init phase certs all` to reissue the certificates in place." },
      { id: 'D', text: "Run `kubeadm certs check-expiration` and renew with `kubeadm certs renew all`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates","Certificate Expiration","Security Compliance"]
  },
  {
    id: "k8s-cka-334",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Run `kubeadm init phase certs all` to reissue the certificates in place." },
      { id: 'B', text: "Run `kubeadm certs check-expiration` and renew with `kubeadm certs renew all`." },
      { id: 'C', text: "Run `kubeadm certs renew apiserver` alone, since the others are not client-facing." },
      { id: 'D', text: "Run `openssl x509 -noout -dates` on each certificate and extend its validity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates","Certificate Expiration","Hybrid Migration"]
  },
  {
    id: "k8s-cka-335",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Control Plane Component Certificate Expiration: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to restore an existing kubeadm-managed Kubernetes control plane that stopped responding after one year of continuous uptime.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Run `kubeadm certs check-expiration` and renew with `kubeadm certs renew all`." },
      { id: 'B', text: "Run `kubeadm init phase certs all` to reissue the certificates in place." },
      { id: 'C', text: "Run `openssl x509 -noout -dates` on each certificate and extend its validity." },
      { id: 'D', text: "Run `kubeadm certs renew apiserver` alone, since the others are not client-facing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubeadm certs check-expiration` to identify expired control plane certificates, and renew them using `kubeadm certs renew all`. Kubeadm generates internal control plane certificates that expire after one year by default. When certificates expire, control plane components (apiserver, controller-manager, scheduler) cannot authenticate with each other. Running `kubeadm certs renew all` restores cluster functionality.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["PKI Certificates","Certificate Expiration","Resilience Failure"]
  },
  {
    id: "k8s-cka-336",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Inspect the webhook configurations, the webhook pods' health, and connectivity from the API server." },
      { id: 'B', text: "Inspect the API server's own RBAC bindings and confirm the caller is permitted to create the object." },
      { id: 'C', text: "Inspect the admission plugin list on the API server and remove the one rejecting the request." },
      { id: 'D', text: "Inspect the namespace's ResourceQuota and confirm the object does not exceed a hard limit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks","Admission Webhooks","Dr Failover"]
  },
  {
    id: "k8s-cka-337",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Inspect the namespace's ResourceQuota and confirm the object does not exceed a hard limit." },
      { id: 'B', text: "Inspect the webhook configurations, the webhook pods' health, and connectivity from the API server." },
      { id: 'C', text: "Inspect the admission plugin list on the API server and remove the one rejecting the request." },
      { id: 'D', text: "Inspect the API server's own RBAC bindings and confirm the caller is permitted to create the object." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks","Admission Webhooks","High Load Scale"]
  },
  {
    id: "k8s-cka-338",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Inspect the webhook configurations, the webhook pods' health, and connectivity from the API server." },
      { id: 'B', text: "Inspect the namespace's ResourceQuota and confirm the object does not exceed a hard limit." },
      { id: 'C', text: "Inspect the API server's own RBAC bindings and confirm the caller is permitted to create the object." },
      { id: 'D', text: "Inspect the admission plugin list on the API server and remove the one rejecting the request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks","Admission Webhooks","Security Compliance"]
  },
  {
    id: "k8s-cka-339",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Inspect the admission plugin list on the API server and remove the one rejecting the request." },
      { id: 'B', text: "Inspect the namespace's ResourceQuota and confirm the object does not exceed a hard limit." },
      { id: 'C', text: "Inspect the webhook configurations, the webhook pods' health, and connectivity from the API server." },
      { id: 'D', text: "Inspect the API server's own RBAC bindings and confirm the caller is permitted to create the object." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks","Admission Webhooks","Hybrid Migration"]
  },
  {
    id: "k8s-cka-340",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Admission Webhook Failures and Timeouts: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to troubleshoot why all `kubectl apply` pod deployments fail with `Internal error occurred: failed calling webhook`.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Inspect the webhook configurations, the webhook pods' health, and connectivity from the API server." },
      { id: 'B', text: "Inspect the API server's own RBAC bindings and confirm the caller is permitted to create the object." },
      { id: 'C', text: "Inspect the admission plugin list on the API server and remove the one rejecting the request." },
      { id: 'D', text: "Inspect the namespace's ResourceQuota and confirm the object does not exceed a hard limit." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `ValidatingWebhookConfiguration` and `MutatingWebhookConfiguration` resources, check webhook server pod health, and verify network connectivity. Admission webhooks intercept API requests before objects are persisted. If a mutating or validating webhook is configured with `failurePolicy: Fail` and its backend service is unreachable or timing out, the API server rejects all affected resource creation requests.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",
    tags: ["Admission Webhooks","Admission Webhooks","Resilience Failure"]
  },
  {
    id: "k8s-cka-341",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox --target=&lt;container&gt;` to attach an ephemeral container." },
      { id: 'B', text: "Run `kubectl exec -it &lt;pod&gt; -- sh`, which needs a shell the distroless image does not ship." },
      { id: 'C', text: "Run `kubectl cp &lt;pod&gt;:/proc /tmp/proc` and read the process state from the copy." },
      { id: 'D', text: "Run `kubectl debug node/&lt;node&gt; -it --image=busybox` and inspect the container from the host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging","Ephemeral Containers","Dr Failover"]
  },
  {
    id: "k8s-cka-342",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox --target=&lt;container&gt;` to attach an ephemeral container." },
      { id: 'B', text: "Run `kubectl exec -it &lt;pod&gt; -- sh`, which needs a shell the distroless image does not ship." },
      { id: 'C', text: "Run `kubectl cp &lt;pod&gt;:/proc /tmp/proc` and read the process state from the copy." },
      { id: 'D', text: "Run `kubectl debug node/&lt;node&gt; -it --image=busybox` and inspect the container from the host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging","Ephemeral Containers","High Load Scale"]
  },
  {
    id: "k8s-cka-343",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run `kubectl cp &lt;pod&gt;:/proc /tmp/proc` and read the process state from the copy." },
      { id: 'B', text: "Run `kubectl debug node/&lt;node&gt; -it --image=busybox` and inspect the container from the host." },
      { id: 'C', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox --target=&lt;container&gt;` to attach an ephemeral container." },
      { id: 'D', text: "Run `kubectl exec -it &lt;pod&gt; -- sh`, which needs a shell the distroless image does not ship." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging","Ephemeral Containers","Security Compliance"]
  },
  {
    id: "k8s-cka-344",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox --target=&lt;container&gt;` to attach an ephemeral container." },
      { id: 'B', text: "Run `kubectl exec -it &lt;pod&gt; -- sh`, which needs a shell the distroless image does not ship." },
      { id: 'C', text: "Run `kubectl cp &lt;pod&gt;:/proc /tmp/proc` and read the process state from the copy." },
      { id: 'D', text: "Run `kubectl debug node/&lt;node&gt; -it --image=busybox` and inspect the container from the host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging","Ephemeral Containers","Hybrid Migration"]
  },
  {
    id: "k8s-cka-345",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Ephemeral Debug Containers for Live Pod Inspection: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to troubleshoot an active, distroless production container that lacks a shell, curl, or debugging utilities without restarting the pod.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Run `kubectl debug -it &lt;pod&gt; --image=busybox --target=&lt;container&gt;` to attach an ephemeral container." },
      { id: 'B', text: "Run `kubectl exec -it &lt;pod&gt; -- sh`, which needs a shell the distroless image does not ship." },
      { id: 'C', text: "Run `kubectl cp &lt;pod&gt;:/proc /tmp/proc` and read the process state from the copy." },
      { id: 'D', text: "Run `kubectl debug node/&lt;node&gt; -it --image=busybox` and inspect the container from the host." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run `kubectl debug -it &lt;pod-name&gt; --image=busybox --target=&lt;container-name&gt;` to attach an ephemeral container sharing the process namespace. `kubectl debug` allows operators to inject an ephemeral container with diagnostic tools (e.g., busybox, curl, gdb) into an existing running pod. Using `--target` enables process namespace sharing, allowing inspection of the target container processes even in distroless environments.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",
    tags: ["Live Pod Debugging","Ephemeral Containers","Resilience Failure"]
  },
  {
    id: "k8s-cka-346",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Read the node's labels with `kubectl get node --show-labels` and match them in the pod's `nodeSelector`." },
      { id: 'B', text: "Read the scheduler's own log and raise the pod's `priorityClassName` so it preempts a running workload." },
      { id: 'C', text: "Read the node's allocatable resources and lower the pod's GPU request until it fits on the node." },
      { id: 'D', text: "Read the node's taints with `kubectl describe node` and check the pod carries a matching toleration." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints","Taints and Tolerations","Dr Failover"]
  },
  {
    id: "k8s-cka-347",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Read the node's taints with `kubectl describe node` and check the pod carries a matching toleration." },
      { id: 'B', text: "Read the node's allocatable resources and lower the pod's GPU request until it fits on the node." },
      { id: 'C', text: "Read the scheduler's own log and raise the pod's `priorityClassName` so it preempts a running workload." },
      { id: 'D', text: "Read the node's labels with `kubectl get node --show-labels` and match them in the pod's `nodeSelector`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints","Taints and Tolerations","High Load Scale"]
  },
  {
    id: "k8s-cka-348",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Read the node's taints with `kubectl describe node` and check the pod carries a matching toleration." },
      { id: 'B', text: "Read the scheduler's own log and raise the pod's `priorityClassName` so it preempts a running workload." },
      { id: 'C', text: "Read the node's labels with `kubectl get node --show-labels` and match them in the pod's `nodeSelector`." },
      { id: 'D', text: "Read the node's allocatable resources and lower the pod's GPU request until it fits on the node." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints","Taints and Tolerations","Security Compliance"]
  },
  {
    id: "k8s-cka-349",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Read the scheduler's own log and raise the pod's `priorityClassName` so it preempts a running workload." },
      { id: 'B', text: "Read the node's taints with `kubectl describe node` and check the pod carries a matching toleration." },
      { id: 'C', text: "Read the node's allocatable resources and lower the pod's GPU request until it fits on the node." },
      { id: 'D', text: "Read the node's labels with `kubectl get node --show-labels` and match them in the pod's `nodeSelector`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints","Taints and Tolerations","Hybrid Migration"]
  },
  {
    id: "k8s-cka-350",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d2",
    domainName: "Troubleshooting",
    title: "Investigating Node Taints and Pod Tolerations: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to determine why newly provisioned worker nodes with specialized GPU hardware remain empty while GPU workloads stay in Pending.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Read the scheduler's own log and raise the pod's `priorityClassName` so it preempts a running workload." },
      { id: 'B', text: "Read the node's labels with `kubectl get node --show-labels` and match them in the pod's `nodeSelector`." },
      { id: 'C', text: "Read the node's taints with `kubectl describe node` and check the pod carries a matching toleration." },
      { id: 'D', text: "Read the node's allocatable resources and lower the pod's GPU request until it fits on the node." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect node taints using `kubectl describe node` and verify that the workload pod spec includes corresponding `tolerations` matching the taint key, value, and effect. Nodes with special hardware often have taints (e.g., `sku=gpu:NoSchedule`) to prevent general workloads from being placed on them. Workloads intended to run on these nodes must explicitly define matching `tolerations` in their pod specification; otherwise, the scheduler ignores the nodes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Scheduling Constraints","Taints and Tolerations","Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_15;
