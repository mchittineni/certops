export const CNCF_CBA_QUESTIONS_14 = [
  {
    id: "cncf-cba-326",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Expressing Architecture in the Catalog: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Model everything as a `Component` and express the grouping through `metadata.tags` instead." },
      { id: 'B', text: "Create a `Group` entity for each business area and attach the components to it through `spec.owner`." },
      { id: 'C', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'D', text: "Nest the components several levels deep with `spec.subcomponentOf` rather than declaring systems at all, letting the hierarchy emerge from those links." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context. Tags are free-form strings that build no relations, so nothing can be traversed from them; `spec.owner` records who is accountable for a component, which is a different axis from which system it belongs to and leaves cross-team systems unmodelled; and `subcomponentOf` describes a part-of relationship inside one component rather than the system boundary that groups several.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model","System Model","Enterprise Portal"]
  },
  {
    id: "cncf-cba-327",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Expressing Architecture in the Catalog: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Model everything as a `Component` and express the grouping through `metadata.tags` instead." },
      { id: 'B', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'C', text: "Create a `Group` entity for each business area and attach the components to it through `spec.owner`." },
      { id: 'D', text: "Nest the components several levels deep with `spec.subcomponentOf` rather than declaring systems at all, letting the hierarchy emerge from those links." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context. Tags are free-form strings that build no relations, so nothing can be traversed from them; `spec.owner` records who is accountable for a component, which is a different axis from which system it belongs to and leaves cross-team systems unmodelled; and `subcomponentOf` describes a part-of relationship inside one component rather than the system boundary that groups several.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model","System Model","High Scale Catalog"]
  },
  {
    id: "cncf-cba-328",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Expressing Architecture in the Catalog: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Create a `Group` entity for each business area and attach the components to it through `spec.owner`." },
      { id: 'B', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'C', text: "Nest the components several levels deep with `spec.subcomponentOf` rather than declaring systems at all, letting the hierarchy emerge from those links." },
      { id: 'D', text: "Model everything as a `Component` and express the grouping through `metadata.tags` instead." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context. Tags are free-form strings that build no relations, so nothing can be traversed from them; `spec.owner` records who is accountable for a component, which is a different axis from which system it belongs to and leaves cross-team systems unmodelled; and `subcomponentOf` describes a part-of relationship inside one component rather than the system boundary that groups several.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model","System Model","Security And Governance"]
  },
  {
    id: "cncf-cba-329",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Expressing Architecture in the Catalog: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'B', text: "Nest the components several levels deep with `spec.subcomponentOf` rather than declaring systems at all, letting the hierarchy emerge from those links." },
      { id: 'C', text: "Model everything as a `Component` and express the grouping through `metadata.tags` instead." },
      { id: 'D', text: "Create a `Group` entity for each business area and attach the components to it through `spec.owner`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context. Tags are free-form strings that build no relations, so nothing can be traversed from them; `spec.owner` records who is accountable for a component, which is a different axis from which system it belongs to and leaves cross-team systems unmodelled; and `subcomponentOf` describes a part-of relationship inside one component rather than the system boundary that groups several.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model","System Model","Developer Onboarding"]
  },
  {
    id: "cncf-cba-330",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Expressing Architecture in the Catalog: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to model a complex microservice ecosystem showing high-level business boundaries and constituent services.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Nest the components several levels deep with `spec.subcomponentOf` rather than declaring systems at all, letting the hierarchy emerge from those links." },
      { id: 'B', text: "Model everything as a `Component` and express the grouping through `metadata.tags` instead." },
      { id: 'C', text: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities." },
      { id: 'D', text: "Create a `Group` entity for each business area and attach the components to it through `spec.owner`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Define high-level `Domain` entities containing `System` entities, which encompass `Component`, `API`, and `Resource` entities. The Backstage Catalog establishes an ecosystem taxonomy: `Domain` groups related `System` entities; `System` groups constituent `Component` (services, apps), `API` (interfaces), and `Resource` (databases, queues) entities, creating clear architectural context. Tags are free-form strings that build no relations, so nothing can be traversed from them; `spec.owner` records who is accountable for a component, which is a different axis from which system it belongs to and leaves cross-team systems unmodelled; and `subcomponentOf` describes a part-of relationship inside one component rather than the system boundary that groups several.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/system-model",
    tags: ["Catalog Model","System Model","Resilience And Operations"]
  },
  {
    id: "cncf-cba-331",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Getting a Service Into the Catalog: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Register the component by POSTing the entity to the catalog REST API as part of the build pipeline." },
      { id: 'B', text: "Declare the entity inline in `app-config.yaml` beneath the `catalog.locations` block, keeping every service's metadata in one place." },
      { id: 'C', text: "Name the file `backstage.yaml` at the repository root and let the discovery processor find it by convention, keeping the same `metadata` and `spec` blocks inside it." },
      { id: 'D', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system). The catalog API serves entities but does not accept them as writes, because the catalog is a projection of what the locations declare; an inline entity in the config is real but moves ownership of the metadata away from the team that owns the code; and the discovery processors look for `catalog-info.yaml`, so a differently named file is simply never read.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition","Entity Schema","Enterprise Portal"]
  },
  {
    id: "cncf-cba-332",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Getting a Service Into the Catalog: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Register the component by POSTing the entity to the catalog REST API as part of the build pipeline." },
      { id: 'B', text: "Declare the entity inline in `app-config.yaml` beneath the `catalog.locations` block, keeping every service's metadata in one place." },
      { id: 'C', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." },
      { id: 'D', text: "Name the file `backstage.yaml` at the repository root and let the discovery processor find it by convention, keeping the same `metadata` and `spec` blocks inside it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system). The catalog API serves entities but does not accept them as writes, because the catalog is a projection of what the locations declare; an inline entity in the config is real but moves ownership of the metadata away from the team that owns the code; and the discovery processors look for `catalog-info.yaml`, so a differently named file is simply never read.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition","Entity Schema","High Scale Catalog"]
  },
  {
    id: "cncf-cba-333",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Getting a Service Into the Catalog: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Register the component by POSTing the entity to the catalog REST API as part of the build pipeline." },
      { id: 'B', text: "Name the file `backstage.yaml` at the repository root and let the discovery processor find it by convention, keeping the same `metadata` and `spec` blocks inside it." },
      { id: 'C', text: "Declare the entity inline in `app-config.yaml` beneath the `catalog.locations` block, keeping every service's metadata in one place." },
      { id: 'D', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system). The catalog API serves entities but does not accept them as writes, because the catalog is a projection of what the locations declare; an inline entity in the config is real but moves ownership of the metadata away from the team that owns the code; and the discovery processors look for `catalog-info.yaml`, so a differently named file is simply never read.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition","Entity Schema","Security And Governance"]
  },
  {
    id: "cncf-cba-334",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Getting a Service Into the Catalog: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Register the component by POSTing the entity to the catalog REST API as part of the build pipeline." },
      { id: 'B', text: "Name the file `backstage.yaml` at the repository root and let the discovery processor find it by convention, keeping the same `metadata` and `spec` blocks inside it." },
      { id: 'C', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." },
      { id: 'D', text: "Declare the entity inline in `app-config.yaml` beneath the `catalog.locations` block, keeping every service's metadata in one place." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system). The catalog API serves entities but does not accept them as writes, because the catalog is a projection of what the locations declare; an inline entity in the config is real but moves ownership of the metadata away from the team that owns the code; and the discovery processors look for `catalog-info.yaml`, so a differently named file is simply never read.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition","Entity Schema","Developer Onboarding"]
  },
  {
    id: "cncf-cba-335",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Getting a Service Into the Catalog: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to register a microservice into the Backstage catalog alongside its source code repository declaratively.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Declare the entity inline in `app-config.yaml` beneath the `catalog.locations` block, keeping every service's metadata in one place." },
      { id: 'B', text: "Name the file `backstage.yaml` at the repository root and let the discovery processor find it by convention, keeping the same `metadata` and `spec` blocks inside it." },
      { id: 'C', text: "Register the component by POSTing the entity to the catalog REST API as part of the build pipeline." },
      { id: 'D', text: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create a `catalog-info.yaml` in the repository root with `apiVersion: backstage.io/v1alpha1`, `kind: Component`, and a valid `metadata` and `spec` block. Software Catalog metadata is defined declaratively using `catalog-info.yaml` files adhering to `apiVersion: backstage.io/v1alpha1`. Each file specifies `kind`, `metadata` (name, annotations, tags), and `spec` (type, lifecycle, owner, system). The catalog API serves entities but does not accept them as writes, because the catalog is a projection of what the locations declare; an inline entity in the config is real but moves ownership of the metadata away from the team that owns the code; and the discovery processors look for `catalog-info.yaml`, so a differently named file is simply never read.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format",
    tags: ["Entity Definition","Entity Schema","Resilience And Operations"]
  },
  {
    id: "cncf-cba-336",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording What a Component Is and Its Maturity: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Record the type and lifecycle as `metadata.tags`, for instance `service` and `production`, so both appear as chips on the entity page." },
      { id: 'B', text: "Set `spec.type: production` and `spec.lifecycle: service`, following the order the portal displays them in." },
      { id: 'C', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." },
      { id: 'D', text: "Mark the experimental app as `spec.lifecycle: deprecated` so that it is hidden from the default catalog view until the team is ready to promote it." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status. Tags cannot be filtered on as typed fields, so the catalog's type and lifecycle facets stay empty; swapping the two values passes schema validation because both are free-form strings, which is precisely why the mistake survives to production and misleads every reader; and `deprecated` tells engineers to stop using something rather than that it is new.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs","Component Specs","Enterprise Portal"]
  },
  {
    id: "cncf-cba-337",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording What a Component Is and Its Maturity: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Mark the experimental app as `spec.lifecycle: deprecated` so that it is hidden from the default catalog view until the team is ready to promote it." },
      { id: 'B', text: "Record the type and lifecycle as `metadata.tags`, for instance `service` and `production`, so both appear as chips on the entity page." },
      { id: 'C', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." },
      { id: 'D', text: "Set `spec.type: production` and `spec.lifecycle: service`, following the order the portal displays them in." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status. Tags cannot be filtered on as typed fields, so the catalog's type and lifecycle facets stay empty; swapping the two values passes schema validation because both are free-form strings, which is precisely why the mistake survives to production and misleads every reader; and `deprecated` tells engineers to stop using something rather than that it is new.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs","Component Specs","High Scale Catalog"]
  },
  {
    id: "cncf-cba-338",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording What a Component Is and Its Maturity: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Record the type and lifecycle as `metadata.tags`, for instance `service` and `production`, so both appear as chips on the entity page." },
      { id: 'B', text: "Set `spec.type: production` and `spec.lifecycle: service`, following the order the portal displays them in." },
      { id: 'C', text: "Mark the experimental app as `spec.lifecycle: deprecated` so that it is hidden from the default catalog view until the team is ready to promote it." },
      { id: 'D', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status. Tags cannot be filtered on as typed fields, so the catalog's type and lifecycle facets stay empty; swapping the two values passes schema validation because both are free-form strings, which is precisely why the mistake survives to production and misleads every reader; and `deprecated` tells engineers to stop using something rather than that it is new.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs","Component Specs","Security And Governance"]
  },
  {
    id: "cncf-cba-339",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording What a Component Is and Its Maturity: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Set `spec.type: production` and `spec.lifecycle: service`, following the order the portal displays them in." },
      { id: 'B', text: "Mark the experimental app as `spec.lifecycle: deprecated` so that it is hidden from the default catalog view until the team is ready to promote it." },
      { id: 'C', text: "Record the type and lifecycle as `metadata.tags`, for instance `service` and `production`, so both appear as chips on the entity page." },
      { id: 'D', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status. Tags cannot be filtered on as typed fields, so the catalog's type and lifecycle facets stay empty; swapping the two values passes schema validation because both are free-form strings, which is precisely why the mistake survives to production and misleads every reader; and `deprecated` tells engineers to stop using something rather than that it is new.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs","Component Specs","Developer Onboarding"]
  },
  {
    id: "cncf-cba-340",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording What a Component Is and Its Maturity: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to distinguish an active production backend REST API service from an experimental client-side web application in the catalog.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app." },
      { id: 'B', text: "Mark the experimental app as `spec.lifecycle: deprecated` so that it is hidden from the default catalog view until the team is ready to promote it." },
      { id: 'C', text: "Set `spec.type: production` and `spec.lifecycle: service`, following the order the portal displays them in." },
      { id: 'D', text: "Record the type and lifecycle as `metadata.tags`, for instance `service` and `production`, so both appear as chips on the entity page." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.type: service` with `spec.lifecycle: production` for the backend API, and `spec.type: website` with `spec.lifecycle: experimental` for the app. Backstage `Component` entities categorize software via `spec.type` (e.g., `service`, `website`, `library`) and reflect operational maturity via `spec.lifecycle` (`experimental`, `production`, `deprecated`), giving engineers immediate visibility into component status. Tags cannot be filtered on as typed fields, so the catalog's type and lifecycle facets stay empty; swapping the two values passes schema validation because both are free-form strings, which is precisely why the mistake survives to production and misleads every reader; and `deprecated` tells engineers to stop using something rather than that it is new.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-component",
    tags: ["Component Specs","Component Specs","Resilience And Operations"]
  },
  {
    id: "cncf-cba-341",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording Who Is Accountable: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Point `spec.owner` at the `User` entity of the engineer who created the component." },
      { id: 'B', text: "Record the owning team in `metadata.annotations` under a custom `company.com/owner` key." },
      { id: 'C', text: "Set `spec.owner` to the plain team name `payments-team`, without the `group:default/` prefix that the catalog expects." },
      { id: 'D', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control. Naming an individual owner means the entity is orphaned the day that person changes team; a custom annotation is a string the catalog never turns into an `ownedBy` relation, so ownership queries and triage routing cannot use it; and an unqualified name is resolved against the default kind and namespace, which quietly produces a reference to a `Component` that does not exist.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership","Ownership Modeling","Enterprise Portal"]
  },
  {
    id: "cncf-cba-342",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording Who Is Accountable: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." },
      { id: 'B', text: "Set `spec.owner` to the plain team name `payments-team`, without the `group:default/` prefix that the catalog expects." },
      { id: 'C', text: "Record the owning team in `metadata.annotations` under a custom `company.com/owner` key." },
      { id: 'D', text: "Point `spec.owner` at the `User` entity of the engineer who created the component." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control. Naming an individual owner means the entity is orphaned the day that person changes team; a custom annotation is a string the catalog never turns into an `ownedBy` relation, so ownership queries and triage routing cannot use it; and an unqualified name is resolved against the default kind and namespace, which quietly produces a reference to a `Component` that does not exist.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership","Ownership Modeling","High Scale Catalog"]
  },
  {
    id: "cncf-cba-343",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording Who Is Accountable: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Point `spec.owner` at the `User` entity of the engineer who created the component." },
      { id: 'B', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." },
      { id: 'C', text: "Record the owning team in `metadata.annotations` under a custom `company.com/owner` key." },
      { id: 'D', text: "Set `spec.owner` to the plain team name `payments-team`, without the `group:default/` prefix that the catalog expects." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control. Naming an individual owner means the entity is orphaned the day that person changes team; a custom annotation is a string the catalog never turns into an `ownedBy` relation, so ownership queries and triage routing cannot use it; and an unqualified name is resolved against the default kind and namespace, which quietly produces a reference to a `Component` that does not exist.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership","Ownership Modeling","Security And Governance"]
  },
  {
    id: "cncf-cba-344",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording Who Is Accountable: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Set `spec.owner` to the plain team name `payments-team`, without the `group:default/` prefix that the catalog expects." },
      { id: 'B', text: "Record the owning team in `metadata.annotations` under a custom `company.com/owner` key." },
      { id: 'C', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." },
      { id: 'D', text: "Point `spec.owner` at the `User` entity of the engineer who created the component." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control. Naming an individual owner means the entity is orphaned the day that person changes team; a custom annotation is a string the catalog never turns into an `ownedBy` relation, so ownership queries and triage routing cannot use it; and an unqualified name is resolved against the default kind and namespace, which quietly produces a reference to a `Component` that does not exist.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership","Ownership Modeling","Developer Onboarding"]
  },
  {
    id: "cncf-cba-345",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Recording Who Is Accountable: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to ensure every registered service has a clearly designated engineering team responsible for on-call support and vulnerabilities.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`)." },
      { id: 'B', text: "Set `spec.owner` to the plain team name `payments-team`, without the `group:default/` prefix that the catalog expects." },
      { id: 'C', text: "Record the owning team in `metadata.annotations` under a custom `company.com/owner` key." },
      { id: 'D', text: "Point `spec.owner` at the `User` entity of the engineer who created the component." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Set `spec.owner` on components to reference a valid `Group` entity ref (e.g., `group:default/payments-team`). Backstage enforces software ownership by linking entities to `Group` (or `User`) entities via `spec.owner`. This populates the `ownedBy` and `ownerOf` relations, enabling automated triage, notification routing, and access control. Naming an individual owner means the entity is orphaned the day that person changes team; a custom annotation is a string the catalog never turns into an `ownedBy` relation, so ownership queries and triage routing cannot use it; and an unqualified name is resolved against the default kind and namespace, which quietly produces a reference to a `Component` that does not exist.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-group",
    tags: ["Ownership","Ownership Modeling","Resilience And Operations"]
  },
  {
    id: "cncf-cba-346",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling the Contracts Between Services: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Attach the OpenAPI document to the component with a `backstage.io/definition-at-location` annotation and no `API` entity, rendering it on that component's own page." },
      { id: 'B', text: "Model the interface as a `Resource` with `spec.type: api` and connect it using `spec.dependsOn`." },
      { id: 'C', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." },
      { id: 'D', text: "Describe the endpoints the service consumes as free text in the component's description field, listing one URL per line." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry. An annotation renders the document on one component's page but creates no entity, so nothing else can declare that it consumes the interface; a `Resource` models infrastructure the component depends on rather than a contract it exposes, so the `apiProvidedBy` relations never form; and free text is invisible to the dependency graph entirely.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities","API Entities","Enterprise Portal"]
  },
  {
    id: "cncf-cba-347",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling the Contracts Between Services: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Describe the endpoints the service consumes as free text in the component's description field, listing one URL per line." },
      { id: 'B', text: "Attach the OpenAPI document to the component with a `backstage.io/definition-at-location` annotation and no `API` entity, rendering it on that component's own page." },
      { id: 'C', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." },
      { id: 'D', text: "Model the interface as a `Resource` with `spec.type: api` and connect it using `spec.dependsOn`." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry. An annotation renders the document on one component's page but creates no entity, so nothing else can declare that it consumes the interface; a `Resource` models infrastructure the component depends on rather than a contract it exposes, so the `apiProvidedBy` relations never form; and free text is invisible to the dependency graph entirely.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities","API Entities","High Scale Catalog"]
  },
  {
    id: "cncf-cba-348",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling the Contracts Between Services: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." },
      { id: 'B', text: "Attach the OpenAPI document to the component with a `backstage.io/definition-at-location` annotation and no `API` entity, rendering it on that component's own page." },
      { id: 'C', text: "Describe the endpoints the service consumes as free text in the component's description field, listing one URL per line." },
      { id: 'D', text: "Model the interface as a `Resource` with `spec.type: api` and connect it using `spec.dependsOn`." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry. An annotation renders the document on one component's page but creates no entity, so nothing else can declare that it consumes the interface; a `Resource` models infrastructure the component depends on rather than a contract it exposes, so the `apiProvidedBy` relations never form; and free text is invisible to the dependency graph entirely.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities","API Entities","Security And Governance"]
  },
  {
    id: "cncf-cba-349",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling the Contracts Between Services: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Model the interface as a `Resource` with `spec.type: api` and connect it using `spec.dependsOn`." },
      { id: 'B', text: "Describe the endpoints the service consumes as free text in the component's description field, listing one URL per line." },
      { id: 'C', text: "Attach the OpenAPI document to the component with a `backstage.io/definition-at-location` annotation and no `API` entity, rendering it on that component's own page." },
      { id: 'D', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry. An annotation renders the document on one component's page but creates no entity, so nothing else can declare that it consumes the interface; a `Resource` models infrastructure the component depends on rather than a contract it exposes, so the `apiProvidedBy` relations never form; and free text is invisible to the dependency graph entirely.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities","API Entities","Developer Onboarding"]
  },
  {
    id: "cncf-cba-350",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d2",
    domainName: "Software Catalog and Metadata",
    title: "Modelling the Contracts Between Services: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to document and visualize REST API contracts between consuming frontend clients and producing backend microservices.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Attach the OpenAPI document to the component with a `backstage.io/definition-at-location` annotation and no `API` entity, rendering it on that component's own page." },
      { id: 'B', text: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components." },
      { id: 'C', text: "Model the interface as a `Resource` with `spec.type: api` and connect it using `spec.dependsOn`." },
      { id: 'D', text: "Describe the endpoints the service consumes as free text in the component's description field, listing one URL per line." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Create an `API` entity with `spec.type: openapi` embedding the OpenAPI spec, and link it via `providesApis` and `consumesApis` on components. The `API` entity represents bounded interface contracts (OpenAPI, AsyncAPI, GraphQL, gRPC). Components declare `spec.providesApis` to document interfaces they expose and `spec.consumesApis` for interfaces they call, creating a searchable API registry. An annotation renders the document on one component's page but creates no entity, so nothing else can declare that it consumes the interface; a `Resource` models infrastructure the component depends on rather than a contract it exposes, so the `apiProvidedBy` relations never form; and free text is invisible to the dependency graph entirely.",
    referenceUrl: "https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api",
    tags: ["API Entities","API Entities","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_14;
