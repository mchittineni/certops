export const ISC2_CCSP_QUESTIONS_17 = [
  {
    id: "isc2-ccsp-401",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Software Supply Chain and Third-Party Component Security: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Supply Chain Security to prevent malicious open-source packages or known vulnerable libraries from entering enterprise cloud application builds.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Managing open-source risk, Software Bill of Materials (SBOM), and software composition analysis (SCA) is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to download and execute arbitrary public scripts directly in production without vetting." },
      { id: 'B', text: "Assume open-source packages hosted on public repositories are thoroughly vetted and safe." },
      { id: 'C', text: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs)." },
      { id: 'D', text: "Disable dependency checking to accelerate build completion times." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs). Modern applications are composed of up to 90% third-party open-source libraries. Software Composition Analysis (SCA) identifies known vulnerabilities (CVEs) and restrictive licenses across dependency trees, while SBOMs (SPDX/CycloneDX) provide transparent provenance for compliance.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final",
    tags: ["Supply Chain Security", "Supply Chain Security", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-402",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Software Supply Chain and Third-Party Component Security: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Supply Chain Security to prevent malicious open-source packages or known vulnerable libraries from entering enterprise cloud application builds.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Managing open-source risk, Software Bill of Materials (SBOM), and software composition analysis (SCA) is under consideration.",
    options: [
      { id: 'A', text: "Assume open-source packages hosted on public repositories are thoroughly vetted and safe." },
      { id: 'B', text: "Allow developers to download and execute arbitrary public scripts directly in production without vetting." },
      { id: 'C', text: "Disable dependency checking to accelerate build completion times." },
      { id: 'D', text: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs). Modern applications are composed of up to 90% third-party open-source libraries. Software Composition Analysis (SCA) identifies known vulnerabilities (CVEs) and restrictive licenses across dependency trees, while SBOMs (SPDX/CycloneDX) provide transparent provenance for compliance.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final",
    tags: ["Supply Chain Security", "Supply Chain Security", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-403",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Software Supply Chain and Third-Party Component Security: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Supply Chain Security to prevent malicious open-source packages or known vulnerable libraries from entering enterprise cloud application builds.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Managing open-source risk, Software Bill of Materials (SBOM), and software composition analysis (SCA) is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to download and execute arbitrary public scripts directly in production without vetting." },
      { id: 'B', text: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs)." },
      { id: 'C', text: "Assume open-source packages hosted on public repositories are thoroughly vetted and safe." },
      { id: 'D', text: "Disable dependency checking to accelerate build completion times." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs). Modern applications are composed of up to 90% third-party open-source libraries. Software Composition Analysis (SCA) identifies known vulnerabilities (CVEs) and restrictive licenses across dependency trees, while SBOMs (SPDX/CycloneDX) provide transparent provenance for compliance.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final",
    tags: ["Supply Chain Security", "Supply Chain Security", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-404",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Software Supply Chain and Third-Party Component Security: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Supply Chain Security to prevent malicious open-source packages or known vulnerable libraries from entering enterprise cloud application builds.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Managing open-source risk, Software Bill of Materials (SBOM), and software composition analysis (SCA) is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to download and execute arbitrary public scripts directly in production without vetting." },
      { id: 'B', text: "Disable dependency checking to accelerate build completion times." },
      { id: 'C', text: "Assume open-source packages hosted on public repositories are thoroughly vetted and safe." },
      { id: 'D', text: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs). Modern applications are composed of up to 90% third-party open-source libraries. Software Composition Analysis (SCA) identifies known vulnerabilities (CVEs) and restrictive licenses across dependency trees, while SBOMs (SPDX/CycloneDX) provide transparent provenance for compliance.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final",
    tags: ["Supply Chain Security", "Supply Chain Security", "Application Secops"]
  },
  {
    id: "isc2-ccsp-405",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Software Supply Chain and Third-Party Component Security: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Supply Chain Security to prevent malicious open-source packages or known vulnerable libraries from entering enterprise cloud application builds.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Managing open-source risk, Software Bill of Materials (SBOM), and software composition analysis (SCA) is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to download and execute arbitrary public scripts directly in production without vetting." },
      { id: 'B', text: "Disable dependency checking to accelerate build completion times." },
      { id: 'C', text: "Assume open-source packages hosted on public repositories are thoroughly vetted and safe." },
      { id: 'D', text: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Software Composition Analysis (SCA) to continuously audit open-source dependencies and generate Software Bills of Materials (SBOMs). Modern applications are composed of up to 90% third-party open-source libraries. Software Composition Analysis (SCA) identifies known vulnerabilities (CVEs) and restrictive licenses across dependency trees, while SBOMs (SPDX/CycloneDX) provide transparent provenance for compliance.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final",
    tags: ["Supply Chain Security", "Supply Chain Security", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-406",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Threat Modeling in Cloud Systems: STRIDE Methodology: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates STRIDE Threat Modeling to systematically identify architectural security risks and missing controls during the initial design phase of a new cloud application.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Analyzing Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege is under consideration.",
    options: [
      { id: 'A', text: "Rely solely on automated network port scans to identify software design weaknesses." },
      { id: 'B', text: "Wait until after production launch to discover architectural security flaws." },
      { id: 'C', text: "Assume cloud infrastructure eliminates all application-level threat vectors." },
      { id: 'D', text: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs). Threat modeling identifies design flaws before code is written. Using the STRIDE framework (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) mapped across Data Flow Diagrams, teams implement mitigations (authentication, integrity, encryption) proactively.",
    referenceUrl: "https://owasp.org/www-community/Threat_Modeling",
    tags: ["STRIDE Threat Modeling", "STRIDE", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-407",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Threat Modeling in Cloud Systems: STRIDE Methodology: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates STRIDE Threat Modeling to systematically identify architectural security risks and missing controls during the initial design phase of a new cloud application.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Analyzing Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege is under consideration.",
    options: [
      { id: 'A', text: "Assume cloud infrastructure eliminates all application-level threat vectors." },
      { id: 'B', text: "Rely solely on automated network port scans to identify software design weaknesses." },
      { id: 'C', text: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs)." },
      { id: 'D', text: "Wait until after production launch to discover architectural security flaws." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs). Threat modeling identifies design flaws before code is written. Using the STRIDE framework (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) mapped across Data Flow Diagrams, teams implement mitigations (authentication, integrity, encryption) proactively.",
    referenceUrl: "https://owasp.org/www-community/Threat_Modeling",
    tags: ["STRIDE Threat Modeling", "STRIDE", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-408",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Threat Modeling in Cloud Systems: STRIDE Methodology: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates STRIDE Threat Modeling to systematically identify architectural security risks and missing controls during the initial design phase of a new cloud application.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Analyzing Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege is under consideration.",
    options: [
      { id: 'A', text: "Rely solely on automated network port scans to identify software design weaknesses." },
      { id: 'B', text: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs)." },
      { id: 'C', text: "Assume cloud infrastructure eliminates all application-level threat vectors." },
      { id: 'D', text: "Wait until after production launch to discover architectural security flaws." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs). Threat modeling identifies design flaws before code is written. Using the STRIDE framework (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) mapped across Data Flow Diagrams, teams implement mitigations (authentication, integrity, encryption) proactively.",
    referenceUrl: "https://owasp.org/www-community/Threat_Modeling",
    tags: ["STRIDE Threat Modeling", "STRIDE", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-409",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Threat Modeling in Cloud Systems: STRIDE Methodology: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates STRIDE Threat Modeling to systematically identify architectural security risks and missing controls during the initial design phase of a new cloud application.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Analyzing Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege is under consideration.",
    options: [
      { id: 'A', text: "Rely solely on automated network port scans to identify software design weaknesses." },
      { id: 'B', text: "Assume cloud infrastructure eliminates all application-level threat vectors." },
      { id: 'C', text: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs)." },
      { id: 'D', text: "Wait until after production launch to discover architectural security flaws." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs). Threat modeling identifies design flaws before code is written. Using the STRIDE framework (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) mapped across Data Flow Diagrams, teams implement mitigations (authentication, integrity, encryption) proactively.",
    referenceUrl: "https://owasp.org/www-community/Threat_Modeling",
    tags: ["STRIDE Threat Modeling", "STRIDE", "Application Secops"]
  },
  {
    id: "isc2-ccsp-410",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Threat Modeling in Cloud Systems: STRIDE Methodology: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates STRIDE Threat Modeling to systematically identify architectural security risks and missing controls during the initial design phase of a new cloud application.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Analyzing Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege is under consideration.",
    options: [
      { id: 'A', text: "Assume cloud infrastructure eliminates all application-level threat vectors." },
      { id: 'B', text: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs)." },
      { id: 'C', text: "Rely solely on automated network port scans to identify software design weaknesses." },
      { id: 'D', text: "Wait until after production launch to discover architectural security flaws." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct a threat modeling exercise using the STRIDE methodology across application data flow diagrams (DFDs). Threat modeling identifies design flaws before code is written. Using the STRIDE framework (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) mapped across Data Flow Diagrams, teams implement mitigations (authentication, integrity, encryption) proactively.",
    referenceUrl: "https://owasp.org/www-community/Threat_Modeling",
    tags: ["STRIDE Threat Modeling", "STRIDE", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-411",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "API Security and Modern Authentication Standards: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates API Security to secure REST API endpoints accessed by mobile applications and third-party partners against token forgery and brute-force attacks.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? OAuth 2.0 grant types, JSON Web Tokens (JWT) validation, and rate limiting via API gateways is under consideration.",
    options: [
      { id: 'A', text: "Accept unsigned JWT tokens with `alg: none` to simplify token parsing." },
      { id: 'B', text: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting." },
      { id: 'C', text: "Use static, unexpiring API keys shared across all mobile application users." },
      { id: 'D', text: "Pass unencrypted user passwords in HTTP GET query strings for all API requests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting. API security requires defense-in-depth: an API Gateway authenticates requests via OAuth 2.0 (Authorization Code with PKCE for public clients), validates JWT signatures and claims (issuer, audience, expiration), and applies per-client rate limiting to prevent denial of service.",
    referenceUrl: "https://owasp.org/www-project-api-security/",
    tags: ["API Security", "API Security", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-412",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "API Security and Modern Authentication Standards: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates API Security to secure REST API endpoints accessed by mobile applications and third-party partners against token forgery and brute-force attacks.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? OAuth 2.0 grant types, JSON Web Tokens (JWT) validation, and rate limiting via API gateways is under consideration.",
    options: [
      { id: 'A', text: "Use static, unexpiring API keys shared across all mobile application users." },
      { id: 'B', text: "Accept unsigned JWT tokens with `alg: none` to simplify token parsing." },
      { id: 'C', text: "Pass unencrypted user passwords in HTTP GET query strings for all API requests." },
      { id: 'D', text: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting. API security requires defense-in-depth: an API Gateway authenticates requests via OAuth 2.0 (Authorization Code with PKCE for public clients), validates JWT signatures and claims (issuer, audience, expiration), and applies per-client rate limiting to prevent denial of service.",
    referenceUrl: "https://owasp.org/www-project-api-security/",
    tags: ["API Security", "API Security", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-413",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "API Security and Modern Authentication Standards: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates API Security to secure REST API endpoints accessed by mobile applications and third-party partners against token forgery and brute-force attacks.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? OAuth 2.0 grant types, JSON Web Tokens (JWT) validation, and rate limiting via API gateways is under consideration.",
    options: [
      { id: 'A', text: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting." },
      { id: 'B', text: "Use static, unexpiring API keys shared across all mobile application users." },
      { id: 'C', text: "Pass unencrypted user passwords in HTTP GET query strings for all API requests." },
      { id: 'D', text: "Accept unsigned JWT tokens with `alg: none` to simplify token parsing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting. API security requires defense-in-depth: an API Gateway authenticates requests via OAuth 2.0 (Authorization Code with PKCE for public clients), validates JWT signatures and claims (issuer, audience, expiration), and applies per-client rate limiting to prevent denial of service.",
    referenceUrl: "https://owasp.org/www-project-api-security/",
    tags: ["API Security", "API Security", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-414",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "API Security and Modern Authentication Standards: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates API Security to secure REST API endpoints accessed by mobile applications and third-party partners against token forgery and brute-force attacks.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? OAuth 2.0 grant types, JSON Web Tokens (JWT) validation, and rate limiting via API gateways is under consideration.",
    options: [
      { id: 'A', text: "Use static, unexpiring API keys shared across all mobile application users." },
      { id: 'B', text: "Accept unsigned JWT tokens with `alg: none` to simplify token parsing." },
      { id: 'C', text: "Pass unencrypted user passwords in HTTP GET query strings for all API requests." },
      { id: 'D', text: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting. API security requires defense-in-depth: an API Gateway authenticates requests via OAuth 2.0 (Authorization Code with PKCE for public clients), validates JWT signatures and claims (issuer, audience, expiration), and applies per-client rate limiting to prevent denial of service.",
    referenceUrl: "https://owasp.org/www-project-api-security/",
    tags: ["API Security", "API Security", "Application Secops"]
  },
  {
    id: "isc2-ccsp-415",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "API Security and Modern Authentication Standards: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates API Security to secure REST API endpoints accessed by mobile applications and third-party partners against token forgery and brute-force attacks.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? OAuth 2.0 grant types, JSON Web Tokens (JWT) validation, and rate limiting via API gateways is under consideration.",
    options: [
      { id: 'A', text: "Use static, unexpiring API keys shared across all mobile application users." },
      { id: 'B', text: "Accept unsigned JWT tokens with `alg: none` to simplify token parsing." },
      { id: 'C', text: "Pass unencrypted user passwords in HTTP GET query strings for all API requests." },
      { id: 'D', text: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement an API Gateway enforcing OAuth 2.0 authorization code flow with PKCE, validating cryptographic JWT signatures, and rate limiting. API security requires defense-in-depth: an API Gateway authenticates requests via OAuth 2.0 (Authorization Code with PKCE for public clients), validates JWT signatures and claims (issuer, audience, expiration), and applies per-client rate limiting to prevent denial of service.",
    referenceUrl: "https://owasp.org/www-project-api-security/",
    tags: ["API Security", "API Security", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-416",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secrets Management and Dynamic Credential Injection: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Secrets Management to eliminate static database passwords and cloud credentials hardcoded inside application configuration files and source code.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Centralized secret vaults, short-lived dynamic credentials, and eliminating hardcoded secrets is under consideration.",
    options: [
      { id: 'A', text: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials." },
      { id: 'B', text: "Store administrative passwords in unencrypted text files on local developer desktops." },
      { id: 'C', text: "Hardcode database credentials in cleartext inside public Git repository source files." },
      { id: 'D', text: "Commit encrypted secrets to Git alongside the decryption key in the same repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials. Hardcoded secrets represent a critical security vulnerability. Enterprise cloud architectures use dedicated secrets management services that inject credentials into workloads dynamically at runtime via environment variables or sidecars, automatically rotating credentials on a scheduled basis.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Secrets Management", "Secrets Management", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-417",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secrets Management and Dynamic Credential Injection: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Secrets Management to eliminate static database passwords and cloud credentials hardcoded inside application configuration files and source code.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Centralized secret vaults, short-lived dynamic credentials, and eliminating hardcoded secrets is under consideration.",
    options: [
      { id: 'A', text: "Commit encrypted secrets to Git alongside the decryption key in the same repository." },
      { id: 'B', text: "Store administrative passwords in unencrypted text files on local developer desktops." },
      { id: 'C', text: "Hardcode database credentials in cleartext inside public Git repository source files." },
      { id: 'D', text: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials. Hardcoded secrets represent a critical security vulnerability. Enterprise cloud architectures use dedicated secrets management services that inject credentials into workloads dynamically at runtime via environment variables or sidecars, automatically rotating credentials on a scheduled basis.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Secrets Management", "Secrets Management", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-418",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secrets Management and Dynamic Credential Injection: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Secrets Management to eliminate static database passwords and cloud credentials hardcoded inside application configuration files and source code.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Centralized secret vaults, short-lived dynamic credentials, and eliminating hardcoded secrets is under consideration.",
    options: [
      { id: 'A', text: "Commit encrypted secrets to Git alongside the decryption key in the same repository." },
      { id: 'B', text: "Hardcode database credentials in cleartext inside public Git repository source files." },
      { id: 'C', text: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials." },
      { id: 'D', text: "Store administrative passwords in unencrypted text files on local developer desktops." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials. Hardcoded secrets represent a critical security vulnerability. Enterprise cloud architectures use dedicated secrets management services that inject credentials into workloads dynamically at runtime via environment variables or sidecars, automatically rotating credentials on a scheduled basis.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Secrets Management", "Secrets Management", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-419",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secrets Management and Dynamic Credential Injection: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Secrets Management to eliminate static database passwords and cloud credentials hardcoded inside application configuration files and source code.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Centralized secret vaults, short-lived dynamic credentials, and eliminating hardcoded secrets is under consideration.",
    options: [
      { id: 'A', text: "Hardcode database credentials in cleartext inside public Git repository source files." },
      { id: 'B', text: "Store administrative passwords in unencrypted text files on local developer desktops." },
      { id: 'C', text: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials." },
      { id: 'D', text: "Commit encrypted secrets to Git alongside the decryption key in the same repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials. Hardcoded secrets represent a critical security vulnerability. Enterprise cloud architectures use dedicated secrets management services that inject credentials into workloads dynamically at runtime via environment variables or sidecars, automatically rotating credentials on a scheduled basis.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Secrets Management", "Secrets Management", "Application Secops"]
  },
  {
    id: "isc2-ccsp-420",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secrets Management and Dynamic Credential Injection: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Secrets Management to eliminate static database passwords and cloud credentials hardcoded inside application configuration files and source code.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Centralized secret vaults, short-lived dynamic credentials, and eliminating hardcoded secrets is under consideration.",
    options: [
      { id: 'A', text: "Store administrative passwords in unencrypted text files on local developer desktops." },
      { id: 'B', text: "Hardcode database credentials in cleartext inside public Git repository source files." },
      { id: 'C', text: "Commit encrypted secrets to Git alongside the decryption key in the same repository." },
      { id: 'D', text: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use a centralized cloud secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) providing short-lived, dynamically rotated credentials. Hardcoded secrets represent a critical security vulnerability. Enterprise cloud architectures use dedicated secrets management services that inject credentials into workloads dynamically at runtime via environment variables or sidecars, automatically rotating credentials on a scheduled basis.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Secrets Management", "Secrets Management", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-421",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Security Information and Event Management (SIEM) and SOAR: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Cloud SIEM & SOAR to correlate security events across multi-cloud infrastructure, SaaS applications, and network firewalls with automated response.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Centralized log aggregation, correlation rules, and automated incident response playbooks is under consideration.",
    options: [
      { id: 'A', text: "Disable event correlation and evaluate each alert in complete isolation." },
      { id: 'B', text: "Discard all security logs after 24 hours to minimize cloud storage fees." },
      { id: 'C', text: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks." },
      { id: 'D', text: "Rely on security analysts to manually inspect raw log files across 50 disconnected cloud dashboards." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks. Modern Security Operations Centers (SOC) rely on cloud SIEM/SOAR. The SIEM ingests logs (CloudTrail, VPC Flow, DNS, WAF, endpoint agents), normalizes events, and executes correlation rules, while the SOAR (Security Orchestration, Automation, and Response) executes automated playbooks (quarantine, block IP).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud SIEM & SOAR", "Cloud SIEM & SOAR", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-422",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Security Information and Event Management (SIEM) and SOAR: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Cloud SIEM & SOAR to correlate security events across multi-cloud infrastructure, SaaS applications, and network firewalls with automated response.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Centralized log aggregation, correlation rules, and automated incident response playbooks is under consideration.",
    options: [
      { id: 'A', text: "Disable event correlation and evaluate each alert in complete isolation." },
      { id: 'B', text: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks." },
      { id: 'C', text: "Discard all security logs after 24 hours to minimize cloud storage fees." },
      { id: 'D', text: "Rely on security analysts to manually inspect raw log files across 50 disconnected cloud dashboards." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks. Modern Security Operations Centers (SOC) rely on cloud SIEM/SOAR. The SIEM ingests logs (CloudTrail, VPC Flow, DNS, WAF, endpoint agents), normalizes events, and executes correlation rules, while the SOAR (Security Orchestration, Automation, and Response) executes automated playbooks (quarantine, block IP).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud SIEM & SOAR", "Cloud SIEM & SOAR", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-423",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Security Information and Event Management (SIEM) and SOAR: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Cloud SIEM & SOAR to correlate security events across multi-cloud infrastructure, SaaS applications, and network firewalls with automated response.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Centralized log aggregation, correlation rules, and automated incident response playbooks is under consideration.",
    options: [
      { id: 'A', text: "Disable event correlation and evaluate each alert in complete isolation." },
      { id: 'B', text: "Rely on security analysts to manually inspect raw log files across 50 disconnected cloud dashboards." },
      { id: 'C', text: "Discard all security logs after 24 hours to minimize cloud storage fees." },
      { id: 'D', text: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks. Modern Security Operations Centers (SOC) rely on cloud SIEM/SOAR. The SIEM ingests logs (CloudTrail, VPC Flow, DNS, WAF, endpoint agents), normalizes events, and executes correlation rules, while the SOAR (Security Orchestration, Automation, and Response) executes automated playbooks (quarantine, block IP).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud SIEM & SOAR", "Cloud SIEM & SOAR", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-424",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Security Information and Event Management (SIEM) and SOAR: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Cloud SIEM & SOAR to correlate security events across multi-cloud infrastructure, SaaS applications, and network firewalls with automated response.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Centralized log aggregation, correlation rules, and automated incident response playbooks is under consideration.",
    options: [
      { id: 'A', text: "Discard all security logs after 24 hours to minimize cloud storage fees." },
      { id: 'B', text: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks." },
      { id: 'C', text: "Rely on security analysts to manually inspect raw log files across 50 disconnected cloud dashboards." },
      { id: 'D', text: "Disable event correlation and evaluate each alert in complete isolation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks. Modern Security Operations Centers (SOC) rely on cloud SIEM/SOAR. The SIEM ingests logs (CloudTrail, VPC Flow, DNS, WAF, endpoint agents), normalizes events, and executes correlation rules, while the SOAR (Security Orchestration, Automation, and Response) executes automated playbooks (quarantine, block IP).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud SIEM & SOAR", "Cloud SIEM & SOAR", "Application Secops"]
  },
  {
    id: "isc2-ccsp-425",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d5",
    domainName: "Cloud Security Operations",
    title: "Cloud Security Information and Event Management (SIEM) and SOAR: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Cloud SIEM & SOAR to correlate security events across multi-cloud infrastructure, SaaS applications, and network firewalls with automated response.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Centralized log aggregation, correlation rules, and automated incident response playbooks is under consideration.",
    options: [
      { id: 'A', text: "Disable event correlation and evaluate each alert in complete isolation." },
      { id: 'B', text: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks." },
      { id: 'C', text: "Rely on security analysts to manually inspect raw log files across 50 disconnected cloud dashboards." },
      { id: 'D', text: "Discard all security logs after 24 hours to minimize cloud storage fees." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a cloud-native SIEM/SOAR platform that ingests multi-source telemetry, correlates threat indicators, and triggers automated playbooks. Modern Security Operations Centers (SOC) rely on cloud SIEM/SOAR. The SIEM ingests logs (CloudTrail, VPC Flow, DNS, WAF, endpoint agents), normalizes events, and executes correlation rules, while the SOAR (Security Orchestration, Automation, and Response) executes automated playbooks (quarantine, block IP).",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud SIEM & SOAR", "Cloud SIEM & SOAR", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_17;
