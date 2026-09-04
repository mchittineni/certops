export const CNCF_CNPA_QUESTIONS_16 = [
  {
    id: "cncf-cnpa-376",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform Cost Visibility and Chargeback/Showback: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Cost Visibility to foster cost awareness and financial accountability among application teams by surfacing cloud spend on their services.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Exposing namespace and microservice cloud costs directly in developer dashboards via OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Require developers to calculate cloud server electrical power consumption by hand." },
      { id: 'B', text: "Impose arbitrary compute quota bans without providing any visibility into resource utilization." },
      { id: 'C', text: "Hide all cloud billing data from developers and complain about excessive cloud costs at quarterly executive meetings." },
      { id: 'D', text: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend. Cloud-native platforms surface financial context to engineering teams. By embedding real-time cost attribution (using OpenCost or Kubecost) into developer portals, teams view their workloads' actual cloud spend, encouraging proactive optimization and FinOps alignment.",
    referenceUrl: "https://www.opencost.io/",
    tags: ["Cost Visibility", "Cost Visibility", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-377",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform Cost Visibility and Chargeback/Showback: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Cost Visibility to foster cost awareness and financial accountability among application teams by surfacing cloud spend on their services.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Exposing namespace and microservice cloud costs directly in developer dashboards via OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Impose arbitrary compute quota bans without providing any visibility into resource utilization." },
      { id: 'B', text: "Require developers to calculate cloud server electrical power consumption by hand." },
      { id: 'C', text: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend." },
      { id: 'D', text: "Hide all cloud billing data from developers and complain about excessive cloud costs at quarterly executive meetings." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend. Cloud-native platforms surface financial context to engineering teams. By embedding real-time cost attribution (using OpenCost or Kubecost) into developer portals, teams view their workloads' actual cloud spend, encouraging proactive optimization and FinOps alignment.",
    referenceUrl: "https://www.opencost.io/",
    tags: ["Cost Visibility", "Cost Visibility", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-378",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform Cost Visibility and Chargeback/Showback: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Cost Visibility to foster cost awareness and financial accountability among application teams by surfacing cloud spend on their services.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Exposing namespace and microservice cloud costs directly in developer dashboards via OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Impose arbitrary compute quota bans without providing any visibility into resource utilization." },
      { id: 'B', text: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend." },
      { id: 'C', text: "Hide all cloud billing data from developers and complain about excessive cloud costs at quarterly executive meetings." },
      { id: 'D', text: "Require developers to calculate cloud server electrical power consumption by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend. Cloud-native platforms surface financial context to engineering teams. By embedding real-time cost attribution (using OpenCost or Kubecost) into developer portals, teams view their workloads' actual cloud spend, encouraging proactive optimization and FinOps alignment.",
    referenceUrl: "https://www.opencost.io/",
    tags: ["Cost Visibility", "Cost Visibility", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-379",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform Cost Visibility and Chargeback/Showback: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Cost Visibility to foster cost awareness and financial accountability among application teams by surfacing cloud spend on their services.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Exposing namespace and microservice cloud costs directly in developer dashboards via OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Require developers to calculate cloud server electrical power consumption by hand." },
      { id: 'B', text: "Hide all cloud billing data from developers and complain about excessive cloud costs at quarterly executive meetings." },
      { id: 'C', text: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend." },
      { id: 'D', text: "Impose arbitrary compute quota bans without providing any visibility into resource utilization." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend. Cloud-native platforms surface financial context to engineering teams. By embedding real-time cost attribution (using OpenCost or Kubecost) into developer portals, teams view their workloads' actual cloud spend, encouraging proactive optimization and FinOps alignment.",
    referenceUrl: "https://www.opencost.io/",
    tags: ["Cost Visibility", "Cost Visibility", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-380",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform Cost Visibility and Chargeback/Showback: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Cost Visibility to foster cost awareness and financial accountability among application teams by surfacing cloud spend on their services.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Exposing namespace and microservice cloud costs directly in developer dashboards via OpenCost is under consideration.",
    options: [
      { id: 'A', text: "Impose arbitrary compute quota bans without providing any visibility into resource utilization." },
      { id: 'B', text: "Require developers to calculate cloud server electrical power consumption by hand." },
      { id: 'C', text: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend." },
      { id: 'D', text: "Hide all cloud billing data from developers and complain about excessive cloud costs at quarterly executive meetings." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Integrate cloud cost visibility tools (such as OpenCost or Kubecost) into the developer portal to display real-time service spend. Cloud-native platforms surface financial context to engineering teams. By embedding real-time cost attribution (using OpenCost or Kubecost) into developer portals, teams view their workloads' actual cloud spend, encouraging proactive optimization and FinOps alignment.",
    referenceUrl: "https://www.opencost.io/",
    tags: ["Cost Visibility", "Cost Visibility", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-381",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Feedback Loops and Continuous Platform Improvement: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Feedback Loops to ensure platform investments directly address the most painful bottlenecks currently facing software development teams.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Measuring developer friction, conducting surveys, and iterating on platform capabilities is under consideration.",
    options: [
      { id: 'A', text: "Cancel all communication channels between platform engineers and product development teams." },
      { id: 'B', text: "Mandate new platform features without testing usability or gathering feedback." },
      { id: 'C', text: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours." },
      { id: 'D', text: "Assume platform engineers inherently know what is best for developers without ever speaking to them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours. Platform evolution requires continuous feedback loops. Platform teams combine quantitative telemetry (command usage, pipeline duration) with qualitative input (developer satisfaction surveys, office hours) to prioritize the highest-impact platform enhancements.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Feedback Loops", "Feedback Loops", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-382",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Feedback Loops and Continuous Platform Improvement: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Feedback Loops to ensure platform investments directly address the most painful bottlenecks currently facing software development teams.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Measuring developer friction, conducting surveys, and iterating on platform capabilities is under consideration.",
    options: [
      { id: 'A', text: "Mandate new platform features without testing usability or gathering feedback." },
      { id: 'B', text: "Cancel all communication channels between platform engineers and product development teams." },
      { id: 'C', text: "Assume platform engineers inherently know what is best for developers without ever speaking to them." },
      { id: 'D', text: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours. Platform evolution requires continuous feedback loops. Platform teams combine quantitative telemetry (command usage, pipeline duration) with qualitative input (developer satisfaction surveys, office hours) to prioritize the highest-impact platform enhancements.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Feedback Loops", "Feedback Loops", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-383",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Feedback Loops and Continuous Platform Improvement: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Feedback Loops to ensure platform investments directly address the most painful bottlenecks currently facing software development teams.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Measuring developer friction, conducting surveys, and iterating on platform capabilities is under consideration.",
    options: [
      { id: 'A', text: "Mandate new platform features without testing usability or gathering feedback." },
      { id: 'B', text: "Cancel all communication channels between platform engineers and product development teams." },
      { id: 'C', text: "Assume platform engineers inherently know what is best for developers without ever speaking to them." },
      { id: 'D', text: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours. Platform evolution requires continuous feedback loops. Platform teams combine quantitative telemetry (command usage, pipeline duration) with qualitative input (developer satisfaction surveys, office hours) to prioritize the highest-impact platform enhancements.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Feedback Loops", "Feedback Loops", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-384",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Feedback Loops and Continuous Platform Improvement: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Feedback Loops to ensure platform investments directly address the most painful bottlenecks currently facing software development teams.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Measuring developer friction, conducting surveys, and iterating on platform capabilities is under consideration.",
    options: [
      { id: 'A', text: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours." },
      { id: 'B', text: "Cancel all communication channels between platform engineers and product development teams." },
      { id: 'C', text: "Mandate new platform features without testing usability or gathering feedback." },
      { id: 'D', text: "Assume platform engineers inherently know what is best for developers without ever speaking to them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours. Platform evolution requires continuous feedback loops. Platform teams combine quantitative telemetry (command usage, pipeline duration) with qualitative input (developer satisfaction surveys, office hours) to prioritize the highest-impact platform enhancements.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Feedback Loops", "Feedback Loops", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-385",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Feedback Loops and Continuous Platform Improvement: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Feedback Loops to ensure platform investments directly address the most painful bottlenecks currently facing software development teams.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Measuring developer friction, conducting surveys, and iterating on platform capabilities is under consideration.",
    options: [
      { id: 'A', text: "Cancel all communication channels between platform engineers and product development teams." },
      { id: 'B', text: "Mandate new platform features without testing usability or gathering feedback." },
      { id: 'C', text: "Assume platform engineers inherently know what is best for developers without ever speaking to them." },
      { id: 'D', text: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Establish structured feedback channels including quarterly developer surveys, automated telemetry on tool usage, and office hours. Platform evolution requires continuous feedback loops. Platform teams combine quantitative telemetry (command usage, pipeline duration) with qualitative input (developer satisfaction surveys, office hours) to prioritize the highest-impact platform enhancements.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Feedback Loops", "Feedback Loops", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-386",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Golden Paths (Paved Roads) Philosophy: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Golden Paths to encourage enterprise engineering teams to adopt secure, observable, and compliant deployment standards voluntarily.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Providing supported, frictionless opt-in paths that guide developers toward best practices is under consideration.",
    options: [
      { id: 'A', text: "Impose punitive mandates that block developers from shipping code without offering viable automated tooling." },
      { id: 'B', text: "Force every individual team to invent custom deployment and infrastructure pipelines from scratch." },
      { id: 'C', text: "Ban all open-source frameworks and force developers to write custom web servers." },
      { id: 'D', text: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice. Golden Paths (or Paved Roads) represent supported, frictionless paths that encode best practices for architecture, CI/CD, and security. Rather than enforcing rigid mandates, platform teams make Golden Paths so smooth and self-service that developers choose them willingly.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Golden Paths", "Golden Paths", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-387",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Golden Paths (Paved Roads) Philosophy: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Golden Paths to encourage enterprise engineering teams to adopt secure, observable, and compliant deployment standards voluntarily.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Providing supported, frictionless opt-in paths that guide developers toward best practices is under consideration.",
    options: [
      { id: 'A', text: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice." },
      { id: 'B', text: "Impose punitive mandates that block developers from shipping code without offering viable automated tooling." },
      { id: 'C', text: "Ban all open-source frameworks and force developers to write custom web servers." },
      { id: 'D', text: "Force every individual team to invent custom deployment and infrastructure pipelines from scratch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice. Golden Paths (or Paved Roads) represent supported, frictionless paths that encode best practices for architecture, CI/CD, and security. Rather than enforcing rigid mandates, platform teams make Golden Paths so smooth and self-service that developers choose them willingly.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Golden Paths", "Golden Paths", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-388",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Golden Paths (Paved Roads) Philosophy: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Golden Paths to encourage enterprise engineering teams to adopt secure, observable, and compliant deployment standards voluntarily.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Providing supported, frictionless opt-in paths that guide developers toward best practices is under consideration.",
    options: [
      { id: 'A', text: "Ban all open-source frameworks and force developers to write custom web servers." },
      { id: 'B', text: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice." },
      { id: 'C', text: "Impose punitive mandates that block developers from shipping code without offering viable automated tooling." },
      { id: 'D', text: "Force every individual team to invent custom deployment and infrastructure pipelines from scratch." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice. Golden Paths (or Paved Roads) represent supported, frictionless paths that encode best practices for architecture, CI/CD, and security. Rather than enforcing rigid mandates, platform teams make Golden Paths so smooth and self-service that developers choose them willingly.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Golden Paths", "Golden Paths", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-389",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Golden Paths (Paved Roads) Philosophy: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Golden Paths to encourage enterprise engineering teams to adopt secure, observable, and compliant deployment standards voluntarily.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Providing supported, frictionless opt-in paths that guide developers toward best practices is under consideration.",
    options: [
      { id: 'A', text: "Ban all open-source frameworks and force developers to write custom web servers." },
      { id: 'B', text: "Impose punitive mandates that block developers from shipping code without offering viable automated tooling." },
      { id: 'C', text: "Force every individual team to invent custom deployment and infrastructure pipelines from scratch." },
      { id: 'D', text: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice. Golden Paths (or Paved Roads) represent supported, frictionless paths that encode best practices for architecture, CI/CD, and security. Rather than enforcing rigid mandates, platform teams make Golden Paths so smooth and self-service that developers choose them willingly.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Golden Paths", "Golden Paths", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-390",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Golden Paths (Paved Roads) Philosophy: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Golden Paths to encourage enterprise engineering teams to adopt secure, observable, and compliant deployment standards voluntarily.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Providing supported, frictionless opt-in paths that guide developers toward best practices is under consideration.",
    options: [
      { id: 'A', text: "Ban all open-source frameworks and force developers to write custom web servers." },
      { id: 'B', text: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice." },
      { id: 'C', text: "Force every individual team to invent custom deployment and infrastructure pipelines from scratch." },
      { id: 'D', text: "Impose punitive mandates that block developers from shipping code without offering viable automated tooling." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Provide 'Golden Paths' (paved roads)—well-supported, automated opt-in workflows that make the right architectural choice the easiest choice. Golden Paths (or Paved Roads) represent supported, frictionless paths that encode best practices for architecture, CI/CD, and security. Rather than enforcing rigid mandates, platform teams make Golden Paths so smooth and self-service that developers choose them willingly.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Golden Paths", "Golden Paths", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-391",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Service Scaffolding and Standardized Starter Kits: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Service Scaffolding to ensure newly created microservices immediately include standard Dockerfiles, health checks, and CI/CD pipelines.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Automating repo creation, linters, Dockerfiles, and CI/CD via software templates is under consideration.",
    options: [
      { id: 'A', text: "Disable containerization and deploy raw scripts directly to production virtual machines." },
      { id: 'B', text: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks." },
      { id: 'C', text: "Instruct developers to copy obsolete codebases from deprecated repositories on developer laptops." },
      { id: 'D', text: "Leave repository configuration entirely up to individual developers with no baseline standards." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks. Service scaffolding tools (like Backstage Scaffolder or Cookiecutter) instantiate new projects from curated templates. These starter kits ensure consistent folder structures, pre-configured linters, multi-stage Dockerfiles, and CI/CD workflows from day one.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/",
    tags: ["Service Scaffolding", "Scaffolding", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-392",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Service Scaffolding and Standardized Starter Kits: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Service Scaffolding to ensure newly created microservices immediately include standard Dockerfiles, health checks, and CI/CD pipelines.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Automating repo creation, linters, Dockerfiles, and CI/CD via software templates is under consideration.",
    options: [
      { id: 'A', text: "Leave repository configuration entirely up to individual developers with no baseline standards." },
      { id: 'B', text: "Disable containerization and deploy raw scripts directly to production virtual machines." },
      { id: 'C', text: "Instruct developers to copy obsolete codebases from deprecated repositories on developer laptops." },
      { id: 'D', text: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks. Service scaffolding tools (like Backstage Scaffolder or Cookiecutter) instantiate new projects from curated templates. These starter kits ensure consistent folder structures, pre-configured linters, multi-stage Dockerfiles, and CI/CD workflows from day one.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/",
    tags: ["Service Scaffolding", "Scaffolding", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-393",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Service Scaffolding and Standardized Starter Kits: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Service Scaffolding to ensure newly created microservices immediately include standard Dockerfiles, health checks, and CI/CD pipelines.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Automating repo creation, linters, Dockerfiles, and CI/CD via software templates is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to copy obsolete codebases from deprecated repositories on developer laptops." },
      { id: 'B', text: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks." },
      { id: 'C', text: "Leave repository configuration entirely up to individual developers with no baseline standards." },
      { id: 'D', text: "Disable containerization and deploy raw scripts directly to production virtual machines." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks. Service scaffolding tools (like Backstage Scaffolder or Cookiecutter) instantiate new projects from curated templates. These starter kits ensure consistent folder structures, pre-configured linters, multi-stage Dockerfiles, and CI/CD workflows from day one.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/",
    tags: ["Service Scaffolding", "Scaffolding", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-394",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Service Scaffolding and Standardized Starter Kits: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Service Scaffolding to ensure newly created microservices immediately include standard Dockerfiles, health checks, and CI/CD pipelines.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Automating repo creation, linters, Dockerfiles, and CI/CD via software templates is under consideration.",
    options: [
      { id: 'A', text: "Leave repository configuration entirely up to individual developers with no baseline standards." },
      { id: 'B', text: "Disable containerization and deploy raw scripts directly to production virtual machines." },
      { id: 'C', text: "Instruct developers to copy obsolete codebases from deprecated repositories on developer laptops." },
      { id: 'D', text: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks. Service scaffolding tools (like Backstage Scaffolder or Cookiecutter) instantiate new projects from curated templates. These starter kits ensure consistent folder structures, pre-configured linters, multi-stage Dockerfiles, and CI/CD workflows from day one.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/",
    tags: ["Service Scaffolding", "Scaffolding", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-395",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Service Scaffolding and Standardized Starter Kits: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Service Scaffolding to ensure newly created microservices immediately include standard Dockerfiles, health checks, and CI/CD pipelines.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Automating repo creation, linters, Dockerfiles, and CI/CD via software templates is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to copy obsolete codebases from deprecated repositories on developer laptops." },
      { id: 'B', text: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks." },
      { id: 'C', text: "Disable containerization and deploy raw scripts directly to production virtual machines." },
      { id: 'D', text: "Leave repository configuration entirely up to individual developers with no baseline standards." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy automated software templates that scaffold new repositories with pre-configured Dockerfiles, pipelines, and observability hooks. Service scaffolding tools (like Backstage Scaffolder or Cookiecutter) instantiate new projects from curated templates. These starter kits ensure consistent folder structures, pre-configured linters, multi-stage Dockerfiles, and CI/CD workflows from day one.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/",
    tags: ["Service Scaffolding", "Scaffolding", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-396",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Reusable CI/CD Workflows and Pipeline Templates: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Reusable Workflows to update a security vulnerability scanner across 500 microservice pipelines simultaneously without modifying individual repositories.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Centralizing build, test, and security scan pipeline definitions across hundreds of repos is under consideration.",
    options: [
      { id: 'A', text: "Manually open 500 individual pull requests editing duplicated pipeline YAML files by hand." },
      { id: 'B', text: "Disable security scanning across all repositories to avoid pipeline maintenance." },
      { id: 'C', text: "Instruct developers to run security scans manually on local workstations before committing code." },
      { id: 'D', text: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates). Modern platforms centralize continuous integration by publishing reusable workflow templates. Repository pipelines simply reference these shared templates, allowing platform teams to update linters, build caches, and security scanners centrally across the entire organization.",
    referenceUrl: "https://docs.github.com/en/actions/sharing-automations/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable CI/CD", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-397",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Reusable CI/CD Workflows and Pipeline Templates: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Reusable Workflows to update a security vulnerability scanner across 500 microservice pipelines simultaneously without modifying individual repositories.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Centralizing build, test, and security scan pipeline definitions across hundreds of repos is under consideration.",
    options: [
      { id: 'A', text: "Disable security scanning across all repositories to avoid pipeline maintenance." },
      { id: 'B', text: "Manually open 500 individual pull requests editing duplicated pipeline YAML files by hand." },
      { id: 'C', text: "Instruct developers to run security scans manually on local workstations before committing code." },
      { id: 'D', text: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates). Modern platforms centralize continuous integration by publishing reusable workflow templates. Repository pipelines simply reference these shared templates, allowing platform teams to update linters, build caches, and security scanners centrally across the entire organization.",
    referenceUrl: "https://docs.github.com/en/actions/sharing-automations/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable CI/CD", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-398",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Reusable CI/CD Workflows and Pipeline Templates: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Reusable Workflows to update a security vulnerability scanner across 500 microservice pipelines simultaneously without modifying individual repositories.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Centralizing build, test, and security scan pipeline definitions across hundreds of repos is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to run security scans manually on local workstations before committing code." },
      { id: 'B', text: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates)." },
      { id: 'C', text: "Disable security scanning across all repositories to avoid pipeline maintenance." },
      { id: 'D', text: "Manually open 500 individual pull requests editing duplicated pipeline YAML files by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates). Modern platforms centralize continuous integration by publishing reusable workflow templates. Repository pipelines simply reference these shared templates, allowing platform teams to update linters, build caches, and security scanners centrally across the entire organization.",
    referenceUrl: "https://docs.github.com/en/actions/sharing-automations/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable CI/CD", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-399",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Reusable CI/CD Workflows and Pipeline Templates: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Reusable Workflows to update a security vulnerability scanner across 500 microservice pipelines simultaneously without modifying individual repositories.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Centralizing build, test, and security scan pipeline definitions across hundreds of repos is under consideration.",
    options: [
      { id: 'A', text: "Disable security scanning across all repositories to avoid pipeline maintenance." },
      { id: 'B', text: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates)." },
      { id: 'C', text: "Instruct developers to run security scans manually on local workstations before committing code." },
      { id: 'D', text: "Manually open 500 individual pull requests editing duplicated pipeline YAML files by hand." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates). Modern platforms centralize continuous integration by publishing reusable workflow templates. Repository pipelines simply reference these shared templates, allowing platform teams to update linters, build caches, and security scanners centrally across the entire organization.",
    referenceUrl: "https://docs.github.com/en/actions/sharing-automations/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable CI/CD", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-400",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Reusable CI/CD Workflows and Pipeline Templates: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Reusable Workflows to update a security vulnerability scanner across 500 microservice pipelines simultaneously without modifying individual repositories.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Centralizing build, test, and security scan pipeline definitions across hundreds of repos is under consideration.",
    options: [
      { id: 'A', text: "Disable security scanning across all repositories to avoid pipeline maintenance." },
      { id: 'B', text: "Manually open 500 individual pull requests editing duplicated pipeline YAML files by hand." },
      { id: 'C', text: "Instruct developers to run security scans manually on local workstations before committing code." },
      { id: 'D', text: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Centralize pipeline definitions into reusable workflow templates (e.g., GitHub Actions reusable workflows or GitLab CI templates). Modern platforms centralize continuous integration by publishing reusable workflow templates. Repository pipelines simply reference these shared templates, allowing platform teams to update linters, build caches, and security scanners centrally across the entire organization.",
    referenceUrl: "https://docs.github.com/en/actions/sharing-automations/reusing-workflows",
    tags: ["Reusable Workflows", "Reusable CI/CD", "Resilience And Observability"]
  }
];

export default CNCF_CNPA_QUESTIONS_16;
