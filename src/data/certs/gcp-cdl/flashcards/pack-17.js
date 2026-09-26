export const GCP_CDL_FLASHCARDS_17 = [
  {
    id: "gcp-cdl-fc-401",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Strategic, operational and tactical threat intelligence: who uses each?",
    hint: "Board, SOC lead, and the detection tooling.",
    back: "<strong>Strategic</strong> intelligence describes trends, motives and which adversaries target the industry; executives use it for risk and investment decisions. <strong>Operational</strong> intelligence describes specific campaigns and how actors operate; security leaders and hunters use it to plan defenses. <strong>Tactical</strong> intelligence is machine-readable indicators such as IPs, domains and hashes; SIEMs and firewalls consume it for detection and blocking.",
    tags: ["Threat intelligence"]
  },
  {
    id: "gcp-cdl-fc-402",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What is an indicator of compromise (IOC)?",
    hint: "A forensic clue left behind.",
    back: "An <strong>indicator of compromise</strong> is an observable artifact that suggests a system has been breached or targeted, such as a malicious IP address or domain, a malware file hash, or an unusual registry key. IOCs let tools search for known threats quickly, but attackers change them easily, so they work best combined with detections based on attacker behavior.",
    tags: ["Indicators of compromise", "Threat intelligence"]
  },
  {
    id: "gcp-cdl-fc-403",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Threat detection vs threat hunting: what is the difference?",
    hint: "One waits for an alarm; the other goes looking.",
    back: "<strong>Threat detection</strong> is automated: rules, analytics and machine learning watch telemetry and raise alerts when something matches known malicious patterns. <strong>Threat hunting</strong> is proactive and human-led: analysts start from a hypothesis or new intelligence and search the data for attackers who may have slipped past the detections. Hunting findings often become new detection rules.",
    tags: ["Threat detection", "Threat hunting"]
  },
  {
    id: "gcp-cdl-fc-404",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What are the main stages of responding to a security incident?",
    hint: "Stop it, remove it, restore, learn.",
    back: "After detection and triage, responders <strong>contain</strong> the threat (isolate systems, disable accounts), <strong>eradicate</strong> it (remove malware and the attacker's access), <strong>recover</strong> (restore from clean images and backups, then monitor), and hold a <strong>post-incident review</strong> to fix root causes and improve detections. Preserving evidence along the way supports forensics and legal needs.",
    tags: ["Threat response", "Incident response"]
  },
  {
    id: "gcp-cdl-fc-405",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "MTTD and MTTR: what do they measure and why do SOCs track them?",
    hint: "Two clocks that start when an attacker gets in.",
    back: "<strong>Mean time to detect</strong> measures how long threats go unnoticed; <strong>mean time to respond</strong> (or remediate) measures how long it takes to contain and fix them once detected. Shorter times shrink the attacker's window and the business damage. Unified platforms, threat intelligence enrichment and automation such as SOAR playbooks are aimed squarely at lowering both.",
    tags: ["SecOps", "Metrics"]
  },
  {
    id: "gcp-cdl-fc-406",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does \"SecOps\" mean, and what does a security operations center do?",
    hint: "Security plus operations, around the clock.",
    back: "<strong>SecOps</strong> is the practice of running security as a continuous operational function rather than a one-time project. A <strong>security operations center (SOC)</strong> is the team, and its tools, that monitors telemetry, detects and investigates threats, and coordinates response. Its core concerns are security posture, threat intelligence, detection and threat response.",
    tags: ["SecOps", "SOC"]
  },
  {
    id: "gcp-cdl-fc-407",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Which layers of the AI stack does Google Cloud aim to secure?",
    hint: "From the chips up to the things that act on your behalf.",
    back: "Five layers: <strong>infrastructure</strong> (secure-by-design data centers, hardware and Confidential Computing), <strong>data</strong> (training and grounding data protected with IAM, encryption, Sensitive Data Protection and VPC Service Controls), <strong>models</strong> (integrity, access and safe inputs and outputs), <strong>platform</strong> (the AI development platform and its controls), and <strong>agents</strong> (identity, permissions and monitoring of autonomous agents).",
    tags: ["AI security", "AI stack"]
  },
  {
    id: "gcp-cdl-fc-408",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What are the six core elements of Google's Secure AI Framework (SAIF)?",
    hint: "Foundations, detection, automation, harmonization, adaptation, context.",
    back: "1) <strong>Expand strong security foundations</strong> to the AI ecosystem. 2) <strong>Extend detection and response</strong> to bring AI into the organization's threat universe. 3) <strong>Automate defenses</strong> to keep pace with new and existing threats. 4) <strong>Harmonize platform-level controls</strong> for consistent security across the organization. 5) <strong>Adapt controls</strong> with faster feedback loops for AI deployment. 6) <strong>Contextualize AI system risks</strong> in surrounding business processes.",
    tags: ["SAIF", "AI security"]
  },
  {
    id: "gcp-cdl-fc-409",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Why do AI agents raise the security stakes compared with a chatbot that only answers questions?",
    hint: "Think about what happens after the model decides.",
    back: "Agents <strong>take actions</strong>: they call tools and APIs, move data and change systems on a user's behalf. If an agent is manipulated, for example through prompt injection hidden in a document, its <strong>permissions</strong> define the damage. So agents need their own identities with least privilege, limits on which tools they can use, human approval for risky actions, and logging and threat detection for their activity.",
    tags: ["AI security", "Agents"]
  },
  {
    id: "gcp-cdl-fc-410",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Which controls protect the data layer of an AI system on Google Cloud?",
    hint: "Who can read it, where it can go, what is in it.",
    back: "<strong>IAM</strong> limits who and what can read training and grounding data; <strong>encryption</strong>, optionally with customer-managed keys, protects it at rest; <strong>VPC Service Controls</strong> perimeters stop it being copied outside the organization; and <strong>Sensitive Data Protection</strong> discovers and de-identifies personal data before it is used for tuning or grounding. Data lineage and governance help detect poisoning.",
    tags: ["AI security", "Data layer"]
  },
  {
    id: "gcp-cdl-fc-411",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What three sources make Google Threat Intelligence distinctive?",
    hint: "Google itself, a famous incident response firm, and a crowdsourced scanner.",
    back: "<strong>Google's global visibility</strong> from protecting billions of users and devices across its products; <strong>Mandiant's</strong> frontline intelligence from responding to real breaches and tracking threat actors; and <strong>VirusTotal's</strong> crowdsourced database of files, URLs and domains analyzed by a worldwide community. Together they yield a single verdict on whether an indicator is malicious.",
    tags: ["Google Threat Intelligence", "Mandiant", "VirusTotal"]
  },
  {
    id: "gcp-cdl-fc-412",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does VirusTotal contribute to Google Threat Intelligence?",
    hint: "Millions of submissions and dozens of engines.",
    back: "<strong>VirusTotal</strong> is a service where a global community of security researchers and organizations submits suspicious files, URLs, domains and IPs, which are analyzed by many antivirus engines and tools. Its crowdsourced database shows whether an artifact has been seen before, how engines judge it, and how it relates to other malicious infrastructure, which helps analysts quickly assess an unfamiliar indicator.",
    tags: ["VirusTotal", "Google Threat Intelligence"]
  },
  {
    id: "gcp-cdl-fc-413",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does Mandiant bring to Google's security portfolio?",
    hint: "People who are called in when breaches happen.",
    back: "<strong>Mandiant</strong>, part of Google Cloud, is known for <strong>frontline incident response</strong>: its experts investigate major breaches worldwide and track threat actors over years. That experience feeds human-curated intelligence on how adversaries operate into Google Threat Intelligence and Google Security Operations, and Mandiant also offers consulting services such as incident response retainers and readiness assessments.",
    tags: ["Mandiant", "Incident response"]
  },
  {
    id: "gcp-cdl-fc-414",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Security Command Center, Google Threat Intelligence, Google Security Operations: what is each one's job?",
    hint: "Look inward, look outward, run the SOC.",
    back: "<strong>Security Command Center</strong> looks inward at your Google Cloud environment: assets, misconfigurations, vulnerabilities, threats and compliance. <strong>Google Threat Intelligence</strong> looks outward at the global threat landscape: who the adversaries are and which indicators matter. <strong>Google Security Operations</strong> is the SOC platform that ingests telemetry from everywhere and runs detection, investigation and response, using that intelligence.",
    tags: ["Security Command Center", "Google Threat Intelligence", "Google Security Operations"]
  },
  {
    id: "gcp-cdl-fc-415",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "In one sentence, what is Security Command Center for?",
    hint: "Discover, prioritize, remediate.",
    back: "<strong>Security Command Center</strong> is Google Cloud's built-in security and risk management service that helps organizations <strong>discover, prioritize and remediate</strong> misconfigurations, vulnerabilities and threats across their Google Cloud assets from one place, and track compliance with security standards.",
    tags: ["Security Command Center"]
  },
  {
    id: "gcp-cdl-fc-416",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Security Command Center Standard vs Premium: what does Premium add?",
    hint: "Standard covers the basics at no cost.",
    back: "<strong>Standard</strong> provides baseline posture findings for common misconfigurations. <strong>Premium</strong> adds broader misconfiguration and vulnerability detection, built-in threat detection services (such as Event, VM and Container Threat Detection), <strong>attack path simulation</strong> with attack exposure scores and toxic combinations, and compliance reporting against standards. The older Enterprise tier is deprecated and its customers move to Premium.",
    tags: ["Security Command Center", "Service tiers"]
  },
  {
    id: "gcp-cdl-fc-417",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Security Health Analytics vs Event Threat Detection: what does each find?",
    hint: "One inspects settings; the other reads logs for attacks.",
    back: "<strong>Security Health Analytics</strong> scans resource configurations for <strong>misconfigurations</strong>, such as public buckets, open firewall ports or missing MFA, which are weaknesses before any attack. <strong>Event Threat Detection</strong> analyzes logs for <strong>active threats</strong>, such as malware or cryptomining connections, brute-force attempts and suspicious IAM grants, which indicate an attack may be underway.",
    tags: ["Security Command Center", "Security Health Analytics", "Event Threat Detection"]
  },
  {
    id: "gcp-cdl-fc-418",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Toxic combination vs chokepoint in Security Command Center?",
    hint: "One is a chain of issues; the other is where many chains meet.",
    back: "A <strong>toxic combination</strong> is a group of issues that together create an attack path to a high-value resource, scored as one high-priority issue even when each finding alone looks moderate. A <strong>chokepoint</strong> is a resource or resource group where <strong>multiple attack paths converge</strong>, so remediating it can break several toxic combinations at once. Both come from the Risk Engine's attack path simulations.",
    tags: ["Security Command Center", "Toxic combinations", "Chokepoints"]
  },
  {
    id: "gcp-cdl-fc-419",
    difficulty: "hard",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "How do attack exposure scores decide what matters most?",
    hint: "It starts with you naming your crown jewels.",
    back: "You define a <strong>high-value resource set</strong>, such as databases holding customer or payment data. Security Command Center's Risk Engine then <strong>simulates</strong> how a hypothetical attacker could chain known vulnerabilities and misconfigurations to reach those resources, and scores each finding by how exposed it leaves them. The paths are possibilities, not evidence of an attack. This requires Premium activated at the organization level.",
    tags: ["Security Command Center", "Attack paths"]
  },
  {
    id: "gcp-cdl-fc-420",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "SIEM vs SOAR: what does each do in a SOC?",
    hint: "Find it, then act on it.",
    back: "A <strong>SIEM</strong> (security information and event management) collects and normalizes telemetry from many sources, correlates it and detects threats, and supports search and investigation. <strong>SOAR</strong> (security orchestration, automation and response) manages cases and automates response steps with playbooks across tools. Google Security Operations combines both, plus threat intelligence, in one platform.",
    tags: ["SIEM", "SOAR", "Google Security Operations"]
  },
  {
    id: "gcp-cdl-fc-421",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What is the Unified Data Model in Google Security Operations?",
    hint: "Forty vendors, one set of field names.",
    back: "The <strong>Unified Data Model (UDM)</strong> is a common schema into which Google Security Operations parses incoming logs, so equivalent information such as a user, hostname, IP address or process uses the same fields regardless of which vendor produced it. That lets analysts search, correlate and write detections once across every source instead of learning each log format.",
    tags: ["Google Security Operations", "UDM"]
  },
  {
    id: "gcp-cdl-fc-422",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What is YARA-L used for in Google Security Operations?",
    hint: "It is a language, and it describes suspicious sequences.",
    back: "<strong>YARA-L</strong> is the detection rule language of Google Security Operations. Rules describe patterns of events, often across multiple events and time windows (for example, several failed logins followed by a success and a new admin grant), and raise detections when the pattern matches. Teams can write their own YARA-L rules alongside Google's curated detections.",
    tags: ["Google Security Operations", "YARA-L", "Detection rules"]
  },
  {
    id: "gcp-cdl-fc-423",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Why do ingestion scale and long retention matter so much for a SIEM?",
    hint: "Attackers often sit undetected for weeks or months.",
    back: "Breaches are frequently discovered long after the intrusion began, so investigators need <strong>months of telemetry</strong> to reconstruct what happened, and newly published indicators are only useful if there is <strong>history to search</strong>. SIEMs priced so that every gigabyte hurts push teams to drop sources like DNS or firewall logs. Google Security Operations runs on Google's infrastructure to keep large volumes searchable in seconds.",
    tags: ["Google Security Operations", "Retention", "SIEM"]
  },
  {
    id: "gcp-cdl-fc-424",
    difficulty: "medium",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "What does Applied Threat Intelligence do inside Google Security Operations?",
    hint: "Intelligence that shows up already matched to your data.",
    back: "<strong>Applied Threat Intelligence</strong> automatically matches Google and Mandiant intelligence against an organization's ingested telemetry and <strong>prioritizes</strong> the resulting matches, so analysts are alerted to indicators that are both present in their environment and genuinely dangerous, without having to build and maintain intelligence feeds and matching rules themselves.",
    tags: ["Google Security Operations", "Threat intelligence"]
  },
  {
    id: "gcp-cdl-fc-425",
    difficulty: "easy",
    certId: "gcp-cdl",
    domainId: "d5",
    front: "Posture management vs threat detection: which one finds weaknesses and which finds attacks?",
    hint: "Before an attack vs during one.",
    back: "<strong>Posture management</strong> finds <strong>weaknesses</strong>: misconfigurations, vulnerabilities and drift from policy that an attacker could exploit, so they can be fixed in advance. <strong>Threat detection</strong> finds <strong>attacks in progress</strong>: suspicious behavior such as cryptomining, data exfiltration or malicious logins. A mature program needs both, and Security Command Center provides each for Google Cloud.",
    tags: ["Security posture", "Threat detection"]
  }
];

export default GCP_CDL_FLASHCARDS_17;
