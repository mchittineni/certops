export const ISC2_CCSP_QUESTIONS_15 = [
  {
    id: "isc2-ccsp-351",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Immutable Infrastructure and Golden Images: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Immutable Infrastructure to prevent configuration drift and ensure that production cloud servers cannot be modified by interactive human administrator sessions.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Eliminating configuration drift and unauthorized modifications by replacing rather than patching instances is under consideration.",
    options: [
      { id: 'A', text: "Allow system administrators to log into live production servers via SSH and apply ad-hoc software patches manually." },
      { id: 'B', text: "Disable version control for server configuration scripts." },
      { id: 'C', text: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates." },
      { id: 'D', text: "Keep servers running continuously for five years without rebuilding base images." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates. Immutable infrastructure dictates that servers are never modified in-place after deployment. When updates or patches are needed, new hardened machine images (Golden AMIs/containers) are built, tested, and deployed to replace running instances, completely eliminating configuration drift and unauthorized backdoors.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Immutable Infrastructure", "Immutable Infrastructure", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-352",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Immutable Infrastructure and Golden Images: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Immutable Infrastructure to prevent configuration drift and ensure that production cloud servers cannot be modified by interactive human administrator sessions.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Eliminating configuration drift and unauthorized modifications by replacing rather than patching instances is under consideration.",
    options: [
      { id: 'A', text: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates." },
      { id: 'B', text: "Allow system administrators to log into live production servers via SSH and apply ad-hoc software patches manually." },
      { id: 'C', text: "Disable version control for server configuration scripts." },
      { id: 'D', text: "Keep servers running continuously for five years without rebuilding base images." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates. Immutable infrastructure dictates that servers are never modified in-place after deployment. When updates or patches are needed, new hardened machine images (Golden AMIs/containers) are built, tested, and deployed to replace running instances, completely eliminating configuration drift and unauthorized backdoors.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Immutable Infrastructure", "Immutable Infrastructure", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-353",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Immutable Infrastructure and Golden Images: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Immutable Infrastructure to prevent configuration drift and ensure that production cloud servers cannot be modified by interactive human administrator sessions.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Eliminating configuration drift and unauthorized modifications by replacing rather than patching instances is under consideration.",
    options: [
      { id: 'A', text: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates." },
      { id: 'B', text: "Keep servers running continuously for five years without rebuilding base images." },
      { id: 'C', text: "Allow system administrators to log into live production servers via SSH and apply ad-hoc software patches manually." },
      { id: 'D', text: "Disable version control for server configuration scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates. Immutable infrastructure dictates that servers are never modified in-place after deployment. When updates or patches are needed, new hardened machine images (Golden AMIs/containers) are built, tested, and deployed to replace running instances, completely eliminating configuration drift and unauthorized backdoors.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Immutable Infrastructure", "Immutable Infrastructure", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-354",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Immutable Infrastructure and Golden Images: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Immutable Infrastructure to prevent configuration drift and ensure that production cloud servers cannot be modified by interactive human administrator sessions.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Eliminating configuration drift and unauthorized modifications by replacing rather than patching instances is under consideration.",
    options: [
      { id: 'A', text: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates." },
      { id: 'B', text: "Keep servers running continuously for five years without rebuilding base images." },
      { id: 'C', text: "Allow system administrators to log into live production servers via SSH and apply ad-hoc software patches manually." },
      { id: 'D', text: "Disable version control for server configuration scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates. Immutable infrastructure dictates that servers are never modified in-place after deployment. When updates or patches are needed, new hardened machine images (Golden AMIs/containers) are built, tested, and deployed to replace running instances, completely eliminating configuration drift and unauthorized backdoors.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Immutable Infrastructure", "Immutable Infrastructure", "Application Secops"]
  },
  {
    id: "isc2-ccsp-355",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Immutable Infrastructure and Golden Images: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Immutable Infrastructure to prevent configuration drift and ensure that production cloud servers cannot be modified by interactive human administrator sessions.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Eliminating configuration drift and unauthorized modifications by replacing rather than patching instances is under consideration.",
    options: [
      { id: 'A', text: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates." },
      { id: 'B', text: "Keep servers running continuously for five years without rebuilding base images." },
      { id: 'C', text: "Allow system administrators to log into live production servers via SSH and apply ad-hoc software patches manually." },
      { id: 'D', text: "Disable version control for server configuration scripts." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Immutable Infrastructure: build hardened Golden Images via automated pipelines, disable SSH access, and replace instances upon updates. Immutable infrastructure dictates that servers are never modified in-place after deployment. When updates or patches are needed, new hardened machine images (Golden AMIs/containers) are built, tested, and deployed to replace running instances, completely eliminating configuration drift and unauthorized backdoors.",
    referenceUrl: "https://cloudsecurityalliance.org/research/guidance/",
    tags: ["Immutable Infrastructure", "Immutable Infrastructure", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-356",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Identity Federation and Single Sign-On Standards: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Identity Federation to allow enterprise employees to access multi-cloud administrative consoles using their corporate credentials without duplicating accounts.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? SAML 2.0, OpenID Connect (OIDC), OAuth 2.0, and SCIM automated identity synchronization is under consideration.",
    options: [
      { id: 'A', text: "Share a single corporate master administrative password among all IT team members." },
      { id: 'B', text: "Disable multi-factor authentication during identity federation to streamline login workflows." },
      { id: 'C', text: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning." },
      { id: 'D', text: "Create local username and password accounts for each employee in every individual cloud service console." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning. Federated Identity Management uses open standards: SAML 2.0 (XML-based assertion exchange for enterprise SSO), OpenID Connect (JSON/REST identity layer on OAuth 2.0), and SCIM (System for Cross-domain Identity Management, automating real-time user lifecycle provisioning and offboarding).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-63/3/final",
    tags: ["Identity Federation", "Identity Federation", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-357",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Identity Federation and Single Sign-On Standards: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Identity Federation to allow enterprise employees to access multi-cloud administrative consoles using their corporate credentials without duplicating accounts.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? SAML 2.0, OpenID Connect (OIDC), OAuth 2.0, and SCIM automated identity synchronization is under consideration.",
    options: [
      { id: 'A', text: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning." },
      { id: 'B', text: "Disable multi-factor authentication during identity federation to streamline login workflows." },
      { id: 'C', text: "Create local username and password accounts for each employee in every individual cloud service console." },
      { id: 'D', text: "Share a single corporate master administrative password among all IT team members." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning. Federated Identity Management uses open standards: SAML 2.0 (XML-based assertion exchange for enterprise SSO), OpenID Connect (JSON/REST identity layer on OAuth 2.0), and SCIM (System for Cross-domain Identity Management, automating real-time user lifecycle provisioning and offboarding).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-63/3/final",
    tags: ["Identity Federation", "Identity Federation", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-358",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Identity Federation and Single Sign-On Standards: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Identity Federation to allow enterprise employees to access multi-cloud administrative consoles using their corporate credentials without duplicating accounts.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? SAML 2.0, OpenID Connect (OIDC), OAuth 2.0, and SCIM automated identity synchronization is under consideration.",
    options: [
      { id: 'A', text: "Share a single corporate master administrative password among all IT team members." },
      { id: 'B', text: "Create local username and password accounts for each employee in every individual cloud service console." },
      { id: 'C', text: "Disable multi-factor authentication during identity federation to streamline login workflows." },
      { id: 'D', text: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning. Federated Identity Management uses open standards: SAML 2.0 (XML-based assertion exchange for enterprise SSO), OpenID Connect (JSON/REST identity layer on OAuth 2.0), and SCIM (System for Cross-domain Identity Management, automating real-time user lifecycle provisioning and offboarding).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-63/3/final",
    tags: ["Identity Federation", "Identity Federation", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-359",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Identity Federation and Single Sign-On Standards: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Identity Federation to allow enterprise employees to access multi-cloud administrative consoles using their corporate credentials without duplicating accounts.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? SAML 2.0, OpenID Connect (OIDC), OAuth 2.0, and SCIM automated identity synchronization is under consideration.",
    options: [
      { id: 'A', text: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning." },
      { id: 'B', text: "Share a single corporate master administrative password among all IT team members." },
      { id: 'C', text: "Disable multi-factor authentication during identity federation to streamline login workflows." },
      { id: 'D', text: "Create local username and password accounts for each employee in every individual cloud service console." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning. Federated Identity Management uses open standards: SAML 2.0 (XML-based assertion exchange for enterprise SSO), OpenID Connect (JSON/REST identity layer on OAuth 2.0), and SCIM (System for Cross-domain Identity Management, automating real-time user lifecycle provisioning and offboarding).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-63/3/final",
    tags: ["Identity Federation", "Identity Federation", "Application Secops"]
  },
  {
    id: "isc2-ccsp-360",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Identity Federation and Single Sign-On Standards: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Identity Federation to allow enterprise employees to access multi-cloud administrative consoles using their corporate credentials without duplicating accounts.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? SAML 2.0, OpenID Connect (OIDC), OAuth 2.0, and SCIM automated identity synchronization is under consideration.",
    options: [
      { id: 'A', text: "Create local username and password accounts for each employee in every individual cloud service console." },
      { id: 'B', text: "Disable multi-factor authentication during identity federation to streamline login workflows." },
      { id: 'C', text: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning." },
      { id: 'D', text: "Share a single corporate master administrative password among all IT team members." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Identity Federation using SAML 2.0 or OpenID Connect (OIDC) with SCIM for automated user provisioning and deprovisioning. Federated Identity Management uses open standards: SAML 2.0 (XML-based assertion exchange for enterprise SSO), OpenID Connect (JSON/REST identity layer on OAuth 2.0), and SCIM (System for Cross-domain Identity Management, automating real-time user lifecycle provisioning and offboarding).",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-63/3/final",
    tags: ["Identity Federation", "Identity Federation", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-361",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Virtual Private Clouds (VPC) and Private Subnet Design: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates VPC Architecture to architect a secure network topology for enterprise database servers that must never be directly accessible from the public internet.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Structuring public/private subnets, NAT gateways, route tables, and private service endpoints is under consideration.",
    options: [
      { id: 'A', text: "Disable subnet routing and connect databases directly to external public WiFi routers." },
      { id: 'B', text: "Assign public IPv4 addresses to all database servers and rely on passwords alone." },
      { id: 'C', text: "Place database servers in the same public subnet as internet-facing web proxies." },
      { id: 'D', text: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints. Secure VPC design uses tiered subnets: Public Subnets (hosting internet-facing load balancers with Internet Gateways) and Private Subnets (hosting application logic and databases with no public IPs). Private endpoints (e.g., AWS PrivateLink, Azure Private Link) keep traffic on the private cloud backbone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
    tags: ["VPC Architecture", "VPC Architecture", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-362",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Virtual Private Clouds (VPC) and Private Subnet Design: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates VPC Architecture to architect a secure network topology for enterprise database servers that must never be directly accessible from the public internet.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Structuring public/private subnets, NAT gateways, route tables, and private service endpoints is under consideration.",
    options: [
      { id: 'A', text: "Disable subnet routing and connect databases directly to external public WiFi routers." },
      { id: 'B', text: "Place database servers in the same public subnet as internet-facing web proxies." },
      { id: 'C', text: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints." },
      { id: 'D', text: "Assign public IPv4 addresses to all database servers and rely on passwords alone." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints. Secure VPC design uses tiered subnets: Public Subnets (hosting internet-facing load balancers with Internet Gateways) and Private Subnets (hosting application logic and databases with no public IPs). Private endpoints (e.g., AWS PrivateLink, Azure Private Link) keep traffic on the private cloud backbone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
    tags: ["VPC Architecture", "VPC Architecture", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-363",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Virtual Private Clouds (VPC) and Private Subnet Design: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates VPC Architecture to architect a secure network topology for enterprise database servers that must never be directly accessible from the public internet.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Structuring public/private subnets, NAT gateways, route tables, and private service endpoints is under consideration.",
    options: [
      { id: 'A', text: "Place database servers in the same public subnet as internet-facing web proxies." },
      { id: 'B', text: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints." },
      { id: 'C', text: "Disable subnet routing and connect databases directly to external public WiFi routers." },
      { id: 'D', text: "Assign public IPv4 addresses to all database servers and rely on passwords alone." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints. Secure VPC design uses tiered subnets: Public Subnets (hosting internet-facing load balancers with Internet Gateways) and Private Subnets (hosting application logic and databases with no public IPs). Private endpoints (e.g., AWS PrivateLink, Azure Private Link) keep traffic on the private cloud backbone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
    tags: ["VPC Architecture", "VPC Architecture", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-364",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Virtual Private Clouds (VPC) and Private Subnet Design: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates VPC Architecture to architect a secure network topology for enterprise database servers that must never be directly accessible from the public internet.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Structuring public/private subnets, NAT gateways, route tables, and private service endpoints is under consideration.",
    options: [
      { id: 'A', text: "Disable subnet routing and connect databases directly to external public WiFi routers." },
      { id: 'B', text: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints." },
      { id: 'C', text: "Place database servers in the same public subnet as internet-facing web proxies." },
      { id: 'D', text: "Assign public IPv4 addresses to all database servers and rely on passwords alone." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints. Secure VPC design uses tiered subnets: Public Subnets (hosting internet-facing load balancers with Internet Gateways) and Private Subnets (hosting application logic and databases with no public IPs). Private endpoints (e.g., AWS PrivateLink, Azure Private Link) keep traffic on the private cloud backbone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
    tags: ["VPC Architecture", "VPC Architecture", "Application Secops"]
  },
  {
    id: "isc2-ccsp-365",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Virtual Private Clouds (VPC) and Private Subnet Design: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates VPC Architecture to architect a secure network topology for enterprise database servers that must never be directly accessible from the public internet.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Structuring public/private subnets, NAT gateways, route tables, and private service endpoints is under consideration.",
    options: [
      { id: 'A', text: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints." },
      { id: 'B', text: "Assign public IPv4 addresses to all database servers and rely on passwords alone." },
      { id: 'C', text: "Disable subnet routing and connect databases directly to external public WiFi routers." },
      { id: 'D', text: "Place database servers in the same public subnet as internet-facing web proxies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Place database servers in private subnets with no public IPs, routing egress via NAT gateways and accessing cloud services via private endpoints. Secure VPC design uses tiered subnets: Public Subnets (hosting internet-facing load balancers with Internet Gateways) and Private Subnets (hosting application logic and databases with no public IPs). Private endpoints (e.g., AWS PrivateLink, Azure Private Link) keep traffic on the private cloud backbone.",
    referenceUrl: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
    tags: ["VPC Architecture", "VPC Architecture", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-366",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Container Security and Operating System Virtualization: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Container Security to prevent a compromised containerized web service from accessing neighboring containers or the underlying host operating system.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Linux kernel cgroups, namespaces, seccomp profiles, and non-root container execution is under consideration.",
    options: [
      { id: 'A', text: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles." },
      { id: 'B', text: "Disable container runtime namespaces to improve application performance." },
      { id: 'C', text: "Mount the host root filesystem (`/`) directly into all application containers." },
      { id: 'D', text: "Run all containerized processes as root with `--privileged=true` enabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles. Containers share the host operating system kernel, relying on Linux namespaces (isolating processes, networking, mounts) and cgroups (resource limits). Hardening requires non-root user execution, dropping Linux capabilities (e.g., `CAP_SYS_ADMIN`), and applying seccomp/AppArmor syscall filtering.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-190/final",
    tags: ["Container Security", "Container Security", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-367",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Container Security and Operating System Virtualization: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Container Security to prevent a compromised containerized web service from accessing neighboring containers or the underlying host operating system.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Linux kernel cgroups, namespaces, seccomp profiles, and non-root container execution is under consideration.",
    options: [
      { id: 'A', text: "Disable container runtime namespaces to improve application performance." },
      { id: 'B', text: "Run all containerized processes as root with `--privileged=true` enabled." },
      { id: 'C', text: "Mount the host root filesystem (`/`) directly into all application containers." },
      { id: 'D', text: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles. Containers share the host operating system kernel, relying on Linux namespaces (isolating processes, networking, mounts) and cgroups (resource limits). Hardening requires non-root user execution, dropping Linux capabilities (e.g., `CAP_SYS_ADMIN`), and applying seccomp/AppArmor syscall filtering.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-190/final",
    tags: ["Container Security", "Container Security", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-368",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Container Security and Operating System Virtualization: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Container Security to prevent a compromised containerized web service from accessing neighboring containers or the underlying host operating system.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Linux kernel cgroups, namespaces, seccomp profiles, and non-root container execution is under consideration.",
    options: [
      { id: 'A', text: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles." },
      { id: 'B', text: "Mount the host root filesystem (`/`) directly into all application containers." },
      { id: 'C', text: "Disable container runtime namespaces to improve application performance." },
      { id: 'D', text: "Run all containerized processes as root with `--privileged=true` enabled." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles. Containers share the host operating system kernel, relying on Linux namespaces (isolating processes, networking, mounts) and cgroups (resource limits). Hardening requires non-root user execution, dropping Linux capabilities (e.g., `CAP_SYS_ADMIN`), and applying seccomp/AppArmor syscall filtering.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-190/final",
    tags: ["Container Security", "Container Security", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-369",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Container Security and Operating System Virtualization: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Container Security to prevent a compromised containerized web service from accessing neighboring containers or the underlying host operating system.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Linux kernel cgroups, namespaces, seccomp profiles, and non-root container execution is under consideration.",
    options: [
      { id: 'A', text: "Disable container runtime namespaces to improve application performance." },
      { id: 'B', text: "Run all containerized processes as root with `--privileged=true` enabled." },
      { id: 'C', text: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles." },
      { id: 'D', text: "Mount the host root filesystem (`/`) directly into all application containers." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles. Containers share the host operating system kernel, relying on Linux namespaces (isolating processes, networking, mounts) and cgroups (resource limits). Hardening requires non-root user execution, dropping Linux capabilities (e.g., `CAP_SYS_ADMIN`), and applying seccomp/AppArmor syscall filtering.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-190/final",
    tags: ["Container Security", "Container Security", "Application Secops"]
  },
  {
    id: "isc2-ccsp-370",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Container Security and Operating System Virtualization: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Container Security to prevent a compromised containerized web service from accessing neighboring containers or the underlying host operating system.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Linux kernel cgroups, namespaces, seccomp profiles, and non-root container execution is under consideration.",
    options: [
      { id: 'A', text: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles." },
      { id: 'B', text: "Mount the host root filesystem (`/`) directly into all application containers." },
      { id: 'C', text: "Run all containerized processes as root with `--privileged=true` enabled." },
      { id: 'D', text: "Disable container runtime namespaces to improve application performance." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce non-root container execution, drop unneeded Linux capabilities, and apply restrictive seccomp and AppArmor profiles. Containers share the host operating system kernel, relying on Linux namespaces (isolating processes, networking, mounts) and cgroups (resource limits). Hardening requires non-root user execution, dropping Linux capabilities (e.g., `CAP_SYS_ADMIN`), and applying seccomp/AppArmor syscall filtering.",
    referenceUrl: "https://csrc.nist.gov/publications/detail/sp/800-190/final",
    tags: ["Container Security", "Container Security", "Compliance And Risk"]
  },
  {
    id: "isc2-ccsp-371",
    difficulty: "hard",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Host Operating System Hardening and CIS Benchmarks: Enterprise Architecture",
    scenario: "An enterprise chief information security officer (CISO) is establishing multi-cloud governance frameworks, shared responsibility models, and Zero Trust architectures across global business units. The cloud security professional evaluates Host Hardening to establish a verifiable security baseline for Linux virtual machines deployed in cloud production environments.",
    question: "Which architectural approach or cloud security control satisfies these enterprise governance objectives? Applying Center for Internet Security (CIS) benchmarks, disabling unneeded services, and kernel tuning is under consideration.",
    options: [
      { id: 'A', text: "Deploy default unhardened operating system installations directly into production." },
      { id: 'B', text: "Enable legacy unencrypted protocols like Telnet and FTP for remote administration convenience." },
      { id: 'C', text: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services." },
      { id: 'D', text: "Disable host firewalling and SELinux to prevent troubleshooting friction." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services. Operating system hardening eliminates attack surface. Security teams enforce Center for Internet Security (CIS) benchmarks: disabling unused services and kernel modules, enabling SELinux/AppArmor in enforcing mode, restricting sudo privileges, and enforcing strict SSH cipher suites.",
    referenceUrl: "https://www.cisecurity.org/cis-benchmarks",
    tags: ["Host Hardening", "Host Hardening", "Enterprise Architecture"]
  },
  {
    id: "isc2-ccsp-372",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Host Operating System Hardening and CIS Benchmarks: Data Protection And Privacy",
    scenario: "A global data protection officer is implementing cryptographic data lifecycles, crypto-shredding sanitization, and data loss prevention across sensitive cloud repositories. The cloud security professional evaluates Host Hardening to establish a verifiable security baseline for Linux virtual machines deployed in cloud production environments.",
    question: "Which data security mechanism or cryptographic architecture guarantees compliance with international privacy mandates? Applying Center for Internet Security (CIS) benchmarks, disabling unneeded services, and kernel tuning is under consideration.",
    options: [
      { id: 'A', text: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services." },
      { id: 'B', text: "Enable legacy unencrypted protocols like Telnet and FTP for remote administration convenience." },
      { id: 'C', text: "Deploy default unhardened operating system installations directly into production." },
      { id: 'D', text: "Disable host firewalling and SELinux to prevent troubleshooting friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services. Operating system hardening eliminates attack surface. Security teams enforce Center for Internet Security (CIS) benchmarks: disabling unused services and kernel modules, enabling SELinux/AppArmor in enforcing mode, restricting sudo privileges, and enforcing strict SSH cipher suites.",
    referenceUrl: "https://www.cisecurity.org/cis-benchmarks",
    tags: ["Host Hardening", "Host Hardening", "Data Protection And Privacy"]
  },
  {
    id: "isc2-ccsp-373",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Host Operating System Hardening and CIS Benchmarks: Platform Hardening",
    scenario: "A cloud platform security team is hardening virtualization substrates, implementing micro-segmentation, and enforcing immutable infrastructure across multi-tenant environments. The cloud security professional evaluates Host Hardening to establish a verifiable security baseline for Linux virtual machines deployed in cloud production environments.",
    question: "Which infrastructure security design or platform control prevents unauthorized lateral movement and hypervisor compromise? Applying Center for Internet Security (CIS) benchmarks, disabling unneeded services, and kernel tuning is under consideration.",
    options: [
      { id: 'A', text: "Deploy default unhardened operating system installations directly into production." },
      { id: 'B', text: "Enable legacy unencrypted protocols like Telnet and FTP for remote administration convenience." },
      { id: 'C', text: "Disable host firewalling and SELinux to prevent troubleshooting friction." },
      { id: 'D', text: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services. Operating system hardening eliminates attack surface. Security teams enforce Center for Internet Security (CIS) benchmarks: disabling unused services and kernel modules, enabling SELinux/AppArmor in enforcing mode, restricting sudo privileges, and enforcing strict SSH cipher suites.",
    referenceUrl: "https://www.cisecurity.org/cis-benchmarks",
    tags: ["Host Hardening", "Host Hardening", "Platform Hardening"]
  },
  {
    id: "isc2-ccsp-374",
    difficulty: "easy",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Host Operating System Hardening and CIS Benchmarks: Application Secops",
    scenario: "A devsecops engineering group is embedding threat modeling, automated SAST/DAST testing, and API gateway security into continuous cloud application delivery lifecycles. The cloud security professional evaluates Host Hardening to establish a verifiable security baseline for Linux virtual machines deployed in cloud production environments.",
    question: "Which application security practice or runtime defense mitigates critical OWASP vulnerabilities before deployment? Applying Center for Internet Security (CIS) benchmarks, disabling unneeded services, and kernel tuning is under consideration.",
    options: [
      { id: 'A', text: "Enable legacy unencrypted protocols like Telnet and FTP for remote administration convenience." },
      { id: 'B', text: "Disable host firewalling and SELinux to prevent troubleshooting friction." },
      { id: 'C', text: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services." },
      { id: 'D', text: "Deploy default unhardened operating system installations directly into production." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services. Operating system hardening eliminates attack surface. Security teams enforce Center for Internet Security (CIS) benchmarks: disabling unused services and kernel modules, enabling SELinux/AppArmor in enforcing mode, restricting sudo privileges, and enforcing strict SSH cipher suites.",
    referenceUrl: "https://www.cisecurity.org/cis-benchmarks",
    tags: ["Host Hardening", "Host Hardening", "Application Secops"]
  },
  {
    id: "isc2-ccsp-375",
    difficulty: "medium",
    certId: "isc2-ccsp",
    domainId: "d3",
    domainName: "Cloud Platform and Infrastructure Security",
    title: "Host Operating System Hardening and CIS Benchmarks: Compliance And Risk",
    scenario: "A corporate compliance auditor is evaluating cloud service level agreements, independent SOC 2 Type II audit attestations, and legal hold eDiscovery preservation policies. The cloud security professional evaluates Host Hardening to establish a verifiable security baseline for Linux virtual machines deployed in cloud production environments.",
    question: "Which legal, risk, or compliance procedure guarantees due diligence and satisfies regulatory requirements? Applying Center for Internet Security (CIS) benchmarks, disabling unneeded services, and kernel tuning is under consideration.",
    options: [
      { id: 'A', text: "Disable host firewalling and SELinux to prevent troubleshooting friction." },
      { id: 'B', text: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services." },
      { id: 'C', text: "Enable legacy unencrypted protocols like Telnet and FTP for remote administration convenience." },
      { id: 'D', text: "Deploy default unhardened operating system installations directly into production." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Apply Center for Internet Security (CIS) Level 1 or Level 2 benchmark configurations, disabling unneeded ports, protocols, and services. Operating system hardening eliminates attack surface. Security teams enforce Center for Internet Security (CIS) benchmarks: disabling unused services and kernel modules, enabling SELinux/AppArmor in enforcing mode, restricting sudo privileges, and enforcing strict SSH cipher suites.",
    referenceUrl: "https://www.cisecurity.org/cis-benchmarks",
    tags: ["Host Hardening", "Host Hardening", "Compliance And Risk"]
  }
];

export default ISC2_CCSP_QUESTIONS_15;
