export const CNCF_OPA_FLASHCARDS_20 = [
  {
    id: "cncf-opa-fc-476",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in High-Frequency FinTech Trading",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-fc-477",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Healthcare Patient Records & HIPAA",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-fc-478",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Global E-Commerce Black Friday Scale",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-fc-479",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Autonomous Vehicle Telemetry",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-fc-480",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-fc-481",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Media Streaming & Global CDN",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-fc-482",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Aerospace Satellite Ground Systems",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-fc-483",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Telecommunications 5G Core Network",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-fc-484",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Renewable Energy Smart Grid IoT",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-fc-485",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Supply Chain Cold-Chain Logistics",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-fc-486",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Banking Core Ledger & Payments",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-fc-487",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-fc-488",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Defense-Grade Zero-Trust Network",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-fc-489",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Online Multiplayer Gaming Engine",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-fc-490",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Insurance Risk & Actuarial Modeling",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-fc-491",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-fc-492",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-fc-493",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Digital Identity & Biometric Verification",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-fc-494",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Legal Discovery & Semantic Document Search",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-fc-495",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in AdTech Real-Time Bidding Exchange",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-fc-496",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Kafka Topic Authorization with OPA in Precision Agriculture & Drone Scouting",
    hint: "Focus on kafka and messaging best practices.",
    back: "<strong>Kafka Topic Authorization with OPA</strong>: Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types. Operational requirement: The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can cons...",
    tags: ["kafka", "messaging", "authorization", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-fc-497",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Styra Declarative Authorization Service (DAS) in Industrial Robotics Predictive Maintenance",
    hint: "Focus on styra-das and control-plane best practices.",
    back: "<strong>Styra Declarative Authorization Service (DAS)</strong>: Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting. Operational requirement: DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions again...",
    tags: ["styra-das", "control-plane", "enterprise", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-fc-498",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Rego Performance and Indexing in Educational Remote Proctoring Platform",
    hint: "Focus on performance and indexing best practices.",
    back: "<strong>Rego Performance and Indexing</strong>: Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression. Operational requirement: Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on tha...",
    tags: ["performance", "indexing", "optimization", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-fc-499",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Conftest for Infrastructure as Code in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on conftest and iac best practices.",
    back: "<strong>Conftest for Infrastructure as Code</strong>: Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs. Operational requirement: Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it bring...",
    tags: ["conftest", "iac", "ci-cd", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-fc-500",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    front: "CNCF OPA: Microservice Authorization with Envoy and ExtAuthz in Disaster Emergency Dispatch & Operations",
    hint: "Focus on envoy and ext-authz best practices.",
    back: "<strong>Microservice Authorization with Envoy and ExtAuthz</strong>: Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions. Operational requirement: The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside ...",
    tags: ["envoy", "ext-authz", "service-mesh", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_FLASHCARDS_20;
