export const CNCF_CBA_QUESTIONS_15 = [
  {
    id: "cncf-cba-351",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Resource Entities and Infrastructure Dependencies: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Resource Entities to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Modeling databases, message queues, and cloud infrastructure via spec.dependsOn is under consideration.",
    options: [
      { id: 'A', text: "Model databases as frontend website Component entities." },
      { id: 'B', text: "Assume all applications connect exclusively to local temporary memory." },
      { id: 'C', text: "Bury database connection strings in obfuscated binary scripts without documentation." },
      { id: 'D', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities", "Resource Entities", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-352",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Resource Entities and Infrastructure Dependencies: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Resource Entities to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Modeling databases, message queues, and cloud infrastructure via spec.dependsOn is under consideration.",
    options: [
      { id: 'A', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." },
      { id: 'B', text: "Bury database connection strings in obfuscated binary scripts without documentation." },
      { id: 'C', text: "Assume all applications connect exclusively to local temporary memory." },
      { id: 'D', text: "Model databases as frontend website Component entities." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities", "Resource Entities", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-353",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Resource Entities and Infrastructure Dependencies: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Resource Entities to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Modeling databases, message queues, and cloud infrastructure via spec.dependsOn is under consideration.",
    options: [
      { id: 'A', text: "Model databases as frontend website Component entities." },
      { id: 'B', text: "Bury database connection strings in obfuscated binary scripts without documentation." },
      { id: 'C', text: "Assume all applications connect exclusively to local temporary memory." },
      { id: 'D', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities", "Resource Entities", "Security And Governance"]
  },
  {
    id: "cncf-cba-354",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Resource Entities and Infrastructure Dependencies: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Resource Entities to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Modeling databases, message queues, and cloud infrastructure via spec.dependsOn is under consideration.",
    options: [
      { id: 'A', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." },
      { id: 'B', text: "Model databases as frontend website Component entities." },
      { id: 'C', text: "Assume all applications connect exclusively to local temporary memory." },
      { id: 'D', text: "Bury database connection strings in obfuscated binary scripts without documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities", "Resource Entities", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-355",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Resource Entities and Infrastructure Dependencies: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Resource Entities to track which microservices depend on specific managed PostgreSQL databases, Redis clusters, or Kafka topics.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Modeling databases, message queues, and cloud infrastructure via spec.dependsOn is under consideration.",
    options: [
      { id: 'A', text: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`." },
      { id: 'B', text: "Model databases as frontend website Component entities." },
      { id: 'C', text: "Assume all applications connect exclusively to local temporary memory." },
      { id: 'D', text: "Bury database connection strings in obfuscated binary scripts without documentation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Declare infrastructure dependencies as `kind: Resource` (e.g., `spec.type: database`) and link components to them using `spec.dependsOn`. `Resource` entities model physical or virtual infrastructure assets (databases, Kafka topics, S3 buckets). Components reference resources they utilize via `spec.dependsOn`, visualizing operational blast radius and dependency chains in the portal graph.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-resource",
    tags: ["Resource Entities", "Resource Entities", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-356",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Location Entities and Declarative Registration: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Location Entities to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? kind: Location referencing target git URLs to drive automated catalog ingestion is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to bypass catalog registration and rely on memory." },
      { id: 'B', text: "Manually copy and paste YAML contents into an interactive web form for every repository daily." },
      { id: 'C', text: "Store catalog files on offline USB thumb drives." },
      { id: 'D', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities", "Location Entities", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-357",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Location Entities and Declarative Registration: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Location Entities to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? kind: Location referencing target git URLs to drive automated catalog ingestion is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to bypass catalog registration and rely on memory." },
      { id: 'B', text: "Store catalog files on offline USB thumb drives." },
      { id: 'C', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." },
      { id: 'D', text: "Manually copy and paste YAML contents into an interactive web form for every repository daily." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities", "Location Entities", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-358",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Location Entities and Declarative Registration: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Location Entities to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? kind: Location referencing target git URLs to drive automated catalog ingestion is under consideration.",
    options: [
      { id: 'A', text: "Manually copy and paste YAML contents into an interactive web form for every repository daily." },
      { id: 'B', text: "Instruct developers to bypass catalog registration and rely on memory." },
      { id: 'C', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." },
      { id: 'D', text: "Store catalog files on offline USB thumb drives." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities", "Location Entities", "Security And Governance"]
  },
  {
    id: "cncf-cba-359",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Location Entities and Declarative Registration: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Location Entities to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? kind: Location referencing target git URLs to drive automated catalog ingestion is under consideration.",
    options: [
      { id: 'A', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." },
      { id: 'B', text: "Store catalog files on offline USB thumb drives." },
      { id: 'C', text: "Instruct developers to bypass catalog registration and rely on memory." },
      { id: 'D', text: "Manually copy and paste YAML contents into an interactive web form for every repository daily." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities", "Location Entities", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-360",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Location Entities and Declarative Registration: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Location Entities to register an entire GitHub organization containing hundreds of catalog descriptors without adding each repository manually.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? kind: Location referencing target git URLs to drive automated catalog ingestion is under consideration.",
    options: [
      { id: 'A', text: "Instruct developers to bypass catalog registration and rely on memory." },
      { id: 'B', text: "Store catalog files on offline USB thumb drives." },
      { id: 'C', text: "Manually copy and paste YAML contents into an interactive web form for every repository daily." },
      { id: 'D', text: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Define a `kind: Location` entity with `spec.type: url` and `spec.target` pointing to an organization-wide glob pattern. `Location` entities tell the catalog where to discover other entity descriptors. Using `spec.target` with globbing patterns (e.g., `https://github.com/my-org/*/blob/main/catalog-info.yaml`), the catalog automatically detects and synchronizes new components.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-location",
    tags: ["Location Entities", "Location Entities", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-361",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "CatalogProcessor Ingestion Pipeline: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Catalog Processors to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? The readLocation, preProcessEntity, validateEntityId, and postProcessEntity lifecycle is under consideration.",
    options: [
      { id: 'A', text: "Bypass the ingestion pipeline and inject unvalidated raw JSON into production SQL tables." },
      { id: 'B', text: "Disable catalog validation checks completely." },
      { id: 'C', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'D', text: "Modify entity files directly inside git repositories using unapproved automated force pushes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors", "Catalog Processors", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-362",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "CatalogProcessor Ingestion Pipeline: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Catalog Processors to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? The readLocation, preProcessEntity, validateEntityId, and postProcessEntity lifecycle is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'B', text: "Modify entity files directly inside git repositories using unapproved automated force pushes." },
      { id: 'C', text: "Disable catalog validation checks completely." },
      { id: 'D', text: "Bypass the ingestion pipeline and inject unvalidated raw JSON into production SQL tables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors", "Catalog Processors", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-363",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "CatalogProcessor Ingestion Pipeline: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Catalog Processors to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? The readLocation, preProcessEntity, validateEntityId, and postProcessEntity lifecycle is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'B', text: "Modify entity files directly inside git repositories using unapproved automated force pushes." },
      { id: 'C', text: "Bypass the ingestion pipeline and inject unvalidated raw JSON into production SQL tables." },
      { id: 'D', text: "Disable catalog validation checks completely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors", "Catalog Processors", "Security And Governance"]
  },
  {
    id: "cncf-cba-364",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "CatalogProcessor Ingestion Pipeline: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Catalog Processors to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? The readLocation, preProcessEntity, validateEntityId, and postProcessEntity lifecycle is under consideration.",
    options: [
      { id: 'A', text: "Disable catalog validation checks completely." },
      { id: 'B', text: "Modify entity files directly inside git repositories using unapproved automated force pushes." },
      { id: 'C', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'D', text: "Bypass the ingestion pipeline and inject unvalidated raw JSON into production SQL tables." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors", "Catalog Processors", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-365",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "CatalogProcessor Ingestion Pipeline: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Catalog Processors to validate custom corporate tags and inject automated security compliance metadata during catalog file parsing.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? The readLocation, preProcessEntity, validateEntityId, and postProcessEntity lifecycle is under consideration.",
    options: [
      { id: 'A', text: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion." },
      { id: 'B', text: "Modify entity files directly inside git repositories using unapproved automated force pushes." },
      { id: 'C', text: "Disable catalog validation checks completely." },
      { id: 'D', text: "Bypass the ingestion pipeline and inject unvalidated raw JSON into production SQL tables." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Implement a custom `CatalogProcessor` that hooks into `preProcessEntity` and `postProcessEntity` during catalog ingestion. Catalog ingestion operates through a processor pipeline (`CatalogProcessor`). Processors implement lifecycle hooks (`readLocation`, `preProcessEntity`, `validateEntityId`, `postProcessEntity`) to read URLs, validate schemas, parse relations, and enrich entities.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-processors",
    tags: ["Catalog Processors", "Catalog Processors", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-366",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Providers vs Catalog Processors: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Entity Providers to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Delta and full mutation ingestion via EntityProvider for high-scale external providers is under consideration.",
    options: [
      { id: 'A', text: "Disable user authentication and ownership validation." },
      { id: 'B', text: "Instruct human administrators to type 50,000 user records into a spreadsheet." },
      { id: 'C', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." },
      { id: 'D', text: "Use an inefficient legacy processor that issues 50,000 sequential HTTP requests on every refresh cycle." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers", "Entity Providers", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-367",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Providers vs Catalog Processors: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Entity Providers to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Delta and full mutation ingestion via EntityProvider for high-scale external providers is under consideration.",
    options: [
      { id: 'A', text: "Disable user authentication and ownership validation." },
      { id: 'B', text: "Use an inefficient legacy processor that issues 50,000 sequential HTTP requests on every refresh cycle." },
      { id: 'C', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." },
      { id: 'D', text: "Instruct human administrators to type 50,000 user records into a spreadsheet." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers", "Entity Providers", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-368",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Providers vs Catalog Processors: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Entity Providers to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Delta and full mutation ingestion via EntityProvider for high-scale external providers is under consideration.",
    options: [
      { id: 'A', text: "Use an inefficient legacy processor that issues 50,000 sequential HTTP requests on every refresh cycle." },
      { id: 'B', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." },
      { id: 'C', text: "Disable user authentication and ownership validation." },
      { id: 'D', text: "Instruct human administrators to type 50,000 user records into a spreadsheet." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers", "Entity Providers", "Security And Governance"]
  },
  {
    id: "cncf-cba-369",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Providers vs Catalog Processors: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Entity Providers to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Delta and full mutation ingestion via EntityProvider for high-scale external providers is under consideration.",
    options: [
      { id: 'A', text: "Use an inefficient legacy processor that issues 50,000 sequential HTTP requests on every refresh cycle." },
      { id: 'B', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." },
      { id: 'C', text: "Disable user authentication and ownership validation." },
      { id: 'D', text: "Instruct human administrators to type 50,000 user records into a spreadsheet." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers", "Entity Providers", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-370",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Entity Providers vs Catalog Processors: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Entity Providers to synchronize 50,000 users and teams from an enterprise Okta or Workday directory into the catalog without overwhelming the database.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Delta and full mutation ingestion via EntityProvider for high-scale external providers is under consideration.",
    options: [
      { id: 'A', text: "Instruct human administrators to type 50,000 user records into a spreadsheet." },
      { id: 'B', text: "Disable user authentication and ownership validation." },
      { id: 'C', text: "Use an inefficient legacy processor that issues 50,000 sequential HTTP requests on every refresh cycle." },
      { id: 'D', text: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Implement an `EntityProvider` that issues batch mutations using `applyMutation({ type: 'full', entities })` or delta updates. `EntityProvider` is designed for high-scale ingestion from external systems (GitHub, Okta, AWS). Unlike pull-based processors, providers push batches of entities using atomic mutations (`full` or `delta`), avoiding individual entity read bottlenecks.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",
    tags: ["Entity Providers", "Entity Providers", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-371",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog API Client and Backend Querying: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Catalog API to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Querying entities, filters, and relations programmatically using CatalogClient is under consideration.",
    options: [
      { id: 'A', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." },
      { id: 'B', text: "Connect directly to the production SQL database with root credentials bypassing the API." },
      { id: 'C', text: "Hardcode static lists of service names inside client scripts." },
      { id: 'D', text: "Write raw regex scripts that scrape the HTML presentation markup of the portal website." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API", "Catalog API", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-372",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog API Client and Backend Querying: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Catalog API to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Querying entities, filters, and relations programmatically using CatalogClient is under consideration.",
    options: [
      { id: 'A', text: "Connect directly to the production SQL database with root credentials bypassing the API." },
      { id: 'B', text: "Write raw regex scripts that scrape the HTML presentation markup of the portal website." },
      { id: 'C', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." },
      { id: 'D', text: "Hardcode static lists of service names inside client scripts." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API", "Catalog API", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-373",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog API Client and Backend Querying: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Catalog API to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Querying entities, filters, and relations programmatically using CatalogClient is under consideration.",
    options: [
      { id: 'A', text: "Connect directly to the production SQL database with root credentials bypassing the API." },
      { id: 'B', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." },
      { id: 'C', text: "Write raw regex scripts that scrape the HTML presentation markup of the portal website." },
      { id: 'D', text: "Hardcode static lists of service names inside client scripts." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API", "Catalog API", "Security And Governance"]
  },
  {
    id: "cncf-cba-374",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog API Client and Backend Querying: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Catalog API to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Querying entities, filters, and relations programmatically using CatalogClient is under consideration.",
    options: [
      { id: 'A', text: "Write raw regex scripts that scrape the HTML presentation markup of the portal website." },
      { id: 'B', text: "Hardcode static lists of service names inside client scripts." },
      { id: 'C', text: "Connect directly to the production SQL database with root credentials bypassing the API." },
      { id: 'D', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API", "Catalog API", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-375",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog API Client and Backend Querying: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Catalog API to retrieve all active production services owned by a specific engineering team from an external automated script or plugin.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Querying entities, filters, and relations programmatically using CatalogClient is under consideration.",
    options: [
      { id: 'A', text: "Hardcode static lists of service names inside client scripts." },
      { id: 'B', text: "Write raw regex scripts that scrape the HTML presentation markup of the portal website." },
      { id: 'C', text: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`." },
      { id: 'D', text: "Connect directly to the production SQL database with root credentials bypassing the API." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Use `CatalogClient` to query `getEntities({ filter: { 'spec.lifecycle': 'production', 'spec.owner': 'group:default/team-a' } })`. The `@backstage/catalog-client` package exports `CatalogClient`. It provides type-safe methods (`getEntities`, `getEntityByRef`) accepting rich facet filters (`filter: { 'kind': 'Component', 'spec.type': 'service' }`) to query catalog data efficiently.",
    referenceUrl: "https://backstage.io/docs/reference/catalog-client.catalogclient",
    tags: ["Catalog API", "Catalog API", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_15;
