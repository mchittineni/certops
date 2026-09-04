export const K8S_CKAD_QUESTIONS_4 = [
  {
    id: "k8s-ckad-76",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment progressDeadlineSeconds for Failing Rollout Detection",
    scenario: "A Deployment rollout stalls because worker nodes cannot pull a non-existent container image tag. The deployment controller must mark the rollout as failed after 5 minutes.",
    question: "Which Deployment specification field sets the deadline for rollout progression?",
    options: [
      { id: 'A', text: "progressDeadlineSeconds: 300" },
      { id: 'B', text: "activeDeadlineSeconds: 300" },
      { id: 'C', text: "timeoutSeconds: 300" },
      { id: 'D', text: "backoffLimit: 300" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`progressDeadlineSeconds` defines the number of seconds the Deployment controller waits for a rollout to make progress before reporting `type: Progressing, status: False, reason: ProgressDeadlineExceeded` in the deployment status.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#progress-deadline-seconds",
    tags: ["Kubernetes", "Deployments", "progressDeadlineSeconds"]
  },
  {
    id: "k8s-ckad-77",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kubernetes StatefulSet Ordered Scaling and Termination Rules",
    scenario: "A StatefulSet with 3 replicas (`pod-0`, `pod-1`, `pod-2`) using default `OrderedReady` is scaled down from 3 replicas to 1 replica.",
    question: "In which exact order are the pods terminated?",
    options: [
      { id: 'A', text: "Pods are terminated in random order" },
      { id: 'B', text: "All pods are terminated simultaneously" },
      { id: 'C', text: "pod-2 is terminated and fully shut down first, followed by pod-1" },
      { id: 'D', text: "pod-0 is terminated first, followed by pod-1" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Under `OrderedReady` policy, StatefulSet pods are scaled in reverse ordinal order. When scaling down, `pod-2` receives SIGTERM and must shut down completely before `pod-1` is terminated, preserving distributed consensus protocols.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#scaling-down",
    tags: ["Kubernetes", "StatefulSets", "Ordered Scaling"]
  },
  {
    id: "k8s-ckad-78",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "StatefulSet PVC Retention Policy on Deletion (persistentVolumeClaimRetentionPolicy)",
    scenario: "When a StatefulSet is deleted or scaled down, by default Kubernetes preserves the associated PersistentVolumeClaims (PVCs) to prevent accidental data loss. In testing environments, developers want PVCs automatically deleted when the StatefulSet is deleted.",
    question: "Which StatefulSet feature automatically deletes PVCs upon StatefulSet deletion?",
    options: [
      { id: 'A', text: "volumeClaimTemplates.reclaimPolicy: Delete" },
      { id: 'B', text: "emptyDir alone" },
      { id: 'C', text: "pvcAutoDelete: true" },
      { id: 'D', text: "persistentVolumeClaimRetentionPolicy: { whenDeleted: Delete }" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes supports `persistentVolumeClaimRetentionPolicy`. Setting `whenDeleted: Delete` instructs the StatefulSet controller to automatically delete PVCs created by `volumeClaimTemplates` when the parent StatefulSet is deleted.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#persistentvolumeclaim-retention",
    tags: ["Kubernetes", "StatefulSets", "PVC Retention"]
  },
  {
    id: "k8s-ckad-79",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "DaemonSet Node Selection via nodeSelector and NodeAffinity",
    scenario: "A GPU monitoring agent DaemonSet must only run on worker nodes equipped with NVIDIA GPUs (labeled `hardware: gpu`).",
    question: "Which workload specification mechanism restricts DaemonSet pod placement to matching labeled nodes?",
    options: [
      { id: 'A', text: "spec.tolerations alone" },
      { id: 'B', text: "spec.selector: { matchLabels: { hardware: gpu } }" },
      { id: 'C', text: "spec.template.spec.nodeSelector: { hardware: gpu } (or nodeAffinity)" },
      { id: 'D', text: "spec.replicas: 5" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Like Deployments, a DaemonSet's pod template supports `nodeSelector` and `nodeAffinity`. If defined, the DaemonSet controller schedules pods only onto nodes that satisfy the specified label criteria rather than every node in the cluster.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/#running-pods-on-select-nodes",
    tags: ["Kubernetes", "DaemonSet", "nodeSelector"]
  },
  {
    id: "k8s-ckad-80",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "DaemonSet Scheduling and Node Taints (Tolerations)",
    scenario: "A cluster administrator taints control plane master nodes with `node-role.kubernetes.io/control-plane:NoSchedule`. An ingress controller DaemonSet must run on all worker nodes and control plane nodes.",
    question: "What must be added to the DaemonSet pod template to allow it to run on tainted control plane nodes?",
    options: [
      { id: 'A', text: "hostNetwork: true" },
      { id: 'B', text: "securityContext: { privileged: true }" },
      { id: 'C', text: "nodeSelector: { master: true }" },
      { id: 'D', text: "A toleration matching the control plane taint" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Taints prevent pods from being scheduled on nodes unless the pod has a matching `toleration`. To run DaemonSet pods on tainted master/control-plane nodes, the pod template must declare a toleration matching `node-role.kubernetes.io/control-plane`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",
    tags: ["Kubernetes", "DaemonSet", "Tolerations"]
  },
  {
    id: "k8s-ckad-81",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Restart Without Manifest Changes (kubectl rollout restart)",
    scenario: "An application reads configuration from an external Vault server on startup. The Vault secrets have been rotated, and the developer needs to restart all running pods in the Deployment with zero downtime without changing any YAML files.",
    question: "Which kubectl command triggers a rolling restart of all pods in a Deployment?",
    options: [
      { id: 'A', text: "kubectl rollout restart deployment/&lt;name&gt;" },
      { id: 'B', text: "kubectl delete pods --all" },
      { id: 'C', text: "kubectl scale deployment/&lt;name&gt; --replicas=0" },
      { id: 'D', text: "kubectl rollout undo deployment/&lt;name&gt;" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`kubectl rollout restart deployment/&lt;name&gt;` injects a timestamp annotation into the pod template metadata, causing the Deployment controller to trigger a zero-downtime rolling update across all pods.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_restart/",
    tags: ["Kubernetes", "kubectl rollout restart", "Zero-Downtime Restart"]
  },
  {
    id: "k8s-ckad-82",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "ArgoCD and Flux GitOps Deployment Reconciliation",
    scenario: "An enterprise uses GitOps to manage production Kubernetes clusters. A cluster operator manually alters a Deployment replica count from 5 to 10 using `kubectl scale`.",
    question: "How does a GitOps operator (such as ArgoCD or Flux) react to this out-of-band change?",
    options: [
      { id: 'A', text: "It commits the replica change back into Git automatically" },
      { id: 'B', text: "It detects OutOfSync drift between Git and the live cluster and automatically reverts the cluster replicas back to 5 declared in Git (if auto-heal is enabled)" },
      { id: 'C', text: "It sends an SMS to all developers" },
      { id: 'D', text: "It deletes the cluster" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In GitOps, Git is the single source of truth. GitOps controllers like ArgoCD and Flux continuously reconcile live cluster state against Git. When manual mutations (drift) occur in the cluster, the controller marks the app `OutOfSync` and auto-heals the cluster back to the Git declaration.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/core_concepts/",
    tags: ["GitOps", "ArgoCD", "Drift Reconciliation"]
  },
  {
    id: "k8s-ckad-83",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Helm Chart Directory Structure and Mandatory Files",
    scenario: "A developer creates a new Helm chart from scratch using `helm create mychart`.",
    question: "Which file in the chart root directory contains essential metadata like chart name, version, and apiVersion?",
    options: [
      { id: 'A', text: "requirements.yaml" },
      { id: 'B', text: "values.yaml" },
      { id: 'C', text: "templates/deployment.yaml" },
      { id: 'D', text: "Chart.yaml" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In a Helm chart, `Chart.yaml` is the mandatory metadata file declaring `name`, `version` (SemVer of the package), `appVersion` (version of the application), `apiVersion: v2`, and description.",
    referenceUrl: "https://helm.sh/docs/topics/charts/#the-chartyaml-file",
    tags: ["Helm", "Chart.yaml", "Package Structure"]
  },
  {
    id: "k8s-ckad-84",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Helm Template Rendering Diagnostics (helm template and helm lint)",
    scenario: "A developer writes complex Go templating logic inside a Helm chart's `templates/deployment.yaml`. Before attempting to install the chart on a live cluster, the developer needs to validate YAML syntax and render the generated manifests locally.",
    question: "Which two Helm commands validate chart syntax and output the rendered YAML respectively?",
    options: [
      { id: 'A', text: "helm verify ./mychart and helm render ./mychart" },
      { id: 'B', text: "helm lint ./mychart and helm template ./mychart" },
      { id: 'C', text: "kubectl apply --validate ./mychart" },
      { id: 'D', text: "helm dry-run ./mychart and helm test ./mychart" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`helm lint` examines a chart for syntax errors and best practice violations. `helm template [NAME] [CHART]` locally renders all template files with values and outputs the final Kubernetes YAML manifests to stdout without contacting a Kubernetes cluster.",
    referenceUrl: "https://helm.sh/docs/helm/helm_template/",
    tags: ["Helm", "helm template", "helm lint"]
  },
  {
    id: "k8s-ckad-85",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize NamePrefix and NameSuffix Transformers",
    scenario: "A platform team deploys multi-tenant staging environments. All resources deployed by Kustomize in the staging overlay must have their names prepended with `staging-` (e.g. `staging-my-service`).",
    question: "Which Kustomize field automatically prepends a string to all generated resource names?",
    options: [
      { id: 'A', text: "namespace: staging-" },
      { id: 'B', text: "nameSuffix: staging-" },
      { id: 'C', text: "prefix: staging-" },
      { id: 'D', text: "namePrefix: staging-" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`namePrefix` in `kustomization.yaml` prepends the specified string to the names of all resources declared or generated within that kustomization layer, preventing naming collisions across overlays.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/nameprefix/",
    tags: ["Kubernetes", "Kustomize", "namePrefix"]
  },
  {
    id: "k8s-ckad-86",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize CommonLabels and CommonAnnotations",
    scenario: "An organization requires every pod, service, and deployment created in a project to carry the labels `team: checkout` and `environment: prod` for cost attribution.",
    question: "Which Kustomize directive applies labels to all resources and their embedded pod selectors automatically?",
    options: [
      { id: 'A', text: "commonLabels: { team: checkout, environment: prod }" },
      { id: 'B', text: "labels: { team: checkout }" },
      { id: 'C', text: "podLabels: { team: checkout }" },
      { id: 'D', text: "metadata.labels in base" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`commonLabels` in `kustomization.yaml` applies the specified key-value labels to all resources and also updates selectors in Deployments, Services, and StatefulSets to ensure consistent labeling across manifests.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/commonlabels/",
    tags: ["Kubernetes", "Kustomize", "commonLabels"]
  },
  {
    id: "k8s-ckad-87",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Instant Traffic Rollback",
    scenario: "During a Blue-Green deployment, 100% of traffic is switched to Green (`version: v2`), but immediate alerts show HTTP 500 errors.",
    question: "How fast can the system roll back to Blue (`version: v1`)?",
    options: [
      { id: 'A', text: "Instantaneously (within seconds), by switching the Service selector back to version: v1" },
      { id: 'B', text: "It takes 30 minutes to rebuild containers" },
      { id: 'C', text: "Blue-Green deployments cannot be rolled back" },
      { id: 'D', text: "Requires restarting the Kubernetes API server" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because the old Blue deployment remains fully provisioned and running in the background, rolling back is instantaneous. The administrator simply switches the Service selector back to `version: v1`, redirecting client traffic immediately without waiting for container boot times.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#alternative-deployment-strategies",
    tags: ["Kubernetes", "Blue-Green", "Disaster Recovery"]
  },
  {
    id: "k8s-ckad-88",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Validation with Prometheus Metrics and Flagger",
    scenario: "A continuous delivery pipeline deploys a canary version to Kubernetes. The progressive delivery controller monitors HTTP error rates and latency percentiles from Prometheus.",
    question: "Which cloud-native tool automates progressive traffic shifting and automated canary rollback for Kubernetes?",
    options: [
      { id: 'A', text: "Flagger (or Argo Rollouts)" },
      { id: 'B', text: "Helm alone" },
      { id: 'C', text: "kubectl apply alone" },
      { id: 'D', text: "Kustomize alone" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Flagger` and `Argo Rollouts` are progressive delivery operators that automate canary analysis. They gradually shift traffic percentages (using Istio, Linkerd, or NGINX) while analyzing Prometheus metrics, automatically rolling back if error rates exceed thresholds.",
    referenceUrl: "https://flagger.app/",
    tags: ["Kubernetes", "Flagger", "Progressive Delivery"]
  },
  {
    id: "k8s-ckad-89",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "StatefulSet OnDelete Update Strategy Mechanics",
    scenario: "A Cassandra database cluster runs on a Kubernetes StatefulSet with `updateStrategy: { type: OnDelete }`. The administrator updates the container image in the StatefulSet manifest.",
    question: "What action must the administrator perform to upgrade each pod to the new image?",
    options: [
      { id: 'A', text: "Run kubectl rollout resume" },
      { id: 'B', text: "OnDelete does not support image updates" },
      { id: 'C', text: "Manually delete each pod one by one (e.g. kubectl delete pod cassandra-0) after validating cluster health" },
      { id: 'D', text: "Scale replicas to 0 and back to 3" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With `updateStrategy: { type: OnDelete }`, the StatefulSet controller does NOT automatically restart pods when the manifest changes. Pods are updated to the new template only when the user manually deletes them, giving database administrators complete control over when individual nodes restart.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#on-delete",
    tags: ["Kubernetes", "StatefulSets", "OnDelete"]
  },
  {
    id: "k8s-ckad-90",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kubernetes ReplicaSet Ownership and Labels (matchLabels)",
    scenario: "A developer creates a ReplicaSet with `matchLabels: { app: web }`. An existing orphan pod in the namespace already has the label `app: web`.",
    question: "What does the ReplicaSet controller do with the existing orphan pod?",
    options: [
      { id: 'A', text: "It adopts the existing pod into its replica count and does not create an extra pod" },
      { id: 'B', text: "It ignores the orphan pod completely" },
      { id: 'C', text: "It crashes with a label conflict error" },
      { id: 'D', text: "It deletes the existing orphan pod immediately" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes workload controllers (ReplicaSets, Deployments) identify managed pods via label selectors. If an unmanaged or orphan pod with matching labels exists in the namespace, the ReplicaSet controller adopts it and counts it toward its desired replica count.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#how-a-replicaset-works",
    tags: ["Kubernetes", "ReplicaSet", "Label Selectors"]
  },
  {
    id: "k8s-ckad-91",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "StatefulSet Partition Parameter for Phased Rolling Updates",
    scenario: "A developer manages a 5-node StatefulSet (`redis-0` through `redis-4`). The team wants to test a new image version on only the last pod (`redis-4`) before upgrading the rest of the cluster.",
    question: "Which parameter under `updateStrategy.rollingUpdate` partitions the update to pods with ordinal index >= 4?",
    options: [
      { id: 'A', text: "testOrdinal: 4" },
      { id: 'B', text: "maxUnavailable: 1" },
      { id: 'C', text: "partition: 4" },
      { id: 'D', text: "canary: 1" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a StatefulSet rolling update, setting `partition: &lt;ordinal&gt;` partitions the pods. When the template changes, only pods with an ordinal index greater than or equal to the partition number are updated. Setting `partition: 4` updates only `redis-4`, allowing canary testing of stateful clusters.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#partitions",
    tags: ["Kubernetes", "StatefulSets", "Partition"]
  },
  {
    id: "k8s-ckad-92",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment MatchLabels Immutability Constraint",
    scenario: "A developer attempts to update the `spec.selector.matchLabels` of an active Kubernetes Deployment from `app: v1` to `app: v2`.",
    question: "How does the Kubernetes API server respond to this update request?",
    options: [
      { id: 'A', text: "The API server rejects the request with an error because spec.selector is immutable after creation" },
      { id: 'B', text: "The API server updates all existing pods to have the new label" },
      { id: 'C', text: "The Deployment is converted to a ReplicaSet" },
      { id: 'D', text: "The API server deletes all running pods" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Kubernetes Deployments, `spec.selector` is immutable after creation. The API server rejects attempts to alter `spec.selector.matchLabels` on an existing Deployment; changing selectors requires creating a new Deployment or deleting and recreating the object.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#label-selector-updates",
    tags: ["Kubernetes", "Deployments", "Selector Immutability"]
  },
  {
    id: "k8s-ckad-93",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kubernetes Jobs vs CronJobs Architecture",
    scenario: "A developer needs to run an ephemeral data cleanup container every Sunday at 02:00 UTC.",
    question: "Which Kubernetes resource manages scheduled recurring Job executions using standard crontab syntax?",
    options: [
      { id: 'A', text: "CronJob (which creates Job objects on schedule)" },
      { id: 'B', text: "Deployment with a sleep loop" },
      { id: 'C', text: "Job with restartPolicy: Always" },
      { id: 'D', text: "DaemonSet" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `CronJob` runs jobs on a time-based schedule using standard cron format (`minute hour day-of-month month day-of-week`). On each schedule trigger, the CronJob controller creates a new standard Kubernetes `Job` object to run the task.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/",
    tags: ["Kubernetes", "CronJobs", "Job Scheduling"]
  },
  {
    id: "k8s-ckad-94",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Helm Chart Dependencies Management (Chart.lock and dependencies)",
    scenario: "A custom Helm chart depends on the community `bitnami/redis` subchart.",
    question: "Where are subchart dependencies declared in Helm v3?",
    options: [
      { id: 'A', text: "In the dependencies section of Chart.yaml" },
      { id: 'B', text: "In values.yaml only" },
      { id: 'C', text: "In requirements.yaml (deprecated Helm v2 syntax)" },
      { id: 'D', text: "In templates/redis.yaml" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Helm 3, chart dependencies are declared directly within `Chart.yaml` under the `dependencies` list (specifying `name`, `version`, and `repository`). Running `helm dependency update` downloads the subcharts and generates `Chart.lock`.",
    referenceUrl: "https://helm.sh/docs/topics/charts/#chart-dependencies",
    tags: ["Helm", "Chart Dependencies", "Helm 3"]
  },
  {
    id: "k8s-ckad-95",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Minimum Ready Seconds (minReadySeconds)",
    scenario: "A newly started web application pod takes 15 seconds after passing its readiness probe to complete internal cache warming. Without delays, the rolling update terminates old pods before the new pod can handle peak traffic.",
    question: "Which Deployment specification setting specifies the minimum seconds a new pod must be Ready before the deployment considers it available?",
    options: [
      { id: 'A', text: "minReadySeconds: 15" },
      { id: 'B', text: "initialDelaySeconds: 15" },
      { id: 'C', text: "progressDeadlineSeconds: 15" },
      { id: 'D', text: "timeout: 15s" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`minReadySeconds` specifies the minimum number of seconds for which a newly created Pod should be ready without any of its containers crashing, for it to be considered available during a rolling update, preventing premature old-pod termination.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#min-ready-seconds",
    tags: ["Kubernetes", "Deployments", "minReadySeconds"]
  },
  {
    id: "k8s-ckad-96",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize SecretGenerator with Secret Encryption via SealedSecrets",
    scenario: "A security policy requires that raw plaintext Kubernetes Secrets must never be stored in Git repositories, but Kustomize overlays must manage secret deployments.",
    question: "Which cloud-native tool allows encrypting Kubernetes Secrets into Git-safe Custom Resources decrypted only by the in-cluster controller?",
    options: [
      { id: 'A', text: "Sealed Secrets (Bitnami) / External Secrets Operator" },
      { id: 'B', text: "Storing base64 strings in Git" },
      { id: 'C', text: "Kustomize plaintext secretGenerator" },
      { id: 'D', text: "ConfigMaps" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Bitnami Sealed Secrets` uses asymmetric cryptography to encrypt Kubernetes Secrets into `SealedSecret` custom resources that can be safely committed to public/private Git repositories. Only the in-cluster Sealed Secrets controller holds the private key to decrypt them into real Secrets.",
    referenceUrl: "https://github.com/bitnami-labs/sealed-secrets",
    tags: ["Kubernetes", "Sealed Secrets", "GitOps Security"]
  },
  {
    id: "k8s-ckad-97",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Helm Dry-Run and Client-Side Output Validation",
    scenario: "A developer wants to simulate running `helm install` against a Kubernetes cluster to verify whether the cluster API server accepts the generated manifests without actually creating any real resources.",
    question: "Which Helm flag performs server-side simulation without persisting resources?",
    options: [
      { id: 'A', text: "helm install --dry-run --debug my-app ./chart" },
      { id: 'B', text: "helm template alone" },
      { id: 'C', text: "helm lint alone" },
      { id: 'D', text: "helm install --fake" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running `helm install --dry-run --debug` sends the rendered manifests to the Kubernetes API server for server-side validation against cluster schemas without actually persisting or deploying any objects.",
    referenceUrl: "https://helm.sh/docs/helm/helm_install/#options",
    tags: ["Helm", "Dry-Run", "Validation"]
  },
  {
    id: "k8s-ckad-98",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Paused State Status Inspection",
    scenario: "A DevOps engineer paused a deployment rollout using `kubectl rollout pause deployment/api-server`.",
    question: "How can an administrator verify whether a Deployment is currently paused?",
    options: [
      { id: 'A', text: "Inspect the output of kubectl get deployment api-server -o yaml (spec.paused: true) or kubectl describe" },
      { id: 'B', text: "kubectl get pods will show status PAUSED" },
      { id: 'C', text: "There is no way to check if a deployment is paused" },
      { id: 'D', text: "The API server returns HTTP 503" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When a deployment is paused, `spec.paused: true` appears in the Deployment specification, visible in `kubectl get deployment &lt;name&gt; -o yaml` or `kubectl describe deployment &lt;name&gt;`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-deployment",
    tags: ["Kubernetes", "Deployments", "spec.paused"]
  },
  {
    id: "k8s-ckad-99",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "StatefulSet Headless Service DNS Resolution Patterns",
    scenario: "A StatefulSet named `web` with 2 replicas (`web-0`, `web-1`) is governed by a headless service named `nginx` in namespace `default`.",
    question: "What is the fully qualified domain name (FQDN) to address the second pod directly?",
    options: [
      { id: 'A', text: "web-1.default.svc.cluster.local" },
      { id: 'B', text: "web-1.nginx.default.svc.cluster.local" },
      { id: 'C', text: "nginx-1.web.default.svc.cluster.local" },
      { id: 'D', text: "pod-web-1.cluster.local" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "For pods managed by a StatefulSet with a headless service, CoreDNS creates stable FQDNs following the pattern `&lt;pod-name&gt;.&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local` (e.g. `web-1.nginx.default.svc.cluster.local`).",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-network-id",
    tags: ["Kubernetes", "StatefulSets", "CoreDNS"]
  },
  {
    id: "k8s-ckad-100",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kubernetes Workload Controller Selection Matrix",
    scenario: "A team needs to select appropriate Kubernetes workload controllers for three scenarios: (1) stateless web frontend, (2) distributed clustered database with stable network IDs, and (3) logging agent on every physical node.",
    question: "Which controllers should be chosen respectively?",
    options: [
      { id: 'A', text: "Job, CronJob, Deployment" },
      { id: 'B', text: "DaemonSet, StatefulSet, Deployment" },
      { id: 'C', text: "StatefulSet, Deployment, Job" },
      { id: 'D', text: "Deployment, StatefulSet, DaemonSet" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `Deployment` is ideal for stateless applications where pods are interchangeable. A `StatefulSet` provides stable network identities and persistent ordinal storage for clustered stateful databases. A `DaemonSet` guarantees that a copy of a pod runs on every eligible node for system agents.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/",
    tags: ["Kubernetes", "Workload Controllers", "Architecture"]
  }
];

export default K8S_CKAD_QUESTIONS_4;
