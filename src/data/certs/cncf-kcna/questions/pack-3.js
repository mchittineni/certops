export const CNCF_KCNA_QUESTIONS_3 = [
  {
    id: "cncf-kcna-51",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Three database replicas, each with its own disk",
    scenario: "A team is moving a three-node Cassandra ring into Kubernetes. Each replica must keep the same name after a restart, such as cassandra-0, and must reattach to its own persistent volume rather than share one with the others.",
    question: "Which workload resource should they use?",
    options: [
      { id: 'A', text: "A ReplicaSet with three replicas, each replica naming its volume after its suffix" },
      { id: 'B', text: "A Deployment whose three replicas share one claim, each keeping its generated name" },
      { id: 'C', text: "A StatefulSet, which gives each replica a stable ordinal name and its own claim" },
      { id: 'D', text: "A DaemonSet pinned to three nodes, each node keeping the database files locally" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A StatefulSet gives every Pod a stable ordinal identity (cassandra-0, cassandra-1, cassandra-2) that survives rescheduling, and its volumeClaimTemplates create one PersistentVolumeClaim per replica that is reattached to the same ordinal. A Deployment's replicas are interchangeable and a single shared claim is exactly what the team wants to avoid. A DaemonSet follows nodes, not a replica count, and ties data to specific machines. ReplicaSet Pod names are random and change on replacement, so they cannot key a stable volume.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",
    tags: ["StatefulSets","Workloads"]
  },
  {
    id: "cncf-kcna-52",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A node joins a cluster running a DaemonSet",
    scenario: "A cluster runs a node-exporter DaemonSet with no node selector or tolerations beyond the defaults. The platform team adds two new worker nodes and later decommissions an old one by deleting its Node object.",
    question: "How does the DaemonSet respond to these changes?",
    options: [
      { id: 'A', text: "It needs a rollout restart before the new nodes get Pods, and the old Pod stays in the API" },
      { id: 'B', text: "It creates a Pod on each new node by itself, and the old node's Pod is garbage collected" },
      { id: 'C', text: "It moves one of its existing Pods onto each new node, keeping the total number fixed" },
      { id: 'D', text: "It scales its replicas field from the node count, which an operator must raise by hand" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A DaemonSet ensures that every eligible node runs one copy of its Pod: when nodes join, the DaemonSet controller creates Pods for them automatically, and when a node is removed its Pod is garbage collected. No restart is needed to cover new nodes. DaemonSets have no replicas field; the count follows the nodes that match. Pods are never moved between nodes; the new nodes get new Pods while the existing ones stay where they are.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["DaemonSets","Nodes"]
  },
  {
    id: "cncf-kcna-53",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Processing a batch in parallel workers",
    scenario: "A data team must run an image-resizing task exactly 20 times to completion, and the cluster can afford to run five of these task Pods at the same time. Each Pod processes one item and then exits successfully.",
    question: "How should the Job be configured?",
    options: [
      { id: 'A', text: "replicas: 20 and maxSurge: 5, so that five extra Pods run during each processing wave" },
      { id: 'B', text: "completions: 5 and parallelism: 20, so that five successes are spread over twenty Pods" },
      { id: 'C', text: "backoffLimit: 20 and parallelism: 5, so that the Job retries until twenty Pods exit" },
      { id: 'D', text: "completions: 20 and parallelism: 5, so that up to five Pods run until twenty succeed" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "completions sets how many Pods must finish successfully before the Job is complete, and parallelism caps how many run at once, so 20 and 5 give five concurrent workers until twenty successes. Swapping the values would declare the Job done after only five successes. replicas and maxSurge are Deployment fields and do not apply to Jobs. backoffLimit counts allowed failures before the Job is marked failed; it does not define how many successes are needed.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-jobs",
    tags: ["Jobs","Batch"]
  },
  {
    id: "cncf-kcna-54",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Scheduling a nightly database export",
    scenario: "An operations team needs a database export to run every day at 02:00 in the cluster's time zone. Each run should create a fresh Pod that exits when the export finishes, and the team wants Kubernetes itself to trigger the runs.",
    question: "Which resource and schedule meet the requirement?",
    options: [
      { id: 'A', text: "A CronJob with schedule: \"0 2 * * *\", which creates a new Job at 02:00 each day" },
      { id: 'B', text: "A CronJob with schedule: \"2 0 * * *\", which creates a new Job at 02:00 each day" },
      { id: 'C', text: "A Job with schedule: \"0 2 * * *\", which reruns itself after each successful completion" },
      { id: 'D', text: "A Deployment with schedule: \"0 2 * * *\", which scales its Pods from zero at 02:00" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A CronJob creates a Job on a repeating schedule written in standard cron syntax, where the fields are minute, hour, day of month, month and day of week, so \"0 2 * * *\" means minute 0 of hour 2 every day. A plain Job has no schedule field and runs once. \"2 0 * * *\" means 00:02, two minutes past midnight, not 02:00. Deployments keep long-running Pods alive and have no schedule field.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["CronJobs","Batch"]
  },
  {
    id: "cncf-kcna-55",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Long reports must not overlap",
    scenario: "A CronJob that builds a finance report runs every 30 minutes. On busy days a run can take 45 minutes, and two runs writing to the same output table at once corrupt the report. The team would rather skip a run than have two in flight.",
    question: "Which CronJob setting prevents the overlap?",
    options: [
      { id: 'A', text: "successfulJobsHistoryLimit: 1, which keeps just one run of the Job active at a time" },
      { id: 'B', text: "concurrencyPolicy: Allow, which queues the new run until the previous one finishes" },
      { id: 'C', text: "concurrencyPolicy: Replace, which lets the new run and the old run share the table" },
      { id: 'D', text: "concurrencyPolicy: Forbid, which skips a new run while the previous one is active" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With concurrencyPolicy: Forbid the CronJob controller skips a scheduled run if the previous Job is still running, which is exactly the trade the team wants. Replace cancels the running Job and starts the new one, so the long report would be killed rather than share anything. Allow, the default, runs Jobs concurrently without queuing, which is what causes the corruption. successfulJobsHistoryLimit controls how many finished Jobs are kept for inspection, not how many run.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#concurrency-policy",
    tags: ["CronJobs","Concurrency"]
  },
  {
    id: "cncf-kcna-56",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A task that keeps failing",
    scenario: "A Job runs a migration script that fails because a dependency is misconfigured. Rather than retrying forever, the team wants Kubernetes to give up after three failed attempts and mark the Job as failed so their pipeline can alert.",
    question: "Which Job field should they set?",
    options: [
      { id: 'A', text: "parallelism: 3, the number of retries the controller runs before it gives up" },
      { id: 'B', text: "backoffLimit: 3, the number of retries allowed before the Job is marked failed" },
      { id: 'C', text: "completions: 3, the number of attempts allowed before the Job is marked failed" },
      { id: 'D', text: "restartPolicy: 3, the number of container restarts before the Pod is abandoned" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "backoffLimit sets how many retries the Job controller allows before it marks the Job failed with reason BackoffLimitExceeded; the default is 6, with an exponential delay between retries. completions is the number of successes required, not failures allowed. parallelism limits concurrent Pods and has nothing to do with retry counts. restartPolicy takes the values Never or OnFailure for a Job; it is not a number.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#pod-backoff-failure-policy",
    tags: ["Jobs","backoffLimit"]
  },
  {
    id: "cncf-kcna-57",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Replicas that start one at a time",
    scenario: "A StatefulSet named zk with replicas: 3 uses the default settings. During the first deployment, an engineer watches kubectl get pods -w and sees zk-1 stay absent until zk-0 is Running and Ready, then zk-2 appear only after zk-1 is Ready.",
    question: "Why are the Pods created in this order?",
    options: [
      { id: 'A', text: "The default OrderedReady policy creates Pods by ordinal, each after the last is Ready" },
      { id: 'B', text: "The scheduler places StatefulSet Pods one per minute to protect the control plane" },
      { id: 'C', text: "The Parallel policy is the default, but Ready checks block the other Pods from starting" },
      { id: 'D', text: "The Pods share one PersistentVolumeClaim, and each waits for the previous to unmount it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "StatefulSets default to podManagementPolicy: OrderedReady, which creates Pods in ordinal order and waits for each to be Running and Ready before starting the next, and deletes them in reverse order; clustered systems such as ZooKeeper rely on that. The scheduler has no per-minute pacing. Each StatefulSet replica gets its own claim, so nothing is waiting for a shared volume. Parallel is not the default, and under Parallel the Pods would all be created at once regardless of probes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#deployment-and-scaling-guarantees",
    tags: ["StatefulSets","Ordering"]
  },
  {
    id: "cncf-kcna-58",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Storage left behind after scaling in",
    scenario: "A StatefulSet with volumeClaimTemplates is scaled from five replicas to three with default settings. A week later the storage team finds that claims named data-kafka-3 and data-kafka-4 still exist and are still billed, although their Pods are gone.",
    question: "What explains this, and what change would clean up claims automatically on scale-in?",
    options: [
      { id: 'A', text: "The claims are kept by default; set persistentVolumeClaimRetentionPolicy whenScaled: Delete" },
      { id: 'B', text: "The claims are kept until the StatefulSet is deleted; set reclaimPolicy: Retain on it" },
      { id: 'C', text: "The claims wait for their volumes to detach; lowering terminationGracePeriodSeconds fixes it" },
      { id: 'D', text: "The claims leaked from a controller bug; restarting kube-controller-manager removes them" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "By default a StatefulSet never deletes the PersistentVolumeClaims created from its templates, so data survives scale-in and a later scale-out reattaches it. The persistentVolumeClaimRetentionPolicy field (stable since 1.32) can set whenScaled: Delete, and separately whenDeleted, to remove claims for ordinals that go away. This is intended behavior, so restarting the controller manager changes nothing. reclaimPolicy is a PersistentVolume and StorageClass setting that decides what happens to the volume after its claim is deleted, not whether the claim is deleted. The grace period affects Pod shutdown, not claim retention.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#persistentvolumeclaim-retention",
    tags: ["StatefulSets","PersistentVolumeClaims"]
  },
  {
    id: "cncf-kcna-59",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Choosing a controller for a stateless web tier",
    scenario: "A developer plans to create a ReplicaSet directly for a stateless web tier because the app only needs four identical replicas. The team also expects to ship a new image every week and to roll back quickly when a release misbehaves.",
    question: "What should the developer create instead?",
    options: [
      { id: 'A', text: "A StatefulSet, because rolling out a new image needs replicas with stable identities" },
      { id: 'B', text: "A DaemonSet, because it rolls out one updated replica on each node in the cluster" },
      { id: 'C', text: "A Job, because it replaces every replica with the new image when each one completes" },
      { id: 'D', text: "A Deployment, because it manages ReplicaSets and adds rolling updates and rollback" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Deployment wraps ReplicaSets: each change to the Pod template creates a new ReplicaSet and shifts replicas over gradually, and earlier ReplicaSets are kept so kubectl rollout undo can go back. A bare ReplicaSet keeps a replica count but will not replace existing Pods when its template changes. StatefulSets are for workloads that need stable identity or storage, which a stateless web tier does not. A DaemonSet runs one Pod per node rather than four replicas. Jobs run tasks to completion, not long-running servers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#when-to-use-a-replicaset",
    tags: ["Deployments","ReplicaSets"]
  },
  {
    id: "cncf-kcna-60",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Keeping a feature flag file out of the image",
    scenario: "A team bakes a small settings file with feature flags and log levels into its container image, so every change requires a rebuild. The settings are not sensitive, and they want to change them per environment without rebuilding.",
    question: "Which Kubernetes resource should hold these settings?",
    options: [
      { id: 'A', text: "A PersistentVolumeClaim, which is the only way to supply a file to a container" },
      { id: 'B', text: "A ConfigMap, which stores non-confidential key-value data for Pods to consume" },
      { id: 'C', text: "A Secret, which Kubernetes requires for any configuration injected into Pods" },
      { id: 'D', text: "An annotation on the Deployment, which the kubelet mounts into each container" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ConfigMaps hold non-confidential configuration as key-value pairs or whole files and can be consumed as environment variables, command arguments or files in a volume, keeping config separate from the image. Secrets are meant for sensitive data such as passwords and tokens; they are not required for ordinary settings. A PersistentVolumeClaim requests storage, and ConfigMap volumes already supply files without one. Annotations are metadata and are not mounted into containers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/",
    tags: ["ConfigMaps","Configuration"]
  },
  {
    id: "cncf-kcna-61",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "One value from a shared ConfigMap",
    scenario: "A ConfigMap named app-settings holds a dozen keys shared by several services. The billing container needs only the key LOG_LEVEL, exposed as an environment variable with that same name, and should not receive the other keys.",
    question: "How should the container's env entry be written?",
    options: [
      { id: 'A', text: "volumeMounts with configMap app-settings, which exports LOG_LEVEL as an environment variable" },
      { id: 'B', text: "envFrom with configMapRef naming app-settings, which imports only the first key it holds" },
      { id: 'C', text: "env with name LOG_LEVEL and valueFrom.configMapKeyRef naming app-settings and LOG_LEVEL" },
      { id: 'D', text: "env with name LOG_LEVEL and valueFrom.secretKeyRef naming app-settings and LOG_LEVEL" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A single env entry with valueFrom.configMapKeyRef selects one key from one ConfigMap and exposes it under the variable name you choose. envFrom imports every key in the ConfigMap as variables, which is what the team wants to avoid. secretKeyRef reads from a Secret, not a ConfigMap, so it would fail to find app-settings. Mounting a ConfigMap as a volume produces files, not environment variables.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#define-container-environment-variables-using-configmap-data",
    tags: ["ConfigMaps","Environment variables"]
  },
  {
    id: "cncf-kcna-62",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Scaling a StatefulSet faster",
    scenario: "A StatefulSet runs 40 stateless-ish cache shards that need stable names and per-replica volumes, but the shards do not depend on each other. Scaling from 10 to 40 replicas takes a long time because each Pod waits for the previous one to become Ready.",
    question: "Which change removes the wait while keeping stable identities?",
    options: [
      { id: 'A', text: "Set minReadySeconds: 0, so the controller stops checking readiness before continuing" },
      { id: 'B', text: "Set updateStrategy: OnDelete, so new shards start without waiting for earlier ones" },
      { id: 'C', text: "Convert the StatefulSet to a Deployment, which keeps stable names for all forty shards" },
      { id: 'D', text: "Set podManagementPolicy: Parallel, so Pods are launched or deleted without waiting" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "podManagementPolicy: Parallel tells the StatefulSet controller to create and delete Pods in parallel instead of one ordinal at a time, while each Pod keeps its stable name and claim; it affects scaling, not rolling updates. A Deployment gives random names and no per-replica claims. updateStrategy: OnDelete governs how template updates are applied, not how scale-out proceeds. minReadySeconds adds a wait after readiness; setting it to 0 does not stop OrderedReady from waiting for each Pod to become Ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#parallel-pod-management",
    tags: ["StatefulSets","Scaling"]
  },
  {
    id: "cncf-kcna-63",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Protecting a ConfigMap from accidental edits",
    scenario: "A large cluster mounts the same ConfigMap into thousands of Pods. An outage was once caused by someone editing it by mistake, and the API servers carry heavy watch load from all the Pods tracking it. The values change only with a new release.",
    question: "Which approach addresses both problems?",
    options: [
      { id: 'A', text: "Move the values into a Secret, which is read-only and never watched by the kubelet" },
      { id: 'B', text: "Mount the ConfigMap with readOnly: true in each Pod so the API object cannot change" },
      { id: 'C', text: "Add a finalizer to the ConfigMap so that edits are rejected until it is removed" },
      { id: 'D', text: "Set immutable: true on the ConfigMap and publish a new, differently named one per version" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Marking a ConfigMap (or Secret) immutable makes the API server reject changes to its data, and lets kubelets stop watching it, which sharply reduces load on the API servers; to change values you create a new ConfigMap and point the Pods at it. Secrets are neither read-only nor unwatched by default and can be made immutable in the same way. Finalizers delay deletion; they do not block updates. readOnly on a volume mount stops the container writing to its files but does nothing to protect the API object.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable",
    tags: ["ConfigMaps","Immutability"]
  },
  {
    id: "cncf-kcna-64",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "A lookup table that will not fit",
    scenario: "A developer tries to store a 3 MB JSON lookup table in a ConfigMap so the app can read it from a mounted file. kubectl create configmap fails with an error that the object is too long.",
    question: "What limit did the developer hit, and what is a better home for the data?",
    options: [
      { id: 'A', text: "A ConfigMap is limited to 10 keys; flatten the JSON table into fewer top-level entries" },
      { id: 'B', text: "A ConfigMap is limited to 256 KiB of data; split the table into several ConfigMaps" },
      { id: 'C', text: "A ConfigMap is limited to 1 MiB of data; ship the table in the image or on a volume" },
      { id: 'D', text: "A ConfigMap key is limited to 64 characters; shorten the names of the JSON fields" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The data stored in a ConfigMap cannot exceed 1 MiB, a limit that follows from etcd's request size, so a 3 MB table belongs in the container image, a PersistentVolume, or an external store the app fetches from. 256 KiB is not the ConfigMap limit; that figure is the limit for all annotations on an object. Key names may be up to 253 characters and are unrelated to JSON field names inside a value. There is no ten-key limit on ConfigMaps.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#motivation",
    tags: ["ConfigMaps","Limits"]
  },
  {
    id: "cncf-kcna-65",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Finished Jobs piling up",
    scenario: "A controller creates hundreds of one-off Jobs a day for video transcoding. Completed Jobs and their Pods accumulate in the namespace, cluttering kubectl output and adding load to the API server. The team wants each Job removed automatically an hour after it finishes.",
    question: "Which Job setting does this?",
    options: [
      { id: 'A', text: "ttlSecondsAfterFinished: 3600, which deletes the Job and its Pods once it is done" },
      { id: 'B', text: "activeDeadlineSeconds: 3600, which removes the Job one hour after it has finished" },
      { id: 'C', text: "successfulJobsHistoryLimit: 1, which keeps only the most recent finished standalone Job" },
      { id: 'D', text: "backoffLimit: 3600, which caps how long the Job and its Pods are kept after finishing" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "ttlSecondsAfterFinished lets the TTL-after-finished controller delete a Job, cascading to its Pods, the given number of seconds after it completes or fails. activeDeadlineSeconds limits how long a Job may run before it is terminated as failed; it does not clean up finished Jobs. backoffLimit is a count of retries, not a time. successfulJobsHistoryLimit is a CronJob field and has no effect on Jobs created directly by another controller.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/ttlafterfinished/",
    tags: ["Jobs","Cleanup"]
  },
  {
    id: "cncf-kcna-66",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Report runs an hour off local time",
    scenario: "A company in Berlin defines a CronJob with schedule: \"0 6 * * *\" to send a morning report at 06:00 local time. The report actually arrives at 07:00 or 08:00 local time depending on the season, because the cluster's control plane runs in UTC.",
    question: "What is the cleanest fix on a current Kubernetes version?",
    options: [
      { id: 'A', text: "Change the schedule to \"0 5 * * *\" and edit it again whenever daylight saving time changes" },
      { id: 'B', text: "Set the TZ environment variable to Europe/Berlin in the Job's Pod template containers" },
      { id: 'C', text: "Add CRON_TZ=Europe/Berlin at the start of the schedule string, as cron allows by default" },
      { id: 'D', text: "Set spec.timeZone: \"Europe/Berlin\" so the controller evaluates the schedule in that zone" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Since Kubernetes 1.27 the CronJob spec.timeZone field is stable and takes an IANA time zone name, so the controller interprets the schedule in Berlin time and follows daylight saving changes automatically. Shifting the hour by hand works only until the next clock change. Kubernetes explicitly does not support CRON_TZ or TZ prefixes in the schedule string and rejects them. A TZ variable inside the containers changes how the app formats time, not when the CronJob controller creates the Job.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#time-zones",
    tags: ["CronJobs","Time zones"]
  },
  {
    id: "cncf-kcna-67",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Adding capacity to a web tier quickly",
    scenario: "Traffic to a marketing site is climbing ahead of a launch, and the on-call engineer wants to go from 4 to 10 replicas of the site's Deployment immediately, without editing any files.",
    question: "Which command does this?",
    options: [
      { id: 'A', text: "kubectl rollout restart deployment site --count=10" },
      { id: 'B', text: "kubectl set replicas deployment site 10" },
      { id: 'C', text: "kubectl autoscale deployment site --replicas=10" },
      { id: 'D', text: "kubectl scale deployment site --replicas=10" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl scale updates a Deployment's spec.replicas directly, and the ReplicaSet controller creates the extra Pods. kubectl rollout restart replaces Pods with new ones but does not change the count, and it has no count flag. There is no kubectl set replicas subcommand; kubectl set handles fields such as image, env and resources. kubectl autoscale creates a HorizontalPodAutoscaler with --min, --max and a CPU target rather than setting a fixed count, and has no --replicas flag. If the manifest lives in Git, the change should later be reflected there as well.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_scale/",
    tags: ["kubectl","Scaling"]
  },
  {
    id: "cncf-kcna-68",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Telling a container its own Pod name",
    scenario: "An application writes its Pod name into every log line so that engineers can tell replicas apart. The team does not want the app to call the Kubernetes API to find out its own name.",
    question: "How can the Pod name be passed to the container?",
    options: [
      { id: 'A', text: "Use valueFrom.secretKeyRef on metadata.name, since the Pod name is sensitive" },
      { id: 'B', text: "Use the Downward API: an env var with valueFrom.fieldRef set to metadata.name" },
      { id: 'C', text: "Use the HOSTNAME set by kube-proxy, which it rewrites to the node's name" },
      { id: 'D', text: "Use a ConfigMap listing every Pod name, and let each replica look up its own" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Downward API exposes Pod and container fields such as metadata.name, metadata.namespace, status.podIP and resource limits as environment variables or files, with no API call from the app. A ConfigMap would have to be rewritten every time a replica is replaced, since names are generated. secretKeyRef reads keys from Secrets, not Pod fields. kube-proxy does not set environment variables; the container's hostname is the Pod name, set by the runtime, not the node name.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/downward-api/",
    tags: ["Downward API","Environment variables"]
  },
  {
    id: "cncf-kcna-69",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Putting a ceiling on a batch run",
    scenario: "A nightly Job normally finishes in 20 minutes, but occasionally it hangs on a remote call and runs for hours, holding resources. The team wants the whole Job terminated and marked failed if it is still running after 45 minutes, however many retries it has used.",
    question: "Which Job field provides this limit?",
    options: [
      { id: 'A', text: "terminationGracePeriodSeconds: 2700, which fails the Job after forty-five minutes" },
      { id: 'B', text: "backoffLimit: 45, which stops the Job after forty-five minutes of retries in total" },
      { id: 'C', text: "activeDeadlineSeconds: 2700, which fails the Job once it has run that long in total" },
      { id: 'D', text: "ttlSecondsAfterFinished: 2700, which stops the Job forty-five minutes after it starts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "activeDeadlineSeconds applies to the Job as a whole: once it has been active that long, the controller terminates its running Pods and marks the Job failed with reason DeadlineExceeded, and it takes precedence over backoffLimit. backoffLimit counts retries, not minutes. terminationGracePeriodSeconds is how long a Pod gets to shut down after being asked to stop. ttlSecondsAfterFinished starts counting only after the Job has finished and is for cleanup.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/job/#job-termination-and-cleanup",
    tags: ["Jobs","Deadlines"]
  },
  {
    id: "cncf-kcna-70",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Loading every key as environment variables",
    scenario: "A ConfigMap named web-env contains eight keys such as API_URL and CACHE_TTL. The container should receive all of them as environment variables with the same names, and new keys added later should be picked up whenever Pods are recreated, without editing the Pod spec.",
    question: "Which container field meets this need?",
    options: [
      { id: 'A', text: "envFrom with a configMapRef that names the web-env ConfigMap" },
      { id: 'B', text: "volumes with a configMap source that names the web-env ConfigMap" },
      { id: 'C', text: "envFrom with a secretRef that names the web-env ConfigMap directly" },
      { id: 'D', text: "env with eight configMapKeyRef entries, one for each key of web-env" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "envFrom with a configMapRef turns every key in the ConfigMap into an environment variable of the same name, so keys added later appear the next time a Pod starts. Listing eight configMapKeyRef entries works today but misses new keys until the spec is edited. A configMap volume produces files, not environment variables. secretRef refers to a Secret, so pointing it at a ConfigMap's name finds nothing.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#configure-all-key-value-pairs-in-a-configmap-as-container-environment-variables",
    tags: ["ConfigMaps","envFrom"]
  },
  {
    id: "cncf-kcna-71",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Updating only the highest broker first",
    scenario: "A five-replica StatefulSet runs a message broker named mq. The team wants a new image to reach only mq-4 first, watch it for a day, and then continue to the remaining replicas, all with the default RollingUpdate strategy and without creating a second StatefulSet.",
    question: "How should the rollout be staged?",
    options: [
      { id: 'A', text: "Set updateStrategy to Recreate, apply the new image, then scale the replicas to one" },
      { id: 'B', text: "Set rollingUpdate.partition to 4, apply the new image, then lower the partition later" },
      { id: 'C', text: "Set rollingUpdate.maxUnavailable to 4, apply the new image, then raise the value later" },
      { id: 'D', text: "Set podManagementPolicy to Parallel, apply the new image, then delete mq-4 by hand" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With a partition of 4, only Pods whose ordinal is 4 or higher are updated to the new template, so mq-4 gets the new image while mq-0 to mq-3 stay on the old one even if they restart; lowering the partition step by step continues the rollout. maxUnavailable controls how many Pods may be down at once during an update, not which ordinals are updated, so a value of 4 would take most of the brokers offline together. podManagementPolicy affects scaling order, not which Pods receive a template change. StatefulSets have no Recreate strategy; their strategies are RollingUpdate and OnDelete.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#partitions",
    tags: ["StatefulSets","Rolling updates","Canary"]
  },
  {
    id: "cncf-kcna-72",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Re-running the same manifest safely",
    scenario: "A CI job deploys an application by running kubectl create -f app.yaml. The first run succeeds, but every later run fails with AlreadyExists errors, even when the manifest has changed. The team wants the same command to create or update as needed.",
    question: "Which command should the job use instead?",
    options: [
      { id: 'A', text: "kubectl create -f app.yaml --overwrite, which updates any objects that already exist" },
      { id: 'B', text: "kubectl apply -f app.yaml, which creates missing objects and updates existing ones" },
      { id: 'C', text: "kubectl replace -f app.yaml, which creates missing objects and updates existing ones" },
      { id: 'D', text: "kubectl run -f app.yaml, which reconciles each object in the file against the cluster" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl apply is the declarative command: it creates objects that do not exist and patches existing ones to match the file, so it can be rerun safely. kubectl replace updates existing objects but fails if they are missing. kubectl create has no --overwrite flag and refuses to touch objects that already exist. kubectl run starts a single Pod from an image and does not take a manifest file.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/",
    tags: ["kubectl","Declarative management"]
  },
  {
    id: "cncf-kcna-73",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Listing only one application's Pods",
    scenario: "A shared namespace holds about 60 Pods from several teams. An engineer only wants to see the Pods of the cart application, which all carry the label app=cart, and no one else's.",
    question: "Which command lists just those Pods?",
    options: [
      { id: 'A', text: "kubectl get pods app=cart" },
      { id: 'B', text: "kubectl get pods -l app=cart" },
      { id: 'C', text: "kubectl get pods --show-labels app=cart" },
      { id: 'D', text: "kubectl get pods --field-selector app=cart" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The -l (or --selector) flag filters by label selector, so -l app=cart returns only Pods carrying that label. Field selectors work on a few built-in fields such as status.phase or spec.nodeName, not on labels. A bare app=cart argument is read as a Pod name, which does not exist. --show-labels only adds a labels column to the output, and the extra argument is again treated as a name.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#list-and-watch-filtering",
    tags: ["kubectl","Labels","Selectors"]
  },
  {
    id: "cncf-kcna-74",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Stop typing -n on every command",
    scenario: "A developer spends her day working in the checkout namespace and keeps forgetting the -n checkout flag, which sends her commands to the default namespace. She wants kubectl to use checkout automatically for her current cluster connection.",
    question: "Which command sets this up?",
    options: [
      { id: 'A', text: "kubectl config use-context checkout --namespace=default" },
      { id: 'B', text: "kubectl create namespace checkout --set-default=true" },
      { id: 'C', text: "kubectl config set-context --current --namespace=checkout" },
      { id: 'D', text: "kubectl config set-cluster --current --namespace=checkout" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A kubeconfig context can store a default namespace; kubectl config set-context --current --namespace=checkout writes it into the active context, so later commands target checkout unless -n says otherwise. use-context switches to a context by name, and there is no context named checkout here, nor would --namespace=default help. kubectl create namespace has no flag that changes kubectl defaults. set-cluster edits the server and certificate entries of a cluster, which have no namespace field.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/quick-reference/#kubectl-context-and-configuration",
    tags: ["kubectl","Contexts","Namespaces"]
  },
  {
    id: "cncf-kcna-75",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    domainName: "Kubernetes Fundamentals",
    title: "Starting a manifest from a command",
    scenario: "A new team member needs a Deployment manifest for an nginx image to commit to Git, but does not want to write the YAML from scratch or create anything in the cluster yet.",
    question: "Which command generates the manifest without creating the Deployment?",
    options: [
      { id: 'A', text: "kubectl get deployment web --image=nginx -o yaml --export > web.yaml" },
      { id: 'B', text: "kubectl apply deployment web --image=nginx --dry-run=client -o json" },
      { id: 'C', text: "kubectl create deployment web --image=nginx --dry-run=server --apply" },
      { id: 'D', text: "kubectl create deployment web --image=nginx --dry-run=client -o yaml" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Imperative create commands accept --dry-run=client, which builds the object locally without sending it for persistence, and -o yaml prints it, giving a ready-to-edit manifest. --dry-run=server sends the request for validation but kubectl create has no --apply flag. kubectl get reads existing objects, takes no --image flag, and --export was removed years ago. kubectl apply works from files or directories and does not generate a Deployment from an image flag.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/conventions/#generators",
    tags: ["kubectl","Manifests","Dry run"]
  }
];

export default CNCF_KCNA_QUESTIONS_3;
