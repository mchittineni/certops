export const CNCF_OPA_FLASHCARDS_18 = [
  {
    id: "cncf-opa-fc-426",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in High-Frequency FinTech Trading",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-fc-427",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Healthcare Patient Records & HIPAA",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-fc-428",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Global E-Commerce Black Friday Scale",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-fc-429",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Autonomous Vehicle Telemetry",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-fc-430",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-fc-431",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Media Streaming & Global CDN",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-fc-432",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Aerospace Satellite Ground Systems",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-fc-433",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Telecommunications 5G Core Network",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-fc-434",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Renewable Energy Smart Grid IoT",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-fc-435",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Supply Chain Cold-Chain Logistics",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-fc-436",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Banking Core Ledger & Payments",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-fc-437",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-fc-438",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Defense-Grade Zero-Trust Network",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-fc-439",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Online Multiplayer Gaming Engine",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-fc-440",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Insurance Risk & Actuarial Modeling",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-fc-441",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-fc-442",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-fc-443",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Digital Identity & Biometric Verification",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-fc-444",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Legal Discovery & Semantic Document Search",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-fc-445",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in AdTech Real-Time Bidding Exchange",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-fc-446",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Precision Agriculture & Drone Scouting",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-fc-447",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Industrial Robotics Predictive Maintenance",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-fc-448",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Educational Remote Proctoring Platform",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-fc-449",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-fc-450",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Disaster Emergency Dispatch & Operations",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_FLASHCARDS_18;
