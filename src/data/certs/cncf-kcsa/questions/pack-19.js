export const CNCF_KCSA_QUESTIONS_19 = [
  {
    id: "cncf-kcsa-451",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A recognised baseline for API server flags and file modes",
    scenario: "An external auditor asks a bank to show that its self-managed clusters are configured against an industry-recognised, consensus-based baseline. The auditor specifically wants recommendations covering kube-apiserver flags, kubelet settings, etcd options and permissions on control-plane configuration files.",
    question: "Which framework should the bank assess its clusters against?",
    options: [
      { id: 'A', text: "The CIS Kubernetes Benchmark from the Center for Internet Security" },
      { id: 'B', text: "The SLSA framework's Build track levels for artifact build integrity" },
      { id: 'C', text: "The MITRE ATT&CK Containers matrix of adversary tactics and techniques" },
      { id: 'D', text: "The STRIDE model for classifying threats against system components" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The CIS Kubernetes Benchmark is a consensus-developed configuration baseline with specific, testable recommendations for control-plane components, etcd, kubelets, configuration file permissions and policies, each with an audit procedure and remediation, which is exactly what the auditor describes. MITRE ATT&CK catalogues attacker behaviour for detection and threat modelling, not configuration settings. SLSA sets requirements for software build and provenance integrity. STRIDE is a threat classification model used during design, not a configuration standard.",
    referenceUrl: "https://www.cisecurity.org/benchmark/kubernetes",
    tags: ["CIS Benchmark", "Compliance", "Hardening"]
  },
  {
    id: "cncf-kcsa-452",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Which CIS profile to adopt first",
    scenario: "A retailer is adopting the CIS Kubernetes Benchmark for the first time across 30 clusters. The platform lead wants to start with recommendations that give clear security benefit without breaking workloads or hurting performance, and to leave deeper defence-in-depth settings that may affect functionality for a later phase.",
    question: "Which set of recommendations matches the first phase?",
    options: [
      { id: 'A', text: "Only the Manual recommendations" },
      { id: 'B', text: "Only the Automated worker checks" },
      { id: 'C', text: "The Level 1 profile recommendations" },
      { id: 'D', text: "The Level 2 profile recommendations" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "CIS Benchmarks define Level 1 recommendations as practical and prudent, giving a clear security benefit without inhibiting the usefulness of the technology beyond acceptable means, which suits a first phase. Level 2 extends Level 1 for defence in depth in high-security environments and may reduce functionality or performance, so it belongs in the later phase. Manual versus Automated describes whether a recommendation can be checked by tooling, not how disruptive it is. Limiting the scope to worker node checks would skip the control-plane recommendations entirely.",
    referenceUrl: "https://www.cisecurity.org/cis-benchmarks",
    tags: ["CIS Benchmark", "Profiles", "Compliance"]
  },
  {
    id: "cncf-kcsa-453",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Benchmark items that come back as WARN",
    scenario: "A compliance analyst ran a CIS Kubernetes Benchmark scan on a staging cluster. Most results are PASS or FAIL, but about 40 items, such as whether cluster-admin is used only where required and whether Secrets are used as files rather than environment variables, come back as WARN. The analyst asks what WARN means for the audit report.",
    question: "How should these items be handled?",
    options: [
      { id: 'A', text: "They are failed checks of low severity, so the report should show them as accepted risk until the next audit." },
      { id: 'B', text: "They are Manual recommendations that tooling cannot fully assess, so a person must review and record the evidence." },
      { id: 'C', text: "They are recommendations for managed services, so the cloud provider's attestation report covers every one." },
      { id: 'D', text: "They are Level 2 recommendations, so they can be ignored unless the cluster processes regulated information." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "CIS classifies recommendations as Automated, where the check can be fully scripted, or Manual, where judgement or context is required, such as whether each cluster-admin binding is really necessary. Scanners such as kube-bench report Manual items as WARN because they cannot decide them, so an analyst must review each one and document the evidence or the finding. WARN is unrelated to the Level 1 and Level 2 profiles. These items apply to self-managed clusters and are not covered by a provider's attestation. WARN is not a failure grade, and treating the items as accepted risk skips the required review.",
    referenceUrl: "https://github.com/aquasecurity/kube-bench",
    tags: ["CIS Benchmark", "Manual checks", "Audit evidence"]
  },
  {
    id: "cncf-kcsa-454",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Card processing that pulls a whole cluster into PCI scope",
    scenario: "An e-commerce company runs its card-authorisation service in a namespace of a shared cluster that hosts 40 other applications, all managed by one control plane and scheduled onto the same node pool. The Qualified Security Assessor has concluded that the entire cluster is in scope for PCI DSS, and the company wants to shrink the assessed environment.",
    question: "Which change most credibly reduces the PCI DSS scope?",
    options: [
      { id: 'A', text: "Place each of the 40 other applications in its own namespace with a default-deny NetworkPolicy on each namespace." },
      { id: 'B', text: "Move the card workloads to a dedicated cluster with its own control plane, nodes and network segment for the CDE." },
      { id: 'C', text: "Enable control plane audit logging at the Metadata level for all namespaces and keep the logs for a year." },
      { id: 'D', text: "Apply the restricted Pod Security Standard to every namespace so no workload can escape onto a node that it shares." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "PCI DSS scope covers the cardholder data environment and every system connected to it or able to affect its security. In a shared cluster, the control plane, nodes and cluster administrators can all affect the card workload, so everything they touch is in scope. A dedicated cluster with its own control plane, nodes and network segmentation creates a boundary an assessor can validate, removing the other applications from scope. Pod Security and default-deny NetworkPolicies are good controls, but they leave the workloads sharing a control plane, nodes and administrators. Audit logging meets PCI DSS Requirement 10 but does not change what is in scope.",
    referenceUrl: "https://www.pcisecuritystandards.org/document_library/",
    tags: ["PCI DSS", "Scope reduction", "Segmentation"]
  },
  {
    id: "cncf-kcsa-455",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Patient records in a telehealth start-up's cluster",
    scenario: "A US telehealth start-up stores appointment notes and prescriptions in databases running on Kubernetes and acts as a business associate for several clinics. Its new CISO must identify the regulation that sets administrative, physical and technical safeguards for this electronic health information.",
    question: "Which regulation applies?",
    options: [
      { id: 'A', text: "FedRAMP, the US programme for authorising federal cloud services" },
      { id: 'B', text: "PCI DSS, the card industry's standard for cardholder information" },
      { id: 'C', text: "SOX, the US law on the accuracy of public company financial reports" },
      { id: 'D', text: "The HIPAA Security Rule for electronic protected health information" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The HIPAA Security Rule requires covered entities and their business associates to protect electronic protected health information with administrative, physical and technical safeguards. In Kubernetes these map to access control, audit logging, encryption in transit and at rest, and integrity controls. PCI DSS governs payment card data. FedRAMP authorises cloud services sold to US federal agencies. SOX concerns internal controls over financial reporting at public companies.",
    referenceUrl: "https://www.hhs.gov/hipaa/for-professionals/security/index.html",
    tags: ["HIPAA", "Healthcare", "Regulation"]
  },
  {
    id: "cncf-kcsa-456",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "EU customer data in etcd backups copied to the US",
    scenario: "A Berlin-based HR software company runs its clusters in an EU cloud region, but its backup tool copies etcd snapshots and persistent volume snapshots, which contain employee personal data, to a bucket in a US region. The data protection officer has raised the setup as a GDPR concern.",
    question: "What does GDPR require of this setup?",
    options: [
      { id: 'A', text: "Deletion of every backup older than 30 days, because GDPR sets a fixed 30-day maximum for keeping personal data." },
      { id: 'B', text: "Nothing, provided the backups are encrypted at rest, because encryption alone removes all GDPR transfer obligations." },
      { id: 'C', text: "A valid transfer mechanism for data leaving the EEA, such as adequacy or SCCs, or keeping the backups inside the EU." },
      { id: 'D', text: "Only a record of the backup schedule in the processing register, because backups are exempt from transfer rules." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Chapter V of GDPR allows personal data to be transferred outside the EEA only under an adequacy decision or appropriate safeguards such as Standard Contractual Clauses, with a transfer impact assessment where needed. Keeping backups in an EU region avoids the question entirely. Backups of etcd and volumes are personal data like any other copy. Encryption is a useful supplementary measure but does not by itself remove transfer obligations. Backups are not exempt from the transfer rules. GDPR sets no fixed 30-day retention limit; storage limitation requires retention to be justified by purpose.",
    referenceUrl: "https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en",
    tags: ["GDPR", "Data residency", "Backups"]
  },
  {
    id: "cncf-kcsa-457",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Selling a Kubernetes-hosted SaaS to federal agencies",
    scenario: "A document-management SaaS hosted on Kubernetes wants to sell to US federal civilian agencies. The agencies' procurement teams say the service must hold an authorisation from a government programme that standardises security assessment for cloud products, with controls drawn from a NIST catalogue.",
    question: "Which authorisation and control catalogue are they referring to?",
    options: [
      { id: 'A', text: "FedRAMP authorisation, built on NIST SP 800-53 control baselines" },
      { id: 'B', text: "CIS Controls v8, mapped to NIST CSF and applied through groups IG1 to IG3" },
      { id: 'C', text: "SOC 2 Type II, attested by a CPA firm against the AICPA Trust Services Criteria" },
      { id: 'D', text: "ISO/IEC 27001 certification, audited against the controls in its Annex A list" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "FedRAMP is the US government programme that standardises security assessment and authorisation of cloud products used by federal agencies, and its Low, Moderate and High baselines are built from NIST SP 800-53 security controls. SOC 2 and ISO/IEC 27001 are widely used commercial assurance schemes, but they do not replace FedRAMP for federal cloud procurement. CIS Controls are prioritised best practices, not a federal authorisation programme.",
    referenceUrl: "https://www.fedramp.gov/",
    tags: ["FedRAMP", "NIST SP 800-53", "Government"]
  },
  {
    id: "cncf-kcsa-458",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Hardening checklist required by a defence contract",
    scenario: "A contractor is deploying Kubernetes clusters on a US Department of Defense network. The contracting officer says the clusters must be configured and assessed against the DoD's own published configuration standard for Kubernetes, and that passing the CIS Benchmark alone will not satisfy the contract.",
    question: "Which standard is the contracting officer referring to?",
    options: [
      { id: 'A', text: "The DISA Security Technical Implementation Guide for Kubernetes" },
      { id: 'B', text: "The NIST SP 800-190 guide to application container security" },
      { id: 'C', text: "The OWASP Kubernetes Top 10 list of common security risks" },
      { id: 'D', text: "The CNCF Cloud Native Security Whitepaper lifecycle guidance" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Defense Information Systems Agency publishes Security Technical Implementation Guides (STIGs), which are the mandatory configuration standards for DoD systems, and there is a Kubernetes STIG with specific, assessable rules. NIST SP 800-190 gives risk-based guidance for container security but is not a DoD configuration checklist. The OWASP Kubernetes Top 10 is an awareness list of risks. The CNCF whitepaper describes cloud native security practices across the lifecycle and is not a contractual configuration standard.",
    referenceUrl: "https://public.cyber.mil/stigs/",
    tags: ["DISA STIG", "Government", "Hardening"]
  },
  {
    id: "cncf-kcsa-459",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Government hardening guidance written for Kubernetes",
    scenario: "A water utility's small IT team is building its first cluster and wants free, government-published guidance written specifically for Kubernetes, covering pod security, network separation, authentication and authorisation, audit logging, and upgrade practices, rather than a general-purpose controls catalogue.",
    question: "Which publication fits best?",
    options: [
      { id: 'A', text: "The NIST SP 800-53 control catalogue and guidance" },
      { id: 'B', text: "The NIST SP 800-218 Secure Software Development" },
      { id: 'C', text: "The NSA and CISA Kubernetes Hardening Guidance" },
      { id: 'D', text: "The ISO/IEC 27002 information security controls" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The NSA and CISA Kubernetes Hardening Guidance is a free US government publication dedicated to Kubernetes. It covers pod security, network separation and hardening, authentication and authorisation, audit logging and threat detection, and upgrade and application security practices. NIST SP 800-53 and ISO/IEC 27002 are general control catalogues that are not specific to Kubernetes. NIST SP 800-218, the Secure Software Development Framework, is about building software securely, not hardening a cluster.",
    referenceUrl: "https://media.defense.gov/2022/Aug/29/2003066362/-1/-1/0/CTR_KUBERNETES_HARDENING_GUIDANCE_1.2_20220829.PDF",
    tags: ["NSA/CISA", "Hardening guidance"]
  },
  {
    id: "cncf-kcsa-460",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Customer wants proof that controls worked all year",
    scenario: "An enterprise customer evaluating a Kubernetes-hosted analytics platform already received a report showing that the vendor's access-control and change-management controls were suitably designed on 1 March. The customer now asks for evidence that the controls actually operated effectively over the following six months.",
    question: "Which report should the vendor provide?",
    options: [
      { id: 'A', text: "A SOC 2 Type II report on operating effectiveness over the review period" },
      { id: 'B', text: "A SOC 1 Type I report, covering controls relevant to financial reporting" },
      { id: 'C', text: "A SOC 2 Type I report, with an auditor's opinion on the design of controls" },
      { id: 'D', text: "A CIS Benchmark scan export, run on the last day of the six-month period" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A SOC 2 Type II report includes the auditor's testing of whether controls operated effectively throughout a defined period, typically three to twelve months, which is exactly what the customer asks for. A Type I report, like the one already provided, addresses only the design of controls at a single point in time. SOC 1 covers controls relevant to customers' financial reporting, not general security. A benchmark scan from one day is a point-in-time technical check, not an independent attestation over a period.",
    referenceUrl: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2",
    tags: ["SOC 2", "Attestation", "Audit"]
  },
  {
    id: "cncf-kcsa-461",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "An internationally certifiable security management system",
    scenario: "A Singapore-based platform provider serving banks in Europe and Asia wants a single certificate, issued by an accredited body after an audit, that proves it operates a risk-based information security management system covering its Kubernetes operations, policies and people.",
    question: "Which standard should it certify against?",
    options: [
      { id: 'A', text: "ISO/IEC 27002, the reference set of information security controls" },
      { id: 'B', text: "ISO/IEC 27001, the requirements for a certifiable ISMS" },
      { id: 'C', text: "NIST CSF 2.0, the Cybersecurity Framework and its six core functions" },
      { id: 'D', text: "The CIS Kubernetes Benchmark, applied at its Level 2 profile throughout" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ISO/IEC 27001 specifies the requirements for an information security management system (ISMS), including risk assessment, treatment and continual improvement, and organisations can be certified against it by accredited certification bodies worldwide. ISO/IEC 27002 is guidance on implementing controls and cannot be certified against. NIST CSF is a voluntary framework without a formal certification scheme. The CIS Benchmark is a technical configuration baseline, not a management system standard.",
    referenceUrl: "https://www.iso.org/standard/27001",
    tags: ["ISO/IEC 27001", "ISMS", "Certification"]
  },
  {
    id: "cncf-kcsa-462",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Evidence for PCI DSS Requirement 10 on a cluster",
    scenario: "A payment gateway must show its assessor that all access to system components in the cardholder data environment, which runs on Kubernetes, is logged, attributable to individuals, and that audit log history is retained for the period PCI DSS v4.0 requires. Today, engineers share one admin kubeconfig and API audit logs rotate off control-plane disks after seven days.",
    question: "Which combination best satisfies the requirement?",
    options: [
      { id: 'A', text: "Individual SSO identities for engineers, API audit logs sent to protected storage, 12 months kept, 3 months online." },
      { id: 'B', text: "Keep the engineers' shared kubeconfig, raise audit level to RequestResponse, and hold logs on the control plane for 90 days." },
      { id: 'C', text: "Enable Falco on all nodes, keep its alerts for 12 months, and use the shared admin kubeconfig for break-glass only." },
      { id: 'D', text: "Individual client certificates in system:masters, Kubernetes events exported, and logs retained for 30 days." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Requirement 10 asks for audit logs that link access to individual users, protection of those logs from modification, and retention of audit history for at least 12 months with at least the most recent three months immediately available for analysis. Individual identities through SSO make API audit events attributable, and shipping them to protected central storage covers integrity and retention. A shared kubeconfig makes every action unattributable, and 90 days on the node falls short. Certificates in system:masters cannot be revoked and bypass authorization, events do not identify users, and 30 days is too short. Falco alerts on runtime behaviour but does not record all API access by individuals.",
    referenceUrl: "https://www.pcisecuritystandards.org/document_library/",
    tags: ["PCI DSS", "Audit logging", "Retention"]
  },
  {
    id: "cncf-kcsa-463",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A board-level framework organised by outcomes",
    scenario: "The board of a regional insurer asks the CISO to report on cybersecurity maturity, including the new container platform, using a voluntary, outcome-based framework organised into high-level functions such as Govern, Identify, Protect, Detect, Respond and Recover.",
    question: "Which framework is the board describing?",
    options: [
      { id: 'A', text: "The MITRE ATT&CK Enterprise matrix and its fourteen tactics" },
      { id: 'B', text: "The CIS Kubernetes Benchmark and its cybersecurity checks" },
      { id: 'C', text: "The SLSA framework, with its build track and supply chain levels" },
      { id: 'D', text: "The NIST Cybersecurity Framework, version 2.0, and its functions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "NIST Cybersecurity Framework 2.0 organises cybersecurity outcomes into six functions (Govern, Identify, Protect, Detect, Respond and Recover), making it well suited to board-level maturity reporting across all technology, including Kubernetes. The CIS Kubernetes Benchmark is a technical configuration baseline. MITRE ATT&CK organises adversary behaviour by tactic, not an organisation's security outcomes. SLSA focuses narrowly on software build integrity.",
    referenceUrl: "https://www.nist.gov/cyberframework",
    tags: ["NIST CSF", "Governance"]
  },
  {
    id: "cncf-kcsa-464",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Changes nobody can be held accountable for",
    scenario: "During a STRIDE workshop for a logistics company's cluster, the team notes that several engineers share a single cluster-admin kubeconfig and API server auditing is disabled. After a production ConfigMap was changed last month, nobody could prove who made the change, and every engineer denied it.",
    question: "Which STRIDE category best describes this threat?",
    options: [
      { id: 'A', text: "The Denial of service category" },
      { id: 'B', text: "The Repudiation category" },
      { id: 'C', text: "The Tampering category" },
      { id: 'D', text: "The Spoofing category" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Repudiation is the threat that someone can deny performing an action because the system cannot prove otherwise. Shared credentials and missing audit logs are the classic cause, and the mitigations are individual identities and tamper-resistant audit logging. Spoofing is pretending to be another identity. There is a tampering element in the ConfigMap change, but the threat identified here is the inability to attribute it. Denial of service concerns availability.",
    referenceUrl: "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats",
    tags: ["STRIDE", "Repudiation", "Threat modelling"]
  },
  {
    id: "cncf-kcsa-465",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A CI token that can create pods in kube-system",
    scenario: "A threat model of a fintech's delivery pipeline finds that the CI system's ServiceAccount token, meant only for deploying to the apps namespace, is bound to a ClusterRole that can create pods in any namespace, including kube-system. An attacker who compromises a CI job could mount privileged ServiceAccounts or host paths from there.",
    question: "Which STRIDE category and mitigation fit this finding best?",
    options: [
      { id: 'A', text: "Information disclosure, mitigated by encrypting Secrets at rest in etcd with a KMS v2 provider." },
      { id: 'B', text: "Denial of service, mitigated by setting ResourceQuota on kube-system to cap the pods created there." },
      { id: 'C', text: "Elevation of privilege, mitigated by a RoleBinding scoped only to the apps namespace for CI use." },
      { id: 'D', text: "Spoofing, mitigated by swapping the token for a client certificate used only in the apps namespace." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The risk is that a low-privilege actor (a CI job) can reach far greater privileges by creating pods that use powerful ServiceAccounts or host access in kube-system, which is elevation of privilege. The mitigation is least-privilege RBAC: a namespaced Role and RoleBinding limited to apps. Encryption at rest does not stop someone who can legitimately create pods from mounting Secrets. A quota caps resource usage but still allows the dangerous pod. Swapping the token for a certificate changes the credential type without reducing its permissions, and certificates cannot be revoked.",
    referenceUrl: "https://kubernetes.io/docs/concepts/security/rbac-good-practices/",
    tags: ["STRIDE", "Elevation of privilege", "RBAC"]
  },
  {
    id: "cncf-kcsa-466",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A matrix that names kubectl exec and hostPath mounts",
    scenario: "A SOC team wants a knowledge base of attacker behaviour aimed specifically at Kubernetes clusters, with entries such as exec into container, writable hostPath mount, access the Kubernetes dashboard and bash or cmd inside container, arranged by tactic, to map its Falco rules to.",
    question: "Which resource matches this description most closely?",
    options: [
      { id: 'A', text: "The Microsoft Threat Matrix for Kubernetes and its tactics" },
      { id: 'B', text: "The NIST SP 800-190 container risk and countermeasure list" },
      { id: 'C', text: "The CIS Kubernetes Benchmark, organised by component section" },
      { id: 'D', text: "The OWASP Top 10 for web applications and its categories" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Microsoft's Threat Matrix for Kubernetes adapts the MITRE ATT&CK structure to Kubernetes, listing techniques such as Exec into container, bash/cmd inside container, Writable hostPath mount and Kubernetes dashboard exposure under tactics from initial access to impact, which makes it convenient for mapping detection rules. The OWASP Top 10 lists web application risk categories. NIST SP 800-190 describes container risks and countermeasures at a higher level, not as a technique matrix. The CIS Benchmark is a configuration baseline organised by component.",
    referenceUrl: "https://microsoft.github.io/Threat-Matrix-for-Kubernetes/",
    tags: ["Threat matrix", "MITRE ATT&CK", "Detection mapping"]
  },
  {
    id: "cncf-kcsa-467",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Classifying a breakout through a hostPath mount",
    scenario: "In a purple-team exercise, an attacker who controlled an application pod created a new pod mounting the node's root directory through hostPath and used it to add a cron entry on the node, gaining a root shell on the host. The detection team must tag the breakout step with its MITRE ATT&CK technique and tactic.",
    question: "Which classification is correct?",
    options: [
      { id: 'A', text: "Impair Defenses under the Defense Evasion tactic for containers" },
      { id: 'B', text: "Escape to Host (T1611) under the Privilege Escalation tactic" },
      { id: 'C', text: "Exploitation of Remote Services on the host, under Lateral Movement" },
      { id: 'D', text: "Container Administration Command under the Execution tactic" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "ATT&CK technique T1611, Escape to Host, covers adversaries breaking out of a container to the underlying host, for example by mounting the host filesystem or abusing privileged containers, and it sits under the Privilege Escalation tactic because it moves the attacker from container-level to host-level privileges. Exploitation of Remote Services describes exploiting network services on other systems. Container Administration Command describes running commands through kubectl exec or container runtime tools. Impair Defenses covers disabling security tools, which did not happen here.",
    referenceUrl: "https://attack.mitre.org/techniques/T1611/",
    tags: ["MITRE ATT&CK", "Container escape", "Privilege escalation"]
  },
  {
    id: "cncf-kcsa-468",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Breaking one attacker goal into alternative paths",
    scenario: "A security architect wants to model how an attacker could obtain a customer database password stored in a cluster. She wants the goal at the top, with each way to achieve it (reading the Secret through the API, dumping etcd, exec into the app pod) broken down into sub-steps joined by AND or OR relationships.",
    question: "Which threat modelling technique produces this structure?",
    options: [
      { id: 'A', text: "A data flow diagram showing trust boundaries" },
      { id: 'B', text: "An attack tree rooted at the attacker's goal" },
      { id: 'C', text: "A DREAD risk score for each goal an attacker has" },
      { id: 'D', text: "A CVSS base score for each known weakness" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "An attack tree places the attacker's objective at the root and decomposes it into alternative (OR) or combined (AND) sub-goals down to concrete actions, which makes it easy to see which paths are cheapest and where one control blocks many paths. A data flow diagram shows components, data flows and trust boundaries, and is the input to methods such as STRIDE, not a goal decomposition. DREAD and CVSS produce risk or severity scores for threats or vulnerabilities once they are identified.",
    referenceUrl: "https://www.schneier.com/academic/archives/1999/12/attack_trees.html",
    tags: ["Attack trees", "Threat modelling"]
  },
  {
    id: "cncf-kcsa-469",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Ranking design threats that have no CVE",
    scenario: "After a STRIDE session on a new multi-tenant cluster design, a team has 35 threats, none of which corresponds to a published vulnerability. The manager wants each threat rated on the damage it could do, how reproducible and exploitable it is, how many users it affects and how easily it could be discovered, so work can be prioritised.",
    question: "Which model provides this rating scheme?",
    options: [
      { id: 'A', text: "STRIDE, which sorts threats into six categories" },
      { id: 'B', text: "DREAD, which scores each threat on five risk factors" },
      { id: 'C', text: "LINDDUN, which categorises threats to data privacy" },
      { id: 'D', text: "PASTA, which runs a seven-stage risk analysis process" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "DREAD rates each threat on Damage, Reproducibility, Exploitability, Affected users and Discoverability, and the scores are combined to rank threats; it is often paired with STRIDE, which finds threats but does not rank them. LINDDUN is a privacy threat elicitation method. STRIDE categorises threats as Spoofing, Tampering, Repudiation, Information disclosure, Denial of service or Elevation of privilege. PASTA is a whole risk-centric methodology, not a per-threat scoring scheme with those five factors.",
    referenceUrl: "https://owasp.org/www-community/Threat_Modeling_Process",
    tags: ["DREAD", "Risk ranking", "Threat modelling"]
  },
  {
    id: "cncf-kcsa-470",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A threat model that starts from business objectives",
    scenario: "A bank's risk committee wants its platform threat modelling to start from business objectives and regulatory impact, move through technical scope and application decomposition, simulate realistic attacks against the design, and end with residual risk expressed in business terms, over seven defined stages.",
    question: "Which methodology fits this description?",
    options: [
      { id: 'A', text: "The CIS Kubernetes Benchmark with its Level 1 and 2 profiles" },
      { id: 'B', text: "The Microsoft Threat Matrix for Kubernetes mapped to controls" },
      { id: 'C', text: "PASTA, the Process for Attack Simulation and Threat Analysis" },
      { id: 'D', text: "STRIDE per element on a data flow diagram of the whole platform" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "PASTA (Process for Attack Simulation and Threat Analysis) is a seven-stage, risk-centric methodology: define objectives, define technical scope, decompose the application, analyse threats, analyse vulnerabilities, model and simulate attacks, and analyse risk and impact. It explicitly ties the results back to business impact. STRIDE per element categorises threats against components but does not frame them around business objectives or attack simulation. The Microsoft matrix is a catalogue of techniques, not a process. The CIS Benchmark is a configuration standard.",
    referenceUrl: "https://owasp.org/www-community/Threat_Modeling_Process",
    tags: ["PASTA", "Risk-centric", "Threat modelling"]
  },
  {
    id: "cncf-kcsa-471",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Privacy threats in a telemetry pipeline",
    scenario: "A European car-sharing company collects vehicle telemetry through a Kafka pipeline on Kubernetes. Its data protection team worries that pseudonymised trip records could be linked together across datasets and used to identify individual drivers, and that drivers are unaware of what is collected. They want a structured method designed for exactly these threats.",
    question: "Which threat modelling framework should they use?",
    options: [
      { id: 'A', text: "MITRE ATT&CK, mapping the pipeline to Collection and Exfiltration" },
      { id: 'B', text: "LINDDUN, with categories such as linking, identifying and unawareness" },
      { id: 'C', text: "DREAD, scoring pipeline threats by damage and affected user count" },
      { id: 'D', text: "STRIDE, applied per element to the pipeline's data flow diagram" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "LINDDUN is a privacy threat modelling framework whose categories (Linking, Identifying, Non-repudiation, Detecting, Data disclosure, Unawareness and Non-compliance) directly address re-identification of pseudonymised data and lack of transparency. Like STRIDE, it is applied to a data flow diagram. STRIDE focuses on security properties; its information disclosure category does not cover linkability or unawareness. ATT&CK describes adversary behaviour rather than privacy harms from normal processing. DREAD ranks threats that have already been identified but does not find privacy threats.",
    referenceUrl: "https://linddun.org/",
    tags: ["LINDDUN", "Privacy", "Threat modelling"]
  },
  {
    id: "cncf-kcsa-472",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "An impostor answering the kubelet's API calls",
    scenario: "While applying STRIDE to the kubelet-to-API-server data flow, a team considers an attacker on the node network who answers the kubelet's connections pretending to be the API server, feeding it forged pod specs so that malicious containers start on the node. The team must record the threat category and the primary mitigation.",
    question: "Which entry is correct?",
    options: [
      { id: 'A', text: "Repudiation, mitigated by auditing every kubelet request for pods at the RequestResponse level." },
      { id: 'B', text: "Elevation of privilege, mitigated by enabling the NodeRestriction plugin on the real API server." },
      { id: 'C', text: "Tampering, mitigated by enabling encryption at rest for all pod specs stored in the etcd datastore." },
      { id: 'D', text: "Spoofing, mitigated by the kubelet verifying the API server certificate against the cluster CA." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "An attacker pretending to be the API server is spoofing its identity. The kubelet counters it by validating the API server's serving certificate against the cluster CA configured in its kubeconfig, so an impostor without a certificate signed by that CA is rejected. Encryption at rest protects data in etcd, not a connection the real API server never takes part in. Audit logging on the genuine API server would never see the impostor's traffic. NodeRestriction limits what kubelets may modify on the real API server and does nothing against a fake one.",
    referenceUrl: "https://kubernetes.io/docs/concepts/architecture/control-plane-node-communication/",
    tags: ["STRIDE", "Spoofing", "Kubelet"]
  },
  {
    id: "cncf-kcsa-473",
    difficulty: "medium",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "A lightweight structure for a first threat model",
    scenario: "A start-up's four-person platform team has never done threat modelling and finds formal methodologies intimidating. They want a simple structure, endorsed by the Threat Modeling Manifesto authors, that they can run in a one-hour session for each new cluster feature and repeat as the design changes.",
    question: "Which approach should they start with?",
    options: [
      { id: 'A', text: "A MITRE ATT&CK coverage heatmap refreshed each quarter by the SOC's detection engineering group" },
      { id: 'B', text: "An annual external penetration test whose report is used as the threat model for all features" },
      { id: 'C', text: "A full CIS Benchmark scan before each feature launch, with findings treated as the threat model" },
      { id: 'D', text: "Shostack's four questions: what are we working on, what can go wrong, what will we do, did we do well" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adam Shostack's Four Question Framework (What are we working on? What can go wrong? What are we going to do about it? Did we do a good job?) underpins the Threat Modeling Manifesto and gives a small team a lightweight, repeatable structure that can use STRIDE or attack trees for the second question. A CIS scan checks configuration against a baseline and does not analyse a new feature's design. An annual penetration test finds issues in what already exists, long after design decisions are made. An ATT&CK heatmap measures detection coverage, not design threats for a specific feature.",
    referenceUrl: "https://www.threatmodelingmanifesto.org/",
    tags: ["Threat modelling", "Four Question Framework"]
  },
  {
    id: "cncf-kcsa-474",
    difficulty: "hard",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "Tagging an instance metadata credential grab",
    scenario: "Detection engineers at a SaaS company are mapping Falco alerts to MITRE ATT&CK Enterprise. One alert fires when a process in a pod sends an HTTP request to 169.254.169.254 and retrieves temporary IAM credentials belonging to the node's cloud role, which the attacker later uses to read object storage.",
    question: "Under which ATT&CK tactic is the metadata request classified?",
    options: [
      { id: 'A', text: "Initial Access, because the credentials let the attacker enter the cloud account" },
      { id: 'B', text: "Discovery, because the metadata request enumerates the cloud around the node" },
      { id: 'C', text: "Collection, because the attacker later reads files stored in object storage" },
      { id: 'D', text: "Credential Access, through Unsecured Credentials: Cloud Instance Metadata API" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In ATT&CK Enterprise, T1552.005, Unsecured Credentials: Cloud Instance Metadata API, sits under the Credential Access tactic: the attacker's goal at this step is to obtain credentials. Querying metadata could reveal information, but retrieving IAM credentials is classified as credential access. Initial Access describes how the attacker first got into the environment, which had already happened when they took over the pod. The later reads from object storage are a separate step that would map to Collection, not the metadata request.",
    referenceUrl: "https://attack.mitre.org/techniques/T1552/005/",
    tags: ["MITRE ATT&CK", "Credential access", "Instance metadata"]
  },
  {
    id: "cncf-kcsa-475",
    difficulty: "easy",
    certId: "cncf-kcsa",
    domainId: "d6",
    domainName: "Compliance and Security Frameworks",
    title: "When to threat model a new multi-tenant platform",
    scenario: "A media group is designing a new multi-tenant Kubernetes platform that will go live in six months. The project manager proposes doing a threat model once, after launch, so that it reflects the finished system. The security lead disagrees.",
    question: "When should threat modelling take place?",
    options: [
      { id: 'A', text: "Once after launch, when every component is finished and running" },
      { id: 'B', text: "Only after the first security incident has shown where risk lies" },
      { id: 'C', text: "During design, then revisited whenever the architecture changes" },
      { id: 'D', text: "Only before an audit, so the model matches the current evidence" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Threat modelling is most valuable during design, when findings can change the architecture cheaply, for example by choosing hard tenant isolation before workloads are built around namespaces. It should be updated as the design evolves. Waiting until after launch means fixes require re-engineering a live system. Waiting for an incident abandons prevention. Modelling only before audits turns it into paperwork that trails the real system.",
    referenceUrl: "https://www.threatmodelingmanifesto.org/",
    tags: ["Threat modelling", "Shift left"]
  }
];

export default CNCF_KCSA_QUESTIONS_19;
