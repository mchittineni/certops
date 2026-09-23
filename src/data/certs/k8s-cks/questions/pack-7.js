export const K8S_CKS_QUESTIONS_7 = [
  {
    id: "k8s-cks-151",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Verifying Base Image Provenance with Cosign Keyless Verification",
    scenario: "A company requires that all base images must be verified as official Chainguard or Distroless images signed by their respective GitHub Actions workflows.",
    question: "Which Cosign command verifies an image signed using keyless OIDC against a specific GitHub workflow issuer and identity?",
    options: [
      { id: 'A', text: "Run <code>cosign verify</code> with the identity regexp and OIDC issuer flags" },
      { id: 'B', text: "Run <code>cosign verify</code> with <code>--key</code> pointing at the workflow's published public key" },
      { id: 'C', text: "Run <code>cosign verify-attestation</code> with <code>--certificate-oidc-issuer</code> for the workflow" },
      { id: 'D', text: "Run <code>cosign verify</code> with <code>--certificate-github-workflow-repository</code> only" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In keyless verification, Cosign verifies signatures against Sigstore's Fulcio CA and Rekor log by checking the certificate identity: <code>--certificate-identity-regexp</code> (matching the expected workflow identity or repository) and <code>--certificate-oidc-issuer</code> (the trusted OIDC token provider URL, such as GitHub Actions).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Cosign", "Keyless", "OIDC", "Fulcio"]
  },
  {
    id: "k8s-cks-152",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Restricting Build-Time Secret Leakage in Docker Images",
    scenario: "A developer needs a GitHub private access token during <code>docker build</code> to pull proprietary internal libraries. If passed via <code>ARG GITHUB_TOKEN</code>, the token remains permanently visible in the image history (<code>docker history</code>).",
    question: "What is the secure method to provide build-time secrets using BuildKit without baking them into final container image layers?",
    options: [
      { id: 'A', text: "Use a BuildKit secret mount — <code>RUN --mount=type=secret,id=token</code> with <code>--secret</code> on the build" },
      { id: 'B', text: "Pass the value as a build <code>ARG</code> and unset it in the following <code>RUN</code> instruction" },
      { id: 'C', text: "Copy the token file in, use it, and remove it again in the same <code>RUN</code> instruction" },
      { id: 'D', text: "Write the token to <code>/tmp</code> during build and squash the image layers on push" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "BuildKit secret mounts (<code>RUN --mount=type=secret,id=...</code>) mount credentials into a temporary in-memory filesystem during the execution of that specific RUN instruction. The secret is never committed to image layer metadata, caching layers, or <code>docker history</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["BuildKit", "Secrets", "Dockerfile", "Credential-Protection"]
  },
  {
    id: "k8s-cks-153",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Eliminating Sudo and Setuid from Container Images",
    scenario: "A security scan of a container image flags that <code>sudo</code> is installed inside the image, even though the application runs as an unprivileged user.",
    question: "What is the recommended remediation according to container security best practices?",
    options: [
      { id: 'A', text: "Configure <code>sudoers</code> with <code>NOPASSWD: ALL</code> for the unprivileged user" },
      { id: 'B', text: "Set <code>allowPrivilegeEscalation: false</code> on the container's securityContext" },
      { id: 'C', text: "Remove the <code>sudo</code> package from the image at build time" },
      { id: 'D', text: "Change the password of the root account to a complex 64-character string" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "<code>sudo</code> has no place inside production container images. Containers are meant to run as specific designated users. Retaining <code>sudo</code> leaves an unnecessary setuid binary that an attacker can exploit via local privilege escalation vulnerabilities (e.g., CVE-2021-3156 Baron Samedit).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["sudo", "setuid", "Image-Hardening", "Least-Privilege"]
  },
  {
    id: "k8s-cks-154",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Hardening Multi-Stage Builds: Non-Root Final Stage",
    scenario: "A developer writes a multi-stage Dockerfile that copies a Go binary into an alpine final image. However, when the container runs in Kubernetes, it executes as root.",
    question: "Which Dockerfile instruction in the final stage guarantees that the application process executes as an unprivileged user?",
    options: [
      { id: 'A', text: "Add an unprivileged account with <code>adduser -S appuser</code> and set <code>USER appuser</code> before the entrypoint" },
      { id: 'B', text: "Add an unprivileged account with <code>adduser -S appuser</code> and set <code>WORKDIR /home/appuser</code> after it" },
      { id: 'C', text: "Add an unprivileged account in the builder stage and carry it forward with <code>ENV USER=appuser</code>" },
      { id: 'D', text: "Add an unprivileged account and hand it the application directory with <code>RUN chmod 755 /app</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>USER</code> instruction in a Dockerfile sets the default UID/GID for subsequent instructions and container runtime execution. Creating an explicit unprivileged user and setting <code>USER &lt;user&gt;</code> ensures the container does not default to root UID 0.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["USER", "Non-Root", "Dockerfile", "Hardening"]
  },
  {
    id: "k8s-cks-155",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Detecting Vulnerabilities in Base Images using Trivy Ignore Files",
    scenario: "A development team needs to suppress specific known non-exploitable CVE alerts in Trivy during CI/CD builds while continuing to fail on all other HIGH and CRITICAL vulnerabilities.",
    question: "Which file allows configuring vulnerability exceptions with documented justifications?",
    options: [
      { id: 'A', text: "A ConfigMap named <code>trivy-exemptions</code> in the namespace" },
      { id: 'B', text: "A <code>#trivy:ignore</code> directive in the Dockerfile header" },
      { id: 'C', text: "A <code>.trivyignore</code> file listing the CVE IDs with comments" },
      { id: 'D', text: "A <code>.gitignore</code> entry naming each accepted CVE" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Trivy supports a <code>.trivyignore</code> file (or <code>--ignorefile</code> flag) where security teams can list specific CVE identifiers to ignore, along with expiry dates and justifications. This allows suppressing acceptable risks without disabling automated gates for new vulnerabilities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Trivy", ".trivyignore", "Vulnerability-Management", "CI-CD"]
  },
  {
    id: "k8s-cks-156",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Enforcing Digest-Only Image References via OPA Gatekeeper",
    scenario: "An enterprise requires that all pod deployments reference container images strictly by SHA-256 digest, rejecting any manifest that uses mutable tags like <code>latest</code> or semantic versions.",
    question: "Which Rego logic in a Gatekeeper ConstraintTemplate validates that an image contains a digest?",
    options: [
      { id: 'A', text: "Check that <code>input.review.object.metadata.namespace == 'production'</code> before the rule applies" },
      { id: 'B', text: "Check that <code>startswith(image, 'registry.internal/')</code> holds for every container image" },
      { id: 'C', text: "Check that <code>contains(image, '@sha256:')</code> holds for every container image in the review object" },
      { id: 'D', text: "Check that <code>endswith(image, ':latest')</code> is false for every container image in the pod" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "To enforce immutable digests, Rego policy checks that every container image string includes the <code>@sha256:</code> substring (or matches a SHA-256 regex pattern). If a manifest uses a standard tag (e.g., <code>:v1.0</code>) without a digest, Gatekeeper denies the admission request.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Gatekeeper", "Rego", "SHA256", "Immutability"]
  },
  {
    id: "k8s-cks-157",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Verifying Container Image Layer Signatures with Notary Project (Notation)",
    scenario: "An organization adopts the CNCF Notary Project (Notation) and OCI specification for container image signing across OCI registries.",
    question: "What is the primary benefit of OCI-native image signatures supported by Notation?",
    options: [
      { id: 'A', text: "Signatures live in a transparency log the registry queries, so a revoked key invalidates every image at once" },
      { id: 'B', text: "Signatures live in the image manifest's own annotations, so a re-tag carries the signature across registries" },
      { id: 'C', text: "Signatures live in the registry as ordinary OCI artifacts beside the manifest, so they replicate with the image" },
      { id: 'D', text: "Signatures are derived from the image digest itself, so no signing key has to be distributed to verifiers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The CNCF Notary Project (Notation) uses OCI 1.1 artifact specifications to store signatures directly as reference artifacts in the container registry alongside the image. When images are mirrored or copied across registries, the associated signatures travel with them natively.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Notation", "Notary", "OCI-Artifacts", "Image-Signing"]
  },
  {
    id: "k8s-cks-158",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Detecting Shellshock and Environment Variable Injection in Base Images",
    scenario: "A legacy container image relies on an ancient version of GNU Bash vulnerable to Shellshock (CVE-2014-6271), allowing code execution via crafted environment variables.",
    question: "Which security measure best mitigates environment variable injection attacks in containerized applications?",
    options: [
      { id: 'A', text: "Pass the environment variables base64-encoded into the pod instead" },
      { id: 'B', text: "Configure <code>hostIPC: true</code> in the pod specification" },
      { id: 'C', text: "Run containers with <code>securityContext.privileged: true</code>" },
      { id: 'D', text: "Move the workloads to distroless images, which carry no shell" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Eliminating shell interpreters (Bash, sh) by migrating to minimal Distroless images removes the attack surface for shell interpreter vulnerabilities (such as Shellshock), ensuring that environment variables cannot be evaluated as executable code by rogue child processes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Shellshock", "Distroless", "Environment-Variables", "Vulnerabilities"]
  },
  {
    id: "k8s-cks-159",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Hardening Helm Charts: Linting with Chart-Testing and Kubesec",
    scenario: "A platform team manages 50 internal Helm charts. Before releasing charts to the enterprise catalog, charts must be tested for syntax errors and security policy adherence.",
    question: "Which toolchain automates Helm chart rendering and security validation?",
    options: [
      { id: 'A', text: "Run <code>helm lint</code>, then <code>helm template</code> piped into <code>kubesec scan</code>" },
      { id: 'B', text: "Run <code>helm package</code>, then push the chart and scan it in the registry" },
      { id: 'C', text: "Run <code>helm template</code>, then apply the output with <code>kubectl --dry-run</code>" },
      { id: 'D', text: "Run <code>helm install --dry-run</code> against the production cluster and read the plan" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A standard automated Helm CI pipeline renders templates locally using <code>helm template &lt;chart&gt;</code> and pipes the resulting Kubernetes YAML manifests directly into static analysis security scanners (<code>kubesec</code>, <code>checkov</code>, <code>polaris</code>) to detect misconfigurations before deployment.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Helm", "Kubesec", "CI-CD", "Static-Analysis"]
  },
  {
    id: "k8s-cks-160",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Restricting Container Image Tags: Banning Mutable Tags in Production",
    scenario: "A production cluster policy requires banning mutable tags like <code>:latest</code>, <code>:master</code>, and <code>:dev</code> to ensure deployment predictability and auditability.",
    question: "Which Kyverno policy rule rejects pods referencing mutable tags?",
    options: [
      { id: 'A', text: "A <code>validate</code> pattern requiring <code>spec.containers[*].image: '!*:latest & !*:master & !*:dev'</code>" },
      { id: 'B', text: "A <code>generate</code> rule that creates a default NetworkPolicy for tagged images" },
      { id: 'C', text: "A <code>mutate</code> rule that automatically renames <code>:latest</code> to <code>:v1.0.0</code>" },
      { id: 'D', text: "A <code>verifyImages</code> rule specifying <code>mutateDigest: false</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kyverno validation rules can evaluate image strings using pattern matching. A validate rule with pattern <code>spec.containers[*].image: '!*:latest'</code> rejects incoming pod manifests that specify the <code>:latest</code> tag, enforcing explicit versioning or immutable digests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kyverno", "Mutable-Tags", "Admission-Control", "Best-Practices"]
  },
  {
    id: "k8s-cks-161",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Securing Container Registries with Role-Based Access Control",
    scenario: "An enterprise registry contains both base infrastructure images and mission-critical payment services. Developers should be able to push to feature repositories, but only automated CI runners should be able to push to production repositories.",
    question: "Which access control practice prevents unauthorized developers from pushing modified images to production repositories?",
    options: [
      { id: 'A', text: "Give every developer a personal robot account with write access, and audit the pushes after the fact" },
      { id: 'B', text: "Give the registry an IP allow-list for the build network, and leave repository permissions unchanged" },
      { id: 'C', text: "Give the pipeline a robot account with write access to the production repositories, and humans read-only" },
      { id: 'D', text: "Give the pipeline the registry administrator credential, held in a Secret the build namespace mounts" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Securing the software supply chain requires that only authenticated, automated CI/CD build pipelines (using dedicated machine/robot tokens) have write access to release repositories. Developers must be restricted to read-only access, preventing malicious or accidental pushes of unverified images.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Registry-Security", "RBAC", "Supply-Chain", "Robot-Accounts"]
  },
  {
    id: "k8s-cks-162",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Validating Dockerfile Best Practices: Avoiding Root USER Directive",
    scenario: "A security audit using Hadolint reports violation DL3002: 'Last USER should not be root'.",
    question: "Why is ending a Dockerfile with <code>USER root</code> or omitting the <code>USER</code> instruction dangerous?",
    options: [
      { id: 'A', text: "The image then keeps its build-time layers, which adds several hundred megabytes to every pull" },
      { id: 'B', text: "The pod is then rejected by NetworkPolicy, since policies cannot select containers running as root" },
      { id: 'C', text: "The build then fails under a restricted namespace, since the daemon refuses to tag a root image" },
      { id: 'D', text: "The process then runs as UID 0 inside the container, widening the blast radius of any compromise" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "If no <code>USER</code> instruction is declared (or if the last instruction is <code>USER root</code>), the container executes as root (UID 0). If an application vulnerability allows command injection, the attacker immediately possesses root privileges inside the container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Hadolint", "Non-Root", "USER", "Dockerfile"]
  },
  {
    id: "k8s-cks-163",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Scanning Git Repositories for Secrets with Trufflehog",
    scenario: "A security team performs a historical audit of an enterprise git repository to verify if database credentials were ever committed in past git branches or commits.",
    question: "Which tool searches the entire commit history of a git repository to identify high-entropy secrets and verified API keys?",
    options: [
      { id: 'A', text: "AppArmor" },
      { id: 'B', text: "Crictl" },
      { id: 'C', text: "Kube-bench" },
      { id: 'D', text: "Trufflehog" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>Trufflehog</code> scans git commit history, branches, and diffs to discover high-entropy strings and credentials, and can actively verify credentials against live APIs (e.g., verifying if an AWS or Slack key is still active).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Trufflehog", "Secret-Scanning", "Git-History", "DevSecOps"]
  },
  {
    id: "k8s-cks-164",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Preventing Supply Chain Attacks via Package Lockfile Integrity",
    scenario: "A malicious actor compromises an upstream package maintainer's account and publishes a poisoned patch release of an NPM library.",
    question: "How do package lockfiles (e.g., <code>package-lock.json</code>, <code>yarn.lock</code>) defend against unauthorized upstream package tampering?",
    options: [
      { id: 'A', text: "They pin the exact version and integrity hash of each package, and <code>npm ci</code> rejects anything that fails the hash" },
      { id: 'B', text: "They pin the exact version of each package, so a republished version is installed only after a manual refresh" },
      { id: 'C', text: "They record the registry each package came from, so a package served by a different host is refused on install" },
      { id: 'D', text: "They record a signature from the publisher, which the package manager verifies against the registry's own key" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Package lockfiles record the exact resolved versions and cryptographic integrity hashes (e.g., SHA-512) for all direct and transitive dependencies. Running <code>npm ci</code> verifies downloaded packages against the recorded integrity hashes, detecting tampered or altered upstream packages.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Lockfiles", "npm-ci", "Integrity", "Supply-Chain"]
  },
  {
    id: "k8s-cks-165",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Enforcing Container Image Signing with Connaisseur Admission Controller",
    scenario: "A team deploys Connaisseur as a Kubernetes admission controller to verify Cosign and Notary image signatures before pods are allowed to start.",
    question: "How does Connaisseur integrate into the Kubernetes control plane to enforce signing policies?",
    options: [
      { id: 'A', text: "It registers a <code>MutatingWebhookConfiguration</code> that rewrites each image reference to its signed digest" },
      { id: 'B', text: "It runs as a controller that watches running pods and evicts any whose image signature no longer verifies" },
      { id: 'C', text: "It registers a <code>ValidatingWebhookConfiguration</code> that checks each new pod's image signatures before admission" },
      { id: 'D', text: "It runs as a scheduler extender that filters out nodes unless the pod's image carries a valid signature" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Connaisseur is an admission controller that registers as a <code>ValidatingAdmissionWebhook</code>. It intercepts incoming pod creation and update requests from <code>kube-apiserver</code>, verifies that images are signed and unaltered using Cosign or Notary, and returns an admission denial if signatures are invalid.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Connaisseur", "Admission-Webhook", "Image-Verification", "Cosign"]
  },
  {
    id: "k8s-cks-166",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Minimizing Attack Surface: Removing Package Manager Caches",
    scenario: "A developer runs <code>apt-get install -y nginx</code> in a Dockerfile layer, leaving several hundred megabytes of package indices in <code>/var/lib/apt/lists/</code>.",
    question: "Which combined command pattern installs packages cleanly and minimizes both layer size and residual attack surface?",
    options: [
      { id: 'A', text: "<code>RUN apt-get install nginx && apt-get clean</code>" },
      { id: 'B', text: "<code>RUN apt-get update</code> followed by a separate <code>RUN rm -rf /var/lib/apt/lists/*</code>" },
      { id: 'C', text: "<code>RUN apt-get update && apt-get install nginx</code>" },
      { id: 'D', text: "<code>RUN apt-get update && apt-get install -y --no-install-recommends nginx && rm -rf /var/lib/apt/lists/*</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Docker, each <code>RUN</code> statement creates an immutable layer. To ensure package lists are not saved into the image layer, <code>apt-get update</code>, <code>apt-get install --no-install-recommends</code>, and <code>rm -rf /var/lib/apt/lists/*</code> must be executed in a single instruction joined with <code>&&</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Dockerfile", "Layer-Optimization", "Attack-Surface", "Best-Practices"]
  },
  {
    id: "k8s-cks-167",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Validating Dockerfile Base Images: Distroless Non-Root User Execution",
    scenario: "A team builds an application using Google Distroless base image <code>gcr.io/distroless/static-debian12:nonroot</code>. What user UID does this image execute as by default?",
    question: "Which UID is assigned to the <code>nonroot</code> user in Distroless images?",
    options: [
      { id: 'A', text: "UID 65534 (nobody)" },
      { id: 'B', text: "UID 1000" },
      { id: 'C', text: "UID 65532" },
      { id: 'D', text: "UID 0" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The <code>:nonroot</code> variants of Google Distroless images include an unprivileged user named <code>nonroot</code> with UID and GID <code>65532</code>. By default, containers running these images execute as UID 65532, satisfying Kubernetes non-root security requirements out of the box.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Distroless", "Non-Root", "UID-65532", "Base-Images"]
  },
  {
    id: "k8s-cks-168",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Continuous Container Vulnerability Scanning with Clair",
    scenario: "An enterprise container registry integrates Clair to perform static vulnerability analysis of container image layers.",
    question: "How does Clair detect vulnerabilities across container image layers?",
    options: [
      { id: 'A', text: "Clair proxies the registry's pull traffic and matches each layer digest against a feed of known-bad layers" },
      { id: 'B', text: "Clair extracts the package metadata from each image layer and matches the versions against vulnerability databases" },
      { id: 'C', text: "Clair rebuilds the image from its Dockerfile and compares the resulting layers with the published manifest" },
      { id: 'D', text: "Clair runs the image in a sandbox and matches the syscalls it makes against known exploitation patterns" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Clair is a static container vulnerability analysis tool that parses container filesystem layers, identifies installed operating system packages, and matches package versions against regularly updated vulnerability databases from Ubuntu, Debian, Red Hat, and Alpine.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Clair", "Vulnerability-Scanning", "Registry", "Static-Analysis"]
  },
  {
    id: "k8s-cks-169",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Preventing Typosquatting in Third-Party Dependencies",
    scenario: "An attacker publishes a malicious package named <code>cross-envv</code> to a public registry, hoping developers will mistype the legitimate package name <code>cross-env</code> and install malware.",
    question: "Which supply chain security practice defends against dependency typosquatting and dependency confusion?",
    options: [
      { id: 'A', text: "Pin every dependency by version in the manifest and run the installer with the lockfile ignored" },
      { id: 'B', text: "Mirror the public registry nightly and let developers install from the mirror or from git URLs" },
      { id: 'C', text: "Proxy packages through a private repository with scoped namespaces, allow-lists and lockfile checks" },
      { id: 'D', text: "Run the dependency audit on each build and fail it when a package changes publisher" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Defending against typosquatting and dependency confusion requires routing package queries through an internal enterprise artifact repository proxy (Nexus, Artifactory) with strict namespace scoping (e.g., <code>@mycompany/*</code>), package approval allow-lists, and strict lockfile pinning.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Typosquatting", "Dependency-Confusion", "Supply-Chain", "Artifactory"]
  },
  {
    id: "k8s-cks-170",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Verifying Image Integrity with Content Trust (Notary v1)",
    scenario: "In older Docker environments, Docker Content Trust (DCT) is enabled to ensure only signed images can be pulled or run.",
    question: "Which environment variable enables Docker Content Trust on the command line?",
    options: [
      { id: 'A', text: "<code>export DOCKER_NOTARY_ACTIVE=true</code>" },
      { id: 'B', text: "<code>export DOCKER_VERIFY_IMAGES=true</code>" },
      { id: 'C', text: "<code>export DOCKER_CONTENT_TRUST=1</code>" },
      { id: 'D', text: "<code>export DOCKER_SIGNING_ENABLED=1</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting <code>export DOCKER_CONTENT_TRUST=1</code> instructs the Docker CLI to verify digital signatures for all pulled images using Notary v1. If an image is unsigned or the signature is invalid, the pull or run command is rejected.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Docker-Content-Trust", "Notary", "Image-Verification", "Integrity"]
  },
  {
    id: "k8s-cks-171",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Detecting Stale and Unmaintained Base Images in CI/CD",
    scenario: "A container image built 18 months ago has not been rebuilt, and its base operating system has accumulated dozens of unpatched critical security flaws.",
    question: "Which CI/CD strategy prevents unmaintained container images from persisting in production?",
    options: [
      { id: 'A', text: "Rescan the registry on a schedule and raise a ticket for each image that has aged out" },
      { id: 'B', text: "Add an admission policy that rejects images whose build date is older than 30 days" },
      { id: 'C', text: "Set <code>imagePullPolicy: Always</code> so the nodes refetch the tag on every pod start" },
      { id: 'D', text: "Rebuild on a schedule so the patched base image is pulled, rescanned, and rolled out" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Container images must be continuously maintained. Implementing automated recurring rebuild pipelines ensures images pull updated base OS patches, re-verify security baselines, and trigger automated canary deployments when upstream patches are available.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["CI-CD", "Patch-Management", "Continuous-Delivery", "Supply-Chain"]
  },
  {
    id: "k8s-cks-172",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Enforcing Non-Root Docker Builds with Microdnf / Yum",
    scenario: "When building an enterprise Red Hat UBI (Universal Base Image) container, the build process must install packages as root but ensure the final container runs as an unprivileged user.",
    question: "Which Dockerfile pattern achieves this in Red Hat UBI minimal containers?",
    options: [
      { id: 'A', text: "Install with <code>microdnf install</code> as root, then remove <code>/etc/passwd</code> from the image" },
      { id: 'B', text: "Install with <code>microdnf install && microdnf clean all</code> as root, then add <code>USER 1001</code>" },
      { id: 'C', text: "Install with <code>microdnf install</code> as root and leave <code>USER root</code> for the runtime" },
      { id: 'D', text: "Install with <code>microdnf install</code> after <code>USER 1001</code>, so nothing runs as root" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Red Hat UBI images, packages are installed during the build stage using <code>microdnf</code>, after which <code>microdnf clean all</code> removes package manager caches. The Dockerfile concludes by switching to an unprivileged user (e.g., <code>USER 1001</code>) so the container runtime starts as non-root.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["UBI", "microdnf", "Non-Root", "Dockerfile"]
  },
  {
    id: "k8s-cks-173",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Detecting Privilege Escalation Binaries via Trivy Configuration Scanning",
    scenario: "A security engineer runs <code>trivy config ./k8s-manifests/</code> against a directory of Kubernetes YAML files.",
    question: "What type of findings does Trivy config scanning identify in Kubernetes YAML files?",
    options: [
      { id: 'A', text: "Vulnerable OS packages and language dependencies in the images the manifests reference" },
      { id: 'B', text: "Drift between the committed manifests and the objects currently live in the cluster" },
      { id: 'C', text: "Secrets committed in plain text, matched against a set of credential patterns" },
      { id: 'D', text: "Misconfigurations: missing security contexts, root execution, unconfined seccomp, broad capabilities" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>trivy config</code> evaluates Kubernetes manifests, Helm charts, and Terraform files against CIS benchmarks and security standards, flagging configuration flaws like running as root, missing resource limits, or missing NetworkPolicies before deployment.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Trivy", "Misconfiguration", "Static-Analysis", "Shift-Left"]
  },
  {
    id: "k8s-cks-174",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Verifying Attestation Signatures in Rekor Transparency Log",
    scenario: "An auditor wants to independently verify that a specific container image signature was recorded in Sigstore's Rekor transparency ledger at build time.",
    question: "Which CLI tool allows querying the Rekor public ledger by artifact digest or UUID?",
    options: [
      { id: 'A', text: "<code>cosign verify --rekor-url &lt;url&gt; &lt;image&gt;</code> by digest" },
      { id: 'B', text: "<code>openssl ts -verify -in &lt;hash&gt;</code> against the ledger" },
      { id: 'C', text: "<code>rekor-cli search --sha &lt;hash&gt;</code>, or <code>get --log-index</code>" },
      { id: 'D', text: "<code>kubectl get transparencylog &lt;hash&gt;</code> in-cluster" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "<code>rekor-cli</code> provides direct access to the Sigstore Rekor transparency ledger. Using <code>rekor-cli search --sha &lt;hash&gt;</code> locates the immutable log entry confirming the exact timestamp and signature recorded for that container artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Rekor", "Transparency-Log", "Sigstore", "Audit"]
  },
  {
    id: "k8s-cks-175",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Hardening Multi-Stage Builds: Copying Artifacts Safely",
    scenario: "In a multi-stage Dockerfile, a developer writes: <code>COPY --from=builder /app/build /app</code>. However, the copied files are owned by root in the final container image.",
    question: "How should the <code>COPY</code> instruction be modified so the unprivileged user owns the copied application files?",
    options: [
      { id: 'A', text: "Mount <code>/app</code> as an emptyDir volume" },
      { id: 'B', text: "Specify <code>COPY --from=builder --chown=appuser:appgroup /app/build /app</code>" },
      { id: 'C', text: "Run <code>RUN chown -R appuser:appgroup /app</code> in a subsequent RUN layer" },
      { id: 'D', text: "Set <code>USER root</code> before running the application" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Using <code>COPY --chown=&lt;user&gt;:&lt;group&gt;</code> applies the correct unprivileged ownership directly during the file copy operation. Running <code>RUN chown -R</code> in a separate layer duplicates the file data in a new layer, needlessly inflating the container image size.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["COPY", "chown", "Dockerfile", "Multi-Stage-Build"]
  }
];

export default K8S_CKS_QUESTIONS_7;
