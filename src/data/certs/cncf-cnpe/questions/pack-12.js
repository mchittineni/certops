export const CNCF_CNPE_QUESTIONS_12 = [
  {
    id: "cncf-cnpe-276",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Event-Driven Platform Architecture and CloudEvents: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Platform Event Bus to trigger automated security audits, notification webhooks, and environment provisioning asynchronously across diverse platform services.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Decoupling platform components using standardized CloudEvents and Knative Eventing is under consideration.",
    options: [
      { id: 'A', text: "Couple all platform tools synchronously via blocking REST HTTP calls that timeout during network glitches." },
      { id: 'B', text: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers." },
      { id: 'C', text: "Manually trigger downstream operations via interactive chat messages." },
      { id: 'D', text: "Write raw event payloads to temporary local disk files without delivery guarantees." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers. Event-driven platform architectures decouple platform tools (portals, CI/CD, security scanners, orchestrators). Adopting the CNCF CloudEvents specification provides a common event envelope, while brokers (Knative Eventing, Strimzi) route events reliably.",
    referenceUrl: "https://cloudevents.io/",
    tags: ["Platform Event Bus", "Platform Event Bus", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-277",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Event-Driven Platform Architecture and CloudEvents: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Platform Event Bus to trigger automated security audits, notification webhooks, and environment provisioning asynchronously across diverse platform services.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Decoupling platform components using standardized CloudEvents and Knative Eventing is under consideration.",
    options: [
      { id: 'A', text: "Manually trigger downstream operations via interactive chat messages." },
      { id: 'B', text: "Couple all platform tools synchronously via blocking REST HTTP calls that timeout during network glitches." },
      { id: 'C', text: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers." },
      { id: 'D', text: "Write raw event payloads to temporary local disk files without delivery guarantees." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers. Event-driven platform architectures decouple platform tools (portals, CI/CD, security scanners, orchestrators). Adopting the CNCF CloudEvents specification provides a common event envelope, while brokers (Knative Eventing, Strimzi) route events reliably.",
    referenceUrl: "https://cloudevents.io/",
    tags: ["Platform Event Bus", "Platform Event Bus", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-278",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Event-Driven Platform Architecture and CloudEvents: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Platform Event Bus to trigger automated security audits, notification webhooks, and environment provisioning asynchronously across diverse platform services.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Decoupling platform components using standardized CloudEvents and Knative Eventing is under consideration.",
    options: [
      { id: 'A', text: "Write raw event payloads to temporary local disk files without delivery guarantees." },
      { id: 'B', text: "Couple all platform tools synchronously via blocking REST HTTP calls that timeout during network glitches." },
      { id: 'C', text: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers." },
      { id: 'D', text: "Manually trigger downstream operations via interactive chat messages." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers. Event-driven platform architectures decouple platform tools (portals, CI/CD, security scanners, orchestrators). Adopting the CNCF CloudEvents specification provides a common event envelope, while brokers (Knative Eventing, Strimzi) route events reliably.",
    referenceUrl: "https://cloudevents.io/",
    tags: ["Platform Event Bus", "Platform Event Bus", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-279",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Event-Driven Platform Architecture and CloudEvents: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Platform Event Bus to trigger automated security audits, notification webhooks, and environment provisioning asynchronously across diverse platform services.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Decoupling platform components using standardized CloudEvents and Knative Eventing is under consideration.",
    options: [
      { id: 'A', text: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers." },
      { id: 'B', text: "Couple all platform tools synchronously via blocking REST HTTP calls that timeout during network glitches." },
      { id: 'C', text: "Write raw event payloads to temporary local disk files without delivery guarantees." },
      { id: 'D', text: "Manually trigger downstream operations via interactive chat messages." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers. Event-driven platform architectures decouple platform tools (portals, CI/CD, security scanners, orchestrators). Adopting the CNCF CloudEvents specification provides a common event envelope, while brokers (Knative Eventing, Strimzi) route events reliably.",
    referenceUrl: "https://cloudevents.io/",
    tags: ["Platform Event Bus", "Platform Event Bus", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-280",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Event-Driven Platform Architecture and CloudEvents: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Platform Event Bus to trigger automated security audits, notification webhooks, and environment provisioning asynchronously across diverse platform services.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Decoupling platform components using standardized CloudEvents and Knative Eventing is under consideration.",
    options: [
      { id: 'A', text: "Manually trigger downstream operations via interactive chat messages." },
      { id: 'B', text: "Couple all platform tools synchronously via blocking REST HTTP calls that timeout during network glitches." },
      { id: 'C', text: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers." },
      { id: 'D', text: "Write raw event payloads to temporary local disk files without delivery guarantees." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement an event-driven platform bus using the CNCF CloudEvents standard and Knative Eventing brokers. Event-driven platform architectures decouple platform tools (portals, CI/CD, security scanners, orchestrators). Adopting the CNCF CloudEvents specification provides a common event envelope, while brokers (Knative Eventing, Strimzi) route events reliably.",
    referenceUrl: "https://cloudevents.io/",
    tags: ["Platform Event Bus", "Platform Event Bus", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-281",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Multi-Cluster Control Plane Topology: Hub-and-Spoke: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Control Plane Topology to architect an enterprise platform managing 200 Kubernetes clusters across three cloud providers securely and reliably.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Dedicated management clusters hosting control planes (CAPI, ArgoCD) separate from workload clusters is under consideration.",
    options: [
      { id: 'A', text: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters." },
      { id: 'B', text: "Manage 200 clusters by connecting from a single engineer's laptop running background shell scripts." },
      { id: 'C', text: "Merge all 200 clusters into one giant global flat network with no security perimeter." },
      { id: 'D', text: "Install heavy control plane management tools inside every single application worker cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters. Enterprise platform engineering utilizes a hub-and-spoke management topology. A hardened management hub cluster runs control plane engines (Cluster API, Crossplane, ArgoCD, policy engines), while spoke clusters run application workloads, reducing blast radius and securing credentials.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/user/concepts.html",
    tags: ["Control Plane Topology", "Control Plane Topology", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-282",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Multi-Cluster Control Plane Topology: Hub-and-Spoke: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Control Plane Topology to architect an enterprise platform managing 200 Kubernetes clusters across three cloud providers securely and reliably.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Dedicated management clusters hosting control planes (CAPI, ArgoCD) separate from workload clusters is under consideration.",
    options: [
      { id: 'A', text: "Install heavy control plane management tools inside every single application worker cluster." },
      { id: 'B', text: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters." },
      { id: 'C', text: "Merge all 200 clusters into one giant global flat network with no security perimeter." },
      { id: 'D', text: "Manage 200 clusters by connecting from a single engineer's laptop running background shell scripts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters. Enterprise platform engineering utilizes a hub-and-spoke management topology. A hardened management hub cluster runs control plane engines (Cluster API, Crossplane, ArgoCD, policy engines), while spoke clusters run application workloads, reducing blast radius and securing credentials.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/user/concepts.html",
    tags: ["Control Plane Topology", "Control Plane Topology", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-283",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Multi-Cluster Control Plane Topology: Hub-and-Spoke: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Control Plane Topology to architect an enterprise platform managing 200 Kubernetes clusters across three cloud providers securely and reliably.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Dedicated management clusters hosting control planes (CAPI, ArgoCD) separate from workload clusters is under consideration.",
    options: [
      { id: 'A', text: "Merge all 200 clusters into one giant global flat network with no security perimeter." },
      { id: 'B', text: "Install heavy control plane management tools inside every single application worker cluster." },
      { id: 'C', text: "Manage 200 clusters by connecting from a single engineer's laptop running background shell scripts." },
      { id: 'D', text: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters. Enterprise platform engineering utilizes a hub-and-spoke management topology. A hardened management hub cluster runs control plane engines (Cluster API, Crossplane, ArgoCD, policy engines), while spoke clusters run application workloads, reducing blast radius and securing credentials.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/user/concepts.html",
    tags: ["Control Plane Topology", "Control Plane Topology", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-284",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Multi-Cluster Control Plane Topology: Hub-and-Spoke: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Control Plane Topology to architect an enterprise platform managing 200 Kubernetes clusters across three cloud providers securely and reliably.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Dedicated management clusters hosting control planes (CAPI, ArgoCD) separate from workload clusters is under consideration.",
    options: [
      { id: 'A', text: "Manage 200 clusters by connecting from a single engineer's laptop running background shell scripts." },
      { id: 'B', text: "Merge all 200 clusters into one giant global flat network with no security perimeter." },
      { id: 'C', text: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters." },
      { id: 'D', text: "Install heavy control plane management tools inside every single application worker cluster." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters. Enterprise platform engineering utilizes a hub-and-spoke management topology. A hardened management hub cluster runs control plane engines (Cluster API, Crossplane, ArgoCD, policy engines), while spoke clusters run application workloads, reducing blast radius and securing credentials.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/user/concepts.html",
    tags: ["Control Plane Topology", "Control Plane Topology", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-285",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Multi-Cluster Control Plane Topology: Hub-and-Spoke: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Control Plane Topology to architect an enterprise platform managing 200 Kubernetes clusters across three cloud providers securely and reliably.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Dedicated management clusters hosting control planes (CAPI, ArgoCD) separate from workload clusters is under consideration.",
    options: [
      { id: 'A', text: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters." },
      { id: 'B', text: "Manage 200 clusters by connecting from a single engineer's laptop running background shell scripts." },
      { id: 'C', text: "Install heavy control plane management tools inside every single application worker cluster." },
      { id: 'D', text: "Merge all 200 clusters into one giant global flat network with no security perimeter." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt a hub-and-spoke topology: host management controllers (Cluster API, ArgoCD, Crossplane) on dedicated management clusters controlling spoke workload clusters. Enterprise platform engineering utilizes a hub-and-spoke management topology. A hardened management hub cluster runs control plane engines (Cluster API, Crossplane, ArgoCD, policy engines), while spoke clusters run application workloads, reducing blast radius and securing credentials.",
    referenceUrl: "https://cluster-api.sigs.k8s.io/user/concepts.html",
    tags: ["Control Plane Topology", "Control Plane Topology", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-286",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "API Versioning and Conversion Webhooks: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates API Versioning to evolve a widely adopted custom platform CRD schema without breaking existing manifests or interrupting running deployments.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Managing CRD version migrations (v1alpha1 to v1beta1 to v1) via conversion webhooks is under consideration.",
    options: [
      { id: 'A', text: "Refuse to evolve the API and remain trapped on deprecated alpha schemas forever." },
      { id: 'B', text: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly." },
      { id: 'C', text: "Force all development teams to update thousands of repository manifests in a single coordinated maintenance outage." },
      { id: 'D', text: "Make breaking schema changes directly in production etcd without supporting backward compatibility." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly. Kubernetes CRDs support multi-versioning. Platform engineers implement conversion webhooks to translate between versions dynamically. etcd stores a single canonical version, while the API server converts manifests on-the-fly, allowing smooth, non-disruptive API evolution.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definition-versioning/#webhook-conversion",
    tags: ["API Versioning", "API Versioning", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-287",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "API Versioning and Conversion Webhooks: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates API Versioning to evolve a widely adopted custom platform CRD schema without breaking existing manifests or interrupting running deployments.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Managing CRD version migrations (v1alpha1 to v1beta1 to v1) via conversion webhooks is under consideration.",
    options: [
      { id: 'A', text: "Force all development teams to update thousands of repository manifests in a single coordinated maintenance outage." },
      { id: 'B', text: "Make breaking schema changes directly in production etcd without supporting backward compatibility." },
      { id: 'C', text: "Refuse to evolve the API and remain trapped on deprecated alpha schemas forever." },
      { id: 'D', text: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly. Kubernetes CRDs support multi-versioning. Platform engineers implement conversion webhooks to translate between versions dynamically. etcd stores a single canonical version, while the API server converts manifests on-the-fly, allowing smooth, non-disruptive API evolution.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definition-versioning/#webhook-conversion",
    tags: ["API Versioning", "API Versioning", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-288",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "API Versioning and Conversion Webhooks: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates API Versioning to evolve a widely adopted custom platform CRD schema without breaking existing manifests or interrupting running deployments.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Managing CRD version migrations (v1alpha1 to v1beta1 to v1) via conversion webhooks is under consideration.",
    options: [
      { id: 'A', text: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly." },
      { id: 'B', text: "Refuse to evolve the API and remain trapped on deprecated alpha schemas forever." },
      { id: 'C', text: "Make breaking schema changes directly in production etcd without supporting backward compatibility." },
      { id: 'D', text: "Force all development teams to update thousands of repository manifests in a single coordinated maintenance outage." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly. Kubernetes CRDs support multi-versioning. Platform engineers implement conversion webhooks to translate between versions dynamically. etcd stores a single canonical version, while the API server converts manifests on-the-fly, allowing smooth, non-disruptive API evolution.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definition-versioning/#webhook-conversion",
    tags: ["API Versioning", "API Versioning", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-289",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "API Versioning and Conversion Webhooks: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates API Versioning to evolve a widely adopted custom platform CRD schema without breaking existing manifests or interrupting running deployments.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Managing CRD version migrations (v1alpha1 to v1beta1 to v1) via conversion webhooks is under consideration.",
    options: [
      { id: 'A', text: "Force all development teams to update thousands of repository manifests in a single coordinated maintenance outage." },
      { id: 'B', text: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly." },
      { id: 'C', text: "Refuse to evolve the API and remain trapped on deprecated alpha schemas forever." },
      { id: 'D', text: "Make breaking schema changes directly in production etcd without supporting backward compatibility." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly. Kubernetes CRDs support multi-versioning. Platform engineers implement conversion webhooks to translate between versions dynamically. etcd stores a single canonical version, while the API server converts manifests on-the-fly, allowing smooth, non-disruptive API evolution.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definition-versioning/#webhook-conversion",
    tags: ["API Versioning", "API Versioning", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-290",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "API Versioning and Conversion Webhooks: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates API Versioning to evolve a widely adopted custom platform CRD schema without breaking existing manifests or interrupting running deployments.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Managing CRD version migrations (v1alpha1 to v1beta1 to v1) via conversion webhooks is under consideration.",
    options: [
      { id: 'A', text: "Force all development teams to update thousands of repository manifests in a single coordinated maintenance outage." },
      { id: 'B', text: "Refuse to evolve the API and remain trapped on deprecated alpha schemas forever." },
      { id: 'C', text: "Make breaking schema changes directly in production etcd without supporting backward compatibility." },
      { id: 'D', text: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement CRD conversion webhooks that seamlessly translate between storage versions (`v1alpha1`, `v1beta1`, `v1`) on the fly. Kubernetes CRDs support multi-versioning. Platform engineers implement conversion webhooks to translate between versions dynamically. etcd stores a single canonical version, while the API server converts manifests on-the-fly, allowing smooth, non-disruptive API evolution.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definition-versioning/#webhook-conversion",
    tags: ["API Versioning", "API Versioning", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-291",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform API Gateway and OIDC Authentication: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Platform Gateway to secure internal platform REST and gRPC endpoints against unauthorized access and denial-of-service traffic spikes.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Enforcing OIDC token validation, mutual TLS, and rate limiting via Envoy Gateway at the platform boundary is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static administrative passwords in client frontend source code." },
      { id: 'B', text: "Expose raw backend platform databases and microservices directly to the public internet without authentication." },
      { id: 'C', text: "Disable network firewalls and rate limiters to optimize throughput." },
      { id: 'D', text: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies. Platform API gateways (such as Envoy Gateway implementing Kubernetes Gateway API) serve as the front door for platform services. They authenticate caller identity via OIDC/JWT tokens, terminate TLS, enforce rate limits, and route requests securely to platform backends.",
    referenceUrl: "https://gateway.envoyproxy.io/",
    tags: ["Platform Gateway", "Platform Gateway", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-292",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform API Gateway and OIDC Authentication: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Platform Gateway to secure internal platform REST and gRPC endpoints against unauthorized access and denial-of-service traffic spikes.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Enforcing OIDC token validation, mutual TLS, and rate limiting via Envoy Gateway at the platform boundary is under consideration.",
    options: [
      { id: 'A', text: "Disable network firewalls and rate limiters to optimize throughput." },
      { id: 'B', text: "Expose raw backend platform databases and microservices directly to the public internet without authentication." },
      { id: 'C', text: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies." },
      { id: 'D', text: "Hardcode static administrative passwords in client frontend source code." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies. Platform API gateways (such as Envoy Gateway implementing Kubernetes Gateway API) serve as the front door for platform services. They authenticate caller identity via OIDC/JWT tokens, terminate TLS, enforce rate limits, and route requests securely to platform backends.",
    referenceUrl: "https://gateway.envoyproxy.io/",
    tags: ["Platform Gateway", "Platform Gateway", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-293",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform API Gateway and OIDC Authentication: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Platform Gateway to secure internal platform REST and gRPC endpoints against unauthorized access and denial-of-service traffic spikes.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Enforcing OIDC token validation, mutual TLS, and rate limiting via Envoy Gateway at the platform boundary is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static administrative passwords in client frontend source code." },
      { id: 'B', text: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies." },
      { id: 'C', text: "Expose raw backend platform databases and microservices directly to the public internet without authentication." },
      { id: 'D', text: "Disable network firewalls and rate limiters to optimize throughput." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies. Platform API gateways (such as Envoy Gateway implementing Kubernetes Gateway API) serve as the front door for platform services. They authenticate caller identity via OIDC/JWT tokens, terminate TLS, enforce rate limits, and route requests securely to platform backends.",
    referenceUrl: "https://gateway.envoyproxy.io/",
    tags: ["Platform Gateway", "Platform Gateway", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-294",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform API Gateway and OIDC Authentication: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Platform Gateway to secure internal platform REST and gRPC endpoints against unauthorized access and denial-of-service traffic spikes.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Enforcing OIDC token validation, mutual TLS, and rate limiting via Envoy Gateway at the platform boundary is under consideration.",
    options: [
      { id: 'A', text: "Disable network firewalls and rate limiters to optimize throughput." },
      { id: 'B', text: "Hardcode static administrative passwords in client frontend source code." },
      { id: 'C', text: "Expose raw backend platform databases and microservices directly to the public internet without authentication." },
      { id: 'D', text: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies. Platform API gateways (such as Envoy Gateway implementing Kubernetes Gateway API) serve as the front door for platform services. They authenticate caller identity via OIDC/JWT tokens, terminate TLS, enforce rate limits, and route requests securely to platform backends.",
    referenceUrl: "https://gateway.envoyproxy.io/",
    tags: ["Platform Gateway", "Platform Gateway", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-295",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Platform API Gateway and OIDC Authentication: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Platform Gateway to secure internal platform REST and gRPC endpoints against unauthorized access and denial-of-service traffic spikes.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Enforcing OIDC token validation, mutual TLS, and rate limiting via Envoy Gateway at the platform boundary is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static administrative passwords in client frontend source code." },
      { id: 'B', text: "Expose raw backend platform databases and microservices directly to the public internet without authentication." },
      { id: 'C', text: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies." },
      { id: 'D', text: "Disable network firewalls and rate limiters to optimize throughput." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Deploy an Envoy-based API Gateway enforcing OIDC JWT token validation, mTLS upstream connections, and rate limiting policies. Platform API gateways (such as Envoy Gateway implementing Kubernetes Gateway API) serve as the front door for platform services. They authenticate caller identity via OIDC/JWT tokens, terminate TLS, enforce rate limits, and route requests securely to platform backends.",
    referenceUrl: "https://gateway.envoyproxy.io/",
    tags: ["Platform Gateway", "Platform Gateway", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-296",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Dynamic Webhook Interception and Failure Policies: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Admission Webhooks to ensure custom platform admission webhooks do not cause catastrophic cluster-wide outages if webhook pods temporarily fail.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Configuring validating and mutating webhooks with proper failurePolicy and timeout thresholds is under consideration.",
    options: [
      { id: 'A', text: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace." },
      { id: 'B', text: "Allow admission webhooks to intercept their own deployment pods, creating recursive deadlock loops." },
      { id: 'C', text: "Set `failurePolicy: Fail` on all cluster resources including kube-system with a 30-second timeout, freezing the entire cluster if the pod crashes." },
      { id: 'D', text: "Disable admission webhooks completely and permit unvetted deployments." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace. Improperly configured admission webhooks can incapacitate clusters. Platform engineers mitigate risk by scoping rules with `namespaceSelector` (excluding `kube-system`), setting short timeouts (e.g., 2s), and carefully choosing `failurePolicy: Ignore` vs `Fail` to avoid control plane deadlocks.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks", "Admission Webhooks", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-297",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Dynamic Webhook Interception and Failure Policies: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Admission Webhooks to ensure custom platform admission webhooks do not cause catastrophic cluster-wide outages if webhook pods temporarily fail.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Configuring validating and mutating webhooks with proper failurePolicy and timeout thresholds is under consideration.",
    options: [
      { id: 'A', text: "Set `failurePolicy: Fail` on all cluster resources including kube-system with a 30-second timeout, freezing the entire cluster if the pod crashes." },
      { id: 'B', text: "Disable admission webhooks completely and permit unvetted deployments." },
      { id: 'C', text: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace." },
      { id: 'D', text: "Allow admission webhooks to intercept their own deployment pods, creating recursive deadlock loops." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace. Improperly configured admission webhooks can incapacitate clusters. Platform engineers mitigate risk by scoping rules with `namespaceSelector` (excluding `kube-system`), setting short timeouts (e.g., 2s), and carefully choosing `failurePolicy: Ignore` vs `Fail` to avoid control plane deadlocks.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks", "Admission Webhooks", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-298",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Dynamic Webhook Interception and Failure Policies: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Admission Webhooks to ensure custom platform admission webhooks do not cause catastrophic cluster-wide outages if webhook pods temporarily fail.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Configuring validating and mutating webhooks with proper failurePolicy and timeout thresholds is under consideration.",
    options: [
      { id: 'A', text: "Set `failurePolicy: Fail` on all cluster resources including kube-system with a 30-second timeout, freezing the entire cluster if the pod crashes." },
      { id: 'B', text: "Disable admission webhooks completely and permit unvetted deployments." },
      { id: 'C', text: "Allow admission webhooks to intercept their own deployment pods, creating recursive deadlock loops." },
      { id: 'D', text: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace. Improperly configured admission webhooks can incapacitate clusters. Platform engineers mitigate risk by scoping rules with `namespaceSelector` (excluding `kube-system`), setting short timeouts (e.g., 2s), and carefully choosing `failurePolicy: Ignore` vs `Fail` to avoid control plane deadlocks.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks", "Admission Webhooks", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-299",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Dynamic Webhook Interception and Failure Policies: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Admission Webhooks to ensure custom platform admission webhooks do not cause catastrophic cluster-wide outages if webhook pods temporarily fail.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Configuring validating and mutating webhooks with proper failurePolicy and timeout thresholds is under consideration.",
    options: [
      { id: 'A', text: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace." },
      { id: 'B', text: "Disable admission webhooks completely and permit unvetted deployments." },
      { id: 'C', text: "Allow admission webhooks to intercept their own deployment pods, creating recursive deadlock loops." },
      { id: 'D', text: "Set `failurePolicy: Fail` on all cluster resources including kube-system with a 30-second timeout, freezing the entire cluster if the pod crashes." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace. Improperly configured admission webhooks can incapacitate clusters. Platform engineers mitigate risk by scoping rules with `namespaceSelector` (excluding `kube-system`), setting short timeouts (e.g., 2s), and carefully choosing `failurePolicy: Ignore` vs `Fail` to avoid control plane deadlocks.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks", "Admission Webhooks", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-300",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Dynamic Webhook Interception and Failure Policies: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Admission Webhooks to ensure custom platform admission webhooks do not cause catastrophic cluster-wide outages if webhook pods temporarily fail.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Configuring validating and mutating webhooks with proper failurePolicy and timeout thresholds is under consideration.",
    options: [
      { id: 'A', text: "Allow admission webhooks to intercept their own deployment pods, creating recursive deadlock loops." },
      { id: 'B', text: "Disable admission webhooks completely and permit unvetted deployments." },
      { id: 'C', text: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace." },
      { id: 'D', text: "Set `failurePolicy: Fail` on all cluster resources including kube-system with a 30-second timeout, freezing the entire cluster if the pod crashes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `failurePolicy: Ignore` for non-critical webhooks, configure strict `timeoutSeconds: 2`, and exclude the `kube-system` namespace. Improperly configured admission webhooks can incapacitate clusters. Platform engineers mitigate risk by scoping rules with `namespaceSelector` (excluding `kube-system`), setting short timeouts (e.g., 2s), and carefully choosing `failurePolicy: Ignore` vs `Fail` to avoid control plane deadlocks.",
    referenceUrl: "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#failure-policy",
    tags: ["Admission Webhooks", "Admission Webhooks", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_12;
