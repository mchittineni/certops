export const CNCF_KCSA_FLASHCARDS_20 = [
  {
    id: 'cncf-kcsa-fc-476',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What did US Executive Order 14028 set in motion for software supply chain security?',
    hint: 'May 2021, following SolarWinds.',
    back: 'EO 14028, <strong>Improving the Nation\'s Cybersecurity</strong> (May 2021), directed NIST to define secure software development guidance, which became the <strong>SSDF</strong> (SP 800-218). It led to <strong>SBOM</strong> minimum elements from NTIA and to <strong>self-attestation</strong> requirements for federal software suppliers through the CISA form. It also pushed agencies toward zero trust architecture and better logging.',
    tags: ['EO 14028', 'Supply chain compliance']
  },
  {
    id: 'cncf-kcsa-fc-477',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What are the four VEX status values, and what must accompany not_affected?',
    hint: 'Affected, not, fixed, still looking.',
    back: 'The four statuses are <strong>not_affected</strong>, <strong>affected</strong>, <strong>fixed</strong> and <strong>under_investigation</strong>. A not_affected statement needs a <strong>justification</strong>, such as component_not_present, vulnerable_code_not_present, vulnerable_code_not_in_execute_path, vulnerable_code_cannot_be_controlled_by_adversary, or inline_mitigations_already_exist. An affected statement should include an action statement telling users what to do.',
    tags: ['VEX', 'Vulnerability management']
  },
  {
    id: 'cncf-kcsa-fc-478',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'CISA describes six SBOM types by when they are produced. What are they?',
    hint: 'From design to runtime.',
    back: '<strong>Design</strong>: planned components, before the software exists. <strong>Source</strong>: generated from the source tree and lockfiles. <strong>Build</strong>: generated during the build, so it is the most complete for compiled dependencies. <strong>Analyzed</strong>: produced by scanning a finished artifact such as an image. <strong>Deployed</strong>: what is installed in an environment. <strong>Runtime</strong>: what is actually loaded while the software runs. Build and analyzed SBOMs are the most common for container images.',
    tags: ['SBOM', 'SBOM types']
  },
  {
    id: 'cncf-kcsa-fc-479',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'PURL vs CPE: which identifier should an SBOM use for a component, and why does it matter?',
    hint: 'Package ecosystems versus the NVD dictionary.',
    back: 'A <strong>PURL</strong> (package URL, for example pkg:npm/lodash@4.17.21 or pkg:deb/debian/openssl@3.0.11) identifies a package by ecosystem, name and version, and maps cleanly to ecosystem advisories such as OSV and GitHub. A <strong>CPE</strong> is the NVD naming scheme, and matching against it is often ambiguous for open-source packages. Including PURLs, and CPEs where they are available, makes vulnerability matching and VEX statements accurate, and <strong>unique identifiers</strong> are an NTIA minimum element.',
    tags: ['SBOM', 'PURL', 'CPE']
  },
  {
    id: 'cncf-kcsa-fc-480',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'How is OpenSSF Scorecard run, and what does it produce?',
    hint: 'A CLI, a GitHub Action, or a public API.',
    back: 'Scorecard runs as a <strong>CLI</strong> against any repository, as a <strong>GitHub Action</strong> on your own repositories, or through a public API with weekly scans of popular projects. It runs checks such as Branch-Protection, Code-Review, Pinned-Dependencies, Token-Permissions, Signed-Releases, Vulnerabilities and Maintained. Each check gets a score from 0 to 10, and there is an overall score. Use it to vet dependencies and to harden your own repositories.',
    tags: ['OpenSSF Scorecard']
  },
  {
    id: 'cncf-kcsa-fc-481',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'How do SSDF and SLSA relate to each other?',
    hint: 'What to do, versus how strongly the build is protected.',
    back: 'The <strong>SSDF</strong> (NIST SP 800-218) is a broad set of secure development <strong>practices</strong> across the organisation, protecting code, producing secure software and responding to vulnerabilities. It says <em>what</em> to do but not how. <strong>SLSA</strong> is a detailed, levelled framework for <strong>build integrity and provenance</strong>. Meeting SLSA build levels is concrete evidence for several SSDF practices, such as protecting the build environment and keeping provenance.',
    tags: ['SSDF', 'SLSA']
  },
  {
    id: 'cncf-kcsa-fc-482',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What are the four S2C2F maturity levels?',
    hint: 'From knowing what you use to rebuilding it yourself.',
    back: '<strong>Level 1</strong>: use package managers, keep an inventory, scan for known vulnerabilities, and update. <strong>Level 2</strong>: scan for vulnerabilities and licences in CI, measure time to patch, and audit that consumption goes through approved sources. <strong>Level 3</strong>: ingest everything through an internal <strong>mirror</strong> or proxy, and scan for malware and end-of-life packages. <strong>Level 4</strong>: <strong>rebuild</strong> critical open source from source internally, sign it, and be able to fix it privately.',
    tags: ['S2C2F', 'Open source consumption']
  },
  {
    id: 'cncf-kcsa-fc-483',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What does the EU Cyber Resilience Act require of software manufacturers, and when?',
    hint: 'Two dates: September 2026 and December 2027.',
    back: 'It applies to products with digital elements sold in the EU. From <strong>11 September 2026</strong>, manufacturers must report <strong>actively exploited vulnerabilities</strong> and severe incidents through the single reporting platform: an early warning within <strong>24 hours</strong>, a notification within 72 hours, and a final report. From <strong>11 December 2027</strong>, the full obligations apply: secure by design and by default, vulnerability handling, an <strong>SBOM</strong> for the product, security updates for the support period, and CE marking.',
    tags: ['Cyber Resilience Act', 'EU regulation']
  },
  {
    id: 'cncf-kcsa-fc-484',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Which benchmark targets can kube-bench run, and how does it pick a benchmark version?',
    hint: 'It detects the version and maps it to a benchmark.',
    back: 'kube-bench detects the Kubernetes version and chooses the matching <strong>CIS benchmark</strong>, which you can override with --benchmark. Its <strong>targets</strong> are master (control plane), node, etcd, policies and controlplane, and there are managed-service benchmarks such as eks, gke and aks. It runs as a binary on the host or as a Kubernetes <strong>Job</strong> with host PID and host mounts, and can output text or JSON.',
    tags: ['kube-bench', 'CIS Benchmark']
  },
  {
    id: 'cncf-kcsa-fc-485',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Where can Kubescape run, and which frameworks does it score against?',
    hint: 'Laptop, pipeline, cluster.',
    back: 'Kubescape runs as a <strong>CLI</strong> against a live cluster or local YAML and Helm charts, in <strong>CI</strong>, as an <strong>IDE</strong> extension, or as an in-cluster <strong>operator</strong> that keeps scanning configuration, vulnerabilities and runtime behaviour. It scores against frameworks such as <strong>NSA-CISA</strong>, <strong>MITRE ATT&amp;CK</strong>-based controls and <strong>CIS</strong> benchmarks. It is a CNCF project.',
    tags: ['Kubescape', 'Compliance scanning']
  },
  {
    id: 'cncf-kcsa-fc-486',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What can Trivy scan, and what does it look for?',
    hint: 'Many targets, several scanners.',
    back: '<strong>Targets</strong>: container images, filesystems, Git repositories, VM images, <strong>Kubernetes clusters</strong> and <strong>SBOMs</strong>. <strong>Scanners</strong>: known vulnerabilities (OS and language packages), <strong>misconfigurations</strong> (Kubernetes YAML, Helm, Terraform, Dockerfile; tfsec was folded into Trivy), <strong>exposed secrets</strong>, and licences. Trivy can also generate SBOMs in CycloneDX or SPDX format.',
    tags: ['Trivy', 'Scanning']
  },
  {
    id: 'cncf-kcsa-fc-487',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What is the PolicyReport API, and why is it useful for compliance tooling?',
    hint: 'A shared result format from the Policy Working Group.',
    back: '<strong>PolicyReport</strong> and <strong>ClusterPolicyReport</strong> are CRDs from the Kubernetes Policy Working Group. They give a common format for results: pass, fail, warn, error or skip for each resource and rule. <strong>Kyverno</strong> writes them natively, and adapters exist for other tools such as kube-bench and Trivy. A single viewer such as <strong>Policy Reporter</strong> can then aggregate, display and alert on compliance results from many engines through one API.',
    tags: ['PolicyReport', 'Kyverno']
  },
  {
    id: 'cncf-kcsa-fc-488',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What does Falcosidekick add to a Falco deployment?',
    hint: 'Getting alerts somewhere useful.',
    back: '<strong>Falcosidekick</strong> receives Falco alerts and <strong>forwards</strong> them to dozens of outputs: SIEMs, chat tools, paging systems, object storage, message queues and serverless functions for automated response. It can filter by priority and adds a web UI. Falco itself only writes alerts to stdout, a file, syslog, a program or HTTP.',
    tags: ['Falco', 'Falcosidekick', 'Alerting']
  },
  {
    id: 'cncf-kcsa-fc-489',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Map security tooling to the stage of the pipeline where it belongs.',
    hint: 'Code, build, registry, admission, runtime, audit.',
    back: '<strong>Code or PR</strong>: secret scanning, manifest linting (kube-linter, Checkov, Trivy config), policy tests (gator, conftest). <strong>Build</strong>: SBOM generation (Syft), image scanning, signing and provenance. <strong>Registry</strong>: scan on push, pull policies. <strong>Admission</strong>: Pod Security Admission, Kyverno or Gatekeeper, signature verification. <strong>Runtime</strong>: Falco, Trivy Operator. <strong>Periodic audit</strong>: kube-bench, Kubescape, policy engine background scans.',
    tags: ['Tooling', 'Shift left']
  },
  {
    id: 'cncf-kcsa-fc-490',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'gator vs conftest: when do you use each one in CI?',
    hint: 'Same Rego language, different packaging.',
    back: '<strong>gator</strong> is Gatekeeper\'s CLI. It evaluates actual <strong>ConstraintTemplates and Constraints</strong> against manifests (gator test) and runs policy unit suites (gator verify), so CI matches admission exactly. <strong>conftest</strong> runs plain <strong>Rego</strong> policies against any structured file, such as YAML, JSON, HCL or Dockerfiles. It is general-purpose, but its policies are not in Gatekeeper\'s constraint format.',
    tags: ['gator', 'conftest', 'Policy as code']
  },
  {
    id: 'cncf-kcsa-fc-491',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Which report CRDs does the Trivy Operator create?',
    hint: 'Vulnerabilities, configuration, secrets, RBAC, infrastructure, compliance, SBOM.',
    back: '<strong>VulnerabilityReport</strong> per workload container. <strong>ConfigAuditReport</strong> for workload misconfigurations. <strong>ExposedSecretReport</strong> for secrets found in images. <strong>RbacAssessmentReport</strong> for risky Roles and ClusterRoles. <strong>InfraAssessmentReport</strong> for control-plane and node settings. <strong>ClusterComplianceReport</strong> for CIS, NSA or PSS specifications. <strong>SbomReport</strong> for image inventories. Cluster-scoped variants exist for cluster-level objects.',
    tags: ['Trivy Operator', 'CRDs']
  },
  {
    id: 'cncf-kcsa-fc-492',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'How can an SBOM be published so it travels with a container image?',
    hint: 'Attach it next to the image in the registry.',
    back: 'Push it to the registry as an <strong>OCI artifact</strong> linked to the image digest, either as a signed <strong>attestation</strong> (cosign attest --type spdxjson or cyclonedx) or through the <strong>OCI referrers API</strong>. Consumers and admission policies can then fetch and verify it by digest. Some build tools, such as BuildKit, can attach SBOM attestations automatically during the build.',
    tags: ['SBOM', 'OCI', 'Attestations']
  },
  {
    id: 'cncf-kcsa-fc-493',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'kubeconform vs kube-linter vs Polaris: what does each check?',
    hint: 'Is it valid, is it safe, is it good practice?',
    back: '<strong>kubeconform</strong> validates manifests against Kubernetes and CRD <strong>schemas</strong> and catches malformed YAML. <strong>kube-linter</strong> (from StackRox) flags <strong>security and reliability misconfigurations</strong> such as privileged containers, a missing runAsNonRoot, or missing limits. <strong>Polaris</strong> (from Fairwinds) checks <strong>best practices</strong>, with a dashboard, CI mode and an optional admission webhook. They complement each other.',
    tags: ['kube-linter', 'Polaris', 'kubeconform']
  },
  {
    id: 'cncf-kcsa-fc-494',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'How does GitOps help produce change-management evidence for audits?',
    hint: 'Every change is a reviewed commit.',
    back: 'With GitOps, the desired cluster state lives in Git, so every change is a <strong>commit</strong> with an author and time, usually a <strong>reviewed pull request</strong>, which gives segregation of duties. The controller (Argo CD or Flux) applies and records syncs, and <strong>drift detection</strong> shows or reverts out-of-band changes. Removing direct human write access to the cluster makes Git the single, auditable change path.',
    tags: ['GitOps', 'Change management']
  },
  {
    id: 'cncf-kcsa-fc-495',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What are the key fields of SLSA v1 provenance, and what does a verifier check?',
    hint: 'What was built, by whom, from what.',
    back: 'The in-toto statement\'s <strong>subject</strong> is the artifact digest. The predicate records <strong>buildDefinition</strong>: buildType, externalParameters such as the source repository, ref and workflow, and <strong>resolvedDependencies</strong>. It also records <strong>runDetails</strong>: <strong>builder.id</strong> and metadata such as the invocation ID and timestamps. A verifier checks the signature, that the subject matches the digest, that builder.id is trusted, and that the source repository and ref are the expected ones.',
    tags: ['SLSA', 'Provenance']
  },
  {
    id: 'cncf-kcsa-fc-496',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'Syft and Grype: which does what, and why rescan stored SBOMs instead of images?',
    hint: 'Take the inventory once, match it many times.',
    back: '<strong>Syft</strong> (Anchore) builds an SBOM from an image or filesystem in SPDX, CycloneDX or Syft JSON. <strong>Grype</strong> matches images <em>or stored SBOMs</em> against current vulnerability data. Generating the SBOM once at build time and rescanning it nightly with Grype finds newly disclosed CVEs in images already deployed, without pulling them again. The rescan is only as good as the SBOM: components Syft could not detect, such as vendored or statically linked code, stay invisible.',
    tags: ['SBOM', 'Syft', 'Grype']
  },
  {
    id: 'cncf-kcsa-fc-497',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What does continuous compliance mean, and which NIST publication describes the idea?',
    hint: 'Monitoring that never stops.',
    back: '<strong>Continuous compliance</strong> means checking controls automatically and repeatedly, rather than collecting evidence once a year: scheduled scans, admission policy, drift detection and alerting, with results retained as evidence. <strong>NIST SP 800-137</strong> (Information Security Continuous Monitoring) describes this approach, and FedRAMP requires continuous monitoring after authorisation.',
    tags: ['Continuous compliance', 'NIST SP 800-137']
  },
  {
    id: 'cncf-kcsa-fc-498',
    difficulty: 'medium',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'How long is a Kubernetes minor release supported upstream, and why does that matter for compliance?',
    hint: 'About a year of patches, three minors at a time.',
    back: 'The upstream project maintains the <strong>three most recent minor releases</strong>, and each minor gets about <strong>14 months</strong> of patch support: 12 months plus a 2-month upgrade window. Running an unsupported version means no security fixes, which fails the patching requirements in PCI DSS, FedRAMP, SOC 2 and the CIS guidance. Managed services publish their own, often extended, support calendars.',
    tags: ['Version support', 'Patch management']
  },
  {
    id: 'cncf-kcsa-fc-499',
    difficulty: 'hard',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'How should policy exceptions be handled so they stay auditable?',
    hint: 'Written down, scoped, owned, and set to expire.',
    back: 'Declare exceptions as <strong>code</strong>, for example a Kyverno <strong>PolicyException</strong>, a Gatekeeper constraint\'s excludedNamespaces or match rules, or a Pod Security exemption. Scope each one to the exact workload and rule. Record the <strong>owner, justification and expiry date</strong>, review them in pull requests, and report them alongside compliance results. Avoid broad namespace-wide or label-based exemptions that anyone can take advantage of.',
    tags: ['Policy exceptions', 'Governance']
  },
  {
    id: 'cncf-kcsa-fc-500',
    difficulty: 'easy',
    certId: 'cncf-kcsa',
    domainId: 'd6',
    front: 'What does shift left mean for security and compliance tooling?',
    hint: 'Move the check earlier.',
    back: '<strong>Shift left</strong> means running checks as <strong>early as possible</strong>: in the IDE, pre-commit hooks and pull requests, instead of only at deployment or audit time. Problems are cheaper to fix and developers get fast feedback. It <strong>complements, not replaces</strong>, enforcement at admission and detection at runtime, because some issues, such as new CVEs or drift, only appear later.',
    tags: ['Shift left', 'DevSecOps']
  }
];

export default CNCF_KCSA_FLASHCARDS_20;
