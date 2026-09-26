export const CNCF_KCNA_QUESTIONS_18 = [
  {
    id: "cncf-kcna-426",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Which Helm revision broke the app",
    scenario: "The notifications release has been upgraded several times this week by different engineers, and since yesterday the service returns errors. The on-call engineer wants to see every revision of the release with its status, chart version and description before deciding what to roll back to.",
    question: "Which command shows that information?",
    options: [
      { id: 'A', text: "helm history notifications -n comms" },
      { id: 'B', text: "kubectl rollout history deploy -n comms" },
      { id: 'C', text: "helm list --all-namespaces --failed" },
      { id: 'D', text: "helm show chart notifications/app" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "helm history lists each revision of a release with its update time, status (deployed, superseded, failed, pending-upgrade), chart and app version and a description, which is exactly what is needed to pick a target for helm rollback. helm list shows only the latest state of each release, and --failed filters to failed releases without revision history. helm show chart prints a chart's Chart.yaml from a repository, not what was installed. kubectl rollout history covers one Deployment's pod templates and misses the chart versions and every other resource in the release.",
    referenceUrl: "https://helm.sh/docs/helm/helm_history/",
    tags: ["Helm", "helm history", "Debugging"]
  },
  {
    id: "cncf-kcna-427",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "A chart that will not render",
    scenario: "After editing a file in the team's Helm chart, helm upgrade fails with a parse error that points at a line in the rendered output, not in the source file. The developer wants to see the generated manifests, including the broken document, on her laptop without touching the cluster.",
    question: "Which command helps most?",
    options: [
      { id: 'A', text: "helm lint ./chart --strict -f values.yaml" },
      { id: 'B', text: "helm rollback my-release 0 --dry-run=client" },
      { id: 'C', text: "helm get manifest my-release --revision 3 -n web" },
      { id: 'D', text: "helm template ./chart --debug -f values.yaml" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "helm template renders the chart locally, and --debug prints the generated manifests even when they fail to parse, so the developer can see the malformed YAML and trace it back to the template; helm lint is a useful companion check. helm get manifest shows what an earlier revision installed in the cluster, not the new, broken rendering. A rollback dry run simulates returning to an old revision and says nothing about the edited template. Updating and searching repositories concerns published charts, not a local edit.",
    referenceUrl: "https://helm.sh/docs/chart_template_guide/debugging/",
    tags: ["Helm", "Templates", "Debugging"]
  },
  {
    id: "cncf-kcna-428",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Which image is each ReplicaSet running",
    scenario: "A rollout of the search Deployment has stalled halfway, and the engineer wants to see at a glance how many pods each of its ReplicaSets currently has and which container image each one runs, to confirm the old and new versions.",
    question: "Which command gives that overview?",
    options: [
      { id: 'A', text: "kubectl get rs -l app=search -o wide" },
      { id: 'B', text: "kubectl top pods -l app=search --containers" },
      { id: 'C', text: "kubectl get svc search -o wide" },
      { id: 'D', text: "kubectl get deploy search -o name" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each Deployment revision is a ReplicaSet, and the wide output of kubectl get rs lists desired, current and ready counts along with the containers, images and selector, so the old and new versions and their pod counts are visible side by side. Printing the Deployment's name gives no revision detail. kubectl top shows CPU and memory use, not images. The Service's wide output shows its selector and ports, not which versions sit behind it.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/",
    tags: ["ReplicaSet", "Rollout", "kubectl get"]
  },
  {
    id: "cncf-kcna-429",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "What the prod overlay really produces",
    scenario: "A team's production overlay in overlays/prod patches a shared base. A reviewer suspects a patch is not being applied to the Deployment and wants to print the final merged YAML for the overlay without applying anything.",
    question: "Which command prints that output?",
    options: [
      { id: 'A', text: "kubectl apply -k overlays/prod -n web" },
      { id: 'B', text: "kubectl explain kustomization" },
      { id: 'C', text: "kubectl kustomize overlays/prod" },
      { id: 'D', text: "kubectl get -k overlays/prod" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl kustomize builds the overlay, applying its patches to the base, and prints the resulting manifests to standard output, so the reviewer can check whether the patch took effect. kubectl apply -k builds and then applies the output to the cluster, which the reviewer wants to avoid. kubectl get -k reads the live objects named by the overlay rather than showing the rendered result. kubectl explain documents API resource fields, and a kustomization file is not a cluster resource.",
    referenceUrl: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/",
    tags: ["Kustomize", "Debugging", "Review"]
  },
  {
    id: "cncf-kcna-430",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Service with nobody behind it",
    scenario: "A new release renamed the pod label from app: cart to app.kubernetes.io/name: cart in the Deployment, and the pods are Running and Ready. Requests to the cart Service now time out, and kubectl get endpointslices for the Service shows no endpoints.",
    question: "What is the most likely cause?",
    options: [
      { id: 'A', text: "The Service selector still uses the old label key, which no pod carries after the rename" },
      { id: 'B', text: "The pods' readiness probes fail, which removes every label-matched pod from the Service's endpoints" },
      { id: 'C', text: "kube-proxy caches old endpoints for a day and must be restarted on each node to update" },
      { id: 'D', text: "Cluster DNS still resolves the Service name to the IPs of pods with the old label" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A Service builds its EndpointSlices from pods matching its selector, so renaming the pod label without updating the selector leaves it with no endpoints; updating the Service selector (or restoring the label) fixes it. kube-proxy watches EndpointSlices and updates rules within seconds, with no day-long cache. Failing readiness probes would remove pods from endpoints, but the pods are reported Ready. Cluster DNS resolves a ClusterIP Service name to the Service's virtual IP, not to pod IPs.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/",
    tags: ["Service", "Selectors", "Endpoints"]
  },
  {
    id: "cncf-kcna-431",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Why Argo CD says OutOfSync",
    scenario: "The orders Application in Argo CD has shown OutOfSync since this morning, although nobody remembers changing anything. The engineer has the argocd CLI logged in and wants to see exactly which fields differ between Git and the cluster before deciding whether to sync.",
    question: "Which command shows those differences?",
    options: [
      { id: 'A', text: "argocd app sync orders" },
      { id: 'B', text: "argocd app history orders" },
      { id: 'C', text: "argocd app list --output wide" },
      { id: 'D', text: "argocd app diff orders" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "argocd app diff compares the desired manifests from Git with the live objects and prints the differing fields, which shows whether the drift is a manual edit, a controller-owned field or a real change. argocd app sync applies Git over the live state immediately, destroying the evidence before it is understood. argocd app history lists past sync operations and revisions. argocd app list shows each Application's summary status, not field-level differences.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/commands/argocd_app_diff/",
    tags: ["Argo CD", "Drift", "Debugging"]
  },
  {
    id: "cncf-kcna-432",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Running but receiving nothing",
    scenario: "After a config change, kubectl get pods for the profile service shows STATUS Running, READY 0/1 and zero restarts for every pod. The application logs show it started normally, yet the Service returns no responses.",
    question: "What is the most likely explanation?",
    options: [
      { id: 'A', text: "The liveness probe is failing, so the kubelet is restarting containers before they can serve" },
      { id: 'B', text: "The pods are still Pending on the scheduler, which is why the READY column shows 0/1" },
      { id: 'C', text: "The readiness probe is failing, so the pods are kept out of the Service's endpoints" },
      { id: 'D', text: "The image pull failed, so the containers are running only the pause container for now" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "READY 0/1 with status Running and no restarts is the signature of a failing readiness probe: the container keeps running, but the pod is not added to Service endpoints, so no traffic reaches it; kubectl describe pod shows the probe failure events. A failing liveness probe restarts the container, which would increase the restart count. Pending pods show status Pending, not Running. A failed image pull shows ErrImagePull or ImagePullBackOff and the pod never reaches Running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/#readiness-probe",
    tags: ["Readiness probe", "Debugging", "Service"]
  },
  {
    id: "cncf-kcna-433",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "A deploy that landed on the wrong cluster",
    scenario: "An engineer ran kubectl apply for a production hotfix, but production is unchanged and the staging cluster now has the new version. He works with several clusters from one kubeconfig file and wants to confirm where his commands are going before trying again.",
    question: "Which command shows which cluster and user kubectl is currently using?",
    options: [
      { id: 'A', text: "kubectl cluster-info dump --all-namespaces" },
      { id: 'B', text: "kubectl config current-context" },
      { id: 'C', text: "kubectl version --client" },
      { id: 'D', text: "kubectl get nodes --watch" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl sends commands to the cluster and user named by the current context in the kubeconfig; kubectl config current-context prints it, and kubectl config get-contexts or use-context lists and switches contexts. cluster-info dump writes large amounts of state from whatever cluster is already selected without naming the context. Watching nodes also queries the current cluster, and node names may not reveal which one it is. kubectl version --client prints only the local binary version.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",
    tags: ["kubeconfig", "Contexts", "kubectl"]
  },
  {
    id: "cncf-kcna-434",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Reading a rollout status message",
    scenario: "A CI job running kubectl rollout status for the api Deployment prints Waiting for deployment \"api\" rollout to finish: 2 of 4 updated replicas are available... and then keeps waiting. The Deployment has 4 replicas.",
    question: "What does the message tell the engineer?",
    options: [
      { id: 'A', text: "The Deployment was rolled back to a revision that has two fewer replicas declared" },
      { id: 'B', text: "Two nodes are unavailable, so only half of the requested replicas could be placed" },
      { id: 'C', text: "Four pods of the new template exist, but only two of them are ready and available" },
      { id: 'D', text: "Two old pods have been deleted, and the two remaining old pods are still available" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Updated replicas are pods created from the new pod template; the message says the new ReplicaSet has its four pods but only two have become available, so the next step is to check why the other two are not ready, for example failing readiness probes. It says nothing about old pods being drained. A rollback would appear as a new revision, not as this progress line. Unschedulable pods would not count as updated-but-unavailable in this way, and node status is not part of the message.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#deployment-status",
    tags: ["kubectl rollout", "Deployment status", "Debugging"]
  },
  {
    id: "cncf-kcna-435",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "What changed between two revisions",
    scenario: "Revision 7 of the ledger Deployment works, and revision 8 crashes on start. Nobody remembers what was changed, and the manifests were applied from a laptop rather than Git. The engineer wants to inspect the pod template stored for each revision.",
    question: "Which command shows the template of a specific revision?",
    options: [
      { id: 'A', text: "kubectl rollout undo deployment/ledger --dry-run=client" },
      { id: 'B', text: "kubectl rollout status deployment/ledger --revision=7" },
      { id: 'C', text: "kubectl rollout history deployment/ledger --revision=7" },
      { id: 'D', text: "kubectl describe deployment/ledger --show-events=true" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kubectl rollout history with --revision prints the pod template recorded for that revision, so comparing revisions 7 and 8 shows what changed, for example an image, env var or command. rollout status with --revision only waits for that revision to finish rolling out. describe shows the current template and recent events, not older revisions. A client-side dry run of undo does not print the full template of the target revision.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_history/",
    tags: ["kubectl rollout", "Revisions", "Debugging"]
  },
  {
    id: "cncf-kcna-436",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Helm refuses every new upgrade",
    scenario: "A CI runner was killed in the middle of helm upgrade for the catalog release. Every later upgrade now fails with an error that another operation (install/upgrade/rollback) is in progress, and helm history shows the latest revision with status pending-upgrade.",
    question: "What should the team do to recover the release?",
    options: [
      { id: 'A', text: "Run helm rollback to the last revision whose status is deployed, then upgrade again" },
      { id: 'B', text: "Delete the release's pods so the next upgrade sees the change and clears the lock" },
      { id: 'C', text: "Run helm uninstall --keep-history, keeping rollback possible, then reinstall the chart" },
      { id: 'D', text: "Wait for the server-side lock on the pending revision to time out after thirty minutes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A release left in pending-upgrade blocks further operations; rolling back to the last deployed revision records a new revision with a final status, after which normal upgrades work again. Uninstalling deletes every resource in the release and causes an outage for what is only a stale status record. Pods have nothing to do with the release record, which lives in the release Secrets. Helm 3 has no server component, so there is no server-side lock that expires by itself.",
    referenceUrl: "https://helm.sh/docs/helm/helm_rollback/",
    tags: ["Helm", "Rollback", "Debugging"]
  },
  {
    id: "cncf-kcna-437",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Investigating a pod that crashes instantly",
    scenario: "A pod crashes within a second of starting, so there is never a running container to exec into, and its logs only say config parse failed. The engineer wants an interactive shell in a pod that has the same image, volumes and environment, but with the entrypoint replaced by sh, without touching the Deployment.",
    question: "Which approach achieves this?",
    options: [
      { id: 'A', text: "kubectl edit the Deployment to set command: [sleep, infinity] and exec into the pods after rollout" },
      { id: 'B', text: "kubectl exec -it the pod with sh repeatedly, timing the command for the second the container is up" },
      { id: 'C', text: "kubectl debug the pod with an ephemeral busybox container, sharing the app's process namespace" },
      { id: 'D', text: "kubectl debug POD --copy-to=debug-pod -it --container=app -- sh, overriding the command" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl debug with --copy-to creates a copy of the pod, and naming the container with a command after -- replaces that container's command in the copy, so it starts sh with the same image, volumes and env and the original Deployment is untouched. Racing kubectl exec against a container that lives for a second is unreliable at best. An ephemeral container can be added, but the app process it would inspect keeps crashing, and the app's filesystem is not the focus of a separate busybox image. Editing the Deployment changes production, which the engineer wants to avoid.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/#copying-a-pod-while-changing-its-command",
    tags: ["kubectl debug", "Crash", "Debugging"]
  },
  {
    id: "cncf-kcna-438",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Chart collides with an existing object",
    scenario: "A team is moving an app that was deployed with kubectl apply under Helm. helm install fails with an error that a ConfigMap already exists and cannot be imported into the current release because it has no Helm ownership metadata. The team wants Helm to take over the existing objects without downtime.",
    question: "What resolves the error?",
    options: [
      { id: 'A', text: "Rename the release to match the ConfigMap's name so that Helm recognises the object as its own" },
      { id: 'B', text: "Rerun helm install with the --replace flag so that Helm overwrites any objects that already exist" },
      { id: 'C', text: "Add the managed-by: Helm label and the Helm release-name and release-namespace annotations" },
      { id: 'D', text: "Delete the Helm release Secrets in the namespace so that Helm no longer sees a naming conflict" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Helm 3 adopts an existing object only when it carries the label app.kubernetes.io/managed-by: Helm and the annotations meta.helm.sh/release-name and meta.helm.sh/release-namespace matching the release; after adding them, helm install takes ownership without recreating the object. --replace reuses a release name from a deleted release and does not bypass the ownership check. There are no release Secrets yet for a first install, and deleting them would not change the objects' metadata. Release names are unrelated to object names.",
    referenceUrl: "https://helm.sh/docs/topics/charts/",
    tags: ["Helm", "Ownership", "Migration"]
  },
  {
    id: "cncf-kcna-439",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Argo CD cannot even compare",
    scenario: "A newly created Argo CD Application shows sync status Unknown and a ComparisonError condition, and no resources appear in its tree. The team recently moved the repository to a new Git server and changed the folder layout.",
    question: "What is the most likely cause to check first?",
    options: [
      { id: 'A', text: "The Deployment's readiness probe is failing, which makes Argo CD skip comparing the app" },
      { id: 'B', text: "The repo URL, credentials or path are wrong, so the manifests cannot be generated" },
      { id: 'C', text: "The destination namespace has a ResourceQuota that blocks every pod from being created" },
      { id: 'D', text: "Automated sync is disabled, and comparison only runs for Applications that sync automatically" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Argo CD must fetch the repository and render the path before it can compare anything; an unreachable URL, missing credentials for the new Git server or a path that no longer exists produce a ComparisonError and Unknown sync status, with the details in the Application's conditions. A ResourceQuota blocks pods after a sync, while comparison still works. Readiness affects health status, not the ability to compare. Argo CD compares every Application whether or not automated sync is on.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/",
    tags: ["Argo CD", "ComparisonError", "Debugging"]
  },
  {
    id: "cncf-kcna-440",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Searching logs across every replica",
    scenario: "A request ID appears in a customer complaint, and the checkout Deployment has eight replicas. The engineer wants the last 200 lines from all of them at once, with each line labelled by the pod it came from, without installing a log backend.",
    question: "Which command fits best?",
    options: [
      { id: 'A', text: "kubectl logs deployment/checkout --tail=200 --all-containers=true" },
      { id: 'B', text: "kubectl logs -l app=checkout --prefix --tail=200 --max-log-requests=8" },
      { id: 'C', text: "kubectl get pods -l app=checkout -o jsonpath={.status.message}" },
      { id: 'D', text: "kubectl describe deployment checkout --show-events=true --chunk-size=0" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "kubectl logs with a label selector reads from every matching pod, --prefix labels each line with its pod and container, and --max-log-requests allows enough concurrent streams for all eight replicas. kubectl logs deployment/checkout reads from just one pod chosen from the Deployment, so seven replicas are missed. A pod's status message is a short condition string, not log output. Describing the Deployment shows its spec and events, not application logs.",
    referenceUrl: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
    tags: ["kubectl logs", "Selectors", "Debugging"]
  },
  {
    id: "cncf-kcna-441",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Flux stops applying a directory",
    scenario: "Changes merged to the apps/prod directory stopped reaching the cluster two days ago. The Flux GitRepository shows the latest commit fetched, but nothing downstream happens, and the engineer has the flux CLI installed.",
    question: "Where should the engineer look for the reason?",
    options: [
      { id: 'A', text: "kubectl get events in the default namespace, where Flux records all of its apply errors" },
      { id: 'B', text: "flux get kustomizations, then describe the not-ready one to read its status message" },
      { id: 'C', text: "kubectl logs on each application pod to find which one rejected the new commit" },
      { id: 'D', text: "flux get sources git, then force a new fetch of the repository with every retry" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Since the source is fetched, the failure is in applying it: flux get kustomizations shows each Kustomization's Ready condition and message, and describing the failing one gives details such as a manifest that fails validation or a missing dependency. Refetching the source repeats a step that already works. Application pods do not receive or reject commits. Flux records events on its own objects in their namespace, typically flux-system, not in default.",
    referenceUrl: "https://fluxcd.io/flux/cheatsheets/troubleshooting/",
    tags: ["Flux", "Kustomization", "Debugging"]
  },
  {
    id: "cncf-kcna-442",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Reading why a container last stopped",
    scenario: "A pod of the pricing service shows 14 restarts, but its current container is healthy and its logs are clean. The engineer wants the exit code, reason and finish time of the most recent termination as recorded by the kubelet, in machine-readable form for a script.",
    question: "Where is that information recorded?",
    options: [
      { id: 'A', text: "In spec.containers[].terminationMessagePath of kubectl get deployment -o yaml" },
      { id: 'B', text: "In status.containerStatuses[].lastState.terminated of kubectl get pod -o yaml output" },
      { id: 'C', text: "In metadata.annotations of kubectl get pod -o yaml, written after each restart" },
      { id: 'D', text: "In status.conditions of kubectl get replicaset -o yaml for the pod's ReplicaSet" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Each container status keeps lastState.terminated with exitCode, reason (for example OOMKilled or Error), startedAt and finishedAt for the previous instance, which a script can read with jsonpath. The kubelet does not write restart details into pod annotations. terminationMessagePath is a spec field naming a file inside the container, not a record of past exits. ReplicaSet conditions cover replica failures such as quota errors, not individual container exits.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-states",
    tags: ["Container status", "Debugging", "Pods"]
  },
  {
    id: "cncf-kcna-443",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "New ReplicaSet with no pods",
    scenario: "A rollout of the web Deployment in a namespace with a ResourceQuota never progresses. kubectl get rs shows the new ReplicaSet with DESIRED 1 and CURRENT 0, no new pods exist, and kubectl get pods shows nothing unusual.",
    question: "Where will the engineer find why the pod was not created?",
    options: [
      { id: 'A', text: "In the events of the new ReplicaSet, via kubectl describe rs, which records quota rejections" },
      { id: 'B', text: "In the scheduler's FailedScheduling events on the pod, which explain placement failures" },
      { id: 'C', text: "In the Service's endpoints, via kubectl get endpointslices, which list rejected pods" },
      { id: 'D', text: "In the logs of the new pod, via kubectl logs, which record why the ReplicaSet's container never started" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When the API server rejects pod creation, for example because the extra surge pod would exceed the ResourceQuota, there is no pod object at all; the ReplicaSet controller records a FailedCreate event on the ReplicaSet with the quota message, so kubectl describe rs shows it. There are no pod logs or scheduling events, because no pod exists. EndpointSlices only list pods that exist and match the Service.",
    referenceUrl: "https://kubernetes.io/docs/concepts/policy/resource-quotas/",
    tags: ["ReplicaSet", "ResourceQuota", "Debugging"]
  },
  {
    id: "cncf-kcna-444",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Stuck at Init:CrashLoopBackOff",
    scenario: "A pod with two init containers, wait-for-db and migrate, followed by the app container, shows STATUS Init:CrashLoopBackOff and READY 0/1. Running kubectl logs on the pod returns an error saying the app container is waiting to start.",
    question: "What should the engineer do next?",
    options: [
      { id: 'A', text: "Raise the app container's liveness probe timeout, since the pod is failing its first liveness check" },
      { id: 'B', text: "Check the app container's image, since this status means the main image failed to pull from the registry" },
      { id: 'C', text: "Read the init container's logs with -c, for example kubectl logs POD -c migrate, to find the failure" },
      { id: 'D', text: "Delete the pod repeatedly, since init containers such as migrate only retry after the pod is recreated" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Init:CrashLoopBackOff means an init container keeps failing, so the app container never starts and has no logs; kubectl describe shows which init container failed (Init:1/2 would point at migrate) and kubectl logs with -c NAME shows its output. The kubelet already restarts failing init containers under the pod's restart policy, so deleting the pod achieves nothing new. Liveness probes do not run until init containers finish. A pull failure would show Init:ErrImagePull or ImagePullBackOff instead.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-init-containers/",
    tags: ["Init containers", "kubectl logs", "Debugging"]
  },
  {
    id: "cncf-kcna-445",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Canary stopped by its analysis",
    scenario: "A release managed by Argo Rollouts was progressing through canary steps and has now returned to 100% stable traffic with the Rollout marked Degraded. The team, which has the Argo Rollouts kubectl plugin installed, wants to see which step and which analysis measurement caused the abort.",
    question: "Which command gives that view?",
    options: [
      { id: 'A', text: "kubectl argo rollouts promote checkout --full" },
      { id: 'B', text: "kubectl argo rollouts get rollout checkout --watch" },
      { id: 'C', text: "kubectl rollout history deployment/checkout --revision=2" },
      { id: 'D', text: "kubectl get hpa checkout -o yaml --watch" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Argo Rollouts plugin's get rollout command shows the Rollout's steps, current weight, ReplicaSets and the AnalysisRuns with their status, so the failed measurement and the step where the abort happened are visible. A Rollout replaces the Deployment, so kubectl rollout history on a Deployment has nothing to show. promote --full would push the failing version to all traffic, the opposite of investigating. The HPA's status is unrelated to canary analysis.",
    referenceUrl: "https://argo-rollouts.readthedocs.io/en/stable/features/kubectl-plugin/",
    tags: ["Argo Rollouts", "Canary", "Debugging"]
  },
  {
    id: "cncf-kcna-446",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Same chart, different behaviour",
    scenario: "The same chart version of a billing service behaves correctly in staging but has caching disabled in production. The releases were installed months ago by different engineers, and the values files they used are not in any repository.",
    question: "How can the team see the values each release is actually using?",
    options: [
      { id: 'A', text: "Run helm get values with --all for each release to print the computed values" },
      { id: 'B', text: "Run kubectl get configmap in each namespace to find the values Helm saved there" },
      { id: 'C', text: "Run helm show values on the chart, which lists the values used by every release" },
      { id: 'D', text: "Run helm lint against the chart, which reports which values differ per cluster" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Helm stores the supplied values with each release revision; helm get values prints the user-supplied values, and --all merges in the chart defaults so the effective configuration of staging and production can be compared directly. helm show values prints only the chart's defaults. Helm 3 stores release data in Secrets by default, not ConfigMaps, and in encoded form. helm lint checks a chart for problems and knows nothing about installed releases.",
    referenceUrl: "https://helm.sh/docs/helm/helm_get_values/",
    tags: ["Helm", "Values", "Debugging"]
  },
  {
    id: "cncf-kcna-447",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Pipeline blocked by a Forbidden error",
    scenario: "A CI job using the ServiceAccount deployer in the ci namespace fails at kubectl apply with deployments.apps is forbidden in namespace web. A platform engineer with admin rights wants to confirm exactly which permission the ServiceAccount lacks before changing RBAC.",
    question: "Which command confirms it?",
    options: [
      { id: 'A', text: "kubectl create token deployer -n ci --duration=1h and decode the JWT payload" },
      { id: 'B', text: "kubectl get rolebindings -n ci -o wide to list who may patch deployments in that namespace" },
      { id: 'C', text: "kubectl describe serviceaccount deployer -n web --show-events=true --chunk-size=0" },
      { id: 'D', text: "kubectl auth can-i patch deployments -n web --as=system:serviceaccount:ci:deployer" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "kubectl auth can-i with --as impersonates the ServiceAccount and asks the API server whether a specific verb on a resource in a namespace is allowed, which pinpoints the missing permission. Listing RoleBindings in ci looks in the wrong namespace and does not evaluate the rules. The ServiceAccount lives in ci, not web, and describing it shows tokens rather than permissions. A token's payload identifies the account but carries no RBAC permissions.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access",
    tags: ["RBAC", "kubectl auth", "CI"]
  },
  {
    id: "cncf-kcna-448",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Catching a typo before it merges",
    scenario: "A pull request changed replicas to replcas in a Deployment manifest, and the error was only noticed when the production apply failed. The team wants CI to catch schema errors and admission rejections using the cluster's real API, without changing anything in the cluster.",
    question: "Which command should CI run?",
    options: [
      { id: 'A', text: "kubectl apply --dry-run=client -f manifests/" },
      { id: 'B', text: "kubectl get -f manifests/ --server-print=false" },
      { id: 'C', text: "kubectl apply --dry-run=server -f manifests/" },
      { id: 'D', text: "kubectl create --save-config -f manifests/" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A server-side dry run sends the manifests through the API server's validation, including strict field validation that rejects unknown fields such as replcas, plus defaulting and admission webhooks, without persisting anything. A client-side dry run only processes the objects locally and cannot run admission checks. kubectl create --save-config actually creates the objects. kubectl get only reads existing objects and validates nothing.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/api-concepts/#dry-run",
    tags: ["Dry run", "Validation", "CI"]
  },
  {
    id: "cncf-kcna-449",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "A new build that never shows up",
    scenario: "A pipeline builds the reports service, pushes it as registry.example.com/reports:stable, and runs kubectl apply on an unchanged Deployment manifest that references that tag with imagePullPolicy: Always. kubectl apply reports the Deployment as unchanged, and the running pods still serve last week's code.",
    question: "Why did the new build not roll out, and what is the best fix?",
    options: [
      { id: 'A', text: "The kubelet caches images for 24 hours; wait a day for the nodes to pull the new stable image" },
      { id: 'B', text: "The registry needs a webhook so that each pushed build triggers a rollout" },
      { id: 'C', text: "The pod template did not change, so no rollout began; give every build a unique tag or digest" },
      { id: 'D', text: "imagePullPolicy: Always only works with the latest tag; rename the tag to latest" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A Deployment rolls out only when its pod template changes; reusing the tag leaves the template byte-for-byte identical, so kubectl apply has nothing to change and the existing pods, which pulled the image when they started, keep running the old build. imagePullPolicy Always only affects pods when they start, so a restart would pick up the new image, but the durable fix is a unique tag or digest per build, which changes the template, triggers a rollout and allows rollbacks. Always works with any tag. The kubelet has no 24-hour cache timer. Registries do not trigger Kubernetes rollouts by themselves.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#updating-images",
    tags: ["Images", "Rollout", "Debugging"]
  },
  {
    id: "cncf-kcna-450",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Helm said success, the app was down",
    scenario: "A pipeline runs helm upgrade without extra flags, and the step turned green even though the new pods were crash-looping for the next ten minutes. The team wants the pipeline step itself to fail when the new version never becomes ready.",
    question: "Why did the step succeed, and what should change?",
    options: [
      { id: 'A', text: "Helm only checks the chart's syntax; add a helm lint step before the upgrade runs" },
      { id: 'B', text: "The pods crashed after Helm's default readiness window ended; lengthen that window" },
      { id: 'C', text: "By default Helm reports success once resources are accepted; add --wait with a --timeout" },
      { id: 'D', text: "Helm ignores CrashLoopBackOff by design; add a post-upgrade hook that deletes pods" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Without --wait, helm upgrade marks the release deployed as soon as the API server accepts the manifests; it does not watch Deployments become ready. With --wait (and a --timeout), Helm waits for pods, Deployments and other resources to be ready and fails the upgrade if they are not; the rollback-on-failure option can additionally revert it. helm lint catches chart problems but not a crashing image. Without --wait there is no readiness window to lengthen. Deleting pods in a hook just restarts the crashing version.",
    referenceUrl: "https://helm.sh/docs/helm/helm_upgrade/",
    tags: ["Helm", "CI", "Readiness"]
  }
];

export default CNCF_KCNA_QUESTIONS_18;
