export const K8S_CKS_FLASHCARDS_7 = [
  {
    "id": "k8s-cks-fc-151",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Cosign Keyless Verification Flags: Which two flags verify GitHub Actions signers?",
    "hint": "--certificate-identity-regexp and --certificate-oidc-issuer.",
    "back": "Use <strong>--certificate-identity-regexp</strong> (matching the expected workflow path) and <strong>--certificate-oidc-issuer</strong> (e.g., <code>https://token.actions.githubusercontent.com</code>).",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-152",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "BuildKit Secret Mounts: How do you use tokens in Docker builds without leaking them into layers?",
    "hint": "RUN --mount=type=secret.",
    "back": "Use <strong>RUN --mount=type=secret,id=mysecret</strong>. The secret is temporarily mounted in memory during the RUN step and is never committed to image layers or history.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-153",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Eliminating sudo in Containers: Why should sudo be removed from images?",
    "hint": "Eliminates setuid binaries and local privilege escalation vectors.",
    "back": "Containers run as specific users and do not need <code>sudo</code>. Keeping it leaves a high-risk setuid binary that can be leveraged for privilege escalation exploits.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-154",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Dockerfile USER Instruction: Where should the USER instruction be placed?",
    "hint": "In the final runtime stage before ENTRYPOINT.",
    "back": "Declare <strong>USER &lt;unprivileged-user&gt;</strong> in the final stage before <code>ENTRYPOINT</code>. This ensures the container defaults to unprivileged execution at runtime.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-155",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": ".trivyignore: How do you document accepted vulnerability risks in Trivy?",
    "hint": "List CVE IDs in .trivyignore file with expiration dates.",
    "back": "Add the CVE identifier to a <strong>.trivyignore</strong> file with comments and optional expiration dates, suppressing specific known non-exploitable findings during CI.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-156",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Gatekeeper Digest Enforcement: How does Rego verify image digests?",
    "hint": "Checks contains(image, '@sha256:').",
    "back": "The Rego policy checks that every container image string contains <strong>@sha256:</strong>, denying admission to any manifest specifying mutable tags.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-157",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "CNCF Notation / Notary: Where are OCI-native signatures stored?",
    "hint": "Directly in the OCI registry alongside the image.",
    "back": "Signatures are stored as <strong>OCI artifacts</strong> directly in the container registry, traveling natively with images when replicated across environments.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-158",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Shellshock Mitigation: Why does Distroless protect against Shellshock?",
    "hint": "Omits Bash and all shell interpreters.",
    "back": "Distroless contains no <code>bash</code> or <code>sh</code> binaries, making environment-variable-based shell injection exploits physically impossible.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-159",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Helm Chart Security Scanning: How do you scan Helm charts in CI before deployment?",
    "hint": "helm template piped into kubesec or checkov.",
    "back": "Run <strong>helm template &lt;chart&gt; | kubesec scan -</strong> to render the Kubernetes YAML manifests and evaluate them against security best practices.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-160",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Banning :latest Tag in Kyverno: How does Kyverno block mutable tags?",
    "hint": "Validate pattern matching !*:latest.",
    "back": "Define a validation rule with pattern <strong>spec.containers[*].image: '!*:latest'</strong>, rejecting any incoming manifest that specifies the <code>latest</code> tag.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-161",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Registry Access Control: Who should have write access to production container repositories?",
    "hint": "Automated CI/CD robot accounts only; humans read-only.",
    "back": "Only <strong>automated CI/CD robot accounts</strong> should possess push permissions to production registries. Developers should have read-only access to prevent untracked pushes.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-162",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Hadolint DL3002: What is the risk of omitting the USER instruction in a Dockerfile?",
    "hint": "Container defaults to root execution.",
    "back": "Without a <code>USER</code> directive, the container executes as <strong>root UID 0</strong>, dramatically increasing attack impact in the event of an application exploit.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-163",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Trufflehog Git History Scanning: What makes Trufflehog effective for secret discovery?",
    "hint": "Scans historical commits and verifies live API keys.",
    "back": "It inspects all past git commits, branches, and diffs for <strong>high-entropy secrets</strong> and can actively query APIs to check if leaked credentials are live.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-164",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "npm ci vs npm install: Why use npm ci in production container builds?",
    "hint": "Strict lockfile adherence and hash verification.",
    "back": "<strong>npm ci</strong> strictly enforces <code>package-lock.json</code>, verifies cryptographic SHA hashes of dependencies, and never updates lockfiles, preventing supply chain drift.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-165",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Connaisseur Webhook: What is Connaisseur's role in admission control?",
    "hint": "Validating admission webhook for Cosign/Notary signatures.",
    "back": "It runs as a <strong>ValidatingAdmissionWebhook</strong> that intercepts pod creation requests, validates Cosign or Notary signatures, and blocks unsigned images.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-166",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Package Cache Cleanup: Why delete /var/lib/apt/lists/* in the same RUN layer?",
    "hint": "Prevents temporary package cache data from persisting in image layers.",
    "back": "Deleting package lists in the <strong>same RUN instruction</strong> ensures cache data is never written into the image layer, saving disk space and reducing attack surface.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-167",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Distroless :nonroot Variant: What UID does the nonroot user have?",
    "hint": "UID 65532.",
    "back": "The nonroot user has <strong>UID 65532</strong>. Images built on <code>:nonroot</code> execute as this unprivileged user by default.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-168",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Clair Vulnerability Scanner: How does Clair detect CVEs in container images?",
    "hint": "Static analysis of image layers matched against CVE databases.",
    "back": "Clair inspects filesystem layers, extracts installed OS package metadata, and matches versions against official security advisories and CVE databases.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-169",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Dependency Typosquatting Defense: How do private registry proxies mitigate malicious packages?",
    "hint": "Scoped namespaces and internal approval allow-lists.",
    "back": "Internal artifact proxies (Nexus/Artifactory) enforce <strong>strict package scoping</strong> and allow-lists, preventing developers from pulling spoofed public packages.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-170",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Docker Content Trust (DCT): What environment variable enables DCT in Docker CLI?",
    "hint": "DOCKER_CONTENT_TRUST=1.",
    "back": "Set <strong>export DOCKER_CONTENT_TRUST=1</strong>. The Docker client will verify digital signatures via Notary v1 before pulling or running images.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-171",
    "difficulty": "hard",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Preventing Stale Images: How do you address base images that have aged in production?",
    "hint": "Automated recurring rebuild and test pipelines.",
    "back": "Schedule <strong>regular automated CI builds</strong> that pull freshly patched base images, execute vulnerability scans, and trigger rolling cluster deployments.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-172",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Red Hat UBI Minimal Builds: How do you install packages and end as non-root?",
    "hint": "microdnf install && clean all as root, followed by USER 1001.",
    "back": "Run <code>microdnf install -y ... && microdnf clean all</code> as root during build, then declare <strong>USER 1001</strong> before the entrypoint.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-173",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Trivy Config Scanning: What does trivy config evaluate?",
    "hint": "Kubernetes manifest security misconfigurations.",
    "back": "It scans Kubernetes YAML, Terraform, and Helm charts for <strong>configuration flaws</strong> (e.g., missing seccomp, root containers, missing resource limits) before deployment.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-174",
    "difficulty": "easy",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "Rekor Transparency Log Search: How do you query the Rekor ledger by artifact digest?",
    "hint": "rekor-cli search --sha &lt;hash&gt;.",
    "back": "Run <strong>rekor-cli search --sha &lt;hash&gt;</strong>. It queries the immutable transparency log to retrieve the signing certificate and timestamp record.",
    "tags": [
      "CKS",
      "Supply"
    ]
  },
  {
    "id": "k8s-cks-fc-175",
    "difficulty": "medium",
    "certId": "k8s-cks",
    "domainId": "d4",
    "front": "COPY --chown in Dockerfiles: Why use --chown in COPY instead of RUN chown?",
    "hint": "Avoids duplicating files in a separate layer.",
    "back": "<strong>COPY --chown=&lt;user&gt;:&lt;group&gt;</strong> sets ownership during file transfer. Running <code>RUN chown -R</code> afterward creates a duplicate copy of the files in a new layer, doubling image size.",
    "tags": [
      "CKS",
      "Supply"
    ]
  }
];

export default K8S_CKS_FLASHCARDS_7;
