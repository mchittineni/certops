export const K8S_CKA_QUESTIONS_16 = [
  {
    id: "k8s-cka-351",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deployments and Rolling Updates: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to update a stateless web application deployment to a new container image version without dropping incoming user requests.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Set a `RollingUpdate` strategy with `maxSurge` and `maxUnavailable` on the Deployment." },
      { id: 'B', text: "Set a `Recreate` strategy so the old pods stop before the new ones are started." },
      { id: 'C', text: "Set `minReadySeconds` high enough that the rollout pauses between each new pod." },
      { id: 'D', text: "Set `revisionHistoryLimit: 0` so the rollout replaces pods without keeping history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a RollingUpdate strategy in the Deployment spec with appropriate `maxSurge` and `maxUnavailable` parameters. The `RollingUpdate` strategy incrementally replaces old pods with new pods. Tuning `maxSurge` (how many pods can be created above the desired replica count) and `maxUnavailable` (how many pods can be unavailable during the update) guarantees continuous service capacity with zero downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployments","Deployments","Dr Failover"]
  },
  {
    id: "k8s-cka-352",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deployments and Rolling Updates: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to update a stateless web application deployment to a new container image version without dropping incoming user requests.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Set a `RollingUpdate` strategy with `maxSurge` and `maxUnavailable` on the Deployment." },
      { id: 'B', text: "Set a `Recreate` strategy so the old pods stop before the new ones are started." },
      { id: 'C', text: "Set `minReadySeconds` high enough that the rollout pauses between each new pod." },
      { id: 'D', text: "Set `revisionHistoryLimit: 0` so the rollout replaces pods without keeping history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a RollingUpdate strategy in the Deployment spec with appropriate `maxSurge` and `maxUnavailable` parameters. The `RollingUpdate` strategy incrementally replaces old pods with new pods. Tuning `maxSurge` (how many pods can be created above the desired replica count) and `maxUnavailable` (how many pods can be unavailable during the update) guarantees continuous service capacity with zero downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployments","Deployments","High Load Scale"]
  },
  {
    id: "k8s-cka-353",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deployments and Rolling Updates: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to update a stateless web application deployment to a new container image version without dropping incoming user requests.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set `minReadySeconds` high enough that the rollout pauses between each new pod." },
      { id: 'B', text: "Set a `Recreate` strategy so the old pods stop before the new ones are started." },
      { id: 'C', text: "Set `revisionHistoryLimit: 0` so the rollout replaces pods without keeping history." },
      { id: 'D', text: "Set a `RollingUpdate` strategy with `maxSurge` and `maxUnavailable` on the Deployment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure a RollingUpdate strategy in the Deployment spec with appropriate `maxSurge` and `maxUnavailable` parameters. The `RollingUpdate` strategy incrementally replaces old pods with new pods. Tuning `maxSurge` (how many pods can be created above the desired replica count) and `maxUnavailable` (how many pods can be unavailable during the update) guarantees continuous service capacity with zero downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployments","Deployments","Security Compliance"]
  },
  {
    id: "k8s-cka-354",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deployments and Rolling Updates: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to update a stateless web application deployment to a new container image version without dropping incoming user requests.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Set a `RollingUpdate` strategy with `maxSurge` and `maxUnavailable` on the Deployment." },
      { id: 'B', text: "Set a `Recreate` strategy so the old pods stop before the new ones are started." },
      { id: 'C', text: "Set `minReadySeconds` high enough that the rollout pauses between each new pod." },
      { id: 'D', text: "Set `revisionHistoryLimit: 0` so the rollout replaces pods without keeping history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a RollingUpdate strategy in the Deployment spec with appropriate `maxSurge` and `maxUnavailable` parameters. The `RollingUpdate` strategy incrementally replaces old pods with new pods. Tuning `maxSurge` (how many pods can be created above the desired replica count) and `maxUnavailable` (how many pods can be unavailable during the update) guarantees continuous service capacity with zero downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployments","Deployments","Hybrid Migration"]
  },
  {
    id: "k8s-cka-355",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Deployments and Rolling Updates: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to update a stateless web application deployment to a new container image version without dropping incoming user requests.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Set a `RollingUpdate` strategy with `maxSurge` and `maxUnavailable` on the Deployment." },
      { id: 'B', text: "Set a `Recreate` strategy so the old pods stop before the new ones are started." },
      { id: 'C', text: "Set `minReadySeconds` high enough that the rollout pauses between each new pod." },
      { id: 'D', text: "Set `revisionHistoryLimit: 0` so the rollout replaces pods without keeping history." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure a RollingUpdate strategy in the Deployment spec with appropriate `maxSurge` and `maxUnavailable` parameters. The `RollingUpdate` strategy incrementally replaces old pods with new pods. Tuning `maxSurge` (how many pods can be created above the desired replica count) and `maxUnavailable` (how many pods can be unavailable during the update) guarantees continuous service capacity with zero downtime.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployments","Deployments","Resilience Failure"]
  },
  {
    id: "k8s-cka-356",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "DaemonSets for Node-Level Services: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to ensure that an operational monitoring agent and log forwarder runs exactly once on every worker node in the cluster, including newly added nodes.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Deploy the agent as a `Deployment` scaled to the current node count." },
      { id: 'B', text: "Deploy the agent as a `DaemonSet`, with tolerations for the tainted nodes." },
      { id: 'C', text: "Deploy the agent as a static pod in each node's own manifest directory." },
      { id: 'D', text: "Deploy the agent as a `CronJob` that starts a pod on each node every minute." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy the monitoring agent as a `DaemonSet` with appropriate tolerations for control plane or tainted nodes. A `DaemonSet` ensures that all (or some) nodes run a copy of a pod. As nodes are added to the cluster, the DaemonSet controller automatically adds pods to them; as nodes are removed, those pods are garbage collected, making it ideal for cluster-wide logging and monitoring agents.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSets","DaemonSets","Dr Failover"]
  },
  {
    id: "k8s-cka-357",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "DaemonSets for Node-Level Services: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to ensure that an operational monitoring agent and log forwarder runs exactly once on every worker node in the cluster, including newly added nodes.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Deploy the agent as a `DaemonSet`, with tolerations for the tainted nodes." },
      { id: 'B', text: "Deploy the agent as a `Deployment` scaled to the current node count." },
      { id: 'C', text: "Deploy the agent as a `CronJob` that starts a pod on each node every minute." },
      { id: 'D', text: "Deploy the agent as a static pod in each node's own manifest directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the monitoring agent as a `DaemonSet` with appropriate tolerations for control plane or tainted nodes. A `DaemonSet` ensures that all (or some) nodes run a copy of a pod. As nodes are added to the cluster, the DaemonSet controller automatically adds pods to them; as nodes are removed, those pods are garbage collected, making it ideal for cluster-wide logging and monitoring agents.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSets","DaemonSets","High Load Scale"]
  },
  {
    id: "k8s-cka-358",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "DaemonSets for Node-Level Services: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to ensure that an operational monitoring agent and log forwarder runs exactly once on every worker node in the cluster, including newly added nodes.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Deploy the agent as a `DaemonSet`, with tolerations for the tainted nodes." },
      { id: 'B', text: "Deploy the agent as a `Deployment` scaled to the current node count." },
      { id: 'C', text: "Deploy the agent as a `CronJob` that starts a pod on each node every minute." },
      { id: 'D', text: "Deploy the agent as a static pod in each node's own manifest directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the monitoring agent as a `DaemonSet` with appropriate tolerations for control plane or tainted nodes. A `DaemonSet` ensures that all (or some) nodes run a copy of a pod. As nodes are added to the cluster, the DaemonSet controller automatically adds pods to them; as nodes are removed, those pods are garbage collected, making it ideal for cluster-wide logging and monitoring agents.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSets","DaemonSets","Security Compliance"]
  },
  {
    id: "k8s-cka-359",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "DaemonSets for Node-Level Services: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to ensure that an operational monitoring agent and log forwarder runs exactly once on every worker node in the cluster, including newly added nodes.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Deploy the agent as a `DaemonSet`, with tolerations for the tainted nodes." },
      { id: 'B', text: "Deploy the agent as a `Deployment` scaled to the current node count." },
      { id: 'C', text: "Deploy the agent as a `CronJob` that starts a pod on each node every minute." },
      { id: 'D', text: "Deploy the agent as a static pod in each node's own manifest directory." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the monitoring agent as a `DaemonSet` with appropriate tolerations for control plane or tainted nodes. A `DaemonSet` ensures that all (or some) nodes run a copy of a pod. As nodes are added to the cluster, the DaemonSet controller automatically adds pods to them; as nodes are removed, those pods are garbage collected, making it ideal for cluster-wide logging and monitoring agents.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSets","DaemonSets","Hybrid Migration"]
  },
  {
    id: "k8s-cka-360",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "DaemonSets for Node-Level Services: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to ensure that an operational monitoring agent and log forwarder runs exactly once on every worker node in the cluster, including newly added nodes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Deploy the agent as a `CronJob` that starts a pod on each node every minute." },
      { id: 'B', text: "Deploy the agent as a `Deployment` scaled to the current node count." },
      { id: 'C', text: "Deploy the agent as a static pod in each node's own manifest directory." },
      { id: 'D', text: "Deploy the agent as a `DaemonSet`, with tolerations for the tainted nodes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy the monitoring agent as a `DaemonSet` with appropriate tolerations for control plane or tainted nodes. A `DaemonSet` ensures that all (or some) nodes run a copy of a pod. As nodes are added to the cluster, the DaemonSet controller automatically adds pods to them; as nodes are removed, those pods are garbage collected, making it ideal for cluster-wide logging and monitoring agents.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSets","DaemonSets","Resilience Failure"]
  },
  {
    id: "k8s-cka-361",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "StatefulSets and Persistent Identity: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to deploy a distributed clustered database (like Cassandra or ZooKeeper) requiring stable network hostnames and dedicated persistent storage per replica.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`." },
      { id: 'B', text: "Run the database inside an ephemeral Job controller." },
      { id: 'C', text: "Deploy the database as a standard stateless Deployment sharing a single PersistentVolume." },
      { id: 'D', text: "Deploy the database as a ReplicaSet using hostPort networking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`. A `StatefulSet` provides unique, ordinal pod identifiers (`pod-0`, `pod-1`), persistent storage dynamically provisioned per replica via `volumeClaimTemplates`, and stable network identities when paired with a headless Service, satisfying distributed database clustering requirements.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSets","StatefulSets","Dr Failover"]
  },
  {
    id: "k8s-cka-362",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "StatefulSets and Persistent Identity: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to deploy a distributed clustered database (like Cassandra or ZooKeeper) requiring stable network hostnames and dedicated persistent storage per replica.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`." },
      { id: 'B', text: "Deploy the database as a standard stateless Deployment sharing a single PersistentVolume." },
      { id: 'C', text: "Deploy the database as a ReplicaSet using hostPort networking." },
      { id: 'D', text: "Run the database inside an ephemeral Job controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`. A `StatefulSet` provides unique, ordinal pod identifiers (`pod-0`, `pod-1`), persistent storage dynamically provisioned per replica via `volumeClaimTemplates`, and stable network identities when paired with a headless Service, satisfying distributed database clustering requirements.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSets","StatefulSets","High Load Scale"]
  },
  {
    id: "k8s-cka-363",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "StatefulSets and Persistent Identity: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to deploy a distributed clustered database (like Cassandra or ZooKeeper) requiring stable network hostnames and dedicated persistent storage per replica.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Deploy the database as a ReplicaSet using hostPort networking." },
      { id: 'B', text: "Run the database inside an ephemeral Job controller." },
      { id: 'C', text: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`." },
      { id: 'D', text: "Deploy the database as a standard stateless Deployment sharing a single PersistentVolume." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`. A `StatefulSet` provides unique, ordinal pod identifiers (`pod-0`, `pod-1`), persistent storage dynamically provisioned per replica via `volumeClaimTemplates`, and stable network identities when paired with a headless Service, satisfying distributed database clustering requirements.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSets","StatefulSets","Security Compliance"]
  },
  {
    id: "k8s-cka-364",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "StatefulSets and Persistent Identity: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to deploy a distributed clustered database (like Cassandra or ZooKeeper) requiring stable network hostnames and dedicated persistent storage per replica.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`." },
      { id: 'B', text: "Deploy the database as a standard stateless Deployment sharing a single PersistentVolume." },
      { id: 'C', text: "Deploy the database as a ReplicaSet using hostPort networking." },
      { id: 'D', text: "Run the database inside an ephemeral Job controller." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`. A `StatefulSet` provides unique, ordinal pod identifiers (`pod-0`, `pod-1`), persistent storage dynamically provisioned per replica via `volumeClaimTemplates`, and stable network identities when paired with a headless Service, satisfying distributed database clustering requirements.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSets","StatefulSets","Hybrid Migration"]
  },
  {
    id: "k8s-cka-365",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "StatefulSets and Persistent Identity: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to deploy a distributed clustered database (like Cassandra or ZooKeeper) requiring stable network hostnames and dedicated persistent storage per replica.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`." },
      { id: 'B', text: "Deploy the database as a ReplicaSet using hostPort networking." },
      { id: 'C', text: "Run the database inside an ephemeral Job controller." },
      { id: 'D', text: "Deploy the database as a standard stateless Deployment sharing a single PersistentVolume." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the database as a `StatefulSet` accompanied by a Headless Service and `volumeClaimTemplates`. A `StatefulSet` provides unique, ordinal pod identifiers (`pod-0`, `pod-1`), persistent storage dynamically provisioned per replica via `volumeClaimTemplates`, and stable network identities when paired with a headless Service, satisfying distributed database clustering requirements.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSets","StatefulSets","Resilience Failure"]
  },
  {
    id: "k8s-cka-366",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Jobs and CronJobs for Batch Processing: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to execute a nightly database backup script that runs at 2:00 AM, retries up to three times on failure, and avoids launching concurrent duplicate runs.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Create a `CronJob` with the schedule and `concurrencyPolicy: Allow` for overlapping runs." },
      { id: 'B', text: "Create a `Job` with `completions: 1` and re-create it from a workflow each night." },
      { id: 'C', text: "Create a `CronJob` with the schedule, `concurrencyPolicy: Forbid` and a `backoffLimit`." },
      { id: 'D', text: "Create a `DaemonSet` that runs the backup script on each node at the same hour." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `CronJob` with `schedule: \"0 2 * * *\"`, `concurrencyPolicy: Forbid`, and `backoffLimit: 3` in the job template. Kubernetes `CronJobs` run batch tasks on a schedule using standard cron format. Setting `concurrencyPolicy: Forbid` prevents a new job from starting if the previous execution is still running, while `backoffLimit` controls how many times the Job controller retries failed pods before marking it failed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["Batch Workloads","CronJobs","Dr Failover"]
  },
  {
    id: "k8s-cka-367",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Jobs and CronJobs for Batch Processing: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to execute a nightly database backup script that runs at 2:00 AM, retries up to three times on failure, and avoids launching concurrent duplicate runs.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Create a `CronJob` with the schedule, `concurrencyPolicy: Forbid` and a `backoffLimit`." },
      { id: 'B', text: "Create a `Job` with `completions: 1` and re-create it from a workflow each night." },
      { id: 'C', text: "Create a `DaemonSet` that runs the backup script on each node at the same hour." },
      { id: 'D', text: "Create a `CronJob` with the schedule and `concurrencyPolicy: Allow` for overlapping runs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `CronJob` with `schedule: \"0 2 * * *\"`, `concurrencyPolicy: Forbid`, and `backoffLimit: 3` in the job template. Kubernetes `CronJobs` run batch tasks on a schedule using standard cron format. Setting `concurrencyPolicy: Forbid` prevents a new job from starting if the previous execution is still running, while `backoffLimit` controls how many times the Job controller retries failed pods before marking it failed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["Batch Workloads","CronJobs","High Load Scale"]
  },
  {
    id: "k8s-cka-368",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Jobs and CronJobs for Batch Processing: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to execute a nightly database backup script that runs at 2:00 AM, retries up to three times on failure, and avoids launching concurrent duplicate runs.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Create a `CronJob` with the schedule, `concurrencyPolicy: Forbid` and a `backoffLimit`." },
      { id: 'B', text: "Create a `Job` with `completions: 1` and re-create it from a workflow each night." },
      { id: 'C', text: "Create a `DaemonSet` that runs the backup script on each node at the same hour." },
      { id: 'D', text: "Create a `CronJob` with the schedule and `concurrencyPolicy: Allow` for overlapping runs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `CronJob` with `schedule: \"0 2 * * *\"`, `concurrencyPolicy: Forbid`, and `backoffLimit: 3` in the job template. Kubernetes `CronJobs` run batch tasks on a schedule using standard cron format. Setting `concurrencyPolicy: Forbid` prevents a new job from starting if the previous execution is still running, while `backoffLimit` controls how many times the Job controller retries failed pods before marking it failed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["Batch Workloads","CronJobs","Security Compliance"]
  },
  {
    id: "k8s-cka-369",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Jobs and CronJobs for Batch Processing: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to execute a nightly database backup script that runs at 2:00 AM, retries up to three times on failure, and avoids launching concurrent duplicate runs.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Create a `Job` with `completions: 1` and re-create it from a workflow each night." },
      { id: 'B', text: "Create a `DaemonSet` that runs the backup script on each node at the same hour." },
      { id: 'C', text: "Create a `CronJob` with the schedule, `concurrencyPolicy: Forbid` and a `backoffLimit`." },
      { id: 'D', text: "Create a `CronJob` with the schedule and `concurrencyPolicy: Allow` for overlapping runs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `CronJob` with `schedule: \"0 2 * * *\"`, `concurrencyPolicy: Forbid`, and `backoffLimit: 3` in the job template. Kubernetes `CronJobs` run batch tasks on a schedule using standard cron format. Setting `concurrencyPolicy: Forbid` prevents a new job from starting if the previous execution is still running, while `backoffLimit` controls how many times the Job controller retries failed pods before marking it failed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["Batch Workloads","CronJobs","Hybrid Migration"]
  },
  {
    id: "k8s-cka-370",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Jobs and CronJobs for Batch Processing: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to execute a nightly database backup script that runs at 2:00 AM, retries up to three times on failure, and avoids launching concurrent duplicate runs.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Create a `CronJob` with the schedule, `concurrencyPolicy: Forbid` and a `backoffLimit`." },
      { id: 'B', text: "Create a `Job` with `completions: 1` and re-create it from a workflow each night." },
      { id: 'C', text: "Create a `DaemonSet` that runs the backup script on each node at the same hour." },
      { id: 'D', text: "Create a `CronJob` with the schedule and `concurrencyPolicy: Allow` for overlapping runs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create a `CronJob` with `schedule: \"0 2 * * *\"`, `concurrencyPolicy: Forbid`, and `backoffLimit: 3` in the job template. Kubernetes `CronJobs` run batch tasks on a schedule using standard cron format. Setting `concurrencyPolicy: Forbid` prevents a new job from starting if the previous execution is still running, while `backoffLimit` controls how many times the Job controller retries failed pods before marking it failed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["Batch Workloads","CronJobs","Resilience Failure"]
  },
  {
    id: "k8s-cka-371",
    difficulty: "hard",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Node Affinity and Pod Anti-Affinity: Dr Failover",
    scenario: "A platform engineering team is establishing high-availability standards and operational disaster recovery procedures for enterprise Kubernetes clusters. The Kubernetes administrator needs to ensure that replica pods of a critical payment service are never placed on the same worker node to eliminate single node failure risk.",
    question: "Which architectural approach or configuration satisfies these cluster reliability and recovery requirements?",
    options: [
      { id: 'A', text: "Set `podAntiAffinity` with `requiredDuringSchedulingIgnoredDuringExecution` on the payment pod labels." },
      { id: 'B', text: "Set `podAntiAffinity` with `preferredDuringSchedulingIgnoredDuringExecution` on those same labels." },
      { id: 'C', text: "Set `topologySpreadConstraints` on the hostname key with `whenUnsatisfiable: ScheduleAnyway`." },
      { id: 'D', text: "Set `nodeSelector` on a labelled node pool so the replicas land only on the payment nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `podAntiAffinity` in the deployment pod template using `requiredDuringSchedulingIgnoredDuringExecution` matching the payment pod labels. `podAntiAffinity` tells the scheduler not to co-locate pods that match specified labels on nodes that share a particular topology key (e.g., `kubernetes.io/hostname`). Using `requiredDuringSchedulingIgnoredDuringExecution` strictly enforces that no two matching pods run on the same node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Pod Scheduling","Affinity & Anti-Affinity","Dr Failover"]
  },
  {
    id: "k8s-cka-372",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Node Affinity and Pod Anti-Affinity: High Load Scale",
    scenario: "A production Kubernetes cluster experiences massive surges in application traffic and high scheduling demands across large worker node pools. The Kubernetes administrator needs to ensure that replica pods of a critical payment service are never placed on the same worker node to eliminate single node failure risk.",
    question: "Which architectural approach should the administrator select to manage this demand efficiently without cluster instability?",
    options: [
      { id: 'A', text: "Set `nodeSelector` on a labelled node pool so the replicas land only on the payment nodes." },
      { id: 'B', text: "Set `podAntiAffinity` with `requiredDuringSchedulingIgnoredDuringExecution` on the payment pod labels." },
      { id: 'C', text: "Set `topologySpreadConstraints` on the hostname key with `whenUnsatisfiable: ScheduleAnyway`." },
      { id: 'D', text: "Set `podAntiAffinity` with `preferredDuringSchedulingIgnoredDuringExecution` on those same labels." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `podAntiAffinity` in the deployment pod template using `requiredDuringSchedulingIgnoredDuringExecution` matching the payment pod labels. `podAntiAffinity` tells the scheduler not to co-locate pods that match specified labels on nodes that share a particular topology key (e.g., `kubernetes.io/hostname`). Using `requiredDuringSchedulingIgnoredDuringExecution` strictly enforces that no two matching pods run on the same node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Pod Scheduling","Affinity & Anti-Affinity","High Load Scale"]
  },
  {
    id: "k8s-cka-373",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Node Affinity and Pod Anti-Affinity: Security Compliance",
    scenario: "A compliance auditor requires strict isolation of cluster resources, least-privilege administrative access, and secure network traffic policies across all namespaces. The Kubernetes administrator needs to ensure that replica pods of a critical payment service are never placed on the same worker node to eliminate single node failure risk.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Set `topologySpreadConstraints` on the hostname key with `whenUnsatisfiable: ScheduleAnyway`." },
      { id: 'B', text: "Set `podAntiAffinity` with `preferredDuringSchedulingIgnoredDuringExecution` on those same labels." },
      { id: 'C', text: "Set `nodeSelector` on a labelled node pool so the replicas land only on the payment nodes." },
      { id: 'D', text: "Set `podAntiAffinity` with `requiredDuringSchedulingIgnoredDuringExecution` on the payment pod labels." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `podAntiAffinity` in the deployment pod template using `requiredDuringSchedulingIgnoredDuringExecution` matching the payment pod labels. `podAntiAffinity` tells the scheduler not to co-locate pods that match specified labels on nodes that share a particular topology key (e.g., `kubernetes.io/hostname`). Using `requiredDuringSchedulingIgnoredDuringExecution` strictly enforces that no two matching pods run on the same node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Pod Scheduling","Affinity & Anti-Affinity","Security Compliance"]
  },
  {
    id: "k8s-cka-374",
    difficulty: "easy",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Node Affinity and Pod Anti-Affinity: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises virtualized infrastructure and migrating core enterprise workloads into production Kubernetes clusters. The Kubernetes administrator needs to ensure that replica pods of a critical payment service are never placed on the same worker node to eliminate single node failure risk.",
    question: "Which operational pattern or feature enables the engineering team to achieve seamless workload execution with minimal complexity?",
    options: [
      { id: 'A', text: "Set `nodeSelector` on a labelled node pool so the replicas land only on the payment nodes." },
      { id: 'B', text: "Set `topologySpreadConstraints` on the hostname key with `whenUnsatisfiable: ScheduleAnyway`." },
      { id: 'C', text: "Set `podAntiAffinity` with `preferredDuringSchedulingIgnoredDuringExecution` on those same labels." },
      { id: 'D', text: "Set `podAntiAffinity` with `requiredDuringSchedulingIgnoredDuringExecution` on the payment pod labels." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `podAntiAffinity` in the deployment pod template using `requiredDuringSchedulingIgnoredDuringExecution` matching the payment pod labels. `podAntiAffinity` tells the scheduler not to co-locate pods that match specified labels on nodes that share a particular topology key (e.g., `kubernetes.io/hostname`). Using `requiredDuringSchedulingIgnoredDuringExecution` strictly enforces that no two matching pods run on the same node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Pod Scheduling","Affinity & Anti-Affinity","Hybrid Migration"]
  },
  {
    id: "k8s-cka-375",
    difficulty: "medium",
    certId: "k8s-cka",
    domainId: "d3",
    domainName: "Workloads & Scheduling",
    title: "Node Affinity and Pod Anti-Affinity: Resilience Failure",
    scenario: "A cluster operations team is hardening infrastructure to eliminate single points of failure, streamline node maintenance, and automate self-healing. The Kubernetes administrator needs to ensure that replica pods of a critical payment service are never placed on the same worker node to eliminate single node failure risk.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees cluster stability?",
    options: [
      { id: 'A', text: "Set `podAntiAffinity` with `requiredDuringSchedulingIgnoredDuringExecution` on the payment pod labels." },
      { id: 'B', text: "Set `podAntiAffinity` with `preferredDuringSchedulingIgnoredDuringExecution` on those same labels." },
      { id: 'C', text: "Set `topologySpreadConstraints` on the hostname key with `whenUnsatisfiable: ScheduleAnyway`." },
      { id: 'D', text: "Set `nodeSelector` on a labelled node pool so the replicas land only on the payment nodes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `podAntiAffinity` in the deployment pod template using `requiredDuringSchedulingIgnoredDuringExecution` matching the payment pod labels. `podAntiAffinity` tells the scheduler not to co-locate pods that match specified labels on nodes that share a particular topology key (e.g., `kubernetes.io/hostname`). Using `requiredDuringSchedulingIgnoredDuringExecution` strictly enforces that no two matching pods run on the same node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity",
    tags: ["Pod Scheduling","Affinity & Anti-Affinity","Resilience Failure"]
  }
];

export default K8S_CKA_QUESTIONS_16;
