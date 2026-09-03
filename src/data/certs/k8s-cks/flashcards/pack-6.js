export const K8S_CKS_FLASHCARDS_6 = [
  {
    "id": "k8s-cks-fc-126",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Kubesec Manifest Scanning: What does Kubesec evaluate and output?",
    "hint": "Scores Kubernetes manifests against security best practices.",
    "back": "Kubesec performs static analysis on Kubernetes YAML files. It gives positive scores for hardening (read-only root, non-root user, dropped capabilities) and negative scores for risks (privileged mode, hostPath, hostNetwork).",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-127",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Trivy CI/CD Gate: What flag causes Trivy to fail a pipeline build upon finding CVEs?",
    "hint": "--exit-code 1 flag.",
    "back": "Run <strong>trivy image --severity HIGH,CRITICAL --exit-code 1 &lt;image&gt;</strong>. If matching vulnerabilities are found, Trivy returns exit code <code>1</code>, aborting the CI/CD pipeline.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-128",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Cosign Verification: What command verifies an image signature using a public key?",
    "hint": "cosign verify with --key flag.",
    "back": "Run <strong>cosign verify --key cosign.pub &lt;image&gt;</strong>. It fetches the signature payload from the OCI registry and cryptographically verifies it against the public key.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-129",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Multi-Stage Build Security Benefit: Why are multi-stage builds critical for container hardening?",
    "hint": "Separates heavy build tools from the minimal runtime image.",
    "back": "Compilers, SDKs, and build dependencies remain in the builder stage. Only the <strong>compiled static binary</strong> is copied to the minimal production image (e.g., distroless), slashing image size and CVE surface.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-130",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Hadolint DL3008: Why pin package versions in apt-get install?",
    "hint": "Ensures reproducible, deterministic container builds.",
    "back": "Pinning package versions ensures <strong>deterministic and reproducible builds</strong>, preventing unverified or breaking upstream library versions from silently entering images.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-131",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Syft SBOM Generation: What command generates an SPDX JSON SBOM for a container image?",
    "hint": "syft image with -o spdx-json flag.",
    "back": "Run <strong>syft &lt;image&gt; -o spdx-json &gt; sbom.json</strong>. This produces a machine-readable Software Bill of Materials listing all OS and application packages.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-132",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Grype SBOM Scanning: What is the primary benefit of scanning SBOMs instead of container images?",
    "hint": "Speed and zero image download overhead.",
    "back": "Running <strong>grype sbom:sbom.json</strong> matches package inventories against fresh CVE databases in seconds without needing to pull or unpack gigabytes of container layers.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-133",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Keyless Signing Architecture: What are the three components in Sigstore keyless signing?",
    "hint": "OIDC Identity, Fulcio CA, Rekor Transparency Log.",
    "back": "1. <strong>OIDC</strong>: Proves signer identity (e.g., GitHub Actions).<br>2. <strong>Fulcio</strong>: Issues ephemeral short-lived X.509 certificates.<br>3. <strong>Rekor</strong>: Logs the signature in a tamper-evident transparency ledger.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-134",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Image Digest Pinning: Why is @sha256 preferred over mutable image tags like :latest?",
    "hint": "Tags can be overwritten; digests are cryptographically immutable.",
    "back": "Tags are mutable pointers that can be overwritten by attackers or registry updates. Pinning by <strong>@sha256:&lt;hash&gt;</strong> guarantees the exact verified bit-for-bit image is pulled.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-135",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Distroless Image Security: Why are Google Distroless images superior to standard Linux distros?",
    "hint": "No shells, no package managers, no coreutils.",
    "back": "Distroless contains strictly the application and minimal runtime (glibc). By <strong>eliminating shells (sh, bash) and package managers (apt, apk)</strong>, attackers cannot spawn terminals or install tools.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-136",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Checkov IaC Scanning: What is Checkov used for in DevSecOps?",
    "hint": "Static analysis for Infrastructure-as-Code templates.",
    "back": "Checkov scans Terraform, Helm, CloudFormation, and Kubernetes manifests for security misconfigurations and compliance violations <strong>before infrastructure is provisioned</strong> (shift-left).",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-137",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Stripping setuid Binaries: How do you eliminate setuid binaries in a Dockerfile?",
    "hint": "find command with chmod a-s.",
    "back": "Run <code>RUN find / -perm -4000 -exec chmod a-s {} +</code> to remove the setuid bit from all host binaries, preventing local privilege escalation.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-138",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Kyverno verifyImages: What rule verifies Cosign signatures at admission time?",
    "hint": "verifyImages rule in a ClusterPolicy.",
    "back": "The <strong>verifyImages</strong> rule block in a Kyverno <code>ClusterPolicy</code> checks image signatures against public keys or Fulcio certificates before admitting pods.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-139",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Gitleaks / Trufflehog: What is their primary purpose in a CI pipeline?",
    "hint": "Detecting hardcoded secrets and API keys in git commits.",
    "back": "They scan source code, commit history, and configuration files for <strong>hardcoded secrets, API tokens, and private keys</strong> using regex and entropy analysis.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-140",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "ImagePolicyWebhook: How does kube-apiserver use this admission plugin?",
    "hint": "Queries an external webhook to validate image compliance before admission.",
    "back": "It sends container image references to an <strong>external HTTP webhook service</strong> that checks vulnerability status, signatures, and policies before admitting the pod.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-141",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Alpine vs Distroless: What toolset in Alpine creates an attacker post-exploitation risk?",
    "hint": "BusyBox shell and apk package manager.",
    "back": "Alpine includes <code>/bin/sh</code> (BusyBox) and <code>apk</code>. An attacker with command execution can download and install arbitrary tools. Distroless has no shell or package manager.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-142",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Conftest Rego Validation: How does Conftest validate Kubernetes manifests?",
    "hint": "Evaluates OPA Rego policies against YAML files.",
    "back": "It runs unit-test-style evaluations using <strong>Open Policy Agent's Rego language</strong> against local YAML/JSON manifests before deployment.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-143",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Dockerfile RUN Chaining: Why combine apt-get update and install in a single layer?",
    "hint": "Avoids caching stale package indices in Docker layers.",
    "back": "Combining them ensures that every package installation pulls the <strong>freshest package index</strong> and allows removing <code>/var/lib/apt/lists/*</code> in the same layer to minimize size.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-144",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Allowed Registries Admission: How do you block pods from pulling public Docker Hub images?",
    "hint": "Validating admission policy matching approved registry domain prefixes.",
    "back": "Enforce a <strong>ValidatingAdmissionPolicy, Kyverno, or Gatekeeper</strong> rule verifying that all container images start with the approved internal domain (e.g., <code>registry.enterprise.com/</code>).",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-145",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "in-toto SLSA Attestations: What do cryptographic build attestations verify?",
    "hint": "Build provenance, commit SHA, build runner identity.",
    "back": "They provide cryptographic proof of <strong>software build provenance</strong>\u2014confirming which repository, commit SHA, and verified build pipeline generated the container image.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-146",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Node.js Container Hardening: What are the three essential Dockerfile settings?",
    "hint": "NODE_ENV=production, npm ci --only=production, USER node.",
    "back": "1. <strong>ENV NODE_ENV=production</strong><br>2. <strong>npm ci --only=production</strong> (no devDependencies)<br>3. <strong>USER node</strong> (unprivileged execution)",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-147",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "OS vs Application Vulnerabilities: Why do OS package scanners miss Log4j or NPM bugs?",
    "hint": "OS scanners only inspect deb/rpm/apk databases.",
    "back": "OS package managers only track system packages. Application dependencies (JARs, NPM modules, PyPI wheels) require <strong>Software Composition Analysis (SCA)</strong> lockfile scanning.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-148",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Automated Dependency Updates: What role do Dependabot and Renovate play in security?",
    "hint": "Automated PRs for patched base images and libraries.",
    "back": "They continuously monitor registries and <strong>automatically open pull requests</strong> to update vulnerable dependencies and base images to patched versions.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-149",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "ImagePolicyWebhook defaultAllow: Why must it be set to false?",
    "hint": "Enforces fail-closed security when the webhook is unreachable.",
    "back": "Setting <strong>defaultAllow: false</strong> guarantees a fail-secure posture: if the external image scanning webhook fails or is offline, the API server rejects pod admission.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-150",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "curl | bash Dangers: Why does Hadolint flag piping remote URLs into shells?",
    "hint": "Unverified remote code execution during container build.",
    "back": "Piping unverified URLs directly to <code>bash</code> allows a compromised server or MITM attacker to execute arbitrary root commands during container construction.",
    "tags": [
      "CKS",
      "Supply"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_6;
