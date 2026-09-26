export const CNCF_KCNA_QUESTIONS_16 = [
  {
    id: "cncf-kcna-376",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "One chart, three environments",
    scenario: "A small SaaS team installs its web application from a Helm chart into dev, staging and production clusters. Production needs five replicas and a larger memory limit, while dev runs one replica. The team wants to keep a single copy of the chart templates and only record what differs per environment.",
    question: "How should the team supply the production-specific settings?",
    options: [
      { id: 'A', text: "Write a values-prod.yaml file holding the overrides and pass it with -f when running helm upgrade --install for production." },
      { id: 'B', text: "Bump the version field in Chart.yaml for production so Helm selects a separate set of templates for that cluster." },
      { id: 'C', text: "Copy the chart into a second chart directory for production and edit the replica count directly in its Deployment template." },
      { id: 'D', text: "Install the chart unchanged and then run kubectl scale and kubectl set resources against the production Deployment." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Helm merges values files over the chart's default values.yaml, so a per-environment file passed with -f (or --values) changes only replica count and limits while every environment shares the same templates. Copying the chart duplicates the templates and lets them drift apart. Running kubectl scale and kubectl set resources after the install changes the live objects outside Helm, and the next helm upgrade resets them to the chart values. The chart version labels a package release; it does not select different templates per cluster.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/values_files/",
    tags: ["Helm", "Values", "Environments"]
  },
  {
    id: "cncf-kcna-377",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Template-free environment variants",
    scenario: "A platform team keeps plain Kubernetes YAML for an API service in Git and dislikes templating languages. Staging needs a different namespace and an extra label, and production needs a higher replica count. They want to layer these differences on a shared base without placeholders in the YAML, using a tool built into kubectl.",
    question: "Which approach fits these requirements?",
    options: [
      { id: 'A', text: "Generate a shared base with kubectl create deployment and hand-edit a separate copy of it for each environment." },
      { id: 'B', text: "Package the service as a Helm chart and express the namespace, label and replica differences as templated values." },
      { id: 'C', text: "Create a Kustomize base with the shared manifests and one overlay per environment, applied with kubectl apply -k." },
      { id: 'D', text: "Write a Custom Resource Definition that stores the per-environment differences and let the API server merge them in." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kustomize customises plain YAML by patching a base from overlays, with no template syntax, and kubectl has it built in through apply -k and kustomize. Helm would meet the variant need but relies on Go templates, which the team wants to avoid. Generating manifests imperatively with kubectl create deployment produces separate files that must be edited by hand afterwards and does not layer on a shared base. A CRD only defines a new resource type; the API server does not merge per-environment patches into other objects.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Kustomize", "Overlays", "kubectl"]
  },
  {
    id: "cncf-kcna-378",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "No capacity dip during a rollout",
    scenario: "A payments API runs as a Deployment with 4 replicas, and load tests show the service needs all 4 pods to meet its latency target at peak. The cluster has spare room for one extra pod. The team wants a rolling update that never drops below 4 ready pods.",
    question: "Which rolling update settings meet the requirement?",
    options: [
      { id: 'A', text: "maxSurge: 25% and maxUnavailable: 25%, which are the defaults and keep capacity steady on a 4-replica set" },
      { id: 'B', text: "maxSurge: 1 and maxUnavailable: 0, so that a new pod must become ready before any old pod is removed" },
      { id: 'C', text: "maxSurge: 0 and maxUnavailable: 1, so that one old pod is removed before each replacement pod is ready" },
      { id: 'D', text: "strategy type Recreate with minReadySeconds: 30 so that every new pod proves stable before taking traffic" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "With maxUnavailable set to 0 the controller may never take the ready count below the desired 4, and maxSurge 1 lets it add one extra pod at a time, which fits the single spare slot. maxSurge 0 with maxUnavailable 1 does the opposite: it removes a pod first and runs at 3 during each step. The 25% defaults round to one surge pod and one unavailable pod on 4 replicas, so capacity can dip to 3. Recreate terminates every old pod before creating new ones, causing a full outage regardless of minReadySeconds.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment",
    tags: ["Deployment", "Rolling update", "maxSurge"]
  },
  {
    id: "cncf-kcna-379",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Legacy app that cannot run twice",
    scenario: "A logistics company containerised an older inventory service that takes an exclusive lock on a shared file store when it starts. If two versions run at the same moment, the second one fails and corrupts its cache. A short outage during upgrades is acceptable to the business.",
    question: "Which Deployment strategy should the team configure?",
    options: [
      { id: 'A', text: "Recreate, so all existing pods are terminated before any pod of the new version starts" },
      { id: 'B', text: "RollingUpdate with maxSurge set to 1, so exactly one new pod starts alongside the old one" },
      { id: 'C', text: "A blue-green switch that runs both versions fully before moving the Service selector" },
      { id: 'D', text: "RollingUpdate with a readiness probe that only passes once the file lock is acquired" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Recreate strategy kills all old pods before creating new ones, so the two versions never overlap, at the cost of a brief outage the business has accepted. Any RollingUpdate configuration, including maxSurge 1, keeps old and new pods running at the same time during the transition. A readiness probe only controls traffic; the new pod would still start and hit the lock conflict. Blue-green deliberately runs both versions at once, which is exactly what this service cannot tolerate.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment",
    tags: ["Deployment", "Recreate", "Strategy"]
  },
  {
    id: "cncf-kcna-380",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Instant cutover between two versions",
    scenario: "An online retailer runs checkout-v1 as a Deployment whose pods carry the labels app: checkout and version: v1, fronted by a Service. The team has deployed checkout-v2 alongside it with version: v2 and fully tested it through a separate internal Service. They want to switch all customer traffic at once and be able to switch back instantly.",
    question: "What completes this blue-green release with plain Kubernetes objects?",
    options: [
      { id: 'A', text: "Run kubectl rollout restart on checkout-v2 so that its pods register themselves with the customer Service" },
      { id: 'B', text: "Delete the customer Service and recreate it with type LoadBalancer pointing at the checkout-v2 Deployment" },
      { id: 'C', text: "Scale checkout-v1 to zero replicas so the customer Service automatically finds only the remaining v2 pods" },
      { id: 'D', text: "Change the customer Service selector from version: v1 to version: v2, and revert it if a problem appears" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Service routes to whatever pods match its selector, so repointing the selector from version v1 to version v2 moves all traffic in one step, and pointing it back is an equally fast rollback while v1 is still running. Scaling v1 to zero does not help if the selector still requires version v1; the Service would have no endpoints. Restarting v2 does not change which labels the customer Service selects. Recreating the Service as a LoadBalancer changes how it is exposed and causes an interruption, and Services select pods by label, not by Deployment name.",
    referenceUrl: "https://kubernetes.io/docs/concepts/services-networking/service/",
    tags: ["Blue-green", "Service", "Labels"]
  },
  {
    id: "cncf-kcna-381",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Ten percent to the new build",
    scenario: "A media company wants to expose a new recommendation engine build to roughly 10% of requests before a full rollout. It has no service mesh or ingress controller with traffic splitting, only a ClusterIP Service selecting pods labelled app: recs. The stable Deployment currently runs 9 replicas.",
    question: "How can the team approximate the canary with core Kubernetes objects?",
    options: [
      { id: 'A', text: "Add a second Deployment with 1 replica of the new build, labelled app: recs, so the Service spreads load across all 10 pods" },
      { id: 'B', text: "Create a second Service with a 10% weight annotation that selects only pods labelled for the new build" },
      { id: 'C', text: "Set sessionAffinity: ClientIP on the app: recs Service so one in ten clients is pinned to the new recommendation build" },
      { id: 'D', text: "Set maxSurge to 10% on the stable Deployment and pause the rollout once the first pod of the new build is ready" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Because the Service balances across every pod that matches app: recs, running 1 canary pod next to 9 stable pods sends roughly one request in ten to the new build, and the ratio is tuned by changing replica counts. Pausing a rolling update mid-way can also leave one new pod, but it is fragile and ties the canary to the rollout machinery rather than an independent Deployment. Core Services have no weight annotation for splitting traffic. Session affinity keeps a client on whichever pod it first reached; it does not choose a percentage of clients for a version.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/management/#canary-deployments",
    tags: ["Canary", "Deployment", "Service"]
  },
  {
    id: "cncf-kcna-382",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Bad release, fast revert",
    scenario: "Ten minutes after updating the image of the orders Deployment, error rates spike and the on-call engineer wants the previous version back immediately. The earlier manifest is not handy, but the Deployment still has its default revision history.",
    question: "Which command restores the previous version most directly?",
    options: [
      { id: 'A', text: "kubectl rollout restart deployment/orders" },
      { id: 'B', text: "kubectl scale deployment/orders --replicas=0" },
      { id: 'C', text: "kubectl rollout undo deployment/orders" },
      { id: 'D', text: "kubectl delete pods -l app=orders --now" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl rollout undo rolls the Deployment back to the previous revision recorded in its ReplicaSet history (or a chosen one with --to-revision), using the same rolling update mechanics. rollout restart recreates pods with the current, faulty template. Deleting the pods only makes the ReplicaSet recreate them from the same bad template. Scaling to zero stops the errors by taking the service down entirely rather than restoring the working version.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Rollback", "kubectl rollout", "Deployment"]
  },
  {
    id: "cncf-kcna-383",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Nothing left to roll back to",
    scenario: "To keep namespaces tidy, a team set revisionHistoryLimit: 0 on all its Deployments. After a faulty image update, kubectl rollout undo reports that no rollout history was found, and kubectl get rs shows only the new ReplicaSet.",
    question: "Why can the team not roll back?",
    options: [
      { id: 'A', text: "Old ReplicaSets were garbage-collected immediately, so no earlier template is kept to restore" },
      { id: 'B', text: "rollout undo only works for StatefulSets; Deployments must be reverted by reapplying YAML" },
      { id: 'C', text: "The rollout is still paused, and undo is refused until kubectl rollout resume is executed" },
      { id: 'D', text: "Rollback requires the change-cause annotation, which the team never set on the Deployment" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Deployment's history is the set of old ReplicaSets it retains, and revisionHistoryLimit controls how many are kept (default 10). Setting it to 0 deletes each old ReplicaSet as soon as a rollout completes, so there is no earlier pod template to return to. The change-cause annotation only adds a description to rollout history. rollout undo works on Deployments, DaemonSets and StatefulSets. A paused rollout would still show its old ReplicaSet, and the symptoms here point to deleted history.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#clean-up-policy",
    tags: ["revisionHistoryLimit", "Rollback", "ReplicaSet"]
  },
  {
    id: "cncf-kcna-384",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Rollout that never finishes",
    scenario: "A Deployment update to a new image keeps producing pods that fail their readiness probe. The Deployment uses the default progressDeadlineSeconds of 600, and after twelve minutes the old pods are still serving while the new ReplicaSet has no ready pods.",
    question: "What has Kubernetes done once the deadline passed?",
    options: [
      { id: 'A', text: "It deleted the new ReplicaSet and paused the Deployment until someone runs kubectl rollout resume" },
      { id: 'B', text: "It set the Progressing condition to False with reason ProgressDeadlineExceeded and left the rollout as it was" },
      { id: 'C', text: "It scaled the old ReplicaSet to zero, since the deadline forces the rollout to complete by replacing pods" },
      { id: 'D', text: "It rolled the Deployment back to the previous ReplicaSet automatically and recorded a new revision" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "When a Deployment makes no progress within progressDeadlineSeconds, the controller only reports the failure: the Progressing condition becomes False with reason ProgressDeadlineExceeded, which tools such as kubectl rollout status turn into a non-zero exit. Kubernetes does not roll back by itself; a person or a higher-level tool must run rollout undo. It neither deletes the new ReplicaSet nor pauses the Deployment. Scaling away the healthy old pods would be the opposite of safe behaviour, and maxUnavailable continues to protect them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#failed-deployment",
    tags: ["progressDeadlineSeconds", "Deployment", "Rollout"]
  },
  {
    id: "cncf-kcna-385",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Repeatable deploys from a repository",
    scenario: "A startup's engineers currently create resources with commands such as kubectl run and kubectl expose, and nobody can tell what the cluster should look like after a node rebuild. They want the desired state kept in version control and reapplied the same way every time.",
    question: "Which way of working should they adopt?",
    options: [
      { id: 'A', text: "Export the live objects with kubectl get -o yaml nightly and treat the export as documentation" },
      { id: 'B', text: "Use kubectl edit on the live objects so every change is saved directly into the cluster state in etcd" },
      { id: 'C', text: "Keep a shell history file of the kubectl run and expose commands and replay it after each rebuild" },
      { id: 'D', text: "Store manifests in Git and run kubectl apply -f against the directory to reach the declared state" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declarative object configuration keeps the desired state in manifest files, and kubectl apply compares them with the live objects and creates or updates only what differs, so the same files rebuild the same state every time. Replaying imperative commands fails as soon as an object already exists and records no history of intent. Nightly exports capture state after the fact, including server-generated fields, rather than defining what it should be. kubectl edit changes live objects with no reviewable source of truth.",
    referenceUrl: "https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/",
    tags: ["Declarative", "kubectl apply", "Git"]
  },
  {
    id: "cncf-kcna-386",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Preview before you apply",
    scenario: "A reviewer at an insurance firm wants every pull request that touches Kubernetes manifests to show exactly which fields would change on the live cluster before anything is applied. The pipeline already has read access to the cluster.",
    question: "Which command should the pipeline run to produce that preview?",
    options: [
      { id: 'A', text: "kubectl get -f manifests/ -o yaml" },
      { id: 'B', text: "kubectl diff -f manifests/" },
      { id: 'C', text: "kubectl explain deployment.spec" },
      { id: 'D', text: "kubectl describe -f manifests/" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl diff sends the manifests to the API server as a server-side dry run and prints a diff between the live objects and what they would become, which is exactly a preview of the change. kubectl get prints the current live objects, not the difference. kubectl explain documents the fields of a resource type. kubectl describe shows a human-readable summary and events of the existing objects without comparing them to the files.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_diff/",
    tags: ["kubectl diff", "Review", "CI"]
  },
  {
    id: "cncf-kcna-387",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Shipping a database with the app chart",
    scenario: "A team packages its ticketing app as a Helm chart and wants every install to also deploy a Redis cache from an existing community chart, pinned to a known version range. They do not want to copy the Redis templates into their own repository.",
    question: "How should the chart include Redis?",
    options: [
      { id: 'A', text: "Declare Redis under dependencies in Chart.yaml with its repository and version, then run helm dependency update" },
      { id: 'B', text: "Add a pre-install hook Job to the chart that runs helm install for Redis from the community repository" },
      { id: 'C', text: "Install Redis separately with kubectl apply and add a readiness probe in the app that waits for Redis to start" },
      { id: 'D', text: "Reference the Redis chart's URL in values.yaml so that Helm fetches and renders it during template expansion" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Helm charts declare subcharts in the dependencies list of Chart.yaml with a name, version constraint and repository; helm dependency update downloads them into charts/, and they install and upgrade together with the parent release. Running helm from a hook Job needs Helm and credentials inside the cluster and creates a separate, unmanaged release. values.yaml supplies configuration, not chart sources. Installing Redis separately with kubectl works but abandons the single package the team wants.",
    referenceUrl: "https://helm.sh/docs/helm/helm_dependency/",
    tags: ["Helm", "Dependencies", "Subcharts"]
  },
  {
    id: "cncf-kcna-388",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Same manifest, different image",
    scenario: "A bank discovered that two clusters running the same manifest, image: registry.example.com/ledger:latest, were actually running different code, because the tag had been pushed again between deploys. Auditors want every deploy to reference exactly one immutable image.",
    question: "How should the manifests reference the image?",
    options: [
      { id: 'A', text: "Keep the latest tag and set imagePullPolicy: Never so nodes reuse their cached copy" },
      { id: 'B', text: "Pin the image by its digest, such as ledger@sha256:3f9a0c, instead of the tag" },
      { id: 'C', text: "Keep the latest tag but set imagePullPolicy: Always so each node pulls the newest build" },
      { id: 'D', text: "Mirror the ledger image to a second registry and reference the mirror's latest tag in the manifest" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A digest is the content hash of the image manifest, so a reference by digest always resolves to exactly the same bytes, satisfying the audit requirement. imagePullPolicy Always with a mutable tag guarantees nodes pick up whatever was pushed last, which is the cause of the drift. Never makes each node run whatever it happened to cache, so nodes can differ. Mirroring to another registry keeps a mutable tag and changes nothing about immutability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Images", "Digest", "Immutability"]
  },
  {
    id: "cncf-kcna-389",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Config updated, pods unchanged",
    scenario: "A team updated a ConfigMap that feeds LOG_LEVEL into its API pods as an environment variable using envFrom. The ConfigMap now shows the new value, but the running pods still log at the old level an hour later. The Deployment spec itself was not changed.",
    question: "What should the team do so the pods pick up the new value?",
    options: [
      { id: 'A', text: "Run kubectl annotate on the ConfigMap so the Deployment controller notices the change and rolls out new pods" },
      { id: 'B', text: "Mark the ConfigMap immutable: true so that the kubelet pushes the frozen values into every consuming pod" },
      { id: 'C', text: "Run kubectl rollout restart on the Deployment so new pods start and read the ConfigMap at container creation" },
      { id: 'D', text: "Wait for the kubelet sync period, after which environment variables from ConfigMaps refresh inside running containers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Environment variables are set once when a container starts, so a ConfigMap change never reaches a running process through env or envFrom; a rollout restart replaces the pods, and the new containers read the current values. The kubelet periodically refreshes ConfigMaps mounted as volumes, not environment variables. Marking a ConfigMap immutable prevents further edits and reduces API watch load; it does not propagate anything. The Deployment controller watches its own pod template, not the ConfigMaps it references, so annotating the ConfigMap triggers nothing.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/configmap/#mounted-configmaps-are-updated-automatically",
    tags: ["ConfigMap", "Rollout restart", "Environment variables"]
  },
  {
    id: "cncf-kcna-390",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Schema migration before the new version",
    scenario: "Each release of a booking application's Helm chart may include database schema changes. The migration must finish successfully before the new application pods are rolled out, and a failed migration should stop the upgrade.",
    question: "How should the chart run the migration?",
    options: [
      { id: 'A', text: "As a CronJob in the chart that checks the schema every minute and applies pending changes" },
      { id: 'B', text: "As an init container in the application pods, so each replica runs the migration as it starts" },
      { id: 'C', text: "As a sidecar container in the application pods that runs migrations alongside the server" },
      { id: 'D', text: "As a Job annotated with the helm.sh/hook: pre-upgrade annotation that Helm waits on" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Helm pre-upgrade hook renders the Job before the rest of the upgraded resources are applied; Helm waits for it to complete and fails the release if it fails, so the new pods only roll out after a successful migration. An init container runs in every replica, so several replicas race to migrate at once, and old pods keep serving meanwhile. A CronJob is decoupled from the release and gives no ordering guarantee. A sidecar starts alongside the server, so the app may run against an unmigrated schema.",
    referenceUrl: "https://helm.sh/docs/topics/charts_hooks/",
    tags: ["Helm", "Hooks", "Jobs"]
  },
  {
    id: "cncf-kcna-391",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Roll pods whenever config changes",
    scenario: "A team manages its manifests with Kustomize and keeps application settings in a properties file. Today, editing the file and applying the ConfigMap leaves running pods on stale settings until someone restarts them. They want every change to the settings file to trigger a Deployment rollout automatically, and they want to be able to roll the config back with the Deployment.",
    question: "Which Kustomize feature delivers this?",
    options: [
      { id: 'A', text: "The immutable field in a ConfigMap resource, which makes the Deployment controller watch that ConfigMap" },
      { id: 'B', text: "A patchesJson6902 entry that bumps the Deployment's replica count whenever the properties file changes" },
      { id: 'C', text: "A configMapGenerator, whose name hash suffix changes with the content and updates the Deployment reference" },
      { id: 'D', text: "A commonLabels entry that stamps a label on every resource, which forces pods to restart on each apply" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "configMapGenerator builds the ConfigMap from the file and appends a hash of its content to the name, then rewrites every reference to it; a content change therefore produces a new name in the pod template, which triggers a rollout, and the old ConfigMap still exists for rollback. A JSON patch applies a fixed change and cannot react to file content. commonLabels only changes the pod template when the label value itself changes, and it also alters the selector. The immutable field blocks edits; no controller watches ConfigMaps on a Deployment's behalf.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/#configmapgenerator",
    tags: ["Kustomize", "configMapGenerator", "Rollout"]
  },
  {
    id: "cncf-kcna-392",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Warm-up before traffic",
    scenario: "A search service loads a large index for about 40 seconds after its container starts, and requests during that window fail. During rolling updates, users hit errors as soon as each new pod appears. The process itself is healthy while loading and should not be restarted.",
    question: "What should the team add to the container spec?",
    options: [
      { id: 'A', text: "A preStop hook that sleeps for 40 seconds so the index has time to load before shutdown" },
      { id: 'B', text: "A terminationGracePeriodSeconds of 40 so each new pod waits before joining the Service" },
      { id: 'C', text: "A readiness probe that only succeeds once the index is loaded and queries can be answered" },
      { id: 'D', text: "A liveness probe that fails while the index is loading so the kubelet restarts the process" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A pod is added to Service endpoints only when its readiness probe passes, and a Deployment counts it as available only then, so the rollout proceeds as each new pod finishes loading instead of sending it traffic early. A failing liveness probe restarts the container, which would loop forever during the load. A preStop hook runs when a pod is being terminated, not when it starts. terminationGracePeriodSeconds limits how long shutdown may take and has no effect on when a new pod receives traffic.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/",
    tags: ["Readiness probe", "Rolling update", "Probes"]
  },
  {
    id: "cncf-kcna-393",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Slowing a rollout on purpose",
    scenario: "A game backend's new builds sometimes pass their readiness probe and then crash about 20 seconds later under real traffic. Rolling updates finish so fast that every pod is replaced before the crashes show up. The team wants each new pod to stay up for a while before the rollout moves on.",
    question: "Which Deployment field provides this behaviour?",
    options: [
      { id: 'A', text: "initialDelaySeconds: 30 on the readiness probe, so the first check happens 30 seconds after start" },
      { id: 'B', text: "revisionHistoryLimit: 30, so the controller keeps enough old versions to go back to after a crash" },
      { id: 'C', text: "progressDeadlineSeconds: 30, so each new pod must stay up 30 seconds before the next one is replaced" },
      { id: 'D', text: "minReadySeconds: 30, so a new pod must stay ready for 30 seconds before it counts as available" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "minReadySeconds makes the Deployment treat a newly ready pod as available only after it has stayed ready, without any container crashing, for that many seconds, which paces the rollout and lets the 20-second crash surface before the next old pod is removed. progressDeadlineSeconds is how long the controller waits before declaring the rollout stalled; it does not insert pauses. revisionHistoryLimit controls retained ReplicaSets for rollback. initialDelaySeconds only delays the first probe; once it passes, the pod is available immediately and a later crash still slips through.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#min-ready-seconds",
    tags: ["minReadySeconds", "Deployment", "Rollout"]
  },
  {
    id: "cncf-kcna-394",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Make the pipeline wait for the rollout",
    scenario: "A CI job applies an updated Deployment and immediately runs smoke tests, which often hit old pods because the rollout has not finished. The team wants the job to block until the rollout completes and to fail if it does not.",
    question: "Which command should the job run between applying and testing?",
    options: [
      { id: 'A', text: "kubectl get deployment/web --watch" },
      { id: 'B', text: "kubectl rollout status deployment/web" },
      { id: 'C', text: "kubectl wait pod --for=delete -l app=web" },
      { id: 'D', text: "kubectl rollout history deployment/web" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl rollout status watches the Deployment until the new ReplicaSet is fully rolled out and exits non-zero if the progress deadline is exceeded (or its --timeout expires), so the pipeline blocks and fails correctly. get --watch streams changes forever and never signals success or failure. rollout history lists past revisions. Waiting for pods with app=web to be deleted would hang, because the new pods carry the same label and the set never becomes empty.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/",
    tags: ["kubectl rollout", "CI", "Deployment"]
  },
  {
    id: "cncf-kcna-395",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Three changes, one rollout",
    scenario: "An engineer must change a Deployment's image, add an environment variable and raise its CPU limit using three separate kubectl set commands. Each command normally triggers its own rolling update, cycling the pods three times during business hours.",
    question: "How can the engineer apply all three changes in a single rollout?",
    options: [
      { id: 'A', text: "Scale the Deployment to zero, make the three changes, then scale it back to its replica count" },
      { id: 'B', text: "Set the strategy to Recreate for the duration so the three changes are merged into one revision" },
      { id: 'C', text: "Run kubectl rollout undo after the first two changes so only the final change produces a rollout" },
      { id: 'D', text: "Run kubectl rollout pause first, make the three changes, then run kubectl rollout resume" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "While a Deployment is paused, edits to its pod template are recorded but do not start a rollout; resume then rolls out one new ReplicaSet containing all three changes. Scaling to zero also avoids repeated cycling but takes the application offline. Switching to Recreate still produces a rollout for each template change, each with a full outage. rollout undo reverts the template, discarding the changes already made rather than combining them.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-deployment",
    tags: ["kubectl rollout", "Pause", "Deployment"]
  },
  {
    id: "cncf-kcna-396",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Canary for a database cluster",
    scenario: "A team runs a 5-replica StatefulSet, db-0 through db-4, with the RollingUpdate strategy. Before upgrading every member to a new image, they want only db-4 to receive it so they can observe it for a day, while db-0 to db-3 stay on the current version even if they are restarted.",
    question: "What should they set before changing the image?",
    options: [
      { id: 'A', text: "spec.updateStrategy.rollingUpdate.maxUnavailable: 1, so that only a single pod receives the new image" },
      { id: 'B', text: "spec.updateStrategy.rollingUpdate.partition: 4, so only pods with an ordinal of 4 or higher are updated" },
      { id: 'C', text: "spec.updateStrategy.type: OnDelete, then delete db-0 so the lowest ordinal is updated first as the canary" },
      { id: 'D', text: "spec.podManagementPolicy: Parallel, so that db-4 is updated independently of the other four replicas" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A StatefulSet partition updates only pods whose ordinal is greater than or equal to the partition value; pods below it keep the old revision even when deleted and recreated, which is the staged canary the team wants. Lowering the partition later rolls the rest. OnDelete updates whichever pod is deleted, and deleting db-0 would canary the wrong member without protecting the others from restarts. podManagementPolicy affects creation and scaling order, not update scope. maxUnavailable limits how many pods update at a time but still updates them all.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#partitions",
    tags: ["StatefulSet", "Partition", "Canary"]
  },
  {
    id: "cncf-kcna-397",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Where Helm keeps its releases",
    scenario: "An auditor asks where a cluster stores the record of each Helm release, including which chart version and values were used for every revision. The cluster runs Helm 3 with default settings, and the release was installed into the billing namespace.",
    question: "Where is this release information stored?",
    options: [
      { id: 'A', text: "In a Tiller Deployment in kube-system that keeps release state in its own embedded database" },
      { id: 'B', text: "In annotations that Helm writes onto every resource the chart creates in the billing namespace" },
      { id: 'C', text: "In the local Helm cache of whichever engineer ran the latest revision's helm upgrade" },
      { id: 'D', text: "In Secrets in the billing namespace, one per release revision, created by the Helm client" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Helm 3 has no server component; the client stores each release revision as a Secret of type helm.sh/release.v1 in the release's namespace, containing the chart metadata, values and rendered manifest, so any user with access to the namespace sees the same history. Tiller was the Helm 2 server and was removed in Helm 3. The local cache holds downloaded charts and repository indexes, not release state. Helm adds ownership labels and annotations to resources, but these do not record the full revision history.",
    referenceUrl: "https://helm.sh/docs/faq/changes_since_helm2/",
    tags: ["Helm", "Releases", "Secrets"]
  },
  {
    id: "cncf-kcna-398",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Reviewing what a chart will create",
    scenario: "A security reviewer wants to read the exact Kubernetes manifests a third-party Helm chart would produce with the team's values file before anything is installed. The review happens on a laptop that has no access to any cluster.",
    question: "Which command gives the reviewer those manifests?",
    options: [
      { id: 'A', text: "helm status release -n team-namespace" },
      { id: 'B', text: "helm get manifest release -n team-ns" },
      { id: 'C', text: "helm show values ./chart > values.yaml" },
      { id: 'D', text: "helm template ./chart -f values.yaml" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "helm template renders the chart with the supplied values entirely on the client and prints the resulting manifests, with no cluster connection needed. helm status and helm get manifest read release records from a cluster, and they only exist after an install. helm show values prints the chart's default values, not the rendered Kubernetes objects.",
    referenceUrl: "https://helm.sh/docs/helm/helm_template/",
    tags: ["Helm", "helm template", "Review"]
  },
  {
    id: "cncf-kcna-399",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Charts beside the container images",
    scenario: "A company already runs an OCI-compliant container registry with access control and replication. It wants to publish its internal Helm charts there instead of running a separate chart repository web server.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Build each chart into a container image with a Dockerfile and publish that image to the registry" },
      { id: 'B', text: "Host index.yaml in a ConfigMap and point helm repo add at the cluster's API server URL" },
      { id: 'C', text: "Package the chart and publish it with helm push to an oci:// reference on the registry" },
      { id: 'D', text: "Store the chart tarballs in Git LFS and have engineers clone the repository before installs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Helm 3 stores charts as OCI artifacts natively: helm package creates the archive, helm push uploads it to an oci:// reference, and helm install can pull straight from that reference, so the existing registry's access control and replication apply. Wrapping a chart inside a container image is not how Helm consumes charts. Serving index.yaml from a ConfigMap through the API server is not a supported repository. Git LFS still needs a manual clone step and bypasses Helm's repository handling.",
    referenceUrl: "https://helm.sh/docs/topics/registries/",
    tags: ["Helm", "OCI", "Registry"]
  },
  {
    id: "cncf-kcna-400",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Renaming the selector label",
    scenario: "A team renamed the label app: shop to app.kubernetes.io/name: shop in both spec.selector and the pod template of an existing apps/v1 Deployment and ran kubectl apply. The API server rejected the change, while the same edit to a brand-new Deployment works.",
    question: "Why was the update rejected?",
    options: [
      { id: 'A', text: "spec.selector can only change while an apps/v1 Deployment is paused, so apply refuses the edit" },
      { id: 'B', text: "kubectl apply cannot change labels, and the edit must be made with kubectl label on each pod instead" },
      { id: 'C', text: "spec.selector is immutable in apps/v1, so the Deployment must be recreated to change its selector" },
      { id: 'D', text: "Label keys containing a slash prefix are only allowed on Services and are refused on Deployment objects" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In apps/v1 a Deployment's label selector cannot be changed after creation, because changing it would orphan the existing ReplicaSets and pods; the fix is to create a new Deployment (or delete and recreate this one) with the new selector. Prefixed keys such as app.kubernetes.io/name are the recommended labels and are valid on any object. kubectl apply updates labels in manifests normally, and hand-labelling pods would not change the Deployment's selector. Pausing affects rollouts, not selector mutability.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#label-selector-updates",
    tags: ["Deployment", "Selector", "Labels"]
  }
];

export default CNCF_KCNA_QUESTIONS_16;
