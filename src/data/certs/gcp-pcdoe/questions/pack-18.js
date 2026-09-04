export const GCP_PCDOE_QUESTIONS_18 = [
  {
    id: "gcp-pcdoe-426",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Commander Role and Structure: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Incident Command to organize an engineering team's response to an active, severe multi-region production outage with clear division of responsibilities.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Incident Command System (ICS) structure for coordinated outage response is under consideration.",
    options: [
      { id: 'A', text: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications." },
      { id: 'B', text: "Have all engineers join a video call simultaneously and make uncoordinated changes to production servers." },
      { id: 'C', text: "Require the CEO to personally approve every diagnostic command and configuration tweak during the incident." },
      { id: 'D', text: "Avoid assigning any leadership role to ensure an egalitarian and distributed decision process during the crisis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications. Following the Incident Command System (ICS) framework, the Incident Commander holds ultimate decision-making authority, coordinates tasks, delegates operational debugging to an Operations Lead, and delegates stakeholder updates to a Communications Lead, eliminating chaos.",
    referenceUrl: "https://sre.google/sre-book/managing-incidents/",
    tags: ["Incident Command", "Incident Command", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-427",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Commander Role and Structure: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Incident Command to organize an engineering team's response to an active, severe multi-region production outage with clear division of responsibilities.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Incident Command System (ICS) structure for coordinated outage response is under consideration.",
    options: [
      { id: 'A', text: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications." },
      { id: 'B', text: "Have all engineers join a video call simultaneously and make uncoordinated changes to production servers." },
      { id: 'C', text: "Require the CEO to personally approve every diagnostic command and configuration tweak during the incident." },
      { id: 'D', text: "Avoid assigning any leadership role to ensure an egalitarian and distributed decision process during the crisis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications. Following the Incident Command System (ICS) framework, the Incident Commander holds ultimate decision-making authority, coordinates tasks, delegates operational debugging to an Operations Lead, and delegates stakeholder updates to a Communications Lead, eliminating chaos.",
    referenceUrl: "https://sre.google/sre-book/managing-incidents/",
    tags: ["Incident Command", "Incident Command", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-428",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Commander Role and Structure: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Incident Command to organize an engineering team's response to an active, severe multi-region production outage with clear division of responsibilities.",
    question: "Which solution implements these mandatory compliance and security controls? Incident Command System (ICS) structure for coordinated outage response is under consideration.",
    options: [
      { id: 'A', text: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications." },
      { id: 'B', text: "Have all engineers join a video call simultaneously and make uncoordinated changes to production servers." },
      { id: 'C', text: "Require the CEO to personally approve every diagnostic command and configuration tweak during the incident." },
      { id: 'D', text: "Avoid assigning any leadership role to ensure an egalitarian and distributed decision process during the crisis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications. Following the Incident Command System (ICS) framework, the Incident Commander holds ultimate decision-making authority, coordinates tasks, delegates operational debugging to an Operations Lead, and delegates stakeholder updates to a Communications Lead, eliminating chaos.",
    referenceUrl: "https://sre.google/sre-book/managing-incidents/",
    tags: ["Incident Command", "Incident Command", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-429",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Commander Role and Structure: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Incident Command to organize an engineering team's response to an active, severe multi-region production outage with clear division of responsibilities.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Incident Command System (ICS) structure for coordinated outage response is under consideration.",
    options: [
      { id: 'A', text: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications." },
      { id: 'B', text: "Have all engineers join a video call simultaneously and make uncoordinated changes to production servers." },
      { id: 'C', text: "Require the CEO to personally approve every diagnostic command and configuration tweak during the incident." },
      { id: 'D', text: "Avoid assigning any leadership role to ensure an egalitarian and distributed decision process during the crisis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications. Following the Incident Command System (ICS) framework, the Incident Commander holds ultimate decision-making authority, coordinates tasks, delegates operational debugging to an Operations Lead, and delegates stakeholder updates to a Communications Lead, eliminating chaos.",
    referenceUrl: "https://sre.google/sre-book/managing-incidents/",
    tags: ["Incident Command", "Incident Command", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-430",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Commander Role and Structure: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Incident Command to organize an engineering team's response to an active, severe multi-region production outage with clear division of responsibilities.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Incident Command System (ICS) structure for coordinated outage response is under consideration.",
    options: [
      { id: 'A', text: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications." },
      { id: 'B', text: "Have all engineers join a video call simultaneously and make uncoordinated changes to production servers." },
      { id: 'C', text: "Require the CEO to personally approve every diagnostic command and configuration tweak during the incident." },
      { id: 'D', text: "Avoid assigning any leadership role to ensure an egalitarian and distributed decision process during the crisis." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Designate a single Incident Commander (IC) who leads overall strategy and communication, while assigning distinct leads for operations (debugging) and communications. Following the Incident Command System (ICS) framework, the Incident Commander holds ultimate decision-making authority, coordinates tasks, delegates operational debugging to an Operations Lead, and delegates stakeholder updates to a Communications Lead, eliminating chaos.",
    referenceUrl: "https://sre.google/sre-book/managing-incidents/",
    tags: ["Incident Command", "Incident Command", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-431",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Blameless Postmortem Culture: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Postmortem Culture to conduct a post-incident review following an accidental database deletion by a junior engineer during routine maintenance.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Root cause analysis focusing on system vulnerabilities rather than human error is under consideration.",
    options: [
      { id: 'A', text: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions." },
      { id: 'B', text: "Publicly reprimand the engineer during an all-hands meeting and dock their quarterly compensation." },
      { id: 'C', text: "Prohibit junior engineers from accessing the production cloud console forever." },
      { id: 'D', text: "Cancel the postmortem meeting to avoid discussing uncomfortable operational failures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions. Blameless postmortems assume that engineers act in good faith with the information available to them. True root causes are systemic weaknesses (missing guardrails, ambiguous tooling, lack of safety checks) rather than individual human mistakes. Cultivating blamelessness encourages transparent reporting.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Postmortem Culture", "Blameless Postmortems", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-432",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Blameless Postmortem Culture: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Postmortem Culture to conduct a post-incident review following an accidental database deletion by a junior engineer during routine maintenance.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Root cause analysis focusing on system vulnerabilities rather than human error is under consideration.",
    options: [
      { id: 'A', text: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions." },
      { id: 'B', text: "Publicly reprimand the engineer during an all-hands meeting and dock their quarterly compensation." },
      { id: 'C', text: "Prohibit junior engineers from accessing the production cloud console forever." },
      { id: 'D', text: "Cancel the postmortem meeting to avoid discussing uncomfortable operational failures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions. Blameless postmortems assume that engineers act in good faith with the information available to them. True root causes are systemic weaknesses (missing guardrails, ambiguous tooling, lack of safety checks) rather than individual human mistakes. Cultivating blamelessness encourages transparent reporting.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Postmortem Culture", "Blameless Postmortems", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-433",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Blameless Postmortem Culture: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Postmortem Culture to conduct a post-incident review following an accidental database deletion by a junior engineer during routine maintenance.",
    question: "Which solution implements these mandatory compliance and security controls? Root cause analysis focusing on system vulnerabilities rather than human error is under consideration.",
    options: [
      { id: 'A', text: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions." },
      { id: 'B', text: "Publicly reprimand the engineer during an all-hands meeting and dock their quarterly compensation." },
      { id: 'C', text: "Prohibit junior engineers from accessing the production cloud console forever." },
      { id: 'D', text: "Cancel the postmortem meeting to avoid discussing uncomfortable operational failures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions. Blameless postmortems assume that engineers act in good faith with the information available to them. True root causes are systemic weaknesses (missing guardrails, ambiguous tooling, lack of safety checks) rather than individual human mistakes. Cultivating blamelessness encourages transparent reporting.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Postmortem Culture", "Blameless Postmortems", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-434",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Blameless Postmortem Culture: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Postmortem Culture to conduct a post-incident review following an accidental database deletion by a junior engineer during routine maintenance.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Root cause analysis focusing on system vulnerabilities rather than human error is under consideration.",
    options: [
      { id: 'A', text: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions." },
      { id: 'B', text: "Publicly reprimand the engineer during an all-hands meeting and dock their quarterly compensation." },
      { id: 'C', text: "Prohibit junior engineers from accessing the production cloud console forever." },
      { id: 'D', text: "Cancel the postmortem meeting to avoid discussing uncomfortable operational failures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions. Blameless postmortems assume that engineers act in good faith with the information available to them. True root causes are systemic weaknesses (missing guardrails, ambiguous tooling, lack of safety checks) rather than individual human mistakes. Cultivating blamelessness encourages transparent reporting.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Postmortem Culture", "Blameless Postmortems", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-435",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Blameless Postmortem Culture: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Postmortem Culture to conduct a post-incident review following an accidental database deletion by a junior engineer during routine maintenance.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Root cause analysis focusing on system vulnerabilities rather than human error is under consideration.",
    options: [
      { id: 'A', text: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions." },
      { id: 'B', text: "Publicly reprimand the engineer during an all-hands meeting and dock their quarterly compensation." },
      { id: 'C', text: "Prohibit junior engineers from accessing the production cloud console forever." },
      { id: 'D', text: "Cancel the postmortem meeting to avoid discussing uncomfortable operational failures." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Facilitate a blameless postmortem that identifies system-level vulnerabilities (e.g., lack of confirmation safeguards, missing RBAC restrictions) and defines corrective actions. Blameless postmortems assume that engineers act in good faith with the information available to them. True root causes are systemic weaknesses (missing guardrails, ambiguous tooling, lack of safety checks) rather than individual human mistakes. Cultivating blamelessness encourages transparent reporting.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Postmortem Culture", "Blameless Postmortems", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-436",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Communication and Status Dashboards: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Incident Communication to keep executive stakeholders, internal support teams, and external customers informed of service degradation during an ongoing high-impact incident.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Clear internal and external communication protocols during outages is under consideration.",
    options: [
      { id: 'A', text: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates." },
      { id: 'B', text: "Refuse to acknowledge the incident publicly until complete recovery has been achieved." },
      { id: 'C', text: "Send mass uncoordinated emails to customers speculating on unverified technical root causes." },
      { id: 'D', text: "Instruct customer support agents to deny all reports of system problems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates. Effective incident communication requires dedicated communication channels and pre-defined communication templates. The Communications Lead publishes regular factual updates covering current impact, mitigation steps underway, and expected next update times, preserving customer trust.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Incident Communication", "Incident Communications", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-437",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Communication and Status Dashboards: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Incident Communication to keep executive stakeholders, internal support teams, and external customers informed of service degradation during an ongoing high-impact incident.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Clear internal and external communication protocols during outages is under consideration.",
    options: [
      { id: 'A', text: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates." },
      { id: 'B', text: "Refuse to acknowledge the incident publicly until complete recovery has been achieved." },
      { id: 'C', text: "Send mass uncoordinated emails to customers speculating on unverified technical root causes." },
      { id: 'D', text: "Instruct customer support agents to deny all reports of system problems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates. Effective incident communication requires dedicated communication channels and pre-defined communication templates. The Communications Lead publishes regular factual updates covering current impact, mitigation steps underway, and expected next update times, preserving customer trust.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Incident Communication", "Incident Communications", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-438",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Communication and Status Dashboards: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Incident Communication to keep executive stakeholders, internal support teams, and external customers informed of service degradation during an ongoing high-impact incident.",
    question: "Which solution implements these mandatory compliance and security controls? Clear internal and external communication protocols during outages is under consideration.",
    options: [
      { id: 'A', text: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates." },
      { id: 'B', text: "Refuse to acknowledge the incident publicly until complete recovery has been achieved." },
      { id: 'C', text: "Send mass uncoordinated emails to customers speculating on unverified technical root causes." },
      { id: 'D', text: "Instruct customer support agents to deny all reports of system problems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates. Effective incident communication requires dedicated communication channels and pre-defined communication templates. The Communications Lead publishes regular factual updates covering current impact, mitigation steps underway, and expected next update times, preserving customer trust.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Incident Communication", "Incident Communications", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-439",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Communication and Status Dashboards: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Incident Communication to keep executive stakeholders, internal support teams, and external customers informed of service degradation during an ongoing high-impact incident.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Clear internal and external communication protocols during outages is under consideration.",
    options: [
      { id: 'A', text: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates." },
      { id: 'B', text: "Refuse to acknowledge the incident publicly until complete recovery has been achieved." },
      { id: 'C', text: "Send mass uncoordinated emails to customers speculating on unverified technical root causes." },
      { id: 'D', text: "Instruct customer support agents to deny all reports of system problems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates. Effective incident communication requires dedicated communication channels and pre-defined communication templates. The Communications Lead publishes regular factual updates covering current impact, mitigation steps underway, and expected next update times, preserving customer trust.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Incident Communication", "Incident Communications", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-440",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Incident Communication and Status Dashboards: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Incident Communication to keep executive stakeholders, internal support teams, and external customers informed of service degradation during an ongoing high-impact incident.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Clear internal and external communication protocols during outages is under consideration.",
    options: [
      { id: 'A', text: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates." },
      { id: 'B', text: "Refuse to acknowledge the incident publicly until complete recovery has been achieved." },
      { id: 'C', text: "Send mass uncoordinated emails to customers speculating on unverified technical root causes." },
      { id: 'D', text: "Instruct customer support agents to deny all reports of system problems." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish timely, factual updates to a dedicated external status page and internal incident Slack channel using pre-approved communication templates. Effective incident communication requires dedicated communication channels and pre-defined communication templates. The Communications Lead publishes regular factual updates covering current impact, mitigation steps underway, and expected next update times, preserving customer trust.",
    referenceUrl: "https://sre.google/workbook/incident-response/",
    tags: ["Incident Communication", "Incident Communications", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-441",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Rollback Strategies and Safe Reversals: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Mitigation Strategies to minimize customer impact when a newly deployed microservice version triggers a 25% spike in payment processing failures.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Prioritizing rapid service mitigation and rollbacks over root cause debugging is under consideration.",
    options: [
      { id: 'A', text: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized." },
      { id: 'B', text: "Keep the buggy version active in production while attaching debuggers to live servers to identify the bug." },
      { id: 'C', text: "Instruct customer support to advise users to retry failed payments until the code can be patched in master." },
      { id: 'D', text: "Attempt to write and review an emergency hotfix directly in the production environment without rollback." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized. The primary duty during an incident is fast mitigation to restore customer service, not diagnosing why the failure occurred. Rolling back to the last known good revision immediately restores availability; engineers can debug the flawed artifact safely in an isolated staging environment.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["Mitigation Strategies", "Mitigation vs Debugging", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-442",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Rollback Strategies and Safe Reversals: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Mitigation Strategies to minimize customer impact when a newly deployed microservice version triggers a 25% spike in payment processing failures.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Prioritizing rapid service mitigation and rollbacks over root cause debugging is under consideration.",
    options: [
      { id: 'A', text: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized." },
      { id: 'B', text: "Keep the buggy version active in production while attaching debuggers to live servers to identify the bug." },
      { id: 'C', text: "Instruct customer support to advise users to retry failed payments until the code can be patched in master." },
      { id: 'D', text: "Attempt to write and review an emergency hotfix directly in the production environment without rollback." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized. The primary duty during an incident is fast mitigation to restore customer service, not diagnosing why the failure occurred. Rolling back to the last known good revision immediately restores availability; engineers can debug the flawed artifact safely in an isolated staging environment.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["Mitigation Strategies", "Mitigation vs Debugging", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-443",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Rollback Strategies and Safe Reversals: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Mitigation Strategies to minimize customer impact when a newly deployed microservice version triggers a 25% spike in payment processing failures.",
    question: "Which solution implements these mandatory compliance and security controls? Prioritizing rapid service mitigation and rollbacks over root cause debugging is under consideration.",
    options: [
      { id: 'A', text: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized." },
      { id: 'B', text: "Keep the buggy version active in production while attaching debuggers to live servers to identify the bug." },
      { id: 'C', text: "Instruct customer support to advise users to retry failed payments until the code can be patched in master." },
      { id: 'D', text: "Attempt to write and review an emergency hotfix directly in the production environment without rollback." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized. The primary duty during an incident is fast mitigation to restore customer service, not diagnosing why the failure occurred. Rolling back to the last known good revision immediately restores availability; engineers can debug the flawed artifact safely in an isolated staging environment.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["Mitigation Strategies", "Mitigation vs Debugging", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-444",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Rollback Strategies and Safe Reversals: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Mitigation Strategies to minimize customer impact when a newly deployed microservice version triggers a 25% spike in payment processing failures.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Prioritizing rapid service mitigation and rollbacks over root cause debugging is under consideration.",
    options: [
      { id: 'A', text: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized." },
      { id: 'B', text: "Keep the buggy version active in production while attaching debuggers to live servers to identify the bug." },
      { id: 'C', text: "Instruct customer support to advise users to retry failed payments until the code can be patched in master." },
      { id: 'D', text: "Attempt to write and review an emergency hotfix directly in the production environment without rollback." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized. The primary duty during an incident is fast mitigation to restore customer service, not diagnosing why the failure occurred. Rolling back to the last known good revision immediately restores availability; engineers can debug the flawed artifact safely in an isolated staging environment.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["Mitigation Strategies", "Mitigation vs Debugging", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-445",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Rollback Strategies and Safe Reversals: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Mitigation Strategies to minimize customer impact when a newly deployed microservice version triggers a 25% spike in payment processing failures.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Prioritizing rapid service mitigation and rollbacks over root cause debugging is under consideration.",
    options: [
      { id: 'A', text: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized." },
      { id: 'B', text: "Keep the buggy version active in production while attaching debuggers to live servers to identify the bug." },
      { id: 'C', text: "Instruct customer support to advise users to retry failed payments until the code can be patched in master." },
      { id: 'D', text: "Attempt to write and review an emergency hotfix directly in the production environment without rollback." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Roll back the deployment immediately to the known-healthy previous version, postponing detailed root cause investigation until production is stabilized. The primary duty during an incident is fast mitigation to restore customer service, not diagnosing why the failure occurred. Rolling back to the last known good revision immediately restores availability; engineers can debug the flawed artifact safely in an isolated staging environment.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["Mitigation Strategies", "Mitigation vs Debugging", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-446",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Emergency Access and Break-Glass Procedures: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Break-Glass Protocols to grant an on-call engineer temporary elevated administrative permissions to restart a corrupted Cloud Spanner session during a catastrophic outage.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Temporary elevated administrative privileges with audit logging for emergencies is under consideration.",
    options: [
      { id: 'A', text: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging." },
      { id: 'B', text: "Provide all engineers permanent Owner privileges across all production Google Cloud projects." },
      { id: 'C', text: "Share the root organization admin credentials among team members on a sticky note." },
      { id: 'D', text: "Refuse to grant elevated permissions under any circumstance, allowing the outage to persist indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging. Break-glass procedures allow engineers to claim temporary elevated permissions during critical outages. These access grants must be strictly time-bound, automatically revoked upon expiration, require peer or management notification, and generate immutable audit logs in Cloud Audit Logs.",
    referenceUrl: "https://cloud.google.com/architecture/emergency-access-management",
    tags: ["Break-Glass Protocols", "Break-Glass Access", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-447",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Emergency Access and Break-Glass Procedures: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Break-Glass Protocols to grant an on-call engineer temporary elevated administrative permissions to restart a corrupted Cloud Spanner session during a catastrophic outage.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Temporary elevated administrative privileges with audit logging for emergencies is under consideration.",
    options: [
      { id: 'A', text: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging." },
      { id: 'B', text: "Provide all engineers permanent Owner privileges across all production Google Cloud projects." },
      { id: 'C', text: "Share the root organization admin credentials among team members on a sticky note." },
      { id: 'D', text: "Refuse to grant elevated permissions under any circumstance, allowing the outage to persist indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging. Break-glass procedures allow engineers to claim temporary elevated permissions during critical outages. These access grants must be strictly time-bound, automatically revoked upon expiration, require peer or management notification, and generate immutable audit logs in Cloud Audit Logs.",
    referenceUrl: "https://cloud.google.com/architecture/emergency-access-management",
    tags: ["Break-Glass Protocols", "Break-Glass Access", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-448",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Emergency Access and Break-Glass Procedures: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Break-Glass Protocols to grant an on-call engineer temporary elevated administrative permissions to restart a corrupted Cloud Spanner session during a catastrophic outage.",
    question: "Which solution implements these mandatory compliance and security controls? Temporary elevated administrative privileges with audit logging for emergencies is under consideration.",
    options: [
      { id: 'A', text: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging." },
      { id: 'B', text: "Provide all engineers permanent Owner privileges across all production Google Cloud projects." },
      { id: 'C', text: "Share the root organization admin credentials among team members on a sticky note." },
      { id: 'D', text: "Refuse to grant elevated permissions under any circumstance, allowing the outage to persist indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging. Break-glass procedures allow engineers to claim temporary elevated permissions during critical outages. These access grants must be strictly time-bound, automatically revoked upon expiration, require peer or management notification, and generate immutable audit logs in Cloud Audit Logs.",
    referenceUrl: "https://cloud.google.com/architecture/emergency-access-management",
    tags: ["Break-Glass Protocols", "Break-Glass Access", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-449",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Emergency Access and Break-Glass Procedures: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Break-Glass Protocols to grant an on-call engineer temporary elevated administrative permissions to restart a corrupted Cloud Spanner session during a catastrophic outage.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Temporary elevated administrative privileges with audit logging for emergencies is under consideration.",
    options: [
      { id: 'A', text: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging." },
      { id: 'B', text: "Provide all engineers permanent Owner privileges across all production Google Cloud projects." },
      { id: 'C', text: "Share the root organization admin credentials among team members on a sticky note." },
      { id: 'D', text: "Refuse to grant elevated permissions under any circumstance, allowing the outage to persist indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging. Break-glass procedures allow engineers to claim temporary elevated permissions during critical outages. These access grants must be strictly time-bound, automatically revoked upon expiration, require peer or management notification, and generate immutable audit logs in Cloud Audit Logs.",
    referenceUrl: "https://cloud.google.com/architecture/emergency-access-management",
    tags: ["Break-Glass Protocols", "Break-Glass Access", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-450",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d4",
    domainName: "Managing service incidents and postmortems",
    title: "Emergency Access and Break-Glass Procedures: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Break-Glass Protocols to grant an on-call engineer temporary elevated administrative permissions to restart a corrupted Cloud Spanner session during a catastrophic outage.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Temporary elevated administrative privileges with audit logging for emergencies is under consideration.",
    options: [
      { id: 'A', text: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging." },
      { id: 'B', text: "Provide all engineers permanent Owner privileges across all production Google Cloud projects." },
      { id: 'C', text: "Share the root organization admin credentials among team members on a sticky note." },
      { id: 'D', text: "Refuse to grant elevated permissions under any circumstance, allowing the outage to persist indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Invoke a time-bound break-glass procedure using Cloud IAM conditional bindings or temporary group membership with automated escalation alerting and audit logging. Break-glass procedures allow engineers to claim temporary elevated permissions during critical outages. These access grants must be strictly time-bound, automatically revoked upon expiration, require peer or management notification, and generate immutable audit logs in Cloud Audit Logs.",
    referenceUrl: "https://cloud.google.com/architecture/emergency-access-management",
    tags: ["Break-Glass Protocols", "Break-Glass Access", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_18;
