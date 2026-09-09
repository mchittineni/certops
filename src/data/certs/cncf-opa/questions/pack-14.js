export const CNCF_OPA_QUESTIONS_14 = [
  {
    id: "cncf-opa-326",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Mutation Webhook: High-Frequency FinTech Trading",
    scenario: "In a high-frequency fintech trading platform, a quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The policy architecture team is currently automated mutation of kubernetes manifests during admission under production cluster cycle 14.1.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these high-frequency fintech trading requirements for gatekeeper mutation webhook?",
    options: [
      { id: 'A', text: "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically." },
      { id: 'B', text: "Write a custom daemonset that continuously edits running pod specs using 'kubectl edit'." },
      { id: 'C', text: "Require developers to manually re-apply labels to every generated replica pod." },
      { id: 'D', text: "Disable Kubernetes admission control and mutate manifests directly in etcd storage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Gatekeeper v3 provides mutating webhook capabilities through custom resources like 'Assign' and 'AssignMetadata'. These resources enable automated injection of required defaults (e.g., setting 'readOnlyRootFilesystem: true' or corporate cost center labels) without requiring developer intervention.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "mutation", "admission", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-327",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Shift-Left Policy Testing with 'gator': Healthcare Patient Records & HIPAA",
    scenario: "In a healthcare patient records & hipaa platform, a national hospital network requires strict cryptographic privacy, auditable access controls, and hipaa compliance. The policy architecture team is currently validating gatekeeper constraints locally and in ci/cd under production cluster cycle 14.2.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these healthcare patient records & hipaa requirements for shift-left policy testing with 'gator'?",
    options: [
      { id: 'A', text: "Wait until production deployment fails at the admission webhook to discover policy syntax errors." },
      { id: 'B', text: "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters." },
      { id: 'C', text: "Deploy a full multi-node Kubernetes cluster on developer laptops solely to test label compliance." },
      { id: 'D', text: "Bypass policy checks in CI and rely on production monitoring to catch misconfigurations." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The 'gator' CLI is a standalone testing tool for Gatekeeper. It enables developers and CI pipelines to validate Kubernetes manifests against Gatekeeper ConstraintTemplates and Constraints locally, catching policy violations early before manifests are committed to Git.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gator", "shift-left", "ci-cd", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-328",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "ValidatingWebhookConfiguration Failure Policy: Global E-Commerce Black Friday Scale",
    scenario: "In a global e-commerce black friday scale platform, an international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The policy architecture team is currently handling admission webhook failure modes gracefully under production cluster cycle 14.3.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these global e-commerce black friday scale requirements for validatingwebhookconfiguration failure policy?",
    options: [
      { id: 'A', text: "Remove the ValidatingWebhookConfiguration whenever a network glitch occurs." },
      { id: 'B', text: "Route all admission traffic through an unmonitored external proxy server." },
      { id: 'C', text: "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability." },
      { id: 'D', text: "Disable apiserver authentication to prevent webhook timeout errors." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting requests when the webhook cannot be contacted, whereas 'Ignore' prioritizes availability by allowing requests through while alerting administrators.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["admission-webhook", "failure-policy", "k8s", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-329",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper ConstraintTemplates: Autonomous Vehicle Telemetry",
    scenario: "In a autonomous vehicle telemetry platform, a self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The policy architecture team is currently defining custom crd schemas and rego logic for kubernetes under production cluster cycle 14.4.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these autonomous vehicle telemetry requirements for gatekeeper constrainttemplates?",
    options: [
      { id: 'A', text: "Edit the core Kubernetes apiserver binary code to include custom validation functions." },
      { id: 'B', text: "Create unstructured ConfigMaps and mount them into the kube-controller-manager pod." },
      { id: 'C', text: "Deploy standard OPA without Gatekeeper and configure manual cluster webhooks." },
      { id: 'D', text: "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using openAPIV3Schema) and provides the Rego logic executed by Gatekeeper's validating webhook during admission.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraint-template", "k8s", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-330",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Constraints and Match Criteria: Multi-Tenant B2B SaaS Platform",
    scenario: "In a multi-tenant b2b saas platform platform, an enterprise cloud saas architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The policy architecture team is currently applying policies to specific kubernetes resources and namespaces under production cluster cycle 14.5.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these multi-tenant b2b saas platform requirements for gatekeeper constraints and match criteria?",
    options: [
      { id: 'A', text: "Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values." },
      { id: 'B', text: "Apply the ConstraintTemplate directly to every pod without specifying a Constraint instance." },
      { id: 'C', text: "Add hardcoded namespace string checks inside the Rego template logic instead of using match criteria." },
      { id: 'D', text: "Use Kubernetes NetworkPolicies to block invalid deployment specifications from reaching the API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Constraints are instantiations of ConstraintTemplates. They define which Kubernetes resources the policy applies to (filtering by API group, kind, namespace, and labels) and pass specific configuration values (e.g., maximum memory limits, required labels).",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraints", "admission", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-331",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Enforcement Actions: Media Streaming & Global CDN",
    scenario: "In a media streaming & global cdn platform, a global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized drm protection. The policy architecture team is currently gradual policy rollout with dryrun and warn modes under production cluster cycle 14.6.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these media streaming & global cdn requirements for gatekeeper enforcement actions?",
    options: [
      { id: 'A', text: "Set 'enforcementAction: deny' immediately across all clusters on day one without testing." },
      { id: 'B', text: "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments." },
      { id: 'C', text: "Delete non-compliant workloads immediately upon detecting any minor labeling mismatch." },
      { id: 'D', text: "Disable the admission webhook during cluster operating hours to prevent deployment friction." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Gatekeeper supports three enforcement actions: 'deny' (blocks the admission request), 'warn' (allows the request but returns a warning message to the client), and 'dryrun' (allows the request and logs the violation in the constraint status for auditing). This allows safe, zero-disruption policy rollouts.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-332",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Audit Runner: Aerospace Satellite Ground Systems",
    scenario: "In a aerospace satellite ground systems platform, an aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The policy architecture team is currently detecting drift and pre-existing non-compliant cluster resources under production cluster cycle 14.7.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these aerospace satellite ground systems requirements for gatekeeper audit runner?",
    options: [
      { id: 'A', text: "Write manual bash scripts with 'kubectl get all' that developers run once a month." },
      { id: 'B', text: "Disable admission webhooks and assume all currently running pods are 100% compliant." },
      { id: 'C', text: "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields." },
      { id: 'D', text: "Restart the entire Kubernetes cluster every night to force pods through admission review." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Admission webhooks only intercept create and update requests; they cannot detect resources that were already running before a policy was created. The Gatekeeper Audit runner continuously scans existing resources in the cluster and updates the status of each Constraint with detected violations.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "audit", "compliance", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-333",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Mutation Webhook: Telecommunications 5G Core Network",
    scenario: "In a telecommunications 5g core network platform, a national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The policy architecture team is currently automated mutation of kubernetes manifests during admission under production cluster cycle 14.8.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these telecommunications 5g core network requirements for gatekeeper mutation webhook?",
    options: [
      { id: 'A', text: "Write a custom daemonset that continuously edits running pod specs using 'kubectl edit'." },
      { id: 'B', text: "Require developers to manually re-apply labels to every generated replica pod." },
      { id: 'C', text: "Disable Kubernetes admission control and mutate manifests directly in etcd storage." },
      { id: 'D', text: "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Gatekeeper v3 provides mutating webhook capabilities through custom resources like 'Assign' and 'AssignMetadata'. These resources enable automated injection of required defaults (e.g., setting 'readOnlyRootFilesystem: true' or corporate cost center labels) without requiring developer intervention.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "mutation", "admission", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-334",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Shift-Left Policy Testing with 'gator': Renewable Energy Smart Grid IoT",
    scenario: "In a renewable energy smart grid iot platform, a smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The policy architecture team is currently validating gatekeeper constraints locally and in ci/cd under production cluster cycle 14.9.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these renewable energy smart grid iot requirements for shift-left policy testing with 'gator'?",
    options: [
      { id: 'A', text: "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters." },
      { id: 'B', text: "Wait until production deployment fails at the admission webhook to discover policy syntax errors." },
      { id: 'C', text: "Deploy a full multi-node Kubernetes cluster on developer laptops solely to test label compliance." },
      { id: 'D', text: "Bypass policy checks in CI and rely on production monitoring to catch misconfigurations." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The 'gator' CLI is a standalone testing tool for Gatekeeper. It enables developers and CI pipelines to validate Kubernetes manifests against Gatekeeper ConstraintTemplates and Constraints locally, catching policy violations early before manifests are committed to Git.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gator", "shift-left", "ci-cd", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-335",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "ValidatingWebhookConfiguration Failure Policy: Supply Chain Cold-Chain Logistics",
    scenario: "In a supply chain cold-chain logistics platform, a pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The policy architecture team is currently handling admission webhook failure modes gracefully under production cluster cycle 14.10.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these supply chain cold-chain logistics requirements for validatingwebhookconfiguration failure policy?",
    options: [
      { id: 'A', text: "Remove the ValidatingWebhookConfiguration whenever a network glitch occurs." },
      { id: 'B', text: "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability." },
      { id: 'C', text: "Route all admission traffic through an unmonitored external proxy server." },
      { id: 'D', text: "Disable apiserver authentication to prevent webhook timeout errors." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting requests when the webhook cannot be contacted, whereas 'Ignore' prioritizes availability by allowing requests through while alerting administrators.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["admission-webhook", "failure-policy", "k8s", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-336",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper ConstraintTemplates: Banking Core Ledger & Payments",
    scenario: "In a banking core ledger & payments platform, a central banking consortium enforces acid consistency, immutable transaction audit trails, and automated reconciliation. The policy architecture team is currently defining custom crd schemas and rego logic for kubernetes under production cluster cycle 14.11.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these banking core ledger & payments requirements for gatekeeper constrainttemplates?",
    options: [
      { id: 'A', text: "Edit the core Kubernetes apiserver binary code to include custom validation functions." },
      { id: 'B', text: "Create unstructured ConfigMaps and mount them into the kube-controller-manager pod." },
      { id: 'C', text: "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'." },
      { id: 'D', text: "Deploy standard OPA without Gatekeeper and configure manual cluster webhooks." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using openAPIV3Schema) and provides the Rego logic executed by Gatekeeper's validating webhook during admission.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraint-template", "k8s", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-337",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Constraints and Match Criteria: Genomic Sequencing & Biotech Pipeline",
    scenario: "In a genomic sequencing & biotech pipeline platform, a genomics laboratory processes petabyte-scale fastq files with distributed batch computing and high-throughput posix storage. The policy architecture team is currently applying policies to specific kubernetes resources and namespaces under production cluster cycle 14.12.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these genomic sequencing & biotech pipeline requirements for gatekeeper constraints and match criteria?",
    options: [
      { id: 'A', text: "Apply the ConstraintTemplate directly to every pod without specifying a Constraint instance." },
      { id: 'B', text: "Add hardcoded namespace string checks inside the Rego template logic instead of using match criteria." },
      { id: 'C', text: "Use Kubernetes NetworkPolicies to block invalid deployment specifications from reaching the API." },
      { id: 'D', text: "Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Constraints are instantiations of ConstraintTemplates. They define which Kubernetes resources the policy applies to (filtering by API group, kind, namespace, and labels) and pass specific configuration values (e.g., maximum memory limits, required labels).",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraints", "admission", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-338",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Enforcement Actions: Defense-Grade Zero-Trust Network",
    scenario: "In a defense-grade zero-trust network platform, a defense intelligence system enforces continuous mutual tls authentication, strict least privilege, and non-repudiation. The policy architecture team is currently gradual policy rollout with dryrun and warn modes under production cluster cycle 14.13.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these defense-grade zero-trust network requirements for gatekeeper enforcement actions?",
    options: [
      { id: 'A', text: "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments." },
      { id: 'B', text: "Set 'enforcementAction: deny' immediately across all clusters on day one without testing." },
      { id: 'C', text: "Delete non-compliant workloads immediately upon detecting any minor labeling mismatch." },
      { id: 'D', text: "Disable the admission webhook during cluster operating hours to prevent deployment friction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Gatekeeper supports three enforcement actions: 'deny' (blocks the admission request), 'warn' (allows the request but returns a warning message to the client), and 'dryrun' (allows the request and logs the violation in the constraint status for auditing). This allows safe, zero-disruption policy rollouts.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-339",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Audit Runner: Online Multiplayer Gaming Engine",
    scenario: "In a online multiplayer gaming engine platform, a real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The policy architecture team is currently detecting drift and pre-existing non-compliant cluster resources under production cluster cycle 14.14.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these online multiplayer gaming engine requirements for gatekeeper audit runner?",
    options: [
      { id: 'A', text: "Write manual bash scripts with 'kubectl get all' that developers run once a month." },
      { id: 'B', text: "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields." },
      { id: 'C', text: "Disable admission webhooks and assume all currently running pods are 100% compliant." },
      { id: 'D', text: "Restart the entire Kubernetes cluster every night to force pods through admission review." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Admission webhooks only intercept create and update requests; they cannot detect resources that were already running before a policy was created. The Gatekeeper Audit runner continuously scans existing resources in the cluster and updates the status of each Constraint with detected violations.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "audit", "compliance", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-340",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Mutation Webhook: Insurance Risk & Actuarial Modeling",
    scenario: "In a insurance risk & actuarial modeling platform, an actuarial underwriting platform executes monte carlo simulations across millions of policy holder records with parallel workers. The policy architecture team is currently automated mutation of kubernetes manifests during admission under production cluster cycle 14.15.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these insurance risk & actuarial modeling requirements for gatekeeper mutation webhook?",
    options: [
      { id: 'A', text: "Write a custom daemonset that continuously edits running pod specs using 'kubectl edit'." },
      { id: 'B', text: "Require developers to manually re-apply labels to every generated replica pod." },
      { id: 'C', text: "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically." },
      { id: 'D', text: "Disable Kubernetes admission control and mutate manifests directly in etcd storage." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Gatekeeper v3 provides mutating webhook capabilities through custom resources like 'Assign' and 'AssignMetadata'. These resources enable automated injection of required defaults (e.g., setting 'readOnlyRootFilesystem: true' or corporate cost center labels) without requiring developer intervention.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "mutation", "admission", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-341",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Shift-Left Policy Testing with 'gator': Pharmaceutical Clinical Trial Platform",
    scenario: "In a pharmaceutical clinical trial platform platform, a global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The policy architecture team is currently validating gatekeeper constraints locally and in ci/cd under production cluster cycle 14.16.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these pharmaceutical clinical trial platform requirements for shift-left policy testing with 'gator'?",
    options: [
      { id: 'A', text: "Wait until production deployment fails at the admission webhook to discover policy syntax errors." },
      { id: 'B', text: "Deploy a full multi-node Kubernetes cluster on developer laptops solely to test label compliance." },
      { id: 'C', text: "Bypass policy checks in CI and rely on production monitoring to catch misconfigurations." },
      { id: 'D', text: "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The 'gator' CLI is a standalone testing tool for Gatekeeper. It enables developers and CI pipelines to validate Kubernetes manifests against Gatekeeper ConstraintTemplates and Constraints locally, catching policy violations early before manifests are committed to Git.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gator", "shift-left", "ci-cd", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-342",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "ValidatingWebhookConfiguration Failure Policy: Smart City Traffic & Mobility Sensor Hub",
    scenario: "In a smart city traffic & mobility sensor hub platform, a metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The policy architecture team is currently handling admission webhook failure modes gracefully under production cluster cycle 14.17.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these smart city traffic & mobility sensor hub requirements for validatingwebhookconfiguration failure policy?",
    options: [
      { id: 'A', text: "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability." },
      { id: 'B', text: "Remove the ValidatingWebhookConfiguration whenever a network glitch occurs." },
      { id: 'C', text: "Route all admission traffic through an unmonitored external proxy server." },
      { id: 'D', text: "Disable apiserver authentication to prevent webhook timeout errors." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting requests when the webhook cannot be contacted, whereas 'Ignore' prioritizes availability by allowing requests through while alerting administrators.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["admission-webhook", "failure-policy", "k8s", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-343",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper ConstraintTemplates: Digital Identity & Biometric Verification",
    scenario: "In a digital identity & biometric verification platform, a cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The policy architecture team is currently defining custom crd schemas and rego logic for kubernetes under production cluster cycle 14.18.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these digital identity & biometric verification requirements for gatekeeper constrainttemplates?",
    options: [
      { id: 'A', text: "Edit the core Kubernetes apiserver binary code to include custom validation functions." },
      { id: 'B', text: "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'." },
      { id: 'C', text: "Create unstructured ConfigMaps and mount them into the kube-controller-manager pod." },
      { id: 'D', text: "Deploy standard OPA without Gatekeeper and configure manual cluster webhooks." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using openAPIV3Schema) and provides the Rego logic executed by Gatekeeper's validating webhook during admission.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraint-template", "k8s", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-344",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Constraints and Match Criteria: Legal Discovery & Semantic Document Search",
    scenario: "In a legal discovery & semantic document search platform, a global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The policy architecture team is currently applying policies to specific kubernetes resources and namespaces under production cluster cycle 14.19.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these legal discovery & semantic document search requirements for gatekeeper constraints and match criteria?",
    options: [
      { id: 'A', text: "Apply the ConstraintTemplate directly to every pod without specifying a Constraint instance." },
      { id: 'B', text: "Add hardcoded namespace string checks inside the Rego template logic instead of using match criteria." },
      { id: 'C', text: "Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values." },
      { id: 'D', text: "Use Kubernetes NetworkPolicies to block invalid deployment specifications from reaching the API." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Constraints are instantiations of ConstraintTemplates. They define which Kubernetes resources the policy applies to (filtering by API group, kind, namespace, and labels) and pass specific configuration values (e.g., maximum memory limits, required labels).",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraints", "admission", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-345",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Enforcement Actions: AdTech Real-Time Bidding Exchange",
    scenario: "In a adtech real-time bidding exchange platform, an advertising exchange processes 500,000 bids per second with a strict 20-millisecond sla and distributed caching. The policy architecture team is currently gradual policy rollout with dryrun and warn modes under production cluster cycle 14.20.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these adtech real-time bidding exchange requirements for gatekeeper enforcement actions?",
    options: [
      { id: 'A', text: "Set 'enforcementAction: deny' immediately across all clusters on day one without testing." },
      { id: 'B', text: "Delete non-compliant workloads immediately upon detecting any minor labeling mismatch." },
      { id: 'C', text: "Disable the admission webhook during cluster operating hours to prevent deployment friction." },
      { id: 'D', text: "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Gatekeeper supports three enforcement actions: 'deny' (blocks the admission request), 'warn' (allows the request but returns a warning message to the client), and 'dryrun' (allows the request and logs the violation in the constraint status for auditing). This allows safe, zero-disruption policy rollouts.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "enforcement-action", "rollout", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-346",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Audit Runner: Precision Agriculture & Drone Scouting",
    scenario: "In a precision agriculture & drone scouting platform, an agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The policy architecture team is currently detecting drift and pre-existing non-compliant cluster resources under production cluster cycle 14.21.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these precision agriculture & drone scouting requirements for gatekeeper audit runner?",
    options: [
      { id: 'A', text: "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields." },
      { id: 'B', text: "Write manual bash scripts with 'kubectl get all' that developers run once a month." },
      { id: 'C', text: "Disable admission webhooks and assume all currently running pods are 100% compliant." },
      { id: 'D', text: "Restart the entire Kubernetes cluster every night to force pods through admission review." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Admission webhooks only intercept create and update requests; they cannot detect resources that were already running before a policy was created. The Gatekeeper Audit runner continuously scans existing resources in the cluster and updates the status of each Constraint with detected violations.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "audit", "compliance", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-347",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper Mutation Webhook: Industrial Robotics Predictive Maintenance",
    scenario: "In a industrial robotics predictive maintenance platform, a semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The policy architecture team is currently automated mutation of kubernetes manifests during admission under production cluster cycle 14.22.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these industrial robotics predictive maintenance requirements for gatekeeper mutation webhook?",
    options: [
      { id: 'A', text: "Write a custom daemonset that continuously edits running pod specs using 'kubectl edit'." },
      { id: 'B', text: "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically." },
      { id: 'C', text: "Require developers to manually re-apply labels to every generated replica pod." },
      { id: 'D', text: "Disable Kubernetes admission control and mutate manifests directly in etcd storage." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Gatekeeper v3 provides mutating webhook capabilities through custom resources like 'Assign' and 'AssignMetadata'. These resources enable automated injection of required defaults (e.g., setting 'readOnlyRootFilesystem: true' or corporate cost center labels) without requiring developer intervention.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "mutation", "admission", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-348",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Shift-Left Policy Testing with 'gator': Educational Remote Proctoring Platform",
    scenario: "In a educational remote proctoring platform platform, an online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The policy architecture team is currently validating gatekeeper constraints locally and in ci/cd under production cluster cycle 14.23.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these educational remote proctoring platform requirements for shift-left policy testing with 'gator'?",
    options: [
      { id: 'A', text: "Wait until production deployment fails at the admission webhook to discover policy syntax errors." },
      { id: 'B', text: "Deploy a full multi-node Kubernetes cluster on developer laptops solely to test label compliance." },
      { id: 'C', text: "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters." },
      { id: 'D', text: "Bypass policy checks in CI and rely on production monitoring to catch misconfigurations." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The 'gator' CLI is a standalone testing tool for Gatekeeper. It enables developers and CI pipelines to validate Kubernetes manifests against Gatekeeper ConstraintTemplates and Constraints locally, catching policy violations early before manifests are committed to Git.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gator", "shift-left", "ci-cd", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-349",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "ValidatingWebhookConfiguration Failure Policy: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "In a real estate valuation & geo-spatial analytics platform, a property appraisal engine fuses gis parcel maps with real-time market transactions for automated valuation. The policy architecture team is currently handling admission webhook failure modes gracefully under production cluster cycle 14.24.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these real estate valuation & geo-spatial analytics requirements for validatingwebhookconfiguration failure policy?",
    options: [
      { id: 'A', text: "Remove the ValidatingWebhookConfiguration whenever a network glitch occurs." },
      { id: 'B', text: "Route all admission traffic through an unmonitored external proxy server." },
      { id: 'C', text: "Disable apiserver authentication to prevent webhook timeout errors." },
      { id: 'D', text: "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting requests when the webhook cannot be contacted, whereas 'Ignore' prioritizes availability by allowing requests through while alerting administrators.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["admission-webhook", "failure-policy", "k8s", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-350",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Gatekeeper ConstraintTemplates: Disaster Emergency Dispatch & Operations",
    scenario: "In a disaster emergency dispatch & operations platform, a municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The policy architecture team is currently defining custom crd schemas and rego logic for kubernetes under production cluster cycle 14.25.",
    question: "Which Rego policy implementation or Gatekeeper architecture satisfies these disaster emergency dispatch & operations requirements for gatekeeper constrainttemplates?",
    options: [
      { id: 'A', text: "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'." },
      { id: 'B', text: "Edit the core Kubernetes apiserver binary code to include custom validation functions." },
      { id: 'C', text: "Create unstructured ConfigMaps and mount them into the kube-controller-manager pod." },
      { id: 'D', text: "Deploy standard OPA without Gatekeeper and configure manual cluster webhooks." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using openAPIV3Schema) and provides the Rego logic executed by Gatekeeper's validating webhook during admission.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraint-template", "k8s", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_QUESTIONS_14;
