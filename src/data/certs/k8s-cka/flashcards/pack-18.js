export const K8S_CKA_FLASHCARDS_18 = [
  {
    id: "k8s-cka-fc-401",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Backup (Dr Failover)",
    hint: "Creating consistent point-in-time etcd snapshots with etcdctl.",
    back: "Creating an etcd backup requires running <strong>etcdctl snapshot save</strong> with mutual TLS certificates, ensuring a consistent point-in-time snapshot without taking the database offline.",
    tags: ["Disaster Recovery", "etcd Backup", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-402",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Backup (High Load Scale)",
    hint: "Creating consistent point-in-time etcd snapshots with etcdctl.",
    back: "Creating an etcd backup requires running <strong>etcdctl snapshot save</strong> with mutual TLS certificates, ensuring a consistent point-in-time snapshot without taking the database offline.",
    tags: ["Disaster Recovery", "etcd Backup", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-403",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Backup (Security Compliance)",
    hint: "Creating consistent point-in-time etcd snapshots with etcdctl.",
    back: "Creating an etcd backup requires running <strong>etcdctl snapshot save</strong> with mutual TLS certificates, ensuring a consistent point-in-time snapshot without taking the database offline.",
    tags: ["Disaster Recovery", "etcd Backup", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-404",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Backup (Hybrid Migration)",
    hint: "Creating consistent point-in-time etcd snapshots with etcdctl.",
    back: "Creating an etcd backup requires running <strong>etcdctl snapshot save</strong> with mutual TLS certificates, ensuring a consistent point-in-time snapshot without taking the database offline.",
    tags: ["Disaster Recovery", "etcd Backup", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-405",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Backup (Resilience Failure)",
    hint: "Creating consistent point-in-time etcd snapshots with etcdctl.",
    back: "Creating an etcd backup requires running <strong>etcdctl snapshot save</strong> with mutual TLS certificates, ensuring a consistent point-in-time snapshot without taking the database offline.",
    tags: ["Disaster Recovery", "etcd Backup", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-406",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Restoration (Dr Failover)",
    hint: "Restoring etcd snapshots to new data directories and updating static pod paths.",
    back: "Restoring an etcd cluster requires running <strong>etcdctl snapshot restore --data-dir</strong> into a new path and updating the etcd static pod manifest to point to the restored directory.",
    tags: ["Disaster Recovery", "etcd Restore", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-407",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Restoration (High Load Scale)",
    hint: "Restoring etcd snapshots to new data directories and updating static pod paths.",
    back: "Restoring an etcd cluster requires running <strong>etcdctl snapshot restore --data-dir</strong> into a new path and updating the etcd static pod manifest to point to the restored directory.",
    tags: ["Disaster Recovery", "etcd Restore", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-408",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Restoration (Security Compliance)",
    hint: "Restoring etcd snapshots to new data directories and updating static pod paths.",
    back: "Restoring an etcd cluster requires running <strong>etcdctl snapshot restore --data-dir</strong> into a new path and updating the etcd static pod manifest to point to the restored directory.",
    tags: ["Disaster Recovery", "etcd Restore", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-409",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Restoration (Hybrid Migration)",
    hint: "Restoring etcd snapshots to new data directories and updating static pod paths.",
    back: "Restoring an etcd cluster requires running <strong>etcdctl snapshot restore --data-dir</strong> into a new path and updating the etcd static pod manifest to point to the restored directory.",
    tags: ["Disaster Recovery", "etcd Restore", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-410",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "etcd Snapshot Restoration (Resilience Failure)",
    hint: "Restoring etcd snapshots to new data directories and updating static pod paths.",
    back: "Restoring an etcd cluster requires running <strong>etcdctl snapshot restore --data-dir</strong> into a new path and updating the etcd static pod manifest to point to the restored directory.",
    tags: ["Disaster Recovery", "etcd Restore", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-411",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Namespaced RBAC Roles and RoleBindings (Dr Failover)",
    hint: "Restricting permissions to specific namespaces using Roles and RoleBindings.",
    back: "A <strong>Role</strong> defines API access verbs within a namespace, and a <strong>RoleBinding</strong> attaches those permissions to a user or ServiceAccount strictly within that namespace.",
    tags: ["RBAC", "RBAC", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-412",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Namespaced RBAC Roles and RoleBindings (High Load Scale)",
    hint: "Restricting permissions to specific namespaces using Roles and RoleBindings.",
    back: "A <strong>Role</strong> defines API access verbs within a namespace, and a <strong>RoleBinding</strong> attaches those permissions to a user or ServiceAccount strictly within that namespace.",
    tags: ["RBAC", "RBAC", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-413",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Namespaced RBAC Roles and RoleBindings (Security Compliance)",
    hint: "Restricting permissions to specific namespaces using Roles and RoleBindings.",
    back: "A <strong>Role</strong> defines API access verbs within a namespace, and a <strong>RoleBinding</strong> attaches those permissions to a user or ServiceAccount strictly within that namespace.",
    tags: ["RBAC", "RBAC", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-414",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Namespaced RBAC Roles and RoleBindings (Hybrid Migration)",
    hint: "Restricting permissions to specific namespaces using Roles and RoleBindings.",
    back: "A <strong>Role</strong> defines API access verbs within a namespace, and a <strong>RoleBinding</strong> attaches those permissions to a user or ServiceAccount strictly within that namespace.",
    tags: ["RBAC", "RBAC", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-415",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Namespaced RBAC Roles and RoleBindings (Resilience Failure)",
    hint: "Restricting permissions to specific namespaces using Roles and RoleBindings.",
    back: "A <strong>Role</strong> defines API access verbs within a namespace, and a <strong>RoleBinding</strong> attaches those permissions to a user or ServiceAccount strictly within that namespace.",
    tags: ["RBAC", "RBAC", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-416",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ClusterRoles and ClusterRoleBindings (Dr Failover)",
    hint: "Cluster-scoped authorization for cluster-wide and non-namespaced resources.",
    back: "A <strong>ClusterRole</strong> paired with a <strong>ClusterRoleBinding</strong> grants permissions across all namespaces or for cluster-scoped resources like Nodes and PersistentVolumes.",
    tags: ["Cluster RBAC", "ClusterRole", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-417",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ClusterRoles and ClusterRoleBindings (High Load Scale)",
    hint: "Cluster-scoped authorization for cluster-wide and non-namespaced resources.",
    back: "A <strong>ClusterRole</strong> paired with a <strong>ClusterRoleBinding</strong> grants permissions across all namespaces or for cluster-scoped resources like Nodes and PersistentVolumes.",
    tags: ["Cluster RBAC", "ClusterRole", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-418",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ClusterRoles and ClusterRoleBindings (Security Compliance)",
    hint: "Cluster-scoped authorization for cluster-wide and non-namespaced resources.",
    back: "A <strong>ClusterRole</strong> paired with a <strong>ClusterRoleBinding</strong> grants permissions across all namespaces or for cluster-scoped resources like Nodes and PersistentVolumes.",
    tags: ["Cluster RBAC", "ClusterRole", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-419",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ClusterRoles and ClusterRoleBindings (Hybrid Migration)",
    hint: "Cluster-scoped authorization for cluster-wide and non-namespaced resources.",
    back: "A <strong>ClusterRole</strong> paired with a <strong>ClusterRoleBinding</strong> grants permissions across all namespaces or for cluster-scoped resources like Nodes and PersistentVolumes.",
    tags: ["Cluster RBAC", "ClusterRole", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-420",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "ClusterRoles and ClusterRoleBindings (Resilience Failure)",
    hint: "Cluster-scoped authorization for cluster-wide and non-namespaced resources.",
    back: "A <strong>ClusterRole</strong> paired with a <strong>ClusterRoleBinding</strong> grants permissions across all namespaces or for cluster-scoped resources like Nodes and PersistentVolumes.",
    tags: ["Cluster RBAC", "ClusterRole", "Resilience Failure"]
  },
  {
    id: "k8s-cka-fc-421",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Bound ServiceAccount Tokens (Dr Failover)",
    hint: "Using projected service account tokens with audience and expiration bounds.",
    back: "<strong>Bound ServiceAccount Token Projection</strong> generates short-lived, audience-restricted tokens mounted into pods, replacing legacy indefinite ServiceAccount secrets with secure credentials.",
    tags: ["ServiceAccounts", "ServiceAccounts", "Dr Failover"]
  },
  {
    id: "k8s-cka-fc-422",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Bound ServiceAccount Tokens (High Load Scale)",
    hint: "Using projected service account tokens with audience and expiration bounds.",
    back: "<strong>Bound ServiceAccount Token Projection</strong> generates short-lived, audience-restricted tokens mounted into pods, replacing legacy indefinite ServiceAccount secrets with secure credentials.",
    tags: ["ServiceAccounts", "ServiceAccounts", "High Load Scale"]
  },
  {
    id: "k8s-cka-fc-423",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Bound ServiceAccount Tokens (Security Compliance)",
    hint: "Using projected service account tokens with audience and expiration bounds.",
    back: "<strong>Bound ServiceAccount Token Projection</strong> generates short-lived, audience-restricted tokens mounted into pods, replacing legacy indefinite ServiceAccount secrets with secure credentials.",
    tags: ["ServiceAccounts", "ServiceAccounts", "Security Compliance"]
  },
  {
    id: "k8s-cka-fc-424",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Bound ServiceAccount Tokens (Hybrid Migration)",
    hint: "Using projected service account tokens with audience and expiration bounds.",
    back: "<strong>Bound ServiceAccount Token Projection</strong> generates short-lived, audience-restricted tokens mounted into pods, replacing legacy indefinite ServiceAccount secrets with secure credentials.",
    tags: ["ServiceAccounts", "ServiceAccounts", "Hybrid Migration"]
  },
  {
    id: "k8s-cka-fc-425",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d4",
    front: "Bound ServiceAccount Tokens (Resilience Failure)",
    hint: "Using projected service account tokens with audience and expiration bounds.",
    back: "<strong>Bound ServiceAccount Token Projection</strong> generates short-lived, audience-restricted tokens mounted into pods, replacing legacy indefinite ServiceAccount secrets with secure credentials.",
    tags: ["ServiceAccounts", "ServiceAccounts", "Resilience Failure"]
  }
];

export default K8S_CKA_FLASHCARDS_18;
