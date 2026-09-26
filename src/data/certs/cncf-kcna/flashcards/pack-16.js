export const CNCF_KCNA_FLASHCARDS_16 = [
  {
    id: 'cncf-kcna-fc-376',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Helm vocabulary: what are a chart, a release and a repository?',
    hint: 'Package, installed instance, place to fetch from.',
    back: 'A <strong>chart</strong> is a package of templated Kubernetes manifests plus default values. A <strong>release</strong> is one installed instance of a chart in a cluster, with its own name and revision history; the same chart can be installed many times as different releases. A <strong>repository</strong> (an HTTP index or an OCI registry) is where charts are published and pulled from.',
    tags: ['Helm', 'Terminology']
  },
  {
    id: 'cncf-kcna-fc-377',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Helm vs Kustomize: how does each produce environment-specific manifests?',
    hint: 'Templates versus patches.',
    back: '<strong>Helm</strong> renders Go templates with values, and also versions, packages and tracks releases (install, upgrade, rollback). <strong>Kustomize</strong> takes plain YAML as a base and applies overlays and patches with no template syntax; it is built into kubectl (<code>kubectl apply -k</code>) and does not track releases. Many teams combine them, rendering a chart and patching the output.',
    tags: ['Helm', 'Kustomize']
  },
  {
    id: 'cncf-kcna-fc-378',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How do the default maxSurge and maxUnavailable values of 25% round on a Deployment?',
    hint: 'One rounds up, the other rounds down.',
    back: '<strong>maxSurge rounds up</strong> and <strong>maxUnavailable rounds down</strong>. On 4 replicas both come to 1 pod; on 3 replicas surge is 1 but unavailable is 0, so the rollout always adds a pod before removing one. Setting <code>maxUnavailable: 0</code> guarantees full capacity during a rollout, and both values cannot be 0 at once.',
    tags: ['Deployment', 'Rolling update']
  },
  {
    id: 'cncf-kcna-fc-379',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'RollingUpdate vs Recreate: when is each Deployment strategy the right choice?',
    hint: 'Can both versions run side by side?',
    back: '<strong>RollingUpdate</strong> (the default) replaces pods gradually, so old and new versions briefly run together and there is no downtime. <strong>Recreate</strong> terminates every old pod before starting new ones, so versions never overlap but there is a gap in service. Choose Recreate only when two versions must not run at once, for example incompatible schema access or an exclusive lock.',
    tags: ['Deployment', 'Strategy']
  },
  {
    id: 'cncf-kcna-fc-380',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Blue-green vs canary: what separates the two release patterns?',
    hint: 'All at once or a slice at a time.',
    back: '<strong>Blue-green</strong> runs the full new version beside the old one and switches <em>all</em> traffic in one step (in Kubernetes, often by changing a Service selector), keeping the old version ready for instant switch-back. It needs double capacity during the switch. <strong>Canary</strong> sends a <em>small share</em> of traffic to the new version, watches metrics, and increases the share gradually, limiting blast radius.',
    tags: ['Blue-green', 'Canary']
  },
  {
    id: 'cncf-kcna-fc-381',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is the ownership chain from a Deployment down to its containers, and what does each layer do?',
    hint: 'Three objects, each owning the next.',
    back: 'A <strong>Deployment</strong> manages rollout strategy and history; it creates one <strong>ReplicaSet</strong> per pod-template revision. Each ReplicaSet keeps its desired number of <strong>Pods</strong> running, and each pod runs one or more containers. A rollout is the Deployment scaling the new ReplicaSet up and the old one down; a rollback scales an old ReplicaSet back up.',
    tags: ['Deployment', 'ReplicaSet']
  },
  {
    id: 'cncf-kcna-fc-382',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Which changes to a Deployment trigger a new rollout, and which do not?',
    hint: 'Look at what is inside spec.template.',
    back: 'Only changes to the <strong>pod template</strong> (<code>spec.template</code>), such as image, env, resources or template labels, create a new ReplicaSet and a rollout. Changing <code>replicas</code> just scales the current ReplicaSet, and changes to objects the pods reference, such as a ConfigMap or Secret, do not trigger anything by themselves.',
    tags: ['Deployment', 'Rollout']
  },
  {
    id: 'cncf-kcna-fc-383',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How do you see a Deployment\'s rollout history and return to a specific older revision?',
    hint: 'Two rollout subcommands and one flag.',
    back: '<code>kubectl rollout history deployment/web</code> lists revisions (the <code>kubernetes.io/change-cause</code> annotation fills the CHANGE-CAUSE column), and <code>--revision=N</code> shows one revision\'s template. <code>kubectl rollout undo deployment/web --to-revision=N</code> rolls back to it; without the flag, undo goes to the previous revision. History length is capped by <code>revisionHistoryLimit</code> (default 10).',
    tags: ['kubectl rollout', 'Rollback']
  },
  {
    id: 'cncf-kcna-fc-384',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'helm rollback vs kubectl rollout undo: which should you use for a Helm-managed app?',
    hint: 'Who owns the release record?',
    back: 'Use <strong>helm rollback RELEASE [REVISION]</strong>. It restores every resource in the release, including ConfigMaps and Services, and records the rollback as a new release revision. <code>kubectl rollout undo</code> reverts only one Deployment\'s pod template behind Helm\'s back, so the release record and the cluster disagree and the next <code>helm upgrade</code> can undo the fix.',
    tags: ['Helm', 'Rollback']
  },
  {
    id: 'cncf-kcna-fc-385',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Chart version vs appVersion in Chart.yaml: what does each describe?',
    hint: 'The package or what is inside it.',
    back: '<strong>version</strong> is the SemVer version of the <em>chart package</em> and must change whenever the chart changes; repositories and dependency ranges use it. <strong>appVersion</strong> is informational and records the version of the <em>application</em> the chart deploys, often the default image tag. A chart can be bumped (for a template fix) without changing appVersion.',
    tags: ['Helm', 'Chart.yaml']
  },
  {
    id: 'cncf-kcna-fc-386',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'kubectl create, replace and apply: how do they differ?',
    hint: 'Imperative object commands vs declarative merge.',
    back: '<strong>create</strong> makes a new object and fails if it exists. <strong>replace</strong> overwrites the whole live object with the file, dropping fields the file omits. <strong>apply</strong> is declarative: it merges your file with the live object, updating only fields you manage and leaving fields set by other controllers alone, and it is safe to run repeatedly, which makes it the basis of Git-driven delivery.',
    tags: ['kubectl', 'Declarative']
  },
  {
    id: 'cncf-kcna-fc-387',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What does server-side apply add over classic client-side kubectl apply?',
    hint: 'Think about who owns each field.',
    back: 'With <code>kubectl apply --server-side</code> the API server performs the merge and records <strong>field ownership</strong> in <code>managedFields</code>, per field manager. If another manager already owns a field you try to change, the request fails with a <strong>conflict</strong> unless you use <code>--force-conflicts</code>. This makes several tools (a GitOps agent, an autoscaler) safely co-manage one object, and it removes the large last-applied-configuration annotation.',
    tags: ['Server-side apply', 'kubectl']
  },
  {
    id: 'cncf-kcna-fc-388',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: '--dry-run=client vs --dry-run=server: what does each actually check?',
    hint: 'Where is the request evaluated?',
    back: '<strong>client</strong> only builds the object locally (handy with <code>-o yaml</code> to generate manifests) and cannot catch server-side problems. <strong>server</strong> sends the request to the API server, which runs validation, defaulting and admission controllers without persisting anything, so it catches schema errors, policy rejections and quota violations before a real apply.',
    tags: ['kubectl', 'Dry run']
  },
  {
    id: 'cncf-kcna-fc-389',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is the default imagePullPolicy, and how does the image tag change it?',
    hint: 'One tag name is special.',
    back: 'If you omit <code>imagePullPolicy</code>, Kubernetes sets it to <strong>Always</strong> when the tag is <code>:latest</code> or missing, and to <strong>IfNotPresent</strong> for any other tag or a digest. <code>Never</code> uses only images already on the node. Because the default is set when the object is created, changing the tag later does not update the policy automatically.',
    tags: ['Images', 'imagePullPolicy']
  },
  {
    id: 'cncf-kcna-fc-390',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Which recommended labels does Kubernetes suggest for identifying an application, and why use them?',
    hint: 'They share one prefix.',
    back: 'The <strong>app.kubernetes.io/</strong> labels: <code>name</code>, <code>instance</code>, <code>version</code>, <code>component</code>, <code>part-of</code> and <code>managed-by</code>. Using a common set lets dashboards, Helm, and other tools query and group any application consistently. Keep version out of selectors, since selectors on Deployments cannot change after creation.',
    tags: ['Labels', 'Conventions']
  },
  {
    id: 'cncf-kcna-fc-391',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How does a DaemonSet roll out a new image, and how does that differ from a Deployment?',
    hint: 'One pod per node changes the maths.',
    back: 'A DaemonSet runs one pod per eligible node, so its <strong>RollingUpdate</strong> replaces pods node by node, controlled by <code>maxUnavailable</code> (default 1) and optionally <code>maxSurge</code>. It keeps no ReplicaSets; history is stored as ControllerRevisions. The <strong>OnDelete</strong> strategy updates a node\'s pod only when you delete it, useful for careful node-agent upgrades.',
    tags: ['DaemonSet', 'Rolling update']
  },
  {
    id: 'cncf-kcna-fc-392',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What files make up the basic layout of a Helm chart?',
    hint: 'One metadata file, one defaults file, one folder of templates.',
    back: '<code>Chart.yaml</code> holds metadata (name, version, appVersion, dependencies). <code>values.yaml</code> holds default configuration. <code>templates/</code> holds the templated manifests, with <code>_helpers.tpl</code> for reusable snippets and <code>NOTES.txt</code> for post-install messages. <code>charts/</code> holds downloaded subcharts. <code>helm create</code> scaffolds this and <code>helm lint</code> checks it.',
    tags: ['Helm', 'Chart structure']
  },
  {
    id: 'cncf-kcna-fc-393',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How do you change only the image tag across a Kustomize overlay without writing a patch?',
    hint: 'A dedicated field in kustomization.yaml.',
    back: 'Use the <strong>images</strong> field: list the image <code>name</code> and set <code>newTag</code>, <code>newName</code> or <code>digest</code>. Kustomize rewrites every matching container image in the rendered output. <code>kustomize edit set image</code> updates the field from a CI job, a common way to promote a build between overlays.',
    tags: ['Kustomize', 'Images']
  },
  {
    id: 'cncf-kcna-fc-394',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'When does packaging an app as an Operator beat a Helm chart?',
    hint: 'Day 1 versus day 2.',
    back: 'Helm is good at <strong>day-1</strong> work: rendering and installing manifests, then upgrading them. An <strong>Operator</strong> (a custom controller plus CRDs) runs continuously and encodes <strong>day-2</strong> operational knowledge: backups, failover, scaling a cluster membership, version-aware upgrades. Choose an Operator for stateful systems such as databases whose operations need ongoing reconciliation; a chart is enough for stateless services.',
    tags: ['Operators', 'Helm']
  },
  {
    id: 'cncf-kcna-fc-395',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Canary vs A/B testing: what question does each answer?',
    hint: 'Safety versus user behaviour.',
    back: 'A <strong>canary</strong> answers "is the new version safe?": a random slice of traffic tests it for errors and latency before full rollout. <strong>A/B testing</strong> answers "which variant performs better for the business?": users are routed by attributes (header, cookie, region) to competing variants for a set time and compared on conversion or engagement. A/B routing usually needs an ingress, gateway or mesh that can match requests.',
    tags: ['Canary', 'A/B testing']
  },
  {
    id: 'cncf-kcna-fc-396',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What does helm upgrade --install do, and why do pipelines use it?',
    hint: 'One command whether or not the release exists.',
    back: 'It <strong>upgrades the release if it exists and installs it if it does not</strong>, so the same idempotent command works for the first deploy and every later one. Pipelines often add <code>--rollback-on-failure</code> (<code>--atomic</code> in Helm 3; rolls back automatically if the upgrade fails) or <code>--wait</code> (wait for resources to become ready) so a broken release fails the job.',
    tags: ['Helm', 'CI']
  },
  {
    id: 'cncf-kcna-fc-397',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is traffic mirroring (shadowing), and what makes it safe or unsafe?',
    hint: 'Responses from the copy are discarded.',
    back: 'Mirroring sends a <strong>copy</strong> of live requests to the new version while users still get responses only from the stable version, so real traffic tests it with no user impact. It needs a proxy, gateway or mesh that can mirror. It is only safe for side-effect-free requests: mirrored writes (payments, emails, database inserts) would run twice unless the shadow uses stubbed dependencies.',
    tags: ['Mirroring', 'Progressive delivery']
  },
  {
    id: 'cncf-kcna-fc-398',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Why does a Kustomize configMapGenerator add a hash suffix to the ConfigMap name?',
    hint: 'A new name means a changed Pod template.',
    back: 'The generated name (for example <code>app-config-7h2k9m5t4b</code>) includes a hash of the data, and Kustomize rewrites every reference to it in Deployments and other workloads. Changing any value produces a <strong>new name</strong>, which changes the Pod template and <strong>triggers a rolling update</strong>, so Pods never silently keep stale config, and a rollback points back at the old ConfigMap. Old generated ConfigMaps linger until pruned; <code>generatorOptions.disableNameSuffixHash</code> turns the behaviour off.',
    tags: ['Kustomize', 'ConfigMap']
  },
  {
    id: 'cncf-kcna-fc-399',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What does helm upgrade --rollback-on-failure (formerly --atomic) change about a failed upgrade?',
    hint: 'Think about what state the release is left in.',
    back: 'Without it, a failed upgrade leaves the release in a <strong>failed</strong> revision with whatever resources were applied. With <strong>--rollback-on-failure</strong> (Helm 4\'s name for Helm 3\'s <code>--atomic</code>, which remains as a deprecated alias on upgrade), Helm waits for resources to become ready (the flag turns waiting on) and, if the upgrade fails or times out, <strong>rolls back automatically</strong> to the last successful revision, so the cluster is never left half-upgraded.',
    tags: ['Helm', 'Upgrades']
  },
  {
    id: 'cncf-kcna-fc-400',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Why pin images by digest instead of by tag?',
    hint: 'Tags can move.',
    back: 'A tag such as <code>v1.4</code> or <code>latest</code> is a <strong>mutable pointer</strong> that can be re-pushed to different content. A <strong>digest</strong> (<code>image@sha256:...</code>) is the content hash, so it always resolves to exactly the same image on every node and in every cluster. That gives reproducible deploys, reliable rollbacks and a clear audit trail of what ran.',
    tags: ['Images', 'Digest']
  }
];

export default CNCF_KCNA_FLASHCARDS_16;
