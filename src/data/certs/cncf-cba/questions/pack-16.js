export const CNCF_CBA_QUESTIONS_16 = [
  {
    id: "cncf-cba-376",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Standard Catalog Annotations and Metadata Conventions: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Annotations to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Standard annotations like github.com/project-slug, backstage.io/techdocs-ref, and pagerduty.com/integration-key is under consideration.",
    options: [
      { id: 'A', text: "Avoid using metadata annotations and maintain manual links on a whiteboard." },
      { id: 'B', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." },
      { id: 'C', text: "Embed raw API authentication tokens inside public commit messages." },
      { id: 'D', text: "Create a duplicate component entry for every external SaaS tool." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations", "Annotations", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-377",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Standard Catalog Annotations and Metadata Conventions: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Annotations to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Standard annotations like github.com/project-slug, backstage.io/techdocs-ref, and pagerduty.com/integration-key is under consideration.",
    options: [
      { id: 'A', text: "Avoid using metadata annotations and maintain manual links on a whiteboard." },
      { id: 'B', text: "Embed raw API authentication tokens inside public commit messages." },
      { id: 'C', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." },
      { id: 'D', text: "Create a duplicate component entry for every external SaaS tool." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations", "Annotations", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-378",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Standard Catalog Annotations and Metadata Conventions: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Annotations to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Standard annotations like github.com/project-slug, backstage.io/techdocs-ref, and pagerduty.com/integration-key is under consideration.",
    options: [
      { id: 'A', text: "Avoid using metadata annotations and maintain manual links on a whiteboard." },
      { id: 'B', text: "Embed raw API authentication tokens inside public commit messages." },
      { id: 'C', text: "Create a duplicate component entry for every external SaaS tool." },
      { id: 'D', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations", "Annotations", "Security And Governance"]
  },
  {
    id: "cncf-cba-379",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Standard Catalog Annotations and Metadata Conventions: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Annotations to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Standard annotations like github.com/project-slug, backstage.io/techdocs-ref, and pagerduty.com/integration-key is under consideration.",
    options: [
      { id: 'A', text: "Embed raw API authentication tokens inside public commit messages." },
      { id: 'B', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." },
      { id: 'C', text: "Create a duplicate component entry for every external SaaS tool." },
      { id: 'D', text: "Avoid using metadata annotations and maintain manual links on a whiteboard." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations", "Annotations", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-380",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Standard Catalog Annotations and Metadata Conventions: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Annotations to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Standard annotations like github.com/project-slug, backstage.io/techdocs-ref, and pagerduty.com/integration-key is under consideration.",
    options: [
      { id: 'A', text: "Embed raw API authentication tokens inside public commit messages." },
      { id: 'B', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." },
      { id: 'C', text: "Create a duplicate component entry for every external SaaS tool." },
      { id: 'D', text: "Avoid using metadata annotations and maintain manual links on a whiteboard." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations", "Annotations", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-381",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Relations and Bidirectional Graph Modeling: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Entity Relations to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Automated bidirectional linking between ownerOf/ownedBy, providesApi/apiProvidedBy, and partOf/hasPart is under consideration.",
    options: [
      { id: 'A', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'B', text: "Avoid defining relationships to prevent building an architectural dependency graph." },
      { id: 'C', text: "Manually maintain separate forward and reverse pointer arrays in every catalog-info.yaml file." },
      { id: 'D', text: "Delete relationships periodically to save disk space." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations", "Relations", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-382",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Relations and Bidirectional Graph Modeling: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Entity Relations to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Automated bidirectional linking between ownerOf/ownedBy, providesApi/apiProvidedBy, and partOf/hasPart is under consideration.",
    options: [
      { id: 'A', text: "Avoid defining relationships to prevent building an architectural dependency graph." },
      { id: 'B', text: "Manually maintain separate forward and reverse pointer arrays in every catalog-info.yaml file." },
      { id: 'C', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'D', text: "Delete relationships periodically to save disk space." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations", "Relations", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-383",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Relations and Bidirectional Graph Modeling: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Entity Relations to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Automated bidirectional linking between ownerOf/ownedBy, providesApi/apiProvidedBy, and partOf/hasPart is under consideration.",
    options: [
      { id: 'A', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'B', text: "Avoid defining relationships to prevent building an architectural dependency graph." },
      { id: 'C', text: "Delete relationships periodically to save disk space." },
      { id: 'D', text: "Manually maintain separate forward and reverse pointer arrays in every catalog-info.yaml file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations", "Relations", "Security And Governance"]
  },
  {
    id: "cncf-cba-384",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Relations and Bidirectional Graph Modeling: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Entity Relations to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Automated bidirectional linking between ownerOf/ownedBy, providesApi/apiProvidedBy, and partOf/hasPart is under consideration.",
    options: [
      { id: 'A', text: "Delete relationships periodically to save disk space." },
      { id: 'B', text: "Avoid defining relationships to prevent building an architectural dependency graph." },
      { id: 'C', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'D', text: "Manually maintain separate forward and reverse pointer arrays in every catalog-info.yaml file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations", "Relations", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-385",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Relations and Bidirectional Graph Modeling: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Entity Relations to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Automated bidirectional linking between ownerOf/ownedBy, providesApi/apiProvidedBy, and partOf/hasPart is under consideration.",
    options: [
      { id: 'A', text: "Manually maintain separate forward and reverse pointer arrays in every catalog-info.yaml file." },
      { id: 'B', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'C', text: "Avoid defining relationships to prevent building an architectural dependency graph." },
      { id: 'D', text: "Delete relationships periodically to save disk space." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations", "Relations", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-386",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Architecture and Task Execution Engine: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Scaffolder Architecture to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Asynchronous task execution pipeline driven by TaskBroker and worker runners is under consideration.",
    options: [
      { id: 'A', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." },
      { id: 'B', text: "Delegate repository creation to manual developer terminal commands." },
      { id: 'C', text: "Run long-running repository clone operations synchronously in the main Express HTTP request thread." },
      { id: 'D', text: "Execute shell scripts directly inside client web browsers using raw JavaScript eval." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture", "Scaffolder Architecture", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-387",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Architecture and Task Execution Engine: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Scaffolder Architecture to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Asynchronous task execution pipeline driven by TaskBroker and worker runners is under consideration.",
    options: [
      { id: 'A', text: "Execute shell scripts directly inside client web browsers using raw JavaScript eval." },
      { id: 'B', text: "Delegate repository creation to manual developer terminal commands." },
      { id: 'C', text: "Run long-running repository clone operations synchronously in the main Express HTTP request thread." },
      { id: 'D', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture", "Scaffolder Architecture", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-388",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Architecture and Task Execution Engine: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Scaffolder Architecture to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Asynchronous task execution pipeline driven by TaskBroker and worker runners is under consideration.",
    options: [
      { id: 'A', text: "Delegate repository creation to manual developer terminal commands." },
      { id: 'B', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." },
      { id: 'C', text: "Run long-running repository clone operations synchronously in the main Express HTTP request thread." },
      { id: 'D', text: "Execute shell scripts directly inside client web browsers using raw JavaScript eval." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture", "Scaffolder Architecture", "Security And Governance"]
  },
  {
    id: "cncf-cba-389",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Architecture and Task Execution Engine: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Scaffolder Architecture to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Asynchronous task execution pipeline driven by TaskBroker and worker runners is under consideration.",
    options: [
      { id: 'A', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." },
      { id: 'B', text: "Delegate repository creation to manual developer terminal commands." },
      { id: 'C', text: "Execute shell scripts directly inside client web browsers using raw JavaScript eval." },
      { id: 'D', text: "Run long-running repository clone operations synchronously in the main Express HTTP request thread." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture", "Scaffolder Architecture", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-390",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Scaffolder Architecture and Task Execution Engine: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Scaffolder Architecture to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Asynchronous task execution pipeline driven by TaskBroker and worker runners is under consideration.",
    options: [
      { id: 'A', text: "Run long-running repository clone operations synchronously in the main Express HTTP request thread." },
      { id: 'B', text: "Delegate repository creation to manual developer terminal commands." },
      { id: 'C', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." },
      { id: 'D', text: "Execute shell scripts directly inside client web browsers using raw JavaScript eval." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture", "Scaffolder Architecture", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-391",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Entity Definition Schema (kind: Template): Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Template Schema to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Structuring kind: Template with spec.parameters JSONSchema, spec.steps, and spec.output is under consideration.",
    options: [
      { id: 'A', text: "Create a Component entity with an empty description field." },
      { id: 'B', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'C', text: "Write an unformatted bash shell script committed to a personal repository branch." },
      { id: 'D', text: "Deploy an external Jenkins job with no metadata registration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema", "Template Schema", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-392",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Entity Definition Schema (kind: Template): High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Template Schema to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Structuring kind: Template with spec.parameters JSONSchema, spec.steps, and spec.output is under consideration.",
    options: [
      { id: 'A', text: "Create a Component entity with an empty description field." },
      { id: 'B', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'C', text: "Write an unformatted bash shell script committed to a personal repository branch." },
      { id: 'D', text: "Deploy an external Jenkins job with no metadata registration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema", "Template Schema", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-393",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Entity Definition Schema (kind: Template): Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Template Schema to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Structuring kind: Template with spec.parameters JSONSchema, spec.steps, and spec.output is under consideration.",
    options: [
      { id: 'A', text: "Create a Component entity with an empty description field." },
      { id: 'B', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'C', text: "Write an unformatted bash shell script committed to a personal repository branch." },
      { id: 'D', text: "Deploy an external Jenkins job with no metadata registration." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema", "Template Schema", "Security And Governance"]
  },
  {
    id: "cncf-cba-394",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Entity Definition Schema (kind: Template): Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Template Schema to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Structuring kind: Template with spec.parameters JSONSchema, spec.steps, and spec.output is under consideration.",
    options: [
      { id: 'A', text: "Deploy an external Jenkins job with no metadata registration." },
      { id: 'B', text: "Create a Component entity with an empty description field." },
      { id: 'C', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'D', text: "Write an unformatted bash shell script committed to a personal repository branch." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema", "Template Schema", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-395",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Template Entity Definition Schema (kind: Template): Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Template Schema to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Structuring kind: Template with spec.parameters JSONSchema, spec.steps, and spec.output is under consideration.",
    options: [
      { id: 'A', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'B', text: "Create a Component entity with an empty description field." },
      { id: 'C', text: "Write an unformatted bash shell script committed to a personal repository branch." },
      { id: 'D', text: "Deploy an external Jenkins job with no metadata registration." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema", "Template Schema", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-396",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Parameter Forms and JSONSchema UI Customization: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Form Customization to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? react-jsonschema-form widgets, ui:field, and ui:options for dynamic inputs is under consideration.",
    options: [
      { id: 'A', text: "Require developers to execute manual git commands on developer laptops." },
      { id: 'B', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." },
      { id: 'C', text: "Hardcode repository destination URLs inside server-side environment variables." },
      { id: 'D', text: "Ask users to type raw git commit hashes into an unvalidated single-line text input." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization", "Form Customization", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-397",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Parameter Forms and JSONSchema UI Customization: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Form Customization to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? react-jsonschema-form widgets, ui:field, and ui:options for dynamic inputs is under consideration.",
    options: [
      { id: 'A', text: "Hardcode repository destination URLs inside server-side environment variables." },
      { id: 'B', text: "Require developers to execute manual git commands on developer laptops." },
      { id: 'C', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." },
      { id: 'D', text: "Ask users to type raw git commit hashes into an unvalidated single-line text input." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization", "Form Customization", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-398",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Parameter Forms and JSONSchema UI Customization: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Form Customization to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? react-jsonschema-form widgets, ui:field, and ui:options for dynamic inputs is under consideration.",
    options: [
      { id: 'A', text: "Hardcode repository destination URLs inside server-side environment variables." },
      { id: 'B', text: "Ask users to type raw git commit hashes into an unvalidated single-line text input." },
      { id: 'C', text: "Require developers to execute manual git commands on developer laptops." },
      { id: 'D', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization", "Form Customization", "Security And Governance"]
  },
  {
    id: "cncf-cba-399",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Parameter Forms and JSONSchema UI Customization: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Form Customization to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? react-jsonschema-form widgets, ui:field, and ui:options for dynamic inputs is under consideration.",
    options: [
      { id: 'A', text: "Ask users to type raw git commit hashes into an unvalidated single-line text input." },
      { id: 'B', text: "Hardcode repository destination URLs inside server-side environment variables." },
      { id: 'C', text: "Require developers to execute manual git commands on developer laptops." },
      { id: 'D', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization", "Form Customization", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-400",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Parameter Forms and JSONSchema UI Customization: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Form Customization to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? react-jsonschema-form widgets, ui:field, and ui:options for dynamic inputs is under consideration.",
    options: [
      { id: 'A', text: "Require developers to execute manual git commands on developer laptops." },
      { id: 'B', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." },
      { id: 'C', text: "Hardcode repository destination URLs inside server-side environment variables." },
      { id: 'D', text: "Ask users to type raw git commit hashes into an unvalidated single-line text input." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization", "Form Customization", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_16;
