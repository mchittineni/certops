export const K8S_CKAD_QUESTIONS_3 = [
  {
    id: "k8s-ckad-51",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment RollingUpdate Strategy: maxSurge and maxUnavailable",
    scenario: "A Kubernetes Deployment with 10 replicas is updated to a new image. Company policy mandates zero downtime, requiring that at least 10 pods must remain available at all times during the rollout, but no more than 13 total pods may run simultaneously.",
    question: "Which RollingUpdate strategy parameters enforce these constraints?",
    options: [
      { id: 'A', text: "maxUnavailable: 3 and maxSurge: 0" },
      { id: 'B', text: "strategy: Recreate" },
      { id: 'C', text: "maxUnavailable: 1 and maxSurge: 1" },
      { id: 'D', text: "maxUnavailable: 0 and maxSurge: 3" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In a Deployment's `RollingUpdate` strategy, `maxUnavailable: 0` guarantees that the number of available pods never falls below the desired replica count (10 pods always serving). `maxSurge: 3` allows up to 3 extra pods above desired capacity (up to 13 total pods) during the rollout.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Kubernetes", "Deployments", "RollingUpdate"]
  },
  {
    id: "k8s-ckad-52",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Recreate Strategy for Exclusive Stateful Workloads",
    scenario: "A legacy document processing application attaches to a single-node ReadWriteOnce (RWO) storage volume. The application cannot run two instances concurrently against the same storage.",
    question: "Which Deployment strategy terminates all existing pods completely before creating new pods?",
    options: [
      { id: 'A', text: "strategy: { type: BlueGreen }" },
      { id: 'B', text: "strategy: { type: Canary }" },
      { id: 'C', text: "strategy: { type: Recreate }" },
      { id: 'D', text: "strategy: { type: RollingUpdate }" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The `Recreate` deployment strategy kills all existing running pods before any new pods are created. While this causes a brief service outage, it is required when two versions of an application cannot run simultaneously or share exclusive persistent volumes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment",
    tags: ["Kubernetes", "Deployments", "Recreate Strategy"]
  },
  {
    id: "k8s-ckad-53",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kubectl Rollout History and Revision Undo",
    scenario: "After updating a Deployment's container image, the application immediately throws fatal database connection errors. The developer needs to revert the Deployment to the exact previous revision.",
    question: "Which kubectl command executes an immediate rollback to the previous revision?",
    options: [
      { id: 'A', text: "kubectl rollout restart deployment/&lt;name&gt;" },
      { id: 'B', text: "kubectl delete deployment/&lt;name&gt;" },
      { id: 'C', text: "kubectl rollout status deployment/&lt;name&gt;" },
      { id: 'D', text: "kubectl rollout undo deployment/&lt;name&gt;" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`kubectl rollout undo deployment/&lt;name&gt;` rolls back the deployment to the previous revision. To target a specific older revision, pass `--to-revision=&lt;number&gt;` after inspecting revisions with `kubectl rollout history`.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Kubernetes", "kubectl rollout", "Rollback"]
  },
  {
    id: "k8s-ckad-54",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pause and Resume for Batch Configuration Changes",
    scenario: "A DevOps engineer needs to make multiple updates to a production Deployment (updating CPU requests, adding an environment variable, and changing the image tag). The engineer wants all changes applied in a single rollout rather than triggering 3 consecutive rolling updates.",
    question: "How should the engineer coordinate these updates using kubectl?",
    options: [
      { id: 'A', text: "Run kubectl rollout pause deployment/&lt;name&gt;, apply the changes, then run kubectl rollout resume deployment/&lt;name&gt;" },
      { id: 'B', text: "Scale replicas to 0, apply changes, and scale back up" },
      { id: 'C', text: "Edit the etcd database directly" },
      { id: 'D', text: "Kubernetes automatically merges updates within 5 minutes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Pausing a deployment (`kubectl rollout pause deployment/&lt;name&gt;`) allows multiple edits to the pod template without triggering intermediate rollouts. Running `kubectl rollout resume deployment/&lt;name&gt;` triggers a single, unified rollout containing all modifications.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-deployment",
    tags: ["Kubernetes", "Deployments", "Rollout Pause"]
  },
  {
    id: "k8s-ckad-55",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment revisionHistoryLimit and ReplicaSet Cleanup",
    scenario: "An active CI/CD pipeline deploys updates to a Deployment 20 times per day. Hundreds of old, inactive ReplicaSets accumulate in the namespace, consuming cluster memory.",
    question: "Which Deployment specification field controls how many old ReplicaSets are retained for rollback?",
    options: [
      { id: 'A', text: "historyLimit: 5" },
      { id: 'B', text: "revisionHistoryLimit: 5" },
      { id: 'C', text: "maxReplicaSets: 5" },
      { id: 'D', text: "ttlSecondsAfterFinished: 5" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`revisionHistoryLimit` in a Deployment specification defines the number of old, inactive ReplicaSets to retain for rollbacks (default is 10). Setting it to a smaller number like 3 or 5 cleans up older ReplicaSet objects automatically.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#revision-history-limit",
    tags: ["Kubernetes", "Deployments", "revisionHistoryLimit"]
  },
  {
    id: "k8s-ckad-56",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "StatefulSets: Headless Service Requirement",
    scenario: "A developer is deploying a 3-node MongoDB cluster using a Kubernetes StatefulSet. The database nodes need unique, stable network identities (`mongodb-0`, `mongodb-1`, `mongodb-2`) that can be addressed directly via DNS.",
    question: "Which Kubernetes Service configuration is mandatory for a StatefulSet to provide stable network IDs?",
    options: [
      { id: 'A', text: "A Headless Service with clusterIP: None matching serviceName in the StatefulSet spec" },
      { id: 'B', text: "A standard ClusterIP service with a virtual IP" },
      { id: 'C', text: "A NodePort service with sticky sessions" },
      { id: 'D', text: "An ExternalName service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "StatefulSets require a `Headless Service` (a Service with `clusterIP: None`) declared in `spec.serviceName`. The headless service does not allocate a virtual IP; instead, CoreDNS creates stable A/AAAA records for each individual pod (e.g. `&lt;pod-name&gt;.&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local`).",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#limitations",
    tags: ["Kubernetes", "StatefulSets", "Headless Service"]
  },
  {
    id: "k8s-ckad-57",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "StatefulSets: volumeClaimTemplates for Independent Persistent Storage",
    scenario: "A distributed Kafka cluster deployed on Kubernetes requires each broker pod (`kafka-0`, `kafka-1`, `kafka-2`) to have its own dedicated 100 GB PersistentVolume that remains attached to that specific broker identity across restarts.",
    question: "Which StatefulSet construct automatically provisions a distinct PersistentVolumeClaim for each ordinal pod replica?",
    options: [
      { id: 'A', text: "volumeClaimTemplates" },
      { id: 'B', text: "volumes in the pod spec" },
      { id: 'C', text: "emptyDir volumes" },
      { id: 'D', text: "persistentVolumeClaim volumeSource" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`volumeClaimTemplates` in a StatefulSet automatically generates a unique PersistentVolumeClaim (PVC) for each pod replica (e.g. `data-kafka-0`, `data-kafka-1`). When a pod is rescheduled or restarted, it reattaches to its exact ordinal PVC and disk.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#volume-claim-templates",
    tags: ["Kubernetes", "StatefulSets", "volumeClaimTemplates"]
  },
  {
    id: "k8s-ckad-58",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "StatefulSets: podManagementPolicy (OrderedReady vs Parallel)",
    scenario: "A developer is deploying an analytical worker cluster using a StatefulSet because each worker needs stable hostnames and storage. However, pods do not depend on each other and can start up or shut down concurrently without waiting for previous pods.",
    question: "Which StatefulSet setting enables concurrent pod creation and termination?",
    options: [
      { id: 'A', text: "podManagementPolicy: Parallel" },
      { id: 'B', text: "podManagementPolicy: OrderedReady" },
      { id: 'C', text: "strategy: Concurrent" },
      { id: 'D', text: "parallelism: true" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "By default, StatefulSets use `podManagementPolicy: OrderedReady`, launching pods sequentially (0, then 1, then 2). Setting `podManagementPolicy: Parallel` instructs the StatefulSet controller to launch or terminate all pods in parallel without waiting for prior pods to become Ready.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#pod-management-policies",
    tags: ["Kubernetes", "StatefulSets", "podManagementPolicy"]
  },
  {
    id: "k8s-ckad-59",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "DaemonSets: Guaranteeing One Pod Per Eligible Node",
    scenario: "An enterprise monitoring agent (Datadog/Prometheus Node Exporter) must run on every single worker node in a Kubernetes cluster, including newly provisioned autoscaled nodes.",
    question: "Which Kubernetes workload controller ensures that a copy of a pod runs on all (or selected) nodes?",
    options: [
      { id: 'A', text: "DaemonSet" },
      { id: 'B', text: "Deployment with high replicas" },
      { id: 'C', text: "StatefulSet" },
      { id: 'D', text: "CronJob" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A `DaemonSet` ensures that all (or some) nodes run a copy of a pod. As nodes are added to the cluster, pods are added to them. As nodes are removed, those pods are garbage collected. DaemonSets are standard for log forwarders, node exporters, and storage daemons.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",
    tags: ["Kubernetes", "DaemonSet", "Node Agents"]
  },
  {
    id: "k8s-ckad-60",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "DaemonSets: updateStrategy (RollingUpdate vs OnDelete)",
    scenario: "A systems administrator updates the image tag in a DaemonSet manifest.",
    question: "By default, how does Kubernetes roll out changes to nodes running the DaemonSet?",
    options: [
      { id: 'A', text: "DaemonSets cannot be updated once created" },
      { id: 'B', text: "OnDelete (waits until the administrator manually kills the old pod on each node)" },
      { id: 'C', text: "RollingUpdate (default, terminates and replaces DaemonSet pods one node at a time)" },
      { id: 'D', text: "Recreate (kills all pods across all nodes at once)" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The default `updateStrategy` for DaemonSets is `RollingUpdate`. The controller updates pods on one node at a time (controlled by `maxUnavailable`). Under `OnDelete`, new pods are only created when the user manually deletes the old pod on that node.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/#rolling-update-strategy",
    tags: ["Kubernetes", "DaemonSet", "updateStrategy"]
  },
  {
    id: "k8s-ckad-61",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Blue-Green Deployment Pattern Using Kubernetes Services and Labels",
    scenario: "A company deploys version 2 of an application using Deployment `app-v2` alongside active Deployment `app-v1`. When testing passes, traffic must switch instantaneously to v2 with zero downtime.",
    question: "How is instantaneous traffic cutover achieved natively in Kubernetes?",
    options: [
      { id: 'A', text: "Delete the v1 Deployment" },
      { id: 'B', text: "Restart the CoreDNS pods" },
      { id: 'C', text: "Update the selector label in the Kubernetes Service from version: v1 to version: v2" },
      { id: 'D', text: "Reboot the worker nodes" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In a native Kubernetes `Blue-Green deployment`, both versions run concurrently in separate Deployments. The Kubernetes Service routes traffic based on its `spec.selector` labels (e.g. `app: web, version: v1`). Updating the selector to `version: v2` instantly repoints the Service to the new pods.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#alternative-deployment-strategies",
    tags: ["Kubernetes", "Blue-Green", "Service Routing"]
  },
  {
    id: "k8s-ckad-62",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Canary Deployment Pattern Using Pod Replica Ratios",
    scenario: "An engineering team wants to route approximately 10% of production traffic to a new experimental release `v2` and 90% to stable `v1` without deploying a complex service mesh.",
    question: "How can this be achieved using native Kubernetes Deployments and a single Service?",
    options: [
      { id: 'A', text: "Configure weight: 10% in the Service manifest" },
      { id: 'B', text: "Run a shell script on the node that drops 90% of packets" },
      { id: 'C', text: "Deploy two Services with different IP addresses" },
      { id: 'D', text: "Create Deployment v1 with 9 replicas and Deployment v2 with 1 replica, both sharing the same Service selector labels (app: frontend)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Standard Kubernetes Services distribute traffic evenly across all matching endpoint pods. By running Deployment v1 with 9 replicas and Deployment v2 with 1 replica sharing the same selector (e.g. `app: frontend`), the Service naturally routes 10% of traffic to the single v2 pod.",
    referenceUrl: "https://kubernetes.io/docs/concepts/cluster-administration/manage-deployment/#canary-deployments",
    tags: ["Kubernetes", "Canary", "Replica Ratios"]
  },
  {
    id: "k8s-ckad-63",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Horizontal Pod Autoscaler (HPA) v2: Target Metric Types",
    scenario: "A DevOps engineer configures an HPA to scale a web application based on average CPU utilization exceeding 70% and custom HTTP requests-per-second exceeding 500.",
    question: "Which Kubernetes autoscaling resource automatically scales pod replicas based on metrics?",
    options: [
      { id: 'A', text: "VerticalPodAutoscaler" },
      { id: 'B', text: "HorizontalPodAutoscaler (autoscaling/v2)" },
      { id: 'C', text: "NodeAutoProvisioner" },
      { id: 'D', text: "ClusterAutoscaler" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The `HorizontalPodAutoscaler` (HPA) automatically scales the number of Pods in a Deployment or StatefulSet based on observed CPU/memory utilization or custom metrics (like HTTP requests/sec or queue length) via the metrics API.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",
    tags: ["Kubernetes", "HPA", "Autoscaling"]
  },
  {
    id: "k8s-ckad-64",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "HPA Mandatory Prerequisite: Resource Requests",
    scenario: "A developer creates an HPA targeting an application Deployment with `averageUtilization: 60%` for CPU. However, the HPA fails with status `unknown` and does not scale pods during high traffic.",
    question: "What missing configuration in the Deployment pod specification causes this failure?",
    options: [
      { id: 'A', text: "The container is running as root" },
      { id: 'B', text: "The container specification lacks resources.limits.cpu" },
      { id: 'C', text: "The pod lacks a readiness probe" },
      { id: 'D', text: "The container specification lacks resources.requests.cpu" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "HPA calculates target utilization percentages against the pod's `resources.requests.cpu` (e.g. `current_usage / requested_cpu * 100%`). If resource requests are not configured on the containers, the HPA cannot compute percentage utilization and fails to scale.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#how-does-an-hpa-work",
    tags: ["Kubernetes", "HPA", "Resource Requests"]
  },
  {
    id: "k8s-ckad-65",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "HPA Scaling Behavior Policies: Stabilization Window (scaleDown)",
    scenario: "A web application experiences brief 30-second traffic lulls that cause the HPA to prematurely terminate pods, only to scale back up 1 minute later.",
    question: "Which HPA configuration parameter prevents premature scale-down by evaluating peak metrics over a cooldown window?",
    options: [
      { id: 'A', text: "behavior.scaleDown.stabilizationWindowSeconds: 300" },
      { id: 'B', text: "cooldownPeriod: 300s" },
      { id: 'C', text: "behavior.scaleUp.stabilizationWindowSeconds: 300" },
      { id: 'D', text: "minReplicas: 10" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In HPA `autoscaling/v2`, `behavior.scaleDown.stabilizationWindowSeconds` (default 300s / 5 minutes) restricts scale-down by observing the highest desired replica count during the window, smoothing flappy traffic dips and preventing thrashing.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#support-for-configurable-scaling-behavior",
    tags: ["Kubernetes", "HPA", "Stabilization Window"]
  },
  {
    id: "k8s-ckad-66",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Vertical Pod Autoscaler (VPA) Modes: Off vs Initial vs Recreate vs Auto",
    scenario: "A platform team wants to identify optimal CPU and memory resource requests for legacy microservices. The team wants recommendations displayed in YAML status without automatically modifying or restarting running pods.",
    question: "Which Vertical Pod Autoscaler updateMode satisfies this requirement?",
    options: [
      { id: 'A', text: "updateMode: Off" },
      { id: 'B', text: "updateMode: Auto" },
      { id: 'C', text: "updateMode: Recreate" },
      { id: 'D', text: "updateMode: Initial" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Vertical Pod Autoscaler (VPA) `updateMode: Off` calculates recommended CPU and memory requests based on historical usage and writes recommendations to the VPA status object without evicting or modifying running pods.",
    referenceUrl: "https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler",
    tags: ["Kubernetes", "VPA", "Resource Sizing"]
  },
  {
    id: "k8s-ckad-67",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize: Bases and Overlays Architecture",
    scenario: "A development organization deploys the same application to `dev`, `staging`, and `prod` environments. Each environment has slight variations in replica counts, ingress domains, and resource limits.",
    question: "Which Kustomize structure organizes common declarative manifests and environment-specific customizations?",
    options: [
      { id: 'A', text: "A base/ directory containing standard manifests and overlays/ (dev, staging, prod) containing kustomization.yaml patches" },
      { id: 'B', text: "Copying and pasting the entire folder 3 times" },
      { id: 'C', text: "Using bash scripts with sed replacement" },
      { id: 'D', text: "Hardcoding all configurations into a single YAML file" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`Kustomize` uses a template-free `base` and `overlay` architecture. The `base/` directory contains standard, common manifests. Each environment in `overlays/&lt;env&gt;/` declares patches, replica overrides, and namespace customizations without duplicating boilerplate manifests.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/#customizing",
    tags: ["Kubernetes", "Kustomize", "Overlays"]
  },
  {
    id: "k8s-ckad-68",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize: configMapGenerator and secretGenerator",
    scenario: "A developer uses Kustomize to inject configuration files into Kubernetes. When a developer edits `config.properties`, the deployed pods must automatically trigger a rolling restart to pick up the changes.",
    question: "How does Kustomize's configMapGenerator guarantee that pods reload upon configuration updates?",
    options: [
      { id: 'A', text: "It executes kubectl exec in all pods to restart the process" },
      { id: 'B', text: "It deletes the namespace" },
      { id: 'C', text: "It modifies etcd directly to force a restart" },
      { id: 'D', text: "It appends a unique content-hash suffix to the ConfigMap name (e.g. my-config-7b8f9h), changing the pod template and triggering a rolling update" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kustomize `configMapGenerator` appends a cryptographic hash of the file contents to the generated ConfigMap name. Because the ConfigMap name changes in the Deployment's pod template, Kubernetes recognizes the template mutation and automatically triggers a zero-downtime rolling update.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/configmapgenerator/",
    tags: ["Kubernetes", "Kustomize", "configMapGenerator"]
  },
  {
    id: "k8s-ckad-69",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Kustomize: JSON 6902 Patches vs Strategic Merge Patches",
    scenario: "A developer needs to modify an exact single element inside a nested list in a Kubernetes Deployment manifest (e.g. updating the second container's image) using Kustomize.",
    question: "Which patch format provides precise array index manipulation (op: replace, path: /spec/template/spec/containers/1/image)?",
    options: [
      { id: 'A', text: "ConfigMapGenerator" },
      { id: 'B', text: "JSON 6902 Patch (patchesJson6902 / patches target with ops)" },
      { id: 'C', text: "Strategic Merge Patch" },
      { id: 'D', text: "Replica count override" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kustomize supports two patching mechanisms: `Strategic Merge Patches` (declarative YAML snippets merged by key) and `JSON 6902 Patches` (RFC 6902 operations: `add`, `remove`, `replace` using exact JSON pointer paths), ideal for modifying specific array indexes.",
    referenceUrl: "https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patchesjson6902/",
    tags: ["Kubernetes", "Kustomize", "JSON 6902"]
  },
  {
    id: "k8s-ckad-70",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Helm: Release Management (install, upgrade, rollback)",
    scenario: "A developer deploys an application via Helm (`helm install my-app ./chart`) and modifies `values.yaml`.",
    question: "How does the developer apply the updates to the running release?",
    options: [
      { id: 'A', text: "helm apply my-app" },
      { id: 'B', text: "helm upgrade my-app ./chart -f values.yaml" },
      { id: 'C', text: "helm install my-app ./chart --force" },
      { id: 'D', text: "kubectl apply -f chart/" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`helm upgrade [RELEASE] [CHART]` applies configuration or template updates to an existing Helm release, creating a new release revision and tracking historical changes for potential rollbacks (`helm rollback`).",
    referenceUrl: "https://helm.sh/docs/helm/helm_upgrade/",
    tags: ["Helm", "Package Management", "helm upgrade"]
  },
  {
    id: "k8s-ckad-71",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Helm: Overriding Values via CLI (--set vs -f)",
    scenario: "In an automated CI/CD pipeline, a build script needs to override the container image tag in a Helm chart dynamically with the latest Git commit SHA.",
    question: "Which Helm CLI flag overrides specific individual value keys at runtime?",
    options: [
      { id: 'A', text: "--set image.tag=$COMMIT_SHA" },
      { id: 'B', text: "--values $COMMIT_SHA" },
      { id: 'C', text: "--override tag=$COMMIT_SHA" },
      { id: 'D', text: "--env tag=$COMMIT_SHA" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The `--set` flag allows passing individual key-value overrides directly on the CLI (`helm upgrade --set image.tag=v1.2.3`), taking precedence over default values in `values.yaml`.",
    referenceUrl: "https://helm.sh/docs/helm/helm_install/#options",
    tags: ["Helm", "--set", "CI/CD Deployment"]
  },
  {
    id: "k8s-ckad-72",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Helm: Release Status and History Inspection",
    scenario: "A developer needs to view all historical revisions of a Helm release named `payment-service` to determine when a broken configuration was introduced.",
    question: "Which Helm command displays historical revisions, dates, and chart versions for a release?",
    options: [
      { id: 'A', text: "helm history payment-service" },
      { id: 'B', text: "helm list --all" },
      { id: 'C', text: "helm status payment-service" },
      { id: 'D', text: "helm get values payment-service" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "`helm history [RELEASE]` displays a table of all past revisions for that release, including the revision number, timestamp, status (deployed/superseded), chart name, and release description.",
    referenceUrl: "https://helm.sh/docs/helm/helm_history/",
    tags: ["Helm", "helm history", "Audit"]
  },
  {
    id: "k8s-ckad-73",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Helm Rollback to Specific Previous Revision",
    scenario: "A Helm release revision 4 introduced a fatal memory leak. The team decides to rollback immediately to revision 2.",
    question: "Which command executes the rollback to revision 2?",
    options: [
      { id: 'A', text: "helm undo payment-service --revision=2" },
      { id: 'B', text: "helm revert payment-service 2" },
      { id: 'C', text: "helm upgrade payment-service --revision=2" },
      { id: 'D', text: "helm rollback payment-service 2" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "`helm rollback [RELEASE] [REVISION]` rolls back the release to the specified past revision number. Helm generates a new revision (e.g. revision 5) whose state is identical to revision 2.",
    referenceUrl: "https://helm.sh/docs/helm/helm_rollback/",
    tags: ["Helm", "helm rollback", "Disaster Recovery"]
  },
  {
    id: "k8s-ckad-74",
    difficulty: "medium",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Pod Disruption Budget (PDB) minAvailable vs maxUnavailable",
    scenario: "A payment gateway application running on 5 pods requires that during Kubernetes node upgrades or cluster maintenance, at least 4 pods must remain online at all times.",
    question: "Which PodDisruptionBudget specification enforces this availability guarantee?",
    options: [
      { id: 'A', text: "parallelism: 4" },
      { id: 'B', text: "maxUnavailable: 4" },
      { id: 'C', text: "minAvailable: 1" },
      { id: 'D', text: "minAvailable: 4 (or maxUnavailable: 1)" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A `PodDisruptionBudget` limits voluntary evictions (like draining nodes for maintenance). Setting `minAvailable: 4` (or equivalently `maxUnavailable: 1` out of 5) prevents cluster draining operations from evicting more than 1 pod concurrently.",
    referenceUrl: "https://kubernetes.io/docs/tasks/run-application/configure-pdb/",
    tags: ["Kubernetes", "PDB", "High Availability"]
  },
  {
    id: "k8s-ckad-75",
    difficulty: "hard",
    certId: "k8s-ckad",
    domainId: "d2",
    domainName: "Application Deployment",
    title: "Deployment Rollout Status and Automated CI/CD Gates",
    scenario: "A CI/CD deployment script runs `kubectl apply -f deployment.yaml`. The pipeline script must block and wait until all new pods have passed readiness probes, failing if the rollout times out.",
    question: "Which kubectl command blocks until the deployment rollout is successfully completed?",
    options: [
      { id: 'A', text: "kubectl get pods -w" },
      { id: 'B', text: "kubectl rollout status deployment/&lt;name&gt; --timeout=300s" },
      { id: 'C', text: "kubectl describe deployment/&lt;name&gt;" },
      { id: 'D', text: "kubectl rollout check deployment/&lt;name&gt;" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "`kubectl rollout status deployment/&lt;name&gt;` watches the rollout progress, returning exit code `0` once all replicas are updated and Ready. Adding `--timeout=&lt;duration&gt;` ensures the CI/CD job fails cleanly if pods fail health checks within the time limit.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/",
    tags: ["Kubernetes", "kubectl rollout status", "CI/CD Gates"]
  }
];

export default K8S_CKAD_QUESTIONS_3;
