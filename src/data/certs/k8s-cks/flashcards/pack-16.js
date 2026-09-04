export const K8S_CKS_FLASHCARDS_16 = [
  {
    id: "k8s-cks-fc-376",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Egress Filtering Against Data Exfiltration (Dr Failover)",
    hint: "Confining container compromise by restricting outbound network connections.",
    back: "Enforcing <strong>egress NetworkPolicies</strong> prevents compromised containers from calling home to command-and-control servers or exfiltrating data, severely restricting attacker capabilities.",
    tags: ["Egress Restriction", "Egress Defense", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-377",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Egress Filtering Against Data Exfiltration (High Load Scale)",
    hint: "Confining container compromise by restricting outbound network connections.",
    back: "Enforcing <strong>egress NetworkPolicies</strong> prevents compromised containers from calling home to command-and-control servers or exfiltrating data, severely restricting attacker capabilities.",
    tags: ["Egress Restriction", "Egress Defense", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-378",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Egress Filtering Against Data Exfiltration (Security Compliance)",
    hint: "Confining container compromise by restricting outbound network connections.",
    back: "Enforcing <strong>egress NetworkPolicies</strong> prevents compromised containers from calling home to command-and-control servers or exfiltrating data, severely restricting attacker capabilities.",
    tags: ["Egress Restriction", "Egress Defense", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-379",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Egress Filtering Against Data Exfiltration (Hybrid Migration)",
    hint: "Confining container compromise by restricting outbound network connections.",
    back: "Enforcing <strong>egress NetworkPolicies</strong> prevents compromised containers from calling home to command-and-control servers or exfiltrating data, severely restricting attacker capabilities.",
    tags: ["Egress Restriction", "Egress Defense", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-380",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d3",
    front: "Egress Filtering Against Data Exfiltration (Resilience Failure)",
    hint: "Confining container compromise by restricting outbound network connections.",
    back: "Enforcing <strong>egress NetworkPolicies</strong> prevents compromised containers from calling home to command-and-control servers or exfiltrating data, severely restricting attacker capabilities.",
    tags: ["Egress Restriction", "Egress Defense", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-381",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Static Manifest Security Scanning (Dr Failover)",
    hint: "Automated pre-commit linting of Kubernetes YAML manifests for misconfigurations.",
    back: "Integrating <strong>kube-linter or conftest</strong> into CI pipelines detects security anti-patterns in Kubernetes manifests before deployment, enforcing security best practices early in development.",
    tags: ["Static Manifest Scanning", "Static Analysis", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-382",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Static Manifest Security Scanning (High Load Scale)",
    hint: "Automated pre-commit linting of Kubernetes YAML manifests for misconfigurations.",
    back: "Integrating <strong>kube-linter or conftest</strong> into CI pipelines detects security anti-patterns in Kubernetes manifests before deployment, enforcing security best practices early in development.",
    tags: ["Static Manifest Scanning", "Static Analysis", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-383",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Static Manifest Security Scanning (Security Compliance)",
    hint: "Automated pre-commit linting of Kubernetes YAML manifests for misconfigurations.",
    back: "Integrating <strong>kube-linter or conftest</strong> into CI pipelines detects security anti-patterns in Kubernetes manifests before deployment, enforcing security best practices early in development.",
    tags: ["Static Manifest Scanning", "Static Analysis", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-384",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Static Manifest Security Scanning (Hybrid Migration)",
    hint: "Automated pre-commit linting of Kubernetes YAML manifests for misconfigurations.",
    back: "Integrating <strong>kube-linter or conftest</strong> into CI pipelines detects security anti-patterns in Kubernetes manifests before deployment, enforcing security best practices early in development.",
    tags: ["Static Manifest Scanning", "Static Analysis", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-385",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Static Manifest Security Scanning (Resilience Failure)",
    hint: "Automated pre-commit linting of Kubernetes YAML manifests for misconfigurations.",
    back: "Integrating <strong>kube-linter or conftest</strong> into CI pipelines detects security anti-patterns in Kubernetes manifests before deployment, enforcing security best practices early in development.",
    tags: ["Static Manifest Scanning", "Static Analysis", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-386",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Trivy Container Vulnerability Scanning (Dr Failover)",
    hint: "Blocking pipeline builds on high and critical severity vulnerabilities.",
    back: "Running <strong>trivy image --severity HIGH,CRITICAL --exit-code 1</strong> blocks CI/CD pipelines when severe vulnerabilities are detected in container packages or application dependencies.",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-387",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Trivy Container Vulnerability Scanning (High Load Scale)",
    hint: "Blocking pipeline builds on high and critical severity vulnerabilities.",
    back: "Running <strong>trivy image --severity HIGH,CRITICAL --exit-code 1</strong> blocks CI/CD pipelines when severe vulnerabilities are detected in container packages or application dependencies.",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-388",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Trivy Container Vulnerability Scanning (Security Compliance)",
    hint: "Blocking pipeline builds on high and critical severity vulnerabilities.",
    back: "Running <strong>trivy image --severity HIGH,CRITICAL --exit-code 1</strong> blocks CI/CD pipelines when severe vulnerabilities are detected in container packages or application dependencies.",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-389",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Trivy Container Vulnerability Scanning (Hybrid Migration)",
    hint: "Blocking pipeline builds on high and critical severity vulnerabilities.",
    back: "Running <strong>trivy image --severity HIGH,CRITICAL --exit-code 1</strong> blocks CI/CD pipelines when severe vulnerabilities are detected in container packages or application dependencies.",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-390",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Trivy Container Vulnerability Scanning (Resilience Failure)",
    hint: "Blocking pipeline builds on high and critical severity vulnerabilities.",
    back: "Running <strong>trivy image --severity HIGH,CRITICAL --exit-code 1</strong> blocks CI/CD pipelines when severe vulnerabilities are detected in container packages or application dependencies.",
    tags: ["Vulnerability Scanning", "Vulnerability Scanning", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-391",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Cosign Container Image Signing (Dr Failover)",
    hint: "Cryptographic supply chain verification using Sigstore and Cosign.",
    back: "Signing images with <strong>cosign</strong> and verifying signatures in Kubernetes admission controllers ensures only authentic, untampered images from approved CI pipelines can run in the cluster.",
    tags: ["Cryptographic Signing", "Image Signing", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-392",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Cosign Container Image Signing (High Load Scale)",
    hint: "Cryptographic supply chain verification using Sigstore and Cosign.",
    back: "Signing images with <strong>cosign</strong> and verifying signatures in Kubernetes admission controllers ensures only authentic, untampered images from approved CI pipelines can run in the cluster.",
    tags: ["Cryptographic Signing", "Image Signing", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-393",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Cosign Container Image Signing (Security Compliance)",
    hint: "Cryptographic supply chain verification using Sigstore and Cosign.",
    back: "Signing images with <strong>cosign</strong> and verifying signatures in Kubernetes admission controllers ensures only authentic, untampered images from approved CI pipelines can run in the cluster.",
    tags: ["Cryptographic Signing", "Image Signing", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-394",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Cosign Container Image Signing (Hybrid Migration)",
    hint: "Cryptographic supply chain verification using Sigstore and Cosign.",
    back: "Signing images with <strong>cosign</strong> and verifying signatures in Kubernetes admission controllers ensures only authentic, untampered images from approved CI pipelines can run in the cluster.",
    tags: ["Cryptographic Signing", "Image Signing", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-395",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Cosign Container Image Signing (Resilience Failure)",
    hint: "Cryptographic supply chain verification using Sigstore and Cosign.",
    back: "Signing images with <strong>cosign</strong> and verifying signatures in Kubernetes admission controllers ensures only authentic, untampered images from approved CI pipelines can run in the cluster.",
    tags: ["Cryptographic Signing", "Image Signing", "Resilience Failure"]
  },
  {
    id: "k8s-cks-fc-396",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Software Bill of Materials (SBOM) Generation (Dr Failover)",
    hint: "Cataloging container components using Syft in SPDX or CycloneDX formats.",
    back: "Generating an <strong>SBOM</strong> with tools like Syft provides a machine-readable inventory of all software components in a container, enabling instant discovery of zero-day vulnerabilities.",
    tags: ["SBOM", "SBOM", "Dr Failover"]
  },
  {
    id: "k8s-cks-fc-397",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Software Bill of Materials (SBOM) Generation (High Load Scale)",
    hint: "Cataloging container components using Syft in SPDX or CycloneDX formats.",
    back: "Generating an <strong>SBOM</strong> with tools like Syft provides a machine-readable inventory of all software components in a container, enabling instant discovery of zero-day vulnerabilities.",
    tags: ["SBOM", "SBOM", "High Load Scale"]
  },
  {
    id: "k8s-cks-fc-398",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Software Bill of Materials (SBOM) Generation (Security Compliance)",
    hint: "Cataloging container components using Syft in SPDX or CycloneDX formats.",
    back: "Generating an <strong>SBOM</strong> with tools like Syft provides a machine-readable inventory of all software components in a container, enabling instant discovery of zero-day vulnerabilities.",
    tags: ["SBOM", "SBOM", "Security Compliance"]
  },
  {
    id: "k8s-cks-fc-399",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Software Bill of Materials (SBOM) Generation (Hybrid Migration)",
    hint: "Cataloging container components using Syft in SPDX or CycloneDX formats.",
    back: "Generating an <strong>SBOM</strong> with tools like Syft provides a machine-readable inventory of all software components in a container, enabling instant discovery of zero-day vulnerabilities.",
    tags: ["SBOM", "SBOM", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-fc-400",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    front: "Software Bill of Materials (SBOM) Generation (Resilience Failure)",
    hint: "Cataloging container components using Syft in SPDX or CycloneDX formats.",
    back: "Generating an <strong>SBOM</strong> with tools like Syft provides a machine-readable inventory of all software components in a container, enabling instant discovery of zero-day vulnerabilities.",
    tags: ["SBOM", "SBOM", "Resilience Failure"]
  }
];

export default K8S_CKS_FLASHCARDS_16;
