export const CNCF_CBA_QUESTIONS_15 = [
  {
    id: "cncf-cba-351",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling Infrastructure a Service Relies On: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Model the database as a `Component` with `spec.type: database` and link it with `spec.dependsOn`." },
      { id: 'B', text: "Note the database in `metadata.annotations` and let the cloud provider's own inventory hold the dependency graph, exporting it periodically for review." },
      { id: 'C', text: "Declare the database with `spec.subcomponentOf` on the service that connects to it, so the two appear together in the catalog." },
      { id: 'D', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph. A `Component` represents software a team builds and runs, so filing infrastructure there distorts every count and ownership view that filters on components; a cloud inventory knows the database exists but not which service would break if it went down; and `subcomponentOf` asserts the database is part of the service rather than something it depends upon.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities","Resource Entities","Enterprise Portal"]
  },
  {
    id: "cncf-cba-352",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling Infrastructure a Service Relies On: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." },
      { id: 'B', text: "Declare the database with `spec.subcomponentOf` on the service that connects to it, so the two appear together in the catalog." },
      { id: 'C', text: "Note the database in `metadata.annotations` and let the cloud provider's own inventory hold the dependency graph, exporting it periodically for review." },
      { id: 'D', text: "Model the database as a `Component` with `spec.type: database` and link it with `spec.dependsOn`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph. A `Component` represents software a team builds and runs, so filing infrastructure there distorts every count and ownership view that filters on components; a cloud inventory knows the database exists but not which service would break if it went down; and `subcomponentOf` asserts the database is part of the service rather than something it depends upon.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities","Resource Entities","High Scale Catalog"]
  },
  {
    id: "cncf-cba-353",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling Infrastructure a Service Relies On: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Model the database as a `Component` with `spec.type: database` and link it with `spec.dependsOn`." },
      { id: 'B', text: "Declare the database with `spec.subcomponentOf` on the service that connects to it, so the two appear together in the catalog." },
      { id: 'C', text: "Note the database in `metadata.annotations` and let the cloud provider's own inventory hold the dependency graph, exporting it periodically for review." },
      { id: 'D', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph. A `Component` represents software a team builds and runs, so filing infrastructure there distorts every count and ownership view that filters on components; a cloud inventory knows the database exists but not which service would break if it went down; and `subcomponentOf` asserts the database is part of the service rather than something it depends upon.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities","Resource Entities","Security And Governance"]
  },
  {
    id: "cncf-cba-354",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling Infrastructure a Service Relies On: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." },
      { id: 'B', text: "Model the database as a `Component` with `spec.type: database` and link it with `spec.dependsOn`." },
      { id: 'C', text: "Note the database in `metadata.annotations` and let the cloud provider's own inventory hold the dependency graph, exporting it periodically for review." },
      { id: 'D', text: "Declare the database with `spec.subcomponentOf` on the service that connects to it, so the two appear together in the catalog." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph. A `Component` represents software a team builds and runs, so filing infrastructure there distorts every count and ownership view that filters on components; a cloud inventory knows the database exists but not which service would break if it went down; and `subcomponentOf` asserts the database is part of the service rather than something it depends upon.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities","Resource Entities","Developer Onboarding"]
  },
  {
    id: "cncf-cba-355",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling Infrastructure a Service Relies On: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." },
      { id: 'B', text: "Model the database as a `Component` with `spec.type: database` and link it with `spec.dependsOn`." },
      { id: 'C', text: "Note the database in `metadata.annotations` and let the cloud provider's own inventory hold the dependency graph, exporting it periodically for review." },
      { id: 'D', text: "Declare the database with `spec.subcomponentOf` on the service that connects to it, so the two appear together in the catalog." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph. A `Component` represents software a team builds and runs, so filing infrastructure there distorts every count and ownership view that filters on components; a cloud inventory knows the database exists but not which service would break if it went down; and `subcomponentOf` asserts the database is part of the service rather than something it depends upon.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities","Resource Entities","Resilience And Operations"]
  },
  {
    id: "cncf-cba-356",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Onboarding Repositories Without Manual Steps: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "List every repository's `catalog-info.yaml` URL individually under `catalog.locations` in `app-config.yaml`, one entry per service." },
      { id: 'B', text: "Create one `Location` entity per repository and commit them all into a single central catalog repository." },
      { id: 'C', text: "Register each repository by hand through the portal's 'Register Existing Component' form." },
      { id: 'D', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components. Listing each URL in the config means a config change and a redeploy for every new repository; a central repository of Location entities has the same problem one step removed, and it puts the platform team in the path of every team's onboarding; and manual registration through the UI leaves no record in version control of why an entity exists.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities","Location Entities","Enterprise Portal"]
  },
  {
    id: "cncf-cba-357",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Onboarding Repositories Without Manual Steps: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "List every repository's `catalog-info.yaml` URL individually under `catalog.locations` in `app-config.yaml`, one entry per service." },
      { id: 'B', text: "Register each repository by hand through the portal's 'Register Existing Component' form." },
      { id: 'C', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." },
      { id: 'D', text: "Create one `Location` entity per repository and commit them all into a single central catalog repository." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components. Listing each URL in the config means a config change and a redeploy for every new repository; a central repository of Location entities has the same problem one step removed, and it puts the platform team in the path of every team's onboarding; and manual registration through the UI leaves no record in version control of why an entity exists.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities","Location Entities","High Scale Catalog"]
  },
  {
    id: "cncf-cba-358",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Onboarding Repositories Without Manual Steps: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Create one `Location` entity per repository and commit them all into a single central catalog repository." },
      { id: 'B', text: "List every repository's `catalog-info.yaml` URL individually under `catalog.locations` in `app-config.yaml`, one entry per service." },
      { id: 'C', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." },
      { id: 'D', text: "Register each repository by hand through the portal's 'Register Existing Component' form." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components. Listing each URL in the config means a config change and a redeploy for every new repository; a central repository of Location entities has the same problem one step removed, and it puts the platform team in the path of every team's onboarding; and manual registration through the UI leaves no record in version control of why an entity exists.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities","Location Entities","Security And Governance"]
  },
  {
    id: "cncf-cba-359",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Onboarding Repositories Without Manual Steps: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." },
      { id: 'B', text: "Register each repository by hand through the portal's 'Register Existing Component' form." },
      { id: 'C', text: "List every repository's `catalog-info.yaml` URL individually under `catalog.locations` in `app-config.yaml`, one entry per service." },
      { id: 'D', text: "Create one `Location` entity per repository and commit them all into a single central catalog repository." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components. Listing each URL in the config means a config change and a redeploy for every new repository; a central repository of Location entities has the same problem one step removed, and it puts the platform team in the path of every team's onboarding; and manual registration through the UI leaves no record in version control of why an entity exists.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities","Location Entities","Developer Onboarding"]
  },
  {
    id: "cncf-cba-360",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Onboarding Repositories Without Manual Steps: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "List every repository's `catalog-info.yaml` URL individually under `catalog.locations` in `app-config.yaml`, one entry per service." },
      { id: 'B', text: "Register each repository by hand through the portal's 'Register Existing Component' form." },
      { id: 'C', text: "Create one `Location` entity per repository and commit them all into a single central catalog repository." },
      { id: 'D', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components. Listing each URL in the config means a config change and a redeploy for every new repository; a central repository of Location entities has the same problem one step removed, and it puts the platform team in the path of every team's onboarding; and manual registration through the UI leaves no record in version control of why an entity exists.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities","Location Entities","Resilience And Operations"]
  },
  {
    id: "cncf-cba-361",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Enriching Entities as They Are Ingested: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Implement an `EntityProvider` that supplies the already-transformed entities to the catalog instead, refreshing them on a schedule that it owns." },
      { id: 'B', text: "Add a `catalog.rules` block to `app-config.yaml` to transform the entity fields during ingestion." },
      { id: 'C', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'D', text: "Update the rows in the catalog's `final_entities` table with custom values once ingestion has finished." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities. An `EntityProvider` decides which entities exist rather than enriching ones another source already produced, so it cannot annotate entities that arrive from repositories; `catalog.rules` controls which kinds a location is permitted to emit and performs no transformation; and writing to `final_entities` is undone on the next refresh, because the catalog rebuilds that table from the processing pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors","Catalog Processors","Enterprise Portal"]
  },
  {
    id: "cncf-cba-362",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Enriching Entities as They Are Ingested: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'B', text: "Update the rows in the catalog's `final_entities` table with custom values once ingestion has finished." },
      { id: 'C', text: "Add a `catalog.rules` block to `app-config.yaml` to transform the entity fields during ingestion." },
      { id: 'D', text: "Implement an `EntityProvider` that supplies the already-transformed entities to the catalog instead, refreshing them on a schedule that it owns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities. An `EntityProvider` decides which entities exist rather than enriching ones another source already produced, so it cannot annotate entities that arrive from repositories; `catalog.rules` controls which kinds a location is permitted to emit and performs no transformation; and writing to `final_entities` is undone on the next refresh, because the catalog rebuilds that table from the processing pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors","Catalog Processors","High Scale Catalog"]
  },
  {
    id: "cncf-cba-363",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Enriching Entities as They Are Ingested: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'B', text: "Update the rows in the catalog's `final_entities` table with custom values once ingestion has finished." },
      { id: 'C', text: "Implement an `EntityProvider` that supplies the already-transformed entities to the catalog instead, refreshing them on a schedule that it owns." },
      { id: 'D', text: "Add a `catalog.rules` block to `app-config.yaml` to transform the entity fields during ingestion." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities. An `EntityProvider` decides which entities exist rather than enriching ones another source already produced, so it cannot annotate entities that arrive from repositories; `catalog.rules` controls which kinds a location is permitted to emit and performs no transformation; and writing to `final_entities` is undone on the next refresh, because the catalog rebuilds that table from the processing pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors","Catalog Processors","Security And Governance"]
  },
  {
    id: "cncf-cba-364",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Enriching Entities as They Are Ingested: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Add a `catalog.rules` block to `app-config.yaml` to transform the entity fields during ingestion." },
      { id: 'B', text: "Update the rows in the catalog's `final_entities` table with custom values once ingestion has finished." },
      { id: 'C', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'D', text: "Implement an `EntityProvider` that supplies the already-transformed entities to the catalog instead, refreshing them on a schedule that it owns." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities. An `EntityProvider` decides which entities exist rather than enriching ones another source already produced, so it cannot annotate entities that arrive from repositories; `catalog.rules` controls which kinds a location is permitted to emit and performs no transformation; and writing to `final_entities` is undone on the next refresh, because the catalog rebuilds that table from the processing pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors","Catalog Processors","Developer Onboarding"]
  },
  {
    id: "cncf-cba-365",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Enriching Entities as They Are Ingested: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'B', text: "Update the rows in the catalog's `final_entities` table with custom values once ingestion has finished." },
      { id: 'C', text: "Add a `catalog.rules` block to `app-config.yaml` to transform the entity fields during ingestion." },
      { id: 'D', text: "Implement an `EntityProvider` that supplies the already-transformed entities to the catalog instead, refreshing them on a schedule that it owns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities. An `EntityProvider` decides which entities exist rather than enriching ones another source already produced, so it cannot annotate entities that arrive from repositories; `catalog.rules` controls which kinds a location is permitted to emit and performs no transformation; and writing to `final_entities` is undone on the next refresh, because the catalog rebuilds that table from the processing pipeline.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors","Catalog Processors","Resilience And Operations"]
  },
  {
    id: "cncf-cba-366",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Importing Thousands of Entities From an External Source: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Write a `CatalogProcessor` that emits the user entities from `postProcessEntity` on every refresh cycle, keyed off a single seed location entity." },
      { id: 'B', text: "Generate a `catalog-info.yaml` per user into a git repository and register it with a `Location` entity." },
      { id: 'C', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." },
      { id: 'D', text: "Insert the user entities straight into the catalog database tables from a scheduled SQL job." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks. A processor runs per entity as locations are refreshed, so it has no way to express that a user who disappeared upstream should be removed; a file per user works but turns an identity-provider sync into tens of thousands of commits; and direct SQL writes are overwritten whenever the catalog next reconciles, since providers own the entity set.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers","Entity Providers","Enterprise Portal"]
  },
  {
    id: "cncf-cba-367",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Importing Thousands of Entities From an External Source: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Write a `CatalogProcessor` that emits the user entities from `postProcessEntity` on every refresh cycle, keyed off a single seed location entity." },
      { id: 'B', text: "Insert the user entities straight into the catalog database tables from a scheduled SQL job." },
      { id: 'C', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." },
      { id: 'D', text: "Generate a `catalog-info.yaml` per user into a git repository and register it with a `Location` entity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks. A processor runs per entity as locations are refreshed, so it has no way to express that a user who disappeared upstream should be removed; a file per user works but turns an identity-provider sync into tens of thousands of commits; and direct SQL writes are overwritten whenever the catalog next reconciles, since providers own the entity set.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers","Entity Providers","High Scale Catalog"]
  },
  {
    id: "cncf-cba-368",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Importing Thousands of Entities From an External Source: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Insert the user entities straight into the catalog database tables from a scheduled SQL job." },
      { id: 'B', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." },
      { id: 'C', text: "Write a `CatalogProcessor` that emits the user entities from `postProcessEntity` on every refresh cycle, keyed off a single seed location entity." },
      { id: 'D', text: "Generate a `catalog-info.yaml` per user into a git repository and register it with a `Location` entity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks. A processor runs per entity as locations are refreshed, so it has no way to express that a user who disappeared upstream should be removed; a file per user works but turns an identity-provider sync into tens of thousands of commits; and direct SQL writes are overwritten whenever the catalog next reconciles, since providers own the entity set.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers","Entity Providers","Security And Governance"]
  },
  {
    id: "cncf-cba-369",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Importing Thousands of Entities From an External Source: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Insert the user entities straight into the catalog database tables from a scheduled SQL job." },
      { id: 'B', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." },
      { id: 'C', text: "Write a `CatalogProcessor` that emits the user entities from `postProcessEntity` on every refresh cycle, keyed off a single seed location entity." },
      { id: 'D', text: "Generate a `catalog-info.yaml` per user into a git repository and register it with a `Location` entity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks. A processor runs per entity as locations are refreshed, so it has no way to express that a user who disappeared upstream should be removed; a file per user works but turns an identity-provider sync into tens of thousands of commits; and direct SQL writes are overwritten whenever the catalog next reconciles, since providers own the entity set.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers","Entity Providers","Developer Onboarding"]
  },
  {
    id: "cncf-cba-370",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Importing Thousands of Entities From an External Source: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Generate a `catalog-info.yaml` per user into a git repository and register it with a `Location` entity." },
      { id: 'B', text: "Write a `CatalogProcessor` that emits the user entities from `postProcessEntity` on every refresh cycle, keyed off a single seed location entity." },
      { id: 'C', text: "Insert the user entities straight into the catalog database tables from a scheduled SQL job." },
      { id: 'D', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks. A processor runs per entity as locations are refreshed, so it has no way to express that a user who disappeared upstream should be removed; a file per user works but turns an identity-provider sync into tens of thousands of commits; and direct SQL writes are overwritten whenever the catalog next reconciles, since providers own the entity set.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers","Entity Providers","Resilience And Operations"]
  },
  {
    id: "cncf-cba-371",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Asking the Catalog a Filtered Question: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." },
      { id: 'B', text: "Call `getEntities()` with no filter and narrow the results in application code afterwards, caching the full response so that repeat queries avoid another round trip." },
      { id: 'C', text: "Call `getEntityByRef()` in a loop over a list of component names the caller already holds." },
      { id: 'D', text: "Query the catalog through its GraphQL endpoint with a filter on lifecycle and owner." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently. Fetching the whole catalog to filter locally transfers every entity on each call and grows with the organisation rather than the answer; looping over `getEntityByRef` requires knowing the names in advance, which is the question being asked; and the GraphQL endpoint is a separate optional plugin rather than part of the catalog client, so it is not available by default.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API","Catalog API","Enterprise Portal"]
  },
  {
    id: "cncf-cba-372",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Asking the Catalog a Filtered Question: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Call `getEntities()` with no filter and narrow the results in application code afterwards, caching the full response so that repeat queries avoid another round trip." },
      { id: 'B', text: "Query the catalog through its GraphQL endpoint with a filter on lifecycle and owner." },
      { id: 'C', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." },
      { id: 'D', text: "Call `getEntityByRef()` in a loop over a list of component names the caller already holds." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently. Fetching the whole catalog to filter locally transfers every entity on each call and grows with the organisation rather than the answer; looping over `getEntityByRef` requires knowing the names in advance, which is the question being asked; and the GraphQL endpoint is a separate optional plugin rather than part of the catalog client, so it is not available by default.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API","Catalog API","High Scale Catalog"]
  },
  {
    id: "cncf-cba-373",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Asking the Catalog a Filtered Question: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Call `getEntities()` with no filter and narrow the results in application code afterwards, caching the full response so that repeat queries avoid another round trip." },
      { id: 'B', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." },
      { id: 'C', text: "Query the catalog through its GraphQL endpoint with a filter on lifecycle and owner." },
      { id: 'D', text: "Call `getEntityByRef()` in a loop over a list of component names the caller already holds." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently. Fetching the whole catalog to filter locally transfers every entity on each call and grows with the organisation rather than the answer; looping over `getEntityByRef` requires knowing the names in advance, which is the question being asked; and the GraphQL endpoint is a separate optional plugin rather than part of the catalog client, so it is not available by default.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API","Catalog API","Security And Governance"]
  },
  {
    id: "cncf-cba-374",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Asking the Catalog a Filtered Question: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Query the catalog through its GraphQL endpoint with a filter on lifecycle and owner." },
      { id: 'B', text: "Call `getEntityByRef()` in a loop over a list of component names the caller already holds." },
      { id: 'C', text: "Call `getEntities()` with no filter and narrow the results in application code afterwards, caching the full response so that repeat queries avoid another round trip." },
      { id: 'D', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently. Fetching the whole catalog to filter locally transfers every entity on each call and grows with the organisation rather than the answer; looping over `getEntityByRef` requires knowing the names in advance, which is the question being asked; and the GraphQL endpoint is a separate optional plugin rather than part of the catalog client, so it is not available by default.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API","Catalog API","Developer Onboarding"]
  },
  {
    id: "cncf-cba-375",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Asking the Catalog a Filtered Question: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Call `getEntityByRef()` in a loop over a list of component names the caller already holds." },
      { id: 'B', text: "Query the catalog through its GraphQL endpoint with a filter on lifecycle and owner." },
      { id: 'C', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." },
      { id: 'D', text: "Call `getEntities()` with no filter and narrow the results in application code afterwards, caching the full response so that repeat queries avoid another round trip." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently. Fetching the whole catalog to filter locally transfers every entity on each call and grows with the organisation rather than the answer; looping over `getEntityByRef` requires knowing the names in advance, which is the question being asked; and the GraphQL endpoint is a separate optional plugin rather than part of the catalog client, so it is not available by default.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API","Catalog API","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_15;
