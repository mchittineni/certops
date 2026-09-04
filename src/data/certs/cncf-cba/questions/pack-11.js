export const CNCF_CBA_QUESTIONS_11 = [
  {
    id: "cncf-cba-251",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Monorepo Architecture: Frontend App and Backend: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Backstage Monorepo to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Separation between React SPA packages/app and Node.js packages/backend runtime is under consideration.",
    options: [
      { id: 'A', text: "Compile the React frontend directly into Linux kernel space." },
      { id: 'B', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." },
      { id: 'C', text: "Deploy Backstage as a single uncompiled monolithic Python script." },
      { id: 'D', text: "Run Backstage entirely in the client browser without any backend server or database." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo", "Backstage Monorepo", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-252",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Monorepo Architecture: Frontend App and Backend: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Backstage Monorepo to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Separation between React SPA packages/app and Node.js packages/backend runtime is under consideration.",
    options: [
      { id: 'A', text: "Run Backstage entirely in the client browser without any backend server or database." },
      { id: 'B', text: "Compile the React frontend directly into Linux kernel space." },
      { id: 'C', text: "Deploy Backstage as a single uncompiled monolithic Python script." },
      { id: 'D', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo", "Backstage Monorepo", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-253",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Monorepo Architecture: Frontend App and Backend: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Backstage Monorepo to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Separation between React SPA packages/app and Node.js packages/backend runtime is under consideration.",
    options: [
      { id: 'A', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." },
      { id: 'B', text: "Deploy Backstage as a single uncompiled monolithic Python script." },
      { id: 'C', text: "Run Backstage entirely in the client browser without any backend server or database." },
      { id: 'D', text: "Compile the React frontend directly into Linux kernel space." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo", "Backstage Monorepo", "Security And Governance"]
  },
  {
    id: "cncf-cba-254",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Monorepo Architecture: Frontend App and Backend: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Backstage Monorepo to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Separation between React SPA packages/app and Node.js packages/backend runtime is under consideration.",
    options: [
      { id: 'A', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." },
      { id: 'B', text: "Run Backstage entirely in the client browser without any backend server or database." },
      { id: 'C', text: "Compile the React frontend directly into Linux kernel space." },
      { id: 'D', text: "Deploy Backstage as a single uncompiled monolithic Python script." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo", "Backstage Monorepo", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-255",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Monorepo Architecture: Frontend App and Backend: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Backstage Monorepo to structure an enterprise internal developer portal separating UI rendering from server-side database and catalog processing.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Separation between React SPA packages/app and Node.js packages/backend runtime is under consideration.",
    options: [
      { id: 'A', text: "Deploy Backstage as a single uncompiled monolithic Python script." },
      { id: 'B', text: "Compile the React frontend directly into Linux kernel space." },
      { id: 'C', text: "Run Backstage entirely in the client browser without any backend server or database." },
      { id: 'D', text: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Organize the portal into a monorepo featuring `packages/app` for the React frontend and `packages/backend` for the Node.js service. Backstage uses a Yarn monorepo architecture separating the frontend client (`packages/app` built with React and TypeScript) from the backend server (`packages/backend` built with Node.js and Express), coordinating plugins across both layers.",
    referenceUrl: "https://backstage.io/docs/overview/architecture-overview",
    tags: ["Backstage Monorepo", "Backstage Monorepo", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-256",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Frontend Plugin Architecture and createApp: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Frontend Architecture to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Mounting modular React plugins via createApp and FlatRoutes in App.tsx is under consideration.",
    options: [
      { id: 'A', text: "Hardcode all UI components into a single massive index.html file." },
      { id: 'B', text: "Execute imperative DOM queries from backend database workers to render client buttons." },
      { id: 'C', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'D', text: "Embed separate iframe elements for every external team website with no shared routing." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture", "Frontend Architecture", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-257",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Frontend Plugin Architecture and createApp: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Frontend Architecture to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Mounting modular React plugins via createApp and FlatRoutes in App.tsx is under consideration.",
    options: [
      { id: 'A', text: "Execute imperative DOM queries from backend database workers to render client buttons." },
      { id: 'B', text: "Embed separate iframe elements for every external team website with no shared routing." },
      { id: 'C', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'D', text: "Hardcode all UI components into a single massive index.html file." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture", "Frontend Architecture", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-258",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Frontend Plugin Architecture and createApp: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Frontend Architecture to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Mounting modular React plugins via createApp and FlatRoutes in App.tsx is under consideration.",
    options: [
      { id: 'A', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'B', text: "Embed separate iframe elements for every external team website with no shared routing." },
      { id: 'C', text: "Execute imperative DOM queries from backend database workers to render client buttons." },
      { id: 'D', text: "Hardcode all UI components into a single massive index.html file." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture", "Frontend Architecture", "Security And Governance"]
  },
  {
    id: "cncf-cba-259",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Frontend Plugin Architecture and createApp: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Frontend Architecture to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Mounting modular React plugins via createApp and FlatRoutes in App.tsx is under consideration.",
    options: [
      { id: 'A', text: "Embed separate iframe elements for every external team website with no shared routing." },
      { id: 'B', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'C', text: "Execute imperative DOM queries from backend database workers to render client buttons." },
      { id: 'D', text: "Hardcode all UI components into a single massive index.html file." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture", "Frontend Architecture", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-260",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Frontend Plugin Architecture and createApp: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Frontend Architecture to compose user interface features from independent engineering teams into a unified Backstage developer portal shell.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Mounting modular React plugins via createApp and FlatRoutes in App.tsx is under consideration.",
    options: [
      { id: 'A', text: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`." },
      { id: 'B', text: "Execute imperative DOM queries from backend database workers to render client buttons." },
      { id: 'C', text: "Hardcode all UI components into a single massive index.html file." },
      { id: 'D', text: "Embed separate iframe elements for every external team website with no shared routing." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Import modular frontend plugin packages and register their routable extension components inside `createApp` and `FlatRoutes` in `App.tsx`. Backstage frontends are assembled using `createApp` where plugins export routable extension components (e.g., `CatalogIndexPage`, `ScaffolderPage`). These extensions are mounted declaratively within `FlatRoutes` inside `App.tsx`.",
    referenceUrl: "https://backstage.io/docs/plugins/composability",
    tags: ["Frontend Architecture", "Frontend Architecture", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-261",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "New Backend System and createBackend: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates New Backend System to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Modular dependency injection runtime using createBackend and add(import(...)) is under consideration.",
    options: [
      { id: 'A', text: "Manually instantiate hundreds of raw Express routers inside a single procedural callback." },
      { id: 'B', text: "Deploy separate independent virtual machines for every backend helper utility." },
      { id: 'C', text: "Remove the Node.js backend entirely and connect the browser directly to PostgreSQL." },
      { id: 'D', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System", "New Backend System", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-262",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "New Backend System and createBackend: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates New Backend System to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Modular dependency injection runtime using createBackend and add(import(...)) is under consideration.",
    options: [
      { id: 'A', text: "Deploy separate independent virtual machines for every backend helper utility." },
      { id: 'B', text: "Remove the Node.js backend entirely and connect the browser directly to PostgreSQL." },
      { id: 'C', text: "Manually instantiate hundreds of raw Express routers inside a single procedural callback." },
      { id: 'D', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System", "New Backend System", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-263",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "New Backend System and createBackend: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates New Backend System to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Modular dependency injection runtime using createBackend and add(import(...)) is under consideration.",
    options: [
      { id: 'A', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." },
      { id: 'B', text: "Deploy separate independent virtual machines for every backend helper utility." },
      { id: 'C', text: "Remove the Node.js backend entirely and connect the browser directly to PostgreSQL." },
      { id: 'D', text: "Manually instantiate hundreds of raw Express routers inside a single procedural callback." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System", "New Backend System", "Security And Governance"]
  },
  {
    id: "cncf-cba-264",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "New Backend System and createBackend: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates New Backend System to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Modular dependency injection runtime using createBackend and add(import(...)) is under consideration.",
    options: [
      { id: 'A', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." },
      { id: 'B', text: "Remove the Node.js backend entirely and connect the browser directly to PostgreSQL." },
      { id: 'C', text: "Manually instantiate hundreds of raw Express routers inside a single procedural callback." },
      { id: 'D', text: "Deploy separate independent virtual machines for every backend helper utility." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System", "New Backend System", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-265",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "New Backend System and createBackend: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates New Backend System to modernize backend plugin registration to eliminate boilerplate Express wiring and enable automated dependency injection.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Modular dependency injection runtime using createBackend and add(import(...)) is under consideration.",
    options: [
      { id: 'A', text: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`." },
      { id: 'B', text: "Remove the Node.js backend entirely and connect the browser directly to PostgreSQL." },
      { id: 'C', text: "Deploy separate independent virtual machines for every backend helper utility." },
      { id: 'D', text: "Manually instantiate hundreds of raw Express routers inside a single procedural callback." }
    ],
    correctAnswers: ['A'],
    type: "single",
    explanation: "Initialize the server using `createBackend()` and register plugins and services declaratively using `backend.add(import(...))`. The Backstage New Backend System replaces legacy `index.ts` wiring with `createBackend()`. Plugins and core services export modular backend feature definitions that are registered via `backend.add(...)`, automatically resolving dependencies via the service container.",
    referenceUrl: "https://backstage.io/docs/backend-system/",
    tags: ["New Backend System", "New Backend System", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-266",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Multi-Environment Configuration System: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Configuration System to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? Hierarchical configuration loading with app-config.yaml and environment variable substitution is under consideration.",
    options: [
      { id: 'A', text: "Store portal configuration across thousands of disconnected unversioned text files on local developer laptops." },
      { id: 'B', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." },
      { id: 'C', text: "Hardcode database root passwords in plaintext inside client-side React component files." },
      { id: 'D', text: "Commit unencrypted production secrets directly to public Git repositories." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System", "Config System", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-267",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Multi-Environment Configuration System: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Configuration System to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? Hierarchical configuration loading with app-config.yaml and environment variable substitution is under consideration.",
    options: [
      { id: 'A', text: "Commit unencrypted production secrets directly to public Git repositories." },
      { id: 'B', text: "Store portal configuration across thousands of disconnected unversioned text files on local developer laptops." },
      { id: 'C', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." },
      { id: 'D', text: "Hardcode database root passwords in plaintext inside client-side React component files." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System", "Config System", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-268",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Multi-Environment Configuration System: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Configuration System to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? Hierarchical configuration loading with app-config.yaml and environment variable substitution is under consideration.",
    options: [
      { id: 'A', text: "Store portal configuration across thousands of disconnected unversioned text files on local developer laptops." },
      { id: 'B', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." },
      { id: 'C', text: "Commit unencrypted production secrets directly to public Git repositories." },
      { id: 'D', text: "Hardcode database root passwords in plaintext inside client-side React component files." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System", "Config System", "Security And Governance"]
  },
  {
    id: "cncf-cba-269",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Multi-Environment Configuration System: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Configuration System to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? Hierarchical configuration loading with app-config.yaml and environment variable substitution is under consideration.",
    options: [
      { id: 'A', text: "Store portal configuration across thousands of disconnected unversioned text files on local developer laptops." },
      { id: 'B', text: "Hardcode database root passwords in plaintext inside client-side React component files." },
      { id: 'C', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." },
      { id: 'D', text: "Commit unencrypted production secrets directly to public Git repositories." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System", "Config System", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-270",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Multi-Environment Configuration System: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Configuration System to define environment-specific database credentials and base URLs across development, staging, and production clusters safely.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? Hierarchical configuration loading with app-config.yaml and environment variable substitution is under consideration.",
    options: [
      { id: 'A', text: "Store portal configuration across thousands of disconnected unversioned text files on local developer laptops." },
      { id: 'B', text: "Hardcode database root passwords in plaintext inside client-side React component files." },
      { id: 'C', text: "Commit unencrypted production secrets directly to public Git repositories." },
      { id: 'D', text: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Layer `app-config.yaml` with environment files like `app-config.production.yaml` and resolve sensitive credentials via `${SECRET_ENV_VAR}`. Backstage employs `@backstage/config` to merge hierarchical YAML configuration files (e.g., `app-config.yaml` overridden by `app-config.production.yaml`). Secrets are securely injected using environment variable syntax `${SECRET_NAME}` at runtime.",
    referenceUrl: "https://backstage.io/docs/conf/",
    tags: ["Configuration System", "Config System", "Resilience And Operations"]
  },
  {
    id: "cncf-cba-271",
    difficulty: "hard",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Authentication and Sign-In Providers: Enterprise Portal",
    scenario: "An enterprise developer experience team is architecting an internal developer portal to standardize service catalogs, software scaffolding, and documentation across hundreds of teams. The platform engineer evaluates Authentication & Identity to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which architectural approach or Backstage configuration satisfies these enterprise portal objectives? User identity resolution via OAuth/OIDC providers and Backstage IdentityClient is under consideration.",
    options: [
      { id: 'A', text: "Require developers to share a single hardcoded master administrative password." },
      { id: 'B', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." },
      { id: 'C', text: "Disable SSL/TLS and transmit credentials over plaintext HTTP." },
      { id: 'D', text: "Bypass authentication by granting all anonymous visitors root cluster admin access." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity", "Authentication", "Enterprise Portal"]
  },
  {
    id: "cncf-cba-272",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Authentication and Sign-In Providers: High Scale Catalog",
    scenario: "A large engineering organization manages tens of thousands of microservices, APIs, and infrastructure components across hybrid cloud environments. The platform engineer evaluates Authentication & Identity to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which Backstage catalog pattern or ingestion configuration handles this volume efficiently while preventing database contention? User identity resolution via OAuth/OIDC providers and Backstage IdentityClient is under consideration.",
    options: [
      { id: 'A', text: "Bypass authentication by granting all anonymous visitors root cluster admin access." },
      { id: 'B', text: "Require developers to share a single hardcoded master administrative password." },
      { id: 'C', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." },
      { id: 'D', text: "Disable SSL/TLS and transmit credentials over plaintext HTTP." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity", "Authentication", "High Scale Catalog"]
  },
  {
    id: "cncf-cba-273",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Authentication and Sign-In Providers: Security And Governance",
    scenario: "A platform security auditor requires strict role-based access control, cryptographic service communication, and audit logging across the internal developer portal. The platform engineer evaluates Authentication & Identity to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which Backstage security mechanism or configuration satisfies these compliance controls? User identity resolution via OAuth/OIDC providers and Backstage IdentityClient is under consideration.",
    options: [
      { id: 'A', text: "Bypass authentication by granting all anonymous visitors root cluster admin access." },
      { id: 'B', text: "Require developers to share a single hardcoded master administrative password." },
      { id: 'C', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." },
      { id: 'D', text: "Disable SSL/TLS and transmit credentials over plaintext HTTP." }
    ],
    correctAnswers: ['C'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity", "Authentication", "Security And Governance"]
  },
  {
    id: "cncf-cba-274",
    difficulty: "easy",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Authentication and Sign-In Providers: Developer Onboarding",
    scenario: "A platform engineering team is establishing Golden Path templates and automated scaffolding workflows to accelerate developer onboarding and eliminate delivery friction. The platform engineer evaluates Authentication & Identity to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which Backstage scaffolder practice or template feature enables developers to self-serve new projects safely? User identity resolution via OAuth/OIDC providers and Backstage IdentityClient is under consideration.",
    options: [
      { id: 'A', text: "Require developers to share a single hardcoded master administrative password." },
      { id: 'B', text: "Disable SSL/TLS and transmit credentials over plaintext HTTP." },
      { id: 'C', text: "Bypass authentication by granting all anonymous visitors root cluster admin access." },
      { id: 'D', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." }
    ],
    correctAnswers: ['D'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity", "Authentication", "Developer Onboarding"]
  },
  {
    id: "cncf-cba-275",
    difficulty: "medium",
    certId: "cncf-cba",
    domainId: "d1",
    domainName: "Backstage Architecture and Core Concepts",
    title: "Backstage Authentication and Sign-In Providers: Resilience And Operations",
    scenario: "A site reliability engineering team is operating Backstage on Kubernetes and optimizing system resilience, health monitoring, and documentation publishing pipelines. The platform engineer evaluates Authentication & Identity to authenticate enterprise developers securely using corporate Okta or GitHub SSO while establishing a portal identity.",
    question: "Which operational design or plugin architecture guarantees high availability and reliable portal performance? User identity resolution via OAuth/OIDC providers and Backstage IdentityClient is under consideration.",
    options: [
      { id: 'A', text: "Bypass authentication by granting all anonymous visitors root cluster admin access." },
      { id: 'B', text: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities." },
      { id: 'C', text: "Require developers to share a single hardcoded master administrative password." },
      { id: 'D', text: "Disable SSL/TLS and transmit credentials over plaintext HTTP." }
    ],
    correctAnswers: ['B'],
    type: "single",
    explanation: "Configure an auth provider (e.g., `github` or `okta`) in `app-config.yaml` and implement a `SignInPage` that maps external tokens to Backstage User entities. Backstage supports federated authentication providers (GitHub, Okta, Google, Microsoft, OIDC). During login, the auth provider verifies the external identity and a sign-in resolver maps the identity to an internal Backstage Catalog `User` entity ref.",
    referenceUrl: "https://backstage.io/docs/auth/",
    tags: ["Authentication & Identity", "Authentication", "Resilience And Operations"]
  }
];

export default CNCF_CBA_QUESTIONS_11;
