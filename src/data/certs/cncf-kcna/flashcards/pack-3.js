export const CNCF_KCNA_FLASHCARDS_3 = [
  {
    id: "cncf-kcna-fc-51",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Match the workload controller to the job: Deployment, StatefulSet, DaemonSet, Job, CronJob.",
    hint: "Stateless, stateful, per node, run once, run on a timer.",
    back: "<strong>Deployment</strong>: stateless, interchangeable replicas with rolling updates. <strong>StatefulSet</strong>: replicas that need stable names and their own storage (databases, brokers). <strong>DaemonSet</strong>: one Pod per eligible node (agents, log collectors). <strong>Job</strong>: run Pods until a task completes. <strong>CronJob</strong>: create Jobs on a cron schedule.",
    tags: ["Workloads","Controllers"]
  },
  {
    id: "cncf-kcna-fc-52",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which guarantees does a StatefulSet give that a Deployment does not?",
    hint: "Identity, storage, order.",
    back: "<strong>Stable network identity</strong>: Pods are named <code>&lt;name&gt;-0</code>, <code>-1</code> ... and keep the name when rescheduled. <strong>Stable storage</strong>: each ordinal gets its own PersistentVolumeClaim from <code>volumeClaimTemplates</code>, reattached on replacement. <strong>Ordering</strong>: by default Pods are created, scaled and updated one ordinal at a time. Deployment replicas are interchangeable and have none of these.",
    tags: ["StatefulSets"]
  },
  {
    id: "cncf-kcna-fc-53",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Why does a StatefulSet reference a headless Service in serviceName?",
    hint: "Per-Pod DNS.",
    back: "The headless Service (<code>clusterIP: None</code>) is the <strong>governing Service</strong> that gives each Pod a stable DNS name such as <code>db-0.db.prod.svc.cluster.local</code>, so peers and clients can address a specific replica. You create that Service yourself; the StatefulSet does not create it for you. A normal ClusterIP Service can still sit in front for load-balanced access.",
    tags: ["StatefulSets","Headless Services"]
  },
  {
    id: "cncf-kcna-fc-54",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Job vs CronJob: what is the difference?",
    hint: "One is a template for the other.",
    back: "A <strong>Job</strong> runs one or more Pods until a set number complete successfully, then stops; it runs once. A <strong>CronJob</strong> holds a Job template and a <strong>cron schedule</strong>, and creates a new Job at each scheduled time, such as nightly backups or hourly reports.",
    tags: ["Jobs","CronJobs"]
  },
  {
    id: "cncf-kcna-fc-55",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the three CronJob concurrencyPolicy values?",
    hint: "Run together, skip, or swap.",
    back: "<strong>Allow</strong> (default): scheduled runs may overlap. <strong>Forbid</strong>: if the previous Job is still running, the new run is skipped. <strong>Replace</strong>: the running Job is stopped and replaced by the new one. The policy applies only to Jobs created by that same CronJob.",
    tags: ["CronJobs","Concurrency"]
  },
  {
    id: "cncf-kcna-fc-56",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does completionMode: Indexed change for a Job?",
    hint: "Each Pod gets a number.",
    back: "In an <strong>Indexed</strong> Job, each Pod gets a completion index from 0 to completions-1, exposed as the <code>JOB_COMPLETION_INDEX</code> environment variable and an annotation, and the Job is complete when one Pod succeeds <strong>for every index</strong>. That lets each worker pick its own shard of the data without a work queue. The default, <strong>NonIndexed</strong>, just counts successes.",
    tags: ["Jobs","Indexed Jobs"]
  },
  {
    id: "cncf-kcna-fc-57",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "For a Job, how does restartPolicy OnFailure differ from Never when a task fails?",
    hint: "Same Pod or a new one?",
    back: "<strong>OnFailure</strong>: the kubelet restarts the failed container <strong>inside the same Pod</strong> on the same node, so one Pod accumulates restarts. <strong>Never</strong>: the Pod is left Failed and the Job controller creates a <strong>new Pod</strong>, so failed Pods and their logs remain for inspection. Either way, failures count against <code>backoffLimit</code>.",
    tags: ["Jobs","restartPolicy"]
  },
  {
    id: "cncf-kcna-fc-58",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How many finished Jobs does a CronJob keep by default?",
    hint: "Two history limits.",
    back: "<code>successfulJobsHistoryLimit</code> defaults to <strong>3</strong> and <code>failedJobsHistoryLimit</code> to <strong>1</strong>; older finished Jobs (and their Pods) are deleted. Setting a limit to 0 keeps none. Keeping a few lets you read logs of recent runs without the namespace filling up.",
    tags: ["CronJobs","Cleanup"]
  },
  {
    id: "cncf-kcna-fc-59",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How does the partition field in a StatefulSet rolling update work?",
    hint: "Canary by ordinal.",
    back: "With <code>updateStrategy.rollingUpdate.partition: N</code>, only Pods with an <strong>ordinal of N or higher</strong> are updated to the new template; lower ordinals keep the old version, even if they are deleted and recreated. Lowering the partition step by step rolls the change out gradually, a simple canary for stateful apps.",
    tags: ["StatefulSets","Rolling updates"]
  },
  {
    id: "cncf-kcna-fc-60",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "In which ways can a Pod consume a ConfigMap?",
    hint: "Three are common.",
    back: "As <strong>environment variables</strong> (single keys with <code>configMapKeyRef</code>, or all keys with <code>envFrom</code>), as <strong>command-line arguments</strong> built from those variables, and as <strong>files in a volume</strong>, one file per key. An app can also read it through the Kubernetes API. The ConfigMap must be in the same namespace as the Pod.",
    tags: ["ConfigMaps"]
  },
  {
    id: "cncf-kcna-fc-61",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "When a ConfigMap is edited, which consumers see the change without a Pod restart?",
    hint: "Files yes, variables no, with one exception.",
    back: "<strong>Mounted volumes</strong> are updated by the kubelet after a delay (its sync period plus cache TTL). <strong>Environment variables</strong> are set when the container starts and never change. Volumes mounted with <code>subPath</code> do not receive updates either. Many teams add a config hash to the Pod template so edits trigger a rollout.",
    tags: ["ConfigMaps","Updates"]
  },
  {
    id: "cncf-kcna-fc-62",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "ConfigMap vs Secret: when should each be used?",
    hint: "Is the value sensitive?",
    back: "Use a <strong>ConfigMap</strong> for non-confidential settings: URLs, flags, config files. Use a <strong>Secret</strong> for passwords, tokens and keys. Secrets are consumed the same ways, but can be restricted separately by RBAC, are kept in memory (tmpfs) on nodes, and can be encrypted at rest. Their values are only base64-encoded, not encrypted, by default.",
    tags: ["ConfigMaps","Secrets"]
  },
  {
    id: "cncf-kcna-fc-63",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does a Job podFailurePolicy let you do that backoffLimit alone cannot?",
    hint: "Not every failure deserves a retry.",
    back: "A <strong>podFailurePolicy</strong> (stable since 1.31) matches failures by <strong>container exit code</strong> or <strong>Pod condition</strong> and picks an action: <code>FailJob</code> (stop retrying at once, for example on a known bug exit code), <code>Ignore</code> (do not count it against backoffLimit, for example when the Pod was disrupted by a node drain), or <code>Count</code> (the normal behavior). It requires <code>restartPolicy: Never</code>.",
    tags: ["Jobs","Failure handling"]
  },
  {
    id: "cncf-kcna-fc-64",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Downward API: environment variables vs a downwardAPI volume?",
    hint: "One can refresh and hold all labels.",
    back: "Both expose Pod fields such as name, namespace, labels and resource limits. <strong>Environment variables</strong> are fixed at container start and can take single label or annotation keys. A <strong>downwardAPI volume</strong> can write <em>all</em> labels or annotations to a file and <strong>updates it</strong> when they change. Some fields, like status.podIP and spec.nodeName, are available only as variables.",
    tags: ["Downward API"]
  },
  {
    id: "cncf-kcna-fc-65",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the three ways to manage Kubernetes objects with kubectl?",
    hint: "Commands, files by command, files by state.",
    back: "<strong>Imperative commands</strong>: act on live objects directly (<code>kubectl create deployment</code>, <code>kubectl scale</code>); quick, but leave no record. <strong>Imperative object configuration</strong>: name the operation and a file (<code>kubectl create -f</code>, <code>replace -f</code>). <strong>Declarative object configuration</strong>: keep files as the source of truth and let <code>kubectl apply -f</code> work out the changes; best for Git-based workflows.",
    tags: ["kubectl","Object management"]
  },
  {
    id: "cncf-kcna-fc-66",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does kubectl scale work on?",
    hint: "Anything with a scale subresource.",
    back: "<code>kubectl scale --replicas=N</code> sets the replica count of <strong>Deployments, ReplicaSets, StatefulSets</strong> and ReplicationControllers, and of custom resources that expose the <strong>scale subresource</strong>. It does not apply to DaemonSets (one Pod per node) or Jobs (use parallelism). If an HPA manages the workload, it will override a manual scale.",
    tags: ["kubectl","Scaling"]
  },
  {
    id: "cncf-kcna-fc-67",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does kubectl patch do, and which patch types does it support?",
    hint: "Three formats.",
    back: "<code>kubectl patch</code> changes specific fields of a live object without a full manifest. Types: <strong>strategic merge</strong> (default for built-in kinds; understands list keys such as container names), <strong>merge</strong> (JSON merge patch; lists are replaced whole) and <strong>json</strong> (JSON Patch: explicit add/remove/replace operations by path). Custom resources do not support strategic merge.",
    tags: ["kubectl","Patching"]
  },
  {
    id: "cncf-kcna-fc-68",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Which kubectl config commands manage contexts?",
    hint: "List, show, switch, change.",
    back: "<code>kubectl config get-contexts</code> lists contexts and marks the active one; <code>current-context</code> prints it; <code>use-context NAME</code> switches; <code>set-context --current --namespace=NS</code> changes the default namespace of the active context. Each context is a cluster + user (+ namespace) entry in the kubeconfig.",
    tags: ["kubectl","kubeconfig"]
  },
  {
    id: "cncf-kcna-fc-69",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "Give some kubectl short names for common resources.",
    hint: "Save keystrokes.",
    back: "<code>po</code> (pods), <code>deploy</code> (deployments), <code>rs</code> (replicasets), <code>svc</code> (services), <code>ns</code> (namespaces), <code>cm</code> (configmaps), <code>no</code> (nodes), <code>pvc</code> and <code>pv</code>, <code>sts</code> (statefulsets), <code>ds</code> (daemonsets), <code>sa</code> (serviceaccounts). <code>kubectl api-resources</code> lists every short name.",
    tags: ["kubectl"]
  },
  {
    id: "cncf-kcna-fc-70",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "kubectl run vs kubectl create deployment: what does each create?",
    hint: "One makes a single, unmanaged thing.",
    back: "<code>kubectl run NAME --image=IMG</code> creates a <strong>single bare Pod</strong>, handy for a quick test or a throwaway shell (<code>--rm -it</code>). It no longer creates Deployments. <code>kubectl create deployment NAME --image=IMG --replicas=N</code> creates a <strong>Deployment</strong>, whose Pods are replaced if they fail and can be scaled or rolled out.",
    tags: ["kubectl","Pods"]
  },
  {
    id: "cncf-kcna-fc-71",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "How do you list Pods by label, or across every namespace?",
    hint: "Two flags.",
    back: "<code>-l</code> (or <code>--selector</code>) filters by label, for example <code>kubectl get pods -l app=web,tier!=cache</code> or <code>-l 'env in (qa,staging)'</code>. <code>-A</code> (or <code>--all-namespaces</code>) lists across all namespaces and adds a NAMESPACE column. Both can be combined.",
    tags: ["kubectl","Labels"]
  },
  {
    id: "cncf-kcna-fc-72",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What are the defaults for a Job's completions and parallelism?",
    hint: "The simplest possible Job.",
    back: "Both default to <strong>1</strong>: the Job runs a single Pod and is complete when it succeeds once. Set <code>completions</code> for a fixed number of successes and <code>parallelism</code> to run several Pods at once. Leaving completions unset while raising parallelism gives a work-queue style Job, where the Job ends once any Pod succeeds and all Pods have stopped.",
    tags: ["Jobs"]
  },
  {
    id: "cncf-kcna-fc-73",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What happens when a CronJob misses scheduled runs, and what does startingDeadlineSeconds do?",
    hint: "A count of 100 matters.",
    back: "If the controller was down or the CronJob suspended, it counts missed schedules. With <strong>startingDeadlineSeconds</strong> set, a run that cannot start within that many seconds of its scheduled time is skipped, and only misses within that window are counted. If more than <strong>100</strong> schedules are missed, the controller does not start the Job and logs an error.",
    tags: ["CronJobs"]
  },
  {
    id: "cncf-kcna-fc-74",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "What does minReadySeconds do on a Deployment?",
    hint: "Ready, then wait.",
    back: "A new Pod counts as <strong>available</strong> only after it has been Ready, without any container crashing, for <code>minReadySeconds</code> (default 0). During a rolling update, the Deployment waits for availability before continuing, so a value like 30 catches Pods that pass readiness and then crash shortly after, before the old Pods are all gone.",
    tags: ["Deployments","Rollouts"]
  },
  {
    id: "cncf-kcna-fc-75",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d1",
    front: "ReplicaSet vs ReplicationController: which should you use?",
    hint: "One is legacy.",
    back: "<strong>ReplicaSet</strong> is the modern replacement and is what Deployments create; it supports <strong>set-based selectors</strong> (In, NotIn, Exists). ReplicationController is the original, legacy controller with equality-only selectors. In practice you create neither directly: use a Deployment, which manages ReplicaSets for you.",
    tags: ["ReplicaSets"]
  }
];

export default CNCF_KCNA_FLASHCARDS_3;
