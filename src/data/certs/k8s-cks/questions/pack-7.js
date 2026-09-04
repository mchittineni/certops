export const K8S_CKS_QUESTIONS_7 = [
  {
    id: "k8s-cks-151",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Verifying Base Image Provenance with Cosign Keyless Verification",
    scenario: "A company requires that all base images must be verified as official Chainguard or Distroless images signed by their respective GitHub Actions workflows.",
    question: "Which Cosign command verifies an image signed using keyless OIDC against a specific GitHub workflow issuer and identity?",
    options: [
      { id: 'A', text: "Run <code>cosign verify --certificate-identity-regexp &lt;regex&gt; --certificate-oidc-issuer https://token.actions.githubusercontent.com &lt;image&gt;</code>" },
      { id: 'B', text: "Run <code>cosign verify --key local-rsa.pub &lt;image&gt;</code>" },
      { id: 'C', text: "Run <code>cosign check-oidc --issuer github.com &lt;image&gt;</code>" },
      { id: 'D', text: "Run <code>cosign sign --identity admin@enterprise.com &lt;image&gt;</code>" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Restricting Build-Time Secret Leakage in Docker Images",
    scenario: "A developer needs a GitHub private access token during <code>docker build</code> to pull proprietary internal libraries. If passed via <code>ARG GITHUB_TOKEN</code>, the token remains permanently visible in the image history (<code>docker history</code>).",
    question: "What is the secure method to provide build-time secrets using BuildKit without baking them into final container image layers?",
    options: [
      { id: 'A', text: "Use BuildKit secret mounts: <code>RUN --mount=type=secret,id=github_token ...</code> during build and invoke with <code>docker build --secret id=github_token,src=token.txt .</code>" },
      { id: 'B', text: "Define the secret in an <code>ENV</code> instruction and delete it with <code>RUN rm</code> in the next layer" },
      { id: 'C', text: "Store the token in <code>/tmp</code> and run <code>chmod 000 /tmp</code>" },
      { id: 'D', text: "Hardcode the token in a comment inside the Dockerfile" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Eliminating Sudo and Setuid from Container Images",
    scenario: "A security scan of a container image flags that <code>sudo</code> is installed inside the image, even though the application runs as an unprivileged user.",
    question: "What is the recommended remediation according to container security best practices?",
    options: [
      { id: 'A', text: "Uninstall and completely remove the <code>sudo</code> package from the container image during the build process" },
      { id: 'B', text: "Configure <code>sudoers</code> with <code>NOPASSWD: ALL</code> for the unprivileged user" },
      { id: 'C', text: "Change the password of the root account to a complex 64-character string" },
      { id: 'D', text: "Set <code>securityContext.privileged: false</code> in the pod spec" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>sudo</code> has no place inside production container images. Containers are meant to run as specific designated users. Retaining <code>sudo</code> leaves an unnecessary setuid binary that an attacker can exploit via local privilege escalation vulnerabilities (e.g., CVE-2021-3156 Baron Samedit).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["sudo", "setuid", "Image-Hardening", "Least-Privilege"]
  },
  {
    id: "k8s-cks-154",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Hardening Multi-Stage Builds: Non-Root Final Stage",
    scenario: "A developer writes a multi-stage Dockerfile that copies a Go binary into an alpine final image. However, when the container runs in Kubernetes, it executes as root.",
    question: "Which Dockerfile instruction in the final stage guarantees that the application process executes as an unprivileged user?",
    options: [
      { id: 'A', text: "Create an unprivileged user using <code>RUN addgroup -S appgroup && adduser -S appuser -G appgroup</code> and set <code>USER appuser</code> before the <code>ENTRYPOINT</code>" },
      { id: 'B', text: "Add <code>RUN chmod 755 /app</code>" },
      { id: 'C', text: "Set <code>ENV USER=appuser</code> in the builder stage" },
      { id: 'D', text: "Specify <code>WORKDIR /home/nobody</code> without a USER directive" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Detecting Vulnerabilities in Base Images using Trivy Ignore Files",
    scenario: "A development team needs to suppress specific known non-exploitable CVE alerts in Trivy during CI/CD builds while continuing to fail on all other HIGH and CRITICAL vulnerabilities.",
    question: "Which file allows configuring vulnerability exceptions with documented justifications?",
    options: [
      { id: 'A', text: "A <code>.trivyignore</code> file containing the CVE IDs and optional expiration dates/comments" },
      { id: 'B', text: "A <code>.gitignore</code> file containing CVE numbers" },
      { id: 'C', text: "A Kubernetes ConfigMap named <code>trivy-exemptions</code>" },
      { id: 'D', text: "A <code>#trivy:ignore</code> directive placed in the Dockerfile header" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Trivy supports a <code>.trivyignore</code> file (or <code>--ignorefile</code> flag) where security teams can list specific CVE identifiers to ignore, along with expiry dates and justifications. This allows suppressing acceptable risks without disabling automated gates for new vulnerabilities.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Trivy", ".trivyignore", "Vulnerability-Management", "CI-CD"]
  },
  {
    id: "k8s-cks-156",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Enforcing Digest-Only Image References via OPA Gatekeeper",
    scenario: "An enterprise requires that all pod deployments reference container images strictly by SHA-256 digest, rejecting any manifest that uses mutable tags like <code>latest</code> or semantic versions.",
    question: "Which Rego logic in a Gatekeeper ConstraintTemplate validates that an image contains a digest?",
    options: [
      { id: 'A', text: "Check that <code>input.review.object.metadata.namespace == 'production'</code>" },
      { id: 'B', text: "Check that <code>endswith(image, ':latest')</code> evaluates to true" },
      { id: 'C', text: "Verify that the image string starts with <code>https://</code>" },
      { id: 'D', text: "Check that <code>contains(image, '@sha256:')</code> evaluates to true for every container image in <code>input.review.object.spec.containers</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "To enforce immutable digests, Rego policy checks that every container image string includes the <code>@sha256:</code> substring (or matches a SHA-256 regex pattern). If a manifest uses a standard tag (e.g., <code>:v1.0</code>) without a digest, Gatekeeper denies the admission request.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Gatekeeper", "Rego", "SHA256", "Immutability"]
  },
  {
    id: "k8s-cks-157",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Verifying Container Image Layer Signatures with Notary Project (Notation)",
    scenario: "An organization adopts the CNCF Notary Project (Notation) and OCI specification for container image signing across OCI registries.",
    question: "What is the primary benefit of OCI-native image signatures supported by Notation?",
    options: [
      { id: 'A', text: "Notation executes within the Linux kernel to sign system calls" },
      { id: 'B', text: "Signatures replace the container root filesystem with an encrypted archive" },
      { id: 'C', text: "Signatures and attestations are stored as standard OCI artifacts directly in the container registry alongside the image manifest, enabling cross-registry replication without external signature databases" },
      { id: 'D', text: "Notation eliminates the need for X.509 public key certificates" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Detecting Shellshock and Environment Variable Injection in Base Images",
    scenario: "A legacy container image relies on an ancient version of GNU Bash vulnerable to Shellshock (CVE-2014-6271), allowing code execution via crafted environment variables.",
    question: "Which security measure best mitigates environment variable injection attacks in containerized applications?",
    options: [
      { id: 'A', text: "Run containers with <code>securityContext.privileged: true</code>" },
      { id: 'B', text: "Configure <code>hostIPC: true</code> in the pod specification" },
      { id: 'C', text: "Migrate workloads to Distroless base images that eliminate Bash and shell interpreters entirely" },
      { id: 'D', text: "Encrypt all environment variables using base64 before passing them to the pod" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Eliminating shell interpreters (Bash, sh) by migrating to minimal Distroless images removes the attack surface for shell interpreter vulnerabilities (such as Shellshock), ensuring that environment variables cannot be evaluated as executable code by rogue child processes.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Shellshock", "Distroless", "Environment-Variables", "Vulnerabilities"]
  },
  {
    id: "k8s-cks-159",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Hardening Helm Charts: Linting with Chart-Testing and Kubesec",
    scenario: "A platform team manages 50 internal Helm charts. Before releasing charts to the enterprise catalog, charts must be tested for syntax errors and security policy adherence.",
    question: "Which toolchain automates Helm chart rendering and security validation?",
    options: [
      { id: 'A', text: "Run <code>helm lint</code> followed by <code>helm template</code> piped into <code>kubesec scan</code> or <code>checkov</code>" },
      { id: 'B', text: "Run <code>etcdctl check perf</code> on the Helm repository host" },
      { id: 'C', text: "Run <code>helm install --dry-run</code> on the production cluster control plane" },
      { id: 'D', text: "Upload charts directly to Docker Hub without validation" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Restricting Container Image Tags: Banning Mutable Tags in Production",
    scenario: "A production cluster policy requires banning mutable tags like <code>:latest</code>, <code>:master</code>, and <code>:dev</code> to ensure deployment predictability and auditability.",
    question: "Which Kyverno policy rule rejects pods referencing mutable tags?",
    options: [
      { id: 'A', text: "A <code>validate</code> pattern requiring <code>spec.containers[*].image: '!*:latest & !*:master & !*:dev'</code>" },
      { id: 'B', text: "A <code>mutate</code> rule that automatically renames <code>:latest</code> to <code>:v1.0.0</code>" },
      { id: 'C', text: "A <code>generate</code> rule that creates a default NetworkPolicy for tagged images" },
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Securing Container Registries with Role-Based Access Control",
    scenario: "An enterprise registry contains both base infrastructure images and mission-critical payment services. Developers should be able to push to feature repositories, but only automated CI runners should be able to push to production repositories.",
    question: "Which access control practice prevents unauthorized developers from pushing modified images to production repositories?",
    options: [
      { id: 'A', text: "Disable authentication on the container registry and use IP whitelisting" },
      { id: 'B', text: "Store registry passwords in a public GitHub repository" },
      { id: 'C', text: "Share the registry administrator password with all senior developers" },
      { id: 'D', text: "Enforce granular registry RBAC with dedicated robot accounts for CI/CD pipelines granting write access only to verified build runners, with human developers restricted to read-only permissions on production repos" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Securing the software supply chain requires that only authenticated, automated CI/CD build pipelines (using dedicated machine/robot tokens) have write access to release repositories. Developers must be restricted to read-only access, preventing malicious or accidental pushes of unverified images.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Registry-Security", "RBAC", "Supply-Chain", "Robot-Accounts"]
  },
  {
    id: "k8s-cks-162",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Validating Dockerfile Best Practices: Avoiding Root USER Directive",
    scenario: "A security audit using Hadolint reports violation DL3002: 'Last USER should not be root'.",
    question: "Why is ending a Dockerfile with <code>USER root</code> or omitting the <code>USER</code> instruction dangerous?",
    options: [
      { id: 'A', text: "The image size increases by 500MB" },
      { id: 'B', text: "Root containers cannot communicate across Kubernetes NetworkPolicies" },
      { id: 'C', text: "The Docker build daemon refuses to produce an image artifact" },
      { id: 'D', text: "The container runtime will execute the application process with root UID 0 by default, increasing the blast radius and potential for container escape if the application is compromised" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Scanning Git Repositories for Secrets with Trufflehog",
    scenario: "A security team performs a historical audit of an enterprise git repository to verify if database credentials were ever committed in past git branches or commits.",
    question: "Which tool searches the entire commit history of a git repository to identify high-entropy secrets and verified API keys?",
    options: [
      { id: 'A', text: "Trufflehog" },
      { id: 'B', text: "AppArmor" },
      { id: 'C', text: "Kube-bench" },
      { id: 'D', text: "Crictl" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>Trufflehog</code> scans git commit history, branches, and diffs to discover high-entropy strings and credentials, and can actively verify credentials against live APIs (e.g., verifying if an AWS or Slack key is still active).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Trufflehog", "Secret-Scanning", "Git-History", "DevSecOps"]
  },
  {
    id: "k8s-cks-164",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Preventing Supply Chain Attacks via Package Lockfile Integrity",
    scenario: "A malicious actor compromises an upstream package maintainer's account and publishes a poisoned patch release of an NPM library.",
    question: "How do package lockfiles (e.g., <code>package-lock.json</code>, <code>yarn.lock</code>) defend against unauthorized upstream package tampering?",
    options: [
      { id: 'A', text: "They automatically block all outbound container network traffic" },
      { id: 'B', text: "They encrypt application source code using AES-256" },
      { id: 'C', text: "They record the exact package version and cryptographic SHA-512 integrity hashes of downloaded packages; installing with <code>npm ci</code> verifies package hashes and rejects tampered artifacts" },
      { id: 'D', text: "They compile JavaScript source into C++ binaries before build" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Package lockfiles record the exact resolved versions and cryptographic integrity hashes (e.g., SHA-512) for all direct and transitive dependencies. Running <code>npm ci</code> verifies downloaded packages against the recorded integrity hashes, detecting tampered or altered upstream packages.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Lockfiles", "npm-ci", "Integrity", "Supply-Chain"]
  },
  {
    id: "k8s-cks-165",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Enforcing Container Image Signing with Connaisseur Admission Controller",
    scenario: "A team deploys Connaisseur as a Kubernetes admission controller to verify Cosign and Notary image signatures before pods are allowed to start.",
    question: "How does Connaisseur integrate into the Kubernetes control plane to enforce signing policies?",
    options: [
      { id: 'A', text: "It operates as a <code>ValidatingWebhookConfiguration</code> that intercepts Pod creation requests, validates image signatures against configured public keys, and admits or rejects the pod accordingly" },
      { id: 'B', text: "It runs as an external cron job that deletes running pods every hour" },
      { id: 'C', text: "It runs as a kernel module on all worker nodes" },
      { id: 'D', text: "It modifies the <code>kube-scheduler</code> algorithm to ignore unsigned pods" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Connaisseur is an admission controller that registers as a <code>ValidatingAdmissionWebhook</code>. It intercepts incoming pod creation and update requests from <code>kube-apiserver</code>, verifies that images are signed and unaltered using Cosign or Notary, and returns an admission denial if signatures are invalid.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Connaisseur", "Admission-Webhook", "Image-Verification", "Cosign"]
  },
  {
    id: "k8s-cks-166",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Minimizing Attack Surface: Removing Package Manager Caches",
    scenario: "A developer runs <code>apt-get install -y nginx</code> in a Dockerfile layer, leaving several hundred megabytes of package indices in <code>/var/lib/apt/lists/</code>.",
    question: "Which combined command pattern installs packages cleanly and minimizes both layer size and residual attack surface?",
    options: [
      { id: 'A', text: "<code>RUN apt-get install nginx && apt-get clean</code>" },
      { id: 'B', text: "<code>RUN apt-get update && apt-get install -y --no-install-recommends nginx && rm -rf /var/lib/apt/lists/*</code>" },
      { id: 'C', text: "<code>RUN apt-get update</code> followed by a separate <code>RUN rm -rf /var/lib/apt/lists/*</code>" },
      { id: 'D', text: "<code>RUN apt-get update && apt-get install nginx</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Docker, each <code>RUN</code> statement creates an immutable layer. To ensure package lists are not saved into the image layer, <code>apt-get update</code>, <code>apt-get install --no-install-recommends</code>, and <code>rm -rf /var/lib/apt/lists/*</code> must be executed in a single instruction joined with <code>&&</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Dockerfile", "Layer-Optimization", "Attack-Surface", "Best-Practices"]
  },
  {
    id: "k8s-cks-167",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Validating Dockerfile Base Images: Distroless Non-Root User Execution",
    scenario: "A team builds an application using Google Distroless base image <code>gcr.io/distroless/static-debian12:nonroot</code>. What user UID does this image execute as by default?",
    question: "Which UID is assigned to the <code>nonroot</code> user in Distroless images?",
    options: [
      { id: 'A', text: "UID 65532" },
      { id: 'B', text: "UID 0" },
      { id: 'C', text: "UID 65534 (nobody)" },
      { id: 'D', text: "UID 1000" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>:nonroot</code> variants of Google Distroless images include an unprivileged user named <code>nonroot</code> with UID and GID <code>65532</code>. By default, containers running these images execute as UID 65532, satisfying Kubernetes non-root security requirements out of the box.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Distroless", "Non-Root", "UID-65532", "Base-Images"]
  },
  {
    id: "k8s-cks-168",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Continuous Container Vulnerability Scanning with Clair",
    scenario: "An enterprise container registry integrates Clair to perform static vulnerability analysis of container image layers.",
    question: "How does Clair detect vulnerabilities across container image layers?",
    options: [
      { id: 'A', text: "Clair inspects the filesystem layers of the container image, extracts package metadata, and matches installed package versions against known vulnerability databases (such as CVE databases and vendor security advisories)" },
      { id: 'B', text: "Clair executes the container in a virtual sandbox and observes runtime system calls" },
      { id: 'C', text: "Clair intercepts network traffic between the container registry and worker nodes" },
      { id: 'D', text: "Clair decrypts container binaries using private hardware keys" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Clair is a static container vulnerability analysis tool that parses container filesystem layers, identifies installed operating system packages, and matches package versions against regularly updated vulnerability databases from Ubuntu, Debian, Red Hat, and Alpine.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Clair", "Vulnerability-Scanning", "Registry", "Static-Analysis"]
  },
  {
    id: "k8s-cks-169",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Preventing Typosquatting in Third-Party Dependencies",
    scenario: "An attacker publishes a malicious package named <code>cross-envv</code> to a public registry, hoping developers will mistype the legitimate package name <code>cross-env</code> and install malware.",
    question: "Which supply chain security practice defends against dependency typosquatting and dependency confusion?",
    options: [
      { id: 'A', text: "Use private enterprise package repository proxies (e.g., Nexus, Artifactory) with scoped package namespaces, strict allow-lists, and lockfile integrity verification" },
      { id: 'B', text: "Disable network firewalls during dependency installation" },
      { id: 'C', text: "Run <code>npm install --force</code> in CI/CD pipelines" },
      { id: 'D', text: "Permit developers to install packages directly from untrusted public git repositories" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Defending against typosquatting and dependency confusion requires routing package queries through an internal enterprise artifact repository proxy (Nexus, Artifactory) with strict namespace scoping (e.g., <code>@mycompany/*</code>), package approval allow-lists, and strict lockfile pinning.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Typosquatting", "Dependency-Confusion", "Supply-Chain", "Artifactory"]
  },
  {
    id: "k8s-cks-170",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Verifying Image Integrity with Content Trust (Notary v1)",
    scenario: "In older Docker environments, Docker Content Trust (DCT) is enabled to ensure only signed images can be pulled or run.",
    question: "Which environment variable enables Docker Content Trust on the command line?",
    options: [
      { id: 'A', text: "<code>export DOCKER_SIGNING_ENABLED=1</code>" },
      { id: 'B', text: "<code>export DOCKER_VERIFY_IMAGES=true</code>" },
      { id: 'C', text: "<code>export DOCKER_NOTARY_ACTIVE=true</code>" },
      { id: 'D', text: "<code>export DOCKER_CONTENT_TRUST=1</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Setting <code>export DOCKER_CONTENT_TRUST=1</code> instructs the Docker CLI to verify digital signatures for all pulled images using Notary v1. If an image is unsigned or the signature is invalid, the pull or run command is rejected.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Docker-Content-Trust", "Notary", "Image-Verification", "Integrity"]
  },
  {
    id: "k8s-cks-171",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Detecting Stale and Unmaintained Base Images in CI/CD",
    scenario: "A container image built 18 months ago has not been rebuilt, and its base operating system has accumulated dozens of unpatched critical security flaws.",
    question: "Which CI/CD strategy prevents unmaintained container images from persisting in production?",
    options: [
      { id: 'A', text: "Hardcode container images to <code>imagePullPolicy: Never</code>" },
      { id: 'B', text: "Disable automated scanning to avoid alert fatigue" },
      { id: 'C', text: "Deploy an admission controller that rejects pods older than 24 hours" },
      { id: 'D', text: "Schedule automated daily or weekly CI/CD pipeline builds that pull latest patched base images, re-run vulnerability scans, and trigger rolling cluster deployments" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Enforcing Non-Root Docker Builds with Microdnf / Yum",
    scenario: "When building an enterprise Red Hat UBI (Universal Base Image) container, the build process must install packages as root but ensure the final container runs as an unprivileged user.",
    question: "Which Dockerfile pattern achieves this in Red Hat UBI minimal containers?",
    options: [
      { id: 'A', text: "Delete <code>/etc/passwd</code> after installing packages" },
      { id: 'B', text: "Run <code>microdnf install</code> as user 1001 without granting root access" },
      { id: 'C', text: "Run <code>microdnf install -y ... && microdnf clean all</code> as root, and then add <code>USER 1001</code> before the final command" },
      { id: 'D', text: "Leave <code>USER root</code> active and set <code>chmod 777 /</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Red Hat UBI images, packages are installed during the build stage using <code>microdnf</code>, after which <code>microdnf clean all</code> removes package manager caches. The Dockerfile concludes by switching to an unprivileged user (e.g., <code>USER 1001</code>) so the container runtime starts as non-root.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["UBI", "microdnf", "Non-Root", "Dockerfile"]
  },
  {
    id: "k8s-cks-173",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Detecting Privilege Escalation Binaries via Trivy Configuration Scanning",
    scenario: "A security engineer runs <code>trivy config ./k8s-manifests/</code> against a directory of Kubernetes YAML files.",
    question: "What type of findings does Trivy config scanning identify in Kubernetes YAML files?",
    options: [
      { id: 'A', text: "DNS latency between cluster pods" },
      { id: 'B', text: "Security misconfigurations such as missing securityContexts, root execution, unconfined seccomp profiles, and permissive capabilities" },
      { id: 'C', text: "CVEs in operating system packages" },
      { id: 'D', text: "Hardware failures on physical worker nodes" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>trivy config</code> evaluates Kubernetes manifests, Helm charts, and Terraform files against CIS benchmarks and security standards, flagging configuration flaws like running as root, missing resource limits, or missing NetworkPolicies before deployment.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Trivy", "Misconfiguration", "Static-Analysis", "Shift-Left"]
  },
  {
    id: "k8s-cks-174",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Verifying Attestation Signatures in Rekor Transparency Log",
    scenario: "An auditor wants to independently verify that a specific container image signature was recorded in Sigstore's Rekor transparency ledger at build time.",
    question: "Which CLI tool allows querying the Rekor public ledger by artifact digest or UUID?",
    options: [
      { id: 'A', text: "<code>kubectl get rekor &lt;hash&gt;</code>" },
      { id: 'B', text: "<code>crictl inspect &lt;hash&gt;</code>" },
      { id: 'C', text: "<code>openssl verify -rekor &lt;hash&gt;</code>" },
      { id: 'D', text: "<code>rekor-cli get --log-index &lt;index&gt;</code> or <code>rekor-cli search --sha &lt;hash&gt;</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>rekor-cli</code> provides direct access to the Sigstore Rekor transparency ledger. Using <code>rekor-cli search --sha &lt;hash&gt;</code> locates the immutable log entry confirming the exact timestamp and signature recorded for that container artifact.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Rekor", "Transparency-Log", "Sigstore", "Audit"]
  },
  {
    id: "k8s-cks-175",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Hardening Multi-Stage Builds: Copying Artifacts Safely",
    scenario: "In a multi-stage Dockerfile, a developer writes: <code>COPY --from=builder /app/build /app</code>. However, the copied files are owned by root in the final container image.",
    question: "How should the <code>COPY</code> instruction be modified so the unprivileged user owns the copied application files?",
    options: [
      { id: 'A', text: "Run <code>RUN chown -R appuser:appgroup /app</code> in a subsequent RUN layer" },
      { id: 'B', text: "Specify <code>COPY --from=builder --chown=appuser:appgroup /app/build /app</code>" },
      { id: 'C', text: "Mount <code>/app</code> as an emptyDir volume" },
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
