export const CNCF_CNPE_QUESTIONS_13 = [
  {
    id: "cncf-cnpe-301",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Type-Safe Configuration Engines: CUE and KCL: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Configuration Engines to eliminate runtime YAML syntax errors and validate complex configuration constraints before manifests are applied to clusters.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Replacing complex templating with constraint-based, type-safe configuration languages like CUE or KCL is under consideration.",
    options: [
      { id: 'A', text: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML." },
      { id: 'B', text: "Rely on string concatenation inside unvalidated bash scripts to construct multi-thousand line YAML files." },
      { id: 'C', text: "Deploy unvalidated manifests and discover syntax errors during production rollouts." },
      { id: 'D', text: "Ban configuration tooling and write raw JSON directly into etcd sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML. Modern platforms replace fragile string-based templating (like raw Helm YAML templates) with type-safe configuration languages like CUE or KCL. These languages treat configuration as data, providing mathematical constraint validation, inheritance, and compile-time error detection.",
    referenceUrl: "https://cuelang.org/",
    tags: ["Configuration Engines", "Configuration Engines", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-302",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Type-Safe Configuration Engines: CUE and KCL: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Configuration Engines to eliminate runtime YAML syntax errors and validate complex configuration constraints before manifests are applied to clusters.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Replacing complex templating with constraint-based, type-safe configuration languages like CUE or KCL is under consideration.",
    options: [
      { id: 'A', text: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML." },
      { id: 'B', text: "Rely on string concatenation inside unvalidated bash scripts to construct multi-thousand line YAML files." },
      { id: 'C', text: "Deploy unvalidated manifests and discover syntax errors during production rollouts." },
      { id: 'D', text: "Ban configuration tooling and write raw JSON directly into etcd sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML. Modern platforms replace fragile string-based templating (like raw Helm YAML templates) with type-safe configuration languages like CUE or KCL. These languages treat configuration as data, providing mathematical constraint validation, inheritance, and compile-time error detection.",
    referenceUrl: "https://cuelang.org/",
    tags: ["Configuration Engines", "Configuration Engines", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-303",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Type-Safe Configuration Engines: CUE and KCL: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Configuration Engines to eliminate runtime YAML syntax errors and validate complex configuration constraints before manifests are applied to clusters.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Replacing complex templating with constraint-based, type-safe configuration languages like CUE or KCL is under consideration.",
    options: [
      { id: 'A', text: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML." },
      { id: 'B', text: "Rely on string concatenation inside unvalidated bash scripts to construct multi-thousand line YAML files." },
      { id: 'C', text: "Deploy unvalidated manifests and discover syntax errors during production rollouts." },
      { id: 'D', text: "Ban configuration tooling and write raw JSON directly into etcd sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML. Modern platforms replace fragile string-based templating (like raw Helm YAML templates) with type-safe configuration languages like CUE or KCL. These languages treat configuration as data, providing mathematical constraint validation, inheritance, and compile-time error detection.",
    referenceUrl: "https://cuelang.org/",
    tags: ["Configuration Engines", "Configuration Engines", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-304",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Type-Safe Configuration Engines: CUE and KCL: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Configuration Engines to eliminate runtime YAML syntax errors and validate complex configuration constraints before manifests are applied to clusters.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Replacing complex templating with constraint-based, type-safe configuration languages like CUE or KCL is under consideration.",
    options: [
      { id: 'A', text: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML." },
      { id: 'B', text: "Rely on string concatenation inside unvalidated bash scripts to construct multi-thousand line YAML files." },
      { id: 'C', text: "Deploy unvalidated manifests and discover syntax errors during production rollouts." },
      { id: 'D', text: "Ban configuration tooling and write raw JSON directly into etcd sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML. Modern platforms replace fragile string-based templating (like raw Helm YAML templates) with type-safe configuration languages like CUE or KCL. These languages treat configuration as data, providing mathematical constraint validation, inheritance, and compile-time error detection.",
    referenceUrl: "https://cuelang.org/",
    tags: ["Configuration Engines", "Configuration Engines", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-305",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Type-Safe Configuration Engines: CUE and KCL: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Configuration Engines to eliminate runtime YAML syntax errors and validate complex configuration constraints before manifests are applied to clusters.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Replacing complex templating with constraint-based, type-safe configuration languages like CUE or KCL is under consideration.",
    options: [
      { id: 'A', text: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML." },
      { id: 'B', text: "Rely on string concatenation inside unvalidated bash scripts to construct multi-thousand line YAML files." },
      { id: 'C', text: "Deploy unvalidated manifests and discover syntax errors during production rollouts." },
      { id: 'D', text: "Ban configuration tooling and write raw JSON directly into etcd sockets." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt type-safe configuration languages like CUE or KCL to validate schemas, enforce constraints, and generate clean Kubernetes YAML. Modern platforms replace fragile string-based templating (like raw Helm YAML templates) with type-safe configuration languages like CUE or KCL. These languages treat configuration as data, providing mathematical constraint validation, inheritance, and compile-time error detection.",
    referenceUrl: "https://cuelang.org/",
    tags: ["Configuration Engines", "Configuration Engines", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-306",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform Architecture Alignment with Team Topologies: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Team Topologies to structure enterprise engineering teams to minimize organizational friction and eliminate dependency bottlenecks between ops and product.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Structuring Platform Teams, Stream-Aligned Teams, and Enabling Teams to maximize delivery flow is under consideration.",
    options: [
      { id: 'A', text: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams." },
      { id: 'B', text: "Recreate a traditional siloed operations gatekeeper team that executes all deployments via manual tickets." },
      { id: 'C', text: "Embed a dedicated infrastructure engineer into every single product team with no centralized platform standards." },
      { id: 'D', text: "Eliminate all operations roles and force product managers to configure Linux kernel drivers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams. Team Topologies provides the organizational blueprint for platform engineering. It defines four team types: Stream-Aligned (product delivery), Platform (self-service product for devs), Enabling (upskilling), and Complicated-Subsystem, with clear interaction modes (X-as-a-Service, Facilitating).",
    referenceUrl: "https://teamtopologies.com/key-concepts",
    tags: ["Team Topologies", "Team Topologies", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-307",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform Architecture Alignment with Team Topologies: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Team Topologies to structure enterprise engineering teams to minimize organizational friction and eliminate dependency bottlenecks between ops and product.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Structuring Platform Teams, Stream-Aligned Teams, and Enabling Teams to maximize delivery flow is under consideration.",
    options: [
      { id: 'A', text: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams." },
      { id: 'B', text: "Recreate a traditional siloed operations gatekeeper team that executes all deployments via manual tickets." },
      { id: 'C', text: "Embed a dedicated infrastructure engineer into every single product team with no centralized platform standards." },
      { id: 'D', text: "Eliminate all operations roles and force product managers to configure Linux kernel drivers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams. Team Topologies provides the organizational blueprint for platform engineering. It defines four team types: Stream-Aligned (product delivery), Platform (self-service product for devs), Enabling (upskilling), and Complicated-Subsystem, with clear interaction modes (X-as-a-Service, Facilitating).",
    referenceUrl: "https://teamtopologies.com/key-concepts",
    tags: ["Team Topologies", "Team Topologies", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-308",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform Architecture Alignment with Team Topologies: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Team Topologies to structure enterprise engineering teams to minimize organizational friction and eliminate dependency bottlenecks between ops and product.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Structuring Platform Teams, Stream-Aligned Teams, and Enabling Teams to maximize delivery flow is under consideration.",
    options: [
      { id: 'A', text: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams." },
      { id: 'B', text: "Recreate a traditional siloed operations gatekeeper team that executes all deployments via manual tickets." },
      { id: 'C', text: "Embed a dedicated infrastructure engineer into every single product team with no centralized platform standards." },
      { id: 'D', text: "Eliminate all operations roles and force product managers to configure Linux kernel drivers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams. Team Topologies provides the organizational blueprint for platform engineering. It defines four team types: Stream-Aligned (product delivery), Platform (self-service product for devs), Enabling (upskilling), and Complicated-Subsystem, with clear interaction modes (X-as-a-Service, Facilitating).",
    referenceUrl: "https://teamtopologies.com/key-concepts",
    tags: ["Team Topologies", "Team Topologies", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-309",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform Architecture Alignment with Team Topologies: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Team Topologies to structure enterprise engineering teams to minimize organizational friction and eliminate dependency bottlenecks between ops and product.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Structuring Platform Teams, Stream-Aligned Teams, and Enabling Teams to maximize delivery flow is under consideration.",
    options: [
      { id: 'A', text: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams." },
      { id: 'B', text: "Recreate a traditional siloed operations gatekeeper team that executes all deployments via manual tickets." },
      { id: 'C', text: "Embed a dedicated infrastructure engineer into every single product team with no centralized platform standards." },
      { id: 'D', text: "Eliminate all operations roles and force product managers to configure Linux kernel drivers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams. Team Topologies provides the organizational blueprint for platform engineering. It defines four team types: Stream-Aligned (product delivery), Platform (self-service product for devs), Enabling (upskilling), and Complicated-Subsystem, with clear interaction modes (X-as-a-Service, Facilitating).",
    referenceUrl: "https://teamtopologies.com/key-concepts",
    tags: ["Team Topologies", "Team Topologies", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-310",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform Architecture Alignment with Team Topologies: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Team Topologies to structure enterprise engineering teams to minimize organizational friction and eliminate dependency bottlenecks between ops and product.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Structuring Platform Teams, Stream-Aligned Teams, and Enabling Teams to maximize delivery flow is under consideration.",
    options: [
      { id: 'A', text: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams." },
      { id: 'B', text: "Recreate a traditional siloed operations gatekeeper team that executes all deployments via manual tickets." },
      { id: 'C', text: "Embed a dedicated infrastructure engineer into every single product team with no centralized platform standards." },
      { id: 'D', text: "Eliminate all operations roles and force product managers to configure Linux kernel drivers." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize teams following Team Topologies: establish a dedicated Platform Team delivering self-service capabilities to Stream-Aligned Teams. Team Topologies provides the organizational blueprint for platform engineering. It defines four team types: Stream-Aligned (product delivery), Platform (self-service product for devs), Enabling (upskilling), and Complicated-Subsystem, with clear interaction modes (X-as-a-Service, Facilitating).",
    referenceUrl: "https://teamtopologies.com/key-concepts",
    tags: ["Team Topologies", "Team Topologies", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-311",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Advanced Backstage Scaffolder Custom Action Engineering: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Scaffolder Custom Actions to extend the Backstage portal to automate custom enterprise CMDB registration and cloud IPAM subnet reservation securely.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Authoring enterprise custom scaffolder actions in TypeScript with worker isolation and secret masking is under consideration.",
    options: [
      { id: 'A', text: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`." },
      { id: 'B', text: "Execute unvalidated arbitrary shell commands on the host operating system with root privileges." },
      { id: 'C', text: "Print sensitive cloud API tokens in plaintext to application console logs." },
      { id: 'D', text: "Instruct developers to submit manual tickets to network administrators for subnet allocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`. Enterprise platform engineers author custom Scaffolder actions in Backstage (`createTemplateAction`). By declaring strict input schemas, sanitizing logs, utilizing `ctx.secrets`, and handling timeouts, platform actions safely orchestrate internal enterprise systems.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Scaffolder Custom Actions", "Scaffolder Actions", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-312",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Advanced Backstage Scaffolder Custom Action Engineering: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Scaffolder Custom Actions to extend the Backstage portal to automate custom enterprise CMDB registration and cloud IPAM subnet reservation securely.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Authoring enterprise custom scaffolder actions in TypeScript with worker isolation and secret masking is under consideration.",
    options: [
      { id: 'A', text: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`." },
      { id: 'B', text: "Execute unvalidated arbitrary shell commands on the host operating system with root privileges." },
      { id: 'C', text: "Print sensitive cloud API tokens in plaintext to application console logs." },
      { id: 'D', text: "Instruct developers to submit manual tickets to network administrators for subnet allocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`. Enterprise platform engineers author custom Scaffolder actions in Backstage (`createTemplateAction`). By declaring strict input schemas, sanitizing logs, utilizing `ctx.secrets`, and handling timeouts, platform actions safely orchestrate internal enterprise systems.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Scaffolder Custom Actions", "Scaffolder Actions", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-313",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Advanced Backstage Scaffolder Custom Action Engineering: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Scaffolder Custom Actions to extend the Backstage portal to automate custom enterprise CMDB registration and cloud IPAM subnet reservation securely.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Authoring enterprise custom scaffolder actions in TypeScript with worker isolation and secret masking is under consideration.",
    options: [
      { id: 'A', text: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`." },
      { id: 'B', text: "Execute unvalidated arbitrary shell commands on the host operating system with root privileges." },
      { id: 'C', text: "Print sensitive cloud API tokens in plaintext to application console logs." },
      { id: 'D', text: "Instruct developers to submit manual tickets to network administrators for subnet allocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`. Enterprise platform engineers author custom Scaffolder actions in Backstage (`createTemplateAction`). By declaring strict input schemas, sanitizing logs, utilizing `ctx.secrets`, and handling timeouts, platform actions safely orchestrate internal enterprise systems.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Scaffolder Custom Actions", "Scaffolder Actions", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-314",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Advanced Backstage Scaffolder Custom Action Engineering: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Scaffolder Custom Actions to extend the Backstage portal to automate custom enterprise CMDB registration and cloud IPAM subnet reservation securely.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Authoring enterprise custom scaffolder actions in TypeScript with worker isolation and secret masking is under consideration.",
    options: [
      { id: 'A', text: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`." },
      { id: 'B', text: "Execute unvalidated arbitrary shell commands on the host operating system with root privileges." },
      { id: 'C', text: "Print sensitive cloud API tokens in plaintext to application console logs." },
      { id: 'D', text: "Instruct developers to submit manual tickets to network administrators for subnet allocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`. Enterprise platform engineers author custom Scaffolder actions in Backstage (`createTemplateAction`). By declaring strict input schemas, sanitizing logs, utilizing `ctx.secrets`, and handling timeouts, platform actions safely orchestrate internal enterprise systems.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Scaffolder Custom Actions", "Scaffolder Actions", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-315",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Advanced Backstage Scaffolder Custom Action Engineering: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Scaffolder Custom Actions to extend the Backstage portal to automate custom enterprise CMDB registration and cloud IPAM subnet reservation securely.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Authoring enterprise custom scaffolder actions in TypeScript with worker isolation and secret masking is under consideration.",
    options: [
      { id: 'A', text: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`." },
      { id: 'B', text: "Execute unvalidated arbitrary shell commands on the host operating system with root privileges." },
      { id: 'C', text: "Print sensitive cloud API tokens in plaintext to application console logs." },
      { id: 'D', text: "Instruct developers to submit manual tickets to network administrators for subnet allocation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author custom Scaffolder actions in TypeScript with strict JSONSchema validation, worker error handling, and masked `ctx.secrets`. Enterprise platform engineers author custom Scaffolder actions in Backstage (`createTemplateAction`). By declaring strict input schemas, sanitizing logs, utilizing `ctx.secrets`, and handling timeouts, platform actions safely orchestrate internal enterprise systems.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/writing-custom-actions",
    tags: ["Scaffolder Custom Actions", "Scaffolder Actions", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-316",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Internal Developer Portal Blueprints: Port and Reshape: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Portal Blueprints to build an internal developer portal data model that connects microservices, cloud resources, deployment environments, and on-call schedules.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Defining data models, entity blueprints, and action schemas in modern developer portals is under consideration.",
    options: [
      { id: 'A', text: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies." },
      { id: 'B', text: "Maintain service lists in disconnected, unversioned spreadsheet documents on local workstations." },
      { id: 'C', text: "Prohibit developers from discovering existing microservices to prevent reuse." },
      { id: 'D', text: "Store portal data in temporary memory that resets on browser tab refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies. Modern developer portals use flexible blueprint systems. Platform engineers define entities (Services, Packages, Environments, Cloud Resources) and their relationships, creating an interactive, real-time knowledge graph that drives self-service automation.",
    referenceUrl: "https://www.getport.io/docs/build-your-software-catalog/sync-data-to-catalog/blueprints",
    tags: ["Portal Blueprints", "Portal Blueprints", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-317",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Internal Developer Portal Blueprints: Port and Reshape: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Portal Blueprints to build an internal developer portal data model that connects microservices, cloud resources, deployment environments, and on-call schedules.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Defining data models, entity blueprints, and action schemas in modern developer portals is under consideration.",
    options: [
      { id: 'A', text: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies." },
      { id: 'B', text: "Maintain service lists in disconnected, unversioned spreadsheet documents on local workstations." },
      { id: 'C', text: "Prohibit developers from discovering existing microservices to prevent reuse." },
      { id: 'D', text: "Store portal data in temporary memory that resets on browser tab refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies. Modern developer portals use flexible blueprint systems. Platform engineers define entities (Services, Packages, Environments, Cloud Resources) and their relationships, creating an interactive, real-time knowledge graph that drives self-service automation.",
    referenceUrl: "https://www.getport.io/docs/build-your-software-catalog/sync-data-to-catalog/blueprints",
    tags: ["Portal Blueprints", "Portal Blueprints", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-318",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Internal Developer Portal Blueprints: Port and Reshape: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Portal Blueprints to build an internal developer portal data model that connects microservices, cloud resources, deployment environments, and on-call schedules.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Defining data models, entity blueprints, and action schemas in modern developer portals is under consideration.",
    options: [
      { id: 'A', text: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies." },
      { id: 'B', text: "Maintain service lists in disconnected, unversioned spreadsheet documents on local workstations." },
      { id: 'C', text: "Prohibit developers from discovering existing microservices to prevent reuse." },
      { id: 'D', text: "Store portal data in temporary memory that resets on browser tab refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies. Modern developer portals use flexible blueprint systems. Platform engineers define entities (Services, Packages, Environments, Cloud Resources) and their relationships, creating an interactive, real-time knowledge graph that drives self-service automation.",
    referenceUrl: "https://www.getport.io/docs/build-your-software-catalog/sync-data-to-catalog/blueprints",
    tags: ["Portal Blueprints", "Portal Blueprints", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-319",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Internal Developer Portal Blueprints: Port and Reshape: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Portal Blueprints to build an internal developer portal data model that connects microservices, cloud resources, deployment environments, and on-call schedules.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Defining data models, entity blueprints, and action schemas in modern developer portals is under consideration.",
    options: [
      { id: 'A', text: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies." },
      { id: 'B', text: "Maintain service lists in disconnected, unversioned spreadsheet documents on local workstations." },
      { id: 'C', text: "Prohibit developers from discovering existing microservices to prevent reuse." },
      { id: 'D', text: "Store portal data in temporary memory that resets on browser tab refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies. Modern developer portals use flexible blueprint systems. Platform engineers define entities (Services, Packages, Environments, Cloud Resources) and their relationships, creating an interactive, real-time knowledge graph that drives self-service automation.",
    referenceUrl: "https://www.getport.io/docs/build-your-software-catalog/sync-data-to-catalog/blueprints",
    tags: ["Portal Blueprints", "Portal Blueprints", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-320",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Internal Developer Portal Blueprints: Port and Reshape: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Portal Blueprints to build an internal developer portal data model that connects microservices, cloud resources, deployment environments, and on-call schedules.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Defining data models, entity blueprints, and action schemas in modern developer portals is under consideration.",
    options: [
      { id: 'A', text: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies." },
      { id: 'B', text: "Maintain service lists in disconnected, unversioned spreadsheet documents on local workstations." },
      { id: 'C', text: "Prohibit developers from discovering existing microservices to prevent reuse." },
      { id: 'D', text: "Store portal data in temporary memory that resets on browser tab refresh." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define interconnected entity blueprints and relations in modern developer portals (like Port or Backstage) modeling full architectural dependencies. Modern developer portals use flexible blueprint systems. Platform engineers define entities (Services, Packages, Environments, Cloud Resources) and their relationships, creating an interactive, real-time knowledge graph that drives self-service automation.",
    referenceUrl: "https://www.getport.io/docs/build-your-software-catalog/sync-data-to-catalog/blueprints",
    tags: ["Portal Blueprints", "Portal Blueprints", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-321",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Dynamic Ephemeral Environment Orchestration: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Ephemeral Environments to enable end-to-end integration testing of pull requests without incurring permanent cloud infrastructure expenses.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Automated orchestration of preview environments with ephemeral databases and mock dependencies is under consideration.",
    options: [
      { id: 'A', text: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases." },
      { id: 'B', text: "Force all development teams to test pull requests on a single shared staging cluster with constant collisions." },
      { id: 'C', text: "Keep 5,000 ephemeral test environments running permanently in production cloud accounts." },
      { id: 'D', text: "Prohibit testing feature branches until after merging into the production main branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases. Ephemeral environment orchestration provisions temporary, isolated testing environments per pull request. Platform automation sets up namespaces, clones database schemas with sanitized test data, runs integration tests, and destroys resources upon PR closure.",
    referenceUrl: "https://internaldeveloperplatform.org/core-components/environment-management/",
    tags: ["Ephemeral Environments", "Ephemeral Environments", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-322",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Dynamic Ephemeral Environment Orchestration: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Ephemeral Environments to enable end-to-end integration testing of pull requests without incurring permanent cloud infrastructure expenses.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Automated orchestration of preview environments with ephemeral databases and mock dependencies is under consideration.",
    options: [
      { id: 'A', text: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases." },
      { id: 'B', text: "Force all development teams to test pull requests on a single shared staging cluster with constant collisions." },
      { id: 'C', text: "Keep 5,000 ephemeral test environments running permanently in production cloud accounts." },
      { id: 'D', text: "Prohibit testing feature branches until after merging into the production main branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases. Ephemeral environment orchestration provisions temporary, isolated testing environments per pull request. Platform automation sets up namespaces, clones database schemas with sanitized test data, runs integration tests, and destroys resources upon PR closure.",
    referenceUrl: "https://internaldeveloperplatform.org/core-components/environment-management/",
    tags: ["Ephemeral Environments", "Ephemeral Environments", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-323",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Dynamic Ephemeral Environment Orchestration: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Ephemeral Environments to enable end-to-end integration testing of pull requests without incurring permanent cloud infrastructure expenses.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Automated orchestration of preview environments with ephemeral databases and mock dependencies is under consideration.",
    options: [
      { id: 'A', text: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases." },
      { id: 'B', text: "Force all development teams to test pull requests on a single shared staging cluster with constant collisions." },
      { id: 'C', text: "Keep 5,000 ephemeral test environments running permanently in production cloud accounts." },
      { id: 'D', text: "Prohibit testing feature branches until after merging into the production main branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases. Ephemeral environment orchestration provisions temporary, isolated testing environments per pull request. Platform automation sets up namespaces, clones database schemas with sanitized test data, runs integration tests, and destroys resources upon PR closure.",
    referenceUrl: "https://internaldeveloperplatform.org/core-components/environment-management/",
    tags: ["Ephemeral Environments", "Ephemeral Environments", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-324",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Dynamic Ephemeral Environment Orchestration: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Ephemeral Environments to enable end-to-end integration testing of pull requests without incurring permanent cloud infrastructure expenses.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Automated orchestration of preview environments with ephemeral databases and mock dependencies is under consideration.",
    options: [
      { id: 'A', text: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases." },
      { id: 'B', text: "Force all development teams to test pull requests on a single shared staging cluster with constant collisions." },
      { id: 'C', text: "Keep 5,000 ephemeral test environments running permanently in production cloud accounts." },
      { id: 'D', text: "Prohibit testing feature branches until after merging into the production main branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases. Ephemeral environment orchestration provisions temporary, isolated testing environments per pull request. Platform automation sets up namespaces, clones database schemas with sanitized test data, runs integration tests, and destroys resources upon PR closure.",
    referenceUrl: "https://internaldeveloperplatform.org/core-components/environment-management/",
    tags: ["Ephemeral Environments", "Ephemeral Environments", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-325",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Dynamic Ephemeral Environment Orchestration: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Ephemeral Environments to enable end-to-end integration testing of pull requests without incurring permanent cloud infrastructure expenses.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Automated orchestration of preview environments with ephemeral databases and mock dependencies is under consideration.",
    options: [
      { id: 'A', text: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases." },
      { id: 'B', text: "Force all development teams to test pull requests on a single shared staging cluster with constant collisions." },
      { id: 'C', text: "Keep 5,000 ephemeral test environments running permanently in production cloud accounts." },
      { id: 'D', text: "Prohibit testing feature branches until after merging into the production main branch." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Orchestrate ephemeral preview environments triggered by PR webhooks, deploying isolated namespaces with lightweight databases. Ephemeral environment orchestration provisions temporary, isolated testing environments per pull request. Platform automation sets up namespaces, clones database schemas with sanitized test data, runs integration tests, and destroys resources upon PR closure.",
    referenceUrl: "https://internaldeveloperplatform.org/core-components/environment-management/",
    tags: ["Ephemeral Environments", "Ephemeral Environments", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_13;
