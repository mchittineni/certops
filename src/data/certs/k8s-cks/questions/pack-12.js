export const K8S_CKS_QUESTIONS_12 = [
  {
    id: "k8s-cks-276",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "RBAC Least Privilege and Role Auditing: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates RBAC Auditing to audit the cluster to detect users or ServiceAccounts that have been granted dangerous wildcard (`*`) permissions or unnecessary `cluster-admin` bindings.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Pruning excessive cluster-admin bindings and auditing wildcards with audit2rbac is under consideration.",
    options: [
      { id: 'A', text: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege." },
      { id: 'B', text: "Grant cluster-admin to all developers to eliminate permission request tickets." },
      { id: 'C', text: "Delete all RoleBindings and rely on anonymous access." },
      { id: 'D', text: "Ignore RBAC permissions because containers run in isolated cgroups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege. Granting wildcard (`*`) verbs or resources, or binding users to `cluster-admin`, creates extreme security risks. Least privilege dictates auditing bindings regularly, scoping permissions to specific namespaces using Roles, and granting only the minimal required verbs (`get`, `list`, `watch`).",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC Auditing", "RBAC Auditing", "Dr Failover"]
  },
  {
    id: "k8s-cks-277",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "RBAC Least Privilege and Role Auditing: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates RBAC Auditing to audit the cluster to detect users or ServiceAccounts that have been granted dangerous wildcard (`*`) permissions or unnecessary `cluster-admin` bindings.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Pruning excessive cluster-admin bindings and auditing wildcards with audit2rbac is under consideration.",
    options: [
      { id: 'A', text: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege." },
      { id: 'B', text: "Grant cluster-admin to all developers to eliminate permission request tickets." },
      { id: 'C', text: "Delete all RoleBindings and rely on anonymous access." },
      { id: 'D', text: "Ignore RBAC permissions because containers run in isolated cgroups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege. Granting wildcard (`*`) verbs or resources, or binding users to `cluster-admin`, creates extreme security risks. Least privilege dictates auditing bindings regularly, scoping permissions to specific namespaces using Roles, and granting only the minimal required verbs (`get`, `list`, `watch`).",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC Auditing", "RBAC Auditing", "High Load Scale"]
  },
  {
    id: "k8s-cks-278",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "RBAC Least Privilege and Role Auditing: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates RBAC Auditing to audit the cluster to detect users or ServiceAccounts that have been granted dangerous wildcard (`*`) permissions or unnecessary `cluster-admin` bindings.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Pruning excessive cluster-admin bindings and auditing wildcards with audit2rbac is under consideration.",
    options: [
      { id: 'A', text: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege." },
      { id: 'B', text: "Grant cluster-admin to all developers to eliminate permission request tickets." },
      { id: 'C', text: "Delete all RoleBindings and rely on anonymous access." },
      { id: 'D', text: "Ignore RBAC permissions because containers run in isolated cgroups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege. Granting wildcard (`*`) verbs or resources, or binding users to `cluster-admin`, creates extreme security risks. Least privilege dictates auditing bindings regularly, scoping permissions to specific namespaces using Roles, and granting only the minimal required verbs (`get`, `list`, `watch`).",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC Auditing", "RBAC Auditing", "Security Compliance"]
  },
  {
    id: "k8s-cks-279",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "RBAC Least Privilege and Role Auditing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates RBAC Auditing to audit the cluster to detect users or ServiceAccounts that have been granted dangerous wildcard (`*`) permissions or unnecessary `cluster-admin` bindings.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Pruning excessive cluster-admin bindings and auditing wildcards with audit2rbac is under consideration.",
    options: [
      { id: 'A', text: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege." },
      { id: 'B', text: "Grant cluster-admin to all developers to eliminate permission request tickets." },
      { id: 'C', text: "Delete all RoleBindings and rely on anonymous access." },
      { id: 'D', text: "Ignore RBAC permissions because containers run in isolated cgroups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege. Granting wildcard (`*`) verbs or resources, or binding users to `cluster-admin`, creates extreme security risks. Least privilege dictates auditing bindings regularly, scoping permissions to specific namespaces using Roles, and granting only the minimal required verbs (`get`, `list`, `watch`).",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC Auditing", "RBAC Auditing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-280",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "RBAC Least Privilege and Role Auditing: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates RBAC Auditing to audit the cluster to detect users or ServiceAccounts that have been granted dangerous wildcard (`*`) permissions or unnecessary `cluster-admin` bindings.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Pruning excessive cluster-admin bindings and auditing wildcards with audit2rbac is under consideration.",
    options: [
      { id: 'A', text: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege." },
      { id: 'B', text: "Grant cluster-admin to all developers to eliminate permission request tickets." },
      { id: 'C', text: "Delete all RoleBindings and rely on anonymous access." },
      { id: 'D', text: "Ignore RBAC permissions because containers run in isolated cgroups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `kubectl get clusterrolebindings` and tools like `audit2rbac` or `kubectl-who-can` to identify over-privileged subjects and restrict them to least privilege. Granting wildcard (`*`) verbs or resources, or binding users to `cluster-admin`, creates extreme security risks. Least privilege dictates auditing bindings regularly, scoping permissions to specific namespaces using Roles, and granting only the minimal required verbs (`get`, `list`, `watch`).",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/",
    tags: ["RBAC Auditing", "RBAC Auditing", "Resilience Failure"]
  },
  {
    id: "k8s-cks-281",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Control Plane File Permissions and Ownership: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates File Permissions to ensure that unauthorized host users on a master node cannot view or tamper with control plane manifests or certificate private keys.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Enforcing 600/644 permissions and root:root ownership on sensitive manifest and PKI files is under consideration.",
    options: [
      { id: 'A', text: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`." },
      { id: 'B', text: "Set all file permissions in /etc/kubernetes/ to 777 to avoid permission errors." },
      { id: 'C', text: "Change ownership of private keys to the nobody user." },
      { id: 'D', text: "Store private keys in a public world-readable web server directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`. The CIS Kubernetes Benchmark mandates that control plane manifest files (`/etc/kubernetes/manifests/*.yaml`) and PKI private keys (`/etc/kubernetes/pki/*.key`) have ownership `root:root` and restrictive permissions (`600` for keys, `644` for manifests and certs) to prevent unauthorized tampering.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["File Permissions", "File Permissions", "Dr Failover"]
  },
  {
    id: "k8s-cks-282",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Control Plane File Permissions and Ownership: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates File Permissions to ensure that unauthorized host users on a master node cannot view or tamper with control plane manifests or certificate private keys.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Enforcing 600/644 permissions and root:root ownership on sensitive manifest and PKI files is under consideration.",
    options: [
      { id: 'A', text: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`." },
      { id: 'B', text: "Set all file permissions in /etc/kubernetes/ to 777 to avoid permission errors." },
      { id: 'C', text: "Change ownership of private keys to the nobody user." },
      { id: 'D', text: "Store private keys in a public world-readable web server directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`. The CIS Kubernetes Benchmark mandates that control plane manifest files (`/etc/kubernetes/manifests/*.yaml`) and PKI private keys (`/etc/kubernetes/pki/*.key`) have ownership `root:root` and restrictive permissions (`600` for keys, `644` for manifests and certs) to prevent unauthorized tampering.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["File Permissions", "File Permissions", "High Load Scale"]
  },
  {
    id: "k8s-cks-283",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Control Plane File Permissions and Ownership: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates File Permissions to ensure that unauthorized host users on a master node cannot view or tamper with control plane manifests or certificate private keys.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Enforcing 600/644 permissions and root:root ownership on sensitive manifest and PKI files is under consideration.",
    options: [
      { id: 'A', text: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`." },
      { id: 'B', text: "Set all file permissions in /etc/kubernetes/ to 777 to avoid permission errors." },
      { id: 'C', text: "Change ownership of private keys to the nobody user." },
      { id: 'D', text: "Store private keys in a public world-readable web server directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`. The CIS Kubernetes Benchmark mandates that control plane manifest files (`/etc/kubernetes/manifests/*.yaml`) and PKI private keys (`/etc/kubernetes/pki/*.key`) have ownership `root:root` and restrictive permissions (`600` for keys, `644` for manifests and certs) to prevent unauthorized tampering.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["File Permissions", "File Permissions", "Security Compliance"]
  },
  {
    id: "k8s-cks-284",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Control Plane File Permissions and Ownership: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates File Permissions to ensure that unauthorized host users on a master node cannot view or tamper with control plane manifests or certificate private keys.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Enforcing 600/644 permissions and root:root ownership on sensitive manifest and PKI files is under consideration.",
    options: [
      { id: 'A', text: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`." },
      { id: 'B', text: "Set all file permissions in /etc/kubernetes/ to 777 to avoid permission errors." },
      { id: 'C', text: "Change ownership of private keys to the nobody user." },
      { id: 'D', text: "Store private keys in a public world-readable web server directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`. The CIS Kubernetes Benchmark mandates that control plane manifest files (`/etc/kubernetes/manifests/*.yaml`) and PKI private keys (`/etc/kubernetes/pki/*.key`) have ownership `root:root` and restrictive permissions (`600` for keys, `644` for manifests and certs) to prevent unauthorized tampering.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["File Permissions", "File Permissions", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-285",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Control Plane File Permissions and Ownership: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates File Permissions to ensure that unauthorized host users on a master node cannot view or tamper with control plane manifests or certificate private keys.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Enforcing 600/644 permissions and root:root ownership on sensitive manifest and PKI files is under consideration.",
    options: [
      { id: 'A', text: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`." },
      { id: 'B', text: "Set all file permissions in /etc/kubernetes/ to 777 to avoid permission errors." },
      { id: 'C', text: "Change ownership of private keys to the nobody user." },
      { id: 'D', text: "Store private keys in a public world-readable web server directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set ownership to `root:root` and file permissions to `600` on private keys and `644` on public certificates and manifests in `/etc/kubernetes/`. The CIS Kubernetes Benchmark mandates that control plane manifest files (`/etc/kubernetes/manifests/*.yaml`) and PKI private keys (`/etc/kubernetes/pki/*.key`) have ownership `root:root` and restrictive permissions (`600` for keys, `644` for manifests and certs) to prevent unauthorized tampering.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/",
    tags: ["File Permissions", "File Permissions", "Resilience Failure"]
  },
  {
    id: "k8s-cks-286",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Validating and Securing etcd Access: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates etcd Security to prevent unauthorized nodes or rogue pods from reading or injecting key-value data directly into the etcd datastore.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Enforcing mutual TLS authentication and dedicated CA for etcd communication is under consideration.",
    options: [
      { id: 'A', text: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes." },
      { id: 'B', text: "Allow unencrypted plaintext communication to etcd port 2379." },
      { id: 'C', text: "Expose etcd on a public NodePort service to allow remote administrative debugging." },
      { id: 'D', text: "Share the API server client certificate with all application workloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes. etcd holds the complete state and all secrets of the cluster. Compromising etcd is equivalent to full cluster takeover. Enforcing client certificate authentication (`--client-cert-auth=true`) with a separate dedicated etcd CA and firewalling port 2379 ensures only the API server can connect.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd Security", "etcd Security", "Dr Failover"]
  },
  {
    id: "k8s-cks-287",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Validating and Securing etcd Access: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates etcd Security to prevent unauthorized nodes or rogue pods from reading or injecting key-value data directly into the etcd datastore.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Enforcing mutual TLS authentication and dedicated CA for etcd communication is under consideration.",
    options: [
      { id: 'A', text: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes." },
      { id: 'B', text: "Allow unencrypted plaintext communication to etcd port 2379." },
      { id: 'C', text: "Expose etcd on a public NodePort service to allow remote administrative debugging." },
      { id: 'D', text: "Share the API server client certificate with all application workloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes. etcd holds the complete state and all secrets of the cluster. Compromising etcd is equivalent to full cluster takeover. Enforcing client certificate authentication (`--client-cert-auth=true`) with a separate dedicated etcd CA and firewalling port 2379 ensures only the API server can connect.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd Security", "etcd Security", "High Load Scale"]
  },
  {
    id: "k8s-cks-288",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Validating and Securing etcd Access: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates etcd Security to prevent unauthorized nodes or rogue pods from reading or injecting key-value data directly into the etcd datastore.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Enforcing mutual TLS authentication and dedicated CA for etcd communication is under consideration.",
    options: [
      { id: 'A', text: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes." },
      { id: 'B', text: "Allow unencrypted plaintext communication to etcd port 2379." },
      { id: 'C', text: "Expose etcd on a public NodePort service to allow remote administrative debugging." },
      { id: 'D', text: "Share the API server client certificate with all application workloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes. etcd holds the complete state and all secrets of the cluster. Compromising etcd is equivalent to full cluster takeover. Enforcing client certificate authentication (`--client-cert-auth=true`) with a separate dedicated etcd CA and firewalling port 2379 ensures only the API server can connect.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd Security", "etcd Security", "Security Compliance"]
  },
  {
    id: "k8s-cks-289",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Validating and Securing etcd Access: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates etcd Security to prevent unauthorized nodes or rogue pods from reading or injecting key-value data directly into the etcd datastore.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Enforcing mutual TLS authentication and dedicated CA for etcd communication is under consideration.",
    options: [
      { id: 'A', text: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes." },
      { id: 'B', text: "Allow unencrypted plaintext communication to etcd port 2379." },
      { id: 'C', text: "Expose etcd on a public NodePort service to allow remote administrative debugging." },
      { id: 'D', text: "Share the API server client certificate with all application workloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes. etcd holds the complete state and all secrets of the cluster. Compromising etcd is equivalent to full cluster takeover. Enforcing client certificate authentication (`--client-cert-auth=true`) with a separate dedicated etcd CA and firewalling port 2379 ensures only the API server can connect.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd Security", "etcd Security", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-290",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d1",
    domainName: "Cluster Setup and Hardening",
    title: "Validating and Securing etcd Access: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates etcd Security to prevent unauthorized nodes or rogue pods from reading or injecting key-value data directly into the etcd datastore.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Enforcing mutual TLS authentication and dedicated CA for etcd communication is under consideration.",
    options: [
      { id: 'A', text: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes." },
      { id: 'B', text: "Allow unencrypted plaintext communication to etcd port 2379." },
      { id: 'C', text: "Expose etcd on a public NodePort service to allow remote administrative debugging." },
      { id: 'D', text: "Share the API server client certificate with all application workloads." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mutual TLS (mTLS) on etcd using `--client-cert-auth=true`, dedicated CA certificates, and restrict firewall access strictly to apiserver nodes. etcd holds the complete state and all secrets of the cluster. Compromising etcd is equivalent to full cluster takeover. Enforcing client certificate authentication (`--client-cert-auth=true`) with a separate dedicated etcd CA and firewalling port 2379 ensures only the API server can connect.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/",
    tags: ["etcd Security", "etcd Security", "Resilience Failure"]
  },
  {
    id: "k8s-cks-291",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "AppArmor Profiles on Kubernetes Pods: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates AppArmor to prevent a compromised container process from writing to `/proc` or executing network socket creation on the host node.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Enforcing AppArmor security profiles to restrict container system calls and file access is under consideration.",
    options: [
      { id: 'A', text: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext." },
      { id: 'B', text: "Disable AppArmor across all host worker nodes." },
      { id: 'C', text: "Set privileged: true on the container to bypass AppArmor." },
      { id: 'D', text: "Rely exclusively on application-layer input validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext. AppArmor is a Linux kernel security module that restricts container capabilities and file access paths. In modern Kubernetes, specifying `appArmorProfile` in `securityContext` binds the container to a loaded profile, blocking prohibited operations like raw socket binding or `/proc` writes.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/apparmor/",
    tags: ["AppArmor", "AppArmor", "Dr Failover"]
  },
  {
    id: "k8s-cks-292",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "AppArmor Profiles on Kubernetes Pods: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates AppArmor to prevent a compromised container process from writing to `/proc` or executing network socket creation on the host node.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Enforcing AppArmor security profiles to restrict container system calls and file access is under consideration.",
    options: [
      { id: 'A', text: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext." },
      { id: 'B', text: "Disable AppArmor across all host worker nodes." },
      { id: 'C', text: "Set privileged: true on the container to bypass AppArmor." },
      { id: 'D', text: "Rely exclusively on application-layer input validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext. AppArmor is a Linux kernel security module that restricts container capabilities and file access paths. In modern Kubernetes, specifying `appArmorProfile` in `securityContext` binds the container to a loaded profile, blocking prohibited operations like raw socket binding or `/proc` writes.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/apparmor/",
    tags: ["AppArmor", "AppArmor", "High Load Scale"]
  },
  {
    id: "k8s-cks-293",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "AppArmor Profiles on Kubernetes Pods: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates AppArmor to prevent a compromised container process from writing to `/proc` or executing network socket creation on the host node.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Enforcing AppArmor security profiles to restrict container system calls and file access is under consideration.",
    options: [
      { id: 'A', text: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext." },
      { id: 'B', text: "Disable AppArmor across all host worker nodes." },
      { id: 'C', text: "Set privileged: true on the container to bypass AppArmor." },
      { id: 'D', text: "Rely exclusively on application-layer input validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext. AppArmor is a Linux kernel security module that restricts container capabilities and file access paths. In modern Kubernetes, specifying `appArmorProfile` in `securityContext` binds the container to a loaded profile, blocking prohibited operations like raw socket binding or `/proc` writes.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/apparmor/",
    tags: ["AppArmor", "AppArmor", "Security Compliance"]
  },
  {
    id: "k8s-cks-294",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "AppArmor Profiles on Kubernetes Pods: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates AppArmor to prevent a compromised container process from writing to `/proc` or executing network socket creation on the host node.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Enforcing AppArmor security profiles to restrict container system calls and file access is under consideration.",
    options: [
      { id: 'A', text: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext." },
      { id: 'B', text: "Disable AppArmor across all host worker nodes." },
      { id: 'C', text: "Set privileged: true on the container to bypass AppArmor." },
      { id: 'D', text: "Rely exclusively on application-layer input validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext. AppArmor is a Linux kernel security module that restricts container capabilities and file access paths. In modern Kubernetes, specifying `appArmorProfile` in `securityContext` binds the container to a loaded profile, blocking prohibited operations like raw socket binding or `/proc` writes.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/apparmor/",
    tags: ["AppArmor", "AppArmor", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-295",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "AppArmor Profiles on Kubernetes Pods: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates AppArmor to prevent a compromised container process from writing to `/proc` or executing network socket creation on the host node.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Enforcing AppArmor security profiles to restrict container system calls and file access is under consideration.",
    options: [
      { id: 'A', text: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext." },
      { id: 'B', text: "Disable AppArmor across all host worker nodes." },
      { id: 'C', text: "Set privileged: true on the container to bypass AppArmor." },
      { id: 'D', text: "Rely exclusively on application-layer input validation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Load an AppArmor profile on host nodes and configure `appArmorProfile: {type: Localhost, localhostProfile: &lt;profile-name&gt;}` in the container securityContext. AppArmor is a Linux kernel security module that restricts container capabilities and file access paths. In modern Kubernetes, specifying `appArmorProfile` in `securityContext` binds the container to a loaded profile, blocking prohibited operations like raw socket binding or `/proc` writes.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/apparmor/",
    tags: ["AppArmor", "AppArmor", "Resilience Failure"]
  },
  {
    id: "k8s-cks-296",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Seccomp Profiles for System Call Filtering: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Seccomp to block containers from executing dangerous or unnecessary Linux system calls (such as `ptrace` or `sys_chroot`).",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Restricting dangerous system calls using seccompProfile RuntimeDefault and Localhost is under consideration.",
    options: [
      { id: 'A', text: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`." },
      { id: 'B', text: "Set seccompProfile type to Unconfined." },
      { id: 'C', text: "Grant full root privileges to the container process." },
      { id: 'D', text: "Disable the Linux kernel seccomp subsystem on worker nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`. Secure Computing Mode (seccomp) filters system calls executed by a process. Setting `seccompProfile.type: RuntimeDefault` applies the container runtime's default seccomp profile, which blocks dozens of dangerous and unneeded syscalls (e.g., `reboot`, `ptrace`, `kexec_load`), minimizing the kernel attack surface.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["Seccomp", "Seccomp", "Dr Failover"]
  },
  {
    id: "k8s-cks-297",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Seccomp Profiles for System Call Filtering: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Seccomp to block containers from executing dangerous or unnecessary Linux system calls (such as `ptrace` or `sys_chroot`).",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Restricting dangerous system calls using seccompProfile RuntimeDefault and Localhost is under consideration.",
    options: [
      { id: 'A', text: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`." },
      { id: 'B', text: "Set seccompProfile type to Unconfined." },
      { id: 'C', text: "Grant full root privileges to the container process." },
      { id: 'D', text: "Disable the Linux kernel seccomp subsystem on worker nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`. Secure Computing Mode (seccomp) filters system calls executed by a process. Setting `seccompProfile.type: RuntimeDefault` applies the container runtime's default seccomp profile, which blocks dozens of dangerous and unneeded syscalls (e.g., `reboot`, `ptrace`, `kexec_load`), minimizing the kernel attack surface.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["Seccomp", "Seccomp", "High Load Scale"]
  },
  {
    id: "k8s-cks-298",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Seccomp Profiles for System Call Filtering: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Seccomp to block containers from executing dangerous or unnecessary Linux system calls (such as `ptrace` or `sys_chroot`).",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Restricting dangerous system calls using seccompProfile RuntimeDefault and Localhost is under consideration.",
    options: [
      { id: 'A', text: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`." },
      { id: 'B', text: "Set seccompProfile type to Unconfined." },
      { id: 'C', text: "Grant full root privileges to the container process." },
      { id: 'D', text: "Disable the Linux kernel seccomp subsystem on worker nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`. Secure Computing Mode (seccomp) filters system calls executed by a process. Setting `seccompProfile.type: RuntimeDefault` applies the container runtime's default seccomp profile, which blocks dozens of dangerous and unneeded syscalls (e.g., `reboot`, `ptrace`, `kexec_load`), minimizing the kernel attack surface.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["Seccomp", "Seccomp", "Security Compliance"]
  },
  {
    id: "k8s-cks-299",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Seccomp Profiles for System Call Filtering: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Seccomp to block containers from executing dangerous or unnecessary Linux system calls (such as `ptrace` or `sys_chroot`).",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Restricting dangerous system calls using seccompProfile RuntimeDefault and Localhost is under consideration.",
    options: [
      { id: 'A', text: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`." },
      { id: 'B', text: "Set seccompProfile type to Unconfined." },
      { id: 'C', text: "Grant full root privileges to the container process." },
      { id: 'D', text: "Disable the Linux kernel seccomp subsystem on worker nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`. Secure Computing Mode (seccomp) filters system calls executed by a process. Setting `seccompProfile.type: RuntimeDefault` applies the container runtime's default seccomp profile, which blocks dozens of dangerous and unneeded syscalls (e.g., `reboot`, `ptrace`, `kexec_load`), minimizing the kernel attack surface.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["Seccomp", "Seccomp", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-300",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "System Hardening and Kernel Security",
    title: "Seccomp Profiles for System Call Filtering: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Seccomp to block containers from executing dangerous or unnecessary Linux system calls (such as `ptrace` or `sys_chroot`).",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Restricting dangerous system calls using seccompProfile RuntimeDefault and Localhost is under consideration.",
    options: [
      { id: 'A', text: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`." },
      { id: 'B', text: "Set seccompProfile type to Unconfined." },
      { id: 'C', text: "Grant full root privileges to the container process." },
      { id: 'D', text: "Disable the Linux kernel seccomp subsystem on worker nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `seccompProfile: {type: RuntimeDefault}` or `{type: Localhost, localhostProfile: &lt;profile.json&gt;}` in the pod or container `securityContext`. Secure Computing Mode (seccomp) filters system calls executed by a process. Setting `seccompProfile.type: RuntimeDefault` applies the container runtime's default seccomp profile, which blocks dozens of dangerous and unneeded syscalls (e.g., `reboot`, `ptrace`, `kexec_load`), minimizing the kernel attack surface.",
    referenceUrl: "https://kubernetes.io/docs/tutorials/security/seccomp/",
    tags: ["Seccomp", "Seccomp", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_12;
