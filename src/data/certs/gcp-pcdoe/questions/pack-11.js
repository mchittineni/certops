export const GCP_PCDOE_QUESTIONS_11 = [
  {
    id: "gcp-pcdoe-251",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Defining SLIs and Good vs Bad Events: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Site Reliability Engineering to measure customer-perceived availability for an HTTP REST API accurately according to Google SRE principles.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Service Level Indicators (SLIs) defining good events over valid events is under consideration.",
    options: [
      { id: 'A', text: "Define SLI based on the total number of lines of code deployed each sprint." },
      { id: 'B', text: "Measure availability by pinging the server IP from a single internal VM once every hour." },
      { id: 'C', text: "Assume 100% availability unless more than 1,000 customer complaints are received." },
      { id: 'D', text: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests. According to Google SRE principles, an SLI is a quantifiable metric expressed as: (Count of good events / Count of valid events) * 100%. For HTTP services, good events are non-5xx responses (or requests completing within a latency threshold) over all valid received requests.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-252",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Defining SLIs and Good vs Bad Events: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Site Reliability Engineering to measure customer-perceived availability for an HTTP REST API accurately according to Google SRE principles.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Service Level Indicators (SLIs) defining good events over valid events is under consideration.",
    options: [
      { id: 'A', text: "Define SLI based on the total number of lines of code deployed each sprint." },
      { id: 'B', text: "Measure availability by pinging the server IP from a single internal VM once every hour." },
      { id: 'C', text: "Assume 100% availability unless more than 1,000 customer complaints are received." },
      { id: 'D', text: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests. According to Google SRE principles, an SLI is a quantifiable metric expressed as: (Count of good events / Count of valid events) * 100%. For HTTP services, good events are non-5xx responses (or requests completing within a latency threshold) over all valid received requests.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-253",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Defining SLIs and Good vs Bad Events: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Site Reliability Engineering to measure customer-perceived availability for an HTTP REST API accurately according to Google SRE principles.",
    question: "Which solution implements these mandatory compliance and security controls? Service Level Indicators (SLIs) defining good events over valid events is under consideration.",
    options: [
      { id: 'A', text: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests." },
      { id: 'B', text: "Assume 100% availability unless more than 1,000 customer complaints are received." },
      { id: 'C', text: "Measure availability by pinging the server IP from a single internal VM once every hour." },
      { id: 'D', text: "Define SLI based on the total number of lines of code deployed each sprint." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests. According to Google SRE principles, an SLI is a quantifiable metric expressed as: (Count of good events / Count of valid events) * 100%. For HTTP services, good events are non-5xx responses (or requests completing within a latency threshold) over all valid received requests.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-254",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Defining SLIs and Good vs Bad Events: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Site Reliability Engineering to measure customer-perceived availability for an HTTP REST API accurately according to Google SRE principles.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Service Level Indicators (SLIs) defining good events over valid events is under consideration.",
    options: [
      { id: 'A', text: "Define SLI based on the total number of lines of code deployed each sprint." },
      { id: 'B', text: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests." },
      { id: 'C', text: "Assume 100% availability unless more than 1,000 customer complaints are received." },
      { id: 'D', text: "Measure availability by pinging the server IP from a single internal VM once every hour." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests. According to Google SRE principles, an SLI is a quantifiable metric expressed as: (Count of good events / Count of valid events) * 100%. For HTTP services, good events are non-5xx responses (or requests completing within a latency threshold) over all valid received requests.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-255",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Defining SLIs and Good vs Bad Events: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Site Reliability Engineering to measure customer-perceived availability for an HTTP REST API accurately according to Google SRE principles.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Service Level Indicators (SLIs) defining good events over valid events is under consideration.",
    options: [
      { id: 'A', text: "Assume 100% availability unless more than 1,000 customer complaints are received." },
      { id: 'B', text: "Measure availability by pinging the server IP from a single internal VM once every hour." },
      { id: 'C', text: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests." },
      { id: 'D', text: "Define SLI based on the total number of lines of code deployed each sprint." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define the availability SLI as the count of successful responses (HTTP status codes other than 5xx) divided by the count of all valid requests. According to Google SRE principles, an SLI is a quantifiable metric expressed as: (Count of good events / Count of valid events) * 100%. For HTTP services, good events are non-5xx responses (or requests completing within a latency threshold) over all valid received requests.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-256",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Setting SLOs and Error Budget Policies: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates Site Reliability Engineering to balance developer feature velocity with operational stability when a microservice burns 80% of its monthly error budget in the first 5 days.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Service Level Objectives (SLOs) and Error Budget burn rate governance is under consideration.",
    options: [
      { id: 'A', text: "Relax the SLO target from 99.9% to 90% immediately to avoid feature release freezes." },
      { id: 'B', text: "Continue shipping new features while ignoring error budget alerts." },
      { id: 'C', text: "Fire the developers who wrote code deployed in the first 5 days." },
      { id: 'D', text: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes. An Error Budget represents 100% minus the SLO. When an error budget is depleted rapidly, a pre-agreed Error Budget Policy dictates consequences—such as freezing feature releases and redirecting sprint engineering resources toward automated testing, hardening, and resilience.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos#error-budgets",
    tags: ["Site Reliability Engineering", "SRE", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-257",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Setting SLOs and Error Budget Policies: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates Site Reliability Engineering to balance developer feature velocity with operational stability when a microservice burns 80% of its monthly error budget in the first 5 days.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Service Level Objectives (SLOs) and Error Budget burn rate governance is under consideration.",
    options: [
      { id: 'A', text: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes." },
      { id: 'B', text: "Fire the developers who wrote code deployed in the first 5 days." },
      { id: 'C', text: "Continue shipping new features while ignoring error budget alerts." },
      { id: 'D', text: "Relax the SLO target from 99.9% to 90% immediately to avoid feature release freezes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes. An Error Budget represents 100% minus the SLO. When an error budget is depleted rapidly, a pre-agreed Error Budget Policy dictates consequences—such as freezing feature releases and redirecting sprint engineering resources toward automated testing, hardening, and resilience.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos#error-budgets",
    tags: ["Site Reliability Engineering", "SRE", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-258",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Setting SLOs and Error Budget Policies: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates Site Reliability Engineering to balance developer feature velocity with operational stability when a microservice burns 80% of its monthly error budget in the first 5 days.",
    question: "Which solution implements these mandatory compliance and security controls? Service Level Objectives (SLOs) and Error Budget burn rate governance is under consideration.",
    options: [
      { id: 'A', text: "Fire the developers who wrote code deployed in the first 5 days." },
      { id: 'B', text: "Continue shipping new features while ignoring error budget alerts." },
      { id: 'C', text: "Relax the SLO target from 99.9% to 90% immediately to avoid feature release freezes." },
      { id: 'D', text: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes. An Error Budget represents 100% minus the SLO. When an error budget is depleted rapidly, a pre-agreed Error Budget Policy dictates consequences—such as freezing feature releases and redirecting sprint engineering resources toward automated testing, hardening, and resilience.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos#error-budgets",
    tags: ["Site Reliability Engineering", "SRE", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-259",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Setting SLOs and Error Budget Policies: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates Site Reliability Engineering to balance developer feature velocity with operational stability when a microservice burns 80% of its monthly error budget in the first 5 days.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Service Level Objectives (SLOs) and Error Budget burn rate governance is under consideration.",
    options: [
      { id: 'A', text: "Fire the developers who wrote code deployed in the first 5 days." },
      { id: 'B', text: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes." },
      { id: 'C', text: "Relax the SLO target from 99.9% to 90% immediately to avoid feature release freezes." },
      { id: 'D', text: "Continue shipping new features while ignoring error budget alerts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes. An Error Budget represents 100% minus the SLO. When an error budget is depleted rapidly, a pre-agreed Error Budget Policy dictates consequences—such as freezing feature releases and redirecting sprint engineering resources toward automated testing, hardening, and resilience.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos#error-budgets",
    tags: ["Site Reliability Engineering", "SRE", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-260",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Setting SLOs and Error Budget Policies: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates Site Reliability Engineering to balance developer feature velocity with operational stability when a microservice burns 80% of its monthly error budget in the first 5 days.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Service Level Objectives (SLOs) and Error Budget burn rate governance is under consideration.",
    options: [
      { id: 'A', text: "Relax the SLO target from 99.9% to 90% immediately to avoid feature release freezes." },
      { id: 'B', text: "Continue shipping new features while ignoring error budget alerts." },
      { id: 'C', text: "Fire the developers who wrote code deployed in the first 5 days." },
      { id: 'D', text: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enforce an Error Budget policy halting non-critical feature deployments and redirecting engineering effort to reliability and bug fixes. An Error Budget represents 100% minus the SLO. When an error budget is depleted rapidly, a pre-agreed Error Budget Policy dictates consequences—such as freezing feature releases and redirecting sprint engineering resources toward automated testing, hardening, and resilience.",
    referenceUrl: "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos#error-budgets",
    tags: ["Site Reliability Engineering", "SRE", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-261",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Eliminating Toil via Automation: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates SRE Practices to identify and eliminate manual, repetitive, tactical, and non-creative operational work that consumes 60% of an engineering team's working time.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Toil identification, measurement, and automated software engineering solutions is under consideration.",
    options: [
      { id: 'A', text: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%." },
      { id: 'B', text: "Outsource manual server reboot procedures to a low-cost third-party helpdesk." },
      { id: 'C', text: "Hire more manual system administrators to process operational tickets by hand." },
      { id: 'D', text: "Require engineers to work overtime on weekends to process manual ticket backlogs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%. In Google SRE, 'toil' is operational work that is manual, repetitive, automatable, tactical, lacks enduring value, and scales linearly with service growth. Google mandates that SRE teams spend at least 50% of their time on engineering projects to systematically eliminate toil.",
    referenceUrl: "https://sre.google/sre-book/eliminating-toil/",
    tags: ["SRE Practices", "Toil Reduction", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-262",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Eliminating Toil via Automation: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates SRE Practices to identify and eliminate manual, repetitive, tactical, and non-creative operational work that consumes 60% of an engineering team's working time.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Toil identification, measurement, and automated software engineering solutions is under consideration.",
    options: [
      { id: 'A', text: "Hire more manual system administrators to process operational tickets by hand." },
      { id: 'B', text: "Require engineers to work overtime on weekends to process manual ticket backlogs." },
      { id: 'C', text: "Outsource manual server reboot procedures to a low-cost third-party helpdesk." },
      { id: 'D', text: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%. In Google SRE, 'toil' is operational work that is manual, repetitive, automatable, tactical, lacks enduring value, and scales linearly with service growth. Google mandates that SRE teams spend at least 50% of their time on engineering projects to systematically eliminate toil.",
    referenceUrl: "https://sre.google/sre-book/eliminating-toil/",
    tags: ["SRE Practices", "Toil Reduction", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-263",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Eliminating Toil via Automation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates SRE Practices to identify and eliminate manual, repetitive, tactical, and non-creative operational work that consumes 60% of an engineering team's working time.",
    question: "Which solution implements these mandatory compliance and security controls? Toil identification, measurement, and automated software engineering solutions is under consideration.",
    options: [
      { id: 'A', text: "Outsource manual server reboot procedures to a low-cost third-party helpdesk." },
      { id: 'B', text: "Require engineers to work overtime on weekends to process manual ticket backlogs." },
      { id: 'C', text: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%." },
      { id: 'D', text: "Hire more manual system administrators to process operational tickets by hand." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%. In Google SRE, 'toil' is operational work that is manual, repetitive, automatable, tactical, lacks enduring value, and scales linearly with service growth. Google mandates that SRE teams spend at least 50% of their time on engineering projects to systematically eliminate toil.",
    referenceUrl: "https://sre.google/sre-book/eliminating-toil/",
    tags: ["SRE Practices", "Toil Reduction", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-264",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Eliminating Toil via Automation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates SRE Practices to identify and eliminate manual, repetitive, tactical, and non-creative operational work that consumes 60% of an engineering team's working time.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Toil identification, measurement, and automated software engineering solutions is under consideration.",
    options: [
      { id: 'A', text: "Outsource manual server reboot procedures to a low-cost third-party helpdesk." },
      { id: 'B', text: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%." },
      { id: 'C', text: "Require engineers to work overtime on weekends to process manual ticket backlogs." },
      { id: 'D', text: "Hire more manual system administrators to process operational tickets by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%. In Google SRE, 'toil' is operational work that is manual, repetitive, automatable, tactical, lacks enduring value, and scales linearly with service growth. Google mandates that SRE teams spend at least 50% of their time on engineering projects to systematically eliminate toil.",
    referenceUrl: "https://sre.google/sre-book/eliminating-toil/",
    tags: ["SRE Practices", "Toil Reduction", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-265",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Eliminating Toil via Automation: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates SRE Practices to identify and eliminate manual, repetitive, tactical, and non-creative operational work that consumes 60% of an engineering team's working time.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Toil identification, measurement, and automated software engineering solutions is under consideration.",
    options: [
      { id: 'A', text: "Hire more manual system administrators to process operational tickets by hand." },
      { id: 'B', text: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%." },
      { id: 'C', text: "Outsource manual server reboot procedures to a low-cost third-party helpdesk." },
      { id: 'D', text: "Require engineers to work overtime on weekends to process manual ticket backlogs." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Identify toil and automate repetitive tasks using software engineering (e.g. Cloud Functions, Terraform, and Cloud Workflows) to keep toil under 50%. In Google SRE, 'toil' is operational work that is manual, repetitive, automatable, tactical, lacks enduring value, and scales linearly with service growth. Google mandates that SRE teams spend at least 50% of their time on engineering projects to systematically eliminate toil.",
    referenceUrl: "https://sre.google/sre-book/eliminating-toil/",
    tags: ["SRE Practices", "Toil Reduction", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-266",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Blameless Postmortems and Root-Cause Remediation: Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates SRE Culture to conduct an incident retrospective following a major customer-impacting database outage without demoralizing team members or hiding failure details.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Blameless postmortem culture identifying systemic and organizational failure modes is under consideration.",
    options: [
      { id: 'A', text: "Close the incident immediately without documenting lessons learned." },
      { id: 'B', text: "Issue formal disciplinary warnings to the junior engineer who pushed the database script." },
      { id: 'C', text: "Hide the incident documentation from company leadership to protect team reputation." },
      { id: 'D', text: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items. Blameless postmortems assume that engineers have good intentions and do their best given the tools and information available. Focusing on systemic process failures, architectural design flaws, and tooling gaps creates a culture of learning and prevents incident recurrences.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["SRE Culture", "Postmortems", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-267",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Blameless Postmortems and Root-Cause Remediation: High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates SRE Culture to conduct an incident retrospective following a major customer-impacting database outage without demoralizing team members or hiding failure details.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Blameless postmortem culture identifying systemic and organizational failure modes is under consideration.",
    options: [
      { id: 'A', text: "Issue formal disciplinary warnings to the junior engineer who pushed the database script." },
      { id: 'B', text: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items." },
      { id: 'C', text: "Close the incident immediately without documenting lessons learned." },
      { id: 'D', text: "Hide the incident documentation from company leadership to protect team reputation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items. Blameless postmortems assume that engineers have good intentions and do their best given the tools and information available. Focusing on systemic process failures, architectural design flaws, and tooling gaps creates a culture of learning and prevents incident recurrences.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["SRE Culture", "Postmortems", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-268",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Blameless Postmortems and Root-Cause Remediation: Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates SRE Culture to conduct an incident retrospective following a major customer-impacting database outage without demoralizing team members or hiding failure details.",
    question: "Which solution implements these mandatory compliance and security controls? Blameless postmortem culture identifying systemic and organizational failure modes is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items." },
      { id: 'B', text: "Close the incident immediately without documenting lessons learned." },
      { id: 'C', text: "Issue formal disciplinary warnings to the junior engineer who pushed the database script." },
      { id: 'D', text: "Hide the incident documentation from company leadership to protect team reputation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items. Blameless postmortems assume that engineers have good intentions and do their best given the tools and information available. Focusing on systemic process failures, architectural design flaws, and tooling gaps creates a culture of learning and prevents incident recurrences.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["SRE Culture", "Postmortems", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-269",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Blameless Postmortems and Root-Cause Remediation: Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates SRE Culture to conduct an incident retrospective following a major customer-impacting database outage without demoralizing team members or hiding failure details.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Blameless postmortem culture identifying systemic and organizational failure modes is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items." },
      { id: 'B', text: "Hide the incident documentation from company leadership to protect team reputation." },
      { id: 'C', text: "Close the incident immediately without documenting lessons learned." },
      { id: 'D', text: "Issue formal disciplinary warnings to the junior engineer who pushed the database script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items. Blameless postmortems assume that engineers have good intentions and do their best given the tools and information available. Focusing on systemic process failures, architectural design flaws, and tooling gaps creates a culture of learning and prevents incident recurrences.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["SRE Culture", "Postmortems", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-270",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Blameless Postmortems and Root-Cause Remediation: Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates SRE Culture to conduct an incident retrospective following a major customer-impacting database outage without demoralizing team members or hiding failure details.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Blameless postmortem culture identifying systemic and organizational failure modes is under consideration.",
    options: [
      { id: 'A', text: "Issue formal disciplinary warnings to the junior engineer who pushed the database script." },
      { id: 'B', text: "Hide the incident documentation from company leadership to protect team reputation." },
      { id: 'C', text: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items." },
      { id: 'D', text: "Close the incident immediately without documenting lessons learned." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conduct a blameless postmortem focused on systemic gaps, detection delays, mitigation timeline, and preventive action items. Blameless postmortems assume that engineers have good intentions and do their best given the tools and information available. Focusing on systemic process failures, architectural design flaws, and tooling gaps creates a culture of learning and prevents incident recurrences.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["SRE Culture", "Postmortems", "Resilience Failure"]
  },
  {
    id: "gcp-pcdoe-271",
    difficulty: "hard",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Cascading Failure Prevention (Timeouts, Deadlines, and Backoff): Dr Failover",
    scenario: "An enterprise SRE organization is establishing operational continuity guidelines and high-availability architecture for its Google Cloud services. The DevOps team evaluates System Resilience to prevent a downstream database slowdown from triggering cascading queue backlogs, thread pool exhaustion, and widespread platform outages.",
    question: "Which architectural approach or configuration satisfies these operational continuity and resilience objectives? Cascading failure prevention via client deadlines, exponential backoff, and circuit breakers is under consideration.",
    options: [
      { id: 'A', text: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers." },
      { id: 'B', text: "Deploy 50 additional web servers to queue incoming HTTP requests indefinitely." },
      { id: 'C', text: "Increase client HTTP timeout settings to 10 minutes to ensure every request finishes." },
      { id: 'D', text: "Configure client applications to retry failed requests immediately in an infinite loop." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers. Cascading failures occur when a failure in one component propagates to downstream dependencies. Implementing distributed deadlines (canceling downstream work when clients disconnect), exponential backoff with randomized jitter, and circuit breakers protects systems from overload collapse.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["System Resilience", "Resilience", "Dr Failover"]
  },
  {
    id: "gcp-pcdoe-272",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Cascading Failure Prevention (Timeouts, Deadlines, and Backoff): High Load Scale",
    scenario: "A high-throughput Google Cloud application experiences unpredictable bursts of traffic and transactional demands from global users. The DevOps team evaluates System Resilience to prevent a downstream database slowdown from triggering cascading queue backlogs, thread pool exhaustion, and widespread platform outages.",
    question: "Which engineering approach should the DevOps team select to manage this demand reliably without manual intervention? Cascading failure prevention via client deadlines, exponential backoff, and circuit breakers is under consideration.",
    options: [
      { id: 'A', text: "Increase client HTTP timeout settings to 10 minutes to ensure every request finishes." },
      { id: 'B', text: "Deploy 50 additional web servers to queue incoming HTTP requests indefinitely." },
      { id: 'C', text: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers." },
      { id: 'D', text: "Configure client applications to retry failed requests immediately in an infinite loop." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers. Cascading failures occur when a failure in one component propagates to downstream dependencies. Implementing distributed deadlines (canceling downstream work when clients disconnect), exponential backoff with randomized jitter, and circuit breakers protects systems from overload collapse.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["System Resilience", "Resilience", "High Load Scale"]
  },
  {
    id: "gcp-pcdoe-273",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Cascading Failure Prevention (Timeouts, Deadlines, and Backoff): Security Compliance",
    scenario: "A security compliance auditor requires automated verification of system integrity, secret isolation, and governance across all continuous delivery pipelines. The DevOps team evaluates System Resilience to prevent a downstream database slowdown from triggering cascading queue backlogs, thread pool exhaustion, and widespread platform outages.",
    question: "Which solution implements these mandatory compliance and security controls? Cascading failure prevention via client deadlines, exponential backoff, and circuit breakers is under consideration.",
    options: [
      { id: 'A', text: "Configure client applications to retry failed requests immediately in an infinite loop." },
      { id: 'B', text: "Deploy 50 additional web servers to queue incoming HTTP requests indefinitely." },
      { id: 'C', text: "Increase client HTTP timeout settings to 10 minutes to ensure every request finishes." },
      { id: 'D', text: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers. Cascading failures occur when a failure in one component propagates to downstream dependencies. Implementing distributed deadlines (canceling downstream work when clients disconnect), exponential backoff with randomized jitter, and circuit breakers protects systems from overload collapse.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["System Resilience", "Resilience", "Security Compliance"]
  },
  {
    id: "gcp-pcdoe-274",
    difficulty: "easy",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Cascading Failure Prevention (Timeouts, Deadlines, and Backoff): Hybrid Migration",
    scenario: "An enterprise is modernizing on-premises deployment workflows and adopting cloud-native continuous delivery and observability patterns on Google Cloud. The DevOps team evaluates System Resilience to prevent a downstream database slowdown from triggering cascading queue backlogs, thread pool exhaustion, and widespread platform outages.",
    question: "Which practice or platform capability accelerates this transition while minimizing operational overhead? Cascading failure prevention via client deadlines, exponential backoff, and circuit breakers is under consideration.",
    options: [
      { id: 'A', text: "Increase client HTTP timeout settings to 10 minutes to ensure every request finishes." },
      { id: 'B', text: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers." },
      { id: 'C', text: "Configure client applications to retry failed requests immediately in an infinite loop." },
      { id: 'D', text: "Deploy 50 additional web servers to queue incoming HTTP requests indefinitely." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers. Cascading failures occur when a failure in one component propagates to downstream dependencies. Implementing distributed deadlines (canceling downstream work when clients disconnect), exponential backoff with randomized jitter, and circuit breakers protects systems from overload collapse.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["System Resilience", "Resilience", "Hybrid Migration"]
  },
  {
    id: "gcp-pcdoe-275",
    difficulty: "medium",
    certId: "gcp-pcdoe",
    domainId: "d1",
    domainName: "Applying site reliability engineering principles to a service",
    title: "Cascading Failure Prevention (Timeouts, Deadlines, and Backoff): Resilience Failure",
    scenario: "An SRE team is optimizing system reliability to eliminate single points of failure, reduce mean time to recovery, and automate operational incident handling. The DevOps team evaluates System Resilience to prevent a downstream database slowdown from triggering cascading queue backlogs, thread pool exhaustion, and widespread platform outages.",
    question: "Which design pattern or configuration eliminates operational bottlenecks and ensures service stability? Cascading failure prevention via client deadlines, exponential backoff, and circuit breakers is under consideration.",
    options: [
      { id: 'A', text: "Configure client applications to retry failed requests immediately in an infinite loop." },
      { id: 'B', text: "Increase client HTTP timeout settings to 10 minutes to ensure every request finishes." },
      { id: 'C', text: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers." },
      { id: 'D', text: "Deploy 50 additional web servers to queue incoming HTTP requests indefinitely." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement distributed client deadlines/timeouts, exponential backoff with jitter, and circuit breakers. Cascading failures occur when a failure in one component propagates to downstream dependencies. Implementing distributed deadlines (canceling downstream work when clients disconnect), exponential backoff with randomized jitter, and circuit breakers protects systems from overload collapse.",
    referenceUrl: "https://sre.google/sre-book/addressing-cascading-failures/",
    tags: ["System Resilience", "Resilience", "Resilience Failure"]
  }
];

export default GCP_PCDOE_QUESTIONS_11;
