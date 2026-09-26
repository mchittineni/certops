export const GCP_CDL_FLASHCARDS_16 = [
  {
    id: "gcp-cdl-fc-376",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Malware, virus and ransomware: how do the three terms relate?",
    hint: "One is the umbrella; the other two sit under it.",
    back: "<strong>Malware</strong> is the umbrella term for any malicious software. A <strong>virus</strong> is one kind of malware that attaches to legitimate files or programs and spreads when they run. <strong>Ransomware</strong> is malware that encrypts or locks data and demands payment for its release. The business impacts differ: viruses spread and disrupt, ransomware halts operations until data is restored from clean backups or a ransom is paid.",
    tags: ["Malware", "Threats"]
  },
  {
    id: "gcp-cdl-fc-377",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Why is a DDoS attack easier to absorb on Google Cloud than in a single on-premises data center?",
    hint: "Think about where the traffic is met and how much capacity sits there.",
    back: "A DDoS flood succeeds by exhausting capacity. On-premises, the attack must fit through the site's own internet links and appliances, which a large botnet can saturate. On Google Cloud, traffic to global load balancers is met at <strong>Google's edge</strong>, spread across a worldwide network with capacity far larger than any one attack, and filtered by <strong>Cloud Armor</strong> before it reaches the application, so legitimate users keep getting served.",
    tags: ["DDoS", "Cloud Armor", "Global network"]
  },
  {
    id: "gcp-cdl-fc-378",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What are the typical warning signs that attackers are cryptomining in your cloud project?",
    hint: "Look at the bill and at CPU graphs.",
    back: "Unexpected <strong>spikes in cost</strong>, new VMs or GPU instances that nobody launched, sustained <strong>100% CPU or GPU use</strong>, activity in regions the organization never uses, and connections to known mining pools. The usual root cause is leaked credentials such as a service account key. The business impact is financial first, but the same access could be used for data theft.",
    tags: ["Cryptomining", "Threats"]
  },
  {
    id: "gcp-cdl-fc-379",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Prompt injection vs data poisoning: how do these two LLM attacks differ?",
    hint: "One happens at question time, the other before the model ever answers.",
    back: "<strong>Prompt injection</strong> happens at inference time: crafted input, typed by a user or hidden in a document the model reads, tries to override the system instructions so the model leaks data or takes unintended actions. <strong>Data poisoning</strong> happens earlier: an attacker tampers with training, tuning or grounding data so the model learns wrong or malicious behavior. Input and output screening such as <strong>Model Armor</strong> targets the first; data governance and provenance controls target the second.",
    tags: ["LLM attacks", "Prompt injection", "Data poisoning"]
  },
  {
    id: "gcp-cdl-fc-380",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "How do you limit the risk that an unsecured third-party system becomes your breach?",
    hint: "Assume the vendor will be compromised one day.",
    back: "Grant each supplier the <strong>minimum access</strong> it needs, prefer <strong>short-lived credentials</strong> or federation over downloadable keys, scope access to specific resources, <strong>monitor</strong> its activity in audit logs, and review vendors' security certifications before and during the contract. The goal is that a breach at the supplier reaches as little of your environment as possible.",
    tags: ["Third-party risk", "Least privilege"]
  },
  {
    id: "gcp-cdl-fc-381",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Against physical damage, what does spreading across zones protect you from, and what needs regions?",
    hint: "Zones are inside a region; think about the size of the disaster.",
    back: "A <strong>zone</strong> is an isolated deployment area within a region, with independent power, cooling and networking, so running in several zones survives the loss of one facility, such as a fire or power failure. A regional disaster such as a flood, earthquake or widespread outage can affect every zone of a region, so protecting against it requires replicating to a <strong>second region</strong>.",
    tags: ["Physical damage", "Regions and zones", "Availability"]
  },
  {
    id: "gcp-cdl-fc-382",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Shared responsibility vs shared fate: what does Google add with the second idea?",
    hint: "The first draws a line; the second is about helping on your side of it.",
    back: "<strong>Shared responsibility</strong> divides security duties: Google secures the underlying cloud, the customer secures what it builds and puts in it, with the split shifting across IaaS, PaaS and SaaS. <strong>Shared fate</strong> is Google's commitment to take an active part in the customer's security outcome as well, through secure-by-default settings, security foundations blueprints and guidance, Assured Workloads, and programs such as Risk Protection, so customers are helped to configure their side well rather than left alone with it.",
    tags: ["Shared responsibility", "Shared fate"]
  },
  {
    id: "gcp-cdl-fc-383",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Name three ways security changes when a company moves from on-premises to the cloud.",
    hint: "Hardware, money, and who does the heavy lifting.",
    back: "The provider secures the <strong>physical infrastructure</strong>, so the customer no longer guards buildings or patches host hardware. Security tools shift from bought appliances (<strong>CapEx</strong>) to built-in, consumption-priced services (<strong>OpEx</strong>) that are updated continuously. And the customer's focus moves to <strong>identity, configuration and data</strong>, because in the cloud identity replaces the network edge as the main perimeter.",
    tags: ["Cloud vs on-premises", "Security operations"]
  },
  {
    id: "gcp-cdl-fc-384",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Confidentiality, integrity, availability: define each in one line.",
    hint: "Who can see it, whether it is right, whether you can reach it.",
    back: "<strong>Confidentiality</strong>: only authorized people can read the data. <strong>Integrity</strong>: the data is accurate and only authorized parties can change it. <strong>Availability</strong>: authorized users can reach systems and data when they need them. A leak breaks confidentiality, tampering breaks integrity, and an outage or DDoS breaks availability.",
    tags: ["CIA triad"]
  },
  {
    id: "gcp-cdl-fc-385",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Control vs compliance in the cloud security model: what is the difference?",
    hint: "One is about who decides; the other is about proving you follow the rules.",
    back: "<strong>Control</strong> means the customer keeps ownership of its data and decides who can access it, using IAM, customer-managed keys, Access Transparency and Access Approval to govern and verify access, even by the provider. <strong>Compliance</strong> means meeting applicable laws, regulations and standards such as GDPR, HIPAA or PCI DSS, and being able to demonstrate it, using the provider's certifications together with the customer's own configuration.",
    tags: ["Control", "Compliance"]
  },
  {
    id: "gcp-cdl-fc-386",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Why do basic roles like Owner and Editor clash with least privilege in Google Cloud?",
    hint: "Count the services each one touches.",
    back: "Basic roles grant <strong>broad permissions across nearly every service</strong> in a project: Editor can create and delete most resources, and Owner can also manage access. Least privilege calls for <strong>predefined roles</strong> scoped to one service and task, such as a logs viewer, or <strong>custom roles</strong> when no predefined role fits. The IAM role recommender highlights unused permissions so grants can be trimmed over time.",
    tags: ["Least privilege", "IAM roles"]
  },
  {
    id: "gcp-cdl-fc-387",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What are the core principles of a zero-trust architecture?",
    hint: "Where you connect from earns you nothing.",
    back: "<strong>Never trust by network location</strong>; verify explicitly on every request using the user's identity, device health and context; grant the <strong>least access</strong> needed; and assume breach, so monitor continuously. Google built its own workforce access this way as <strong>BeyondCorp</strong>, and offers it through Identity-Aware Proxy and Chrome Enterprise Premium so staff can reach apps without a VPN.",
    tags: ["Zero trust", "BeyondCorp"]
  },
  {
    id: "gcp-cdl-fc-388",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What is privileged access, and why is standing privilege a risk?",
    hint: "Powerful rights that are always on are always available to steal.",
    back: "<strong>Privileged access</strong> is the ability to perform powerful actions such as changing permissions, deleting production resources or reading all data. <strong>Standing privilege</strong>, rights that are held permanently, gives attackers a valuable target if the account is compromised. The remedy is <strong>just-in-time access</strong>: elevation requested with a justification, approved, time-bound and logged, which Google Cloud offers as Privileged Access Manager.",
    tags: ["Privileged access", "PAM"]
  },
  {
    id: "gcp-cdl-fc-389",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does \"security posture\" mean, and how is it managed?",
    hint: "A snapshot of strength, plus the work of keeping it strong.",
    back: "<strong>Security posture</strong> is the overall strength of an organization's security at a point in time: its controls, configurations, vulnerabilities and readiness to respond. <strong>Posture management</strong> continuously compares the environment against policies and benchmarks, flags misconfigurations and drift, and prioritizes fixes. In Google Cloud, <strong>Security Command Center</strong> provides posture management with predefined postures and detection of drift.",
    tags: ["Security posture", "Security Command Center"]
  },
  {
    id: "gcp-cdl-fc-390",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does cyber resilience add beyond preventing attacks?",
    hint: "Prevention will sometimes fail.",
    back: "<strong>Cyber resilience</strong> is the ability to <strong>anticipate, withstand, recover from and adapt to</strong> cyber incidents while keeping essential business running. Beyond preventive controls it needs detection and response capability, tested incident-response plans, isolated and immutable backups, redundancy across locations, and lessons learned after each event. It is measured by how quickly the business can keep operating, not just by how many attacks are blocked.",
    tags: ["Cyber resilience"]
  },
  {
    id: "gcp-cdl-fc-391",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "VPC firewall rules: what happens to traffic that no rule you wrote matches?",
    hint: "Two implied rules sit at the lowest priority.",
    back: "Every VPC network has two <strong>implied rules</strong> at the lowest priority: <strong>deny all ingress</strong> and <strong>allow all egress</strong>. So inbound connections are blocked unless a rule allows them, and outbound connections are allowed unless a rule denies them. Rules are <strong>stateful</strong>, so replies to an allowed connection are permitted automatically. Hierarchical firewall policies at the organization or folder level are evaluated before the VPC's own rules.",
    tags: ["Firewall", "VPC"]
  },
  {
    id: "gcp-cdl-fc-392",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Encryption vs decryption: what does each do, and what makes it secure?",
    hint: "Everything depends on one secret.",
    back: "<strong>Encryption</strong> uses an algorithm and a key to turn readable plaintext into unreadable ciphertext; <strong>decryption</strong> uses the right key to turn ciphertext back into plaintext. The security rests on protecting the <strong>key</strong>, not on hiding the algorithm, which is why key management, including who holds and can revoke keys, matters so much in the cloud.",
    tags: ["Encryption", "Decryption"]
  },
  {
    id: "gcp-cdl-fc-393",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "At rest, in transit, in use: what protects each state of data on Google Cloud?",
    hint: "Two are on by default; the third is a product choice.",
    back: "<strong>At rest</strong>: Google encrypts all stored customer content by default. <strong>In transit</strong>: traffic is protected with TLS to Google, and data moving between Google facilities is encrypted by default. <strong>In use</strong>: <strong>Confidential Computing</strong> (for example Confidential VMs) keeps data encrypted in memory while it is being processed, which is an option the customer chooses.",
    tags: ["Encryption", "Data states", "Confidential Computing"]
  },
  {
    id: "gcp-cdl-fc-394",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "How does Google's default encryption at rest actually work?",
    hint: "Keys protect data, and other keys protect those keys.",
    back: "Stored data is split into chunks and each chunk is encrypted with its own <strong>data encryption key</strong> using <strong>AES-256</strong>. Those DEKs are in turn encrypted, or wrapped, by <strong>key encryption keys</strong> held in Google's internal key management service. This <strong>envelope encryption</strong> limits the blast radius of any single key and allows keys to be rotated without re-encrypting all data. It is automatic and requires no action from the customer.",
    tags: ["Encryption at rest", "Envelope encryption"]
  },
  {
    id: "gcp-cdl-fc-395",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Default encryption, CMEK, Cloud HSM, Cloud EKM: how does control over keys increase?",
    hint: "Follow where the key lives and who can switch it off.",
    back: "<strong>Default</strong>: Google creates and manages the keys. <strong>CMEK in Cloud KMS</strong>: the customer creates, rotates, disables and destroys the keys in Google's KMS. <strong>Cloud HSM</strong>: CMEK keys are generated and kept in FIPS 140-2 Level 3 hardware modules. <strong>Cloud EKM</strong>: keys live in an external key manager run by the customer or a partner outside Google, so the customer can refuse every decryption request.",
    tags: ["Key management", "CMEK", "Cloud EKM"]
  },
  {
    id: "gcp-cdl-fc-396",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Authentication, authorization, auditing: which question does each answer?",
    hint: "Who, what may, what did.",
    back: "<strong>Authentication</strong> answers \"who are you?\" by verifying identity, for example a password plus a second factor. <strong>Authorization</strong> answers \"what are you allowed to do?\", which IAM roles decide. <strong>Auditing</strong> answers \"what did you do, and when?\" through logs such as Cloud Audit Logs, used for investigations and proving compliance.",
    tags: ["Authentication", "Authorization", "Auditing"]
  },
  {
    id: "gcp-cdl-fc-397",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Multi-factor authentication vs 2-Step Verification: is there a difference?",
    hint: "Google uses one name for the other.",
    back: "<strong>Multi-factor authentication</strong> requires two or more different kinds of evidence: something you know (password), something you have (phone or security key), or something you are (biometric). <strong>2-Step Verification (2SV)</strong> is Google's name for MFA on Google accounts. Not all second factors are equal: SMS codes can be phished or intercepted, while <strong>FIDO security keys and passkeys</strong> are phishing-resistant.",
    tags: ["MFA", "2SV"]
  },
  {
    id: "gcp-cdl-fc-398",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What are the three building blocks of a Google Cloud IAM allow policy?",
    hint: "Who, which permissions, and the binding between them.",
    back: "A <strong>principal</strong> (a user, group, service account or domain), a <strong>role</strong> (a named collection of permissions), and the <strong>allow policy</strong> that binds principals to roles on a resource. Policies set on an organization, folder or project are <strong>inherited</strong> by the resources beneath it.",
    tags: ["IAM", "Principals", "Roles"]
  },
  {
    id: "gcp-cdl-fc-399",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Which Cloud Audit Logs are always on, and which must you enable?",
    hint: "One common type is off by default because it can be huge.",
    back: "<strong>Admin Activity</strong> logs (configuration and metadata changes) and <strong>System Event</strong> logs (actions taken by Google systems) are always written and cannot be turned off. <strong>Policy Denied</strong> logs record access refused by a security policy and are generated by default. <strong>Data Access</strong> logs, which record reads and writes of user data, are disabled by default for most services (BigQuery is the exception) because of their volume.",
    tags: ["Cloud Audit Logs", "Auditing"]
  },
  {
    id: "gcp-cdl-fc-400",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What are the three jobs of a data loss prevention tool?",
    hint: "Find it, label it, make it safe.",
    back: "<strong>Discover</strong> where sensitive data lives across storage, databases and warehouses; <strong>classify</strong> it by type (card numbers, national IDs, health data) and risk; and <strong>protect</strong> it by de-identification such as masking, redaction, tokenization or format-preserving encryption so data stays useful without exposing raw values. Google Cloud's tool for this is <strong>Sensitive Data Protection</strong>.",
    tags: ["Data loss prevention", "Sensitive Data Protection"]
  }
];

export default GCP_CDL_FLASHCARDS_16;
