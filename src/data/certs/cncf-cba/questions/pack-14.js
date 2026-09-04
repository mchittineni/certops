export const CNCF_CBA_QUESTIONS_14 = [
  {
    id: "cncf-cba-326",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Backstage Core Entity Model and System Hierarchy: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Catalog Model to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Domain, System, Component, API, and Resource entity relationships is under consideration.",
    options: [
      { id: 'A', text: "Delete all metadata files once an application is deployed to production." },
      { id: 'B', text: "Model all services as flat, disconnected text strings without any relational hierarchy." },
      { id: 'C', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'D', text: "Combine all database tables, frontend apps, and microservices into a single generic Component entity." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model", "System Model", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-327",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Backstage Core Entity Model and System Hierarchy: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Catalog Model to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Domain, System, Component, API, and Resource entity relationships is under consideration.",
    options: [
      { id: 'A', text: "Delete all metadata files once an application is deployed to production." },
      { id: 'B', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'C', text: "Model all services as flat, disconnected text strings without any relational hierarchy." },
      { id: 'D', text: "Combine all database tables, frontend apps, and microservices into a single generic Component entity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model", "System Model", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-328",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Backstage Core Entity Model and System Hierarchy: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Catalog Model to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Domain, System, Component, API, and Resource entity relationships is under consideration.",
    options: [
      { id: 'A', text: "Model all services as flat, disconnected text strings without any relational hierarchy." },
      { id: 'B', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'C', text: "Combine all database tables, frontend apps, and microservices into a single generic Component entity." },
      { id: 'D', text: "Delete all metadata files once an application is deployed to production." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model", "System Model", "Security And Governance"]
  },
  {
    id: "cncf-cba-329",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Backstage Core Entity Model and System Hierarchy: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Catalog Model to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Domain, System, Component, API, and Resource entity relationships is under consideration.",
    options: [
      { id: 'A', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'B', text: "Combine all database tables, frontend apps, and microservices into a single generic Component entity." },
      { id: 'C', text: "Delete all metadata files once an application is deployed to production." },
      { id: 'D', text: "Model all services as flat, disconnected text strings without any relational hierarchy." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model", "System Model", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-330",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Backstage Core Entity Model and System Hierarchy: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Catalog Model to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Domain, System, Component, API, and Resource entity relationships is under consideration.",
    options: [
      { id: 'A', text: "Combine all database tables, frontend apps, and microservices into a single generic Component entity." },
      { id: 'B', text: "Delete all metadata files once an application is deployed to production." },
      { id: 'C', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'D', text: "Model all services as flat, disconnected text strings without any relational hierarchy." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model", "System Model", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-331",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog Entity Definition Schema (catalog-info.yaml): Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Entity Definition to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? apiVersion backstage.io/v1alpha1 specification with metadata, spec, and relations is under consideration.",
    options: [
      { id: 'A', text: "Commit an unformatted binary blob to an untracked local git branch." },
      { id: 'B', text: "Send an email to the platform team with the server IP address." },
      { id: 'C', text: "Hardcode entity configurations directly into the Backstage core source code." },
      { id: 'D', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system).",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition", "Entity Schema", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-332",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog Entity Definition Schema (catalog-info.yaml): High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Entity Definition to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? apiVersion backstage.io/v1alpha1 specification with metadata, spec, and relations is under consideration.",
    options: [
      { id: 'A', text: "Commit an unformatted binary blob to an untracked local git branch." },
      { id: 'B', text: "Send an email to the platform team with the server IP address." },
      { id: 'C', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." },
      { id: 'D', text: "Hardcode entity configurations directly into the Backstage core source code." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system).",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition", "Entity Schema", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-333",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog Entity Definition Schema (catalog-info.yaml): Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Entity Definition to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? apiVersion backstage.io/v1alpha1 specification with metadata, spec, and relations is under consideration.",
    options: [
      { id: 'A', text: "Commit an unformatted binary blob to an untracked local git branch." },
      { id: 'B', text: "Hardcode entity configurations directly into the Backstage core source code." },
      { id: 'C', text: "Send an email to the platform team with the server IP address." },
      { id: 'D', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system).",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition", "Entity Schema", "Security And Governance"]
  },
  {
    id: "cncf-cba-334",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog Entity Definition Schema (catalog-info.yaml): Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Entity Definition to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? apiVersion backstage.io/v1alpha1 specification with metadata, spec, and relations is under consideration.",
    options: [
      { id: 'A', text: "Commit an unformatted binary blob to an untracked local git branch." },
      { id: 'B', text: "Hardcode entity configurations directly into the Backstage core source code." },
      { id: 'C', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." },
      { id: 'D', text: "Send an email to the platform team with the server IP address." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system).",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition", "Entity Schema", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-335",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Catalog Entity Definition Schema (catalog-info.yaml): Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Entity Definition to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? apiVersion backstage.io/v1alpha1 specification with metadata, spec, and relations is under consideration.",
    options: [
      { id: 'A', text: "Send an email to the platform team with the server IP address." },
      { id: 'B', text: "Hardcode entity configurations directly into the Backstage core source code." },
      { id: 'C', text: "Commit an unformatted binary blob to an untracked local git branch." },
      { id: 'D', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system).",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition", "Entity Schema", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-336",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Component Kinds, Types, and Lifecycles: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Component Specs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? spec.type (service, website, library) and spec.lifecycle (experimental, production, deprecated) is under consideration.",
    options: [
      { id: 'A', text: "Delete experimental components from git repositories entirely." },
      { id: 'B', text: "Label all software components with identical generic placeholder text." },
      { id: 'C', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." },
      { id: 'D', text: "Omit the spec block entirely to allow the catalog to guess component attributes." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs", "Component Specs", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-337",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Component Kinds, Types, and Lifecycles: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Component Specs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? spec.type (service, website, library) and spec.lifecycle (experimental, production, deprecated) is under consideration.",
    options: [
      { id: 'A', text: "Omit the spec block entirely to allow the catalog to guess component attributes." },
      { id: 'B', text: "Delete experimental components from git repositories entirely." },
      { id: 'C', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." },
      { id: 'D', text: "Label all software components with identical generic placeholder text." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs", "Component Specs", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-338",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Component Kinds, Types, and Lifecycles: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Component Specs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? spec.type (service, website, library) and spec.lifecycle (experimental, production, deprecated) is under consideration.",
    options: [
      { id: 'A', text: "Delete experimental components from git repositories entirely." },
      { id: 'B', text: "Label all software components with identical generic placeholder text." },
      { id: 'C', text: "Omit the spec block entirely to allow the catalog to guess component attributes." },
      { id: 'D', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs", "Component Specs", "Security And Governance"]
  },
  {
    id: "cncf-cba-339",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Component Kinds, Types, and Lifecycles: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Component Specs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? spec.type (service, website, library) and spec.lifecycle (experimental, production, deprecated) is under consideration.",
    options: [
      { id: 'A', text: "Label all software components with identical generic placeholder text." },
      { id: 'B', text: "Omit the spec block entirely to allow the catalog to guess component attributes." },
      { id: 'C', text: "Delete experimental components from git repositories entirely." },
      { id: 'D', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs", "Component Specs", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-340",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Component Kinds, Types, and Lifecycles: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Component Specs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? spec.type (service, website, library) and spec.lifecycle (experimental, production, deprecated) is under consideration.",
    options: [
      { id: 'A', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." },
      { id: 'B', text: "Omit the spec block entirely to allow the catalog to guess component attributes." },
      { id: 'C', text: "Label all software components with identical generic placeholder text." },
      { id: 'D', text: "Delete experimental components from git repositories entirely." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs", "Component Specs", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-341",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Ownership Modeling: User and Group Entities: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Ownership to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Mapping spec.owner to Group or User entities for accountability and triage is under consideration.",
    options: [
      { id: 'A', text: "Leave the owner field blank to encourage shared responsibility without accountability." },
      { id: 'B', text: "Assign all enterprise software to the CEO's personal User entity." },
      { id: 'C', text: "Assign ownership to an anonymous personal email address with no catalog entity record." },
      { id: 'D', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership", "Ownership Modeling", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-342",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Ownership Modeling: User and Group Entities: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Ownership to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Mapping spec.owner to Group or User entities for accountability and triage is under consideration.",
    options: [
      { id: 'A', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." },
      { id: 'B', text: "Assign ownership to an anonymous personal email address with no catalog entity record." },
      { id: 'C', text: "Assign all enterprise software to the CEO's personal User entity." },
      { id: 'D', text: "Leave the owner field blank to encourage shared responsibility without accountability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership", "Ownership Modeling", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-343",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Ownership Modeling: User and Group Entities: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Ownership to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Mapping spec.owner to Group or User entities for accountability and triage is under consideration.",
    options: [
      { id: 'A', text: "Leave the owner field blank to encourage shared responsibility without accountability." },
      { id: 'B', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." },
      { id: 'C', text: "Assign all enterprise software to the CEO's personal User entity." },
      { id: 'D', text: "Assign ownership to an anonymous personal email address with no catalog entity record." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership", "Ownership Modeling", "Security And Governance"]
  },
  {
    id: "cncf-cba-344",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Ownership Modeling: User and Group Entities: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Ownership to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Mapping spec.owner to Group or User entities for accountability and triage is under consideration.",
    options: [
      { id: 'A', text: "Assign ownership to an anonymous personal email address with no catalog entity record." },
      { id: 'B', text: "Assign all enterprise software to the CEO's personal User entity." },
      { id: 'C', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." },
      { id: 'D', text: "Leave the owner field blank to encourage shared responsibility without accountability." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership", "Ownership Modeling", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-345",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Ownership Modeling: User and Group Entities: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Ownership to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Mapping spec.owner to Group or User entities for accountability and triage is under consideration.",
    options: [
      { id: 'A', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." },
      { id: 'B', text: "Assign ownership to an anonymous personal email address with no catalog entity record." },
      { id: 'C', text: "Assign all enterprise software to the CEO's personal User entity." },
      { id: 'D', text: "Leave the owner field blank to encourage shared responsibility without accountability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership", "Ownership Modeling", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-346",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "API Entities and Interface Specifications: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates API Entities to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Modeling OpenAPI, AsyncAPI, and gRPC definitions with providesApis and consumesApis is under consideration.",
    options: [
      { id: 'A', text: "Store API schemas in zipped Word documents emailed to team leads." },
      { id: 'B', text: "Force developers to read raw binary network packets to deduce API endpoints." },
      { id: 'C', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." },
      { id: 'D', text: "Delete interface specifications after completing initial code compilation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities", "API Entities", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-347",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "API Entities and Interface Specifications: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates API Entities to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Modeling OpenAPI, AsyncAPI, and gRPC definitions with providesApis and consumesApis is under consideration.",
    options: [
      { id: 'A', text: "Delete interface specifications after completing initial code compilation." },
      { id: 'B', text: "Store API schemas in zipped Word documents emailed to team leads." },
      { id: 'C', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." },
      { id: 'D', text: "Force developers to read raw binary network packets to deduce API endpoints." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities", "API Entities", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-348",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "API Entities and Interface Specifications: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates API Entities to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Modeling OpenAPI, AsyncAPI, and gRPC definitions with providesApis and consumesApis is under consideration.",
    options: [
      { id: 'A', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." },
      { id: 'B', text: "Store API schemas in zipped Word documents emailed to team leads." },
      { id: 'C', text: "Delete interface specifications after completing initial code compilation." },
      { id: 'D', text: "Force developers to read raw binary network packets to deduce API endpoints." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities", "API Entities", "Security And Governance"]
  },
  {
    id: "cncf-cba-349",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "API Entities and Interface Specifications: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates API Entities to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Modeling OpenAPI, AsyncAPI, and gRPC definitions with providesApis and consumesApis is under consideration.",
    options: [
      { id: 'A', text: "Force developers to read raw binary network packets to deduce API endpoints." },
      { id: 'B', text: "Delete interface specifications after completing initial code compilation." },
      { id: 'C', text: "Store API schemas in zipped Word documents emailed to team leads." },
      { id: 'D', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities", "API Entities", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-350",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "API Entities and Interface Specifications: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates API Entities to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Modeling OpenAPI, AsyncAPI, and gRPC definitions with providesApis and consumesApis is under consideration.",
    options: [
      { id: 'A', text: "Store API schemas in zipped Word documents emailed to team leads." },
      { id: 'B', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." },
      { id: 'C', text: "Force developers to read raw binary network packets to deduce API endpoints." },
      { id: 'D', text: "Delete interface specifications after completing initial code compilation." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities", "API Entities", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_14;
