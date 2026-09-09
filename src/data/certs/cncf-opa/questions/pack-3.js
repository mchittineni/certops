export const CNCF_OPA_QUESTIONS_3 = [
  {
    id: "cncf-opa-51",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Decision Logging and Auditability: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading platform, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The policy architecture team is currently tracking authorization events and compliance records under production cluster cycle 3.1.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these high-frequency fintech trading requirements for decision logging and auditability?",
    options: [
      { id: 'A', text: "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics." },
      { id: 'B', text: "Disable logging completely to save disk space and improve raw request latency." },
      { id: 'C', text: "Log only failed requests to local ephemeral container stdout without timestamps." },
      { id: 'D', text: "Store audit logs in unencrypted plaintext CSV files on public file shares." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can be masked to remove PII and streamed to SIEM systems for regulatory compliance and threat detection.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["decision-logs", "audit", "compliance", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-52",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "OPA Decoupled Policy Architecture: Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa platform, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The policy architecture team is currently decoupling authorization logic from application source code under production cluster cycle 3.2.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these healthcare patient records & hipaa requirements for opa decoupled policy architecture?",
    options: [
      { id: 'A', text: "Hardcode role-based access checks directly inside every microservice backend codebase using nested if-else branches." },
      { id: 'B', text: "Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions." },
      { id: 'C', text: "Deploy a monolithic relational SQL database and execute complex joins synchronously on every user HTTP request." },
      { id: 'D', text: "Rely on client-side frontend browser JavaScript code to enforce tenant isolation and access security." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authorization by sending arbitrary JSON context to OPA's in-memory engine, which evaluates declarative Rego policies in sub-millisecond time without querying remote databases during evaluation.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["opa", "architecture", "decoupling", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-53",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Rego Rule Evaluation and OR Semantics: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale platform, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The policy architecture team is currently writing declarative authorization rules in rego under production cluster cycle 3.3.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these global e-commerce black friday scale requirements for rego rule evaluation and or semantics?",
    options: [
      { id: 'A', text: "Nest procedural while loops with break statements inside imperative functions to compute access." },
      { id: 'B', text: "Write a single monolithic rule that throws an unhandled exception when any condition fails." },
      { id: 'C', text: "Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true." },
      { id: 'D', text: "Define conflicting rules in separate packages and randomly pick one at runtime." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "In Rego, multiple rule definitions sharing the same rule name represent a logical disjunction (OR). If all expressions within at least one rule body evaluate to true, the rule evaluates to true. Within a single rule body, expressions are evaluated as a logical conjunction (AND).",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "syntax", "rules", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-54",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Default Values and Safe Deny: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry platform, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The policy architecture team is currently configuring default deny rules for secure authorization under production cluster cycle 3.4.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these autonomous vehicle telemetry requirements for default values and safe deny?",
    options: [
      { id: 'A', text: "Set 'default allow := true' to ensure developers never encounter authorization errors during development." },
      { id: 'B', text: "Omit default statements so that undefined rules return null and grant unrestricted access." },
      { id: 'C', text: "Use catch-all wildcard rules that automatically approve all requests from unrecognized IP addresses." },
      { id: 'D', text: "Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A foundational principle of zero-trust policy-as-code is fail-closed security. Declaring 'default allow := false' ensures that if an incoming request does not explicitly satisfy any defined allow rule, the result evaluates deterministically to false rather than undefined or permissive.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "default", "security", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-55",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Set and Array Comprehensions: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform platform, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The policy architecture team is currently transforming and filtering nested collections in rego under production cluster cycle 3.5.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these multi-tenant b2b saas platform requirements for set and array comprehensions?",
    options: [
      { id: 'A', text: "Use set comprehensions like '[user | some user in input.users; user.active]' to extract and filter matching elements declaratively." },
      { id: 'B', text: "Write recursive procedural functions that mutate global array pointers in memory." },
      { id: 'C', text: "Export the entire JSON payload to a Python subprocess on each request to run list comprehensions." },
      { id: 'D', text: "Convert collections to comma-separated strings and use substring matching for authorization." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rego provides powerful set, array, and object comprehensions (e.g., '[x | ...]'). Comprehensions iterate over collections, apply filtering predicates, and construct new immutable collections in a single declarative expression without side effects.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "comprehensions", "collections", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-56",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Testing Rego with 'opa test': Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn platform, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The policy architecture team is currently unit testing policies with mocks and code coverage under production cluster cycle 3.6.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these media streaming & global cdn requirements for testing rego with 'opa test'?",
    options: [
      { id: 'A', text: "Deploy policies directly to production and monitor end-user support tickets to detect authorization bugs." },
      { id: 'B', text: "Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'." },
      { id: 'C', text: "Write unit tests inside shell scripts that curl the production API endpoint repeatedly." },
      { id: 'D', text: "Disable policy testing because Rego is declarative and cannot contain runtime syntax errors." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The OPA CLI provides a built-in testing framework via 'opa test'. Tests define rules starting with 'test_', mock contextual inputs using 'with input as ...' or 'with data as ...', and report code coverage metrics to verify edge cases and rule branches before deployment.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["testing", "opa-test", "coverage", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-57",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "OPA Bundle API and Management: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems platform, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The policy architecture team is currently distributing policies dynamically to opa instances under production cluster cycle 3.7.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these aerospace satellite ground systems requirements for opa bundle api and management?",
    options: [
      { id: 'A', text: "SSH into every Kubernetes node and manually copy-paste Rego files into the /tmp directory." },
      { id: 'B', text: "Rebuild the OPA container image from scratch every time a security policy rule changes." },
      { id: 'C', text: "Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory." },
      { id: 'D', text: "Embed all Rego policies directly in environment variables passed to the pod specification." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "OPA's Bundle API allows distributed OPA instances to periodically poll and activate versioned, digitally signed policy bundles (tar.gz files containing Rego and data) from cloud object storage (S3, GCS) or control planes without restarting OPA containers.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["bundles", "distribution", "operations", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-58",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Decision Logging and Auditability: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network platform, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The policy architecture team is currently tracking authorization events and compliance records under production cluster cycle 3.8.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these telecommunications 5g core network requirements for decision logging and auditability?",
    options: [
      { id: 'A', text: "Disable logging completely to save disk space and improve raw request latency." },
      { id: 'B', text: "Log only failed requests to local ephemeral container stdout without timestamps." },
      { id: 'C', text: "Store audit logs in unencrypted plaintext CSV files on public file shares." },
      { id: 'D', text: "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can be masked to remove PII and streamed to SIEM systems for regulatory compliance and threat detection.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["decision-logs", "audit", "compliance", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-59",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "OPA Decoupled Policy Architecture: Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot platform, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The policy architecture team is currently decoupling authorization logic from application source code under production cluster cycle 3.9.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these renewable energy smart grid iot requirements for opa decoupled policy architecture?",
    options: [
      { id: 'A', text: "Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions." },
      { id: 'B', text: "Hardcode role-based access checks directly inside every microservice backend codebase using nested if-else branches." },
      { id: 'C', text: "Deploy a monolithic relational SQL database and execute complex joins synchronously on every user HTTP request." },
      { id: 'D', text: "Rely on client-side frontend browser JavaScript code to enforce tenant isolation and access security." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authorization by sending arbitrary JSON context to OPA's in-memory engine, which evaluates declarative Rego policies in sub-millisecond time without querying remote databases during evaluation.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["opa", "architecture", "decoupling", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-60",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Rego Rule Evaluation and OR Semantics: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics platform, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The policy architecture team is currently writing declarative authorization rules in rego under production cluster cycle 3.10.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these supply chain cold-chain logistics requirements for rego rule evaluation and or semantics?",
    options: [
      { id: 'A', text: "Nest procedural while loops with break statements inside imperative functions to compute access." },
      { id: 'B', text: "Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true." },
      { id: 'C', text: "Write a single monolithic rule that throws an unhandled exception when any condition fails." },
      { id: 'D', text: "Define conflicting rules in separate packages and randomly pick one at runtime." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "In Rego, multiple rule definitions sharing the same rule name represent a logical disjunction (OR). If all expressions within at least one rule body evaluate to true, the rule evaluates to true. Within a single rule body, expressions are evaluated as a logical conjunction (AND).",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "syntax", "rules", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-61",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Default Values and Safe Deny: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments platform, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The policy architecture team is currently configuring default deny rules for secure authorization under production cluster cycle 3.11.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these banking core ledger & payments requirements for default values and safe deny?",
    options: [
      { id: 'A', text: "Set 'default allow := true' to ensure developers never encounter authorization errors during development." },
      { id: 'B', text: "Omit default statements so that undefined rules return null and grant unrestricted access." },
      { id: 'C', text: "Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed." },
      { id: 'D', text: "Use catch-all wildcard rules that automatically approve all requests from unrecognized IP addresses." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A foundational principle of zero-trust policy-as-code is fail-closed security. Declaring 'default allow := false' ensures that if an incoming request does not explicitly satisfy any defined allow rule, the result evaluates deterministically to false rather than undefined or permissive.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "default", "security", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-62",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Set and Array Comprehensions: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline platform, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The policy architecture team is currently transforming and filtering nested collections in rego under production cluster cycle 3.12.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these genomic sequencing & biotech pipeline requirements for set and array comprehensions?",
    options: [
      { id: 'A', text: "Write recursive procedural functions that mutate global array pointers in memory." },
      { id: 'B', text: "Export the entire JSON payload to a Python subprocess on each request to run list comprehensions." },
      { id: 'C', text: "Convert collections to comma-separated strings and use substring matching for authorization." },
      { id: 'D', text: "Use set comprehensions like '[user | some user in input.users; user.active]' to extract and filter matching elements declaratively." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rego provides powerful set, array, and object comprehensions (e.g., '[x | ...]'). Comprehensions iterate over collections, apply filtering predicates, and construct new immutable collections in a single declarative expression without side effects.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "comprehensions", "collections", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-63",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Testing Rego with 'opa test': Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network platform, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The policy architecture team is currently unit testing policies with mocks and code coverage under production cluster cycle 3.13.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these defense-grade zero-trust network requirements for testing rego with 'opa test'?",
    options: [
      { id: 'A', text: "Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'." },
      { id: 'B', text: "Deploy policies directly to production and monitor end-user support tickets to detect authorization bugs." },
      { id: 'C', text: "Write unit tests inside shell scripts that curl the production API endpoint repeatedly." },
      { id: 'D', text: "Disable policy testing because Rego is declarative and cannot contain runtime syntax errors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The OPA CLI provides a built-in testing framework via 'opa test'. Tests define rules starting with 'test_', mock contextual inputs using 'with input as ...' or 'with data as ...', and report code coverage metrics to verify edge cases and rule branches before deployment.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["testing", "opa-test", "coverage", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-64",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "OPA Bundle API and Management: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine platform, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The policy architecture team is currently distributing policies dynamically to opa instances under production cluster cycle 3.14.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these online multiplayer gaming engine requirements for opa bundle api and management?",
    options: [
      { id: 'A', text: "SSH into every Kubernetes node and manually copy-paste Rego files into the /tmp directory." },
      { id: 'B', text: "Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory." },
      { id: 'C', text: "Rebuild the OPA container image from scratch every time a security policy rule changes." },
      { id: 'D', text: "Embed all Rego policies directly in environment variables passed to the pod specification." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "OPA's Bundle API allows distributed OPA instances to periodically poll and activate versioned, digitally signed policy bundles (tar.gz files containing Rego and data) from cloud object storage (S3, GCS) or control planes without restarting OPA containers.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["bundles", "distribution", "operations", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-65",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Decision Logging and Auditability: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling platform, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The policy architecture team is currently tracking authorization events and compliance records under production cluster cycle 3.15.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these insurance risk & actuarial modeling requirements for decision logging and auditability?",
    options: [
      { id: 'A', text: "Disable logging completely to save disk space and improve raw request latency." },
      { id: 'B', text: "Log only failed requests to local ephemeral container stdout without timestamps." },
      { id: 'C', text: "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics." },
      { id: 'D', text: "Store audit logs in unencrypted plaintext CSV files on public file shares." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can be masked to remove PII and streamed to SIEM systems for regulatory compliance and threat detection.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["decision-logs", "audit", "compliance", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-66",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "OPA Decoupled Policy Architecture: Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform platform, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The policy architecture team is currently decoupling authorization logic from application source code under production cluster cycle 3.16.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these pharmaceutical clinical trial platform requirements for opa decoupled policy architecture?",
    options: [
      { id: 'A', text: "Hardcode role-based access checks directly inside every microservice backend codebase using nested if-else branches." },
      { id: 'B', text: "Deploy a monolithic relational SQL database and execute complex joins synchronously on every user HTTP request." },
      { id: 'C', text: "Rely on client-side frontend browser JavaScript code to enforce tenant isolation and access security." },
      { id: 'D', text: "Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authorization by sending arbitrary JSON context to OPA's in-memory engine, which evaluates declarative Rego policies in sub-millisecond time without querying remote databases during evaluation.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["opa", "architecture", "decoupling", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-67",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Rego Rule Evaluation and OR Semantics: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub platform, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The policy architecture team is currently writing declarative authorization rules in rego under production cluster cycle 3.17.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these smart city traffic & mobility sensor hub requirements for rego rule evaluation and or semantics?",
    options: [
      { id: 'A', text: "Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true." },
      { id: 'B', text: "Nest procedural while loops with break statements inside imperative functions to compute access." },
      { id: 'C', text: "Write a single monolithic rule that throws an unhandled exception when any condition fails." },
      { id: 'D', text: "Define conflicting rules in separate packages and randomly pick one at runtime." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "In Rego, multiple rule definitions sharing the same rule name represent a logical disjunction (OR). If all expressions within at least one rule body evaluate to true, the rule evaluates to true. Within a single rule body, expressions are evaluated as a logical conjunction (AND).",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "syntax", "rules", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-68",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Default Values and Safe Deny: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification platform, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The policy architecture team is currently configuring default deny rules for secure authorization under production cluster cycle 3.18.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these digital identity & biometric verification requirements for default values and safe deny?",
    options: [
      { id: 'A', text: "Set 'default allow := true' to ensure developers never encounter authorization errors during development." },
      { id: 'B', text: "Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed." },
      { id: 'C', text: "Omit default statements so that undefined rules return null and grant unrestricted access." },
      { id: 'D', text: "Use catch-all wildcard rules that automatically approve all requests from unrecognized IP addresses." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A foundational principle of zero-trust policy-as-code is fail-closed security. Declaring 'default allow := false' ensures that if an incoming request does not explicitly satisfy any defined allow rule, the result evaluates deterministically to false rather than undefined or permissive.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "default", "security", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-69",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Set and Array Comprehensions: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search platform, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The policy architecture team is currently transforming and filtering nested collections in rego under production cluster cycle 3.19.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these legal discovery & semantic document search requirements for set and array comprehensions?",
    options: [
      { id: 'A', text: "Write recursive procedural functions that mutate global array pointers in memory." },
      { id: 'B', text: "Export the entire JSON payload to a Python subprocess on each request to run list comprehensions." },
      { id: 'C', text: "Use set comprehensions like '[user | some user in input.users; user.active]' to extract and filter matching elements declaratively." },
      { id: 'D', text: "Convert collections to comma-separated strings and use substring matching for authorization." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rego provides powerful set, array, and object comprehensions (e.g., '[x | ...]'). Comprehensions iterate over collections, apply filtering predicates, and construct new immutable collections in a single declarative expression without side effects.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "comprehensions", "collections", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-70",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Testing Rego with 'opa test': AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange platform, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The policy architecture team is currently unit testing policies with mocks and code coverage under production cluster cycle 3.20.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these adtech real-time bidding exchange requirements for testing rego with 'opa test'?",
    options: [
      { id: 'A', text: "Deploy policies directly to production and monitor end-user support tickets to detect authorization bugs." },
      { id: 'B', text: "Write unit tests inside shell scripts that curl the production API endpoint repeatedly." },
      { id: 'C', text: "Disable policy testing because Rego is declarative and cannot contain runtime syntax errors." },
      { id: 'D', text: "Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The OPA CLI provides a built-in testing framework via 'opa test'. Tests define rules starting with 'test_', mock contextual inputs using 'with input as ...' or 'with data as ...', and report code coverage metrics to verify edge cases and rule branches before deployment.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["testing", "opa-test", "coverage", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-71",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "OPA Bundle API and Management: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting platform, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The policy architecture team is currently distributing policies dynamically to opa instances under production cluster cycle 3.21.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these precision agriculture & drone scouting requirements for opa bundle api and management?",
    options: [
      { id: 'A', text: "Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory." },
      { id: 'B', text: "SSH into every Kubernetes node and manually copy-paste Rego files into the /tmp directory." },
      { id: 'C', text: "Rebuild the OPA container image from scratch every time a security policy rule changes." },
      { id: 'D', text: "Embed all Rego policies directly in environment variables passed to the pod specification." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "OPA's Bundle API allows distributed OPA instances to periodically poll and activate versioned, digitally signed policy bundles (tar.gz files containing Rego and data) from cloud object storage (S3, GCS) or control planes without restarting OPA containers.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["bundles", "distribution", "operations", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-72",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Decision Logging and Auditability: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance platform, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The policy architecture team is currently tracking authorization events and compliance records under production cluster cycle 3.22.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these industrial robotics predictive maintenance requirements for decision logging and auditability?",
    options: [
      { id: 'A', text: "Disable logging completely to save disk space and improve raw request latency." },
      { id: 'B', text: "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics." },
      { id: 'C', text: "Log only failed requests to local ephemeral container stdout without timestamps." },
      { id: 'D', text: "Store audit logs in unencrypted plaintext CSV files on public file shares." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "OPA Decision Logging captures high-fidelity audit trails of every policy query, including the full input payload, timestamp, and evaluation decision. Logs can be masked to remove PII and streamed to SIEM systems for regulatory compliance and threat detection.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["decision-logs", "audit", "compliance", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-73",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "OPA Decoupled Policy Architecture: Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform platform, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The policy architecture team is currently decoupling authorization logic from application source code under production cluster cycle 3.23.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these educational remote proctoring platform requirements for opa decoupled policy architecture?",
    options: [
      { id: 'A', text: "Hardcode role-based access checks directly inside every microservice backend codebase using nested if-else branches." },
      { id: 'B', text: "Deploy a monolithic relational SQL database and execute complex joins synchronously on every user HTTP request." },
      { id: 'C', text: "Deploy OPA as a sidecar or host daemon that queries local memory policy bundles using JSON input and returns structured authorization decisions." },
      { id: 'D', text: "Rely on client-side frontend browser JavaScript code to enforce tenant isolation and access security." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Open Policy Agent (OPA) is a general-purpose, open-source policy engine that decouples policy decision-making from policy enforcement. Services offload authorization by sending arbitrary JSON context to OPA's in-memory engine, which evaluates declarative Rego policies in sub-millisecond time without querying remote databases during evaluation.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["opa", "architecture", "decoupling", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-74",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Rego Rule Evaluation and OR Semantics: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics platform, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The policy architecture team is currently writing declarative authorization rules in rego under production cluster cycle 3.24.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these real estate valuation & geo-spatial analytics requirements for rego rule evaluation and or semantics?",
    options: [
      { id: 'A', text: "Nest procedural while loops with break statements inside imperative functions to compute access." },
      { id: 'B', text: "Write a single monolithic rule that throws an unhandled exception when any condition fails." },
      { id: 'C', text: "Define conflicting rules in separate packages and randomly pick one at runtime." },
      { id: 'D', text: "Define multiple rules with the same name (e.g., 'allow') so that OPA evaluates them as a logical OR, granting access if any single rule body evaluates to true." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "In Rego, multiple rule definitions sharing the same rule name represent a logical disjunction (OR). If all expressions within at least one rule body evaluate to true, the rule evaluates to true. Within a single rule body, expressions are evaluated as a logical conjunction (AND).",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "syntax", "rules", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-75",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Default Values and Safe Deny: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations platform, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The policy architecture team is currently configuring default deny rules for secure authorization under production cluster cycle 3.25.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these disaster emergency dispatch & operations requirements for default values and safe deny?",
    options: [
      { id: 'A', text: "Set 'default allow := false' at the top of the Rego package and write explicit allow conditions to ensure unauthorized requests fail closed." },
      { id: 'B', text: "Set 'default allow := true' to ensure developers never encounter authorization errors during development." },
      { id: 'C', text: "Omit default statements so that undefined rules return null and grant unrestricted access." },
      { id: 'D', text: "Use catch-all wildcard rules that automatically approve all requests from unrecognized IP addresses." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A foundational principle of zero-trust policy-as-code is fail-closed security. Declaring 'default allow := false' ensures that if an incoming request does not explicitly satisfy any defined allow rule, the result evaluates deterministically to false rather than undefined or permissive.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego", "default", "security", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_QUESTIONS_3;
