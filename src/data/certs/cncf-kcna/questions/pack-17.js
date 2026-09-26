export const CNCF_KCNA_QUESTIONS_17 = [
  {
    id: "cncf-kcna-401",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Which practice is not GitOps",
    scenario: "A consultancy is assessing whether a client's delivery process follows the OpenGitOps principles. The client keeps manifests in Git, runs an in-cluster agent that pulls from the repository, and the agent corrects drift on a schedule. The auditors list four practices they observed.",
    question: "Which observed practice conflicts with the OpenGitOps principles?",
    options: [
      { id: 'A', text: "Hotfixes are applied with kubectl edit in production and written back to Git the next week" },
      { id: 'B', text: "Software agents continuously compare the live cluster to Git and reconcile any difference" },
      { id: 'C', text: "Every change to the desired state is a commit, giving a versioned and immutable history" },
      { id: 'D', text: "Desired state is described declaratively in YAML manifests rather than as scripts of steps" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OpenGitOps defines four principles: desired state is declarative, it is versioned and immutable, it is pulled automatically by agents, and it is continuously reconciled. Editing production directly makes the live state diverge from the versioned source of truth, and a reconciling agent would either revert the fix or be disabled to keep it. Declarative manifests, commit history and continuous reconciliation are each principles in their own right, so those practices comply.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps", "OpenGitOps", "Principles"]
  },
  {
    id: "cncf-kcna-402",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Keeping cluster credentials out of CI",
    scenario: "A fintech's security team objects that its hosted CI service stores an admin kubeconfig for every production cluster so pipelines can run kubectl apply. They want deployments to keep working without any external system holding credentials that can write to the clusters.",
    question: "Which delivery model addresses the concern?",
    options: [
      { id: 'A', text: "Give the CI service a ServiceAccount token with edit rights instead of the admin kubeconfig file" },
      { id: 'B', text: "Rotate the admin kubeconfig in the CI service every week and restrict which branches can use it" },
      { id: 'C', text: "Expose the API server through a public load balancer so CI can reach it directly without any VPN tunnel" },
      { id: 'D', text: "Run a pull-based GitOps agent inside each cluster that fetches manifests from Git and applies them" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In the pull model an agent such as Argo CD or Flux runs inside the cluster with its own in-cluster permissions and only needs read access to Git, so no outside system holds write credentials to the cluster. Rotating the kubeconfig and narrowing branches reduces exposure but the CI service still holds cluster-admin rights. A ServiceAccount token with edit rights is still a write credential stored externally. Publicly exposing the API server widens the attack surface and does nothing about stored credentials.",
    referenceUrl: "https://opengitops.dev/",
    tags: ["GitOps", "Pull model", "Security"]
  },
  {
    id: "cncf-kcna-403",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Manual edits keep surviving",
    scenario: "A team uses Argo CD with automated sync for its storefront Application. An engineer scaled the Deployment with kubectl during an incident, and a week later it still runs the edited replica count even though Git says otherwise. The Application shows OutOfSync but no sync has happened because Git has not changed.",
    question: "Which Application setting makes Argo CD revert such drift on its own?",
    options: [
      { id: 'A', text: "syncPolicy.automated.prune: true, so live resources that differ are pruned and recreated" },
      { id: 'B', text: "syncOptions: Replace=true, so each sync overwrites objects with kubectl replace" },
      { id: 'C', text: "syncPolicy.automated.selfHeal: true, so a sync is triggered when live state drifts from Git" },
      { id: 'D', text: "syncOptions: CreateNamespace=true, so the Application recreates its namespace and objects" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With automated sync alone, Argo CD syncs when the Git revision changes; selfHeal additionally triggers a sync when the live cluster drifts from the desired state, undoing manual edits such as the kubectl scale. Prune deletes resources that were removed from Git, not objects whose fields changed. CreateNamespace only creates the destination namespace if it is missing. Replace changes how a sync writes objects but does not cause a sync to happen when Git is unchanged.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/",
    tags: ["Argo CD", "Self-heal", "Drift"]
  },
  {
    id: "cncf-kcna-404",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Deleted from Git, still in the cluster",
    scenario: "A team removed an obsolete CronJob manifest from its Git repository. Argo CD synced the Application successfully, yet the CronJob is still running in the cluster and the UI flags it as requiring pruning. The team wants resources deleted from Git to disappear from the cluster automatically.",
    question: "What should the team enable?",
    options: [
      { id: 'A', text: "Automated sync with selfHeal enabled, so the leftover CronJob drift is detected and deleted" },
      { id: 'B', text: "The ServerSideApply=true sync option, so field ownership removes objects nobody owns" },
      { id: 'C', text: "Automated sync with prune enabled, so resources no longer in Git are removed during sync" },
      { id: 'D', text: "A PostSync hook Job that runs kubectl delete cronjob for each removed manifest name" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Argo CD does not delete live resources that disappear from Git unless pruning is allowed; with automated sync, prune: true makes each sync remove those resources. selfHeal reacts to changes in objects Argo CD still manages, and a resource absent from Git has no desired state to heal to. A PostSync hook that deletes by name duplicates what prune does and must be maintained by hand. Server-side apply manages field ownership on existing objects and never deletes objects.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/#automatic-pruning",
    tags: ["Argo CD", "Prune", "GitOps"]
  },
  {
    id: "cncf-kcna-405",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Broken builds found days later",
    scenario: "Developers at an e-commerce company work on long-lived branches and combine them weekly, and broken builds and failing tests are usually discovered days after the code was written. Leadership wants problems from combining work caught within minutes of each change.",
    question: "Which practice addresses this?",
    options: [
      { id: 'A', text: "Continuous integration: merge small changes often and auto-build and test every commit" },
      { id: 'B', text: "Blue-green deployment: keep two production environments and switch traffic between them" },
      { id: 'C', text: "Infrastructure as code: describe clusters and networks in version-controlled template files" },
      { id: 'D', text: "Continuous deployment: release each merged change to production without a manual approval step" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Continuous integration means developers integrate small changes into the shared branch frequently and every commit triggers an automated build and test run, so integration problems surface within minutes. Continuous deployment automates releasing to production and assumes CI is already in place. Blue-green is a release technique and does not find integration errors earlier. Infrastructure as code manages environments reproducibly but does not test application changes.",
    referenceUrl: "https://glossary.cncf.io/continuous-integration/",
    tags: ["CI", "Continuous integration", "Testing"]
  },
  {
    id: "cncf-kcna-406",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Automated up to a human sign-off",
    scenario: "A healthcare company's pipeline builds, tests and deploys every merged commit to staging automatically. Regulations require a named person to approve each production release, after which the same automation deploys it.",
    question: "What best describes this process?",
    options: [
      { id: 'A', text: "Continuous delivery, since every change is kept releasable and production needs an approval" },
      { id: 'B', text: "Continuous integration only, because production releases are still gated by a person" },
      { id: 'C', text: "A GitOps pull model, since production changes are applied by an agent inside the cluster" },
      { id: 'D', text: "Continuous deployment, because the same automation performs every production release" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Continuous delivery keeps every change in a deployable state through automated build, test and staging deployment, with the final push to production triggered by a manual decision. Continuous deployment removes that decision and releases every passing change automatically, which the regulation forbids here. Calling it continuous integration only understates a pipeline that also deploys to staging. Nothing in the scenario says an in-cluster agent pulls changes, so the process cannot be labelled as a GitOps pull model.",
    referenceUrl: "https://glossary.cncf.io/continuous-delivery/",
    tags: ["Continuous delivery", "CD", "Approvals"]
  },
  {
    id: "cncf-kcna-407",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Telling Flux where the manifests live",
    scenario: "A team bootstrapping Flux wants it to watch the main branch of https://git.example.com/platform/apps every minute and then apply the ./prod directory with Kustomize. They are writing the two custom resources needed for this.",
    question: "Which pair of Flux resources does the team need?",
    options: [
      { id: 'A', text: "An Application pointing at the repository branch and path, plus an AppProject that allows it" },
      { id: 'B', text: "A HelmRepository for the Git URL, plus a HelmRelease that installs the ./prod directory" },
      { id: 'C', text: "A GitRepository for the repository and branch, plus a Kustomization for the ./prod path" },
      { id: 'D', text: "An ImageRepository for the Git URL, plus an ImagePolicy selecting the ./prod directory" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Flux the source-controller fetches a GitRepository at the chosen branch and interval and exposes it as an artifact, and the kustomize-controller applies a Kustomization that references that source and a path such as ./prod. Application and AppProject are Argo CD resources. HelmRepository and HelmRelease serve Helm charts, not a plain directory of manifests. ImageRepository and ImagePolicy scan container registries for new image tags as part of image automation.",
    referenceUrl: "https://fluxcd.io/flux/components/source/gitrepositories/",
    tags: ["Flux", "GitRepository", "Kustomization"]
  },
  {
    id: "cncf-kcna-408",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "New image tags reach Git automatically",
    scenario: "A team runs Flux and wants each new semver-tagged image pushed to its registry to be deployed to the dev cluster without anyone editing YAML. It also wants every such change to appear as a commit in Git, so the repository stays the source of truth.",
    question: "Which approach fits?",
    options: [
      { id: 'A', text: "Let the CI job run kubectl set image against the dev cluster after it pushes each new image" },
      { id: 'B', text: "Set imagePullPolicy: Always and commit a CronJob that restarts the dev Deployments every ten minutes" },
      { id: 'C', text: "Enable the Argo CD Image Updater on the cluster so Flux reconciles the newest registry tag" },
      { id: 'D', text: "Use Flux image automation to scan the registry, pick the tag by policy, and commit it to Git" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Flux image automation uses the image-reflector controller (ImageRepository and ImagePolicy) to find the newest tag that matches a policy, and the image-automation controller (ImageUpdateAutomation) to write it into the manifests and push a commit, after which normal reconciliation deploys it. Restarting pods with a mutable tag deploys unknown code and records nothing in Git. kubectl set image from CI changes the cluster directly and creates drift from Git. Argo CD Image Updater is a separate Argo CD tool and does not drive Flux reconciliation.",
    referenceUrl: "https://fluxcd.io/flux/guides/image-update/",
    tags: ["Flux", "Image automation", "GitOps"]
  },
  {
    id: "cncf-kcna-409",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Describing an app to Argo CD",
    scenario: "A developer new to Argo CD must register a service so that manifests from the repo's services/billing path are deployed to the billing namespace of the production cluster. She asks which Argo CD object captures that source and destination.",
    question: "Which resource should she create?",
    options: [
      { id: 'A', text: "A Deployment in the billing namespace annotated with the repository URL so Argo CD discovers it" },
      { id: 'B', text: "A Flux Kustomization with the services/billing path and destination, which Argo CD then syncs" },
      { id: 'C', text: "An Argo CD AppProject listing the repo path, which deploys every manifest found under it" },
      { id: 'D', text: "An Argo CD Application naming the repo URL, path and revision plus the target cluster and namespace" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An Argo CD Application is the custom resource that ties a source (repository, path, revision) to a destination (cluster and namespace) and carries the sync policy. Argo CD does not discover apps from annotations on Deployments. A Flux Kustomization is reconciled by Flux's kustomize-controller, not by Argo CD. An AppProject groups Applications and restricts which sources and destinations they may use, but it deploys nothing by itself.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/core_concepts/",
    tags: ["Argo CD", "Application", "GitOps"]
  },
  {
    id: "cncf-kcna-410",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Promoting between dev, staging and prod",
    scenario: "A team keeps one Git branch per environment for its GitOps repository and constantly fights merge conflicts and cherry-picks, and nobody can tell exactly what differs between staging and prod. The team wants promotions to be small reviewable changes and environment differences to be obvious.",
    question: "Which repository layout best meets these goals?",
    options: [
      { id: 'A', text: "One repository per environment, synchronised nightly with a script that copies the files" },
      { id: 'B', text: "One branch per environment, but rebase the prod branch onto staging before each new release" },
      { id: 'C', text: "One main branch with a shared base and a folder per environment, promoted by pull request" },
      { id: 'D', text: "One main branch where every environment reads the same files and CI edits them at deploy" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Keeping environments as folders or overlays on a single branch makes each environment's configuration visible side by side, and a promotion becomes a small pull request that changes, for example, the image tag in the prod overlay. Rebasing environment branches still leaves differences hidden in branch history and keeps the merge pain. Per-environment repositories with nightly copying make promotion implicit and unreviewed. Sharing identical files and having CI edit them at deploy time moves the real desired state out of Git.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/",
    tags: ["GitOps", "Promotion", "Repository layout"]
  },
  {
    id: "cncf-kcna-411",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Secrets in a public-facing repo",
    scenario: "A company adopting GitOps wants the database password for its app delivered through the same repository as the rest of the manifests. The repository is visible to every engineer, so the committed file must be useless to anyone reading it, while the cluster can still turn it into a normal Secret.",
    question: "Which approach meets the requirement?",
    options: [
      { id: 'A', text: "Commit the password to a ConfigMap and mount it into the pod as a read-only file" },
      { id: 'B', text: "Commit a SealedSecret encrypted with the sealing controller's public key for the cluster" },
      { id: 'C', text: "Commit the Secret manifest in a branch that only the platform team has access to" },
      { id: 'D', text: "Commit the Secret manifest with the password base64-encoded in the data field" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Sealed Secrets encrypts the value with a public key whose private key only the in-cluster controller holds, so the committed SealedSecret is safe to share and the controller decrypts it into an ordinary Secret; SOPS and the External Secrets Operator are other common options. Base64 is an encoding that anyone can reverse, not encryption. A ConfigMap is meant for non-confidential data and still stores the value in clear text. Branch permissions do not help when everyone can read the repository.",
    referenceUrl: "https://kubernetes.io/docs/concepts/configuration/secret/",
    tags: ["Secrets", "GitOps", "Sealed Secrets"]
  },
  {
    id: "cncf-kcna-412",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Canary that promotes itself",
    scenario: "A streaming company wants each release to shift traffic to the new version in steps, check error rate and latency from Prometheus at every step, and roll back automatically if the metrics degrade. Today engineers do this by hand with replica counts.",
    question: "Which kind of tool automates this?",
    options: [
      { id: 'A', text: "A progressive delivery controller such as Argo Rollouts or Flagger" },
      { id: 'B', text: "A cluster autoscaler that adds nodes when a new version starts up" },
      { id: 'C', text: "A HorizontalPodAutoscaler targeting the error-rate metric in Prometheus" },
      { id: 'D', text: "A PodDisruptionBudget that limits how many pods of each version stop" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Progressive delivery controllers such as Argo Rollouts and Flagger run canary or blue-green releases in steps, query metrics providers like Prometheus to analyse each step, and promote or abort automatically. An HPA changes replica counts to meet a load target; it does not split traffic between versions or roll back. The cluster autoscaler adds or removes nodes for pending pods. A PodDisruptionBudget limits voluntary evictions and has no concept of versions or metrics.",
    referenceUrl: "https://argoproj.github.io/argo-rollouts/",
    tags: ["Progressive delivery", "Canary", "Argo Rollouts"]
  },
  {
    id: "cncf-kcna-413",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "What aborts an automated canary",
    scenario: "A team configured Flagger for its checkout service with a success-rate threshold of 99% and a maximum of five failed checks. During the third traffic step, the new version's success rate drops to 94% for several consecutive analysis intervals.",
    question: "What will Flagger do once the failed checks reach the limit?",
    options: [
      { id: 'A', text: "Skip ahead and promote the canary, because three steps had already been completed" },
      { id: 'B', text: "Pause at the current traffic weight and wait for an engineer to approve the next step" },
      { id: 'C', text: "Roll back by routing all traffic to the primary and scaling the canary to zero" },
      { id: 'D', text: "Delete the Deployment and recreate it from the manifest stored in the Git repository" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "When the number of failed metric checks reaches the configured threshold, Flagger aborts the canary: traffic is routed back to the primary, the canary is scaled to zero, and the rollout is marked failed. Pausing for approval only happens when manual gating webhooks are configured, and a failing analysis aborts rather than waits. Completed steps never override failing metrics. Flagger does not delete Deployments or read Git; restoring desired state is the GitOps tool's job.",
    referenceUrl: "https://docs.flagger.app/usage/deployment-strategies",
    tags: ["Flagger", "Canary", "Rollback"]
  },
  {
    id: "cncf-kcna-414",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Pipelines defined as cluster resources",
    scenario: "A platform team wants its build-and-test pipelines to run as pods on its Kubernetes clusters, with each step and pipeline declared as Kubernetes custom resources stored alongside the application code.",
    question: "Which tool is designed for this?",
    options: [
      { id: 'A', text: "Kustomize, with each pipeline step as a custom overlay" },
      { id: 'B', text: "Helm, with pipelines defined as chart hook Jobs" },
      { id: 'C', text: "Prometheus, with each build step run as a recording rule" },
      { id: 'D', text: "Tekton, with Tasks and Pipelines as custom resources" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Tekton is a Kubernetes-native CI/CD framework: Task, Pipeline, TaskRun and PipelineRun are custom resources, and each step runs as a container in a pod on the cluster. Helm hooks run Jobs around a chart's install or upgrade and are not a pipeline engine. Kustomize overlays customise manifests and execute nothing. Prometheus recording rules precompute metric expressions and have nothing to do with builds.",
    referenceUrl: "https://tekton.dev/docs/concepts/overview/",
    tags: ["Tekton", "CI", "Pipelines"]
  },
  {
    id: "cncf-kcna-415",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Ordering resources in one sync",
    scenario: "An Argo CD Application contains a CustomResourceDefinition, a namespace, and several custom resources that depend on both. Syncs sometimes fail because Argo CD tries to create the custom resources before their CRD is established. The team wants a guaranteed order within a single sync.",
    question: "How should the team enforce the order?",
    options: [
      { id: 'A', text: "Put each group into its own Git branch and point three Applications at them" },
      { id: 'B', text: "Set a readiness probe on the CRD so Argo CD waits for it before other objects" },
      { id: 'C', text: "Name the manifest files with numeric prefixes so Argo CD applies them alphabetically" },
      { id: 'D', text: "Annotate resources with argocd.argoproj.io/sync-wave values, lowest wave first" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Argo CD applies resources wave by wave based on the argocd.argoproj.io/sync-wave annotation, waiting for each wave to be healthy before the next, so giving the CRD and namespace a lower wave than the custom resources guarantees the order. File names do not control apply order. Splitting into branches and Applications removes any ordering between them. A CRD is not a pod and has no readiness probe.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/",
    tags: ["Argo CD", "Sync waves", "Ordering"]
  },
  {
    id: "cncf-kcna-416",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "One app template for forty clusters",
    scenario: "A retailer registers each store region's cluster with Argo CD, and there are now 40 of them, with more added monthly. The same monitoring stack must be deployed to every registered cluster, and a newly registered cluster should receive it with no one writing another Application manifest.",
    question: "Which Argo CD feature fits best?",
    options: [
      { id: 'A', text: "A single Application whose destination server is set to the wildcard value for all clusters" },
      { id: 'B', text: "An ApplicationSet using the cluster generator to template one Application per cluster" },
      { id: 'C', text: "A parent Application with forty child Application manifests committed to one directory" },
      { id: 'D', text: "An AppProject whose destinations list every cluster, deploying the stack to each of them" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An ApplicationSet generates Applications from a template, and its cluster generator produces one per cluster registered in Argo CD, so a new cluster automatically gets its own Application. An AppProject restricts where Applications may deploy but creates nothing. An Application has exactly one destination; a wildcard is allowed in AppProject destination rules, not as an Application's target. An app-of-apps parent works, but someone must still commit a new child manifest for every new cluster.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/Generators-Cluster/",
    tags: ["Argo CD", "ApplicationSet", "Multi-cluster"]
  },
  {
    id: "cncf-kcna-417",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Tested image, different production image",
    scenario: "A team's pipeline rebuilds the container image from source separately for staging and for production. A production incident was traced to a base-image update pulled in during the production build, even though staging tests had passed. The team wants production to run exactly what was tested.",
    question: "What should the pipeline do?",
    options: [
      { id: 'A', text: "Build the image once, then promote that same image digest from staging to production" },
      { id: 'B', text: "Tag the production build latest and use imagePullPolicy: Always on the production nodes" },
      { id: 'C', text: "Rebuild for production with the --no-cache flag so every layer is fetched fresh from source" },
      { id: 'D', text: "Run the full staging test suite again after the production image build before tagging it" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Building once and promoting the identical artifact, referenced by digest, guarantees that the bits running in production are the ones that passed staging. Disabling the build cache makes rebuilds even more likely to pick up new upstream layers. A mutable latest tag with Always pulling makes production run whatever was pushed most recently. Retesting the new build helps, but production would still run a different artifact from the one staging validated.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/",
    tags: ["CI/CD", "Artifacts", "Promotion"]
  },
  {
    id: "cncf-kcna-418",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Catching known CVEs before deploy",
    scenario: "A bank found that several images running in production contain operating-system packages with published critical vulnerabilities. It wants such images stopped before they are ever pushed to the registry, as part of the existing build pipeline.",
    question: "What should be added to the pipeline?",
    options: [
      { id: 'A', text: "A readiness probe in each container that reports failure when a vulnerable package is present" },
      { id: 'B', text: "An image vulnerability scan, for example with Trivy, that fails the build on critical findings" },
      { id: 'C', text: "A NetworkPolicy in production that blocks egress traffic from pods whose images carry critical CVEs" },
      { id: 'D', text: "A liveness probe added at build time that restarts containers daily for patched packages" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Scanning each image in CI with a scanner such as Trivy and failing the build on critical CVEs shifts the check left, so vulnerable images never reach the registry. A NetworkPolicy limits what running pods can reach, but the vulnerable image is still deployed. Probes report health, not package inventory, and restarting a container reruns the same image with the same packages.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/security-checklist/#images",
    tags: ["CI", "Image scanning", "Shift left"]
  },
  {
    id: "cncf-kcna-419",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Undoing a bad change the GitOps way",
    scenario: "A Flux-managed cluster picked up a commit that changed a Deployment's memory limit, and the new limit is causing OOM kills. The on-call engineer wants to restore the previous limit in a way that the reconciler will not immediately undo and that leaves an audit trail.",
    question: "What should the engineer do?",
    options: [
      { id: 'A', text: "Push a git revert of the offending commit and let Flux reconcile the restored manifest" },
      { id: 'B', text: "Suspend the Flux Kustomization permanently, then fix the live Deployment with kubectl" },
      { id: 'C', text: "Run kubectl rollout undo on the Deployment so it returns to the revision before the commit" },
      { id: 'D', text: "Edit the Deployment with kubectl edit and restore the old limit directly in the live object" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In GitOps, Git is the source of truth, so a git revert restores the previous desired state with a reviewable commit, and Flux applies it on the next reconciliation. rollout undo and kubectl edit change only the live object; Flux sees drift from Git and reapplies the faulty limit. Suspending reconciliation permanently abandons GitOps for that app and leaves Git describing a state that is not running.",
    referenceUrl: "https://fluxcd.io/flux/concepts/",
    tags: ["GitOps", "Rollback", "Flux"]
  },
  {
    id: "cncf-kcna-420",
    difficulty: "easy",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Reading the Argo CD status badges",
    scenario: "The Argo CD dashboard shows the inventory Application as Synced but Degraded. A junior engineer thinks this means Git and the cluster disagree and wants to press Sync to fix it.",
    question: "What does this combination actually indicate?",
    options: [
      { id: 'A', text: "Live resources differ from Git, but the pods are all running and passing their probes" },
      { id: 'B', text: "Argo CD lost its connection to the repository and is showing the last known state of the app" },
      { id: 'C', text: "A sync is in progress and the resources will become healthy once the current operation ends" },
      { id: 'D', text: "Live resources match Git, but at least one of them is unhealthy, such as a failing Deployment" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Argo CD reports two independent statuses: sync status compares live state with Git, and health status assesses whether resources are working. Synced plus Degraded means the cluster matches Git but something, for example a Deployment whose pods fail, is unhealthy, so syncing again changes nothing and the manifests or app need fixing. Differences from Git would show OutOfSync. A repository connection failure shows as a comparison error, and an in-progress operation shows as Progressing or a running sync.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/operator-manual/health/",
    tags: ["Argo CD", "Health", "Sync status"]
  },
  {
    id: "cncf-kcna-421",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Faster reaction to pushes in Flux",
    scenario: "A team's Flux GitRepository polls every ten minutes, and developers complain that merged changes take up to ten minutes to start deploying. Polling every few seconds across hundreds of repositories would overload the Git server. They want changes picked up within seconds of a push.",
    question: "What should the team configure?",
    options: [
      { id: 'A', text: "A Flux Receiver that the Git server calls by webhook to trigger reconciliation on push" },
      { id: 'B', text: "Lower the GitRepository interval to 5s and raise the source-controller's replica count" },
      { id: 'C', text: "Argo CD alongside Flux, since Argo CD reacts to each Git push faster than Flux polls the server" },
      { id: 'D', text: "A Kubernetes CronJob that runs flux reconcile source git every thirty seconds all day" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The notification-controller's Receiver exposes a webhook endpoint; when the Git server calls it on push, Flux immediately reconciles the referenced source, so changes deploy in seconds while the regular interval stays long. A 5-second interval across hundreds of repositories is exactly the Git server load the team wants to avoid, and extra replicas do not reduce requests. A CronJob running flux reconcile is just faster polling. Running two GitOps tools on the same resources makes them fight over ownership.",
    referenceUrl: "https://fluxcd.io/flux/components/notification/receivers/",
    tags: ["Flux", "Webhooks", "Reconciliation"]
  },
  {
    id: "cncf-kcna-422",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Shipping code that is switched off",
    scenario: "A product team wants to deploy a half-finished checkout redesign to production with every release, but only turn it on for internal staff, and later for customers, without redeploying. They want a vendor-neutral API for this in their services.",
    question: "Which approach fits?",
    options: [
      { id: 'A', text: "Deploy the redesign to a separate namespace and give staff its own ingress hostname" },
      { id: 'B', text: "Keep the redesign on a long-lived Git branch and merge it once all of the work is complete" },
      { id: 'C', text: "Wrap the redesign in feature flags evaluated through the OpenFeature SDK and a provider" },
      { id: 'D', text: "Run the redesign as a canary Deployment that receives five percent of customer traffic" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Feature flags decouple deployment from release: the code ships dark and is enabled per audience at runtime, and OpenFeature is the CNCF project that provides a vendor-neutral flag evaluation API with pluggable providers. A canary splits traffic by random share, not by audience such as staff. A long-lived branch keeps the code out of production and brings back merge pain. A separate namespace and hostname creates a second deployment to maintain rather than toggling a feature in the real one.",
    referenceUrl: "https://openfeature.dev/docs/reference/intro",
    tags: ["Feature flags", "OpenFeature", "Release"]
  },
  {
    id: "cncf-kcna-423",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Helm charts under Flux control",
    scenario: "A team already uses Flux for plain manifests and now wants to deploy the community ingress-nginx Helm chart the same way: pinned to a version range, with values kept in Git, and upgraded by Flux when the pinned range allows.",
    question: "Which Flux resources should the team add?",
    options: [
      { id: 'A', text: "A HelmRepository for the chart source and a HelmRelease setting chart, version and values" },
      { id: 'B', text: "A CronJob running helm upgrade nightly with the values file mounted from a ConfigMap in Git" },
      { id: 'C', text: "An Argo CD Application of type Helm, which Flux then detects and reconciles alongside the rest" },
      { id: 'D', text: "A GitRepository for the chart source and an ImagePolicy that sets the chart version and values" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Flux's helm-controller reconciles a HelmRelease, which names a chart from a source such as a HelmRepository, a version or semver range, and inline or referenced values, and performs installs, upgrades and rollbacks declaratively. An ImagePolicy selects container image tags, not Helm charts. A CronJob running helm upgrade is an imperative workaround outside Flux. Flux does not reconcile Argo CD Applications.",
    referenceUrl: "https://fluxcd.io/flux/components/helm/helmreleases/",
    tags: ["Flux", "HelmRelease", "Helm"]
  },
  {
    id: "cncf-kcna-424",
    difficulty: "medium",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Fencing teams inside one Argo CD",
    scenario: "Several teams share one Argo CD instance. The payments team must only deploy from its own repository and only into namespaces prefixed payments-, and must not be able to create cluster-scoped resources such as ClusterRoles.",
    question: "Which Argo CD construct enforces these limits?",
    options: [
      { id: 'A', text: "A Kubernetes NetworkPolicy that stops Argo CD from reaching other teams' repositories" },
      { id: 'B', text: "An AppProject restricting source repos, destinations and cluster resource kinds" },
      { id: 'C', text: "A sync window on the payments Applications that blocks cluster-scoped changes" },
      { id: 'D', text: "An ApplicationSet with a Git generator that only lists the payments repository" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An AppProject defines allowed sourceRepos, allowed destinations (cluster and namespace patterns such as payments-*), and cluster-scoped resource allow and deny lists, and every Application in the project is held to them. An ApplicationSet generates Applications but does not stop the team creating others that break the rules. Sync windows control when syncs may run, not what they contain. A NetworkPolicy works at the network layer and knows nothing about repositories or resource kinds.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/projects/",
    tags: ["Argo CD", "AppProject", "Multi-tenancy"]
  },
  {
    id: "cncf-kcna-425",
    difficulty: "hard",
    certId: "cncf-kcna",
    domainId: "d3",
    domainName: "Cloud Native Application Delivery",
    title: "Autoscaler and GitOps disagree",
    scenario: "A Deployment managed by Argo CD with selfHeal enabled declares replicas: 3 in Git, and a HorizontalPodAutoscaler scales it between 3 and 15. During traffic peaks the HPA scales up, Argo CD reports OutOfSync, and self-heal pushes the count back to 3.",
    question: "What is the recommended fix?",
    options: [
      { id: 'A', text: "Remove replicas from the Deployment manifest, or ignore that field, and let the HPA manage it" },
      { id: 'B', text: "Replace the HPA with a CronJob that edits replicas in Git before each expected traffic peak" },
      { id: 'C', text: "Disable selfHeal for the Application so that the HPA can change the Deployment's replicas freely" },
      { id: 'D', text: "Raise replicas in Git to 15 so that the declared count always covers the HPA's maximum range" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "When an HPA controls a Deployment, the replica count should not be declared in Git: omitting spec.replicas (or adding an ignoreDifferences entry for /spec/replicas) leaves that field to the HPA, so Argo CD no longer flags or reverts it. Disabling selfHeal stops the fight but also stops Argo CD correcting real drift elsewhere. Declaring 15 replicas wastes capacity and still conflicts when the HPA scales down. Editing Git on a schedule replaces reactive autoscaling with guesses.",
    referenceUrl: "https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/",
    tags: ["Argo CD", "HPA", "Drift"]
  }
];

export default CNCF_KCNA_QUESTIONS_17;
