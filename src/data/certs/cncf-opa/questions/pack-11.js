export const CNCF_OPA_QUESTIONS_11 = [
  {
    id: "cncf-opa-251",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Introducing a Policy Without Blocking Teams: High-Frequency FinTech Trading",
    scenario: "A quantitative trading desk requires microsecond secrets delivery, zero packet loss, and deterministic authentication guarantees. The policy team is introducing a new policy across a busy cluster without blocking teams on day one. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments." },
      { id: 'B', text: "Deploy the Constraint with a match block that initially selects one pilot namespace and widen the selector as teams come into compliance." },
      { id: 'C', text: "Leave enforcementAction at deny and rely on the Gatekeeper audit pod to report the violations before the webhook is switched on." },
      { id: 'D', text: "Write the ConstraintTemplate's Rego so that each violation message begins with the word warning, which causes admission to allow the request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what deny would reject. Piloting through the match block also avoids blocking anyone, but it only reveals violations inside the pilot namespace, so the blast radius of full enforcement stays unknown. Leaving the action at deny blocks every non-compliant request the moment the webhook is reachable. The text of a violation message has no effect on enforcement, which is governed solely by enforcementAction.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "enforcement-action", "rollout", "High-Frequency FinTech Trading"]
  },
  {
    id: "cncf-opa-252",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Finding Resources That Predate a Policy: Healthcare Patient Records & HIPAA",
    scenario: "A national hospital network requires strict cryptographic privacy, auditable access controls, and HIPAA compliance. The policy team is finding resources that were already running before a new policy was written. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'gator test' against a full set of manifests exported from the cluster with kubectl so that the resources already running are checked offline in the pipeline." },
      { id: 'B', text: "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields." },
      { id: 'C', text: "Rely on the validating webhook, which the API server invokes for every resource that currently exists in the cluster." },
      { id: 'D', text: "Set enforcementAction to deny so that resources already running are evicted automatically the next time the Gatekeeper controller reconciles them." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no action required from the teams that own them. Exporting manifests and running gator over them does produce the same answer once, but it is a manual snapshot that goes stale immediately. The webhook is only called on create and update requests, so an object admitted before the policy existed is never re-examined. Enforcement actions apply to admission and never evict or modify workloads that are already running.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "audit", "compliance", "Healthcare Patient Records & HIPAA"]
  },
  {
    id: "cncf-opa-253",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Applying a Required Default Automatically: Global E-Commerce Black Friday Scale",
    scenario: "An international retail marketplace prepares for 100x traffic surges with zero downtime and instant failover. The policy team is applying a required default to incoming workloads without every team editing manifests. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure a Kubernetes MutatingAdmissionPolicy with a CEL expression that patches the missing field during the admission request." },
      { id: 'B', text: "Configure a Constraint that denies any pod missing the field so that each team adds the required value to its own manifests." },
      { id: 'C', text: "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically." },
      { id: 'D', text: "Configure a PodPreset resource that merges the default security context into every pod that matches a given namespace and label selector." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CEL-based MutatingAdmissionPolicy achieves the same outcome through the Kubernetes built-in path and is a reasonable alternative, though it sits outside Gatekeeper and its constraint tooling. Denying instead of mutating does eventually produce compliance, but only after every team edits every manifest, which is the work being avoided. PodPreset was removed from Kubernetes in version 1.20 and no longer exists.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "mutation", "admission", "Global E-Commerce Black Friday Scale"]
  },
  {
    id: "cncf-opa-254",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Catching Violations Before the Cluster Sees Them: Autonomous Vehicle Telemetry",
    scenario: "A self-driving automotive fleet streams terabytes of sensor telemetry requiring real-time distributed ingestion and anomaly detection. The policy team is catching constraint violations in a pull request rather than at admission time. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'kubectl apply --dry-run=server' in the pipeline so that the API server runs the Gatekeeper admission webhook for real without ever persisting the object." },
      { id: 'B', text: "Use 'conftest test' in CI with the Rego extracted out of each ConstraintTemplate to check the manifests directly." },
      { id: 'C', text: "Use 'opa test' against the Rego embedded in each ConstraintTemplate so that the policy's own unit tests run on every pull request." },
      { id: 'D', text: "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "gator evaluates a manifest against the ConstraintTemplate and its Constraints together, honouring match criteria and parameters, and it needs no cluster at all, so it runs in a pull request in seconds. Server-side dry run genuinely exercises the real webhook, but it requires a reachable cluster with the constraints already installed, which is the dependency shift-left testing is trying to remove. Extracting the Rego for conftest drops the match criteria and parameter wiring that decide whether the policy even applies. 'opa test' checks the policy's own logic rather than the manifests under review.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gator", "shift-left", "ci-cd", "Autonomous Vehicle Telemetry"]
  },
  {
    id: "cncf-opa-255",
    difficulty: "easy",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Behaviour When the Policy Webhook Is Unreachable: Multi-Tenant B2B SaaS Platform",
    scenario: "An enterprise cloud SaaS architecture mandates strict logical tenant isolation, data masking, and per-tenant resource quotas. The policy team is deciding how admission should behave while the policy webhook is unreachable. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability." },
      { id: 'B', text: "Configure 'failurePolicy: Ignore' everywhere and rely on the audit pod to report anything that was admitted while the webhook was down." },
      { id: 'C', text: "Configure 'failurePolicy: Fail' everywhere and raise timeoutSeconds so that a slow webhook response is not treated as an outright failure." },
      { id: 'D', text: "Configure a namespaceSelector that excludes kube-system so that a webhook outage cannot prevent control plane components from starting." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "failurePolicy is the availability-versus-enforcement dial, and the answer differs per policy, so critical security constraints are worth failing closed for while others should not be able to halt deployments. Setting Ignore everywhere converts every outage into a silent enforcement gap, and although the audit runner reports it afterwards the non-compliant object is already admitted. A longer timeout helps with slowness but does nothing when the webhook is genuinely unreachable. Excluding kube-system is sound practice for avoiding deadlock but leaves the question of every other namespace unanswered.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["admission-webhook", "failure-policy", "k8s", "Multi-Tenant B2B SaaS Platform"]
  },
  {
    id: "cncf-opa-256",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Making One Policy Reusable With Parameters: Media Streaming & Global CDN",
    scenario: "A global video streaming service distributes high-bitrate live media with distributed edge caching and tokenized DRM protection. The policy team is packaging a policy so that several teams can apply it with different values. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define a ValidatingAdmissionPolicy with a CEL expression and bind it to the target namespaces through a policy binding resource." },
      { id: 'B', text: "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'." },
      { id: 'C', text: "Define a ConstraintTemplate whose Rego reads its parameter values from a ConfigMap mounted into the Gatekeeper controller pod." },
      { id: 'D', text: "Define a separate Constraint for each variation and place the differing values directly in the Rego source of each one." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The ConstraintTemplate declares both the Rego and the openAPIV3Schema for its parameters, which generates a CRD so each Constraint supplies typed values that Gatekeeper validates. ValidatingAdmissionPolicy is a real Kubernetes feature and a genuine alternative, but it is the built-in CEL mechanism rather than Gatekeeper, so it uses none of the existing Rego or constraint tooling. Gatekeeper passes parameters through the Constraint spec and does not read them from ConfigMaps, and copying the Rego per variation abandons the reuse the template exists to provide.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraint-template", "k8s", "Media Streaming & Global CDN"]
  },
  {
    id: "cncf-opa-257",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Scoping a Policy to Certain Namespaces: Aerospace Satellite Ground Systems",
    scenario: "An aerospace telemetry platform processes orbital downlinks with fault-tolerant queuing and asynchronous edge processing. The policy team is applying an existing policy to only some namespaces and resource kinds. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Add namespace comparisons to the Rego inside the ConstraintTemplate so that the rule simply returns no violation for any object outside the intended set of namespaces." },
      { id: 'B', text: "Set a namespaceSelector on the Gatekeeper ValidatingWebhookConfiguration so that the API server only forwards matching namespaces." },
      { id: 'C', text: "Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values." },
      { id: 'D', text: "Label the namespaces that should be skipped and list every one of them in the Gatekeeper controller's --exempt-namespace flag at startup." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The Constraint is where scope belongs: its match block filters by kind, namespace, and label selector, and changing scope is an edit to one resource that the audit runner immediately reflects. Encoding namespaces in the Rego forces a template change, and therefore a change for every other Constraint built on it, whenever scope shifts. The webhook's namespaceSelector and the --exempt-namespace flag both act on the whole Gatekeeper installation at once, so narrowing one policy would silently narrow every policy alongside it.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraints", "admission", "Aerospace Satellite Ground Systems"]
  },
  {
    id: "cncf-opa-258",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Introducing a Policy Without Blocking Teams: Telecommunications 5G Core Network",
    scenario: "A national telecom operator manages high-density network slices with automated scaling and sub-millisecond service mesh routing. The policy team is introducing a new policy across a busy cluster without blocking teams on day one. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the Constraint with a match block that initially selects one pilot namespace and widen the selector as teams come into compliance." },
      { id: 'B', text: "Leave enforcementAction at deny and rely on the Gatekeeper audit pod to report the violations before the webhook is switched on." },
      { id: 'C', text: "Write the ConstraintTemplate's Rego so that each violation message begins with the word warning, which causes admission to allow the request." },
      { id: 'D', text: "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what deny would reject. Piloting through the match block also avoids blocking anyone, but it only reveals violations inside the pilot namespace, so the blast radius of full enforcement stays unknown. Leaving the action at deny blocks every non-compliant request the moment the webhook is reachable. The text of a violation message has no effect on enforcement, which is governed solely by enforcementAction.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Telecommunications 5G Core Network"]
  },
  {
    id: "cncf-opa-259",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Finding Resources That Predate a Policy: Renewable Energy Smart Grid IoT",
    scenario: "A smart electrical grid platform monitors millions of smart meters with low-latency time-series analysis and automated load shedding. The policy team is finding resources that were already running before a new policy was written. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields." },
      { id: 'B', text: "Use 'gator test' against a full set of manifests exported from the cluster with kubectl so that the resources already running are checked offline in the pipeline." },
      { id: 'C', text: "Rely on the validating webhook, which the API server invokes for every resource that currently exists in the cluster." },
      { id: 'D', text: "Set enforcementAction to deny so that resources already running are evicted automatically the next time the Gatekeeper controller reconciles them." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no action required from the teams that own them. Exporting manifests and running gator over them does produce the same answer once, but it is a manual snapshot that goes stale immediately. The webhook is only called on create and update requests, so an object admitted before the policy existed is never re-examined. Enforcement actions apply to admission and never evict or modify workloads that are already running.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "audit", "compliance", "Renewable Energy Smart Grid IoT"]
  },
  {
    id: "cncf-opa-260",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Applying a Required Default Automatically: Supply Chain Cold-Chain Logistics",
    scenario: "A pharmaceutical distribution network tracks temperature-sensitive cargo with cryptographic provenance and automated breach alerts. The policy team is applying a required default to incoming workloads without every team editing manifests. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure a Kubernetes MutatingAdmissionPolicy with a CEL expression that patches the missing field during the admission request." },
      { id: 'B', text: "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically." },
      { id: 'C', text: "Configure a Constraint that denies any pod missing the field so that each team adds the required value to its own manifests." },
      { id: 'D', text: "Configure a PodPreset resource that merges the default security context into every pod that matches a given namespace and label selector." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CEL-based MutatingAdmissionPolicy achieves the same outcome through the Kubernetes built-in path and is a reasonable alternative, though it sits outside Gatekeeper and its constraint tooling. Denying instead of mutating does eventually produce compliance, but only after every team edits every manifest, which is the work being avoided. PodPreset was removed from Kubernetes in version 1.20 and no longer exists.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "mutation", "admission", "Supply Chain Cold-Chain Logistics"]
  },
  {
    id: "cncf-opa-261",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Catching Violations Before the Cluster Sees Them: Banking Core Ledger & Payments",
    scenario: "A central banking consortium enforces ACID consistency, immutable transaction audit trails, and automated reconciliation. The policy team is catching constraint violations in a pull request rather than at admission time. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'kubectl apply --dry-run=server' in the pipeline so that the API server runs the Gatekeeper admission webhook for real without ever persisting the object." },
      { id: 'B', text: "Use 'conftest test' in CI with the Rego extracted out of each ConstraintTemplate to check the manifests directly." },
      { id: 'C', text: "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters." },
      { id: 'D', text: "Use 'opa test' against the Rego embedded in each ConstraintTemplate so that the policy's own unit tests run on every pull request." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "gator evaluates a manifest against the ConstraintTemplate and its Constraints together, honouring match criteria and parameters, and it needs no cluster at all, so it runs in a pull request in seconds. Server-side dry run genuinely exercises the real webhook, but it requires a reachable cluster with the constraints already installed, which is the dependency shift-left testing is trying to remove. Extracting the Rego for conftest drops the match criteria and parameter wiring that decide whether the policy even applies. 'opa test' checks the policy's own logic rather than the manifests under review.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gator", "shift-left", "ci-cd", "Banking Core Ledger & Payments"]
  },
  {
    id: "cncf-opa-262",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Behaviour When the Policy Webhook Is Unreachable: Genomic Sequencing & Biotech Pipeline",
    scenario: "A genomics laboratory processes petabyte-scale FASTQ files with distributed batch computing and high-throughput POSIX storage. The policy team is deciding how admission should behave while the policy webhook is unreachable. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure 'failurePolicy: Ignore' everywhere and rely on the audit pod to report anything that was admitted while the webhook was down." },
      { id: 'B', text: "Configure 'failurePolicy: Fail' everywhere and raise timeoutSeconds so that a slow webhook response is not treated as an outright failure." },
      { id: 'C', text: "Configure a namespaceSelector that excludes kube-system so that a webhook outage cannot prevent control plane components from starting." },
      { id: 'D', text: "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "failurePolicy is the availability-versus-enforcement dial, and the answer differs per policy, so critical security constraints are worth failing closed for while others should not be able to halt deployments. Setting Ignore everywhere converts every outage into a silent enforcement gap, and although the audit runner reports it afterwards the non-compliant object is already admitted. A longer timeout helps with slowness but does nothing when the webhook is genuinely unreachable. Excluding kube-system is sound practice for avoiding deadlock but leaves the question of every other namespace unanswered.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["admission-webhook", "failure-policy", "k8s", "Genomic Sequencing & Biotech Pipeline"]
  },
  {
    id: "cncf-opa-263",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Making One Policy Reusable With Parameters: Defense-Grade Zero-Trust Network",
    scenario: "A defense intelligence system enforces continuous mutual TLS authentication, strict least privilege, and non-repudiation. The policy team is packaging a policy so that several teams can apply it with different values. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'." },
      { id: 'B', text: "Define a ValidatingAdmissionPolicy with a CEL expression and bind it to the target namespaces through a policy binding resource." },
      { id: 'C', text: "Define a ConstraintTemplate whose Rego reads its parameter values from a ConfigMap mounted into the Gatekeeper controller pod." },
      { id: 'D', text: "Define a separate Constraint for each variation and place the differing values directly in the Rego source of each one." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The ConstraintTemplate declares both the Rego and the openAPIV3Schema for its parameters, which generates a CRD so each Constraint supplies typed values that Gatekeeper validates. ValidatingAdmissionPolicy is a real Kubernetes feature and a genuine alternative, but it is the built-in CEL mechanism rather than Gatekeeper, so it uses none of the existing Rego or constraint tooling. Gatekeeper passes parameters through the Constraint spec and does not read them from ConfigMaps, and copying the Rego per variation abandons the reuse the template exists to provide.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraint-template", "k8s", "Defense-Grade Zero-Trust Network"]
  },
  {
    id: "cncf-opa-264",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Scoping a Policy to Certain Namespaces: Online Multiplayer Gaming Engine",
    scenario: "A real-time competitive gaming cluster orchestrates match sessions with regional matchmaking and anti-cheat validation. The policy team is applying an existing policy to only some namespaces and resource kinds. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Add namespace comparisons to the Rego inside the ConstraintTemplate so that the rule simply returns no violation for any object outside the intended set of namespaces." },
      { id: 'B', text: "Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values." },
      { id: 'C', text: "Set a namespaceSelector on the Gatekeeper ValidatingWebhookConfiguration so that the API server only forwards matching namespaces." },
      { id: 'D', text: "Label the namespaces that should be skipped and list every one of them in the Gatekeeper controller's --exempt-namespace flag at startup." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "The Constraint is where scope belongs: its match block filters by kind, namespace, and label selector, and changing scope is an edit to one resource that the audit runner immediately reflects. Encoding namespaces in the Rego forces a template change, and therefore a change for every other Constraint built on it, whenever scope shifts. The webhook's namespaceSelector and the --exempt-namespace flag both act on the whole Gatekeeper installation at once, so narrowing one policy would silently narrow every policy alongside it.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraints", "admission", "Online Multiplayer Gaming Engine"]
  },
  {
    id: "cncf-opa-265",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Introducing a Policy Without Blocking Teams: Insurance Risk & Actuarial Modeling",
    scenario: "An actuarial underwriting platform executes Monte Carlo simulations across millions of policy holder records with parallel workers. The policy team is introducing a new policy across a busy cluster without blocking teams on day one. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the Constraint with a match block that initially selects one pilot namespace and widen the selector as teams come into compliance." },
      { id: 'B', text: "Leave enforcementAction at deny and rely on the Gatekeeper audit pod to report the violations before the webhook is switched on." },
      { id: 'C', text: "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments." },
      { id: 'D', text: "Write the ConstraintTemplate's Rego so that each violation message begins with the word warning, which causes admission to allow the request." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what deny would reject. Piloting through the match block also avoids blocking anyone, but it only reveals violations inside the pilot namespace, so the blast radius of full enforcement stays unknown. Leaving the action at deny blocks every non-compliant request the moment the webhook is reachable. The text of a violation message has no effect on enforcement, which is governed solely by enforcementAction.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Insurance Risk & Actuarial Modeling"]
  },
  {
    id: "cncf-opa-266",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Finding Resources That Predate a Policy: Pharmaceutical Clinical Trial Platform",
    scenario: "A global pharmaceutical research group manages double-blind clinical trial records with strict regulatory reporting and audit trails. The policy team is finding resources that were already running before a new policy was written. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'gator test' against a full set of manifests exported from the cluster with kubectl so that the resources already running are checked offline in the pipeline." },
      { id: 'B', text: "Rely on the validating webhook, which the API server invokes for every resource that currently exists in the cluster." },
      { id: 'C', text: "Set enforcementAction to deny so that resources already running are evicted automatically the next time the Gatekeeper controller reconciles them." },
      { id: 'D', text: "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no action required from the teams that own them. Exporting manifests and running gator over them does produce the same answer once, but it is a manual snapshot that goes stale immediately. The webhook is only called on create and update requests, so an object admitted before the policy existed is never re-examined. Enforcement actions apply to admission and never evict or modify workloads that are already running.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "audit", "compliance", "Pharmaceutical Clinical Trial Platform"]
  },
  {
    id: "cncf-opa-267",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Applying a Required Default Automatically: Smart City Traffic & Mobility Sensor Hub",
    scenario: "A metropolitan transit authority optimizes urban traffic signals with real-time video analytics and edge inference. The policy team is applying a required default to incoming workloads without every team editing manifests. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically." },
      { id: 'B', text: "Configure a Kubernetes MutatingAdmissionPolicy with a CEL expression that patches the missing field during the admission request." },
      { id: 'C', text: "Configure a Constraint that denies any pod missing the field so that each team adds the required value to its own manifests." },
      { id: 'D', text: "Configure a PodPreset resource that merges the default security context into every pod that matches a given namespace and label selector." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CEL-based MutatingAdmissionPolicy achieves the same outcome through the Kubernetes built-in path and is a reasonable alternative, though it sits outside Gatekeeper and its constraint tooling. Denying instead of mutating does eventually produce compliance, but only after every team edits every manifest, which is the work being avoided. PodPreset was removed from Kubernetes in version 1.20 and no longer exists.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "mutation", "admission", "Smart City Traffic & Mobility Sensor Hub"]
  },
  {
    id: "cncf-opa-268",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Catching Violations Before the Cluster Sees Them: Digital Identity & Biometric Verification",
    scenario: "A cross-border passport control gateway validates identity credentials with zero-knowledge cryptographic proofs. The policy team is catching constraint violations in a pull request rather than at admission time. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'kubectl apply --dry-run=server' in the pipeline so that the API server runs the Gatekeeper admission webhook for real without ever persisting the object." },
      { id: 'B', text: "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters." },
      { id: 'C', text: "Use 'conftest test' in CI with the Rego extracted out of each ConstraintTemplate to check the manifests directly." },
      { id: 'D', text: "Use 'opa test' against the Rego embedded in each ConstraintTemplate so that the policy's own unit tests run on every pull request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "gator evaluates a manifest against the ConstraintTemplate and its Constraints together, honouring match criteria and parameters, and it needs no cluster at all, so it runs in a pull request in seconds. Server-side dry run genuinely exercises the real webhook, but it requires a reachable cluster with the constraints already installed, which is the dependency shift-left testing is trying to remove. Extracting the Rego for conftest drops the match criteria and parameter wiring that decide whether the policy even applies. 'opa test' checks the policy's own logic rather than the manifests under review.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gator", "shift-left", "ci-cd", "Digital Identity & Biometric Verification"]
  },
  {
    id: "cncf-opa-269",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Behaviour When the Policy Webhook Is Unreachable: Legal Discovery & Semantic Document Search",
    scenario: "A global law firm conducts regulatory discovery across millions of scanned legal filings with vector-enhanced semantic retrieval. The policy team is deciding how admission should behave while the policy webhook is unreachable. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure 'failurePolicy: Ignore' everywhere and rely on the audit pod to report anything that was admitted while the webhook was down." },
      { id: 'B', text: "Configure 'failurePolicy: Fail' everywhere and raise timeoutSeconds so that a slow webhook response is not treated as an outright failure." },
      { id: 'C', text: "Configure 'failurePolicy: Fail' for critical security policies, or 'failurePolicy: Ignore' with strict alerting when prioritizing cluster availability." },
      { id: 'D', text: "Configure a namespaceSelector that excludes kube-system so that a webhook outage cannot prevent control plane components from starting." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "failurePolicy is the availability-versus-enforcement dial, and the answer differs per policy, so critical security constraints are worth failing closed for while others should not be able to halt deployments. Setting Ignore everywhere converts every outage into a silent enforcement gap, and although the audit runner reports it afterwards the non-compliant object is already admitted. A longer timeout helps with slowness but does nothing when the webhook is genuinely unreachable. Excluding kube-system is sound practice for avoiding deadlock but leaves the question of every other namespace unanswered.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["admission-webhook", "failure-policy", "k8s", "Legal Discovery & Semantic Document Search"]
  },
  {
    id: "cncf-opa-270",
    difficulty: "medium",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Making One Policy Reusable With Parameters: AdTech Real-Time Bidding Exchange",
    scenario: "An advertising exchange processes 500,000 bids per second with a strict 20-millisecond SLA and distributed caching. The policy team is packaging a policy so that several teams can apply it with different values. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Define a ValidatingAdmissionPolicy with a CEL expression and bind it to the target namespaces through a policy binding resource." },
      { id: 'B', text: "Define a ConstraintTemplate whose Rego reads its parameter values from a ConfigMap mounted into the Gatekeeper controller pod." },
      { id: 'C', text: "Define a separate Constraint for each variation and place the differing values directly in the Rego source of each one." },
      { id: 'D', text: "Define a ConstraintTemplate containing an openAPIV3Schema specification for parameters and the embedded Rego policy logic under 'targets'." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "The ConstraintTemplate declares both the Rego and the openAPIV3Schema for its parameters, which generates a CRD so each Constraint supplies typed values that Gatekeeper validates. ValidatingAdmissionPolicy is a real Kubernetes feature and a genuine alternative, but it is the built-in CEL mechanism rather than Gatekeeper, so it uses none of the existing Rego or constraint tooling. Gatekeeper passes parameters through the Constraint spec and does not read them from ConfigMaps, and copying the Rego per variation abandons the reuse the template exists to provide.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraint-template", "k8s", "AdTech Real-Time Bidding Exchange"]
  },
  {
    id: "cncf-opa-271",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Scoping a Policy to Certain Namespaces: Precision Agriculture & Drone Scouting",
    scenario: "An agricultural drone fleet captures multispectral crop imagery with automated computer vision defect classification. The policy team is applying an existing policy to only some namespaces and resource kinds. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Create a Constraint custom resource that references the ConstraintTemplate and specifies 'match' criteria (kinds, namespaces, label selectors) and parameter values." },
      { id: 'B', text: "Add namespace comparisons to the Rego inside the ConstraintTemplate so that the rule simply returns no violation for any object outside the intended set of namespaces." },
      { id: 'C', text: "Set a namespaceSelector on the Gatekeeper ValidatingWebhookConfiguration so that the API server only forwards matching namespaces." },
      { id: 'D', text: "Label the namespaces that should be skipped and list every one of them in the Gatekeeper controller's --exempt-namespace flag at startup." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "The Constraint is where scope belongs: its match block filters by kind, namespace, and label selector, and changing scope is an edit to one resource that the audit runner immediately reflects. Encoding namespaces in the Rego forces a template change, and therefore a change for every other Constraint built on it, whenever scope shifts. The webhook's namespaceSelector and the --exempt-namespace flag both act on the whole Gatekeeper installation at once, so narrowing one policy would silently narrow every policy alongside it.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "constraints", "admission", "Precision Agriculture & Drone Scouting"]
  },
  {
    id: "cncf-opa-272",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Introducing a Policy Without Blocking Teams: Industrial Robotics Predictive Maintenance",
    scenario: "A semiconductor fabrication facility detects vibration harmonics on manufacturing robots to prevent unplanned downtime. The policy team is introducing a new policy across a busy cluster without blocking teams on day one. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Deploy the Constraint with a match block that initially selects one pilot namespace and widen the selector as teams come into compliance." },
      { id: 'B', text: "Set 'enforcementAction: dryrun' or 'enforcementAction: warn' to evaluate and log policy violations without blocking engineering deployments." },
      { id: 'C', text: "Leave enforcementAction at deny and rely on the Gatekeeper audit pod to report the violations before the webhook is switched on." },
      { id: 'D', text: "Write the ConstraintTemplate's Rego so that each violation message begins with the word warning, which causes admission to allow the request." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "dryrun and warn keep the constraint applied cluster-wide while removing the block, so the violation list in the Constraint status is a complete picture of what deny would reject. Piloting through the match block also avoids blocking anyone, but it only reveals violations inside the pilot namespace, so the blast radius of full enforcement stays unknown. Leaving the action at deny blocks every non-compliant request the moment the webhook is reachable. The text of a violation message has no effect on enforcement, which is governed solely by enforcementAction.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "enforcement-action", "rollout", "Industrial Robotics Predictive Maintenance"]
  },
  {
    id: "cncf-opa-273",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Finding Resources That Predate a Policy: Educational Remote Proctoring Platform",
    scenario: "An online university platform enforces anti-plagiarism and biometric proctoring for high-stakes certification exams. The policy team is finding resources that were already running before a new policy was written. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use 'gator test' against a full set of manifests exported from the cluster with kubectl so that the resources already running are checked offline in the pipeline." },
      { id: 'B', text: "Rely on the validating webhook, which the API server invokes for every resource that currently exists in the cluster." },
      { id: 'C', text: "Rely on the Gatekeeper audit pod to periodically scan all existing cluster resources and populate non-compliance violations in Constraint status fields." },
      { id: 'D', text: "Set enforcementAction to deny so that resources already running are evicted automatically the next time the Gatekeeper controller reconciles them." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "The audit runner exists precisely for this gap: it re-evaluates live objects on an interval and writes what it finds into each Constraint's status, with no action required from the teams that own them. Exporting manifests and running gator over them does produce the same answer once, but it is a manual snapshot that goes stale immediately. The webhook is only called on create and update requests, so an object admitted before the policy existed is never re-examined. Enforcement actions apply to admission and never evict or modify workloads that are already running.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "audit", "compliance", "Educational Remote Proctoring Platform"]
  },
  {
    id: "cncf-opa-274",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Applying a Required Default Automatically: Real Estate Valuation & Geo-Spatial Analytics",
    scenario: "A property appraisal engine fuses GIS parcel maps with real-time market transactions for automated valuation. The policy team is applying a required default to incoming workloads without every team editing manifests. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Configure a Kubernetes MutatingAdmissionPolicy with a CEL expression that patches the missing field during the admission request." },
      { id: 'B', text: "Configure a Constraint that denies any pod missing the field so that each team adds the required value to its own manifests." },
      { id: 'C', text: "Configure a PodPreset resource that merges the default security context into every pod that matches a given namespace and label selector." },
      { id: 'D', text: "Configure Gatekeeper Assign or AssignMetadata resources to inject standard security contexts or default labels into incoming pods automatically." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Assign and AssignMetadata are Gatekeeper's mutation resources, applied before validation, so the default lands on the object without any manifest changing. A CEL-based MutatingAdmissionPolicy achieves the same outcome through the Kubernetes built-in path and is a reasonable alternative, though it sits outside Gatekeeper and its constraint tooling. Denying instead of mutating does eventually produce compliance, but only after every team edits every manifest, which is the work being avoided. PodPreset was removed from Kubernetes in version 1.20 and no longer exists.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gatekeeper", "mutation", "admission", "Real Estate Valuation & Geo-Spatial Analytics"]
  },
  {
    id: "cncf-opa-275",
    difficulty: "hard",
    certId: "cncf-opa",
    domainId: "d2",
    domainName: "Kubernetes Admission Control with Gatekeeper",
    title: "Catching Violations Before the Cluster Sees Them: Disaster Emergency Dispatch & Operations",
    scenario: "A municipal 911 emergency response platform guarantees 99.999% uptime with multi-region hot-standby active failover. The policy team is catching constraint violations in a pull request rather than at admission time. The work is scoped to the development environment.",
    question: "Which policy approach best meets these requirements?",
    options: [
      { id: 'A', text: "Use the 'gator' CLI tool in developer environments and CI pipelines to test Kubernetes manifests against ConstraintTemplates before applying to clusters." },
      { id: 'B', text: "Use 'kubectl apply --dry-run=server' in the pipeline so that the API server runs the Gatekeeper admission webhook for real without ever persisting the object." },
      { id: 'C', text: "Use 'conftest test' in CI with the Rego extracted out of each ConstraintTemplate to check the manifests directly." },
      { id: 'D', text: "Use 'opa test' against the Rego embedded in each ConstraintTemplate so that the policy's own unit tests run on every pull request." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "gator evaluates a manifest against the ConstraintTemplate and its Constraints together, honouring match criteria and parameters, and it needs no cluster at all, so it runs in a pull request in seconds. Server-side dry run genuinely exercises the real webhook, but it requires a reachable cluster with the constraints already installed, which is the dependency shift-left testing is trying to remove. Extracting the Rego for conftest drops the match criteria and parameter wiring that decide whether the policy even applies. 'opa test' checks the policy's own logic rather than the manifests under review.",
    referenceUrl: "https://www.cncf.io/certification/copaa/",
    tags: ["gator", "shift-left", "ci-cd", "Disaster Emergency Dispatch & Operations"]
  }
];

export default CNCF_OPA_QUESTIONS_11;
