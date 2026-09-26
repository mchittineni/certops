export const CNCF_KCSA_QUESTIONS_20 = [
  {
    id: "cncf-kcsa-476",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "What a federal customer expects inside every SBOM",
    scenario: "A vendor of a Kubernetes backup product sells to a US federal agency whose contract requires an SBOM for each release that contains at least the NTIA minimum data fields. The vendor's current SBOMs list only package names and licence identifiers.",
    question: "Which set of fields must be added to satisfy the NTIA minimum elements?",
    options: [
      { id: 'A', text: "Container user IDs, Linux capabilities, open ports and mounted volumes for each workload" },
      { id: 'B', text: "Build host, compiler flags, CI job URL and the signing key fingerprint for each image release" },
      { id: 'C', text: "CVSS scores, exploit status and patch dates for each SBOM component, keyed by CVE identifiers" },
      { id: 'D', text: "Supplier, version, unique identifiers, dependency relationships, SBOM author and a timestamp" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The NTIA minimum elements define the baseline SBOM data fields: supplier name, component name, component version, other unique identifiers (such as a PURL or CPE), dependency relationships, the author of the SBOM data, and a timestamp. Automation support and practices for how SBOMs are produced and shared are also part of the minimum elements. Vulnerability scores and exploit status belong in vulnerability reports or VEX documents, not the SBOM baseline. Build host and CI details are provenance data, which SLSA attestations cover. Runtime settings such as user IDs and capabilities describe how a workload is deployed, not what the software contains.",
    referenceUrl: "https://www.ntia.gov/report/2021/minimum-elements-software-bill-materials-sbom",
    tags: ["SBOM", "NTIA", "Supply chain compliance"]
  },
  {
    id: "cncf-kcsa-477",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Customers' scanners flagging a CVE that cannot be reached",
    scenario: "A vendor's ingress controller image contains a compression library with a critical CVE, but the vulnerable function is never called by the product. Every customer's scanner flags the image, and support is overwhelmed with tickets. The vendor wants to tell customers' tools, in a machine-readable way, that the product is not affected and why.",
    question: "What should the vendor publish?",
    options: [
      { id: 'A', text: "A new SBOM that omits the vulnerable library so that customers' scanners stop matching the CVE to the image." },
      { id: 'B', text: "A VEX document stating not_affected for that CVE, with the justification that the vulnerable code never runs." },
      { id: 'C', text: "A SLSA provenance attestation showing the image was never built outside the vendor's hardened pipeline." },
      { id: 'D', text: "A cosign signature on the image so customers' admission policies trust it even if scanners say it is affected." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Vulnerability Exploitability eXchange (VEX) documents, in formats such as OpenVEX, CSAF or CycloneDX, let a supplier state for a product and CVE whether it is not_affected, affected, fixed or under_investigation, and a not_affected statement includes a justification such as vulnerable_code_not_in_execute_path. Scanners such as Trivy and Grype can consume VEX to suppress such findings. Removing the library from the SBOM makes the SBOM inaccurate, which defeats its purpose and breaks compliance. A signature proves who built the image, not whether a CVE is exploitable. Provenance describes how the image was built, not whether it is exposed to the CVE.",
    referenceUrl: "https://www.cisa.gov/resources-tools/resources/minimum-requirements-vulnerability-exploitability-exchange-vex",
    tags: ["VEX", "Vulnerability management", "Supply chain compliance"]
  },
  {
    id: "cncf-kcsa-478",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "The NIST practices behind a secure development attestation",
    scenario: "A platform vendor learns that its federal customers require suppliers to attest that their software was developed following a set of NIST secure development practices. The practices are grouped into preparing the organisation, protecting the software, producing well-secured software, and responding to vulnerabilities.",
    question: "Which NIST publication defines these practices?",
    options: [
      { id: 'A', text: "NIST SP 800-207, which describes Zero Trust Architecture" },
      { id: 'B', text: "NIST SP 800-53, the catalogue of security and privacy controls" },
      { id: 'C', text: "NIST SP 800-190, the Application Container Security Guide" },
      { id: 'D', text: "NIST SP 800-218, the SSDF practices document" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "NIST SP 800-218, the Secure Software Development Framework (SSDF), organises secure development practices into four groups: Prepare the Organization (PO), Protect the Software (PS), Produce Well-Secured Software (PW) and Respond to Vulnerabilities (RV). The CISA secure software development attestation form required for federal suppliers is based on it. SP 800-190 covers securing containers and orchestrators. SP 800-207 describes zero trust architecture. SP 800-53 is a broad control catalogue for systems rather than a set of software development practices.",
    referenceUrl: "https://csrc.nist.gov/pubs/sp/800/218/final",
    tags: ["SSDF", "NIST SP 800-218", "Secure development"]
  },
  {
    id: "cncf-kcsa-479",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "An exploited flaw in an operator sold in the EU",
    scenario: "A German company sells a commercial Kubernetes operator to customers across the EU. In late September 2026 it learns that attackers are actively exploiting a vulnerability in the operator. No personal data is involved, and the company is not an essential or important entity under NIS2.",
    question: "What does the EU Cyber Resilience Act require of the manufacturer?",
    options: [
      { id: 'A', text: "A fixed release within 14 days, with customers told through the product changelog and release notes." },
      { id: 'B', text: "An early warning via the CRA single reporting platform within 24 hours, then fuller reports later." },
      { id: 'C', text: "A notice to its data protection authority within 72 hours, as for any personal data breach under GDPR." },
      { id: 'D', text: "Nothing yet, because the Cyber Resilience Act applies to products only from December 2027 onwards." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Most Cyber Resilience Act obligations apply from 11 December 2027, but manufacturers' reporting obligations have applied since 11 September 2026. For an actively exploited vulnerability, the manufacturer must send an early warning within 24 hours of becoming aware, a vulnerability notification within 72 hours, and a final report within 14 days of a corrective measure being available. These go through the single reporting platform to the designated CSIRT and ENISA. The GDPR 72-hour notice applies only to personal data breaches, which is not the case here. The CRA sets reporting deadlines, not a fixed 14-day patch deadline, and a changelog entry does not replace the notifications.",
    referenceUrl: "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
    tags: ["Cyber Resilience Act", "Vulnerability reporting", "EU regulation"]
  },
  {
    id: "cncf-kcsa-480",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Comparing the security hygiene of two open-source libraries",
    scenario: "A platform team must choose between two open-source Helm plugins. Policy requires an automated, repeatable assessment of each project's security practices, such as branch protection, code review, pinned dependencies, signed releases and whether it is still maintained.",
    question: "Which tool provides this assessment?",
    options: [
      { id: 'A', text: "Grype, which matches the packages listed in an image or SBOM against CVE feeds" },
      { id: 'B', text: "kube-bench, which runs automated CIS Benchmark checks against cluster nodes" },
      { id: 'C', text: "Falco, which detects unexpected runtime behaviour in a project's containers" },
      { id: 'D', text: "OpenSSF Scorecard, which runs automated checks on repository practices" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "OpenSSF Scorecard runs automated checks against a source repository, including Branch-Protection, Code-Review, Pinned-Dependencies, Signed-Releases, Maintained, Dangerous-Workflow and more, and gives each a score, which suits comparing projects before adopting them. kube-bench checks cluster configuration, not open-source projects. Falco watches running workloads. Grype reports known vulnerabilities in packages, which says little about a project's development practices.",
    referenceUrl: "https://scorecard.dev/",
    tags: ["OpenSSF Scorecard", "Dependency selection"]
  },
  {
    id: "cncf-kcsa-481",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Proving every deployed image came from the approved builder",
    scenario: "An auditor asks a fintech to prove that every image running in production was built from the company's own repositories by its approved CI builder, and to show evidence for any given deployment date. The company already generates signed SLSA provenance for each build.",
    question: "What should the company add to meet the requirement?",
    options: [
      { id: 'A', text: "Scan each image with Trivy before deployment and attach the scan results to the change ticket as proof." },
      { id: 'B', text: "Generate an SPDX SBOM for each image and keep it with the provenance in the registry as evidence." },
      { id: 'C', text: "Verify each image's provenance for builder ID and source repo before deploying, and retain it as evidence." },
      { id: 'D', text: "Enforce the restricted Pod Security Standard on every production namespace and export the namespace labels." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Provenance proves nothing unless it is checked. Verifying the signed provenance (with slsa-verifier, or an admission policy such as Kyverno or the Sigstore policy-controller) against the expected builder identity and source repository blocks images from anywhere else. Keeping the attestations provides evidence for any date. An SBOM lists contents but does not prove who built the image or from which source. A vulnerability scan says nothing about origin. Pod Security Standards govern runtime privileges, not build provenance.",
    referenceUrl: "https://slsa.dev/spec/v1.0/verifying-artifacts",
    tags: ["SLSA", "Provenance verification", "Audit evidence"]
  },
  {
    id: "cncf-kcsa-482",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Finding copyleft components across 600 images",
    scenario: "A telecom's legal team must confirm, before a product ships to customers, that none of the 600 container images in the release include components under GPL-3.0 or AGPL-3.0 licences. Engineers suggest reading each project's documentation.",
    question: "Which approach produces a reliable, repeatable answer?",
    options: [
      { id: 'A', text: "Enforce admission policies that allow only images whose repository name matches the approved vendor list." },
      { id: 'B', text: "Run a vulnerability scan on each image and treat images with no Critical findings as licence-compliant." },
      { id: 'C', text: "Require cosign signatures from every upstream project so that only reviewed components can be included." },
      { id: 'D', text: "Generate SBOMs with SPDX licence identifiers for every image and query them for the disallowed licences." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "SBOMs record each component's declared or concluded licence as standard SPDX licence identifiers, so a policy query across all 600 SBOMs can find GPL-3.0 or AGPL-3.0 components automatically and repeat the check on every release. Vulnerability severity has nothing to do with licence obligations. Registry naming says nothing about the licences of the packages inside an image. Signatures show who built an artifact and say nothing about its licence.",
    referenceUrl: "https://spdx.dev/learn/handling-license-info/",
    tags: ["SBOM", "Licence compliance", "SPDX"]
  },
  {
    id: "cncf-kcsa-483",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Signing the federal secure software attestation form",
    scenario: "A SaaS company whose Kubernetes-based product is used by a US federal agency has been asked to submit the CISA Secure Software Development Attestation Form. The engineering director asks who must sign it, what it covers, and whether there is an alternative to self-attestation.",
    question: "Which statement is accurate?",
    options: [
      { id: 'A', text: "The agency's CISO signs after reviewing the supplier's SBOM, which then replaces any supplier attestation." },
      { id: 'B', text: "The supplier's auditor signs a SOC 2 Type II opinion, which the form accepts in place of any SSDF practices." },
      { id: 'C', text: "The CEO or a designee signs, attesting to SSDF-based practices; a 3PAO assessment is an allowed alternative." },
      { id: 'D', text: "Any engineer may sign; it confirms the product has passed a CIS Benchmark scan within the last 12 months." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The CISA form implements OMB requirements that followed Executive Order 14028. It must be signed by the software producer's CEO or a designee who can bind the company, and it attests to secure development practices derived from NIST SP 800-218 (SSDF), such as secure build environments, provenance for third-party components and vulnerability disclosure. An assessment by a FedRAMP-accredited or other approved third-party assessment organisation (3PAO) can be submitted instead. The form is not about CIS Benchmarks, the agency does not sign on the supplier's behalf, and an SBOM or SOC 2 report does not replace the attestation.",
    referenceUrl: "https://www.cisa.gov/secure-software-attestation-form",
    tags: ["EO 14028", "SSDF", "Attestation"]
  },
  {
    id: "cncf-kcsa-484",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Where pinning third-party dependencies fits",
    scenario: "A team is organising its supply chain controls around the five areas of the CNCF Software Supply Chain Best Practices paper. It needs to file a control that requires third-party libraries and base images to be pinned, verified and sourced from trusted locations.",
    question: "Which area does this control belong to?",
    options: [
      { id: 'A', text: "Securing the artefacts after publishing" },
      { id: 'B', text: "Securing the source code repositories" },
      { id: 'C', text: "Securing the deployments to clusters" },
      { id: 'D', text: "Securing the materials used in builds" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The CNCF paper groups controls into securing source code, materials, build pipelines, artefacts and deployments. Materials are the inputs a build consumes, such as third-party dependencies and base images, so pinning, verifying and trusting their sources belongs there. Source code controls cover repositories, reviews and commit signing. Artefact controls cover signing and publishing build outputs. Deployment controls cover verifying artefacts before they run in clusters.",
    referenceUrl: "https://github.com/cncf/tag-security/blob/main/community/working-groups/supply-chain-security/supply-chain-security-paper/CNCF_SSCP_v1.pdf",
    tags: ["CNCF supply chain paper", "Materials", "Dependencies"]
  },
  {
    id: "cncf-kcsa-485",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A maturity model for consuming open-source packages",
    scenario: "An insurer's engineering teams pull npm, PyPI and Go modules directly from public registries into images deployed on Kubernetes. The CISO wants a maturity framework focused specifically on how the organisation consumes open source: ingesting through a mirror, scanning, inventorying, updating, and eventually rebuilding critical packages internally.",
    question: "Which framework is designed for this?",
    options: [
      { id: 'A', text: "The CIS Kubernetes Benchmark, whose Level 2 profile covers package ingestion" },
      { id: 'B', text: "NIST CSF 2.0, which groups cybersecurity outcomes into six top-level functions" },
      { id: 'C', text: "SLSA, the maturity framework grading how securely you build your own artifacts" },
      { id: 'D', text: "OpenSSF S2C2F, the Secure Supply Chain Consumption Framework with maturity levels" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The OpenSSF Secure Supply Chain Consumption Framework (S2C2F) addresses how organisations consume open-source dependencies. Its practices include ingesting through controlled mirrors, scanning, inventory, updating, auditing, enforcement and rebuilding, arranged in four maturity levels. SLSA focuses on the integrity of artifacts you build and publish, not on how you consume packages. NIST CSF is a broad outcome framework with no consumption-specific practices. The CIS Kubernetes Benchmark covers cluster configuration and has nothing on package ingestion.",
    referenceUrl: "https://github.com/ossf/s2c2f",
    tags: ["S2C2F", "Open source consumption", "OpenSSF"]
  },
  {
    id: "cncf-kcsa-486",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Letting a regulator check that the binary matches the source",
    scenario: "A voting-technology vendor deploys its tabulation service on Kubernetes. The election regulator wants to independently confirm that the container images running in production were produced from the published source code, without having to trust the vendor's build infrastructure or signing keys.",
    question: "Which practice enables this?",
    options: [
      { id: 'A', text: "Publishing an SBOM for each image that lists every package and version the vendor used in the build" },
      { id: 'B', text: "Signing every image with the vendor's cosign key and publishing the public key for the regulator" },
      { id: 'C', text: "Making builds reproducible so the regulator can rebuild the image and compare the digest it gets" },
      { id: 'D', text: "Running the vendor's CI on a SLSA Build Level 3 platform and publishing its signed provenance" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "With reproducible builds, the same source and build instructions always produce bit-for-bit identical output. The regulator can rebuild independently and compare its digest with the one in production, which needs no trust in the vendor's infrastructure or keys. A vendor signature only proves the vendor vouched for the image. An SBOM is the vendor's own statement of contents. SLSA Level 3 provenance is strong evidence, but it is still produced and signed by the vendor's build platform, which the regulator wants to avoid relying on.",
    referenceUrl: "https://reproducible-builds.org/docs/definition/",
    tags: ["Reproducible builds", "Verification", "Supply chain"]
  },
  {
    id: "cncf-kcsa-487",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "An SBOM that missed a vendored dependency",
    scenario: "A logistics company produces SBOMs by scanning finished images. A critical CVE was later found in a library that a Rust service had statically compiled into its binary, and the library did not appear in the SBOM for that image. The compliance team needs SBOMs that capture such components.",
    question: "Which change most improves SBOM completeness?",
    options: [
      { id: 'A', text: "Switch the SBOM format from SPDX to CycloneDX, because only CycloneDX records statically linked libraries." },
      { id: 'B', text: "Move the service to a distroless base image, so the scanner can see all its libraries with less OS clutter." },
      { id: 'C', text: "Generate the SBOM at build time from lockfiles and compiler output, then merge it with the image-level SBOM." },
      { id: 'D', text: "Scan the images more often, since the scanner's vulnerability database updates daily and fills gaps." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Scanners that inspect a finished image mostly rely on OS package databases and language metadata files. Code statically compiled into a binary often leaves no such trace unless the toolchain embeds metadata, as Go does with buildinfo and Rust does only with cargo-auditable. Generating the SBOM during the build, from Cargo.lock and the resolved dependency graph, and combining it with the image-level SBOM captures these components. Scanning more often uses a newer CVE database but still cannot see components missing from the inventory. SPDX and CycloneDX can both represent any component. A distroless base removes OS packages but does not reveal libraries inside the binary.",
    referenceUrl: "https://www.cisa.gov/sbom",
    tags: ["SBOM", "Build-time SBOM", "Static linking"]
  },
  {
    id: "cncf-kcsa-488",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Automating the CIS checks on every node",
    scenario: "A university runs several self-managed kubeadm clusters and wants a free, open-source tool that checks control-plane and worker nodes against the CIS Kubernetes Benchmark, runs as a Kubernetes Job on each node, and reports PASS, FAIL and WARN with a suggested remediation for each item.",
    question: "Which tool should the team use?",
    options: [
      { id: 'A', text: "cosign from the Sigstore project" },
      { id: 'B', text: "Falco from the Falco project" },
      { id: 'C', text: "kube-bench from Aqua Security" },
      { id: 'D', text: "Syft from Anchore for SBOMs" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "kube-bench implements the CIS Kubernetes Benchmark checks, detects the Kubernetes version to choose the right benchmark, runs on nodes (often as a Job with host access) and reports PASS, FAIL, WARN and INFO with remediation text. It also has targets for managed services such as EKS, GKE and AKS. Falco is a runtime threat detection engine. Syft generates SBOMs from images and filesystems. cosign signs and verifies artifacts.",
    referenceUrl: "https://github.com/aquasecurity/kube-bench",
    tags: ["kube-bench", "CIS Benchmark", "Automation"]
  },
  {
    id: "cncf-kcsa-489",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "One scanner for NSA, MITRE and CIS views of a cluster",
    scenario: "A security team wants a single open-source CNCF tool that can scan a live cluster and also the YAML and Helm charts in pull requests. It should report findings against the NSA/CISA hardening guidance, MITRE ATT&CK-based controls and the CIS Benchmark, with an overall compliance score per framework.",
    question: "Which tool meets these requirements?",
    options: [
      { id: 'A', text: "kube-bench, which checks each node's configuration against the CIS items" },
      { id: 'B', text: "Syft, which builds package inventories for images, directories and archives" },
      { id: 'C', text: "Kubescape, which scans clusters and manifests against several frameworks" },
      { id: 'D', text: "Falco, which alerts on suspicious system calls made inside running containers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubescape, a CNCF project, scans running clusters, YAML files and Helm charts, including in CI, and maps its controls to frameworks such as NSA-CISA, MITRE and CIS, giving a compliance score for each. kube-bench is limited to CIS node and control-plane checks and does not scan manifests in pull requests. Syft generates SBOMs. Falco performs runtime detection rather than configuration compliance scoring.",
    referenceUrl: "https://kubescape.io/docs/",
    tags: ["Kubescape", "Compliance scanning", "Frameworks"]
  },
  {
    id: "cncf-kcsa-490",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Catching privileged: true before it merges",
    scenario: "A retailer's developers keep submitting manifests with privileged containers, hostPath mounts and missing resource limits. Admission control rejects them at deploy time, but only after the change has merged, which causes failed releases. The team wants the same kinds of issues flagged on the pull request.",
    question: "What should be added to the CI pipeline?",
    options: [
      { id: 'A', text: "A kube-bench run against the CI runner so that node configuration issues are reported on each pull request." },
      { id: 'B', text: "A cosign verification step so that unsigned manifests are rejected before any reviewer can approve them." },
      { id: 'C', text: "A Falco sidecar in the CI job so that privileged behaviour is detected while the pipeline tests execute." },
      { id: 'D', text: "A manifest misconfiguration scan, like Trivy config, Checkov or kube-linter, failing the pull request." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Static misconfiguration scanners parse Kubernetes YAML, Helm and Kustomize output and flag settings such as privileged containers, hostPath volumes and missing limits, so running one on every pull request gives feedback before merge. Admission control remains the enforcement point. kube-bench checks the configuration of the machine it runs on, not the manifests in a change. Falco detects runtime behaviour and would not inspect manifests. Signing proves who produced a file, not whether its settings are safe.",
    referenceUrl: "https://trivy.dev/latest/docs/scanner/misconfiguration/",
    tags: ["Shift left", "Misconfiguration scanning", "CI"]
  },
  {
    id: "cncf-kcsa-491",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "One Rego policy library for CI and admission",
    scenario: "A bank enforces pod rules with OPA Gatekeeper ConstraintTemplates written in Rego. Its CI pipeline uses a separate, hand-written script to approximate the same rules, and the two drift apart: pull requests pass CI and then fail admission. The bank wants a single policy library evaluated identically in both places.",
    question: "What should the team do?",
    options: [
      { id: 'A', text: "Evaluate the same ConstraintTemplates and constraints in CI with Gatekeeper's gator CLI before admission." },
      { id: 'B', text: "Keep the CI script and switch Gatekeeper to dryrun so admission no longer fails where CI has already passed." },
      { id: 'C', text: "Move all checks into kube-bench, which can evaluate both Kubernetes manifests and running pods in a cluster." },
      { id: 'D', text: "Translate the same ConstraintTemplates into Kyverno policies for CI, which use a simpler YAML syntax." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Gatekeeper's gator CLI evaluates ConstraintTemplates and constraints against manifests offline, and its test suites can be run in CI. The same policy code that admission enforces then gates pull requests, so they cannot drift. The same approach works with conftest for plain Rego policies. Rewriting the CI rules for a different engine creates a second library that can still drift from Gatekeeper. Switching admission to dryrun removes enforcement to hide the mismatch. kube-bench audits node and control-plane configuration against CIS, not arbitrary manifests or custom Rego rules.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/gator/",
    tags: ["Policy as code", "OPA Gatekeeper", "gator"]
  },
  {
    id: "cncf-kcsa-492",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Change detection for critical files inside containers",
    scenario: "A payment processor's PCI DSS assessor asks how the company detects unauthorised changes to critical system files, as required by the standard's change-detection requirement, now that most of its workloads run in containers on Kubernetes rather than on VMs with a traditional agent.",
    question: "Which tool can provide runtime change detection for containers?",
    options: [
      { id: 'A', text: "Falco rules that alert on writes to binary directories and sensitive files" },
      { id: 'B', text: "Trivy scans of each image in the registry for known package vulnerabilities" },
      { id: 'C', text: "Syft SBOMs that list each file shipped in the image at the time of build" },
      { id: 'D', text: "kube-bench checks that the kubelet config files have root ownership and 600" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Falco observes system calls at runtime and ships rules for writes below binary directories and to sensitive files such as those under /etc. Its alerts, forwarded to a SIEM, provide the change detection PCI DSS Requirement 11.5.2 expects, for containers as well as for hosts. kube-bench checks node configuration file permissions at the time of a scan, not changes inside running containers. An SBOM describes the image at build time. Registry scans find known vulnerabilities, not runtime modifications.",
    referenceUrl: "https://falco.org/docs/concepts/rules/",
    tags: ["Falco", "PCI DSS", "File integrity monitoring"]
  },
  {
    id: "cncf-kcsa-493",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Compliance status as Kubernetes resources",
    scenario: "A platform team wants compliance results for its clusters to be available as Kubernetes custom resources that it can query with kubectl and alert on. The results should include per-workload configuration audits and an aggregated report against the CIS and NSA frameworks and the Pod Security Standards, refreshed on a schedule.",
    question: "Which tool provides this?",
    options: [
      { id: 'A', text: "The kubeadm CLI, whose upgrade plan reports version and component drift" },
      { id: 'B', text: "The Trivy Operator, with ConfigAuditReports and ClusterComplianceReports" },
      { id: 'C', text: "The cosign CLI, with signatures and attestations kept as OCI artifacts" },
      { id: 'D', text: "The metrics-server, with resource metrics served via the Metrics API" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Trivy Operator runs inside the cluster and publishes its results as CRDs. VulnerabilityReports and ConfigAuditReports are created per workload, and ClusterComplianceReports aggregate checks against specifications such as the CIS Benchmark, the NSA/CISA hardening guidance and the Pod Security Standards on a cron schedule, so results can be queried with kubectl and fed to alerting. cosign stores signatures in registries, not compliance results. kubeadm upgrade plan shows available versions. metrics-server provides CPU and memory metrics.",
    referenceUrl: "https://aquasecurity.github.io/trivy-operator/latest/docs/crds/clustercompliance-report/",
    tags: ["Trivy Operator", "Compliance reports", "CRDs"]
  },
  {
    id: "cncf-kcsa-494",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Measuring policy compliance before enforcing Kyverno rules",
    scenario: "A media company has written Kyverno policies requiring labels, resource limits and non-root containers. Before enforcing them, it wants a report of which existing and new resources would violate each policy, without blocking any deployments.",
    question: "How should the policies be configured?",
    options: [
      { id: 'A', text: "In Audit mode, so results appear in PolicyReport resources" },
      { id: 'B', text: "As generate rules that copy each violating resource elsewhere" },
      { id: 'C', text: "As mutate rules that silently fix the resources on admission" },
      { id: 'D', text: "In Enforce mode, with failurePolicy set to Ignore on each one" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kyverno validate rules in Audit mode (validationFailureAction or failureAction set to Audit) allow requests through while recording each pass and fail in PolicyReport and ClusterPolicyReport resources. Background scanning also evaluates existing resources, so the team gets a full compliance picture before switching to Enforce. Enforce blocks violating requests, and failurePolicy only covers webhook errors. Generate rules create resources rather than report on them. Mutate rules change resources, which hides the violations the team wants to measure.",
    referenceUrl: "https://kyverno.io/docs/policy-reports/",
    tags: ["Kyverno", "PolicyReport", "Audit mode"]
  },
  {
    id: "cncf-kcsa-495",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Profile-based scans and remediation on OpenShift",
    scenario: "A government agency runs Red Hat OpenShift and must regularly scan both the platform and its nodes against profiles such as CIS, NIST SP 800-53 Moderate and PCI DSS, with results stored as cluster resources and an option to apply suggested remediations automatically.",
    question: "Which tool is built for this?",
    options: [
      { id: 'A', text: "kube-bench, which runs fixed CIS profiles as a Job on nodes, with no remediation" },
      { id: 'B', text: "The Compliance Operator, which runs OpenSCAP scans with selectable profiles" },
      { id: 'C', text: "Kyverno, which validates, mutates and generates resources at admission time" },
      { id: 'D', text: "Falco, which alerts on system call activity that matches its detection rules" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The OpenShift Compliance Operator uses OpenSCAP content to scan the platform and nodes against selectable profiles, including CIS, NIST SP 800-53 Moderate or High, PCI DSS and others. Scans are defined with ScanSettingBinding resources, results are stored as ComplianceCheckResult objects, and ComplianceRemediation objects can be applied automatically or manually. kube-bench covers only CIS and does not remediate. Kyverno enforces admission policies rather than scanning nodes against compliance profiles. Falco is runtime detection.",
    referenceUrl: "https://docs.redhat.com/en/documentation/openshift_container_platform/4.16/html/security_and_compliance/compliance-operator",
    tags: ["Compliance Operator", "OpenSCAP", "OpenShift"]
  },
  {
    id: "cncf-kcsa-496",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Auditors rejecting screenshots as evidence",
    scenario: "A health insurer's auditors rejected last year's evidence for its Kubernetes controls because it was a folder of screenshots and exported spreadsheets that could have been edited after the fact. This year they want evidence that proves the controls operated continuously throughout the audit period and was not altered.",
    question: "Which approach produces acceptable evidence?",
    options: [
      { id: 'A', text: "Schedule scans and export timestamped results to write-once storage with retention for the whole period." },
      { id: 'B', text: "Grant the auditors cluster-admin so they can inspect the live cluster's current state whenever they like." },
      { id: 'C', text: "Keep the screenshots but have the CISO sign each one, stating it reflects the state on the day it was taken." },
      { id: 'D', text: "Run all scanners on the first and last day of the period and hand over their raw output files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Continuous, tamper-evident evidence comes from automation. Scheduled scans (CIS, policy reports, vulnerability reports) whose machine-readable results are timestamped and written to immutable, write-once storage with retention covering the period show both that controls ran throughout and that results were not edited. Hashing or signing the exports strengthens this further. Two scans only show two points in time. Live access shows the present state, not the history, and giving auditors cluster-admin violates least privilege. A signature on a screenshot asserts that it is accurate but does not make the underlying data verifiable.",
    referenceUrl: "https://csrc.nist.gov/pubs/sp/800/137/final",
    tags: ["Audit evidence", "Continuous compliance", "Immutability"]
  },
  {
    id: "cncf-kcsa-497",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A kubeconfig pushed to a GitOps repository",
    scenario: "A developer accidentally committed a kubeconfig containing a service account token to the Git repository that Argo CD syncs from. It was found three weeks later during a manual review. The company wants this class of mistake blocked automatically in the future.",
    question: "Which control addresses the problem most directly?",
    options: [
      { id: 'A', text: "Enforce signed commits on the repository so that each change can be attributed to a verified developer." },
      { id: 'B', text: "Run a Trivy vulnerability scan on each image built from the repo and fail builds on High findings." },
      { id: 'C', text: "Enable Argo CD automated sync with self-heal so that manual changes in the cluster are reverted to Git." },
      { id: 'D', text: "Run a secret scanner such as gitleaks in pre-commit hooks and CI, and enable push protection on the repo." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Secret scanners such as gitleaks or TruffleHog detect credentials such as tokens, private keys and kubeconfig data in commits. Run as pre-commit hooks, in CI, and through the hosting platform's push protection, they stop the secret before it lands or flag it immediately. The leaked token must still be revoked. Image vulnerability scans look for CVEs in packages, not credentials in the Git history. Argo CD self-heal keeps the cluster in line with Git but does nothing about secrets in Git. Signed commits attribute the mistake to a developer but do not prevent it.",
    referenceUrl: "https://github.com/gitleaks/gitleaks",
    tags: ["Secret scanning", "GitOps", "CI"]
  },
  {
    id: "cncf-kcsa-498",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A popular CI action whose tags were repointed",
    scenario: "A fintech's image-build workflows referenced a widely used third-party GitHub Action by its version tag. Attackers compromised the action's repository and moved all of its tags to a malicious commit that printed CI secrets, including registry push tokens, into build logs. The company wants to prevent a repeat.",
    question: "Which change most directly prevents this class of attack?",
    options: [
      { id: 'A', text: "Sign the images with cosign at the end of the workflow so that tampered images fail verification later." },
      { id: 'B', text: "Scan the final images with Grype and block the push if any Critical vulnerability is found in them." },
      { id: 'C', text: "Reference every third-party action by version tag plus a floating major alias, never a commit." },
      { id: 'D', text: "Pin third-party actions to full commit SHAs and give the workflow token only the permissions it needs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Git tags are mutable, so a workflow that uses an action by tag runs whatever commit the tag currently points at. The 2025 tj-actions/changed-files compromise worked exactly this way. Pinning to a full commit SHA makes the reference immutable, and OpenSSF Scorecard's Pinned-Dependencies check flags unpinned actions. Minimising token permissions and secret exposure limits the damage if something malicious still runs. A floating major-version alias is even more mutable. Vulnerability scanning of the output image cannot see secrets leaked from the build job. Signing happens in the same compromised workflow, and the leaked tokens could be used directly without any image.",
    referenceUrl: "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions",
    tags: ["CI hardening", "Dependency pinning", "GitHub Actions"]
  },
  {
    id: "cncf-kcsa-499",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Generate the inventory once, scan it again and again",
    scenario: "A retailer wants to produce an SBOM for each image when it is built, store the SBOM, and rescan the stored SBOMs every night against the latest vulnerability data without pulling the images again. It prefers two focused open-source tools from the same vendor.",
    question: "Which pairing fits?",
    options: [
      { id: 'A', text: "Kyverno to enforce policies, and Policy Reporter to display them" },
      { id: 'B', text: "Syft to generate SBOMs, and Grype to scan them for known CVEs" },
      { id: 'C', text: "cosign to sign SBOMs, and Rekor to log each signature publicly" },
      { id: 'D', text: "kube-bench to check nodes, and Falco to alert on runtime events" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Anchore's Syft generates SBOMs in SPDX, CycloneDX or its own format from images and filesystems, and Grype scans images or stored SBOMs against current vulnerability databases. Nightly rescans of saved SBOMs therefore need no image pulls. cosign and Rekor cover signing and transparency, not inventory or vulnerability matching. kube-bench and Falco address node configuration and runtime detection. Kyverno and Policy Reporter handle admission policy and its reporting.",
    referenceUrl: "https://github.com/anchore/grype",
    tags: ["Syft", "Grype", "SBOM"]
  },
  {
    id: "cncf-kcsa-500",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Tracking CIS drift between annual audits",
    scenario: "A bank passes its annual CIS Benchmark review, but engineers regularly tweak kubelet and API server flags during incidents, and some changes are never reverted. The compliance team wants to detect drift from the baseline within a day, across 25 self-managed clusters, and keep a history of results.",
    question: "Which approach meets the goal?",
    options: [
      { id: 'A', text: "Enforce the restricted Pod Security Standard cluster-wide so kubelet and API server flags cannot be changed." },
      { id: 'B', text: "Run kube-bench manually before each annual audit and fix the failures in its results that week." },
      { id: 'C', text: "Enable the API server audit log at RequestResponse so any change to kubelet flags is captured as it happens." },
      { id: 'D', text: "Run kube-bench as a scheduled Job on every node daily and ship results to central storage with alerting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Scheduling kube-bench (for example as a daily Job or CronJob with the required host access on control-plane and worker nodes) and sending its JSON results to central storage with alerts on new failures detects drift within a day and builds a history for auditors. A tool such as the Trivy Operator's CIS compliance report can serve the same purpose. Annual manual runs miss drift for most of the year. Kubelet and API server flags are changed on the nodes, in files and static pod manifests, not through the Kubernetes API, so the audit log does not see them. Pod Security Standards restrict pod specs and have no effect on component flags.",
    referenceUrl: "https://github.com/aquasecurity/kube-bench",
    tags: ["kube-bench", "Configuration drift", "Continuous compliance"]
  }
];

export default CNCF_KCSA_QUESTIONS_20;
