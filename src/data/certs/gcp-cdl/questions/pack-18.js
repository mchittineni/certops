export const GCP_CDL_QUESTIONS_18 = [
  {
    id: "gcp-cdl-426",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Proving server firmware was not tampered with",
    scenario: "A defense contractor's security review asks how Google Cloud can be confident that the servers running customer workloads booted only genuine, unmodified firmware and software, since a compromised boot process could hide an attacker below the operating system.",
    question: "Which part of Google's secure-by-design infrastructure addresses this concern?",
    options: [
      { id: 'A', text: "Cloud Identity, which manages the user accounts and groups that sign in to Google Cloud" },
      { id: 'B', text: "Cloud Audit Logs, which record admin changes to projects and resources" },
      { id: 'C', text: "Cloud Armor, which filters malicious traffic at the edge before it reaches any server" },
      { id: 'D', text: "Titan, a custom chip that serves as a hardware root of trust for each server" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Titan is a custom chip Google designed and places in its servers and peripherals to establish a hardware root of trust: it verifies that firmware and boot components are genuine and unmodified before the machine starts, which defends against low-level tampering. Cloud Armor protects applications from web attacks and DDoS but plays no part in how servers boot. Cloud Audit Logs record actions in the customer's projects rather than the integrity of Google's hardware. Cloud Identity manages user identities, not server firmware.",
    referenceUrl: "https://docs.cloud.google.com/docs/security/titan-hardware-chip",
    tags: ["Secure by design", "Titan", "Hardware root of trust"]
  },
  {
    id: "gcp-cdl-427",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Why Google builds its own server hardware",
    scenario: "A board member at an insurance company asks why it matters that Google designs its own servers and networking equipment for its data centers instead of buying standard commercial hardware. The CISO needs to explain the security benefit in business terms.",
    question: "Which explanation is most accurate?",
    options: [
      { id: 'A', text: "Custom designs remove the need for encryption, because the hardware itself cannot be read by outsiders at all" },
      { id: 'B', text: "Custom designs omit unneeded parts and keep the supply chain under Google's own control" },
      { id: 'C', text: "Custom designs allow customers to install their own firmware, so the company can audit every server directly" },
      { id: 'D', text: "Custom designs let customers pick their own server models for extra safety" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google's purpose-built servers and network gear include only the components needed for their job and are built from vetted parts with Google controlling the design and supply chain, which reduces the attack surface and the risk of tampered hardware. Customers do not choose server models; the hardware is standardized across the fleet. Custom hardware complements encryption rather than replacing it; data is still encrypted at rest and in transit. Customers cannot install firmware on Google's servers, and doing so would undermine the very integrity protections the design provides.",
    referenceUrl: "https://docs.cloud.google.com/docs/security/infrastructure/design",
    tags: ["Secure by design", "Custom hardware"]
  },
  {
    id: "gcp-cdl-428",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Auditor asks who can walk into the building",
    scenario: "A health system's auditor wants to understand how physical access to Google's data centers is controlled before approving patient data in Google Cloud. She asks how the provider stops unauthorized people from reaching the servers.",
    question: "Which description matches Google's approach?",
    options: [
      { id: 'A', text: "Physical security is outsourced entirely to each customer, which must post its own guards on site" },
      { id: 'B', text: "Customers receive badges so their own staff can inspect the racks that hold their data at any time" },
      { id: 'C', text: "Data center locations are published with open visitor hours so the public can confirm conditions" },
      { id: 'D', text: "Multiple layers of physical safeguards restrict entry to a small number of authorized employees" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google's proprietary data centers use layered physical security, including perimeter fencing, security staff, badge and biometric access controls, cameras and intrusion detection, and only a very small share of Google employees are ever authorized to enter. Customers do not get access to walk the floor or inspect racks; physical security is part of what Google provides under shared responsibility. Data centers do not have open public visiting hours. Customers are never asked to guard Google's buildings.",
    referenceUrl: "https://docs.cloud.google.com/docs/security/infrastructure/design",
    tags: ["Secure by design", "Physical security", "Data centers"]
  },
  {
    id: "gcp-cdl-429",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Replication traffic between two regions",
    scenario: "A reinsurance firm replicates databases between Google Cloud regions in Belgium and Finland. Its risk team assumes it must build its own encrypted tunnels between the regions to stop anyone tapping the replication traffic on its way across Europe, and asks the cloud architect to confirm.",
    question: "What should the architect tell the risk team?",
    options: [
      { id: 'A', text: "Traffic crosses the public internet between regions, so Cloud VPN tunnels must be built to encrypt it" },
      { id: 'B', text: "Traffic stays unencrypted between regions unless the firm orders a Dedicated Interconnect for each pair" },
      { id: 'C', text: "Traffic moves on Google's private network and is encrypted by default beyond its facilities" },
      { id: 'D', text: "Traffic is encrypted between regions only when CMEK is set on each database" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Traffic between Google Cloud regions travels over Google's own private global network, and Google encrypts data in transit by default whenever it leaves the physical boundaries Google controls, so the firm does not need to build its own tunnels to protect replication between regions. It does not ride the public internet between regions, so Cloud VPN is unnecessary for this purpose. Customer-managed keys govern encryption at rest, not in transit. Dedicated Interconnect links an on-premises network to Google and has nothing to do with traffic between two Google regions.",
    referenceUrl: "https://docs.cloud.google.com/docs/security/encryption-in-transit",
    tags: ["Secure by design", "Global network", "Encryption in transit"]
  },
  {
    id: "gcp-cdl-430",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Junior analysts who cannot write queries",
    scenario: "A retailer's security operations center has hired several junior analysts who understand threats but have never learned the query syntax used in Google Security Operations. The SOC manager wants them productive in investigations from their first week.",
    question: "Which capability helps most?",
    options: [
      { id: 'A', text: "Cloud Monitoring dashboards, which chart VM metrics for the retailer's operations team" },
      { id: 'B', text: "Gemini in Google Security Operations, which turns plain-language questions into searches" },
      { id: 'C', text: "Security Health Analytics, which checks cloud resource configurations for misconfigurations" },
      { id: 'D', text: "Sensitive Data Protection, which finds and masks personal data stored in the data warehouse" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Gemini in Google Security Operations lets analysts describe what they are looking for in natural language and generates the corresponding search, which it can then refine, so analysts without query-language experience can investigate immediately. Security Health Analytics finds misconfigurations in Security Command Center and does not help analysts search telemetry. Cloud Monitoring dashboards show performance metrics rather than security investigations. Sensitive Data Protection discovers and de-identifies sensitive data and is not an investigation tool.",
    referenceUrl: "https://docs.cloud.google.com/chronicle/docs/secops/gemini-secops",
    tags: ["Gemini in Security Operations", "AI-assisted security"]
  },
  {
    id: "gcp-cdl-431",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Triage backlog of low-confidence alerts",
    scenario: "A bank's SOC receives hundreds of alerts overnight, and analysts spend the first hours of every shift working out which are false positives before they can act on anything real. The SOC director wants AI assistance that investigates alerts, reaches a verdict with its reasoning, and summarizes cases for the analysts.",
    question: "Which offering fits this requirement?",
    options: [
      { id: 'A', text: "Security Command Center posture management, which compares resources against a baseline" },
      { id: 'B', text: "Gemini in Google Security Operations, with AI triage of each alert plus Gemini case summaries" },
      { id: 'C', text: "Cloud Armor Adaptive Protection, which detects layer 7 DDoS attacks against web services" },
      { id: 'D', text: "Model Armor, which screens prompts and responses flowing to and from large language models" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Gemini in Google Security Operations includes an AI triage and investigation agent that analyzes alerts, runs an investigation plan and explains whether each is likely a true or false positive, along with Gemini case summaries and suggested next steps, which directly reduces the overnight triage burden. Model Armor protects generative AI applications rather than assisting analysts. Cloud Armor Adaptive Protection uses machine learning to detect application-layer DDoS, not to triage SOC alerts. Posture management identifies configuration drift and does not investigate alerts.",
    referenceUrl: "https://docs.cloud.google.com/chronicle/docs/secops/gemini-secops",
    tags: ["Gemini in Security Operations", "Alert triage", "AI agents"]
  },
  {
    id: "gcp-cdl-432",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Nobody knows which AI models are running",
    scenario: "Teams across a consumer goods company have been building with Gemini Enterprise Agent Platform for a year. The security team cannot say which models, agents and datasets exist, whether any agents hold excessive permissions, or which AI assets are exposed to known risks, and it wants that view inside the security tooling it already uses on Google Cloud.",
    question: "Which offering meets this need?",
    options: [
      { id: 'A', text: "AI Protection in Security Command Center, which inventories AI assets and assesses their risk" },
      { id: 'B', text: "Cloud Asset Inventory exports, which list resource metadata but assess no risk to AI assets" },
      { id: 'C', text: "Model Armor templates, which set filter thresholds for prompts and responses in one app" },
      { id: 'D', text: "Google Threat Intelligence, which reports on threat groups targeting consumer brands worldwide" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "AI Protection, part of Security Command Center, discovers the organization's AI inventory, such as models, agents and datasets, assesses vulnerabilities and risks including over-privileged agents and attack paths, checks compliance, and detects threats to AI workloads, all within the existing security console. Cloud Asset Inventory lists resources but performs no risk assessment of AI assets. Google Threat Intelligence describes external threat actors, not the company's own AI estate. Model Armor templates configure screening for individual applications' prompts and responses rather than giving an organization-wide inventory.",
    referenceUrl: "https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview",
    tags: ["AI Protection", "Security Command Center", "AI security"]
  },
  {
    id: "gcp-cdl-433",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Screening prompts for an app hosted on another cloud",
    scenario: "An insurer's claims assistant runs on another cloud provider and calls a third-party large language model. The insurer wants every prompt and response screened for prompt injection and jailbreak attempts, leaks of personal data, and malicious URLs, using a Google Cloud service, without moving the application or changing the model.",
    question: "Which option meets these requirements?",
    options: [
      { id: 'A', text: "Enable AI Protection only, since it inventories assets and scans each live prompt and response" },
      { id: 'B', text: "Move the assistant to a Gemini model on Gemini Enterprise Agent Platform, as screening needs Gemini" },
      { id: 'C', text: "Place Cloud Armor in front of the assistant so its WAF rules inspect each prompt for LLM attacks" },
      { id: 'D', text: "Call Model Armor's API, since it screens prompts and responses regardless of the LLM" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Model Armor screens LLM prompts and responses for prompt injection and jailbreak attempts, sensitive data such as personal information, malicious URLs and harmful content, and it is model-independent and cloud-agnostic, so an application on another cloud using a third-party model can call it through its API. It does not require moving to Gemini. Cloud Armor is a web application firewall and DDoS service for Google Cloud load balancers; it is not designed to judge LLM prompt content. AI Protection manages the posture, inventory and threats of AI assets and relies on Model Armor for runtime prompt and response screening rather than doing it itself.",
    referenceUrl: "https://docs.cloud.google.com/model-armor/overview",
    tags: ["Model Armor", "LLM attacks", "Multicloud"]
  },
  {
    id: "gcp-cdl-434",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Keeping hateful text out of generated posts",
    scenario: "A sportswear brand uses a generative AI tool to draft social media posts. After one draft contained harassing language aimed at a rival team's fans, the marketing director asked for every generated response to be checked for hate speech, harassment and dangerous content before anyone sees it.",
    question: "Which Google Cloud service provides that check?",
    options: [
      { id: 'A', text: "Cloud Translation, which converts the drafted posts into each of the brand's regional languages" },
      { id: 'B', text: "reCAPTCHA, which scores visitors to tell humans from bots on web forms" },
      { id: 'C', text: "Sensitive Data Protection, which detects values such as card numbers and national IDs in text" },
      { id: 'D', text: "Model Armor, which applies responsible AI filters to model output before users see it" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Model Armor screens responses from large language models with responsible AI safety filters for categories such as hate speech, harassment, sexually explicit and dangerous content, with configurable confidence thresholds, so harmful drafts can be blocked before they reach people. Sensitive Data Protection detects sensitive data like card numbers, not offensive language. Cloud Translation changes the language of text and does not judge its safety. reCAPTCHA distinguishes humans from bots on websites and has nothing to do with generated content.",
    referenceUrl: "https://docs.cloud.google.com/model-armor/overview",
    tags: ["Model Armor", "Responsible AI"]
  },
  {
    id: "gcp-cdl-435",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "A private network for the first cloud workloads",
    scenario: "A furniture maker is moving its first applications to Google Cloud. It needs a logically isolated private network where it can define its own IP address ranges, create subnets in the regions it uses, and control how its VMs communicate with each other and the internet.",
    question: "Which Google Cloud offering provides this foundation?",
    options: [
      { id: 'A', text: "Cloud CDN, which caches content at edge locations close to the company's online shoppers" },
      { id: 'B', text: "Cloud Interconnect, a private physical link between an on-premises network and Google" },
      { id: 'C', text: "Cloud DNS, which maps each domain name to an address and answers lookups at global scale" },
      { id: 'D', text: "Virtual Private Cloud, a global space for the company's own resources and address plan" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A Virtual Private Cloud network is a global, logically isolated private network in which the customer defines IP ranges and regional subnets, sets firewall rules and routes, and controls connectivity for its resources; it is the networking foundation for workloads on Google Cloud. Cloud CDN caches content for faster delivery but does not provide a private network. Cloud DNS resolves domain names. Cloud Interconnect connects an on-premises network to a VPC, so it builds on a VPC rather than replacing it.",
    referenceUrl: "https://docs.cloud.google.com/vpc/docs/vpc",
    tags: ["VPC", "Networking"]
  },
  {
    id: "gcp-cdl-436",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Linking a small office in days, not months",
    scenario: "A law firm wants its single office to reach VMs in Google Cloud privately. Its traffic needs are modest, it already has a reliable business internet connection, and it wants the link encrypted and running within a week at low cost, with high availability.",
    question: "Which connectivity option fits best?",
    options: [
      { id: 'A', text: "Dedicated Interconnect, which provisions physical circuits in a colocation facility near Google" },
      { id: 'B', text: "HA VPN, which builds IPsec tunnels over the internet to the firm's VPC network" },
      { id: 'C', text: "Direct Peering, which exchanges traffic with Google's public services" },
      { id: 'D', text: "Cloud CDN, which serves cached copies of the firm's web content from Google edge locations" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cloud VPN, and HA VPN in particular, builds encrypted IPsec tunnels over the existing internet connection to a VPC network, can be set up quickly at low cost, and offers a high-availability configuration, which fits modest traffic from one office. Dedicated Interconnect provides high-bandwidth private circuits but requires physical provisioning in a colocation facility, taking far longer and costing more than a small office needs. Cloud CDN accelerates content delivery and does not connect an office to private VMs. Direct Peering reaches Google's public services such as Workspace, not private VPC resources.",
    referenceUrl: "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview",
    tags: ["Cloud VPN", "Hybrid connectivity"]
  },
  {
    id: "gcp-cdl-437",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "10 Gbps needed, but no colocation presence",
    scenario: "A media company needs a private, high-throughput connection of about 10 Gbps between its broadcast center and Google Cloud that does not traverse the public internet. Its building is hundreds of miles from any colocation facility where Google's network is present, but its telecom carrier already has connections into Google's network.",
    question: "Which connectivity option should the company choose?",
    options: [
      { id: 'A', text: "Dedicated Interconnect, which needs the company to meet Google's network in a colocation site" },
      { id: 'B', text: "Partner Interconnect, which reaches Google through a supported service provider's network" },
      { id: 'C', text: "HA VPN, which sends encrypted traffic across the public internet using IPsec tunnels" },
      { id: 'D', text: "Cross-Cloud Interconnect, which links a Google Cloud VPC directly to another cloud provider" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Partner Interconnect provides private connectivity to Google Cloud through a supported service provider, with capacities from 50 Mbps up to 50 Gbps, and is designed for customers that cannot physically reach a Google colocation facility; the carrier's network bridges the distance. Dedicated Interconnect offers similar private high-bandwidth links but requires the customer to connect in a colocation facility where Google is present, which the company cannot do. HA VPN runs over the public internet, which the requirement rules out. Cross-Cloud Interconnect connects Google Cloud to another cloud provider, not to an on-premises building.",
    referenceUrl: "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/partner-overview",
    tags: ["Cloud Interconnect", "Hybrid connectivity"]
  },
  {
    id: "gcp-cdl-438",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Storefront hammered by injection attempts",
    scenario: "An electronics retailer's storefront runs behind a global external Application Load Balancer. It faces constant SQL injection and cross-site scripting attempts, occasional floods of HTTP requests from bots, and a demand from its bank to block traffic from countries where it does not trade.",
    question: "Which Google Cloud service addresses all three needs?",
    options: [
      { id: 'A', text: "Cloud Armor, with WAF rules, rate limiting and geography-based policies enforced at the edge" },
      { id: 'B', text: "Identity-Aware Proxy, which admits only signed-in users that pass context-aware checks" },
      { id: 'C', text: "VPC firewall rules, which allow or deny traffic to VMs by IP range, protocol and port" },
      { id: 'D', text: "Cloud NAT, which lets private VMs reach the internet without exposing public addresses" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Armor attaches security policies to external load balancers and enforces them at Google's edge: preconfigured WAF rules block common attacks such as SQL injection and cross-site scripting, rate limiting and Adaptive Protection counter HTTP floods, and rules can allow or deny traffic by geography. VPC firewall rules filter by address, protocol and port but cannot inspect requests for injection payloads. Identity-Aware Proxy requires users to sign in, which would lock out anonymous shoppers. Cloud NAT provides outbound internet access for private VMs and offers no inbound protection.",
    referenceUrl: "https://docs.cloud.google.com/armor/docs/cloud-armor-overview",
    tags: ["Cloud Armor", "WAF", "DDoS"]
  },
  {
    id: "gcp-cdl-439",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "TLS for hundreds of customer domains",
    scenario: "A website builder hosts more than 800 customer sites, each on the customer's own domain, behind one global load balancer. Engineers currently renew TLS certificates by hand and have let several expire, causing browser warnings for customers. They want certificates issued and renewed automatically at that scale.",
    question: "Which Google Cloud service should they adopt?",
    options: [
      { id: 'A', text: "Certificate Manager, which obtains, deploys and auto-renews TLS certs across many domains" },
      { id: 'B', text: "Secret Manager, which stores API keys, passwords and other secrets with version history" },
      { id: 'C', text: "Cloud Key Management Service, which creates and rotates encryption keys for stored data" },
      { id: 'D', text: "Cloud DNS, which hosts DNS zones and answers lookups for each of the customer domains" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Certificate Manager acquires, deploys and automatically renews TLS certificates, including Google-managed certificates, for Google Cloud load balancers and is built to handle large numbers of certificates and domains through certificate maps, which removes the manual renewals that caused the outages. Secret Manager stores secrets but does not issue or renew public certificates. Cloud KMS manages encryption keys for data rather than TLS certificates for websites. Cloud DNS can help prove domain ownership, but it does not issue or attach certificates by itself.",
    referenceUrl: "https://docs.cloud.google.com/certificate-manager/docs/overview",
    tags: ["Certificate Manager", "TLS"]
  },
  {
    id: "gcp-cdl-440",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Contractors need one internal app, no VPN",
    scenario: "An architecture firm wants outside contractors to use its internal project-tracking web app, which runs on Google Cloud. It does not want to issue VPN accounts, and access should depend on each contractor's verified account and group membership rather than on the network they connect from.",
    question: "Which Google Cloud service is designed for this?",
    options: [
      { id: 'A', text: "Cloud VPN, which extends the firm's private network to each contractor's own device" },
      { id: 'B', text: "Identity-Aware Proxy, which verifies each user and context before requests reach the app" },
      { id: 'C', text: "Cloud Armor, which filters malicious web traffic and DDoS attacks at Google's edge" },
      { id: 'D', text: "Cloud Interconnect, which provides private physical connectivity from a remote site" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Identity-Aware Proxy sits in front of applications and verifies each user's identity, group membership and context before allowing requests through, applying zero-trust access without a VPN. Cloud VPN is exactly what the firm wants to avoid, and it trusts the network connection rather than each request. Cloud Armor blocks malicious traffic but does not authenticate individual users. Cloud Interconnect links physical sites to Google and does not grant per-user application access.",
    referenceUrl: "https://docs.cloud.google.com/iap/docs/concepts-overview",
    tags: ["Identity-Aware Proxy", "Zero trust"]
  },
  {
    id: "gcp-cdl-441",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "SSH to VMs that have no public address",
    scenario: "A healthcare startup removed external IP addresses from all its Compute Engine VMs to shrink its attack surface. Engineers still need occasional SSH access for maintenance, and the security lead wants that access tied to each engineer's Google account and access rights, without running a bastion host.",
    question: "Which approach meets these requirements?",
    options: [
      { id: 'A', text: "Identity-Aware Proxy TCP forwarding, which tunnels SSH after verifying the user" },
      { id: 'B', text: "Certificate Manager, which issues TLS certificates to each VM so SSH is encrypted" },
      { id: 'C', text: "A Cloud Armor policy that allows SSH only from the engineers' home IP addresses" },
      { id: 'D', text: "Cloud NAT, which gives private VMs outbound internet access through a shared address" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Identity-Aware Proxy TCP forwarding lets authorized users open SSH or RDP sessions to VMs that have no external IP address; IAP verifies the user's identity and IAM permission before tunneling the connection, so no bastion host or public exposure is needed. Cloud NAT only provides outbound connectivity and cannot carry inbound SSH sessions. Cloud Armor protects load-balanced web applications and cannot expose VMs without public addresses, and home IPs change frequently. Certificate Manager handles TLS certificates for load balancers, which have no role in SSH access.",
    referenceUrl: "https://docs.cloud.google.com/iap/docs/using-tcp-forwarding",
    tags: ["Identity-Aware Proxy", "SSH", "Compute Engine"]
  },
  {
    id: "gcp-cdl-442",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Every project's logs in one audited place",
    scenario: "A university runs over 150 Google Cloud projects across departments. Its security office needs audit and application logs from every project, including projects created in the future, collected into one central location with a retention period set by the office rather than by each department.",
    question: "Which approach meets this requirement?",
    options: [
      { id: 'A', text: "Create an organization-level aggregated sink that routes logs to one log bucket" },
      { id: 'B', text: "Enable Cloud Monitoring uptime checks in each project so failures are recorded in one place" },
      { id: 'C', text: "Ask every department to create a project-level sink to a log bucket that it manages itself" },
      { id: 'D', text: "Give the security office Viewer on each project so it can browse logs one project at a time" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud Logging's Log Router supports aggregated sinks at the organization or folder level, which route logs from all child projects, including ones created later, to a destination such as a central log bucket whose retention the security office controls. Project-level sinks created by each department would miss future projects unless every team remembered, and retention would stay in departmental hands. Uptime checks record availability probes, not audit or application logs. Viewer access on every project is laborious, does not centralize retention, and would need updating for every new project.",
    referenceUrl: "https://docs.cloud.google.com/logging/docs/export/aggregated_sinks_overview",
    tags: ["Cloud Logging", "Aggregated sinks", "Centralized logging"]
  },
  {
    id: "gcp-cdl-443",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Access that follows people through the org chart",
    scenario: "A media company's platform team grants BigQuery access by adding individual employees to each project one at a time, and people keep their access after changing teams. The team wants access tied to job function, granted once for a whole department's projects, and removed automatically when someone moves on.",
    question: "Which IAM practice meets this goal?",
    options: [
      { id: 'A', text: "Create a separate Google Cloud organization for each department so that access never overlaps" },
      { id: 'B', text: "Grant a predefined role to a Google group on the department's folder and manage membership" },
      { id: 'C', text: "Share one service account key among the analysts in each department to simplify sign-in" },
      { id: 'D', text: "Grant the Owner role to each individual at the organization level so access is never missing" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Granting a predefined role to a Google group at the folder level means every project in that folder inherits the grant, and access follows group membership: adding or removing a person from the group changes their access everywhere at once. Organization-wide Owner grants violate least privilege and give far more than BigQuery access. Sharing a service account key destroys individual accountability and creates a long-lived credential. Separate organizations fragment governance and billing without solving the problem of stale individual grants.",
    referenceUrl: "https://docs.cloud.google.com/iam/docs/overview",
    tags: ["IAM", "Groups", "Resource hierarchy"]
  },
  {
    id: "gcp-cdl-444",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Where does personal data live in 3,000 tables?",
    scenario: "A telecom's data platform holds about 3,000 BigQuery tables created by many teams over several years. Before a privacy audit, the privacy officer needs to know which tables contain personal data such as phone numbers and addresses, and wants that picture kept current automatically as new tables appear.",
    question: "Which approach best meets this need?",
    options: [
      { id: 'A', text: "Sensitive Data Protection discovery, which profiles each table and flags risky columns" },
      { id: 'B', text: "Cloud Audit Logs Data Access logging, which records every query that reads each of the tables" },
      { id: 'C', text: "Customer-managed encryption keys, which let the telecom rotate the keys protecting each table" },
      { id: 'D', text: "VPC Service Controls, which blocks copying tables outside a perimeter" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Sensitive Data Protection's discovery service continuously profiles data across BigQuery, as well as sources such as Cloud SQL and Cloud Storage, identifying which tables and columns contain sensitive information types like phone numbers and addresses and rating their risk, and it profiles new tables as they appear. Data Access logs show who queried tables but not what the tables contain. Customer-managed keys control encryption, not classification. VPC Service Controls prevents exfiltration but does not reveal where personal data resides.",
    referenceUrl: "https://docs.cloud.google.com/sensitive-data-protection/docs/data-profiles",
    tags: ["Sensitive Data Protection", "Data discovery", "Privacy"]
  },
  {
    id: "gcp-cdl-445",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Two rival banks pooling fraud signals",
    scenario: "Two competing banks want to train a fraud detection model on their combined transaction data. Neither bank is willing to let the other, or the cloud operator, see its raw records, and both want assurance that only the agreed, audited workload can process the pooled data.",
    question: "Which Google Cloud capability addresses this?",
    options: [
      { id: 'A', text: "Cloud Interconnect, which gives each bank a private physical link into Google's network" },
      { id: 'B', text: "Shared VPC, which lets one host project provide a common network to many service projects" },
      { id: 'C', text: "Confidential Space, which runs an attested job on data hidden from every party" },
      { id: 'D', text: "VPC Network Peering, which connects the two banks' VPC networks so data moves privately" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Confidential Space, part of Confidential Computing, runs an agreed workload inside a hardware-based trusted execution environment and releases each party's data only to a workload whose identity and integrity have been verified through attestation, so the banks can compute on pooled data without either one, or the operator, seeing the other's raw records. VPC Network Peering and Shared VPC connect networks, which would make data easier to reach rather than keeping it confidential. Cloud Interconnect provides private connectivity from on-premises sites but gives no protection for data while it is being processed.",
    referenceUrl: "https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview",
    tags: ["Confidential Computing", "Confidential Space", "Data collaboration"]
  },
  {
    id: "gcp-cdl-446",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "How often do governments ask for data?",
    scenario: "A civil liberties nonprofit considering Google Cloud wants to know how often governments around the world request user data from Google and how Google responds to those requests, before it trusts the provider with information about its members.",
    question: "Which Google resource answers this question?",
    options: [
      { id: 'A', text: "Transparency reports that disclose government demands for data and Google's responses" },
      { id: 'B', text: "The Google Cloud pricing calculator, which estimates monthly costs for chosen services" },
      { id: 'C', text: "Cloud Monitoring dashboards, which show request counts and error rates for each service" },
      { id: 'D', text: "Security Command Center findings, which list misconfigurations in the nonprofit's projects" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google publishes transparency reports, including reports on government requests for customer and user data, describing how many requests it receives, from which countries, and how it responds, which is part of how Google Cloud earns trust. The pricing calculator estimates costs and says nothing about government requests. Cloud Monitoring dashboards show operational metrics for the nonprofit's own services. Security Command Center findings describe risks in the nonprofit's projects, not Google's handling of legal requests.",
    referenceUrl: "https://cloud.google.com/transparency",
    tags: ["Trust", "Transparency reports"]
  },
  {
    id: "gcp-cdl-447",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Auditor asks for the provider's SOC 2 report",
    scenario: "A payroll company's external auditor has asked for Google Cloud's latest SOC 2 report and ISO/IEC 27001 certificate as part of the annual audit of the company's controls. The head of risk needs to obtain those documents directly from Google.",
    question: "Where should the head of risk get them?",
    options: [
      { id: 'A', text: "Cloud Billing reports, which break down spending by service" },
      { id: 'B', text: "Security Command Center, which reports on the configuration posture of the company's projects" },
      { id: 'C', text: "Cloud Audit Logs, which record administrative activity in the payroll company's own projects" },
      { id: 'D', text: "Compliance Reports Manager, which offers Google's third-party audit reports" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Google Cloud undergoes regular independent third-party audits, and Compliance Reports Manager gives customers self-service access to the resulting reports and certificates, such as SOC 2 and ISO/IEC 27001, to share with their own auditors. Cloud Audit Logs record activity in the customer's projects, not Google's audited controls. Security Command Center shows the customer's own security posture and can map it to standards, but it does not provide Google's audit reports. Billing reports show spending.",
    referenceUrl: "https://cloud.google.com/security/compliance/compliance-reports-manager",
    tags: ["Trust", "Third-party audits", "Compliance"]
  },
  {
    id: "gcp-cdl-448",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Keep every resource inside Germany",
    scenario: "A German public-sector agency must keep its data stored at rest within Germany. Its cloud team will deploy to the Frankfurt and Berlin regions, but it also wants a guardrail that stops any engineer from accidentally creating storage or databases in another region.",
    question: "Which approach enforces the guardrail?",
    options: [
      { id: 'A', text: "Turn on Cloud CDN so content is cached in German edge locations" },
      { id: 'B', text: "Set Cloud Billing budgets on each project so that spending in other regions triggers an alert" },
      { id: 'C', text: "Apply an organization policy restricting resource locations to the German regions" },
      { id: 'D', text: "Rely on Google's default encryption at rest so that data stored elsewhere cannot be read" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data residency is achieved by choosing where data is stored, and the resource locations organization policy constraint enforces that choice by blocking creation of location-bound resources outside the allowed regions for every project under the policy. Budget alerts notify about spending after resources exist and do not prevent them being created elsewhere. Cloud CDN caches content at the edge and does not govern where storage and databases are created. Encryption protects confidentiality but does not change where the data physically resides.",
    referenceUrl: "https://docs.cloud.google.com/organization-policy/restrict-locations",
    tags: ["Data residency", "Organization policy", "Trust"]
  },
  {
    id: "gcp-cdl-449",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Classified workloads with no internet link",
    scenario: "A European defense ministry wants Google's cloud and AI capabilities for classified workloads. Its rules require the environment to run completely disconnected from the internet and from Google's public cloud, operated under the ministry's own control, with no possibility of remote access from outside.",
    question: "Which Google offering fits these requirements?",
    options: [
      { id: 'A', text: "Google Cloud Data Boundary, which keeps data in a chosen region inside the public cloud" },
      { id: 'B', text: "Google Distributed Cloud air-gapped, which runs isolated in the customer's own site" },
      { id: 'C', text: "Assured Workloads, which applies compliance controls to folders in the public cloud" },
      { id: 'D', text: "Cloud Interconnect, which links the ministry's data center privately to Google's regions" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google's sovereign cloud portfolio spans several levels of control. Google Distributed Cloud air-gapped is designed to operate fully disconnected from the internet and Google's public cloud, in facilities the customer controls, for classified and highly sensitive workloads, while still offering Google's cloud and AI capabilities. Google Cloud Data Boundary and Assured Workloads provide data residency and access controls, but workloads still run in the connected public cloud, which the ministry forbids. Cloud Interconnect creates a private link into Google's public regions, which is the opposite of disconnection.",
    referenceUrl: "https://cloud.google.com/distributed-cloud/air-gapped",
    tags: ["Digital sovereignty", "Air-gapped", "Trust"]
  },
  {
    id: "gcp-cdl-450",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Bank wants a veto over provider support access",
    scenario: "A bank already reviews logs showing when Google personnel access its content during support cases. Its regulator now requires that no such access happen at all unless a named bank employee explicitly approves each request in advance.",
    question: "Which capability should the bank enable?",
    options: [
      { id: 'A', text: "Cloud Audit Logs Data Access logs, which record the bank's own users reading its data" },
      { id: 'B', text: "Access Approval, which makes Google personnel wait for an approver at the bank before any access" },
      { id: 'C', text: "Access Transparency, which logs the actions Google personnel take on customer content" },
      { id: 'D', text: "Identity-Aware Proxy, which checks identity and context before admitting users to apps" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Access Approval lets customers require explicit approval before Google personnel can access their content, so each request waits for a named approver, which is exactly the regulator's demand. Access Transparency, which the bank already uses, provides near real-time logs of Google personnel actions but records access rather than preventing it until approved. Data Access audit logs cover the bank's own principals, not Google staff. Identity-Aware Proxy controls user access to applications and does not govern provider support access.",
    referenceUrl: "https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview",
    tags: ["Access Approval", "Access Transparency", "Trust"]
  }
];

export default GCP_CDL_QUESTIONS_18;
