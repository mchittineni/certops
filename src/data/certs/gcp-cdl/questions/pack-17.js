export const GCP_CDL_QUESTIONS_17 = [
  {
    id: "gcp-cdl-401",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Briefings on gangs targeting regional banks",
    scenario: "A credit union's small security team receives weekly briefings describing which criminal groups are currently attacking financial institutions in its region, the techniques they use to get in, and the file hashes and domains linked to their campaigns. The team uses the briefings to tune defenses before any attack reaches it.",
    question: "Which security operations term describes these briefings?",
    options: [
      { id: 'A', text: "Threat response, the actions taken to contain and recover from a live incident" },
      { id: 'B', text: "Threat intelligence, evidence-based knowledge about adversaries and their methods" },
      { id: 'C', text: "Security posture, the current strength of the organization's own configurations" },
      { id: 'D', text: "Penetration testing, an authorized simulated attack against the organization's systems" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Threat intelligence is evidence-based information about current and emerging threats: who the adversaries are, what they target, how they operate, and indicators such as hashes and domains tied to their campaigns. It lets a team act proactively. Threat response is what happens once an incident is underway, whereas these briefings arrive before any attack. Security posture describes the strength of the credit union's own controls, not information about outside groups. Penetration testing is an authorized simulated attack on the organization's systems, not a feed of intelligence about real attackers.",
    referenceUrl: "https://cloud.google.com/security/products/threat-intelligence",
    tags: ["Threat intelligence", "SecOps"]
  },
  {
    id: "gcp-cdl-402",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Isolating a breached VM at two in the morning",
    scenario: "An alert fires at a logistics company: a VM is sending data to an unknown server abroad. On-call engineers cut the VM off from the network, disable the service account it was using, preserve a disk snapshot for forensics, and rebuild the workload from a known-good image.",
    question: "Which security operations activity are the engineers performing?",
    options: [
      { id: 'A', text: "Threat response, containing the incident, removing the attacker's access and recovering" },
      { id: 'B', text: "Vulnerability scanning, testing systems for known software flaws before anyone exploits them" },
      { id: 'C', text: "Threat intelligence, gathering knowledge about the groups behind a campaign of attacks" },
      { id: 'D', text: "Posture management, comparing configurations with a benchmark to catch drift over time" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Threat response covers the actions taken once a threat is detected: containing it (isolating the VM), eradicating the attacker's foothold (disabling the credential), preserving evidence, and recovering service from a clean image. Threat intelligence is knowledge about adversaries gathered in advance, not hands-on incident handling. Posture management continuously checks configurations against policy, which is preventive rather than reactive. Vulnerability scanning looks for flaws before exploitation, whereas this incident is already underway.",
    referenceUrl: "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview",
    tags: ["Threat response", "Incident response"]
  },
  {
    id: "gcp-cdl-403",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Blocklists that go stale within days",
    scenario: "A university security team spends hours each week adding attacker IP addresses and file hashes from intelligence reports to its blocklists, yet the same group keeps getting in because it rotates infrastructure every few days. The team wants intelligence that stays useful for much longer.",
    question: "Which kind of intelligence should the team build its detections around?",
    options: [
      { id: 'A', text: "The group's tactics, techniques and procedures, which describe how it operates" },
      { id: 'B', text: "File hashes of the group's latest malware, collected from every new public report" },
      { id: 'C', text: "Fresh IP addresses and domains used by the group, refreshed several times each day" },
      { id: 'D', text: "Vulnerability scores for every server, sorted so the highest scores are fixed first" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Indicators such as IP addresses, domains and file hashes are cheap for attackers to change, so detections based on them go stale quickly. Tactics, techniques and procedures describe how an adversary operates, for example how it moves laterally or steals credentials, and are costly for the attacker to change, so detections built on behavior stay effective far longer. Refreshing IP lists more often or chasing each new hash keeps the team on the same treadmill. Vulnerability scores help prioritize patching but are not intelligence about this group's behavior.",
    referenceUrl: "https://cloud.google.com/security/products/threat-intelligence",
    tags: ["Threat intelligence", "TTPs", "Indicators of compromise"]
  },
  {
    id: "gcp-cdl-404",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "CISO asked to show the defenses are getting stronger",
    scenario: "After a year on Google Cloud, a media company's CISO is asked by the board to show whether its overall security posture has improved. She has quarterly counts of open misconfigurations, unpatched critical vulnerabilities, and projects that deviate from the company's security baseline.",
    question: "Which activity most directly improves the posture those metrics describe?",
    options: [
      { id: 'A', text: "Hiring an incident response retainer firm to be on call if a breach is ever detected" },
      { id: 'B', text: "Buying a larger cyber insurance policy so that any future breach costs are fully covered" },
      { id: 'C', text: "Subscribing to more threat intelligence feeds about groups that target media companies" },
      { id: 'D', text: "Continuously detecting and remediating weak settings and missing patches everywhere" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security posture is the overall strength of an organization's defenses at a point in time, and the board's metrics measure it directly: misconfigurations, unpatched vulnerabilities and drift from the baseline. Continuously detecting and remediating those issues, for example with Security Command Center, is what improves posture. Insurance transfers financial risk but leaves every weakness in place. More threat intelligence informs defenses but does not itself close any gap. An incident response retainer improves readiness to respond after a breach, not the configuration weaknesses being measured.",
    referenceUrl: "https://docs.cloud.google.com/security-command-center/docs/security-posture-overview",
    tags: ["Security posture", "Posture management"]
  },
  {
    id: "gcp-cdl-405",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Looking for a playbook to secure new AI systems",
    scenario: "A health insurer is launching its first generative AI projects. The security architect wants a published, vendor-neutral conceptual framework from Google that lays out the risks specific to AI systems and the core elements of securing them, to shape the company's own AI security program.",
    question: "Which Google resource fits that need?",
    options: [
      { id: 'A', text: "The Secure AI Framework, Google's model of AI-specific risks and the controls that address them" },
      { id: 'B', text: "The Cloud Adoption Framework, Google's model for assessing cloud maturity and adoption risks" },
      { id: 'C', text: "The Google Cloud Well-Architected Framework, guidance for designing cloud workloads" },
      { id: 'D', text: "The MITRE ATT&CK knowledge base, a catalog of adversary techniques seen in the wild" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google's Secure AI Framework (SAIF) is a conceptual framework that describes the security risks particular to AI systems, such as data poisoning, prompt injection and model exfiltration, and the core elements and controls for addressing them across the AI lifecycle. The Cloud Adoption Framework assesses an organization's cloud maturity and does not focus on AI risk. The Well-Architected Framework gives broad design guidance for cloud workloads, with security as one pillar among several. MITRE ATT&CK is a valuable catalog of adversary techniques, but it is not published by Google and is not an AI security framework.",
    referenceUrl: "https://cloud.google.com/use-cases/secure-ai-framework",
    tags: ["SAIF", "AI security"]
  },
  {
    id: "gcp-cdl-406",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Training data must never leave the boundary",
    scenario: "A bank is tuning a model on Gemini Enterprise Agent Platform using customer transaction data stored in BigQuery and Cloud Storage. Its biggest worry is that a compromised credential could be used to copy the training data to a storage bucket in a project outside the bank's organization.",
    question: "Which control most directly protects this data layer of the AI stack?",
    options: [
      { id: 'A', text: "Cloud Armor, which filters web traffic reaching public endpoints at the edge of Google's network" },
      { id: 'B', text: "VPC Service Controls, which set a perimeter around the services so data cannot be copied out" },
      { id: 'C', text: "Cloud Load Balancing, which spreads training requests evenly across several regional backends" },
      { id: 'D', text: "Cloud VPN, which encrypts traffic flowing between the bank's offices and its Google Cloud network" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Securing the data layer means protecting training and grounding data from theft and tampering. VPC Service Controls draws a service perimeter around Google-managed services such as BigQuery, Cloud Storage and Gemini Enterprise Agent Platform (formerly Vertex AI) so that data cannot be moved to resources outside the perimeter, even by someone holding a valid stolen credential. Cloud Armor protects internet-facing applications from web attacks and DDoS, not data copies between Google services. Load balancing distributes traffic and has no role in preventing exfiltration. Cloud VPN secures the path to on-premises networks but does not stop a copy from one Google Cloud project to another.",
    referenceUrl: "https://docs.cloud.google.com/vpc-service-controls/docs/overview",
    tags: ["AI security", "Data layer", "VPC Service Controls"]
  },
  {
    id: "gcp-cdl-407",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Refund agent running with project-wide rights",
    scenario: "An online retailer deployed an AI agent that can look up orders and issue refunds of up to fifty dollars. To get it working quickly, the team let the agent run as the project's default service account, which holds the Editor role. A security review flagged the agent as the riskiest component in the system.",
    question: "What should the team do to secure the agent layer?",
    options: [
      { id: 'A', text: "Move the agent to a larger machine type so that it can process refund requests more quickly" },
      { id: 'B', text: "Place the agent behind Cloud CDN so that responses are cached closer to the retailer's customers" },
      { id: 'C', text: "Keep the Editor role but rotate the default service account key every week to limit exposure" },
      { id: 'D', text: "Give the agent its own identity with only the permissions its tools need, and log its actions" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Agents act autonomously and call tools, so an agent with broad rights can be manipulated, for example through prompt injection, into doing far more than intended. Securing the agent layer means giving each agent its own identity scoped to the minimum permissions its tools need, constraining what actions it can take, and logging and monitoring its activity; Security Command Center can also flag over-privileged agents. A larger machine type changes performance, not risk. Rotating a key more often still leaves an Editor-level identity for an attacker to abuse. Caching with Cloud CDN is a delivery optimization and does nothing about the agent's permissions.",
    referenceUrl: "https://cloud.google.com/security/securing-ai",
    tags: ["AI security", "Agents", "Least privilege"]
  },
  {
    id: "gcp-cdl-408",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Matching AI stack layers to their protections",
    scenario: "A telecom's AI governance board is mapping the controls it uses onto the layers of the AI stack that Google describes: infrastructure, data, models, platform and agents. A board member proposes several mappings, and only one of them pairs a layer with a control that genuinely protects that layer.",
    question: "Which pairing is correct?",
    options: [
      { id: 'A', text: "Models layer: Cloud Billing budgets, which stop attackers stealing model weights from the infrastructure" },
      { id: 'B', text: "Data layer: Cloud Monitoring, which stops sensitive records being included in a tuning dataset" },
      { id: 'C', text: "Agents layer: Certificate Manager, which ensures every autonomous agent can only call approved tools" },
      { id: 'D', text: "Infrastructure layer: Confidential Computing, which keeps data and models encrypted while in use on hardware" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Confidential Computing protects the infrastructure layer by keeping data and model workloads encrypted in memory while they run, backed by Google's secure-by-design hardware. Certificate Manager provisions TLS certificates for load balancers; it has nothing to do with restricting which tools an agent may call, which is handled by the agent's identity and permissions. Cloud Monitoring collects metrics and alerts, but finding and removing sensitive records from tuning data is a job for Sensitive Data Protection. Billing budgets send spending alerts and offer no protection for model weights, which rely on access controls and perimeters such as IAM and VPC Service Controls.",
    referenceUrl: "https://cloud.google.com/security/securing-ai",
    tags: ["AI security", "AI stack", "Confidential Computing"]
  },
  {
    id: "gcp-cdl-409",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Downloaded model file runs hidden code",
    scenario: "A research team downloaded an open-source language model from a public repository and loaded it into their pipeline. Investigators later found that the model file had been altered to execute hidden code whenever it was loaded, giving an attacker a foothold in the environment.",
    question: "Which layer of the AI stack did this attack target?",
    options: [
      { id: 'A', text: "The data layer, where the records used to train and ground a model are stored and governed" },
      { id: 'B', text: "The models layer, where model artifacts are sourced, stored, versioned and then deployed" },
      { id: 'C', text: "The infrastructure layer, where the physical servers, accelerators and networks are operated" },
      { id: 'D', text: "The agents layer, where autonomous programs take actions using tools on behalf of users" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "This is a model supply chain attack: the model artifact itself was tampered with, so the attack targets the models layer, which is protected by sourcing models from trusted catalogs, verifying integrity, scanning artifacts and controlling who can publish them. The agents layer concerns autonomous programs and their tool permissions, which were not involved. The data layer concerns training and grounding data; no dataset was changed. The infrastructure layer covers hardware and networks, which the attacker reached only as a consequence of loading the poisoned model.",
    referenceUrl: "https://cloud.google.com/use-cases/secure-ai-framework",
    tags: ["AI security", "Models layer", "Supply chain"]
  },
  {
    id: "gcp-cdl-410",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "What feeds Google's threat verdicts",
    scenario: "A CFO evaluating Google Threat Intelligence asks the security director why its verdicts on suspicious files and domains should be trusted more than a free open-source feed. The director explains the distinct sources the service draws on.",
    question: "Which sources power Google Threat Intelligence?",
    options: [
      { id: 'A', text: "Public vulnerability databases, vendor security advisories, and the customer's own firewall appliance logs" },
      { id: 'B', text: "Third-party audit reports, Compliance Reports Manager downloads, and Assured Workloads control packages" },
      { id: 'C', text: "Google's own global visibility, Mandiant's frontline incident response, and VirusTotal's crowdsourced analysis" },
      { id: 'D', text: "Security Command Center findings, Cloud Logging entries, and reCAPTCHA scores from the customer's own sites" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Threat Intelligence combines three distinctive sources: Google's vast visibility into threats across the services that protect billions of users and devices, Mandiant's frontline and human-curated intelligence from responding to real breaches, and VirusTotal's crowdsourced database of files, URLs and domains submitted and analyzed by a global community. Security Command Center, Cloud Logging and reCAPTCHA produce signals about the customer's own environment, not a global threat verdict. Vulnerability databases and firewall logs are useful inputs but are not what defines this service. Audit reports and compliance tools support trust and compliance, not threat analysis.",
    referenceUrl: "https://cloud.google.com/security/products/threat-intelligence",
    tags: ["Google Threat Intelligence", "Mandiant", "VirusTotal"]
  },
  {
    id: "gcp-cdl-411",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "How the intruders really behave once inside",
    scenario: "A pharmaceutical company believes a state-sponsored group is targeting its research. The CISO wants intelligence drawn from people who have investigated that group's actual intrusions, describing how it moves inside victims' networks after the initial breach and what it steals.",
    question: "Which source within Google Threat Intelligence most directly supplies this?",
    options: [
      { id: 'A', text: "Mandiant, whose responders investigate real breaches and document attacker behavior" },
      { id: 'B', text: "VirusTotal, where a global community submits files and URLs for automated scanning" },
      { id: 'C', text: "Security Command Center, which reports misconfigurations inside Google Cloud projects" },
      { id: 'D', text: "Google's visibility across products such as Gmail and Chrome that block mass threats" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mandiant's incident responders work inside real breaches and document how specific groups operate after they get in, including lateral movement, persistence and what they target, and that frontline, human-curated insight is a core part of Google Threat Intelligence. VirusTotal excels at telling whether a specific file or URL is malicious but is not a record of post-breach behavior. Security Command Center analyzes the company's own cloud environment rather than external groups. Google's product visibility reveals threats at massive scale, such as phishing and malware campaigns, but the deep intrusion narratives come from Mandiant's investigations.",
    referenceUrl: "https://cloud.google.com/security/products/mandiant-services",
    tags: ["Google Threat Intelligence", "Mandiant"]
  },
  {
    id: "gcp-cdl-412",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Five thousand alerts and three analysts",
    scenario: "A regional retailer's three security analysts face about five thousand alerts a day from their SIEM, most of them false positives. They want each alert automatically enriched with a verdict on whether its IP addresses, domains and file hashes are known to be malicious so they can work the real threats first.",
    question: "Which approach meets that goal?",
    options: [
      { id: 'A', text: "Adding a second SIEM from another vendor so that each alert is double-checked independently" },
      { id: 'B', text: "Enriching alerts with Google Threat Intelligence scores so known-malicious indicators rank first" },
      { id: 'C', text: "Running Web Security Scanner against the storefront to find vulnerabilities before release" },
      { id: 'D', text: "Raising every alert threshold in Cloud Monitoring so that fewer alerts reach the analysts" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Threat Intelligence provides a unified verdict and score for indicators such as IPs, domains and file hashes, so alerts can be enriched automatically and prioritized by whether their indicators are known to be malicious, letting a small team spend its time on genuine threats. Raising thresholds in Cloud Monitoring only hides alerts without judging which are real, and Cloud Monitoring is not where SIEM alerts come from. Web Security Scanner finds application vulnerabilities and does not triage alerts. A second SIEM would double the alert volume rather than prioritize it.",
    referenceUrl: "https://cloud.google.com/security/products/threat-intelligence",
    tags: ["Google Threat Intelligence", "Alert triage", "IOC enrichment"]
  },
  {
    id: "gcp-cdl-413",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Why the board should care about threat intel",
    scenario: "A shipping company's board questions a proposal to license Google Threat Intelligence, since the company already has firewalls and antivirus. The CISO needs one sentence explaining what the service adds that those tools do not.",
    question: "Which explanation best captures its business value?",
    options: [
      { id: 'A', text: "It guarantees the company will never suffer a breach, since every attack is blocked in advance" },
      { id: 'B', text: "It reveals who is likely to target the company and how, so defenses can be tuned beforehand" },
      { id: 'C', text: "It replaces firewalls and antivirus, so the company can retire them and cut its tooling budget" },
      { id: 'D', text: "It stores backups of company data in a separate region so operations can resume after an attack" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The value of threat intelligence is proactive insight: knowing which adversaries are likely to target the company, how they operate and which indicators to watch, so defenses and priorities can be adjusted before an attack arrives. It complements firewalls and antivirus rather than replacing them. No product can guarantee that breaches never happen, so that claim would mislead the board. Storing backups in another region is a resilience measure provided by backup services, not by threat intelligence.",
    referenceUrl: "https://cloud.google.com/security/products/threat-intelligence",
    tags: ["Google Threat Intelligence", "Business value"]
  },
  {
    id: "gcp-cdl-414",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Two questions, two different tools",
    scenario: "An airline's CISO has two open questions. The first is which of the airline's own Google Cloud resources are misconfigured or vulnerable right now. The second is which criminal and state-backed groups are targeting the aviation sector this quarter and which indicators the SOC should watch for.",
    question: "Which assignment of Google offerings to the two questions is correct?",
    options: [
      { id: 'A', text: "Cloud Logging for the misconfigured resources, Sensitive Data Protection for the groups and indicators" },
      { id: 'B', text: "Security Command Center for the misconfigured resources, Google Threat Intelligence for the groups" },
      { id: 'C', text: "Google Threat Intelligence for the misconfigured resources, Security Command Center for the groups" },
      { id: 'D', text: "Cloud Armor for the misconfigured resources, Google Security Operations SOAR for the target groups" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Security Command Center looks inward, discovering misconfigurations, vulnerabilities and threats in the airline's own Google Cloud environment, while Google Threat Intelligence looks outward at the global threat landscape, describing which adversaries target a sector and which indicators to hunt for. Swapping them reverses what each product does. Cloud Logging stores logs but does not assess configuration risk, and Sensitive Data Protection finds sensitive data, not threat groups. Cloud Armor defends applications against web attacks and DDoS rather than assessing configurations, and SOAR automates response workflows rather than producing threat intelligence.",
    referenceUrl: "https://docs.cloud.google.com/security-command-center/docs/security-command-center-overview",
    tags: ["Security Command Center", "Google Threat Intelligence"]
  },
  {
    id: "gcp-cdl-415",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "One place to see risk across 200 projects",
    scenario: "A gaming company has more than 200 Google Cloud projects owned by different studios. Its new security lead has no single view of which projects contain publicly exposed storage, open firewall ports, vulnerable software or signs of active threats, and wants one built-in service that shows all of that across the organization.",
    question: "Which Google Cloud service provides that view?",
    options: [
      { id: 'A', text: "Google Security Operations, which ingests logs from many sources to investigate threats" },
      { id: 'B', text: "Cloud Asset Inventory, which lists resources and their metadata across the organization" },
      { id: 'C', text: "Security Command Center, which surfaces misconfigurations, vulnerabilities and threats" },
      { id: 'D', text: "Cloud Monitoring, which charts performance metrics and uptime for every running service" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Security Command Center is Google Cloud's built-in security and risk management service: it discovers assets across the organization and surfaces misconfigurations, vulnerabilities and threats in one place so teams can prioritize and fix them. Cloud Monitoring tracks performance and availability, not security findings. Cloud Asset Inventory lists resources and their metadata but does not by itself assess whether they are risky. Google Security Operations is a SIEM and SOAR platform for detection and response across many log sources; it is not the native service that finds misconfigurations in Google Cloud projects.",
    referenceUrl: "https://docs.cloud.google.com/security-command-center/docs/security-command-center-overview",
    tags: ["Security Command Center", "Risk visibility"]
  },
  {
    id: "gcp-cdl-416",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Deciding which of 9,000 findings to fix first",
    scenario: "A fintech's Security Command Center Premium activation shows about nine thousand open findings. The two-person cloud security team has tagged its customer ledger database as a high-value resource and wants to start with the findings that would actually give an attacker a route to that database.",
    question: "Which capability should the team rely on to prioritize?",
    options: [
      { id: 'A', text: "Sorting findings by the date they were first seen and closing the oldest ones before the rest" },
      { id: 'B', text: "Muting every finding rated below high severity so that the dashboard shows far fewer entries" },
      { id: 'C', text: "Attack exposure scores from attack path simulations against the resources marked as vital" },
      { id: 'D', text: "Filtering findings by project name so each studio team handles only its own projects' findings" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Security Command Center's Risk Engine simulates how a hypothetical attacker could move through the environment toward the resources in the high-value resource set, and assigns attack exposure scores to findings that lie on those attack paths, so teams can fix what actually exposes their most important assets first. Closing the oldest findings first ignores whether they matter. Splitting findings by project spreads the work but does not prioritize by risk to the ledger. Muting everything below high severity can hide a medium finding that sits on a direct path to the database.",
    referenceUrl: "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn",
    tags: ["Security Command Center", "Attack paths", "Prioritization"]
  },
  {
    id: "gcp-cdl-417",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Auditor wants a PCI DSS view by Friday",
    scenario: "A payments startup is preparing for a PCI DSS assessment. The auditor has asked for a report showing how the startup's Google Cloud configuration measures up against the standard's requirements, and which controls are currently failing, without the team assembling evidence by hand.",
    question: "Which Security Command Center capability addresses this request?",
    options: [
      { id: 'A', text: "Compliance monitoring, which maps findings to standards like PCI DSS and reports gaps" },
      { id: 'B', text: "Event Threat Detection, which analyzes logs to spot active intrusions and malicious behavior" },
      { id: 'C', text: "Web Security Scanner, which crawls public web applications looking for common flaws" },
      { id: 'D', text: "Container Threat Detection, which watches running container images for suspicious activity" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Security Command Center maps its findings to security standards and benchmarks such as PCI DSS, CIS, ISO 27001 and NIST 800-53 and reports which controls are passing or failing, giving the startup an auditor-ready view of its compliance posture. Event Threat Detection looks for active threats in logs, which is useful but does not assess compliance. Web Security Scanner finds vulnerabilities in web applications, only one small part of PCI DSS. Container Threat Detection monitors containers for runtime attacks rather than producing a standards report.",
    referenceUrl: "https://docs.cloud.google.com/security-command-center/docs/compliance-manager-overview",
    tags: ["Security Command Center", "Compliance", "PCI DSS"]
  },
  {
    id: "gcp-cdl-418",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Alert when VMs start mining or owners appear",
    scenario: "An e-commerce company wants to be alerted automatically if any of its VMs begins running cryptocurrency mining software, or if an account outside its domain is suddenly granted the Owner role on a project. It prefers built-in capabilities over writing and maintaining its own rules.",
    question: "Which option meets these requirements?",
    options: [
      { id: 'A', text: "Cloud Billing budget alerts, which email finance when monthly spending exceeds forecasts" },
      { id: 'B', text: "Cloud Monitoring uptime checks, which probe endpoints and alert when a service stops responding" },
      { id: 'C', text: "Organization Policy constraints, which block risky configurations before they can be created" },
      { id: 'D', text: "Security Command Center threat detection services, which flag such activity from logs and VMs" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security Command Center includes built-in threat detection services: Event Threat Detection analyzes logs for threats such as anomalous IAM grants to external identities, and VM Threat Detection scans VMs for cryptomining and other malware, generating findings without customer-written rules. Budget alerts might eventually reflect mining costs, but only after money is spent, and they cannot spot a suspicious role grant. Uptime checks only confirm endpoints respond. Organization policy constraints are preventive guardrails; they can restrict which domains may be granted roles, but they do not detect cryptomining on running VMs.",
    referenceUrl: "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview",
    tags: ["Security Command Center", "Threat detection", "Cryptomining"]
  },
  {
    id: "gcp-cdl-419",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Three medium findings that add up to a crisis",
    scenario: "Security Command Center reports three separate medium-severity findings for a retailer: a VM exposed to the internet, an unpatched vulnerability on that VM, and a service account attached to it that can read the payments database. Together they form a route an attacker could follow straight to the payments data.",
    question: "What does Security Command Center call this pattern of related issues?",
    options: [
      { id: 'A', text: "A toxic combination, a set of weaknesses that jointly open a path to a high-value resource" },
      { id: 'B', text: "Posture drift, a change that moves a resource away from the security posture deployed to it" },
      { id: 'C', text: "A security mark, a custom label that teams add to assets and findings to organize them" },
      { id: 'D', text: "A chokepoint, a resource where many attack paths converge so one fix closes several routes" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A toxic combination is a group of security issues that, occurring together in a particular pattern, create a path an attacker could use to reach a high-value resource; Security Command Center's Risk Engine detects them during attack path simulations and scores them as a single high-priority issue even when each finding alone is only medium severity. A chokepoint is a related but different idea: a common resource where multiple attack paths converge, so fixing it removes many paths at once. Security marks are user-applied labels. Posture drift describes resources deviating from a deployed security posture, not a chain of exploitable weaknesses.",
    referenceUrl: "https://docs.cloud.google.com/security-command-center/docs/toxic-combinations-overview",
    tags: ["Security Command Center", "Toxic combinations"]
  },
  {
    id: "gcp-cdl-420",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Six security consoles and no shared picture",
    scenario: "A hospital network's security operations center juggles six separate tools for log collection, detection rules, threat intelligence lookups, case tracking and response scripts. Analysts copy data between them by hand and lose time on every incident. Leadership wants one platform that brings those functions together.",
    question: "Which Google offering is designed for this?",
    options: [
      { id: 'A', text: "Google Security Operations, which unifies SIEM, SOAR and threat intelligence for the SOC" },
      { id: 'B', text: "Identity-Aware Proxy, which controls access to internal applications based on identity" },
      { id: 'C', text: "Cloud Logging, which stores and queries logs generated by Google Cloud services and apps" },
      { id: 'D', text: "Assured Workloads, which applies compliance controls to folders holding regulated data" }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Google Security Operations is a unified security operations platform that combines SIEM for ingesting telemetry and detecting threats, SOAR for case management and automated response, and built-in threat intelligence, so analysts investigate and respond in one place. Cloud Logging stores and analyzes logs but is not a SOC platform with detection content, cases and playbooks. Identity-Aware Proxy controls access to applications and is not an operations tool. Assured Workloads applies regulatory controls to cloud environments and does not handle detection or response.",
    referenceUrl: "https://cloud.google.com/security/products/security-operations",
    tags: ["Google Security Operations", "SIEM", "SOAR"]
  },
  {
    id: "gcp-cdl-421",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Dropping logs to stay under the SIEM bill",
    scenario: "A telecom's legacy SIEM is licensed by the gigabyte ingested, so the team routinely discards firewall and DNS logs to control costs. When a breach occurred, the logs that would have shown how the attacker got in had never been collected.",
    question: "Which benefit of Google Security Operations addresses this problem?",
    options: [
      { id: 'A', text: "It samples one percent of each log source, so only representative events need to be retained" },
      { id: 'B', text: "It runs on Google's infrastructure, so huge volumes of telemetry can be kept and searched fast" },
      { id: 'C', text: "It encrypts every log with customer-supplied keys, so logs cannot be read by unauthorized staff" },
      { id: 'D', text: "It replaces firewalls at the network edge, so the firewall logs are no longer needed after a move" }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Google Security Operations is built on Google's infrastructure to ingest and retain very large volumes of security telemetry and search it in seconds, and its packaging is not designed around penalizing every extra gigabyte, so teams do not have to discard sources like DNS and firewall logs that are often decisive in investigations. It is not a firewall and does not make firewall logs unnecessary. Encryption protects log confidentiality but does nothing about logs that were never collected. Sampling would recreate the same gap the telecom suffered.",
    referenceUrl: "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview",
    tags: ["Google Security Operations", "Telemetry", "SIEM"]
  },
  {
    id: "gcp-cdl-422",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "Every phishing report handled the same way",
    scenario: "A law firm's analysts handle about sixty reported phishing emails a day, and every one follows the same steps: check the sender and links against threat intelligence, search for other recipients, delete the messages, and reset credentials if anyone clicked. The team wants those steps to run automatically, with a human approving only the credential resets.",
    question: "Which capability of Google Security Operations fits this need?",
    options: [
      { id: 'A', text: "The Unified Data Model, which normalizes events from every source into one common schema" },
      { id: 'B', text: "Curated detections, which are prebuilt rules that identify known threat behaviors in logs" },
      { id: 'C', text: "Data retention settings, which control how long ingested telemetry remains searchable" },
      { id: 'D', text: "SOAR playbooks, which automate repeatable response workflows and can pause for analyst approval" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Security orchestration, automation and response (SOAR) in Google Security Operations uses playbooks to automate repeatable response workflows across tools, such as enrichment, searching mailboxes, deleting messages and resetting passwords, and can pause for analyst approval at chosen steps. Curated detections find threats but do not carry out response steps. The Unified Data Model makes data searchable consistently but does not act on it. Retention settings govern how long data is kept, which has nothing to do with automating responses.",
    referenceUrl: "https://docs.cloud.google.com/chronicle/docs/soar/overview-and-introduction/soar-overview",
    tags: ["Google Security Operations", "SOAR", "Playbooks"]
  },
  {
    id: "gcp-cdl-423",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "One search across forty log formats",
    scenario: "A manufacturer sends logs from forty sources into Google Security Operations: firewalls, endpoint agents, identity providers and cloud services from several vendors, each with its own field names. Analysts want to search for everything a given user or IP address did across all of them with a single query.",
    question: "Which feature makes that possible?",
    options: [
      { id: 'A', text: "SOAR case management, which groups related alerts into a single case for an analyst to work" },
      { id: 'B', text: "Threat intelligence enrichment, which scores each indicator by how likely it is to be malicious" },
      { id: 'C', text: "The Unified Data Model, which normalizes events from every source into one common schema" },
      { id: 'D', text: "Playbook automation, which runs the same response steps whenever a matching alert arrives" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Google Security Operations parses incoming logs into the Unified Data Model, a common schema in which the same concepts, such as a user, an IP address or a process, have the same fields regardless of vendor, so one search spans every source. Case management organizes alerts for analysts but does not reconcile field names. Threat intelligence enrichment scores indicators, which helps prioritization, not cross-source search. Playbooks automate responses and do not normalize data.",
    referenceUrl: "https://docs.cloud.google.com/chronicle/docs/event-processing/udm-overview",
    tags: ["Google Security Operations", "UDM", "Normalization"]
  },
  {
    id: "gcp-cdl-424",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "No detection engineers on staff",
    scenario: "A mid-sized insurer has adopted Google Security Operations but has no staff with experience writing detection rules. It wants to start detecting common cloud, Windows and ransomware threats immediately, using rules maintained by Google's own researchers.",
    question: "Which feature should the insurer turn on first?",
    options: [
      { id: 'A', text: "Log export to Cloud Storage so the data can be archived cheaply for many years to come" },
      { id: 'B', text: "Uptime checks in Cloud Monitoring so outages in the insurer's web portal are detected" },
      { id: 'C', text: "Custom YARA-L rules written by the insurer's own team for each threat that concerns it" },
      { id: 'D', text: "Curated detections, rule sets that Google's threat experts build and keep up to date" }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Curated detections are prebuilt rule sets in Google Security Operations created and maintained by Google's threat researchers, drawing on Google and Mandiant intelligence, covering areas such as cloud threats, Windows threats and ransomware, so a team without detection engineers gets coverage immediately. Custom YARA-L rules are powerful but require exactly the expertise the insurer lacks. Archiving logs to Cloud Storage keeps data but detects nothing. Uptime checks detect outages, not security threats.",
    referenceUrl: "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections",
    tags: ["Google Security Operations", "Curated detections"]
  },
  {
    id: "gcp-cdl-425",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    domainName: "Trust and Security with Google Cloud",
    title: "New indicators, old logs",
    scenario: "A news agency learns from a fresh threat report that a group has been using a set of domains for months. Its analysts want to know at once whether any system contacted those domains at any time in the past year, and they want future matches flagged automatically, without re-ingesting data.",
    question: "Which capability of a unified security operations platform addresses this?",
    options: [
      { id: 'A', text: "A Cloud Armor rule that blocks the domains at the edge for all future web traffic" },
      { id: 'B', text: "A daily vulnerability scan of every VM to find software that could reach the domains" },
      { id: 'C', text: "Automatic matching of newly published indicators against the telemetry already retained" },
      { id: 'D', text: "An organization policy that prevents projects from creating resources in new regions" }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Because Google Security Operations retains large volumes of telemetry and continuously correlates it with threat intelligence, newly published indicators can be matched against historical data as well as new events, revealing past contact with malicious domains and flagging future matches without re-ingesting anything. A Cloud Armor rule protects web applications from inbound traffic and would not reveal past outbound contact. Organization policies govern resource configuration, not threat hunting. A vulnerability scan finds software flaws and says nothing about which domains systems have contacted.",
    referenceUrl: "https://docs.cloud.google.com/chronicle/docs/secops/secops-overview",
    tags: ["Google Security Operations", "Threat hunting", "Indicators of compromise"]
  }
];

export default GCP_CDL_QUESTIONS_17;
