export const K8S_CKAD_QUESTIONS_14 = [
  {
    id: "k8s-ckad-326",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Set `concurrencyPolicy: Forbid` with a short `startingDeadlineSeconds` on the CronJob spec." },
      { id: 'B', text: "Set `concurrencyPolicy: Replace` so each missed run supersedes the run before it." },
      { id: 'C', text: "Set `suspend: true` for the duration of the outage and clear it once the cluster recovers." },
      { id: 'D', text: "Set `failedJobsHistoryLimit: 1` so the backlog of missed runs is pruned as it drains." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management","CronJob Policies","Dr Failover"]
  },
  {
    id: "k8s-ckad-327",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Set `concurrencyPolicy: Forbid` with a short `startingDeadlineSeconds` on the CronJob spec." },
      { id: 'B', text: "Set `concurrencyPolicy: Replace` so each missed run supersedes the run before it." },
      { id: 'C', text: "Set `suspend: true` for the duration of the outage and clear it once the cluster recovers." },
      { id: 'D', text: "Set `failedJobsHistoryLimit: 1` so the backlog of missed runs is pruned as it drains." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management","CronJob Policies","High Load Scale"]
  },
  {
    id: "k8s-ckad-328",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Set `failedJobsHistoryLimit: 1` so the backlog of missed runs is pruned as it drains." },
      { id: 'B', text: "Set `concurrencyPolicy: Forbid` with a short `startingDeadlineSeconds` on the CronJob spec." },
      { id: 'C', text: "Set `suspend: true` for the duration of the outage and clear it once the cluster recovers." },
      { id: 'D', text: "Set `concurrencyPolicy: Replace` so each missed run supersedes the run before it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management","CronJob Policies","Security Compliance"]
  },
  {
    id: "k8s-ckad-329",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Set `failedJobsHistoryLimit: 1` so the backlog of missed runs is pruned as it drains." },
      { id: 'B', text: "Set `suspend: true` for the duration of the outage and clear it once the cluster recovers." },
      { id: 'C', text: "Set `concurrencyPolicy: Replace` so each missed run supersedes the run before it." },
      { id: 'D', text: "Set `concurrencyPolicy: Forbid` with a short `startingDeadlineSeconds` on the CronJob spec." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management","CronJob Policies","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-330",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Set `concurrencyPolicy: Forbid` with a short `startingDeadlineSeconds` on the CronJob spec." },
      { id: 'B', text: "Set `concurrencyPolicy: Replace` so each missed run supersedes the run before it." },
      { id: 'C', text: "Set `suspend: true` for the duration of the outage and clear it once the cluster recovers." },
      { id: 'D', text: "Set `failedJobsHistoryLimit: 1` so the backlog of missed runs is pruned as it drains." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management","CronJob Policies","Resilience Failure"]
  },
  {
    id: "k8s-ckad-331",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: OrderedReady` on the StatefulSet." },
      { id: 'B', text: "Set `spec.updateStrategy.type: OnDelete` on the StatefulSet." },
      { id: 'C', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet." },
      { id: 'D', text: "Set `spec.minReadySeconds: 0` on the StatefulSet." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies","StatefulSet Policies","Dr Failover"]
  },
  {
    id: "k8s-ckad-332",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: OrderedReady` on the StatefulSet." },
      { id: 'B', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet." },
      { id: 'C', text: "Set `spec.minReadySeconds: 0` on the StatefulSet." },
      { id: 'D', text: "Set `spec.updateStrategy.type: OnDelete` on the StatefulSet." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies","StatefulSet Policies","High Load Scale"]
  },
  {
    id: "k8s-ckad-333",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Set `spec.minReadySeconds: 0` on the StatefulSet." },
      { id: 'B', text: "Set `spec.updateStrategy.type: OnDelete` on the StatefulSet." },
      { id: 'C', text: "Set `spec.podManagementPolicy: OrderedReady` on the StatefulSet." },
      { id: 'D', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies","StatefulSet Policies","Security Compliance"]
  },
  {
    id: "k8s-ckad-334",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: OrderedReady` on the StatefulSet." },
      { id: 'B', text: "Set `spec.minReadySeconds: 0` on the StatefulSet." },
      { id: 'C', text: "Set `spec.updateStrategy.type: OnDelete` on the StatefulSet." },
      { id: 'D', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies","StatefulSet Policies","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-335",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: OrderedReady` on the StatefulSet." },
      { id: 'B', text: "Set `spec.minReadySeconds: 0` on the StatefulSet." },
      { id: 'C', text: "Set `spec.updateStrategy.type: OnDelete` on the StatefulSet." },
      { id: 'D', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies","StatefulSet Policies","Resilience Failure"]
  },
  {
    id: "k8s-ckad-336",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Set `revisionHistoryLimit: 0` on the Deployment so no ReplicaSet history is retained." },
      { id: 'B', text: "Set an `ownerReferences` TTL on the ReplicaSets so the collector removes them in turn." },
      { id: 'C', text: "Set `ttlSecondsAfterFinished` on the Deployment so completed rollouts are collected." },
      { id: 'D', text: "Set `revisionHistoryLimit` on the Deployment to the number of rollbacks worth keeping." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene","Revision History","Dr Failover"]
  },
  {
    id: "k8s-ckad-337",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Set `revisionHistoryLimit` on the Deployment to the number of rollbacks worth keeping." },
      { id: 'B', text: "Set an `ownerReferences` TTL on the ReplicaSets so the collector removes them in turn." },
      { id: 'C', text: "Set `revisionHistoryLimit: 0` on the Deployment so no ReplicaSet history is retained." },
      { id: 'D', text: "Set `ttlSecondsAfterFinished` on the Deployment so completed rollouts are collected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene","Revision History","High Load Scale"]
  },
  {
    id: "k8s-ckad-338",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Set `revisionHistoryLimit` on the Deployment to the number of rollbacks worth keeping." },
      { id: 'B', text: "Set an `ownerReferences` TTL on the ReplicaSets so the collector removes them in turn." },
      { id: 'C', text: "Set `revisionHistoryLimit: 0` on the Deployment so no ReplicaSet history is retained." },
      { id: 'D', text: "Set `ttlSecondsAfterFinished` on the Deployment so completed rollouts are collected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene","Revision History","Security Compliance"]
  },
  {
    id: "k8s-ckad-339",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Set `revisionHistoryLimit` on the Deployment to the number of rollbacks worth keeping." },
      { id: 'B', text: "Set an `ownerReferences` TTL on the ReplicaSets so the collector removes them in turn." },
      { id: 'C', text: "Set `revisionHistoryLimit: 0` on the Deployment so no ReplicaSet history is retained." },
      { id: 'D', text: "Set `ttlSecondsAfterFinished` on the Deployment so completed rollouts are collected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene","Revision History","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-340",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Set an `ownerReferences` TTL on the ReplicaSets so the collector removes them in turn." },
      { id: 'B', text: "Set `revisionHistoryLimit` on the Deployment to the number of rollbacks worth keeping." },
      { id: 'C', text: "Set `ttlSecondsAfterFinished` on the Deployment so completed rollouts are collected." },
      { id: 'D', text: "Set `revisionHistoryLimit: 0` on the Deployment so no ReplicaSet history is retained." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene","Revision History","Resilience Failure"]
  },
  {
    id: "k8s-ckad-341",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Package the manifests as a Helm chart and release each environment with `helm upgrade --install -f values-prod.yaml`." },
      { id: 'B', text: "Render the manifests in the pipeline with `envsubst` and apply the output, holding the variables in the CI settings." },
      { id: 'C', text: "Keep one Kustomize base and copy it into each environment's repository, editing the copy before it is applied." },
      { id: 'D', text: "Keep a full manifest set per environment and hold them in sync with a scheduled job that diffs them nightly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management","Helm Charts","Dr Failover"]
  },
  {
    id: "k8s-ckad-342",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Keep one Kustomize base and copy it into each environment's repository, editing the copy before it is applied." },
      { id: 'B', text: "Keep a full manifest set per environment and hold them in sync with a scheduled job that diffs them nightly." },
      { id: 'C', text: "Package the manifests as a Helm chart and release each environment with `helm upgrade --install -f values-prod.yaml`." },
      { id: 'D', text: "Render the manifests in the pipeline with `envsubst` and apply the output, holding the variables in the CI settings." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management","Helm Charts","High Load Scale"]
  },
  {
    id: "k8s-ckad-343",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Package the manifests as a Helm chart and release each environment with `helm upgrade --install -f values-prod.yaml`." },
      { id: 'B', text: "Render the manifests in the pipeline with `envsubst` and apply the output, holding the variables in the CI settings." },
      { id: 'C', text: "Keep one Kustomize base and copy it into each environment's repository, editing the copy before it is applied." },
      { id: 'D', text: "Keep a full manifest set per environment and hold them in sync with a scheduled job that diffs them nightly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management","Helm Charts","Security Compliance"]
  },
  {
    id: "k8s-ckad-344",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Package the manifests as a Helm chart and release each environment with `helm upgrade --install -f values-prod.yaml`." },
      { id: 'B', text: "Render the manifests in the pipeline with `envsubst` and apply the output, holding the variables in the CI settings." },
      { id: 'C', text: "Keep one Kustomize base and copy it into each environment's repository, editing the copy before it is applied." },
      { id: 'D', text: "Keep a full manifest set per environment and hold them in sync with a scheduled job that diffs them nightly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management","Helm Charts","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-345",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Package the manifests as a Helm chart and release each environment with `helm upgrade --install -f values-prod.yaml`." },
      { id: 'B', text: "Keep a full manifest set per environment and hold them in sync with a scheduled job that diffs them nightly." },
      { id: 'C', text: "Render the manifests in the pipeline with `envsubst` and apply the output, holding the variables in the CI settings." },
      { id: 'D', text: "Keep one Kustomize base and copy it into each environment's repository, editing the copy before it is applied." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management","Helm Charts","Resilience Failure"]
  },
  {
    id: "k8s-ckad-346",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives?",
    options: [
      { id: 'A', text: "Structure the manifests as a Kustomize `base` with one `overlay` directory per environment." },
      { id: 'B', text: "Structure the manifests as a Helm chart with one templated `values.yaml` per environment." },
      { id: 'C', text: "Keep one manifest set and apply the per-environment differences with `kubectl patch` in CI." },
      { id: 'D', text: "Keep one manifest set and override the fields at apply time with `kubectl set image` calls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization","Kustomize","Dr Failover"]
  },
  {
    id: "k8s-ckad-347",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability?",
    options: [
      { id: 'A', text: "Structure the manifests as a Kustomize `base` with one `overlay` directory per environment." },
      { id: 'B', text: "Structure the manifests as a Helm chart with one templated `values.yaml` per environment." },
      { id: 'C', text: "Keep one manifest set and apply the per-environment differences with `kubectl patch` in CI." },
      { id: 'D', text: "Keep one manifest set and override the fields at apply time with `kubectl set image` calls." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization","Kustomize","High Load Scale"]
  },
  {
    id: "k8s-ckad-348",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which solution properly implements these mandatory container and cluster security controls?",
    options: [
      { id: 'A', text: "Keep one manifest set and override the fields at apply time with `kubectl set image` calls." },
      { id: 'B', text: "Keep one manifest set and apply the per-environment differences with `kubectl patch` in CI." },
      { id: 'C', text: "Structure the manifests as a Helm chart with one templated `values.yaml` per environment." },
      { id: 'D', text: "Structure the manifests as a Kustomize `base` with one `overlay` directory per environment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization","Kustomize","Security Compliance"]
  },
  {
    id: "k8s-ckad-349",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction?",
    options: [
      { id: 'A', text: "Structure the manifests as a Helm chart with one templated `values.yaml` per environment." },
      { id: 'B', text: "Keep one manifest set and override the fields at apply time with `kubectl set image` calls." },
      { id: 'C', text: "Keep one manifest set and apply the per-environment differences with `kubectl patch` in CI." },
      { id: 'D', text: "Structure the manifests as a Kustomize `base` with one `overlay` directory per environment." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization","Kustomize","Hybrid Migration"]
  },
  {
    id: "k8s-ckad-350",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability?",
    options: [
      { id: 'A', text: "Keep one manifest set and apply the per-environment differences with `kubectl patch` in CI." },
      { id: 'B', text: "Structure the manifests as a Kustomize `base` with one `overlay` directory per environment." },
      { id: 'C', text: "Structure the manifests as a Helm chart with one templated `values.yaml` per environment." },
      { id: 'D', text: "Keep one manifest set and override the fields at apply time with `kubectl set image` calls." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization","Kustomize","Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_14;
