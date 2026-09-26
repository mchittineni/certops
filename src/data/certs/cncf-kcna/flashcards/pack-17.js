export const CNCF_KCNA_FLASHCARDS_17 = [
  {
    id: 'cncf-kcna-fc-401',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What are the four OpenGitOps principles?',
    hint: 'Declared, stored, fetched, corrected.',
    back: '1. <strong>Declarative</strong>: the desired state is expressed as data, not steps. 2. <strong>Versioned and immutable</strong>: it is stored with a complete, unchangeable history (usually Git). 3. <strong>Pulled automatically</strong>: software agents fetch the desired state from the source. 4. <strong>Continuously reconciled</strong>: agents keep comparing actual to desired state and correct drift.',
    tags: ['GitOps', 'OpenGitOps']
  },
  {
    id: 'cncf-kcna-fc-402',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Push-based vs pull-based deployment: where do the cluster credentials live in each?',
    hint: 'Who initiates the change?',
    back: 'In <strong>push</strong> delivery an external CI/CD system runs <code>kubectl apply</code> or <code>helm upgrade</code>, so it must hold write credentials for every cluster. In <strong>pull</strong> delivery (GitOps) an agent inside the cluster, such as Argo CD or Flux, fetches from Git and applies with in-cluster permissions; outside systems only need to push commits. Pull also enables continuous drift correction.',
    tags: ['GitOps', 'Pull model']
  },
  {
    id: 'cncf-kcna-fc-403',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Argo CD vs Flux: what do the two CNCF graduated GitOps tools have in common, and how do they differ?',
    hint: 'Same goal, different shape.',
    back: 'Both are <strong>graduated CNCF projects</strong> that reconcile clusters from Git, Helm and OCI sources. <strong>Argo CD</strong> centres on the <code>Application</code> resource and ships a rich web UI, SSO and multi-cluster management from one instance. <strong>Flux</strong> is a set of composable controllers (source, kustomize, helm, notification, image automation) driven entirely by CRDs, with no built-in UI.',
    tags: ['Argo CD', 'Flux']
  },
  {
    id: 'cncf-kcna-fc-404',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Which Flux controllers make up the GitOps Toolkit, and what does each do?',
    hint: 'Five controllers, one job each.',
    back: '<strong>source-controller</strong> fetches GitRepository, OCIRepository, HelmRepository and Bucket sources. <strong>kustomize-controller</strong> applies Kustomizations. <strong>helm-controller</strong> reconciles HelmReleases. <strong>notification-controller</strong> sends alerts and receives webhooks. <strong>image-reflector</strong> and <strong>image-automation</strong> controllers scan registries and commit new image tags back to Git.',
    tags: ['Flux', 'Controllers']
  },
  {
    id: 'cncf-kcna-fc-405',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Argo CD resource hooks: what do PreSync, Sync, PostSync and SyncFail hooks run for?',
    hint: 'Before, during, after, on failure.',
    back: 'Hooks are resources (usually Jobs) annotated with <code>argocd.argoproj.io/hook</code>. <strong>PreSync</strong> runs before manifests are applied (for example a database migration). <strong>Sync</strong> runs alongside the apply. <strong>PostSync</strong> runs after all resources are healthy (smoke tests, notifications). <strong>SyncFail</strong> runs when the sync fails (cleanup). Sync waves then order resources within each phase.',
    tags: ['Argo CD', 'Hooks']
  },
  {
    id: 'cncf-kcna-fc-406',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'App-of-apps vs ApplicationSet in Argo CD: when do you use each?',
    hint: 'Hand-written children or generated ones.',
    back: '<strong>App-of-apps</strong>: a parent Application points at a directory of hand-written child Application manifests. Good for bootstrapping a cluster with a known list of apps. <strong>ApplicationSet</strong>: a controller generates Applications from a template plus generators (list, cluster, Git directory, pull request, matrix). Good for many near-identical apps or clusters that change over time.',
    tags: ['Argo CD', 'ApplicationSet']
  },
  {
    id: 'cncf-kcna-fc-407',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Sealed Secrets, SOPS and External Secrets Operator: how does each keep secrets out of Git in plain text?',
    hint: 'Encrypt in Git, or never put it in Git.',
    back: '<strong>Sealed Secrets</strong>: encrypt with the cluster controller\'s public key; only that controller can decrypt into a Secret. <strong>SOPS</strong>: encrypt values in the file with KMS, age or PGP keys; Flux (or a plugin) decrypts at apply time. <strong>External Secrets Operator</strong>: Git holds only a reference; the operator fetches the value from a vault such as AWS Secrets Manager or HashiCorp Vault and writes the Secret.',
    tags: ['Secrets', 'GitOps']
  },
  {
    id: 'cncf-kcna-fc-408',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'CI vs continuous delivery vs continuous deployment: where does each stop?',
    hint: 'Count the manual steps before production.',
    back: '<strong>Continuous integration</strong>: every commit is merged often and automatically built and tested. <strong>Continuous delivery</strong>: every change that passes is automatically prepared and deployable, but a person decides when production gets it. <strong>Continuous deployment</strong>: every change that passes the pipeline goes to production automatically, with no manual gate.',
    tags: ['CI/CD']
  },
  {
    id: 'cncf-kcna-fc-409',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What are the four DORA metrics used to measure software delivery performance?',
    hint: 'Two for speed, two for stability.',
    back: 'Throughput: <strong>deployment frequency</strong> (how often you release) and <strong>lead time for changes</strong> (commit to production). Stability: <strong>change failure rate</strong> (share of deployments causing a failure) and <strong>time to restore service</strong> (how quickly you recover). Elite teams improve speed and stability together rather than trading one for the other.',
    tags: ['DORA', 'Metrics']
  },
  {
    id: 'cncf-kcna-fc-410',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is progressive delivery?',
    hint: 'Continuous delivery with a dimmer switch.',
    back: 'Releasing a change to a <strong>gradually growing audience</strong> while measuring it, with automated promotion or rollback. It builds on continuous delivery using canary releases, blue-green switches, traffic mirroring and feature flags. Kubernetes tools include <strong>Argo Rollouts</strong> and <strong>Flagger</strong>, which rely on an ingress, Gateway API or service mesh to shift traffic.',
    tags: ['Progressive delivery']
  },
  {
    id: 'cncf-kcna-fc-411',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How does Argo Rollouts relate to a standard Deployment?',
    hint: 'Same pod template, different controller.',
    back: 'Argo Rollouts adds a <strong>Rollout</strong> custom resource that is a drop-in replacement for a Deployment (same pod template and selector) but supports <strong>canary and blue-green steps</strong>, pauses, traffic weights through ingress controllers or meshes, and <strong>AnalysisTemplates</strong> that query Prometheus and other providers to decide promotion or abort. The plain Deployment controller only offers RollingUpdate and Recreate.',
    tags: ['Argo Rollouts', 'Canary']
  },
  {
    id: 'cncf-kcna-fc-412',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What stages does a typical container CI pipeline run, in order?',
    hint: 'From commit to a pushed, trusted artifact.',
    back: 'Checkout, then <strong>lint and unit test</strong>, <strong>build the image</strong>, <strong>scan</strong> it for vulnerabilities (and generate an SBOM), <strong>sign</strong> it, <strong>push</strong> it to a registry by digest, then update the deployment manifests (a GitOps commit or a pull request to the environment repo). Integration or end-to-end tests may run against an ephemeral environment before promotion.',
    tags: ['CI', 'Pipelines']
  },
  {
    id: 'cncf-kcna-fc-413',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How do Sigstore cosign signatures fit into a delivery pipeline?',
    hint: 'Sign in CI, verify at admission.',
    back: 'CI signs each image digest with <strong>cosign</strong>, often keyless: a short-lived certificate from <strong>Fulcio</strong> tied to the pipeline\'s OIDC identity, with the event recorded in the <strong>Rekor</strong> transparency log. At deploy time an admission controller or policy engine (for example Kyverno or the Sigstore policy-controller) <strong>verifies the signature and identity</strong> and rejects unsigned or foreign images.',
    tags: ['Sigstore', 'Supply chain']
  },
  {
    id: 'cncf-kcna-fc-414',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is an SBOM and why would a pipeline produce one?',
    hint: 'An ingredients list.',
    back: 'A <strong>Software Bill of Materials</strong> lists every component and version inside an artifact, in formats such as SPDX or CycloneDX. Generating one per image lets teams answer "are we affected?" within minutes when a new CVE is published, and satisfies customer and regulatory supply-chain requirements. It can be attached to the image in the registry alongside its signature.',
    tags: ['SBOM', 'Supply chain']
  },
  {
    id: 'cncf-kcna-fc-415',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is configuration drift, and how does a GitOps agent deal with it?',
    hint: 'Live state wandering away from declared state.',
    back: 'Drift is any difference between the <strong>live cluster</strong> and the <strong>declared state in Git</strong>, typically from manual kubectl changes or other controllers. GitOps agents detect it on every reconciliation and either <strong>report</strong> it (Argo CD shows OutOfSync) or <strong>revert</strong> it automatically (Argo CD self-heal, Flux by default on its interval). Fields legitimately owned by others, such as HPA replicas, should be excluded.',
    tags: ['GitOps', 'Drift']
  },
  {
    id: 'cncf-kcna-fc-416',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is trunk-based development and why does it suit CI/CD?',
    hint: 'Short branches, one main line.',
    back: 'Developers merge small changes into a single <strong>main branch</strong> at least daily, using short-lived branches (hours, not weeks). Incomplete work is hidden behind <strong>feature flags</strong> rather than kept on long branches. The result is fewer merge conflicts, a main branch that is always releasable, and fast feedback from the CI pipeline on every change.',
    tags: ['Trunk-based development', 'CI']
  },
  {
    id: 'cncf-kcna-fc-417',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How does Flagger work with a normal Deployment during a canary?',
    hint: 'It creates a primary copy.',
    back: 'You keep a normal Deployment and add a Flagger <strong>Canary</strong> resource. Flagger creates a <strong>-primary</strong> Deployment that serves production traffic; when your Deployment changes, Flagger shifts traffic to it in steps using a mesh, ingress or Gateway API, checks metrics each interval, then copies the new spec to primary on success or routes everything back on failure. Flagger is part of the Flux project.',
    tags: ['Flagger', 'Canary']
  },
  {
    id: 'cncf-kcna-fc-418',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Argo CD sync status vs health status: what does each compare?',
    hint: 'One looks at Git, the other at the workload.',
    back: '<strong>Sync status</strong> (Synced, OutOfSync) compares the live resources with the desired manifests from Git. <strong>Health status</strong> (Healthy, Progressing, Degraded, Suspended, Missing) says whether the resources actually work, for example whether a Deployment\'s pods are available. An app can be Synced yet Degraded, or OutOfSync yet Healthy.',
    tags: ['Argo CD', 'Status']
  },
  {
    id: 'cncf-kcna-fc-419',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Why does Argo CD render Helm charts itself instead of running helm install?',
    hint: 'Check what helm list shows for an Argo CD-managed chart.',
    back: 'Argo CD runs the equivalent of <strong>helm template</strong> and applies the output like any other manifests, so it can diff, prune and self-heal every resource. The consequence: there is <strong>no Helm release record</strong> in the cluster, so <code>helm list</code> and <code>helm rollback</code> do not see the app, and rollbacks happen through Git or Argo CD history. Flux\'s helm-controller, by contrast, performs real Helm releases.',
    tags: ['Argo CD', 'Helm']
  },
  {
    id: 'cncf-kcna-fc-420',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How do you temporarily stop Flux from reconciling one app during an incident?',
    hint: 'A subcommand, and its opposite.',
    back: 'Run <code>flux suspend kustomization NAME</code> (or <code>flux suspend helmrelease NAME</code>). This sets <code>spec.suspend: true</code>, so Flux stops applying changes and reverting drift for that object while you debug. Run <code>flux resume</code> afterwards; Flux reconciles immediately and puts back whatever Git declares, so commit any fix you want to keep first.',
    tags: ['Flux', 'Operations']
  },
  {
    id: 'cncf-kcna-fc-421',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'Separate config repository vs manifests in the app repository: what does each GitOps layout trade off?',
    hint: 'Coupling of code commits and deploys.',
    back: '<strong>Manifests beside the code</strong> keeps one pull request for a feature and its deployment change, but every code commit wakes the GitOps agent and access control is shared. A <strong>separate config repository</strong> gives a clean deploy audit log, different permissions for who may change production, and avoids CI loops when pipelines commit new image tags. Many teams use one config repo per team or platform.',
    tags: ['GitOps', 'Repository layout']
  },
  {
    id: 'cncf-kcna-fc-422',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What is OpenFeature?',
    hint: 'A standard API, not a flag service.',
    back: 'A <strong>CNCF project</strong> that defines a vendor-neutral API and SDKs for evaluating <strong>feature flags</strong>. Application code calls the OpenFeature SDK, and a pluggable <strong>provider</strong> connects it to a flag backend such as flagd or a commercial service, so switching vendors does not mean rewriting flag checks throughout the code.',
    tags: ['OpenFeature', 'Feature flags']
  },
  {
    id: 'cncf-kcna-fc-423',
    difficulty: 'medium',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What are Tekton\'s core building blocks?',
    hint: 'Definitions and their runs.',
    back: 'A <strong>Step</strong> is a container that runs one command. A <strong>Task</strong> is an ordered list of steps that runs in a single pod. A <strong>Pipeline</strong> wires Tasks together with ordering, parameters and shared workspaces. <strong>TaskRun</strong> and <strong>PipelineRun</strong> are the executions. <strong>Tekton Triggers</strong> start runs from events such as a Git push webhook.',
    tags: ['Tekton', 'CI']
  },
  {
    id: 'cncf-kcna-fc-424',
    difficulty: 'hard',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'How can a CI pipeline that commits image tags to Git avoid triggering itself in a loop?',
    hint: 'Separate what changes code from what changes config.',
    back: 'Common fixes: commit tag bumps to a <strong>separate config repository</strong>; restrict CI triggers with <strong>path filters</strong> so manifest-only changes do not rebuild; use a dedicated bot identity whose commits the pipeline ignores; or let the <strong>GitOps tool\'s image automation</strong> (Flux image automation, Argo CD Image Updater) write the tag instead of CI. The goal is that deploying never restarts the build.',
    tags: ['CI', 'GitOps']
  },
  {
    id: 'cncf-kcna-fc-425',
    difficulty: 'easy',
    certId: 'cncf-kcna',
    domainId: 'd3',
    front: 'What does "shift left" mean in a delivery pipeline?',
    hint: 'Left is earlier on the timeline.',
    back: 'Moving testing, security and compliance checks <strong>earlier</strong> in the lifecycle: linting manifests, unit tests, image scanning and policy checks run in the developer\'s pull request or CI job instead of after deployment. Problems found early are cheaper and faster to fix, and fewer defects reach shared or production environments.',
    tags: ['Shift left', 'CI']
  }
];

export default CNCF_KCNA_FLASHCARDS_17;
