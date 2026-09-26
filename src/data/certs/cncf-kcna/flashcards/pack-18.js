export const CNCF_KCNA_FLASHCARDS_18 = [
  {
    id: 'cncf-kcna-fc-426',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Pod phase vs container state: what values does each have?',
    hint: 'One describes the whole pod, the other each container.',
    back: 'The <strong>pod phase</strong> is a high-level summary: <code>Pending</code>, <code>Running</code>, <code>Succeeded</code>, <code>Failed</code> or <code>Unknown</code>. Each <strong>container state</strong> is <code>Waiting</code> (with a reason such as ImagePullBackOff or CrashLoopBackOff), <code>Running</code> or <code>Terminated</code> (with exit code and reason). The STATUS column in kubectl get pods often shows a container reason rather than the phase.',
    tags: ['Pods', 'Lifecycle']
  },
  {
    id: 'cncf-kcna-fc-427',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Which statuses can a Helm release revision have, and which ones signal trouble?',
    hint: 'Look for the word pending.',
    back: 'Healthy history shows <strong>deployed</strong> (the current revision) and <strong>superseded</strong> (older ones). <strong>failed</strong> means the upgrade or install errored. <strong>pending-install</strong>, <strong>pending-upgrade</strong> or <strong>pending-rollback</strong> on the latest revision usually means the Helm client was interrupted, and further operations are blocked until you roll back. <code>helm history</code> shows them all.',
    tags: ['Helm', 'Releases']
  },
  {
    id: 'cncf-kcna-fc-428',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What can you retrieve about an installed release with helm get?',
    hint: 'Several subcommands, one per artefact.',
    back: '<code>helm get values</code> (add <code>--all</code> for computed values), <code>helm get manifest</code> (the rendered Kubernetes YAML that was applied), <code>helm get notes</code>, <code>helm get hooks</code>, <code>helm get metadata</code>, and <code>helm get all</code> for everything. Add <code>--revision N</code> to inspect an older revision, which is ideal for comparing a working release with a broken one.',
    tags: ['Helm', 'helm get']
  },
  {
    id: 'cncf-kcna-fc-429',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'helm template vs helm install --dry-run=server: what does each render against?',
    hint: 'Does the chart look anything up in the cluster?',
    back: '<strong>helm template</strong> renders purely on the client, so the <code>lookup</code> function returns nothing and the API server never validates the output. <strong>helm install/upgrade --dry-run=server</strong> contacts the cluster: <code>lookup</code> sees real objects and the result is checked, but nothing is persisted. Use template for offline review and GitOps rendering; use a server dry run to catch cluster-specific errors.',
    tags: ['Helm', 'Dry run']
  },
  {
    id: 'cncf-kcna-fc-430',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Where does Argo CD report why an Application cannot sync or compare?',
    hint: 'Not in the pods: on the Application itself.',
    back: 'In the Application\'s <strong>status.conditions</strong>, shown in the UI and by <code>argocd app get</code>. Common types: <strong>ComparisonError</strong> (repo unreachable, bad path, rendering failed), <strong>InvalidSpecError</strong>, <strong>SyncError</strong>, and warnings such as <strong>OrphanedResourceWarning</strong> or <strong>SharedResourceWarning</strong> when two Applications manage one object. The operation state shows the last sync\'s per-resource results.',
    tags: ['Argo CD', 'Conditions']
  },
  {
    id: 'cncf-kcna-fc-431',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Which argocd CLI commands help most when investigating an Application?',
    hint: 'Inspect, compare, look back, go back.',
    back: '<code>argocd app get NAME</code> shows sync and health status, conditions and resources. <code>argocd app diff NAME</code> shows field-level differences from Git. <code>argocd app history NAME</code> lists past syncs and revisions. <code>argocd app rollback NAME ID</code> redeploys an earlier synced revision (automated sync must be off, since it would re-sync to Git).',
    tags: ['Argo CD', 'CLI']
  },
  {
    id: 'cncf-kcna-fc-432',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Which flux CLI commands help you trace a change that never reached the cluster?',
    hint: 'Status, events, logs, then force a retry.',
    back: '<code>flux get all -A</code> shows the Ready status and message of every source, Kustomization and HelmRelease. <code>flux events</code> lists recent events for Flux objects, and <code>flux logs --level=error</code> reads controller logs. <code>flux tree kustomization NAME</code> shows what it manages. After a fix, <code>flux reconcile kustomization NAME --with-source</code> refetches and reapplies immediately.',
    tags: ['Flux', 'CLI']
  },
  {
    id: 'cncf-kcna-fc-433',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What do a Deployment\'s Available, Progressing and ReplicaFailure conditions mean?',
    hint: 'Capacity, rollout, and pod creation.',
    back: '<strong>Available=True</strong>: at least the minimum number of pods (replicas minus maxUnavailable) is available. <strong>Progressing=True</strong>: a rollout is advancing or completed (reason NewReplicaSetAvailable); <strong>False</strong> with ProgressDeadlineExceeded means it stalled. <strong>ReplicaFailure</strong>: pods could not be created at all, for example a quota or admission rejection.',
    tags: ['Deployment', 'Conditions']
  },
  {
    id: 'cncf-kcna-fc-434',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What does kubectl rollout restart do, and when is it the right tool?',
    hint: 'It changes one annotation in the Pod template.',
    back: 'It stamps the Pod template with a <code>kubectl.kubernetes.io/restartedAt</code> annotation, which counts as a template change, so the Deployment, StatefulSet or DaemonSet replaces its Pods using its normal rolling strategy and records a new revision. Use it to make Pods pick up a changed ConfigMap or Secret consumed as environment variables, or to refresh Pods without changing the image. It does not roll back; that is <code>kubectl rollout undo</code>.',
    tags: ['kubectl rollout', 'Deployments']
  },
  {
    id: 'cncf-kcna-fc-435',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Why can a Deployment rollout create no pods at all, and where is the reason recorded?',
    hint: 'The API server said no to the pod itself.',
    back: 'If the API server <strong>rejects pod creation</strong>, no pod object exists to describe. Typical causes: a <strong>ResourceQuota</strong> would be exceeded, a <strong>LimitRange</strong> is violated, <strong>Pod Security admission</strong> or a policy webhook denies the pod, or a referenced ServiceAccount is missing. The ReplicaSet records <strong>FailedCreate</strong> events, and the Deployment shows a ReplicaFailure condition.',
    tags: ['ReplicaSet', 'Admission']
  },
  {
    id: 'cncf-kcna-fc-436',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How does Helm decide whether it may take over an object that already exists?',
    hint: 'One label and two annotations.',
    back: 'Helm 3 adopts an existing object only if it has the label <code>app.kubernetes.io/managed-by: Helm</code> and the annotations <code>meta.helm.sh/release-name</code> and <code>meta.helm.sh/release-namespace</code> matching the release. Otherwise install fails with an "exists and cannot be imported" error, which protects objects owned by other tools or releases from being silently overwritten.',
    tags: ['Helm', 'Ownership']
  },
  {
    id: 'cncf-kcna-fc-437',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'OOMKilled vs Evicted: how do you tell them apart?',
    hint: 'One is the container, the other the whole pod.',
    back: '<strong>OOMKilled</strong>: one container exceeded its <strong>memory limit</strong>, the kernel killed it (exit 137) and the kubelet restarts it in place; the restart count rises. <strong>Evicted</strong>: the kubelet removed the <strong>whole pod</strong> because the node ran short of memory, disk or PIDs; the pod ends in Failed with reason Evicted, and its controller creates a replacement elsewhere.',
    tags: ['OOMKilled', 'Eviction']
  },
  {
    id: 'cncf-kcna-fc-438',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Why can an Argo CD Application stay OutOfSync right after a successful sync?',
    hint: 'Something changes the object after it is applied.',
    back: 'Something alters the object after Argo CD applies it: a <strong>mutating admission webhook</strong> injects fields (sidecars, labels), the API server <strong>defaults</strong> fields the manifest leaves out, or another controller owns a field (HPA replicas, CA bundles on webhooks). Fixes: declare the field as it ends up, add <strong>ignoreDifferences</strong> for fields owned elsewhere, or enable <strong>server-side diff</strong> so Argo CD compares against the result of a server dry run.',
    tags: ['Argo CD', 'Drift']
  },
  {
    id: 'cncf-kcna-fc-439',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What do Argo Rollouts AnalysisRun results Successful, Failed and Inconclusive do to a canary?',
    hint: 'Continue, abort, or ask a human.',
    back: '<strong>Successful</strong>: the step passes and the canary moves on. <strong>Failed</strong> (failure limit reached): the Rollout <strong>aborts</strong>, routing traffic back to stable and marking the Rollout Degraded. <strong>Inconclusive</strong>: results fall between the success and failure conditions, so the Rollout <strong>pauses</strong> for a person to promote or abort. An <strong>Error</strong> result means the metric query itself failed.',
    tags: ['Argo Rollouts', 'Analysis']
  },
  {
    id: 'cncf-kcna-fc-440',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Which kubectl logs flags matter most during an incident?',
    hint: 'Which instance, which container, how much, keep watching.',
    back: '<code>--previous</code> reads the last crashed instance. <code>-c NAME</code> picks a container; <code>--all-containers</code> reads them all. <code>--tail=N</code> and <code>--since=10m</code> limit output. <code>-f</code> follows the stream. <code>-l app=web --prefix</code> reads every matching pod with each line labelled. <code>--timestamps</code> adds times to correlate with events.',
    tags: ['kubectl logs']
  },
  {
    id: 'cncf-kcna-fc-441',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What does a pod status of Init:1/3 tell you?',
    hint: 'Init containers run one at a time.',
    back: 'Init containers run <strong>sequentially</strong>, each to completion, before the app containers start. <code>Init:1/3</code> means one of three has completed and the second is running or waiting. <code>Init:CrashLoopBackOff</code> means an init container keeps failing, <code>Init:Error</code> means one failed, and <code>PodInitializing</code> means all init containers finished and the app containers are starting.',
    tags: ['Init containers', 'Pods']
  },
  {
    id: 'cncf-kcna-fc-442',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What does helm lint check, and what does it miss?',
    hint: 'Static checks only.',
    back: '<code>helm lint</code> checks a chart\'s structure, Chart.yaml metadata, that templates render with the given values, and YAML well-formedness, flagging errors and best-practice warnings; <code>--strict</code> turns warnings into failures. It does not contact a cluster, so it cannot detect admission rejections, missing CRDs or an application that crashes at runtime.',
    tags: ['Helm', 'helm lint']
  },
  {
    id: 'cncf-kcna-fc-443',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Why might a ConfigMap update never reach a running pod, even when mounted as a volume?',
    hint: 'One mount style is frozen at start.',
    back: 'Keys mounted as a volume are refreshed by the kubelet after a delay (its sync period plus cache TTL, often up to about a minute), but a key mounted with <strong>subPath</strong> is <strong>never updated</strong>. Values consumed as <strong>environment variables</strong> are also fixed at container start. And even an updated file only helps if the application re-reads it; many apps load config once at startup.',
    tags: ['ConfigMap', 'Debugging']
  },
  {
    id: 'cncf-kcna-fc-444',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How do you watch pods change state live during a rollout?',
    hint: 'A flag that keeps the command open.',
    back: 'Add <code>-w</code> (<code>--watch</code>): <code>kubectl get pods -l app=web -w</code> prints a new line each time a pod changes, so you see new pods go ContainerCreating, Running and Ready while old ones terminate. Pair it with <code>kubectl rollout status</code> for a pass or fail result, and with <code>kubectl get events -w</code> for reasons.',
    tags: ['kubectl get', 'Rollout']
  },
  {
    id: 'cncf-kcna-fc-445',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How do you see exactly which API calls kubectl makes when a command behaves oddly?',
    hint: 'Turn up the verbosity.',
    back: 'Add <code>-v=6</code> to print each HTTP request URL and response code, <code>-v=8</code> to include request and response bodies (up to <code>-v=9</code> for full detail). This reveals which API server and context kubectl is using, which resource version or path it calls, and the raw error returned, which is useful for RBAC, admission and connectivity problems.',
    tags: ['kubectl', 'Verbosity']
  },
  {
    id: 'cncf-kcna-fc-446',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What do kubectl diff\'s exit codes mean, and how does CI use them?',
    hint: 'Not the usual zero-means-success.',
    back: '<strong>0</strong>: no differences between the manifests and the live objects. <strong>1</strong>: differences were found (not an error). <strong>Greater than 1</strong>: kubectl or the diff program failed. CI can therefore flag drift or show pending changes in a pull request and still fail properly on real errors, instead of treating any non-zero exit as a failure.',
    tags: ['kubectl diff', 'CI']
  },
  {
    id: 'cncf-kcna-fc-447',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How do Helm hooks work, and what happens to hook resources afterwards?',
    hint: 'Annotations decide when, in what order, and whether they are cleaned up.',
    back: 'A template annotated <code>helm.sh/hook</code> (pre-install, post-install, pre-upgrade, post-upgrade, pre-delete, pre-rollback, test and so on) runs at that point in the release lifecycle; Helm waits for hook Jobs to complete, and a failed hook fails the release. <code>helm.sh/hook-weight</code> orders hooks, lowest first. Hook resources are <strong>not managed as part of the release</strong>, so <code>helm uninstall</code> leaves them; <code>helm.sh/hook-delete-policy</code> (before-hook-creation, the default, hook-succeeded or hook-failed) controls cleanup.',
    tags: ['Helm', 'Hooks']
  },
  {
    id: 'cncf-kcna-fc-448',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is kubectl cp for, and what does it need inside the container?',
    hint: 'It is built on exec.',
    back: '<code>kubectl cp</code> copies files between your machine and a container, for example to grab a heap dump: <code>kubectl cp web-5c8b:/tmp/heap.hprof ./heap.hprof</code>. It works by running <code>tar</code> through exec, so the image must contain a <strong>tar binary</strong>; minimal and distroless images need an ephemeral debug container instead.',
    tags: ['kubectl cp']
  },
  {
    id: 'cncf-kcna-fc-449',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How can maxUnavailable: 0 deadlock a rolling update?',
    hint: 'The surge pod has nowhere to go.',
    back: 'With <code>maxUnavailable: 0</code> the controller must start a <strong>surge pod</strong> before removing any old pod. If that pod cannot be scheduled (no spare CPU or memory, anti-affinity allowing one pod per node, a full quota), the rollout <strong>waits forever</strong> and eventually reports ProgressDeadlineExceeded. Fix by adding capacity, relaxing the constraint, or allowing <code>maxUnavailable: 1</code> so an old pod frees room first.',
    tags: ['Deployment', 'Rolling update']
  },
  {
    id: 'cncf-kcna-fc-450',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What does the kubectl events command add over kubectl get events?',
    hint: 'Filtering and ordering built in.',
    back: '<code>kubectl events</code> sorts events chronologically by default and adds filters: <code>--for pod/web-5c8b</code> limits output to one object, <code>--types=Warning</code> hides routine Normal events, and <code>--watch</code> streams new ones. That makes it quick to follow a rollout or failed deploy without writing field selectors or <code>--sort-by</code> expressions.',
    tags: ['Events', 'kubectl']
  }
];

export default CNCF_KCNA_FLASHCARDS_18;
