export const K8S_CKA_QUESTIONS_18 = [
  {
    id: "k8s-cka-401",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Backup and Snapshot Creation: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Disaster Recovery to create an encrypted point-in-time backup of the cluster's etcd state before executing a major control plane configuration change.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Saving point-in-time etcd database snapshots using etcdctl snapshot save is under consideration.",
    options: [
      { id: 'A', text: "Rely on cloud provider hypervisor volume snapshots without flushing etcd write buffers." },
      { id: 'B', text: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints." },
      { id: 'C', text: "Run `kubectl get all -A -o yaml` and save the text file to disk." },
      { id: 'D', text: "Copy the running `/var/lib/etcd` directory to another path while etcd writes are actively occurring." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints. `etcdctl snapshot save` generates a consistent point-in-time snapshot of the key-value store without stopping the etcd process. It requires passing `--cacert`, `--cert`, and `--key` to authenticate via mutual TLS with the etcd member.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#snapshot-using-etcdctl-options",
    tags: ["Disaster Recovery", "etcd Backup", "Dr Failover"]
  },
  {
    id: "k8s-cka-402",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Backup and Snapshot Creation: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Disaster Recovery to create an encrypted point-in-time backup of the cluster's etcd state before executing a major control plane configuration change.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Saving point-in-time etcd database snapshots using etcdctl snapshot save is under consideration.",
    options: [
      { id: 'A', text: "Run `kubectl get all -A -o yaml` and save the text file to disk." },
      { id: 'B', text: "Copy the running `/var/lib/etcd` directory to another path while etcd writes are actively occurring." },
      { id: 'C', text: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints." },
      { id: 'D', text: "Rely on cloud provider hypervisor volume snapshots without flushing etcd write buffers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints. `etcdctl snapshot save` generates a consistent point-in-time snapshot of the key-value store without stopping the etcd process. It requires passing `--cacert`, `--cert`, and `--key` to authenticate via mutual TLS with the etcd member.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#snapshot-using-etcdctl-options",
    tags: ["Disaster Recovery", "etcd Backup", "High Load Scale"]
  },
  {
    id: "k8s-cka-403",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Backup and Snapshot Creation: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Disaster Recovery to create an encrypted point-in-time backup of the cluster's etcd state before executing a major control plane configuration change.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Saving point-in-time etcd database snapshots using etcdctl snapshot save is under consideration.",
    options: [
      { id: 'A', text: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints." },
      { id: 'B', text: "Copy the running `/var/lib/etcd` directory to another path while etcd writes are actively occurring." },
      { id: 'C', text: "Run `kubectl get all -A -o yaml` and save the text file to disk." },
      { id: 'D', text: "Rely on cloud provider hypervisor volume snapshots without flushing etcd write buffers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints. `etcdctl snapshot save` generates a consistent point-in-time snapshot of the key-value store without stopping the etcd process. It requires passing `--cacert`, `--cert`, and `--key` to authenticate via mutual TLS with the etcd member.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#snapshot-using-etcdctl-options",
    tags: ["Disaster Recovery", "etcd Backup", "Security Compliance"]
  },
  {
    id: "k8s-cka-404",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Backup and Snapshot Creation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Disaster Recovery to create an encrypted point-in-time backup of the cluster's etcd state before executing a major control plane configuration change.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Saving point-in-time etcd database snapshots using etcdctl snapshot save is under consideration.",
    options: [
      { id: 'A', text: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints." },
      { id: 'B', text: "Run `kubectl get all -A -o yaml` and save the text file to disk." },
      { id: 'C', text: "Copy the running `/var/lib/etcd` directory to another path while etcd writes are actively occurring." },
      { id: 'D', text: "Rely on cloud provider hypervisor volume snapshots without flushing etcd write buffers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints. `etcdctl snapshot save` generates a consistent point-in-time snapshot of the key-value store without stopping the etcd process. It requires passing `--cacert`, `--cert`, and `--key` to authenticate via mutual TLS with the etcd member.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#snapshot-using-etcdctl-options",
    tags: ["Disaster Recovery", "etcd Backup", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-405",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Backup and Snapshot Creation: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Disaster Recovery to create an encrypted point-in-time backup of the cluster's etcd state before executing a major control plane configuration change.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Saving point-in-time etcd database snapshots using etcdctl snapshot save is under consideration.",
    options: [
      { id: 'A', text: "Copy the running `/var/lib/etcd` directory to another path while etcd writes are actively occurring." },
      { id: 'B', text: "Run `kubectl get all -A -o yaml` and save the text file to disk." },
      { id: 'C', text: "Rely on cloud provider hypervisor volume snapshots without flushing etcd write buffers." },
      { id: 'D', text: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute `etcdctl snapshot save &lt;backup.db&gt;` passing the CA certificate, server certificate, and server key endpoints. `etcdctl snapshot save` generates a consistent point-in-time snapshot of the key-value store without stopping the etcd process. It requires passing `--cacert`, `--cert`, and `--key` to authenticate via mutual TLS with the etcd member.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#snapshot-using-etcdctl-options",
    tags: ["Disaster Recovery", "etcd Backup", "Resilience Failure"]
  },
  {
    id: "k8s-cka-406",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Restore Procedure: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Disaster Recovery to restore the cluster state from a previously saved etcd snapshot following accidental deletion of multiple production namespaces.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Restoring an etcd snapshot to a new data directory and updating static pod manifests is under consideration.",
    options: [
      { id: 'A', text: "Copy the snapshot file directly over the existing `/var/lib/etcd/member` folder while etcd is running." },
      { id: 'B', text: "Use `kubectl apply` with the raw etcd snapshot binary file." },
      { id: 'C', text: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`." },
      { id: 'D', text: "Restore is impossible once namespaces are deleted in Kubernetes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`. Restoring an etcd snapshot requires stopping control plane components, executing `etcdctl snapshot restore` into a fresh data directory, and updating the etcd static pod manifest (`/etc/kubernetes/manifests/etcd.yaml`) to mount the new directory. When kubelet restarts etcd, it loads the restored state.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster",
    tags: ["Disaster Recovery", "etcd Restore", "Dr Failover"]
  },
  {
    id: "k8s-cka-407",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Restore Procedure: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Disaster Recovery to restore the cluster state from a previously saved etcd snapshot following accidental deletion of multiple production namespaces.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Restoring an etcd snapshot to a new data directory and updating static pod manifests is under consideration.",
    options: [
      { id: 'A', text: "Restore is impossible once namespaces are deleted in Kubernetes." },
      { id: 'B', text: "Use `kubectl apply` with the raw etcd snapshot binary file." },
      { id: 'C', text: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`." },
      { id: 'D', text: "Copy the snapshot file directly over the existing `/var/lib/etcd/member` folder while etcd is running." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`. Restoring an etcd snapshot requires stopping control plane components, executing `etcdctl snapshot restore` into a fresh data directory, and updating the etcd static pod manifest (`/etc/kubernetes/manifests/etcd.yaml`) to mount the new directory. When kubelet restarts etcd, it loads the restored state.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster",
    tags: ["Disaster Recovery", "etcd Restore", "High Load Scale"]
  },
  {
    id: "k8s-cka-408",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Restore Procedure: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Disaster Recovery to restore the cluster state from a previously saved etcd snapshot following accidental deletion of multiple production namespaces.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Restoring an etcd snapshot to a new data directory and updating static pod manifests is under consideration.",
    options: [
      { id: 'A', text: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`." },
      { id: 'B', text: "Copy the snapshot file directly over the existing `/var/lib/etcd/member` folder while etcd is running." },
      { id: 'C', text: "Use `kubectl apply` with the raw etcd snapshot binary file." },
      { id: 'D', text: "Restore is impossible once namespaces are deleted in Kubernetes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`. Restoring an etcd snapshot requires stopping control plane components, executing `etcdctl snapshot restore` into a fresh data directory, and updating the etcd static pod manifest (`/etc/kubernetes/manifests/etcd.yaml`) to mount the new directory. When kubelet restarts etcd, it loads the restored state.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster",
    tags: ["Disaster Recovery", "etcd Restore", "Security Compliance"]
  },
  {
    id: "k8s-cka-409",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Restore Procedure: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Disaster Recovery to restore the cluster state from a previously saved etcd snapshot following accidental deletion of multiple production namespaces.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Restoring an etcd snapshot to a new data directory and updating static pod manifests is under consideration.",
    options: [
      { id: 'A', text: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`." },
      { id: 'B', text: "Copy the snapshot file directly over the existing `/var/lib/etcd/member` folder while etcd is running." },
      { id: 'C', text: "Use `kubectl apply` with the raw etcd snapshot binary file." },
      { id: 'D', text: "Restore is impossible once namespaces are deleted in Kubernetes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`. Restoring an etcd snapshot requires stopping control plane components, executing `etcdctl snapshot restore` into a fresh data directory, and updating the etcd static pod manifest (`/etc/kubernetes/manifests/etcd.yaml`) to mount the new directory. When kubelet restarts etcd, it loads the restored state.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster",
    tags: ["Disaster Recovery", "etcd Restore", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-410",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "etcd Restore Procedure: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Disaster Recovery to restore the cluster state from a previously saved etcd snapshot following accidental deletion of multiple production namespaces.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Restoring an etcd snapshot to a new data directory and updating static pod manifests is under consideration.",
    options: [
      { id: 'A', text: "Restore is impossible once namespaces are deleted in Kubernetes." },
      { id: 'B', text: "Use `kubectl apply` with the raw etcd snapshot binary file." },
      { id: 'C', text: "Copy the snapshot file directly over the existing `/var/lib/etcd/member` folder while etcd is running." },
      { id: 'D', text: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Stop the API server, restore the snapshot with `etcdctl snapshot restore --data-dir=&lt;new-dir&gt;`, and update the etcd static pod manifest hostPath volume to point to `&lt;new-dir&gt;`. Restoring an etcd snapshot requires stopping control plane components, executing `etcdctl snapshot restore` into a fresh data directory, and updating the etcd static pod manifest (`/etc/kubernetes/manifests/etcd.yaml`) to mount the new directory. When kubelet restarts etcd, it loads the restored state.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#restoring-an-etcd-cluster",
    tags: ["Disaster Recovery", "etcd Restore", "Resilience Failure"]
  },
  {
    id: "k8s-cka-411",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Role-Based Access Control (RBAC) Roles and RoleBindings: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates RBAC to grant a junior developer permissions to view, get, and list Pods and Services only within the `staging` namespace without allowing cluster-wide access.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Authorizing namespace-scoped actions with Roles and RoleBindings is under consideration.",
    options: [
      { id: 'A', text: "Create a `ClusterRole` and bind it to the developer using a cluster-wide ClusterRoleBinding." },
      { id: 'B', text: "Create a `ClusterRoleBinding` granting `cluster-admin` privileges across the entire cluster." },
      { id: 'C', text: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`." },
      { id: 'D', text: "Add the developer's client certificate directly to the kube-apiserver static token file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`. A `Role` grants permissions within a specific namespace. A `RoleBinding` attaches that Role to users, groups, or ServiceAccounts within that same namespace, restricting permissions strictly to the target namespace.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",
    tags: ["RBAC", "RBAC", "Dr Failover"]
  },
  {
    id: "k8s-cka-412",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Role-Based Access Control (RBAC) Roles and RoleBindings: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates RBAC to grant a junior developer permissions to view, get, and list Pods and Services only within the `staging` namespace without allowing cluster-wide access.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Authorizing namespace-scoped actions with Roles and RoleBindings is under consideration.",
    options: [
      { id: 'A', text: "Add the developer's client certificate directly to the kube-apiserver static token file." },
      { id: 'B', text: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`." },
      { id: 'C', text: "Create a `ClusterRoleBinding` granting `cluster-admin` privileges across the entire cluster." },
      { id: 'D', text: "Create a `ClusterRole` and bind it to the developer using a cluster-wide ClusterRoleBinding." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`. A `Role` grants permissions within a specific namespace. A `RoleBinding` attaches that Role to users, groups, or ServiceAccounts within that same namespace, restricting permissions strictly to the target namespace.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",
    tags: ["RBAC", "RBAC", "High Load Scale"]
  },
  {
    id: "k8s-cka-413",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Role-Based Access Control (RBAC) Roles and RoleBindings: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates RBAC to grant a junior developer permissions to view, get, and list Pods and Services only within the `staging` namespace without allowing cluster-wide access.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Authorizing namespace-scoped actions with Roles and RoleBindings is under consideration.",
    options: [
      { id: 'A', text: "Create a `ClusterRoleBinding` granting `cluster-admin` privileges across the entire cluster." },
      { id: 'B', text: "Create a `ClusterRole` and bind it to the developer using a cluster-wide ClusterRoleBinding." },
      { id: 'C', text: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`." },
      { id: 'D', text: "Add the developer's client certificate directly to the kube-apiserver static token file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`. A `Role` grants permissions within a specific namespace. A `RoleBinding` attaches that Role to users, groups, or ServiceAccounts within that same namespace, restricting permissions strictly to the target namespace.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",
    tags: ["RBAC", "RBAC", "Security Compliance"]
  },
  {
    id: "k8s-cka-414",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Role-Based Access Control (RBAC) Roles and RoleBindings: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates RBAC to grant a junior developer permissions to view, get, and list Pods and Services only within the `staging` namespace without allowing cluster-wide access.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Authorizing namespace-scoped actions with Roles and RoleBindings is under consideration.",
    options: [
      { id: 'A', text: "Create a `ClusterRoleBinding` granting `cluster-admin` privileges across the entire cluster." },
      { id: 'B', text: "Add the developer's client certificate directly to the kube-apiserver static token file." },
      { id: 'C', text: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`." },
      { id: 'D', text: "Create a `ClusterRole` and bind it to the developer using a cluster-wide ClusterRoleBinding." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`. A `Role` grants permissions within a specific namespace. A `RoleBinding` attaches that Role to users, groups, or ServiceAccounts within that same namespace, restricting permissions strictly to the target namespace.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",
    tags: ["RBAC", "RBAC", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-415",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "Role-Based Access Control (RBAC) Roles and RoleBindings: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates RBAC to grant a junior developer permissions to view, get, and list Pods and Services only within the `staging` namespace without allowing cluster-wide access.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Authorizing namespace-scoped actions with Roles and RoleBindings is under consideration.",
    options: [
      { id: 'A', text: "Create a `ClusterRole` and bind it to the developer using a cluster-wide ClusterRoleBinding." },
      { id: 'B', text: "Add the developer's client certificate directly to the kube-apiserver static token file." },
      { id: 'C', text: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`." },
      { id: 'D', text: "Create a `ClusterRoleBinding` granting `cluster-admin` privileges across the entire cluster." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `Role` defining pod and service read verbs in `staging`, and bind it to the developer's user via a `RoleBinding` in `staging`. A `Role` grants permissions within a specific namespace. A `RoleBinding` attaches that Role to users, groups, or ServiceAccounts within that same namespace, restricting permissions strictly to the target namespace.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",
    tags: ["RBAC", "RBAC", "Resilience Failure"]
  },
  {
    id: "k8s-cka-416",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ClusterRoles and ClusterRoleBindings: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates Cluster RBAC to grant a cluster monitoring service account permissions to view nodes, persistent volumes, and pods across all namespaces.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Authorizing cluster-scoped resources like Nodes and PersistentVolumes with ClusterRoles is under consideration.",
    options: [
      { id: 'A', text: "Create a standard Role in the `default` namespace." },
      { id: 'B', text: "Grant the service account anonymous access in the apiserver configuration." },
      { id: 'C', text: "Mount the master node root filesystem into the monitoring pod with write access." },
      { id: 'D', text: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`. `ClusterRole` and `ClusterRoleBinding` govern non-namespaced resources (like Nodes, PersistentVolumes, and StorageClasses) or grant resource permissions uniformly across all namespaces in the cluster.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#clusterrole-example",
    tags: ["Cluster RBAC", "ClusterRole", "Dr Failover"]
  },
  {
    id: "k8s-cka-417",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ClusterRoles and ClusterRoleBindings: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates Cluster RBAC to grant a cluster monitoring service account permissions to view nodes, persistent volumes, and pods across all namespaces.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Authorizing cluster-scoped resources like Nodes and PersistentVolumes with ClusterRoles is under consideration.",
    options: [
      { id: 'A', text: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`." },
      { id: 'B', text: "Mount the master node root filesystem into the monitoring pod with write access." },
      { id: 'C', text: "Grant the service account anonymous access in the apiserver configuration." },
      { id: 'D', text: "Create a standard Role in the `default` namespace." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`. `ClusterRole` and `ClusterRoleBinding` govern non-namespaced resources (like Nodes, PersistentVolumes, and StorageClasses) or grant resource permissions uniformly across all namespaces in the cluster.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#clusterrole-example",
    tags: ["Cluster RBAC", "ClusterRole", "High Load Scale"]
  },
  {
    id: "k8s-cka-418",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ClusterRoles and ClusterRoleBindings: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates Cluster RBAC to grant a cluster monitoring service account permissions to view nodes, persistent volumes, and pods across all namespaces.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Authorizing cluster-scoped resources like Nodes and PersistentVolumes with ClusterRoles is under consideration.",
    options: [
      { id: 'A', text: "Mount the master node root filesystem into the monitoring pod with write access." },
      { id: 'B', text: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`." },
      { id: 'C', text: "Grant the service account anonymous access in the apiserver configuration." },
      { id: 'D', text: "Create a standard Role in the `default` namespace." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`. `ClusterRole` and `ClusterRoleBinding` govern non-namespaced resources (like Nodes, PersistentVolumes, and StorageClasses) or grant resource permissions uniformly across all namespaces in the cluster.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#clusterrole-example",
    tags: ["Cluster RBAC", "ClusterRole", "Security Compliance"]
  },
  {
    id: "k8s-cka-419",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ClusterRoles and ClusterRoleBindings: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates Cluster RBAC to grant a cluster monitoring service account permissions to view nodes, persistent volumes, and pods across all namespaces.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Authorizing cluster-scoped resources like Nodes and PersistentVolumes with ClusterRoles is under consideration.",
    options: [
      { id: 'A', text: "Mount the master node root filesystem into the monitoring pod with write access." },
      { id: 'B', text: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`." },
      { id: 'C', text: "Grant the service account anonymous access in the apiserver configuration." },
      { id: 'D', text: "Create a standard Role in the `default` namespace." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`. `ClusterRole` and `ClusterRoleBinding` govern non-namespaced resources (like Nodes, PersistentVolumes, and StorageClasses) or grant resource permissions uniformly across all namespaces in the cluster.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#clusterrole-example",
    tags: ["Cluster RBAC", "ClusterRole", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-420",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ClusterRoles and ClusterRoleBindings: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates Cluster RBAC to grant a cluster monitoring service account permissions to view nodes, persistent volumes, and pods across all namespaces.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Authorizing cluster-scoped resources like Nodes and PersistentVolumes with ClusterRoles is under consideration.",
    options: [
      { id: 'A', text: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`." },
      { id: 'B', text: "Create a standard Role in the `default` namespace." },
      { id: 'C', text: "Mount the master node root filesystem into the monitoring pod with write access." },
      { id: 'D', text: "Grant the service account anonymous access in the apiserver configuration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `ClusterRole` with get and list verbs for nodes, PVs, and pods, and bind it to the ServiceAccount using a `ClusterRoleBinding`. `ClusterRole` and `ClusterRoleBinding` govern non-namespaced resources (like Nodes, PersistentVolumes, and StorageClasses) or grant resource permissions uniformly across all namespaces in the cluster.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#clusterrole-example",
    tags: ["Cluster RBAC", "ClusterRole", "Resilience Failure"]
  },
  {
    id: "k8s-cka-421",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ServiceAccounts and Token Projections: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator evaluates ServiceAccounts to configure an in-cluster workload to authenticate to the Kubernetes API server using short-lived, audience-bound tokens instead of legacy permanent secrets.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements? Configuring dedicated ServiceAccounts and bound projected service account tokens is under consideration.",
    options: [
      { id: 'A', text: "Disable API server authentication flags (`--anonymous-auth=true`)." },
      { id: 'B', text: "Use the default ServiceAccount in the kube-system namespace with automountServiceAccountToken: true." },
      { id: 'C', text: "Hardcode the cluster root CA private key directly in application environment variables." },
      { id: 'D', text: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`. Modern Kubernetes versions use Bound Service Account Token Volume Projection. Tokens mounted into pods are short-lived, bound to the pod's lifetime, and scoped to specific audiences, dramatically reducing the blast radius of stolen credentials.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "ServiceAccounts", "Dr Failover"]
  },
  {
    id: "k8s-cka-422",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ServiceAccounts and Token Projections: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator evaluates ServiceAccounts to configure an in-cluster workload to authenticate to the Kubernetes API server using short-lived, audience-bound tokens instead of legacy permanent secrets.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability? Configuring dedicated ServiceAccounts and bound projected service account tokens is under consideration.",
    options: [
      { id: 'A', text: "Disable API server authentication flags (`--anonymous-auth=true`)." },
      { id: 'B', text: "Hardcode the cluster root CA private key directly in application environment variables." },
      { id: 'C', text: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`." },
      { id: 'D', text: "Use the default ServiceAccount in the kube-system namespace with automountServiceAccountToken: true." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`. Modern Kubernetes versions use Bound Service Account Token Volume Projection. Tokens mounted into pods are short-lived, bound to the pod's lifetime, and scoped to specific audiences, dramatically reducing the blast radius of stolen credentials.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "ServiceAccounts", "High Load Scale"]
  },
  {
    id: "k8s-cka-423",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ServiceAccounts and Token Projections: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator evaluates ServiceAccounts to configure an in-cluster workload to authenticate to the Kubernetes API server using short-lived, audience-bound tokens instead of legacy permanent secrets.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring dedicated ServiceAccounts and bound projected service account tokens is under consideration.",
    options: [
      { id: 'A', text: "Use the default ServiceAccount in the kube-system namespace with automountServiceAccountToken: true." },
      { id: 'B', text: "Hardcode the cluster root CA private key directly in application environment variables." },
      { id: 'C', text: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`." },
      { id: 'D', text: "Disable API server authentication flags (`--anonymous-auth=true`)." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`. Modern Kubernetes versions use Bound Service Account Token Volume Projection. Tokens mounted into pods are short-lived, bound to the pod's lifetime, and scoped to specific audiences, dramatically reducing the blast radius of stolen credentials.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "ServiceAccounts", "Security Compliance"]
  },
  {
    id: "k8s-cka-424",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ServiceAccounts and Token Projections: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator evaluates ServiceAccounts to configure an in-cluster workload to authenticate to the Kubernetes API server using short-lived, audience-bound tokens instead of legacy permanent secrets.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity? Configuring dedicated ServiceAccounts and bound projected service account tokens is under consideration.",
    options: [
      { id: 'A', text: "Hardcode the cluster root CA private key directly in application environment variables." },
      { id: 'B', text: "Disable API server authentication flags (`--anonymous-auth=true`)." },
      { id: 'C', text: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`." },
      { id: 'D', text: "Use the default ServiceAccount in the kube-system namespace with automountServiceAccountToken: true." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`. Modern Kubernetes versions use Bound Service Account Token Volume Projection. Tokens mounted into pods are short-lived, bound to the pod's lifetime, and scoped to specific audiences, dramatically reducing the blast radius of stolen credentials.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "ServiceAccounts", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-425",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    domainName: "Cluster Architecture, Installation & Config",
    title: "ServiceAccounts and Token Projections: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator evaluates ServiceAccounts to configure an in-cluster workload to authenticate to the Kubernetes API server using short-lived, audience-bound tokens instead of legacy permanent secrets.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability? Configuring dedicated ServiceAccounts and bound projected service account tokens is under consideration.",
    options: [
      { id: 'A', text: "Hardcode the cluster root CA private key directly in application environment variables." },
      { id: 'B', text: "Disable API server authentication flags (`--anonymous-auth=true`)." },
      { id: 'C', text: "Use the default ServiceAccount in the kube-system namespace with automountServiceAccountToken: true." },
      { id: 'D', text: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Assign a dedicated `ServiceAccount` to the pod and use projected volumes (`serviceAccountToken`) with specified `audience` and `expirationSeconds`. Modern Kubernetes versions use Bound Service Account Token Volume Projection. Tokens mounted into pods are short-lived, bound to the pod's lifetime, and scoped to specific audiences, dramatically reducing the blast radius of stolen credentials.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/",
    tags: ["ServiceAccounts", "ServiceAccounts", "Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_18;
