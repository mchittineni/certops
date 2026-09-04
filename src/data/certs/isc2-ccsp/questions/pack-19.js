export const ISC2_CCSP_QUESTIONS_19 = [
  {
    id: "isc2-ccsp-451",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Network and Flow Telemetry Anomaly Detection: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Network Telemetry to detect an internal virtual machine that has been silently compromised and is participating in a distributed cryptocurrency mining botnet.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Baselines, threshold alerting, and machine learning anomaly detection on VPC Flow Logs is under consideration.",
    options: [
      { id: 'A', text: "Rely on billing invoices at the end of the month to notice abnormal compute spikes." },
      { id: 'B', text: "Inspect application HTTP access logs alone, which do not capture non-HTTP raw TCP socket connections." },
      { id: 'C', text: "Disable network telemetry collection to reduce log ingestion costs." },
      { id: 'D', text: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools. Network flow telemetry (VPC Flow Logs, IPFIX) captures layer 4 connection metadata (source/dest IP, ports, bytes, packets). Cloud threat detection engines establish behavioral baselines using machine learning, flagging deviations such as sudden spikes in outbound connections, abnormal ports, or communication with known malicious IPs.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-137/final",
    tags: ["Network Telemetry", "Network Telemetry", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-452",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Network and Flow Telemetry Anomaly Detection: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Network Telemetry to detect an internal virtual machine that has been silently compromised and is participating in a distributed cryptocurrency mining botnet.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Baselines, threshold alerting, and machine learning anomaly detection on VPC Flow Logs is under consideration.",
    options: [
      { id: 'A', text: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools." },
      { id: 'B', text: "Rely on billing invoices at the end of the month to notice abnormal compute spikes." },
      { id: 'C', text: "Inspect application HTTP access logs alone, which do not capture non-HTTP raw TCP socket connections." },
      { id: 'D', text: "Disable network telemetry collection to reduce log ingestion costs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools. Network flow telemetry (VPC Flow Logs, IPFIX) captures layer 4 connection metadata (source/dest IP, ports, bytes, packets). Cloud threat detection engines establish behavioral baselines using machine learning, flagging deviations such as sudden spikes in outbound connections, abnormal ports, or communication with known malicious IPs.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-137/final",
    tags: ["Network Telemetry", "Network Telemetry", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-453",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Network and Flow Telemetry Anomaly Detection: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Network Telemetry to detect an internal virtual machine that has been silently compromised and is participating in a distributed cryptocurrency mining botnet.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Baselines, threshold alerting, and machine learning anomaly detection on VPC Flow Logs is under consideration.",
    options: [
      { id: 'A', text: "Disable network telemetry collection to reduce log ingestion costs." },
      { id: 'B', text: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools." },
      { id: 'C', text: "Inspect application HTTP access logs alone, which do not capture non-HTTP raw TCP socket connections." },
      { id: 'D', text: "Rely on billing invoices at the end of the month to notice abnormal compute spikes." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools. Network flow telemetry (VPC Flow Logs, IPFIX) captures layer 4 connection metadata (source/dest IP, ports, bytes, packets). Cloud threat detection engines establish behavioral baselines using machine learning, flagging deviations such as sudden spikes in outbound connections, abnormal ports, or communication with known malicious IPs.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-137/final",
    tags: ["Network Telemetry", "Network Telemetry", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-454",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Network and Flow Telemetry Anomaly Detection: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Network Telemetry to detect an internal virtual machine that has been silently compromised and is participating in a distributed cryptocurrency mining botnet.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Baselines, threshold alerting, and machine learning anomaly detection on VPC Flow Logs is under consideration.",
    options: [
      { id: 'A', text: "Rely on billing invoices at the end of the month to notice abnormal compute spikes." },
      { id: 'B', text: "Disable network telemetry collection to reduce log ingestion costs." },
      { id: 'C', text: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools." },
      { id: 'D', text: "Inspect application HTTP access logs alone, which do not capture non-HTTP raw TCP socket connections." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools. Network flow telemetry (VPC Flow Logs, IPFIX) captures layer 4 connection metadata (source/dest IP, ports, bytes, packets). Cloud threat detection engines establish behavioral baselines using machine learning, flagging deviations such as sudden spikes in outbound connections, abnormal ports, or communication with known malicious IPs.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-137/final",
    tags: ["Network Telemetry", "Network Telemetry", "Application Secops"]
  },
  {
    id: "isc2-ccsp-455",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Network and Flow Telemetry Anomaly Detection: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Network Telemetry to detect an internal virtual machine that has been silently compromised and is participating in a distributed cryptocurrency mining botnet.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Baselines, threshold alerting, and machine learning anomaly detection on VPC Flow Logs is under consideration.",
    options: [
      { id: 'A', text: "Rely on billing invoices at the end of the month to notice abnormal compute spikes." },
      { id: 'B', text: "Inspect application HTTP access logs alone, which do not capture non-HTTP raw TCP socket connections." },
      { id: 'C', text: "Disable network telemetry collection to reduce log ingestion costs." },
      { id: 'D', text: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Analyze network flow telemetry (VPC Flow Logs) against behavioral baselines, alerting on anomalous outbound traffic volume and known mining pools. Network flow telemetry (VPC Flow Logs, IPFIX) captures layer 4 connection metadata (source/dest IP, ports, bytes, packets). Cloud threat detection engines establish behavioral baselines using machine learning, flagging deviations such as sudden spikes in outbound connections, abnormal ports, or communication with known malicious IPs.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-137/final",
    tags: ["Network Telemetry", "Network Telemetry", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-456",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Site Reliability Engineering (SRE) and Chaos Resilience: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Resilience & Chaos to prove that a multi-region cloud banking architecture can survive an abrupt, unannounced regional cloud outage without customer impact.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Chaos engineering, fault injection, automated failover verification, and error budget governance is under consideration.",
    options: [
      { id: 'A', text: "Prohibit resilience testing to avoid the possibility of uncovering defects in architecture." },
      { id: 'B', text: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes." },
      { id: 'C', text: "Assume cloud provider marketing claims of high availability guarantee that applications will never fail." },
      { id: 'D', text: "Wait for an actual catastrophic cloud outage to discover whether disaster recovery procedures function." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes. Chaos engineering proactively injects controlled disruptions (terminating instances, injecting network latency, blackholing dependencies) into running environments. This validates that automated failover, health probes, circuit breakers, and self-healing controllers operate as designed before real incidents occur.",
    referenceUrl: "https://principlesofchaos.org/",
    tags: ["Resilience & Chaos", "Resilience & Chaos", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-457",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Site Reliability Engineering (SRE) and Chaos Resilience: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Resilience & Chaos to prove that a multi-region cloud banking architecture can survive an abrupt, unannounced regional cloud outage without customer impact.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Chaos engineering, fault injection, automated failover verification, and error budget governance is under consideration.",
    options: [
      { id: 'A', text: "Assume cloud provider marketing claims of high availability guarantee that applications will never fail." },
      { id: 'B', text: "Prohibit resilience testing to avoid the possibility of uncovering defects in architecture." },
      { id: 'C', text: "Wait for an actual catastrophic cloud outage to discover whether disaster recovery procedures function." },
      { id: 'D', text: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes. Chaos engineering proactively injects controlled disruptions (terminating instances, injecting network latency, blackholing dependencies) into running environments. This validates that automated failover, health probes, circuit breakers, and self-healing controllers operate as designed before real incidents occur.",
    referenceUrl: "https://principlesofchaos.org/",
    tags: ["Resilience & Chaos", "Resilience & Chaos", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-458",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Site Reliability Engineering (SRE) and Chaos Resilience: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Resilience & Chaos to prove that a multi-region cloud banking architecture can survive an abrupt, unannounced regional cloud outage without customer impact.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Chaos engineering, fault injection, automated failover verification, and error budget governance is under consideration.",
    options: [
      { id: 'A', text: "Prohibit resilience testing to avoid the possibility of uncovering defects in architecture." },
      { id: 'B', text: "Assume cloud provider marketing claims of high availability guarantee that applications will never fail." },
      { id: 'C', text: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes." },
      { id: 'D', text: "Wait for an actual catastrophic cloud outage to discover whether disaster recovery procedures function." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes. Chaos engineering proactively injects controlled disruptions (terminating instances, injecting network latency, blackholing dependencies) into running environments. This validates that automated failover, health probes, circuit breakers, and self-healing controllers operate as designed before real incidents occur.",
    referenceUrl: "https://principlesofchaos.org/",
    tags: ["Resilience & Chaos", "Resilience & Chaos", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-459",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Site Reliability Engineering (SRE) and Chaos Resilience: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Resilience & Chaos to prove that a multi-region cloud banking architecture can survive an abrupt, unannounced regional cloud outage without customer impact.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Chaos engineering, fault injection, automated failover verification, and error budget governance is under consideration.",
    options: [
      { id: 'A', text: "Wait for an actual catastrophic cloud outage to discover whether disaster recovery procedures function." },
      { id: 'B', text: "Assume cloud provider marketing claims of high availability guarantee that applications will never fail." },
      { id: 'C', text: "Prohibit resilience testing to avoid the possibility of uncovering defects in architecture." },
      { id: 'D', text: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes. Chaos engineering proactively injects controlled disruptions (terminating instances, injecting network latency, blackholing dependencies) into running environments. This validates that automated failover, health probes, circuit breakers, and self-healing controllers operate as designed before real incidents occur.",
    referenceUrl: "https://principlesofchaos.org/",
    tags: ["Resilience & Chaos", "Resilience & Chaos", "Application Secops"]
  },
  {
    id: "isc2-ccsp-460",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Site Reliability Engineering (SRE) and Chaos Resilience: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Resilience & Chaos to prove that a multi-region cloud banking architecture can survive an abrupt, unannounced regional cloud outage without customer impact.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Chaos engineering, fault injection, automated failover verification, and error budget governance is under consideration.",
    options: [
      { id: 'A', text: "Assume cloud provider marketing claims of high availability guarantee that applications will never fail." },
      { id: 'B', text: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes." },
      { id: 'C', text: "Wait for an actual catastrophic cloud outage to discover whether disaster recovery procedures function." },
      { id: 'D', text: "Prohibit resilience testing to avoid the possibility of uncovering defects in architecture." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct controlled chaos engineering experiments (e.g., AWS Fault Injection Simulator, Chaos Mesh) simulating regional network blackholes. Chaos engineering proactively injects controlled disruptions (terminating instances, injecting network latency, blackholing dependencies) into running environments. This validates that automated failover, health probes, circuit breakers, and self-healing controllers operate as designed before real incidents occur.",
    referenceUrl: "https://principlesofchaos.org/",
    tags: ["Resilience & Chaos", "Resilience & Chaos", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-461",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Global Privacy Regulations and Data Sovereignty: GDPR and CCPA: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Privacy & Sovereignty to store European Union citizen personal data in compliance with the General Data Protection Regulation (GDPR).",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Cross-border data transfers, data subject rights, right to be forgotten, and data residency is under consideration.",
    options: [
      { id: 'A', text: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests." },
      { id: 'B', text: "Refuse to delete customer records when requested under the GDPR Right to Erasure." },
      { id: 'C', text: "Transfer all European citizen records to unencrypted public servers in foreign jurisdictions with no legal adequacy agreements." },
      { id: 'D', text: "Assume global privacy laws apply only to companies with physical headquarters in that specific jurisdiction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests. Data sovereignty laws dictate that data is subject to the legal framework of the jurisdiction where it is located. GDPR (EU) and CCPA/CPRA (California) mandate strict cross-border transfer rules (Standard Contractual Clauses), data subject rights (access, rectification, erasure), and severe penalties for non-compliance.",
    referenceUrl: "https://gdpr.eu/",
    tags: ["Privacy & Sovereignty", "Privacy & Sovereignty", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-462",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Global Privacy Regulations and Data Sovereignty: GDPR and CCPA: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Privacy & Sovereignty to store European Union citizen personal data in compliance with the General Data Protection Regulation (GDPR).",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Cross-border data transfers, data subject rights, right to be forgotten, and data residency is under consideration.",
    options: [
      { id: 'A', text: "Transfer all European citizen records to unencrypted public servers in foreign jurisdictions with no legal adequacy agreements." },
      { id: 'B', text: "Refuse to delete customer records when requested under the GDPR Right to Erasure." },
      { id: 'C', text: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests." },
      { id: 'D', text: "Assume global privacy laws apply only to companies with physical headquarters in that specific jurisdiction." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests. Data sovereignty laws dictate that data is subject to the legal framework of the jurisdiction where it is located. GDPR (EU) and CCPA/CPRA (California) mandate strict cross-border transfer rules (Standard Contractual Clauses), data subject rights (access, rectification, erasure), and severe penalties for non-compliance.",
    referenceUrl: "https://gdpr.eu/",
    tags: ["Privacy & Sovereignty", "Privacy & Sovereignty", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-463",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Global Privacy Regulations and Data Sovereignty: GDPR and CCPA: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Privacy & Sovereignty to store European Union citizen personal data in compliance with the General Data Protection Regulation (GDPR).",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Cross-border data transfers, data subject rights, right to be forgotten, and data residency is under consideration.",
    options: [
      { id: 'A', text: "Transfer all European citizen records to unencrypted public servers in foreign jurisdictions with no legal adequacy agreements." },
      { id: 'B', text: "Refuse to delete customer records when requested under the GDPR Right to Erasure." },
      { id: 'C', text: "Assume global privacy laws apply only to companies with physical headquarters in that specific jurisdiction." },
      { id: 'D', text: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests. Data sovereignty laws dictate that data is subject to the legal framework of the jurisdiction where it is located. GDPR (EU) and CCPA/CPRA (California) mandate strict cross-border transfer rules (Standard Contractual Clauses), data subject rights (access, rectification, erasure), and severe penalties for non-compliance.",
    referenceUrl: "https://gdpr.eu/",
    tags: ["Privacy & Sovereignty", "Privacy & Sovereignty", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-464",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Global Privacy Regulations and Data Sovereignty: GDPR and CCPA: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Privacy & Sovereignty to store European Union citizen personal data in compliance with the General Data Protection Regulation (GDPR).",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Cross-border data transfers, data subject rights, right to be forgotten, and data residency is under consideration.",
    options: [
      { id: 'A', text: "Assume global privacy laws apply only to companies with physical headquarters in that specific jurisdiction." },
      { id: 'B', text: "Refuse to delete customer records when requested under the GDPR Right to Erasure." },
      { id: 'C', text: "Transfer all European citizen records to unencrypted public servers in foreign jurisdictions with no legal adequacy agreements." },
      { id: 'D', text: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests. Data sovereignty laws dictate that data is subject to the legal framework of the jurisdiction where it is located. GDPR (EU) and CCPA/CPRA (California) mandate strict cross-border transfer rules (Standard Contractual Clauses), data subject rights (access, rectification, erasure), and severe penalties for non-compliance.",
    referenceUrl: "https://gdpr.eu/",
    tags: ["Privacy & Sovereignty", "Privacy & Sovereignty", "Application Secops"]
  },
  {
    id: "isc2-ccsp-465",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Global Privacy Regulations and Data Sovereignty: GDPR and CCPA: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Privacy & Sovereignty to store European Union citizen personal data in compliance with the General Data Protection Regulation (GDPR).",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Cross-border data transfers, data subject rights, right to be forgotten, and data residency is under consideration.",
    options: [
      { id: 'A', text: "Transfer all European citizen records to unencrypted public servers in foreign jurisdictions with no legal adequacy agreements." },
      { id: 'B', text: "Refuse to delete customer records when requested under the GDPR Right to Erasure." },
      { id: 'C', text: "Assume global privacy laws apply only to companies with physical headquarters in that specific jurisdiction." },
      { id: 'D', text: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce data residency within EU cloud regions, implement technical safeguards (encryption, pseudonymization), and support data subject access requests. Data sovereignty laws dictate that data is subject to the legal framework of the jurisdiction where it is located. GDPR (EU) and CCPA/CPRA (California) mandate strict cross-border transfer rules (Standard Contractual Clauses), data subject rights (access, rectification, erasure), and severe penalties for non-compliance.",
    referenceUrl: "https://gdpr.eu/",
    tags: ["Privacy & Sovereignty", "Privacy & Sovereignty", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-466",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "International Standards: ISO/IEC 27001, 27017, and 27018: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates ISO Cloud Standards to verify that a public cloud service provider adheres to international standards specifically designed for cloud security and privacy.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Information security (27001), cloud security controls (27017), and PII protection in public clouds (27018) is under consideration.",
    options: [
      { id: 'A', text: "Refuse to request third-party audit certificates from cloud providers." },
      { id: 'B', text: "Rely on self-written vendor marketing blog posts without third-party accredited audit verification." },
      { id: 'C', text: "Assume an ISO 9001 quality management certification proves cybersecurity controls." },
      { id: 'D', text: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications. ISO/IEC 27001 establishes an Information Security Management System (ISMS). ISO/IEC 27017 supplements 27001 with specific controls for cloud computing (virtual machine isolation, CSP shared responsibility). ISO/IEC 27018 focuses specifically on protecting Personally Identifiable Information (PII) in public cloud environments.",
    referenceUrl: "https://www.iso.org/standard/43757.html",
    tags: ["ISO Cloud Standards", "ISO Cloud Standards", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-467",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "International Standards: ISO/IEC 27001, 27017, and 27018: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates ISO Cloud Standards to verify that a public cloud service provider adheres to international standards specifically designed for cloud security and privacy.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Information security (27001), cloud security controls (27017), and PII protection in public clouds (27018) is under consideration.",
    options: [
      { id: 'A', text: "Refuse to request third-party audit certificates from cloud providers." },
      { id: 'B', text: "Rely on self-written vendor marketing blog posts without third-party accredited audit verification." },
      { id: 'C', text: "Assume an ISO 9001 quality management certification proves cybersecurity controls." },
      { id: 'D', text: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications. ISO/IEC 27001 establishes an Information Security Management System (ISMS). ISO/IEC 27017 supplements 27001 with specific controls for cloud computing (virtual machine isolation, CSP shared responsibility). ISO/IEC 27018 focuses specifically on protecting Personally Identifiable Information (PII) in public cloud environments.",
    referenceUrl: "https://www.iso.org/standard/43757.html",
    tags: ["ISO Cloud Standards", "ISO Cloud Standards", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-468",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "International Standards: ISO/IEC 27001, 27017, and 27018: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates ISO Cloud Standards to verify that a public cloud service provider adheres to international standards specifically designed for cloud security and privacy.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Information security (27001), cloud security controls (27017), and PII protection in public clouds (27018) is under consideration.",
    options: [
      { id: 'A', text: "Rely on self-written vendor marketing blog posts without third-party accredited audit verification." },
      { id: 'B', text: "Refuse to request third-party audit certificates from cloud providers." },
      { id: 'C', text: "Assume an ISO 9001 quality management certification proves cybersecurity controls." },
      { id: 'D', text: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications. ISO/IEC 27001 establishes an Information Security Management System (ISMS). ISO/IEC 27017 supplements 27001 with specific controls for cloud computing (virtual machine isolation, CSP shared responsibility). ISO/IEC 27018 focuses specifically on protecting Personally Identifiable Information (PII) in public cloud environments.",
    referenceUrl: "https://www.iso.org/standard/43757.html",
    tags: ["ISO Cloud Standards", "ISO Cloud Standards", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-469",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "International Standards: ISO/IEC 27001, 27017, and 27018: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates ISO Cloud Standards to verify that a public cloud service provider adheres to international standards specifically designed for cloud security and privacy.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Information security (27001), cloud security controls (27017), and PII protection in public clouds (27018) is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications." },
      { id: 'B', text: "Assume an ISO 9001 quality management certification proves cybersecurity controls." },
      { id: 'C', text: "Rely on self-written vendor marketing blog posts without third-party accredited audit verification." },
      { id: 'D', text: "Refuse to request third-party audit certificates from cloud providers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications. ISO/IEC 27001 establishes an Information Security Management System (ISMS). ISO/IEC 27017 supplements 27001 with specific controls for cloud computing (virtual machine isolation, CSP shared responsibility). ISO/IEC 27018 focuses specifically on protecting Personally Identifiable Information (PII) in public cloud environments.",
    referenceUrl: "https://www.iso.org/standard/43757.html",
    tags: ["ISO Cloud Standards", "ISO Cloud Standards", "Application Secops"]
  },
  {
    id: "isc2-ccsp-470",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "International Standards: ISO/IEC 27001, 27017, and 27018: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates ISO Cloud Standards to verify that a public cloud service provider adheres to international standards specifically designed for cloud security and privacy.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Information security (27001), cloud security controls (27017), and PII protection in public clouds (27018) is under consideration.",
    options: [
      { id: 'A', text: "Refuse to request third-party audit certificates from cloud providers." },
      { id: 'B', text: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications." },
      { id: 'C', text: "Assume an ISO 9001 quality management certification proves cybersecurity controls." },
      { id: 'D', text: "Rely on self-written vendor marketing blog posts without third-party accredited audit verification." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Verify the provider maintains ISO/IEC 27001 (ISMS), ISO/IEC 27017 (cloud security controls), and ISO/IEC 27018 (cloud PII protection) certifications. ISO/IEC 27001 establishes an Information Security Management System (ISMS). ISO/IEC 27017 supplements 27001 with specific controls for cloud computing (virtual machine isolation, CSP shared responsibility). ISO/IEC 27018 focuses specifically on protecting Personally Identifiable Information (PII) in public cloud environments.",
    referenceUrl: "https://www.iso.org/standard/43757.html",
    tags: ["ISO Cloud Standards", "ISO Cloud Standards", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-471",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Service Organization Control (SOC) Reports: SOC 1, 2, and 3: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates SOC Reporting to evaluate a cloud provider's operational security effectiveness over a 12-month period to satisfy enterprise security audit requirements.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Comparing SOC 1 (financial), SOC 2 (Trust Services Criteria), SOC 3 (public), and Type I vs Type II is under consideration.",
    options: [
      { id: 'A', text: "Rely on a SOC 2 Type I report which only evaluates control design at a single point in time without testing operational effectiveness." },
      { id: 'B', text: "Request a SOC 1 report to evaluate technical cybersecurity controls against malware." },
      { id: 'C', text: "Download a generic marketing SOC 3 report and assume it contains detailed technical testing evidence." },
      { id: 'D', text: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time. AICPA SOC reports evaluate controls: SOC 1 focuses on Internal Controls over Financial Reporting (ICFR). SOC 2 evaluates the Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy). Type I assesses control design at a point in time; Type II evaluates operational effectiveness over a period (typically 6–12 months).",
    referenceUrl: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome.html",
    tags: ["SOC Reporting", "SOC Reporting", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-472",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Service Organization Control (SOC) Reports: SOC 1, 2, and 3: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates SOC Reporting to evaluate a cloud provider's operational security effectiveness over a 12-month period to satisfy enterprise security audit requirements.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Comparing SOC 1 (financial), SOC 2 (Trust Services Criteria), SOC 3 (public), and Type I vs Type II is under consideration.",
    options: [
      { id: 'A', text: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time." },
      { id: 'B', text: "Rely on a SOC 2 Type I report which only evaluates control design at a single point in time without testing operational effectiveness." },
      { id: 'C', text: "Download a generic marketing SOC 3 report and assume it contains detailed technical testing evidence." },
      { id: 'D', text: "Request a SOC 1 report to evaluate technical cybersecurity controls against malware." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time. AICPA SOC reports evaluate controls: SOC 1 focuses on Internal Controls over Financial Reporting (ICFR). SOC 2 evaluates the Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy). Type I assesses control design at a point in time; Type II evaluates operational effectiveness over a period (typically 6–12 months).",
    referenceUrl: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome.html",
    tags: ["SOC Reporting", "SOC Reporting", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-473",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Service Organization Control (SOC) Reports: SOC 1, 2, and 3: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates SOC Reporting to evaluate a cloud provider's operational security effectiveness over a 12-month period to satisfy enterprise security audit requirements.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Comparing SOC 1 (financial), SOC 2 (Trust Services Criteria), SOC 3 (public), and Type I vs Type II is under consideration.",
    options: [
      { id: 'A', text: "Request a SOC 1 report to evaluate technical cybersecurity controls against malware." },
      { id: 'B', text: "Rely on a SOC 2 Type I report which only evaluates control design at a single point in time without testing operational effectiveness." },
      { id: 'C', text: "Download a generic marketing SOC 3 report and assume it contains detailed technical testing evidence." },
      { id: 'D', text: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time. AICPA SOC reports evaluate controls: SOC 1 focuses on Internal Controls over Financial Reporting (ICFR). SOC 2 evaluates the Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy). Type I assesses control design at a point in time; Type II evaluates operational effectiveness over a period (typically 6–12 months).",
    referenceUrl: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome.html",
    tags: ["SOC Reporting", "SOC Reporting", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-474",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Service Organization Control (SOC) Reports: SOC 1, 2, and 3: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates SOC Reporting to evaluate a cloud provider's operational security effectiveness over a 12-month period to satisfy enterprise security audit requirements.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Comparing SOC 1 (financial), SOC 2 (Trust Services Criteria), SOC 3 (public), and Type I vs Type II is under consideration.",
    options: [
      { id: 'A', text: "Download a generic marketing SOC 3 report and assume it contains detailed technical testing evidence." },
      { id: 'B', text: "Rely on a SOC 2 Type I report which only evaluates control design at a single point in time without testing operational effectiveness." },
      { id: 'C', text: "Request a SOC 1 report to evaluate technical cybersecurity controls against malware." },
      { id: 'D', text: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time. AICPA SOC reports evaluate controls: SOC 1 focuses on Internal Controls over Financial Reporting (ICFR). SOC 2 evaluates the Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy). Type I assesses control design at a point in time; Type II evaluates operational effectiveness over a period (typically 6–12 months).",
    referenceUrl: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome.html",
    tags: ["SOC Reporting", "SOC Reporting", "Application Secops"]
  },
  {
    id: "isc2-ccsp-475",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d6",
    domainName: "Legal, Risk and Compliance",
    title: "Service Organization Control (SOC) Reports: SOC 1, 2, and 3: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates SOC Reporting to evaluate a cloud provider's operational security effectiveness over a 12-month period to satisfy enterprise security audit requirements.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Comparing SOC 1 (financial), SOC 2 (Trust Services Criteria), SOC 3 (public), and Type I vs Type II is under consideration.",
    options: [
      { id: 'A', text: "Rely on a SOC 2 Type I report which only evaluates control design at a single point in time without testing operational effectiveness." },
      { id: 'B', text: "Request a SOC 1 report to evaluate technical cybersecurity controls against malware." },
      { id: 'C', text: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time." },
      { id: 'D', text: "Download a generic marketing SOC 3 report and assume it contains detailed technical testing evidence." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Review the provider's independent SOC 2 Type II report, evaluating the design and operating effectiveness of security controls over time. AICPA SOC reports evaluate controls: SOC 1 focuses on Internal Controls over Financial Reporting (ICFR). SOC 2 evaluates the Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy). Type I assesses control design at a point in time; Type II evaluates operational effectiveness over a period (typically 6–12 months).",
    referenceUrl: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome.html",
    tags: ["SOC Reporting", "SOC Reporting", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_19;
