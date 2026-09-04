export const ISC2_CCSP_QUESTIONS_11 = [
  {
    id: "isc2-ccsp-251",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "NIST SP 800-145 Essential Cloud Characteristics: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates NIST Cloud Characteristics to verify whether an internal IT virtualization platform meets the official NIST definition of cloud computing.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? On-demand self-service, broad network access, resource pooling, rapid elasticity, measured service is under consideration.",
    options: [
      { id: 'A', text: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service." },
      { id: 'B', text: "Disable resource metering and usage accounting across all tenant workloads." },
      { id: 'C', text: "Assume that running VMware ESXi on dedicated local servers automatically constitutes cloud computing." },
      { id: 'D', text: "Require manual IT administrator approvals via paper ticketing for every single resource allocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. NIST SP 800-145 defines five essential characteristics of cloud computing: on-demand self-service, broad network access, resource pooling (multi-tenancy), rapid elasticity (scaling up and down dynamically), and measured service (metered billing and capacity tracking). All five must be present.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["NIST Cloud Characteristics", "NIST Characteristics", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-252",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "NIST SP 800-145 Essential Cloud Characteristics: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates NIST Cloud Characteristics to verify whether an internal IT virtualization platform meets the official NIST definition of cloud computing.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? On-demand self-service, broad network access, resource pooling, rapid elasticity, measured service is under consideration.",
    options: [
      { id: 'A', text: "Disable resource metering and usage accounting across all tenant workloads." },
      { id: 'B', text: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service." },
      { id: 'C', text: "Require manual IT administrator approvals via paper ticketing for every single resource allocation." },
      { id: 'D', text: "Assume that running VMware ESXi on dedicated local servers automatically constitutes cloud computing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. NIST SP 800-145 defines five essential characteristics of cloud computing: on-demand self-service, broad network access, resource pooling (multi-tenancy), rapid elasticity (scaling up and down dynamically), and measured service (metered billing and capacity tracking). All five must be present.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["NIST Cloud Characteristics", "NIST Characteristics", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-253",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "NIST SP 800-145 Essential Cloud Characteristics: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates NIST Cloud Characteristics to verify whether an internal IT virtualization platform meets the official NIST definition of cloud computing.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? On-demand self-service, broad network access, resource pooling, rapid elasticity, measured service is under consideration.",
    options: [
      { id: 'A', text: "Assume that running VMware ESXi on dedicated local servers automatically constitutes cloud computing." },
      { id: 'B', text: "Disable resource metering and usage accounting across all tenant workloads." },
      { id: 'C', text: "Require manual IT administrator approvals via paper ticketing for every single resource allocation." },
      { id: 'D', text: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. NIST SP 800-145 defines five essential characteristics of cloud computing: on-demand self-service, broad network access, resource pooling (multi-tenancy), rapid elasticity (scaling up and down dynamically), and measured service (metered billing and capacity tracking). All five must be present.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["NIST Cloud Characteristics", "NIST Characteristics", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-254",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "NIST SP 800-145 Essential Cloud Characteristics: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates NIST Cloud Characteristics to verify whether an internal IT virtualization platform meets the official NIST definition of cloud computing.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? On-demand self-service, broad network access, resource pooling, rapid elasticity, measured service is under consideration.",
    options: [
      { id: 'A', text: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service." },
      { id: 'B', text: "Disable resource metering and usage accounting across all tenant workloads." },
      { id: 'C', text: "Require manual IT administrator approvals via paper ticketing for every single resource allocation." },
      { id: 'D', text: "Assume that running VMware ESXi on dedicated local servers automatically constitutes cloud computing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. NIST SP 800-145 defines five essential characteristics of cloud computing: on-demand self-service, broad network access, resource pooling (multi-tenancy), rapid elasticity (scaling up and down dynamically), and measured service (metered billing and capacity tracking). All five must be present.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["NIST Cloud Characteristics", "NIST Characteristics", "Application Secops"]
  },
  {
    id: "isc2-ccsp-255",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "NIST SP 800-145 Essential Cloud Characteristics: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates NIST Cloud Characteristics to verify whether an internal IT virtualization platform meets the official NIST definition of cloud computing.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? On-demand self-service, broad network access, resource pooling, rapid elasticity, measured service is under consideration.",
    options: [
      { id: 'A', text: "Disable resource metering and usage accounting across all tenant workloads." },
      { id: 'B', text: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service." },
      { id: 'C', text: "Assume that running VMware ESXi on dedicated local servers automatically constitutes cloud computing." },
      { id: 'D', text: "Require manual IT administrator approvals via paper ticketing for every single resource allocation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Evaluate the environment against all five NIST SP 800-145 essential characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service. NIST SP 800-145 defines five essential characteristics of cloud computing: on-demand self-service, broad network access, resource pooling (multi-tenancy), rapid elasticity (scaling up and down dynamically), and measured service (metered billing and capacity tracking). All five must be present.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["NIST Cloud Characteristics", "NIST Characteristics", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-256",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Service Models and Shared Responsibility: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Shared Responsibility to determine whether the cloud customer or the cloud service provider is responsible for operating system patching in PaaS.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Division of security governance across IaaS, PaaS, and SaaS service delivery tiers is under consideration.",
    options: [
      { id: 'A', text: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data." },
      { id: 'B', text: "Assume the customer is responsible for physical data center server maintenance in SaaS." },
      { id: 'C', text: "Assume the cloud provider is responsible for customer application data classification and access policies in IaaS." },
      { id: 'D', text: "Hold the cloud provider legally liable for customer application logic vulnerabilities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data. Under the Shared Responsibility Model, security obligations shift with the service tier: in IaaS, the customer manages the OS, middleware, and applications; in PaaS, the CSP manages the hardware, network, and OS, while the customer manages application code and data; in SaaS, the CSP manages almost the entire stack, while the customer retains data governance.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Shared Responsibility", "Shared Responsibility", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-257",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Service Models and Shared Responsibility: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Shared Responsibility to determine whether the cloud customer or the cloud service provider is responsible for operating system patching in PaaS.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Division of security governance across IaaS, PaaS, and SaaS service delivery tiers is under consideration.",
    options: [
      { id: 'A', text: "Assume the cloud provider is responsible for customer application data classification and access policies in IaaS." },
      { id: 'B', text: "Hold the cloud provider legally liable for customer application logic vulnerabilities." },
      { id: 'C', text: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data." },
      { id: 'D', text: "Assume the customer is responsible for physical data center server maintenance in SaaS." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data. Under the Shared Responsibility Model, security obligations shift with the service tier: in IaaS, the customer manages the OS, middleware, and applications; in PaaS, the CSP manages the hardware, network, and OS, while the customer manages application code and data; in SaaS, the CSP manages almost the entire stack, while the customer retains data governance.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Shared Responsibility", "Shared Responsibility", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-258",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Service Models and Shared Responsibility: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Shared Responsibility to determine whether the cloud customer or the cloud service provider is responsible for operating system patching in PaaS.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Division of security governance across IaaS, PaaS, and SaaS service delivery tiers is under consideration.",
    options: [
      { id: 'A', text: "Assume the cloud provider is responsible for customer application data classification and access policies in IaaS." },
      { id: 'B', text: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data." },
      { id: 'C', text: "Assume the customer is responsible for physical data center server maintenance in SaaS." },
      { id: 'D', text: "Hold the cloud provider legally liable for customer application logic vulnerabilities." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data. Under the Shared Responsibility Model, security obligations shift with the service tier: in IaaS, the customer manages the OS, middleware, and applications; in PaaS, the CSP manages the hardware, network, and OS, while the customer manages application code and data; in SaaS, the CSP manages almost the entire stack, while the customer retains data governance.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Shared Responsibility", "Shared Responsibility", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-259",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Service Models and Shared Responsibility: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Shared Responsibility to determine whether the cloud customer or the cloud service provider is responsible for operating system patching in PaaS.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Division of security governance across IaaS, PaaS, and SaaS service delivery tiers is under consideration.",
    options: [
      { id: 'A', text: "Assume the cloud provider is responsible for customer application data classification and access policies in IaaS." },
      { id: 'B', text: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data." },
      { id: 'C', text: "Hold the cloud provider legally liable for customer application logic vulnerabilities." },
      { id: 'D', text: "Assume the customer is responsible for physical data center server maintenance in SaaS." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data. Under the Shared Responsibility Model, security obligations shift with the service tier: in IaaS, the customer manages the OS, middleware, and applications; in PaaS, the CSP manages the hardware, network, and OS, while the customer manages application code and data; in SaaS, the CSP manages almost the entire stack, while the customer retains data governance.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Shared Responsibility", "Shared Responsibility", "Application Secops"]
  },
  {
    id: "isc2-ccsp-260",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Service Models and Shared Responsibility: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Shared Responsibility to determine whether the cloud customer or the cloud service provider is responsible for operating system patching in PaaS.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Division of security governance across IaaS, PaaS, and SaaS service delivery tiers is under consideration.",
    options: [
      { id: 'A', text: "Hold the cloud provider legally liable for customer application logic vulnerabilities." },
      { id: 'B', text: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data." },
      { id: 'C', text: "Assume the cloud provider is responsible for customer application data classification and access policies in IaaS." },
      { id: 'D', text: "Assume the customer is responsible for physical data center server maintenance in SaaS." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Recognize that in PaaS (e.g., AWS Elastic Beanstalk, Azure App Service), the CSP manages the underlying OS and runtime, while the customer secures application code and data. Under the Shared Responsibility Model, security obligations shift with the service tier: in IaaS, the customer manages the OS, middleware, and applications; in PaaS, the CSP manages the hardware, network, and OS, while the customer manages application code and data; in SaaS, the CSP manages almost the entire stack, while the customer retains data governance.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Shared Responsibility", "Shared Responsibility", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-261",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Deployment Models: Public, Private, Hybrid, Community: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Deployment Models to design an infrastructure architecture for several regional hospitals sharing medical research data under common compliance rules.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Architectural trade-offs of multi-tenant public, dedicated private, hybrid, and consortium community clouds is under consideration.",
    options: [
      { id: 'A', text: "Deploy all sensitive patient health records to a public unauthenticated web hosting server." },
      { id: 'B', text: "Store healthcare records on unencrypted consumer USB drives mailed between hospitals." },
      { id: 'C', text: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements." },
      { id: 'D', text: "Build completely disconnected on-premises silos that prohibit data sharing between institutions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements. NIST defines four deployment models: Public (multi-tenant, open to general public), Private (dedicated solely to a single organization), Community (shared by organizations with shared compliance or mission concerns), and Hybrid (composition of two or more distinct cloud models bound by standardized technology).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["Deployment Models", "Deployment Models", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-262",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Deployment Models: Public, Private, Hybrid, Community: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Deployment Models to design an infrastructure architecture for several regional hospitals sharing medical research data under common compliance rules.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Architectural trade-offs of multi-tenant public, dedicated private, hybrid, and consortium community clouds is under consideration.",
    options: [
      { id: 'A', text: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements." },
      { id: 'B', text: "Store healthcare records on unencrypted consumer USB drives mailed between hospitals." },
      { id: 'C', text: "Build completely disconnected on-premises silos that prohibit data sharing between institutions." },
      { id: 'D', text: "Deploy all sensitive patient health records to a public unauthenticated web hosting server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements. NIST defines four deployment models: Public (multi-tenant, open to general public), Private (dedicated solely to a single organization), Community (shared by organizations with shared compliance or mission concerns), and Hybrid (composition of two or more distinct cloud models bound by standardized technology).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["Deployment Models", "Deployment Models", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-263",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Deployment Models: Public, Private, Hybrid, Community: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Deployment Models to design an infrastructure architecture for several regional hospitals sharing medical research data under common compliance rules.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Architectural trade-offs of multi-tenant public, dedicated private, hybrid, and consortium community clouds is under consideration.",
    options: [
      { id: 'A', text: "Deploy all sensitive patient health records to a public unauthenticated web hosting server." },
      { id: 'B', text: "Store healthcare records on unencrypted consumer USB drives mailed between hospitals." },
      { id: 'C', text: "Build completely disconnected on-premises silos that prohibit data sharing between institutions." },
      { id: 'D', text: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements. NIST defines four deployment models: Public (multi-tenant, open to general public), Private (dedicated solely to a single organization), Community (shared by organizations with shared compliance or mission concerns), and Hybrid (composition of two or more distinct cloud models bound by standardized technology).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["Deployment Models", "Deployment Models", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-264",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Deployment Models: Public, Private, Hybrid, Community: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Deployment Models to design an infrastructure architecture for several regional hospitals sharing medical research data under common compliance rules.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Architectural trade-offs of multi-tenant public, dedicated private, hybrid, and consortium community clouds is under consideration.",
    options: [
      { id: 'A', text: "Build completely disconnected on-premises silos that prohibit data sharing between institutions." },
      { id: 'B', text: "Store healthcare records on unencrypted consumer USB drives mailed between hospitals." },
      { id: 'C', text: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements." },
      { id: 'D', text: "Deploy all sensitive patient health records to a public unauthenticated web hosting server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements. NIST defines four deployment models: Public (multi-tenant, open to general public), Private (dedicated solely to a single organization), Community (shared by organizations with shared compliance or mission concerns), and Hybrid (composition of two or more distinct cloud models bound by standardized technology).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["Deployment Models", "Deployment Models", "Application Secops"]
  },
  {
    id: "isc2-ccsp-265",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Deployment Models: Public, Private, Hybrid, Community: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Deployment Models to design an infrastructure architecture for several regional hospitals sharing medical research data under common compliance rules.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Architectural trade-offs of multi-tenant public, dedicated private, hybrid, and consortium community clouds is under consideration.",
    options: [
      { id: 'A', text: "Build completely disconnected on-premises silos that prohibit data sharing between institutions." },
      { id: 'B', text: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements." },
      { id: 'C', text: "Deploy all sensitive patient health records to a public unauthenticated web hosting server." },
      { id: 'D', text: "Store healthcare records on unencrypted consumer USB drives mailed between hospitals." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy a Community Cloud shared exclusively by organizations with common security, regulatory, and mission requirements. NIST defines four deployment models: Public (multi-tenant, open to general public), Private (dedicated solely to a single organization), Community (shared by organizations with shared compliance or mission concerns), and Hybrid (composition of two or more distinct cloud models bound by standardized technology).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-145/final",
    tags: ["Deployment Models", "Deployment Models", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-266",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM): Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates CSA CCM & CAIQ to systematically assess and compare the security posture and baseline controls of three commercial cloud service providers.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Standardizing cloud security assessments via the 17 domains of the Cloud Controls Matrix is under consideration.",
    options: [
      { id: 'A', text: "Rely on marketing brochures and unverified sales claims provided by vendor representatives." },
      { id: 'B', text: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ)." },
      { id: 'C', text: "Assume all cloud providers have identical security capabilities and choose solely based on cheapest price." },
      { id: 'D', text: "Hire private investigators to inspect vendor server facilities without permission." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ). The CSA Cloud Controls Matrix (CCM) provides a cybersecurity control framework covering 17 domains across cloud technology. Together with the CAIQ (Consensus Assessments Initiative Questionnaire) and the CSA STAR registry, it allows organizations to benchmark and verify provider controls against international standards.",
    referenceUrl: "https://cloudsecurityalliance.org/research/cloud-controls-matrix/",
    tags: ["CSA CCM & CAIQ", "CSA CCM", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-267",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM): Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates CSA CCM & CAIQ to systematically assess and compare the security posture and baseline controls of three commercial cloud service providers.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Standardizing cloud security assessments via the 17 domains of the Cloud Controls Matrix is under consideration.",
    options: [
      { id: 'A', text: "Rely on marketing brochures and unverified sales claims provided by vendor representatives." },
      { id: 'B', text: "Assume all cloud providers have identical security capabilities and choose solely based on cheapest price." },
      { id: 'C', text: "Hire private investigators to inspect vendor server facilities without permission." },
      { id: 'D', text: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ). The CSA Cloud Controls Matrix (CCM) provides a cybersecurity control framework covering 17 domains across cloud technology. Together with the CAIQ (Consensus Assessments Initiative Questionnaire) and the CSA STAR registry, it allows organizations to benchmark and verify provider controls against international standards.",
    referenceUrl: "https://cloudsecurityalliance.org/research/cloud-controls-matrix/",
    tags: ["CSA CCM & CAIQ", "CSA CCM", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-268",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM): Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates CSA CCM & CAIQ to systematically assess and compare the security posture and baseline controls of three commercial cloud service providers.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Standardizing cloud security assessments via the 17 domains of the Cloud Controls Matrix is under consideration.",
    options: [
      { id: 'A', text: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ)." },
      { id: 'B', text: "Hire private investigators to inspect vendor server facilities without permission." },
      { id: 'C', text: "Assume all cloud providers have identical security capabilities and choose solely based on cheapest price." },
      { id: 'D', text: "Rely on marketing brochures and unverified sales claims provided by vendor representatives." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ). The CSA Cloud Controls Matrix (CCM) provides a cybersecurity control framework covering 17 domains across cloud technology. Together with the CAIQ (Consensus Assessments Initiative Questionnaire) and the CSA STAR registry, it allows organizations to benchmark and verify provider controls against international standards.",
    referenceUrl: "https://cloudsecurityalliance.org/research/cloud-controls-matrix/",
    tags: ["CSA CCM & CAIQ", "CSA CCM", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-269",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM): Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates CSA CCM & CAIQ to systematically assess and compare the security posture and baseline controls of three commercial cloud service providers.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Standardizing cloud security assessments via the 17 domains of the Cloud Controls Matrix is under consideration.",
    options: [
      { id: 'A', text: "Assume all cloud providers have identical security capabilities and choose solely based on cheapest price." },
      { id: 'B', text: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ)." },
      { id: 'C', text: "Rely on marketing brochures and unverified sales claims provided by vendor representatives." },
      { id: 'D', text: "Hire private investigators to inspect vendor server facilities without permission." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ). The CSA Cloud Controls Matrix (CCM) provides a cybersecurity control framework covering 17 domains across cloud technology. Together with the CAIQ (Consensus Assessments Initiative Questionnaire) and the CSA STAR registry, it allows organizations to benchmark and verify provider controls against international standards.",
    referenceUrl: "https://cloudsecurityalliance.org/research/cloud-controls-matrix/",
    tags: ["CSA CCM & CAIQ", "CSA CCM", "Application Secops"]
  },
  {
    id: "isc2-ccsp-270",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM): Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates CSA CCM & CAIQ to systematically assess and compare the security posture and baseline controls of three commercial cloud service providers.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Standardizing cloud security assessments via the 17 domains of the Cloud Controls Matrix is under consideration.",
    options: [
      { id: 'A', text: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ)." },
      { id: 'B', text: "Rely on marketing brochures and unverified sales claims provided by vendor representatives." },
      { id: 'C', text: "Hire private investigators to inspect vendor server facilities without permission." },
      { id: 'D', text: "Assume all cloud providers have identical security capabilities and choose solely based on cheapest price." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use the Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM) and Consensus Assessments Initiative Questionnaire (CAIQ). The CSA Cloud Controls Matrix (CCM) provides a cybersecurity control framework covering 17 domains across cloud technology. Together with the CAIQ (Consensus Assessments Initiative Questionnaire) and the CSA STAR registry, it allows organizations to benchmark and verify provider controls against international standards.",
    referenceUrl: "https://cloudsecurityalliance.org/research/cloud-controls-matrix/",
    tags: ["CSA CCM & CAIQ", "CSA CCM", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-271",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Zero Trust Architecture in Cloud Systems: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Zero Trust to design access controls for an enterprise cloud environment where network perimeters are no longer sufficient boundaries.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Never trust, always verify: explicit verification, least privilege, and assumed breach is under consideration.",
    options: [
      { id: 'A', text: "Disable multi-factor authentication inside the internal network perimeter." },
      { id: 'B', text: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach." },
      { id: 'C', text: "Trust all network traffic originating from within the internal corporate VPN without re-authenticating." },
      { id: 'D', text: "Grant permanent administrative access to all users connecting from office desktop IP addresses." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach. Zero Trust (NIST SP 800-207) rejects perimeter-based security models. Based on three principles—verify explicitly, use least-privilege access, and assume breach—every access request is dynamically evaluated based on user identity, device posture, location, and data sensitivity before granting access.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    tags: ["Zero Trust", "Zero Trust", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-272",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Zero Trust Architecture in Cloud Systems: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Zero Trust to design access controls for an enterprise cloud environment where network perimeters are no longer sufficient boundaries.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Never trust, always verify: explicit verification, least privilege, and assumed breach is under consideration.",
    options: [
      { id: 'A', text: "Disable multi-factor authentication inside the internal network perimeter." },
      { id: 'B', text: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach." },
      { id: 'C', text: "Trust all network traffic originating from within the internal corporate VPN without re-authenticating." },
      { id: 'D', text: "Grant permanent administrative access to all users connecting from office desktop IP addresses." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach. Zero Trust (NIST SP 800-207) rejects perimeter-based security models. Based on three principles—verify explicitly, use least-privilege access, and assume breach—every access request is dynamically evaluated based on user identity, device posture, location, and data sensitivity before granting access.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    tags: ["Zero Trust", "Zero Trust", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-273",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Zero Trust Architecture in Cloud Systems: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Zero Trust to design access controls for an enterprise cloud environment where network perimeters are no longer sufficient boundaries.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Never trust, always verify: explicit verification, least privilege, and assumed breach is under consideration.",
    options: [
      { id: 'A', text: "Grant permanent administrative access to all users connecting from office desktop IP addresses." },
      { id: 'B', text: "Disable multi-factor authentication inside the internal network perimeter." },
      { id: 'C', text: "Trust all network traffic originating from within the internal corporate VPN without re-authenticating." },
      { id: 'D', text: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach. Zero Trust (NIST SP 800-207) rejects perimeter-based security models. Based on three principles—verify explicitly, use least-privilege access, and assume breach—every access request is dynamically evaluated based on user identity, device posture, location, and data sensitivity before granting access.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    tags: ["Zero Trust", "Zero Trust", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-274",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Zero Trust Architecture in Cloud Systems: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Zero Trust to design access controls for an enterprise cloud environment where network perimeters are no longer sufficient boundaries.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Never trust, always verify: explicit verification, least privilege, and assumed breach is under consideration.",
    options: [
      { id: 'A', text: "Trust all network traffic originating from within the internal corporate VPN without re-authenticating." },
      { id: 'B', text: "Disable multi-factor authentication inside the internal network perimeter." },
      { id: 'C', text: "Grant permanent administrative access to all users connecting from office desktop IP addresses." },
      { id: 'D', text: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach. Zero Trust (NIST SP 800-207) rejects perimeter-based security models. Based on three principles—verify explicitly, use least-privilege access, and assume breach—every access request is dynamically evaluated based on user identity, device posture, location, and data sensitivity before granting access.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    tags: ["Zero Trust", "Zero Trust", "Application Secops"]
  },
  {
    id: "isc2-ccsp-275",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d1",
    domainName: "Cloud Concepts, Architecture and Design",
    title: "Zero Trust Architecture in Cloud Systems: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Zero Trust to design access controls for an enterprise cloud environment where network perimeters are no longer sufficient boundaries.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Never trust, always verify: explicit verification, least privilege, and assumed breach is under consideration.",
    options: [
      { id: 'A', text: "Trust all network traffic originating from within the internal corporate VPN without re-authenticating." },
      { id: 'B', text: "Grant permanent administrative access to all users connecting from office desktop IP addresses." },
      { id: 'C', text: "Disable multi-factor authentication inside the internal network perimeter." },
      { id: 'D', text: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Zero Trust Architecture (ZTA): enforce explicit continuous authentication, least-privilege access, and assume breach. Zero Trust (NIST SP 800-207) rejects perimeter-based security models. Based on three principles—verify explicitly, use least-privilege access, and assume breach—every access request is dynamically evaluated based on user identity, device posture, location, and data sensitivity before granting access.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    tags: ["Zero Trust", "Zero Trust", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_11;
