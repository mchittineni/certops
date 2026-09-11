export const CNCF_CBA_QUESTIONS_19 = [
  {
    id: "cncf-cba-451",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a Backend With Its Own Routes and Storage: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Export a `createRouter` function and wire it up in `index.ts` in the legacy backend style, constructing each of its dependencies there." },
      { id: 'B', text: "Build it with `createBackendModule` and attach it, along with its database usage, to an existing plugin's extension point." },
      { id: 'C', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'D', text: "Register the routes on the root Express app with `app.use()` once the backend has started." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server. The legacy `createRouter` style still runs but constructs its dependencies by hand and will not receive services from the container; `createBackendModule` extends a plugin that already exists rather than introducing a new one with its own routes and database; and registering on the root app skips the discovery path prefix, so the plugin is unreachable through `discoveryApi`.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins","Backend Plugins","Enterprise Portal"]
  },
  {
    id: "cncf-cba-452",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a Backend With Its Own Routes and Storage: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Build it with `createBackendModule` and attach it, along with its database usage, to an existing plugin's extension point." },
      { id: 'B', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'C', text: "Export a `createRouter` function and wire it up in `index.ts` in the legacy backend style, constructing each of its dependencies there." },
      { id: 'D', text: "Register the routes on the root Express app with `app.use()` once the backend has started." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server. The legacy `createRouter` style still runs but constructs its dependencies by hand and will not receive services from the container; `createBackendModule` extends a plugin that already exists rather than introducing a new one with its own routes and database; and registering on the root app skips the discovery path prefix, so the plugin is unreachable through `discoveryApi`.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins","Backend Plugins","High Scale Catalog"]
  },
  {
    id: "cncf-cba-453",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a Backend With Its Own Routes and Storage: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Build it with `createBackendModule` and attach it, along with its database usage, to an existing plugin's extension point." },
      { id: 'B', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'C', text: "Export a `createRouter` function and wire it up in `index.ts` in the legacy backend style, constructing each of its dependencies there." },
      { id: 'D', text: "Register the routes on the root Express app with `app.use()` once the backend has started." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server. The legacy `createRouter` style still runs but constructs its dependencies by hand and will not receive services from the container; `createBackendModule` extends a plugin that already exists rather than introducing a new one with its own routes and database; and registering on the root app skips the discovery path prefix, so the plugin is unreachable through `discoveryApi`.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins","Backend Plugins","Security And Governance"]
  },
  {
    id: "cncf-cba-454",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a Backend With Its Own Routes and Storage: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Register the routes on the root Express app with `app.use()` once the backend has started." },
      { id: 'B', text: "Export a `createRouter` function and wire it up in `index.ts` in the legacy backend style, constructing each of its dependencies there." },
      { id: 'C', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'D', text: "Build it with `createBackendModule` and attach it, along with its database usage, to an existing plugin's extension point." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server. The legacy `createRouter` style still runs but constructs its dependencies by hand and will not receive services from the container; `createBackendModule` extends a plugin that already exists rather than introducing a new one with its own routes and database; and registering on the root app skips the discovery path prefix, so the plugin is unreachable through `discoveryApi`.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins","Backend Plugins","Developer Onboarding"]
  },
  {
    id: "cncf-cba-455",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Adding a Backend With Its Own Routes and Storage: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'B', text: "Register the routes on the root Express app with `app.use()` once the backend has started." },
      { id: 'C', text: "Build it with `createBackendModule` and attach it, along with its database usage, to an existing plugin's extension point." },
      { id: 'D', text: "Export a `createRouter` function and wire it up in `index.ts` in the legacy backend style, constructing each of its dependencies there." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server. The legacy `createRouter` style still runs but constructs its dependencies by hand and will not receive services from the container; `createBackendModule` extends a plugin that already exists rather than introducing a new one with its own routes and database; and registering on the root app skips the discovery path prefix, so the plugin is unreachable through `discoveryApi`.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins","Backend Plugins","Resilience And Operations"]
  },
  {
    id: "cncf-cba-456",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Keeping Documentation Beside the Code: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Keep the documentation in a separate wiki and point at it from the entity with a `backstage.io/view-url` annotation." },
      { id: 'B', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'C', text: "Hold the Markdown in one central documentation repository and reference it by path from each entity." },
      { id: 'D', text: "Publish the docs as a static site and embed that site in an iframe on the entity page." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly. A wiki link leaves the documentation outside version control, so it is neither reviewed with the change nor searchable from the portal; a central repository keeps the docs in git but separates them from the code they describe, which is what makes them drift; and an embedded iframe renders content the search collator cannot index.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture","TechDocs Architecture","Enterprise Portal"]
  },
  {
    id: "cncf-cba-457",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Keeping Documentation Beside the Code: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Publish the docs as a static site and embed that site in an iframe on the entity page." },
      { id: 'B', text: "Hold the Markdown in one central documentation repository and reference it by path from each entity." },
      { id: 'C', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'D', text: "Keep the documentation in a separate wiki and point at it from the entity with a `backstage.io/view-url` annotation." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly. A wiki link leaves the documentation outside version control, so it is neither reviewed with the change nor searchable from the portal; a central repository keeps the docs in git but separates them from the code they describe, which is what makes them drift; and an embedded iframe renders content the search collator cannot index.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture","TechDocs Architecture","High Scale Catalog"]
  },
  {
    id: "cncf-cba-458",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Keeping Documentation Beside the Code: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Publish the docs as a static site and embed that site in an iframe on the entity page." },
      { id: 'B', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'C', text: "Keep the documentation in a separate wiki and point at it from the entity with a `backstage.io/view-url` annotation." },
      { id: 'D', text: "Hold the Markdown in one central documentation repository and reference it by path from each entity." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly. A wiki link leaves the documentation outside version control, so it is neither reviewed with the change nor searchable from the portal; a central repository keeps the docs in git but separates them from the code they describe, which is what makes them drift; and an embedded iframe renders content the search collator cannot index.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture","TechDocs Architecture","Security And Governance"]
  },
  {
    id: "cncf-cba-459",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Keeping Documentation Beside the Code: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Keep the documentation in a separate wiki and point at it from the entity with a `backstage.io/view-url` annotation." },
      { id: 'B', text: "Hold the Markdown in one central documentation repository and reference it by path from each entity." },
      { id: 'C', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'D', text: "Publish the docs as a static site and embed that site in an iframe on the entity page." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly. A wiki link leaves the documentation outside version control, so it is neither reviewed with the change nor searchable from the portal; a central repository keeps the docs in git but separates them from the code they describe, which is what makes them drift; and an embedded iframe renders content the search collator cannot index.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture","TechDocs Architecture","Developer Onboarding"]
  },
  {
    id: "cncf-cba-460",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Keeping Documentation Beside the Code: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'B', text: "Publish the docs as a static site and embed that site in an iframe on the entity page." },
      { id: 'C', text: "Hold the Markdown in one central documentation repository and reference it by path from each entity." },
      { id: 'D', text: "Keep the documentation in a separate wiki and point at it from the entity with a `backstage.io/view-url` annotation." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly. A wiki link leaves the documentation outside version control, so it is neither reviewed with the change nor searchable from the portal; a central repository keeps the docs in git but separates them from the code they describe, which is what makes them drift; and an embedded iframe renders content the search collator cannot index.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture","TechDocs Architecture","Resilience And Operations"]
  },
  {
    id: "cncf-cba-461",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Where Documentation Gets Built: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Leave TechDocs in its local build mode so the backend generates the documentation on demand and caches the rendered output on disk between requests." },
      { id: 'B', text: "Generate the documentation in CI and commit the rendered HTML back into each repository alongside the Markdown sources." },
      { id: 'C', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'D', text: "Run a scheduled job on the backend, outside the CI pipelines, that rebuilds every repository's documentation each night." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob). Local build mode is the documented default for trying TechDocs out, but it puts an MkDocs toolchain and the build load inside the portal's own runtime; committing rendered HTML doubles every documentation diff and invites the build output to drift from the source; and a nightly rebuild means documentation lags the code by up to a day and repeats work for repositories that never changed.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines","TechDocs Pipelines","Enterprise Portal"]
  },
  {
    id: "cncf-cba-462",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Where Documentation Gets Built: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'B', text: "Run a scheduled job on the backend, outside the CI pipelines, that rebuilds every repository's documentation each night." },
      { id: 'C', text: "Leave TechDocs in its local build mode so the backend generates the documentation on demand and caches the rendered output on disk between requests." },
      { id: 'D', text: "Generate the documentation in CI and commit the rendered HTML back into each repository alongside the Markdown sources." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob). Local build mode is the documented default for trying TechDocs out, but it puts an MkDocs toolchain and the build load inside the portal's own runtime; committing rendered HTML doubles every documentation diff and invites the build output to drift from the source; and a nightly rebuild means documentation lags the code by up to a day and repeats work for repositories that never changed.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines","TechDocs Pipelines","High Scale Catalog"]
  },
  {
    id: "cncf-cba-463",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Where Documentation Gets Built: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Generate the documentation in CI and commit the rendered HTML back into each repository alongside the Markdown sources." },
      { id: 'B', text: "Leave TechDocs in its local build mode so the backend generates the documentation on demand and caches the rendered output on disk between requests." },
      { id: 'C', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'D', text: "Run a scheduled job on the backend, outside the CI pipelines, that rebuilds every repository's documentation each night." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob). Local build mode is the documented default for trying TechDocs out, but it puts an MkDocs toolchain and the build load inside the portal's own runtime; committing rendered HTML doubles every documentation diff and invites the build output to drift from the source; and a nightly rebuild means documentation lags the code by up to a day and repeats work for repositories that never changed.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines","TechDocs Pipelines","Security And Governance"]
  },
  {
    id: "cncf-cba-464",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Where Documentation Gets Built: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Leave TechDocs in its local build mode so the backend generates the documentation on demand and caches the rendered output on disk between requests." },
      { id: 'B', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'C', text: "Generate the documentation in CI and commit the rendered HTML back into each repository alongside the Markdown sources." },
      { id: 'D', text: "Run a scheduled job on the backend, outside the CI pipelines, that rebuilds every repository's documentation each night." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob). Local build mode is the documented default for trying TechDocs out, but it puts an MkDocs toolchain and the build load inside the portal's own runtime; committing rendered HTML doubles every documentation diff and invites the build output to drift from the source; and a nightly rebuild means documentation lags the code by up to a day and repeats work for repositories that never changed.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines","TechDocs Pipelines","Developer Onboarding"]
  },
  {
    id: "cncf-cba-465",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Where Documentation Gets Built: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Run a scheduled job on the backend, outside the CI pipelines, that rebuilds every repository's documentation each night." },
      { id: 'B', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'C', text: "Generate the documentation in CI and commit the rendered HTML back into each repository alongside the Markdown sources." },
      { id: 'D', text: "Leave TechDocs in its local build mode so the backend generates the documentation on demand and caches the rendered output on disk between requests." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob). Local build mode is the documented default for trying TechDocs out, but it puts an MkDocs toolchain and the build load inside the portal's own runtime; committing rendered HTML doubles every documentation diff and invites the build output to drift from the source; and a nightly rebuild means documentation lags the code by up to a day and repeats work for repositories that never changed.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines","TechDocs Pipelines","Resilience And Operations"]
  },
  {
    id: "cncf-cba-466",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Searching Inside Documentation Pages: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Mount the reader page and rely on the catalog collator, which already indexes each entity's description, annotations, and tags." },
      { id: 'B', text: "Link out of Backstage to the published documentation and let the object store's own search handle the queries." },
      { id: 'C', text: "Index the documentation with a separate Elasticsearch pipeline maintained outside the search backend." },
      { id: 'D', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery. The catalog collator indexes entity metadata, so a search matches a component's description but never a sentence inside its documentation; object storage offers no full-text search over the HTML it serves; and a separate pipeline can produce an index, but results arrive outside the portal's search page and without its permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search","TechDocs Search","Enterprise Portal"]
  },
  {
    id: "cncf-cba-467",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Searching Inside Documentation Pages: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Index the documentation with a separate Elasticsearch pipeline maintained outside the search backend." },
      { id: 'B', text: "Link out of Backstage to the published documentation and let the object store's own search handle the queries." },
      { id: 'C', text: "Mount the reader page and rely on the catalog collator, which already indexes each entity's description, annotations, and tags." },
      { id: 'D', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery. The catalog collator indexes entity metadata, so a search matches a component's description but never a sentence inside its documentation; object storage offers no full-text search over the HTML it serves; and a separate pipeline can produce an index, but results arrive outside the portal's search page and without its permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search","TechDocs Search","High Scale Catalog"]
  },
  {
    id: "cncf-cba-468",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Searching Inside Documentation Pages: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Index the documentation with a separate Elasticsearch pipeline maintained outside the search backend." },
      { id: 'B', text: "Mount the reader page and rely on the catalog collator, which already indexes each entity's description, annotations, and tags." },
      { id: 'C', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." },
      { id: 'D', text: "Link out of Backstage to the published documentation and let the object store's own search handle the queries." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery. The catalog collator indexes entity metadata, so a search matches a component's description but never a sentence inside its documentation; object storage offers no full-text search over the HTML it serves; and a separate pipeline can produce an index, but results arrive outside the portal's search page and without its permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search","TechDocs Search","Security And Governance"]
  },
  {
    id: "cncf-cba-469",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Searching Inside Documentation Pages: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Link out of Backstage to the published documentation and let the object store's own search handle the queries." },
      { id: 'B', text: "Index the documentation with a separate Elasticsearch pipeline maintained outside the search backend." },
      { id: 'C', text: "Mount the reader page and rely on the catalog collator, which already indexes each entity's description, annotations, and tags." },
      { id: 'D', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery. The catalog collator indexes entity metadata, so a search matches a component's description but never a sentence inside its documentation; object storage offers no full-text search over the HTML it serves; and a separate pipeline can produce an index, but results arrive outside the portal's search page and without its permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search","TechDocs Search","Developer Onboarding"]
  },
  {
    id: "cncf-cba-470",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Searching Inside Documentation Pages: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Index the documentation with a separate Elasticsearch pipeline maintained outside the search backend." },
      { id: 'B', text: "Mount the reader page and rely on the catalog collator, which already indexes each entity's description, annotations, and tags." },
      { id: 'C', text: "Link out of Backstage to the published documentation and let the object store's own search handle the queries." },
      { id: 'D', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery. The catalog collator indexes entity metadata, so a search matches a component's description but never a sentence inside its documentation; object storage offers no full-text search over the HTML it serves; and a separate pipeline can produce an index, but results arrive outside the portal's search page and without its permission filtering.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search","TechDocs Search","Resilience And Operations"]
  },
  {
    id: "cncf-cba-471",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Creating and Building a New Package: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer needs to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives?",
    options: [
      { id: 'A', text: "Copy an existing plugin directory, rename the package, and update the imports by hand." },
      { id: 'B', text: "Scaffold the package with `create-react-app` and add the `@backstage/*` packages as dependencies, then adjust its build output to match the workspace." },
      { id: 'C', text: "Use `yarn backstage-cli package start` to produce the production bundle for each plugin." },
      { id: 'D', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo. Copying a plugin carries over whatever that plugin's configuration happened to be, including anything already out of date; `create-react-app` produces its own build setup that knows nothing of the workspace's shared TypeScript and bundling configuration; and `package start` runs the development server with watch mode rather than emitting a production build.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI","Backstage CLI","Enterprise Portal"]
  },
  {
    id: "cncf-cba-472",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Creating and Building a New Package: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer needs to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention?",
    options: [
      { id: 'A', text: "Use `yarn backstage-cli package start` to produce the production bundle for each plugin." },
      { id: 'B', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." },
      { id: 'C', text: "Copy an existing plugin directory, rename the package, and update the imports by hand." },
      { id: 'D', text: "Scaffold the package with `create-react-app` and add the `@backstage/*` packages as dependencies, then adjust its build output to match the workspace." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo. Copying a plugin carries over whatever that plugin's configuration happened to be, including anything already out of date; `create-react-app` produces its own build setup that knows nothing of the workspace's shared TypeScript and bundling configuration; and `package start` runs the development server with watch mode rather than emitting a production build.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI","Backstage CLI","High Scale Catalog"]
  },
  {
    id: "cncf-cba-473",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Creating and Building a New Package: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer needs to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls?",
    options: [
      { id: 'A', text: "Use `yarn backstage-cli package start` to produce the production bundle for each plugin." },
      { id: 'B', text: "Scaffold the package with `create-react-app` and add the `@backstage/*` packages as dependencies, then adjust its build output to match the workspace." },
      { id: 'C', text: "Copy an existing plugin directory, rename the package, and update the imports by hand." },
      { id: 'D', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo. Copying a plugin carries over whatever that plugin's configuration happened to be, including anything already out of date; `create-react-app` produces its own build setup that knows nothing of the workspace's shared TypeScript and bundling configuration; and `package start` runs the development server with watch mode rather than emitting a production build.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI","Backstage CLI","Security And Governance"]
  },
  {
    id: "cncf-cba-474",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Creating and Building a New Package: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer needs to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely?",
    options: [
      { id: 'A', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." },
      { id: 'B', text: "Use `yarn backstage-cli package start` to produce the production bundle for each plugin." },
      { id: 'C', text: "Scaffold the package with `create-react-app` and add the `@backstage/*` packages as dependencies, then adjust its build output to match the workspace." },
      { id: 'D', text: "Copy an existing plugin directory, rename the package, and update the imports by hand." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo. Copying a plugin carries over whatever that plugin's configuration happened to be, including anything already out of date; `create-react-app` produces its own build setup that knows nothing of the workspace's shared TypeScript and bundling configuration; and `package start` runs the development server with watch mode rather than emitting a production build.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI","Backstage CLI","Developer Onboarding"]
  },
  {
    id: "cncf-cba-475",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Creating and Building a New Package: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer needs to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance?",
    options: [
      { id: 'A', text: "Scaffold the package with `create-react-app` and add the `@backstage/*` packages as dependencies, then adjust its build output to match the workspace." },
      { id: 'B', text: "Copy an existing plugin directory, rename the package, and update the imports by hand." },
      { id: 'C', text: "Use `yarn backstage-cli package start` to produce the production bundle for each plugin." },
      { id: 'D', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo. Copying a plugin carries over whatever that plugin's configuration happened to be, including anything already out of date; `create-react-app` produces its own build setup that knows nothing of the workspace's shared TypeScript and bundling configuration; and `package start` runs the development server with watch mode rather than emitting a production build.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI","Backstage CLI","Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_19;
