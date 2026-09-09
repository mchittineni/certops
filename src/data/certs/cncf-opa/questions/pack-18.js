export const CNCF_OPA_QUESTIONS_18 = [
  {
    id: "cncf-opa-426",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Microservice Authorization with Envoy and ExtAuthz: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading platform, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The policy architecture team is currently fine-grained http api authorization at the ingress proxy under production cluster cycle 18.1.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these high-frequency fintech trading requirements for microservice authorization with envoy and extauthz?",
    options: [
      { id: 'A', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." },
      { id: 'B', text: "Implement custom JWT verification and authorization logic independently in every service's controller layer." },
      { id: 'C', text: "Place all microservices on a public network and rely on client API keys passed in request query strings." },
      { id: 'D', text: "Disable ingress authorization and trust all internal VPC network packets implicitly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Envoy proxy integrates with OPA via the External Authorization (ext_authz) filter. For every incoming HTTP request, Envoy extracts request attributes (method, path, headers, client certificate) and queries OPA. OPA evaluates the request against Rego policies and instructs Envoy whether to allow or reject the call.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy", "ext-authz", "service-mesh", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-427",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Kafka Topic Authorization with OPA: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa platform, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The policy architecture team is currently enforcing fine-grained message broker access control under production cluster cycle 18.2.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these healthcare patient records & hipaa requirements for kafka topic authorization with opa?",
    options: [
      { id: 'A', text: "Grant cluster-admin access to all Kafka producers and consumers to avoid authorization errors." },
      { id: 'B', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." },
      { id: 'C', text: "Hardcode topic names in firewall rules to restrict message publishing." },
      { id: 'D', text: "Disable SASL/SSL authentication and allow unauthenticated consumer groups." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The OPA Kafka authorizer plugin intercepts Kafka client requests (e.g., Produce, Consume, CreateTopics). It evaluates the client's authenticated principal, client IP, resource type, and operation name against Rego policies, providing granular topic-level access control.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka", "messaging", "authorization", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-428",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Styra Declarative Authorization Service (DAS): Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale platform, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The policy architecture team is currently enterprise control plane for opa and gatekeeper under production cluster cycle 18.3.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these global e-commerce black friday scale requirements for styra declarative authorization service (das)?",
    options: [
      { id: 'A', text: "Maintain independent Git repositories for every individual developer's OPA configuration without centralized oversight." },
      { id: 'B', text: "Disable policy change logging and allow developers to live-edit production OPA policies directly via curl." },
      { id: 'C', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." },
      { id: 'D', text: "Store all enterprise policies in spreadsheet files distributed via email." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Styra DAS (Declarative Authorization Service) serves as an enterprise control plane for OPA and Gatekeeper. It streamlines policy authoring, integrates with Git workflows for CI validation, distributes policy bundles globally, and provides detailed decision analytics across multi-cluster environments.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das", "control-plane", "enterprise", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-429",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Rego Performance and Indexing: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry platform, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The policy architecture team is currently optimizing rule evaluation for sub-millisecond latency under production cluster cycle 18.4.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these autonomous vehicle telemetry requirements for rego performance and indexing?",
    options: [
      { id: 'A', text: "Use unindexed linear scans across 1,000,000 unindexed elements in deep nested loops." },
      { id: 'B', text: "Execute blocking external HTTP calls inside the middle of high-frequency authorization rules." },
      { id: 'C', text: "Convert every JSON input payload to a giant string and perform regex matches." },
      { id: 'D', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "OPA's compiler optimizes evaluation performance by building trie indices for rules with constant equality expressions (e.g., matching on request path or method). Placing indexed equality checks first allows OPA to bypass non-matching rules immediately, maintaining microsecond-level latency.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance", "indexing", "optimization", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-430",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Conftest for Infrastructure as Code: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform platform, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The policy architecture team is currently testing terraform, dockerfiles, and helm charts with rego under production cluster cycle 18.5.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these multi-tenant b2b saas platform requirements for conftest for infrastructure as code?",
    options: [
      { id: 'A', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." },
      { id: 'B', text: "Perform manual code reviews of 10,000-line Terraform plans before every deployment." },
      { id: 'C', text: "Deploy Terraform configurations directly to AWS without review and fix errors in production." },
      { id: 'D', text: "Use regex-based bash scripts to grep for forbidden keywords inside infrastructure files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conftest is a dedicated utility built on OPA that enables writing Rego policies against structured configuration files, including Terraform plans, Kubernetes manifests, Dockerfiles, and cloud-init scripts, enforcing corporate security guardrails early in the CI/CD pipeline.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest", "iac", "ci-cd", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-431",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Microservice Authorization with Envoy and ExtAuthz: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn platform, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The policy architecture team is currently fine-grained http api authorization at the ingress proxy under production cluster cycle 18.6.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these media streaming & global cdn requirements for microservice authorization with envoy and extauthz?",
    options: [
      { id: 'A', text: "Implement custom JWT verification and authorization logic independently in every service's controller layer." },
      { id: 'B', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." },
      { id: 'C', text: "Place all microservices on a public network and rely on client API keys passed in request query strings." },
      { id: 'D', text: "Disable ingress authorization and trust all internal VPC network packets implicitly." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Envoy proxy integrates with OPA via the External Authorization (ext_authz) filter. For every incoming HTTP request, Envoy extracts request attributes (method, path, headers, client certificate) and queries OPA. OPA evaluates the request against Rego policies and instructs Envoy whether to allow or reject the call.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy", "ext-authz", "service-mesh", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-432",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Kafka Topic Authorization with OPA: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems platform, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The policy architecture team is currently enforcing fine-grained message broker access control under production cluster cycle 18.7.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these aerospace satellite ground systems requirements for kafka topic authorization with opa?",
    options: [
      { id: 'A', text: "Grant cluster-admin access to all Kafka producers and consumers to avoid authorization errors." },
      { id: 'B', text: "Hardcode topic names in firewall rules to restrict message publishing." },
      { id: 'C', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." },
      { id: 'D', text: "Disable SASL/SSL authentication and allow unauthenticated consumer groups." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The OPA Kafka authorizer plugin intercepts Kafka client requests (e.g., Produce, Consume, CreateTopics). It evaluates the client's authenticated principal, client IP, resource type, and operation name against Rego policies, providing granular topic-level access control.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka", "messaging", "authorization", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-433",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Styra Declarative Authorization Service (DAS): Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network platform, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The policy architecture team is currently enterprise control plane for opa and gatekeeper under production cluster cycle 18.8.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these telecommunications 5g core network requirements for styra declarative authorization service (das)?",
    options: [
      { id: 'A', text: "Maintain independent Git repositories for every individual developer's OPA configuration without centralized oversight." },
      { id: 'B', text: "Disable policy change logging and allow developers to live-edit production OPA policies directly via curl." },
      { id: 'C', text: "Store all enterprise policies in spreadsheet files distributed via email." },
      { id: 'D', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Styra DAS (Declarative Authorization Service) serves as an enterprise control plane for OPA and Gatekeeper. It streamlines policy authoring, integrates with Git workflows for CI validation, distributes policy bundles globally, and provides detailed decision analytics across multi-cluster environments.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das", "control-plane", "enterprise", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-434",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Rego Performance and Indexing: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot platform, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The policy architecture team is currently optimizing rule evaluation for sub-millisecond latency under production cluster cycle 18.9.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these renewable energy smart grid iot requirements for rego performance and indexing?",
    options: [
      { id: 'A', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." },
      { id: 'B', text: "Use unindexed linear scans across 1,000,000 unindexed elements in deep nested loops." },
      { id: 'C', text: "Execute blocking external HTTP calls inside the middle of high-frequency authorization rules." },
      { id: 'D', text: "Convert every JSON input payload to a giant string and perform regex matches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OPA's compiler optimizes evaluation performance by building trie indices for rules with constant equality expressions (e.g., matching on request path or method). Placing indexed equality checks first allows OPA to bypass non-matching rules immediately, maintaining microsecond-level latency.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance", "indexing", "optimization", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-435",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Conftest for Infrastructure as Code: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics platform, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The policy architecture team is currently testing terraform, dockerfiles, and helm charts with rego under production cluster cycle 18.10.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these supply chain cold-chain logistics requirements for conftest for infrastructure as code?",
    options: [
      { id: 'A', text: "Perform manual code reviews of 10,000-line Terraform plans before every deployment." },
      { id: 'B', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." },
      { id: 'C', text: "Deploy Terraform configurations directly to AWS without review and fix errors in production." },
      { id: 'D', text: "Use regex-based bash scripts to grep for forbidden keywords inside infrastructure files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conftest is a dedicated utility built on OPA that enables writing Rego policies against structured configuration files, including Terraform plans, Kubernetes manifests, Dockerfiles, and cloud-init scripts, enforcing corporate security guardrails early in the CI/CD pipeline.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest", "iac", "ci-cd", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-436",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Microservice Authorization with Envoy and ExtAuthz: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments platform, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The policy architecture team is currently fine-grained http api authorization at the ingress proxy under production cluster cycle 18.11.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these banking core ledger & payments requirements for microservice authorization with envoy and extauthz?",
    options: [
      { id: 'A', text: "Implement custom JWT verification and authorization logic independently in every service's controller layer." },
      { id: 'B', text: "Place all microservices on a public network and rely on client API keys passed in request query strings." },
      { id: 'C', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." },
      { id: 'D', text: "Disable ingress authorization and trust all internal VPC network packets implicitly." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Envoy proxy integrates with OPA via the External Authorization (ext_authz) filter. For every incoming HTTP request, Envoy extracts request attributes (method, path, headers, client certificate) and queries OPA. OPA evaluates the request against Rego policies and instructs Envoy whether to allow or reject the call.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy", "ext-authz", "service-mesh", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-437",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Kafka Topic Authorization with OPA: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline platform, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The policy architecture team is currently enforcing fine-grained message broker access control under production cluster cycle 18.12.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these genomic sequencing & biotech pipeline requirements for kafka topic authorization with opa?",
    options: [
      { id: 'A', text: "Grant cluster-admin access to all Kafka producers and consumers to avoid authorization errors." },
      { id: 'B', text: "Hardcode topic names in firewall rules to restrict message publishing." },
      { id: 'C', text: "Disable SASL/SSL authentication and allow unauthenticated consumer groups." },
      { id: 'D', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The OPA Kafka authorizer plugin intercepts Kafka client requests (e.g., Produce, Consume, CreateTopics). It evaluates the client's authenticated principal, client IP, resource type, and operation name against Rego policies, providing granular topic-level access control.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka", "messaging", "authorization", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-438",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Styra Declarative Authorization Service (DAS): Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network platform, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The policy architecture team is currently enterprise control plane for opa and gatekeeper under production cluster cycle 18.13.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these defense-grade zero-trust network requirements for styra declarative authorization service (das)?",
    options: [
      { id: 'A', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." },
      { id: 'B', text: "Maintain independent Git repositories for every individual developer's OPA configuration without centralized oversight." },
      { id: 'C', text: "Disable policy change logging and allow developers to live-edit production OPA policies directly via curl." },
      { id: 'D', text: "Store all enterprise policies in spreadsheet files distributed via email." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Styra DAS (Declarative Authorization Service) serves as an enterprise control plane for OPA and Gatekeeper. It streamlines policy authoring, integrates with Git workflows for CI validation, distributes policy bundles globally, and provides detailed decision analytics across multi-cluster environments.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das", "control-plane", "enterprise", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-439",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Rego Performance and Indexing: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine platform, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The policy architecture team is currently optimizing rule evaluation for sub-millisecond latency under production cluster cycle 18.14.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these online multiplayer gaming engine requirements for rego performance and indexing?",
    options: [
      { id: 'A', text: "Use unindexed linear scans across 1,000,000 unindexed elements in deep nested loops." },
      { id: 'B', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." },
      { id: 'C', text: "Execute blocking external HTTP calls inside the middle of high-frequency authorization rules." },
      { id: 'D', text: "Convert every JSON input payload to a giant string and perform regex matches." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "OPA's compiler optimizes evaluation performance by building trie indices for rules with constant equality expressions (e.g., matching on request path or method). Placing indexed equality checks first allows OPA to bypass non-matching rules immediately, maintaining microsecond-level latency.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance", "indexing", "optimization", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-440",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Conftest for Infrastructure as Code: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling platform, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The policy architecture team is currently testing terraform, dockerfiles, and helm charts with rego under production cluster cycle 18.15.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these insurance risk & actuarial modeling requirements for conftest for infrastructure as code?",
    options: [
      { id: 'A', text: "Perform manual code reviews of 10,000-line Terraform plans before every deployment." },
      { id: 'B', text: "Deploy Terraform configurations directly to AWS without review and fix errors in production." },
      { id: 'C', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." },
      { id: 'D', text: "Use regex-based bash scripts to grep for forbidden keywords inside infrastructure files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conftest is a dedicated utility built on OPA that enables writing Rego policies against structured configuration files, including Terraform plans, Kubernetes manifests, Dockerfiles, and cloud-init scripts, enforcing corporate security guardrails early in the CI/CD pipeline.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest", "iac", "ci-cd", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-441",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Microservice Authorization with Envoy and ExtAuthz: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform platform, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The policy architecture team is currently fine-grained http api authorization at the ingress proxy under production cluster cycle 18.16.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these pharmaceutical clinical trial platform requirements for microservice authorization with envoy and extauthz?",
    options: [
      { id: 'A', text: "Implement custom JWT verification and authorization logic independently in every service's controller layer." },
      { id: 'B', text: "Place all microservices on a public network and rely on client API keys passed in request query strings." },
      { id: 'C', text: "Disable ingress authorization and trust all internal VPC network packets implicitly." },
      { id: 'D', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Envoy proxy integrates with OPA via the External Authorization (ext_authz) filter. For every incoming HTTP request, Envoy extracts request attributes (method, path, headers, client certificate) and queries OPA. OPA evaluates the request against Rego policies and instructs Envoy whether to allow or reject the call.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy", "ext-authz", "service-mesh", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-442",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Kafka Topic Authorization with OPA: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub platform, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The policy architecture team is currently enforcing fine-grained message broker access control under production cluster cycle 18.17.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these smart city traffic & mobility sensor hub requirements for kafka topic authorization with opa?",
    options: [
      { id: 'A', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." },
      { id: 'B', text: "Grant cluster-admin access to all Kafka producers and consumers to avoid authorization errors." },
      { id: 'C', text: "Hardcode topic names in firewall rules to restrict message publishing." },
      { id: 'D', text: "Disable SASL/SSL authentication and allow unauthenticated consumer groups." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The OPA Kafka authorizer plugin intercepts Kafka client requests (e.g., Produce, Consume, CreateTopics). It evaluates the client's authenticated principal, client IP, resource type, and operation name against Rego policies, providing granular topic-level access control.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka", "messaging", "authorization", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-443",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Styra Declarative Authorization Service (DAS): Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification platform, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The policy architecture team is currently enterprise control plane for opa and gatekeeper under production cluster cycle 18.18.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these digital identity & biometric verification requirements for styra declarative authorization service (das)?",
    options: [
      { id: 'A', text: "Maintain independent Git repositories for every individual developer's OPA configuration without centralized oversight." },
      { id: 'B', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." },
      { id: 'C', text: "Disable policy change logging and allow developers to live-edit production OPA policies directly via curl." },
      { id: 'D', text: "Store all enterprise policies in spreadsheet files distributed via email." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Styra DAS (Declarative Authorization Service) serves as an enterprise control plane for OPA and Gatekeeper. It streamlines policy authoring, integrates with Git workflows for CI validation, distributes policy bundles globally, and provides detailed decision analytics across multi-cluster environments.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das", "control-plane", "enterprise", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-444",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Rego Performance and Indexing: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search platform, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The policy architecture team is currently optimizing rule evaluation for sub-millisecond latency under production cluster cycle 18.19.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these legal discovery & semantic document search requirements for rego performance and indexing?",
    options: [
      { id: 'A', text: "Use unindexed linear scans across 1,000,000 unindexed elements in deep nested loops." },
      { id: 'B', text: "Execute blocking external HTTP calls inside the middle of high-frequency authorization rules." },
      { id: 'C', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." },
      { id: 'D', text: "Convert every JSON input payload to a giant string and perform regex matches." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "OPA's compiler optimizes evaluation performance by building trie indices for rules with constant equality expressions (e.g., matching on request path or method). Placing indexed equality checks first allows OPA to bypass non-matching rules immediately, maintaining microsecond-level latency.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance", "indexing", "optimization", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-445",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Conftest for Infrastructure as Code: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange platform, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The policy architecture team is currently testing terraform, dockerfiles, and helm charts with rego under production cluster cycle 18.20.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these adtech real-time bidding exchange requirements for conftest for infrastructure as code?",
    options: [
      { id: 'A', text: "Perform manual code reviews of 10,000-line Terraform plans before every deployment." },
      { id: 'B', text: "Deploy Terraform configurations directly to AWS without review and fix errors in production." },
      { id: 'C', text: "Use regex-based bash scripts to grep for forbidden keywords inside infrastructure files." },
      { id: 'D', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conftest is a dedicated utility built on OPA that enables writing Rego policies against structured configuration files, including Terraform plans, Kubernetes manifests, Dockerfiles, and cloud-init scripts, enforcing corporate security guardrails early in the CI/CD pipeline.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest", "iac", "ci-cd", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-446",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Microservice Authorization with Envoy and ExtAuthz: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting platform, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The policy architecture team is currently fine-grained http api authorization at the ingress proxy under production cluster cycle 18.21.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these precision agriculture & drone scouting requirements for microservice authorization with envoy and extauthz?",
    options: [
      { id: 'A', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." },
      { id: 'B', text: "Implement custom JWT verification and authorization logic independently in every service's controller layer." },
      { id: 'C', text: "Place all microservices on a public network and rely on client API keys passed in request query strings." },
      { id: 'D', text: "Disable ingress authorization and trust all internal VPC network packets implicitly." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Envoy proxy integrates with OPA via the External Authorization (ext_authz) filter. For every incoming HTTP request, Envoy extracts request attributes (method, path, headers, client certificate) and queries OPA. OPA evaluates the request against Rego policies and instructs Envoy whether to allow or reject the call.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy", "ext-authz", "service-mesh", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-447",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Kafka Topic Authorization with OPA: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance platform, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The policy architecture team is currently enforcing fine-grained message broker access control under production cluster cycle 18.22.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these industrial robotics predictive maintenance requirements for kafka topic authorization with opa?",
    options: [
      { id: 'A', text: "Grant cluster-admin access to all Kafka producers and consumers to avoid authorization errors." },
      { id: 'B', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." },
      { id: 'C', text: "Hardcode topic names in firewall rules to restrict message publishing." },
      { id: 'D', text: "Disable SASL/SSL authentication and allow unauthenticated consumer groups." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The OPA Kafka authorizer plugin intercepts Kafka client requests (e.g., Produce, Consume, CreateTopics). It evaluates the client's authenticated principal, client IP, resource type, and operation name against Rego policies, providing granular topic-level access control.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka", "messaging", "authorization", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-448",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Styra Declarative Authorization Service (DAS): Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform platform, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The policy architecture team is currently enterprise control plane for opa and gatekeeper under production cluster cycle 18.23.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these educational remote proctoring platform requirements for styra declarative authorization service (das)?",
    options: [
      { id: 'A', text: "Maintain independent Git repositories for every individual developer's OPA configuration without centralized oversight." },
      { id: 'B', text: "Disable policy change logging and allow developers to live-edit production OPA policies directly via curl." },
      { id: 'C', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." },
      { id: 'D', text: "Store all enterprise policies in spreadsheet files distributed via email." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Styra DAS (Declarative Authorization Service) serves as an enterprise control plane for OPA and Gatekeeper. It streamlines policy authoring, integrates with Git workflows for CI validation, distributes policy bundles globally, and provides detailed decision analytics across multi-cluster environments.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das", "control-plane", "enterprise", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-449",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Rego Performance and Indexing: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics platform, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The policy architecture team is currently optimizing rule evaluation for sub-millisecond latency under production cluster cycle 18.24.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these real estate valuation & geo-spatial analytics requirements for rego performance and indexing?",
    options: [
      { id: 'A', text: "Use unindexed linear scans across 1,000,000 unindexed elements in deep nested loops." },
      { id: 'B', text: "Execute blocking external HTTP calls inside the middle of high-frequency authorization rules." },
      { id: 'C', text: "Convert every JSON input payload to a giant string and perform regex matches." },
      { id: 'D', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "OPA's compiler optimizes evaluation performance by building trie indices for rules with constant equality expressions (e.g., matching on request path or method). Placing indexed equality checks first allows OPA to bypass non-matching rules immediately, maintaining microsecond-level latency.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance", "indexing", "optimization", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-450",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Conftest for Infrastructure as Code: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations platform, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The policy architecture team is currently testing terraform, dockerfiles, and helm charts with rego under production cluster cycle 18.25.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these disaster emergency dispatch & operations requirements for conftest for infrastructure as code?",
    options: [
      { id: 'A', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." },
      { id: 'B', text: "Perform manual code reviews of 10,000-line Terraform plans before every deployment." },
      { id: 'C', text: "Deploy Terraform configurations directly to AWS without review and fix errors in production." },
      { id: 'D', text: "Use regex-based bash scripts to grep for forbidden keywords inside infrastructure files." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conftest is a dedicated utility built on OPA that enables writing Rego policies against structured configuration files, including Terraform plans, Kubernetes manifests, Dockerfiles, and cloud-init scripts, enforcing corporate security guardrails early in the CI/CD pipeline.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest", "iac", "ci-cd", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_QUESTIONS_18;
