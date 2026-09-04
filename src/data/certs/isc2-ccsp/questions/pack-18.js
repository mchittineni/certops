export const ISC2_CCSP_QUESTIONS_18 = [
  {
    id: "isc2-ccsp-426",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Forensic Readiness and Chain of Custody: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Forensic Readiness to ensure that digital evidence collected during a cloud security incident is legally admissible in court during criminal prosecution.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Preserving evidence integrity: non-repudiation, point-in-time snapshots, and cryptographic hashing is under consideration.",
    options: [
      { id: 'A', text: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions." },
      { id: 'B', text: "Store forensic disk images on unencrypted public file-sharing websites." },
      { id: 'C', text: "Modify evidence files directly on the live server while conducting forensic investigation." },
      { id: 'D', text: "Power off the compromised virtual machine immediately, wiping volatile system RAM and active network sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions. Forensic readiness requires strict chain of custody: 1) preserve volatile RAM first using live acquisition tools, 2) capture point-in-time storage snapshots, 3) generate cryptographic SHA-256 hashes immediately to prove evidence has not been tampered with, and 4) document every custodian in a verifiable custody log.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-86/final",
    tags: ["Forensic Readiness", "Forensic Readiness", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-427",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Forensic Readiness and Chain of Custody: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Forensic Readiness to ensure that digital evidence collected during a cloud security incident is legally admissible in court during criminal prosecution.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Preserving evidence integrity: non-repudiation, point-in-time snapshots, and cryptographic hashing is under consideration.",
    options: [
      { id: 'A', text: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions." },
      { id: 'B', text: "Store forensic disk images on unencrypted public file-sharing websites." },
      { id: 'C', text: "Power off the compromised virtual machine immediately, wiping volatile system RAM and active network sockets." },
      { id: 'D', text: "Modify evidence files directly on the live server while conducting forensic investigation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions. Forensic readiness requires strict chain of custody: 1) preserve volatile RAM first using live acquisition tools, 2) capture point-in-time storage snapshots, 3) generate cryptographic SHA-256 hashes immediately to prove evidence has not been tampered with, and 4) document every custodian in a verifiable custody log.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-86/final",
    tags: ["Forensic Readiness", "Forensic Readiness", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-428",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Forensic Readiness and Chain of Custody: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Forensic Readiness to ensure that digital evidence collected during a cloud security incident is legally admissible in court during criminal prosecution.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Preserving evidence integrity: non-repudiation, point-in-time snapshots, and cryptographic hashing is under consideration.",
    options: [
      { id: 'A', text: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions." },
      { id: 'B', text: "Power off the compromised virtual machine immediately, wiping volatile system RAM and active network sockets." },
      { id: 'C', text: "Modify evidence files directly on the live server while conducting forensic investigation." },
      { id: 'D', text: "Store forensic disk images on unencrypted public file-sharing websites." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions. Forensic readiness requires strict chain of custody: 1) preserve volatile RAM first using live acquisition tools, 2) capture point-in-time storage snapshots, 3) generate cryptographic SHA-256 hashes immediately to prove evidence has not been tampered with, and 4) document every custodian in a verifiable custody log.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-86/final",
    tags: ["Forensic Readiness", "Forensic Readiness", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-429",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Forensic Readiness and Chain of Custody: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Forensic Readiness to ensure that digital evidence collected during a cloud security incident is legally admissible in court during criminal prosecution.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Preserving evidence integrity: non-repudiation, point-in-time snapshots, and cryptographic hashing is under consideration.",
    options: [
      { id: 'A', text: "Store forensic disk images on unencrypted public file-sharing websites." },
      { id: 'B', text: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions." },
      { id: 'C', text: "Power off the compromised virtual machine immediately, wiping volatile system RAM and active network sockets." },
      { id: 'D', text: "Modify evidence files directly on the live server while conducting forensic investigation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions. Forensic readiness requires strict chain of custody: 1) preserve volatile RAM first using live acquisition tools, 2) capture point-in-time storage snapshots, 3) generate cryptographic SHA-256 hashes immediately to prove evidence has not been tampered with, and 4) document every custodian in a verifiable custody log.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-86/final",
    tags: ["Forensic Readiness", "Forensic Readiness", "Application Secops"]
  },
  {
    id: "isc2-ccsp-430",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Forensic Readiness and Chain of Custody: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Forensic Readiness to ensure that digital evidence collected during a cloud security incident is legally admissible in court during criminal prosecution.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Preserving evidence integrity: non-repudiation, point-in-time snapshots, and cryptographic hashing is under consideration.",
    options: [
      { id: 'A', text: "Store forensic disk images on unencrypted public file-sharing websites." },
      { id: 'B', text: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions." },
      { id: 'C', text: "Modify evidence files directly on the live server while conducting forensic investigation." },
      { id: 'D', text: "Power off the compromised virtual machine immediately, wiping volatile system RAM and active network sockets." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Follow a formal chain of custody: capture bit-stream images/snapshots, calculate cryptographic hashes (SHA-256), and log all handler actions. Forensic readiness requires strict chain of custody: 1) preserve volatile RAM first using live acquisition tools, 2) capture point-in-time storage snapshots, 3) generate cryptographic SHA-256 hashes immediately to prove evidence has not been tampered with, and 4) document every custodian in a verifiable custody log.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-86/final",
    tags: ["Forensic Readiness", "Forensic Readiness", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-431",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Incident Response Lifecycle (NIST SP 800-61): Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Incident Response to execute a structured incident response process when a sophisticated advanced persistent threat (APT) is detected in the cloud.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Preparation, Detection and Analysis, Containment, Eradication, Recovery, and Post-Incident Lessons Learned is under consideration.",
    options: [
      { id: 'A', text: "Skip post-incident reviews to avoid discussing operational shortcomings." },
      { id: 'B', text: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned." },
      { id: 'C', text: "Immediately wipe all servers upon initial alert without conducting detection, analysis, or evidence preservation." },
      { id: 'D', text: "Rely on ad-hoc, unpracticed emergency responses during active production crises." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned. NIST SP 800-61 defines the four-phase incident response cycle: 1) Preparation (tools, playbooks, training), 2) Detection & Analysis (alert triage, determining scope), 3) Containment, Eradication & Recovery (isolating workloads, removing malware, restoring systems), and 4) Post-Incident Activity (lessons learned).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
    tags: ["Incident Response", "Incident Response", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-432",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Incident Response Lifecycle (NIST SP 800-61): Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Incident Response to execute a structured incident response process when a sophisticated advanced persistent threat (APT) is detected in the cloud.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Preparation, Detection and Analysis, Containment, Eradication, Recovery, and Post-Incident Lessons Learned is under consideration.",
    options: [
      { id: 'A', text: "Rely on ad-hoc, unpracticed emergency responses during active production crises." },
      { id: 'B', text: "Immediately wipe all servers upon initial alert without conducting detection, analysis, or evidence preservation." },
      { id: 'C', text: "Skip post-incident reviews to avoid discussing operational shortcomings." },
      { id: 'D', text: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned. NIST SP 800-61 defines the four-phase incident response cycle: 1) Preparation (tools, playbooks, training), 2) Detection & Analysis (alert triage, determining scope), 3) Containment, Eradication & Recovery (isolating workloads, removing malware, restoring systems), and 4) Post-Incident Activity (lessons learned).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
    tags: ["Incident Response", "Incident Response", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-433",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Incident Response Lifecycle (NIST SP 800-61): Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Incident Response to execute a structured incident response process when a sophisticated advanced persistent threat (APT) is detected in the cloud.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Preparation, Detection and Analysis, Containment, Eradication, Recovery, and Post-Incident Lessons Learned is under consideration.",
    options: [
      { id: 'A', text: "Rely on ad-hoc, unpracticed emergency responses during active production crises." },
      { id: 'B', text: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned." },
      { id: 'C', text: "Skip post-incident reviews to avoid discussing operational shortcomings." },
      { id: 'D', text: "Immediately wipe all servers upon initial alert without conducting detection, analysis, or evidence preservation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned. NIST SP 800-61 defines the four-phase incident response cycle: 1) Preparation (tools, playbooks, training), 2) Detection & Analysis (alert triage, determining scope), 3) Containment, Eradication & Recovery (isolating workloads, removing malware, restoring systems), and 4) Post-Incident Activity (lessons learned).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
    tags: ["Incident Response", "Incident Response", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-434",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Incident Response Lifecycle (NIST SP 800-61): Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Incident Response to execute a structured incident response process when a sophisticated advanced persistent threat (APT) is detected in the cloud.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Preparation, Detection and Analysis, Containment, Eradication, Recovery, and Post-Incident Lessons Learned is under consideration.",
    options: [
      { id: 'A', text: "Rely on ad-hoc, unpracticed emergency responses during active production crises." },
      { id: 'B', text: "Skip post-incident reviews to avoid discussing operational shortcomings." },
      { id: 'C', text: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned." },
      { id: 'D', text: "Immediately wipe all servers upon initial alert without conducting detection, analysis, or evidence preservation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned. NIST SP 800-61 defines the four-phase incident response cycle: 1) Preparation (tools, playbooks, training), 2) Detection & Analysis (alert triage, determining scope), 3) Containment, Eradication & Recovery (isolating workloads, removing malware, restoring systems), and 4) Post-Incident Activity (lessons learned).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
    tags: ["Incident Response", "Incident Response", "Application Secops"]
  },
  {
    id: "isc2-ccsp-435",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Incident Response Lifecycle (NIST SP 800-61): Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Incident Response to execute a structured incident response process when a sophisticated advanced persistent threat (APT) is detected in the cloud.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Preparation, Detection and Analysis, Containment, Eradication, Recovery, and Post-Incident Lessons Learned is under consideration.",
    options: [
      { id: 'A', text: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned." },
      { id: 'B', text: "Rely on ad-hoc, unpracticed emergency responses during active production crises." },
      { id: 'C', text: "Immediately wipe all servers upon initial alert without conducting detection, analysis, or evidence preservation." },
      { id: 'D', text: "Skip post-incident reviews to avoid discussing operational shortcomings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute the NIST SP 800-61 incident response lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned. NIST SP 800-61 defines the four-phase incident response cycle: 1) Preparation (tools, playbooks, training), 2) Detection & Analysis (alert triage, determining scope), 3) Containment, Eradication & Recovery (isolating workloads, removing malware, restoring systems), and 4) Post-Incident Activity (lessons learned).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",
    tags: ["Incident Response", "Incident Response", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-436",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Continuous Vulnerability Management and Penetration Testing: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Vulnerability Management to conduct regular penetration testing against cloud-hosted applications without violating cloud service provider acceptable use policies.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Automated CVE scanning, credentialed assessments, and Cloud Service Provider Rules of Engagement is under consideration.",
    options: [
      { id: 'A', text: "Avoid vulnerability scanning to prevent discovering compliance deficiencies." },
      { id: 'B', text: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps." },
      { id: 'C', text: "Conduct penetration tests against other tenants' virtual machines without authorization." },
      { id: 'D', text: "Execute massive DDoS attacks against the cloud provider's shared control plane and underlying physical hypervisors." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps. Vulnerability management involves continuous automated scanning and periodic penetration testing. While major CSPs allow customer-managed penetration testing against their own IaaS/PaaS instances without prior approval, testing must strictly adhere to Rules of Engagement (prohibiting DDoS, phishing, or testing shared CSP infrastructure).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Vulnerability Management", "Vulnerability Management", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-437",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Continuous Vulnerability Management and Penetration Testing: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Vulnerability Management to conduct regular penetration testing against cloud-hosted applications without violating cloud service provider acceptable use policies.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Automated CVE scanning, credentialed assessments, and Cloud Service Provider Rules of Engagement is under consideration.",
    options: [
      { id: 'A', text: "Avoid vulnerability scanning to prevent discovering compliance deficiencies." },
      { id: 'B', text: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps." },
      { id: 'C', text: "Execute massive DDoS attacks against the cloud provider's shared control plane and underlying physical hypervisors." },
      { id: 'D', text: "Conduct penetration tests against other tenants' virtual machines without authorization." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps. Vulnerability management involves continuous automated scanning and periodic penetration testing. While major CSPs allow customer-managed penetration testing against their own IaaS/PaaS instances without prior approval, testing must strictly adhere to Rules of Engagement (prohibiting DDoS, phishing, or testing shared CSP infrastructure).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Vulnerability Management", "Vulnerability Management", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-438",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Continuous Vulnerability Management and Penetration Testing: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Vulnerability Management to conduct regular penetration testing against cloud-hosted applications without violating cloud service provider acceptable use policies.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Automated CVE scanning, credentialed assessments, and Cloud Service Provider Rules of Engagement is under consideration.",
    options: [
      { id: 'A', text: "Execute massive DDoS attacks against the cloud provider's shared control plane and underlying physical hypervisors." },
      { id: 'B', text: "Conduct penetration tests against other tenants' virtual machines without authorization." },
      { id: 'C', text: "Avoid vulnerability scanning to prevent discovering compliance deficiencies." },
      { id: 'D', text: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps. Vulnerability management involves continuous automated scanning and periodic penetration testing. While major CSPs allow customer-managed penetration testing against their own IaaS/PaaS instances without prior approval, testing must strictly adhere to Rules of Engagement (prohibiting DDoS, phishing, or testing shared CSP infrastructure).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Vulnerability Management", "Vulnerability Management", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-439",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Continuous Vulnerability Management and Penetration Testing: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Vulnerability Management to conduct regular penetration testing against cloud-hosted applications without violating cloud service provider acceptable use policies.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Automated CVE scanning, credentialed assessments, and Cloud Service Provider Rules of Engagement is under consideration.",
    options: [
      { id: 'A', text: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps." },
      { id: 'B', text: "Execute massive DDoS attacks against the cloud provider's shared control plane and underlying physical hypervisors." },
      { id: 'C', text: "Conduct penetration tests against other tenants' virtual machines without authorization." },
      { id: 'D', text: "Avoid vulnerability scanning to prevent discovering compliance deficiencies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps. Vulnerability management involves continuous automated scanning and periodic penetration testing. While major CSPs allow customer-managed penetration testing against their own IaaS/PaaS instances without prior approval, testing must strictly adhere to Rules of Engagement (prohibiting DDoS, phishing, or testing shared CSP infrastructure).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Vulnerability Management", "Vulnerability Management", "Application Secops"]
  },
  {
    id: "isc2-ccsp-440",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Continuous Vulnerability Management and Penetration Testing: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Vulnerability Management to conduct regular penetration testing against cloud-hosted applications without violating cloud service provider acceptable use policies.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Automated CVE scanning, credentialed assessments, and Cloud Service Provider Rules of Engagement is under consideration.",
    options: [
      { id: 'A', text: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps." },
      { id: 'B', text: "Conduct penetration tests against other tenants' virtual machines without authorization." },
      { id: 'C', text: "Avoid vulnerability scanning to prevent discovering compliance deficiencies." },
      { id: 'D', text: "Execute massive DDoS attacks against the cloud provider's shared control plane and underlying physical hypervisors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Review and adhere to the cloud provider's Penetration Testing Rules of Engagement, focusing on customer-owned infrastructure and apps. Vulnerability management involves continuous automated scanning and periodic penetration testing. While major CSPs allow customer-managed penetration testing against their own IaaS/PaaS instances without prior approval, testing must strictly adhere to Rules of Engagement (prohibiting DDoS, phishing, or testing shared CSP infrastructure).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Vulnerability Management", "Vulnerability Management", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-441",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Configuration Management and Drift Detection: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Configuration Management to detect and automatically revert unauthorized manual modifications made to cloud network security groups and firewall rules.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Automated baseline monitoring, drift detection, and automated reconciliation via IaC is under consideration.",
    options: [
      { id: 'A', text: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift." },
      { id: 'B', text: "Perform manual configuration audits once a year using paper checklists." },
      { id: 'C', text: "Disable configuration tracking to prevent generating non-compliance notifications." },
      { id: 'D', text: "Allow engineers to make untracked manual edits directly in cloud web consoles during off-peak hours." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift. Configuration drift occurs when manual changes, hotfixes, or unauthorized modifications alter live cloud infrastructure away from the declared baseline. Continuous compliance tools (AWS Config, Azure Policy) monitor resources in real time, alerting on drift and triggering automated remediation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-128/final",
    tags: ["Configuration Management", "Configuration Management", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-442",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Configuration Management and Drift Detection: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Configuration Management to detect and automatically revert unauthorized manual modifications made to cloud network security groups and firewall rules.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Automated baseline monitoring, drift detection, and automated reconciliation via IaC is under consideration.",
    options: [
      { id: 'A', text: "Perform manual configuration audits once a year using paper checklists." },
      { id: 'B', text: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift." },
      { id: 'C', text: "Allow engineers to make untracked manual edits directly in cloud web consoles during off-peak hours." },
      { id: 'D', text: "Disable configuration tracking to prevent generating non-compliance notifications." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift. Configuration drift occurs when manual changes, hotfixes, or unauthorized modifications alter live cloud infrastructure away from the declared baseline. Continuous compliance tools (AWS Config, Azure Policy) monitor resources in real time, alerting on drift and triggering automated remediation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-128/final",
    tags: ["Configuration Management", "Configuration Management", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-443",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Configuration Management and Drift Detection: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Configuration Management to detect and automatically revert unauthorized manual modifications made to cloud network security groups and firewall rules.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Automated baseline monitoring, drift detection, and automated reconciliation via IaC is under consideration.",
    options: [
      { id: 'A', text: "Disable configuration tracking to prevent generating non-compliance notifications." },
      { id: 'B', text: "Allow engineers to make untracked manual edits directly in cloud web consoles during off-peak hours." },
      { id: 'C', text: "Perform manual configuration audits once a year using paper checklists." },
      { id: 'D', text: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift. Configuration drift occurs when manual changes, hotfixes, or unauthorized modifications alter live cloud infrastructure away from the declared baseline. Continuous compliance tools (AWS Config, Azure Policy) monitor resources in real time, alerting on drift and triggering automated remediation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-128/final",
    tags: ["Configuration Management", "Configuration Management", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-444",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Configuration Management and Drift Detection: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Configuration Management to detect and automatically revert unauthorized manual modifications made to cloud network security groups and firewall rules.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Automated baseline monitoring, drift detection, and automated reconciliation via IaC is under consideration.",
    options: [
      { id: 'A', text: "Allow engineers to make untracked manual edits directly in cloud web consoles during off-peak hours." },
      { id: 'B', text: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift." },
      { id: 'C', text: "Perform manual configuration audits once a year using paper checklists." },
      { id: 'D', text: "Disable configuration tracking to prevent generating non-compliance notifications." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift. Configuration drift occurs when manual changes, hotfixes, or unauthorized modifications alter live cloud infrastructure away from the declared baseline. Continuous compliance tools (AWS Config, Azure Policy) monitor resources in real time, alerting on drift and triggering automated remediation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-128/final",
    tags: ["Configuration Management", "Configuration Management", "Application Secops"]
  },
  {
    id: "isc2-ccsp-445",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Configuration Management and Drift Detection: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Configuration Management to detect and automatically revert unauthorized manual modifications made to cloud network security groups and firewall rules.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Automated baseline monitoring, drift detection, and automated reconciliation via IaC is under consideration.",
    options: [
      { id: 'A', text: "Allow engineers to make untracked manual edits directly in cloud web consoles during off-peak hours." },
      { id: 'B', text: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift." },
      { id: 'C', text: "Perform manual configuration audits once a year using paper checklists." },
      { id: 'D', text: "Disable configuration tracking to prevent generating non-compliance notifications." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy automated configuration compliance tools that continuously compare running infrastructure against declared IaC baselines and remediate drift. Configuration drift occurs when manual changes, hotfixes, or unauthorized modifications alter live cloud infrastructure away from the declared baseline. Continuous compliance tools (AWS Config, Azure Policy) monitor resources in real time, alerting on drift and triggering automated remediation.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-128/final",
    tags: ["Configuration Management", "Configuration Management", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-446",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Patch Management: In-Place vs Immutable Replacement: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Patch Management to patch a critical Linux kernel vulnerability across an autoscaling fleet of 500 production web servers with zero application downtime.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Comparing traditional in-place OS patching with modern immutable image replacement in autoscaling groups is under consideration.",
    options: [
      { id: 'A', text: "Reboot all 500 servers simultaneously without a rolling deployment strategy, causing total service downtime." },
      { id: 'B', text: "Log into all 500 servers sequentially over SSH and execute `apt-get upgrade` interactively." },
      { id: 'C', text: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh." },
      { id: 'D', text: "Postpone kernel patching indefinitely because recompiling images takes operational effort." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh. Traditional in-place patching introduces configuration drift and requires complex SSH orchestration. Modern cloud architectures use immutable replacement: automated pipelines build a new patched base image, and autoscaling groups perform a rolling replacement (surge new, drain old), guaranteeing consistency with zero downtime.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Patch Management", "Patch Management", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-447",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Patch Management: In-Place vs Immutable Replacement: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Patch Management to patch a critical Linux kernel vulnerability across an autoscaling fleet of 500 production web servers with zero application downtime.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Comparing traditional in-place OS patching with modern immutable image replacement in autoscaling groups is under consideration.",
    options: [
      { id: 'A', text: "Reboot all 500 servers simultaneously without a rolling deployment strategy, causing total service downtime." },
      { id: 'B', text: "Postpone kernel patching indefinitely because recompiling images takes operational effort." },
      { id: 'C', text: "Log into all 500 servers sequentially over SSH and execute `apt-get upgrade` interactively." },
      { id: 'D', text: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh. Traditional in-place patching introduces configuration drift and requires complex SSH orchestration. Modern cloud architectures use immutable replacement: automated pipelines build a new patched base image, and autoscaling groups perform a rolling replacement (surge new, drain old), guaranteeing consistency with zero downtime.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Patch Management", "Patch Management", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-448",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Patch Management: In-Place vs Immutable Replacement: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Patch Management to patch a critical Linux kernel vulnerability across an autoscaling fleet of 500 production web servers with zero application downtime.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Comparing traditional in-place OS patching with modern immutable image replacement in autoscaling groups is under consideration.",
    options: [
      { id: 'A', text: "Reboot all 500 servers simultaneously without a rolling deployment strategy, causing total service downtime." },
      { id: 'B', text: "Postpone kernel patching indefinitely because recompiling images takes operational effort." },
      { id: 'C', text: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh." },
      { id: 'D', text: "Log into all 500 servers sequentially over SSH and execute `apt-get upgrade` interactively." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh. Traditional in-place patching introduces configuration drift and requires complex SSH orchestration. Modern cloud architectures use immutable replacement: automated pipelines build a new patched base image, and autoscaling groups perform a rolling replacement (surge new, drain old), guaranteeing consistency with zero downtime.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Patch Management", "Patch Management", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-449",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Patch Management: In-Place vs Immutable Replacement: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Patch Management to patch a critical Linux kernel vulnerability across an autoscaling fleet of 500 production web servers with zero application downtime.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Comparing traditional in-place OS patching with modern immutable image replacement in autoscaling groups is under consideration.",
    options: [
      { id: 'A', text: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh." },
      { id: 'B', text: "Postpone kernel patching indefinitely because recompiling images takes operational effort." },
      { id: 'C', text: "Log into all 500 servers sequentially over SSH and execute `apt-get upgrade` interactively." },
      { id: 'D', text: "Reboot all 500 servers simultaneously without a rolling deployment strategy, causing total service downtime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh. Traditional in-place patching introduces configuration drift and requires complex SSH orchestration. Modern cloud architectures use immutable replacement: automated pipelines build a new patched base image, and autoscaling groups perform a rolling replacement (surge new, drain old), guaranteeing consistency with zero downtime.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Patch Management", "Patch Management", "Application Secops"]
  },
  {
    id: "isc2-ccsp-450",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Patch Management: In-Place vs Immutable Replacement: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Patch Management to patch a critical Linux kernel vulnerability across an autoscaling fleet of 500 production web servers with zero application downtime.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Comparing traditional in-place OS patching with modern immutable image replacement in autoscaling groups is under consideration.",
    options: [
      { id: 'A', text: "Reboot all 500 servers simultaneously without a rolling deployment strategy, causing total service downtime." },
      { id: 'B', text: "Log into all 500 servers sequentially over SSH and execute `apt-get upgrade` interactively." },
      { id: 'C', text: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh." },
      { id: 'D', text: "Postpone kernel patching indefinitely because recompiling images takes operational effort." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Bake a new hardened Golden AMI/image with the patched kernel, update the Launch Template, and trigger an automated rolling instance refresh. Traditional in-place patching introduces configuration drift and requires complex SSH orchestration. Modern cloud architectures use immutable replacement: automated pipelines build a new patched base image, and autoscaling groups perform a rolling replacement (surge new, drain old), guaranteeing consistency with zero downtime.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Patch Management", "Patch Management", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_18;
