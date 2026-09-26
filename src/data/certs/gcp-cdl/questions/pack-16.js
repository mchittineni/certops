export const GCP_CDL_QUESTIONS_16 = [
  {
    id: "gcp-cdl-376",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Concert on-sale knocked offline by junk traffic",
    scenario: "A ticketing company's storefront became unreachable minutes after a stadium tour went on sale. Logs show millions of requests arriving from tens of thousands of compromised home routers and cameras, and a forensic review found that no data was read, changed, or encrypted.",
    question: "Which kind of threat does this incident describe?",
    options: [
      { id: 'A', text: "A ransomware attack that encrypted the ticketing database and then demanded payment for the decryption key" },
      { id: 'B', text: "A phishing campaign that tricked staff into handing over credentials later used to take the storefront down" },
      { id: 'C', text: "A cryptomining intrusion that hijacked the web servers to mine currency and slowed every page response" },
      { id: 'D', text: "A distributed denial-of-service attack that exhausted capacity so genuine buyers could not reach the site" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A distributed denial-of-service (DDoS) attack floods a service with traffic from many sources, often botnets of hijacked devices, until legitimate users cannot get through; the business impact is lost sales and reputation even though nothing is stolen. Ransomware would have left data encrypted with a ransom demand, which the forensic review ruled out. Phishing steals credentials from people, and there is no sign of any account being misused here. Cryptomining abuses compute for mining and shows up as high CPU and unexpected cost rather than a flood of inbound requests from thousands of devices.",
    referenceUrl: "https://cloud.google.com/learn/what-is-ddos",
    tags: ["DDoS", "Threats", "Availability"]
  },
  {
    id: "gcp-cdl-377",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Hospital file shares locked with a ransom note",
    scenario: "A regional hospital arrived one morning to find its shared drives unreadable and a note demanding cryptocurrency in exchange for a key. Clinicians fell back to paper charts. The board wants to know what would have let the hospital restore service without negotiating with the attackers.",
    question: "Which preparation would most directly have allowed recovery without paying?",
    options: [
      { id: 'A', text: "Rotating the TLS certificates on the file servers so that all traffic reaching them uses newly issued keys" },
      { id: 'B', text: "Putting a web application firewall in front of the patient portal to filter injection attempts from the internet" },
      { id: 'C', text: "Adding a synchronized copy of the file shares in a second zone so storage survives the loss of one zone" },
      { id: 'D', text: "Keeping regularly tested backups that are isolated from production and protected from any modification" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Ransomware encrypts the victim's data and sells the key back, so the dependable way out is a clean copy of the data the attackers could not reach: backups kept separate from production, protected from modification or deletion, and restored in regular tests so the recovery time is known. A web application firewall filters malicious web requests and would not have stopped an attacker already inside encrypting file shares. New TLS certificates protect traffic in transit and do nothing for files encrypted at rest by an intruder. A synchronized second-zone copy protects against a zone outage, but replication faithfully copies the encrypted files too, so both copies end up unusable.",
    referenceUrl: "https://cloud.google.com/learn/what-is-ransomware",
    tags: ["Ransomware", "Backups", "Cyber resilience"]
  },
  {
    id: "gcp-cdl-378",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Order exports readable by anyone on the internet",
    scenario: "A retailer learned from a security researcher that a Cloud Storage bucket holding daily customer order exports could be read by anyone with the link. An engineer had granted public read access during a quick integration test months earlier and never removed it. No systems were broken into.",
    question: "Which category of security risk caused this exposure?",
    options: [
      { id: 'A', text: "A misconfiguration, where a setting left open by the organization exposed data without any break-in" },
      { id: 'B', text: "An unsecured third-party system, where a partner platform leaked data that the retailer had shared" },
      { id: 'C', text: "Malware planted on an engineering laptop that silently copied the exports out to an external server" },
      { id: 'D', text: "A distributed denial-of-service attack that overwhelmed the bucket and forced it into an open state" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Misconfiguration is one of the most common causes of cloud data exposure: a permission, network rule or sharing setting is left more open than intended, and data becomes reachable without any exploit. Here the organization's own public-access grant was the cause. Malware would involve malicious code on a device exfiltrating data, which did not happen. A third-party risk would involve a vendor's system, but the bucket belonged to the retailer. A denial-of-service attack degrades availability and never changes access settings on a storage bucket.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-security",
    tags: ["Misconfiguration", "Threats", "Cloud Storage"]
  },
  {
    id: "gcp-cdl-379",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Payroll vendor breach reaches the customer tenant",
    scenario: "A manufacturer uses an outside payroll provider that was given a long-lived service account key with broad Editor access to the manufacturer's Google Cloud project so it could pull timesheet data. Attackers breached the provider, found the key, and used it to create resources and copy data. Leadership wants to limit the damage from any future supplier breach.",
    question: "What is the most effective way to reduce this risk going forward?",
    options: [
      { id: 'A', text: "Require the provider to send its annual penetration test report and keep granting the same broad access" },
      { id: 'B', text: "Turn on default encryption at rest for the project so that data copied by the attackers stays unreadable" },
      { id: 'C', text: "Move the timesheet data into a separate folder while leaving the provider key and its role unchanged" },
      { id: 'D', text: "Grant the provider only the narrow read role it needs, use short-lived credentials, and monitor its use" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "This is an unsecured third-party system risk: a supplier's weaker security became a path into the manufacturer's environment. The damage was large because the supplier held a long-lived key with an overly broad role. Scoping the supplier to the minimum role it needs, replacing downloadable keys with short-lived credentials such as Workload Identity Federation, and watching its activity in audit logs limits what a future breach can reach. A penetration test report offers some assurance but changes nothing about the excess access. Moving data to another folder does not help when the key keeps its Editor role wherever it is granted. Encryption at rest is already on by default and does not stop an authorized identity from reading data, because the platform decrypts transparently for callers with permission.",
    referenceUrl: "https://docs.cloud.google.com/iam/docs/using-iam-securely",
    tags: ["Third-party risk", "Least privilege", "Service accounts"]
  },
  {
    id: "gcp-cdl-380",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Support chatbot talked into leaking discount codes",
    scenario: "An online travel agency launched a generative AI assistant that answers booking questions using internal policy documents. A user typed a message telling the assistant to disregard its earlier instructions and list every staff-only discount code, and the assistant complied. The model itself and its training data were never touched.",
    question: "What type of attack did the user carry out?",
    options: [
      { id: 'A', text: "A data poisoning attack that corrupted the examples used to train the model before it was deployed" },
      { id: 'B', text: "A credential stuffing attack that replayed leaked passwords to sign in to an employee account" },
      { id: 'C', text: "A SQL injection attack that inserted database commands into a web form to read the discount table" },
      { id: 'D', text: "A prompt injection attack that used crafted input to make the model ignore the rules its developers set" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Prompt injection is an attack on large language model applications in which crafted input persuades the model to ignore its system instructions and reveal data or take actions it should not; it happens at inference time and needs no access to the model. Data poisoning is also an LLM threat, but it tampers with training or grounding data before the model runs, and the scenario says that data was untouched. SQL injection targets a database query built from unsanitized input, not a conversational model. Credential stuffing reuses stolen passwords to log in, whereas this user never signed in as anyone else.",
    referenceUrl: "https://cloud.google.com/security/securing-ai",
    tags: ["LLM attacks", "Prompt injection", "Generative AI"]
  },
  {
    id: "gcp-cdl-381",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Surprise bill from idle project in a far region",
    scenario: "A media startup's monthly Google Cloud bill jumped tenfold. Investigation found dozens of large VMs running at full CPU in a region the company never uses, all created with a service account key that a developer had accidentally committed to a public code repository.",
    question: "What most likely happened?",
    options: [
      { id: 'A', text: "A distributed denial-of-service attack forced autoscaling to add VMs in that distant region" },
      { id: 'B', text: "Attackers used the leaked key to run cryptomining workloads on compute billed to the company" },
      { id: 'C', text: "A phishing email led an employee to approve a production launch in the wrong cloud region" },
      { id: 'D', text: "A ransomware gang encrypted the VMs and then left them running at full load as a warning" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Cryptomining attacks hijack cloud resources to mine cryptocurrency, and the telltale signs are exactly these: unfamiliar high-CPU instances, often in unused regions, created with stolen credentials, and a sudden jump in cost. Ransomware makes data unusable and demands payment; it does not spin up new machines that burn CPU. A denial-of-service attack floods an existing service and would scale resources where the service runs, not create unrelated VMs in a region the company never uses. Nothing suggests an employee was deceived; the key was exposed through a public repository.",
    referenceUrl: "https://cloud.google.com/security/products/cryptomining-protection",
    tags: ["Cryptomining", "Leaked credentials", "Threats"]
  },
  {
    id: "gcp-cdl-382",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Lookalike sign-in page targeting finance staff",
    scenario: "Several finance employees at an insurance broker received convincing emails that appeared to come from the IT help desk, linking to a page that looked exactly like the company's Google sign-in screen. Two people entered their passwords before the page was taken down. The CISO wants stolen passwords alone to be useless to an attacker next time.",
    question: "Which control best meets that goal?",
    options: [
      { id: 'A', text: "Require 2-Step Verification with phishing-resistant security keys for every account used to sign in" },
      { id: 'B', text: "Encrypt the mailboxes at rest so that phishing messages cannot be read after they have been delivered" },
      { id: 'C', text: "Force every employee to change passwords every 30 days so that any stolen password expires quickly" },
      { id: 'D', text: "Block all inbound email from outside domains with a network firewall rule on the corporate office LAN" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Phishing steals credentials by impersonating a trusted party. 2-Step Verification adds a second factor, and hardware security keys based on FIDO standards are phishing-resistant because they cryptographically check the site's real origin, so a lookalike page cannot collect a usable second factor; the stolen password alone no longer opens the account. Frequent password changes still leave a window of up to a month and push users toward weaker passwords. Encrypting mailboxes at rest protects stored mail from disclosure and does nothing to stop users entering credentials on a fake page. Blocking all external email would halt legitimate business and would not protect staff working away from the office network.",
    referenceUrl: "https://cloud.google.com/learn/what-is-phishing",
    tags: ["Phishing", "2SV", "Security keys"]
  },
  {
    id: "gcp-cdl-383",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Flood risk at the only data center",
    scenario: "An agricultural cooperative runs all of its ordering systems in one server room on the ground floor of its headquarters, which sits on a river flood plain. Insurers have warned that a single flood could halt the business for weeks. The cooperative is weighing a move to Google Cloud.",
    question: "Which characteristic of Google Cloud most directly reduces this physical-damage risk?",
    options: [
      { id: 'A', text: "Workloads can be spread across multiple zones and regions, so losing one site does not stop daily operations" },
      { id: 'B', text: "Cloud Billing budgets alert finance when spending on infrastructure rises above the amount they planned" },
      { id: 'C', text: "Google encrypts customer data at rest by default, so flooded disks cannot be read by whoever recovers them" },
      { id: 'D', text: "Identity and Access Management lets the cooperative restrict which employees can reach the ordering systems" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Physical damage from floods, fire or power loss is a threat to availability. Google Cloud regions are made up of independent zones, and workloads and data can be replicated across zones or regions so that a failure at one location does not take the business offline. Default encryption at rest protects confidentiality of stored data but does not keep a flooded site running. IAM controls who can access systems, which is unrelated to a flood. Budget alerts help control cost and have no bearing on surviving a physical disaster.",
    referenceUrl: "https://docs.cloud.google.com/compute/docs/regions-zones",
    tags: ["Physical damage", "Availability", "Regions and zones"]
  },
  {
    id: "gcp-cdl-384",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Dividing duties after moving servers to VMs",
    scenario: "A logistics firm is rehosting its dispatch application from its own data center onto Compute Engine VMs without changing the application. The IT director wants a clear list of the security tasks that will still sit with her team after the move.",
    question: "Which responsibility remains with the logistics firm?",
    options: [
      { id: 'A', text: "Protecting the private fiber network that carries traffic between Google data center facilities" },
      { id: 'B', text: "Replacing failed disks and hardening the firmware on the host machines that run the hypervisor" },
      { id: 'C', text: "Patching the guest operating system and deciding which users and services can reach each VM" },
      { id: 'D', text: "Securing physical access to the data center buildings where the VM host servers are running" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Under the shared responsibility model for infrastructure as a service, Google secures the physical facilities, hardware, hypervisor and its global network, while the customer secures what it runs on top: the guest operating system and its patches, the application, firewall rules, and identity and access management for its users and service accounts. Physical building security, host hardware and firmware, and the backbone network between data centers are all part of the infrastructure Google operates, so none of those stays with the logistics firm.",
    referenceUrl: "https://docs.cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate",
    tags: ["Shared responsibility", "Compute Engine", "Cloud vs on-premises"]
  },
  {
    id: "gcp-cdl-385",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "The duty that never moves to the provider",
    scenario: "A publishing group is consolidating three platforms: VMs on Compute Engine, a warehouse in BigQuery, and staff email on Google Workspace. Its risk committee notes that the split of security duties changes a great deal between those service models and asks what the group will own in every one of them.",
    question: "Which responsibility stays with the customer across IaaS, PaaS and SaaS alike?",
    options: [
      { id: 'A', text: "Maintaining the application code for the email service, including fixes for newly found flaws" },
      { id: 'B', text: "Deciding who may access its data and content, and configuring the access policies that enforce it" },
      { id: 'C', text: "Scaling and hardening the servers that run the query engine behind the warehouse as demand grows" },
      { id: 'D', text: "Applying security patches to the operating systems that sit underneath each of the three platforms" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "As a customer moves from IaaS to PaaS to SaaS, the provider takes on more of the stack, but the customer always remains responsible for its data, for classifying it, and for controlling who can access it through identity and access settings. Operating-system patching is the customer's job on VMs but Google's on BigQuery and Workspace, so it is not constant across all three. The servers under BigQuery are run and scaled by Google as part of a serverless service. The code of a SaaS product like Workspace is maintained entirely by the provider.",
    referenceUrl: "https://docs.cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate",
    tags: ["Shared responsibility", "Service models", "Data access"]
  },
  {
    id: "gcp-cdl-386",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Security budget tied up in appliances",
    scenario: "An insurer's security team spends much of its budget buying and replacing firewall and intrusion-detection appliances every few years, and much of its time installing firmware updates on them. The CISO says that on Google Cloud these protections would be built into the platform, updated continuously, and paid for as part of consumption.",
    question: "Which difference between on-premises and cloud security is the CISO describing?",
    options: [
      { id: 'A', text: "In the cloud security capabilities are delivered and maintained at scale by the provider as a service" },
      { id: 'B', text: "In the cloud the customer needs more upfront capital because security appliances must be bought first" },
      { id: 'C', text: "In the cloud the customer takes over physical security of the provider data centers from the provider" },
      { id: 'D', text: "In the cloud security becomes optional because the provider accepts all liability for any breaches" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A key difference is that a cloud provider delivers many security capabilities as built-in, continuously updated services operated at massive scale, so customers stop buying, racking and patching their own security hardware and instead consume protection as an operating expense. The customer never takes over physical security of Google's data centers; that stays with Google. Security is not optional in the cloud, and responsibility is shared rather than transferred wholesale. The upfront-capital claim is backwards, since cloud replaces appliance purchases with pay-as-you-go spending.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-security",
    tags: ["Cloud vs on-premises", "OpEx", "Security operations"]
  },
  {
    id: "gcp-cdl-387",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Storefront down but nothing stolen or altered",
    scenario: "An outdoor-gear retailer's online store was unreachable for six hours on a holiday weekend because of a failed network change. Afterward the team confirmed that no customer records were exposed and that every order and price was exactly as it had been.",
    question: "Which security principle was affected by the outage?",
    options: [
      { id: 'A', text: "Confidentiality, because customer records could have been seen by people without approval" },
      { id: 'B', text: "Availability, because authorized users could not reach the service when they needed it" },
      { id: 'C', text: "Compliance, because the retailer broke a regulation that governs how records are retained" },
      { id: 'D', text: "Integrity, because orders and prices might have been altered while the site was offline" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The confidentiality, integrity and availability triad describes what security protects. Availability means authorized users can reach systems and data when needed, and a six-hour outage is a loss of availability. Confidentiality was not affected because no records were exposed. Integrity was intact because every order and price was verified as unchanged. Compliance concerns meeting legal and regulatory obligations, and nothing indicates a regulation was breached by the outage.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-security",
    tags: ["CIA triad", "Availability"]
  },
  {
    id: "gcp-cdl-388",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Prices quietly changed in the product catalog",
    scenario: "A wholesaler noticed that hundreds of product prices in its catalog database had been lowered overnight. The intruder had read access to nothing sensitive and did not take the site down, but orders placed at the wrong prices cost the company heavily before anyone noticed.",
    question: "Which security property did the attack violate?",
    options: [
      { id: 'A', text: "Confidentiality, since the attacker was able to read catalog data that had not been published" },
      { id: 'B', text: "Non-repudiation, since customers could deny placing the orders once the prices were corrected" },
      { id: 'C', text: "Availability, since the site had to be taken down and restored after the changes were detected" },
      { id: 'D', text: "Integrity, since data was changed by someone who was not authorized to make those changes" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrity means data is accurate and can only be changed by authorized parties; an attacker silently altering prices is a textbook integrity violation, and controls such as least-privilege write access, change auditing and validation help protect it. Availability was not affected, since the scenario states the site stayed up. Confidentiality concerns unauthorized reading, and the intruder read nothing sensitive. Non-repudiation is about proving who performed an action; customers did place those orders, so repudiation is not the harm here.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cloud-security",
    tags: ["CIA triad", "Integrity"]
  },
  {
    id: "gcp-cdl-389",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Regulator insists the bank decides who gets in",
    scenario: "A savings bank's regulator will approve its move to Google Cloud only if the bank itself, not the provider, determines who may access customer data, can revoke that access at any moment, and can prove Google staff cannot use the data for their own purposes.",
    question: "Which aspect of the cloud security model is the regulator focused on?",
    options: [
      { id: 'A', text: "Control, meaning the customer keeps ownership of its data and governs every access decision" },
      { id: 'B', text: "Scalability, meaning capacity for customer data grows automatically as account numbers rise" },
      { id: 'C', text: "Availability, meaning the provider keeps systems reachable within an agreed uptime percentage" },
      { id: 'D', text: "Integrity, meaning each record carries a checksum that detects any unauthorized modification" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Control in the cloud security model means the customer retains ownership of its data and decides who can use it, with tools such as IAM, customer-managed encryption keys, Access Transparency and Access Approval to govern and verify access, including by the provider's own personnel. Availability concerns uptime, which the regulator did not raise. Integrity concerns protecting data from unauthorized change, a different property from deciding who is allowed in. Scalability is a capacity benefit, not a security principle.",
    referenceUrl: "https://cloud.google.com/security/products/security-key-management",
    tags: ["Control", "Data ownership", "Regulation"]
  },
  {
    id: "gcp-cdl-390",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Clinic software firm faces HIPAA questions",
    scenario: "A company that builds scheduling software for medical clinics is moving to Google Cloud. Hospital customers keep asking whether the product meets HIPAA requirements and want evidence they can show their own auditors.",
    question: "What does compliance mean in this context?",
    options: [
      { id: 'A', text: "Encrypting every data transfer between clinics and the application so it cannot be read in transit" },
      { id: 'B', text: "Meeting the applicable laws and industry standards and being able to demonstrate that adherence" },
      { id: 'C', text: "Keeping the scheduling application reachable during clinic hours with a guaranteed uptime target" },
      { id: 'D', text: "Letting clinic administrators choose which of their staff may view the patient appointment records" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Compliance means adhering to the laws, regulations and industry standards that apply to the business, such as HIPAA for health data, and being able to demonstrate that adherence to auditors and customers. In the cloud it is shared: Google provides certified infrastructure and documentation, and the customer configures and operates its product in a compliant way. Encryption in transit is one control that may help meet a requirement, but it is not compliance itself. An uptime target describes availability. Letting administrators choose who views records is access control, again a single control rather than the overall obligation.",
    referenceUrl: "https://cloud.google.com/security/compliance/offerings",
    tags: ["Compliance", "HIPAA"]
  },
  {
    id: "gcp-cdl-391",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Summer intern handed full project rights",
    scenario: "A marketing agency's summer intern needs to read application logs in one Google Cloud project to help troubleshoot a campaign site. To save time, a manager granted the intern the Owner role on the project, which also allows deleting resources and changing permissions.",
    question: "Which security principle does the manager's shortcut violate?",
    options: [
      { id: 'A', text: "Separation of duties, which splits a sensitive task so no single person can complete it" },
      { id: 'B', text: "Data residency, which keeps data stored within an agreed geographic area for regulators" },
      { id: 'C', text: "Defense in depth, which layers several independent controls so one failure is not enough" },
      { id: 'D', text: "Least privilege, which gives each identity only the access it requires to do its job" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Least privilege means granting each user or service only the permissions required for its task; here a logs viewing role would have been enough, and the Owner role exposes the project to accidental or malicious deletion and permission changes. Defense in depth is about stacking multiple controls and is not what the shortcut breaks. Separation of duties splits sensitive processes between people, which is related but not the principle at stake for a single over-permissioned intern. Data residency concerns where data is stored and has nothing to do with the role granted.",
    referenceUrl: "https://docs.cloud.google.com/iam/docs/using-iam-securely",
    tags: ["Least privilege", "IAM"]
  },
  {
    id: "gcp-cdl-392",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Retiring the VPN for per-request access checks",
    scenario: "An engineering consultancy's staff work from homes, client sites and cafes. Leadership wants to stop treating anyone connected to the corporate VPN as trusted and instead check the user's identity, the health of their device and the context of each request before granting access to any internal application.",
    question: "Which security model is the consultancy adopting?",
    options: [
      { id: 'A', text: "A castle-and-moat perimeter model where every device is trusted once it is inside the network edge" },
      { id: 'B', text: "A zero-trust model in which no user or device is trusted by default on the basis of location" },
      { id: 'C', text: "A role-based model that grants access from job titles once a user connects through the VPN" },
      { id: 'D', text: "An air-gapped model that disconnects internal applications from every external network link" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Zero-trust architecture assumes no implicit trust based on network location; every request is evaluated using identity, device state and context, which is the approach Google pioneered as BeyondCorp and offers through Identity-Aware Proxy and Chrome Enterprise Premium. The castle-and-moat model is what the consultancy is abandoning, because it trusts anything inside the perimeter. An air gap would make applications unreachable for remote staff. Role-based access alone still trusts the VPN connection and ignores device health and request context.",
    referenceUrl: "https://cloud.google.com/learn/what-is-zero-trust",
    tags: ["Zero trust", "BeyondCorp"]
  },
  {
    id: "gcp-cdl-393",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Standing admin rights for the platform team",
    scenario: "Eight platform engineers at a payments company hold permanent administrator roles on production, although each of them needs elevated access only a few times a month. Auditors want elevated access to be requested with a justification, approved, and removed automatically after a short window.",
    question: "Which approach meets the auditors' request?",
    options: [
      { id: 'A', text: "Just-in-time privileged access that grants elevated rights for a set period once signed off" },
      { id: 'B', text: "Break-glass accounts with permanent administrator rights that are reserved for emergencies only" },
      { id: 'C', text: "Service account keys issued to each engineer so that elevated actions run as a machine identity" },
      { id: 'D', text: "A shared administrator account whose password is kept in a vault and checked out when needed" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Privileged access refers to powerful rights such as administrator roles; best practice is to avoid standing privilege and grant it just in time, for a limited period, after a justified and approved request, which Google Cloud supports with Privileged Access Manager. A shared vaulted account loses individual accountability and still carries standing power. Break-glass accounts are a valid emergency fallback but keep permanent rights and do not meet the everyday request-and-expire requirement. Handing engineers service account keys creates long-lived credentials and hides which person acted.",
    referenceUrl: "https://docs.cloud.google.com/iam/docs/pam-overview",
    tags: ["Privileged access", "Just-in-time access"]
  },
  {
    id: "gcp-cdl-394",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Card numbers turning up in support transcripts",
    scenario: "A subscription box company found that customers often paste full payment card numbers into chat transcripts, which are later copied into an analytics warehouse used by dozens of analysts. The compliance lead wants that sensitive data found and masked automatically before analysts see it, without deleting the transcripts.",
    question: "Which security capability addresses this need?",
    options: [
      { id: 'A', text: "Encryption at rest applied to the warehouse tables with a key held in a key management service" },
      { id: 'B', text: "A web application firewall that blocks chat requests that contain suspicious-looking payloads" },
      { id: 'C', text: "Multi-factor authentication for analysts so only verified people can open the warehouse tables" },
      { id: 'D', text: "Data loss prevention that inspects content, classifies it, and masks or tokenizes what it finds" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Data loss prevention tools inspect content to discover and classify sensitive data such as payment card numbers and then de-identify it by masking, redacting or tokenizing, so the transcripts stay useful while analysts never see the raw numbers; on Google Cloud this is Sensitive Data Protection. A web application firewall filters malicious requests and would not recognize or mask legitimate card numbers typed by customers. Encryption at rest protects stored data from outsiders, but authorized analysts would still see decrypted card numbers when querying. MFA verifies who analysts are but still shows them the unmasked values.",
    referenceUrl: "https://cloud.google.com/learn/what-is-data-loss-prevention",
    tags: ["Data loss prevention", "Sensitive data"]
  },
  {
    id: "gcp-cdl-395",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Two questions from the audit committee",
    scenario: "An energy utility's audit committee asked the CISO two things. First, how strong the company's defenses and configurations are today compared with its policies. Second, whether the company could keep delivering power and billing customers during a major cyberattack and bounce back quickly afterward.",
    question: "Which term describes what the second question is asking about?",
    options: [
      { id: 'A', text: "Cyber resilience, the capacity to continue working through an attack and recover fast" },
      { id: 'B', text: "Threat intelligence, the knowledge about attacker groups and their current techniques" },
      { id: 'C', text: "Security posture, the overall strength of controls and configurations at a point in time" },
      { id: 'D', text: "Security by default, the practice of shipping systems with safe settings already on" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cyber resilience is an organization's ability to anticipate, withstand, operate through and recover from cyber incidents, which is exactly the second question about continuing service and bouncing back. Security posture describes the current strength of defenses and configurations, which is the first question, not the second. Threat intelligence is information about adversaries that feeds defenses but does not measure the ability to continue operating. Security by default describes safe out-of-the-box settings, a design principle rather than a measure of recovery.",
    referenceUrl: "https://cloud.google.com/learn/what-is-cyber-resilience",
    tags: ["Cyber resilience", "Security posture"]
  },
  {
    id: "gcp-cdl-396",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Guardrails already switched on in a new organization",
    scenario: "A fintech startup created its Google Cloud organization last month. Its first engineers were surprised to find that creating downloadable service account keys was blocked and that default service accounts no longer received the Editor role, even though nobody on the team had configured those restrictions.",
    question: "Which security principle explains why these protections were already in place?",
    options: [
      { id: 'A', text: "Shift-left testing, which moves security scans into the earliest stages of development" },
      { id: 'B', text: "Zero trust, which gives no default trust to a request just because of its network origin" },
      { id: 'C', text: "Defense in depth, which stacks several separate controls so that any one may fail safely" },
      { id: 'D', text: "Security by default, which ships the platform with protective settings preset and enforced" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security by default means products start in a secure configuration so customers are protected without having to opt in; Google Cloud applies a set of secure-by-default organization policies to new organizations, such as disabling service account key creation, withholding the Editor role from default service accounts and enforcing uniform bucket-level access on Cloud Storage. Defense in depth is the layering of multiple controls, but it does not explain why these controls appeared without configuration. Zero trust evaluates each access request by identity and context, a different idea from preset restrictions. Shift-left testing is a development practice for finding flaws early and is unrelated to platform defaults.",
    referenceUrl: "https://docs.cloud.google.com/resource-manager/docs/manage-baseline-constraints",
    tags: ["Security by default", "Organization policy"]
  },
  {
    id: "gcp-cdl-397",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Open the web tier, lock down remote shell",
    scenario: "A travel startup runs a public booking site on Compute Engine. It wants anyone on the internet to reach the web servers on HTTPS, but remote administrative logins over SSH should be accepted only from the office's fixed IP range.",
    question: "Which security control is designed to enforce these rules?",
    options: [
      { id: 'A', text: "Two-step verification, which asks each administrator for a second factor when signing in" },
      { id: 'B', text: "A firewall, which allows or denies traffic by source address, protocol and destination port" },
      { id: 'C', text: "Data loss prevention, which scans outbound traffic for sensitive values before they leave" },
      { id: 'D', text: "Encryption in transit, which protects each HTTPS and SSH session from being read on the wire" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A firewall permits or blocks network traffic according to rules based on attributes such as source IP range, protocol and port; in Google Cloud, VPC firewall rules could allow TCP 443 from anywhere and allow TCP 22 only from the office range. Encryption in transit protects the confidentiality of sessions but does not decide who may connect. Two-step verification strengthens authentication of people but does not filter network connections by address or port. Data loss prevention inspects content for sensitive data and does not control which ports are reachable.",
    referenceUrl: "https://cloud.google.com/learn/what-is-a-firewall",
    tags: ["Firewall", "Network security"]
  },
  {
    id: "gcp-cdl-398",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Genomic data exposed while being analyzed",
    scenario: "A biotech firm already relies on Google Cloud encrypting its genomic files on disk and over the network. Its partners now require that the data also stay protected while it sits in memory being processed, so that even someone with privileged access to the host could not read it during analysis.",
    question: "Which protection addresses the new requirement?",
    options: [
      { id: 'A', text: "Object versioning, which keeps older copies of each file so changes can always be reversed" },
      { id: 'B', text: "Customer-managed encryption keys, which let the firm control the keys used during storage" },
      { id: 'C', text: "Confidential Computing, which keeps data encrypted during computation using hardware-based keys" },
      { id: 'D', text: "TLS encryption, which protects data as it travels between the firm and Google data centers" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Data exists in three states: at rest, in transit and in use. Google already encrypts data at rest and in transit, and Confidential Computing closes the remaining gap by encrypting data in use, keeping memory encrypted with keys generated in the processor so that the host, the hypervisor or an administrator cannot read it during processing. Customer-managed encryption keys give control over keys for data at rest but do not protect data being processed in memory. TLS protects data in transit only. Object versioning retains prior versions for recovery and provides no confidentiality at all.",
    referenceUrl: "https://cloud.google.com/security/products/confidential-computing",
    tags: ["Encryption in use", "Confidential Computing"]
  },
  {
    id: "gcp-cdl-399",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Keys must never live on the provider side",
    scenario: "A European bank is satisfied that Google Cloud encrypts its data at rest, but its regulator now demands that the master keys be generated and stored in a key system operated by the bank outside Google's infrastructure, so that the bank can deny any decryption request by refusing access to the key.",
    question: "Which option meets this requirement?",
    options: [
      { id: 'A', text: "Cloud External Key Manager, which uses keys held in a partner key manager the bank operates" },
      { id: 'B', text: "Customer-managed keys in Cloud KMS, which the bank creates, rotates and disables as it likes" },
      { id: 'C', text: "Default encryption at rest, which Google applies automatically to all stored customer content" },
      { id: 'D', text: "Cloud HSM, which stores keys in FIPS-validated hardware security modules within Google Cloud" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Cloud External Key Manager (Cloud EKM) lets Google Cloud services use encryption keys that are created and held in a supported external key management system outside Google's infrastructure; every decryption requires a call to that external key, so the bank can refuse it and make the data unreadable. Cloud HSM gives hardware-backed keys, but those modules sit inside Google Cloud, which the regulator rejects. Customer-managed keys in Cloud KMS give the bank control over key lifecycle, yet the key material is still stored in Google's service. Default encryption uses keys that Google manages entirely.",
    referenceUrl: "https://docs.cloud.google.com/kms/docs/ekm",
    tags: ["Encryption at rest", "Cloud EKM", "Key management"]
  },
  {
    id: "gcp-cdl-400",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Tracing who removed a finance dataset",
    scenario: "A retail group's finance dataset disappeared from BigQuery last Tuesday. Everyone who can touch the project signs in with a password and a security key, and IAM roles limit what each person can do. The compliance officer now needs a record of which identity deleted the dataset and when.",
    question: "Which security function provides that record?",
    options: [
      { id: 'A', text: "Authorization, which decides the actions that each identity is permitted to perform" },
      { id: 'B', text: "Authentication, which proves each person is who they claim to be when they sign in" },
      { id: 'C', text: "Encryption, which makes stored data unreadable to anyone who lacks the correct key" },
      { id: 'D', text: "Auditing, which keeps a log of which identity performed which action and at what time" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Authentication, authorization and auditing answer different questions: who are you, what may you do, and what did you do. Auditing records actions after the fact, and in Google Cloud the Admin Activity audit logs in Cloud Audit Logs capture administrative actions such as deleting a dataset, including the identity and timestamp. Authentication, here a password plus a security key, only verifies identity at sign-in. Authorization through IAM decides what is allowed but does not by itself produce a history of what happened. Encryption protects confidentiality and records nothing about who deleted what.",
    referenceUrl: "https://docs.cloud.google.com/logging/docs/audit",
    tags: ["Auditing", "Authentication", "Authorization"]
  }
];

export default GCP_CDL_QUESTIONS_16;
