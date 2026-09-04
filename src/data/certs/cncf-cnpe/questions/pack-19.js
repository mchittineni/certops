export const CNCF_CNPE_QUESTIONS_19 = [
  {
    id: "cncf-cnpe-451",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Multi-Window Multi-Burn-Rate Platform Alerting: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Multi-Burn-Rate Alerting to alert on-call platform engineers to severe service degradations immediately while suppressing false alarms caused by transient traffic spikes.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Alerting on consumption of SLO error budgets across short (1h) and long (6h) lookback windows is under consideration.",
    options: [
      { id: 'A', text: "Disable on-call paging entirely and check system status once a week on Monday morning." },
      { id: 'B', text: "Configure static alerts that trigger an on-call page whenever a single HTTP 500 error occurs anywhere in the cluster." },
      { id: 'C', text: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates." },
      { id: 'D', text: "Alert solely on CPU utilization percentages rather than customer-facing error rates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates. Google SRE multi-window multi-burn-rate alerting evaluates the rate at which an error budget is being consumed over multiple time windows (e.g., 2% budget consumed in 1 hour; 5% consumed in 6 hours). This prevents alert fatigue while rapidly paging engineers for catastrophic incidents.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Multi-Burn-Rate Alerting", "Multi-Burn-Rate Alerting", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-452",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Multi-Window Multi-Burn-Rate Platform Alerting: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Multi-Burn-Rate Alerting to alert on-call platform engineers to severe service degradations immediately while suppressing false alarms caused by transient traffic spikes.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Alerting on consumption of SLO error budgets across short (1h) and long (6h) lookback windows is under consideration.",
    options: [
      { id: 'A', text: "Disable on-call paging entirely and check system status once a week on Monday morning." },
      { id: 'B', text: "Configure static alerts that trigger an on-call page whenever a single HTTP 500 error occurs anywhere in the cluster." },
      { id: 'C', text: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates." },
      { id: 'D', text: "Alert solely on CPU utilization percentages rather than customer-facing error rates." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates. Google SRE multi-window multi-burn-rate alerting evaluates the rate at which an error budget is being consumed over multiple time windows (e.g., 2% budget consumed in 1 hour; 5% consumed in 6 hours). This prevents alert fatigue while rapidly paging engineers for catastrophic incidents.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Multi-Burn-Rate Alerting", "Multi-Burn-Rate Alerting", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-453",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Multi-Window Multi-Burn-Rate Platform Alerting: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Multi-Burn-Rate Alerting to alert on-call platform engineers to severe service degradations immediately while suppressing false alarms caused by transient traffic spikes.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Alerting on consumption of SLO error budgets across short (1h) and long (6h) lookback windows is under consideration.",
    options: [
      { id: 'A', text: "Alert solely on CPU utilization percentages rather than customer-facing error rates." },
      { id: 'B', text: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates." },
      { id: 'C', text: "Configure static alerts that trigger an on-call page whenever a single HTTP 500 error occurs anywhere in the cluster." },
      { id: 'D', text: "Disable on-call paging entirely and check system status once a week on Monday morning." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates. Google SRE multi-window multi-burn-rate alerting evaluates the rate at which an error budget is being consumed over multiple time windows (e.g., 2% budget consumed in 1 hour; 5% consumed in 6 hours). This prevents alert fatigue while rapidly paging engineers for catastrophic incidents.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Multi-Burn-Rate Alerting", "Multi-Burn-Rate Alerting", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-454",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Multi-Window Multi-Burn-Rate Platform Alerting: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Multi-Burn-Rate Alerting to alert on-call platform engineers to severe service degradations immediately while suppressing false alarms caused by transient traffic spikes.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Alerting on consumption of SLO error budgets across short (1h) and long (6h) lookback windows is under consideration.",
    options: [
      { id: 'A', text: "Configure static alerts that trigger an on-call page whenever a single HTTP 500 error occurs anywhere in the cluster." },
      { id: 'B', text: "Disable on-call paging entirely and check system status once a week on Monday morning." },
      { id: 'C', text: "Alert solely on CPU utilization percentages rather than customer-facing error rates." },
      { id: 'D', text: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates. Google SRE multi-window multi-burn-rate alerting evaluates the rate at which an error budget is being consumed over multiple time windows (e.g., 2% budget consumed in 1 hour; 5% consumed in 6 hours). This prevents alert fatigue while rapidly paging engineers for catastrophic incidents.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Multi-Burn-Rate Alerting", "Multi-Burn-Rate Alerting", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-455",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Multi-Window Multi-Burn-Rate Platform Alerting: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Multi-Burn-Rate Alerting to alert on-call platform engineers to severe service degradations immediately while suppressing false alarms caused by transient traffic spikes.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Alerting on consumption of SLO error budgets across short (1h) and long (6h) lookback windows is under consideration.",
    options: [
      { id: 'A', text: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates." },
      { id: 'B', text: "Disable on-call paging entirely and check system status once a week on Monday morning." },
      { id: 'C', text: "Configure static alerts that trigger an on-call page whenever a single HTTP 500 error occurs anywhere in the cluster." },
      { id: 'D', text: "Alert solely on CPU utilization percentages rather than customer-facing error rates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement multi-window multi-burn-rate alerting based on Google SRE principles, evaluating 1-hour (fast burn) and 6-hour (slow burn) rates. Google SRE multi-window multi-burn-rate alerting evaluates the rate at which an error budget is being consumed over multiple time windows (e.g., 2% budget consumed in 1 hour; 5% consumed in 6 hours). This prevents alert fatigue while rapidly paging engineers for catastrophic incidents.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Multi-Burn-Rate Alerting", "Multi-Burn-Rate Alerting", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-456",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Zero-Trust Workload Identity: SPIFFE and SPIRE: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates SPIFFE/SPIRE to authenticate microservices mutually across heterogeneous multi-cloud and on-premises environments without static API tokens.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Cryptographic workload attestation and issuance of short-lived X.509 SVID credentials is under consideration.",
    options: [
      { id: 'A', text: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs)." },
      { id: 'B', text: "Rely on IP address whitelisting across multi-tenant, dynamically scheduled container environments." },
      { id: 'C', text: "Distribute permanent, unrotated API keys embedded in environment variables across all cloud servers." },
      { id: 'D', text: "Disable TLS and authenticate services using unencrypted HTTP user-agent header strings." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs). SPIFFE (Secure Production Identity Framework for Everyone) and its implementation SPIRE provide cryptographic workload identity. Workload attestation validates binary hashes, namespaces, and cgroups, issuing short-lived SVID certificates used for mutual TLS authentication.",
    referenceUrl: "https://spiffe.io/docs/latest/spire-about/",
    tags: ["SPIFFE/SPIRE", "SPIFFE/SPIRE", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-457",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Zero-Trust Workload Identity: SPIFFE and SPIRE: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates SPIFFE/SPIRE to authenticate microservices mutually across heterogeneous multi-cloud and on-premises environments without static API tokens.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Cryptographic workload attestation and issuance of short-lived X.509 SVID credentials is under consideration.",
    options: [
      { id: 'A', text: "Disable TLS and authenticate services using unencrypted HTTP user-agent header strings." },
      { id: 'B', text: "Distribute permanent, unrotated API keys embedded in environment variables across all cloud servers." },
      { id: 'C', text: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs)." },
      { id: 'D', text: "Rely on IP address whitelisting across multi-tenant, dynamically scheduled container environments." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs). SPIFFE (Secure Production Identity Framework for Everyone) and its implementation SPIRE provide cryptographic workload identity. Workload attestation validates binary hashes, namespaces, and cgroups, issuing short-lived SVID certificates used for mutual TLS authentication.",
    referenceUrl: "https://spiffe.io/docs/latest/spire-about/",
    tags: ["SPIFFE/SPIRE", "SPIFFE/SPIRE", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-458",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Zero-Trust Workload Identity: SPIFFE and SPIRE: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates SPIFFE/SPIRE to authenticate microservices mutually across heterogeneous multi-cloud and on-premises environments without static API tokens.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Cryptographic workload attestation and issuance of short-lived X.509 SVID credentials is under consideration.",
    options: [
      { id: 'A', text: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs)." },
      { id: 'B', text: "Disable TLS and authenticate services using unencrypted HTTP user-agent header strings." },
      { id: 'C', text: "Distribute permanent, unrotated API keys embedded in environment variables across all cloud servers." },
      { id: 'D', text: "Rely on IP address whitelisting across multi-tenant, dynamically scheduled container environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs). SPIFFE (Secure Production Identity Framework for Everyone) and its implementation SPIRE provide cryptographic workload identity. Workload attestation validates binary hashes, namespaces, and cgroups, issuing short-lived SVID certificates used for mutual TLS authentication.",
    referenceUrl: "https://spiffe.io/docs/latest/spire-about/",
    tags: ["SPIFFE/SPIRE", "SPIFFE/SPIRE", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-459",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Zero-Trust Workload Identity: SPIFFE and SPIRE: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates SPIFFE/SPIRE to authenticate microservices mutually across heterogeneous multi-cloud and on-premises environments without static API tokens.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Cryptographic workload attestation and issuance of short-lived X.509 SVID credentials is under consideration.",
    options: [
      { id: 'A', text: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs)." },
      { id: 'B', text: "Disable TLS and authenticate services using unencrypted HTTP user-agent header strings." },
      { id: 'C', text: "Distribute permanent, unrotated API keys embedded in environment variables across all cloud servers." },
      { id: 'D', text: "Rely on IP address whitelisting across multi-tenant, dynamically scheduled container environments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs). SPIFFE (Secure Production Identity Framework for Everyone) and its implementation SPIRE provide cryptographic workload identity. Workload attestation validates binary hashes, namespaces, and cgroups, issuing short-lived SVID certificates used for mutual TLS authentication.",
    referenceUrl: "https://spiffe.io/docs/latest/spire-about/",
    tags: ["SPIFFE/SPIRE", "SPIFFE/SPIRE", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-460",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Zero-Trust Workload Identity: SPIFFE and SPIRE: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates SPIFFE/SPIRE to authenticate microservices mutually across heterogeneous multi-cloud and on-premises environments without static API tokens.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Cryptographic workload attestation and issuance of short-lived X.509 SVID credentials is under consideration.",
    options: [
      { id: 'A', text: "Rely on IP address whitelisting across multi-tenant, dynamically scheduled container environments." },
      { id: 'B', text: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs)." },
      { id: 'C', text: "Disable TLS and authenticate services using unencrypted HTTP user-agent header strings." },
      { id: 'D', text: "Distribute permanent, unrotated API keys embedded in environment variables across all cloud servers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy SPIRE to attest workload identity and issue short-lived cryptographic SPIFFE Verifiable Identity Documents (X.509 SVIDs). SPIFFE (Secure Production Identity Framework for Everyone) and its implementation SPIRE provide cryptographic workload identity. Workload attestation validates binary hashes, namespaces, and cgroups, issuing short-lived SVID certificates used for mutual TLS authentication.",
    referenceUrl: "https://spiffe.io/docs/latest/spire-about/",
    tags: ["SPIFFE/SPIRE", "SPIFFE/SPIRE", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-461",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Cryptographic Supply Chain Attestation: in-toto and Cosign: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Supply Chain Attestation to guarantee that production container images were compiled from verified Git commits and successfully passed all mandatory security tests.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Verifying build step attestations, SLSA provenance, and image signatures before deployment is under consideration.",
    options: [
      { id: 'A', text: "Store cryptographic signing keys on public web servers." },
      { id: 'B', text: "Permit clusters to run unsigned container images pulled from unauthenticated public registries." },
      { id: 'C', text: "Disable admission controllers to accelerate pod startup speeds." },
      { id: 'D', text: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers. Securing the software supply chain requires cryptographic attestation of the entire build lifecycle. Frameworks like in-toto and Sigstore Cosign generate cryptographically signed provenance metadata, which admission controllers verify before allowing images to execute in clusters.",
    referenceUrl: "https://in-toto.io/",
    tags: ["Supply Chain Attestation", "Supply Chain Attestation", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-462",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Cryptographic Supply Chain Attestation: in-toto and Cosign: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Supply Chain Attestation to guarantee that production container images were compiled from verified Git commits and successfully passed all mandatory security tests.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Verifying build step attestations, SLSA provenance, and image signatures before deployment is under consideration.",
    options: [
      { id: 'A', text: "Permit clusters to run unsigned container images pulled from unauthenticated public registries." },
      { id: 'B', text: "Disable admission controllers to accelerate pod startup speeds." },
      { id: 'C', text: "Store cryptographic signing keys on public web servers." },
      { id: 'D', text: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers. Securing the software supply chain requires cryptographic attestation of the entire build lifecycle. Frameworks like in-toto and Sigstore Cosign generate cryptographically signed provenance metadata, which admission controllers verify before allowing images to execute in clusters.",
    referenceUrl: "https://in-toto.io/",
    tags: ["Supply Chain Attestation", "Supply Chain Attestation", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-463",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Cryptographic Supply Chain Attestation: in-toto and Cosign: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Supply Chain Attestation to guarantee that production container images were compiled from verified Git commits and successfully passed all mandatory security tests.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Verifying build step attestations, SLSA provenance, and image signatures before deployment is under consideration.",
    options: [
      { id: 'A', text: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers." },
      { id: 'B', text: "Disable admission controllers to accelerate pod startup speeds." },
      { id: 'C', text: "Permit clusters to run unsigned container images pulled from unauthenticated public registries." },
      { id: 'D', text: "Store cryptographic signing keys on public web servers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers. Securing the software supply chain requires cryptographic attestation of the entire build lifecycle. Frameworks like in-toto and Sigstore Cosign generate cryptographically signed provenance metadata, which admission controllers verify before allowing images to execute in clusters.",
    referenceUrl: "https://in-toto.io/",
    tags: ["Supply Chain Attestation", "Supply Chain Attestation", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-464",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Cryptographic Supply Chain Attestation: in-toto and Cosign: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Supply Chain Attestation to guarantee that production container images were compiled from verified Git commits and successfully passed all mandatory security tests.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Verifying build step attestations, SLSA provenance, and image signatures before deployment is under consideration.",
    options: [
      { id: 'A', text: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers." },
      { id: 'B', text: "Disable admission controllers to accelerate pod startup speeds." },
      { id: 'C', text: "Store cryptographic signing keys on public web servers." },
      { id: 'D', text: "Permit clusters to run unsigned container images pulled from unauthenticated public registries." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers. Securing the software supply chain requires cryptographic attestation of the entire build lifecycle. Frameworks like in-toto and Sigstore Cosign generate cryptographically signed provenance metadata, which admission controllers verify before allowing images to execute in clusters.",
    referenceUrl: "https://in-toto.io/",
    tags: ["Supply Chain Attestation", "Supply Chain Attestation", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-465",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Cryptographic Supply Chain Attestation: in-toto and Cosign: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Supply Chain Attestation to guarantee that production container images were compiled from verified Git commits and successfully passed all mandatory security tests.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Verifying build step attestations, SLSA provenance, and image signatures before deployment is under consideration.",
    options: [
      { id: 'A', text: "Disable admission controllers to accelerate pod startup speeds." },
      { id: 'B', text: "Store cryptographic signing keys on public web servers." },
      { id: 'C', text: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers." },
      { id: 'D', text: "Permit clusters to run unsigned container images pulled from unauthenticated public registries." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enforce in-toto cryptographic attestations and Cosign image verification via Kyverno or Gatekeeper admission controllers. Securing the software supply chain requires cryptographic attestation of the entire build lifecycle. Frameworks like in-toto and Sigstore Cosign generate cryptographically signed provenance metadata, which admission controllers verify before allowing images to execute in clusters.",
    referenceUrl: "https://in-toto.io/",
    tags: ["Supply Chain Attestation", "Supply Chain Attestation", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-466",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Runtime Security and Threat Detection with Falco: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Runtime Security to detect and alert when an attacker spawns an unauthorized interactive bash shell inside a production payment container.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Kernel-level anomaly detection and syscall monitoring using Falco and eBPF is under consideration.",
    options: [
      { id: 'A', text: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time." },
      { id: 'B', text: "Grant containers `--privileged=true` access to simplify debugging for software developers." },
      { id: 'C', text: "Disable kernel auditing and ignore runtime container activity." },
      { id: 'D', text: "Scan source code repositories once a year and assume running containers can never be compromised." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time. CNCF Falco provides runtime threat detection by monitoring Linux kernel system calls via eBPF. It parses events against security rules (e.g., detecting shell spawning inside containers, unexpected network connections, or modifications to `/etc/shadow`) and emits alerts instantly.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Runtime Security", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-467",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Runtime Security and Threat Detection with Falco: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Runtime Security to detect and alert when an attacker spawns an unauthorized interactive bash shell inside a production payment container.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Kernel-level anomaly detection and syscall monitoring using Falco and eBPF is under consideration.",
    options: [
      { id: 'A', text: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time." },
      { id: 'B', text: "Scan source code repositories once a year and assume running containers can never be compromised." },
      { id: 'C', text: "Grant containers `--privileged=true` access to simplify debugging for software developers." },
      { id: 'D', text: "Disable kernel auditing and ignore runtime container activity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time. CNCF Falco provides runtime threat detection by monitoring Linux kernel system calls via eBPF. It parses events against security rules (e.g., detecting shell spawning inside containers, unexpected network connections, or modifications to `/etc/shadow`) and emits alerts instantly.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Runtime Security", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-468",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Runtime Security and Threat Detection with Falco: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Runtime Security to detect and alert when an attacker spawns an unauthorized interactive bash shell inside a production payment container.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Kernel-level anomaly detection and syscall monitoring using Falco and eBPF is under consideration.",
    options: [
      { id: 'A', text: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time." },
      { id: 'B', text: "Grant containers `--privileged=true` access to simplify debugging for software developers." },
      { id: 'C', text: "Scan source code repositories once a year and assume running containers can never be compromised." },
      { id: 'D', text: "Disable kernel auditing and ignore runtime container activity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time. CNCF Falco provides runtime threat detection by monitoring Linux kernel system calls via eBPF. It parses events against security rules (e.g., detecting shell spawning inside containers, unexpected network connections, or modifications to `/etc/shadow`) and emits alerts instantly.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Runtime Security", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-469",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Runtime Security and Threat Detection with Falco: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Runtime Security to detect and alert when an attacker spawns an unauthorized interactive bash shell inside a production payment container.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Kernel-level anomaly detection and syscall monitoring using Falco and eBPF is under consideration.",
    options: [
      { id: 'A', text: "Disable kernel auditing and ignore runtime container activity." },
      { id: 'B', text: "Grant containers `--privileged=true` access to simplify debugging for software developers." },
      { id: 'C', text: "Scan source code repositories once a year and assume running containers can never be compromised." },
      { id: 'D', text: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time. CNCF Falco provides runtime threat detection by monitoring Linux kernel system calls via eBPF. It parses events against security rules (e.g., detecting shell spawning inside containers, unexpected network connections, or modifications to `/etc/shadow`) and emits alerts instantly.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Runtime Security", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-470",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Runtime Security and Threat Detection with Falco: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Runtime Security to detect and alert when an attacker spawns an unauthorized interactive bash shell inside a production payment container.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Kernel-level anomaly detection and syscall monitoring using Falco and eBPF is under consideration.",
    options: [
      { id: 'A', text: "Disable kernel auditing and ignore runtime container activity." },
      { id: 'B', text: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time." },
      { id: 'C', text: "Scan source code repositories once a year and assume running containers can never be compromised." },
      { id: 'D', text: "Grant containers `--privileged=true` access to simplify debugging for software developers." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Falco with eBPF probes to detect anomalous system calls, shell executions, and sensitive file modifications in real time. CNCF Falco provides runtime threat detection by monitoring Linux kernel system calls via eBPF. It parses events against security rules (e.g., detecting shell spawning inside containers, unexpected network connections, or modifications to `/etc/shadow`) and emits alerts instantly.",
    referenceUrl: "https://falco.org/docs/",
    tags: ["Runtime Security", "Runtime Security", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-471",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Policy Enforcement and Mutation: Kyverno vs OPA Gatekeeper: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Policy Engines to automatically inject default resource limits and security contexts into pods that developers deploy without them.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Validating, mutating, and generating Kubernetes resources declaratively using Kyverno is under consideration.",
    options: [
      { id: 'A', text: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests." },
      { id: 'B', text: "Reject all developer deployments that omit security settings without offering automated remediation or clear documentation." },
      { id: 'C', text: "Disable security contexts and run all production workloads with root host privileges." },
      { id: 'D', text: "Require human platform engineers to manually edit every pod manifest before it is applied to the cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests. CNCF Kyverno is a Kubernetes-native policy engine. Unlike OPA (which requires Rego), Kyverno policies are written in standard Kubernetes YAML. Kyverno validates manifests, generates resources, and mutates incoming pods (e.g., injecting `runAsNonRoot: true` or default resource limits).",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Policy Engines", "Policy Engines", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-472",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Policy Enforcement and Mutation: Kyverno vs OPA Gatekeeper: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Policy Engines to automatically inject default resource limits and security contexts into pods that developers deploy without them.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Validating, mutating, and generating Kubernetes resources declaratively using Kyverno is under consideration.",
    options: [
      { id: 'A', text: "Require human platform engineers to manually edit every pod manifest before it is applied to the cluster." },
      { id: 'B', text: "Reject all developer deployments that omit security settings without offering automated remediation or clear documentation." },
      { id: 'C', text: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests." },
      { id: 'D', text: "Disable security contexts and run all production workloads with root host privileges." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests. CNCF Kyverno is a Kubernetes-native policy engine. Unlike OPA (which requires Rego), Kyverno policies are written in standard Kubernetes YAML. Kyverno validates manifests, generates resources, and mutates incoming pods (e.g., injecting `runAsNonRoot: true` or default resource limits).",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Policy Engines", "Policy Engines", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-473",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Policy Enforcement and Mutation: Kyverno vs OPA Gatekeeper: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Policy Engines to automatically inject default resource limits and security contexts into pods that developers deploy without them.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Validating, mutating, and generating Kubernetes resources declaratively using Kyverno is under consideration.",
    options: [
      { id: 'A', text: "Require human platform engineers to manually edit every pod manifest before it is applied to the cluster." },
      { id: 'B', text: "Reject all developer deployments that omit security settings without offering automated remediation or clear documentation." },
      { id: 'C', text: "Disable security contexts and run all production workloads with root host privileges." },
      { id: 'D', text: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests. CNCF Kyverno is a Kubernetes-native policy engine. Unlike OPA (which requires Rego), Kyverno policies are written in standard Kubernetes YAML. Kyverno validates manifests, generates resources, and mutates incoming pods (e.g., injecting `runAsNonRoot: true` or default resource limits).",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Policy Engines", "Policy Engines", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-474",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Policy Enforcement and Mutation: Kyverno vs OPA Gatekeeper: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Policy Engines to automatically inject default resource limits and security contexts into pods that developers deploy without them.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Validating, mutating, and generating Kubernetes resources declaratively using Kyverno is under consideration.",
    options: [
      { id: 'A', text: "Disable security contexts and run all production workloads with root host privileges." },
      { id: 'B', text: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests." },
      { id: 'C', text: "Require human platform engineers to manually edit every pod manifest before it is applied to the cluster." },
      { id: 'D', text: "Reject all developer deployments that omit security settings without offering automated remediation or clear documentation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests. CNCF Kyverno is a Kubernetes-native policy engine. Unlike OPA (which requires Rego), Kyverno policies are written in standard Kubernetes YAML. Kyverno validates manifests, generates resources, and mutates incoming pods (e.g., injecting `runAsNonRoot: true` or default resource limits).",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Policy Engines", "Policy Engines", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-475",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d4",
    domainName: "Reliability, Platform Security and Evolution",
    title: "Policy Enforcement and Mutation: Kyverno vs OPA Gatekeeper: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Policy Engines to automatically inject default resource limits and security contexts into pods that developers deploy without them.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Validating, mutating, and generating Kubernetes resources declaratively using Kyverno is under consideration.",
    options: [
      { id: 'A', text: "Reject all developer deployments that omit security settings without offering automated remediation or clear documentation." },
      { id: 'B', text: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests." },
      { id: 'C', text: "Require human platform engineers to manually edit every pod manifest before it is applied to the cluster." },
      { id: 'D', text: "Disable security contexts and run all production workloads with root host privileges." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy Kyverno with mutating policies that automatically inject required security contexts, drop capabilities, and set default resource requests. CNCF Kyverno is a Kubernetes-native policy engine. Unlike OPA (which requires Rego), Kyverno policies are written in standard Kubernetes YAML. Kyverno validates manifests, generates resources, and mutates incoming pods (e.g., injecting `runAsNonRoot: true` or default resource limits).",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Policy Engines", "Policy Engines", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_19;
