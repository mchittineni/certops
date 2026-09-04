export const ISC2_CCSP_QUESTIONS_14 = [
  {
    id: "isc2-ccsp-326",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Sanitization and Crypto-Shredding: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Crypto-Shredding to permanently sanitize multi-tenant cloud storage records at contract termination when physical access to the provider's hard drives is prohibited.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Sanitizing cloud data by destroying cryptographic keys when physical drive degaussing is impossible is under consideration.",
    options: [
      { id: 'A', text: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets." },
      { id: 'B', text: "Demand that the cloud provider physically melt and shred shared multi-tenant storage arrays hosting other customer data." },
      { id: 'C', text: "Delete the filenames in the operating system file explorer and assume data is securely wiped." },
      { id: 'D', text: "Over-write cloud storage blocks with zeros once using consumer operating system format utilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets. In multi-tenant cloud environments, physical sanitization (degaussing, crushing) is impossible without destroying shared media. Crypto-shredding sanitizes data by destroying the cryptographic keys that protect it, rendering the encrypted ciphertext irrecoverable mathematical noise.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final",
    tags: ["Crypto-Shredding", "Crypto-Shredding", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-327",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Sanitization and Crypto-Shredding: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Crypto-Shredding to permanently sanitize multi-tenant cloud storage records at contract termination when physical access to the provider's hard drives is prohibited.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Sanitizing cloud data by destroying cryptographic keys when physical drive degaussing is impossible is under consideration.",
    options: [
      { id: 'A', text: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets." },
      { id: 'B', text: "Demand that the cloud provider physically melt and shred shared multi-tenant storage arrays hosting other customer data." },
      { id: 'C', text: "Delete the filenames in the operating system file explorer and assume data is securely wiped." },
      { id: 'D', text: "Over-write cloud storage blocks with zeros once using consumer operating system format utilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets. In multi-tenant cloud environments, physical sanitization (degaussing, crushing) is impossible without destroying shared media. Crypto-shredding sanitizes data by destroying the cryptographic keys that protect it, rendering the encrypted ciphertext irrecoverable mathematical noise.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final",
    tags: ["Crypto-Shredding", "Crypto-Shredding", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-328",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Sanitization and Crypto-Shredding: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Crypto-Shredding to permanently sanitize multi-tenant cloud storage records at contract termination when physical access to the provider's hard drives is prohibited.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Sanitizing cloud data by destroying cryptographic keys when physical drive degaussing is impossible is under consideration.",
    options: [
      { id: 'A', text: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets." },
      { id: 'B', text: "Demand that the cloud provider physically melt and shred shared multi-tenant storage arrays hosting other customer data." },
      { id: 'C', text: "Delete the filenames in the operating system file explorer and assume data is securely wiped." },
      { id: 'D', text: "Over-write cloud storage blocks with zeros once using consumer operating system format utilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets. In multi-tenant cloud environments, physical sanitization (degaussing, crushing) is impossible without destroying shared media. Crypto-shredding sanitizes data by destroying the cryptographic keys that protect it, rendering the encrypted ciphertext irrecoverable mathematical noise.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final",
    tags: ["Crypto-Shredding", "Crypto-Shredding", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-329",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Sanitization and Crypto-Shredding: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Crypto-Shredding to permanently sanitize multi-tenant cloud storage records at contract termination when physical access to the provider's hard drives is prohibited.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Sanitizing cloud data by destroying cryptographic keys when physical drive degaussing is impossible is under consideration.",
    options: [
      { id: 'A', text: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets." },
      { id: 'B', text: "Demand that the cloud provider physically melt and shred shared multi-tenant storage arrays hosting other customer data." },
      { id: 'C', text: "Delete the filenames in the operating system file explorer and assume data is securely wiped." },
      { id: 'D', text: "Over-write cloud storage blocks with zeros once using consumer operating system format utilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets. In multi-tenant cloud environments, physical sanitization (degaussing, crushing) is impossible without destroying shared media. Crypto-shredding sanitizes data by destroying the cryptographic keys that protect it, rendering the encrypted ciphertext irrecoverable mathematical noise.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final",
    tags: ["Crypto-Shredding", "Crypto-Shredding", "Application Secops"]
  },
  {
    id: "isc2-ccsp-330",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Data Sanitization and Crypto-Shredding: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Crypto-Shredding to permanently sanitize multi-tenant cloud storage records at contract termination when physical access to the provider's hard drives is prohibited.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Sanitizing cloud data by destroying cryptographic keys when physical drive degaussing is impossible is under consideration.",
    options: [
      { id: 'A', text: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets." },
      { id: 'B', text: "Demand that the cloud provider physically melt and shred shared multi-tenant storage arrays hosting other customer data." },
      { id: 'C', text: "Delete the filenames in the operating system file explorer and assume data is securely wiped." },
      { id: 'D', text: "Over-write cloud storage blocks with zeros once using consumer operating system format utilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Execute crypto-shredding: securely delete and zeroize all cryptographic keys used to encrypt the target datasets. In multi-tenant cloud environments, physical sanitization (degaussing, crushing) is impossible without destroying shared media. Crypto-shredding sanitizes data by destroying the cryptographic keys that protect it, rendering the encrypted ciphertext irrecoverable mathematical noise.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final",
    tags: ["Crypto-Shredding", "Crypto-Shredding", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-331",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Obfuscation: Tokenization, Anonymization, and Masking: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Data Obfuscation to remove credit card Primary Account Numbers (PAN) from a web application's database to minimize PCI-DSS compliance scope.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Replacing sensitive PAN data with non-sensitive surrogate tokens via a secure token vault is under consideration.",
    options: [
      { id: 'A', text: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault." },
      { id: 'B', text: "Encrypt the database column with a static key stored in the same database table." },
      { id: 'C', text: "Display full credit card numbers in plaintext to all call center employees." },
      { id: 'D', text: "Truncate the middle digits of the card number in memory without using a token vault." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault. Tokenization replaces sensitive data (like credit card numbers) with a non-sensitive surrogate value (token) with no mathematical relationship to the original. Because the token cannot be reverse-engineered without the token vault, downstream systems storing tokens fall outside PCI-DSS audit scope.",
    referenceUrl: "https://www.pcisecuritystandards.org/documents/Tokenization_Guidelines_Info_Supp.pdf",
    tags: ["Data Obfuscation", "Tokenization", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-332",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Obfuscation: Tokenization, Anonymization, and Masking: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Data Obfuscation to remove credit card Primary Account Numbers (PAN) from a web application's database to minimize PCI-DSS compliance scope.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Replacing sensitive PAN data with non-sensitive surrogate tokens via a secure token vault is under consideration.",
    options: [
      { id: 'A', text: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault." },
      { id: 'B', text: "Encrypt the database column with a static key stored in the same database table." },
      { id: 'C', text: "Display full credit card numbers in plaintext to all call center employees." },
      { id: 'D', text: "Truncate the middle digits of the card number in memory without using a token vault." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault. Tokenization replaces sensitive data (like credit card numbers) with a non-sensitive surrogate value (token) with no mathematical relationship to the original. Because the token cannot be reverse-engineered without the token vault, downstream systems storing tokens fall outside PCI-DSS audit scope.",
    referenceUrl: "https://www.pcisecuritystandards.org/documents/Tokenization_Guidelines_Info_Supp.pdf",
    tags: ["Data Obfuscation", "Tokenization", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-333",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Obfuscation: Tokenization, Anonymization, and Masking: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Data Obfuscation to remove credit card Primary Account Numbers (PAN) from a web application's database to minimize PCI-DSS compliance scope.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Replacing sensitive PAN data with non-sensitive surrogate tokens via a secure token vault is under consideration.",
    options: [
      { id: 'A', text: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault." },
      { id: 'B', text: "Encrypt the database column with a static key stored in the same database table." },
      { id: 'C', text: "Display full credit card numbers in plaintext to all call center employees." },
      { id: 'D', text: "Truncate the middle digits of the card number in memory without using a token vault." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault. Tokenization replaces sensitive data (like credit card numbers) with a non-sensitive surrogate value (token) with no mathematical relationship to the original. Because the token cannot be reverse-engineered without the token vault, downstream systems storing tokens fall outside PCI-DSS audit scope.",
    referenceUrl: "https://www.pcisecuritystandards.org/documents/Tokenization_Guidelines_Info_Supp.pdf",
    tags: ["Data Obfuscation", "Tokenization", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-334",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Obfuscation: Tokenization, Anonymization, and Masking: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Data Obfuscation to remove credit card Primary Account Numbers (PAN) from a web application's database to minimize PCI-DSS compliance scope.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Replacing sensitive PAN data with non-sensitive surrogate tokens via a secure token vault is under consideration.",
    options: [
      { id: 'A', text: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault." },
      { id: 'B', text: "Encrypt the database column with a static key stored in the same database table." },
      { id: 'C', text: "Display full credit card numbers in plaintext to all call center employees." },
      { id: 'D', text: "Truncate the middle digits of the card number in memory without using a token vault." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault. Tokenization replaces sensitive data (like credit card numbers) with a non-sensitive surrogate value (token) with no mathematical relationship to the original. Because the token cannot be reverse-engineered without the token vault, downstream systems storing tokens fall outside PCI-DSS audit scope.",
    referenceUrl: "https://www.pcisecuritystandards.org/documents/Tokenization_Guidelines_Info_Supp.pdf",
    tags: ["Data Obfuscation", "Tokenization", "Application Secops"]
  },
  {
    id: "isc2-ccsp-335",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Obfuscation: Tokenization, Anonymization, and Masking: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Data Obfuscation to remove credit card Primary Account Numbers (PAN) from a web application's database to minimize PCI-DSS compliance scope.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Replacing sensitive PAN data with non-sensitive surrogate tokens via a secure token vault is under consideration.",
    options: [
      { id: 'A', text: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault." },
      { id: 'B', text: "Encrypt the database column with a static key stored in the same database table." },
      { id: 'C', text: "Display full credit card numbers in plaintext to all call center employees." },
      { id: 'D', text: "Truncate the middle digits of the card number in memory without using a token vault." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Tokenization: replace credit card numbers with random surrogate tokens and store the mapping in an isolated, hardened token vault. Tokenization replaces sensitive data (like credit card numbers) with a non-sensitive surrogate value (token) with no mathematical relationship to the original. Because the token cannot be reverse-engineered without the token vault, downstream systems storing tokens fall outside PCI-DSS audit scope.",
    referenceUrl: "https://www.pcisecuritystandards.org/documents/Tokenization_Guidelines_Info_Supp.pdf",
    tags: ["Data Obfuscation", "Tokenization", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-336",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Access Security Broker (CASB) Architecture: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates CASB Architecture to gain visibility into Shadow IT, enforce DLP on corporate OneDrive/Salesforce, and inspect unmanaged employee personal devices.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Forward proxy, reverse proxy, and API-based out-of-band monitoring for SaaS security is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices." },
      { id: 'B', text: "Block all corporate internet access to eliminate SaaS applications completely." },
      { id: 'C', text: "Install root certificates manually on personal home devices of all employees." },
      { id: 'D', text: "Rely on firewall port blocking which cannot inspect encrypted HTTPS SaaS traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices. A Cloud Access Security Broker (CASB) enforces security policies between cloud consumers and cloud providers. It uses three deployment models: API-based (out-of-band, deep scanning of data at rest), Reverse Proxy (inline inspection for unmanaged devices without agent installation), and Forward Proxy (inline for managed corporate endpoints).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["CASB Architecture", "CASB Architecture", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-337",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Access Security Broker (CASB) Architecture: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates CASB Architecture to gain visibility into Shadow IT, enforce DLP on corporate OneDrive/Salesforce, and inspect unmanaged employee personal devices.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Forward proxy, reverse proxy, and API-based out-of-band monitoring for SaaS security is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices." },
      { id: 'B', text: "Block all corporate internet access to eliminate SaaS applications completely." },
      { id: 'C', text: "Install root certificates manually on personal home devices of all employees." },
      { id: 'D', text: "Rely on firewall port blocking which cannot inspect encrypted HTTPS SaaS traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices. A Cloud Access Security Broker (CASB) enforces security policies between cloud consumers and cloud providers. It uses three deployment models: API-based (out-of-band, deep scanning of data at rest), Reverse Proxy (inline inspection for unmanaged devices without agent installation), and Forward Proxy (inline for managed corporate endpoints).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["CASB Architecture", "CASB Architecture", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-338",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Access Security Broker (CASB) Architecture: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates CASB Architecture to gain visibility into Shadow IT, enforce DLP on corporate OneDrive/Salesforce, and inspect unmanaged employee personal devices.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Forward proxy, reverse proxy, and API-based out-of-band monitoring for SaaS security is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices." },
      { id: 'B', text: "Block all corporate internet access to eliminate SaaS applications completely." },
      { id: 'C', text: "Install root certificates manually on personal home devices of all employees." },
      { id: 'D', text: "Rely on firewall port blocking which cannot inspect encrypted HTTPS SaaS traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices. A Cloud Access Security Broker (CASB) enforces security policies between cloud consumers and cloud providers. It uses three deployment models: API-based (out-of-band, deep scanning of data at rest), Reverse Proxy (inline inspection for unmanaged devices without agent installation), and Forward Proxy (inline for managed corporate endpoints).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["CASB Architecture", "CASB Architecture", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-339",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Access Security Broker (CASB) Architecture: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates CASB Architecture to gain visibility into Shadow IT, enforce DLP on corporate OneDrive/Salesforce, and inspect unmanaged employee personal devices.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Forward proxy, reverse proxy, and API-based out-of-band monitoring for SaaS security is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices." },
      { id: 'B', text: "Block all corporate internet access to eliminate SaaS applications completely." },
      { id: 'C', text: "Install root certificates manually on personal home devices of all employees." },
      { id: 'D', text: "Rely on firewall port blocking which cannot inspect encrypted HTTPS SaaS traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices. A Cloud Access Security Broker (CASB) enforces security policies between cloud consumers and cloud providers. It uses three deployment models: API-based (out-of-band, deep scanning of data at rest), Reverse Proxy (inline inspection for unmanaged devices without agent installation), and Forward Proxy (inline for managed corporate endpoints).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["CASB Architecture", "CASB Architecture", "Application Secops"]
  },
  {
    id: "isc2-ccsp-340",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Access Security Broker (CASB) Architecture: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates CASB Architecture to gain visibility into Shadow IT, enforce DLP on corporate OneDrive/Salesforce, and inspect unmanaged employee personal devices.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Forward proxy, reverse proxy, and API-based out-of-band monitoring for SaaS security is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices." },
      { id: 'B', text: "Block all corporate internet access to eliminate SaaS applications completely." },
      { id: 'C', text: "Install root certificates manually on personal home devices of all employees." },
      { id: 'D', text: "Rely on firewall port blocking which cannot inspect encrypted HTTPS SaaS traffic." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Access Security Broker (CASB) combining API-based out-of-band inspection with reverse proxy for unmanaged devices. A Cloud Access Security Broker (CASB) enforces security policies between cloud consumers and cloud providers. It uses three deployment models: API-based (out-of-band, deep scanning of data at rest), Reverse Proxy (inline inspection for unmanaged devices without agent installation), and Forward Proxy (inline for managed corporate endpoints).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["CASB Architecture", "CASB Architecture", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-341",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Physical and Environmental Data Center Security: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Physical Security to verify that a prospective cloud provider protects physical server infrastructure against unauthorized physical entry and environmental hazards.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Multi-layered physical zoning, biometric controls, video surveillance, and environmental redundancy is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression." },
      { id: 'B', text: "Assume physical security is irrelevant in cloud computing because workloads run virtually." },
      { id: 'C', text: "Allow unescorted public visitor tours through production cloud server halls." },
      { id: 'D', text: "Rely solely on digital software firewalls to prevent physical server theft." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression. Physical security in cloud computing relies on layered defense (defense-in-depth): outer perimeter barriers, biometric multi-factor mantraps, security escort policies, continuous video retention, and environmental safeguards (N+1 redundant generators, precision cooling, clean-agent fire suppression).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    tags: ["Physical Security", "Physical Security", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-342",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Physical and Environmental Data Center Security: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Physical Security to verify that a prospective cloud provider protects physical server infrastructure against unauthorized physical entry and environmental hazards.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Multi-layered physical zoning, biometric controls, video surveillance, and environmental redundancy is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression." },
      { id: 'B', text: "Assume physical security is irrelevant in cloud computing because workloads run virtually." },
      { id: 'C', text: "Allow unescorted public visitor tours through production cloud server halls." },
      { id: 'D', text: "Rely solely on digital software firewalls to prevent physical server theft." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression. Physical security in cloud computing relies on layered defense (defense-in-depth): outer perimeter barriers, biometric multi-factor mantraps, security escort policies, continuous video retention, and environmental safeguards (N+1 redundant generators, precision cooling, clean-agent fire suppression).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    tags: ["Physical Security", "Physical Security", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-343",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Physical and Environmental Data Center Security: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Physical Security to verify that a prospective cloud provider protects physical server infrastructure against unauthorized physical entry and environmental hazards.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Multi-layered physical zoning, biometric controls, video surveillance, and environmental redundancy is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression." },
      { id: 'B', text: "Assume physical security is irrelevant in cloud computing because workloads run virtually." },
      { id: 'C', text: "Allow unescorted public visitor tours through production cloud server halls." },
      { id: 'D', text: "Rely solely on digital software firewalls to prevent physical server theft." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression. Physical security in cloud computing relies on layered defense (defense-in-depth): outer perimeter barriers, biometric multi-factor mantraps, security escort policies, continuous video retention, and environmental safeguards (N+1 redundant generators, precision cooling, clean-agent fire suppression).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    tags: ["Physical Security", "Physical Security", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-344",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Physical and Environmental Data Center Security: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Physical Security to verify that a prospective cloud provider protects physical server infrastructure against unauthorized physical entry and environmental hazards.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Multi-layered physical zoning, biometric controls, video surveillance, and environmental redundancy is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression." },
      { id: 'B', text: "Assume physical security is irrelevant in cloud computing because workloads run virtually." },
      { id: 'C', text: "Allow unescorted public visitor tours through production cloud server halls." },
      { id: 'D', text: "Rely solely on digital software firewalls to prevent physical server theft." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression. Physical security in cloud computing relies on layered defense (defense-in-depth): outer perimeter barriers, biometric multi-factor mantraps, security escort policies, continuous video retention, and environmental safeguards (N+1 redundant generators, precision cooling, clean-agent fire suppression).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    tags: ["Physical Security", "Physical Security", "Application Secops"]
  },
  {
    id: "isc2-ccsp-345",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Physical and Environmental Data Center Security: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Physical Security to verify that a prospective cloud provider protects physical server infrastructure against unauthorized physical entry and environmental hazards.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Multi-layered physical zoning, biometric controls, video surveillance, and environmental redundancy is under consideration.",
    options: [
      { id: 'A', text: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression." },
      { id: 'B', text: "Assume physical security is irrelevant in cloud computing because workloads run virtually." },
      { id: 'C', text: "Allow unescorted public visitor tours through production cloud server halls." },
      { id: 'D', text: "Rely solely on digital software firewalls to prevent physical server theft." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Verify the provider's physical security layers: perimeter fencing, biometric mantraps, 24/7 video surveillance, dual power feeds, and HVAC fire suppression. Physical security in cloud computing relies on layered defense (defense-in-depth): outer perimeter barriers, biometric multi-factor mantraps, security escort policies, continuous video retention, and environmental safeguards (N+1 redundant generators, precision cooling, clean-agent fire suppression).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",
    tags: ["Physical Security", "Physical Security", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-346",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Software-Defined Networking (SDN) and Micro-Segmentation: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates SDN Micro-Segmentation to prevent an attacker who compromises a front-end web server from pivoting laterally to the back-end database across internal networks.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Isolating east-west network traffic between workloads using software-defined virtual firewalls is under consideration.",
    options: [
      { id: 'A', text: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers." },
      { id: 'B', text: "Place all application servers, databases, and admin consoles in a single flat, unrouted VLAN." },
      { id: 'C', text: "Rely on physical hardware firewalls that cannot inspect virtual machine-to-virtual machine east-west traffic on the same host." },
      { id: 'D', text: "Disable internal network filtering to optimize network packet processing speeds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers. Software-Defined Networking (SDN) abstracts the physical network, enabling micro-segmentation. By attaching distributed virtual firewall rules directly to virtual machine NICs or container pods, security teams isolate east-west traffic, preventing lateral attacker movement even within the same subnet.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["SDN Micro-Segmentation", "SDN Micro-Segmentation", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-347",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Software-Defined Networking (SDN) and Micro-Segmentation: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates SDN Micro-Segmentation to prevent an attacker who compromises a front-end web server from pivoting laterally to the back-end database across internal networks.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Isolating east-west network traffic between workloads using software-defined virtual firewalls is under consideration.",
    options: [
      { id: 'A', text: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers." },
      { id: 'B', text: "Place all application servers, databases, and admin consoles in a single flat, unrouted VLAN." },
      { id: 'C', text: "Rely on physical hardware firewalls that cannot inspect virtual machine-to-virtual machine east-west traffic on the same host." },
      { id: 'D', text: "Disable internal network filtering to optimize network packet processing speeds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers. Software-Defined Networking (SDN) abstracts the physical network, enabling micro-segmentation. By attaching distributed virtual firewall rules directly to virtual machine NICs or container pods, security teams isolate east-west traffic, preventing lateral attacker movement even within the same subnet.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["SDN Micro-Segmentation", "SDN Micro-Segmentation", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-348",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Software-Defined Networking (SDN) and Micro-Segmentation: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates SDN Micro-Segmentation to prevent an attacker who compromises a front-end web server from pivoting laterally to the back-end database across internal networks.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Isolating east-west network traffic between workloads using software-defined virtual firewalls is under consideration.",
    options: [
      { id: 'A', text: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers." },
      { id: 'B', text: "Place all application servers, databases, and admin consoles in a single flat, unrouted VLAN." },
      { id: 'C', text: "Rely on physical hardware firewalls that cannot inspect virtual machine-to-virtual machine east-west traffic on the same host." },
      { id: 'D', text: "Disable internal network filtering to optimize network packet processing speeds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers. Software-Defined Networking (SDN) abstracts the physical network, enabling micro-segmentation. By attaching distributed virtual firewall rules directly to virtual machine NICs or container pods, security teams isolate east-west traffic, preventing lateral attacker movement even within the same subnet.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["SDN Micro-Segmentation", "SDN Micro-Segmentation", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-349",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Software-Defined Networking (SDN) and Micro-Segmentation: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates SDN Micro-Segmentation to prevent an attacker who compromises a front-end web server from pivoting laterally to the back-end database across internal networks.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Isolating east-west network traffic between workloads using software-defined virtual firewalls is under consideration.",
    options: [
      { id: 'A', text: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers." },
      { id: 'B', text: "Place all application servers, databases, and admin consoles in a single flat, unrouted VLAN." },
      { id: 'C', text: "Rely on physical hardware firewalls that cannot inspect virtual machine-to-virtual machine east-west traffic on the same host." },
      { id: 'D', text: "Disable internal network filtering to optimize network packet processing speeds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers. Software-Defined Networking (SDN) abstracts the physical network, enabling micro-segmentation. By attaching distributed virtual firewall rules directly to virtual machine NICs or container pods, security teams isolate east-west traffic, preventing lateral attacker movement even within the same subnet.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["SDN Micro-Segmentation", "SDN Micro-Segmentation", "Application Secops"]
  },
  {
    id: "isc2-ccsp-350",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Software-Defined Networking (SDN) and Micro-Segmentation: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates SDN Micro-Segmentation to prevent an attacker who compromises a front-end web server from pivoting laterally to the back-end database across internal networks.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Isolating east-west network traffic between workloads using software-defined virtual firewalls is under consideration.",
    options: [
      { id: 'A', text: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers." },
      { id: 'B', text: "Place all application servers, databases, and admin consoles in a single flat, unrouted VLAN." },
      { id: 'C', text: "Rely on physical hardware firewalls that cannot inspect virtual machine-to-virtual machine east-west traffic on the same host." },
      { id: 'D', text: "Disable internal network filtering to optimize network packet processing speeds." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement software-defined micro-segmentation, enforcing granular virtual firewall rules that allow only authorized ports between tiers. Software-Defined Networking (SDN) abstracts the physical network, enabling micro-segmentation. By attaching distributed virtual firewall rules directly to virtual machine NICs or container pods, security teams isolate east-west traffic, preventing lateral attacker movement even within the same subnet.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["SDN Micro-Segmentation", "SDN Micro-Segmentation", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_14;
