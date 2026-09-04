export const CNCF_CNPE_QUESTIONS_15 = [
  {
    id: "cncf-cnpe-351",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Message Broker Operators: Strimzi Apache Kafka: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Kafka Operator to enable application teams to self-provision Kafka topics and user access controls declaratively through GitOps manifests.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Managing distributed Kafka clusters, topics, and user ACLs declaratively using Strimzi is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation." },
      { id: 'B', text: "Require developers to SSH into Kafka broker nodes and execute raw Java zookeeper CLI scripts." },
      { id: 'C', text: "Run an unauthenticated single-node Kafka container in production with no persistence." },
      { id: 'D', text: "Prohibit the use of event streaming architectures across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation. The Strimzi operator manages Apache Kafka clusters on Kubernetes natively. By treating topics (`KafkaTopic`) and credentials (`KafkaUser`) as first-class Kubernetes Custom Resources, platform teams enable developers to manage event streaming infrastructure via GitOps.",
    referenceUrl: "https://strimzi.io/",
    tags: ["Kafka Operator", "Kafka Operator", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-352",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Message Broker Operators: Strimzi Apache Kafka: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Kafka Operator to enable application teams to self-provision Kafka topics and user access controls declaratively through GitOps manifests.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Managing distributed Kafka clusters, topics, and user ACLs declaratively using Strimzi is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation." },
      { id: 'B', text: "Require developers to SSH into Kafka broker nodes and execute raw Java zookeeper CLI scripts." },
      { id: 'C', text: "Run an unauthenticated single-node Kafka container in production with no persistence." },
      { id: 'D', text: "Prohibit the use of event streaming architectures across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation. The Strimzi operator manages Apache Kafka clusters on Kubernetes natively. By treating topics (`KafkaTopic`) and credentials (`KafkaUser`) as first-class Kubernetes Custom Resources, platform teams enable developers to manage event streaming infrastructure via GitOps.",
    referenceUrl: "https://strimzi.io/",
    tags: ["Kafka Operator", "Kafka Operator", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-353",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Message Broker Operators: Strimzi Apache Kafka: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Kafka Operator to enable application teams to self-provision Kafka topics and user access controls declaratively through GitOps manifests.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Managing distributed Kafka clusters, topics, and user ACLs declaratively using Strimzi is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation." },
      { id: 'B', text: "Require developers to SSH into Kafka broker nodes and execute raw Java zookeeper CLI scripts." },
      { id: 'C', text: "Run an unauthenticated single-node Kafka container in production with no persistence." },
      { id: 'D', text: "Prohibit the use of event streaming architectures across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation. The Strimzi operator manages Apache Kafka clusters on Kubernetes natively. By treating topics (`KafkaTopic`) and credentials (`KafkaUser`) as first-class Kubernetes Custom Resources, platform teams enable developers to manage event streaming infrastructure via GitOps.",
    referenceUrl: "https://strimzi.io/",
    tags: ["Kafka Operator", "Kafka Operator", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-354",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Message Broker Operators: Strimzi Apache Kafka: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Kafka Operator to enable application teams to self-provision Kafka topics and user access controls declaratively through GitOps manifests.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Managing distributed Kafka clusters, topics, and user ACLs declaratively using Strimzi is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation." },
      { id: 'B', text: "Require developers to SSH into Kafka broker nodes and execute raw Java zookeeper CLI scripts." },
      { id: 'C', text: "Run an unauthenticated single-node Kafka container in production with no persistence." },
      { id: 'D', text: "Prohibit the use of event streaming architectures across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation. The Strimzi operator manages Apache Kafka clusters on Kubernetes natively. By treating topics (`KafkaTopic`) and credentials (`KafkaUser`) as first-class Kubernetes Custom Resources, platform teams enable developers to manage event streaming infrastructure via GitOps.",
    referenceUrl: "https://strimzi.io/",
    tags: ["Kafka Operator", "Kafka Operator", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-355",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Message Broker Operators: Strimzi Apache Kafka: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Kafka Operator to enable application teams to self-provision Kafka topics and user access controls declaratively through GitOps manifests.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Managing distributed Kafka clusters, topics, and user ACLs declaratively using Strimzi is under consideration.",
    options: [
      { id: 'A', text: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation." },
      { id: 'B', text: "Require developers to SSH into Kafka broker nodes and execute raw Java zookeeper CLI scripts." },
      { id: 'C', text: "Run an unauthenticated single-node Kafka container in production with no persistence." },
      { id: 'D', text: "Prohibit the use of event streaming architectures across the enterprise." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Deploy the Strimzi Kafka Operator and expose `KafkaTopic` and `KafkaUser` custom resources for self-service topic creation. The Strimzi operator manages Apache Kafka clusters on Kubernetes natively. By treating topics (`KafkaTopic`) and credentials (`KafkaUser`) as first-class Kubernetes Custom Resources, platform teams enable developers to manage event streaming infrastructure via GitOps.",
    referenceUrl: "https://strimzi.io/",
    tags: ["Kafka Operator", "Kafka Operator", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-356",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Resource Reclamation and Namespace Reaping: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Resource Reclamation to prevent orphaned preview environments, forgotten test databases, and zombie namespaces from inflating enterprise cloud bills.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Enforcing Time-to-Live (TTL) controllers and automated janitor services to reclaim idle cloud resources is under consideration.",
    options: [
      { id: 'A', text: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline." },
      { id: 'B', text: "Rely on developers to remember to delete test clusters manually months after projects finish." },
      { id: 'C', text: "Permit idle test infrastructure to run indefinitely at maximum capacity." },
      { id: 'D', text: "Turn off all production servers every night to save money." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline. Resource reclamation automation is critical for cost governance in self-service platforms. Janitor controllers inspect metadata annotations (e.g., `ttl: 24h`) and automatically delete idle preview namespaces, associated cloud databases, and load balancers once deadlines pass.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/ttlafterfinished/",
    tags: ["Resource Reclamation", "Resource Reclamation", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-357",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Resource Reclamation and Namespace Reaping: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Resource Reclamation to prevent orphaned preview environments, forgotten test databases, and zombie namespaces from inflating enterprise cloud bills.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Enforcing Time-to-Live (TTL) controllers and automated janitor services to reclaim idle cloud resources is under consideration.",
    options: [
      { id: 'A', text: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline." },
      { id: 'B', text: "Rely on developers to remember to delete test clusters manually months after projects finish." },
      { id: 'C', text: "Permit idle test infrastructure to run indefinitely at maximum capacity." },
      { id: 'D', text: "Turn off all production servers every night to save money." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline. Resource reclamation automation is critical for cost governance in self-service platforms. Janitor controllers inspect metadata annotations (e.g., `ttl: 24h`) and automatically delete idle preview namespaces, associated cloud databases, and load balancers once deadlines pass.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/ttlafterfinished/",
    tags: ["Resource Reclamation", "Resource Reclamation", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-358",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Resource Reclamation and Namespace Reaping: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Resource Reclamation to prevent orphaned preview environments, forgotten test databases, and zombie namespaces from inflating enterprise cloud bills.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Enforcing Time-to-Live (TTL) controllers and automated janitor services to reclaim idle cloud resources is under consideration.",
    options: [
      { id: 'A', text: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline." },
      { id: 'B', text: "Rely on developers to remember to delete test clusters manually months after projects finish." },
      { id: 'C', text: "Permit idle test infrastructure to run indefinitely at maximum capacity." },
      { id: 'D', text: "Turn off all production servers every night to save money." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline. Resource reclamation automation is critical for cost governance in self-service platforms. Janitor controllers inspect metadata annotations (e.g., `ttl: 24h`) and automatically delete idle preview namespaces, associated cloud databases, and load balancers once deadlines pass.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/ttlafterfinished/",
    tags: ["Resource Reclamation", "Resource Reclamation", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-359",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Resource Reclamation and Namespace Reaping: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Resource Reclamation to prevent orphaned preview environments, forgotten test databases, and zombie namespaces from inflating enterprise cloud bills.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Enforcing Time-to-Live (TTL) controllers and automated janitor services to reclaim idle cloud resources is under consideration.",
    options: [
      { id: 'A', text: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline." },
      { id: 'B', text: "Rely on developers to remember to delete test clusters manually months after projects finish." },
      { id: 'C', text: "Permit idle test infrastructure to run indefinitely at maximum capacity." },
      { id: 'D', text: "Turn off all production servers every night to save money." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline. Resource reclamation automation is critical for cost governance in self-service platforms. Janitor controllers inspect metadata annotations (e.g., `ttl: 24h`) and automatically delete idle preview namespaces, associated cloud databases, and load balancers once deadlines pass.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/ttlafterfinished/",
    tags: ["Resource Reclamation", "Resource Reclamation", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-360",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Resource Reclamation and Namespace Reaping: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Resource Reclamation to prevent orphaned preview environments, forgotten test databases, and zombie namespaces from inflating enterprise cloud bills.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Enforcing Time-to-Live (TTL) controllers and automated janitor services to reclaim idle cloud resources is under consideration.",
    options: [
      { id: 'A', text: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline." },
      { id: 'B', text: "Rely on developers to remember to delete test clusters manually months after projects finish." },
      { id: 'C', text: "Permit idle test infrastructure to run indefinitely at maximum capacity." },
      { id: 'D', text: "Turn off all production servers every night to save money." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement automated TTL controllers or janitor operators that automatically delete namespaces and cloud resources after an expiration deadline. Resource reclamation automation is critical for cost governance in self-service platforms. Janitor controllers inspect metadata annotations (e.g., `ttl: 24h`) and automatically delete idle preview namespaces, associated cloud databases, and load balancers once deadlines pass.",
    referenceUrl: "https://kubernetes.io/docs/concepts/workloads/controllers/ttlafterfinished/",
    tags: ["Resource Reclamation", "Resource Reclamation", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-361",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Just-in-Time Access Management: Teleport and Boundary: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates JIT Access to grant an on-call engineer temporary 30-minute elevated access to troubleshoot a production database during an incident safely.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Short-lived, audited cryptographic access to production infrastructure via access requests is under consideration.",
    options: [
      { id: 'A', text: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording." },
      { id: 'B', text: "Distribute permanent root SSH keys and cluster-admin kubeconfig files to all engineers permanently." },
      { id: 'C', text: "Allow unauthenticated anonymous access to production Kubernetes worker nodes." },
      { id: 'D', text: "Refuse to grant any access to on-call engineers, preventing incident mitigation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording. Zero-trust platform engineering eliminates standing privileges. Tools like Teleport provide Just-in-Time (JIT) access workflows: engineers request temporary, short-lived certificates approved via Slack/PagerDuty, with full terminal session recording for compliance auditing.",
    referenceUrl: "https://goteleport.com/docs/access-controls/access-requests/",
    tags: ["JIT Access", "JIT Access", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-362",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Just-in-Time Access Management: Teleport and Boundary: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates JIT Access to grant an on-call engineer temporary 30-minute elevated access to troubleshoot a production database during an incident safely.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Short-lived, audited cryptographic access to production infrastructure via access requests is under consideration.",
    options: [
      { id: 'A', text: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording." },
      { id: 'B', text: "Distribute permanent root SSH keys and cluster-admin kubeconfig files to all engineers permanently." },
      { id: 'C', text: "Allow unauthenticated anonymous access to production Kubernetes worker nodes." },
      { id: 'D', text: "Refuse to grant any access to on-call engineers, preventing incident mitigation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording. Zero-trust platform engineering eliminates standing privileges. Tools like Teleport provide Just-in-Time (JIT) access workflows: engineers request temporary, short-lived certificates approved via Slack/PagerDuty, with full terminal session recording for compliance auditing.",
    referenceUrl: "https://goteleport.com/docs/access-controls/access-requests/",
    tags: ["JIT Access", "JIT Access", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-363",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Just-in-Time Access Management: Teleport and Boundary: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates JIT Access to grant an on-call engineer temporary 30-minute elevated access to troubleshoot a production database during an incident safely.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Short-lived, audited cryptographic access to production infrastructure via access requests is under consideration.",
    options: [
      { id: 'A', text: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording." },
      { id: 'B', text: "Distribute permanent root SSH keys and cluster-admin kubeconfig files to all engineers permanently." },
      { id: 'C', text: "Allow unauthenticated anonymous access to production Kubernetes worker nodes." },
      { id: 'D', text: "Refuse to grant any access to on-call engineers, preventing incident mitigation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording. Zero-trust platform engineering eliminates standing privileges. Tools like Teleport provide Just-in-Time (JIT) access workflows: engineers request temporary, short-lived certificates approved via Slack/PagerDuty, with full terminal session recording for compliance auditing.",
    referenceUrl: "https://goteleport.com/docs/access-controls/access-requests/",
    tags: ["JIT Access", "JIT Access", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-364",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Just-in-Time Access Management: Teleport and Boundary: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates JIT Access to grant an on-call engineer temporary 30-minute elevated access to troubleshoot a production database during an incident safely.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Short-lived, audited cryptographic access to production infrastructure via access requests is under consideration.",
    options: [
      { id: 'A', text: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording." },
      { id: 'B', text: "Distribute permanent root SSH keys and cluster-admin kubeconfig files to all engineers permanently." },
      { id: 'C', text: "Allow unauthenticated anonymous access to production Kubernetes worker nodes." },
      { id: 'D', text: "Refuse to grant any access to on-call engineers, preventing incident mitigation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording. Zero-trust platform engineering eliminates standing privileges. Tools like Teleport provide Just-in-Time (JIT) access workflows: engineers request temporary, short-lived certificates approved via Slack/PagerDuty, with full terminal session recording for compliance auditing.",
    referenceUrl: "https://goteleport.com/docs/access-controls/access-requests/",
    tags: ["JIT Access", "JIT Access", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-365",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Just-in-Time Access Management: Teleport and Boundary: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates JIT Access to grant an on-call engineer temporary 30-minute elevated access to troubleshoot a production database during an incident safely.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Short-lived, audited cryptographic access to production infrastructure via access requests is under consideration.",
    options: [
      { id: 'A', text: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording." },
      { id: 'B', text: "Distribute permanent root SSH keys and cluster-admin kubeconfig files to all engineers permanently." },
      { id: 'C', text: "Allow unauthenticated anonymous access to production Kubernetes worker nodes." },
      { id: 'D', text: "Refuse to grant any access to on-call engineers, preventing incident mitigation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement Just-in-Time (JIT) access requests using tools like Teleport or HashiCorp Boundary with dual authorization and session recording. Zero-trust platform engineering eliminates standing privileges. Tools like Teleport provide Just-in-Time (JIT) access workflows: engineers request temporary, short-lived certificates approved via Slack/PagerDuty, with full terminal session recording for compliance auditing.",
    referenceUrl: "https://goteleport.com/docs/access-controls/access-requests/",
    tags: ["JIT Access", "JIT Access", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-366",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Platform Adoption Analytics and Developer Drop-Off Tracking: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Platform Analytics to determine why newly hired developers are abandoning the Golden Path template for Go microservices at step 3 of the wizard.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Instrumenting developer portal telemetry to identify onboarding friction and template abandonment is under consideration.",
    options: [
      { id: 'A', text: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates." },
      { id: 'B', text: "Assume developer portals have zero usability flaws and blame developers for lack of platform adoption." },
      { id: 'C', text: "Prohibit collecting any telemetry on platform tool usage." },
      { id: 'D', text: "Force developers to sign disciplinary agreements if they fail to complete templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates. Applying product management rigor to internal platforms requires usage analytics. Instrumenting portal forms with analytics identifies high-friction wizard steps, common validation errors, and template abandonment, informing user-centric improvements to the developer experience.",
    referenceUrl: "https://posthog.com/",
    tags: ["Platform Analytics", "Platform Analytics", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-367",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Platform Adoption Analytics and Developer Drop-Off Tracking: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Platform Analytics to determine why newly hired developers are abandoning the Golden Path template for Go microservices at step 3 of the wizard.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Instrumenting developer portal telemetry to identify onboarding friction and template abandonment is under consideration.",
    options: [
      { id: 'A', text: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates." },
      { id: 'B', text: "Assume developer portals have zero usability flaws and blame developers for lack of platform adoption." },
      { id: 'C', text: "Prohibit collecting any telemetry on platform tool usage." },
      { id: 'D', text: "Force developers to sign disciplinary agreements if they fail to complete templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates. Applying product management rigor to internal platforms requires usage analytics. Instrumenting portal forms with analytics identifies high-friction wizard steps, common validation errors, and template abandonment, informing user-centric improvements to the developer experience.",
    referenceUrl: "https://posthog.com/",
    tags: ["Platform Analytics", "Platform Analytics", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-368",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Platform Adoption Analytics and Developer Drop-Off Tracking: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Platform Analytics to determine why newly hired developers are abandoning the Golden Path template for Go microservices at step 3 of the wizard.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Instrumenting developer portal telemetry to identify onboarding friction and template abandonment is under consideration.",
    options: [
      { id: 'A', text: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates." },
      { id: 'B', text: "Assume developer portals have zero usability flaws and blame developers for lack of platform adoption." },
      { id: 'C', text: "Prohibit collecting any telemetry on platform tool usage." },
      { id: 'D', text: "Force developers to sign disciplinary agreements if they fail to complete templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates. Applying product management rigor to internal platforms requires usage analytics. Instrumenting portal forms with analytics identifies high-friction wizard steps, common validation errors, and template abandonment, informing user-centric improvements to the developer experience.",
    referenceUrl: "https://posthog.com/",
    tags: ["Platform Analytics", "Platform Analytics", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-369",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Platform Adoption Analytics and Developer Drop-Off Tracking: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Platform Analytics to determine why newly hired developers are abandoning the Golden Path template for Go microservices at step 3 of the wizard.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Instrumenting developer portal telemetry to identify onboarding friction and template abandonment is under consideration.",
    options: [
      { id: 'A', text: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates." },
      { id: 'B', text: "Assume developer portals have zero usability flaws and blame developers for lack of platform adoption." },
      { id: 'C', text: "Prohibit collecting any telemetry on platform tool usage." },
      { id: 'D', text: "Force developers to sign disciplinary agreements if they fail to complete templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates. Applying product management rigor to internal platforms requires usage analytics. Instrumenting portal forms with analytics identifies high-friction wizard steps, common validation errors, and template abandonment, informing user-centric improvements to the developer experience.",
    referenceUrl: "https://posthog.com/",
    tags: ["Platform Analytics", "Platform Analytics", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-370",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Platform Adoption Analytics and Developer Drop-Off Tracking: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Platform Analytics to determine why newly hired developers are abandoning the Golden Path template for Go microservices at step 3 of the wizard.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Instrumenting developer portal telemetry to identify onboarding friction and template abandonment is under consideration.",
    options: [
      { id: 'A', text: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates." },
      { id: 'B', text: "Assume developer portals have zero usability flaws and blame developers for lack of platform adoption." },
      { id: 'C', text: "Prohibit collecting any telemetry on platform tool usage." },
      { id: 'D', text: "Force developers to sign disciplinary agreements if they fail to complete templates." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Instrument developer portal workflows with product analytics (e.g., PostHog) to track funnel conversion and step drop-off rates. Applying product management rigor to internal platforms requires usage analytics. Instrumenting portal forms with analytics identifies high-friction wizard steps, common validation errors, and template abandonment, informing user-centric improvements to the developer experience.",
    referenceUrl: "https://posthog.com/",
    tags: ["Platform Analytics", "Platform Analytics", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-371",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Quality Gates: SonarQube and OpenSSF Scorecard: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Quality Gates to block pull requests that introduce severe technical debt, critical code smells, or unmaintained third-party dependencies.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Enforcing code coverage, security debt, and supply chain security thresholds before deployment is under consideration.",
    options: [
      { id: 'A', text: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines." },
      { id: 'B', text: "Allow developers to bypass all code quality checks and merge untested code directly into production branches." },
      { id: 'C', text: "Rely exclusively on subjective manual code review comments with no automated tooling." },
      { id: 'D', text: "Disable unit testing and linting to increase pull request throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines. Automated quality gates codify engineering standards. Integrating tools like SonarQube (static analysis, coverage) and OpenSSF Scorecard (supply chain health) into CI pipelines enforces objective quality thresholds before changes can merge or deploy.",
    referenceUrl: "https://scorecard.dev/",
    tags: ["Quality Gates", "Quality Gates", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-372",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Quality Gates: SonarQube and OpenSSF Scorecard: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Quality Gates to block pull requests that introduce severe technical debt, critical code smells, or unmaintained third-party dependencies.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Enforcing code coverage, security debt, and supply chain security thresholds before deployment is under consideration.",
    options: [
      { id: 'A', text: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines." },
      { id: 'B', text: "Allow developers to bypass all code quality checks and merge untested code directly into production branches." },
      { id: 'C', text: "Rely exclusively on subjective manual code review comments with no automated tooling." },
      { id: 'D', text: "Disable unit testing and linting to increase pull request throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines. Automated quality gates codify engineering standards. Integrating tools like SonarQube (static analysis, coverage) and OpenSSF Scorecard (supply chain health) into CI pipelines enforces objective quality thresholds before changes can merge or deploy.",
    referenceUrl: "https://scorecard.dev/",
    tags: ["Quality Gates", "Quality Gates", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-373",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Quality Gates: SonarQube and OpenSSF Scorecard: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Quality Gates to block pull requests that introduce severe technical debt, critical code smells, or unmaintained third-party dependencies.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Enforcing code coverage, security debt, and supply chain security thresholds before deployment is under consideration.",
    options: [
      { id: 'A', text: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines." },
      { id: 'B', text: "Allow developers to bypass all code quality checks and merge untested code directly into production branches." },
      { id: 'C', text: "Rely exclusively on subjective manual code review comments with no automated tooling." },
      { id: 'D', text: "Disable unit testing and linting to increase pull request throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines. Automated quality gates codify engineering standards. Integrating tools like SonarQube (static analysis, coverage) and OpenSSF Scorecard (supply chain health) into CI pipelines enforces objective quality thresholds before changes can merge or deploy.",
    referenceUrl: "https://scorecard.dev/",
    tags: ["Quality Gates", "Quality Gates", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-374",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Quality Gates: SonarQube and OpenSSF Scorecard: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Quality Gates to block pull requests that introduce severe technical debt, critical code smells, or unmaintained third-party dependencies.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Enforcing code coverage, security debt, and supply chain security thresholds before deployment is under consideration.",
    options: [
      { id: 'A', text: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines." },
      { id: 'B', text: "Allow developers to bypass all code quality checks and merge untested code directly into production branches." },
      { id: 'C', text: "Rely exclusively on subjective manual code review comments with no automated tooling." },
      { id: 'D', text: "Disable unit testing and linting to increase pull request throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines. Automated quality gates codify engineering standards. Integrating tools like SonarQube (static analysis, coverage) and OpenSSF Scorecard (supply chain health) into CI pipelines enforces objective quality thresholds before changes can merge or deploy.",
    referenceUrl: "https://scorecard.dev/",
    tags: ["Quality Gates", "Quality Gates", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-375",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d2",
    domainName: "Self-Service Portals and Workload Automation",
    title: "Automated Quality Gates: SonarQube and OpenSSF Scorecard: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Quality Gates to block pull requests that introduce severe technical debt, critical code smells, or unmaintained third-party dependencies.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Enforcing code coverage, security debt, and supply chain security thresholds before deployment is under consideration.",
    options: [
      { id: 'A', text: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines." },
      { id: 'B', text: "Allow developers to bypass all code quality checks and merge untested code directly into production branches." },
      { id: 'C', text: "Rely exclusively on subjective manual code review comments with no automated tooling." },
      { id: 'D', text: "Disable unit testing and linting to increase pull request throughput." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Integrate automated quality gates using SonarQube and OpenSSF Scorecards to block merging code that violates maintainability baselines. Automated quality gates codify engineering standards. Integrating tools like SonarQube (static analysis, coverage) and OpenSSF Scorecard (supply chain health) into CI pipelines enforces objective quality thresholds before changes can merge or deploy.",
    referenceUrl: "https://scorecard.dev/",
    tags: ["Quality Gates", "Quality Gates", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_15;
