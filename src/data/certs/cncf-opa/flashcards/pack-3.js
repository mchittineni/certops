export const CNCF_OPA_FLASHCARDS_3 = [
  {
    id: "cncf-opa-fc-51",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in High-Frequency FinTech Trading",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past...",
    tags: ["decision-logs", "audit", "compliance", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-fc-52",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Healthcare Patient Records & HIPAA",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle...",
    tags: ["opa", "architecture", "decoupling", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-fc-53",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Global E-Commerce Black Friday Scale",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body...",
    tags: ["rego", "syntax", "rules", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-fc-54",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Autonomous Vehicle Telemetry",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on...",
    tags: ["rego", "default", "security", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-fc-55",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use a comprehension such as '[user | some user in input.users; user.active]' to build the filtered collection declaratively in one expression. Operational requirement: A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is val...",
    tags: ["rego", "comprehensions", "collections", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-fc-56",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Media Streaming & Global CDN",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: 'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines neve...",
    tags: ["testing", "opa-test", "coverage", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-fc-57",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Aerospace Satellite Ground Systems",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-w...",
    tags: ["bundles", "distribution", "operations", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-fc-58",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Telecommunications 5G Core Network",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past...",
    tags: ["decision-logs", "audit", "compliance", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-fc-59",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Renewable Energy Smart Grid IoT",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle...",
    tags: ["opa", "architecture", "decoupling", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-fc-60",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Supply Chain Cold-Chain Logistics",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body...",
    tags: ["rego", "syntax", "rules", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-fc-61",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Banking Core Ledger & Payments",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on...",
    tags: ["rego", "default", "security", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-fc-62",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use a comprehension such as '[user | some user in input.users; user.active]' to build the filtered collection declaratively in one expression. Operational requirement: A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is val...",
    tags: ["rego", "comprehensions", "collections", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-fc-63",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Defense-Grade Zero-Trust Network",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: 'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines neve...",
    tags: ["testing", "opa-test", "coverage", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-fc-64",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Online Multiplayer Gaming Engine",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-w...",
    tags: ["bundles", "distribution", "operations", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-fc-65",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Insurance Risk & Actuarial Modeling",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past...",
    tags: ["decision-logs", "audit", "compliance", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-fc-66",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle...",
    tags: ["opa", "architecture", "decoupling", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-fc-67",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body...",
    tags: ["rego", "syntax", "rules", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-fc-68",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Digital Identity & Biometric Verification",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on...",
    tags: ["rego", "default", "security", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-fc-69",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Legal Discovery & Semantic Document Search",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use a comprehension such as '[user | some user in input.users; user.active]' to build the filtered collection declaratively in one expression. Operational requirement: A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is val...",
    tags: ["rego", "comprehensions", "collections", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-fc-70",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in AdTech Real-Time Bidding Exchange",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: 'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines neve...",
    tags: ["testing", "opa-test", "coverage", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-fc-71",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Precision Agriculture & Drone Scouting",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-w...",
    tags: ["bundles", "distribution", "operations", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-fc-72",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Industrial Robotics Predictive Maintenance",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past...",
    tags: ["decision-logs", "audit", "compliance", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-fc-73",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Educational Remote Proctoring Platform",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle...",
    tags: ["opa", "architecture", "decoupling", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-fc-74",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body...",
    tags: ["rego", "syntax", "rules", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-fc-75",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Disaster Emergency Dispatch & Operations",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on...",
    tags: ["rego", "default", "security", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_FLASHCARDS_3;
