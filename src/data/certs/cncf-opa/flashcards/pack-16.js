export const CNCF_OPA_FLASHCARDS_16 = [
  {
    id: "cncf-opa-fc-376",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in High-Frequency FinTech Trading",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-fc-377",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Healthcare Patient Records & HIPAA",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-fc-378",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Global E-Commerce Black Friday Scale",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-fc-379",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Autonomous Vehicle Telemetry",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-fc-380",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-fc-381",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Media Streaming & Global CDN",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-fc-382",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Aerospace Satellite Ground Systems",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-fc-383",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Telecommunications 5G Core Network",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-fc-384",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Renewable Energy Smart Grid IoT",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-fc-385",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Supply Chain Cold-Chain Logistics",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-fc-386",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Banking Core Ledger & Payments",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-fc-387",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-fc-388",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Defense-Grade Zero-Trust Network",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-fc-389",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Online Multiplayer Gaming Engine",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-fc-390",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Insurance Risk & Actuarial Modeling",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-fc-391",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-fc-392",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-fc-393",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Digital Identity & Biometric Verification",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-fc-394",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Legal Discovery & Semantic Document Search",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-fc-395",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in AdTech Real-Time Bidding Exchange",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-fc-396",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Precision Agriculture & Drone Scouting",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-fc-397",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Industrial Robotics Predictive Maintenance",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-fc-398",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Educational Remote Proctoring Platform",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-fc-399",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-fc-400",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Disaster Emergency Dispatch & Operations",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_FLASHCARDS_16;
