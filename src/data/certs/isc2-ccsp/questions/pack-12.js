export const ISC2_CCSP_QUESTIONS_12 = [
  {
    id: "isc2-ccsp-276",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Business Continuity: RTO and RPO Planning: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Business Continuity to architect a disaster recovery solution for a core transactional financial database requiring maximum 15 minutes data loss and 1 hour downtime.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Recovery Time Objective (RTO) and Recovery Point Objective (RPO) trade-offs in cloud failover is under consideration.",
    options: [
      { id: 'A', text: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover." },
      { id: 'B', text: "Perform manual weekly tape backups stored in an office filing cabinet." },
      { id: 'C', text: "Assume the cloud provider automatically guarantees zero data loss and instantaneous recovery without architecture planning." },
      { id: 'D', text: "Set RTO to zero seconds using un-replicated standalone database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover. Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time (e.g., 15 minutes of transactions). Recovery Time Objective (RTO) is the maximum acceptable duration of service downtime before restoration. High-availability cloud architectures use active-active or warm-standby replication to satisfy tight RTO/RPO targets.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/recovery_time_objective",
    tags: ["Business Continuity", "RTO and RPO", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-277",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Business Continuity: RTO and RPO Planning: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Business Continuity to architect a disaster recovery solution for a core transactional financial database requiring maximum 15 minutes data loss and 1 hour downtime.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Recovery Time Objective (RTO) and Recovery Point Objective (RPO) trade-offs in cloud failover is under consideration.",
    options: [
      { id: 'A', text: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover." },
      { id: 'B', text: "Perform manual weekly tape backups stored in an office filing cabinet." },
      { id: 'C', text: "Assume the cloud provider automatically guarantees zero data loss and instantaneous recovery without architecture planning." },
      { id: 'D', text: "Set RTO to zero seconds using un-replicated standalone database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover. Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time (e.g., 15 minutes of transactions). Recovery Time Objective (RTO) is the maximum acceptable duration of service downtime before restoration. High-availability cloud architectures use active-active or warm-standby replication to satisfy tight RTO/RPO targets.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/recovery_time_objective",
    tags: ["Business Continuity", "RTO and RPO", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-278",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Business Continuity: RTO and RPO Planning: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Business Continuity to architect a disaster recovery solution for a core transactional financial database requiring maximum 15 minutes data loss and 1 hour downtime.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Recovery Time Objective (RTO) and Recovery Point Objective (RPO) trade-offs in cloud failover is under consideration.",
    options: [
      { id: 'A', text: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover." },
      { id: 'B', text: "Perform manual weekly tape backups stored in an office filing cabinet." },
      { id: 'C', text: "Assume the cloud provider automatically guarantees zero data loss and instantaneous recovery without architecture planning." },
      { id: 'D', text: "Set RTO to zero seconds using un-replicated standalone database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover. Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time (e.g., 15 minutes of transactions). Recovery Time Objective (RTO) is the maximum acceptable duration of service downtime before restoration. High-availability cloud architectures use active-active or warm-standby replication to satisfy tight RTO/RPO targets.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/recovery_time_objective",
    tags: ["Business Continuity", "RTO and RPO", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-279",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Business Continuity: RTO and RPO Planning: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Business Continuity to architect a disaster recovery solution for a core transactional financial database requiring maximum 15 minutes data loss and 1 hour downtime.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Recovery Time Objective (RTO) and Recovery Point Objective (RPO) trade-offs in cloud failover is under consideration.",
    options: [
      { id: 'A', text: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover." },
      { id: 'B', text: "Perform manual weekly tape backups stored in an office filing cabinet." },
      { id: 'C', text: "Assume the cloud provider automatically guarantees zero data loss and instantaneous recovery without architecture planning." },
      { id: 'D', text: "Set RTO to zero seconds using un-replicated standalone database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover. Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time (e.g., 15 minutes of transactions). Recovery Time Objective (RTO) is the maximum acceptable duration of service downtime before restoration. High-availability cloud architectures use active-active or warm-standby replication to satisfy tight RTO/RPO targets.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/recovery_time_objective",
    tags: ["Business Continuity", "RTO and RPO", "Application Secops"]
  },
  {
    id: "isc2-ccsp-280",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Business Continuity: RTO and RPO Planning: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Business Continuity to architect a disaster recovery solution for a core transactional financial database requiring maximum 15 minutes data loss and 1 hour downtime.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Recovery Time Objective (RTO) and Recovery Point Objective (RPO) trade-offs in cloud failover is under consideration.",
    options: [
      { id: 'A', text: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover." },
      { id: 'B', text: "Perform manual weekly tape backups stored in an office filing cabinet." },
      { id: 'C', text: "Assume the cloud provider automatically guarantees zero data loss and instantaneous recovery without architecture planning." },
      { id: 'D', text: "Set RTO to zero seconds using un-replicated standalone database instances." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish RPO = 15 minutes and RTO = 1 hour, implementing continuous asynchronous cross-region database replication with automated failover. Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time (e.g., 15 minutes of transactions). Recovery Time Objective (RTO) is the maximum acceptable duration of service downtime before restoration. High-availability cloud architectures use active-active or warm-standby replication to satisfy tight RTO/RPO targets.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/recovery_time_objective",
    tags: ["Business Continuity", "RTO and RPO", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-281",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Hypervisor Security and Virtualization Isolation: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Hypervisor Security to prevent malicious code running inside a tenant virtual machine from breaking out into the host hypervisor or compromising co-tenants.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Type 1 (bare-metal) vs Type 2 hypervisors, VM escape attacks, and noisy neighbor mitigation is under consideration.",
    options: [
      { id: 'A', text: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation." },
      { id: 'B', text: "Run tenant workloads on consumer Type 2 desktop hypervisors sharing administrative host accounts." },
      { id: 'C', text: "Disable hardware-enforced CPU memory isolation to improve virtual machine booting speed." },
      { id: 'D', text: "Allow tenant virtual machines to modify host kernel memory tables directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation. Type 1 hypervisors run directly on bare metal hardware, offering a smaller attack surface than Type 2 hypervisors running on top of an OS. Security controls mitigate VM escape vulnerabilities (where guest code attacks the hypervisor) and prevent noisy neighbors through CPU core pinning and memory isolation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-125/final",
    tags: ["Hypervisor Security", "Hypervisor Security", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-282",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Hypervisor Security and Virtualization Isolation: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Hypervisor Security to prevent malicious code running inside a tenant virtual machine from breaking out into the host hypervisor or compromising co-tenants.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Type 1 (bare-metal) vs Type 2 hypervisors, VM escape attacks, and noisy neighbor mitigation is under consideration.",
    options: [
      { id: 'A', text: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation." },
      { id: 'B', text: "Run tenant workloads on consumer Type 2 desktop hypervisors sharing administrative host accounts." },
      { id: 'C', text: "Disable hardware-enforced CPU memory isolation to improve virtual machine booting speed." },
      { id: 'D', text: "Allow tenant virtual machines to modify host kernel memory tables directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation. Type 1 hypervisors run directly on bare metal hardware, offering a smaller attack surface than Type 2 hypervisors running on top of an OS. Security controls mitigate VM escape vulnerabilities (where guest code attacks the hypervisor) and prevent noisy neighbors through CPU core pinning and memory isolation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-125/final",
    tags: ["Hypervisor Security", "Hypervisor Security", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-283",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Hypervisor Security and Virtualization Isolation: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Hypervisor Security to prevent malicious code running inside a tenant virtual machine from breaking out into the host hypervisor or compromising co-tenants.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Type 1 (bare-metal) vs Type 2 hypervisors, VM escape attacks, and noisy neighbor mitigation is under consideration.",
    options: [
      { id: 'A', text: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation." },
      { id: 'B', text: "Run tenant workloads on consumer Type 2 desktop hypervisors sharing administrative host accounts." },
      { id: 'C', text: "Disable hardware-enforced CPU memory isolation to improve virtual machine booting speed." },
      { id: 'D', text: "Allow tenant virtual machines to modify host kernel memory tables directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation. Type 1 hypervisors run directly on bare metal hardware, offering a smaller attack surface than Type 2 hypervisors running on top of an OS. Security controls mitigate VM escape vulnerabilities (where guest code attacks the hypervisor) and prevent noisy neighbors through CPU core pinning and memory isolation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-125/final",
    tags: ["Hypervisor Security", "Hypervisor Security", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-284",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Hypervisor Security and Virtualization Isolation: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Hypervisor Security to prevent malicious code running inside a tenant virtual machine from breaking out into the host hypervisor or compromising co-tenants.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Type 1 (bare-metal) vs Type 2 hypervisors, VM escape attacks, and noisy neighbor mitigation is under consideration.",
    options: [
      { id: 'A', text: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation." },
      { id: 'B', text: "Run tenant workloads on consumer Type 2 desktop hypervisors sharing administrative host accounts." },
      { id: 'C', text: "Disable hardware-enforced CPU memory isolation to improve virtual machine booting speed." },
      { id: 'D', text: "Allow tenant virtual machines to modify host kernel memory tables directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation. Type 1 hypervisors run directly on bare metal hardware, offering a smaller attack surface than Type 2 hypervisors running on top of an OS. Security controls mitigate VM escape vulnerabilities (where guest code attacks the hypervisor) and prevent noisy neighbors through CPU core pinning and memory isolation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-125/final",
    tags: ["Hypervisor Security", "Hypervisor Security", "Application Secops"]
  },
  {
    id: "isc2-ccsp-285",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Hypervisor Security and Virtualization Isolation: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Hypervisor Security to prevent malicious code running inside a tenant virtual machine from breaking out into the host hypervisor or compromising co-tenants.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Type 1 (bare-metal) vs Type 2 hypervisors, VM escape attacks, and noisy neighbor mitigation is under consideration.",
    options: [
      { id: 'A', text: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation." },
      { id: 'B', text: "Run tenant workloads on consumer Type 2 desktop hypervisors sharing administrative host accounts." },
      { id: 'C', text: "Disable hardware-enforced CPU memory isolation to improve virtual machine booting speed." },
      { id: 'D', text: "Allow tenant virtual machines to modify host kernel memory tables directly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use bare-metal Type 1 hypervisors with hardened microkernels, CPU hardware virtualization extensions, and strict resource isolation. Type 1 hypervisors run directly on bare metal hardware, offering a smaller attack surface than Type 2 hypervisors running on top of an OS. Security controls mitigate VM escape vulnerabilities (where guest code attacks the hypervisor) and prevent noisy neighbors through CPU core pinning and memory isolation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-125/final",
    tags: ["Hypervisor Security", "Hypervisor Security", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-286",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Confidential Computing and Secure Hardware Enclaves: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Confidential Computing to process highly sensitive financial fraud machine learning algorithms on cloud infrastructure without exposing plaintext data to the hypervisor.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Protecting data in use via hardware-based Trusted Execution Environments (TEEs) and memory encryption is under consideration.",
    options: [
      { id: 'A', text: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX)." },
      { id: 'B', text: "Process plaintext financial data in standard unencrypted virtual machine memory accessible to hypervisor administrators." },
      { id: 'C', text: "Disable hardware encryption to maximize CPU calculation throughput." },
      { id: 'D', text: "Rely on non-disclosure agreements to prevent cloud provider system administrators from viewing RAM contents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX). Confidential Computing protects data in use. By utilizing hardware-based Trusted Execution Environments (TEEs) with CPU memory encryption (AMD SEV, Intel SGX/TDX), sensitive workloads run in secure enclaves where neither cloud provider administrators, host operating systems, nor hypervisors can inspect memory.",
    referenceUrl: "https://confidentialcomputing.io/",
    tags: ["Confidential Computing", "Confidential Computing", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-287",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Confidential Computing and Secure Hardware Enclaves: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Confidential Computing to process highly sensitive financial fraud machine learning algorithms on cloud infrastructure without exposing plaintext data to the hypervisor.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Protecting data in use via hardware-based Trusted Execution Environments (TEEs) and memory encryption is under consideration.",
    options: [
      { id: 'A', text: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX)." },
      { id: 'B', text: "Process plaintext financial data in standard unencrypted virtual machine memory accessible to hypervisor administrators." },
      { id: 'C', text: "Disable hardware encryption to maximize CPU calculation throughput." },
      { id: 'D', text: "Rely on non-disclosure agreements to prevent cloud provider system administrators from viewing RAM contents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX). Confidential Computing protects data in use. By utilizing hardware-based Trusted Execution Environments (TEEs) with CPU memory encryption (AMD SEV, Intel SGX/TDX), sensitive workloads run in secure enclaves where neither cloud provider administrators, host operating systems, nor hypervisors can inspect memory.",
    referenceUrl: "https://confidentialcomputing.io/",
    tags: ["Confidential Computing", "Confidential Computing", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-288",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Confidential Computing and Secure Hardware Enclaves: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Confidential Computing to process highly sensitive financial fraud machine learning algorithms on cloud infrastructure without exposing plaintext data to the hypervisor.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Protecting data in use via hardware-based Trusted Execution Environments (TEEs) and memory encryption is under consideration.",
    options: [
      { id: 'A', text: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX)." },
      { id: 'B', text: "Process plaintext financial data in standard unencrypted virtual machine memory accessible to hypervisor administrators." },
      { id: 'C', text: "Disable hardware encryption to maximize CPU calculation throughput." },
      { id: 'D', text: "Rely on non-disclosure agreements to prevent cloud provider system administrators from viewing RAM contents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX). Confidential Computing protects data in use. By utilizing hardware-based Trusted Execution Environments (TEEs) with CPU memory encryption (AMD SEV, Intel SGX/TDX), sensitive workloads run in secure enclaves where neither cloud provider administrators, host operating systems, nor hypervisors can inspect memory.",
    referenceUrl: "https://confidentialcomputing.io/",
    tags: ["Confidential Computing", "Confidential Computing", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-289",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Confidential Computing and Secure Hardware Enclaves: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Confidential Computing to process highly sensitive financial fraud machine learning algorithms on cloud infrastructure without exposing plaintext data to the hypervisor.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Protecting data in use via hardware-based Trusted Execution Environments (TEEs) and memory encryption is under consideration.",
    options: [
      { id: 'A', text: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX)." },
      { id: 'B', text: "Process plaintext financial data in standard unencrypted virtual machine memory accessible to hypervisor administrators." },
      { id: 'C', text: "Disable hardware encryption to maximize CPU calculation throughput." },
      { id: 'D', text: "Rely on non-disclosure agreements to prevent cloud provider system administrators from viewing RAM contents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX). Confidential Computing protects data in use. By utilizing hardware-based Trusted Execution Environments (TEEs) with CPU memory encryption (AMD SEV, Intel SGX/TDX), sensitive workloads run in secure enclaves where neither cloud provider administrators, host operating systems, nor hypervisors can inspect memory.",
    referenceUrl: "https://confidentialcomputing.io/",
    tags: ["Confidential Computing", "Confidential Computing", "Application Secops"]
  },
  {
    id: "isc2-ccsp-290",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Confidential Computing and Secure Hardware Enclaves: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Confidential Computing to process highly sensitive financial fraud machine learning algorithms on cloud infrastructure without exposing plaintext data to the hypervisor.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Protecting data in use via hardware-based Trusted Execution Environments (TEEs) and memory encryption is under consideration.",
    options: [
      { id: 'A', text: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX)." },
      { id: 'B', text: "Process plaintext financial data in standard unencrypted virtual machine memory accessible to hypervisor administrators." },
      { id: 'C', text: "Disable hardware encryption to maximize CPU calculation throughput." },
      { id: 'D', text: "Rely on non-disclosure agreements to prevent cloud provider system administrators from viewing RAM contents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Confidential Computing virtual machines utilizing hardware-based Trusted Execution Environments (TEEs, e.g., AMD SEV, Intel SGX). Confidential Computing protects data in use. By utilizing hardware-based Trusted Execution Environments (TEEs) with CPU memory encryption (AMD SEV, Intel SGX/TDX), sensitive workloads run in secure enclaves where neither cloud provider administrators, host operating systems, nor hypervisors can inspect memory.",
    referenceUrl: "https://confidentialcomputing.io/",
    tags: ["Confidential Computing", "Confidential Computing", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-291",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Life Cycle (CSU SAD): Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Data Life Cycle to implement appropriate security controls at each distinct phase of customer financial data traversing cloud systems.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Create, Store, Use, Share, Archive, and Destroy lifecycle phases and security controls is under consideration.",
    options: [
      { id: 'A', text: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred)." },
      { id: 'B', text: "Apply encryption only during initial data creation and leave stored and archived records unencrypted." },
      { id: 'C', text: "Treat all lifecycle phases identically with no differentiation between active usage and long-term archiving." },
      { id: 'D', text: "Delete data by simply removing pointer references while leaving raw sectors intact on shared storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred). The CSA Cloud Data Life Cycle encompasses six phases: Create (data generation and classification), Store (committing to repository with encryption), Use (active processing in memory), Share (exchanging across trust boundaries), Archive (long-term compliance storage), and Destroy (sanitization/crypto-shredding).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Data Life Cycle", "Data Life Cycle", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-292",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Life Cycle (CSU SAD): Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Data Life Cycle to implement appropriate security controls at each distinct phase of customer financial data traversing cloud systems.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Create, Store, Use, Share, Archive, and Destroy lifecycle phases and security controls is under consideration.",
    options: [
      { id: 'A', text: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred)." },
      { id: 'B', text: "Apply encryption only during initial data creation and leave stored and archived records unencrypted." },
      { id: 'C', text: "Treat all lifecycle phases identically with no differentiation between active usage and long-term archiving." },
      { id: 'D', text: "Delete data by simply removing pointer references while leaving raw sectors intact on shared storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred). The CSA Cloud Data Life Cycle encompasses six phases: Create (data generation and classification), Store (committing to repository with encryption), Use (active processing in memory), Share (exchanging across trust boundaries), Archive (long-term compliance storage), and Destroy (sanitization/crypto-shredding).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Data Life Cycle", "Data Life Cycle", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-293",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Life Cycle (CSU SAD): Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Data Life Cycle to implement appropriate security controls at each distinct phase of customer financial data traversing cloud systems.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Create, Store, Use, Share, Archive, and Destroy lifecycle phases and security controls is under consideration.",
    options: [
      { id: 'A', text: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred)." },
      { id: 'B', text: "Apply encryption only during initial data creation and leave stored and archived records unencrypted." },
      { id: 'C', text: "Treat all lifecycle phases identically with no differentiation between active usage and long-term archiving." },
      { id: 'D', text: "Delete data by simply removing pointer references while leaving raw sectors intact on shared storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred). The CSA Cloud Data Life Cycle encompasses six phases: Create (data generation and classification), Store (committing to repository with encryption), Use (active processing in memory), Share (exchanging across trust boundaries), Archive (long-term compliance storage), and Destroy (sanitization/crypto-shredding).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Data Life Cycle", "Data Life Cycle", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-294",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Life Cycle (CSU SAD): Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Data Life Cycle to implement appropriate security controls at each distinct phase of customer financial data traversing cloud systems.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Create, Store, Use, Share, Archive, and Destroy lifecycle phases and security controls is under consideration.",
    options: [
      { id: 'A', text: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred)." },
      { id: 'B', text: "Apply encryption only during initial data creation and leave stored and archived records unencrypted." },
      { id: 'C', text: "Treat all lifecycle phases identically with no differentiation between active usage and long-term archiving." },
      { id: 'D', text: "Delete data by simply removing pointer references while leaving raw sectors intact on shared storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred). The CSA Cloud Data Life Cycle encompasses six phases: Create (data generation and classification), Store (committing to repository with encryption), Use (active processing in memory), Share (exchanging across trust boundaries), Archive (long-term compliance storage), and Destroy (sanitization/crypto-shredding).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Data Life Cycle", "Data Life Cycle", "Application Secops"]
  },
  {
    id: "isc2-ccsp-295",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Life Cycle (CSU SAD): Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Data Life Cycle to implement appropriate security controls at each distinct phase of customer financial data traversing cloud systems.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Create, Store, Use, Share, Archive, and Destroy lifecycle phases and security controls is under consideration.",
    options: [
      { id: 'A', text: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred)." },
      { id: 'B', text: "Apply encryption only during initial data creation and leave stored and archived records unencrypted." },
      { id: 'C', text: "Treat all lifecycle phases identically with no differentiation between active usage and long-term archiving." },
      { id: 'D', text: "Delete data by simply removing pointer references while leaving raw sectors intact on shared storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply the Cloud Data Life Cycle framework: Create (classify/SSL), Store (encrypt/WORM), Use (memory encrypt), Share (DLP/IAM), Archive (retention), Destroy (crypto-shred). The CSA Cloud Data Life Cycle encompasses six phases: Create (data generation and classification), Store (committing to repository with encryption), Use (active processing in memory), Share (exchanging across trust boundaries), Archive (long-term compliance storage), and Destroy (sanitization/crypto-shredding).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Data Life Cycle", "Data Life Cycle", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-296",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Discovery, Classification, and Categorization: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Data Classification to ensure that newly ingested customer records containing Social Security numbers are automatically tagged and restricted.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Automated discovery of PII, classification taxonomies (Confidential, Restricted, Public), and metadata tagging is under consideration.",
    options: [
      { id: 'A', text: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags." },
      { id: 'B', text: "Rely on manual human inspection of every uploaded file across petabytes of object storage." },
      { id: 'C', text: "Label all enterprise data as Public to simplify employee access policies." },
      { id: 'D', text: "Refuse to classify data because classification taxonomies require administrative overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags. Data classification categorizes assets based on sensitivity and business impact (e.g., Public, Internal, Confidential, Restricted). Automated cloud discovery tools scan data stores using pattern matching and machine learning, applying metadata tags that drive automated encryption and DLP policies.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final",
    tags: ["Data Classification", "Data Classification", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-297",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Discovery, Classification, and Categorization: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Data Classification to ensure that newly ingested customer records containing Social Security numbers are automatically tagged and restricted.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Automated discovery of PII, classification taxonomies (Confidential, Restricted, Public), and metadata tagging is under consideration.",
    options: [
      { id: 'A', text: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags." },
      { id: 'B', text: "Rely on manual human inspection of every uploaded file across petabytes of object storage." },
      { id: 'C', text: "Label all enterprise data as Public to simplify employee access policies." },
      { id: 'D', text: "Refuse to classify data because classification taxonomies require administrative overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags. Data classification categorizes assets based on sensitivity and business impact (e.g., Public, Internal, Confidential, Restricted). Automated cloud discovery tools scan data stores using pattern matching and machine learning, applying metadata tags that drive automated encryption and DLP policies.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final",
    tags: ["Data Classification", "Data Classification", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-298",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Discovery, Classification, and Categorization: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Data Classification to ensure that newly ingested customer records containing Social Security numbers are automatically tagged and restricted.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Automated discovery of PII, classification taxonomies (Confidential, Restricted, Public), and metadata tagging is under consideration.",
    options: [
      { id: 'A', text: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags." },
      { id: 'B', text: "Rely on manual human inspection of every uploaded file across petabytes of object storage." },
      { id: 'C', text: "Label all enterprise data as Public to simplify employee access policies." },
      { id: 'D', text: "Refuse to classify data because classification taxonomies require administrative overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags. Data classification categorizes assets based on sensitivity and business impact (e.g., Public, Internal, Confidential, Restricted). Automated cloud discovery tools scan data stores using pattern matching and machine learning, applying metadata tags that drive automated encryption and DLP policies.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final",
    tags: ["Data Classification", "Data Classification", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-299",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Discovery, Classification, and Categorization: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Data Classification to ensure that newly ingested customer records containing Social Security numbers are automatically tagged and restricted.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Automated discovery of PII, classification taxonomies (Confidential, Restricted, Public), and metadata tagging is under consideration.",
    options: [
      { id: 'A', text: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags." },
      { id: 'B', text: "Rely on manual human inspection of every uploaded file across petabytes of object storage." },
      { id: 'C', text: "Label all enterprise data as Public to simplify employee access policies." },
      { id: 'D', text: "Refuse to classify data because classification taxonomies require administrative overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags. Data classification categorizes assets based on sensitivity and business impact (e.g., Public, Internal, Confidential, Restricted). Automated cloud discovery tools scan data stores using pattern matching and machine learning, applying metadata tags that drive automated encryption and DLP policies.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final",
    tags: ["Data Classification", "Data Classification", "Application Secops"]
  },
  {
    id: "isc2-ccsp-300",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Discovery, Classification, and Categorization: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Data Classification to ensure that newly ingested customer records containing Social Security numbers are automatically tagged and restricted.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Automated discovery of PII, classification taxonomies (Confidential, Restricted, Public), and metadata tagging is under consideration.",
    options: [
      { id: 'A', text: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags." },
      { id: 'B', text: "Rely on manual human inspection of every uploaded file across petabytes of object storage." },
      { id: 'C', text: "Label all enterprise data as Public to simplify employee access policies." },
      { id: 'D', text: "Refuse to classify data because classification taxonomies require administrative overhead." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy automated data discovery and classification engines that scan repositories, identify sensitive patterns, and apply mandatory classification tags. Data classification categorizes assets based on sensitivity and business impact (e.g., Public, Internal, Confidential, Restricted). Automated cloud discovery tools scan data stores using pattern matching and machine learning, applying metadata tags that drive automated encryption and DLP policies.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-60/vol-1-rev-1/final",
    tags: ["Data Classification", "Data Classification", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_12;
