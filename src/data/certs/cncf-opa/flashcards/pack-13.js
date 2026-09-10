export const CNCF_OPA_FLASHCARDS_13 = [
  {
    id: "cncf-opa-fc-301",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Constraints and Match Criteria in High-Frequency FinTech Trading",
    hint: "Focus on gatekeeper and constraints best practices.",
    back: "<strong>Gatekeeper Constraints and Match Criteria</strong>: Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values. Operational requirement: The Constraint is where scope belongs: its match block filters by kind, namespace, and label selector, and changing scope is an edit to one resource that the au...",
    tags: ["gatekeeper", "constraints", "admission", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-fc-302",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Enforcement Actions in Healthcare Patient Records & HIPAA",
    hint: "Focus on gatekeeper and enforcement-action best practices.",
    back: "<strong>Gatekeeper Enforcement Actions</strong>: Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments. Operational requirement: dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what ...",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-fc-303",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Audit Runner in Global E-Commerce Black Friday Scale",
    hint: "Focus on gatekeeper and audit best practices.",
    back: "<strong>Gatekeeper Audit Runner</strong>: Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields. Operational requirement: The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no acti...",
    tags: ["gatekeeper", "audit", "compliance", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-fc-304",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Mutation Webhook in Autonomous Vehicle Telemetry",
    hint: "Focus on gatekeeper and mutation best practices.",
    back: "<strong>Gatekeeper Mutation Webhook</strong>: Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically. Operational requirement: Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CE...",
    tags: ["gatekeeper", "mutation", "admission", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-fc-305",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Shift-Left Policy Testing with 'gator' in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on gator and shift-left best practices.",
    back: "<strong>Shift-Left Policy Testing with 'gator'</strong>: Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters. Operational requirement: gator evaluates a manifest against the ConstraintTemplate and its Constraints together, honouring match criteria and parameters, and it needs no cluster at all,...",
    tags: ["gator", "shift-left", "ci-cd", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-fc-306",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: ValidatingWebhookConfiguration Failure Policy in Media Streaming & Global CDN",
    hint: "Focus on admission-webhook and failure-policy best practices.",
    back: "<strong>ValidatingWebhookConfiguration Failure Policy</strong>: Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability. Operational requirement: failurePolicy is the availability-versus-enforcement dial, and the answer differs per policy, so critical security constraints are worth failing closed for whil...",
    tags: ["admission-webhook", "failure-policy", "k8s", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-fc-307",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper ConstraintTemplates in Aerospace Satellite Ground Systems",
    hint: "Focus on gatekeeper and constraint-template best practices.",
    back: "<strong>Gatekeeper ConstraintTemplates</strong>: Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'. Operational requirement: The ConstraintTemplate declares both the Rego and the openAPIV3Schema for its parameters, which generates a CRD so each Constraint supplies typed values that Ga...",
    tags: ["gatekeeper", "constraint-template", "k8s", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-fc-308",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Constraints and Match Criteria in Telecommunications 5G Core Network",
    hint: "Focus on gatekeeper and constraints best practices.",
    back: "<strong>Gatekeeper Constraints and Match Criteria</strong>: Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values. Operational requirement: The Constraint is where scope belongs: its match block filters by kind, namespace, and label selector, and changing scope is an edit to one resource that the au...",
    tags: ["gatekeeper", "constraints", "admission", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-fc-309",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Enforcement Actions in Renewable Energy Smart Grid IoT",
    hint: "Focus on gatekeeper and enforcement-action best practices.",
    back: "<strong>Gatekeeper Enforcement Actions</strong>: Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments. Operational requirement: dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what ...",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-fc-310",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Audit Runner in Supply Chain Cold-Chain Logistics",
    hint: "Focus on gatekeeper and audit best practices.",
    back: "<strong>Gatekeeper Audit Runner</strong>: Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields. Operational requirement: The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no acti...",
    tags: ["gatekeeper", "audit", "compliance", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-fc-311",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Mutation Webhook in Banking Core Ledger & Payments",
    hint: "Focus on gatekeeper and mutation best practices.",
    back: "<strong>Gatekeeper Mutation Webhook</strong>: Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically. Operational requirement: Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CE...",
    tags: ["gatekeeper", "mutation", "admission", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-fc-312",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Shift-Left Policy Testing with 'gator' in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on gator and shift-left best practices.",
    back: "<strong>Shift-Left Policy Testing with 'gator'</strong>: Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters. Operational requirement: gator evaluates a manifest against the ConstraintTemplate and its Constraints together, honouring match criteria and parameters, and it needs no cluster at all,...",
    tags: ["gator", "shift-left", "ci-cd", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-fc-313",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: ValidatingWebhookConfiguration Failure Policy in Defense-Grade Zero-Trust Network",
    hint: "Focus on admission-webhook and failure-policy best practices.",
    back: "<strong>ValidatingWebhookConfiguration Failure Policy</strong>: Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability. Operational requirement: failurePolicy is the availability-versus-enforcement dial, and the answer differs per policy, so critical security constraints are worth failing closed for whil...",
    tags: ["admission-webhook", "failure-policy", "k8s", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-fc-314",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper ConstraintTemplates in Online Multiplayer Gaming Engine",
    hint: "Focus on gatekeeper and constraint-template best practices.",
    back: "<strong>Gatekeeper ConstraintTemplates</strong>: Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'. Operational requirement: The ConstraintTemplate declares both the Rego and the openAPIV3Schema for its parameters, which generates a CRD so each Constraint supplies typed values that Ga...",
    tags: ["gatekeeper", "constraint-template", "k8s", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-fc-315",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Constraints and Match Criteria in Insurance Risk & Actuarial Modeling",
    hint: "Focus on gatekeeper and constraints best practices.",
    back: "<strong>Gatekeeper Constraints and Match Criteria</strong>: Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values. Operational requirement: The Constraint is where scope belongs: its match block filters by kind, namespace, and label selector, and changing scope is an edit to one resource that the au...",
    tags: ["gatekeeper", "constraints", "admission", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-fc-316",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Enforcement Actions in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on gatekeeper and enforcement-action best practices.",
    back: "<strong>Gatekeeper Enforcement Actions</strong>: Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments. Operational requirement: dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what ...",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-fc-317",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Audit Runner in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on gatekeeper and audit best practices.",
    back: "<strong>Gatekeeper Audit Runner</strong>: Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields. Operational requirement: The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no acti...",
    tags: ["gatekeeper", "audit", "compliance", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-fc-318",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Mutation Webhook in Digital Identity & Biometric Verification",
    hint: "Focus on gatekeeper and mutation best practices.",
    back: "<strong>Gatekeeper Mutation Webhook</strong>: Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically. Operational requirement: Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CE...",
    tags: ["gatekeeper", "mutation", "admission", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-fc-319",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Shift-Left Policy Testing with 'gator' in Legal Discovery & Semantic Document Search",
    hint: "Focus on gator and shift-left best practices.",
    back: "<strong>Shift-Left Policy Testing with 'gator'</strong>: Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters. Operational requirement: gator evaluates a manifest against the ConstraintTemplate and its Constraints together, honouring match criteria and parameters, and it needs no cluster at all,...",
    tags: ["gator", "shift-left", "ci-cd", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-fc-320",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: ValidatingWebhookConfiguration Failure Policy in AdTech Real-Time Bidding Exchange",
    hint: "Focus on admission-webhook and failure-policy best practices.",
    back: "<strong>ValidatingWebhookConfiguration Failure Policy</strong>: Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability. Operational requirement: failurePolicy is the availability-versus-enforcement dial, and the answer differs per policy, so critical security constraints are worth failing closed for whil...",
    tags: ["admission-webhook", "failure-policy", "k8s", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-fc-321",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper ConstraintTemplates in Precision Agriculture & Drone Scouting",
    hint: "Focus on gatekeeper and constraint-template best practices.",
    back: "<strong>Gatekeeper ConstraintTemplates</strong>: Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'. Operational requirement: The ConstraintTemplate declares both the Rego and the openAPIV3Schema for its parameters, which generates a CRD so each Constraint supplies typed values that Ga...",
    tags: ["gatekeeper", "constraint-template", "k8s", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-fc-322",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Constraints and Match Criteria in Industrial Robotics Predictive Maintenance",
    hint: "Focus on gatekeeper and constraints best practices.",
    back: "<strong>Gatekeeper Constraints and Match Criteria</strong>: Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values. Operational requirement: The Constraint is where scope belongs: its match block filters by kind, namespace, and label selector, and changing scope is an edit to one resource that the au...",
    tags: ["gatekeeper", "constraints", "admission", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-fc-323",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Enforcement Actions in Educational Remote Proctoring Platform",
    hint: "Focus on gatekeeper and enforcement-action best practices.",
    back: "<strong>Gatekeeper Enforcement Actions</strong>: Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments. Operational requirement: dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what ...",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-fc-324",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Audit Runner in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on gatekeeper and audit best practices.",
    back: "<strong>Gatekeeper Audit Runner</strong>: Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields. Operational requirement: The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no acti...",
    tags: ["gatekeeper", "audit", "compliance", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-fc-325",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Mutation Webhook in Disaster Emergency Dispatch & Operations",
    hint: "Focus on gatekeeper and mutation best practices.",
    back: "<strong>Gatekeeper Mutation Webhook</strong>: Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically. Operational requirement: Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CE...",
    tags: ["gatekeeper", "mutation", "admission", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_FLASHCARDS_13;
