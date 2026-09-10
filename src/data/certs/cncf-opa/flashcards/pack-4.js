export const CNCF_OPA_FLASHCARDS_4 = [
  {
    id: "cncf-opa-fc-76",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in High-Frequency FinTech Trading",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on...",
    tags: ["rego", "default", "security", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-fc-77",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Healthcare Patient Records & HIPAA",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use a comprehension such as '[user | some user in input.users; user.active]' to build the filtered collection declaratively in one expression. Operational requirement: A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is val...",
    tags: ["rego", "comprehensions", "collections", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-fc-78",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Global E-Commerce Black Friday Scale",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: 'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines neve...",
    tags: ["testing", "opa-test", "coverage", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-fc-79",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Autonomous Vehicle Telemetry",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-w...",
    tags: ["bundles", "distribution", "operations", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-fc-80",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past...",
    tags: ["decision-logs", "audit", "compliance", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-fc-81",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Media Streaming & Global CDN",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle...",
    tags: ["opa", "architecture", "decoupling", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-fc-82",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Aerospace Satellite Ground Systems",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body...",
    tags: ["rego", "syntax", "rules", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-fc-83",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Telecommunications 5G Core Network",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on...",
    tags: ["rego", "default", "security", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-fc-84",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Renewable Energy Smart Grid IoT",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use a comprehension such as '[user | some user in input.users; user.active]' to build the filtered collection declaratively in one expression. Operational requirement: A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is val...",
    tags: ["rego", "comprehensions", "collections", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-fc-85",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Supply Chain Cold-Chain Logistics",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: 'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines neve...",
    tags: ["testing", "opa-test", "coverage", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-fc-86",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Banking Core Ledger & Payments",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-w...",
    tags: ["bundles", "distribution", "operations", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-fc-87",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past...",
    tags: ["decision-logs", "audit", "compliance", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-fc-88",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in Defense-Grade Zero-Trust Network",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle...",
    tags: ["opa", "architecture", "decoupling", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-fc-89",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Online Multiplayer Gaming Engine",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body...",
    tags: ["rego", "syntax", "rules", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-fc-90",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Insurance Risk & Actuarial Modeling",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on...",
    tags: ["rego", "default", "security", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-fc-91",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use a comprehension such as '[user | some user in input.users; user.active]' to build the filtered collection declaratively in one expression. Operational requirement: A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is val...",
    tags: ["rego", "comprehensions", "collections", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-fc-92",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: 'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines neve...",
    tags: ["testing", "opa-test", "coverage", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-fc-93",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Digital Identity & Biometric Verification",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-w...",
    tags: ["bundles", "distribution", "operations", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-fc-94",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Decision Logging and Auditability in Legal Discovery & Semantic Document Search",
    hint: "Focus on decision-logs and audit best practices.",
    back: "<strong>Decision Logging and Auditability</strong>: Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics. Operational requirement: Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past...",
    tags: ["decision-logs", "audit", "compliance", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-fc-95",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Decoupled Policy Architecture in AdTech Real-Time Bidding Exchange",
    hint: "Focus on opa and architecture best practices.",
    back: "<strong>OPA Decoupled Policy Architecture</strong>: Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions. Operational requirement: Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle...",
    tags: ["opa", "architecture", "decoupling", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-fc-96",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Rego Rule Evaluation and OR Semantics in Precision Agriculture & Drone Scouting",
    hint: "Focus on rego and syntax best practices.",
    back: "<strong>Rego Rule Evaluation and OR Semantics</strong>: Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true. Operational requirement: Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body...",
    tags: ["rego", "syntax", "rules", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-fc-97",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Default Values and Safe Deny in Industrial Robotics Predictive Maintenance",
    hint: "Focus on rego and default best practices.",
    back: "<strong>Default Values and Safe Deny</strong>: Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed. Operational requirement: A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on...",
    tags: ["rego", "default", "security", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-fc-98",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Set and Array Comprehensions in Educational Remote Proctoring Platform",
    hint: "Focus on rego and comprehensions best practices.",
    back: "<strong>Set and Array Comprehensions</strong>: Use a comprehension such as '[user | some user in input.users; user.active]' to build the filtered collection declaratively in one expression. Operational requirement: A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is val...",
    tags: ["rego", "comprehensions", "collections", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-fc-99",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: Testing Rego with 'opa test' in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on testing and opa-test best practices.",
    back: "<strong>Testing Rego with 'opa test'</strong>: Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'. Operational requirement: 'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines neve...",
    tags: ["testing", "opa-test", "coverage", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-fc-100",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    front: "CNCF OPA: OPA Bundle API and Management in Disaster Emergency Dispatch & Operations",
    hint: "Focus on bundles and distribution best practices.",
    back: "<strong>OPA Bundle API and Management</strong>: Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory. Operational requirement: Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-w...",
    tags: ["bundles", "distribution", "operations", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_FLASHCARDS_4;
