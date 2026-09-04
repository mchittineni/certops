export const CNCF_CNPA_QUESTIONS_18 = [
  {
    id: "cncf-cnpa-426",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Policy as Code and Admission Control: Kyverno and OPA: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Policy as Code to prevent developers from deploying pods that run as root, lack resource requests, or pull images from untrusted registries.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Enforcing cluster governance rules pre-commit and at admission time using Kyverno or Gatekeeper is under consideration.",
    options: [
      { id: 'A', text: "Grant developers unrestricted access to bypass security policies." },
      { id: 'B', text: "Rely on manual human code reviews to catch missing resource requests and root container execution." },
      { id: 'C', text: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively." },
      { id: 'D', text: "Disable Kubernetes admission webhooks to improve API server response times." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively. Policy as Code tools (like CNCF Kyverno and OPA Gatekeeper) enforce governance standards automatically. Operating as validating and mutating admission controllers, they reject pods violating security policies (e.g., non-root user, required CPU/memory limits, approved registry origins).",
    referenceUrl: "https://kyverno.io/",
    tags: ["Policy as Code", "Policy as Code", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-427",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Policy as Code and Admission Control: Kyverno and OPA: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Policy as Code to prevent developers from deploying pods that run as root, lack resource requests, or pull images from untrusted registries.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Enforcing cluster governance rules pre-commit and at admission time using Kyverno or Gatekeeper is under consideration.",
    options: [
      { id: 'A', text: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively." },
      { id: 'B', text: "Disable Kubernetes admission webhooks to improve API server response times." },
      { id: 'C', text: "Rely on manual human code reviews to catch missing resource requests and root container execution." },
      { id: 'D', text: "Grant developers unrestricted access to bypass security policies." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively. Policy as Code tools (like CNCF Kyverno and OPA Gatekeeper) enforce governance standards automatically. Operating as validating and mutating admission controllers, they reject pods violating security policies (e.g., non-root user, required CPU/memory limits, approved registry origins).",
    referenceUrl: "https://kyverno.io/",
    tags: ["Policy as Code", "Policy as Code", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-428",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Policy as Code and Admission Control: Kyverno and OPA: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Policy as Code to prevent developers from deploying pods that run as root, lack resource requests, or pull images from untrusted registries.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Enforcing cluster governance rules pre-commit and at admission time using Kyverno or Gatekeeper is under consideration.",
    options: [
      { id: 'A', text: "Grant developers unrestricted access to bypass security policies." },
      { id: 'B', text: "Disable Kubernetes admission webhooks to improve API server response times." },
      { id: 'C', text: "Rely on manual human code reviews to catch missing resource requests and root container execution." },
      { id: 'D', text: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively. Policy as Code tools (like CNCF Kyverno and OPA Gatekeeper) enforce governance standards automatically. Operating as validating and mutating admission controllers, they reject pods violating security policies (e.g., non-root user, required CPU/memory limits, approved registry origins).",
    referenceUrl: "https://kyverno.io/",
    tags: ["Policy as Code", "Policy as Code", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-429",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Policy as Code and Admission Control: Kyverno and OPA: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Policy as Code to prevent developers from deploying pods that run as root, lack resource requests, or pull images from untrusted registries.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Enforcing cluster governance rules pre-commit and at admission time using Kyverno or Gatekeeper is under consideration.",
    options: [
      { id: 'A', text: "Rely on manual human code reviews to catch missing resource requests and root container execution." },
      { id: 'B', text: "Disable Kubernetes admission webhooks to improve API server response times." },
      { id: 'C', text: "Grant developers unrestricted access to bypass security policies." },
      { id: 'D', text: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively. Policy as Code tools (like CNCF Kyverno and OPA Gatekeeper) enforce governance standards automatically. Operating as validating and mutating admission controllers, they reject pods violating security policies (e.g., non-root user, required CPU/memory limits, approved registry origins).",
    referenceUrl: "https://kyverno.io/",
    tags: ["Policy as Code", "Policy as Code", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-430",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Policy as Code and Admission Control: Kyverno and OPA: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Policy as Code to prevent developers from deploying pods that run as root, lack resource requests, or pull images from untrusted registries.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Enforcing cluster governance rules pre-commit and at admission time using Kyverno or Gatekeeper is under consideration.",
    options: [
      { id: 'A', text: "Grant developers unrestricted access to bypass security policies." },
      { id: 'B', text: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively." },
      { id: 'C', text: "Rely on manual human code reviews to catch missing resource requests and root container execution." },
      { id: 'D', text: "Disable Kubernetes admission webhooks to improve API server response times." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement Policy as Code using Kyverno or Open Policy Agent (OPA) Gatekeeper to enforce admission control rules declaratively. Policy as Code tools (like CNCF Kyverno and OPA Gatekeeper) enforce governance standards automatically. Operating as validating and mutating admission controllers, they reject pods violating security policies (e.g., non-root user, required CPU/memory limits, approved registry origins).",
    referenceUrl: "https://kyverno.io/",
    tags: ["Policy as Code", "Policy as Code", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-431",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Database Schema Migrations in Continuous Delivery: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Schema Migrations to execute relational database schema migrations reliably during application deployments without causing downtime.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Automating backward-compatible database migrations in CI/CD using Kubernetes Jobs is under consideration.",
    options: [
      { id: 'A', text: "Log into the production database server directly via SSH during peak hours to alter tables manually." },
      { id: 'B', text: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns." },
      { id: 'C', text: "Execute destructive database schema drops and recreate tables from scratch on every application restart." },
      { id: 'D', text: "Prohibit altering database schemas to avoid deployment complications." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns. Golden paths automate database lifecycle management using tools like Flyway or Liquibase executed via Kubernetes Jobs. Adopting the 'expand and contract' pattern ensures schema migrations remain backward-compatible with running application versions, eliminating downtime.",
    referenceUrl: "https://martinfowler.com/bliki/ParallelChange.html",
    tags: ["Schema Migrations", "Database Migrations", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-432",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Database Schema Migrations in Continuous Delivery: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Schema Migrations to execute relational database schema migrations reliably during application deployments without causing downtime.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Automating backward-compatible database migrations in CI/CD using Kubernetes Jobs is under consideration.",
    options: [
      { id: 'A', text: "Log into the production database server directly via SSH during peak hours to alter tables manually." },
      { id: 'B', text: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns." },
      { id: 'C', text: "Prohibit altering database schemas to avoid deployment complications." },
      { id: 'D', text: "Execute destructive database schema drops and recreate tables from scratch on every application restart." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns. Golden paths automate database lifecycle management using tools like Flyway or Liquibase executed via Kubernetes Jobs. Adopting the 'expand and contract' pattern ensures schema migrations remain backward-compatible with running application versions, eliminating downtime.",
    referenceUrl: "https://martinfowler.com/bliki/ParallelChange.html",
    tags: ["Schema Migrations", "Database Migrations", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-433",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Database Schema Migrations in Continuous Delivery: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Schema Migrations to execute relational database schema migrations reliably during application deployments without causing downtime.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Automating backward-compatible database migrations in CI/CD using Kubernetes Jobs is under consideration.",
    options: [
      { id: 'A', text: "Log into the production database server directly via SSH during peak hours to alter tables manually." },
      { id: 'B', text: "Execute destructive database schema drops and recreate tables from scratch on every application restart." },
      { id: 'C', text: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns." },
      { id: 'D', text: "Prohibit altering database schemas to avoid deployment complications." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns. Golden paths automate database lifecycle management using tools like Flyway or Liquibase executed via Kubernetes Jobs. Adopting the 'expand and contract' pattern ensures schema migrations remain backward-compatible with running application versions, eliminating downtime.",
    referenceUrl: "https://martinfowler.com/bliki/ParallelChange.html",
    tags: ["Schema Migrations", "Database Migrations", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-434",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Database Schema Migrations in Continuous Delivery: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Schema Migrations to execute relational database schema migrations reliably during application deployments without causing downtime.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Automating backward-compatible database migrations in CI/CD using Kubernetes Jobs is under consideration.",
    options: [
      { id: 'A', text: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns." },
      { id: 'B', text: "Log into the production database server directly via SSH during peak hours to alter tables manually." },
      { id: 'C', text: "Prohibit altering database schemas to avoid deployment complications." },
      { id: 'D', text: "Execute destructive database schema drops and recreate tables from scratch on every application restart." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns. Golden paths automate database lifecycle management using tools like Flyway or Liquibase executed via Kubernetes Jobs. Adopting the 'expand and contract' pattern ensures schema migrations remain backward-compatible with running application versions, eliminating downtime.",
    referenceUrl: "https://martinfowler.com/bliki/ParallelChange.html",
    tags: ["Schema Migrations", "Database Migrations", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-435",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Database Schema Migrations in Continuous Delivery: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Schema Migrations to execute relational database schema migrations reliably during application deployments without causing downtime.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Automating backward-compatible database migrations in CI/CD using Kubernetes Jobs is under consideration.",
    options: [
      { id: 'A', text: "Prohibit altering database schemas to avoid deployment complications." },
      { id: 'B', text: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns." },
      { id: 'C', text: "Log into the production database server directly via SSH during peak hours to alter tables manually." },
      { id: 'D', text: "Execute destructive database schema drops and recreate tables from scratch on every application restart." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Run schema migrations via automated Kubernetes pre-upgrade Jobs using backward-compatible expand-and-contract migration patterns. Golden paths automate database lifecycle management using tools like Flyway or Liquibase executed via Kubernetes Jobs. Adopting the 'expand and contract' pattern ensures schema migrations remain backward-compatible with running application versions, eliminating downtime.",
    referenceUrl: "https://martinfowler.com/bliki/ParallelChange.html",
    tags: ["Schema Migrations", "Database Migrations", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-436",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Feature Flagging and Decoupled Releases (OpenFeature): Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Feature Flags to deploy code changes to production continuously without exposing incomplete or high-risk features to end users immediately.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Decoupling code deployment from business feature release using OpenFeature and flag management is under consideration.",
    options: [
      { id: 'A', text: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases." },
      { id: 'B', text: "Deploy completely separate clusters for every single minor UI toggle." },
      { id: 'C', text: "Merge unreviewed, broken code directly into production branches with no toggle controls." },
      { id: 'D', text: "Hold back complete software releases for months on long-lived feature branches until full testing is complete." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases. Decoupling deployment (pushing code to production) from release (making functionality visible to users) is essential for continuous delivery. Using feature flagging (standardized by CNCF OpenFeature), teams merge small increments safely and toggle functionality on-demand.",
    referenceUrl: "https://openfeature.dev/",
    tags: ["Feature Flags", "Feature Flags", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-437",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Feature Flagging and Decoupled Releases (OpenFeature): High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Feature Flags to deploy code changes to production continuously without exposing incomplete or high-risk features to end users immediately.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Decoupling code deployment from business feature release using OpenFeature and flag management is under consideration.",
    options: [
      { id: 'A', text: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases." },
      { id: 'B', text: "Hold back complete software releases for months on long-lived feature branches until full testing is complete." },
      { id: 'C', text: "Merge unreviewed, broken code directly into production branches with no toggle controls." },
      { id: 'D', text: "Deploy completely separate clusters for every single minor UI toggle." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases. Decoupling deployment (pushing code to production) from release (making functionality visible to users) is essential for continuous delivery. Using feature flagging (standardized by CNCF OpenFeature), teams merge small increments safely and toggle functionality on-demand.",
    referenceUrl: "https://openfeature.dev/",
    tags: ["Feature Flags", "Feature Flags", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-438",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Feature Flagging and Decoupled Releases (OpenFeature): Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Feature Flags to deploy code changes to production continuously without exposing incomplete or high-risk features to end users immediately.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Decoupling code deployment from business feature release using OpenFeature and flag management is under consideration.",
    options: [
      { id: 'A', text: "Deploy completely separate clusters for every single minor UI toggle." },
      { id: 'B', text: "Hold back complete software releases for months on long-lived feature branches until full testing is complete." },
      { id: 'C', text: "Merge unreviewed, broken code directly into production branches with no toggle controls." },
      { id: 'D', text: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases. Decoupling deployment (pushing code to production) from release (making functionality visible to users) is essential for continuous delivery. Using feature flagging (standardized by CNCF OpenFeature), teams merge small increments safely and toggle functionality on-demand.",
    referenceUrl: "https://openfeature.dev/",
    tags: ["Feature Flags", "Feature Flags", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-439",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Feature Flagging and Decoupled Releases (OpenFeature): Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Feature Flags to deploy code changes to production continuously without exposing incomplete or high-risk features to end users immediately.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Decoupling code deployment from business feature release using OpenFeature and flag management is under consideration.",
    options: [
      { id: 'A', text: "Merge unreviewed, broken code directly into production branches with no toggle controls." },
      { id: 'B', text: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases." },
      { id: 'C', text: "Deploy completely separate clusters for every single minor UI toggle." },
      { id: 'D', text: "Hold back complete software releases for months on long-lived feature branches until full testing is complete." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases. Decoupling deployment (pushing code to production) from release (making functionality visible to users) is essential for continuous delivery. Using feature flagging (standardized by CNCF OpenFeature), teams merge small increments safely and toggle functionality on-demand.",
    referenceUrl: "https://openfeature.dev/",
    tags: ["Feature Flags", "Feature Flags", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-440",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Feature Flagging and Decoupled Releases (OpenFeature): Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Feature Flags to deploy code changes to production continuously without exposing incomplete or high-risk features to end users immediately.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Decoupling code deployment from business feature release using OpenFeature and flag management is under consideration.",
    options: [
      { id: 'A', text: "Deploy completely separate clusters for every single minor UI toggle." },
      { id: 'B', text: "Merge unreviewed, broken code directly into production branches with no toggle controls." },
      { id: 'C', text: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases." },
      { id: 'D', text: "Hold back complete software releases for months on long-lived feature branches until full testing is complete." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement feature flags adhering to the CNCF OpenFeature standard to decouple code deployments from business feature releases. Decoupling deployment (pushing code to production) from release (making functionality visible to users) is essential for continuous delivery. Using feature flagging (standardized by CNCF OpenFeature), teams merge small increments safely and toggle functionality on-demand.",
    referenceUrl: "https://openfeature.dev/",
    tags: ["Feature Flags", "Feature Flags", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-441",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Disaster Recovery, Automated Rollbacks, and Self-Healing: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates Resilience Workflows to minimize downtime when a newly deployed microservice causes cascading database connection pool exhaustion.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Automated deployment rollbacks and self-healing infrastructure triggers on SLO degradation is under consideration.",
    options: [
      { id: 'A', text: "Disable automated health checks to prevent Kubernetes from restarting unresponsive pods." },
      { id: 'B', text: "Delete the production cluster whenever a single pod experiences memory limits." },
      { id: 'C', text: "Wait for customer support queues to fill up before initiating manual troubleshooting discussions." },
      { id: 'D', text: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics. Platform delivery workflows incorporate automated rollback and self-healing mechanisms. If a new deployment fails liveness/readiness probes or triggers an increase in HTTP 5xx error rates, the orchestrator reverts the deployment to the last known good replica set instantly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Resilience Workflows", "Automated Rollbacks", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-442",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Disaster Recovery, Automated Rollbacks, and Self-Healing: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates Resilience Workflows to minimize downtime when a newly deployed microservice causes cascading database connection pool exhaustion.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Automated deployment rollbacks and self-healing infrastructure triggers on SLO degradation is under consideration.",
    options: [
      { id: 'A', text: "Delete the production cluster whenever a single pod experiences memory limits." },
      { id: 'B', text: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics." },
      { id: 'C', text: "Disable automated health checks to prevent Kubernetes from restarting unresponsive pods." },
      { id: 'D', text: "Wait for customer support queues to fill up before initiating manual troubleshooting discussions." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics. Platform delivery workflows incorporate automated rollback and self-healing mechanisms. If a new deployment fails liveness/readiness probes or triggers an increase in HTTP 5xx error rates, the orchestrator reverts the deployment to the last known good replica set instantly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Resilience Workflows", "Automated Rollbacks", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-443",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Disaster Recovery, Automated Rollbacks, and Self-Healing: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates Resilience Workflows to minimize downtime when a newly deployed microservice causes cascading database connection pool exhaustion.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Automated deployment rollbacks and self-healing infrastructure triggers on SLO degradation is under consideration.",
    options: [
      { id: 'A', text: "Delete the production cluster whenever a single pod experiences memory limits." },
      { id: 'B', text: "Disable automated health checks to prevent Kubernetes from restarting unresponsive pods." },
      { id: 'C', text: "Wait for customer support queues to fill up before initiating manual troubleshooting discussions." },
      { id: 'D', text: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics. Platform delivery workflows incorporate automated rollback and self-healing mechanisms. If a new deployment fails liveness/readiness probes or triggers an increase in HTTP 5xx error rates, the orchestrator reverts the deployment to the last known good replica set instantly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Resilience Workflows", "Automated Rollbacks", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-444",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Disaster Recovery, Automated Rollbacks, and Self-Healing: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates Resilience Workflows to minimize downtime when a newly deployed microservice causes cascading database connection pool exhaustion.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Automated deployment rollbacks and self-healing infrastructure triggers on SLO degradation is under consideration.",
    options: [
      { id: 'A', text: "Disable automated health checks to prevent Kubernetes from restarting unresponsive pods." },
      { id: 'B', text: "Wait for customer support queues to fill up before initiating manual troubleshooting discussions." },
      { id: 'C', text: "Delete the production cluster whenever a single pod experiences memory limits." },
      { id: 'D', text: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics. Platform delivery workflows incorporate automated rollback and self-healing mechanisms. If a new deployment fails liveness/readiness probes or triggers an increase in HTTP 5xx error rates, the orchestrator reverts the deployment to the last known good replica set instantly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Resilience Workflows", "Automated Rollbacks", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-445",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d3",
    domainName: "Golden Paths and Workflows",
    title: "Disaster Recovery, Automated Rollbacks, and Self-Healing: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates Resilience Workflows to minimize downtime when a newly deployed microservice causes cascading database connection pool exhaustion.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Automated deployment rollbacks and self-healing infrastructure triggers on SLO degradation is under consideration.",
    options: [
      { id: 'A', text: "Disable automated health checks to prevent Kubernetes from restarting unresponsive pods." },
      { id: 'B', text: "Delete the production cluster whenever a single pod experiences memory limits." },
      { id: 'C', text: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics." },
      { id: 'D', text: "Wait for customer support queues to fill up before initiating manual troubleshooting discussions." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure automated deployment rollbacks triggered by failing health probes or breach of service-level metrics. Platform delivery workflows incorporate automated rollback and self-healing mechanisms. If a new deployment fails liveness/readiness probes or triggers an increase in HTTP 5xx error rates, the orchestrator reverts the deployment to the last known good replica set instantly.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment",
    tags: ["Resilience Workflows", "Automated Rollbacks", "Resilience And Observability"]
  },
  {
    id: "cncf-cnpa-446",
    difficulty: "hard",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "DORA Metrics: Tracking Engineering Velocity and Stability: Enterprise Platform",
    scenario: "An enterprise platform engineering team is architecting an internal developer platform (IDP) to standardize infrastructure substrates, self-service portals, and delivery workflows across hybrid clouds. The platform engineer evaluates DORA Metrics to measure whether platform engineering investments are successfully improving software delivery speed and reliability.",
    question: "Which architectural approach or platform engineering practice satisfies these enterprise IDP objectives? Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service is under consideration.",
    options: [
      { id: 'A', text: "Track the number of hours developers spend sitting at their office desks." },
      { id: 'B', text: "Measure developer performance exclusively by the total number of lines of source code written per day." },
      { id: 'C', text: "Count the number of emails sent by engineering managers." },
      { id: 'D', text: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. The DevOps Research and Assessment (DORA) framework defines four core metrics to assess software delivery performance: throughput (Deployment Frequency and Lead Time for Changes) and stability (Change Failure Rate and Time to Restore Service / MTTR).",
    referenceUrl: "https://dora.dev/",
    tags: ["DORA Metrics", "DORA Metrics", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpa-447",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "DORA Metrics: Tracking Engineering Velocity and Stability: High Scale Delivery",
    scenario: "A large cloud-native organization coordinates hundreds of development teams deploying thousands of microservices daily across distributed multi-cluster fleets. The platform engineer evaluates DORA Metrics to measure whether platform engineering investments are successfully improving software delivery speed and reliability.",
    question: "Which platform substrate pattern or workflow automation handles this delivery scale effectively while preventing infrastructure bottlenecks? Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service is under consideration.",
    options: [
      { id: 'A', text: "Count the number of emails sent by engineering managers." },
      { id: 'B', text: "Track the number of hours developers spend sitting at their office desks." },
      { id: 'C', text: "Measure developer performance exclusively by the total number of lines of source code written per day." },
      { id: 'D', text: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. The DevOps Research and Assessment (DORA) framework defines four core metrics to assess software delivery performance: throughput (Deployment Frequency and Lead Time for Changes) and stability (Change Failure Rate and Time to Restore Service / MTTR).",
    referenceUrl: "https://dora.dev/",
    tags: ["DORA Metrics", "DORA Metrics", "High Scale Delivery"]
  },
  {
    id: "cncf-cnpa-448",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "DORA Metrics: Tracking Engineering Velocity and Stability: Security And Governance",
    scenario: "A platform security and compliance auditor requires cryptographic supply chain verification, policy-as-code admission control, and continuous audit trails. The platform engineer evaluates DORA Metrics to measure whether platform engineering investments are successfully improving software delivery speed and reliability.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory governance controls? Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service is under consideration.",
    options: [
      { id: 'A', text: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service." },
      { id: 'B', text: "Count the number of emails sent by engineering managers." },
      { id: 'C', text: "Measure developer performance exclusively by the total number of lines of source code written per day." },
      { id: 'D', text: "Track the number of hours developers spend sitting at their office desks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. The DevOps Research and Assessment (DORA) framework defines four core metrics to assess software delivery performance: throughput (Deployment Frequency and Lead Time for Changes) and stability (Change Failure Rate and Time to Restore Service / MTTR).",
    referenceUrl: "https://dora.dev/",
    tags: ["DORA Metrics", "DORA Metrics", "Security And Governance"]
  },
  {
    id: "cncf-cnpa-449",
    difficulty: "easy",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "DORA Metrics: Tracking Engineering Velocity and Stability: Developer Experience",
    scenario: "A platform team is establishing Golden Path starter kits, dev containers, and automated self-service capabilities to minimize developer cognitive load and eliminate ticket-based operations. The platform engineer evaluates DORA Metrics to measure whether platform engineering investments are successfully improving software delivery speed and reliability.",
    question: "Which platform feature or DevEx practice empowers application teams to self-serve safely? Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service is under consideration.",
    options: [
      { id: 'A', text: "Track the number of hours developers spend sitting at their office desks." },
      { id: 'B', text: "Measure developer performance exclusively by the total number of lines of source code written per day." },
      { id: 'C', text: "Count the number of emails sent by engineering managers." },
      { id: 'D', text: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. The DevOps Research and Assessment (DORA) framework defines four core metrics to assess software delivery performance: throughput (Deployment Frequency and Lead Time for Changes) and stability (Change Failure Rate and Time to Restore Service / MTTR).",
    referenceUrl: "https://dora.dev/",
    tags: ["DORA Metrics", "DORA Metrics", "Developer Experience"]
  },
  {
    id: "cncf-cnpa-450",
    difficulty: "medium",
    certId: "cncf-cnpa",
    domainId: "d4",
    domainName: "Platform Observability and Governance",
    title: "DORA Metrics: Tracking Engineering Velocity and Stability: Resilience And Observability",
    scenario: "A site reliability engineering team is operating platform substrates and optimizing system resilience, multi-window SLO monitoring, and cost allocation across Kubernetes clusters. The platform engineer evaluates DORA Metrics to measure whether platform engineering investments are successfully improving software delivery speed and reliability.",
    question: "Which operational design or observability configuration guarantees resilient, cost-effective platform operation? Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service is under consideration.",
    options: [
      { id: 'A', text: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service." },
      { id: 'B', text: "Track the number of hours developers spend sitting at their office desks." },
      { id: 'C', text: "Count the number of emails sent by engineering managers." },
      { id: 'D', text: "Measure developer performance exclusively by the total number of lines of source code written per day." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Track the four DORA metrics: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. The DevOps Research and Assessment (DORA) framework defines four core metrics to assess software delivery performance: throughput (Deployment Frequency and Lead Time for Changes) and stability (Change Failure Rate and Time to Restore Service / MTTR).",
    referenceUrl: "https://dora.dev/",
    tags: ["DORA Metrics", "DORA Metrics", "Resilience And Observability"]
  }
];

export default CNCF_CNPA_QUESTIONS_18;
