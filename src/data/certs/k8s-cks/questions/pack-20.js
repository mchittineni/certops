export const K8S_CKS_QUESTIONS_20 = [
  {
    id: "k8s-cks-476",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Cordon the node, capture a memory dump, and restart the container to clear the process." },
      { id: 'B', text: "Isolate the pod with a deny-all NetworkPolicy and delete it once the logs are exported." },
      { id: 'C', text: "Isolate the pod with a deny-all NetworkPolicy, capture a memory dump, and leave it running." },
      { id: 'D', text: "Drain the node, delete the pod, and rebuild the node from its image to remove the malware." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics","Forensics","Dr Failover"]
  },
  {
    id: "k8s-cks-477",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Isolate the pod with a deny-all NetworkPolicy, capture a memory dump, and leave it running." },
      { id: 'B', text: "Drain the node, delete the pod, and rebuild the node from its image to remove the malware." },
      { id: 'C', text: "Cordon the node, capture a memory dump, and restart the container to clear the process." },
      { id: 'D', text: "Isolate the pod with a deny-all NetworkPolicy and delete it once the logs are exported." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics","Forensics","High Load Scale"]
  },
  {
    id: "k8s-cks-478",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Isolate the pod with a deny-all NetworkPolicy, capture a memory dump, and leave it running." },
      { id: 'B', text: "Drain the node, delete the pod, and rebuild the node from its image to remove the malware." },
      { id: 'C', text: "Cordon the node, capture a memory dump, and restart the container to clear the process." },
      { id: 'D', text: "Isolate the pod with a deny-all NetworkPolicy and delete it once the logs are exported." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics","Forensics","Security Compliance"]
  },
  {
    id: "k8s-cks-479",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Isolate the pod with a deny-all NetworkPolicy and delete it once the logs are exported." },
      { id: 'B', text: "Drain the node, delete the pod, and rebuild the node from its image to remove the malware." },
      { id: 'C', text: "Isolate the pod with a deny-all NetworkPolicy, capture a memory dump, and leave it running." },
      { id: 'D', text: "Cordon the node, capture a memory dump, and restart the container to clear the process." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics","Forensics","Hybrid Migration"]
  },
  {
    id: "k8s-cks-480",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Isolate the pod with a deny-all NetworkPolicy, capture a memory dump, and leave it running." },
      { id: 'B', text: "Cordon the node, capture a memory dump, and restart the container to clear the process." },
      { id: 'C', text: "Isolate the pod with a deny-all NetworkPolicy and delete it once the logs are exported." },
      { id: 'D', text: "Drain the node, delete the pod, and rebuild the node from its image to remove the malware." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics","Forensics","Resilience Failure"]
  },
  {
    id: "k8s-cks-481",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "OPA Gatekeeper Constraint Templates and Constraints: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run OPA Gatekeeper with a Rego `ConstraintTemplate` and a `Constraint` over pod specs." },
      { id: 'B', text: "Run Kyverno with a `ClusterPolicy` in `Audit` mode reporting on the same pod specs." },
      { id: 'C', text: "Run a controller of your own that watches pods and deletes the ones that violate the rule." },
      { id: 'D', text: "Run Pod Security Admission at the `baseline` level on each of the target namespaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper","OPA Gatekeeper","Dr Failover"]
  },
  {
    id: "k8s-cks-482",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "OPA Gatekeeper Constraint Templates and Constraints: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run OPA Gatekeeper with a Rego `ConstraintTemplate` and a `Constraint` over pod specs." },
      { id: 'B', text: "Run Kyverno with a `ClusterPolicy` in `Audit` mode reporting on the same pod specs." },
      { id: 'C', text: "Run a controller of your own that watches pods and deletes the ones that violate the rule." },
      { id: 'D', text: "Run Pod Security Admission at the `baseline` level on each of the target namespaces." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper","OPA Gatekeeper","High Load Scale"]
  },
  {
    id: "k8s-cks-483",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "OPA Gatekeeper Constraint Templates and Constraints: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run Kyverno with a `ClusterPolicy` in `Audit` mode reporting on the same pod specs." },
      { id: 'B', text: "Run Pod Security Admission at the `baseline` level on each of the target namespaces." },
      { id: 'C', text: "Run a controller of your own that watches pods and deletes the ones that violate the rule." },
      { id: 'D', text: "Run OPA Gatekeeper with a Rego `ConstraintTemplate` and a `Constraint` over pod specs." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper","OPA Gatekeeper","Security Compliance"]
  },
  {
    id: "k8s-cks-484",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "OPA Gatekeeper Constraint Templates and Constraints: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run a controller of your own that watches pods and deletes the ones that violate the rule." },
      { id: 'B', text: "Run OPA Gatekeeper with a Rego `ConstraintTemplate` and a `Constraint` over pod specs." },
      { id: 'C', text: "Run Kyverno with a `ClusterPolicy` in `Audit` mode reporting on the same pod specs." },
      { id: 'D', text: "Run Pod Security Admission at the `baseline` level on each of the target namespaces." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper","OPA Gatekeeper","Hybrid Migration"]
  },
  {
    id: "k8s-cks-485",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "OPA Gatekeeper Constraint Templates and Constraints: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run OPA Gatekeeper with a Rego `ConstraintTemplate` and a `Constraint` over pod specs." },
      { id: 'B', text: "Run Pod Security Admission at the `baseline` level on each of the target namespaces." },
      { id: 'C', text: "Run Kyverno with a `ClusterPolicy` in `Audit` mode reporting on the same pod specs." },
      { id: 'D', text: "Run a controller of your own that watches pods and deletes the ones that violate the rule." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper","OPA Gatekeeper","Resilience Failure"]
  },
  {
    id: "k8s-cks-486",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kyverno Policy Engine for Kubernetes: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Run Kyverno and write `ClusterPolicy` resources in plain Kubernetes YAML." },
      { id: 'B', text: "Run OPA Gatekeeper and write the same rules as Rego `ConstraintTemplate` objects." },
      { id: 'C', text: "Run a `ValidatingAdmissionPolicy` with CEL expressions compiled into the API server." },
      { id: 'D', text: "Run a mutating webhook of your own that rewrites each pod spec as it is admitted." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies","Kyverno","Dr Failover"]
  },
  {
    id: "k8s-cks-487",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kyverno Policy Engine for Kubernetes: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Run Kyverno and write `ClusterPolicy` resources in plain Kubernetes YAML." },
      { id: 'B', text: "Run a mutating webhook of your own that rewrites each pod spec as it is admitted." },
      { id: 'C', text: "Run OPA Gatekeeper and write the same rules as Rego `ConstraintTemplate` objects." },
      { id: 'D', text: "Run a `ValidatingAdmissionPolicy` with CEL expressions compiled into the API server." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies","Kyverno","High Load Scale"]
  },
  {
    id: "k8s-cks-488",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kyverno Policy Engine for Kubernetes: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Run a mutating webhook of your own that rewrites each pod spec as it is admitted." },
      { id: 'B', text: "Run OPA Gatekeeper and write the same rules as Rego `ConstraintTemplate` objects." },
      { id: 'C', text: "Run Kyverno and write `ClusterPolicy` resources in plain Kubernetes YAML." },
      { id: 'D', text: "Run a `ValidatingAdmissionPolicy` with CEL expressions compiled into the API server." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies","Kyverno","Security Compliance"]
  },
  {
    id: "k8s-cks-489",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kyverno Policy Engine for Kubernetes: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Run Kyverno and write `ClusterPolicy` resources in plain Kubernetes YAML." },
      { id: 'B', text: "Run a `ValidatingAdmissionPolicy` with CEL expressions compiled into the API server." },
      { id: 'C', text: "Run a mutating webhook of your own that rewrites each pod spec as it is admitted." },
      { id: 'D', text: "Run OPA Gatekeeper and write the same rules as Rego `ConstraintTemplate` objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies","Kyverno","Hybrid Migration"]
  },
  {
    id: "k8s-cks-490",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d4",
    domainName: "Minimize Microservice Vulnerabilities",
    title: "Kyverno Policy Engine for Kubernetes: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Run Kyverno and write `ClusterPolicy` resources in plain Kubernetes YAML." },
      { id: 'B', text: "Run a `ValidatingAdmissionPolicy` with CEL expressions compiled into the API server." },
      { id: 'C', text: "Run a mutating webhook of your own that rewrites each pod spec as it is admitted." },
      { id: 'D', text: "Run OPA Gatekeeper and write the same rules as Rego `ConstraintTemplate` objects." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies","Kyverno","Resilience Failure"]
  },
  {
    id: "k8s-cks-491",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource." },
      { id: 'B', text: "Configure `failurePolicy: Ignore` (fail-open) so security checks are bypassed when the service is down." },
      { id: 'C', text: "Delete the webhook configuration file completely." },
      { id: 'D', text: "Set webhook timeoutSeconds to zero." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource. The `failurePolicy` of an admission webhook specifies how the API server handles unreachability or errors from the webhook service. Setting `Fail` (fail-closed) guarantees that if the security webhook cannot be contacted, the incoming resource is rejected, preserving cluster security integrity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks","Webhook failurePolicy","Dr Failover"]
  },
  {
    id: "k8s-cks-492",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource." },
      { id: 'B', text: "Delete the webhook configuration file completely." },
      { id: 'C', text: "Set webhook timeoutSeconds to zero." },
      { id: 'D', text: "Configure `failurePolicy: Ignore` (fail-open) so security checks are bypassed when the service is down." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource. The `failurePolicy` of an admission webhook specifies how the API server handles unreachability or errors from the webhook service. Setting `Fail` (fail-closed) guarantees that if the security webhook cannot be contacted, the incoming resource is rejected, preserving cluster security integrity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks","Webhook failurePolicy","High Load Scale"]
  },
  {
    id: "k8s-cks-493",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource." },
      { id: 'B', text: "Configure `failurePolicy: Ignore` (fail-open) so security checks are bypassed when the service is down." },
      { id: 'C', text: "Delete the webhook configuration file completely." },
      { id: 'D', text: "Set webhook timeoutSeconds to zero." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource. The `failurePolicy` of an admission webhook specifies how the API server handles unreachability or errors from the webhook service. Setting `Fail` (fail-closed) guarantees that if the security webhook cannot be contacted, the incoming resource is rejected, preserving cluster security integrity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks","Webhook failurePolicy","Security Compliance"]
  },
  {
    id: "k8s-cks-494",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource." },
      { id: 'B', text: "Set webhook timeoutSeconds to zero." },
      { id: 'C', text: "Configure `failurePolicy: Ignore` (fail-open) so security checks are bypassed when the service is down." },
      { id: 'D', text: "Delete the webhook configuration file completely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource. The `failurePolicy` of an admission webhook specifies how the API server handles unreachability or errors from the webhook service. Setting `Fail` (fail-closed) guarantees that if the security webhook cannot be contacted, the incoming resource is rejected, preserving cluster security integrity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks","Webhook failurePolicy","Hybrid Migration"]
  },
  {
    id: "k8s-cks-495",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d2",
    domainName: "Cluster Hardening",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Set webhook timeoutSeconds to zero." },
      { id: 'B', text: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource." },
      { id: 'C', text: "Delete the webhook configuration file completely." },
      { id: 'D', text: "Configure `failurePolicy: Ignore` (fail-open) so security checks are bypassed when the service is down." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure `failurePolicy: Fail` (fail-closed) on the `ValidatingWebhookConfiguration` resource. The `failurePolicy` of an admission webhook specifies how the API server handles unreachability or errors from the webhook service. Setting `Fail` (fail-closed) guarantees that if the security webhook cannot be contacted, the incoming resource is rejected, preserving cluster security integrity.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks","Webhook failurePolicy","Resilience Failure"]
  },
  {
    id: "k8s-cks-496",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "ImagePolicyWebhook Admission Controller: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer needs to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives?",
    options: [
      { id: 'A', text: "Enable the `AlwaysPullImages` plugin so every pod revalidates the image against the registry." },
      { id: 'B', text: "Enable the `NodeRestriction` plugin so only the node's own kubelet can admit its images." },
      { id: 'C', text: "Enable `ValidatingAdmissionPolicy` with a CEL expression over the pod's `imagePullPolicy`." },
      { id: 'D', text: "Enable the `ImagePolicyWebhook` plugin and point its admission config at the external validator." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission","ImagePolicyWebhook","Dr Failover"]
  },
  {
    id: "k8s-cks-497",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "ImagePolicyWebhook Admission Controller: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer needs to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks?",
    options: [
      { id: 'A', text: "Enable the `AlwaysPullImages` plugin so every pod revalidates the image against the registry." },
      { id: 'B', text: "Enable the `ImagePolicyWebhook` plugin and point its admission config at the external validator." },
      { id: 'C', text: "Enable the `NodeRestriction` plugin so only the node's own kubelet can admit its images." },
      { id: 'D', text: "Enable `ValidatingAdmissionPolicy` with a CEL expression over the pod's `imagePullPolicy`." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission","ImagePolicyWebhook","High Load Scale"]
  },
  {
    id: "k8s-cks-498",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "ImagePolicyWebhook Admission Controller: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer needs to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls?",
    options: [
      { id: 'A', text: "Enable the `ImagePolicyWebhook` plugin and point its admission config at the external validator." },
      { id: 'B', text: "Enable the `AlwaysPullImages` plugin so every pod revalidates the image against the registry." },
      { id: 'C', text: "Enable `ValidatingAdmissionPolicy` with a CEL expression over the pod's `imagePullPolicy`." },
      { id: 'D', text: "Enable the `NodeRestriction` plugin so only the node's own kubelet can admit its images." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission","ImagePolicyWebhook","Security Compliance"]
  },
  {
    id: "k8s-cks-499",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "ImagePolicyWebhook Admission Controller: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer needs to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization?",
    options: [
      { id: 'A', text: "Enable the `ImagePolicyWebhook` plugin and point its admission config at the external validator." },
      { id: 'B', text: "Enable the `NodeRestriction` plugin so only the node's own kubelet can admit its images." },
      { id: 'C', text: "Enable the `AlwaysPullImages` plugin so every pod revalidates the image against the registry." },
      { id: 'D', text: "Enable `ValidatingAdmissionPolicy` with a CEL expression over the pod's `imagePullPolicy`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission","ImagePolicyWebhook","Hybrid Migration"]
  },
  {
    id: "k8s-cks-500",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Supply Chain Security",
    title: "ImagePolicyWebhook Admission Controller: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer needs to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection?",
    options: [
      { id: 'A', text: "Enable `ValidatingAdmissionPolicy` with a CEL expression over the pod's `imagePullPolicy`." },
      { id: 'B', text: "Enable the `ImagePolicyWebhook` plugin and point its admission config at the external validator." },
      { id: 'C', text: "Enable the `AlwaysPullImages` plugin so every pod revalidates the image against the registry." },
      { id: 'D', text: "Enable the `NodeRestriction` plugin so only the node's own kubelet can admit its images." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission","ImagePolicyWebhook","Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_20;
