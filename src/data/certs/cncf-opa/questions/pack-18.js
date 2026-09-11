export const CNCF_OPA_QUESTIONS_18 = [
  {
    id: "cncf-opa-426",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Uniform API Authorization at the Proxy Layer: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The policy team is enforcing consistent request-level authorization without changing every service. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." },
      { id: 'B', text: "Configure Envoy's built-in RBAC filter with explicit principals and permissions so that the proxy evaluates the access rules itself without any external call." },
      { id: 'C', text: "Configure Envoy's JWT authentication filter to validate each token in real-time and forward the verified claims to the upstream service." },
      { id: 'D', text: "Configure an Envoy Lua filter that calls OPA's REST API from a script executed on every inbound request before it is proxied." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside the proxy while adding only a local hop. The RBAC filter evaluates in-proxy with no external call but expresses far less than Rego and has to be redeployed with the Envoy configuration for every rule change. The JWT filter establishes who the caller is and stops there, leaving the authorization decision unmade. A Lua filter can reach OPA's REST API and works, but it is hand-written glue on the request path where ext_authz is purpose-built.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy","ext-authz","service-mesh","High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-427",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Per-Topic Access Control on a Message Broker: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The policy team is controlling which client identities may produce to or consume from each topic. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Kafka to authenticate clients with mTLS and map each certificate subject onto a topic name prefix in the broker configuration." },
      { id: 'B', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." },
      { id: 'C', text: "Configure Kafka's built-in AclAuthorizer and manage which identities may produce to or consume from each topic with 'kafka-acls.sh'." },
      { id: 'D', text: "Deploy OPA as a sidecar beside each Kafka client and have the application check its own permission before it produces a message." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can consider the principal, the operation, and the topic together. Prefix-mapped mTLS establishes identity and a naming convention but expresses no rules about operations. The built-in AclAuthorizer does enforce at the broker and is the standard alternative, at the cost of managing ACL entries per topic per principal rather than writing one rule. Checking in a client-side sidecar leaves the broker itself unprotected against any client that skips the check.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka","messaging","authorization","Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-428",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Central Control Plane for Many OPA Deployments: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The policy team is managing policy authoring, distribution, and reporting across many OPA deployments. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Store the policies in a Git repository and build the signed bundles in CI, publishing each one to the bundle endpoint that serves its own environment." },
      { id: 'B', text: "Host the policy bundles in an object storage bucket for distribution and point every OPA instance's bundle plugin at that same location." },
      { id: 'C', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." },
      { id: 'D', text: "Use the OPA REST API's query and decision log endpoints for reporting, assembling internal dashboards that show policy activity over time." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions against a proposed policy before it ships, and compliance reporting across every connected system. Git plus CI publishing is a sound GitOps pattern and covers distribution well, but impact analysis and cross-cluster reporting remain to be built. An object storage bucket covers distribution alone. The REST endpoints expose the raw data that dashboards could be built from, which is the work a control plane removes.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das","control-plane","enterprise","Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-429",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Keeping Evaluation Fast at High Query Rates: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The policy team is keeping per-query evaluation latency low as the policy and query rate grow. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Compile the policy to WebAssembly with 'opa build -t wasm' so that each evaluation runs as compiled code inside the host process rather than interpreted Rego." },
      { id: 'B', text: "Move the large lookup tables out of the policy and fetch them per query with 'http.send' so that less data is held in memory." },
      { id: 'C', text: "Raise the OPA server's worker count so that a larger number of authorization queries can be evaluated in parallel across the available cores." },
      { id: 'D', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on that value, so a policy with hundreds of rules costs about what a handful would. Compiling to Wasm changes how each expression executes but still walks every rule the index would have skipped. Replacing in-memory data with an http.send per query adds a network round trip to the hot path and is the single most damaging thing a policy can do to latency. More workers raise throughput while leaving per-query latency exactly as it was.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance","indexing","optimization","Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-430",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Policy Checks on Terraform and Dockerfiles: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The policy team is applying the same Rego guardrails to Terraform plans and Dockerfiles in CI. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." },
      { id: 'B', text: "Use 'opa eval' in CI with the Terraform plan JSON supplied as the input document so that the same Rego policies are evaluated." },
      { id: 'C', text: "Use Gatekeeper's gator CLI against the Terraform plan so that the ConstraintTemplates already in the cluster apply to infrastructure code." },
      { id: 'D', text: "Use 'terraform validate' together with a validation block in each module to enforce the organisation's rules at plan time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it brings a test harness and exit codes CI can gate on. 'opa eval' does evaluate the same policy against a plan that has already been converted to JSON, but it handles only that one format and leaves the parsing and pass-fail logic to be scripted. gator understands Kubernetes manifests and constraint resources, not Terraform. A validation block only constrains a module's own input variables and cannot express organisation-wide rules.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest","iac","ci-cd","Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-431",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Uniform API Authorization at the Proxy Layer: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The policy team is enforcing consistent request-level authorization without changing every service. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Envoy's built-in RBAC filter with explicit principals and permissions so that the proxy evaluates the access rules itself without any external call." },
      { id: 'B', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." },
      { id: 'C', text: "Configure Envoy's JWT authentication filter to validate each token in real-time and forward the verified claims to the upstream service." },
      { id: 'D', text: "Configure an Envoy Lua filter that calls OPA's REST API from a script executed on every inbound request before it is proxied." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside the proxy while adding only a local hop. The RBAC filter evaluates in-proxy with no external call but expresses far less than Rego and has to be redeployed with the Envoy configuration for every rule change. The JWT filter establishes who the caller is and stops there, leaving the authorization decision unmade. A Lua filter can reach OPA's REST API and works, but it is hand-written glue on the request path where ext_authz is purpose-built.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy","ext-authz","service-mesh","Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-432",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Per-Topic Access Control on a Message Broker: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The policy team is controlling which client identities may produce to or consume from each topic. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Kafka to authenticate clients with mTLS and map each certificate subject onto a topic name prefix in the broker configuration." },
      { id: 'B', text: "Configure Kafka's built-in AclAuthorizer and manage which identities may produce to or consume from each topic with 'kafka-acls.sh'." },
      { id: 'C', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." },
      { id: 'D', text: "Deploy OPA as a sidecar beside each Kafka client and have the application check its own permission before it produces a message." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can consider the principal, the operation, and the topic together. Prefix-mapped mTLS establishes identity and a naming convention but expresses no rules about operations. The built-in AclAuthorizer does enforce at the broker and is the standard alternative, at the cost of managing ACL entries per topic per principal rather than writing one rule. Checking in a client-side sidecar leaves the broker itself unprotected against any client that skips the check.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka","messaging","authorization","Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-433",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Central Control Plane for Many OPA Deployments: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The policy team is managing policy authoring, distribution, and reporting across many OPA deployments. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Store the policies in a Git repository and build the signed bundles in CI, publishing each one to the bundle endpoint that serves its own environment." },
      { id: 'B', text: "Host the policy bundles in an object storage bucket for distribution and point every OPA instance's bundle plugin at that same location." },
      { id: 'C', text: "Use the OPA REST API's query and decision log endpoints for reporting, assembling internal dashboards that show policy activity over time." },
      { id: 'D', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions against a proposed policy before it ships, and compliance reporting across every connected system. Git plus CI publishing is a sound GitOps pattern and covers distribution well, but impact analysis and cross-cluster reporting remain to be built. An object storage bucket covers distribution alone. The REST endpoints expose the raw data that dashboards could be built from, which is the work a control plane removes.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das","control-plane","enterprise","Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-434",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Keeping Evaluation Fast at High Query Rates: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The policy team is keeping per-query evaluation latency low as the policy and query rate grow. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." },
      { id: 'B', text: "Compile the policy to WebAssembly with 'opa build -t wasm' so that each evaluation runs as compiled code inside the host process rather than interpreted Rego." },
      { id: 'C', text: "Move the large lookup tables out of the policy and fetch them per query with 'http.send' so that less data is held in memory." },
      { id: 'D', text: "Raise the OPA server's worker count so that a larger number of authorization queries can be evaluated in parallel across the available cores." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on that value, so a policy with hundreds of rules costs about what a handful would. Compiling to Wasm changes how each expression executes but still walks every rule the index would have skipped. Replacing in-memory data with an http.send per query adds a network round trip to the hot path and is the single most damaging thing a policy can do to latency. More workers raise throughput while leaving per-query latency exactly as it was.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance","indexing","optimization","Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-435",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Policy Checks on Terraform and Dockerfiles: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The policy team is applying the same Rego guardrails to Terraform plans and Dockerfiles in CI. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'opa eval' in CI with the Terraform plan JSON supplied as the input document so that the same Rego policies are evaluated." },
      { id: 'B', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." },
      { id: 'C', text: "Use Gatekeeper's gator CLI against the Terraform plan so that the ConstraintTemplates already in the cluster apply to infrastructure code." },
      { id: 'D', text: "Use 'terraform validate' together with a validation block in each module to enforce the organisation's rules at plan time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it brings a test harness and exit codes CI can gate on. 'opa eval' does evaluate the same policy against a plan that has already been converted to JSON, but it handles only that one format and leaves the parsing and pass-fail logic to be scripted. gator understands Kubernetes manifests and constraint resources, not Terraform. A validation block only constrains a module's own input variables and cannot express organisation-wide rules.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest","iac","ci-cd","Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-436",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Uniform API Authorization at the Proxy Layer: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The policy team is enforcing consistent request-level authorization without changing every service. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Envoy's built-in RBAC filter with explicit principals and permissions so that the proxy evaluates the access rules itself without any external call." },
      { id: 'B', text: "Configure Envoy's JWT authentication filter to validate each token in real-time and forward the verified claims to the upstream service." },
      { id: 'C', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." },
      { id: 'D', text: "Configure an Envoy Lua filter that calls OPA's REST API from a script executed on every inbound request before it is proxied." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside the proxy while adding only a local hop. The RBAC filter evaluates in-proxy with no external call but expresses far less than Rego and has to be redeployed with the Envoy configuration for every rule change. The JWT filter establishes who the caller is and stops there, leaving the authorization decision unmade. A Lua filter can reach OPA's REST API and works, but it is hand-written glue on the request path where ext_authz is purpose-built.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy","ext-authz","service-mesh","Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-437",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Per-Topic Access Control on a Message Broker: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The policy team is controlling which client identities may produce to or consume from each topic. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Kafka to authenticate clients with mTLS and map each certificate subject onto a topic name prefix in the broker configuration." },
      { id: 'B', text: "Configure Kafka's built-in AclAuthorizer and manage which identities may produce to or consume from each topic with 'kafka-acls.sh'." },
      { id: 'C', text: "Deploy OPA as a sidecar beside each Kafka client and have the application check its own permission before it produces a message." },
      { id: 'D', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can consider the principal, the operation, and the topic together. Prefix-mapped mTLS establishes identity and a naming convention but expresses no rules about operations. The built-in AclAuthorizer does enforce at the broker and is the standard alternative, at the cost of managing ACL entries per topic per principal rather than writing one rule. Checking in a client-side sidecar leaves the broker itself unprotected against any client that skips the check.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka","messaging","authorization","Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-438",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Central Control Plane for Many OPA Deployments: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The policy team is managing policy authoring, distribution, and reporting across many OPA deployments. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." },
      { id: 'B', text: "Store the policies in a Git repository and build the signed bundles in CI, publishing each one to the bundle endpoint that serves its own environment." },
      { id: 'C', text: "Host the policy bundles in an object storage bucket for distribution and point every OPA instance's bundle plugin at that same location." },
      { id: 'D', text: "Use the OPA REST API's query and decision log endpoints for reporting, assembling internal dashboards that show policy activity over time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions against a proposed policy before it ships, and compliance reporting across every connected system. Git plus CI publishing is a sound GitOps pattern and covers distribution well, but impact analysis and cross-cluster reporting remain to be built. An object storage bucket covers distribution alone. The REST endpoints expose the raw data that dashboards could be built from, which is the work a control plane removes.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das","control-plane","enterprise","Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-439",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Keeping Evaluation Fast at High Query Rates: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The policy team is keeping per-query evaluation latency low as the policy and query rate grow. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Compile the policy to WebAssembly with 'opa build -t wasm' so that each evaluation runs as compiled code inside the host process rather than interpreted Rego." },
      { id: 'B', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." },
      { id: 'C', text: "Move the large lookup tables out of the policy and fetch them per query with 'http.send' so that less data is held in memory." },
      { id: 'D', text: "Raise the OPA server's worker count so that a larger number of authorization queries can be evaluated in parallel across the available cores." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on that value, so a policy with hundreds of rules costs about what a handful would. Compiling to Wasm changes how each expression executes but still walks every rule the index would have skipped. Replacing in-memory data with an http.send per query adds a network round trip to the hot path and is the single most damaging thing a policy can do to latency. More workers raise throughput while leaving per-query latency exactly as it was.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance","indexing","optimization","Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-440",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Policy Checks on Terraform and Dockerfiles: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The policy team is applying the same Rego guardrails to Terraform plans and Dockerfiles in CI. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'opa eval' in CI with the Terraform plan JSON supplied as the input document so that the same Rego policies are evaluated." },
      { id: 'B', text: "Use Gatekeeper's gator CLI against the Terraform plan so that the ConstraintTemplates already in the cluster apply to infrastructure code." },
      { id: 'C', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." },
      { id: 'D', text: "Use 'terraform validate' together with a validation block in each module to enforce the organisation's rules at plan time." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it brings a test harness and exit codes CI can gate on. 'opa eval' does evaluate the same policy against a plan that has already been converted to JSON, but it handles only that one format and leaves the parsing and pass-fail logic to be scripted. gator understands Kubernetes manifests and constraint resources, not Terraform. A validation block only constrains a module's own input variables and cannot express organisation-wide rules.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest","iac","ci-cd","Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-441",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Uniform API Authorization at the Proxy Layer: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The policy team is enforcing consistent request-level authorization without changing every service. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Envoy's built-in RBAC filter with explicit principals and permissions so that the proxy evaluates the access rules itself without any external call." },
      { id: 'B', text: "Configure Envoy's JWT authentication filter to validate each token in real-time and forward the verified claims to the upstream service." },
      { id: 'C', text: "Configure an Envoy Lua filter that calls OPA's REST API from a script executed on every inbound request before it is proxied." },
      { id: 'D', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside the proxy while adding only a local hop. The RBAC filter evaluates in-proxy with no external call but expresses far less than Rego and has to be redeployed with the Envoy configuration for every rule change. The JWT filter establishes who the caller is and stops there, leaving the authorization decision unmade. A Lua filter can reach OPA's REST API and works, but it is hand-written glue on the request path where ext_authz is purpose-built.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy","ext-authz","service-mesh","Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-442",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Per-Topic Access Control on a Message Broker: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The policy team is controlling which client identities may produce to or consume from each topic. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." },
      { id: 'B', text: "Configure Kafka to authenticate clients with mTLS and map each certificate subject onto a topic name prefix in the broker configuration." },
      { id: 'C', text: "Configure Kafka's built-in AclAuthorizer and manage which identities may produce to or consume from each topic with 'kafka-acls.sh'." },
      { id: 'D', text: "Deploy OPA as a sidecar beside each Kafka client and have the application check its own permission before it produces a message." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can consider the principal, the operation, and the topic together. Prefix-mapped mTLS establishes identity and a naming convention but expresses no rules about operations. The built-in AclAuthorizer does enforce at the broker and is the standard alternative, at the cost of managing ACL entries per topic per principal rather than writing one rule. Checking in a client-side sidecar leaves the broker itself unprotected against any client that skips the check.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka","messaging","authorization","Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-443",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Central Control Plane for Many OPA Deployments: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The policy team is managing policy authoring, distribution, and reporting across many OPA deployments. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Store the policies in a Git repository and build the signed bundles in CI, publishing each one to the bundle endpoint that serves its own environment." },
      { id: 'B', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." },
      { id: 'C', text: "Host the policy bundles in an object storage bucket for distribution and point every OPA instance's bundle plugin at that same location." },
      { id: 'D', text: "Use the OPA REST API's query and decision log endpoints for reporting, assembling internal dashboards that show policy activity over time." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions against a proposed policy before it ships, and compliance reporting across every connected system. Git plus CI publishing is a sound GitOps pattern and covers distribution well, but impact analysis and cross-cluster reporting remain to be built. An object storage bucket covers distribution alone. The REST endpoints expose the raw data that dashboards could be built from, which is the work a control plane removes.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das","control-plane","enterprise","Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-444",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Keeping Evaluation Fast at High Query Rates: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The policy team is keeping per-query evaluation latency low as the policy and query rate grow. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Compile the policy to WebAssembly with 'opa build -t wasm' so that each evaluation runs as compiled code inside the host process rather than interpreted Rego." },
      { id: 'B', text: "Move the large lookup tables out of the policy and fetch them per query with 'http.send' so that less data is held in memory." },
      { id: 'C', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." },
      { id: 'D', text: "Raise the OPA server's worker count so that a larger number of authorization queries can be evaluated in parallel across the available cores." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on that value, so a policy with hundreds of rules costs about what a handful would. Compiling to Wasm changes how each expression executes but still walks every rule the index would have skipped. Replacing in-memory data with an http.send per query adds a network round trip to the hot path and is the single most damaging thing a policy can do to latency. More workers raise throughput while leaving per-query latency exactly as it was.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance","indexing","optimization","Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-445",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Policy Checks on Terraform and Dockerfiles: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The policy team is applying the same Rego guardrails to Terraform plans and Dockerfiles in CI. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'opa eval' in CI with the Terraform plan JSON supplied as the input document so that the same Rego policies are evaluated." },
      { id: 'B', text: "Use Gatekeeper's gator CLI against the Terraform plan so that the ConstraintTemplates already in the cluster apply to infrastructure code." },
      { id: 'C', text: "Use 'terraform validate' together with a validation block in each module to enforce the organisation's rules at plan time." },
      { id: 'D', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it brings a test harness and exit codes CI can gate on. 'opa eval' does evaluate the same policy against a plan that has already been converted to JSON, but it handles only that one format and leaves the parsing and pass-fail logic to be scripted. gator understands Kubernetes manifests and constraint resources, not Terraform. A validation block only constrains a module's own input variables and cannot express organisation-wide rules.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest","iac","ci-cd","AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-446",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Uniform API Authorization at the Proxy Layer: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The policy team is enforcing consistent request-level authorization without changing every service. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Envoy's 'envoy.filters.http.ext_authz' filter to query OPA via gRPC or HTTP, passing headers, paths, and methods for real-time access decisions." },
      { id: 'B', text: "Configure Envoy's built-in RBAC filter with explicit principals and permissions so that the proxy evaluates the access rules itself without any external call." },
      { id: 'C', text: "Configure Envoy's JWT authentication filter to validate each token in real-time and forward the verified claims to the upstream service." },
      { id: 'D', text: "Configure an Envoy Lua filter that calls OPA's REST API from a script executed on every inbound request before it is proxied." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The ext_authz filter is the supported extension point for delegating an allow-or-deny decision, and pointing it at OPA over gRPC keeps rich Rego policy outside the proxy while adding only a local hop. The RBAC filter evaluates in-proxy with no external call but expresses far less than Rego and has to be redeployed with the Envoy configuration for every rule change. The JWT filter establishes who the caller is and stops there, leaving the authorization decision unmade. A Lua filter can reach OPA's REST API and works, but it is hand-written glue on the request path where ext_authz is purpose-built.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["envoy","ext-authz","service-mesh","Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-447",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Per-Topic Access Control on a Message Broker: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The policy team is controlling which client identities may produce to or consume from each topic. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Kafka to authenticate clients with mTLS and map each certificate subject onto a topic name prefix in the broker configuration." },
      { id: 'B', text: "Deploy the OPA Kafka authorizer plugin to intercept produce and consume requests, verifying topic names, client identities, and operation types." },
      { id: 'C', text: "Configure Kafka's built-in AclAuthorizer and manage which identities may produce to or consume from each topic with 'kafka-acls.sh'." },
      { id: 'D', text: "Deploy OPA as a sidecar beside each Kafka client and have the application check its own permission before it produces a message." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The OPA authorizer plugs into the broker's authorizer interface, so every produce and consume request is checked at the broker itself against Rego that can consider the principal, the operation, and the topic together. Prefix-mapped mTLS establishes identity and a naming convention but expresses no rules about operations. The built-in AclAuthorizer does enforce at the broker and is the standard alternative, at the cost of managing ACL entries per topic per principal rather than writing one rule. Checking in a client-side sidecar leaves the broker itself unprotected against any client that skips the check.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["kafka","messaging","authorization","Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-448",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Central Control Plane for Many OPA Deployments: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The policy team is managing policy authoring, distribution, and reporting across many OPA deployments. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Store the policies in a Git repository and build the signed bundles in CI, publishing each one to the bundle endpoint that serves its own environment." },
      { id: 'B', text: "Host the policy bundles in an object storage bucket for distribution and point every OPA instance's bundle plugin at that same location." },
      { id: 'C', text: "Deploy Styra DAS to provide centralized policy authoring, Git integration, policy distribution, decision impact analysis, and compliance reporting." },
      { id: 'D', text: "Use the OPA REST API's query and decision log endpoints for reporting, assembling internal dashboards that show policy activity over time." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "DAS is a control plane rather than a distribution mechanism: alongside bundle delivery it provides authoring with validation, replay of recorded decisions against a proposed policy before it ships, and compliance reporting across every connected system. Git plus CI publishing is a sound GitOps pattern and covers distribution well, but impact analysis and cross-cluster reporting remain to be built. An object storage bucket covers distribution alone. The REST endpoints expose the raw data that dashboards could be built from, which is the work a control plane removes.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["styra-das","control-plane","enterprise","Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-449",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Keeping Evaluation Fast at High Query Rates: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The policy team is keeping per-query evaluation latency low as the policy and query rate grow. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Compile the policy to WebAssembly with 'opa build -t wasm' so that each evaluation runs as compiled code inside the host process rather than interpreted Rego." },
      { id: 'B', text: "Move the large lookup tables out of the policy and fetch them per query with 'http.send' so that less data is held in memory." },
      { id: 'C', text: "Raise the OPA server's worker count so that a larger number of authorization queries can be evaluated in parallel across the available cores." },
      { id: 'D', text: "Structure policies to take advantage of OPA's trie-based rule indexing by using constant equality checks (e.g., 'input.method == \"GET\"') as the first expression." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Rule indexing is what lets OPA skip whole rules without evaluating them: a constant equality check in the first expression lets the compiler build a trie on that value, so a policy with hundreds of rules costs about what a handful would. Compiling to Wasm changes how each expression executes but still walks every rule the index would have skipped. Replacing in-memory data with an http.send per query adds a network round trip to the hot path and is the single most damaging thing a policy can do to latency. More workers raise throughput while leaving per-query latency exactly as it was.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["performance","indexing","optimization","Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-450",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d3",
    domainName: "CI/CD Policy Enforcement and Microservice Authorization",
    title: "Policy Checks on Terraform and Dockerfiles: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The policy team is applying the same Rego guardrails to Terraform plans and Dockerfiles in CI. The work is scoped to the pre-production environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use Conftest in CI pipelines to execute Rego policies against parsed Terraform plan JSON and Dockerfile ASTs before merging PRs." },
      { id: 'B', text: "Use 'opa eval' in CI with the Terraform plan JSON supplied as the input document so that the same Rego policies are evaluated." },
      { id: 'C', text: "Use Gatekeeper's gator CLI against the Terraform plan so that the ConstraintTemplates already in the cluster apply to infrastructure code." },
      { id: 'D', text: "Use 'terraform validate' together with a validation block in each module to enforce the organisation's rules at plan time." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Conftest parses many configuration formats into the JSON that Rego expects, so one policy set covers Terraform plans, Dockerfiles, and Helm output, and it brings a test harness and exit codes CI can gate on. 'opa eval' does evaluate the same policy against a plan that has already been converted to JSON, but it handles only that one format and leaves the parsing and pass-fail logic to be scripted. gator understands Kubernetes manifests and constraint resources, not Terraform. A validation block only constrains a module's own input variables and cannot express organisation-wide rules.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["conftest","iac","ci-cd","Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_QUESTIONS_18;
