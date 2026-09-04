export const CNCF_CNPE_QUESTIONS_11 = [
  {
    id: "cncf-cnpe-251",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Declarative Platform API Schemas and CEL Validation: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Platform APIs to enforce complex business validation rules on custom platform resources directly in the Kubernetes API server without admission webhooks.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Authoring CRDs with OpenAPI v3 schemas and Common Expression Language (CEL) validation rules is under consideration.",
    options: [
      { id: 'A', text: "Deploy fragile external webhook containers that introduce network latency and single points of failure for basic schema checks." },
      { id: 'B', text: "Disable API validation to maximize manifest ingestion speed." },
      { id: 'C', text: "Allow unvalidated JSON payloads into etcd and hope downstream controllers handle parse errors." },
      { id: 'D', text: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema. Kubernetes CRDs support declarative schema validation using the Common Expression Language (CEL) via `x-kubernetes-validations`. Platform engineers define in-process validation rules (e.g., comparing field values, regex checks) directly within the CRD, avoiding webhook overhead.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation-rules",
    tags: ["Platform APIs", "Platform APIs", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-252",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Declarative Platform API Schemas and CEL Validation: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Platform APIs to enforce complex business validation rules on custom platform resources directly in the Kubernetes API server without admission webhooks.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Authoring CRDs with OpenAPI v3 schemas and Common Expression Language (CEL) validation rules is under consideration.",
    options: [
      { id: 'A', text: "Disable API validation to maximize manifest ingestion speed." },
      { id: 'B', text: "Deploy fragile external webhook containers that introduce network latency and single points of failure for basic schema checks." },
      { id: 'C', text: "Allow unvalidated JSON payloads into etcd and hope downstream controllers handle parse errors." },
      { id: 'D', text: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema. Kubernetes CRDs support declarative schema validation using the Common Expression Language (CEL) via `x-kubernetes-validations`. Platform engineers define in-process validation rules (e.g., comparing field values, regex checks) directly within the CRD, avoiding webhook overhead.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation-rules",
    tags: ["Platform APIs", "Platform APIs", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-253",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Declarative Platform API Schemas and CEL Validation: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Platform APIs to enforce complex business validation rules on custom platform resources directly in the Kubernetes API server without admission webhooks.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Authoring CRDs with OpenAPI v3 schemas and Common Expression Language (CEL) validation rules is under consideration.",
    options: [
      { id: 'A', text: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema." },
      { id: 'B', text: "Allow unvalidated JSON payloads into etcd and hope downstream controllers handle parse errors." },
      { id: 'C', text: "Deploy fragile external webhook containers that introduce network latency and single points of failure for basic schema checks." },
      { id: 'D', text: "Disable API validation to maximize manifest ingestion speed." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema. Kubernetes CRDs support declarative schema validation using the Common Expression Language (CEL) via `x-kubernetes-validations`. Platform engineers define in-process validation rules (e.g., comparing field values, regex checks) directly within the CRD, avoiding webhook overhead.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation-rules",
    tags: ["Platform APIs", "Platform APIs", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-254",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Declarative Platform API Schemas and CEL Validation: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Platform APIs to enforce complex business validation rules on custom platform resources directly in the Kubernetes API server without admission webhooks.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Authoring CRDs with OpenAPI v3 schemas and Common Expression Language (CEL) validation rules is under consideration.",
    options: [
      { id: 'A', text: "Allow unvalidated JSON payloads into etcd and hope downstream controllers handle parse errors." },
      { id: 'B', text: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema." },
      { id: 'C', text: "Deploy fragile external webhook containers that introduce network latency and single points of failure for basic schema checks." },
      { id: 'D', text: "Disable API validation to maximize manifest ingestion speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema. Kubernetes CRDs support declarative schema validation using the Common Expression Language (CEL) via `x-kubernetes-validations`. Platform engineers define in-process validation rules (e.g., comparing field values, regex checks) directly within the CRD, avoiding webhook overhead.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation-rules",
    tags: ["Platform APIs", "Platform APIs", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-255",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Declarative Platform API Schemas and CEL Validation: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Platform APIs to enforce complex business validation rules on custom platform resources directly in the Kubernetes API server without admission webhooks.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Authoring CRDs with OpenAPI v3 schemas and Common Expression Language (CEL) validation rules is under consideration.",
    options: [
      { id: 'A', text: "Deploy fragile external webhook containers that introduce network latency and single points of failure for basic schema checks." },
      { id: 'B', text: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema." },
      { id: 'C', text: "Allow unvalidated JSON payloads into etcd and hope downstream controllers handle parse errors." },
      { id: 'D', text: "Disable API validation to maximize manifest ingestion speed." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Incorporate Common Expression Language (CEL) validation rules (`x-kubernetes-validations`) directly within the CRD OpenAPI v3 schema. Kubernetes CRDs support declarative schema validation using the Common Expression Language (CEL) via `x-kubernetes-validations`. Platform engineers define in-process validation rules (e.g., comparing field values, regex checks) directly within the CRD, avoiding webhook overhead.",
    referenceUrl: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation-rules",
    tags: ["Platform APIs", "Platform APIs", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-256",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Crossplane Composite Resource Definitions (XRDs) Architecture: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Crossplane XRDs to publish a clean internal database API (`PostgreSQLInstance`) that abstracts underlying AWS RDS, Azure Flexible Server, or GCP Cloud SQL.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Defining custom infrastructure APIs with CompositeResourceDefinitions and connection secrets is under consideration.",
    options: [
      { id: 'A', text: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys." },
      { id: 'B', text: "Deploy raw virtual machines manually and configure database software over SSH." },
      { id: 'C', text: "Require developers to write raw cloud provider CloudFormation or ARM templates directly." },
      { id: 'D', text: "Grant developers direct administrative cloud console access with no API abstraction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys. Crossplane XRDs establish custom platform APIs. Platform engineers define the OpenAPI schema, connection secret keys (host, port, user, password), and resource scope (`Cluster` or `Namespaced`), creating a vendor-agnostic infrastructure interface for developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composite-resource-definitions/",
    tags: ["Crossplane XRDs", "Crossplane XRDs", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-257",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Crossplane Composite Resource Definitions (XRDs) Architecture: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Crossplane XRDs to publish a clean internal database API (`PostgreSQLInstance`) that abstracts underlying AWS RDS, Azure Flexible Server, or GCP Cloud SQL.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Defining custom infrastructure APIs with CompositeResourceDefinitions and connection secrets is under consideration.",
    options: [
      { id: 'A', text: "Require developers to write raw cloud provider CloudFormation or ARM templates directly." },
      { id: 'B', text: "Deploy raw virtual machines manually and configure database software over SSH." },
      { id: 'C', text: "Grant developers direct administrative cloud console access with no API abstraction." },
      { id: 'D', text: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys. Crossplane XRDs establish custom platform APIs. Platform engineers define the OpenAPI schema, connection secret keys (host, port, user, password), and resource scope (`Cluster` or `Namespaced`), creating a vendor-agnostic infrastructure interface for developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composite-resource-definitions/",
    tags: ["Crossplane XRDs", "Crossplane XRDs", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-258",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Crossplane Composite Resource Definitions (XRDs) Architecture: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Crossplane XRDs to publish a clean internal database API (`PostgreSQLInstance`) that abstracts underlying AWS RDS, Azure Flexible Server, or GCP Cloud SQL.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Defining custom infrastructure APIs with CompositeResourceDefinitions and connection secrets is under consideration.",
    options: [
      { id: 'A', text: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys." },
      { id: 'B', text: "Deploy raw virtual machines manually and configure database software over SSH." },
      { id: 'C', text: "Require developers to write raw cloud provider CloudFormation or ARM templates directly." },
      { id: 'D', text: "Grant developers direct administrative cloud console access with no API abstraction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys. Crossplane XRDs establish custom platform APIs. Platform engineers define the OpenAPI schema, connection secret keys (host, port, user, password), and resource scope (`Cluster` or `Namespaced`), creating a vendor-agnostic infrastructure interface for developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composite-resource-definitions/",
    tags: ["Crossplane XRDs", "Crossplane XRDs", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-259",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Crossplane Composite Resource Definitions (XRDs) Architecture: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Crossplane XRDs to publish a clean internal database API (`PostgreSQLInstance`) that abstracts underlying AWS RDS, Azure Flexible Server, or GCP Cloud SQL.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Defining custom infrastructure APIs with CompositeResourceDefinitions and connection secrets is under consideration.",
    options: [
      { id: 'A', text: "Require developers to write raw cloud provider CloudFormation or ARM templates directly." },
      { id: 'B', text: "Deploy raw virtual machines manually and configure database software over SSH." },
      { id: 'C', text: "Grant developers direct administrative cloud console access with no API abstraction." },
      { id: 'D', text: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys. Crossplane XRDs establish custom platform APIs. Platform engineers define the OpenAPI schema, connection secret keys (host, port, user, password), and resource scope (`Cluster` or `Namespaced`), creating a vendor-agnostic infrastructure interface for developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composite-resource-definitions/",
    tags: ["Crossplane XRDs", "Crossplane XRDs", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-260",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Crossplane Composite Resource Definitions (XRDs) Architecture: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Crossplane XRDs to publish a clean internal database API (`PostgreSQLInstance`) that abstracts underlying AWS RDS, Azure Flexible Server, or GCP Cloud SQL.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Defining custom infrastructure APIs with CompositeResourceDefinitions and connection secrets is under consideration.",
    options: [
      { id: 'A', text: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys." },
      { id: 'B', text: "Require developers to write raw cloud provider CloudFormation or ARM templates directly." },
      { id: 'C', text: "Deploy raw virtual machines manually and configure database software over SSH." },
      { id: 'D', text: "Grant developers direct administrative cloud console access with no API abstraction." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a Crossplane CompositeResourceDefinition (XRD) defining the schema, parameters, and published connection secret keys. Crossplane XRDs establish custom platform APIs. Platform engineers define the OpenAPI schema, connection secret keys (host, port, user, password), and resource scope (`Cluster` or `Namespaced`), creating a vendor-agnostic infrastructure interface for developers.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composite-resource-definitions/",
    tags: ["Crossplane XRDs", "Crossplane XRDs", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-261",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Composition Functions in Crossplane: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Composition Functions to implement conditional resource creation, loops, and complex logic inside Crossplane compositions cleanly and testably.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Pipeline-based composition logic using Python, Go, or KCL replacing legacy patch-and-transform is under consideration.",
    options: [
      { id: 'A', text: "Fork the Crossplane source code to add hardcoded business logic." },
      { id: 'B', text: "Execute shell scripts directly on the host Kubernetes nodes during reconciliation." },
      { id: 'C', text: "Write thousands of fragile, unmaintainable YAML patch-and-transform blocks that cannot express conditional logic." },
      { id: 'D', text: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL. Crossplane Composition Functions modernize composition authoring by replacing rigid patch-and-transform YAML with modular, testable code pipelines (Go, Python, KCL). Functions run as gRPC runners or containers, enabling loops, conditionals, and advanced templating.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition-functions/",
    tags: ["Composition Functions", "Composition Functions", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-262",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Composition Functions in Crossplane: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Composition Functions to implement conditional resource creation, loops, and complex logic inside Crossplane compositions cleanly and testably.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Pipeline-based composition logic using Python, Go, or KCL replacing legacy patch-and-transform is under consideration.",
    options: [
      { id: 'A', text: "Execute shell scripts directly on the host Kubernetes nodes during reconciliation." },
      { id: 'B', text: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL." },
      { id: 'C', text: "Fork the Crossplane source code to add hardcoded business logic." },
      { id: 'D', text: "Write thousands of fragile, unmaintainable YAML patch-and-transform blocks that cannot express conditional logic." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL. Crossplane Composition Functions modernize composition authoring by replacing rigid patch-and-transform YAML with modular, testable code pipelines (Go, Python, KCL). Functions run as gRPC runners or containers, enabling loops, conditionals, and advanced templating.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition-functions/",
    tags: ["Composition Functions", "Composition Functions", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-263",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Composition Functions in Crossplane: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Composition Functions to implement conditional resource creation, loops, and complex logic inside Crossplane compositions cleanly and testably.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Pipeline-based composition logic using Python, Go, or KCL replacing legacy patch-and-transform is under consideration.",
    options: [
      { id: 'A', text: "Execute shell scripts directly on the host Kubernetes nodes during reconciliation." },
      { id: 'B', text: "Write thousands of fragile, unmaintainable YAML patch-and-transform blocks that cannot express conditional logic." },
      { id: 'C', text: "Fork the Crossplane source code to add hardcoded business logic." },
      { id: 'D', text: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL. Crossplane Composition Functions modernize composition authoring by replacing rigid patch-and-transform YAML with modular, testable code pipelines (Go, Python, KCL). Functions run as gRPC runners or containers, enabling loops, conditionals, and advanced templating.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition-functions/",
    tags: ["Composition Functions", "Composition Functions", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-264",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Composition Functions in Crossplane: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Composition Functions to implement conditional resource creation, loops, and complex logic inside Crossplane compositions cleanly and testably.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Pipeline-based composition logic using Python, Go, or KCL replacing legacy patch-and-transform is under consideration.",
    options: [
      { id: 'A', text: "Write thousands of fragile, unmaintainable YAML patch-and-transform blocks that cannot express conditional logic." },
      { id: 'B', text: "Fork the Crossplane source code to add hardcoded business logic." },
      { id: 'C', text: "Execute shell scripts directly on the host Kubernetes nodes during reconciliation." },
      { id: 'D', text: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL. Crossplane Composition Functions modernize composition authoring by replacing rigid patch-and-transform YAML with modular, testable code pipelines (Go, Python, KCL). Functions run as gRPC runners or containers, enabling loops, conditionals, and advanced templating.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition-functions/",
    tags: ["Composition Functions", "Composition Functions", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-265",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Composition Functions in Crossplane: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Composition Functions to implement conditional resource creation, loops, and complex logic inside Crossplane compositions cleanly and testably.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Pipeline-based composition logic using Python, Go, or KCL replacing legacy patch-and-transform is under consideration.",
    options: [
      { id: 'A', text: "Execute shell scripts directly on the host Kubernetes nodes during reconciliation." },
      { id: 'B', text: "Write thousands of fragile, unmaintainable YAML patch-and-transform blocks that cannot express conditional logic." },
      { id: 'C', text: "Fork the Crossplane source code to add hardcoded business logic." },
      { id: 'D', text: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt Crossplane Composition Functions, executing composable logic pipelines authored in languages like Go, Python, or KCL. Crossplane Composition Functions modernize composition authoring by replacing rigid patch-and-transform YAML with modular, testable code pipelines (Go, Python, KCL). Functions run as gRPC runners or containers, enabling loops, conditionals, and advanced templating.",
    referenceUrl: "https://docs.crossplane.io/latest/concepts/composition-functions/",
    tags: ["Composition Functions", "Composition Functions", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-266",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Kubernetes Controller Architecture and Reconciliation Loops: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Controller Architecture to build an enterprise operator that provisions external SaaS accounts and cleans up remote resources reliably upon CR deletion.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Implementing custom controllers with Kubebuilder, reconcilers, watches, and finalizers is under consideration.",
    options: [
      { id: 'A', text: "Delete the Kubernetes object immediately without cleaning up external SaaS resources, leaving orphaned cloud spend." },
      { id: 'B', text: "Poll the Kubernetes API server in an infinite busy loop without using informers or event watches." },
      { id: 'C', text: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion." },
      { id: 'D', text: "Execute cron jobs every midnight that scrape Kubernetes manifests using regex." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion. Kubernetes controllers implement level-triggered reconciliation loops. When managing external dependencies, controllers register `finalizers` on custom resources. The finalizer blocks object garbage collection in etcd until external cleanup logic completes successfully.",
    referenceUrl: "https://book.kubebuilder.io/architecture/controllers.html",
    tags: ["Controller Architecture", "Controller Architecture", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-267",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Kubernetes Controller Architecture and Reconciliation Loops: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Controller Architecture to build an enterprise operator that provisions external SaaS accounts and cleans up remote resources reliably upon CR deletion.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Implementing custom controllers with Kubebuilder, reconcilers, watches, and finalizers is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion." },
      { id: 'B', text: "Execute cron jobs every midnight that scrape Kubernetes manifests using regex." },
      { id: 'C', text: "Delete the Kubernetes object immediately without cleaning up external SaaS resources, leaving orphaned cloud spend." },
      { id: 'D', text: "Poll the Kubernetes API server in an infinite busy loop without using informers or event watches." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion. Kubernetes controllers implement level-triggered reconciliation loops. When managing external dependencies, controllers register `finalizers` on custom resources. The finalizer blocks object garbage collection in etcd until external cleanup logic completes successfully.",
    referenceUrl: "https://book.kubebuilder.io/architecture/controllers.html",
    tags: ["Controller Architecture", "Controller Architecture", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-268",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Kubernetes Controller Architecture and Reconciliation Loops: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Controller Architecture to build an enterprise operator that provisions external SaaS accounts and cleans up remote resources reliably upon CR deletion.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Implementing custom controllers with Kubebuilder, reconcilers, watches, and finalizers is under consideration.",
    options: [
      { id: 'A', text: "Execute cron jobs every midnight that scrape Kubernetes manifests using regex." },
      { id: 'B', text: "Delete the Kubernetes object immediately without cleaning up external SaaS resources, leaving orphaned cloud spend." },
      { id: 'C', text: "Poll the Kubernetes API server in an infinite busy loop without using informers or event watches." },
      { id: 'D', text: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion. Kubernetes controllers implement level-triggered reconciliation loops. When managing external dependencies, controllers register `finalizers` on custom resources. The finalizer blocks object garbage collection in etcd until external cleanup logic completes successfully.",
    referenceUrl: "https://book.kubebuilder.io/architecture/controllers.html",
    tags: ["Controller Architecture", "Controller Architecture", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-269",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Kubernetes Controller Architecture and Reconciliation Loops: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Controller Architecture to build an enterprise operator that provisions external SaaS accounts and cleans up remote resources reliably upon CR deletion.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Implementing custom controllers with Kubebuilder, reconcilers, watches, and finalizers is under consideration.",
    options: [
      { id: 'A', text: "Execute cron jobs every midnight that scrape Kubernetes manifests using regex." },
      { id: 'B', text: "Delete the Kubernetes object immediately without cleaning up external SaaS resources, leaving orphaned cloud spend." },
      { id: 'C', text: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion." },
      { id: 'D', text: "Poll the Kubernetes API server in an infinite busy loop without using informers or event watches." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion. Kubernetes controllers implement level-triggered reconciliation loops. When managing external dependencies, controllers register `finalizers` on custom resources. The finalizer blocks object garbage collection in etcd until external cleanup logic completes successfully.",
    referenceUrl: "https://book.kubebuilder.io/architecture/controllers.html",
    tags: ["Controller Architecture", "Controller Architecture", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-270",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Kubernetes Controller Architecture and Reconciliation Loops: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Controller Architecture to build an enterprise operator that provisions external SaaS accounts and cleans up remote resources reliably upon CR deletion.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Implementing custom controllers with Kubebuilder, reconcilers, watches, and finalizers is under consideration.",
    options: [
      { id: 'A', text: "Delete the Kubernetes object immediately without cleaning up external SaaS resources, leaving orphaned cloud spend." },
      { id: 'B', text: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion." },
      { id: 'C', text: "Poll the Kubernetes API server in an infinite busy loop without using informers or event watches." },
      { id: 'D', text: "Execute cron jobs every midnight that scrape Kubernetes manifests using regex." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement a custom controller using Kubebuilder, attaching a finalizer to the custom resource to execute teardown before deletion. Kubernetes controllers implement level-triggered reconciliation loops. When managing external dependencies, controllers register `finalizers` on custom resources. The finalizer blocks object garbage collection in etcd until external cleanup logic completes successfully.",
    referenceUrl: "https://book.kubebuilder.io/architecture/controllers.html",
    tags: ["Controller Architecture", "Controller Architecture", "Resilience And Sre"]
  },
  {
    id: "cncf-cnpe-271",
    difficulty: "hard",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Workload Specification Abstractions: Score Specification: Enterprise Platform",
    scenario: "An enterprise principal platform architect is designing a multi-cloud internal developer platform (IDP) substrate, custom control planes, and automated governance across global clusters. The platform engineer evaluates Score Spec to enable developers to describe application requirements (containers, ports, variables, resources) once without knowing target cluster topologies.",
    question: "Which advanced architectural approach or platform engineering design satisfies these enterprise IDP objectives? Decoupling application workload definitions from environment infrastructure details via score.yaml is under consideration.",
    options: [
      { id: 'A', text: "Require developers to duplicate and maintain separate 500-line Helm charts for every development, staging, and production cluster." },
      { id: 'B', text: "Force developers to learn raw cloud provider infrastructure templates." },
      { id: 'C', text: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments." },
      { id: 'D', text: "Hardcode environment-specific IP addresses and database endpoints in application source code." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments. CNCF Score is an open-source, environment-agnostic workload specification. Developers define what their workload needs (`containers`, `service`, `resources: db`) in a concise `score.yaml`. Platform tooling then translates this intent into environment-specific manifests.",
    referenceUrl: "https://score.dev/docs/concepts/what-is-score",
    tags: ["Score Spec", "Score Spec", "Enterprise Platform"]
  },
  {
    id: "cncf-cnpe-272",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Workload Specification Abstractions: Score Specification: High Scale Orchestration",
    scenario: "A high-throughput platform organization orchestrates thousands of microservices and hundreds of Kubernetes clusters across multi-region cloud substrates. The platform engineer evaluates Score Spec to enable developers to describe application requirements (containers, ports, variables, resources) once without knowing target cluster topologies.",
    question: "Which control plane pattern or composition architecture handles this operational scale effectively while preventing controller contention and state drift? Decoupling application workload definitions from environment infrastructure details via score.yaml is under consideration.",
    options: [
      { id: 'A', text: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments." },
      { id: 'B', text: "Hardcode environment-specific IP addresses and database endpoints in application source code." },
      { id: 'C', text: "Force developers to learn raw cloud provider infrastructure templates." },
      { id: 'D', text: "Require developers to duplicate and maintain separate 500-line Helm charts for every development, staging, and production cluster." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments. CNCF Score is an open-source, environment-agnostic workload specification. Developers define what their workload needs (`containers`, `service`, `resources: db`) in a concise `score.yaml`. Platform tooling then translates this intent into environment-specific manifests.",
    referenceUrl: "https://score.dev/docs/concepts/what-is-score",
    tags: ["Score Spec", "Score Spec", "High Scale Orchestration"]
  },
  {
    id: "cncf-cnpe-273",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Workload Specification Abstractions: Score Specification: Zero Trust Governance",
    scenario: "A platform security architect requires cryptographic supply chain verification, kernel-level runtime anomaly detection, and zero-trust workload attestation. The platform engineer evaluates Score Spec to enable developers to describe application requirements (containers, ports, variables, resources) once without knowing target cluster topologies.",
    question: "Which platform engineering pattern or security mechanism satisfies these mandatory zero-trust controls? Decoupling application workload definitions from environment infrastructure details via score.yaml is under consideration.",
    options: [
      { id: 'A', text: "Force developers to learn raw cloud provider infrastructure templates." },
      { id: 'B', text: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments." },
      { id: 'C', text: "Hardcode environment-specific IP addresses and database endpoints in application source code." },
      { id: 'D', text: "Require developers to duplicate and maintain separate 500-line Helm charts for every development, staging, and production cluster." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments. CNCF Score is an open-source, environment-agnostic workload specification. Developers define what their workload needs (`containers`, `service`, `resources: db`) in a concise `score.yaml`. Platform tooling then translates this intent into environment-specific manifests.",
    referenceUrl: "https://score.dev/docs/concepts/what-is-score",
    tags: ["Score Spec", "Score Spec", "Zero Trust Governance"]
  },
  {
    id: "cncf-cnpe-274",
    difficulty: "easy",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Workload Specification Abstractions: Score Specification: Workload Automation",
    scenario: "A platform team is building advanced self-service automation, ephemeral environment orchestration, and automated dependency campaigns to maximize developer flow state. The platform engineer evaluates Score Spec to enable developers to describe application requirements (containers, ports, variables, resources) once without knowing target cluster topologies.",
    question: "Which platform capability or automation workflow enables application teams to self-serve safely? Decoupling application workload definitions from environment infrastructure details via score.yaml is under consideration.",
    options: [
      { id: 'A', text: "Force developers to learn raw cloud provider infrastructure templates." },
      { id: 'B', text: "Hardcode environment-specific IP addresses and database endpoints in application source code." },
      { id: 'C', text: "Require developers to duplicate and maintain separate 500-line Helm charts for every development, staging, and production cluster." },
      { id: 'D', text: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments. CNCF Score is an open-source, environment-agnostic workload specification. Developers define what their workload needs (`containers`, `service`, `resources: db`) in a concise `score.yaml`. Platform tooling then translates this intent into environment-specific manifests.",
    referenceUrl: "https://score.dev/docs/concepts/what-is-score",
    tags: ["Score Spec", "Score Spec", "Workload Automation"]
  },
  {
    id: "cncf-cnpe-275",
    difficulty: "medium",
    certId: "cncf-cnpe",
    domainId: "d1",
    domainName: "Platform Architecture and API Design",
    title: "Workload Specification Abstractions: Score Specification: Resilience And Sre",
    scenario: "A platform reliability engineering team is optimizing multi-window error budget alerting, fault injection chaos experiments, and automated incident remediation across clusters. The platform engineer evaluates Score Spec to enable developers to describe application requirements (containers, ports, variables, resources) once without knowing target cluster topologies.",
    question: "Which operational design or SRE configuration guarantees high availability and resilient platform evolution? Decoupling application workload definitions from environment infrastructure details via score.yaml is under consideration.",
    options: [
      { id: 'A', text: "Force developers to learn raw cloud provider infrastructure templates." },
      { id: 'B', text: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments." },
      { id: 'C', text: "Hardcode environment-specific IP addresses and database endpoints in application source code." },
      { id: 'D', text: "Require developers to duplicate and maintain separate 500-line Helm charts for every development, staging, and production cluster." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adopt the CNCF Score specification (`score.yaml`), allowing developers to declare workload requirements independently of environments. CNCF Score is an open-source, environment-agnostic workload specification. Developers define what their workload needs (`containers`, `service`, `resources: db`) in a concise `score.yaml`. Platform tooling then translates this intent into environment-specific manifests.",
    referenceUrl: "https://score.dev/docs/concepts/what-is-score",
    tags: ["Score Spec", "Score Spec", "Resilience And Sre"]
  }
];

export default CNCF_CNPE_QUESTIONS_11;
