export const GCP_PCDOE_QUESTIONS_19 = [
  {
    id: "gcp-pcdoe-451",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Postmortem Action Item Tracking: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Remediation Tracking to prevent recurrence of an outage caused by unhandled disk saturation on an auxiliary logging daemon.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Prioritizing and tracking postmortem preventative action items in engineering backlogs is under consideration.",
    options: [
      { id: 'A', text: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work." },
      { id: 'B', text: "File a general suggestion ticket and close it immediately without assigning an owner or deadline." },
      { id: 'C', text: "Assume the team has learned the lesson and take no engineering action to improve system safeguards." },
      { id: 'D', text: "Mandate that engineers manually check disk free space every two hours indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work. Postmortems are only effective if their action items are executed. High-priority corrective actions (such as automated disk alerts, quota protections, and self-healing cleanup jobs) must be entered into the product engineering sprint backlog and tracked to completion to prevent recurrence.",
    referenceUrl: "https://sre.google/workbook/postmortem-culture/",
    tags: ["Remediation Tracking", "Action Item Tracking", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-452",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Postmortem Action Item Tracking: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Remediation Tracking to prevent recurrence of an outage caused by unhandled disk saturation on an auxiliary logging daemon.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Prioritizing and tracking postmortem preventative action items in engineering backlogs is under consideration.",
    options: [
      { id: 'A', text: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work." },
      { id: 'B', text: "File a general suggestion ticket and close it immediately without assigning an owner or deadline." },
      { id: 'C', text: "Assume the team has learned the lesson and take no engineering action to improve system safeguards." },
      { id: 'D', text: "Mandate that engineers manually check disk free space every two hours indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work. Postmortems are only effective if their action items are executed. High-priority corrective actions (such as automated disk alerts, quota protections, and self-healing cleanup jobs) must be entered into the product engineering sprint backlog and tracked to completion to prevent recurrence.",
    referenceUrl: "https://sre.google/workbook/postmortem-culture/",
    tags: ["Remediation Tracking", "Action Item Tracking", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-453",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Postmortem Action Item Tracking: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Remediation Tracking to prevent recurrence of an outage caused by unhandled disk saturation on an auxiliary logging daemon.",
    question: "Which solution implements these mandatory compliance and security controls? Prioritizing and tracking postmortem preventative action items in engineering backlogs is under consideration.",
    options: [
      { id: 'A', text: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work." },
      { id: 'B', text: "File a general suggestion ticket and close it immediately without assigning an owner or deadline." },
      { id: 'C', text: "Assume the team has learned the lesson and take no engineering action to improve system safeguards." },
      { id: 'D', text: "Mandate that engineers manually check disk free space every two hours indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work. Postmortems are only effective if their action items are executed. High-priority corrective actions (such as automated disk alerts, quota protections, and self-healing cleanup jobs) must be entered into the product engineering sprint backlog and tracked to completion to prevent recurrence.",
    referenceUrl: "https://sre.google/workbook/postmortem-culture/",
    tags: ["Remediation Tracking", "Action Item Tracking", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-454",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Postmortem Action Item Tracking: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Remediation Tracking to prevent recurrence of an outage caused by unhandled disk saturation on an auxiliary logging daemon.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Prioritizing and tracking postmortem preventative action items in engineering backlogs is under consideration.",
    options: [
      { id: 'A', text: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work." },
      { id: 'B', text: "File a general suggestion ticket and close it immediately without assigning an owner or deadline." },
      { id: 'C', text: "Assume the team has learned the lesson and take no engineering action to improve system safeguards." },
      { id: 'D', text: "Mandate that engineers manually check disk free space every two hours indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work. Postmortems are only effective if their action items are executed. High-priority corrective actions (such as automated disk alerts, quota protections, and self-healing cleanup jobs) must be entered into the product engineering sprint backlog and tracked to completion to prevent recurrence.",
    referenceUrl: "https://sre.google/workbook/postmortem-culture/",
    tags: ["Remediation Tracking", "Action Item Tracking", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-455",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Postmortem Action Item Tracking: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Remediation Tracking to prevent recurrence of an outage caused by unhandled disk saturation on an auxiliary logging daemon.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Prioritizing and tracking postmortem preventative action items in engineering backlogs is under consideration.",
    options: [
      { id: 'A', text: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work." },
      { id: 'B', text: "File a general suggestion ticket and close it immediately without assigning an owner or deadline." },
      { id: 'C', text: "Assume the team has learned the lesson and take no engineering action to improve system safeguards." },
      { id: 'D', text: "Mandate that engineers manually check disk free space every two hours indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Document actionable preventative tasks with assigned owners and deadlines in the project issue tracker, prioritizing them against standard feature work. Postmortems are only effective if their action items are executed. High-priority corrective actions (such as automated disk alerts, quota protections, and self-healing cleanup jobs) must be entered into the product engineering sprint backlog and tracked to completion to prevent recurrence.",
    referenceUrl: "https://sre.google/workbook/postmortem-culture/",
    tags: ["Remediation Tracking", "Action Item Tracking", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-456",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Runbook Automation and Playbooks: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Runbooks & Playbooks to enable on-call engineers to diagnose and resolve recurring complex cache invalidation issues quickly at 3:00 AM without deep domain expertise.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Automated and step-by-step diagnostic runbooks for on-call responders is under consideration.",
    options: [
      { id: 'A', text: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows." },
      { id: 'B', text: "Rely on on-call engineers to figure out unique diagnostic commands on their own in the middle of the night." },
      { id: 'C', text: "Require the original author of the code to be woken up every time an alert fires." },
      { id: 'D', text: "Keep outdated Word documents with ambiguous guidance on an internal file share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows. Effective alerting policies include direct links to runbooks. High-quality runbooks provide step-by-step diagnostic commands, expected outputs, safe rollback procedures, and escalation trees. Automating routine steps with scripts reduces mean time to recovery (MTTR) and cognitive fatigue.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Runbooks & Playbooks", "Runbook Automation", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-457",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Runbook Automation and Playbooks: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Runbooks & Playbooks to enable on-call engineers to diagnose and resolve recurring complex cache invalidation issues quickly at 3:00 AM without deep domain expertise.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Automated and step-by-step diagnostic runbooks for on-call responders is under consideration.",
    options: [
      { id: 'A', text: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows." },
      { id: 'B', text: "Rely on on-call engineers to figure out unique diagnostic commands on their own in the middle of the night." },
      { id: 'C', text: "Require the original author of the code to be woken up every time an alert fires." },
      { id: 'D', text: "Keep outdated Word documents with ambiguous guidance on an internal file share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows. Effective alerting policies include direct links to runbooks. High-quality runbooks provide step-by-step diagnostic commands, expected outputs, safe rollback procedures, and escalation trees. Automating routine steps with scripts reduces mean time to recovery (MTTR) and cognitive fatigue.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Runbooks & Playbooks", "Runbook Automation", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-458",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Runbook Automation and Playbooks: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Runbooks & Playbooks to enable on-call engineers to diagnose and resolve recurring complex cache invalidation issues quickly at 3:00 AM without deep domain expertise.",
    question: "Which solution implements these mandatory compliance and security controls? Automated and step-by-step diagnostic runbooks for on-call responders is under consideration.",
    options: [
      { id: 'A', text: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows." },
      { id: 'B', text: "Rely on on-call engineers to figure out unique diagnostic commands on their own in the middle of the night." },
      { id: 'C', text: "Require the original author of the code to be woken up every time an alert fires." },
      { id: 'D', text: "Keep outdated Word documents with ambiguous guidance on an internal file share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows. Effective alerting policies include direct links to runbooks. High-quality runbooks provide step-by-step diagnostic commands, expected outputs, safe rollback procedures, and escalation trees. Automating routine steps with scripts reduces mean time to recovery (MTTR) and cognitive fatigue.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Runbooks & Playbooks", "Runbook Automation", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-459",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Runbook Automation and Playbooks: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Runbooks & Playbooks to enable on-call engineers to diagnose and resolve recurring complex cache invalidation issues quickly at 3:00 AM without deep domain expertise.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Automated and step-by-step diagnostic runbooks for on-call responders is under consideration.",
    options: [
      { id: 'A', text: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows." },
      { id: 'B', text: "Rely on on-call engineers to figure out unique diagnostic commands on their own in the middle of the night." },
      { id: 'C', text: "Require the original author of the code to be woken up every time an alert fires." },
      { id: 'D', text: "Keep outdated Word documents with ambiguous guidance on an internal file share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows. Effective alerting policies include direct links to runbooks. High-quality runbooks provide step-by-step diagnostic commands, expected outputs, safe rollback procedures, and escalation trees. Automating routine steps with scripts reduces mean time to recovery (MTTR) and cognitive fatigue.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Runbooks & Playbooks", "Runbook Automation", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-460",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Runbook Automation and Playbooks: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Runbooks & Playbooks to enable on-call engineers to diagnose and resolve recurring complex cache invalidation issues quickly at 3:00 AM without deep domain expertise.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Automated and step-by-step diagnostic runbooks for on-call responders is under consideration.",
    options: [
      { id: 'A', text: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows." },
      { id: 'B', text: "Rely on on-call engineers to figure out unique diagnostic commands on their own in the middle of the night." },
      { id: 'C', text: "Require the original author of the code to be woken up every time an alert fires." },
      { id: 'D', text: "Keep outdated Word documents with ambiguous guidance on an internal file share." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Maintain clear, version-controlled runbooks linked directly to alerting policies, including pre-validated diagnostic scripts and automated remediation workflows. Effective alerting policies include direct links to runbooks. High-quality runbooks provide step-by-step diagnostic commands, expected outputs, safe rollback procedures, and escalation trees. Automating routine steps with scripts reduces mean time to recovery (MTTR) and cognitive fatigue.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Runbooks & Playbooks", "Runbook Automation", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-461",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Disaster Recovery Testing and Chaos Engineering: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Chaos Engineering to validate whether a multi-region Cloud Spanner and GKE deployment truly fails over seamlessly without human intervention before a real disaster strikes.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Simulating regional outages and service failures with chaos experiments is under consideration.",
    options: [
      { id: 'A', text: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production." },
      { id: 'B', text: "Wait for an actual catastrophic natural disaster in a Google Cloud region to discover if failover works." },
      { id: 'C', text: "Assume high availability configurations will work as specified in vendor sales brochures without validation." },
      { id: 'D', text: "Disable all automated failover systems during tests to avoid disrupting synthetic test users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production. Disaster recovery and high availability architectures must be validated under simulated fault conditions. Conducting chaos experiments and scheduled game days tests whether automated traffic failovers, circuit breakers, and database replication behave correctly under live network partitions.",
    referenceUrl: "https://sre.google/sre-book/disaster-recovery/",
    tags: ["Chaos Engineering", "Chaos Engineering", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-462",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Disaster Recovery Testing and Chaos Engineering: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Chaos Engineering to validate whether a multi-region Cloud Spanner and GKE deployment truly fails over seamlessly without human intervention before a real disaster strikes.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Simulating regional outages and service failures with chaos experiments is under consideration.",
    options: [
      { id: 'A', text: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production." },
      { id: 'B', text: "Wait for an actual catastrophic natural disaster in a Google Cloud region to discover if failover works." },
      { id: 'C', text: "Assume high availability configurations will work as specified in vendor sales brochures without validation." },
      { id: 'D', text: "Disable all automated failover systems during tests to avoid disrupting synthetic test users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production. Disaster recovery and high availability architectures must be validated under simulated fault conditions. Conducting chaos experiments and scheduled game days tests whether automated traffic failovers, circuit breakers, and database replication behave correctly under live network partitions.",
    referenceUrl: "https://sre.google/sre-book/disaster-recovery/",
    tags: ["Chaos Engineering", "Chaos Engineering", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-463",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Disaster Recovery Testing and Chaos Engineering: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Chaos Engineering to validate whether a multi-region Cloud Spanner and GKE deployment truly fails over seamlessly without human intervention before a real disaster strikes.",
    question: "Which solution implements these mandatory compliance and security controls? Simulating regional outages and service failures with chaos experiments is under consideration.",
    options: [
      { id: 'A', text: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production." },
      { id: 'B', text: "Wait for an actual catastrophic natural disaster in a Google Cloud region to discover if failover works." },
      { id: 'C', text: "Assume high availability configurations will work as specified in vendor sales brochures without validation." },
      { id: 'D', text: "Disable all automated failover systems during tests to avoid disrupting synthetic test users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production. Disaster recovery and high availability architectures must be validated under simulated fault conditions. Conducting chaos experiments and scheduled game days tests whether automated traffic failovers, circuit breakers, and database replication behave correctly under live network partitions.",
    referenceUrl: "https://sre.google/sre-book/disaster-recovery/",
    tags: ["Chaos Engineering", "Chaos Engineering", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-464",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Disaster Recovery Testing and Chaos Engineering: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Chaos Engineering to validate whether a multi-region Cloud Spanner and GKE deployment truly fails over seamlessly without human intervention before a real disaster strikes.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Simulating regional outages and service failures with chaos experiments is under consideration.",
    options: [
      { id: 'A', text: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production." },
      { id: 'B', text: "Wait for an actual catastrophic natural disaster in a Google Cloud region to discover if failover works." },
      { id: 'C', text: "Assume high availability configurations will work as specified in vendor sales brochures without validation." },
      { id: 'D', text: "Disable all automated failover systems during tests to avoid disrupting synthetic test users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production. Disaster recovery and high availability architectures must be validated under simulated fault conditions. Conducting chaos experiments and scheduled game days tests whether automated traffic failovers, circuit breakers, and database replication behave correctly under live network partitions.",
    referenceUrl: "https://sre.google/sre-book/disaster-recovery/",
    tags: ["Chaos Engineering", "Chaos Engineering", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-465",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Disaster Recovery Testing and Chaos Engineering: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Chaos Engineering to validate whether a multi-region Cloud Spanner and GKE deployment truly fails over seamlessly without human intervention before a real disaster strikes.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Simulating regional outages and service failures with chaos experiments is under consideration.",
    options: [
      { id: 'A', text: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production." },
      { id: 'B', text: "Wait for an actual catastrophic natural disaster in a Google Cloud region to discover if failover works." },
      { id: 'C', text: "Assume high availability configurations will work as specified in vendor sales brochures without validation." },
      { id: 'D', text: "Disable all automated failover systems during tests to avoid disrupting synthetic test users." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Schedule regular disaster recovery game days and automated chaos engineering experiments (e.g., Chaos Mesh, simulating zone/region disconnects) in pre-production and controlled production. Disaster recovery and high availability architectures must be validated under simulated fault conditions. Conducting chaos experiments and scheduled game days tests whether automated traffic failovers, circuit breakers, and database replication behave correctly under live network partitions.",
    referenceUrl: "https://sre.google/sre-book/disaster-recovery/",
    tags: ["Chaos Engineering", "Chaos Engineering", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-466",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Vulnerability Scanning in Artifact Registry: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Container Security to identify known Common Vulnerabilities and Exposures (CVEs) in third-party base images before deploying containers to production GKE clusters.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Automated vulnerability scanning and SBOM generation for container images is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings." },
      { id: 'B', text: "Rely exclusively on developers manually reading release notes of every open-source library used." },
      { id: 'C', text: "Disable all security scanners to speed up image upload and push speeds in CI/CD pipelines." },
      { id: 'D', text: "Scan containers only after they have been running in production for six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings. Artifact Registry provides automatic vulnerability scanning for container images upon push. It cross-references operating system packages and language dependencies against known vulnerability databases, reporting CVE severity ratings to enforce admission control policies.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Container Security", "Vulnerability Scanning", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-467",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Vulnerability Scanning in Artifact Registry: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Container Security to identify known Common Vulnerabilities and Exposures (CVEs) in third-party base images before deploying containers to production GKE clusters.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Automated vulnerability scanning and SBOM generation for container images is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings." },
      { id: 'B', text: "Rely exclusively on developers manually reading release notes of every open-source library used." },
      { id: 'C', text: "Disable all security scanners to speed up image upload and push speeds in CI/CD pipelines." },
      { id: 'D', text: "Scan containers only after they have been running in production for six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings. Artifact Registry provides automatic vulnerability scanning for container images upon push. It cross-references operating system packages and language dependencies against known vulnerability databases, reporting CVE severity ratings to enforce admission control policies.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Container Security", "Vulnerability Scanning", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-468",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Vulnerability Scanning in Artifact Registry: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Container Security to identify known Common Vulnerabilities and Exposures (CVEs) in third-party base images before deploying containers to production GKE clusters.",
    question: "Which solution implements these mandatory compliance and security controls? Automated vulnerability scanning and SBOM generation for container images is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings." },
      { id: 'B', text: "Rely exclusively on developers manually reading release notes of every open-source library used." },
      { id: 'C', text: "Disable all security scanners to speed up image upload and push speeds in CI/CD pipelines." },
      { id: 'D', text: "Scan containers only after they have been running in production for six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings. Artifact Registry provides automatic vulnerability scanning for container images upon push. It cross-references operating system packages and language dependencies against known vulnerability databases, reporting CVE severity ratings to enforce admission control policies.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Container Security", "Vulnerability Scanning", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-469",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Vulnerability Scanning in Artifact Registry: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Container Security to identify known Common Vulnerabilities and Exposures (CVEs) in third-party base images before deploying containers to production GKE clusters.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Automated vulnerability scanning and SBOM generation for container images is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings." },
      { id: 'B', text: "Rely exclusively on developers manually reading release notes of every open-source library used." },
      { id: 'C', text: "Disable all security scanners to speed up image upload and push speeds in CI/CD pipelines." },
      { id: 'D', text: "Scan containers only after they have been running in production for six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings. Artifact Registry provides automatic vulnerability scanning for container images upon push. It cross-references operating system packages and language dependencies against known vulnerability databases, reporting CVE severity ratings to enforce admission control policies.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Container Security", "Vulnerability Scanning", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-470",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Vulnerability Scanning in Artifact Registry: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Container Security to identify known Common Vulnerabilities and Exposures (CVEs) in third-party base images before deploying containers to production GKE clusters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Automated vulnerability scanning and SBOM generation for container images is under consideration.",
    options: [
      { id: 'A', text: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings." },
      { id: 'B', text: "Rely exclusively on developers manually reading release notes of every open-source library used." },
      { id: 'C', text: "Disable all security scanners to speed up image upload and push speeds in CI/CD pipelines." },
      { id: 'D', text: "Scan containers only after they have been running in production for six months." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable Automated Container Scanning in Artifact Registry to automatically inspect uploaded container images and generate vulnerability reports with severity ratings. Artifact Registry provides automatic vulnerability scanning for container images upon push. It cross-references operating system packages and language dependencies against known vulnerability databases, reporting CVE severity ratings to enforce admission control policies.",
    referenceUrl: "https://cloud.google.com/artifact-registry/docs/analysis",
    tags: ["Container Security", "Vulnerability Scanning", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-471",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Binary Authorization on GKE: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Supply Chain Security to guarantee that only container images built by approved Cloud Build pipelines and verified by security scanning tools can run on production GKE clusters.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Deploy-time policy enforcement with Binary Authorization and cryptographic attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments." },
      { id: 'B', text: "Allow any image hosted on public Docker Hub to be pulled and executed on production nodes." },
      { id: 'C', text: "Rely on code review comments in GitHub pull requests as the sole runtime deployment guardrail." },
      { id: 'D', text: "Instruct cluster administrators to manually verify container SHA256 hashes by sight before each release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments. Binary Authorization is a deploy-time security control for GKE. It evaluates incoming pod creation requests against defined policies, verifying that container images carry cryptographic signatures (attestations) from trusted authorities (build pipeline, security scanner) before admission.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/overview",
    tags: ["Supply Chain Security", "Binary Authorization", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-472",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Binary Authorization on GKE: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Supply Chain Security to guarantee that only container images built by approved Cloud Build pipelines and verified by security scanning tools can run on production GKE clusters.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Deploy-time policy enforcement with Binary Authorization and cryptographic attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments." },
      { id: 'B', text: "Allow any image hosted on public Docker Hub to be pulled and executed on production nodes." },
      { id: 'C', text: "Rely on code review comments in GitHub pull requests as the sole runtime deployment guardrail." },
      { id: 'D', text: "Instruct cluster administrators to manually verify container SHA256 hashes by sight before each release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments. Binary Authorization is a deploy-time security control for GKE. It evaluates incoming pod creation requests against defined policies, verifying that container images carry cryptographic signatures (attestations) from trusted authorities (build pipeline, security scanner) before admission.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/overview",
    tags: ["Supply Chain Security", "Binary Authorization", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-473",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Binary Authorization on GKE: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Supply Chain Security to guarantee that only container images built by approved Cloud Build pipelines and verified by security scanning tools can run on production GKE clusters.",
    question: "Which solution implements these mandatory compliance and security controls? Deploy-time policy enforcement with Binary Authorization and cryptographic attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments." },
      { id: 'B', text: "Allow any image hosted on public Docker Hub to be pulled and executed on production nodes." },
      { id: 'C', text: "Rely on code review comments in GitHub pull requests as the sole runtime deployment guardrail." },
      { id: 'D', text: "Instruct cluster administrators to manually verify container SHA256 hashes by sight before each release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments. Binary Authorization is a deploy-time security control for GKE. It evaluates incoming pod creation requests against defined policies, verifying that container images carry cryptographic signatures (attestations) from trusted authorities (build pipeline, security scanner) before admission.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/overview",
    tags: ["Supply Chain Security", "Binary Authorization", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-474",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Binary Authorization on GKE: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Supply Chain Security to guarantee that only container images built by approved Cloud Build pipelines and verified by security scanning tools can run on production GKE clusters.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Deploy-time policy enforcement with Binary Authorization and cryptographic attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments." },
      { id: 'B', text: "Allow any image hosted on public Docker Hub to be pulled and executed on production nodes." },
      { id: 'C', text: "Rely on code review comments in GitHub pull requests as the sole runtime deployment guardrail." },
      { id: 'D', text: "Instruct cluster administrators to manually verify container SHA256 hashes by sight before each release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments. Binary Authorization is a deploy-time security control for GKE. It evaluates incoming pod creation requests against defined policies, verifying that container images carry cryptographic signatures (attestations) from trusted authorities (build pipeline, security scanner) before admission.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/overview",
    tags: ["Supply Chain Security", "Binary Authorization", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-475",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d5",
    domainName: "Ensuring continuous security and compliance",
    title: "Binary Authorization on GKE: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Supply Chain Security to guarantee that only container images built by approved Cloud Build pipelines and verified by security scanning tools can run on production GKE clusters.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Deploy-time policy enforcement with Binary Authorization and cryptographic attestations is under consideration.",
    options: [
      { id: 'A', text: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments." },
      { id: 'B', text: "Allow any image hosted on public Docker Hub to be pulled and executed on production nodes." },
      { id: 'C', text: "Rely on code review comments in GitHub pull requests as the sole runtime deployment guardrail." },
      { id: 'D', text: "Instruct cluster administrators to manually verify container SHA256 hashes by sight before each release." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Binary Authorization policies on GKE requiring cryptographic attestations from Cloud Build and vulnerability scanning attestors before admitting pod deployments. Binary Authorization is a deploy-time security control for GKE. It evaluates incoming pod creation requests against defined policies, verifying that container images carry cryptographic signatures (attestations) from trusted authorities (build pipeline, security scanner) before admission.",
    referenceUrl: "https://cloud.google.com/binary-authorization/docs/overview",
    tags: ["Supply Chain Security", "Binary Authorization", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_19;
