export const CNCF_CBA_QUESTIONS_16 = [
  {
    id: "cncf-cba-376",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Connecting an Entity to External Tooling: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Record the same values as `metadata.tags` so that they are visible on the entity page and can be searched on." },
      { id: 'B', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." },
      { id: 'C', text: "Put the values in `metadata.labels`, which the plugins read in the same way as annotations, so the same integrations light up on the entity page." },
      { id: 'D', text: "Configure the GitHub and PagerDuty integrations per repository in the Backstage `app-config.yaml` rather than per entity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas. Tags render as chips and are searchable, but no plugin reads them, so the PagerDuty card stays empty; labels are a distinct field that the plugins do not consult, which makes this the most convincing wrong answer of the three; and per-repository configuration cannot express that two components living in one repository page different teams.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations","Annotations","Enterprise Portal"]
  },
  {
    id: "cncf-cba-377",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Connecting an Entity to External Tooling: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Record the same values as `metadata.tags` so that they are visible on the entity page and can be searched on." },
      { id: 'B', text: "Put the values in `metadata.labels`, which the plugins read in the same way as annotations, so the same integrations light up on the entity page." },
      { id: 'C', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." },
      { id: 'D', text: "Configure the GitHub and PagerDuty integrations per repository in the Backstage `app-config.yaml` rather than per entity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas. Tags render as chips and are searchable, but no plugin reads them, so the PagerDuty card stays empty; labels are a distinct field that the plugins do not consult, which makes this the most convincing wrong answer of the three; and per-repository configuration cannot express that two components living in one repository page different teams.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations","Annotations","High Scale Catalog"]
  },
  {
    id: "cncf-cba-378",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Connecting an Entity to External Tooling: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Record the same values as `metadata.tags` so that they are visible on the entity page and can be searched on." },
      { id: 'B', text: "Put the values in `metadata.labels`, which the plugins read in the same way as annotations, so the same integrations light up on the entity page." },
      { id: 'C', text: "Configure the GitHub and PagerDuty integrations per repository in the Backstage `app-config.yaml` rather than per entity." },
      { id: 'D', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas. Tags render as chips and are searchable, but no plugin reads them, so the PagerDuty card stays empty; labels are a distinct field that the plugins do not consult, which makes this the most convincing wrong answer of the three; and per-repository configuration cannot express that two components living in one repository page different teams.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations","Annotations","Security And Governance"]
  },
  {
    id: "cncf-cba-379",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Connecting an Entity to External Tooling: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Put the values in `metadata.labels`, which the plugins read in the same way as annotations, so the same integrations light up on the entity page." },
      { id: 'B', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." },
      { id: 'C', text: "Configure the GitHub and PagerDuty integrations per repository in the Backstage `app-config.yaml` rather than per entity." },
      { id: 'D', text: "Record the same values as `metadata.tags` so that they are visible on the entity page and can be searched on." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas. Tags render as chips and are searchable, but no plugin reads them, so the PagerDuty card stays empty; labels are a distinct field that the plugins do not consult, which makes this the most convincing wrong answer of the three; and per-repository configuration cannot express that two components living in one repository page different teams.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations","Annotations","Developer Onboarding"]
  },
  {
    id: "cncf-cba-380",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Connecting an Entity to External Tooling: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to connect a catalog component to its GitHub repo, TechDocs documentation, and PagerDuty alert service seamlessly.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Put the values in `metadata.labels`, which the plugins read in the same way as annotations, so the same integrations light up on the entity page." },
      { id: 'B', text: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`." },
      { id: 'C', text: "Configure the GitHub and PagerDuty integrations per repository in the Backstage `app-config.yaml` rather than per entity." },
      { id: 'D', text: "Record the same values as `metadata.tags` so that they are visible on the entity page and can be searched on." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Annotate the entity metadata with `github.com/project-slug`, `backstage.io/techdocs-ref`, and `pagerduty.com/integration-key`. Backstage relies on standardized `metadata.annotations` (e.g., `github.com/project-slug`, `backstage.io/techdocs-ref`, `circleci.com/project-slug`) to link catalog entities with external plugins and cloud services without altering core entity schemas. Tags render as chips and are searchable, but no plugin reads them, so the PagerDuty card stays empty; labels are a distinct field that the plugins do not consult, which makes this the most convincing wrong answer of the three; and per-repository configuration cannot express that two components living in one repository page different teams.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/well-known-annotations",
    tags: ["Annotations","Annotations","Resilience And Operations"]
  },
  {
    id: "cncf-cba-381",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Traversing the Dependency Graph: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'B', text: "Read both `spec.dependsOn` and `spec.dependencyOf` from each entity and merge the two lists in the client, deduplicating the entity refs that appear on both sides." },
      { id: 'C', text: "Traverse the graph by reading `spec.system` and `spec.subcomponentOf` from every entity in turn." },
      { id: 'D', text: "Use the catalog graph plugin's visualisation only, since relations are not exposed on the entity payload." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view. Reading the spec fields sees only what each author wrote down, missing the reverse edges the catalog derives; walking `spec.system` covers one kind of edge and silently omits ownership, API, and dependency links; and the relations array is part of every entity the API returns, so the graph plugin is a consumer of it rather than the only way to reach it.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations","Relations","Enterprise Portal"]
  },
  {
    id: "cncf-cba-382",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Traversing the Dependency Graph: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Read both `spec.dependsOn` and `spec.dependencyOf` from each entity and merge the two lists in the client, deduplicating the entity refs that appear on both sides." },
      { id: 'B', text: "Traverse the graph by reading `spec.system` and `spec.subcomponentOf` from every entity in turn." },
      { id: 'C', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'D', text: "Use the catalog graph plugin's visualisation only, since relations are not exposed on the entity payload." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view. Reading the spec fields sees only what each author wrote down, missing the reverse edges the catalog derives; walking `spec.system` covers one kind of edge and silently omits ownership, API, and dependency links; and the relations array is part of every entity the API returns, so the graph plugin is a consumer of it rather than the only way to reach it.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations","Relations","High Scale Catalog"]
  },
  {
    id: "cncf-cba-383",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Traversing the Dependency Graph: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'B', text: "Read both `spec.dependsOn` and `spec.dependencyOf` from each entity and merge the two lists in the client, deduplicating the entity refs that appear on both sides." },
      { id: 'C', text: "Use the catalog graph plugin's visualisation only, since relations are not exposed on the entity payload." },
      { id: 'D', text: "Traverse the graph by reading `spec.system` and `spec.subcomponentOf` from every entity in turn." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view. Reading the spec fields sees only what each author wrote down, missing the reverse edges the catalog derives; walking `spec.system` covers one kind of edge and silently omits ownership, API, and dependency links; and the relations array is part of every entity the API returns, so the graph plugin is a consumer of it rather than the only way to reach it.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations","Relations","Security And Governance"]
  },
  {
    id: "cncf-cba-384",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Traversing the Dependency Graph: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Use the catalog graph plugin's visualisation only, since relations are not exposed on the entity payload." },
      { id: 'B', text: "Read both `spec.dependsOn` and `spec.dependencyOf` from each entity and merge the two lists in the client, deduplicating the entity refs that appear on both sides." },
      { id: 'C', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'D', text: "Traverse the graph by reading `spec.system` and `spec.subcomponentOf` from every entity in turn." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view. Reading the spec fields sees only what each author wrote down, missing the reverse edges the catalog derives; walking `spec.system` covers one kind of edge and silently omits ownership, API, and dependency links; and the relations array is part of every entity the API returns, so the graph plugin is a consumer of it rather than the only way to reach it.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations","Relations","Developer Onboarding"]
  },
  {
    id: "cncf-cba-385",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Traversing the Dependency Graph: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to explore dependencies and visualize architectural relationships between microservices, APIs, and systems in the portal graph.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Traverse the graph by reading `spec.system` and `spec.subcomponentOf` from every entity in turn." },
      { id: 'B', text: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields." },
      { id: 'C', text: "Read both `spec.dependsOn` and `spec.dependencyOf` from each entity and merge the two lists in the client, deduplicating the entity refs that appear on both sides." },
      { id: 'D', text: "Use the catalog graph plugin's visualisation only, since relations are not exposed on the entity payload." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Inspect the `relations` array on catalog entities, which the catalog automatically populates bidirectionally from declarative spec fields. When the catalog ingests entities, it automatically resolves declarative spec references (like `spec.system`, `spec.owner`, `spec.providesApis`) into bidirectional `relations` (e.g., `partOf`/`hasPart`, `ownedBy`/`ownerOf`), powering the dependency graph view. Reading the spec fields sees only what each author wrote down, missing the reverse edges the catalog derives; walking `spec.system` covers one kind of edge and silently omits ownership, API, and dependency links; and the relations array is part of every entity the API returns, so the graph plugin is a consumer of it rather than the only way to reach it.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model#relations",
    tags: ["Entity Relations","Relations","Resilience And Operations"]
  },
  {
    id: "cncf-cba-386",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Running Long Scaffolding Jobs: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." },
      { id: 'B', text: "Run the scaffolding steps inside the Backstage HTTP handler and hold the request open until the last step finishes." },
      { id: 'C', text: "Queue the jobs into an external workflow engine such as Argo Workflows and report the status back to the portal." },
      { id: 'D', text: "Have the template trigger a GitHub Actions workflow and poll that workflow for completion, surfacing its conclusion to the user." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client. Holding the request open ties the job's lifetime to a browser tab and to the ingress timeout, so a slow clone fails the request rather than the task; an external workflow engine runs the work reliably but moves the step definitions, logs, and secret handling outside Backstage; and delegating to CI means the template can no longer stream step-level progress back to the user.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture","Scaffolder Architecture","Enterprise Portal"]
  },
  {
    id: "cncf-cba-387",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Running Long Scaffolding Jobs: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Have the template trigger a GitHub Actions workflow and poll that workflow for completion, surfacing its conclusion to the user." },
      { id: 'B', text: "Run the scaffolding steps inside the Backstage HTTP handler and hold the request open until the last step finishes." },
      { id: 'C', text: "Queue the jobs into an external workflow engine such as Argo Workflows and report the status back to the portal." },
      { id: 'D', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client. Holding the request open ties the job's lifetime to a browser tab and to the ingress timeout, so a slow clone fails the request rather than the task; an external workflow engine runs the work reliably but moves the step definitions, logs, and secret handling outside Backstage; and delegating to CI means the template can no longer stream step-level progress back to the user.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture","Scaffolder Architecture","High Scale Catalog"]
  },
  {
    id: "cncf-cba-388",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Running Long Scaffolding Jobs: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Run the scaffolding steps inside the Backstage HTTP handler and hold the request open until the last step finishes." },
      { id: 'B', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." },
      { id: 'C', text: "Queue the jobs into an external workflow engine such as Argo Workflows and report the status back to the portal." },
      { id: 'D', text: "Have the template trigger a GitHub Actions workflow and poll that workflow for completion, surfacing its conclusion to the user." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client. Holding the request open ties the job's lifetime to a browser tab and to the ingress timeout, so a slow clone fails the request rather than the task; an external workflow engine runs the work reliably but moves the step definitions, logs, and secret handling outside Backstage; and delegating to CI means the template can no longer stream step-level progress back to the user.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture","Scaffolder Architecture","Security And Governance"]
  },
  {
    id: "cncf-cba-389",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Running Long Scaffolding Jobs: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." },
      { id: 'B', text: "Run the scaffolding steps inside the Backstage HTTP handler and hold the request open until the last step finishes." },
      { id: 'C', text: "Have the template trigger a GitHub Actions workflow and poll that workflow for completion, surfacing its conclusion to the user." },
      { id: 'D', text: "Queue the jobs into an external workflow engine such as Argo Workflows and report the status back to the portal." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client. Holding the request open ties the job's lifetime to a browser tab and to the ingress timeout, so a slow clone fails the request rather than the task; an external workflow engine runs the work reliably but moves the step definitions, logs, and secret handling outside Backstage; and delegating to CI means the template can no longer stream step-level progress back to the user.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture","Scaffolder Architecture","Developer Onboarding"]
  },
  {
    id: "cncf-cba-390",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Running Long Scaffolding Jobs: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to execute automated repository creation and project scaffolding without blocking HTTP request threads in the portal backend.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Queue the jobs into an external workflow engine such as Argo Workflows and report the status back to the portal." },
      { id: 'B', text: "Run the scaffolding steps inside the Backstage HTTP handler and hold the request open until the last step finishes." },
      { id: 'C', text: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners." },
      { id: 'D', text: "Have the template trigger a GitHub Actions workflow and poll that workflow for completion, surfacing its conclusion to the user." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Dispatch scaffolding jobs to the Backstage `TaskBroker`, which assigns tasks asynchronously to background worker runners. The Backstage Scaffolder uses an asynchronous task architecture. When a user submits a template form, the backend creates a task record managed by the `TaskBroker`. Worker runners claim tasks, process steps within an isolated workspace, and stream status events back to the client. Holding the request open ties the job's lifetime to a browser tab and to the ingress timeout, so a slow clone fails the request rather than the task; an external workflow engine runs the work reliably but moves the step definitions, logs, and secret handling outside Backstage; and delegating to CI means the template can no longer stream step-level progress back to the user.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/authoring-templates",
    tags: ["Scaffolder Architecture","Scaffolder Architecture","Resilience And Operations"]
  },
  {
    id: "cncf-cba-391",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Defining a Self-Service Template: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Register it as a `Component` with `spec.type: template` and describe the steps in the entity's description." },
      { id: 'B', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'C', text: "Package the scaffolding logic as a custom action and register that action without any `Template` entity." },
      { id: 'D', text: "Declare `spec.steps` alone and gather the inputs from a purpose-built React page instead of a parameter schema, posting them to the scaffolder API." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline. A `Component` of type template is still a component, so the scaffolder never lists it and the description is prose rather than an executable definition; a custom action is a step implementation that something else must invoke; and without `spec.parameters` the scaffolder has no form to render, which is what a bespoke page would be duplicating.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema","Template Schema","Enterprise Portal"]
  },
  {
    id: "cncf-cba-392",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Defining a Self-Service Template: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Register it as a `Component` with `spec.type: template` and describe the steps in the entity's description." },
      { id: 'B', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'C', text: "Package the scaffolding logic as a custom action and register that action without any `Template` entity." },
      { id: 'D', text: "Declare `spec.steps` alone and gather the inputs from a purpose-built React page instead of a parameter schema, posting them to the scaffolder API." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline. A `Component` of type template is still a component, so the scaffolder never lists it and the description is prose rather than an executable definition; a custom action is a step implementation that something else must invoke; and without `spec.parameters` the scaffolder has no form to render, which is what a bespoke page would be duplicating.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema","Template Schema","High Scale Catalog"]
  },
  {
    id: "cncf-cba-393",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Defining a Self-Service Template: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Register it as a `Component` with `spec.type: template` and describe the steps in the entity's description." },
      { id: 'B', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'C', text: "Package the scaffolding logic as a custom action and register that action without any `Template` entity." },
      { id: 'D', text: "Declare `spec.steps` alone and gather the inputs from a purpose-built React page instead of a parameter schema, posting them to the scaffolder API." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline. A `Component` of type template is still a component, so the scaffolder never lists it and the description is prose rather than an executable definition; a custom action is a step implementation that something else must invoke; and without `spec.parameters` the scaffolder has no form to render, which is what a bespoke page would be duplicating.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema","Template Schema","Security And Governance"]
  },
  {
    id: "cncf-cba-394",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Defining a Self-Service Template: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Declare `spec.steps` alone and gather the inputs from a purpose-built React page instead of a parameter schema, posting them to the scaffolder API." },
      { id: 'B', text: "Register it as a `Component` with `spec.type: template` and describe the steps in the entity's description." },
      { id: 'C', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'D', text: "Package the scaffolding logic as a custom action and register that action without any `Template` entity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline. A `Component` of type template is still a component, so the scaffolder never lists it and the description is prose rather than an executable definition; a custom action is a step implementation that something else must invoke; and without `spec.parameters` the scaffolder has no form to render, which is what a bespoke page would be duplicating.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema","Template Schema","Developer Onboarding"]
  },
  {
    id: "cncf-cba-395",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Defining a Self-Service Template: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to author an enterprise software template providing an interactive multi-step creation wizard for new microservices.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`." },
      { id: 'B', text: "Register it as a `Component` with `spec.type: template` and describe the steps in the entity's description." },
      { id: 'C', text: "Package the scaffolding logic as a custom action and register that action without any `Template` entity." },
      { id: 'D', text: "Declare `spec.steps` alone and gather the inputs from a purpose-built React page instead of a parameter schema, posting them to the scaffolder API." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `kind: Template` entity specifying `spec.parameters` (JSONSchema form definition) and an ordered array of `spec.steps`. Software Templates are catalog entities of `kind: Template`. The `spec.parameters` array defines form schemas using JSONSchema (often organized across multiple wizard steps), while `spec.steps` defines the sequential action execution pipeline. A `Component` of type template is still a component, so the scaffolder never lists it and the description is prose rather than an executable definition; a custom action is a step implementation that something else must invoke; and without `spec.parameters` the scaffolder has no form to render, which is what a bespoke page would be duplicating.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/input-examples",
    tags: ["Template Schema","Template Schema","Resilience And Operations"]
  },
  {
    id: "cncf-cba-396",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Collecting Valid Inputs From the Developer: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Declare the fields as plain `type: string` parameters and constrain the format with a JSONSchema `pattern`, returning a validation message when the input does not match." },
      { id: 'B', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." },
      { id: 'C', text: "Use `ui:widget: select` with a hardcoded enum listing the organisation's repositories and teams." },
      { id: 'D', text: "Collect one free-text `repoUrl` and parse the host, owner, and repository out of it in a custom action." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI. A regex pattern rejects malformed input but cannot show the user which organisations they may publish into or which groups exist; a hardcoded enum is accurate on the day it is written and stale thereafter; and parsing a free-text URL moves validation past the point where the user could have been corrected, so the failure surfaces mid-run.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization","Form Customization","Enterprise Portal"]
  },
  {
    id: "cncf-cba-397",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Collecting Valid Inputs From the Developer: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Use `ui:widget: select` with a hardcoded enum listing the organisation's repositories and teams." },
      { id: 'B', text: "Declare the fields as plain `type: string` parameters and constrain the format with a JSONSchema `pattern`, returning a validation message when the input does not match." },
      { id: 'C', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." },
      { id: 'D', text: "Collect one free-text `repoUrl` and parse the host, owner, and repository out of it in a custom action." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI. A regex pattern rejects malformed input but cannot show the user which organisations they may publish into or which groups exist; a hardcoded enum is accurate on the day it is written and stale thereafter; and parsing a free-text URL moves validation past the point where the user could have been corrected, so the failure surfaces mid-run.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization","Form Customization","High Scale Catalog"]
  },
  {
    id: "cncf-cba-398",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Collecting Valid Inputs From the Developer: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Use `ui:widget: select` with a hardcoded enum listing the organisation's repositories and teams." },
      { id: 'B', text: "Collect one free-text `repoUrl` and parse the host, owner, and repository out of it in a custom action." },
      { id: 'C', text: "Declare the fields as plain `type: string` parameters and constrain the format with a JSONSchema `pattern`, returning a validation message when the input does not match." },
      { id: 'D', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI. A regex pattern rejects malformed input but cannot show the user which organisations they may publish into or which groups exist; a hardcoded enum is accurate on the day it is written and stale thereafter; and parsing a free-text URL moves validation past the point where the user could have been corrected, so the failure surfaces mid-run.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization","Form Customization","Security And Governance"]
  },
  {
    id: "cncf-cba-399",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Collecting Valid Inputs From the Developer: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Collect one free-text `repoUrl` and parse the host, owner, and repository out of it in a custom action." },
      { id: 'B', text: "Use `ui:widget: select` with a hardcoded enum listing the organisation's repositories and teams." },
      { id: 'C', text: "Declare the fields as plain `type: string` parameters and constrain the format with a JSONSchema `pattern`, returning a validation message when the input does not match." },
      { id: 'D', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI. A regex pattern rejects malformed input but cannot show the user which organisations they may publish into or which groups exist; a hardcoded enum is accurate on the day it is written and stale thereafter; and parsing a free-text URL moves validation past the point where the user could have been corrected, so the failure surfaces mid-run.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization","Form Customization","Developer Onboarding"]
  },
  {
    id: "cncf-cba-400",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d3",
    domainName: "Software Templates and Scaffolder",
    title: "Collecting Valid Inputs From the Developer: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to build an interactive form where developers select target GitHub owners, repositories, and cloud regions from validated dropdowns.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Declare the fields as plain `type: string` parameters and constrain the format with a JSONSchema `pattern`, returning a validation message when the input does not match." },
      { id: 'B', text: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters." },
      { id: 'C', text: "Use `ui:widget: select` with a hardcoded enum listing the organisation's repositories and teams." },
      { id: 'D', text: "Collect one free-text `repoUrl` and parse the host, owner, and repository out of it in a custom action." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Utilize `react-jsonschema-form` custom UI fields like `ui:field: RepoUrlPicker` and `ui:field: OwnerPicker` in template parameters. Backstage Scaffolder parameters leverage `react-jsonschema-form`. Backstage provides rich custom field widgets (such as `RepoUrlPicker`, `OwnerPicker`, `EntityPicker`) to ensure valid repository targets, catalog owners, and entity selections directly within the UI. A regex pattern rejects malformed input but cannot show the user which organisations they may publish into or which groups exist; a hardcoded enum is accurate on the day it is written and stale thereafter; and parsing a free-text URL moves validation past the point where the user could have been corrected, so the failure surfaces mid-run.",
    referenceUrl: "https://backstage.io/docs/features/software-templates/builtin-actions#scaffolderextensions",
    tags: ["Form Customization","Form Customization","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_16;
