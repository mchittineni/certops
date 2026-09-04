export const CNCF_CNPE_QUESTIONS_20 = [
  {
    id: "cncf-cnpe-476",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "FinOps Dynamic Workload Rightsizing: OpenCost and Goldilocks: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Workload Rightsizing to eliminate massive cloud compute waste caused by developers requesting 8 CPU cores for microservices utilizing only 0.1 cores.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Automated vertical rightsizing recommendations using VPA, Goldilocks, and OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Arbitrarily cap all microservice memory limits at 100MB, causing critical production services to crash with OOMKills." },
      { id: 'B', text: "Allow developers to allocate unlimited CPU and memory resources with zero monitoring or cost tracking." },
      { id: 'C', text: "Turn off all application pods on weekends to reduce compute consumption." },
      { id: 'D', text: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations. Workload rightsizing optimizes cluster efficiency. Tools like Fairwinds Goldilocks (leveraging Kubernetes Vertical Pod Autoscaler in recommendation mode) paired with OpenCost calculate actual CPU/memory usage and provide right-sized request/limit recommendations to developers.",
    referenceUrl: "https://goldilocks.docs.fairwinds.com/",
    tags: ["Workload Rightsizing", "Workload Rightsizing", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-477",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "FinOps Dynamic Workload Rightsizing: OpenCost and Goldilocks: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Workload Rightsizing to eliminate massive cloud compute waste caused by developers requesting 8 CPU cores for microservices utilizing only 0.1 cores.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Automated vertical rightsizing recommendations using VPA, Goldilocks, and OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to allocate unlimited CPU and memory resources with zero monitoring or cost tracking." },
      { id: 'B', text: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations." },
      { id: 'C', text: "Arbitrarily cap all microservice memory limits at 100MB, causing critical production services to crash with OOMKills." },
      { id: 'D', text: "Turn off all application pods on weekends to reduce compute consumption." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations. Workload rightsizing optimizes cluster efficiency. Tools like Fairwinds Goldilocks (leveraging Kubernetes Vertical Pod Autoscaler in recommendation mode) paired with OpenCost calculate actual CPU/memory usage and provide right-sized request/limit recommendations to developers.",
    referenceUrl: "https://goldilocks.docs.fairwinds.com/",
    tags: ["Workload Rightsizing", "Workload Rightsizing", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-478",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "FinOps Dynamic Workload Rightsizing: OpenCost and Goldilocks: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Workload Rightsizing to eliminate massive cloud compute waste caused by developers requesting 8 CPU cores for microservices utilizing only 0.1 cores.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Automated vertical rightsizing recommendations using VPA, Goldilocks, and OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Turn off all application pods on weekends to reduce compute consumption." },
      { id: 'B', text: "Allow developers to allocate unlimited CPU and memory resources with zero monitoring or cost tracking." },
      { id: 'C', text: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations." },
      { id: 'D', text: "Arbitrarily cap all microservice memory limits at 100MB, causing critical production services to crash with OOMKills." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations. Workload rightsizing optimizes cluster efficiency. Tools like Fairwinds Goldilocks (leveraging Kubernetes Vertical Pod Autoscaler in recommendation mode) paired with OpenCost calculate actual CPU/memory usage and provide right-sized request/limit recommendations to developers.",
    referenceUrl: "https://goldilocks.docs.fairwinds.com/",
    tags: ["Workload Rightsizing", "Workload Rightsizing", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-479",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "FinOps Dynamic Workload Rightsizing: OpenCost and Goldilocks: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Workload Rightsizing to eliminate massive cloud compute waste caused by developers requesting 8 CPU cores for microservices utilizing only 0.1 cores.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Automated vertical rightsizing recommendations using VPA, Goldilocks, and OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Arbitrarily cap all microservice memory limits at 100MB, causing critical production services to crash with OOMKills." },
      { id: 'B', text: "Allow developers to allocate unlimited CPU and memory resources with zero monitoring or cost tracking." },
      { id: 'C', text: "Turn off all application pods on weekends to reduce compute consumption." },
      { id: 'D', text: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations. Workload rightsizing optimizes cluster efficiency. Tools like Fairwinds Goldilocks (leveraging Kubernetes Vertical Pod Autoscaler in recommendation mode) paired with OpenCost calculate actual CPU/memory usage and provide right-sized request/limit recommendations to developers.",
    referenceUrl: "https://goldilocks.docs.fairwinds.com/",
    tags: ["Workload Rightsizing", "Workload Rightsizing", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-480",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "FinOps Dynamic Workload Rightsizing: OpenCost and Goldilocks: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Workload Rightsizing to eliminate massive cloud compute waste caused by developers requesting 8 CPU cores for microservices utilizing only 0.1 cores.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Automated vertical rightsizing recommendations using VPA, Goldilocks, and OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Allow developers to allocate unlimited CPU and memory resources with zero monitoring or cost tracking." },
      { id: 'B', text: "Arbitrarily cap all microservice memory limits at 100MB, causing critical production services to crash with OOMKills." },
      { id: 'C', text: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations." },
      { id: 'D', text: "Turn off all application pods on weekends to reduce compute consumption." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Fairwinds Goldilocks and OpenCost to monitor actual workload utilization and generate actionable rightsizing recommendations. Workload rightsizing optimizes cluster efficiency. Tools like Fairwinds Goldilocks (leveraging Kubernetes Vertical Pod Autoscaler in recommendation mode) paired with OpenCost calculate actual CPU/memory usage and provide right-sized request/limit recommendations to developers.",
    referenceUrl: "https://goldilocks.docs.fairwinds.com/",
    tags: ["Workload Rightsizing", "Workload Rightsizing", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-481",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Automated Incident Remediation and Runbook Automation: Robusta: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Incident Automation to collect logs, pod descriptions, and stack traces automatically and attach them to the alert ticket the moment a CrashLoopBackOff occurs.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Automating Kubernetes alert triage, diagnostic data collection, and remediation using Robusta is under consideration.",
    options: [
      { id: 'A', text: "Force on-call engineers to wake up and spend 45 minutes manually typing basic kubectl commands to collect crash logs." },
      { id: 'B', text: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation." },
      { id: 'C', text: "Ignore crash alerts until customers submit support tickets." },
      { id: 'D', text: "Automatically delete failing deployments to erase all traces of the software failure." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation. Incident automation platforms (like Robusta) bridge monitoring and remediation. When an alert fires (e.g., `CrashLoopBackOff`, `OOMKilled`), Robusta gathers diagnostic evidence (previous pod logs, memory graphs) and enriches alerts in Slack/PagerDuty, drastically lowering MTTR.",
    referenceUrl: "https://docs.robusta.dev/",
    tags: ["Incident Automation", "Incident Automation", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-482",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Automated Incident Remediation and Runbook Automation: Robusta: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Incident Automation to collect logs, pod descriptions, and stack traces automatically and attach them to the alert ticket the moment a CrashLoopBackOff occurs.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Automating Kubernetes alert triage, diagnostic data collection, and remediation using Robusta is under consideration.",
    options: [
      { id: 'A', text: "Automatically delete failing deployments to erase all traces of the software failure." },
      { id: 'B', text: "Force on-call engineers to wake up and spend 45 minutes manually typing basic kubectl commands to collect crash logs." },
      { id: 'C', text: "Ignore crash alerts until customers submit support tickets." },
      { id: 'D', text: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation. Incident automation platforms (like Robusta) bridge monitoring and remediation. When an alert fires (e.g., `CrashLoopBackOff`, `OOMKilled`), Robusta gathers diagnostic evidence (previous pod logs, memory graphs) and enriches alerts in Slack/PagerDuty, drastically lowering MTTR.",
    referenceUrl: "https://docs.robusta.dev/",
    tags: ["Incident Automation", "Incident Automation", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-483",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Automated Incident Remediation and Runbook Automation: Robusta: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Incident Automation to collect logs, pod descriptions, and stack traces automatically and attach them to the alert ticket the moment a CrashLoopBackOff occurs.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Automating Kubernetes alert triage, diagnostic data collection, and remediation using Robusta is under consideration.",
    options: [
      { id: 'A', text: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation." },
      { id: 'B', text: "Force on-call engineers to wake up and spend 45 minutes manually typing basic kubectl commands to collect crash logs." },
      { id: 'C', text: "Automatically delete failing deployments to erase all traces of the software failure." },
      { id: 'D', text: "Ignore crash alerts until customers submit support tickets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation. Incident automation platforms (like Robusta) bridge monitoring and remediation. When an alert fires (e.g., `CrashLoopBackOff`, `OOMKilled`), Robusta gathers diagnostic evidence (previous pod logs, memory graphs) and enriches alerts in Slack/PagerDuty, drastically lowering MTTR.",
    referenceUrl: "https://docs.robusta.dev/",
    tags: ["Incident Automation", "Incident Automation", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-484",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Automated Incident Remediation and Runbook Automation: Robusta: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Incident Automation to collect logs, pod descriptions, and stack traces automatically and attach them to the alert ticket the moment a CrashLoopBackOff occurs.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Automating Kubernetes alert triage, diagnostic data collection, and remediation using Robusta is under consideration.",
    options: [
      { id: 'A', text: "Force on-call engineers to wake up and spend 45 minutes manually typing basic kubectl commands to collect crash logs." },
      { id: 'B', text: "Automatically delete failing deployments to erase all traces of the software failure." },
      { id: 'C', text: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation." },
      { id: 'D', text: "Ignore crash alerts until customers submit support tickets." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation. Incident automation platforms (like Robusta) bridge monitoring and remediation. When an alert fires (e.g., `CrashLoopBackOff`, `OOMKilled`), Robusta gathers diagnostic evidence (previous pod logs, memory graphs) and enriches alerts in Slack/PagerDuty, drastically lowering MTTR.",
    referenceUrl: "https://docs.robusta.dev/",
    tags: ["Incident Automation", "Incident Automation", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-485",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Automated Incident Remediation and Runbook Automation: Robusta: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Incident Automation to collect logs, pod descriptions, and stack traces automatically and attach them to the alert ticket the moment a CrashLoopBackOff occurs.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Automating Kubernetes alert triage, diagnostic data collection, and remediation using Robusta is under consideration.",
    options: [
      { id: 'A', text: "Force on-call engineers to wake up and spend 45 minutes manually typing basic kubectl commands to collect crash logs." },
      { id: 'B', text: "Automatically delete failing deployments to erase all traces of the software failure." },
      { id: 'C', text: "Ignore crash alerts until customers submit support tickets." },
      { id: 'D', text: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Robusta or similar incident automation engines to intercept Prometheus alerts, gather pod diagnostics, and trigger auto-remediation. Incident automation platforms (like Robusta) bridge monitoring and remediation. When an alert fires (e.g., `CrashLoopBackOff`, `OOMKilled`), Robusta gathers diagnostic evidence (previous pod logs, memory graphs) and enriches alerts in Slack/PagerDuty, drastically lowering MTTR.",
    referenceUrl: "https://docs.robusta.dev/",
    tags: ["Incident Automation", "Incident Automation", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-486",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Secret Scanning and Push Protection: TruffleHog and GitGuardian: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Secret Scanning to prevent developers from accidentally committing cloud provider access keys or private database passwords to Git repositories.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Preventing credential leakage in Git repositories via pre-commit hooks and CI push protection is under consideration.",
    options: [
      { id: 'A', text: "Wait for attackers to find committed AWS credentials and drain enterprise cloud accounts before rotating keys." },
      { id: 'B', text: "Disable git version control and transfer application code via unencrypted email attachments." },
      { id: 'C', text: "Commit all production passwords to the repository README file for easy developer access." },
      { id: 'D', text: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian. Secret leakage is a major vector for cloud compromise. Platform engineering incorporates push protection and repository scanners (TruffleHog, GitGuardian) into CI pipelines and developer workstations, blocking commits containing high-entropy strings, private keys, or API tokens.",
    referenceUrl: "https://trufflesecurity.com/trufflehog",
    tags: ["Secret Scanning", "Secret Scanning", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-487",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Secret Scanning and Push Protection: TruffleHog and GitGuardian: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Secret Scanning to prevent developers from accidentally committing cloud provider access keys or private database passwords to Git repositories.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Preventing credential leakage in Git repositories via pre-commit hooks and CI push protection is under consideration.",
    options: [
      { id: 'A', text: "Disable git version control and transfer application code via unencrypted email attachments." },
      { id: 'B', text: "Wait for attackers to find committed AWS credentials and drain enterprise cloud accounts before rotating keys." },
      { id: 'C', text: "Commit all production passwords to the repository README file for easy developer access." },
      { id: 'D', text: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian. Secret leakage is a major vector for cloud compromise. Platform engineering incorporates push protection and repository scanners (TruffleHog, GitGuardian) into CI pipelines and developer workstations, blocking commits containing high-entropy strings, private keys, or API tokens.",
    referenceUrl: "https://trufflesecurity.com/trufflehog",
    tags: ["Secret Scanning", "Secret Scanning", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-488",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Secret Scanning and Push Protection: TruffleHog and GitGuardian: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Secret Scanning to prevent developers from accidentally committing cloud provider access keys or private database passwords to Git repositories.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Preventing credential leakage in Git repositories via pre-commit hooks and CI push protection is under consideration.",
    options: [
      { id: 'A', text: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian." },
      { id: 'B', text: "Commit all production passwords to the repository README file for easy developer access." },
      { id: 'C', text: "Disable git version control and transfer application code via unencrypted email attachments." },
      { id: 'D', text: "Wait for attackers to find committed AWS credentials and drain enterprise cloud accounts before rotating keys." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian. Secret leakage is a major vector for cloud compromise. Platform engineering incorporates push protection and repository scanners (TruffleHog, GitGuardian) into CI pipelines and developer workstations, blocking commits containing high-entropy strings, private keys, or API tokens.",
    referenceUrl: "https://trufflesecurity.com/trufflehog",
    tags: ["Secret Scanning", "Secret Scanning", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-489",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Secret Scanning and Push Protection: TruffleHog and GitGuardian: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Secret Scanning to prevent developers from accidentally committing cloud provider access keys or private database passwords to Git repositories.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Preventing credential leakage in Git repositories via pre-commit hooks and CI push protection is under consideration.",
    options: [
      { id: 'A', text: "Wait for attackers to find committed AWS credentials and drain enterprise cloud accounts before rotating keys." },
      { id: 'B', text: "Disable git version control and transfer application code via unencrypted email attachments." },
      { id: 'C', text: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian." },
      { id: 'D', text: "Commit all production passwords to the repository README file for easy developer access." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian. Secret leakage is a major vector for cloud compromise. Platform engineering incorporates push protection and repository scanners (TruffleHog, GitGuardian) into CI pipelines and developer workstations, blocking commits containing high-entropy strings, private keys, or API tokens.",
    referenceUrl: "https://trufflesecurity.com/trufflehog",
    tags: ["Secret Scanning", "Secret Scanning", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-490",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Secret Scanning and Push Protection: TruffleHog and GitGuardian: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Secret Scanning to prevent developers from accidentally committing cloud provider access keys or private database passwords to Git repositories.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Preventing credential leakage in Git repositories via pre-commit hooks and CI push protection is under consideration.",
    options: [
      { id: 'A', text: "Disable git version control and transfer application code via unencrypted email attachments." },
      { id: 'B', text: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian." },
      { id: 'C', text: "Commit all production passwords to the repository README file for easy developer access." },
      { id: 'D', text: "Wait for attackers to find committed AWS credentials and drain enterprise cloud accounts before rotating keys." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement secret scanning with pre-commit hooks and GitHub push protection using tools like TruffleHog or GitGuardian. Secret leakage is a major vector for cloud compromise. Platform engineering incorporates push protection and repository scanners (TruffleHog, GitGuardian) into CI pipelines and developer workstations, blocking commits containing high-entropy strings, private keys, or API tokens.",
    referenceUrl: "https://trufflesecurity.com/trufflehog",
    tags: ["Secret Scanning", "Secret Scanning", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-491",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Blameless Systemic Incident Learning Culture: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Blameless Postmortems to foster an engineering culture where engineers openly report mistakes and vulnerabilities without fear of punishment.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Analyzing systemic contributing factors, human factors, and institutional resilience after major outages is under consideration.",
    options: [
      { id: 'A', text: "Prohibit writing incident documentation to avoid creating a legal paper trail." },
      { id: 'B', text: "Publicly reprimand and penalize engineers whenever a deployment causes downtime." },
      { id: 'C', text: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error." },
      { id: 'D', text: "Hide incident reports from other teams to protect departmental reputations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error. High-performing platform organizations practice blameless incident reviews. By recognizing that human error is a symptom of flawed systems rather than the cause, teams investigate cognitive load, ambiguous interfaces, and missing guardrails, making systems resilient.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Culture", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-492",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Blameless Systemic Incident Learning Culture: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Blameless Postmortems to foster an engineering culture where engineers openly report mistakes and vulnerabilities without fear of punishment.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Analyzing systemic contributing factors, human factors, and institutional resilience after major outages is under consideration.",
    options: [
      { id: 'A', text: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error." },
      { id: 'B', text: "Prohibit writing incident documentation to avoid creating a legal paper trail." },
      { id: 'C', text: "Publicly reprimand and penalize engineers whenever a deployment causes downtime." },
      { id: 'D', text: "Hide incident reports from other teams to protect departmental reputations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error. High-performing platform organizations practice blameless incident reviews. By recognizing that human error is a symptom of flawed systems rather than the cause, teams investigate cognitive load, ambiguous interfaces, and missing guardrails, making systems resilient.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Culture", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-493",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Blameless Systemic Incident Learning Culture: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Blameless Postmortems to foster an engineering culture where engineers openly report mistakes and vulnerabilities without fear of punishment.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Analyzing systemic contributing factors, human factors, and institutional resilience after major outages is under consideration.",
    options: [
      { id: 'A', text: "Publicly reprimand and penalize engineers whenever a deployment causes downtime." },
      { id: 'B', text: "Prohibit writing incident documentation to avoid creating a legal paper trail." },
      { id: 'C', text: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error." },
      { id: 'D', text: "Hide incident reports from other teams to protect departmental reputations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error. High-performing platform organizations practice blameless incident reviews. By recognizing that human error is a symptom of flawed systems rather than the cause, teams investigate cognitive load, ambiguous interfaces, and missing guardrails, making systems resilient.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Culture", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-494",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Blameless Systemic Incident Learning Culture: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Blameless Postmortems to foster an engineering culture where engineers openly report mistakes and vulnerabilities without fear of punishment.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Analyzing systemic contributing factors, human factors, and institutional resilience after major outages is under consideration.",
    options: [
      { id: 'A', text: "Prohibit writing incident documentation to avoid creating a legal paper trail." },
      { id: 'B', text: "Publicly reprimand and penalize engineers whenever a deployment causes downtime." },
      { id: 'C', text: "Hide incident reports from other teams to protect departmental reputations." },
      { id: 'D', text: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error. High-performing platform organizations practice blameless incident reviews. By recognizing that human error is a symptom of flawed systems rather than the cause, teams investigate cognitive load, ambiguous interfaces, and missing guardrails, making systems resilient.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Culture", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-495",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Blameless Systemic Incident Learning Culture: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Blameless Postmortems to foster an engineering culture where engineers openly report mistakes and vulnerabilities without fear of punishment.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Analyzing systemic contributing factors, human factors, and institutional resilience after major outages is under consideration.",
    options: [
      { id: 'A', text: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error." },
      { id: 'B', text: "Prohibit writing incident documentation to avoid creating a legal paper trail." },
      { id: 'C', text: "Publicly reprimand and penalize engineers whenever a deployment causes downtime." },
      { id: 'D', text: "Hide incident reports from other teams to protect departmental reputations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct blameless post-incident reviews focusing on systemic tooling improvements and process safeguards rather than human error. High-performing platform organizations practice blameless incident reviews. By recognizing that human error is a symptom of flawed systems rather than the cause, teams investigate cognitive load, ambiguous interfaces, and missing guardrails, making systems resilient.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Culture", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-496",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Platform Technology Lifecycle and Deprecation Governance: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Platform Evolution to retire an obsolete platform API version safely without breaking production services that still rely on it.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Managing deprecation cycles, sunsetting legacy APIs, and executing automated migration campaigns is under consideration.",
    options: [
      { id: 'A', text: "Delete the API endpoint abruptly on a Friday afternoon without prior warning." },
      { id: 'B', text: "Maintain 50 obsolete, unpatched API versions indefinitely because a single developer refuses to upgrade." },
      { id: 'C', text: "Disable cluster logging to hide deprecation warnings from development teams." },
      { id: 'D', text: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns. Sustaining a platform requires structured evolution. Platform engineers use Kubernetes admission deprecation warnings (`Warning` headers), track API caller metrics in Prometheus, publish deprecation timelines, and provide automated migration scripts before retiring legacy APIs.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/deprecation-policy/",
    tags: ["Platform Evolution", "Platform Evolution", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-497",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Platform Technology Lifecycle and Deprecation Governance: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Platform Evolution to retire an obsolete platform API version safely without breaking production services that still rely on it.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Managing deprecation cycles, sunsetting legacy APIs, and executing automated migration campaigns is under consideration.",
    options: [
      { id: 'A', text: "Maintain 50 obsolete, unpatched API versions indefinitely because a single developer refuses to upgrade." },
      { id: 'B', text: "Disable cluster logging to hide deprecation warnings from development teams." },
      { id: 'C', text: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns." },
      { id: 'D', text: "Delete the API endpoint abruptly on a Friday afternoon without prior warning." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns. Sustaining a platform requires structured evolution. Platform engineers use Kubernetes admission deprecation warnings (`Warning` headers), track API caller metrics in Prometheus, publish deprecation timelines, and provide automated migration scripts before retiring legacy APIs.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/deprecation-policy/",
    tags: ["Platform Evolution", "Platform Evolution", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-498",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Platform Technology Lifecycle and Deprecation Governance: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Platform Evolution to retire an obsolete platform API version safely without breaking production services that still rely on it.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Managing deprecation cycles, sunsetting legacy APIs, and executing automated migration campaigns is under consideration.",
    options: [
      { id: 'A', text: "Delete the API endpoint abruptly on a Friday afternoon without prior warning." },
      { id: 'B', text: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns." },
      { id: 'C', text: "Maintain 50 obsolete, unpatched API versions indefinitely because a single developer refuses to upgrade." },
      { id: 'D', text: "Disable cluster logging to hide deprecation warnings from development teams." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns. Sustaining a platform requires structured evolution. Platform engineers use Kubernetes admission deprecation warnings (`Warning` headers), track API caller metrics in Prometheus, publish deprecation timelines, and provide automated migration scripts before retiring legacy APIs.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/deprecation-policy/",
    tags: ["Platform Evolution", "Platform Evolution", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-499",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Platform Technology Lifecycle and Deprecation Governance: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Platform Evolution to retire an obsolete platform API version safely without breaking production services that still rely on it.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Managing deprecation cycles, sunsetting legacy APIs, and executing automated migration campaigns is under consideration.",
    options: [
      { id: 'A', text: "Delete the API endpoint abruptly on a Friday afternoon without prior warning." },
      { id: 'B', text: "Disable cluster logging to hide deprecation warnings from development teams." },
      { id: 'C', text: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns." },
      { id: 'D', text: "Maintain 50 obsolete, unpatched API versions indefinitely because a single developer refuses to upgrade." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns. Sustaining a platform requires structured evolution. Platform engineers use Kubernetes admission deprecation warnings (`Warning` headers), track API caller metrics in Prometheus, publish deprecation timelines, and provide automated migration scripts before retiring legacy APIs.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/deprecation-policy/",
    tags: ["Platform Evolution", "Platform Evolution", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-500",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Platform Technology Lifecycle and Deprecation Governance: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Platform Evolution to retire an obsolete platform API version safely without breaking production services that still rely on it.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Managing deprecation cycles, sunsetting legacy APIs, and executing automated migration campaigns is under consideration.",
    options: [
      { id: 'A', text: "Maintain 50 obsolete, unpatched API versions indefinitely because a single developer refuses to upgrade." },
      { id: 'B', text: "Delete the API endpoint abruptly on a Friday afternoon without prior warning." },
      { id: 'C', text: "Disable cluster logging to hide deprecation warnings from development teams." },
      { id: 'D', text: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Publish a formal deprecation schedule with telemetry tracking callers, emit admission warnings, and run automated migration PR campaigns. Sustaining a platform requires structured evolution. Platform engineers use Kubernetes admission deprecation warnings (`Warning` headers), track API caller metrics in Prometheus, publish deprecation timelines, and provide automated migration scripts before retiring legacy APIs.",
    referenceUrl: "https://kubernetes.io/docs/reference/using-api/deprecation-policy/",
    tags: ["Platform Evolution", "Platform Evolution", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_20;
