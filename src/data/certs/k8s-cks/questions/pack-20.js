export const K8S_CKS_QUESTIONS_20 = [
  {
    id: "k8s-cks-476",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Incident Forensics to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Preserving container memory dumps and volatile evidence without altering compromised state is under consideration.",
    options: [
      { id: 'A', text: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately." },
      { id: 'B', text: "Delete the pod and its worker node immediately, destroying all in-memory malware artifacts." },
      { id: 'C', text: "Restart the container process to see if the malware disappears." },
      { id: 'D', text: "Log into the container and execute `rm -rf /`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics", "Forensics", "Dr Failover"]
  },
  {
    id: "k8s-cks-477",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Incident Forensics to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Preserving container memory dumps and volatile evidence without altering compromised state is under consideration.",
    options: [
      { id: 'A', text: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately." },
      { id: 'B', text: "Delete the pod and its worker node immediately, destroying all in-memory malware artifacts." },
      { id: 'C', text: "Restart the container process to see if the malware disappears." },
      { id: 'D', text: "Log into the container and execute `rm -rf /`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics", "Forensics", "High Load Scale"]
  },
  {
    id: "k8s-cks-478",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Incident Forensics to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Preserving container memory dumps and volatile evidence without altering compromised state is under consideration.",
    options: [
      { id: 'A', text: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately." },
      { id: 'B', text: "Delete the pod and its worker node immediately, destroying all in-memory malware artifacts." },
      { id: 'C', text: "Restart the container process to see if the malware disappears." },
      { id: 'D', text: "Log into the container and execute `rm -rf /`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics", "Forensics", "Security Compliance"]
  },
  {
    id: "k8s-cks-479",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Incident Forensics to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Preserving container memory dumps and volatile evidence without altering compromised state is under consideration.",
    options: [
      { id: 'A', text: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately." },
      { id: 'B', text: "Delete the pod and its worker node immediately, destroying all in-memory malware artifacts." },
      { id: 'C', text: "Restart the container process to see if the malware disappears." },
      { id: 'D', text: "Log into the container and execute `rm -rf /`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics", "Forensics", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-480",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d5",
    domainName: "Monitoring, Logging and Runtime Security",
    title: "Forensic Artifact Preservation During Active Breaches: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Incident Forensics to preserve volatile memory and filesystem evidence from a compromised container for forensic analysis while containing ongoing network threats.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Preserving container memory dumps and volatile evidence without altering compromised state is under consideration.",
    options: [
      { id: 'A', text: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately." },
      { id: 'B', text: "Delete the pod and its worker node immediately, destroying all in-memory malware artifacts." },
      { id: 'C', text: "Restart the container process to see if the malware disappears." },
      { id: 'D', text: "Log into the container and execute `rm -rf /`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Isolate the pod using an aggressive zero-traffic NetworkPolicy, take a memory dump via `gcore` or live snapshot, and avoid terminating the container immediately. Incident response requires preserving evidence. When a container is compromised, terminating the pod erases all volatile RAM and ephemeral storage. Containing the pod via NetworkPolicies or cordon while extracting memory dumps (`gcore`) and container diffs preserves vital forensic artifacts.",
    referenceUrl: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/",
    tags: ["Incident Forensics", "Forensics", "Resilience Failure"]
  },
  {
    id: "k8s-cks-481",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "OPA Gatekeeper Constraint Templates and Constraints: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates OPA Gatekeeper to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Declarative policy enforcement at admission time using Rego constraint templates is under consideration.",
    options: [
      { id: 'A', text: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications." },
      { id: 'B', text: "Instruct developers to memorize security guidelines and follow them voluntarily." },
      { id: 'C', text: "Deploy a cron job that kills violating pods five minutes after they start running." },
      { id: 'D', text: "Write a custom bash script that edits the kube-apiserver binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper", "OPA Gatekeeper", "Dr Failover"]
  },
  {
    id: "k8s-cks-482",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "OPA Gatekeeper Constraint Templates and Constraints: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates OPA Gatekeeper to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Declarative policy enforcement at admission time using Rego constraint templates is under consideration.",
    options: [
      { id: 'A', text: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications." },
      { id: 'B', text: "Instruct developers to memorize security guidelines and follow them voluntarily." },
      { id: 'C', text: "Deploy a cron job that kills violating pods five minutes after they start running." },
      { id: 'D', text: "Write a custom bash script that edits the kube-apiserver binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper", "OPA Gatekeeper", "High Load Scale"]
  },
  {
    id: "k8s-cks-483",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "OPA Gatekeeper Constraint Templates and Constraints: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates OPA Gatekeeper to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Declarative policy enforcement at admission time using Rego constraint templates is under consideration.",
    options: [
      { id: 'A', text: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications." },
      { id: 'B', text: "Instruct developers to memorize security guidelines and follow them voluntarily." },
      { id: 'C', text: "Deploy a cron job that kills violating pods five minutes after they start running." },
      { id: 'D', text: "Write a custom bash script that edits the kube-apiserver binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper", "OPA Gatekeeper", "Security Compliance"]
  },
  {
    id: "k8s-cks-484",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "OPA Gatekeeper Constraint Templates and Constraints: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates OPA Gatekeeper to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Declarative policy enforcement at admission time using Rego constraint templates is under consideration.",
    options: [
      { id: 'A', text: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications." },
      { id: 'B', text: "Instruct developers to memorize security guidelines and follow them voluntarily." },
      { id: 'C', text: "Deploy a cron job that kills violating pods five minutes after they start running." },
      { id: 'D', text: "Write a custom bash script that edits the kube-apiserver binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper", "OPA Gatekeeper", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-485",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "OPA Gatekeeper Constraint Templates and Constraints: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates OPA Gatekeeper to enforce a policy that forbids any pod deployment from specifying hostPort or hostNetwork across all non-system namespaces.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Declarative policy enforcement at admission time using Rego constraint templates is under consideration.",
    options: [
      { id: 'A', text: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications." },
      { id: 'B', text: "Instruct developers to memorize security guidelines and follow them voluntarily." },
      { id: 'C', text: "Deploy a cron job that kills violating pods five minutes after they start running." },
      { id: 'D', text: "Write a custom bash script that edits the kube-apiserver binary." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy OPA Gatekeeper, define a `ConstraintTemplate` with Rego logic, and apply a `Constraint` targeting pod specifications. Open Policy Agent (OPA) Gatekeeper is an admission controller that enforces declarative policies written in Rego. By defining `ConstraintTemplates` and associated `Constraints`, Gatekeeper intercepts API creation requests and rejects non-compliant resources before they are persisted in etcd.",
    referenceUrl: "https://open-policy-agent.github.io/gatekeeper/website/docs/howto/",
    tags: ["OPA Gatekeeper", "OPA Gatekeeper", "Resilience Failure"]
  },
  {
    id: "k8s-cks-486",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Kyverno Policy Engine for Kubernetes: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Kyverno Policies to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Kubernetes-native declarative admission policies, mutation, and generation without Rego is under consideration.",
    options: [
      { id: 'A', text: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation." },
      { id: 'B', text: "Write complex custom C++ admission plugins and recompile the Kubernetes API server." },
      { id: 'C', text: "Require manual approval tickets for every single container deployment." },
      { id: 'D', text: "Disable admission controllers to speed up API server response times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies", "Kyverno", "Dr Failover"]
  },
  {
    id: "k8s-cks-487",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Kyverno Policy Engine for Kubernetes: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Kyverno Policies to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Kubernetes-native declarative admission policies, mutation, and generation without Rego is under consideration.",
    options: [
      { id: 'A', text: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation." },
      { id: 'B', text: "Write complex custom C++ admission plugins and recompile the Kubernetes API server." },
      { id: 'C', text: "Require manual approval tickets for every single container deployment." },
      { id: 'D', text: "Disable admission controllers to speed up API server response times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies", "Kyverno", "High Load Scale"]
  },
  {
    id: "k8s-cks-488",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Kyverno Policy Engine for Kubernetes: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Kyverno Policies to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Kubernetes-native declarative admission policies, mutation, and generation without Rego is under consideration.",
    options: [
      { id: 'A', text: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation." },
      { id: 'B', text: "Write complex custom C++ admission plugins and recompile the Kubernetes API server." },
      { id: 'C', text: "Require manual approval tickets for every single container deployment." },
      { id: 'D', text: "Disable admission controllers to speed up API server response times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies", "Kyverno", "Security Compliance"]
  },
  {
    id: "k8s-cks-489",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Kyverno Policy Engine for Kubernetes: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Kyverno Policies to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Kubernetes-native declarative admission policies, mutation, and generation without Rego is under consideration.",
    options: [
      { id: 'A', text: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation." },
      { id: 'B', text: "Write complex custom C++ admission plugins and recompile the Kubernetes API server." },
      { id: 'C', text: "Require manual approval tickets for every single container deployment." },
      { id: 'D', text: "Disable admission controllers to speed up API server response times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies", "Kyverno", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-490",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Kyverno Policy Engine for Kubernetes: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Kyverno Policies to enforce security policies and automatically mutate incoming pod specs to add default security contexts without learning complex programming languages.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Kubernetes-native declarative admission policies, mutation, and generation without Rego is under consideration.",
    options: [
      { id: 'A', text: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation." },
      { id: 'B', text: "Write complex custom C++ admission plugins and recompile the Kubernetes API server." },
      { id: 'C', text: "Require manual approval tickets for every single container deployment." },
      { id: 'D', text: "Disable admission controllers to speed up API server response times." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy `Kyverno` and author declarative `ClusterPolicy` resources using standard Kubernetes YAML syntax for validation and mutation. Kyverno is a Kubernetes-native policy engine that uses standard YAML rather than specialized languages like Rego. It can validate (block non-compliant pods), mutate (automatically inject securityContext defaults), and generate resources in response to cluster events.",
    referenceUrl: "https://kyverno.io/docs/introduction/",
    tags: ["Kyverno Policies", "Kyverno", "Resilience Failure"]
  },
  {
    id: "k8s-cks-491",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Admission Webhooks to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Configuring failurePolicy: Fail vs Ignore for mission-critical security webhooks is under consideration.",
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
    tags: ["Admission Webhooks", "Webhook failurePolicy", "Dr Failover"]
  },
  {
    id: "k8s-cks-492",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Admission Webhooks to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Configuring failurePolicy: Fail vs Ignore for mission-critical security webhooks is under consideration.",
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
    tags: ["Admission Webhooks", "Webhook failurePolicy", "High Load Scale"]
  },
  {
    id: "k8s-cks-493",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Admission Webhooks to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Configuring failurePolicy: Fail vs Ignore for mission-critical security webhooks is under consideration.",
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
    tags: ["Admission Webhooks", "Webhook failurePolicy", "Security Compliance"]
  },
  {
    id: "k8s-cks-494",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Admission Webhooks to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Configuring failurePolicy: Fail vs Ignore for mission-critical security webhooks is under consideration.",
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
    tags: ["Admission Webhooks", "Webhook failurePolicy", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-495",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "Validating and Mutating Webhook Fail-Open vs Fail-Closed: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Admission Webhooks to ensure that an enterprise security admission webhook cannot be bypassed if the webhook backend service experiences temporary downtime.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Configuring failurePolicy: Fail vs Ignore for mission-critical security webhooks is under consideration.",
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
    tags: ["Admission Webhooks", "Webhook failurePolicy", "Resilience Failure"]
  },
  {
    id: "k8s-cks-496",
    difficulty: "hard",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ImagePolicyWebhook Admission Controller: Dr Failover",
    scenario: "A platform security architecture team is establishing incident containment procedures and resilient security baselines for enterprise Kubernetes infrastructure. The Kubernetes security engineer evaluates Image Admission to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which architectural control or configuration satisfies these security containment and operational resilience objectives? Backend image validation using the native ImagePolicyWebhook admission plugin is under consideration.",
    options: [
      { id: 'A', text: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator." },
      { id: 'B', text: "Allow all images to be pulled without validation." },
      { id: 'C', text: "Manually approve image SHA hashes in the terminal." },
      { id: 'D', text: "Disable admission plugins in the control plane manifest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission", "ImagePolicyWebhook", "Dr Failover"]
  },
  {
    id: "k8s-cks-497",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ImagePolicyWebhook Admission Controller: High Load Scale",
    scenario: "A large-scale production Kubernetes cluster experiences high deployment throughput and heavy container execution volumes under strict zero-trust constraints. The Kubernetes security engineer evaluates Image Admission to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which security mechanism or policy engine enforces cluster compliance efficiently without causing API latency or scheduling bottlenecks? Backend image validation using the native ImagePolicyWebhook admission plugin is under consideration.",
    options: [
      { id: 'A', text: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator." },
      { id: 'B', text: "Allow all images to be pulled without validation." },
      { id: 'C', text: "Manually approve image SHA hashes in the terminal." },
      { id: 'D', text: "Disable admission plugins in the control plane manifest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission", "ImagePolicyWebhook", "High Load Scale"]
  },
  {
    id: "k8s-cks-498",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ImagePolicyWebhook Admission Controller: Security Compliance",
    scenario: "A security compliance auditor requires cryptographic supply chain verification, mandatory kernel sandboxing, and immutable audit trails across all namespaces. The Kubernetes security engineer evaluates Image Admission to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which solution implements these mandatory Kubernetes security and governance controls? Backend image validation using the native ImagePolicyWebhook admission plugin is under consideration.",
    options: [
      { id: 'A', text: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator." },
      { id: 'B', text: "Allow all images to be pulled without validation." },
      { id: 'C', text: "Manually approve image SHA hashes in the terminal." },
      { id: 'D', text: "Disable admission plugins in the control plane manifest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission", "ImagePolicyWebhook", "Security Compliance"]
  },
  {
    id: "k8s-cks-499",
    difficulty: "easy",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ImagePolicyWebhook Admission Controller: Hybrid Migration",
    scenario: "An enterprise is migrating traditional on-premises secure enclave workloads into production Kubernetes clusters running in hybrid environments. The Kubernetes security engineer evaluates Image Admission to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which security pattern or platform feature enables the organization to maintain strict defense-in-depth isolation during this modernization? Backend image validation using the native ImagePolicyWebhook admission plugin is under consideration.",
    options: [
      { id: 'A', text: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator." },
      { id: 'B', text: "Allow all images to be pulled without validation." },
      { id: 'C', text: "Manually approve image SHA hashes in the terminal." },
      { id: 'D', text: "Disable admission plugins in the control plane manifest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission", "ImagePolicyWebhook", "Hybrid Migration"]
  },
  {
    id: "k8s-cks-500",
    difficulty: "medium",
    certId: "k8s-cks",
    domainId: "d6",
    domainName: "Cluster Threat Defense and Admission Control",
    title: "ImagePolicyWebhook Admission Controller: Resilience Failure",
    scenario: "A security operations team is hardening container runtime defenses to detect anomalies, eliminate privilege escalation vectors, and automate threat response. The Kubernetes security engineer evaluates Image Admission to delegate container image admission decisions to an external security verification service using the native API server plugin.",
    question: "Which design pattern or configuration eliminates vulnerabilities and guarantees runtime cluster protection? Backend image validation using the native ImagePolicyWebhook admission plugin is under consideration.",
    options: [
      { id: 'A', text: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator." },
      { id: 'B', text: "Allow all images to be pulled without validation." },
      { id: 'C', text: "Manually approve image SHA hashes in the terminal." },
      { id: 'D', text: "Disable admission plugins in the control plane manifest." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Enable the `ImagePolicyWebhook` admission plugin on kube-apiserver and configure an admission configuration file pointing to the external validator. The `ImagePolicyWebhook` is a built-in admission controller plugin that intercepts image creation requests and sends a webhook to an external service. The external service evaluates the image attributes (digest, tag, registry) and approves or rejects admission according to external security criteria.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook",
    tags: ["Image Admission", "ImagePolicyWebhook", "Resilience Failure"]
  }
];

export default K8S_CKS_QUESTIONS_20;
