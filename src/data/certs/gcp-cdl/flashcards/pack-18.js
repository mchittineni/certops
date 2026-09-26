export const GCP_CDL_FLASHCARDS_18 = [
  {
    id: "gcp-cdl-fc-426",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Titan chip vs Titan Security Key: what is the difference?",
    hint: "One lives inside servers; the other lives on a keyring.",
    back: "The <strong>Titan chip</strong> is a custom chip inside Google's servers and peripherals that provides a <strong>hardware root of trust</strong>, verifying that firmware and boot code are genuine before a machine starts. A <strong>Titan Security Key</strong> is a FIDO hardware key that people use as a <strong>phishing-resistant second factor</strong> when signing in. Same brand, different jobs: machine integrity vs user authentication.",
    tags: ["Titan", "Secure by design"]
  },
  {
    id: "gcp-cdl-fc-427",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does \"defense in depth\" mean for Google's infrastructure?",
    hint: "Count the layers an attacker must get through.",
    back: "Security is built in <strong>many independent layers</strong>, so no single failure exposes customer data: physical data center security, purpose-built hardware with a hardware root of trust, a secure boot stack, service identity and encryption between services, encryption of data at rest and in transit, strict internal access controls, and continuous monitoring and threat detection. An attacker who defeats one layer still faces the rest.",
    tags: ["Defense in depth", "Secure by design"]
  },
  {
    id: "gcp-cdl-fc-428",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "How does Google protect the physical security of its data centers?",
    hint: "Fences, guards, biometrics, and very few visitors.",
    back: "Google's proprietary data centers use <strong>layered physical controls</strong>: secure perimeters, security guards, vehicle barriers, badge and <strong>biometric</strong> access, video surveillance and intrusion detection. Only a <strong>very small fraction of Google employees</strong> can enter, and access is logged. Failed drives are securely wiped or physically destroyed on site. Customers do not visit; physical security is Google's responsibility.",
    tags: ["Physical security", "Data centers"]
  },
  {
    id: "gcp-cdl-fc-429",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "How is traffic between Google's internal services protected?",
    hint: "Google built its own transport protocol for service-to-service calls.",
    back: "Google's production services authenticate to each other and encrypt their remote procedure calls with <strong>Application Layer Transport Security (ALTS)</strong>, a mutual authentication and encryption system based on <strong>service identities</strong> rather than network location. In addition, data that travels between facilities outside Google's physical control is encrypted at the network layer, and customer traffic to Google front ends uses TLS.",
    tags: ["Encryption in transit", "ALTS", "Secure by design"]
  },
  {
    id: "gcp-cdl-fc-430",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Name three things Gemini does inside Google Security Operations.",
    hint: "Searching, summarizing, and investigating.",
    back: "Gemini in Google Security Operations turns <strong>natural-language questions into searches</strong>, <strong>summarizes cases</strong> and suggests next steps, generates detection rules and playbooks from prompts, answers threat intelligence questions, and runs an <strong>AI triage and investigation agent</strong> that decides whether alerts are true or false positives and explains why. The goal is faster detection and response with less manual effort.",
    tags: ["Gemini in Security Operations", "AI-assisted security"]
  },
  {
    id: "gcp-cdl-fc-431",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does AI Protection in Security Command Center do?",
    hint: "Inventory, risk, compliance, threats: for AI assets.",
    back: "<strong>AI Protection</strong> manages the security posture of AI workloads: it builds an <strong>inventory</strong> of AI assets such as models, datasets and agents, identifies <strong>vulnerabilities and risks</strong> (including over-privileged agents and attack paths to AI resources), checks <strong>compliance</strong> with security frameworks, and helps <strong>detect and respond to threats</strong> against AI systems. It works with Model Armor and Sensitive Data Protection.",
    tags: ["AI Protection", "Security Command Center"]
  },
  {
    id: "gcp-cdl-fc-432",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What kinds of problems can Model Armor screen for in prompts and responses?",
    hint: "Attacks, leaks, links, and harmful content.",
    back: "<strong>Prompt injection and jailbreak</strong> attempts; <strong>sensitive data</strong> such as personal information or secrets, using Sensitive Data Protection; <strong>malicious URLs</strong>; and <strong>responsible AI</strong> categories such as hate speech, harassment, sexually explicit and dangerous content. Templates set which filters apply and at what confidence threshold, and Model Armor works with any model on any cloud.",
    tags: ["Model Armor", "LLM attacks"]
  },
  {
    id: "gcp-cdl-fc-433",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Model Armor, AI Protection, Sensitive Data Protection: which one to reach for?",
    hint: "Runtime screen, organization-wide posture, or data classification?",
    back: "<strong>Model Armor</strong> screens individual prompts and responses at runtime for injection, jailbreaks, sensitive data, malicious URLs and harmful content. <strong>AI Protection</strong> gives the security team an organization-wide view of AI assets, their risks, compliance and threats. <strong>Sensitive Data Protection</strong> discovers, classifies and de-identifies sensitive data wherever it is stored, including data headed into training or grounding.",
    tags: ["Model Armor", "AI Protection", "Sensitive Data Protection"]
  },
  {
    id: "gcp-cdl-fc-434",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Is a Google Cloud VPC network regional or global?",
    hint: "The network and its subnets have different scopes.",
    back: "A <strong>VPC network is global</strong>: one network can span every region, and resources in different regions communicate over Google's private backbone using internal IP addresses. <strong>Subnets are regional</strong>: each subnet belongs to one region and can serve all zones in it. Firewall rules and routes apply across the network, which simplifies multi-region designs compared with networks confined to one region.",
    tags: ["VPC", "Networking"]
  },
  {
    id: "gcp-cdl-fc-435",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Cloud VPN or Cloud Interconnect: how do you choose?",
    hint: "Internet path vs private circuit.",
    back: "<strong>Cloud VPN</strong> sends IPsec-encrypted traffic over the public internet; it is quick to set up and inexpensive, suiting modest bandwidth. <strong>Cloud Interconnect</strong> provides a <strong>private connection that does not cross the public internet</strong>, with high bandwidth and more predictable latency, suiting large or latency-sensitive hybrid workloads, at higher cost and longer lead time.",
    tags: ["Cloud VPN", "Cloud Interconnect"]
  },
  {
    id: "gcp-cdl-fc-436",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Dedicated Interconnect vs Partner Interconnect: what decides between them?",
    hint: "Can you physically reach Google's network?",
    back: "<strong>Dedicated Interconnect</strong> is a direct physical connection between your network and Google's in a <strong>colocation facility</strong>, using high-capacity circuits such as 10 Gbps or 100 Gbps. <strong>Partner Interconnect</strong> connects through a <strong>supported service provider</strong> when you cannot reach such a facility or need less bandwidth, with capacities from 50 Mbps to 50 Gbps. Both keep traffic off the public internet.",
    tags: ["Cloud Interconnect"]
  },
  {
    id: "gcp-cdl-fc-437",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What protections does Cloud Armor provide?",
    hint: "It sits at Google's edge in front of your load balancer.",
    back: "<strong>Cloud Armor</strong> protects applications behind Google Cloud load balancers with <strong>DDoS defense</strong> at Google's edge, a <strong>web application firewall</strong> with preconfigured rules against attacks such as SQL injection and cross-site scripting, <strong>rate limiting</strong> and bot management, IP and <strong>geography-based</strong> allow and deny rules, and <strong>Adaptive Protection</strong>, which uses machine learning to spot and help block layer 7 attacks.",
    tags: ["Cloud Armor", "WAF", "DDoS"]
  },
  {
    id: "gcp-cdl-fc-438",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Cloud Armor vs VPC firewall rules: which traffic does each control?",
    hint: "Edge and requests vs network and ports.",
    back: "<strong>Cloud Armor</strong> inspects <strong>inbound requests to external load balancers</strong> at Google's edge, so it can read HTTP content and block injection attacks, bots, floods or whole countries before traffic reaches your network. <strong>VPC firewall rules</strong> and Cloud Next Generation Firewall policies allow or deny <strong>connections to and from VM interfaces</strong> by IP range, protocol, port, service account or tag, and higher Cloud NGFW tiers add threat intelligence and intrusion prevention.",
    tags: ["Cloud Armor", "Firewall", "Cloud NGFW"]
  },
  {
    id: "gcp-cdl-fc-439",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Certificate Manager vs Certificate Authority Service: which does what?",
    hint: "Public websites vs your own private certificate authority.",
    back: "<strong>Certificate Manager</strong> obtains, deploys and renews <strong>TLS certificates for Google Cloud load balancers</strong>, including Google-managed public certificates for many domains. <strong>Certificate Authority Service</strong> lets an organization run its <strong>own private certificate authorities</strong> to issue certificates for internal uses such as devices, workloads and mutual TLS between services.",
    tags: ["Certificate Manager", "TLS"]
  },
  {
    id: "gcp-cdl-fc-440",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Identity-Aware Proxy vs VPN for reaching internal apps: what changes?",
    hint: "Trust the connection, or check every request?",
    back: "A <strong>VPN</strong> puts the user's device on the private network, and once connected it is broadly trusted. <strong>Identity-Aware Proxy</strong> checks the <strong>user's identity, group membership and context on every request</strong> to a specific application or VM, with no VPN and no public exposure of the backend. It applies zero-trust access, and IAP TCP forwarding extends it to SSH and RDP.",
    tags: ["Identity-Aware Proxy", "Zero trust"]
  },
  {
    id: "gcp-cdl-fc-441",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What are the _Required and _Default log buckets in Cloud Logging?",
    hint: "One cannot be changed; the other is yours to configure.",
    back: "Every project gets two buckets. <strong>_Required</strong> stores Admin Activity, System Event and Access Transparency logs for <strong>400 days</strong>; its retention cannot be changed and there is no charge for it. <strong>_Default</strong> stores most other logs, with <strong>30 days</strong> retention by default that you can change. The Log Router uses sinks to decide which logs go to which bucket or to other destinations.",
    tags: ["Cloud Logging", "Log buckets"]
  },
  {
    id: "gcp-cdl-fc-442",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "IAM deny policies: how do they interact with allow policies?",
    hint: "Which wins when both apply?",
    back: "<strong>Allow policies</strong> grant roles, and grants are inherited down the resource hierarchy. <strong>Deny policies</strong> set guardrails that block specific permissions for chosen principals regardless of any allow grant, and they are also inherited. IAM checks deny policies first: <strong>a matching deny overrides an allow</strong>. Deny rules can list exception principals, which lets central teams forbid actions such as deleting projects across the organization.",
    tags: ["IAM", "Deny policies"]
  },
  {
    id: "gcp-cdl-fc-443",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Sensitive Data Protection: inspection jobs vs discovery?",
    hint: "Deep look at one place, or continuous map of everything.",
    back: "<strong>Inspection</strong> scans specific content, a table, bucket or stream of text, for sensitive information types and reports each finding, often followed by de-identification. <strong>Discovery</strong> continuously profiles data across an organization, folder or project, covering sources such as BigQuery, Cloud SQL and Cloud Storage, to show where sensitive data lives and how risky each asset is, including assets created later.",
    tags: ["Sensitive Data Protection", "Data discovery"]
  },
  {
    id: "gcp-cdl-fc-444",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Confidential VMs, Confidential GKE Nodes, Confidential Space: when do you use each?",
    hint: "A VM, a cluster, or a collaboration.",
    back: "<strong>Confidential VMs</strong> encrypt a VM's memory in use with hardware-based keys (such as AMD SEV or Intel TDX), with no application changes. <strong>Confidential GKE Nodes</strong> apply the same protection to Kubernetes worker nodes. <strong>Confidential Space</strong> adds attestation so that several parties can release data only to an agreed, verified workload, enabling joint analysis without any party seeing the others' raw data.",
    tags: ["Confidential Computing"]
  },
  {
    id: "gcp-cdl-fc-445",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What are Google's transparency reports, and why do they matter for trust?",
    hint: "Public numbers about requests from governments.",
    back: "Google publishes <strong>transparency reports</strong> describing government requests for customer and user data: how many arrive, from which countries, and how Google responds. Alongside commitments on how it handles such requests, they let customers judge how their data is treated, one of several ways Google Cloud <strong>earns trust</strong> along with third-party audits and access controls.",
    tags: ["Trust", "Transparency reports"]
  },
  {
    id: "gcp-cdl-fc-446",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What is Compliance Reports Manager used for?",
    hint: "Where your auditor's requests are answered.",
    back: "<strong>Compliance Reports Manager</strong> gives Google Cloud customers self-service access to Google's <strong>independent third-party audit reports and certifications</strong>, such as SOC 1, SOC 2, ISO/IEC 27001 and PCI DSS attestations, so they can share evidence of the provider's controls with their own auditors and regulators.",
    tags: ["Compliance", "Third-party audits"]
  },
  {
    id: "gcp-cdl-fc-447",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Data residency vs digital sovereignty: how do they differ?",
    hint: "Where data sits vs who ultimately controls it.",
    back: "<strong>Data residency</strong> is about <strong>where data is stored</strong>, for example keeping it at rest in a particular country, enforced with region choice and resource location policies. <strong>Digital sovereignty</strong> is broader: control over data, operations and software, including who can access data, who holds encryption keys, who operates the infrastructure, and whether it can run independently of the provider.",
    tags: ["Data residency", "Digital sovereignty"]
  },
  {
    id: "gcp-cdl-fc-448",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What levels of sovereign cloud does Google offer?",
    hint: "Public cloud with controls, partner-operated, fully disconnected.",
    back: "<strong>Google Cloud Data Boundary</strong>: public cloud with data residency, access controls and customer-managed keys. <strong>Google Cloud Dedicated</strong>: isolated infrastructure operated independently by a trusted local partner, such as the Thales partnership in France. <strong>Air-gapped</strong> (Google Distributed Cloud air-gapped): fully disconnected from the internet and Google's public cloud, for classified and highly sensitive workloads.",
    tags: ["Digital sovereignty", "Sovereign cloud"]
  },
  {
    id: "gcp-cdl-fc-449",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does Assured Workloads do?",
    hint: "Compliance guardrails applied to a folder.",
    back: "<strong>Assured Workloads</strong> creates folders configured for a chosen <strong>compliance regime or control package</strong>, such as FedRAMP, IL4, CJIS or EU data boundary controls, and enforces its requirements: permitted <strong>data locations</strong>, restrictions on which services can be used, <strong>personnel access controls</strong> for Google support, and key management requirements, while monitoring for violations.",
    tags: ["Assured Workloads", "Compliance"]
  },
  {
    id: "gcp-cdl-fc-450",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Access Transparency vs Access Approval: log it or block it?",
    hint: "One tells you afterward; one asks you first.",
    back: "<strong>Access Transparency</strong> gives near real-time <strong>logs of actions Google personnel take</strong> on your content, with a justification such as a support case. <strong>Access Approval</strong> goes further: Google personnel must wait for <strong>your explicit approval</strong> before accessing your content. Many regulated customers use both.",
    tags: ["Access Transparency", "Access Approval", "Trust"]
  }
];

export default GCP_CDL_FLASHCARDS_18;
