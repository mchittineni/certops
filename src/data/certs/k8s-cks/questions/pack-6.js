export const K8S_CKS_QUESTIONS_6 = [
  {
    id: "k8s-cks-126",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Static Analysis of Kubernetes Manifests with Kubesec",
    scenario: "A DevSecOps engineer runs <code>kubesec scan deployment.yaml</code> against a proposed microservice manifest. The tool returns a negative score and highlights critical risks.",
    question: "Which set of findings in a manifest causes Kubesec to output severe negative scores?",
    options: [
      { id: 'A', text: "Setting <code>privileged: true</code>, declaring <code>hostNetwork: true</code>, mounting host directories via <code>hostPath</code>, and adding <code>CAP_SYS_ADMIN</code>" },
      { id: 'B', text: "Setting <code>readOnlyRootFilesystem: true</code> and declaring resource requests and limits" },
      { id: 'C', text: "Specifying an explicit namespace and configuring a liveness probe" },
      { id: 'D', text: "Configuring an egress NetworkPolicy with DNS port 53 allowed" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubesec scans Kubernetes manifests against security best practices, assigning positive scores for hardening controls (read-only root filesystem, drop ALL capabilities, non-root user) and heavy negative scores for insecure settings like <code>privileged: true</code>, <code>hostPID</code>, <code>hostNetwork</code>, <code>hostPath</code>, and dangerous capabilities like <code>CAP_SYS_ADMIN</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kubesec", "Static-Analysis", "Manifest-Hardening", "DevSecOps"]
  },
  {
    id: "k8s-cks-127",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Vulnerability Scanning in CI/CD Pipelines with Trivy",
    scenario: "A CI/CD pipeline builds a container image for an authentication service. The pipeline must automatically fail and abort deployment if the container contains any unpatched vulnerabilities with severity <code>CRITICAL</code> or <code>HIGH</code>.",
    question: "Which Trivy CLI invocation enforces this automated pipeline gate?",
    options: [
      { id: 'A', text: "Execute <code>trivy image --severity HIGH,CRITICAL --exit-code 1 --ignore-unfixed &lt;image-name&gt;</code>" },
      { id: 'B', text: "Execute <code>trivy image --severity LOW,MEDIUM --exit-code 0 &lt;image-name&gt;</code>" },
      { id: 'C', text: "Execute <code>trivy fs --format table /var/run/docker.sock</code>" },
      { id: 'D', text: "Execute <code>trivy k8s cluster --all-namespaces</code>" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Verifying Cryptographic Container Signatures with Cosign",
    scenario: "An organization signs all production container images using Sigstore Cosign. Before deploying a container image to Kubernetes, an automated script must verify that the image was signed with the company's public key.",
    question: "Which Cosign command verifies the cryptographic signature of a container image stored in a registry?",
    options: [
      { id: 'A', text: "Execute <code>cosign sign --key cosign.key &lt;image&gt;</code>" },
      { id: 'B', text: "Execute <code>cosign triangulate --verify &lt;image&gt;</code>" },
      { id: 'C', text: "Execute <code>cosign generate-key-pair &lt;image&gt;</code>" },
      { id: 'D', text: "Execute <code>cosign verify --key cosign.pub &lt;registry-url&gt;/&lt;image&gt;:&lt;tag&gt;</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>cosign verify --key &lt;public-key-file&gt; &lt;image&gt;</code> downloads the signature payload from the container registry and validates the cryptographic signature against the specified public key. If the signature is invalid, missing, or the image digest has been altered, the command exits with an error.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Cosign", "Sigstore", "Image-Signing", "Supply-Chain"]
  },
  {
    id: "k8s-cks-129",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Hardening Container Images with Multi-Stage Builds",
    scenario: "A Golang web microservice currently packages the Go compiler toolchain, git, curl, and build tools into its production container image, resulting in an image size of 950MB and over 120 CVEs.",
    question: "How does a multi-stage Dockerfile remediate these security and bloat issues?",
    options: [
      { id: 'A', text: "Build the application binary in a temporary builder stage (<code>FROM golang:1.22 AS builder</code>) and copy only the compiled executable into a minimal final stage (<code>FROM gcr.io/distroless/static-debian12</code>)" },
      { id: 'B', text: "Run <code>RUN apt-get update && apt-get install golang</code> inside an Ubuntu base image" },
      { id: 'C', text: "Set <code>USER root</code> in the final layer to strip unnecessary libraries" },
      { id: 'D', text: "Add <code>--no-cache</code> to every RUN command inside a single build stage" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Multi-stage builds allow compiling the application in a heavy builder stage equipped with compilers and SDKs, and then copying only the resulting static binary into an ultra-minimal final runtime image (such as distroless or scratch). This eliminates compilers, package managers, and shells from the production container.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Multi-Stage-Build", "Distroless", "Image-Hardening", "Minimal-Base"]
  },
  {
    id: "k8s-cks-130",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Dockerfile Linting with Hadolint",
    scenario: "A DevSecOps engineer runs <code>hadolint Dockerfile</code> against a development Dockerfile. The linter flags rule DL3008: 'Pin versions in apt get install'.",
    question: "Why does Hadolint recommend pinning package versions when installing packages in Dockerfiles?",
    options: [
      { id: 'A', text: "Pinning package versions is required by the Linux kernel to execute setuid binaries" },
      { id: 'B', text: "Pinning package versions ensures deterministic, reproducible builds and prevents unexpected breaking changes or unverified upstream package updates from silently slipping into images" },
      { id: 'C', text: "Pinning package versions automatically encrypts the installed binaries with TLS" },
      { id: 'D', text: "Package managers refuse to execute unless an exact version string is specified" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Hadolint rule DL3008 advises pinning package versions (e.g., <code>apt-get install -y nginx=1.24.0*</code>) to guarantee build reproducibility. Without version pinning, running <code>apt-get install</code> at different times can pull newer, untested library versions or introduce unreviewed upstream regressions.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Hadolint", "Dockerfile", "Static-Analysis", "Best-Practices"]
  },
  {
    id: "k8s-cks-131",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Generating Software Bill of Materials (SBOM) with Syft",
    scenario: "A compliance framework mandates generating a complete software bill of materials (SBOM) in SPDX or CycloneDX format for every container image deployed to production.",
    question: "Which tool and command sequence generates an SPDX JSON SBOM for a container image?",
    options: [
      { id: 'A', text: "Execute <code>kubectl get pods -o spdx &gt; sbom.json</code>" },
      { id: 'B', text: "Execute <code>kube-bench --output-sbom sbom.json</code>" },
      { id: 'C', text: "Execute <code>crictl images --format spdx &gt; sbom.json</code>" },
      { id: 'D', text: "Execute <code>syft &lt;image-name&gt; -o spdx-json &gt; sbom.json</code>" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "<code>syft</code> (developed by Anchore) inspects container images, filesystems, and archives to generate detailed inventories of all installed packages, operating system components, and language libraries in standardized formats such as <code>spdx-json</code> or <code>cyclonedx-json</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["SBOM", "Syft", "SPDX", "Supply-Chain"]
  },
  {
    id: "k8s-cks-132",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Continuous Vulnerability Scanning of SBOMs with Grype",
    scenario: "A security operations team wants to identify new vulnerabilities in previously deployed container images without pulling large multi-gigabyte container images from the registry every night.",
    question: "How can the team scan existing workloads efficiently using stored SBOM files?",
    options: [
      { id: 'A', text: "Run <code>grype sbom:sbom.json</code> against stored SBOM files to instantly match package inventories against the latest vulnerability databases" },
      { id: 'B', text: "Rebuild the container images from scratch and run Docker scout" },
      { id: 'C', text: "Execute <code>trivy fs /</code> inside every running pod every midnight" },
      { id: 'D', text: "Run <code>apparmor_parser --scan sbom.json</code> on all worker nodes" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Keyless Signing with Sigstore Cosign, Fulcio, and Rekor",
    scenario: "An enterprise wants to eliminate long-lived cryptographic private keys for container image signing, avoiding the risks of private key theft or key rotation management.",
    question: "How does keyless signing in Sigstore Cosign establish image authenticity?",
    options: [
      { id: 'A', text: "Cosign uses an OIDC identity token from the CI/CD pipeline (e.g., GitHub Actions), obtains an ephemeral short-lived X.509 certificate from Fulcio, and records the signature in Rekor's tamper-evident transparency log" },
      { id: 'B', text: "Cosign stores plaintext image hashes in a shared Kubernetes ConfigMap" },
      { id: 'C', text: "Cosign calculates a MD5 checksum of the image layers and emails it to the cluster administrator" },
      { id: 'D', text: "Cosign relies on Docker Hub password authentication to verify image ownership" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Enforcing Immutable Image Digests in Kubernetes Deployments",
    scenario: "A deployment manifest specifies <code>image: my-app:latest</code>. An attacker tampers with the image tag in the remote registry, replacing the legitimate container with malware.",
    question: "How should container image references be specified to guarantee that only the exact, tamper-proof bit-for-bit image is pulled?",
    options: [
      { id: 'A', text: "Pin the container image by its immutable SHA-256 digest: <code>image: my-app@sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069</code>" },
      { id: 'B', text: "Specify <code>imagePullPolicy: Always</code> with the <code>:latest</code> tag" },
      { id: 'C', text: "Use semantic version tags such as <code>image: my-app:v1.2.3</code> without a digest" },
      { id: 'D', text: "Set <code>securityContext.readOnlyRootFilesystem: true</code> on the deployment" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Eliminating Package Managers and Shells using Distroless Images",
    scenario: "An attacker exploits an arbitrary file upload bug in a Java web application. The attacker tries to spawn a reverse shell by invoking <code>/bin/sh</code> or downloading netcat using <code>apt-get</code> or <code>curl</code>.",
    question: "Why does packaging the Java application in a Google Distroless base image (<code>gcr.io/distroless/java17-debian12</code>) thwart this attack?",
    options: [
      { id: 'A', text: "Distroless images contain strictly the application and its minimal runtime dependencies; they contain no shells (<code>sh</code>, <code>bash</code>), no package managers (<code>apt</code>, <code>dpkg</code>), and no standard Unix utilities (<code>curl</code>, <code>wget</code>)" },
      { id: 'B', text: "Distroless images automatically kill any process that receives incoming HTTP traffic" },
      { id: 'C', text: "Distroless images run all applications inside a hardware hypervisor sandbox" },
      { id: 'D', text: "Distroless images encrypt all container memory using the node's TPM chip" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Distroless images provide only the minimal runtime needed to execute the application binary (e.g., glibc, ca-certificates, and the language runtime). By removing shells, package managers, and coreutils, attackers cannot execute shell scripts, spawn interactive terminals, or install attacker payloads.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Distroless", "Attack-Surface", "Minimal-Images", "Defense-in-Depth"]
  },
  {
    id: "k8s-cks-136",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Scanning Kubernetes Infrastructure as Code (IaC) with Checkov",
    scenario: "A team uses Terraform and Helm to provision Kubernetes clusters and workloads. The security pipeline uses Checkov to scan IaC templates before applying them.",
    question: "Which capability differentiates Checkov from standard container image scanners like Trivy?",
    options: [
      { id: 'A', text: "Checkov intercepts network packets at the eBPF layer to block DDoS attacks" },
      { id: 'B', text: "Checkov replaces the Linux kernel seccomp filter on worker nodes" },
      { id: 'C', text: "Checkov scans running worker node memory for active malware rootkits" },
      { id: 'D', text: "Checkov performs static policy analysis on IaC templates (Terraform, CloudFormation, Helm, Kubernetes YAML) to detect misconfigurations, excessive permissions, and compliance violations prior to infrastructure deployment" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Stripping Setuid and Setgid Binaries in Container Builds",
    scenario: "A base operating system image contains utilities such as <code>passwd</code>, <code>chsh</code>, and <code>gpasswd</code> with the setuid bit set. If an unprivileged container process finds an exploit in one of these binaries, it can escalate to root.",
    question: "Which command in a Dockerfile safely strips setuid and setgid permissions from all binaries across the container filesystem?",
    options: [
      { id: 'A', text: "Run <code>RUN find / -type f \\( -perm -4000 -o -perm -2000 \\) -exec chmod a-s {} + 2&gt;/dev/null || true</code>" },
      { id: 'B', text: "Run <code>RUN chmod -R 777 /bin</code>" },
      { id: 'C', text: "Run <code>RUN rm -rf /etc/passwd</code>" },
      { id: 'D', text: "Run <code>RUN chown -R nobody:nogroup /usr/bin</code>" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Stripping setuid (mode 4000) and setgid (mode 2000) bits using <code>find / -perm -4000 -exec chmod a-s {} +</code> eliminates binaries that can escalate privileges when executed by unprivileged users, significantly hardening containers that cannot use <code>readOnlyRootFilesystem</code>.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["setuid", "setgid", "Dockerfile", "Hardening"]
  },
  {
    id: "k8s-cks-138",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Enforcing Image Signing Policies with Kyverno",
    scenario: "A Kubernetes cluster must reject any Pod whose container image is not cryptographically signed by the corporate Cosign key.",
    question: "Which Kyverno <code>ClusterPolicy</code> rule pattern verifies image signatures before admitting pods?",
    options: [
      { id: 'A', text: "A <code>generate</code> rule that creates a Secret containing the Cosign private key" },
      { id: 'B', text: "A <code>mutate</code> rule setting <code>imagePullPolicy: IfNotPresent</code>" },
      { id: 'C', text: "A <code>verifyImages</code> rule specifying the target image repository pattern, <code>attestors</code> referencing the Cosign public key, and <code>mutateDigest: true</code>" },
      { id: 'D', text: "A <code>validate</code> rule matching <code>spec.containers[*].image</code> with a regex pattern" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kyverno provides native image verification using the <code>verifyImages</code> rule block. It checks the signature against public keys or certificates specified under <code>attestors</code>. Setting <code>mutateDigest: true</code> automatically transforms mutable image tags into verified immutable SHA-256 digests.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Kyverno", "Cosign", "verifyImages", "Admission-Control"]
  },
  {
    id: "k8s-cks-139",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Detecting Hardcoded Secrets in Git and Manifests with Gitleaks",
    scenario: "Before pushing code to remote repositories, developers must ensure that API tokens, private SSH keys, and cloud credentials are not accidentally hardcoded into application source or Kubernetes YAML files.",
    question: "Which tool is specifically designed to scan git commits and files for hardcoded secrets using regex and entropy checks?",
    options: [
      { id: 'A', text: "Falco" },
      { id: 'B', text: "Gitleaks (or Trufflehog)" },
      { id: 'C', text: "Kube-bench" },
      { id: 'D', text: "CoreDNS" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "<code>Gitleaks</code> is a dedicated secret-detection scanner that searches git repositories, commit history, and directories for exposed secrets, passwords, API keys, and certificates using regular expressions and Shannon entropy analysis.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Gitleaks", "Secret-Scanning", "Shift-Left", "DevSecOps"]
  },
  {
    id: "k8s-cks-140",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Configuring ImagePolicyWebhook Admission Controller",
    scenario: "A platform team wants the <code>kube-apiserver</code> to query an external image scanning backend before allowing any container image to be scheduled on the cluster.",
    question: "What is the role of the <code>ImagePolicyWebhook</code> admission controller plugin?",
    options: [
      { id: 'A', text: "It intercepts pod creation requests, sends the container image references to an external webhook service for policy evaluation (e.g., verifying vulnerability scan status and signatures), and admits or rejects the pod based on the response" },
      { id: 'B', text: "It pulls the container image onto the control plane node to run antivirus scans" },
      { id: 'C', text: "It automatically rebuilds vulnerable Docker images using cached layers" },
      { id: 'D', text: "It replaces private registry credentials with temporary AWS IAM roles" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The <code>ImagePolicyWebhook</code> admission plugin enables the API server to consult an external HTTP webhook service before creating pods. The webhook evaluates the proposed image names and digests against enterprise policies (e.g., requiring zero critical CVEs or valid signatures) and returns an admit/reject decision.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ImagePolicyWebhook", "Admission-Control", "Supply-Chain", "kube-apiserver"]
  },
  {
    id: "k8s-cks-141",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Hardening Base Images: Alpine vs Distroless Security Trade-offs",
    scenario: "A team compares using Alpine Linux vs Google Distroless as the base image for Python and Node.js microservices.",
    question: "What security advantage does a Distroless image offer over an Alpine Linux base image?",
    options: [
      { id: 'A', text: "Alpine images cannot be scanned by Trivy or Grype" },
      { id: 'B', text: "Distroless images run only in privileged mode" },
      { id: 'C', text: "Alpine includes the <code>apk</code> package manager and BusyBox shell (<code>/bin/sh</code>), providing tools an attacker can use post-exploitation; Distroless completely omits shells and package managers" },
      { id: 'D', text: "Alpine Linux uses glibc while Distroless exclusively uses musl" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "While Alpine is lightweight (5MB), it contains BusyBox (providing <code>/bin/sh</code>, <code>wget</code>, <code>tar</code>, etc.) and the <code>apk</code> package manager. If an attacker gains command execution, they can download and install tools. Distroless omits shells and package managers entirely, denying attackers basic toolsets.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Alpine", "Distroless", "Attack-Surface", "Base-Images"]
  },
  {
    id: "k8s-cks-142",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Validating Manifests with Conftest and Open Policy Agent (OPA)",
    scenario: "An enterprise policy dictates that all Kubernetes manifests must declare CPU and memory limits, and must not mount hostPath volumes. The team enforces this in CI pipelines before deployment.",
    question: "Which tool allows writing custom declarative policies in Rego to validate Kubernetes YAML files locally?",
    options: [
      { id: 'A', text: "Conftest (leveraging Open Policy Agent's Rego engine)" },
      { id: 'B', text: "Etcdctl snapshot utility" },
      { id: 'C', text: "Hadolint Dockerfile linter" },
      { id: 'D', text: "Kubeadm cluster bootstrapper" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "<code>Conftest</code> is a command-line tool that uses the Rego policy language from Open Policy Agent (OPA) to write unit tests for structured configuration files (Kubernetes manifests, Terraform, Dockerfiles). Running <code>conftest test deployment.yaml</code> evaluates custom policies prior to deployment.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Conftest", "OPA", "Rego", "Static-Analysis"]
  },
  {
    id: "k8s-cks-143",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Mitigating Dockerfile Layer Caching Vulnerabilities",
    scenario: "A developer writes a Dockerfile containing:<br><code>RUN apt-get update</code><br><code>RUN apt-get install -y curl</code><br>In subsequent builds, changes to source code do not trigger <code>apt-get update</code>.",
    question: "What security problem results from splitting <code>apt-get update</code> and <code>apt-get install</code> into separate RUN commands?",
    options: [
      { id: 'A', text: "The apt cache is permanently encrypted on disk" },
      { id: 'B', text: "Docker reuses the cached layer from the previous <code>apt-get update</code>, meaning subsequent builds may install stale, vulnerable packages rather than latest security patches" },
      { id: 'C', text: "The build fails immediately with a syntax error" },
      { id: 'D', text: "The container runtime disables seccomp filters for cached layers" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Restricting Allowed Container Registries via Admission Policy",
    scenario: "To prevent unauthorized or untrusted images from running on production clusters, pods must only pull images from <code>registry.enterprise.com/apps/*</code>. Pulling from public registries like Docker Hub or Quay must be blocked.",
    question: "Which cluster admission mechanism reliably enforces allowed container registry domains?",
    options: [
      { id: 'A', text: "An egress NetworkPolicy blocking external HTTPS traffic to port 443" },
      { id: 'B', text: "Configuring <code>--enable-bootstrap-token-auth=false</code> on kube-apiserver" },
      { id: 'C', text: "Setting <code>readOnlyPort: 0</code> on worker node kubelets" },
      { id: 'D', text: "A Validating Admission Policy (or OPA Gatekeeper / Kyverno policy) checking that <code>spec.containers[*].image</code> starts with the approved domain prefix" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforcing approved container registries requires an admission controller policy (native ValidatingAdmissionPolicy, Kyverno, or Gatekeeper). The policy inspects the image URL and rejects any manifest attempting to pull from unapproved or public repositories.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Allowed-Registries", "Kyverno", "Gatekeeper", "Supply-Chain"]
  },
  {
    id: "k8s-cks-145",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Verifying In-Toto Attestations for Build Provenance",
    scenario: "An enterprise must satisfy SLSA (Supply-chain Levels for Software Artifacts) Level 3 requirements by verifying that a container image was built on a certified GitHub Actions runner using an authorized repository workflow.",
    question: "Which cryptographic artifact provides tamper-proof build provenance linked to the container image?",
    options: [
      { id: 'A', text: "An in-toto attestation signed with Cosign and recorded in the Rekor ledger containing the build environment metadata, commit SHA, and builder identity" },
      { id: 'B', text: "A standard TLS server certificate issued by Let's Encrypt" },
      { id: 'C', text: "A base64-encoded Kubernetes ConfigMap containing git logs" },
      { id: 'D', text: "An MD5 checksum file uploaded to Amazon S3" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "in-toto attestations (such as SLSA provenance specifications) document the exact build environment, source commit, builder identity, and input dependencies. Signing this attestation with Cosign allows consumers to cryptographically verify build provenance before admitting images to production.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["in-toto", "SLSA", "Provenance", "Supply-Chain"]
  },
  {
    id: "k8s-cks-146",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Hardening Node.js Container Applications: Production Flag and Non-Root",
    scenario: "A Node.js web application is packaged for deployment in Kubernetes. Which Dockerfile instructions harden the runtime environment against common vulnerabilities?",
    question: "Which Dockerfile configuration correctly establishes a hardened Node.js container?",
    options: [
      { id: 'A', text: "Mount <code>node_modules</code> from the host using a hostPath volume" },
      { id: 'B', text: "Set <code>USER root</code> and install all development dependencies using <code>npm install</code>" },
      { id: 'C', text: "Set <code>ENV NODE_ENV=production</code>, install dependencies using <code>npm ci --only=production</code>, and switch execution using <code>USER node</code>" },
      { id: 'D', text: "Execute the container using <code>npm start</code> without an explicit USER directive" }
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
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Preventing Vulnerability Blindspots: Scanning Application Dependencies",
    scenario: "A container vulnerability scan reports zero operating system vulnerabilities, but the application was breached via a remote code execution flaw in an outdated Log4j or NPM dependency.",
    question: "Why did an OS package scan fail to detect this critical vulnerability?",
    options: [
      { id: 'A', text: "Log4j operates exclusively in kernel space where scanners cannot reach" },
      { id: 'B', text: "Java applications are immune to container scanning tools" },
      { id: 'C', text: "Standard OS package scanners only inspect distribution packages (deb, rpm, apk), missing language-level application dependencies (Maven, npm, pip, Go modules) unless language-specific dependency scanning is enabled" },
      { id: 'D', text: "Trivy cannot scan files residing outside <code>/usr/bin</code>" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Many legacy vulnerability scanners only query the OS package manager database (e.g., <code>/var/lib/dpkg/status</code>). Modern supply chain security tools (Trivy, Syft, Grype) must be configured to perform comprehensive application dependency scanning across lockfiles (<code>package-lock.json</code>, <code>pom.xml</code>, <code>go.sum</code>) to detect vulnerable libraries.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Dependency-Scanning", "Log4j", "SCA", "Supply-Chain"]
  },
  {
    id: "k8s-cks-148",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Automating Container Image Patching with Dependabot / Renovate",
    scenario: "A development team struggles to keep base container images and third-party dependencies updated with the latest security releases.",
    question: "Which automated dependency management tool opens automated pull requests when new base images or library patches are released?",
    options: [
      { id: 'A', text: "Renovate or Dependabot" },
      { id: 'B', text: "Kube-bench" },
      { id: 'C', text: "Cilium CNI" },
      { id: 'D', text: "AIDE" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Tools like <code>Renovate</code> and GitHub's <code>Dependabot</code> continuously monitor package registries and container registries. When new patched versions or updated base images are published, they automatically generate pull requests with changelogs and vulnerability references.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Dependabot", "Renovate", "Automation", "Patch-Management"]
  },
  {
    id: "k8s-cks-149",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Hardening Kube-Apiserver ImagePolicyWebhook Admission Configuration File",
    scenario: "An administrator configures the <code>ImagePolicyWebhook</code> admission plugin by creating an admission configuration file specified via <code>--admission-control-config-file</code>.",
    question: "What must be set under <code>defaultAllow</code> in the ImagePolicyWebhook configuration to ensure a fail-secure posture?",
    options: [
      { id: 'A', text: "Set <code>defaultAllow: false</code> so that if the backend webhook server fails or is unreachable, the API server rejects pod creation" },
      { id: 'B', text: "Set <code>defaultAllow: true</code> to avoid disrupting developers during webhook outages" },
      { id: 'C', text: "Configure <code>defaultAllow: audit</code> to write violations to syslog" },
      { id: 'D', text: "Omit <code>defaultAllow</code> to allow the cluster administrator to approve pods manually" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In an <code>ImagePolicyBackend</code> admission configuration, setting <code>defaultAllow: false</code> enforces a fail-closed (fail-secure) model: if the image policy webhook is unreachable or encounters an error, the API server rejects pod admission, preventing unverified images from running.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["ImagePolicyWebhook", "defaultAllow", "Fail-Secure", "Admission-Control"]
  },
  {
    id: "k8s-cks-150",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Supply Chain Security and Static Analysis",
    title: "Detecting Malicious Dockerfile Instructions with Hadolint: Untrusted Curl Piping",
    scenario: "A Dockerfile contains the line: <code>RUN curl -sSL https://get.example.com/install.sh | bash</code>. Hadolint flags rule DL4006.",
    question: "What security risk is introduced by piping unverified remote scripts directly into bash during container builds?",
    options: [
      { id: 'A', text: "The pipe command causes Docker layer caching to run out of memory" },
      { id: 'B', text: "If the remote server or network transit is compromised (MITM), arbitrary malicious code is executed with root build privileges without checksum or signature verification" },
      { id: 'C', text: "The container image size increases by 4GB" },
      { id: 'D', text: "Bash scripts cannot execute inside Docker containers" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Piping untrusted URLs directly to <code>bash</code> (<code>curl | bash</code>) is a major supply chain hazard. An attacker performing a man-in-the-middle attack or compromising the CDN can inject arbitrary commands that execute with root privileges during the build. Best practice downloads the script, verifies its cryptographic hash, and inspects it prior to execution.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/",
    tags: ["Hadolint", "Supply-Chain", "Dockerfile", "Remote-Code-Execution"]
  }
];

export default K8S_CKS_QUESTIONS_6;
