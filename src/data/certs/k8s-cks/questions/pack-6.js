export const K8S_CKS_QUESTIONS_6 = [
  {
    id: "k8s-cks-126",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Static Analysis of Kubernetes Manifests with Kubesec",
    scenario: "A DevSecOps engineer runs <code>kubesec scan deployment.yaml</code> against a proposed microservice manifest. The tool returns a negative score and highlights critical risks.",
    question: "Which set of findings in a manifest causes Kubesec to output severe negative scores?",
    options: [
      { id: 'A', text: "<code>runAsUser: 1000</code>, a seccomp profile, and an egress policy allowing only port 53" },
      { id: 'B', text: "<code>privileged: true</code>, <code>hostNetwork: true</code>, and <code>CAP_SYS_ADMIN</code>" },
      { id: 'C', text: "<code>readOnlyRootFilesystem: true</code>, declared resource requests, and declared limits" },
      { id: 'D', text: "An explicit namespace, a liveness probe, and a declared <code>serviceAccountName</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubesec scans Kubernetes manifests against security best practices, assigning positive scores for hardening controls (read-only root filesystem, drop ALL capabilities, non-root user) and heavy negative scores for insecure settings like <code>privileged: true</code>, <code>hostPID</code>, <code>hostNetwork</code>, <code>hostPath</code>, and dangerous capabilities like <code>CAP_SYS_ADMIN</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kubesec", "Static-Analysis", "Manifest-Hardening", "DevSecOps"]
  },
  {
    id: "k8s-cks-127",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Vulnerability Scanning in CI/CD Pipelines with Trivy",
    scenario: "A CI/CD pipeline builds a container image for an authentication service. The pipeline must automatically fail and abort deployment if the container contains any unpatched vulnerabilities with severity <code>CRITICAL</code> or <code>HIGH</code>.",
    question: "Which Trivy CLI invocation enforces this automated pipeline gate?",
    options: [
      { id: 'A', text: "Execute <code>trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image&gt;</code>" },
      { id: 'B', text: "Execute <code>trivy image --severity LOW,MEDIUM --exit-code 0 &lt;image-name&gt;</code>" },
      { id: 'C', text: "Execute <code>trivy k8s cluster --all-namespaces --report summary</code>" },
      { id: 'D', text: "Execute <code>trivy fs --format table /var/run/containerd.sock</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running <code>trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image&gt;</code> instructs Trivy to return exit code <code>1</code> if any HIGH or CRITICAL CVEs are discovered, causing the CI/CD pipeline runner to fail the build. Adding <code>--ignore-unfixed</code> prevents failing builds for vulnerabilities where vendor patches do not yet exist.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Trivy", "CI-CD", "Vulnerability-Scanning", "Pipeline-Security"]
  },
  {
    id: "k8s-cks-128",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Verifying Cryptographic Container Signatures with Cosign",
    scenario: "An organization signs all production container images using Sigstore Cosign. Before deploying a container image to Kubernetes, an automated script must verify that the image was signed with the company's public key.",
    question: "Which Cosign command verifies the cryptographic signature of a container image stored in a registry?",
    options: [
      { id: 'A', text: "Run <code>cosign sign --key cosign.key &lt;image&gt;:&lt;tag&gt;</code>" },
      { id: 'B', text: "Run <code>cosign verify --key cosign.pub &lt;image&gt;:&lt;tag&gt;</code>" },
      { id: 'C', text: "Run <code>cosign triangulate &lt;image&gt;:&lt;tag&gt;</code> and fetch it" },
      { id: 'D', text: "Run <code>cosign download signature &lt;image&gt;:&lt;tag&gt;</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>cosign verify --key &lt;public-key-file&gt; &lt;image&gt;</code> downloads the signature payload from the container registry and validates the cryptographic signature against the specified public key. If the signature is invalid, missing, or the image digest has been altered, the command exits with an error.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Cosign", "Sigstore", "Image-Signing", "Supply-Chain"]
  },
  {
    id: "k8s-cks-129",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Hardening Container Images with Multi-Stage Builds",
    scenario: "A Golang web microservice currently packages the Go compiler toolchain, git, curl, and build tools into its production container image, resulting in an image size of 950MB and over 120 CVEs.",
    question: "How does a multi-stage Dockerfile remediate these security and bloat issues?",
    options: [
      { id: 'A', text: "Compile in a builder stage and copy the binary plus its toolchain into an <code>alpine</code> final stage" },
      { id: 'B', text: "Compile in one stage with <code>--no-cache</code> on each <code>RUN</code>, so no build layer is kept in the image" },
      { id: 'C', text: "Compile in one stage on an <code>ubuntu</code> base and remove the compiler in the final <code>RUN</code> step" },
      { id: 'D', text: "Compile in a builder stage and copy only the binary into a minimal <code>distroless/static</code> final stage" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Multi-stage builds allow compiling the application in a heavy builder stage equipped with compilers and SDKs, and then copying only the resulting static binary into an ultra-minimal final runtime image (such as distroless or scratch). This eliminates compilers, package managers, and shells from the production container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Multi-Stage-Build", "Distroless", "Image-Hardening", "Minimal-Base"]
  },
  {
    id: "k8s-cks-130",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Dockerfile Linting with Hadolint",
    scenario: "A DevSecOps engineer runs <code>hadolint Dockerfile</code> against a development Dockerfile. The linter flags rule DL3008: 'Pin versions in apt get install'.",
    question: "Why does Hadolint recommend pinning package versions when installing packages in Dockerfiles?",
    options: [
      { id: 'A', text: "Pinning keeps builds reproducible and stops an upstream change slipping into the image unreviewed" },
      { id: 'B', text: "Pinning is required by the package manager, which refuses to install without an exact version" },
      { id: 'C', text: "Pinning lets the scanner match the installed set against advisories, which it cannot do otherwise" },
      { id: 'D', text: "Pinning lets the build verify each package's signature, which floating versions cannot support" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Hadolint rule DL3008 advises pinning package versions (e.g., <code>apt-get install -y nginx=1.24.0*</code>) to guarantee build reproducibility. Without version pinning, running <code>apt-get install</code> at different times can pull newer, untested library versions or introduce unreviewed upstream regressions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Hadolint", "Dockerfile", "Static-Analysis", "Best-Practices"]
  },
  {
    id: "k8s-cks-131",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Generating Software Bill of Materials (SBOM) with Syft",
    scenario: "A compliance framework mandates generating a complete software bill of materials (SBOM) in SPDX or CycloneDX format for every container image deployed to production.",
    question: "Which tool and command sequence generates an SPDX JSON SBOM for a container image?",
    options: [
      { id: 'A', text: "Execute <code>kubectl get pods -o spdx &gt; sbom.json</code>" },
      { id: 'B', text: "Execute <code>syft &lt;image-name&gt; -o spdx-json &gt; sbom.json</code>" },
      { id: 'C', text: "Execute <code>crictl images --format spdx &gt; sbom.json</code>" },
      { id: 'D', text: "Execute <code>kube-bench --output-sbom sbom.json</code>" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>syft</code> (developed by Anchore) inspects container images, filesystems, and archives to generate detailed inventories of all installed packages, operating system components, and language libraries in standardized formats such as <code>spdx-json</code> or <code>cyclonedx-json</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["SBOM", "Syft", "SPDX", "Supply-Chain"]
  },
  {
    id: "k8s-cks-132",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Continuous Vulnerability Scanning of SBOMs with Grype",
    scenario: "A security operations team wants to identify new vulnerabilities in previously deployed container images without pulling large multi-gigabyte container images from the registry every night.",
    question: "How can the team scan existing workloads efficiently using stored SBOM files?",
    options: [
      { id: 'A', text: "Run <code>grype sbom:sbom.json</code> over the stored SBOMs against the current advisory feed" },
      { id: 'B', text: "Run <code>trivy sbom sbom.json</code> after regenerating each SBOM from the running containers" },
      { id: 'C', text: "Run <code>trivy fs /</code> inside each running pod on a nightly schedule and collect the reports" },
      { id: 'D', text: "Run the image scanner over every tag in the registry and match the results to the workloads" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>grype</code> can scan SBOM files directly (<code>grype sbom:sbom.json</code>). Because an SBOM contains the complete package manifest, Grype matches it against freshly updated vulnerability databases in seconds without needing to download or unpack full container images.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Grype", "SBOM", "Vulnerability-Scanning", "Efficiency"]
  },
  {
    id: "k8s-cks-133",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Keyless Signing with Sigstore Cosign, Fulcio, and Rekor",
    scenario: "An enterprise wants to eliminate long-lived cryptographic private keys for container image signing, avoiding the risks of private key theft or key rotation management.",
    question: "How does keyless signing in Sigstore Cosign establish image authenticity?",
    options: [
      { id: 'A', text: "It takes an OIDC token from the CI job, gets a short-lived certificate from Fulcio, and logs the signature in Rekor" },
      { id: 'B', text: "It takes an OIDC token from the CI job and stores the resulting signature in the cluster as a ConfigMap entry" },
      { id: 'C', text: "It takes the registry credentials from the CI job and has the registry vouch for the identity that pushed the image" },
      { id: 'D', text: "It takes a hash of the image layers and records it in a transparency log without issuing any certificate at all" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sigstore keyless signing eliminates permanent private keys. The signer authenticates via OIDC; the Fulcio CA issues an ephemeral X.509 certificate valid for minutes; Cosign signs the image; and the signature transaction is logged to the Rekor transparency ledger, providing verifiable cryptographic proof of who signed the image and when.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Keyless-Signing", "Sigstore", "Fulcio", "Rekor"]
  },
  {
    id: "k8s-cks-134",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Enforcing Immutable Image Digests in Kubernetes Deployments",
    scenario: "A deployment manifest specifies <code>image: my-app:latest</code>. An attacker tampers with the image tag in the remote registry, replacing the legitimate container with malware.",
    question: "How should container image references be specified to guarantee that only the exact, tamper-proof bit-for-bit image is pulled?",
    options: [
      { id: 'A', text: "Pin the image by its immutable digest, as <code>image: my-app@sha256:7f83b165...</code>" },
      { id: 'B', text: "Pin the image by tag with <code>imagePullPolicy: Always</code> so the newest layer is fetched" },
      { id: 'C', text: "Pin the image by tag and enable the <code>AlwaysPullImages</code> admission plugin cluster-wide" },
      { id: 'D', text: "Pin the image by an exact semantic version tag, as <code>image: my-app:v1.2.3</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Image tags (like <code>:latest</code> or even <code>:v1.2.3</code>) are mutable pointers in container registries and can be overwritten. Referencing an image by its cryptographic SHA-256 digest (<code>image: &lt;name&gt;@sha256:&lt;hash&gt;</code>) guarantees immutability, ensuring the container runtime executes the exact verified image layers.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Image-Digest", "SHA256", "Immutability", "Supply-Chain"]
  },
  {
    id: "k8s-cks-135",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Eliminating Package Managers and Shells using Distroless Images",
    scenario: "An attacker exploits an arbitrary file upload bug in a Java web application. The attacker tries to spawn a reverse shell by invoking <code>/bin/sh</code> or downloading netcat using <code>apt-get</code> or <code>curl</code>.",
    question: "Why does packaging the Java application in a Google Distroless base image (<code>gcr.io/distroless/java17-debian12</code>) thwart this attack?",
    options: [
      { id: 'A', text: "Distroless images run each process under a seccomp profile that blocks the <code>execve</code> syscall outright" },
      { id: 'B', text: "Distroless images mount their root filesystem read-only, so a downloaded payload cannot be written anywhere" },
      { id: 'C', text: "Distroless images drop every Linux capability at build time, so a spawned process cannot open a socket" },
      { id: 'D', text: "Distroless images ship the application and its runtime only — no shell, no package manager, no Unix utilities" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Distroless images provide only the minimal runtime needed to execute the application binary (e.g., glibc, ca-certificates, and the language runtime). By removing shells, package managers, and coreutils, attackers cannot execute shell scripts, spawn interactive terminals, or install attacker payloads.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Distroless", "Attack-Surface", "Minimal-Images", "Defense-in-Depth"]
  },
  {
    id: "k8s-cks-136",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Scanning Kubernetes Infrastructure as Code (IaC) with Checkov",
    scenario: "A team uses Terraform and Helm to provision Kubernetes clusters and workloads. The security pipeline uses Checkov to scan IaC templates before applying them.",
    question: "Which capability differentiates Checkov from standard container image scanners like Trivy?",
    options: [
      { id: 'A', text: "Checkov analyses the running cluster's objects and reports the ones that drift from the committed manifests" },
      { id: 'B', text: "Checkov analyses image layers for vulnerable OS packages, which Trivy only does for language dependencies" },
      { id: 'C', text: "Checkov analyses the kernel's audit stream and maps each denied syscall back to the manifest that caused it" },
      { id: 'D', text: "Checkov analyses IaC — Terraform, Helm, Kubernetes YAML — for misconfiguration before anything is deployed" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Checkov is a static analysis tool for Infrastructure as Code (IaC). It analyzes declarative templates (Kubernetes manifests, Helm charts, Terraform) to detect security misconfigurations (e.g., missing network policies, root containers, open security groups) early in the development lifecycle (shift-left).",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Checkov", "IaC", "Static-Analysis", "Shift-Left"]
  },
  {
    id: "k8s-cks-137",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Stripping Setuid and Setgid Binaries in Container Builds",
    scenario: "A base operating system image contains utilities such as <code>passwd</code>, <code>chsh</code>, and <code>gpasswd</code> with the setuid bit set. If an unprivileged container process finds an exploit in one of these binaries, it can escalate to root.",
    question: "Which command in a Dockerfile safely strips setuid and setgid permissions from all binaries across the container filesystem?",
    options: [
      { id: 'A', text: "<code>RUN find /bin -type f -exec chmod 777 {} +</code>" },
      { id: 'B', text: "<code>RUN find / -perm -4000 -exec rm -f {} +</code>" },
      { id: 'C', text: "<code>RUN find / -perm /6000 -exec chmod a-s {} +</code>" },
      { id: 'D', text: "<code>RUN chown -R nobody:nogroup /usr/bin /bin</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Stripping setuid (mode 4000) and setgid (mode 2000) bits using <code>find / -perm -4000 -exec chmod a-s {} +</code> eliminates binaries that can escalate privileges when executed by unprivileged users, significantly hardening containers that cannot use <code>readOnlyRootFilesystem</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["setuid", "setgid", "Dockerfile", "Hardening"]
  },
  {
    id: "k8s-cks-138",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Enforcing Image Signing Policies with Kyverno",
    scenario: "A Kubernetes cluster must reject any Pod whose container image is not cryptographically signed by the corporate Cosign key.",
    question: "Which Kyverno <code>ClusterPolicy</code> rule pattern verifies image signatures before admitting pods?",
    options: [
      { id: 'A', text: "A <code>mutate</code> rule that rewrites the image to its digest and sets <code>imagePullPolicy: IfNotPresent</code>" },
      { id: 'B', text: "A <code>generate</code> rule that places the Cosign public key into the namespace for the kubelet to read" },
      { id: 'C', text: "A <code>validate</code> rule that matches <code>spec.containers[*].image</code> against an approved regex" },
      { id: 'D', text: "A <code>verifyImages</code> rule naming the repository pattern, its <code>attestors</code>, and <code>mutateDigest: true</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kyverno provides native image verification using the <code>verifyImages</code> rule block. It checks the signature against public keys or certificates specified under <code>attestors</code>. Setting <code>mutateDigest: true</code> automatically transforms mutable image tags into verified immutable SHA-256 digests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kyverno", "Cosign", "verifyImages", "Admission-Control"]
  },
  {
    id: "k8s-cks-139",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Detecting Hardcoded Secrets in Git and Manifests with Gitleaks",
    scenario: "Before pushing code to remote repositories, developers must ensure that API tokens, private SSH keys, and cloud credentials are not accidentally hardcoded into application source or Kubernetes YAML files.",
    question: "Which tool is specifically designed to scan git commits and files for hardcoded secrets using regex and entropy checks?",
    options: [
      { id: 'A', text: "Gitleaks (or Trufflehog)" },
      { id: 'B', text: "Kube-bench" },
      { id: 'C', text: "Falco" },
      { id: 'D', text: "CoreDNS" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>Gitleaks</code> is a dedicated secret-detection scanner that searches git repositories, commit history, and directories for exposed secrets, passwords, API keys, and certificates using regular expressions and Shannon entropy analysis.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Gitleaks", "Secret-Scanning", "Shift-Left", "DevSecOps"]
  },
  {
    id: "k8s-cks-140",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Configuring ImagePolicyWebhook Admission Controller",
    scenario: "A platform team wants the <code>kube-apiserver</code> to query an external image scanning backend before allowing any container image to be scheduled on the cluster.",
    question: "What is the role of the <code>ImagePolicyWebhook</code> admission controller plugin?",
    options: [
      { id: 'A', text: "It sends each new pod's image references to the registry and rebuilds any image whose base layer is outdated" },
      { id: 'B', text: "It pulls each new pod's image onto the control plane node and scans the layers before the pod is scheduled" },
      { id: 'C', text: "It rewrites each new pod's image references to the internal mirror and injects the matching pull secret" },
      { id: 'D', text: "It sends each new pod's image references to an external webhook and admits or rejects the pod on its verdict" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The <code>ImagePolicyWebhook</code> admission plugin enables the API server to consult an external HTTP webhook service before creating pods. The webhook evaluates the proposed image names and digests against enterprise policies (e.g., requiring zero critical CVEs or valid signatures) and returns an admit/reject decision.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ImagePolicyWebhook", "Admission-Control", "Supply-Chain", "kube-apiserver"]
  },
  {
    id: "k8s-cks-141",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Hardening Base Images: Alpine vs Distroless Security Trade-offs",
    scenario: "A team compares using Alpine Linux vs Google Distroless as the base image for Python and Node.js microservices.",
    question: "What security advantage does a Distroless image offer over an Alpine Linux base image?",
    options: [
      { id: 'A', text: "Alpine ships musl rather than glibc, so exploits compiled against the standard library fail to run at all" },
      { id: 'B', text: "Alpine ships a smaller kernel surface, whereas distroless images carry the full set of Debian security patches" },
      { id: 'C', text: "Alpine ships no package database, so a scanner cannot enumerate what is installed inside the image" },
      { id: 'D', text: "Alpine ships <code>apk</code> and a BusyBox shell that an attacker can use after a breach; distroless ships neither" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "While Alpine is lightweight (5MB), it contains BusyBox (providing <code>/bin/sh</code>, <code>wget</code>, <code>tar</code>, etc.) and the <code>apk</code> package manager. If an attacker gains command execution, they can download and install tools. Distroless omits shells and package managers entirely, denying attackers basic toolsets.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Alpine", "Distroless", "Attack-Surface", "Base-Images"]
  },
  {
    id: "k8s-cks-142",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Validating Manifests with Conftest and Open Policy Agent (OPA)",
    scenario: "An enterprise policy dictates that all Kubernetes manifests must declare CPU and memory limits, and must not mount hostPath volumes. The team enforces this in CI pipelines before deployment.",
    question: "Which tool allows writing custom declarative policies in Rego to validate Kubernetes YAML files locally?",
    options: [
      { id: 'A', text: "Kubeval, which checks the API schema" },
      { id: 'B', text: "Conftest, which runs OPA's Rego locally" },
      { id: 'C', text: "Kubesec, which scores the manifests" },
      { id: 'D', text: "Hadolint, which lints Dockerfiles" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>Conftest</code> is a command-line tool that uses the Rego policy language from Open Policy Agent (OPA) to write unit tests for structured configuration files (Kubernetes manifests, Terraform, Dockerfiles). Running <code>conftest test deployment.yaml</code> evaluates custom policies prior to deployment.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Conftest", "OPA", "Rego", "Static-Analysis"]
  },
  {
    id: "k8s-cks-143",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Mitigating Dockerfile Layer Caching Vulnerabilities",
    scenario: "A developer writes a Dockerfile containing:<br><code>RUN apt-get update</code><br><code>RUN apt-get install -y curl</code><br>In subsequent builds, changes to source code do not trigger <code>apt-get update</code>.",
    question: "What security problem results from splitting <code>apt-get update</code> and <code>apt-get install</code> into separate RUN commands?",
    options: [
      { id: 'A', text: "Docker reruns both layers on each build, so the image is rebuilt from scratch every time" },
      { id: 'B', text: "Docker reuses the cached <code>apt-get update</code> layer, so later builds install stale package versions" },
      { id: 'C', text: "Docker keeps the apt lists in the image, so the package database ships to production unused" },
      { id: 'D', text: "Docker cannot squash the two layers, so the resulting image carries the cache directory twice" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Splitting update and install into separate <code>RUN</code> instructions leads to cache busting issues. Docker caches the <code>apt-get update</code> layer; when new packages are added, Docker uses the stale index cache, potentially installing outdated packages. Best practice combines them: <code>RUN apt-get update && apt-get install -y ... && rm -rf /var/lib/apt/lists/*</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Dockerfile", "Layer-Caching", "Best-Practices", "Supply-Chain"]
  },
  {
    id: "k8s-cks-144",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Restricting Allowed Container Registries via Admission Policy",
    scenario: "To prevent unauthorized or untrusted images from running on production clusters, pods must only pull images from <code>registry.enterprise.com/apps/*</code>. Pulling from public registries like Docker Hub or Quay must be blocked.",
    question: "Which cluster admission mechanism reliably enforces allowed container registry domains?",
    options: [
      { id: 'A', text: "The <code>ImagePolicyWebhook</code> plugin with its backend defaulting to allow when unreachable" },
      { id: 'B', text: "An egress NetworkPolicy that blocks outbound HTTPS to every registry but the approved one" },
      { id: 'C', text: "A ValidatingAdmissionPolicy — or Gatekeeper / Kyverno rule — checking the image's domain prefix" },
      { id: 'D', text: "A Kyverno mutate rule that rewrites each image reference to the approved domain instead" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enforcing approved container registries requires an admission controller policy (native ValidatingAdmissionPolicy, Kyverno, or Gatekeeper). The policy inspects the image URL and rejects any manifest attempting to pull from unapproved or public repositories.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Allowed-Registries", "Kyverno", "Gatekeeper", "Supply-Chain"]
  },
  {
    id: "k8s-cks-145",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Verifying In-Toto Attestations for Build Provenance",
    scenario: "An enterprise must satisfy SLSA (Supply-chain Levels for Software Artifacts) Level 3 requirements by verifying that a container image was built on a certified GitHub Actions runner using an authorized repository workflow.",
    question: "Which cryptographic artifact provides tamper-proof build provenance linked to the container image?",
    options: [
      { id: 'A', text: "A build metadata ConfigMap holding the commit SHA and pipeline identifier for the image" },
      { id: 'B', text: "A checksum manifest published beside the image, listing the digest of each built layer" },
      { id: 'C', text: "A TLS certificate issued to the build service, presented when the image is pushed" },
      { id: 'D', text: "An in-toto attestation, signed with Cosign and recorded in Rekor, naming the builder and commit" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "in-toto attestations (such as SLSA provenance specifications) document the exact build environment, source commit, builder identity, and input dependencies. Signing this attestation with Cosign allows consumers to cryptographically verify build provenance before admitting images to production.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["in-toto", "SLSA", "Provenance", "Supply-Chain"]
  },
  {
    id: "k8s-cks-146",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Hardening Node.js Container Applications: Production Flag and Non-Root",
    scenario: "A Node.js web application is packaged for deployment in Kubernetes. Which Dockerfile instructions harden the runtime environment against common vulnerabilities?",
    question: "Which Dockerfile configuration correctly establishes a hardened Node.js container?",
    options: [
      { id: 'A', text: "Set <code>NODE_ENV=production</code>, install with <code>npm install</code> as root, then <code>USER node</code>" },
      { id: 'B', text: "Set <code>NODE_ENV=production</code>, install with <code>npm ci</code>, and start with <code>npm start</code>" },
      { id: 'C', text: "Set <code>NODE_ENV=production</code>, install with <code>npm ci --only=production</code>, then <code>USER node</code>" },
      { id: 'D', text: "Set <code>NODE_ENV=production</code> and mount <code>node_modules</code> from the host at runtime" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Setting <code>ENV NODE_ENV=production</code> disables debug tooling and enables framework optimizations; running <code>npm ci --only=production</code> eliminates test/development dependencies (and potential vulnerabilities); and switching to the unprivileged built-in <code>node</code> user (UID 1000) prevents root execution.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["NodeJS", "Dockerfile", "Non-Root", "Production-Hardening"]
  },
  {
    id: "k8s-cks-147",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Preventing Vulnerability Blindspots: Scanning Application Dependencies",
    scenario: "A container vulnerability scan reports zero operating system vulnerabilities, but the application was breached via a remote code execution flaw in an outdated Log4j or NPM dependency.",
    question: "Why did an OS package scan fail to detect this critical vulnerability?",
    options: [
      { id: 'A', text: "OS package scanners read only the image's final layer, so a dependency added in an earlier build stage is invisible" },
      { id: 'B', text: "OS package scanners read the distribution's package database and miss language dependencies unless language scanning is on" },
      { id: 'C', text: "OS package scanners match against the vendor's advisory feed, which carries no entries for application frameworks" },
      { id: 'D', text: "OS package scanners skip files the manifest marks as application data, which is where the shaded JAR was placed" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Many legacy vulnerability scanners only query the OS package manager database (e.g., <code>/var/lib/dpkg/status</code>). Modern supply chain security tools (Trivy, Syft, Grype) must be configured to perform comprehensive application dependency scanning across lockfiles (<code>package-lock.json</code>, <code>pom.xml</code>, <code>go.sum</code>) to detect vulnerable libraries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Dependency-Scanning", "Log4j", "SCA", "Supply-Chain"]
  },
  {
    id: "k8s-cks-148",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Automating Container Image Patching with Dependabot / Renovate",
    scenario: "A development team struggles to keep base container images and third-party dependencies updated with the latest security releases.",
    question: "Which automated dependency management tool opens automated pull requests when new base images or library patches are released?",
    options: [
      { id: 'A', text: "Cilium CNI" },
      { id: 'B', text: "Kube-bench" },
      { id: 'C', text: "Renovate or Dependabot" },
      { id: 'D', text: "AIDE" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Tools like <code>Renovate</code> and GitHub's <code>Dependabot</code> continuously monitor package registries and container registries. When new patched versions or updated base images are published, they automatically generate pull requests with changelogs and vulnerability references.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Dependabot", "Renovate", "Automation", "Patch-Management"]
  },
  {
    id: "k8s-cks-149",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Hardening Kube-Apiserver ImagePolicyWebhook Admission Configuration File",
    scenario: "An administrator configures the <code>ImagePolicyWebhook</code> admission plugin by creating an admission configuration file specified via <code>--admission-control-config-file</code>.",
    question: "What must be set under <code>defaultAllow</code> in the ImagePolicyWebhook configuration to ensure a fail-secure posture?",
    options: [
      { id: 'A', text: "Set <code>defaultAllow: false</code> and raise the webhook's retry budget so outages are ridden out" },
      { id: 'B', text: "Set <code>defaultAllow: audit</code>, so an unreachable backend records the pod and admits it" },
      { id: 'C', text: "Set <code>defaultAllow: false</code>, so an unreachable backend causes the pod to be rejected" },
      { id: 'D', text: "Set <code>defaultAllow: true</code>, so an unreachable backend does not block any deployments" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In an <code>ImagePolicyBackend</code> admission configuration, setting <code>defaultAllow: false</code> enforces a fail-closed (fail-secure) model: if the image policy webhook is unreachable or encounters an error, the API server rejects pod admission, preventing unverified images from running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ImagePolicyWebhook", "defaultAllow", "Fail-Secure", "Admission-Control"]
  },
  {
    id: "k8s-cks-150",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "Detecting Malicious Dockerfile Instructions with Hadolint: Untrusted Curl Piping",
    scenario: "A Dockerfile contains the line: <code>RUN curl -sSL https://get.example.com/install.sh | bash</code>. Hadolint flags rule DL4006.",
    question: "What security risk is introduced by piping unverified remote scripts directly into bash during container builds?",
    options: [
      { id: 'A', text: "A piped script cannot be cached as its own layer, so each rebuild fetches whatever upstream now serves" },
      { id: 'B', text: "A piped script runs before the build context is copied, so it cannot be reviewed alongside the source" },
      { id: 'C', text: "A piped script leaves its downloads in the layer, which inflates the final image by whatever it fetched" },
      { id: 'D', text: "A compromised server or transit path runs arbitrary code with root build privileges, with nothing verifying it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Piping untrusted URLs directly to <code>bash</code> (<code>curl | bash</code>) is a major supply chain hazard. An attacker performing a man-in-the-middle attack or compromising the CDN can inject arbitrary commands that execute with root privileges during the build. Best practice downloads the script, verifies its cryptographic hash, and inspects it prior to execution.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Hadolint", "Supply-Chain", "Dockerfile", "Remote-Code-Execution"]
  }
];

export default K8S_CKS_QUESTIONS_6;
