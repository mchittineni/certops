export const GCP_PCA_QUESTIONS_20 = [
  {
    id: "gcp-pca-476",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Site Reliability Engineering (SRE): SLI, SLO, and SLA: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Site Reliability Engineering to establish operational reliability standards for a core payment microservice, defining acceptable service failure rates to balance feature velocity with platform stability.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Service Level Indicators (SLIs), Objectives (SLOs), and Error Budgets is under consideration.",
    options: [
      { id: 'A', text: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget." },
      { id: 'B', text: "Demand 100% zero-defect uptime across all services with no allowable failure rate." },
      { id: 'C', text: "Allow development teams to deploy untested code whenever an error occurs." },
      { id: 'D', text: "Rely on customer complaint volumes as the sole measure of service reliability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget. Google Site Reliability Engineering (SRE) principles balance reliability with product velocity. Service Level Indicators (SLIs) measure real-time performance, Service Level Objectives (SLOs) establish target reliability goals, and Error Budgets dictate whether teams can push new features or must focus on stability.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "Dr Failover"]
  },
  {
    id: "gcp-pca-477",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Site Reliability Engineering (SRE): SLI, SLO, and SLA: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Site Reliability Engineering to establish operational reliability standards for a core payment microservice, defining acceptable service failure rates to balance feature velocity with platform stability.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Service Level Indicators (SLIs), Objectives (SLOs), and Error Budgets is under consideration.",
    options: [
      { id: 'A', text: "Allow development teams to deploy untested code whenever an error occurs." },
      { id: 'B', text: "Rely on customer complaint volumes as the sole measure of service reliability." },
      { id: 'C', text: "Demand 100% zero-defect uptime across all services with no allowable failure rate." },
      { id: 'D', text: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget. Google Site Reliability Engineering (SRE) principles balance reliability with product velocity. Service Level Indicators (SLIs) measure real-time performance, Service Level Objectives (SLOs) establish target reliability goals, and Error Budgets dictate whether teams can push new features or must focus on stability.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "High Load Scale"]
  },
  {
    id: "gcp-pca-478",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Site Reliability Engineering (SRE): SLI, SLO, and SLA: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Site Reliability Engineering to establish operational reliability standards for a core payment microservice, defining acceptable service failure rates to balance feature velocity with platform stability.",
    question: "Which solution properly implements these mandatory security and governance controls? Service Level Indicators (SLIs), Objectives (SLOs), and Error Budgets is under consideration.",
    options: [
      { id: 'A', text: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget." },
      { id: 'B', text: "Demand 100% zero-defect uptime across all services with no allowable failure rate." },
      { id: 'C', text: "Rely on customer complaint volumes as the sole measure of service reliability." },
      { id: 'D', text: "Allow development teams to deploy untested code whenever an error occurs." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget. Google Site Reliability Engineering (SRE) principles balance reliability with product velocity. Service Level Indicators (SLIs) measure real-time performance, Service Level Objectives (SLOs) establish target reliability goals, and Error Budgets dictate whether teams can push new features or must focus on stability.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "Security Compliance"]
  },
  {
    id: "gcp-pca-479",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Site Reliability Engineering (SRE): SLI, SLO, and SLA: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Site Reliability Engineering to establish operational reliability standards for a core payment microservice, defining acceptable service failure rates to balance feature velocity with platform stability.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Service Level Indicators (SLIs), Objectives (SLOs), and Error Budgets is under consideration.",
    options: [
      { id: 'A', text: "Demand 100% zero-defect uptime across all services with no allowable failure rate." },
      { id: 'B', text: "Rely on customer complaint volumes as the sole measure of service reliability." },
      { id: 'C', text: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget." },
      { id: 'D', text: "Allow development teams to deploy untested code whenever an error occurs." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget. Google Site Reliability Engineering (SRE) principles balance reliability with product velocity. Service Level Indicators (SLIs) measure real-time performance, Service Level Objectives (SLOs) establish target reliability goals, and Error Budgets dictate whether teams can push new features or must focus on stability.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-480",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Site Reliability Engineering (SRE): SLI, SLO, and SLA: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Site Reliability Engineering to establish operational reliability standards for a core payment microservice, defining acceptable service failure rates to balance feature velocity with platform stability.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Service Level Indicators (SLIs), Objectives (SLOs), and Error Budgets is under consideration.",
    options: [
      { id: 'A', text: "Demand 100% zero-defect uptime across all services with no allowable failure rate." },
      { id: 'B', text: "Allow development teams to deploy untested code whenever an error occurs." },
      { id: 'C', text: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget." },
      { id: 'D', text: "Rely on customer complaint volumes as the sole measure of service reliability." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define Service Level Indicators (SLIs), establish Service Level Objectives (SLOs), and track the remaining Error Budget. Google Site Reliability Engineering (SRE) principles balance reliability with product velocity. Service Level Indicators (SLIs) measure real-time performance, Service Level Objectives (SLOs) establish target reliability goals, and Error Budgets dictate whether teams can push new features or must focus on stability.",
    referenceUrl: "https://cloud.google.com/blog/products/management-tools/sre-fundamentals-slis-slas-and-slos",
    tags: ["Site Reliability Engineering", "SRE", "Resilience Failure"]
  },
  {
    id: "gcp-pca-481",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Uptime Checks and Synthetic Monitoring: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Cloud Observability to verify that an external customer-facing e-commerce web application responds with HTTP 200 within 2 seconds when probed from locations across North America, Europe, and Asia.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Global Uptime Checks probing web application availability from worldwide locations is under consideration.",
    options: [
      { id: 'A', text: "Check server internal ping responses from the local network subnet." },
      { id: 'B', text: "Wait for public social media complaints to detect website downtime." },
      { id: 'C', text: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds." },
      { id: 'D', text: "Have internal employees refresh the website homepage on their office laptops twice a day." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds. Cloud Monitoring Uptime Checks test the availability and responsiveness of public-facing web applications from multiple locations around the world. If probes fail or latency exceeds thresholds, alerts trigger automatically, notifying on-call engineers before customers are impacted.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Cloud Observability", "Uptime Checks", "Dr Failover"]
  },
  {
    id: "gcp-pca-482",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Uptime Checks and Synthetic Monitoring: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Cloud Observability to verify that an external customer-facing e-commerce web application responds with HTTP 200 within 2 seconds when probed from locations across North America, Europe, and Asia.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Global Uptime Checks probing web application availability from worldwide locations is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds." },
      { id: 'B', text: "Have internal employees refresh the website homepage on their office laptops twice a day." },
      { id: 'C', text: "Wait for public social media complaints to detect website downtime." },
      { id: 'D', text: "Check server internal ping responses from the local network subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds. Cloud Monitoring Uptime Checks test the availability and responsiveness of public-facing web applications from multiple locations around the world. If probes fail or latency exceeds thresholds, alerts trigger automatically, notifying on-call engineers before customers are impacted.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Cloud Observability", "Uptime Checks", "High Load Scale"]
  },
  {
    id: "gcp-pca-483",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Uptime Checks and Synthetic Monitoring: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Cloud Observability to verify that an external customer-facing e-commerce web application responds with HTTP 200 within 2 seconds when probed from locations across North America, Europe, and Asia.",
    question: "Which solution properly implements these mandatory security and governance controls? Global Uptime Checks probing web application availability from worldwide locations is under consideration.",
    options: [
      { id: 'A', text: "Wait for public social media complaints to detect website downtime." },
      { id: 'B', text: "Check server internal ping responses from the local network subnet." },
      { id: 'C', text: "Have internal employees refresh the website homepage on their office laptops twice a day." },
      { id: 'D', text: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds. Cloud Monitoring Uptime Checks test the availability and responsiveness of public-facing web applications from multiple locations around the world. If probes fail or latency exceeds thresholds, alerts trigger automatically, notifying on-call engineers before customers are impacted.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Cloud Observability", "Uptime Checks", "Security Compliance"]
  },
  {
    id: "gcp-pca-484",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Uptime Checks and Synthetic Monitoring: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Cloud Observability to verify that an external customer-facing e-commerce web application responds with HTTP 200 within 2 seconds when probed from locations across North America, Europe, and Asia.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Global Uptime Checks probing web application availability from worldwide locations is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds." },
      { id: 'B', text: "Have internal employees refresh the website homepage on their office laptops twice a day." },
      { id: 'C', text: "Wait for public social media complaints to detect website downtime." },
      { id: 'D', text: "Check server internal ping responses from the local network subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds. Cloud Monitoring Uptime Checks test the availability and responsiveness of public-facing web applications from multiple locations around the world. If probes fail or latency exceeds thresholds, alerts trigger automatically, notifying on-call engineers before customers are impacted.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Cloud Observability", "Uptime Checks", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-485",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Uptime Checks and Synthetic Monitoring: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Cloud Observability to verify that an external customer-facing e-commerce web application responds with HTTP 200 within 2 seconds when probed from locations across North America, Europe, and Asia.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Global Uptime Checks probing web application availability from worldwide locations is under consideration.",
    options: [
      { id: 'A', text: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds." },
      { id: 'B', text: "Have internal employees refresh the website homepage on their office laptops twice a day." },
      { id: 'C', text: "Wait for public social media complaints to detect website downtime." },
      { id: 'D', text: "Check server internal ping responses from the local network subnet." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure Cloud Monitoring Uptime Checks across multiple global geographic locations with latency thresholds. Cloud Monitoring Uptime Checks test the availability and responsiveness of public-facing web applications from multiple locations around the world. If probes fail or latency exceeds thresholds, alerts trigger automatically, notifying on-call engineers before customers are impacted.",
    referenceUrl: "https://cloud.google.com/monitoring/uptime-checks",
    tags: ["Cloud Observability", "Uptime Checks", "Resilience Failure"]
  },
  {
    id: "gcp-pca-486",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Incident Management and Postmortems: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Incident Management to conduct a constructive engineering analysis after a major platform outage to identify root causes and implement preventive guardrails without assigning personal culpability.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Blameless postmortems and automated incident response workflows is under consideration.",
    options: [
      { id: 'A', text: "Conceal the incident details from engineering teams to prevent negative publicity." },
      { id: 'B', text: "Resume development immediately without documenting lessons learned." },
      { id: 'C', text: "Identify the developer who introduced the bug and issue formal disciplinary reprimands." },
      { id: 'D', text: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work. A core principle of Google SRE is conducting blameless postmortems. Blameless postmortems assume that everyone involved had good intentions and acted on the information they had. Writing a blameless postmortem helps teams uncover systemic engineering flaws, improve monitoring, and prevent recurrences.",
    referenceUrl: "https://cloud.google.com/blog/products/gcp/sre-postmortems-cultivating-a-culture-of-learning",
    tags: ["Incident Management", "SRE Culture", "Dr Failover"]
  },
  {
    id: "gcp-pca-487",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Incident Management and Postmortems: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Incident Management to conduct a constructive engineering analysis after a major platform outage to identify root causes and implement preventive guardrails without assigning personal culpability.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Blameless postmortems and automated incident response workflows is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work." },
      { id: 'B', text: "Resume development immediately without documenting lessons learned." },
      { id: 'C', text: "Identify the developer who introduced the bug and issue formal disciplinary reprimands." },
      { id: 'D', text: "Conceal the incident details from engineering teams to prevent negative publicity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work. A core principle of Google SRE is conducting blameless postmortems. Blameless postmortems assume that everyone involved had good intentions and acted on the information they had. Writing a blameless postmortem helps teams uncover systemic engineering flaws, improve monitoring, and prevent recurrences.",
    referenceUrl: "https://cloud.google.com/blog/products/gcp/sre-postmortems-cultivating-a-culture-of-learning",
    tags: ["Incident Management", "SRE Culture", "High Load Scale"]
  },
  {
    id: "gcp-pca-488",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Incident Management and Postmortems: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Incident Management to conduct a constructive engineering analysis after a major platform outage to identify root causes and implement preventive guardrails without assigning personal culpability.",
    question: "Which solution properly implements these mandatory security and governance controls? Blameless postmortems and automated incident response workflows is under consideration.",
    options: [
      { id: 'A', text: "Resume development immediately without documenting lessons learned." },
      { id: 'B', text: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work." },
      { id: 'C', text: "Identify the developer who introduced the bug and issue formal disciplinary reprimands." },
      { id: 'D', text: "Conceal the incident details from engineering teams to prevent negative publicity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work. A core principle of Google SRE is conducting blameless postmortems. Blameless postmortems assume that everyone involved had good intentions and acted on the information they had. Writing a blameless postmortem helps teams uncover systemic engineering flaws, improve monitoring, and prevent recurrences.",
    referenceUrl: "https://cloud.google.com/blog/products/gcp/sre-postmortems-cultivating-a-culture-of-learning",
    tags: ["Incident Management", "SRE Culture", "Security Compliance"]
  },
  {
    id: "gcp-pca-489",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Incident Management and Postmortems: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Incident Management to conduct a constructive engineering analysis after a major platform outage to identify root causes and implement preventive guardrails without assigning personal culpability.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Blameless postmortems and automated incident response workflows is under consideration.",
    options: [
      { id: 'A', text: "Identify the developer who introduced the bug and issue formal disciplinary reprimands." },
      { id: 'B', text: "Resume development immediately without documenting lessons learned." },
      { id: 'C', text: "Conceal the incident details from engineering teams to prevent negative publicity." },
      { id: 'D', text: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work. A core principle of Google SRE is conducting blameless postmortems. Blameless postmortems assume that everyone involved had good intentions and acted on the information they had. Writing a blameless postmortem helps teams uncover systemic engineering flaws, improve monitoring, and prevent recurrences.",
    referenceUrl: "https://cloud.google.com/blog/products/gcp/sre-postmortems-cultivating-a-culture-of-learning",
    tags: ["Incident Management", "SRE Culture", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-490",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Cloud Monitoring Incident Management and Postmortems: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Incident Management to conduct a constructive engineering analysis after a major platform outage to identify root causes and implement preventive guardrails without assigning personal culpability.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Blameless postmortems and automated incident response workflows is under consideration.",
    options: [
      { id: 'A', text: "Conceal the incident details from engineering teams to prevent negative publicity." },
      { id: 'B', text: "Identify the developer who introduced the bug and issue formal disciplinary reprimands." },
      { id: 'C', text: "Resume development immediately without documenting lessons learned." },
      { id: 'D', text: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conduct a blameless postmortem documenting timeline, root causes, detection gaps, and actionable preventative work. A core principle of Google SRE is conducting blameless postmortems. Blameless postmortems assume that everyone involved had good intentions and acted on the information they had. Writing a blameless postmortem helps teams uncover systemic engineering flaws, improve monitoring, and prevent recurrences.",
    referenceUrl: "https://cloud.google.com/blog/products/gcp/sre-postmortems-cultivating-a-culture-of-learning",
    tags: ["Incident Management", "SRE Culture", "Resilience Failure"]
  },
  {
    id: "gcp-pca-491",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Chaos Engineering and Fault Injection Testing: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates System Resilience to validate that a multi-zone GKE application automatically recovers from sudden zone failures and network partitions before launching to public customers.",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Controlled fault injection testing in staging environments to validate resilience is under consideration.",
    options: [
      { id: 'A', text: "Simulate failures directly in production during peak shopping sales without backups." },
      { id: 'B', text: "Assume the cloud platform never experiences failures and skip failure testing." },
      { id: 'C', text: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages." },
      { id: 'D', text: "Rely on architectural whiteboard diagrams as proof of fault tolerance." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages. Chaos engineering and fault injection testing deliberately introduce simulated failures (killing pods, terminating VMs, simulating network latency) into distributed systems in a controlled manner to verify that automated self-healing, failover routing, and circuit breakers function as designed.",
    referenceUrl: "https://cloud.google.com/architecture/resilience-testing",
    tags: ["System Resilience", "Resilience Testing", "Dr Failover"]
  },
  {
    id: "gcp-pca-492",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Chaos Engineering and Fault Injection Testing: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates System Resilience to validate that a multi-zone GKE application automatically recovers from sudden zone failures and network partitions before launching to public customers.",
    question: "Which architectural approach should the team select to manage this demand efficiently? Controlled fault injection testing in staging environments to validate resilience is under consideration.",
    options: [
      { id: 'A', text: "Simulate failures directly in production during peak shopping sales without backups." },
      { id: 'B', text: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages." },
      { id: 'C', text: "Assume the cloud platform never experiences failures and skip failure testing." },
      { id: 'D', text: "Rely on architectural whiteboard diagrams as proof of fault tolerance." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages. Chaos engineering and fault injection testing deliberately introduce simulated failures (killing pods, terminating VMs, simulating network latency) into distributed systems in a controlled manner to verify that automated self-healing, failover routing, and circuit breakers function as designed.",
    referenceUrl: "https://cloud.google.com/architecture/resilience-testing",
    tags: ["System Resilience", "Resilience Testing", "High Load Scale"]
  },
  {
    id: "gcp-pca-493",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Chaos Engineering and Fault Injection Testing: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates System Resilience to validate that a multi-zone GKE application automatically recovers from sudden zone failures and network partitions before launching to public customers.",
    question: "Which solution properly implements these mandatory security and governance controls? Controlled fault injection testing in staging environments to validate resilience is under consideration.",
    options: [
      { id: 'A', text: "Rely on architectural whiteboard diagrams as proof of fault tolerance." },
      { id: 'B', text: "Simulate failures directly in production during peak shopping sales without backups." },
      { id: 'C', text: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages." },
      { id: 'D', text: "Assume the cloud platform never experiences failures and skip failure testing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages. Chaos engineering and fault injection testing deliberately introduce simulated failures (killing pods, terminating VMs, simulating network latency) into distributed systems in a controlled manner to verify that automated self-healing, failover routing, and circuit breakers function as designed.",
    referenceUrl: "https://cloud.google.com/architecture/resilience-testing",
    tags: ["System Resilience", "Resilience Testing", "Security Compliance"]
  },
  {
    id: "gcp-pca-494",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Chaos Engineering and Fault Injection Testing: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates System Resilience to validate that a multi-zone GKE application automatically recovers from sudden zone failures and network partitions before launching to public customers.",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Controlled fault injection testing in staging environments to validate resilience is under consideration.",
    options: [
      { id: 'A', text: "Rely on architectural whiteboard diagrams as proof of fault tolerance." },
      { id: 'B', text: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages." },
      { id: 'C', text: "Simulate failures directly in production during peak shopping sales without backups." },
      { id: 'D', text: "Assume the cloud platform never experiences failures and skip failure testing." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages. Chaos engineering and fault injection testing deliberately introduce simulated failures (killing pods, terminating VMs, simulating network latency) into distributed systems in a controlled manner to verify that automated self-healing, failover routing, and circuit breakers function as designed.",
    referenceUrl: "https://cloud.google.com/architecture/resilience-testing",
    tags: ["System Resilience", "Resilience Testing", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-495",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Chaos Engineering and Fault Injection Testing: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates System Resilience to validate that a multi-zone GKE application automatically recovers from sudden zone failures and network partitions before launching to public customers.",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Controlled fault injection testing in staging environments to validate resilience is under consideration.",
    options: [
      { id: 'A', text: "Rely on architectural whiteboard diagrams as proof of fault tolerance." },
      { id: 'B', text: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages." },
      { id: 'C', text: "Assume the cloud platform never experiences failures and skip failure testing." },
      { id: 'D', text: "Simulate failures directly in production during peak shopping sales without backups." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Execute controlled chaos engineering experiments by injecting node failures, network latency, and zone outages. Chaos engineering and fault injection testing deliberately introduce simulated failures (killing pods, terminating VMs, simulating network latency) into distributed systems in a controlled manner to verify that automated self-healing, failover routing, and circuit breakers function as designed.",
    referenceUrl: "https://cloud.google.com/architecture/resilience-testing",
    tags: ["System Resilience", "Resilience Testing", "Resilience Failure"]
  },
  {
    id: "gcp-pca-496",
    difficulty: "hard",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Google Cloud Customer Care and Support Escalations: Dr Failover",
    scenario: "An enterprise organization is establishing high-availability standards and operational continuity guidelines for its cloud systems. Business leaders mandate reliable and resilient operations across all operational domains. The cloud architect evaluates Enterprise Support to obtain 24/7 mission-critical technical support with a 15-minute response SLA for P1 business-critical outages and guidance from a dedicated Technical Account Manager (TAM).",
    question: "Which concept or service configuration satisfies these operational resilience objectives? Premium Customer Care with 15-minute response times and Named Technical Account Managers is under consideration.",
    options: [
      { id: 'A', text: "Enroll in Google Cloud Premium Support (Customer Care)." },
      { id: 'B', text: "Contact consumer Gmail technical support." },
      { id: 'C', text: "Subscribe to Standard Support with 8-hour business hours response times." },
      { id: 'D', text: "Rely on community forums and public Stack Overflow posts during production outages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enroll in Google Cloud Premium Support (Customer Care). Google Cloud Premium Support is designed for enterprises running mission-critical workloads. It offers 15-minute response times for critical P1 business-halting issues, 24/7 multi-channel engineering access, operational health reviews, and a dedicated Technical Account Manager (TAM).",
    referenceUrl: "https://cloud.google.com/support/docs/customer-care",
    tags: ["Enterprise Support", "Customer Care", "Dr Failover"]
  },
  {
    id: "gcp-pca-497",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Google Cloud Customer Care and Support Escalations: High Load Scale",
    scenario: "A rapidly growing technology startup experiences seasonal surges in user traffic and transactions. The management team requires architecture that scales seamlessly while maintaining performance and operational stability. The cloud architect evaluates Enterprise Support to obtain 24/7 mission-critical technical support with a 15-minute response SLA for P1 business-critical outages and guidance from a dedicated Technical Account Manager (TAM).",
    question: "Which architectural approach should the team select to manage this demand efficiently? Premium Customer Care with 15-minute response times and Named Technical Account Managers is under consideration.",
    options: [
      { id: 'A', text: "Subscribe to Standard Support with 8-hour business hours response times." },
      { id: 'B', text: "Rely on community forums and public Stack Overflow posts during production outages." },
      { id: 'C', text: "Contact consumer Gmail technical support." },
      { id: 'D', text: "Enroll in Google Cloud Premium Support (Customer Care)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enroll in Google Cloud Premium Support (Customer Care). Google Cloud Premium Support is designed for enterprises running mission-critical workloads. It offers 15-minute response times for critical P1 business-halting issues, 24/7 multi-channel engineering access, operational health reviews, and a dedicated Technical Account Manager (TAM).",
    referenceUrl: "https://cloud.google.com/support/docs/customer-care",
    tags: ["Enterprise Support", "Customer Care", "High Load Scale"]
  },
  {
    id: "gcp-pca-498",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Google Cloud Customer Care and Support Escalations: Security Compliance",
    scenario: "A financial compliance and auditing department requires strict enforcement of data protection, access controls, and cloud governance policies across all systems. The cloud architect evaluates Enterprise Support to obtain 24/7 mission-critical technical support with a 15-minute response SLA for P1 business-critical outages and guidance from a dedicated Technical Account Manager (TAM).",
    question: "Which solution properly implements these mandatory security and governance controls? Premium Customer Care with 15-minute response times and Named Technical Account Managers is under consideration.",
    options: [
      { id: 'A', text: "Contact consumer Gmail technical support." },
      { id: 'B', text: "Subscribe to Standard Support with 8-hour business hours response times." },
      { id: 'C', text: "Enroll in Google Cloud Premium Support (Customer Care)." },
      { id: 'D', text: "Rely on community forums and public Stack Overflow posts during production outages." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enroll in Google Cloud Premium Support (Customer Care). Google Cloud Premium Support is designed for enterprises running mission-critical workloads. It offers 15-minute response times for critical P1 business-halting issues, 24/7 multi-channel engineering access, operational health reviews, and a dedicated Technical Account Manager (TAM).",
    referenceUrl: "https://cloud.google.com/support/docs/customer-care",
    tags: ["Enterprise Support", "Customer Care", "Security Compliance"]
  },
  {
    id: "gcp-pca-499",
    difficulty: "easy",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Google Cloud Customer Care and Support Escalations: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises data center operations to Google Cloud. The executive team wants to maximize efficiency, accelerate innovation, and minimize operational complexity. The cloud architect evaluates Enterprise Support to obtain 24/7 mission-critical technical support with a 15-minute response SLA for P1 business-critical outages and guidance from a dedicated Technical Account Manager (TAM).",
    question: "Which principle or solution enables the enterprise to achieve these cloud migration goals? Premium Customer Care with 15-minute response times and Named Technical Account Managers is under consideration.",
    options: [
      { id: 'A', text: "Rely on community forums and public Stack Overflow posts during production outages." },
      { id: 'B', text: "Enroll in Google Cloud Premium Support (Customer Care)." },
      { id: 'C', text: "Contact consumer Gmail technical support." },
      { id: 'D', text: "Subscribe to Standard Support with 8-hour business hours response times." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enroll in Google Cloud Premium Support (Customer Care). Google Cloud Premium Support is designed for enterprises running mission-critical workloads. It offers 15-minute response times for critical P1 business-halting issues, 24/7 multi-channel engineering access, operational health reviews, and a dedicated Technical Account Manager (TAM).",
    referenceUrl: "https://cloud.google.com/support/docs/customer-care",
    tags: ["Enterprise Support", "Customer Care", "Hybrid Migration"]
  },
  {
    id: "gcp-pca-500",
    difficulty: "medium",
    certId: "gcp-pca",
    domainId: "d6",
    domainName: "Ensuring solution and operations reliability",
    title: "Google Cloud Customer Care and Support Escalations: Resilience Failure",
    scenario: "An IT operations team is modernizing infrastructure to eliminate single points of failure, optimize spending, and automate infrastructure maintenance. The cloud architect evaluates Enterprise Support to obtain 24/7 mission-critical technical support with a 15-minute response SLA for P1 business-critical outages and guidance from a dedicated Technical Account Manager (TAM).",
    question: "Which design pattern or service configuration eliminates operational bottlenecks and delivers automated management? Premium Customer Care with 15-minute response times and Named Technical Account Managers is under consideration.",
    options: [
      { id: 'A', text: "Contact consumer Gmail technical support." },
      { id: 'B', text: "Subscribe to Standard Support with 8-hour business hours response times." },
      { id: 'C', text: "Enroll in Google Cloud Premium Support (Customer Care)." },
      { id: 'D', text: "Rely on community forums and public Stack Overflow posts during production outages." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Enroll in Google Cloud Premium Support (Customer Care). Google Cloud Premium Support is designed for enterprises running mission-critical workloads. It offers 15-minute response times for critical P1 business-halting issues, 24/7 multi-channel engineering access, operational health reviews, and a dedicated Technical Account Manager (TAM).",
    referenceUrl: "https://cloud.google.com/support/docs/customer-care",
    tags: ["Enterprise Support", "Customer Care", "Resilience Failure"]
  }
];

export default GCP_PCA_QUESTIONS_20;
