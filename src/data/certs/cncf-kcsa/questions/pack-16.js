export const CNCF_KCSA_QUESTIONS_16 = [
  {
    id: "cncf-kcsa-376",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Answering an xz-utils style disclosure within hours",
    scenario: "A retailer runs about 900 container images across four clusters. When a backdoored compression library was disclosed last spring, the security team spent three days pulling and unpacking images to find out which ones shipped the affected version. Leadership wants the next such question answered in minutes.",
    question: "Which practice should the platform team adopt in its build pipeline?",
    options: [
      { id: 'A', text: "Sign every image with cosign at the end of the build and verify the signature at admission before any pod is created." },
      { id: 'B', text: "Generate a software bill of materials for each image at build time and store it alongside the image in the registry." },
      { id: 'C', text: "Deploy Falco with its default rule set so that suspicious process activity from any library is detected at runtime." },
      { id: 'D', text: "Enforce the restricted Pod Security Standard on all namespaces so that compromised libraries cannot escalate privileges." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An SBOM (in SPDX or CycloneDX format) is a machine-readable inventory of every package and version inside an image, so answering 'which images contain library X at version Y' becomes a query over stored documents instead of a forensic exercise. Signing proves who built an image and that it was not altered, but says nothing about which components are inside. The restricted Pod Security Standard hardens how pods run and cannot tell you what they contain. Falco watches runtime behaviour; a dormant vulnerable library produces no alerts, and runtime detection is not an inventory.",
    referenceUrl: "https://www.cisa.gov/sbom",
    tags: ["SBOM", "Supply chain", "Vulnerability response"]
  },
  {
    id: "cncf-kcsa-377",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Signing images without a long-lived private key",
    scenario: "A fintech builds its images in GitHub Actions. Auditors flagged that a signing key stored as a repository secret had been readable by departed contractors for two years. The team wants signatures that cannot be produced from a leaked key, and verifiers must be able to confirm that a specific workflow in a specific repository produced each signature.",
    question: "Which signing approach satisfies both requirements?",
    options: [
      { id: 'A', text: "Pin every image in the manifests by its SHA-256 digest so that any change to the image contents is detected at pull time." },
      { id: 'B', text: "Store a cosign signing key pair in a Secret that only the build workflow can read, and rotate the pair every twelve months." },
      { id: 'C', text: "Enable Docker Content Trust so that Notary v1 signs each tag with repository keys that are delegated to the CI system." },
      { id: 'D', text: "Keyless cosign signing, where Fulcio issues a short-lived certificate bound to the workflow's OIDC identity and Rekor logs the event." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Sigstore keyless signing has cosign exchange the workflow's OIDC token for a certificate from Fulcio that is valid for minutes and embeds the workflow identity (repository, workflow path, ref); the signature is recorded in the Rekor transparency log, so there is no long-lived key to leak and verifiers can require a certificate identity and issuer. A key pair in a Secret is still a long-lived key, and yearly rotation leaves a large exposure window. Docker Content Trust with Notary v1 also relies on long-lived root and repository keys and does not bind the signature to a workflow identity. Digest pinning guarantees integrity of what you pull but proves nothing about who produced it.",
    referenceUrl: "https://docs.sigstore.dev/cosign/signing/overview/",
    tags: ["Sigstore", "cosign", "Keyless signing"]
  },
  {
    id: "cncf-kcsa-378",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Provenance a developer laptop cannot forge",
    scenario: "A medical-device software vendor already publishes provenance files describing how each container image was built, but the files are produced by a script that any engineer can run locally. A customer's auditor now requires that provenance be generated and signed by a hosted build service so that an individual developer cannot fabricate it.",
    question: "What is the lowest SLSA Build track level that meets the auditor's requirement?",
    options: [
      { id: 'A', text: "SLSA Build Level 2" },
      { id: 'B', text: "SLSA Build Level 0" },
      { id: 'C', text: "SLSA Build Level 1" },
      { id: 'D', text: "SLSA Build Level 3" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In SLSA v1.0, Build Level 2 requires that builds run on a hosted build platform and that the platform itself generates and signs the provenance, which is exactly what stops a developer from fabricating it on a laptop. Build Level 1 only requires that provenance exists; it may be unsigned and produced anywhere, which describes the vendor's current state. Build Level 3 adds a hardened platform with isolated builds and signing material that user-defined steps cannot reach; it also satisfies the auditor but is not the lowest level that does. Build Level 0 means no SLSA guarantees at all.",
    referenceUrl: "https://slsa.dev/spec/v1.0/levels",
    tags: ["SLSA", "Provenance", "Build integrity"]
  },
  {
    id: "cncf-kcsa-379",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Verified at admission, different image at pull time",
    scenario: "A media company's admission policy verifies cosign signatures on images referenced by tag, such as vendor/encoder:5.2, from a public registry where the company cannot make tags immutable. A red team showed that after a pod was admitted, a new unsigned image pushed under the same tag was pulled when the pod was rescheduled onto a fresh node.",
    question: "Which change closes this gap?",
    options: [
      { id: 'A', text: "Set imagePullPolicy to IfNotPresent on every container so nodes reuse the image layers they already hold in their local cache." },
      { id: 'B', text: "Run a CronJob every hour that re-verifies the signatures of running images and deletes any pod whose image fails verification." },
      { id: 'C', text: "Have the admission policy rewrite each verified image reference to the digest it verified, so the kubelet pulls that exact image." },
      { id: 'D', text: "Enable the AlwaysPullImages admission plugin so that every pod start pulls the image again and runs the signature check on it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Verifying a tag is a time-of-check to time-of-use problem: the tag can move between admission and the kubelet's pull. Admission controllers such as Kyverno verifyImages (with digest mutation) and the Sigstore policy-controller resolve the tag, verify the signature on that digest and rewrite the pod spec to image@sha256:..., so every node pulls the bytes that were verified. IfNotPresent only helps nodes that already cached the old image; a fresh node still resolves the moved tag. An hourly CronJob detects the swap after the unsigned image has already run. AlwaysPullImages forces a registry pull on each start but performs no signature verification, so it makes pulling the moved tag more likely, not less.",
    referenceUrl: "https://kyverno.io/docs/policy-types/cluster-policy/verify-images/",
    tags: ["Image signing", "Digests", "Admission control", "Kyverno"]
  },
  {
    id: "cncf-kcsa-380",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "First deployment from a password-protected registry",
    scenario: "A logistics start-up moved its images from Docker Hub to a private registry that requires a username and token. New pods in the orders namespace now sit in ImagePullBackOff with an authentication error from the registry. The team wants the fix to stay inside Kubernetes objects rather than node configuration.",
    question: "How should the credentials be supplied?",
    options: [
      { id: 'A', text: "Copy a docker config.json with the token into the image at /root/.docker so the runtime finds it when the pod starts." },
      { id: 'B', text: "Create a kubernetes.io/dockerconfigjson Secret and reference it from imagePullSecrets on the pod or its ServiceAccount." },
      { id: 'C', text: "Pass the username and token to the container as environment variables sourced from a Secret in the orders namespace." },
      { id: 'D', text: "Store a registry config.json in a Kubernetes ConfigMap and list that ConfigMap under imagePullSecrets in the Deployment's pod template." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The kubelet pulls images before any container starts, and it looks for credentials in the Secrets named by the pod's imagePullSecrets, which must be of type kubernetes.io/dockerconfigjson (or the legacy dockercfg type); adding the Secret to the namespace's ServiceAccount makes the ServiceAccount admission plugin attach it to every pod automatically. Environment variables are only available to the process after the image has been pulled, so they cannot authenticate the pull. imagePullSecrets can only reference Secrets, not ConfigMaps, and a ConfigMap is the wrong place for a credential anyway. A config file baked into the image cannot help pull that same image, and it leaks the token to anyone who can pull.",
    referenceUrl: "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",
    tags: ["Private registry", "imagePullSecrets", "Secrets"]
  },
  {
    id: "cncf-kcsa-381",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Tenant reuses another tenant's cached private image",
    scenario: "A university runs one cluster for several research groups, and pods from different groups share nodes. Group A pulls a licensed analysis image from a private repository using its own pull secret. Group B, which has no access to that repository, discovered its pods start successfully with the same image name whenever they land on a node where Group A already ran.",
    question: "Which control stops Group B from using the cached image?",
    options: [
      { id: 'A', text: "Enforce the restricted Pod Security Standard on Group B's namespace so that its pods cannot reach the node's image store." },
      { id: 'B', text: "Enable the NodeRestriction admission plugin so that kubelets can only read objects bound to pods scheduled on their node." },
      { id: 'C', text: "Require Group B's pods to set imagePullPolicy to Never so that they may run only the images preloaded by administrators." },
      { id: 'D', text: "Enable the AlwaysPullImages admission plugin so every pod must pull with its own credentials rather than use the node cache." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "With IfNotPresent, the kubelet starts a container from a locally cached image without contacting the registry, so the registry never checks whether the new pod's credentials are allowed. AlwaysPullImages mutates every pod to imagePullPolicy Always, forcing a registry round trip where Group B's missing credentials cause the pull to fail. NodeRestriction limits what a kubelet may modify through the API; it has nothing to do with image caching. imagePullPolicy Never uses the cache exclusively, which is the opposite of what is needed. Pod Security Standards govern privileges and host access; the image cache is used by the kubelet and runtime, not reached by the pod.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#alwayspullimages",
    tags: ["AlwaysPullImages", "Multi-tenancy", "Image cache"]
  },
  {
    id: "cncf-kcsa-382",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Production running a build nobody tested",
    scenario: "An insurer's release process tests payments:1.4 in staging and then applies the same manifest to production. A post-incident review found that a developer had re-pushed payments:1.4 with an unreviewed hotfix between the staging test and the production rollout, so production ran different bytes from those that were tested.",
    question: "What change to the manifests guarantees that production runs the tested image?",
    options: [
      { id: 'A', text: "Switch the manifest to the latest tag and pin the chart version." },
      { id: 'B', text: "Add a registry scan that must pass before the tag can be pulled." },
      { id: 'C', text: "Reference the image by its sha256 digest instead of the tag." },
      { id: 'D', text: "Set imagePullPolicy to Always on the payments container spec." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A digest is the content hash of the image manifest, so payments@sha256:... always resolves to exactly the same bytes; promoting the digest that passed staging makes it impossible for a re-pushed tag to change what production runs. imagePullPolicy Always makes every start fetch whatever the tag currently points to, which guarantees the re-pushed image is used. The latest tag is even more mutable than a version tag, and pinning the chart version does not pin the image the chart references. A vulnerability scan may pass on the hotfix image too; scanning checks for known CVEs, not whether the image is the one that was tested.",
    referenceUrl: "https://kubernetes.io/docs/concepts/containers/images/#image-names",
    tags: ["Image digests", "Image tags", "Release integrity"]
  },
  {
    id: "cncf-kcsa-383",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Registry tokens that expire every twelve hours",
    scenario: "A bank's clusters pull from a cloud registry whose access tokens expire after twelve hours. Today a script writes fresh pull secrets into 140 namespaces, and failures leave pods stuck in ImagePullBackOff. The security team also wants to remove registry credentials from namespaces entirely, and it will not accept any credential that stays valid for more than a day.",
    question: "What should the platform team implement?",
    options: [
      { id: 'A', text: "Attach one pull secret to the default ServiceAccount in each namespace so the admission plugin adds it to every new pod." },
      { id: 'B', text: "Write a non-expiring registry token into /var/lib/kubelet/config.json on every node so pulls no longer need namespace secrets." },
      { id: 'C', text: "Configure a kubelet image credential provider plugin so each node fetches short-lived registry credentials on demand." },
      { id: 'D', text: "Replace the script with a CronJob that refreshes the pull credentials in every namespace each hour with a cluster-wide credential." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The kubelet credential provider mechanism (configured with --image-credential-provider-config and --image-credential-provider-bin-dir) lets the kubelet execute a plugin, typically the cloud vendor's, that returns short-lived registry credentials when an image matching a configured pattern is pulled, and caches them for the returned duration. No Secret exists in any namespace and nothing long-lived is stored. A static config.json on the node is a real mechanism the kubelet honours, but a non-expiring token breaks the one-day rule. Attaching a pull secret to ServiceAccounts still places credentials in every namespace and still needs refreshing. A refreshing CronJob keeps Secrets in namespaces and needs its own powerful, long-lived token to write them.",
    referenceUrl: "https://kubernetes.io/docs/tasks/administer-cluster/kubelet-credential-provider/",
    tags: ["Kubelet credential provider", "Private registry", "Short-lived credentials"]
  },
  {
    id: "cncf-kcsa-384",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Who deleted the checkout Deployment?",
    scenario: "The checkout Deployment in a retailer's production cluster disappeared on Saturday night. Several engineers and two automation service accounts have delete rights on Deployments in that namespace, and management wants to know which identity issued the delete, from which source IP, and at what time.",
    question: "Which cluster capability records this information?",
    options: [
      { id: 'A', text: "kube-apiserver auditing configured with an audit policy that records requests to Deployments." },
      { id: 'B', text: "Kubernetes events in the namespace, viewed with kubectl get events sorted by their last timestamp." },
      { id: 'C', text: "metrics-server resource metrics, which show when the Deployment's pods stopped consuming CPU." },
      { id: 'D', text: "The kube-controller-manager log, which records every change made to Deployments by controllers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes auditing records each request the API server handles as it passes through the configured policy, including the authenticated user and groups, source IPs, verb, resource, and timestamps, which is exactly what attributes a delete to an identity. Events describe what controllers and the kubelet did to objects and expire after about an hour by default; they do not record the human or service account that issued a request. Controller-manager logs show the reaction to the deletion (pods being removed), not who asked for it. metrics-server holds short-lived resource usage and has no identity information at all.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit logging", "Observability", "Forensics"]
  },
  {
    id: "cncf-kcsa-385",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Which pods tried to reach the payments database?",
    scenario: "A fintech runs Cilium as its CNI plugin with default-deny NetworkPolicies. After a suspected compromise, investigators need to know which pods opened connections to the payments database over the last day and which connection attempts the policies dropped. The existing API server audit logs show only requests to the Kubernetes API.",
    question: "What should the team enable to capture this information?",
    options: [
      { id: 'A', text: "An audit rule at RequestResponse for networkpolicies, so every allowed and denied connection is written to the log." },
      { id: 'B', text: "cAdvisor network metrics for the database pods, scraped with the Cilium agent metrics and split by source pod." },
      { id: 'C', text: "Cilium's Hubble flow observability, which records each connection and its policy verdict with the pod identities." },
      { id: 'D', text: "A higher kube-proxy log verbosity, so it logs each connection it load-balances to the payments database pods." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "NetworkPolicy has no logging of its own; flow visibility has to come from the network plugin. Cilium's Hubble observes flows in the eBPF datapath and records source and destination pods, namespaces, labels, ports and the verdict (forwarded or dropped by policy), which answers both questions and can be exported to long-term storage. The audit log records API requests such as creating a NetworkPolicy object, never the packets the policy affects. kube-proxy programs iptables, IPVS or nftables rules and does not log individual connections. cAdvisor exposes per-pod received and transmitted byte counters, with no breakdown by peer and no policy verdicts.",
    referenceUrl: "https://docs.cilium.io/en/stable/observability/hubble/",
    tags: ["Hubble", "Network observability", "NetworkPolicy"]
  },
  {
    id: "cncf-kcsa-386",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Detailed ConfigMap audit rule that never fires",
    scenario: "A platform engineer's audit policy begins with a rule that logs all resources at the Metadata level. Further down, she added a rule logging configmaps in the payments namespace at RequestResponse. A week later, entries for payments ConfigMaps still contain no request or response bodies.",
    question: "What explains the behaviour?",
    options: [
      { id: 'A', text: "RequestResponse events are only written when a rule's omitStages excludes the RequestReceived stage." },
      { id: 'B', text: "Audit rules are evaluated in order and the first matching rule sets the level, so the catch-all rule wins." },
      { id: 'C', text: "The kube-apiserver merges all matching rules and applies the lowest of their levels to each request it logs." },
      { id: 'D', text: "ConfigMap bodies are only captured by the webhook backend, because the log backend truncates large bodies." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An audit policy is an ordered list, and the level of an event is set by the first rule that matches the request; later rules are never consulted. Because the catch-all Metadata rule matches every request, the RequestResponse rule for payments ConfigMaps is unreachable and must be moved above it. omitStages only controls which stages generate events and has no effect on which level applies. Both the log and webhook backends record the bodies the policy asks for; truncation is a separate batch setting on either backend. The API server does not merge rules or pick the lowest level; first match wins.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-policy",
    tags: ["Audit policy", "Rule ordering"]
  },
  {
    id: "cncf-kcsa-387",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Shell in a container that audit logs never saw",
    scenario: "An online-gaming company logs pods/exec requests at the RequestResponse level and alerts on every one. During an incident, attackers exploited a deserialisation bug in a Java service, launched /bin/sh inside the container and modified files under /etc, yet no alert fired. The team wants near-real-time detection of this behaviour without changing application code.",
    question: "What should the team deploy?",
    options: [
      { id: 'A', text: "Deploy Prometheus node-exporter and alert when a container's process count rises above its normal baseline." },
      { id: 'B', text: "Add an audit rule at RequestResponse for pods/attach and pods/portforward so any interactive session is recorded." },
      { id: 'C', text: "Deploy the Trivy Operator so running workloads are continuously scanned and reports are raised for new findings." },
      { id: 'D', text: "Deploy Falco so kernel system calls from containers are matched against rules for shells and writes below /etc." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The attacker never called the Kubernetes API: the shell was spawned by the exploited Java process inside the container, so API audit logs, however detailed, have nothing to record. Falco observes system calls through an eBPF probe or kernel module and ships default rules such as detecting a shell spawned in a container and writes below /etc, raising alerts within seconds. Auditing pods/attach and pods/portforward still covers only API-initiated sessions. The Trivy Operator finds vulnerabilities and misconfigurations in images and manifests; it does not watch process behaviour. node-exporter exposes host-level metrics and cannot attribute a new process to a shell or distinguish it from normal worker threads.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Falco", "Runtime detection", "Audit logging"]
  },
  {
    id: "cncf-kcsa-388",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Unauthenticated pod listing on port 10255",
    scenario: "A penetration tester reached a worker node from a compromised pod and ran curl against http://NODE_IP:10255/pods, receiving the full spec of every pod on the node without presenting any credentials. The kubelet already runs with anonymous authentication disabled and Webhook authorization on its main port.",
    question: "Which kubelet setting removes this exposure?",
    options: [
      { id: 'A', text: "Set authentication.anonymous.enabled to false once more." },
      { id: 'B', text: "Set the authorization mode to AlwaysAllow on the kubelet." },
      { id: 'C', text: "Set rotateCertificates to true in the kubelet configuration." },
      { id: 'D', text: "Set readOnlyPort to 0 in the kubelet configuration file." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Port 10255 is the kubelet's read-only port, which serves pod and node information over plain HTTP with no authentication or authorization at all; the CIS Kubernetes Benchmark recommends disabling it by setting readOnlyPort to 0. Anonymous authentication and Webhook authorization apply only to the secure port 10250, so re-applying the anonymous setting leaves 10255 open. AlwaysAllow would weaken the secure port further. Certificate rotation renews the kubelet's client certificate and does not affect an unauthenticated HTTP listener.",
    referenceUrl: "https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/",
    tags: ["Kubelet", "Read-only port", "Hardening"]
  },
  {
    id: "cncf-kcsa-389",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Three hundred CVEs in a static Go binary's image",
    scenario: "A payments team ships a statically linked Go service on a full Debian base image. The registry scanner reports over 300 CVEs, almost all in packages such as bash, apt, perl and coreutils that the service never uses. The team wants the findings and the tooling available to an attacker reduced without changing the service code.",
    question: "What is the most effective change?",
    options: [
      { id: 'A', text: "Set readOnlyRootFilesystem to true in the container's securityContext so that the unused packages cannot be modified." },
      { id: 'B', text: "Rebuild the image with a multi-stage build that copies only the binary onto a distroless or scratch final stage." },
      { id: 'C', text: "Drop all Linux capabilities in the securityContext so that shells and package managers lose their privileges." },
      { id: 'D', text: "Schedule a weekly rebuild on the same Debian base so the image picks up distribution security patches quickly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A static binary needs no userland, so a distroless or scratch final stage removes the shell, package manager and interpreters entirely: the CVEs disappear from the scan and an attacker who gains code execution has no tools to live off. A read-only root filesystem stops writes but leaves every vulnerable package present and reported. Dropping capabilities limits privileged operations yet does not remove bash or perl, which an attacker can still run. Weekly rebuilds reduce the window for patched CVEs but keep hundreds of unneeded packages, and unpatched findings remain.",
    referenceUrl: "https://github.com/GoogleContainerTools/distroless",
    tags: ["Distroless", "Base images", "Attack surface"]
  },
  {
    id: "cncf-kcsa-390",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Same Dockerfile, different dependencies each day",
    scenario: "A news site's Dockerfile starts FROM node:20 and runs npm install. Two builds of the same commit a week apart produced images with different base layers and different transitive packages, one of which later turned out to be a typosquatted release. The security lead wants builds of a commit to resolve the same inputs every time.",
    question: "Which change achieves this?",
    options: [
      { id: 'A', text: "Pin the base image by digest and install from the committed lockfile with npm ci instead of npm install." },
      { id: 'B', text: "Convert the Dockerfile to a multi-stage build so the final image contains only the compiled application output." },
      { id: 'C', text: "Add a USER instruction so that npm install runs as an unprivileged account rather than as the root user." },
      { id: 'D', text: "Build with the --no-cache flag so each build starts from fresh base layers instead of stale cached ones." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "node:20 is a moving tag and npm install can resolve newer versions within declared ranges, so both the base and the dependency tree drift. Pinning the base by digest fixes the base layers, and npm ci installs exactly the versions and integrity hashes recorded in package-lock.json, failing if they do not match, so a later typosquatted or hijacked release is not picked up silently. Multi-stage builds shrink the final image but do not change what the build stage resolves. --no-cache makes drift more likely by forcing fresh resolution. Running npm as a non-root user limits what an install script can do but still installs whatever versions resolve that day.",
    referenceUrl: "https://docs.docker.com/build/building/best-practices/",
    tags: ["Reproducible builds", "Dependency pinning", "Supply chain"]
  },
  {
    id: "cncf-kcsa-391",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Malicious test step that could sign anything",
    scenario: "A SaaS vendor's CI pipeline runs unit tests, builds an image and signs it in one job, with the cosign private key exposed as an environment variable for the whole job. A compromised test dependency exfiltrated the key, and the attacker signed a backdoored image that the cluster admitted. The vendor wants the build to meet SLSA Build Level 3.",
    question: "Which change addresses the root cause?",
    options: [
      { id: 'A', text: "Move signing and provenance to an isolated job the build steps cannot reach, such as a trusted reusable workflow." },
      { id: 'B', text: "Generate an SBOM for each image and attach it as an attestation so verifiers can inspect what was included." },
      { id: 'C', text: "Rotate the cosign key every month and publish revoked key fingerprints so that stale signatures stop being trusted." },
      { id: 'D', text: "Require two approvals on every change to the Dockerfile and the CI definition before the pipeline may run." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "SLSA Build Level 3 requires a hardened build platform in which secret material used to sign provenance is not accessible to user-defined build steps, and runs are isolated from one another. Moving signing into a separate, platform-controlled job (for example the SLSA GitHub generator's reusable workflow) means a malicious dependency in the test step can no longer read the key. Monthly rotation shortens the window but a compromised step can still steal the current key. Two-person review of the Dockerfile and CI files does not cover third-party dependency code, which is where the attack came from. An SBOM describes contents and would faithfully list the backdoored build; it does not protect the signing key.",
    referenceUrl: "https://slsa.dev/spec/v1.0/requirements",
    tags: ["SLSA", "Signing keys", "CI hardening"]
  },
  {
    id: "cncf-kcsa-392",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Harbor project refusing critical-CVE images",
    scenario: "A logistics firm hosts its images in a Harbor project with the bundled Trivy scanner enabled. Security policy says no cluster may pull an image that has an unresolved Critical vulnerability, and the team wants the registry itself to enforce this rather than every cluster.",
    question: "Which Harbor project setting enforces the policy?",
    options: [
      { id: 'A', text: "With content trust enabled, only images with a valid cosign or Notation signature can be pulled from the project." },
      { id: 'B', text: "Prevent vulnerable images from running, with the severity threshold set to Critical and scan on push enabled." },
      { id: 'C', text: "Create a replication rule that copies only scanned images to a second Harbor instance used by the clusters." },
      { id: 'D', text: "Add a tag immutability rule so pushed tags in the project cannot be overwritten or deleted by any user." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Harbor's per-project deployment security setting to prevent vulnerable images from running blocks pulls of any artifact whose scan result is at or above the chosen severity, and automatic scan on push ensures every new image has a result to evaluate. Content trust enforces signatures, which prove origin but not the absence of CVEs. Tag immutability prevents tags from being overwritten, useful for integrity but unrelated to vulnerabilities. Replication filters can select by name, tag or label, not by scan result, and replicated images could still carry Critical findings.",
    referenceUrl: "https://goharbor.io/docs/main/working-with-projects/project-configuration/",
    tags: ["Harbor", "Vulnerability scanning", "Registry policy"]
  },
  {
    id: "cncf-kcsa-393",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Only images from the corporate registry",
    scenario: "A government contractor must guarantee that workloads only run images from registry.corp.example, which is scanned and mirrored. An engineer proposed an egress NetworkPolicy in every namespace allowing traffic only to the registry's IP range, but a test pod using a Docker Hub image still started. The team needs a control that actually blocks such pods.",
    question: "What should the team implement?",
    options: [
      { id: 'A', text: "Configure imagePullSecrets for registry.corp.example only, so that pulls from other registries lack credentials." },
      { id: 'B', text: "Enable the AlwaysPullImages admission plugin so that images are always fetched from the configured corporate mirror." },
      { id: 'C', text: "Tighten the egress NetworkPolicy to deny port 443 to every destination except the corporate registry's address." },
      { id: 'D', text: "Add a validating admission policy that rejects pods whose container images do not begin with registry.corp.example/." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Image pulls are performed by the kubelet and container runtime on the node's network, not from inside the pod's network namespace, so pod NetworkPolicies never apply to them; that is why the test pod started. An admission control such as a ValidatingAdmissionPolicy with a CEL expression, or Gatekeeper's allowed-repositories constraint, rejects the pod at the API server before it is scheduled. Restricting pull secrets does nothing for public images, which need no credentials. Tightening the same NetworkPolicy has the same blind spot. AlwaysPullImages forces a fresh pull from whatever registry the image names; it does not redirect to a mirror or restrict the source.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/validating-admission-policy/",
    tags: ["Allowed registries", "Admission control", "Image policy"]
  },
  {
    id: "cncf-kcsa-394",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Audit trail an intruder with node root can erase",
    scenario: "A crypto exchange writes API server audit logs to /var/log/kubernetes/audit.log on each control-plane node. A threat-modelling review notes that an attacker who gains root on a control-plane node could delete or edit the log to hide their actions. The exchange wants audit records to survive such a compromise.",
    question: "Which approach best protects the audit trail?",
    options: [
      { id: 'A', text: "Raise --audit-log-maxbackup and --audit-log-maxage so older rotated files stay on each control-plane node longer." },
      { id: 'B', text: "Mount the audit log directory from a hostPath volume marked readOnly in the kube-apiserver static pod manifest." },
      { id: 'C', text: "Send events through the audit webhook backend to an external SIEM that control-plane administrators cannot alter." },
      { id: 'D', text: "Raise the policy level to RequestResponse for every resource so each event carries the full request and response." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Records are only tamper-resistant if they leave the machine the attacker controls. The webhook backend sends audit events to an external HTTP endpoint as they are generated, so a later compromise of the node cannot rewrite what the SIEM already received; streaming the log file off-node with an agent is the equivalent approach for the log backend. Keeping more rotated files on the node gives an attacker more to delete. RequestResponse increases detail, not integrity. A read-only mount would stop the API server itself from writing the log, and root on the node can remount or edit the host file anyway.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend",
    tags: ["Audit webhook", "Log integrity", "SIEM"]
  },
  {
    id: "cncf-kcsa-395",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Forty gigabytes of audit log per day",
    scenario: "A telecom's audit log reaches 40 GB per day. Analysis shows most entries are duplicate events for the RequestReceived stage of the same requests, plus constant watch requests from the system:kube-proxy user on endpoints and services. The security team must keep a per-request record of every human and workload action.",
    question: "Which policy change reduces volume while keeping the required records?",
    options: [
      { id: 'A', text: "Add omitStages for RequestReceived and a first rule at level None for kube-proxy watches on endpoints and services." },
      { id: 'B', text: "Set the policy level to None globally and rely on Kubernetes events, retained by the API server, for any investigation." },
      { id: 'C', text: "Use the webhook backend in batch mode so kube-proxy endpoints watches and RequestReceived events ship in larger batches." },
      { id: 'D', text: "Set --audit-log-maxage to one day so that the log directory never holds more than a single day of audit events." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Each request can produce an event at RequestReceived and again at ResponseComplete; omitting RequestReceived removes the duplicate while ResponseComplete still records the request and its outcome. A None rule scoped to the system:kube-proxy user and watch verb on endpoints and services, placed before broader rules because the first match wins, drops the noisy system traffic without touching human or workload actions. A global None disables auditing, and events carry no requester identity. A one-day maxage only shortens retention and loses history. Batching changes how events are transmitted, not how many are generated or stored.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/",
    tags: ["Audit policy", "omitStages", "Log volume"]
  },
  {
    id: "cncf-kcsa-396",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Yesterday's pod events have vanished",
    scenario: "An on-call engineer at a streaming service saw several FailedMount and BackOff events on a crashing pod late on Monday night. When the security team reviewed the incident on Tuesday morning, kubectl get events returned nothing for that pod, although nobody had deleted anything and the pod still existed.",
    question: "Why are the events gone?",
    options: [
      { id: 'A', text: "Events are only persisted when the audit policy logs the events resource at the Metadata level or above." },
      { id: 'B', text: "Events are kept in the node's journal and were rotated away with the kubelet logs when the day changed over." },
      { id: 'C', text: "Events expire after the kube-apiserver --event-ttl, which is one hour by default, so they need exporting." },
      { id: 'D', text: "Events are only visible to the pod's ServiceAccount after the first hour unless RBAC grants a wider role." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Events are ordinary API objects stored in etcd with a time-to-live set by the API server's --event-ttl flag, one hour by default, after which they are garbage-collected. For investigations they must be shipped to a durable store by an event exporter or logging pipeline. Event persistence has nothing to do with the audit policy, which controls a separate audit stream. Events live in etcd, not the node journal, although the kubelet also logs locally. RBAC visibility does not change with age; any identity with list on events sees them until they expire.",
    referenceUrl: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/",
    tags: ["Events", "Observability", "Retention"]
  },
  {
    id: "cncf-kcsa-397",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "New CVE in images that are already running",
    scenario: "An e-commerce company scans images in CI and blocks the build on High findings. A critical CVE in an OpenSSL version was published on Thursday, affecting images that passed CI weeks earlier and are still running. The CISO wants such exposures surfaced automatically for everything running in the cluster, without waiting for teams to redeploy.",
    question: "What should be added?",
    options: [
      { id: 'A', text: "A stricter CI gate that fails builds on Medium findings as well as High and Critical findings from the scanner." },
      { id: 'B', text: "Cosign signature verification at admission, so that only images built by the audited CI pipeline can be run." },
      { id: 'C', text: "An admission webhook that scans each image at pod creation and denies any pod with a Critical vulnerability." },
      { id: 'D', text: "The Trivy Operator, which rescans workload images in the cluster and publishes VulnerabilityReport resources." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Vulnerability data changes after deployment, so a scan that passed at build time goes stale. Continuous in-cluster scanning, such as the Trivy Operator, discovers the images used by running workloads, rescans them as the vulnerability database updates and exposes results as VulnerabilityReport custom resources that can be alerted on. A stricter CI gate still only evaluates images when they are built. Admission-time scanning only evaluates pods when they are created, so long-running pods are never rechecked. Signature verification proves origin and says nothing about newly disclosed vulnerabilities.",
    referenceUrl: "https://aquasecurity.github.io/trivy-operator/latest/",
    tags: ["Continuous scanning", "Trivy Operator", "Vulnerability management"]
  },
  {
    id: "cncf-kcsa-398",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "One registry account shared by CI and every node",
    scenario: "A travel company's clusters and its CI system all use the same registry administrator account. A node compromise last quarter exposed that credential, and the attacker overwrote a production image. The company wants a compromise of any node to be unable to change what is stored in the registry.",
    question: "How should registry access be restructured?",
    options: [
      { id: 'A', text: "Give clusters a pull-only robot account and CI a separate push-scoped robot account limited to its own project." },
      { id: 'B', text: "Make the production repositories public so nodes pull anonymously and no registry credential is kept on them." },
      { id: 'C', text: "Keep the shared administrator account but rotate its password weekly and store it in an external secrets manager." },
      { id: 'D', text: "Enable registry audit logging so any push made with the administrator account from the clusters is traced." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Least privilege for registries means separate identities per consumer: nodes need only pull, so a stolen node credential cannot push, delete or retag; CI gets push rights scoped to the repositories it builds. Making repositories public removes the node credential but exposes proprietary images to anyone and still does nothing to stop a compromised CI credential. Rotating a shared admin credential shortens exposure yet a node compromise still yields full write access during the window. Audit logging helps attribution after the fact but does not prevent the overwrite.",
    referenceUrl: "https://goharbor.io/docs/main/working-with-projects/project-configuration/create-robot-accounts/",
    tags: ["Registry access", "Least privilege", "Robot accounts"]
  },
  {
    id: "cncf-kcsa-399",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "Vendor signatures lost on the way into an air-gapped site",
    scenario: "A defence contractor imports vendor images into an air-gapped Harbor registry by running docker pull, docker save, carrying the tarball across the gap, then docker load and docker push. The cluster's admission policy must verify the vendor's cosign signature against the vendor's public key, but verification now fails for every imported image.",
    question: "What should the import process do instead?",
    options: [
      { id: 'A', text: "Verify images by tag instead of by digest so vendor signatures still match after the save and re-push steps." },
      { id: 'B', text: "Exclude the internal registry from the admission policy, because images there were already reviewed at the gap." },
      { id: 'C', text: "Re-sign each image with the contractor's own cosign key after docker load and trust that key in the admission policy." },
      { id: 'D', text: "Copy images by digest with a tool such as cosign save and load or crane, keeping the manifest and its signatures." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A cosign signature covers the image manifest digest and is stored as a separate OCI artifact next to the image. docker save and load discard the signature artifacts and can recompress layers on push, producing a new digest, so the vendor's signature no longer matches anything. Tools that copy OCI artifacts byte for byte, such as cosign save and cosign load or crane, preserve the digest and carry the signatures and attestations across, so the vendor key still verifies. Re-signing with an internal key replaces the vendor's provenance with the contractor's, which the policy explicitly does not accept. Signatures bind to digests, not tags, so verifying by tag does not fix a changed digest. Exempting the registry abandons verification altogether.",
    referenceUrl: "https://docs.sigstore.dev/cosign/signing/signing_with_containers/",
    tags: ["Air-gapped", "cosign", "Image signatures", "Registry mirroring"]
  },
  {
    id: "cncf-kcsa-400",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d5",
    domainName: "Platform Security",
    title: "What a valid image signature actually proves",
    scenario: "A product manager at an ad-tech company reads that all production images are now signed with cosign and verified at admission. She tells a customer that this guarantees the containers contain no known vulnerabilities, and asks the platform team to confirm the statement before it goes into a security questionnaire.",
    question: "What does successful signature verification establish?",
    options: [
      { id: 'A', text: "The image was built reproducibly from reviewed source code on a hardened, isolated build platform." },
      { id: 'B', text: "The image passed a vulnerability scan with no Critical or High findings at the moment it was signed." },
      { id: 'C', text: "The image runs without root privileges and meets the restricted Pod Security Standard profile." },
      { id: 'D', text: "The holder of the trusted key or identity signed this exact image digest, and it is unchanged since." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A signature binds an identity or key to a specific digest: verification proves who signed and that the bytes have not changed since. It makes no statement about vulnerabilities; a signed image can contain any number of CVEs, which is why scanning results are published separately, often as signed attestations. Reproducible builds and hardened build platforms are properties described by provenance and SLSA levels, not implied by a signature alone. Whether an image runs as root is a pod and image configuration question enforced by Pod Security Admission, not by signing.",
    referenceUrl: "https://docs.sigstore.dev/about/overview/",
    tags: ["Image signing", "Supply chain", "Verification"]
  }
];

export default CNCF_KCSA_QUESTIONS_16;
