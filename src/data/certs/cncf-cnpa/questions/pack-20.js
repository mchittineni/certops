export const CNCF_CNPA_QUESTIONS_20 = [
  {
    id: "cncf-cnpa-476",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "FinOps and Cloud Cost Allocation in Kubernetes: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates FinOps Governance to attribute cloud infrastructure and Kubernetes cluster costs accurately to specific business units, products, and cost centers.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Labeling and tagging taxonomies enabling granular workload cost attribution and rightsizing is under consideration.",
    options: [
      { id: 'A', text: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies." },
      { id: 'B', text: "Allocate all cloud infrastructure costs to a single unclassified general overhead corporate account." },
      { id: 'C', text: "Ban all cloud infrastructure usage to eliminate costs entirely." },
      { id: 'D', text: "Guess team cost allocations based on headcount rather than actual cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies. FinOps in cloud-native platforms requires strict metadata governance. Validating admission controllers enforce mandatory labels (`app`, `team`, `cost-center`) on all namespaces and workloads, enabling cost allocation engines to accurately attribute spend and recommend rightsizing.",
    referenceUrl: "https://www.finops.org/",
    tags: ["FinOps Governance", "FinOps Governance", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-477",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "FinOps and Cloud Cost Allocation in Kubernetes: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates FinOps Governance to attribute cloud infrastructure and Kubernetes cluster costs accurately to specific business units, products, and cost centers.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Labeling and tagging taxonomies enabling granular workload cost attribution and rightsizing is under consideration.",
    options: [
      { id: 'A', text: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies." },
      { id: 'B', text: "Allocate all cloud infrastructure costs to a single unclassified general overhead corporate account." },
      { id: 'C', text: "Ban all cloud infrastructure usage to eliminate costs entirely." },
      { id: 'D', text: "Guess team cost allocations based on headcount rather than actual cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies. FinOps in cloud-native platforms requires strict metadata governance. Validating admission controllers enforce mandatory labels (`app`, `team`, `cost-center`) on all namespaces and workloads, enabling cost allocation engines to accurately attribute spend and recommend rightsizing.",
    referenceUrl: "https://www.finops.org/",
    tags: ["FinOps Governance", "FinOps Governance", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-478",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "FinOps and Cloud Cost Allocation in Kubernetes: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates FinOps Governance to attribute cloud infrastructure and Kubernetes cluster costs accurately to specific business units, products, and cost centers.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Labeling and tagging taxonomies enabling granular workload cost attribution and rightsizing is under consideration.",
    options: [
      { id: 'A', text: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies." },
      { id: 'B', text: "Allocate all cloud infrastructure costs to a single unclassified general overhead corporate account." },
      { id: 'C', text: "Ban all cloud infrastructure usage to eliminate costs entirely." },
      { id: 'D', text: "Guess team cost allocations based on headcount rather than actual cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies. FinOps in cloud-native platforms requires strict metadata governance. Validating admission controllers enforce mandatory labels (`app`, `team`, `cost-center`) on all namespaces and workloads, enabling cost allocation engines to accurately attribute spend and recommend rightsizing.",
    referenceUrl: "https://www.finops.org/",
    tags: ["FinOps Governance", "FinOps Governance", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-479",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "FinOps and Cloud Cost Allocation in Kubernetes: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates FinOps Governance to attribute cloud infrastructure and Kubernetes cluster costs accurately to specific business units, products, and cost centers.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Labeling and tagging taxonomies enabling granular workload cost attribution and rightsizing is under consideration.",
    options: [
      { id: 'A', text: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies." },
      { id: 'B', text: "Allocate all cloud infrastructure costs to a single unclassified general overhead corporate account." },
      { id: 'C', text: "Ban all cloud infrastructure usage to eliminate costs entirely." },
      { id: 'D', text: "Guess team cost allocations based on headcount rather than actual cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies. FinOps in cloud-native platforms requires strict metadata governance. Validating admission controllers enforce mandatory labels (`app`, `team`, `cost-center`) on all namespaces and workloads, enabling cost allocation engines to accurately attribute spend and recommend rightsizing.",
    referenceUrl: "https://www.finops.org/",
    tags: ["FinOps Governance", "FinOps Governance", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-480",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "FinOps and Cloud Cost Allocation in Kubernetes: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates FinOps Governance to attribute cloud infrastructure and Kubernetes cluster costs accurately to specific business units, products, and cost centers.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Labeling and tagging taxonomies enabling granular workload cost attribution and rightsizing is under consideration.",
    options: [
      { id: 'A', text: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies." },
      { id: 'B', text: "Allocate all cloud infrastructure costs to a single unclassified general overhead corporate account." },
      { id: 'C', text: "Ban all cloud infrastructure usage to eliminate costs entirely." },
      { id: 'D', text: "Guess team cost allocations based on headcount rather than actual cloud consumption." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enforce mandatory Kubernetes labeling taxonomies (e.g., `cost-center`, `team`, `env`) verified by admission policies. FinOps in cloud-native platforms requires strict metadata governance. Validating admission controllers enforce mandatory labels (`app`, `team`, `cost-center`) on all namespaces and workloads, enabling cost allocation engines to accurately attribute spend and recommend rightsizing.",
    referenceUrl: "https://www.finops.org/",
    tags: ["FinOps Governance", "FinOps Governance", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-481",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Compliance as Code and Continuous Audit Trails: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Compliance as Code to satisfy enterprise SOC 2 and ISO 27001 audit requirements without requiring engineering teams to gather manual screenshots.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Automating regulatory evidence collection and policy verification for SOC 2 and ISO 27001 is under consideration.",
    options: [
      { id: 'A', text: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines." },
      { id: 'B', text: "Spend four weeks every quarter capturing manual browser screenshots of security settings." },
      { id: 'C', text: "Falsify audit compliance logs to pass regulatory reviews." },
      { id: 'D', text: "Ignore compliance requirements until regulatory fines are assessed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines. Compliance as Code automates evidence collection by treating compliance policies as software tests. Continuous auditing tools inspect Git commit signatures, PR approvals, vulnerability scan results, and cluster policies, generating continuous compliance evidence for auditors.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Compliance as Code", "Compliance as Code", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-482",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Compliance as Code and Continuous Audit Trails: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Compliance as Code to satisfy enterprise SOC 2 and ISO 27001 audit requirements without requiring engineering teams to gather manual screenshots.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Automating regulatory evidence collection and policy verification for SOC 2 and ISO 27001 is under consideration.",
    options: [
      { id: 'A', text: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines." },
      { id: 'B', text: "Spend four weeks every quarter capturing manual browser screenshots of security settings." },
      { id: 'C', text: "Falsify audit compliance logs to pass regulatory reviews." },
      { id: 'D', text: "Ignore compliance requirements until regulatory fines are assessed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines. Compliance as Code automates evidence collection by treating compliance policies as software tests. Continuous auditing tools inspect Git commit signatures, PR approvals, vulnerability scan results, and cluster policies, generating continuous compliance evidence for auditors.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Compliance as Code", "Compliance as Code", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-483",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Compliance as Code and Continuous Audit Trails: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Compliance as Code to satisfy enterprise SOC 2 and ISO 27001 audit requirements without requiring engineering teams to gather manual screenshots.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Automating regulatory evidence collection and policy verification for SOC 2 and ISO 27001 is under consideration.",
    options: [
      { id: 'A', text: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines." },
      { id: 'B', text: "Spend four weeks every quarter capturing manual browser screenshots of security settings." },
      { id: 'C', text: "Falsify audit compliance logs to pass regulatory reviews." },
      { id: 'D', text: "Ignore compliance requirements until regulatory fines are assessed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines. Compliance as Code automates evidence collection by treating compliance policies as software tests. Continuous auditing tools inspect Git commit signatures, PR approvals, vulnerability scan results, and cluster policies, generating continuous compliance evidence for auditors.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Compliance as Code", "Compliance as Code", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-484",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Compliance as Code and Continuous Audit Trails: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Compliance as Code to satisfy enterprise SOC 2 and ISO 27001 audit requirements without requiring engineering teams to gather manual screenshots.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Automating regulatory evidence collection and policy verification for SOC 2 and ISO 27001 is under consideration.",
    options: [
      { id: 'A', text: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines." },
      { id: 'B', text: "Spend four weeks every quarter capturing manual browser screenshots of security settings." },
      { id: 'C', text: "Falsify audit compliance logs to pass regulatory reviews." },
      { id: 'D', text: "Ignore compliance requirements until regulatory fines are assessed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines. Compliance as Code automates evidence collection by treating compliance policies as software tests. Continuous auditing tools inspect Git commit signatures, PR approvals, vulnerability scan results, and cluster policies, generating continuous compliance evidence for auditors.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Compliance as Code", "Compliance as Code", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-485",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Compliance as Code and Continuous Audit Trails: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Compliance as Code to satisfy enterprise SOC 2 and ISO 27001 audit requirements without requiring engineering teams to gather manual screenshots.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Automating regulatory evidence collection and policy verification for SOC 2 and ISO 27001 is under consideration.",
    options: [
      { id: 'A', text: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines." },
      { id: 'B', text: "Spend four weeks every quarter capturing manual browser screenshots of security settings." },
      { id: 'C', text: "Falsify audit compliance logs to pass regulatory reviews." },
      { id: 'D', text: "Ignore compliance requirements until regulatory fines are assessed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Compliance as Code: continuously audit cluster configurations and pull request histories against security baselines. Compliance as Code automates evidence collection by treating compliance policies as software tests. Continuous auditing tools inspect Git commit signatures, PR approvals, vulnerability scan results, and cluster policies, generating continuous compliance evidence for auditors.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Compliance as Code", "Compliance as Code", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-486",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Platform Health Dashboards and Proactive Alerting: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Platform Dashboards to detect and resolve internal platform degradations before they impact software developers and deployment pipelines.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Visualizing runner capacity, API server latency, and deployment queues with actionable SLO alerts is under consideration.",
    options: [
      { id: 'A', text: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts." },
      { id: 'B', text: "Rely on developers sending angry direct messages to platform engineers when deployment pipelines freeze." },
      { id: 'C', text: "Configure noisy alert rules that trigger hundreds of false-positive pager alerts every hour." },
      { id: 'D', text: "Hide all platform performance metrics from the operations team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts. Platform reliability requires dedicated internal dashboards and alerting. By monitoring platform-specific indicators (CI runner queue depth, webhook latency, etcd disk sync duration) and alerting on SLO burn rates, platform engineers fix issues before developers experience friction.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Platform Dashboards", "Platform Dashboards", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-487",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Platform Health Dashboards and Proactive Alerting: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Platform Dashboards to detect and resolve internal platform degradations before they impact software developers and deployment pipelines.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Visualizing runner capacity, API server latency, and deployment queues with actionable SLO alerts is under consideration.",
    options: [
      { id: 'A', text: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts." },
      { id: 'B', text: "Rely on developers sending angry direct messages to platform engineers when deployment pipelines freeze." },
      { id: 'C', text: "Configure noisy alert rules that trigger hundreds of false-positive pager alerts every hour." },
      { id: 'D', text: "Hide all platform performance metrics from the operations team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts. Platform reliability requires dedicated internal dashboards and alerting. By monitoring platform-specific indicators (CI runner queue depth, webhook latency, etcd disk sync duration) and alerting on SLO burn rates, platform engineers fix issues before developers experience friction.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Platform Dashboards", "Platform Dashboards", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-488",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Platform Health Dashboards and Proactive Alerting: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Platform Dashboards to detect and resolve internal platform degradations before they impact software developers and deployment pipelines.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Visualizing runner capacity, API server latency, and deployment queues with actionable SLO alerts is under consideration.",
    options: [
      { id: 'A', text: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts." },
      { id: 'B', text: "Rely on developers sending angry direct messages to platform engineers when deployment pipelines freeze." },
      { id: 'C', text: "Configure noisy alert rules that trigger hundreds of false-positive pager alerts every hour." },
      { id: 'D', text: "Hide all platform performance metrics from the operations team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts. Platform reliability requires dedicated internal dashboards and alerting. By monitoring platform-specific indicators (CI runner queue depth, webhook latency, etcd disk sync duration) and alerting on SLO burn rates, platform engineers fix issues before developers experience friction.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Platform Dashboards", "Platform Dashboards", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-489",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Platform Health Dashboards and Proactive Alerting: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Platform Dashboards to detect and resolve internal platform degradations before they impact software developers and deployment pipelines.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Visualizing runner capacity, API server latency, and deployment queues with actionable SLO alerts is under consideration.",
    options: [
      { id: 'A', text: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts." },
      { id: 'B', text: "Rely on developers sending angry direct messages to platform engineers when deployment pipelines freeze." },
      { id: 'C', text: "Configure noisy alert rules that trigger hundreds of false-positive pager alerts every hour." },
      { id: 'D', text: "Hide all platform performance metrics from the operations team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts. Platform reliability requires dedicated internal dashboards and alerting. By monitoring platform-specific indicators (CI runner queue depth, webhook latency, etcd disk sync duration) and alerting on SLO burn rates, platform engineers fix issues before developers experience friction.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Platform Dashboards", "Platform Dashboards", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-490",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Platform Health Dashboards and Proactive Alerting: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Platform Dashboards to detect and resolve internal platform degradations before they impact software developers and deployment pipelines.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Visualizing runner capacity, API server latency, and deployment queues with actionable SLO alerts is under consideration.",
    options: [
      { id: 'A', text: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts." },
      { id: 'B', text: "Rely on developers sending angry direct messages to platform engineers when deployment pipelines freeze." },
      { id: 'C', text: "Configure noisy alert rules that trigger hundreds of false-positive pager alerts every hour." },
      { id: 'D', text: "Hide all platform performance metrics from the operations team." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build centralized Grafana platform dashboards displaying runner queue depths, API latencies, and actionable multi-window SLO alerts. Platform reliability requires dedicated internal dashboards and alerting. By monitoring platform-specific indicators (CI runner queue depth, webhook latency, etcd disk sync duration) and alerting on SLO burn rates, platform engineers fix issues before developers experience friction.",
    referenceUrl: "https://sre.google/workbook/alerting-on-slos/",
    tags: ["Platform Dashboards", "Platform Dashboards", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-491",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Blameless Postmortems and Continuous Learning: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Blameless Postmortems to turn a major platform outage into long-term systemic resilience improvements without fostering a culture of fear or finger-pointing.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Conducting blameless root cause analyses and translating incident findings into platform guardrails is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails." },
      { id: 'B', text: "Identify and publicly fire the individual engineer who typed the erroneous command." },
      { id: 'C', text: "Sweep outages under the rug and refuse to document what caused the system failure." },
      { id: 'D', text: "Ban all software deployments following an outage to prevent future incidents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails. A mature engineering culture relies on blameless postmortems. Rather than blaming human operators, teams examine underlying systemic deficiencies (missing safeguards, ambiguous tooling) and feed remediation actions directly into platform Golden Paths and guardrails.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Postmortems", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-492",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Blameless Postmortems and Continuous Learning: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Blameless Postmortems to turn a major platform outage into long-term systemic resilience improvements without fostering a culture of fear or finger-pointing.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Conducting blameless root cause analyses and translating incident findings into platform guardrails is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails." },
      { id: 'B', text: "Identify and publicly fire the individual engineer who typed the erroneous command." },
      { id: 'C', text: "Sweep outages under the rug and refuse to document what caused the system failure." },
      { id: 'D', text: "Ban all software deployments following an outage to prevent future incidents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails. A mature engineering culture relies on blameless postmortems. Rather than blaming human operators, teams examine underlying systemic deficiencies (missing safeguards, ambiguous tooling) and feed remediation actions directly into platform Golden Paths and guardrails.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Postmortems", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-493",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Blameless Postmortems and Continuous Learning: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Blameless Postmortems to turn a major platform outage into long-term systemic resilience improvements without fostering a culture of fear or finger-pointing.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Conducting blameless root cause analyses and translating incident findings into platform guardrails is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails." },
      { id: 'B', text: "Identify and publicly fire the individual engineer who typed the erroneous command." },
      { id: 'C', text: "Sweep outages under the rug and refuse to document what caused the system failure." },
      { id: 'D', text: "Ban all software deployments following an outage to prevent future incidents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails. A mature engineering culture relies on blameless postmortems. Rather than blaming human operators, teams examine underlying systemic deficiencies (missing safeguards, ambiguous tooling) and feed remediation actions directly into platform Golden Paths and guardrails.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Postmortems", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-494",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Blameless Postmortems and Continuous Learning: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Blameless Postmortems to turn a major platform outage into long-term systemic resilience improvements without fostering a culture of fear or finger-pointing.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Conducting blameless root cause analyses and translating incident findings into platform guardrails is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails." },
      { id: 'B', text: "Identify and publicly fire the individual engineer who typed the erroneous command." },
      { id: 'C', text: "Sweep outages under the rug and refuse to document what caused the system failure." },
      { id: 'D', text: "Ban all software deployments following an outage to prevent future incidents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails. A mature engineering culture relies on blameless postmortems. Rather than blaming human operators, teams examine underlying systemic deficiencies (missing safeguards, ambiguous tooling) and feed remediation actions directly into platform Golden Paths and guardrails.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Postmortems", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-495",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Blameless Postmortems and Continuous Learning: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Blameless Postmortems to turn a major platform outage into long-term systemic resilience improvements without fostering a culture of fear or finger-pointing.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Conducting blameless root cause analyses and translating incident findings into platform guardrails is under consideration.",
    options: [
      { id: 'A', text: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails." },
      { id: 'B', text: "Identify and publicly fire the individual engineer who typed the erroneous command." },
      { id: 'C', text: "Sweep outages under the rug and refuse to document what caused the system failure." },
      { id: 'D', text: "Ban all software deployments following an outage to prevent future incidents." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conduct a blameless post-incident review to uncover systemic contributing factors and implement automated platform guardrails. A mature engineering culture relies on blameless postmortems. Rather than blaming human operators, teams examine underlying systemic deficiencies (missing safeguards, ambiguous tooling) and feed remediation actions directly into platform Golden Paths and guardrails.",
    referenceUrl: "https://sre.google/sre-book/postmortem-culture/",
    tags: ["Blameless Postmortems", "Blameless Postmortems", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-496",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Technology Radar and Deprecation Management: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Tech Radar to guide thousands of software developers away from legacy, vulnerable open-source libraries toward modern corporate standards.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Managing technology adoption lifecycles (Adopt, Trial, Assess, Hold) and automated deprecation campaigns is under consideration.",
    options: [
      { id: 'A', text: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries." },
      { id: 'B', text: "Silently block developer builds without prior warning when an unapproved library is detected." },
      { id: 'C', text: "Allow every team to adopt arbitrary unvetted libraries resulting in severe dependency fragmentation." },
      { id: 'D', text: "Never deprecate obsolete technologies and support legacy runtimes indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries. An internal Technology Radar categorizes technologies into quadrants and rings (`Adopt`, `Trial`, `Assess`, `Hold`). Platform teams combine this strategic guidance with automated tooling (like Renovate or automated migration PRs) to transition services smoothly off deprecated tech.",
    referenceUrl: "https://www.thoughtworks.com/radar",
    tags: ["Tech Radar", "Tech Radar", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-497",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Technology Radar and Deprecation Management: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Tech Radar to guide thousands of software developers away from legacy, vulnerable open-source libraries toward modern corporate standards.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Managing technology adoption lifecycles (Adopt, Trial, Assess, Hold) and automated deprecation campaigns is under consideration.",
    options: [
      { id: 'A', text: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries." },
      { id: 'B', text: "Silently block developer builds without prior warning when an unapproved library is detected." },
      { id: 'C', text: "Allow every team to adopt arbitrary unvetted libraries resulting in severe dependency fragmentation." },
      { id: 'D', text: "Never deprecate obsolete technologies and support legacy runtimes indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries. An internal Technology Radar categorizes technologies into quadrants and rings (`Adopt`, `Trial`, `Assess`, `Hold`). Platform teams combine this strategic guidance with automated tooling (like Renovate or automated migration PRs) to transition services smoothly off deprecated tech.",
    referenceUrl: "https://www.thoughtworks.com/radar",
    tags: ["Tech Radar", "Tech Radar", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-498",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Technology Radar and Deprecation Management: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Tech Radar to guide thousands of software developers away from legacy, vulnerable open-source libraries toward modern corporate standards.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Managing technology adoption lifecycles (Adopt, Trial, Assess, Hold) and automated deprecation campaigns is under consideration.",
    options: [
      { id: 'A', text: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries." },
      { id: 'B', text: "Silently block developer builds without prior warning when an unapproved library is detected." },
      { id: 'C', text: "Allow every team to adopt arbitrary unvetted libraries resulting in severe dependency fragmentation." },
      { id: 'D', text: "Never deprecate obsolete technologies and support legacy runtimes indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries. An internal Technology Radar categorizes technologies into quadrants and rings (`Adopt`, `Trial`, `Assess`, `Hold`). Platform teams combine this strategic guidance with automated tooling (like Renovate or automated migration PRs) to transition services smoothly off deprecated tech.",
    referenceUrl: "https://www.thoughtworks.com/radar",
    tags: ["Tech Radar", "Tech Radar", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-499",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Technology Radar and Deprecation Management: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Tech Radar to guide thousands of software developers away from legacy, vulnerable open-source libraries toward modern corporate standards.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Managing technology adoption lifecycles (Adopt, Trial, Assess, Hold) and automated deprecation campaigns is under consideration.",
    options: [
      { id: 'A', text: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries." },
      { id: 'B', text: "Silently block developer builds without prior warning when an unapproved library is detected." },
      { id: 'C', text: "Allow every team to adopt arbitrary unvetted libraries resulting in severe dependency fragmentation." },
      { id: 'D', text: "Never deprecate obsolete technologies and support legacy runtimes indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries. An internal Technology Radar categorizes technologies into quadrants and rings (`Adopt`, `Trial`, `Assess`, `Hold`). Platform teams combine this strategic guidance with automated tooling (like Renovate or automated migration PRs) to transition services smoothly off deprecated tech.",
    referenceUrl: "https://www.thoughtworks.com/radar",
    tags: ["Tech Radar", "Tech Radar", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-500",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "Technology Radar and Deprecation Management: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Tech Radar to guide thousands of software developers away from legacy, vulnerable open-source libraries toward modern corporate standards.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Managing technology adoption lifecycles (Adopt, Trial, Assess, Hold) and automated deprecation campaigns is under consideration.",
    options: [
      { id: 'A', text: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries." },
      { id: 'B', text: "Silently block developer builds without prior warning when an unapproved library is detected." },
      { id: 'C', text: "Allow every team to adopt arbitrary unvetted libraries resulting in severe dependency fragmentation." },
      { id: 'D', text: "Never deprecate obsolete technologies and support legacy runtimes indefinitely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Publish a quarterly internal Technology Radar and run automated PR campaigns (e.g., via Renovate) to migrate deprecated libraries. An internal Technology Radar categorizes technologies into quadrants and rings (`Adopt`, `Trial`, `Assess`, `Hold`). Platform teams combine this strategic guidance with automated tooling (like Renovate or automated migration PRs) to transition services smoothly off deprecated tech.",
    referenceUrl: "https://www.thoughtworks.com/radar",
    tags: ["Tech Radar", "Tech Radar", "Resilience And Observability"]
  }
];

export default CNCF_CNPA_QUESTIONS_20;
