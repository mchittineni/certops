export const CNCF_OPA_FLASHCARDS_7 = [
  {
    id: "cncf-opa-fc-151",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in High-Frequency FinTech Trading",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: The OPA CLI provides a built-in testing framework via 'opa test'. Tests define rules starting with 'test_', mock contextual inputs using 'with input as ...' or ...",
    tags: ["testing", "opa-test", "coverage", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-fc-152",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Healthcare Patient Records & HIPAA",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: OPA's Bundle API allows distributed OPA instances to periodically poll and activate versioned, digitally signed policy bundles (tar.gz files containing Rego and...",
    tags: ["bundles", "distribution", "operations", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-fc-153",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Global E-Commerce Black Friday Scale",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can b...",
    tags: ["decision-logs", "audit", "compliance", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-fc-154",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Autonomous Vehicle Telemetry",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authoriz...",
    tags: ["opa", "architecture", "decoupling", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-fc-155",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: In Rego, multiple rule definitions sharing the same rule name represent a logical disjunction (OR). If all expressions within at least one rule body evaluate to...",
    tags: ["rego", "syntax", "rules", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-fc-156",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Media Streaming & Global CDN",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A foundational principle of zero-trust policy-as-code is fail-closed security. Declaring 'default allow := false' ensures that if an incoming request does not e...",
    tags: ["rego", "default", "security", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-fc-157",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Aerospace Satellite Ground Systems",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use set comprehensions like '[user | some user in input.users; user.active]' to extract and filter matching elements declaratively. Operational requirement: Rego provides powerful set, array, and object comprehensions (e.g., '[x | ...]'). Comprehensions iterate over collections, apply filtering predicates, and const...",
    tags: ["rego", "comprehensions", "collections", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-fc-158",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Telecommunications 5G Core Network",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: The OPA CLI provides a built-in testing framework via 'opa test'. Tests define rules starting with 'test_', mock contextual inputs using 'with input as ...' or ...",
    tags: ["testing", "opa-test", "coverage", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-fc-159",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Renewable Energy Smart Grid IoT",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: OPA's Bundle API allows distributed OPA instances to periodically poll and activate versioned, digitally signed policy bundles (tar.gz files containing Rego and...",
    tags: ["bundles", "distribution", "operations", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-fc-160",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Supply Chain Cold-Chain Logistics",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can b...",
    tags: ["decision-logs", "audit", "compliance", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-fc-161",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Banking Core Ledger & Payments",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authoriz...",
    tags: ["opa", "architecture", "decoupling", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-fc-162",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: In Rego, multiple rule definitions sharing the same rule name represent a logical disjunction (OR). If all expressions within at least one rule body evaluate to...",
    tags: ["rego", "syntax", "rules", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-fc-163",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Defense-Grade Zero-Trust Network",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A foundational principle of zero-trust policy-as-code is fail-closed security. Declaring 'default allow := false' ensures that if an incoming request does not e...",
    tags: ["rego", "default", "security", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-fc-164",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Online Multiplayer Gaming Engine",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use set comprehensions like '[user | some user in input.users; user.active]' to extract and filter matching elements declaratively. Operational requirement: Rego provides powerful set, array, and object comprehensions (e.g., '[x | ...]'). Comprehensions iterate over collections, apply filtering predicates, and const...",
    tags: ["rego", "comprehensions", "collections", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-fc-165",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Insurance Risk & Actuarial Modeling",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: The OPA CLI provides a built-in testing framework via 'opa test'. Tests define rules starting with 'test_', mock contextual inputs using 'with input as ...' or ...",
    tags: ["testing", "opa-test", "coverage", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-fc-166",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: OPA's Bundle API allows distributed OPA instances to periodically poll and activate versioned, digitally signed policy bundles (tar.gz files containing Rego and...",
    tags: ["bundles", "distribution", "operations", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-fc-167",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can b...",
    tags: ["decision-logs", "audit", "compliance", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-fc-168",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Digital Identity & Biometric Verification",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authoriz...",
    tags: ["opa", "architecture", "decoupling", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-fc-169",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Legal Discovery & Semantic Document Search",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: In Rego, multiple rule definitions sharing the same rule name represent a logical disjunction (OR). If all expressions within at least one rule body evaluate to...",
    tags: ["rego", "syntax", "rules", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-fc-170",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in AdTech Real-Time Bidding Exchange",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A foundational principle of zero-trust policy-as-code is fail-closed security. Declaring 'default allow := false' ensures that if an incoming request does not e...",
    tags: ["rego", "default", "security", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-fc-171",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Precision Agriculture & Drone Scouting",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use set comprehensions like '[user | some user in input.users; user.active]' to extract and filter matching elements declaratively. Operational requirement: Rego provides powerful set, array, and object comprehensions (e.g., '[x | ...]'). Comprehensions iterate over collections, apply filtering predicates, and const...",
    tags: ["rego", "comprehensions", "collections", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-fc-172",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Industrial Robotics Predictive Maintenance",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: The OPA CLI provides a built-in testing framework via 'opa test'. Tests define rules starting with 'test_', mock contextual inputs using 'with input as ...' or ...",
    tags: ["testing", "opa-test", "coverage", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-fc-173",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Educational Remote Proctoring Platform",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: OPA's Bundle API allows distributed OPA instances to periodically poll and activate versioned, digitally signed policy bundles (tar.gz files containing Rego and...",
    tags: ["bundles", "distribution", "operations", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-fc-174",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can b...",
    tags: ["decision-logs", "audit", "compliance", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-fc-175",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Disaster Emergency Dispatch & Operations",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authoriz...",
    tags: ["opa", "architecture", "decoupling", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_FLASHCARDS_7;
