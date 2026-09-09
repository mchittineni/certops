export const CNCF_OPA_FLASHCARDS_10 = [
  {
    id: "cncf-opa-fc-226",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: ValidatingWebhookConfiguration Failure Policy in High-Frequency FinTech Trading",
    hint: "Focus on admission-webhook and failure-policy best practices.",
    back: "<strong>ValidatingWebhookConfiguration Failure Policy</strong>: Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability. Operational requirement: Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting request...",
    tags: ["admission-webhook", "failure-policy", "k8s", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-fc-227",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper ConstraintTemplates in Healthcare Patient Records & HIPAA",
    hint: "Focus on gatekeeper and constraint-template best practices.",
    back: "<strong>Gatekeeper ConstraintTemplates</strong>: Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'. Operational requirement: Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using...",
    tags: ["gatekeeper", "constraint-template", "k8s", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-fc-228",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Constraints and Match Criteria in Global E-Commerce Black Friday Scale",
    hint: "Focus on gatekeeper and constraints best practices.",
    back: "<strong>Gatekeeper Constraints and Match Criteria</strong>: Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values. Operational requirement: Constraints are instantiations of ConstraintTemplates. They define which Kubernetes resources the policy applies to (filtering by API group, kind, namespace, an...",
    tags: ["gatekeeper", "constraints", "admission", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-fc-229",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Enforcement Actions in Autonomous Vehicle Telemetry",
    hint: "Focus on gatekeeper and enforcement-action best practices.",
    back: "<strong>Gatekeeper Enforcement Actions</strong>: Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments. Operational requirement: Gatekeeper supports three enforcement actions: 'deny' (blocks the admission request), 'warn' (allows the request but returns a warning message to the client), a...",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-fc-230",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Audit Runner in Multi-Tenant B2B SaaS Platform",
    hint: "Focus on gatekeeper and audit best practices.",
    back: "<strong>Gatekeeper Audit Runner</strong>: Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields. Operational requirement: Admission webhooks only intercept create and update requests; they cannot detect resources that were already running before a policy was created. The Gatekeeper...",
    tags: ["gatekeeper", "audit", "compliance", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-fc-231",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Mutation Webhook in Media Streaming & Global CDN",
    hint: "Focus on gatekeeper and mutation best practices.",
    back: "<strong>Gatekeeper Mutation Webhook</strong>: Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically. Operational requirement: Gatekeeper v3 provides mutating webhook capabilities through custom resources like 'Assign' and 'AssignMetadata'. These resources enable automated injection of ...",
    tags: ["gatekeeper", "mutation", "admission", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-fc-232",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Shift-Left Policy Testing with 'gator' in Aerospace Satellite Ground Systems",
    hint: "Focus on gator and shift-left best practices.",
    back: "<strong>Shift-Left Policy Testing with 'gator'</strong>: Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters. Operational requirement: The 'gator' CLI is a standalone testing tool for Gatekeeper. It enables developers and CI pipelines to validate Kubernetes manifests against Gatekeeper Constrai...",
    tags: ["gator", "shift-left", "ci-cd", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-fc-233",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: ValidatingWebhookConfiguration Failure Policy in Telecommunications 5G Core Network",
    hint: "Focus on admission-webhook and failure-policy best practices.",
    back: "<strong>ValidatingWebhookConfiguration Failure Policy</strong>: Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability. Operational requirement: Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting request...",
    tags: ["admission-webhook", "failure-policy", "k8s", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-fc-234",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper ConstraintTemplates in Renewable Energy Smart Grid IoT",
    hint: "Focus on gatekeeper and constraint-template best practices.",
    back: "<strong>Gatekeeper ConstraintTemplates</strong>: Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'. Operational requirement: Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using...",
    tags: ["gatekeeper", "constraint-template", "k8s", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-fc-235",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Constraints and Match Criteria in Supply Chain Cold-Chain Logistics",
    hint: "Focus on gatekeeper and constraints best practices.",
    back: "<strong>Gatekeeper Constraints and Match Criteria</strong>: Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values. Operational requirement: Constraints are instantiations of ConstraintTemplates. They define which Kubernetes resources the policy applies to (filtering by API group, kind, namespace, an...",
    tags: ["gatekeeper", "constraints", "admission", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-fc-236",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Enforcement Actions in Banking Core Ledger & Payments",
    hint: "Focus on gatekeeper and enforcement-action best practices.",
    back: "<strong>Gatekeeper Enforcement Actions</strong>: Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments. Operational requirement: Gatekeeper supports three enforcement actions: 'deny' (blocks the admission request), 'warn' (allows the request but returns a warning message to the client), a...",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-fc-237",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Audit Runner in Genomic Sequencing & Biotech Pipeline",
    hint: "Focus on gatekeeper and audit best practices.",
    back: "<strong>Gatekeeper Audit Runner</strong>: Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields. Operational requirement: Admission webhooks only intercept create and update requests; they cannot detect resources that were already running before a policy was created. The Gatekeeper...",
    tags: ["gatekeeper", "audit", "compliance", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-fc-238",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Mutation Webhook in Defense-Grade Zero-Trust Network",
    hint: "Focus on gatekeeper and mutation best practices.",
    back: "<strong>Gatekeeper Mutation Webhook</strong>: Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically. Operational requirement: Gatekeeper v3 provides mutating webhook capabilities through custom resources like 'Assign' and 'AssignMetadata'. These resources enable automated injection of ...",
    tags: ["gatekeeper", "mutation", "admission", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-fc-239",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Shift-Left Policy Testing with 'gator' in Online Multiplayer Gaming Engine",
    hint: "Focus on gator and shift-left best practices.",
    back: "<strong>Shift-Left Policy Testing with 'gator'</strong>: Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters. Operational requirement: The 'gator' CLI is a standalone testing tool for Gatekeeper. It enables developers and CI pipelines to validate Kubernetes manifests against Gatekeeper Constrai...",
    tags: ["gator", "shift-left", "ci-cd", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-fc-240",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: ValidatingWebhookConfiguration Failure Policy in Insurance Risk & Actuarial Modeling",
    hint: "Focus on admission-webhook and failure-policy best practices.",
    back: "<strong>ValidatingWebhookConfiguration Failure Policy</strong>: Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability. Operational requirement: Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting request...",
    tags: ["admission-webhook", "failure-policy", "k8s", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-fc-241",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper ConstraintTemplates in Pharmaceutical Clinical Trial Platform",
    hint: "Focus on gatekeeper and constraint-template best practices.",
    back: "<strong>Gatekeeper ConstraintTemplates</strong>: Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'. Operational requirement: Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using...",
    tags: ["gatekeeper", "constraint-template", "k8s", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-fc-242",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Constraints and Match Criteria in Smart City Traffic & Mobility Sensor Hub",
    hint: "Focus on gatekeeper and constraints best practices.",
    back: "<strong>Gatekeeper Constraints and Match Criteria</strong>: Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values. Operational requirement: Constraints are instantiations of ConstraintTemplates. They define which Kubernetes resources the policy applies to (filtering by API group, kind, namespace, an...",
    tags: ["gatekeeper", "constraints", "admission", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-fc-243",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Enforcement Actions in Digital Identity & Biometric Verification",
    hint: "Focus on gatekeeper and enforcement-action best practices.",
    back: "<strong>Gatekeeper Enforcement Actions</strong>: Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments. Operational requirement: Gatekeeper supports three enforcement actions: 'deny' (blocks the admission request), 'warn' (allows the request but returns a warning message to the client), a...",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-fc-244",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Audit Runner in Legal Discovery & Semantic Document Search",
    hint: "Focus on gatekeeper and audit best practices.",
    back: "<strong>Gatekeeper Audit Runner</strong>: Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields. Operational requirement: Admission webhooks only intercept create and update requests; they cannot detect resources that were already running before a policy was created. The Gatekeeper...",
    tags: ["gatekeeper", "audit", "compliance", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-fc-245",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Mutation Webhook in AdTech Real-Time Bidding Exchange",
    hint: "Focus on gatekeeper and mutation best practices.",
    back: "<strong>Gatekeeper Mutation Webhook</strong>: Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically. Operational requirement: Gatekeeper v3 provides mutating webhook capabilities through custom resources like 'Assign' and 'AssignMetadata'. These resources enable automated injection of ...",
    tags: ["gatekeeper", "mutation", "admission", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-fc-246",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Shift-Left Policy Testing with 'gator' in Precision Agriculture & Drone Scouting",
    hint: "Focus on gator and shift-left best practices.",
    back: "<strong>Shift-Left Policy Testing with 'gator'</strong>: Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters. Operational requirement: The 'gator' CLI is a standalone testing tool for Gatekeeper. It enables developers and CI pipelines to validate Kubernetes manifests against Gatekeeper Constrai...",
    tags: ["gator", "shift-left", "ci-cd", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-fc-247",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: ValidatingWebhookConfiguration Failure Policy in Industrial Robotics Predictive Maintenance",
    hint: "Focus on admission-webhook and failure-policy best practices.",
    back: "<strong>ValidatingWebhookConfiguration Failure Policy</strong>: Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability. Operational requirement: Kubernetes ValidatingWebhookConfiguration defines how the API server behaves if Gatekeeper becomes unreachable. 'Fail' prioritizes security by rejecting request...",
    tags: ["admission-webhook", "failure-policy", "k8s", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-fc-248",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper ConstraintTemplates in Educational Remote Proctoring Platform",
    hint: "Focus on gatekeeper and constraint-template best practices.",
    back: "<strong>Gatekeeper ConstraintTemplates</strong>: Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'. Operational requirement: Gatekeeper uses ConstraintTemplates to define reusable, parameterized policy templates. A ConstraintTemplate declares the CRD schema for input parameters (using...",
    tags: ["gatekeeper", "constraint-template", "k8s", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-fc-249",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Constraints and Match Criteria in Real Estate Valuation & Geo-Spatial Analytics",
    hint: "Focus on gatekeeper and constraints best practices.",
    back: "<strong>Gatekeeper Constraints and Match Criteria</strong>: Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values. Operational requirement: Constraints are instantiations of ConstraintTemplates. They define which Kubernetes resources the policy applies to (filtering by API group, kind, namespace, an...",
    tags: ["gatekeeper", "constraints", "admission", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-fc-250",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    front: "CNCF OPA: Gatekeeper Enforcement Actions in Disaster Emergency Dispatch & Operations",
    hint: "Focus on gatekeeper and enforcement-action best practices.",
    back: "<strong>Gatekeeper Enforcement Actions</strong>: Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments. Operational requirement: Gatekeeper supports three enforcement actions: 'deny' (blocks the admission request), 'warn' (allows the request but returns a warning message to the client), a...",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_FLASHCARDS_10;
