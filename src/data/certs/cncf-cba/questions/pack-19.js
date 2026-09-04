export const CNCF_CBA_QUESTIONS_19 = [
  {
    id: "cncf-cba-451",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backend Plugin Architecture: New Backend System Plugins: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Backend Plugins to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? createBackendPlugin, BackendFeature, and HttpRouterService registration is under consideration.",
    options: [
      { id: 'A', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'B', text: "Run an unauthenticated telnet daemon directly on the host operating system." },
      { id: 'C', text: "Write raw assembly code directly to the host CPU registers." },
      { id: 'D', text: "Bypass the Backstage service container and launch an untracked HTTP server on a random port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins", "Backend Plugins", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-452",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backend Plugin Architecture: New Backend System Plugins: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Backend Plugins to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? createBackendPlugin, BackendFeature, and HttpRouterService registration is under consideration.",
    options: [
      { id: 'A', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'B', text: "Run an unauthenticated telnet daemon directly on the host operating system." },
      { id: 'C', text: "Write raw assembly code directly to the host CPU registers." },
      { id: 'D', text: "Bypass the Backstage service container and launch an untracked HTTP server on a random port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins", "Backend Plugins", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-453",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backend Plugin Architecture: New Backend System Plugins: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Backend Plugins to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? createBackendPlugin, BackendFeature, and HttpRouterService registration is under consideration.",
    options: [
      { id: 'A', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'B', text: "Run an unauthenticated telnet daemon directly on the host operating system." },
      { id: 'C', text: "Write raw assembly code directly to the host CPU registers." },
      { id: 'D', text: "Bypass the Backstage service container and launch an untracked HTTP server on a random port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins", "Backend Plugins", "Security And Governance"]
  },
  {
    id: "cncf-cba-454",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backend Plugin Architecture: New Backend System Plugins: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Backend Plugins to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? createBackendPlugin, BackendFeature, and HttpRouterService registration is under consideration.",
    options: [
      { id: 'A', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'B', text: "Run an unauthenticated telnet daemon directly on the host operating system." },
      { id: 'C', text: "Write raw assembly code directly to the host CPU registers." },
      { id: 'D', text: "Bypass the Backstage service container and launch an untracked HTTP server on a random port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins", "Backend Plugins", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-455",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backend Plugin Architecture: New Backend System Plugins: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Backend Plugins to develop a custom backend microservice plugin that exposes REST endpoints and interacts with the database.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? createBackendPlugin, BackendFeature, and HttpRouterService registration is under consideration.",
    options: [
      { id: 'A', text: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service." },
      { id: 'B', text: "Run an unauthenticated telnet daemon directly on the host operating system." },
      { id: 'C', text: "Write raw assembly code directly to the host CPU registers." },
      { id: 'D', text: "Bypass the Backstage service container and launch an untracked HTTP server on a random port." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Author a backend plugin using `createBackendPlugin`, injecting the `httpRouterService` and database service. In the New Backend System, plugins are created using `createBackendPlugin`. They declare dependencies (like `httpRouterService`, `databaseService`, `loggerService`) which the Backstage container injects, cleanly mounting routes onto the backend server.",
    referenceUrl: "https://backstage.io/docs/backend-system/building-plugins-and-modules/index",
    tags: ["Backend Plugins", "Backend Plugins", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-456",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Architecture: Docs-as-Code Model: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates TechDocs Architecture to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Hosting Markdown alongside code with mkdocs.yml and backstage.io/techdocs-ref annotation is under consideration.",
    options: [
      { id: 'A', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'B', text: "Maintain enterprise documentation in unversioned personal Word documents on desktop folders." },
      { id: 'C', text: "Print physical paper user manuals for all backend API endpoints." },
      { id: 'D', text: "Prohibit developers from writing documentation to maximize coding velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture", "TechDocs Architecture", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-457",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Architecture: Docs-as-Code Model: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates TechDocs Architecture to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Hosting Markdown alongside code with mkdocs.yml and backstage.io/techdocs-ref annotation is under consideration.",
    options: [
      { id: 'A', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'B', text: "Maintain enterprise documentation in unversioned personal Word documents on desktop folders." },
      { id: 'C', text: "Print physical paper user manuals for all backend API endpoints." },
      { id: 'D', text: "Prohibit developers from writing documentation to maximize coding velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture", "TechDocs Architecture", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-458",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Architecture: Docs-as-Code Model: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates TechDocs Architecture to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Hosting Markdown alongside code with mkdocs.yml and backstage.io/techdocs-ref annotation is under consideration.",
    options: [
      { id: 'A', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'B', text: "Maintain enterprise documentation in unversioned personal Word documents on desktop folders." },
      { id: 'C', text: "Print physical paper user manuals for all backend API endpoints." },
      { id: 'D', text: "Prohibit developers from writing documentation to maximize coding velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture", "TechDocs Architecture", "Security And Governance"]
  },
  {
    id: "cncf-cba-459",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Architecture: Docs-as-Code Model: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates TechDocs Architecture to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Hosting Markdown alongside code with mkdocs.yml and backstage.io/techdocs-ref annotation is under consideration.",
    options: [
      { id: 'A', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'B', text: "Maintain enterprise documentation in unversioned personal Word documents on desktop folders." },
      { id: 'C', text: "Print physical paper user manuals for all backend API endpoints." },
      { id: 'D', text: "Prohibit developers from writing documentation to maximize coding velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture", "TechDocs Architecture", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-460",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Architecture: Docs-as-Code Model: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates TechDocs Architecture to centralize technical documentation across hundreds of microservices while keeping docs versioned alongside source code.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Hosting Markdown alongside code with mkdocs.yml and backstage.io/techdocs-ref annotation is under consideration.",
    options: [
      { id: 'A', text: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`." },
      { id: 'B', text: "Maintain enterprise documentation in unversioned personal Word documents on desktop folders." },
      { id: 'C', text: "Print physical paper user manuals for all backend API endpoints." },
      { id: 'D', text: "Prohibit developers from writing documentation to maximize coding velocity." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Adopt TechDocs: store Markdown docs in `/docs` with `mkdocs.yml` in each repo and link via `backstage.io/techdocs-ref`. TechDocs is Backstage's docs-as-code solution. Documentation is written in Markdown and stored directly in the software repository alongside `mkdocs.yml`. The catalog entity includes `backstage.io/techdocs-ref: dir:.`, enabling Backstage to build and render docs seamlessly.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/",
    tags: ["TechDocs Architecture", "TechDocs Architecture", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-461",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Build and Publish Pipeline: Local vs CI/CD: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates TechDocs Pipelines to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Generating static HTML via @techdocs/cli and publishing to cloud storage (S3/GCS) is under consideration.",
    options: [
      { id: 'A', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'B', text: "Build all documentation dynamically on the production Backstage web server on every single page view." },
      { id: 'C', text: "Instruct portal users to run MkDocs locally on their laptops before reading docs." },
      { id: 'D', text: "Store generated documentation HTML inside relational database BLOB columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob).",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines", "TechDocs Pipelines", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-462",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Build and Publish Pipeline: Local vs CI/CD: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates TechDocs Pipelines to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Generating static HTML via @techdocs/cli and publishing to cloud storage (S3/GCS) is under consideration.",
    options: [
      { id: 'A', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'B', text: "Build all documentation dynamically on the production Backstage web server on every single page view." },
      { id: 'C', text: "Instruct portal users to run MkDocs locally on their laptops before reading docs." },
      { id: 'D', text: "Store generated documentation HTML inside relational database BLOB columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob).",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines", "TechDocs Pipelines", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-463",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Build and Publish Pipeline: Local vs CI/CD: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates TechDocs Pipelines to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Generating static HTML via @techdocs/cli and publishing to cloud storage (S3/GCS) is under consideration.",
    options: [
      { id: 'A', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'B', text: "Build all documentation dynamically on the production Backstage web server on every single page view." },
      { id: 'C', text: "Instruct portal users to run MkDocs locally on their laptops before reading docs." },
      { id: 'D', text: "Store generated documentation HTML inside relational database BLOB columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob).",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines", "TechDocs Pipelines", "Security And Governance"]
  },
  {
    id: "cncf-cba-464",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Build and Publish Pipeline: Local vs CI/CD: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates TechDocs Pipelines to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Generating static HTML via @techdocs/cli and publishing to cloud storage (S3/GCS) is under consideration.",
    options: [
      { id: 'A', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'B', text: "Build all documentation dynamically on the production Backstage web server on every single page view." },
      { id: 'C', text: "Instruct portal users to run MkDocs locally on their laptops before reading docs." },
      { id: 'D', text: "Store generated documentation HTML inside relational database BLOB columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob).",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines", "TechDocs Pipelines", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-465",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Build and Publish Pipeline: Local vs CI/CD: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates TechDocs Pipelines to scale documentation generation for thousands of repositories without degrading Backstage backend server performance.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Generating static HTML via @techdocs/cli and publishing to cloud storage (S3/GCS) is under consideration.",
    options: [
      { id: 'A', text: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS)." },
      { id: 'B', text: "Build all documentation dynamically on the production Backstage web server on every single page view." },
      { id: 'C', text: "Instruct portal users to run MkDocs locally on their laptops before reading docs." },
      { id: 'D', text: "Store generated documentation HTML inside relational database BLOB columns." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Generate documentation in CI/CD pipelines using `@techdocs/cli generate` and publish static assets to cloud object storage (S3/GCS). While Backstage supports 'local' builds for development, production deployments recommend the 'recommended' model: external CI/CD pipelines use `@techdocs/cli` to generate static sites and publish them to cloud storage (AWS S3, Google Cloud Storage, Azure Blob).",
    referenceUrl: "https://backstage.io/docs/features/techdocs/architecture",
    tags: ["TechDocs Pipelines", "TechDocs Pipelines", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-466",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Reader and Full-Text Search Integration: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates TechDocs Search to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? TechDocsReaderPage rendering and automated index ingestion into Backstage Search is under consideration.",
    options: [
      { id: 'A', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." },
      { id: 'B', text: "Require users to download raw Markdown files and view them in terminal text editors." },
      { id: 'C', text: "Exclude documentation from search indexes to prioritize software catalog entities." },
      { id: 'D', text: "Host documentation on disconnected third-party public blogs without search capability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search", "TechDocs Search", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-467",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Reader and Full-Text Search Integration: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates TechDocs Search to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? TechDocsReaderPage rendering and automated index ingestion into Backstage Search is under consideration.",
    options: [
      { id: 'A', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." },
      { id: 'B', text: "Require users to download raw Markdown files and view them in terminal text editors." },
      { id: 'C', text: "Exclude documentation from search indexes to prioritize software catalog entities." },
      { id: 'D', text: "Host documentation on disconnected third-party public blogs without search capability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search", "TechDocs Search", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-468",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Reader and Full-Text Search Integration: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates TechDocs Search to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? TechDocsReaderPage rendering and automated index ingestion into Backstage Search is under consideration.",
    options: [
      { id: 'A', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." },
      { id: 'B', text: "Require users to download raw Markdown files and view them in terminal text editors." },
      { id: 'C', text: "Exclude documentation from search indexes to prioritize software catalog entities." },
      { id: 'D', text: "Host documentation on disconnected third-party public blogs without search capability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search", "TechDocs Search", "Security And Governance"]
  },
  {
    id: "cncf-cba-469",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Reader and Full-Text Search Integration: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates TechDocs Search to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? TechDocsReaderPage rendering and automated index ingestion into Backstage Search is under consideration.",
    options: [
      { id: 'A', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." },
      { id: 'B', text: "Require users to download raw Markdown files and view them in terminal text editors." },
      { id: 'C', text: "Exclude documentation from search indexes to prioritize software catalog entities." },
      { id: 'D', text: "Host documentation on disconnected third-party public blogs without search capability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search", "TechDocs Search", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-470",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "TechDocs Reader and Full-Text Search Integration: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates TechDocs Search to allow engineers to read rendered documentation and search across all enterprise technical docs from a global search bar.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? TechDocsReaderPage rendering and automated index ingestion into Backstage Search is under consideration.",
    options: [
      { id: 'A', text: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`." },
      { id: 'B', text: "Require users to download raw Markdown files and view them in terminal text editors." },
      { id: 'C', text: "Exclude documentation from search indexes to prioritize software catalog entities." },
      { id: 'D', text: "Host documentation on disconnected third-party public blogs without search capability." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Mount the `TechDocsReaderPage` component and configure the TechDocs search collator in `@backstage/plugin-search-backend`. The `TechDocsReaderPage` renders responsive HTML documentation directly within Backstage. Concurrently, the TechDocs search collator crawls generated documentation files, indexing content into the Backstage Search engine for unified discovery.",
    referenceUrl: "https://backstage.io/docs/features/techdocs/search",
    tags: ["TechDocs Search", "TechDocs Search", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-471",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage CLI and Developer Tooling: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Backstage CLI to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Scaffolding plugins, building bundles, and managing packages via yarn backstage-cli is under consideration.",
    options: [
      { id: 'A', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." },
      { id: 'B', text: "Manually configure Webpack, Babel, and TypeScript compilers from scratch for every single plugin." },
      { id: 'C', text: "Write raw machine instructions into ELF binaries using hex editors." },
      { id: 'D', text: "Execute shell scripts without package managers or dependency tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI", "Backstage CLI", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-472",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage CLI and Developer Tooling: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Backstage CLI to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Scaffolding plugins, building bundles, and managing packages via yarn backstage-cli is under consideration.",
    options: [
      { id: 'A', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." },
      { id: 'B', text: "Manually configure Webpack, Babel, and TypeScript compilers from scratch for every single plugin." },
      { id: 'C', text: "Write raw machine instructions into ELF binaries using hex editors." },
      { id: 'D', text: "Execute shell scripts without package managers or dependency tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI", "Backstage CLI", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-473",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage CLI and Developer Tooling: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Backstage CLI to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Scaffolding plugins, building bundles, and managing packages via yarn backstage-cli is under consideration.",
    options: [
      { id: 'A', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." },
      { id: 'B', text: "Manually configure Webpack, Babel, and TypeScript compilers from scratch for every single plugin." },
      { id: 'C', text: "Write raw machine instructions into ELF binaries using hex editors." },
      { id: 'D', text: "Execute shell scripts without package managers or dependency tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI", "Backstage CLI", "Security And Governance"]
  },
  {
    id: "cncf-cba-474",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage CLI and Developer Tooling: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Backstage CLI to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Scaffolding plugins, building bundles, and managing packages via yarn backstage-cli is under consideration.",
    options: [
      { id: 'A', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." },
      { id: 'B', text: "Manually configure Webpack, Babel, and TypeScript compilers from scratch for every single plugin." },
      { id: 'C', text: "Write raw machine instructions into ELF binaries using hex editors." },
      { id: 'D', text: "Execute shell scripts without package managers or dependency tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI", "Backstage CLI", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-475",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d4",
    domainName: "Plugins, TechDocs and Administration",
    title: "Backstage CLI and Developer Tooling: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Backstage CLI to streamline developer workflows when authoring a new plugin or building production bundles in the Backstage monorepo.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Scaffolding plugins, building bundles, and managing packages via yarn backstage-cli is under consideration.",
    options: [
      { id: 'A', text: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages." },
      { id: 'B', text: "Manually configure Webpack, Babel, and TypeScript compilers from scratch for every single plugin." },
      { id: 'C', text: "Write raw machine instructions into ELF binaries using hex editors." },
      { id: 'D', text: "Execute shell scripts without package managers or dependency tracking." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Use `yarn backstage-cli new` to scaffold plugins and `yarn backstage-cli build` to create optimized production packages. The `@backstage/cli` toolchain manages the Backstage lifecycle. Commands like `yarn backstage-cli new` generate standardized plugin skeletons, while `build`, `lint`, and `test` ensure consistent toolchain configuration across the monorepo.",
    referenceUrl: "https://backstage.io/docs/tooling/cli/overview",
    tags: ["Backstage CLI", "Backstage CLI", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_19;
