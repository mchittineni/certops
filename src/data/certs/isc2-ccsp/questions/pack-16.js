export const ISC2_CCSP_QUESTIONS_16 = [
  {
    id: "isc2-ccsp-376",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Multi-Tenancy Isolation and Side-Channel Attacks: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Side-Channel Isolation to protect a highly regulated banking cryptographic signing workload from speculative execution side-channel attacks on shared cloud hardware.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Meltdown, Spectre, and L1 Terminal Fault (L1TF) mitigations and dedicated host tenancy is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled." },
      { id: 'B', text: "Run cryptographic signing keys on shared multi-tenant spot instances without CPU cache isolation." },
      { id: 'C', text: "Disable operating system kernel page table isolation (KPTI) to boost CPU performance." },
      { id: 'D', text: "Allow untrusted third-party workloads to execute on the same CPU cores as the cryptographic signer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled. Speculative execution side-channel attacks (Spectre, Meltdown, L1TF) exploit modern CPU branch prediction to leak data across VM boundaries. While hypervisor patches mitigate many flaws, regulated or high-value cryptographic workloads deploy on dedicated hardware or dedicated hosts to guarantee physical CPU isolation.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Side-Channel Isolation", "Side-Channel Isolation", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-377",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Multi-Tenancy Isolation and Side-Channel Attacks: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Side-Channel Isolation to protect a highly regulated banking cryptographic signing workload from speculative execution side-channel attacks on shared cloud hardware.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Meltdown, Spectre, and L1 Terminal Fault (L1TF) mitigations and dedicated host tenancy is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled." },
      { id: 'B', text: "Run cryptographic signing keys on shared multi-tenant spot instances without CPU cache isolation." },
      { id: 'C', text: "Disable operating system kernel page table isolation (KPTI) to boost CPU performance." },
      { id: 'D', text: "Allow untrusted third-party workloads to execute on the same CPU cores as the cryptographic signer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled. Speculative execution side-channel attacks (Spectre, Meltdown, L1TF) exploit modern CPU branch prediction to leak data across VM boundaries. While hypervisor patches mitigate many flaws, regulated or high-value cryptographic workloads deploy on dedicated hardware or dedicated hosts to guarantee physical CPU isolation.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Side-Channel Isolation", "Side-Channel Isolation", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-378",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Multi-Tenancy Isolation and Side-Channel Attacks: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Side-Channel Isolation to protect a highly regulated banking cryptographic signing workload from speculative execution side-channel attacks on shared cloud hardware.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Meltdown, Spectre, and L1 Terminal Fault (L1TF) mitigations and dedicated host tenancy is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled." },
      { id: 'B', text: "Run cryptographic signing keys on shared multi-tenant spot instances without CPU cache isolation." },
      { id: 'C', text: "Disable operating system kernel page table isolation (KPTI) to boost CPU performance." },
      { id: 'D', text: "Allow untrusted third-party workloads to execute on the same CPU cores as the cryptographic signer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled. Speculative execution side-channel attacks (Spectre, Meltdown, L1TF) exploit modern CPU branch prediction to leak data across VM boundaries. While hypervisor patches mitigate many flaws, regulated or high-value cryptographic workloads deploy on dedicated hardware or dedicated hosts to guarantee physical CPU isolation.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Side-Channel Isolation", "Side-Channel Isolation", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-379",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Multi-Tenancy Isolation and Side-Channel Attacks: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Side-Channel Isolation to protect a highly regulated banking cryptographic signing workload from speculative execution side-channel attacks on shared cloud hardware.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Meltdown, Spectre, and L1 Terminal Fault (L1TF) mitigations and dedicated host tenancy is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled." },
      { id: 'B', text: "Run cryptographic signing keys on shared multi-tenant spot instances without CPU cache isolation." },
      { id: 'C', text: "Disable operating system kernel page table isolation (KPTI) to boost CPU performance." },
      { id: 'D', text: "Allow untrusted third-party workloads to execute on the same CPU cores as the cryptographic signer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled. Speculative execution side-channel attacks (Spectre, Meltdown, L1TF) exploit modern CPU branch prediction to leak data across VM boundaries. While hypervisor patches mitigate many flaws, regulated or high-value cryptographic workloads deploy on dedicated hardware or dedicated hosts to guarantee physical CPU isolation.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Side-Channel Isolation", "Side-Channel Isolation", "Application Secops"]
  },
  {
    id: "isc2-ccsp-380",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Multi-Tenancy Isolation and Side-Channel Attacks: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Side-Channel Isolation to protect a highly regulated banking cryptographic signing workload from speculative execution side-channel attacks on shared cloud hardware.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Meltdown, Spectre, and L1 Terminal Fault (L1TF) mitigations and dedicated host tenancy is under consideration.",
    options: [
      { id: 'A', text: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled." },
      { id: 'B', text: "Run cryptographic signing keys on shared multi-tenant spot instances without CPU cache isolation." },
      { id: 'C', text: "Disable operating system kernel page table isolation (KPTI) to boost CPU performance." },
      { id: 'D', text: "Allow untrusted third-party workloads to execute on the same CPU cores as the cryptographic signer." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy workloads on dedicated instances or dedicated bare-metal hosts with speculative execution CPU mitigations enabled. Speculative execution side-channel attacks (Spectre, Meltdown, L1TF) exploit modern CPU branch prediction to leak data across VM boundaries. While hypervisor patches mitigate many flaws, regulated or high-value cryptographic workloads deploy on dedicated hardware or dedicated hosts to guarantee physical CPU isolation.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Side-Channel Isolation", "Side-Channel Isolation", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-381",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secure Software Development Life Cycle (SSDLC) in Cloud: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Cloud SSDLC to embed security controls into a cloud-native software delivery pipeline without slowing down weekly deployment cycles.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Integrating threat modeling, SAST, DAST, and security gates across agile CI/CD phases is under consideration.",
    options: [
      { id: 'A', text: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD." },
      { id: 'B', text: "Perform a single security review once a year immediately before the production launch date." },
      { id: 'C', text: "Rely on developers to test application security manually on their local laptops without tooling." },
      { id: 'D', text: "Disable all automated security gates to prioritize feature velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD. A cloud SSDLC shifts security left by integrating controls into every development phase: requirements (security user stories), design (threat modeling), development (IDE linters, SAST), testing (DAST, container scanning), and deployment (automated security gate policies).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-218/final",
    tags: ["Cloud SSDLC", "Cloud SSDLC", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-382",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secure Software Development Life Cycle (SSDLC) in Cloud: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Cloud SSDLC to embed security controls into a cloud-native software delivery pipeline without slowing down weekly deployment cycles.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Integrating threat modeling, SAST, DAST, and security gates across agile CI/CD phases is under consideration.",
    options: [
      { id: 'A', text: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD." },
      { id: 'B', text: "Perform a single security review once a year immediately before the production launch date." },
      { id: 'C', text: "Rely on developers to test application security manually on their local laptops without tooling." },
      { id: 'D', text: "Disable all automated security gates to prioritize feature velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD. A cloud SSDLC shifts security left by integrating controls into every development phase: requirements (security user stories), design (threat modeling), development (IDE linters, SAST), testing (DAST, container scanning), and deployment (automated security gate policies).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-218/final",
    tags: ["Cloud SSDLC", "Cloud SSDLC", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-383",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secure Software Development Life Cycle (SSDLC) in Cloud: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Cloud SSDLC to embed security controls into a cloud-native software delivery pipeline without slowing down weekly deployment cycles.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Integrating threat modeling, SAST, DAST, and security gates across agile CI/CD phases is under consideration.",
    options: [
      { id: 'A', text: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD." },
      { id: 'B', text: "Perform a single security review once a year immediately before the production launch date." },
      { id: 'C', text: "Rely on developers to test application security manually on their local laptops without tooling." },
      { id: 'D', text: "Disable all automated security gates to prioritize feature velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD. A cloud SSDLC shifts security left by integrating controls into every development phase: requirements (security user stories), design (threat modeling), development (IDE linters, SAST), testing (DAST, container scanning), and deployment (automated security gate policies).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-218/final",
    tags: ["Cloud SSDLC", "Cloud SSDLC", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-384",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secure Software Development Life Cycle (SSDLC) in Cloud: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Cloud SSDLC to embed security controls into a cloud-native software delivery pipeline without slowing down weekly deployment cycles.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Integrating threat modeling, SAST, DAST, and security gates across agile CI/CD phases is under consideration.",
    options: [
      { id: 'A', text: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD." },
      { id: 'B', text: "Perform a single security review once a year immediately before the production launch date." },
      { id: 'C', text: "Rely on developers to test application security manually on their local laptops without tooling." },
      { id: 'D', text: "Disable all automated security gates to prioritize feature velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD. A cloud SSDLC shifts security left by integrating controls into every development phase: requirements (security user stories), design (threat modeling), development (IDE linters, SAST), testing (DAST, container scanning), and deployment (automated security gate policies).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-218/final",
    tags: ["Cloud SSDLC", "Cloud SSDLC", "Application Secops"]
  },
  {
    id: "isc2-ccsp-385",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Secure Software Development Life Cycle (SSDLC) in Cloud: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Cloud SSDLC to embed security controls into a cloud-native software delivery pipeline without slowing down weekly deployment cycles.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Integrating threat modeling, SAST, DAST, and security gates across agile CI/CD phases is under consideration.",
    options: [
      { id: 'A', text: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD." },
      { id: 'B', text: "Perform a single security review once a year immediately before the production launch date." },
      { id: 'C', text: "Rely on developers to test application security manually on their local laptops without tooling." },
      { id: 'D', text: "Disable all automated security gates to prioritize feature velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a Secure Software Development Life Cycle (SSDLC): integrate automated SAST, dependency scanning, and security unit tests into CI/CD. A cloud SSDLC shifts security left by integrating controls into every development phase: requirements (security user stories), design (threat modeling), development (IDE linters, SAST), testing (DAST, container scanning), and deployment (automated security gate policies).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-218/final",
    tags: ["Cloud SSDLC", "Cloud SSDLC", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-386",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "OWASP Top 10 Web Application Vulnerabilities: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates OWASP Top 10 to protect a cloud-native REST API from Server-Side Request Forgery (SSRF) and Broken Object Level Authorization (BOLA).",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Mitigating Injection, Broken Object Level Authorization (BOLA), SSRF, and Cross-Site Scripting (XSS) is under consideration.",
    options: [
      { id: 'A', text: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call." },
      { id: 'B', text: "Trust all incoming user input parameters without validation or sanitization." },
      { id: 'C', text: "Rely on simple obfuscation techniques like base64 encoding to protect sensitive API endpoints." },
      { id: 'D', text: "Disable API authentication to simplify client application development." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call. The OWASP Top 10 highlights critical web flaws. Mitigating Server-Side Request Forgery (SSRF) requires strict URL allowlisting and blocking access to cloud metadata services (`169.254.169.254`). Mitigating BOLA/IDOR requires verifying that the authenticated user explicitly owns the requested object ID.",
    referenceUrl: "https://owasp.org/www-project-top-ten/",
    tags: ["OWASP Top 10", "OWASP Top 10", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-387",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "OWASP Top 10 Web Application Vulnerabilities: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates OWASP Top 10 to protect a cloud-native REST API from Server-Side Request Forgery (SSRF) and Broken Object Level Authorization (BOLA).",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Mitigating Injection, Broken Object Level Authorization (BOLA), SSRF, and Cross-Site Scripting (XSS) is under consideration.",
    options: [
      { id: 'A', text: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call." },
      { id: 'B', text: "Trust all incoming user input parameters without validation or sanitization." },
      { id: 'C', text: "Rely on simple obfuscation techniques like base64 encoding to protect sensitive API endpoints." },
      { id: 'D', text: "Disable API authentication to simplify client application development." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call. The OWASP Top 10 highlights critical web flaws. Mitigating Server-Side Request Forgery (SSRF) requires strict URL allowlisting and blocking access to cloud metadata services (`169.254.169.254`). Mitigating BOLA/IDOR requires verifying that the authenticated user explicitly owns the requested object ID.",
    referenceUrl: "https://owasp.org/www-project-top-ten/",
    tags: ["OWASP Top 10", "OWASP Top 10", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-388",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "OWASP Top 10 Web Application Vulnerabilities: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates OWASP Top 10 to protect a cloud-native REST API from Server-Side Request Forgery (SSRF) and Broken Object Level Authorization (BOLA).",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Mitigating Injection, Broken Object Level Authorization (BOLA), SSRF, and Cross-Site Scripting (XSS) is under consideration.",
    options: [
      { id: 'A', text: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call." },
      { id: 'B', text: "Trust all incoming user input parameters without validation or sanitization." },
      { id: 'C', text: "Rely on simple obfuscation techniques like base64 encoding to protect sensitive API endpoints." },
      { id: 'D', text: "Disable API authentication to simplify client application development." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call. The OWASP Top 10 highlights critical web flaws. Mitigating Server-Side Request Forgery (SSRF) requires strict URL allowlisting and blocking access to cloud metadata services (`169.254.169.254`). Mitigating BOLA/IDOR requires verifying that the authenticated user explicitly owns the requested object ID.",
    referenceUrl: "https://owasp.org/www-project-top-ten/",
    tags: ["OWASP Top 10", "OWASP Top 10", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-389",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "OWASP Top 10 Web Application Vulnerabilities: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates OWASP Top 10 to protect a cloud-native REST API from Server-Side Request Forgery (SSRF) and Broken Object Level Authorization (BOLA).",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Mitigating Injection, Broken Object Level Authorization (BOLA), SSRF, and Cross-Site Scripting (XSS) is under consideration.",
    options: [
      { id: 'A', text: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call." },
      { id: 'B', text: "Trust all incoming user input parameters without validation or sanitization." },
      { id: 'C', text: "Rely on simple obfuscation techniques like base64 encoding to protect sensitive API endpoints." },
      { id: 'D', text: "Disable API authentication to simplify client application development." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call. The OWASP Top 10 highlights critical web flaws. Mitigating Server-Side Request Forgery (SSRF) requires strict URL allowlisting and blocking access to cloud metadata services (`169.254.169.254`). Mitigating BOLA/IDOR requires verifying that the authenticated user explicitly owns the requested object ID.",
    referenceUrl: "https://owasp.org/www-project-top-ten/",
    tags: ["OWASP Top 10", "OWASP Top 10", "Application Secops"]
  },
  {
    id: "isc2-ccsp-390",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "OWASP Top 10 Web Application Vulnerabilities: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates OWASP Top 10 to protect a cloud-native REST API from Server-Side Request Forgery (SSRF) and Broken Object Level Authorization (BOLA).",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Mitigating Injection, Broken Object Level Authorization (BOLA), SSRF, and Cross-Site Scripting (XSS) is under consideration.",
    options: [
      { id: 'A', text: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call." },
      { id: 'B', text: "Trust all incoming user input parameters without validation or sanitization." },
      { id: 'C', text: "Rely on simple obfuscation techniques like base64 encoding to protect sensitive API endpoints." },
      { id: 'D', text: "Disable API authentication to simplify client application development." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce parameterized input validation, restrict outbound HTTP requests via egress proxies, and validate object ownership on every API call. The OWASP Top 10 highlights critical web flaws. Mitigating Server-Side Request Forgery (SSRF) requires strict URL allowlisting and blocking access to cloud metadata services (`169.254.169.254`). Mitigating BOLA/IDOR requires verifying that the authenticated user explicitly owns the requested object ID.",
    referenceUrl: "https://owasp.org/www-project-top-ten/",
    tags: ["OWASP Top 10", "OWASP Top 10", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-391",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Static and Dynamic Application Security Testing (SAST vs DAST): Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates SAST vs DAST to select the appropriate automated testing methodologies to catch both code-level flaws and runtime configuration vulnerabilities.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Comparing white-box static code analysis with black-box dynamic runtime vulnerability testing is under consideration.",
    options: [
      { id: 'A', text: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints)." },
      { id: 'B', text: "Use SAST alone and assume running server configurations and HTTP headers are completely secure." },
      { id: 'C', text: "Use DAST alone and skip analyzing underlying application source code." },
      { id: 'D', text: "Eliminate automated testing and rely exclusively on customer bug reports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints). SAST (Static Application Security Testing) is white-box testing that inspects uncompiled source code for logic bugs, SQL injection, and buffer overflows. DAST (Dynamic Application Security Testing) is black-box testing that evaluates running applications from the outside, detecting runtime misconfigurations and authentication flaws.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/static_analysis",
    tags: ["SAST vs DAST", "SAST vs DAST", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-392",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Static and Dynamic Application Security Testing (SAST vs DAST): Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates SAST vs DAST to select the appropriate automated testing methodologies to catch both code-level flaws and runtime configuration vulnerabilities.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Comparing white-box static code analysis with black-box dynamic runtime vulnerability testing is under consideration.",
    options: [
      { id: 'A', text: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints)." },
      { id: 'B', text: "Use SAST alone and assume running server configurations and HTTP headers are completely secure." },
      { id: 'C', text: "Use DAST alone and skip analyzing underlying application source code." },
      { id: 'D', text: "Eliminate automated testing and rely exclusively on customer bug reports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints). SAST (Static Application Security Testing) is white-box testing that inspects uncompiled source code for logic bugs, SQL injection, and buffer overflows. DAST (Dynamic Application Security Testing) is black-box testing that evaluates running applications from the outside, detecting runtime misconfigurations and authentication flaws.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/static_analysis",
    tags: ["SAST vs DAST", "SAST vs DAST", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-393",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Static and Dynamic Application Security Testing (SAST vs DAST): Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates SAST vs DAST to select the appropriate automated testing methodologies to catch both code-level flaws and runtime configuration vulnerabilities.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Comparing white-box static code analysis with black-box dynamic runtime vulnerability testing is under consideration.",
    options: [
      { id: 'A', text: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints)." },
      { id: 'B', text: "Use SAST alone and assume running server configurations and HTTP headers are completely secure." },
      { id: 'C', text: "Use DAST alone and skip analyzing underlying application source code." },
      { id: 'D', text: "Eliminate automated testing and rely exclusively on customer bug reports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints). SAST (Static Application Security Testing) is white-box testing that inspects uncompiled source code for logic bugs, SQL injection, and buffer overflows. DAST (Dynamic Application Security Testing) is black-box testing that evaluates running applications from the outside, detecting runtime misconfigurations and authentication flaws.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/static_analysis",
    tags: ["SAST vs DAST", "SAST vs DAST", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-394",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Static and Dynamic Application Security Testing (SAST vs DAST): Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates SAST vs DAST to select the appropriate automated testing methodologies to catch both code-level flaws and runtime configuration vulnerabilities.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Comparing white-box static code analysis with black-box dynamic runtime vulnerability testing is under consideration.",
    options: [
      { id: 'A', text: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints)." },
      { id: 'B', text: "Use SAST alone and assume running server configurations and HTTP headers are completely secure." },
      { id: 'C', text: "Use DAST alone and skip analyzing underlying application source code." },
      { id: 'D', text: "Eliminate automated testing and rely exclusively on customer bug reports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints). SAST (Static Application Security Testing) is white-box testing that inspects uncompiled source code for logic bugs, SQL injection, and buffer overflows. DAST (Dynamic Application Security Testing) is black-box testing that evaluates running applications from the outside, detecting runtime misconfigurations and authentication flaws.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/static_analysis",
    tags: ["SAST vs DAST", "SAST vs DAST", "Application Secops"]
  },
  {
    id: "isc2-ccsp-395",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Static and Dynamic Application Security Testing (SAST vs DAST): Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates SAST vs DAST to select the appropriate automated testing methodologies to catch both code-level flaws and runtime configuration vulnerabilities.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Comparing white-box static code analysis with black-box dynamic runtime vulnerability testing is under consideration.",
    options: [
      { id: 'A', text: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints)." },
      { id: 'B', text: "Use SAST alone and assume running server configurations and HTTP headers are completely secure." },
      { id: 'C', text: "Use DAST alone and skip analyzing underlying application source code." },
      { id: 'D', text: "Eliminate automated testing and rely exclusively on customer bug reports." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Combine SAST (white-box analysis of source code in CI) with DAST (black-box runtime testing of running application endpoints). SAST (Static Application Security Testing) is white-box testing that inspects uncompiled source code for logic bugs, SQL injection, and buffer overflows. DAST (Dynamic Application Security Testing) is black-box testing that evaluates running applications from the outside, detecting runtime misconfigurations and authentication flaws.",
    referenceUrl: "https://csrc.nist.gov/glossary/term/static_analysis",
    tags: ["SAST vs DAST", "SAST vs DAST", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-396",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Web Application Firewalls (WAF) and Layer 7 Defense: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Cloud WAF to shield an internet-facing cloud banking portal from zero-day web exploits and distributed layer 7 HTTP floods.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Inspecting HTTP/HTTPS traffic, blocking SQLi/XSS, and enforcing rate limiting at the application edge is under consideration.",
    options: [
      { id: 'A', text: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting." },
      { id: 'B', text: "Rely on network layer 4 firewalls that cannot inspect HTTP payload contents or URL parameters." },
      { id: 'C', text: "Turn off TLS inspection to allow all encrypted web traffic to bypass security checks." },
      { id: 'D', text: "Shut down the web server whenever suspicious HTTP traffic is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting. A Web Application Firewall (WAF) operates at Layer 7 (application layer) of the OSI model. It inspects bidirectional HTTP/S traffic, evaluating request headers, cookies, and POST bodies against rule sets (e.g., OWASP Top 10 rulesets) to block SQLi, XSS, and botnets before reaching the application.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud WAF", "Cloud WAF", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-397",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Web Application Firewalls (WAF) and Layer 7 Defense: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Cloud WAF to shield an internet-facing cloud banking portal from zero-day web exploits and distributed layer 7 HTTP floods.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Inspecting HTTP/HTTPS traffic, blocking SQLi/XSS, and enforcing rate limiting at the application edge is under consideration.",
    options: [
      { id: 'A', text: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting." },
      { id: 'B', text: "Rely on network layer 4 firewalls that cannot inspect HTTP payload contents or URL parameters." },
      { id: 'C', text: "Turn off TLS inspection to allow all encrypted web traffic to bypass security checks." },
      { id: 'D', text: "Shut down the web server whenever suspicious HTTP traffic is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting. A Web Application Firewall (WAF) operates at Layer 7 (application layer) of the OSI model. It inspects bidirectional HTTP/S traffic, evaluating request headers, cookies, and POST bodies against rule sets (e.g., OWASP Top 10 rulesets) to block SQLi, XSS, and botnets before reaching the application.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud WAF", "Cloud WAF", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-398",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Web Application Firewalls (WAF) and Layer 7 Defense: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Cloud WAF to shield an internet-facing cloud banking portal from zero-day web exploits and distributed layer 7 HTTP floods.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Inspecting HTTP/HTTPS traffic, blocking SQLi/XSS, and enforcing rate limiting at the application edge is under consideration.",
    options: [
      { id: 'A', text: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting." },
      { id: 'B', text: "Rely on network layer 4 firewalls that cannot inspect HTTP payload contents or URL parameters." },
      { id: 'C', text: "Turn off TLS inspection to allow all encrypted web traffic to bypass security checks." },
      { id: 'D', text: "Shut down the web server whenever suspicious HTTP traffic is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting. A Web Application Firewall (WAF) operates at Layer 7 (application layer) of the OSI model. It inspects bidirectional HTTP/S traffic, evaluating request headers, cookies, and POST bodies against rule sets (e.g., OWASP Top 10 rulesets) to block SQLi, XSS, and botnets before reaching the application.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud WAF", "Cloud WAF", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-399",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Web Application Firewalls (WAF) and Layer 7 Defense: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Cloud WAF to shield an internet-facing cloud banking portal from zero-day web exploits and distributed layer 7 HTTP floods.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Inspecting HTTP/HTTPS traffic, blocking SQLi/XSS, and enforcing rate limiting at the application edge is under consideration.",
    options: [
      { id: 'A', text: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting." },
      { id: 'B', text: "Rely on network layer 4 firewalls that cannot inspect HTTP payload contents or URL parameters." },
      { id: 'C', text: "Turn off TLS inspection to allow all encrypted web traffic to bypass security checks." },
      { id: 'D', text: "Shut down the web server whenever suspicious HTTP traffic is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting. A Web Application Firewall (WAF) operates at Layer 7 (application layer) of the OSI model. It inspects bidirectional HTTP/S traffic, evaluating request headers, cookies, and POST bodies against rule sets (e.g., OWASP Top 10 rulesets) to block SQLi, XSS, and botnets before reaching the application.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud WAF", "Cloud WAF", "Application Secops"]
  },
  {
    id: "isc2-ccsp-400",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d4",
    domainName: "Cloud Application Security",
    title: "Web Application Firewalls (WAF) and Layer 7 Defense: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Cloud WAF to shield an internet-facing cloud banking portal from zero-day web exploits and distributed layer 7 HTTP floods.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Inspecting HTTP/HTTPS traffic, blocking SQLi/XSS, and enforcing rate limiting at the application edge is under consideration.",
    options: [
      { id: 'A', text: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting." },
      { id: 'B', text: "Rely on network layer 4 firewalls that cannot inspect HTTP payload contents or URL parameters." },
      { id: 'C', text: "Turn off TLS inspection to allow all encrypted web traffic to bypass security checks." },
      { id: 'D', text: "Shut down the web server whenever suspicious HTTP traffic is detected." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a cloud Web Application Firewall (WAF) at the edge, enforcing managed rule sets (OWASP Core Rule Set) and rate limiting. A Web Application Firewall (WAF) operates at Layer 7 (application layer) of the OSI model. It inspects bidirectional HTTP/S traffic, evaluating request headers, cookies, and POST bodies against rule sets (e.g., OWASP Top 10 rulesets) to block SQLi, XSS, and botnets before reaching the application.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Cloud WAF", "Cloud WAF", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_16;
