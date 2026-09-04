export const ISC2_CCSP_QUESTIONS_13 = [
  {
    id: "isc2-ccsp-301",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Dispersion and Information Dispersal Algorithms (IDA): Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Data Dispersion to store high-value intellectual property across multiple cloud storage providers so that no single provider can reconstruct the plaintext data.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Bit-splitting, Shamir's secret sharing, and Reed-Solomon erasure coding across cloud storage is under consideration.",
    options: [
      { id: 'A', text: "Split the file manually into two unencrypted halves using a zip utility." },
      { id: 'B', text: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers." },
      { id: 'C', text: "Upload the complete unencrypted master file to three different public cloud providers simultaneously." },
      { id: 'D', text: "Store files in plaintext on an unmonitored FTP server." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers. Information Dispersal Algorithms (IDA), such as Reed-Solomon erasure coding and bit-splitting (Shamir's secret sharing), divide data into n slices where any k slices (k &lt; n) can reconstruct the original data, but fewer than k slices reveal zero information, providing multi-cloud confidentiality and fault tolerance.",
    referenceUrl: "https://en.wikipedia.org/wiki/Information_Dispersal_Algorithm",
    tags: ["Data Dispersion", "Data Dispersion", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-302",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Dispersion and Information Dispersal Algorithms (IDA): Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Data Dispersion to store high-value intellectual property across multiple cloud storage providers so that no single provider can reconstruct the plaintext data.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Bit-splitting, Shamir's secret sharing, and Reed-Solomon erasure coding across cloud storage is under consideration.",
    options: [
      { id: 'A', text: "Upload the complete unencrypted master file to three different public cloud providers simultaneously." },
      { id: 'B', text: "Store files in plaintext on an unmonitored FTP server." },
      { id: 'C', text: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers." },
      { id: 'D', text: "Split the file manually into two unencrypted halves using a zip utility." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers. Information Dispersal Algorithms (IDA), such as Reed-Solomon erasure coding and bit-splitting (Shamir's secret sharing), divide data into n slices where any k slices (k &lt; n) can reconstruct the original data, but fewer than k slices reveal zero information, providing multi-cloud confidentiality and fault tolerance.",
    referenceUrl: "https://en.wikipedia.org/wiki/Information_Dispersal_Algorithm",
    tags: ["Data Dispersion", "Data Dispersion", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-303",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Dispersion and Information Dispersal Algorithms (IDA): Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Data Dispersion to store high-value intellectual property across multiple cloud storage providers so that no single provider can reconstruct the plaintext data.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Bit-splitting, Shamir's secret sharing, and Reed-Solomon erasure coding across cloud storage is under consideration.",
    options: [
      { id: 'A', text: "Store files in plaintext on an unmonitored FTP server." },
      { id: 'B', text: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers." },
      { id: 'C', text: "Split the file manually into two unencrypted halves using a zip utility." },
      { id: 'D', text: "Upload the complete unencrypted master file to three different public cloud providers simultaneously." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers. Information Dispersal Algorithms (IDA), such as Reed-Solomon erasure coding and bit-splitting (Shamir's secret sharing), divide data into n slices where any k slices (k &lt; n) can reconstruct the original data, but fewer than k slices reveal zero information, providing multi-cloud confidentiality and fault tolerance.",
    referenceUrl: "https://en.wikipedia.org/wiki/Information_Dispersal_Algorithm",
    tags: ["Data Dispersion", "Data Dispersion", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-304",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Dispersion and Information Dispersal Algorithms (IDA): Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Data Dispersion to store high-value intellectual property across multiple cloud storage providers so that no single provider can reconstruct the plaintext data.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Bit-splitting, Shamir's secret sharing, and Reed-Solomon erasure coding across cloud storage is under consideration.",
    options: [
      { id: 'A', text: "Split the file manually into two unencrypted halves using a zip utility." },
      { id: 'B', text: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers." },
      { id: 'C', text: "Upload the complete unencrypted master file to three different public cloud providers simultaneously." },
      { id: 'D', text: "Store files in plaintext on an unmonitored FTP server." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers. Information Dispersal Algorithms (IDA), such as Reed-Solomon erasure coding and bit-splitting (Shamir's secret sharing), divide data into n slices where any k slices (k &lt; n) can reconstruct the original data, but fewer than k slices reveal zero information, providing multi-cloud confidentiality and fault tolerance.",
    referenceUrl: "https://en.wikipedia.org/wiki/Information_Dispersal_Algorithm",
    tags: ["Data Dispersion", "Data Dispersion", "Application Secops"]
  },
  {
    id: "isc2-ccsp-305",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Dispersion and Information Dispersal Algorithms (IDA): Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Data Dispersion to store high-value intellectual property across multiple cloud storage providers so that no single provider can reconstruct the plaintext data.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Bit-splitting, Shamir's secret sharing, and Reed-Solomon erasure coding across cloud storage is under consideration.",
    options: [
      { id: 'A', text: "Split the file manually into two unencrypted halves using a zip utility." },
      { id: 'B', text: "Upload the complete unencrypted master file to three different public cloud providers simultaneously." },
      { id: 'C', text: "Store files in plaintext on an unmonitored FTP server." },
      { id: 'D', text: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Information Dispersal Algorithms (IDA) with bit-splitting and erasure coding, distributing data slices across diverse providers. Information Dispersal Algorithms (IDA), such as Reed-Solomon erasure coding and bit-splitting (Shamir's secret sharing), divide data into n slices where any k slices (k &lt; n) can reconstruct the original data, but fewer than k slices reveal zero information, providing multi-cloud confidentiality and fault tolerance.",
    referenceUrl: "https://en.wikipedia.org/wiki/Information_Dispersal_Algorithm",
    tags: ["Data Dispersion", "Data Dispersion", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-306",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Loss Prevention (DLP) in Cloud Environments: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Cloud DLP to prevent employees from exfiltrating sensitive customer credit card numbers via unapproved cloud email or external file-sharing links.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Content inspection, contextual analysis, and automated egress blocking for sensitive records is under consideration.",
    options: [
      { id: 'A', text: "Block all outgoing internet traffic across the entire enterprise permanently." },
      { id: 'B', text: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking." },
      { id: 'C', text: "Allow unrestricted data exfiltration to external cloud storage providers." },
      { id: 'D', text: "Rely on employee code-of-conduct agreements without technical enforcement controls." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking. Cloud DLP systems monitor data in motion, at rest, and in use. By combining deep content inspection (credit cards, PII regex, document fingerprinting) with contextual awareness (user role, destination IP, encryption status), DLP blocks unauthorized data transfer and exfiltration in real time.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud DLP", "Cloud DLP", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-307",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Loss Prevention (DLP) in Cloud Environments: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Cloud DLP to prevent employees from exfiltrating sensitive customer credit card numbers via unapproved cloud email or external file-sharing links.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Content inspection, contextual analysis, and automated egress blocking for sensitive records is under consideration.",
    options: [
      { id: 'A', text: "Block all outgoing internet traffic across the entire enterprise permanently." },
      { id: 'B', text: "Allow unrestricted data exfiltration to external cloud storage providers." },
      { id: 'C', text: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking." },
      { id: 'D', text: "Rely on employee code-of-conduct agreements without technical enforcement controls." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking. Cloud DLP systems monitor data in motion, at rest, and in use. By combining deep content inspection (credit cards, PII regex, document fingerprinting) with contextual awareness (user role, destination IP, encryption status), DLP blocks unauthorized data transfer and exfiltration in real time.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud DLP", "Cloud DLP", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-308",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Loss Prevention (DLP) in Cloud Environments: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Cloud DLP to prevent employees from exfiltrating sensitive customer credit card numbers via unapproved cloud email or external file-sharing links.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Content inspection, contextual analysis, and automated egress blocking for sensitive records is under consideration.",
    options: [
      { id: 'A', text: "Block all outgoing internet traffic across the entire enterprise permanently." },
      { id: 'B', text: "Allow unrestricted data exfiltration to external cloud storage providers." },
      { id: 'C', text: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking." },
      { id: 'D', text: "Rely on employee code-of-conduct agreements without technical enforcement controls." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking. Cloud DLP systems monitor data in motion, at rest, and in use. By combining deep content inspection (credit cards, PII regex, document fingerprinting) with contextual awareness (user role, destination IP, encryption status), DLP blocks unauthorized data transfer and exfiltration in real time.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud DLP", "Cloud DLP", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-309",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Loss Prevention (DLP) in Cloud Environments: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Cloud DLP to prevent employees from exfiltrating sensitive customer credit card numbers via unapproved cloud email or external file-sharing links.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Content inspection, contextual analysis, and automated egress blocking for sensitive records is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking." },
      { id: 'B', text: "Block all outgoing internet traffic across the entire enterprise permanently." },
      { id: 'C', text: "Rely on employee code-of-conduct agreements without technical enforcement controls." },
      { id: 'D', text: "Allow unrestricted data exfiltration to external cloud storage providers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking. Cloud DLP systems monitor data in motion, at rest, and in use. By combining deep content inspection (credit cards, PII regex, document fingerprinting) with contextual awareness (user role, destination IP, encryption status), DLP blocks unauthorized data transfer and exfiltration in real time.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud DLP", "Cloud DLP", "Application Secops"]
  },
  {
    id: "isc2-ccsp-310",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Data Loss Prevention (DLP) in Cloud Environments: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Cloud DLP to prevent employees from exfiltrating sensitive customer credit card numbers via unapproved cloud email or external file-sharing links.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Content inspection, contextual analysis, and automated egress blocking for sensitive records is under consideration.",
    options: [
      { id: 'A', text: "Block all outgoing internet traffic across the entire enterprise permanently." },
      { id: 'B', text: "Allow unrestricted data exfiltration to external cloud storage providers." },
      { id: 'C', text: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking." },
      { id: 'D', text: "Rely on employee code-of-conduct agreements without technical enforcement controls." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Cloud Data Loss Prevention (DLP) solution enforcing content inspection, regex pattern matching, and automated egress blocking. Cloud DLP systems monitor data in motion, at rest, and in use. By combining deep content inspection (credit cards, PII regex, document fingerprinting) with contextual awareness (user role, destination IP, encryption status), DLP blocks unauthorized data transfer and exfiltration in real time.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud DLP", "Cloud DLP", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-311",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Encryption at Rest and Key Ownership Models: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Key Ownership to satisfy a strict regulatory mandate requiring that the cloud provider can never access the cryptographic keys used to encrypt health records.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Provider-managed keys vs Customer-Managed Keys (BYOK) vs Hold-Your-Own-Key (HYOK) is under consideration.",
    options: [
      { id: 'A', text: "Disable encryption at rest and rely on network firewalls alone." },
      { id: 'B', text: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption." },
      { id: 'C', text: "Store encryption keys in plaintext in an S3 bucket adjacent to the encrypted database." },
      { id: 'D', text: "Use default cloud provider-managed keys where the CSP controls both storage and cryptographic keys." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption. Key management models balance operational convenience and control: Provider-Managed Keys (CSP controls keys and storage), Bring-Your-Own-Key / Customer-Managed Keys (customer manages key policies in cloud KMS), and Hold-Your-Own-Key (keys reside in on-premises HSMs, preventing provider decryption).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Ownership", "Key Ownership", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-312",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Encryption at Rest and Key Ownership Models: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Key Ownership to satisfy a strict regulatory mandate requiring that the cloud provider can never access the cryptographic keys used to encrypt health records.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Provider-managed keys vs Customer-Managed Keys (BYOK) vs Hold-Your-Own-Key (HYOK) is under consideration.",
    options: [
      { id: 'A', text: "Disable encryption at rest and rely on network firewalls alone." },
      { id: 'B', text: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption." },
      { id: 'C', text: "Use default cloud provider-managed keys where the CSP controls both storage and cryptographic keys." },
      { id: 'D', text: "Store encryption keys in plaintext in an S3 bucket adjacent to the encrypted database." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption. Key management models balance operational convenience and control: Provider-Managed Keys (CSP controls keys and storage), Bring-Your-Own-Key / Customer-Managed Keys (customer manages key policies in cloud KMS), and Hold-Your-Own-Key (keys reside in on-premises HSMs, preventing provider decryption).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Ownership", "Key Ownership", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-313",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Encryption at Rest and Key Ownership Models: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Key Ownership to satisfy a strict regulatory mandate requiring that the cloud provider can never access the cryptographic keys used to encrypt health records.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Provider-managed keys vs Customer-Managed Keys (BYOK) vs Hold-Your-Own-Key (HYOK) is under consideration.",
    options: [
      { id: 'A', text: "Store encryption keys in plaintext in an S3 bucket adjacent to the encrypted database." },
      { id: 'B', text: "Use default cloud provider-managed keys where the CSP controls both storage and cryptographic keys." },
      { id: 'C', text: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption." },
      { id: 'D', text: "Disable encryption at rest and rely on network firewalls alone." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption. Key management models balance operational convenience and control: Provider-Managed Keys (CSP controls keys and storage), Bring-Your-Own-Key / Customer-Managed Keys (customer manages key policies in cloud KMS), and Hold-Your-Own-Key (keys reside in on-premises HSMs, preventing provider decryption).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Ownership", "Key Ownership", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-314",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Encryption at Rest and Key Ownership Models: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Key Ownership to satisfy a strict regulatory mandate requiring that the cloud provider can never access the cryptographic keys used to encrypt health records.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Provider-managed keys vs Customer-Managed Keys (BYOK) vs Hold-Your-Own-Key (HYOK) is under consideration.",
    options: [
      { id: 'A', text: "Disable encryption at rest and rely on network firewalls alone." },
      { id: 'B', text: "Use default cloud provider-managed keys where the CSP controls both storage and cryptographic keys." },
      { id: 'C', text: "Store encryption keys in plaintext in an S3 bucket adjacent to the encrypted database." },
      { id: 'D', text: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption. Key management models balance operational convenience and control: Provider-Managed Keys (CSP controls keys and storage), Bring-Your-Own-Key / Customer-Managed Keys (customer manages key policies in cloud KMS), and Hold-Your-Own-Key (keys reside in on-premises HSMs, preventing provider decryption).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Ownership", "Key Ownership", "Application Secops"]
  },
  {
    id: "isc2-ccsp-315",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cloud Encryption at Rest and Key Ownership Models: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Key Ownership to satisfy a strict regulatory mandate requiring that the cloud provider can never access the cryptographic keys used to encrypt health records.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Provider-managed keys vs Customer-Managed Keys (BYOK) vs Hold-Your-Own-Key (HYOK) is under consideration.",
    options: [
      { id: 'A', text: "Disable encryption at rest and rely on network firewalls alone." },
      { id: 'B', text: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption." },
      { id: 'C', text: "Store encryption keys in plaintext in an S3 bucket adjacent to the encrypted database." },
      { id: 'D', text: "Use default cloud provider-managed keys where the CSP controls both storage and cryptographic keys." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement a Hold-Your-Own-Key (HYOK) or dedicated on-premises Hardware Security Module (HSM) architecture with client-side encryption. Key management models balance operational convenience and control: Provider-Managed Keys (CSP controls keys and storage), Bring-Your-Own-Key / Customer-Managed Keys (customer manages key policies in cloud KMS), and Hold-Your-Own-Key (keys reside in on-premises HSMs, preventing provider decryption).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Ownership", "Key Ownership", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-316",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Encryption in Transit and Protocol Hardening: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Encryption in Transit to protect cloud API communications and web applications against eavesdropping, downgrade attacks, and man-in-the-middle exploits.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Enforcing TLS 1.3, forward secrecy, disabling obsolete ciphers, and mutual TLS (mTLS) is under consideration.",
    options: [
      { id: 'A', text: "Operate internal cloud microservices over unencrypted plaintext HTTP." },
      { id: 'B', text: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS)." },
      { id: 'C', text: "Use static preshared keys transmitted in plaintext query parameters." },
      { id: 'D', text: "Permit legacy SSLv3 and TLS 1.0 protocols to maintain compatibility with unpatched ancient client devices." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS). Securing data in transit requires terminating insecure legacy protocols (SSL 2.0/3.0, TLS 1.0/1.1) and disabling weak ciphers (RC4, 3DES). Enforcing TLS 1.2/1.3 with Ephemeral Diffie-Hellman (ECDHE) ensures Perfect Forward Secrecy (PFS), so recorded traffic cannot be decrypted later if server keys are compromised.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final",
    tags: ["Encryption in Transit", "Encryption in Transit", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-317",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Encryption in Transit and Protocol Hardening: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Encryption in Transit to protect cloud API communications and web applications against eavesdropping, downgrade attacks, and man-in-the-middle exploits.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Enforcing TLS 1.3, forward secrecy, disabling obsolete ciphers, and mutual TLS (mTLS) is under consideration.",
    options: [
      { id: 'A', text: "Permit legacy SSLv3 and TLS 1.0 protocols to maintain compatibility with unpatched ancient client devices." },
      { id: 'B', text: "Operate internal cloud microservices over unencrypted plaintext HTTP." },
      { id: 'C', text: "Use static preshared keys transmitted in plaintext query parameters." },
      { id: 'D', text: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS). Securing data in transit requires terminating insecure legacy protocols (SSL 2.0/3.0, TLS 1.0/1.1) and disabling weak ciphers (RC4, 3DES). Enforcing TLS 1.2/1.3 with Ephemeral Diffie-Hellman (ECDHE) ensures Perfect Forward Secrecy (PFS), so recorded traffic cannot be decrypted later if server keys are compromised.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final",
    tags: ["Encryption in Transit", "Encryption in Transit", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-318",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Encryption in Transit and Protocol Hardening: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Encryption in Transit to protect cloud API communications and web applications against eavesdropping, downgrade attacks, and man-in-the-middle exploits.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Enforcing TLS 1.3, forward secrecy, disabling obsolete ciphers, and mutual TLS (mTLS) is under consideration.",
    options: [
      { id: 'A', text: "Use static preshared keys transmitted in plaintext query parameters." },
      { id: 'B', text: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS)." },
      { id: 'C', text: "Permit legacy SSLv3 and TLS 1.0 protocols to maintain compatibility with unpatched ancient client devices." },
      { id: 'D', text: "Operate internal cloud microservices over unencrypted plaintext HTTP." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS). Securing data in transit requires terminating insecure legacy protocols (SSL 2.0/3.0, TLS 1.0/1.1) and disabling weak ciphers (RC4, 3DES). Enforcing TLS 1.2/1.3 with Ephemeral Diffie-Hellman (ECDHE) ensures Perfect Forward Secrecy (PFS), so recorded traffic cannot be decrypted later if server keys are compromised.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final",
    tags: ["Encryption in Transit", "Encryption in Transit", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-319",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Encryption in Transit and Protocol Hardening: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Encryption in Transit to protect cloud API communications and web applications against eavesdropping, downgrade attacks, and man-in-the-middle exploits.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Enforcing TLS 1.3, forward secrecy, disabling obsolete ciphers, and mutual TLS (mTLS) is under consideration.",
    options: [
      { id: 'A', text: "Operate internal cloud microservices over unencrypted plaintext HTTP." },
      { id: 'B', text: "Permit legacy SSLv3 and TLS 1.0 protocols to maintain compatibility with unpatched ancient client devices." },
      { id: 'C', text: "Use static preshared keys transmitted in plaintext query parameters." },
      { id: 'D', text: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS). Securing data in transit requires terminating insecure legacy protocols (SSL 2.0/3.0, TLS 1.0/1.1) and disabling weak ciphers (RC4, 3DES). Enforcing TLS 1.2/1.3 with Ephemeral Diffie-Hellman (ECDHE) ensures Perfect Forward Secrecy (PFS), so recorded traffic cannot be decrypted later if server keys are compromised.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final",
    tags: ["Encryption in Transit", "Encryption in Transit", "Application Secops"]
  },
  {
    id: "isc2-ccsp-320",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Encryption in Transit and Protocol Hardening: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Encryption in Transit to protect cloud API communications and web applications against eavesdropping, downgrade attacks, and man-in-the-middle exploits.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Enforcing TLS 1.3, forward secrecy, disabling obsolete ciphers, and mutual TLS (mTLS) is under consideration.",
    options: [
      { id: 'A', text: "Use static preshared keys transmitted in plaintext query parameters." },
      { id: 'B', text: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS)." },
      { id: 'C', text: "Operate internal cloud microservices over unencrypted plaintext HTTP." },
      { id: 'D', text: "Permit legacy SSLv3 and TLS 1.0 protocols to maintain compatibility with unpatched ancient client devices." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enforce TLS 1.3 with Perfect Forward Secrecy (PFS), disable obsolete SSL/TLS protocols and weak ciphers, and implement mutual TLS (mTLS). Securing data in transit requires terminating insecure legacy protocols (SSL 2.0/3.0, TLS 1.0/1.1) and disabling weak ciphers (RC4, 3DES). Enforcing TLS 1.2/1.3 with Ephemeral Diffie-Hellman (ECDHE) ensures Perfect Forward Secrecy (PFS), so recorded traffic cannot be decrypted later if server keys are compromised.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final",
    tags: ["Encryption in Transit", "Encryption in Transit", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-321",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cryptographic Key Lifecycle Governance: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Key Lifecycle to manage cryptographic keys across their full lifecycle in accordance with NIST SP 800-57 guidelines.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Key generation, secure storage, distribution, scheduled rotation, revocation, and destruction is under consideration.",
    options: [
      { id: 'A', text: "Email private encryption keys across unencrypted corporate chat channels." },
      { id: 'B', text: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction." },
      { id: 'C', text: "Generate encryption keys using predictable pseudo-random number generators seeded with timestamp zero." },
      { id: 'D', text: "Use a single master encryption key indefinitely without ever rotating it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction. NIST SP 800-57 defines the cryptographic key lifecycle: Pre-operational (generation using approved entropy, distribution), Operational (active encryption/decryption, access control), Post-operational (archived for decryption of legacy data, rotation), and Destroyed (zeroized/shredded).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Lifecycle", "Key Lifecycle", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-322",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cryptographic Key Lifecycle Governance: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Key Lifecycle to manage cryptographic keys across their full lifecycle in accordance with NIST SP 800-57 guidelines.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Key generation, secure storage, distribution, scheduled rotation, revocation, and destruction is under consideration.",
    options: [
      { id: 'A', text: "Use a single master encryption key indefinitely without ever rotating it." },
      { id: 'B', text: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction." },
      { id: 'C', text: "Email private encryption keys across unencrypted corporate chat channels." },
      { id: 'D', text: "Generate encryption keys using predictable pseudo-random number generators seeded with timestamp zero." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction. NIST SP 800-57 defines the cryptographic key lifecycle: Pre-operational (generation using approved entropy, distribution), Operational (active encryption/decryption, access control), Post-operational (archived for decryption of legacy data, rotation), and Destroyed (zeroized/shredded).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Lifecycle", "Key Lifecycle", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-323",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cryptographic Key Lifecycle Governance: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Key Lifecycle to manage cryptographic keys across their full lifecycle in accordance with NIST SP 800-57 guidelines.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Key generation, secure storage, distribution, scheduled rotation, revocation, and destruction is under consideration.",
    options: [
      { id: 'A', text: "Use a single master encryption key indefinitely without ever rotating it." },
      { id: 'B', text: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction." },
      { id: 'C', text: "Generate encryption keys using predictable pseudo-random number generators seeded with timestamp zero." },
      { id: 'D', text: "Email private encryption keys across unencrypted corporate chat channels." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction. NIST SP 800-57 defines the cryptographic key lifecycle: Pre-operational (generation using approved entropy, distribution), Operational (active encryption/decryption, access control), Post-operational (archived for decryption of legacy data, rotation), and Destroyed (zeroized/shredded).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Lifecycle", "Key Lifecycle", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-324",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cryptographic Key Lifecycle Governance: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Key Lifecycle to manage cryptographic keys across their full lifecycle in accordance with NIST SP 800-57 guidelines.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Key generation, secure storage, distribution, scheduled rotation, revocation, and destruction is under consideration.",
    options: [
      { id: 'A', text: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction." },
      { id: 'B', text: "Generate encryption keys using predictable pseudo-random number generators seeded with timestamp zero." },
      { id: 'C', text: "Email private encryption keys across unencrypted corporate chat channels." },
      { id: 'D', text: "Use a single master encryption key indefinitely without ever rotating it." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction. NIST SP 800-57 defines the cryptographic key lifecycle: Pre-operational (generation using approved entropy, distribution), Operational (active encryption/decryption, access control), Post-operational (archived for decryption of legacy data, rotation), and Destroyed (zeroized/shredded).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Lifecycle", "Key Lifecycle", "Application Secops"]
  },
  {
    id: "isc2-ccsp-325",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d2",
    domainName: "Cloud Data Security",
    title: "Cryptographic Key Lifecycle Governance: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Key Lifecycle to manage cryptographic keys across their full lifecycle in accordance with NIST SP 800-57 guidelines.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Key generation, secure storage, distribution, scheduled rotation, revocation, and destruction is under consideration.",
    options: [
      { id: 'A', text: "Generate encryption keys using predictable pseudo-random number generators seeded with timestamp zero." },
      { id: 'B', text: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction." },
      { id: 'C', text: "Email private encryption keys across unencrypted corporate chat channels." },
      { id: 'D', text: "Use a single master encryption key indefinitely without ever rotating it." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Establish a formal key lifecycle policy governing generation (FIPS HSMs), access control, annual rotation, revocation, and cryptographic destruction. NIST SP 800-57 defines the cryptographic key lifecycle: Pre-operational (generation using approved entropy, distribution), Operational (active encryption/decryption, access control), Post-operational (archived for decryption of legacy data, rotation), and Destroyed (zeroized/shredded).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final",
    tags: ["Key Lifecycle", "Key Lifecycle", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_13;
