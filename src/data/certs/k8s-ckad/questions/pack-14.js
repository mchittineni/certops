export const K8S_CKAD_QUESTIONS_14 = [
  {
    id: "k8s-ckad-326",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Configuring startingDeadlineSeconds and concurrencyPolicy on CronJobs is under consideration.",
    options: [
      { id: 'A', text: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec." },
      { id: 'B', text: "Set `concurrencyPolicy: Allow` and remove all execution deadlines." },
      { id: 'C', text: "Disable the CronJob controller permanently." },
      { id: 'D', text: "Set the schedule string to run once every ten seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management", "CronJob Policies", "Dr Failover"]
  },
  {
    id: "k8s-ckad-327",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Configuring startingDeadlineSeconds and concurrencyPolicy on CronJobs is under consideration.",
    options: [
      { id: 'A', text: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec." },
      { id: 'B', text: "Set `concurrencyPolicy: Allow` and remove all execution deadlines." },
      { id: 'C', text: "Disable the CronJob controller permanently." },
      { id: 'D', text: "Set the schedule string to run once every ten seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management", "CronJob Policies", "High Load Scale"]
  },
  {
    id: "k8s-ckad-328",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Configuring startingDeadlineSeconds and concurrencyPolicy on CronJobs is under consideration.",
    options: [
      { id: 'A', text: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec." },
      { id: 'B', text: "Set `concurrencyPolicy: Allow` and remove all execution deadlines." },
      { id: 'C', text: "Disable the CronJob controller permanently." },
      { id: 'D', text: "Set the schedule string to run once every ten seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management", "CronJob Policies", "Security Compliance"]
  },
  {
    id: "k8s-ckad-329",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Configuring startingDeadlineSeconds and concurrencyPolicy on CronJobs is under consideration.",
    options: [
      { id: 'A', text: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec." },
      { id: 'B', text: "Set `concurrencyPolicy: Allow` and remove all execution deadlines." },
      { id: 'C', text: "Disable the CronJob controller permanently." },
      { id: 'D', text: "Set the schedule string to run once every ten seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management", "CronJob Policies", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-330",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "CronJob Starting Deadline and Concurrency: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates CronJob Management to prevent scheduled report generation CronJobs from queueing up and launching dozens of simultaneous executions after a cluster control plane outage.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Configuring startingDeadlineSeconds and concurrencyPolicy on CronJobs is under consideration.",
    options: [
      { id: 'A', text: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec." },
      { id: 'B', text: "Set `concurrencyPolicy: Allow` and remove all execution deadlines." },
      { id: 'C', text: "Disable the CronJob controller permanently." },
      { id: 'D', text: "Set the schedule string to run once every ten seconds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `concurrencyPolicy: Forbid` and define a reasonable `startingDeadlineSeconds` (e.g., 60) on the CronJob spec. If a CronJob fails to start at its scheduled time (e.g., during controller downtime), `startingDeadlineSeconds` sets a cutoff after which missed jobs are counted as missed rather than queued. `concurrencyPolicy: Forbid` ensures that if a run takes longer than usual, subsequent jobs do not run concurrently.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations",
    tags: ["CronJob Management", "CronJob Policies", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-331",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? OrderedReady vs Parallel podManagementPolicy in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest." },
      { id: 'B', text: "Set `spec.podManagementPolicy: OrderedReady`." },
      { id: 'C', text: "Convert the StatefulSet into a DaemonSet." },
      { id: 'D', text: "Manually create 50 standalone unmanaged Pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "Dr Failover"]
  },
  {
    id: "k8s-ckad-332",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? OrderedReady vs Parallel podManagementPolicy in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest." },
      { id: 'B', text: "Set `spec.podManagementPolicy: OrderedReady`." },
      { id: 'C', text: "Convert the StatefulSet into a DaemonSet." },
      { id: 'D', text: "Manually create 50 standalone unmanaged Pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "High Load Scale"]
  },
  {
    id: "k8s-ckad-333",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which solution properly implements these mandatory container and cluster security controls? OrderedReady vs Parallel podManagementPolicy in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest." },
      { id: 'B', text: "Set `spec.podManagementPolicy: OrderedReady`." },
      { id: 'C', text: "Convert the StatefulSet into a DaemonSet." },
      { id: 'D', text: "Manually create 50 standalone unmanaged Pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "Security Compliance"]
  },
  {
    id: "k8s-ckad-334",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? OrderedReady vs Parallel podManagementPolicy in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest." },
      { id: 'B', text: "Set `spec.podManagementPolicy: OrderedReady`." },
      { id: 'C', text: "Convert the StatefulSet into a DaemonSet." },
      { id: 'D', text: "Manually create 50 standalone unmanaged Pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-335",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Managing StatefulSet Pod Management Policies: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates StatefulSet Policies to speed up scaling of a distributed cache StatefulSet where replicas do not depend on strict sequential ordering for startup or shutdown.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? OrderedReady vs Parallel podManagementPolicy in StatefulSets is under consideration.",
    options: [
      { id: 'A', text: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest." },
      { id: 'B', text: "Set `spec.podManagementPolicy: OrderedReady`." },
      { id: 'C', text: "Convert the StatefulSet into a DaemonSet." },
      { id: 'D', text: "Manually create 50 standalone unmanaged Pods." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.podManagementPolicy: Parallel` on the StatefulSet manifest. By default, StatefulSets use `podManagementPolicy: OrderedReady`, creating and terminating pods one by one in strict ordinal order. For stateful workloads that do not require strict ordering (such as read replicas or cache nodes), setting `Parallel` launches or terminates all pods simultaneously.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["StatefulSet Policies", "StatefulSet Policies", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-336",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Configuring revisionHistoryLimit to prune deprecated ReplicaSets is under consideration.",
    options: [
      { id: 'A', text: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification." },
      { id: 'B', text: "Manually delete old ReplicaSets using a custom bash loop script every morning." },
      { id: 'C', text: "Disable Deployment controllers and deploy bare Pods exclusively." },
      { id: 'D', text: "Set revisionHistoryLimit to 0 so no rollbacks are ever possible." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene", "Revision History", "Dr Failover"]
  },
  {
    id: "k8s-ckad-337",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Configuring revisionHistoryLimit to prune deprecated ReplicaSets is under consideration.",
    options: [
      { id: 'A', text: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification." },
      { id: 'B', text: "Manually delete old ReplicaSets using a custom bash loop script every morning." },
      { id: 'C', text: "Disable Deployment controllers and deploy bare Pods exclusively." },
      { id: 'D', text: "Set revisionHistoryLimit to 0 so no rollbacks are ever possible." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene", "Revision History", "High Load Scale"]
  },
  {
    id: "k8s-ckad-338",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Configuring revisionHistoryLimit to prune deprecated ReplicaSets is under consideration.",
    options: [
      { id: 'A', text: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification." },
      { id: 'B', text: "Manually delete old ReplicaSets using a custom bash loop script every morning." },
      { id: 'C', text: "Disable Deployment controllers and deploy bare Pods exclusively." },
      { id: 'D', text: "Set revisionHistoryLimit to 0 so no rollbacks are ever possible." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene", "Revision History", "Security Compliance"]
  },
  {
    id: "k8s-ckad-339",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Configuring revisionHistoryLimit to prune deprecated ReplicaSets is under consideration.",
    options: [
      { id: 'A', text: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification." },
      { id: 'B', text: "Manually delete old ReplicaSets using a custom bash loop script every morning." },
      { id: 'C', text: "Disable Deployment controllers and deploy bare Pods exclusively." },
      { id: 'D', text: "Set revisionHistoryLimit to 0 so no rollbacks are ever possible." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene", "Revision History", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-340",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Revision History Limits: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Resource Hygiene to prevent thousands of obsolete ReplicaSets and associated deployment metadata from cluttering the Kubernetes API server over months of CI/CD releases.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Configuring revisionHistoryLimit to prune deprecated ReplicaSets is under consideration.",
    options: [
      { id: 'A', text: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification." },
      { id: 'B', text: "Manually delete old ReplicaSets using a custom bash loop script every morning." },
      { id: 'C', text: "Disable Deployment controllers and deploy bare Pods exclusively." },
      { id: 'D', text: "Set revisionHistoryLimit to 0 so no rollbacks are ever possible." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `revisionHistoryLimit: 10` (or another appropriate number) in the Deployment specification. `revisionHistoryLimit` specifies the number of old ReplicaSets to retain to enable rollback. If unspecified, Kubernetes defaults to retaining 10 old ReplicaSets. Explicitly tuning this limit prevents resource bloat and excessive API server memory usage across high-frequency CI/CD pipelines.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["Resource Hygiene", "Revision History", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-341",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Declarative application deployments using Helm charts and values.yaml overrides is under consideration.",
    options: [
      { id: 'A', text: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`)." },
      { id: 'B', text: "Maintain completely separate sets of raw duplicate YAML files across dozens of repository branches." },
      { id: 'C', text: "Instruct developers to manually edit production YAML manifests with vi before each deployment." },
      { id: 'D', text: "Hardcode production credentials and environment URLs into a single un-parameterized template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management", "Helm Charts", "Dr Failover"]
  },
  {
    id: "k8s-ckad-342",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Declarative application deployments using Helm charts and values.yaml overrides is under consideration.",
    options: [
      { id: 'A', text: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`)." },
      { id: 'B', text: "Maintain completely separate sets of raw duplicate YAML files across dozens of repository branches." },
      { id: 'C', text: "Instruct developers to manually edit production YAML manifests with vi before each deployment." },
      { id: 'D', text: "Hardcode production credentials and environment URLs into a single un-parameterized template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management", "Helm Charts", "High Load Scale"]
  },
  {
    id: "k8s-ckad-343",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Declarative application deployments using Helm charts and values.yaml overrides is under consideration.",
    options: [
      { id: 'A', text: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`)." },
      { id: 'B', text: "Maintain completely separate sets of raw duplicate YAML files across dozens of repository branches." },
      { id: 'C', text: "Instruct developers to manually edit production YAML manifests with vi before each deployment." },
      { id: 'D', text: "Hardcode production credentials and environment URLs into a single un-parameterized template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management", "Helm Charts", "Security Compliance"]
  },
  {
    id: "k8s-ckad-344",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Declarative application deployments using Helm charts and values.yaml overrides is under consideration.",
    options: [
      { id: 'A', text: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`)." },
      { id: 'B', text: "Maintain completely separate sets of raw duplicate YAML files across dozens of repository branches." },
      { id: 'C', text: "Instruct developers to manually edit production YAML manifests with vi before each deployment." },
      { id: 'D', text: "Hardcode production credentials and environment URLs into a single un-parameterized template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management", "Helm Charts", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-345",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deploying with Helm Charts and Values Overrides: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Package Management to deploy a complex multi-tier microservice stack consistently across dev, test, and prod environments with environment-specific configuration parameters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Declarative application deployments using Helm charts and values.yaml overrides is under consideration.",
    options: [
      { id: 'A', text: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`)." },
      { id: 'B', text: "Maintain completely separate sets of raw duplicate YAML files across dozens of repository branches." },
      { id: 'C', text: "Instruct developers to manually edit production YAML manifests with vi before each deployment." },
      { id: 'D', text: "Hardcode production credentials and environment URLs into a single un-parameterized template." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package the application manifests into a Helm chart and deploy using `helm install` or `helm upgrade --install` with environment-specific values files (`-f values-prod.yaml`). Helm is the standard package manager for Kubernetes. Helm charts parameterize Kubernetes manifests using templates, allowing operators to deploy consistent application architectures across disparate environments simply by supplying environment-specific `values.yaml` configuration overrides.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/",
    tags: ["Package Management", "Helm Charts", "Resilience Failure"]
  },
  {
    id: "k8s-ckad-346",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: Dr Failover",
    scenario: "A cloud-native application engineering team is establishing high-availability deployment patterns and zero-downtime release safeguards for enterprise services. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Customizing Kubernetes manifests without templates using Kustomize overlays is under consideration.",
    options: [
      { id: 'A', text: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files." },
      { id: 'B', text: "Run sed and awk text replacement scripts against raw YAML files in CI/CD pipelines." },
      { id: 'C', text: "Write custom python scripts that parse and re-serialize YAML manifests on developer workstations." },
      { id: 'D', text: "Deploy the exact same configuration to production as development without changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization", "Kustomize", "Dr Failover"]
  },
  {
    id: "k8s-ckad-347",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: High Load Scale",
    scenario: "A high-throughput web application experiences unpredictable spikes in user transactions and requires automated, reliable scaling across Kubernetes clusters. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which design pattern or resource configuration manages this workload surge effectively while protecting backend stability? Customizing Kubernetes manifests without templates using Kustomize overlays is under consideration.",
    options: [
      { id: 'A', text: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files." },
      { id: 'B', text: "Run sed and awk text replacement scripts against raw YAML files in CI/CD pipelines." },
      { id: 'C', text: "Write custom python scripts that parse and re-serialize YAML manifests on developer workstations." },
      { id: 'D', text: "Deploy the exact same configuration to production as development without changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization", "Kustomize", "High Load Scale"]
  },
  {
    id: "k8s-ckad-348",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: Security Compliance",
    scenario: "A security compliance auditor requires strict container runtime isolation, least-privilege credential access, and defense-in-depth network policies across all namespaces. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which solution properly implements these mandatory container and cluster security controls? Customizing Kubernetes manifests without templates using Kustomize overlays is under consideration.",
    options: [
      { id: 'A', text: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files." },
      { id: 'B', text: "Run sed and awk text replacement scripts against raw YAML files in CI/CD pipelines." },
      { id: 'C', text: "Write custom python scripts that parse and re-serialize YAML manifests on developer workstations." },
      { id: 'D', text: "Deploy the exact same configuration to production as development without changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization", "Kustomize", "Security Compliance"]
  },
  {
    id: "k8s-ckad-349",
    difficulty: "easy",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: Hybrid Migration",
    scenario: "An application development team is migrating legacy monolithic applications into containerized microservices running on Kubernetes. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which architectural pattern or feature enables the team to modernize services with minimal disruption and low operational friction? Customizing Kubernetes manifests without templates using Kustomize overlays is under consideration.",
    options: [
      { id: 'A', text: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files." },
      { id: 'B', text: "Run sed and awk text replacement scripts against raw YAML files in CI/CD pipelines." },
      { id: 'C', text: "Write custom python scripts that parse and re-serialize YAML manifests on developer workstations." },
      { id: 'D', text: "Deploy the exact same configuration to production as development without changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization", "Kustomize", "Hybrid Migration"]
  },
  {
    id: "k8s-ckad-350",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize Overlays and Declarative Management: Resilience Failure",
    scenario: "An SRE team is optimizing application stability to eliminate single points of failure, streamline observability, and ensure graceful failure handling. The Kubernetes application developer evaluates Manifest Customization to customize container images, namespace targets, and replica counts for development and production environments without using complex templating engines.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and guarantees service reliability? Customizing Kubernetes manifests without templates using Kustomize overlays is under consideration.",
    options: [
      { id: 'A', text: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files." },
      { id: 'B', text: "Run sed and awk text replacement scripts against raw YAML files in CI/CD pipelines." },
      { id: 'C', text: "Write custom python scripts that parse and re-serialize YAML manifests on developer workstations." },
      { id: 'D', text: "Deploy the exact same configuration to production as development without changes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Structure manifests with a Kustomize `base` directory and environment-specific `overlay` directories containing `kustomization.yaml` files. Kustomize provides template-free customization of Kubernetes manifests natively integrated into `kubectl` (`kubectl apply -k`). By defining a common `base` and composing environment-specific `overlays` (patches, name prefixes, replicas, image tags), teams maintain DRY declarative configurations.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Manifest Customization", "Kustomize", "Resilience Failure"]
  }
];

export default K8S_CKAD_QUESTIONS_14;
