export const CNCF_OPA_QUESTIONS_8 = [
  {
    id: "cncf-opa-176",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Where Authorization Decisions Get Evaluated: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The policy team is deciding where authorization decisions should be evaluated across a large service estate. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run OPA as a sidecar evaluating local policy bundles." },
      { id: 'B', text: "Run OPA as a central remote decision service that every application calls over the network, scaling the service horizontally behind a load balancer." },
      { id: 'C', text: "Compile the Rego policies to WebAssembly and make the authorization decisions inside each application process using the OPA Wasm SDK." },
      { id: 'D', text: "Embed the OPA Go library directly in each service and evaluate policy in-process against the bundles it loads at startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle poll rather than a redeploy. A central decision service reintroduces a network hop on the request path and makes authorization an availability dependency for every caller. The Wasm and Go-library approaches both evaluate in-process but bind the policy to each service's build and language, so a policy change means rebuilding and shipping the applications themselves.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["opa","architecture","decoupling","High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-177",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Granting Access When Any One Condition Holds: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The policy team is expressing several independent conditions where satisfying any one of them should grant access. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define one 'allow' rule whose body lists every condition on its own line, since the expressions inside a single rule body are combined by OPA as a logical OR when it is evaluated." },
      { id: 'B', text: "Define several rules with the same name; OPA combines them as OR." },
      { id: 'C', text: "Define a partial set rule such as 'allow[msg]' for each of them, granting access whenever the resulting set turns out to be non-empty." },
      { id: 'D', text: "Define a single 'allow' rule and join the individual conditions with the 'or' keyword placed between each expression in the rule body." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body are the opposite, a conjunction, so listing the conditions together demands all of them at once. Rego has no 'or' keyword, so that policy fails to parse. A partial set rule is valid Rego but changes the shape of the decision from a boolean to a set, which the enforcement point is not reading.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","syntax","rules","Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-178",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "What Happens When No Rule Matches: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The policy team is making sure a request that matches no rule is denied rather than left undefined. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the allow rules with no default at all and have every enforcement point treat an undefined decision result as though it were an explicit denial." },
      { id: 'B', text: "Add a catch-all rule 'allow := false' after the other allow rules so that it applies when none of them match." },
      { id: 'C', text: "Set 'default allow := false' and write explicit allow rules." },
      { id: 'D', text: "Set 'default allow := false' inside each allow rule body so that every rule carries its own fallback value independently." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on the caller to read undefined as deny works only while every caller does so, and a new integration that treats undefined as allow reopens the hole. A second unconditional 'allow := false' is a complete rule with a conflicting value and fails evaluation when another allow rule is also true, and 'default' is only legal at rule scope, not inside a body.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","default","security","Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-179",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Building a Filtered Collection Inside a Rule: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The policy team is deriving a filtered collection from nested input inside a single rule. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a partial set rule that assigns one element per matching input document and reference that rule from wherever the filtered collection is needed." },
      { id: 'B', text: "Use the built-in 'filter' function with a predicate over input.users so that only the active matching elements are returned." },
      { id: 'C', text: "Iterate with a 'for user in input.users' loop and append each matching element to a local variable as it is found." },
      { id: 'D', text: "Use a comprehension to build the filtered collection." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is valid Rego and often the right choice, but it defines a document at package scope rather than a value inside the rule, so it is visible to every other rule and to the query. The other two options are not Rego at all: there is no 'filter' built-in, and the language has no imperative loop and no mutable local variable to append to.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","comprehensions","collections","Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-180",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Verifying Policy Branches Before Release: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The policy team is verifying that every branch of a policy behaves correctly before it reaches a cluster. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'." },
      { id: 'B', text: "Create test rules prefixed with 'test_' and run 'opa eval' against each policy file in turn, comparing each printed result against the expected value recorded in CI." },
      { id: 'C', text: "Write the expected decisions into a JSON fixture and run 'opa check' over the whole policy directory to compare them against it." },
      { id: 'D', text: "Run 'conftest verify' against the policy directory so that the Rego test files execute as part of the Conftest tooling." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines never executed so untested branches are visible. 'opa eval' evaluates a query and prints a result but has no notion of pass or fail, so a CI job cannot gate on it without extra scripting. 'opa check' only parses and type-checks and never evaluates anything. 'conftest verify' does run Rego tests, but it reports no coverage and pulls in a second tool to do what the OPA CLI already does.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["testing","opa-test","coverage","Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-181",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Rolling a Policy Change Out Fleet-Wide: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The policy team is rolling a policy change out to every running OPA instance without redeploying services. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Push each change to every OPA instance through the REST Policy API so that the new rules apply immediately without waiting for a bundle poll interval to elapse." },
      { id: 'B', text: "Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory." },
      { id: 'C', text: "Bake the policy bundle into the OPA container image centrally and roll the deployment so that each instance restarts on the new version." },
      { id: 'D', text: "Mount the policy directory from a shared volume and start OPA with the --watch flag so that it reloads the files when they change." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-wide rollout is observable and verifiable. The REST Policy API pushes successfully but leaves no record of which revision any instance holds, and an instance that restarts loses the push entirely. Baking policy into the image ties every rule change to a container build and a rolling restart. The --watch flag reloads from local disk, which suits a developer laptop but offers no signing and no way to reach instances across a fleet.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["bundles","distribution","operations","Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-182",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Reconstructing Why a Request Was Denied: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The policy team is reconstructing after the fact exactly why a particular request was denied. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run OPA with the --log-level debug flag so that evaluation detail for each query appears on the container's standard output." },
      { id: 'B', text: "Enable OPA's status plugin so that the central service receives bundle activation records and health information from every instance." },
      { id: 'C', text: "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics." },
      { id: 'D', text: "Add a print() call inside each Rego rule so that the reason for a denial is written out to the OPA server log whenever that rule fires." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past decision, and they can be masked and shipped to a SIEM. Debug logging prints evaluation detail but is unstructured, unmasked, and far too voluminous to leave enabled in production. The status plugin reports which bundle an instance is running and nothing about individual decisions. print() emits a line only where an author remembered to add one and carries no input or result alongside it.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["decision-logs","audit","compliance","Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-183",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Where Authorization Decisions Get Evaluated: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The policy team is deciding where authorization decisions should be evaluated across a large service estate. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run OPA as a central remote decision service that every application calls over the network, scaling the service horizontally behind a load balancer." },
      { id: 'B', text: "Compile the Rego policies to WebAssembly and make the authorization decisions inside each application process using the OPA Wasm SDK." },
      { id: 'C', text: "Embed the OPA Go library directly in each service and evaluate policy in-process against the bundles it loads at startup." },
      { id: 'D', text: "Run OPA as a sidecar evaluating local policy bundles." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle poll rather than a redeploy. A central decision service reintroduces a network hop on the request path and makes authorization an availability dependency for every caller. The Wasm and Go-library approaches both evaluate in-process but bind the policy to each service's build and language, so a policy change means rebuilding and shipping the applications themselves.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["opa","architecture","decoupling","Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-184",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Granting Access When Any One Condition Holds: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The policy team is expressing several independent conditions where satisfying any one of them should grant access. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define several rules with the same name; OPA combines them as OR." },
      { id: 'B', text: "Define one 'allow' rule whose body lists every condition on its own line, since the expressions inside a single rule body are combined by OPA as a logical OR when it is evaluated." },
      { id: 'C', text: "Define a partial set rule such as 'allow[msg]' for each of them, granting access whenever the resulting set turns out to be non-empty." },
      { id: 'D', text: "Define a single 'allow' rule and join the individual conditions with the 'or' keyword placed between each expression in the rule body." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body are the opposite, a conjunction, so listing the conditions together demands all of them at once. Rego has no 'or' keyword, so that policy fails to parse. A partial set rule is valid Rego but changes the shape of the decision from a boolean to a set, which the enforcement point is not reading.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","syntax","rules","Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-185",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "What Happens When No Rule Matches: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The policy team is making sure a request that matches no rule is denied rather than left undefined. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the allow rules with no default at all and have every enforcement point treat an undefined decision result as though it were an explicit denial." },
      { id: 'B', text: "Set 'default allow := false' and write explicit allow rules." },
      { id: 'C', text: "Add a catch-all rule 'allow := false' after the other allow rules so that it applies when none of them match." },
      { id: 'D', text: "Set 'default allow := false' inside each allow rule body so that every rule carries its own fallback value independently." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on the caller to read undefined as deny works only while every caller does so, and a new integration that treats undefined as allow reopens the hole. A second unconditional 'allow := false' is a complete rule with a conflicting value and fails evaluation when another allow rule is also true, and 'default' is only legal at rule scope, not inside a body.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","default","security","Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-186",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Building a Filtered Collection Inside a Rule: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The policy team is deriving a filtered collection from nested input inside a single rule. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a partial set rule that assigns one element per matching input document and reference that rule from wherever the filtered collection is needed." },
      { id: 'B', text: "Use the built-in 'filter' function with a predicate over input.users so that only the active matching elements are returned." },
      { id: 'C', text: "Use a comprehension to build the filtered collection." },
      { id: 'D', text: "Iterate with a 'for user in input.users' loop and append each matching element to a local variable as it is found." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is valid Rego and often the right choice, but it defines a document at package scope rather than a value inside the rule, so it is visible to every other rule and to the query. The other two options are not Rego at all: there is no 'filter' built-in, and the language has no imperative loop and no mutable local variable to append to.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","comprehensions","collections","Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-187",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Verifying Policy Branches Before Release: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The policy team is verifying that every branch of a policy behaves correctly before it reaches a cluster. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create test rules prefixed with 'test_' and run 'opa eval' against each policy file in turn, comparing each printed result against the expected value recorded in CI." },
      { id: 'B', text: "Write the expected decisions into a JSON fixture and run 'opa check' over the whole policy directory to compare them against it." },
      { id: 'C', text: "Run 'conftest verify' against the policy directory so that the Rego test files execute as part of the Conftest tooling." },
      { id: 'D', text: "Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines never executed so untested branches are visible. 'opa eval' evaluates a query and prints a result but has no notion of pass or fail, so a CI job cannot gate on it without extra scripting. 'opa check' only parses and type-checks and never evaluates anything. 'conftest verify' does run Rego tests, but it reports no coverage and pulls in a second tool to do what the OPA CLI already does.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["testing","opa-test","coverage","Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-188",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Rolling a Policy Change Out Fleet-Wide: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The policy team is rolling a policy change out to every running OPA instance without redeploying services. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory." },
      { id: 'B', text: "Push each change to every OPA instance through the REST Policy API so that the new rules apply immediately without waiting for a bundle poll interval to elapse." },
      { id: 'C', text: "Bake the policy bundle into the OPA container image centrally and roll the deployment so that each instance restarts on the new version." },
      { id: 'D', text: "Mount the policy directory from a shared volume and start OPA with the --watch flag so that it reloads the files when they change." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-wide rollout is observable and verifiable. The REST Policy API pushes successfully but leaves no record of which revision any instance holds, and an instance that restarts loses the push entirely. Baking policy into the image ties every rule change to a container build and a rolling restart. The --watch flag reloads from local disk, which suits a developer laptop but offers no signing and no way to reach instances across a fleet.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["bundles","distribution","operations","Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-189",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Reconstructing Why a Request Was Denied: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The policy team is reconstructing after the fact exactly why a particular request was denied. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run OPA with the --log-level debug flag so that evaluation detail for each query appears on the container's standard output." },
      { id: 'B', text: "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics." },
      { id: 'C', text: "Enable OPA's status plugin so that the central service receives bundle activation records and health information from every instance." },
      { id: 'D', text: "Add a print() call inside each Rego rule so that the reason for a denial is written out to the OPA server log whenever that rule fires." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past decision, and they can be masked and shipped to a SIEM. Debug logging prints evaluation detail but is unstructured, unmasked, and far too voluminous to leave enabled in production. The status plugin reports which bundle an instance is running and nothing about individual decisions. print() emits a line only where an author remembered to add one and carries no input or result alongside it.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["decision-logs","audit","compliance","Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-190",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Where Authorization Decisions Get Evaluated: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The policy team is deciding where authorization decisions should be evaluated across a large service estate. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run OPA as a central remote decision service that every application calls over the network, scaling the service horizontally behind a load balancer." },
      { id: 'B', text: "Compile the Rego policies to WebAssembly and make the authorization decisions inside each application process using the OPA Wasm SDK." },
      { id: 'C', text: "Run OPA as a sidecar evaluating local policy bundles." },
      { id: 'D', text: "Embed the OPA Go library directly in each service and evaluate policy in-process against the bundles it loads at startup." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle poll rather than a redeploy. A central decision service reintroduces a network hop on the request path and makes authorization an availability dependency for every caller. The Wasm and Go-library approaches both evaluate in-process but bind the policy to each service's build and language, so a policy change means rebuilding and shipping the applications themselves.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["opa","architecture","decoupling","Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-191",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Granting Access When Any One Condition Holds: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The policy team is expressing several independent conditions where satisfying any one of them should grant access. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define one 'allow' rule whose body lists every condition on its own line, since the expressions inside a single rule body are combined by OPA as a logical OR when it is evaluated." },
      { id: 'B', text: "Define a partial set rule such as 'allow[msg]' for each of them, granting access whenever the resulting set turns out to be non-empty." },
      { id: 'C', text: "Define a single 'allow' rule and join the individual conditions with the 'or' keyword placed between each expression in the rule body." },
      { id: 'D', text: "Define several rules with the same name; OPA combines them as OR." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body are the opposite, a conjunction, so listing the conditions together demands all of them at once. Rego has no 'or' keyword, so that policy fails to parse. A partial set rule is valid Rego but changes the shape of the decision from a boolean to a set, which the enforcement point is not reading.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","syntax","rules","Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-192",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "What Happens When No Rule Matches: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The policy team is making sure a request that matches no rule is denied rather than left undefined. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Set 'default allow := false' and write explicit allow rules." },
      { id: 'B', text: "Write the allow rules with no default at all and have every enforcement point treat an undefined decision result as though it were an explicit denial." },
      { id: 'C', text: "Add a catch-all rule 'allow := false' after the other allow rules so that it applies when none of them match." },
      { id: 'D', text: "Set 'default allow := false' inside each allow rule body so that every rule carries its own fallback value independently." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on the caller to read undefined as deny works only while every caller does so, and a new integration that treats undefined as allow reopens the hole. A second unconditional 'allow := false' is a complete rule with a conflicting value and fails evaluation when another allow rule is also true, and 'default' is only legal at rule scope, not inside a body.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","default","security","Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-193",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Building a Filtered Collection Inside a Rule: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The policy team is deriving a filtered collection from nested input inside a single rule. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a partial set rule that assigns one element per matching input document and reference that rule from wherever the filtered collection is needed." },
      { id: 'B', text: "Use a comprehension to build the filtered collection." },
      { id: 'C', text: "Use the built-in 'filter' function with a predicate over input.users so that only the active matching elements are returned." },
      { id: 'D', text: "Iterate with a 'for user in input.users' loop and append each matching element to a local variable as it is found." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is valid Rego and often the right choice, but it defines a document at package scope rather than a value inside the rule, so it is visible to every other rule and to the query. The other two options are not Rego at all: there is no 'filter' built-in, and the language has no imperative loop and no mutable local variable to append to.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","comprehensions","collections","Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-194",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Verifying Policy Branches Before Release: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The policy team is verifying that every branch of a policy behaves correctly before it reaches a cluster. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create test rules prefixed with 'test_' and run 'opa eval' against each policy file in turn, comparing each printed result against the expected value recorded in CI." },
      { id: 'B', text: "Write the expected decisions into a JSON fixture and run 'opa check' over the whole policy directory to compare them against it." },
      { id: 'C', text: "Create test rules prefixed with 'test_' in dedicated test files and execute 'opa test --coverage' using the 'with' keyword to mock 'input' and 'data'." },
      { id: 'D', text: "Run 'conftest verify' against the policy directory so that the Rego test files execute as part of the Conftest tooling." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "'opa test' is the built-in test runner: it discovers the 'test_' rules, lets each one substitute input and data with 'with', and reports which policy lines never executed so untested branches are visible. 'opa eval' evaluates a query and prints a result but has no notion of pass or fail, so a CI job cannot gate on it without extra scripting. 'opa check' only parses and type-checks and never evaluates anything. 'conftest verify' does run Rego tests, but it reports no coverage and pulls in a second tool to do what the OPA CLI already does.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["testing","opa-test","coverage","Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-195",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Rolling a Policy Change Out Fleet-Wide: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The policy team is rolling a policy change out to every running OPA instance without redeploying services. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Push each change to every OPA instance through the REST Policy API so that the new rules apply immediately without waiting for a bundle poll interval to elapse." },
      { id: 'B', text: "Bake the policy bundle into the OPA container image centrally and roll the deployment so that each instance restarts on the new version." },
      { id: 'C', text: "Mount the policy directory from a shared volume and start OPA with the --watch flag so that it reloads the files when they change." },
      { id: 'D', text: "Configure OPA to poll a central bundle service via the Bundle API, automatically downloading, validating, and activating signed policy tarballs in memory." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Bundles are versioned, optionally signed, and activated atomically, and each instance reports the revision it is running through the status plugin, so a fleet-wide rollout is observable and verifiable. The REST Policy API pushes successfully but leaves no record of which revision any instance holds, and an instance that restarts loses the push entirely. Baking policy into the image ties every rule change to a container build and a rolling restart. The --watch flag reloads from local disk, which suits a developer laptop but offers no signing and no way to reach instances across a fleet.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["bundles","distribution","operations","AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-196",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Reconstructing Why a Request Was Denied: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The policy team is reconstructing after the fact exactly why a particular request was denied. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Enable OPA Decision Logs to export structured JSON records of every query, input payload, and decision result to central security analytics." },
      { id: 'B', text: "Run OPA with the --log-level debug flag so that evaluation detail for each query appears on the container's standard output." },
      { id: 'C', text: "Enable OPA's status plugin so that the central service receives bundle activation records and health information from every instance." },
      { id: 'D', text: "Add a print() call inside each Rego rule so that the reason for a denial is written out to the OPA server log whenever that rule fires." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Decision logs record the query, the full input, the result, and the bundle revision that produced it, which is exactly the set of facts needed to explain a past decision, and they can be masked and shipped to a SIEM. Debug logging prints evaluation detail but is unstructured, unmasked, and far too voluminous to leave enabled in production. The status plugin reports which bundle an instance is running and nothing about individual decisions. print() emits a line only where an author remembered to add one and carries no input or result alongside it.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["decision-logs","audit","compliance","Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-197",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Where Authorization Decisions Get Evaluated: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The policy team is deciding where authorization decisions should be evaluated across a large service estate. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Run OPA as a central remote decision service that every application calls over the network, scaling the service horizontally behind a load balancer." },
      { id: 'B', text: "Run OPA as a sidecar evaluating local policy bundles." },
      { id: 'C', text: "Compile the Rego policies to WebAssembly and make the authorization decisions inside each application process using the OPA Wasm SDK." },
      { id: 'D', text: "Embed the OPA Go library directly in each service and evaluate policy in-process against the bundles it loads at startup." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Running OPA next to the workload keeps evaluation in local memory, so decisions stay sub-millisecond and a policy change reaches every instance through a bundle poll rather than a redeploy. A central decision service reintroduces a network hop on the request path and makes authorization an availability dependency for every caller. The Wasm and Go-library approaches both evaluate in-process but bind the policy to each service's build and language, so a policy change means rebuilding and shipping the applications themselves.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["opa","architecture","decoupling","Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-198",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Granting Access When Any One Condition Holds: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The policy team is expressing several independent conditions where satisfying any one of them should grant access. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define one 'allow' rule whose body lists every condition on its own line, since the expressions inside a single rule body are combined by OPA as a logical OR when it is evaluated." },
      { id: 'B', text: "Define a partial set rule such as 'allow[msg]' for each of them, granting access whenever the resulting set turns out to be non-empty." },
      { id: 'C', text: "Define several rules with the same name; OPA combines them as OR." },
      { id: 'D', text: "Define a single 'allow' rule and join the individual conditions with the 'or' keyword placed between each expression in the rule body." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Several complete rules sharing a name are a disjunction: OPA tries each in turn and the rule is true as soon as one body holds. Expressions inside a single body are the opposite, a conjunction, so listing the conditions together demands all of them at once. Rego has no 'or' keyword, so that policy fails to parse. A partial set rule is valid Rego but changes the shape of the decision from a boolean to a set, which the enforcement point is not reading.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","syntax","rules","Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-199",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "What Happens When No Rule Matches: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The policy team is making sure a request that matches no rule is denied rather than left undefined. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Write the allow rules with no default at all and have every enforcement point treat an undefined decision result as though it were an explicit denial." },
      { id: 'B', text: "Add a catch-all rule 'allow := false' after the other allow rules so that it applies when none of them match." },
      { id: 'C', text: "Set 'default allow := false' inside each allow rule body so that every rule carries its own fallback value independently." },
      { id: 'D', text: "Set 'default allow := false' and write explicit allow rules." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "A default assignment gives the document a value whenever no rule body succeeds, so the policy itself guarantees the denial rather than delegating it. Relying on the caller to read undefined as deny works only while every caller does so, and a new integration that treats undefined as allow reopens the hole. A second unconditional 'allow := false' is a complete rule with a conflicting value and fails evaluation when another allow rule is also true, and 'default' is only legal at rule scope, not inside a body.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","default","security","Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-200",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d1",
    domainName: "OPA Architecture, Rego Language Fundamentals, and Testing",
    title: "Building a Filtered Collection Inside a Rule: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The policy team is deriving a filtered collection from nested input inside a single rule. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use a comprehension to build the filtered collection." },
      { id: 'B', text: "Use a partial set rule that assigns one element per matching input document and reference that rule from wherever the filtered collection is needed." },
      { id: 'C', text: "Use the built-in 'filter' function with a predicate over input.users so that only the active matching elements are returned." },
      { id: 'D', text: "Iterate with a 'for user in input.users' loop and append each matching element to a local variable as it is found." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "A comprehension iterates, filters, and constructs the new collection as one expression whose value is local to the rule that needs it. A partial set rule is valid Rego and often the right choice, but it defines a document at package scope rather than a value inside the rule, so it is visible to every other rule and to the query. The other two options are not Rego at all: there is no 'filter' built-in, and the language has no imperative loop and no mutable local variable to append to.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["rego","comprehensions","collections","Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_QUESTIONS_8;
