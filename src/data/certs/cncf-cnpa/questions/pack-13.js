export const CNCF_CNPA_QUESTIONS_13 = [
  {
    id: "cncf-cnpa-301",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Workload Autoscaling Substrates: KEDA and Karpenter: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Autoscaling Substrate to scale streaming consumer pods from 0 to 1,000 based on Kafka queue lag and rapidly provision optimized compute nodes.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Event-driven pod autoscaling with KEDA and dynamic node provisioning with Karpenter is under consideration.",
    options: [
      { id: 'A', text: "Require human operators to manually add cloud servers during traffic surges." },
      { id: 'B', text: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning." },
      { id: 'C', text: "Rely exclusively on CPU utilization metrics that lag significantly behind queue message spikes." },
      { id: 'D', text: "Overprovision static high-end compute instances running at 100% capacity 24/7." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning. Modern platform substrates separate pod autoscaling from node provisioning. KEDA scales pods based on event sources (Kafka lag, SQS queues, Prometheus metrics), while Karpenter provisions right-sized EC2/compute instances in seconds directly bypassing node-group constraints.",
    referenceUrl: "https://keda.sh/",
    tags: ["Autoscaling Substrate", "Autoscaling Substrate", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-302",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Workload Autoscaling Substrates: KEDA and Karpenter: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Autoscaling Substrate to scale streaming consumer pods from 0 to 1,000 based on Kafka queue lag and rapidly provision optimized compute nodes.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Event-driven pod autoscaling with KEDA and dynamic node provisioning with Karpenter is under consideration.",
    options: [
      { id: 'A', text: "Overprovision static high-end compute instances running at 100% capacity 24/7." },
      { id: 'B', text: "Require human operators to manually add cloud servers during traffic surges." },
      { id: 'C', text: "Rely exclusively on CPU utilization metrics that lag significantly behind queue message spikes." },
      { id: 'D', text: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning. Modern platform substrates separate pod autoscaling from node provisioning. KEDA scales pods based on event sources (Kafka lag, SQS queues, Prometheus metrics), while Karpenter provisions right-sized EC2/compute instances in seconds directly bypassing node-group constraints.",
    referenceUrl: "https://keda.sh/",
    tags: ["Autoscaling Substrate", "Autoscaling Substrate", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-303",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Workload Autoscaling Substrates: KEDA and Karpenter: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Autoscaling Substrate to scale streaming consumer pods from 0 to 1,000 based on Kafka queue lag and rapidly provision optimized compute nodes.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Event-driven pod autoscaling with KEDA and dynamic node provisioning with Karpenter is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on CPU utilization metrics that lag significantly behind queue message spikes." },
      { id: 'B', text: "Require human operators to manually add cloud servers during traffic surges." },
      { id: 'C', text: "Overprovision static high-end compute instances running at 100% capacity 24/7." },
      { id: 'D', text: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning. Modern platform substrates separate pod autoscaling from node provisioning. KEDA scales pods based on event sources (Kafka lag, SQS queues, Prometheus metrics), while Karpenter provisions right-sized EC2/compute instances in seconds directly bypassing node-group constraints.",
    referenceUrl: "https://keda.sh/",
    tags: ["Autoscaling Substrate", "Autoscaling Substrate", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-304",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Workload Autoscaling Substrates: KEDA and Karpenter: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Autoscaling Substrate to scale streaming consumer pods from 0 to 1,000 based on Kafka queue lag and rapidly provision optimized compute nodes.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Event-driven pod autoscaling with KEDA and dynamic node provisioning with Karpenter is under consideration.",
    options: [
      { id: 'A', text: "Require human operators to manually add cloud servers during traffic surges." },
      { id: 'B', text: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning." },
      { id: 'C', text: "Rely exclusively on CPU utilization metrics that lag significantly behind queue message spikes." },
      { id: 'D', text: "Overprovision static high-end compute instances running at 100% capacity 24/7." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning. Modern platform substrates separate pod autoscaling from node provisioning. KEDA scales pods based on event sources (Kafka lag, SQS queues, Prometheus metrics), while Karpenter provisions right-sized EC2/compute instances in seconds directly bypassing node-group constraints.",
    referenceUrl: "https://keda.sh/",
    tags: ["Autoscaling Substrate", "Autoscaling Substrate", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-305",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Workload Autoscaling Substrates: KEDA and Karpenter: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Autoscaling Substrate to scale streaming consumer pods from 0 to 1,000 based on Kafka queue lag and rapidly provision optimized compute nodes.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Event-driven pod autoscaling with KEDA and dynamic node provisioning with Karpenter is under consideration.",
    options: [
      { id: 'A', text: "Rely exclusively on CPU utilization metrics that lag significantly behind queue message spikes." },
      { id: 'B', text: "Overprovision static high-end compute instances running at 100% capacity 24/7." },
      { id: 'C', text: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning." },
      { id: 'D', text: "Require human operators to manually add cloud servers during traffic surges." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Combine Kubernetes Event-driven Autoscaling (KEDA) for queue-based pod scaling with Karpenter for just-in-time compute node provisioning. Modern platform substrates separate pod autoscaling from node provisioning. KEDA scales pods based on event sources (Kafka lag, SQS queues, Prometheus metrics), while Karpenter provisions right-sized EC2/compute instances in seconds directly bypassing node-group constraints.",
    referenceUrl: "https://keda.sh/",
    tags: ["Autoscaling Substrate", "Autoscaling Substrate", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-306",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Edge and Hybrid Cloud Substrates: Lightweight K3s and WAN Tolerance: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Edge Substrates to operate microservices across thousands of edge retail kiosks that must continue transacting even during regional internet outages.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Deploying lightweight Kubernetes (K3s) with autonomous edge operation and intermittent connectivity is under consideration.",
    options: [
      { id: 'A', text: "Require a continuous high-speed fiber-optic connection to centralized cloud control planes to process every local transaction." },
      { id: 'B', text: "Disable local container storage and pull images over 2G cellular connections on every pod restart." },
      { id: 'C', text: "Run full-scale high-availability production control planes requiring 32 CPU cores on every single edge kiosk." },
      { id: 'D', text: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition. Edge platform substrates utilize lightweight Kubernetes distributions like CNCF K3s. Packaged as a single binary with bundled SQLite/etcd, K3s provides autonomous local scheduling and fault tolerance during WAN disconnects.",
    referenceUrl: "https://k3s.io/",
    tags: ["Edge Substrates", "Edge Substrates", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-307",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Edge and Hybrid Cloud Substrates: Lightweight K3s and WAN Tolerance: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Edge Substrates to operate microservices across thousands of edge retail kiosks that must continue transacting even during regional internet outages.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Deploying lightweight Kubernetes (K3s) with autonomous edge operation and intermittent connectivity is under consideration.",
    options: [
      { id: 'A', text: "Disable local container storage and pull images over 2G cellular connections on every pod restart." },
      { id: 'B', text: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition." },
      { id: 'C', text: "Run full-scale high-availability production control planes requiring 32 CPU cores on every single edge kiosk." },
      { id: 'D', text: "Require a continuous high-speed fiber-optic connection to centralized cloud control planes to process every local transaction." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition. Edge platform substrates utilize lightweight Kubernetes distributions like CNCF K3s. Packaged as a single binary with bundled SQLite/etcd, K3s provides autonomous local scheduling and fault tolerance during WAN disconnects.",
    referenceUrl: "https://k3s.io/",
    tags: ["Edge Substrates", "Edge Substrates", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-308",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Edge and Hybrid Cloud Substrates: Lightweight K3s and WAN Tolerance: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Edge Substrates to operate microservices across thousands of edge retail kiosks that must continue transacting even during regional internet outages.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Deploying lightweight Kubernetes (K3s) with autonomous edge operation and intermittent connectivity is under consideration.",
    options: [
      { id: 'A', text: "Require a continuous high-speed fiber-optic connection to centralized cloud control planes to process every local transaction." },
      { id: 'B', text: "Disable local container storage and pull images over 2G cellular connections on every pod restart." },
      { id: 'C', text: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition." },
      { id: 'D', text: "Run full-scale high-availability production control planes requiring 32 CPU cores on every single edge kiosk." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition. Edge platform substrates utilize lightweight Kubernetes distributions like CNCF K3s. Packaged as a single binary with bundled SQLite/etcd, K3s provides autonomous local scheduling and fault tolerance during WAN disconnects.",
    referenceUrl: "https://k3s.io/",
    tags: ["Edge Substrates", "Edge Substrates", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-309",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Edge and Hybrid Cloud Substrates: Lightweight K3s and WAN Tolerance: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Edge Substrates to operate microservices across thousands of edge retail kiosks that must continue transacting even during regional internet outages.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Deploying lightweight Kubernetes (K3s) with autonomous edge operation and intermittent connectivity is under consideration.",
    options: [
      { id: 'A', text: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition." },
      { id: 'B', text: "Require a continuous high-speed fiber-optic connection to centralized cloud control planes to process every local transaction." },
      { id: 'C', text: "Run full-scale high-availability production control planes requiring 32 CPU cores on every single edge kiosk." },
      { id: 'D', text: "Disable local container storage and pull images over 2G cellular connections on every pod restart." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition. Edge platform substrates utilize lightweight Kubernetes distributions like CNCF K3s. Packaged as a single binary with bundled SQLite/etcd, K3s provides autonomous local scheduling and fault tolerance during WAN disconnects.",
    referenceUrl: "https://k3s.io/",
    tags: ["Edge Substrates", "Edge Substrates", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-310",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d1",
    domainName: "Cloud Native Architecture and Substrates",
    title: "Edge and Hybrid Cloud Substrates: Lightweight K3s and WAN Tolerance: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Edge Substrates to operate microservices across thousands of edge retail kiosks that must continue transacting even during regional internet outages.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Deploying lightweight Kubernetes (K3s) with autonomous edge operation and intermittent connectivity is under consideration.",
    options: [
      { id: 'A', text: "Require a continuous high-speed fiber-optic connection to centralized cloud control planes to process every local transaction." },
      { id: 'B', text: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition." },
      { id: 'C', text: "Disable local container storage and pull images over 2G cellular connections on every pod restart." },
      { id: 'D', text: "Run full-scale high-availability production control planes requiring 32 CPU cores on every single edge kiosk." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy lightweight K3s clusters engineered for resource efficiency and autonomous local operation during network partition. Edge platform substrates utilize lightweight Kubernetes distributions like CNCF K3s. Packaged as a single binary with bundled SQLite/etcd, K3s provides autonomous local scheduling and fault tolerance during WAN disconnects.",
    referenceUrl: "https://k3s.io/",
    tags: ["Edge Substrates", "Edge Substrates", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-311",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform as a Product (PaaP) Principles: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Platform as a Product to transition a traditional ticket-based infrastructure operations team into a modern high-performing platform engineering organization.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Treating internal developers as customers, establishing product roadmaps, and measuring developer satisfaction is under consideration.",
    options: [
      { id: 'A', text: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics." },
      { id: 'B', text: "Require developers to file IT support tickets for every single routine change." },
      { id: 'C', text: "Force developers to use rigid, mandate-driven tooling without gathering feedback or measuring developer friction." },
      { id: 'D', text: "Treat the internal platform as a one-off project that receives no maintenance after launch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics. Platform as a Product (PaaP) is the foundational philosophy of platform engineering. Instead of treating infrastructure as a gatekeeping function, platform teams treat internal developers as customers, establishing roadmaps, measuring Net Promoter Scores (NPS), and optimizing for user adoption.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Platform as a Product", "Platform as Product", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-312",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform as a Product (PaaP) Principles: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Platform as a Product to transition a traditional ticket-based infrastructure operations team into a modern high-performing platform engineering organization.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Treating internal developers as customers, establishing product roadmaps, and measuring developer satisfaction is under consideration.",
    options: [
      { id: 'A', text: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics." },
      { id: 'B', text: "Force developers to use rigid, mandate-driven tooling without gathering feedback or measuring developer friction." },
      { id: 'C', text: "Treat the internal platform as a one-off project that receives no maintenance after launch." },
      { id: 'D', text: "Require developers to file IT support tickets for every single routine change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics. Platform as a Product (PaaP) is the foundational philosophy of platform engineering. Instead of treating infrastructure as a gatekeeping function, platform teams treat internal developers as customers, establishing roadmaps, measuring Net Promoter Scores (NPS), and optimizing for user adoption.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Platform as a Product", "Platform as Product", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-313",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform as a Product (PaaP) Principles: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Platform as a Product to transition a traditional ticket-based infrastructure operations team into a modern high-performing platform engineering organization.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Treating internal developers as customers, establishing product roadmaps, and measuring developer satisfaction is under consideration.",
    options: [
      { id: 'A', text: "Force developers to use rigid, mandate-driven tooling without gathering feedback or measuring developer friction." },
      { id: 'B', text: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics." },
      { id: 'C', text: "Treat the internal platform as a one-off project that receives no maintenance after launch." },
      { id: 'D', text: "Require developers to file IT support tickets for every single routine change." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics. Platform as a Product (PaaP) is the foundational philosophy of platform engineering. Instead of treating infrastructure as a gatekeeping function, platform teams treat internal developers as customers, establishing roadmaps, measuring Net Promoter Scores (NPS), and optimizing for user adoption.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Platform as a Product", "Platform as Product", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-314",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform as a Product (PaaP) Principles: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Platform as a Product to transition a traditional ticket-based infrastructure operations team into a modern high-performing platform engineering organization.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Treating internal developers as customers, establishing product roadmaps, and measuring developer satisfaction is under consideration.",
    options: [
      { id: 'A', text: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics." },
      { id: 'B', text: "Require developers to file IT support tickets for every single routine change." },
      { id: 'C', text: "Force developers to use rigid, mandate-driven tooling without gathering feedback or measuring developer friction." },
      { id: 'D', text: "Treat the internal platform as a one-off project that receives no maintenance after launch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics. Platform as a Product (PaaP) is the foundational philosophy of platform engineering. Instead of treating infrastructure as a gatekeeping function, platform teams treat internal developers as customers, establishing roadmaps, measuring Net Promoter Scores (NPS), and optimizing for user adoption.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Platform as a Product", "Platform as Product", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-315",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Platform as a Product (PaaP) Principles: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Platform as a Product to transition a traditional ticket-based infrastructure operations team into a modern high-performing platform engineering organization.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Treating internal developers as customers, establishing product roadmaps, and measuring developer satisfaction is under consideration.",
    options: [
      { id: 'A', text: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics." },
      { id: 'B', text: "Force developers to use rigid, mandate-driven tooling without gathering feedback or measuring developer friction." },
      { id: 'C', text: "Treat the internal platform as a one-off project that receives no maintenance after launch." },
      { id: 'D', text: "Require developers to file IT support tickets for every single routine change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt Platform as a Product (PaaP): treat internal developers as customers, gather user feedback, and measure DevEx metrics. Platform as a Product (PaaP) is the foundational philosophy of platform engineering. Instead of treating infrastructure as a gatekeeping function, platform teams treat internal developers as customers, establishing roadmaps, measuring Net Promoter Scores (NPS), and optimizing for user adoption.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Platform as a Product", "Platform as Product", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-316",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Thinnest Viable Platform (TVP) Concept: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Thinnest Viable Platform to deliver immediate developer velocity improvements without building an overly complex, unmaintainable in-house platform monolith.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Minimizing platform cognitive load and avoiding over-engineering (Team Topologies) is under consideration.",
    options: [
      { id: 'A', text: "Over-engineer complex custom systems before identifying developer pain points." },
      { id: 'B', text: "Spend two years writing a proprietary, custom-coded cloud orchestrator from scratch." },
      { id: 'C', text: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks." },
      { id: 'D', text: "Expose raw cloud provider infrastructure consoles with no abstractions or documentation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks. The Thinnest Viable Platform (TVP) concept, popularized by Team Topologies, advocates for building the minimum necessary abstraction layer. Platform teams avoid over-engineering by utilizing existing cloud-native tools and focusing strictly on eliminating developer friction.",
    referenceUrl: "https://teamtopologies.com/key-concepts-content/what-is-a-thinnest-viable-platform-tvp",
    tags: ["Thinnest Viable Platform", "TVP", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-317",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Thinnest Viable Platform (TVP) Concept: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Thinnest Viable Platform to deliver immediate developer velocity improvements without building an overly complex, unmaintainable in-house platform monolith.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Minimizing platform cognitive load and avoiding over-engineering (Team Topologies) is under consideration.",
    options: [
      { id: 'A', text: "Expose raw cloud provider infrastructure consoles with no abstractions or documentation." },
      { id: 'B', text: "Spend two years writing a proprietary, custom-coded cloud orchestrator from scratch." },
      { id: 'C', text: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks." },
      { id: 'D', text: "Over-engineer complex custom systems before identifying developer pain points." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks. The Thinnest Viable Platform (TVP) concept, popularized by Team Topologies, advocates for building the minimum necessary abstraction layer. Platform teams avoid over-engineering by utilizing existing cloud-native tools and focusing strictly on eliminating developer friction.",
    referenceUrl: "https://teamtopologies.com/key-concepts-content/what-is-a-thinnest-viable-platform-tvp",
    tags: ["Thinnest Viable Platform", "TVP", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-318",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Thinnest Viable Platform (TVP) Concept: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Thinnest Viable Platform to deliver immediate developer velocity improvements without building an overly complex, unmaintainable in-house platform monolith.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Minimizing platform cognitive load and avoiding over-engineering (Team Topologies) is under consideration.",
    options: [
      { id: 'A', text: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks." },
      { id: 'B', text: "Expose raw cloud provider infrastructure consoles with no abstractions or documentation." },
      { id: 'C', text: "Spend two years writing a proprietary, custom-coded cloud orchestrator from scratch." },
      { id: 'D', text: "Over-engineer complex custom systems before identifying developer pain points." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks. The Thinnest Viable Platform (TVP) concept, popularized by Team Topologies, advocates for building the minimum necessary abstraction layer. Platform teams avoid over-engineering by utilizing existing cloud-native tools and focusing strictly on eliminating developer friction.",
    referenceUrl: "https://teamtopologies.com/key-concepts-content/what-is-a-thinnest-viable-platform-tvp",
    tags: ["Thinnest Viable Platform", "TVP", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-319",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Thinnest Viable Platform (TVP) Concept: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Thinnest Viable Platform to deliver immediate developer velocity improvements without building an overly complex, unmaintainable in-house platform monolith.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Minimizing platform cognitive load and avoiding over-engineering (Team Topologies) is under consideration.",
    options: [
      { id: 'A', text: "Expose raw cloud provider infrastructure consoles with no abstractions or documentation." },
      { id: 'B', text: "Over-engineer complex custom systems before identifying developer pain points." },
      { id: 'C', text: "Spend two years writing a proprietary, custom-coded cloud orchestrator from scratch." },
      { id: 'D', text: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks. The Thinnest Viable Platform (TVP) concept, popularized by Team Topologies, advocates for building the minimum necessary abstraction layer. Platform teams avoid over-engineering by utilizing existing cloud-native tools and focusing strictly on eliminating developer friction.",
    referenceUrl: "https://teamtopologies.com/key-concepts-content/what-is-a-thinnest-viable-platform-tvp",
    tags: ["Thinnest Viable Platform", "TVP", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-320",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Thinnest Viable Platform (TVP) Concept: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Thinnest Viable Platform to deliver immediate developer velocity improvements without building an overly complex, unmaintainable in-house platform monolith.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Minimizing platform cognitive load and avoiding over-engineering (Team Topologies) is under consideration.",
    options: [
      { id: 'A', text: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks." },
      { id: 'B', text: "Over-engineer complex custom systems before identifying developer pain points." },
      { id: 'C', text: "Expose raw cloud provider infrastructure consoles with no abstractions or documentation." },
      { id: 'D', text: "Spend two years writing a proprietary, custom-coded cloud orchestrator from scratch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Build a Thinnest Viable Platform (TVP) by leveraging established open-source tools and abstracting only the highest-friction bottlenecks. The Thinnest Viable Platform (TVP) concept, popularized by Team Topologies, advocates for building the minimum necessary abstraction layer. Platform teams avoid over-engineering by utilizing existing cloud-native tools and focusing strictly on eliminating developer friction.",
    referenceUrl: "https://teamtopologies.com/key-concepts-content/what-is-a-thinnest-viable-platform-tvp",
    tags: ["Thinnest Viable Platform", "TVP", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-321",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Portals vs Developer Platforms: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Portal vs Platform to clarify organizational terminology and architectural boundaries when designing internal developer tooling.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Distinguishing the UI/UX frontend (Backstage/Port) from the underlying platform orchestrators and substrates is under consideration.",
    options: [
      { id: 'A', text: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines)." },
      { id: 'B', text: "Assume the developer portal and the developer platform are completely identical terms with no architectural distinction." },
      { id: 'C', text: "Build developer portals without any underlying automation or orchestration engine." },
      { id: 'D', text: "Replace all underlying cloud infrastructure, databases, and CI/CD pipelines with a single standalone React website." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines). A Developer Portal (such as Backstage or Port) is the frontend pane of glass providing service discovery, documentation, and UI forms. The Developer Platform is the broader socio-technical system encompassing control planes, CI/CD, security policies, and cloud infrastructure.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Portal vs Platform", "Portal vs Platform", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-322",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Portals vs Developer Platforms: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Portal vs Platform to clarify organizational terminology and architectural boundaries when designing internal developer tooling.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Distinguishing the UI/UX frontend (Backstage/Port) from the underlying platform orchestrators and substrates is under consideration.",
    options: [
      { id: 'A', text: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines)." },
      { id: 'B', text: "Build developer portals without any underlying automation or orchestration engine." },
      { id: 'C', text: "Assume the developer portal and the developer platform are completely identical terms with no architectural distinction." },
      { id: 'D', text: "Replace all underlying cloud infrastructure, databases, and CI/CD pipelines with a single standalone React website." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines). A Developer Portal (such as Backstage or Port) is the frontend pane of glass providing service discovery, documentation, and UI forms. The Developer Platform is the broader socio-technical system encompassing control planes, CI/CD, security policies, and cloud infrastructure.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Portal vs Platform", "Portal vs Platform", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-323",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Portals vs Developer Platforms: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Portal vs Platform to clarify organizational terminology and architectural boundaries when designing internal developer tooling.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Distinguishing the UI/UX frontend (Backstage/Port) from the underlying platform orchestrators and substrates is under consideration.",
    options: [
      { id: 'A', text: "Replace all underlying cloud infrastructure, databases, and CI/CD pipelines with a single standalone React website." },
      { id: 'B', text: "Build developer portals without any underlying automation or orchestration engine." },
      { id: 'C', text: "Assume the developer portal and the developer platform are completely identical terms with no architectural distinction." },
      { id: 'D', text: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines). A Developer Portal (such as Backstage or Port) is the frontend pane of glass providing service discovery, documentation, and UI forms. The Developer Platform is the broader socio-technical system encompassing control planes, CI/CD, security policies, and cloud infrastructure.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Portal vs Platform", "Portal vs Platform", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-324",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Portals vs Developer Platforms: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Portal vs Platform to clarify organizational terminology and architectural boundaries when designing internal developer tooling.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Distinguishing the UI/UX frontend (Backstage/Port) from the underlying platform orchestrators and substrates is under consideration.",
    options: [
      { id: 'A', text: "Build developer portals without any underlying automation or orchestration engine." },
      { id: 'B', text: "Replace all underlying cloud infrastructure, databases, and CI/CD pipelines with a single standalone React website." },
      { id: 'C', text: "Assume the developer portal and the developer platform are completely identical terms with no architectural distinction." },
      { id: 'D', text: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines). A Developer Portal (such as Backstage or Port) is the frontend pane of glass providing service discovery, documentation, and UI forms. The Developer Platform is the broader socio-technical system encompassing control planes, CI/CD, security policies, and cloud infrastructure.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Portal vs Platform", "Portal vs Platform", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-325",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d2",
    domainName: "Internal Developer Platforms and Portals",
    title: "Developer Portals vs Developer Platforms: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Portal vs Platform to clarify organizational terminology and architectural boundaries when designing internal developer tooling.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Distinguishing the UI/UX frontend (Backstage/Port) from the underlying platform orchestrators and substrates is under consideration.",
    options: [
      { id: 'A', text: "Assume the developer portal and the developer platform are completely identical terms with no architectural distinction." },
      { id: 'B', text: "Replace all underlying cloud infrastructure, databases, and CI/CD pipelines with a single standalone React website." },
      { id: 'C', text: "Build developer portals without any underlying automation or orchestration engine." },
      { id: 'D', text: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Recognize the Developer Portal as the user interface layer (e.g., Backstage) and the Developer Platform as the complete engine (orchestrators, substrates, pipelines). A Developer Portal (such as Backstage or Port) is the frontend pane of glass providing service discovery, documentation, and UI forms. The Developer Platform is the broader socio-technical system encompassing control planes, CI/CD, security policies, and cloud infrastructure.",
    referenceUrl: "https://www.cncf.io/reports/cloud-native-platform-engineering-whitepaper/",
    tags: ["Portal vs Platform", "Portal vs Platform", "Resilience And Observability"]
  }
];

export default CNCF_CNPA_QUESTIONS_13;
